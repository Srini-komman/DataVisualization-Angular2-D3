import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Stocks, Stock } from './shared/data';
import {LineChartComponent} from './line-chart.component';
import {BubbleChartComponent} from './bubble-chart.component';

@Component({
  selector: 'app-root',
  template: `
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
	</div>`,
	providers: [DatePipe]
})

export class AppComponent{
	dataStock: Stock[] = Stocks;
	dataStockFiltered: Stock[] = Stocks; 		
	constructor(public datePipe: DatePipe) {
		
	}
	ngOnInit() {
		// Settig default chart for initial page load only
		this.selectedChart = "Bubble Chart";
	}
}
