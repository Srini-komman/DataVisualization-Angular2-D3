import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TimeLineComponent} from './charts/time-line-slider.component';
import {LineChartComponent} from './charts/line-chart.component';
import {BubbleChartComponent} from './charts/bubble-chart.component';

const routes: Routes = [
  { path: '', redirectTo: '/bubbleChart', pathMatch: 'full' },
  { path: 'bubbleChart',  component: BubbleChartComponent },
  { path: 'lineChart',    component: LineChartComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}