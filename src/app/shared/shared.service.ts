import {Component, Injectable,Input,Output,EventEmitter} from '@angular/core'

@Injectable()
export class SharedService {
  @Output() svgOpacity: EventEmitter<any> = new EventEmitter();
   constructor() {
     console.log('shared service started');
   }
   changeChartOpacity(opacity) {
    console.log('change started'); 
     this.svgOpacity.emit(opacity);
   }
   getSVGOpacity() {
     return this.svgOpacity;
   }
} 
