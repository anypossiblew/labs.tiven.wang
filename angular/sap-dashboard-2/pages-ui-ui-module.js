(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-ui-ui-module"],{

/***/ "./src/app/pages/ui/buttons/buttons.component.html":
/*!*********************************************************!*\
  !*** ./src/app/pages/ui/buttons/buttons.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"mdl-cell mdl-cell--3-col-desktop mdl-cell--4-col-tablet mdl-cell--2-col-phone buttons-basic\">\r\n  <base-card>\r\n    <base-card-title>\r\n      <h2 class=\"mdl-card__title-text\">Basic buttons</h2>\r\n    </base-card-title>\r\n    <base-card-body>\r\n      <ul class=\"mdl-list pull-left\">\r\n        <li class=\"mdl-list__item\">\r\n          <span class=\"text-color--gray\">Normal</span>\r\n        </li>\r\n        <li *ngFor=\"let color of colors1\" class=\"mdl-list__item\">\r\n          <button class=\"mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect button--colored-{{ color }}\">\r\n            Button\r\n          </button>\r\n        </li>\r\n      </ul>\r\n      <ul class=\"mdl-list pull-left\">\r\n        <li class=\"mdl-list__item\">\r\n          <span class=\"text-color--gray\">Disabled</span>\r\n        </li>\r\n        <li *ngFor=\"let color of colors1\" class=\"mdl-list__item\">\r\n          <button class=\"mdl-button mdl-js-button mdl-button--raised button--colored-{{ color }}\" disabled>\r\n            Button\r\n          </button>\r\n        </li>\r\n      </ul>\r\n    </base-card-body>\r\n  </base-card>\r\n</div>\r\n\r\n<div class=\"mdl-cell mdl-cell--3-col-desktop mdl-cell--4-col-tablet mdl-cell--2-col-phone buttons-with-icons\">\r\n  <base-card>\r\n    <base-card-title>\r\n      <h2 class=\"mdl-card__title-text\">Buttons with icons</h2>\r\n    </base-card-title>\r\n    <base-card-body>\r\n      <ul class=\"mdl-list pull-left\">\r\n        <li class=\"mdl-list__item\">\r\n          <span class=\"text-color--gray\">Normal</span>\r\n        </li>\r\n        <li *ngFor=\"let item of buttonsWithIcons\" class=\"mdl-list__item\">\r\n          <button class=\"mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect button--colored-{{ item.color }}\">\r\n            <i class=\"material-icons\">{{ item.icon }}</i>\r\n            {{ item.action | titlecase }}\r\n          </button>\r\n        </li>\r\n      </ul>\r\n      <ul class=\"mdl-list pull-left\">\r\n        <li class=\"mdl-list__item\">\r\n          <span class=\"text-color--gray\">Disabled</span>\r\n        </li>\r\n        <li *ngFor=\"let item of buttonsWithIcons\" class=\"mdl-list__item\">\r\n          <button class=\"mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect button--colored-{{ item.color }}\" disabled>\r\n            <i class=\"material-icons\">{{ item.icon }}</i>\r\n            {{ item.action | titlecase }}\r\n          </button>\r\n        </li>\r\n      </ul>\r\n    </base-card-body>\r\n  </base-card>\r\n</div>\r\n\r\n<div class=\"mdl-cell mdl-cell--3-col-desktop mdl-cell--4-col-tablet mdl-cell--2-col-phone buttons-social\">\r\n  <base-card>\r\n    <base-card-title>\r\n      <h2 class=\"mdl-card__title-text\">Social buttons</h2>\r\n    </base-card-title>\r\n    <base-card-body>\r\n      <ul class=\"mdl-list pull-left\">\r\n        <li class=\"mdl-list__item\">\r\n          <span class=\"text-color--gray\">Normal</span>\r\n        </li>\r\n        <li *ngFor=\"let name of socials\" class=\"mdl-list__item\">\r\n          <button class=\"mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect button--{{ name }}\">\r\n            <i class=\"material-icons\"></i>\r\n            {{ name | titlecase }}\r\n          </button>\r\n        </li>\r\n      </ul>\r\n      <ul class=\"mdl-list pull-left\">\r\n        <li class=\"mdl-list__item\">\r\n          <span class=\"text-color--gray\">Disabled</span>\r\n        </li>\r\n        <li *ngFor=\"let name of socials\" class=\"mdl-list__item\">\r\n          <button class=\"mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect button--{{ name }}\" disabled>\r\n            <i class=\"material-icons\"></i>\r\n            {{ name | titlecase }}\r\n          </button>\r\n        </li>\r\n      </ul>\r\n    </base-card-body>\r\n  </base-card>\r\n</div>\r\n\r\n<div class=\"mdl-cell mdl-cell--3-col-desktop mdl-cell--6-col-tablet mdl-cell--4-col-phone buttons-icons\">\r\n  <base-card>\r\n    <base-card-title>\r\n      <h2 class=\"mdl-card__title-text\">Icon buttons</h2>\r\n    </base-card-title>\r\n    <base-card-body>\r\n      <ul class=\"mdl-list pull-left\">\r\n        <li class=\"mdl-list__item\">\r\n          <span class=\"text-color--gray\">Normal</span>\r\n        </li>\r\n        <li *ngFor=\"let item of iconButtons\" class=\"mdl-list__item\">\r\n          <button class=\"mdl-button mdl-js-button mdl-button--icon mdl-js-ripple-effect button--colored-{{ item.color }}\">\r\n            <i class=\"material-icons\">{{ item.icon }}</i>\r\n          </button>\r\n        </li>\r\n      </ul>\r\n      <ul class=\"mdl-list pull-left\">\r\n        <li class=\"mdl-list__item\">\r\n          <span class=\"text-color--gray\">Social</span>\r\n        </li>\r\n        <li *ngFor=\"let name of socials\" class=\"mdl-list__item\">\r\n          <button class=\"mdl-button mdl-js-button mdl-button--icon mdl-js-ripple-effect button--{{ name }}\">\r\n            <i class=\"material-icons\"></i>\r\n          </button>\r\n        </li>\r\n      </ul>\r\n      <ul class=\"mdl-list pull-left\">\r\n        <li class=\"mdl-list__item\">\r\n          <span class=\"text-color--gray\">Disabled</span>\r\n        </li>\r\n        <li *ngFor=\"let item of iconButtons\" class=\"mdl-list__item\">\r\n          <button class=\"mdl-button mdl-js-button mdl-button--icon mdl-js-ripple-effect button--colored-{{ item.color }}\" disabled>\r\n            <i class=\"material-icons\">{{ item.icon }}</i>\r\n          </button>\r\n        </li>\r\n      </ul>\r\n      <ul class=\"mdl-list pull-left\">\r\n        <li class=\"mdl-list__item\">\r\n          <span class=\"text-color--gray\"></span>\r\n        </li>\r\n        <li *ngFor=\"let name of socials\" class=\"mdl-list__item\">\r\n          <button class=\"mdl-button mdl-js-button mdl-button--icon mdl-js-ripple-effect button--{{ name }}\" disabled>\r\n            <i class=\"material-icons\"></i>\r\n          </button>\r\n        </li>\r\n      </ul>\r\n    </base-card-body>\r\n  </base-card>\r\n</div>\r\n\r\n<div class=\"mdl-cell mdl-cell--3-col-desktop mdl-cell--6-col-tablet mdl-cell--4-col-phone buttons-icons\">\r\n  <base-card>\r\n    <base-card-title>\r\n      <h2 class=\"mdl-card__title-text\"> Raised Icon buttons</h2>\r\n    </base-card-title>\r\n    <base-card-body>\r\n      <ul class=\"mdl-list pull-left\">\r\n        <li class=\"mdl-list__item\">\r\n          <span class=\"text-color--gray\">Normal</span>\r\n        </li>\r\n        <li *ngFor=\"let item of iconButtons\" class=\"mdl-list__item\">\r\n          <button class=\"mdl-button mdl-js-button mdl-button--icon mdl-button--raised mdl-js-ripple-effect button--colored-{{ item.color }}\">\r\n            <i class=\"material-icons\">{{ item.icon }}</i>\r\n          </button>\r\n        </li>\r\n      </ul>\r\n      <ul class=\"mdl-list pull-left\">\r\n        <li class=\"mdl-list__item\">\r\n          <span class=\"text-color--gray\">Social</span>\r\n        </li>\r\n        <li *ngFor=\"let name of socials\" class=\"mdl-list__item\">\r\n          <button class=\"mdl-button mdl-js-button mdl-button--icon mdl-button--raised mdl-js-ripple-effect button--{{ name }}\">\r\n            <i class=\"material-icons\"></i>\r\n          </button>\r\n        </li>\r\n      </ul>\r\n      <ul class=\"mdl-list pull-left\">\r\n        <li class=\"mdl-list__item\">\r\n          <span class=\"text-color--gray\">Disabled</span>\r\n        </li>\r\n        <li *ngFor=\"let item of iconButtons\" class=\"mdl-list__item\">\r\n          <button class=\"mdl-button mdl-js-button mdl-button--icon mdl-button--raised mdl-js-ripple-effect button--colored-{{ item.color }}\" disabled>\r\n            <i class=\"material-icons\">{{ item.icon }}</i>\r\n          </button>\r\n        </li>\r\n      </ul>\r\n      <ul class=\"mdl-list pull-left\">\r\n        <li class=\"mdl-list__item\">\r\n          <span class=\"text-color--gray\"></span>\r\n        </li>\r\n        <li *ngFor=\"let name of socials\" class=\"mdl-list__item\">\r\n          <button class=\"mdl-button mdl-js-button mdl-button--icon mdl-button--raised mdl-js-ripple-effect button--{{ name }}\" disabled>\r\n            <i class=\"material-icons\"></i>\r\n          </button>\r\n        </li>\r\n      </ul>\r\n    </base-card-body>\r\n  </base-card>\r\n</div>\r\n\r\n<div class=\"mdl-cell mdl-cell--4-col-desktop mdl-cell--7-col-tablet mdl-cell--4-col-phone\">\r\n  <base-card>\r\n    <base-card-title>\r\n      <h2 class=\"mdl-card__title-text\">Buttons without background</h2>\r\n    </base-card-title>\r\n    <base-card-body>\r\n      <ul class=\"mdl-list pull-left\">\r\n        <li class=\"mdl-list__item\">\r\n          <span class=\"text-color--gray\">Basic button</span>\r\n        </li>\r\n        <li *ngFor=\"let color of colors1\" class=\"mdl-list__item\">\r\n          <button class=\"mdl-button mdl-js-button mdl-js-ripple-effect color-text--{{ color }}\">\r\n            Button\r\n          </button>\r\n        </li>\r\n      </ul>\r\n      <ul class=\"mdl-list pull-left\">\r\n        <li class=\"mdl-list__item\">\r\n          <span class=\"text-color--gray\">Disabled</span>\r\n        </li>\r\n        <li *ngFor=\"let color of colors1\" class=\"mdl-list__item\">\r\n          <button class=\"mdl-button mdl-js-button button--colored-{{ color }}\" disabled>\r\n            Button\r\n          </button>\r\n        </li>\r\n      </ul>\r\n      <ul class=\"mdl-list pull-left\">\r\n        <li class=\"mdl-list__item\">\r\n          <span class=\"text-color--gray\">Button with icon</span>\r\n        </li>\r\n        <li *ngFor=\"let item of buttonsWithIcons\" class=\"mdl-list__item\">\r\n          <button class=\"mdl-button mdl-js-button mdl-js-ripple-effect button--colored-{{ item.color }}\">\r\n            <i class=\"material-icons\">{{ item.icon }}</i>\r\n            {{ item.action | titlecase }}\r\n          </button>\r\n        </li>\r\n      </ul>\r\n      <ul class=\"mdl-list pull-left\">\r\n        <li class=\"mdl-list__item\">\r\n          <span class=\"text-color--gray\">Social</span>\r\n        </li>\r\n        <li *ngFor=\"let name of socials\" class=\"mdl-list__item\">\r\n          <button class=\"mdl-button mdl-js-button mdl-js-ripple-effect button--{{ name }}\">\r\n            <i class=\"material-icons\"></i>\r\n            {{ name | titlecase }}\r\n          </button>\r\n        </li>\r\n      </ul>\r\n    </base-card-body>\r\n  </base-card>\r\n</div>\r\n\r\n<div class=\"mdl-cell mdl-cell--3-col-desktop mdl-cell--5-col-tablet mdl-cell--4-col-phone buttons-fab\">\r\n  <base-card>\r\n    <base-card-title>\r\n      <h2 class=\"mdl-card__title-text\">Fab button</h2>\r\n    </base-card-title>\r\n    <base-card-body>\r\n      <ul class=\"mdl-list pull-left\">\r\n        <li class=\"mdl-list__item\">\r\n          <span class=\"text-color--gray\">Colored FAB</span>\r\n        </li>\r\n        <li class=\"mdl-list__item\">\r\n          <button class=\"mdl-button mdl-js-button mdl-button--fab mdl-button--colored\">\r\n            <i class=\"material-icons\">add</i>\r\n          </button>\r\n        </li>\r\n      </ul>\r\n      <ul class=\"mdl-list pull-left\">\r\n        <li class=\"mdl-list__item\">\r\n          <span class=\"text-color--gray\">With ripple</span>\r\n        </li>\r\n        <li class=\"mdl-list__item\">\r\n          <button class=\"mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored\">\r\n            <i class=\"material-icons\">add</i>\r\n          </button>\r\n        </li>\r\n      </ul>\r\n      <ul class=\"mdl-list pull-left\">\r\n        <li class=\"mdl-list__item\">\r\n          <span class=\"text-color--gray\">Disable</span>\r\n        </li>\r\n        <li class=\"mdl-list__item\">\r\n          <button class=\"mdl-button mdl-js-button mdl-button--fab mdl-button--colored\" disabled>\r\n            <i class=\"material-icons\">add</i>\r\n          </button>\r\n        </li>\r\n      </ul>\r\n    </base-card-body>\r\n  </base-card>\r\n</div>\r\n\r\n<div class=\"mdl-cell mdl-cell--12-col-desktop mdl-cell--12-col-tablet mdl-cell--4-col-phone\">\r\n  <base-card>\r\n    <base-card-title>\r\n      <h2 class=\"mdl-card__title-text\">How to use</h2>\r\n    </base-card-title>\r\n    <base-card-body>\r\n      <p>\r\n        To use button with color background, you need to use CSS class naming as the\r\n        corresponding color in lowercase with prefix <code><b>button--colored-</b></code>.<br>\r\n        If the color name is composed of more than one world, the words are separated by a dash \"-\".<br>\r\n        You can see the names of the colors <a href=\"ui-colors.html\">here</a>.\r\n        <br><br>\r\n        <i class=\"color-text--teal\">Example: You want to use colored button with color naming \"Teal\". CSS class for this case is <code><b>.button--colored-teal</b></code></i>\r\n        <br><br><br>\r\n        To use social button, you need to use CSS class naming as the\r\n        corresponding social network in lowercase with prefix <code><b>button--</b></code>.\r\n        <br><br>\r\n        <i class=\"color-text--teal\">Example: You want to use Facebook button. CSS class for this case is <code><b>.button--facebook</b></code></i>\r\n      </p>\r\n    </base-card-body>\r\n  </base-card>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/pages/ui/buttons/buttons.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/pages/ui/buttons/buttons.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".ui-buttons h6 {\n  margin-top: 8px;\n  margin-bottom: 0; }\n\n.ui-buttons .mdl-button--icon .material-icons {\n  font-size: 20px; }\n\n.ui-buttons .mdl-list__item {\n  padding: 8px 16px; }\n\n.ui-buttons .mdl-card__supporting-text {\n  display: flex;\n  justify-content: space-around; }\n\n.ui-buttons .buttons-with-icons,\n.ui-buttons .buttons-social,\n.ui-buttons .buttons-basic,\n.ui-buttons .buttons-icons {\n  min-width: 350px; }\n\n.ui-buttons .buttons-with-icons .mdl-card,\n  .ui-buttons .buttons-social .mdl-card,\n  .ui-buttons .buttons-basic .mdl-card,\n  .ui-buttons .buttons-icons .mdl-card {\n    height: 100%; }\n\n.ui-buttons .buttons-with-icons .mdl-button:not(.mdl-button--icon),\n  .ui-buttons .buttons-social .mdl-button:not(.mdl-button--icon),\n  .ui-buttons .buttons-basic .mdl-button:not(.mdl-button--icon),\n  .ui-buttons .buttons-icons .mdl-button:not(.mdl-button--icon) {\n    padding: 0 8px;\n    min-width: 125px; }\n"

/***/ }),

/***/ "./src/app/pages/ui/buttons/buttons.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/ui/buttons/buttons.component.ts ***!
  \*******************************************************/
/*! exports provided: ButtonsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonsComponent", function() { return ButtonsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var theme_components_upgradable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! theme/components/upgradable */ "./src/theme/components/upgradable/index.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ButtonsComponent = /** @class */ (function (_super) {
    __extends(ButtonsComponent, _super);
    function ButtonsComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.mdlGrid = true;
        _this.uiButtons = true;
        _this.colors1 = [
            'light-blue',
            'teal',
            'orange',
            'red',
            'green',
            'purple',
        ];
        _this.colors2 = [
            'light-blue',
            'teal',
            'orange',
            'red',
            'purple',
            'white',
        ];
        _this.actions = [
            'archive',
            'create',
            'drafts',
            'forward',
            'attach',
            'reply',
        ];
        _this.icons1 = [
            'assignment_returned',
            'create',
            'drafts',
            'forward',
            'attach_file',
            'reply',
        ];
        _this.icons2 = [
            'assignment_returned',
            'create',
            'drafts',
            'forward',
            'reply',
            'send',
        ];
        _this.socials = [
            'facebook',
            'twitter',
            'dribbble',
            'behance',
            'linkedin',
            'github',
        ];
        _this.buttonsWithIcons = _this.colors1.map(function (color, i) { return ({ color: color, action: _this.actions[i], icon: _this.icons1[i] }); });
        _this.iconButtons = _this.colors2.map(function (color, i) { return ({ color: color, icon: _this.icons2[i] }); });
        return _this;
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])('class.mdl-grid'),
        __metadata("design:type", Object)
    ], ButtonsComponent.prototype, "mdlGrid", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])('class.ui-buttons'),
        __metadata("design:type", Object)
    ], ButtonsComponent.prototype, "uiButtons", void 0);
    ButtonsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-buttons',
            template: __webpack_require__(/*! ./buttons.component.html */ "./src/app/pages/ui/buttons/buttons.component.html"),
            styles: [__webpack_require__(/*! ./buttons.component.scss */ "./src/app/pages/ui/buttons/buttons.component.scss")],
        })
    ], ButtonsComponent);
    return ButtonsComponent;
}(theme_components_upgradable__WEBPACK_IMPORTED_MODULE_1__["UpgradableComponent"]));



/***/ }),

/***/ "./src/app/pages/ui/buttons/index.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/ui/buttons/index.ts ***!
  \*******************************************/
