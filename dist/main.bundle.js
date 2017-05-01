webpackJsonp([0,3],{

/***/ 144:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_data__ = __webpack_require__(328);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return DataVisualizationService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DataVisualizationService = (function () {
    function DataVisualizationService() {
    }
    // mock data is used for Test only, this data can be fetched by using http service, caching can be applied to share the data across the application. 
    DataVisualizationService.prototype.getData = function () {
        return __WEBPACK_IMPORTED_MODULE_1__shared_data__["a" /* Stocks */];
    };
    DataVisualizationService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Injectable */])(), 
        __metadata('design:paramtypes', [])
    ], DataVisualizationService);
    return DataVisualizationService;
}());
//# sourceMappingURL=C:/cli/CBATEST/src/data-visualization.service.js.map

/***/ },

/***/ 145:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return SharedService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SharedService = (function () {
    function SharedService() {
        this.svgOpacity = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["_20" /* EventEmitter */]();
        this.chartData = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["_20" /* EventEmitter */]();
        console.log('shared service started');
    }
    SharedService.prototype.setChartOpacity = function (opacity) {
        this.svgOpacity.emit(opacity);
    };
    SharedService.prototype.getChartOpacity = function () {
        return this.svgOpacity;
    };
    SharedService.prototype.setChartData = function (data) {
        this.chartData.emit(data);
    };
    SharedService.prototype.getChartData = function () {
        return this.chartData;
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Output */])(), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["_20" /* EventEmitter */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["_20" /* EventEmitter */]) === 'function' && _a) || Object)
    ], SharedService.prototype, "svgOpacity", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Output */])(), 
        __metadata('design:type', (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["_20" /* EventEmitter */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["_20" /* EventEmitter */]) === 'function' && _b) || Object)
    ], SharedService.prototype, "chartData", void 0);
    SharedService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Injectable */])(), 
        __metadata('design:paramtypes', [])
    ], SharedService);
    return SharedService;
    var _a, _b;
}());
//# sourceMappingURL=C:/cli/CBATEST/src/shared.service.js.map

/***/ },

/***/ 325:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (immutable) */ exports["a"] = routerTransition;

function routerTransition() {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* trigger */])('routerChartTransition', [
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* state */])('*', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* style */])({ transform: 'translateX(0)', opacity: 1 })),
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* transition */])('void => *', [
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* style */])({ transform: 'translateX(-100%)', opacity: 0 }),
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_7" /* animate */])(1000)
        ]),
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* transition */])('* => void', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_7" /* animate */])(1000, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* style */])({ transform: 'translateX(100%)', opacity: 0 })))
    ]);
}
//# sourceMappingURL=C:/cli/CBATEST/src/router-Transition.animation.js.map

/***/ },

