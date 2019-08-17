(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["analytical-list-analytical-list-module"],{

/***/ "../../node_modules/raw-loader/index.js!./src/app/pages/analytical-list/analytical-list.component.html":
/*!***********************************************************************************************************************************************!*\
  !*** C:/Users/tiven.wang/Documents/GitLab/XXDashboard/node_modules/raw-loader!./src/app/pages/analytical-list/analytical-list.component.html ***!
  \***********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nx-smart-filter-bar entitySet=\"SEPMRA_C_ALP_SlsOrdItemCube\"></nx-smart-filter-bar>\r\n\r\n"

/***/ }),

/***/ "./src/app/pages/analytical-list/analytical-list.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/pages/analytical-list/analytical-list.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/analytical-list/analytical-list.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/pages/analytical-list/analytical-list.component.ts ***!
  \********************************************************************/
/*! exports provided: AnalyticalListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnalyticalListComponent", function() { return AnalyticalListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");


let AnalyticalListComponent = class AnalyticalListComponent {
    constructor() { }
    ngOnInit() {
    }
};
AnalyticalListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-analytical-list',
        template: __webpack_require__(/*! raw-loader!./analytical-list.component.html */ "../../node_modules/raw-loader/index.js!./src/app/pages/analytical-list/analytical-list.component.html"),
        styles: [__webpack_require__(/*! ./analytical-list.component.scss */ "./src/app/pages/analytical-list/analytical-list.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], AnalyticalListComponent);



/***/ }),

/***/ "./src/app/pages/analytical-list/analytical-list.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/analytical-list/analytical-list.module.ts ***!
  \*****************************************************************/
/*! exports provided: AnalyticalListModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnalyticalListModule", function() { return AnalyticalListModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var projects_nx_cards_src_public_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! projects/nx-cards/src/public-api */ "../nx-cards/src/public-api.ts");
/* harmony import */ var projects_nx_charts_src_public_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! projects/nx-charts/src/public-api */ "../nx-charts/src/public-api.ts");
/* harmony import */ var _analytical_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./analytical-list.component */ "./src/app/pages/analytical-list/analytical-list.component.ts");







const routes = [{
        path: '',
        component: _analytical_list_component__WEBPACK_IMPORTED_MODULE_6__["AnalyticalListComponent"]
    }];
let AnalyticalListModule = class AnalyticalListModule {
};
AnalyticalListModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_analytical_list_component__WEBPACK_IMPORTED_MODULE_6__["AnalyticalListComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes),
            projects_nx_cards_src_public_api__WEBPACK_IMPORTED_MODULE_4__["NxCardsModule"],
            projects_nx_charts_src_public_api__WEBPACK_IMPORTED_MODULE_5__["NxSmartFilterModule"]
        ],
        exports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]
        ]
    })
], AnalyticalListModule);



/***/ })

}]);