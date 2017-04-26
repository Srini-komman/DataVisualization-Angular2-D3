import { Component, ViewChild, Input, OnInit, Injectable, ChangeDetectorRef } from '@angular/core';
import { DatePipe } from '@angular/common';
import {LineChartComponent} from './line-chart.component';
import {BubbleChartComponent} from './bubble-chart.component';
import * as d3 from 'd3-selection';
import * as d3Scale from "d3-scale";
import * as d3Shape from "d3-shape";
import * as d3Array from "d3-array";
import * as d3Axis from "d3-axis";
import * as d3Drag from "d3-drag";
import { Stock } from './shared/data';

@Component({
  selector: 'cba-time-line-slider',
  template: `
	<div id="controllers"></div>
	<div class="chartOptionsroot">
		<label for="chartOptions">Chart Type</label>
		<select id="chartOptions" [(ngModel)]="selectedChart" class="chartOptions">
			<option>Line Chart</option>
			<option>Bubble Chart</option>
		</select> 
	</div>
	<div [ngSwitch]="selectedChart">
		<div class="bubble-chart-host">
			<cba-bubble-chart *ngSwitchCase="'Bubble Chart'" [dataStock]="dataStockFiltered"></cba-bubble-chart>
		</div>
		<div class="line-chart-host">
			<cba-line-chart *ngSwitchCase="'Line Chart'" [dataStock]="dataStockFiltered"></cba-line-chart>
			<cba-line-chart *ngSwitchDefault [dataStock]="dataStockFiltered"></cba-line-chart>
		</div>
	</div>
	`,
  providers: [DatePipe]
})

export class TimeLineComponent implements OnInit {
	// input data
	@Input() dataStock : Stock[] = [];
	@Input() dataStockFiltered: Stock[];
	private dateFormatter: DatePipe;
	constructor(public datePipe: DatePipe, private ref: ChangeDetectorRef) {
		this.dateFormatter = datePipe;
	}
	@ViewChild(LineChartComponent) lineChart: LineChartComponent;
	private updateLineChart = function(dataset) {
		this.lineChart.renderLineChart(dataset);
	}
	@ViewChild(BubbleChartComponent) bubbleChart: BubbleChartComponent;
	private updateBubbleChart = function(dataset) {
		this.bubbleChart.renderBubbleChart(dataset);
	}
	ngOnInit() {
		this.renderSlider(this.dataStock, this.settings, this.updateChart.bind(this), this.dateFormatter);
		this.dataStockFiltered = this.dataStock;
	}
	// *** SETTINGS *** //
	private settings = function() {
		var margins = {
		  top: 10,
		  bottom: 40,
		  left: 40,
		  right: 100
		};
		var dim = {
		  width: 850,
		  height: 20
		};
		return {
		  margins: margins,
		  dim: dim
		};
	}();
	private updateChart = function()
	{
		var callback = function(process, dstart, dend) {
		if (process === 'dragend') {  
			this.dataStockFiltered = this.dataStock.filter((data) => data.date >= dstart.value && data.date <= dend.value);
			if(this.selectedChart == "Line Chart")
			{
				this.updateLineChart(this.dataStockFiltered);
			}
			if(this.selectedChart == "Bubble Chart")
			{
				this.updateBubbleChart(this.dataStockFiltered);
			}
		  }
		}
		return callback;
	}();