/***/ 326:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_shared_service__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_data_visualization_service__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__animations_router_Transition_animation__ = __webpack_require__(325);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_d3_selection__ = __webpack_require__(659);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return BubbleChartComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var BubbleChartComponent = (function () {
    function BubbleChartComponent(sharedService, dataVisualizationService) {
        // input data
        this.state = "inactive";
        this.dataStock = [];
        this.margin = { top: 20, right: 20, bottom: 30, left: 50 };
        this.offset = 20;
        this.sharedService = sharedService;
        this.dataVisualizationService = dataVisualizationService;
        this.width = 900;
        this.height = 120;
    }
    BubbleChartComponent.prototype.toggleUp = function () {
        this.state = "active";
    };
    BubbleChartComponent.prototype.toggleDown = function () {
        this.state = "inactive";
    };
    BubbleChartComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataStock = this.dataVisualizationService.getData();
        this.renderBubbleChart(this.dataStock);
        this.subscription = this.sharedService.getChartOpacity()
            .subscribe(function (opacity) { return _this.svg.attr('opacity', opacity); });
        this.subscription = this.sharedService.getChartData()
            .subscribe(function (data) { return _this.renderBubbleChart(data); });
    };
    BubbleChartComponent.prototype.ngOnDestroy = function () {
        // unsubscribe to ensure no memory leaks
        this.subscription.unsubscribe();
    };
    BubbleChartComponent.prototype.renderBubbleChart = function (data) {
        this.dataStock = data;
        this.initSvg(this.width, this.height);
        this.drawCircle(data, this.height / 2, this.height / 2, Math.floor(this.height / 2));
        this.drawLines();
    };
    BubbleChartComponent.prototype.initSvg = function (width, height) {
        __WEBPACK_IMPORTED_MODULE_4_d3_selection__["a" /* select */]('#bubblechart svg').remove();
        this.svg = __WEBPACK_IMPORTED_MODULE_4_d3_selection__["a" /* select */]("#bubblechart")
            .append("svg")
            .attr("class", "svgBubble")
            .style("width", width)
            .style("height", height);
    };
    BubbleChartComponent.prototype.drawLines = function () {
        //draw the x-axis line
        this.svg.append('line')
            .attr("x1", 0)
            .attr("y1", this.height / 2)
            .attr("x2", this.width)
            .attr("y2", this.height / 2)
            .attr("class", "axis-line");
        //y-axis line
        this.svg.append('line')
            .attr("x1", this.width / 2)
            .attr("y1", 0)
            .attr("x2", this.width / 2)
            .attr("y2", this.height)
            .attr("class", "axis-line")
            .style("stroke-dasharray", ("2, 2"));
    };
    BubbleChartComponent.prototype.drawCircle = function (data, cx, cy, radius) {
        if (data) {
            var start = data[0].value, end = this.dataStock[this.dataStock.length - 1].value, percentage = (1 - (start / end)) * 100, circlePosition = percentage >= 0 ? 326 : 448;
            var circleLabel = parseFloat(Math.round(percentage).toString()).toFixed(2);
            var circleElements = this.svg
                .append("g")
                .attr("class", "node-group")
                .attr("transform", function (d) {
                return "translate(" + circlePosition + ",0)";
            });
            var rectangle = circleElements.append('rect')
                .attr("rx", cx)
                .attr("ry", cx)
                .attr("width", (radius * 2) + 50)
                .attr("y", 0)
                .attr("height", cy * 2)
                .attr("class", "bubble-rectangle");
            percentage < 0 ? rectangle.attr("x", -80) : rectangle.attr("x", cx - 40);
            /*Create the circle */
            var circle = circleElements.append("circle")
                .attr("cx", cx)
                .attr("cy", cy)
                .attr("r", radius)
                .attr("class", "circle");
            /* Create the text */
            circleElements.append("text")
                .attr("dx", cx - 25)
                .attr("dy", cy + 5)
                .attr("class", "circle-label")
                .text(circleLabel + "%");
        }
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Input */])(), 
        __metadata('design:type', Array)
    ], BubbleChartComponent.prototype, "dataStock", void 0);
    BubbleChartComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Component */])({
            selector: 'cba-bubble-chart',
            template: __webpack_require__(696),
            animations: [
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* trigger */])('focusPanel', [
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* state */])('inactive', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* style */])({
                        transform: 'scale(1)'
                    })),
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* state */])('active', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* style */])({
                        transform: 'scale(1.1)'
                    })),
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* transition */])('inactive => active', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_7" /* animate */])('150ms ease-in')),
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* transition */])('active => inactive', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_7" /* animate */])('150ms ease-out'))
                ]),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__animations_router_Transition_animation__["a" /* routerTransition */])()
            ],
            host: {
                '[@routerChartTransition]': 'true',
                '[style.display]': "'block'",
                '[style.position]': "'absolute'"
            }
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_shared_service__["a" /* SharedService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_shared_service__["a" /* SharedService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_data_visualization_service__["a" /* DataVisualizationService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_data_visualization_service__["a" /* DataVisualizationService */]) === 'function' && _b) || Object])
    ], BubbleChartComponent);
    return BubbleChartComponent;
    var _a, _b;
}());
//# sourceMappingURL=C:/cli/CBATEST/src/bubble-chart.component.js.map

/***/ },