/*! exports provided: ButtonsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _buttons_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./buttons.component */ "./src/app/pages/ui/buttons/buttons.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ButtonsComponent", function() { return _buttons_component__WEBPACK_IMPORTED_MODULE_0__["ButtonsComponent"]; });




/***/ }),

/***/ "./src/app/pages/ui/cards/cards.component.html":
/*!*****************************************************!*\
  !*** ./src/app/pages/ui/cards/cards.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"mdl-cell mdl-cell--12-col-desktop mdl-cell--12-col-tablet mdl-cell--4-col-phone\">\r\n  <h3>Basic cards</h3>\r\n</div>\r\n\r\n<div class=\"mdl-cell mdl-cell--4-col-desktop mdl-cell--4-col-tablet mdl-cell--2-col-phone\">\r\n  <base-card>\r\n    <base-card-title>\r\n      <h2 class=\"mdl-card__title-text\">Shanghai</h2>\r\n    </base-card-title>\r\n    <base-card-body>\r\n      <small>City in China</small>\r\n\r\n      Shanghai, on China’s central coast, is the country's biggest city and a global financial hub.\r\n      Its heart is the Bund, a famed waterfront promenade lined with colonial-era buildings.\r\n      Across the Huangpu River rises the Pudong district’s futuristic skyline, including\r\n      632m Shanghai Tower and the Oriental Pearl TV Tower, with distinctive pink spheres.\r\n      Sprawling Yu Garden has traditional pavilions, towers and ponds.\r\n      <br><br>\r\n      <b>Weather:</b> 9°C, Wind NE at 11 km/h, 79% Humidity\r\n      <br>\r\n      <b>Local time:</b> Thursday 9:58 PM\r\n      <br>\r\n      <b>Population:</b> 24.15 million (2015)\r\n    </base-card-body>\r\n  </base-card>\r\n</div>\r\n\r\n<div class=\"mdl-cell mdl-cell--4-col-desktop mdl-cell--4-col-tablet mdl-cell--2-col-phone\">\r\n  <base-card>\r\n    <base-card-title>\r\n      <h2 class=\"mdl-card__title-text\">Moscow</h2>\r\n    </base-card-title>\r\n    <base-card-body expanded>\r\n      <small>Capital of Russia</small>\r\n      Moscow, on the Moskva River in western Russia, is the nation’s cosmopolitan capital.\r\n      In its historic core is the Kremlin, a complex that’s home to the president and tsarist treasures in the Armoury.\r\n      Outside its walls is Red Square, Russia's symbolic center. It's home to Lenin’s Mausoleum,\r\n      the State Historical Museum's comprehensive collection and St. Basil’s Cathedral, known for its colorful,\r\n      onion-shaped domes.\r\n      <br><br>\r\n      <b>Weather:</b> 9°C, Wind W at 26 km/h, 47% Humidity\r\n      <br>\r\n      <b>Local time:</b> Thursday 5:13 PM\r\n      <br>\r\n      <b>Population:</b> 11.92 million (2012)\r\n    </base-card-body>\r\n    <base-card-actions class=\"mdl-card--border\">\r\n      <a\r\n        class=\"mdl-button button--colored-orange mdl-js-button mdl-js-ripple-effect\"\r\n        href=\"https://www.google.by/maps/place/Moscow,+Russia/@55.7494733,37.35232,10z/data=!3m1!4b1!4m5!3m4!1s0x46b54afc73d4b0c9:0x3d44d6cc5757cf4c!8m2!3d55.755826!4d37.6173\"\r\n        target=\"_blank\">\r\n        Show on map\r\n      </a>\r\n    </base-card-actions>\r\n  </base-card>\r\n</div>\r\n\r\n<div class=\"mdl-cell mdl-cell--4-col-desktop mdl-cell--4-col-tablet mdl-cell--2-col-phone\">\r\n  <base-card>\r\n    <base-card-title>\r\n      <h2 class=\"mdl-card__title-text\">London</h2>\r\n    </base-card-title>\r\n    <base-card-body expanded>\r\n      <small>Capital of England</small>\r\n      London, the capital of England and the United Kingdom, is a 21st-century city with history stretching back to Roman times.\r\n      At its centre stand the imposing Houses of Parliament, the iconic ‘Big Ben’ clock tower and Westminster Abbey,\r\n      site of British monarch coronations. Across the Thames River, the London Eye observation wheel provides panoramic\r\n      views of the South Bank cultural complex, and the entire city.\r\n      <br><br>\r\n      <b>Weather:</b> 11°C, Wind NE at 31 km/h, 57% Humidity\r\n      <br>\r\n      <b>Local time:</b> Thursday 2:22 PM\r\n      <br>\r\n      <b>Population:</b> 8.674 million (2015)\r\n    </base-card-body>\r\n    <base-card-actions>\r\n      <a class=\"mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect button--colored-orange pull-right\"\r\n         href=\"https://www.google.by/maps/place/London,+UK/data=!4m2!3m1!1s0x47d8a00baf21de75:0x52963a5addd52a99?sa=X&ved=0ahUKEwig76SihPfSAhVCCpoKHTuzBDsQ8gEIeTAN\"\r\n         target=\"_blank\">\r\n        Show on map\r\n      </a>\r\n    </base-card-actions>\r\n    <base-card-menu>\r\n      <button class=\"mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect\">\r\n        <i class=\"material-icons\">more_vert</i>\r\n      </button>\r\n    </base-card-menu>\r\n  </base-card>\r\n</div>\r\n\r\n\r\n<div class=\"mdl-cell mdl-cell--12-col-desktop mdl-cell--12-col-tablet mdl-cell--4-col-phone\">\r\n  <h3>Image cards</h3>\r\n</div>\r\n\r\n<div class=\"mdl-cell mdl-cell--4-col-desktop mdl-cell--4-col-tablet mdl-cell--2-col-phone\">\r\n  <base-card>\r\n    <base-card-title>\r\n      <h2 class=\"mdl-card__title-text\">Istanbul</h2>\r\n    </base-card-title>\r\n    <base-card-body>\r\n      <small>City in Turkey</small>\r\n      Istanbul is a major city in Turkey that straddles Europe and Asia across the Bosphorus Strait.\r\n      Its Old City reflects cultural influences of the many empires that once ruled here.\r\n      In the Sultanahmet district, the open-air, Roman-era Hippodrome was for centuries the site of chariot races,\r\n      and Egyptian obelisks also remain.\r\n      The iconic Byzantine Hagia Sophia features a soaring 6th-century dome and rare Christian mosaics.\r\n      <br><br>\r\n      <b>Weather:</b> 12°C, Wind S at 13 km/h, 71% Humidity\r\n      <br>\r\n      <b>Local time:</b> Friday 4:00 PM\r\n      <br>\r\n      <b>Population:</b> 14.8 million (Dec 31, 2016)\r\n    </base-card-body>\r\n  </base-card>\r\n</div>\r\n\r\n<div class=\"mdl-cell mdl-cell--4-col-desktop mdl-cell--4-col-tablet mdl-cell--2-col-phone\">\r\n  <base-card>\r\n    <base-card-title>\r\n      <h2 class=\"mdl-card__title-text\">Tokyo</h2>\r\n    </base-card-title>\r\n    <base-card-body expanded>\r\n      <small>Capital of Japan</small>\r\n      Tokyo, officially Tokyo Metropolis, is the capital of Japan and one of its 47 prefectures.\r\n      The Greater Tokyo Area is the most populous metropolitan area in the world.\r\n      It is the seat of the Emperor of Japan and the Japanese government.\r\n      <a class=\"color-text--light-blue\" href=\"https://en.wikipedia.org/wiki/Tokyo\" target=\"_blank\">Wikipedia</a>\r\n      <br><br>\r\n      <b>Weather:</b> 5°C, Wind NW at 26 km/h, 54% Humidity\r\n      <br>\r\n      <b>Local time:</b> Friday 10:04 PM\r\n      <br>\r\n      <b>Population:</b> 13.62 million (Jul 31, 2016)\r\n    </base-card-body>\r\n    <base-card-actions class=\"mdl-card--border\">\r\n      <a class=\"mdl-button button--colored-light-blue mdl-js-button mdl-js-ripple-effect\"\r\n         href=\"https://www.google.by/maps/place/Tokyo,+Japan/@35.6730185,139.4302008,10z/data=!3m1!4b1!4m5!3m4!1s0x605d1b87f02e57e7:0x2e01618b22571b89!8m2!3d35.6894875!4d139.6917064\"\r\n         target=\"_blank\">\r\n        Show on map\r\n      </a>\r\n    </base-card-actions>\r\n  </base-card>\r\n</div>\r\n\r\n<div class=\"mdl-cell mdl-cell--4-col-desktop mdl-cell--4-col-tablet mdl-cell--2-col-phone\">\r\n  <base-card>\r\n    <base-card-title>\r\n      <h2 class=\"mdl-card__title-text\">São Paulo</h2>\r\n    </base-card-title>\r\n    <base-card-body expanded>\r\n      <small>Municipality in Brazil</small>\r\n      São Paulo, Brazil’s vibrant financial center, is among the world's most populous cities,\r\n      with numerous cultural institutions and a rich architectural tradition.\r\n      Its iconic buildings range from its neo-Gothic cathedral and the 1929 Martinelli skyscraper to modernist\r\n      architect Oscar Niemeyer’s curvy Edifício Copan.\r\n      The colonial-style Pátio do Colégio church marks where Jesuit priests founded the city in 1554.\r\n      <br><br>\r\n      <b>Weather:</b> 24°C, Wind E at 10 km/h, 62% Humidity\r\n      <br>\r\n      <b>Local time:</b> Friday 10:05 AM\r\n      <br>\r\n      <b>Population:</b> 12.04 million (2016)\r\n    </base-card-body>\r\n    <base-card-actions>\r\n      <a class=\"mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect button--colored-light-blue pull-right\"\r\n         href=\"https://www.google.by/maps/place/S%C3%A3o+Paulo,+State+of+S%C3%A3o+Paulo,+Brazil/data=!4m2!3m1!1s0x94ce448183a461d1:0x9ba94b08ff335bae?sa=X&ved=0ahUKEwjQ1pf_g_fSAhVHWSwKHQoNDc0Q8gEIjwEwEQ\"\r\n         target=\"_blank\">\r\n        Show on map\r\n      </a>\r\n    </base-card-actions>\r\n    <button class=\"mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored\">\r\n      <i class=\"material-icons\">favorite_border</i>\r\n    </button>\r\n    <base-card-menu>\r\n      <button class=\"mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect\">\r\n        <i class=\"material-icons\">share</i>\r\n      </button>\r\n    </base-card-menu>\r\n  </base-card>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/pages/ui/cards/cards.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/pages/ui/cards/cards.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/*------------------------------------*\\\n    $CONTENTS\n\\*------------------------------------*/\n/**\n * STYLE GUIDE VARIABLES------------------Declarations of Sass variables\n * -----Typography\n * -----Colors\n * -----Textfield\n * -----Switch\n * -----Spinner\n * -----Radio\n * -----Menu\n * -----List\n * -----Layout\n * -----Icon toggles\n * -----Footer\n * -----Column\n * -----Checkbox\n * -----Card\n * -----Button\n * -----Animation\n * -----Progress\n * -----Badge\n * -----Shadows\n * -----Grid\n * -----Data table\n * -----Dialog\n * -----Snackbar\n * -----Tooltip\n * -----Chip\n *\n * Even though all variables have the `!default` directive, most of them\n * should not be changed as they are dependent one another. This can cause\n * visual distortions (like alignment issues) that are hard to track down\n * and fix.\n */\n/* ==========  TYPOGRAPHY  ========== */\n/* We're splitting fonts into \"preferred\" and \"performance\" in order to optimize\n   page loading. For important text, such as the body, we want it to load\n   immediately and not wait for the web font load, whereas for other sections,\n   such as headers and titles, we're OK with things taking a bit longer to load.\n   We do have some optional classes and parameters in the mixins, in case you\n   definitely want to make sure you're using the preferred font and don't mind\n   the performance hit.\n   We should be able to improve on this once CSS Font Loading L3 becomes more\n   widely available.\n*/\n/* ==========  COLORS  ========== */\n/**\n*\n* Material design color palettes.\n* @see http://www.google.com/design/spec/style/color.html\n*\n**/\n/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/* ==========  Color Palettes  ========== */\n/* colors.scss */\n/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/* ==========  IMAGES  ========== */\n/* ==========  Color & Themes  ========== */\n/* ==========  Typography  ========== */\n/* ==========  Components  ========== */\n/* ==========  Standard Buttons  ========== */\n/* ==========  Icon Toggles  ========== */\n/* ==========  Radio Buttons  ========== */\n/* ==========  Ripple effect  ========== */\n/* ==========  Layout  ========== */\n/* ==========  Content Tabs  ========== */\n/* ==========  Checkboxes  ========== */\n/* ==========  Switches  ========== */\n/* ==========  Spinner  ========== */\n/* ==========  Text fields  ========== */\n/* ==========  Card  ========== */\n/* ==========  Sliders ========== */\n/* ========== Progress ========== */\n/* ==========  List ========== */\n/* ==========  Item ========== */\n/* ==========  Dropdown menu ========== */\n/* ==========  Tooltips  ========== */\n/* ==========  Footer  ========== */\n/* TEXTFIELD */\n/* SWITCH */\n/* SPINNER */\n/* RADIO */\n/* MENU */\n/* LIST */\n/* LAYOUT */\n/* ICON TOGGLE */\n/* FOOTER */\n/*mega-footer*/\n/*mini-footer*/\n/* CHECKBOX */\n/* CARD */\n/* Card dimensions */\n/* Cover image */\n/* BUTTON */\n/**\n *\n * Dimensions\n *\n */\n/* ANIMATION */\n/* PROGRESS */\n/* BADGE */\n/* SHADOWS */\n/* GRID */\n/* DATA TABLE */\n/* DIALOG */\n/* SNACKBAR */\n/* TOOLTIP */\n/* CHIP */\n/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/* Typography */\n/* Shadows */\n/* Animations */\n/* Dialog */\n/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/* ==========  Color Palettes  ========== */\n/* colors.scss */\n/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/* ==========  Color Palettes  ========== */\n/* colors.scss */\n/* ==========  IMAGES  ========== */\n/* ==========  Color & Themes  ========== */\n.text-color--smoke {\n  color: #666; }\n.color--gray {\n  background-color: #444 !important; }\n.color--dark-gray {\n  background-color: #333; }\n.color--smooth-gray {\n  background-color: #999 !important; }\n.text-color--smooth-gray {\n  color: #999 !important; }\n.color--red {\n  background-color: #f44336 !important; }\n.color-text--red {\n  color: #f44336 !important; }\n.color--orange {\n  background-color: #ffc107 !important; }\n.color-text--orange {\n  color: #ffc107 !important; }\n.color--amber {\n  background-color: #ff9800 !important; }\n.color-text--amber {\n  color: #ff9800 !important; }\n.color--green {\n  background-color: #00d45a !important; }\n.color-text--green {\n  color: #00d45a !important; }\n.color--light-blue {\n  background-color: #03a9f4 !important; }\n.color-text--light-blue {\n  color: #03a9f4 !important; }\n.color--purple {\n  background-color: #7726d3 !important; }\n.color-text--purple {\n  color: #7726d3 !important; }\n.color--teal {\n  background-color: #00bcd4 !important; }\n.color-text--teal {\n  color: #00bcd4 !important; }\n/* ==========  Typography  ========== */\n/* ==========  Components  ========== */\n/* ==========  Standard Buttons  ========== */\n/* ==========  Icon Toggles  ========== */\n/* ==========  Radio Buttons  ========== */\n/* ==========  Ripple effect  ========== */\n/* ==========  Layout  ========== */\n/* ==========  Content Tabs  ========== */\n/* ==========  Checkboxes  ========== */\n/* ==========  Switches  ========== */\n/* ==========  Spinner  ========== */\n/* ==========  Text fields  ========== */\n/* ==========  Card  ========== */\n/* ==========  Sliders ========== */\n/* ========== Progress ========== */\n/* ==========  List ========== */\n/* ==========  Item ========== */\n/* ==========  Dropdown menu ========== */\n/* ==========  Tooltips  ========== */\n/* ==========  Footer  ========== */\n/* TEXTFIELD */\n/* SWITCH */\n/* SPINNER */\n/* RADIO */\n/* MENU */\n/* LIST */\n/* LAYOUT */\n/* ICON */\n/* ICON TOGGLE */\n/* FOOTER */\n/* mega-footer */\n/* mini-footer */\n/* CHECKBOX */\n/* CARD */\n/* Card dimensions */\n/* Cover image */\n/* BUTTON */\n/* ANIMATION */\n/* PROGRESS */\n/* BADGE */\n/* SHADOWS */\n/* GRID */\n/* DATA TABLE */\n/* TOOLTIP */\n/* WIDGETS & COMPONENTS */\n/* Trending */\n/* label */\n/* charts */\n/* employer form */\n/* row */\n/* scroll */\n.ui-cards .mdl-card {\n  height: 100%; }\n.ui-cards .mdl-card .mdl-card__actions {\n    padding-top: 16px;\n    padding-bottom: 16px; }\n.ui-cards .mdl-button--fab {\n  position: absolute;\n  top: 212px;\n  right: 20px; }\n.ui-cards .mdl-cell:nth-last-of-type(1) .mdl-card__title, .ui-cards .mdl-cell:nth-last-of-type(2) .mdl-card__title, .ui-cards .mdl-cell:nth-last-of-type(3) .mdl-card__title {\n  color: #fff;\n  height: 240px;\n  background: transparent no-repeat center;\n  background-size: cover; }\n.ui-cards .mdl-cell:nth-last-of-type(1) .mdl-card__title .mdl-card__title-text, .ui-cards .mdl-cell:nth-last-of-type(2) .mdl-card__title .mdl-card__title-text, .ui-cards .mdl-cell:nth-last-of-type(3) .mdl-card__title .mdl-card__title-text {\n    font-size: 40px; }\n.ui-cards .mdl-cell:nth-last-of-type(1) .mdl-card__title {\n  background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0), rgba(0, 0, 0, 0), rgba(0, 0, 0, 0), rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.4)), url(\"assets/images/sao_paulo.jpg\"); }\n.ui-cards .mdl-cell:nth-last-of-type(2) .mdl-card__title {\n  background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0), rgba(0, 0, 0, 0), rgba(0, 0, 0, 0), rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.4)), url(\"assets/images/tokyo.jpg\"); }\n.ui-cards .mdl-cell:nth-last-of-type(3) .mdl-card__title {\n  background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0), rgba(0, 0, 0, 0), rgba(0, 0, 0, 0), rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.4)), url(\"assets/images/istanbul.jpg\"); }\n.ui-cards small {\n  color: #aaa;\n  display: block;\n  margin-bottom: 15px; }\n.ui-cards b {\n  color: #fff;\n  line-height: 1.4; }\n.ui-cards h3 {\n  color: #fff;\n  margin-bottom: 0; }\n"

/***/ }),

