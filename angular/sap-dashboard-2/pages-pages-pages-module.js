(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-pages-pages-module"],{

/***/ "./src/app/components/blank-layout-card/blank-layout-card.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/components/blank-layout-card/blank-layout-card.component.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/*------------------------------------*\\\n    $CONTENTS\n\\*------------------------------------*/\n/**\n * STYLE GUIDE VARIABLES------------------Declarations of Sass variables\n * -----Typography\n * -----Colors\n * -----Textfield\n * -----Switch\n * -----Spinner\n * -----Radio\n * -----Menu\n * -----List\n * -----Layout\n * -----Icon toggles\n * -----Footer\n * -----Column\n * -----Checkbox\n * -----Card\n * -----Button\n * -----Animation\n * -----Progress\n * -----Badge\n * -----Shadows\n * -----Grid\n * -----Data table\n * -----Dialog\n * -----Snackbar\n * -----Tooltip\n * -----Chip\n *\n * Even though all variables have the `!default` directive, most of them\n * should not be changed as they are dependent one another. This can cause\n * visual distortions (like alignment issues) that are hard to track down\n * and fix.\n */\n/* ==========  TYPOGRAPHY  ========== */\n/* We're splitting fonts into \"preferred\" and \"performance\" in order to optimize\n   page loading. For important text, such as the body, we want it to load\n   immediately and not wait for the web font load, whereas for other sections,\n   such as headers and titles, we're OK with things taking a bit longer to load.\n   We do have some optional classes and parameters in the mixins, in case you\n   definitely want to make sure you're using the preferred font and don't mind\n   the performance hit.\n   We should be able to improve on this once CSS Font Loading L3 becomes more\n   widely available.\n*/\n/* ==========  COLORS  ========== */\n/**\n*\n* Material design color palettes.\n* @see http://www.google.com/design/spec/style/color.html\n*\n**/\n/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/* ==========  Color Palettes  ========== */\n/* colors.scss */\n/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/* ==========  IMAGES  ========== */\n/* ==========  Color & Themes  ========== */\n/* ==========  Typography  ========== */\n/* ==========  Components  ========== */\n/* ==========  Standard Buttons  ========== */\n/* ==========  Icon Toggles  ========== */\n/* ==========  Radio Buttons  ========== */\n/* ==========  Ripple effect  ========== */\n/* ==========  Layout  ========== */\n/* ==========  Content Tabs  ========== */\n/* ==========  Checkboxes  ========== */\n/* ==========  Switches  ========== */\n/* ==========  Spinner  ========== */\n/* ==========  Text fields  ========== */\n/* ==========  Card  ========== */\n/* ==========  Sliders ========== */\n/* ========== Progress ========== */\n/* ==========  List ========== */\n/* ==========  Item ========== */\n/* ==========  Dropdown menu ========== */\n/* ==========  Tooltips  ========== */\n/* ==========  Footer  ========== */\n/* TEXTFIELD */\n/* SWITCH */\n/* SPINNER */\n/* RADIO */\n/* MENU */\n/* LIST */\n/* LAYOUT */\n/* ICON TOGGLE */\n/* FOOTER */\n/*mega-footer*/\n/*mini-footer*/\n/* CHECKBOX */\n/* CARD */\n/* Card dimensions */\n/* Cover image */\n/* BUTTON */\n/**\n *\n * Dimensions\n *\n */\n/* ANIMATION */\n/* PROGRESS */\n/* BADGE */\n/* SHADOWS */\n/* GRID */\n/* DATA TABLE */\n/* DIALOG */\n/* SNACKBAR */\n/* TOOLTIP */\n/* CHIP */\n/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/* Typography */\n/* Shadows */\n/* Animations */\n/* Dialog */\n/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/* ==========  Color Palettes  ========== */\n/* colors.scss */\n/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/* ==========  Color Palettes  ========== */\n/* colors.scss */\n/* ==========  IMAGES  ========== */\n/* ==========  Color & Themes  ========== */\n.text-color--smoke {\n  color: #666; }\n.color--gray {\n  background-color: #444 !important; }\n.color--dark-gray {\n  background-color: #333; }\n.color--smooth-gray {\n  background-color: #999 !important; }\n.text-color--smooth-gray {\n  color: #999 !important; }\n.color--red {\n  background-color: #f44336 !important; }\n.color-text--red {\n  color: #f44336 !important; }\n.color--orange {\n  background-color: #ffc107 !important; }\n.color-text--orange {\n  color: #ffc107 !important; }\n.color--amber {\n  background-color: #ff9800 !important; }\n.color-text--amber {\n  color: #ff9800 !important; }\n.color--green {\n  background-color: #00d45a !important; }\n.color-text--green {\n  color: #00d45a !important; }\n.color--light-blue {\n  background-color: #03a9f4 !important; }\n.color-text--light-blue {\n  color: #03a9f4 !important; }\n.color--purple {\n  background-color: #7726d3 !important; }\n.color-text--purple {\n  color: #7726d3 !important; }\n.color--teal {\n  background-color: #00bcd4 !important; }\n.color-text--teal {\n  color: #00bcd4 !important; }\n/* ==========  Typography  ========== */\n/* ==========  Components  ========== */\n/* ==========  Standard Buttons  ========== */\n/* ==========  Icon Toggles  ========== */\n/* ==========  Radio Buttons  ========== */\n/* ==========  Ripple effect  ========== */\n/* ==========  Layout  ========== */\n/* ==========  Content Tabs  ========== */\n/* ==========  Checkboxes  ========== */\n/* ==========  Switches  ========== */\n/* ==========  Spinner  ========== */\n/* ==========  Text fields  ========== */\n/* ==========  Card  ========== */\n/* ==========  Sliders ========== */\n/* ========== Progress ========== */\n/* ==========  List ========== */\n/* ==========  Item ========== */\n/* ==========  Dropdown menu ========== */\n/* ==========  Tooltips  ========== */\n/* ==========  Footer  ========== */\n/* TEXTFIELD */\n/* SWITCH */\n/* SPINNER */\n/* RADIO */\n/* MENU */\n/* LIST */\n/* LAYOUT */\n/* ICON */\n/* ICON TOGGLE */\n/* FOOTER */\n/* mega-footer */\n/* mini-footer */\n/* CHECKBOX */\n/* CARD */\n/* Card dimensions */\n/* Cover image */\n/* BUTTON */\n/* ANIMATION */\n/* PROGRESS */\n/* BADGE */\n/* SHADOWS */\n/* GRID */\n/* DATA TABLE */\n/* TOOLTIP */\n/* WIDGETS & COMPONENTS */\n/* Trending */\n/* label */\n/* charts */\n/* employer form */\n/* row */\n/* scroll */\n.blank-layout-card {\n  margin: auto;\n  font-family: Roboto, Helvetica, sans-serif;\n  font-size: 1rem; }\n.blank-layout-card .mdl-button {\n    font-weight: 500; }\n.blank-layout-card .mdl-card__blank-layout-card.mdl-card {\n    max-width: 450px;\n    margin: auto; }\n.blank-layout-card .mdl-card__blank-layout-card.mdl-card .mdl-card__supporting-text {\n      min-height: inherit;\n      width: 100%;\n      padding: 32px 24px;\n      box-sizing: border-box; }\n.blank-layout-card .mdl-card__blank-layout-card.mdl-card .mdl-card__supporting-text .mdl-card__title-text {\n        font-size: 17px;\n        font-weight: bold; }\n.blank-layout-card .mdl-card__blank-layout-card.mdl-card .mdl-card__supporting-text .blank-layout-card-name {\n        font-size: 24px;\n        display: block;\n        padding: 0 0 8px 0; }\n.blank-layout-card .mdl-card__blank-layout-card.mdl-card .mdl-card__supporting-text .blank-layout-card-link {\n        padding: 12px 0; }\n.blank-layout-card .mdl-card__blank-layout-card.mdl-card .mdl-card__supporting-text .blank-layout-card-link,\n      .blank-layout-card .mdl-card__blank-layout-card.mdl-card .mdl-card__supporting-text .blank-layout-card-link * {\n        display: inline-block;\n        font-size: 1rem;\n        font-weight: inherit;\n        color: #ddd; }\n.blank-layout-card .mdl-card__blank-layout-card.mdl-card .mdl-card__supporting-text .underlined {\n        display: inline-block;\n        border-bottom: 1px solid #03a9f4; }\n.blank-layout-card .mdl-card__blank-layout-card.mdl-card .mdl-card__supporting-text .checkbox--inline {\n        display: inline;\n        padding-top: 4px;\n        padding-left: 35px; }\n.blank-layout-card .mdl-card__blank-layout-card.mdl-card .mdl-card__supporting-text .submit-cell {\n        display: flex; }\n.blank-layout-card .mdl-card__blank-layout-card.mdl-card .mdl-card__supporting-text .text--huge {\n        font-size: 120px;\n        font-weight: bold;\n        display: inline-block;\n        padding: 100px 0 40px 0; }\n.blank-layout-card .mdl-card__blank-layout-card.mdl-card .mdl-card__supporting-text .text--sorry {\n        font-size: 28px;\n        font-weight: 300; }\n.blank-layout-card .mdl-card__blank-layout-card.mdl-card .mdl-card__supporting-text .alignment--bottom-right {\n        position: absolute;\n        bottom: 39px;\n        right: 46px; }\n"

/***/ }),