/***/ 327:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_shared_service__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_data_visualization_service__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__animations_router_Transition_animation__ = __webpack_require__(325);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_d3__ = __webpack_require__(370);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_d3___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_d3__);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return LineChartComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LineChartComponent = (function () {
    function LineChartComponent(sharedService, dataVisualizationService) {
        this.dataStock = [];
        this.margin = { top: 20, right: 20, bottom: 30, left: 50 };
        this.sharedService = sharedService;
        this.width = 440; //- this.margin.left - this.margin.right ;
        this.height = 200; //- this.margin.top - this.margin.bottom;
        this.dataVisualizationService = dataVisualizationService;
    }
    LineChartComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataStock = this.dataVisualizationService.getData();
        this.renderLineChart(this.dataStock);
        this.subscription = this.sharedService.getChartOpacity()
            .subscribe(function (opacity) { return _this.svg.attr('opacity', opacity); });
        this.subscription = this.sharedService.getChartData()
            .subscribe(function (data) { return _this.renderLineChart(data); });
    };
    LineChartComponent.prototype.ngOnDestroy = function () {
        // unsubscribe to ensure no memory leaks
        this.subscription.unsubscribe();
    };
    LineChartComponent.prototype.renderLineChart = function (data) {
        this.dataStock = data;
        this.initSvg(this.width, this.height);
        this.initAxis(data);
        this.drawPath(data);
        this.drawAxis(data);
        this.drawLine(data);
        this.drawDots(data);
        this.drawGridLines();
    };
    LineChartComponent.prototype.setChartOpacity = function (opacity) {
        this.svg.attr('opacity', opacity);
    };
    LineChartComponent.prototype.initSvg = function (width, height) {
        __WEBPACK_IMPORTED_MODULE_4_d3__["select"]('#linechart svg').remove();
        this.svg = __WEBPACK_IMPORTED_MODULE_4_d3__["select"]("#linechart")
            .append("svg")
            .style("width", 900)
            .style("height", 550)
            .style("opacity", 1);
        this.svg = __WEBPACK_IMPORTED_MODULE_4_d3__["select"]('#linechart svg').append("g")
            .attr("transform", "translate(" + this.margin.left + "," + this.margin.top + ")");
    };
    LineChartComponent.prototype.initAxis = function (data) {
        this.x = __WEBPACK_IMPORTED_MODULE_4_d3__["scaleTime"]().range([0, this.width]);
        this.y = __WEBPACK_IMPORTED_MODULE_4_d3__["scaleLinear"]().range([this.height, 0]);
        this.x.domain(__WEBPACK_IMPORTED_MODULE_4_d3__["extent"](data, function (d) { return d.date; }));
        this.y.domain(__WEBPACK_IMPORTED_MODULE_4_d3__["extent"](data, function (d) { return d.value; }));
    };
    LineChartComponent.prototype.drawAxis = function (data) {
        var yaxis = __WEBPACK_IMPORTED_MODULE_4_d3__["axisLeft"](this.y);
        var xaxis = __WEBPACK_IMPORTED_MODULE_4_d3__["axisBottom"](this.x);
        xaxis.tickSize(0);
        xaxis.ticks(data.length);
        xaxis.tickFormat(__WEBPACK_IMPORTED_MODULE_4_d3__["timeFormat"]("%m/%y"));
        this.svg.append("g")
            .attr("class", "axis axis--x")
            .attr("transform", "translate(0," + this.height + ")")
            .call(xaxis);
        yaxis.tickFormat(function (d) { return "$" + __WEBPACK_IMPORTED_MODULE_4_d3__["format"]("0.1s")(d); });
        yaxis.tickSize(0);
        yaxis.ticks(1);
        this.svg.append("g")
            .attr("class", "axis axis--y")
            .call(yaxis)
            .append("text")
            .attr("class", "axis-title")
            .attr("transform", "rotate(-90)")
            .attr("y", 6)
            .attr("dy", ".71em")
            .style("text-anchor", "end");
    };
    LineChartComponent.prototype.make_x_gridlines = function () {
        return __WEBPACK_IMPORTED_MODULE_4_d3__["axisBottom"](this.x);
    };
    LineChartComponent.prototype.make_y_gridlines = function () {
        return __WEBPACK_IMPORTED_MODULE_4_d3__["axisLeft"](this.y);
    };
    LineChartComponent.prototype.drawGridLines = function () {
        this.svg.append("g")
            .attr("class", "grid")
            .attr("transform", "translate(0," + this.height + ")")
            .call(this.make_x_gridlines()
            .tickSize(-this.height));
        this.svg.append("g")
            .attr("class", "grid")
            .call(this.make_y_gridlines()
            .tickSize(-this.width));
    };
    LineChartComponent.prototype.drawPath = function (data) {
        var _this = this;
        var area = __WEBPACK_IMPORTED_MODULE_4_d3__["area"]()
            .x(function (d) { return _this.x(d.date); })
            .y0(this.height)
            .y1(function (d) { return _this.y(d.value); });
        // add the area
        this.svg.append("path")
            .data([data])
            .attr("class", "area")
            .attr("d", area);
    };
    LineChartComponent.prototype.drawLine = function (data) {
        var _this = this;
        var line = __WEBPACK_IMPORTED_MODULE_4_d3__["line"]()
            .x(function (d) { return _this.x(d.date); })
            .y(function (d) { return _this.y(d.value); });
        this.svg.append("path")
            .datum(data)
            .attr("class", "line")
            .attr("d", line);
    };
    LineChartComponent.prototype.drawDots = function (data) {
        var _this = this;
        this.svg.selectAll("dot")
            .data(data)
            .enter()
            .append("circle")
            .attr("class", "line-char-dot")
            .attr("r", 5)
            .attr("cx", function (d) { return _this.x(d.date); })
            .attr("cy", function (d) { return _this.y(d.value); });
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Input */])(), 
        __metadata('design:type', Array)
    ], LineChartComponent.prototype, "dataStock", void 0);
    LineChartComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Component */])({
            selector: 'cba-line-chart',
            template: __webpack_require__(697),
            animations: [
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__animations_router_Transition_animation__["a" /* routerTransition */])()
            ],
            host: {
                '[@routerChartTransition]': 'true',
                '[style.display]': "'block'",
                '[style.position]': "'absolute'"
            }
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_shared_service__["a" /* SharedService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_shared_service__["a" /* SharedService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_data_visualization_service__["a" /* DataVisualizationService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_data_visualization_service__["a" /* DataVisualizationService */]) === 'function' && _b) || Object])
    ], LineChartComponent);
    return LineChartComponent;
    var _a, _b;
}());
//# sourceMappingURL=C:/cli/CBATEST/src/line-chart.component.js.map

