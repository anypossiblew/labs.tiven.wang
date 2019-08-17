(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["d3-d3-module"],{

/***/ "../../node_modules/raw-loader/index.js!./src/app/pages/d3/d3.component.html":
/*!*********************************************************************************************************************!*\
  !*** C:/Users/tiven.wang/Documents/GitLab/XXDashboard/node_modules/raw-loader!./src/app/pages/d3/d3.component.html ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nb-route-tabset [tabs]=\"tabs\" fullWidth></nb-route-tabset>"

/***/ }),

/***/ "./src/app/pages/d3/d3.component.scss":
/*!********************************************!*\
  !*** ./src/app/pages/d3/d3.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "::ng-deep .d3 {\n  display: flex;\n}\n::ng-deep .d3 svg {\n  font-size: 10px;\n  flex: 1;\n}\n::ng-deep .d3 svg path,\n::ng-deep .d3 svg text {\n  transition: all 0.3s;\n}"

/***/ }),

/***/ "./src/app/pages/d3/d3.component.ts":
/*!******************************************!*\
  !*** ./src/app/pages/d3/d3.component.ts ***!
  \******************************************/
/*! exports provided: D3Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "D3Component", function() { return D3Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");


let D3Component = class D3Component {
    constructor() {
        this.tabs = [
            {
                title: 'Correlation',
                route: 'correlation',
                icon: 'award-outline',
                responsive: true,
            },
            {
                title: 'Part of a whole',
                route: 'parts',
                icon: 'award-outline',
            },
            {
                title: 'Map',
                route: 'map',
                icon: 'file-text-outline'
            },
            {
                title: 'Flow',
                route: 'flow',
                icon: 'activity-outline'
            }
        ];
    }
    ngOnInit() {
    }
};
D3Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-d3',
        template: __webpack_require__(/*! raw-loader!./d3.component.html */ "../../node_modules/raw-loader/index.js!./src/app/pages/d3/d3.component.html"),
        styles: [__webpack_require__(/*! ./d3.component.scss */ "./src/app/pages/d3/d3.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], D3Component);



/***/ }),

/***/ "./src/app/pages/d3/d3.module.ts":
/*!***************************************!*\
  !*** ./src/app/pages/d3/d3.module.ts ***!
  \***************************************/
/*! exports provided: D3Module */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "D3Module", function() { return D3Module; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _d3_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./d3.component */ "./src/app/pages/d3/d3.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @nebular/theme */ "../../node_modules/@nebular/theme/fesm2015/index.js");






const routes = [{
        path: '',
        component: _d3_component__WEBPACK_IMPORTED_MODULE_3__["D3Component"],
        children: [
            {
                path: '',
                redirectTo: 'correlation',
                pathMatch: 'full',
            },
            {
                path: 'correlation',
                loadChildren: () => Promise.all(/*! import() | correlation-correlation-module */[__webpack_require__.e("default~correlation-correlation-module~flow-flow-module~parts-parts-module"), __webpack_require__.e("correlation-correlation-module")]).then(__webpack_require__.bind(null, /*! ./correlation/correlation.module */ "./src/app/pages/d3/correlation/correlation.module.ts")).then(m => m.CorrelationModule)
            },
            {
                path: 'parts',
                loadChildren: () => Promise.all(/*! import() | parts-parts-module */[__webpack_require__.e("default~correlation-correlation-module~flow-flow-module~parts-parts-module"), __webpack_require__.e("parts-parts-module")]).then(__webpack_require__.bind(null, /*! ./parts/parts.module */ "./src/app/pages/d3/parts/parts.module.ts")).then(m => m.PartsModule)
            },
            {
                path: 'map',
                loadChildren: () => __webpack_require__.e(/*! import() | map-map-module */ "map-map-module").then(__webpack_require__.bind(null, /*! ./map/map.module */ "./src/app/pages/d3/map/map.module.ts")).then(m => m.MapModule)
            },
            {
                path: 'flow',
                loadChildren: () => Promise.all(/*! import() | flow-flow-module */[__webpack_require__.e("default~correlation-correlation-module~flow-flow-module~parts-parts-module"), __webpack_require__.e("flow-flow-module")]).then(__webpack_require__.bind(null, /*! ./flow/flow.module */ "./src/app/pages/d3/flow/flow.module.ts")).then(m => m.FlowModule)
            }
        ]
    }];
let D3Module = class D3Module {
};
D3Module = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_d3_component__WEBPACK_IMPORTED_MODULE_3__["D3Component"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
            _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbRouteTabsetModule"]
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]]
    })
], D3Module);



/***/ })

}]);