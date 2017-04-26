import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {TimeLineComponent} from './time-line-slider.component';
import {LineChartComponent} from './line-chart.component';
import {BubbleChartComponent} from './bubble-chart.component'

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
	TimeLineComponent,
	LineChartComponent,
	BubbleChartComponent
  ],
  imports: [
    BrowserModule,
	FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