/***/ },

/***/ 328:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return Stocks; });
var Stocks = [
    { date: new Date("2016-01-02"), value: 1000 },
    { date: new Date("2016-02-14"), value: 3500 },
    { date: new Date("2016-03-15"), value: 2200 },
    { date: new Date("2016-04-30"), value: 3600 },
    { date: new Date("2016-05-31"), value: 2350 },
    { date: new Date("2016-06-05"), value: 1200 },
    { date: new Date("2016-07-13"), value: 4500 },
    { date: new Date("2016-08-31"), value: 2200 },
    { date: new Date("2016-09-30"), value: 5000 },
    { date: new Date("2016-10-11"), value: 1400 },
    { date: new Date("2016-11-20"), value: 4500 },
    { date: new Date("2016-12-17"), value: 2700 },
    { date: new Date("2017-01-31"), value: 3000 }
];
//# sourceMappingURL=C:/cli/CBATEST/src/data.js.map

/***/ },

/***/ 388:
/***/ function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 388;


/***/ },

/***/ 389:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts__ = __webpack_require__(507);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__polyfills_ts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(472);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(506);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_app_module__ = __webpack_require__(504);





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_41" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_4__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=C:/cli/CBATEST/src/main.js.map

/***/ },

/***/ 502:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(319);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__charts_line_chart_component__ = __webpack_require__(327);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__charts_bubble_chart_component__ = __webpack_require__(326);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AppRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var routes = [
    { path: '', redirectTo: '/bubbleChart', pathMatch: 'full' },
    { path: 'bubbleChart', component: __WEBPACK_IMPORTED_MODULE_3__charts_bubble_chart_component__["a" /* BubbleChartComponent */] },
    { path: 'lineChart', component: __WEBPACK_IMPORTED_MODULE_2__charts_line_chart_component__["a" /* LineChartComponent */] }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppRoutingModule);
    return AppRoutingModule;
}());
//# sourceMappingURL=C:/cli/CBATEST/src/app-routing.module.js.map

