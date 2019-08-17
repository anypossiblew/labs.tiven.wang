(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dataset-dataset-module"],{

/***/ "../../node_modules/raw-loader/index.js!./src/app/pages/chart-without-annotation/dataset/dataset.component.html":
/*!********************************************************************************************************************************************************!*\
  !*** C:/Users/tiven.wang/Documents/GitLab/XXDashboard/node_modules/raw-loader!./src/app/pages/chart-without-annotation/dataset/dataset.component.html ***!
  \********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-xl-4\">\n    <nb-card size=\"medium\">\n      <nb-card-body>\n        <app-interactive class=\"app-chart\"></app-interactive>\n      </nb-card-body>\n    </nb-card>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../node_modules/raw-loader/index.js!./src/app/pages/chart-without-annotation/dataset/interactive/interactive.component.html":
/*!************************************************************************************************************************************************************************!*\
  !*** C:/Users/tiven.wang/Documents/GitLab/XXDashboard/node_modules/raw-loader!./src/app/pages/chart-without-annotation/dataset/interactive/interactive.component.html ***!
  \************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nx-chart\n  [chartType]=\"'Custom'\"\n  [data$]=\"data$\"\n  [defaultOptions]=\"chartOptions\"\n  (chartInit)=\"chartInit($event)\"\n  (chartUpdateAxisPointer)=\"updateAxisPointer($event)\"></nx-chart>"

/***/ }),

/***/ "./src/app/pages/chart-without-annotation/dataset/dataset.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/chart-without-annotation/dataset/dataset.component.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/chart-without-annotation/dataset/dataset.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/chart-without-annotation/dataset/dataset.component.ts ***!
  \*****************************************************************************/
/*! exports provided: DatasetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatasetComponent", function() { return DatasetComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");


var DatasetComponent = /** @class */ (function () {
    function DatasetComponent() {
    }
    DatasetComponent.prototype.ngOnInit = function () {
    };
    DatasetComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dataset',
            template: __webpack_require__(/*! raw-loader!./dataset.component.html */ "../../node_modules/raw-loader/index.js!./src/app/pages/chart-without-annotation/dataset/dataset.component.html"),
            styles: [__webpack_require__(/*! ./dataset.component.scss */ "./src/app/pages/chart-without-annotation/dataset/dataset.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DatasetComponent);
    return DatasetComponent;
}());



/***/ }),

/***/ "./src/app/pages/chart-without-annotation/dataset/dataset.module.ts":
/*!**************************************************************************!*\
  !*** ./src/app/pages/chart-without-annotation/dataset/dataset.module.ts ***!
  \**************************************************************************/
/*! exports provided: DatasetModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatasetModule", function() { return DatasetModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _interactive_interactive_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./interactive/interactive.component */ "./src/app/pages/chart-without-annotation/dataset/interactive/interactive.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var projects_nx_charts_src_public_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! projects/nx-charts/src/public-api */ "../nx-charts/src/public-api.ts");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @nebular/theme */ "../../node_modules/@nebular/theme/fesm5/index.js");
/* harmony import */ var _dataset_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./dataset.component */ "./src/app/pages/chart-without-annotation/dataset/dataset.component.ts");








var routes = [{
        path: '',
        component: _dataset_component__WEBPACK_IMPORTED_MODULE_7__["DatasetComponent"]
    }];
var DatasetModule = /** @class */ (function () {
    function DatasetModule() {
    }
    DatasetModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_interactive_interactive_component__WEBPACK_IMPORTED_MODULE_3__["InteractiveComponent"], _dataset_component__WEBPACK_IMPORTED_MODULE_7__["DatasetComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                projects_nx_charts_src_public_api__WEBPACK_IMPORTED_MODULE_5__["NxChartModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_6__["NbCardModule"],
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]]
        })
    ], DatasetModule);
    return DatasetModule;
}());



/***/ }),

/***/ "./src/app/pages/chart-without-annotation/dataset/interactive/interactive.component.scss":
/*!***********************************************************************************************!*\
  !*** ./src/app/pages/chart-without-annotation/dataset/interactive/interactive.component.scss ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/chart-without-annotation/dataset/interactive/interactive.component.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/pages/chart-without-annotation/dataset/interactive/interactive.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: InteractiveComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InteractiveComponent", function() { return InteractiveComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm5/index.js");



var InteractiveComponent = /** @class */ (function () {
    function InteractiveComponent() {
        this.data$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]({});
        this.chartOptions = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]({
            legend: {},
            tooltip: {
                trigger: 'axis',
                showContent: false
            },
            xAxis: { type: 'category' },
            yAxis: { gridIndex: 0 },
            grid: { top: '55%' },
            series: [
                { type: 'line', smooth: true, seriesLayoutBy: 'row' },
                { type: 'line', smooth: true, seriesLayoutBy: 'row' },
                { type: 'line', smooth: true, seriesLayoutBy: 'row' },
                { type: 'line', smooth: true, seriesLayoutBy: 'row' },
                {
                    type: 'pie',
                    id: 'pie',
                    radius: '30%',
                    center: ['50%', '25%'],
                    label: {
                        formatter: '{b}: {@2012} ({d}%)'
                    },
                    encode: {
                        itemName: 'product',
                        value: '2012',
                        tooltip: '2012'
                    }
                }
            ],
            dataset: {
                source: [
                    ['product', '2012', '2013', '2014', '2015', '2016', '2017'],
                    ['Matcha Latte', 41.1, 30.4, 65.1, 53.3, 83.8, 98.7],
                    ['Milk Tea', 86.5, 92.1, 85.7, 83.1, 73.4, 55.1],
                    ['Cheese Cocoa', 24.1, 67.2, 79.5, 86.4, 65.2, 82.5],
                    ['Walnut Brownie', 55.2, 67.1, 69.2, 72.4, 53.9, 39.1]
                ]
            },
        });
    }
    InteractiveComponent.prototype.ngOnInit = function () {
    };
    InteractiveComponent.prototype.chartInit = function (chartInstance) {
        this.chartInstance = chartInstance;
    };
    InteractiveComponent.prototype.updateAxisPointer = function (event) {
        // console.warn(event);
        var xAxisInfo = event.axesInfo && event.axesInfo[0];
        if (xAxisInfo) {
            var dimension = xAxisInfo.value + 1;
            this.chartInstance.setOption({
                series: {
                    id: 'pie',
                    label: {
                        formatter: '{b}: {@[' + dimension + ']} ({d}%)'
                    },
                    encode: {
                        value: dimension,
                        tooltip: dimension
                    }
                }
            });
        }
    };
    InteractiveComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-interactive',
            template: __webpack_require__(/*! raw-loader!./interactive.component.html */ "../../node_modules/raw-loader/index.js!./src/app/pages/chart-without-annotation/dataset/interactive/interactive.component.html"),
            styles: [__webpack_require__(/*! ./interactive.component.scss */ "./src/app/pages/chart-without-annotation/dataset/interactive/interactive.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], InteractiveComponent);
    return InteractiveComponent;
}());



/***/ })

}]);