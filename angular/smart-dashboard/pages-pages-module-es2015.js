(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-pages-module"],{

/***/ "../../node_modules/raw-loader/index.js!./src/app/pages/pages.component.html":
/*!*********************************************************************************************************************!*\
  !*** C:/Users/tiven.wang/Documents/GitLab/XXDashboard/node_modules/raw-loader!./src/app/pages/pages.component.html ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/pages/pages.component.ts":
/*!******************************************!*\
  !*** ./src/app/pages/pages.component.ts ***!
  \******************************************/
/*! exports provided: PagesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagesComponent", function() { return PagesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");


let PagesComponent = class PagesComponent {
    constructor() { }
    ngOnInit() {
    }
};
PagesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-pages',
        template: __webpack_require__(/*! raw-loader!./pages.component.html */ "../../node_modules/raw-loader/index.js!./src/app/pages/pages.component.html")
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], PagesComponent);



/***/ }),

/***/ "./src/app/pages/pages.module.ts":
/*!***************************************!*\
  !*** ./src/app/pages/pages.module.ts ***!
  \***************************************/
/*! exports provided: PagesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagesModule", function() { return PagesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _pages_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages.component */ "./src/app/pages/pages.component.ts");





const routes = [
    {
        path: '',
        redirectTo: 'chart-without-annotation',
        pathMatch: 'full'
    },
    {
        path: 'chart-without-annotation',
        loadChildren: () => __webpack_require__.e(/*! import() | chart-without-annotation-chart-without-annotation-module */ "chart-without-annotation-chart-without-annotation-module").then(__webpack_require__.bind(null, /*! ./chart-without-annotation/chart-without-annotation.module */ "./src/app/pages/chart-without-annotation/chart-without-annotation.module.ts"))
            .then(m => m.ChartWithoutAnnotationModule),
    },
    {
        path: 'cash-flow',
        loadChildren: () => Promise.all(/*! import() | cash-flow-cash-flow-module */[__webpack_require__.e("default~analytical-list-analytical-list-module~cash-flow-cash-flow-module~nx-chart-tester-nx-chart-t~6633268c"), __webpack_require__.e("cash-flow-cash-flow-module")]).then(__webpack_require__.bind(null, /*! ./cash-flow/cash-flow.module */ "./src/app/pages/cash-flow/cash-flow.module.ts"))
            .then(m => m.CashFlowModule),
    },
    {
        path: 'analytical-list',
        loadChildren: () => Promise.all(/*! import() | analytical-list-analytical-list-module */[__webpack_require__.e("default~analytical-list-analytical-list-module~cash-flow-cash-flow-module~nx-chart-tester-nx-chart-t~6633268c"), __webpack_require__.e("analytical-list-analytical-list-module")]).then(__webpack_require__.bind(null, /*! ./analytical-list/analytical-list.module */ "./src/app/pages/analytical-list/analytical-list.module.ts"))
            .then(m => m.AnalyticalListModule),
    },
    {
        path: 'nx-chart-tester',
        loadChildren: () => Promise.all(/*! import() | nx-chart-tester-nx-chart-tester-module */[__webpack_require__.e("default~analytical-list-analytical-list-module~cash-flow-cash-flow-module~nx-chart-tester-nx-chart-t~6633268c"), __webpack_require__.e("nx-chart-tester-nx-chart-tester-module")]).then(__webpack_require__.bind(null, /*! ./nx-chart-tester/nx-chart-tester.module */ "./src/app/pages/nx-chart-tester/nx-chart-tester.module.ts"))
            .then(m => m.NxChartTesterModule),
    },
    {
        path: 'd3',
        loadChildren: () => __webpack_require__.e(/*! import() | d3-d3-module */ "d3-d3-module").then(__webpack_require__.bind(null, /*! ./d3/d3.module */ "./src/app/pages/d3/d3.module.ts"))
            .then(m => m.D3Module),
    }
];
let PagesModule = class PagesModule {
};
PagesModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_pages_component__WEBPACK_IMPORTED_MODULE_4__["PagesComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes),
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
    })
], PagesModule);



/***/ })

}]);