/***/ },

/***/ 503:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_data__ = __webpack_require__(328);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(319);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AppComponent = (function () {
    function AppComponent(datePipe, router) {
        this.datePipe = datePipe;
        this.router = router;
        this.state = "inactive";
        this.dataStock = __WEBPACK_IMPORTED_MODULE_2__shared_data__["a" /* Stocks */];
        this.dataStockFiltered = __WEBPACK_IMPORTED_MODULE_2__shared_data__["a" /* Stocks */];
    }
    AppComponent.prototype.redirectTo = function (url) {
        if (url) {
            this.router.navigate([url]);
        }
        return false;
    };
    AppComponent.prototype.toggleUp = function () {
        this.state = "active";
    };
    AppComponent.prototype.toggleDown = function () {
        this.state = "inactive";
    };
    AppComponent.prototype.ngOnInit = function () {
        // Settig default chart for initial page load only
        var selectedChart = "Bubble Chart";
    };
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__(695),
            animations: [
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* trigger */])('focusPanel12', [
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* state */])('inactive', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* style */])({
                        transform: 'scale(1)'
                    })),
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* state */])('active', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* style */])({
                        transform: 'scale(1.1)'
                    })),
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* transition */])('inactive => active', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_7" /* animate */])('100ms ease-in')),
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* transition */])('active => inactive', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_7" /* animate */])('100ms ease-out'))
                ])
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["c" /* DatePipe */]]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common__["c" /* DatePipe */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_common__["c" /* DatePipe */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]) === 'function' && _b) || Object])
    ], AppComponent);
    return AppComponent;
    var _a, _b;
}());
//# sourceMappingURL=C:/cli/CBATEST/src/app.component.js.map

/***/ },

/***/ 504:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(466);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__charts_time_line_slider_component__ = __webpack_require__(505);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__charts_line_chart_component__ = __webpack_require__(327);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__charts_bubble_chart_component__ = __webpack_require__(326);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_shared_service__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_data_visualization_service__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__(503);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_routing_module__ = __webpack_require__(502);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_3__charts_time_line_slider_component__["a" /* TimeLineComponent */],
                __WEBPACK_IMPORTED_MODULE_4__charts_line_chart_component__["a" /* LineChartComponent */],
                __WEBPACK_IMPORTED_MODULE_5__charts_bubble_chart_component__["a" /* BubbleChartComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["b" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_9__app_routing_module__["a" /* AppRoutingModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_6__services_shared_service__["a" /* SharedService */],
                __WEBPACK_IMPORTED_MODULE_7__services_data_visualization_service__["a" /* DataVisualizationService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=C:/cli/CBATEST/src/app.module.js.map

/***/ },

