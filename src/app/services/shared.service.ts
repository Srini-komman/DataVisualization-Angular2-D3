import {Component, Injectable,Input,Output,EventEmitter} from '@angular/core';

@Injectable()
export class SharedService {
	@Output() svgOpacity: EventEmitter<any> = new EventEmitter();
	@Output() chartData: EventEmitter<any> = new EventEmitter();
	constructor() {
		console.log('shared service started');
	}
	setChartOpacity(opacity) {
		this.svgOpacity.emit(opacity);
	}
	getChartOpacity() {
		return this.svgOpacity;
	}
	setChartData(data) {
		this.chartData.emit(data);
	}
	getChartData() {
		return this.chartData;
	}
} 
