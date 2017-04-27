import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {TimeLineComponent} from './charts/time-line-slider.component';
import {LineChartComponent} from './charts/line-chart.component';
import {BubbleChartComponent} from './charts/bubble-chart.component'
import {SharedService} from './services/shared.service';

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
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