/***/ "./src/app/pages/ui/cards/cards.component.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/ui/cards/cards.component.ts ***!
  \***************************************************/
/*! exports provided: CardsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardsComponent", function() { return CardsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var theme_components_upgradable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! theme/components/upgradable */ "./src/theme/components/upgradable/index.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CardsComponent = /** @class */ (function (_super) {
    __extends(CardsComponent, _super);
    function CardsComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.mdlGrid = true;
        _this.uiCards = true;
        return _this;
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])('class.mdl-grid'),
        __metadata("design:type", Object)
    ], CardsComponent.prototype, "mdlGrid", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])('class.ui-cards'),
        __metadata("design:type", Object)
    ], CardsComponent.prototype, "uiCards", void 0);
    CardsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-cards',
            template: __webpack_require__(/*! ./cards.component.html */ "./src/app/pages/ui/cards/cards.component.html"),
            styles: [__webpack_require__(/*! ./cards.component.scss */ "./src/app/pages/ui/cards/cards.component.scss")],
        })
    ], CardsComponent);
    return CardsComponent;
}(theme_components_upgradable__WEBPACK_IMPORTED_MODULE_1__["UpgradableComponent"]));



/***/ }),

/***/ "./src/app/pages/ui/cards/index.ts":
/*!*****************************************!*\
  !*** ./src/app/pages/ui/cards/index.ts ***!
  \*****************************************/
/*! exports provided: CardsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _cards_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cards.component */ "./src/app/pages/ui/cards/cards.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CardsComponent", function() { return _cards_component__WEBPACK_IMPORTED_MODULE_0__["CardsComponent"]; });




/***/ }),

/***/ "./src/app/pages/ui/colors/colors.component.html":
/*!*******************************************************!*\
  !*** ./src/app/pages/ui/colors/colors.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"mdl-cell mdl-cell--3-col-desktop mdl-cell--3-col-tablet mdl-cell--2-col-phone\">\r\n  <base-card class=\"teal\">\r\n    <base-card-title>\r\n      <h2 class=\"mdl-card__title-text\">Teal</h2>\r\n    </base-card-title>\r\n    <base-card-body>\r\n      <h3>#00bcd4</h3>\r\n    </base-card-body>\r\n  </base-card>\r\n</div>\r\n\r\n<div class=\"mdl-cell mdl-cell--3-col-desktop mdl-cell--3-col-tablet mdl-cell--2-col-phone\">\r\n  <base-card class=\"red\">\r\n    <base-card-title>\r\n      <h2 class=\"mdl-card__title-text\">Red</h2>\r\n    </base-card-title>\r\n    <base-card-body>\r\n      <h3>#f44336</h3>\r\n    </base-card-body>\r\n  </base-card>\r\n</div>\r\n\r\n<div class=\"mdl-cell mdl-cell--3-col-desktop mdl-cell--3-col-tablet mdl-cell--2-col-phone\">\r\n  <base-card class=\"green\">\r\n    <base-card-title>\r\n      <h2 class=\"mdl-card__title-text\">Green</h2>\r\n    </base-card-title>\r\n    <base-card-body>\r\n      <h3>#00d45a</h3>\r\n    </base-card-body>\r\n  </base-card>\r\n</div>\r\n\r\n<div class=\"mdl-cell mdl-cell--3-col-desktop mdl-cell--3-col-tablet mdl-cell--2-col-phone\">\r\n  <base-card class=\"gray\">\r\n    <base-card-title>\r\n      <h2 class=\"mdl-card__title-text\">Basic gray</h2>\r\n    </base-card-title>\r\n    <base-card-body>\r\n      <h3>#444747</h3>\r\n    </base-card-body>\r\n  </base-card>\r\n</div>\r\n\r\n\r\n<div class=\"mdl-cell mdl-cell--3-col-desktop mdl-cell--3-col-tablet mdl-cell--2-col-phone\">\r\n  <base-card class=\"orange\">\r\n    <base-card-title>\r\n      <h2 class=\"mdl-card__title-text\">Orange</h2>\r\n    </base-card-title>\r\n    <base-card-body>\r\n      <h3>#ffc107</h3>\r\n    </base-card-body>\r\n  </base-card>\r\n</div>\r\n\r\n<div class=\"mdl-cell mdl-cell--3-col-desktop mdl-cell--3-col-tablet mdl-cell--2-col-phone\">\r\n  <base-card class=\"purple\">\r\n    <base-card-title>\r\n      <h2 class=\"mdl-card__title-text\">Purple</h2>\r\n    </base-card-title>\r\n    <base-card-body>\r\n      <h3>#7726d3</h3>\r\n    </base-card-body>\r\n  </base-card>\r\n</div>\r\n\r\n<div class=\"mdl-cell mdl-cell--3-col-desktop mdl-cell--3-col-tablet mdl-cell--2-col-phone\">\r\n  <base-card class=\"light-blue\">\r\n    <base-card-title>\r\n      <h2 class=\"mdl-card__title-text\">Light blue</h2>\r\n    </base-card-title>\r\n    <base-card-body>\r\n      <h3>#03A9F4</h3>\r\n    </base-card-body>\r\n  </base-card>\r\n</div>\r\n\r\n<div class=\"mdl-cell mdl-cell--3-col-desktop mdl-cell--3-col-tablet mdl-cell--2-col-phone\">\r\n  <base-card class=\"dark-gray\">\r\n    <base-card-title>\r\n      <h2 class=\"mdl-card__title-text\">Dark gray</h2>\r\n    </base-card-title>\r\n    <base-card-body>\r\n      <h3>#333434</h3>\r\n    </base-card-body>\r\n  </base-card>\r\n</div>\r\n\r\n\r\n<div class=\"mdl-cell mdl-cell--12-col-desktop mdl-cell--12-col-tablet mdl-cell--4-col-phone\">\r\n  <base-card>\r\n    <base-card-title>\r\n      <h2 class=\"mdl-card__title-text\">How to use</h2>\r\n    </base-card-title>\r\n    <base-card-body>\r\n      To use any color, you need to use Sass variable naming as the\r\n      corresponding color in lowercase with prefix <code>\"color-\"</code>.<br>\r\n      If the color name is composed of more than one world, the words are separated by a dash \"-\".\r\n      <br><br>\r\n      <i class=\"color-text--teal\">Example: You want to use color naming \"Teal\". Sass variable for this color is <code><b>$color-teal</b></code></i>\r\n    </base-card-body>\r\n  </base-card>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/pages/ui/colors/colors.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/pages/ui/colors/colors.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/*------------------------------------*\\\n    $CONTENTS\n\\*------------------------------------*/\n/**\n * STYLE GUIDE VARIABLES------------------Declarations of Sass variables\n * -----Typography\n * -----Colors\n * -----Textfield\n * -----Switch\n * -----Spinner\n * -----Radio\n * -----Menu\n * -----List\n * -----Layout\n * -----Icon toggles\n * -----Footer\n * -----Column\n * -----Checkbox\n * -----Card\n * -----Button\n * -----Animation\n * -----Progress\n * -----Badge\n * -----Shadows\n * -----Grid\n * -----Data table\n * -----Dialog\n * -----Snackbar\n * -----Tooltip\n * -----Chip\n *\n * Even though all variables have the `!default` directive, most of them\n * should not be changed as they are dependent one another. This can cause\n * visual distortions (like alignment issues) that are hard to track down\n * and fix.\n */\n/* ==========  TYPOGRAPHY  ========== */\n/* We're splitting fonts into \"preferred\" and \"performance\" in order to optimize\n   page loading. For important text, such as the body, we want it to load\n   immediately and not wait for the web font load, whereas for other sections,\n   such as headers and titles, we're OK with things taking a bit longer to load.\n   We do have some optional classes and parameters in the mixins, in case you\n   definitely want to make sure you're using the preferred font and don't mind\n   the performance hit.\n   We should be able to improve on this once CSS Font Loading L3 becomes more\n   widely available.\n*/\n/* ==========  COLORS  ========== */\n/**\n*\n* Material design color palettes.\n* @see http://www.google.com/design/spec/style/color.html\n*\n**/\n/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/* ==========  Color Palettes  ========== */\n/* colors.scss */\n/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/* ==========  IMAGES  ========== */\n/* ==========  Color & Themes  ========== */\n/* ==========  Typography  ========== */\n/* ==========  Components  ========== */\n/* ==========  Standard Buttons  ========== */\n/* ==========  Icon Toggles  ========== */\n/* ==========  Radio Buttons  ========== */\n/* ==========  Ripple effect  ========== */\n/* ==========  Layout  ========== */\n/* ==========  Content Tabs  ========== */\n/* ==========  Checkboxes  ========== */\n/* ==========  Switches  ========== */\n/* ==========  Spinner  ========== */\n/* ==========  Text fields  ========== */\n/* ==========  Card  ========== */\n/* ==========  Sliders ========== */\n/* ========== Progress ========== */\n/* ==========  List ========== */\n/* ==========  Item ========== */\n/* ==========  Dropdown menu ========== */\n/* ==========  Tooltips  ========== */\n/* ==========  Footer  ========== */\n/* TEXTFIELD */\n/* SWITCH */\n/* SPINNER */\n/* RADIO */\n/* MENU */\n/* LIST */\n/* LAYOUT */\n/* ICON TOGGLE */\n/* FOOTER */\n/*mega-footer*/\n/*mini-footer*/\n/* CHECKBOX */\n/* CARD */\n/* Card dimensions */\n/* Cover image */\n/* BUTTON */\n/**\n *\n * Dimensions\n *\n */\n/* ANIMATION */\n/* PROGRESS */\n/* BADGE */\n/* SHADOWS */\n/* GRID */\n/* DATA TABLE */\n/* DIALOG */\n/* SNACKBAR */\n/* TOOLTIP */\n/* CHIP */\n/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/* Typography */\n/* Shadows */\n/* Animations */\n/* Dialog */\n/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/* ==========  Color Palettes  ========== */\n/* colors.scss */\n/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/* ==========  Color Palettes  ========== */\n/* colors.scss */\n/* ==========  IMAGES  ========== */\n/* ==========  Color & Themes  ========== */\n.text-color--smoke {\n  color: #666; }\n.color--gray {\n  background-color: #444 !important; }\n.color--dark-gray {\n  background-color: #333; }\n.color--smooth-gray {\n  background-color: #999 !important; }\n.text-color--smooth-gray {\n  color: #999 !important; }\n.color--red {\n  background-color: #f44336 !important; }\n.color-text--red {\n  color: #f44336 !important; }\n.color--orange {\n  background-color: #ffc107 !important; }\n.color-text--orange {\n  color: #ffc107 !important; }\n.color--amber {\n  background-color: #ff9800 !important; }\n.color-text--amber {\n  color: #ff9800 !important; }\n.color--green {\n  background-color: #00d45a !important; }\n.color-text--green {\n  color: #00d45a !important; }\n.color--light-blue {\n  background-color: #03a9f4 !important; }\n.color-text--light-blue {\n  color: #03a9f4 !important; }\n.color--purple {\n  background-color: #7726d3 !important; }\n.color-text--purple {\n  color: #7726d3 !important; }\n.color--teal {\n  background-color: #00bcd4 !important; }\n.color-text--teal {\n  color: #00bcd4 !important; }\n/* ==========  Typography  ========== */\n/* ==========  Components  ========== */\n/* ==========  Standard Buttons  ========== */\n/* ==========  Icon Toggles  ========== */\n/* ==========  Radio Buttons  ========== */\n/* ==========  Ripple effect  ========== */\n/* ==========  Layout  ========== */\n/* ==========  Content Tabs  ========== */\n/* ==========  Checkboxes  ========== */\n/* ==========  Switches  ========== */\n/* ==========  Spinner  ========== */\n/* ==========  Text fields  ========== */\n/* ==========  Card  ========== */\n/* ==========  Sliders ========== */\n/* ========== Progress ========== */\n/* ==========  List ========== */\n/* ==========  Item ========== */\n/* ==========  Dropdown menu ========== */\n/* ==========  Tooltips  ========== */\n/* ==========  Footer  ========== */\n/* TEXTFIELD */\n/* SWITCH */\n/* SPINNER */\n/* RADIO */\n/* MENU */\n/* LIST */\n/* LAYOUT */\n/* ICON */\n/* ICON TOGGLE */\n/* FOOTER */\n/* mega-footer */\n/* mini-footer */\n/* CHECKBOX */\n/* CARD */\n/* Card dimensions */\n/* Cover image */\n/* BUTTON */\n/* ANIMATION */\n/* PROGRESS */\n/* BADGE */\n/* SHADOWS */\n/* GRID */\n/* DATA TABLE */\n/* TOOLTIP */\n/* WIDGETS & COMPONENTS */\n/* Trending */\n/* label */\n/* charts */\n/* employer form */\n/* row */\n/* scroll */\n.ui-colors h3 {\n  text-align: center;\n  opacity: 0.2; }\n.ui-colors .teal .mdl-card__supporting-text {\n  background: #00bcd4; }\n.ui-colors .red .mdl-card__supporting-text {\n  background: #f44336; }\n.ui-colors .green .mdl-card__supporting-text {\n  background: #00d45a; }\n.ui-colors .gray .mdl-card__supporting-text {\n  background: #444; }\n.ui-colors .orange .mdl-card__supporting-text {\n  background: #ffc107; }\n.ui-colors .purple .mdl-card__supporting-text {\n  background: #7726d3; }\n.ui-colors .light-blue .mdl-card__supporting-text {\n  background: #03a9f4; }\n.ui-colors .dark-gray .mdl-card__title {\n  background: #444; }\n.ui-colors .dark-gray .mdl-card__supporting-text {\n  background: #333; }\n"

/***/ }),

/***/ "./src/app/pages/ui/colors/colors.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/ui/colors/colors.component.ts ***!
  \*****************************************************/
/*! exports provided: ColorsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColorsComponent", function() { return ColorsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var theme_components_upgradable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! theme/components/upgradable */ "./src/theme/components/upgradable/index.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ColorsComponent = /** @class */ (function (_super) {
    __extends(ColorsComponent, _super);
    function ColorsComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.mdlGrid = true;
        _this.uiColors = true;
        return _this;
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])('class.mdl-grid'),
        __metadata("design:type", Object)
    ], ColorsComponent.prototype, "mdlGrid", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])('class.ui-colors'),
        __metadata("design:type", Object)
    ], ColorsComponent.prototype, "uiColors", void 0);
    ColorsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-colors',
            template: __webpack_require__(/*! ./colors.component.html */ "./src/app/pages/ui/colors/colors.component.html"),
            styles: [__webpack_require__(/*! ./colors.component.scss */ "./src/app/pages/ui/colors/colors.component.scss")],
        })
    ], ColorsComponent);
    return ColorsComponent;
}(theme_components_upgradable__WEBPACK_IMPORTED_MODULE_1__["UpgradableComponent"]));



/***/ }),

/***/ "./src/app/pages/ui/colors/index.ts":
/*!******************************************!*\
  !*** ./src/app/pages/ui/colors/index.ts ***!
  \******************************************/
/*! exports provided: ColorsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _colors_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./colors.component */ "./src/app/pages/ui/colors/colors.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ColorsComponent", function() { return _colors_component__WEBPACK_IMPORTED_MODULE_0__["ColorsComponent"]; });




/***/ }),

/***/ "./src/app/pages/ui/forms/forms.component.html":
/*!*****************************************************!*\
  !*** ./src/app/pages/ui/forms/forms.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"mdl-cell mdl-cell--7-col-desktop mdl-cell--7-col-tablet mdl-cell--4-col-phone\">\r\n  <base-card>\r\n    <base-card-title>\r\n      <h5 class=\"mdl-card__title-text text-color--white\">Text fields</h5>\r\n    </base-card-title>\r\n    <base-card-body>\r\n      <form class=\"form form--basic\">\r\n        <div class=\"mdl-grid\">\r\n          <div class=\"mdl-cell mdl-cell--6-col-desktop mdl-cell--6-col-tablet mdl-cell--4-col-phone form__article\">\r\n            <h3 class=\"text-color--smooth-gray\">BASIC INPUT</h3>\r\n            <div class=\"mdl-textfield mdl-js-textfield full-size\">\r\n              <input class=\"mdl-textfield__input\" type=\"text\" id=\"first-name\">\r\n              <label class=\"mdl-textfield__label\" for=\"first-name\">First Name</label>\r\n            </div>\r\n            <div class=\"mdl-textfield mdl-js-textfield full-size\">\r\n              <input class=\"mdl-textfield__input\" type=\"text\" id=\"last-name\">\r\n              <label class=\"mdl-textfield__label\" for=\"last-name\">Last Name</label>\r\n            </div>\r\n            <div class=\"mdl-textfield mdl-js-textfield full-size\">\r\n              <input class=\"mdl-textfield__input\" type=\"text\" id=\"e-mail\">\r\n              <label class=\"mdl-textfield__label\" for=\"e-mail\">Email</label>\r\n            </div>\r\n          </div>\r\n          <div class=\"mdl-cell mdl-cell--6-col-desktop mdl-cell--6-col-tablet mdl-cell--4-col-phone form__article\">\r\n            <h3 class=\"text-color--smooth-gray\">INPUT WITH FLOATING LABEL</h3>\r\n            <div class=\"mdl-textfield mdl-js-textfield mdl-textfield--floating-label full-size\">\r\n              <input class=\"mdl-textfield__input\" type=\"text\" id=\"floating-first-name\">\r\n              <label class=\"mdl-textfield__label\" for=\"floating-first-name\">First Name</label>\r\n            </div>\r\n            <div class=\"mdl-textfield mdl-js-textfield mdl-textfield--floating-label full-size\">\r\n              <input class=\"mdl-textfield__input\" type=\"text\" id=\"floating-last-name\">\r\n              <label class=\"mdl-textfield__label\" for=\"floating-last-name\">Last Name</label>\r\n            </div>\r\n            <div class=\"mdl-textfield mdl-js-textfield mdl-textfield--floating-label full-size\">\r\n              <input class=\"mdl-textfield__input\" type=\"text\" id=\"floating-e-mail\">\r\n              <label class=\"mdl-textfield__label\" for=\"floating-e-mail\">Email</label>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </form>\r\n    </base-card-body>\r\n  </base-card>\r\n</div>\r\n\r\n<div class=\"mdl-cell mdl-cell--5-col-desktop mdl-cell--5-col-tablet mdl-cell--4-col-phone\">\r\n  <base-card>\r\n    <base-card-title>\r\n      <h5 class=\"mdl-card__title-text text-color--white\">PROFILE INFO</h5>\r\n    </base-card-title>\r\n    <base-card-body>\r\n    <form class=\"form form--basic\">\r\n      <div class=\"mdl-grid\">\r\n        <div class=\"mdl-cell mdl-cell--3-col-desktop mdl-cell--3-col-tablet mdl-cell--1-col-phone\">\r\n          <div class=\"profile-image color--smooth-gray profile-image--round\">\r\n            <img src=\"assets/images/Bobby.PNG\">\r\n          </div>\r\n        </div>\r\n        <div class=\"mdl-cell mdl-cell--8-col-desktop mdl-cell--8-col-tablet mdl-cell--4-col-phone form__article\">\r\n          <div class=\"mdl-textfield mdl-js-textfield mdl-textfield--floating-label full-size\">\r\n            <input class=\"mdl-textfield__input\" type=\"text\" value=\"Bob\" id=\"profile-floating-first-name\">\r\n            <label class=\"mdl-textfield__label\" for=\"profile-floating-first-name\">First Name</label>\r\n          </div>\r\n          <div class=\"mdl-textfield mdl-js-textfield mdl-textfield--floating-label full-size\">\r\n            <input class=\"mdl-textfield__input\" type=\"text\" value=\"Kelso\" id=\"profile-floating-last-name\">\r\n            <label class=\"mdl-textfield__label\" for=\"profile-floating-last-name\">Last Name</label>\r\n          </div>\r\n          <div class=\"mdl-textfield mdl-js-textfield mdl-textfield--floating-label full-size\">\r\n            <input class=\"mdl-textfield__input\" type=\"text\" value=\"BobbyK@darkboard.io\" id=\"profile-floating-e-mail\">\r\n            <label class=\"mdl-textfield__label\" for=\"floating-e-mail\">Email</label>\r\n          </div>\r\n          <material-angular-select [data]=\"countries\"\r\n                            [name]=\"'location'\"\r\n                            [label]=\"'Location'\"\r\n                            [currentValue]=\"locationValue\"></material-angular-select>\r\n        </div>\r\n      </div>\r\n    </form>\r\n    </base-card-body>\r\n  </base-card>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/pages/ui/forms/forms.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/pages/ui/forms/forms.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".ui-form-components form .mdl-cell {\n  margin-left: 16px; }\n\n.ui-form-components .mdl-card__supporting-text {\n  padding-bottom: 70px; }\n"

/***/ }),