/***/ 505:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_shared_service__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_data_visualization_service__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_d3__ = __webpack_require__(370);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_d3___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_d3__);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return TimeLineComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TimeLineComponent = (function () {
    //constructor for injecting dependencies
    function TimeLineComponent(datePipe, ref, sharedService, dataVisualizationService) {
        this.datePipe = datePipe;
        this.ref = ref;
        // input data
        this.dataStock = [];
        //Settings
        this.settings = function () {
            var margins = {
                top: 10,
                bottom: 40,
                left: 150,
                right: 100
            };
            var dim = {
                width: 850,
                height: 50
            };
            return {
                margins: margins,
                dim: dim
            };
        }();
        this.updateChart = function () {
            var callback = function (process, dstart, dend) {
                if (process === 'dragend') {
                    this.dataStockFiltered = this.dataStock.filter(function (d) {
                        return d.date >= dstart.value && d.date <= dend.value;
                    });
                    this.sharedService.setChartData(this.dataStockFiltered);
                    this.sharedService.setChartOpacity(1);
                }
                else if (process === 'dragstart') {
                    this.sharedService.setChartOpacity(0.5);
                }
            };
            return callback;
        }();
        //Slider implementation
        this.renderSlider = function (dataset, settings, callback, dateFormatter) {
            var RangeSlider = function (svg, width, radius, color, translater, callback, dateFormatter) {
                var self = this, elements = {
                    min: { value: 0 },
                    max: { value: width },
                    elmin: {},
                    elmax: {},
                    bar: {},
                    minText: {},
                    maxText: {}
                }, settings = {
                    min: 0,
                    max: width,
                    radius: radius,
                    offset: Math.floor(radius / 2),
                    color: color,
                    opacity: {
                        full: 1.0,
                        medium: 0.8,
                        half: 0.5,
                        light: 0.3
                    },
                    translater: translater,
                    datetranslater: datetranslater,
                    callback: callback
                };
                //build the bar
                elements.bar = svg.append('rect')
                    .attr("x", settings.offset)
                    .attr("width", settings.max - (settings.offset * 2))
                    .attr("y", settings.offset)
                    .attr("height", settings.radius)
                    .attr("fill", settings.color);
                //build the handles
                elements.elmin = svg.append('ellipse')
                    .style("cursor", 'pointer')
                    .attr("cx", settings.min)
                    .attr("cy", settings.radius)
                    .attr("rx", settings.radius)
                    .attr("ry", settings.radius)
                    .attr("fill", settings.color);
                elements.minText = svg.append('text')
                    .attr("x", settings.min)
                    .attr("y", settings.radius * 3 + settings.offset)
                    .attr("fill", "black")
                    .attr("fill-opacity", settings.opacity.medium)
                    .attr("text-anchor", "middle")
                    .text(settings.translater.apply(self, [settings.min]).text);
                elements.elmax = svg.append('ellipse')
                    .style("cursor", "pointer")
                    .attr("cx", settings.max)
                    .attr("cy", settings.radius)
                    .attr("rx", settings.radius)
                    .attr("ry", settings.radius)
                    .attr("fill", settings.color);
                elements.maxText = svg.append('text')
                    .attr("x", settings.max)
                    .attr("y", settings.radius * 3 + settings.offset)
                    .attr("fill", "black")
                    .attr("fill-opacity", settings.opacity.medium)
                    .attr("text-anchor", "middle")
                    .text(settings.translater.apply(self, [settings.max]).text);
                //expose as public properties
                self.elements = elements;
                self.settings = settings;
                //setup additional methods
                self.init();
            };
            RangeSlider.prototype.init = function () {
                var self = this, api = {};
                var runCallback = function (process) {
                    if (self.settings.callback) {
                        self.settings.callback.apply(self, [
                            process,
                            self.settings.datetranslater.apply(self, [self.elements.min.value]),
                            self.settings.datetranslater.apply(self, [self.elements.max.value])
                        ]);
                    }
                };
                self.move = function (self) {
                    var api = {
                        min: min,
                        max: max
                    };
                    var resetBar = function (x, width) {
                        self.elements.bar
                            .attr("x", Math.max(x - self.settings.offset, 0))
                            .attr("width", Math.max(width, 0));
                    };
                    api.min = function (x) {
                        if (x >= self.settings.min && x <= self.elements.max.value) {
                            self.elements.min.value = x;
                            self.elements.elmin.attr("cx", x);
                            self.elements.minText.attr("x", x).text(self.settings.translater.apply(self, [x]).text);
                            resetBar(x, self.elements.max.value - x);
                            runCallback('move');
                        }
                        return self;
                    };
                    api.max = function (x) {
                        if (x >= self.elements.min.value && x <= self.settings.max) {
                            self.elements.max.value = x;
                            self.elements.elmax.attr("cx", x);
                            self.elements.maxText.attr("x", x).text(self.settings.translater.apply(self, [x]).text);
                            resetBar(self.elements.min.value, x - self.elements.min.value);
                            runCallback('move');
                        }
                        return self; //chain-able
                    };
                    return api;
                }(self);
                self.dragstart = function (self) {
                    var api = {
                        min: min,
                        max: max
                    };
                    var render = function (element, text) {
                        text.attr("fill-opacity", self.settings.full);
                        runCallback('dragstart');
                    };
                    api.min = function () {
                        render(self.elements.elmin, self.elements.minText);
                        return self;
                    };
                    api.max = function () {
                        render(self.elements.elmax, self.elements.maxText);
                        return self;
                    };
                    return api;
                }(self);
                self.dragend = function (self) {
                    var api = {
                        min: min,
                        max: max
                    };
                    var render = function () {
                        runCallback('dragend');
                    };
                    api.min = function () {
                        render();
                        return self;
                    };
                    api.max = function () {
                        render();
                        return self;
                    };
                    return api;
                }(self);
                return self;
            };
            var min = dataset[0].date, max = dataset[dataset.length - 1], handles = {
                size: 8
            };
            var timeScale = __WEBPACK_IMPORTED_MODULE_4_d3__["scaleTime"]()
                .domain(__WEBPACK_IMPORTED_MODULE_4_d3__["extent"](dataset, function (d) { return d.date; }))
                .range([0, settings.dim.width]);
            //setup the svg container for time line slider
            var svg = __WEBPACK_IMPORTED_MODULE_4_d3__["select"]('#timelineslider')
                .append('svg')
                .attr("width", settings.dim.width + settings.margins.left + settings.margins.right)
                .attr("height", 50);
            var g = svg.append("g")
                .attr("class", "x-axis")
                .attr("transform", "translate(" + settings.margins.left + "," + settings.margins.top + ")");
            var xaxis = __WEBPACK_IMPORTED_MODULE_4_d3__["axisBottom"](timeScale);
            xaxis.tickSize(4);
            xaxis.ticks(dataset.length);
            xaxis.tickFormat(__WEBPACK_IMPORTED_MODULE_4_d3__["timeFormat"]("%b-%Y"));
            svg.append("g")
                .attr("class", "axislightgrey")
                .attr("transform", "translate(" + settings.margins.left + "," + 21 + ")")
                .call(xaxis);
            var xaxisTop = __WEBPACK_IMPORTED_MODULE_4_d3__["axisTop"](timeScale);
            xaxis.tickSize(-1);
            xaxis.ticks(dataset.length);
            xaxis.tickFormat(__WEBPACK_IMPORTED_MODULE_4_d3__["timeFormat"]("%b-%Y"));
            var axisElements = svg.append("g")
                .attr("class", "axislightgrey")
                .attr("transform", "translate(" + settings.margins.left + "," + 15 + ")")
                .call(xaxisTop);
            axisElements.selectAll("text").remove();
            var translater = function (timeScale) {
                return function (x) {
                    var ret = {
                        x: x,
                        text: dateFormatter.transform(timeScale.invert(x), 'MMM-y')
                    };
                    return ret;
                };
            }(timeScale);
            var datetranslater = function (timeScale) {
                return function (x) {
                    var ret = {
                        x: x,
                        value: new Date(timeScale.invert(x))
                    };
                    return ret;
                };
            }(timeScale);
            var slider = (new RangeSlider(g, settings.dim.width, handles.size, 'yellow', translater, callback, dateFormatter));
            //setup handle dragging 
            slider.elements.elmin.call(__WEBPACK_IMPORTED_MODULE_4_d3__["drag"]()
                .on("start", slider.dragstart.min)
                .on("drag", function () {
                slider.move.min(__WEBPACK_IMPORTED_MODULE_4_d3__["event"].x);
            })
                .on("end", slider.dragend.min));
            slider.elements.elmax.call(__WEBPACK_IMPORTED_MODULE_4_d3__["drag"]()
                .on("start", slider.dragstart.max)
                .on("drag", function () {
                slider.move.max(__WEBPACK_IMPORTED_MODULE_4_d3__["event"].x);
            })
                .on("end", slider.dragend.max));
        };
        this.dateFormatter = datePipe;
        this.sharedService = sharedService;
        this.dataVisualizationService = dataVisualizationService;
    }
    TimeLineComponent.prototype.ngOnInit = function () {
        this.dataStock = this.dataVisualizationService.getData();
        this.renderSlider(this.dataStock, this.settings, this.updateChart.bind(this), this.dateFormatter);
        this.dataStockFiltered = this.dataStock;
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Input */])(), 
        __metadata('design:type', Array)
    ], TimeLineComponent.prototype, "dataStock", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Input */])(), 
        __metadata('design:type', Array)
    ], TimeLineComponent.prototype, "dataStockFiltered", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Input */])(), 
        __metadata('design:type', String)
    ], TimeLineComponent.prototype, "selectedChartType", void 0);
    TimeLineComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Component */])({
            selector: 'cba-time-line-slider',
            template: __webpack_require__(698),
            providers: [__WEBPACK_IMPORTED_MODULE_3__angular_common__["c" /* DatePipe */]]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_common__["c" /* DatePipe */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__angular_common__["c" /* DatePipe */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* ChangeDetectorRef */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* ChangeDetectorRef */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__services_shared_service__["a" /* SharedService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_shared_service__["a" /* SharedService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__services_data_visualization_service__["a" /* DataVisualizationService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_data_visualization_service__["a" /* DataVisualizationService */]) === 'function' && _d) || Object])
    ], TimeLineComponent);
    return TimeLineComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=C:/cli/CBATEST/src/time-line-slider.component.js.map