/***/ "./src/app/pages/pages/error/error.component.html":
/*!********************************************************!*\
  !*** ./src/app/pages/pages/error/error.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"mdl-card mdl-card__blank-layout-card mdl-shadow--2dp\">\r\n  <div class=\"mdl-card__supporting-text color--dark-gray\">\r\n    <div class=\"mdl-grid\">\r\n      <div class=\"mdl-cell mdl-cell--12-col mdl-cell--4-col-phone\">\r\n        <span class=\"mdl-card__title-text text-color--smooth-gray\">DARKBOARD</span>\r\n      </div>\r\n      <div class=\"mdl-cell mdl-cell--12-col mdl-cell--4-col-phone\">\r\n        <span class=\"text--huge color-text--light-blue\">404</span>\r\n      </div>\r\n      <div class=\"mdl-cell mdl-cell--12-col mdl-cell--4-col-phone\">\r\n        <span class=\"text--sorry text-color--white\">Sorry, but there's nothing here</span>\r\n      </div>\r\n      <div class=\"mdl-cell mdl-cell--12-col mdl-cell--4-col-phone\">\r\n        <a routerLink=\"/\" class=\"mdl-button mdl-js-button color-text--light-blue pull-right\">\r\n          Go Back\r\n        </a>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/pages/pages/error/error.component.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/pages/error/error.component.ts ***!
  \******************************************************/