/***/ "./src/app/pages/ui/forms/forms.component.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/ui/forms/forms.component.ts ***!
  \***************************************************/
/*! exports provided: FormsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormsComponent", function() { return FormsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var theme_components_upgradable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! theme/components/upgradable */ "./src/theme/components/upgradable/index.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FormsComponent = /** @class */ (function (_super) {
    __extends(FormsComponent, _super);
    function FormsComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.mdlGrid = true;
        _this.mdlCell = true;
        _this.mdlCell12ColDesktop = true;
        _this.mdlCell12ColTablet = true;
        _this.mdlCell4ColPhone = true;
        _this.mdlCellTop = true;
        _this.countries = ['Minsk', 'Berlin', 'Moscow', 'NYC'];
        _this.locationValue = 'Berlin';
        return _this;
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])('class.mdl-grid'),
        __metadata("design:type", Object)
    ], FormsComponent.prototype, "mdlGrid", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])('class.mdl-cell'),
        __metadata("design:type", Object)
    ], FormsComponent.prototype, "mdlCell", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])('class.mdl-cell--12-col-desktop'),
        __metadata("design:type", Object)
    ], FormsComponent.prototype, "mdlCell12ColDesktop", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])('class.mdl-cell--12-col-tablet'),
        __metadata("design:type", Object)
    ], FormsComponent.prototype, "mdlCell12ColTablet", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])('class.mdl-cell--4-col-phone'),
        __metadata("design:type", Object)
    ], FormsComponent.prototype, "mdlCell4ColPhone", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])('class.mdl-cell--top'),
        __metadata("design:type", Object)
    ], FormsComponent.prototype, "mdlCellTop", void 0);
    FormsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-forms',
            template: __webpack_require__(/*! ./forms.component.html */ "./src/app/pages/ui/forms/forms.component.html"),
            styles: [__webpack_require__(/*! ./forms.component.scss */ "./src/app/pages/ui/forms/forms.component.scss")],
        })
    ], FormsComponent);
    return FormsComponent;
}(theme_components_upgradable__WEBPACK_IMPORTED_MODULE_1__["UpgradableComponent"]));



/***/ }),

/***/ "./src/app/pages/ui/forms/index.ts":
/*!*****************************************!*\
  !*** ./src/app/pages/ui/forms/index.ts ***!
  \*****************************************/
/*! exports provided: FormsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _forms_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./forms.component */ "./src/app/pages/ui/forms/forms.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FormsComponent", function() { return _forms_component__WEBPACK_IMPORTED_MODULE_0__["FormsComponent"]; });




/***/ }),

/***/ "./src/app/pages/ui/icons/icons.component.html":
/*!*****************************************************!*\
  !*** ./src/app/pages/ui/icons/icons.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"mdl-cell mdl-cell--12-col-desktop mdl-cell--12-col-tablet mdl-cell--4-col-phone\">\r\n  <div class=\"ui-icons-title\">\r\n    <span class=\"text-color--gray\">This is Official Material Design Icons. You can download them directly from the <a target=\"_blank\" href=\"https://material.io/icons/\">Material Design spec.</a></span>\r\n  </div>\r\n</div>\r\n<div class=\"mdl-cell mdl-cell--12-col-desktop mdl-cell--12-col-tablet mdl-cell--4-col-phone\">\r\n  <base-card>\r\n    <base-card-title>\r\n      <h2 class=\"mdl-card__title-text\">Icons</h2>\r\n    </base-card-title>\r\n    <base-card-body>\r\n      <div *ngFor=\"let section of data\" class=\"section\">\r\n        <div class=\"text-color--gray section-name\">{{ section.name | titlecase }}</div>\r\n        <div>\r\n          <div *ngFor=\"let icon of section.icons\" class=\"itemcontainer\">\r\n            <div class=\"item\" [ngClass]=\"section.name\">\r\n              <div class=\"itemBox\" [id]=\"icon\">\r\n                <i class=\"material-icons\">{{ icon }}</i>\r\n                <div class=\"caption\">{{ icon.length > 12 ? (icon | slice:0:12) + '...' : icon }}</div>\r\n              </div>\r\n              <!-- NOTE: it prevents scrolling -->\r\n              <!-- <div class=\"mdl-tooltip\" [attr.for]=\"icon\">{{ icon }}</div> -->\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </base-card-body>\r\n  </base-card>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/pages/ui/icons/icons.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/pages/ui/icons/icons.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/*------------------------------------*\\\n    $CONTENTS\n\\*------------------------------------*/\n/**\n * STYLE GUIDE VARIABLES------------------Declarations of Sass variables\n * -----Typography\n * -----Colors\n * -----Textfield\n * -----Switch\n * -----Spinner\n * -----Radio\n * -----Menu\n * -----List\n * -----Layout\n * -----Icon toggles\n * -----Footer\n * -----Column\n * -----Checkbox\n * -----Card\n * -----Button\n * -----Animation\n * -----Progress\n * -----Badge\n * -----Shadows\n * -----Grid\n * -----Data table\n * -----Dialog\n * -----Snackbar\n * -----Tooltip\n * -----Chip\n *\n * Even though all variables have the `!default` directive, most of them\n * should not be changed as they are dependent one another. This can cause\n * visual distortions (like alignment issues) that are hard to track down\n * and fix.\n */\n/* ==========  TYPOGRAPHY  ========== */\n/* We're splitting fonts into \"preferred\" and \"performance\" in order to optimize\n   page loading. For important text, such as the body, we want it to load\n   immediately and not wait for the web font load, whereas for other sections,\n   such as headers and titles, we're OK with things taking a bit longer to load.\n   We do have some optional classes and parameters in the mixins, in case you\n   definitely want to make sure you're using the preferred font and don't mind\n   the performance hit.\n   We should be able to improve on this once CSS Font Loading L3 becomes more\n   widely available.\n*/\n/* ==========  COLORS  ========== */\n/**\n*\n* Material design color palettes.\n* @see http://www.google.com/design/spec/style/color.html\n*\n**/\n/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/* ==========  Color Palettes  ========== */\n/* colors.scss */\n/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/* ==========  IMAGES  ========== */\n/* ==========  Color & Themes  ========== */\n/* ==========  Typography  ========== */\n/* ==========  Components  ========== */\n/* ==========  Standard Buttons  ========== */\n/* ==========  Icon Toggles  ========== */\n/* ==========  Radio Buttons  ========== */\n/* ==========  Ripple effect  ========== */\n/* ==========  Layout  ========== */\n/* ==========  Content Tabs  ========== */\n/* ==========  Checkboxes  ========== */\n/* ==========  Switches  ========== */\n/* ==========  Spinner  ========== */\n/* ==========  Text fields  ========== */\n/* ==========  Card  ========== */\n/* ==========  Sliders ========== */\n/* ========== Progress ========== */\n/* ==========  List ========== */\n/* ==========  Item ========== */\n/* ==========  Dropdown menu ========== */\n/* ==========  Tooltips  ========== */\n/* ==========  Footer  ========== */\n/* TEXTFIELD */\n/* SWITCH */\n/* SPINNER */\n/* RADIO */\n/* MENU */\n/* LIST */\n/* LAYOUT */\n/* ICON TOGGLE */\n/* FOOTER */\n/*mega-footer*/\n/*mini-footer*/\n/* CHECKBOX */\n/* CARD */\n/* Card dimensions */\n/* Cover image */\n/* BUTTON */\n/**\n *\n * Dimensions\n *\n */\n/* ANIMATION */\n/* PROGRESS */\n/* BADGE */\n/* SHADOWS */\n/* GRID */\n/* DATA TABLE */\n/* DIALOG */\n/* SNACKBAR */\n/* TOOLTIP */\n/* CHIP */\n/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/* Typography */\n/* Shadows */\n/* Animations */\n/* Dialog */\n/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/* ==========  Color Palettes  ========== */\n/* colors.scss */\n/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/* ==========  Color Palettes  ========== */\n/* colors.scss */\n/* ==========  IMAGES  ========== */\n/* ==========  Color & Themes  ========== */\n.text-color--smoke {\n  color: #666; }\n.color--gray {\n  background-color: #444 !important; }\n.color--dark-gray {\n  background-color: #333; }\n.color--smooth-gray {\n  background-color: #999 !important; }\n.text-color--smooth-gray {\n  color: #999 !important; }\n.color--red {\n  background-color: #f44336 !important; }\n.color-text--red {\n  color: #f44336 !important; }\n.color--orange {\n  background-color: #ffc107 !important; }\n.color-text--orange {\n  color: #ffc107 !important; }\n.color--amber {\n  background-color: #ff9800 !important; }\n.color-text--amber {\n  color: #ff9800 !important; }\n.color--green {\n  background-color: #00d45a !important; }\n.color-text--green {\n  color: #00d45a !important; }\n.color--light-blue {\n  background-color: #03a9f4 !important; }\n.color-text--light-blue {\n  color: #03a9f4 !important; }\n.color--purple {\n  background-color: #7726d3 !important; }\n.color-text--purple {\n  color: #7726d3 !important; }\n.color--teal {\n  background-color: #00bcd4 !important; }\n.color-text--teal {\n  color: #00bcd4 !important; }\n/* ==========  Typography  ========== */\n/* ==========  Components  ========== */\n/* ==========  Standard Buttons  ========== */\n/* ==========  Icon Toggles  ========== */\n/* ==========  Radio Buttons  ========== */\n/* ==========  Ripple effect  ========== */\n/* ==========  Layout  ========== */\n/* ==========  Content Tabs  ========== */\n/* ==========  Checkboxes  ========== */\n/* ==========  Switches  ========== */\n/* ==========  Spinner  ========== */\n/* ==========  Text fields  ========== */\n/* ==========  Card  ========== */\n/* ==========  Sliders ========== */\n/* ========== Progress ========== */\n/* ==========  List ========== */\n/* ==========  Item ========== */\n/* ==========  Dropdown menu ========== */\n/* ==========  Tooltips  ========== */\n/* ==========  Footer  ========== */\n/* TEXTFIELD */\n/* SWITCH */\n/* SPINNER */\n/* RADIO */\n/* MENU */\n/* LIST */\n/* LAYOUT */\n/* ICON */\n/* ICON TOGGLE */\n/* FOOTER */\n/* mega-footer */\n/* mini-footer */\n/* CHECKBOX */\n/* CARD */\n/* Card dimensions */\n/* Cover image */\n/* BUTTON */\n/* ANIMATION */\n/* PROGRESS */\n/* BADGE */\n/* SHADOWS */\n/* GRID */\n/* DATA TABLE */\n/* TOOLTIP */\n/* WIDGETS & COMPONENTS */\n/* Trending */\n/* label */\n/* charts */\n/* employer form */\n/* row */\n/* scroll */\n.ui-icons .ui-icons-title {\n  font-size: 20px;\n  font-family: \"Roboto\", \"Helvetica\", \"Arial\", sans-serif;\n  margin-top: 24px;\n  letter-spacing: 0.2px; }\n.ui-icons .ui-icons-title a {\n    font-size: 20px;\n    text-decoration: underline;\n    opacity: 0.8; }\n.ui-icons .itemcontainer {\n  display: inline-block;\n  width: 150px;\n  height: 100px;\n  text-align: center;\n  vertical-align: top; }\n.ui-icons .itemcontainer .caption {\n    margin-top: 10px; }\n.ui-icons hr {\n  margin: 0 -16px 1em; }\n.ui-icons .section-name {\n  margin: 25px 5px 30px; }\n"

/***/ }),

/***/ "./src/app/pages/ui/icons/icons.component.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/ui/icons/icons.component.ts ***!
  \***************************************************/
