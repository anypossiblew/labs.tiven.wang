(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "../../node_modules/raw-loader/index.js!../nx-charts/src/lib/nx-chart/nx-chart.component.html":
/*!**************************************************************************************************************************************!*\
  !*** C:/Users/tiven.wang/Documents/GitLab/XXDashboard/node_modules/raw-loader!../nx-charts/src/lib/nx-chart/nx-chart.component.html ***!
  \**************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"echart-container\">\n    <div [style.opacity]=\"noData && !bussing ? '0' : '1'\" \n         [style.visibility]=\"noData && !bussing ? 'hidden' : 'visible'\"\n        echarts [options]=\"option\" [initOpts]=\"chartInitOpts\"\n        [theme]=\"theme\" \n        (chartInit)=\"chartInit.emit($event);\"\n        class=\"echart\"\n        ></div>\n    <div [style.opacity]=\"noData ? '1' : '0' \" \n         [style.visibility]=\"noData ? 'visible' : 'hidden'\" \n         class=\"echart-no-data\">\n        <span>No Data</span>\n    </div>\n    <div *ngIf=\"debugging\" class=\"echart-debugging\">\n        <button class=\"btn btn-primary\" (click)=\"debugChartOptions()\">out chart options</button>\n        <button class=\"btn btn-primary\" (click)=\"debugEntityType()\">out EntityType</button>\n    </div>\n</div>\n"

/***/ }),

/***/ "../../node_modules/raw-loader/index.js!../nx-charts/src/lib/smart-charts/smart-charts.component.html":
/*!**********************************************************************************************************************************************!*\
  !*** C:/Users/tiven.wang/Documents/GitLab/XXDashboard/node_modules/raw-loader!../nx-charts/src/lib/smart-charts/smart-charts.component.html ***!
  \**********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nx-chart [debugging]=\"debugging\"\n  [title]=\"chartTitle\"\n  [theme]=\"chartTheme\"\n  [entitySet]=\"settings.entitySet\"\n  [dataSource]=\"settings.dataSource\"\n  [chartType]=\"chartType\"\n  [customChartType]=\"customChartType\"\n  [defaultOptions]=\"chartOptions\"\n  [entityType]=\"entityType\"\n  [dimensions]=\"dimensions\"\n  [dimensionAttributes]=\"dimensionAttributes\"\n  [properties]=\"properties\"\n  [measures]=\"measures\"\n  [odataService]=\"odataService\"\n  [data$]=\"onRender$\"\n  [beforeRenderChart]=\"beforeRenderChart\"\n  [dataZoom]=\"dataZoom\"\n  [showDimensionsTitle]=\"showDimensionsTitle\"\n  [showMeasuresTitle]=\"showMeasuresTitle\"\n  [legendVisible]=\"legendVisible\"\n  [showZoomButtons]=\"showZoomButtons\"\n  (chartInit)=\"chartInit.next($event)\"\n  (chartClick)=\"chartClick.emit($event)\"\n  >\n</nx-chart>"

/***/ }),

/***/ "../../node_modules/raw-loader/index.js!../nx-charts/src/lib/smart-filter/smart-filter-bar/smart-filter-bar.component.html":
/*!*******************************************************************************************************************************************************************!*\
  !*** C:/Users/tiven.wang/Documents/GitLab/XXDashboard/node_modules/raw-loader!../nx-charts/src/lib/smart-filter/smart-filter-bar/smart-filter-bar.component.html ***!
  \*******************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"form\" (ngSubmit)=\"onSubmit()\">\n    <div class=\"form-row\">\n      <!-- <div class=\"form-group col-md-2\">\n        <i class=\"glyphicon glyphicon-search\"></i>\n        <input formControlName=\"firstName\" type=\"email\" class=\"form-control\" id=\"exampleInputEmail1\"\n          aria-describedby=\"emailHelp\" placeholder=\"Enter email\">\n        <small id=\"emailHelp\" class=\"form-text text-muted\">We'll never share your email with anyone else.</small>\n      </div> -->\n      <div class=\"form-group col-md-2\" *ngFor=\"let control of selectionFields\">\n        <nx-smart-filter [control]=\"control\" [formGroup]=\"form\"></nx-smart-filter>\n      </div>\n\n      <!-- <div class=\"form-group col-md-2\" *ngFor=\"let control of selectionFields\">\n        <label class=\"sr-only\">{{control}}</label>\n        <div class=\"input-group\">\n            <tag-input [formControlName]=\"control\" \n                      placeholder=\"{{control}}\"\n                      secondaryPlaceholder=\"{{control}}\"\n                      >\n            </tag-input>\n          <input [formControlName]=\"control\" type=\"text\" class=\"form-control\"\n            placeholder=\"{{control}}\">\n          <span class=\"input-group-inner-append\">\n            <button class=\"input-group-text\" type=\"button\">\n              <nb-icon icon=\"browser-outline\"></nb-icon>\n            </button>\n          </span>\n        </div>\n      </div> -->\n    </div>\n  \n    <button type=\"submit\" nbButton [disabled]=\"!form.valid\">Submit</button>\n    \n  </form>\n  \n  \n  <p>\n    Value: {{ form.value }}\n  </p>\n  "

/***/ }),

/***/ "../../node_modules/raw-loader/index.js!../nx-charts/src/lib/smart-filter/smart-filter/smart-filter.component.html":
/*!***********************************************************************************************************************************************************!*\
  !*** C:/Users/tiven.wang/Documents/GitLab/XXDashboard/node_modules/raw-loader!../nx-charts/src/lib/smart-filter/smart-filter/smart-filter.component.html ***!
  \***********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"formGroup\">\n  <label class=\"sr-only\">{{control}}</label>\n  <div class=\"input-group\">\n    <tag-input [formControlName]=\"control\" placeholder=\"{{control}}\" secondaryPlaceholder=\"{{control}}\">\n    </tag-input>\n    <!-- <input [formControlName]=\"control\" type=\"text\" class=\"form-control\"\n                placeholder=\"{{control}}\"> -->\n    <span class=\"input-group-inner-append\">\n      <button class=\"input-group-text\" type=\"button\" (click)=\"onValueHelp($event)\">\n        <nb-icon icon=\"browser-outline\"></nb-icon>\n      </button>\n    </span>\n  </div>\n</form>\n"

/***/ }),

/***/ "../../node_modules/raw-loader/index.js!../nx-charts/src/lib/smart-filter/value-help-dialog/value-help-dialog.component.html":
/*!*********************************************************************************************************************************************************************!*\
  !*** C:/Users/tiven.wang/Documents/GitLab/XXDashboard/node_modules/raw-loader!../nx-charts/src/lib/smart-filter/value-help-dialog/value-help-dialog.component.html ***!
  \*********************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nb-card>\n  <nb-card-header>{{ control }}</nb-card-header>\n  <nb-card-body>\n\n    <ng-container *ngTemplateOutlet=\"templateRef; context: {\n        $implicit: conditions.includes\n      }\"></ng-container>\n\n    <ng-container *ngTemplateOutlet=\"templateRef; context: {\n      $implicit: conditions.excludes\n    }\"></ng-container>\n    \n<!-- \n    <div class=\"container\">\n      <div *ngFor=\"let condition of conditions.includes; let i = index; let first = first; let last = last\" class=\"row\">\n        <nb-select placeholder=\"{{ control }}\" [selected]=\"control\" class=\"col col-xl-3\">\n          <nb-option value=\"{{ condition.path }}\">{{ condition.path }}</nb-option>\n        </nb-select>\n        <nb-select placeholder=\"Filter Operator\" [(selected)]=\"condition.operator\" class=\"col col-xl-1\">\n          <nb-option [value]=\"filterOperator[1]\" *ngFor=\"let filterOperator of filterOperators | entries\">{{ filterOperator[0] }}</nb-option>\n        </nb-select>\n        <div class=\"col col-xl-3\">\n          <input nbInput placeholder=\"{{ control }}\" [(ngModel)]=\"condition.value1\" #ctrl1=\"ngModel\" >\n        </div>\n        <div class=\"col col-xl-3\" *ngIf=\"condition.operator == 'BT'\">\n          <input nbInput placeholder=\"到\" [(ngModel)]=\"condition.value2\" #ctrl2=\"ngModel\" class=\"col\">\n        </div>\n        <button nbButton (click)=\"conditions.includes.splice(i, 1)\">\n            <nb-icon icon=\"minus-circle-outline\"></nb-icon>\n        </button>\n        <button *ngIf=\"last\" nbButton (click)=\"addCondition(conditions.includes)\">\n          <nb-icon icon=\"plus-circle-outline\"></nb-icon>\n        </button>\n      </div>\n    </div>\n    <nb-list>\n      <nb-list-item *ngFor=\"let condition of conditions.excludes\">\n        <nb-select placeholder=\"{{ control }}\" [selected]=\"control\">\n          <nb-option value=\"{{ control }}\">{{ control }}</nb-option>\n        </nb-select>\n        <nb-select placeholder=\"Filter Operator\" [selected]=\"filterOperators[0]\">\n          <nb-option value=\"{{ filterOperator }}\" *ngFor=\"let filterOperator of filterOperators | keys\">\n            {{ filterOperator }}</nb-option>\n        </nb-select>\n        <input nbInput placeholder=\"{{ control }}\">\n      </nb-list-item>\n    </nb-list> -->\n\n  </nb-card-body>\n  <nb-card-footer>\n\n    <nb-accordion multi>\n      <nb-accordion-item>\n        <nb-accordion-item-header>\n          选定条件\n        </nb-accordion-item-header>\n        <nb-accordion-item-body>\n          \n        </nb-accordion-item-body>\n      </nb-accordion-item>\n    </nb-accordion>\n    <button class=\"cancel\" nbButton status=\"danger\" (click)=\"cancel()\">Cancel</button>\n    <button nbButton (click)=\"submit()\">Submit</button>\n  </nb-card-footer>\n</nb-card>\n\n<ng-template #templateRef let-conditions let-other=\"aContextProperty\">\n  <div class=\"container\">\n    <div *ngFor=\"let condition of conditions; let i = index; let first = first; let last = last\" class=\"row\">\n      <nb-select placeholder=\"{{ control }}\" [selected]=\"control\" class=\"col col-xl-3\">\n        <nb-option value=\"{{ condition.path }}\">{{ condition.path }}</nb-option>\n      </nb-select>\n      <nb-select placeholder=\"Filter Operator\" [(selected)]=\"condition.operator\" class=\"col col-xl-1\">\n        <nb-option [value]=\"filterOperator[1]\" *ngFor=\"let filterOperator of filterOperators | entries\">{{ filterOperator[0] }}</nb-option>\n      </nb-select>\n      <div class=\"col col-xl-3\">\n        <input nbInput placeholder=\"{{ control }}\" [(ngModel)]=\"condition.value1\" #ctrl1=\"ngModel\" >\n      </div>\n      <div class=\"col col-xl-3\" *ngIf=\"condition.operator == 'BT'\">\n        <input nbInput placeholder=\"到\" [(ngModel)]=\"condition.value2\" #ctrl2=\"ngModel\" class=\"col\">\n      </div>\n      <button nbButton (click)=\"conditions.splice(i, 1)\">\n          <nb-icon icon=\"minus-circle-outline\"></nb-icon>\n      </button>\n      <button *ngIf=\"last\" nbButton (click)=\"addCondition(conditions)\">\n        <nb-icon icon=\"plus-circle-outline\"></nb-icon>\n      </button>\n    </div>\n  </div>\n</ng-template>"

/***/ }),

/***/ "../../node_modules/raw-loader/index.js!../nx-charts/src/lib/smart-table/smart-table.component.html":
/*!********************************************************************************************************************************************!*\
  !*** C:/Users/tiven.wang/Documents/GitLab/XXDashboard/node_modules/raw-loader!../nx-charts/src/lib/smart-table/smart-table.component.html ***!
  \********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  smart-table works!\n</p>\n"

/***/ }),

/***/ "../../node_modules/raw-loader/index.js!./src/app/@theme/components/header/header.component.html":
/*!*****************************************************************************************************************************************!*\
  !*** C:/Users/tiven.wang/Documents/GitLab/XXDashboard/node_modules/raw-loader!./src/app/@theme/components/header/header.component.html ***!
  \*****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"header-container\">\n  <div class=\"logo-container\">\n    <a (click)=\"toggleSidebar()\" href=\"#\" class=\"sidebar-toggle\">\n      <nb-icon icon=\"menu-2-outline\"></nb-icon>\n    </a>\n    <a class=\"logo\" href=\"#\" (click)=\"navigateHome()\">Smart Dashboard</a>\n  </div>\n  <nb-select [selected]=\"currentTheme\" (selectedChange)=\"changeTheme($event)\" status=\"primary\">\n    <nb-option *ngFor=\"let theme of themes\" [value]=\"theme.value\"> {{ theme.name }}</nb-option>\n  </nb-select>\n</div>\n"

/***/ }),

/***/ "../../node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!*************************************************************************************************************!*\
  !*** C:/Users/tiven.wang/Documents/GitLab/XXDashboard/node_modules/raw-loader!./src/app/app.component.html ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nb-layout windowMode>\r\n  <nb-layout-header fixed>\r\n      <app-header></app-header>\r\n  </nb-layout-header>\r\n\r\n  <nb-sidebar class=\"menu-sidebar\" tag=\"menu-sidebar\" state=\"compacted\" responsive>\r\n    <nb-menu [items]=\"menu\"></nb-menu>\r\n  </nb-sidebar>\r\n\r\n  <nb-layout-column >\r\n    <router-outlet></router-outlet>\r\n  </nb-layout-column>\r\n\r\n  <!-- <nb-layout-column>\r\n    <div class=\"row\">\r\n      <div class=\"col-xl-12\">\r\n          <ngx-smart-chart style=\"height: 500px;width: 500px;position: relative;\"\r\n            [entitySet]=\"'SEPMRA_C_ALP_SlsOrdItemCube'\"\r\n            [chartType]=\"'Pie'\"\r\n            [defaultOptions]=\"{}\"\r\n            [dimensions]=\"['DeliveryCalendarQuarter']\"\r\n            [measures]=\"['NetAmount']\"\r\n            >\r\n          </ngx-smart-chart>\r\n      </div>\r\n    </div>\r\n  </nb-layout-column> -->\r\n</nb-layout>\r\n"

/***/ }),

/***/ "../nx-annotation/src/lib/data-services/annotations.ts":
/*!*************************************************************!*\
  !*** ../nx-annotation/src/lib/data-services/annotations.ts ***!
  \*************************************************************/
/*! exports provided: ChartType, SelectionRangeSignType, SelectionRangeOptionType, Parameter, IntervalParameter, ChartDefinitionType, ChartDimensionAttributeType, ChartMeasureAttributeType, ChartDimensionRoleType, ChartMeasureRoleType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartType", function() { return ChartType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectionRangeSignType", function() { return SelectionRangeSignType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectionRangeOptionType", function() { return SelectionRangeOptionType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Parameter", function() { return Parameter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntervalParameter", function() { return IntervalParameter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartDefinitionType", function() { return ChartDefinitionType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartDimensionAttributeType", function() { return ChartDimensionAttributeType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartMeasureAttributeType", function() { return ChartMeasureAttributeType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartDimensionRoleType", function() { return ChartDimensionRoleType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartMeasureRoleType", function() { return ChartMeasureRoleType; });
/**
 * https://wiki.scn.sap.com/wiki/display/EmTech/OData+4.0+Vocabularies+-+SAP+UI
 */
/**
 * From
 * https://wiki.scn.sap.com/wiki/display/EmTech/OData+4.0+Vocabularies+-+SAP+UI#ChartType
 */
var ChartType;
(function (ChartType) {
    ChartType["Column"] = "Column";
    ChartType["ColumnStacked"] = "ColumnStacked";
    ChartType["ColumnDual"] = "ColumnDual";
    ChartType["ColumnStackedDual"] = "ColumnStackedDual";
    ChartType["ColumnStacked100"] = "ColumnStacked100";
    ChartType["ColumnStackedDual100"] = "ColumnStackedDual100";
    ChartType["Bar"] = "Bar";
    ChartType["BarStacked"] = "BarStacked";
    ChartType["BarDual"] = "BarDual";
    ChartType["BarStackedDual"] = "BarStackedDual";
    ChartType["BarStacked100"] = "BarStacked100";
    ChartType["BarStackedDual100"] = "BarStackedDual100";
    ChartType["Area"] = "Area";
    ChartType["AreaStacked"] = "AreaStacked";
    ChartType["AreaStacked100"] = "AreaStacked100";
    ChartType["HorizontalArea"] = "HorizontalArea";
    ChartType["HorizontalAreaStacked"] = "HorizontalAreaStacked";
    ChartType["HorizontalAreaStacked100"] = "HorizontalAreaStacked100";
    ChartType["Line"] = "Line";
    ChartType["LineDual"] = "LineDual";
    ChartType["Combination"] = "Combination";
    ChartType["CombinationStacked"] = "CombinationStacked";
    ChartType["CombinationDual"] = "CombinationDual";
    ChartType["CombinationStackedDual"] = "CombinationStackedDual";
    ChartType["HorizontalCombinationStacked"] = "HorizontalCombinationStacked";
    ChartType["Pie"] = "Pie";
    ChartType["Donut"] = "Donut";
    ChartType["Scatter"] = "Scatter";
    ChartType["Bubble"] = "Bubble";
    ChartType["Radar"] = "Radar";
    ChartType["HeatMap"] = "HeatMap";
    ChartType["TreeMap"] = "TreeMap";
    ChartType["Waterfall"] = "Waterfall";
    ChartType["Bullet"] = "Bullet";
    ChartType["VerticalBullet"] = "VerticalBullet";
    ChartType["HorizontalWaterfall"] = "HorizontalWaterfall";
    ChartType["HorizontalCombinationDual"] = "HorizontalCombinationDual";
    ChartType["HorizontalCombinationStackedDual"] = "HorizontalCombinationStackedDual";
    // Custom types
    ChartType["Custom"] = "Custom";
    ChartType["GeoMap"] = "GeoMap";
    ChartType["Timeline"] = "Timeline";
})(ChartType || (ChartType = {}));
var SelectionRangeSignType;
(function (SelectionRangeSignType) {
    SelectionRangeSignType["I"] = "I";
    SelectionRangeSignType["E"] = "E";
})(SelectionRangeSignType || (SelectionRangeSignType = {}));
var SelectionRangeOptionType;
(function (SelectionRangeOptionType) {
    SelectionRangeOptionType["EQ"] = "EQ";
    SelectionRangeOptionType["BT"] = "BT";
    SelectionRangeOptionType["CP"] = "CP";
    SelectionRangeOptionType["LE"] = "LE";
    SelectionRangeOptionType["GE"] = "GE";
    SelectionRangeOptionType["NE"] = "NE";
    SelectionRangeOptionType["NB"] = "NB";
    SelectionRangeOptionType["NP"] = "NP";
    SelectionRangeOptionType["GT"] = "GT";
    SelectionRangeOptionType["LT"] = "LT";
})(SelectionRangeOptionType || (SelectionRangeOptionType = {}));
var Parameter = /** @class */ (function () {
    function Parameter() {
    }
    return Parameter;
}());

var IntervalParameter = /** @class */ (function () {
    function IntervalParameter() {
    }
    return IntervalParameter;
}());

var ChartDefinitionType = /** @class */ (function () {
    function ChartDefinitionType(_annotation) {
        this._annotation = _annotation;
        var titleProperty = this.getProperty('Title');
        this.Title = titleProperty && titleProperty.$.String;
        var chartTypeProperty = this.getProperty('ChartType');
        this.ChartType = chartTypeProperty && chartTypeProperty.$.EnumMember.split('/')[1];
        var dimensionsProperty = this.getProperty('Dimensions');
        this.Dimensions = dimensionsProperty && dimensionsProperty.Collection[0].PropertyPath;
        var dimensionAttributes = this.getProperty('DimensionAttributes');
        this.DimensionAttributes = dimensionAttributes &&
            dimensionAttributes.Collection[0].Record
                .map(function (record) { return new ChartDimensionAttributeType(record); });
        var measuresProperty = this.getProperty('Measures');
        this.Measures = measuresProperty && measuresProperty.Collection[0].PropertyPath;
        // MeasureAttributes
        var measureAttributes = this.getProperty('MeasureAttributes');
        this.MeasureAttributes = measureAttributes &&
            measureAttributes.Collection[0].Record
                .map(function (record) { return new ChartMeasureAttributeType(record); });
    }
    ChartDefinitionType.prototype.getProperty = function (name) {
        return this._annotation.PropertyValue.find(function (property) { return property.$.Property === name; });
    };
    return ChartDefinitionType;
}());

var ChartDimensionAttributeType = /** @class */ (function () {
    function ChartDimensionAttributeType(_annotation) {
        this._annotation = _annotation;
        var dimensionProperty = this.getProperty('Dimension');
        this.Dimension = dimensionProperty && dimensionProperty.$.PropertyPath;
        var roleProperty = this.getProperty('Role');
        this.Role = roleProperty && roleProperty.$.EnumMember.split('/')[1];
    }
    ChartDimensionAttributeType.prototype.getProperty = function (name) {
        return this._annotation.PropertyValue.find(function (property) { return property.$.Property === name; });
    };
    return ChartDimensionAttributeType;
}());

var ChartMeasureAttributeType = /** @class */ (function () {
    function ChartMeasureAttributeType(_annotation) {
        this._annotation = _annotation;
        var measure = this.getProperty('Measure');
        this.Measure = measure && measure.$.PropertyPath;
        var roleProperty = this.getProperty('Role');
        this.Role = roleProperty && roleProperty.$.EnumMember.split('/')[1];
    }
    ChartMeasureAttributeType.prototype.getProperty = function (name) {
        return this._annotation.PropertyValue.find(function (property) { return property.$.Property === name; });
    };
    return ChartMeasureAttributeType;
}());

var ChartDimensionRoleType;
(function (ChartDimensionRoleType) {
    ChartDimensionRoleType["Category"] = "Category";
    ChartDimensionRoleType["Series"] = "Series";
    ChartDimensionRoleType["Category2"] = "Category2";
})(ChartDimensionRoleType || (ChartDimensionRoleType = {}));
var ChartMeasureRoleType;
(function (ChartMeasureRoleType) {
    ChartMeasureRoleType["Axis1"] = "Axis1";
    ChartMeasureRoleType["Axis2"] = "Axis2";
    ChartMeasureRoleType["Axis3"] = "Axis3";
})(ChartMeasureRoleType || (ChartMeasureRoleType = {}));


/***/ }),

/***/ "../nx-annotation/src/lib/data-services/index.ts":
/*!*******************************************************!*\
  !*** ../nx-annotation/src/lib/data-services/index.ts ***!
  \*******************************************************/
/*! exports provided: ChartType, SelectionRangeSignType, SelectionRangeOptionType, Parameter, IntervalParameter, ChartDefinitionType, ChartDimensionAttributeType, ChartMeasureAttributeType, ChartDimensionRoleType, ChartMeasureRoleType, NxAnnotationService, Annotation, SelectionFieldsAnnotation, DataPointAnnotation, LineItemAnnotation, ChartAnnotation, PresentationVariantAnnotation, SortOrder, SelectionVariantAnnotation, Annotations, Reference, Namespace, MetaData, Property, EntityType, EntityContainer, EntitySet, AssociationSet, End, NavigationProperty, NxMetadataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _annotations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./annotations */ "../nx-annotation/src/lib/data-services/annotations.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ChartType", function() { return _annotations__WEBPACK_IMPORTED_MODULE_0__["ChartType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SelectionRangeSignType", function() { return _annotations__WEBPACK_IMPORTED_MODULE_0__["SelectionRangeSignType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SelectionRangeOptionType", function() { return _annotations__WEBPACK_IMPORTED_MODULE_0__["SelectionRangeOptionType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Parameter", function() { return _annotations__WEBPACK_IMPORTED_MODULE_0__["Parameter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IntervalParameter", function() { return _annotations__WEBPACK_IMPORTED_MODULE_0__["IntervalParameter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ChartDefinitionType", function() { return _annotations__WEBPACK_IMPORTED_MODULE_0__["ChartDefinitionType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ChartDimensionAttributeType", function() { return _annotations__WEBPACK_IMPORTED_MODULE_0__["ChartDimensionAttributeType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ChartMeasureAttributeType", function() { return _annotations__WEBPACK_IMPORTED_MODULE_0__["ChartMeasureAttributeType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ChartDimensionRoleType", function() { return _annotations__WEBPACK_IMPORTED_MODULE_0__["ChartDimensionRoleType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ChartMeasureRoleType", function() { return _annotations__WEBPACK_IMPORTED_MODULE_0__["ChartMeasureRoleType"]; });

/* harmony import */ var _meta_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./meta-data */ "../nx-annotation/src/lib/data-services/meta-data.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MetaData", function() { return _meta_data__WEBPACK_IMPORTED_MODULE_1__["MetaData"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Property", function() { return _meta_data__WEBPACK_IMPORTED_MODULE_1__["Property"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EntityType", function() { return _meta_data__WEBPACK_IMPORTED_MODULE_1__["EntityType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EntityContainer", function() { return _meta_data__WEBPACK_IMPORTED_MODULE_1__["EntityContainer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EntitySet", function() { return _meta_data__WEBPACK_IMPORTED_MODULE_1__["EntitySet"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AssociationSet", function() { return _meta_data__WEBPACK_IMPORTED_MODULE_1__["AssociationSet"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "End", function() { return _meta_data__WEBPACK_IMPORTED_MODULE_1__["End"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NavigationProperty", function() { return _meta_data__WEBPACK_IMPORTED_MODULE_1__["NavigationProperty"]; });

/* harmony import */ var _metadata_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./metadata.service */ "../nx-annotation/src/lib/data-services/metadata.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NxMetadataService", function() { return _metadata_service__WEBPACK_IMPORTED_MODULE_2__["NxMetadataService"]; });

/* harmony import */ var _nx_annotation_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nx-annotation.service */ "../nx-annotation/src/lib/data-services/nx-annotation.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NxAnnotationService", function() { return _nx_annotation_service__WEBPACK_IMPORTED_MODULE_3__["NxAnnotationService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Annotation", function() { return _nx_annotation_service__WEBPACK_IMPORTED_MODULE_3__["Annotation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SelectionFieldsAnnotation", function() { return _nx_annotation_service__WEBPACK_IMPORTED_MODULE_3__["SelectionFieldsAnnotation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DataPointAnnotation", function() { return _nx_annotation_service__WEBPACK_IMPORTED_MODULE_3__["DataPointAnnotation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LineItemAnnotation", function() { return _nx_annotation_service__WEBPACK_IMPORTED_MODULE_3__["LineItemAnnotation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ChartAnnotation", function() { return _nx_annotation_service__WEBPACK_IMPORTED_MODULE_3__["ChartAnnotation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PresentationVariantAnnotation", function() { return _nx_annotation_service__WEBPACK_IMPORTED_MODULE_3__["PresentationVariantAnnotation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SortOrder", function() { return _nx_annotation_service__WEBPACK_IMPORTED_MODULE_3__["SortOrder"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SelectionVariantAnnotation", function() { return _nx_annotation_service__WEBPACK_IMPORTED_MODULE_3__["SelectionVariantAnnotation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Annotations", function() { return _nx_annotation_service__WEBPACK_IMPORTED_MODULE_3__["Annotations"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Reference", function() { return _nx_annotation_service__WEBPACK_IMPORTED_MODULE_3__["Reference"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Namespace", function() { return _nx_annotation_service__WEBPACK_IMPORTED_MODULE_3__["Namespace"]; });







/***/ }),

/***/ "../nx-annotation/src/lib/data-services/meta-data.ts":
/*!***********************************************************!*\
  !*** ../nx-annotation/src/lib/data-services/meta-data.ts ***!
  \***********************************************************/
/*! exports provided: MetaData, Property, EntityType, EntityContainer, EntitySet, AssociationSet, End, NavigationProperty */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MetaData", function() { return MetaData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Property", function() { return Property; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EntityType", function() { return EntityType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EntityContainer", function() { return EntityContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EntitySet", function() { return EntitySet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssociationSet", function() { return AssociationSet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "End", function() { return End; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationProperty", function() { return NavigationProperty; });
var MetaData = /** @class */ (function () {
    function MetaData(metadata) {
        this.metadata = metadata;
        this.entitySets = this.getSchema()['EntityContainer'][0]['EntitySet'].map(function (entitySet) { return new EntitySet(entitySet); });
        this.entityContainer = new EntityContainer(this.getSchema()['EntityContainer'][0]);
    }
    MetaData.prototype.getEntityType = function (entityType) {
        return new EntityType(this.getSchema(0)['EntityType'].filter(function (element) {
            return element.$.Name === entityType;
        })[0]);
    };
    MetaData.prototype.getEntityTypeBySet = function (entitySet) {
        var entityType = this.getSchema(0)['EntityContainer'][0]['EntitySet'].filter(function (element) { return element.$.Name === entitySet; })[0].$['EntityType'];
        return this.getEntityType(entityType.split('.')[1]);
    };
    MetaData.prototype.getEdmx = function () {
        return this.metadata['edmx:Edmx'];
    };
    MetaData.prototype.getDataServices = function (index) {
        if (index === void 0) { index = 0; }
        return this.getEdmx()['edmx:DataServices'][index];
    };
    MetaData.prototype.getSchema = function (index) {
        if (index === void 0) { index = 0; }
        return this.getDataServices(0)['Schema'][index];
    };
    MetaData.prototype.getEntityContainer = function () {
        return this.getSchema().EntityContainer[0];
    };
    MetaData.prototype.getEntitySet = function (entityName) {
        return this.entitySets.find(function (entitySet) { return entitySet.name === entityName; });
    };
    MetaData.prototype.getParametersEntitySet = function (entitySetName) {
        var _this = this;
        var fromEntitySet, fromEntityType, navigation;
        var associationSet = this.entityContainer.AssociationSets.filter(function (associationSet) { return associationSet.getToEnd().EntitySet === entitySetName; })
            .find(function (associationSet) {
            fromEntitySet = associationSet.getFromEnd().EntitySet;
            fromEntityType = _this.getEntityTypeBySet(fromEntitySet);
            return fromEntityType.getAttribute('sap:semantics') === 'parameters';
        });
        if (associationSet) {
            navigation = fromEntityType.getNavigationByRelationship(associationSet.Association);
        }
        else {
            console.error("Can't find ParametersEntity for EntitySet %s", entitySetName);
        }
        return [fromEntitySet, navigation];
    };
    MetaData.prototype.getAssociationSets = function () {
        return this.getEntityContainer().AssociationSet;
    };
    return MetaData;
}());

var Property = /** @class */ (function () {
    function Property(property) {
        this.property = property;
        this.Name = property.$.Name;
        this.Type = property.$.Type;
        this.Nullable = property.$.Nullable;
        this.MaxLength = property.$.MaxLength;
        this.SAPDisplayFormat = property.$['sap:display-format'];
        this.SAPLabel = property.$['sap:label'];
        this.SAPQuickinfo = property.$['sap:quickinfo'];
        this.SAPSemantics = property.$['sap:semantics'];
    }
    Property.prototype.getAttribute = function (name) {
        return this.property.$[name];
    };
    return Property;
}());

var EntityType = /** @class */ (function () {
    function EntityType(_entity) {
        var _this = this;
        this._entity = _entity;
        this.Name = _entity.$.Name;
        this.properties = _entity.Property.map(function (property) { return new Property(property); });
        this.properties.forEach(function (property) {
            if (property.getAttribute('sap:text')) {
                property.SAPText = _this.properties.find(function (prop) { return prop.Name === property.getAttribute('sap:text'); });
            }
            if (property.getAttribute('sap:unit')) {
                property.SAPUnit = _this.properties.find(function (prop) { return prop.Name === property.getAttribute('sap:unit'); });
            }
        });
        if (_entity.NavigationProperty) {
            this.NavigationProperties = _entity.NavigationProperty.map(function (property) { return new NavigationProperty(property); });
        }
    }
    EntityType.prototype.getAttribute = function (name) {
        return this._entity.$[name];
    };
    EntityType.prototype.getProperty = function (name) {
        return this.properties.find(function (property) { return property.Name === name; });
    };
    EntityType.prototype.getNavigationByRelationship = function (association) {
        return this.NavigationProperties.find(function (navigation) { return navigation.Relationship === association; });
    };
    return EntityType;
}());

var EntityContainer = /** @class */ (function () {
    function EntityContainer(_EntityContainer) {
        this._EntityContainer = _EntityContainer;
        this.Name = _EntityContainer.$.Name;
        this.EntitySets = _EntityContainer.EntitySet.map(function (item) { return new EntitySet(item); });
        this.AssociationSets = _EntityContainer.AssociationSet.map(function (item) { return new AssociationSet(item); });
    }
    return EntityContainer;
}());

var EntitySet = /** @class */ (function () {
    function EntitySet(_entitySet) {
        this._entitySet = _entitySet;
        this.name = _entitySet.$.Name;
    }
    EntitySet.prototype.getEntityTypeName = function () {
        return this._entitySet.$.EntityType;
    };
    return EntitySet;
}());

var AssociationSet = /** @class */ (function () {
    function AssociationSet(_AssociationSet) {
        this._AssociationSet = _AssociationSet;
        this.Name = _AssociationSet.$.Name;
        this.Association = _AssociationSet.$.Association;
        this.Ends = _AssociationSet.End.map(function (end) { return new End(end); });
    }
    AssociationSet.prototype.getFromEnd = function () {
        return this.Ends.find(function (end) { return end.Role.startsWith('FromRole'); });
    };
    AssociationSet.prototype.getToEnd = function () {
        return this.Ends.find(function (end) { return end.Role.startsWith('ToRole'); });
    };
    return AssociationSet;
}());

var End = /** @class */ (function () {
    function End(_End) {
        this._End = _End;
        this.EntitySet = _End.$.EntitySet;
        this.Role = _End.$.Role;
    }
    return End;
}());

var NavigationProperty = /** @class */ (function () {
    function NavigationProperty(_NavigationProperty) {
        this._NavigationProperty = _NavigationProperty;
        this.Name = _NavigationProperty.$.Name;
        this.Relationship = _NavigationProperty.$.Relationship;
        this.FromRole = _NavigationProperty.$.FromRole;
        this.ToRole = _NavigationProperty.$.ToRole;
    }
    return NavigationProperty;
}());



/***/ }),

/***/ "../nx-annotation/src/lib/data-services/metadata.service.ts":
/*!******************************************************************!*\
  !*** ../nx-annotation/src/lib/data-services/metadata.service.ts ***!
  \******************************************************************/
/*! exports provided: NxMetadataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NxMetadataService", function() { return NxMetadataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "../../node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var angular_odata_es5__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-odata-es5 */ "../../node_modules/angular-odata-es5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm5/index.js");
/* harmony import */ var xml2js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! xml2js */ "../../node_modules/xml2js/lib/xml2js.js");
/* harmony import */ var xml2js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(xml2js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _meta_data__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./meta-data */ "../nx-annotation/src/lib/data-services/meta-data.ts");
/* harmony import */ var _manifest_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../manifest.service */ "../nx-annotation/src/lib/manifest.service.ts");









var NxMetadataService = /** @class */ (function () {
    function NxMetadataService(_httpClient, _config, options, manifest) {
        var _this = this;
        this._httpClient = _httpClient;
        this._config = _config;
        this.options = options;
        this.manifest = manifest;
        this.metadata$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        var url = '';
        if (options.uri) {
            url = this._config.getEntitiesUri('$metadata');
        }
        else if (options.settings && options.settings.localUri) {
            url = options.settings.localUri;
        }
        else {
            console.error("Metadata %s can't load", JSON.stringify(options));
        }
        this._httpClient.get(url, tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, this._config.defaultRequestOptions, { responseType: 'text' })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mergeMap"])(function (v) {
            return new rxjs__WEBPACK_IMPORTED_MODULE_5__["Observable"](function (subscriber) {
                var parser = new xml2js__WEBPACK_IMPORTED_MODULE_6__["Parser"](xml2js__WEBPACK_IMPORTED_MODULE_6__["defaults"]["0.2"]);
                parser.parseString(v.body, function (err, result) {
                    if (err)
                        throw err;
                    subscriber.next(result);
                    subscriber.complete();
                });
            });
        }))
            .subscribe(function (v) {
            _this.metadata = new _meta_data__WEBPACK_IMPORTED_MODULE_7__["MetaData"](v);
            _this.metadata$.next(_this.metadata);
            _this.metadata$.complete();
        });
    }
    NxMetadataService.prototype.getMetadata = function () {
        var _this = this;
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(1).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mergeMap"])(function (v) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["iif"])(function () { return !!_this.metadata; }, Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(_this.metadata), _this.metadata$);
        }));
    };
    NxMetadataService.prototype.getAnnotation = function () {
        return this.annotations && this.annotations[0];
    };
    NxMetadataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], angular_odata_es5__WEBPACK_IMPORTED_MODULE_3__["ODataConfiguration"], Object, _manifest_service__WEBPACK_IMPORTED_MODULE_8__["ManifestService"]])
    ], NxMetadataService);
    return NxMetadataService;
}());



/***/ }),

/***/ "../nx-annotation/src/lib/data-services/nx-annotation.service.ts":
/*!***********************************************************************!*\
  !*** ../nx-annotation/src/lib/data-services/nx-annotation.service.ts ***!
  \***********************************************************************/
/*! exports provided: NxAnnotationService, Annotation, SelectionFieldsAnnotation, DataPointAnnotation, LineItemAnnotation, ChartAnnotation, PresentationVariantAnnotation, SortOrder, SelectionVariantAnnotation, Annotations, Reference, Namespace */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NxAnnotationService", function() { return NxAnnotationService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Annotation", function() { return Annotation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectionFieldsAnnotation", function() { return SelectionFieldsAnnotation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataPointAnnotation", function() { return DataPointAnnotation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LineItemAnnotation", function() { return LineItemAnnotation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartAnnotation", function() { return ChartAnnotation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PresentationVariantAnnotation", function() { return PresentationVariantAnnotation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SortOrder", function() { return SortOrder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectionVariantAnnotation", function() { return SelectionVariantAnnotation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Annotations", function() { return Annotations; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Reference", function() { return Reference; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Namespace", function() { return Namespace; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm5/index.js");
/* harmony import */ var xml2js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! xml2js */ "../../node_modules/xml2js/lib/xml2js.js");
/* harmony import */ var xml2js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(xml2js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "../../node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _manifest_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../manifest.service */ "../nx-annotation/src/lib/manifest.service.ts");
/* harmony import */ var _annotations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./annotations */ "../nx-annotation/src/lib/data-services/annotations.ts");








var EdmxNamespace = 'http://docs.oasis-open.org/odata/ns/edmx';
var UINamespace = 'com.sap.vocabularies.UI.v1';
var NxAnnotationService = /** @class */ (function () {
    function NxAnnotationService(httpClient, options, manifest) {
        var _this = this;
        this.httpClient = httpClient;
        this.options = options;
        this.manifest = manifest;
        this.load$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        var url = '';
        if (options.uri) {
            url = manifest.getBaseUrl() + options.uri;
        }
        else if (options.settings && options.settings.localUri) {
            url = options.settings.localUri;
        }
        else {
            console.error("Annotation %s can't load", JSON.stringify(options));
        }
        httpClient.get(url, { responseType: 'text' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["mergeMap"])(function (body) {
            return new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"](function (subscriber) {
                var parser = new xml2js__WEBPACK_IMPORTED_MODULE_4__["Parser"](xml2js__WEBPACK_IMPORTED_MODULE_4__["defaults"]["0.2"]);
                parser.parseString(body, function (err, result) {
                    if (err)
                        throw err;
                    subscriber.next(result);
                    subscriber.complete();
                });
            });
        }))
            .subscribe(function (v) {
            _this.annotations = v;
            _this.namespace = _this.getEdmxNamespace();
            if (!_this.namespace) {
                return;
            }
            _this.reference = new Reference(_this.namespace, _this.getEdmx()[_this.namespace.alias + ':Reference']);
            _this.load$.next(_this.annotations);
            _this.load$.complete();
        });
    }
    NxAnnotationService.prototype.getAnnotation = function (entitySet, path) {
        var _this = this;
        var _a = tslib__WEBPACK_IMPORTED_MODULE_0__["__read"](path.split('#'), 2), term = _a[0], qualifier = _a[1];
        var namespace = term.substring(0, term.lastIndexOf('.'));
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(1)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["mergeMap"])(function (v) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["iif"])(function () { return !!_this.annotations; }, Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(_this.annotations), _this.load$);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (annotations) {
            var alias = _this.reference.getNamespace(namespace);
            if (!alias) {
                console.error("Can't find namespace %s", namespace);
            }
            else {
                return new Annotations(_this.getAnnotations(entitySet)[0], _this.reference.getNamespace(UINamespace)).getAnnotation(term.replace(alias.namespace, alias.alias), qualifier);
            }
        }));
    };
    NxAnnotationService.prototype.getEdmxNamespace = function () {
        var keyName = Object.keys(this.annotations)[0];
        var namespace = this.annotations[keyName].$['xmlns:' + keyName.split(':')[0]];
        if (namespace !== EdmxNamespace) {
            console.error("Can't find edmx namespace %s", EdmxNamespace);
            return null;
        }
        return new Namespace(EdmxNamespace, keyName.split(':')[0]);
    };
    NxAnnotationService.prototype.getEdmx = function () {
        return this.annotations[this.namespace.alias + ':Edmx'];
    };
    NxAnnotationService.prototype.getReferences = function () {
        return this.getEdmx()[this.namespace.alias + ':Reference'];
    };
    NxAnnotationService.prototype.getEntityTypeBySet = function (entitySet) {
        var entityType = this.getEdmx()['EntityContainer'][0]['EntitySet']
            .filter(function (element) { return element.$.Name === entitySet; })[0].$['EntityType'];
        return entityType;
    };
    NxAnnotationService.prototype.getSchema = function (index) {
        if (index === void 0) { index = 0; }
        return this.getDataServices(index)['Schema'][index];
    };
    NxAnnotationService.prototype.getDataServices = function (index) {
        if (index === void 0) { index = 0; }
        return this.getEdmx()[this.namespace.alias + ':DataServices'][index];
    };
    NxAnnotationService.prototype.getAnnotations = function (target) {
        return this.getSchema().Annotations.filter(function (annos) {
            return annos.$.Target === target;
        });
    };
    NxAnnotationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"], Object, _manifest_service__WEBPACK_IMPORTED_MODULE_6__["ManifestService"]])
    ], NxAnnotationService);
    return NxAnnotationService;
}());

var Annotation = /** @class */ (function () {
    function Annotation(annotation, alias) {
        this.annotation = annotation;
        this.alias = alias;
        this.term = annotation.$.Term;
        this.qualifier = annotation.$.Qualifier;
    }
    return Annotation;
}());

var SelectionFieldsAnnotation = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](SelectionFieldsAnnotation, _super);
    function SelectionFieldsAnnotation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SelectionFieldsAnnotation.prototype.getPropertyPaths = function () {
        return this.annotation.Collection[0].PropertyPath;
    };
    return SelectionFieldsAnnotation;
}(Annotation));

var DataPointAnnotation = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](DataPointAnnotation, _super);
    function DataPointAnnotation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DataPointAnnotation.prototype.getTitle = function () {
        return this.annotation.Record[0].PropertyValue.find(function (record) { return record.$.Property === 'Title'; }).$.String;
    };
    DataPointAnnotation.prototype.getValue = function () {
        return this.annotation.Record[0].PropertyValue.find(function (record) { return record.$.Property === 'Value'; }).$.Path;
    };
    return DataPointAnnotation;
}(Annotation));

var LineItemAnnotation = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](LineItemAnnotation, _super);
    function LineItemAnnotation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LineItemAnnotation.prototype.getDataFields = function () {
        return this.annotation.Collection[0].Record.filter(function (record) { return record.$.Type === 'UI.DataField'; })
            .map(function (record) { return record.PropertyValue.find(function (propertyValue) { return propertyValue.$.Property === 'Value'; })
            .$.Path; });
    };
    return LineItemAnnotation;
}(Annotation));

var ChartAnnotation = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ChartAnnotation, _super);
    function ChartAnnotation(annotation, alias) {
        var _this = _super.call(this, annotation, alias) || this;
        var chartRecord = _this.annotation.Record.find(function (record) { return record.$.Type === 'UI.ChartDefinitionType'; });
        _this.chartDefinition = chartRecord && new _annotations__WEBPACK_IMPORTED_MODULE_7__["ChartDefinitionType"](chartRecord);
        return _this;
    }
    ChartAnnotation.prototype.getTitle = function () {
        var title = this.getChartDefinitionType().PropertyValue.find(function (value) { return value.$.Property === 'Title'; });
        return title && title.$.String;
    };
    ChartAnnotation.prototype.getChartType = function () {
        var chartTypeAnno = this.annotation.Record.find(function (record) { return record.$.Type === 'UI.ChartDefinitionType'; });
        var chartTypeProperty = chartTypeAnno.PropertyValue.find(function (value) { return value.$.Property === 'ChartType'; });
        return chartTypeProperty.$.EnumMember.split('/')[1];
    };
    ChartAnnotation.prototype.getChartDefinitionType = function () {
        return this.annotation.Record.find(function (record) { return record.$.Type === 'UI.ChartDefinitionType'; });
    };
    ChartAnnotation.prototype.getDimensions = function () {
        return this.annotation.Record.find(function (record) { return record.$.Type === 'UI.ChartDefinitionType'; }).PropertyValue
            .find(function (value) { return value.$.Property === 'Dimensions'; }).Collection[0].PropertyPath;
    };
    ChartAnnotation.prototype.getMeasures = function () {
        return this.annotation.Record.find(function (record) { return record.$.Type === 'UI.ChartDefinitionType'; }).PropertyValue
            .find(function (value) { return value.$.Property === 'Measures'; }).Collection[0].PropertyPath;
    };
    return ChartAnnotation;
}(Annotation));

var PresentationVariantAnnotation = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](PresentationVariantAnnotation, _super);
    function PresentationVariantAnnotation(annotation, alias) {
        var _this = _super.call(this, annotation, alias) || this;
        _this.annotation.Record[0].PropertyValue.forEach(function (propertyValue) {
            if (propertyValue.$.Property === 'SortOrder') {
                _this.SortOrder = new SortOrder(propertyValue);
            }
            if (propertyValue.$.Property === 'MaxItems') {
                _this.MaxItems = propertyValue.$.Int;
            }
        });
        return _this;
    }
    PresentationVariantAnnotation.prototype.getTitle = function () {
        return this.annotation.Record[0].PropertyValue.find(function (record) { return record.$.Property === 'Title'; }).$.String;
    };
    return PresentationVariantAnnotation;
}(Annotation));

var SortOrder = /** @class */ (function () {
    function SortOrder(_sortOrder) {
        this._sortOrder = _sortOrder;
        this.sortOrders = _sortOrder.Collection[0].Record.filter(function (record) { return record.$.Type === 'Common.SortOrderType'; })
            .map(function (record) {
            var sortOrder = { Property: '' };
            record.PropertyValue.forEach(function (property) {
                if (property.$.Property === 'Property') {
                    sortOrder.Property = property.$.PropertyPath;
                }
                if (property.$.Property === 'Descending') {
                    sortOrder.Descending = JSON.parse(property.$.Bool);
                }
            });
            return sortOrder;
        });
    }
    SortOrder.prototype.getOrderBy = function () {
        return this.sortOrders.map(function (sortOrder) { return sortOrder.Property + ' ' + (sortOrder.Descending ? 'desc' : ''); });
    };
    return SortOrder;
}());

var SelectionVariantAnnotation = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](SelectionVariantAnnotation, _super);
    function SelectionVariantAnnotation(_selectionVariant, alias) {
        var _this = _super.call(this, _selectionVariant, alias) || this;
        _this._selectionVariant = _selectionVariant;
        _selectionVariant.Record[0].PropertyValue.forEach(function (propertyValue) {
            if (propertyValue.$.Property === 'Text') {
                _this.Text = propertyValue.$.String;
            }
            if (propertyValue.$.Property === 'Parameters') {
                _this.Parameters = propertyValue.Collection[0].Record.filter(function (record) { return record.$.Type === 'UI.Parameter'; }).map(function (record) {
                    var parameter = {
                        PropertyName: record.PropertyValue.find(function (property) { return property.$.Property === 'PropertyName'; }).$.PropertyPath,
                        PropertyValue: record.PropertyValue.find(function (property) { return property.$.Property === 'PropertyValue'; }).$.String
                    };
                    return parameter;
                });
            }
            if (propertyValue.$.Property === 'SelectOptions') {
                _this.SelectOptions = propertyValue.Collection[0].Record.filter(function (record) { return record.$.Type === 'UI.SelectOptionType'; })
                    .map(function (record) {
                    var selectOption = {
                        PropertyName: record.PropertyValue.find(function (property) { return property.$.Property === 'PropertyName'; }).$.PropertyPath,
                        Ranges: record.PropertyValue.find(function (property) { return property.$.Property === 'Ranges'; })
                            .Collection[0].Record.filter(function (record) { return record.$.Type === 'UI.SelectionRangeType'; }).map(function (record) {
                            return new Record(record);
                        })
                    };
                    return selectOption;
                });
            }
        });
        return _this;
    }
    SelectionVariantAnnotation.prototype.getFilterString = function () {
        var includes = this.SelectOptions.filter(function (selectOption) { return selectOption.Ranges[0].Sign === _annotations__WEBPACK_IMPORTED_MODULE_7__["SelectionRangeSignType"].I; })
            .map(function (selectOption) {
            if (selectOption.Ranges[0].Option === _annotations__WEBPACK_IMPORTED_MODULE_7__["SelectionRangeOptionType"].BT) {
                return "(" + selectOption.PropertyName + " ge '" + selectOption.Ranges[0].Low + "' and " + selectOption.PropertyName + " le '" + selectOption.Ranges[0].High + "')";
            }
            if (selectOption.Ranges[0].Option === _annotations__WEBPACK_IMPORTED_MODULE_7__["SelectionRangeOptionType"].EQ) {
                return selectOption.PropertyName + " eq '" + (selectOption.Ranges[0].Low || '') + "'";
            }
            if (selectOption.Ranges[0].Option === _annotations__WEBPACK_IMPORTED_MODULE_7__["SelectionRangeOptionType"].NE) {
                return selectOption.PropertyName + " ne '" + (selectOption.Ranges[0].Low || '') + "'";
            }
            // TODO 添加完整
        }).join(' or ');
        var excludes = this.SelectOptions.filter(function (selectOption) { return selectOption.Ranges[0].Sign === _annotations__WEBPACK_IMPORTED_MODULE_7__["SelectionRangeSignType"].E; })
            .map(function (selectOption) {
            if (selectOption.Ranges[0].Option === _annotations__WEBPACK_IMPORTED_MODULE_7__["SelectionRangeOptionType"].EQ) {
                return selectOption.PropertyName + " ne '" + selectOption.Ranges[0].Low + "'";
            }
            // TODO 添加完整
        }).join(' and ');
        var filter = '';
        if (includes && excludes) {
            return '(' + includes + ') and ' + excludes;
        }
        else {
            return includes + excludes;
        }
    };
    return SelectionVariantAnnotation;
}(Annotation));

var Record = /** @class */ (function () {
    function Record(_record) {
        var record = {};
        _record.PropertyValue.forEach(function (propertyValye) {
            if (propertyValye.$.EnumMember) {
                var enumMember = propertyValye.$.EnumMember;
                if (enumMember.split('/')[0] === 'UI.SelectionRangeSignType') {
                    record[propertyValye.$.Property] = _annotations__WEBPACK_IMPORTED_MODULE_7__["SelectionRangeSignType"][enumMember.split('/')[1]];
                }
                if (enumMember.split('/')[0] === 'UI.SelectionRangeOptionType') {
                    record[propertyValye.$.Property] = _annotations__WEBPACK_IMPORTED_MODULE_7__["SelectionRangeOptionType"][enumMember.split('/')[1]];
                }
            }
            if (propertyValye.$.String) {
                record[propertyValye.$.Property] = propertyValye.$.String;
            }
        });
        return record;
    }
    return Record;
}());
var Annotations = /** @class */ (function () {
    function Annotations(_annotations, _ui) {
        var _this = this;
        this._annotations = _annotations;
        this._ui = _ui;
        this.annotations = _annotations.Annotation.map(function (anno) { return _this.newAnnotation(anno); });
    }
    Annotations.prototype.getAnnotation = function (term, qualifier) {
        return this.annotations.find(function (anno) { return anno.term === term && anno.qualifier === qualifier; });
    };
    Annotations.prototype.newAnnotation = function (annotation) {
        if (annotation.$.Term === this._ui.alias + '.Chart') {
            return new ChartAnnotation(annotation);
        }
        else if (annotation.$.Term === this._ui.alias + '.LineItem') {
            return new LineItemAnnotation(annotation);
        }
        else if (annotation.$.Term === this._ui.alias + '.DataPoint') {
            return new DataPointAnnotation(annotation);
        }
        else if (annotation.$.Term === this._ui.alias + '.PresentationVariant') {
            return new PresentationVariantAnnotation(annotation);
        }
        else if (annotation.$.Term === this._ui.alias + '.SelectionVariant') {
            return new SelectionVariantAnnotation(annotation);
        }
        else if (annotation.$.Term === this._ui.alias + '.SelectionFields') {
            return new SelectionFieldsAnnotation(annotation);
        }
        return new Annotation(annotation);
    };
    return Annotations;
}());

var Reference = /** @class */ (function () {
    function Reference(_namespace, _reference) {
        var _this = this;
        this._namespace = _namespace;
        this._reference = _reference;
        this.refNamespaces = {};
        _reference.forEach(function (reference) {
            var namespace = reference[_this._namespace.alias + ':Include'][0].$.Namespace;
            var alias = reference[_this._namespace.alias + ':Include'][0].$.Alias;
            _this.refNamespaces[namespace] = new Namespace(namespace, alias);
        });
    }
    Reference.prototype.getNSByAlias = function (alias) {
        return Object.values(this.refNamespaces).find(function (namespace) { return namespace.alias === alias; });
    };
    Reference.prototype.getNamespace = function (namespace) {
        return this.refNamespaces[namespace];
    };
    return Reference;
}());

var Namespace = /** @class */ (function () {
    function Namespace(namespace, alias) {
        this.namespace = namespace;
        this.alias = alias;
    }
    return Namespace;
}());



/***/ }),

/***/ "../nx-annotation/src/lib/manifest.service.ts":
/*!****************************************************!*\
  !*** ../nx-annotation/src/lib/manifest.service.ts ***!
  \****************************************************/
/*! exports provided: ManifestService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManifestService", function() { return ManifestService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");


var ManifestService = /** @class */ (function () {
    function ManifestService(options) {
        this.options = options;
    }
    ManifestService.prototype.getDataSource = function (dataSource) {
        if (dataSource === void 0) { dataSource = ''; }
        return this.options.dataSources[dataSource];
    };
    ManifestService.prototype.getBaseUrl = function () {
        return this.options.baseUrl || '';
    };
    ManifestService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object])
    ], ManifestService);
    return ManifestService;
}());



/***/ }),

/***/ "../nx-annotation/src/lib/ngx-sap-annotation.module.ts":
/*!*************************************************************!*\
  !*** ../nx-annotation/src/lib/ngx-sap-annotation.module.ts ***!
  \*************************************************************/
/*! exports provided: NgxSapAnnotationModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxSapAnnotationModule", function() { return NgxSapAnnotationModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");


var NgxSapAnnotationModule = /** @class */ (function () {
    function NgxSapAnnotationModule() {
    }
    NgxSapAnnotationModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [],
            imports: [],
        })
    ], NgxSapAnnotationModule);
    return NgxSapAnnotationModule;
}());



/***/ }),

/***/ "../nx-annotation/src/lib/odata-config.service.ts":
/*!********************************************************!*\
  !*** ../nx-annotation/src/lib/odata-config.service.ts ***!
  \********************************************************/
/*! exports provided: OdataConfigService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OdataConfigService", function() { return OdataConfigService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angular_odata_es5__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-odata-es5 */ "../../node_modules/angular-odata-es5/index.js");



var OdataConfigService = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](OdataConfigService, _super);
    function OdataConfigService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    OdataConfigService.prototype.extractQueryResultData = function (res) {
        if (res.status < 200 || res.status >= 300) {
            throw new Error('Bad response status: ' + res.status);
        }
        return this.afterExtractQueryResultData(res && res.body && res.body.d.results);
    };
    OdataConfigService.prototype.afterExtractQueryResultData = function (results) {
        return results;
    };
    OdataConfigService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], OdataConfigService);
    return OdataConfigService;
}(angular_odata_es5__WEBPACK_IMPORTED_MODULE_2__["ODataConfiguration"]));



/***/ }),

/***/ "../nx-annotation/src/lib/sap-odata.service.ts":
/*!*****************************************************!*\
  !*** ../nx-annotation/src/lib/sap-odata.service.ts ***!
  \*****************************************************/
/*! exports provided: SAPODataModel, SAPODataService, SAPODataServiceFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SAPODataModel", function() { return SAPODataModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SAPODataService", function() { return SAPODataService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SAPODataServiceFactory", function() { return SAPODataServiceFactory; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "../../node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var angular_odata_es5__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular-odata-es5 */ "../../node_modules/angular-odata-es5/index.js");
/* harmony import */ var _manifest_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./manifest.service */ "../nx-annotation/src/lib/manifest.service.ts");
/* harmony import */ var _odata_config_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./odata-config.service */ "../nx-annotation/src/lib/odata-config.service.ts");
/* harmony import */ var _data_services_nx_annotation_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./data-services/nx-annotation.service */ "../nx-annotation/src/lib/data-services/nx-annotation.service.ts");
/* harmony import */ var _data_services_metadata_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./data-services/metadata.service */ "../nx-annotation/src/lib/data-services/metadata.service.ts");










var SAPODataModel = /** @class */ (function () {
    function SAPODataModel(odata, _metadata) {
        this.odata = odata;
        this.orderbys = [];
        this.metadata = _metadata;
    }
    SAPODataModel.prototype.getAll = function (options) {
        var _this = this;
        console.log(this.odata.TypeName);
        return this.odata.ParamQuery(options.parameters)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function (query) {
            return query
                .Select(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"](((options && options.selects) || _this.selects || [])).join(","))
                .Top((options && options.top) || _this.top)
                .Skip((options && options.skip) || _this.skip)
                .OrderBy(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"](((options && options.orderbys) || _this.orderbys || [])).join(', '))
                .Filter((options && options.filterString) || _this.filterString)
                .Exec();
        }));
    };
    SAPODataModel.prototype.getEntityType = function () {
        var _this = this;
        return this.metadata.getMetadata()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (v) {
            return v.getEntityTypeBySet(_this.odata.TypeName);
        }));
    };
    SAPODataModel.prototype.getEntityProperty = function (property) {
        var _this = this;
        return this.metadata.getMetadata()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (v) {
            return v.getEntityTypeBySet(_this.odata.TypeName).getProperty(property);
        }));
    };
    SAPODataModel.prototype.getMetadataService = function () {
        return this.metadata;
    };
    return SAPODataModel;
}());

var SAPODataService = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](SAPODataService, _super);
    function SAPODataService(_typeName, _http, _config) {
        var _this = _super.call(this, _typeName, _http, _config) || this;
        _this._config = _config;
        _this.http = _http;
        return _this;
    }
    SAPODataService.prototype.getMetadata = function () {
        return this.metadata.getMetadata();
    };
    SAPODataService.prototype.getAnnotation = function () {
        return this.annotations && this.annotations[0];
    };
    SAPODataService.prototype.ParamQuery = function (parameters) {
        var _this = this;
        if (parameters) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(1).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["mergeMap"])(function () { return _this.getMetadata(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (metadata) {
                var _a = tslib__WEBPACK_IMPORTED_MODULE_0__["__read"](metadata.getParametersEntitySet(_this.TypeName), 2), fromSet = _a[0], navigation = _a[1];
                var paramString = Object.entries(parameters).map(function (entry) {
                    if (entry[1].startsWith('datetime')) {
                        return entry[0] + "=" + entry[1];
                    }
                    else {
                        return entry[0] + "='" + entry[1] + "'";
                    }
                }).join(',');
                return new angular_odata_es5__WEBPACK_IMPORTED_MODULE_5__["ODataQuery"](fromSet + "(" + paramString + ")/" + navigation.Name, _this._config, _this.http);
            }));
        }
        else {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new angular_odata_es5__WEBPACK_IMPORTED_MODULE_5__["ODataQuery"](this.TypeName, this._config, this.http));
        }
    };
    return SAPODataService;
}(angular_odata_es5__WEBPACK_IMPORTED_MODULE_5__["ODataService"]));

var SAPODataServiceFactory = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](SAPODataServiceFactory, _super);
    function SAPODataServiceFactory(_http, _config, manifest) {
        var _this = _super.call(this, _http, _config) || this;
        _this._http = _http;
        _this._config = _config;
        _this.manifest = manifest;
        _this.metadataServices = {};
        return _this;
    }
    SAPODataServiceFactory.prototype.getModel = function (entitySet, dataSourceName) {
        var _this = this;
        if (!entitySet) {
            console.error("EntitySet must be provide");
        }
        var odataConfig = new _odata_config_service__WEBPACK_IMPORTED_MODULE_7__["OdataConfigService"]();
        var dataSource = this.manifest.getDataSource(dataSourceName);
        if (!dataSource) {
            console.error("Can't find dataSource %s in manifest", dataSource);
        }
        odataConfig.baseUrl = this.manifest.getBaseUrl() + dataSource.uri;
        if (!this.metadataServices[dataSourceName]) {
            this.metadataServices[dataSourceName] = new _data_services_metadata_service__WEBPACK_IMPORTED_MODULE_9__["NxMetadataService"](this._http, odataConfig, dataSource, this.manifest);
            if (dataSource.settings && dataSource.settings.annotations) {
                var annoServices = dataSource.settings.annotations.map((function (annotation) {
                    var annoSource = _this.manifest.getDataSource(annotation);
                    if (!annoSource) {
                        console.error("Can't find dataSource %s in manifest", annoSource);
                    }
                    return new _data_services_nx_annotation_service__WEBPACK_IMPORTED_MODULE_8__["NxAnnotationService"](_this._http, annoSource, _this.manifest);
                }));
                this.metadataServices[dataSourceName].annotations = annoServices;
            }
        }
        var sapODataService = this.CreateService(entitySet, odataConfig);
        sapODataService.metadata = this.metadataServices[dataSourceName];
        return new SAPODataModel(sapODataService, this.metadataServices[dataSourceName]);
    };
    SAPODataServiceFactory.prototype.CreateService = function (typeName, config) {
        return new SAPODataService(typeName, this._http, config ? config : this._config);
    };
    SAPODataServiceFactory = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"], angular_odata_es5__WEBPACK_IMPORTED_MODULE_5__["ODataConfiguration"], _manifest_service__WEBPACK_IMPORTED_MODULE_6__["ManifestService"]])
    ], SAPODataServiceFactory);
    return SAPODataServiceFactory;
}(angular_odata_es5__WEBPACK_IMPORTED_MODULE_5__["ODataServiceFactory"]));



/***/ }),

/***/ "../nx-annotation/src/lib/uiannotation.service.ts":
/*!********************************************************!*\
  !*** ../nx-annotation/src/lib/uiannotation.service.ts ***!
  \********************************************************/
/*! exports provided: UIAnnotationService, UIAnnotationFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UIAnnotationService", function() { return UIAnnotationService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UIAnnotationFactory", function() { return UIAnnotationFactory; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _sap_odata_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sap-odata.service */ "../nx-annotation/src/lib/sap-odata.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm5/index.js");





var UIAnnotationService = /** @class */ (function () {
    function UIAnnotationService(odataService, settings) {
        this.odataService = odataService;
        this.settings = settings;
        this.annotationService = this.odataService.getMetadataService().getAnnotation();
    }
    UIAnnotationService.prototype.getODataService = function () {
        return this.odataService;
    };
    UIAnnotationService.prototype.getAnnotation = function (annotationPath) {
        var _this = this;
        if (!annotationPath) {
            // console.log("Provide the path of annotation %s", annotationPath)
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(undefined);
        }
        return this.odataService.getMetadataService().getMetadata()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (v) {
            var entityType = v.getEntitySet(_this.settings.entitySet);
            if (!entityType) {
                throw "Can't find Entity Type for EntitySet: " + _this.settings.entitySet;
            }
            return entityType.getEntityTypeName();
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mergeMap"])(function (entityType) {
            return _this.annotationService.getAnnotation(entityType, annotationPath);
        }));
    };
    UIAnnotationService.prototype.getData = function (entityType, selects, presentation, selection, beforeFetch) {
        var texts = selects.map(function (property) { return entityType.getProperty(property); })
            .filter(function (property) { return !!property.SAPText; }).map(function (property) { return property.SAPText.Name; });
        if (presentation) {
            if (presentation.SortOrder) {
                var property = presentation.SortOrder.sortOrders
                    .find(function (sortOrder) { return !selects.find(function (property) { return property === sortOrder.Property; }); });
                if (property) {
                    throw property.Property + " is missing in the SELECT list.";
                }
            }
        }
        var options = {
            selects: tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"](selects, texts),
            orderbys: presentation && presentation.SortOrder && presentation.SortOrder.getOrderBy(),
            top: presentation && presentation.MaxItems,
            filterString: selection && selection.getFilterString()
        };
        if (beforeFetch) {
            beforeFetch(options, entityType, presentation, selection);
        }
        return this.odataService.getAll(options)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) {
            selects.forEach(function (dimension) {
                var property = entityType.getProperty(dimension);
                if (property.Type === 'Edm.DateTimeOffset' || property.Type === 'Edm.DateTime') {
                    data.forEach(function (d) { return d[dimension] = new Date(d[dimension].match(/\d+/)[0] * 1); });
                }
            });
            return data;
        }));
    };
    UIAnnotationService.prototype.getLineItemWithData = function (beforeFetch) {
        var _this = this;
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["zip"])(this.odataService.getEntityType(), this.getAnnotation(this.settings.annotationPath), this.getAnnotation(this.settings.presentationAnnotationPath), this.getAnnotation(this.settings.selectionAnnotationPath))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mergeMap"])(function (_a) {
            var _b = tslib__WEBPACK_IMPORTED_MODULE_0__["__read"](_a, 4), entityType = _b[0], lineItemAnnotation = _b[1], presentation = _b[2], selection = _b[3];
            var fields = lineItemAnnotation.getDataFields();
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["zip"])(Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(entityType), Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(lineItemAnnotation), _this.getData(entityType, fields, presentation, selection, beforeFetch));
        }));
    };
    UIAnnotationService.prototype.getChartWithData = function (beforeFetch) {
        var _this = this;
        if (!this.settings.chartAnnotationPath) {
            console.warn("The chartAnnotationPath should be provided");
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(undefined);
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["zip"])(this.odataService.getEntityType(), this.getAnnotation(this.settings.chartAnnotationPath), this.getAnnotation(this.settings.presentationAnnotationPath), this.getAnnotation(this.settings.selectionAnnotationPath))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (_a) {
            var _b = tslib__WEBPACK_IMPORTED_MODULE_0__["__read"](_a, 4), entityType = _b[0], chartAnnotation = _b[1], presentation = _b[2], selection = _b[3];
            var dimensions = chartAnnotation.getDimensions();
            var measures = chartAnnotation.getMeasures();
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["zip"])(Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(entityType), Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(chartAnnotation), _this.getData(entityType, tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"](dimensions, measures), presentation, selection, beforeFetch));
        }));
    };
    /**
     * 获取单数据点 Annotation 的数据
     */
    UIAnnotationService.prototype.getDataPointWithData = function (beforeFetch) {
        var _this = this;
        if (!this.hasDataPoint()) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(undefined);
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["zip"])(this.odataService.getEntityType(), this.getAnnotation(this.settings.dataPointAnnotationPath), this.getAnnotation(this.settings.presentationAnnotationPath), this.getAnnotation(this.settings.selectionAnnotationPath))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (_a) {
            var _b = tslib__WEBPACK_IMPORTED_MODULE_0__["__read"](_a, 4), entityType = _b[0], dataPoint = _b[1], presentation = _b[2], selection = _b[3];
            var selects = [];
            var valPath = dataPoint.getValue();
            var valProperty = entityType.getProperty(valPath);
            selects.push(valPath);
            // 度量的单位字段
            if (valProperty.SAPUnit) {
                selects.push(valProperty.SAPUnit.Name);
            }
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["zip"])(Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(entityType), Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(dataPoint), _this.getData(entityType, selects, presentation, selection, beforeFetch)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) {
                if (data[0]) {
                    var result = {
                        value: data[0][valPath]
                    };
                    if (valProperty.SAPUnit) {
                        if (valProperty.SAPUnit.SAPSemantics === "currency-code") {
                            result.currency = {
                                code: data[0][valProperty.SAPUnit.Name]
                            };
                            if (valProperty.SAPUnit.SAPText) {
                                result.currency.text = data[0][valProperty.SAPUnit.SAPText.Name];
                            }
                        }
                    }
                    return result;
                }
                return undefined;
            })));
        }));
    };
    /**
     * 获取所有 Annotation 和其对应的数据
     */
    UIAnnotationService.prototype.getAnnotationWithData = function (beforeFetch) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["combineLatest"])(this.getChartWithData(beforeFetch), this.getDataPointWithData(beforeFetch))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (_a) {
            var _b = tslib__WEBPACK_IMPORTED_MODULE_0__["__read"](_a, 2), chartWithData = _b[0], pointWithData = _b[1];
            return {
                entityType: chartWithData && chartWithData[0] || pointWithData && pointWithData[0],
                chartAnnotation: chartWithData && chartWithData[1],
                chartData: chartWithData && chartWithData[2],
                dataPointAnnotation: pointWithData && pointWithData[1],
                pointData: pointWithData && pointWithData[2],
            };
        }));
    };
    UIAnnotationService.prototype.getEntityType = function () {
        return this.odataService.getEntityType();
    };
    UIAnnotationService.prototype.hasDataPoint = function () {
        return !!this.settings.dataPointAnnotationPath;
    };
    return UIAnnotationService;
}());

var UIAnnotationFactory = /** @class */ (function () {
    function UIAnnotationFactory(odataFactory) {
        this.odataFactory = odataFactory;
    }
    UIAnnotationFactory.prototype.newUIAnnotationService = function (settings) {
        var odataService = this.odataFactory.getModel(settings.entitySet, settings.dataSource);
        return new UIAnnotationService(odataService, settings);
    };
    UIAnnotationFactory = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_sap_odata_service__WEBPACK_IMPORTED_MODULE_2__["SAPODataServiceFactory"]])
    ], UIAnnotationFactory);
    return UIAnnotationFactory;
}());



/***/ }),

/***/ "../nx-annotation/src/lib/utils.service.ts":
/*!*************************************************!*\
  !*** ../nx-annotation/src/lib/utils.service.ts ***!
  \*************************************************/
/*! exports provided: mergeDeep */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mergeDeep", function() { return mergeDeep; });
function mergeDeep(target, source) {
    var isObject = function (obj) { return obj && typeof obj === 'object'; };
    if (!isObject(target) || !isObject(source)) {
        return source;
    }
    Object.keys(source).forEach(function (key) {
        var targetValue = target[key];
        var sourceValue = source[key];
        if (Array.isArray(targetValue) && Array.isArray(sourceValue)) {
            sourceValue.forEach(function (source, index) {
                if (targetValue[index]) {
                    targetValue[index] = mergeDeep(Object.assign({}, targetValue[index]), source);
                }
                else {
                    targetValue[index] = Object.assign({}, source);
                }
            });
        }
        else if (isObject(targetValue) && isObject(sourceValue)) {
            target[key] = mergeDeep(Object.assign({}, targetValue), sourceValue);
        }
        else {
            target[key] = sourceValue;
        }
    });
    return target;
}


/***/ }),

/***/ "../nx-annotation/src/public-api.ts":
/*!******************************************!*\
  !*** ../nx-annotation/src/public-api.ts ***!
  \******************************************/
/*! exports provided: NxAnnotationService, Annotation, SelectionFieldsAnnotation, DataPointAnnotation, LineItemAnnotation, ChartAnnotation, PresentationVariantAnnotation, SortOrder, SelectionVariantAnnotation, Annotations, Reference, Namespace, OdataConfigService, SAPODataModel, SAPODataService, SAPODataServiceFactory, UIAnnotationService, UIAnnotationFactory, ManifestService, ChartType, SelectionRangeSignType, SelectionRangeOptionType, Parameter, IntervalParameter, ChartDefinitionType, ChartDimensionAttributeType, ChartMeasureAttributeType, ChartDimensionRoleType, ChartMeasureRoleType, mergeDeep, NgxSapAnnotationModule, MetaData, Property, EntityType, EntityContainer, EntitySet, AssociationSet, End, NavigationProperty, NxMetadataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_data_services_nx_annotation_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/data-services/nx-annotation.service */ "../nx-annotation/src/lib/data-services/nx-annotation.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NxAnnotationService", function() { return _lib_data_services_nx_annotation_service__WEBPACK_IMPORTED_MODULE_0__["NxAnnotationService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Annotation", function() { return _lib_data_services_nx_annotation_service__WEBPACK_IMPORTED_MODULE_0__["Annotation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SelectionFieldsAnnotation", function() { return _lib_data_services_nx_annotation_service__WEBPACK_IMPORTED_MODULE_0__["SelectionFieldsAnnotation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DataPointAnnotation", function() { return _lib_data_services_nx_annotation_service__WEBPACK_IMPORTED_MODULE_0__["DataPointAnnotation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LineItemAnnotation", function() { return _lib_data_services_nx_annotation_service__WEBPACK_IMPORTED_MODULE_0__["LineItemAnnotation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ChartAnnotation", function() { return _lib_data_services_nx_annotation_service__WEBPACK_IMPORTED_MODULE_0__["ChartAnnotation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PresentationVariantAnnotation", function() { return _lib_data_services_nx_annotation_service__WEBPACK_IMPORTED_MODULE_0__["PresentationVariantAnnotation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SortOrder", function() { return _lib_data_services_nx_annotation_service__WEBPACK_IMPORTED_MODULE_0__["SortOrder"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SelectionVariantAnnotation", function() { return _lib_data_services_nx_annotation_service__WEBPACK_IMPORTED_MODULE_0__["SelectionVariantAnnotation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Annotations", function() { return _lib_data_services_nx_annotation_service__WEBPACK_IMPORTED_MODULE_0__["Annotations"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Reference", function() { return _lib_data_services_nx_annotation_service__WEBPACK_IMPORTED_MODULE_0__["Reference"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Namespace", function() { return _lib_data_services_nx_annotation_service__WEBPACK_IMPORTED_MODULE_0__["Namespace"]; });

/* harmony import */ var _lib_odata_config_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/odata-config.service */ "../nx-annotation/src/lib/odata-config.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OdataConfigService", function() { return _lib_odata_config_service__WEBPACK_IMPORTED_MODULE_1__["OdataConfigService"]; });

/* harmony import */ var _lib_sap_odata_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/sap-odata.service */ "../nx-annotation/src/lib/sap-odata.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SAPODataModel", function() { return _lib_sap_odata_service__WEBPACK_IMPORTED_MODULE_2__["SAPODataModel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SAPODataService", function() { return _lib_sap_odata_service__WEBPACK_IMPORTED_MODULE_2__["SAPODataService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SAPODataServiceFactory", function() { return _lib_sap_odata_service__WEBPACK_IMPORTED_MODULE_2__["SAPODataServiceFactory"]; });

/* harmony import */ var _lib_uiannotation_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lib/uiannotation.service */ "../nx-annotation/src/lib/uiannotation.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UIAnnotationService", function() { return _lib_uiannotation_service__WEBPACK_IMPORTED_MODULE_3__["UIAnnotationService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UIAnnotationFactory", function() { return _lib_uiannotation_service__WEBPACK_IMPORTED_MODULE_3__["UIAnnotationFactory"]; });

/* harmony import */ var _lib_manifest_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lib/manifest.service */ "../nx-annotation/src/lib/manifest.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ManifestService", function() { return _lib_manifest_service__WEBPACK_IMPORTED_MODULE_4__["ManifestService"]; });

/* harmony import */ var _lib_data_services_annotations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lib/data-services/annotations */ "../nx-annotation/src/lib/data-services/annotations.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ChartType", function() { return _lib_data_services_annotations__WEBPACK_IMPORTED_MODULE_5__["ChartType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SelectionRangeSignType", function() { return _lib_data_services_annotations__WEBPACK_IMPORTED_MODULE_5__["SelectionRangeSignType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SelectionRangeOptionType", function() { return _lib_data_services_annotations__WEBPACK_IMPORTED_MODULE_5__["SelectionRangeOptionType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Parameter", function() { return _lib_data_services_annotations__WEBPACK_IMPORTED_MODULE_5__["Parameter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IntervalParameter", function() { return _lib_data_services_annotations__WEBPACK_IMPORTED_MODULE_5__["IntervalParameter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ChartDefinitionType", function() { return _lib_data_services_annotations__WEBPACK_IMPORTED_MODULE_5__["ChartDefinitionType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ChartDimensionAttributeType", function() { return _lib_data_services_annotations__WEBPACK_IMPORTED_MODULE_5__["ChartDimensionAttributeType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ChartMeasureAttributeType", function() { return _lib_data_services_annotations__WEBPACK_IMPORTED_MODULE_5__["ChartMeasureAttributeType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ChartDimensionRoleType", function() { return _lib_data_services_annotations__WEBPACK_IMPORTED_MODULE_5__["ChartDimensionRoleType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ChartMeasureRoleType", function() { return _lib_data_services_annotations__WEBPACK_IMPORTED_MODULE_5__["ChartMeasureRoleType"]; });

/* harmony import */ var _lib_utils_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./lib/utils.service */ "../nx-annotation/src/lib/utils.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mergeDeep", function() { return _lib_utils_service__WEBPACK_IMPORTED_MODULE_6__["mergeDeep"]; });

/* harmony import */ var _lib_data_services_index__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./lib/data-services/index */ "../nx-annotation/src/lib/data-services/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MetaData", function() { return _lib_data_services_index__WEBPACK_IMPORTED_MODULE_7__["MetaData"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Property", function() { return _lib_data_services_index__WEBPACK_IMPORTED_MODULE_7__["Property"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EntityType", function() { return _lib_data_services_index__WEBPACK_IMPORTED_MODULE_7__["EntityType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EntityContainer", function() { return _lib_data_services_index__WEBPACK_IMPORTED_MODULE_7__["EntityContainer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EntitySet", function() { return _lib_data_services_index__WEBPACK_IMPORTED_MODULE_7__["EntitySet"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AssociationSet", function() { return _lib_data_services_index__WEBPACK_IMPORTED_MODULE_7__["AssociationSet"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "End", function() { return _lib_data_services_index__WEBPACK_IMPORTED_MODULE_7__["End"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NavigationProperty", function() { return _lib_data_services_index__WEBPACK_IMPORTED_MODULE_7__["NavigationProperty"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NxMetadataService", function() { return _lib_data_services_index__WEBPACK_IMPORTED_MODULE_7__["NxMetadataService"]; });

/* harmony import */ var _lib_ngx_sap_annotation_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./lib/ngx-sap-annotation.module */ "../nx-annotation/src/lib/ngx-sap-annotation.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgxSapAnnotationModule", function() { return _lib_ngx_sap_annotation_module__WEBPACK_IMPORTED_MODULE_8__["NgxSapAnnotationModule"]; });

/*
 * Public API Surface of ngx-sap-annotation
 */











/***/ }),

/***/ "../nx-charts/src/lib/core/model/filter.ts":
/*!*************************************************!*\
  !*** ../nx-charts/src/lib/core/model/filter.ts ***!
  \*************************************************/
/*! exports provided: FilterOperator, Filter, Filters */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterOperator", function() { return FilterOperator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Filter", function() { return Filter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Filters", function() { return Filters; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm5/index.js");

var FilterOperator;
(function (FilterOperator) {
    FilterOperator["All"] = "All";
    FilterOperator["Any"] = "Any";
    FilterOperator["BT"] = "BT";
    FilterOperator["Contains"] = "Contains";
    FilterOperator["EndsWith"] = "EndsWith";
    FilterOperator["EQ"] = "EQ";
    FilterOperator["GE"] = "GE";
    FilterOperator["GT"] = "GT";
    FilterOperator["LE"] = "LE";
    FilterOperator["LT"] = "LT";
    /**
     * FilterOperator "Not Between"
     * Used to filter all entries, which are not between the given boundaries. The filter result does not contains the boundaries, but only entries outside of the boundaries. The order of the entries in the filter results is based on their occurence in the input list.
     * Note, when used on strings: The String comparison is based on lexicographical ordering. Characters are ranked in their alphabetical order. Words with the same preceding substring are ordered based on their length e.g. "Chris" comes before "Christian".
     */
    FilterOperator["NB"] = "NB";
    FilterOperator["NE"] = "NE";
    FilterOperator["NotContains"] = "NotContains";
    FilterOperator["NotEndsWith"] = "NotEndsWith";
    FilterOperator["NotStartsWith"] = "NotStartsWith";
    FilterOperator["StartsWith"] = "StartsWith";
})(FilterOperator || (FilterOperator = {}));
var Filter = /** @class */ (function () {
    function Filter(options) {
        this.path = options.path;
        this.operator = options.operator;
        this.value1 = options.value1;
        this.value2 = options.value2;
        this.filters = options.filters;
        this.and = options.and;
    }
    return Filter;
}());

var Filters = /** @class */ (function () {
    function Filters() {
        this.filters = [];
        this.filters$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
    }
    Filters.prototype.getFilterString = function () {
        return this.filters
            .map(function (filter) {
            switch (filter.operator) {
                case FilterOperator.BT:
                    return "(" + filter.path + " ge '" + filter.value1 + "' and " + filter.path + " le '" + filter.value2 + "')";
                case FilterOperator.EQ:
                    return filter.path + " eq '" + filter.value1 + "'";
                case FilterOperator.NE:
                    return filter.path + " ne '" + filter.value1 + "'";
            }
            // TODO 添加完整
        }).join(' or ');
    };
    Filters.prototype.remove = function (filter) {
        this.filters.splice(filter);
        this.filters$.next(this.filters);
    };
    Filters.prototype.add = function (filter) {
        this.filters.push(filter);
        this.filters$.next(this.filters);
    };
    Filters.prototype.put = function (filter) {
        this.filters = [filter];
        this.filters$.next(this.filters);
    };
    Filters.prototype.onChange = function () {
        return this.filters$;
    };
    return Filters;
}());



/***/ }),

/***/ "../nx-charts/src/lib/core/pipes/entries.pipe.ts":
/*!*******************************************************!*\
  !*** ../nx-charts/src/lib/core/pipes/entries.pipe.ts ***!
  \*******************************************************/
/*! exports provided: EntriesPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EntriesPipe", function() { return EntriesPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");


var EntriesPipe = /** @class */ (function () {
    function EntriesPipe() {
    }
    EntriesPipe.prototype.transform = function (value, args) {
        return Object.entries(value);
    };
    EntriesPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'entries'
        })
    ], EntriesPipe);
    return EntriesPipe;
}());



/***/ }),

/***/ "../nx-charts/src/lib/core/pipes/keys.pipe.ts":
/*!****************************************************!*\
  !*** ../nx-charts/src/lib/core/pipes/keys.pipe.ts ***!
  \****************************************************/
/*! exports provided: KeysPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KeysPipe", function() { return KeysPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");


var KeysPipe = /** @class */ (function () {
    function KeysPipe() {
    }
    KeysPipe.prototype.transform = function (value, args) {
        return Object.keys(value);
    };
    KeysPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'keys'
        })
    ], KeysPipe);
    return KeysPipe;
}());



/***/ }),

/***/ "../nx-charts/src/lib/nx-chart/index.ts":
/*!**********************************************!*\
  !*** ../nx-charts/src/lib/nx-chart/index.ts ***!
  \**********************************************/
/*! exports provided: NxChartComponent, abbreviateNumber */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _nx_chart_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./nx-chart.component */ "../nx-charts/src/lib/nx-chart/nx-chart.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NxChartComponent", function() { return _nx_chart_component__WEBPACK_IMPORTED_MODULE_0__["NxChartComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "abbreviateNumber", function() { return _nx_chart_component__WEBPACK_IMPORTED_MODULE_0__["abbreviateNumber"]; });




/***/ }),

/***/ "../nx-charts/src/lib/nx-chart/nx-chart.component.scss":
/*!*************************************************************!*\
  !*** ../nx-charts/src/lib/nx-chart/nx-chart.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: flex;\n}\n\n.echart-container {\n  flex: 1;\n  display: flex;\n  position: relative;\n}\n\n.echart {\n  flex: 1;\n  transition: all 0.3s;\n}\n\n.echart-no-data {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  justify-items: center;\n  align-items: stretch;\n  visibility: hidden;\n  opacity: 0;\n  transition: all 0.3s;\n}\n\n.echart-no-data span {\n  text-align: center;\n  margin: auto;\n}\n\n.echart-debugging {\n  position: absolute;\n  top: 0;\n  right: 0;\n}"

/***/ }),

/***/ "../nx-charts/src/lib/nx-chart/nx-chart.component.ts":
/*!***********************************************************!*\
  !*** ../nx-charts/src/lib/nx-chart/nx-chart.component.ts ***!
  \***********************************************************/
/*! exports provided: NxChartComponent, abbreviateNumber */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NxChartComponent", function() { return NxChartComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "abbreviateNumber", function() { return abbreviateNumber; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _nx_charts_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../nx-charts.service */ "../nx-charts/src/lib/nx-charts.service.ts");
/* harmony import */ var projects_nx_annotation_src_public_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! projects/nx-annotation/src/public-api */ "../nx-annotation/src/public-api.ts");






var AUXILIARY_SERIES_NAME = 'Auxiliary';
var DATA_ZOOM_SUITABLE_SIZE = 20;
/**
 *
 */
var NxChartComponent = /** @class */ (function () {
    function NxChartComponent(odataFactory, chartService, ngZone, cd) {
        var _this = this;
        this.odataFactory = odataFactory;
        this.chartService = chartService;
        this.ngZone = ngZone;
        this.cd = cd;
        this.debugging = false;
        this.bussing = true;
        this.noData = false;
        this.dimensionTexts = [];
        this.defaultOptions = {};
        this.dataZoom = true;
        // @Input() disableHeat: boolean = false;
        this.pieOptions = {};
        // Controls from UI5 SmartChart
        // Controls the visibility of the title in the dimension area of the chart.
        this.showDimensionsTitle = true;
        // Controls the visibility of the title in the measure area of the chart.
        this.showMeasuresTitle = true;
        // Controls if the chart's legend is visable.
        this.legendVisible = true;
        // Controls the visibility of the Zoom In and Zoom Out buttons.
        this.showZoomButtons = true;
        this.chartInitOpts = {
            renderer: 'canvas',
            width: 'auto',
            height: 'auto'
        };
        this.option = {};
        // User Custom options: from this.chartOptions$
        this.options = {};
        // Events
        this.chartInit = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.chartClick = this.createLazyEvent('click')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (event) {
            event.data = _this.getItemByDimension(event.name);
            return event;
        }));
        this.chartDblClick = this.createLazyEvent('dblclick');
        this.chartRendered = this.createLazyEvent('rendered');
        this.chartUpdateAxisPointer = this.createLazyEvent('updateAxisPointer');
        this.properties = [];
        this.onDestroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.chartOptions$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.chartInit
            .subscribe(function (echarts) {
            // console.log('chartInit')
            _this.echartsInstance = echarts;
            if (_this.bussing) {
                if (_this.theme === 'dark') {
                    _this.echartsInstance.showLoading('default', {
                        color: '#8f9bb3',
                        textColor: '#8f9bb3',
                        maskColor: '#222b45',
                    });
                }
                else {
                    _this.echartsInstance.showLoading();
                }
            }
        });
    }
    NxChartComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.title) {
            this.options = {
                title: {
                    text: this.title
                }
            };
        }
        if (this.chartService) {
            this.chartService.onThemeChange()
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.onDestroy$))
                .subscribe(function (theme) {
                // console.warn(theme);
                if (_this.theme !== theme) {
                    delete _this.echartsInstance;
                    _this.theme = theme;
                }
            });
        }
        Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["combineLatest"])(this.getChartOptions$().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (options) { return _this.options = Object(_nx_charts_service__WEBPACK_IMPORTED_MODULE_4__["mergeDeep"])(_this.options || {}, options); })), this.getData$())
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mergeMap"])(function (v) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["iif"])(function () { return !!_this.echartsInstance; }, Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(v), Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(v).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["delayWhen"])(function () { return _this.chartInit; })));
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (v) {
            _this.bussing = false;
            _this.echartsInstance.hideLoading();
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.onDestroy$), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (_a) {
            var _b = tslib__WEBPACK_IMPORTED_MODULE_0__["__read"](_a, 2), options = _b[0], data = _b[1];
            return _this.rendering(data, options);
        }))
            .subscribe(function (message) {
            console.log("Render Complete!");
        });
        // 给 chart options 监听链条初始化一个值， 并且 defaultOptions 要使用 BehaviorSubject 类型
        this.chartOptions$.next(this.options || {});
    };
    NxChartComponent.prototype.getChartOptions$ = function () {
        var _this = this;
        if (this.defaultOptions instanceof rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"]) {
            // return this.defaultOptions;
            return this.chartOptions$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function () { return _this.defaultOptions; }));
        }
        else if (this.defaultOptions) {
            this.options = this.defaultOptions;
        }
        return this.chartOptions$;
    };
    NxChartComponent.prototype.getData$ = function () {
        var _this = this;
        // Option 1: Push data from parent component
        if (this.data$) {
            return this.data$
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (data) {
                // TODO DEBUGGING
                if (!data) {
                    console.warn(data);
                }
            }));
        }
        else if (this.entitySet) {
            // Option 2: Pull data by myself
            this.odataService = this.odataFactory.getModel(this.entitySet, this.dataSource);
            // this.odataService.selects = this.selects || [...this.dimensions, ...this.measures];
            this.odataService.orderbys = this.orderbys;
            this.odataService.filterString = this.filterString;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(1)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (v) { return _this.getSelects().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (v) { return _this.odataService.selects = v; })); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (v) { return _this.odataService.getAll(); }));
        }
    };
    NxChartComponent.prototype.ngAfterViewInit = function () {
        if (!(this.dimensions && this.measures && this.chartType)) {
            return;
        }
        this.initChartType();
    };
    NxChartComponent.prototype.ngOnChanges = function (changes) {
        if (Object.entries(changes).find(function (entry) { return (entry[0] === 'defaultOptions') && entry[1].currentValue; })) {
            // console.log('setOption %s', 'onChange');
            // this.echartsInstance && this.echartsInstance.setOption(this.defaultOptions);
        }
    };
    NxChartComponent.prototype.clear = function () {
        // this.echartsInstance.clear();
        this.option = {};
    };
    NxChartComponent.prototype.rendering = function (v, defaultOptions) {
        var _this = this;
        if (defaultOptions === void 0) { defaultOptions = {}; }
        console.log('rendering');
        // this.options = mergeDeep(this.options||{}, defaultOptions);
        this.checkChartConfig();
        this.initChartType();
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(v)
            .pipe(
        // 用户自定义异步处理函数
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mergeMap"])(function (v) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["iif"])(function () { return !_this.dataReceived; }, Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(v), _this.dataReceived && _this.dataReceived(v));
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (items) {
            if (_this.chartType === projects_nx_annotation_src_public_api__WEBPACK_IMPORTED_MODULE_5__["ChartType"].Custom) {
                return;
            }
            _this.items = items;
            _this.noData = !(_this.items && _this.items.length);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (items) {
            var options = _this.getRenderSeries(items);
            // render series 后, render chart 前的出口
            if (_this.afterRenderSeries) {
                _this.afterRenderSeries(options.series, items);
            }
            // merge default and user custom options
            options = Object(_nx_charts_service__WEBPACK_IMPORTED_MODULE_4__["mergeDeep"])(options, _this.options);
            // render series 后, render chart 前的出口
            if (_this.beforeRenderChart) {
                _this.beforeRenderChart(options, items);
            }
            if (_this.debugging) {
                console.warn('rendering - setOption:');
                console.warn(options);
            }
            // render chart
            _this.option = options;
            // this.echartsInstance.setOption(options);
            // Push sync attributes
            _this.cd.detectChanges();
            return 'Success';
        }));
    };
    NxChartComponent.prototype.checkChartConfig = function () {
        if (this.chartType === projects_nx_annotation_src_public_api__WEBPACK_IMPORTED_MODULE_5__["ChartType"].Custom) {
            return;
        }
        if (!this.dimensions) {
            console.error("Should provide attribute [dimensions]");
        }
        if (!this.measures) {
            console.error("Should provide attribute [measures]");
        }
    };
    NxChartComponent.prototype.initChartType = function () {
        switch (this.chartType) {
            case projects_nx_annotation_src_public_api__WEBPACK_IMPORTED_MODULE_5__["ChartType"].Bar:
            case projects_nx_annotation_src_public_api__WEBPACK_IMPORTED_MODULE_5__["ChartType"].Line:
            case projects_nx_annotation_src_public_api__WEBPACK_IMPORTED_MODULE_5__["ChartType"].Column:
            case projects_nx_annotation_src_public_api__WEBPACK_IMPORTED_MODULE_5__["ChartType"].ColumnStacked:
            case projects_nx_annotation_src_public_api__WEBPACK_IMPORTED_MODULE_5__["ChartType"].ColumnDual:
            case projects_nx_annotation_src_public_api__WEBPACK_IMPORTED_MODULE_5__["ChartType"].Scatter:
            case projects_nx_annotation_src_public_api__WEBPACK_IMPORTED_MODULE_5__["ChartType"].Area:
                return this.initChartBar(this.chartType);
            case projects_nx_annotation_src_public_api__WEBPACK_IMPORTED_MODULE_5__["ChartType"].Pie:
            case projects_nx_annotation_src_public_api__WEBPACK_IMPORTED_MODULE_5__["ChartType"].Donut:
                return this.initChartPie();
            case projects_nx_annotation_src_public_api__WEBPACK_IMPORTED_MODULE_5__["ChartType"].TreeMap:
                return this.initChartTreemap();
            case projects_nx_annotation_src_public_api__WEBPACK_IMPORTED_MODULE_5__["ChartType"].HeatMap:
                return this.initChartHeatMap();
            case projects_nx_annotation_src_public_api__WEBPACK_IMPORTED_MODULE_5__["ChartType"].GeoMap:
                return this.initChartGeoMap();
            case projects_nx_annotation_src_public_api__WEBPACK_IMPORTED_MODULE_5__["ChartType"].Waterfall:
            case projects_nx_annotation_src_public_api__WEBPACK_IMPORTED_MODULE_5__["ChartType"].HorizontalWaterfall:
                return this.initChartWaterfall();
        }
    };
    NxChartComponent.prototype.getRenderSeries = function (v) {
        var options = {};
        switch (this.chartType) {
            case projects_nx_annotation_src_public_api__WEBPACK_IMPORTED_MODULE_5__["ChartType"].Bar:
            case projects_nx_annotation_src_public_api__WEBPACK_IMPORTED_MODULE_5__["ChartType"].Line:
            case projects_nx_annotation_src_public_api__WEBPACK_IMPORTED_MODULE_5__["ChartType"].Area:
            case projects_nx_annotation_src_public_api__WEBPACK_IMPORTED_MODULE_5__["ChartType"].Column:
            case projects_nx_annotation_src_public_api__WEBPACK_IMPORTED_MODULE_5__["ChartType"].ColumnDual:
            case projects_nx_annotation_src_public_api__WEBPACK_IMPORTED_MODULE_5__["ChartType"].Scatter:
                return this.renderBar(v, this.chartType);
            case projects_nx_annotation_src_public_api__WEBPACK_IMPORTED_MODULE_5__["ChartType"].ColumnStacked:
                return this.renderColumnStacked(v);
            case projects_nx_annotation_src_public_api__WEBPACK_IMPORTED_MODULE_5__["ChartType"].Pie:
            case projects_nx_annotation_src_public_api__WEBPACK_IMPORTED_MODULE_5__["ChartType"].Donut:
                options = this.renderPie(v);
                break;
            case projects_nx_annotation_src_public_api__WEBPACK_IMPORTED_MODULE_5__["ChartType"].TreeMap:
                options = this.renderTreemap(v);
                break;
            case projects_nx_annotation_src_public_api__WEBPACK_IMPORTED_MODULE_5__["ChartType"].HeatMap:
                options = this.renderHeatMap(v);
                break;
            case projects_nx_annotation_src_public_api__WEBPACK_IMPORTED_MODULE_5__["ChartType"].GeoMap:
                options = this.renderGeoMap(v);
                break;
            case projects_nx_annotation_src_public_api__WEBPACK_IMPORTED_MODULE_5__["ChartType"].Waterfall:
            case projects_nx_annotation_src_public_api__WEBPACK_IMPORTED_MODULE_5__["ChartType"].HorizontalWaterfall:
                options = this.renderWaterfall(v);
                break;
            default:
                if (this.customChartType) {
                    return this.customChartType.getChartOptions(v);
                }
        }
        return options;
    };
    /**
     * 初始化 Chart 配置包括类型 []
     *
     * @param type chart type
     */
    NxChartComponent.prototype.initChartBar = function (type) {
        var _this = this;
        var _a = tslib__WEBPACK_IMPORTED_MODULE_0__["__read"](this.getAxisByChartType(type), 3), category = _a[0], value = _a[1], seriesType = _a[2];
        this.option.series = [];
        this.option.tooltip = {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow',
                label: {
                    show: true
                }
            }
        };
        this.option.legend = {
            show: this.legendVisible,
            right: '1%',
            data: []
        };
        // 暂时只支持一个 dimension
        var property = this.entityType.getProperty(this.dimensions[0]);
        // x y axis 要一起设置?
        this.option[value] = {
            type: "value",
            axisLabel: {
                formatter: this.getMeasureLabelFormater()
            }
        };
        var dimension = {
            type: this.getDimensionRole(property.Name),
            axisLabel: {
                show: true
            },
            data: []
        };
        // 是否显示 dimension 轴的 title
        if (this.showDimensionsTitle) {
            dimension.name = property && property.getAttribute('sap:label');
        }
        this.option[category] = dimension;
        // 维度坐标轴: 显示 dimension 的文本字段值, 否则显示 dimension 本身值
        if (dimension.type !== 'time') {
            this.setCategoryAxisLabel(this.option[category]);
            this.setCategoryAxisPointerLabel(this.option[category]);
        }
        this.setTooltip(this.option);
        this.measures.forEach(function (measure) {
            var property = _this.entityType.getProperty(measure);
            var series = {
                id: measure,
                type: seriesType,
            };
            // 是否显示 measure 轴的 title
            if (_this.showMeasuresTitle) {
                series.name = (property && property.SAPLabel) || measure;
            }
            if (projects_nx_annotation_src_public_api__WEBPACK_IMPORTED_MODULE_5__["ChartType"].Area === type) {
                series.areaStyle = {};
            }
            _this.option.series.push(series);
            _this.option.legend.data.push({
                name: (property && property.SAPLabel) || measure,
            });
        });
        return this.option;
    };
    /**
     * 初始化设置 pie 图形
     */
    NxChartComponent.prototype.initChartPie = function () {
        var _this = this;
        this.option.series = [];
        this.option.tooltip = {
            trigger: 'item',
        };
        this.option.legend = {
            show: this.legendVisible,
            right: '1%',
            orient: 'vertical',
            data: []
        };
        var series = {
            type: "pie",
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'grey'
                }
            },
            label: {}
        };
        if (this.chartType === projects_nx_annotation_src_public_api__WEBPACK_IMPORTED_MODULE_5__["ChartType"].Donut) {
            series.radius = ['30%', '60%'];
        }
        // 如果有 legend 则图形位置靠左一些
        if (this.legendVisible) {
            series.center = ['40%', '50%'];
        }
        if (this.pieOptions.showLabels !== undefined) {
            series.label = {
                normal: {
                    show: false
                }
            };
        }
        // Dimension Property
        var dimProperty = this.entityType.getProperty(this.getDimension());
        // Measures
        this.measures.forEach(function (measure) {
            var property = _this.entityType.getProperty(measure);
            series.name = property && property.getAttribute('sap:label');
            // 如果 dimension 有描述字段, 则设置 tooltip, legend 显示 label 
            if (dimProperty.SAPText) {
                series.label.formatter = function (params) { return _this.items.find(function (item) { return item[dimProperty.Name] === params.name; })[dimProperty.SAPText.Name]; };
                _this.option.legend.formatter = function (name) { return _this.items.find(function (item) { return item[dimProperty.Name] === name; })[dimProperty.SAPText.Name]; };
            }
            _this.setTooltip(_this.option);
            _this.option.series.push(series);
        });
    };
    NxChartComponent.prototype.initChartTreemap = function () {
        var _this = this;
        this.option.tooltip = {
            formatter: '{b}: {c}'
        };
        this.option.series = [];
        var treemap = {
            type: 'treemap',
            // visibleMin: 300,
            label: {
                show: true,
                formatter: '{b}: {@score[0]}'
            },
            data: []
        };
        var measure = this.getMeasure();
        return this.odataService.getEntityType()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (entityType) {
            var property = entityType.getProperty(measure);
            treemap.name = property && property.getAttribute('sap:label');
            _this.option.series.push(treemap);
        }));
    };
    NxChartComponent.prototype.initChartHeatMap = function () {
        var _this = this;
        this.option.tooltip = {
            position: 'top',
        };
        this.option.xAxis = {
            type: 'category',
            splitArea: {
                show: true,
                areaStyle: {
                    color: ['rgba(250,250,250,0.1)', 'rgba(200,200,200,0.1)']
                }
            },
            axisLabel: {}
        };
        this.option.yAxis = {
            type: 'category',
            splitArea: {
                show: true,
                areaStyle: {
                    color: ['rgba(250,250,250,0.1)', 'rgba(200,200,200,0.1)']
                }
            },
            axisLabel: {}
        };
        this.option.series = [{
                type: 'heatmap',
                label: {
                    normal: {
                        show: true
                    }
                },
            }];
        // if (!this.disableHeat) {
        //   this.option.visualMap = {
        //     min: 0,
        //     max: 300,
        //     calculable: true,
        //     show: false,
        //     orient: 'horizontal',
        //     left: 'center',
        //     // inRange: {
        //     //   color: ['#f2c31a', '#24b7f2']
        //     // }
        //   };
        // }
        return this.odataService.getEntityType()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (entityType) {
            var dimensionX = _this.dimensions[0];
            var dimensionY = _this.dimensions[1];
            var propertyX = entityType.getProperty(dimensionX);
            var propertyY = entityType.getProperty(dimensionY);
            if (_this.showDimensionsTitle) {
                _this.option.xAxis.name = propertyX && propertyX.getAttribute('sap:label');
                _this.option.yAxis.name = propertyY && propertyY.getAttribute('sap:label');
            }
        }));
    };
    // TODO 调整
    NxChartComponent.prototype.initChartGeoMap = function () {
        var _this = this;
        this.option.tooltip = {
            trigger: 'item',
            formatter: function (params) {
                return params.seriesName + '<br/>' +
                    _this.items.find(function (item) { return item[_this.getDimension()] === params.name; })[_this.getDimensionLabel()] +
                    ': ' + params.value[2];
            }
        };
        this.option.geo = {
            silent: true,
            label: {
                emphasis: {
                    show: false,
                    areaColor: '#eee'
                }
            },
            left: 0, top: 0, right: 0, bottom: 0,
            boundingCoords: [
                // 定位左上角经纬度
                [-180, 90],
                // 定位右下角经纬度
                [180, -90]
            ],
            roam: true,
        };
        if (this.legendVisible) {
            this.option.legend = {
                show: this.legendVisible,
                right: 10
            };
        }
        var measure = this.getMeasure();
        return this.odataService.getEntityType()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (entityType) {
            _this.measures.forEach(function (measure, i) {
                var property = entityType.getProperty(measure);
                var series = {
                    type: 'scatter',
                    coordinateSystem: 'geo',
                    data: []
                };
                series.name = (property && property.getAttribute('sap:label')) || measure;
                _this.option.series.push(series);
            });
        }));
    };
    NxChartComponent.prototype.renderBar = function (items, type) {
        var options = {
            xAxis: {},
            yAxis: {},
            series: []
        };
        var _a = tslib__WEBPACK_IMPORTED_MODULE_0__["__read"](this.getAxisByChartType(type), 2), category = _a[0], value = _a[1];
        // 设置维度轴值
        options[category].data = this.getDimensionData(items);
        options.series = this.getSeriesData(items);
        options.dataZoom = this.getDataZoomOptions(category, options.series);
        return options;
    };
    NxChartComponent.prototype.getSeriesData = function (items) {
        var series = [];
        var dimension = this.getDimension();
        var dimensionType = this.getDimensionRole(dimension);
        // 调用用户自定义函数, 否则调用度量值程序
        if (this.beforeRenderSeries) {
            this.beforeRenderSeries(series, items);
        }
        else {
            this.measures.forEach(function (measure, index) {
                if (dimensionType === 'time') {
                    series.push({
                        data: items.map(function (item) { return ({
                            value: [
                                [item[dimension].getFullYear(), item[dimension].getMonth() + 1, item[dimension].getDate()].join('/'),
                                item[measure]
                            ], data: item
                        }); })
                    });
                }
                else {
                    series.push({
                        data: items.map(function (item) { return item[measure]; })
                    });
                }
            });
        }
        return series;
    };
    NxChartComponent.prototype.renderPie = function (items) {
        var dimension = this.getDimension();
        var dText = this.dimensionTexts && this.dimensionTexts[0];
        var dLabel = dText || dimension;
        var measure = this.getMeasure();
        var options = {
            legend: {},
            series: [{}]
        };
        // legend
        options.legend.data = items.map(function (item) { return item[dimension]; });
        options.series[0].data = items.map(function (item) {
            return {
                name: item[dimension],
                value: [item[measure], item]
            };
        });
        // 按自定义指定显示 Label 的数量显示 Label
        if (this.pieOptions.showLabels !== undefined) {
            for (var i = 0; i < this.pieOptions.showLabels; i++) {
                options.series[0].data[i].label = {
                    show: true,
                    position: 'inside',
                    formatter: function (params) { return '' + params.value[1][dLabel] + params.value[1][measure]; }
                };
            }
        }
        return options;
    };
    NxChartComponent.prototype.getAxisByChartType = function (type) {
        var category = 'xAxis';
        var value = 'yAxis';
        var seriesType = '';
        switch (type) {
            case projects_nx_annotation_src_public_api__WEBPACK_IMPORTED_MODULE_5__["ChartType"].Bar:
                category = 'yAxis';
                value = 'xAxis';
                seriesType = 'bar';
                break;
            case projects_nx_annotation_src_public_api__WEBPACK_IMPORTED_MODULE_5__["ChartType"].Line:
            case projects_nx_annotation_src_public_api__WEBPACK_IMPORTED_MODULE_5__["ChartType"].Area:
                category = 'xAxis';
                value = 'yAxis';
                seriesType = 'line';
                break;
            case projects_nx_annotation_src_public_api__WEBPACK_IMPORTED_MODULE_5__["ChartType"].Column:
            case projects_nx_annotation_src_public_api__WEBPACK_IMPORTED_MODULE_5__["ChartType"].ColumnStacked:
            case projects_nx_annotation_src_public_api__WEBPACK_IMPORTED_MODULE_5__["ChartType"].ColumnDual:
            case projects_nx_annotation_src_public_api__WEBPACK_IMPORTED_MODULE_5__["ChartType"].ColumnStackedDual:
                category = 'xAxis';
                value = 'yAxis';
                seriesType = 'bar';
                break;
            case projects_nx_annotation_src_public_api__WEBPACK_IMPORTED_MODULE_5__["ChartType"].Scatter:
                category = 'xAxis';
                value = 'yAxis';
                seriesType = 'scatter';
                break;
            case projects_nx_annotation_src_public_api__WEBPACK_IMPORTED_MODULE_5__["ChartType"].Waterfall:
                category = 'xAxis';
                value = 'yAxis';
                seriesType = 'bar';
                break;
            case projects_nx_annotation_src_public_api__WEBPACK_IMPORTED_MODULE_5__["ChartType"].HorizontalWaterfall:
                category = 'yAxis';
                value = 'xAxis';
                seriesType = 'bar';
                break;
        }
        return [category, value, seriesType];
    };
    NxChartComponent.prototype.renderTreemap = function (items) {
        var dimension = this.getDimension();
        var measure = this.getMeasure();
        this.option.series[0].data = items.map(function (item) {
            return {
                name: item[dimension],
                value: item[measure]
            };
        });
    };
    NxChartComponent.prototype.renderHeatMap = function (items) {
        var dX = this.dimensions[0];
        var dXText = this.dimensionTexts[0];
        var dXLabel = dXText || dX;
        var dY = this.dimensions[1];
        var dYText = this.dimensionTexts[1];
        var dYLabel = dYText || dY;
        var measure = this.getMeasure();
        // select distinct values of dimension x
        var dataX = items.map(function (item) { return item[dX]; }).filter(function (v, i, a) { return a.indexOf(v) === i; });
        // select distinct values of dimension y
        var dataY = items.map(function (item) { return item[dY]; }).filter(function (v, i, a) { return a.indexOf(v) === i; });
        // Tooltip 函数
        this.option.tooltip = {
            formatter: function (params) { return params.value[3][dXLabel] + '/' + params.value[3][dYLabel] + ':' + params.value[2]; }
        };
        var maxSize = 0;
        this.option.xAxis.data = dataX;
        // x坐标轴: 显示 dimension 的文本字段值, 否则显示 dimension 本身值
        this.option.xAxis.axisLabel.formatter = function (value, index) {
            if (dXText) {
                return items.find(function (item) { return item[dX] === dataX[index]; })[dXText];
            }
            else {
                return dataX[index];
            }
        };
        this.option.yAxis.data = dataY;
        // y坐标轴: 显示 dimension 的文本字段值, 否则显示 dimension 本身值
        this.option.yAxis.axisLabel.formatter = function (value, index) {
            if (dYText) {
                return items.find(function (item) { return item[dY] === dataY[index]; })[dYText];
            }
            else {
                return dataY[index];
            }
        };
        this.option.series[0].data = items.map(function (item) {
            maxSize = maxSize > item[measure] ? maxSize : item[measure];
            return [
                dataX.indexOf(item[dX]),
                dataY.indexOf(item[dY]),
                item[measure],
                item
            ];
        });
        this.option.visualMap && (this.option.visualMap.max = maxSize);
    };
    NxChartComponent.prototype.renderGeoMap = function (items) {
        var _this = this;
        var dimension = this.getDimension();
        this.measures.forEach(function (measure, i) {
            _this.option.series[i].data = items
                .filter(function (item) { return item[measure] !== undefined; })
                .map(function (item) {
                return {
                    name: item[dimension],
                    value: [item.lng, item.lat, item[measure], item]
                };
            });
        });
    };
    NxChartComponent.prototype.renderColumnStacked = function (items) {
        var options = {
            xAxis: {},
            yAxis: {},
            series: []
        };
        // 设置维度轴值
        options.xAxis.data = this.getDimensionData(items);
        options.series = this.getSeriesData(items).map(function (series) {
            series.stack = 'ColumnStacked';
            return series;
        });
        options.dataZoom = this.getDataZoomOptions('xAxis', options.series);
        return options;
    };
    NxChartComponent.prototype.getDataZoomOptions = function (category, series) {
        var dataZoom = [];
        var maxSize = 0;
        // 取得度量值最大量
        series.forEach(function (series) {
            maxSize = maxSize > series.data.length ? maxSize : series.data.length;
        });
        // 根据度量值的最大量设置缩放控件
        if (maxSize > DATA_ZOOM_SUITABLE_SIZE) {
            var zoomOption = {
                show: true,
                filterMode: 'empty',
                showDataShadow: false,
                start: 0,
                end: Math.floor(DATA_ZOOM_SUITABLE_SIZE / maxSize * 100),
            };
            zoomOption[category + 'Index'] = 0;
            // TODO bug
            if (this.dataZoom) {
                zoomOption.type = 'inside';
                dataZoom.push(zoomOption);
            }
            if (this.showZoomButtons) {
                zoomOption.type = 'slider';
                dataZoom.push(zoomOption);
            }
        }
        return dataZoom;
    };
    /**
     * 纵向瀑布图
     */
    NxChartComponent.prototype.initChartWaterfall = function () {
        var measureProperty = this.getMeasureProperty();
        var _a = tslib__WEBPACK_IMPORTED_MODULE_0__["__read"](this.getAxisByChartType(this.chartType), 3), category = _a[0], value = _a[1], seriesType = _a[2];
        var options = {};
        options[category] = {
            type: 'category',
            inverse: category === 'yAxis',
            splitLine: { show: false },
            axisLabel: {}
        };
        this.setCategoryAxisLabel(options[category]);
        options[value] = {
            type: 'value',
            axisLabel: {
                formatter: this.getMeasureLabelFormater()
            }
        };
        options.series = [
            {
                name: AUXILIARY_SERIES_NAME,
                type: 'bar',
                stack: '总量',
                itemStyle: {
                    normal: {
                        barBorderColor: 'rgba(0,0,0,0)',
                        color: 'rgba(0,0,0,0)'
                    },
                    emphasis: {
                        barBorderColor: 'rgba(0,0,0,0)',
                        color: 'rgba(0,0,0,0)'
                    }
                },
            },
            {
                name: measureProperty.SAPLabel,
                type: 'bar',
                stack: '总量',
            }, {
                name: '-' + measureProperty.SAPLabel,
                type: 'bar',
                stack: '总量',
            }
        ];
        // TODO 暂时在这里设置
        this.option = options;
        return options;
    };
    NxChartComponent.prototype.renderWaterfall = function (items) {
        var _this = this;
        var _a = tslib__WEBPACK_IMPORTED_MODULE_0__["__read"](this.getAxisByChartType(this.chartType), 3), category = _a[0], value = _a[1], seriesType = _a[2];
        var options = {
            series: this.option.series
        };
        // 1. Category data
        options[category] = {};
        options[category].data = this.getDimensionData(items);
        // 2. Auxiliary hide bar
        var auxiliaryData = [];
        items.reduce(function (pre, item) {
            var measure = Number(item[_this.measures[0]]);
            auxiliaryData.push(measure >= 0 ? pre : pre + measure);
            return pre + measure;
        }, 0);
        // 去掉最后一个值
        // auxiliaryData.pop();
        options.series.find(function (series) { return series.name === AUXILIARY_SERIES_NAME; })
            .data = auxiliaryData;
        // 3. Increase and Decline bars
        var incDecs = options.series.filter(function (series) { return series.name !== AUXILIARY_SERIES_NAME; });
        incDecs[0].data = items.map(function (item) { return item[_this.measures[0]] >= 0 ? item[_this.measures[0]] : '-'; });
        incDecs[1].data = items.map(function (item) { return item[_this.measures[0]] < 0 ? -item[_this.measures[0]] : '-'; });
        // 期末
        // incDecs[0].data.push(auxiliaryData[auxiliaryData.length-1]);
        // incDecs[1].data.push(0);
        // auxiliaryData.push(0);
        // options[category].data.push('000');
        // items.push()
        this.setTooltip(options);
        return options;
    };
    /**
     * 从实际数据计算 Category , 这里会涉及到 Category 一些不同属性
     *
     * @param items
     */
    NxChartComponent.prototype.getDimensionData = function (items) {
        var dimension = this.getDimension();
        var dimensionType = this.getDimensionRole(dimension);
        // 设置维度轴值
        if (dimensionType === 'time') {
            return items.map(function (item) { return [item[dimension].getFullYear(), item[dimension].getMonth() + 1, item[dimension].getDate()].join('/'); });
        }
        return items.map(function (item) { return item[dimension]; });
    };
    NxChartComponent.prototype.setTooltip = function (options) {
        var _this = this;
        options.tooltip = options.tooltip || {};
        // Dimension Property
        var dimProperty = this.entityType.getProperty(this.getDimension());
        options.tooltip.formatter = function (params) {
            var texts = [];
            // 如果 dimension 有描述字段, 则设置 tooltip, legend 显示 label
            if (dimProperty.SAPText) {
                if (Array.isArray(params)) {
                }
                else {
                    if (_this.items[params.dataIndex]) {
                        texts.push(_this.items[params.dataIndex][dimProperty.SAPText.Name] +
                            '(' + _this.items[params.dataIndex][dimProperty.Name] + ')');
                    }
                    else {
                        texts.push(params.name);
                    }
                }
            }
            else {
                if (Array.isArray(params)) {
                    if (params[0].axisType === "xAxis.time") {
                        texts.push(params[0].axisValueLabel);
                    }
                    else {
                        params[0].seriesName && texts.push(params[0].seriesName);
                    }
                }
                else {
                    texts.push(_this.items[params.dataIndex][dimProperty.Name]);
                }
            }
            if (Array.isArray(params)) {
                texts.push(params.filter(function (param) { return param.value !== '-' && param.seriesName !== AUXILIARY_SERIES_NAME; })
                    .map(function (param) {
                    if (param.axisType === "xAxis.time") {
                        return param.seriesName + ': ' + abbreviateNumber(param.value[1]);
                    }
                    else if (param.axisType === "xAxis.category") {
                        return param.axisValueLabel + ': ' + abbreviateNumber(param.value);
                    }
                    else {
                        return param.seriesName + ': ' + abbreviateNumber(param.value);
                    }
                }).join('<br>'));
            }
            else {
                texts.push(params.seriesName + ': ' + (Array.isArray(params.value) ? abbreviateNumber(params.value[0]) : abbreviateNumber(params.value)));
                if (params.percent) {
                    texts.push(params.percent + '%');
                }
            }
            return texts.join('<br>');
        };
    };
    NxChartComponent.prototype.setCategoryAxisLabel = function (category) {
        var _this = this;
        // 暂时只支持一个 dimension
        var property = this.entityType.getProperty(this.getDimension());
        category.axisLabel.formatter =
            function (value, index) {
                if (!_this.items[index]) {
                    return value;
                }
                if (property.SAPText) {
                    return _this.items[index][(property.SAPText && property.SAPText.Name)] + '(' + _this.items[index][property.Name] + ')';
                }
                else {
                    return _this.items[index][property.Name];
                }
            };
    };
    NxChartComponent.prototype.setCategoryAxisPointerLabel = function (category) {
        var _this = this;
        // 暂时只支持一个 dimension
        var property = this.entityType.getProperty(this.getDimension());
        category.axisPointer = category.axisPointer || {};
        category.axisPointer.label = category.axisPointer.label || {};
        category.axisPointer.label.formatter = function (params) {
            // TODO
            if (params.seriesData[0]) {
                var index = params.seriesData[0].dataIndex;
                if (property.SAPText) {
                    return _this.items[index][(property.SAPText && property.SAPText.Name)] + '(' + _this.items[index][property.Name] + ')';
                }
                else {
                    return _this.items[index][property.Name];
                }
            }
            else {
                return params.value;
            }
        };
    };
    NxChartComponent.prototype.getDimension = function (i) {
        if (i === void 0) { i = 0; }
        return this.dimensions[i];
    };
    NxChartComponent.prototype.getMeasure = function (i) {
        if (i === void 0) { i = 0; }
        return this.measures[i];
    };
    NxChartComponent.prototype.getMeasureProperty = function (i) {
        if (i === void 0) { i = 0; }
        return this.entityType.getProperty(this.getMeasure(i));
    };
    NxChartComponent.prototype.getDimensionLabel = function (i) {
        if (i === void 0) { i = 0; }
        return this.dimensionTexts[i] || this.dimensions[i];
    };
    NxChartComponent.prototype.getSelects = function () {
        var _this = this;
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(1)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (v) { return _this.getSapTexts(_this.dimensions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (v) { return _this.dimensionTexts = v; })); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (v) { return v.filter(function (item) { return item !== undefined; }); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (v) {
            if (_this.selects) {
                return tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"](_this.selects, v);
            }
            else {
                return tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"](_this.dimensions, v, [_this.measures]);
            }
        }));
    };
    NxChartComponent.prototype.getSapTexts = function (propertyNames) {
        return this.odataService.getEntityType()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (entityType) {
            return propertyNames.map(function (pn) {
                var property = entityType.getProperty(pn);
                var sapText = property.getAttribute('sap:text');
                if (sapText) {
                    return sapText;
                }
                return undefined;
            });
        }));
    };
    NxChartComponent.prototype.getSapText = function (propertyName) {
        var _this = this;
        return this.odataService.getEntityType()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (entityType) {
            var property = entityType.getProperty(propertyName);
            _this.properties.push(property);
            var sapText = property.getAttribute('sap:text');
            if (sapText) {
                return sapText;
            }
        }));
    };
    NxChartComponent.prototype.getEntityType = function () {
        var _this = this;
        if (this.entityType) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(this.entityType);
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["forkJoin"])(this.odataService.getEntityType(), this.getSapTexts(this.dimensions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (v) { return _this.dimensionTexts = v; })))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (v) { return v[0]; }));
    };
    NxChartComponent.prototype.getProperty = function (name) {
        return this.properties.find(function (property) { return property.Name === name; });
    };
    NxChartComponent.prototype.getMeasureLabelFormater = function () {
        return abbreviateNumber;
    };
    NxChartComponent.prototype.getDimensionRole = function (name) {
        if (this.dimensionAttributes) {
            var dimension = this.dimensionAttributes.find(function (attr) { return attr.Dimension === name; });
            if (dimension) {
                switch (dimension.Role) {
                    case projects_nx_annotation_src_public_api__WEBPACK_IMPORTED_MODULE_5__["ChartDimensionRoleType"].Category:
                        return 'category';
                    case projects_nx_annotation_src_public_api__WEBPACK_IMPORTED_MODULE_5__["ChartDimensionRoleType"].Series:
                        return 'time';
                    case projects_nx_annotation_src_public_api__WEBPACK_IMPORTED_MODULE_5__["ChartDimensionRoleType"].Category2:
                        return 'category';
                }
            }
        }
        return 'category';
    };
    NxChartComponent.prototype.getItemByDimension = function (value) {
        var _this = this;
        return this.items.find(function (item) { return item[_this.getDimension()] === value; });
    };
    NxChartComponent.prototype.ngOnDestroy = function () {
        this.onDestroy$.next();
        this.onDestroy$.complete();
    };
    NxChartComponent.prototype.debugChartOptions = function () {
        console.warn(this.echartsInstance.getOption());
    };
    NxChartComponent.prototype.debugEntityType = function () {
        console.warn(this.entityType);
    };
    // allows to lazily bind to only those events that are requested through the `@Output` by parent components
    // see https://stackoverflow.com/questions/51787972/optimal-reentering-the-ngzone-from-eventemitter-event for more info
    NxChartComponent.prototype.createLazyEvent = function (eventName) {
        var _this = this;
        return this.chartInit.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (chart) { return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
            chart.on(eventName, function (data) { return _this.ngZone.run(function () { return observer.next(data); }); });
            return {
                unsubscribe: function () { }
            }; // no need to react on unsubscribe as long as the `dispose()` is called in ngOnDestroy
        }); }));
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], NxChartComponent.prototype, "debugging", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], NxChartComponent.prototype, "bussing", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], NxChartComponent.prototype, "title", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], NxChartComponent.prototype, "chartType", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], NxChartComponent.prototype, "customChartType", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], NxChartComponent.prototype, "dataSource", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], NxChartComponent.prototype, "entitySet", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], NxChartComponent.prototype, "selects", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], NxChartComponent.prototype, "dimensions", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], NxChartComponent.prototype, "dimensionAttributes", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], NxChartComponent.prototype, "measures", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], NxChartComponent.prototype, "orderbys", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], NxChartComponent.prototype, "filterString", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function)
    ], NxChartComponent.prototype, "dataReceived", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"])
    ], NxChartComponent.prototype, "data$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function)
    ], NxChartComponent.prototype, "beforeRenderChart", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function)
    ], NxChartComponent.prototype, "beforeRenderSeries", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function)
    ], NxChartComponent.prototype, "afterRenderSeries", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], NxChartComponent.prototype, "defaultOptions", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], NxChartComponent.prototype, "settings", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], NxChartComponent.prototype, "dataZoom", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], NxChartComponent.prototype, "pieOptions", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], NxChartComponent.prototype, "showDimensionsTitle", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], NxChartComponent.prototype, "showMeasuresTitle", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], NxChartComponent.prototype, "legendVisible", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], NxChartComponent.prototype, "showZoomButtons", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"])
    ], NxChartComponent.prototype, "onRender", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], NxChartComponent.prototype, "theme", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], NxChartComponent.prototype, "chartInitOpts", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], NxChartComponent.prototype, "chartInit", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], NxChartComponent.prototype, "chartClick", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], NxChartComponent.prototype, "chartDblClick", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], NxChartComponent.prototype, "chartRendered", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], NxChartComponent.prototype, "chartUpdateAxisPointer", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], NxChartComponent.prototype, "properties", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", projects_nx_annotation_src_public_api__WEBPACK_IMPORTED_MODULE_5__["SAPODataModel"])
    ], NxChartComponent.prototype, "odataService", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", projects_nx_annotation_src_public_api__WEBPACK_IMPORTED_MODULE_5__["EntityType"])
    ], NxChartComponent.prototype, "entityType", void 0);
    NxChartComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'nx-chart',
            template: __webpack_require__(/*! raw-loader!./nx-chart.component.html */ "../../node_modules/raw-loader/index.js!../nx-charts/src/lib/nx-chart/nx-chart.component.html"),
            styles: [__webpack_require__(/*! ./nx-chart.component.scss */ "../nx-charts/src/lib/nx-chart/nx-chart.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [projects_nx_annotation_src_public_api__WEBPACK_IMPORTED_MODULE_5__["SAPODataServiceFactory"],
            _nx_charts_service__WEBPACK_IMPORTED_MODULE_4__["NxChartService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])
    ], NxChartComponent);
    return NxChartComponent;
}());

/**
 * 数字格式化函数，单位 K M B T KT
 *
 * @param value
 */
function abbreviateNumber(value) {
    var newValue = Math.abs(value).toFixed(0);
    if (Math.abs(value) >= 1000) {
        var suffixes = ["", "K", "M", "B", "T", "KT"];
        var suffixNum = Math.floor((("" + newValue).length - 1) / 3);
        var shortValue = void 0;
        for (var precision = 2; precision >= 1; precision--) {
            shortValue = parseFloat((suffixNum != 0 ? (value / Math.pow(1000, suffixNum)) : value).toPrecision(precision));
            var dotLessShortValue = (shortValue + '').replace(/[^a-zA-Z 0-9]+/g, '');
            if (dotLessShortValue.length <= 2) {
                break;
            }
        }
        if (shortValue % 1 != 0) {
            var shortNum = shortValue.toFixed(1);
        }
        newValue = shortValue + suffixes[suffixNum];
    }
    return newValue;
}
function groupBy(xs, key) {
    return xs.reduce(function (rv, x) {
        (rv[x[key]] = rv[x[key]] || []).push(x);
        return rv;
    }, {});
}


/***/ }),

/***/ "../nx-charts/src/lib/nx-chart/nx-chart.module.ts":
/*!********************************************************!*\
  !*** ../nx-charts/src/lib/nx-chart/nx-chart.module.ts ***!
  \********************************************************/
/*! exports provided: NxChartModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NxChartModule", function() { return NxChartModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var ngx_echarts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-echarts */ "../../node_modules/ngx-echarts/fesm5/ngx-echarts.js");
/* harmony import */ var _nx_chart_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./nx-chart.component */ "../nx-charts/src/lib/nx-chart/nx-chart.component.ts");





var NxChartModule = /** @class */ (function () {
    function NxChartModule() {
    }
    NxChartModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_nx_chart_component__WEBPACK_IMPORTED_MODULE_4__["NxChartComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                ngx_echarts__WEBPACK_IMPORTED_MODULE_3__["NgxEchartsModule"]
            ],
            exports: [_nx_chart_component__WEBPACK_IMPORTED_MODULE_4__["NxChartComponent"]]
        })
    ], NxChartModule);
    return NxChartModule;
}());



/***/ }),

/***/ "../nx-charts/src/lib/nx-charts.service.ts":
/*!*************************************************!*\
  !*** ../nx-charts/src/lib/nx-charts.service.ts ***!
  \*************************************************/
/*! exports provided: NxChartService, mergeDeep */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NxChartService", function() { return NxChartService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mergeDeep", function() { return mergeDeep; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm5/index.js");



var NxChartService = /** @class */ (function () {
    function NxChartService() {
        this.theme$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["ReplaySubject"](1);
        this.refresh$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    /**
     * On chart theme change event
     */
    NxChartService.prototype.onThemeChange = function () {
        return this.theme$;
    };
    /**
     * Trigger the chart theme change event
     *
     * @param theme The name of EChart theme
     */
    NxChartService.prototype.changeTheme = function (theme) {
        console.warn(theme);
        this.theme$.next(theme);
    };
    /**
     * On chart refresh event
     */
    NxChartService.prototype.onRefresh = function () {
        return this.refresh$;
    };
    /**
     * Refresh chart
     */
    NxChartService.prototype.refresh = function (name) {
        this.refresh$.next(name);
    };
    NxChartService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NxChartService);
    return NxChartService;
}());

function mergeDeep(target, source) {
    var isObject = function (obj) { return obj && typeof obj === 'object'; };
    if (!isObject(target) || !isObject(source)) {
        return source;
    }
    Object.keys(source).forEach(function (key) {
        var targetValue = target[key];
        var sourceValue = source[key];
        if (Array.isArray(targetValue) && Array.isArray(sourceValue)) {
            sourceValue.forEach(function (source, index) {
                if (targetValue[index]) {
                    targetValue[index] = mergeDeep(Object.assign({}, targetValue[index]), source);
                }
                else {
                    // TODO
                    if (typeof source === 'string') {
                        targetValue[index] = source;
                    }
                    else {
                        targetValue[index] = Object.assign({}, source);
                    }
                }
            });
        }
        else if (isObject(targetValue) && isObject(sourceValue)) {
            target[key] = mergeDeep(Object.assign({}, targetValue), sourceValue);
        }
        else {
            target[key] = sourceValue;
        }
    });
    return target;
}


/***/ }),

/***/ "../nx-charts/src/lib/smart-charts/chart-types/area-stacked-100.ts":
/*!*************************************************************************!*\
  !*** ../nx-charts/src/lib/smart-charts/chart-types/area-stacked-100.ts ***!
  \*************************************************************************/
/*! exports provided: NxAreaStacked100 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NxAreaStacked100", function() { return NxAreaStacked100; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _stacked_dual_100__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stacked-dual-100 */ "../nx-charts/src/lib/smart-charts/chart-types/stacked-dual-100.ts");
/* harmony import */ var projects_nx_annotation_src_public_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! projects/nx-annotation/src/public-api */ "../nx-annotation/src/public-api.ts");



var NxAreaStacked100 = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](NxAreaStacked100, _super);
    function NxAreaStacked100() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.chartType = projects_nx_annotation_src_public_api__WEBPACK_IMPORTED_MODULE_2__["ChartType"].AreaStacked100;
        return _this;
    }
    NxAreaStacked100.prototype.getChartOptions = function (items) {
        var options = _super.prototype.getStacked100.call(this, items, 'xAxis', 'line');
        options.series.forEach(function (element) {
            element.areaStyle = {};
        });
        return options;
    };
    return NxAreaStacked100;
}(_stacked_dual_100__WEBPACK_IMPORTED_MODULE_1__["NxStackedDual100"]));



/***/ }),

/***/ "../nx-charts/src/lib/smart-charts/chart-types/area-stacked.ts":
/*!*********************************************************************!*\
  !*** ../nx-charts/src/lib/smart-charts/chart-types/area-stacked.ts ***!
  \*********************************************************************/
/*! exports provided: NxAreaStacked */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NxAreaStacked", function() { return NxAreaStacked; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _stacked_dual__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stacked-dual */ "../nx-charts/src/lib/smart-charts/chart-types/stacked-dual.ts");
/* harmony import */ var projects_nx_annotation_src_public_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! projects/nx-annotation/src/public-api */ "../nx-annotation/src/public-api.ts");



var NxAreaStacked = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](NxAreaStacked, _super);
    function NxAreaStacked() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.chartType = projects_nx_annotation_src_public_api__WEBPACK_IMPORTED_MODULE_2__["ChartType"].AreaStacked;
        return _this;
    }
    NxAreaStacked.prototype.getChartOptions = function (items) {
        var options = _super.prototype.getStacked.call(this, items, 'xAxis', 'line');
        options.series.forEach(function (element) {
            element.areaStyle = {};
        });
        return options;
    };
    return NxAreaStacked;
}(_stacked_dual__WEBPACK_IMPORTED_MODULE_1__["NxStackedDual"]));



/***/ }),

/***/ "../nx-charts/src/lib/smart-charts/chart-types/area-type.ts":
/*!******************************************************************!*\
  !*** ../nx-charts/src/lib/smart-charts/chart-types/area-type.ts ***!
  \******************************************************************/
/*! exports provided: NxAreaType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NxAreaType", function() { return NxAreaType; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _smart_chart_type__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./smart-chart-type */ "../nx-charts/src/lib/smart-charts/chart-types/smart-chart-type.ts");


var NxAreaType = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](NxAreaType, _super);
    function NxAreaType() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NxAreaType.prototype.getAreas = function (items, category) {
        var _this = this;
        var options = {
            xAxis: {},
            yAxis: {},
            series: []
        };
        // 设置维度轴值
        options[category].type = 'category';
        options[category].data = this.getDimensionData(items);
        this.measures.forEach(function (measure, index) {
            options.series.push({
                id: measure,
                name: _this.getPropertyLabel(measure),
                type: 'line',
                areaStyle: {},
                data: items.map(function (item) { return item[measure]; })
            });
        });
        options.tooltip = this.getTooltip(items);
        return options;
    };
    return NxAreaType;
}(_smart_chart_type__WEBPACK_IMPORTED_MODULE_1__["NxSmartChartType"]));



/***/ }),

/***/ "../nx-charts/src/lib/smart-charts/chart-types/area.ts":
/*!*************************************************************!*\
  !*** ../nx-charts/src/lib/smart-charts/chart-types/area.ts ***!
  \*************************************************************/
/*! exports provided: NxArea */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NxArea", function() { return NxArea; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _area_type__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./area-type */ "../nx-charts/src/lib/smart-charts/chart-types/area-type.ts");
/* harmony import */ var projects_nx_annotation_src_public_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! projects/nx-annotation/src/public-api */ "../nx-annotation/src/public-api.ts");



var NxArea = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](NxArea, _super);
    function NxArea() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.chartType = projects_nx_annotation_src_public_api__WEBPACK_IMPORTED_MODULE_2__["ChartType"].Area;
        return _this;
    }
    NxArea.prototype.getChartOptions = function (items) {
        var options = _super.prototype.getAreas.call(this, items, 'xAxis');
        return options;
    };
    return NxArea;
}(_area_type__WEBPACK_IMPORTED_MODULE_1__["NxAreaType"]));



/***/ }),

/***/ "../nx-charts/src/lib/smart-charts/chart-types/bar-column-line.ts":
/*!************************************************************************!*\
  !*** ../nx-charts/src/lib/smart-charts/chart-types/bar-column-line.ts ***!
  \************************************************************************/
/*! exports provided: NxBarColumnLine */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NxBarColumnLine", function() { return NxBarColumnLine; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _smart_chart_type__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./smart-chart-type */ "../nx-charts/src/lib/smart-charts/chart-types/smart-chart-type.ts");


var NxBarColumnLine = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](NxBarColumnLine, _super);
    function NxBarColumnLine() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NxBarColumnLine.prototype.getOptions = function (items, category, value) {
        var options = {
            xAxis: {},
            yAxis: {},
            series: []
        };
        // 设置维度轴值
        options[category].type = this.categoryType;
        options[category].data = this.getDimensionData(items);
        this.setCategoryAxisLabel(options[category], items);
        if (options[category].type !== 'time') {
            this.setCategoryAxisPointerLabel(options[category], items);
        }
        options[value].type = 'value';
        options[value].axisLabel = {
            formatter: this.getMeasureLabelFormater()
        };
        options.series = this.getSeries(items);
        options.tooltip = this.getTooltip(items);
        return options;
    };
    NxBarColumnLine.prototype.getSeries = function (items) {
        var _this = this;
        var dimension = this.getDimension();
        return this.measures.map(function (measure, index) {
            var series = {
                id: measure,
                name: _this.getPropertyLabel(measure),
                type: _this.seriesType,
            };
            if (_this.categoryType === 'time') {
                series.data = items.map(function (item) { return ({
                    value: [
                        [item[dimension].getFullYear(), item[dimension].getMonth() + 1, item[dimension].getDate()].join('/'),
                        item[measure]
                    ], data: item
                }); });
            }
            else {
                series.data = items.map(function (item) { return item[measure]; });
            }
            return series;
        });
    };
    return NxBarColumnLine;
}(_smart_chart_type__WEBPACK_IMPORTED_MODULE_1__["NxSmartChartType"]));



/***/ }),

/***/ "../nx-charts/src/lib/smart-charts/chart-types/bar-dual.ts":
/*!*****************************************************************!*\
  !*** ../nx-charts/src/lib/smart-charts/chart-types/bar-dual.ts ***!
  \*****************************************************************/
/*! exports provided: NxBarDual */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NxBarDual", function() { return NxBarDual; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var projects_nx_annotation_src_public_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! projects/nx-annotation/src/public-api */ "../nx-annotation/src/public-api.ts");
/* harmony import */ var _bar_column_line__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bar-column-line */ "../nx-charts/src/lib/smart-charts/chart-types/bar-column-line.ts");



var NxBarDual = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](NxBarDual, _super);
    function NxBarDual() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.chartType = projects_nx_annotation_src_public_api__WEBPACK_IMPORTED_MODULE_1__["ChartType"].BarDual;
        _this.seriesType = 'bar';
        return _this;
    }
    NxBarDual.prototype.getChartOptions = function (items) {
        var options = this.getOptions(items, 'yAxis', 'xAxis');
        return options;
    };
    return NxBarDual;
}(_bar_column_line__WEBPACK_IMPORTED_MODULE_2__["NxBarColumnLine"]));



/***/ }),

/***/ "../nx-charts/src/lib/smart-charts/chart-types/bar-stacked-100.ts":
/*!************************************************************************!*\
  !*** ../nx-charts/src/lib/smart-charts/chart-types/bar-stacked-100.ts ***!
  \************************************************************************/
/*! exports provided: NxBarStacked100 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NxBarStacked100", function() { return NxBarStacked100; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _stacked_dual_100__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stacked-dual-100 */ "../nx-charts/src/lib/smart-charts/chart-types/stacked-dual-100.ts");
/* harmony import */ var projects_nx_annotation_src_public_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! projects/nx-annotation/src/public-api */ "../nx-annotation/src/public-api.ts");



var NxBarStacked100 = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](NxBarStacked100, _super);
    function NxBarStacked100() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.chartType = projects_nx_annotation_src_public_api__WEBPACK_IMPORTED_MODULE_2__["ChartType"].BarStacked100;
        return _this;
    }
    NxBarStacked100.prototype.getChartOptions = function (items) {
        var options = _super.prototype.getStacked100.call(this, items, 'yAxis', 'bar');
        return options;
    };
    return NxBarStacked100;
}(_stacked_dual_100__WEBPACK_IMPORTED_MODULE_1__["NxStackedDual100"]));



/***/ }),

/***/ "../nx-charts/src/lib/smart-charts/chart-types/bar-stacked-dual-100.ts":
/*!*****************************************************************************!*\
  !*** ../nx-charts/src/lib/smart-charts/chart-types/bar-stacked-dual-100.ts ***!
  \*****************************************************************************/
/*! exports provided: NxBarStackedDual100 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NxBarStackedDual100", function() { return NxBarStackedDual100; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _stacked_dual_100__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stacked-dual-100 */ "../nx-charts/src/lib/smart-charts/chart-types/stacked-dual-100.ts");
/* harmony import */ var projects_nx_annotation_src_public_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! projects/nx-annotation/src/public-api */ "../nx-annotation/src/public-api.ts");



var NxBarStackedDual100 = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](NxBarStackedDual100, _super);
    function NxBarStackedDual100() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.chartType = projects_nx_annotation_src_public_api__WEBPACK_IMPORTED_MODULE_2__["ChartType"].BarStackedDual100;
        return _this;
    }
    NxBarStackedDual100.prototype.getChartOptions = function (items) {
        var options = _super.prototype.getStacked100.call(this, items, 'yAxis', 'bar');
        return options;
    };
    return NxBarStackedDual100;
}(_stacked_dual_100__WEBPACK_IMPORTED_MODULE_1__["NxStackedDual100"]));



/***/ }),

/***/ "../nx-charts/src/lib/smart-charts/chart-types/bar-stacked-dual.ts":
/*!*************************************************************************!*\
  !*** ../nx-charts/src/lib/smart-charts/chart-types/bar-stacked-dual.ts ***!
  \*************************************************************************/
/*! exports provided: NxBarStackedDual */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NxBarStackedDual", function() { return NxBarStackedDual; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _stacked_dual__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stacked-dual */ "../nx-charts/src/lib/smart-charts/chart-types/stacked-dual.ts");
/* harmony import */ var projects_nx_annotation_src_public_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! projects/nx-annotation/src/public-api */ "../nx-annotation/src/public-api.ts");



var NxBarStackedDual = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](NxBarStackedDual, _super);
    function NxBarStackedDual() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.chartType = projects_nx_annotation_src_public_api__WEBPACK_IMPORTED_MODULE_2__["ChartType"].BarStackedDual;
        return _this;
    }
    NxBarStackedDual.prototype.getChartOptions = function (items) {
        var options = _super.prototype.getStacked.call(this, items, 'yAxis', 'bar');
        return options;
    };
    return NxBarStackedDual;
}(_stacked_dual__WEBPACK_IMPORTED_MODULE_1__["NxStackedDual"]));



/***/ }),

/***/ "../nx-charts/src/lib/smart-charts/chart-types/bar-stacked.ts":
/*!********************************************************************!*\
  !*** ../nx-charts/src/lib/smart-charts/chart-types/bar-stacked.ts ***!
  \********************************************************************/
/*! exports provided: NxBarStacked */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NxBarStacked", function() { return NxBarStacked; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _stacked_dual__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stacked-dual */ "../nx-charts/src/lib/smart-charts/chart-types/stacked-dual.ts");
/* harmony import */ var projects_nx_annotation_src_public_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! projects/nx-annotation/src/public-api */ "../nx-annotation/src/public-api.ts");



var NxBarStacked = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](NxBarStacked, _super);
    function NxBarStacked() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.chartType = projects_nx_annotation_src_public_api__WEBPACK_IMPORTED_MODULE_2__["ChartType"].BarStacked;
        return _this;
    }
    NxBarStacked.prototype.getChartOptions = function (items) {
        var options = _super.prototype.getStacked.call(this, items, 'yAxis', 'bar');
        return options;
    };
    return NxBarStacked;
}(_stacked_dual__WEBPACK_IMPORTED_MODULE_1__["NxStackedDual"]));



/***/ }),

/***/ "../nx-charts/src/lib/smart-charts/chart-types/column-stacked-100.ts":
/*!***************************************************************************!*\
  !*** ../nx-charts/src/lib/smart-charts/chart-types/column-stacked-100.ts ***!
  \***************************************************************************/
/*! exports provided: NxColumnStacked100 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NxColumnStacked100", function() { return NxColumnStacked100; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _stacked_dual_100__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stacked-dual-100 */ "../nx-charts/src/lib/smart-charts/chart-types/stacked-dual-100.ts");
/* harmony import */ var projects_nx_annotation_src_public_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! projects/nx-annotation/src/public-api */ "../nx-annotation/src/public-api.ts");



var NxColumnStacked100 = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](NxColumnStacked100, _super);
    function NxColumnStacked100() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.chartType = projects_nx_annotation_src_public_api__WEBPACK_IMPORTED_MODULE_2__["ChartType"].ColumnStacked100;
        return _this;
    }
    NxColumnStacked100.prototype.getChartOptions = function (items) {
        var options = _super.prototype.getStacked100.call(this, items, 'xAxis', 'bar');
        return options;
    };
    return NxColumnStacked100;
}(_stacked_dual_100__WEBPACK_IMPORTED_MODULE_1__["NxStackedDual100"]));



/***/ }),

/***/ "../nx-charts/src/lib/smart-charts/chart-types/column-stacked-dual-100.ts":
/*!********************************************************************************!*\
  !*** ../nx-charts/src/lib/smart-charts/chart-types/column-stacked-dual-100.ts ***!
  \********************************************************************************/
/*! exports provided: NxColumnStackedDual100 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NxColumnStackedDual100", function() { return NxColumnStackedDual100; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _stacked_dual_100__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stacked-dual-100 */ "../nx-charts/src/lib/smart-charts/chart-types/stacked-dual-100.ts");
/* harmony import */ var projects_nx_annotation_src_public_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! projects/nx-annotation/src/public-api */ "../nx-annotation/src/public-api.ts");



var NxColumnStackedDual100 = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](NxColumnStackedDual100, _super);
    function NxColumnStackedDual100() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.chartType = projects_nx_annotation_src_public_api__WEBPACK_IMPORTED_MODULE_2__["ChartType"].ColumnStackedDual100;
        return _this;
    }
    NxColumnStackedDual100.prototype.getChartOptions = function (items) {
        var options = _super.prototype.getStacked100.call(this, items, 'xAxis', 'bar');
        return options;
    };
    return NxColumnStackedDual100;
}(_stacked_dual_100__WEBPACK_IMPORTED_MODULE_1__["NxStackedDual100"]));



/***/ }),

/***/ "../nx-charts/src/lib/smart-charts/chart-types/column-stacked-dual.ts":
/*!****************************************************************************!*\
  !*** ../nx-charts/src/lib/smart-charts/chart-types/column-stacked-dual.ts ***!
  \****************************************************************************/
/*! exports provided: NxColumnStackedDual */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NxColumnStackedDual", function() { return NxColumnStackedDual; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var projects_nx_annotation_src_public_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! projects/nx-annotation/src/public-api */ "../nx-annotation/src/public-api.ts");
/* harmony import */ var _stacked_dual__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./stacked-dual */ "../nx-charts/src/lib/smart-charts/chart-types/stacked-dual.ts");



var NxColumnStackedDual = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](NxColumnStackedDual, _super);
    function NxColumnStackedDual() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.chartType = projects_nx_annotation_src_public_api__WEBPACK_IMPORTED_MODULE_1__["ChartType"].ColumnStackedDual;
        return _this;
    }
    NxColumnStackedDual.prototype.getChartOptions = function (items) {
        var options = _super.prototype.getStacked.call(this, items, 'xAxis', 'bar');
        return options;
    };
    return NxColumnStackedDual;
}(_stacked_dual__WEBPACK_IMPORTED_MODULE_2__["NxStackedDual"]));



/***/ }),

/***/ "../nx-charts/src/lib/smart-charts/chart-types/column-stacked.ts":
/*!***********************************************************************!*\
  !*** ../nx-charts/src/lib/smart-charts/chart-types/column-stacked.ts ***!
  \***********************************************************************/
/*! exports provided: NxColumnStacked */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NxColumnStacked", function() { return NxColumnStacked; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var projects_nx_annotation_src_public_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! projects/nx-annotation/src/public-api */ "../nx-annotation/src/public-api.ts");
/* harmony import */ var _column_stacked_dual__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./column-stacked-dual */ "../nx-charts/src/lib/smart-charts/chart-types/column-stacked-dual.ts");



var NxColumnStacked = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](NxColumnStacked, _super);
    function NxColumnStacked() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.chartType = projects_nx_annotation_src_public_api__WEBPACK_IMPORTED_MODULE_1__["ChartType"].ColumnStacked;
        return _this;
    }
    return NxColumnStacked;
}(_column_stacked_dual__WEBPACK_IMPORTED_MODULE_2__["NxColumnStackedDual"]));



/***/ }),

/***/ "../nx-charts/src/lib/smart-charts/chart-types/column.ts":
/*!***************************************************************!*\
  !*** ../nx-charts/src/lib/smart-charts/chart-types/column.ts ***!
  \***************************************************************/
/*! exports provided: NxColumn */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NxColumn", function() { return NxColumn; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _bar_column_line__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bar-column-line */ "../nx-charts/src/lib/smart-charts/chart-types/bar-column-line.ts");
/* harmony import */ var projects_nx_annotation_src_public_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! projects/nx-annotation/src/public-api */ "../nx-annotation/src/public-api.ts");



var NxColumn = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](NxColumn, _super);
    function NxColumn() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.chartType = projects_nx_annotation_src_public_api__WEBPACK_IMPORTED_MODULE_2__["ChartType"].Column;
        _this.seriesType = 'bar';
        return _this;
    }
    NxColumn.prototype.getChartOptions = function (items) {
        var options = _super.prototype.getOptions.call(this, items, 'xAxis', 'yAxis');
        return options;
    };
    return NxColumn;
}(_bar_column_line__WEBPACK_IMPORTED_MODULE_1__["NxBarColumnLine"]));



/***/ }),

/***/ "../nx-charts/src/lib/smart-charts/chart-types/combination-stacked.ts":
/*!****************************************************************************!*\
  !*** ../nx-charts/src/lib/smart-charts/chart-types/combination-stacked.ts ***!
  \****************************************************************************/
/*! exports provided: NxCombinationStacked */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NxCombinationStacked", function() { return NxCombinationStacked; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _smart_chart_type__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./smart-chart-type */ "../nx-charts/src/lib/smart-charts/chart-types/smart-chart-type.ts");
/* harmony import */ var projects_nx_annotation_src_public_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! projects/nx-annotation/src/public-api */ "../nx-annotation/src/public-api.ts");



var NxCombinationStacked = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](NxCombinationStacked, _super);
    function NxCombinationStacked() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.chartType = projects_nx_annotation_src_public_api__WEBPACK_IMPORTED_MODULE_2__["ChartType"].CombinationStacked;
        _this.category = 'xAxis';
        return _this;
    }
    NxCombinationStacked.prototype.getChartOptions = function (items) {
        var _this = this;
        var options = {
            xAxis: {},
            yAxis: {},
            series: []
        };
        // 设置维度轴值
        options[this.category].type = 'category';
        options[this.category].data = this.getDimensionData(items);
        this.measures.forEach(function (measure, index) {
            var role = _this.getMeasureRole(measure) || 'Axis';
            var series = {
                id: measure,
                name: _this.getPropertyLabel(measure),
                data: items.map(function (item) { return item[measure]; })
            };
            if (projects_nx_annotation_src_public_api__WEBPACK_IMPORTED_MODULE_2__["ChartMeasureRoleType"].Axis1 === role) {
                series.type = 'line';
            }
            else {
                series.type = 'bar';
                series.stack = role;
            }
            options.series.push(series);
        });
        options.tooltip = this.getTooltip(items);
        return options;
    };
    return NxCombinationStacked;
}(_smart_chart_type__WEBPACK_IMPORTED_MODULE_1__["NxSmartChartType"]));



/***/ }),

/***/ "../nx-charts/src/lib/smart-charts/chart-types/combination.ts":
/*!********************************************************************!*\
  !*** ../nx-charts/src/lib/smart-charts/chart-types/combination.ts ***!
  \********************************************************************/
/*! exports provided: NxCombination */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NxCombination", function() { return NxCombination; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _smart_chart_type__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./smart-chart-type */ "../nx-charts/src/lib/smart-charts/chart-types/smart-chart-type.ts");
/* harmony import */ var projects_nx_annotation_src_public_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! projects/nx-annotation/src/public-api */ "../nx-annotation/src/public-api.ts");



var NxCombination = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](NxCombination, _super);
    function NxCombination() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.chartType = projects_nx_annotation_src_public_api__WEBPACK_IMPORTED_MODULE_2__["ChartType"].Combination;
        return _this;
    }
    NxCombination.prototype.getChartOptions = function (items) {
        var _this = this;
        var options = {
            xAxis: {},
            yAxis: {},
            series: []
        };
        // 设置维度轴值
        options.xAxis.type = 'category';
        options.xAxis.data = this.getDimensionData(items);
        this.measures.forEach(function (measure, index) {
            var role = _this.getMeasureRole(measure);
            options.series.push({
                id: measure,
                name: _this.getPropertyLabel(measure),
                type: projects_nx_annotation_src_public_api__WEBPACK_IMPORTED_MODULE_2__["ChartMeasureRoleType"].Axis1 === role ? 'line' : 'bar',
                data: items.map(function (item) { return item[measure]; })
            });
        });
        options.tooltip = this.getTooltip(items);
        return options;
    };
    return NxCombination;
}(_smart_chart_type__WEBPACK_IMPORTED_MODULE_1__["NxSmartChartType"]));



/***/ }),

/***/ "../nx-charts/src/lib/smart-charts/chart-types/donut.ts":
/*!**************************************************************!*\
  !*** ../nx-charts/src/lib/smart-charts/chart-types/donut.ts ***!
  \**************************************************************/
/*! exports provided: NxDonut */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NxDonut", function() { return NxDonut; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var projects_nx_annotation_src_public_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! projects/nx-annotation/src/public-api */ "../nx-annotation/src/public-api.ts");
/* harmony import */ var _pie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pie */ "../nx-charts/src/lib/smart-charts/chart-types/pie.ts");



var NxDonut = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](NxDonut, _super);
    function NxDonut() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.chartType = projects_nx_annotation_src_public_api__WEBPACK_IMPORTED_MODULE_1__["ChartType"].Donut;
        return _this;
    }
    NxDonut.prototype.getChartOptions = function (items) {
        var options = _super.prototype.getChartOptions.call(this, items);
        return options;
    };
    return NxDonut;
}(_pie__WEBPACK_IMPORTED_MODULE_2__["NxPie"]));



/***/ }),

/***/ "../nx-charts/src/lib/smart-charts/chart-types/heat-map.ts":
/*!*****************************************************************!*\
  !*** ../nx-charts/src/lib/smart-charts/chart-types/heat-map.ts ***!
  \*****************************************************************/
/*! exports provided: NxHeatMap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NxHeatMap", function() { return NxHeatMap; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _smart_chart_type__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./smart-chart-type */ "../nx-charts/src/lib/smart-charts/chart-types/smart-chart-type.ts");
/* harmony import */ var projects_nx_annotation_src_public_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! projects/nx-annotation/src/public-api */ "../nx-annotation/src/public-api.ts");



var NxHeatMap = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](NxHeatMap, _super);
    function NxHeatMap() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.chartType = projects_nx_annotation_src_public_api__WEBPACK_IMPORTED_MODULE_2__["ChartType"].HeatMap;
        return _this;
    }
    NxHeatMap.prototype.getChartOptions = function (items) {
        var options = {
            xAxis: {
                type: 'category',
            },
            yAxis: {
                type: 'category',
            },
            series: []
        };
        var dimension0 = this.getDimension(0);
        var dimension0Role = this.getDimensionRole(dimension0) || projects_nx_annotation_src_public_api__WEBPACK_IMPORTED_MODULE_2__["ChartDimensionRoleType"].Category;
        var dX, dY;
        if (projects_nx_annotation_src_public_api__WEBPACK_IMPORTED_MODULE_2__["ChartDimensionRoleType"].Category === dimension0Role) {
            options.xAxis.name = this.getPropertyLabel(dimension0) || dimension0;
            dX = dimension0;
        }
        if (projects_nx_annotation_src_public_api__WEBPACK_IMPORTED_MODULE_2__["ChartDimensionRoleType"].Category2 === dimension0Role) {
            options.yAxis.name = this.getPropertyLabel(dimension0) || dimension0;
            dY = dimension0;
        }
        var dimension1 = this.getDimension(1);
        var dimension1Role = this.getDimensionRole(dimension1) || projects_nx_annotation_src_public_api__WEBPACK_IMPORTED_MODULE_2__["ChartDimensionRoleType"].Category2;
        if (projects_nx_annotation_src_public_api__WEBPACK_IMPORTED_MODULE_2__["ChartDimensionRoleType"].Category === dimension1Role) {
            options.xAxis.name = this.getPropertyLabel(dimension1) || dimension1;
            dX = dimension1;
        }
        if (projects_nx_annotation_src_public_api__WEBPACK_IMPORTED_MODULE_2__["ChartDimensionRoleType"].Category2 === dimension1Role) {
            options.yAxis.name = this.getPropertyLabel(dimension1) || dimension1;
            dY = dimension1;
        }
        // select distinct values of dimension x
        var dataX = items.map(function (item) { return item[dX]; }).filter(function (v, i, a) { return a.indexOf(v) === i; });
        // select distinct values of dimension y
        var dataY = items.map(function (item) { return item[dY]; }).filter(function (v, i, a) { return a.indexOf(v) === i; });
        options.xAxis.data = dataX;
        options.yAxis.data = dataY;
        var measure = this.getMeasure();
        var maxSize = 0;
        var series = {
            name: this.getPropertyLabel(measure) || measure,
            type: 'heatmap',
        };
        series.data = items.map(function (item) {
            maxSize = maxSize > item[measure] ? maxSize : item[measure];
            return [
                dataX.indexOf(item[dX]),
                dataY.indexOf(item[dY]),
                item[measure],
                item
            ];
        });
        options.series.push(series);
        // Heat Map visualMap
        options.visualMap = {
            min: 0,
            max: maxSize,
            calculable: true,
            orient: 'horizontal',
            left: 'center',
            bottom: '15%',
            dimension: 2,
            inRange: {
                color: ['#f6efa6', '#bf444c', '#d88273']
            }
        };
        options.tooltip = this.getTooltip(items);
        return options;
    };
    return NxHeatMap;
}(_smart_chart_type__WEBPACK_IMPORTED_MODULE_1__["NxSmartChartType"]));



/***/ }),

/***/ "../nx-charts/src/lib/smart-charts/chart-types/horizontal-area-stacked-100.ts":
/*!************************************************************************************!*\
  !*** ../nx-charts/src/lib/smart-charts/chart-types/horizontal-area-stacked-100.ts ***!
  \************************************************************************************/
/*! exports provided: NxHorizontalAreaStacked100 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NxHorizontalAreaStacked100", function() { return NxHorizontalAreaStacked100; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _stacked_dual_100__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stacked-dual-100 */ "../nx-charts/src/lib/smart-charts/chart-types/stacked-dual-100.ts");
/* harmony import */ var projects_nx_annotation_src_public_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! projects/nx-annotation/src/public-api */ "../nx-annotation/src/public-api.ts");



var NxHorizontalAreaStacked100 = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](NxHorizontalAreaStacked100, _super);
    function NxHorizontalAreaStacked100() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.chartType = projects_nx_annotation_src_public_api__WEBPACK_IMPORTED_MODULE_2__["ChartType"].HorizontalAreaStacked100;
        return _this;
    }
    NxHorizontalAreaStacked100.prototype.getChartOptions = function (items) {
        var options = _super.prototype.getStacked100.call(this, items, 'yAxis', 'line');
        options.series.forEach(function (element) {
            element.areaStyle = {};
        });
        return options;
    };
    return NxHorizontalAreaStacked100;
}(_stacked_dual_100__WEBPACK_IMPORTED_MODULE_1__["NxStackedDual100"]));



/***/ }),

/***/ "../nx-charts/src/lib/smart-charts/chart-types/horizontal-area-stacked.ts":
/*!********************************************************************************!*\
  !*** ../nx-charts/src/lib/smart-charts/chart-types/horizontal-area-stacked.ts ***!
  \********************************************************************************/
/*! exports provided: NxHorizontalAreaStacked */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NxHorizontalAreaStacked", function() { return NxHorizontalAreaStacked; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _stacked_dual__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stacked-dual */ "../nx-charts/src/lib/smart-charts/chart-types/stacked-dual.ts");
/* harmony import */ var projects_nx_annotation_src_public_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! projects/nx-annotation/src/public-api */ "../nx-annotation/src/public-api.ts");



var NxHorizontalAreaStacked = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](NxHorizontalAreaStacked, _super);
    function NxHorizontalAreaStacked() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.chartType = projects_nx_annotation_src_public_api__WEBPACK_IMPORTED_MODULE_2__["ChartType"].HorizontalAreaStacked;
        return _this;
    }
    NxHorizontalAreaStacked.prototype.getChartOptions = function (items) {
        var options = _super.prototype.getStacked.call(this, items, 'yAxis', 'line');
        options.series.forEach(function (element) {
            element.areaStyle = {};
        });
        return options;
    };
    return NxHorizontalAreaStacked;
}(_stacked_dual__WEBPACK_IMPORTED_MODULE_1__["NxStackedDual"]));



/***/ }),

/***/ "../nx-charts/src/lib/smart-charts/chart-types/horizontal-area.ts":
/*!************************************************************************!*\
  !*** ../nx-charts/src/lib/smart-charts/chart-types/horizontal-area.ts ***!
  \************************************************************************/
/*! exports provided: NxHorizontalArea */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NxHorizontalArea", function() { return NxHorizontalArea; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _area_type__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./area-type */ "../nx-charts/src/lib/smart-charts/chart-types/area-type.ts");
/* harmony import */ var projects_nx_annotation_src_public_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! projects/nx-annotation/src/public-api */ "../nx-annotation/src/public-api.ts");



var NxHorizontalArea = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](NxHorizontalArea, _super);
    function NxHorizontalArea() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.chartType = projects_nx_annotation_src_public_api__WEBPACK_IMPORTED_MODULE_2__["ChartType"].HorizontalArea;
        return _this;
    }
    NxHorizontalArea.prototype.getChartOptions = function (items) {
        var options = _super.prototype.getAreas.call(this, items, 'yAxis');
        return options;
    };
    return NxHorizontalArea;
}(_area_type__WEBPACK_IMPORTED_MODULE_1__["NxAreaType"]));



/***/ }),

/***/ "../nx-charts/src/lib/smart-charts/chart-types/horizontal-combination-stacked.ts":
/*!***************************************************************************************!*\
  !*** ../nx-charts/src/lib/smart-charts/chart-types/horizontal-combination-stacked.ts ***!
  \***************************************************************************************/
/*! exports provided: NxHorizontalCombinationStacked */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NxHorizontalCombinationStacked", function() { return NxHorizontalCombinationStacked; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _combination_stacked__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./combination-stacked */ "../nx-charts/src/lib/smart-charts/chart-types/combination-stacked.ts");
/* harmony import */ var projects_nx_annotation_src_public_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! projects/nx-annotation/src/public-api */ "../nx-annotation/src/public-api.ts");



var NxHorizontalCombinationStacked = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](NxHorizontalCombinationStacked, _super);
    function NxHorizontalCombinationStacked() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.chartType = projects_nx_annotation_src_public_api__WEBPACK_IMPORTED_MODULE_2__["ChartType"].HorizontalCombinationStacked;
        return _this;
    }
    NxHorizontalCombinationStacked.prototype.getChartOptions = function (items) {
        this.category = 'yAxis';
        var options = _super.prototype.getChartOptions.call(this, items);
        return options;
    };
    return NxHorizontalCombinationStacked;
}(_combination_stacked__WEBPACK_IMPORTED_MODULE_1__["NxCombinationStacked"]));



/***/ }),

/***/ "../nx-charts/src/lib/smart-charts/chart-types/horizontal-waterfall.ts":
/*!*****************************************************************************!*\
  !*** ../nx-charts/src/lib/smart-charts/chart-types/horizontal-waterfall.ts ***!
  \*****************************************************************************/
/*! exports provided: NxHorizontalWaterfall */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NxHorizontalWaterfall", function() { return NxHorizontalWaterfall; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var projects_nx_annotation_src_public_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! projects/nx-annotation/src/public-api */ "../nx-annotation/src/public-api.ts");
/* harmony import */ var _waterfall__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./waterfall */ "../nx-charts/src/lib/smart-charts/chart-types/waterfall.ts");



var NxHorizontalWaterfall = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](NxHorizontalWaterfall, _super);
    function NxHorizontalWaterfall() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.chartType = projects_nx_annotation_src_public_api__WEBPACK_IMPORTED_MODULE_1__["ChartType"].HorizontalWaterfall;
        return _this;
    }
    return NxHorizontalWaterfall;
}(_waterfall__WEBPACK_IMPORTED_MODULE_2__["NxWaterfall"]));



/***/ }),

/***/ "../nx-charts/src/lib/smart-charts/chart-types/index.ts":
/*!**************************************************************!*\
  !*** ../nx-charts/src/lib/smart-charts/chart-types/index.ts ***!
  \**************************************************************/
/*! exports provided: NxColumnStackedDual, NxColumnStacked100, NxColumnStackedDual100, NxBarStacked, NxBarDual, NxBarStackedDual, NxBarStacked100, NxBarStackedDual100, NxAreaStacked, NxAreaStacked100, NxHorizontalArea, NxArea, NxHorizontalAreaStacked, NxHorizontalAreaStacked100, NxLineDual, NxLine, NxCombination, NxCombinationStacked, NxColumn, NxColumnStacked, NxHorizontalCombinationStacked, NxPie, NxDonut, NxScatter, NxRadar, NxHeatMap, NxTreeMap, NxWaterfall, NxHorizontalWaterfall, NxTimeline, NxSmartChartType, abbreviateNumber */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _column_stacked_dual__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./column-stacked-dual */ "../nx-charts/src/lib/smart-charts/chart-types/column-stacked-dual.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NxColumnStackedDual", function() { return _column_stacked_dual__WEBPACK_IMPORTED_MODULE_0__["NxColumnStackedDual"]; });

/* harmony import */ var _column_stacked_100__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./column-stacked-100 */ "../nx-charts/src/lib/smart-charts/chart-types/column-stacked-100.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NxColumnStacked100", function() { return _column_stacked_100__WEBPACK_IMPORTED_MODULE_1__["NxColumnStacked100"]; });

/* harmony import */ var _column_stacked_dual_100__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./column-stacked-dual-100 */ "../nx-charts/src/lib/smart-charts/chart-types/column-stacked-dual-100.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NxColumnStackedDual100", function() { return _column_stacked_dual_100__WEBPACK_IMPORTED_MODULE_2__["NxColumnStackedDual100"]; });

/* harmony import */ var _bar_stacked__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./bar-stacked */ "../nx-charts/src/lib/smart-charts/chart-types/bar-stacked.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NxBarStacked", function() { return _bar_stacked__WEBPACK_IMPORTED_MODULE_3__["NxBarStacked"]; });

/* harmony import */ var _bar_dual__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./bar-dual */ "../nx-charts/src/lib/smart-charts/chart-types/bar-dual.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NxBarDual", function() { return _bar_dual__WEBPACK_IMPORTED_MODULE_4__["NxBarDual"]; });

/* harmony import */ var _bar_stacked_dual__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./bar-stacked-dual */ "../nx-charts/src/lib/smart-charts/chart-types/bar-stacked-dual.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NxBarStackedDual", function() { return _bar_stacked_dual__WEBPACK_IMPORTED_MODULE_5__["NxBarStackedDual"]; });

/* harmony import */ var _bar_stacked_100__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./bar-stacked-100 */ "../nx-charts/src/lib/smart-charts/chart-types/bar-stacked-100.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NxBarStacked100", function() { return _bar_stacked_100__WEBPACK_IMPORTED_MODULE_6__["NxBarStacked100"]; });

/* harmony import */ var _bar_stacked_dual_100__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./bar-stacked-dual-100 */ "../nx-charts/src/lib/smart-charts/chart-types/bar-stacked-dual-100.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NxBarStackedDual100", function() { return _bar_stacked_dual_100__WEBPACK_IMPORTED_MODULE_7__["NxBarStackedDual100"]; });

/* harmony import */ var _area_stacked__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./area-stacked */ "../nx-charts/src/lib/smart-charts/chart-types/area-stacked.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NxAreaStacked", function() { return _area_stacked__WEBPACK_IMPORTED_MODULE_8__["NxAreaStacked"]; });

/* harmony import */ var _area_stacked_100__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./area-stacked-100 */ "../nx-charts/src/lib/smart-charts/chart-types/area-stacked-100.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NxAreaStacked100", function() { return _area_stacked_100__WEBPACK_IMPORTED_MODULE_9__["NxAreaStacked100"]; });

/* harmony import */ var _horizontal_area__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./horizontal-area */ "../nx-charts/src/lib/smart-charts/chart-types/horizontal-area.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NxHorizontalArea", function() { return _horizontal_area__WEBPACK_IMPORTED_MODULE_10__["NxHorizontalArea"]; });

/* harmony import */ var _area__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./area */ "../nx-charts/src/lib/smart-charts/chart-types/area.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NxArea", function() { return _area__WEBPACK_IMPORTED_MODULE_11__["NxArea"]; });

/* harmony import */ var _horizontal_area_stacked__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./horizontal-area-stacked */ "../nx-charts/src/lib/smart-charts/chart-types/horizontal-area-stacked.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NxHorizontalAreaStacked", function() { return _horizontal_area_stacked__WEBPACK_IMPORTED_MODULE_12__["NxHorizontalAreaStacked"]; });

/* harmony import */ var _horizontal_area_stacked_100__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./horizontal-area-stacked-100 */ "../nx-charts/src/lib/smart-charts/chart-types/horizontal-area-stacked-100.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NxHorizontalAreaStacked100", function() { return _horizontal_area_stacked_100__WEBPACK_IMPORTED_MODULE_13__["NxHorizontalAreaStacked100"]; });

/* harmony import */ var _line_dual__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./line-dual */ "../nx-charts/src/lib/smart-charts/chart-types/line-dual.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NxLineDual", function() { return _line_dual__WEBPACK_IMPORTED_MODULE_14__["NxLineDual"]; });

/* harmony import */ var _line__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./line */ "../nx-charts/src/lib/smart-charts/chart-types/line.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NxLine", function() { return _line__WEBPACK_IMPORTED_MODULE_15__["NxLine"]; });

/* harmony import */ var _combination__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./combination */ "../nx-charts/src/lib/smart-charts/chart-types/combination.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NxCombination", function() { return _combination__WEBPACK_IMPORTED_MODULE_16__["NxCombination"]; });

/* harmony import */ var _combination_stacked__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./combination-stacked */ "../nx-charts/src/lib/smart-charts/chart-types/combination-stacked.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NxCombinationStacked", function() { return _combination_stacked__WEBPACK_IMPORTED_MODULE_17__["NxCombinationStacked"]; });

/* harmony import */ var _column__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./column */ "../nx-charts/src/lib/smart-charts/chart-types/column.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NxColumn", function() { return _column__WEBPACK_IMPORTED_MODULE_18__["NxColumn"]; });

/* harmony import */ var _column_stacked__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./column-stacked */ "../nx-charts/src/lib/smart-charts/chart-types/column-stacked.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NxColumnStacked", function() { return _column_stacked__WEBPACK_IMPORTED_MODULE_19__["NxColumnStacked"]; });

/* harmony import */ var _horizontal_combination_stacked__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./horizontal-combination-stacked */ "../nx-charts/src/lib/smart-charts/chart-types/horizontal-combination-stacked.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NxHorizontalCombinationStacked", function() { return _horizontal_combination_stacked__WEBPACK_IMPORTED_MODULE_20__["NxHorizontalCombinationStacked"]; });

/* harmony import */ var _pie__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./pie */ "../nx-charts/src/lib/smart-charts/chart-types/pie.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NxPie", function() { return _pie__WEBPACK_IMPORTED_MODULE_21__["NxPie"]; });

/* harmony import */ var _donut__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./donut */ "../nx-charts/src/lib/smart-charts/chart-types/donut.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NxDonut", function() { return _donut__WEBPACK_IMPORTED_MODULE_22__["NxDonut"]; });

/* harmony import */ var _scatter__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./scatter */ "../nx-charts/src/lib/smart-charts/chart-types/scatter.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NxScatter", function() { return _scatter__WEBPACK_IMPORTED_MODULE_23__["NxScatter"]; });

/* harmony import */ var _radar__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./radar */ "../nx-charts/src/lib/smart-charts/chart-types/radar.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NxRadar", function() { return _radar__WEBPACK_IMPORTED_MODULE_24__["NxRadar"]; });

/* harmony import */ var _heat_map__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./heat-map */ "../nx-charts/src/lib/smart-charts/chart-types/heat-map.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NxHeatMap", function() { return _heat_map__WEBPACK_IMPORTED_MODULE_25__["NxHeatMap"]; });

/* harmony import */ var _tree_map__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./tree-map */ "../nx-charts/src/lib/smart-charts/chart-types/tree-map.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NxTreeMap", function() { return _tree_map__WEBPACK_IMPORTED_MODULE_26__["NxTreeMap"]; });

/* harmony import */ var _waterfall__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./waterfall */ "../nx-charts/src/lib/smart-charts/chart-types/waterfall.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NxWaterfall", function() { return _waterfall__WEBPACK_IMPORTED_MODULE_27__["NxWaterfall"]; });

/* harmony import */ var _horizontal_waterfall__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./horizontal-waterfall */ "../nx-charts/src/lib/smart-charts/chart-types/horizontal-waterfall.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NxHorizontalWaterfall", function() { return _horizontal_waterfall__WEBPACK_IMPORTED_MODULE_28__["NxHorizontalWaterfall"]; });

/* harmony import */ var _timeline__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./timeline */ "../nx-charts/src/lib/smart-charts/chart-types/timeline.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NxTimeline", function() { return _timeline__WEBPACK_IMPORTED_MODULE_29__["NxTimeline"]; });

/* harmony import */ var _smart_chart_type__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./smart-chart-type */ "../nx-charts/src/lib/smart-charts/chart-types/smart-chart-type.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NxSmartChartType", function() { return _smart_chart_type__WEBPACK_IMPORTED_MODULE_30__["NxSmartChartType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "abbreviateNumber", function() { return _smart_chart_type__WEBPACK_IMPORTED_MODULE_30__["abbreviateNumber"]; });


































/***/ }),

/***/ "../nx-charts/src/lib/smart-charts/chart-types/line-dual.ts":
/*!******************************************************************!*\
  !*** ../nx-charts/src/lib/smart-charts/chart-types/line-dual.ts ***!
  \******************************************************************/
/*! exports provided: NxLineDual */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NxLineDual", function() { return NxLineDual; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _line__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./line */ "../nx-charts/src/lib/smart-charts/chart-types/line.ts");
/* harmony import */ var projects_nx_annotation_src_public_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! projects/nx-annotation/src/public-api */ "../nx-annotation/src/public-api.ts");



var NxLineDual = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](NxLineDual, _super);
    function NxLineDual() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.chartType = projects_nx_annotation_src_public_api__WEBPACK_IMPORTED_MODULE_2__["ChartType"].LineDual;
        return _this;
    }
    NxLineDual.prototype.getChartOptions = function (items) {
        var options = _super.prototype.getChartOptions.call(this, items);
        return options;
    };
    return NxLineDual;
}(_line__WEBPACK_IMPORTED_MODULE_1__["NxLine"]));



/***/ }),

/***/ "../nx-charts/src/lib/smart-charts/chart-types/line.ts":
/*!*************************************************************!*\
  !*** ../nx-charts/src/lib/smart-charts/chart-types/line.ts ***!
  \*************************************************************/
/*! exports provided: NxLine */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NxLine", function() { return NxLine; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _bar_column_line__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bar-column-line */ "../nx-charts/src/lib/smart-charts/chart-types/bar-column-line.ts");
/* harmony import */ var projects_nx_annotation_src_public_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! projects/nx-annotation/src/public-api */ "../nx-annotation/src/public-api.ts");



var NxLine = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](NxLine, _super);
    function NxLine() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.chartType = projects_nx_annotation_src_public_api__WEBPACK_IMPORTED_MODULE_2__["ChartType"].Line;
        _this.seriesType = 'line';
        return _this;
    }
    NxLine.prototype.getChartOptions = function (items) {
        var options = _super.prototype.getOptions.call(this, items, 'xAxis', 'yAxis');
        return options;
    };
    return NxLine;
}(_bar_column_line__WEBPACK_IMPORTED_MODULE_1__["NxBarColumnLine"]));



/***/ }),

/***/ "../nx-charts/src/lib/smart-charts/chart-types/pie.ts":
/*!************************************************************!*\
  !*** ../nx-charts/src/lib/smart-charts/chart-types/pie.ts ***!
  \************************************************************/
/*! exports provided: NxPie */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NxPie", function() { return NxPie; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _smart_chart_type__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./smart-chart-type */ "../nx-charts/src/lib/smart-charts/chart-types/smart-chart-type.ts");
/* harmony import */ var projects_nx_annotation_src_public_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! projects/nx-annotation/src/public-api */ "../nx-annotation/src/public-api.ts");



var NxPie = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](NxPie, _super);
    function NxPie() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.chartType = projects_nx_annotation_src_public_api__WEBPACK_IMPORTED_MODULE_2__["ChartType"].Pie;
        return _this;
    }
    NxPie.prototype.getChartOptions = function (items) {
        var options = {
            tooltip: null,
            series: []
        };
        var series = {
            type: "pie",
            label: {}
        };
        if (this.chartType === projects_nx_annotation_src_public_api__WEBPACK_IMPORTED_MODULE_2__["ChartType"].Donut) {
            series.radius = ['30%', '60%'];
        }
        series.center = ['50%', '50%'];
        // Dimension Property
        var dimProperty = this.entityType.getProperty(this.getDimension());
        // Measures
        var measure = this.getMeasure();
        // let property = this.entityType.getProperty(measure);
        series.name = this.getPropertyLabel(measure);
        // 如果 dimension 有描述字段, 则设置 tooltip, legend 显示 label 
        if (dimProperty.SAPText) {
            series.label.formatter = function (params) { return items.find(function (item) { return item[dimProperty.Name] === params.name; })[dimProperty.SAPText.Name]; };
        }
        series.data = items.map(function (item) { return ({
            name: item[dimProperty.Name],
            value: [item[measure], item]
        }); });
        options.series.push(series);
        options.tooltip = this.getTooltip(items);
        options.legend = this.getLegend(items);
        return options;
    };
    return NxPie;
}(_smart_chart_type__WEBPACK_IMPORTED_MODULE_1__["NxSmartChartType"]));



/***/ }),

/***/ "../nx-charts/src/lib/smart-charts/chart-types/radar.ts":
/*!**************************************************************!*\
  !*** ../nx-charts/src/lib/smart-charts/chart-types/radar.ts ***!
  \**************************************************************/
/*! exports provided: NxRadar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NxRadar", function() { return NxRadar; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _smart_chart_type__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./smart-chart-type */ "../nx-charts/src/lib/smart-charts/chart-types/smart-chart-type.ts");
/* harmony import */ var projects_nx_annotation_src_public_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! projects/nx-annotation/src/public-api */ "../nx-annotation/src/public-api.ts");



var NxRadar = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](NxRadar, _super);
    function NxRadar() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.chartType = projects_nx_annotation_src_public_api__WEBPACK_IMPORTED_MODULE_2__["ChartType"].Radar;
        return _this;
    }
    NxRadar.prototype.getChartOptions = function (items) {
        var _this = this;
        var options = {
            radar: {
                // radius: '60%',
                splitNumber: 8,
            },
            series: []
        };
        options.radar.indicator = this.measures.map(function (measure) {
            var property = _this.getPropertyLabel(measure);
            return {
                name: property || measure
            };
        });
        var series = {
            name: 'Radar',
            type: 'radar',
            symbolSize: 0,
            data: []
        };
        series.data = items.map(function (item) { return ({
            name: _this.getDimension(),
            value: _this.measures.map(function (measure) { return item[measure]; })
        }); });
        options.series.push(series);
        return options;
    };
    return NxRadar;
}(_smart_chart_type__WEBPACK_IMPORTED_MODULE_1__["NxSmartChartType"]));



/***/ }),

/***/ "../nx-charts/src/lib/smart-charts/chart-types/scatter.ts":
/*!****************************************************************!*\
  !*** ../nx-charts/src/lib/smart-charts/chart-types/scatter.ts ***!
  \****************************************************************/
/*! exports provided: NxScatter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NxScatter", function() { return NxScatter; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var projects_nx_annotation_src_public_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! projects/nx-annotation/src/public-api */ "../nx-annotation/src/public-api.ts");
/* harmony import */ var _bar_column_line__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bar-column-line */ "../nx-charts/src/lib/smart-charts/chart-types/bar-column-line.ts");



var NxScatter = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](NxScatter, _super);
    function NxScatter() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.chartType = projects_nx_annotation_src_public_api__WEBPACK_IMPORTED_MODULE_1__["ChartType"].Scatter;
        _this.seriesType = 'scatter';
        return _this;
    }
    NxScatter.prototype.getChartOptions = function (items) {
        var options = _super.prototype.getOptions.call(this, items, 'xAxis', 'yAxis');
        return options;
    };
    return NxScatter;
}(_bar_column_line__WEBPACK_IMPORTED_MODULE_2__["NxBarColumnLine"]));



/***/ }),

/***/ "../nx-charts/src/lib/smart-charts/chart-types/smart-chart-type.ts":
/*!*************************************************************************!*\
  !*** ../nx-charts/src/lib/smart-charts/chart-types/smart-chart-type.ts ***!
  \*************************************************************************/
/*! exports provided: NxSmartChartType, abbreviateNumber */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NxSmartChartType", function() { return NxSmartChartType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "abbreviateNumber", function() { return abbreviateNumber; });
/* harmony import */ var projects_nx_annotation_src_public_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! projects/nx-annotation/src/public-api */ "../nx-annotation/src/public-api.ts");

var NxSmartChartType = /** @class */ (function () {
    function NxSmartChartType(entityType, chartAnnotation) {
        this.entityType = entityType;
        this.chartAnnotation = chartAnnotation;
        this.legendVisible = true;
        this.dimensions = chartAnnotation.getDimensions();
        this.measures = chartAnnotation.getMeasures();
        this.categoryType = projects_nx_annotation_src_public_api__WEBPACK_IMPORTED_MODULE_0__["ChartDimensionRoleType"].Series === this.getDimensionRole() ? 'time' : 'category';
    }
    NxSmartChartType.prototype.getDimensionData = function (items) {
        var dimension = this.getDimension();
        var dimensionType = this.getDimensionRole(dimension);
        // 设置维度轴值
        // if (dimensionType === ChartDimensionRoleType.Series) {
        //     return items.map(item => [item[dimension].getFullYear(), item[dimension].getMonth() + 1, item[dimension].getDate()].join('/'))
        // }
        return items.map(function (item) { return item[dimension]; });
    };
    NxSmartChartType.prototype.getSeries = function (items) { };
    NxSmartChartType.prototype.getDimension = function (i) {
        if (i === void 0) { i = 0; }
        return this.dimensions[i];
    };
    NxSmartChartType.prototype.getDimensionRole = function (name) {
        name = name || this.getDimension();
        var dimensionAttributes = this.chartAnnotation.chartDefinition.DimensionAttributes;
        if (dimensionAttributes) {
            var dimensionAttribute = dimensionAttributes.find(function (attr) { return attr.Dimension === name; });
            return dimensionAttribute ? dimensionAttribute.Role : projects_nx_annotation_src_public_api__WEBPACK_IMPORTED_MODULE_0__["ChartDimensionRoleType"].Category;
        }
        // 默认 Category
        return projects_nx_annotation_src_public_api__WEBPACK_IMPORTED_MODULE_0__["ChartDimensionRoleType"].Category;
    };
    NxSmartChartType.prototype.getMeasure = function (i) {
        if (i === void 0) { i = 0; }
        return this.measures[i];
    };
    NxSmartChartType.prototype.getMeasureRole = function (name) {
        if (!this.chartAnnotation.chartDefinition.MeasureAttributes) {
            console.error("Should provide MeasureAttributes for %s", this.chartAnnotation.qualifier);
            return;
        }
        var measureAttribute = this.chartAnnotation.chartDefinition.MeasureAttributes.find(function (attr) { return attr.Measure === name; });
        if (measureAttribute) {
            return measureAttribute.Role;
        }
        return '';
    };
    NxSmartChartType.prototype.getPropertyLabel = function (name) {
        return this.entityType.getProperty(name).SAPLabel;
    };
    NxSmartChartType.prototype.getProperty = function (name) {
        return this.entityType.getProperty(name);
    };
    NxSmartChartType.prototype.getTooltip = function (items, unit) {
        if (unit === void 0) { unit = ''; }
        var tooltip = {};
        // Dimension Property
        var dimProperty = this.entityType.getProperty(this.getDimension());
        tooltip.formatter = function (params) {
            var texts = [];
            // 如果 dimension 有描述字段, 则设置 tooltip, legend 显示 label
            if (dimProperty.SAPText) {
                if (Array.isArray(params)) {
                }
                else {
                    if (items[params.dataIndex]) {
                        texts.push(items[params.dataIndex][dimProperty.SAPText.Name] +
                            '(' + items[params.dataIndex][dimProperty.Name] + ')');
                    }
                    else {
                        texts.push(params.name);
                    }
                }
            }
            else {
                if (Array.isArray(params)) {
                    if (params[0].axisType === "xAxis.time") {
                        texts.push(params[0].axisValueLabel);
                    }
                    else {
                        params[0].seriesName && texts.push(params[0].seriesName);
                    }
                }
                else {
                    texts.push(items[params.dataIndex][dimProperty.Name]);
                }
            }
            if (Array.isArray(params)) {
                texts.push(params.filter(function (param) { return param.value !== '-' && param.seriesName !== NxSmartChartType.AUXILIARY_SERIES_NAME; })
                    .map(function (param) {
                    if (param.axisType === "xAxis.time") {
                        return param.seriesName + ': ' + abbreviateNumber(param.value[1]);
                    }
                    else if (param.axisType === "xAxis.category") {
                        return param.axisValueLabel + ': ' + abbreviateNumber(param.value);
                    }
                    else {
                        return param.seriesName + ': ' + abbreviateNumber(param.value);
                    }
                }).join('<br>'));
            }
            else {
                texts.push(params.seriesName + ": " + (Array.isArray(params.value) ? (params.componentType === 'series' ? abbreviateNumber(params.value[1]) : abbreviateNumber(params.value[0])) : abbreviateNumber(params.value)) + unit);
                if (params.percent) {
                    texts.push(params.percent + '%');
                }
            }
            return texts.join('<br>');
        };
        return tooltip;
    };
    NxSmartChartType.prototype.setCategoryAxisLabel = function (category, items) {
        // 暂时只支持一个 dimension
        var property = this.getProperty(this.getDimension());
        category.axisLabel = category.axisLabel || {};
        category.axisLabel.formatter =
            function (value, index) {
                if (!items[index]) {
                    return value;
                }
                if (property.SAPText) {
                    return items[index][(property.SAPText && property.SAPText.Name)] + '(' + items[index][property.Name] + ')';
                }
                else {
                    return items[index][property.Name];
                }
            };
        if (category.type === 'time') {
            category.axisLabel.formatter =
                function (value, index) {
                    var date = new Date(value);
                    return [date.getFullYear(), date.getMonth() + 1, date.getDate()].join('/');
                };
        }
    };
    NxSmartChartType.prototype.getMeasureLabelFormater = function () {
        return abbreviateNumber;
    };
    NxSmartChartType.prototype.getLegend = function (items) {
        var _this = this;
        var legend = {
            show: this.legendVisible,
            data: items.map(function (item) { return item[_this.getDimension()]; })
        };
        var dimProperty = this.getProperty(this.getDimension());
        if (dimProperty && dimProperty.SAPText) {
            legend.formatter = function (name) {
                return items.find(function (item) { return item[dimProperty.Name] === name; })[dimProperty.SAPText.Name];
            };
        }
        return legend;
    };
    NxSmartChartType.prototype.setCategoryAxisPointerLabel = function (category, items) {
        // 暂时只支持一个 dimension
        var property = this.getProperty(this.getDimension());
        category.axisPointer = category.axisPointer || {};
        category.axisPointer.label = category.axisPointer.label || {};
        category.axisPointer.label.formatter = function (params) {
            // TODO
            if (params.seriesData[0]) {
                var index = params.seriesData[0].dataIndex;
                if (property.SAPText) {
                    return items[index][(property.SAPText && property.SAPText.Name)] + '(' + items[index][property.Name] + ')';
                }
                else {
                    return items[index][property.Name];
                }
            }
            else {
                return params.value;
            }
        };
    };
    NxSmartChartType.AUXILIARY_SERIES_NAME = 'Auxiliary';
    NxSmartChartType.DATA_ZOOM_SUITABLE_SIZE = 20;
    return NxSmartChartType;
}());

/**
 * 数字格式化函数，单位 K M B T KT
 *
 * @param value
 */
function abbreviateNumber(value) {
    var newValue = Math.abs(value).toFixed(0);
    if (Math.abs(value) >= 1000) {
        var suffixes = ["", "K", "M", "B", "T", "KT"];
        var suffixNum = Math.floor((("" + newValue).length - 1) / 3);
        var shortValue = void 0;
        for (var precision = 2; precision >= 1; precision--) {
            shortValue = parseFloat((suffixNum != 0 ? (value / Math.pow(1000, suffixNum)) : value).toPrecision(precision));
            var dotLessShortValue = (shortValue + '').replace(/[^a-zA-Z 0-9]+/g, '');
            if (dotLessShortValue.length <= 2) {
                break;
            }
        }
        if (shortValue % 1 != 0) {
            var shortNum = shortValue.toFixed(1);
        }
        newValue = shortValue + suffixes[suffixNum];
    }
    return newValue;
}


/***/ }),

/***/ "../nx-charts/src/lib/smart-charts/chart-types/stacked-dual-100.ts":
/*!*************************************************************************!*\
  !*** ../nx-charts/src/lib/smart-charts/chart-types/stacked-dual-100.ts ***!
  \*************************************************************************/
/*! exports provided: NxStackedDual100 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NxStackedDual100", function() { return NxStackedDual100; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _smart_chart_type__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./smart-chart-type */ "../nx-charts/src/lib/smart-charts/chart-types/smart-chart-type.ts");


var NxStackedDual100 = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](NxStackedDual100, _super);
    function NxStackedDual100() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NxStackedDual100.prototype.getStacked100 = function (items, category, seriesType) {
        var _this = this;
        var options = {
            xAxis: {},
            yAxis: {},
            series: []
        };
        options[category].type = 'category';
        options[category].data = this.getDimensionData(items);
        var roles = {};
        this.measures.forEach(function (measure, index) {
            var role = _this.getMeasureRole(measure);
            options.series.push({
                id: measure,
                name: _this.getPropertyLabel(measure),
                type: seriesType,
                stack: 'Stacked' + role,
                data: []
            });
            roles[role] = roles[role] || [];
            roles[role].push(measure);
        });
        items.map(function (item) {
            Object.keys(roles).forEach(function (key) {
                var total = roles[key].reduce(function (previousValue, measure) { return previousValue + Number(item[measure]); }, 0);
                roles[key].forEach(function (measure) {
                    options.series.find(function (series) { return series.id === measure; }).data.push(Number(item[measure]) / total * 100);
                });
            });
        });
        options.tooltip = this.getTooltip(items, '%');
        // options.dataZoom = this.getDataZoomOptions(category, options.series);
        return options;
    };
    NxStackedDual100.prototype.getSeries = function (items) {
        throw new Error("Method not implemented.");
    };
    return NxStackedDual100;
}(_smart_chart_type__WEBPACK_IMPORTED_MODULE_1__["NxSmartChartType"]));



/***/ }),

/***/ "../nx-charts/src/lib/smart-charts/chart-types/stacked-dual.ts":
/*!*********************************************************************!*\
  !*** ../nx-charts/src/lib/smart-charts/chart-types/stacked-dual.ts ***!
  \*********************************************************************/
/*! exports provided: NxStackedDual */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NxStackedDual", function() { return NxStackedDual; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _smart_chart_type__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./smart-chart-type */ "../nx-charts/src/lib/smart-charts/chart-types/smart-chart-type.ts");


var NxStackedDual = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](NxStackedDual, _super);
    function NxStackedDual() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NxStackedDual.prototype.getStacked = function (items, category, seriesType) {
        var _this = this;
        var options = {
            xAxis: {},
            yAxis: {},
            series: []
        };
        options[category].type = 'category';
        options[category].data = this.getDimensionData(items);
        this.measures.forEach(function (measure, index) {
            var role = _this.getMeasureRole(measure) || 'Axis1';
            options.series.push({
                name: _this.getPropertyLabel(measure),
                type: seriesType,
                stack: role,
                data: items.map(function (item) { return item[measure]; })
            });
        });
        options.tooltip = this.getTooltip(items);
        // options.dataZoom = this.getDataZoomOptions(category, options.series);
        return options;
    };
    return NxStackedDual;
}(_smart_chart_type__WEBPACK_IMPORTED_MODULE_1__["NxSmartChartType"]));



/***/ }),

/***/ "../nx-charts/src/lib/smart-charts/chart-types/timeline.ts":
/*!*****************************************************************!*\
  !*** ../nx-charts/src/lib/smart-charts/chart-types/timeline.ts ***!
  \*****************************************************************/
/*! exports provided: NxTimeline */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NxTimeline", function() { return NxTimeline; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var projects_nx_annotation_src_public_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! projects/nx-annotation/src/public-api */ "../nx-annotation/src/public-api.ts");


var NxTimeline = /** @class */ (function () {
    function NxTimeline(subChartType, timeline) {
        this.subChartType = subChartType;
        this.timeline = timeline;
        this.chartType = projects_nx_annotation_src_public_api__WEBPACK_IMPORTED_MODULE_1__["ChartType"].Timeline;
        this.legendVisible = true;
    }
    NxTimeline.prototype.getChartOptions = function (items) {
        var _this = this;
        var category = tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"](new Set(items.map(function (item) { return item[_this.subChartType.getDimension()]; })));
        var groups = groupBy(items, this.timeline);
        var options = {
            baseOption: tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ timeline: {
                    axisType: 'category',
                    autoPlay: true,
                    playInterval: 1000,
                } }, this.subChartType.getChartOptions(groups[Object.keys(groups)[0]]))
        };
        options.baseOption.xAxis.data = category;
        options.baseOption.timeline.data = Object.keys(groups);
        options.options = options.baseOption.timeline.data.map(function (key) {
            return {
                series: _this.subChartType.getSeries(groups[key])
            };
        });
        return options;
    };
    return NxTimeline;
}());

function groupBy(xs, key) {
    return xs.reduce(function (rv, x) {
        (rv[x[key]] = rv[x[key]] || []).push(x);
        return rv;
    }, {});
}


/***/ }),

/***/ "../nx-charts/src/lib/smart-charts/chart-types/tree-map.ts":
/*!*****************************************************************!*\
  !*** ../nx-charts/src/lib/smart-charts/chart-types/tree-map.ts ***!
  \*****************************************************************/
/*! exports provided: NxTreeMap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NxTreeMap", function() { return NxTreeMap; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _smart_chart_type__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./smart-chart-type */ "../nx-charts/src/lib/smart-charts/chart-types/smart-chart-type.ts");
/* harmony import */ var projects_nx_annotation_src_public_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! projects/nx-annotation/src/public-api */ "../nx-annotation/src/public-api.ts");



var NxTreeMap = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](NxTreeMap, _super);
    function NxTreeMap() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.chartType = projects_nx_annotation_src_public_api__WEBPACK_IMPORTED_MODULE_2__["ChartType"].TreeMap;
        return _this;
    }
    NxTreeMap.prototype.getChartOptions = function (items) {
        var _this = this;
        var options = {
            series: []
        };
        var series = {
            type: 'treemap',
            data: []
        };
        series.data = items.map(function (item) {
            return {
                name: item[_this.getDimension()],
                value: item[_this.getMeasure()]
            };
        });
        options.series.push(series);
        options.tooltip = this.getTooltip(items);
        return options;
    };
    return NxTreeMap;
}(_smart_chart_type__WEBPACK_IMPORTED_MODULE_1__["NxSmartChartType"]));



/***/ }),

/***/ "../nx-charts/src/lib/smart-charts/chart-types/waterfall.ts":
/*!******************************************************************!*\
  !*** ../nx-charts/src/lib/smart-charts/chart-types/waterfall.ts ***!
  \******************************************************************/
/*! exports provided: NxWaterfall */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NxWaterfall", function() { return NxWaterfall; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _smart_chart_type__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./smart-chart-type */ "../nx-charts/src/lib/smart-charts/chart-types/smart-chart-type.ts");
/* harmony import */ var projects_nx_annotation_src_public_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! projects/nx-annotation/src/public-api */ "../nx-annotation/src/public-api.ts");



var NxWaterfall = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](NxWaterfall, _super);
    function NxWaterfall() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.chartType = projects_nx_annotation_src_public_api__WEBPACK_IMPORTED_MODULE_2__["ChartType"].Waterfall;
        return _this;
    }
    NxWaterfall.prototype.getChartOptions = function (items) {
        var options = {
            series: []
        };
        var category, value;
        switch (this.chartType) {
            case projects_nx_annotation_src_public_api__WEBPACK_IMPORTED_MODULE_2__["ChartType"].Waterfall:
                category = 'xAxis';
                value = 'yAxis';
                break;
            case projects_nx_annotation_src_public_api__WEBPACK_IMPORTED_MODULE_2__["ChartType"].HorizontalWaterfall:
                category = 'yAxis';
                value = 'xAxis';
                break;
        }
        options[category] = {
            type: 'category',
            inverse: category === 'yAxis',
            splitLine: { show: false },
            axisLabel: {}
        };
        if (this.categoryType !== 'time') {
            this.setCategoryAxisLabel(options[category], items);
        }
        options[value] = {
            type: 'value',
            axisLabel: {
                formatter: this.getMeasureLabelFormater()
            }
        };
        // 1. Category data
        options[category].data = this.getDimensionData(items);
        options.series = this.getSeries(items);
        options.tooltip = this.getTooltip(items);
        return options;
    };
    NxWaterfall.prototype.getSeries = function (items) {
        var _this = this;
        var measureProperty = this.getProperty(this.getMeasure());
        var auxiliary = {
            name: _smart_chart_type__WEBPACK_IMPORTED_MODULE_1__["NxSmartChartType"].AUXILIARY_SERIES_NAME,
            type: 'bar',
            stack: '总量',
            itemStyle: {
                normal: {
                    barBorderColor: 'rgba(0,0,0,0)',
                    color: 'rgba(0,0,0,0)'
                },
                emphasis: {
                    barBorderColor: 'rgba(0,0,0,0)',
                    color: 'rgba(0,0,0,0)'
                }
            },
            data: []
        };
        var increase = {
            name: measureProperty.SAPLabel,
            type: 'bar',
            stack: '总量',
            data: []
        };
        var decline = {
            name: '-' + measureProperty.SAPLabel,
            type: 'bar',
            stack: '总量',
            data: []
        };
        var series = [];
        // 2. Auxiliary hide bar
        items.reduce(function (pre, item) {
            var measure = Number(item[_this.getMeasure()]);
            auxiliary.data.push(measure >= 0 ? pre : pre + measure);
            return pre + measure;
        }, 0);
        series.push(auxiliary);
        // 3. Increase and Decline bars
        increase.data = items.map(function (item) { return item[_this.measures[0]] >= 0 ? item[_this.measures[0]] : '-'; });
        decline.data = items.map(function (item) { return item[_this.measures[0]] < 0 ? -item[_this.measures[0]] : '-'; });
        series.push(increase);
        series.push(decline);
        return series;
    };
    return NxWaterfall;
}(_smart_chart_type__WEBPACK_IMPORTED_MODULE_1__["NxSmartChartType"]));



/***/ }),

/***/ "../nx-charts/src/lib/smart-charts/smart-charts.component.scss":
/*!*********************************************************************!*\
  !*** ../nx-charts/src/lib/smart-charts/smart-charts.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: flex;\n}\n\nnx-chart {\n  flex: 1;\n  position: relative;\n  max-height: 100%;\n}\n\nnx-chart ::ng-deep .echart {\n  position: absolute;\n  height: 100%;\n  width: 100%;\n}\n\nnx-chart ::ng-deep canvas {\n  border-bottom-left-radius: nb-theme(card-border-radius);\n  border-bottom-right-radius: nb-theme(card-border-radius);\n}"

/***/ }),

/***/ "../nx-charts/src/lib/smart-charts/smart-charts.component.ts":
/*!*******************************************************************!*\
  !*** ../nx-charts/src/lib/smart-charts/smart-charts.component.ts ***!
  \*******************************************************************/
/*! exports provided: NxSmartChartsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NxSmartChartsComponent", function() { return NxSmartChartsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var projects_nx_annotation_src_public_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! projects/nx-annotation/src/public-api */ "../nx-annotation/src/public-api.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _nx_charts_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../nx-charts.service */ "../nx-charts/src/lib/nx-charts.service.ts");
/* harmony import */ var _nx_chart__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../nx-chart */ "../nx-charts/src/lib/nx-chart/index.ts");
/* harmony import */ var _chart_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./chart-types */ "../nx-charts/src/lib/smart-charts/chart-types/index.ts");
/* harmony import */ var _core_model_filter__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../core/model/filter */ "../nx-charts/src/lib/core/model/filter.ts");









var NxSmartChartsComponent = /** @class */ (function () {
    function NxSmartChartsComponent(uiAnnotationFactory, cd, chartService) {
        this.uiAnnotationFactory = uiAnnotationFactory;
        this.cd = cd;
        this.chartService = chartService;
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.debugging = false;
        this.chartTheme = 'default';
        this.dataZoom = false;
        // Controls from UI5 SmartChart
        // Controls the visibility of the title in the dimension area of the chart.
        this.showDimensionsTitle = true;
        // Controls the visibility of the title in the measure area of the chart.
        this.showMeasuresTitle = true;
        // Controls if the chart's legend is visable.
        this.legendVisible = true;
        // Controls the visibility of the Zoom In and Zoom Out buttons.
        this.showZoomButtons = true;
        // Events
        this.chartInit = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.chartClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        // Smart Chart 自动数据流
        this.chartData$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
    }
    NxSmartChartsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.chartService.onRefresh()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.destroy$), 
        // 用户自定义数据流时不刷新
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(function () { return !_this.data$; }), 
        // Chart Name 相同才刷新
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(function (name) { return !name || name === _this.chartName; })).subscribe(function () {
            _this.refresh();
        });
        if (this.filters) {
            this.filters.onChange().subscribe(function (filters) {
                _this.refresh();
            });
        }
        this.onRender$ = (!!this.data$ ? Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["merge"])(this.chartData$, this.data$) : this.chartData$)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["delayWhen"])(function () { return _this.getChartAnnotation(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) {
            // TODO DEBUGGING
            // if(!data) {
            //   console.warn(data)
            // }
            // Step 1. call after sorters
            if (_this.settings.afterSorters) {
                data.sort(function (a, b) {
                    var sort = _this.settings.afterSorters.map(function (sort) {
                        sort = sort.trim().replace(/\s\s*/g, " ");
                        return {
                            Property: sort.split(' ')[0],
                            Descending: sort.split(' ')[1]
                        };
                    })
                        .find(function (sort) { return a[sort.Property] !== b[sort.Property]; });
                    if (sort) {
                        return "DESC" === (sort.Descending && sort.Descending.toUpperCase()) ? b[sort.Property] - a[sort.Property] : a[sort.Property] - b[sort.Property];
                    }
                    else {
                        return 0;
                    }
                });
            }
            // Step 2. call after filters
            // 暂时只支持 Function filter
            if (_this.settings.afterFilters) {
                if (typeof _this.settings.afterFilters === 'function') {
                    data = data.filter(_this.settings.afterFilters);
                }
            }
            return data;
        }));
    };
    NxSmartChartsComponent.prototype.ngOnChanges = function (changes) {
        if (changes['settings'] && changes['settings'].currentValue) {
            console.log('on smart charts settings changed');
            this.onEntitySetChange();
        }
    };
    NxSmartChartsComponent.prototype.ngAfterViewInit = function () {
        // Views 初始化后再发起数据调用
        if (!this.data$) {
            this.getChartData();
        }
    };
    NxSmartChartsComponent.prototype.refresh = function (filters) {
        // this.chartComponent.clear();
        this.getChartData(filters);
    };
    NxSmartChartsComponent.prototype.onEntitySetChange = function () {
        this.annotationService = this.uiAnnotationFactory.newUIAnnotationService(this.settings);
        this.odataService = this.annotationService.getODataService();
    };
    NxSmartChartsComponent.prototype.getChartAnnotation = function () {
        var _this = this;
        if (this.entityType) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])([this.entityType, this.chartAnnotation]);
        }
        else {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["combineLatest"])(this.annotationService.getEntityType(), this.annotationService.getAnnotation(this.settings.chartAnnotationPath))
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (_a) {
                var _b = tslib__WEBPACK_IMPORTED_MODULE_0__["__read"](_a, 2), entityType = _b[0], chart = _b[1];
                _this.entityType = entityType;
                _this.chartAnnotation = chart;
                // 用户页面自定义 ChartType 优先级高于 Annotation 配置
                // this.chartType = this.chartType || chart.getChartType();
                _this.dimensions = chart.getDimensions();
                _this.measures = chart.getMeasures();
                _this.dimensionAttributes = chart.chartDefinition.DimensionAttributes;
                _this.properties = _this.dimensions.map(function (dimension) { return entityType.getProperty(dimension); });
                // Custom Chart Type
                _this.customChartType = _this.setCustomChartType(chart.getChartType());
                // Push sync attributes
                _this.cd.detectChanges();
            }));
        }
    };
    NxSmartChartsComponent.prototype.getChartData = function (filters) {
        var _this = this;
        // Step 0. call get data with before fetch function
        this.annotationService.getChartWithData((function (options) {
            _this.beforeFetch && _this.beforeFetch(options);
            if (_this.timeline) {
                options.selects.push(_this.timeline);
            }
            if (_this.filters && _this.filters.getFilterString()) {
                options.filterString = options.filterString ? "(" + options.filterString + ") and " + _this.filters.getFilterString() :
                    _this.filters.getFilterString();
            }
        }).bind(this))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (_a) {
            var _b = tslib__WEBPACK_IMPORTED_MODULE_0__["__read"](_a, 3), entityType = _b[0], chart = _b[1], data = _b[2];
            var chartData = { entityType: entityType, chartAnnotation: chart, chartData: data };
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["iif"])(function () { return !_this.settings.auxiliary; }, Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(chartData), Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["combineLatest"])((_this.settings.auxiliary || []).map(function (settings) {
                settings._annotationService = settings._annotationService || _this.uiAnnotationFactory.newUIAnnotationService(settings);
                return settings._annotationService.getAnnotationWithData(settings.beforeFetch)
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) {
                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ name: settings.name }, data);
                }));
            })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (auxiliary) {
                var chartData = {
                    entityType: entityType,
                    chartAnnotation: chart,
                    chartData: data,
                    auxiliary: auxiliary
                };
                return chartData;
            })));
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (chartWithData) {
            var data = chartWithData.chartData;
            // Step 1. call (after fetch function)
            if (_this.settings.afterFetch) {
                data = _this.settings.afterFetch(chartWithData);
            }
            return data;
        }))
            .subscribe(function (data) {
            // Push async data
            _this.chartData$.next(data);
        });
    };
    NxSmartChartsComponent.prototype.setCustomChartType = function (chartType) {
        var customChartType;
        switch (chartType) {
            case projects_nx_annotation_src_public_api__WEBPACK_IMPORTED_MODULE_2__["ChartType"].Column:
                customChartType = new _chart_types__WEBPACK_IMPORTED_MODULE_7__["NxColumn"](this.entityType, this.chartAnnotation);
                break;
            case projects_nx_annotation_src_public_api__WEBPACK_IMPORTED_MODULE_2__["ChartType"].ColumnDual:
                customChartType = new _chart_types__WEBPACK_IMPORTED_MODULE_7__["NxColumn"](this.entityType, this.chartAnnotation);
                break;
            case projects_nx_annotation_src_public_api__WEBPACK_IMPORTED_MODULE_2__["ChartType"].ColumnStacked:
                customChartType = new _chart_types__WEBPACK_IMPORTED_MODULE_7__["NxColumnStacked"](this.entityType, this.chartAnnotation);
                break;
            case projects_nx_annotation_src_public_api__WEBPACK_IMPORTED_MODULE_2__["ChartType"].ColumnStackedDual:
                customChartType = new _chart_types__WEBPACK_IMPORTED_MODULE_7__["NxColumnStackedDual"](this.entityType, this.chartAnnotation);
                break;
            case projects_nx_annotation_src_public_api__WEBPACK_IMPORTED_MODULE_2__["ChartType"].ColumnStacked100:
                customChartType = new _chart_types__WEBPACK_IMPORTED_MODULE_7__["NxColumnStacked100"](this.entityType, this.chartAnnotation);
                break;
            case projects_nx_annotation_src_public_api__WEBPACK_IMPORTED_MODULE_2__["ChartType"].ColumnStackedDual100:
                customChartType = new _chart_types__WEBPACK_IMPORTED_MODULE_7__["NxColumnStackedDual100"](this.entityType, this.chartAnnotation);
                break;
            case projects_nx_annotation_src_public_api__WEBPACK_IMPORTED_MODULE_2__["ChartType"].Bar:
            case projects_nx_annotation_src_public_api__WEBPACK_IMPORTED_MODULE_2__["ChartType"].BarDual:
                customChartType = new _chart_types__WEBPACK_IMPORTED_MODULE_7__["NxBarDual"](this.entityType, this.chartAnnotation);
                break;
            case projects_nx_annotation_src_public_api__WEBPACK_IMPORTED_MODULE_2__["ChartType"].BarStacked:
                customChartType = new _chart_types__WEBPACK_IMPORTED_MODULE_7__["NxBarStacked"](this.entityType, this.chartAnnotation);
                break;
            case projects_nx_annotation_src_public_api__WEBPACK_IMPORTED_MODULE_2__["ChartType"].BarStackedDual:
                customChartType = new _chart_types__WEBPACK_IMPORTED_MODULE_7__["NxBarStackedDual"](this.entityType, this.chartAnnotation);
                break;
            case projects_nx_annotation_src_public_api__WEBPACK_IMPORTED_MODULE_2__["ChartType"].BarStacked100:
                customChartType = new _chart_types__WEBPACK_IMPORTED_MODULE_7__["NxBarStacked100"](this.entityType, this.chartAnnotation);
                break;
            case projects_nx_annotation_src_public_api__WEBPACK_IMPORTED_MODULE_2__["ChartType"].BarStackedDual100:
                customChartType = new _chart_types__WEBPACK_IMPORTED_MODULE_7__["NxBarStackedDual100"](this.entityType, this.chartAnnotation);
                break;
            case projects_nx_annotation_src_public_api__WEBPACK_IMPORTED_MODULE_2__["ChartType"].Area:
                customChartType = new _chart_types__WEBPACK_IMPORTED_MODULE_7__["NxArea"](this.entityType, this.chartAnnotation);
                break;
            case projects_nx_annotation_src_public_api__WEBPACK_IMPORTED_MODULE_2__["ChartType"].AreaStacked:
                customChartType = new _chart_types__WEBPACK_IMPORTED_MODULE_7__["NxAreaStacked"](this.entityType, this.chartAnnotation);
                break;
            case projects_nx_annotation_src_public_api__WEBPACK_IMPORTED_MODULE_2__["ChartType"].AreaStacked100:
                customChartType = new _chart_types__WEBPACK_IMPORTED_MODULE_7__["NxAreaStacked100"](this.entityType, this.chartAnnotation);
                break;
            case projects_nx_annotation_src_public_api__WEBPACK_IMPORTED_MODULE_2__["ChartType"].HorizontalArea:
                customChartType = new _chart_types__WEBPACK_IMPORTED_MODULE_7__["NxHorizontalArea"](this.entityType, this.chartAnnotation);
                break;
            case projects_nx_annotation_src_public_api__WEBPACK_IMPORTED_MODULE_2__["ChartType"].HorizontalAreaStacked:
                customChartType = new _chart_types__WEBPACK_IMPORTED_MODULE_7__["NxHorizontalAreaStacked"](this.entityType, this.chartAnnotation);
                break;
            case projects_nx_annotation_src_public_api__WEBPACK_IMPORTED_MODULE_2__["ChartType"].HorizontalAreaStacked100:
                customChartType = new _chart_types__WEBPACK_IMPORTED_MODULE_7__["NxHorizontalAreaStacked100"](this.entityType, this.chartAnnotation);
                break;
            case projects_nx_annotation_src_public_api__WEBPACK_IMPORTED_MODULE_2__["ChartType"].Line:
                customChartType = new _chart_types__WEBPACK_IMPORTED_MODULE_7__["NxLine"](this.entityType, this.chartAnnotation);
                break;
            case projects_nx_annotation_src_public_api__WEBPACK_IMPORTED_MODULE_2__["ChartType"].LineDual:
                customChartType = new _chart_types__WEBPACK_IMPORTED_MODULE_7__["NxLineDual"](this.entityType, this.chartAnnotation);
                break;
            case projects_nx_annotation_src_public_api__WEBPACK_IMPORTED_MODULE_2__["ChartType"].Combination:
            case projects_nx_annotation_src_public_api__WEBPACK_IMPORTED_MODULE_2__["ChartType"].CombinationDual:
                customChartType = new _chart_types__WEBPACK_IMPORTED_MODULE_7__["NxCombination"](this.entityType, this.chartAnnotation);
                break;
            case projects_nx_annotation_src_public_api__WEBPACK_IMPORTED_MODULE_2__["ChartType"].CombinationStacked:
            case projects_nx_annotation_src_public_api__WEBPACK_IMPORTED_MODULE_2__["ChartType"].CombinationStackedDual:
                customChartType = new _chart_types__WEBPACK_IMPORTED_MODULE_7__["NxCombinationStacked"](this.entityType, this.chartAnnotation);
                break;
            case projects_nx_annotation_src_public_api__WEBPACK_IMPORTED_MODULE_2__["ChartType"].HorizontalCombinationStacked:
                customChartType = new _chart_types__WEBPACK_IMPORTED_MODULE_7__["NxHorizontalCombinationStacked"](this.entityType, this.chartAnnotation);
                break;
            case projects_nx_annotation_src_public_api__WEBPACK_IMPORTED_MODULE_2__["ChartType"].Pie:
                customChartType = new _chart_types__WEBPACK_IMPORTED_MODULE_7__["NxPie"](this.entityType, this.chartAnnotation);
                break;
            case projects_nx_annotation_src_public_api__WEBPACK_IMPORTED_MODULE_2__["ChartType"].Donut:
                customChartType = new _chart_types__WEBPACK_IMPORTED_MODULE_7__["NxDonut"](this.entityType, this.chartAnnotation);
                break;
            case projects_nx_annotation_src_public_api__WEBPACK_IMPORTED_MODULE_2__["ChartType"].Scatter:
            case projects_nx_annotation_src_public_api__WEBPACK_IMPORTED_MODULE_2__["ChartType"].Bubble:
                customChartType = new _chart_types__WEBPACK_IMPORTED_MODULE_7__["NxScatter"](this.entityType, this.chartAnnotation);
                break;
            case projects_nx_annotation_src_public_api__WEBPACK_IMPORTED_MODULE_2__["ChartType"].Radar:
                customChartType = new _chart_types__WEBPACK_IMPORTED_MODULE_7__["NxRadar"](this.entityType, this.chartAnnotation);
                break;
            case projects_nx_annotation_src_public_api__WEBPACK_IMPORTED_MODULE_2__["ChartType"].HeatMap:
                customChartType = new _chart_types__WEBPACK_IMPORTED_MODULE_7__["NxHeatMap"](this.entityType, this.chartAnnotation);
                break;
            case projects_nx_annotation_src_public_api__WEBPACK_IMPORTED_MODULE_2__["ChartType"].TreeMap:
                customChartType = new _chart_types__WEBPACK_IMPORTED_MODULE_7__["NxTreeMap"](this.entityType, this.chartAnnotation);
                break;
            case projects_nx_annotation_src_public_api__WEBPACK_IMPORTED_MODULE_2__["ChartType"].Waterfall:
                customChartType = new _chart_types__WEBPACK_IMPORTED_MODULE_7__["NxWaterfall"](this.entityType, this.chartAnnotation);
                break;
            case projects_nx_annotation_src_public_api__WEBPACK_IMPORTED_MODULE_2__["ChartType"].HorizontalWaterfall:
                customChartType = new _chart_types__WEBPACK_IMPORTED_MODULE_7__["NxHorizontalWaterfall"](this.entityType, this.chartAnnotation);
                break;
        }
        if (customChartType) {
            if (this.timeline) {
                return new _chart_types__WEBPACK_IMPORTED_MODULE_7__["NxTimeline"](customChartType, this.timeline);
            }
            else {
                return customChartType;
            }
        }
    };
    NxSmartChartsComponent.prototype.ngOnDestroy = function () {
        this.destroy$.next();
        this.destroy$.complete();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], NxSmartChartsComponent.prototype, "debugging", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], NxSmartChartsComponent.prototype, "chartName", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], NxSmartChartsComponent.prototype, "chartTitle", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], NxSmartChartsComponent.prototype, "chartType", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], NxSmartChartsComponent.prototype, "settings", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], NxSmartChartsComponent.prototype, "chartTheme", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], NxSmartChartsComponent.prototype, "chartOptions", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], NxSmartChartsComponent.prototype, "timeline", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _core_model_filter__WEBPACK_IMPORTED_MODULE_8__["Filters"])
    ], NxSmartChartsComponent.prototype, "filters", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function)
    ], NxSmartChartsComponent.prototype, "beforeFetch", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function)
    ], NxSmartChartsComponent.prototype, "beforeRenderChart", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], NxSmartChartsComponent.prototype, "dataZoom", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], NxSmartChartsComponent.prototype, "showDimensionsTitle", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], NxSmartChartsComponent.prototype, "showMeasuresTitle", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], NxSmartChartsComponent.prototype, "legendVisible", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], NxSmartChartsComponent.prototype, "showZoomButtons", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], NxSmartChartsComponent.prototype, "chartInit", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], NxSmartChartsComponent.prototype, "chartClick", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"])
    ], NxSmartChartsComponent.prototype, "data$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_nx_chart__WEBPACK_IMPORTED_MODULE_6__["NxChartComponent"], { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _nx_chart__WEBPACK_IMPORTED_MODULE_6__["NxChartComponent"])
    ], NxSmartChartsComponent.prototype, "chartComponent", void 0);
    NxSmartChartsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'nx-smart-charts',
            template: __webpack_require__(/*! raw-loader!./smart-charts.component.html */ "../../node_modules/raw-loader/index.js!../nx-charts/src/lib/smart-charts/smart-charts.component.html"),
            styles: [__webpack_require__(/*! ./smart-charts.component.scss */ "../nx-charts/src/lib/smart-charts/smart-charts.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [projects_nx_annotation_src_public_api__WEBPACK_IMPORTED_MODULE_2__["UIAnnotationFactory"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"],
            _nx_charts_service__WEBPACK_IMPORTED_MODULE_5__["NxChartService"]])
    ], NxSmartChartsComponent);
    return NxSmartChartsComponent;
}());



/***/ }),

/***/ "../nx-charts/src/lib/smart-charts/smart-charts.module.ts":
/*!****************************************************************!*\
  !*** ../nx-charts/src/lib/smart-charts/smart-charts.module.ts ***!
  \****************************************************************/
/*! exports provided: NxSmartChartsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NxSmartChartsModule", function() { return NxSmartChartsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _nx_chart_nx_chart_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../nx-chart/nx-chart.module */ "../nx-charts/src/lib/nx-chart/nx-chart.module.ts");
/* harmony import */ var _smart_charts_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./smart-charts.component */ "../nx-charts/src/lib/smart-charts/smart-charts.component.ts");





var NxSmartChartsModule = /** @class */ (function () {
    function NxSmartChartsModule() {
    }
    NxSmartChartsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_smart_charts_component__WEBPACK_IMPORTED_MODULE_4__["NxSmartChartsComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _nx_chart_nx_chart_module__WEBPACK_IMPORTED_MODULE_3__["NxChartModule"]
            ],
            exports: [_smart_charts_component__WEBPACK_IMPORTED_MODULE_4__["NxSmartChartsComponent"]]
        })
    ], NxSmartChartsModule);
    return NxSmartChartsModule;
}());



/***/ }),

/***/ "../nx-charts/src/lib/smart-filter/smart-filter-bar/smart-filter-bar.component.scss":
/*!******************************************************************************************!*\
  !*** ../nx-charts/src/lib/smart-filter/smart-filter-bar/smart-filter-bar.component.scss ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".input-group-inner-append {\n  position: absolute;\n  right: 0;\n  bottom: 5px;\n}\n.input-group-inner-append button {\n  background: transparent;\n  border: 0;\n  height: 38px;\n}\n::ng-deep tag-input {\n  flex: 1;\n}\n::ng-deep tag-input-form {\n  flex: 1;\n}\n::ng-deep tag-input-form form {\n  display: flex;\n}\n::ng-deep tag-input-form form input {\n  flex: 1;\n}"

/***/ }),

/***/ "../nx-charts/src/lib/smart-filter/smart-filter-bar/smart-filter-bar.component.ts":
/*!****************************************************************************************!*\
  !*** ../nx-charts/src/lib/smart-filter/smart-filter-bar/smart-filter-bar.component.ts ***!
  \****************************************************************************************/
/*! exports provided: NxSmartFilterBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NxSmartFilterBarComponent", function() { return NxSmartFilterBarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var projects_nx_annotation_src_public_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! projects/nx-annotation/src/public-api */ "../nx-annotation/src/public-api.ts");




/**
 * The `SmartFilterBar` control uses the OData metadata of an entity in order to create a FilterBar.
 * Whether a field is visible on the FilterBar, supports type-ahead and value help, for example, is automatically determined. When you use control configurations and group configurations it is possible to configure the FilterBar and adapt it according to your needs.
 *
 * ### Tag Input Component for Angular
 * https://github.com/Gbuomprisco/ngx-chips
 *
 */
var NxSmartFilterBarComponent = /** @class */ (function () {
    function NxSmartFilterBarComponent(uiAnnotationFactory) {
        this.uiAnnotationFactory = uiAnnotationFactory;
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]().group({});
    }
    NxSmartFilterBarComponent.prototype.ngOnInit = function () {
        var _this = this;
        var annotationService = this.uiAnnotationFactory.newUIAnnotationService({ entitySet: this.entitySet });
        annotationService.getAnnotation('com.sap.vocabularies.UI.v1.SelectionFields')
            .subscribe(function (selection) {
            console.log(selection.getPropertyPaths());
            _this.selectionFields = selection.getPropertyPaths();
            selection.getPropertyPaths().forEach(function (property) {
                _this.form.addControl(property, new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]([]));
            });
        });
    };
    NxSmartFilterBarComponent.prototype.onSubmit = function () {
        // TODO: Use EventEmitter with form value
        console.warn(this.form.value);
    };
    /**
     * Methods from [`sap.ui.comp.smartfilterbar.SmartFilterBar`](https://sapui5.hana.ondemand.com/#/api/sap.ui.comp.smartfilterbar.SmartFilterBar)
     *
     */
    NxSmartFilterBarComponent.prototype.getFilterData = function () {
    };
    NxSmartFilterBarComponent.prototype.getFilterDataAsString = function () {
    };
    NxSmartFilterBarComponent.prototype.getFilters = function () {
        return null;
    };
    NxSmartFilterBarComponent.prototype.getFiltersWithValues = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], NxSmartFilterBarComponent.prototype, "entitySet", void 0);
    NxSmartFilterBarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'nx-smart-filter-bar',
            template: __webpack_require__(/*! raw-loader!./smart-filter-bar.component.html */ "../../node_modules/raw-loader/index.js!../nx-charts/src/lib/smart-filter/smart-filter-bar/smart-filter-bar.component.html"),
            styles: [__webpack_require__(/*! ./smart-filter-bar.component.scss */ "../nx-charts/src/lib/smart-filter/smart-filter-bar/smart-filter-bar.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [projects_nx_annotation_src_public_api__WEBPACK_IMPORTED_MODULE_3__["UIAnnotationFactory"]])
    ], NxSmartFilterBarComponent);
    return NxSmartFilterBarComponent;
}());



/***/ }),

/***/ "../nx-charts/src/lib/smart-filter/smart-filter.module.ts":
/*!****************************************************************!*\
  !*** ../nx-charts/src/lib/smart-filter/smart-filter.module.ts ***!
  \****************************************************************/
/*! exports provided: NxSmartFilterModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NxSmartFilterModule", function() { return NxSmartFilterModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _nebular_eva_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nebular/eva-icons */ "../../node_modules/@nebular/eva-icons/fesm5/index.js");
/* harmony import */ var ngx_chips__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-chips */ "../../node_modules/ngx-chips/fesm5/ngx-chips.js");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @nebular/theme */ "../../node_modules/@nebular/theme/fesm5/index.js");
/* harmony import */ var _smart_filter_bar_smart_filter_bar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./smart-filter-bar/smart-filter-bar.component */ "../nx-charts/src/lib/smart-filter/smart-filter-bar/smart-filter-bar.component.ts");
/* harmony import */ var _smart_filter_smart_filter_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./smart-filter/smart-filter.component */ "../nx-charts/src/lib/smart-filter/smart-filter/smart-filter.component.ts");
/* harmony import */ var _value_help_dialog_value_help_dialog_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./value-help-dialog/value-help-dialog.component */ "../nx-charts/src/lib/smart-filter/value-help-dialog/value-help-dialog.component.ts");
/* harmony import */ var _core_pipes_keys_pipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../core/pipes/keys.pipe */ "../nx-charts/src/lib/core/pipes/keys.pipe.ts");
/* harmony import */ var _core_pipes_entries_pipe__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../core/pipes/entries.pipe */ "../nx-charts/src/lib/core/pipes/entries.pipe.ts");












var ENTRY_COMPONENTS = [
    _value_help_dialog_value_help_dialog_component__WEBPACK_IMPORTED_MODULE_9__["NxValueHelpDialogComponent"]
];
var NxSmartFilterModule = /** @class */ (function () {
    function NxSmartFilterModule() {
    }
    NxSmartFilterModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _smart_filter_bar_smart_filter_bar_component__WEBPACK_IMPORTED_MODULE_7__["NxSmartFilterBarComponent"],
                _smart_filter_smart_filter_component__WEBPACK_IMPORTED_MODULE_8__["NxSmartFilterComponent"],
                _value_help_dialog_value_help_dialog_component__WEBPACK_IMPORTED_MODULE_9__["NxValueHelpDialogComponent"],
                _core_pipes_keys_pipe__WEBPACK_IMPORTED_MODULE_10__["KeysPipe"],
                _core_pipes_entries_pipe__WEBPACK_IMPORTED_MODULE_11__["EntriesPipe"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_6__["NbButtonModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_6__["NbDialogModule"].forChild({}),
                _nebular_eva_icons__WEBPACK_IMPORTED_MODULE_4__["NbEvaIconsModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_6__["NbIconModule"],
                ngx_chips__WEBPACK_IMPORTED_MODULE_5__["TagInputModule"],
                // BrowserAnimationsModule,
                _nebular_theme__WEBPACK_IMPORTED_MODULE_6__["NbCardModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_6__["NbInputModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_6__["NbSelectModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_6__["NbListModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_6__["NbAccordionModule"]
            ],
            entryComponents: tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"](ENTRY_COMPONENTS),
            exports: [
                _smart_filter_bar_smart_filter_bar_component__WEBPACK_IMPORTED_MODULE_7__["NxSmartFilterBarComponent"],
                _smart_filter_smart_filter_component__WEBPACK_IMPORTED_MODULE_8__["NxSmartFilterComponent"],
                _value_help_dialog_value_help_dialog_component__WEBPACK_IMPORTED_MODULE_9__["NxValueHelpDialogComponent"]
            ]
        })
    ], NxSmartFilterModule);
    return NxSmartFilterModule;
}());



/***/ }),

/***/ "../nx-charts/src/lib/smart-filter/smart-filter/smart-filter.component.scss":
/*!**********************************************************************************!*\
  !*** ../nx-charts/src/lib/smart-filter/smart-filter/smart-filter.component.scss ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".input-group-inner-append {\n  position: absolute;\n  right: 0;\n  bottom: 5px;\n}\n.input-group-inner-append button {\n  background: transparent;\n  border: 0;\n  height: 38px;\n}\n.input-group-inner-append button:hover {\n  background: lightblue;\n}\n::ng-deep tag-input {\n  flex: 1;\n}\n::ng-deep tag-input-form {\n  flex: 1;\n}\n::ng-deep tag-input-form form {\n  display: flex;\n}\n::ng-deep tag-input-form form input {\n  flex: 1;\n}"

/***/ }),

/***/ "../nx-charts/src/lib/smart-filter/smart-filter/smart-filter.component.ts":
/*!********************************************************************************!*\
  !*** ../nx-charts/src/lib/smart-filter/smart-filter/smart-filter.component.ts ***!
  \********************************************************************************/
/*! exports provided: NxSmartFilterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NxSmartFilterComponent", function() { return NxSmartFilterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nebular/theme */ "../../node_modules/@nebular/theme/fesm5/index.js");
/* harmony import */ var _value_help_dialog_value_help_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../value-help-dialog/value-help-dialog.component */ "../nx-charts/src/lib/smart-filter/value-help-dialog/value-help-dialog.component.ts");




var NxSmartFilterComponent = /** @class */ (function () {
    function NxSmartFilterComponent(dialogService) {
        this.dialogService = dialogService;
    }
    NxSmartFilterComponent.prototype.ngOnInit = function () {
    };
    NxSmartFilterComponent.prototype.onValueHelp = function (event) {
        this.dialogService.open(_value_help_dialog_value_help_dialog_component__WEBPACK_IMPORTED_MODULE_3__["NxValueHelpDialogComponent"], {
            context: {
                control: this.control
            }
        })
            .onClose.subscribe(function (name) { return console.log(name); });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], NxSmartFilterComponent.prototype, "control", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], NxSmartFilterComponent.prototype, "formGroup", void 0);
    NxSmartFilterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'nx-smart-filter',
            template: __webpack_require__(/*! raw-loader!./smart-filter.component.html */ "../../node_modules/raw-loader/index.js!../nx-charts/src/lib/smart-filter/smart-filter/smart-filter.component.html"),
            styles: [__webpack_require__(/*! ./smart-filter.component.scss */ "../nx-charts/src/lib/smart-filter/smart-filter/smart-filter.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbDialogService"]])
    ], NxSmartFilterComponent);
    return NxSmartFilterComponent;
}());



/***/ }),

/***/ "../nx-charts/src/lib/smart-filter/value-help-dialog/value-help-dialog.component.scss":
/*!********************************************************************************************!*\
  !*** ../nx-charts/src/lib/smart-filter/value-help-dialog/value-help-dialog.component.scss ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/*\n  Declare variables before making them global.\n  dart-sass doesn't allow to declare variable with !global.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/*\n\nAccording to the specification (https://www.w3.org/TR/css-scoping-1/#host-selector)\n:host and :host-context are pseudo-classes. So we assume they could be combined,\nlike other pseudo-classes, even same ones.\nFor example: ':nth-of-type(2n):nth-of-type(even)'.\n\nIdeal solution would be to prepend any selector with :host-context([dir=rtl]).\nThen nebular components will behave as an html element and respond to [dir] attribute on any level,\nso direction could be overridden on any component level.\n\nImplementation code:\n\n@mixin nb-rtl() {\n  // add # to scss interpolation statement.\n  // it works in comments and we can't use it here\n  @at-root {selector-append(':host-context([dir=rtl])', &)} {\n    @content;\n  }\n}\n\nAnd when we call it somewhere:\n\n:host {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n:host-context(...) {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n\nResult will look like:\n\n:host-context([dir=rtl]):host .some-class {\n  ...\n}\n:host-context([dir=rtl]):host-context(...) .some-class {\n  ...\n}\n\n*\n  Side note:\n  :host-context():host selector are valid. https://lists.w3.org/Archives/Public/www-style/2015Feb/0305.html\n\n  :host-context([dir=rtl]):host-context(...) should match any permutation,\n  so order is not important.\n*\n\n\nCurrently, there're two problems with this approach:\n\nFirst, is that we can't combine :host, :host-context. Angular bugs #14349, #19199.\nFor the moment of writing, the only possible way is:\n:host {\n  :host-context(...) {\n    ...\n  }\n}\nIt doesn't work for us because mixin could be called somewhere deeper, like:\n:host {\n  p {\n    @include nb-rtl() { ... }\n  }\n}\nWe are not able to go up to :host level to place content passed to mixin.\n\nThe second problem is that we only can be sure that we appending :host-context([dir=rtl]) to another\n:host/:host-context pseudo-class when called in theme files (*.theme.scss).\n  *\n    Side note:\n    Currently, nb-install-component uses another approach where :host prepended with the theme name\n    (https://github.com/angular/angular/blob/5b96078624b0a4760f2dbcf6fdf0bd62791be5bb/packages/compiler/src/shadow_css.ts#L441),\n    but it was made to be able to use current realization of rtl and it can be rewritten back to\n    :host-context($theme) once we will be able to use multiple shadow selectors.\n  *\nBut when it's called in *.component.scss we can't be sure, that selector starts with :host/:host-context,\nbecause angular allows omitting pseudo-classes if we don't need to style :host component itself.\nWe can break such selectors, by just appending :host-context([dir=rtl]) to them.\n  ***\n    Possible solution\n    check if we in theme by some theme variables and if so append, otherwise nest like\n    @at-root :host-context([dir=rtl]) {\n      // add # to scss interpolation statement.\n      // it works in comments and we can't use it here\n      {&} {\n        @content;\n      }\n    }\n    What if :host specified? Can we add space in :host-context(...) :host?\n    Or maybe add :host selector anyway? If multiple :host selectors are allowed\n  ***\n\n\nProblems with the current approach.\n\n1. Direction can be applied only on document level, because mixin prepends theme class,\nwhich placed on the body.\n2. *.component.scss styles should be in :host selector. Otherwise angular will add host\nattribute to [dir=rtl] attribute as well.\n\n\nGeneral problems.\n\nLtr is default document direction, but for proper work of nb-ltr (means ltr only),\n[dir=ltr] should be specified at least somewhere. ':not([dir=rtl]' not applicable here,\nbecause it's satisfy any parent, that don't have [dir=rtl] attribute.\nPrevious approach was to use single rtl mixin and reset ltr properties to initial value.\nBut sometimes it's hard to find, what the previous value should be. And such mixin call looks too verbose.\n*/\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/*\n\nAccording to the specification (https://www.w3.org/TR/css-scoping-1/#host-selector)\n:host and :host-context are pseudo-classes. So we assume they could be combined,\nlike other pseudo-classes, even same ones.\nFor example: ':nth-of-type(2n):nth-of-type(even)'.\n\nIdeal solution would be to prepend any selector with :host-context([dir=rtl]).\nThen nebular components will behave as an html element and respond to [dir] attribute on any level,\nso direction could be overridden on any component level.\n\nImplementation code:\n\n@mixin nb-rtl() {\n  // add # to scss interpolation statement.\n  // it works in comments and we can't use it here\n  @at-root {selector-append(':host-context([dir=rtl])', &)} {\n    @content;\n  }\n}\n\nAnd when we call it somewhere:\n\n:host {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n:host-context(...) {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n\nResult will look like:\n\n:host-context([dir=rtl]):host .some-class {\n  ...\n}\n:host-context([dir=rtl]):host-context(...) .some-class {\n  ...\n}\n\n*\n  Side note:\n  :host-context():host selector are valid. https://lists.w3.org/Archives/Public/www-style/2015Feb/0305.html\n\n  :host-context([dir=rtl]):host-context(...) should match any permutation,\n  so order is not important.\n*\n\n\nCurrently, there're two problems with this approach:\n\nFirst, is that we can't combine :host, :host-context. Angular bugs #14349, #19199.\nFor the moment of writing, the only possible way is:\n:host {\n  :host-context(...) {\n    ...\n  }\n}\nIt doesn't work for us because mixin could be called somewhere deeper, like:\n:host {\n  p {\n    @include nb-rtl() { ... }\n  }\n}\nWe are not able to go up to :host level to place content passed to mixin.\n\nThe second problem is that we only can be sure that we appending :host-context([dir=rtl]) to another\n:host/:host-context pseudo-class when called in theme files (*.theme.scss).\n  *\n    Side note:\n    Currently, nb-install-component uses another approach where :host prepended with the theme name\n    (https://github.com/angular/angular/blob/5b96078624b0a4760f2dbcf6fdf0bd62791be5bb/packages/compiler/src/shadow_css.ts#L441),\n    but it was made to be able to use current realization of rtl and it can be rewritten back to\n    :host-context($theme) once we will be able to use multiple shadow selectors.\n  *\nBut when it's called in *.component.scss we can't be sure, that selector starts with :host/:host-context,\nbecause angular allows omitting pseudo-classes if we don't need to style :host component itself.\nWe can break such selectors, by just appending :host-context([dir=rtl]) to them.\n  ***\n    Possible solution\n    check if we in theme by some theme variables and if so append, otherwise nest like\n    @at-root :host-context([dir=rtl]) {\n      // add # to scss interpolation statement.\n      // it works in comments and we can't use it here\n      {&} {\n        @content;\n      }\n    }\n    What if :host specified? Can we add space in :host-context(...) :host?\n    Or maybe add :host selector anyway? If multiple :host selectors are allowed\n  ***\n\n\nProblems with the current approach.\n\n1. Direction can be applied only on document level, because mixin prepends theme class,\nwhich placed on the body.\n2. *.component.scss styles should be in :host selector. Otherwise angular will add host\nattribute to [dir=rtl] attribute as well.\n\n\nGeneral problems.\n\nLtr is default document direction, but for proper work of nb-ltr (means ltr only),\n[dir=ltr] should be specified at least somewhere. ':not([dir=rtl]' not applicable here,\nbecause it's satisfy any parent, that don't have [dir=rtl] attribute.\nPrevious approach was to use single rtl mixin and reset ltr properties to initial value.\nBut sometimes it's hard to find, what the previous value should be. And such mixin call looks too verbose.\n*/\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/*\n\nAccording to the specification (https://www.w3.org/TR/css-scoping-1/#host-selector)\n:host and :host-context are pseudo-classes. So we assume they could be combined,\nlike other pseudo-classes, even same ones.\nFor example: ':nth-of-type(2n):nth-of-type(even)'.\n\nIdeal solution would be to prepend any selector with :host-context([dir=rtl]).\nThen nebular components will behave as an html element and respond to [dir] attribute on any level,\nso direction could be overridden on any component level.\n\nImplementation code:\n\n@mixin nb-rtl() {\n  // add # to scss interpolation statement.\n  // it works in comments and we can't use it here\n  @at-root {selector-append(':host-context([dir=rtl])', &)} {\n    @content;\n  }\n}\n\nAnd when we call it somewhere:\n\n:host {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n:host-context(...) {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n\nResult will look like:\n\n:host-context([dir=rtl]):host .some-class {\n  ...\n}\n:host-context([dir=rtl]):host-context(...) .some-class {\n  ...\n}\n\n*\n  Side note:\n  :host-context():host selector are valid. https://lists.w3.org/Archives/Public/www-style/2015Feb/0305.html\n\n  :host-context([dir=rtl]):host-context(...) should match any permutation,\n  so order is not important.\n*\n\n\nCurrently, there're two problems with this approach:\n\nFirst, is that we can't combine :host, :host-context. Angular bugs #14349, #19199.\nFor the moment of writing, the only possible way is:\n:host {\n  :host-context(...) {\n    ...\n  }\n}\nIt doesn't work for us because mixin could be called somewhere deeper, like:\n:host {\n  p {\n    @include nb-rtl() { ... }\n  }\n}\nWe are not able to go up to :host level to place content passed to mixin.\n\nThe second problem is that we only can be sure that we appending :host-context([dir=rtl]) to another\n:host/:host-context pseudo-class when called in theme files (*.theme.scss).\n  *\n    Side note:\n    Currently, nb-install-component uses another approach where :host prepended with the theme name\n    (https://github.com/angular/angular/blob/5b96078624b0a4760f2dbcf6fdf0bd62791be5bb/packages/compiler/src/shadow_css.ts#L441),\n    but it was made to be able to use current realization of rtl and it can be rewritten back to\n    :host-context($theme) once we will be able to use multiple shadow selectors.\n  *\nBut when it's called in *.component.scss we can't be sure, that selector starts with :host/:host-context,\nbecause angular allows omitting pseudo-classes if we don't need to style :host component itself.\nWe can break such selectors, by just appending :host-context([dir=rtl]) to them.\n  ***\n    Possible solution\n    check if we in theme by some theme variables and if so append, otherwise nest like\n    @at-root :host-context([dir=rtl]) {\n      // add # to scss interpolation statement.\n      // it works in comments and we can't use it here\n      {&} {\n        @content;\n      }\n    }\n    What if :host specified? Can we add space in :host-context(...) :host?\n    Or maybe add :host selector anyway? If multiple :host selectors are allowed\n  ***\n\n\nProblems with the current approach.\n\n1. Direction can be applied only on document level, because mixin prepends theme class,\nwhich placed on the body.\n2. *.component.scss styles should be in :host selector. Otherwise angular will add host\nattribute to [dir=rtl] attribute as well.\n\n\nGeneral problems.\n\nLtr is default document direction, but for proper work of nb-ltr (means ltr only),\n[dir=ltr] should be specified at least somewhere. ':not([dir=rtl]' not applicable here,\nbecause it's satisfy any parent, that don't have [dir=rtl] attribute.\nPrevious approach was to use single rtl mixin and reset ltr properties to initial value.\nBut sometimes it's hard to find, what the previous value should be. And such mixin call looks too verbose.\n*/\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/*\n\nAccording to the specification (https://www.w3.org/TR/css-scoping-1/#host-selector)\n:host and :host-context are pseudo-classes. So we assume they could be combined,\nlike other pseudo-classes, even same ones.\nFor example: ':nth-of-type(2n):nth-of-type(even)'.\n\nIdeal solution would be to prepend any selector with :host-context([dir=rtl]).\nThen nebular components will behave as an html element and respond to [dir] attribute on any level,\nso direction could be overridden on any component level.\n\nImplementation code:\n\n@mixin nb-rtl() {\n  // add # to scss interpolation statement.\n  // it works in comments and we can't use it here\n  @at-root {selector-append(':host-context([dir=rtl])', &)} {\n    @content;\n  }\n}\n\nAnd when we call it somewhere:\n\n:host {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n:host-context(...) {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n\nResult will look like:\n\n:host-context([dir=rtl]):host .some-class {\n  ...\n}\n:host-context([dir=rtl]):host-context(...) .some-class {\n  ...\n}\n\n*\n  Side note:\n  :host-context():host selector are valid. https://lists.w3.org/Archives/Public/www-style/2015Feb/0305.html\n\n  :host-context([dir=rtl]):host-context(...) should match any permutation,\n  so order is not important.\n*\n\n\nCurrently, there're two problems with this approach:\n\nFirst, is that we can't combine :host, :host-context. Angular bugs #14349, #19199.\nFor the moment of writing, the only possible way is:\n:host {\n  :host-context(...) {\n    ...\n  }\n}\nIt doesn't work for us because mixin could be called somewhere deeper, like:\n:host {\n  p {\n    @include nb-rtl() { ... }\n  }\n}\nWe are not able to go up to :host level to place content passed to mixin.\n\nThe second problem is that we only can be sure that we appending :host-context([dir=rtl]) to another\n:host/:host-context pseudo-class when called in theme files (*.theme.scss).\n  *\n    Side note:\n    Currently, nb-install-component uses another approach where :host prepended with the theme name\n    (https://github.com/angular/angular/blob/5b96078624b0a4760f2dbcf6fdf0bd62791be5bb/packages/compiler/src/shadow_css.ts#L441),\n    but it was made to be able to use current realization of rtl and it can be rewritten back to\n    :host-context($theme) once we will be able to use multiple shadow selectors.\n  *\nBut when it's called in *.component.scss we can't be sure, that selector starts with :host/:host-context,\nbecause angular allows omitting pseudo-classes if we don't need to style :host component itself.\nWe can break such selectors, by just appending :host-context([dir=rtl]) to them.\n  ***\n    Possible solution\n    check if we in theme by some theme variables and if so append, otherwise nest like\n    @at-root :host-context([dir=rtl]) {\n      // add # to scss interpolation statement.\n      // it works in comments and we can't use it here\n      {&} {\n        @content;\n      }\n    }\n    What if :host specified? Can we add space in :host-context(...) :host?\n    Or maybe add :host selector anyway? If multiple :host selectors are allowed\n  ***\n\n\nProblems with the current approach.\n\n1. Direction can be applied only on document level, because mixin prepends theme class,\nwhich placed on the body.\n2. *.component.scss styles should be in :host selector. Otherwise angular will add host\nattribute to [dir=rtl] attribute as well.\n\n\nGeneral problems.\n\nLtr is default document direction, but for proper work of nb-ltr (means ltr only),\n[dir=ltr] should be specified at least somewhere. ':not([dir=rtl]' not applicable here,\nbecause it's satisfy any parent, that don't have [dir=rtl] attribute.\nPrevious approach was to use single rtl mixin and reset ltr properties to initial value.\nBut sometimes it's hard to find, what the previous value should be. And such mixin call looks too verbose.\n*/\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/*\n\nAccording to the specification (https://www.w3.org/TR/css-scoping-1/#host-selector)\n:host and :host-context are pseudo-classes. So we assume they could be combined,\nlike other pseudo-classes, even same ones.\nFor example: ':nth-of-type(2n):nth-of-type(even)'.\n\nIdeal solution would be to prepend any selector with :host-context([dir=rtl]).\nThen nebular components will behave as an html element and respond to [dir] attribute on any level,\nso direction could be overridden on any component level.\n\nImplementation code:\n\n@mixin nb-rtl() {\n  // add # to scss interpolation statement.\n  // it works in comments and we can't use it here\n  @at-root {selector-append(':host-context([dir=rtl])', &)} {\n    @content;\n  }\n}\n\nAnd when we call it somewhere:\n\n:host {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n:host-context(...) {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n\nResult will look like:\n\n:host-context([dir=rtl]):host .some-class {\n  ...\n}\n:host-context([dir=rtl]):host-context(...) .some-class {\n  ...\n}\n\n*\n  Side note:\n  :host-context():host selector are valid. https://lists.w3.org/Archives/Public/www-style/2015Feb/0305.html\n\n  :host-context([dir=rtl]):host-context(...) should match any permutation,\n  so order is not important.\n*\n\n\nCurrently, there're two problems with this approach:\n\nFirst, is that we can't combine :host, :host-context. Angular bugs #14349, #19199.\nFor the moment of writing, the only possible way is:\n:host {\n  :host-context(...) {\n    ...\n  }\n}\nIt doesn't work for us because mixin could be called somewhere deeper, like:\n:host {\n  p {\n    @include nb-rtl() { ... }\n  }\n}\nWe are not able to go up to :host level to place content passed to mixin.\n\nThe second problem is that we only can be sure that we appending :host-context([dir=rtl]) to another\n:host/:host-context pseudo-class when called in theme files (*.theme.scss).\n  *\n    Side note:\n    Currently, nb-install-component uses another approach where :host prepended with the theme name\n    (https://github.com/angular/angular/blob/5b96078624b0a4760f2dbcf6fdf0bd62791be5bb/packages/compiler/src/shadow_css.ts#L441),\n    but it was made to be able to use current realization of rtl and it can be rewritten back to\n    :host-context($theme) once we will be able to use multiple shadow selectors.\n  *\nBut when it's called in *.component.scss we can't be sure, that selector starts with :host/:host-context,\nbecause angular allows omitting pseudo-classes if we don't need to style :host component itself.\nWe can break such selectors, by just appending :host-context([dir=rtl]) to them.\n  ***\n    Possible solution\n    check if we in theme by some theme variables and if so append, otherwise nest like\n    @at-root :host-context([dir=rtl]) {\n      // add # to scss interpolation statement.\n      // it works in comments and we can't use it here\n      {&} {\n        @content;\n      }\n    }\n    What if :host specified? Can we add space in :host-context(...) :host?\n    Or maybe add :host selector anyway? If multiple :host selectors are allowed\n  ***\n\n\nProblems with the current approach.\n\n1. Direction can be applied only on document level, because mixin prepends theme class,\nwhich placed on the body.\n2. *.component.scss styles should be in :host selector. Otherwise angular will add host\nattribute to [dir=rtl] attribute as well.\n\n\nGeneral problems.\n\nLtr is default document direction, but for proper work of nb-ltr (means ltr only),\n[dir=ltr] should be specified at least somewhere. ':not([dir=rtl]' not applicable here,\nbecause it's satisfy any parent, that don't have [dir=rtl] attribute.\nPrevious approach was to use single rtl mixin and reset ltr properties to initial value.\nBut sometimes it's hard to find, what the previous value should be. And such mixin call looks too verbose.\n*/\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/*\n\nAccording to the specification (https://www.w3.org/TR/css-scoping-1/#host-selector)\n:host and :host-context are pseudo-classes. So we assume they could be combined,\nlike other pseudo-classes, even same ones.\nFor example: ':nth-of-type(2n):nth-of-type(even)'.\n\nIdeal solution would be to prepend any selector with :host-context([dir=rtl]).\nThen nebular components will behave as an html element and respond to [dir] attribute on any level,\nso direction could be overridden on any component level.\n\nImplementation code:\n\n@mixin nb-rtl() {\n  // add # to scss interpolation statement.\n  // it works in comments and we can't use it here\n  @at-root {selector-append(':host-context([dir=rtl])', &)} {\n    @content;\n  }\n}\n\nAnd when we call it somewhere:\n\n:host {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n:host-context(...) {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n\nResult will look like:\n\n:host-context([dir=rtl]):host .some-class {\n  ...\n}\n:host-context([dir=rtl]):host-context(...) .some-class {\n  ...\n}\n\n*\n  Side note:\n  :host-context():host selector are valid. https://lists.w3.org/Archives/Public/www-style/2015Feb/0305.html\n\n  :host-context([dir=rtl]):host-context(...) should match any permutation,\n  so order is not important.\n*\n\n\nCurrently, there're two problems with this approach:\n\nFirst, is that we can't combine :host, :host-context. Angular bugs #14349, #19199.\nFor the moment of writing, the only possible way is:\n:host {\n  :host-context(...) {\n    ...\n  }\n}\nIt doesn't work for us because mixin could be called somewhere deeper, like:\n:host {\n  p {\n    @include nb-rtl() { ... }\n  }\n}\nWe are not able to go up to :host level to place content passed to mixin.\n\nThe second problem is that we only can be sure that we appending :host-context([dir=rtl]) to another\n:host/:host-context pseudo-class when called in theme files (*.theme.scss).\n  *\n    Side note:\n    Currently, nb-install-component uses another approach where :host prepended with the theme name\n    (https://github.com/angular/angular/blob/5b96078624b0a4760f2dbcf6fdf0bd62791be5bb/packages/compiler/src/shadow_css.ts#L441),\n    but it was made to be able to use current realization of rtl and it can be rewritten back to\n    :host-context($theme) once we will be able to use multiple shadow selectors.\n  *\nBut when it's called in *.component.scss we can't be sure, that selector starts with :host/:host-context,\nbecause angular allows omitting pseudo-classes if we don't need to style :host component itself.\nWe can break such selectors, by just appending :host-context([dir=rtl]) to them.\n  ***\n    Possible solution\n    check if we in theme by some theme variables and if so append, otherwise nest like\n    @at-root :host-context([dir=rtl]) {\n      // add # to scss interpolation statement.\n      // it works in comments and we can't use it here\n      {&} {\n        @content;\n      }\n    }\n    What if :host specified? Can we add space in :host-context(...) :host?\n    Or maybe add :host selector anyway? If multiple :host selectors are allowed\n  ***\n\n\nProblems with the current approach.\n\n1. Direction can be applied only on document level, because mixin prepends theme class,\nwhich placed on the body.\n2. *.component.scss styles should be in :host selector. Otherwise angular will add host\nattribute to [dir=rtl] attribute as well.\n\n\nGeneral problems.\n\nLtr is default document direction, but for proper work of nb-ltr (means ltr only),\n[dir=ltr] should be specified at least somewhere. ':not([dir=rtl]' not applicable here,\nbecause it's satisfy any parent, that don't have [dir=rtl] attribute.\nPrevious approach was to use single rtl mixin and reset ltr properties to initial value.\nBut sometimes it's hard to find, what the previous value should be. And such mixin call looks too verbose.\n*/\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/*\n\nAccording to the specification (https://www.w3.org/TR/css-scoping-1/#host-selector)\n:host and :host-context are pseudo-classes. So we assume they could be combined,\nlike other pseudo-classes, even same ones.\nFor example: ':nth-of-type(2n):nth-of-type(even)'.\n\nIdeal solution would be to prepend any selector with :host-context([dir=rtl]).\nThen nebular components will behave as an html element and respond to [dir] attribute on any level,\nso direction could be overridden on any component level.\n\nImplementation code:\n\n@mixin nb-rtl() {\n  // add # to scss interpolation statement.\n  // it works in comments and we can't use it here\n  @at-root {selector-append(':host-context([dir=rtl])', &)} {\n    @content;\n  }\n}\n\nAnd when we call it somewhere:\n\n:host {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n:host-context(...) {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n\nResult will look like:\n\n:host-context([dir=rtl]):host .some-class {\n  ...\n}\n:host-context([dir=rtl]):host-context(...) .some-class {\n  ...\n}\n\n*\n  Side note:\n  :host-context():host selector are valid. https://lists.w3.org/Archives/Public/www-style/2015Feb/0305.html\n\n  :host-context([dir=rtl]):host-context(...) should match any permutation,\n  so order is not important.\n*\n\n\nCurrently, there're two problems with this approach:\n\nFirst, is that we can't combine :host, :host-context. Angular bugs #14349, #19199.\nFor the moment of writing, the only possible way is:\n:host {\n  :host-context(...) {\n    ...\n  }\n}\nIt doesn't work for us because mixin could be called somewhere deeper, like:\n:host {\n  p {\n    @include nb-rtl() { ... }\n  }\n}\nWe are not able to go up to :host level to place content passed to mixin.\n\nThe second problem is that we only can be sure that we appending :host-context([dir=rtl]) to another\n:host/:host-context pseudo-class when called in theme files (*.theme.scss).\n  *\n    Side note:\n    Currently, nb-install-component uses another approach where :host prepended with the theme name\n    (https://github.com/angular/angular/blob/5b96078624b0a4760f2dbcf6fdf0bd62791be5bb/packages/compiler/src/shadow_css.ts#L441),\n    but it was made to be able to use current realization of rtl and it can be rewritten back to\n    :host-context($theme) once we will be able to use multiple shadow selectors.\n  *\nBut when it's called in *.component.scss we can't be sure, that selector starts with :host/:host-context,\nbecause angular allows omitting pseudo-classes if we don't need to style :host component itself.\nWe can break such selectors, by just appending :host-context([dir=rtl]) to them.\n  ***\n    Possible solution\n    check if we in theme by some theme variables and if so append, otherwise nest like\n    @at-root :host-context([dir=rtl]) {\n      // add # to scss interpolation statement.\n      // it works in comments and we can't use it here\n      {&} {\n        @content;\n      }\n    }\n    What if :host specified? Can we add space in :host-context(...) :host?\n    Or maybe add :host selector anyway? If multiple :host selectors are allowed\n  ***\n\n\nProblems with the current approach.\n\n1. Direction can be applied only on document level, because mixin prepends theme class,\nwhich placed on the body.\n2. *.component.scss styles should be in :host selector. Otherwise angular will add host\nattribute to [dir=rtl] attribute as well.\n\n\nGeneral problems.\n\nLtr is default document direction, but for proper work of nb-ltr (means ltr only),\n[dir=ltr] should be specified at least somewhere. ':not([dir=rtl]' not applicable here,\nbecause it's satisfy any parent, that don't have [dir=rtl] attribute.\nPrevious approach was to use single rtl mixin and reset ltr properties to initial value.\nBut sometimes it's hard to find, what the previous value should be. And such mixin call looks too verbose.\n*/\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/*\n\nAccording to the specification (https://www.w3.org/TR/css-scoping-1/#host-selector)\n:host and :host-context are pseudo-classes. So we assume they could be combined,\nlike other pseudo-classes, even same ones.\nFor example: ':nth-of-type(2n):nth-of-type(even)'.\n\nIdeal solution would be to prepend any selector with :host-context([dir=rtl]).\nThen nebular components will behave as an html element and respond to [dir] attribute on any level,\nso direction could be overridden on any component level.\n\nImplementation code:\n\n@mixin nb-rtl() {\n  // add # to scss interpolation statement.\n  // it works in comments and we can't use it here\n  @at-root {selector-append(':host-context([dir=rtl])', &)} {\n    @content;\n  }\n}\n\nAnd when we call it somewhere:\n\n:host {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n:host-context(...) {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n\nResult will look like:\n\n:host-context([dir=rtl]):host .some-class {\n  ...\n}\n:host-context([dir=rtl]):host-context(...) .some-class {\n  ...\n}\n\n*\n  Side note:\n  :host-context():host selector are valid. https://lists.w3.org/Archives/Public/www-style/2015Feb/0305.html\n\n  :host-context([dir=rtl]):host-context(...) should match any permutation,\n  so order is not important.\n*\n\n\nCurrently, there're two problems with this approach:\n\nFirst, is that we can't combine :host, :host-context. Angular bugs #14349, #19199.\nFor the moment of writing, the only possible way is:\n:host {\n  :host-context(...) {\n    ...\n  }\n}\nIt doesn't work for us because mixin could be called somewhere deeper, like:\n:host {\n  p {\n    @include nb-rtl() { ... }\n  }\n}\nWe are not able to go up to :host level to place content passed to mixin.\n\nThe second problem is that we only can be sure that we appending :host-context([dir=rtl]) to another\n:host/:host-context pseudo-class when called in theme files (*.theme.scss).\n  *\n    Side note:\n    Currently, nb-install-component uses another approach where :host prepended with the theme name\n    (https://github.com/angular/angular/blob/5b96078624b0a4760f2dbcf6fdf0bd62791be5bb/packages/compiler/src/shadow_css.ts#L441),\n    but it was made to be able to use current realization of rtl and it can be rewritten back to\n    :host-context($theme) once we will be able to use multiple shadow selectors.\n  *\nBut when it's called in *.component.scss we can't be sure, that selector starts with :host/:host-context,\nbecause angular allows omitting pseudo-classes if we don't need to style :host component itself.\nWe can break such selectors, by just appending :host-context([dir=rtl]) to them.\n  ***\n    Possible solution\n    check if we in theme by some theme variables and if so append, otherwise nest like\n    @at-root :host-context([dir=rtl]) {\n      // add # to scss interpolation statement.\n      // it works in comments and we can't use it here\n      {&} {\n        @content;\n      }\n    }\n    What if :host specified? Can we add space in :host-context(...) :host?\n    Or maybe add :host selector anyway? If multiple :host selectors are allowed\n  ***\n\n\nProblems with the current approach.\n\n1. Direction can be applied only on document level, because mixin prepends theme class,\nwhich placed on the body.\n2. *.component.scss styles should be in :host selector. Otherwise angular will add host\nattribute to [dir=rtl] attribute as well.\n\n\nGeneral problems.\n\nLtr is default document direction, but for proper work of nb-ltr (means ltr only),\n[dir=ltr] should be specified at least somewhere. ':not([dir=rtl]' not applicable here,\nbecause it's satisfy any parent, that don't have [dir=rtl] attribute.\nPrevious approach was to use single rtl mixin and reset ltr properties to initial value.\nBut sometimes it's hard to find, what the previous value should be. And such mixin call looks too verbose.\n*/\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/*\n\nAccording to the specification (https://www.w3.org/TR/css-scoping-1/#host-selector)\n:host and :host-context are pseudo-classes. So we assume they could be combined,\nlike other pseudo-classes, even same ones.\nFor example: ':nth-of-type(2n):nth-of-type(even)'.\n\nIdeal solution would be to prepend any selector with :host-context([dir=rtl]).\nThen nebular components will behave as an html element and respond to [dir] attribute on any level,\nso direction could be overridden on any component level.\n\nImplementation code:\n\n@mixin nb-rtl() {\n  // add # to scss interpolation statement.\n  // it works in comments and we can't use it here\n  @at-root {selector-append(':host-context([dir=rtl])', &)} {\n    @content;\n  }\n}\n\nAnd when we call it somewhere:\n\n:host {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n:host-context(...) {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n\nResult will look like:\n\n:host-context([dir=rtl]):host .some-class {\n  ...\n}\n:host-context([dir=rtl]):host-context(...) .some-class {\n  ...\n}\n\n*\n  Side note:\n  :host-context():host selector are valid. https://lists.w3.org/Archives/Public/www-style/2015Feb/0305.html\n\n  :host-context([dir=rtl]):host-context(...) should match any permutation,\n  so order is not important.\n*\n\n\nCurrently, there're two problems with this approach:\n\nFirst, is that we can't combine :host, :host-context. Angular bugs #14349, #19199.\nFor the moment of writing, the only possible way is:\n:host {\n  :host-context(...) {\n    ...\n  }\n}\nIt doesn't work for us because mixin could be called somewhere deeper, like:\n:host {\n  p {\n    @include nb-rtl() { ... }\n  }\n}\nWe are not able to go up to :host level to place content passed to mixin.\n\nThe second problem is that we only can be sure that we appending :host-context([dir=rtl]) to another\n:host/:host-context pseudo-class when called in theme files (*.theme.scss).\n  *\n    Side note:\n    Currently, nb-install-component uses another approach where :host prepended with the theme name\n    (https://github.com/angular/angular/blob/5b96078624b0a4760f2dbcf6fdf0bd62791be5bb/packages/compiler/src/shadow_css.ts#L441),\n    but it was made to be able to use current realization of rtl and it can be rewritten back to\n    :host-context($theme) once we will be able to use multiple shadow selectors.\n  *\nBut when it's called in *.component.scss we can't be sure, that selector starts with :host/:host-context,\nbecause angular allows omitting pseudo-classes if we don't need to style :host component itself.\nWe can break such selectors, by just appending :host-context([dir=rtl]) to them.\n  ***\n    Possible solution\n    check if we in theme by some theme variables and if so append, otherwise nest like\n    @at-root :host-context([dir=rtl]) {\n      // add # to scss interpolation statement.\n      // it works in comments and we can't use it here\n      {&} {\n        @content;\n      }\n    }\n    What if :host specified? Can we add space in :host-context(...) :host?\n    Or maybe add :host selector anyway? If multiple :host selectors are allowed\n  ***\n\n\nProblems with the current approach.\n\n1. Direction can be applied only on document level, because mixin prepends theme class,\nwhich placed on the body.\n2. *.component.scss styles should be in :host selector. Otherwise angular will add host\nattribute to [dir=rtl] attribute as well.\n\n\nGeneral problems.\n\nLtr is default document direction, but for proper work of nb-ltr (means ltr only),\n[dir=ltr] should be specified at least somewhere. ':not([dir=rtl]' not applicable here,\nbecause it's satisfy any parent, that don't have [dir=rtl] attribute.\nPrevious approach was to use single rtl mixin and reset ltr properties to initial value.\nBut sometimes it's hard to find, what the previous value should be. And such mixin call looks too verbose.\n*/\n/*\n  :host can be prefixed\n  https://github.com/angular/angular/blob/8d0ee34939f14c07876d222c25b405ed458a34d3/packages/compiler/src/shadow_css.ts#L441\n\n  We have to use :host instead of :host-context($theme), to be able to prefix theme class\n  with something defined inside of @content, by prefixing &.\n  For example this scss code:\n    .nb-theme-default {\n      .some-selector & {\n        ...\n      }\n    }\n  Will result in next css:\n    .some-selector .nb-theme-default {\n      ...\n    }\n\n  It doesn't work with :host-context because angular splitting it in two selectors and removes\n  prefix in one of the selectors.\n*/\n.nb-theme-default :host nb-accordion {\n  box-shadow: none;\n  border-radius: none;\n}\n/*\n  :host can be prefixed\n  https://github.com/angular/angular/blob/8d0ee34939f14c07876d222c25b405ed458a34d3/packages/compiler/src/shadow_css.ts#L441\n\n  We have to use :host instead of :host-context($theme), to be able to prefix theme class\n  with something defined inside of @content, by prefixing &.\n  For example this scss code:\n    .nb-theme-default {\n      .some-selector & {\n        ...\n      }\n    }\n  Will result in next css:\n    .some-selector .nb-theme-default {\n      ...\n    }\n\n  It doesn't work with :host-context because angular splitting it in two selectors and removes\n  prefix in one of the selectors.\n*/\n.nb-theme-dark :host nb-accordion {\n  box-shadow: none;\n  border-radius: none;\n}\n/*\n  :host can be prefixed\n  https://github.com/angular/angular/blob/8d0ee34939f14c07876d222c25b405ed458a34d3/packages/compiler/src/shadow_css.ts#L441\n\n  We have to use :host instead of :host-context($theme), to be able to prefix theme class\n  with something defined inside of @content, by prefixing &.\n  For example this scss code:\n    .nb-theme-default {\n      .some-selector & {\n        ...\n      }\n    }\n  Will result in next css:\n    .some-selector .nb-theme-default {\n      ...\n    }\n\n  It doesn't work with :host-context because angular splitting it in two selectors and removes\n  prefix in one of the selectors.\n*/\n.nb-theme-cosmic :host nb-accordion {\n  box-shadow: none;\n  border-radius: none;\n}\n/*\n  :host can be prefixed\n  https://github.com/angular/angular/blob/8d0ee34939f14c07876d222c25b405ed458a34d3/packages/compiler/src/shadow_css.ts#L441\n\n  We have to use :host instead of :host-context($theme), to be able to prefix theme class\n  with something defined inside of @content, by prefixing &.\n  For example this scss code:\n    .nb-theme-default {\n      .some-selector & {\n        ...\n      }\n    }\n  Will result in next css:\n    .some-selector .nb-theme-default {\n      ...\n    }\n\n  It doesn't work with :host-context because angular splitting it in two selectors and removes\n  prefix in one of the selectors.\n*/\n.nb-theme-corporate :host nb-accordion {\n  box-shadow: none;\n  border-radius: none;\n}\n.container {\n  min-width: 1080px;\n}\n.container .row {\n  margin-top: 5px;\n  margin-bottom: 5px;\n}"

/***/ }),

/***/ "../nx-charts/src/lib/smart-filter/value-help-dialog/value-help-dialog.component.ts":
/*!******************************************************************************************!*\
  !*** ../nx-charts/src/lib/smart-filter/value-help-dialog/value-help-dialog.component.ts ***!
  \******************************************************************************************/
/*! exports provided: NxValueHelpDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NxValueHelpDialogComponent", function() { return NxValueHelpDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nebular/theme */ "../../node_modules/@nebular/theme/fesm5/index.js");
/* harmony import */ var _core_model_filter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/model/filter */ "../nx-charts/src/lib/core/model/filter.ts");




/**
 * The ValueHelpDialog component can be used to implement a value help for an input field.
 */
var NxValueHelpDialogComponent = /** @class */ (function () {
    function NxValueHelpDialogComponent(ref) {
        this.ref = ref;
        this.conditions = {
            includes: [],
            excludes: []
        };
        this.filterOperators = _core_model_filter__WEBPACK_IMPORTED_MODULE_3__["FilterOperator"];
    }
    NxValueHelpDialogComponent.prototype.ngOnInit = function () {
        this.conditions.includes.push(new _core_model_filter__WEBPACK_IMPORTED_MODULE_3__["Filter"]({
            path: this.control,
            operator: _core_model_filter__WEBPACK_IMPORTED_MODULE_3__["FilterOperator"].EQ
        }));
        this.conditions.excludes.push(new _core_model_filter__WEBPACK_IMPORTED_MODULE_3__["Filter"]({
            path: this.control,
            operator: _core_model_filter__WEBPACK_IMPORTED_MODULE_3__["FilterOperator"].EQ
        }));
    };
    NxValueHelpDialogComponent.prototype.addCondition = function (includes) {
        includes.push(new _core_model_filter__WEBPACK_IMPORTED_MODULE_3__["Filter"]({
            path: this.control,
            operator: _core_model_filter__WEBPACK_IMPORTED_MODULE_3__["FilterOperator"].EQ
        }));
    };
    NxValueHelpDialogComponent.prototype.cancel = function () {
        this.ref.close();
    };
    NxValueHelpDialogComponent.prototype.submit = function () {
        this.ref.close(this.conditions);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], NxValueHelpDialogComponent.prototype, "control", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], NxValueHelpDialogComponent.prototype, "conditions", void 0);
    NxValueHelpDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'nx-value-help-dialog',
            template: __webpack_require__(/*! raw-loader!./value-help-dialog.component.html */ "../../node_modules/raw-loader/index.js!../nx-charts/src/lib/smart-filter/value-help-dialog/value-help-dialog.component.html"),
            styles: [__webpack_require__(/*! ./value-help-dialog.component.scss */ "../nx-charts/src/lib/smart-filter/value-help-dialog/value-help-dialog.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbDialogRef"]])
    ], NxValueHelpDialogComponent);
    return NxValueHelpDialogComponent;
}());



/***/ }),

/***/ "../nx-charts/src/lib/smart-table/smart-table.component.scss":
/*!*******************************************************************!*\
  !*** ../nx-charts/src/lib/smart-table/smart-table.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "../nx-charts/src/lib/smart-table/smart-table.component.ts":
/*!*****************************************************************!*\
  !*** ../nx-charts/src/lib/smart-table/smart-table.component.ts ***!
  \*****************************************************************/
/*! exports provided: NxSmartTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NxSmartTableComponent", function() { return NxSmartTableComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");


var NxSmartTableComponent = /** @class */ (function () {
    function NxSmartTableComponent() {
    }
    NxSmartTableComponent.prototype.ngOnInit = function () {
    };
    NxSmartTableComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'nx-smart-table',
            template: __webpack_require__(/*! raw-loader!./smart-table.component.html */ "../../node_modules/raw-loader/index.js!../nx-charts/src/lib/smart-table/smart-table.component.html"),
            styles: [__webpack_require__(/*! ./smart-table.component.scss */ "../nx-charts/src/lib/smart-table/smart-table.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NxSmartTableComponent);
    return NxSmartTableComponent;
}());



/***/ }),

/***/ "../nx-charts/src/lib/smart-table/smart-table.module.ts":
/*!**************************************************************!*\
  !*** ../nx-charts/src/lib/smart-table/smart-table.module.ts ***!
  \**************************************************************/
/*! exports provided: NxSmartTableModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NxSmartTableModule", function() { return NxSmartTableModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _smart_table_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./smart-table.component */ "../nx-charts/src/lib/smart-table/smart-table.component.ts");




var NxSmartTableModule = /** @class */ (function () {
    function NxSmartTableModule() {
    }
    NxSmartTableModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_smart_table_component__WEBPACK_IMPORTED_MODULE_3__["NxSmartTableComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
            ],
            exports: [_smart_table_component__WEBPACK_IMPORTED_MODULE_3__["NxSmartTableComponent"]]
        })
    ], NxSmartTableModule);
    return NxSmartTableModule;
}());



/***/ }),

/***/ "../nx-charts/src/public-api.ts":
/*!**************************************!*\
  !*** ../nx-charts/src/public-api.ts ***!
  \**************************************/
/*! exports provided: NxChartService, mergeDeep, NxChartComponent, abbreviateNumber, NxSmartChartsComponent, NxSmartTableComponent, NxChartModule, NxSmartChartsModule, NxSmartTableModule, NxSmartFilterBarComponent, NxSmartFilterModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_nx_charts_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/nx-charts.service */ "../nx-charts/src/lib/nx-charts.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NxChartService", function() { return _lib_nx_charts_service__WEBPACK_IMPORTED_MODULE_0__["NxChartService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mergeDeep", function() { return _lib_nx_charts_service__WEBPACK_IMPORTED_MODULE_0__["mergeDeep"]; });

/* harmony import */ var _lib_nx_chart_nx_chart_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/nx-chart/nx-chart.component */ "../nx-charts/src/lib/nx-chart/nx-chart.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NxChartComponent", function() { return _lib_nx_chart_nx_chart_component__WEBPACK_IMPORTED_MODULE_1__["NxChartComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "abbreviateNumber", function() { return _lib_nx_chart_nx_chart_component__WEBPACK_IMPORTED_MODULE_1__["abbreviateNumber"]; });

/* harmony import */ var _lib_smart_charts_smart_charts_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/smart-charts/smart-charts.component */ "../nx-charts/src/lib/smart-charts/smart-charts.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NxSmartChartsComponent", function() { return _lib_smart_charts_smart_charts_component__WEBPACK_IMPORTED_MODULE_2__["NxSmartChartsComponent"]; });

/* harmony import */ var _lib_smart_table_smart_table_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lib/smart-table/smart-table.component */ "../nx-charts/src/lib/smart-table/smart-table.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NxSmartTableComponent", function() { return _lib_smart_table_smart_table_component__WEBPACK_IMPORTED_MODULE_3__["NxSmartTableComponent"]; });

/* harmony import */ var _lib_nx_chart_nx_chart_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lib/nx-chart/nx-chart.module */ "../nx-charts/src/lib/nx-chart/nx-chart.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NxChartModule", function() { return _lib_nx_chart_nx_chart_module__WEBPACK_IMPORTED_MODULE_4__["NxChartModule"]; });

/* harmony import */ var _lib_smart_charts_smart_charts_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lib/smart-charts/smart-charts.module */ "../nx-charts/src/lib/smart-charts/smart-charts.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NxSmartChartsModule", function() { return _lib_smart_charts_smart_charts_module__WEBPACK_IMPORTED_MODULE_5__["NxSmartChartsModule"]; });

/* harmony import */ var _lib_smart_table_smart_table_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./lib/smart-table/smart-table.module */ "../nx-charts/src/lib/smart-table/smart-table.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NxSmartTableModule", function() { return _lib_smart_table_smart_table_module__WEBPACK_IMPORTED_MODULE_6__["NxSmartTableModule"]; });

/* harmony import */ var _lib_smart_filter_smart_filter_bar_smart_filter_bar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./lib/smart-filter/smart-filter-bar/smart-filter-bar.component */ "../nx-charts/src/lib/smart-filter/smart-filter-bar/smart-filter-bar.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NxSmartFilterBarComponent", function() { return _lib_smart_filter_smart_filter_bar_smart_filter_bar_component__WEBPACK_IMPORTED_MODULE_7__["NxSmartFilterBarComponent"]; });

/* harmony import */ var _lib_smart_filter_smart_filter_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./lib/smart-filter/smart-filter.module */ "../nx-charts/src/lib/smart-filter/smart-filter.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NxSmartFilterModule", function() { return _lib_smart_filter_smart_filter_module__WEBPACK_IMPORTED_MODULE_8__["NxSmartFilterModule"]; });

/*
 * Public API Surface of ngx-sap-charts
 */











/***/ }),

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/@theme/components/header/header.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/@theme/components/header/header.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*!\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/*\n  Declare variables before making them global.\n  dart-sass doesn't allow to declare variable with !global.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/*\n\nAccording to the specification (https://www.w3.org/TR/css-scoping-1/#host-selector)\n:host and :host-context are pseudo-classes. So we assume they could be combined,\nlike other pseudo-classes, even same ones.\nFor example: ':nth-of-type(2n):nth-of-type(even)'.\n\nIdeal solution would be to prepend any selector with :host-context([dir=rtl]).\nThen nebular components will behave as an html element and respond to [dir] attribute on any level,\nso direction could be overridden on any component level.\n\nImplementation code:\n\n@mixin nb-rtl() {\n  // add # to scss interpolation statement.\n  // it works in comments and we can't use it here\n  @at-root {selector-append(':host-context([dir=rtl])', &)} {\n    @content;\n  }\n}\n\nAnd when we call it somewhere:\n\n:host {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n:host-context(...) {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n\nResult will look like:\n\n:host-context([dir=rtl]):host .some-class {\n  ...\n}\n:host-context([dir=rtl]):host-context(...) .some-class {\n  ...\n}\n\n*\n  Side note:\n  :host-context():host selector are valid. https://lists.w3.org/Archives/Public/www-style/2015Feb/0305.html\n\n  :host-context([dir=rtl]):host-context(...) should match any permutation,\n  so order is not important.\n*\n\n\nCurrently, there're two problems with this approach:\n\nFirst, is that we can't combine :host, :host-context. Angular bugs #14349, #19199.\nFor the moment of writing, the only possible way is:\n:host {\n  :host-context(...) {\n    ...\n  }\n}\nIt doesn't work for us because mixin could be called somewhere deeper, like:\n:host {\n  p {\n    @include nb-rtl() { ... }\n  }\n}\nWe are not able to go up to :host level to place content passed to mixin.\n\nThe second problem is that we only can be sure that we appending :host-context([dir=rtl]) to another\n:host/:host-context pseudo-class when called in theme files (*.theme.scss).\n  *\n    Side note:\n    Currently, nb-install-component uses another approach where :host prepended with the theme name\n    (https://github.com/angular/angular/blob/5b96078624b0a4760f2dbcf6fdf0bd62791be5bb/packages/compiler/src/shadow_css.ts#L441),\n    but it was made to be able to use current realization of rtl and it can be rewritten back to\n    :host-context($theme) once we will be able to use multiple shadow selectors.\n  *\nBut when it's called in *.component.scss we can't be sure, that selector starts with :host/:host-context,\nbecause angular allows omitting pseudo-classes if we don't need to style :host component itself.\nWe can break such selectors, by just appending :host-context([dir=rtl]) to them.\n  ***\n    Possible solution\n    check if we in theme by some theme variables and if so append, otherwise nest like\n    @at-root :host-context([dir=rtl]) {\n      // add # to scss interpolation statement.\n      // it works in comments and we can't use it here\n      {&} {\n        @content;\n      }\n    }\n    What if :host specified? Can we add space in :host-context(...) :host?\n    Or maybe add :host selector anyway? If multiple :host selectors are allowed\n  ***\n\n\nProblems with the current approach.\n\n1. Direction can be applied only on document level, because mixin prepends theme class,\nwhich placed on the body.\n2. *.component.scss styles should be in :host selector. Otherwise angular will add host\nattribute to [dir=rtl] attribute as well.\n\n\nGeneral problems.\n\nLtr is default document direction, but for proper work of nb-ltr (means ltr only),\n[dir=ltr] should be specified at least somewhere. ':not([dir=rtl]' not applicable here,\nbecause it's satisfy any parent, that don't have [dir=rtl] attribute.\nPrevious approach was to use single rtl mixin and reset ltr properties to initial value.\nBut sometimes it's hard to find, what the previous value should be. And such mixin call looks too verbose.\n*/\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/*\n\nAccording to the specification (https://www.w3.org/TR/css-scoping-1/#host-selector)\n:host and :host-context are pseudo-classes. So we assume they could be combined,\nlike other pseudo-classes, even same ones.\nFor example: ':nth-of-type(2n):nth-of-type(even)'.\n\nIdeal solution would be to prepend any selector with :host-context([dir=rtl]).\nThen nebular components will behave as an html element and respond to [dir] attribute on any level,\nso direction could be overridden on any component level.\n\nImplementation code:\n\n@mixin nb-rtl() {\n  // add # to scss interpolation statement.\n  // it works in comments and we can't use it here\n  @at-root {selector-append(':host-context([dir=rtl])', &)} {\n    @content;\n  }\n}\n\nAnd when we call it somewhere:\n\n:host {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n:host-context(...) {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n\nResult will look like:\n\n:host-context([dir=rtl]):host .some-class {\n  ...\n}\n:host-context([dir=rtl]):host-context(...) .some-class {\n  ...\n}\n\n*\n  Side note:\n  :host-context():host selector are valid. https://lists.w3.org/Archives/Public/www-style/2015Feb/0305.html\n\n  :host-context([dir=rtl]):host-context(...) should match any permutation,\n  so order is not important.\n*\n\n\nCurrently, there're two problems with this approach:\n\nFirst, is that we can't combine :host, :host-context. Angular bugs #14349, #19199.\nFor the moment of writing, the only possible way is:\n:host {\n  :host-context(...) {\n    ...\n  }\n}\nIt doesn't work for us because mixin could be called somewhere deeper, like:\n:host {\n  p {\n    @include nb-rtl() { ... }\n  }\n}\nWe are not able to go up to :host level to place content passed to mixin.\n\nThe second problem is that we only can be sure that we appending :host-context([dir=rtl]) to another\n:host/:host-context pseudo-class when called in theme files (*.theme.scss).\n  *\n    Side note:\n    Currently, nb-install-component uses another approach where :host prepended with the theme name\n    (https://github.com/angular/angular/blob/5b96078624b0a4760f2dbcf6fdf0bd62791be5bb/packages/compiler/src/shadow_css.ts#L441),\n    but it was made to be able to use current realization of rtl and it can be rewritten back to\n    :host-context($theme) once we will be able to use multiple shadow selectors.\n  *\nBut when it's called in *.component.scss we can't be sure, that selector starts with :host/:host-context,\nbecause angular allows omitting pseudo-classes if we don't need to style :host component itself.\nWe can break such selectors, by just appending :host-context([dir=rtl]) to them.\n  ***\n    Possible solution\n    check if we in theme by some theme variables and if so append, otherwise nest like\n    @at-root :host-context([dir=rtl]) {\n      // add # to scss interpolation statement.\n      // it works in comments and we can't use it here\n      {&} {\n        @content;\n      }\n    }\n    What if :host specified? Can we add space in :host-context(...) :host?\n    Or maybe add :host selector anyway? If multiple :host selectors are allowed\n  ***\n\n\nProblems with the current approach.\n\n1. Direction can be applied only on document level, because mixin prepends theme class,\nwhich placed on the body.\n2. *.component.scss styles should be in :host selector. Otherwise angular will add host\nattribute to [dir=rtl] attribute as well.\n\n\nGeneral problems.\n\nLtr is default document direction, but for proper work of nb-ltr (means ltr only),\n[dir=ltr] should be specified at least somewhere. ':not([dir=rtl]' not applicable here,\nbecause it's satisfy any parent, that don't have [dir=rtl] attribute.\nPrevious approach was to use single rtl mixin and reset ltr properties to initial value.\nBut sometimes it's hard to find, what the previous value should be. And such mixin call looks too verbose.\n*/\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/*\n\nAccording to the specification (https://www.w3.org/TR/css-scoping-1/#host-selector)\n:host and :host-context are pseudo-classes. So we assume they could be combined,\nlike other pseudo-classes, even same ones.\nFor example: ':nth-of-type(2n):nth-of-type(even)'.\n\nIdeal solution would be to prepend any selector with :host-context([dir=rtl]).\nThen nebular components will behave as an html element and respond to [dir] attribute on any level,\nso direction could be overridden on any component level.\n\nImplementation code:\n\n@mixin nb-rtl() {\n  // add # to scss interpolation statement.\n  // it works in comments and we can't use it here\n  @at-root {selector-append(':host-context([dir=rtl])', &)} {\n    @content;\n  }\n}\n\nAnd when we call it somewhere:\n\n:host {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n:host-context(...) {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n\nResult will look like:\n\n:host-context([dir=rtl]):host .some-class {\n  ...\n}\n:host-context([dir=rtl]):host-context(...) .some-class {\n  ...\n}\n\n*\n  Side note:\n  :host-context():host selector are valid. https://lists.w3.org/Archives/Public/www-style/2015Feb/0305.html\n\n  :host-context([dir=rtl]):host-context(...) should match any permutation,\n  so order is not important.\n*\n\n\nCurrently, there're two problems with this approach:\n\nFirst, is that we can't combine :host, :host-context. Angular bugs #14349, #19199.\nFor the moment of writing, the only possible way is:\n:host {\n  :host-context(...) {\n    ...\n  }\n}\nIt doesn't work for us because mixin could be called somewhere deeper, like:\n:host {\n  p {\n    @include nb-rtl() { ... }\n  }\n}\nWe are not able to go up to :host level to place content passed to mixin.\n\nThe second problem is that we only can be sure that we appending :host-context([dir=rtl]) to another\n:host/:host-context pseudo-class when called in theme files (*.theme.scss).\n  *\n    Side note:\n    Currently, nb-install-component uses another approach where :host prepended with the theme name\n    (https://github.com/angular/angular/blob/5b96078624b0a4760f2dbcf6fdf0bd62791be5bb/packages/compiler/src/shadow_css.ts#L441),\n    but it was made to be able to use current realization of rtl and it can be rewritten back to\n    :host-context($theme) once we will be able to use multiple shadow selectors.\n  *\nBut when it's called in *.component.scss we can't be sure, that selector starts with :host/:host-context,\nbecause angular allows omitting pseudo-classes if we don't need to style :host component itself.\nWe can break such selectors, by just appending :host-context([dir=rtl]) to them.\n  ***\n    Possible solution\n    check if we in theme by some theme variables and if so append, otherwise nest like\n    @at-root :host-context([dir=rtl]) {\n      // add # to scss interpolation statement.\n      // it works in comments and we can't use it here\n      {&} {\n        @content;\n      }\n    }\n    What if :host specified? Can we add space in :host-context(...) :host?\n    Or maybe add :host selector anyway? If multiple :host selectors are allowed\n  ***\n\n\nProblems with the current approach.\n\n1. Direction can be applied only on document level, because mixin prepends theme class,\nwhich placed on the body.\n2. *.component.scss styles should be in :host selector. Otherwise angular will add host\nattribute to [dir=rtl] attribute as well.\n\n\nGeneral problems.\n\nLtr is default document direction, but for proper work of nb-ltr (means ltr only),\n[dir=ltr] should be specified at least somewhere. ':not([dir=rtl]' not applicable here,\nbecause it's satisfy any parent, that don't have [dir=rtl] attribute.\nPrevious approach was to use single rtl mixin and reset ltr properties to initial value.\nBut sometimes it's hard to find, what the previous value should be. And such mixin call looks too verbose.\n*/\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/*\n\nAccording to the specification (https://www.w3.org/TR/css-scoping-1/#host-selector)\n:host and :host-context are pseudo-classes. So we assume they could be combined,\nlike other pseudo-classes, even same ones.\nFor example: ':nth-of-type(2n):nth-of-type(even)'.\n\nIdeal solution would be to prepend any selector with :host-context([dir=rtl]).\nThen nebular components will behave as an html element and respond to [dir] attribute on any level,\nso direction could be overridden on any component level.\n\nImplementation code:\n\n@mixin nb-rtl() {\n  // add # to scss interpolation statement.\n  // it works in comments and we can't use it here\n  @at-root {selector-append(':host-context([dir=rtl])', &)} {\n    @content;\n  }\n}\n\nAnd when we call it somewhere:\n\n:host {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n:host-context(...) {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n\nResult will look like:\n\n:host-context([dir=rtl]):host .some-class {\n  ...\n}\n:host-context([dir=rtl]):host-context(...) .some-class {\n  ...\n}\n\n*\n  Side note:\n  :host-context():host selector are valid. https://lists.w3.org/Archives/Public/www-style/2015Feb/0305.html\n\n  :host-context([dir=rtl]):host-context(...) should match any permutation,\n  so order is not important.\n*\n\n\nCurrently, there're two problems with this approach:\n\nFirst, is that we can't combine :host, :host-context. Angular bugs #14349, #19199.\nFor the moment of writing, the only possible way is:\n:host {\n  :host-context(...) {\n    ...\n  }\n}\nIt doesn't work for us because mixin could be called somewhere deeper, like:\n:host {\n  p {\n    @include nb-rtl() { ... }\n  }\n}\nWe are not able to go up to :host level to place content passed to mixin.\n\nThe second problem is that we only can be sure that we appending :host-context([dir=rtl]) to another\n:host/:host-context pseudo-class when called in theme files (*.theme.scss).\n  *\n    Side note:\n    Currently, nb-install-component uses another approach where :host prepended with the theme name\n    (https://github.com/angular/angular/blob/5b96078624b0a4760f2dbcf6fdf0bd62791be5bb/packages/compiler/src/shadow_css.ts#L441),\n    but it was made to be able to use current realization of rtl and it can be rewritten back to\n    :host-context($theme) once we will be able to use multiple shadow selectors.\n  *\nBut when it's called in *.component.scss we can't be sure, that selector starts with :host/:host-context,\nbecause angular allows omitting pseudo-classes if we don't need to style :host component itself.\nWe can break such selectors, by just appending :host-context([dir=rtl]) to them.\n  ***\n    Possible solution\n    check if we in theme by some theme variables and if so append, otherwise nest like\n    @at-root :host-context([dir=rtl]) {\n      // add # to scss interpolation statement.\n      // it works in comments and we can't use it here\n      {&} {\n        @content;\n      }\n    }\n    What if :host specified? Can we add space in :host-context(...) :host?\n    Or maybe add :host selector anyway? If multiple :host selectors are allowed\n  ***\n\n\nProblems with the current approach.\n\n1. Direction can be applied only on document level, because mixin prepends theme class,\nwhich placed on the body.\n2. *.component.scss styles should be in :host selector. Otherwise angular will add host\nattribute to [dir=rtl] attribute as well.\n\n\nGeneral problems.\n\nLtr is default document direction, but for proper work of nb-ltr (means ltr only),\n[dir=ltr] should be specified at least somewhere. ':not([dir=rtl]' not applicable here,\nbecause it's satisfy any parent, that don't have [dir=rtl] attribute.\nPrevious approach was to use single rtl mixin and reset ltr properties to initial value.\nBut sometimes it's hard to find, what the previous value should be. And such mixin call looks too verbose.\n*/\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/*\n\nAccording to the specification (https://www.w3.org/TR/css-scoping-1/#host-selector)\n:host and :host-context are pseudo-classes. So we assume they could be combined,\nlike other pseudo-classes, even same ones.\nFor example: ':nth-of-type(2n):nth-of-type(even)'.\n\nIdeal solution would be to prepend any selector with :host-context([dir=rtl]).\nThen nebular components will behave as an html element and respond to [dir] attribute on any level,\nso direction could be overridden on any component level.\n\nImplementation code:\n\n@mixin nb-rtl() {\n  // add # to scss interpolation statement.\n  // it works in comments and we can't use it here\n  @at-root {selector-append(':host-context([dir=rtl])', &)} {\n    @content;\n  }\n}\n\nAnd when we call it somewhere:\n\n:host {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n:host-context(...) {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n\nResult will look like:\n\n:host-context([dir=rtl]):host .some-class {\n  ...\n}\n:host-context([dir=rtl]):host-context(...) .some-class {\n  ...\n}\n\n*\n  Side note:\n  :host-context():host selector are valid. https://lists.w3.org/Archives/Public/www-style/2015Feb/0305.html\n\n  :host-context([dir=rtl]):host-context(...) should match any permutation,\n  so order is not important.\n*\n\n\nCurrently, there're two problems with this approach:\n\nFirst, is that we can't combine :host, :host-context. Angular bugs #14349, #19199.\nFor the moment of writing, the only possible way is:\n:host {\n  :host-context(...) {\n    ...\n  }\n}\nIt doesn't work for us because mixin could be called somewhere deeper, like:\n:host {\n  p {\n    @include nb-rtl() { ... }\n  }\n}\nWe are not able to go up to :host level to place content passed to mixin.\n\nThe second problem is that we only can be sure that we appending :host-context([dir=rtl]) to another\n:host/:host-context pseudo-class when called in theme files (*.theme.scss).\n  *\n    Side note:\n    Currently, nb-install-component uses another approach where :host prepended with the theme name\n    (https://github.com/angular/angular/blob/5b96078624b0a4760f2dbcf6fdf0bd62791be5bb/packages/compiler/src/shadow_css.ts#L441),\n    but it was made to be able to use current realization of rtl and it can be rewritten back to\n    :host-context($theme) once we will be able to use multiple shadow selectors.\n  *\nBut when it's called in *.component.scss we can't be sure, that selector starts with :host/:host-context,\nbecause angular allows omitting pseudo-classes if we don't need to style :host component itself.\nWe can break such selectors, by just appending :host-context([dir=rtl]) to them.\n  ***\n    Possible solution\n    check if we in theme by some theme variables and if so append, otherwise nest like\n    @at-root :host-context([dir=rtl]) {\n      // add # to scss interpolation statement.\n      // it works in comments and we can't use it here\n      {&} {\n        @content;\n      }\n    }\n    What if :host specified? Can we add space in :host-context(...) :host?\n    Or maybe add :host selector anyway? If multiple :host selectors are allowed\n  ***\n\n\nProblems with the current approach.\n\n1. Direction can be applied only on document level, because mixin prepends theme class,\nwhich placed on the body.\n2. *.component.scss styles should be in :host selector. Otherwise angular will add host\nattribute to [dir=rtl] attribute as well.\n\n\nGeneral problems.\n\nLtr is default document direction, but for proper work of nb-ltr (means ltr only),\n[dir=ltr] should be specified at least somewhere. ':not([dir=rtl]' not applicable here,\nbecause it's satisfy any parent, that don't have [dir=rtl] attribute.\nPrevious approach was to use single rtl mixin and reset ltr properties to initial value.\nBut sometimes it's hard to find, what the previous value should be. And such mixin call looks too verbose.\n*/\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/*\n\nAccording to the specification (https://www.w3.org/TR/css-scoping-1/#host-selector)\n:host and :host-context are pseudo-classes. So we assume they could be combined,\nlike other pseudo-classes, even same ones.\nFor example: ':nth-of-type(2n):nth-of-type(even)'.\n\nIdeal solution would be to prepend any selector with :host-context([dir=rtl]).\nThen nebular components will behave as an html element and respond to [dir] attribute on any level,\nso direction could be overridden on any component level.\n\nImplementation code:\n\n@mixin nb-rtl() {\n  // add # to scss interpolation statement.\n  // it works in comments and we can't use it here\n  @at-root {selector-append(':host-context([dir=rtl])', &)} {\n    @content;\n  }\n}\n\nAnd when we call it somewhere:\n\n:host {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n:host-context(...) {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n\nResult will look like:\n\n:host-context([dir=rtl]):host .some-class {\n  ...\n}\n:host-context([dir=rtl]):host-context(...) .some-class {\n  ...\n}\n\n*\n  Side note:\n  :host-context():host selector are valid. https://lists.w3.org/Archives/Public/www-style/2015Feb/0305.html\n\n  :host-context([dir=rtl]):host-context(...) should match any permutation,\n  so order is not important.\n*\n\n\nCurrently, there're two problems with this approach:\n\nFirst, is that we can't combine :host, :host-context. Angular bugs #14349, #19199.\nFor the moment of writing, the only possible way is:\n:host {\n  :host-context(...) {\n    ...\n  }\n}\nIt doesn't work for us because mixin could be called somewhere deeper, like:\n:host {\n  p {\n    @include nb-rtl() { ... }\n  }\n}\nWe are not able to go up to :host level to place content passed to mixin.\n\nThe second problem is that we only can be sure that we appending :host-context([dir=rtl]) to another\n:host/:host-context pseudo-class when called in theme files (*.theme.scss).\n  *\n    Side note:\n    Currently, nb-install-component uses another approach where :host prepended with the theme name\n    (https://github.com/angular/angular/blob/5b96078624b0a4760f2dbcf6fdf0bd62791be5bb/packages/compiler/src/shadow_css.ts#L441),\n    but it was made to be able to use current realization of rtl and it can be rewritten back to\n    :host-context($theme) once we will be able to use multiple shadow selectors.\n  *\nBut when it's called in *.component.scss we can't be sure, that selector starts with :host/:host-context,\nbecause angular allows omitting pseudo-classes if we don't need to style :host component itself.\nWe can break such selectors, by just appending :host-context([dir=rtl]) to them.\n  ***\n    Possible solution\n    check if we in theme by some theme variables and if so append, otherwise nest like\n    @at-root :host-context([dir=rtl]) {\n      // add # to scss interpolation statement.\n      // it works in comments and we can't use it here\n      {&} {\n        @content;\n      }\n    }\n    What if :host specified? Can we add space in :host-context(...) :host?\n    Or maybe add :host selector anyway? If multiple :host selectors are allowed\n  ***\n\n\nProblems with the current approach.\n\n1. Direction can be applied only on document level, because mixin prepends theme class,\nwhich placed on the body.\n2. *.component.scss styles should be in :host selector. Otherwise angular will add host\nattribute to [dir=rtl] attribute as well.\n\n\nGeneral problems.\n\nLtr is default document direction, but for proper work of nb-ltr (means ltr only),\n[dir=ltr] should be specified at least somewhere. ':not([dir=rtl]' not applicable here,\nbecause it's satisfy any parent, that don't have [dir=rtl] attribute.\nPrevious approach was to use single rtl mixin and reset ltr properties to initial value.\nBut sometimes it's hard to find, what the previous value should be. And such mixin call looks too verbose.\n*/\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/*\n\nAccording to the specification (https://www.w3.org/TR/css-scoping-1/#host-selector)\n:host and :host-context are pseudo-classes. So we assume they could be combined,\nlike other pseudo-classes, even same ones.\nFor example: ':nth-of-type(2n):nth-of-type(even)'.\n\nIdeal solution would be to prepend any selector with :host-context([dir=rtl]).\nThen nebular components will behave as an html element and respond to [dir] attribute on any level,\nso direction could be overridden on any component level.\n\nImplementation code:\n\n@mixin nb-rtl() {\n  // add # to scss interpolation statement.\n  // it works in comments and we can't use it here\n  @at-root {selector-append(':host-context([dir=rtl])', &)} {\n    @content;\n  }\n}\n\nAnd when we call it somewhere:\n\n:host {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n:host-context(...) {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n\nResult will look like:\n\n:host-context([dir=rtl]):host .some-class {\n  ...\n}\n:host-context([dir=rtl]):host-context(...) .some-class {\n  ...\n}\n\n*\n  Side note:\n  :host-context():host selector are valid. https://lists.w3.org/Archives/Public/www-style/2015Feb/0305.html\n\n  :host-context([dir=rtl]):host-context(...) should match any permutation,\n  so order is not important.\n*\n\n\nCurrently, there're two problems with this approach:\n\nFirst, is that we can't combine :host, :host-context. Angular bugs #14349, #19199.\nFor the moment of writing, the only possible way is:\n:host {\n  :host-context(...) {\n    ...\n  }\n}\nIt doesn't work for us because mixin could be called somewhere deeper, like:\n:host {\n  p {\n    @include nb-rtl() { ... }\n  }\n}\nWe are not able to go up to :host level to place content passed to mixin.\n\nThe second problem is that we only can be sure that we appending :host-context([dir=rtl]) to another\n:host/:host-context pseudo-class when called in theme files (*.theme.scss).\n  *\n    Side note:\n    Currently, nb-install-component uses another approach where :host prepended with the theme name\n    (https://github.com/angular/angular/blob/5b96078624b0a4760f2dbcf6fdf0bd62791be5bb/packages/compiler/src/shadow_css.ts#L441),\n    but it was made to be able to use current realization of rtl and it can be rewritten back to\n    :host-context($theme) once we will be able to use multiple shadow selectors.\n  *\nBut when it's called in *.component.scss we can't be sure, that selector starts with :host/:host-context,\nbecause angular allows omitting pseudo-classes if we don't need to style :host component itself.\nWe can break such selectors, by just appending :host-context([dir=rtl]) to them.\n  ***\n    Possible solution\n    check if we in theme by some theme variables and if so append, otherwise nest like\n    @at-root :host-context([dir=rtl]) {\n      // add # to scss interpolation statement.\n      // it works in comments and we can't use it here\n      {&} {\n        @content;\n      }\n    }\n    What if :host specified? Can we add space in :host-context(...) :host?\n    Or maybe add :host selector anyway? If multiple :host selectors are allowed\n  ***\n\n\nProblems with the current approach.\n\n1. Direction can be applied only on document level, because mixin prepends theme class,\nwhich placed on the body.\n2. *.component.scss styles should be in :host selector. Otherwise angular will add host\nattribute to [dir=rtl] attribute as well.\n\n\nGeneral problems.\n\nLtr is default document direction, but for proper work of nb-ltr (means ltr only),\n[dir=ltr] should be specified at least somewhere. ':not([dir=rtl]' not applicable here,\nbecause it's satisfy any parent, that don't have [dir=rtl] attribute.\nPrevious approach was to use single rtl mixin and reset ltr properties to initial value.\nBut sometimes it's hard to find, what the previous value should be. And such mixin call looks too verbose.\n*/\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/*\n\nAccording to the specification (https://www.w3.org/TR/css-scoping-1/#host-selector)\n:host and :host-context are pseudo-classes. So we assume they could be combined,\nlike other pseudo-classes, even same ones.\nFor example: ':nth-of-type(2n):nth-of-type(even)'.\n\nIdeal solution would be to prepend any selector with :host-context([dir=rtl]).\nThen nebular components will behave as an html element and respond to [dir] attribute on any level,\nso direction could be overridden on any component level.\n\nImplementation code:\n\n@mixin nb-rtl() {\n  // add # to scss interpolation statement.\n  // it works in comments and we can't use it here\n  @at-root {selector-append(':host-context([dir=rtl])', &)} {\n    @content;\n  }\n}\n\nAnd when we call it somewhere:\n\n:host {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n:host-context(...) {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n\nResult will look like:\n\n:host-context([dir=rtl]):host .some-class {\n  ...\n}\n:host-context([dir=rtl]):host-context(...) .some-class {\n  ...\n}\n\n*\n  Side note:\n  :host-context():host selector are valid. https://lists.w3.org/Archives/Public/www-style/2015Feb/0305.html\n\n  :host-context([dir=rtl]):host-context(...) should match any permutation,\n  so order is not important.\n*\n\n\nCurrently, there're two problems with this approach:\n\nFirst, is that we can't combine :host, :host-context. Angular bugs #14349, #19199.\nFor the moment of writing, the only possible way is:\n:host {\n  :host-context(...) {\n    ...\n  }\n}\nIt doesn't work for us because mixin could be called somewhere deeper, like:\n:host {\n  p {\n    @include nb-rtl() { ... }\n  }\n}\nWe are not able to go up to :host level to place content passed to mixin.\n\nThe second problem is that we only can be sure that we appending :host-context([dir=rtl]) to another\n:host/:host-context pseudo-class when called in theme files (*.theme.scss).\n  *\n    Side note:\n    Currently, nb-install-component uses another approach where :host prepended with the theme name\n    (https://github.com/angular/angular/blob/5b96078624b0a4760f2dbcf6fdf0bd62791be5bb/packages/compiler/src/shadow_css.ts#L441),\n    but it was made to be able to use current realization of rtl and it can be rewritten back to\n    :host-context($theme) once we will be able to use multiple shadow selectors.\n  *\nBut when it's called in *.component.scss we can't be sure, that selector starts with :host/:host-context,\nbecause angular allows omitting pseudo-classes if we don't need to style :host component itself.\nWe can break such selectors, by just appending :host-context([dir=rtl]) to them.\n  ***\n    Possible solution\n    check if we in theme by some theme variables and if so append, otherwise nest like\n    @at-root :host-context([dir=rtl]) {\n      // add # to scss interpolation statement.\n      // it works in comments and we can't use it here\n      {&} {\n        @content;\n      }\n    }\n    What if :host specified? Can we add space in :host-context(...) :host?\n    Or maybe add :host selector anyway? If multiple :host selectors are allowed\n  ***\n\n\nProblems with the current approach.\n\n1. Direction can be applied only on document level, because mixin prepends theme class,\nwhich placed on the body.\n2. *.component.scss styles should be in :host selector. Otherwise angular will add host\nattribute to [dir=rtl] attribute as well.\n\n\nGeneral problems.\n\nLtr is default document direction, but for proper work of nb-ltr (means ltr only),\n[dir=ltr] should be specified at least somewhere. ':not([dir=rtl]' not applicable here,\nbecause it's satisfy any parent, that don't have [dir=rtl] attribute.\nPrevious approach was to use single rtl mixin and reset ltr properties to initial value.\nBut sometimes it's hard to find, what the previous value should be. And such mixin call looks too verbose.\n*/\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/*\n\nAccording to the specification (https://www.w3.org/TR/css-scoping-1/#host-selector)\n:host and :host-context are pseudo-classes. So we assume they could be combined,\nlike other pseudo-classes, even same ones.\nFor example: ':nth-of-type(2n):nth-of-type(even)'.\n\nIdeal solution would be to prepend any selector with :host-context([dir=rtl]).\nThen nebular components will behave as an html element and respond to [dir] attribute on any level,\nso direction could be overridden on any component level.\n\nImplementation code:\n\n@mixin nb-rtl() {\n  // add # to scss interpolation statement.\n  // it works in comments and we can't use it here\n  @at-root {selector-append(':host-context([dir=rtl])', &)} {\n    @content;\n  }\n}\n\nAnd when we call it somewhere:\n\n:host {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n:host-context(...) {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n\nResult will look like:\n\n:host-context([dir=rtl]):host .some-class {\n  ...\n}\n:host-context([dir=rtl]):host-context(...) .some-class {\n  ...\n}\n\n*\n  Side note:\n  :host-context():host selector are valid. https://lists.w3.org/Archives/Public/www-style/2015Feb/0305.html\n\n  :host-context([dir=rtl]):host-context(...) should match any permutation,\n  so order is not important.\n*\n\n\nCurrently, there're two problems with this approach:\n\nFirst, is that we can't combine :host, :host-context. Angular bugs #14349, #19199.\nFor the moment of writing, the only possible way is:\n:host {\n  :host-context(...) {\n    ...\n  }\n}\nIt doesn't work for us because mixin could be called somewhere deeper, like:\n:host {\n  p {\n    @include nb-rtl() { ... }\n  }\n}\nWe are not able to go up to :host level to place content passed to mixin.\n\nThe second problem is that we only can be sure that we appending :host-context([dir=rtl]) to another\n:host/:host-context pseudo-class when called in theme files (*.theme.scss).\n  *\n    Side note:\n    Currently, nb-install-component uses another approach where :host prepended with the theme name\n    (https://github.com/angular/angular/blob/5b96078624b0a4760f2dbcf6fdf0bd62791be5bb/packages/compiler/src/shadow_css.ts#L441),\n    but it was made to be able to use current realization of rtl and it can be rewritten back to\n    :host-context($theme) once we will be able to use multiple shadow selectors.\n  *\nBut when it's called in *.component.scss we can't be sure, that selector starts with :host/:host-context,\nbecause angular allows omitting pseudo-classes if we don't need to style :host component itself.\nWe can break such selectors, by just appending :host-context([dir=rtl]) to them.\n  ***\n    Possible solution\n    check if we in theme by some theme variables and if so append, otherwise nest like\n    @at-root :host-context([dir=rtl]) {\n      // add # to scss interpolation statement.\n      // it works in comments and we can't use it here\n      {&} {\n        @content;\n      }\n    }\n    What if :host specified? Can we add space in :host-context(...) :host?\n    Or maybe add :host selector anyway? If multiple :host selectors are allowed\n  ***\n\n\nProblems with the current approach.\n\n1. Direction can be applied only on document level, because mixin prepends theme class,\nwhich placed on the body.\n2. *.component.scss styles should be in :host selector. Otherwise angular will add host\nattribute to [dir=rtl] attribute as well.\n\n\nGeneral problems.\n\nLtr is default document direction, but for proper work of nb-ltr (means ltr only),\n[dir=ltr] should be specified at least somewhere. ':not([dir=rtl]' not applicable here,\nbecause it's satisfy any parent, that don't have [dir=rtl] attribute.\nPrevious approach was to use single rtl mixin and reset ltr properties to initial value.\nBut sometimes it's hard to find, what the previous value should be. And such mixin call looks too verbose.\n*/\n/*\n  :host can be prefixed\n  https://github.com/angular/angular/blob/8d0ee34939f14c07876d222c25b405ed458a34d3/packages/compiler/src/shadow_css.ts#L441\n\n  We have to use :host instead of :host-context($theme), to be able to prefix theme class\n  with something defined inside of @content, by prefixing &.\n  For example this scss code:\n    .nb-theme-default {\n      .some-selector & {\n        ...\n      }\n    }\n  Will result in next css:\n    .some-selector .nb-theme-default {\n      ...\n    }\n\n  It doesn't work with :host-context because angular splitting it in two selectors and removes\n  prefix in one of the selectors.\n*/\n.nb-theme-default :host {\n  display: flex;\n  justify-content: space-between;\n  width: 100%;\n}\n.nb-theme-default :host .logo-container {\n  display: flex;\n  align-items: center;\n  width: 20rem;\n}\n.nb-theme-default :host nb-action {\n  height: auto;\n  display: flex;\n  align-content: center;\n}\n.nb-theme-default :host nb-user {\n  cursor: pointer;\n}\n.nb-theme-default :host ::ng-deep nb-search button {\n  padding: 0 !important;\n}\n.nb-theme-default :host .header-container {\n  display: flex;\n  align-items: center;\n  width: auto;\n}\n.nb-theme-default :host .header-container .sidebar-toggle {\n  text-decoration: none;\n  color: #8f9bb3;\n}\n[dir=ltr] .nb-theme-default :host .header-container .sidebar-toggle {\n  padding-right: 1.25rem;\n}\n[dir=rtl] .nb-theme-default :host .header-container .sidebar-toggle {\n  padding-left: 1.25rem;\n}\n.nb-theme-default :host .header-container .sidebar-toggle nb-icon {\n  font-size: 1.75rem;\n}\n.nb-theme-default :host .header-container .logo {\n  padding: 0 1.25rem;\n  font-size: 1.75rem;\n  white-space: nowrap;\n  text-decoration: none;\n}\n[dir=ltr] .nb-theme-default :host .header-container .logo {\n  border-left: 1px solid #edf1f7;\n}\n[dir=rtl] .nb-theme-default :host .header-container .logo {\n  border-right: 1px solid #edf1f7;\n}\n@media (max-width: 767.98px) {\n  .nb-theme-default :host .control-item {\n    display: none;\n  }\n  .nb-theme-default :host .user-action {\n    border: none;\n    padding: 0;\n  }\n}\n@media (max-width: 575.98px) {\n  .nb-theme-default :host nb-select {\n    display: none;\n  }\n}\n/*\n  :host can be prefixed\n  https://github.com/angular/angular/blob/8d0ee34939f14c07876d222c25b405ed458a34d3/packages/compiler/src/shadow_css.ts#L441\n\n  We have to use :host instead of :host-context($theme), to be able to prefix theme class\n  with something defined inside of @content, by prefixing &.\n  For example this scss code:\n    .nb-theme-default {\n      .some-selector & {\n        ...\n      }\n    }\n  Will result in next css:\n    .some-selector .nb-theme-default {\n      ...\n    }\n\n  It doesn't work with :host-context because angular splitting it in two selectors and removes\n  prefix in one of the selectors.\n*/\n.nb-theme-dark :host {\n  display: flex;\n  justify-content: space-between;\n  width: 100%;\n}\n.nb-theme-dark :host .logo-container {\n  display: flex;\n  align-items: center;\n  width: 20rem;\n}\n.nb-theme-dark :host nb-action {\n  height: auto;\n  display: flex;\n  align-content: center;\n}\n.nb-theme-dark :host nb-user {\n  cursor: pointer;\n}\n.nb-theme-dark :host ::ng-deep nb-search button {\n  padding: 0 !important;\n}\n.nb-theme-dark :host .header-container {\n  display: flex;\n  align-items: center;\n  width: auto;\n}\n.nb-theme-dark :host .header-container .sidebar-toggle {\n  text-decoration: none;\n  color: #8f9bb3;\n}\n[dir=ltr] .nb-theme-dark :host .header-container .sidebar-toggle {\n  padding-right: 1.25rem;\n}\n[dir=rtl] .nb-theme-dark :host .header-container .sidebar-toggle {\n  padding-left: 1.25rem;\n}\n.nb-theme-dark :host .header-container .sidebar-toggle nb-icon {\n  font-size: 1.75rem;\n}\n.nb-theme-dark :host .header-container .logo {\n  padding: 0 1.25rem;\n  font-size: 1.75rem;\n  white-space: nowrap;\n  text-decoration: none;\n}\n[dir=ltr] .nb-theme-dark :host .header-container .logo {\n  border-left: 1px solid #151a30;\n}\n[dir=rtl] .nb-theme-dark :host .header-container .logo {\n  border-right: 1px solid #151a30;\n}\n@media (max-width: 767.98px) {\n  .nb-theme-dark :host .control-item {\n    display: none;\n  }\n  .nb-theme-dark :host .user-action {\n    border: none;\n    padding: 0;\n  }\n}\n@media (max-width: 575.98px) {\n  .nb-theme-dark :host nb-select {\n    display: none;\n  }\n}\n/*\n  :host can be prefixed\n  https://github.com/angular/angular/blob/8d0ee34939f14c07876d222c25b405ed458a34d3/packages/compiler/src/shadow_css.ts#L441\n\n  We have to use :host instead of :host-context($theme), to be able to prefix theme class\n  with something defined inside of @content, by prefixing &.\n  For example this scss code:\n    .nb-theme-default {\n      .some-selector & {\n        ...\n      }\n    }\n  Will result in next css:\n    .some-selector .nb-theme-default {\n      ...\n    }\n\n  It doesn't work with :host-context because angular splitting it in two selectors and removes\n  prefix in one of the selectors.\n*/\n.nb-theme-cosmic :host {\n  display: flex;\n  justify-content: space-between;\n  width: 100%;\n}\n.nb-theme-cosmic :host .logo-container {\n  display: flex;\n  align-items: center;\n  width: 20rem;\n}\n.nb-theme-cosmic :host nb-action {\n  height: auto;\n  display: flex;\n  align-content: center;\n}\n.nb-theme-cosmic :host nb-user {\n  cursor: pointer;\n}\n.nb-theme-cosmic :host ::ng-deep nb-search button {\n  padding: 0 !important;\n}\n.nb-theme-cosmic :host .header-container {\n  display: flex;\n  align-items: center;\n  width: auto;\n}\n.nb-theme-cosmic :host .header-container .sidebar-toggle {\n  text-decoration: none;\n  color: #b4b4db;\n}\n[dir=ltr] .nb-theme-cosmic :host .header-container .sidebar-toggle {\n  padding-right: 1.25rem;\n}\n[dir=rtl] .nb-theme-cosmic :host .header-container .sidebar-toggle {\n  padding-left: 1.25rem;\n}\n.nb-theme-cosmic :host .header-container .sidebar-toggle nb-icon {\n  font-size: 1.75rem;\n}\n.nb-theme-cosmic :host .header-container .logo {\n  padding: 0 1.25rem;\n  font-size: 1.75rem;\n  white-space: nowrap;\n  text-decoration: none;\n}\n[dir=ltr] .nb-theme-cosmic :host .header-container .logo {\n  border-left: 1px solid #1b1b38;\n}\n[dir=rtl] .nb-theme-cosmic :host .header-container .logo {\n  border-right: 1px solid #1b1b38;\n}\n@media (max-width: 767.98px) {\n  .nb-theme-cosmic :host .control-item {\n    display: none;\n  }\n  .nb-theme-cosmic :host .user-action {\n    border: none;\n    padding: 0;\n  }\n}\n@media (max-width: 575.98px) {\n  .nb-theme-cosmic :host nb-select {\n    display: none;\n  }\n}\n/*\n  :host can be prefixed\n  https://github.com/angular/angular/blob/8d0ee34939f14c07876d222c25b405ed458a34d3/packages/compiler/src/shadow_css.ts#L441\n\n  We have to use :host instead of :host-context($theme), to be able to prefix theme class\n  with something defined inside of @content, by prefixing &.\n  For example this scss code:\n    .nb-theme-default {\n      .some-selector & {\n        ...\n      }\n    }\n  Will result in next css:\n    .some-selector .nb-theme-default {\n      ...\n    }\n\n  It doesn't work with :host-context because angular splitting it in two selectors and removes\n  prefix in one of the selectors.\n*/\n.nb-theme-corporate :host {\n  display: flex;\n  justify-content: space-between;\n  width: 100%;\n}\n.nb-theme-corporate :host .logo-container {\n  display: flex;\n  align-items: center;\n  width: 20rem;\n}\n.nb-theme-corporate :host nb-action {\n  height: auto;\n  display: flex;\n  align-content: center;\n}\n.nb-theme-corporate :host nb-user {\n  cursor: pointer;\n}\n.nb-theme-corporate :host ::ng-deep nb-search button {\n  padding: 0 !important;\n}\n.nb-theme-corporate :host .header-container {\n  display: flex;\n  align-items: center;\n  width: auto;\n}\n.nb-theme-corporate :host .header-container .sidebar-toggle {\n  text-decoration: none;\n  color: #8f9bb3;\n}\n[dir=ltr] .nb-theme-corporate :host .header-container .sidebar-toggle {\n  padding-right: 1.25rem;\n}\n[dir=rtl] .nb-theme-corporate :host .header-container .sidebar-toggle {\n  padding-left: 1.25rem;\n}\n.nb-theme-corporate :host .header-container .sidebar-toggle nb-icon {\n  font-size: 1.75rem;\n}\n.nb-theme-corporate :host .header-container .logo {\n  padding: 0 1.25rem;\n  font-size: 1.75rem;\n  white-space: nowrap;\n  text-decoration: none;\n}\n[dir=ltr] .nb-theme-corporate :host .header-container .logo {\n  border-left: 1px solid #edf1f7;\n}\n[dir=rtl] .nb-theme-corporate :host .header-container .logo {\n  border-right: 1px solid #edf1f7;\n}\n@media (max-width: 767.98px) {\n  .nb-theme-corporate :host .control-item {\n    display: none;\n  }\n  .nb-theme-corporate :host .user-action {\n    border: none;\n    padding: 0;\n  }\n}\n@media (max-width: 575.98px) {\n  .nb-theme-corporate :host nb-select {\n    display: none;\n  }\n}"

/***/ }),

/***/ "./src/app/@theme/components/header/header.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/@theme/components/header/header.component.ts ***!
  \**************************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nebular/theme */ "../../node_modules/@nebular/theme/fesm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm5/index.js");





var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(sidebarService, menuService, themeService, breakpointService) {
        this.sidebarService = sidebarService;
        this.menuService = menuService;
        this.themeService = themeService;
        this.breakpointService = breakpointService;
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.userPictureOnly = false;
        this.themes = [
            {
                value: 'default',
                name: 'Light',
            },
            {
                value: 'dark',
                name: 'Dark',
            },
            {
                value: 'cosmic',
                name: 'Cosmic',
            },
            {
                value: 'corporate',
                name: 'Corporate',
            },
        ];
        this.currentTheme = 'default';
        this.userProfile = { title: 'Profile', link: '' };
        this.userMenu = [this.userProfile, { title: 'Log out' }];
    }
    HeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.currentTheme = this.themeService.currentTheme;
        var xl = this.breakpointService.getBreakpointsMap().xl;
        this.themeService.onMediaQueryChange()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (_a) {
            var _b = tslib__WEBPACK_IMPORTED_MODULE_0__["__read"](_a, 2), currentBreakpoint = _b[1];
            return currentBreakpoint.width < xl;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.destroy$))
            .subscribe(function (isLessThanXl) { return _this.userPictureOnly = isLessThanXl; });
        this.themeService.onThemeChange()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (_a) {
            var name = _a.name;
            return name;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.destroy$))
            .subscribe(function (themeName) { return _this.currentTheme = themeName; });
    };
    HeaderComponent.prototype.ngOnDestroy = function () {
        this.destroy$.next();
        this.destroy$.complete();
    };
    HeaderComponent.prototype.changeTheme = function (themeName) {
        this.themeService.changeTheme(themeName);
    };
    HeaderComponent.prototype.toggleSidebar = function () {
        this.sidebarService.toggle(true, 'menu-sidebar');
        // this.layoutService.changeLayoutSize();
        return false;
    };
    HeaderComponent.prototype.navigateHome = function () {
        this.menuService.navigateHome();
        return false;
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! raw-loader!./header.component.html */ "../../node_modules/raw-loader/index.js!./src/app/@theme/components/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/@theme/components/header/header.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbSidebarService"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbMenuService"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbThemeService"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbMediaBreakpointsService"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/@theme/components/index.ts":
/*!********************************************!*\
  !*** ./src/app/@theme/components/index.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header/header.component */ "./src/app/@theme/components/header/header.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return _header_header_component__WEBPACK_IMPORTED_MODULE_0__["HeaderComponent"]; });




/***/ }),

/***/ "./src/app/@theme/styles/theme.corporate.ts":
/*!**************************************************!*\
  !*** ./src/app/@theme/styles/theme.corporate.ts ***!
  \**************************************************/
/*! exports provided: CORPORATE_THEME */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CORPORATE_THEME", function() { return CORPORATE_THEME; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");

var palette = {
    primary: '#73a1ff',
    success: '#5dcfe3',
    info: '#ba7fec',
    warning: '#ffa36b',
    danger: '#ff6b83',
};
var theme = {
    fontMain: 'Open Sans, sans-serif',
    fontSecondary: 'Raleway, sans-serif',
    bg: '#ffffff',
    bg2: '#f7f9fc',
    bg3: '#edf1f7',
    bg4: '#e4e9f2',
    border: '#ffffff',
    border2: '#f7f9fc',
    border3: '#edf1f7',
    border4: '#e4e9f2',
    border5: '#c5cee0',
    fg: '#8f9bb3',
    fgHeading: '#1a2138',
    fgText: '#1a2138',
    fgHighlight: palette.primary,
    layoutBg: '#f7f9fc',
    separator: '#edf1f7',
    primary: palette.primary,
    success: palette.success,
    info: palette.info,
    warning: palette.warning,
    danger: palette.danger,
    primaryLight: '#598bff',
    successLight: '#2ce69b',
    infoLight: '#42aaff',
    warningLight: '#ffc94d',
    dangerLight: '#ff708d',
};
var CORPORATE_THEME = {
    name: 'corporate',
    variables: tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, theme, { temperature: {
            arcFill: ['#ffa36b', '#ffa36b', '#ff9e7a', '#ff9888', '#ff8ea0'],
            arcEmpty: theme.bg2,
            thumbBg: theme.bg2,
            thumbBorder: '#ffa36b',
        }, solar: {
            gradientLeft: theme.primary,
            gradientRight: theme.primary,
            shadowColor: 'rgba(0, 0, 0, 0)',
            secondSeriesFill: theme.bg2,
            radius: ['80%', '90%'],
        }, traffic: {
            tooltipBg: theme.bg,
            tooltipBorderColor: theme.border2,
            tooltipExtraCss: 'border-radius: 10px; padding: 4px 16px;',
            tooltipTextColor: theme.fgText,
            tooltipFontWeight: 'normal',
            yAxisSplitLine: 'rgba(0, 0, 0, 0)',
            lineBg: theme.primary,
            lineShadowBlur: '0',
            itemColor: theme.border4,
            itemBorderColor: theme.border4,
            itemEmphasisBorderColor: theme.primaryLight,
            shadowLineDarkBg: 'rgba(0, 0, 0, 0)',
            shadowLineShadow: 'rgba(0, 0, 0, 0)',
            gradFrom: theme.bg,
            gradTo: theme.bg,
        }, electricity: {
            tooltipBg: theme.bg,
            tooltipLineColor: theme.fgText,
            tooltipLineWidth: '0',
            tooltipBorderColor: theme.border2,
            tooltipExtraCss: 'border-radius: 10px; padding: 8px 24px;',
            tooltipTextColor: theme.fgText,
            tooltipFontWeight: 'normal',
            axisLineColor: theme.border3,
            xAxisTextColor: theme.fg,
            yAxisSplitLine: theme.separator,
            itemBorderColor: theme.primary,
            lineStyle: 'solid',
            lineWidth: '4',
            lineGradFrom: theme.primary,
            lineGradTo: theme.primary,
            lineShadow: 'rgba(0, 0, 0, 0)',
            areaGradFrom: 'rgba(0, 0, 0, 0)',
            areaGradTo: 'rgba(0, 0, 0, 0)',
            shadowLineDarkBg: 'rgba(0, 0, 0, 0)',
        }, bubbleMap: {
            titleColor: theme.fgText,
            areaColor: theme.bg4,
            areaHoverColor: theme.fgHighlight,
            areaBorderColor: theme.border5,
        }, profitBarAnimationEchart: {
            textColor: theme.fgText,
            firstAnimationBarColor: theme.primary,
            secondAnimationBarColor: theme.success,
            splitLineStyleOpacity: '1',
            splitLineStyleWidth: '1',
            splitLineStyleColor: theme.separator,
            tooltipTextColor: theme.fgText,
            tooltipFontWeight: 'normal',
            tooltipFontSize: '16',
            tooltipBg: theme.bg,
            tooltipBorderColor: theme.border2,
            tooltipBorderWidth: '1',
            tooltipExtraCss: 'border-radius: 10px; padding: 4px 16px;',
        }, trafficBarEchart: {
            gradientFrom: theme.warningLight,
            gradientTo: theme.warning,
            shadow: theme.warningLight,
            shadowBlur: '0',
            axisTextColor: theme.fgText,
            axisFontSize: '12',
            tooltipBg: theme.bg,
            tooltipBorderColor: theme.border2,
            tooltipExtraCss: 'border-radius: 10px; padding: 8px 24px;',
            tooltipTextColor: theme.fgText,
            tooltipFontWeight: 'normal',
        }, countryOrders: {
            countryBorderColor: theme.border4,
            countryFillColor: theme.bg4,
            countryBorderWidth: '1',
            hoveredCountryBorderColor: theme.primary,
            hoveredCountryFillColor: theme.primaryLight,
            hoveredCountryBorderWidth: '1',
            chartAxisLineColor: theme.border4,
            chartAxisTextColor: theme.fg,
            chartAxisFontSize: '16',
            chartGradientTo: theme.primary,
            chartGradientFrom: theme.primaryLight,
            chartAxisSplitLine: theme.separator,
            chartShadowLineColor: theme.primaryLight,
            chartLineBottomShadowColor: theme.primary,
            chartInnerLineColor: theme.bg2,
        }, echarts: {
            bg: theme.bg,
            textColor: theme.fgText,
            axisLineColor: theme.fgText,
            splitLineColor: theme.separator,
            itemHoverShadowColor: 'rgba(0, 0, 0, 0.5)',
            tooltipBackgroundColor: theme.primary,
            areaOpacity: '0.7',
        }, chartjs: {
            axisLineColor: theme.separator,
            textColor: theme.fgText,
        }, orders: {
            tooltipBg: theme.bg,
            tooltipLineColor: 'rgba(0, 0, 0, 0)',
            tooltipLineWidth: '0',
            tooltipBorderColor: theme.border2,
            tooltipExtraCss: 'border-radius: 10px; padding: 8px 24px;',
            tooltipTextColor: theme.fgText,
            tooltipFontWeight: 'normal',
            tooltipFontSize: '20',
            axisLineColor: theme.border4,
            axisFontSize: '16',
            axisTextColor: theme.fg,
            yAxisSplitLine: theme.separator,
            itemBorderColor: theme.primary,
            lineStyle: 'solid',
            lineWidth: '4',
            // first line
            firstAreaGradFrom: theme.bg3,
            firstAreaGradTo: theme.bg3,
            firstShadowLineDarkBg: 'rgba(0, 0, 0, 0)',
            // second line
            secondLineGradFrom: theme.primary,
            secondLineGradTo: theme.primary,
            secondAreaGradFrom: 'rgba(0, 0, 0, 0)',
            secondAreaGradTo: 'rgba(0, 0, 0, 0)',
            secondShadowLineDarkBg: 'rgba(0, 0, 0, 0)',
            // third line
            thirdLineGradFrom: theme.success,
            thirdLineGradTo: theme.successLight,
            thirdAreaGradFrom: 'rgba(0, 0, 0, 0)',
            thirdAreaGradTo: 'rgba(0, 0, 0, 0)',
            thirdShadowLineDarkBg: 'rgba(0, 0, 0, 0)',
        }, profit: {
            bg: theme.bg,
            textColor: theme.fgText,
            axisLineColor: theme.border4,
            splitLineColor: theme.separator,
            areaOpacity: '1',
            axisFontSize: '16',
            axisTextColor: theme.fg,
            // first bar
            firstLineGradFrom: theme.bg3,
            firstLineGradTo: theme.bg3,
            firstLineShadow: 'rgba(0, 0, 0, 0)',
            // second bar
            secondLineGradFrom: theme.primary,
            secondLineGradTo: theme.primary,
            secondLineShadow: 'rgba(0, 0, 0, 0)',
            // third bar
            thirdLineGradFrom: theme.success,
            thirdLineGradTo: theme.success,
            thirdLineShadow: 'rgba(0, 0, 0, 0)',
        }, orderProfitLegend: {
            firstItem: theme.success,
            secondItem: theme.primary,
            thirdItem: theme.bg3,
        }, visitors: {
            tooltipBg: theme.bg,
            tooltipLineColor: 'rgba(0, 0, 0, 0)',
            tooltipLineWidth: '1',
            tooltipBorderColor: theme.border2,
            tooltipExtraCss: 'border-radius: 10px; padding: 8px 24px;',
            tooltipTextColor: theme.fgText,
            tooltipFontWeight: 'normal',
            tooltipFontSize: '20',
            axisLineColor: theme.border4,
            axisFontSize: '16',
            axisTextColor: theme.fg,
            yAxisSplitLine: theme.separator,
            itemBorderColor: theme.primary,
            lineStyle: 'dotted',
            lineWidth: '6',
            lineGradFrom: '#ffffff',
            lineGradTo: '#ffffff',
            lineShadow: 'rgba(0, 0, 0, 0)',
            areaGradFrom: theme.primary,
            areaGradTo: theme.primaryLight,
            innerLineStyle: 'solid',
            innerLineWidth: '1',
            innerAreaGradFrom: theme.success,
            innerAreaGradTo: theme.success,
        }, visitorsLegend: {
            firstIcon: theme.success,
            secondIcon: theme.primary,
        }, visitorsPie: {
            firstPieGradientLeft: theme.success,
            firstPieGradientRight: theme.success,
            firstPieShadowColor: 'rgba(0, 0, 0, 0)',
            firstPieRadius: ['65%', '90%'],
            secondPieGradientLeft: theme.warning,
            secondPieGradientRight: theme.warningLight,
            secondPieShadowColor: 'rgba(0, 0, 0, 0)',
            secondPieRadius: ['63%', '92%'],
            shadowOffsetX: '-4',
            shadowOffsetY: '-4',
        }, visitorsPieLegend: {
            firstSection: theme.warning,
            secondSection: theme.success,
        }, earningPie: {
            radius: ['65%', '100%'],
            center: ['50%', '50%'],
            fontSize: '22',
            firstPieGradientLeft: theme.success,
            firstPieGradientRight: theme.success,
            firstPieShadowColor: 'rgba(0, 0, 0, 0)',
            secondPieGradientLeft: theme.primary,
            secondPieGradientRight: theme.primary,
            secondPieShadowColor: 'rgba(0, 0, 0, 0)',
            thirdPieGradientLeft: theme.warning,
            thirdPieGradientRight: theme.warning,
            thirdPieShadowColor: 'rgba(0, 0, 0, 0)',
        }, earningLine: {
            gradFrom: theme.primary,
            gradTo: theme.primary,
            tooltipTextColor: theme.fgText,
            tooltipFontWeight: 'normal',
            tooltipFontSize: '16',
            tooltipBg: theme.bg,
            tooltipBorderColor: theme.border2,
            tooltipBorderWidth: '1',
            tooltipExtraCss: 'border-radius: 10px; padding: 4px 16px;',
        } }),
};


/***/ }),

/***/ "./src/app/@theme/styles/theme.cosmic.ts":
/*!***********************************************!*\
  !*** ./src/app/@theme/styles/theme.cosmic.ts ***!
  \***********************************************/
/*! exports provided: COSMIC_THEME */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COSMIC_THEME", function() { return COSMIC_THEME; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");

var palette = {
    primary: '#a16eff',
    success: '#00d68f',
    info: '#0095ff',
    warning: '#ffaa00',
    danger: '#ff3d71',
};
var theme = {
    fontMain: 'Open Sans, sans-serif',
    fontSecondary: 'Raleway, sans-serif',
    bg: '#323259',
    bg2: '#252547',
    bg3: '#1b1b38',
    bg4: '#13132b',
    border: '#323259',
    border2: '#252547',
    border3: '#1b1b38',
    border4: '#13132b',
    border5: '#13132b',
    fg: '#b4b4db',
    fgHeading: '#ffffff',
    fgText: '#ffffff',
    fgHighlight: palette.primary,
    layoutBg: '#151a30',
    separator: '#151a30',
    primary: palette.primary,
    success: palette.success,
    info: palette.info,
    warning: palette.warning,
    danger: palette.danger,
    primaryLight: '#b18aff',
    successLight: '#2ce69b',
    infoLight: '#42aaff',
    warningLight: '#ffc94d',
    dangerLight: '#ff708d',
};
var COSMIC_THEME = {
    name: 'cosmic',
    variables: tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, theme, { temperature: {
            arcFill: ['#2ec7fe', '#31ffad', '#7bff24', '#fff024', '#f7bd59'],
            arcEmpty: theme.bg2,
            thumbBg: '#ffffff',
            thumbBorder: '#ffffff',
        }, solar: {
            gradientLeft: theme.primary,
            gradientRight: theme.primary,
            shadowColor: 'rgba(0, 0, 0, 0)',
            secondSeriesFill: theme.bg2,
            radius: ['70%', '90%'],
        }, traffic: {
            tooltipBg: theme.bg,
            tooltipBorderColor: theme.border2,
            tooltipExtraCss: 'box-shadow: 0px 2px 46px 0 rgba(50, 50, 89); border-radius: 10px; padding: 4px 16px;',
            tooltipTextColor: theme.fgText,
            tooltipFontWeight: 'normal',
            yAxisSplitLine: theme.separator,
            lineBg: theme.border2,
            lineShadowBlur: '14',
            itemColor: theme.border2,
            itemBorderColor: theme.border2,
            itemEmphasisBorderColor: theme.primary,
            shadowLineDarkBg: theme.border3,
            shadowLineShadow: theme.border3,
            gradFrom: theme.bg,
            gradTo: theme.bg2,
        }, electricity: {
            tooltipBg: theme.bg,
            tooltipLineColor: theme.fgText,
            tooltipLineWidth: '0',
            tooltipBorderColor: theme.border2,
            tooltipExtraCss: 'box-shadow: 0px 2px 46px 0 rgba(0, 255, 170, 0.35); border-radius: 10px; padding: 8px 24px;',
            tooltipTextColor: theme.fgText,
            tooltipFontWeight: 'normal',
            axisLineColor: theme.border3,
            xAxisTextColor: theme.fg,
            yAxisSplitLine: theme.separator,
            itemBorderColor: theme.border2,
            lineStyle: 'dotted',
            lineWidth: '6',
            lineGradFrom: theme.success,
            lineGradTo: theme.warning,
            lineShadow: theme.bg4,
            areaGradFrom: theme.bg2,
            areaGradTo: theme.bg3,
            shadowLineDarkBg: theme.bg3,
        }, bubbleMap: {
            titleColor: theme.fgText,
            areaColor: theme.bg4,
            areaHoverColor: theme.fgHighlight,
            areaBorderColor: theme.border5,
        }, profitBarAnimationEchart: {
            textColor: theme.fgText,
            firstAnimationBarColor: theme.primary,
            secondAnimationBarColor: theme.success,
            splitLineStyleOpacity: '1',
            splitLineStyleWidth: '1',
            splitLineStyleColor: theme.border2,
            tooltipTextColor: theme.fgText,
            tooltipFontWeight: 'normal',
            tooltipFontSize: '16',
            tooltipBg: theme.bg,
            tooltipBorderColor: theme.border2,
            tooltipBorderWidth: '1',
            tooltipExtraCss: 'border-radius: 10px; padding: 4px 16px;',
        }, trafficBarEchart: {
            gradientFrom: theme.warningLight,
            gradientTo: theme.warning,
            shadow: theme.warningLight,
            shadowBlur: '5',
            axisTextColor: theme.fgText,
            axisFontSize: '12',
            tooltipBg: theme.bg,
            tooltipBorderColor: theme.border2,
            tooltipExtraCss: 'border-radius: 10px; padding: 4px 16px;',
            tooltipTextColor: theme.fgText,
            tooltipFontWeight: 'normal',
        }, countryOrders: {
            countryBorderColor: theme.border4,
            countryFillColor: theme.bg3,
            countryBorderWidth: '1',
            hoveredCountryBorderColor: theme.primary,
            hoveredCountryFillColor: theme.primaryLight,
            hoveredCountryBorderWidth: '1',
            chartAxisLineColor: theme.border4,
            chartAxisTextColor: theme.fg,
            chartAxisFontSize: '16',
            chartGradientTo: theme.primary,
            chartGradientFrom: theme.primaryLight,
            chartAxisSplitLine: theme.separator,
            chartShadowLineColor: theme.primaryLight,
            chartLineBottomShadowColor: theme.primary,
            chartInnerLineColor: theme.bg2,
        }, echarts: {
            bg: theme.bg,
            textColor: theme.fgText,
            axisLineColor: theme.fgText,
            splitLineColor: theme.separator,
            itemHoverShadowColor: 'rgba(0, 0, 0, 0.5)',
            tooltipBackgroundColor: theme.primary,
            areaOpacity: '1',
        }, chartjs: {
            axisLineColor: theme.separator,
            textColor: theme.fgText,
        }, orders: {
            tooltipBg: theme.bg,
            tooltipLineColor: 'rgba(0, 0, 0, 0)',
            tooltipLineWidth: '0',
            tooltipBorderColor: theme.border2,
            tooltipExtraCss: 'border-radius: 10px; padding: 8px 24px;',
            tooltipTextColor: theme.fgText,
            tooltipFontWeight: 'normal',
            tooltipFontSize: '20',
            axisLineColor: theme.border4,
            axisFontSize: '16',
            axisTextColor: theme.fg,
            yAxisSplitLine: theme.separator,
            itemBorderColor: theme.primary,
            lineStyle: 'solid',
            lineWidth: '4',
            // first line
            firstAreaGradFrom: theme.bg2,
            firstAreaGradTo: theme.bg2,
            firstShadowLineDarkBg: theme.bg2,
            // second line
            secondLineGradFrom: theme.primary,
            secondLineGradTo: theme.primary,
            secondAreaGradFrom: 'rgba(161, 110, 255, 0.8)',
            secondAreaGradTo: 'rgba(161, 110, 255, 0.5)',
            secondShadowLineDarkBg: theme.primary,
            // third line
            thirdLineGradFrom: theme.success,
            thirdLineGradTo: theme.successLight,
            thirdAreaGradFrom: 'rgba(0, 214, 143, 0.7)',
            thirdAreaGradTo: 'rgba(0, 214, 143, 0.4)',
            thirdShadowLineDarkBg: theme.success,
        }, profit: {
            bg: theme.bg,
            textColor: theme.fgText,
            axisLineColor: theme.border4,
            splitLineColor: theme.separator,
            areaOpacity: '1',
            axisFontSize: '16',
            axisTextColor: theme.fg,
            // first bar
            firstLineGradFrom: theme.bg2,
            firstLineGradTo: theme.bg2,
            firstLineShadow: 'rgba(0, 0, 0, 0)',
            // second bar
            secondLineGradFrom: theme.primary,
            secondLineGradTo: theme.primary,
            secondLineShadow: 'rgba(0, 0, 0, 0)',
            // third bar
            thirdLineGradFrom: theme.success,
            thirdLineGradTo: theme.successLight,
            thirdLineShadow: 'rgba(0, 0, 0, 0)',
        }, orderProfitLegend: {
            firstItem: theme.success,
            secondItem: theme.primary,
            thirdItem: theme.bg2,
        }, visitors: {
            tooltipBg: theme.bg,
            tooltipLineColor: 'rgba(0, 0, 0, 0)',
            tooltipLineWidth: '1',
            tooltipBorderColor: theme.border2,
            tooltipExtraCss: 'border-radius: 10px; padding: 8px 24px;',
            tooltipTextColor: theme.fgText,
            tooltipFontWeight: 'normal',
            tooltipFontSize: '20',
            axisLineColor: theme.border4,
            axisFontSize: '16',
            axisTextColor: theme.fg,
            yAxisSplitLine: theme.separator,
            itemBorderColor: theme.primary,
            lineStyle: 'dotted',
            lineWidth: '6',
            lineGradFrom: '#ffffff',
            lineGradTo: '#ffffff',
            lineShadow: 'rgba(0, 0, 0, 0)',
            areaGradFrom: theme.primary,
            areaGradTo: theme.primaryLight,
            innerLineStyle: 'solid',
            innerLineWidth: '1',
            innerAreaGradFrom: theme.success,
            innerAreaGradTo: theme.success,
        }, visitorsLegend: {
            firstIcon: theme.success,
            secondIcon: theme.primary,
        }, visitorsPie: {
            firstPieGradientLeft: theme.success,
            firstPieGradientRight: theme.successLight,
            firstPieShadowColor: 'rgba(0, 0, 0, 0)',
            firstPieRadius: ['70%', '90%'],
            secondPieGradientLeft: theme.warning,
            secondPieGradientRight: theme.warningLight,
            secondPieShadowColor: 'rgba(0, 0, 0, 0)',
            secondPieRadius: ['60%', '95%'],
            shadowOffsetX: '0',
            shadowOffsetY: '3',
        }, visitorsPieLegend: {
            firstSection: theme.warning,
            secondSection: theme.success,
        }, earningPie: {
            radius: ['65%', '100%'],
            center: ['50%', '50%'],
            fontSize: '22',
            firstPieGradientLeft: theme.success,
            firstPieGradientRight: theme.success,
            firstPieShadowColor: 'rgba(0, 0, 0, 0)',
            secondPieGradientLeft: theme.primary,
            secondPieGradientRight: theme.primary,
            secondPieShadowColor: 'rgba(0, 0, 0, 0)',
            thirdPieGradientLeft: theme.warning,
            thirdPieGradientRight: theme.warning,
            thirdPieShadowColor: 'rgba(0, 0, 0, 0)',
        }, earningLine: {
            gradFrom: theme.primary,
            gradTo: theme.primary,
            tooltipTextColor: theme.fgText,
            tooltipFontWeight: 'normal',
            tooltipFontSize: '16',
            tooltipBg: theme.bg,
            tooltipBorderColor: theme.border2,
            tooltipBorderWidth: '1',
            tooltipExtraCss: 'border-radius: 10px; padding: 4px 16px;',
        } }),
};


/***/ }),

/***/ "./src/app/@theme/styles/theme.dark.ts":
/*!*********************************************!*\
  !*** ./src/app/@theme/styles/theme.dark.ts ***!
  \*********************************************/
/*! exports provided: DARK_THEME */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DARK_THEME", function() { return DARK_THEME; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");

var palette = {
    primary: '#3366ff',
    success: '#00d68f',
    info: '#0095ff',
    warning: '#ffaa00',
    danger: '#ff3d71',
};
var theme = {
    fontMain: 'Open Sans, sans-serif',
    fontSecondary: 'Raleway, sans-serif',
    bg: '#222b45',
    bg2: '#1a2138',
    bg3: '#151a30',
    bg4: '#101426',
    border: '#222b45',
    border2: '#1a2138',
    border3: '#151a30',
    border4: '#101426',
    border5: '#101426',
    fg: '#8f9bb3',
    fgHeading: '#ffffff',
    fgText: '#ffffff',
    fgHighlight: palette.primary,
    layoutBg: '#1b1b38',
    separator: '#1b1b38',
    primary: palette.primary,
    success: palette.success,
    info: palette.info,
    warning: palette.warning,
    danger: palette.danger,
    primaryLight: '#598bff',
    successLight: '#2ce69b',
    infoLight: '#42aaff',
    warningLight: '#ffc94d',
    dangerLight: '#ff708d',
    chartLabelFontColor: '#8f9bb3',
    chartLabelFontSize: '14'
};
var chartTheme = {
    "textStyle": {
        "color": theme.chartLabelFontColor,
        "fontSize": theme.chartLabelFontSize
    },
    "title": {
        "textStyle": {
            "color": "#eeeeee"
        },
        "subtextStyle": {
            "color": "#aaaaaa"
        }
    },
    "line": {
        "itemStyle": {
            "normal": {
                "borderWidth": 1
            }
        },
        "lineStyle": {
            "normal": {
                "width": 6,
                "type": "dotted"
            }
        },
        "symbolSize": 4,
        "symbol": "circle",
        "smooth": false
    },
    "radar": {
        "itemStyle": {
            "normal": {
                "borderWidth": 1
            }
        },
        "lineStyle": {
            "normal": {
                "width": 2
            }
        },
        "symbolSize": 4,
        "symbol": "circle",
        "smooth": false
    },
    "bar": {
        "itemStyle": {
            "normal": {
                "barBorderWidth": 0,
                "barBorderColor": "#ccc"
            },
            "emphasis": {
                "barBorderWidth": 0,
                "barBorderColor": "#ccc"
            }
        }
    },
    "pie": {
        "itemStyle": {
            "normal": {
                "borderWidth": 0,
                "borderColor": "#ccc"
            },
            "emphasis": {
                "borderWidth": 0,
                "borderColor": "#ccc"
            }
        }
    },
    "scatter": {
        "itemStyle": {
            "normal": {
                "borderWidth": 0,
                "borderColor": "#ccc"
            },
            "emphasis": {
                "borderWidth": 0,
                "borderColor": "#ccc"
            }
        }
    },
    "boxplot": {
        "itemStyle": {
            "normal": {
                "borderWidth": 0,
                "borderColor": "#ccc"
            },
            "emphasis": {
                "borderWidth": 0,
                "borderColor": "#ccc"
            }
        }
    },
    "parallel": {
        "itemStyle": {
            "normal": {
                "borderWidth": 0,
                "borderColor": "#ccc"
            },
            "emphasis": {
                "borderWidth": 0,
                "borderColor": "#ccc"
            }
        }
    },
    "sankey": {
        "itemStyle": {
            "normal": {
                "borderWidth": 0,
                "borderColor": "#ccc"
            },
            "emphasis": {
                "borderWidth": 0,
                "borderColor": "#ccc"
            }
        }
    },
    "funnel": {
        "itemStyle": {
            "normal": {
                "borderWidth": 0,
                "borderColor": "#ccc"
            },
            "emphasis": {
                "borderWidth": 0,
                "borderColor": "#ccc"
            }
        }
    },
    "gauge": {
        "itemStyle": {
            "normal": {
                "borderWidth": 0,
                "borderColor": "#ccc"
            },
            "emphasis": {
                "borderWidth": 0,
                "borderColor": "#ccc"
            }
        }
    },
    "candlestick": {
        "itemStyle": {
            "normal": {
                "color": "#fd1050",
                "color0": "#0cf49b",
                "borderColor": "#fd1050",
                "borderColor0": "#0cf49b",
                "borderWidth": 1
            }
        }
    },
    "graph": {
        "itemStyle": {
            "normal": {
                "borderWidth": 0,
                "borderColor": "#ccc"
            }
        },
        "lineStyle": {
            "normal": {
                "width": 1,
                "color": "#aaaaaa"
            }
        },
        "symbolSize": 4,
        "symbol": "circle",
        "smooth": false,
        "color": [
            "#dd6b66",
            "#759aa0",
            "#e69d87",
            "#8dc1a9",
            "#ea7e53",
            "#eedd78",
            "#73a373",
            "#73b9bc",
            "#7289ab",
            "#91ca8c",
            "#f49f42"
        ],
        "label": {
            "normal": {
                "textStyle": {
                    "color": "#eeeeee"
                }
            }
        }
    },
    "map": {
        "itemStyle": {
            "normal": {
                "areaColor": "#eeeeee",
                "borderColor": "#444444",
                "borderWidth": 0.5
            },
            "emphasis": {
                "areaColor": "rgba(255,215,0,0.8)",
                "borderColor": "#444444",
                "borderWidth": 1
            }
        },
        "label": {
            "normal": {
                "textStyle": {
                    "color": "#000000"
                }
            },
            "emphasis": {
                "textStyle": {
                    "color": "rgb(100,0,0)"
                }
            }
        }
    },
    "geo": {
        "itemStyle": {
            "normal": {
                "areaColor": "#eeeeee",
                "borderColor": "#444444",
                "borderWidth": 0.5
            },
            "emphasis": {
                "areaColor": "rgba(255,215,0,0.8)",
                "borderColor": "#444444",
                "borderWidth": 1
            }
        },
        "label": {
            "normal": {
                "textStyle": {
                    "color": "#000000"
                }
            },
            "emphasis": {
                "textStyle": {
                    "color": "rgb(100,0,0)"
                }
            }
        }
    },
    "categoryAxis": {
        "axisLine": {
            "show": true,
            "lineStyle": {
                "color": theme.border4,
            }
        },
        "axisTick": {
            "show": true,
            "lineStyle": {
                "color": theme.border4,
            }
        },
        "axisLabel": {
            "show": true,
            "textStyle": {
                "color": theme.fg,
                "fontSize": "16"
            }
        },
    },
    "valueAxis": {
        "axisLine": {
            "show": true,
            "lineStyle": {
                "color": theme.border4,
            }
        },
        "axisTick": {
            "show": true,
            "lineStyle": {
                "color": theme.border4,
            }
        },
        "axisLabel": {
            "show": true,
            "textStyle": {
                "color": theme.fg,
                "fontSize": "16"
            }
        },
        "splitLine": {
            "show": true,
            "lineStyle": {
                "color": theme.separator
            }
        },
        "splitArea": {
            "show": false,
            "areaStyle": {
                "color": [
                    "#292929"
                ]
            }
        }
    },
    "logAxis": {
        "axisLine": {
            "show": true,
            "lineStyle": {
                "color": "#eeeeee"
            }
        },
        "axisTick": {
            "show": true,
            "lineStyle": {
                "color": "#e3e3e3"
            }
        },
        "axisLabel": {
            "show": true,
            "textStyle": {
                "color": "#eeeeee"
            }
        },
        "splitLine": {
            "show": true,
            "lineStyle": {
                "color": theme.separator
            }
        },
        "splitArea": {
            "show": false,
            "areaStyle": {
                "color": [
                    "#292929"
                ]
            }
        }
    },
    "timeAxis": {
        "axisLine": {
            "show": true,
            "lineStyle": {
                "color": "#eeeeee"
            }
        },
        "axisTick": {
            "show": true,
            "lineStyle": {
                "color": "#e3e3e3"
            }
        },
        "axisLabel": {
            "show": true,
            "textStyle": {
                "color": "#eeeeee"
            }
        },
        "splitLine": {
            "show": true,
            "lineStyle": {
                "color": theme.separator
            }
        },
        "splitArea": {
            "show": false,
            "areaStyle": {
                "color": [
                    "#292929"
                ]
            }
        }
    },
    "singleAxis": {
        "axisLine": {
            "show": true,
            "lineStyle": {
                "color": theme.separator
            }
        },
    },
    "toolbox": {
        "iconStyle": {
            "normal": {
                "borderColor": "#999999"
            },
            "emphasis": {
                "borderColor": "#666666"
            }
        }
    },
    "legend": {
        "textStyle": {
            "color": theme.fg,
            "fontSize": "14"
        }
    },
    "tooltip": {
        "axisPointer": {
            "lineStyle": {
                "color": "#eeeeee",
                "width": "1"
            },
            "crossStyle": {
                "color": "#eeeeee",
                "width": "1"
            }
        }
    },
    "timeline": {
        "lineStyle": {
            "color": "#eeeeee",
            "width": 1
        },
        "itemStyle": {
            "normal": {
                "color": "#dd6b66",
                "borderWidth": 1
            },
            "emphasis": {
                "color": "#a9334c"
            }
        },
        "controlStyle": {
            "normal": {
                "color": "#eeeeee",
                "borderColor": "#eeeeee",
                "borderWidth": 0.5
            },
            "emphasis": {
                "color": "#eeeeee",
                "borderColor": "#eeeeee",
                "borderWidth": 0.5
            }
        },
        "checkpointStyle": {
            "color": "#e43c59",
            "borderColor": "rgba(194,53,49,0.5)"
        },
        "label": {
            "normal": {
                "textStyle": {
                    "color": "#eeeeee"
                }
            },
            "emphasis": {
                "textStyle": {
                    "color": "#eeeeee"
                }
            }
        }
    },
    "visualMap": {
        "color": [
            "#bf444c",
            "#d88273",
            "#f6efa6"
        ]
    },
    "dataZoom": {
        "backgroundColor": "rgba(47,69,84,0)",
        "dataBackgroundColor": "rgba(255,255,255,0.3)",
        "fillerColor": "rgba(167,183,204,0.4)",
        "handleColor": "#a7b7cc",
        "handleSize": "100%",
        "textStyle": {
            "color": "#eeeeee"
        }
    },
    "markPoint": {
        "label": {
            "normal": {
                "textStyle": {
                    "color": "#eeeeee"
                }
            },
            "emphasis": {
                "textStyle": {
                    "color": "#eeeeee"
                }
            }
        }
    }
};
var DARK_THEME = {
    name: 'dark',
    variables: tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, theme, { kpi1: {
            itemBorderColor: theme.primary,
            lineStyle: 'dotted',
            lineWidth: '4',
            lineGradFrom: theme.primary,
            lineGradTo: theme.primary,
            areaGradFrom: 'rgba(51, 102, 255, 0.5)',
            areaGradTo: 'rgba(51, 102, 255, 0.1)',
        }, kpi2: {
            itemBorderColor: theme.primary,
            lineStyle: 'solid',
            lineWidth: '4',
            lineGradFrom: theme.primary,
            lineGradTo: theme.primary,
            areaGradFrom: 'rgba(51, 102, 255, 0.5)',
            areaGradTo: 'rgba(51, 102, 255, 0.1)',
        }, temperature: {
            arcFill: [theme.primary, theme.primary, theme.primary, theme.primary, theme.primary],
            arcEmpty: theme.bg2,
            thumbBg: theme.bg2,
            thumbBorder: theme.primary,
        }, solar: {
            gradientLeft: theme.primary,
            gradientRight: theme.primary,
            shadowColor: 'rgba(0, 0, 0, 0)',
            secondSeriesFill: theme.bg2,
            radius: ['80%', '90%'],
        }, traffic: {
            tooltipBg: theme.bg,
            tooltipBorderColor: theme.border2,
            tooltipExtraCss: 'border-radius: 10px; padding: 4px 16px;',
            tooltipTextColor: theme.fgText,
            tooltipFontWeight: 'normal',
            yAxisSplitLine: theme.separator,
            lineBg: theme.border4,
            lineShadowBlur: '1',
            itemColor: theme.border4,
            itemBorderColor: theme.border4,
            itemEmphasisBorderColor: theme.primary,
            shadowLineDarkBg: 'rgba(0, 0, 0, 0)',
            shadowLineShadow: 'rgba(0, 0, 0, 0)',
            gradFrom: theme.bg2,
            gradTo: theme.bg2,
        }, electricity: {
            tooltipBg: theme.bg,
            tooltipLineColor: theme.fgText,
            tooltipLineWidth: '0',
            tooltipBorderColor: theme.border2,
            tooltipExtraCss: 'border-radius: 10px; padding: 8px 24px;',
            tooltipTextColor: theme.fgText,
            tooltipFontWeight: 'normal',
            axisLineColor: theme.border3,
            xAxisTextColor: theme.fg,
            yAxisSplitLine: theme.separator,
            itemBorderColor: theme.primary,
            lineStyle: 'solid',
            lineWidth: '4',
            lineGradFrom: theme.primary,
            lineGradTo: theme.primary,
            lineShadow: 'rgba(0, 0, 0, 0)',
            areaGradFrom: theme.bg2,
            areaGradTo: theme.bg2,
            shadowLineDarkBg: 'rgba(0, 0, 0, 0)',
        }, bubbleMap: {
            titleColor: theme.fgText,
            areaColor: theme.bg4,
            areaHoverColor: theme.fgHighlight,
            areaBorderColor: theme.border5,
        }, profitBarAnimationEchart: {
            textColor: theme.fgText,
            firstAnimationBarColor: theme.primary,
            secondAnimationBarColor: theme.success,
            splitLineStyleOpacity: '1',
            splitLineStyleWidth: '1',
            splitLineStyleColor: theme.separator,
            tooltipTextColor: theme.fgText,
            tooltipFontWeight: 'normal',
            tooltipFontSize: '16',
            tooltipBg: theme.bg,
            tooltipBorderColor: theme.border2,
            tooltipBorderWidth: '1',
            tooltipExtraCss: 'border-radius: 10px; padding: 4px 16px;',
        }, trafficBarEchart: {
            gradientFrom: theme.warningLight,
            gradientTo: theme.warning,
            shadow: theme.warningLight,
            shadowBlur: '0',
            axisTextColor: theme.fgText,
            axisFontSize: '12',
            tooltipBg: theme.bg,
            tooltipBorderColor: theme.border2,
            tooltipExtraCss: 'border-radius: 10px; padding: 4px 16px;',
            tooltipTextColor: theme.fgText,
            tooltipFontWeight: 'normal',
        }, countryOrders: {
            countryBorderColor: theme.border4,
            countryFillColor: theme.bg3,
            countryBorderWidth: '1',
            hoveredCountryBorderColor: theme.primary,
            hoveredCountryFillColor: theme.primaryLight,
            hoveredCountryBorderWidth: '1',
            chartAxisLineColor: theme.border4,
            chartAxisTextColor: theme.fg,
            chartAxisFontSize: '16',
            chartGradientTo: theme.primary,
            chartGradientFrom: theme.primaryLight,
            chartAxisSplitLine: theme.separator,
            chartShadowLineColor: theme.primaryLight,
            chartLineBottomShadowColor: theme.primary,
            chartInnerLineColor: theme.bg2,
        }, echarts: {
            bg: theme.bg,
            textColor: theme.fgText,
            axisLineColor: theme.fgText,
            splitLineColor: theme.separator,
            itemHoverShadowColor: 'rgba(0, 0, 0, 0.5)',
            tooltipBackgroundColor: theme.primary,
            areaOpacity: '0.7',
        }, chartjs: {
            axisLineColor: theme.separator,
            textColor: theme.fgText,
        }, orders: {
            tooltipBg: theme.bg,
            tooltipLineColor: 'rgba(0, 0, 0, 0)',
            tooltipLineWidth: '0',
            tooltipBorderColor: theme.border2,
            tooltipExtraCss: 'border-radius: 10px; padding: 8px 24px;',
            tooltipTextColor: theme.fgText,
            tooltipFontWeight: 'normal',
            tooltipFontSize: '20',
            axisLineColor: theme.border4,
            axisFontSize: '16',
            axisTextColor: theme.fg,
            yAxisSplitLine: theme.separator,
            itemBorderColor: theme.primary,
            lineStyle: 'solid',
            lineWidth: '4',
            // first line
            firstAreaGradFrom: theme.bg3,
            firstAreaGradTo: theme.bg3,
            firstShadowLineDarkBg: 'rgba(0, 0, 0, 0)',
            // second line
            secondLineGradFrom: theme.primary,
            secondLineGradTo: theme.primary,
            secondAreaGradFrom: 'rgba(51, 102, 255, 0.2)',
            secondAreaGradTo: 'rgba(51, 102, 255, 0)',
            secondShadowLineDarkBg: 'rgba(0, 0, 0, 0)',
            // third line
            thirdLineGradFrom: theme.success,
            thirdLineGradTo: theme.successLight,
            thirdAreaGradFrom: 'rgba(0, 214, 143, 0.2)',
            thirdAreaGradTo: 'rgba(0, 214, 143, 0)',
            thirdShadowLineDarkBg: 'rgba(0, 0, 0, 0)',
        }, profit: {
            bg: theme.bg,
            textColor: theme.fgText,
            axisLineColor: theme.border4,
            splitLineColor: theme.separator,
            areaOpacity: '1',
            axisFontSize: '16',
            axisTextColor: theme.fg,
            // first bar
            firstLineGradFrom: theme.bg3,
            firstLineGradTo: theme.bg3,
            firstLineShadow: 'rgba(0, 0, 0, 0)',
            // second bar
            secondLineGradFrom: theme.primary,
            secondLineGradTo: theme.primary,
            secondLineShadow: 'rgba(0, 0, 0, 0)',
            // third bar
            thirdLineGradFrom: theme.success,
            thirdLineGradTo: theme.successLight,
            thirdLineShadow: 'rgba(0, 0, 0, 0)',
        }, orderProfitLegend: {
            firstItem: theme.success,
            secondItem: theme.primary,
            thirdItem: theme.bg3,
        }, visitors: {
            tooltipBg: theme.bg,
            tooltipLineColor: 'rgba(0, 0, 0, 0)',
            tooltipLineWidth: '0',
            tooltipBorderColor: theme.border2,
            tooltipExtraCss: 'border-radius: 10px; padding: 8px 24px;',
            tooltipTextColor: theme.fgText,
            tooltipFontWeight: 'normal',
            tooltipFontSize: '20',
            axisLineColor: theme.border4,
            axisFontSize: '16',
            axisTextColor: theme.fg,
            yAxisSplitLine: theme.separator,
            itemBorderColor: theme.primary,
            lineStyle: 'dotted',
            lineWidth: '6',
            lineGradFrom: '#ffffff',
            lineGradTo: '#ffffff',
            lineShadow: 'rgba(0, 0, 0, 0)',
            areaGradFrom: theme.primary,
            areaGradTo: theme.primaryLight,
            innerLineStyle: 'solid',
            innerLineWidth: '1',
            innerAreaGradFrom: theme.success,
            innerAreaGradTo: theme.success,
        }, visitorsLegend: {
            firstIcon: theme.success,
            secondIcon: theme.primary,
        }, visitorsPie: {
            firstPieGradientLeft: theme.success,
            firstPieGradientRight: theme.success,
            firstPieShadowColor: 'rgba(0, 0, 0, 0)',
            firstPieRadius: ['70%', '90%'],
            secondPieGradientLeft: theme.warning,
            secondPieGradientRight: theme.warningLight,
            secondPieShadowColor: 'rgba(0, 0, 0, 0)',
            secondPieRadius: ['60%', '97%'],
            shadowOffsetX: '0',
            shadowOffsetY: '0',
        }, visitorsPieLegend: {
            firstSection: theme.warning,
            secondSection: theme.success,
        }, earningPie: {
            radius: ['65%', '100%'],
            center: ['50%', '50%'],
            fontSize: '22',
            firstPieGradientLeft: theme.success,
            firstPieGradientRight: theme.success,
            firstPieShadowColor: 'rgba(0, 0, 0, 0)',
            secondPieGradientLeft: theme.primary,
            secondPieGradientRight: theme.primary,
            secondPieShadowColor: 'rgba(0, 0, 0, 0)',
            thirdPieGradientLeft: theme.warning,
            thirdPieGradientRight: theme.warning,
            thirdPieShadowColor: 'rgba(0, 0, 0, 0)',
        }, earningLine: {
            gradFrom: theme.primary,
            gradTo: theme.primary,
            tooltipTextColor: theme.fgText,
            tooltipFontWeight: 'normal',
            tooltipFontSize: '16',
            tooltipBg: theme.bg,
            tooltipBorderColor: theme.border2,
            tooltipBorderWidth: '1',
            tooltipExtraCss: 'border-radius: 10px; padding: 4px 16px;',
        } }),
    chartTheme: chartTheme
};


/***/ }),

/***/ "./src/app/@theme/styles/theme.default.ts":
/*!************************************************!*\
  !*** ./src/app/@theme/styles/theme.default.ts ***!
  \************************************************/
/*! exports provided: DEFAULT_THEME */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_THEME", function() { return DEFAULT_THEME; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");

var palette = {
    primary: '#4ea397',
    success: '#00d68f',
    info: '#0095ff',
    warning: '#ffaa00',
    danger: '#ff3d71',
};
var theme = {
    fontMain: 'Open Sans, sans-serif',
    fontSecondary: 'Raleway, sans-serif',
    bg: '#ffffff',
    bg2: '#f7f9fc',
    bg3: '#edf1f7',
    bg4: '#e4e9f2',
    border: '#ffffff',
    border2: '#f7f9fc',
    border3: '#edf1f7',
    border4: '#e4e9f2',
    border5: '#c5cee0',
    fg: '#8f9bb3',
    fgHeading: '#1a2138',
    fgText: '#1a2138',
    fgHighlight: palette.primary,
    layoutBg: '#f7f9fc',
    separator: '#edf1f7',
    primary: palette.primary,
    success: palette.success,
    info: palette.info,
    warning: palette.warning,
    danger: palette.danger,
    primaryLight: '#598bff',
    successLight: '#2ce69b',
    infoLight: '#42aaff',
    warningLight: '#ffc94d',
    dangerLight: '#ff708d',
    chartLabelFontColor: '#999999',
    chartLabelFontSize: '14'
};
var chartTheme = {
    "color": [
        "#4ea397",
        "#22c3aa",
        "#7bd9a5",
        "#d0648a",
        "#f58db2",
        "#f2b3c9"
    ],
    "backgroundColor": "rgba(255,255,255,0)",
    "textStyle": {
        "color": theme.chartLabelFontColor,
        "fontSize": theme.chartLabelFontSize
    },
    "title": {
        "textStyle": {
            "color": "#666666"
        },
        "subtextStyle": {
            "color": "#999999"
        }
    },
    "line": {
        "itemStyle": {
            "normal": {
                "borderWidth": "2"
            }
        },
        "lineStyle": {
            "normal": {
                "width": "3"
            }
        },
        "symbolSize": "8",
        "symbol": "emptyCircle",
        "smooth": false
    },
    "radar": {
        "itemStyle": {
            "normal": {
                "borderWidth": "2"
            }
        },
        "lineStyle": {
            "normal": {
                "width": "3"
            }
        },
        "symbolSize": "8",
        "symbol": "emptyCircle",
        "smooth": false
    },
    "bar": {
        "itemStyle": {
            "normal": {
                "barBorderWidth": 0,
                "barBorderColor": "#ccc"
            },
            "emphasis": {
                "barBorderWidth": 0,
                "barBorderColor": "#ccc"
            }
        }
    },
    "pie": {
        "itemStyle": {
            "normal": {
                "borderWidth": 0,
                "borderColor": "#ccc"
            },
            "emphasis": {
                "borderWidth": 0,
                "borderColor": "#ccc"
            }
        }
    },
    "scatter": {
        "itemStyle": {
            "normal": {
                "borderWidth": 0,
                "borderColor": "#ccc"
            },
            "emphasis": {
                "borderWidth": 0,
                "borderColor": "#ccc"
            }
        }
    },
    "boxplot": {
        "itemStyle": {
            "normal": {
                "borderWidth": 0,
                "borderColor": "#ccc"
            },
            "emphasis": {
                "borderWidth": 0,
                "borderColor": "#ccc"
            }
        }
    },
    "parallel": {
        "itemStyle": {
            "normal": {
                "borderWidth": 0,
                "borderColor": "#ccc"
            },
            "emphasis": {
                "borderWidth": 0,
                "borderColor": "#ccc"
            }
        }
    },
    "sankey": {
        "itemStyle": {
            "normal": {
                "borderWidth": 0,
                "borderColor": "#ccc"
            },
            "emphasis": {
                "borderWidth": 0,
                "borderColor": "#ccc"
            }
        }
    },
    "funnel": {
        "itemStyle": {
            "normal": {
                "borderWidth": 0,
                "borderColor": "#ccc"
            },
            "emphasis": {
                "borderWidth": 0,
                "borderColor": "#ccc"
            }
        }
    },
    "gauge": {
        "itemStyle": {
            "normal": {
                "borderWidth": 0,
                "borderColor": "#ccc"
            },
            "emphasis": {
                "borderWidth": 0,
                "borderColor": "#ccc"
            }
        }
    },
    "candlestick": {
        "itemStyle": {
            "normal": {
                "color": "#d0648a",
                "color0": "transparent",
                "borderColor": "#d0648a",
                "borderColor0": "#22c3aa",
                "borderWidth": "1"
            }
        }
    },
    "graph": {
        "itemStyle": {
            "normal": {
                "borderWidth": 0,
                "borderColor": "#ccc"
            }
        },
        "lineStyle": {
            "normal": {
                "width": "1",
                "color": "#cccccc"
            }
        },
        "symbolSize": "8",
        "symbol": "emptyCircle",
        "smooth": false,
        "color": [
            "#4ea397",
            "#22c3aa",
            "#7bd9a5",
            "#d0648a",
            "#f58db2",
            "#f2b3c9"
        ],
        "label": {
            "normal": {
                "textStyle": {
                    "color": "#ffffff"
                }
            }
        }
    },
    "map": {
        "itemStyle": {
            "normal": {
                "areaColor": "#eeeeee",
                "borderColor": "#999999",
                "borderWidth": 0.5
            },
            "emphasis": {
                "areaColor": "rgba(34,195,170,0.25)",
                "borderColor": "#22c3aa",
                "borderWidth": 1
            }
        },
        "label": {
            "normal": {
                "textStyle": {
                    "color": "#28544e"
                }
            },
            "emphasis": {
                "textStyle": {
                    "color": "rgb(52,158,142)"
                }
            }
        }
    },
    "geo": {
        "itemStyle": {
            "normal": {
                "areaColor": "#eeeeee",
                "borderColor": "#999999",
                "borderWidth": 0.5
            },
            "emphasis": {
                "areaColor": "rgba(34,195,170,0.25)",
                "borderColor": "#22c3aa",
                "borderWidth": 1
            }
        },
        "label": {
            "normal": {
                "textStyle": {
                    "color": "#28544e"
                }
            },
            "emphasis": {
                "textStyle": {
                    "color": "rgb(52,158,142)"
                }
            }
        }
    },
    "categoryAxis": {
        "axisLine": {
            "show": true,
            "lineStyle": {
                "color": "#cccccc"
            }
        },
        "axisTick": {
            "show": false,
            "lineStyle": {
                "color": "#333"
            }
        },
        "axisLabel": {
            "show": true,
            "textStyle": {
                "color": "#999999",
                "fontSize": theme.chartLabelFontSize
            }
        },
        "splitLine": {
            "show": true,
            "lineStyle": {
                "color": [
                    "#eeeeee"
                ]
            }
        },
        "splitArea": {
            "show": false,
            "areaStyle": {
                "color": [
                    "rgba(250,250,250,0.05)",
                    "rgba(200,200,200,0.02)"
                ]
            }
        }
    },
    "valueAxis": {
        "axisLine": {
            "show": true,
            "lineStyle": {
                "color": "#cccccc"
            }
        },
        "axisTick": {
            "show": false,
            "lineStyle": {
                "color": "#333"
            }
        },
        "axisLabel": {
            "show": true,
            "textStyle": {
                "color": "#999999",
                "fontSize": theme.chartLabelFontSize
            }
        },
        "splitLine": {
            "show": true,
            "lineStyle": {
                "color": [
                    "#eeeeee"
                ]
            }
        },
        "splitArea": {
            "show": false,
            "areaStyle": {
                "color": [
                    "rgba(250,250,250,0.05)",
                    "rgba(200,200,200,0.02)"
                ]
            }
        }
    },
    "logAxis": {
        "axisLine": {
            "show": true,
            "lineStyle": {
                "color": "#cccccc"
            }
        },
        "axisTick": {
            "show": false,
            "lineStyle": {
                "color": "#333"
            }
        },
        "axisLabel": {
            "show": true,
            "textStyle": {
                "color": "#999999",
                "fontSize": theme.chartLabelFontSize
            }
        },
        "splitLine": {
            "show": true,
            "lineStyle": {
                "color": [
                    "#eeeeee"
                ]
            }
        },
        "splitArea": {
            "show": false,
            "areaStyle": {
                "color": [
                    "rgba(250,250,250,0.05)",
                    "rgba(200,200,200,0.02)"
                ]
            }
        }
    },
    "timeAxis": {
        "axisLine": {
            "show": true,
            "lineStyle": {
                "color": "#cccccc"
            }
        },
        "axisTick": {
            "show": false,
            "lineStyle": {
                "color": "#333"
            }
        },
        "axisLabel": {
            "show": true,
            "textStyle": {
                "color": "#999999",
                "fontSize": theme.chartLabelFontSize
            }
        },
        "splitLine": {
            "show": true,
            "lineStyle": {
                "color": [
                    "#eeeeee"
                ]
            }
        },
        "splitArea": {
            "show": false,
            "areaStyle": {
                "color": [
                    "rgba(250,250,250,0.05)",
                    "rgba(200,200,200,0.02)"
                ]
            }
        }
    },
    "toolbox": {
        "iconStyle": {
            "normal": {
                "borderColor": "#999999"
            },
            "emphasis": {
                "borderColor": "#666666"
            }
        }
    },
    "legend": {
        "textStyle": {
            "color": "#999999"
        }
    },
    "tooltip": {
        "axisPointer": {
            "lineStyle": {
                "color": "#cccccc",
                "width": 1
            },
            "crossStyle": {
                "color": "#cccccc",
                "width": 1
            }
        }
    },
    "timeline": {
        "lineStyle": {
            "color": "#4ea397",
            "width": 1
        },
        "itemStyle": {
            "normal": {
                "color": "#4ea397",
                "borderWidth": 1
            },
            "emphasis": {
                "color": "#4ea397"
            }
        },
        "controlStyle": {
            "normal": {
                "color": "#4ea397",
                "borderColor": "#4ea397",
                "borderWidth": 0.5
            },
            "emphasis": {
                "color": "#4ea397",
                "borderColor": "#4ea397",
                "borderWidth": 0.5
            }
        },
        "checkpointStyle": {
            "color": "#4ea397",
            "borderColor": "rgba(60,235,210,0.3)"
        },
        "label": {
            "normal": {
                "textStyle": {
                    "color": "#4ea397"
                }
            },
            "emphasis": {
                "textStyle": {
                    "color": "#4ea397"
                }
            }
        }
    },
    "visualMap": {
        "color": [
            "#d0648a",
            "#22c3aa",
            "#adfff1"
        ]
    },
    "dataZoom": {
        "backgroundColor": "rgba(255,255,255,0)",
        "dataBackgroundColor": "rgba(222,222,222,1)",
        "fillerColor": "rgba(114,230,212,0.25)",
        "handleColor": "#cccccc",
        "handleSize": "100%",
        "textStyle": {
            "color": "#999999"
        }
    },
    "markPoint": {
        "label": {
            "normal": {
                "textStyle": {
                    "color": "#ffffff"
                }
            },
            "emphasis": {
                "textStyle": {
                    "color": "#ffffff"
                }
            }
        }
    }
};
var DEFAULT_THEME = {
    name: 'default',
    chartTheme: chartTheme,
    variables: tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, theme, { kpi1: {
            itemBorderColor: theme.primary,
            lineStyle: 'dotted',
            lineWidth: '4',
            lineGradFrom: theme.primary,
            lineGradTo: theme.primary,
            areaGradFrom: theme.primary,
            areaGradTo: theme.primary + '20'
        }, kpi2: {
            itemBorderColor: theme.primary,
            lineStyle: 'solid',
            lineWidth: '4',
            lineGradFrom: theme.primary,
            lineGradTo: theme.primary,
            areaGradFrom: theme.primary + '80',
            areaGradTo: theme.primary + '00'
        }, currencyPies: {
            color: [theme.primary, theme.success, theme.info, theme.warning, theme.danger],
            itemBorderColor: theme.primary,
            itemColorFrom: theme.primary + '80',
            itemColorTo: theme.primary + '00',
        }, times: {
            itemBorderColor: theme.primary,
            lineStyle: 'solid',
            lineWidth: '4',
            lineGradFrom: theme.primary,
            lineGradTo: theme.primary,
            areaGradFrom: theme.primary + '80',
            areaGradTo: theme.primary + '10',
        }, bankBars: {
            itemBorderColor: theme.primary,
            itemColorFrom: theme.primary + '80',
            itemColorTo: theme.primary + '00',
        }, countryOrders: {
            countryBorderColor: theme.border4,
            countryFillColor: theme.bg3,
            countryBorderWidth: '1',
            hoveredCountryBorderColor: theme.primary,
            hoveredCountryFillColor: theme.primaryLight,
            hoveredCountryBorderWidth: '1',
            chartAxisLineColor: theme.border4,
            chartAxisTextColor: theme.fg,
            chartAxisFontSize: '16',
            chartGradientTo: theme.primary,
            chartGradientFrom: theme.primaryLight,
            chartAxisSplitLine: theme.separator,
            chartShadowLineColor: theme.primaryLight,
            chartLineBottomShadowColor: theme.primary,
            chartInnerLineColor: theme.bg2,
        } })
};


/***/ }),

/***/ "./src/app/@theme/theme.module.ts":
/*!****************************************!*\
  !*** ./src/app/@theme/theme.module.ts ***!
  \****************************************/
/*! exports provided: ThemeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemeModule", function() { return ThemeModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var echarts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! echarts */ "../../node_modules/echarts/index.js");
/* harmony import */ var echarts__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(echarts__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nebular/theme */ "../../node_modules/@nebular/theme/fesm5/index.js");
/* harmony import */ var _nebular_eva_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @nebular/eva-icons */ "../../node_modules/@nebular/eva-icons/fesm5/index.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components */ "./src/app/@theme/components/index.ts");
/* harmony import */ var _styles_theme_default__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./styles/theme.default */ "./src/app/@theme/styles/theme.default.ts");
/* harmony import */ var _styles_theme_dark__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./styles/theme.dark */ "./src/app/@theme/styles/theme.dark.ts");
/* harmony import */ var _styles_theme_cosmic__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./styles/theme.cosmic */ "./src/app/@theme/styles/theme.cosmic.ts");
/* harmony import */ var _styles_theme_corporate__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./styles/theme.corporate */ "./src/app/@theme/styles/theme.corporate.ts");











// echarts.registerTheme('default', DEFAULT_THEME.chartTheme);
echarts__WEBPACK_IMPORTED_MODULE_3__["registerTheme"](_styles_theme_default__WEBPACK_IMPORTED_MODULE_7__["DEFAULT_THEME"].name, _styles_theme_default__WEBPACK_IMPORTED_MODULE_7__["DEFAULT_THEME"].chartTheme);
echarts__WEBPACK_IMPORTED_MODULE_3__["registerTheme"](_styles_theme_dark__WEBPACK_IMPORTED_MODULE_8__["DARK_THEME"].name, _styles_theme_dark__WEBPACK_IMPORTED_MODULE_8__["DARK_THEME"].chartTheme);
var NB_MODULES = [
    _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbMenuModule"],
    _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbThemeModule"],
    _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbLayoutModule"],
    _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbSidebarModule"],
    _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbSelectModule"],
    _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbButtonModule"],
    _nebular_eva_icons__WEBPACK_IMPORTED_MODULE_5__["NbEvaIconsModule"],
    _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbIconModule"]
];
var ThemeModule = /** @class */ (function () {
    function ThemeModule() {
    }
    ThemeModule_1 = ThemeModule;
    ThemeModule.forRoot = function () {
        return {
            ngModule: ThemeModule_1,
            providers: tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"](_nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbThemeModule"].forRoot({
                name: 'default',
            }, [_styles_theme_default__WEBPACK_IMPORTED_MODULE_7__["DEFAULT_THEME"], _styles_theme_cosmic__WEBPACK_IMPORTED_MODULE_9__["COSMIC_THEME"], _styles_theme_corporate__WEBPACK_IMPORTED_MODULE_10__["CORPORATE_THEME"], _styles_theme_dark__WEBPACK_IMPORTED_MODULE_8__["DARK_THEME"]]).providers),
        };
    };
    var ThemeModule_1;
    ThemeModule = ThemeModule_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_components__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"]],
            imports: tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"]([
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
            ], NB_MODULES),
            exports: [_components__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"]]
        })
    ], ThemeModule);
    return ThemeModule;
}());



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/*\n  Declare variables before making them global.\n  dart-sass doesn't allow to declare variable with !global.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/*\n\nAccording to the specification (https://www.w3.org/TR/css-scoping-1/#host-selector)\n:host and :host-context are pseudo-classes. So we assume they could be combined,\nlike other pseudo-classes, even same ones.\nFor example: ':nth-of-type(2n):nth-of-type(even)'.\n\nIdeal solution would be to prepend any selector with :host-context([dir=rtl]).\nThen nebular components will behave as an html element and respond to [dir] attribute on any level,\nso direction could be overridden on any component level.\n\nImplementation code:\n\n@mixin nb-rtl() {\n  // add # to scss interpolation statement.\n  // it works in comments and we can't use it here\n  @at-root {selector-append(':host-context([dir=rtl])', &)} {\n    @content;\n  }\n}\n\nAnd when we call it somewhere:\n\n:host {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n:host-context(...) {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n\nResult will look like:\n\n:host-context([dir=rtl]):host .some-class {\n  ...\n}\n:host-context([dir=rtl]):host-context(...) .some-class {\n  ...\n}\n\n*\n  Side note:\n  :host-context():host selector are valid. https://lists.w3.org/Archives/Public/www-style/2015Feb/0305.html\n\n  :host-context([dir=rtl]):host-context(...) should match any permutation,\n  so order is not important.\n*\n\n\nCurrently, there're two problems with this approach:\n\nFirst, is that we can't combine :host, :host-context. Angular bugs #14349, #19199.\nFor the moment of writing, the only possible way is:\n:host {\n  :host-context(...) {\n    ...\n  }\n}\nIt doesn't work for us because mixin could be called somewhere deeper, like:\n:host {\n  p {\n    @include nb-rtl() { ... }\n  }\n}\nWe are not able to go up to :host level to place content passed to mixin.\n\nThe second problem is that we only can be sure that we appending :host-context([dir=rtl]) to another\n:host/:host-context pseudo-class when called in theme files (*.theme.scss).\n  *\n    Side note:\n    Currently, nb-install-component uses another approach where :host prepended with the theme name\n    (https://github.com/angular/angular/blob/5b96078624b0a4760f2dbcf6fdf0bd62791be5bb/packages/compiler/src/shadow_css.ts#L441),\n    but it was made to be able to use current realization of rtl and it can be rewritten back to\n    :host-context($theme) once we will be able to use multiple shadow selectors.\n  *\nBut when it's called in *.component.scss we can't be sure, that selector starts with :host/:host-context,\nbecause angular allows omitting pseudo-classes if we don't need to style :host component itself.\nWe can break such selectors, by just appending :host-context([dir=rtl]) to them.\n  ***\n    Possible solution\n    check if we in theme by some theme variables and if so append, otherwise nest like\n    @at-root :host-context([dir=rtl]) {\n      // add # to scss interpolation statement.\n      // it works in comments and we can't use it here\n      {&} {\n        @content;\n      }\n    }\n    What if :host specified? Can we add space in :host-context(...) :host?\n    Or maybe add :host selector anyway? If multiple :host selectors are allowed\n  ***\n\n\nProblems with the current approach.\n\n1. Direction can be applied only on document level, because mixin prepends theme class,\nwhich placed on the body.\n2. *.component.scss styles should be in :host selector. Otherwise angular will add host\nattribute to [dir=rtl] attribute as well.\n\n\nGeneral problems.\n\nLtr is default document direction, but for proper work of nb-ltr (means ltr only),\n[dir=ltr] should be specified at least somewhere. ':not([dir=rtl]' not applicable here,\nbecause it's satisfy any parent, that don't have [dir=rtl] attribute.\nPrevious approach was to use single rtl mixin and reset ltr properties to initial value.\nBut sometimes it's hard to find, what the previous value should be. And such mixin call looks too verbose.\n*/\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/*\n\nAccording to the specification (https://www.w3.org/TR/css-scoping-1/#host-selector)\n:host and :host-context are pseudo-classes. So we assume they could be combined,\nlike other pseudo-classes, even same ones.\nFor example: ':nth-of-type(2n):nth-of-type(even)'.\n\nIdeal solution would be to prepend any selector with :host-context([dir=rtl]).\nThen nebular components will behave as an html element and respond to [dir] attribute on any level,\nso direction could be overridden on any component level.\n\nImplementation code:\n\n@mixin nb-rtl() {\n  // add # to scss interpolation statement.\n  // it works in comments and we can't use it here\n  @at-root {selector-append(':host-context([dir=rtl])', &)} {\n    @content;\n  }\n}\n\nAnd when we call it somewhere:\n\n:host {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n:host-context(...) {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n\nResult will look like:\n\n:host-context([dir=rtl]):host .some-class {\n  ...\n}\n:host-context([dir=rtl]):host-context(...) .some-class {\n  ...\n}\n\n*\n  Side note:\n  :host-context():host selector are valid. https://lists.w3.org/Archives/Public/www-style/2015Feb/0305.html\n\n  :host-context([dir=rtl]):host-context(...) should match any permutation,\n  so order is not important.\n*\n\n\nCurrently, there're two problems with this approach:\n\nFirst, is that we can't combine :host, :host-context. Angular bugs #14349, #19199.\nFor the moment of writing, the only possible way is:\n:host {\n  :host-context(...) {\n    ...\n  }\n}\nIt doesn't work for us because mixin could be called somewhere deeper, like:\n:host {\n  p {\n    @include nb-rtl() { ... }\n  }\n}\nWe are not able to go up to :host level to place content passed to mixin.\n\nThe second problem is that we only can be sure that we appending :host-context([dir=rtl]) to another\n:host/:host-context pseudo-class when called in theme files (*.theme.scss).\n  *\n    Side note:\n    Currently, nb-install-component uses another approach where :host prepended with the theme name\n    (https://github.com/angular/angular/blob/5b96078624b0a4760f2dbcf6fdf0bd62791be5bb/packages/compiler/src/shadow_css.ts#L441),\n    but it was made to be able to use current realization of rtl and it can be rewritten back to\n    :host-context($theme) once we will be able to use multiple shadow selectors.\n  *\nBut when it's called in *.component.scss we can't be sure, that selector starts with :host/:host-context,\nbecause angular allows omitting pseudo-classes if we don't need to style :host component itself.\nWe can break such selectors, by just appending :host-context([dir=rtl]) to them.\n  ***\n    Possible solution\n    check if we in theme by some theme variables and if so append, otherwise nest like\n    @at-root :host-context([dir=rtl]) {\n      // add # to scss interpolation statement.\n      // it works in comments and we can't use it here\n      {&} {\n        @content;\n      }\n    }\n    What if :host specified? Can we add space in :host-context(...) :host?\n    Or maybe add :host selector anyway? If multiple :host selectors are allowed\n  ***\n\n\nProblems with the current approach.\n\n1. Direction can be applied only on document level, because mixin prepends theme class,\nwhich placed on the body.\n2. *.component.scss styles should be in :host selector. Otherwise angular will add host\nattribute to [dir=rtl] attribute as well.\n\n\nGeneral problems.\n\nLtr is default document direction, but for proper work of nb-ltr (means ltr only),\n[dir=ltr] should be specified at least somewhere. ':not([dir=rtl]' not applicable here,\nbecause it's satisfy any parent, that don't have [dir=rtl] attribute.\nPrevious approach was to use single rtl mixin and reset ltr properties to initial value.\nBut sometimes it's hard to find, what the previous value should be. And such mixin call looks too verbose.\n*/\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/*\n\nAccording to the specification (https://www.w3.org/TR/css-scoping-1/#host-selector)\n:host and :host-context are pseudo-classes. So we assume they could be combined,\nlike other pseudo-classes, even same ones.\nFor example: ':nth-of-type(2n):nth-of-type(even)'.\n\nIdeal solution would be to prepend any selector with :host-context([dir=rtl]).\nThen nebular components will behave as an html element and respond to [dir] attribute on any level,\nso direction could be overridden on any component level.\n\nImplementation code:\n\n@mixin nb-rtl() {\n  // add # to scss interpolation statement.\n  // it works in comments and we can't use it here\n  @at-root {selector-append(':host-context([dir=rtl])', &)} {\n    @content;\n  }\n}\n\nAnd when we call it somewhere:\n\n:host {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n:host-context(...) {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n\nResult will look like:\n\n:host-context([dir=rtl]):host .some-class {\n  ...\n}\n:host-context([dir=rtl]):host-context(...) .some-class {\n  ...\n}\n\n*\n  Side note:\n  :host-context():host selector are valid. https://lists.w3.org/Archives/Public/www-style/2015Feb/0305.html\n\n  :host-context([dir=rtl]):host-context(...) should match any permutation,\n  so order is not important.\n*\n\n\nCurrently, there're two problems with this approach:\n\nFirst, is that we can't combine :host, :host-context. Angular bugs #14349, #19199.\nFor the moment of writing, the only possible way is:\n:host {\n  :host-context(...) {\n    ...\n  }\n}\nIt doesn't work for us because mixin could be called somewhere deeper, like:\n:host {\n  p {\n    @include nb-rtl() { ... }\n  }\n}\nWe are not able to go up to :host level to place content passed to mixin.\n\nThe second problem is that we only can be sure that we appending :host-context([dir=rtl]) to another\n:host/:host-context pseudo-class when called in theme files (*.theme.scss).\n  *\n    Side note:\n    Currently, nb-install-component uses another approach where :host prepended with the theme name\n    (https://github.com/angular/angular/blob/5b96078624b0a4760f2dbcf6fdf0bd62791be5bb/packages/compiler/src/shadow_css.ts#L441),\n    but it was made to be able to use current realization of rtl and it can be rewritten back to\n    :host-context($theme) once we will be able to use multiple shadow selectors.\n  *\nBut when it's called in *.component.scss we can't be sure, that selector starts with :host/:host-context,\nbecause angular allows omitting pseudo-classes if we don't need to style :host component itself.\nWe can break such selectors, by just appending :host-context([dir=rtl]) to them.\n  ***\n    Possible solution\n    check if we in theme by some theme variables and if so append, otherwise nest like\n    @at-root :host-context([dir=rtl]) {\n      // add # to scss interpolation statement.\n      // it works in comments and we can't use it here\n      {&} {\n        @content;\n      }\n    }\n    What if :host specified? Can we add space in :host-context(...) :host?\n    Or maybe add :host selector anyway? If multiple :host selectors are allowed\n  ***\n\n\nProblems with the current approach.\n\n1. Direction can be applied only on document level, because mixin prepends theme class,\nwhich placed on the body.\n2. *.component.scss styles should be in :host selector. Otherwise angular will add host\nattribute to [dir=rtl] attribute as well.\n\n\nGeneral problems.\n\nLtr is default document direction, but for proper work of nb-ltr (means ltr only),\n[dir=ltr] should be specified at least somewhere. ':not([dir=rtl]' not applicable here,\nbecause it's satisfy any parent, that don't have [dir=rtl] attribute.\nPrevious approach was to use single rtl mixin and reset ltr properties to initial value.\nBut sometimes it's hard to find, what the previous value should be. And such mixin call looks too verbose.\n*/\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/*\n\nAccording to the specification (https://www.w3.org/TR/css-scoping-1/#host-selector)\n:host and :host-context are pseudo-classes. So we assume they could be combined,\nlike other pseudo-classes, even same ones.\nFor example: ':nth-of-type(2n):nth-of-type(even)'.\n\nIdeal solution would be to prepend any selector with :host-context([dir=rtl]).\nThen nebular components will behave as an html element and respond to [dir] attribute on any level,\nso direction could be overridden on any component level.\n\nImplementation code:\n\n@mixin nb-rtl() {\n  // add # to scss interpolation statement.\n  // it works in comments and we can't use it here\n  @at-root {selector-append(':host-context([dir=rtl])', &)} {\n    @content;\n  }\n}\n\nAnd when we call it somewhere:\n\n:host {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n:host-context(...) {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n\nResult will look like:\n\n:host-context([dir=rtl]):host .some-class {\n  ...\n}\n:host-context([dir=rtl]):host-context(...) .some-class {\n  ...\n}\n\n*\n  Side note:\n  :host-context():host selector are valid. https://lists.w3.org/Archives/Public/www-style/2015Feb/0305.html\n\n  :host-context([dir=rtl]):host-context(...) should match any permutation,\n  so order is not important.\n*\n\n\nCurrently, there're two problems with this approach:\n\nFirst, is that we can't combine :host, :host-context. Angular bugs #14349, #19199.\nFor the moment of writing, the only possible way is:\n:host {\n  :host-context(...) {\n    ...\n  }\n}\nIt doesn't work for us because mixin could be called somewhere deeper, like:\n:host {\n  p {\n    @include nb-rtl() { ... }\n  }\n}\nWe are not able to go up to :host level to place content passed to mixin.\n\nThe second problem is that we only can be sure that we appending :host-context([dir=rtl]) to another\n:host/:host-context pseudo-class when called in theme files (*.theme.scss).\n  *\n    Side note:\n    Currently, nb-install-component uses another approach where :host prepended with the theme name\n    (https://github.com/angular/angular/blob/5b96078624b0a4760f2dbcf6fdf0bd62791be5bb/packages/compiler/src/shadow_css.ts#L441),\n    but it was made to be able to use current realization of rtl and it can be rewritten back to\n    :host-context($theme) once we will be able to use multiple shadow selectors.\n  *\nBut when it's called in *.component.scss we can't be sure, that selector starts with :host/:host-context,\nbecause angular allows omitting pseudo-classes if we don't need to style :host component itself.\nWe can break such selectors, by just appending :host-context([dir=rtl]) to them.\n  ***\n    Possible solution\n    check if we in theme by some theme variables and if so append, otherwise nest like\n    @at-root :host-context([dir=rtl]) {\n      // add # to scss interpolation statement.\n      // it works in comments and we can't use it here\n      {&} {\n        @content;\n      }\n    }\n    What if :host specified? Can we add space in :host-context(...) :host?\n    Or maybe add :host selector anyway? If multiple :host selectors are allowed\n  ***\n\n\nProblems with the current approach.\n\n1. Direction can be applied only on document level, because mixin prepends theme class,\nwhich placed on the body.\n2. *.component.scss styles should be in :host selector. Otherwise angular will add host\nattribute to [dir=rtl] attribute as well.\n\n\nGeneral problems.\n\nLtr is default document direction, but for proper work of nb-ltr (means ltr only),\n[dir=ltr] should be specified at least somewhere. ':not([dir=rtl]' not applicable here,\nbecause it's satisfy any parent, that don't have [dir=rtl] attribute.\nPrevious approach was to use single rtl mixin and reset ltr properties to initial value.\nBut sometimes it's hard to find, what the previous value should be. And such mixin call looks too verbose.\n*/\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/*\n\nAccording to the specification (https://www.w3.org/TR/css-scoping-1/#host-selector)\n:host and :host-context are pseudo-classes. So we assume they could be combined,\nlike other pseudo-classes, even same ones.\nFor example: ':nth-of-type(2n):nth-of-type(even)'.\n\nIdeal solution would be to prepend any selector with :host-context([dir=rtl]).\nThen nebular components will behave as an html element and respond to [dir] attribute on any level,\nso direction could be overridden on any component level.\n\nImplementation code:\n\n@mixin nb-rtl() {\n  // add # to scss interpolation statement.\n  // it works in comments and we can't use it here\n  @at-root {selector-append(':host-context([dir=rtl])', &)} {\n    @content;\n  }\n}\n\nAnd when we call it somewhere:\n\n:host {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n:host-context(...) {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n\nResult will look like:\n\n:host-context([dir=rtl]):host .some-class {\n  ...\n}\n:host-context([dir=rtl]):host-context(...) .some-class {\n  ...\n}\n\n*\n  Side note:\n  :host-context():host selector are valid. https://lists.w3.org/Archives/Public/www-style/2015Feb/0305.html\n\n  :host-context([dir=rtl]):host-context(...) should match any permutation,\n  so order is not important.\n*\n\n\nCurrently, there're two problems with this approach:\n\nFirst, is that we can't combine :host, :host-context. Angular bugs #14349, #19199.\nFor the moment of writing, the only possible way is:\n:host {\n  :host-context(...) {\n    ...\n  }\n}\nIt doesn't work for us because mixin could be called somewhere deeper, like:\n:host {\n  p {\n    @include nb-rtl() { ... }\n  }\n}\nWe are not able to go up to :host level to place content passed to mixin.\n\nThe second problem is that we only can be sure that we appending :host-context([dir=rtl]) to another\n:host/:host-context pseudo-class when called in theme files (*.theme.scss).\n  *\n    Side note:\n    Currently, nb-install-component uses another approach where :host prepended with the theme name\n    (https://github.com/angular/angular/blob/5b96078624b0a4760f2dbcf6fdf0bd62791be5bb/packages/compiler/src/shadow_css.ts#L441),\n    but it was made to be able to use current realization of rtl and it can be rewritten back to\n    :host-context($theme) once we will be able to use multiple shadow selectors.\n  *\nBut when it's called in *.component.scss we can't be sure, that selector starts with :host/:host-context,\nbecause angular allows omitting pseudo-classes if we don't need to style :host component itself.\nWe can break such selectors, by just appending :host-context([dir=rtl]) to them.\n  ***\n    Possible solution\n    check if we in theme by some theme variables and if so append, otherwise nest like\n    @at-root :host-context([dir=rtl]) {\n      // add # to scss interpolation statement.\n      // it works in comments and we can't use it here\n      {&} {\n        @content;\n      }\n    }\n    What if :host specified? Can we add space in :host-context(...) :host?\n    Or maybe add :host selector anyway? If multiple :host selectors are allowed\n  ***\n\n\nProblems with the current approach.\n\n1. Direction can be applied only on document level, because mixin prepends theme class,\nwhich placed on the body.\n2. *.component.scss styles should be in :host selector. Otherwise angular will add host\nattribute to [dir=rtl] attribute as well.\n\n\nGeneral problems.\n\nLtr is default document direction, but for proper work of nb-ltr (means ltr only),\n[dir=ltr] should be specified at least somewhere. ':not([dir=rtl]' not applicable here,\nbecause it's satisfy any parent, that don't have [dir=rtl] attribute.\nPrevious approach was to use single rtl mixin and reset ltr properties to initial value.\nBut sometimes it's hard to find, what the previous value should be. And such mixin call looks too verbose.\n*/\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/*\n\nAccording to the specification (https://www.w3.org/TR/css-scoping-1/#host-selector)\n:host and :host-context are pseudo-classes. So we assume they could be combined,\nlike other pseudo-classes, even same ones.\nFor example: ':nth-of-type(2n):nth-of-type(even)'.\n\nIdeal solution would be to prepend any selector with :host-context([dir=rtl]).\nThen nebular components will behave as an html element and respond to [dir] attribute on any level,\nso direction could be overridden on any component level.\n\nImplementation code:\n\n@mixin nb-rtl() {\n  // add # to scss interpolation statement.\n  // it works in comments and we can't use it here\n  @at-root {selector-append(':host-context([dir=rtl])', &)} {\n    @content;\n  }\n}\n\nAnd when we call it somewhere:\n\n:host {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n:host-context(...) {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n\nResult will look like:\n\n:host-context([dir=rtl]):host .some-class {\n  ...\n}\n:host-context([dir=rtl]):host-context(...) .some-class {\n  ...\n}\n\n*\n  Side note:\n  :host-context():host selector are valid. https://lists.w3.org/Archives/Public/www-style/2015Feb/0305.html\n\n  :host-context([dir=rtl]):host-context(...) should match any permutation,\n  so order is not important.\n*\n\n\nCurrently, there're two problems with this approach:\n\nFirst, is that we can't combine :host, :host-context. Angular bugs #14349, #19199.\nFor the moment of writing, the only possible way is:\n:host {\n  :host-context(...) {\n    ...\n  }\n}\nIt doesn't work for us because mixin could be called somewhere deeper, like:\n:host {\n  p {\n    @include nb-rtl() { ... }\n  }\n}\nWe are not able to go up to :host level to place content passed to mixin.\n\nThe second problem is that we only can be sure that we appending :host-context([dir=rtl]) to another\n:host/:host-context pseudo-class when called in theme files (*.theme.scss).\n  *\n    Side note:\n    Currently, nb-install-component uses another approach where :host prepended with the theme name\n    (https://github.com/angular/angular/blob/5b96078624b0a4760f2dbcf6fdf0bd62791be5bb/packages/compiler/src/shadow_css.ts#L441),\n    but it was made to be able to use current realization of rtl and it can be rewritten back to\n    :host-context($theme) once we will be able to use multiple shadow selectors.\n  *\nBut when it's called in *.component.scss we can't be sure, that selector starts with :host/:host-context,\nbecause angular allows omitting pseudo-classes if we don't need to style :host component itself.\nWe can break such selectors, by just appending :host-context([dir=rtl]) to them.\n  ***\n    Possible solution\n    check if we in theme by some theme variables and if so append, otherwise nest like\n    @at-root :host-context([dir=rtl]) {\n      // add # to scss interpolation statement.\n      // it works in comments and we can't use it here\n      {&} {\n        @content;\n      }\n    }\n    What if :host specified? Can we add space in :host-context(...) :host?\n    Or maybe add :host selector anyway? If multiple :host selectors are allowed\n  ***\n\n\nProblems with the current approach.\n\n1. Direction can be applied only on document level, because mixin prepends theme class,\nwhich placed on the body.\n2. *.component.scss styles should be in :host selector. Otherwise angular will add host\nattribute to [dir=rtl] attribute as well.\n\n\nGeneral problems.\n\nLtr is default document direction, but for proper work of nb-ltr (means ltr only),\n[dir=ltr] should be specified at least somewhere. ':not([dir=rtl]' not applicable here,\nbecause it's satisfy any parent, that don't have [dir=rtl] attribute.\nPrevious approach was to use single rtl mixin and reset ltr properties to initial value.\nBut sometimes it's hard to find, what the previous value should be. And such mixin call looks too verbose.\n*/\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/*\n\nAccording to the specification (https://www.w3.org/TR/css-scoping-1/#host-selector)\n:host and :host-context are pseudo-classes. So we assume they could be combined,\nlike other pseudo-classes, even same ones.\nFor example: ':nth-of-type(2n):nth-of-type(even)'.\n\nIdeal solution would be to prepend any selector with :host-context([dir=rtl]).\nThen nebular components will behave as an html element and respond to [dir] attribute on any level,\nso direction could be overridden on any component level.\n\nImplementation code:\n\n@mixin nb-rtl() {\n  // add # to scss interpolation statement.\n  // it works in comments and we can't use it here\n  @at-root {selector-append(':host-context([dir=rtl])', &)} {\n    @content;\n  }\n}\n\nAnd when we call it somewhere:\n\n:host {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n:host-context(...) {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n\nResult will look like:\n\n:host-context([dir=rtl]):host .some-class {\n  ...\n}\n:host-context([dir=rtl]):host-context(...) .some-class {\n  ...\n}\n\n*\n  Side note:\n  :host-context():host selector are valid. https://lists.w3.org/Archives/Public/www-style/2015Feb/0305.html\n\n  :host-context([dir=rtl]):host-context(...) should match any permutation,\n  so order is not important.\n*\n\n\nCurrently, there're two problems with this approach:\n\nFirst, is that we can't combine :host, :host-context. Angular bugs #14349, #19199.\nFor the moment of writing, the only possible way is:\n:host {\n  :host-context(...) {\n    ...\n  }\n}\nIt doesn't work for us because mixin could be called somewhere deeper, like:\n:host {\n  p {\n    @include nb-rtl() { ... }\n  }\n}\nWe are not able to go up to :host level to place content passed to mixin.\n\nThe second problem is that we only can be sure that we appending :host-context([dir=rtl]) to another\n:host/:host-context pseudo-class when called in theme files (*.theme.scss).\n  *\n    Side note:\n    Currently, nb-install-component uses another approach where :host prepended with the theme name\n    (https://github.com/angular/angular/blob/5b96078624b0a4760f2dbcf6fdf0bd62791be5bb/packages/compiler/src/shadow_css.ts#L441),\n    but it was made to be able to use current realization of rtl and it can be rewritten back to\n    :host-context($theme) once we will be able to use multiple shadow selectors.\n  *\nBut when it's called in *.component.scss we can't be sure, that selector starts with :host/:host-context,\nbecause angular allows omitting pseudo-classes if we don't need to style :host component itself.\nWe can break such selectors, by just appending :host-context([dir=rtl]) to them.\n  ***\n    Possible solution\n    check if we in theme by some theme variables and if so append, otherwise nest like\n    @at-root :host-context([dir=rtl]) {\n      // add # to scss interpolation statement.\n      // it works in comments and we can't use it here\n      {&} {\n        @content;\n      }\n    }\n    What if :host specified? Can we add space in :host-context(...) :host?\n    Or maybe add :host selector anyway? If multiple :host selectors are allowed\n  ***\n\n\nProblems with the current approach.\n\n1. Direction can be applied only on document level, because mixin prepends theme class,\nwhich placed on the body.\n2. *.component.scss styles should be in :host selector. Otherwise angular will add host\nattribute to [dir=rtl] attribute as well.\n\n\nGeneral problems.\n\nLtr is default document direction, but for proper work of nb-ltr (means ltr only),\n[dir=ltr] should be specified at least somewhere. ':not([dir=rtl]' not applicable here,\nbecause it's satisfy any parent, that don't have [dir=rtl] attribute.\nPrevious approach was to use single rtl mixin and reset ltr properties to initial value.\nBut sometimes it's hard to find, what the previous value should be. And such mixin call looks too verbose.\n*/\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/*\n\nAccording to the specification (https://www.w3.org/TR/css-scoping-1/#host-selector)\n:host and :host-context are pseudo-classes. So we assume they could be combined,\nlike other pseudo-classes, even same ones.\nFor example: ':nth-of-type(2n):nth-of-type(even)'.\n\nIdeal solution would be to prepend any selector with :host-context([dir=rtl]).\nThen nebular components will behave as an html element and respond to [dir] attribute on any level,\nso direction could be overridden on any component level.\n\nImplementation code:\n\n@mixin nb-rtl() {\n  // add # to scss interpolation statement.\n  // it works in comments and we can't use it here\n  @at-root {selector-append(':host-context([dir=rtl])', &)} {\n    @content;\n  }\n}\n\nAnd when we call it somewhere:\n\n:host {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n:host-context(...) {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n\nResult will look like:\n\n:host-context([dir=rtl]):host .some-class {\n  ...\n}\n:host-context([dir=rtl]):host-context(...) .some-class {\n  ...\n}\n\n*\n  Side note:\n  :host-context():host selector are valid. https://lists.w3.org/Archives/Public/www-style/2015Feb/0305.html\n\n  :host-context([dir=rtl]):host-context(...) should match any permutation,\n  so order is not important.\n*\n\n\nCurrently, there're two problems with this approach:\n\nFirst, is that we can't combine :host, :host-context. Angular bugs #14349, #19199.\nFor the moment of writing, the only possible way is:\n:host {\n  :host-context(...) {\n    ...\n  }\n}\nIt doesn't work for us because mixin could be called somewhere deeper, like:\n:host {\n  p {\n    @include nb-rtl() { ... }\n  }\n}\nWe are not able to go up to :host level to place content passed to mixin.\n\nThe second problem is that we only can be sure that we appending :host-context([dir=rtl]) to another\n:host/:host-context pseudo-class when called in theme files (*.theme.scss).\n  *\n    Side note:\n    Currently, nb-install-component uses another approach where :host prepended with the theme name\n    (https://github.com/angular/angular/blob/5b96078624b0a4760f2dbcf6fdf0bd62791be5bb/packages/compiler/src/shadow_css.ts#L441),\n    but it was made to be able to use current realization of rtl and it can be rewritten back to\n    :host-context($theme) once we will be able to use multiple shadow selectors.\n  *\nBut when it's called in *.component.scss we can't be sure, that selector starts with :host/:host-context,\nbecause angular allows omitting pseudo-classes if we don't need to style :host component itself.\nWe can break such selectors, by just appending :host-context([dir=rtl]) to them.\n  ***\n    Possible solution\n    check if we in theme by some theme variables and if so append, otherwise nest like\n    @at-root :host-context([dir=rtl]) {\n      // add # to scss interpolation statement.\n      // it works in comments and we can't use it here\n      {&} {\n        @content;\n      }\n    }\n    What if :host specified? Can we add space in :host-context(...) :host?\n    Or maybe add :host selector anyway? If multiple :host selectors are allowed\n  ***\n\n\nProblems with the current approach.\n\n1. Direction can be applied only on document level, because mixin prepends theme class,\nwhich placed on the body.\n2. *.component.scss styles should be in :host selector. Otherwise angular will add host\nattribute to [dir=rtl] attribute as well.\n\n\nGeneral problems.\n\nLtr is default document direction, but for proper work of nb-ltr (means ltr only),\n[dir=ltr] should be specified at least somewhere. ':not([dir=rtl]' not applicable here,\nbecause it's satisfy any parent, that don't have [dir=rtl] attribute.\nPrevious approach was to use single rtl mixin and reset ltr properties to initial value.\nBut sometimes it's hard to find, what the previous value should be. And such mixin call looks too verbose.\n*/\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/*\n\nAccording to the specification (https://www.w3.org/TR/css-scoping-1/#host-selector)\n:host and :host-context are pseudo-classes. So we assume they could be combined,\nlike other pseudo-classes, even same ones.\nFor example: ':nth-of-type(2n):nth-of-type(even)'.\n\nIdeal solution would be to prepend any selector with :host-context([dir=rtl]).\nThen nebular components will behave as an html element and respond to [dir] attribute on any level,\nso direction could be overridden on any component level.\n\nImplementation code:\n\n@mixin nb-rtl() {\n  // add # to scss interpolation statement.\n  // it works in comments and we can't use it here\n  @at-root {selector-append(':host-context([dir=rtl])', &)} {\n    @content;\n  }\n}\n\nAnd when we call it somewhere:\n\n:host {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n:host-context(...) {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n\nResult will look like:\n\n:host-context([dir=rtl]):host .some-class {\n  ...\n}\n:host-context([dir=rtl]):host-context(...) .some-class {\n  ...\n}\n\n*\n  Side note:\n  :host-context():host selector are valid. https://lists.w3.org/Archives/Public/www-style/2015Feb/0305.html\n\n  :host-context([dir=rtl]):host-context(...) should match any permutation,\n  so order is not important.\n*\n\n\nCurrently, there're two problems with this approach:\n\nFirst, is that we can't combine :host, :host-context. Angular bugs #14349, #19199.\nFor the moment of writing, the only possible way is:\n:host {\n  :host-context(...) {\n    ...\n  }\n}\nIt doesn't work for us because mixin could be called somewhere deeper, like:\n:host {\n  p {\n    @include nb-rtl() { ... }\n  }\n}\nWe are not able to go up to :host level to place content passed to mixin.\n\nThe second problem is that we only can be sure that we appending :host-context([dir=rtl]) to another\n:host/:host-context pseudo-class when called in theme files (*.theme.scss).\n  *\n    Side note:\n    Currently, nb-install-component uses another approach where :host prepended with the theme name\n    (https://github.com/angular/angular/blob/5b96078624b0a4760f2dbcf6fdf0bd62791be5bb/packages/compiler/src/shadow_css.ts#L441),\n    but it was made to be able to use current realization of rtl and it can be rewritten back to\n    :host-context($theme) once we will be able to use multiple shadow selectors.\n  *\nBut when it's called in *.component.scss we can't be sure, that selector starts with :host/:host-context,\nbecause angular allows omitting pseudo-classes if we don't need to style :host component itself.\nWe can break such selectors, by just appending :host-context([dir=rtl]) to them.\n  ***\n    Possible solution\n    check if we in theme by some theme variables and if so append, otherwise nest like\n    @at-root :host-context([dir=rtl]) {\n      // add # to scss interpolation statement.\n      // it works in comments and we can't use it here\n      {&} {\n        @content;\n      }\n    }\n    What if :host specified? Can we add space in :host-context(...) :host?\n    Or maybe add :host selector anyway? If multiple :host selectors are allowed\n  ***\n\n\nProblems with the current approach.\n\n1. Direction can be applied only on document level, because mixin prepends theme class,\nwhich placed on the body.\n2. *.component.scss styles should be in :host selector. Otherwise angular will add host\nattribute to [dir=rtl] attribute as well.\n\n\nGeneral problems.\n\nLtr is default document direction, but for proper work of nb-ltr (means ltr only),\n[dir=ltr] should be specified at least somewhere. ':not([dir=rtl]' not applicable here,\nbecause it's satisfy any parent, that don't have [dir=rtl] attribute.\nPrevious approach was to use single rtl mixin and reset ltr properties to initial value.\nBut sometimes it's hard to find, what the previous value should be. And such mixin call looks too verbose.\n*/\n/*\n  :host can be prefixed\n  https://github.com/angular/angular/blob/8d0ee34939f14c07876d222c25b405ed458a34d3/packages/compiler/src/shadow_css.ts#L441\n\n  We have to use :host instead of :host-context($theme), to be able to prefix theme class\n  with something defined inside of @content, by prefixing &.\n  For example this scss code:\n    .nb-theme-default {\n      .some-selector & {\n        ...\n      }\n    }\n  Will result in next css:\n    .some-selector .nb-theme-default {\n      ...\n    }\n\n  It doesn't work with :host-context because angular splitting it in two selectors and removes\n  prefix in one of the selectors.\n*/\n.nb-theme-default :host ::ng-deep router-outlet + * {\n  display: block;\n  -webkit-animation: fade 1s;\n          animation: fade 1s;\n}\n@-webkit-keyframes fade {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@keyframes fade {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n.nb-theme-default :host ::ng-deep nb-route-tabset .route-tabset {\n  margin-bottom: 20px;\n}\n.nb-theme-default :host ::ng-deep nb-card-body {\n  display: flex;\n  overflow: hidden;\n}\n.nb-theme-default :host ::ng-deep .app-chart {\n  display: flex;\n  flex: 1;\n}\n.nb-theme-default :host ::ng-deep nx-chart, .nb-theme-default :host ::ng-deep .d3 {\n  flex: 1;\n}\n/*\n  :host can be prefixed\n  https://github.com/angular/angular/blob/8d0ee34939f14c07876d222c25b405ed458a34d3/packages/compiler/src/shadow_css.ts#L441\n\n  We have to use :host instead of :host-context($theme), to be able to prefix theme class\n  with something defined inside of @content, by prefixing &.\n  For example this scss code:\n    .nb-theme-default {\n      .some-selector & {\n        ...\n      }\n    }\n  Will result in next css:\n    .some-selector .nb-theme-default {\n      ...\n    }\n\n  It doesn't work with :host-context because angular splitting it in two selectors and removes\n  prefix in one of the selectors.\n*/\n.nb-theme-dark :host ::ng-deep router-outlet + * {\n  display: block;\n  -webkit-animation: fade 1s;\n          animation: fade 1s;\n}\n@keyframes fade {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n.nb-theme-dark :host ::ng-deep nb-route-tabset .route-tabset {\n  margin-bottom: 20px;\n}\n.nb-theme-dark :host ::ng-deep nb-card-body {\n  display: flex;\n  overflow: hidden;\n}\n.nb-theme-dark :host ::ng-deep .app-chart {\n  display: flex;\n  flex: 1;\n}\n.nb-theme-dark :host ::ng-deep nx-chart, .nb-theme-dark :host ::ng-deep .d3 {\n  flex: 1;\n}\n/*\n  :host can be prefixed\n  https://github.com/angular/angular/blob/8d0ee34939f14c07876d222c25b405ed458a34d3/packages/compiler/src/shadow_css.ts#L441\n\n  We have to use :host instead of :host-context($theme), to be able to prefix theme class\n  with something defined inside of @content, by prefixing &.\n  For example this scss code:\n    .nb-theme-default {\n      .some-selector & {\n        ...\n      }\n    }\n  Will result in next css:\n    .some-selector .nb-theme-default {\n      ...\n    }\n\n  It doesn't work with :host-context because angular splitting it in two selectors and removes\n  prefix in one of the selectors.\n*/\n.nb-theme-cosmic :host ::ng-deep router-outlet + * {\n  display: block;\n  -webkit-animation: fade 1s;\n          animation: fade 1s;\n}\n@keyframes fade {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n.nb-theme-cosmic :host ::ng-deep nb-route-tabset .route-tabset {\n  margin-bottom: 20px;\n}\n.nb-theme-cosmic :host ::ng-deep nb-card-body {\n  display: flex;\n  overflow: hidden;\n}\n.nb-theme-cosmic :host ::ng-deep .app-chart {\n  display: flex;\n  flex: 1;\n}\n.nb-theme-cosmic :host ::ng-deep nx-chart, .nb-theme-cosmic :host ::ng-deep .d3 {\n  flex: 1;\n}\n/*\n  :host can be prefixed\n  https://github.com/angular/angular/blob/8d0ee34939f14c07876d222c25b405ed458a34d3/packages/compiler/src/shadow_css.ts#L441\n\n  We have to use :host instead of :host-context($theme), to be able to prefix theme class\n  with something defined inside of @content, by prefixing &.\n  For example this scss code:\n    .nb-theme-default {\n      .some-selector & {\n        ...\n      }\n    }\n  Will result in next css:\n    .some-selector .nb-theme-default {\n      ...\n    }\n\n  It doesn't work with :host-context because angular splitting it in two selectors and removes\n  prefix in one of the selectors.\n*/\n.nb-theme-corporate :host ::ng-deep router-outlet + * {\n  display: block;\n  -webkit-animation: fade 1s;\n          animation: fade 1s;\n}\n@keyframes fade {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n.nb-theme-corporate :host ::ng-deep nb-route-tabset .route-tabset {\n  margin-bottom: 20px;\n}\n.nb-theme-corporate :host ::ng-deep nb-card-body {\n  display: flex;\n  overflow: hidden;\n}\n.nb-theme-corporate :host ::ng-deep .app-chart {\n  display: flex;\n  flex: 1;\n}\n.nb-theme-corporate :host ::ng-deep nx-chart, .nb-theme-corporate :host ::ng-deep .d3 {\n  flex: 1;\n}"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nebular/theme */ "../../node_modules/@nebular/theme/fesm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm5/index.js");
/* harmony import */ var projects_nx_charts_src_public_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! projects/nx-charts/src/public-api */ "../nx-charts/src/public-api.ts");






var AppComponent = /** @class */ (function () {
    function AppComponent(nbThemeService, chartThemeService) {
        this.nbThemeService = nbThemeService;
        this.chartThemeService = chartThemeService;
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.menu = [
            {
                title: 'Analytical List',
                icon: 'bar-chart-outline',
                link: '/analytical-list',
                home: true,
            },
            {
                title: 'Cash Flow',
                icon: 'credit-card-outline',
                link: '/cash-flow',
            },
            {
                title: 'Chart without Annotation',
                icon: 'pie-chart-outline',
                link: '/chart-without-annotation/basics',
            },
            {
                title: 'Nx Chart Tester',
                icon: 'activity-outline',
                link: '/nx-chart-tester',
            },
            {
                title: 'D3 Charts',
                icon: 'color-palette-outline',
                link: '/d3/correlation',
            }
        ];
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.nbThemeService.onThemeChange()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (_a) {
            var name = _a.name;
            return name;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.destroy$))
            .subscribe(function (themeName) {
            _this.chartThemeService.changeTheme(themeName);
        });
    };
    AppComponent.prototype.ngOnDestroy = function () {
        this.destroy$.next();
        this.destroy$.complete();
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "../../node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbThemeService"],
            projects_nx_charts_src_public_api__WEBPACK_IMPORTED_MODULE_5__["NxChartService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: isMock, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isMock", function() { return isMock; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "../../node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "../../node_modules/@fortawesome/angular-fontawesome/fesm5/angular-fontawesome.js");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @nebular/theme */ "../../node_modules/@nebular/theme/fesm5/index.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var angular_odata_es5__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! angular-odata-es5 */ "../../node_modules/angular-odata-es5/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "../../node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var projects_nx_annotation_src_public_api__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! projects/nx-annotation/src/public-api */ "../nx-annotation/src/public-api.ts");
/* harmony import */ var projects_nx_charts_src_public_api__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! projects/nx-charts/src/public-api */ "../nx-charts/src/public-api.ts");
/* harmony import */ var _http_interceptor__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./http-interceptor */ "./src/app/http-interceptor.ts");
/* harmony import */ var _mock_http_interceptor_mock__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./mock/http-interceptor.mock */ "./src/app/mock/http-interceptor.mock.ts");
/* harmony import */ var _theme_theme_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./@theme/theme.module */ "./src/app/@theme/theme.module.ts");
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/service-worker */ "../../node_modules/@angular/service-worker/fesm5/service-worker.js");
















var isMock = _environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].mock;
var manifest = new projects_nx_annotation_src_public_api__WEBPACK_IMPORTED_MODULE_10__["ManifestService"]({
    dataSources: {
        "": {
            "uri": "/sap/opu/odata/sap/SEPMRA_SO_ANA/",
            "type": "OData",
            "settings": {
                "annotations": [
                    "SEPMRA_SO_ANA_ANNO_MDL"
                ],
                "localUri": "localService/SEPMRA_SO_ANA/metadata.xml"
            }
        },
        "SEPMRA_SO_ANA_ANNO_MDL": {
            // "uri": "/sap/opu/odata/IWFND/CATALOGSERVICE;v=2/Annotations(TechnicalName='SEPMRA_SO_ANA_ANNO_MDL',Version='0001')/$value/",
            "type": "ODataAnnotation",
            "settings": {
                "localUri": "localService/SEPMRA_SO_ANA/Annotation.xml" //"localService/SEPMRA_SO_ANA/SEPMRA_SO_ANA_ANNO_MDL.xml"
            }
        },
        "Z_OVP_DEMO_CDS": {
            "uri": "/sap/opu/odata/sap/Z_OVP_DEMO_CDS/",
            "type": "OData",
            "settings": {
                "annotations": [
                    "Z_OVP_DEMO_CDS_VAN"
                ],
                "localUri": "localService/Z_OVP_DEMO_CDS/metadata.xml"
            }
        },
        "Z_OVP_DEMO_CDS_VAN": {
            // "uri": "/sap/opu/odata/IWFND/CATALOGSERVICE;v=2/Annotations(TechnicalName='Z_OVP_DEMO_CDS_VAN',Version='0001')/$value/",
            "type": "ODataAnnotation",
            "settings": {
                "localUri": "localService/Z_OVP_DEMO_CDS/Z_OVP_DEMO_CDS_VAN.xml"
            }
        }
    }
});
var routes = [
    // {
    //   path: '',
    //   redirectTo: 'chart-without-annotation',
    //   pathMatch: 'full'
    // },
    {
        path: '',
        loadChildren: function () { return __webpack_require__.e(/*! import() | pages-pages-module */ "pages-pages-module").then(__webpack_require__.bind(null, /*! ./pages/pages.module */ "./src/app/pages/pages.module.ts"))
            .then(function (m) { return m.PagesModule; }); },
    },
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(routes),
                _theme_theme_module__WEBPACK_IMPORTED_MODULE_14__["ThemeModule"].forRoot(),
                _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbLayoutModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbButtonModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbSidebarModule"].forRoot(),
                _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbMenuModule"].forRoot(),
                _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeModule"],
                _angular_service_worker__WEBPACK_IMPORTED_MODULE_15__["ServiceWorkerModule"].register('ngsw-worker.js', { enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].production })
            ],
            providers: [
                { provide: angular_odata_es5__WEBPACK_IMPORTED_MODULE_8__["ODataConfiguration"], useClass: projects_nx_annotation_src_public_api__WEBPACK_IMPORTED_MODULE_10__["OdataConfigService"] },
                angular_odata_es5__WEBPACK_IMPORTED_MODULE_8__["ODataServiceFactory"],
                projects_nx_annotation_src_public_api__WEBPACK_IMPORTED_MODULE_10__["SAPODataServiceFactory"],
                projects_nx_annotation_src_public_api__WEBPACK_IMPORTED_MODULE_10__["UIAnnotationFactory"],
                { provide: projects_nx_annotation_src_public_api__WEBPACK_IMPORTED_MODULE_10__["ManifestService"], useValue: manifest },
                projects_nx_charts_src_public_api__WEBPACK_IMPORTED_MODULE_11__["NxChartService"],
                {
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HTTP_INTERCEPTORS"],
                    useClass: isMock ? _mock_http_interceptor_mock__WEBPACK_IMPORTED_MODULE_13__["HttpMockRequestInterceptor"] : _http_interceptor__WEBPACK_IMPORTED_MODULE_12__["HttpRequestInterceptor"],
                    multi: true
                }
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/http-interceptor.ts":
/*!*************************************!*\
  !*** ./src/app/http-interceptor.ts ***!
  \*************************************/
/*! exports provided: HttpRequestInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpRequestInterceptor", function() { return HttpRequestInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");


var HttpRequestInterceptor = /** @class */ (function () {
    function HttpRequestInterceptor(injector) {
        this.injector = injector;
    }
    HttpRequestInterceptor.prototype.intercept = function (request, next) {
        console.log('Hollow interceptor' + request.url);
        return next.handle(request);
    };
    HttpRequestInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]])
    ], HttpRequestInterceptor);
    return HttpRequestInterceptor;
}());



/***/ }),

/***/ "./src/app/mock/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube/DeliveryCalendarDateGrossAmount.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/mock/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube/DeliveryCalendarDateGrossAmount.ts ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
    "d": {
        "results": [
            {
                "__metadata": {
                    "id": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.3~20190517.21~EUR')",
                    "uri": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.3~20190517.21~EUR')",
                    "type": "SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType"
                },
                "DeliveryCalendarDate": "/Date(1558051200000)/",
                "GrossAmount": "184246.08"
            },
            {
                "__metadata": {
                    "id": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.3~20190202.21~EUR')",
                    "uri": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.3~20190202.21~EUR')",
                    "type": "SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType"
                },
                "DeliveryCalendarDate": "/Date(1549065600000)/",
                "GrossAmount": "690.73"
            },
            {
                "__metadata": {
                    "id": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.3~20190207.21~EUR')",
                    "uri": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.3~20190207.21~EUR')",
                    "type": "SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType"
                },
                "DeliveryCalendarDate": "/Date(1549497600000)/",
                "GrossAmount": "792.37"
            },
            {
                "__metadata": {
                    "id": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.3~20190208.21~EUR')",
                    "uri": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.3~20190208.21~EUR')",
                    "type": "SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType"
                },
                "DeliveryCalendarDate": "/Date(1549584000000)/",
                "GrossAmount": "68.54"
            },
            {
                "__metadata": {
                    "id": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.3~20180523.21~EUR')",
                    "uri": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.3~20180523.21~EUR')",
                    "type": "SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType"
                },
                "DeliveryCalendarDate": "/Date(1527033600000)/",
                "GrossAmount": "1711.50"
            },
            {
                "__metadata": {
                    "id": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.3~20181127.21~EUR')",
                    "uri": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.3~20181127.21~EUR')",
                    "type": "SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType"
                },
                "DeliveryCalendarDate": "/Date(1543276800000)/",
                "GrossAmount": "4033.60"
            },
            {
                "__metadata": {
                    "id": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.3~20181128.21~EUR')",
                    "uri": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.3~20181128.21~EUR')",
                    "type": "SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType"
                },
                "DeliveryCalendarDate": "/Date(1543363200000)/",
                "GrossAmount": "690.73"
            },
            {
                "__metadata": {
                    "id": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.3~20181202.21~EUR')",
                    "uri": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.3~20181202.21~EUR')",
                    "type": "SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType"
                },
                "DeliveryCalendarDate": "/Date(1543708800000)/",
                "GrossAmount": "3368.95"
            },
            {
                "__metadata": {
                    "id": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.3~20190125.21~EUR')",
                    "uri": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.3~20190125.21~EUR')",
                    "type": "SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType"
                },
                "DeliveryCalendarDate": "/Date(1548374400000)/",
                "GrossAmount": "5328.40"
            },
            {
                "__metadata": {
                    "id": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.3~20190204.21~EUR')",
                    "uri": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.3~20190204.21~EUR')",
                    "type": "SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType"
                },
                "DeliveryCalendarDate": "/Date(1549238400000)/",
                "GrossAmount": "4298.62"
            },
            {
                "__metadata": {
                    "id": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.3~20180524.21~EUR')",
                    "uri": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.3~20180524.21~EUR')",
                    "type": "SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType"
                },
                "DeliveryCalendarDate": "/Date(1527120000000)/",
                "GrossAmount": "1881.67"
            },
            {
                "__metadata": {
                    "id": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.3~20180520.21~EUR')",
                    "uri": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.3~20180520.21~EUR')",
                    "type": "SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType"
                },
                "DeliveryCalendarDate": "/Date(1526774400000)/",
                "GrossAmount": "39076.40"
            },
            {
                "__metadata": {
                    "id": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.3~20181122.21~EUR')",
                    "uri": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.3~20181122.21~EUR')",
                    "type": "SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType"
                },
                "DeliveryCalendarDate": "/Date(1542844800000)/",
                "GrossAmount": "769.90"
            },
            {
                "__metadata": {
                    "id": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.3~20181123.21~EUR')",
                    "uri": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.3~20181123.21~EUR')",
                    "type": "SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType"
                },
                "DeliveryCalendarDate": "/Date(1542931200000)/",
                "GrossAmount": "98540.80"
            },
            {
                "__metadata": {
                    "id": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.3~20190522.21~EUR')",
                    "uri": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.3~20190522.21~EUR')",
                    "type": "SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType"
                },
                "DeliveryCalendarDate": "/Date(1558483200000)/",
                "GrossAmount": "92248.60"
            },
            {
                "__metadata": {
                    "id": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.3~20190205.21~EUR')",
                    "uri": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.3~20190205.21~EUR')",
                    "type": "SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType"
                },
                "DeliveryCalendarDate": "/Date(1549324800000)/",
                "GrossAmount": "8639.45"
            },
            {
                "__metadata": {
                    "id": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.3~20190206.21~EUR')",
                    "uri": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.3~20190206.21~EUR')",
                    "type": "SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType"
                },
                "DeliveryCalendarDate": "/Date(1549411200000)/",
                "GrossAmount": "3368.95"
            },
            {
                "__metadata": {
                    "id": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.3~20180522.21~EUR')",
                    "uri": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.3~20180522.21~EUR')",
                    "type": "SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType"
                },
                "DeliveryCalendarDate": "/Date(1526947200000)/",
                "GrossAmount": "9430.54"
            },
            {
                "__metadata": {
                    "id": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.3~20181118.21~EUR')",
                    "uri": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.3~20181118.21~EUR')",
                    "type": "SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType"
                },
                "DeliveryCalendarDate": "/Date(1542499200000)/",
                "GrossAmount": "26339.78"
            },
            {
                "__metadata": {
                    "id": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.3~20181119.21~EUR')",
                    "uri": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.3~20181119.21~EUR')",
                    "type": "SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType"
                },
                "DeliveryCalendarDate": "/Date(1542585600000)/",
                "GrossAmount": "11809.19"
            },
            {
                "__metadata": {
                    "id": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.3~20181129.21~EUR')",
                    "uri": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.3~20181129.21~EUR')",
                    "type": "SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType"
                },
                "DeliveryCalendarDate": "/Date(1543449600000)/",
                "GrossAmount": "214.49"
            },
            {
                "__metadata": {
                    "id": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.3~20181206.21~EUR')",
                    "uri": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.3~20181206.21~EUR')",
                    "type": "SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType"
                },
                "DeliveryCalendarDate": "/Date(1544054400000)/",
                "GrossAmount": "897.28"
            },
            {
                "__metadata": {
                    "id": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.3~20190129.21~EUR')",
                    "uri": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.3~20190129.21~EUR')",
                    "type": "SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType"
                },
                "DeliveryCalendarDate": "/Date(1548720000000)/",
                "GrossAmount": "220.30"
            },
            {
                "__metadata": {
                    "id": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.3~20190131.21~EUR')",
                    "uri": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.3~20190131.21~EUR')",
                    "type": "SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType"
                },
                "DeliveryCalendarDate": "/Date(1548892800000)/",
                "GrossAmount": "146.87"
            },
            {
                "__metadata": {
                    "id": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.3~20190210.21~EUR')",
                    "uri": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.3~20190210.21~EUR')",
                    "type": "SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType"
                },
                "DeliveryCalendarDate": "/Date(1549756800000)/",
                "GrossAmount": "897.28"
            },
            {
                "__metadata": {
                    "id": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.3~20180526.21~EUR')",
                    "uri": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.3~20180526.21~EUR')",
                    "type": "SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType"
                },
                "DeliveryCalendarDate": "/Date(1527292800000)/",
                "GrossAmount": "8859.75"
            },
            {
                "__metadata": {
                    "id": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.3~20181121.21~EUR')",
                    "uri": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.3~20181121.21~EUR')",
                    "type": "SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType"
                },
                "DeliveryCalendarDate": "/Date(1542758400000)/",
                "GrossAmount": "832.05"
            },
            {
                "__metadata": {
                    "id": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.3~20181203.21~EUR')",
                    "uri": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.3~20181203.21~EUR')",
                    "type": "SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType"
                },
                "DeliveryCalendarDate": "/Date(1543795200000)/",
                "GrossAmount": "792.37"
            },
            {
                "__metadata": {
                    "id": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.3~20190126.21~EUR')",
                    "uri": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.3~20190126.21~EUR')",
                    "type": "SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType"
                },
                "DeliveryCalendarDate": "/Date(1548460800000)/",
                "GrossAmount": "832.05"
            },
            {
                "__metadata": {
                    "id": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.3~20190130.21~EUR')",
                    "uri": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.3~20190130.21~EUR')",
                    "type": "SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType"
                },
                "DeliveryCalendarDate": "/Date(1548806400000)/",
                "GrossAmount": "9367.67"
            },
            {
                "__metadata": {
                    "id": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.3~20190201.21~EUR')",
                    "uri": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.3~20190201.21~EUR')",
                    "type": "SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType"
                },
                "DeliveryCalendarDate": "/Date(1548979200000)/",
                "GrossAmount": "4033.60"
            },
            {
                "__metadata": {
                    "id": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.3~20181130.21~EUR')",
                    "uri": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.3~20181130.21~EUR')",
                    "type": "SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType"
                },
                "DeliveryCalendarDate": "/Date(1543536000000)/",
                "GrossAmount": "24298.62"
            },
            {
                "__metadata": {
                    "id": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.3~20181204.21~EUR')",
                    "uri": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.3~20181204.21~EUR')",
                    "type": "SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType"
                },
                "DeliveryCalendarDate": "/Date(1543881600000)/",
                "GrossAmount": "68.54"
            },
            {
                "__metadata": {
                    "id": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.3~20190124.21~EUR')",
                    "uri": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.3~20190124.21~EUR')",
                    "type": "SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType"
                },
                "DeliveryCalendarDate": "/Date(1548288000000)/",
                "GrossAmount": "11809.19"
            },
            {
                "__metadata": {
                    "id": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.3~20190127.21~EUR')",
                    "uri": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.3~20190127.21~EUR')",
                    "type": "SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType"
                },
                "DeliveryCalendarDate": "/Date(1548547200000)/",
                "GrossAmount": "769.90"
            },
            {
                "__metadata": {
                    "id": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.3~20190128.21~EUR')",
                    "uri": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.3~20190128.21~EUR')",
                    "type": "SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType"
                },
                "DeliveryCalendarDate": "/Date(1548633600000)/",
                "GrossAmount": "98540.80"
            },
            {
                "__metadata": {
                    "id": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.3~20190211.21~EUR')",
                    "uri": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.3~20190211.21~EUR')",
                    "type": "SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType"
                },
                "DeliveryCalendarDate": "/Date(1549843200000)/",
                "GrossAmount": "868.49"
            },
            {
                "__metadata": {
                    "id": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.3~20180521.21~EUR')",
                    "uri": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.3~20180521.21~EUR')",
                    "type": "SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType"
                },
                "DeliveryCalendarDate": "/Date(1526860800000)/",
                "GrossAmount": "12748.43"
            },
            {
                "__metadata": {
                    "id": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.3~20181124.21~EUR')",
                    "uri": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.3~20181124.21~EUR')",
                    "type": "SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType"
                },
                "DeliveryCalendarDate": "/Date(1543017600000)/",
                "GrossAmount": "220.30"
            },
            {
                "__metadata": {
                    "id": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.3~20181126.21~EUR')",
                    "uri": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.3~20181126.21~EUR')",
                    "type": "SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType"
                },
                "DeliveryCalendarDate": "/Date(1543190400000)/",
                "GrossAmount": "146.87"
            },
            {
                "__metadata": {
                    "id": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.3~20181205.21~EUR')",
                    "uri": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.3~20181205.21~EUR')",
                    "type": "SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType"
                },
                "DeliveryCalendarDate": "/Date(1543968000000)/",
                "GrossAmount": "188.72"
            },
            {
                "__metadata": {
                    "id": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.3~20190123.21~EUR')",
                    "uri": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.3~20190123.21~EUR')",
                    "type": "SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType"
                },
                "DeliveryCalendarDate": "/Date(1548201600000)/",
                "GrossAmount": "26339.78"
            },
            {
                "__metadata": {
                    "id": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.3~20190203.21~EUR')",
                    "uri": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.3~20190203.21~EUR')",
                    "type": "SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType"
                },
                "DeliveryCalendarDate": "/Date(1549152000000)/",
                "GrossAmount": "214.49"
            },
            {
                "__metadata": {
                    "id": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.3~20181120.21~EUR')",
                    "uri": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.3~20181120.21~EUR')",
                    "type": "SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType"
                },
                "DeliveryCalendarDate": "/Date(1542672000000)/",
                "GrossAmount": "-5328.40"
            },
            {
                "__metadata": {
                    "id": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.3~20181201.21~EUR')",
                    "uri": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.3~20181201.21~EUR')",
                    "type": "SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType"
                },
                "DeliveryCalendarDate": "/Date(1543622400000)/",
                "GrossAmount": "-8639.45"
            },
            {
                "__metadata": {
                    "id": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.3~20190209.21~EUR')",
                    "uri": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.3~20190209.21~EUR')",
                    "type": "SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType"
                },
                "DeliveryCalendarDate": "/Date(1549670400000)/",
                "GrossAmount": "-188.72"
            },
            {
                "__metadata": {
                    "id": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.3~20180525.21~EUR')",
                    "uri": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.3~20180525.21~EUR')",
                    "type": "SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType"
                },
                "DeliveryCalendarDate": "/Date(1527206400000)/",
                "GrossAmount": "-123707.91"
            },
            {
                "__metadata": {
                    "id": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.3~20181125.21~EUR')",
                    "uri": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.3~20181125.21~EUR')",
                    "type": "SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType"
                },
                "DeliveryCalendarDate": "/Date(1543104000000)/",
                "GrossAmount": "-9367.67"
            },
            {
                "__metadata": {
                    "id": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.3~20181207.21~EUR')",
                    "uri": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.3~20181207.21~EUR')",
                    "type": "SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType"
                },
                "DeliveryCalendarDate": "/Date(1544140800000)/",
                "GrossAmount": "-868.49"
            }
        ]
    }
});


/***/ }),

/***/ "./src/app/mock/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube/MainProductCategory2.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/mock/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube/MainProductCategory2.ts ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
    "d": {
        "results": [
            {
                "__metadata": {
                    "id": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.12~Computer%20Systems.21~EUR')",
                    "uri": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.12~Computer%20Systems.21~EUR')",
                    "type": "SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType"
                },
                "MainProductCategory": "Computer Systems",
                "NetAmount": "505877.98",
                "TaxAmount": "76116.42"
            },
            {
                "__metadata": {
                    "id": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.12~Printers%20%26A%20Scanners.21~EUR')",
                    "uri": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.12~Printers%20%26A%20Scanners.21~EUR')",
                    "type": "SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType"
                },
                "MainProductCategory": "Printers & Scanners",
                "NetAmount": "159593.42",
                "TaxAmount": "60322.58"
            },
            {
                "__metadata": {
                    "id": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.12~Computer%20Components.21~EUR')",
                    "uri": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.12~Computer%20Components.21~EUR')",
                    "type": "SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType"
                },
                "MainProductCategory": "Computer Components",
                "NetAmount": "382536.90",
                "TaxAmount": "52682.38"
            },
            {
                "__metadata": {
                    "id": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.12~Software.21~EUR')",
                    "uri": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.12~Software.21~EUR')",
                    "type": "SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType"
                },
                "MainProductCategory": "Software",
                "NetAmount": "34969.52",
                "TaxAmount": "9644.06"
            }
        ]
    }
});


/***/ }),

/***/ "./src/app/mock/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube/MainProductCategory5.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/mock/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube/MainProductCategory5.ts ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
    "d": {
        "results": [
            {
                "__metadata": {
                    "id": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.12~Computer%20Components.21~EUR.23~EA')",
                    "uri": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.12~Computer%20Components.21~EUR.23~EA')",
                    "type": "SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType"
                },
                "MainProductCategory": "Computer Components",
                "GrossAmount": "455218.68",
                "NetAmount": "382536.90",
                "TaxAmount": "72682.38",
                "Quantity": "1764",
                "NumberOfSalesOrders": 178
            },
            {
                "__metadata": {
                    "id": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.12~Software.21~EUR.23~EA')",
                    "uri": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.12~Software.21~EUR.23~EA')",
                    "type": "SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType"
                },
                "MainProductCategory": "Software",
                "GrossAmount": "41613.94",
                "NetAmount": "34969.52",
                "TaxAmount": "6644.06",
                "Quantity": "648",
                "NumberOfSalesOrders": 90
            },
            {
                "__metadata": {
                    "id": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.12~Computer%20Systems.21~EUR.23~EA')",
                    "uri": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.12~Computer%20Systems.21~EUR.23~EA')",
                    "type": "SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType"
                },
                "MainProductCategory": "Computer Systems",
                "GrossAmount": "2981994.42",
                "NetAmount": "2505877.98",
                "TaxAmount": "476116.42",
                "Quantity": "858",
                "NumberOfSalesOrders": 112
            },
            {
                "__metadata": {
                    "id": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.12~Printers%20%26A%20Scanners.21~EUR.23~EA')",
                    "uri": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.12~Printers%20%26A%20Scanners.21~EUR.23~EA')",
                    "type": "SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType"
                },
                "MainProductCategory": "Printers & Scanners",
                "GrossAmount": "189916.24",
                "NetAmount": "159593.42",
                "TaxAmount": "30322.58",
                "Quantity": "620",
                "NumberOfSalesOrders": 84
            }
        ]
    }
});


/***/ }),

/***/ "./src/app/mock/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube/MainProductCategoryDeliveryCalendarQuarter.ts":
/*!**************************************************************************************************************!*\
  !*** ./src/app/mock/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube/MainProductCategoryDeliveryCalendarQuarter.ts ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
    "d": {
        "results": [
            {
                "__metadata": {
                    "id": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.5~2.12~Computer%20Systems.21~EUR')",
                    "uri": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.5~2.12~Computer%20Systems.21~EUR')",
                    "type": "SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType"
                },
                "DeliveryCalendarQuarter": "2",
                "MainProductCategory": "Computer Systems",
                "NetAmount": "257612.16",
                "TaxAmount": "128945.96"
            },
            {
                "__metadata": {
                    "id": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.5~4.12~Computer%20Systems.21~EUR')",
                    "uri": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.5~4.12~Computer%20Systems.21~EUR')",
                    "type": "SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType"
                },
                "DeliveryCalendarQuarter": "4",
                "MainProductCategory": "Computer Systems",
                "NetAmount": "124132.91",
                "TaxAmount": "23585.23"
            },
            {
                "__metadata": {
                    "id": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.5~1.12~Computer%20Systems.21~EUR')",
                    "uri": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.5~1.12~Computer%20Systems.21~EUR')",
                    "type": "SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType"
                },
                "DeliveryCalendarQuarter": "1",
                "MainProductCategory": "Computer Systems",
                "NetAmount": "24132.91",
                "TaxAmount": "23585.23"
            },
            {
                "__metadata": {
                    "id": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.5~2.12~Computer%20Components.21~EUR')",
                    "uri": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.5~2.12~Computer%20Components.21~EUR')",
                    "type": "SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType"
                },
                "DeliveryCalendarQuarter": "2",
                "MainProductCategory": "Computer Components",
                "NetAmount": "325911.24",
                "TaxAmount": "61923.44"
            },
            {
                "__metadata": {
                    "id": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.5~4.12~Computer%20Components.21~EUR')",
                    "uri": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.5~4.12~Computer%20Components.21~EUR')",
                    "type": "SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType"
                },
                "DeliveryCalendarQuarter": "4",
                "MainProductCategory": "Computer Components",
                "NetAmount": "28312.83",
                "TaxAmount": "5379.47"
            },
            {
                "__metadata": {
                    "id": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.5~4.12~Printers%20%26A%20Scanners.21~EUR')",
                    "uri": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.5~4.12~Printers%20%26A%20Scanners.21~EUR')",
                    "type": "SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType"
                },
                "DeliveryCalendarQuarter": "4",
                "MainProductCategory": "Printers & Scanners",
                "NetAmount": "11525.29",
                "TaxAmount": "2189.79"
            },
            {
                "__metadata": {
                    "id": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.5~4.12~Software.21~EUR')",
                    "uri": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.5~4.12~Software.21~EUR')",
                    "type": "SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType"
                },
                "DeliveryCalendarQuarter": "4",
                "MainProductCategory": "Software",
                "NetAmount": "1924.94",
                "TaxAmount": "365.73"
            },
            {
                "__metadata": {
                    "id": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.5~1.12~Computer%20Components.21~EUR')",
                    "uri": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.5~1.12~Computer%20Components.21~EUR')",
                    "type": "SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType"
                },
                "DeliveryCalendarQuarter": "1",
                "MainProductCategory": "Computer Components",
                "NetAmount": "28312.83",
                "TaxAmount": "5379.47"
            },
            {
                "__metadata": {
                    "id": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.5~2.12~Software.21~EUR')",
                    "uri": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.5~2.12~Software.21~EUR')",
                    "type": "SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType"
                },
                "DeliveryCalendarQuarter": "2",
                "MainProductCategory": "Software",
                "NetAmount": "31119.64",
                "TaxAmount": "5912.60"
            },
            {
                "__metadata": {
                    "id": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.5~2.12~Printers%20%26A%20Scanners.21~EUR')",
                    "uri": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.5~2.12~Printers%20%26A%20Scanners.21~EUR')",
                    "type": "SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType"
                },
                "DeliveryCalendarQuarter": "2",
                "MainProductCategory": "Printers & Scanners",
                "NetAmount": "136542.84",
                "TaxAmount": "25943.00"
            },
            {
                "__metadata": {
                    "id": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.5~1.12~Printers%20%26A%20Scanners.21~EUR')",
                    "uri": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.5~1.12~Printers%20%26A%20Scanners.21~EUR')",
                    "type": "SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType"
                },
                "DeliveryCalendarQuarter": "1",
                "MainProductCategory": "Printers & Scanners",
                "NetAmount": "11525.29",
                "TaxAmount": "2189.79"
            },
            {
                "__metadata": {
                    "id": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.5~1.12~Software.21~EUR')",
                    "uri": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.5~1.12~Software.21~EUR')",
                    "type": "SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType"
                },
                "DeliveryCalendarQuarter": "1",
                "MainProductCategory": "Software",
                "NetAmount": "1924.94",
                "TaxAmount": "365.73"
            }
        ]
    }
});


/***/ }),

/***/ "./src/app/mock/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube/MainProductCategoryNet.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/mock/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube/MainProductCategoryNet.ts ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
    "d": {
        "results": [
            {
                "__metadata": {
                    "id": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.12~Computer%20Systems.21~EUR')",
                    "uri": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.12~Computer%20Systems.21~EUR')",
                    "type": "SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType"
                },
                "MainProductCategory": "Computer Systems",
                "NetAmount": "505877.98"
            },
            {
                "__metadata": {
                    "id": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.12~Printers%20%26A%20Scanners.21~EUR')",
                    "uri": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.12~Printers%20%26A%20Scanners.21~EUR')",
                    "type": "SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType"
                },
                "MainProductCategory": "Printers & Scanners",
                "NetAmount": "159593.42"
            },
            {
                "__metadata": {
                    "id": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.12~Computer%20Components.21~EUR')",
                    "uri": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.12~Computer%20Components.21~EUR')",
                    "type": "SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType"
                },
                "MainProductCategory": "Computer Components",
                "NetAmount": "382536.90"
            },
            {
                "__metadata": {
                    "id": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.12~Software.21~EUR')",
                    "uri": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.12~Software.21~EUR')",
                    "type": "SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType"
                },
                "MainProductCategory": "Software",
                "NetAmount": "34969.52"
            }
        ]
    }
});


/***/ }),

/***/ "./src/app/mock/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube/ProductCategory2.ts":
/*!************************************************************************************!*\
  !*** ./src/app/mock/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube/ProductCategory2.ts ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
    "d": {
        "results": [
            {
                "__metadata": {
                    "id": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Computer%20System%20Accessories.21~EUR')",
                    "uri": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Computer%20System%20Accessories.21~EUR')",
                    "type": "SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType"
                },
                "ProductCategory": "Computer System Accessories",
                "NetAmount": "6654.82",
                "TaxAmount": "1264.18"
            },
            {
                "__metadata": {
                    "id": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Flat%20Screen%20Monitors.21~EUR')",
                    "uri": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Flat%20Screen%20Monitors.21~EUR')",
                    "type": "SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType"
                },
                "ProductCategory": "Flat Screen Monitors",
                "NetAmount": "192349.90",
                "TaxAmount": "36546.78"
            },
            {
                "__metadata": {
                    "id": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~PDAs%20%26A%20Organizers.21~EUR')",
                    "uri": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~PDAs%20%26A%20Organizers.21~EUR')",
                    "type": "SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType"
                },
                "ProductCategory": "PDAs & Organizers",
                "NetAmount": "158269.60",
                "TaxAmount": "30071.22"
            },
            {
                "__metadata": {
                    "id": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Laser%20Printers.21~EUR')",
                    "uri": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Laser%20Printers.21~EUR')",
                    "type": "SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType"
                },
                "ProductCategory": "Laser Printers",
                "NetAmount": "128331.30",
                "TaxAmount": "24382.94"
            },
            {
                "__metadata": {
                    "id": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~PCs.21~EUR')",
                    "uri": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~PCs.21~EUR')",
                    "type": "SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType"
                },
                "ProductCategory": "PCs",
                "NetAmount": "38384.00",
                "TaxAmount": "7292.96"
            },
            {
                "__metadata": {
                    "id": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Mice.21~EUR')",
                    "uri": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Mice.21~EUR')",
                    "type": "SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType"
                },
                "ProductCategory": "Mice",
                "NetAmount": "11592.24",
                "TaxAmount": "6302.52"
            },
            {
                "__metadata": {
                    "id": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Speakers.21~EUR')",
                    "uri": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Speakers.21~EUR')",
                    "type": "SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType"
                },
                "ProductCategory": "Speakers",
                "NetAmount": "1864.00",
                "TaxAmount": "354.16"
            },
            {
                "__metadata": {
                    "id": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Ink%20Jet%20Printers.21~EUR')",
                    "uri": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Ink%20Jet%20Printers.21~EUR')",
                    "type": "SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType"
                },
                "ProductCategory": "Ink Jet Printers",
                "NetAmount": "12583.38",
                "TaxAmount": "2390.88"
            },
            {
                "__metadata": {
                    "id": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Software.21~EUR')",
                    "uri": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Software.21~EUR')",
                    "type": "SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType"
                },
                "ProductCategory": "Software",
                "NetAmount": "34969.52",
                "TaxAmount": "6644.06"
            },
            {
                "__metadata": {
                    "id": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Servers.21~EUR')",
                    "uri": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Servers.21~EUR')",
                    "type": "SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType"
                },
                "ProductCategory": "Servers",
                "NetAmount": "57958.78",
                "TaxAmount": "53012.10"
            },
            {
                "__metadata": {
                    "id": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Keyboards.21~EUR')",
                    "uri": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Keyboards.21~EUR')",
                    "type": "SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType"
                },
                "ProductCategory": "Keyboards",
                "NetAmount": "3268.70",
                "TaxAmount": "621.06"
            },
            {
                "__metadata": {
                    "id": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Multifunction%20Printers.21~EUR')",
                    "uri": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Multifunction%20Printers.21~EUR')",
                    "type": "SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType"
                },
                "ProductCategory": "Multifunction Printers",
                "NetAmount": "12836.88",
                "TaxAmount": "2438.92"
            },
            {
                "__metadata": {
                    "id": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Graphic%20Cards.21~EUR')",
                    "uri": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Graphic%20Cards.21~EUR')",
                    "type": "SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType"
                },
                "ProductCategory": "Graphic Cards",
                "NetAmount": "21343.22",
                "TaxAmount": "4055.04"
            },
            {
                "__metadata": {
                    "id": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Telecommunications.21~EUR')",
                    "uri": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Telecommunications.21~EUR')",
                    "type": "SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType"
                },
                "ProductCategory": "Telecommunications",
                "NetAmount": "2856.36",
                "TaxAmount": "542.68"
            },
            {
                "__metadata": {
                    "id": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Mousepads.21~EUR')",
                    "uri": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Mousepads.21~EUR')",
                    "type": "SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType"
                },
                "ProductCategory": "Mousepads",
                "NetAmount": "992.88",
                "TaxAmount": "188.92"
            },
            {
                "__metadata": {
                    "id": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Scanners.21~EUR')",
                    "uri": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Scanners.21~EUR')",
                    "type": "SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType"
                },
                "ProductCategory": "Scanners",
                "NetAmount": "5841.86",
                "TaxAmount": "1109.84"
            },
            {
                "__metadata": {
                    "id": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Notebooks.21~EUR')",
                    "uri": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Notebooks.21~EUR')",
                    "type": "SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType"
                },
                "ProductCategory": "Notebooks",
                "NetAmount": "12880.38",
                "TaxAmount": "14547.18"
            }
        ]
    }
});


/***/ }),

/***/ "./src/app/mock/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube/ProductCategory3.ts":
/*!************************************************************************************!*\
  !*** ./src/app/mock/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube/ProductCategory3.ts ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
    "d": {
        "results": [
            {
                "__metadata": {
                    "id": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Computer%20System%20Accessories.21~EUR')",
                    "uri": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Computer%20System%20Accessories.21~EUR')",
                    "type": "SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType"
                },
                "ProductCategory": "Computer System Accessories",
                "GrossAmount": "7919.02",
                "NetAmount": "6654.82",
                "TaxAmount": "1264.18"
            },
            {
                "__metadata": {
                    "id": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Flat%20Screen%20Monitors.21~EUR')",
                    "uri": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Flat%20Screen%20Monitors.21~EUR')",
                    "type": "SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType"
                },
                "ProductCategory": "Flat Screen Monitors",
                "GrossAmount": "228896.30",
                "NetAmount": "192349.90",
                "TaxAmount": "36546.78"
            },
            {
                "__metadata": {
                    "id": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~PDAs%20%26A%20Organizers.21~EUR')",
                    "uri": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~PDAs%20%26A%20Organizers.21~EUR')",
                    "type": "SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType"
                },
                "ProductCategory": "PDAs & Organizers",
                "GrossAmount": "188340.68",
                "NetAmount": "158269.60",
                "TaxAmount": "30071.22"
            },
            {
                "__metadata": {
                    "id": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Laser%20Printers.21~EUR')",
                    "uri": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Laser%20Printers.21~EUR')",
                    "type": "SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType"
                },
                "ProductCategory": "Laser Printers",
                "GrossAmount": "152714.24",
                "NetAmount": "128331.30",
                "TaxAmount": "24382.94"
            },
            {
                "__metadata": {
                    "id": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~PCs.21~EUR')",
                    "uri": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~PCs.21~EUR')",
                    "type": "SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType"
                },
                "ProductCategory": "PCs",
                "GrossAmount": "45676.96",
                "NetAmount": "38384.00",
                "TaxAmount": "7292.96"
            },
            {
                "__metadata": {
                    "id": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Mice.21~EUR')",
                    "uri": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Mice.21~EUR')",
                    "type": "SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType"
                },
                "ProductCategory": "Mice",
                "GrossAmount": "1894.76",
                "NetAmount": "1592.24",
                "TaxAmount": "302.52"
            },
            {
                "__metadata": {
                    "id": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Speakers.21~EUR')",
                    "uri": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Speakers.21~EUR')",
                    "type": "SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType"
                },
                "ProductCategory": "Speakers",
                "GrossAmount": "2218.16",
                "NetAmount": "1864.00",
                "TaxAmount": "354.16"
            },
            {
                "__metadata": {
                    "id": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Ink%20Jet%20Printers.21~EUR')",
                    "uri": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Ink%20Jet%20Printers.21~EUR')",
                    "type": "SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType"
                },
                "ProductCategory": "Ink Jet Printers",
                "GrossAmount": "14974.26",
                "NetAmount": "12583.38",
                "TaxAmount": "2390.88"
            },
            {
                "__metadata": {
                    "id": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Software.21~EUR')",
                    "uri": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Software.21~EUR')",
                    "type": "SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType"
                },
                "ProductCategory": "Software",
                "GrossAmount": "41613.94",
                "NetAmount": "34969.52",
                "TaxAmount": "6644.06"
            },
            {
                "__metadata": {
                    "id": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Servers.21~EUR')",
                    "uri": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Servers.21~EUR')",
                    "type": "SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType"
                },
                "ProductCategory": "Servers",
                "GrossAmount": "210970.88",
                "NetAmount": "857958.78",
                "TaxAmount": "353012.10"
            },
            {
                "__metadata": {
                    "id": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Keyboards.21~EUR')",
                    "uri": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Keyboards.21~EUR')",
                    "type": "SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType"
                },
                "ProductCategory": "Keyboards",
                "GrossAmount": "3889.68",
                "NetAmount": "3268.70",
                "TaxAmount": "621.06"
            },
            {
                "__metadata": {
                    "id": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Multifunction%20Printers.21~EUR')",
                    "uri": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Multifunction%20Printers.21~EUR')",
                    "type": "SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType"
                },
                "ProductCategory": "Multifunction Printers",
                "GrossAmount": "15276.04",
                "NetAmount": "12836.88",
                "TaxAmount": "2438.92"
            },
            {
                "__metadata": {
                    "id": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Graphic%20Cards.21~EUR')",
                    "uri": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Graphic%20Cards.21~EUR')",
                    "type": "SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType"
                },
                "ProductCategory": "Graphic Cards",
                "GrossAmount": "25398.26",
                "NetAmount": "21343.22",
                "TaxAmount": "4055.04"
            },
            {
                "__metadata": {
                    "id": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Telecommunications.21~EUR')",
                    "uri": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Telecommunications.21~EUR')",
                    "type": "SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType"
                },
                "ProductCategory": "Telecommunications",
                "GrossAmount": "3399.04",
                "NetAmount": "2856.36",
                "TaxAmount": "542.68"
            },
            {
                "__metadata": {
                    "id": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Mousepads.21~EUR')",
                    "uri": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Mousepads.21~EUR')",
                    "type": "SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType"
                },
                "ProductCategory": "Mousepads",
                "GrossAmount": "1181.80",
                "NetAmount": "992.88",
                "TaxAmount": "188.92"
            },
            {
                "__metadata": {
                    "id": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Scanners.21~EUR')",
                    "uri": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Scanners.21~EUR')",
                    "type": "SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType"
                },
                "ProductCategory": "Scanners",
                "GrossAmount": "6951.70",
                "NetAmount": "5841.86",
                "TaxAmount": "1109.84"
            },
            {
                "__metadata": {
                    "id": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Notebooks.21~EUR')",
                    "uri": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Notebooks.21~EUR')",
                    "type": "SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType"
                },
                "ProductCategory": "Notebooks",
                "GrossAmount": "717427.56",
                "NetAmount": "602880.38",
                "TaxAmount": "114547.18"
            }
        ]
    }
});


/***/ }),

/***/ "./src/app/mock/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube/ProductCategory4.ts":
/*!************************************************************************************!*\
  !*** ./src/app/mock/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube/ProductCategory4.ts ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
    "d": {
        "results": [{
                "__metadata": {
                    "id": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Computer%20System%20Accessories.21~EUR.23~EA')",
                    "uri": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Computer%20System%20Accessories.21~EUR.23~EA')",
                    "type": "SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType"
                },
                "ProductCategory": "Computer System Accessories",
                "GrossAmount": "7919.02",
                "NetAmount": "6654.82",
                "TaxAmount": "1264.18",
                "Quantity": "326"
            }, {
                "__metadata": {
                    "id": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Laser%20Printers.21~EUR.23~EA')",
                    "uri": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Laser%20Printers.21~EUR.23~EA')",
                    "type": "SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType"
                },
                "ProductCategory": "Laser Printers",
                "GrossAmount": "152714.24",
                "NetAmount": "128331.30",
                "TaxAmount": "24382.94",
                "Quantity": "224"
            }, {
                "__metadata": {
                    "id": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Scanners.21~EUR.23~EA')",
                    "uri": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Scanners.21~EUR.23~EA')",
                    "type": "SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType"
                },
                "ProductCategory": "Scanners",
                "GrossAmount": "6951.70",
                "NetAmount": "5841.86",
                "TaxAmount": "1109.84",
                "Quantity": "168"
            }, {
                "__metadata": {
                    "id": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~PDAs%20%26A%20Organizers.21~EUR.23~EA')",
                    "uri": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~PDAs%20%26A%20Organizers.21~EUR.23~EA')",
                    "type": "SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType"
                },
                "ProductCategory": "PDAs & Organizers",
                "GrossAmount": "188340.68",
                "NetAmount": "158269.60",
                "TaxAmount": "30071.22",
                "Quantity": "314"
            }, {
                "__metadata": {
                    "id": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Software.21~EUR.23~EA')",
                    "uri": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Software.21~EUR.23~EA')",
                    "type": "SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType"
                },
                "ProductCategory": "Software",
                "GrossAmount": "41613.94",
                "NetAmount": "34969.52",
                "TaxAmount": "6644.06",
                "Quantity": "648"
            }, {
                "__metadata": {
                    "id": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Multifunction%20Printers.21~EUR.23~EA')",
                    "uri": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Multifunction%20Printers.21~EUR.23~EA')",
                    "type": "SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType"
                },
                "ProductCategory": "Multifunction Printers",
                "GrossAmount": "15276.04",
                "NetAmount": "12836.88",
                "TaxAmount": "2438.92",
                "Quantity": "108"
            }, {
                "__metadata": {
                    "id": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Mousepads.21~EUR.23~EA')",
                    "uri": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Mousepads.21~EUR.23~EA')",
                    "type": "SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType"
                },
                "ProductCategory": "Mousepads",
                "GrossAmount": "1181.80",
                "NetAmount": "992.88",
                "TaxAmount": "188.92",
                "Quantity": "108"
            }, {
                "__metadata": {
                    "id": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Notebooks.21~EUR.23~EA')",
                    "uri": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Notebooks.21~EUR.23~EA')",
                    "type": "SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType"
                },
                "ProductCategory": "Notebooks",
                "GrossAmount": "17427.56",
                "NetAmount": "12880.38",
                "TaxAmount": "14547.18",
                "Quantity": "398"
            }, {
                "__metadata": {
                    "id": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~PCs.21~EUR.23~EA')",
                    "uri": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~PCs.21~EUR.23~EA')",
                    "type": "SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType"
                },
                "ProductCategory": "PCs",
                "GrossAmount": "45676.96",
                "NetAmount": "38384.00",
                "TaxAmount": "7292.96",
                "Quantity": "16"
            }, {
                "__metadata": {
                    "id": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Ink%20Jet%20Printers.21~EUR.23~EA')",
                    "uri": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Ink%20Jet%20Printers.21~EUR.23~EA')",
                    "type": "SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType"
                },
                "ProductCategory": "Ink Jet Printers",
                "GrossAmount": "14974.26",
                "NetAmount": "12583.38",
                "TaxAmount": "2390.88",
                "Quantity": "120"
            }, {
                "__metadata": {
                    "id": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Flat%20Screen%20Monitors.21~EUR.23~EA')",
                    "uri": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Flat%20Screen%20Monitors.21~EUR.23~EA')",
                    "type": "SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType"
                },
                "ProductCategory": "Flat Screen Monitors",
                "GrossAmount": "228896.30",
                "NetAmount": "192349.90",
                "TaxAmount": "36546.78",
                "Quantity": "586"
            }, {
                "__metadata": {
                    "id": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Mice.21~EUR.23~EA')",
                    "uri": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Mice.21~EUR.23~EA')",
                    "type": "SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType"
                },
                "ProductCategory": "Mice",
                "GrossAmount": "1894.76",
                "NetAmount": "1592.24",
                "TaxAmount": "302.52",
                "Quantity": "160"
            }, {
                "__metadata": {
                    "id": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Keyboards.21~EUR.23~EA')",
                    "uri": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Keyboards.21~EUR.23~EA')",
                    "type": "SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType"
                },
                "ProductCategory": "Keyboards",
                "GrossAmount": "3889.68",
                "NetAmount": "3268.70",
                "TaxAmount": "621.06",
                "Quantity": "220"
            }, {
                "__metadata": {
                    "id": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Graphic%20Cards.21~EUR.23~EA')",
                    "uri": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Graphic%20Cards.21~EUR.23~EA')",
                    "type": "SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType"
                },
                "ProductCategory": "Graphic Cards",
                "GrossAmount": "25398.26",
                "NetAmount": "21343.22",
                "TaxAmount": "4055.04",
                "Quantity": "244"
            }, {
                "__metadata": {
                    "id": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Servers.21~EUR.23~EA')",
                    "uri": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Servers.21~EUR.23~EA')",
                    "type": "SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType"
                },
                "ProductCategory": "Servers",
                "GrossAmount": "10970.88",
                "NetAmount": "57958.78",
                "TaxAmount": "53012.10",
                "Quantity": "118"
            }, {
                "__metadata": {
                    "id": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Speakers.21~EUR.23~EA')",
                    "uri": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Speakers.21~EUR.23~EA')",
                    "type": "SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType"
                },
                "ProductCategory": "Speakers",
                "GrossAmount": "2218.16",
                "NetAmount": "1864.00",
                "TaxAmount": "354.16",
                "Quantity": "52"
            }, {
                "__metadata": {
                    "id": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Telecommunications.21~EUR.23~EA')",
                    "uri": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Telecommunications.21~EUR.23~EA')",
                    "type": "SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType"
                },
                "ProductCategory": "Telecommunications",
                "GrossAmount": "3399.04",
                "NetAmount": "2856.36",
                "TaxAmount": "542.68",
                "Quantity": "80"
            }]
    }
});


/***/ }),

/***/ "./src/app/mock/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube/ProductCategoryNet.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/mock/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube/ProductCategoryNet.ts ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
    "d": {
        "results": [
            {
                "__metadata": {
                    "id": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Computer%20System%20Accessories.21~EUR')",
                    "uri": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Computer%20System%20Accessories.21~EUR')",
                    "type": "SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType"
                },
                "ProductCategory": "Computer System Accessories",
                "NetAmount": "6654.82"
            },
            {
                "__metadata": {
                    "id": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Flat%20Screen%20Monitors.21~EUR')",
                    "uri": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Flat%20Screen%20Monitors.21~EUR')",
                    "type": "SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType"
                },
                "ProductCategory": "Flat Screen Monitors",
                "NetAmount": "192349.90"
            },
            {
                "__metadata": {
                    "id": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~PDAs%20%26A%20Organizers.21~EUR')",
                    "uri": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~PDAs%20%26A%20Organizers.21~EUR')",
                    "type": "SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType"
                },
                "ProductCategory": "PDAs & Organizers",
                "NetAmount": "158269.60"
            },
            {
                "__metadata": {
                    "id": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Laser%20Printers.21~EUR')",
                    "uri": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Laser%20Printers.21~EUR')",
                    "type": "SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType"
                },
                "ProductCategory": "Laser Printers",
                "NetAmount": "128331.30"
            },
            {
                "__metadata": {
                    "id": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~PCs.21~EUR')",
                    "uri": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~PCs.21~EUR')",
                    "type": "SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType"
                },
                "ProductCategory": "PCs",
                "NetAmount": "38384.00"
            },
            {
                "__metadata": {
                    "id": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Mice.21~EUR')",
                    "uri": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Mice.21~EUR')",
                    "type": "SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType"
                },
                "ProductCategory": "Mice",
                "NetAmount": "1592.24"
            },
            {
                "__metadata": {
                    "id": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Speakers.21~EUR')",
                    "uri": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Speakers.21~EUR')",
                    "type": "SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType"
                },
                "ProductCategory": "Speakers",
                "NetAmount": "1864.00"
            },
            {
                "__metadata": {
                    "id": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Ink%20Jet%20Printers.21~EUR')",
                    "uri": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Ink%20Jet%20Printers.21~EUR')",
                    "type": "SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType"
                },
                "ProductCategory": "Ink Jet Printers",
                "NetAmount": "12583.38"
            },
            {
                "__metadata": {
                    "id": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Software.21~EUR')",
                    "uri": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Software.21~EUR')",
                    "type": "SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType"
                },
                "ProductCategory": "Software",
                "NetAmount": "34969.52"
            },
            {
                "__metadata": {
                    "id": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Servers.21~EUR')",
                    "uri": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Servers.21~EUR')",
                    "type": "SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType"
                },
                "ProductCategory": "Servers",
                "NetAmount": "857958.78"
            },
            {
                "__metadata": {
                    "id": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Keyboards.21~EUR')",
                    "uri": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Keyboards.21~EUR')",
                    "type": "SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType"
                },
                "ProductCategory": "Keyboards",
                "NetAmount": "3268.70"
            },
            {
                "__metadata": {
                    "id": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Multifunction%20Printers.21~EUR')",
                    "uri": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Multifunction%20Printers.21~EUR')",
                    "type": "SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType"
                },
                "ProductCategory": "Multifunction Printers",
                "NetAmount": "12836.88"
            },
            {
                "__metadata": {
                    "id": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Graphic%20Cards.21~EUR')",
                    "uri": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Graphic%20Cards.21~EUR')",
                    "type": "SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType"
                },
                "ProductCategory": "Graphic Cards",
                "NetAmount": "21343.22"
            },
            {
                "__metadata": {
                    "id": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Telecommunications.21~EUR')",
                    "uri": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Telecommunications.21~EUR')",
                    "type": "SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType"
                },
                "ProductCategory": "Telecommunications",
                "NetAmount": "2856.36"
            },
            {
                "__metadata": {
                    "id": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Mousepads.21~EUR')",
                    "uri": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Mousepads.21~EUR')",
                    "type": "SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType"
                },
                "ProductCategory": "Mousepads",
                "NetAmount": "992.88"
            },
            {
                "__metadata": {
                    "id": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Scanners.21~EUR')",
                    "uri": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Scanners.21~EUR')",
                    "type": "SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType"
                },
                "ProductCategory": "Scanners",
                "NetAmount": "5841.86"
            },
            {
                "__metadata": {
                    "id": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Notebooks.21~EUR')",
                    "uri": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Notebooks.21~EUR')",
                    "type": "SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType"
                },
                "ProductCategory": "Notebooks",
                "NetAmount": "602880.38"
            }
        ]
    }
});


/***/ }),

/***/ "./src/app/mock/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube/ProductCategoryNumberOfSalesOrders.ts":
/*!******************************************************************************************************!*\
  !*** ./src/app/mock/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube/ProductCategoryNumberOfSalesOrders.ts ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
    "d": {
        "results": [
            {
                "__metadata": {
                    "id": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Mousepads.17~US')",
                    "uri": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Mousepads.17~US')",
                    "type": "SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType"
                },
                "ProductCategory": "Mousepads",
                "SoldToPartyCountry": "US",
                "SoldToPartyCountryName": "美国",
                "NumberOfSalesOrders": 20
            },
            {
                "__metadata": {
                    "id": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Software.17~DE')",
                    "uri": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Software.17~DE')",
                    "type": "SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType"
                },
                "ProductCategory": "Software",
                "SoldToPartyCountry": "DE",
                "SoldToPartyCountryName": "德国",
                "NumberOfSalesOrders": 24
            },
            {
                "__metadata": {
                    "id": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Notebooks.17~DE')",
                    "uri": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Notebooks.17~DE')",
                    "type": "SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType"
                },
                "ProductCategory": "Notebooks",
                "SoldToPartyCountry": "DE",
                "SoldToPartyCountryName": "德国",
                "NumberOfSalesOrders": 20
            },
            {
                "__metadata": {
                    "id": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Scanners.17~AR')",
                    "uri": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Scanners.17~AR')",
                    "type": "SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType"
                },
                "ProductCategory": "Scanners",
                "SoldToPartyCountry": "AR",
                "SoldToPartyCountryName": "阿根廷",
                "NumberOfSalesOrders": 9
            },
            {
                "__metadata": {
                    "id": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Scanners.17~FR')",
                    "uri": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Scanners.17~FR')",
                    "type": "SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType"
                },
                "ProductCategory": "Scanners",
                "SoldToPartyCountry": "FR",
                "SoldToPartyCountryName": "法国",
                "NumberOfSalesOrders": 3
            },
            {
                "__metadata": {
                    "id": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Speakers.17~BR')",
                    "uri": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Speakers.17~BR')",
                    "type": "SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType"
                },
                "ProductCategory": "Speakers",
                "SoldToPartyCountry": "BR",
                "SoldToPartyCountryName": "巴西",
                "NumberOfSalesOrders": 2
            },
            {
                "__metadata": {
                    "id": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Notebooks.17~US')",
                    "uri": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Notebooks.17~US')",
                    "type": "SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType"
                },
                "ProductCategory": "Notebooks",
                "SoldToPartyCountry": "US",
                "SoldToPartyCountryName": "美国",
                "NumberOfSalesOrders": 10
            },
            {
                "__metadata": {
                    "id": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Laser%20Printers.17~FR')",
                    "uri": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Laser%20Printers.17~FR')",
                    "type": "SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType"
                },
                "ProductCategory": "Laser Printers",
                "SoldToPartyCountry": "FR",
                "SoldToPartyCountryName": "法国",
                "NumberOfSalesOrders": 3
            },
            {
                "__metadata": {
                    "id": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Telecommunications.17~US')",
                    "uri": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Telecommunications.17~US')",
                    "type": "SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType"
                },
                "ProductCategory": "Telecommunications",
                "SoldToPartyCountry": "US",
                "SoldToPartyCountryName": "美国",
                "NumberOfSalesOrders": 7
            },
            {
                "__metadata": {
                    "id": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Keyboards.17~AT')",
                    "uri": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Keyboards.17~AT')",
                    "type": "SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType"
                },
                "ProductCategory": "Keyboards",
                "SoldToPartyCountry": "AT",
                "SoldToPartyCountryName": "奥地利",
                "NumberOfSalesOrders": 1
            },
            {
                "__metadata": {
                    "id": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Multifunction%20Printers.17~JP')",
                    "uri": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Multifunction%20Printers.17~JP')",
                    "type": "SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType"
                },
                "ProductCategory": "Multifunction Printers",
                "SoldToPartyCountry": "JP",
                "SoldToPartyCountryName": "日本",
                "NumberOfSalesOrders": 1
            },
            {
                "__metadata": {
                    "id": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Flat%20Screen%20Monitors.17~GB')",
                    "uri": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Flat%20Screen%20Monitors.17~GB')",
                    "type": "SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType"
                },
                "ProductCategory": "Flat Screen Monitors",
                "SoldToPartyCountry": "GB",
                "SoldToPartyCountryName": "英国",
                "NumberOfSalesOrders": 1
            },
            {
                "__metadata": {
                    "id": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Notebooks.17~MX')",
                    "uri": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Notebooks.17~MX')",
                    "type": "SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType"
                },
                "ProductCategory": "Notebooks",
                "SoldToPartyCountry": "MX",
                "SoldToPartyCountryName": "墨西哥",
                "NumberOfSalesOrders": 1
            },
            {
                "__metadata": {
                    "id": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Ink%20Jet%20Printers.17~ES')",
                    "uri": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Ink%20Jet%20Printers.17~ES')",
                    "type": "SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType"
                },
                "ProductCategory": "Ink Jet Printers",
                "SoldToPartyCountry": "ES",
                "SoldToPartyCountryName": "西班牙",
                "NumberOfSalesOrders": 1
            },
            {
                "__metadata": {
                    "id": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Telecommunications.17~ES')",
                    "uri": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Telecommunications.17~ES')",
                    "type": "SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType"
                },
                "ProductCategory": "Telecommunications",
                "SoldToPartyCountry": "ES",
                "SoldToPartyCountryName": "西班牙",
                "NumberOfSalesOrders": 2
            },
            {
                "__metadata": {
                    "id": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Speakers.17~DE')",
                    "uri": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Speakers.17~DE')",
                    "type": "SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType"
                },
                "ProductCategory": "Speakers",
                "SoldToPartyCountry": "DE",
                "SoldToPartyCountryName": "德国",
                "NumberOfSalesOrders": 2
            },
            {
                "__metadata": {
                    "id": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Mice.17~DE')",
                    "uri": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Mice.17~DE')",
                    "type": "SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType"
                },
                "ProductCategory": "Mice",
                "SoldToPartyCountry": "DE",
                "SoldToPartyCountryName": "德国",
                "NumberOfSalesOrders": 1
            },
            {
                "__metadata": {
                    "id": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~PCs.17~GB')",
                    "uri": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~PCs.17~GB')",
                    "type": "SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType"
                },
                "ProductCategory": "PCs",
                "SoldToPartyCountry": "GB",
                "SoldToPartyCountryName": "英国",
                "NumberOfSalesOrders": 1
            },
            {
                "__metadata": {
                    "id": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Notebooks.17~GB')",
                    "uri": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Notebooks.17~GB')",
                    "type": "SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType"
                },
                "ProductCategory": "Notebooks",
                "SoldToPartyCountry": "GB",
                "SoldToPartyCountryName": "英国",
                "NumberOfSalesOrders": 1
            },
            {
                "__metadata": {
                    "id": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~PDAs%20%26A%20Organizers.17~GB')",
                    "uri": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~PDAs%20%26A%20Organizers.17~GB')",
                    "type": "SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType"
                },
                "ProductCategory": "PDAs & Organizers",
                "SoldToPartyCountry": "GB",
                "SoldToPartyCountryName": "英国",
                "NumberOfSalesOrders": 1
            },
            {
                "__metadata": {
                    "id": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Scanners.17~DE')",
                    "uri": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Scanners.17~DE')",
                    "type": "SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType"
                },
                "ProductCategory": "Scanners",
                "SoldToPartyCountry": "DE",
                "SoldToPartyCountryName": "德国",
                "NumberOfSalesOrders": 2
            },
            {
                "__metadata": {
                    "id": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Mousepads.17~CH')",
                    "uri": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Mousepads.17~CH')",
                    "type": "SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType"
                },
                "ProductCategory": "Mousepads",
                "SoldToPartyCountry": "CH",
                "SoldToPartyCountryName": "瑞士",
                "NumberOfSalesOrders": 1
            },
            {
                "__metadata": {
                    "id": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Keyboards.17~FR')",
                    "uri": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Keyboards.17~FR')",
                    "type": "SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType"
                },
                "ProductCategory": "Keyboards",
                "SoldToPartyCountry": "FR",
                "SoldToPartyCountryName": "法国",
                "NumberOfSalesOrders": 3
            },
            {
                "__metadata": {
                    "id": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Ink%20Jet%20Printers.17~US')",
                    "uri": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Ink%20Jet%20Printers.17~US')",
                    "type": "SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType"
                },
                "ProductCategory": "Ink Jet Printers",
                "SoldToPartyCountry": "US",
                "SoldToPartyCountryName": "美国",
                "NumberOfSalesOrders": 1
            },
            {
                "__metadata": {
                    "id": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Software.17~US')",
                    "uri": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Software.17~US')",
                    "type": "SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType"
                },
                "ProductCategory": "Software",
                "SoldToPartyCountry": "US",
                "SoldToPartyCountryName": "美国",
                "NumberOfSalesOrders": 26
            },
            {
                "__metadata": {
                    "id": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Ink%20Jet%20Printers.17~DE')",
                    "uri": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Ink%20Jet%20Printers.17~DE')",
                    "type": "SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType"
                },
                "ProductCategory": "Ink Jet Printers",
                "SoldToPartyCountry": "DE",
                "SoldToPartyCountryName": "德国",
                "NumberOfSalesOrders": 10
            },
            {
                "__metadata": {
                    "id": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~PCs.17~DE')",
                    "uri": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~PCs.17~DE')",
                    "type": "SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType"
                },
                "ProductCategory": "PCs",
                "SoldToPartyCountry": "DE",
                "SoldToPartyCountryName": "德国",
                "NumberOfSalesOrders": 2
            },
            {
                "__metadata": {
                    "id": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Software.17~MX')",
                    "uri": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Software.17~MX')",
                    "type": "SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType"
                },
                "ProductCategory": "Software",
                "SoldToPartyCountry": "MX",
                "SoldToPartyCountryName": "墨西哥",
                "NumberOfSalesOrders": 4
            },
            {
                "__metadata": {
                    "id": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Graphic%20Cards.17~AR')",
                    "uri": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Graphic%20Cards.17~AR')",
                    "type": "SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType"
                },
                "ProductCategory": "Graphic Cards",
                "SoldToPartyCountry": "AR",
                "SoldToPartyCountryName": "阿根廷",
                "NumberOfSalesOrders": 12
            },
            {
                "__metadata": {
                    "id": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Software.17~AT')",
                    "uri": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Software.17~AT')",
                    "type": "SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType"
                },
                "ProductCategory": "Software",
                "SoldToPartyCountry": "AT",
                "SoldToPartyCountryName": "奥地利",
                "NumberOfSalesOrders": 3
            },
            {
                "__metadata": {
                    "id": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Servers.17~GB')",
                    "uri": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Servers.17~GB')",
                    "type": "SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType"
                },
                "ProductCategory": "Servers",
                "SoldToPartyCountry": "GB",
                "SoldToPartyCountryName": "英国",
                "NumberOfSalesOrders": 2
            },
            {
                "__metadata": {
                    "id": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Software.17~CH')",
                    "uri": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Software.17~CH')",
                    "type": "SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType"
                },
                "ProductCategory": "Software",
                "SoldToPartyCountry": "CH",
                "SoldToPartyCountryName": "瑞士",
                "NumberOfSalesOrders": 3
            },
            {
                "__metadata": {
                    "id": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~PDAs%20%26A%20Organizers.17~CH')",
                    "uri": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~PDAs%20%26A%20Organizers.17~CH')",
                    "type": "SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType"
                },
                "ProductCategory": "PDAs & Organizers",
                "SoldToPartyCountry": "CH",
                "SoldToPartyCountryName": "瑞士",
                "NumberOfSalesOrders": 1
            },
            {
                "__metadata": {
                    "id": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Telecommunications.17~AR')",
                    "uri": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Telecommunications.17~AR')",
                    "type": "SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType"
                },
                "ProductCategory": "Telecommunications",
                "SoldToPartyCountry": "AR",
                "SoldToPartyCountryName": "阿根廷",
                "NumberOfSalesOrders": 1
            },
            {
                "__metadata": {
                    "id": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Mousepads.17~IT')",
                    "uri": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Mousepads.17~IT')",
                    "type": "SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType"
                },
                "ProductCategory": "Mousepads",
                "SoldToPartyCountry": "IT",
                "SoldToPartyCountryName": "意大利",
                "NumberOfSalesOrders": 1
            },
            {
                "__metadata": {
                    "id": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~PCs.17~US')",
                    "uri": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~PCs.17~US')",
                    "type": "SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType"
                },
                "ProductCategory": "PCs",
                "SoldToPartyCountry": "US",
                "SoldToPartyCountryName": "美国",
                "NumberOfSalesOrders": 1
            },
            {
                "__metadata": {
                    "id": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Servers.17~BR')",
                    "uri": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Servers.17~BR')",
                    "type": "SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType"
                },
                "ProductCategory": "Servers",
                "SoldToPartyCountry": "BR",
                "SoldToPartyCountryName": "巴西",
                "NumberOfSalesOrders": 2
            },
            {
                "__metadata": {
                    "id": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Keyboards.17~CH')",
                    "uri": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Keyboards.17~CH')",
                    "type": "SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType"
                },
                "ProductCategory": "Keyboards",
                "SoldToPartyCountry": "CH",
                "SoldToPartyCountryName": "瑞士",
                "NumberOfSalesOrders": 1
            },
            {
                "__metadata": {
                    "id": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Notebooks.17~AR')",
                    "uri": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Notebooks.17~AR')",
                    "type": "SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType"
                },
                "ProductCategory": "Notebooks",
                "SoldToPartyCountry": "AR",
                "SoldToPartyCountryName": "阿根廷",
                "NumberOfSalesOrders": 1
            },
            {
                "__metadata": {
                    "id": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~PCs.17~ES')",
                    "uri": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~PCs.17~ES')",
                    "type": "SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType"
                },
                "ProductCategory": "PCs",
                "SoldToPartyCountry": "ES",
                "SoldToPartyCountryName": "西班牙",
                "NumberOfSalesOrders": 1
            },
            {
                "__metadata": {
                    "id": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Computer%20System%20Accessories.17~JP')",
                    "uri": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Computer%20System%20Accessories.17~JP')",
                    "type": "SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType"
                },
                "ProductCategory": "Computer System Accessories",
                "SoldToPartyCountry": "JP",
                "SoldToPartyCountryName": "日本",
                "NumberOfSalesOrders": 4
            },
            {
                "__metadata": {
                    "id": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Multifunction%20Printers.17~FR')",
                    "uri": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Multifunction%20Printers.17~FR')",
                    "type": "SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType"
                },
                "ProductCategory": "Multifunction Printers",
                "SoldToPartyCountry": "FR",
                "SoldToPartyCountryName": "法国",
                "NumberOfSalesOrders": 1
            },
            {
                "__metadata": {
                    "id": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Notebooks.17~BR')",
                    "uri": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Notebooks.17~BR')",
                    "type": "SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType"
                },
                "ProductCategory": "Notebooks",
                "SoldToPartyCountry": "BR",
                "SoldToPartyCountryName": "巴西",
                "NumberOfSalesOrders": 1
            },
            {
                "__metadata": {
                    "id": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Flat%20Screen%20Monitors.17~AT')",
                    "uri": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Flat%20Screen%20Monitors.17~AT')",
                    "type": "SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType"
                },
                "ProductCategory": "Flat Screen Monitors",
                "SoldToPartyCountry": "AT",
                "SoldToPartyCountryName": "奥地利",
                "NumberOfSalesOrders": 1
            },
            {
                "__metadata": {
                    "id": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Mice.17~FR')",
                    "uri": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Mice.17~FR')",
                    "type": "SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType"
                },
                "ProductCategory": "Mice",
                "SoldToPartyCountry": "FR",
                "SoldToPartyCountryName": "法国",
                "NumberOfSalesOrders": 3
            },
            {
                "__metadata": {
                    "id": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Flat%20Screen%20Monitors.17~CH')",
                    "uri": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Flat%20Screen%20Monitors.17~CH')",
                    "type": "SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType"
                },
                "ProductCategory": "Flat Screen Monitors",
                "SoldToPartyCountry": "CH",
                "SoldToPartyCountryName": "瑞士",
                "NumberOfSalesOrders": 1
            },
            {
                "__metadata": {
                    "id": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Computer%20System%20Accessories.17~DE')",
                    "uri": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Computer%20System%20Accessories.17~DE')",
                    "type": "SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType"
                },
                "ProductCategory": "Computer System Accessories",
                "SoldToPartyCountry": "DE",
                "SoldToPartyCountryName": "德国",
                "NumberOfSalesOrders": 8
            },
            {
                "__metadata": {
                    "id": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Mice.17~AR')",
                    "uri": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Mice.17~AR')",
                    "type": "SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType"
                },
                "ProductCategory": "Mice",
                "SoldToPartyCountry": "AR",
                "SoldToPartyCountryName": "阿根廷",
                "NumberOfSalesOrders": 15
            },
            {
                "__metadata": {
                    "id": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Ink%20Jet%20Printers.17~FR')",
                    "uri": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Ink%20Jet%20Printers.17~FR')",
                    "type": "SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType"
                },
                "ProductCategory": "Ink Jet Printers",
                "SoldToPartyCountry": "FR",
                "SoldToPartyCountryName": "法国",
                "NumberOfSalesOrders": 1
            },
            {
                "__metadata": {
                    "id": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Notebooks.17~ES')",
                    "uri": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Notebooks.17~ES')",
                    "type": "SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType"
                },
                "ProductCategory": "Notebooks",
                "SoldToPartyCountry": "ES",
                "SoldToPartyCountryName": "西班牙",
                "NumberOfSalesOrders": 3
            },
            {
                "__metadata": {
                    "id": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Graphic%20Cards.17~FR')",
                    "uri": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Graphic%20Cards.17~FR')",
                    "type": "SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType"
                },
                "ProductCategory": "Graphic Cards",
                "SoldToPartyCountry": "FR",
                "SoldToPartyCountryName": "法国",
                "NumberOfSalesOrders": 4
            },
            {
                "__metadata": {
                    "id": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Servers.17~DE')",
                    "uri": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Servers.17~DE')",
                    "type": "SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType"
                },
                "ProductCategory": "Servers",
                "SoldToPartyCountry": "DE",
                "SoldToPartyCountryName": "德国",
                "NumberOfSalesOrders": 3
            },
            {
                "__metadata": {
                    "id": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~PDAs%20%26A%20Organizers.17~BR')",
                    "uri": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~PDAs%20%26A%20Organizers.17~BR')",
                    "type": "SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType"
                },
                "ProductCategory": "PDAs & Organizers",
                "SoldToPartyCountry": "BR",
                "SoldToPartyCountryName": "巴西",
                "NumberOfSalesOrders": 1
            },
            {
                "__metadata": {
                    "id": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Graphic%20Cards.17~CH')",
                    "uri": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Graphic%20Cards.17~CH')",
                    "type": "SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType"
                },
                "ProductCategory": "Graphic Cards",
                "SoldToPartyCountry": "CH",
                "SoldToPartyCountryName": "瑞士",
                "NumberOfSalesOrders": 1
            },
            {
                "__metadata": {
                    "id": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Telecommunications.17~MX')",
                    "uri": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Telecommunications.17~MX')",
                    "type": "SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType"
                },
                "ProductCategory": "Telecommunications",
                "SoldToPartyCountry": "MX",
                "SoldToPartyCountryName": "墨西哥",
                "NumberOfSalesOrders": 1
            },
            {
                "__metadata": {
                    "id": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Keyboards.17~CA')",
                    "uri": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Keyboards.17~CA')",
                    "type": "SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType"
                },
                "ProductCategory": "Keyboards",
                "SoldToPartyCountry": "CA",
                "SoldToPartyCountryName": "加拿大",
                "NumberOfSalesOrders": 2
            },
            {
                "__metadata": {
                    "id": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Laser%20Printers.17~MX')",
                    "uri": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Laser%20Printers.17~MX')",
                    "type": "SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType"
                },
                "ProductCategory": "Laser Printers",
                "SoldToPartyCountry": "MX",
                "SoldToPartyCountryName": "墨西哥",
                "NumberOfSalesOrders": 1
            },
            {
                "__metadata": {
                    "id": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Computer%20System%20Accessories.17~BR')",
                    "uri": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Computer%20System%20Accessories.17~BR')",
                    "type": "SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType"
                },
                "ProductCategory": "Computer System Accessories",
                "SoldToPartyCountry": "BR",
                "SoldToPartyCountryName": "巴西",
                "NumberOfSalesOrders": 2
            },
            {
                "__metadata": {
                    "id": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Telecommunications.17~CH')",
                    "uri": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Telecommunications.17~CH')",
                    "type": "SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType"
                },
                "ProductCategory": "Telecommunications",
                "SoldToPartyCountry": "CH",
                "SoldToPartyCountryName": "瑞士",
                "NumberOfSalesOrders": 1
            },
            {
                "__metadata": {
                    "id": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Speakers.17~US')",
                    "uri": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Speakers.17~US')",
                    "type": "SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType"
                },
                "ProductCategory": "Speakers",
                "SoldToPartyCountry": "US",
                "SoldToPartyCountryName": "美国",
                "NumberOfSalesOrders": 1
            },
            {
                "__metadata": {
                    "id": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Scanners.17~GB')",
                    "uri": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Scanners.17~GB')",
                    "type": "SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType"
                },
                "ProductCategory": "Scanners",
                "SoldToPartyCountry": "GB",
                "SoldToPartyCountryName": "英国",
                "NumberOfSalesOrders": 1
            },
            {
                "__metadata": {
                    "id": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Multifunction%20Printers.17~IT')",
                    "uri": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Multifunction%20Printers.17~IT')",
                    "type": "SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType"
                },
                "ProductCategory": "Multifunction Printers",
                "SoldToPartyCountry": "IT",
                "SoldToPartyCountryName": "意大利",
                "NumberOfSalesOrders": 1
            },
            {
                "__metadata": {
                    "id": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~PDAs%20%26A%20Organizers.17~IT')",
                    "uri": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~PDAs%20%26A%20Organizers.17~IT')",
                    "type": "SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType"
                },
                "ProductCategory": "PDAs & Organizers",
                "SoldToPartyCountry": "IT",
                "SoldToPartyCountryName": "意大利",
                "NumberOfSalesOrders": 1
            },
            {
                "__metadata": {
                    "id": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Graphic%20Cards.17~IT')",
                    "uri": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Graphic%20Cards.17~IT')",
                    "type": "SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType"
                },
                "ProductCategory": "Graphic Cards",
                "SoldToPartyCountry": "IT",
                "SoldToPartyCountryName": "意大利",
                "NumberOfSalesOrders": 1
            },
            {
                "__metadata": {
                    "id": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Laser%20Printers.17~DE')",
                    "uri": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Laser%20Printers.17~DE')",
                    "type": "SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType"
                },
                "ProductCategory": "Laser Printers",
                "SoldToPartyCountry": "DE",
                "SoldToPartyCountryName": "德国",
                "NumberOfSalesOrders": 19
            },
            {
                "__metadata": {
                    "id": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Keyboards.17~US')",
                    "uri": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Keyboards.17~US')",
                    "type": "SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType"
                },
                "ProductCategory": "Keyboards",
                "SoldToPartyCountry": "US",
                "SoldToPartyCountryName": "美国",
                "NumberOfSalesOrders": 10
            },
            {
                "__metadata": {
                    "id": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Computer%20System%20Accessories.17~FR')",
                    "uri": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Computer%20System%20Accessories.17~FR')",
                    "type": "SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType"
                },
                "ProductCategory": "Computer System Accessories",
                "SoldToPartyCountry": "FR",
                "SoldToPartyCountryName": "法国",
                "NumberOfSalesOrders": 6
            },
            {
                "__metadata": {
                    "id": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Flat%20Screen%20Monitors.17~ES')",
                    "uri": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Flat%20Screen%20Monitors.17~ES')",
                    "type": "SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType"
                },
                "ProductCategory": "Flat Screen Monitors",
                "SoldToPartyCountry": "ES",
                "SoldToPartyCountryName": "西班牙",
                "NumberOfSalesOrders": 1
            },
            {
                "__metadata": {
                    "id": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~PDAs%20%26A%20Organizers.17~ES')",
                    "uri": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~PDAs%20%26A%20Organizers.17~ES')",
                    "type": "SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType"
                },
                "ProductCategory": "PDAs & Organizers",
                "SoldToPartyCountry": "ES",
                "SoldToPartyCountryName": "西班牙",
                "NumberOfSalesOrders": 2
            },
            {
                "__metadata": {
                    "id": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Laser%20Printers.17~ES')",
                    "uri": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Laser%20Printers.17~ES')",
                    "type": "SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType"
                },
                "ProductCategory": "Laser Printers",
                "SoldToPartyCountry": "ES",
                "SoldToPartyCountryName": "西班牙",
                "NumberOfSalesOrders": 2
            },
            {
                "__metadata": {
                    "id": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Servers.17~US')",
                    "uri": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Servers.17~US')",
                    "type": "SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType"
                },
                "ProductCategory": "Servers",
                "SoldToPartyCountry": "US",
                "SoldToPartyCountryName": "美国",
                "NumberOfSalesOrders": 3
            },
            {
                "__metadata": {
                    "id": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Laser%20Printers.17~BR')",
                    "uri": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Laser%20Printers.17~BR')",
                    "type": "SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType"
                },
                "ProductCategory": "Laser Printers",
                "SoldToPartyCountry": "BR",
                "SoldToPartyCountryName": "巴西",
                "NumberOfSalesOrders": 1
            },
            {
                "__metadata": {
                    "id": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Mice.17~CA')",
                    "uri": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Mice.17~CA')",
                    "type": "SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType"
                },
                "ProductCategory": "Mice",
                "SoldToPartyCountry": "CA",
                "SoldToPartyCountryName": "加拿大",
                "NumberOfSalesOrders": 1
            },
            {
                "__metadata": {
                    "id": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Notebooks.17~FR')",
                    "uri": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Notebooks.17~FR')",
                    "type": "SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType"
                },
                "ProductCategory": "Notebooks",
                "SoldToPartyCountry": "FR",
                "SoldToPartyCountryName": "法国",
                "NumberOfSalesOrders": 3
            },
            {
                "__metadata": {
                    "id": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Computer%20System%20Accessories.17~AT')",
                    "uri": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Computer%20System%20Accessories.17~AT')",
                    "type": "SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType"
                },
                "ProductCategory": "Computer System Accessories",
                "SoldToPartyCountry": "AT",
                "SoldToPartyCountryName": "奥地利",
                "NumberOfSalesOrders": 2
            },
            {
                "__metadata": {
                    "id": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Telecommunications.17~AT')",
                    "uri": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Telecommunications.17~AT')",
                    "type": "SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType"
                },
                "ProductCategory": "Telecommunications",
                "SoldToPartyCountry": "AT",
                "SoldToPartyCountryName": "奥地利",
                "NumberOfSalesOrders": 1
            },
            {
                "__metadata": {
                    "id": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Multifunction%20Printers.17~BR')",
                    "uri": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Multifunction%20Printers.17~BR')",
                    "type": "SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType"
                },
                "ProductCategory": "Multifunction Printers",
                "SoldToPartyCountry": "BR",
                "SoldToPartyCountryName": "巴西",
                "NumberOfSalesOrders": 1
            },
            {
                "__metadata": {
                    "id": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~PDAs%20%26A%20Organizers.17~DE')",
                    "uri": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~PDAs%20%26A%20Organizers.17~DE')",
                    "type": "SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType"
                },
                "ProductCategory": "PDAs & Organizers",
                "SoldToPartyCountry": "DE",
                "SoldToPartyCountryName": "德国",
                "NumberOfSalesOrders": 20
            },
            {
                "__metadata": {
                    "id": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~PCs.17~CA')",
                    "uri": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~PCs.17~CA')",
                    "type": "SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType"
                },
                "ProductCategory": "PCs",
                "SoldToPartyCountry": "CA",
                "SoldToPartyCountryName": "加拿大",
                "NumberOfSalesOrders": 1
            },
            {
                "__metadata": {
                    "id": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Multifunction%20Printers.17~US')",
                    "uri": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Multifunction%20Printers.17~US')",
                    "type": "SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType"
                },
                "ProductCategory": "Multifunction Printers",
                "SoldToPartyCountry": "US",
                "SoldToPartyCountryName": "美国",
                "NumberOfSalesOrders": 5
            },
            {
                "__metadata": {
                    "id": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Speakers.17~CH')",
                    "uri": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Speakers.17~CH')",
                    "type": "SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType"
                },
                "ProductCategory": "Speakers",
                "SoldToPartyCountry": "CH",
                "SoldToPartyCountryName": "瑞士",
                "NumberOfSalesOrders": 1
            },
            {
                "__metadata": {
                    "id": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Mice.17~US')",
                    "uri": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Mice.17~US')",
                    "type": "SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType"
                },
                "ProductCategory": "Mice",
                "SoldToPartyCountry": "US",
                "SoldToPartyCountryName": "美国",
                "NumberOfSalesOrders": 7
            },
            {
                "__metadata": {
                    "id": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Software.17~AR')",
                    "uri": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Software.17~AR')",
                    "type": "SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType"
                },
                "ProductCategory": "Software",
                "SoldToPartyCountry": "AR",
                "SoldToPartyCountryName": "阿根廷",
                "NumberOfSalesOrders": 3
            },
            {
                "__metadata": {
                    "id": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Scanners.17~JP')",
                    "uri": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Scanners.17~JP')",
                    "type": "SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType"
                },
                "ProductCategory": "Scanners",
                "SoldToPartyCountry": "JP",
                "SoldToPartyCountryName": "日本",
                "NumberOfSalesOrders": 8
            },
            {
                "__metadata": {
                    "id": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Flat%20Screen%20Monitors.17~MX')",
                    "uri": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Flat%20Screen%20Monitors.17~MX')",
                    "type": "SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType"
                },
                "ProductCategory": "Flat Screen Monitors",
                "SoldToPartyCountry": "MX",
                "SoldToPartyCountryName": "墨西哥",
                "NumberOfSalesOrders": 2
            },
            {
                "__metadata": {
                    "id": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Flat%20Screen%20Monitors.17~JP')",
                    "uri": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Flat%20Screen%20Monitors.17~JP')",
                    "type": "SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType"
                },
                "ProductCategory": "Flat Screen Monitors",
                "SoldToPartyCountry": "JP",
                "SoldToPartyCountryName": "日本",
                "NumberOfSalesOrders": 14
            },
            {
                "__metadata": {
                    "id": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Mice.17~MX')",
                    "uri": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Mice.17~MX')",
                    "type": "SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType"
                },
                "ProductCategory": "Mice",
                "SoldToPartyCountry": "MX",
                "SoldToPartyCountryName": "墨西哥",
                "NumberOfSalesOrders": 8
            },
            {
                "__metadata": {
                    "id": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Laser%20Printers.17~GB')",
                    "uri": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Laser%20Printers.17~GB')",
                    "type": "SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType"
                },
                "ProductCategory": "Laser Printers",
                "SoldToPartyCountry": "GB",
                "SoldToPartyCountryName": "英国",
                "NumberOfSalesOrders": 1
            },
            {
                "__metadata": {
                    "id": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~PDAs%20%26A%20Organizers.17~FR')",
                    "uri": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~PDAs%20%26A%20Organizers.17~FR')",
                    "type": "SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType"
                },
                "ProductCategory": "PDAs & Organizers",
                "SoldToPartyCountry": "FR",
                "SoldToPartyCountryName": "法国",
                "NumberOfSalesOrders": 2
            },
            {
                "__metadata": {
                    "id": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Software.17~CA')",
                    "uri": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Software.17~CA')",
                    "type": "SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType"
                },
                "ProductCategory": "Software",
                "SoldToPartyCountry": "CA",
                "SoldToPartyCountryName": "加拿大",
                "NumberOfSalesOrders": 2
            },
            {
                "__metadata": {
                    "id": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~PDAs%20%26A%20Organizers.17~MX')",
                    "uri": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~PDAs%20%26A%20Organizers.17~MX')",
                    "type": "SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType"
                },
                "ProductCategory": "PDAs & Organizers",
                "SoldToPartyCountry": "MX",
                "SoldToPartyCountryName": "墨西哥",
                "NumberOfSalesOrders": 2
            },
            {
                "__metadata": {
                    "id": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Computer%20System%20Accessories.17~ES')",
                    "uri": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Computer%20System%20Accessories.17~ES')",
                    "type": "SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType"
                },
                "ProductCategory": "Computer System Accessories",
                "SoldToPartyCountry": "ES",
                "SoldToPartyCountryName": "西班牙",
                "NumberOfSalesOrders": 2
            },
            {
                "__metadata": {
                    "id": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Multifunction%20Printers.17~CH')",
                    "uri": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Multifunction%20Printers.17~CH')",
                    "type": "SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType"
                },
                "ProductCategory": "Multifunction Printers",
                "SoldToPartyCountry": "CH",
                "SoldToPartyCountryName": "瑞士",
                "NumberOfSalesOrders": 1
            },
            {
                "__metadata": {
                    "id": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Flat%20Screen%20Monitors.17~BR')",
                    "uri": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Flat%20Screen%20Monitors.17~BR')",
                    "type": "SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType"
                },
                "ProductCategory": "Flat Screen Monitors",
                "SoldToPartyCountry": "BR",
                "SoldToPartyCountryName": "巴西",
                "NumberOfSalesOrders": 1
            },
            {
                "__metadata": {
                    "id": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Mousepads.17~MX')",
                    "uri": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Mousepads.17~MX')",
                    "type": "SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType"
                },
                "ProductCategory": "Mousepads",
                "SoldToPartyCountry": "MX",
                "SoldToPartyCountryName": "墨西哥",
                "NumberOfSalesOrders": 8
            },
            {
                "__metadata": {
                    "id": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Keyboards.17~MX')",
                    "uri": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Keyboards.17~MX')",
                    "type": "SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType"
                },
                "ProductCategory": "Keyboards",
                "SoldToPartyCountry": "MX",
                "SoldToPartyCountryName": "墨西哥",
                "NumberOfSalesOrders": 8
            },
            {
                "__metadata": {
                    "id": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Multifunction%20Printers.17~MX')",
                    "uri": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Multifunction%20Printers.17~MX')",
                    "type": "SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType"
                },
                "ProductCategory": "Multifunction Printers",
                "SoldToPartyCountry": "MX",
                "SoldToPartyCountryName": "墨西哥",
                "NumberOfSalesOrders": 8
            },
            {
                "__metadata": {
                    "id": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Keyboards.17~AR')",
                    "uri": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Keyboards.17~AR')",
                    "type": "SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType"
                },
                "ProductCategory": "Keyboards",
                "SoldToPartyCountry": "AR",
                "SoldToPartyCountryName": "阿根廷",
                "NumberOfSalesOrders": 13
            },
            {
                "__metadata": {
                    "id": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Speakers.17~GB')",
                    "uri": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Speakers.17~GB')",
                    "type": "SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType"
                },
                "ProductCategory": "Speakers",
                "SoldToPartyCountry": "GB",
                "SoldToPartyCountryName": "英国",
                "NumberOfSalesOrders": 2
            },
            {
                "__metadata": {
                    "id": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Flat%20Screen%20Monitors.17~CA')",
                    "uri": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Flat%20Screen%20Monitors.17~CA')",
                    "type": "SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType"
                },
                "ProductCategory": "Flat Screen Monitors",
                "SoldToPartyCountry": "CA",
                "SoldToPartyCountryName": "加拿大",
                "NumberOfSalesOrders": 1
            },
            {
                "__metadata": {
                    "id": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Laser%20Printers.17~JP')",
                    "uri": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Laser%20Printers.17~JP')",
                    "type": "SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType"
                },
                "ProductCategory": "Laser Printers",
                "SoldToPartyCountry": "JP",
                "SoldToPartyCountryName": "日本",
                "NumberOfSalesOrders": 11
            },
            {
                "__metadata": {
                    "id": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Notebooks.17~JP')",
                    "uri": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Notebooks.17~JP')",
                    "type": "SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType"
                },
                "ProductCategory": "Notebooks",
                "SoldToPartyCountry": "JP",
                "SoldToPartyCountryName": "日本",
                "NumberOfSalesOrders": 3
            },
            {
                "__metadata": {
                    "id": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Speakers.17~IT')",
                    "uri": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Speakers.17~IT')",
                    "type": "SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType"
                },
                "ProductCategory": "Speakers",
                "SoldToPartyCountry": "IT",
                "SoldToPartyCountryName": "意大利",
                "NumberOfSalesOrders": 1
            },
            {
                "__metadata": {
                    "id": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Computer%20System%20Accessories.17~AR')",
                    "uri": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Computer%20System%20Accessories.17~AR')",
                    "type": "SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType"
                },
                "ProductCategory": "Computer System Accessories",
                "SoldToPartyCountry": "AR",
                "SoldToPartyCountryName": "阿根廷",
                "NumberOfSalesOrders": 2
            },
            {
                "__metadata": {
                    "id": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Graphic%20Cards.17~JP')",
                    "uri": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Graphic%20Cards.17~JP')",
                    "type": "SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType"
                },
                "ProductCategory": "Graphic Cards",
                "SoldToPartyCountry": "JP",
                "SoldToPartyCountryName": "日本",
                "NumberOfSalesOrders": 10
            },
            {
                "__metadata": {
                    "id": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~PDAs%20%26A%20Organizers.17~AT')",
                    "uri": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~PDAs%20%26A%20Organizers.17~AT')",
                    "type": "SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType"
                },
                "ProductCategory": "PDAs & Organizers",
                "SoldToPartyCountry": "AT",
                "SoldToPartyCountryName": "奥地利",
                "NumberOfSalesOrders": 1
            },
            {
                "__metadata": {
                    "id": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Speakers.17~AT')",
                    "uri": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Speakers.17~AT')",
                    "type": "SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType"
                },
                "ProductCategory": "Speakers",
                "SoldToPartyCountry": "AT",
                "SoldToPartyCountryName": "奥地利",
                "NumberOfSalesOrders": 1
            },
            {
                "__metadata": {
                    "id": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Graphic%20Cards.17~DE')",
                    "uri": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Graphic%20Cards.17~DE')",
                    "type": "SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType"
                },
                "ProductCategory": "Graphic Cards",
                "SoldToPartyCountry": "DE",
                "SoldToPartyCountryName": "德国",
                "NumberOfSalesOrders": 2
            },
            {
                "__metadata": {
                    "id": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Laser%20Printers.17~CA')",
                    "uri": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Laser%20Printers.17~CA')",
                    "type": "SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType"
                },
                "ProductCategory": "Laser Printers",
                "SoldToPartyCountry": "CA",
                "SoldToPartyCountryName": "加拿大",
                "NumberOfSalesOrders": 2
            },
            {
                "__metadata": {
                    "id": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Servers.17~JP')",
                    "uri": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Servers.17~JP')",
                    "type": "SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType"
                },
                "ProductCategory": "Servers",
                "SoldToPartyCountry": "JP",
                "SoldToPartyCountryName": "日本",
                "NumberOfSalesOrders": 2
            },
            {
                "__metadata": {
                    "id": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Servers.17~FR')",
                    "uri": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Servers.17~FR')",
                    "type": "SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType"
                },
                "ProductCategory": "Servers",
                "SoldToPartyCountry": "FR",
                "SoldToPartyCountryName": "法国",
                "NumberOfSalesOrders": 3
            },
            {
                "__metadata": {
                    "id": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Keyboards.17~IT')",
                    "uri": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Keyboards.17~IT')",
                    "type": "SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType"
                },
                "ProductCategory": "Keyboards",
                "SoldToPartyCountry": "IT",
                "SoldToPartyCountryName": "意大利",
                "NumberOfSalesOrders": 1
            },
            {
                "__metadata": {
                    "id": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Speakers.17~FR')",
                    "uri": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Speakers.17~FR')",
                    "type": "SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType"
                },
                "ProductCategory": "Speakers",
                "SoldToPartyCountry": "FR",
                "SoldToPartyCountryName": "法国",
                "NumberOfSalesOrders": 2
            },
            {
                "__metadata": {
                    "id": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Computer%20System%20Accessories.17~CH')",
                    "uri": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Computer%20System%20Accessories.17~CH')",
                    "type": "SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType"
                },
                "ProductCategory": "Computer System Accessories",
                "SoldToPartyCountry": "CH",
                "SoldToPartyCountryName": "瑞士",
                "NumberOfSalesOrders": 2
            },
            {
                "__metadata": {
                    "id": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Graphic%20Cards.17~US')",
                    "uri": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Graphic%20Cards.17~US')",
                    "type": "SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType"
                },
                "ProductCategory": "Graphic Cards",
                "SoldToPartyCountry": "US",
                "SoldToPartyCountryName": "美国",
                "NumberOfSalesOrders": 10
            },
            {
                "__metadata": {
                    "id": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Computer%20System%20Accessories.17~MX')",
                    "uri": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Computer%20System%20Accessories.17~MX')",
                    "type": "SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType"
                },
                "ProductCategory": "Computer System Accessories",
                "SoldToPartyCountry": "MX",
                "SoldToPartyCountryName": "墨西哥",
                "NumberOfSalesOrders": 8
            },
            {
                "__metadata": {
                    "id": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Telecommunications.17~DE')",
                    "uri": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Telecommunications.17~DE')",
                    "type": "SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType"
                },
                "ProductCategory": "Telecommunications",
                "SoldToPartyCountry": "DE",
                "SoldToPartyCountryName": "德国",
                "NumberOfSalesOrders": 3
            },
            {
                "__metadata": {
                    "id": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Flat%20Screen%20Monitors.17~US')",
                    "uri": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Flat%20Screen%20Monitors.17~US')",
                    "type": "SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType"
                },
                "ProductCategory": "Flat Screen Monitors",
                "SoldToPartyCountry": "US",
                "SoldToPartyCountryName": "美国",
                "NumberOfSalesOrders": 15
            },
            {
                "__metadata": {
                    "id": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Servers.17~MX')",
                    "uri": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Servers.17~MX')",
                    "type": "SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType"
                },
                "ProductCategory": "Servers",
                "SoldToPartyCountry": "MX",
                "SoldToPartyCountryName": "墨西哥",
                "NumberOfSalesOrders": 7
            },
            {
                "__metadata": {
                    "id": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Multifunction%20Printers.17~AT')",
                    "uri": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Multifunction%20Printers.17~AT')",
                    "type": "SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType"
                },
                "ProductCategory": "Multifunction Printers",
                "SoldToPartyCountry": "AT",
                "SoldToPartyCountryName": "奥地利",
                "NumberOfSalesOrders": 1
            },
            {
                "__metadata": {
                    "id": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Telecommunications.17~CA')",
                    "uri": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Telecommunications.17~CA')",
                    "type": "SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType"
                },
                "ProductCategory": "Telecommunications",
                "SoldToPartyCountry": "CA",
                "SoldToPartyCountryName": "加拿大",
                "NumberOfSalesOrders": 2
            },
            {
                "__metadata": {
                    "id": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Multifunction%20Printers.17~CA')",
                    "uri": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Multifunction%20Printers.17~CA')",
                    "type": "SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType"
                },
                "ProductCategory": "Multifunction Printers",
                "SoldToPartyCountry": "CA",
                "SoldToPartyCountryName": "加拿大",
                "NumberOfSalesOrders": 1
            },
            {
                "__metadata": {
                    "id": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Mousepads.17~DE')",
                    "uri": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Mousepads.17~DE')",
                    "type": "SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType"
                },
                "ProductCategory": "Mousepads",
                "SoldToPartyCountry": "DE",
                "SoldToPartyCountryName": "德国",
                "NumberOfSalesOrders": 1
            },
            {
                "__metadata": {
                    "id": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Flat%20Screen%20Monitors.17~AR')",
                    "uri": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Flat%20Screen%20Monitors.17~AR')",
                    "type": "SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType"
                },
                "ProductCategory": "Flat Screen Monitors",
                "SoldToPartyCountry": "AR",
                "SoldToPartyCountryName": "阿根廷",
                "NumberOfSalesOrders": 4
            },
            {
                "__metadata": {
                    "id": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Computer%20System%20Accessories.17~CA')",
                    "uri": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Computer%20System%20Accessories.17~CA')",
                    "type": "SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType"
                },
                "ProductCategory": "Computer System Accessories",
                "SoldToPartyCountry": "CA",
                "SoldToPartyCountryName": "加拿大",
                "NumberOfSalesOrders": 2
            },
            {
                "__metadata": {
                    "id": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Keyboards.17~ES')",
                    "uri": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Keyboards.17~ES')",
                    "type": "SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType"
                },
                "ProductCategory": "Keyboards",
                "SoldToPartyCountry": "ES",
                "SoldToPartyCountryName": "西班牙",
                "NumberOfSalesOrders": 2
            },
            {
                "__metadata": {
                    "id": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Keyboards.17~DE')",
                    "uri": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Keyboards.17~DE')",
                    "type": "SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType"
                },
                "ProductCategory": "Keyboards",
                "SoldToPartyCountry": "DE",
                "SoldToPartyCountryName": "德国",
                "NumberOfSalesOrders": 3
            },
            {
                "__metadata": {
                    "id": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~PDAs%20%26A%20Organizers.17~CA')",
                    "uri": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~PDAs%20%26A%20Organizers.17~CA')",
                    "type": "SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType"
                },
                "ProductCategory": "PDAs & Organizers",
                "SoldToPartyCountry": "CA",
                "SoldToPartyCountryName": "加拿大",
                "NumberOfSalesOrders": 2
            },
            {
                "__metadata": {
                    "id": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Software.17~ES')",
                    "uri": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Software.17~ES')",
                    "type": "SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType"
                },
                "ProductCategory": "Software",
                "SoldToPartyCountry": "ES",
                "SoldToPartyCountryName": "西班牙",
                "NumberOfSalesOrders": 2
            },
            {
                "__metadata": {
                    "id": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Flat%20Screen%20Monitors.17~IT')",
                    "uri": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Flat%20Screen%20Monitors.17~IT')",
                    "type": "SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType"
                },
                "ProductCategory": "Flat Screen Monitors",
                "SoldToPartyCountry": "IT",
                "SoldToPartyCountryName": "意大利",
                "NumberOfSalesOrders": 1
            },
            {
                "__metadata": {
                    "id": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Graphic%20Cards.17~MX')",
                    "uri": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Graphic%20Cards.17~MX')",
                    "type": "SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType"
                },
                "ProductCategory": "Graphic Cards",
                "SoldToPartyCountry": "MX",
                "SoldToPartyCountryName": "墨西哥",
                "NumberOfSalesOrders": 1
            },
            {
                "__metadata": {
                    "id": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Ink%20Jet%20Printers.17~MX')",
                    "uri": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Ink%20Jet%20Printers.17~MX')",
                    "type": "SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType"
                },
                "ProductCategory": "Ink Jet Printers",
                "SoldToPartyCountry": "MX",
                "SoldToPartyCountryName": "墨西哥",
                "NumberOfSalesOrders": 1
            },
            {
                "__metadata": {
                    "id": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Telecommunications.17~FR')",
                    "uri": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Telecommunications.17~FR')",
                    "type": "SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType"
                },
                "ProductCategory": "Telecommunications",
                "SoldToPartyCountry": "FR",
                "SoldToPartyCountryName": "法国",
                "NumberOfSalesOrders": 1
            },
            {
                "__metadata": {
                    "id": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Multifunction%20Printers.17~ES')",
                    "uri": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Multifunction%20Printers.17~ES')",
                    "type": "SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType"
                },
                "ProductCategory": "Multifunction Printers",
                "SoldToPartyCountry": "ES",
                "SoldToPartyCountryName": "西班牙",
                "NumberOfSalesOrders": 1
            },
            {
                "__metadata": {
                    "id": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~PCs.17~FR')",
                    "uri": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~PCs.17~FR')",
                    "type": "SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType"
                },
                "ProductCategory": "PCs",
                "SoldToPartyCountry": "FR",
                "SoldToPartyCountryName": "法国",
                "NumberOfSalesOrders": 1
            },
            {
                "__metadata": {
                    "id": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Flat%20Screen%20Monitors.17~DE')",
                    "uri": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Flat%20Screen%20Monitors.17~DE')",
                    "type": "SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType"
                },
                "ProductCategory": "Flat Screen Monitors",
                "SoldToPartyCountry": "DE",
                "SoldToPartyCountryName": "德国",
                "NumberOfSalesOrders": 16
            },
            {
                "__metadata": {
                    "id": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Computer%20System%20Accessories.17~US')",
                    "uri": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Computer%20System%20Accessories.17~US')",
                    "type": "SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType"
                },
                "ProductCategory": "Computer System Accessories",
                "SoldToPartyCountry": "US",
                "SoldToPartyCountryName": "美国",
                "NumberOfSalesOrders": 24
            },
            {
                "__metadata": {
                    "id": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~PDAs%20%26A%20Organizers.17~US')",
                    "uri": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~PDAs%20%26A%20Organizers.17~US')",
                    "type": "SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType"
                },
                "ProductCategory": "PDAs & Organizers",
                "SoldToPartyCountry": "US",
                "SoldToPartyCountryName": "美国",
                "NumberOfSalesOrders": 9
            },
            {
                "__metadata": {
                    "id": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Multifunction%20Printers.17~DE')",
                    "uri": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Multifunction%20Printers.17~DE')",
                    "type": "SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType"
                },
                "ProductCategory": "Multifunction Printers",
                "SoldToPartyCountry": "DE",
                "SoldToPartyCountryName": "德国",
                "NumberOfSalesOrders": 10
            },
            {
                "__metadata": {
                    "id": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Ink%20Jet%20Printers.17~JP')",
                    "uri": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Ink%20Jet%20Printers.17~JP')",
                    "type": "SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType"
                },
                "ProductCategory": "Ink Jet Printers",
                "SoldToPartyCountry": "JP",
                "SoldToPartyCountryName": "日本",
                "NumberOfSalesOrders": 9
            },
            {
                "__metadata": {
                    "id": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Scanners.17~US')",
                    "uri": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Scanners.17~US')",
                    "type": "SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType"
                },
                "ProductCategory": "Scanners",
                "SoldToPartyCountry": "US",
                "SoldToPartyCountryName": "美国",
                "NumberOfSalesOrders": 3
            },
            {
                "__metadata": {
                    "id": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~PDAs%20%26A%20Organizers.17~JP')",
                    "uri": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~PDAs%20%26A%20Organizers.17~JP')",
                    "type": "SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType"
                },
                "ProductCategory": "PDAs & Organizers",
                "SoldToPartyCountry": "JP",
                "SoldToPartyCountryName": "日本",
                "NumberOfSalesOrders": 10
            },
            {
                "__metadata": {
                    "id": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Scanners.17~BR')",
                    "uri": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Scanners.17~BR')",
                    "type": "SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType"
                },
                "ProductCategory": "Scanners",
                "SoldToPartyCountry": "BR",
                "SoldToPartyCountryName": "巴西",
                "NumberOfSalesOrders": 1
            },
            {
                "__metadata": {
                    "id": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Flat%20Screen%20Monitors.17~FR')",
                    "uri": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Flat%20Screen%20Monitors.17~FR')",
                    "type": "SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType"
                },
                "ProductCategory": "Flat Screen Monitors",
                "SoldToPartyCountry": "FR",
                "SoldToPartyCountryName": "法国",
                "NumberOfSalesOrders": 6
            },
            {
                "__metadata": {
                    "id": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Software.17~JP')",
                    "uri": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Software.17~JP')",
                    "type": "SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType"
                },
                "ProductCategory": "Software",
                "SoldToPartyCountry": "JP",
                "SoldToPartyCountryName": "日本",
                "NumberOfSalesOrders": 14
            },
            {
                "__metadata": {
                    "id": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Graphic%20Cards.17~AT')",
                    "uri": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Graphic%20Cards.17~AT')",
                    "type": "SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType"
                },
                "ProductCategory": "Graphic Cards",
                "SoldToPartyCountry": "AT",
                "SoldToPartyCountryName": "奥地利",
                "NumberOfSalesOrders": 1
            },
            {
                "__metadata": {
                    "id": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Notebooks.17~CA')",
                    "uri": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Notebooks.17~CA')",
                    "type": "SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType"
                },
                "ProductCategory": "Notebooks",
                "SoldToPartyCountry": "CA",
                "SoldToPartyCountryName": "加拿大",
                "NumberOfSalesOrders": 3
            },
            {
                "__metadata": {
                    "id": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Ink%20Jet%20Printers.17~CA')",
                    "uri": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Ink%20Jet%20Printers.17~CA')",
                    "type": "SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType"
                },
                "ProductCategory": "Ink Jet Printers",
                "SoldToPartyCountry": "CA",
                "SoldToPartyCountryName": "加拿大",
                "NumberOfSalesOrders": 1
            },
            {
                "__metadata": {
                    "id": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Telecommunications.17~IT')",
                    "uri": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Telecommunications.17~IT')",
                    "type": "SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType"
                },
                "ProductCategory": "Telecommunications",
                "SoldToPartyCountry": "IT",
                "SoldToPartyCountryName": "意大利",
                "NumberOfSalesOrders": 1
            },
            {
                "__metadata": {
                    "id": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Laser%20Printers.17~US')",
                    "uri": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Laser%20Printers.17~US')",
                    "type": "SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType"
                },
                "ProductCategory": "Laser Printers",
                "SoldToPartyCountry": "US",
                "SoldToPartyCountryName": "美国",
                "NumberOfSalesOrders": 2
            },
            {
                "__metadata": {
                    "id": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Scanners.17~MX')",
                    "uri": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Scanners.17~MX')",
                    "type": "SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType"
                },
                "ProductCategory": "Scanners",
                "SoldToPartyCountry": "MX",
                "SoldToPartyCountryName": "墨西哥",
                "NumberOfSalesOrders": 1
            },
            {
                "__metadata": {
                    "id": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Computer%20System%20Accessories.17~GB')",
                    "uri": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Computer%20System%20Accessories.17~GB')",
                    "type": "SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType"
                },
                "ProductCategory": "Computer System Accessories",
                "SoldToPartyCountry": "GB",
                "SoldToPartyCountryName": "英国",
                "NumberOfSalesOrders": 2
            },
            {
                "__metadata": {
                    "id": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Mousepads.17~FR')",
                    "uri": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Mousepads.17~FR')",
                    "type": "SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType"
                },
                "ProductCategory": "Mousepads",
                "SoldToPartyCountry": "FR",
                "SoldToPartyCountryName": "法国",
                "NumberOfSalesOrders": 1
            },
            {
                "__metadata": {
                    "id": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Mice.17~ES')",
                    "uri": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Mice.17~ES')",
                    "type": "SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType"
                },
                "ProductCategory": "Mice",
                "SoldToPartyCountry": "ES",
                "SoldToPartyCountryName": "西班牙",
                "NumberOfSalesOrders": 1
            },
            {
                "__metadata": {
                    "id": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Software.17~FR')",
                    "uri": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Software.17~FR')",
                    "type": "SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType"
                },
                "ProductCategory": "Software",
                "SoldToPartyCountry": "FR",
                "SoldToPartyCountryName": "法国",
                "NumberOfSalesOrders": 6
            },
            {
                "__metadata": {
                    "id": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Software.17~IT')",
                    "uri": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Software.17~IT')",
                    "type": "SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType"
                },
                "ProductCategory": "Software",
                "SoldToPartyCountry": "IT",
                "SoldToPartyCountryName": "意大利",
                "NumberOfSalesOrders": 3
            },
            {
                "__metadata": {
                    "id": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Computer%20System%20Accessories.17~IT')",
                    "uri": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Computer%20System%20Accessories.17~IT')",
                    "type": "SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType"
                },
                "ProductCategory": "Computer System Accessories",
                "SoldToPartyCountry": "IT",
                "SoldToPartyCountryName": "意大利",
                "NumberOfSalesOrders": 2
            },
            {
                "__metadata": {
                    "id": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~PCs.17~BR')",
                    "uri": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~PCs.17~BR')",
                    "type": "SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType"
                },
                "ProductCategory": "PCs",
                "SoldToPartyCountry": "BR",
                "SoldToPartyCountryName": "巴西",
                "NumberOfSalesOrders": 1
            },
            {
                "__metadata": {
                    "id": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Mousepads.17~AT')",
                    "uri": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Mousepads.17~AT')",
                    "type": "SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType"
                },
                "ProductCategory": "Mousepads",
                "SoldToPartyCountry": "AT",
                "SoldToPartyCountryName": "奥地利",
                "NumberOfSalesOrders": 1
            },
            {
                "__metadata": {
                    "id": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Multifunction%20Printers.17~GB')",
                    "uri": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Multifunction%20Printers.17~GB')",
                    "type": "SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType"
                },
                "ProductCategory": "Multifunction Printers",
                "SoldToPartyCountry": "GB",
                "SoldToPartyCountryName": "英国",
                "NumberOfSalesOrders": 1
            },
            {
                "__metadata": {
                    "id": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Mousepads.17~AR')",
                    "uri": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Mousepads.17~AR')",
                    "type": "SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType"
                },
                "ProductCategory": "Mousepads",
                "SoldToPartyCountry": "AR",
                "SoldToPartyCountryName": "阿根廷",
                "NumberOfSalesOrders": 1
            }
        ]
    }
});


/***/ }),

/***/ "./src/app/mock/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube/ProductCategoryQuantity.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/mock/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube/ProductCategoryQuantity.ts ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
    "d": {
        "results": [
            {
                "__metadata": {
                    "id": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Mice.23~EA')",
                    "uri": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Mice.23~EA')",
                    "type": "SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType"
                },
                "ProductCategory": "Mice",
                "Quantity": "160"
            },
            {
                "__metadata": {
                    "id": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~PDAs%20%26A%20Organizers.23~EA')",
                    "uri": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~PDAs%20%26A%20Organizers.23~EA')",
                    "type": "SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType"
                },
                "ProductCategory": "PDAs & Organizers",
                "Quantity": "314"
            },
            {
                "__metadata": {
                    "id": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Speakers.23~EA')",
                    "uri": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Speakers.23~EA')",
                    "type": "SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType"
                },
                "ProductCategory": "Speakers",
                "Quantity": "52"
            },
            {
                "__metadata": {
                    "id": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Laser%20Printers.23~EA')",
                    "uri": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Laser%20Printers.23~EA')",
                    "type": "SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType"
                },
                "ProductCategory": "Laser Printers",
                "Quantity": "224"
            },
            {
                "__metadata": {
                    "id": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Graphic%20Cards.23~EA')",
                    "uri": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Graphic%20Cards.23~EA')",
                    "type": "SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType"
                },
                "ProductCategory": "Graphic Cards",
                "Quantity": "244"
            },
            {
                "__metadata": {
                    "id": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~PCs.23~EA')",
                    "uri": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~PCs.23~EA')",
                    "type": "SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType"
                },
                "ProductCategory": "PCs",
                "Quantity": "16"
            },
            {
                "__metadata": {
                    "id": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Scanners.23~EA')",
                    "uri": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Scanners.23~EA')",
                    "type": "SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType"
                },
                "ProductCategory": "Scanners",
                "Quantity": "168"
            },
            {
                "__metadata": {
                    "id": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Computer%20System%20Accessories.23~EA')",
                    "uri": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Computer%20System%20Accessories.23~EA')",
                    "type": "SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType"
                },
                "ProductCategory": "Computer System Accessories",
                "Quantity": "326"
            },
            {
                "__metadata": {
                    "id": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Flat%20Screen%20Monitors.23~EA')",
                    "uri": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Flat%20Screen%20Monitors.23~EA')",
                    "type": "SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType"
                },
                "ProductCategory": "Flat Screen Monitors",
                "Quantity": "586"
            },
            {
                "__metadata": {
                    "id": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Multifunction%20Printers.23~EA')",
                    "uri": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Multifunction%20Printers.23~EA')",
                    "type": "SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType"
                },
                "ProductCategory": "Multifunction Printers",
                "Quantity": "108"
            },
            {
                "__metadata": {
                    "id": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Telecommunications.23~EA')",
                    "uri": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Telecommunications.23~EA')",
                    "type": "SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType"
                },
                "ProductCategory": "Telecommunications",
                "Quantity": "80"
            },
            {
                "__metadata": {
                    "id": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Servers.23~EA')",
                    "uri": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Servers.23~EA')",
                    "type": "SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType"
                },
                "ProductCategory": "Servers",
                "Quantity": "118"
            },
            {
                "__metadata": {
                    "id": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Software.23~EA')",
                    "uri": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Software.23~EA')",
                    "type": "SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType"
                },
                "ProductCategory": "Software",
                "Quantity": "648"
            },
            {
                "__metadata": {
                    "id": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Notebooks.23~EA')",
                    "uri": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Notebooks.23~EA')",
                    "type": "SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType"
                },
                "ProductCategory": "Notebooks",
                "Quantity": "398"
            },
            {
                "__metadata": {
                    "id": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Keyboards.23~EA')",
                    "uri": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Keyboards.23~EA')",
                    "type": "SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType"
                },
                "ProductCategory": "Keyboards",
                "Quantity": "220"
            },
            {
                "__metadata": {
                    "id": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Mousepads.23~EA')",
                    "uri": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Mousepads.23~EA')",
                    "type": "SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType"
                },
                "ProductCategory": "Mousepads",
                "Quantity": "108"
            },
            {
                "__metadata": {
                    "id": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Ink%20Jet%20Printers.23~EA')",
                    "uri": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.11~Ink%20Jet%20Printers.23~EA')",
                    "type": "SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType"
                },
                "ProductCategory": "Ink Jet Printers",
                "Quantity": "120"
            }
        ]
    }
});


/***/ }),

/***/ "./src/app/mock/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube/ProductGrossAmount.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/mock/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube/ProductGrossAmount.ts ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
    "d": {
        "results": [
            {
                "__metadata": {
                    "id": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.9~HT-1107.21~EUR')",
                    "uri": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.9~HT-1107.21~EUR')",
                    "type": "SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType"
                },
                "Product": "HT-1107",
                "ProductName": "智能理财套件",
                "GrossAmount": "3745.36"
            },
            {
                "__metadata": {
                    "id": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.9~HT-1036.21~EUR')",
                    "uri": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.9~HT-1036.21~EUR')",
                    "type": "SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType"
                },
                "Product": "HT-1036",
                "ProductName": "领先版纯平显示器",
                "GrossAmount": "30484.44"
            },
            {
                "__metadata": {
                    "id": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.9~HT-1085.21~EUR')",
                    "uri": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.9~HT-1085.21~EUR')",
                    "type": "SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType"
                },
                "Product": "HT-1085",
                "ProductName": "Copymaster 多功能打印机",
                "GrossAmount": "3831.04"
            },
            {
                "__metadata": {
                    "id": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.9~HT-1090.21~EUR')",
                    "uri": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.9~HT-1090.21~EUR')",
                    "type": "SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType"
                },
                "Product": "HT-1090",
                "ProductName": "环绕式扬声器",
                "GrossAmount": "742.56"
            },
            {
                "__metadata": {
                    "id": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.9~HT-1002.21~EUR')",
                    "uri": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.9~HT-1002.21~EUR')",
                    "type": "SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType"
                },
                "Product": "HT-1002",
                "ProductName": "基础版笔记本电脑 18",
                "GrossAmount": "119253.28"
            },
            {
                "__metadata": {
                    "id": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.9~HT-1114.21~EUR')",
                    "uri": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.9~HT-1114.21~EUR')",
                    "type": "SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType"
                },
                "Product": "HT-1114",
                "ProductName": "专业面料电脑包",
                "GrossAmount": "470.92"
            },
            {
                "__metadata": {
                    "id": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.9~HT-1066.21~EUR')",
                    "uri": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.9~HT-1066.21~EUR')",
                    "type": "SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType"
                },
                "Product": "HT-1066",
                "ProductName": "鼠标垫",
                "GrossAmount": "424.80"
            },
            {
                "__metadata": {
                    "id": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.9~HT-1138.21~EUR')",
                    "uri": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.9~HT-1138.21~EUR')",
                    "type": "SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType"
                },
                "Product": "HT-1138",
                "ProductName": "袖珍鼠标",
                "GrossAmount": "232.96"
            },
            {
                "__metadata": {
                    "id": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.9~HT-1104.21~EUR')",
                    "uri": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.9~HT-1104.21~EUR')",
                    "type": "SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType"
                },
                "Product": "HT-1104",
                "ProductName": "智能游戏套件",
                "GrossAmount": "4823.20"
            },
            {
                "__metadata": {
                    "id": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.9~HT-1111.21~EUR')",
                    "uri": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.9~HT-1111.21~EUR')",
                    "type": "SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType"
                },
                "Product": "HT-1111",
                "ProductName": "笔记本电脑锁",
                "GrossAmount": "459.76"
            },
            {
                "__metadata": {
                    "id": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.9~HT-1031.21~EUR')",
                    "uri": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.9~HT-1031.21~EUR')",
                    "type": "SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType"
                },
                "Product": "HT-1031",
                "ProductName": "人体工学显示器 E-II",
                "GrossAmount": "67830.00"
            },
            {
                "__metadata": {
                    "id": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.9~HT-1001.21~EUR')",
                    "uri": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.9~HT-1001.21~EUR')",
                    "type": "SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType"
                },
                "Product": "HT-1001",
                "ProductName": "基础版笔记本电脑 17",
                "GrossAmount": "115932.18"
            },
            {
                "__metadata": {
                    "id": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.9~HT-1003.21~EUR')",
                    "uri": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.9~HT-1003.21~EUR')",
                    "type": "SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType"
                },
                "Product": "HT-1003",
                "ProductName": "基础版笔记本电脑 19",
                "GrossAmount": "153153.00"
            },
            {
                "__metadata": {
                    "id": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.9~HT-1007.21~EUR')",
                    "uri": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.9~HT-1007.21~EUR')",
                    "type": "SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType"
                },
                "Product": "HT-1007",
                "ProductName": "",
                "GrossAmount": "26496.40"
            },
            {
                "__metadata": {
                    "id": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.9~HT-1120.21~EUR')",
                    "uri": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.9~HT-1120.21~EUR')",
                    "type": "SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType"
                },
                "Product": "HT-1120",
                "ProductName": "英语国际无线蓝牙键盘",
                "GrossAmount": "1104.32"
            },
            {
                "__metadata": {
                    "id": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.9~HT-1210.21~EUR')",
                    "uri": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.9~HT-1210.21~EUR')",
                    "type": "SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType"
                },
                "Product": "HT-1210",
                "ProductName": "增强型工作站计算机",
                "GrossAmount": "45676.96"
            },
            {
                "__metadata": {
                    "id": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.9~HT-1020.21~EUR')",
                    "uri": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.9~HT-1020.21~EUR')",
                    "type": "SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType"
                },
                "Product": "HT-1020",
                "ProductName": "",
                "GrossAmount": "33865.02"
            },
            {
                "__metadata": {
                    "id": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.9~HT-1050.21~EUR')",
                    "uri": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.9~HT-1050.21~EUR')",
                    "type": "SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType"
                },
                "Product": "HT-1050",
                "ProductName": "超清全彩色喷墨打印机",
                "GrossAmount": "232.94"
            },
            {
                "__metadata": {
                    "id": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.9~HT-1056.21~EUR')",
                    "uri": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.9~HT-1056.21~EUR')",
                    "type": "SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType"
                },
                "Product": "HT-1056",
                "ProductName": "多功能彩色打印机",
                "GrossAmount": "6261.36"
            },
            {
                "__metadata": {
                    "id": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.9~HT-1081.21~EUR')",
                    "uri": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.9~HT-1081.21~EUR')",
                    "type": "SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType"
                },
                "Product": "HT-1081",
                "ProductName": "增强型扫描仪",
                "GrossAmount": "1409.86"
            },
            {
                "__metadata": {
                    "id": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.9~HT-1030.21~EUR')",
                    "uri": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.9~HT-1030.21~EUR')",
                    "type": "SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType"
                },
                "Product": "HT-1030",
                "ProductName": "人体工学显示器 E-I",
                "GrossAmount": "28464.80"
            },
            {
                "__metadata": {
                    "id": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.9~HT-1065.21~EUR')",
                    "uri": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.9~HT-1065.21~EUR')",
                    "type": "SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType"
                },
                "Product": "HT-1065",
                "ProductName": "多媒体键盘",
                "GrossAmount": "1587.76"
            },
            {
                "__metadata": {
                    "id": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.9~HT-1092.21~EUR')",
                    "uri": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.9~HT-1092.21~EUR')",
                    "type": "SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType"
                },
                "Product": "HT-1092",
                "ProductName": "增强型扬声器",
                "GrossAmount": "856.80"
            },
            {
                "__metadata": {
                    "id": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.9~HT-1040.21~EUR')",
                    "uri": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.9~HT-1040.21~EUR')",
                    "type": "SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType"
                },
                "Product": "HT-1040",
                "ProductName": "专业版环保型激光打印机",
                "GrossAmount": "79016.00"
            },
            {
                "__metadata": {
                    "id": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.9~HT-1042.21~EUR')",
                    "uri": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.9~HT-1042.21~EUR')",
                    "type": "SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType"
                },
                "Product": "HT-1042",
                "ProductName": "全能型激光打印机",
                "GrossAmount": "30732.94"
            },
            {
                "__metadata": {
                    "id": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.9~HT-1115.21~EUR')",
                    "uri": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.9~HT-1115.21~EUR')",
                    "type": "SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType"
                },
                "Product": "HT-1115",
                "ProductName": "无线 DSL 路由器",
                "GrossAmount": "496.24"
            },
            {
                "__metadata": {
                    "id": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.9~HT-1116.21~EUR')",
                    "uri": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.9~HT-1116.21~EUR')",
                    "type": "SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType"
                },
                "Product": "HT-1116",
                "ProductName": "无线 DSL 路由器/转发器",
                "GrossAmount": "275.28"
            },
            {
                "__metadata": {
                    "id": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.9~HT-1052.21~EUR')",
                    "uri": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.9~HT-1052.21~EUR')",
                    "type": "SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType"
                },
                "Product": "HT-1052",
                "ProductName": "超清超高速喷墨打印机",
                "GrossAmount": "11733.40"
            },
            {
                "__metadata": {
                    "id": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.9~HT-1082.21~EUR')",
                    "uri": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.9~HT-1082.21~EUR')",
                    "type": "SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType"
                },
                "Product": "HT-1082",
                "ProductName": "专业版射流扫描仪",
                "GrossAmount": "4657.22"
            },
            {
                "__metadata": {
                    "id": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.9~HT-1068.21~EUR')",
                    "uri": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.9~HT-1068.21~EUR')",
                    "type": "SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType"
                },
                "Product": "HT-1068",
                "ProductName": "设计师鼠标垫",
                "GrossAmount": "329.00"
            },
            {
                "__metadata": {
                    "id": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.9~HT-1102.21~EUR')",
                    "uri": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.9~HT-1102.21~EUR')",
                    "type": "SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType"
                },
                "Product": "HT-1102",
                "ProductName": "智能网络套件",
                "GrossAmount": "6813.30"
            },
            {
                "__metadata": {
                    "id": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.9~HT-1502.21~EUR')",
                    "uri": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.9~HT-1502.21~EUR')",
                    "type": "SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType"
                },
                "Product": "HT-1502",
                "ProductName": "增强型专业服务器",
                "GrossAmount": "1309000.00"
            },
            {
                "__metadata": {
                    "id": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.9~HT-1106.21~EUR')",
                    "uri": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.9~HT-1106.21~EUR')",
                    "type": "SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType"
                },
                "Product": "HT-1106",
                "ProductName": "智能防火墙套件",
                "GrossAmount": "282.10"
            },
            {
                "__metadata": {
                    "id": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.9~HT-1032.21~EUR')",
                    "uri": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.9~HT-1032.21~EUR')",
                    "type": "SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType"
                },
                "Product": "HT-1032",
                "ProductName": "人体工学显示器 E-III",
                "GrossAmount": "51729.30"
            },
            {
                "__metadata": {
                    "id": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.9~HT-1035.21~EUR')",
                    "uri": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.9~HT-1035.21~EUR')",
                    "type": "SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType"
                },
                "Product": "HT-1035",
                "ProductName": "基础版纯平显示器",
                "GrossAmount": "42429.66"
            },
            {
                "__metadata": {
                    "id": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.9~HT-1062.21~EUR')",
                    "uri": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.9~HT-1062.21~EUR')",
                    "type": "SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType"
                },
                "Product": "HT-1062",
                "ProductName": "跟踪鼠标",
                "GrossAmount": "771.68"
            },
            {
                "__metadata": {
                    "id": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.9~HT-1023.21~EUR')",
                    "uri": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.9~HT-1023.21~EUR')",
                    "type": "SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType"
                },
                "Product": "HT-1023",
                "ProductName": "高端舒适",
                "GrossAmount": "46668.24"
            },
            {
                "__metadata": {
                    "id": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.9~HT-1501.21~EUR')",
                    "uri": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.9~HT-1501.21~EUR')",
                    "type": "SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType"
                },
                "Product": "HT-1501",
                "ProductName": "专业服务器",
                "GrossAmount": "723470.88"
            },
            {
                "__metadata": {
                    "id": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.9~HT-1112.21~EUR')",
                    "uri": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.9~HT-1112.21~EUR')",
                    "type": "SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType"
                },
                "Product": "HT-1112",
                "ProductName": "高清网络摄像头",
                "GrossAmount": "4125.26"
            },
            {
                "__metadata": {
                    "id": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.9~HT-1105.21~EUR')",
                    "uri": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.9~HT-1105.21~EUR')",
                    "type": "SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType"
                },
                "Product": "HT-1105",
                "ProductName": "智能网络杀毒套件",
                "GrossAmount": "3727.08"
            },
            {
                "__metadata": {
                    "id": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.9~HT-1064.21~EUR')",
                    "uri": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.9~HT-1064.21~EUR')",
                    "type": "SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType"
                },
                "Product": "HT-1064",
                "ProductName": "网络键盘",
                "GrossAmount": "621.14"
            },
            {
                "__metadata": {
                    "id": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.9~HT-1070.21~EUR')",
                    "uri": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.9~HT-1070.21~EUR')",
                    "type": "SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType"
                },
                "Product": "HT-1070",
                "ProductName": "",
                "GrossAmount": "5861.46"
            },
            {
                "__metadata": {
                    "id": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.9~HT-1071.21~EUR')",
                    "uri": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.9~HT-1071.21~EUR')",
                    "type": "SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType"
                },
                "Product": "HT-1071",
                "ProductName": "",
                "GrossAmount": "625.18"
            },
            {
                "__metadata": {
                    "id": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.9~HT-1022.21~EUR')",
                    "uri": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.9~HT-1022.21~EUR')",
                    "type": "SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType"
                },
                "Product": "HT-1022",
                "ProductName": "简单舒适",
                "GrossAmount": "79920.46"
            },
            {
                "__metadata": {
                    "id": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.9~HT-1051.21~EUR')",
                    "uri": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.9~HT-1051.21~EUR')",
                    "type": "SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType"
                },
                "Product": "HT-1051",
                "ProductName": "便携式超清喷墨打印机",
                "GrossAmount": "3007.92"
            },
            {
                "__metadata": {
                    "id": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.9~HT-1067.21~EUR')",
                    "uri": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.9~HT-1067.21~EUR')",
                    "type": "SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType"
                },
                "Product": "HT-1067",
                "ProductName": "人体工学鼠标垫",
                "GrossAmount": "428.00"
            },
            {
                "__metadata": {
                    "id": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.9~HT-1091.21~EUR')",
                    "uri": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.9~HT-1091.21~EUR')",
                    "type": "SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType"
                },
                "Product": "HT-1091",
                "ProductName": "终极声霸扬声器",
                "GrossAmount": "618.80"
            },
            {
                "__metadata": {
                    "id": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.9~HT-1041.21~EUR')",
                    "uri": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.9~HT-1041.21~EUR')",
                    "type": "SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType"
                },
                "Product": "HT-1041",
                "ProductName": "基础版激光打印机",
                "GrossAmount": "42965.30"
            },
            {
                "__metadata": {
                    "id": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.9~HT-1117.21~EUR')",
                    "uri": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.9~HT-1117.21~EUR')",
                    "type": "SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType"
                },
                "Product": "HT-1117",
                "ProductName": "无线 DSL 路由器/转发器和打印服务器",
                "GrossAmount": "2627.52"
            },
            {
                "__metadata": {
                    "id": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.9~HT-1073.21~EUR')",
                    "uri": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.9~HT-1073.21~EUR')",
                    "type": "SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType"
                },
                "Product": "HT-1073",
                "ProductName": "",
                "GrossAmount": "8662.54"
            },
            {
                "__metadata": {
                    "id": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.9~HT-1083.21~EUR')",
                    "uri": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.9~HT-1083.21~EUR')",
                    "type": "SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType"
                },
                "Product": "HT-1083",
                "ProductName": "专业版射流扫描仪",
                "GrossAmount": "634.30"
            },
            {
                "__metadata": {
                    "id": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.9~HT-1100.21~EUR')",
                    "uri": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.9~HT-1100.21~EUR')",
                    "type": "SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType"
                },
                "Product": "HT-1100",
                "ProductName": "智能办公套件",
                "GrossAmount": "10470.52"
            },
            {
                "__metadata": {
                    "id": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.9~HT-1101.21~EUR')",
                    "uri": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.9~HT-1101.21~EUR')",
                    "type": "SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType"
                },
                "Product": "HT-1101",
                "ProductName": "智能设计套件",
                "GrossAmount": "5704.80"
            },
            {
                "__metadata": {
                    "id": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.9~HT-1110.21~EUR')",
                    "uri": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.9~HT-1110.21~EUR')",
                    "type": "SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType"
                },
                "Product": "HT-1110",
                "ProductName": "电脑锁",
                "GrossAmount": "698.52"
            },
            {
                "__metadata": {
                    "id": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.9~HT-1113.21~EUR')",
                    "uri": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.9~HT-1113.21~EUR')",
                    "type": "SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType"
                },
                "Product": "HT-1113",
                "ProductName": "屏幕清洁套装",
                "GrossAmount": "169.66"
            },
            {
                "__metadata": {
                    "id": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.9~HT-1061.21~EUR')",
                    "uri": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.9~HT-1061.21~EUR')",
                    "type": "SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType"
                },
                "Product": "HT-1061",
                "ProductName": "极速鼠标",
                "GrossAmount": "483.14"
            },
            {
                "__metadata": {
                    "id": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.9~HT-1137.21~EUR')",
                    "uri": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.9~HT-1137.21~EUR')",
                    "type": "SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType"
                },
                "Product": "HT-1137",
                "ProductName": "特大尺寸纯平显示器",
                "GrossAmount": "1261.48"
            },
            {
                "__metadata": {
                    "id": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.9~HT-1011.21~EUR')",
                    "uri": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.9~HT-1011.21~EUR')",
                    "type": "SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType"
                },
                "Product": "HT-1011",
                "ProductName": "专业版笔记本电脑 17",
                "GrossAmount": "95763.42"
            },
            {
                "__metadata": {
                    "id": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.9~HT-1021.21~EUR')",
                    "uri": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.9~HT-1021.21~EUR')",
                    "type": "SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType"
                },
                "Product": "HT-1021",
                "ProductName": "",
                "GrossAmount": "1390.56"
            },
            {
                "__metadata": {
                    "id": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.9~HT-1055.21~EUR')",
                    "uri": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.9~HT-1055.21~EUR')",
                    "type": "SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType"
                },
                "Product": "HT-1055",
                "ProductName": "多功能打印机",
                "GrossAmount": "5183.64"
            },
            {
                "__metadata": {
                    "id": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.9~HT-1080.21~EUR')",
                    "uri": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.9~HT-1080.21~EUR')",
                    "type": "SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType"
                },
                "Product": "HT-1080",
                "ProductName": "照片扫描仪",
                "GrossAmount": "250.32"
            },
            {
                "__metadata": {
                    "id": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.9~HT-1069.21~EUR')",
                    "uri": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.9~HT-1069.21~EUR')",
                    "type": "SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType"
                },
                "Product": "HT-1069",
                "ProductName": "通用读卡器",
                "GrossAmount": "767.30"
            },
            {
                "__metadata": {
                    "id": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.9~HT-1103.21~EUR')",
                    "uri": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.9~HT-1103.21~EUR')",
                    "type": "SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType"
                },
                "Product": "HT-1103",
                "ProductName": "智能多媒体套件",
                "GrossAmount": "6047.58"
            },
            {
                "__metadata": {
                    "id": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.9~HT-1500.21~EUR')",
                    "uri": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.9~HT-1500.21~EUR')",
                    "type": "SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType"
                },
                "Product": "HT-1500",
                "ProductName": "基础服务器",
                "GrossAmount": "178500.00"
            },
            {
                "__metadata": {
                    "id": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.9~HT-1037.21~EUR')",
                    "uri": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.9~HT-1037.21~EUR')",
                    "type": "SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType"
                },
                "Product": "HT-1037",
                "ProductName": "超大尺寸纯平显示器",
                "GrossAmount": "6696.62"
            },
            {
                "__metadata": {
                    "id": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.9~HT-1000.21~EUR')",
                    "uri": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.9~HT-1000.21~EUR')",
                    "type": "SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType"
                },
                "Product": "HT-1000",
                "ProductName": "基础版笔记本电脑 15",
                "GrossAmount": "100112.32"
            },
            {
                "__metadata": {
                    "id": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.9~HT-1060.21~EUR')",
                    "uri": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.9~HT-1060.21~EUR')",
                    "type": "SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType"
                },
                "Product": "HT-1060",
                "ProductName": "无线鼠标",
                "GrossAmount": "406.98"
            },
            {
                "__metadata": {
                    "id": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.9~HT-1063.21~EUR')",
                    "uri": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.9~HT-1063.21~EUR')",
                    "type": "SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType"
                },
                "Product": "HT-1063",
                "ProductName": "人体工学键盘",
                "GrossAmount": "576.46"
            },
            {
                "__metadata": {
                    "id": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.9~HT-1010.21~EUR')",
                    "uri": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.9~HT-1010.21~EUR')",
                    "type": "SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType"
                },
                "Product": "HT-1010",
                "ProductName": "专业版笔记本电脑 15",
                "GrossAmount": "133213.36"
            },
            {
                "__metadata": {
                    "id": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.9~HT-1072.21~EUR')",
                    "uri": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.9~HT-1072.21~EUR')",
                    "type": "SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType"
                },
                "Product": "HT-1072",
                "ProductName": "",
                "GrossAmount": "10249.08"
            },
            {
                "__metadata": {
                    "id": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.9~HT-1118.21~EUR')",
                    "uri": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.9~HT-1118.21~EUR')",
                    "type": "SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType"
                },
                "Product": "HT-1118",
                "ProductName": "",
                "GrossAmount": "1227.60"
            }
        ]
    }
});


/***/ }),

/***/ "./src/app/mock/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube/SalesOrderOverallStatus.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/mock/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube/SalesOrderOverallStatus.ts ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
    "d": {
        "results": [
            {
                "__metadata": {
                    "id": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.13~D')",
                    "uri": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.13~D')",
                    "type": "SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType"
                },
                "SalesOrderOverallStatus": "D",
                "SalesOrderOverallStatusT": "Delivered",
                "NumberOfSalesOrders": 33
            },
            {
                "__metadata": {
                    "id": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.13~N')",
                    "uri": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.13~N')",
                    "type": "SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType"
                },
                "SalesOrderOverallStatus": "N",
                "SalesOrderOverallStatusT": "New",
                "NumberOfSalesOrders": 254
            },
            {
                "__metadata": {
                    "id": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.13~P')",
                    "uri": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube('.13~P')",
                    "type": "SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType"
                },
                "SalesOrderOverallStatus": "P",
                "SalesOrderOverallStatusT": "Paid",
                "NumberOfSalesOrders": 33
            }
        ]
    }
});


/***/ }),

/***/ "./src/app/mock/SEPMRA_SO_ANA/SEPMRA_C_ALP_TotalSalesKPI/KPIRevenue.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/mock/SEPMRA_SO_ANA/SEPMRA_C_ALP_TotalSalesKPI/KPIRevenue.ts ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
    "d": {
        "results": [
            {
                "__metadata": {
                    "id": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_TotalSalesKPI('.4~EUR')",
                    "uri": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_TotalSalesKPI('.4~EUR')",
                    "type": "SEPMRA_SO_ANA.SEPMRA_C_ALP_TotalSalesKPIType"
                },
                "KPIRevenue": "2751185.88",
                "Currency": "EUR",
                "CurrencyT": "欧元"
            }
        ]
    }
});


/***/ }),

/***/ "./src/app/mock/SEPMRA_SO_ANA/SEPMRA_C_ALP_TotalSalesKPI/QuarterKPIRevenue.ts":
/*!************************************************************************************!*\
  !*** ./src/app/mock/SEPMRA_SO_ANA/SEPMRA_C_ALP_TotalSalesKPI/QuarterKPIRevenue.ts ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
    "d": {
        "results": [
            {
                "__metadata": {
                    "id": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_TotalSalesKPI('.2~4.4~EUR')",
                    "uri": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_TotalSalesKPI('.2~4.4~EUR')",
                    "type": "SEPMRA_SO_ANA.SEPMRA_C_ALP_TotalSalesKPIType"
                },
                "DeliveryCalendarQuarter": "4",
                "DeliveryCalendarQuarterT": "Q4",
                "KPIRevenue": "63895.97"
            },
            {
                "__metadata": {
                    "id": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_TotalSalesKPI('.2~1.4~EUR')",
                    "uri": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_TotalSalesKPI('.2~1.4~EUR')",
                    "type": "SEPMRA_SO_ANA.SEPMRA_C_ALP_TotalSalesKPIType"
                },
                "DeliveryCalendarQuarter": "1",
                "DeliveryCalendarQuarterT": "Q1",
                "KPIRevenue": "165895.97"
            },
            {
                "__metadata": {
                    "id": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_TotalSalesKPI('.2~2.4~EUR')",
                    "uri": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_TotalSalesKPI('.2~2.4~EUR')",
                    "type": "SEPMRA_SO_ANA.SEPMRA_C_ALP_TotalSalesKPIType"
                },
                "DeliveryCalendarQuarter": "2",
                "DeliveryCalendarQuarterT": "Q2",
                "KPIRevenue": "104895.97"
            },
            {
                "__metadata": {
                    "id": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_TotalSalesKPI('.2~2.4~EUR')",
                    "uri": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_TotalSalesKPI('.2~2.4~EUR')",
                    "type": "SEPMRA_SO_ANA.SEPMRA_C_ALP_TotalSalesKPIType"
                },
                "DeliveryCalendarQuarter": "3",
                "DeliveryCalendarQuarterT": "Q3",
                "KPIRevenue": "304895.97"
            },
            {
                "__metadata": {
                    "id": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_TotalSalesKPI('.2~2.4~EUR')",
                    "uri": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_TotalSalesKPI('.2~2.4~EUR')",
                    "type": "SEPMRA_SO_ANA.SEPMRA_C_ALP_TotalSalesKPIType"
                },
                "DeliveryCalendarQuarter": "4",
                "DeliveryCalendarQuarterT": "Q4",
                "KPIRevenue": "254895.97"
            },
            {
                "__metadata": {
                    "id": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_TotalSalesKPI('.2~2.4~EUR')",
                    "uri": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_TotalSalesKPI('.2~2.4~EUR')",
                    "type": "SEPMRA_SO_ANA.SEPMRA_C_ALP_TotalSalesKPIType"
                },
                "DeliveryCalendarQuarter": "4",
                "DeliveryCalendarQuarterT": "Q4",
                "KPIRevenue": "364895.97"
            },
            {
                "__metadata": {
                    "id": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_TotalSalesKPI('.2~2.4~EUR')",
                    "uri": "http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_TotalSalesKPI('.2~2.4~EUR')",
                    "type": "SEPMRA_SO_ANA.SEPMRA_C_ALP_TotalSalesKPIType"
                },
                "DeliveryCalendarQuarter": "4",
                "DeliveryCalendarQuarterT": "Q4",
                "KPIRevenue": "354895.97"
            }
        ]
    }
});


/***/ }),

/***/ "./src/app/mock/SEPMRA_SO_ANA/metadata.ts":
/*!************************************************!*\
  !*** ./src/app/mock/SEPMRA_SO_ANA/metadata.ts ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<?xml version=\"1.0\" encoding=\"utf-8\"?>\n<edmx:Edmx Version=\"1.0\" xmlns:edmx=\"http://schemas.microsoft.com/ado/2007/06/edmx\" xmlns:m=\"http://schemas.microsoft.com/ado/2007/08/dataservices/metadata\" xmlns:sap=\"http://www.sap.com/Protocols/SAPData\">\n    <edmx:Reference Uri=\"http://mifod.mioffice.cn:8000/sap/opu/odata/IWFND/CATALOGSERVICE;v=2/Vocabularies(TechnicalName='%2FIWBEP%2FVOC_COMMON',Version='0001',SAP__Origin='LOCAL')/$value\" xmlns:edmx=\"http://docs.oasis-open.org/odata/ns/edmx\">\n        <edmx:Include Namespace=\"com.sap.vocabularies.Common.v1\" Alias=\"Common\"/>\n    </edmx:Reference>\n    <edmx:DataServices m:DataServiceVersion=\"2.0\">\n        <Schema Namespace=\"SEPMRA_SO_ANA\" xml:lang=\"zh\" sap:schema-version=\"1\" xmlns=\"http://schemas.microsoft.com/ado/2008/09/edm\">\n            <EntityType Name=\"SEPMRA_C_ALP_CalendarMonthVHType\" sap:label=\"Calendar Month\" sap:content-version=\"1\">\n                <Key>\n                    <PropertyRef Name=\"CalendarMonth\"/>\n                </Key>\n                <Property Name=\"CalendarMonth\" Type=\"Edm.String\" Nullable=\"false\" MaxLength=\"2\" sap:display-format=\"NonNegative\" sap:text=\"CalendarMonthT\" sap:label=\"\u6708\" sap:quickinfo=\"\u6708\u4EFD\u6570\"/>\n                <Property Name=\"CalendarQuarter\" Type=\"Edm.String\" MaxLength=\"1\" sap:display-format=\"NonNegative\" sap:label=\"Quarter\" sap:quickinfo=\"Fiori Reference Apps: Calendar Quarter\"/>\n                <Property Name=\"CalendarMonthT\" Type=\"Edm.String\" MaxLength=\"10\" sap:attribute-for=\"CalendarMonth\" sap:label=\"Month Name\"/>\n                <NavigationProperty Name=\"to_CalendarQuarterValueHelp\" Relationship=\"SEPMRA_SO_ANA.assoc_6A305E0CADE2F498031EE29B6954C326\" FromRole=\"FromRole_assoc_6A305E0CADE2F498031EE29B6954C326\" ToRole=\"ToRole_assoc_6A305E0CADE2F498031EE29B6954C326\"/>\n            </EntityType>\n            <EntityType Name=\"SEPMRA_C_ALP_CalendarQuarterVHType\" sap:label=\"Calendar Quarter\" sap:content-version=\"1\">\n                <Key>\n                    <PropertyRef Name=\"CalendarQuarter\"/>\n                </Key>\n                <Property Name=\"CalendarQuarter\" Type=\"Edm.String\" Nullable=\"false\" MaxLength=\"1\" sap:display-format=\"NonNegative\" sap:text=\"CalendarQuarterT\" sap:label=\"Quarter\" sap:quickinfo=\"Fiori Reference Apps: Calendar Quarter\"/>\n                <Property Name=\"CalendarQuarterT\" Type=\"Edm.String\" MaxLength=\"60\" sap:attribute-for=\"CalendarQuarter\" sap:display-format=\"UpperCase\" sap:label=\"Quarter Text\"/>\n            </EntityType>\n            <EntityType Name=\"SEPMRA_C_ALP_CountryVHType\" sap:label=\"Country\" sap:content-version=\"1\">\n                <Key>\n                    <PropertyRef Name=\"Country\"/>\n                </Key>\n                <Property Name=\"Country\" Type=\"Edm.String\" Nullable=\"false\" MaxLength=\"3\" sap:display-format=\"UpperCase\" sap:text=\"CountryT\" sap:label=\"\u56FD\u5BB6/\u5730\u533A\u4EE3\u7801\"/>\n                <Property Name=\"CountryT\" Type=\"Edm.String\" MaxLength=\"50\" sap:attribute-for=\"Country\" sap:label=\"Name\"/>\n            </EntityType>\n            <EntityType Name=\"SEPMRA_C_ALP_CustomerType\" sap:label=\"Customer\" sap:content-version=\"1\">\n                <Key>\n                    <PropertyRef Name=\"Customer\"/>\n                </Key>\n                <Property Name=\"Customer\" Type=\"Edm.String\" Nullable=\"false\" MaxLength=\"10\" sap:display-format=\"UpperCase\" sap:text=\"CompanyName\" sap:label=\"Customer\" sap:quickinfo=\"EPM: Customer ID\"/>\n                <Property Name=\"CompanyName\" Type=\"Edm.String\" MaxLength=\"80\" sap:label=\"Company\" sap:quickinfo=\"EPM: Company Name\"/>\n                <Property Name=\"EmailAddress\" Type=\"Edm.String\" MaxLength=\"255\" sap:label=\"Email\" sap:quickinfo=\"EPM: E-Mail Address\"/>\n                <Property Name=\"FaxNumber\" Type=\"Edm.String\" MaxLength=\"30\" sap:display-format=\"UpperCase\" sap:label=\"Fax\" sap:quickinfo=\"EPM: Fax Number\"/>\n                <Property Name=\"PhoneNumber\" Type=\"Edm.String\" MaxLength=\"30\" sap:display-format=\"UpperCase\" sap:label=\"Phone\" sap:quickinfo=\"EPM: Phone Number\"/>\n                <Property Name=\"URL\" Type=\"Edm.String\" sap:label=\"Web Site\" sap:quickinfo=\"EPM: Web Address\"/>\n                <Property Name=\"Address\" Type=\"Edm.String\" MaxLength=\"176\" sap:display-format=\"UpperCase\" sap:label=\"Address\" sap:quickinfo=\"Full Address\"/>\n            </EntityType>\n            <EntityType Name=\"SEPMRA_C_ALP_CustomerVHType\" sap:label=\"Customer\" sap:content-version=\"1\">\n                <Key>\n                    <PropertyRef Name=\"Customer\"/>\n                </Key>\n                <Property Name=\"Customer\" Type=\"Edm.String\" Nullable=\"false\" MaxLength=\"10\" sap:display-format=\"UpperCase\" sap:text=\"CompanyName\" sap:label=\"Business Partner ID\" sap:quickinfo=\"EPM: Business Partner ID\" sap:creatable=\"false\" sap:updatable=\"false\"/>\n                <Property Name=\"CompanyName\" Type=\"Edm.String\" MaxLength=\"80\" sap:label=\"Company\" sap:quickinfo=\"EPM: Company Name\"/>\n                <Property Name=\"Country\" Type=\"Edm.String\" MaxLength=\"3\" sap:display-format=\"UpperCase\" sap:label=\"Country\" sap:quickinfo=\"EPM: Country Code\" sap:value-list=\"standard\"/>\n                <NavigationProperty Name=\"to_CountryVH\" Relationship=\"SEPMRA_SO_ANA.assoc_0E573EE23C96A3093FAC7C0B5CCBE09B\" FromRole=\"FromRole_assoc_0E573EE23C96A3093FAC7C0B5CCBE09B\" ToRole=\"ToRole_assoc_0E573EE23C96A3093FAC7C0B5CCBE09B\"/>\n            </EntityType>\n            <EntityType Name=\"SEPMRA_C_ALP_ProductType\" sap:label=\"Product\" sap:content-version=\"1\">\n                <Key>\n                    <PropertyRef Name=\"Product\"/>\n                </Key>\n                <Property Name=\"Product\" Type=\"Edm.String\" Nullable=\"false\" MaxLength=\"10\" sap:display-format=\"UpperCase\" sap:text=\"ProductName\" sap:label=\"Product\" sap:quickinfo=\"Product ID\"/>\n                <Property Name=\"ProductName\" Type=\"Edm.String\" MaxLength=\"255\" sap:attribute-for=\"Product\" sap:label=\"Name\" sap:quickinfo=\"Product Name\"/>\n                <Property Name=\"ProductDescription\" Type=\"Edm.String\" MaxLength=\"255\" sap:attribute-for=\"Product\" sap:label=\"Description\" sap:quickinfo=\"Product Description\"/>\n                <Property Name=\"Price\" Type=\"Edm.Decimal\" Precision=\"16\" Scale=\"3\" sap:unit=\"Currency\" sap:label=\"Price per Unit\" sap:quickinfo=\"Fiori Reference Apps: Product Unit Price\"/>\n                <Property Name=\"Currency\" Type=\"Edm.String\" MaxLength=\"5\" sap:text=\"Currency_T\" sap:label=\"Currency\" sap:semantics=\"currency-code\"/>\n                <Property Name=\"Currency_T\" Type=\"Edm.String\" MaxLength=\"40\" sap:attribute-for=\"Currency\" sap:label=\"\u957F\u6587\u672C\"/>\n                <Property Name=\"AverageRatingValue\" Type=\"Edm.Decimal\" Precision=\"4\" Scale=\"2\" sap:label=\"Average Rating\" sap:quickinfo=\"EPM: Review Rating Average\"/>\n                <Property Name=\"Depth\" Type=\"Edm.Decimal\" Precision=\"13\" Scale=\"3\" sap:unit=\"DimensionUnit\" sap:label=\"Depth\" sap:quickinfo=\"EPM: Depth\"/>\n                <Property Name=\"Width\" Type=\"Edm.Decimal\" Precision=\"13\" Scale=\"3\" sap:unit=\"DimensionUnit\" sap:label=\"Width\" sap:quickinfo=\"EPM: Width\"/>\n                <Property Name=\"Height\" Type=\"Edm.Decimal\" Precision=\"13\" Scale=\"3\" sap:unit=\"DimensionUnit\" sap:label=\"Height\" sap:quickinfo=\"EPM: Height\"/>\n                <Property Name=\"DimensionUnit\" Type=\"Edm.String\" MaxLength=\"3\" sap:text=\"DimensionUnit_T\" sap:label=\"Dimension Unit\" sap:quickinfo=\"EPM: Dimension Unit\" sap:semantics=\"unit-of-measure\"/>\n                <Property Name=\"DimensionUnit_T\" Type=\"Edm.String\" MaxLength=\"10\" sap:attribute-for=\"DimensionUnit\" sap:label=\"\u5EA6\u91CF\u5355\u4F4D\u6587\u672C\" sap:quickinfo=\"\u5EA6\u91CF\u5355\u4F4D\u6587\u672C(\u6700\u591A10\u4E2A\u5B57\u7B26)\"/>\n                <Property Name=\"ProductCategory\" Type=\"Edm.String\" MaxLength=\"40\" sap:label=\"Sub-Category\" sap:quickinfo=\"Product Sub-Category\"/>\n                <Property Name=\"MainProductCategory\" Type=\"Edm.String\" MaxLength=\"40\" sap:label=\"Category\" sap:quickinfo=\"Product Category\"/>\n                <Property Name=\"ProductValueAddedTax\" Type=\"Edm.Byte\" sap:text=\"ProductValueAddedTax_T\" sap:label=\"Tax Tariff Code\" sap:quickinfo=\"EPM: Product Tax Tariff Code\"/>\n                <Property Name=\"ProductValueAddedTax_T\" Type=\"Edm.String\" MaxLength=\"60\" sap:attribute-for=\"ProductValueAddedTax\" sap:label=\"\u7B80\u77ED\u63CF\u8FF0\" sap:quickinfo=\"\u56FA\u5B9A\u503C\u7684\u77ED\u6587\u672C\"/>\n                <Property Name=\"ProductPictureURL\" Type=\"Edm.String\" MaxLength=\"255\" sap:display-format=\"UpperCase\" sap:label=\"Image\" sap:quickinfo=\"Image of the product\"/>\n                <Property Name=\"Supplier\" Type=\"Edm.String\" MaxLength=\"10\" sap:display-format=\"UpperCase\" sap:label=\"Supplier\" sap:quickinfo=\"Supplier ID\"/>\n                <Property Name=\"Weight\" Type=\"Edm.Decimal\" Precision=\"13\" Scale=\"3\" sap:unit=\"WeightUnit\" sap:label=\"Weight\" sap:quickinfo=\"EPM: Weight Measure\"/>\n                <Property Name=\"WeightUnit\" Type=\"Edm.String\" MaxLength=\"3\" sap:text=\"WeightUnit_T\" sap:label=\"Weight Unit\" sap:semantics=\"unit-of-measure\"/>\n                <Property Name=\"WeightUnit_T\" Type=\"Edm.String\" MaxLength=\"10\" sap:attribute-for=\"WeightUnit\" sap:label=\"\u5EA6\u91CF\u5355\u4F4D\u6587\u672C\" sap:quickinfo=\"\u5EA6\u91CF\u5355\u4F4D\u6587\u672C(\u6700\u591A10\u4E2A\u5B57\u7B26)\"/>\n            </EntityType>\n            <EntityType Name=\"SEPMRA_C_ALP_ProductCatVHType\" sap:label=\"Product Sub-Category\" sap:content-version=\"1\">\n                <Key>\n                    <PropertyRef Name=\"ProductCategory\"/>\n                </Key>\n                <Property Name=\"ProductCategory\" Type=\"Edm.String\" Nullable=\"false\" MaxLength=\"40\" sap:label=\"Sub-Category\" sap:quickinfo=\"Product Sub-Category\"/>\n                <Property Name=\"MainProductCategory\" Type=\"Edm.String\" MaxLength=\"40\" sap:label=\"Category\" sap:quickinfo=\"Product Category\" sap:value-list=\"fixed-values\"/>\n                <NavigationProperty Name=\"to_MainProductCategoryVH\" Relationship=\"SEPMRA_SO_ANA.assoc_49DF252B14DB4991642B42F92648C080\" FromRole=\"FromRole_assoc_49DF252B14DB4991642B42F92648C080\" ToRole=\"ToRole_assoc_49DF252B14DB4991642B42F92648C080\"/>\n            </EntityType>\n            <EntityType Name=\"SEPMRA_C_ALP_ProductMainCatVHType\" sap:label=\"Product Category\" sap:content-version=\"1\">\n                <Key>\n                    <PropertyRef Name=\"MainProductCategory\"/>\n                </Key>\n                <Property Name=\"MainProductCategory\" Type=\"Edm.String\" Nullable=\"false\" MaxLength=\"40\" sap:label=\"Category\" sap:quickinfo=\"Product Category\"/>\n            </EntityType>\n            <EntityType Name=\"SEPMRA_C_ALP_ProductVHType\" sap:label=\"Product\" sap:content-version=\"1\">\n                <Key>\n                    <PropertyRef Name=\"Product\"/>\n                </Key>\n                <Property Name=\"Product\" Type=\"Edm.String\" Nullable=\"false\" MaxLength=\"10\" sap:display-format=\"UpperCase\" sap:text=\"ProductName\" sap:label=\"Product\" sap:quickinfo=\"Product ID\"/>\n                <Property Name=\"ProductName\" Type=\"Edm.String\" MaxLength=\"255\" sap:attribute-for=\"Product\" sap:label=\"Name\" sap:quickinfo=\"Product Name\"/>\n                <Property Name=\"ProductDescription\" Type=\"Edm.String\" MaxLength=\"255\" sap:attribute-for=\"Product\" sap:label=\"Description\" sap:quickinfo=\"Product Description\"/>\n                <Property Name=\"ProductCategory\" Type=\"Edm.String\" MaxLength=\"40\" sap:label=\"Sub-Category\" sap:quickinfo=\"Product Sub-Category\" sap:value-list=\"standard\"/>\n                <Property Name=\"MainProductCategory\" Type=\"Edm.String\" MaxLength=\"40\" sap:label=\"Category\" sap:quickinfo=\"Product Category\" sap:value-list=\"fixed-values\"/>\n                <NavigationProperty Name=\"to_MainProductCategoryVH\" Relationship=\"SEPMRA_SO_ANA.assoc_DB43C90AEF2C3FCFA3EA21DDF85E5E81\" FromRole=\"FromRole_assoc_DB43C90AEF2C3FCFA3EA21DDF85E5E81\" ToRole=\"ToRole_assoc_DB43C90AEF2C3FCFA3EA21DDF85E5E81\"/>\n                <NavigationProperty Name=\"to_ProductCategoryVH\" Relationship=\"SEPMRA_SO_ANA.assoc_630AE5653296F05CFE57BEBF29F4A237\" FromRole=\"FromRole_assoc_630AE5653296F05CFE57BEBF29F4A237\" ToRole=\"ToRole_assoc_630AE5653296F05CFE57BEBF29F4A237\"/>\n            </EntityType>\n            <EntityType Name=\"SEPMRA_C_ALP_QuantityUnitVHType\" sap:label=\"Quantity Unit\" sap:content-version=\"1\">\n                <Key>\n                    <PropertyRef Name=\"UnitOfMeasure\"/>\n                </Key>\n                <Property Name=\"UnitOfMeasure\" Type=\"Edm.String\" Nullable=\"false\" MaxLength=\"3\" sap:text=\"UnitOfMeasureT\" sap:label=\"Quantity Unit\" sap:semantics=\"unit-of-measure\"/>\n                <Property Name=\"UnitOfMeasureT\" Type=\"Edm.String\" MaxLength=\"6\" sap:attribute-for=\"UnitOfMeasure\" sap:label=\"Name\"/>\n            </EntityType>\n            <EntityType Name=\"SEPMRA_C_ALP_SalesOrderType\" sap:label=\"Sales Order\" sap:content-version=\"1\">\n                <Key>\n                    <PropertyRef Name=\"SalesOrder\"/>\n                </Key>\n                <Property Name=\"SalesOrder\" Type=\"Edm.String\" Nullable=\"false\" MaxLength=\"10\" sap:display-format=\"UpperCase\" sap:label=\"Sales Order ID\" sap:quickinfo=\"EPM: Sales Order Number\" sap:creatable=\"false\" sap:updatable=\"false\"/>\n                <Property Name=\"Customer\" Type=\"Edm.String\" MaxLength=\"10\" sap:display-format=\"UpperCase\" sap:text=\"to_Customer/CompanyName\" sap:label=\"Customer\" sap:quickinfo=\"EPM: Customer ID\" sap:value-list=\"standard\"/>\n                <Property Name=\"NetAmountInTransactionCurrency\" Type=\"Edm.Decimal\" Precision=\"16\" Scale=\"3\" sap:unit=\"TransactionCurrency\" sap:label=\"Net Amount\" sap:quickinfo=\"EPM: Total Net Amount\"/>\n                <Property Name=\"TransactionCurrency\" Type=\"Edm.String\" MaxLength=\"5\" sap:text=\"TransactionCurrency_T\" sap:label=\"Currency Code\" sap:quickinfo=\"EPM: Currency Code\" sap:semantics=\"currency-code\"/>\n                <Property Name=\"TransactionCurrency_T\" Type=\"Edm.String\" MaxLength=\"15\" sap:attribute-for=\"TransactionCurrency\" sap:label=\"\u77ED\u6587\u672C\"/>\n                <Property Name=\"SalesOrderOverallStatus\" Type=\"Edm.String\" MaxLength=\"1\" sap:display-format=\"UpperCase\" sap:text=\"SalesOrderOverallStatus_T\" sap:label=\"Overall Status\" sap:quickinfo=\"EPM: Sales Order Overall Status\"/>\n                <Property Name=\"SalesOrderOverallStatus_T\" Type=\"Edm.String\" MaxLength=\"60\" sap:attribute-for=\"SalesOrderOverallStatus\" sap:label=\"\u7B80\u77ED\u63CF\u8FF0\" sap:quickinfo=\"\u56FA\u5B9A\u503C\u7684\u77ED\u6587\u672C\"/>\n                <Property Name=\"CreationDateTime\" Type=\"Edm.DateTimeOffset\" Precision=\"7\" sap:label=\"Created At\" sap:quickinfo=\"EPM: Created At\" sap:creatable=\"false\" sap:updatable=\"false\"/>\n                <Property Name=\"CreatedByUser\" Type=\"Edm.String\" MaxLength=\"12\" sap:display-format=\"UpperCase\" sap:label=\"Created By\" sap:quickinfo=\"EPM: Created By User\" sap:value-list=\"standard\"/>\n                <Property Name=\"LastChangedDateTime\" Type=\"Edm.DateTimeOffset\" Precision=\"7\" sap:label=\"Changed At\" sap:quickinfo=\"EPM: Changed At\" sap:creatable=\"false\" sap:updatable=\"false\"/>\n                <Property Name=\"LastChangedByUser\" Type=\"Edm.String\" MaxLength=\"12\" sap:display-format=\"UpperCase\" sap:label=\"Last Changed By\" sap:quickinfo=\"EPM: Last Changed By User\" sap:value-list=\"standard\"/>\n                <NavigationProperty Name=\"to_CreatedByUser\" Relationship=\"SEPMRA_SO_ANA.assoc_2147FD6D4D5D8F564F40B05369AD26BC\" FromRole=\"FromRole_assoc_2147FD6D4D5D8F564F40B05369AD26BC\" ToRole=\"ToRole_assoc_2147FD6D4D5D8F564F40B05369AD26BC\"/>\n                <NavigationProperty Name=\"to_Customer\" Relationship=\"SEPMRA_SO_ANA.assoc_99F50847A843041C6EACDE98C9A6690C\" FromRole=\"FromRole_assoc_99F50847A843041C6EACDE98C9A6690C\" ToRole=\"ToRole_assoc_99F50847A843041C6EACDE98C9A6690C\"/>\n                <NavigationProperty Name=\"to_Items\" Relationship=\"SEPMRA_SO_ANA.assoc_4B7F44C128E6D1B4FBEB759C293CF5D5\" FromRole=\"FromRole_assoc_4B7F44C128E6D1B4FBEB759C293CF5D5\" ToRole=\"ToRole_assoc_4B7F44C128E6D1B4FBEB759C293CF5D5\"/>\n                <NavigationProperty Name=\"to_LastChangedByUser\" Relationship=\"SEPMRA_SO_ANA.assoc_D6B8C833B81F95BE4482A9709964DFEF\" FromRole=\"FromRole_assoc_D6B8C833B81F95BE4482A9709964DFEF\" ToRole=\"ToRole_assoc_D6B8C833B81F95BE4482A9709964DFEF\"/>\n            </EntityType>\n            <EntityType Name=\"SEPMRA_C_ALP_SalesOrderItemType\" sap:label=\"Sales Order Item\" sap:content-version=\"1\">\n                <Key>\n                    <PropertyRef Name=\"SalesOrder\"/>\n                    <PropertyRef Name=\"SalesOrderItem\"/>\n                </Key>\n                <Property Name=\"SalesOrder\" Type=\"Edm.String\" Nullable=\"false\" MaxLength=\"10\" sap:display-format=\"UpperCase\" sap:label=\"Sales Order ID\" sap:quickinfo=\"EPM: Sales Order Number\" sap:creatable=\"false\" sap:updatable=\"false\" sap:value-list=\"standard\"/>\n                <Property Name=\"SalesOrderItem\" Type=\"Edm.String\" Nullable=\"false\" MaxLength=\"10\" sap:display-format=\"UpperCase\" sap:label=\"Item Position\" sap:quickinfo=\"EPM: Sales Order Item Position\"/>\n                <Property Name=\"Product\" Type=\"Edm.String\" MaxLength=\"10\" sap:display-format=\"UpperCase\" sap:text=\"to_Product/ProductName\" sap:label=\"Product ID\" sap:quickinfo=\"EPM: Product ID\" sap:value-list=\"standard\"/>\n                <Property Name=\"Quantity\" Type=\"Edm.Decimal\" Precision=\"13\" Scale=\"3\" sap:unit=\"QuantityUnit\" sap:label=\"Quantity\" sap:quickinfo=\"EPM: Quantity\"/>\n                <Property Name=\"QuantityUnit\" Type=\"Edm.String\" MaxLength=\"3\" sap:text=\"QuantityUnit_T\" sap:label=\"Unit of Measure\" sap:quickinfo=\"EPM: Quantity Unit\" sap:semantics=\"unit-of-measure\"/>\n                <Property Name=\"QuantityUnit_T\" Type=\"Edm.String\" MaxLength=\"10\" sap:attribute-for=\"QuantityUnit\" sap:label=\"\u5EA6\u91CF\u5355\u4F4D\u6587\u672C\" sap:quickinfo=\"\u5EA6\u91CF\u5355\u4F4D\u6587\u672C(\u6700\u591A10\u4E2A\u5B57\u7B26)\"/>\n                <Property Name=\"NetAmountInTransactionCurrency\" Type=\"Edm.Decimal\" Precision=\"16\" Scale=\"3\" sap:unit=\"TransactionCurrency\" sap:label=\"Net Amount\" sap:quickinfo=\"EPM: Total Net Amount\"/>\n                <Property Name=\"TransactionCurrency\" Type=\"Edm.String\" MaxLength=\"5\" sap:text=\"TransactionCurrency_T\" sap:label=\"Currency Code\" sap:quickinfo=\"EPM: Currency Code\" sap:semantics=\"currency-code\"/>\n                <Property Name=\"TransactionCurrency_T\" Type=\"Edm.String\" MaxLength=\"15\" sap:attribute-for=\"TransactionCurrency\" sap:label=\"\u77ED\u6587\u672C\"/>\n                <Property Name=\"DeliveryDate\" Type=\"Edm.DateTime\" Precision=\"0\" sap:display-format=\"Date\" sap:label=\"Delivery Date\"/>\n                <NavigationProperty Name=\"to_SalesOrder\" Relationship=\"SEPMRA_SO_ANA.assoc_4B7F44C128E6D1B4FBEB759C293CF5D5\" FromRole=\"ToRole_assoc_4B7F44C128E6D1B4FBEB759C293CF5D5\" ToRole=\"FromRole_assoc_4B7F44C128E6D1B4FBEB759C293CF5D5\"/>\n                <NavigationProperty Name=\"to_Product\" Relationship=\"SEPMRA_SO_ANA.assoc_E04DBC188394E718489B8003D3546C60\" FromRole=\"FromRole_assoc_E04DBC188394E718489B8003D3546C60\" ToRole=\"ToRole_assoc_E04DBC188394E718489B8003D3546C60\"/>\n            </EntityType>\n            <EntityType Name=\"SEPMRA_C_ALP_SlsOrdItemCubeType\" sap:semantics=\"aggregate\" sap:label=\"Sales Analysis\" sap:content-version=\"1\">\n                <Key>\n                    <PropertyRef Name=\"ID\"/>\n                </Key>\n                <Property Name=\"ID\" Type=\"Edm.String\" Nullable=\"false\" sap:sortable=\"false\" sap:filterable=\"false\"/>\n                <Property Name=\"SalesOrder\" Type=\"Edm.String\" MaxLength=\"10\" sap:aggregation-role=\"dimension\" sap:display-format=\"UpperCase\" sap:label=\"Sales Order\" sap:quickinfo=\"Sales Order ID\" sap:creatable=\"false\" sap:updatable=\"false\"/>\n                <Property Name=\"SalesOrderItem\" Type=\"Edm.String\" MaxLength=\"10\" sap:aggregation-role=\"dimension\" sap:display-format=\"UpperCase\" sap:label=\"Sales Order Item\" sap:quickinfo=\"Sales Order Item ID\"/>\n                <Property Name=\"DeliveryCalendarDate\" Type=\"Edm.DateTime\" Precision=\"0\" sap:aggregation-role=\"dimension\" sap:display-format=\"Date\" sap:label=\"Delivery Date\"/>\n                <Property Name=\"DeliveryCalendarYear\" Type=\"Edm.String\" MaxLength=\"4\" sap:aggregation-role=\"dimension\" sap:display-format=\"NonNegative\" sap:label=\"Delivery Year\" sap:quickinfo=\"Delivery Calendar Year\"/>\n                <Property Name=\"DeliveryCalendarQuarter\" Type=\"Edm.String\" MaxLength=\"1\" sap:aggregation-role=\"dimension\" sap:display-format=\"NonNegative\" sap:text=\"DeliveryCalendarQuarterT\" sap:label=\"Delivery Quarter\" sap:quickinfo=\"Delivery Calendar Quarter\" sap:value-list=\"fixed-values\"/>\n                <Property Name=\"DeliveryCalendarQuarterT\" Type=\"Edm.String\" MaxLength=\"60\" sap:attribute-for=\"DeliveryCalendarQuarter\" sap:display-format=\"UpperCase\" sap:label=\"Quarter Text\"/>\n                <Property Name=\"DeliveryCalendarMonth\" Type=\"Edm.String\" MaxLength=\"2\" sap:aggregation-role=\"dimension\" sap:display-format=\"NonNegative\" sap:text=\"DeliveryCalendarMonthT\" sap:label=\"Delivery Month\" sap:quickinfo=\"Delivery Calendar Month\" sap:value-list=\"fixed-values\"/>\n                <Property Name=\"DeliveryCalendarMonthT\" Type=\"Edm.String\" MaxLength=\"10\" sap:attribute-for=\"DeliveryCalendarMonth\" sap:label=\"Month Name\"/>\n                <Property Name=\"Product\" Type=\"Edm.String\" MaxLength=\"10\" sap:aggregation-role=\"dimension\" sap:display-format=\"UpperCase\" sap:text=\"ProductName\" sap:label=\"Product\" sap:quickinfo=\"Product ID\" sap:value-list=\"standard\"/>\n                <Property Name=\"ProductName\" Type=\"Edm.String\" MaxLength=\"255\" sap:attribute-for=\"Product\" sap:label=\"Product Name\"/>\n                <Property Name=\"NetProductPrice\" Type=\"Edm.Decimal\" Precision=\"16\" Scale=\"3\" sap:aggregation-role=\"measure\" sap:unit=\"Currency\" sap:label=\"Net Product Price\" sap:quickinfo=\"Net product unit price in local currency\" sap:filterable=\"false\"/>\n                <Property Name=\"ProductCategory\" Type=\"Edm.String\" MaxLength=\"40\" sap:aggregation-role=\"dimension\" sap:label=\"Sub-Category\" sap:quickinfo=\"Product Sub-Category\" sap:value-list=\"standard\"/>\n                <Property Name=\"MainProductCategory\" Type=\"Edm.String\" MaxLength=\"40\" sap:aggregation-role=\"dimension\" sap:label=\"Category\" sap:quickinfo=\"Product Category\" sap:value-list=\"fixed-values\"/>\n                <Property Name=\"SalesOrderOverallStatus\" Type=\"Edm.String\" MaxLength=\"1\" sap:aggregation-role=\"dimension\" sap:display-format=\"UpperCase\" sap:text=\"SalesOrderOverallStatusT\" sap:label=\"Status\" sap:quickinfo=\"Sales Order Overall Status\" sap:value-list=\"fixed-values\"/>\n                <Property Name=\"SalesOrderOverallStatusT\" Type=\"Edm.String\" MaxLength=\"60\" sap:attribute-for=\"SalesOrderOverallStatus\" sap:label=\"Status Name\" sap:quickinfo=\"Sales Order Overall Status Name\"/>\n                <Property Name=\"SoldToParty\" Type=\"Edm.String\" MaxLength=\"10\" sap:aggregation-role=\"dimension\" sap:display-format=\"UpperCase\" sap:text=\"SoldToPartyCompanyName\" sap:label=\"Customer\" sap:quickinfo=\"Customer ID\" sap:creatable=\"false\" sap:updatable=\"false\" sap:value-list=\"standard\"/>\n                <Property Name=\"SoldToPartyCompanyName\" Type=\"Edm.String\" MaxLength=\"80\" sap:attribute-for=\"SoldToParty\" sap:label=\"Customer Company Name\"/>\n                <Property Name=\"SoldToPartyCountry\" Type=\"Edm.String\" MaxLength=\"3\" sap:aggregation-role=\"dimension\" sap:display-format=\"UpperCase\" sap:text=\"SoldToPartyCountryName\" sap:label=\"Customer Country\" sap:quickinfo=\"Customer Country Code\" sap:value-list=\"standard\"/>\n                <Property Name=\"SoldToPartyCountryName\" Type=\"Edm.String\" MaxLength=\"50\" sap:attribute-for=\"SoldToPartyCountry\" sap:label=\"Customer Country Name\"/>\n                <Property Name=\"Supplier\" Type=\"Edm.String\" MaxLength=\"10\" sap:aggregation-role=\"dimension\" sap:display-format=\"UpperCase\" sap:text=\"SupplierCompanyName\" sap:label=\"Supplier\" sap:quickinfo=\"Supplier ID\" sap:value-list=\"standard\"/>\n                <Property Name=\"SupplierCompanyName\" Type=\"Edm.String\" MaxLength=\"80\" sap:attribute-for=\"Supplier\" sap:display-format=\"UpperCase\" sap:label=\"Supplier Company Name\"/>\n                <Property Name=\"GrossAmount\" Type=\"Edm.Decimal\" Precision=\"16\" Scale=\"3\" sap:aggregation-role=\"measure\" sap:unit=\"Currency\" sap:label=\"Gross Revenue\" sap:filterable=\"false\"/>\n                <Property Name=\"NetAmount\" Type=\"Edm.Decimal\" Precision=\"16\" Scale=\"3\" sap:aggregation-role=\"measure\" sap:unit=\"Currency\" sap:label=\"Revenue\" sap:filterable=\"false\"/>\n                <Property Name=\"TaxAmount\" Type=\"Edm.Decimal\" Precision=\"16\" Scale=\"3\" sap:aggregation-role=\"measure\" sap:unit=\"Currency\" sap:label=\"Tax Amount\" sap:quickinfo=\"Total Tax Amount\" sap:filterable=\"false\"/>\n                <Property Name=\"Currency\" Type=\"Edm.String\" MaxLength=\"5\" sap:aggregation-role=\"dimension\" sap:text=\"CurrencyT\" sap:label=\"Currency\" sap:semantics=\"currency-code\"/>\n                <Property Name=\"CurrencyT\" Type=\"Edm.String\" MaxLength=\"15\" sap:attribute-for=\"Currency\" sap:label=\"Currency Name\"/>\n                <Property Name=\"Quantity\" Type=\"Edm.Decimal\" Precision=\"13\" Scale=\"3\" sap:aggregation-role=\"measure\" sap:unit=\"QuantityUnit\" sap:label=\"Quantity\" sap:filterable=\"false\"/>\n                <Property Name=\"QuantityUnit\" Type=\"Edm.String\" MaxLength=\"3\" sap:aggregation-role=\"dimension\" sap:text=\"QuantityUnitT\" sap:label=\"Quantity Unit\" sap:value-list=\"standard\" sap:semantics=\"unit-of-measure\"/>\n                <Property Name=\"QuantityUnitT\" Type=\"Edm.String\" MaxLength=\"10\" sap:attribute-for=\"QuantityUnit\" sap:label=\"Quantity Unit\" sap:quickinfo=\"Quantity Unit Name\"/>\n                <Property Name=\"NumberOfSalesOrders\" Type=\"Edm.Int32\" sap:aggregation-role=\"measure\" sap:label=\"Number of Sales Orders\" sap:filterable=\"false\"/>\n                <NavigationProperty Name=\"to_DeliveryCalendarMonthVH\" Relationship=\"SEPMRA_SO_ANA.assoc_CDBAA5445CC6436F766463B411A2ADE1\" FromRole=\"FromRole_assoc_CDBAA5445CC6436F766463B411A2ADE1\" ToRole=\"ToRole_assoc_CDBAA5445CC6436F766463B411A2ADE1\"/>\n                <NavigationProperty Name=\"to_DeliveryCalendarQuarterVH\" Relationship=\"SEPMRA_SO_ANA.assoc_44AD4821FA12A0B31C9A64EEA032576F\" FromRole=\"FromRole_assoc_44AD4821FA12A0B31C9A64EEA032576F\" ToRole=\"ToRole_assoc_44AD4821FA12A0B31C9A64EEA032576F\"/>\n                <NavigationProperty Name=\"to_MainProductCategoryVH\" Relationship=\"SEPMRA_SO_ANA.assoc_E8E86917BEA26518501FD4C56198E1D5\" FromRole=\"FromRole_assoc_E8E86917BEA26518501FD4C56198E1D5\" ToRole=\"ToRole_assoc_E8E86917BEA26518501FD4C56198E1D5\"/>\n                <NavigationProperty Name=\"to_Product\" Relationship=\"SEPMRA_SO_ANA.assoc_2959EE88F6126CEC0198FD82F13EE7B8\" FromRole=\"FromRole_assoc_2959EE88F6126CEC0198FD82F13EE7B8\" ToRole=\"ToRole_assoc_2959EE88F6126CEC0198FD82F13EE7B8\"/>\n                <NavigationProperty Name=\"to_ProductCategoryVH\" Relationship=\"SEPMRA_SO_ANA.assoc_0202D085D5ABC5A04F1F575BE66CC19A\" FromRole=\"FromRole_assoc_0202D085D5ABC5A04F1F575BE66CC19A\" ToRole=\"ToRole_assoc_0202D085D5ABC5A04F1F575BE66CC19A\"/>\n                <NavigationProperty Name=\"to_ProductVH\" Relationship=\"SEPMRA_SO_ANA.assoc_F30285851321D6DF741814A90DCBBD6B\" FromRole=\"FromRole_assoc_F30285851321D6DF741814A90DCBBD6B\" ToRole=\"ToRole_assoc_F30285851321D6DF741814A90DCBBD6B\"/>\n                <NavigationProperty Name=\"to_QuantityUnitVH\" Relationship=\"SEPMRA_SO_ANA.assoc_BF9622AA982AE949940F97513DFB557D\" FromRole=\"FromRole_assoc_BF9622AA982AE949940F97513DFB557D\" ToRole=\"ToRole_assoc_BF9622AA982AE949940F97513DFB557D\"/>\n                <NavigationProperty Name=\"to_SalesOrder\" Relationship=\"SEPMRA_SO_ANA.assoc_33F6F629FB14F2FA9AD65F093B6F6520\" FromRole=\"FromRole_assoc_33F6F629FB14F2FA9AD65F093B6F6520\" ToRole=\"ToRole_assoc_33F6F629FB14F2FA9AD65F093B6F6520\"/>\n                <NavigationProperty Name=\"to_SalesOrderItem\" Relationship=\"SEPMRA_SO_ANA.assoc_FE16A495275A3BA7D195403FB549001C\" FromRole=\"FromRole_assoc_FE16A495275A3BA7D195403FB549001C\" ToRole=\"ToRole_assoc_FE16A495275A3BA7D195403FB549001C\"/>\n                <NavigationProperty Name=\"to_SalesOrderStatusVH\" Relationship=\"SEPMRA_SO_ANA.assoc_BC200480E7165A31E2AED126B06BCDDD\" FromRole=\"FromRole_assoc_BC200480E7165A31E2AED126B06BCDDD\" ToRole=\"ToRole_assoc_BC200480E7165A31E2AED126B06BCDDD\"/>\n                <NavigationProperty Name=\"to_SoldToPartyCountryVH\" Relationship=\"SEPMRA_SO_ANA.assoc_701179D1D39E3A1A90BD9B1DB7917409\" FromRole=\"FromRole_assoc_701179D1D39E3A1A90BD9B1DB7917409\" ToRole=\"ToRole_assoc_701179D1D39E3A1A90BD9B1DB7917409\"/>\n                <NavigationProperty Name=\"to_SoldToPartyVH\" Relationship=\"SEPMRA_SO_ANA.assoc_2130FCDE0E937D66D99AC66FC2654E95\" FromRole=\"FromRole_assoc_2130FCDE0E937D66D99AC66FC2654E95\" ToRole=\"ToRole_assoc_2130FCDE0E937D66D99AC66FC2654E95\"/>\n                <NavigationProperty Name=\"to_SupplierVH\" Relationship=\"SEPMRA_SO_ANA.assoc_C4446EA00E4F4A459961108B42EB4372\" FromRole=\"FromRole_assoc_C4446EA00E4F4A459961108B42EB4372\" ToRole=\"ToRole_assoc_C4446EA00E4F4A459961108B42EB4372\"/>\n            </EntityType>\n            <EntityType Name=\"SEPMRA_C_ALP_SlsOrdStatusVHType\" sap:label=\"Sales Order Status\" sap:content-version=\"1\">\n                <Key>\n                    <PropertyRef Name=\"SalesOrderOverallStatus\"/>\n                </Key>\n                <Property Name=\"SalesOrderOverallStatus\" Type=\"Edm.String\" Nullable=\"false\" MaxLength=\"1\" sap:display-format=\"UpperCase\" sap:text=\"SalesOrderOverallStatus_Text\" sap:label=\"Overall Status\" sap:quickinfo=\"EPM: Sales Order Overall Status\"/>\n                <Property Name=\"SalesOrderOverallStatus_Text\" Type=\"Edm.String\" MaxLength=\"60\" sap:label=\"\u7B80\u77ED\u63CF\u8FF0\" sap:quickinfo=\"\u56FA\u5B9A\u503C\u7684\u77ED\u6587\u672C\" sap:creatable=\"false\" sap:updatable=\"false\"/>\n            </EntityType>\n            <EntityType Name=\"SEPMRA_C_ALP_SupplierVHType\" sap:label=\"Supplier\" sap:content-version=\"1\">\n                <Key>\n                    <PropertyRef Name=\"Supplier\"/>\n                </Key>\n                <Property Name=\"Supplier\" Type=\"Edm.String\" Nullable=\"false\" MaxLength=\"10\" sap:display-format=\"UpperCase\" sap:text=\"CompanyName\" sap:label=\"Supplier\" sap:quickinfo=\"Supplier ID\" sap:creatable=\"false\" sap:updatable=\"false\"/>\n                <Property Name=\"CompanyName\" Type=\"Edm.String\" MaxLength=\"80\" sap:display-format=\"UpperCase\" sap:label=\"Supplier Name\"/>\n            </EntityType>\n            <EntityType Name=\"SEPMRA_C_ALP_TotalSalesKPIType\" sap:semantics=\"aggregate\" sap:label=\"Total Sales\" sap:content-version=\"1\">\n                <Key>\n                    <PropertyRef Name=\"ID\"/>\n                </Key>\n                <Property Name=\"ID\" Type=\"Edm.String\" Nullable=\"false\" sap:sortable=\"false\" sap:filterable=\"false\"/>\n                <Property Name=\"DeliveryCalendarYear\" Type=\"Edm.String\" MaxLength=\"4\" sap:aggregation-role=\"dimension\" sap:display-format=\"NonNegative\" sap:label=\"Delivery Year\" sap:quickinfo=\"Delivery Calendar Year\"/>\n                <Property Name=\"DeliveryCalendarQuarter\" Type=\"Edm.String\" MaxLength=\"1\" sap:aggregation-role=\"dimension\" sap:display-format=\"NonNegative\" sap:text=\"DeliveryCalendarQuarterT\" sap:label=\"Delivery Quarter\" sap:quickinfo=\"Delivery Calendar Quarter\"/>\n                <Property Name=\"DeliveryCalendarQuarterT\" Type=\"Edm.String\" MaxLength=\"60\" sap:attribute-for=\"DeliveryCalendarQuarter\" sap:display-format=\"UpperCase\" sap:label=\"Quarter Text\"/>\n                <Property Name=\"NetAmount\" Type=\"Edm.Decimal\" Precision=\"16\" Scale=\"3\" sap:aggregation-role=\"measure\" sap:unit=\"Currency\" sap:label=\"Net Amount\" sap:quickinfo=\"EPM: Total Net Amount\" sap:filterable=\"false\"/>\n                <Property Name=\"KPIRevenue\" Type=\"Edm.Decimal\" Precision=\"16\" Scale=\"3\" sap:aggregation-role=\"measure\" sap:unit=\"Currency\" sap:label=\"Net Amount\" sap:quickinfo=\"EPM: Total Net Amount\" sap:filterable=\"false\"/>\n                <Property Name=\"KPIReferenceValue\" Type=\"Edm.Decimal\" Precision=\"16\" Scale=\"3\" sap:aggregation-role=\"measure\" sap:unit=\"Currency\" sap:label=\"Net Amount\" sap:quickinfo=\"EPM: Total Net Amount\" sap:filterable=\"false\"/>\n                <Property Name=\"Rel\" Type=\"Edm.Decimal\" Precision=\"17\" Scale=\"2\" sap:aggregation-role=\"measure\" sap:filterable=\"false\"/>\n                <Property Name=\"KPIDeviationRangeLowValue\" Type=\"Edm.Decimal\" Precision=\"16\" Scale=\"3\" sap:aggregation-role=\"measure\" sap:unit=\"Currency\" sap:label=\"Net Amount\" sap:quickinfo=\"EPM: Total Net Amount\" sap:filterable=\"false\"/>\n                <Property Name=\"KPIToleranceRangeLowValue\" Type=\"Edm.Decimal\" Precision=\"16\" Scale=\"3\" sap:aggregation-role=\"measure\" sap:unit=\"Currency\" sap:label=\"Net Amount\" sap:quickinfo=\"EPM: Total Net Amount\" sap:filterable=\"false\"/>\n                <Property Name=\"Currency\" Type=\"Edm.String\" MaxLength=\"5\" sap:aggregation-role=\"dimension\" sap:text=\"CurrencyT\" sap:label=\"Currency\" sap:semantics=\"currency-code\"/>\n                <Property Name=\"CurrencyT\" Type=\"Edm.String\" MaxLength=\"15\" sap:attribute-for=\"Currency\" sap:label=\"Currency Name\"/>\n            </EntityType>\n            <EntityType Name=\"SEPMRA_C_ALP_UserType\" sap:label=\"User\" sap:content-version=\"1\">\n                <Key>\n                    <PropertyRef Name=\"UserId\"/>\n                </Key>\n                <Property Name=\"UserId\" Type=\"Edm.String\" Nullable=\"false\" MaxLength=\"12\" sap:display-format=\"UpperCase\" sap:label=\"\u7528\u6237\u540D\"/>\n                <Property Name=\"EmailAddress\" Type=\"Edm.String\" MaxLength=\"255\" sap:label=\"Email\" sap:quickinfo=\"EPM: E-Mail Address\"/>\n                <Property Name=\"PictureURL\" Type=\"Edm.String\" MaxLength=\"255\" sap:display-format=\"UpperCase\" sap:label=\"Pic URI\" sap:quickinfo=\"EPM: URL of Product Image\"/>\n                <Property Name=\"Initials\" Type=\"Edm.String\" MaxLength=\"10\" sap:display-format=\"UpperCase\" sap:label=\"Initials\" sap:quickinfo=\"EPM: Initials\"/>\n                <Property Name=\"FirstName\" Type=\"Edm.String\" MaxLength=\"40\" sap:label=\"First Name\" sap:quickinfo=\"EPM: First Name\"/>\n                <Property Name=\"MiddleName\" Type=\"Edm.String\" MaxLength=\"40\" sap:label=\"Middle Name\" sap:quickinfo=\"EPM: Middle Name\"/>\n                <Property Name=\"LastName\" Type=\"Edm.String\" MaxLength=\"40\" sap:label=\"Last Name\" sap:quickinfo=\"EPM: Last Name\"/>\n                <Property Name=\"FullName\" Type=\"Edm.String\" MaxLength=\"81\" sap:label=\"Name\" sap:quickinfo=\"Full Name\"/>\n                <Property Name=\"MobilePhoneNumber\" Type=\"Edm.String\" MaxLength=\"30\" sap:display-format=\"UpperCase\" sap:label=\"Mobile Phone Number\" sap:quickinfo=\"EPM: Mobile Phone Number\"/>\n                <Property Name=\"PhoneNumber\" Type=\"Edm.String\" MaxLength=\"30\" sap:display-format=\"UpperCase\" sap:label=\"Phone\" sap:quickinfo=\"EPM: Phone Number\"/>\n            </EntityType>\n            <Association Name=\"assoc_2147FD6D4D5D8F564F40B05369AD26BC\" sap:content-version=\"1\">\n                <End Type=\"SEPMRA_SO_ANA.SEPMRA_C_ALP_SalesOrderType\" Multiplicity=\"1\" Role=\"FromRole_assoc_2147FD6D4D5D8F564F40B05369AD26BC\"/>\n                <End Type=\"SEPMRA_SO_ANA.SEPMRA_C_ALP_UserType\" Multiplicity=\"0..1\" Role=\"ToRole_assoc_2147FD6D4D5D8F564F40B05369AD26BC\"/>\n                <ReferentialConstraint>\n                    <Principal Role=\"ToRole_assoc_2147FD6D4D5D8F564F40B05369AD26BC\">\n                        <PropertyRef Name=\"UserId\"/>\n                    </Principal>\n                    <Dependent Role=\"FromRole_assoc_2147FD6D4D5D8F564F40B05369AD26BC\">\n                        <PropertyRef Name=\"CreatedByUser\"/>\n                    </Dependent>\n                </ReferentialConstraint>\n            </Association>\n            <Association Name=\"assoc_99F50847A843041C6EACDE98C9A6690C\" sap:content-version=\"1\">\n                <End Type=\"SEPMRA_SO_ANA.SEPMRA_C_ALP_SalesOrderType\" Multiplicity=\"1\" Role=\"FromRole_assoc_99F50847A843041C6EACDE98C9A6690C\"/>\n                <End Type=\"SEPMRA_SO_ANA.SEPMRA_C_ALP_CustomerType\" Multiplicity=\"0..1\" Role=\"ToRole_assoc_99F50847A843041C6EACDE98C9A6690C\"/>\n                <ReferentialConstraint>\n                    <Principal Role=\"ToRole_assoc_99F50847A843041C6EACDE98C9A6690C\">\n                        <PropertyRef Name=\"Customer\"/>\n                    </Principal>\n                    <Dependent Role=\"FromRole_assoc_99F50847A843041C6EACDE98C9A6690C\">\n                        <PropertyRef Name=\"Customer\"/>\n                    </Dependent>\n                </ReferentialConstraint>\n            </Association>\n            <Association Name=\"assoc_4B7F44C128E6D1B4FBEB759C293CF5D5\" sap:content-version=\"1\">\n                <End Type=\"SEPMRA_SO_ANA.SEPMRA_C_ALP_SalesOrderType\" Multiplicity=\"1\" Role=\"FromRole_assoc_4B7F44C128E6D1B4FBEB759C293CF5D5\"/>\n                <End Type=\"SEPMRA_SO_ANA.SEPMRA_C_ALP_SalesOrderItemType\" Multiplicity=\"*\" Role=\"ToRole_assoc_4B7F44C128E6D1B4FBEB759C293CF5D5\"/>\n                <ReferentialConstraint>\n                    <Principal Role=\"FromRole_assoc_4B7F44C128E6D1B4FBEB759C293CF5D5\">\n                        <PropertyRef Name=\"SalesOrder\"/>\n                    </Principal>\n                    <Dependent Role=\"ToRole_assoc_4B7F44C128E6D1B4FBEB759C293CF5D5\">\n                        <PropertyRef Name=\"SalesOrder\"/>\n                    </Dependent>\n                </ReferentialConstraint>\n            </Association>\n            <Association Name=\"assoc_D6B8C833B81F95BE4482A9709964DFEF\" sap:content-version=\"1\">\n                <End Type=\"SEPMRA_SO_ANA.SEPMRA_C_ALP_SalesOrderType\" Multiplicity=\"1\" Role=\"FromRole_assoc_D6B8C833B81F95BE4482A9709964DFEF\"/>\n                <End Type=\"SEPMRA_SO_ANA.SEPMRA_C_ALP_UserType\" Multiplicity=\"0..1\" Role=\"ToRole_assoc_D6B8C833B81F95BE4482A9709964DFEF\"/>\n            </Association>\n            <Association Name=\"assoc_49DF252B14DB4991642B42F92648C080\" sap:content-version=\"1\">\n                <End Type=\"SEPMRA_SO_ANA.SEPMRA_C_ALP_ProductCatVHType\" Multiplicity=\"1\" Role=\"FromRole_assoc_49DF252B14DB4991642B42F92648C080\"/>\n                <End Type=\"SEPMRA_SO_ANA.SEPMRA_C_ALP_ProductMainCatVHType\" Multiplicity=\"0..1\" Role=\"ToRole_assoc_49DF252B14DB4991642B42F92648C080\"/>\n            </Association>\n            <Association Name=\"assoc_6A305E0CADE2F498031EE29B6954C326\" sap:content-version=\"1\">\n                <End Type=\"SEPMRA_SO_ANA.SEPMRA_C_ALP_CalendarMonthVHType\" Multiplicity=\"1\" Role=\"FromRole_assoc_6A305E0CADE2F498031EE29B6954C326\"/>\n                <End Type=\"SEPMRA_SO_ANA.SEPMRA_C_ALP_CalendarQuarterVHType\" Multiplicity=\"0..1\" Role=\"ToRole_assoc_6A305E0CADE2F498031EE29B6954C326\"/>\n            </Association>\n            <Association Name=\"assoc_E04DBC188394E718489B8003D3546C60\" sap:content-version=\"1\">\n                <End Type=\"SEPMRA_SO_ANA.SEPMRA_C_ALP_SalesOrderItemType\" Multiplicity=\"1\" Role=\"FromRole_assoc_E04DBC188394E718489B8003D3546C60\"/>\n                <End Type=\"SEPMRA_SO_ANA.SEPMRA_C_ALP_ProductType\" Multiplicity=\"0..1\" Role=\"ToRole_assoc_E04DBC188394E718489B8003D3546C60\"/>\n                <ReferentialConstraint>\n                    <Principal Role=\"ToRole_assoc_E04DBC188394E718489B8003D3546C60\">\n                        <PropertyRef Name=\"Product\"/>\n                    </Principal>\n                    <Dependent Role=\"FromRole_assoc_E04DBC188394E718489B8003D3546C60\">\n                        <PropertyRef Name=\"Product\"/>\n                    </Dependent>\n                </ReferentialConstraint>\n            </Association>\n            <Association Name=\"assoc_0E573EE23C96A3093FAC7C0B5CCBE09B\" sap:content-version=\"1\">\n                <End Type=\"SEPMRA_SO_ANA.SEPMRA_C_ALP_CustomerVHType\" Multiplicity=\"1\" Role=\"FromRole_assoc_0E573EE23C96A3093FAC7C0B5CCBE09B\"/>\n                <End Type=\"SEPMRA_SO_ANA.SEPMRA_C_ALP_CountryVHType\" Multiplicity=\"0..1\" Role=\"ToRole_assoc_0E573EE23C96A3093FAC7C0B5CCBE09B\"/>\n            </Association>\n            <Association Name=\"assoc_CDBAA5445CC6436F766463B411A2ADE1\" sap:content-version=\"1\">\n                <End Type=\"SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType\" Multiplicity=\"1\" Role=\"FromRole_assoc_CDBAA5445CC6436F766463B411A2ADE1\"/>\n                <End Type=\"SEPMRA_SO_ANA.SEPMRA_C_ALP_CalendarMonthVHType\" Multiplicity=\"0..1\" Role=\"ToRole_assoc_CDBAA5445CC6436F766463B411A2ADE1\"/>\n            </Association>\n            <Association Name=\"assoc_44AD4821FA12A0B31C9A64EEA032576F\" sap:content-version=\"1\">\n                <End Type=\"SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType\" Multiplicity=\"1\" Role=\"FromRole_assoc_44AD4821FA12A0B31C9A64EEA032576F\"/>\n                <End Type=\"SEPMRA_SO_ANA.SEPMRA_C_ALP_CalendarQuarterVHType\" Multiplicity=\"0..1\" Role=\"ToRole_assoc_44AD4821FA12A0B31C9A64EEA032576F\"/>\n            </Association>\n            <Association Name=\"assoc_E8E86917BEA26518501FD4C56198E1D5\" sap:content-version=\"1\">\n                <End Type=\"SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType\" Multiplicity=\"1\" Role=\"FromRole_assoc_E8E86917BEA26518501FD4C56198E1D5\"/>\n                <End Type=\"SEPMRA_SO_ANA.SEPMRA_C_ALP_ProductMainCatVHType\" Multiplicity=\"0..1\" Role=\"ToRole_assoc_E8E86917BEA26518501FD4C56198E1D5\"/>\n            </Association>\n            <Association Name=\"assoc_2959EE88F6126CEC0198FD82F13EE7B8\" sap:content-version=\"1\">\n                <End Type=\"SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType\" Multiplicity=\"1\" Role=\"FromRole_assoc_2959EE88F6126CEC0198FD82F13EE7B8\"/>\n                <End Type=\"SEPMRA_SO_ANA.SEPMRA_C_ALP_ProductType\" Multiplicity=\"0..1\" Role=\"ToRole_assoc_2959EE88F6126CEC0198FD82F13EE7B8\"/>\n            </Association>\n            <Association Name=\"assoc_0202D085D5ABC5A04F1F575BE66CC19A\" sap:content-version=\"1\">\n                <End Type=\"SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType\" Multiplicity=\"1\" Role=\"FromRole_assoc_0202D085D5ABC5A04F1F575BE66CC19A\"/>\n                <End Type=\"SEPMRA_SO_ANA.SEPMRA_C_ALP_ProductCatVHType\" Multiplicity=\"0..1\" Role=\"ToRole_assoc_0202D085D5ABC5A04F1F575BE66CC19A\"/>\n            </Association>\n            <Association Name=\"assoc_F30285851321D6DF741814A90DCBBD6B\" sap:content-version=\"1\">\n                <End Type=\"SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType\" Multiplicity=\"1\" Role=\"FromRole_assoc_F30285851321D6DF741814A90DCBBD6B\"/>\n                <End Type=\"SEPMRA_SO_ANA.SEPMRA_C_ALP_ProductVHType\" Multiplicity=\"0..1\" Role=\"ToRole_assoc_F30285851321D6DF741814A90DCBBD6B\"/>\n            </Association>\n            <Association Name=\"assoc_BF9622AA982AE949940F97513DFB557D\" sap:content-version=\"1\">\n                <End Type=\"SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType\" Multiplicity=\"1\" Role=\"FromRole_assoc_BF9622AA982AE949940F97513DFB557D\"/>\n                <End Type=\"SEPMRA_SO_ANA.SEPMRA_C_ALP_QuantityUnitVHType\" Multiplicity=\"0..1\" Role=\"ToRole_assoc_BF9622AA982AE949940F97513DFB557D\"/>\n            </Association>\n            <Association Name=\"assoc_33F6F629FB14F2FA9AD65F093B6F6520\" sap:content-version=\"1\">\n                <End Type=\"SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType\" Multiplicity=\"1\" Role=\"FromRole_assoc_33F6F629FB14F2FA9AD65F093B6F6520\"/>\n                <End Type=\"SEPMRA_SO_ANA.SEPMRA_C_ALP_SalesOrderType\" Multiplicity=\"0..1\" Role=\"ToRole_assoc_33F6F629FB14F2FA9AD65F093B6F6520\"/>\n            </Association>\n            <Association Name=\"assoc_FE16A495275A3BA7D195403FB549001C\" sap:content-version=\"1\">\n                <End Type=\"SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType\" Multiplicity=\"1\" Role=\"FromRole_assoc_FE16A495275A3BA7D195403FB549001C\"/>\n                <End Type=\"SEPMRA_SO_ANA.SEPMRA_C_ALP_SalesOrderItemType\" Multiplicity=\"0..1\" Role=\"ToRole_assoc_FE16A495275A3BA7D195403FB549001C\"/>\n            </Association>\n            <Association Name=\"assoc_BC200480E7165A31E2AED126B06BCDDD\" sap:content-version=\"1\">\n                <End Type=\"SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType\" Multiplicity=\"1\" Role=\"FromRole_assoc_BC200480E7165A31E2AED126B06BCDDD\"/>\n                <End Type=\"SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdStatusVHType\" Multiplicity=\"0..1\" Role=\"ToRole_assoc_BC200480E7165A31E2AED126B06BCDDD\"/>\n            </Association>\n            <Association Name=\"assoc_701179D1D39E3A1A90BD9B1DB7917409\" sap:content-version=\"1\">\n                <End Type=\"SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType\" Multiplicity=\"1\" Role=\"FromRole_assoc_701179D1D39E3A1A90BD9B1DB7917409\"/>\n                <End Type=\"SEPMRA_SO_ANA.SEPMRA_C_ALP_CountryVHType\" Multiplicity=\"0..1\" Role=\"ToRole_assoc_701179D1D39E3A1A90BD9B1DB7917409\"/>\n            </Association>\n            <Association Name=\"assoc_2130FCDE0E937D66D99AC66FC2654E95\" sap:content-version=\"1\">\n                <End Type=\"SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType\" Multiplicity=\"1\" Role=\"FromRole_assoc_2130FCDE0E937D66D99AC66FC2654E95\"/>\n                <End Type=\"SEPMRA_SO_ANA.SEPMRA_C_ALP_CustomerVHType\" Multiplicity=\"0..1\" Role=\"ToRole_assoc_2130FCDE0E937D66D99AC66FC2654E95\"/>\n            </Association>\n            <Association Name=\"assoc_C4446EA00E4F4A459961108B42EB4372\" sap:content-version=\"1\">\n                <End Type=\"SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType\" Multiplicity=\"1\" Role=\"FromRole_assoc_C4446EA00E4F4A459961108B42EB4372\"/>\n                <End Type=\"SEPMRA_SO_ANA.SEPMRA_C_ALP_SupplierVHType\" Multiplicity=\"0..1\" Role=\"ToRole_assoc_C4446EA00E4F4A459961108B42EB4372\"/>\n            </Association>\n            <Association Name=\"assoc_DB43C90AEF2C3FCFA3EA21DDF85E5E81\" sap:content-version=\"1\">\n                <End Type=\"SEPMRA_SO_ANA.SEPMRA_C_ALP_ProductVHType\" Multiplicity=\"1\" Role=\"FromRole_assoc_DB43C90AEF2C3FCFA3EA21DDF85E5E81\"/>\n                <End Type=\"SEPMRA_SO_ANA.SEPMRA_C_ALP_ProductMainCatVHType\" Multiplicity=\"0..1\" Role=\"ToRole_assoc_DB43C90AEF2C3FCFA3EA21DDF85E5E81\"/>\n            </Association>\n            <Association Name=\"assoc_630AE5653296F05CFE57BEBF29F4A237\" sap:content-version=\"1\">\n                <End Type=\"SEPMRA_SO_ANA.SEPMRA_C_ALP_ProductVHType\" Multiplicity=\"1\" Role=\"FromRole_assoc_630AE5653296F05CFE57BEBF29F4A237\"/>\n                <End Type=\"SEPMRA_SO_ANA.SEPMRA_C_ALP_ProductCatVHType\" Multiplicity=\"0..1\" Role=\"ToRole_assoc_630AE5653296F05CFE57BEBF29F4A237\"/>\n            </Association>\n            <EntityContainer Name=\"SEPMRA_SO_ANA_Entities\" m:IsDefaultEntityContainer=\"true\" sap:supported-formats=\"atom json xlsx\">\n                <EntitySet Name=\"SEPMRA_C_ALP_CalendarMonthVH\" EntityType=\"SEPMRA_SO_ANA.SEPMRA_C_ALP_CalendarMonthVHType\" sap:creatable=\"false\" sap:updatable=\"false\" sap:deletable=\"false\" sap:searchable=\"true\" sap:content-version=\"1\"/>\n                <EntitySet Name=\"SEPMRA_C_ALP_CalendarQuarterVH\" EntityType=\"SEPMRA_SO_ANA.SEPMRA_C_ALP_CalendarQuarterVHType\" sap:creatable=\"false\" sap:updatable=\"false\" sap:deletable=\"false\" sap:searchable=\"true\" sap:content-version=\"1\"/>\n                <EntitySet Name=\"SEPMRA_C_ALP_CountryVH\" EntityType=\"SEPMRA_SO_ANA.SEPMRA_C_ALP_CountryVHType\" sap:creatable=\"false\" sap:updatable=\"false\" sap:deletable=\"false\" sap:searchable=\"true\" sap:content-version=\"1\"/>\n                <EntitySet Name=\"SEPMRA_C_ALP_Customer\" EntityType=\"SEPMRA_SO_ANA.SEPMRA_C_ALP_CustomerType\" sap:creatable=\"false\" sap:updatable=\"false\" sap:deletable=\"false\" sap:content-version=\"1\"/>\n                <EntitySet Name=\"SEPMRA_C_ALP_CustomerVH\" EntityType=\"SEPMRA_SO_ANA.SEPMRA_C_ALP_CustomerVHType\" sap:creatable=\"false\" sap:updatable=\"false\" sap:deletable=\"false\" sap:searchable=\"true\" sap:content-version=\"1\"/>\n                <EntitySet Name=\"SEPMRA_C_ALP_Product\" EntityType=\"SEPMRA_SO_ANA.SEPMRA_C_ALP_ProductType\" sap:creatable=\"false\" sap:updatable=\"false\" sap:deletable=\"false\" sap:content-version=\"1\"/>\n                <EntitySet Name=\"SEPMRA_C_ALP_ProductCatVH\" EntityType=\"SEPMRA_SO_ANA.SEPMRA_C_ALP_ProductCatVHType\" sap:creatable=\"false\" sap:updatable=\"false\" sap:deletable=\"false\" sap:searchable=\"true\" sap:content-version=\"1\"/>\n                <EntitySet Name=\"SEPMRA_C_ALP_ProductMainCatVH\" EntityType=\"SEPMRA_SO_ANA.SEPMRA_C_ALP_ProductMainCatVHType\" sap:creatable=\"false\" sap:updatable=\"false\" sap:deletable=\"false\" sap:searchable=\"true\" sap:content-version=\"1\"/>\n                <EntitySet Name=\"SEPMRA_C_ALP_ProductVH\" EntityType=\"SEPMRA_SO_ANA.SEPMRA_C_ALP_ProductVHType\" sap:creatable=\"false\" sap:updatable=\"false\" sap:deletable=\"false\" sap:searchable=\"true\" sap:content-version=\"1\"/>\n                <EntitySet Name=\"SEPMRA_C_ALP_QuantityUnitVH\" EntityType=\"SEPMRA_SO_ANA.SEPMRA_C_ALP_QuantityUnitVHType\" sap:creatable=\"false\" sap:updatable=\"false\" sap:deletable=\"false\" sap:searchable=\"true\" sap:content-version=\"1\"/>\n                <EntitySet Name=\"SEPMRA_C_ALP_SalesOrder\" EntityType=\"SEPMRA_SO_ANA.SEPMRA_C_ALP_SalesOrderType\" sap:creatable=\"false\" sap:updatable=\"false\" sap:deletable=\"false\" sap:content-version=\"1\"/>\n                <EntitySet Name=\"SEPMRA_C_ALP_SalesOrderItem\" EntityType=\"SEPMRA_SO_ANA.SEPMRA_C_ALP_SalesOrderItemType\" sap:creatable=\"false\" sap:updatable=\"false\" sap:deletable=\"false\" sap:content-version=\"1\"/>\n                <EntitySet Name=\"SEPMRA_C_ALP_SlsOrdItemCube\" EntityType=\"SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType\" sap:creatable=\"false\" sap:updatable=\"false\" sap:deletable=\"false\" sap:content-version=\"1\"/>\n                <EntitySet Name=\"SEPMRA_C_ALP_SlsOrdStatusVH\" EntityType=\"SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdStatusVHType\" sap:creatable=\"false\" sap:updatable=\"false\" sap:deletable=\"false\" sap:searchable=\"true\" sap:content-version=\"1\"/>\n                <EntitySet Name=\"SEPMRA_C_ALP_SupplierVH\" EntityType=\"SEPMRA_SO_ANA.SEPMRA_C_ALP_SupplierVHType\" sap:creatable=\"false\" sap:updatable=\"false\" sap:deletable=\"false\" sap:searchable=\"true\" sap:content-version=\"1\"/>\n                <EntitySet Name=\"SEPMRA_C_ALP_TotalSalesKPI\" EntityType=\"SEPMRA_SO_ANA.SEPMRA_C_ALP_TotalSalesKPIType\" sap:creatable=\"false\" sap:updatable=\"false\" sap:deletable=\"false\" sap:content-version=\"1\"/>\n                <EntitySet Name=\"SEPMRA_C_ALP_User\" EntityType=\"SEPMRA_SO_ANA.SEPMRA_C_ALP_UserType\" sap:creatable=\"false\" sap:updatable=\"false\" sap:deletable=\"false\" sap:content-version=\"1\"/>\n                <AssociationSet Name=\"assoc_CDBAA5445CC6436F766463B411A2ADE1\" Association=\"SEPMRA_SO_ANA.assoc_CDBAA5445CC6436F766463B411A2ADE1\" sap:creatable=\"false\" sap:updatable=\"false\" sap:deletable=\"false\" sap:content-version=\"1\">\n                    <End EntitySet=\"SEPMRA_C_ALP_SlsOrdItemCube\" Role=\"FromRole_assoc_CDBAA5445CC6436F766463B411A2ADE1\"/>\n                    <End EntitySet=\"SEPMRA_C_ALP_CalendarMonthVH\" Role=\"ToRole_assoc_CDBAA5445CC6436F766463B411A2ADE1\"/>\n                </AssociationSet>\n                <AssociationSet Name=\"assoc_99F50847A843041C6EACDE98C9A6690C\" Association=\"SEPMRA_SO_ANA.assoc_99F50847A843041C6EACDE98C9A6690C\" sap:creatable=\"false\" sap:updatable=\"false\" sap:deletable=\"false\" sap:content-version=\"1\">\n                    <End EntitySet=\"SEPMRA_C_ALP_SalesOrder\" Role=\"FromRole_assoc_99F50847A843041C6EACDE98C9A6690C\"/>\n                    <End EntitySet=\"SEPMRA_C_ALP_Customer\" Role=\"ToRole_assoc_99F50847A843041C6EACDE98C9A6690C\"/>\n                </AssociationSet>\n                <AssociationSet Name=\"assoc_2130FCDE0E937D66D99AC66FC2654E95\" Association=\"SEPMRA_SO_ANA.assoc_2130FCDE0E937D66D99AC66FC2654E95\" sap:creatable=\"false\" sap:updatable=\"false\" sap:deletable=\"false\" sap:content-version=\"1\">\n                    <End EntitySet=\"SEPMRA_C_ALP_SlsOrdItemCube\" Role=\"FromRole_assoc_2130FCDE0E937D66D99AC66FC2654E95\"/>\n                    <End EntitySet=\"SEPMRA_C_ALP_CustomerVH\" Role=\"ToRole_assoc_2130FCDE0E937D66D99AC66FC2654E95\"/>\n                </AssociationSet>\n                <AssociationSet Name=\"assoc_BF9622AA982AE949940F97513DFB557D\" Association=\"SEPMRA_SO_ANA.assoc_BF9622AA982AE949940F97513DFB557D\" sap:creatable=\"false\" sap:updatable=\"false\" sap:deletable=\"false\" sap:content-version=\"1\">\n                    <End EntitySet=\"SEPMRA_C_ALP_SlsOrdItemCube\" Role=\"FromRole_assoc_BF9622AA982AE949940F97513DFB557D\"/>\n                    <End EntitySet=\"SEPMRA_C_ALP_QuantityUnitVH\" Role=\"ToRole_assoc_BF9622AA982AE949940F97513DFB557D\"/>\n                </AssociationSet>\n                <AssociationSet Name=\"assoc_2147FD6D4D5D8F564F40B05369AD26BC\" Association=\"SEPMRA_SO_ANA.assoc_2147FD6D4D5D8F564F40B05369AD26BC\" sap:creatable=\"false\" sap:updatable=\"false\" sap:deletable=\"false\" sap:content-version=\"1\">\n                    <End EntitySet=\"SEPMRA_C_ALP_SalesOrder\" Role=\"FromRole_assoc_2147FD6D4D5D8F564F40B05369AD26BC\"/>\n                    <End EntitySet=\"SEPMRA_C_ALP_User\" Role=\"ToRole_assoc_2147FD6D4D5D8F564F40B05369AD26BC\"/>\n                </AssociationSet>\n                <AssociationSet Name=\"assoc_49DF252B14DB4991642B42F92648C080\" Association=\"SEPMRA_SO_ANA.assoc_49DF252B14DB4991642B42F92648C080\" sap:creatable=\"false\" sap:updatable=\"false\" sap:deletable=\"false\" sap:content-version=\"1\">\n                    <End EntitySet=\"SEPMRA_C_ALP_ProductCatVH\" Role=\"FromRole_assoc_49DF252B14DB4991642B42F92648C080\"/>\n                    <End EntitySet=\"SEPMRA_C_ALP_ProductMainCatVH\" Role=\"ToRole_assoc_49DF252B14DB4991642B42F92648C080\"/>\n                </AssociationSet>\n                <AssociationSet Name=\"assoc_BC200480E7165A31E2AED126B06BCDDD\" Association=\"SEPMRA_SO_ANA.assoc_BC200480E7165A31E2AED126B06BCDDD\" sap:creatable=\"false\" sap:updatable=\"false\" sap:deletable=\"false\" sap:content-version=\"1\">\n                    <End EntitySet=\"SEPMRA_C_ALP_SlsOrdItemCube\" Role=\"FromRole_assoc_BC200480E7165A31E2AED126B06BCDDD\"/>\n                    <End EntitySet=\"SEPMRA_C_ALP_SlsOrdStatusVH\" Role=\"ToRole_assoc_BC200480E7165A31E2AED126B06BCDDD\"/>\n                </AssociationSet>\n                <AssociationSet Name=\"assoc_C4446EA00E4F4A459961108B42EB4372\" Association=\"SEPMRA_SO_ANA.assoc_C4446EA00E4F4A459961108B42EB4372\" sap:creatable=\"false\" sap:updatable=\"false\" sap:deletable=\"false\" sap:content-version=\"1\">\n                    <End EntitySet=\"SEPMRA_C_ALP_SlsOrdItemCube\" Role=\"FromRole_assoc_C4446EA00E4F4A459961108B42EB4372\"/>\n                    <End EntitySet=\"SEPMRA_C_ALP_SupplierVH\" Role=\"ToRole_assoc_C4446EA00E4F4A459961108B42EB4372\"/>\n                </AssociationSet>\n                <AssociationSet Name=\"assoc_630AE5653296F05CFE57BEBF29F4A237\" Association=\"SEPMRA_SO_ANA.assoc_630AE5653296F05CFE57BEBF29F4A237\" sap:creatable=\"false\" sap:updatable=\"false\" sap:deletable=\"false\" sap:content-version=\"1\">\n                    <End EntitySet=\"SEPMRA_C_ALP_ProductVH\" Role=\"FromRole_assoc_630AE5653296F05CFE57BEBF29F4A237\"/>\n                    <End EntitySet=\"SEPMRA_C_ALP_ProductCatVH\" Role=\"ToRole_assoc_630AE5653296F05CFE57BEBF29F4A237\"/>\n                </AssociationSet>\n                <AssociationSet Name=\"assoc_2959EE88F6126CEC0198FD82F13EE7B8\" Association=\"SEPMRA_SO_ANA.assoc_2959EE88F6126CEC0198FD82F13EE7B8\" sap:creatable=\"false\" sap:updatable=\"false\" sap:deletable=\"false\" sap:content-version=\"1\">\n                    <End EntitySet=\"SEPMRA_C_ALP_SlsOrdItemCube\" Role=\"FromRole_assoc_2959EE88F6126CEC0198FD82F13EE7B8\"/>\n                    <End EntitySet=\"SEPMRA_C_ALP_Product\" Role=\"ToRole_assoc_2959EE88F6126CEC0198FD82F13EE7B8\"/>\n                </AssociationSet>\n                <AssociationSet Name=\"assoc_E04DBC188394E718489B8003D3546C60\" Association=\"SEPMRA_SO_ANA.assoc_E04DBC188394E718489B8003D3546C60\" sap:creatable=\"false\" sap:updatable=\"false\" sap:deletable=\"false\" sap:content-version=\"1\">\n                    <End EntitySet=\"SEPMRA_C_ALP_SalesOrderItem\" Role=\"FromRole_assoc_E04DBC188394E718489B8003D3546C60\"/>\n                    <End EntitySet=\"SEPMRA_C_ALP_Product\" Role=\"ToRole_assoc_E04DBC188394E718489B8003D3546C60\"/>\n                </AssociationSet>\n                <AssociationSet Name=\"assoc_DB43C90AEF2C3FCFA3EA21DDF85E5E81\" Association=\"SEPMRA_SO_ANA.assoc_DB43C90AEF2C3FCFA3EA21DDF85E5E81\" sap:creatable=\"false\" sap:updatable=\"false\" sap:deletable=\"false\" sap:content-version=\"1\">\n                    <End EntitySet=\"SEPMRA_C_ALP_ProductVH\" Role=\"FromRole_assoc_DB43C90AEF2C3FCFA3EA21DDF85E5E81\"/>\n                    <End EntitySet=\"SEPMRA_C_ALP_ProductMainCatVH\" Role=\"ToRole_assoc_DB43C90AEF2C3FCFA3EA21DDF85E5E81\"/>\n                </AssociationSet>\n                <AssociationSet Name=\"assoc_E8E86917BEA26518501FD4C56198E1D5\" Association=\"SEPMRA_SO_ANA.assoc_E8E86917BEA26518501FD4C56198E1D5\" sap:creatable=\"false\" sap:updatable=\"false\" sap:deletable=\"false\" sap:content-version=\"1\">\n                    <End EntitySet=\"SEPMRA_C_ALP_SlsOrdItemCube\" Role=\"FromRole_assoc_E8E86917BEA26518501FD4C56198E1D5\"/>\n                    <End EntitySet=\"SEPMRA_C_ALP_ProductMainCatVH\" Role=\"ToRole_assoc_E8E86917BEA26518501FD4C56198E1D5\"/>\n                </AssociationSet>\n                <AssociationSet Name=\"assoc_44AD4821FA12A0B31C9A64EEA032576F\" Association=\"SEPMRA_SO_ANA.assoc_44AD4821FA12A0B31C9A64EEA032576F\" sap:creatable=\"false\" sap:updatable=\"false\" sap:deletable=\"false\" sap:content-version=\"1\">\n                    <End EntitySet=\"SEPMRA_C_ALP_SlsOrdItemCube\" Role=\"FromRole_assoc_44AD4821FA12A0B31C9A64EEA032576F\"/>\n                    <End EntitySet=\"SEPMRA_C_ALP_CalendarQuarterVH\" Role=\"ToRole_assoc_44AD4821FA12A0B31C9A64EEA032576F\"/>\n                </AssociationSet>\n                <AssociationSet Name=\"assoc_FE16A495275A3BA7D195403FB549001C\" Association=\"SEPMRA_SO_ANA.assoc_FE16A495275A3BA7D195403FB549001C\" sap:creatable=\"false\" sap:updatable=\"false\" sap:deletable=\"false\" sap:content-version=\"1\">\n                    <End EntitySet=\"SEPMRA_C_ALP_SlsOrdItemCube\" Role=\"FromRole_assoc_FE16A495275A3BA7D195403FB549001C\"/>\n                    <End EntitySet=\"SEPMRA_C_ALP_SalesOrderItem\" Role=\"ToRole_assoc_FE16A495275A3BA7D195403FB549001C\"/>\n                </AssociationSet>\n                <AssociationSet Name=\"assoc_4B7F44C128E6D1B4FBEB759C293CF5D5\" Association=\"SEPMRA_SO_ANA.assoc_4B7F44C128E6D1B4FBEB759C293CF5D5\" sap:creatable=\"false\" sap:updatable=\"false\" sap:deletable=\"false\" sap:content-version=\"1\">\n                    <End EntitySet=\"SEPMRA_C_ALP_SalesOrder\" Role=\"FromRole_assoc_4B7F44C128E6D1B4FBEB759C293CF5D5\"/>\n                    <End EntitySet=\"SEPMRA_C_ALP_SalesOrderItem\" Role=\"ToRole_assoc_4B7F44C128E6D1B4FBEB759C293CF5D5\"/>\n                </AssociationSet>\n                <AssociationSet Name=\"assoc_6A305E0CADE2F498031EE29B6954C326\" Association=\"SEPMRA_SO_ANA.assoc_6A305E0CADE2F498031EE29B6954C326\" sap:creatable=\"false\" sap:updatable=\"false\" sap:deletable=\"false\" sap:content-version=\"1\">\n                    <End EntitySet=\"SEPMRA_C_ALP_CalendarMonthVH\" Role=\"FromRole_assoc_6A305E0CADE2F498031EE29B6954C326\"/>\n                    <End EntitySet=\"SEPMRA_C_ALP_CalendarQuarterVH\" Role=\"ToRole_assoc_6A305E0CADE2F498031EE29B6954C326\"/>\n                </AssociationSet>\n                <AssociationSet Name=\"assoc_D6B8C833B81F95BE4482A9709964DFEF\" Association=\"SEPMRA_SO_ANA.assoc_D6B8C833B81F95BE4482A9709964DFEF\" sap:creatable=\"false\" sap:updatable=\"false\" sap:deletable=\"false\" sap:content-version=\"1\">\n                    <End EntitySet=\"SEPMRA_C_ALP_SalesOrder\" Role=\"FromRole_assoc_D6B8C833B81F95BE4482A9709964DFEF\"/>\n                    <End EntitySet=\"SEPMRA_C_ALP_User\" Role=\"ToRole_assoc_D6B8C833B81F95BE4482A9709964DFEF\"/>\n                </AssociationSet>\n                <AssociationSet Name=\"assoc_F30285851321D6DF741814A90DCBBD6B\" Association=\"SEPMRA_SO_ANA.assoc_F30285851321D6DF741814A90DCBBD6B\" sap:creatable=\"false\" sap:updatable=\"false\" sap:deletable=\"false\" sap:content-version=\"1\">\n                    <End EntitySet=\"SEPMRA_C_ALP_SlsOrdItemCube\" Role=\"FromRole_assoc_F30285851321D6DF741814A90DCBBD6B\"/>\n                    <End EntitySet=\"SEPMRA_C_ALP_ProductVH\" Role=\"ToRole_assoc_F30285851321D6DF741814A90DCBBD6B\"/>\n                </AssociationSet>\n                <AssociationSet Name=\"assoc_0E573EE23C96A3093FAC7C0B5CCBE09B\" Association=\"SEPMRA_SO_ANA.assoc_0E573EE23C96A3093FAC7C0B5CCBE09B\" sap:creatable=\"false\" sap:updatable=\"false\" sap:deletable=\"false\" sap:content-version=\"1\">\n                    <End EntitySet=\"SEPMRA_C_ALP_CustomerVH\" Role=\"FromRole_assoc_0E573EE23C96A3093FAC7C0B5CCBE09B\"/>\n                    <End EntitySet=\"SEPMRA_C_ALP_CountryVH\" Role=\"ToRole_assoc_0E573EE23C96A3093FAC7C0B5CCBE09B\"/>\n                </AssociationSet>\n                <AssociationSet Name=\"assoc_701179D1D39E3A1A90BD9B1DB7917409\" Association=\"SEPMRA_SO_ANA.assoc_701179D1D39E3A1A90BD9B1DB7917409\" sap:creatable=\"false\" sap:updatable=\"false\" sap:deletable=\"false\" sap:content-version=\"1\">\n                    <End EntitySet=\"SEPMRA_C_ALP_SlsOrdItemCube\" Role=\"FromRole_assoc_701179D1D39E3A1A90BD9B1DB7917409\"/>\n                    <End EntitySet=\"SEPMRA_C_ALP_CountryVH\" Role=\"ToRole_assoc_701179D1D39E3A1A90BD9B1DB7917409\"/>\n                </AssociationSet>\n                <AssociationSet Name=\"assoc_0202D085D5ABC5A04F1F575BE66CC19A\" Association=\"SEPMRA_SO_ANA.assoc_0202D085D5ABC5A04F1F575BE66CC19A\" sap:creatable=\"false\" sap:updatable=\"false\" sap:deletable=\"false\" sap:content-version=\"1\">\n                    <End EntitySet=\"SEPMRA_C_ALP_SlsOrdItemCube\" Role=\"FromRole_assoc_0202D085D5ABC5A04F1F575BE66CC19A\"/>\n                    <End EntitySet=\"SEPMRA_C_ALP_ProductCatVH\" Role=\"ToRole_assoc_0202D085D5ABC5A04F1F575BE66CC19A\"/>\n                </AssociationSet>\n                <AssociationSet Name=\"assoc_33F6F629FB14F2FA9AD65F093B6F6520\" Association=\"SEPMRA_SO_ANA.assoc_33F6F629FB14F2FA9AD65F093B6F6520\" sap:creatable=\"false\" sap:updatable=\"false\" sap:deletable=\"false\" sap:content-version=\"1\">\n                    <End EntitySet=\"SEPMRA_C_ALP_SlsOrdItemCube\" Role=\"FromRole_assoc_33F6F629FB14F2FA9AD65F093B6F6520\"/>\n                    <End EntitySet=\"SEPMRA_C_ALP_SalesOrder\" Role=\"ToRole_assoc_33F6F629FB14F2FA9AD65F093B6F6520\"/>\n                </AssociationSet>\n            </EntityContainer>\n            <Annotations Target=\"SEPMRA_SO_ANA.SEPMRA_C_ALP_CustomerVHType/Country\" xmlns=\"http://docs.oasis-open.org/odata/ns/edm\">\n                <Annotation Term=\"Common.ValueList\">\n                    <Record>\n                        <PropertyValue Property=\"Label\" String=\"Country\"/>\n                        <PropertyValue Property=\"CollectionPath\" String=\"SEPMRA_C_ALP_CountryVH\"/>\n                        <PropertyValue Property=\"SearchSupported\" Bool=\"true\"/>\n                        <PropertyValue Property=\"Parameters\">\n                            <Collection>\n                                <Record Type=\"Common.ValueListParameterInOut\">\n                                    <PropertyValue Property=\"LocalDataProperty\" PropertyPath=\"Country\"/>\n                                    <PropertyValue Property=\"ValueListProperty\" String=\"Country\"/>\n                                </Record>\n                                <Record Type=\"Common.ValueListParameterDisplayOnly\">\n                                    <PropertyValue Property=\"ValueListProperty\" String=\"CountryT\"/>\n                                </Record>\n                            </Collection>\n                        </PropertyValue>\n                    </Record>\n                </Annotation>\n            </Annotations>\n            <Annotations Target=\"SEPMRA_SO_ANA.SEPMRA_C_ALP_ProductCatVHType/MainProductCategory\" xmlns=\"http://docs.oasis-open.org/odata/ns/edm\">\n                <Annotation Term=\"Common.ValueList\">\n                    <Record>\n                        <PropertyValue Property=\"Label\" String=\"Product Category\"/>\n                        <PropertyValue Property=\"CollectionPath\" String=\"SEPMRA_C_ALP_ProductMainCatVH\"/>\n                        <PropertyValue Property=\"SearchSupported\" Bool=\"true\"/>\n                        <PropertyValue Property=\"Parameters\">\n                            <Collection>\n                                <Record Type=\"Common.ValueListParameterInOut\">\n                                    <PropertyValue Property=\"LocalDataProperty\" PropertyPath=\"MainProductCategory\"/>\n                                    <PropertyValue Property=\"ValueListProperty\" String=\"MainProductCategory\"/>\n                                </Record>\n                            </Collection>\n                        </PropertyValue>\n                    </Record>\n                </Annotation>\n            </Annotations>\n            <Annotations Target=\"SEPMRA_SO_ANA.SEPMRA_C_ALP_ProductVHType/ProductCategory\" xmlns=\"http://docs.oasis-open.org/odata/ns/edm\">\n                <Annotation Term=\"Common.ValueList\">\n                    <Record>\n                        <PropertyValue Property=\"Label\" String=\"Product Sub-Category\"/>\n                        <PropertyValue Property=\"CollectionPath\" String=\"SEPMRA_C_ALP_ProductCatVH\"/>\n                        <PropertyValue Property=\"SearchSupported\" Bool=\"true\"/>\n                        <PropertyValue Property=\"Parameters\">\n                            <Collection>\n                                <Record Type=\"Common.ValueListParameterInOut\">\n                                    <PropertyValue Property=\"LocalDataProperty\" PropertyPath=\"ProductCategory\"/>\n                                    <PropertyValue Property=\"ValueListProperty\" String=\"ProductCategory\"/>\n                                </Record>\n                                <Record Type=\"Common.ValueListParameterInOut\">\n                                    <PropertyValue Property=\"LocalDataProperty\" PropertyPath=\"MainProductCategory\"/>\n                                    <PropertyValue Property=\"ValueListProperty\" String=\"MainProductCategory\"/>\n                                </Record>\n                            </Collection>\n                        </PropertyValue>\n                    </Record>\n                </Annotation>\n            </Annotations>\n            <Annotations Target=\"SEPMRA_SO_ANA.SEPMRA_C_ALP_ProductVHType/MainProductCategory\" xmlns=\"http://docs.oasis-open.org/odata/ns/edm\">\n                <Annotation Term=\"Common.ValueList\">\n                    <Record>\n                        <PropertyValue Property=\"Label\" String=\"Product Category\"/>\n                        <PropertyValue Property=\"CollectionPath\" String=\"SEPMRA_C_ALP_ProductMainCatVH\"/>\n                        <PropertyValue Property=\"SearchSupported\" Bool=\"true\"/>\n                        <PropertyValue Property=\"Parameters\">\n                            <Collection>\n                                <Record Type=\"Common.ValueListParameterInOut\">\n                                    <PropertyValue Property=\"LocalDataProperty\" PropertyPath=\"MainProductCategory\"/>\n                                    <PropertyValue Property=\"ValueListProperty\" String=\"MainProductCategory\"/>\n                                </Record>\n                            </Collection>\n                        </PropertyValue>\n                    </Record>\n                </Annotation>\n            </Annotations>\n            <Annotations Target=\"SEPMRA_SO_ANA.SEPMRA_C_ALP_SalesOrderType/Customer\" xmlns=\"http://docs.oasis-open.org/odata/ns/edm\">\n                <Annotation Term=\"Common.ValueList\">\n                    <Record>\n                        <PropertyValue Property=\"Label\" String=\"Customer\"/>\n                        <PropertyValue Property=\"CollectionPath\" String=\"SEPMRA_C_ALP_Customer\"/>\n                        <PropertyValue Property=\"SearchSupported\" Bool=\"false\"/>\n                        <PropertyValue Property=\"Parameters\">\n                            <Collection>\n                                <Record Type=\"Common.ValueListParameterInOut\">\n                                    <PropertyValue Property=\"LocalDataProperty\" PropertyPath=\"Customer\"/>\n                                    <PropertyValue Property=\"ValueListProperty\" String=\"Customer\"/>\n                                </Record>\n                                <Record Type=\"Common.ValueListParameterDisplayOnly\">\n                                    <PropertyValue Property=\"ValueListProperty\" String=\"CompanyName\"/>\n                                </Record>\n                            </Collection>\n                        </PropertyValue>\n                    </Record>\n                </Annotation>\n            </Annotations>\n            <Annotations Target=\"SEPMRA_SO_ANA.SEPMRA_C_ALP_SalesOrderType/CreatedByUser\" xmlns=\"http://docs.oasis-open.org/odata/ns/edm\">\n                <Annotation Term=\"Common.ValueList\">\n                    <Record>\n                        <PropertyValue Property=\"Label\" String=\"User\"/>\n                        <PropertyValue Property=\"CollectionPath\" String=\"SEPMRA_C_ALP_User\"/>\n                        <PropertyValue Property=\"SearchSupported\" Bool=\"false\"/>\n                        <PropertyValue Property=\"Parameters\">\n                            <Collection>\n                                <Record Type=\"Common.ValueListParameterInOut\">\n                                    <PropertyValue Property=\"LocalDataProperty\" PropertyPath=\"CreatedByUser\"/>\n                                    <PropertyValue Property=\"ValueListProperty\" String=\"UserId\"/>\n                                </Record>\n                                <Record Type=\"Common.ValueListParameterDisplayOnly\">\n                                    <PropertyValue Property=\"ValueListProperty\" String=\"FullName\"/>\n                                </Record>\n                            </Collection>\n                        </PropertyValue>\n                    </Record>\n                </Annotation>\n            </Annotations>\n            <Annotations Target=\"SEPMRA_SO_ANA.SEPMRA_C_ALP_SalesOrderType/LastChangedByUser\" xmlns=\"http://docs.oasis-open.org/odata/ns/edm\">\n                <Annotation Term=\"Common.ValueList\">\n                    <Record>\n                        <PropertyValue Property=\"Label\" String=\"User\"/>\n                        <PropertyValue Property=\"CollectionPath\" String=\"SEPMRA_C_ALP_User\"/>\n                        <PropertyValue Property=\"SearchSupported\" Bool=\"false\"/>\n                        <PropertyValue Property=\"Parameters\">\n                            <Collection>\n                                <Record Type=\"Common.ValueListParameterInOut\">\n                                    <PropertyValue Property=\"LocalDataProperty\" PropertyPath=\"CreatedByUser\"/>\n                                    <PropertyValue Property=\"ValueListProperty\" String=\"UserId\"/>\n                                </Record>\n                                <Record Type=\"Common.ValueListParameterDisplayOnly\">\n                                    <PropertyValue Property=\"ValueListProperty\" String=\"FullName\"/>\n                                </Record>\n                            </Collection>\n                        </PropertyValue>\n                    </Record>\n                </Annotation>\n            </Annotations>\n            <Annotations Target=\"SEPMRA_SO_ANA.SEPMRA_C_ALP_SalesOrderItemType/SalesOrder\" xmlns=\"http://docs.oasis-open.org/odata/ns/edm\">\n                <Annotation Term=\"Common.ValueList\">\n                    <Record>\n                        <PropertyValue Property=\"Label\" String=\"Sales Order\"/>\n                        <PropertyValue Property=\"CollectionPath\" String=\"SEPMRA_C_ALP_SalesOrder\"/>\n                        <PropertyValue Property=\"SearchSupported\" Bool=\"false\"/>\n                        <PropertyValue Property=\"Parameters\">\n                            <Collection>\n                                <Record Type=\"Common.ValueListParameterInOut\">\n                                    <PropertyValue Property=\"LocalDataProperty\" PropertyPath=\"SalesOrder\"/>\n                                    <PropertyValue Property=\"ValueListProperty\" String=\"SalesOrder\"/>\n                                </Record>\n                                <Record Type=\"Common.ValueListParameterDisplayOnly\">\n                                    <PropertyValue Property=\"ValueListProperty\" String=\"TransactionCurrency_T\"/>\n                                </Record>\n                            </Collection>\n                        </PropertyValue>\n                    </Record>\n                </Annotation>\n            </Annotations>\n            <Annotations Target=\"SEPMRA_SO_ANA.SEPMRA_C_ALP_SalesOrderItemType/Product\" xmlns=\"http://docs.oasis-open.org/odata/ns/edm\">\n                <Annotation Term=\"Common.ValueList\">\n                    <Record>\n                        <PropertyValue Property=\"Label\" String=\"Product\"/>\n                        <PropertyValue Property=\"CollectionPath\" String=\"SEPMRA_C_ALP_Product\"/>\n                        <PropertyValue Property=\"SearchSupported\" Bool=\"false\"/>\n                        <PropertyValue Property=\"Parameters\">\n                            <Collection>\n                                <Record Type=\"Common.ValueListParameterInOut\">\n                                    <PropertyValue Property=\"LocalDataProperty\" PropertyPath=\"Product\"/>\n                                    <PropertyValue Property=\"ValueListProperty\" String=\"Product\"/>\n                                </Record>\n                                <Record Type=\"Common.ValueListParameterDisplayOnly\">\n                                    <PropertyValue Property=\"ValueListProperty\" String=\"ProductName\"/>\n                                </Record>\n                            </Collection>\n                        </PropertyValue>\n                    </Record>\n                </Annotation>\n            </Annotations>\n            <Annotations Target=\"SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType/DeliveryCalendarQuarter\" xmlns=\"http://docs.oasis-open.org/odata/ns/edm\">\n                <Annotation Term=\"Common.ValueList\">\n                    <Record>\n                        <PropertyValue Property=\"Label\" String=\"Calendar Quarter\"/>\n                        <PropertyValue Property=\"CollectionPath\" String=\"SEPMRA_C_ALP_CalendarQuarterVH\"/>\n                        <PropertyValue Property=\"SearchSupported\" Bool=\"true\"/>\n                        <PropertyValue Property=\"Parameters\">\n                            <Collection>\n                                <Record Type=\"Common.ValueListParameterInOut\">\n                                    <PropertyValue Property=\"LocalDataProperty\" PropertyPath=\"DeliveryCalendarQuarter\"/>\n                                    <PropertyValue Property=\"ValueListProperty\" String=\"CalendarQuarter\"/>\n                                </Record>\n                                <Record Type=\"Common.ValueListParameterDisplayOnly\">\n                                    <PropertyValue Property=\"ValueListProperty\" String=\"CalendarQuarterT\"/>\n                                </Record>\n                            </Collection>\n                        </PropertyValue>\n                    </Record>\n                </Annotation>\n            </Annotations>\n            <Annotations Target=\"SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType/DeliveryCalendarMonth\" xmlns=\"http://docs.oasis-open.org/odata/ns/edm\">\n                <Annotation Term=\"Common.ValueList\">\n                    <Record>\n                        <PropertyValue Property=\"Label\" String=\"Calendar Month\"/>\n                        <PropertyValue Property=\"CollectionPath\" String=\"SEPMRA_C_ALP_CalendarMonthVH\"/>\n                        <PropertyValue Property=\"SearchSupported\" Bool=\"true\"/>\n                        <PropertyValue Property=\"Parameters\">\n                            <Collection>\n                                <Record Type=\"Common.ValueListParameterInOut\">\n                                    <PropertyValue Property=\"LocalDataProperty\" PropertyPath=\"DeliveryCalendarMonth\"/>\n                                    <PropertyValue Property=\"ValueListProperty\" String=\"CalendarMonth\"/>\n                                </Record>\n                                <Record Type=\"Common.ValueListParameterInOut\">\n                                    <PropertyValue Property=\"LocalDataProperty\" PropertyPath=\"DeliveryCalendarQuarter\"/>\n                                    <PropertyValue Property=\"ValueListProperty\" String=\"CalendarQuarter\"/>\n                                </Record>\n                                <Record Type=\"Common.ValueListParameterDisplayOnly\">\n                                    <PropertyValue Property=\"ValueListProperty\" String=\"CalendarMonthT\"/>\n                                </Record>\n                            </Collection>\n                        </PropertyValue>\n                    </Record>\n                </Annotation>\n            </Annotations>\n            <Annotations Target=\"SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType/Product\" xmlns=\"http://docs.oasis-open.org/odata/ns/edm\">\n                <Annotation Term=\"Common.ValueList\">\n                    <Record>\n                        <PropertyValue Property=\"Label\" String=\"Product\"/>\n                        <PropertyValue Property=\"CollectionPath\" String=\"SEPMRA_C_ALP_ProductVH\"/>\n                        <PropertyValue Property=\"SearchSupported\" Bool=\"true\"/>\n                        <PropertyValue Property=\"Parameters\">\n                            <Collection>\n                                <Record Type=\"Common.ValueListParameterInOut\">\n                                    <PropertyValue Property=\"LocalDataProperty\" PropertyPath=\"Product\"/>\n                                    <PropertyValue Property=\"ValueListProperty\" String=\"Product\"/>\n                                </Record>\n                                <Record Type=\"Common.ValueListParameterInOut\">\n                                    <PropertyValue Property=\"LocalDataProperty\" PropertyPath=\"ProductCategory\"/>\n                                    <PropertyValue Property=\"ValueListProperty\" String=\"ProductCategory\"/>\n                                </Record>\n                                <Record Type=\"Common.ValueListParameterInOut\">\n                                    <PropertyValue Property=\"LocalDataProperty\" PropertyPath=\"MainProductCategory\"/>\n                                    <PropertyValue Property=\"ValueListProperty\" String=\"MainProductCategory\"/>\n                                </Record>\n                                <Record Type=\"Common.ValueListParameterDisplayOnly\">\n                                    <PropertyValue Property=\"ValueListProperty\" String=\"ProductName\"/>\n                                </Record>\n                                <Record Type=\"Common.ValueListParameterDisplayOnly\">\n                                    <PropertyValue Property=\"ValueListProperty\" String=\"ProductDescription\"/>\n                                </Record>\n                            </Collection>\n                        </PropertyValue>\n                    </Record>\n                </Annotation>\n            </Annotations>\n            <Annotations Target=\"SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType/ProductCategory\" xmlns=\"http://docs.oasis-open.org/odata/ns/edm\">\n                <Annotation Term=\"Common.ValueList\">\n                    <Record>\n                        <PropertyValue Property=\"Label\" String=\"Product Sub-Category\"/>\n                        <PropertyValue Property=\"CollectionPath\" String=\"SEPMRA_C_ALP_ProductCatVH\"/>\n                        <PropertyValue Property=\"SearchSupported\" Bool=\"true\"/>\n                        <PropertyValue Property=\"Parameters\">\n                            <Collection>\n                                <Record Type=\"Common.ValueListParameterInOut\">\n                                    <PropertyValue Property=\"LocalDataProperty\" PropertyPath=\"ProductCategory\"/>\n                                    <PropertyValue Property=\"ValueListProperty\" String=\"ProductCategory\"/>\n                                </Record>\n                                <Record Type=\"Common.ValueListParameterInOut\">\n                                    <PropertyValue Property=\"LocalDataProperty\" PropertyPath=\"MainProductCategory\"/>\n                                    <PropertyValue Property=\"ValueListProperty\" String=\"MainProductCategory\"/>\n                                </Record>\n                            </Collection>\n                        </PropertyValue>\n                    </Record>\n                </Annotation>\n            </Annotations>\n            <Annotations Target=\"SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType/MainProductCategory\" xmlns=\"http://docs.oasis-open.org/odata/ns/edm\">\n                <Annotation Term=\"Common.ValueList\">\n                    <Record>\n                        <PropertyValue Property=\"Label\" String=\"Product Category\"/>\n                        <PropertyValue Property=\"CollectionPath\" String=\"SEPMRA_C_ALP_ProductMainCatVH\"/>\n                        <PropertyValue Property=\"SearchSupported\" Bool=\"true\"/>\n                        <PropertyValue Property=\"Parameters\">\n                            <Collection>\n                                <Record Type=\"Common.ValueListParameterInOut\">\n                                    <PropertyValue Property=\"LocalDataProperty\" PropertyPath=\"MainProductCategory\"/>\n                                    <PropertyValue Property=\"ValueListProperty\" String=\"MainProductCategory\"/>\n                                </Record>\n                            </Collection>\n                        </PropertyValue>\n                    </Record>\n                </Annotation>\n            </Annotations>\n            <Annotations Target=\"SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType/SalesOrderOverallStatus\" xmlns=\"http://docs.oasis-open.org/odata/ns/edm\">\n                <Annotation Term=\"Common.ValueList\">\n                    <Record>\n                        <PropertyValue Property=\"Label\" String=\"Sales Order Status\"/>\n                        <PropertyValue Property=\"CollectionPath\" String=\"SEPMRA_C_ALP_SlsOrdStatusVH\"/>\n                        <PropertyValue Property=\"SearchSupported\" Bool=\"true\"/>\n                        <PropertyValue Property=\"Parameters\">\n                            <Collection>\n                                <Record Type=\"Common.ValueListParameterInOut\">\n                                    <PropertyValue Property=\"LocalDataProperty\" PropertyPath=\"SalesOrderOverallStatus\"/>\n                                    <PropertyValue Property=\"ValueListProperty\" String=\"SalesOrderOverallStatus\"/>\n                                </Record>\n                                <Record Type=\"Common.ValueListParameterDisplayOnly\">\n                                    <PropertyValue Property=\"ValueListProperty\" String=\"SalesOrderOverallStatus_Text\"/>\n                                </Record>\n                            </Collection>\n                        </PropertyValue>\n                    </Record>\n                </Annotation>\n            </Annotations>\n            <Annotations Target=\"SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType/SoldToParty\" xmlns=\"http://docs.oasis-open.org/odata/ns/edm\">\n                <Annotation Term=\"Common.ValueList\">\n                    <Record>\n                        <PropertyValue Property=\"Label\" String=\"Customer\"/>\n                        <PropertyValue Property=\"CollectionPath\" String=\"SEPMRA_C_ALP_CustomerVH\"/>\n                        <PropertyValue Property=\"SearchSupported\" Bool=\"true\"/>\n                        <PropertyValue Property=\"Parameters\">\n                            <Collection>\n                                <Record Type=\"Common.ValueListParameterInOut\">\n                                    <PropertyValue Property=\"LocalDataProperty\" PropertyPath=\"SoldToParty\"/>\n                                    <PropertyValue Property=\"ValueListProperty\" String=\"Customer\"/>\n                                </Record>\n                                <Record Type=\"Common.ValueListParameterDisplayOnly\">\n                                    <PropertyValue Property=\"ValueListProperty\" String=\"CompanyName\"/>\n                                </Record>\n                                <Record Type=\"Common.ValueListParameterDisplayOnly\">\n                                    <PropertyValue Property=\"ValueListProperty\" String=\"Country\"/>\n                                </Record>\n                            </Collection>\n                        </PropertyValue>\n                    </Record>\n                </Annotation>\n            </Annotations>\n            <Annotations Target=\"SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType/SoldToPartyCountry\" xmlns=\"http://docs.oasis-open.org/odata/ns/edm\">\n                <Annotation Term=\"Common.ValueList\">\n                    <Record>\n                        <PropertyValue Property=\"Label\" String=\"Country\"/>\n                        <PropertyValue Property=\"CollectionPath\" String=\"SEPMRA_C_ALP_CountryVH\"/>\n                        <PropertyValue Property=\"SearchSupported\" Bool=\"true\"/>\n                        <PropertyValue Property=\"Parameters\">\n                            <Collection>\n                                <Record Type=\"Common.ValueListParameterInOut\">\n                                    <PropertyValue Property=\"LocalDataProperty\" PropertyPath=\"SoldToPartyCountry\"/>\n                                    <PropertyValue Property=\"ValueListProperty\" String=\"Country\"/>\n                                </Record>\n                                <Record Type=\"Common.ValueListParameterDisplayOnly\">\n                                    <PropertyValue Property=\"ValueListProperty\" String=\"CountryT\"/>\n                                </Record>\n                            </Collection>\n                        </PropertyValue>\n                    </Record>\n                </Annotation>\n            </Annotations>\n            <Annotations Target=\"SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType/Supplier\" xmlns=\"http://docs.oasis-open.org/odata/ns/edm\">\n                <Annotation Term=\"Common.ValueList\">\n                    <Record>\n                        <PropertyValue Property=\"Label\" String=\"Supplier\"/>\n                        <PropertyValue Property=\"CollectionPath\" String=\"SEPMRA_C_ALP_SupplierVH\"/>\n                        <PropertyValue Property=\"SearchSupported\" Bool=\"true\"/>\n                        <PropertyValue Property=\"Parameters\">\n                            <Collection>\n                                <Record Type=\"Common.ValueListParameterInOut\">\n                                    <PropertyValue Property=\"LocalDataProperty\" PropertyPath=\"Supplier\"/>\n                                    <PropertyValue Property=\"ValueListProperty\" String=\"Supplier\"/>\n                                </Record>\n                                <Record Type=\"Common.ValueListParameterDisplayOnly\">\n                                    <PropertyValue Property=\"ValueListProperty\" String=\"CompanyName\"/>\n                                </Record>\n                            </Collection>\n                        </PropertyValue>\n                    </Record>\n                </Annotation>\n            </Annotations>\n            <Annotations Target=\"SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType/QuantityUnit\" xmlns=\"http://docs.oasis-open.org/odata/ns/edm\">\n                <Annotation Term=\"Common.ValueList\">\n                    <Record>\n                        <PropertyValue Property=\"Label\" String=\"Quantity Unit\"/>\n                        <PropertyValue Property=\"CollectionPath\" String=\"SEPMRA_C_ALP_QuantityUnitVH\"/>\n                        <PropertyValue Property=\"SearchSupported\" Bool=\"true\"/>\n                        <PropertyValue Property=\"Parameters\">\n                            <Collection>\n                                <Record Type=\"Common.ValueListParameterInOut\">\n                                    <PropertyValue Property=\"LocalDataProperty\" PropertyPath=\"QuantityUnit\"/>\n                                    <PropertyValue Property=\"ValueListProperty\" String=\"UnitOfMeasure\"/>\n                                </Record>\n                                <Record Type=\"Common.ValueListParameterDisplayOnly\">\n                                    <PropertyValue Property=\"ValueListProperty\" String=\"UnitOfMeasureT\"/>\n                                </Record>\n                            </Collection>\n                        </PropertyValue>\n                    </Record>\n                </Annotation>\n            </Annotations>\n            <Annotations Target=\"SEPMRA_SO_ANA.SEPMRA_C_ALP_ProductVHType\" xmlns=\"http://docs.oasis-open.org/odata/ns/edm\">\n                <Annotation Term=\"Common.SemanticKey\">\n                    <Collection>\n                        <PropertyPath>Product</PropertyPath>\n                    </Collection>\n                </Annotation>\n            </Annotations>\n            <Annotations Target=\"SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType\" xmlns=\"http://docs.oasis-open.org/odata/ns/edm\">\n                <Annotation Term=\"Common.SemanticKey\">\n                    <Collection>\n                        <PropertyPath>SalesOrderItem</PropertyPath>\n                        <PropertyPath>SalesOrder</PropertyPath>\n                    </Collection>\n                </Annotation>\n            </Annotations>\n            <Annotations Target=\"SEPMRA_SO_ANA.SEPMRA_C_ALP_TotalSalesKPIType\" xmlns=\"http://docs.oasis-open.org/odata/ns/edm\">\n                <Annotation Term=\"Common.SemanticKey\">\n                    <Collection>\n                        <PropertyPath>DeliveryCalendarQuarter</PropertyPath>\n                        <PropertyPath>DeliveryCalendarYear</PropertyPath>\n                    </Collection>\n                </Annotation>\n            </Annotations>\n            <atom:link rel=\"self\" href=\"http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/$metadata\" xmlns:atom=\"http://www.w3.org/2005/Atom\"/>\n            <atom:link rel=\"latest-version\" href=\"http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/$metadata\" xmlns:atom=\"http://www.w3.org/2005/Atom\"/>\n        </Schema>\n    </edmx:DataServices>\n</edmx:Edmx>");


/***/ }),

/***/ "./src/app/mock/http-interceptor.mock.ts":
/*!***********************************************!*\
  !*** ./src/app/mock/http-interceptor.mock.ts ***!
  \***********************************************/
/*! exports provided: HttpMockRequestInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpMockRequestInterceptor", function() { return HttpMockRequestInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "../../node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _SEPMRA_SO_ANA_metadata__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./SEPMRA_SO_ANA/metadata */ "./src/app/mock/SEPMRA_SO_ANA/metadata.ts");
/* harmony import */ var _SEPMRA_SO_ANA_SEPMRA_C_ALP_TotalSalesKPI_KPIRevenue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./SEPMRA_SO_ANA/SEPMRA_C_ALP_TotalSalesKPI/KPIRevenue */ "./src/app/mock/SEPMRA_SO_ANA/SEPMRA_C_ALP_TotalSalesKPI/KPIRevenue.ts");
/* harmony import */ var _SEPMRA_SO_ANA_SEPMRA_C_ALP_TotalSalesKPI_QuarterKPIRevenue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./SEPMRA_SO_ANA/SEPMRA_C_ALP_TotalSalesKPI/QuarterKPIRevenue */ "./src/app/mock/SEPMRA_SO_ANA/SEPMRA_C_ALP_TotalSalesKPI/QuarterKPIRevenue.ts");
/* harmony import */ var _SEPMRA_SO_ANA_SEPMRA_C_ALP_SlsOrdItemCube_MainProductCategoryNet__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube/MainProductCategoryNet */ "./src/app/mock/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube/MainProductCategoryNet.ts");
/* harmony import */ var _SEPMRA_SO_ANA_SEPMRA_C_ALP_SlsOrdItemCube_ProductCategoryNet__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube/ProductCategoryNet */ "./src/app/mock/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube/ProductCategoryNet.ts");
/* harmony import */ var _SEPMRA_SO_ANA_SEPMRA_C_ALP_SlsOrdItemCube_ProductCategory2__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube/ProductCategory2 */ "./src/app/mock/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube/ProductCategory2.ts");
/* harmony import */ var _SEPMRA_SO_ANA_SEPMRA_C_ALP_SlsOrdItemCube_ProductCategory3__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube/ProductCategory3 */ "./src/app/mock/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube/ProductCategory3.ts");
/* harmony import */ var _SEPMRA_SO_ANA_SEPMRA_C_ALP_SlsOrdItemCube_ProductCategory4__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube/ProductCategory4 */ "./src/app/mock/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube/ProductCategory4.ts");
/* harmony import */ var _SEPMRA_SO_ANA_SEPMRA_C_ALP_SlsOrdItemCube_SalesOrderOverallStatus__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube/SalesOrderOverallStatus */ "./src/app/mock/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube/SalesOrderOverallStatus.ts");
/* harmony import */ var _SEPMRA_SO_ANA_SEPMRA_C_ALP_SlsOrdItemCube_ProductCategoryQuantity__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube/ProductCategoryQuantity */ "./src/app/mock/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube/ProductCategoryQuantity.ts");
/* harmony import */ var _SEPMRA_SO_ANA_SEPMRA_C_ALP_SlsOrdItemCube_ProductCategoryNumberOfSalesOrders__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube/ProductCategoryNumberOfSalesOrders */ "./src/app/mock/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube/ProductCategoryNumberOfSalesOrders.ts");
/* harmony import */ var _SEPMRA_SO_ANA_SEPMRA_C_ALP_SlsOrdItemCube_ProductGrossAmount__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube/ProductGrossAmount */ "./src/app/mock/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube/ProductGrossAmount.ts");
/* harmony import */ var _SEPMRA_SO_ANA_SEPMRA_C_ALP_SlsOrdItemCube_DeliveryCalendarDateGrossAmount__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube/DeliveryCalendarDateGrossAmount */ "./src/app/mock/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube/DeliveryCalendarDateGrossAmount.ts");
/* harmony import */ var _SEPMRA_SO_ANA_SEPMRA_C_ALP_SlsOrdItemCube_MainProductCategory2__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube/MainProductCategory2 */ "./src/app/mock/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube/MainProductCategory2.ts");
/* harmony import */ var _SEPMRA_SO_ANA_SEPMRA_C_ALP_SlsOrdItemCube_MainProductCategoryDeliveryCalendarQuarter__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube/MainProductCategoryDeliveryCalendarQuarter */ "./src/app/mock/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube/MainProductCategoryDeliveryCalendarQuarter.ts");
/* harmony import */ var _SEPMRA_SO_ANA_SEPMRA_C_ALP_SlsOrdItemCube_MainProductCategory5__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube/MainProductCategory5 */ "./src/app/mock/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube/MainProductCategory5.ts");




















var urls = [
    {
        url: '/sap/opu/odata/sap/SEPMRA_SO_ANA/$metadata',
        text: _SEPMRA_SO_ANA_metadata__WEBPACK_IMPORTED_MODULE_4__["default"]
    },
    {
        url: '/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_TotalSalesKPI?$select=KPIRevenue,Currency,CurrencyT',
        json: _SEPMRA_SO_ANA_SEPMRA_C_ALP_TotalSalesKPI_KPIRevenue__WEBPACK_IMPORTED_MODULE_5__["default"]
    },
    {
        url: '/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_TotalSalesKPI?$select=DeliveryCalendarQuarter,KPIRevenue,DeliveryCalendarQuarterT',
        json: _SEPMRA_SO_ANA_SEPMRA_C_ALP_TotalSalesKPI_QuarterKPIRevenue__WEBPACK_IMPORTED_MODULE_6__["default"]
    },
    {
        url: '/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube?$select=MainProductCategory,NetAmount,TaxAmount,Quantity,GrossAmount,NumberOfSalesOrders',
        json: _SEPMRA_SO_ANA_SEPMRA_C_ALP_SlsOrdItemCube_MainProductCategory5__WEBPACK_IMPORTED_MODULE_19__["default"]
    },
    {
        url: '/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube?$select=MainProductCategory,NetAmount,TaxAmount,DeliveryCalendarQuarter',
        json: _SEPMRA_SO_ANA_SEPMRA_C_ALP_SlsOrdItemCube_MainProductCategoryDeliveryCalendarQuarter__WEBPACK_IMPORTED_MODULE_18__["default"]
    },
    {
        url: '/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube?$select=MainProductCategory,NetAmount,TaxAmount',
        json: _SEPMRA_SO_ANA_SEPMRA_C_ALP_SlsOrdItemCube_MainProductCategory2__WEBPACK_IMPORTED_MODULE_17__["default"]
    },
    {
        url: '/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube?$select=MainProductCategory,NetAmount',
        json: _SEPMRA_SO_ANA_SEPMRA_C_ALP_SlsOrdItemCube_MainProductCategoryNet__WEBPACK_IMPORTED_MODULE_7__["default"]
    },
    {
        url: '/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube?$select=ProductCategory,NetAmount,TaxAmount,Quantity,GrossAmount',
        json: _SEPMRA_SO_ANA_SEPMRA_C_ALP_SlsOrdItemCube_ProductCategory4__WEBPACK_IMPORTED_MODULE_11__["default"]
    },
    {
        url: '/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube?$select=ProductCategory,NetAmount,TaxAmount,GrossAmount',
        json: _SEPMRA_SO_ANA_SEPMRA_C_ALP_SlsOrdItemCube_ProductCategory3__WEBPACK_IMPORTED_MODULE_10__["default"]
    },
    {
        url: '/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube?$select=ProductCategory,NetAmount,TaxAmount',
        json: _SEPMRA_SO_ANA_SEPMRA_C_ALP_SlsOrdItemCube_ProductCategory2__WEBPACK_IMPORTED_MODULE_9__["default"]
    },
    {
        url: '/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube?$select=ProductCategory,NetAmount',
        json: _SEPMRA_SO_ANA_SEPMRA_C_ALP_SlsOrdItemCube_ProductCategoryNet__WEBPACK_IMPORTED_MODULE_8__["default"]
    },
    {
        url: '/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube?$select=SalesOrderOverallStatus,NumberOfSalesOrders,SalesOrderOverallStatusT',
        json: _SEPMRA_SO_ANA_SEPMRA_C_ALP_SlsOrdItemCube_SalesOrderOverallStatus__WEBPACK_IMPORTED_MODULE_12__["default"]
    },
    {
        url: '/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube?$select=ProductCategory,Quantity',
        json: _SEPMRA_SO_ANA_SEPMRA_C_ALP_SlsOrdItemCube_ProductCategoryQuantity__WEBPACK_IMPORTED_MODULE_13__["default"]
    },
    {
        url: '/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube?$select=ProductCategory,SoldToPartyCountry,NumberOfSalesOrders,SoldToPartyCountryName',
        json: _SEPMRA_SO_ANA_SEPMRA_C_ALP_SlsOrdItemCube_ProductCategoryNumberOfSalesOrders__WEBPACK_IMPORTED_MODULE_14__["default"]
    },
    {
        url: '/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube?$select=Product,GrossAmount,ProductName',
        json: _SEPMRA_SO_ANA_SEPMRA_C_ALP_SlsOrdItemCube_ProductGrossAmount__WEBPACK_IMPORTED_MODULE_15__["default"]
    },
    {
        url: '/sap/opu/odata/sap/SEPMRA_SO_ANA/SEPMRA_C_ALP_SlsOrdItemCube?$select=DeliveryCalendarDate,GrossAmount',
        json: _SEPMRA_SO_ANA_SEPMRA_C_ALP_SlsOrdItemCube_DeliveryCalendarDateGrossAmount__WEBPACK_IMPORTED_MODULE_16__["default"]
    }
];
var HttpMockRequestInterceptor = /** @class */ (function () {
    function HttpMockRequestInterceptor(injector) {
        this.injector = injector;
    }
    HttpMockRequestInterceptor.prototype.intercept = function (request, next) {
        var e_1, _a;
        try {
            for (var urls_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](urls), urls_1_1 = urls_1.next(); !urls_1_1.done; urls_1_1 = urls_1.next()) {
                var element = urls_1_1.value;
                if (request.urlWithParams.includes(element.url)) {
                    console.log('Request : ' + request.urlWithParams);
                    console.log('Loaded from json : ' + element.url);
                    if (element.text) {
                        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]({ status: 200, body: (element.text) }));
                    }
                    else {
                        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]({ status: 200, body: (JSON.parse(JSON.stringify(element.json))) }));
                    }
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (urls_1_1 && !urls_1_1.done && (_a = urls_1.return)) _a.call(urls_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        console.log('Loaded from http call :' + request.url);
        return next.handle(request);
    };
    HttpMockRequestInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]])
    ], HttpMockRequestInterceptor);
    return HttpMockRequestInterceptor;
}());

function mergeDeep(target, source) {
    var isObject = function (obj) { return obj && typeof obj === 'object'; };
    if (!isObject(target) || !isObject(source)) {
        return source;
    }
    Object.keys(source).forEach(function (key) {
        var targetValue = target[key];
        var sourceValue = source[key];
        if (Array.isArray(targetValue) && Array.isArray(sourceValue)) {
            sourceValue.forEach(function (source, index) {
                if (targetValue[index]) {
                    targetValue[index] = mergeDeep(Object.assign({}, targetValue[index]), source);
                }
                else {
                    // TODO
                    if (typeof source === 'string') {
                        targetValue[index] = source;
                    }
                    else {
                        targetValue[index] = Object.assign({}, source);
                    }
                }
            });
        }
        else if (isObject(targetValue) && isObject(sourceValue)) {
            target[key] = mergeDeep(Object.assign({}, targetValue), sourceValue);
        }
        else {
            target[key] = sourceValue;
        }
    });
    return target;
}


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
var environment = {
    production: true,
    mock: true
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "../../node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\tiven.wang\Documents\GitLab\XXDashboard\projects\starter\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);