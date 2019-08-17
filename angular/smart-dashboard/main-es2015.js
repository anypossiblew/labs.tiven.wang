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
class Parameter {
}
class IntervalParameter {
}
class ChartDefinitionType {
    constructor(_annotation) {
        this._annotation = _annotation;
        let titleProperty = this.getProperty('Title');
        this.Title = titleProperty && titleProperty.$.String;
        let chartTypeProperty = this.getProperty('ChartType');
        this.ChartType = chartTypeProperty && chartTypeProperty.$.EnumMember.split('/')[1];
        let dimensionsProperty = this.getProperty('Dimensions');
        this.Dimensions = dimensionsProperty && dimensionsProperty.Collection[0].PropertyPath;
        let dimensionAttributes = this.getProperty('DimensionAttributes');
        this.DimensionAttributes = dimensionAttributes &&
            dimensionAttributes.Collection[0].Record
                .map(record => new ChartDimensionAttributeType(record));
        let measuresProperty = this.getProperty('Measures');
        this.Measures = measuresProperty && measuresProperty.Collection[0].PropertyPath;
        // MeasureAttributes
        let measureAttributes = this.getProperty('MeasureAttributes');
        this.MeasureAttributes = measureAttributes &&
            measureAttributes.Collection[0].Record
                .map(record => new ChartMeasureAttributeType(record));
    }
    getProperty(name) {
        return this._annotation.PropertyValue.find(property => property.$.Property === name);
    }
}
class ChartDimensionAttributeType {
    constructor(_annotation) {
        this._annotation = _annotation;
        let dimensionProperty = this.getProperty('Dimension');
        this.Dimension = dimensionProperty && dimensionProperty.$.PropertyPath;
        let roleProperty = this.getProperty('Role');
        this.Role = roleProperty && roleProperty.$.EnumMember.split('/')[1];
    }
    getProperty(name) {
        return this._annotation.PropertyValue.find(property => property.$.Property === name);
    }
}
class ChartMeasureAttributeType {
    constructor(_annotation) {
        this._annotation = _annotation;
        let measure = this.getProperty('Measure');
        this.Measure = measure && measure.$.PropertyPath;
        let roleProperty = this.getProperty('Role');
        this.Role = roleProperty && roleProperty.$.EnumMember.split('/')[1];
    }
    getProperty(name) {
        return this._annotation.PropertyValue.find(property => property.$.Property === name);
    }
}
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
class MetaData {
    constructor(metadata) {
        this.metadata = metadata;
        this.entitySets = this.getSchema()['EntityContainer'][0]['EntitySet'].map(entitySet => new EntitySet(entitySet));
        this.entityContainer = new EntityContainer(this.getSchema()['EntityContainer'][0]);
    }
    getEntityType(entityType) {
        return new EntityType(this.getSchema(0)['EntityType'].filter(element => {
            return element.$.Name === entityType;
        })[0]);
    }
    getEntityTypeBySet(entitySet) {
        let entityType = this.getSchema(0)['EntityContainer'][0]['EntitySet'].filter(element => element.$.Name === entitySet)[0].$['EntityType'];
        return this.getEntityType(entityType.split('.')[1]);
    }
    getEdmx() {
        return this.metadata['edmx:Edmx'];
    }
    getDataServices(index = 0) {
        return this.getEdmx()['edmx:DataServices'][index];
    }
    getSchema(index = 0) {
        return this.getDataServices(0)['Schema'][index];
    }
    getEntityContainer() {
        return this.getSchema().EntityContainer[0];
    }
    getEntitySet(entityName) {
        return this.entitySets.find(entitySet => entitySet.name === entityName);
    }
    getParametersEntitySet(entitySetName) {
        let fromEntitySet, fromEntityType, navigation;
        let associationSet = this.entityContainer.AssociationSets.filter(associationSet => associationSet.getToEnd().EntitySet === entitySetName)
            .find(associationSet => {
            fromEntitySet = associationSet.getFromEnd().EntitySet;
            fromEntityType = this.getEntityTypeBySet(fromEntitySet);
            return fromEntityType.getAttribute('sap:semantics') === 'parameters';
        });
        if (associationSet) {
            navigation = fromEntityType.getNavigationByRelationship(associationSet.Association);
        }
        else {
            console.error("Can't find ParametersEntity for EntitySet %s", entitySetName);
        }
        return [fromEntitySet, navigation];
    }
    getAssociationSets() {
        return this.getEntityContainer().AssociationSet;
    }
}
class Property {
    constructor(property) {
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
    getAttribute(name) {
        return this.property.$[name];
    }
}
class EntityType {
    constructor(_entity) {
        this._entity = _entity;
        this.Name = _entity.$.Name;
        this.properties = _entity.Property.map(property => new Property(property));
        this.properties.forEach(property => {
            if (property.getAttribute('sap:text')) {
                property.SAPText = this.properties.find(prop => prop.Name === property.getAttribute('sap:text'));
            }
            if (property.getAttribute('sap:unit')) {
                property.SAPUnit = this.properties.find(prop => prop.Name === property.getAttribute('sap:unit'));
            }
        });
        if (_entity.NavigationProperty) {
            this.NavigationProperties = _entity.NavigationProperty.map(property => new NavigationProperty(property));
        }
    }
    getAttribute(name) {
        return this._entity.$[name];
    }
    getProperty(name) {
        return this.properties.find(property => property.Name === name);
    }
    getNavigationByRelationship(association) {
        return this.NavigationProperties.find(navigation => navigation.Relationship === association);
    }
}
class EntityContainer {
    constructor(_EntityContainer) {
        this._EntityContainer = _EntityContainer;
        this.Name = _EntityContainer.$.Name;
        this.EntitySets = _EntityContainer.EntitySet.map(item => new EntitySet(item));
        this.AssociationSets = _EntityContainer.AssociationSet.map(item => new AssociationSet(item));
    }
}
class EntitySet {
    constructor(_entitySet) {
        this._entitySet = _entitySet;
        this.name = _entitySet.$.Name;
    }
    getEntityTypeName() {
        return this._entitySet.$.EntityType;
    }
}
class AssociationSet {
    constructor(_AssociationSet) {
        this._AssociationSet = _AssociationSet;
        this.Name = _AssociationSet.$.Name;
        this.Association = _AssociationSet.$.Association;
        this.Ends = _AssociationSet.End.map(end => new End(end));
    }
    getFromEnd() {
        return this.Ends.find(end => end.Role.startsWith('FromRole'));
    }
    getToEnd() {
        return this.Ends.find(end => end.Role.startsWith('ToRole'));
    }
}
class End {
    constructor(_End) {
        this._End = _End;
        this.EntitySet = _End.$.EntitySet;
        this.Role = _End.$.Role;
    }
}
class NavigationProperty {
    constructor(_NavigationProperty) {
        this._NavigationProperty = _NavigationProperty;
        this.Name = _NavigationProperty.$.Name;
        this.Relationship = _NavigationProperty.$.Relationship;
        this.FromRole = _NavigationProperty.$.FromRole;
        this.ToRole = _NavigationProperty.$.ToRole;
    }
}


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "../../node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var angular_odata_es5__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-odata-es5 */ "../../node_modules/angular-odata-es5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var xml2js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! xml2js */ "../../node_modules/xml2js/lib/xml2js.js");
/* harmony import */ var xml2js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(xml2js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _meta_data__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./meta-data */ "../nx-annotation/src/lib/data-services/meta-data.ts");
/* harmony import */ var _manifest_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../manifest.service */ "../nx-annotation/src/lib/manifest.service.ts");









let NxMetadataService = class NxMetadataService {
    constructor(_httpClient, _config, options, manifest) {
        this._httpClient = _httpClient;
        this._config = _config;
        this.options = options;
        this.manifest = manifest;
        this.metadata$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        let url = '';
        if (options.uri) {
            url = this._config.getEntitiesUri('$metadata');
        }
        else if (options.settings && options.settings.localUri) {
            url = options.settings.localUri;
        }
        else {
            console.error("Metadata %s can't load", JSON.stringify(options));
        }
        this._httpClient.get(url, Object.assign({}, this._config.defaultRequestOptions, { responseType: 'text' })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mergeMap"])(v => {
            return new rxjs__WEBPACK_IMPORTED_MODULE_5__["Observable"](subscriber => {
                var parser = new xml2js__WEBPACK_IMPORTED_MODULE_6__["Parser"](xml2js__WEBPACK_IMPORTED_MODULE_6__["defaults"]["0.2"]);
                parser.parseString(v.body, (err, result) => {
                    if (err)
                        throw err;
                    subscriber.next(result);
                    subscriber.complete();
                });
            });
        }))
            .subscribe(v => {
            this.metadata = new _meta_data__WEBPACK_IMPORTED_MODULE_7__["MetaData"](v);
            this.metadata$.next(this.metadata);
            this.metadata$.complete();
        });
    }
    getMetadata() {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(1).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mergeMap"])(v => Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["iif"])(() => !!this.metadata, Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(this.metadata), this.metadata$)));
    }
    getAnnotation() {
        return this.annotations && this.annotations[0];
    }
};
NxMetadataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], angular_odata_es5__WEBPACK_IMPORTED_MODULE_3__["ODataConfiguration"], Object, _manifest_service__WEBPACK_IMPORTED_MODULE_8__["ManifestService"]])
], NxMetadataService);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var xml2js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! xml2js */ "../../node_modules/xml2js/lib/xml2js.js");
/* harmony import */ var xml2js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(xml2js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "../../node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _manifest_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../manifest.service */ "../nx-annotation/src/lib/manifest.service.ts");
/* harmony import */ var _annotations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./annotations */ "../nx-annotation/src/lib/data-services/annotations.ts");








const EdmxNamespace = 'http://docs.oasis-open.org/odata/ns/edmx';
const UINamespace = 'com.sap.vocabularies.UI.v1';
let NxAnnotationService = class NxAnnotationService {
    constructor(httpClient, options, manifest) {
        this.httpClient = httpClient;
        this.options = options;
        this.manifest = manifest;
        this.load$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        let url = '';
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
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["mergeMap"])((body) => {
            return new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"](subscriber => {
                var parser = new xml2js__WEBPACK_IMPORTED_MODULE_4__["Parser"](xml2js__WEBPACK_IMPORTED_MODULE_4__["defaults"]["0.2"]);
                parser.parseString(body, (err, result) => {
                    if (err)
                        throw err;
                    subscriber.next(result);
                    subscriber.complete();
                });
            });
        }))
            .subscribe(v => {
            this.annotations = v;
            this.namespace = this.getEdmxNamespace();
            if (!this.namespace) {
                return;
            }
            this.reference = new Reference(this.namespace, this.getEdmx()[this.namespace.alias + ':Reference']);
            this.load$.next(this.annotations);
            this.load$.complete();
        });
    }
    getAnnotation(entitySet, path) {
        let [term, qualifier] = path.split('#');
        let namespace = term.substring(0, term.lastIndexOf('.'));
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(1)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["mergeMap"])(v => Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["iif"])(() => !!this.annotations, Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(this.annotations), this.load$)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(annotations => {
            let alias = this.reference.getNamespace(namespace);
            if (!alias) {
                console.error("Can't find namespace %s", namespace);
            }
            else {
                return new Annotations(this.getAnnotations(entitySet)[0], this.reference.getNamespace(UINamespace)).getAnnotation(term.replace(alias.namespace, alias.alias), qualifier);
            }
        }));
    }
    getEdmxNamespace() {
        let keyName = Object.keys(this.annotations)[0];
        let namespace = this.annotations[keyName].$['xmlns:' + keyName.split(':')[0]];
        if (namespace !== EdmxNamespace) {
            console.error("Can't find edmx namespace %s", EdmxNamespace);
            return null;
        }
        return new Namespace(EdmxNamespace, keyName.split(':')[0]);
    }
    getEdmx() {
        return this.annotations[this.namespace.alias + ':Edmx'];
    }
    getReferences() {
        return this.getEdmx()[this.namespace.alias + ':Reference'];
    }
    getEntityTypeBySet(entitySet) {
        let entityType = this.getEdmx()['EntityContainer'][0]['EntitySet']
            .filter(element => element.$.Name === entitySet)[0].$['EntityType'];
        return entityType;
    }
    getSchema(index = 0) {
        return this.getDataServices(index)['Schema'][index];
    }
    getDataServices(index = 0) {
        return this.getEdmx()[this.namespace.alias + ':DataServices'][index];
    }
    getAnnotations(target) {
        return this.getSchema().Annotations.filter(annos => {
            return annos.$.Target === target;
        });
    }
};
NxAnnotationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"], Object, _manifest_service__WEBPACK_IMPORTED_MODULE_6__["ManifestService"]])
], NxAnnotationService);

class Annotation {
    constructor(annotation, alias) {
        this.annotation = annotation;
        this.alias = alias;
        this.term = annotation.$.Term;
        this.qualifier = annotation.$.Qualifier;
    }
}
class SelectionFieldsAnnotation extends Annotation {
    getPropertyPaths() {
        return this.annotation.Collection[0].PropertyPath;
    }
}
class DataPointAnnotation extends Annotation {
    getTitle() {
        return this.annotation.Record[0].PropertyValue.find(record => record.$.Property === 'Title').$.String;
    }
    getValue() {
        return this.annotation.Record[0].PropertyValue.find(record => record.$.Property === 'Value').$.Path;
    }
}
class LineItemAnnotation extends Annotation {
    getDataFields() {
        return this.annotation.Collection[0].Record.filter(record => record.$.Type === 'UI.DataField')
            .map(record => record.PropertyValue.find(propertyValue => propertyValue.$.Property === 'Value')
            .$.Path);
    }
}
class ChartAnnotation extends Annotation {
    constructor(annotation, alias) {
        super(annotation, alias);
        let chartRecord = this.annotation.Record.find(record => record.$.Type === 'UI.ChartDefinitionType');
        this.chartDefinition = chartRecord && new _annotations__WEBPACK_IMPORTED_MODULE_7__["ChartDefinitionType"](chartRecord);
    }
    getTitle() {
        let title = this.getChartDefinitionType().PropertyValue.find(value => value.$.Property === 'Title');
        return title && title.$.String;
    }
    getChartType() {
        let chartTypeAnno = this.annotation.Record.find(record => record.$.Type === 'UI.ChartDefinitionType');
        let chartTypeProperty = chartTypeAnno.PropertyValue.find(value => value.$.Property === 'ChartType');
        return chartTypeProperty.$.EnumMember.split('/')[1];
    }
    getChartDefinitionType() {
        return this.annotation.Record.find(record => record.$.Type === 'UI.ChartDefinitionType');
    }
    getDimensions() {
        return this.annotation.Record.find(record => record.$.Type === 'UI.ChartDefinitionType').PropertyValue
            .find(value => value.$.Property === 'Dimensions').Collection[0].PropertyPath;
    }
    getMeasures() {
        return this.annotation.Record.find(record => record.$.Type === 'UI.ChartDefinitionType').PropertyValue
            .find(value => value.$.Property === 'Measures').Collection[0].PropertyPath;
    }
}
class PresentationVariantAnnotation extends Annotation {
    constructor(annotation, alias) {
        super(annotation, alias);
        this.annotation.Record[0].PropertyValue.forEach(propertyValue => {
            if (propertyValue.$.Property === 'SortOrder') {
                this.SortOrder = new SortOrder(propertyValue);
            }
            if (propertyValue.$.Property === 'MaxItems') {
                this.MaxItems = propertyValue.$.Int;
            }
        });
    }
    getTitle() {
        return this.annotation.Record[0].PropertyValue.find(record => record.$.Property === 'Title').$.String;
    }
}
class SortOrder {
    constructor(_sortOrder) {
        this._sortOrder = _sortOrder;
        this.sortOrders = _sortOrder.Collection[0].Record.filter(record => record.$.Type === 'Common.SortOrderType')
            .map(record => {
            let sortOrder = { Property: '' };
            record.PropertyValue.forEach(property => {
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
    getOrderBy() {
        return this.sortOrders.map(sortOrder => sortOrder.Property + ' ' + (sortOrder.Descending ? 'desc' : ''));
    }
}
class SelectionVariantAnnotation extends Annotation {
    constructor(_selectionVariant, alias) {
        super(_selectionVariant, alias);
        this._selectionVariant = _selectionVariant;
        _selectionVariant.Record[0].PropertyValue.forEach(propertyValue => {
            if (propertyValue.$.Property === 'Text') {
                this.Text = propertyValue.$.String;
            }
            if (propertyValue.$.Property === 'Parameters') {
                this.Parameters = propertyValue.Collection[0].Record.filter(record => record.$.Type === 'UI.Parameter').map(record => {
                    let parameter = {
                        PropertyName: record.PropertyValue.find(property => property.$.Property === 'PropertyName').$.PropertyPath,
                        PropertyValue: record.PropertyValue.find(property => property.$.Property === 'PropertyValue').$.String
                    };
                    return parameter;
                });
            }
            if (propertyValue.$.Property === 'SelectOptions') {
                this.SelectOptions = propertyValue.Collection[0].Record.filter(record => record.$.Type === 'UI.SelectOptionType')
                    .map(record => {
                    let selectOption = {
                        PropertyName: record.PropertyValue.find(property => property.$.Property === 'PropertyName').$.PropertyPath,
                        Ranges: record.PropertyValue.find(property => property.$.Property === 'Ranges')
                            .Collection[0].Record.filter(record => record.$.Type === 'UI.SelectionRangeType').map(record => {
                            return new Record(record);
                        })
                    };
                    return selectOption;
                });
            }
        });
    }
    getFilterString() {
        let includes = this.SelectOptions.filter(selectOption => selectOption.Ranges[0].Sign === _annotations__WEBPACK_IMPORTED_MODULE_7__["SelectionRangeSignType"].I)
            .map(selectOption => {
            if (selectOption.Ranges[0].Option === _annotations__WEBPACK_IMPORTED_MODULE_7__["SelectionRangeOptionType"].BT) {
                return `(${selectOption.PropertyName} ge '${selectOption.Ranges[0].Low}' and ${selectOption.PropertyName} le '${selectOption.Ranges[0].High}')`;
            }
            if (selectOption.Ranges[0].Option === _annotations__WEBPACK_IMPORTED_MODULE_7__["SelectionRangeOptionType"].EQ) {
                return `${selectOption.PropertyName} eq '${selectOption.Ranges[0].Low || ''}'`;
            }
            if (selectOption.Ranges[0].Option === _annotations__WEBPACK_IMPORTED_MODULE_7__["SelectionRangeOptionType"].NE) {
                return `${selectOption.PropertyName} ne '${selectOption.Ranges[0].Low || ''}'`;
            }
            // TODO 添加完整
        }).join(' or ');
        let excludes = this.SelectOptions.filter(selectOption => selectOption.Ranges[0].Sign === _annotations__WEBPACK_IMPORTED_MODULE_7__["SelectionRangeSignType"].E)
            .map(selectOption => {
            if (selectOption.Ranges[0].Option === _annotations__WEBPACK_IMPORTED_MODULE_7__["SelectionRangeOptionType"].EQ) {
                return selectOption.PropertyName + " ne '" + selectOption.Ranges[0].Low + "'";
            }
            // TODO 添加完整
        }).join(' and ');
        let filter = '';
        if (includes && excludes) {
            return '(' + includes + ') and ' + excludes;
        }
        else {
            return includes + excludes;
        }
    }
}
class Record {
    constructor(_record) {
        let record = {};
        _record.PropertyValue.forEach(propertyValye => {
            if (propertyValye.$.EnumMember) {
                let enumMember = propertyValye.$.EnumMember;
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
}
class Annotations {
    constructor(_annotations, _ui) {
        this._annotations = _annotations;
        this._ui = _ui;
        this.annotations = _annotations.Annotation.map(anno => this.newAnnotation(anno));
    }
    getAnnotation(term, qualifier) {
        return this.annotations.find(anno => anno.term === term && anno.qualifier === qualifier);
    }
    newAnnotation(annotation) {
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
    }
}
class Reference {
    constructor(_namespace, _reference) {
        this._namespace = _namespace;
        this._reference = _reference;
        this.refNamespaces = {};
        _reference.forEach(reference => {
            let namespace = reference[this._namespace.alias + ':Include'][0].$.Namespace;
            let alias = reference[this._namespace.alias + ':Include'][0].$.Alias;
            this.refNamespaces[namespace] = new Namespace(namespace, alias);
        });
    }
    getNSByAlias(alias) {
        return Object.values(this.refNamespaces).find(namespace => namespace.alias === alias);
    }
    getNamespace(namespace) {
        return this.refNamespaces[namespace];
    }
}
class Namespace {
    constructor(namespace, alias) {
        this.namespace = namespace;
        this.alias = alias;
    }
}


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");


let ManifestService = class ManifestService {
    constructor(options) {
        this.options = options;
    }
    getDataSource(dataSource = '') {
        return this.options.dataSources[dataSource];
    }
    getBaseUrl() {
        return this.options.baseUrl || '';
    }
};
ManifestService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object])
], ManifestService);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");


let NgxSapAnnotationModule = class NgxSapAnnotationModule {
};
NgxSapAnnotationModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [],
        imports: [],
    })
], NgxSapAnnotationModule);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var angular_odata_es5__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-odata-es5 */ "../../node_modules/angular-odata-es5/index.js");



let OdataConfigService = class OdataConfigService extends angular_odata_es5__WEBPACK_IMPORTED_MODULE_2__["ODataConfiguration"] {
    extractQueryResultData(res) {
        if (res.status < 200 || res.status >= 300) {
            throw new Error('Bad response status: ' + res.status);
        }
        return this.afterExtractQueryResultData(res && res.body && res.body.d.results);
    }
    afterExtractQueryResultData(results) {
        return results;
    }
};
OdataConfigService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], OdataConfigService);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "../../node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var angular_odata_es5__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular-odata-es5 */ "../../node_modules/angular-odata-es5/index.js");
/* harmony import */ var _manifest_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./manifest.service */ "../nx-annotation/src/lib/manifest.service.ts");
/* harmony import */ var _odata_config_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./odata-config.service */ "../nx-annotation/src/lib/odata-config.service.ts");
/* harmony import */ var _data_services_nx_annotation_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./data-services/nx-annotation.service */ "../nx-annotation/src/lib/data-services/nx-annotation.service.ts");
/* harmony import */ var _data_services_metadata_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./data-services/metadata.service */ "../nx-annotation/src/lib/data-services/metadata.service.ts");










class SAPODataModel {
    constructor(odata, _metadata) {
        this.odata = odata;
        this.orderbys = [];
        this.metadata = _metadata;
    }
    getAll(options) {
        console.log(this.odata.TypeName);
        return this.odata.ParamQuery(options.parameters)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])((query) => {
            return query
                .Select([...((options && options.selects) || this.selects || [])].join(","))
                .Top((options && options.top) || this.top)
                .Skip((options && options.skip) || this.skip)
                .OrderBy([...((options && options.orderbys) || this.orderbys || [])].join(', '))
                .Filter((options && options.filterString) || this.filterString)
                .Exec();
        }));
    }
    getEntityType() {
        return this.metadata.getMetadata()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(v => {
            return v.getEntityTypeBySet(this.odata.TypeName);
        }));
    }
    getEntityProperty(property) {
        return this.metadata.getMetadata()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(v => {
            return v.getEntityTypeBySet(this.odata.TypeName).getProperty(property);
        }));
    }
    getMetadataService() {
        return this.metadata;
    }
}
class SAPODataService extends angular_odata_es5__WEBPACK_IMPORTED_MODULE_5__["ODataService"] {
    constructor(_typeName, _http, _config) {
        super(_typeName, _http, _config);
        this._config = _config;
        this.http = _http;
    }
    getMetadata() {
        return this.metadata.getMetadata();
    }
    getAnnotation() {
        return this.annotations && this.annotations[0];
    }
    ParamQuery(parameters) {
        if (parameters) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(1).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["mergeMap"])(() => this.getMetadata()), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(metadata => {
                let [fromSet, navigation] = metadata.getParametersEntitySet(this.TypeName);
                let paramString = Object.entries(parameters).map((entry) => {
                    if (entry[1].startsWith('datetime')) {
                        return entry[0] + "=" + entry[1];
                    }
                    else {
                        return entry[0] + "='" + entry[1] + "'";
                    }
                }).join(',');
                return new angular_odata_es5__WEBPACK_IMPORTED_MODULE_5__["ODataQuery"](fromSet + "(" + paramString + ")/" + navigation.Name, this._config, this.http);
            }));
        }
        else {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new angular_odata_es5__WEBPACK_IMPORTED_MODULE_5__["ODataQuery"](this.TypeName, this._config, this.http));
        }
    }
}
let SAPODataServiceFactory = class SAPODataServiceFactory extends angular_odata_es5__WEBPACK_IMPORTED_MODULE_5__["ODataServiceFactory"] {
    constructor(_http, _config, manifest) {
        super(_http, _config);
        this._http = _http;
        this._config = _config;
        this.manifest = manifest;
        this.metadataServices = {};
    }
    getModel(entitySet, dataSourceName) {
        if (!entitySet) {
            console.error("EntitySet must be provide");
        }
        let odataConfig = new _odata_config_service__WEBPACK_IMPORTED_MODULE_7__["OdataConfigService"]();
        let dataSource = this.manifest.getDataSource(dataSourceName);
        if (!dataSource) {
            console.error("Can't find dataSource %s in manifest", dataSource);
        }
        odataConfig.baseUrl = this.manifest.getBaseUrl() + dataSource.uri;
        if (!this.metadataServices[dataSourceName]) {
            this.metadataServices[dataSourceName] = new _data_services_metadata_service__WEBPACK_IMPORTED_MODULE_9__["NxMetadataService"](this._http, odataConfig, dataSource, this.manifest);
            if (dataSource.settings && dataSource.settings.annotations) {
                let annoServices = dataSource.settings.annotations.map((annotation => {
                    let annoSource = this.manifest.getDataSource(annotation);
                    if (!annoSource) {
                        console.error("Can't find dataSource %s in manifest", annoSource);
                    }
                    return new _data_services_nx_annotation_service__WEBPACK_IMPORTED_MODULE_8__["NxAnnotationService"](this._http, annoSource, this.manifest);
                }));
                this.metadataServices[dataSourceName].annotations = annoServices;
            }
        }
        let sapODataService = this.CreateService(entitySet, odataConfig);
        sapODataService.metadata = this.metadataServices[dataSourceName];
        return new SAPODataModel(sapODataService, this.metadataServices[dataSourceName]);
    }
    CreateService(typeName, config) {
        return new SAPODataService(typeName, this._http, config ? config : this._config);
    }
};
SAPODataServiceFactory = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"], angular_odata_es5__WEBPACK_IMPORTED_MODULE_5__["ODataConfiguration"], _manifest_service__WEBPACK_IMPORTED_MODULE_6__["ManifestService"]])
], SAPODataServiceFactory);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _sap_odata_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sap-odata.service */ "../nx-annotation/src/lib/sap-odata.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm2015/index.js");