/*! exports provided: ErrorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorComponent", function() { return ErrorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var app_components_blank_layout_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/components/blank-layout-card */ "./src/app/components/blank-layout-card/index.ts");
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


var ErrorComponent = /** @class */ (function (_super) {
    __extends(ErrorComponent, _super);
    function ErrorComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ErrorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-error',
            styles: [__webpack_require__(/*! ../../../components/blank-layout-card/blank-layout-card.component.scss */ "./src/app/components/blank-layout-card/blank-layout-card.component.scss")],
            template: __webpack_require__(/*! ./error.component.html */ "./src/app/pages/pages/error/error.component.html"),
        })
    ], ErrorComponent);
    return ErrorComponent;
}(app_components_blank_layout_card__WEBPACK_IMPORTED_MODULE_1__["BlankLayoutCardComponent"]));



/***/ }),

/***/ "./src/app/pages/pages/error/index.ts":
/*!********************************************!*\
  !*** ./src/app/pages/pages/error/index.ts ***!
  \********************************************/
/*! exports provided: ErrorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _error_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./error.component */ "./src/app/pages/pages/error/error.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ErrorComponent", function() { return _error_component__WEBPACK_IMPORTED_MODULE_0__["ErrorComponent"]; });




/***/ }),

/***/ "./src/app/pages/pages/forgot-password/forgot-password.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/pages/pages/forgot-password/forgot-password.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"mdl-card mdl-card__blank-layout-card mdl-shadow--2dp\">\r\n  <div class=\"mdl-card__supporting-text color--dark-gray\">\r\n    <div class=\"mdl-grid\">\r\n      <div class=\"mdl-cell mdl-cell--12-col mdl-cell--4-col-phone\">\r\n        <span class=\"mdl-card__title-text text-color--smooth-gray\">DARKBOARD</span>\r\n      </div>\r\n      <div class=\"mdl-cell mdl-cell--12-col mdl-cell--4-col-phone\">\r\n        <span class=\"blank-layout-card-name text-color--white\">Forgot password?</span>\r\n        <span class=\"blank-layout-card-secondary-text text-color--smoke\">Enter your email below to recieve your password</span>\r\n      </div>\r\n      <div class=\"mdl-cell mdl-cell--12-col mdl-cell--4-col-phone\">\r\n        <div class=\"mdl-textfield mdl-js-textfield mdl-textfield--floating-label full-size\">\r\n          <input class=\"mdl-textfield__input\" type=\"text\" id=\"e-mail\">\r\n          <label class=\"mdl-textfield__label\" for=\"e-mail\">Email</label>\r\n        </div>\r\n      </div>\r\n      <div class=\"mdl-cell mdl-cell--12-col mdl-cell--4-col-phone submit-cell\">\r\n        <div class=\"mdl-layout-spacer\"></div>\r\n        <a routerLink=\"/app/dashboard\">\r\n          <button class=\"mdl-button mdl-js-button mdl-button--raised color--light-blue\">\r\n            SEND PASSWORD\r\n          </button>\r\n        </a>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/pages/pages/forgot-password/forgot-password.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/pages/pages/forgot-password/forgot-password.component.ts ***!
  \**************************************************************************/
