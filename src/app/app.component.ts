import {Component, OnInit, 
        trigger, state, style, transition, animate, keyframes} from '@angular/core';
import {DatePipe} from '@angular/common';
import {Stocks, Stock} from './shared/data';
import {LineChartComponent} from './charts/line-chart.component';
import {BubbleChartComponent} from './charts/bubble-chart.component';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
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
	private redirectTo(url:string) {
		if (url) {
			this.router.navigate([url]);
		}
		return false;
	}
	private toggleUp(){
		this.state = "active";
	}
	private toggleDown(){
		this.state = "inactive";
	}
	
	ngOnInit() {
		// Settig default chart for initial page load only
		var selectedChart: string = "Bubble Chart";
	}
}