class UIAnnotationService {
    constructor(odataService, settings) {
        this.odataService = odataService;
        this.settings = settings;
        this.annotationService = this.odataService.getMetadataService().getAnnotation();
    }
    getODataService() {
        return this.odataService;
    }
    getAnnotation(annotationPath) {
        if (!annotationPath) {
            // console.log("Provide the path of annotation %s", annotationPath)
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(undefined);
        }
        return this.odataService.getMetadataService().getMetadata()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(v => {
            let entityType = v.getEntitySet(this.settings.entitySet);
            if (!entityType) {
                throw "Can't find Entity Type for EntitySet: " + this.settings.entitySet;
            }
            return entityType.getEntityTypeName();
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mergeMap"])(entityType => this.annotationService.getAnnotation(entityType, annotationPath)));
    }
    getData(entityType, selects, presentation, selection, beforeFetch) {
        let texts = selects.map(property => entityType.getProperty(property))
            .filter(property => !!property.SAPText).map(property => property.SAPText.Name);
        if (presentation) {
            if (presentation.SortOrder) {
                let property = presentation.SortOrder.sortOrders
                    .find(sortOrder => !selects.find(property => property === sortOrder.Property));
                if (property) {
                    throw `${property.Property} is missing in the SELECT list.`;
                }
            }
        }
        let options = {
            selects: [...selects, ...texts],
            orderbys: presentation && presentation.SortOrder && presentation.SortOrder.getOrderBy(),
            top: presentation && presentation.MaxItems,
            filterString: selection && selection.getFilterString()
        };
        if (beforeFetch) {
            beforeFetch(options, entityType, presentation, selection);
        }
        return this.odataService.getAll(options)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(data => {
            selects.forEach(dimension => {
                let property = entityType.getProperty(dimension);
                if (property.Type === 'Edm.DateTimeOffset' || property.Type === 'Edm.DateTime') {
                    data.forEach(d => d[dimension] = new Date(d[dimension].match(/\d+/)[0] * 1));
                }
            });
            return data;
        }));
    }
    getLineItemWithData(beforeFetch) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["zip"])(this.odataService.getEntityType(), this.getAnnotation(this.settings.annotationPath), this.getAnnotation(this.settings.presentationAnnotationPath), this.getAnnotation(this.settings.selectionAnnotationPath))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mergeMap"])(([entityType, lineItemAnnotation, presentation, selection]) => {
            let fields = lineItemAnnotation.getDataFields();
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["zip"])(Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(entityType), Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(lineItemAnnotation), this.getData(entityType, fields, presentation, selection, beforeFetch));
        }));
    }
    getChartWithData(beforeFetch) {
        if (!this.settings.chartAnnotationPath) {
            console.warn("The chartAnnotationPath should be provided");
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(undefined);
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["zip"])(this.odataService.getEntityType(), this.getAnnotation(this.settings.chartAnnotationPath), this.getAnnotation(this.settings.presentationAnnotationPath), this.getAnnotation(this.settings.selectionAnnotationPath))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(([entityType, chartAnnotation, presentation, selection]) => {
            let dimensions = chartAnnotation.getDimensions();
            let measures = chartAnnotation.getMeasures();
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["zip"])(Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(entityType), Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(chartAnnotation), this.getData(entityType, [...dimensions, ...measures], presentation, selection, beforeFetch));
        }));
    }
    /**
     * 获取单数据点 Annotation 的数据
     */
    getDataPointWithData(beforeFetch) {
        if (!this.hasDataPoint()) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(undefined);
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["zip"])(this.odataService.getEntityType(), this.getAnnotation(this.settings.dataPointAnnotationPath), this.getAnnotation(this.settings.presentationAnnotationPath), this.getAnnotation(this.settings.selectionAnnotationPath))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(([entityType, dataPoint, presentation, selection]) => {
            let selects = [];
            let valPath = dataPoint.getValue();
            let valProperty = entityType.getProperty(valPath);
            selects.push(valPath);
            // 度量的单位字段
            if (valProperty.SAPUnit) {
                selects.push(valProperty.SAPUnit.Name);
            }
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["zip"])(Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(entityType), Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(dataPoint), this.getData(entityType, selects, presentation, selection, beforeFetch)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(data => {
                if (data[0]) {
                    let result = {
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
    }
    /**
     * 获取所有 Annotation 和其对应的数据
     */
    getAnnotationWithData(beforeFetch) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["combineLatest"])(this.getChartWithData(beforeFetch), this.getDataPointWithData(beforeFetch))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(([chartWithData, pointWithData]) => {
            return {
                entityType: chartWithData && chartWithData[0] || pointWithData && pointWithData[0],
                chartAnnotation: chartWithData && chartWithData[1],
                chartData: chartWithData && chartWithData[2],
                dataPointAnnotation: pointWithData && pointWithData[1],
                pointData: pointWithData && pointWithData[2],
            };
        }));
    }
    getEntityType() {
        return this.odataService.getEntityType();
    }
    hasDataPoint() {
        return !!this.settings.dataPointAnnotationPath;
    }
}
let UIAnnotationFactory = class UIAnnotationFactory {
    constructor(odataFactory) {
        this.odataFactory = odataFactory;
    }
    newUIAnnotationService(settings) {
        let odataService = this.odataFactory.getModel(settings.entitySet, settings.dataSource);
        return new UIAnnotationService(odataService, settings);
    }
};
UIAnnotationFactory = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_sap_odata_service__WEBPACK_IMPORTED_MODULE_2__["SAPODataServiceFactory"]])
], UIAnnotationFactory);



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
    const isObject = (obj) => obj && typeof obj === 'object';
    if (!isObject(target) || !isObject(source)) {
        return source;
    }
    Object.keys(source).forEach(key => {
        const targetValue = target[key];
        const sourceValue = source[key];
        if (Array.isArray(targetValue) && Array.isArray(sourceValue)) {
            sourceValue.forEach((source, index) => {
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
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm2015/index.js");

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
class Filter {
    constructor(options) {
        this.path = options.path;
        this.operator = options.operator;
        this.value1 = options.value1;
        this.value2 = options.value2;
        this.filters = options.filters;
        this.and = options.and;
    }
}
class Filters {
    constructor() {
        this.filters = [];
        this.filters$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
    }
    getFilterString() {
        return this.filters
            .map(filter => {
            switch (filter.operator) {
                case FilterOperator.BT:
                    return `(${filter.path} ge '${filter.value1}' and ${filter.path} le '${filter.value2}')`;
                case FilterOperator.EQ:
                    return `${filter.path} eq '${filter.value1}'`;
                case FilterOperator.NE:
                    return `${filter.path} ne '${filter.value1}'`;
            }
            // TODO 添加完整
        }).join(' or ');
    }
    remove(filter) {
        this.filters.splice(filter);
        this.filters$.next(this.filters);
    }
    add(filter) {
        this.filters.push(filter);
        this.filters$.next(this.filters);
    }
    put(filter) {
        this.filters = [filter];
        this.filters$.next(this.filters);
    }
    onChange() {
        return this.filters$;
    }
}


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");


let EntriesPipe = class EntriesPipe {
    transform(value, args) {
        return Object.entries(value);
    }
};
EntriesPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'entries'
    })
], EntriesPipe);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");


let KeysPipe = class KeysPipe {
    transform(value, args) {
        return Object.keys(value);
    }
};
KeysPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'keys'
    })
], KeysPipe);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _nx_charts_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../nx-charts.service */ "../nx-charts/src/lib/nx-charts.service.ts");
/* harmony import */ var projects_nx_annotation_src_public_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! projects/nx-annotation/src/public-api */ "../nx-annotation/src/public-api.ts");






const AUXILIARY_SERIES_NAME = 'Auxiliary';
const DATA_ZOOM_SUITABLE_SIZE = 20;
/**
 *
 */
let NxChartComponent = class NxChartComponent {
    constructor(odataFactory, chartService, ngZone, cd) {
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
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((event) => {
            event.data = this.getItemByDimension(event.name);
            return event;
        }));
        this.chartDblClick = this.createLazyEvent('dblclick');
        this.chartRendered = this.createLazyEvent('rendered');
        this.chartUpdateAxisPointer = this.createLazyEvent('updateAxisPointer');
        this.properties = [];
        this.onDestroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.chartOptions$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.chartInit
            .subscribe((echarts) => {
            // console.log('chartInit')
            this.echartsInstance = echarts;
            if (this.bussing) {
                if (this.theme === 'dark') {
                    this.echartsInstance.showLoading('default', {
                        color: '#8f9bb3',
                        textColor: '#8f9bb3',
                        maskColor: '#222b45',
                    });
                }
                else {
                    this.echartsInstance.showLoading();
                }
            }
        });
    }
    ngOnInit() {
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
                .subscribe(theme => {
                // console.warn(theme);
                if (this.theme !== theme) {
                    delete this.echartsInstance;
                    this.theme = theme;
                }
            });
        }
        Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["combineLatest"])(this.getChartOptions$().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(options => this.options = Object(_nx_charts_service__WEBPACK_IMPORTED_MODULE_4__["mergeDeep"])(this.options || {}, options))), this.getData$())
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mergeMap"])(v => Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["iif"])(() => !!this.echartsInstance, Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(v), Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(v).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["delayWhen"])(() => this.chartInit)))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(v => {
            this.bussing = false;
            this.echartsInstance.hideLoading();
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.onDestroy$), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(([options, data]) => this.rendering(data, options)))
            .subscribe((message) => {
            console.log("Render Complete!");
        });
        // 给 chart options 监听链条初始化一个值， 并且 defaultOptions 要使用 BehaviorSubject 类型
        this.chartOptions$.next(this.options || {});
    }
    getChartOptions$() {
        if (this.defaultOptions instanceof rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"]) {
            // return this.defaultOptions;
            return this.chartOptions$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(() => this.defaultOptions));
        }
        else if (this.defaultOptions) {
            this.options = this.defaultOptions;
        }
        return this.chartOptions$;
    }
    getData$() {
        // Option 1: Push data from parent component
        if (this.data$) {
            return this.data$
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(data => {
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
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(v => this.getSelects().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(v => this.odataService.selects = v))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(v => this.odataService.getAll()));
        }
    }
    ngAfterViewInit() {
        if (!(this.dimensions && this.measures && this.chartType)) {
            return;
        }
        this.initChartType();
    }
    ngOnChanges(changes) {
        if (Object.entries(changes).find(entry => (entry[0] === 'defaultOptions') && entry[1].currentValue)) {
            // console.log('setOption %s', 'onChange');
            // this.echartsInstance && this.echartsInstance.setOption(this.defaultOptions);
        }
    }
    clear() {
        // this.echartsInstance.clear();
        this.option = {};
    }
    rendering(v, defaultOptions = {}) {
        console.log('rendering');
        // this.options = mergeDeep(this.options||{}, defaultOptions);
        this.checkChartConfig();
        this.initChartType();
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(v)
            .pipe(
        // 用户自定义异步处理函数
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mergeMap"])(v => Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["iif"])(() => !this.dataReceived, Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(v), this.dataReceived && this.dataReceived(v))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])((items) => {
            if (this.chartType === projects_nx_annotation_src_public_api__WEBPACK_IMPORTED_MODULE_5__["ChartType"].Custom) {
                return;
            }
            this.items = items;
            this.noData = !(this.items && this.items.length);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((items) => {
            let options = this.getRenderSeries(items);
            // render series 后, render chart 前的出口
            if (this.afterRenderSeries) {
                this.afterRenderSeries(options.series, items);
            }
            // merge default and user custom options
            options = Object(_nx_charts_service__WEBPACK_IMPORTED_MODULE_4__["mergeDeep"])(options, this.options);
            // render series 后, render chart 前的出口
            if (this.beforeRenderChart) {
                this.beforeRenderChart(options, items);
            }
            if (this.debugging) {
                console.warn('rendering - setOption:');
                console.warn(options);
            }
            // render chart
            this.option = options;
            // this.echartsInstance.setOption(options);
            // Push sync attributes
            this.cd.detectChanges();
            return 'Success';
        }));
    }
    checkChartConfig() {
        if (this.chartType === projects_nx_annotation_src_public_api__WEBPACK_IMPORTED_MODULE_5__["ChartType"].Custom) {
            return;
        }
        if (!this.dimensions) {
            console.error("Should provide attribute [dimensions]");
        }
        if (!this.measures) {
            console.error("Should provide attribute [measures]");
        }
    }
    initChartType() {
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
    }
    getRenderSeries(v) {
        let options = {};
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
    }
    /**
     * 初始化 Chart 配置包括类型 []
     *
     * @param type chart type
     */
    initChartBar(type) {
        let [category, value, seriesType] = this.getAxisByChartType(type);
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
        let property = this.entityType.getProperty(this.dimensions[0]);
        // x y axis 要一起设置?
        this.option[value] = {
            type: "value",
            axisLabel: {
                formatter: this.getMeasureLabelFormater()
            }
        };
        let dimension = {
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
        this.measures.forEach(measure => {
            let property = this.entityType.getProperty(measure);
            let series = {
                id: measure,
                type: seriesType,
            };
            // 是否显示 measure 轴的 title
            if (this.showMeasuresTitle) {
                series.name = (property && property.SAPLabel) || measure;
            }
            if (projects_nx_annotation_src_public_api__WEBPACK_IMPORTED_MODULE_5__["ChartType"].Area === type) {
                series.areaStyle = {};
            }
            this.option.series.push(series);
            this.option.legend.data.push({
                name: (property && property.SAPLabel) || measure,
            });
        });
        return this.option;
    }
    /**
     * 初始化设置 pie 图形
     */
    initChartPie() {
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
        let series = {
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
        let dimProperty = this.entityType.getProperty(this.getDimension());
        // Measures
        this.measures.forEach(measure => {
            let property = this.entityType.getProperty(measure);
            series.name = property && property.getAttribute('sap:label');
            // 如果 dimension 有描述字段, 则设置 tooltip, legend 显示 label 
            if (dimProperty.SAPText) {
                series.label.formatter = (params) => this.items.find(item => item[dimProperty.Name] === params.name)[dimProperty.SAPText.Name];
                this.option.legend.formatter = (name) => this.items.find(item => item[dimProperty.Name] === name)[dimProperty.SAPText.Name];
            }
            this.setTooltip(this.option);
            this.option.series.push(series);
        });
    }
    initChartTreemap() {
        this.option.tooltip = {
            formatter: '{b}: {c}'
        };
        this.option.series = [];
        let treemap = {
            type: 'treemap',
            // visibleMin: 300,
            label: {
                show: true,
                formatter: '{b}: {@score[0]}'
            },
            data: []
        };
        let measure = this.getMeasure();
        return this.odataService.getEntityType()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])((entityType) => {
            let property = entityType.getProperty(measure);
            treemap.name = property && property.getAttribute('sap:label');
            this.option.series.push(treemap);
        }));
    }
    initChartHeatMap() {
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
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])((entityType) => {
            let dimensionX = this.dimensions[0];
            let dimensionY = this.dimensions[1];
            let propertyX = entityType.getProperty(dimensionX);
            let propertyY = entityType.getProperty(dimensionY);
            if (this.showDimensionsTitle) {
                this.option.xAxis.name = propertyX && propertyX.getAttribute('sap:label');
                this.option.yAxis.name = propertyY && propertyY.getAttribute('sap:label');
            }
        }));
    }
    // TODO 调整
    initChartGeoMap() {
        this.option.tooltip = {
            trigger: 'item',
            formatter: (params) => {
                return params.seriesName + '<br/>' +
                    this.items.find(item => item[this.getDimension()] === params.name)[this.getDimensionLabel()] +
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
        let measure = this.getMeasure();
        return this.odataService.getEntityType()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])((entityType) => {
            this.measures.forEach((measure, i) => {
                let property = entityType.getProperty(measure);
                let series = {
                    type: 'scatter',
                    coordinateSystem: 'geo',
                    data: []
                };
                series.name = (property && property.getAttribute('sap:label')) || measure;
                this.option.series.push(series);
            });
        }));
    }
    renderBar(items, type) {
        let options = {
            xAxis: {},
            yAxis: {},
            series: []
        };
        let [category, value] = this.getAxisByChartType(type);
        // 设置维度轴值
        options[category].data = this.getDimensionData(items);
        options.series = this.getSeriesData(items);
        options.dataZoom = this.getDataZoomOptions(category, options.series);
        return options;
    }
    getSeriesData(items) {
        let series = [];
        let dimension = this.getDimension();
        let dimensionType = this.getDimensionRole(dimension);
        // 调用用户自定义函数, 否则调用度量值程序
        if (this.beforeRenderSeries) {
            this.beforeRenderSeries(series, items);
        }
        else {
            this.measures.forEach((measure, index) => {
                if (dimensionType === 'time') {
                    series.push({
                        data: items.map(item => ({
                            value: [
                                [item[dimension].getFullYear(), item[dimension].getMonth() + 1, item[dimension].getDate()].join('/'),
                                item[measure]
                            ], data: item
                        }))
                    });
                }
                else {
                    series.push({
                        data: items.map(item => item[measure])
                    });
                }
            });
        }
        return series;
    }
    renderPie(items) {
        let dimension = this.getDimension();
        let dText = this.dimensionTexts && this.dimensionTexts[0];
        let dLabel = dText || dimension;
        let measure = this.getMeasure();
        let options = {
            legend: {},
            series: [{}]
        };
        // legend
        options.legend.data = items.map(item => item[dimension]);
        options.series[0].data = items.map(item => {
            return {
                name: item[dimension],
                value: [item[measure], item]
            };
        });
        // 按自定义指定显示 Label 的数量显示 Label
        if (this.pieOptions.showLabels !== undefined) {
            for (let i = 0; i < this.pieOptions.showLabels; i++) {
                options.series[0].data[i].label = {
                    show: true,
                    position: 'inside',
                    formatter: (params) => '' + params.value[1][dLabel] + params.value[1][measure]
                };
            }
        }
        return options;
    }
    getAxisByChartType(type) {
        let category = 'xAxis';
        let value = 'yAxis';
        let seriesType = '';
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
    }
    renderTreemap(items) {
        let dimension = this.getDimension();
        let measure = this.getMeasure();
        this.option.series[0].data = items.map(item => {
            return {
                name: item[dimension],
                value: item[measure]
            };
        });
    }
    renderHeatMap(items) {
        let dX = this.dimensions[0];
        let dXText = this.dimensionTexts[0];
        let dXLabel = dXText || dX;
        let dY = this.dimensions[1];
        let dYText = this.dimensionTexts[1];
        let dYLabel = dYText || dY;
        let measure = this.getMeasure();
        // select distinct values of dimension x
        let dataX = items.map(item => item[dX]).filter((v, i, a) => a.indexOf(v) === i);
        // select distinct values of dimension y
        let dataY = items.map(item => item[dY]).filter((v, i, a) => a.indexOf(v) === i);
        // Tooltip 函数
        this.option.tooltip = {
            formatter: (params) => params.value[3][dXLabel] + '/' + params.value[3][dYLabel] + ':' + params.value[2]
        };
        let maxSize = 0;
        this.option.xAxis.data = dataX;
        // x坐标轴: 显示 dimension 的文本字段值, 否则显示 dimension 本身值
        this.option.xAxis.axisLabel.formatter = (value, index) => {
            if (dXText) {
                return items.find(item => item[dX] === dataX[index])[dXText];
            }
            else {
                return dataX[index];
            }
        };
        this.option.yAxis.data = dataY;
        // y坐标轴: 显示 dimension 的文本字段值, 否则显示 dimension 本身值
        this.option.yAxis.axisLabel.formatter = (value, index) => {
            if (dYText) {
                return items.find(item => item[dY] === dataY[index])[dYText];
            }
            else {
                return dataY[index];
            }
        };
        this.option.series[0].data = items.map(item => {
            maxSize = maxSize > item[measure] ? maxSize : item[measure];
            return [
                dataX.indexOf(item[dX]),
                dataY.indexOf(item[dY]),
                item[measure],
                item
            ];
        });
        this.option.visualMap && (this.option.visualMap.max = maxSize);
    }
    renderGeoMap(items) {
        let dimension = this.getDimension();
        this.measures.forEach((measure, i) => {
            this.option.series[i].data = items
                .filter(item => item[measure] !== undefined)
                .map(item => {
                return {
                    name: item[dimension],
                    value: [item.lng, item.lat, item[measure], item]
                };
            });
        });
    }
    renderColumnStacked(items) {
        let options = {
            xAxis: {},
            yAxis: {},
            series: []
        };
        // 设置维度轴值
        options.xAxis.data = this.getDimensionData(items);
        options.series = this.getSeriesData(items).map(series => {
            series.stack = 'ColumnStacked';
            return series;
        });
        options.dataZoom = this.getDataZoomOptions('xAxis', options.series);
        return options;
    }
    getDataZoomOptions(category, series) {
        let dataZoom = [];
        let maxSize = 0;
        // 取得度量值最大量
        series.forEach(series => {
            maxSize = maxSize > series.data.length ? maxSize : series.data.length;
        });
        // 根据度量值的最大量设置缩放控件
        if (maxSize > DATA_ZOOM_SUITABLE_SIZE) {
            let zoomOption = {
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
    }
    /**
     * 纵向瀑布图
     */
    initChartWaterfall() {
        let measureProperty = this.getMeasureProperty();
        let [category, value, seriesType] = this.getAxisByChartType(this.chartType);
        let options = {};
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
    }
    renderWaterfall(items) {
        let [category, value, seriesType] = this.getAxisByChartType(this.chartType);
        let options = {
            series: this.option.series
        };
        // 1. Category data
        options[category] = {};
        options[category].data = this.getDimensionData(items);
        // 2. Auxiliary hide bar
        let auxiliaryData = [];
        items.reduce((pre, item) => {
            let measure = Number(item[this.measures[0]]);
            auxiliaryData.push(measure >= 0 ? pre : pre + measure);
            return pre + measure;
        }, 0);
        // 去掉最后一个值
        // auxiliaryData.pop();
        options.series.find(series => series.name === AUXILIARY_SERIES_NAME)
            .data = auxiliaryData;
        // 3. Increase and Decline bars
        let incDecs = options.series.filter(series => series.name !== AUXILIARY_SERIES_NAME);
        incDecs[0].data = items.map(item => item[this.measures[0]] >= 0 ? item[this.measures[0]] : '-');
        incDecs[1].data = items.map(item => item[this.measures[0]] < 0 ? -item[this.measures[0]] : '-');
        // 期末
        // incDecs[0].data.push(auxiliaryData[auxiliaryData.length-1]);
        // incDecs[1].data.push(0);
        // auxiliaryData.push(0);
        // options[category].data.push('000');
        // items.push()
        this.setTooltip(options);
        return options;
    }
    /**
     * 从实际数据计算 Category , 这里会涉及到 Category 一些不同属性
     *
     * @param items
     */
    getDimensionData(items) {
        let dimension = this.getDimension();
        let dimensionType = this.getDimensionRole(dimension);
        // 设置维度轴值
        if (dimensionType === 'time') {
            return items.map(item => [item[dimension].getFullYear(), item[dimension].getMonth() + 1, item[dimension].getDate()].join('/'));
        }
        return items.map(item => item[dimension]);
    }
    setTooltip(options) {
        options.tooltip = options.tooltip || {};
        // Dimension Property
        let dimProperty = this.entityType.getProperty(this.getDimension());
        options.tooltip.formatter = (params) => {
            let texts = [];
            // 如果 dimension 有描述字段, 则设置 tooltip, legend 显示 label
            if (dimProperty.SAPText) {
                if (Array.isArray(params)) {
                }
                else {
                    if (this.items[params.dataIndex]) {
                        texts.push(this.items[params.dataIndex][dimProperty.SAPText.Name] +
                            '(' + this.items[params.dataIndex][dimProperty.Name] + ')');
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
                    texts.push(this.items[params.dataIndex][dimProperty.Name]);
                }
            }
            if (Array.isArray(params)) {
                texts.push(params.filter(param => param.value !== '-' && param.seriesName !== AUXILIARY_SERIES_NAME)
                    .map(param => {
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
    }
    setCategoryAxisLabel(category) {
        // 暂时只支持一个 dimension
        let property = this.entityType.getProperty(this.getDimension());
        category.axisLabel.formatter =
            (value, index) => {
                if (!this.items[index]) {
                    return value;
                }
                if (property.SAPText) {
                    return this.items[index][(property.SAPText && property.SAPText.Name)] + '(' + this.items[index][property.Name] + ')';
                }
                else {
                    return this.items[index][property.Name];
                }
            };
    }
    setCategoryAxisPointerLabel(category) {
        // 暂时只支持一个 dimension
        let property = this.entityType.getProperty(this.getDimension());
        category.axisPointer = category.axisPointer || {};
        category.axisPointer.label = category.axisPointer.label || {};
        category.axisPointer.label.formatter = (params) => {
            // TODO
            if (params.seriesData[0]) {
                let index = params.seriesData[0].dataIndex;
                if (property.SAPText) {
                    return this.items[index][(property.SAPText && property.SAPText.Name)] + '(' + this.items[index][property.Name] + ')';
                }
                else {
                    return this.items[index][property.Name];
                }
            }
            else {
                return params.value;
            }
        };
    }
    getDimension(i = 0) {
        return this.dimensions[i];
    }
    getMeasure(i = 0) {
        return this.measures[i];
    }
    getMeasureProperty(i = 0) {
        return this.entityType.getProperty(this.getMeasure(i));
    }
    getDimensionLabel(i = 0) {
        return this.dimensionTexts[i] || this.dimensions[i];
    }
    getSelects() {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(1)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(v => this.getSapTexts(this.dimensions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])((v) => this.dimensionTexts = v))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((v) => v.filter(item => item !== undefined)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((v) => {
            if (this.selects) {
                return [...this.selects, ...v];
            }
            else {
                return [...this.dimensions, ...v, this.measures];
            }
        }));
    }
    getSapTexts(propertyNames) {
        return this.odataService.getEntityType()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((entityType) => propertyNames.map(pn => {
            let property = entityType.getProperty(pn);
            let sapText = property.getAttribute('sap:text');
            if (sapText) {
                return sapText;
            }
            return undefined;
        })));
    }
    getSapText(propertyName) {
        return this.odataService.getEntityType()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((entityType) => {
            let property = entityType.getProperty(propertyName);
            this.properties.push(property);
            let sapText = property.getAttribute('sap:text');
            if (sapText) {
                return sapText;
            }
        }));
    }
    getEntityType() {
        if (this.entityType) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(this.entityType);
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["forkJoin"])(this.odataService.getEntityType(), this.getSapTexts(this.dimensions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])((v) => this.dimensionTexts = v)))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(v => v[0]));
    }
    getProperty(name) {
        return this.properties.find(property => property.Name === name);
    }
    getMeasureLabelFormater() {
        return abbreviateNumber;
    }
    getDimensionRole(name) {
        if (this.dimensionAttributes) {
            let dimension = this.dimensionAttributes.find(attr => attr.Dimension === name);
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
    }
    getItemByDimension(value) {
        return this.items.find(item => item[this.getDimension()] === value);
    }
    ngOnDestroy() {
        this.onDestroy$.next();
        this.onDestroy$.complete();
    }
    debugChartOptions() {
        console.warn(this.echartsInstance.getOption());
    }
    debugEntityType() {
        console.warn(this.entityType);
    }
    // allows to lazily bind to only those events that are requested through the `@Output` by parent components
    // see https://stackoverflow.com/questions/51787972/optimal-reentering-the-ngzone-from-eventemitter-event for more info
    createLazyEvent(eventName) {
        return this.chartInit.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])((chart) => new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](observer => {
            chart.on(eventName, (data) => this.ngZone.run(() => observer.next(data)));
            return {
                unsubscribe: () => { }
            }; // no need to react on unsubscribe as long as the `dispose()` is called in ngOnDestroy
        })));
    }
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