/*! exports provided: ForgotPasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPasswordComponent", function() { return ForgotPasswordComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var app_components_blank_layout_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/components/blank-layout-card */ "./src/app/components/blank-layout-card/index.ts");
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


var ForgotPasswordComponent = /** @class */ (function (_super) {
    __extends(ForgotPasswordComponent, _super);
    function ForgotPasswordComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ForgotPasswordComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-forgot-password',
            styles: [__webpack_require__(/*! ../../../components/blank-layout-card/blank-layout-card.component.scss */ "./src/app/components/blank-layout-card/blank-layout-card.component.scss")],
            template: __webpack_require__(/*! ./forgot-password.component.html */ "./src/app/pages/pages/forgot-password/forgot-password.component.html"),
        })
    ], ForgotPasswordComponent);
    return ForgotPasswordComponent;
}(app_components_blank_layout_card__WEBPACK_IMPORTED_MODULE_1__["BlankLayoutCardComponent"]));



/***/ }),

/***/ "./src/app/pages/pages/forgot-password/index.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/pages/forgot-password/index.ts ***!
  \******************************************************/
/*! exports provided: ForgotPasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _forgot_password_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./forgot-password.component */ "./src/app/pages/pages/forgot-password/forgot-password.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ForgotPasswordComponent", function() { return _forgot_password_component__WEBPACK_IMPORTED_MODULE_0__["ForgotPasswordComponent"]; });




/***/ }),

/***/ "./src/app/pages/pages/login/index.ts":
/*!********************************************!*\
  !*** ./src/app/pages/pages/login/index.ts ***!
  \********************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _login_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.component */ "./src/app/pages/pages/login/login.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return _login_component__WEBPACK_IMPORTED_MODULE_0__["LoginComponent"]; });




/***/ }),

