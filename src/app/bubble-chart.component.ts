import { Component, Input, OnInit } from '@angular/core';
import { Stock } from './shared/data';
import {SharedService} from './shared/shared.service';
import * as d3 from 'd3-selection';
import * as d3Scale from "d3-scale";
import * as d3Shape from "d3-shape";
import * as d3Array from "d3-array";
import * as d3Axis from "d3-axis";
import * as d3Drag from "d3-drag";

@Component({
	selector: 'cba-bubble-chart',
	template: `
	<div id="bubblechart" class="bubble-chart">`,
})

export class BubbleChartComponent implements OnInit {
	// input data
	@Input() dataStock : Stock[] = [];
	private margin = {top: 20, right: 20, bottom: 30, left: 50};
	private width: number;
	private height: number;
	private offset: number = 20;
	private x: any;
	private y: any;
	private svg: any;
	private svgbubble: any;
	private line: d3Shape.Line<[number, number]>;
  
	constructor(sharedService: SharedService) {
		this.sharedService = sharedService;
		this.width = 900 ;
		this.height = 120;
	}
	ngOnInit() {
		this.renderBubbleChart(this.dataStock)
		this.subscription = this.sharedService.getSVGOpacity()
								.subscribe(opacity => this.svg.attr('opacity', opacity));
	}
	public renderBubbleChart(data) {
		this.initSvg(this.width, this.height);
		this.drawCircle(this.height/2, this.height/2,  Math.floor(this.height/2));
		this.drawLines();
	}
	private initSvg(width, height) {
		d3.select('#bubblechart svg').remove();
		this.svg = d3.select("#bubblechart")
					 .append("svg")
					 .attr("class", "svgBubble")
					 .style("width", width)
					 .style("height", height);
	}
	
	private drawLines()
	{
		//draw the x-axis line
		this.svg.append('line')
		.attr("x1", 0)
		.attr("y1", this.height/2)
		.attr("x2", this.width)
		.attr("y2", this.height/2)
		.attr("class", "axis-line");
			
		//y-axis line
		this.svg.append('line')
		.attr("x1", this.width/2)
		.attr("y1", 0)
		.attr("x2", this.width/2)
		.attr("y2", this.height)
		.attr("class", "axis-line")
		.style("stroke-dasharray", ("2, 2"))
	}
	private drawCircle(cx, cy, radius) {
		var start:number = this.dataStock[0].value, 
		end:number = this.dataStock[this.dataStock.length-1].value,
		percentage:number = (1 - (start/end)) * 100,
		circlePosition:number = percentage >= 0 ? 326 : 448;
		
		var circleLabel = parseFloat(Math.round(percentage)).toFixed(2);
		var circleElements = this.svg
							  .append("g")
							  .attr("class", "node-group")
							  .attr("transform", function(d) {
										return "translate(" + circlePosition + ",0)"
									});
		var rectangle = circleElements.append('rect')
			.attr("rx", cx )
			.attr("ry", cx )
			.attr("width", (radius*2) + 50)
			.attr("y", 0)
			.attr("height", cy*2)
			.attr("class", "bubble-rectangle");
		percentage < 0 ? rectangle.attr("x", -80) : rectangle.attr("x", cx-40)
		
			
		/*Create the circle */	
		var circle = circleElements.append("circle")
			.attr("cx", cx)
			.attr("cy", cy)
			.attr("r", radius )
			.attr("class", "circle");
			
		/* Create the text */
		circleElements.append("text")
			.attr("dx", cx-25)
			.attr("dy", cy+5)
			.attr("class", "circle-label")
			.text( circleLabel + "%");
		
	}
	
}