/**
 * 数字格式化函数，单位 K M B T KT
 *
 * @param value
 */
function abbreviateNumber(value) {
    let newValue = Math.abs(value).toFixed(0);
    if (Math.abs(value) >= 1000) {
        let suffixes = ["", "K", "M", "B", "T", "KT"];
        let suffixNum = Math.floor((("" + newValue).length - 1) / 3);
        let shortValue;
        for (let precision = 2; precision >= 1; precision--) {
            shortValue = parseFloat((suffixNum != 0 ? (value / Math.pow(1000, suffixNum)) : value).toPrecision(precision));
            let dotLessShortValue = (shortValue + '').replace(/[^a-zA-Z 0-9]+/g, '');
            if (dotLessShortValue.length <= 2) {
                break;
            }
        }
        if (shortValue % 1 != 0) {
            let shortNum = shortValue.toFixed(1);
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var ngx_echarts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-echarts */ "../../node_modules/ngx-echarts/fesm2015/ngx-echarts.js");
/* harmony import */ var _nx_chart_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./nx-chart.component */ "../nx-charts/src/lib/nx-chart/nx-chart.component.ts");





let NxChartModule = class NxChartModule {
};
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm2015/index.js");



let NxChartService = class NxChartService {
    constructor() {
        this.theme$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["ReplaySubject"](1);
        this.refresh$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    /**
     * On chart theme change event
     */
    onThemeChange() {
        return this.theme$;
    }
    /**
     * Trigger the chart theme change event
     *
     * @param theme The name of EChart theme
     */
    changeTheme(theme) {
        console.warn(theme);
        this.theme$.next(theme);
    }
    /**
     * On chart refresh event
     */
    onRefresh() {
        return this.refresh$;
    }
    /**
     * Refresh chart
     */
    refresh(name) {
        this.refresh$.next(name);
    }
};
NxChartService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], NxChartService);

function mergeDeep(target, source) {
    const isObject = (obj) => obj && typeof obj === 'object';
    if (!isObject(target) || !isObject(source)) {
        return source;
    }
    Object.keys(source).forEach(key => {
        const targetValue = target[key];
        const sourceValue = source[key];
        if (Array.isArray(targetValue) && Array.isArray(sourceValue)) {
            sourceValue.forEach((source, index) => {
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
/* harmony import */ var _stacked_dual_100__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./stacked-dual-100 */ "../nx-charts/src/lib/smart-charts/chart-types/stacked-dual-100.ts");
/* harmony import */ var projects_nx_annotation_src_public_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! projects/nx-annotation/src/public-api */ "../nx-annotation/src/public-api.ts");


class NxAreaStacked100 extends _stacked_dual_100__WEBPACK_IMPORTED_MODULE_0__["NxStackedDual100"] {
    constructor() {
        super(...arguments);
        this.chartType = projects_nx_annotation_src_public_api__WEBPACK_IMPORTED_MODULE_1__["ChartType"].AreaStacked100;
    }
    getChartOptions(items) {
        let options = super.getStacked100(items, 'xAxis', 'line');
        options.series.forEach(element => {
            element.areaStyle = {};
        });
        return options;
    }
}


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
/* harmony import */ var _stacked_dual__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./stacked-dual */ "../nx-charts/src/lib/smart-charts/chart-types/stacked-dual.ts");
/* harmony import */ var projects_nx_annotation_src_public_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! projects/nx-annotation/src/public-api */ "../nx-annotation/src/public-api.ts");


class NxAreaStacked extends _stacked_dual__WEBPACK_IMPORTED_MODULE_0__["NxStackedDual"] {
    constructor() {
        super(...arguments);
        this.chartType = projects_nx_annotation_src_public_api__WEBPACK_IMPORTED_MODULE_1__["ChartType"].AreaStacked;
    }
    getChartOptions(items) {
        let options = super.getStacked(items, 'xAxis', 'line');
        options.series.forEach(element => {
            element.areaStyle = {};
        });
        return options;
    }
}


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
/* harmony import */ var _smart_chart_type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./smart-chart-type */ "../nx-charts/src/lib/smart-charts/chart-types/smart-chart-type.ts");

class NxAreaType extends _smart_chart_type__WEBPACK_IMPORTED_MODULE_0__["NxSmartChartType"] {
    getAreas(items, category) {
        let options = {
            xAxis: {},
            yAxis: {},
            series: []
        };
        // 设置维度轴值
        options[category].type = 'category';
        options[category].data = this.getDimensionData(items);
        this.measures.forEach((measure, index) => {
            options.series.push({
                id: measure,
                name: this.getPropertyLabel(measure),
                type: 'line',
                areaStyle: {},
                data: items.map(item => item[measure])
            });
        });
        options.tooltip = this.getTooltip(items);
        return options;
    }
}


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
/* harmony import */ var _area_type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./area-type */ "../nx-charts/src/lib/smart-charts/chart-types/area-type.ts");
/* harmony import */ var projects_nx_annotation_src_public_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! projects/nx-annotation/src/public-api */ "../nx-annotation/src/public-api.ts");


class NxArea extends _area_type__WEBPACK_IMPORTED_MODULE_0__["NxAreaType"] {
    constructor() {
        super(...arguments);
        this.chartType = projects_nx_annotation_src_public_api__WEBPACK_IMPORTED_MODULE_1__["ChartType"].Area;
    }
    getChartOptions(items) {
        let options = super.getAreas(items, 'xAxis');
        return options;
    }
}


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
/* harmony import */ var _smart_chart_type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./smart-chart-type */ "../nx-charts/src/lib/smart-charts/chart-types/smart-chart-type.ts");

class NxBarColumnLine extends _smart_chart_type__WEBPACK_IMPORTED_MODULE_0__["NxSmartChartType"] {
    getOptions(items, category, value) {
        let options = {
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
    }
    getSeries(items) {
        let dimension = this.getDimension();
        return this.measures.map((measure, index) => {
            let series = {
                id: measure,
                name: this.getPropertyLabel(measure),
                type: this.seriesType,
            };
            if (this.categoryType === 'time') {
                series.data = items.map(item => ({
                    value: [
                        [item[dimension].getFullYear(), item[dimension].getMonth() + 1, item[dimension].getDate()].join('/'),
                        item[measure]
                    ], data: item
                }));
            }
            else {
                series.data = items.map(item => item[measure]);
            }
            return series;
        });
    }
}


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
/* harmony import */ var projects_nx_annotation_src_public_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! projects/nx-annotation/src/public-api */ "../nx-annotation/src/public-api.ts");
/* harmony import */ var _bar_column_line__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bar-column-line */ "../nx-charts/src/lib/smart-charts/chart-types/bar-column-line.ts");


class NxBarDual extends _bar_column_line__WEBPACK_IMPORTED_MODULE_1__["NxBarColumnLine"] {
    constructor() {
        super(...arguments);
        this.chartType = projects_nx_annotation_src_public_api__WEBPACK_IMPORTED_MODULE_0__["ChartType"].BarDual;
        this.seriesType = 'bar';
    }
    getChartOptions(items) {
        let options = this.getOptions(items, 'yAxis', 'xAxis');
        return options;
    }
}


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
/* harmony import */ var _stacked_dual_100__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./stacked-dual-100 */ "../nx-charts/src/lib/smart-charts/chart-types/stacked-dual-100.ts");
/* harmony import */ var projects_nx_annotation_src_public_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! projects/nx-annotation/src/public-api */ "../nx-annotation/src/public-api.ts");


class NxBarStacked100 extends _stacked_dual_100__WEBPACK_IMPORTED_MODULE_0__["NxStackedDual100"] {
    constructor() {
        super(...arguments);
        this.chartType = projects_nx_annotation_src_public_api__WEBPACK_IMPORTED_MODULE_1__["ChartType"].BarStacked100;
    }
    getChartOptions(items) {
        let options = super.getStacked100(items, 'yAxis', 'bar');
        return options;
    }
}


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
/* harmony import */ var _stacked_dual_100__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./stacked-dual-100 */ "../nx-charts/src/lib/smart-charts/chart-types/stacked-dual-100.ts");
/* harmony import */ var projects_nx_annotation_src_public_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! projects/nx-annotation/src/public-api */ "../nx-annotation/src/public-api.ts");


class NxBarStackedDual100 extends _stacked_dual_100__WEBPACK_IMPORTED_MODULE_0__["NxStackedDual100"] {
    constructor() {
        super(...arguments);
        this.chartType = projects_nx_annotation_src_public_api__WEBPACK_IMPORTED_MODULE_1__["ChartType"].BarStackedDual100;
    }
    getChartOptions(items) {
        let options = super.getStacked100(items, 'yAxis', 'bar');
        return options;
    }
}


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
/* harmony import */ var _stacked_dual__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./stacked-dual */ "../nx-charts/src/lib/smart-charts/chart-types/stacked-dual.ts");
/* harmony import */ var projects_nx_annotation_src_public_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! projects/nx-annotation/src/public-api */ "../nx-annotation/src/public-api.ts");


class NxBarStackedDual extends _stacked_dual__WEBPACK_IMPORTED_MODULE_0__["NxStackedDual"] {
    constructor() {
        super(...arguments);
        this.chartType = projects_nx_annotation_src_public_api__WEBPACK_IMPORTED_MODULE_1__["ChartType"].BarStackedDual;
    }
    getChartOptions(items) {
        let options = super.getStacked(items, 'yAxis', 'bar');
        return options;
    }
}


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
/* harmony import */ var _stacked_dual__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./stacked-dual */ "../nx-charts/src/lib/smart-charts/chart-types/stacked-dual.ts");
/* harmony import */ var projects_nx_annotation_src_public_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! projects/nx-annotation/src/public-api */ "../nx-annotation/src/public-api.ts");


class NxBarStacked extends _stacked_dual__WEBPACK_IMPORTED_MODULE_0__["NxStackedDual"] {
    constructor() {
        super(...arguments);
        this.chartType = projects_nx_annotation_src_public_api__WEBPACK_IMPORTED_MODULE_1__["ChartType"].BarStacked;
    }
    getChartOptions(items) {
        let options = super.getStacked(items, 'yAxis', 'bar');
        return options;
    }
}


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
/* harmony import */ var _stacked_dual_100__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./stacked-dual-100 */ "../nx-charts/src/lib/smart-charts/chart-types/stacked-dual-100.ts");
/* harmony import */ var projects_nx_annotation_src_public_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! projects/nx-annotation/src/public-api */ "../nx-annotation/src/public-api.ts");


class NxColumnStacked100 extends _stacked_dual_100__WEBPACK_IMPORTED_MODULE_0__["NxStackedDual100"] {
    constructor() {
        super(...arguments);
        this.chartType = projects_nx_annotation_src_public_api__WEBPACK_IMPORTED_MODULE_1__["ChartType"].ColumnStacked100;
    }
    getChartOptions(items) {
        let options = super.getStacked100(items, 'xAxis', 'bar');
        return options;
    }
}


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
/* harmony import */ var _stacked_dual_100__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./stacked-dual-100 */ "../nx-charts/src/lib/smart-charts/chart-types/stacked-dual-100.ts");
/* harmony import */ var projects_nx_annotation_src_public_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! projects/nx-annotation/src/public-api */ "../nx-annotation/src/public-api.ts");


class NxColumnStackedDual100 extends _stacked_dual_100__WEBPACK_IMPORTED_MODULE_0__["NxStackedDual100"] {
    constructor() {
        super(...arguments);
        this.chartType = projects_nx_annotation_src_public_api__WEBPACK_IMPORTED_MODULE_1__["ChartType"].ColumnStackedDual100;
    }
    getChartOptions(items) {
        let options = super.getStacked100(items, 'xAxis', 'bar');
        return options;
    }
}


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
/* harmony import */ var projects_nx_annotation_src_public_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! projects/nx-annotation/src/public-api */ "../nx-annotation/src/public-api.ts");
/* harmony import */ var _stacked_dual__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stacked-dual */ "../nx-charts/src/lib/smart-charts/chart-types/stacked-dual.ts");


class NxColumnStackedDual extends _stacked_dual__WEBPACK_IMPORTED_MODULE_1__["NxStackedDual"] {
    constructor() {
        super(...arguments);
        this.chartType = projects_nx_annotation_src_public_api__WEBPACK_IMPORTED_MODULE_0__["ChartType"].ColumnStackedDual;
    }
    getChartOptions(items) {
        let options = super.getStacked(items, 'xAxis', 'bar');
        return options;
    }
}


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
/* harmony import */ var projects_nx_annotation_src_public_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! projects/nx-annotation/src/public-api */ "../nx-annotation/src/public-api.ts");
/* harmony import */ var _column_stacked_dual__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./column-stacked-dual */ "../nx-charts/src/lib/smart-charts/chart-types/column-stacked-dual.ts");


class NxColumnStacked extends _column_stacked_dual__WEBPACK_IMPORTED_MODULE_1__["NxColumnStackedDual"] {
    constructor() {
        super(...arguments);
        this.chartType = projects_nx_annotation_src_public_api__WEBPACK_IMPORTED_MODULE_0__["ChartType"].ColumnStacked;
    }
}


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
/* harmony import */ var _bar_column_line__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bar-column-line */ "../nx-charts/src/lib/smart-charts/chart-types/bar-column-line.ts");
/* harmony import */ var projects_nx_annotation_src_public_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! projects/nx-annotation/src/public-api */ "../nx-annotation/src/public-api.ts");


class NxColumn extends _bar_column_line__WEBPACK_IMPORTED_MODULE_0__["NxBarColumnLine"] {
    constructor() {
        super(...arguments);
        this.chartType = projects_nx_annotation_src_public_api__WEBPACK_IMPORTED_MODULE_1__["ChartType"].Column;
        this.seriesType = 'bar';
    }
    getChartOptions(items) {
        let options = super.getOptions(items, 'xAxis', 'yAxis');
        return options;
    }
}


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
/* harmony import */ var _smart_chart_type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./smart-chart-type */ "../nx-charts/src/lib/smart-charts/chart-types/smart-chart-type.ts");
/* harmony import */ var projects_nx_annotation_src_public_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! projects/nx-annotation/src/public-api */ "../nx-annotation/src/public-api.ts");


class NxCombinationStacked extends _smart_chart_type__WEBPACK_IMPORTED_MODULE_0__["NxSmartChartType"] {
    constructor() {
        super(...arguments);
        this.chartType = projects_nx_annotation_src_public_api__WEBPACK_IMPORTED_MODULE_1__["ChartType"].CombinationStacked;
        this.category = 'xAxis';
    }
    getChartOptions(items) {
        let options = {
            xAxis: {},
            yAxis: {},
            series: []
        };
        // 设置维度轴值
        options[this.category].type = 'category';
        options[this.category].data = this.getDimensionData(items);
        this.measures.forEach((measure, index) => {
            let role = this.getMeasureRole(measure) || 'Axis';
            let series = {
                id: measure,
                name: this.getPropertyLabel(measure),
                data: items.map(item => item[measure])
            };
            if (projects_nx_annotation_src_public_api__WEBPACK_IMPORTED_MODULE_1__["ChartMeasureRoleType"].Axis1 === role) {
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
    }
}


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
/* harmony import */ var _smart_chart_type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./smart-chart-type */ "../nx-charts/src/lib/smart-charts/chart-types/smart-chart-type.ts");
/* harmony import */ var projects_nx_annotation_src_public_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! projects/nx-annotation/src/public-api */ "../nx-annotation/src/public-api.ts");


class NxCombination extends _smart_chart_type__WEBPACK_IMPORTED_MODULE_0__["NxSmartChartType"] {
    constructor() {
        super(...arguments);
        this.chartType = projects_nx_annotation_src_public_api__WEBPACK_IMPORTED_MODULE_1__["ChartType"].Combination;
    }
    getChartOptions(items) {
        let options = {
            xAxis: {},
            yAxis: {},
            series: []
        };
        // 设置维度轴值
        options.xAxis.type = 'category';
        options.xAxis.data = this.getDimensionData(items);
        this.measures.forEach((measure, index) => {
            let role = this.getMeasureRole(measure);
            options.series.push({
                id: measure,
                name: this.getPropertyLabel(measure),
                type: projects_nx_annotation_src_public_api__WEBPACK_IMPORTED_MODULE_1__["ChartMeasureRoleType"].Axis1 === role ? 'line' : 'bar',
                data: items.map(item => item[measure])
            });
        });
        options.tooltip = this.getTooltip(items);
        return options;
    }
}


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
/* harmony import */ var projects_nx_annotation_src_public_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! projects/nx-annotation/src/public-api */ "../nx-annotation/src/public-api.ts");
/* harmony import */ var _pie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pie */ "../nx-charts/src/lib/smart-charts/chart-types/pie.ts");


class NxDonut extends _pie__WEBPACK_IMPORTED_MODULE_1__["NxPie"] {
    constructor() {
        super(...arguments);
        this.chartType = projects_nx_annotation_src_public_api__WEBPACK_IMPORTED_MODULE_0__["ChartType"].Donut;
    }
    getChartOptions(items) {
        let options = super.getChartOptions(items);
        return options;
    }
}


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
/* harmony import */ var _smart_chart_type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./smart-chart-type */ "../nx-charts/src/lib/smart-charts/chart-types/smart-chart-type.ts");
/* harmony import */ var projects_nx_annotation_src_public_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! projects/nx-annotation/src/public-api */ "../nx-annotation/src/public-api.ts");


class NxHeatMap extends _smart_chart_type__WEBPACK_IMPORTED_MODULE_0__["NxSmartChartType"] {
    constructor() {
        super(...arguments);
        this.chartType = projects_nx_annotation_src_public_api__WEBPACK_IMPORTED_MODULE_1__["ChartType"].HeatMap;
    }
    getChartOptions(items) {
        let options = {
            xAxis: {
                type: 'category',
            },
            yAxis: {
                type: 'category',
            },
            series: []
        };
        let dimension0 = this.getDimension(0);
        let dimension0Role = this.getDimensionRole(dimension0) || projects_nx_annotation_src_public_api__WEBPACK_IMPORTED_MODULE_1__["ChartDimensionRoleType"].Category;
        let dX, dY;
        if (projects_nx_annotation_src_public_api__WEBPACK_IMPORTED_MODULE_1__["ChartDimensionRoleType"].Category === dimension0Role) {
            options.xAxis.name = this.getPropertyLabel(dimension0) || dimension0;
            dX = dimension0;
        }
        if (projects_nx_annotation_src_public_api__WEBPACK_IMPORTED_MODULE_1__["ChartDimensionRoleType"].Category2 === dimension0Role) {
            options.yAxis.name = this.getPropertyLabel(dimension0) || dimension0;
            dY = dimension0;
        }
        let dimension1 = this.getDimension(1);
        let dimension1Role = this.getDimensionRole(dimension1) || projects_nx_annotation_src_public_api__WEBPACK_IMPORTED_MODULE_1__["ChartDimensionRoleType"].Category2;
        if (projects_nx_annotation_src_public_api__WEBPACK_IMPORTED_MODULE_1__["ChartDimensionRoleType"].Category === dimension1Role) {
            options.xAxis.name = this.getPropertyLabel(dimension1) || dimension1;
            dX = dimension1;
        }
        if (projects_nx_annotation_src_public_api__WEBPACK_IMPORTED_MODULE_1__["ChartDimensionRoleType"].Category2 === dimension1Role) {
            options.yAxis.name = this.getPropertyLabel(dimension1) || dimension1;
            dY = dimension1;
        }
        // select distinct values of dimension x
        let dataX = items.map(item => item[dX]).filter((v, i, a) => a.indexOf(v) === i);
        // select distinct values of dimension y
        let dataY = items.map(item => item[dY]).filter((v, i, a) => a.indexOf(v) === i);
        options.xAxis.data = dataX;
        options.yAxis.data = dataY;
        let measure = this.getMeasure();
        let maxSize = 0;
        let series = {
            name: this.getPropertyLabel(measure) || measure,
            type: 'heatmap',
        };
        series.data = items.map(item => {
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
    }
}


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
/* harmony import */ var _stacked_dual_100__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./stacked-dual-100 */ "../nx-charts/src/lib/smart-charts/chart-types/stacked-dual-100.ts");
/* harmony import */ var projects_nx_annotation_src_public_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! projects/nx-annotation/src/public-api */ "../nx-annotation/src/public-api.ts");


class NxHorizontalAreaStacked100 extends _stacked_dual_100__WEBPACK_IMPORTED_MODULE_0__["NxStackedDual100"] {
    constructor() {
        super(...arguments);
        this.chartType = projects_nx_annotation_src_public_api__WEBPACK_IMPORTED_MODULE_1__["ChartType"].HorizontalAreaStacked100;
    }
    getChartOptions(items) {
        let options = super.getStacked100(items, 'yAxis', 'line');
        options.series.forEach(element => {
            element.areaStyle = {};
        });
        return options;
    }
}


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
/* harmony import */ var _stacked_dual__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./stacked-dual */ "../nx-charts/src/lib/smart-charts/chart-types/stacked-dual.ts");
/* harmony import */ var projects_nx_annotation_src_public_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! projects/nx-annotation/src/public-api */ "../nx-annotation/src/public-api.ts");


class NxHorizontalAreaStacked extends _stacked_dual__WEBPACK_IMPORTED_MODULE_0__["NxStackedDual"] {
    constructor() {
        super(...arguments);
        this.chartType = projects_nx_annotation_src_public_api__WEBPACK_IMPORTED_MODULE_1__["ChartType"].HorizontalAreaStacked;
    }
    getChartOptions(items) {
        let options = super.getStacked(items, 'yAxis', 'line');
        options.series.forEach(element => {
            element.areaStyle = {};
        });
        return options;
    }
}


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
/* harmony import */ var _area_type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./area-type */ "../nx-charts/src/lib/smart-charts/chart-types/area-type.ts");
/* harmony import */ var projects_nx_annotation_src_public_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! projects/nx-annotation/src/public-api */ "../nx-annotation/src/public-api.ts");


class NxHorizontalArea extends _area_type__WEBPACK_IMPORTED_MODULE_0__["NxAreaType"] {
    constructor() {
        super(...arguments);
        this.chartType = projects_nx_annotation_src_public_api__WEBPACK_IMPORTED_MODULE_1__["ChartType"].HorizontalArea;
    }
    getChartOptions(items) {
        let options = super.getAreas(items, 'yAxis');
        return options;
    }
}


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
/* harmony import */ var _combination_stacked__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./combination-stacked */ "../nx-charts/src/lib/smart-charts/chart-types/combination-stacked.ts");
/* harmony import */ var projects_nx_annotation_src_public_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! projects/nx-annotation/src/public-api */ "../nx-annotation/src/public-api.ts");


class NxHorizontalCombinationStacked extends _combination_stacked__WEBPACK_IMPORTED_MODULE_0__["NxCombinationStacked"] {
    constructor() {
        super(...arguments);
        this.chartType = projects_nx_annotation_src_public_api__WEBPACK_IMPORTED_MODULE_1__["ChartType"].HorizontalCombinationStacked;
    }
    getChartOptions(items) {
        this.category = 'yAxis';
        let options = super.getChartOptions(items);
        return options;
    }
}


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
/* harmony import */ var projects_nx_annotation_src_public_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! projects/nx-annotation/src/public-api */ "../nx-annotation/src/public-api.ts");
/* harmony import */ var _waterfall__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./waterfall */ "../nx-charts/src/lib/smart-charts/chart-types/waterfall.ts");


class NxHorizontalWaterfall extends _waterfall__WEBPACK_IMPORTED_MODULE_1__["NxWaterfall"] {
    constructor() {
        super(...arguments);
        this.chartType = projects_nx_annotation_src_public_api__WEBPACK_IMPORTED_MODULE_0__["ChartType"].HorizontalWaterfall;
    }
}


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
/* harmony import */ var _line__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./line */ "../nx-charts/src/lib/smart-charts/chart-types/line.ts");
/* harmony import */ var projects_nx_annotation_src_public_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! projects/nx-annotation/src/public-api */ "../nx-annotation/src/public-api.ts");