/*! exports provided: IconsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IconsComponent", function() { return IconsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var theme_components_upgradable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! theme/components/upgradable */ "./src/theme/components/upgradable/index.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var IconsComponent = /** @class */ (function (_super) {
    __extends(IconsComponent, _super);
    function IconsComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.mdlGrid = true;
        _this.uiIcons = true;
        _this.data = [
            {
                name: 'action',
                icons: [
                    '3d_rotation',
                    'accessibility',
                    'accessibility_new',
                    'accessible',
                    'accessible_forward',
                    'account_balance',
                    'account_balance_wallet',
                    'account_box',
                    'account_circle',
                    'add_shopping_cart',
                    'alarm',
                    'alarm_add',
                    'alarm_off',
                    'alarm_on',
                    // 'all_inbox',
                    'all_out',
                    'android',
                    'announcement',
                    'arrow_right_alt',
                    'aspect_ratio',
                    'assessment',
                    'assignment',
                    'assignment_ind',
                    'assignment_late',
                    'assignment_return',
                    'assignment_returned',
                    'assignment_turned_in',
                    'autorenew',
                    'backup',
                    'book',
                    'bookmark',
                    'bookmark_border',
                    // 'bookmarks',
                    'bug_report',
                    'build',
                    'cached',
                    'calendar_today',
                    'calendar_view_day',
                    'camera_enhance',
                    'card_giftcard',
                    'card_membership',
                    'card_travel',
                    'change_history',
                    'check_circle',
                    'check_circle_outline',
                    'chrome_reader_mode',
                    'class',
                    'code',
                    'commute',
                    'compare_arrows',
                    'contact_support',
                    'copyright',
                    'credit_card',
                    'dashboard',
                    'date_range',
                    'delete',
                    'delete_forever',
                    'delete_outline',
                    'description',
                    'dns',
                    'done',
                    'done_all',
                    'done_outline',
                    'donut_large',
                    'donut_small',
                    'drag_indicator',
                    'eject',
                    'euro_symbol',
                    'event',
                    'event_seat',
                    'exit_to_app',
                    'explore',
                    // 'explore_off',
                    'extension',
                    'face',
                    'favorite',
                    'favorite_border',
                    'feedback',
                    'find_in_page',
                    'find_replace',
                    'fingerprint',
                    'flight_land',
                    'flight_takeoff',
                    'flip_to_back',
                    'flip_to_front',
                    'g_translate',
                    'gavel',
                    'get_app',
                    'gif',
                    'grade',
                    'group_work',
                    'help',
                    'help_outline',
                    'highlight_off',
                    'history',
                    'home',
                    'horizontal_split',
                    'hourglass_empty',
                    'hourglass_full',
                    'http',
                    'https',
                    'important_devices',
                    'info',
                    'input',
                    'invert_colors',
                    'label',
                    'label_important',
                    // 'label_off',
                    'language',
                    'launch',
                    'line_style',
                    'line_weight',
                    'list',
                    'lock',
                    'lock_open',
                    'loyalty',
                    'markunread_mailbox',
                    'maximize',
                    'minimize',
                    'motorcycle',
                    'note_add',
                    'offline_bolt',
                    'offline_pin',
                    'opacity',
                    'open_in_browser',
                    'open_in_new',
                    'open_with',
                    'pageview',
                    'pan_tool',
                    'payment',
                    'perm_camera_mic',
                    'perm_contact_calendar',
                    'perm_data_setting',
                    'perm_device_information',
                    'perm_identity',
                    'perm_media',
                    'perm_phone_msg',
                    'perm_scan_wifi',
                    'pets',
                    'picture_in_picture',
                    'picture_in_picture_alt',
                    'play_for_work',
                    'polymer',
                    'power_settings_new',
                    'pregnant_woman',
                    'print',
                    'query_builder',
                    'question_answer',
                    'receipt',
                    'record_voice_over',
                    'redeem',
                    'remove_shopping_cart',
                    'reorder',
                    'report_problem',
                    'restore',
                    'restore_from_trash',
                    'restore_page',
                    'room',
                    'rounded_corner',
                    'rowing',
                    'schedule',
                    'search',
                    'settings',
                    'settings_applications',
                    'settings_backup_restore',
                    'settings_bluetooth',
                    'settings_brightness',
                    'settings_cell',
                    'settings_ethernet',
                    'settings_input_antenna',
                    'settings_input_component',
                    'settings_input_composite',
                    'settings_input_hdmi',
                    'settings_input_svideo',
                    'settings_overscan',
                    'settings_phone',
                    'settings_power',
                    'settings_remote',
                    'settings_voice',
                    'shop',
                    'shop_two',
                    'shopping_basket',
                    'shopping_cart',
                    'speaker_notes',
                    'speaker_notes_off',
                    'spellcheck',
                    // 'star_rate',
                    'stars',
                    'store',
                    'subject',
                    'supervised_user_circle',
                    'supervisor_account',
                    'swap_horiz',
                    'swap_horizontal_circle',
                    'swap_vert',
                    'swap_vertical_circle',
                    'tab',
                    'tab_unselected',
                    'text_rotate_up',
                    'text_rotate_vertical',
                    'text_rotation_down',
                    'text_rotation_none',
                    'theaters',
                    'thumb_down',
                    'thumb_up',
                    'thumbs_up_down',
                    'timeline',
                    'toc',
                    'today',
                    'toll',
                    'touch_app',
                    'track_changes',
                    'translate',
                    'trending_down',
                    'trending_flat',
                    'trending_up',
                    'turned_in',
                    'turned_in_not',
                    'update',
                    'verified_user',
                    'vertical_split',
                    'view_agenda',
                    'view_array',
                    'view_carousel',
                    'view_column',
                    'view_day',
                    'view_headline',
                    'view_list',
                    'view_module',
                    'view_quilt',
                    'view_stream',
                    'view_week',
                    'visibility',
                    'visibility_off',
                    'voice_over_off',
                    'watch_later',
                    'work',
                    'work_off',
                    'work_outline',
                    'youtube_searched_for',
                    'zoom_in',
                    'zoom_out',
                ],
            },
            {
                name: 'alert',
                icons: [
                    'add_alert',
                    'error',
                    'error_outline',
                    'notification_important',
                    'warning',
                ],
            },
            {
                name: 'av',
                icons: [
                    '4k',
                    'add_to_queue',
                    'airplay',
                    'album',
                    'art_track',
                    'av_timer',
                    'branding_watermark',
                    'call_to_action',
                    'closed_caption',
                    'control_camera',
                    'equalizer',
                    'explicit',
                    'fast_forward',
                    'fast_rewind',
                    'featured_play_list',
                    'featured_video',
                    'fiber_dvr',
                    'fiber_manual_record',
                    'fiber_new',
                    'fiber_pin',
                    'fiber_smart_record',
                    'forward_10',
                    'forward_30',
                    'forward_5',
                    'games',
                    'hd',
                    'hearing',
                    'high_quality',
                    'library_add',
                    'library_books',
                    'library_music',
                    'loop',
                    'mic',
                    'mic_none',
                    'mic_off',
                    'missed_video_call',
                    'movie',
                    'music_video',
                    'new_releases',
                    'not_interested',
                    'note',
                    'pause',
                    'pause_circle_filled',
                    'pause_circle_outline',
                    'play_arrow',
                    'play_circle_filled',
                    // 'play_circle_filled_white',
                    'play_circle_outline',
                    'playlist_add',
                    'playlist_add_check',
                    'playlist_play',
                    'queue',
                    'queue_music',
                    'queue_play_next',
                    'radio',
                    'recent_actors',
                    'remove_from_queue',
                    'repeat',
                    'repeat_one',
                    'replay',
                    'replay_10',
                    'replay_30',
                    'replay_5',
                    'shuffle',
                    'skip_next',
                    'skip_previous',
                    'slow_motion_video',
                    'snooze',
                    'sort_by_alpha',
                    'stop',
                    'subscriptions',
                    'subtitles',
                    'surround_sound',
                    'video_call',
                    'video_label',
                    'video_library',
                    'videocam',
                    'videocam_off',
                    'volume_down',
                    'volume_mute',
                    'volume_off',
                    'volume_up',
                    'web',
                    'web_asset',
                ],
            },
            {
                name: 'communication',
                icons: [
                    'alternate_email',
                    'business',
                    'call',
                    'call_end',
                    'call_made',
                    'call_merge',
                    'call_missed',
                    'call_missed_outgoing',
                    'call_received',
                    'call_split',
                    'cancel_presentation',
                    'cell_wifi',
                    'chat',
                    'chat_bubble',
                    'chat_bubble_outline',
                    'clear_all',
                    'comment',
                    'contact_mail',
                    'contact_phone',
                    'contacts',
                    // 'desktop_access_disabled',
                    'dialer_sip',
                    'dialpad',
                    'domain_disabled',
                    // 'duo',
                    'email',
                    'forum',
                    'import_contacts',
                    'import_export',
                    'invert_colors_off',
                    'list_alt',
                    'live_help',
                    'location_off',
                    'location_on',
                    'mail_outline',
                    'message',
                    'mobile_screen_share',
                    'no_sim',
                    'pause_presentation',
                    // 'person_add_disabled',
                    'phone',
                    'phonelink_erase',
                    'phonelink_lock',
                    'phonelink_ring',
                    'phonelink_setup',
                    'portable_wifi_off',
                    'present_to_all',
                    // 'print_disabled',
                    'ring_volume',
                    'rss_feed',
                    'screen_share',
                    'sentiment_satisfied_alt',
                    'speaker_phone',
                    'stay_current_landscape',
                    'stay_current_portrait',
                    'stay_primary_landscape',
                    'stay_primary_portrait',
                    'stop_screen_share',
                    'swap_calls',
                    'textsms',
                    'unsubscribe',
                    'voicemail',
                    'vpn_key',
                ],
            },
            {
                name: 'content',
                icons: [
                    'add',
                    'add_box',
                    'add_circle',
                    'add_circle_outline',
                    'archive',
                    'backspace',
                    'ballot',
                    'block',
                    'clear',
                    'create',
                    'delete_sweep',
                    'drafts',
                    'file_copy',
                    'filter_list',
                    'flag',
                    'font_download',
                    'forward',
                    'gesture',
                    'how_to_reg',
                    'how_to_vote',
                    'inbox',
                    'link',
                    'link_off',
                    'low_priority',
                    'mail',
                    'markunread',
                    'move_to_inbox',
                    'next_week',
                    'outlined_flag',
                    'redo',
                    'remove',
                    'remove_circle',
                    'remove_circle_outline',
                    'reply',
                    'reply_all',
                    'report',
                    'report_off',
                    'save',
                    'save_alt',
                    'select_all',
                    'send',
                    'sort',
                    'text_format',
                    'unarchive',
                    'undo',
                    'waves',
                    'weekend',
                    'where_to_vote',
                ],
            },
            {
                name: 'device',
                icons: [
                    'access_alarm',
                    'access_alarms',
                    'access_time',
                    'add_alarm',
                    'add_to_home_screen',
                    'airplanemode_active',
                    'airplanemode_inactive',
                    // 'battery_20',
                    // 'battery_30',
                    // 'battery_50',
                    // 'battery_60',
                    // 'battery_80',
                    // 'battery_90',
                    'battery_alert',
                    // 'battery_charging_20',
                    // 'battery_charging_30',
                    // 'battery_charging_50',
                    // 'battery_charging_60',
                    // 'battery_charging_80',
                    // 'battery_charging_90',
                    'battery_charging_full',
                    'battery_full',
                    'battery_std',
                    'battery_unknown',
                    'bluetooth',
                    'bluetooth_connected',
                    'bluetooth_disabled',
                    'bluetooth_searching',
                    'brightness_auto',
                    'brightness_high',
                    'brightness_low',
                    'brightness_medium',
                    'data_usage',
                    'developer_mode',
                    'devices',
                    'dvr',
                    'gps_fixed',
                    'gps_not_fixed',
                    'gps_off',
                    'graphic_eq',
                    'location_disabled',
                    'location_searching',
                    'mobile_friendly',
                    'mobile_off',
                    'network_cell',
                    'network_wifi',
                    'nfc',
                    'screen_lock_landscape',
                    'screen_lock_portrait',
                    'screen_lock_rotation',
                    'screen_rotation',
                    'sd_storage',
                    'settings_system_daydream',
                    // 'signal_cellular_0_bar',
                    // 'signal_cellular_1_bar',
                    // 'signal_cellular_2_bar',
                    // 'signal_cellular_3_bar',
                    'signal_cellular_4_bar',
                    'signal_cellular_alt',
                    // 'signal_cellular_connected_no_internet_0_bar',
                    // 'signal_cellular_connected_no_internet_1_bar',
                    // 'signal_cellular_connected_no_internet_2_bar',
                    // 'signal_cellular_connected_no_internet_3_bar',
                    'signal_cellular_connected_no_internet_4_bar',
                    'signal_cellular_no_sim',
                    'signal_cellular_null',
                    'signal_cellular_off',
                    // 'signal_wifi_0_bar',
                    // 'signal_wifi_1_bar',
                    // 'signal_wifi_1_bar_lock',
                    // 'signal_wifi_2_bar',
                    // 'signal_wifi_2_bar_lock',
                    // 'signal_wifi_3_bar',
                    // 'signal_wifi_3_bar_lock',
                    // 'signal_wifi_4_bar',
                    // 'signal_wifi_4_bar_lock',
                    'signal_wifi_off',
                    'storage',
                    'usb',
                    'wallpaper',
                    'widgets',
                    'wifi_lock',
                    'wifi_tethering',
                ],
            },
            {
                name: 'editor',
                icons: [
                    'add_comment',
                    'attach_file',
                    'attach_money',
                    'bar_chart',
                    'border_all',
                    'border_bottom',
                    'border_clear',
                    'border_color',
                    'border_horizontal',
                    'border_inner',
                    'border_left',
                    'border_outer',
                    'border_right',
                    'border_style',
                    'border_top',
                    'border_vertical',
                    'bubble_chart',
                    'drag_handle',
                    'format_align_center',
                    'format_align_justify',
                    'format_align_left',
                    'format_align_right',
                    'format_bold',
                    'format_clear',
                    'format_color_fill',
                    'format_color_reset',
                    'format_color_text',
                    'format_indent_decrease',
                    'format_indent_increase',
                    'format_italic',
                    'format_line_spacing',
                    'format_list_bulleted',
                    'format_list_numbered',
                    'format_list_numbered_rtl',
                    'format_paint',
                    'format_quote',
                    'format_shapes',
                    'format_size',
                    'format_strikethrough',
                    'format_textdirection_l_to_r',
                    'format_textdirection_r_to_l',
                    'format_underlined',
                    'functions',
                    'highlight',
                    'insert_chart',
                    'insert_chart_outlined',
                    'insert_comment',
                    'insert_drive_file',
                    'insert_emoticon',
                    'insert_invitation',
                    'insert_link',
                    'insert_photo',
                    'linear_scale',
                    'merge_type',
                    'mode_comment',
                    'monetization_on',
                    'money_off',
                    'multiline_chart',
                    'notes',
                    'pie_chart',
                    'publish',
                    'scatter_plot',
                    'score',
                    'short_text',
                    'show_chart',
                    'space_bar',
                    'strikethrough_s',
                    'table_chart',
                    'text_fields',
                    'title',
                    'vertical_align_bottom',
                    'vertical_align_center',
                    'vertical_align_top',
                    'wrap_text',
                ],
            },
            {
                name: 'file',
                icons: [
                    'attachment',
                    'cloud',
                    'cloud_circle',
                    'cloud_done',
                    'cloud_download',
                    'cloud_off',
                    'cloud_queue',
                    'cloud_upload',
                    'create_new_folder',
                    'folder',
                    'folder_open',
                    'folder_shared',
                ],
            },
            {
                name: 'hardware',
                icons: [
                    'cast',
                    'cast_connected',
                    // 'cast_for_education',
                    'computer',
                    'desktop_mac',
                    'desktop_windows',
                    'developer_board',
                    'device_hub',
                    'device_unknown',
                    'devices_other',
                    'dock',
                    'gamepad',
                    'headset',
                    'headset_mic',
                    'keyboard',
                    'keyboard_arrow_down',
                    'keyboard_arrow_left',
                    'keyboard_arrow_right',
                    'keyboard_arrow_up',
                    'keyboard_backspace',
                    'keyboard_capslock',
                    'keyboard_hide',
                    'keyboard_return',
                    'keyboard_tab',
                    'keyboard_voice',
                    'laptop',
                    'laptop_chromebook',
                    'laptop_mac',
                    'laptop_windows',
                    'memory',
                    'mouse',
                    'phone_android',
                    'phone_iphone',
                    'phonelink',
                    'phonelink_off',
                    'power_input',
                    'router',
                    'scanner',
                    'security',
                    'sim_card',
                    'smartphone',
                    'speaker',
                    'speaker_group',
                    'tablet',
                    'tablet_android',
                    'tablet_mac',
                    'toys',
                    'tv',
                    'videogame_asset',
                    'watch',
                ],
            },
            {
                name: 'image',
                icons: [
                    'add_a_photo',
                    'add_photo_alternate',
                    'add_to_photos',
                    'adjust',
                    'assistant',
                    'assistant_photo',
                    'audiotrack',
                    'blur_circular',
                    'blur_linear',
                    'blur_off',
                    'blur_on',
                    'brightness_1',
                    'brightness_2',
                    'brightness_3',
                    'brightness_4',
                    'brightness_5',
                    'brightness_6',
                    'brightness_7',
                    'broken_image',
                    'brush',
                    'burst_mode',
                    'camera',
                    'camera_alt',
                    'camera_front',
                    'camera_rear',
                    'camera_roll',
                    'center_focus_strong',
                    'center_focus_weak',
                    'collections',
                    'collections_bookmark',
                    'color_lens',
                    'colorize',
                    'compare',
                    'control_point',
                    'control_point_duplicate',
                    'crop',
                    'crop_16_9',
                    'crop_3_2',
                    'crop_5_4',
                    'crop_7_5',
                    'crop_din',
                    'crop_free',
                    'crop_landscape',
                    'crop_original',
                    'crop_portrait',
                    'crop_rotate',
                    'crop_square',
                    'dehaze',
                    'details',
                    'edit',
                    'exposure',
                    'exposure_neg_1',
                    'exposure_neg_2',
                    'exposure_plus_1',
                    'exposure_plus_2',
                    'exposure_zero',
                    'filter',
                    'filter_1',
                    'filter_2',
                    'filter_3',
                    'filter_4',
                    'filter_5',
                    'filter_6',
                    'filter_7',
                    'filter_8',
                    'filter_9',
                    'filter_9_plus',
                    'filter_b_and_w',
                    'filter_center_focus',
                    'filter_drama',
                    'filter_frames',
                    'filter_hdr',
                    'filter_none',
                    'filter_tilt_shift',
                    'filter_vintage',
                    'flare',
                    'flash_auto',
                    'flash_off',
                    'flash_on',
                    'flip',
                    'gradient',
                    'grain',
                    'grid_off',
                    'grid_on',
                    'hdr_off',
                    'hdr_on',
                    'hdr_strong',
                    'hdr_weak',
                    'healing',
                    'image',
                    'image_aspect_ratio',
                    'image_search',
                    'iso',
                    'landscape',
                    'leak_add',
                    'leak_remove',
                    'lens',
                    'linked_camera',
                    'looks',
                    'looks_3',
                    'looks_4',
                    'looks_5',
                    'looks_6',
                    'looks_one',
                    'looks_two',
                    'loupe',
                    'monochrome_photos',
                    'movie_creation',
                    'movie_filter',
                    'music_note',
                    'music_off',
                    'nature',
                    'nature_people',
                    'navigate_before',
                    'navigate_next',
                    'palette',
                    'panorama',
                    'panorama_fish_eye',
                    'panorama_horizontal',
                    'panorama_vertical',
                    'panorama_wide_angle',
                    'photo',
                    'photo_album',
                    'photo_camera',
                    'photo_filter',
                    'photo_library',
                    'photo_size_select_actual',
                    'photo_size_select_large',
                    'photo_size_select_small',
                    'picture_as_pdf',
                    'portrait',
                    'remove_red_eye',
                    'rotate_90_degrees_ccw',
                    'rotate_left',
                    'rotate_right',
                    'shutter_speed',
                    'slideshow',
                    'straighten',
                    'style',
                    'switch_camera',
                    'switch_video',
                    'tag_faces',
                    'texture',
                    'timelapse',
                    'timer',
                    'timer_10',
                    'timer_3',
                    'timer_off',
                    'tonality',
                    'transform',
                    'tune',
                    'view_comfy',
                    'view_compact',
                    'vignette',
                    'wb_auto',
                    'wb_cloudy',
                    'wb_incandescent',
                    'wb_iridescent',
                    'wb_sunny',
                ],
            },
            {
                name: 'maps',
                icons: [
                    '360',
                    'add_location',
                    'atm',
                    'beenhere',
                    'category',
                    'compass_calibration',
                    'departure_board',
                    'directions',
                    'directions_bike',
                    'directions_boat',
                    'directions_bus',
                    'directions_car',
                    'directions_railway',
                    'directions_run',
                    'directions_subway',
                    'directions_transit',
                    'directions_walk',
                    'edit_attributes',
                    'edit_location',
                    'ev_station',
                    'fastfood',
                    'flight',
                    'hotel',
                    'layers',
                    'layers_clear',
                    'local_activity',
                    'local_airport',
                    'local_atm',
                    'local_bar',
                    'local_cafe',
                    'local_car_wash',
                    'local_convenience_store',
                    'local_dining',
                    'local_drink',
                    'local_florist',
                    'local_gas_station',
                    'local_grocery_store',
                    'local_hospital',
                    'local_hotel',
                    'local_laundry_service',
                    'local_library',
                    'local_mall',
                    'local_movies',
                    'local_offer',
                    'local_parking',
                    'local_pharmacy',
                    'local_phone',
                    'local_pizza',
                    'local_play',
                    'local_post_office',
                    'local_printshop',
                    'local_see',
                    'local_shipping',
                    'local_taxi',
                    'map',
                    'money',
                    'my_location',
                    'navigation',
                    'near_me',
                    'not_listed_location',
                    'person_pin',
                    'person_pin_circle',
                    'pin_drop',
                    'place',
                    'rate_review',
                    'restaurant',
                    'restaurant_menu',
                    'satellite',
                    'store_mall_directory',
                    'streetview',
                    'subway',
                    'terrain',
                    'traffic',
                    'train',
                    'tram',
                    'transfer_within_a_station',
                    'transit_enterexit',
                    'trip_origin',
                    'zoom_out_map',
                ],
            },
            {
                name: 'navigation',
                icons: [
                    'apps',
                    'arrow_back',
                    'arrow_back_ios',
                    'arrow_downward',
                    'arrow_drop_down',
                    'arrow_drop_down_circle',
                    'arrow_drop_up',
                    'arrow_forward',
                    'arrow_forward_ios',
                    'arrow_left',
                    'arrow_right',
                    'arrow_upward',
                    'cancel',
                    'check',
                    'chevron_left',
                    'chevron_right',
                    'close',
                    'expand_less',
                    'expand_more',
                    'first_page',
                    'fullscreen',
                    'fullscreen_exit',
                    'last_page',
                    'menu',
                    'more_horiz',
                    'more_vert',
                    'refresh',
                    'subdirectory_arrow_left',
                    'subdirectory_arrow_right',
                    'unfold_less',
                    'unfold_more',
                ],
            },
            {
                name: 'notification',
                icons: [
                    'adb',
                    'airline_seat_flat',
                    'airline_seat_flat_angled',
                    'airline_seat_individual_suite',
                    'airline_seat_legroom_extra',
                    'airline_seat_legroom_normal',
                    'airline_seat_legroom_reduced',
                    'airline_seat_recline_extra',
                    'airline_seat_recline_normal',
                    'bluetooth_audio',
                    'confirmation_number',
                    'disc_full',
                    'drive_eta',
                    'enhanced_encryption',
                    'event_available',
                    'event_busy',
                    'event_note',
                    'folder_special',
                    'live_tv',
                    'mms',
                    'more',
                    'network_check',
                    'network_locked',
                    'no_encryption',
                    'ondemand_video',
                    'personal_video',
                    'phone_bluetooth_speaker',
                    'phone_callback',
                    'phone_forwarded',
                    'phone_in_talk',
                    'phone_locked',
                    'phone_missed',
                    'phone_paused',
                    'power',
                    'power_off',
                    'priority_high',
                    'sd_card',
                    'sms',
                    'sms_failed',
                    'sync',
                    'sync_disabled',
                    'sync_problem',
                    'system_update',
                    'tap_and_play',
                    'time_to_leave',
                    'tv_off',
                    'vibration',
                    'voice_chat',
                    'vpn_lock',
                    'wc',
                    'wifi',
                    'wifi_off',
                ],
            },
            {
                name: 'places',
                icons: [
                    'ac_unit',
                    'airport_shuttle',
                    'all_inclusive',
                    'beach_access',
                    'business_center',
                    'casino',
                    'child_care',
                    'child_friendly',
                    'fitness_center',
                    'free_breakfast',
                    'golf_course',
                    'hot_tub',
                    'kitchen',
                    'meeting_room',
                    'no_meeting_room',
                    'pool',
                    'room_service',
                    'rv_hookup',
                    'smoke_free',
                    'smoking_rooms',
                    'spa',
                ],
            },
            {
                name: 'social',
                icons: [
                    'cake',
                    'domain',
                    'group',
                    'group_add',
                    'location_city',
                    'mood',
                    'mood_bad',
                    'notifications',
                    'notifications_active',
                    'notifications_none',
                    'notifications_off',
                    'notifications_paused',
                    'pages',
                    'party_mode',
                    'people',
                    'people_outline',
                    'person',
                    'person_add',
                    'person_outline',
                    'plus_one',
                    'poll',
                    'public',
                    'school',
                    'sentiment_dissatisfied',
                    'sentiment_satisfied',
                    'sentiment_very_dissatisfied',
                    'sentiment_very_satisfied',
                    'share',
                    'thumb_down_alt',
                    'thumb_up_alt',
                    'whatshot',
                ],
            },
            {
                name: 'toggle',
                icons: [
                    'check_box',
                    'check_box_outline_blank',
                    'indeterminate_check_box',
                    'radio_button_checked',
                    'radio_button_unchecked',
                    'star',
                    'star_border',
                    'star_half',
                ],
            },
        ];
        return _this;
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])('class.mdl-grid'),
        __metadata("design:type", Object)
    ], IconsComponent.prototype, "mdlGrid", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])('class.ui-icons'),
        __metadata("design:type", Object)
    ], IconsComponent.prototype, "uiIcons", void 0);
    IconsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-icons',
            template: __webpack_require__(/*! ./icons.component.html */ "./src/app/pages/ui/icons/icons.component.html"),
            styles: [__webpack_require__(/*! ./icons.component.scss */ "./src/app/pages/ui/icons/icons.component.scss")],
        })
    ], IconsComponent);
    return IconsComponent;
}(theme_components_upgradable__WEBPACK_IMPORTED_MODULE_1__["UpgradableComponent"]));



