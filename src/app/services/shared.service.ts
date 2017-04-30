import {Component, Injectable,Input,Output,EventEmitter} from '@angular/core';
import { Stock } from '../shared/data';

@Injectable()
export class SharedService {
	@Output() svgOpacity: EventEmitter<number> = new EventEmitter();
	@Output() chartData: EventEmitter<Stock[]> = new EventEmitter();
	constructor() {
		console.log('shared service started');
	}
	setChartOpacity(opacity:number) {
		this.svgOpacity.emit(opacity);
	}
	getChartOpacity() {
		return this.svgOpacity;
	}
	setChartData(data:Stock[]) {
		this.chartData.emit(data);
	}
	getChartData() {
		return this.chartData;
	}
} 