class NxLineDual extends _line__WEBPACK_IMPORTED_MODULE_0__["NxLine"] {
    constructor() {
        super(...arguments);
        this.chartType = projects_nx_annotation_src_public_api__WEBPACK_IMPORTED_MODULE_1__["ChartType"].LineDual;
    }
    getChartOptions(items) {
        let options = super.getChartOptions(items);
        return options;
    }
}


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
/* harmony import */ var _bar_column_line__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bar-column-line */ "../nx-charts/src/lib/smart-charts/chart-types/bar-column-line.ts");
/* harmony import */ var projects_nx_annotation_src_public_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! projects/nx-annotation/src/public-api */ "../nx-annotation/src/public-api.ts");


class NxLine extends _bar_column_line__WEBPACK_IMPORTED_MODULE_0__["NxBarColumnLine"] {
    constructor() {
        super(...arguments);
        this.chartType = projects_nx_annotation_src_public_api__WEBPACK_IMPORTED_MODULE_1__["ChartType"].Line;
        this.seriesType = 'line';
    }
    getChartOptions(items) {
        let options = super.getOptions(items, 'xAxis', 'yAxis');
        return options;
    }
}


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
/* harmony import */ var _smart_chart_type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./smart-chart-type */ "../nx-charts/src/lib/smart-charts/chart-types/smart-chart-type.ts");
/* harmony import */ var projects_nx_annotation_src_public_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! projects/nx-annotation/src/public-api */ "../nx-annotation/src/public-api.ts");


class NxPie extends _smart_chart_type__WEBPACK_IMPORTED_MODULE_0__["NxSmartChartType"] {
    constructor() {
        super(...arguments);
        this.chartType = projects_nx_annotation_src_public_api__WEBPACK_IMPORTED_MODULE_1__["ChartType"].Pie;
    }
    getChartOptions(items) {
        let options = {
            tooltip: null,
            series: []
        };
        let series = {
            type: "pie",
            label: {}
        };
        if (this.chartType === projects_nx_annotation_src_public_api__WEBPACK_IMPORTED_MODULE_1__["ChartType"].Donut) {
            series.radius = ['30%', '60%'];
        }
        series.center = ['50%', '50%'];
        // Dimension Property
        let dimProperty = this.entityType.getProperty(this.getDimension());
        // Measures
        let measure = this.getMeasure();
        // let property = this.entityType.getProperty(measure);
        series.name = this.getPropertyLabel(measure);
        // 如果 dimension 有描述字段, 则设置 tooltip, legend 显示 label 
        if (dimProperty.SAPText) {
            series.label.formatter = (params) => items.find(item => item[dimProperty.Name] === params.name)[dimProperty.SAPText.Name];
        }
        series.data = items.map(item => ({
            name: item[dimProperty.Name],
            value: [item[measure], item]
        }));
        options.series.push(series);
        options.tooltip = this.getTooltip(items);
        options.legend = this.getLegend(items);
        return options;
    }
}


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
/* harmony import */ var _smart_chart_type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./smart-chart-type */ "../nx-charts/src/lib/smart-charts/chart-types/smart-chart-type.ts");
/* harmony import */ var projects_nx_annotation_src_public_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! projects/nx-annotation/src/public-api */ "../nx-annotation/src/public-api.ts");


class NxRadar extends _smart_chart_type__WEBPACK_IMPORTED_MODULE_0__["NxSmartChartType"] {
    constructor() {
        super(...arguments);
        this.chartType = projects_nx_annotation_src_public_api__WEBPACK_IMPORTED_MODULE_1__["ChartType"].Radar;
    }
    getChartOptions(items) {
        let options = {
            radar: {
                // radius: '60%',
                splitNumber: 8,
            },
            series: []
        };
        options.radar.indicator = this.measures.map(measure => {
            let property = this.getPropertyLabel(measure);
            return {
                name: property || measure
            };
        });
        let series = {
            name: 'Radar',
            type: 'radar',
            symbolSize: 0,
            data: []
        };
        series.data = items.map(item => ({
            name: this.getDimension(),
            value: this.measures.map(measure => item[measure])
        }));
        options.series.push(series);
        return options;
    }
}


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
/* harmony import */ var projects_nx_annotation_src_public_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! projects/nx-annotation/src/public-api */ "../nx-annotation/src/public-api.ts");
/* harmony import */ var _bar_column_line__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bar-column-line */ "../nx-charts/src/lib/smart-charts/chart-types/bar-column-line.ts");


class NxScatter extends _bar_column_line__WEBPACK_IMPORTED_MODULE_1__["NxBarColumnLine"] {
    constructor() {
        super(...arguments);
        this.chartType = projects_nx_annotation_src_public_api__WEBPACK_IMPORTED_MODULE_0__["ChartType"].Scatter;
        this.seriesType = 'scatter';
    }
    getChartOptions(items) {
        let options = super.getOptions(items, 'xAxis', 'yAxis');
        return options;
    }
}


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

class NxSmartChartType {
    constructor(entityType, chartAnnotation) {
        this.entityType = entityType;
        this.chartAnnotation = chartAnnotation;
        this.legendVisible = true;
        this.dimensions = chartAnnotation.getDimensions();
        this.measures = chartAnnotation.getMeasures();
        this.categoryType = projects_nx_annotation_src_public_api__WEBPACK_IMPORTED_MODULE_0__["ChartDimensionRoleType"].Series === this.getDimensionRole() ? 'time' : 'category';
    }
    getDimensionData(items) {
        let dimension = this.getDimension();
        let dimensionType = this.getDimensionRole(dimension);
        // 设置维度轴值
        // if (dimensionType === ChartDimensionRoleType.Series) {
        //     return items.map(item => [item[dimension].getFullYear(), item[dimension].getMonth() + 1, item[dimension].getDate()].join('/'))
        // }
        return items.map(item => item[dimension]);
    }
    getSeries(items) { }
    getDimension(i = 0) {
        return this.dimensions[i];
    }
    getDimensionRole(name) {
        name = name || this.getDimension();
        let dimensionAttributes = this.chartAnnotation.chartDefinition.DimensionAttributes;
        if (dimensionAttributes) {
            let dimensionAttribute = dimensionAttributes.find(attr => attr.Dimension === name);
            return dimensionAttribute ? dimensionAttribute.Role : projects_nx_annotation_src_public_api__WEBPACK_IMPORTED_MODULE_0__["ChartDimensionRoleType"].Category;
        }
        // 默认 Category
        return projects_nx_annotation_src_public_api__WEBPACK_IMPORTED_MODULE_0__["ChartDimensionRoleType"].Category;
    }
    getMeasure(i = 0) {
        return this.measures[i];
    }
    getMeasureRole(name) {
        if (!this.chartAnnotation.chartDefinition.MeasureAttributes) {
            console.error("Should provide MeasureAttributes for %s", this.chartAnnotation.qualifier);
            return;
        }
        let measureAttribute = this.chartAnnotation.chartDefinition.MeasureAttributes.find(attr => attr.Measure === name);
        if (measureAttribute) {
            return measureAttribute.Role;
        }
        return '';
    }
    getPropertyLabel(name) {
        return this.entityType.getProperty(name).SAPLabel;
    }
    getProperty(name) {
        return this.entityType.getProperty(name);
    }
    getTooltip(items, unit = '') {
        let tooltip = {};
        // Dimension Property
        let dimProperty = this.entityType.getProperty(this.getDimension());
        tooltip.formatter = (params) => {
            let texts = [];
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
                texts.push(params.filter(param => param.value !== '-' && param.seriesName !== NxSmartChartType.AUXILIARY_SERIES_NAME)
                    .map(param => {
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
                texts.push(`${params.seriesName}: ${(Array.isArray(params.value) ? (params.componentType === 'series' ? abbreviateNumber(params.value[1]) : abbreviateNumber(params.value[0])) : abbreviateNumber(params.value))}${unit}`);
                if (params.percent) {
                    texts.push(params.percent + '%');
                }
            }
            return texts.join('<br>');
        };
        return tooltip;
    }
    setCategoryAxisLabel(category, items) {
        // 暂时只支持一个 dimension
        let property = this.getProperty(this.getDimension());
        category.axisLabel = category.axisLabel || {};
        category.axisLabel.formatter =
            (value, index) => {
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
                (value, index) => {
                    let date = new Date(value);
                    return [date.getFullYear(), date.getMonth() + 1, date.getDate()].join('/');
                };
        }
    }
    getMeasureLabelFormater() {
        return abbreviateNumber;
    }
    getLegend(items) {
        let legend = {
            show: this.legendVisible,
            data: items.map(item => item[this.getDimension()])
        };
        let dimProperty = this.getProperty(this.getDimension());
        if (dimProperty && dimProperty.SAPText) {
            legend.formatter = (name) => {
                return items.find(item => item[dimProperty.Name] === name)[dimProperty.SAPText.Name];
            };
        }
        return legend;
    }
    setCategoryAxisPointerLabel(category, items) {
        // 暂时只支持一个 dimension
        let property = this.getProperty(this.getDimension());
        category.axisPointer = category.axisPointer || {};
        category.axisPointer.label = category.axisPointer.label || {};
        category.axisPointer.label.formatter = (params) => {
            // TODO
            if (params.seriesData[0]) {
                let index = params.seriesData[0].dataIndex;
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
    }
}
NxSmartChartType.AUXILIARY_SERIES_NAME = 'Auxiliary';
NxSmartChartType.DATA_ZOOM_SUITABLE_SIZE = 20;
/**
 * 数字格式化函数，单位 K M B T KT
 *
 * @param value
 */
function abbreviateNumber(value) {
    let newValue = Math.abs(value).toFixed(0);
    if (Math.abs(value) >= 1000) {
        let suffixes = ["", "K", "M", "B", "T", "KT"];
        let suffixNum = Math.floor((("" + newValue).length - 1) / 3);
        let shortValue;
        for (let precision = 2; precision >= 1; precision--) {
            shortValue = parseFloat((suffixNum != 0 ? (value / Math.pow(1000, suffixNum)) : value).toPrecision(precision));
            let dotLessShortValue = (shortValue + '').replace(/[^a-zA-Z 0-9]+/g, '');
            if (dotLessShortValue.length <= 2) {
                break;
            }
        }
        if (shortValue % 1 != 0) {
            let shortNum = shortValue.toFixed(1);
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
/* harmony import */ var _smart_chart_type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./smart-chart-type */ "../nx-charts/src/lib/smart-charts/chart-types/smart-chart-type.ts");

class NxStackedDual100 extends _smart_chart_type__WEBPACK_IMPORTED_MODULE_0__["NxSmartChartType"] {
    getStacked100(items, category, seriesType) {
        let options = {
            xAxis: {},
            yAxis: {},
            series: []
        };
        options[category].type = 'category';
        options[category].data = this.getDimensionData(items);
        let roles = {};
        this.measures.forEach((measure, index) => {
            let role = this.getMeasureRole(measure);
            options.series.push({
                id: measure,
                name: this.getPropertyLabel(measure),
                type: seriesType,
                stack: 'Stacked' + role,
                data: []
            });
            roles[role] = roles[role] || [];
            roles[role].push(measure);
        });
        items.map(item => {
            Object.keys(roles).forEach(key => {
                let total = roles[key].reduce((previousValue, measure) => previousValue + Number(item[measure]), 0);
                roles[key].forEach((measure) => {
                    options.series.find(series => series.id === measure).data.push(Number(item[measure]) / total * 100);
                });
            });
        });
        options.tooltip = this.getTooltip(items, '%');
        // options.dataZoom = this.getDataZoomOptions(category, options.series);
        return options;
    }
    getSeries(items) {
        throw new Error("Method not implemented.");
    }
}


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
/* harmony import */ var _smart_chart_type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./smart-chart-type */ "../nx-charts/src/lib/smart-charts/chart-types/smart-chart-type.ts");

class NxStackedDual extends _smart_chart_type__WEBPACK_IMPORTED_MODULE_0__["NxSmartChartType"] {
    getStacked(items, category, seriesType) {
        let options = {
            xAxis: {},
            yAxis: {},
            series: []
        };
        options[category].type = 'category';
        options[category].data = this.getDimensionData(items);
        this.measures.forEach((measure, index) => {
            let role = this.getMeasureRole(measure) || 'Axis1';
            options.series.push({
                name: this.getPropertyLabel(measure),
                type: seriesType,
                stack: role,
                data: items.map(item => item[measure])
            });
        });
        options.tooltip = this.getTooltip(items);
        // options.dataZoom = this.getDataZoomOptions(category, options.series);
        return options;
    }
}


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
/* harmony import */ var projects_nx_annotation_src_public_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! projects/nx-annotation/src/public-api */ "../nx-annotation/src/public-api.ts");

class NxTimeline {
    constructor(subChartType, timeline) {
        this.subChartType = subChartType;
        this.timeline = timeline;
        this.chartType = projects_nx_annotation_src_public_api__WEBPACK_IMPORTED_MODULE_0__["ChartType"].Timeline;
        this.legendVisible = true;
    }
    getChartOptions(items) {
        let category = [...new Set(items.map((item) => item[this.subChartType.getDimension()]))];
        let groups = groupBy(items, this.timeline);
        let options = {
            baseOption: Object.assign({ timeline: {
                    axisType: 'category',
                    autoPlay: true,
                    playInterval: 1000,
                } }, this.subChartType.getChartOptions(groups[Object.keys(groups)[0]]))
        };
        options.baseOption.xAxis.data = category;
        options.baseOption.timeline.data = Object.keys(groups);
        options.options = options.baseOption.timeline.data.map(key => {
            return {
                series: this.subChartType.getSeries(groups[key])
            };
        });
        return options;
    }
}
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
/* harmony import */ var _smart_chart_type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./smart-chart-type */ "../nx-charts/src/lib/smart-charts/chart-types/smart-chart-type.ts");
/* harmony import */ var projects_nx_annotation_src_public_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! projects/nx-annotation/src/public-api */ "../nx-annotation/src/public-api.ts");


class NxTreeMap extends _smart_chart_type__WEBPACK_IMPORTED_MODULE_0__["NxSmartChartType"] {
    constructor() {
        super(...arguments);
        this.chartType = projects_nx_annotation_src_public_api__WEBPACK_IMPORTED_MODULE_1__["ChartType"].TreeMap;
    }
    getChartOptions(items) {
        let options = {
            series: []
        };
        let series = {
            type: 'treemap',
            data: []
        };
        series.data = items.map(item => {
            return {
                name: item[this.getDimension()],
                value: item[this.getMeasure()]
            };
        });
        options.series.push(series);
        options.tooltip = this.getTooltip(items);
        return options;
    }
}


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
/* harmony import */ var _smart_chart_type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./smart-chart-type */ "../nx-charts/src/lib/smart-charts/chart-types/smart-chart-type.ts");
/* harmony import */ var projects_nx_annotation_src_public_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! projects/nx-annotation/src/public-api */ "../nx-annotation/src/public-api.ts");


class NxWaterfall extends _smart_chart_type__WEBPACK_IMPORTED_MODULE_0__["NxSmartChartType"] {
    constructor() {
        super(...arguments);
        this.chartType = projects_nx_annotation_src_public_api__WEBPACK_IMPORTED_MODULE_1__["ChartType"].Waterfall;
    }
    getChartOptions(items) {
        let options = {
            series: []
        };
        let category, value;
        switch (this.chartType) {
            case projects_nx_annotation_src_public_api__WEBPACK_IMPORTED_MODULE_1__["ChartType"].Waterfall:
                category = 'xAxis';
                value = 'yAxis';
                break;
            case projects_nx_annotation_src_public_api__WEBPACK_IMPORTED_MODULE_1__["ChartType"].HorizontalWaterfall:
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
    }
    getSeries(items) {
        let measureProperty = this.getProperty(this.getMeasure());
        let auxiliary = {
            name: _smart_chart_type__WEBPACK_IMPORTED_MODULE_0__["NxSmartChartType"].AUXILIARY_SERIES_NAME,
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
        let increase = {
            name: measureProperty.SAPLabel,
            type: 'bar',
            stack: '总量',
            data: []
        };
        let decline = {
            name: '-' + measureProperty.SAPLabel,
            type: 'bar',
            stack: '总量',
            data: []
        };
        let series = [];
        // 2. Auxiliary hide bar
        items.reduce((pre, item) => {
            let measure = Number(item[this.getMeasure()]);
            auxiliary.data.push(measure >= 0 ? pre : pre + measure);
            return pre + measure;
        }, 0);
        series.push(auxiliary);
        // 3. Increase and Decline bars
        increase.data = items.map(item => item[this.measures[0]] >= 0 ? item[this.measures[0]] : '-');
        decline.data = items.map(item => item[this.measures[0]] < 0 ? -item[this.measures[0]] : '-');
        series.push(increase);
        series.push(decline);
        return series;
    }
}


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var projects_nx_annotation_src_public_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! projects/nx-annotation/src/public-api */ "../nx-annotation/src/public-api.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _nx_charts_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../nx-charts.service */ "../nx-charts/src/lib/nx-charts.service.ts");
/* harmony import */ var _nx_chart__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../nx-chart */ "../nx-charts/src/lib/nx-chart/index.ts");
/* harmony import */ var _chart_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./chart-types */ "../nx-charts/src/lib/smart-charts/chart-types/index.ts");
/* harmony import */ var _core_model_filter__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../core/model/filter */ "../nx-charts/src/lib/core/model/filter.ts");









let NxSmartChartsComponent = class NxSmartChartsComponent {
    constructor(uiAnnotationFactory, cd, chartService) {
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
    ngOnInit() {
        this.chartService.onRefresh()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.destroy$), 
        // 用户自定义数据流时不刷新
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(() => !this.data$), 
        // Chart Name 相同才刷新
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])((name) => !name || name === this.chartName)).subscribe(() => {
            this.refresh();
        });
        if (this.filters) {
            this.filters.onChange().subscribe(filters => {
                this.refresh();
            });
        }
        this.onRender$ = (!!this.data$ ? Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["merge"])(this.chartData$, this.data$) : this.chartData$)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["delayWhen"])(() => this.getChartAnnotation()), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((data) => {
            // TODO DEBUGGING
            // if(!data) {
            //   console.warn(data)
            // }
            // Step 1. call after sorters
            if (this.settings.afterSorters) {
                data.sort((a, b) => {
                    let sort = this.settings.afterSorters.map(sort => {
                        sort = sort.trim().replace(/\s\s*/g, " ");
                        return {
                            Property: sort.split(' ')[0],
                            Descending: sort.split(' ')[1]
                        };
                    })
                        .find(sort => a[sort.Property] !== b[sort.Property]);
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
            if (this.settings.afterFilters) {
                if (typeof this.settings.afterFilters === 'function') {
                    data = data.filter(this.settings.afterFilters);
                }
            }
            return data;
        }));
    }
    ngOnChanges(changes) {
        if (changes['settings'] && changes['settings'].currentValue) {
            console.log('on smart charts settings changed');
            this.onEntitySetChange();
        }
    }
    ngAfterViewInit() {
        // Views 初始化后再发起数据调用
        if (!this.data$) {
            this.getChartData();
        }
    }
    refresh(filters) {
        // this.chartComponent.clear();
        this.getChartData(filters);
    }
    onEntitySetChange() {
        this.annotationService = this.uiAnnotationFactory.newUIAnnotationService(this.settings);
        this.odataService = this.annotationService.getODataService();
    }
    getChartAnnotation() {
        if (this.entityType) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])([this.entityType, this.chartAnnotation]);
        }
        else {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["combineLatest"])(this.annotationService.getEntityType(), this.annotationService.getAnnotation(this.settings.chartAnnotationPath))
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(([entityType, chart]) => {
                this.entityType = entityType;
                this.chartAnnotation = chart;
                // 用户页面自定义 ChartType 优先级高于 Annotation 配置
                // this.chartType = this.chartType || chart.getChartType();
                this.dimensions = chart.getDimensions();
                this.measures = chart.getMeasures();
                this.dimensionAttributes = chart.chartDefinition.DimensionAttributes;
                this.properties = this.dimensions.map(dimension => entityType.getProperty(dimension));
                // Custom Chart Type
                this.customChartType = this.setCustomChartType(chart.getChartType());
                // Push sync attributes
                this.cd.detectChanges();
            }));
        }
    }
    getChartData(filters) {
        // Step 0. call get data with before fetch function
        this.annotationService.getChartWithData(((options) => {
            this.beforeFetch && this.beforeFetch(options);
            if (this.timeline) {
                options.selects.push(this.timeline);
            }
            if (this.filters && this.filters.getFilterString()) {
                options.filterString = options.filterString ? `(${options.filterString}) and ${this.filters.getFilterString()}` :
                    this.filters.getFilterString();
            }
        }).bind(this))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(([entityType, chart, data]) => {
            let chartData = { entityType: entityType, chartAnnotation: chart, chartData: data };
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["iif"])(() => !this.settings.auxiliary, Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(chartData), Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["combineLatest"])((this.settings.auxiliary || []).map((settings) => {
                settings._annotationService = settings._annotationService || this.uiAnnotationFactory.newUIAnnotationService(settings);
                return settings._annotationService.getAnnotationWithData(settings.beforeFetch)
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((data) => {
                    return Object.assign({ name: settings.name }, data);
                }));
            })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((auxiliary) => {
                let chartData = {
                    entityType: entityType,
                    chartAnnotation: chart,
                    chartData: data,
                    auxiliary: auxiliary
                };
                return chartData;
            })));
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((chartWithData) => {
            let data = chartWithData.chartData;
            // Step 1. call (after fetch function)
            if (this.settings.afterFetch) {
                data = this.settings.afterFetch(chartWithData);
            }
            return data;
        }))
            .subscribe((data) => {
            // Push async data
            this.chartData$.next(data);
        });
    }
    setCustomChartType(chartType) {
        let customChartType;
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
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _nx_chart_nx_chart_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../nx-chart/nx-chart.module */ "../nx-charts/src/lib/nx-chart/nx-chart.module.ts");
/* harmony import */ var _smart_charts_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./smart-charts.component */ "../nx-charts/src/lib/smart-charts/smart-charts.component.ts");





let NxSmartChartsModule = class NxSmartChartsModule {
};
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var projects_nx_annotation_src_public_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! projects/nx-annotation/src/public-api */ "../nx-annotation/src/public-api.ts");




/**
 * The `SmartFilterBar` control uses the OData metadata of an entity in order to create a FilterBar.
 * Whether a field is visible on the FilterBar, supports type-ahead and value help, for example, is automatically determined. When you use control configurations and group configurations it is possible to configure the FilterBar and adapt it according to your needs.
 *
 * ### Tag Input Component for Angular
 * https://github.com/Gbuomprisco/ngx-chips
 *
 */
let NxSmartFilterBarComponent = class NxSmartFilterBarComponent {
    constructor(uiAnnotationFactory) {
        this.uiAnnotationFactory = uiAnnotationFactory;
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]().group({});
    }
    ngOnInit() {
        let annotationService = this.uiAnnotationFactory.newUIAnnotationService({ entitySet: this.entitySet });
        annotationService.getAnnotation('com.sap.vocabularies.UI.v1.SelectionFields')
            .subscribe((selection) => {
            console.log(selection.getPropertyPaths());
            this.selectionFields = selection.getPropertyPaths();
            selection.getPropertyPaths().forEach(property => {
                this.form.addControl(property, new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]([]));
            });
        });
    }
    onSubmit() {
        // TODO: Use EventEmitter with form value
        console.warn(this.form.value);
    }
    /**
     * Methods from [`sap.ui.comp.smartfilterbar.SmartFilterBar`](https://sapui5.hana.ondemand.com/#/api/sap.ui.comp.smartfilterbar.SmartFilterBar)
     *
     */
    getFilterData() {
    }
    getFilterDataAsString() {
    }
    getFilters() {
        return null;
    }
    getFiltersWithValues() {
    }
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _nebular_eva_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nebular/eva-icons */ "../../node_modules/@nebular/eva-icons/fesm2015/index.js");
/* harmony import */ var ngx_chips__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-chips */ "../../node_modules/ngx-chips/fesm2015/ngx-chips.js");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @nebular/theme */ "../../node_modules/@nebular/theme/fesm2015/index.js");
/* harmony import */ var _smart_filter_bar_smart_filter_bar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./smart-filter-bar/smart-filter-bar.component */ "../nx-charts/src/lib/smart-filter/smart-filter-bar/smart-filter-bar.component.ts");
/* harmony import */ var _smart_filter_smart_filter_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./smart-filter/smart-filter.component */ "../nx-charts/src/lib/smart-filter/smart-filter/smart-filter.component.ts");
/* harmony import */ var _value_help_dialog_value_help_dialog_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./value-help-dialog/value-help-dialog.component */ "../nx-charts/src/lib/smart-filter/value-help-dialog/value-help-dialog.component.ts");
/* harmony import */ var _core_pipes_keys_pipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../core/pipes/keys.pipe */ "../nx-charts/src/lib/core/pipes/keys.pipe.ts");
/* harmony import */ var _core_pipes_entries_pipe__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../core/pipes/entries.pipe */ "../nx-charts/src/lib/core/pipes/entries.pipe.ts");












const ENTRY_COMPONENTS = [
    _value_help_dialog_value_help_dialog_component__WEBPACK_IMPORTED_MODULE_9__["NxValueHelpDialogComponent"]
];
let NxSmartFilterModule = class NxSmartFilterModule {
};
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
        entryComponents: [
            ...ENTRY_COMPONENTS,
        ],
        exports: [
            _smart_filter_bar_smart_filter_bar_component__WEBPACK_IMPORTED_MODULE_7__["NxSmartFilterBarComponent"],
            _smart_filter_smart_filter_component__WEBPACK_IMPORTED_MODULE_8__["NxSmartFilterComponent"],
            _value_help_dialog_value_help_dialog_component__WEBPACK_IMPORTED_MODULE_9__["NxValueHelpDialogComponent"]
        ]
    })
], NxSmartFilterModule);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nebular/theme */ "../../node_modules/@nebular/theme/fesm2015/index.js");
/* harmony import */ var _value_help_dialog_value_help_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../value-help-dialog/value-help-dialog.component */ "../nx-charts/src/lib/smart-filter/value-help-dialog/value-help-dialog.component.ts");




let NxSmartFilterComponent = class NxSmartFilterComponent {
    constructor(dialogService) {
        this.dialogService = dialogService;
    }
    ngOnInit() {
    }
    onValueHelp(event) {
        this.dialogService.open(_value_help_dialog_value_help_dialog_component__WEBPACK_IMPORTED_MODULE_3__["NxValueHelpDialogComponent"], {
            context: {
                control: this.control
            }
        })
            .onClose.subscribe(name => console.log(name));
    }
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nebular/theme */ "../../node_modules/@nebular/theme/fesm2015/index.js");
/* harmony import */ var _core_model_filter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/model/filter */ "../nx-charts/src/lib/core/model/filter.ts");




