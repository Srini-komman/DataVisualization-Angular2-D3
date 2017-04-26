import { Component, Input, OnInit } from '@angular/core';
import { Stock } from './shared/data';
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
	private percentage: number;
	private xpos: number;
	private x: any;
	private y: any;
	private svg: any;
	private svgbubble: any;
	private line: d3Shape.Line<[number, number]>;
  
	constructor() {
		this.width = 900 ;
		this.height = 120;
	}
	ngOnInit() {
		this.renderBubbleChart(this.dataStock)
	}
	public renderBubbleChart(data) {
		this.initSvg(this.width, this.height);
		this.initAxis();
		this.drawAxis();
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
	private initAxis() {
		this.x = d3Scale.scaleLinear().range([0, this.width]);
		this.y = d3Scale.scaleLinear().range([this.height, 0]);
		this.x.domain([-100, 100]);
		this.y.domain([-100, 100]);
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
	}
	private drawAxis() {
		this.svg.append("g")
			  .attr("class", "axis axis--x")
			  .attr("transform", "translate(0," + this.height + ")")
			  .call(d3Axis.axisBottom(this.x));
			  
		this.svg.append("g")
			  .attr("class", "axis axis--y")
			  .call(d3Axis.axisLeft(this.y))
	}   
	private drawCircle(cx, cy, radius) {
		var start:number = this.dataStock[0].value, 
		end:number = this.dataStock[this.dataStock.length-1].value;

		this.percentage = (1 - (start/end)) * 100;
		this.xpos = (this.width/100) * Math.abs(this.percentage);
		var circleLabel = parseFloat(Math.round(this.percentage)).toFixed(2);
		var data = [
				{"cx":this.xpos, "label":circleLabel}
		];
		  
		var elem = this.svg.selectAll("g myCircleText")
						.data(data);
		var elemEnter = elem.enter()
						  .append("g")
						  .attr("class", "node-group")
						  .attr("transform", function(d) {
									return "translate(" + 0 + ",0)"
								});
									
		var rectangle = elemEnter.append('rect')
			.attr("rx", function (d) { return d.cx; })
			.attr("ry", function (d) { return d.cx; })
			.attr("x", function (d) { return d.cx-40; })
			.attr("width", (radius*2) + 50)
			.attr("y", 0)
			.attr("height", cy*2)
			.attr("class", "bubble-rectangle");
			
		/*Create the circle */	
		var circle = elemEnter.append("circle")
			.attr("cx", function (d) { return d.cx; })
			.attr("cy", cy)
			.attr("r", radius )
			.attr("class", "circle");
			
		/* Create the text */
		elemEnter.append("text")
			.attr("dx", function(d){return d.cx-25})
			.attr("dy", function(d){return cy+5})
			.text(function(d){return d.label + "%"});
		
	}
	private getxPosition(d) 
	{        
		return d3Axis.axisBottom(this.x)
	}
	private drawGridLines()
	{
		this.svg.append("g")			
			.attr("class", "grid")
			.attr("transform", "translate(0," + this.height + ")")
			.call(this.make_x_gridlines()
				.tickSize(-this.height)
				.tickFormat("")
			)
		this.svg.append("g")			
			.attr("class", "grid")
			.call(this.make_y_gridlines()
				.tickSize(-this.width)
				.tickFormat("")
		  )
	}
	private make_x_gridlines() {        
		return d3Axis.axisBottom(this.x)     
	}
	private make_y_gridlines() {        
		return d3Axis.axisLeft(this.y) 
	}
}
