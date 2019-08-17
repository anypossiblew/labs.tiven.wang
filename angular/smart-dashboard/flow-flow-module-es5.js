(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["flow-flow-module"],{

/***/ "../../node_modules/raw-loader/index.js!./src/app/pages/d3/flow/chord/chord.component.html":
/*!***********************************************************************************************************************************!*\
  !*** C:/Users/tiven.wang/Documents/GitLab/XXDashboard/node_modules/raw-loader!./src/app/pages/d3/flow/chord/chord.component.html ***!
  \***********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"d3\" #d3Container>\n  <svg [attr.viewBox]=\"viewBox\" text-anchor=\"middle\">\n      <g [attr.transform]=\"'translate('+width/2+','+height/2+')'\">\n        <g>\n          <path *ngFor=\"let d of data?.groups\" fill=\"url(#linear)\" [attr.stroke]=\"'black'\"\n            [attr.d]=\"d.dArc\"></path>\n        </g>\n        <g>\n          <path *ngFor=\"let d of data; let i = index\" [attr.fill]=\"color(i)\" [attr.stroke]=\"'black'\" [attr.fill-opacity]=\"0.5\"\n            [attr.d]=\"d.dRibbon\"></path>\n        </g>\n      </g>\n\n      <defs>\n        <linearGradient id=\"linear\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"0%\">\n          <stop offset=\"0%\"   stop-color=\"#05a\" stop-opacity=\"0.5\" />\n          <stop offset=\"100%\" stop-color=\"#0a5\" stop-opacity=\"1.0\" />\n        </linearGradient>\n      </defs>\n  </svg>\n</div>"

/***/ }),

/***/ "../../node_modules/raw-loader/index.js!./src/app/pages/d3/flow/flow.component.html":
/*!****************************************************************************************************************************!*\
  !*** C:/Users/tiven.wang/Documents/GitLab/XXDashboard/node_modules/raw-loader!./src/app/pages/d3/flow/flow.component.html ***!
  \****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-xl-4\">\n    <nb-card size=\"large\">\n      <nb-card-header>\n        Chord Diagram\n      </nb-card-header>\n      <nb-card-body>\n        <app-chord class=\"app-chart\"></app-chord>\n      </nb-card-body>\n    </nb-card>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/pages/d3/flow/chord/chord.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/pages/d3/flow/chord/chord.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "path:hover {\n  cursor: pointer;\n  fill-opacity: 1;\n}"

/***/ }),

/***/ "./src/app/pages/d3/flow/chord/chord.component.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/d3/flow/chord/chord.component.ts ***!
  \********************************************************/
/*! exports provided: ChordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChordComponent", function() { return ChordComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! d3 */ "../../node_modules/d3/index.js");



var ChordComponent = /** @class */ (function () {
    function ChordComponent() {
        // SVG attributes
        this.width = 0;
        this.height = 0;
        this.margin = 10;
        this.chordBorderWidth = 10;
        this.color = Object(d3__WEBPACK_IMPORTED_MODULE_2__["scaleSequential"])(d3__WEBPACK_IMPORTED_MODULE_2__["interpolateViridis"]).domain([0, 10]);
    }
    ChordComponent.prototype.ngOnInit = function () {
    };
    ChordComponent.prototype.ngAfterViewInit = function () {
        var element = this.d3Container.nativeElement;
        this.height = element.offsetHeight;
        this.width = this.height;
        // Set SVG viewBox attribute
        this.viewBox = [0, 0, this.width, this.height].join(' ');
        this.create();
    };
    ChordComponent.prototype.create = function () {
        // create input data: a square matrix that provides flow between entities
        var matrix = [
            [11975, 5871, 8916, 2868],
            [1951, 10048, 2060, 6171],
            [8010, 16145, 8090, 8045],
            [1013, 990, 940, 6907]
        ];
        var radius = this.width / 2 - this.margin - this.chordBorderWidth;
        var dArc = Object(d3__WEBPACK_IMPORTED_MODULE_2__["arc"])()
            .innerRadius(radius)
            .outerRadius(radius + this.chordBorderWidth);
        var dRibbon = Object(d3__WEBPACK_IMPORTED_MODULE_2__["ribbon"])().radius(radius);
        this.data = Object(d3__WEBPACK_IMPORTED_MODULE_2__["chord"])()
            .padAngle(0.05) // padding between entities (black arc)
            .sortSubgroups(d3__WEBPACK_IMPORTED_MODULE_2__["descending"])(matrix);
        this.data.forEach(function (d) {
            d.dRibbon = dRibbon(d);
        });
        this.data.groups.forEach(function (d) {
            d.dArc = dArc(d);
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('d3Container', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], ChordComponent.prototype, "d3Container", void 0);
    ChordComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-chord',
            template: __webpack_require__(/*! raw-loader!./chord.component.html */ "../../node_modules/raw-loader/index.js!./src/app/pages/d3/flow/chord/chord.component.html"),
            styles: [__webpack_require__(/*! ./chord.component.scss */ "./src/app/pages/d3/flow/chord/chord.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ChordComponent);
    return ChordComponent;
}());



/***/ }),

/***/ "./src/app/pages/d3/flow/flow.component.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/d3/flow/flow.component.ts ***!
  \*************************************************/
/*! exports provided: FlowComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlowComponent", function() { return FlowComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");


var FlowComponent = /** @class */ (function () {
    function FlowComponent() {
    }
    FlowComponent.prototype.ngOnInit = function () {
    };
    FlowComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-flow',
            template: __webpack_require__(/*! raw-loader!./flow.component.html */ "../../node_modules/raw-loader/index.js!./src/app/pages/d3/flow/flow.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FlowComponent);
    return FlowComponent;
}());



/***/ }),

/***/ "./src/app/pages/d3/flow/flow.module.ts":
/*!**********************************************!*\
  !*** ./src/app/pages/d3/flow/flow.module.ts ***!
  \**********************************************/
/*! exports provided: FlowModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlowModule", function() { return FlowModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _flow_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./flow.component */ "./src/app/pages/d3/flow/flow.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _chord_chord_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./chord/chord.component */ "./src/app/pages/d3/flow/chord/chord.component.ts");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @nebular/theme */ "../../node_modules/@nebular/theme/fesm5/index.js");







var routes = [{
        path: '',
        component: _flow_component__WEBPACK_IMPORTED_MODULE_3__["FlowComponent"]
    }];
var FlowModule = /** @class */ (function () {
    function FlowModule() {
    }
    FlowModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_flow_component__WEBPACK_IMPORTED_MODULE_3__["FlowComponent"], _chord_chord_component__WEBPACK_IMPORTED_MODULE_5__["ChordComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                _nebular_theme__WEBPACK_IMPORTED_MODULE_6__["NbCardModule"]
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]]
        })
    ], FlowModule);
    return FlowModule;
}());



/***/ })

}]);