/**
 * The ValueHelpDialog component can be used to implement a value help for an input field.
 */
let NxValueHelpDialogComponent = class NxValueHelpDialogComponent {
    constructor(ref) {
        this.ref = ref;
        this.conditions = {
            includes: [],
            excludes: []
        };
        this.filterOperators = _core_model_filter__WEBPACK_IMPORTED_MODULE_3__["FilterOperator"];
    }
    ngOnInit() {
        this.conditions.includes.push(new _core_model_filter__WEBPACK_IMPORTED_MODULE_3__["Filter"]({
            path: this.control,
            operator: _core_model_filter__WEBPACK_IMPORTED_MODULE_3__["FilterOperator"].EQ
        }));
        this.conditions.excludes.push(new _core_model_filter__WEBPACK_IMPORTED_MODULE_3__["Filter"]({
            path: this.control,
            operator: _core_model_filter__WEBPACK_IMPORTED_MODULE_3__["FilterOperator"].EQ
        }));
    }
    addCondition(includes) {
        includes.push(new _core_model_filter__WEBPACK_IMPORTED_MODULE_3__["Filter"]({
            path: this.control,
            operator: _core_model_filter__WEBPACK_IMPORTED_MODULE_3__["FilterOperator"].EQ
        }));
    }
    cancel() {
        this.ref.close();
    }
    submit() {
        this.ref.close(this.conditions);
    }
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");


let NxSmartTableComponent = class NxSmartTableComponent {
    constructor() { }
    ngOnInit() {
    }
};
NxSmartTableComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'nx-smart-table',
        template: __webpack_require__(/*! raw-loader!./smart-table.component.html */ "../../node_modules/raw-loader/index.js!../nx-charts/src/lib/smart-table/smart-table.component.html"),
        styles: [__webpack_require__(/*! ./smart-table.component.scss */ "../nx-charts/src/lib/smart-table/smart-table.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], NxSmartTableComponent);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _smart_table_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./smart-table.component */ "../nx-charts/src/lib/smart-table/smart-table.component.ts");




let NxSmartTableModule = class NxSmartTableModule {
};
NxSmartTableModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_smart_table_component__WEBPACK_IMPORTED_MODULE_3__["NxSmartTableComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
        ],
        exports: [_smart_table_component__WEBPACK_IMPORTED_MODULE_3__["NxSmartTableComponent"]]
    })
], NxSmartTableModule);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nebular/theme */ "../../node_modules/@nebular/theme/fesm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm2015/index.js");