/***/ }),

/***/ "./src/app/pages/ui/icons/index.ts":
/*!*****************************************!*\
  !*** ./src/app/pages/ui/icons/index.ts ***!
  \*****************************************/
/*! exports provided: IconsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _icons_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./icons.component */ "./src/app/pages/ui/icons/icons.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IconsComponent", function() { return _icons_component__WEBPACK_IMPORTED_MODULE_0__["IconsComponent"]; });




/***/ }),

/***/ "./src/app/pages/ui/right-sidebar/filters/filters.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/pages/ui/right-sidebar/filters/filters.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"mdl-cell mdl-cell--12-col\">\r\n  <material-angular-select [data]=\"languages\"\r\n                    [name]=\"'language'\"\r\n                    [label]=\"'Language'\"\r\n                    [currentValue]=\"currentLanguage\"></material-angular-select>\r\n</div>\r\n\r\n<div class=\"mdl-cell mdl-cell--12-col\">\r\n  <material-angular-select [data]=\"currencies\"\r\n                    [name]=\"'currency'\"\r\n                    [label]=\"'Currency'\"\r\n                    [currentValue]=\"currentCurrency\"></material-angular-select>\r\n</div>\r\n\r\n<div class=\"mdl-cell mdl-cell--12-col\">\r\n  <material-angular-select [data]=\"['Male', 'Female']\"\r\n                    [name]=\"'gender'\"\r\n                    [label]=\"'Gender'\"\r\n                    [currentValue]=\"'Male'\"></material-angular-select>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/pages/ui/right-sidebar/filters/filters.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/pages/ui/right-sidebar/filters/filters.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "app-filters material-angular-select .mdl-menu__container .mdl-menu .mdl-menu__item,\napp-filters material-angular-select .mdl-textfield__input {\n  font-size: 13px; }\n\napp-filters material-angular-select.mdl-textfield {\n  width: 100%;\n  max-width: 240px; }\n\napp-filters material-angular-select .mdl-textfield__input {\n  line-height: 20px;\n  text-transform: capitalize; }\n\napp-filters material-angular-select .mdl-menu__item {\n  text-transform: capitalize; }\n"

/***/ }),

/***/ "./src/app/pages/ui/right-sidebar/filters/filters.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/pages/ui/right-sidebar/filters/filters.component.ts ***!
  \*********************************************************************/
/*! exports provided: FiltersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiltersComponent", function() { return FiltersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FiltersComponent = /** @class */ (function () {
    function FiltersComponent() {
        this.currencies = ['BYN', 'EUR', 'USD', 'RUR', 'PLN'];
        this.currentCurrency = 'BYN';
        this.languages = ['Belarusian', 'English', 'USD', 'German', 'Polish'];
        this.currentLanguage = 'Belarusian';
    }
    FiltersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-filters',
            styles: [__webpack_require__(/*! ./filters.component.scss */ "./src/app/pages/ui/right-sidebar/filters/filters.component.scss")],
            template: __webpack_require__(/*! ./filters.component.html */ "./src/app/pages/ui/right-sidebar/filters/filters.component.html"),
        })
    ], FiltersComponent);
    return FiltersComponent;
}());



/***/ }),

/***/ "./src/app/pages/ui/right-sidebar/index.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/ui/right-sidebar/index.ts ***!
  \*************************************************/
/*! exports provided: RightSidebarComponent, RightSidebarModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _right_sidebar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./right-sidebar.component */ "./src/app/pages/ui/right-sidebar/right-sidebar.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RightSidebarComponent", function() { return _right_sidebar_component__WEBPACK_IMPORTED_MODULE_0__["RightSidebarComponent"]; });

/* harmony import */ var _right_sidebar_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./right-sidebar.module */ "./src/app/pages/ui/right-sidebar/right-sidebar.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RightSidebarModule", function() { return _right_sidebar_module__WEBPACK_IMPORTED_MODULE_1__["RightSidebarModule"]; });





/***/ }),

/***/ "./src/app/pages/ui/right-sidebar/right-sidebar.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/pages/ui/right-sidebar/right-sidebar.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<base-right-sidebar-layout>\r\n  <base-right-sidebar-content>\r\n  </base-right-sidebar-content>\r\n\r\n  <base-right-sidebar [title]=\"'Filters'\">\r\n    <app-filters></app-filters>\r\n  </base-right-sidebar>\r\n\r\n</base-right-sidebar-layout>\r\n\r\n"

/***/ }),

/***/ "./src/app/pages/ui/right-sidebar/right-sidebar.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/pages/ui/right-sidebar/right-sidebar.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "base-right-sidebar .mdl-card__title-text {\n  text-transform: uppercase;\n  font-size: 14px;\n  line-height: 16px; }\n"

/***/ }),

/***/ "./src/app/pages/ui/right-sidebar/right-sidebar.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/ui/right-sidebar/right-sidebar.component.ts ***!
  \*******************************************************************/
/*! exports provided: RightSidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RightSidebarComponent", function() { return RightSidebarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var theme_components_upgradable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! theme/components/upgradable */ "./src/theme/components/upgradable/index.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var RightSidebarComponent = /** @class */ (function (_super) {
    __extends(RightSidebarComponent, _super);
    function RightSidebarComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RightSidebarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-tables',
            template: __webpack_require__(/*! ./right-sidebar.component.html */ "./src/app/pages/ui/right-sidebar/right-sidebar.component.html"),
            styles: [__webpack_require__(/*! ./right-sidebar.component.scss */ "./src/app/pages/ui/right-sidebar/right-sidebar.component.scss")],
        })
    ], RightSidebarComponent);
    return RightSidebarComponent;
}(theme_components_upgradable__WEBPACK_IMPORTED_MODULE_1__["UpgradableComponent"]));



/***/ }),

/***/ "./src/app/pages/ui/right-sidebar/right-sidebar.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/pages/ui/right-sidebar/right-sidebar.module.ts ***!
  \****************************************************************/
/*! exports provided: RightSidebarModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RightSidebarModule", function() { return RightSidebarModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var material_angular_select__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! material-angular-select */ "./node_modules/material-angular-select/fesm5/material-angular-select.js");
/* harmony import */ var theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! theme */ "./src/theme/index.ts");
/* harmony import */ var _filters_filters_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./filters/filters.component */ "./src/app/pages/ui/right-sidebar/filters/filters.component.ts");
/* harmony import */ var _right_sidebar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./right-sidebar.component */ "./src/app/pages/ui/right-sidebar/right-sidebar.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var RightSidebarModule = /** @class */ (function () {
    function RightSidebarModule() {
    }
    RightSidebarModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                theme__WEBPACK_IMPORTED_MODULE_4__["ThemeModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                material_angular_select__WEBPACK_IMPORTED_MODULE_3__["MaterialAngularSelectModule"],
            ],
            declarations: [
                _right_sidebar_component__WEBPACK_IMPORTED_MODULE_6__["RightSidebarComponent"],
                _filters_filters_component__WEBPACK_IMPORTED_MODULE_5__["FiltersComponent"],
            ],
        })
    ], RightSidebarModule);
    return RightSidebarModule;
}());



/***/ }),

/***/ "./src/app/pages/ui/tables/index.ts":
/*!******************************************!*\
  !*** ./src/app/pages/ui/tables/index.ts ***!
  \******************************************/
/*! exports provided: TablesComponent, TablesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tables_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tables.component */ "./src/app/pages/ui/tables/tables.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TablesComponent", function() { return _tables_component__WEBPACK_IMPORTED_MODULE_0__["TablesComponent"]; });

/* harmony import */ var _tables_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tables.service */ "./src/app/pages/ui/tables/tables.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TablesService", function() { return _tables_service__WEBPACK_IMPORTED_MODULE_1__["TablesService"]; });





/***/ }),

/***/ "./src/app/pages/ui/tables/tables.component.html":
/*!*******************************************************!*\
  !*** ./src/app/pages/ui/tables/tables.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"mdl-cell mdl-cell--6-col-desktop mdl-cell--6-col-tablet mdl-cell--4-col-phone\">\r\n  <base-card>\r\n    <base-card-title>\r\n      <h1 class=\"mdl-card__title-text\">Simple table</h1>\r\n    </base-card-title>\r\n    <base-card-body class=\"no-padding\">\r\n      <table class=\"mdl-data-table mdl-js-data-table\">\r\n        <thead>\r\n        <tr>\r\n          <th *ngFor=\"let header of headers\" class=\"mdl-data-table__cell--non-numeric\">{{ header }}</th>\r\n        </tr>\r\n        </thead>\r\n        <tbody>\r\n        <tr *ngFor=\"let row of simpleTable\">\r\n          <td *ngFor=\"let cell of row.slice(0, -1)\" class=\"mdl-data-table__cell--non-numeric\">{{ cell }}</td>\r\n          <td class=\"mdl-data-table__cell--non-numeric\" [ngSwitch]=\"row[row.length - 1]\">\r\n            <span *ngSwitchCase=\"'read'\" class=\"label label--mini background-color--primary\">Read</span>\r\n            <span *ngSwitchCase=\"'unread'\" class=\"label label--mini background-color--secondary\">Unread</span>\r\n          </td>\r\n        </tr>\r\n        </tbody>\r\n      </table>\r\n    </base-card-body>\r\n  </base-card>\r\n</div>\r\n<div class=\"mdl-cell mdl-cell--6-col-desktop mdl-cell--6-col-tablet mdl-cell--4-col-phone\">\r\n  <base-card>\r\n    <base-card-title>\r\n      <h1 class=\"mdl-card__title-text\">Bordered table</h1>\r\n    </base-card-title>\r\n    <base-card-body class=\"no-padding\">\r\n      <table class=\"mdl-data-table mdl-js-data-table bordered-table\">\r\n        <thead>\r\n        <tr>\r\n          <th *ngFor=\"let header of headers\" class=\"mdl-data-table__cell--non-numeric\">{{ header }}</th>\r\n        </tr>\r\n        </thead>\r\n        <tbody>\r\n        <tr *ngFor=\"let row of borderedTable\">\r\n          <td *ngFor=\"let cell of row.slice(0, -1)\" class=\"mdl-data-table__cell--non-numeric\">{{ cell }}</td>\r\n          <td class=\"mdl-data-table__cell--non-numeric\" [ngSwitch]=\"row[row.length - 1]\">\r\n            <span *ngSwitchCase=\"'read'\" class=\"label label--mini background-color--primary\">Read</span>\r\n            <span *ngSwitchCase=\"'unread'\" class=\"label label--mini background-color--secondary\">Unread</span>\r\n          </td>\r\n        </tr>\r\n        </tbody>\r\n      </table>\r\n    </base-card-body>\r\n  </base-card>\r\n</div>\r\n<div class=\"mdl-cell mdl-cell--6-col-desktop mdl-cell--6-col-tablet mdl-cell--4-col-phone\">\r\n  <base-card>\r\n    <base-card-title>\r\n      <h1 class=\"mdl-card__title-text\">Stripped table</h1>\r\n    </base-card-title>\r\n    <base-card-body class=\"no-padding\">\r\n      <table class=\"mdl-data-table mdl-js-data-table stripped-table\">\r\n        <thead>\r\n        <tr>\r\n          <th *ngFor=\"let header of headers\" class=\"mdl-data-table__cell--non-numeric\">{{ header }}</th>\r\n        </tr>\r\n        </thead>\r\n        <tbody>\r\n        <tr *ngFor=\"let row of strippedTable\">\r\n          <td *ngFor=\"let cell of row.slice(0, -1)\" class=\"mdl-data-table__cell--non-numeric\">{{ cell }}</td>\r\n          <td class=\"mdl-data-table__cell--non-numeric\" [ngSwitch]=\"row[row.length - 1]\">\r\n            <span *ngSwitchCase=\"'unavailable'\" class=\"label label--mini color--orange\">Unavailable</span>\r\n            <span *ngSwitchCase=\"'available'\" class=\"label label--mini background-color--primary\">Available</span>\r\n          </td>\r\n        </tr>\r\n        </tbody>\r\n      </table>\r\n    </base-card-body>\r\n  </base-card>\r\n</div>\r\n<div class=\"mdl-cell mdl-cell--6-col-desktop mdl-cell--6-col-tablet mdl-cell--4-col-phone\">\r\n  <base-card>\r\n    <base-card-title>\r\n      <h1 class=\"mdl-card__title-text\">Borderless table</h1>\r\n    </base-card-title>\r\n    <base-card-body class=\"no-padding\">\r\n      <table class=\"mdl-data-table mdl-js-data-table borderless-table\">\r\n        <thead>\r\n        <tr>\r\n          <th *ngFor=\"let header of headers\" class=\"mdl-data-table__cell--non-numeric\">{{ header }}</th>\r\n        </tr>\r\n        </thead>\r\n        <tbody>\r\n        <tr *ngFor=\"let row of borderlessTable\">\r\n          <td *ngFor=\"let cell of row.slice(0, -1)\" class=\"mdl-data-table__cell--non-numeric\">{{ cell }}</td>\r\n          <td class=\"mdl-data-table__cell--non-numeric\" [ngSwitch]=\"row[row.length - 1]\">\r\n            <span *ngSwitchCase=\"'unavailable'\" class=\"label label--mini color--orange\">Unavailable</span>\r\n            <span *ngSwitchCase=\"'available'\" class=\"label label--mini background-color--primary\">Available</span>\r\n          </td>\r\n        </tr>\r\n        </tbody>\r\n      </table>\r\n    </base-card-body>\r\n  </base-card>\r\n</div>\r\n<div class=\"mdl-cell mdl-cell--12-col-desktop mdl-cell--12-col-tablet mdl-cell--4-col-phone\">\r\n  <base-card>\r\n    <base-card-title>\r\n      <h1 class=\"mdl-card__title-text\">Advanced table</h1>\r\n      <div class=\"mdl-layout-spacer\"></div>\r\n      <base-pagination [numPage]=\"numPage\"\r\n                       [currentPage]=\"currentPage\"\r\n                       (changePage)=\"changePage($event)\"></base-pagination>\r\n    </base-card-title>\r\n    <base-card-body class=\"no-padding\">\r\n      <table class=\"mdl-data-table mdl-js-data-table sorting-table\">\r\n        <thead>\r\n        <tr>\r\n          <th *ngFor=\"let header of advancedHeaders; let i = index\" class=\"mdl-data-table__cell--non-numeric\"\r\n              (click)=\"changeSorting(header, i)\">\r\n            <span>{{ header.name }}</span>\r\n            <i *ngIf=\"header.sort !== null \" class=\"material-icons sorting\"\r\n               [class.asc]=\"header.sort === sortOrder.asc\"\r\n               [class.active]=\"header.sort === sortOrder.asc || header.sort === sortOrder.desc\">sort</i>\r\n          </th>\r\n        </tr>\r\n        </thead>\r\n        <tbody>\r\n        <tr *ngFor=\"let row of advancedTable\">\r\n          <td *ngFor=\"let cell of row.slice(0, 3)\" class=\"mdl-data-table__cell--non-numeric\">{{ cell }}</td>\r\n          <td class=\"mdl-data-table__cell--non-numeric\">\r\n            <span *ngFor=\"let genre of row[3]\"\r\n                  class=\"label label--mini color--{{ genreColors[genre] }}\">{{ genre }}</span>\r\n          </td>\r\n          <td *ngFor=\"let cell of row.slice(4, 8)\" class=\"mdl-data-table__cell--non-numeric\">{{ cell }}</td>\r\n          <td class=\"mdl-data-table__cell--non-numeric\">\r\n              <span *ngFor=\"let i of Array(row[8])\" class=\"label label--mini label__availability\"\r\n                    [class.background-color--secondary]=\"row[8] === 1\"\r\n                    [class.color--orange]=\"row[8] === 2\"\r\n                    [class.background-color--primary]=\"row[8] === 4\"\r\n                    [class.color--green]=\"row[8] === 3\"></span>\r\n            <span *ngFor=\"let i of Array(4 - row[8])\" class=\"label label--mini label__availability\"></span>\r\n          </td>\r\n          <td class=\"mdl-data-table__cell--non-numeric\">\r\n            <button class=\"mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect button--colored-teal\">Add to\r\n              cart\r\n            </button>\r\n          </td>\r\n        </tr>\r\n        </tbody>\r\n      </table>\r\n    </base-card-body>\r\n  </base-card>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/pages/ui/tables/tables.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/pages/ui/tables/tables.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".ui-tables .mdl-card,\n.ui-tables .mdl-card__supporting-text {\n  overflow-x: auto; }\n\n.ui-tables table {\n  width: 100%; }\n\n.ui-tables table td {\n    font-size: 1rem; }\n\n.ui-tables .no-padding {\n  padding: 0;\n  width: 100%; }\n\n.ui-tables .label__availability {\n  margin-right: 2px; }\n"

/***/ }),

