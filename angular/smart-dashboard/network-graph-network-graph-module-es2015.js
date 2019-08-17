(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["network-graph-network-graph-module"],{

/***/ "../../node_modules/raw-loader/index.js!./src/app/pages/chart-without-annotation/network-graph/network-graph.component.html":
/*!********************************************************************************************************************************************************************!*\
  !*** C:/Users/tiven.wang/Documents/GitLab/XXDashboard/node_modules/raw-loader!./src/app/pages/chart-without-annotation/network-graph/network-graph.component.html ***!
  \********************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-xl-4\">\n    <nb-card size=\"medium\">\n      <nb-card-body>\n        <app-parallel-axis class=\"app-chart\"></app-parallel-axis>\n      </nb-card-body>\n    </nb-card>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../node_modules/raw-loader/index.js!./src/app/pages/chart-without-annotation/network-graph/parallel-axis/parallel-axis.component.html":
/*!**********************************************************************************************************************************************************************************!*\
  !*** C:/Users/tiven.wang/Documents/GitLab/XXDashboard/node_modules/raw-loader!./src/app/pages/chart-without-annotation/network-graph/parallel-axis/parallel-axis.component.html ***!
  \**********************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nx-chart\n  [chartType]=\"'Custom'\"\n  [data$]=\"data$\"\n  [defaultOptions]=\"chartOptions\"></nx-chart>"

/***/ }),

/***/ "./src/app/pages/chart-without-annotation/network-graph/network-graph.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/pages/chart-without-annotation/network-graph/network-graph.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: NetworkGraphComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NetworkGraphComponent", function() { return NetworkGraphComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");


let NetworkGraphComponent = class NetworkGraphComponent {
    constructor() { }
    ngOnInit() {
    }
};
NetworkGraphComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-network-graph',
        template: __webpack_require__(/*! raw-loader!./network-graph.component.html */ "../../node_modules/raw-loader/index.js!./src/app/pages/chart-without-annotation/network-graph/network-graph.component.html")
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], NetworkGraphComponent);



/***/ }),

/***/ "./src/app/pages/chart-without-annotation/network-graph/network-graph.module.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/pages/chart-without-annotation/network-graph/network-graph.module.ts ***!
  \**************************************************************************************/
/*! exports provided: NetworkGraphModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NetworkGraphModule", function() { return NetworkGraphModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _parallel_axis_parallel_axis_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./parallel-axis/parallel-axis.component */ "./src/app/pages/chart-without-annotation/network-graph/parallel-axis/parallel-axis.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var projects_nx_charts_src_public_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! projects/nx-charts/src/public-api */ "../nx-charts/src/public-api.ts");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @nebular/theme */ "../../node_modules/@nebular/theme/fesm2015/index.js");
/* harmony import */ var _network_graph_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./network-graph.component */ "./src/app/pages/chart-without-annotation/network-graph/network-graph.component.ts");








const routes = [{
        path: '',
        component: _network_graph_component__WEBPACK_IMPORTED_MODULE_7__["NetworkGraphComponent"]
    }];
let NetworkGraphModule = class NetworkGraphModule {
};
NetworkGraphModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_parallel_axis_parallel_axis_component__WEBPACK_IMPORTED_MODULE_3__["ParallelAxisComponent"], _network_graph_component__WEBPACK_IMPORTED_MODULE_7__["NetworkGraphComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
            projects_nx_charts_src_public_api__WEBPACK_IMPORTED_MODULE_5__["NxChartModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_6__["NbCardModule"],
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]]
    })
], NetworkGraphModule);



/***/ }),

/***/ "./src/app/pages/chart-without-annotation/network-graph/parallel-axis/parallel-axis.component.scss":
/*!*********************************************************************************************************!*\
  !*** ./src/app/pages/chart-without-annotation/network-graph/parallel-axis/parallel-axis.component.scss ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/chart-without-annotation/network-graph/parallel-axis/parallel-axis.component.ts":
/*!*******************************************************************************************************!*\
  !*** ./src/app/pages/chart-without-annotation/network-graph/parallel-axis/parallel-axis.component.ts ***!
  \*******************************************************************************************************/
/*! exports provided: ParallelAxisComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParallelAxisComponent", function() { return ParallelAxisComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "../../node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var echarts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! echarts */ "../../node_modules/echarts/index.js");
/* harmony import */ var echarts__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(echarts__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @nebular/theme */ "../../node_modules/@nebular/theme/fesm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm2015/operators/index.js");