let HeaderComponent = class HeaderComponent {
    constructor(sidebarService, menuService, themeService, breakpointService) {
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
    ngOnInit() {
        this.currentTheme = this.themeService.currentTheme;
        const { xl } = this.breakpointService.getBreakpointsMap();
        this.themeService.onMediaQueryChange()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(([, currentBreakpoint]) => currentBreakpoint.width < xl), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.destroy$))
            .subscribe((isLessThanXl) => this.userPictureOnly = isLessThanXl);
        this.themeService.onThemeChange()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(({ name }) => name), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.destroy$))
            .subscribe(themeName => this.currentTheme = themeName);
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
    changeTheme(themeName) {
        this.themeService.changeTheme(themeName);
    }
    toggleSidebar() {
        this.sidebarService.toggle(true, 'menu-sidebar');
        // this.layoutService.changeLayoutSize();
        return false;
    }
    navigateHome() {
        this.menuService.navigateHome();
        return false;
    }
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
const palette = {
    primary: '#73a1ff',
    success: '#5dcfe3',
    info: '#ba7fec',
    warning: '#ffa36b',
    danger: '#ff6b83',
};
const theme = {
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
const CORPORATE_THEME = {
    name: 'corporate',
    variables: Object.assign({}, theme, { temperature: {
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
const palette = {
    primary: '#a16eff',
    success: '#00d68f',
    info: '#0095ff',
    warning: '#ffaa00',
    danger: '#ff3d71',
};
const theme = {
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
const COSMIC_THEME = {
    name: 'cosmic',
    variables: Object.assign({}, theme, { temperature: {
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
const palette = {
    primary: '#3366ff',
    success: '#00d68f',
    info: '#0095ff',
    warning: '#ffaa00',
    danger: '#ff3d71',
};
const theme = {
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
const chartTheme = {
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
const DARK_THEME = {
    name: 'dark',
    variables: Object.assign({}, theme, { kpi1: {
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
const palette = {
    primary: '#4ea397',
    success: '#00d68f',
    info: '#0095ff',
    warning: '#ffaa00',
    danger: '#ff3d71',
};
const theme = {
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
const chartTheme = {
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
const DEFAULT_THEME = {
    name: 'default',
    chartTheme: chartTheme,
    variables: Object.assign({}, theme, { kpi1: {
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var echarts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! echarts */ "../../node_modules/echarts/index.js");
/* harmony import */ var echarts__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(echarts__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nebular/theme */ "../../node_modules/@nebular/theme/fesm2015/index.js");
/* harmony import */ var _nebular_eva_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @nebular/eva-icons */ "../../node_modules/@nebular/eva-icons/fesm2015/index.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components */ "./src/app/@theme/components/index.ts");
/* harmony import */ var _styles_theme_default__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./styles/theme.default */ "./src/app/@theme/styles/theme.default.ts");
/* harmony import */ var _styles_theme_dark__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./styles/theme.dark */ "./src/app/@theme/styles/theme.dark.ts");
/* harmony import */ var _styles_theme_cosmic__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./styles/theme.cosmic */ "./src/app/@theme/styles/theme.cosmic.ts");
/* harmony import */ var _styles_theme_corporate__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./styles/theme.corporate */ "./src/app/@theme/styles/theme.corporate.ts");

var ThemeModule_1;










// echarts.registerTheme('default', DEFAULT_THEME.chartTheme);
echarts__WEBPACK_IMPORTED_MODULE_3__["registerTheme"](_styles_theme_default__WEBPACK_IMPORTED_MODULE_7__["DEFAULT_THEME"].name, _styles_theme_default__WEBPACK_IMPORTED_MODULE_7__["DEFAULT_THEME"].chartTheme);
echarts__WEBPACK_IMPORTED_MODULE_3__["registerTheme"](_styles_theme_dark__WEBPACK_IMPORTED_MODULE_8__["DARK_THEME"].name, _styles_theme_dark__WEBPACK_IMPORTED_MODULE_8__["DARK_THEME"].chartTheme);
const NB_MODULES = [
    _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbMenuModule"],
    _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbThemeModule"],
    _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbLayoutModule"],
    _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbSidebarModule"],
    _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbSelectModule"],
    _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbButtonModule"],
    _nebular_eva_icons__WEBPACK_IMPORTED_MODULE_5__["NbEvaIconsModule"],
    _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbIconModule"]
];
let ThemeModule = ThemeModule_1 = class ThemeModule {
    static forRoot() {
        return {
            ngModule: ThemeModule_1,
            providers: [
                ..._nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbThemeModule"].forRoot({
                    name: 'default',
                }, [_styles_theme_default__WEBPACK_IMPORTED_MODULE_7__["DEFAULT_THEME"], _styles_theme_cosmic__WEBPACK_IMPORTED_MODULE_9__["COSMIC_THEME"], _styles_theme_corporate__WEBPACK_IMPORTED_MODULE_10__["CORPORATE_THEME"], _styles_theme_dark__WEBPACK_IMPORTED_MODULE_8__["DARK_THEME"]]).providers,
            ],
        };
    }
};
ThemeModule = ThemeModule_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_components__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], ...NB_MODULES
        ],
        exports: [_components__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"]]
    })
], ThemeModule);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nebular/theme */ "../../node_modules/@nebular/theme/fesm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var projects_nx_charts_src_public_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! projects/nx-charts/src/public-api */ "../nx-charts/src/public-api.ts");






let AppComponent = class AppComponent {
    constructor(nbThemeService, chartThemeService) {
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
    ngOnInit() {
        this.nbThemeService.onThemeChange()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(({ name }) => name), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.destroy$))
            .subscribe(themeName => {
            this.chartThemeService.changeTheme(themeName);
        });
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "../../node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "../../node_modules/@fortawesome/angular-fontawesome/fesm2015/angular-fontawesome.js");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @nebular/theme */ "../../node_modules/@nebular/theme/fesm2015/index.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var angular_odata_es5__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! angular-odata-es5 */ "../../node_modules/angular-odata-es5/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "../../node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var projects_nx_annotation_src_public_api__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! projects/nx-annotation/src/public-api */ "../nx-annotation/src/public-api.ts");
/* harmony import */ var projects_nx_charts_src_public_api__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! projects/nx-charts/src/public-api */ "../nx-charts/src/public-api.ts");
/* harmony import */ var _http_interceptor__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./http-interceptor */ "./src/app/http-interceptor.ts");
/* harmony import */ var _mock_http_interceptor_mock__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./mock/http-interceptor.mock */ "./src/app/mock/http-interceptor.mock.ts");
/* harmony import */ var _theme_theme_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./@theme/theme.module */ "./src/app/@theme/theme.module.ts");
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/service-worker */ "../../node_modules/@angular/service-worker/fesm2015/service-worker.js");
















const isMock = _environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].mock;
let manifest = new projects_nx_annotation_src_public_api__WEBPACK_IMPORTED_MODULE_10__["ManifestService"]({
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
const routes = [
    // {
    //   path: '',
    //   redirectTo: 'chart-without-annotation',
    //   pathMatch: 'full'
    // },
    {
        path: '',
        loadChildren: () => __webpack_require__.e(/*! import() | pages-pages-module */ "pages-pages-module").then(__webpack_require__.bind(null, /*! ./pages/pages.module */ "./src/app/pages/pages.module.ts"))
            .then(m => m.PagesModule),
    },
];
let AppModule = class AppModule {
};
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");


let HttpRequestInterceptor = class HttpRequestInterceptor {
    constructor(injector) {
        this.injector = injector;
    }
    intercept(request, next) {
        console.log('Hollow interceptor' + request.url);
        return next.handle(request);
    }
};
HttpRequestInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]])
], HttpRequestInterceptor);



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
/* harmony default export */ __webpack_exports__["default"] = (`<?xml version="1.0" encoding="utf-8"?>
<edmx:Edmx Version="1.0" xmlns:edmx="http://schemas.microsoft.com/ado/2007/06/edmx" xmlns:m="http://schemas.microsoft.com/ado/2007/08/dataservices/metadata" xmlns:sap="http://www.sap.com/Protocols/SAPData">
    <edmx:Reference Uri="http://mifod.mioffice.cn:8000/sap/opu/odata/IWFND/CATALOGSERVICE;v=2/Vocabularies(TechnicalName='%2FIWBEP%2FVOC_COMMON',Version='0001',SAP__Origin='LOCAL')/$value" xmlns:edmx="http://docs.oasis-open.org/odata/ns/edmx">
        <edmx:Include Namespace="com.sap.vocabularies.Common.v1" Alias="Common"/>
    </edmx:Reference>
    <edmx:DataServices m:DataServiceVersion="2.0">
        <Schema Namespace="SEPMRA_SO_ANA" xml:lang="zh" sap:schema-version="1" xmlns="http://schemas.microsoft.com/ado/2008/09/edm">
            <EntityType Name="SEPMRA_C_ALP_CalendarMonthVHType" sap:label="Calendar Month" sap:content-version="1">
                <Key>
                    <PropertyRef Name="CalendarMonth"/>
                </Key>
                <Property Name="CalendarMonth" Type="Edm.String" Nullable="false" MaxLength="2" sap:display-format="NonNegative" sap:text="CalendarMonthT" sap:label="月" sap:quickinfo="月份数"/>
                <Property Name="CalendarQuarter" Type="Edm.String" MaxLength="1" sap:display-format="NonNegative" sap:label="Quarter" sap:quickinfo="Fiori Reference Apps: Calendar Quarter"/>
                <Property Name="CalendarMonthT" Type="Edm.String" MaxLength="10" sap:attribute-for="CalendarMonth" sap:label="Month Name"/>
                <NavigationProperty Name="to_CalendarQuarterValueHelp" Relationship="SEPMRA_SO_ANA.assoc_6A305E0CADE2F498031EE29B6954C326" FromRole="FromRole_assoc_6A305E0CADE2F498031EE29B6954C326" ToRole="ToRole_assoc_6A305E0CADE2F498031EE29B6954C326"/>
            </EntityType>
            <EntityType Name="SEPMRA_C_ALP_CalendarQuarterVHType" sap:label="Calendar Quarter" sap:content-version="1">
                <Key>
                    <PropertyRef Name="CalendarQuarter"/>
                </Key>
                <Property Name="CalendarQuarter" Type="Edm.String" Nullable="false" MaxLength="1" sap:display-format="NonNegative" sap:text="CalendarQuarterT" sap:label="Quarter" sap:quickinfo="Fiori Reference Apps: Calendar Quarter"/>
                <Property Name="CalendarQuarterT" Type="Edm.String" MaxLength="60" sap:attribute-for="CalendarQuarter" sap:display-format="UpperCase" sap:label="Quarter Text"/>
            </EntityType>
            <EntityType Name="SEPMRA_C_ALP_CountryVHType" sap:label="Country" sap:content-version="1">
                <Key>
                    <PropertyRef Name="Country"/>
                </Key>
                <Property Name="Country" Type="Edm.String" Nullable="false" MaxLength="3" sap:display-format="UpperCase" sap:text="CountryT" sap:label="国家/地区代码"/>
                <Property Name="CountryT" Type="Edm.String" MaxLength="50" sap:attribute-for="Country" sap:label="Name"/>
            </EntityType>
            <EntityType Name="SEPMRA_C_ALP_CustomerType" sap:label="Customer" sap:content-version="1">
                <Key>
                    <PropertyRef Name="Customer"/>
                </Key>
                <Property Name="Customer" Type="Edm.String" Nullable="false" MaxLength="10" sap:display-format="UpperCase" sap:text="CompanyName" sap:label="Customer" sap:quickinfo="EPM: Customer ID"/>
                <Property Name="CompanyName" Type="Edm.String" MaxLength="80" sap:label="Company" sap:quickinfo="EPM: Company Name"/>
                <Property Name="EmailAddress" Type="Edm.String" MaxLength="255" sap:label="Email" sap:quickinfo="EPM: E-Mail Address"/>
                <Property Name="FaxNumber" Type="Edm.String" MaxLength="30" sap:display-format="UpperCase" sap:label="Fax" sap:quickinfo="EPM: Fax Number"/>
                <Property Name="PhoneNumber" Type="Edm.String" MaxLength="30" sap:display-format="UpperCase" sap:label="Phone" sap:quickinfo="EPM: Phone Number"/>
                <Property Name="URL" Type="Edm.String" sap:label="Web Site" sap:quickinfo="EPM: Web Address"/>
                <Property Name="Address" Type="Edm.String" MaxLength="176" sap:display-format="UpperCase" sap:label="Address" sap:quickinfo="Full Address"/>
            </EntityType>
            <EntityType Name="SEPMRA_C_ALP_CustomerVHType" sap:label="Customer" sap:content-version="1">
                <Key>
                    <PropertyRef Name="Customer"/>
                </Key>
                <Property Name="Customer" Type="Edm.String" Nullable="false" MaxLength="10" sap:display-format="UpperCase" sap:text="CompanyName" sap:label="Business Partner ID" sap:quickinfo="EPM: Business Partner ID" sap:creatable="false" sap:updatable="false"/>
                <Property Name="CompanyName" Type="Edm.String" MaxLength="80" sap:label="Company" sap:quickinfo="EPM: Company Name"/>
                <Property Name="Country" Type="Edm.String" MaxLength="3" sap:display-format="UpperCase" sap:label="Country" sap:quickinfo="EPM: Country Code" sap:value-list="standard"/>
                <NavigationProperty Name="to_CountryVH" Relationship="SEPMRA_SO_ANA.assoc_0E573EE23C96A3093FAC7C0B5CCBE09B" FromRole="FromRole_assoc_0E573EE23C96A3093FAC7C0B5CCBE09B" ToRole="ToRole_assoc_0E573EE23C96A3093FAC7C0B5CCBE09B"/>
            </EntityType>
            <EntityType Name="SEPMRA_C_ALP_ProductType" sap:label="Product" sap:content-version="1">
                <Key>
                    <PropertyRef Name="Product"/>
                </Key>
                <Property Name="Product" Type="Edm.String" Nullable="false" MaxLength="10" sap:display-format="UpperCase" sap:text="ProductName" sap:label="Product" sap:quickinfo="Product ID"/>
                <Property Name="ProductName" Type="Edm.String" MaxLength="255" sap:attribute-for="Product" sap:label="Name" sap:quickinfo="Product Name"/>
                <Property Name="ProductDescription" Type="Edm.String" MaxLength="255" sap:attribute-for="Product" sap:label="Description" sap:quickinfo="Product Description"/>
                <Property Name="Price" Type="Edm.Decimal" Precision="16" Scale="3" sap:unit="Currency" sap:label="Price per Unit" sap:quickinfo="Fiori Reference Apps: Product Unit Price"/>
                <Property Name="Currency" Type="Edm.String" MaxLength="5" sap:text="Currency_T" sap:label="Currency" sap:semantics="currency-code"/>
                <Property Name="Currency_T" Type="Edm.String" MaxLength="40" sap:attribute-for="Currency" sap:label="长文本"/>
                <Property Name="AverageRatingValue" Type="Edm.Decimal" Precision="4" Scale="2" sap:label="Average Rating" sap:quickinfo="EPM: Review Rating Average"/>
                <Property Name="Depth" Type="Edm.Decimal" Precision="13" Scale="3" sap:unit="DimensionUnit" sap:label="Depth" sap:quickinfo="EPM: Depth"/>
                <Property Name="Width" Type="Edm.Decimal" Precision="13" Scale="3" sap:unit="DimensionUnit" sap:label="Width" sap:quickinfo="EPM: Width"/>
                <Property Name="Height" Type="Edm.Decimal" Precision="13" Scale="3" sap:unit="DimensionUnit" sap:label="Height" sap:quickinfo="EPM: Height"/>
                <Property Name="DimensionUnit" Type="Edm.String" MaxLength="3" sap:text="DimensionUnit_T" sap:label="Dimension Unit" sap:quickinfo="EPM: Dimension Unit" sap:semantics="unit-of-measure"/>
                <Property Name="DimensionUnit_T" Type="Edm.String" MaxLength="10" sap:attribute-for="DimensionUnit" sap:label="度量单位文本" sap:quickinfo="度量单位文本(最多10个字符)"/>
                <Property Name="ProductCategory" Type="Edm.String" MaxLength="40" sap:label="Sub-Category" sap:quickinfo="Product Sub-Category"/>
                <Property Name="MainProductCategory" Type="Edm.String" MaxLength="40" sap:label="Category" sap:quickinfo="Product Category"/>
                <Property Name="ProductValueAddedTax" Type="Edm.Byte" sap:text="ProductValueAddedTax_T" sap:label="Tax Tariff Code" sap:quickinfo="EPM: Product Tax Tariff Code"/>
                <Property Name="ProductValueAddedTax_T" Type="Edm.String" MaxLength="60" sap:attribute-for="ProductValueAddedTax" sap:label="简短描述" sap:quickinfo="固定值的短文本"/>
                <Property Name="ProductPictureURL" Type="Edm.String" MaxLength="255" sap:display-format="UpperCase" sap:label="Image" sap:quickinfo="Image of the product"/>
                <Property Name="Supplier" Type="Edm.String" MaxLength="10" sap:display-format="UpperCase" sap:label="Supplier" sap:quickinfo="Supplier ID"/>
                <Property Name="Weight" Type="Edm.Decimal" Precision="13" Scale="3" sap:unit="WeightUnit" sap:label="Weight" sap:quickinfo="EPM: Weight Measure"/>
                <Property Name="WeightUnit" Type="Edm.String" MaxLength="3" sap:text="WeightUnit_T" sap:label="Weight Unit" sap:semantics="unit-of-measure"/>
                <Property Name="WeightUnit_T" Type="Edm.String" MaxLength="10" sap:attribute-for="WeightUnit" sap:label="度量单位文本" sap:quickinfo="度量单位文本(最多10个字符)"/>
            </EntityType>
            <EntityType Name="SEPMRA_C_ALP_ProductCatVHType" sap:label="Product Sub-Category" sap:content-version="1">
                <Key>
                    <PropertyRef Name="ProductCategory"/>
                </Key>
                <Property Name="ProductCategory" Type="Edm.String" Nullable="false" MaxLength="40" sap:label="Sub-Category" sap:quickinfo="Product Sub-Category"/>
                <Property Name="MainProductCategory" Type="Edm.String" MaxLength="40" sap:label="Category" sap:quickinfo="Product Category" sap:value-list="fixed-values"/>
                <NavigationProperty Name="to_MainProductCategoryVH" Relationship="SEPMRA_SO_ANA.assoc_49DF252B14DB4991642B42F92648C080" FromRole="FromRole_assoc_49DF252B14DB4991642B42F92648C080" ToRole="ToRole_assoc_49DF252B14DB4991642B42F92648C080"/>
            </EntityType>
            <EntityType Name="SEPMRA_C_ALP_ProductMainCatVHType" sap:label="Product Category" sap:content-version="1">
                <Key>
                    <PropertyRef Name="MainProductCategory"/>
                </Key>
                <Property Name="MainProductCategory" Type="Edm.String" Nullable="false" MaxLength="40" sap:label="Category" sap:quickinfo="Product Category"/>
            </EntityType>
            <EntityType Name="SEPMRA_C_ALP_ProductVHType" sap:label="Product" sap:content-version="1">
                <Key>
                    <PropertyRef Name="Product"/>
                </Key>
                <Property Name="Product" Type="Edm.String" Nullable="false" MaxLength="10" sap:display-format="UpperCase" sap:text="ProductName" sap:label="Product" sap:quickinfo="Product ID"/>
                <Property Name="ProductName" Type="Edm.String" MaxLength="255" sap:attribute-for="Product" sap:label="Name" sap:quickinfo="Product Name"/>
                <Property Name="ProductDescription" Type="Edm.String" MaxLength="255" sap:attribute-for="Product" sap:label="Description" sap:quickinfo="Product Description"/>
                <Property Name="ProductCategory" Type="Edm.String" MaxLength="40" sap:label="Sub-Category" sap:quickinfo="Product Sub-Category" sap:value-list="standard"/>
                <Property Name="MainProductCategory" Type="Edm.String" MaxLength="40" sap:label="Category" sap:quickinfo="Product Category" sap:value-list="fixed-values"/>
                <NavigationProperty Name="to_MainProductCategoryVH" Relationship="SEPMRA_SO_ANA.assoc_DB43C90AEF2C3FCFA3EA21DDF85E5E81" FromRole="FromRole_assoc_DB43C90AEF2C3FCFA3EA21DDF85E5E81" ToRole="ToRole_assoc_DB43C90AEF2C3FCFA3EA21DDF85E5E81"/>
                <NavigationProperty Name="to_ProductCategoryVH" Relationship="SEPMRA_SO_ANA.assoc_630AE5653296F05CFE57BEBF29F4A237" FromRole="FromRole_assoc_630AE5653296F05CFE57BEBF29F4A237" ToRole="ToRole_assoc_630AE5653296F05CFE57BEBF29F4A237"/>
            </EntityType>
            <EntityType Name="SEPMRA_C_ALP_QuantityUnitVHType" sap:label="Quantity Unit" sap:content-version="1">
                <Key>
                    <PropertyRef Name="UnitOfMeasure"/>
                </Key>
                <Property Name="UnitOfMeasure" Type="Edm.String" Nullable="false" MaxLength="3" sap:text="UnitOfMeasureT" sap:label="Quantity Unit" sap:semantics="unit-of-measure"/>
                <Property Name="UnitOfMeasureT" Type="Edm.String" MaxLength="6" sap:attribute-for="UnitOfMeasure" sap:label="Name"/>
            </EntityType>
            <EntityType Name="SEPMRA_C_ALP_SalesOrderType" sap:label="Sales Order" sap:content-version="1">
                <Key>
                    <PropertyRef Name="SalesOrder"/>
                </Key>
                <Property Name="SalesOrder" Type="Edm.String" Nullable="false" MaxLength="10" sap:display-format="UpperCase" sap:label="Sales Order ID" sap:quickinfo="EPM: Sales Order Number" sap:creatable="false" sap:updatable="false"/>
                <Property Name="Customer" Type="Edm.String" MaxLength="10" sap:display-format="UpperCase" sap:text="to_Customer/CompanyName" sap:label="Customer" sap:quickinfo="EPM: Customer ID" sap:value-list="standard"/>
                <Property Name="NetAmountInTransactionCurrency" Type="Edm.Decimal" Precision="16" Scale="3" sap:unit="TransactionCurrency" sap:label="Net Amount" sap:quickinfo="EPM: Total Net Amount"/>
                <Property Name="TransactionCurrency" Type="Edm.String" MaxLength="5" sap:text="TransactionCurrency_T" sap:label="Currency Code" sap:quickinfo="EPM: Currency Code" sap:semantics="currency-code"/>
                <Property Name="TransactionCurrency_T" Type="Edm.String" MaxLength="15" sap:attribute-for="TransactionCurrency" sap:label="短文本"/>
                <Property Name="SalesOrderOverallStatus" Type="Edm.String" MaxLength="1" sap:display-format="UpperCase" sap:text="SalesOrderOverallStatus_T" sap:label="Overall Status" sap:quickinfo="EPM: Sales Order Overall Status"/>
                <Property Name="SalesOrderOverallStatus_T" Type="Edm.String" MaxLength="60" sap:attribute-for="SalesOrderOverallStatus" sap:label="简短描述" sap:quickinfo="固定值的短文本"/>
                <Property Name="CreationDateTime" Type="Edm.DateTimeOffset" Precision="7" sap:label="Created At" sap:quickinfo="EPM: Created At" sap:creatable="false" sap:updatable="false"/>
                <Property Name="CreatedByUser" Type="Edm.String" MaxLength="12" sap:display-format="UpperCase" sap:label="Created By" sap:quickinfo="EPM: Created By User" sap:value-list="standard"/>
                <Property Name="LastChangedDateTime" Type="Edm.DateTimeOffset" Precision="7" sap:label="Changed At" sap:quickinfo="EPM: Changed At" sap:creatable="false" sap:updatable="false"/>
                <Property Name="LastChangedByUser" Type="Edm.String" MaxLength="12" sap:display-format="UpperCase" sap:label="Last Changed By" sap:quickinfo="EPM: Last Changed By User" sap:value-list="standard"/>
                <NavigationProperty Name="to_CreatedByUser" Relationship="SEPMRA_SO_ANA.assoc_2147FD6D4D5D8F564F40B05369AD26BC" FromRole="FromRole_assoc_2147FD6D4D5D8F564F40B05369AD26BC" ToRole="ToRole_assoc_2147FD6D4D5D8F564F40B05369AD26BC"/>
                <NavigationProperty Name="to_Customer" Relationship="SEPMRA_SO_ANA.assoc_99F50847A843041C6EACDE98C9A6690C" FromRole="FromRole_assoc_99F50847A843041C6EACDE98C9A6690C" ToRole="ToRole_assoc_99F50847A843041C6EACDE98C9A6690C"/>
                <NavigationProperty Name="to_Items" Relationship="SEPMRA_SO_ANA.assoc_4B7F44C128E6D1B4FBEB759C293CF5D5" FromRole="FromRole_assoc_4B7F44C128E6D1B4FBEB759C293CF5D5" ToRole="ToRole_assoc_4B7F44C128E6D1B4FBEB759C293CF5D5"/>
                <NavigationProperty Name="to_LastChangedByUser" Relationship="SEPMRA_SO_ANA.assoc_D6B8C833B81F95BE4482A9709964DFEF" FromRole="FromRole_assoc_D6B8C833B81F95BE4482A9709964DFEF" ToRole="ToRole_assoc_D6B8C833B81F95BE4482A9709964DFEF"/>
            </EntityType>
            <EntityType Name="SEPMRA_C_ALP_SalesOrderItemType" sap:label="Sales Order Item" sap:content-version="1">
                <Key>
                    <PropertyRef Name="SalesOrder"/>
                    <PropertyRef Name="SalesOrderItem"/>
                </Key>
                <Property Name="SalesOrder" Type="Edm.String" Nullable="false" MaxLength="10" sap:display-format="UpperCase" sap:label="Sales Order ID" sap:quickinfo="EPM: Sales Order Number" sap:creatable="false" sap:updatable="false" sap:value-list="standard"/>
                <Property Name="SalesOrderItem" Type="Edm.String" Nullable="false" MaxLength="10" sap:display-format="UpperCase" sap:label="Item Position" sap:quickinfo="EPM: Sales Order Item Position"/>
                <Property Name="Product" Type="Edm.String" MaxLength="10" sap:display-format="UpperCase" sap:text="to_Product/ProductName" sap:label="Product ID" sap:quickinfo="EPM: Product ID" sap:value-list="standard"/>
                <Property Name="Quantity" Type="Edm.Decimal" Precision="13" Scale="3" sap:unit="QuantityUnit" sap:label="Quantity" sap:quickinfo="EPM: Quantity"/>
                <Property Name="QuantityUnit" Type="Edm.String" MaxLength="3" sap:text="QuantityUnit_T" sap:label="Unit of Measure" sap:quickinfo="EPM: Quantity Unit" sap:semantics="unit-of-measure"/>
                <Property Name="QuantityUnit_T" Type="Edm.String" MaxLength="10" sap:attribute-for="QuantityUnit" sap:label="度量单位文本" sap:quickinfo="度量单位文本(最多10个字符)"/>
                <Property Name="NetAmountInTransactionCurrency" Type="Edm.Decimal" Precision="16" Scale="3" sap:unit="TransactionCurrency" sap:label="Net Amount" sap:quickinfo="EPM: Total Net Amount"/>
                <Property Name="TransactionCurrency" Type="Edm.String" MaxLength="5" sap:text="TransactionCurrency_T" sap:label="Currency Code" sap:quickinfo="EPM: Currency Code" sap:semantics="currency-code"/>
                <Property Name="TransactionCurrency_T" Type="Edm.String" MaxLength="15" sap:attribute-for="TransactionCurrency" sap:label="短文本"/>
                <Property Name="DeliveryDate" Type="Edm.DateTime" Precision="0" sap:display-format="Date" sap:label="Delivery Date"/>
                <NavigationProperty Name="to_SalesOrder" Relationship="SEPMRA_SO_ANA.assoc_4B7F44C128E6D1B4FBEB759C293CF5D5" FromRole="ToRole_assoc_4B7F44C128E6D1B4FBEB759C293CF5D5" ToRole="FromRole_assoc_4B7F44C128E6D1B4FBEB759C293CF5D5"/>
                <NavigationProperty Name="to_Product" Relationship="SEPMRA_SO_ANA.assoc_E04DBC188394E718489B8003D3546C60" FromRole="FromRole_assoc_E04DBC188394E718489B8003D3546C60" ToRole="ToRole_assoc_E04DBC188394E718489B8003D3546C60"/>
            </EntityType>
            <EntityType Name="SEPMRA_C_ALP_SlsOrdItemCubeType" sap:semantics="aggregate" sap:label="Sales Analysis" sap:content-version="1">
                <Key>
                    <PropertyRef Name="ID"/>
                </Key>
                <Property Name="ID" Type="Edm.String" Nullable="false" sap:sortable="false" sap:filterable="false"/>
                <Property Name="SalesOrder" Type="Edm.String" MaxLength="10" sap:aggregation-role="dimension" sap:display-format="UpperCase" sap:label="Sales Order" sap:quickinfo="Sales Order ID" sap:creatable="false" sap:updatable="false"/>
                <Property Name="SalesOrderItem" Type="Edm.String" MaxLength="10" sap:aggregation-role="dimension" sap:display-format="UpperCase" sap:label="Sales Order Item" sap:quickinfo="Sales Order Item ID"/>
                <Property Name="DeliveryCalendarDate" Type="Edm.DateTime" Precision="0" sap:aggregation-role="dimension" sap:display-format="Date" sap:label="Delivery Date"/>
                <Property Name="DeliveryCalendarYear" Type="Edm.String" MaxLength="4" sap:aggregation-role="dimension" sap:display-format="NonNegative" sap:label="Delivery Year" sap:quickinfo="Delivery Calendar Year"/>
                <Property Name="DeliveryCalendarQuarter" Type="Edm.String" MaxLength="1" sap:aggregation-role="dimension" sap:display-format="NonNegative" sap:text="DeliveryCalendarQuarterT" sap:label="Delivery Quarter" sap:quickinfo="Delivery Calendar Quarter" sap:value-list="fixed-values"/>
                <Property Name="DeliveryCalendarQuarterT" Type="Edm.String" MaxLength="60" sap:attribute-for="DeliveryCalendarQuarter" sap:display-format="UpperCase" sap:label="Quarter Text"/>
                <Property Name="DeliveryCalendarMonth" Type="Edm.String" MaxLength="2" sap:aggregation-role="dimension" sap:display-format="NonNegative" sap:text="DeliveryCalendarMonthT" sap:label="Delivery Month" sap:quickinfo="Delivery Calendar Month" sap:value-list="fixed-values"/>
                <Property Name="DeliveryCalendarMonthT" Type="Edm.String" MaxLength="10" sap:attribute-for="DeliveryCalendarMonth" sap:label="Month Name"/>
                <Property Name="Product" Type="Edm.String" MaxLength="10" sap:aggregation-role="dimension" sap:display-format="UpperCase" sap:text="ProductName" sap:label="Product" sap:quickinfo="Product ID" sap:value-list="standard"/>
                <Property Name="ProductName" Type="Edm.String" MaxLength="255" sap:attribute-for="Product" sap:label="Product Name"/>
                <Property Name="NetProductPrice" Type="Edm.Decimal" Precision="16" Scale="3" sap:aggregation-role="measure" sap:unit="Currency" sap:label="Net Product Price" sap:quickinfo="Net product unit price in local currency" sap:filterable="false"/>
                <Property Name="ProductCategory" Type="Edm.String" MaxLength="40" sap:aggregation-role="dimension" sap:label="Sub-Category" sap:quickinfo="Product Sub-Category" sap:value-list="standard"/>
                <Property Name="MainProductCategory" Type="Edm.String" MaxLength="40" sap:aggregation-role="dimension" sap:label="Category" sap:quickinfo="Product Category" sap:value-list="fixed-values"/>
                <Property Name="SalesOrderOverallStatus" Type="Edm.String" MaxLength="1" sap:aggregation-role="dimension" sap:display-format="UpperCase" sap:text="SalesOrderOverallStatusT" sap:label="Status" sap:quickinfo="Sales Order Overall Status" sap:value-list="fixed-values"/>
                <Property Name="SalesOrderOverallStatusT" Type="Edm.String" MaxLength="60" sap:attribute-for="SalesOrderOverallStatus" sap:label="Status Name" sap:quickinfo="Sales Order Overall Status Name"/>
                <Property Name="SoldToParty" Type="Edm.String" MaxLength="10" sap:aggregation-role="dimension" sap:display-format="UpperCase" sap:text="SoldToPartyCompanyName" sap:label="Customer" sap:quickinfo="Customer ID" sap:creatable="false" sap:updatable="false" sap:value-list="standard"/>
                <Property Name="SoldToPartyCompanyName" Type="Edm.String" MaxLength="80" sap:attribute-for="SoldToParty" sap:label="Customer Company Name"/>
                <Property Name="SoldToPartyCountry" Type="Edm.String" MaxLength="3" sap:aggregation-role="dimension" sap:display-format="UpperCase" sap:text="SoldToPartyCountryName" sap:label="Customer Country" sap:quickinfo="Customer Country Code" sap:value-list="standard"/>
                <Property Name="SoldToPartyCountryName" Type="Edm.String" MaxLength="50" sap:attribute-for="SoldToPartyCountry" sap:label="Customer Country Name"/>
                <Property Name="Supplier" Type="Edm.String" MaxLength="10" sap:aggregation-role="dimension" sap:display-format="UpperCase" sap:text="SupplierCompanyName" sap:label="Supplier" sap:quickinfo="Supplier ID" sap:value-list="standard"/>
                <Property Name="SupplierCompanyName" Type="Edm.String" MaxLength="80" sap:attribute-for="Supplier" sap:display-format="UpperCase" sap:label="Supplier Company Name"/>
                <Property Name="GrossAmount" Type="Edm.Decimal" Precision="16" Scale="3" sap:aggregation-role="measure" sap:unit="Currency" sap:label="Gross Revenue" sap:filterable="false"/>
                <Property Name="NetAmount" Type="Edm.Decimal" Precision="16" Scale="3" sap:aggregation-role="measure" sap:unit="Currency" sap:label="Revenue" sap:filterable="false"/>
                <Property Name="TaxAmount" Type="Edm.Decimal" Precision="16" Scale="3" sap:aggregation-role="measure" sap:unit="Currency" sap:label="Tax Amount" sap:quickinfo="Total Tax Amount" sap:filterable="false"/>
                <Property Name="Currency" Type="Edm.String" MaxLength="5" sap:aggregation-role="dimension" sap:text="CurrencyT" sap:label="Currency" sap:semantics="currency-code"/>
                <Property Name="CurrencyT" Type="Edm.String" MaxLength="15" sap:attribute-for="Currency" sap:label="Currency Name"/>
                <Property Name="Quantity" Type="Edm.Decimal" Precision="13" Scale="3" sap:aggregation-role="measure" sap:unit="QuantityUnit" sap:label="Quantity" sap:filterable="false"/>
                <Property Name="QuantityUnit" Type="Edm.String" MaxLength="3" sap:aggregation-role="dimension" sap:text="QuantityUnitT" sap:label="Quantity Unit" sap:value-list="standard" sap:semantics="unit-of-measure"/>
                <Property Name="QuantityUnitT" Type="Edm.String" MaxLength="10" sap:attribute-for="QuantityUnit" sap:label="Quantity Unit" sap:quickinfo="Quantity Unit Name"/>
                <Property Name="NumberOfSalesOrders" Type="Edm.Int32" sap:aggregation-role="measure" sap:label="Number of Sales Orders" sap:filterable="false"/>
                <NavigationProperty Name="to_DeliveryCalendarMonthVH" Relationship="SEPMRA_SO_ANA.assoc_CDBAA5445CC6436F766463B411A2ADE1" FromRole="FromRole_assoc_CDBAA5445CC6436F766463B411A2ADE1" ToRole="ToRole_assoc_CDBAA5445CC6436F766463B411A2ADE1"/>
                <NavigationProperty Name="to_DeliveryCalendarQuarterVH" Relationship="SEPMRA_SO_ANA.assoc_44AD4821FA12A0B31C9A64EEA032576F" FromRole="FromRole_assoc_44AD4821FA12A0B31C9A64EEA032576F" ToRole="ToRole_assoc_44AD4821FA12A0B31C9A64EEA032576F"/>
                <NavigationProperty Name="to_MainProductCategoryVH" Relationship="SEPMRA_SO_ANA.assoc_E8E86917BEA26518501FD4C56198E1D5" FromRole="FromRole_assoc_E8E86917BEA26518501FD4C56198E1D5" ToRole="ToRole_assoc_E8E86917BEA26518501FD4C56198E1D5"/>
                <NavigationProperty Name="to_Product" Relationship="SEPMRA_SO_ANA.assoc_2959EE88F6126CEC0198FD82F13EE7B8" FromRole="FromRole_assoc_2959EE88F6126CEC0198FD82F13EE7B8" ToRole="ToRole_assoc_2959EE88F6126CEC0198FD82F13EE7B8"/>
                <NavigationProperty Name="to_ProductCategoryVH" Relationship="SEPMRA_SO_ANA.assoc_0202D085D5ABC5A04F1F575BE66CC19A" FromRole="FromRole_assoc_0202D085D5ABC5A04F1F575BE66CC19A" ToRole="ToRole_assoc_0202D085D5ABC5A04F1F575BE66CC19A"/>
                <NavigationProperty Name="to_ProductVH" Relationship="SEPMRA_SO_ANA.assoc_F30285851321D6DF741814A90DCBBD6B" FromRole="FromRole_assoc_F30285851321D6DF741814A90DCBBD6B" ToRole="ToRole_assoc_F30285851321D6DF741814A90DCBBD6B"/>
                <NavigationProperty Name="to_QuantityUnitVH" Relationship="SEPMRA_SO_ANA.assoc_BF9622AA982AE949940F97513DFB557D" FromRole="FromRole_assoc_BF9622AA982AE949940F97513DFB557D" ToRole="ToRole_assoc_BF9622AA982AE949940F97513DFB557D"/>
                <NavigationProperty Name="to_SalesOrder" Relationship="SEPMRA_SO_ANA.assoc_33F6F629FB14F2FA9AD65F093B6F6520" FromRole="FromRole_assoc_33F6F629FB14F2FA9AD65F093B6F6520" ToRole="ToRole_assoc_33F6F629FB14F2FA9AD65F093B6F6520"/>
                <NavigationProperty Name="to_SalesOrderItem" Relationship="SEPMRA_SO_ANA.assoc_FE16A495275A3BA7D195403FB549001C" FromRole="FromRole_assoc_FE16A495275A3BA7D195403FB549001C" ToRole="ToRole_assoc_FE16A495275A3BA7D195403FB549001C"/>
                <NavigationProperty Name="to_SalesOrderStatusVH" Relationship="SEPMRA_SO_ANA.assoc_BC200480E7165A31E2AED126B06BCDDD" FromRole="FromRole_assoc_BC200480E7165A31E2AED126B06BCDDD" ToRole="ToRole_assoc_BC200480E7165A31E2AED126B06BCDDD"/>
                <NavigationProperty Name="to_SoldToPartyCountryVH" Relationship="SEPMRA_SO_ANA.assoc_701179D1D39E3A1A90BD9B1DB7917409" FromRole="FromRole_assoc_701179D1D39E3A1A90BD9B1DB7917409" ToRole="ToRole_assoc_701179D1D39E3A1A90BD9B1DB7917409"/>
                <NavigationProperty Name="to_SoldToPartyVH" Relationship="SEPMRA_SO_ANA.assoc_2130FCDE0E937D66D99AC66FC2654E95" FromRole="FromRole_assoc_2130FCDE0E937D66D99AC66FC2654E95" ToRole="ToRole_assoc_2130FCDE0E937D66D99AC66FC2654E95"/>
                <NavigationProperty Name="to_SupplierVH" Relationship="SEPMRA_SO_ANA.assoc_C4446EA00E4F4A459961108B42EB4372" FromRole="FromRole_assoc_C4446EA00E4F4A459961108B42EB4372" ToRole="ToRole_assoc_C4446EA00E4F4A459961108B42EB4372"/>
            </EntityType>
            <EntityType Name="SEPMRA_C_ALP_SlsOrdStatusVHType" sap:label="Sales Order Status" sap:content-version="1">
                <Key>
                    <PropertyRef Name="SalesOrderOverallStatus"/>
                </Key>
                <Property Name="SalesOrderOverallStatus" Type="Edm.String" Nullable="false" MaxLength="1" sap:display-format="UpperCase" sap:text="SalesOrderOverallStatus_Text" sap:label="Overall Status" sap:quickinfo="EPM: Sales Order Overall Status"/>
                <Property Name="SalesOrderOverallStatus_Text" Type="Edm.String" MaxLength="60" sap:label="简短描述" sap:quickinfo="固定值的短文本" sap:creatable="false" sap:updatable="false"/>
            </EntityType>
            <EntityType Name="SEPMRA_C_ALP_SupplierVHType" sap:label="Supplier" sap:content-version="1">
                <Key>
                    <PropertyRef Name="Supplier"/>
                </Key>
                <Property Name="Supplier" Type="Edm.String" Nullable="false" MaxLength="10" sap:display-format="UpperCase" sap:text="CompanyName" sap:label="Supplier" sap:quickinfo="Supplier ID" sap:creatable="false" sap:updatable="false"/>
                <Property Name="CompanyName" Type="Edm.String" MaxLength="80" sap:display-format="UpperCase" sap:label="Supplier Name"/>
            </EntityType>
            <EntityType Name="SEPMRA_C_ALP_TotalSalesKPIType" sap:semantics="aggregate" sap:label="Total Sales" sap:content-version="1">
                <Key>
                    <PropertyRef Name="ID"/>
                </Key>
                <Property Name="ID" Type="Edm.String" Nullable="false" sap:sortable="false" sap:filterable="false"/>
                <Property Name="DeliveryCalendarYear" Type="Edm.String" MaxLength="4" sap:aggregation-role="dimension" sap:display-format="NonNegative" sap:label="Delivery Year" sap:quickinfo="Delivery Calendar Year"/>
                <Property Name="DeliveryCalendarQuarter" Type="Edm.String" MaxLength="1" sap:aggregation-role="dimension" sap:display-format="NonNegative" sap:text="DeliveryCalendarQuarterT" sap:label="Delivery Quarter" sap:quickinfo="Delivery Calendar Quarter"/>
                <Property Name="DeliveryCalendarQuarterT" Type="Edm.String" MaxLength="60" sap:attribute-for="DeliveryCalendarQuarter" sap:display-format="UpperCase" sap:label="Quarter Text"/>
                <Property Name="NetAmount" Type="Edm.Decimal" Precision="16" Scale="3" sap:aggregation-role="measure" sap:unit="Currency" sap:label="Net Amount" sap:quickinfo="EPM: Total Net Amount" sap:filterable="false"/>
                <Property Name="KPIRevenue" Type="Edm.Decimal" Precision="16" Scale="3" sap:aggregation-role="measure" sap:unit="Currency" sap:label="Net Amount" sap:quickinfo="EPM: Total Net Amount" sap:filterable="false"/>
                <Property Name="KPIReferenceValue" Type="Edm.Decimal" Precision="16" Scale="3" sap:aggregation-role="measure" sap:unit="Currency" sap:label="Net Amount" sap:quickinfo="EPM: Total Net Amount" sap:filterable="false"/>
                <Property Name="Rel" Type="Edm.Decimal" Precision="17" Scale="2" sap:aggregation-role="measure" sap:filterable="false"/>
                <Property Name="KPIDeviationRangeLowValue" Type="Edm.Decimal" Precision="16" Scale="3" sap:aggregation-role="measure" sap:unit="Currency" sap:label="Net Amount" sap:quickinfo="EPM: Total Net Amount" sap:filterable="false"/>
                <Property Name="KPIToleranceRangeLowValue" Type="Edm.Decimal" Precision="16" Scale="3" sap:aggregation-role="measure" sap:unit="Currency" sap:label="Net Amount" sap:quickinfo="EPM: Total Net Amount" sap:filterable="false"/>
                <Property Name="Currency" Type="Edm.String" MaxLength="5" sap:aggregation-role="dimension" sap:text="CurrencyT" sap:label="Currency" sap:semantics="currency-code"/>
                <Property Name="CurrencyT" Type="Edm.String" MaxLength="15" sap:attribute-for="Currency" sap:label="Currency Name"/>
            </EntityType>
            <EntityType Name="SEPMRA_C_ALP_UserType" sap:label="User" sap:content-version="1">
                <Key>
                    <PropertyRef Name="UserId"/>
                </Key>
                <Property Name="UserId" Type="Edm.String" Nullable="false" MaxLength="12" sap:display-format="UpperCase" sap:label="用户名"/>
                <Property Name="EmailAddress" Type="Edm.String" MaxLength="255" sap:label="Email" sap:quickinfo="EPM: E-Mail Address"/>
                <Property Name="PictureURL" Type="Edm.String" MaxLength="255" sap:display-format="UpperCase" sap:label="Pic URI" sap:quickinfo="EPM: URL of Product Image"/>
                <Property Name="Initials" Type="Edm.String" MaxLength="10" sap:display-format="UpperCase" sap:label="Initials" sap:quickinfo="EPM: Initials"/>
                <Property Name="FirstName" Type="Edm.String" MaxLength="40" sap:label="First Name" sap:quickinfo="EPM: First Name"/>
                <Property Name="MiddleName" Type="Edm.String" MaxLength="40" sap:label="Middle Name" sap:quickinfo="EPM: Middle Name"/>
                <Property Name="LastName" Type="Edm.String" MaxLength="40" sap:label="Last Name" sap:quickinfo="EPM: Last Name"/>
                <Property Name="FullName" Type="Edm.String" MaxLength="81" sap:label="Name" sap:quickinfo="Full Name"/>
                <Property Name="MobilePhoneNumber" Type="Edm.String" MaxLength="30" sap:display-format="UpperCase" sap:label="Mobile Phone Number" sap:quickinfo="EPM: Mobile Phone Number"/>
                <Property Name="PhoneNumber" Type="Edm.String" MaxLength="30" sap:display-format="UpperCase" sap:label="Phone" sap:quickinfo="EPM: Phone Number"/>
            </EntityType>
            <Association Name="assoc_2147FD6D4D5D8F564F40B05369AD26BC" sap:content-version="1">
                <End Type="SEPMRA_SO_ANA.SEPMRA_C_ALP_SalesOrderType" Multiplicity="1" Role="FromRole_assoc_2147FD6D4D5D8F564F40B05369AD26BC"/>
                <End Type="SEPMRA_SO_ANA.SEPMRA_C_ALP_UserType" Multiplicity="0..1" Role="ToRole_assoc_2147FD6D4D5D8F564F40B05369AD26BC"/>
                <ReferentialConstraint>
                    <Principal Role="ToRole_assoc_2147FD6D4D5D8F564F40B05369AD26BC">
                        <PropertyRef Name="UserId"/>
                    </Principal>
                    <Dependent Role="FromRole_assoc_2147FD6D4D5D8F564F40B05369AD26BC">
                        <PropertyRef Name="CreatedByUser"/>
                    </Dependent>
                </ReferentialConstraint>
            </Association>
            <Association Name="assoc_99F50847A843041C6EACDE98C9A6690C" sap:content-version="1">
                <End Type="SEPMRA_SO_ANA.SEPMRA_C_ALP_SalesOrderType" Multiplicity="1" Role="FromRole_assoc_99F50847A843041C6EACDE98C9A6690C"/>
                <End Type="SEPMRA_SO_ANA.SEPMRA_C_ALP_CustomerType" Multiplicity="0..1" Role="ToRole_assoc_99F50847A843041C6EACDE98C9A6690C"/>
                <ReferentialConstraint>
                    <Principal Role="ToRole_assoc_99F50847A843041C6EACDE98C9A6690C">
                        <PropertyRef Name="Customer"/>
                    </Principal>
                    <Dependent Role="FromRole_assoc_99F50847A843041C6EACDE98C9A6690C">
                        <PropertyRef Name="Customer"/>
                    </Dependent>
                </ReferentialConstraint>
            </Association>
            <Association Name="assoc_4B7F44C128E6D1B4FBEB759C293CF5D5" sap:content-version="1">
                <End Type="SEPMRA_SO_ANA.SEPMRA_C_ALP_SalesOrderType" Multiplicity="1" Role="FromRole_assoc_4B7F44C128E6D1B4FBEB759C293CF5D5"/>
                <End Type="SEPMRA_SO_ANA.SEPMRA_C_ALP_SalesOrderItemType" Multiplicity="*" Role="ToRole_assoc_4B7F44C128E6D1B4FBEB759C293CF5D5"/>
                <ReferentialConstraint>
                    <Principal Role="FromRole_assoc_4B7F44C128E6D1B4FBEB759C293CF5D5">
                        <PropertyRef Name="SalesOrder"/>
                    </Principal>
                    <Dependent Role="ToRole_assoc_4B7F44C128E6D1B4FBEB759C293CF5D5">
                        <PropertyRef Name="SalesOrder"/>
                    </Dependent>
                </ReferentialConstraint>
            </Association>
            <Association Name="assoc_D6B8C833B81F95BE4482A9709964DFEF" sap:content-version="1">
                <End Type="SEPMRA_SO_ANA.SEPMRA_C_ALP_SalesOrderType" Multiplicity="1" Role="FromRole_assoc_D6B8C833B81F95BE4482A9709964DFEF"/>
                <End Type="SEPMRA_SO_ANA.SEPMRA_C_ALP_UserType" Multiplicity="0..1" Role="ToRole_assoc_D6B8C833B81F95BE4482A9709964DFEF"/>
            </Association>
            <Association Name="assoc_49DF252B14DB4991642B42F92648C080" sap:content-version="1">
                <End Type="SEPMRA_SO_ANA.SEPMRA_C_ALP_ProductCatVHType" Multiplicity="1" Role="FromRole_assoc_49DF252B14DB4991642B42F92648C080"/>
                <End Type="SEPMRA_SO_ANA.SEPMRA_C_ALP_ProductMainCatVHType" Multiplicity="0..1" Role="ToRole_assoc_49DF252B14DB4991642B42F92648C080"/>
            </Association>
            <Association Name="assoc_6A305E0CADE2F498031EE29B6954C326" sap:content-version="1">
                <End Type="SEPMRA_SO_ANA.SEPMRA_C_ALP_CalendarMonthVHType" Multiplicity="1" Role="FromRole_assoc_6A305E0CADE2F498031EE29B6954C326"/>
                <End Type="SEPMRA_SO_ANA.SEPMRA_C_ALP_CalendarQuarterVHType" Multiplicity="0..1" Role="ToRole_assoc_6A305E0CADE2F498031EE29B6954C326"/>
            </Association>
            <Association Name="assoc_E04DBC188394E718489B8003D3546C60" sap:content-version="1">
                <End Type="SEPMRA_SO_ANA.SEPMRA_C_ALP_SalesOrderItemType" Multiplicity="1" Role="FromRole_assoc_E04DBC188394E718489B8003D3546C60"/>
                <End Type="SEPMRA_SO_ANA.SEPMRA_C_ALP_ProductType" Multiplicity="0..1" Role="ToRole_assoc_E04DBC188394E718489B8003D3546C60"/>
                <ReferentialConstraint>
                    <Principal Role="ToRole_assoc_E04DBC188394E718489B8003D3546C60">
                        <PropertyRef Name="Product"/>
                    </Principal>
                    <Dependent Role="FromRole_assoc_E04DBC188394E718489B8003D3546C60">
                        <PropertyRef Name="Product"/>
                    </Dependent>
                </ReferentialConstraint>
            </Association>
            <Association Name="assoc_0E573EE23C96A3093FAC7C0B5CCBE09B" sap:content-version="1">
                <End Type="SEPMRA_SO_ANA.SEPMRA_C_ALP_CustomerVHType" Multiplicity="1" Role="FromRole_assoc_0E573EE23C96A3093FAC7C0B5CCBE09B"/>
                <End Type="SEPMRA_SO_ANA.SEPMRA_C_ALP_CountryVHType" Multiplicity="0..1" Role="ToRole_assoc_0E573EE23C96A3093FAC7C0B5CCBE09B"/>
            </Association>
            <Association Name="assoc_CDBAA5445CC6436F766463B411A2ADE1" sap:content-version="1">
                <End Type="SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType" Multiplicity="1" Role="FromRole_assoc_CDBAA5445CC6436F766463B411A2ADE1"/>
                <End Type="SEPMRA_SO_ANA.SEPMRA_C_ALP_CalendarMonthVHType" Multiplicity="0..1" Role="ToRole_assoc_CDBAA5445CC6436F766463B411A2ADE1"/>
            </Association>
            <Association Name="assoc_44AD4821FA12A0B31C9A64EEA032576F" sap:content-version="1">
                <End Type="SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType" Multiplicity="1" Role="FromRole_assoc_44AD4821FA12A0B31C9A64EEA032576F"/>
                <End Type="SEPMRA_SO_ANA.SEPMRA_C_ALP_CalendarQuarterVHType" Multiplicity="0..1" Role="ToRole_assoc_44AD4821FA12A0B31C9A64EEA032576F"/>
            </Association>
            <Association Name="assoc_E8E86917BEA26518501FD4C56198E1D5" sap:content-version="1">
                <End Type="SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType" Multiplicity="1" Role="FromRole_assoc_E8E86917BEA26518501FD4C56198E1D5"/>
                <End Type="SEPMRA_SO_ANA.SEPMRA_C_ALP_ProductMainCatVHType" Multiplicity="0..1" Role="ToRole_assoc_E8E86917BEA26518501FD4C56198E1D5"/>
            </Association>
            <Association Name="assoc_2959EE88F6126CEC0198FD82F13EE7B8" sap:content-version="1">
                <End Type="SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType" Multiplicity="1" Role="FromRole_assoc_2959EE88F6126CEC0198FD82F13EE7B8"/>
                <End Type="SEPMRA_SO_ANA.SEPMRA_C_ALP_ProductType" Multiplicity="0..1" Role="ToRole_assoc_2959EE88F6126CEC0198FD82F13EE7B8"/>
            </Association>
            <Association Name="assoc_0202D085D5ABC5A04F1F575BE66CC19A" sap:content-version="1">
                <End Type="SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType" Multiplicity="1" Role="FromRole_assoc_0202D085D5ABC5A04F1F575BE66CC19A"/>
                <End Type="SEPMRA_SO_ANA.SEPMRA_C_ALP_ProductCatVHType" Multiplicity="0..1" Role="ToRole_assoc_0202D085D5ABC5A04F1F575BE66CC19A"/>
            </Association>
            <Association Name="assoc_F30285851321D6DF741814A90DCBBD6B" sap:content-version="1">
                <End Type="SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType" Multiplicity="1" Role="FromRole_assoc_F30285851321D6DF741814A90DCBBD6B"/>
                <End Type="SEPMRA_SO_ANA.SEPMRA_C_ALP_ProductVHType" Multiplicity="0..1" Role="ToRole_assoc_F30285851321D6DF741814A90DCBBD6B"/>
            </Association>
            <Association Name="assoc_BF9622AA982AE949940F97513DFB557D" sap:content-version="1">
                <End Type="SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType" Multiplicity="1" Role="FromRole_assoc_BF9622AA982AE949940F97513DFB557D"/>
                <End Type="SEPMRA_SO_ANA.SEPMRA_C_ALP_QuantityUnitVHType" Multiplicity="0..1" Role="ToRole_assoc_BF9622AA982AE949940F97513DFB557D"/>
            </Association>
            <Association Name="assoc_33F6F629FB14F2FA9AD65F093B6F6520" sap:content-version="1">
                <End Type="SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType" Multiplicity="1" Role="FromRole_assoc_33F6F629FB14F2FA9AD65F093B6F6520"/>
                <End Type="SEPMRA_SO_ANA.SEPMRA_C_ALP_SalesOrderType" Multiplicity="0..1" Role="ToRole_assoc_33F6F629FB14F2FA9AD65F093B6F6520"/>
            </Association>
            <Association Name="assoc_FE16A495275A3BA7D195403FB549001C" sap:content-version="1">
                <End Type="SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType" Multiplicity="1" Role="FromRole_assoc_FE16A495275A3BA7D195403FB549001C"/>
                <End Type="SEPMRA_SO_ANA.SEPMRA_C_ALP_SalesOrderItemType" Multiplicity="0..1" Role="ToRole_assoc_FE16A495275A3BA7D195403FB549001C"/>
            </Association>
            <Association Name="assoc_BC200480E7165A31E2AED126B06BCDDD" sap:content-version="1">
                <End Type="SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType" Multiplicity="1" Role="FromRole_assoc_BC200480E7165A31E2AED126B06BCDDD"/>
                <End Type="SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdStatusVHType" Multiplicity="0..1" Role="ToRole_assoc_BC200480E7165A31E2AED126B06BCDDD"/>
            </Association>
            <Association Name="assoc_701179D1D39E3A1A90BD9B1DB7917409" sap:content-version="1">
                <End Type="SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType" Multiplicity="1" Role="FromRole_assoc_701179D1D39E3A1A90BD9B1DB7917409"/>
                <End Type="SEPMRA_SO_ANA.SEPMRA_C_ALP_CountryVHType" Multiplicity="0..1" Role="ToRole_assoc_701179D1D39E3A1A90BD9B1DB7917409"/>
            </Association>
            <Association Name="assoc_2130FCDE0E937D66D99AC66FC2654E95" sap:content-version="1">
                <End Type="SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType" Multiplicity="1" Role="FromRole_assoc_2130FCDE0E937D66D99AC66FC2654E95"/>
                <End Type="SEPMRA_SO_ANA.SEPMRA_C_ALP_CustomerVHType" Multiplicity="0..1" Role="ToRole_assoc_2130FCDE0E937D66D99AC66FC2654E95"/>
            </Association>
            <Association Name="assoc_C4446EA00E4F4A459961108B42EB4372" sap:content-version="1">
                <End Type="SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType" Multiplicity="1" Role="FromRole_assoc_C4446EA00E4F4A459961108B42EB4372"/>
                <End Type="SEPMRA_SO_ANA.SEPMRA_C_ALP_SupplierVHType" Multiplicity="0..1" Role="ToRole_assoc_C4446EA00E4F4A459961108B42EB4372"/>
            </Association>
            <Association Name="assoc_DB43C90AEF2C3FCFA3EA21DDF85E5E81" sap:content-version="1">
                <End Type="SEPMRA_SO_ANA.SEPMRA_C_ALP_ProductVHType" Multiplicity="1" Role="FromRole_assoc_DB43C90AEF2C3FCFA3EA21DDF85E5E81"/>
                <End Type="SEPMRA_SO_ANA.SEPMRA_C_ALP_ProductMainCatVHType" Multiplicity="0..1" Role="ToRole_assoc_DB43C90AEF2C3FCFA3EA21DDF85E5E81"/>
            </Association>
            <Association Name="assoc_630AE5653296F05CFE57BEBF29F4A237" sap:content-version="1">
                <End Type="SEPMRA_SO_ANA.SEPMRA_C_ALP_ProductVHType" Multiplicity="1" Role="FromRole_assoc_630AE5653296F05CFE57BEBF29F4A237"/>
                <End Type="SEPMRA_SO_ANA.SEPMRA_C_ALP_ProductCatVHType" Multiplicity="0..1" Role="ToRole_assoc_630AE5653296F05CFE57BEBF29F4A237"/>
            </Association>
            <EntityContainer Name="SEPMRA_SO_ANA_Entities" m:IsDefaultEntityContainer="true" sap:supported-formats="atom json xlsx">
                <EntitySet Name="SEPMRA_C_ALP_CalendarMonthVH" EntityType="SEPMRA_SO_ANA.SEPMRA_C_ALP_CalendarMonthVHType" sap:creatable="false" sap:updatable="false" sap:deletable="false" sap:searchable="true" sap:content-version="1"/>
                <EntitySet Name="SEPMRA_C_ALP_CalendarQuarterVH" EntityType="SEPMRA_SO_ANA.SEPMRA_C_ALP_CalendarQuarterVHType" sap:creatable="false" sap:updatable="false" sap:deletable="false" sap:searchable="true" sap:content-version="1"/>
                <EntitySet Name="SEPMRA_C_ALP_CountryVH" EntityType="SEPMRA_SO_ANA.SEPMRA_C_ALP_CountryVHType" sap:creatable="false" sap:updatable="false" sap:deletable="false" sap:searchable="true" sap:content-version="1"/>
                <EntitySet Name="SEPMRA_C_ALP_Customer" EntityType="SEPMRA_SO_ANA.SEPMRA_C_ALP_CustomerType" sap:creatable="false" sap:updatable="false" sap:deletable="false" sap:content-version="1"/>
                <EntitySet Name="SEPMRA_C_ALP_CustomerVH" EntityType="SEPMRA_SO_ANA.SEPMRA_C_ALP_CustomerVHType" sap:creatable="false" sap:updatable="false" sap:deletable="false" sap:searchable="true" sap:content-version="1"/>
                <EntitySet Name="SEPMRA_C_ALP_Product" EntityType="SEPMRA_SO_ANA.SEPMRA_C_ALP_ProductType" sap:creatable="false" sap:updatable="false" sap:deletable="false" sap:content-version="1"/>
                <EntitySet Name="SEPMRA_C_ALP_ProductCatVH" EntityType="SEPMRA_SO_ANA.SEPMRA_C_ALP_ProductCatVHType" sap:creatable="false" sap:updatable="false" sap:deletable="false" sap:searchable="true" sap:content-version="1"/>
                <EntitySet Name="SEPMRA_C_ALP_ProductMainCatVH" EntityType="SEPMRA_SO_ANA.SEPMRA_C_ALP_ProductMainCatVHType" sap:creatable="false" sap:updatable="false" sap:deletable="false" sap:searchable="true" sap:content-version="1"/>
                <EntitySet Name="SEPMRA_C_ALP_ProductVH" EntityType="SEPMRA_SO_ANA.SEPMRA_C_ALP_ProductVHType" sap:creatable="false" sap:updatable="false" sap:deletable="false" sap:searchable="true" sap:content-version="1"/>
                <EntitySet Name="SEPMRA_C_ALP_QuantityUnitVH" EntityType="SEPMRA_SO_ANA.SEPMRA_C_ALP_QuantityUnitVHType" sap:creatable="false" sap:updatable="false" sap:deletable="false" sap:searchable="true" sap:content-version="1"/>
                <EntitySet Name="SEPMRA_C_ALP_SalesOrder" EntityType="SEPMRA_SO_ANA.SEPMRA_C_ALP_SalesOrderType" sap:creatable="false" sap:updatable="false" sap:deletable="false" sap:content-version="1"/>
                <EntitySet Name="SEPMRA_C_ALP_SalesOrderItem" EntityType="SEPMRA_SO_ANA.SEPMRA_C_ALP_SalesOrderItemType" sap:creatable="false" sap:updatable="false" sap:deletable="false" sap:content-version="1"/>
                <EntitySet Name="SEPMRA_C_ALP_SlsOrdItemCube" EntityType="SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType" sap:creatable="false" sap:updatable="false" sap:deletable="false" sap:content-version="1"/>
                <EntitySet Name="SEPMRA_C_ALP_SlsOrdStatusVH" EntityType="SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdStatusVHType" sap:creatable="false" sap:updatable="false" sap:deletable="false" sap:searchable="true" sap:content-version="1"/>
                <EntitySet Name="SEPMRA_C_ALP_SupplierVH" EntityType="SEPMRA_SO_ANA.SEPMRA_C_ALP_SupplierVHType" sap:creatable="false" sap:updatable="false" sap:deletable="false" sap:searchable="true" sap:content-version="1"/>
                <EntitySet Name="SEPMRA_C_ALP_TotalSalesKPI" EntityType="SEPMRA_SO_ANA.SEPMRA_C_ALP_TotalSalesKPIType" sap:creatable="false" sap:updatable="false" sap:deletable="false" sap:content-version="1"/>
                <EntitySet Name="SEPMRA_C_ALP_User" EntityType="SEPMRA_SO_ANA.SEPMRA_C_ALP_UserType" sap:creatable="false" sap:updatable="false" sap:deletable="false" sap:content-version="1"/>
                <AssociationSet Name="assoc_CDBAA5445CC6436F766463B411A2ADE1" Association="SEPMRA_SO_ANA.assoc_CDBAA5445CC6436F766463B411A2ADE1" sap:creatable="false" sap:updatable="false" sap:deletable="false" sap:content-version="1">
                    <End EntitySet="SEPMRA_C_ALP_SlsOrdItemCube" Role="FromRole_assoc_CDBAA5445CC6436F766463B411A2ADE1"/>
                    <End EntitySet="SEPMRA_C_ALP_CalendarMonthVH" Role="ToRole_assoc_CDBAA5445CC6436F766463B411A2ADE1"/>
                </AssociationSet>
                <AssociationSet Name="assoc_99F50847A843041C6EACDE98C9A6690C" Association="SEPMRA_SO_ANA.assoc_99F50847A843041C6EACDE98C9A6690C" sap:creatable="false" sap:updatable="false" sap:deletable="false" sap:content-version="1">
                    <End EntitySet="SEPMRA_C_ALP_SalesOrder" Role="FromRole_assoc_99F50847A843041C6EACDE98C9A6690C"/>
                    <End EntitySet="SEPMRA_C_ALP_Customer" Role="ToRole_assoc_99F50847A843041C6EACDE98C9A6690C"/>
                </AssociationSet>
                <AssociationSet Name="assoc_2130FCDE0E937D66D99AC66FC2654E95" Association="SEPMRA_SO_ANA.assoc_2130FCDE0E937D66D99AC66FC2654E95" sap:creatable="false" sap:updatable="false" sap:deletable="false" sap:content-version="1">
                    <End EntitySet="SEPMRA_C_ALP_SlsOrdItemCube" Role="FromRole_assoc_2130FCDE0E937D66D99AC66FC2654E95"/>
                    <End EntitySet="SEPMRA_C_ALP_CustomerVH" Role="ToRole_assoc_2130FCDE0E937D66D99AC66FC2654E95"/>
                </AssociationSet>
                <AssociationSet Name="assoc_BF9622AA982AE949940F97513DFB557D" Association="SEPMRA_SO_ANA.assoc_BF9622AA982AE949940F97513DFB557D" sap:creatable="false" sap:updatable="false" sap:deletable="false" sap:content-version="1">
                    <End EntitySet="SEPMRA_C_ALP_SlsOrdItemCube" Role="FromRole_assoc_BF9622AA982AE949940F97513DFB557D"/>
                    <End EntitySet="SEPMRA_C_ALP_QuantityUnitVH" Role="ToRole_assoc_BF9622AA982AE949940F97513DFB557D"/>
                </AssociationSet>
                <AssociationSet Name="assoc_2147FD6D4D5D8F564F40B05369AD26BC" Association="SEPMRA_SO_ANA.assoc_2147FD6D4D5D8F564F40B05369AD26BC" sap:creatable="false" sap:updatable="false" sap:deletable="false" sap:content-version="1">
                    <End EntitySet="SEPMRA_C_ALP_SalesOrder" Role="FromRole_assoc_2147FD6D4D5D8F564F40B05369AD26BC"/>
                    <End EntitySet="SEPMRA_C_ALP_User" Role="ToRole_assoc_2147FD6D4D5D8F564F40B05369AD26BC"/>
                </AssociationSet>
                <AssociationSet Name="assoc_49DF252B14DB4991642B42F92648C080" Association="SEPMRA_SO_ANA.assoc_49DF252B14DB4991642B42F92648C080" sap:creatable="false" sap:updatable="false" sap:deletable="false" sap:content-version="1">
                    <End EntitySet="SEPMRA_C_ALP_ProductCatVH" Role="FromRole_assoc_49DF252B14DB4991642B42F92648C080"/>
                    <End EntitySet="SEPMRA_C_ALP_ProductMainCatVH" Role="ToRole_assoc_49DF252B14DB4991642B42F92648C080"/>
                </AssociationSet>
                <AssociationSet Name="assoc_BC200480E7165A31E2AED126B06BCDDD" Association="SEPMRA_SO_ANA.assoc_BC200480E7165A31E2AED126B06BCDDD" sap:creatable="false" sap:updatable="false" sap:deletable="false" sap:content-version="1">
                    <End EntitySet="SEPMRA_C_ALP_SlsOrdItemCube" Role="FromRole_assoc_BC200480E7165A31E2AED126B06BCDDD"/>
                    <End EntitySet="SEPMRA_C_ALP_SlsOrdStatusVH" Role="ToRole_assoc_BC200480E7165A31E2AED126B06BCDDD"/>
                </AssociationSet>
                <AssociationSet Name="assoc_C4446EA00E4F4A459961108B42EB4372" Association="SEPMRA_SO_ANA.assoc_C4446EA00E4F4A459961108B42EB4372" sap:creatable="false" sap:updatable="false" sap:deletable="false" sap:content-version="1">
                    <End EntitySet="SEPMRA_C_ALP_SlsOrdItemCube" Role="FromRole_assoc_C4446EA00E4F4A459961108B42EB4372"/>
                    <End EntitySet="SEPMRA_C_ALP_SupplierVH" Role="ToRole_assoc_C4446EA00E4F4A459961108B42EB4372"/>
                </AssociationSet>
                <AssociationSet Name="assoc_630AE5653296F05CFE57BEBF29F4A237" Association="SEPMRA_SO_ANA.assoc_630AE5653296F05CFE57BEBF29F4A237" sap:creatable="false" sap:updatable="false" sap:deletable="false" sap:content-version="1">
                    <End EntitySet="SEPMRA_C_ALP_ProductVH" Role="FromRole_assoc_630AE5653296F05CFE57BEBF29F4A237"/>
                    <End EntitySet="SEPMRA_C_ALP_ProductCatVH" Role="ToRole_assoc_630AE5653296F05CFE57BEBF29F4A237"/>
                </AssociationSet>
                <AssociationSet Name="assoc_2959EE88F6126CEC0198FD82F13EE7B8" Association="SEPMRA_SO_ANA.assoc_2959EE88F6126CEC0198FD82F13EE7B8" sap:creatable="false" sap:updatable="false" sap:deletable="false" sap:content-version="1">
                    <End EntitySet="SEPMRA_C_ALP_SlsOrdItemCube" Role="FromRole_assoc_2959EE88F6126CEC0198FD82F13EE7B8"/>
                    <End EntitySet="SEPMRA_C_ALP_Product" Role="ToRole_assoc_2959EE88F6126CEC0198FD82F13EE7B8"/>
                </AssociationSet>
                <AssociationSet Name="assoc_E04DBC188394E718489B8003D3546C60" Association="SEPMRA_SO_ANA.assoc_E04DBC188394E718489B8003D3546C60" sap:creatable="false" sap:updatable="false" sap:deletable="false" sap:content-version="1">
                    <End EntitySet="SEPMRA_C_ALP_SalesOrderItem" Role="FromRole_assoc_E04DBC188394E718489B8003D3546C60"/>
                    <End EntitySet="SEPMRA_C_ALP_Product" Role="ToRole_assoc_E04DBC188394E718489B8003D3546C60"/>
                </AssociationSet>
                <AssociationSet Name="assoc_DB43C90AEF2C3FCFA3EA21DDF85E5E81" Association="SEPMRA_SO_ANA.assoc_DB43C90AEF2C3FCFA3EA21DDF85E5E81" sap:creatable="false" sap:updatable="false" sap:deletable="false" sap:content-version="1">
                    <End EntitySet="SEPMRA_C_ALP_ProductVH" Role="FromRole_assoc_DB43C90AEF2C3FCFA3EA21DDF85E5E81"/>
                    <End EntitySet="SEPMRA_C_ALP_ProductMainCatVH" Role="ToRole_assoc_DB43C90AEF2C3FCFA3EA21DDF85E5E81"/>
                </AssociationSet>
                <AssociationSet Name="assoc_E8E86917BEA26518501FD4C56198E1D5" Association="SEPMRA_SO_ANA.assoc_E8E86917BEA26518501FD4C56198E1D5" sap:creatable="false" sap:updatable="false" sap:deletable="false" sap:content-version="1">
                    <End EntitySet="SEPMRA_C_ALP_SlsOrdItemCube" Role="FromRole_assoc_E8E86917BEA26518501FD4C56198E1D5"/>
                    <End EntitySet="SEPMRA_C_ALP_ProductMainCatVH" Role="ToRole_assoc_E8E86917BEA26518501FD4C56198E1D5"/>
                </AssociationSet>
                <AssociationSet Name="assoc_44AD4821FA12A0B31C9A64EEA032576F" Association="SEPMRA_SO_ANA.assoc_44AD4821FA12A0B31C9A64EEA032576F" sap:creatable="false" sap:updatable="false" sap:deletable="false" sap:content-version="1">
                    <End EntitySet="SEPMRA_C_ALP_SlsOrdItemCube" Role="FromRole_assoc_44AD4821FA12A0B31C9A64EEA032576F"/>
                    <End EntitySet="SEPMRA_C_ALP_CalendarQuarterVH" Role="ToRole_assoc_44AD4821FA12A0B31C9A64EEA032576F"/>
                </AssociationSet>
                <AssociationSet Name="assoc_FE16A495275A3BA7D195403FB549001C" Association="SEPMRA_SO_ANA.assoc_FE16A495275A3BA7D195403FB549001C" sap:creatable="false" sap:updatable="false" sap:deletable="false" sap:content-version="1">
                    <End EntitySet="SEPMRA_C_ALP_SlsOrdItemCube" Role="FromRole_assoc_FE16A495275A3BA7D195403FB549001C"/>
                    <End EntitySet="SEPMRA_C_ALP_SalesOrderItem" Role="ToRole_assoc_FE16A495275A3BA7D195403FB549001C"/>
                </AssociationSet>
                <AssociationSet Name="assoc_4B7F44C128E6D1B4FBEB759C293CF5D5" Association="SEPMRA_SO_ANA.assoc_4B7F44C128E6D1B4FBEB759C293CF5D5" sap:creatable="false" sap:updatable="false" sap:deletable="false" sap:content-version="1">
                    <End EntitySet="SEPMRA_C_ALP_SalesOrder" Role="FromRole_assoc_4B7F44C128E6D1B4FBEB759C293CF5D5"/>
                    <End EntitySet="SEPMRA_C_ALP_SalesOrderItem" Role="ToRole_assoc_4B7F44C128E6D1B4FBEB759C293CF5D5"/>
                </AssociationSet>
                <AssociationSet Name="assoc_6A305E0CADE2F498031EE29B6954C326" Association="SEPMRA_SO_ANA.assoc_6A305E0CADE2F498031EE29B6954C326" sap:creatable="false" sap:updatable="false" sap:deletable="false" sap:content-version="1">
                    <End EntitySet="SEPMRA_C_ALP_CalendarMonthVH" Role="FromRole_assoc_6A305E0CADE2F498031EE29B6954C326"/>
                    <End EntitySet="SEPMRA_C_ALP_CalendarQuarterVH" Role="ToRole_assoc_6A305E0CADE2F498031EE29B6954C326"/>
                </AssociationSet>
                <AssociationSet Name="assoc_D6B8C833B81F95BE4482A9709964DFEF" Association="SEPMRA_SO_ANA.assoc_D6B8C833B81F95BE4482A9709964DFEF" sap:creatable="false" sap:updatable="false" sap:deletable="false" sap:content-version="1">
                    <End EntitySet="SEPMRA_C_ALP_SalesOrder" Role="FromRole_assoc_D6B8C833B81F95BE4482A9709964DFEF"/>
                    <End EntitySet="SEPMRA_C_ALP_User" Role="ToRole_assoc_D6B8C833B81F95BE4482A9709964DFEF"/>
                </AssociationSet>
                <AssociationSet Name="assoc_F30285851321D6DF741814A90DCBBD6B" Association="SEPMRA_SO_ANA.assoc_F30285851321D6DF741814A90DCBBD6B" sap:creatable="false" sap:updatable="false" sap:deletable="false" sap:content-version="1">
                    <End EntitySet="SEPMRA_C_ALP_SlsOrdItemCube" Role="FromRole_assoc_F30285851321D6DF741814A90DCBBD6B"/>
                    <End EntitySet="SEPMRA_C_ALP_ProductVH" Role="ToRole_assoc_F30285851321D6DF741814A90DCBBD6B"/>
                </AssociationSet>
                <AssociationSet Name="assoc_0E573EE23C96A3093FAC7C0B5CCBE09B" Association="SEPMRA_SO_ANA.assoc_0E573EE23C96A3093FAC7C0B5CCBE09B" sap:creatable="false" sap:updatable="false" sap:deletable="false" sap:content-version="1">
                    <End EntitySet="SEPMRA_C_ALP_CustomerVH" Role="FromRole_assoc_0E573EE23C96A3093FAC7C0B5CCBE09B"/>
                    <End EntitySet="SEPMRA_C_ALP_CountryVH" Role="ToRole_assoc_0E573EE23C96A3093FAC7C0B5CCBE09B"/>
                </AssociationSet>
                <AssociationSet Name="assoc_701179D1D39E3A1A90BD9B1DB7917409" Association="SEPMRA_SO_ANA.assoc_701179D1D39E3A1A90BD9B1DB7917409" sap:creatable="false" sap:updatable="false" sap:deletable="false" sap:content-version="1">
                    <End EntitySet="SEPMRA_C_ALP_SlsOrdItemCube" Role="FromRole_assoc_701179D1D39E3A1A90BD9B1DB7917409"/>
                    <End EntitySet="SEPMRA_C_ALP_CountryVH" Role="ToRole_assoc_701179D1D39E3A1A90BD9B1DB7917409"/>
                </AssociationSet>
                <AssociationSet Name="assoc_0202D085D5ABC5A04F1F575BE66CC19A" Association="SEPMRA_SO_ANA.assoc_0202D085D5ABC5A04F1F575BE66CC19A" sap:creatable="false" sap:updatable="false" sap:deletable="false" sap:content-version="1">
                    <End EntitySet="SEPMRA_C_ALP_SlsOrdItemCube" Role="FromRole_assoc_0202D085D5ABC5A04F1F575BE66CC19A"/>
                    <End EntitySet="SEPMRA_C_ALP_ProductCatVH" Role="ToRole_assoc_0202D085D5ABC5A04F1F575BE66CC19A"/>
                </AssociationSet>
                <AssociationSet Name="assoc_33F6F629FB14F2FA9AD65F093B6F6520" Association="SEPMRA_SO_ANA.assoc_33F6F629FB14F2FA9AD65F093B6F6520" sap:creatable="false" sap:updatable="false" sap:deletable="false" sap:content-version="1">
                    <End EntitySet="SEPMRA_C_ALP_SlsOrdItemCube" Role="FromRole_assoc_33F6F629FB14F2FA9AD65F093B6F6520"/>
                    <End EntitySet="SEPMRA_C_ALP_SalesOrder" Role="ToRole_assoc_33F6F629FB14F2FA9AD65F093B6F6520"/>
                </AssociationSet>
            </EntityContainer>
            <Annotations Target="SEPMRA_SO_ANA.SEPMRA_C_ALP_CustomerVHType/Country" xmlns="http://docs.oasis-open.org/odata/ns/edm">
                <Annotation Term="Common.ValueList">
                    <Record>
                        <PropertyValue Property="Label" String="Country"/>
                        <PropertyValue Property="CollectionPath" String="SEPMRA_C_ALP_CountryVH"/>
                        <PropertyValue Property="SearchSupported" Bool="true"/>
                        <PropertyValue Property="Parameters">
                            <Collection>
                                <Record Type="Common.ValueListParameterInOut">
                                    <PropertyValue Property="LocalDataProperty" PropertyPath="Country"/>
                                    <PropertyValue Property="ValueListProperty" String="Country"/>
                                </Record>
                                <Record Type="Common.ValueListParameterDisplayOnly">
                                    <PropertyValue Property="ValueListProperty" String="CountryT"/>
                                </Record>
                            </Collection>
                        </PropertyValue>
                    </Record>
                </Annotation>
            </Annotations>
            <Annotations Target="SEPMRA_SO_ANA.SEPMRA_C_ALP_ProductCatVHType/MainProductCategory" xmlns="http://docs.oasis-open.org/odata/ns/edm">
                <Annotation Term="Common.ValueList">
                    <Record>
                        <PropertyValue Property="Label" String="Product Category"/>
                        <PropertyValue Property="CollectionPath" String="SEPMRA_C_ALP_ProductMainCatVH"/>
                        <PropertyValue Property="SearchSupported" Bool="true"/>
                        <PropertyValue Property="Parameters">
                            <Collection>
                                <Record Type="Common.ValueListParameterInOut">
                                    <PropertyValue Property="LocalDataProperty" PropertyPath="MainProductCategory"/>
                                    <PropertyValue Property="ValueListProperty" String="MainProductCategory"/>
                                </Record>
                            </Collection>
                        </PropertyValue>
                    </Record>
                </Annotation>
            </Annotations>
            <Annotations Target="SEPMRA_SO_ANA.SEPMRA_C_ALP_ProductVHType/ProductCategory" xmlns="http://docs.oasis-open.org/odata/ns/edm">
                <Annotation Term="Common.ValueList">
                    <Record>
                        <PropertyValue Property="Label" String="Product Sub-Category"/>
                        <PropertyValue Property="CollectionPath" String="SEPMRA_C_ALP_ProductCatVH"/>
                        <PropertyValue Property="SearchSupported" Bool="true"/>
                        <PropertyValue Property="Parameters">
                            <Collection>
                                <Record Type="Common.ValueListParameterInOut">
                                    <PropertyValue Property="LocalDataProperty" PropertyPath="ProductCategory"/>
                                    <PropertyValue Property="ValueListProperty" String="ProductCategory"/>
                                </Record>
                                <Record Type="Common.ValueListParameterInOut">
                                    <PropertyValue Property="LocalDataProperty" PropertyPath="MainProductCategory"/>
                                    <PropertyValue Property="ValueListProperty" String="MainProductCategory"/>
                                </Record>
                            </Collection>
                        </PropertyValue>
                    </Record>
                </Annotation>
            </Annotations>
            <Annotations Target="SEPMRA_SO_ANA.SEPMRA_C_ALP_ProductVHType/MainProductCategory" xmlns="http://docs.oasis-open.org/odata/ns/edm">
                <Annotation Term="Common.ValueList">
                    <Record>
                        <PropertyValue Property="Label" String="Product Category"/>
                        <PropertyValue Property="CollectionPath" String="SEPMRA_C_ALP_ProductMainCatVH"/>
                        <PropertyValue Property="SearchSupported" Bool="true"/>
                        <PropertyValue Property="Parameters">
                            <Collection>
                                <Record Type="Common.ValueListParameterInOut">
                                    <PropertyValue Property="LocalDataProperty" PropertyPath="MainProductCategory"/>
                                    <PropertyValue Property="ValueListProperty" String="MainProductCategory"/>
                                </Record>
                            </Collection>
                        </PropertyValue>
                    </Record>
                </Annotation>
            </Annotations>
            <Annotations Target="SEPMRA_SO_ANA.SEPMRA_C_ALP_SalesOrderType/Customer" xmlns="http://docs.oasis-open.org/odata/ns/edm">
                <Annotation Term="Common.ValueList">
                    <Record>
                        <PropertyValue Property="Label" String="Customer"/>
                        <PropertyValue Property="CollectionPath" String="SEPMRA_C_ALP_Customer"/>
                        <PropertyValue Property="SearchSupported" Bool="false"/>
                        <PropertyValue Property="Parameters">
                            <Collection>
                                <Record Type="Common.ValueListParameterInOut">
                                    <PropertyValue Property="LocalDataProperty" PropertyPath="Customer"/>
                                    <PropertyValue Property="ValueListProperty" String="Customer"/>
                                </Record>
                                <Record Type="Common.ValueListParameterDisplayOnly">
                                    <PropertyValue Property="ValueListProperty" String="CompanyName"/>
                                </Record>
                            </Collection>
                        </PropertyValue>
                    </Record>
                </Annotation>
            </Annotations>
            <Annotations Target="SEPMRA_SO_ANA.SEPMRA_C_ALP_SalesOrderType/CreatedByUser" xmlns="http://docs.oasis-open.org/odata/ns/edm">
                <Annotation Term="Common.ValueList">
                    <Record>
                        <PropertyValue Property="Label" String="User"/>
                        <PropertyValue Property="CollectionPath" String="SEPMRA_C_ALP_User"/>
                        <PropertyValue Property="SearchSupported" Bool="false"/>
                        <PropertyValue Property="Parameters">
                            <Collection>
                                <Record Type="Common.ValueListParameterInOut">
                                    <PropertyValue Property="LocalDataProperty" PropertyPath="CreatedByUser"/>
                                    <PropertyValue Property="ValueListProperty" String="UserId"/>
                                </Record>
                                <Record Type="Common.ValueListParameterDisplayOnly">
                                    <PropertyValue Property="ValueListProperty" String="FullName"/>
                                </Record>
                            </Collection>
                        </PropertyValue>
                    </Record>
                </Annotation>
            </Annotations>
            <Annotations Target="SEPMRA_SO_ANA.SEPMRA_C_ALP_SalesOrderType/LastChangedByUser" xmlns="http://docs.oasis-open.org/odata/ns/edm">
                <Annotation Term="Common.ValueList">
                    <Record>
                        <PropertyValue Property="Label" String="User"/>
                        <PropertyValue Property="CollectionPath" String="SEPMRA_C_ALP_User"/>
                        <PropertyValue Property="SearchSupported" Bool="false"/>
                        <PropertyValue Property="Parameters">
                            <Collection>
                                <Record Type="Common.ValueListParameterInOut">
                                    <PropertyValue Property="LocalDataProperty" PropertyPath="CreatedByUser"/>
                                    <PropertyValue Property="ValueListProperty" String="UserId"/>
                                </Record>
                                <Record Type="Common.ValueListParameterDisplayOnly">
                                    <PropertyValue Property="ValueListProperty" String="FullName"/>
                                </Record>
                            </Collection>
                        </PropertyValue>
                    </Record>
                </Annotation>
            </Annotations>
            <Annotations Target="SEPMRA_SO_ANA.SEPMRA_C_ALP_SalesOrderItemType/SalesOrder" xmlns="http://docs.oasis-open.org/odata/ns/edm">
                <Annotation Term="Common.ValueList">
                    <Record>
                        <PropertyValue Property="Label" String="Sales Order"/>
                        <PropertyValue Property="CollectionPath" String="SEPMRA_C_ALP_SalesOrder"/>
                        <PropertyValue Property="SearchSupported" Bool="false"/>
                        <PropertyValue Property="Parameters">
                            <Collection>
                                <Record Type="Common.ValueListParameterInOut">
                                    <PropertyValue Property="LocalDataProperty" PropertyPath="SalesOrder"/>
                                    <PropertyValue Property="ValueListProperty" String="SalesOrder"/>
                                </Record>
                                <Record Type="Common.ValueListParameterDisplayOnly">
                                    <PropertyValue Property="ValueListProperty" String="TransactionCurrency_T"/>
                                </Record>
                            </Collection>
                        </PropertyValue>
                    </Record>
                </Annotation>
            </Annotations>
            <Annotations Target="SEPMRA_SO_ANA.SEPMRA_C_ALP_SalesOrderItemType/Product" xmlns="http://docs.oasis-open.org/odata/ns/edm">
                <Annotation Term="Common.ValueList">
                    <Record>
                        <PropertyValue Property="Label" String="Product"/>
                        <PropertyValue Property="CollectionPath" String="SEPMRA_C_ALP_Product"/>
                        <PropertyValue Property="SearchSupported" Bool="false"/>
                        <PropertyValue Property="Parameters">
                            <Collection>
                                <Record Type="Common.ValueListParameterInOut">
                                    <PropertyValue Property="LocalDataProperty" PropertyPath="Product"/>
                                    <PropertyValue Property="ValueListProperty" String="Product"/>
                                </Record>
                                <Record Type="Common.ValueListParameterDisplayOnly">
                                    <PropertyValue Property="ValueListProperty" String="ProductName"/>
                                </Record>
                            </Collection>
                        </PropertyValue>
                    </Record>
                </Annotation>
            </Annotations>
            <Annotations Target="SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType/DeliveryCalendarQuarter" xmlns="http://docs.oasis-open.org/odata/ns/edm">
                <Annotation Term="Common.ValueList">
                    <Record>
                        <PropertyValue Property="Label" String="Calendar Quarter"/>
                        <PropertyValue Property="CollectionPath" String="SEPMRA_C_ALP_CalendarQuarterVH"/>
                        <PropertyValue Property="SearchSupported" Bool="true"/>
                        <PropertyValue Property="Parameters">
                            <Collection>
                                <Record Type="Common.ValueListParameterInOut">
                                    <PropertyValue Property="LocalDataProperty" PropertyPath="DeliveryCalendarQuarter"/>
                                    <PropertyValue Property="ValueListProperty" String="CalendarQuarter"/>
                                </Record>
                                <Record Type="Common.ValueListParameterDisplayOnly">
                                    <PropertyValue Property="ValueListProperty" String="CalendarQuarterT"/>
                                </Record>
                            </Collection>
                        </PropertyValue>
                    </Record>
                </Annotation>
            </Annotations>
            <Annotations Target="SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType/DeliveryCalendarMonth" xmlns="http://docs.oasis-open.org/odata/ns/edm">
                <Annotation Term="Common.ValueList">
                    <Record>
                        <PropertyValue Property="Label" String="Calendar Month"/>
                        <PropertyValue Property="CollectionPath" String="SEPMRA_C_ALP_CalendarMonthVH"/>
                        <PropertyValue Property="SearchSupported" Bool="true"/>
                        <PropertyValue Property="Parameters">
                            <Collection>
                                <Record Type="Common.ValueListParameterInOut">
                                    <PropertyValue Property="LocalDataProperty" PropertyPath="DeliveryCalendarMonth"/>
                                    <PropertyValue Property="ValueListProperty" String="CalendarMonth"/>
                                </Record>
                                <Record Type="Common.ValueListParameterInOut">
                                    <PropertyValue Property="LocalDataProperty" PropertyPath="DeliveryCalendarQuarter"/>
                                    <PropertyValue Property="ValueListProperty" String="CalendarQuarter"/>
                                </Record>
                                <Record Type="Common.ValueListParameterDisplayOnly">
                                    <PropertyValue Property="ValueListProperty" String="CalendarMonthT"/>
                                </Record>
                            </Collection>
                        </PropertyValue>
                    </Record>
                </Annotation>
            </Annotations>
            <Annotations Target="SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType/Product" xmlns="http://docs.oasis-open.org/odata/ns/edm">
                <Annotation Term="Common.ValueList">
                    <Record>
                        <PropertyValue Property="Label" String="Product"/>
                        <PropertyValue Property="CollectionPath" String="SEPMRA_C_ALP_ProductVH"/>
                        <PropertyValue Property="SearchSupported" Bool="true"/>
                        <PropertyValue Property="Parameters">
                            <Collection>
                                <Record Type="Common.ValueListParameterInOut">
                                    <PropertyValue Property="LocalDataProperty" PropertyPath="Product"/>
                                    <PropertyValue Property="ValueListProperty" String="Product"/>
                                </Record>
                                <Record Type="Common.ValueListParameterInOut">
                                    <PropertyValue Property="LocalDataProperty" PropertyPath="ProductCategory"/>
                                    <PropertyValue Property="ValueListProperty" String="ProductCategory"/>
                                </Record>
                                <Record Type="Common.ValueListParameterInOut">
                                    <PropertyValue Property="LocalDataProperty" PropertyPath="MainProductCategory"/>
                                    <PropertyValue Property="ValueListProperty" String="MainProductCategory"/>
                                </Record>
                                <Record Type="Common.ValueListParameterDisplayOnly">
                                    <PropertyValue Property="ValueListProperty" String="ProductName"/>
                                </Record>
                                <Record Type="Common.ValueListParameterDisplayOnly">
                                    <PropertyValue Property="ValueListProperty" String="ProductDescription"/>
                                </Record>
                            </Collection>
                        </PropertyValue>
                    </Record>
                </Annotation>
            </Annotations>
            <Annotations Target="SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType/ProductCategory" xmlns="http://docs.oasis-open.org/odata/ns/edm">
                <Annotation Term="Common.ValueList">
                    <Record>
                        <PropertyValue Property="Label" String="Product Sub-Category"/>
                        <PropertyValue Property="CollectionPath" String="SEPMRA_C_ALP_ProductCatVH"/>
                        <PropertyValue Property="SearchSupported" Bool="true"/>
                        <PropertyValue Property="Parameters">
                            <Collection>
                                <Record Type="Common.ValueListParameterInOut">
                                    <PropertyValue Property="LocalDataProperty" PropertyPath="ProductCategory"/>
                                    <PropertyValue Property="ValueListProperty" String="ProductCategory"/>
                                </Record>
                                <Record Type="Common.ValueListParameterInOut">
                                    <PropertyValue Property="LocalDataProperty" PropertyPath="MainProductCategory"/>
                                    <PropertyValue Property="ValueListProperty" String="MainProductCategory"/>
                                </Record>
                            </Collection>
                        </PropertyValue>
                    </Record>
                </Annotation>
            </Annotations>
            <Annotations Target="SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType/MainProductCategory" xmlns="http://docs.oasis-open.org/odata/ns/edm">
                <Annotation Term="Common.ValueList">
                    <Record>
                        <PropertyValue Property="Label" String="Product Category"/>
                        <PropertyValue Property="CollectionPath" String="SEPMRA_C_ALP_ProductMainCatVH"/>
                        <PropertyValue Property="SearchSupported" Bool="true"/>
                        <PropertyValue Property="Parameters">
                            <Collection>
                                <Record Type="Common.ValueListParameterInOut">
                                    <PropertyValue Property="LocalDataProperty" PropertyPath="MainProductCategory"/>
                                    <PropertyValue Property="ValueListProperty" String="MainProductCategory"/>
                                </Record>
                            </Collection>
                        </PropertyValue>
                    </Record>
                </Annotation>
            </Annotations>
            <Annotations Target="SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType/SalesOrderOverallStatus" xmlns="http://docs.oasis-open.org/odata/ns/edm">
                <Annotation Term="Common.ValueList">
                    <Record>
                        <PropertyValue Property="Label" String="Sales Order Status"/>
                        <PropertyValue Property="CollectionPath" String="SEPMRA_C_ALP_SlsOrdStatusVH"/>
                        <PropertyValue Property="SearchSupported" Bool="true"/>
                        <PropertyValue Property="Parameters">
                            <Collection>
                                <Record Type="Common.ValueListParameterInOut">
                                    <PropertyValue Property="LocalDataProperty" PropertyPath="SalesOrderOverallStatus"/>
                                    <PropertyValue Property="ValueListProperty" String="SalesOrderOverallStatus"/>
                                </Record>
                                <Record Type="Common.ValueListParameterDisplayOnly">
                                    <PropertyValue Property="ValueListProperty" String="SalesOrderOverallStatus_Text"/>
                                </Record>
                            </Collection>
                        </PropertyValue>
                    </Record>
                </Annotation>
            </Annotations>
            <Annotations Target="SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType/SoldToParty" xmlns="http://docs.oasis-open.org/odata/ns/edm">
                <Annotation Term="Common.ValueList">
                    <Record>
                        <PropertyValue Property="Label" String="Customer"/>
                        <PropertyValue Property="CollectionPath" String="SEPMRA_C_ALP_CustomerVH"/>
                        <PropertyValue Property="SearchSupported" Bool="true"/>
                        <PropertyValue Property="Parameters">
                            <Collection>
                                <Record Type="Common.ValueListParameterInOut">
                                    <PropertyValue Property="LocalDataProperty" PropertyPath="SoldToParty"/>
                                    <PropertyValue Property="ValueListProperty" String="Customer"/>
                                </Record>
                                <Record Type="Common.ValueListParameterDisplayOnly">
                                    <PropertyValue Property="ValueListProperty" String="CompanyName"/>
                                </Record>
                                <Record Type="Common.ValueListParameterDisplayOnly">
                                    <PropertyValue Property="ValueListProperty" String="Country"/>
                                </Record>
                            </Collection>
                        </PropertyValue>
                    </Record>
                </Annotation>
            </Annotations>
            <Annotations Target="SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType/SoldToPartyCountry" xmlns="http://docs.oasis-open.org/odata/ns/edm">
                <Annotation Term="Common.ValueList">
                    <Record>
                        <PropertyValue Property="Label" String="Country"/>
                        <PropertyValue Property="CollectionPath" String="SEPMRA_C_ALP_CountryVH"/>
                        <PropertyValue Property="SearchSupported" Bool="true"/>
                        <PropertyValue Property="Parameters">
                            <Collection>
                                <Record Type="Common.ValueListParameterInOut">
                                    <PropertyValue Property="LocalDataProperty" PropertyPath="SoldToPartyCountry"/>
                                    <PropertyValue Property="ValueListProperty" String="Country"/>
                                </Record>
                                <Record Type="Common.ValueListParameterDisplayOnly">
                                    <PropertyValue Property="ValueListProperty" String="CountryT"/>
                                </Record>
                            </Collection>
                        </PropertyValue>
                    </Record>
                </Annotation>
            </Annotations>
            <Annotations Target="SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType/Supplier" xmlns="http://docs.oasis-open.org/odata/ns/edm">
                <Annotation Term="Common.ValueList">
                    <Record>
                        <PropertyValue Property="Label" String="Supplier"/>
                        <PropertyValue Property="CollectionPath" String="SEPMRA_C_ALP_SupplierVH"/>
                        <PropertyValue Property="SearchSupported" Bool="true"/>
                        <PropertyValue Property="Parameters">
                            <Collection>
                                <Record Type="Common.ValueListParameterInOut">
                                    <PropertyValue Property="LocalDataProperty" PropertyPath="Supplier"/>
                                    <PropertyValue Property="ValueListProperty" String="Supplier"/>
                                </Record>
                                <Record Type="Common.ValueListParameterDisplayOnly">
                                    <PropertyValue Property="ValueListProperty" String="CompanyName"/>
                                </Record>
                            </Collection>
                        </PropertyValue>
                    </Record>
                </Annotation>
            </Annotations>
            <Annotations Target="SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType/QuantityUnit" xmlns="http://docs.oasis-open.org/odata/ns/edm">
                <Annotation Term="Common.ValueList">
                    <Record>
                        <PropertyValue Property="Label" String="Quantity Unit"/>
                        <PropertyValue Property="CollectionPath" String="SEPMRA_C_ALP_QuantityUnitVH"/>
                        <PropertyValue Property="SearchSupported" Bool="true"/>
                        <PropertyValue Property="Parameters">
                            <Collection>
                                <Record Type="Common.ValueListParameterInOut">
                                    <PropertyValue Property="LocalDataProperty" PropertyPath="QuantityUnit"/>
                                    <PropertyValue Property="ValueListProperty" String="UnitOfMeasure"/>
                                </Record>
                                <Record Type="Common.ValueListParameterDisplayOnly">
                                    <PropertyValue Property="ValueListProperty" String="UnitOfMeasureT"/>
                                </Record>
                            </Collection>
                        </PropertyValue>
                    </Record>
                </Annotation>
            </Annotations>
            <Annotations Target="SEPMRA_SO_ANA.SEPMRA_C_ALP_ProductVHType" xmlns="http://docs.oasis-open.org/odata/ns/edm">
                <Annotation Term="Common.SemanticKey">
                    <Collection>
                        <PropertyPath>Product</PropertyPath>
                    </Collection>
                </Annotation>
            </Annotations>
            <Annotations Target="SEPMRA_SO_ANA.SEPMRA_C_ALP_SlsOrdItemCubeType" xmlns="http://docs.oasis-open.org/odata/ns/edm">
                <Annotation Term="Common.SemanticKey">
                    <Collection>
                        <PropertyPath>SalesOrderItem</PropertyPath>
                        <PropertyPath>SalesOrder</PropertyPath>
                    </Collection>
                </Annotation>
            </Annotations>
            <Annotations Target="SEPMRA_SO_ANA.SEPMRA_C_ALP_TotalSalesKPIType" xmlns="http://docs.oasis-open.org/odata/ns/edm">
                <Annotation Term="Common.SemanticKey">
                    <Collection>
                        <PropertyPath>DeliveryCalendarQuarter</PropertyPath>
                        <PropertyPath>DeliveryCalendarYear</PropertyPath>
                    </Collection>
                </Annotation>
            </Annotations>
            <atom:link rel="self" href="http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/$metadata" xmlns:atom="http://www.w3.org/2005/Atom"/>
            <atom:link rel="latest-version" href="http://mifod.mioffice.cn:8000/sap/opu/odata/sap/SEPMRA_SO_ANA/$metadata" xmlns:atom="http://www.w3.org/2005/Atom"/>
        </Schema>
    </edmx:DataServices>
</edmx:Edmx>`);


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "../../node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm2015/index.js");
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




















const urls = [
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
let HttpMockRequestInterceptor = class HttpMockRequestInterceptor {
    constructor(injector) {
        this.injector = injector;
    }
    intercept(request, next) {
        for (const element of urls) {
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
        console.log('Loaded from http call :' + request.url);
        return next.handle(request);
    }
};
HttpMockRequestInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]])
], HttpMockRequestInterceptor);

function mergeDeep(target, source) {
    const isObject = (obj) => obj && typeof obj === 'object';
    if (!isObject(target) || !isObject(source)) {
        return source;
    }
    Object.keys(source).forEach(key => {
        const targetValue = target[key];
        const sourceValue = source[key];
        if (Array.isArray(targetValue) && Array.isArray(sourceValue)) {
            sourceValue.forEach((source, index) => {
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
const environment = {
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "../../node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


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