/***/ },

/***/ 506:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=C:/cli/CBATEST/src/environment.js.map

/***/ },

/***/ 507:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__ = __webpack_require__(521);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__ = __webpack_require__(514);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__ = __webpack_require__(510);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__ = __webpack_require__(516);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__ = __webpack_require__(515);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__ = __webpack_require__(513);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__ = __webpack_require__(512);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__ = __webpack_require__(520);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__ = __webpack_require__(509);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__ = __webpack_require__(508);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__ = __webpack_require__(518);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__ = __webpack_require__(511);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__ = __webpack_require__(519);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__ = __webpack_require__(517);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__ = __webpack_require__(522);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__ = __webpack_require__(714);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__);
















//# sourceMappingURL=C:/cli/CBATEST/src/polyfills.js.map

/***/ },

/***/ 695:
/***/ function(module, exports) {

module.exports = "<div id=\"content\" >\n\t<div class=\"time-line-host\">\n\t\t<cba-time-line-slider></cba-time-line-slider>\n\t</div>\n\t<div class=\"chartOptionsroot\">\n\t\t<label for=\"chartOptions\">Chart Type</label>\n\t\t<select id=\"chartOptions\" [(ngModel)]=\"selectedChart\" (change)=\"redirectTo($event.target.value)\" class=\"chartOptions\">\n\t\t\t<option value=\"/lineChart\">Line Chart</option>\n\t\t\t<option value=\"/bubbleChart\">Bubble Chart</option>\n\t\t</select> \n\t</div>\n\t<div class=\"chartPanel\">\n\t\t<router-outlet></router-outlet>\n\t</div>\n</div>"

/***/ },

/***/ 696:
/***/ function(module, exports) {

module.exports = "<div id=\"bubblechart\" class=\"bubble-chart\" [@focusPanel]='state' (mouseenter)=\"toggleUp()\" (mouseleave)=\"toggleDown()\">\r\n</div>"

/***/ },

/***/ 697:
/***/ function(module, exports) {

module.exports = "<div id=\"linechart\" class=\"line-chart\">\r\n</div>"

/***/ },

/***/ 698:
/***/ function(module, exports) {

module.exports = "<div>\r\n<label for=\"timelineslider\">Select Date range:  </label><div id=\"timelineslider\"></div>\r\n</div>"

/***/ },

/***/ 715:
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(389);


/***/ }

},[715]);
//# sourceMappingURL=main.bundle.map