/***/ "./src/app/pages/ui/tables/tables.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/ui/tables/tables.component.ts ***!
  \*****************************************************/
/*! exports provided: TablesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TablesComponent", function() { return TablesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var theme_components_upgradable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! theme/components/upgradable */ "./src/theme/components/upgradable/index.ts");
/* harmony import */ var _tables_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tables.service */ "./src/app/pages/ui/tables/tables.service.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TablesComponent = /** @class */ (function (_super) {
    __extends(TablesComponent, _super);
    function TablesComponent(tablesService) {
        var _this = _super.call(this) || this;
        _this.tablesService = tablesService;
        _this.Array = Array;
        _this.mdlGrid = true;
        _this.mdlCell = true;
        _this.mdlCell12ColDesktop = true;
        _this.mdlCell12ColTablet = true;
        _this.mdlCell4ColPhone = true;
        _this.mdlCellTop = true;
        _this.uiTables = true;
        _this.sortOrder = {
            asc: 1,
            desc: -1,
        };
        _this.headers = _this.tablesService.getHeaders();
        _this.simpleTable = _this.tablesService.getSimpleTable();
        _this.borderedTable = _this.tablesService.getBorderedTable();
        _this.strippedTable = _this.tablesService.getStrippedTable();
        _this.borderlessTable = _this.tablesService.getBorderlessTable();
        _this.advancedHeaders = _this.tablesService.getAdvancedHeaders();
        _this.genreColors = {
            'Children\'s book': 'orange',
            'Gothic fiction': 'purple',
            'Horror fiction': 'dark-gray',
            'Fiction': 'green',
            'Novel': 'teal',
            'Fantasy': 'red',
            'Adventure': 'light-blue',
        };
        _this.currentPage = 1;
        _this.countPerPage = 4;
        _this.numPage = _this.tablesService.getAdvancedTableNumOfPage(_this.countPerPage);
        _this.advancedTable = _this.tablesService.getAdvancedTablePage(1, _this.countPerPage);
        return _this;
    }
    TablesComponent.prototype.changePage = function (page, force) {
        if (force === void 0) { force = false; }
        if (page !== this.currentPage || force) {
            this.currentPage = page;
            this.advancedTable = this.tablesService.getAdvancedTablePage(page, this.countPerPage);
        }
    };
    /* available sort value:
      -1 - desc; 	0 - no sorting; 1 - asc; null - disabled */
    TablesComponent.prototype.changeSorting = function (header, index) {
        var current = header.sort;
        if (current !== null) {
            this.advancedHeaders.forEach(function (cell) {
                cell.sort = (cell.sort !== null) ? 0 : null;
            });
            header.sort = (current === 1) ? -1 : 1;
            this.tablesService.changeAdvanceSorting(header.sort, index);
            this.changePage(1, true);
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])('class.mdl-grid'),
        __metadata("design:type", Object)
    ], TablesComponent.prototype, "mdlGrid", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])('class.mdl-cell'),
        __metadata("design:type", Object)
    ], TablesComponent.prototype, "mdlCell", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])('class.mdl-cell--12-col-desktop'),
        __metadata("design:type", Object)
    ], TablesComponent.prototype, "mdlCell12ColDesktop", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])('class.mdl-cell--12-col-tablet'),
        __metadata("design:type", Object)
    ], TablesComponent.prototype, "mdlCell12ColTablet", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])('class.mdl-cell--4-col-phone'),
        __metadata("design:type", Object)
    ], TablesComponent.prototype, "mdlCell4ColPhone", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])('class.mdl-cell--top'),
        __metadata("design:type", Object)
    ], TablesComponent.prototype, "mdlCellTop", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])('class.ui-tables'),
        __metadata("design:type", Object)
    ], TablesComponent.prototype, "uiTables", void 0);
    TablesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-tables',
            template: __webpack_require__(/*! ./tables.component.html */ "./src/app/pages/ui/tables/tables.component.html"),
            styles: [__webpack_require__(/*! ./tables.component.scss */ "./src/app/pages/ui/tables/tables.component.scss")],
        }),
        __metadata("design:paramtypes", [_tables_service__WEBPACK_IMPORTED_MODULE_2__["TablesService"]])
    ], TablesComponent);
    return TablesComponent;
}(theme_components_upgradable__WEBPACK_IMPORTED_MODULE_1__["UpgradableComponent"]));



/***/ }),

/***/ "./src/app/pages/ui/tables/tables.service.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/ui/tables/tables.service.ts ***!
  \***************************************************/
/*! exports provided: TablesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TablesService", function() { return TablesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var TablesService = /** @class */ (function () {
    function TablesService() {
        this.advanceTableData = [
            [
                '5',
                'Life of Pi',
                'Yann Martel',
                [
                    'Fiction',
                ],
                '2016',
                '2001',
                'English',
                'English',
                4,
            ],
            [
                '6',
                'The secret Garden',
                'Frances Hodgson Burnett',
                [
                    'Children\'s book',
                ],
                '2017',
                '1911',
                'English',
                'English',
                1,
            ],
            [
                '7',
                'Rebecca',
                'Daphne du Maurier',
                [
                    'Gothic fiction',
                ],
                '2016',
                '1938',
                'English',
                'English',
                2,
            ],
            [
                '8',
                'Dracula',
                'Bram Stoker',
                [
                    'Gothic fiction',
                    'Horror fiction',
                ],
                '2015',
                '1897',
                'English',
                'English',
                0,
            ],
            [
                '9',
                'The Little Prince',
                'Antoine de Saint-Exupery',
                [
                    'Fiction',
                ],
                '2015',
                '1943',
                'English',
                'French',
                1,
            ],
            [
                '10',
                'Les Miserables',
                'Victor Hugo',
                [
                    'Novel',
                    'Fiction',
                ],
                '2014',
                '1862',
                'English',
                'French',
                3,
            ],
            [
                '11',
                'Alice in Wonderland',
                'Lewis Carroll',
                [
                    'Children\'s book',
                    'Fantasy',
                ],
                '2018',
                '1865',
                'English',
                'English',
                4,
            ],
            [
                '12',
                'Anne of Green Gables',
                'L.M. Montgomery',
                [
                    'Novel',
                ],
                '2019',
                '1908',
                'English',
                'English',
                3,
            ],
            [
                '13',
                'The Hitchhiker\'s Guide to th...',
                'Douglas Adams',
                [
                    'Adventure',
                    'Fiction',
                ],
                '2017',
                '1979',
                'English',
                'English',
                3,
            ],
            [
                '14',
                'Madame Bovary',
                'Gustave Flaubert',
                [
                    'Novel',
                ],
                '2018',
                '1856',
                'English',
                'French',
                2,
            ],
            [
                '15',
                'David Copperfield',
                'Charles Dickens',
                [
                    'Novel',
                ],
                '2019',
                '1850',
                'English',
                'English',
                4,
            ],
            [
                '16',
                'War and Peace',
                'Leo Tolstoy',
                [
                    'Fiction',
                ],
                '2015',
                '1869',
                'English',
                'Russian',
                3,
            ],
            [
                '17',
                'Gone with the Wind',
                'Margaret Mitchell',
                [
                    'Fiction',
                ],
                '2014',
                '1936',
                'English',
                'Russian',
                2,
            ],
            [
                '18',
                'The Count of Monte Cristo',
                'Alexandre Dumas',
                [
                    'Novel',
                    'Adventure',
                ],
                '2019',
                '1845',
                'English',
                'English',
                0,
            ],
            [
                '19',
                'Lolita',
                'Vladimir Nabokov',
                [
                    'Novel',
                ],
                '2018',
                '1955',
                'English',
                'Russian',
                3,
            ],
            [
                '20',
                'The Hobbit',
                'J.R.R. Tolkien',
                [
                    'Fantasy',
                ],
                '2017',
                '1937',
                'English',
                'English',
                1,
            ],
        ];
    }
    TablesService.prototype.getHeaders = function () {
        return [
            '#',
            'Book title',
            'Author',
            'First published',
            'Status',
        ];
    };
    TablesService.prototype.getSimpleTable = function () {
        return [
            [
                '1',
                'To Kill a Mockingbird',
                'Harper Lee',
                '1960',
                'read',
            ],
            [
                '2',
                'Pride and Prejudice',
                'Jane Austen',
                '1813',
                'unread',
            ],
            [
                '3',
                'The Great Gatsby',
                'F. Scott Fitzgerald',
                '1925',
                'read',
            ],
            [
                '4',
                'Crime and Punishment',
                'Fyodor Dostoyevsky',
                '1866',
                'read',
            ],
        ];
    };
    TablesService.prototype.getBorderedTable = function () {
        return [
            [
                '23',
                'Gone with the Wind',
                'Margaret Mitchell',
                '1936',
                'unread',
            ],
            [
                '24',
                'The Count of Monte Cristo',
                'Alexandre Dumas',
                '1845',
                'unread',
            ],
            [
                '25',
                'Lolita',
                'Vladimir Nabokov',
                '1955',
                'read',
            ],
            [
                '26',
                'The Hobbit',
                'J.R.R. Tolkien',
                '1937',
                'unread',
            ],
        ];
    };
    TablesService.prototype.getStrippedTable = function () {
        return [
            [
                '54',
                'The Hitchhiker\'s Guide to th...',
                'Douglas Adams',
                '1979',
                'unavailable',
            ],
            [
                '55',
                'Madame Bovary',
                'Gustave Flaubert',
                '1856',
                'available',
            ],
            [
                '56',
                'David Copperfield',
                'Charles Dickens',
                '1850',
                'available',
            ],
            [
                '57',
                'War and Peace',
                'Leo Tolstoy',
                '1869',
                'available',
            ],
        ];
    };
    TablesService.prototype.getBorderlessTable = function () {
        return [
            [
                '31',
                'The Little Prince',
                'Antoine de Saint-Exupery',
                '1943',
                'available',
            ],
            [
                '32',
                'Les Miserables',
                'Victor Hugo',
                '1862',
                'unavailable',
            ],
            [
                '33',
                'Alice in Wonderland',
                'Lewis Carroll',
                '1865',
                'available',
            ],
            [
                '34',
                'Anne of Green Gables',
                'L.M. Montgomery',
                '1908',
                'available',
            ],
        ];
    };
    TablesService.prototype.getAdvancedHeaders = function () {
        return [
            {
                name: '#',
                sort: null,
            },
            {
                name: 'Book title',
                sort: 0,
            },
            {
                name: 'Author',
                sort: 0,
            },
            {
                name: 'Genre',
                sort: null,
            },
            {
                name: 'Year',
                sort: null,
            },
            {
                name: 'Originally published',
                sort: 0,
            },
            {
                name: 'Language',
                sort: null,
            },
            {
                name: 'Original Language',
                sort: 0,
            }, {
                name: 'Availability',
                sort: 0,
            },
        ];
    };
    TablesService.prototype.getAdvancedTableNumOfPage = function (countPerPage) {
        return Math.ceil(this.advanceTableData.length / countPerPage);
    };
    TablesService.prototype.getAdvancedTablePage = function (page, countPerPage) {
        return this.advanceTableData.slice((page - 1) * countPerPage, page * countPerPage);
    };
    TablesService.prototype.changeAdvanceSorting = function (order, index) {
        this.advanceTableData = this.sorting(this.advanceTableData, order, index);
    };
    TablesService.prototype.sorting = function (array, order, value) {
        var compareFunction = function (a, b) {
            if (a[value] > b[value]) {
                return 1 * order;
            }
            if (a[value] < b[value]) {
                return -1 * order;
            }
            return 0;
        };
        return array.sort(compareFunction);
    };
    TablesService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], TablesService);
    return TablesService;
}());



/***/ }),

/***/ "./src/app/pages/ui/typography/index.ts":
/*!**********************************************!*\
  !*** ./src/app/pages/ui/typography/index.ts ***!
  \**********************************************/
/*! exports provided: TypographyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _typography_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./typography.component */ "./src/app/pages/ui/typography/typography.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TypographyComponent", function() { return _typography_component__WEBPACK_IMPORTED_MODULE_0__["TypographyComponent"]; });




/***/ }),

