import {Injectable} from '@angular/core';
import {Stocks, Stock} from '../shared/data';

@Injectable()
export class DataVisualizationService{
    // mock data is used for Test only, this data can be fetched by using http service, caching can be applied to share the data across the application. 
	getData(): Stock[] {
		return Stocks;
	}
}