/***/ "./src/app/pages/pages/login/login.component.html":
/*!********************************************************!*\
  !*** ./src/app/pages/pages/login/login.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"mdl-card mdl-card__blank-layout-card mdl-shadow--2dp\">\r\n  <div class=\"mdl-card__supporting-text color--dark-gray\">\r\n    <div class=\"mdl-grid\">\r\n      <div class=\"mdl-cell mdl-cell--12-col mdl-cell--4-col-phone\">\r\n        <span class=\"mdl-card__title-text text-color--smooth-gray\">DARKBOARD</span>\r\n      </div>\r\n      <div class=\"mdl-cell mdl-cell--12-col mdl-cell--4-col-phone\">\r\n        <span class=\"blank-layout-card-name text-color--white\">Sign in</span>\r\n        <span class=\"blank-layout-card-secondary-text text-color--smoke\">Enter fields to sign in to DARKBOARD</span>\r\n      </div>\r\n      <form class=\"login-form\" [formGroup]=\"loginForm\" (submit)=\"login()\" autocomplete=\"off\" novalidate>\r\n        <div class=\"mdl-cell mdl-cell--12-col mdl-cell--4-col-phone\">\r\n          <div class=\"mdl-textfield mdl-js-textfield mdl-textfield--floating-label full-size\"\r\n               [class.is-invalid]=\"email.invalid && (email.dirty || email.touched)\"\r\n               [class.is-valid]=\"email.valid && (email.dirty || email.touched)\">\r\n            <input formControlName=\"email\"\r\n                   pattern=\"{{emailPattern}}\"\r\n                   (change)=\"onInputChange($event)\"\r\n                   class=\"mdl-textfield__input\" type=\"text\" id=\"email\">\r\n            <label class=\"mdl-textfield__label\" for=\"email\">Email</label>\r\n\r\n            <div *ngIf=\"email.invalid && (email.dirty || email.touched)\">\r\n              <span *ngIf=\"email.errors.required\" class=\"mdl-textfield__error\">\r\n                Email is required. <span class=\"color-text--orange\"> Please, write any valid email.</span>\r\n              </span>\r\n              <span *ngIf=\"email.errors.pattern\" class=\"mdl-textfield__error\">\r\n                Email is invalid.\r\n              </span>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"mdl-textfield mdl-js-textfield mdl-textfield--floating-label full-size\"\r\n               [class.is-invalid]=\"password.invalid && (password.dirty || password.touched)\"\r\n               [class.is-valid]=\"password.valid && (password.dirty || password.touched)\"\r\n               id=\"forPass\">\r\n            <input formControlName=\"password\"\r\n                   (change)=\"onInputChange($event)\"\r\n                   class=\"mdl-textfield__input\" type=\"password\" id=\"password\">\r\n            <label class=\"mdl-textfield__label\" for=\"password\">Password</label>\r\n            <div *ngIf=\"password.invalid && (password.dirty || password.touched)\">\r\n              <span *ngIf=\"password.errors.required\" class=\"mdl-textfield__error\">\r\n                Password is required. <span class=\"color-text--orange\"> Please, write any password.</span>\r\n              </span>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"full-size color-text--red\" *ngIf=\"error\"> {{ error }}</div>\r\n\r\n          <a routerLink=\"/pages/forgot-password\" class=\"blank-layout-card-link\">Forgot password?</a>\r\n        </div>\r\n        <div class=\"mdl-cell mdl-cell--12-col mdl-cell--4-col-phone submit-cell\">\r\n          <a routerLink=\"/pages/sign-up\" class=\"blank-layout-card-link\">Don't have account?</a>\r\n          <div class=\"mdl-layout-spacer\"></div>\r\n          <button class=\"mdl-button mdl-js-button mdl-button--raised color--light-blue\"\r\n                  type=\"submit\" [disabled]=\"loginForm.invalid\">\r\n            SIGN IN\r\n          </button>\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/pages/pages/login/login.component.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/pages/login/login.component.ts ***!
  \******************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @services/ */ "./src/app/services/index.ts");
/* harmony import */ var app_components_blank_layout_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/components/blank-layout-card */ "./src/app/components/blank-layout-card/index.ts");
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