let anyecharts = echarts__WEBPACK_IMPORTED_MODULE_4__;
var indices = {
    name: 0,
    group: 1,
    id: 16
};
var schema = [
    { name: 'name', index: 0 },
    { name: 'group', index: 1 },
    { name: 'protein', index: 2 },
    { name: 'calcium', index: 3 },
    { name: 'sodium', index: 4 },
    { name: 'fiber', index: 5 },
    { name: 'vitaminc', index: 6 },
    { name: 'potassium', index: 7 },
    { name: 'carbohydrate', index: 8 },
    { name: 'sugars', index: 9 },
    { name: 'fat', index: 10 },
    { name: 'water', index: 11 },
    { name: 'calories', index: 12 },
    { name: 'saturated', index: 13 },
    { name: 'monounsat', index: 14 },
    { name: 'polyunsat', index: 15 },
    { name: 'id', index: 16 }
];
var groupCategories = [];
var groupColors = [];
let ParallelAxisComponent = class ParallelAxisComponent {
    constructor(httpClient, nbThemeService) {
        this.httpClient = httpClient;
        this.nbThemeService = nbThemeService;
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.data$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]({});
        this.chartOptions = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]({
            grid: {
                bottom: 10
            }
        });
    }
    ngOnInit() {
    }
    ngAfterViewInit() {
        this.nbThemeService.getJsTheme()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(this.destroy$), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["delay"])(1))
            .subscribe(config => {
            this.chartOptions.next({
                visualMap: {
                    textStyle: {
                        color: config.variables.fg
                    }
                }
            });
        });
        this.httpClient.get('/localService/examples/nutrients.json')
            .subscribe(data => {
            this.normalizeData(data);
            this.chartOptions.next(this.getOption(data));
        });
    }
    normalizeData(originData) {
        var groupMap = {};
        originData.forEach(function (row) {
            var groupName = row[indices.group];
            if (!groupMap.hasOwnProperty(groupName)) {
                groupMap[groupName] = 1;
            }
        });
        originData.forEach(function (row) {
            row.forEach(function (item, index) {
                if (index !== indices.name
                    && index !== indices.group
                    && index !== indices.id) {
                    // Convert null to zero, as all of them under unit "g".
                    row[index] = parseFloat(item) || 0;
                }
            });
        });
        for (var groupName in groupMap) {
            if (groupMap.hasOwnProperty(groupName)) {
                groupCategories.push(groupName);
            }
        }
        var hStep = Math.round(300 / (groupCategories.length - 1));
        for (var i = 0; i < groupCategories.length; i++) {
            groupColors.push(anyecharts.color.modifyHSL('#5A94DF', hStep * i));
        }
    }
    getOption(data) {
        var lineStyle = {
            normal: {
                width: 0.5,
                opacity: 0.05
            }
        };
        return {
            // backgroundColor: '#333',
            tooltip: {
                padding: 10,
                backgroundColor: '#222',
                borderColor: '#777',
                borderWidth: 1,
                formatter: (obj) => {
                    var value = obj[0].value;
                    return '<div style="border-bottom: 1px solid rgba(255,255,255,.3); font-size: 18px;padding-bottom: 7px;margin-bottom: 7px">'
                        + schema[1].name + '：' + value[1] + '<br>'
                        + schema[2].name + '：' + value[2] + '<br>'
                        + schema[3].name + '：' + value[3] + '<br>'
                        + schema[4].name + '：' + value[4] + '<br>'
                        + schema[5].name + '：' + value[5] + '<br>'
                        + schema[6].name + '：' + value[6] + '<br>';
                }
            },
            title: [
                {
                    text: 'Groups',
                    top: 0,
                    left: 0,
                    textStyle: {
                        color: '#fff'
                    }
                }
            ],
            visualMap: {
                show: true,
                type: 'piecewise',
                categories: groupCategories,
                dimension: indices.group,
                inRange: {
                    color: groupColors //['#d94e5d','#eac736','#50a3ba']
                },
                outOfRange: {
                    color: ['#ccc'] //['#d94e5d','#eac736','#50a3ba']
                },
                top: 20,
                // textStyle: {
                // color: '#fff'
                // },
                realtime: false
            },
            parallelAxis: [
                { dim: 16, name: schema[16].name, scale: true, nameLocation: 'end' },
                { dim: 2, name: schema[2].name, nameLocation: 'end' },
                { dim: 4, name: schema[4].name, nameLocation: 'end' },
                { dim: 3, name: schema[3].name, nameLocation: 'end' },
                { dim: 5, name: schema[5].name, nameLocation: 'end' },
                { dim: 6, name: schema[6].name, nameLocation: 'end' },
                { dim: 7, name: schema[7].name, nameLocation: 'end' },
                { dim: 8, name: schema[8].name, nameLocation: 'end' },
                { dim: 9, name: schema[9].name, nameLocation: 'end' },
                { dim: 10, name: schema[10].name, nameLocation: 'end' },
                { dim: 11, name: schema[11].name, nameLocation: 'end' },
                { dim: 12, name: schema[12].name, nameLocation: 'end' },
                { dim: 13, name: schema[13].name, nameLocation: 'end' },
                { dim: 14, name: schema[14].name, nameLocation: 'end' },
                { dim: 15, name: schema[15].name, nameLocation: 'end' }
            ],
            parallel: {
                left: 280,
                top: 20,
                bottom: 20,
                // top: 150,
                // height: 300,
                width: 400,
                layout: 'vertical',
                parallelAxisDefault: {
                    type: 'value',
                    name: 'nutrients',
                    nameLocation: 'end',
                    nameGap: 20,
                    nameTextStyle: {
                        color: '#fff',
                        fontSize: 14
                    },
                    axisLine: {
                        lineStyle: {
                            color: '#aaa'
                        }
                    },
                    axisTick: {
                        lineStyle: {
                            color: '#777'
                        }
                    },
                    splitLine: {
                        show: false
                    },
                    axisLabel: {
                        textStyle: {
                        // color: '#fff'
                        }
                    },
                    realtime: false
                }
            },
            animation: false,
            series: [
                {
                    name: 'nutrients',
                    type: 'parallel',
                    lineStyle: lineStyle,
                    inactiveOpacity: 0,
                    activeOpacity: 0.01,
                    progressive: 500,
                    smooth: true,
                    data: data
                }
            ]
        };
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
};
ParallelAxisComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-parallel-axis',
        template: __webpack_require__(/*! raw-loader!./parallel-axis.component.html */ "../../node_modules/raw-loader/index.js!./src/app/pages/chart-without-annotation/network-graph/parallel-axis/parallel-axis.component.html"),
        styles: [__webpack_require__(/*! ./parallel-axis.component.scss */ "./src/app/pages/chart-without-annotation/network-graph/parallel-axis/parallel-axis.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbThemeService"]])
], ParallelAxisComponent);



/***/ })

}]);