	//Slider implementation
	private renderSlider = function(dataset, settings, callback, dateFormatter) {
		var RangeSlider = function(svg, width, radius, color, translater, callback, dateFormatter) {
			var self = this,
			elements = {
			min: { value: 0 },
			max: { value: width },
			elmin:{},
			elmax:{},
			bar:{},
			minText:{},
			maxText:{}
			},
			settings = {
			min: 0,
			max: width,
			radius: radius,
			offset: Math.floor(radius/2),        
			color: color,
			opacity: {
			  full: 1.0,
			  medium: 0.8,
			  half: 0.5,
			  light: 0.3
			},
			translater: translater,
			datetranslater: datetranslater,
			callback: callback
			};

			//build the bar
			elements.bar = svg.append('rect')
							.attr("x", settings.offset)
							.attr("width", settings.max - (settings.offset*2))
							.attr("y", settings.offset)
							.attr("height", settings.radius)
							.attr("fill", settings.color)
							.attr("fill-opacity", settings.opacity.half);

			//build the handles
			elements.elmin = svg.append('ellipse')
								.style("cursor", 'pointer')
								.attr("cx", settings.min)
								.attr("cy", settings.radius)
								.attr("rx", settings.radius)
								.attr("ry", settings.radius)
								.attr("fill", settings.color)
								.attr("fill-opacity", settings.opacity.medium);
				  
			elements.minText = svg.append('text')
								.attr("x", settings.min)
								.attr("y", settings.radius*3 + settings.offset)
								.attr("fill", "black")
								.attr("fill-opacity", settings.opacity.medium)
								.attr("text-anchor", "middle")
								.text(settings.translater.apply(self,[settings.min]).text);

			elements.elmax = svg.append('ellipse')
								.style("cursor", "pointer")
								.attr("cx", settings.max)
								.attr("cy", settings.radius)
								.attr("rx", settings.radius)
								.attr("ry", settings.radius)
								.attr("fill", settings.color)
								.attr("fill-opacity", settings.opacity.medium);

			elements.maxText = svg.append('text')
								.attr("x", settings.max)
								.attr("y", settings.radius*3 + settings.offset)
								.attr("fill", "black")
								.attr("fill-opacity", settings.opacity.medium)
								.attr("text-anchor", "middle")
								.text(settings.translater.apply(self,[settings.max]).text);

			//expose as public properties
			self.elements = elements;
			self.settings = settings;

			//setup additional methods
			self.init(); 
		};

	RangeSlider.prototype.init = function() {
	  var self = this,
		  api = {};
	  var runCallback = function(process) {
		  if (self.settings.callback) {
			self.settings.callback.apply(self, [
			  process,
			  self.settings.datetranslater.apply(self, [self.elements.min.value]),
			  self.settings.datetranslater.apply(self, [self.elements.max.value])
			]);
		  }
		};

	  self.move = function(self) {
		var api = {
			min,
			max
		};

		var resetBar = function(x, width) {
		  self.elements.bar
			.attr("x", Math.max(x - self.settings.offset, 0))
			.attr("width", Math.max(width, 0));
		};
		
		api.min = function(x) {
			if (x >= self.settings.min && x <= self.elements.max.value) {
				self.elements.min.value = x;
				self.elements.elmin.attr("cx", x);
				self.elements.minText.attr("x", x).text(self.settings.translater.apply(self, [x]).text);
				resetBar(x, self.elements.max.value - x);            
				runCallback('move');
			}
			return self;  //chain-able
		};
		api.max = function(x) {
			if (x >= self.elements.min.value && x <= self.settings.max) {
				self.elements.max.value = x;
				self.elements.elmax.attr("cx", x);
				self.elements.maxText.attr("x", x).text(self.settings.translater.apply(self, [x]).text);
				resetBar(self.elements.min.value, x - self.elements.min.value);
				runCallback('move');
			}
		  return self;  //chain-able
		};
		return api;
	  }(self);

	  self.dragstart = function(self) {
		var api = {
			min,
			max
		};      

		var render = function(element, text) {
			element.attr("fill-opacity", self.settings.opacity.full);
			text.attr("fill-opacity", self.settings.full);
			self.elements.bar.attr("fill-opacity", self.settings.opacity.light); 
			runCallback('dragstart');
		}
		api.min = function() { 
			render(self.elements.elmin, self.elements.minText);
			return self;
		};
		api.max = function() { 
			render(self.elements.elmax, self.elements.maxText);
			return self;
		};
		return api;      
	  }(self);

	  self.dragend = function(self) {
		var api = {
			min,
			max
		};

		var render = function($element, $text) {
			$element.attr("fill-opacity", self.settings.opacity.medium);
			$text.attr("fill-opacity", self.settings.medium);
			self.elements.bar.attr("fill-opacity", self.settings.opacity.half);
			runCallback('dragend');
		}
		api.min = function() { 
			render(self.elements.elmin, self.elements.minText);
			return self;
		};
		api.max = function() { 
			render(self.elements.elmax, self.elements.maxText);
			return self;
		};
		return api;      
	  }(self);
	  
	  return self;
	};
			
	var min = dataset[0].date,
		max = dataset[dataset.length-1],
		handles = {
		size: 8
	};
			
	var timeScale = d3Scale.scaleTime() 
							.domain(d3Array.extent(dataset, (d) => d.date ))
							.range([0, settings.dim.width]);

	//setup the svg container for time line slider
	  var svg = d3.select('#controllers')
					.append('svg')
					.attr("width", settings.dim.width + settings.margins.left + settings.margins.right)
					.attr("height", 50);
			
	  var g = svg.append("g")
					.attr("class", 'x-axis')
					.attr("transform", 'translate(' + settings.margins.left + ',0)');     

	  //draw the axis
	  g.append('line')
		.attr("x1", 0)
		.attr("y1", handles.size)
		.attr("x2", settings.dim.width)
		.attr("y2", handles.size)
		.style("stroke", '#ccc')
		.style("stroke-width", 1)
	  
	var translater = function(timeScale) {
		return function(x) {
		var ret = {
			  x: x,
			  text: dateFormatter.transform(timeScale.invert(x), 'MMM-y') 
			};
		return ret;
	};
	}(timeScale);
	var datetranslater = function(timeScale) {
		return function(x) {
			var ret = {
				  x: x,
				  value: new Date(timeScale.invert(x))
				};
			return ret;
		};
	}(timeScale);
	var slider = new RangeSlider(g, settings.dim.width, handles.size, 'yellow', translater, callback, dateFormatter);
	
	//setup handle dragging 
	slider.elements.elmin.call(d3Drag["drag"]()
		.on("start", slider.dragstart.min)
		.on("drag", function() { 
		   slider.move.min(d3.event.x);
		 })
		.on("end", slider.dragend.min));
	slider.elements.elmax.call(d3Drag["drag"]()
		.on("start", slider.dragstart.max)
		.on("drag", function() { 
		   slider.move.max(d3.event.x);
		 })
		.on("end", slider.dragend.max));

	}

}
