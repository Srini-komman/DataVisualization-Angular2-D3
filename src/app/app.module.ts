import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {TimeLineComponent} from './charts/time-line-slider.component';
import {LineChartComponent} from './charts/line-chart.component';
import {BubbleChartComponent} from './charts/bubble-chart.component'
import {SharedService} from './services/shared.service';
import {DataVisualizationService} from './services/data-visualization.service';
import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
	TimeLineComponent,
	LineChartComponent,
	BubbleChartComponent
  ],
  imports: [
    BrowserModule,
	FormsModule,
	AppRoutingModule
  ],
  providers: [SharedService,
			  DataVisualizationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
