import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Stocks, Stock } from './shared/data';

@Component({
  selector: 'app-root',
  template: `
    <h1>{{title}}</h1>
    <h2>{{subtitle}}</h2>
	<div class="time-line-host">
		<cba-time-line-slider [dataStock]="dataStock"></cba-time-line-slider>
	</div>`,
  providers: [DatePipe]
})
export class AppComponent{
  dataStock: Stock[] = Stocks;
  selectedStock: Stock[] = Stocks;
  title: string = 'D3.js with Angular 2!';
  subtitle: string = 'Line Chart';
  
  constructor(public datePipe: DatePipe) {
  }
  ngOnInit() {
  }
}
