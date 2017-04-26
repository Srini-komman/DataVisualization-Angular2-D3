import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Stocks, Stock } from './shared/data';

@Component({
  selector: 'app-root',
  template: `
	<div class="time-line-host">
		<cba-time-line-slider [dataStock]="dataStock" [dataStockFiltered]="dataStock"></cba-time-line-slider>
	</div>`,
  providers: [DatePipe]
})
export class AppComponent{
  dataStock: Stock[] = Stocks;
  selectedStock: Stock[] = Stocks;  
  constructor(public datePipe: DatePipe) {
  }
  ngOnInit() {
  }
}
