import {Component, ViewChild, Input, OnInit, Injectable, ChangeDetectorRef} from '@angular/core';
import {SharedService} from '../services/shared.service';
import {DataVisualizationService} from '../services/data-visualization.service';
import {DatePipe } from '@angular/common';

//D3 v4
import * as d3 from "d3";
//import * as d3Drag from "d3-drag";
import {Stock} from '../shared/data';

@Component({
  selector: 'cba-time-line-slider',
  templateUrl: 'time-line-slider.component.html',
  providers: [DatePipe]
})

export class TimeLineComponent implements OnInit {
	// input data
	@Input() dataStock : Stock[] = [];
	@Input() dataStockFiltered: Stock[];
	@Input() selectedChartType:string;
	private dateFormatter: DatePipe;
	private sharedService: SharedService;
	private dataVisualizationService: DataVisualizationService;
	
	//constructor for injecting dependencies
	constructor(public datePipe: DatePipe, private ref: ChangeDetectorRef, 
				sharedService: SharedService, dataVisualizationService: DataVisualizationService) {
		this.dateFormatter = datePipe;
		this.sharedService = sharedService;
		this.dataVisualizationService = dataVisualizationService;
	}
	ngOnInit() {
		this.dataStock = this.dataVisualizationService.getData();
		this.renderSlider(this.dataStock, this.settings, this.updateChart.bind(this), this.dateFormatter);
		this.dataStockFiltered = this.dataStock;
	}
	//Settings
	private settings = function() {
		var margins = {
		  top: 10,
		  bottom: 40,
		  left: 150,
		  right: 100
		};
		var dim = {
		  width: 850,
		  height: 50
		};
		return {
		  margins: margins,
		  dim: dim
		};
	}();
	private updateChart = function()
	{
		var callback = function(process:any, dstart:any, dend:any) {
			if (process === 'dragend') {  
				this.dataStockFiltered = this.dataStock.filter(function(d:Stock){
																return d.date >= dstart.value && d.date <= dend.value});
				this.sharedService.setChartData(this.dataStockFiltered);
				this.sharedService.setChartOpacity(1);
			}
			else if (process === 'dragstart') {
				this.sharedService.setChartOpacity(0.5)
			}
		}
		return callback;
	}();

	//Slider implementation
	private renderSlider = function(dataset:Stock[], settings:any, callback:any, dateFormatter: DatePipe) {
		var RangeSlider:any = function(svg:any, width:number, radius:number, color:string, translater:any, callback:any, dateFormatter:DatePipe):void {
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
							.attr("fill", settings.color);

			//build the handles
			elements.elmin = svg.append('ellipse')
								.style("cursor", 'pointer')
								.attr("cx", settings.min)
								.attr("cy", settings.radius)
								.attr("rx", settings.radius)
								.attr("ry", settings.radius)
								.attr("fill", settings.color);
				  
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
								.attr("fill", settings.color);

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
	  var runCallback:any = function(process:any) {
		  if (self.settings.callback) {
			self.settings.callback.apply(self, [
			  process,
			  self.settings.datetranslater.apply(self, [self.elements.min.value]),
			  self.settings.datetranslater.apply(self, [self.elements.max.value])
			]);
		  }
		};

	  self.move = function(self) {
		var api:any = {
			min,
			max
		};

		var resetBar = function(x:number, width:number) {
		  self.elements.bar
			.attr("x", Math.max(x - self.settings.offset, 0))
			.attr("width", Math.max(width, 0));
		};
		
		api.min = function(x:number) {
			if (x >= self.settings.min && x <= self.elements.max.value) {
				self.elements.min.value = x;
				self.elements.elmin.attr("cx", x);
				self.elements.minText.attr("x", x).text(self.settings.translater.apply(self, [x]).text);
				resetBar(x, self.elements.max.value - x);            
				runCallback('move');
			}
			return self;  
		};
		api.max = function(x:number) {
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

	  self.dragstart = function(self:any) {
		var api:any = {
			min,
			max
		};      

		var render:any = function(element:any, text:any) {
			text.attr("fill-opacity", self.settings.full);
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
		var api:any = {
			min,
			max
		};

		var render:any = function() {
			runCallback('dragend');
		}
		api.min = function() { 
			render();
			return self;
		};
		api.max = function() { 
			render();
			return self;
		};
		return api;      
	  }(self);
	  
	  return self;
	};
			
	var min:any = dataset[0].date,
		max = dataset[dataset.length-1],
		handles = {
		size: 8
	};
			
	var timeScale:any = d3.scaleTime()
							.domain(d3.extent(dataset, (d:Stock) => d.date ))
							.range([0, settings.dim.width]);
	

	//setup the svg container for time line slider
	  var svg:any = d3.select('#timelineslider')
					.append('svg')
					.attr("width", settings.dim.width + settings.margins.left + settings.margins.right)
					.attr("height", 50);
			
	  var g:any = svg.append("g")
					.attr("class", "x-axis")
					.attr("transform", "translate(" + settings.margins.left + "," + settings.margins.top + ")")
		
	var xaxis:any = d3.axisBottom(timeScale);
			xaxis.tickSize(4);
			xaxis.ticks(dataset.length);
			xaxis.tickFormat(d3.timeFormat("%b-%Y"));
			svg.append("g")
				  .attr("class", "axislightgrey")
				  .attr("transform", "translate(" + settings.margins.left +"," + 21 + ")")
				  .call(xaxis);
	
	var xaxisTop:any = d3.axisTop(timeScale);
			xaxis.tickSize(-1);
			xaxis.ticks(dataset.length);
			xaxis.tickFormat(d3.timeFormat("%b-%Y"));
			var axisElements = svg.append("g")
				  .attr("class", "axislightgrey")
				  .attr("transform", "translate(" + settings.margins.left +"," + 15 + ")")
				  .call(xaxisTop);
		    axisElements.selectAll("text").remove()
		
	var translater:any = function(timeScale:any) {
		return function(x:any) {
		var ret = {
			  x: x,
			  text: dateFormatter.transform(timeScale.invert(x), 'MMM-y') 
			};
		return ret;
	};
	}(timeScale);
	var datetranslater:any = function(timeScale:any) {
		return function(x:any) {
			var ret = {
				  x: x,
				  value: new Date(timeScale.invert(x))
				};
			return ret;
		};
	}(timeScale);
	var slider:any = <any>(new RangeSlider(g, settings.dim.width, handles.size, 'yellow', translater, callback, dateFormatter));
	
	//setup handle dragging 
	slider.elements.elmin.call(d3.drag()
		.on("start", slider.dragstart.min)
		.on("drag", function() { 
		   slider.move.min(d3.event.x);
		 })
		.on("end", slider.dragend.min));
	slider.elements.elmax.call(d3.drag()
		.on("start", slider.dragstart.max)
		.on("drag", function() { 
		   slider.move.max(d3.event.x);
		 })
		.on("end", slider.dragend.max));

	}

}