var LoginComponent = /** @class */ (function (_super) {
    __extends(LoginComponent, _super);
    function LoginComponent(authService, fb, router) {
        var _this = _super.call(this) || this;
        _this.authService = authService;
        _this.fb = fb;
        _this.router = router;
        _this.emailPattern = '^([a-zA-Z0-9_\\-\\.]+)@([a-zA-Z0-9_\\-\\.]+)\\.([a-zA-Z]{2,5})$';
        _this.loginForm = _this.fb.group({
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(_this.emailPattern),
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(20),
            ]),
        });
        _this.email = _this.loginForm.get('email');
        _this.password = _this.loginForm.get('password');
        return _this;
    }
    LoginComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.logout();
        this.loginForm.valueChanges.subscribe(function () {
            _this.error = null;
        });
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.error = null;
        if (this.loginForm.valid) {
            this.authService.login(this.loginForm.getRawValue())
                .subscribe(function (res) { return _this.router.navigate(['/app/dashboard']); }, function (error) { return _this.error = error.message; });
        }
    };
    LoginComponent.prototype.onInputChange = function (event) {
        event.target.required = true;
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            styles: [__webpack_require__(/*! ../../../components/blank-layout-card/blank-layout-card.component.scss */ "./src/app/components/blank-layout-card/blank-layout-card.component.scss")],
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/pages/pages/login/login.component.html"),
        }),
        __metadata("design:paramtypes", [_services___WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}(app_components_blank_layout_card__WEBPACK_IMPORTED_MODULE_4__["BlankLayoutCardComponent"]));



/***/ }),

/***/ "./src/app/pages/pages/pages-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/pages/pages-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: PagesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagesRoutingModule", function() { return PagesRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var app_layouts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/layouts */ "./src/app/layouts/index.ts");
/* harmony import */ var app_layouts_blank_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/layouts/blank-layout */ "./src/app/layouts/blank-layout/index.ts");
/* harmony import */ var _error__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./error */ "./src/app/pages/pages/error/index.ts");
/* harmony import */ var _forgot_password__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./forgot-password */ "./src/app/pages/pages/forgot-password/index.ts");
/* harmony import */ var _login__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login */ "./src/app/pages/pages/login/index.ts");
/* harmony import */ var _sign_up__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./sign-up */ "./src/app/pages/pages/sign-up/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var PagesRoutingModule = /** @class */ (function () {
    function PagesRoutingModule() {
    }
    PagesRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild([
                    {
                        path: '',
                        component: app_layouts_blank_layout__WEBPACK_IMPORTED_MODULE_3__["BlankLayoutComponent"],
                        children: [
                            { path: '404', component: _error__WEBPACK_IMPORTED_MODULE_4__["ErrorComponent"], pathMatch: 'full' },
                            { path: 'login', component: _login__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"], pathMatch: 'full' },
                            { path: 'sign-up', component: _sign_up__WEBPACK_IMPORTED_MODULE_7__["SignUpComponent"], pathMatch: 'full' },
                            { path: 'forgot-password', component: _forgot_password__WEBPACK_IMPORTED_MODULE_5__["ForgotPasswordComponent"], pathMatch: 'full' },
                            { path: '**', redirectTo: '404' },
                        ],
                    },
                ]),
                app_layouts__WEBPACK_IMPORTED_MODULE_2__["LayoutsModule"],
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        })
    ], PagesRoutingModule);
    return PagesRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/pages/pages.module.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/pages/pages.module.ts ***!
  \*********************************************/
/*! exports provided: PagesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagesModule", function() { return PagesModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! theme */ "./src/theme/index.ts");
/* harmony import */ var _theme_directives_tooltip_tooltip_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../theme/directives/tooltip/tooltip.module */ "./src/theme/directives/tooltip/tooltip.module.ts");
/* harmony import */ var _error__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./error */ "./src/app/pages/pages/error/index.ts");
/* harmony import */ var _forgot_password__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./forgot-password */ "./src/app/pages/pages/forgot-password/index.ts");
/* harmony import */ var _login__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./login */ "./src/app/pages/pages/login/index.ts");
/* harmony import */ var _pages_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages-routing.module */ "./src/app/pages/pages/pages-routing.module.ts");
/* harmony import */ var _sign_up__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./sign-up */ "./src/app/pages/pages/sign-up/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var PagesModule = /** @class */ (function () {
    function PagesModule() {
    }
    PagesModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                theme__WEBPACK_IMPORTED_MODULE_3__["ThemeModule"],
                _pages_routing_module__WEBPACK_IMPORTED_MODULE_8__["PagesRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _theme_directives_tooltip_tooltip_module__WEBPACK_IMPORTED_MODULE_4__["TooltipModule"],
            ],
            declarations: [
                _error__WEBPACK_IMPORTED_MODULE_5__["ErrorComponent"],
                _login__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"],
                _sign_up__WEBPACK_IMPORTED_MODULE_9__["SignUpComponent"],
                _forgot_password__WEBPACK_IMPORTED_MODULE_6__["ForgotPasswordComponent"],
            ],
        })
    ], PagesModule);
    return PagesModule;
}());