/***/ "./src/app/pages/ui/typography/typography.component.html":
/*!***************************************************************!*\
  !*** ./src/app/pages/ui/typography/typography.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"mdl-cell mdl-cell--9-col-desktop mdl-cell--9-col-tablet mdl-cell--4-col-phone mdl-cell--top\">\r\n  <div class=\"mdl-cell mdl-cell--12-col-desktop mdl-cell--12-col-tablet mdl-cell--4-col-phone\">\r\n    <base-card>\r\n      <base-card-title>\r\n        <h2 class=\"mdl-card__title-text\">General</h2>\r\n      </base-card-title>\r\n      <base-card-body>\r\n        <span class=\"text-color--gray\">Roboto is the standart typefaces of Material Design style</span>\r\n        <p>Roboto weight 200 30px</p>\r\n        <p>Roboto weight 300 30px</p>\r\n        <p>Roboto weight 400 30px</p>\r\n        <p>Roboto weight 500 30px</p>\r\n        <p>Roboto weight 600 30px</p>\r\n      </base-card-body>\r\n    </base-card>\r\n  </div>\r\n  <div class=\"mdl-cell mdl-cell--12-col-desktop mdl-cell--12-col-tablet mdl-cell--4-col-phone\">\r\n    <base-card>\r\n      <base-card-title>\r\n        <h2 class=\"mdl-card__title-text\">Text samples</h2>\r\n      </base-card-title>\r\n      <base-card-body>\r\n      <span class=\"text-color--gray\">SAMPLE TEXT</span>\r\n      <p>\r\n        Has consul possim sadipscing no. Facer dissentias cu est, vim eu habeo eruditi.\r\n        Rationibus reprimique vis an, mei vidit solum sententiae no, rebum blandit eleifend cum id. Id amet mucius aperiri mea.\r\n        Eu eam audiam utroque gloriatur, cu duis graeci disputationi mea, has an harum nihil blandit.\r\n        <br><br>\r\n        Facer cetero est ne, no duo commodo tincidunt scribentur, in quo maiorum iudicabit.\r\n        Everti liberavisse cu ius. Eam ea antiopam referrentur, probo affert docendi no usu, est no odio perpetua electram.\r\n        Clita viderer eum ea.\r\n        Partem democritum qui in. In nec sale choro inermis, et vel audiam philosophia.\r\n      </p>\r\n      <span class=\"text-color--gray\">SAMPLE TEXT WITH LEAD BODY</span>\r\n\r\n      <h5>Lead body. Has consul possim sadipscing no</h5>\r\n      <p>\r\n        Has consul possim sadipscing no. Facer dissentias cu est, vim eu habeo eruditi.\r\n        Rationibus reprimique vis an, mei vidit solum sententiae no, rebum blandit eleifend cum id. Id amet mucius aperiri mea.\r\n        Eu eam audiam utroque gloriatur, cu duis graeci disputationi mea, has an harum nihil blandit.\r\n        <br><br>\r\n        Facer cetero est ne, no duo commodo tincidunt scribentur, in quo maiorum iudicabit.\r\n        Everti liberavisse cu ius. Eam ea antiopam referrentur, probo affert docendi no usu, est no odio perpetua electram.\r\n        Clita viderer eum ea.\r\n        Partem democritum qui in. In nec sale choro inermis, et vel audiam philosophia.\r\n      </p>\r\n      <span class=\"text-color--gray\">COLORED TEXT SAMPLES</span>\r\n      <p>\r\n        <span class=\"color-text--red\">Has consul possim sadipscing no. Facer dissentias cu est, vim eu habeo eruditi.</span>\r\n        <br>\r\n        <span class=\"color-text--orange\">Has consul possim sadipscing no. Facer dissentias cu est, vim eu habeo eruditi.</span>\r\n        <br>\r\n        <span class=\"color-text--teal\">Has consul possim sadipscing no. Facer dissentias cu est, vim eu habeo eruditi.</span>\r\n        <br>\r\n        <span class=\"color-text--light-blue\">Has consul possim sadipscing no. Facer dissentias cu est, vim eu habeo eruditi.</span>\r\n        <br>\r\n        <span class=\"color-text--purple\">Has consul possim sadipscing no. Facer dissentias cu est, vim eu habeo eruditi.</span>\r\n        <br>\r\n        <span class=\"color-text--green\">Has consul possim sadipscing no. Facer dissentias cu est, vim eu habeo eruditi.</span>\r\n      </p>\r\n      </base-card-body>\r\n    </base-card>\r\n  </div>\r\n  <div class=\"mdl-cell mdl-cell--12-col-desktop mdl-cell--12-col-tablet mdl-cell--4-col-phone\">\r\n    <base-card>\r\n      <base-card-title>\r\n        <h2 class=\"mdl-card__title-text\">Headers</h2>\r\n      </base-card-title>\r\n      <base-card-body>\r\n        <h1>Heading h1</h1>\r\n        <h2>Heading h2</h2>\r\n        <h3>Heading h3</h3>\r\n        <h4>Heading h4</h4>\r\n        <h5>Heading h5</h5>\r\n        <h6>Heading h6</h6>\r\n      </base-card-body>\r\n    </base-card>\r\n  </div>\r\n  <div class=\"mdl-cell mdl-cell--12-col-desktop mdl-cell--12-col-tablet mdl-cell--4-col-phone\">\r\n    <base-card>\r\n      <base-card-title>\r\n        <h2 class=\"mdl-card__title-text\">Alignment</h2>\r\n      </base-card-title>\r\n      <base-card-body>\r\n        <div>Left aligned text</div>\r\n        <div>Center aligned text</div>\r\n        <div>Right aligned text</div>\r\n      </base-card-body>\r\n    </base-card>\r\n  </div>\r\n</div>\r\n<div class=\"mdl-cell mdl-cell--3-col-desktop mdl-cell--3-col-tablet mdl-cell--4-col-phone mdl-cell--top\">\r\n  <div class=\"mdl-cell mdl-cell--12-col-desktop mdl-cell--12-col-tablet mdl-cell--4-col-phone\">\r\n    <base-card>\r\n      <base-card-title>\r\n        <h2 class=\"mdl-card__title-text\">Unordered list</h2>\r\n      </base-card-title>\r\n      <base-card-body>\r\n        <ul>\r\n          <li>Code</li>\r\n          <li>\r\n            Eating\r\n            <ul>\r\n              <li>Breakfast</li>\r\n              <li>Lunch</li>\r\n              <li>Dinner</li>\r\n            </ul>\r\n          </li>\r\n          <li>Sleeping</li>\r\n          <li>Meditation</li>\r\n          <li>The fight against evil</li>\r\n        </ul>\r\n      </base-card-body>\r\n    </base-card>\r\n  </div>\r\n  <div class=\"mdl-cell mdl-cell--12-col-desktop mdl-cell--12-col-tablet mdl-cell--4-col-phone\">\r\n    <base-card>\r\n      <base-card-title>\r\n        <h2 class=\"mdl-card__title-text\">Ordered list</h2>\r\n      </base-card-title>\r\n      <base-card-body>\r\n        <ol>\r\n          <li>Code</li>\r\n          <li>\r\n            Eating\r\n            <ul>\r\n              <li>Breakfast</li>\r\n              <li>Lunch</li>\r\n              <li>Dinner</li>\r\n            </ul>\r\n          </li>\r\n          <li>Sleeping</li>\r\n          <li>Meditation</li>\r\n          <li>The fight against evil</li>\r\n        </ol>\r\n      </base-card-body>\r\n    </base-card>\r\n  </div>\r\n  <div class=\"mdl-cell mdl-cell--12-col-desktop mdl-cell--12-col-tablet mdl-cell--4-col-phone\">\r\n    <base-card>\r\n      <base-card-title>\r\n        <h2 class=\"mdl-card__title-text\">Unstyled list</h2>\r\n      </base-card-title>\r\n      <base-card-body>\r\n        <ul>\r\n          <li>Code</li>\r\n          <li>\r\n            Eating\r\n            <ul>\r\n              <li>Breakfast</li>\r\n              <li>Lunch</li>\r\n              <li>Dinner</li>\r\n            </ul>\r\n          </li>\r\n          <li>Sleeping</li>\r\n          <li>Meditation</li>\r\n          <li>The fight against evil</li>\r\n        </ul>\r\n      </base-card-body>\r\n    </base-card>\r\n  </div>\r\n  <div class=\"mdl-cell mdl-cell--12-col-desktop mdl-cell--12-col-tablet mdl-cell--4-col-phone\">\r\n    <base-card>\r\n      <base-card-title>\r\n        <h2 class=\"mdl-card__title-text\">Inline list</h2>\r\n      </base-card-title>\r\n      <base-card-body>\r\n        <ol>\r\n          <li>Code</li>\r\n          <li>Eating</li>\r\n          <li>Sleeping</li>\r\n        </ol>\r\n      </base-card-body>\r\n    </base-card>\r\n  </div>\r\n  <div class=\"mdl-cell mdl-cell--12-col-desktop mdl-cell--12-col-tablet mdl-cell--4-col-phone\">\r\n    <base-card>\r\n      <base-card-title>\r\n        <h2 class=\"mdl-card__title-text\">Description list</h2>\r\n      </base-card-title>\r\n      <base-card-body>\r\n        <dl>\r\n          <dt>Material Design</dt>\r\n          <dd>\r\n            Design language developed in 2014 by Google.\r\n            Expanding upon the \"card\" motifs that debuted in Google Now, Material Design makes more liberal use of grid-based layouts,\r\n            responsive animations and transitions, padding, and depth effects such as lighting and shadows.\r\n          </dd>\r\n          <dt>Material Design Lite</dt>\r\n          <dd>\r\n            This library lets you add a Material Design look and feel to your static content websites.\r\n            It doesn't rely on any JavaScript frameworks or libraries.\r\n            Optimized for cross-device use, gracefully degrades in older browsers, and offers an experience that is accessible from the get-go.\r\n          </dd>\r\n          <dt>Material Dashboard Lite</dt>\r\n          <dd>\r\n            First dark dashboard on the Material Design Lite!\r\n            Material Dashboard Lite admin template is absolutely free for commercial usage theme,\r\n            that uses google's implementation of material design - Material Design Lite library.\r\n          </dd>\r\n        </dl>\r\n      </base-card-body>\r\n    </base-card>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/pages/ui/typography/typography.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/pages/ui/typography/typography.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/*------------------------------------*\\\n    $CONTENTS\n\\*------------------------------------*/\n/**\n * STYLE GUIDE VARIABLES------------------Declarations of Sass variables\n * -----Typography\n * -----Colors\n * -----Textfield\n * -----Switch\n * -----Spinner\n * -----Radio\n * -----Menu\n * -----List\n * -----Layout\n * -----Icon toggles\n * -----Footer\n * -----Column\n * -----Checkbox\n * -----Card\n * -----Button\n * -----Animation\n * -----Progress\n * -----Badge\n * -----Shadows\n * -----Grid\n * -----Data table\n * -----Dialog\n * -----Snackbar\n * -----Tooltip\n * -----Chip\n *\n * Even though all variables have the `!default` directive, most of them\n * should not be changed as they are dependent one another. This can cause\n * visual distortions (like alignment issues) that are hard to track down\n * and fix.\n */\n/* ==========  TYPOGRAPHY  ========== */\n/* We're splitting fonts into \"preferred\" and \"performance\" in order to optimize\n   page loading. For important text, such as the body, we want it to load\n   immediately and not wait for the web font load, whereas for other sections,\n   such as headers and titles, we're OK with things taking a bit longer to load.\n   We do have some optional classes and parameters in the mixins, in case you\n   definitely want to make sure you're using the preferred font and don't mind\n   the performance hit.\n   We should be able to improve on this once CSS Font Loading L3 becomes more\n   widely available.\n*/\n/* ==========  COLORS  ========== */\n/**\n*\n* Material design color palettes.\n* @see http://www.google.com/design/spec/style/color.html\n*\n**/\n/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/* ==========  Color Palettes  ========== */\n/* colors.scss */\n/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/* ==========  IMAGES  ========== */\n/* ==========  Color & Themes  ========== */\n/* ==========  Typography  ========== */\n/* ==========  Components  ========== */\n/* ==========  Standard Buttons  ========== */\n/* ==========  Icon Toggles  ========== */\n/* ==========  Radio Buttons  ========== */\n/* ==========  Ripple effect  ========== */\n/* ==========  Layout  ========== */\n/* ==========  Content Tabs  ========== */\n/* ==========  Checkboxes  ========== */\n/* ==========  Switches  ========== */\n/* ==========  Spinner  ========== */\n/* ==========  Text fields  ========== */\n/* ==========  Card  ========== */\n/* ==========  Sliders ========== */\n/* ========== Progress ========== */\n/* ==========  List ========== */\n/* ==========  Item ========== */\n/* ==========  Dropdown menu ========== */\n/* ==========  Tooltips  ========== */\n/* ==========  Footer  ========== */\n/* TEXTFIELD */\n/* SWITCH */\n/* SPINNER */\n/* RADIO */\n/* MENU */\n/* LIST */\n/* LAYOUT */\n/* ICON TOGGLE */\n/* FOOTER */\n/*mega-footer*/\n/*mini-footer*/\n/* CHECKBOX */\n/* CARD */\n/* Card dimensions */\n/* Cover image */\n/* BUTTON */\n/**\n *\n * Dimensions\n *\n */\n/* ANIMATION */\n/* PROGRESS */\n/* BADGE */\n/* SHADOWS */\n/* GRID */\n/* DATA TABLE */\n/* DIALOG */\n/* SNACKBAR */\n/* TOOLTIP */\n/* CHIP */\n/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/* Typography */\n/* Shadows */\n/* Animations */\n/* Dialog */\n/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/* ==========  Color Palettes  ========== */\n/* colors.scss */\n/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/* ==========  Color Palettes  ========== */\n/* colors.scss */\n/* ==========  IMAGES  ========== */\n/* ==========  Color & Themes  ========== */\n.text-color--smoke {\n  color: #666; }\n.color--gray {\n  background-color: #444 !important; }\n.color--dark-gray {\n  background-color: #333; }\n.color--smooth-gray {\n  background-color: #999 !important; }\n.text-color--smooth-gray {\n  color: #999 !important; }\n.color--red {\n  background-color: #f44336 !important; }\n.color-text--red {\n  color: #f44336 !important; }\n.color--orange {\n  background-color: #ffc107 !important; }\n.color-text--orange {\n  color: #ffc107 !important; }\n.color--amber {\n  background-color: #ff9800 !important; }\n.color-text--amber {\n  color: #ff9800 !important; }\n.color--green {\n  background-color: #00d45a !important; }\n.color-text--green {\n  color: #00d45a !important; }\n.color--light-blue {\n  background-color: #03a9f4 !important; }\n.color-text--light-blue {\n  color: #03a9f4 !important; }\n.color--purple {\n  background-color: #7726d3 !important; }\n.color-text--purple {\n  color: #7726d3 !important; }\n.color--teal {\n  background-color: #00bcd4 !important; }\n.color-text--teal {\n  color: #00bcd4 !important; }\n/* ==========  Typography  ========== */\n/* ==========  Components  ========== */\n/* ==========  Standard Buttons  ========== */\n/* ==========  Icon Toggles  ========== */\n/* ==========  Radio Buttons  ========== */\n/* ==========  Ripple effect  ========== */\n/* ==========  Layout  ========== */\n/* ==========  Content Tabs  ========== */\n/* ==========  Checkboxes  ========== */\n/* ==========  Switches  ========== */\n/* ==========  Spinner  ========== */\n/* ==========  Text fields  ========== */\n/* ==========  Card  ========== */\n/* ==========  Sliders ========== */\n/* ========== Progress ========== */\n/* ==========  List ========== */\n/* ==========  Item ========== */\n/* ==========  Dropdown menu ========== */\n/* ==========  Tooltips  ========== */\n/* ==========  Footer  ========== */\n/* TEXTFIELD */\n/* SWITCH */\n/* SPINNER */\n/* RADIO */\n/* MENU */\n/* LIST */\n/* LAYOUT */\n/* ICON */\n/* ICON TOGGLE */\n/* FOOTER */\n/* mega-footer */\n/* mini-footer */\n/* CHECKBOX */\n/* CARD */\n/* Card dimensions */\n/* Cover image */\n/* BUTTON */\n/* ANIMATION */\n/* PROGRESS */\n/* BADGE */\n/* SHADOWS */\n/* GRID */\n/* DATA TABLE */\n/* TOOLTIP */\n/* WIDGETS & COMPONENTS */\n/* Trending */\n/* label */\n/* charts */\n/* employer form */\n/* row */\n/* scroll */\n.ui-typography {\n  font-family: \"Roboto\", sans-serif; }\n.ui-typography p {\n    font-weight: 300; }\n.ui-typography ul,\n  .ui-typography ol,\n  .ui-typography dd {\n    font-weight: 300; }\n.ui-typography ul,\n  .ui-typography ol {\n    padding-left: 16px;\n    margin: 0; }\n.ui-typography .mdl-card {\n    height: auto;\n    width: 100%; }\n.ui-typography .mdl-card:not(:last-child) {\n      margin-bottom: 20px; }\n.ui-typography .mdl-card:first-child p {\n      font-size: 30px;\n      line-height: 1.5; }\n.ui-typography .mdl-card:first-child p:nth-of-type(1) {\n        font-weight: 200;\n        margin-top: 20px; }\n.ui-typography .mdl-card:first-child p:nth-of-type(2) {\n        font-weight: 300; }\n.ui-typography .mdl-card:first-child p:nth-of-type(3) {\n        font-weight: 400; }\n.ui-typography .mdl-card:first-child p:nth-of-type(4) {\n        font-weight: 500; }\n.ui-typography .mdl-card:first-child p:nth-of-type(5) {\n        font-weight: 600; }\n.ui-typography .mdl-card .mdl-card__supporting-text div:nth-child(2) {\n      text-align: center; }\n.ui-typography .mdl-card .mdl-card__supporting-text div:nth-child(3) {\n      text-align: right; }\n.ui-typography .mdl-grid + .mdl-grid .mdl-cell:nth-child(3) .mdl-card__supporting-text > ul {\n    list-style: none;\n    padding-left: 0; }\n.ui-typography .mdl-grid + .mdl-grid .mdl-cell:nth-child(4) .mdl-card__supporting-text > ol li {\n    float: left;\n    margin-right: 25px; }\n.ui-typography .text-color--gray + h5 {\n    margin-top: 14px; }\n.ui-typography dd {\n    margin-left: 0; }\n.ui-typography dd + dt {\n      margin-top: 10px; }\n.ui-typography h1 {\n    margin-top: 0; }\n"

/***/ }),

/***/ "./src/app/pages/ui/typography/typography.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/ui/typography/typography.component.ts ***!
  \*************************************************************/
/*! exports provided: TypographyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TypographyComponent", function() { return TypographyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var theme_components_upgradable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! theme/components/upgradable */ "./src/theme/components/upgradable/index.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TypographyComponent = /** @class */ (function (_super) {
    __extends(TypographyComponent, _super);
    function TypographyComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.mdlGrid = true;
        _this.uiTypography = true;
        _this.mdlGridNoSpacing = true;
        return _this;
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])('class.mdl-grid'),
        __metadata("design:type", Object)
    ], TypographyComponent.prototype, "mdlGrid", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])('class.ui-typography'),
        __metadata("design:type", Object)
    ], TypographyComponent.prototype, "uiTypography", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])('class.mdl-grid--no-spacing'),
        __metadata("design:type", Object)
    ], TypographyComponent.prototype, "mdlGridNoSpacing", void 0);
    TypographyComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-typography',
            template: __webpack_require__(/*! ./typography.component.html */ "./src/app/pages/ui/typography/typography.component.html"),
            styles: [__webpack_require__(/*! ./typography.component.scss */ "./src/app/pages/ui/typography/typography.component.scss")],
        })
    ], TypographyComponent);
    return TypographyComponent;
}(theme_components_upgradable__WEBPACK_IMPORTED_MODULE_1__["UpgradableComponent"]));



/***/ }),

/***/ "./src/app/pages/ui/ui-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/ui/ui-routing.module.ts ***!
  \***********************************************/
/*! exports provided: UIRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UIRoutingModule", function() { return UIRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var app_layouts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/layouts */ "./src/app/layouts/index.ts");
/* harmony import */ var app_layouts_common_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/layouts/common-layout */ "./src/app/layouts/common-layout/index.ts");
/* harmony import */ var _buttons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./buttons */ "./src/app/pages/ui/buttons/index.ts");
/* harmony import */ var _cards__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./cards */ "./src/app/pages/ui/cards/index.ts");
/* harmony import */ var _colors__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./colors */ "./src/app/pages/ui/colors/index.ts");
/* harmony import */ var _forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./forms */ "./src/app/pages/ui/forms/index.ts");
/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./icons */ "./src/app/pages/ui/icons/index.ts");
/* harmony import */ var _right_sidebar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./right-sidebar */ "./src/app/pages/ui/right-sidebar/index.ts");
/* harmony import */ var _tables__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./tables */ "./src/app/pages/ui/tables/index.ts");
/* harmony import */ var _typography__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./typography */ "./src/app/pages/ui/typography/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var UIRoutingModule = /** @class */ (function () {
    function UIRoutingModule() {
    }
    UIRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild([
                    {
                        path: '',
                        component: app_layouts_common_layout__WEBPACK_IMPORTED_MODULE_3__["CommonLayoutComponent"],
                        children: [
                            { path: 'buttons', component: _buttons__WEBPACK_IMPORTED_MODULE_4__["ButtonsComponent"], pathMatch: 'full' },
                            { path: 'cards', component: _cards__WEBPACK_IMPORTED_MODULE_5__["CardsComponent"], pathMatch: 'full' },
                            { path: 'colors', component: _colors__WEBPACK_IMPORTED_MODULE_6__["ColorsComponent"], pathMatch: 'full' },
                            { path: 'forms', component: _forms__WEBPACK_IMPORTED_MODULE_7__["FormsComponent"], pathMatch: 'full' },
                            { path: 'icons', component: _icons__WEBPACK_IMPORTED_MODULE_8__["IconsComponent"], pathMatch: 'full' },
                            { path: 'typography', component: _typography__WEBPACK_IMPORTED_MODULE_11__["TypographyComponent"], pathMatch: 'full' },
                            { path: 'tables', component: _tables__WEBPACK_IMPORTED_MODULE_10__["TablesComponent"], pathMatch: 'full' },
                            { path: 'right-sidebar', component: _right_sidebar__WEBPACK_IMPORTED_MODULE_9__["RightSidebarComponent"], pathMatch: 'full' },
                        ],
                    },
                ]),
                app_layouts__WEBPACK_IMPORTED_MODULE_2__["LayoutsModule"],
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        })
    ], UIRoutingModule);
    return UIRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/ui/ui.module.ts":
/*!***************************************!*\
  !*** ./src/app/pages/ui/ui.module.ts ***!
  \***************************************/
/*! exports provided: UIModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UIModule", function() { return UIModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var material_angular_select__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! material-angular-select */ "./node_modules/material-angular-select/fesm5/material-angular-select.js");
/* harmony import */ var theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! theme */ "./src/theme/index.ts");
/* harmony import */ var _buttons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./buttons */ "./src/app/pages/ui/buttons/index.ts");
/* harmony import */ var _cards__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./cards */ "./src/app/pages/ui/cards/index.ts");
/* harmony import */ var _colors__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./colors */ "./src/app/pages/ui/colors/index.ts");
/* harmony import */ var _forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./forms */ "./src/app/pages/ui/forms/index.ts");
/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./icons */ "./src/app/pages/ui/icons/index.ts");
/* harmony import */ var _right_sidebar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./right-sidebar */ "./src/app/pages/ui/right-sidebar/index.ts");
/* harmony import */ var _tables__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./tables */ "./src/app/pages/ui/tables/index.ts");
/* harmony import */ var _typography__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./typography */ "./src/app/pages/ui/typography/index.ts");
/* harmony import */ var _ui_routing_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./ui-routing.module */ "./src/app/pages/ui/ui-routing.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var UIModule = /** @class */ (function () {
    function UIModule() {
    }
    UIModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                _ui_routing_module__WEBPACK_IMPORTED_MODULE_12__["UIRoutingModule"],
                theme__WEBPACK_IMPORTED_MODULE_3__["ThemeModule"],
                material_angular_select__WEBPACK_IMPORTED_MODULE_2__["MaterialAngularSelectModule"],
                _right_sidebar__WEBPACK_IMPORTED_MODULE_9__["RightSidebarModule"],
            ],
            declarations: [
                _buttons__WEBPACK_IMPORTED_MODULE_4__["ButtonsComponent"],
                _cards__WEBPACK_IMPORTED_MODULE_5__["CardsComponent"],
                _colors__WEBPACK_IMPORTED_MODULE_6__["ColorsComponent"],
                _forms__WEBPACK_IMPORTED_MODULE_7__["FormsComponent"],
                _icons__WEBPACK_IMPORTED_MODULE_8__["IconsComponent"],
                _typography__WEBPACK_IMPORTED_MODULE_11__["TypographyComponent"],
                _tables__WEBPACK_IMPORTED_MODULE_10__["TablesComponent"],
            ],
            providers: [
                _tables__WEBPACK_IMPORTED_MODULE_10__["TablesService"],
            ],
        })
    ], UIModule);
    return UIModule;
}());



/***/ })

}]);
//# sourceMappingURL=pages-ui-ui-module.js.map