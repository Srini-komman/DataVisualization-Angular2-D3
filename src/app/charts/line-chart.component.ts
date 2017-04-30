import {Component, Input, OnInit, 
        trigger, state, style, transition, animate, keyframes} from '@angular/core';
import {Stock} from '../shared/data';
import {SharedService} from '../services/shared.service';
import {DataVisualizationService} from '../services/data-visualization.service';
import { Subscription } from 'rxjs/Subscription';
import {routerTransition} from '../animations/router-Transition.animation';
import * as d3 from 'd3';

@Component({
  selector: 'cba-line-chart',
  templateUrl: 'line-chart.component.html',
	animations:[
		routerTransition()
	],
	host: {
     '[@routerChartTransition]': 'true',
     '[style.display]': "'block'",
     '[style.position]': "'absolute'"
   }
})

export class LineChartComponent implements OnInit{
	@Input() dataStock : Stock[] = [];
	private margin = {top: 20, right: 20, bottom: 30, left: 50};
	private width: number;
	private height: number;
	private x: any;
	private y: any;
	private svg: any;
	private svgbubble: any;
	private sharedService: SharedService;
	private dataVisualizationService: DataVisualizationService
	private subscription: Subscription;
	
	constructor(sharedService: SharedService, dataVisualizationService: DataVisualizationService) {
		this.sharedService = sharedService;
		this.width = 440; //- this.margin.left - this.margin.right ;
		this.height = 200; //- this.margin.top - this.margin.bottom;
		this.dataVisualizationService = dataVisualizationService;
	}
	ngOnInit() {
	    this.dataStock = this.dataVisualizationService.getData();
		this.renderLineChart(this.dataStock)
		this.subscription = this.sharedService.getChartOpacity()
								.subscribe((opacity:any) => this.svg.attr('opacity', opacity));
		this.subscription = this.sharedService.getChartData()
								.subscribe((data:Stock[]) => this.renderLineChart(data));
	}
	ngOnDestroy() {
        // unsubscribe to ensure no memory leaks
        this.subscription.unsubscribe();
    }
	public renderLineChart(data:any) {
	    this.dataStock = data;
		this.initSvg(this.width, this.height)
		this.initAxis(data);
		this.drawPath(data);
		this.drawAxis(data);
		this.drawLine(data);
		this.drawDots(data)
		this.drawGridLines();
	}
	public setChartOpacity(opacity:number)
	{
		this.svg.attr('opacity', opacity);
	}
	private initSvg(width:number, height:number) {
		d3.select('#linechart svg').remove();
		this.svg = d3.select("#linechart")
					 .append("svg")
					 .style("width", 900)
					 .style("height", 550)
					 .style("opacity", 1);
					
		 this.svg = d3.select('#linechart svg').append("g")
					 .attr("transform", "translate(" + this.margin.left + "," + this.margin.top + ")");
	}
	private initAxis(data: Stock[]) {
		this.x = d3.scaleTime().range([0, this.width]);
		this.y = d3.scaleLinear().range([this.height, 0]);
		this.x.domain(d3.extent(data, (d:Stock) => d.date ));
		this.y.domain(d3.extent(data, (d:Stock) => d.value ));
	}
	private drawAxis(data: Stock[]) {
	    var yaxis:any = d3.axisLeft(this.y);
		var xaxis:any = d3.axisBottom(this.x);
		xaxis.tickSize(0);
		xaxis.ticks(data.length);
		xaxis.tickFormat(d3.timeFormat("%m/%y"));
		this.svg.append("g")
			  .attr("class", "axis axis--x")
			  .attr("transform", "translate(0," + this.height + ")")
			  .call(xaxis);

		yaxis.tickFormat(function(d:any){return "$" + d3.format("0.1s")(d)});
		yaxis.tickSize(0);
		yaxis.ticks(1);
		
		this.svg.append("g")
			  .attr("class", "axis axis--y")
			  .call(yaxis)
			  .append("text")
			  .attr("class", "axis-title")
			  .attr("transform", "rotate(-90)")
			  .attr("y", 6)
			  .attr("dy", ".71em")
			  .style("text-anchor", "end")
	}
	private make_x_gridlines() {        
		return d3.axisBottom(this.x)		 
	}
	private make_y_gridlines() {        
		return d3.axisLeft(this.y)		 
	}
	private drawGridLines()
	{
		this.svg.append("g")			
			.attr("class", "grid")
			.attr("transform", "translate(0," + this.height + ")")
			.call(this.make_x_gridlines()
				.tickSize(-this.height)
			)
		this.svg.append("g")			
			.attr("class", "grid")
			.call(this.make_y_gridlines()
				.tickSize(-this.width)
			)
	}
	
	private drawPath(data: Stock[]) {	
		var area = d3.area()
					  .x( (d: any) => this.x(d.date))
					  .y0(this.height)
					  .y1( (d: any) => this.y(d.value));
						  
		// add the area
		this.svg.append("path")
		   .data([data])
		   .attr("class", "area")
		   .attr("d", area);
	}
	private drawLine(data:any) {	
		var line = d3.line()
					   .x( (d: any) => this.x(d.date))
					   .y( (d: any) => this.y(d.value));

		this.svg.append("path")
				.datum(data)
				.attr("class", "line")
				.attr("d", line);
	}
	private drawDots(data: any) {	
		this.svg.selectAll("dot")
			.data(data)
			.enter()
			.append("circle")
			.attr("class", "line-char-dot")
			.attr("r", 5)
			.attr("cx", (d: Stock) => this.x(d.date))
			.attr("cy", (d: Stock) => this.y(d.value))
	}
	
}