/***/ }),

/***/ "./src/app/pages/pages/sign-up/index.ts":
/*!**********************************************!*\
  !*** ./src/app/pages/pages/sign-up/index.ts ***!
  \**********************************************/
/*! exports provided: SignUpComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sign_up_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sign-up.component */ "./src/app/pages/pages/sign-up/sign-up.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SignUpComponent", function() { return _sign_up_component__WEBPACK_IMPORTED_MODULE_0__["SignUpComponent"]; });




/***/ }),

/***/ "./src/app/pages/pages/sign-up/sign-up.component.html":
/*!************************************************************!*\
  !*** ./src/app/pages/pages/sign-up/sign-up.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"mdl-card mdl-card__blank-layout-card mdl-shadow--2dp\">\r\n  <div class=\"mdl-card__supporting-text color--dark-gray\">\r\n    <div class=\"mdl-grid\">\r\n      <div class=\"mdl-cell mdl-cell--12-col mdl-cell--4-col-phone\">\r\n        <span class=\"mdl-card__title-text text-color--smooth-gray\">DARKBOARD</span>\r\n      </div>\r\n      <div class=\"mdl-cell mdl-cell--12-col mdl-cell--4-col-phone\">\r\n        <span class=\"blank-layout-card-name text-color--white\">Sign up</span>\r\n      </div>\r\n      <form class=\"login-form\" [formGroup]=\"signupForm\" (submit)=\"login()\" novalidate autocomplete=\"off\">\r\n        <div class=\"mdl-cell mdl-cell--12-col mdl-cell--4-col-phone\">\r\n          <div class=\"mdl-textfield mdl-js-textfield mdl-textfield--floating-label full-size\"\r\n               [class.is-invalid]=\"username.invalid && (username.dirty || username.touched)\"\r\n               [class.is-valid]=\"username.valid && (username.dirty || username.touched)\">\r\n            <input formControlName=\"username\"\r\n                   (change)=\"onInputChange($event)\"\r\n                   class=\"mdl-textfield__input\" type=\"text\" id=\"username\">\r\n            <label class=\"mdl-textfield__label\" for=\"username\">Name</label>\r\n\r\n            <div *ngIf=\"username.invalid && (username.dirty || username.touched)\">\r\n              <span *ngIf=\"username.errors.required\" class=\"mdl-textfield__error\">\r\n                Name is required. <span class=\"color-text--orange\"> Please, write any name.</span>\r\n              </span>\r\n            </div>\r\n          </div>\r\n          <div class=\"mdl-textfield mdl-js-textfield mdl-textfield--floating-label full-size\"\r\n               [class.is-invalid]=\"password.invalid && (password.dirty || password.touched)\"\r\n               [class.is-valid]=\"password.valid && (password.dirty || password.touched)\" id=\"forRass\">\r\n            <input formControlName=\"password\"\r\n                   (change)=\"onInputChange($event)\"\r\n                   class=\"mdl-textfield__input\" type=\"password\" id=\"password\">\r\n            <label class=\"mdl-textfield__label\" for=\"password\">Password</label>\r\n            <div *ngIf=\"password.invalid && (password.dirty || password.touched)\">\r\n              <span *ngIf=\"password.errors.required\" class=\"mdl-textfield__error\">\r\n                Password is required. <span class=\"color-text--orange\"> Please, write any password.</span>\r\n              </span>\r\n            </div>\r\n          </div>\r\n          <div class=\"mdl-textfield mdl-js-textfield mdl-textfield--floating-label full-size\"\r\n               [class.is-invalid]=\"email.invalid && (email.dirty || email.touched)\"\r\n               [class.is-valid]=\"email.valid && (email.dirty || email.touched)\">\r\n            <input formControlName=\"email\"\r\n                   pattern=\"{{emailPattern}}\"\r\n                   (change)=\"onInputChange($event)\"\r\n                   class=\"mdl-textfield__input\" type=\"text\" id=\"email\">\r\n            <label class=\"mdl-textfield__label\" for=\"email\">Email</label>\r\n\r\n            <div *ngIf=\"email.invalid && (email.dirty || email.touched)\">\r\n              <span *ngIf=\"email.errors.required\" class=\"mdl-textfield__error\">\r\n                Email is required. <span class=\"color-text--orange\"> Please, write any valid email.</span>\r\n              </span>\r\n              <span *ngIf=\"email.errors.pattern\" class=\"mdl-textfield__error\">\r\n                Email is invalid.\r\n              </span>\r\n            </div>\r\n          </div>\r\n\r\n          <label baseCheckbox color=\"light-blue\" class=\"checkbox--inline\" inline></label>\r\n          <span class=\"blank-layout-card-link\">I agree all statements in <a href=\"#\"\r\n                                                                            class=\"underlined\">terms of service</a></span>\r\n        </div>\r\n        <div class=\"mdl-cell mdl-cell--12-col mdl-cell--4-col-phone submit-cell\">\r\n          <a routerLink=\"/pages/login\" class=\"blank-layout-card-link\">I have already signed up</a>\r\n          <div class=\"mdl-layout-spacer\"></div>\r\n          <button class=\"mdl-button mdl-js-button mdl-button--raised color--light-blue\"\r\n                  type=\"submit\" [disabled]=\"signupForm.invalid\">\r\n            SIGN UP\r\n          </button>\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/pages/pages/sign-up/sign-up.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/pages/pages/sign-up/sign-up.component.ts ***!
  \**********************************************************/
