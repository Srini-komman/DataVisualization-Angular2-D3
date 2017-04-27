import {Component, OnInit, 
        trigger, state, style, transition, animate, keyframes} from '@angular/core';
import {DatePipe} from '@angular/common';
import {Stocks, Stock} from './shared/data';
import {LineChartComponent} from './charts/line-chart.component';
import {BubbleChartComponent} from './charts/bubble-chart.component';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  template: `
	<div id="content" >
		<div class="time-line-host">
			<cba-time-line-slider></cba-time-line-slider>
		</div>
		<div class="chartOptionsroot">
			<label for="chartOptions">Chart Type</label>
			<select id="chartOptions" [(ngModel)]="selectedChart" (change)="redirectTo($event.target.value)" class="chartOptions">
				<option value="/lineChart">Line Chart</option>
				<option value="/bubbleChart">Bubble Chart</option>
			</select> 
		</div>
		<div>
			<router-outlet></router-outlet>
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
	constructor(public datePipe: DatePipe, private router: Router) {
	}
	redirectTo(value) {
		if (value) {
			this.router.navigate([value]);
		}
		return false;
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
