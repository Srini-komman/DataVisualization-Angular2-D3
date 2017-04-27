import {Component, OnInit, 
        trigger, state, style, transition, animate, keyframes} from '@angular/core';
import {DatePipe} from '@angular/common';
import {Stocks, Stock} from './shared/data';
import {LineChartComponent} from './charts/line-chart.component';
import {BubbleChartComponent} from './charts/bubble-chart.component';

@Component({
  selector: 'app-root',
  template: `
	<div id="content" >
		<div class="time-line-host">
			<cba-time-line-slider [dataStock]="dataStock" [dataStockFiltered]="dataStock" [selectedChartType]="selectedChart"></cba-time-line-slider>
		</div>
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
	</div>`,
	animations:[
		trigger('focusPanel12', [
			state('inactive', style({
				transform: 'scale(1)'
			})),
			state('active', style({
				transform: 'scale(1.1)'
			})),
			transition('inactive => active', animate('100ms ease-in')),
			transition('active => inactive', animate('100ms ease-out'))
		])
	],
	providers: [DatePipe]
})

export class AppComponent{
	state: string = "inactive";
	dataStock: Stock[] = Stocks;
	dataStockFiltered: Stock[] = Stocks; 		
	constructor(public datePipe: DatePipe) {
	}
	toggleUp(){
		this.state = "active";
	}
	toggleDown(){
		this.state = "inactive";
	}
	
	ngOnInit() {
		// Settig default chart for initial page load only
		this.selectedChart = "Bubble Chart";
	}
}