/*! exports provided: SignUpComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignUpComponent", function() { return SignUpComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @services/* */ "./src/app/services/index.ts");
/* harmony import */ var app_components_blank_layout_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/components/blank-layout-card */ "./src/app/components/blank-layout-card/index.ts");
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





var SignUpComponent = /** @class */ (function (_super) {
    __extends(SignUpComponent, _super);
    function SignUpComponent(authService, fb, router) {
        var _this = _super.call(this) || this;
        _this.authService = authService;
        _this.fb = fb;
        _this.router = router;
        _this.emailPattern = '^([a-zA-Z0-9_\\-\\.]+)@([a-zA-Z0-9_\\-\\.]+)\\.([a-zA-Z]{2,5})$';
        _this.signupForm = _this.fb.group({
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(_this.emailPattern),
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(20),
            ]),
            username: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(10)]),
        });
        _this.email = _this.signupForm.get('email');
        _this.password = _this.signupForm.get('password');
        _this.username = _this.signupForm.get('username');
        return _this;
    }
    SignUpComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.logout();
        this.signupForm.valueChanges.subscribe(function () {
            _this.error = null;
        });
    };
    SignUpComponent.prototype.login = function () {
        var _this = this;
        this.error = null;
        if (this.signupForm.valid) {
            this.authService.signup(this.signupForm.getRawValue())
                .subscribe(function (res) { return _this.router.navigate(['/app/dashboard']); }, function (error) { return _this.error = error.message; });
        }
    };
    SignUpComponent.prototype.onInputChange = function (event) {
        event.target.required = true;
    };
    SignUpComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sign-up',
            styles: [__webpack_require__(/*! ../../../components/blank-layout-card/blank-layout-card.component.scss */ "./src/app/components/blank-layout-card/blank-layout-card.component.scss")],
            template: __webpack_require__(/*! ./sign-up.component.html */ "./src/app/pages/pages/sign-up/sign-up.component.html"),
        }),
        __metadata("design:paramtypes", [_services___WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], SignUpComponent);
    return SignUpComponent;
}(app_components_blank_layout_card__WEBPACK_IMPORTED_MODULE_4__["BlankLayoutCardComponent"]));



/***/ })

}]);
//# sourceMappingURL=pages-pages-pages-module.js.map