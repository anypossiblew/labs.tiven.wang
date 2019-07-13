(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./pages/maps/maps.module": [
		"./src/app/pages/maps/maps.module.ts"
	],
	"./pages/pages/pages.module": [
		"./src/app/pages/pages/pages.module.ts",
		"pages-pages-pages-module"
	],
	"./pages/ui/ui.module": [
		"./src/app/pages/ui/ui.module.ts",
		"pages-ui-ui-module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error('Cannot find module "' + req + '".');
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		var module = __webpack_require__(ids[0]);
		return module;
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _layouts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./layouts */ "./src/app/layouts/index.ts");
/* harmony import */ var _layouts_common_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./layouts/common-layout */ "./src/app/layouts/common-layout/index.ts");
/* harmony import */ var _pages_charts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/charts */ "./src/app/pages/charts/index.ts");
/* harmony import */ var _pages_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/components */ "./src/app/pages/components/index.ts");
/* harmony import */ var _pages_dashboard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/dashboard */ "./src/app/pages/dashboard/index.ts");
/* harmony import */ var _pages_dashboard2__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/dashboard2 */ "./src/app/pages/dashboard2/index.ts");
/* harmony import */ var _pages_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/forms */ "./src/app/pages/forms/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot([
                    { path: '', redirectTo: 'app/dashboard', pathMatch: 'full' },
                    { path: 'app', component: _layouts_common_layout__WEBPACK_IMPORTED_MODULE_3__["CommonLayoutComponent"], children: [
                            { path: 'dashboard', component: _pages_dashboard__WEBPACK_IMPORTED_MODULE_6__["DashboardComponent"], pathMatch: 'full' },
                            { path: 'dashboard-custom', component: _pages_dashboard2__WEBPACK_IMPORTED_MODULE_7__["Dashboard2Component"], pathMatch: 'full' },
                            { path: 'forms', component: _pages_forms__WEBPACK_IMPORTED_MODULE_8__["FormsComponent"], pathMatch: 'full' },
                            { path: 'charts', component: _pages_charts__WEBPACK_IMPORTED_MODULE_4__["ChartsComponent"], pathMatch: 'full' },
                            { path: 'components', component: _pages_components__WEBPACK_IMPORTED_MODULE_5__["ComponentsComponent"], pathMatch: 'full' },
                            { path: '**', redirectTo: '/pages/404' },
                        ] },
                    { path: 'ui', loadChildren: './pages/ui/ui.module#UIModule' },
                    { path: 'maps', loadChildren: './pages/maps/maps.module#MapsModule' },
                    { path: 'pages', loadChildren: './pages/pages/pages.module#PagesModule' },
                    { path: '**', redirectTo: '/pages/404' },
                ], { useHash: true }),
                _layouts__WEBPACK_IMPORTED_MODULE_2__["LayoutsModule"],
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: "<router-outlet></router-outlet>",
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _services___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @services/* */ "./src/app/services/index.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _pages_charts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/charts */ "./src/app/pages/charts/index.ts");
/* harmony import */ var _pages_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/components */ "./src/app/pages/components/index.ts");
/* harmony import */ var _pages_dashboard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/dashboard */ "./src/app/pages/dashboard/index.ts");
/* harmony import */ var _pages_dashboard2__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/dashboard2 */ "./src/app/pages/dashboard2/index.ts");
/* harmony import */ var _pages_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/forms */ "./src/app/pages/forms/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _pages_components__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"],
                _pages_dashboard__WEBPACK_IMPORTED_MODULE_8__["DashboardModule"],
                _pages_dashboard2__WEBPACK_IMPORTED_MODULE_9__["Dashboard2Module"],
                _pages_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"],
                _pages_charts__WEBPACK_IMPORTED_MODULE_6__["ChartsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClientModule"],
            ],
            providers: [
                _services___WEBPACK_IMPORTED_MODULE_3__["AuthService"],
                {
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HTTP_INTERCEPTORS"],
                    useClass: _services___WEBPACK_IMPORTED_MODULE_3__["AuthInterceptor"],
                    multi: true,
                },
                {
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HTTP_INTERCEPTORS"],
                    useClass: _services___WEBPACK_IMPORTED_MODULE_3__["FakeBackendInterceptor"],
                    multi: true,
                },
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]],
            schemas: [
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"],
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["NO_ERRORS_SCHEMA"]
            ]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/blank-layout-card/blank-layout-card.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/components/blank-layout-card/blank-layout-card.component.ts ***!
  \*****************************************************************************/
/*! exports provided: BlankLayoutCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlankLayoutCardComponent", function() { return BlankLayoutCardComponent; });
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


var BlankLayoutCardComponent = /** @class */ (function (_super) {
    __extends(BlankLayoutCardComponent, _super);
    function BlankLayoutCardComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.blankLayoutCard = true;
        return _this;
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])('class.blank-layout-card'),
        __metadata("design:type", Object)
    ], BlankLayoutCardComponent.prototype, "blankLayoutCard", void 0);
    BlankLayoutCardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: '',
        })
    ], BlankLayoutCardComponent);
    return BlankLayoutCardComponent;
}(theme_components_upgradable__WEBPACK_IMPORTED_MODULE_1__["UpgradableComponent"]));



/***/ }),

/***/ "./src/app/components/blank-layout-card/index.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/blank-layout-card/index.ts ***!
  \*******************************************************/
/*! exports provided: BlankLayoutCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _blank_layout_card_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./blank-layout-card.component */ "./src/app/components/blank-layout-card/blank-layout-card.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BlankLayoutCardComponent", function() { return _blank_layout_card_component__WEBPACK_IMPORTED_MODULE_0__["BlankLayoutCardComponent"]; });




/***/ }),

/***/ "./src/app/components/message-menu/index.ts":
/*!**************************************************!*\
  !*** ./src/app/components/message-menu/index.ts ***!
  \**************************************************/
/*! exports provided: MessageMenuComponent, MessageMenuService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _message_menu_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./message-menu.component */ "./src/app/components/message-menu/message-menu.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MessageMenuComponent", function() { return _message_menu_component__WEBPACK_IMPORTED_MODULE_0__["MessageMenuComponent"]; });

/* harmony import */ var _message_menu_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./message-menu.service */ "./src/app/components/message-menu/message-menu.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MessageMenuService", function() { return _message_menu_service__WEBPACK_IMPORTED_MODULE_1__["MessageMenuService"]; });





/***/ }),

/***/ "./src/app/components/message-menu/message-menu.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/message-menu/message-menu.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"material-icons mdl-badge mdl-badge--overlap mdl-button--icon message\" id=\"inbox\" [attr.data-badge]=\"messages.length\">\r\n  mail_outline\r\n</div>\r\n<ul\r\n  class=\"mdl-menu mdl-list mdl-js-menu mdl-js-ripple-effect mdl-menu--bottom-right mdl-shadow--2dp messages-dropdown\"\r\n  for=\"inbox\">\r\n  <li class=\"mdl-list__item\">\r\n    You have {{ messages.length }} new messages!\r\n  </li>\r\n  <li *ngFor=\"let item of messages\" class=\"mdl-menu__item mdl-list__item mdl-list__item--two-line list__item--border-top\">\r\n    <span class=\"mdl-list__item-primary-content\">\r\n      <span class=\"mdl-list__item-avatar\"\r\n            ngClass=\"background-color--{{ item.color }}\">\r\n        <span class=\"text\">{{ item.icon }}</span>\r\n      </span>\r\n      <span>{{ item.name }}</span>\r\n      <span\r\n        class=\"mdl-list__item-sub-title\">{{ item.type }}</span>\r\n    </span>\r\n    <span class=\"mdl-list__item-secondary-content\">\r\n      <span class=\"label label--transparent\">{{ item.time }}</span>\r\n    </span>\r\n  </li>\r\n  <li class=\"mdl-list__item list__item--border-top\">\r\n    <button href=\"#\" class=\"mdl-button mdl-js-button mdl-js-ripple-effect\">SHOW ALL MESSAGES</button>\r\n  </li>\r\n</ul>\r\n"

/***/ }),

/***/ "./src/app/components/message-menu/message-menu.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/components/message-menu/message-menu.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/*------------------------------------*\\\n    $CONTENTS\n\\*------------------------------------*/\n/**\n * STYLE GUIDE VARIABLES------------------Declarations of Sass variables\n * -----Typography\n * -----Colors\n * -----Textfield\n * -----Switch\n * -----Spinner\n * -----Radio\n * -----Menu\n * -----List\n * -----Layout\n * -----Icon toggles\n * -----Footer\n * -----Column\n * -----Checkbox\n * -----Card\n * -----Button\n * -----Animation\n * -----Progress\n * -----Badge\n * -----Shadows\n * -----Grid\n * -----Data table\n * -----Dialog\n * -----Snackbar\n * -----Tooltip\n * -----Chip\n *\n * Even though all variables have the `!default` directive, most of them\n * should not be changed as they are dependent one another. This can cause\n * visual distortions (like alignment issues) that are hard to track down\n * and fix.\n */\n/* ==========  TYPOGRAPHY  ========== */\n/* We're splitting fonts into \"preferred\" and \"performance\" in order to optimize\n   page loading. For important text, such as the body, we want it to load\n   immediately and not wait for the web font load, whereas for other sections,\n   such as headers and titles, we're OK with things taking a bit longer to load.\n   We do have some optional classes and parameters in the mixins, in case you\n   definitely want to make sure you're using the preferred font and don't mind\n   the performance hit.\n   We should be able to improve on this once CSS Font Loading L3 becomes more\n   widely available.\n*/\n/* ==========  COLORS  ========== */\n/**\n*\n* Material design color palettes.\n* @see http://www.google.com/design/spec/style/color.html\n*\n**/\n/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/* ==========  Color Palettes  ========== */\n/* colors.scss */\n/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/* ==========  IMAGES  ========== */\n/* ==========  Color & Themes  ========== */\n/* ==========  Typography  ========== */\n/* ==========  Components  ========== */\n/* ==========  Standard Buttons  ========== */\n/* ==========  Icon Toggles  ========== */\n/* ==========  Radio Buttons  ========== */\n/* ==========  Ripple effect  ========== */\n/* ==========  Layout  ========== */\n/* ==========  Content Tabs  ========== */\n/* ==========  Checkboxes  ========== */\n/* ==========  Switches  ========== */\n/* ==========  Spinner  ========== */\n/* ==========  Text fields  ========== */\n/* ==========  Card  ========== */\n/* ==========  Sliders ========== */\n/* ========== Progress ========== */\n/* ==========  List ========== */\n/* ==========  Item ========== */\n/* ==========  Dropdown menu ========== */\n/* ==========  Tooltips  ========== */\n/* ==========  Footer  ========== */\n/* TEXTFIELD */\n/* SWITCH */\n/* SPINNER */\n/* RADIO */\n/* MENU */\n/* LIST */\n/* LAYOUT */\n/* ICON TOGGLE */\n/* FOOTER */\n/*mega-footer*/\n/*mini-footer*/\n/* CHECKBOX */\n/* CARD */\n/* Card dimensions */\n/* Cover image */\n/* BUTTON */\n/**\n *\n * Dimensions\n *\n */\n/* ANIMATION */\n/* PROGRESS */\n/* BADGE */\n/* SHADOWS */\n/* GRID */\n/* DATA TABLE */\n/* DIALOG */\n/* SNACKBAR */\n/* TOOLTIP */\n/* CHIP */\n/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/* Typography */\n/* Shadows */\n/* Animations */\n/* Dialog */\n/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/* ==========  Color Palettes  ========== */\n/* colors.scss */\n/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/* ==========  Color Palettes  ========== */\n/* colors.scss */\n/* ==========  IMAGES  ========== */\n/* ==========  Color & Themes  ========== */\n.text-color--smoke {\n  color: #666; }\n.color--gray {\n  background-color: #444 !important; }\n.color--dark-gray {\n  background-color: #333; }\n.color--smooth-gray {\n  background-color: #999 !important; }\n.text-color--smooth-gray {\n  color: #999 !important; }\n.color--red {\n  background-color: #f44336 !important; }\n.color-text--red {\n  color: #f44336 !important; }\n.color--orange {\n  background-color: #ffc107 !important; }\n.color-text--orange {\n  color: #ffc107 !important; }\n.color--amber {\n  background-color: #ff9800 !important; }\n.color-text--amber {\n  color: #ff9800 !important; }\n.color--green {\n  background-color: #00d45a !important; }\n.color-text--green {\n  color: #00d45a !important; }\n.color--light-blue {\n  background-color: #03a9f4 !important; }\n.color-text--light-blue {\n  color: #03a9f4 !important; }\n.color--purple {\n  background-color: #7726d3 !important; }\n.color-text--purple {\n  color: #7726d3 !important; }\n.color--teal {\n  background-color: #00bcd4 !important; }\n.color-text--teal {\n  color: #00bcd4 !important; }\n/* ==========  Typography  ========== */\n/* ==========  Components  ========== */\n/* ==========  Standard Buttons  ========== */\n/* ==========  Icon Toggles  ========== */\n/* ==========  Radio Buttons  ========== */\n/* ==========  Ripple effect  ========== */\n/* ==========  Layout  ========== */\n/* ==========  Content Tabs  ========== */\n/* ==========  Checkboxes  ========== */\n/* ==========  Switches  ========== */\n/* ==========  Spinner  ========== */\n/* ==========  Text fields  ========== */\n/* ==========  Card  ========== */\n/* ==========  Sliders ========== */\n/* ========== Progress ========== */\n/* ==========  List ========== */\n/* ==========  Item ========== */\n/* ==========  Dropdown menu ========== */\n/* ==========  Tooltips  ========== */\n/* ==========  Footer  ========== */\n/* TEXTFIELD */\n/* SWITCH */\n/* SPINNER */\n/* RADIO */\n/* MENU */\n/* LIST */\n/* LAYOUT */\n/* ICON */\n/* ICON TOGGLE */\n/* FOOTER */\n/* mega-footer */\n/* mini-footer */\n/* CHECKBOX */\n/* CARD */\n/* Card dimensions */\n/* Cover image */\n/* BUTTON */\n/* ANIMATION */\n/* PROGRESS */\n/* BADGE */\n/* SHADOWS */\n/* GRID */\n/* DATA TABLE */\n/* TOOLTIP */\n/* WIDGETS & COMPONENTS */\n/* Trending */\n/* label */\n/* charts */\n/* employer form */\n/* row */\n/* scroll */\n.message-menu {\n  position: relative; }\n.messages-dropdown.mdl-menu {\n  width: 310px; }\n.messages-dropdown .label {\n  color: rgba(255, 255, 255, 0.5); }\n.messages-dropdown .mdl-list__item-primary-content {\n  font-weight: 400;\n  line-height: 18px; }\n.messages-dropdown .mdl-list__item-primary-content .mdl-list__item-avatar {\n    padding: 8px;\n    text-align: center; }\n.messages-dropdown .mdl-list__item-primary-content .mdl-list__item-avatar .material-icons {\n      vertical-align: top; }\n.messages-dropdown .mdl-list__item-primary-content .mdl-list__item-avatar .text {\n      font-size: 19px;\n      vertical-align: middle; }\n.messages-dropdown .mdl-list__item-primary-content .mdl-list__item-sub-title {\n    font-weight: 100;\n    font-size: 12px; }\n.messages-dropdown.mdl-list .mdl-list__item {\n  font-family: \"Roboto\", \"Helvetica\", \"Arial\", sans-serif;\n  font-size: 1rem;\n  font-weight: 100;\n  color: #fff; }\n.messages-dropdown.mdl-list .mdl-list__item:first-child {\n    color: rgba(255, 255, 255, 0.8); }\n.messages-dropdown.mdl-list .mdl-list__item:last-child {\n    padding-top: 8px;\n    padding-bottom: 0; }\n"

/***/ }),

/***/ "./src/app/components/message-menu/message-menu.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/message-menu/message-menu.component.ts ***!
  \*******************************************************************/
/*! exports provided: MessageMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageMenuComponent", function() { return MessageMenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _message_menu_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./message-menu.service */ "./src/app/components/message-menu/message-menu.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MessageMenuComponent = /** @class */ (function () {
    function MessageMenuComponent(messageMenuService) {
        this.messageMenu = true;
        this.messages = messageMenuService.getMessages();
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])('class.message-menu'),
        __metadata("design:type", Object)
    ], MessageMenuComponent.prototype, "messageMenu", void 0);
    MessageMenuComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-message-menu',
            styles: [__webpack_require__(/*! ./message-menu.component.scss */ "./src/app/components/message-menu/message-menu.component.scss")],
            template: __webpack_require__(/*! ./message-menu.component.html */ "./src/app/components/message-menu/message-menu.component.html"),
            providers: [_message_menu_service__WEBPACK_IMPORTED_MODULE_1__["MessageMenuService"]],
        }),
        __metadata("design:paramtypes", [_message_menu_service__WEBPACK_IMPORTED_MODULE_1__["MessageMenuService"]])
    ], MessageMenuComponent);
    return MessageMenuComponent;
}());



/***/ }),

/***/ "./src/app/components/message-menu/message-menu.service.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/message-menu/message-menu.service.ts ***!
  \*****************************************************************/
/*! exports provided: MessageMenuService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageMenuService", function() { return MessageMenuService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var MessageMenuService = /** @class */ (function () {
    function MessageMenuService() {
    }
    MessageMenuService.prototype.getMessages = function () {
        return [
            {
                name: 'Alice',
                type: 'Birthday Party',
                time: 'just now',
                icon: 'A',
                color: 'primary',
            },
            {
                name: 'Vladimir',
                type: 'Deployment',
                time: 'just now',
                icon: 'V',
                color: 'primary',
            },
            {
                name: 'Mike',
                type: 'No theme',
                time: '5 min',
                icon: 'M',
                color: 'baby-blue',
            },
            {
                name: 'Darth',
                type: 'Suggestion',
                time: '23 hours',
                icon: 'D',
                color: 'cerulean',
            },
            {
                name: 'Don McDuket',
                type: 'NEWS',
                time: '30 Nov',
                icon: 'D',
                color: 'mint',
            },
        ];
    };
    MessageMenuService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], MessageMenuService);
    return MessageMenuService;
}());



/***/ }),

/***/ "./src/app/components/notification-menu/index.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/notification-menu/index.ts ***!
  \*******************************************************/
/*! exports provided: NotificationMenuComponent, NotificationMenuService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _notification_menu_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./notification-menu.component */ "./src/app/components/notification-menu/notification-menu.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NotificationMenuComponent", function() { return _notification_menu_component__WEBPACK_IMPORTED_MODULE_0__["NotificationMenuComponent"]; });

/* harmony import */ var _notification_menu_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./notification-menu.service */ "./src/app/components/notification-menu/notification-menu.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NotificationMenuService", function() { return _notification_menu_service__WEBPACK_IMPORTED_MODULE_1__["NotificationMenuService"]; });





/***/ }),

/***/ "./src/app/components/notification-menu/notification-menu.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/components/notification-menu/notification-menu.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"material-icons mdl-badge mdl-badge--overlap mdl-button--icon notification\" id=\"notification\"\r\n     [attr.data-badge]=\"notifications.length\">\r\n  notifications_none\r\n</div>\r\n<ul\r\n  class=\"mdl-menu mdl-list mdl-js-menu mdl-js-ripple-effect mdl-menu--bottom-right mdl-shadow--2dp notifications-dropdown\"\r\n  for=\"notification\">\r\n  <li class=\"mdl-list__item\">\r\n    You have {{ notifications.length }} new notifications!\r\n  </li>\r\n  <li class=\"mdl-menu__item mdl-list__item list__item--border-top\"\r\n      *ngFor=\"let item of notifications\">\r\n    <span class=\"mdl-list__item-primary-content\">\r\n      <span class=\"mdl-list__item-avatar\" ngClass=\"background-color--{{ item.color }}\">\r\n        <i class=\"material-icons\">{{ item.icon }}</i>\r\n      </span>\r\n      <span>{{ item.text }}</span>\r\n    </span>\r\n    <span class=\"mdl-list__item-secondary-content\">\r\n      <span class=\"label\">{{ item.time }}</span>\r\n    </span>\r\n  </li>\r\n\r\n  <li class=\"mdl-list__item list__item--border-top\">\r\n    <button href=\"#\" class=\"mdl-button mdl-js-button mdl-js-ripple-effect\">ALL NOTIFICATIONS</button>\r\n  </li>\r\n</ul>\r\n"

/***/ }),

/***/ "./src/app/components/notification-menu/notification-menu.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/components/notification-menu/notification-menu.component.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/*------------------------------------*\\\n    $CONTENTS\n\\*------------------------------------*/\n/**\n * STYLE GUIDE VARIABLES------------------Declarations of Sass variables\n * -----Typography\n * -----Colors\n * -----Textfield\n * -----Switch\n * -----Spinner\n * -----Radio\n * -----Menu\n * -----List\n * -----Layout\n * -----Icon toggles\n * -----Footer\n * -----Column\n * -----Checkbox\n * -----Card\n * -----Button\n * -----Animation\n * -----Progress\n * -----Badge\n * -----Shadows\n * -----Grid\n * -----Data table\n * -----Dialog\n * -----Snackbar\n * -----Tooltip\n * -----Chip\n *\n * Even though all variables have the `!default` directive, most of them\n * should not be changed as they are dependent one another. This can cause\n * visual distortions (like alignment issues) that are hard to track down\n * and fix.\n */\n/* ==========  TYPOGRAPHY  ========== */\n/* We're splitting fonts into \"preferred\" and \"performance\" in order to optimize\n   page loading. For important text, such as the body, we want it to load\n   immediately and not wait for the web font load, whereas for other sections,\n   such as headers and titles, we're OK with things taking a bit longer to load.\n   We do have some optional classes and parameters in the mixins, in case you\n   definitely want to make sure you're using the preferred font and don't mind\n   the performance hit.\n   We should be able to improve on this once CSS Font Loading L3 becomes more\n   widely available.\n*/\n/* ==========  COLORS  ========== */\n/**\n*\n* Material design color palettes.\n* @see http://www.google.com/design/spec/style/color.html\n*\n**/\n/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/* ==========  Color Palettes  ========== */\n/* colors.scss */\n/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/* ==========  IMAGES  ========== */\n/* ==========  Color & Themes  ========== */\n/* ==========  Typography  ========== */\n/* ==========  Components  ========== */\n/* ==========  Standard Buttons  ========== */\n/* ==========  Icon Toggles  ========== */\n/* ==========  Radio Buttons  ========== */\n/* ==========  Ripple effect  ========== */\n/* ==========  Layout  ========== */\n/* ==========  Content Tabs  ========== */\n/* ==========  Checkboxes  ========== */\n/* ==========  Switches  ========== */\n/* ==========  Spinner  ========== */\n/* ==========  Text fields  ========== */\n/* ==========  Card  ========== */\n/* ==========  Sliders ========== */\n/* ========== Progress ========== */\n/* ==========  List ========== */\n/* ==========  Item ========== */\n/* ==========  Dropdown menu ========== */\n/* ==========  Tooltips  ========== */\n/* ==========  Footer  ========== */\n/* TEXTFIELD */\n/* SWITCH */\n/* SPINNER */\n/* RADIO */\n/* MENU */\n/* LIST */\n/* LAYOUT */\n/* ICON TOGGLE */\n/* FOOTER */\n/*mega-footer*/\n/*mini-footer*/\n/* CHECKBOX */\n/* CARD */\n/* Card dimensions */\n/* Cover image */\n/* BUTTON */\n/**\n *\n * Dimensions\n *\n */\n/* ANIMATION */\n/* PROGRESS */\n/* BADGE */\n/* SHADOWS */\n/* GRID */\n/* DATA TABLE */\n/* DIALOG */\n/* SNACKBAR */\n/* TOOLTIP */\n/* CHIP */\n/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/* Typography */\n/* Shadows */\n/* Animations */\n/* Dialog */\n/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/* ==========  Color Palettes  ========== */\n/* colors.scss */\n/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/* ==========  Color Palettes  ========== */\n/* colors.scss */\n/* ==========  IMAGES  ========== */\n/* ==========  Color & Themes  ========== */\n.text-color--smoke {\n  color: #666; }\n.color--gray {\n  background-color: #444 !important; }\n.color--dark-gray {\n  background-color: #333; }\n.color--smooth-gray {\n  background-color: #999 !important; }\n.text-color--smooth-gray {\n  color: #999 !important; }\n.color--red {\n  background-color: #f44336 !important; }\n.color-text--red {\n  color: #f44336 !important; }\n.color--orange {\n  background-color: #ffc107 !important; }\n.color-text--orange {\n  color: #ffc107 !important; }\n.color--amber {\n  background-color: #ff9800 !important; }\n.color-text--amber {\n  color: #ff9800 !important; }\n.color--green {\n  background-color: #00d45a !important; }\n.color-text--green {\n  color: #00d45a !important; }\n.color--light-blue {\n  background-color: #03a9f4 !important; }\n.color-text--light-blue {\n  color: #03a9f4 !important; }\n.color--purple {\n  background-color: #7726d3 !important; }\n.color-text--purple {\n  color: #7726d3 !important; }\n.color--teal {\n  background-color: #00bcd4 !important; }\n.color-text--teal {\n  color: #00bcd4 !important; }\n/* ==========  Typography  ========== */\n/* ==========  Components  ========== */\n/* ==========  Standard Buttons  ========== */\n/* ==========  Icon Toggles  ========== */\n/* ==========  Radio Buttons  ========== */\n/* ==========  Ripple effect  ========== */\n/* ==========  Layout  ========== */\n/* ==========  Content Tabs  ========== */\n/* ==========  Checkboxes  ========== */\n/* ==========  Switches  ========== */\n/* ==========  Spinner  ========== */\n/* ==========  Text fields  ========== */\n/* ==========  Card  ========== */\n/* ==========  Sliders ========== */\n/* ========== Progress ========== */\n/* ==========  List ========== */\n/* ==========  Item ========== */\n/* ==========  Dropdown menu ========== */\n/* ==========  Tooltips  ========== */\n/* ==========  Footer  ========== */\n/* TEXTFIELD */\n/* SWITCH */\n/* SPINNER */\n/* RADIO */\n/* MENU */\n/* LIST */\n/* LAYOUT */\n/* ICON */\n/* ICON TOGGLE */\n/* FOOTER */\n/* mega-footer */\n/* mini-footer */\n/* CHECKBOX */\n/* CARD */\n/* Card dimensions */\n/* Cover image */\n/* BUTTON */\n/* ANIMATION */\n/* PROGRESS */\n/* BADGE */\n/* SHADOWS */\n/* GRID */\n/* DATA TABLE */\n/* TOOLTIP */\n/* WIDGETS & COMPONENTS */\n/* Trending */\n/* label */\n/* charts */\n/* employer form */\n/* row */\n/* scroll */\n.notification-menu {\n  position: relative; }\n.notifications-dropdown.mdl-list {\n  width: 310px; }\n.notifications-dropdown.mdl-list .mdl-list__item {\n    font-family: \"Roboto\", \"Helvetica\", \"Arial\", sans-serif;\n    font-size: 1rem;\n    font-weight: 100;\n    color: #fff; }\n.notifications-dropdown.mdl-list .mdl-list__item:first-child {\n      color: rgba(255, 255, 255, 0.8); }\n.notifications-dropdown.mdl-list .mdl-list__item .mdl-list__item-avatar {\n      padding: 8px;\n      text-align: center; }\n.notifications-dropdown.mdl-list .mdl-list__item .mdl-list__item-avatar .material-icons {\n        vertical-align: top; }\n.notifications-dropdown.mdl-list .mdl-list__item:last-child {\n      padding-top: 8px;\n      padding-bottom: 0; }\n"

/***/ }),

/***/ "./src/app/components/notification-menu/notification-menu.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/components/notification-menu/notification-menu.component.ts ***!
  \*****************************************************************************/
/*! exports provided: NotificationMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationMenuComponent", function() { return NotificationMenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _notification_menu_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./notification-menu.service */ "./src/app/components/notification-menu/notification-menu.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NotificationMenuComponent = /** @class */ (function () {
    function NotificationMenuComponent(notificationMenuService) {
        this.notificationMenu = true;
        this.notifications = notificationMenuService.getNotifications();
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])('class.notification-menu'),
        __metadata("design:type", Object)
    ], NotificationMenuComponent.prototype, "notificationMenu", void 0);
    NotificationMenuComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-notification-menu',
            styles: [__webpack_require__(/*! ./notification-menu.component.scss */ "./src/app/components/notification-menu/notification-menu.component.scss")],
            template: __webpack_require__(/*! ./notification-menu.component.html */ "./src/app/components/notification-menu/notification-menu.component.html"),
            providers: [_notification_menu_service__WEBPACK_IMPORTED_MODULE_1__["NotificationMenuService"]],
        }),
        __metadata("design:paramtypes", [_notification_menu_service__WEBPACK_IMPORTED_MODULE_1__["NotificationMenuService"]])
    ], NotificationMenuComponent);
    return NotificationMenuComponent;
}());



/***/ }),

/***/ "./src/app/components/notification-menu/notification-menu.service.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components/notification-menu/notification-menu.service.ts ***!
  \***************************************************************************/
/*! exports provided: NotificationMenuService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationMenuService", function() { return NotificationMenuService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var NotificationMenuService = /** @class */ (function () {
    function NotificationMenuService() {
    }
    NotificationMenuService.prototype.getNotifications = function () {
        return [
            {
                text: 'You have 3 new orders.',
                time: 'just now',
                icon: 'plus_one',
                color: 'primary',
            }, {
                text: 'Database error',
                time: '1 min',
                icon: 'error_outline',
                color: 'secondary',
            }, {
                text: 'The Death Star is built!',
                time: '2 hours',
                icon: 'new_releases',
                color: 'primary',
            }, {
                text: 'You have 4 new mails.',
                time: '5 days',
                icon: 'mail_outline',
                color: 'primary',
            },
        ];
    };
    NotificationMenuService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], NotificationMenuService);
    return NotificationMenuService;
}());



/***/ }),

/***/ "./src/app/components/sidebar/index.ts":
/*!*********************************************!*\
  !*** ./src/app/components/sidebar/index.ts ***!
  \*********************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sidebar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sidebar.component */ "./src/app/components/sidebar/sidebar.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return _sidebar_component__WEBPACK_IMPORTED_MODULE_0__["SidebarComponent"]; });




/***/ }),

/***/ "./src/app/components/sidebar/sidebar.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/components/sidebar/sidebar.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mdl-navigation base-menu-item:nth-child(2) i.material-icons {\n  -webkit-transform: rotate(180deg);\n          transform: rotate(180deg); }\n"

/***/ }),

/***/ "./src/app/components/sidebar/sidebar.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/sidebar/sidebar.component.ts ***!
  \*********************************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var theme_components_sidebar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! theme/components/sidebar */ "./src/theme/components/sidebar/index.ts");
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
var __read = (undefined && undefined.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (undefined && undefined.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};


var SidebarComponent = /** @class */ (function (_super) {
    __extends(SidebarComponent, _super);
    function SidebarComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.title = 'darkboard';
        _this.menu = [
            { name: 'Classic Dashboard', link: '/app/dashboard', icon: 'dashboard' },
            { name: 'Custom Dashboard', link: '/app/dashboard-custom', icon: 'view_quilt' },
            {
                name: 'UI',
                children: __spread([
                    'buttons',
                    'cards',
                    'colors',
                    'forms',
                    'icons',
                    'typography',
                    'tables',
                ].map(function (ui) { return ({
                    name: ui[0].toUpperCase() + ui.slice(1),
                    link: "/ui/" + ui,
                }); }), [
                    {
                        name: 'Right sidebar',
                        link: '/ui/right-sidebar',
                    },
                ]),
                icon: 'view_comfy',
            },
            { name: 'Components', link: '/app/components', icon: 'developer_board' },
            { name: 'Account', link: '/app/forms', icon: 'person' },
            {
                name: 'Maps', icon: 'map', children: [
                    { name: 'Simple map', link: '/maps/simple' },
                    { name: 'Advanced map', link: '/maps/advanced' },
                ],
            },
            { name: 'Charts', link: '/app/charts', icon: 'multiline_chart' },
            {
                name: 'Pages', children: [
                    { name: 'Sign in', link: '/pages/login' },
                    { name: 'Sign up', link: '/pages/sign-up' },
                    { name: 'Forgot password', link: '/pages/forgot-password' },
                    { name: '404', link: '/pages/error' },
                ],
                icon: 'pages',
            },
        ];
        return _this;
    }
    SidebarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sidebar',
            styles: [__webpack_require__(/*! ../../../theme/components/sidebar/sidebar.component.scss */ "./src/theme/components/sidebar/sidebar.component.scss"), __webpack_require__(/*! ./sidebar.component.scss */ "./src/app/components/sidebar/sidebar.component.scss")],
            template: __webpack_require__(/*! ../../../theme/components/sidebar/sidebar.component.html */ "./src/theme/components/sidebar/sidebar.component.html"),
        })
    ], SidebarComponent);
    return SidebarComponent;
}(theme_components_sidebar__WEBPACK_IMPORTED_MODULE_1__["SidebarComponent"]));



/***/ }),

/***/ "./src/app/layouts/blank-layout/blank-layout.component.html":
/*!******************************************************************!*\
  !*** ./src/app/layouts/blank-layout/blank-layout.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"mdl-layout mdl-js-layout\">\r\n  <main class=\"mdl-layout__content\">\r\n    <router-outlet></router-outlet>\r\n  </main>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/layouts/blank-layout/blank-layout.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/layouts/blank-layout/blank-layout.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/*------------------------------------*\\\n    $CONTENTS\n\\*------------------------------------*/\n/**\n * STYLE GUIDE VARIABLES------------------Declarations of Sass variables\n * -----Typography\n * -----Colors\n * -----Textfield\n * -----Switch\n * -----Spinner\n * -----Radio\n * -----Menu\n * -----List\n * -----Layout\n * -----Icon toggles\n * -----Footer\n * -----Column\n * -----Checkbox\n * -----Card\n * -----Button\n * -----Animation\n * -----Progress\n * -----Badge\n * -----Shadows\n * -----Grid\n * -----Data table\n * -----Dialog\n * -----Snackbar\n * -----Tooltip\n * -----Chip\n *\n * Even though all variables have the `!default` directive, most of them\n * should not be changed as they are dependent one another. This can cause\n * visual distortions (like alignment issues) that are hard to track down\n * and fix.\n */\n/* ==========  TYPOGRAPHY  ========== */\n/* We're splitting fonts into \"preferred\" and \"performance\" in order to optimize\n   page loading. For important text, such as the body, we want it to load\n   immediately and not wait for the web font load, whereas for other sections,\n   such as headers and titles, we're OK with things taking a bit longer to load.\n   We do have some optional classes and parameters in the mixins, in case you\n   definitely want to make sure you're using the preferred font and don't mind\n   the performance hit.\n   We should be able to improve on this once CSS Font Loading L3 becomes more\n   widely available.\n*/\n/* ==========  COLORS  ========== */\n/**\n*\n* Material design color palettes.\n* @see http://www.google.com/design/spec/style/color.html\n*\n**/\n/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/* ==========  Color Palettes  ========== */\n/* colors.scss */\n/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/* ==========  IMAGES  ========== */\n/* ==========  Color & Themes  ========== */\n/* ==========  Typography  ========== */\n/* ==========  Components  ========== */\n/* ==========  Standard Buttons  ========== */\n/* ==========  Icon Toggles  ========== */\n/* ==========  Radio Buttons  ========== */\n/* ==========  Ripple effect  ========== */\n/* ==========  Layout  ========== */\n/* ==========  Content Tabs  ========== */\n/* ==========  Checkboxes  ========== */\n/* ==========  Switches  ========== */\n/* ==========  Spinner  ========== */\n/* ==========  Text fields  ========== */\n/* ==========  Card  ========== */\n/* ==========  Sliders ========== */\n/* ========== Progress ========== */\n/* ==========  List ========== */\n/* ==========  Item ========== */\n/* ==========  Dropdown menu ========== */\n/* ==========  Tooltips  ========== */\n/* ==========  Footer  ========== */\n/* TEXTFIELD */\n/* SWITCH */\n/* SPINNER */\n/* RADIO */\n/* MENU */\n/* LIST */\n/* LAYOUT */\n/* ICON TOGGLE */\n/* FOOTER */\n/*mega-footer*/\n/*mini-footer*/\n/* CHECKBOX */\n/* CARD */\n/* Card dimensions */\n/* Cover image */\n/* BUTTON */\n/**\n *\n * Dimensions\n *\n */\n/* ANIMATION */\n/* PROGRESS */\n/* BADGE */\n/* SHADOWS */\n/* GRID */\n/* DATA TABLE */\n/* DIALOG */\n/* SNACKBAR */\n/* TOOLTIP */\n/* CHIP */\n/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/* Typography */\n/* Shadows */\n/* Animations */\n/* Dialog */\n/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/* ==========  Color Palettes  ========== */\n/* colors.scss */\n/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/* ==========  Color Palettes  ========== */\n/* colors.scss */\n/* ==========  IMAGES  ========== */\n/* ==========  Color & Themes  ========== */\n.text-color--smoke {\n  color: #666; }\n.color--gray {\n  background-color: #444 !important; }\n.color--dark-gray {\n  background-color: #333; }\n.color--smooth-gray {\n  background-color: #999 !important; }\n.text-color--smooth-gray {\n  color: #999 !important; }\n.color--red {\n  background-color: #f44336 !important; }\n.color-text--red {\n  color: #f44336 !important; }\n.color--orange {\n  background-color: #ffc107 !important; }\n.color-text--orange {\n  color: #ffc107 !important; }\n.color--amber {\n  background-color: #ff9800 !important; }\n.color-text--amber {\n  color: #ff9800 !important; }\n.color--green {\n  background-color: #00d45a !important; }\n.color-text--green {\n  color: #00d45a !important; }\n.color--light-blue {\n  background-color: #03a9f4 !important; }\n.color-text--light-blue {\n  color: #03a9f4 !important; }\n.color--purple {\n  background-color: #7726d3 !important; }\n.color-text--purple {\n  color: #7726d3 !important; }\n.color--teal {\n  background-color: #00bcd4 !important; }\n.color-text--teal {\n  color: #00bcd4 !important; }\n/* ==========  Typography  ========== */\n/* ==========  Components  ========== */\n/* ==========  Standard Buttons  ========== */\n/* ==========  Icon Toggles  ========== */\n/* ==========  Radio Buttons  ========== */\n/* ==========  Ripple effect  ========== */\n/* ==========  Layout  ========== */\n/* ==========  Content Tabs  ========== */\n/* ==========  Checkboxes  ========== */\n/* ==========  Switches  ========== */\n/* ==========  Spinner  ========== */\n/* ==========  Text fields  ========== */\n/* ==========  Card  ========== */\n/* ==========  Sliders ========== */\n/* ========== Progress ========== */\n/* ==========  List ========== */\n/* ==========  Item ========== */\n/* ==========  Dropdown menu ========== */\n/* ==========  Tooltips  ========== */\n/* ==========  Footer  ========== */\n/* TEXTFIELD */\n/* SWITCH */\n/* SPINNER */\n/* RADIO */\n/* MENU */\n/* LIST */\n/* LAYOUT */\n/* ICON */\n/* ICON TOGGLE */\n/* FOOTER */\n/* mega-footer */\n/* mini-footer */\n/* CHECKBOX */\n/* CARD */\n/* Card dimensions */\n/* Cover image */\n/* BUTTON */\n/* ANIMATION */\n/* PROGRESS */\n/* BADGE */\n/* SHADOWS */\n/* GRID */\n/* DATA TABLE */\n/* TOOLTIP */\n/* WIDGETS & COMPONENTS */\n/* Trending */\n/* label */\n/* charts */\n/* employer form */\n/* row */\n/* scroll */\napp-blank-layout .mdl-layout .mdl-layout__content {\n  padding: 16px;\n  display: flex; }\n.not-found .mdl-layout__content {\n  background-image: url(\"assets/images/404.svg\"); }\n"

/***/ }),

/***/ "./src/app/layouts/blank-layout/blank-layout.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/layouts/blank-layout/blank-layout.component.ts ***!
  \****************************************************************/
/*! exports provided: BlankLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlankLayoutComponent", function() { return BlankLayoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BlankLayoutComponent = /** @class */ (function () {
    function BlankLayoutComponent(router) {
        this.router = router;
    }
    Object.defineProperty(BlankLayoutComponent.prototype, "notFound", {
        // FIXME: responsibility leak
        get: function () {
            return this.router.url === '/pages/404';
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])('class.not-found'),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], BlankLayoutComponent.prototype, "notFound", null);
    BlankLayoutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-blank-layout',
            styles: [__webpack_require__(/*! ./blank-layout.component.scss */ "./src/app/layouts/blank-layout/blank-layout.component.scss")],
            template: __webpack_require__(/*! ./blank-layout.component.html */ "./src/app/layouts/blank-layout/blank-layout.component.html"),
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], BlankLayoutComponent);
    return BlankLayoutComponent;
}());



/***/ }),

/***/ "./src/app/layouts/blank-layout/index.ts":
/*!***********************************************!*\
  !*** ./src/app/layouts/blank-layout/index.ts ***!
  \***********************************************/
/*! exports provided: BlankLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _blank_layout_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./blank-layout.component */ "./src/app/layouts/blank-layout/blank-layout.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BlankLayoutComponent", function() { return _blank_layout_component__WEBPACK_IMPORTED_MODULE_0__["BlankLayoutComponent"]; });




/***/ }),

/***/ "./src/app/layouts/common-layout/common-layout.component.html":
/*!********************************************************************!*\
  !*** ./src/app/layouts/common-layout/common-layout.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"mdl-layout mdl-js-layout mdl-layout--fixed-drawer mdl-layout--fixed-header has-drawer\">\r\n  <div class=\"mdl-layout__header\">\r\n    <base-page-top>\r\n      <div class=\"mdl-layout-spacer\"></div>\r\n\r\n      <div class=\"mdl-textfield mdl-js-textfield mdl-textfield--expandable search\">\r\n        <label class=\"mdl-button mdl-js-button mdl-button--icon\" for=\"search\">\r\n          <i class=\"material-icons\">search</i>\r\n        </label>\r\n\r\n        <div class=\"mdl-textfield__expandable-holder\">\r\n          <input class=\"mdl-textfield__input\" type=\"text\" id=\"search\"/>\r\n          <label class=\"mdl-textfield__label\" for=\"search\">Enter your query...</label>\r\n        </div>\r\n      </div>\r\n\r\n      <app-notification-menu></app-notification-menu>\r\n\r\n      <app-message-menu></app-message-menu>\r\n\r\n      <div class=\"avatar-dropdown\" id=\"icon\">\r\n        <span>{{ user.username }}</span>\r\n        <img src=\"https://avatars1.githubusercontent.com/u/5583445?s=460&v=4\" style=\"border-radius: 50%;\">\r\n      </div>\r\n      <ul\r\n        class=\"mdl-menu mdl-list mdl-menu--bottom-right mdl-js-menu mdl-js-ripple-effect mdl-shadow--2dp account-dropdown\"\r\n        for=\"icon\">\r\n        <li class=\"mdl-list__item mdl-list__item--two-line\">\r\n            <span class=\"mdl-list__item-primary-content\">\r\n              <span class=\"material-icons mdl-list__item-avatar\"></span>\r\n              <span>{{ user.username }}</span>\r\n              <span class=\"mdl-list__item-sub-title\">{{ user.email }}</span>\r\n          </span>\r\n        </li>\r\n        <li class=\"list__item--border-top\"></li>\r\n        <li class=\"mdl-menu__item mdl-list__item\">\r\n            <span class=\"mdl-list__item-primary-content\">\r\n              <i class=\"material-icons mdl-list__item-icon\">account_circle</i>\r\n              My account\r\n            </span>\r\n        </li>\r\n        <li class=\"mdl-menu__item mdl-list__item\">\r\n            <span class=\"mdl-list__item-primary-content\">\r\n              <i class=\"material-icons mdl-list__item-icon\">check_box</i>\r\n              My tasks\r\n            </span>\r\n          <span class=\"mdl-list__item-secondary-content\">\r\n              <span class=\"label background-color--primary\">3 new</span>\r\n            </span>\r\n        </li>\r\n        <li class=\"mdl-menu__item mdl-list__item\">\r\n            <span class=\"mdl-list__item-primary-content\">\r\n              <i class=\"material-icons mdl-list__item-icon\">perm_contact_calendar</i>\r\n              My events\r\n            </span>\r\n        </li>\r\n        <li class=\"list__item--border-top\"></li>\r\n        <li class=\"mdl-menu__item mdl-list__item\">\r\n            <span class=\"mdl-list__item-primary-content\">\r\n              <i class=\"material-icons mdl-list__item-icon\">settings</i>\r\n              Settings\r\n            </span>\r\n        </li>\r\n        <li class=\"mdl-menu__item mdl-list__item\">\r\n            <span class=\"mdl-list__item-primary-content\" (click)=\"logout()\">\r\n              <i class=\"material-icons mdl-list__item-icon text-color--secondary\">exit_to_app</i>\r\n              Log out\r\n            </span>\r\n        </li>\r\n      </ul>\r\n\r\n      <button id=\"more\" class=\"mdl-button mdl-js-button mdl-button--icon\">\r\n        <i class=\"material-icons\">more_vert</i>\r\n      </button>\r\n      <ul class=\"mdl-menu mdl-menu--bottom-right mdl-js-menu mdl-js-ripple-effect mdl-shadow--2dp settings-dropdown\"\r\n          for=\"more\">\r\n        <li class=\"mdl-menu__item\">\r\n          Settings\r\n        </li>\r\n        <a class=\"mdl-menu__item\" href=\"https://github.com/anypossiblew\">\r\n          Support\r\n        </a>\r\n        <li class=\"mdl-menu__item\">\r\n          F.A.Q.\r\n        </li>\r\n      </ul>\r\n    </base-page-top>\r\n  </div>\r\n  <div class=\"mdl-layout__drawer\">\r\n    <app-sidebar></app-sidebar>\r\n  </div>\r\n  <main class=\"mdl-layout__content\">\r\n    <router-outlet></router-outlet>\r\n  </main>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/layouts/common-layout/common-layout.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/layouts/common-layout/common-layout.component.ts ***!
  \******************************************************************/
/*! exports provided: CommonLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommonLayoutComponent", function() { return CommonLayoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @services/* */ "./src/app/services/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CommonLayoutComponent = /** @class */ (function () {
    function CommonLayoutComponent(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    CommonLayoutComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.userData.subscribe(function (user) { return _this.user = user ? user : {
            username: 'Tiven Wang',
            email: 'i.tiven.wang@gmail.com',
        }; });
    };
    CommonLayoutComponent.prototype.logout = function () {
        var _this = this;
        this.authService.logout()
            .subscribe(function (res) { return _this.router.navigate(['/pages/login']); });
    };
    CommonLayoutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-common-layout',
            template: __webpack_require__(/*! ./common-layout.component.html */ "./src/app/layouts/common-layout/common-layout.component.html"),
        }),
        __metadata("design:paramtypes", [_services___WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], CommonLayoutComponent);
    return CommonLayoutComponent;
}());



/***/ }),

/***/ "./src/app/layouts/common-layout/index.ts":
/*!************************************************!*\
  !*** ./src/app/layouts/common-layout/index.ts ***!
  \************************************************/
/*! exports provided: CommonLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _common_layout_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common-layout.component */ "./src/app/layouts/common-layout/common-layout.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CommonLayoutComponent", function() { return _common_layout_component__WEBPACK_IMPORTED_MODULE_0__["CommonLayoutComponent"]; });




/***/ }),

/***/ "./src/app/layouts/index.ts":
/*!**********************************!*\
  !*** ./src/app/layouts/index.ts ***!
  \**********************************/
/*! exports provided: LayoutsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _layouts_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./layouts.module */ "./src/app/layouts/layouts.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LayoutsModule", function() { return _layouts_module__WEBPACK_IMPORTED_MODULE_0__["LayoutsModule"]; });




/***/ }),

/***/ "./src/app/layouts/layouts.module.ts":
/*!*******************************************!*\
  !*** ./src/app/layouts/layouts.module.ts ***!
  \*******************************************/
/*! exports provided: LayoutsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutsModule", function() { return LayoutsModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var app_components_blank_layout_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/components/blank-layout-card */ "./src/app/components/blank-layout-card/index.ts");
/* harmony import */ var app_components_message_menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/components/message-menu */ "./src/app/components/message-menu/index.ts");
/* harmony import */ var app_components_notification_menu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/components/notification-menu */ "./src/app/components/notification-menu/index.ts");
/* harmony import */ var app_components_sidebar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/components/sidebar */ "./src/app/components/sidebar/index.ts");
/* harmony import */ var theme__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! theme */ "./src/theme/index.ts");
/* harmony import */ var _blank_layout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./blank-layout */ "./src/app/layouts/blank-layout/index.ts");
/* harmony import */ var _common_layout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./common-layout */ "./src/app/layouts/common-layout/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var LayoutsModule = /** @class */ (function () {
    function LayoutsModule() {
    }
    LayoutsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                theme__WEBPACK_IMPORTED_MODULE_7__["ThemeModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
            ],
            declarations: [
                _common_layout__WEBPACK_IMPORTED_MODULE_9__["CommonLayoutComponent"],
                _blank_layout__WEBPACK_IMPORTED_MODULE_8__["BlankLayoutComponent"],
                app_components_blank_layout_card__WEBPACK_IMPORTED_MODULE_3__["BlankLayoutCardComponent"],
                app_components_sidebar__WEBPACK_IMPORTED_MODULE_6__["SidebarComponent"],
                app_components_message_menu__WEBPACK_IMPORTED_MODULE_4__["MessageMenuComponent"],
                app_components_notification_menu__WEBPACK_IMPORTED_MODULE_5__["NotificationMenuComponent"],
            ],
            exports: [
                _common_layout__WEBPACK_IMPORTED_MODULE_9__["CommonLayoutComponent"],
                _blank_layout__WEBPACK_IMPORTED_MODULE_8__["BlankLayoutComponent"],
            ],
        })
    ], LayoutsModule);
    return LayoutsModule;
}());



/***/ }),

/***/ "./src/app/pages/charts/browser-statistics-chart/browser-statistics-chart.component.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/pages/charts/browser-statistics-chart/browser-statistics-chart.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: BrowserStatisticsChartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrowserStatisticsChartComponent", function() { return BrowserStatisticsChartComponent; });
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3 */ "./node_modules/d3/d3.js");
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(d3__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var nvd3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! nvd3 */ "./node_modules/nvd3/build/nv.d3.js");
/* harmony import */ var nvd3__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nvd3__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var theme_components_pie_chart__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! theme/components/pie-chart */ "./src/theme/components/pie-chart/index.ts");
/* harmony import */ var _browser_statistics_chart_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./browser-statistics-chart.service */ "./src/app/pages/charts/browser-statistics-chart/browser-statistics-chart.service.ts");
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





var BrowserStatisticsChartComponent = /** @class */ (function (_super) {
    __extends(BrowserStatisticsChartComponent, _super);
    function BrowserStatisticsChartComponent(el, browserStatisticsChartService) {
        var _this = _super.call(this) || this;
        _this.el = el;
        _this.browserStatisticsChartService = browserStatisticsChartService;
        return _this;
    }
    BrowserStatisticsChartComponent.prototype.ngOnInit = function () {
        var COLORS = {
            red: '#f44336',
            lightBlue: '#03a9f4',
            orange: '#ffc107',
            amber: '#ff9800',
            teal: '#00bcd4',
            purple: '#7726d3',
            green: '#00d45a',
            rowBgColor: '#4a4a4a',
        };
        var container1 = d3__WEBPACK_IMPORTED_MODULE_0__["select"](this.el.nativeElement);
        if (container1[0][0]) {
            var colors_1 = [
                COLORS.purple,
                COLORS.red,
                COLORS.orange,
                COLORS.teal,
                COLORS.lightBlue,
            ];
            var data_1 = this.browserStatisticsChartService.getBrowserStatistics();
            nvd3__WEBPACK_IMPORTED_MODULE_1__["addGraph"](function () {
                var innerRadius = 0.03;
                var outerRadius = 0.02;
                var pieChart = nvd3__WEBPACK_IMPORTED_MODULE_1__["models"].pieChart()
                    .x(function (d) { return d.key; })
                    .y(function (d) { return d.y; })
                    .showLabels(false)
                    .donut(true)
                    .growOnHover(true)
                    .padAngle(.03)
                    .margin({ left: 0, right: 0, top: 0, bottom: 0 })
                    .color(colors_1)
                    .arcsRadius([{ inner: innerRadius, outer: outerRadius },
                    { inner: innerRadius, outer: outerRadius },
                    { inner: innerRadius, outer: outerRadius },
                    { inner: innerRadius, outer: outerRadius },
                    { inner: innerRadius, outer: outerRadius },
                ])
                    .showLegend(false)
                    .titleOffset(10);
                pieChart.tooltip.enabled(false);
                container1.append('div')
                    .append('svg')
                    .datum(data_1)
                    .transition().duration(1200)
                    .call(pieChart);
                var h = 0;
                var i = 0.35;
                var timer = setInterval(animatePie, 70);
                function animatePie() {
                    if (outerRadius < 1.02) {
                        pieChart.arcsRadius([{ inner: innerRadius, outer: outerRadius },
                            { inner: innerRadius, outer: outerRadius },
                            { inner: innerRadius, outer: outerRadius },
                            { inner: innerRadius, outer: outerRadius },
                            { inner: innerRadius, outer: outerRadius },
                        ]).update();
                        outerRadius += i;
                        if (i > 0.2) {
                            i -= 0.05;
                        }
                    }
                    else {
                        outerRadius = 1.02;
                        pieChart.arcsRadius([{ inner: innerRadius, outer: outerRadius },
                            { inner: innerRadius, outer: outerRadius },
                            { inner: innerRadius, outer: outerRadius },
                            { inner: innerRadius, outer: outerRadius },
                            { inner: innerRadius, outer: outerRadius },
                        ])
                            .showLabels(true)
                            .labelType('percent')
                            .update();
                        clearInterval(timer);
                    }
                }
                var color = d3__WEBPACK_IMPORTED_MODULE_0__["scale"].ordinal().range(colors_1);
                var legend = container1.append('div')
                    .attr('class', 'legend')
                    .selectAll('.legend__item')
                    .data(data_1)
                    .enter()
                    .append('div')
                    .attr('class', 'legend__item');
                legend.append('div')
                    .attr('class', 'legend__mark pull-left')
                    .style('background-color', (function (d) { return color(d.key); }));
                legend.append('div')
                    .attr('class', 'legend__text')
                    .text(function (d) { return d.key; });
                return pieChart;
            });
        }
    };
    BrowserStatisticsChartComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-browser-statistics-chart',
            styles: [__webpack_require__(/*! ../../../../theme/components/pie-chart/pie-chart.component.scss */ "./src/theme/components/pie-chart/pie-chart.component.scss")],
            template: "",
            providers: [_browser_statistics_chart_service__WEBPACK_IMPORTED_MODULE_4__["BrowserStatisticsChartService"]],
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"],
            _browser_statistics_chart_service__WEBPACK_IMPORTED_MODULE_4__["BrowserStatisticsChartService"]])
    ], BrowserStatisticsChartComponent);
    return BrowserStatisticsChartComponent;
}(theme_components_pie_chart__WEBPACK_IMPORTED_MODULE_3__["PieChartComponent"]));



/***/ }),

/***/ "./src/app/pages/charts/browser-statistics-chart/browser-statistics-chart.service.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/pages/charts/browser-statistics-chart/browser-statistics-chart.service.ts ***!
  \*******************************************************************************************/
/*! exports provided: BrowserStatisticsChartService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrowserStatisticsChartService", function() { return BrowserStatisticsChartService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var BrowserStatisticsChartService = /** @class */ (function () {
    function BrowserStatisticsChartService() {
    }
    BrowserStatisticsChartService.prototype.getBrowserStatistics = function () {
        return [
            {
                key: 'Chrome',
                y: 42,
            },
            {
                key: 'Opera',
                y: 13,
            },
            {
                key: 'Safari',
                y: 14,
            },
            {
                key: 'Firefox',
                y: 17,
            },
            {
                key: 'IE & Edge',
                y: 16,
            },
        ];
    };
    BrowserStatisticsChartService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], BrowserStatisticsChartService);
    return BrowserStatisticsChartService;
}());



/***/ }),

/***/ "./src/app/pages/charts/browser-statistics-chart/index.ts":
/*!****************************************************************!*\
  !*** ./src/app/pages/charts/browser-statistics-chart/index.ts ***!
  \****************************************************************/
/*! exports provided: BrowserStatisticsChartComponent, BrowserStatisticsChartService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _browser_statistics_chart_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./browser-statistics-chart.component */ "./src/app/pages/charts/browser-statistics-chart/browser-statistics-chart.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BrowserStatisticsChartComponent", function() { return _browser_statistics_chart_component__WEBPACK_IMPORTED_MODULE_0__["BrowserStatisticsChartComponent"]; });

/* harmony import */ var _browser_statistics_chart_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./browser-statistics-chart.service */ "./src/app/pages/charts/browser-statistics-chart/browser-statistics-chart.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BrowserStatisticsChartService", function() { return _browser_statistics_chart_service__WEBPACK_IMPORTED_MODULE_1__["BrowserStatisticsChartService"]; });





/***/ }),

/***/ "./src/app/pages/charts/charts.component.html":
/*!****************************************************!*\
  !*** ./src/app/pages/charts/charts.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"mdl-cell mdl-cell--3-col-desktop mdl-cell--6-col-tablet mdl-cell--2-col-phone\">\r\n  <base-card>\r\n    <base-card-title>\r\n      <h2 class=\"mdl-card__title-text\">Browser Statistics</h2>\r\n    </base-card-title>\r\n    <base-card-body>\r\n      <app-browser-statistics-chart></app-browser-statistics-chart>\r\n    </base-card-body>\r\n  </base-card>\r\n</div>\r\n\r\n<div class=\"mdl-cell mdl-cell--3-col-desktop mdl-cell--6-col-tablet mdl-cell--2-col-phone\">\r\n  <base-card>\r\n    <base-card-title>\r\n      <h2 class=\"mdl-card__title-text\">Country Statistics</h2>\r\n    </base-card-title>\r\n    <base-card-body>\r\n      <app-country-statistics-chart></app-country-statistics-chart>\r\n    </base-card-body>\r\n  </base-card>\r\n</div>\r\n\r\n<div class=\"mdl-cell mdl-cell--6-col-desktop mdl-cell--12-col-tablet mdl-cell--12-col-phone\">\r\n  <base-card>\r\n    <base-card-title>\r\n    </base-card-title>\r\n    <base-card-body>\r\n      <app-discrete-bar-chart></app-discrete-bar-chart>\r\n    </base-card-body>\r\n  </base-card>\r\n</div>\r\n\r\n<div class=\"mdl-cell mdl-cell--6-col-desktop mdl-cell--6-col-tablet mdl-cell--12-col-phone\">\r\n  <base-card>\r\n    <base-card-title>\r\n      <h2 class=\"mdl-card__title-text\">Startup Financing Cycle</h2>\r\n    </base-card-title>\r\n    <base-card-body>\r\n      <app-line-chart-1></app-line-chart-1>\r\n    </base-card-body>\r\n  </base-card>\r\n</div>\r\n\r\n<div class=\"mdl-cell mdl-cell--6-col-desktop mdl-cell--6-col-tablet mdl-cell--12-col-phone\">\r\n  <base-card>\r\n    <base-card-title>\r\n      <h2 class=\"mdl-card__title-text\">Startup Financing Cycle</h2>\r\n    </base-card-title>\r\n    <base-card-body>\r\n      <app-line-chart-2></app-line-chart-2>\r\n    </base-card-body>\r\n  </base-card>\r\n</div>\r\n\r\n<div class=\"mdl-cell mdl-cell--6-col-desktop mdl-cell--6-col-tablet mdl-cell--12-col-phone\">\r\n  <base-card>\r\n    <base-card-title>\r\n    </base-card-title>\r\n    <base-card-body>\r\n      <app-line-plus-bar-chart></app-line-plus-bar-chart>\r\n    </base-card-body>\r\n  </base-card>\r\n</div>\r\n\r\n<div class=\"mdl-cell mdl-cell--6-col-desktop mdl-cell--6-col-tablet mdl-cell--12-col-phone\">\r\n  <base-card>\r\n    <base-card-title>\r\n    </base-card-title>\r\n    <base-card-body>\r\n      <app-stacked-bar-chart></app-stacked-bar-chart>\r\n    </base-card-body>\r\n  </base-card>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/pages/charts/charts.component.scss":
/*!****************************************************!*\
  !*** ./src/app/pages/charts/charts.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/*------------------------------------*\\\n    $CONTENTS\n\\*------------------------------------*/\n/**\n * STYLE GUIDE VARIABLES------------------Declarations of Sass variables\n * -----Typography\n * -----Colors\n * -----Textfield\n * -----Switch\n * -----Spinner\n * -----Radio\n * -----Menu\n * -----List\n * -----Layout\n * -----Icon toggles\n * -----Footer\n * -----Column\n * -----Checkbox\n * -----Card\n * -----Button\n * -----Animation\n * -----Progress\n * -----Badge\n * -----Shadows\n * -----Grid\n * -----Data table\n * -----Dialog\n * -----Snackbar\n * -----Tooltip\n * -----Chip\n *\n * Even though all variables have the `!default` directive, most of them\n * should not be changed as they are dependent one another. This can cause\n * visual distortions (like alignment issues) that are hard to track down\n * and fix.\n */\n/* ==========  TYPOGRAPHY  ========== */\n/* We're splitting fonts into \"preferred\" and \"performance\" in order to optimize\n   page loading. For important text, such as the body, we want it to load\n   immediately and not wait for the web font load, whereas for other sections,\n   such as headers and titles, we're OK with things taking a bit longer to load.\n   We do have some optional classes and parameters in the mixins, in case you\n   definitely want to make sure you're using the preferred font and don't mind\n   the performance hit.\n   We should be able to improve on this once CSS Font Loading L3 becomes more\n   widely available.\n*/\n/* ==========  COLORS  ========== */\n/**\n*\n* Material design color palettes.\n* @see http://www.google.com/design/spec/style/color.html\n*\n**/\n/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/* ==========  Color Palettes  ========== */\n/* colors.scss */\n/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/* ==========  IMAGES  ========== */\n/* ==========  Color & Themes  ========== */\n/* ==========  Typography  ========== */\n/* ==========  Components  ========== */\n/* ==========  Standard Buttons  ========== */\n/* ==========  Icon Toggles  ========== */\n/* ==========  Radio Buttons  ========== */\n/* ==========  Ripple effect  ========== */\n/* ==========  Layout  ========== */\n/* ==========  Content Tabs  ========== */\n/* ==========  Checkboxes  ========== */\n/* ==========  Switches  ========== */\n/* ==========  Spinner  ========== */\n/* ==========  Text fields  ========== */\n/* ==========  Card  ========== */\n/* ==========  Sliders ========== */\n/* ========== Progress ========== */\n/* ==========  List ========== */\n/* ==========  Item ========== */\n/* ==========  Dropdown menu ========== */\n/* ==========  Tooltips  ========== */\n/* ==========  Footer  ========== */\n/* TEXTFIELD */\n/* SWITCH */\n/* SPINNER */\n/* RADIO */\n/* MENU */\n/* LIST */\n/* LAYOUT */\n/* ICON TOGGLE */\n/* FOOTER */\n/*mega-footer*/\n/*mini-footer*/\n/* CHECKBOX */\n/* CARD */\n/* Card dimensions */\n/* Cover image */\n/* BUTTON */\n/**\n *\n * Dimensions\n *\n */\n/* ANIMATION */\n/* PROGRESS */\n/* BADGE */\n/* SHADOWS */\n/* GRID */\n/* DATA TABLE */\n/* DIALOG */\n/* SNACKBAR */\n/* TOOLTIP */\n/* CHIP */\n/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/* Typography */\n/* Shadows */\n/* Animations */\n/* Dialog */\n/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/* ==========  Color Palettes  ========== */\n/* colors.scss */\n/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/* ==========  Color Palettes  ========== */\n/* colors.scss */\n/* ==========  IMAGES  ========== */\n/* ==========  Color & Themes  ========== */\n.text-color--smoke {\n  color: #666; }\n.color--gray {\n  background-color: #444 !important; }\n.color--dark-gray {\n  background-color: #333; }\n.color--smooth-gray {\n  background-color: #999 !important; }\n.text-color--smooth-gray {\n  color: #999 !important; }\n.color--red {\n  background-color: #f44336 !important; }\n.color-text--red {\n  color: #f44336 !important; }\n.color--orange {\n  background-color: #ffc107 !important; }\n.color-text--orange {\n  color: #ffc107 !important; }\n.color--amber {\n  background-color: #ff9800 !important; }\n.color-text--amber {\n  color: #ff9800 !important; }\n.color--green {\n  background-color: #00d45a !important; }\n.color-text--green {\n  color: #00d45a !important; }\n.color--light-blue {\n  background-color: #03a9f4 !important; }\n.color-text--light-blue {\n  color: #03a9f4 !important; }\n.color--purple {\n  background-color: #7726d3 !important; }\n.color-text--purple {\n  color: #7726d3 !important; }\n.color--teal {\n  background-color: #00bcd4 !important; }\n.color-text--teal {\n  color: #00bcd4 !important; }\n/* ==========  Typography  ========== */\n/* ==========  Components  ========== */\n/* ==========  Standard Buttons  ========== */\n/* ==========  Icon Toggles  ========== */\n/* ==========  Radio Buttons  ========== */\n/* ==========  Ripple effect  ========== */\n/* ==========  Layout  ========== */\n/* ==========  Content Tabs  ========== */\n/* ==========  Checkboxes  ========== */\n/* ==========  Switches  ========== */\n/* ==========  Spinner  ========== */\n/* ==========  Text fields  ========== */\n/* ==========  Card  ========== */\n/* ==========  Sliders ========== */\n/* ========== Progress ========== */\n/* ==========  List ========== */\n/* ==========  Item ========== */\n/* ==========  Dropdown menu ========== */\n/* ==========  Tooltips  ========== */\n/* ==========  Footer  ========== */\n/* TEXTFIELD */\n/* SWITCH */\n/* SPINNER */\n/* RADIO */\n/* MENU */\n/* LIST */\n/* LAYOUT */\n/* ICON */\n/* ICON TOGGLE */\n/* FOOTER */\n/* mega-footer */\n/* mini-footer */\n/* CHECKBOX */\n/* CARD */\n/* Card dimensions */\n/* Cover image */\n/* BUTTON */\n/* ANIMATION */\n/* PROGRESS */\n/* BADGE */\n/* SHADOWS */\n/* GRID */\n/* DATA TABLE */\n/* TOOLTIP */\n/* WIDGETS & COMPONENTS */\n/* Trending */\n/* label */\n/* charts */\n/* employer form */\n/* row */\n/* scroll */\n.charts .chart1__container,\n.charts .chart2__container,\n.charts .pie-chart__container,\n.charts .discrete-bar-chart__container,\n.dashboard .chart1__container,\n.dashboard .chart2__container,\n.dashboard .pie-chart__container,\n.dashboard .discrete-bar-chart__container {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-around;\n  align-items: center;\n  min-height: 228px; }\n.charts .chart1__container svg,\n  .charts .chart2__container svg,\n  .charts .pie-chart__container svg,\n  .charts .discrete-bar-chart__container svg,\n  .dashboard .chart1__container svg,\n  .dashboard .chart2__container svg,\n  .dashboard .pie-chart__container svg,\n  .dashboard .discrete-bar-chart__container svg {\n    min-height: 200px;\n    max-width: 180px; }\n.charts .chart1__container svg .nvd3.nv-pie path,\n    .charts .chart2__container svg .nvd3.nv-pie path,\n    .charts .pie-chart__container svg .nvd3.nv-pie path,\n    .charts .discrete-bar-chart__container svg .nvd3.nv-pie path,\n    .dashboard .chart1__container svg .nvd3.nv-pie path,\n    .dashboard .chart2__container svg .nvd3.nv-pie path,\n    .dashboard .pie-chart__container svg .nvd3.nv-pie path,\n    .dashboard .discrete-bar-chart__container svg .nvd3.nv-pie path {\n      fill-opacity: 1;\n      stroke-width: 0; }\n.charts .chart1__container svg .nvd3.nv-pie .nv-pie-title,\n    .charts .chart2__container svg .nvd3.nv-pie .nv-pie-title,\n    .charts .pie-chart__container svg .nvd3.nv-pie .nv-pie-title,\n    .charts .discrete-bar-chart__container svg .nvd3.nv-pie .nv-pie-title,\n    .dashboard .chart1__container svg .nvd3.nv-pie .nv-pie-title,\n    .dashboard .chart2__container svg .nvd3.nv-pie .nv-pie-title,\n    .dashboard .pie-chart__container svg .nvd3.nv-pie .nv-pie-title,\n    .dashboard .discrete-bar-chart__container svg .nvd3.nv-pie .nv-pie-title {\n      font-family: \"Roboto\", \"Helvetica\", \"Arial\", sans-serif;\n      fill: #fff;\n      font-weight: 300;\n      font-size: 22px !important; }\n.charts .chart1__container .legend,\n  .charts .chart2__container .legend,\n  .charts .pie-chart__container .legend,\n  .charts .discrete-bar-chart__container .legend,\n  .dashboard .chart1__container .legend,\n  .dashboard .chart2__container .legend,\n  .dashboard .pie-chart__container .legend,\n  .dashboard .discrete-bar-chart__container .legend {\n    max-width: 140px; }\n.charts .nvd3 text,\n.dashboard .nvd3 text {\n  font: normal 12px Arial, Helvetica, sans-serif;\n  fill: #fff !important; }\n.charts .chart1__container .nv-label text,\n.dashboard .chart1__container .nv-label text {\n  fill: #fff !important; }\n.charts .discrete-bar-chart__container .nv-controlsWrap .nv-legend-symbol,\n.charts .line-plus-bar-chart__container .nv-controlsWrap .nv-legend-symbol,\n.charts .stacked-bar-chart__container .nv-controlsWrap .nv-legend-symbol,\n.dashboard .discrete-bar-chart__container .nv-controlsWrap .nv-legend-symbol,\n.dashboard .line-plus-bar-chart__container .nv-controlsWrap .nv-legend-symbol,\n.dashboard .stacked-bar-chart__container .nv-controlsWrap .nv-legend-symbol {\n  fill: #00bcd4 !important;\n  stroke: #00bcd4 !important; }\n.charts .discrete-bar-chart__container .nv-group,\n.charts .line-plus-bar-chart__container .nv-group,\n.charts .stacked-bar-chart__container .nv-group,\n.dashboard .discrete-bar-chart__container .nv-group,\n.dashboard .line-plus-bar-chart__container .nv-group,\n.dashboard .stacked-bar-chart__container .nv-group {\n  fill-opacity: 0.9 !important; }\n.charts .discrete-bar-chart__container .nv-axis text,\n.charts .line-plus-bar-chart__container .nv-axis text,\n.charts .stacked-bar-chart__container .nv-axis text,\n.dashboard .discrete-bar-chart__container .nv-axis text,\n.dashboard .line-plus-bar-chart__container .nv-axis text,\n.dashboard .stacked-bar-chart__container .nv-axis text {\n  fill: #fff;\n  opacity: 0.5 !important; }\n.charts .discrete-bar-chart__container .nv-axis .domain,\n.charts .discrete-bar-chart__container .nv-axis .nv-zeroLine,\n.charts .line-plus-bar-chart__container .nv-axis .domain,\n.charts .line-plus-bar-chart__container .nv-axis .nv-zeroLine,\n.charts .stacked-bar-chart__container .nv-axis .domain,\n.charts .stacked-bar-chart__container .nv-axis .nv-zeroLine,\n.dashboard .discrete-bar-chart__container .nv-axis .domain,\n.dashboard .discrete-bar-chart__container .nv-axis .nv-zeroLine,\n.dashboard .line-plus-bar-chart__container .nv-axis .domain,\n.dashboard .line-plus-bar-chart__container .nv-axis .nv-zeroLine,\n.dashboard .stacked-bar-chart__container .nv-axis .domain,\n.dashboard .stacked-bar-chart__container .nv-axis .nv-zeroLine {\n  stroke: #fff;\n  opacity: 0.5; }\n.charts .discrete-bar-chart__container .nv-axis .tick line,\n.charts .line-plus-bar-chart__container .nv-axis .tick line,\n.charts .stacked-bar-chart__container .nv-axis .tick line,\n.dashboard .discrete-bar-chart__container .nv-axis .tick line,\n.dashboard .line-plus-bar-chart__container .nv-axis .tick line,\n.dashboard .stacked-bar-chart__container .nv-axis .tick line {\n  opacity: 0.1 !important; }\n.charts .discrete-bar-chart__container .nv-legend-text,\n.charts .line-plus-bar-chart__container .nv-legend-text,\n.charts .stacked-bar-chart__container .nv-legend-text,\n.dashboard .discrete-bar-chart__container .nv-legend-text,\n.dashboard .line-plus-bar-chart__container .nv-legend-text,\n.dashboard .stacked-bar-chart__container .nv-legend-text {\n  opacity: 0.5; }\n.charts .discrete-bar-chart__container,\n.dashboard .discrete-bar-chart__container {\n  height: 100%; }\n.charts .discrete-bar-chart__container svg,\n  .dashboard .discrete-bar-chart__container svg {\n    height: 240px;\n    max-width: calc(100% - 140px); }\n.charts .discrete-bar-chart__container svg .nv-bar text,\n    .dashboard .discrete-bar-chart__container svg .nv-bar text {\n      fill: #fff !important;\n      opacity: 0.9; }\n.charts .discrete-bar-chart__container svg .nv-axis.nv-x text,\n    .dashboard .discrete-bar-chart__container svg .nv-axis.nv-x text {\n      display: none; }\n.charts .discrete-bar-chart__container svg .nv-axis.nv-y .tick:nth-child(2n) text,\n    .dashboard .discrete-bar-chart__container svg .nv-axis.nv-y .tick:nth-child(2n) text {\n      display: none; }\n.charts .line-plus-bar-chart__container svg,\n.charts .line-plus-bar-chart__container svg .nv-linePlusBar,\n.charts .stacked-bar-chart__container svg,\n.charts .stacked-bar-chart__container svg .nv-linePlusBar,\n.dashboard .line-plus-bar-chart__container svg,\n.dashboard .line-plus-bar-chart__container svg .nv-linePlusBar,\n.dashboard .stacked-bar-chart__container svg,\n.dashboard .stacked-bar-chart__container svg .nv-linePlusBar {\n  height: 250px; }\n"

/***/ }),

/***/ "./src/app/pages/charts/charts.component.ts":
/*!**************************************************!*\
  !*** ./src/app/pages/charts/charts.component.ts ***!
  \**************************************************/
/*! exports provided: ChartsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartsComponent", function() { return ChartsComponent; });
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


var ChartsComponent = /** @class */ (function (_super) {
    __extends(ChartsComponent, _super);
    function ChartsComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.mdlGrid = true;
        _this.charts = true;
        return _this;
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])('class.mdl-grid'),
        __metadata("design:type", Object)
    ], ChartsComponent.prototype, "mdlGrid", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])('class.charts'),
        __metadata("design:type", Object)
    ], ChartsComponent.prototype, "charts", void 0);
    ChartsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-charts',
            styles: [__webpack_require__(/*! ./charts.component.scss */ "./src/app/pages/charts/charts.component.scss")],
            template: __webpack_require__(/*! ./charts.component.html */ "./src/app/pages/charts/charts.component.html"),
        })
    ], ChartsComponent);
    return ChartsComponent;
}(theme_components_upgradable__WEBPACK_IMPORTED_MODULE_1__["UpgradableComponent"]));



/***/ }),

/***/ "./src/app/pages/charts/charts.module.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/charts/charts.module.ts ***!
  \***********************************************/
/*! exports provided: ChartsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartsModule", function() { return ChartsModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! theme */ "./src/theme/index.ts");
/* harmony import */ var _browser_statistics_chart__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./browser-statistics-chart */ "./src/app/pages/charts/browser-statistics-chart/index.ts");
/* harmony import */ var _charts_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./charts.component */ "./src/app/pages/charts/charts.component.ts");
/* harmony import */ var _country_statistics_chart__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./country-statistics-chart */ "./src/app/pages/charts/country-statistics-chart/index.ts");
/* harmony import */ var _discrete_bar_chart__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./discrete-bar-chart */ "./src/app/pages/charts/discrete-bar-chart/index.ts");
/* harmony import */ var _line_chart_1__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./line-chart-1 */ "./src/app/pages/charts/line-chart-1/index.ts");
/* harmony import */ var _line_chart_2__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./line-chart-2 */ "./src/app/pages/charts/line-chart-2/index.ts");
/* harmony import */ var _line_plus_bar_chart__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./line-plus-bar-chart */ "./src/app/pages/charts/line-plus-bar-chart/index.ts");
/* harmony import */ var _stacked_bar_chart__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./stacked-bar-chart */ "./src/app/pages/charts/stacked-bar-chart/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var ChartsModule = /** @class */ (function () {
    function ChartsModule() {
    }
    ChartsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                theme__WEBPACK_IMPORTED_MODULE_3__["ThemeModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            ],
            declarations: [
                _charts_component__WEBPACK_IMPORTED_MODULE_5__["ChartsComponent"],
                _browser_statistics_chart__WEBPACK_IMPORTED_MODULE_4__["BrowserStatisticsChartComponent"],
                _line_chart_1__WEBPACK_IMPORTED_MODULE_8__["LineChart1Component"],
                _line_chart_2__WEBPACK_IMPORTED_MODULE_9__["LineChart2Component"],
                _country_statistics_chart__WEBPACK_IMPORTED_MODULE_6__["CountryStatisticsChartComponent"],
                _discrete_bar_chart__WEBPACK_IMPORTED_MODULE_7__["DiscreteBarChartComponent"],
                _stacked_bar_chart__WEBPACK_IMPORTED_MODULE_11__["StackedBarChartComponent"],
                _line_plus_bar_chart__WEBPACK_IMPORTED_MODULE_10__["LinePlusBarChartComponent"],
            ],
            exports: [
                _country_statistics_chart__WEBPACK_IMPORTED_MODULE_6__["CountryStatisticsChartComponent"],
            ],
        })
    ], ChartsModule);
    return ChartsModule;
}());



/***/ }),

/***/ "./src/app/pages/charts/country-statistics-chart/country-statistics-chart.component.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/pages/charts/country-statistics-chart/country-statistics-chart.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: CountryStatisticsChartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CountryStatisticsChartComponent", function() { return CountryStatisticsChartComponent; });
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3 */ "./node_modules/d3/d3.js");
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(d3__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var nvd3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! nvd3 */ "./node_modules/nvd3/build/nv.d3.js");
/* harmony import */ var nvd3__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nvd3__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var theme_components_pie_chart__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! theme/components/pie-chart */ "./src/theme/components/pie-chart/index.ts");
/* harmony import */ var _country_statistics_chart_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./country-statistics-chart.service */ "./src/app/pages/charts/country-statistics-chart/country-statistics-chart.service.ts");
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





var CountryStatisticsChartComponent = /** @class */ (function (_super) {
    __extends(CountryStatisticsChartComponent, _super);
    function CountryStatisticsChartComponent(el, countryStatisticsChartService) {
        var _this = _super.call(this) || this;
        _this.el = el;
        _this.countryStatisticsChartService = countryStatisticsChartService;
        return _this;
    }
    CountryStatisticsChartComponent.prototype.ngOnInit = function () {
        var COLORS = {
            red: '#f44336',
            lightBlue: '#03a9f4',
            orange: '#ffc107',
            amber: '#ff9800',
            teal: '#00bcd4',
            purple: '#7726d3',
            green: '#00d45a',
            rowBgColor: '#4a4a4a',
        };
        var container2 = d3__WEBPACK_IMPORTED_MODULE_0__["select"](this.el.nativeElement);
        if (container2[0][0]) {
            var colors_1 = [
                COLORS.purple,
                COLORS.red,
                COLORS.orange,
                COLORS.teal,
                COLORS.lightBlue,
            ];
            var data_1 = this.countryStatisticsChartService.getCountryStatistics();
            nvd3__WEBPACK_IMPORTED_MODULE_1__["addGraph"](function () {
                var innerRadius = 0.06;
                var outerRadius = 1.02;
                var pieChart = nvd3__WEBPACK_IMPORTED_MODULE_1__["models"].pieChart()
                    .x(function (d) { return d.key; })
                    .y(function (d) { return d.y; })
                    .showLabels(false)
                    .donut(true)
                    .growOnHover(true)
                    .padAngle(.04)
                    .cornerRadius(0)
                    .margin({ left: 0, right: 0, top: 0, bottom: 0 })
                    .color(colors_1)
                    .arcsRadius([{ inner: innerRadius, outer: outerRadius },
                    { inner: innerRadius, outer: outerRadius },
                    { inner: innerRadius, outer: outerRadius },
                    { inner: innerRadius, outer: outerRadius },
                    { inner: innerRadius, outer: outerRadius },
                ])
                    .showLegend(false)
                    .title('0%');
                pieChart.tooltip.enabled(true)
                    .hideDelay(0)
                    .headerEnabled(false)
                    .contentGenerator(function (d) {
                    if (d === null) {
                        return '';
                    }
                    d3__WEBPACK_IMPORTED_MODULE_0__["selectAll"]('.nvtooltip').classed('mdl-tooltip', true);
                    return d.data.y + '%';
                });
                container2.append('div')
                    .append('svg')
                    .datum(data_1)
                    .transition().duration(1200)
                    .call(pieChart);
                var h = 0;
                var i = 0.08;
                var sum = 0;
                data_1.forEach(function (item) {
                    sum = sum + item.y;
                });
                var timer = setInterval(animatePie, 30, data_1);
                function animatePie() {
                    if (innerRadius < 0.86) {
                        pieChart.arcsRadius([{ inner: innerRadius, outer: outerRadius },
                            { inner: innerRadius, outer: outerRadius },
                            { inner: innerRadius, outer: outerRadius },
                            { inner: innerRadius, outer: outerRadius },
                            { inner: innerRadius, outer: outerRadius },
                        ])
                            .title(h + '%')
                            .update();
                        innerRadius += i;
                        h += 10;
                    }
                    else {
                        innerRadius = 0.86;
                        pieChart.arcsRadius([{ inner: innerRadius, outer: outerRadius },
                            { inner: innerRadius, outer: outerRadius },
                            { inner: innerRadius, outer: outerRadius },
                            { inner: innerRadius, outer: outerRadius },
                            { inner: innerRadius, outer: outerRadius },
                        ])
                            .update();
                        clearInterval(timer);
                    }
                }
                var color = d3__WEBPACK_IMPORTED_MODULE_0__["scale"].ordinal().range(colors_1);
                var legend = container2.append('div')
                    .attr('class', 'legend')
                    .selectAll('.legend__item')
                    .data(data_1)
                    .enter()
                    .append('div')
                    .attr('class', 'legend__item');
                legend.append('div')
                    .attr('class', 'legend__mark pull-left')
                    .style('background-color', (function (d) { return color(d.key); }));
                legend.append('div')
                    .attr('class', 'legend__text')
                    .text(function (d) { return d.key; });
                return pieChart;
            });
        }
    };
    CountryStatisticsChartComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-country-statistics-chart',
            styles: [__webpack_require__(/*! ../../../../theme/components/pie-chart/pie-chart.component.scss */ "./src/theme/components/pie-chart/pie-chart.component.scss")],
            template: "",
            providers: [_country_statistics_chart_service__WEBPACK_IMPORTED_MODULE_4__["CountryStatisticsChartService"]],
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"],
            _country_statistics_chart_service__WEBPACK_IMPORTED_MODULE_4__["CountryStatisticsChartService"]])
    ], CountryStatisticsChartComponent);
    return CountryStatisticsChartComponent;
}(theme_components_pie_chart__WEBPACK_IMPORTED_MODULE_3__["PieChartComponent"]));



/***/ }),

/***/ "./src/app/pages/charts/country-statistics-chart/country-statistics-chart.service.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/pages/charts/country-statistics-chart/country-statistics-chart.service.ts ***!
  \*******************************************************************************************/
/*! exports provided: CountryStatisticsChartService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CountryStatisticsChartService", function() { return CountryStatisticsChartService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var CountryStatisticsChartService = /** @class */ (function () {
    function CountryStatisticsChartService() {
    }
    CountryStatisticsChartService.prototype.getCountryStatistics = function () {
        return [
            {
                key: 'United States',
                y: 31,
            },
            {
                key: 'Belarus',
                y: 26,
            },
            {
                key: 'Italy',
                y: 18,
            },
            {
                key: 'France',
                y: 15,
            },
            {
                key: 'Other',
                y: 10,
            },
        ];
    };
    CountryStatisticsChartService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], CountryStatisticsChartService);
    return CountryStatisticsChartService;
}());



/***/ }),

/***/ "./src/app/pages/charts/country-statistics-chart/index.ts":
/*!****************************************************************!*\
  !*** ./src/app/pages/charts/country-statistics-chart/index.ts ***!
  \****************************************************************/
/*! exports provided: CountryStatisticsChartComponent, CountryStatisticsChartService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _country_statistics_chart_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./country-statistics-chart.component */ "./src/app/pages/charts/country-statistics-chart/country-statistics-chart.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CountryStatisticsChartComponent", function() { return _country_statistics_chart_component__WEBPACK_IMPORTED_MODULE_0__["CountryStatisticsChartComponent"]; });

/* harmony import */ var _country_statistics_chart_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./country-statistics-chart.service */ "./src/app/pages/charts/country-statistics-chart/country-statistics-chart.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CountryStatisticsChartService", function() { return _country_statistics_chart_service__WEBPACK_IMPORTED_MODULE_1__["CountryStatisticsChartService"]; });





/***/ }),

/***/ "./src/app/pages/charts/discrete-bar-chart/discrete-bar-chart.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/pages/charts/discrete-bar-chart/discrete-bar-chart.component.scss ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/*------------------------------------*\\\n    $CONTENTS\n\\*------------------------------------*/\n/**\n * STYLE GUIDE VARIABLES------------------Declarations of Sass variables\n * -----Typography\n * -----Colors\n * -----Textfield\n * -----Switch\n * -----Spinner\n * -----Radio\n * -----Menu\n * -----List\n * -----Layout\n * -----Icon toggles\n * -----Footer\n * -----Column\n * -----Checkbox\n * -----Card\n * -----Button\n * -----Animation\n * -----Progress\n * -----Badge\n * -----Shadows\n * -----Grid\n * -----Data table\n * -----Dialog\n * -----Snackbar\n * -----Tooltip\n * -----Chip\n *\n * Even though all variables have the `!default` directive, most of them\n * should not be changed as they are dependent one another. This can cause\n * visual distortions (like alignment issues) that are hard to track down\n * and fix.\n */\n/* ==========  TYPOGRAPHY  ========== */\n/* We're splitting fonts into \"preferred\" and \"performance\" in order to optimize\n   page loading. For important text, such as the body, we want it to load\n   immediately and not wait for the web font load, whereas for other sections,\n   such as headers and titles, we're OK with things taking a bit longer to load.\n   We do have some optional classes and parameters in the mixins, in case you\n   definitely want to make sure you're using the preferred font and don't mind\n   the performance hit.\n   We should be able to improve on this once CSS Font Loading L3 becomes more\n   widely available.\n*/\n/* ==========  COLORS  ========== */\n/**\n*\n* Material design color palettes.\n* @see http://www.google.com/design/spec/style/color.html\n*\n**/\n/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/* ==========  Color Palettes  ========== */\n/* colors.scss */\n/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/* ==========  IMAGES  ========== */\n/* ==========  Color & Themes  ========== */\n/* ==========  Typography  ========== */\n/* ==========  Components  ========== */\n/* ==========  Standard Buttons  ========== */\n/* ==========  Icon Toggles  ========== */\n/* ==========  Radio Buttons  ========== */\n/* ==========  Ripple effect  ========== */\n/* ==========  Layout  ========== */\n/* ==========  Content Tabs  ========== */\n/* ==========  Checkboxes  ========== */\n/* ==========  Switches  ========== */\n/* ==========  Spinner  ========== */\n/* ==========  Text fields  ========== */\n/* ==========  Card  ========== */\n/* ==========  Sliders ========== */\n/* ========== Progress ========== */\n/* ==========  List ========== */\n/* ==========  Item ========== */\n/* ==========  Dropdown menu ========== */\n/* ==========  Tooltips  ========== */\n/* ==========  Footer  ========== */\n/* TEXTFIELD */\n/* SWITCH */\n/* SPINNER */\n/* RADIO */\n/* MENU */\n/* LIST */\n/* LAYOUT */\n/* ICON TOGGLE */\n/* FOOTER */\n/*mega-footer*/\n/*mini-footer*/\n/* CHECKBOX */\n/* CARD */\n/* Card dimensions */\n/* Cover image */\n/* BUTTON */\n/**\n *\n * Dimensions\n *\n */\n/* ANIMATION */\n/* PROGRESS */\n/* BADGE */\n/* SHADOWS */\n/* GRID */\n/* DATA TABLE */\n/* DIALOG */\n/* SNACKBAR */\n/* TOOLTIP */\n/* CHIP */\n/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/* Typography */\n/* Shadows */\n/* Animations */\n/* Dialog */\n/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/* ==========  Color Palettes  ========== */\n/* colors.scss */\n/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/* ==========  Color Palettes  ========== */\n/* colors.scss */\n/* ==========  IMAGES  ========== */\n/* ==========  Color & Themes  ========== */\n.text-color--smoke {\n  color: #666; }\n.color--gray {\n  background-color: #444 !important; }\n.color--dark-gray {\n  background-color: #333; }\n.color--smooth-gray {\n  background-color: #999 !important; }\n.text-color--smooth-gray {\n  color: #999 !important; }\n.color--red {\n  background-color: #f44336 !important; }\n.color-text--red {\n  color: #f44336 !important; }\n.color--orange {\n  background-color: #ffc107 !important; }\n.color-text--orange {\n  color: #ffc107 !important; }\n.color--amber {\n  background-color: #ff9800 !important; }\n.color-text--amber {\n  color: #ff9800 !important; }\n.color--green {\n  background-color: #00d45a !important; }\n.color-text--green {\n  color: #00d45a !important; }\n.color--light-blue {\n  background-color: #03a9f4 !important; }\n.color-text--light-blue {\n  color: #03a9f4 !important; }\n.color--purple {\n  background-color: #7726d3 !important; }\n.color-text--purple {\n  color: #7726d3 !important; }\n.color--teal {\n  background-color: #00bcd4 !important; }\n.color-text--teal {\n  color: #00bcd4 !important; }\n/* ==========  Typography  ========== */\n/* ==========  Components  ========== */\n/* ==========  Standard Buttons  ========== */\n/* ==========  Icon Toggles  ========== */\n/* ==========  Radio Buttons  ========== */\n/* ==========  Ripple effect  ========== */\n/* ==========  Layout  ========== */\n/* ==========  Content Tabs  ========== */\n/* ==========  Checkboxes  ========== */\n/* ==========  Switches  ========== */\n/* ==========  Spinner  ========== */\n/* ==========  Text fields  ========== */\n/* ==========  Card  ========== */\n/* ==========  Sliders ========== */\n/* ========== Progress ========== */\n/* ==========  List ========== */\n/* ==========  Item ========== */\n/* ==========  Dropdown menu ========== */\n/* ==========  Tooltips  ========== */\n/* ==========  Footer  ========== */\n/* TEXTFIELD */\n/* SWITCH */\n/* SPINNER */\n/* RADIO */\n/* MENU */\n/* LIST */\n/* LAYOUT */\n/* ICON */\n/* ICON TOGGLE */\n/* FOOTER */\n/* mega-footer */\n/* mini-footer */\n/* CHECKBOX */\n/* CARD */\n/* Card dimensions */\n/* Cover image */\n/* BUTTON */\n/* ANIMATION */\n/* PROGRESS */\n/* BADGE */\n/* SHADOWS */\n/* GRID */\n/* DATA TABLE */\n/* TOOLTIP */\n/* WIDGETS & COMPONENTS */\n/* Trending */\n/* label */\n/* charts */\n/* employer form */\n/* row */\n/* scroll */\n.discrete-bar-chart__container {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-around;\n  align-items: center;\n  min-height: 228px;\n  height: 100%; }\n.discrete-bar-chart__container .nv-axis text {\n    fill: #fff;\n    opacity: 0.5 !important; }\n.discrete-bar-chart__container .nv-axis .domain,\n  .discrete-bar-chart__container .nv-axis .nv-zeroLine {\n    stroke: #fff;\n    opacity: 0.5; }\n.discrete-bar-chart__container .nv-axis .tick line {\n    opacity: 0.1 !important; }\n.discrete-bar-chart__container svg {\n    min-height: 200px;\n    max-width: calc(100% - 140px);\n    height: 240px; }\n.discrete-bar-chart__container svg .nvd3.nv-pie path {\n      fill-opacity: 1;\n      stroke-width: 0; }\n.discrete-bar-chart__container svg .nvd3.nv-pie .nv-pie-title {\n      font-family: \"Roboto\", \"Helvetica\", \"Arial\", sans-serif;\n      fill: #fff;\n      font-weight: 300;\n      font-size: 22px !important; }\n.discrete-bar-chart__container svg .nv-bar text {\n      fill: #fff !important;\n      opacity: 0.9; }\n.discrete-bar-chart__container svg .nv-axis.nv-x text {\n      display: none; }\n.discrete-bar-chart__container svg .nv-axis.nv-y .tick:nth-child(2n) text {\n      display: none; }\n.discrete-bar-chart__container .legend {\n    max-width: 140px; }\n.discrete-bar-chart__container .nv-controlsWrap .nv-legend-symbol {\n    fill: #00bcd4 !important;\n    stroke: #00bcd4 !important; }\n.discrete-bar-chart__container .nv-group {\n    fill-opacity: 0.9 !important; }\n.discrete-bar-chart__container .nv-legend-text {\n    opacity: 0.5; }\n"

/***/ }),

/***/ "./src/app/pages/charts/discrete-bar-chart/discrete-bar-chart.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/pages/charts/discrete-bar-chart/discrete-bar-chart.component.ts ***!
  \*********************************************************************************/
/*! exports provided: DiscreteBarChartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiscreteBarChartComponent", function() { return DiscreteBarChartComponent; });
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3 */ "./node_modules/d3/d3.js");
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(d3__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var nvd3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! nvd3 */ "./node_modules/nvd3/build/nv.d3.js");
/* harmony import */ var nvd3__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nvd3__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _discrete_bar_chart_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./discrete-bar-chart.service */ "./src/app/pages/charts/discrete-bar-chart/discrete-bar-chart.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DiscreteBarChartComponent = /** @class */ (function () {
    function DiscreteBarChartComponent(discreteBarChartService, el) {
        this.discreteBarChartService = discreteBarChartService;
        this.el = el;
        this.discreteBarChartContainer = true;
    }
    DiscreteBarChartComponent.prototype.ngOnInit = function () {
        var container = d3__WEBPACK_IMPORTED_MODULE_0__["select"](this.el.nativeElement);
        if (container[0][0]) {
            var colors_1 = [
                '#7726d3',
                '#ff5252',
                '#ffc107',
                '#00bcd4',
                '#00d45a',
                '#51a8f9',
                '#ff1bb9',
            ];
            var data_1 = [{
                    key: 'Cumulative Return',
                    values: this.discreteBarChartService.getCumulativeReturn(),
                }];
            nvd3__WEBPACK_IMPORTED_MODULE_1__["addGraph"](function () {
                var chart = nvd3__WEBPACK_IMPORTED_MODULE_1__["models"].discreteBarChart()
                    .x(function (d) { return d.label; })
                    .y(function (d) { return d.value; })
                    .yDomain([-12, 37])
                    .color(colors_1)
                    .margin({ left: 40, right: 30, top: 10, bottom: 10 })
                    .showValues(true)
                    .showLegend(false)
                    .rectClass('bar');
                chart.tooltip.enabled(true)
                    .hideDelay(0)
                    .headerEnabled(false)
                    .contentGenerator(function (d) {
                    if (d === null) {
                        return '';
                    }
                    d3__WEBPACK_IMPORTED_MODULE_0__["selectAll"]('.nvtooltip').classed('mdl-tooltip', true);
                    return d.data.label;
                });
                chart.yAxis
                    .showMaxMin(false)
                    .ticks(10);
                container.append('svg')
                    .datum(data_1)
                    .transition().duration(1200)
                    .call(chart);
                nvd3__WEBPACK_IMPORTED_MODULE_1__["utils"].windowResize(chart.update);
                var color = d3__WEBPACK_IMPORTED_MODULE_0__["scale"].ordinal().range(colors_1);
                var legend = container.append('div')
                    .attr('class', 'legend')
                    .selectAll('.legend__item')
                    .data(data_1[0].values)
                    .enter()
                    .append('div')
                    .attr('class', 'legend__item');
                legend.append('div')
                    .attr('class', 'legend__mark pull-left')
                    .style('background-color', (function (d) { return color(d.label); }));
                legend.append('div')
                    .attr('class', 'legend__text')
                    .text(function (d) { return d.label; });
                return chart;
            });
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["HostBinding"])('class.discrete-bar-chart__container'),
        __metadata("design:type", Object)
    ], DiscreteBarChartComponent.prototype, "discreteBarChartContainer", void 0);
    DiscreteBarChartComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-discrete-bar-chart',
            styles: [__webpack_require__(/*! ./discrete-bar-chart.component.scss */ "./src/app/pages/charts/discrete-bar-chart/discrete-bar-chart.component.scss")],
            template: "",
            providers: [_discrete_bar_chart_service__WEBPACK_IMPORTED_MODULE_3__["DiscreteBarChartService"]],
        }),
        __metadata("design:paramtypes", [_discrete_bar_chart_service__WEBPACK_IMPORTED_MODULE_3__["DiscreteBarChartService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]])
    ], DiscreteBarChartComponent);
    return DiscreteBarChartComponent;
}());



/***/ }),

/***/ "./src/app/pages/charts/discrete-bar-chart/discrete-bar-chart.service.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/charts/discrete-bar-chart/discrete-bar-chart.service.ts ***!
  \*******************************************************************************/
/*! exports provided: DiscreteBarChartService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiscreteBarChartService", function() { return DiscreteBarChartService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var DiscreteBarChartService = /** @class */ (function () {
    function DiscreteBarChartService() {
    }
    DiscreteBarChartService.prototype.getCumulativeReturn = function () {
        return [
            {
                label: 'Option 1',
                value: 22,
            },
            {
                label: 'Option 2',
                value: 31,
            },
            {
                label: 'Option 3',
                value: -5,
            },
            {
                label: 'Option 4',
                value: 16,
            },
            {
                label: 'Option 5',
                value: 19,
            },
            {
                label: 'Option 6',
                value: 26,
            },
            {
                label: 'Option 7',
                value: 9,
            },
        ];
    };
    DiscreteBarChartService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], DiscreteBarChartService);
    return DiscreteBarChartService;
}());



/***/ }),

/***/ "./src/app/pages/charts/discrete-bar-chart/index.ts":
/*!**********************************************************!*\
  !*** ./src/app/pages/charts/discrete-bar-chart/index.ts ***!
  \**********************************************************/
/*! exports provided: DiscreteBarChartComponent, DiscreteBarChartService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _discrete_bar_chart_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./discrete-bar-chart.component */ "./src/app/pages/charts/discrete-bar-chart/discrete-bar-chart.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DiscreteBarChartComponent", function() { return _discrete_bar_chart_component__WEBPACK_IMPORTED_MODULE_0__["DiscreteBarChartComponent"]; });

/* harmony import */ var _discrete_bar_chart_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./discrete-bar-chart.service */ "./src/app/pages/charts/discrete-bar-chart/discrete-bar-chart.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DiscreteBarChartService", function() { return _discrete_bar_chart_service__WEBPACK_IMPORTED_MODULE_1__["DiscreteBarChartService"]; });





/***/ }),

/***/ "./src/app/pages/charts/index.ts":
/*!***************************************!*\
  !*** ./src/app/pages/charts/index.ts ***!
  \***************************************/
/*! exports provided: ChartsComponent, ChartsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _charts_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./charts.component */ "./src/app/pages/charts/charts.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ChartsComponent", function() { return _charts_component__WEBPACK_IMPORTED_MODULE_0__["ChartsComponent"]; });

/* harmony import */ var _charts_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./charts.module */ "./src/app/pages/charts/charts.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ChartsModule", function() { return _charts_module__WEBPACK_IMPORTED_MODULE_1__["ChartsModule"]; });





/***/ }),

/***/ "./src/app/pages/charts/line-chart-1/index.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/charts/line-chart-1/index.ts ***!
  \****************************************************/
/*! exports provided: LineChart1Component, LineChart1Service */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _line_chart_1_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./line-chart-1.component */ "./src/app/pages/charts/line-chart-1/line-chart-1.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LineChart1Component", function() { return _line_chart_1_component__WEBPACK_IMPORTED_MODULE_0__["LineChart1Component"]; });

/* harmony import */ var _line_chart_1_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./line-chart-1.service */ "./src/app/pages/charts/line-chart-1/line-chart-1.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LineChart1Service", function() { return _line_chart_1_service__WEBPACK_IMPORTED_MODULE_1__["LineChart1Service"]; });





/***/ }),

/***/ "./src/app/pages/charts/line-chart-1/line-chart-1.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/pages/charts/line-chart-1/line-chart-1.component.ts ***!
  \*********************************************************************/
/*! exports provided: LineChart1Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LineChart1Component", function() { return LineChart1Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var theme_components_line_chart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! theme/components/line-chart */ "./src/theme/components/line-chart/index.ts");
/* harmony import */ var _line_chart_1_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./line-chart-1.service */ "./src/app/pages/charts/line-chart-1/line-chart-1.service.ts");
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
var __read = (undefined && undefined.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (undefined && undefined.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};



var LineChart1Component = /** @class */ (function (_super) {
    __extends(LineChart1Component, _super);
    function LineChart1Component(el, lineChart1Service) {
        var _this = _super.call(this, el) || this;
        _this.lineChart1Service = lineChart1Service;
        _this.xAxis = 'X';
        _this.yAxis = 'Y';
        _this.maxX = 10;
        _this.afterConfigure();
        _this.animatedData = [
            {
                values: [],
                key: 'Sin(x)',
                color: '#03a9f4',
                fillOpacity: 0.00001,
                area: true,
            },
            {
                values: [],
                key: 'Cos(x+10)+1/2',
                color: '#f44336',
                fillOpacity: 0.00001,
                area: true,
            },
            {
                values: [],
                key: 'Cos(x)+1',
                color: '#7726d3',
                fillOpacity: 0.00001,
                area: true,
            },
        ];
        _this.rawData = [
            lineChart1Service.getSinGraph,
            lineChart1Service.getFirstComplexGraph,
            lineChart1Service.getSecondComplexGraph,
        ]
            .map(function (f) { return f.bind(lineChart1Service); })
            .map(function (f) { return __spread(f(0, _this.maxX + 1, _this.xStep)); });
        return _this;
    }
    LineChart1Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-line-chart-1',
            styles: [__webpack_require__(/*! ../../../../theme/components/line-chart/line-chart.component.scss */ "./src/theme/components/line-chart/line-chart.component.scss")],
            template: "",
            providers: [_line_chart_1_service__WEBPACK_IMPORTED_MODULE_2__["LineChart1Service"]],
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"],
            _line_chart_1_service__WEBPACK_IMPORTED_MODULE_2__["LineChart1Service"]])
    ], LineChart1Component);
    return LineChart1Component;
}(theme_components_line_chart__WEBPACK_IMPORTED_MODULE_1__["LineChartComponent"]));



/***/ }),

/***/ "./src/app/pages/charts/line-chart-1/line-chart-1.service.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/charts/line-chart-1/line-chart-1.service.ts ***!
  \*******************************************************************/
/*! exports provided: LineChart1Service */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LineChart1Service", function() { return LineChart1Service; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};

var LineChart1Service = /** @class */ (function () {
    function LineChart1Service() {
    }
    LineChart1Service.prototype.firstComplexFunction = function (x) {
        return Math.cos(x + 10) + 0.5;
    };
    LineChart1Service.prototype.secondComplexFunction = function (x) {
        return Math.cos(x) + 1;
    };
    LineChart1Service.prototype.getSinGraph = function (from, to, step) {
        var x;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    x = from;
                    _a.label = 1;
                case 1: return [4 /*yield*/, ({ x: x, y: Math.sin(x) })];
                case 2:
                    _a.sent();
                    _a.label = 3;
                case 3:
                    if ((x += step) < to) return [3 /*break*/, 1];
                    _a.label = 4;
                case 4: return [2 /*return*/];
            }
        });
    };
    LineChart1Service.prototype.getFirstComplexGraph = function (from, to, step) {
        var x;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    x = from;
                    _a.label = 1;
                case 1: return [4 /*yield*/, ({ x: x, y: this.firstComplexFunction(x) })];
                case 2:
                    _a.sent();
                    _a.label = 3;
                case 3:
                    if ((x += step) < to) return [3 /*break*/, 1];
                    _a.label = 4;
                case 4: return [2 /*return*/];
            }
        });
    };
    LineChart1Service.prototype.getSecondComplexGraph = function (from, to, step) {
        var x;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    x = from;
                    _a.label = 1;
                case 1: return [4 /*yield*/, ({ x: x, y: this.secondComplexFunction(x) })];
                case 2:
                    _a.sent();
                    _a.label = 3;
                case 3:
                    if ((x += step) < to) return [3 /*break*/, 1];
                    _a.label = 4;
                case 4: return [2 /*return*/];
            }
        });
    };
    LineChart1Service = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], LineChart1Service);
    return LineChart1Service;
}());



/***/ }),

/***/ "./src/app/pages/charts/line-chart-2/index.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/charts/line-chart-2/index.ts ***!
  \****************************************************/
/*! exports provided: LineChart2Component, LineChart2Service */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _line_chart_2_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./line-chart-2.component */ "./src/app/pages/charts/line-chart-2/line-chart-2.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LineChart2Component", function() { return _line_chart_2_component__WEBPACK_IMPORTED_MODULE_0__["LineChart2Component"]; });

/* harmony import */ var _line_chart_2_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./line-chart-2.service */ "./src/app/pages/charts/line-chart-2/line-chart-2.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LineChart2Service", function() { return _line_chart_2_service__WEBPACK_IMPORTED_MODULE_1__["LineChart2Service"]; });





/***/ }),

/***/ "./src/app/pages/charts/line-chart-2/line-chart-2.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/pages/charts/line-chart-2/line-chart-2.component.ts ***!
  \*********************************************************************/
/*! exports provided: LineChart2Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LineChart2Component", function() { return LineChart2Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var theme_components_line_chart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! theme/components/line-chart */ "./src/theme/components/line-chart/index.ts");
/* harmony import */ var _line_chart_2_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./line-chart-2.service */ "./src/app/pages/charts/line-chart-2/line-chart-2.service.ts");
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
var __read = (undefined && undefined.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (undefined && undefined.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};



var LineChart2Component = /** @class */ (function (_super) {
    __extends(LineChart2Component, _super);
    function LineChart2Component(el, lineChart2Service) {
        var _this = _super.call(this, el) || this;
        _this.lineChart2Service = lineChart2Service;
        _this.xAxis = 'X';
        _this.yAxis = 'Y';
        _this.maxX = 14;
        _this.afterConfigure();
        _this.animatedData = [
            {
                values: [],
                key: 'Teal graph',
                color: '#00bcd4',
                fillOpacity: 0.00001,
                area: true,
            },
            {
                values: [],
                key: 'Orange graph',
                color: '#ffc107',
                fillOpacity: 0.00001,
                area: true,
            },
            {
                values: [],
                key: 'Green graph',
                color: '#00d45a',
                fillOpacity: 0.00001,
            },
        ];
        _this.rawData = [
            lineChart2Service.getTealGraph,
            lineChart2Service.getOrangeGraph,
            lineChart2Service.getGreenGraph,
        ]
            .map(function (f) { return f.bind(lineChart2Service); })
            .map(function (f) { return __spread(f(0, _this.maxX + 1, _this.xStep)); });
        return _this;
    }
    LineChart2Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-line-chart-2',
            styles: [__webpack_require__(/*! ../../../../theme/components/line-chart/line-chart.component.scss */ "./src/theme/components/line-chart/line-chart.component.scss")],
            template: "",
            providers: [_line_chart_2_service__WEBPACK_IMPORTED_MODULE_2__["LineChart2Service"]],
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"],
            _line_chart_2_service__WEBPACK_IMPORTED_MODULE_2__["LineChart2Service"]])
    ], LineChart2Component);
    return LineChart2Component;
}(theme_components_line_chart__WEBPACK_IMPORTED_MODULE_1__["LineChartComponent"]));



/***/ }),

/***/ "./src/app/pages/charts/line-chart-2/line-chart-2.service.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/charts/line-chart-2/line-chart-2.service.ts ***!
  \*******************************************************************/
/*! exports provided: LineChart2Service */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LineChart2Service", function() { return LineChart2Service; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};

var LineChart2Service = /** @class */ (function () {
    function LineChart2Service() {
    }
    LineChart2Service.prototype.tealFunction = function (x) {
        if (x < 7) {
            return Math.random() * 0.2 * x;
        }
        return (Math.random() * 0.1 + 0.2) * x - 1;
    };
    LineChart2Service.prototype.orangeFunction = function (x) {
        if (x < 10) {
            return -Math.random() * 1.5 + 2.5;
        }
        return 1.5;
    };
    LineChart2Service.prototype.greenFunction = function (x) {
        if ((x + 1) % 4 === 0) {
            return Math.random() * 1.5 + 0.6;
        }
        return -Math.random() * 0.1 - 0.6;
    };
    LineChart2Service.prototype.getTealGraph = function (from, to, step) {
        var x;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    x = from;
                    _a.label = 1;
                case 1: return [4 /*yield*/, ({ x: x, y: this.tealFunction(x) })];
                case 2:
                    _a.sent();
                    _a.label = 3;
                case 3:
                    if ((x += step) < to) return [3 /*break*/, 1];
                    _a.label = 4;
                case 4: return [2 /*return*/];
            }
        });
    };
    LineChart2Service.prototype.getOrangeGraph = function (from, to, step) {
        var x;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    x = from;
                    _a.label = 1;
                case 1: return [4 /*yield*/, ({ x: x, y: this.orangeFunction(x) })];
                case 2:
                    _a.sent();
                    _a.label = 3;
                case 3:
                    if ((x += step) < to) return [3 /*break*/, 1];
                    _a.label = 4;
                case 4: return [2 /*return*/];
            }
        });
    };
    LineChart2Service.prototype.getGreenGraph = function (from, to, step) {
        var x;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    x = from;
                    _a.label = 1;
                case 1: return [4 /*yield*/, ({ x: x, y: this.greenFunction(x) })];
                case 2:
                    _a.sent();
                    _a.label = 3;
                case 3:
                    if ((x += step) < to) return [3 /*break*/, 1];
                    _a.label = 4;
                case 4: return [2 /*return*/];
            }
        });
    };
    LineChart2Service = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], LineChart2Service);
    return LineChart2Service;
}());



/***/ }),

/***/ "./src/app/pages/charts/line-plus-bar-chart/index.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/charts/line-plus-bar-chart/index.ts ***!
  \***********************************************************/
/*! exports provided: LinePlusBarChartComponent, LinePlusBarChartService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _line_plus_bar_chart_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./line-plus-bar-chart.component */ "./src/app/pages/charts/line-plus-bar-chart/line-plus-bar-chart.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LinePlusBarChartComponent", function() { return _line_plus_bar_chart_component__WEBPACK_IMPORTED_MODULE_0__["LinePlusBarChartComponent"]; });

/* harmony import */ var _line_plus_bar_chart_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./line-plus-bar-chart.service */ "./src/app/pages/charts/line-plus-bar-chart/line-plus-bar-chart.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LinePlusBarChartService", function() { return _line_plus_bar_chart_service__WEBPACK_IMPORTED_MODULE_1__["LinePlusBarChartService"]; });





/***/ }),

/***/ "./src/app/pages/charts/line-plus-bar-chart/line-plus-bar-chart.component.scss":
/*!*************************************************************************************!*\
  !*** ./src/app/pages/charts/line-plus-bar-chart/line-plus-bar-chart.component.scss ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/*------------------------------------*\\\n    $CONTENTS\n\\*------------------------------------*/\n/**\n * STYLE GUIDE VARIABLES------------------Declarations of Sass variables\n * -----Typography\n * -----Colors\n * -----Textfield\n * -----Switch\n * -----Spinner\n * -----Radio\n * -----Menu\n * -----List\n * -----Layout\n * -----Icon toggles\n * -----Footer\n * -----Column\n * -----Checkbox\n * -----Card\n * -----Button\n * -----Animation\n * -----Progress\n * -----Badge\n * -----Shadows\n * -----Grid\n * -----Data table\n * -----Dialog\n * -----Snackbar\n * -----Tooltip\n * -----Chip\n *\n * Even though all variables have the `!default` directive, most of them\n * should not be changed as they are dependent one another. This can cause\n * visual distortions (like alignment issues) that are hard to track down\n * and fix.\n */\n/* ==========  TYPOGRAPHY  ========== */\n/* We're splitting fonts into \"preferred\" and \"performance\" in order to optimize\n   page loading. For important text, such as the body, we want it to load\n   immediately and not wait for the web font load, whereas for other sections,\n   such as headers and titles, we're OK with things taking a bit longer to load.\n   We do have some optional classes and parameters in the mixins, in case you\n   definitely want to make sure you're using the preferred font and don't mind\n   the performance hit.\n   We should be able to improve on this once CSS Font Loading L3 becomes more\n   widely available.\n*/\n/* ==========  COLORS  ========== */\n/**\n*\n* Material design color palettes.\n* @see http://www.google.com/design/spec/style/color.html\n*\n**/\n/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/* ==========  Color Palettes  ========== */\n/* colors.scss */\n/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/* ==========  IMAGES  ========== */\n/* ==========  Color & Themes  ========== */\n/* ==========  Typography  ========== */\n/* ==========  Components  ========== */\n/* ==========  Standard Buttons  ========== */\n/* ==========  Icon Toggles  ========== */\n/* ==========  Radio Buttons  ========== */\n/* ==========  Ripple effect  ========== */\n/* ==========  Layout  ========== */\n/* ==========  Content Tabs  ========== */\n/* ==========  Checkboxes  ========== */\n/* ==========  Switches  ========== */\n/* ==========  Spinner  ========== */\n/* ==========  Text fields  ========== */\n/* ==========  Card  ========== */\n/* ==========  Sliders ========== */\n/* ========== Progress ========== */\n/* ==========  List ========== */\n/* ==========  Item ========== */\n/* ==========  Dropdown menu ========== */\n/* ==========  Tooltips  ========== */\n/* ==========  Footer  ========== */\n/* TEXTFIELD */\n/* SWITCH */\n/* SPINNER */\n/* RADIO */\n/* MENU */\n/* LIST */\n/* LAYOUT */\n/* ICON TOGGLE */\n/* FOOTER */\n/*mega-footer*/\n/*mini-footer*/\n/* CHECKBOX */\n/* CARD */\n/* Card dimensions */\n/* Cover image */\n/* BUTTON */\n/**\n *\n * Dimensions\n *\n */\n/* ANIMATION */\n/* PROGRESS */\n/* BADGE */\n/* SHADOWS */\n/* GRID */\n/* DATA TABLE */\n/* DIALOG */\n/* SNACKBAR */\n/* TOOLTIP */\n/* CHIP */\n/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/* Typography */\n/* Shadows */\n/* Animations */\n/* Dialog */\n/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/* ==========  Color Palettes  ========== */\n/* colors.scss */\n/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/* ==========  Color Palettes  ========== */\n/* colors.scss */\n/* ==========  IMAGES  ========== */\n/* ==========  Color & Themes  ========== */\n.text-color--smoke {\n  color: #666; }\n.color--gray {\n  background-color: #444 !important; }\n.color--dark-gray {\n  background-color: #333; }\n.color--smooth-gray {\n  background-color: #999 !important; }\n.text-color--smooth-gray {\n  color: #999 !important; }\n.color--red {\n  background-color: #f44336 !important; }\n.color-text--red {\n  color: #f44336 !important; }\n.color--orange {\n  background-color: #ffc107 !important; }\n.color-text--orange {\n  color: #ffc107 !important; }\n.color--amber {\n  background-color: #ff9800 !important; }\n.color-text--amber {\n  color: #ff9800 !important; }\n.color--green {\n  background-color: #00d45a !important; }\n.color-text--green {\n  color: #00d45a !important; }\n.color--light-blue {\n  background-color: #03a9f4 !important; }\n.color-text--light-blue {\n  color: #03a9f4 !important; }\n.color--purple {\n  background-color: #7726d3 !important; }\n.color-text--purple {\n  color: #7726d3 !important; }\n.color--teal {\n  background-color: #00bcd4 !important; }\n.color-text--teal {\n  color: #00bcd4 !important; }\n/* ==========  Typography  ========== */\n/* ==========  Components  ========== */\n/* ==========  Standard Buttons  ========== */\n/* ==========  Icon Toggles  ========== */\n/* ==========  Radio Buttons  ========== */\n/* ==========  Ripple effect  ========== */\n/* ==========  Layout  ========== */\n/* ==========  Content Tabs  ========== */\n/* ==========  Checkboxes  ========== */\n/* ==========  Switches  ========== */\n/* ==========  Spinner  ========== */\n/* ==========  Text fields  ========== */\n/* ==========  Card  ========== */\n/* ==========  Sliders ========== */\n/* ========== Progress ========== */\n/* ==========  List ========== */\n/* ==========  Item ========== */\n/* ==========  Dropdown menu ========== */\n/* ==========  Tooltips  ========== */\n/* ==========  Footer  ========== */\n/* TEXTFIELD */\n/* SWITCH */\n/* SPINNER */\n/* RADIO */\n/* MENU */\n/* LIST */\n/* LAYOUT */\n/* ICON */\n/* ICON TOGGLE */\n/* FOOTER */\n/* mega-footer */\n/* mini-footer */\n/* CHECKBOX */\n/* CARD */\n/* Card dimensions */\n/* Cover image */\n/* BUTTON */\n/* ANIMATION */\n/* PROGRESS */\n/* BADGE */\n/* SHADOWS */\n/* GRID */\n/* DATA TABLE */\n/* TOOLTIP */\n/* WIDGETS & COMPONENTS */\n/* Trending */\n/* label */\n/* charts */\n/* employer form */\n/* row */\n/* scroll */\n.line-plus-bar-chart__container svg,\n.line-plus-bar-chart__container svg .nv-linePlusBar {\n  height: 250px; }\n.line-plus-bar-chart__container .nv-controlsWrap .nv-legend-symbol {\n  fill: #00bcd4 !important;\n  stroke: #00bcd4 !important; }\n.line-plus-bar-chart__container .nv-group {\n  fill-opacity: 0.9 !important; }\n.line-plus-bar-chart__container .nv-axis text {\n  fill: #fff;\n  opacity: 0.5 !important; }\n.line-plus-bar-chart__container .nv-axis .domain,\n.line-plus-bar-chart__container .nv-axis .nv-zeroLine {\n  stroke: #fff;\n  opacity: 0.5; }\n.line-plus-bar-chart__container .nv-axis .tick line {\n  opacity: 0.1 !important; }\n.line-plus-bar-chart__container .nv-legend-text {\n  opacity: 0.5; }\n"

/***/ }),

/***/ "./src/app/pages/charts/line-plus-bar-chart/line-plus-bar-chart.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/pages/charts/line-plus-bar-chart/line-plus-bar-chart.component.ts ***!
  \***********************************************************************************/
/*! exports provided: LinePlusBarChartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LinePlusBarChartComponent", function() { return LinePlusBarChartComponent; });
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3 */ "./node_modules/d3/d3.js");
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(d3__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var nvd3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! nvd3 */ "./node_modules/nvd3/build/nv.d3.js");
/* harmony import */ var nvd3__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nvd3__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _line_plus_bar_chart_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./line-plus-bar-chart.service */ "./src/app/pages/charts/line-plus-bar-chart/line-plus-bar-chart.service.ts");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __read = (undefined && undefined.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (undefined && undefined.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};




var LinePlusBarChartComponent = /** @class */ (function () {
    function LinePlusBarChartComponent(linePlusBarBarChartService, el) {
        this.linePlusBarBarChartService = linePlusBarBarChartService;
        this.el = el;
        this.linePlusBarChartContainer = true;
    }
    LinePlusBarChartComponent.prototype.ngOnInit = function () {
        var _this = this;
        var container = d3__WEBPACK_IMPORTED_MODULE_0__["select"](this.el.nativeElement);
        if (container[0][0]) {
            var data_1 = [
                this.linePlusBarBarChartService.getQuantityGraph,
                this.linePlusBarBarChartService.getPriceGraph,
            ]
                .map(function (f) { return f.bind(_this.linePlusBarBarChartService); })
                .map(function (f) { return __spread(f()); })
                .map(function (values, i) { return (__assign({}, [
                {
                    key: 'Quantity',
                    bar: true,
                    color: '#00bcd4',
                },
                {
                    key: 'Price',
                    color: '#ffc107',
                },
            ][i], { values: values })); });
            nvd3__WEBPACK_IMPORTED_MODULE_1__["addGraph"](function () {
                var chart = nvd3__WEBPACK_IMPORTED_MODULE_1__["models"].linePlusBarChart()
                    .focusEnable(false)
                    .margin({ top: 20, right: 50, bottom: 20, left: 50 })
                    .clipRadius(10)
                    .x(function (d) { return d[0]; })
                    .y(function (d) { return d[1]; });
                chart.legend
                    .margin({ top: 2, bottom: 10 });
                chart.xAxis
                    .showMaxMin(false)
                    .ticks(4)
                    .tickFormat(function (d) { return d3__WEBPACK_IMPORTED_MODULE_0__["time"].format('%x')(new Date(d)); });
                chart.y1Axis
                    .showMaxMin(false)
                    .tickFormat(d3__WEBPACK_IMPORTED_MODULE_0__["format"]('f'));
                chart.y2Axis
                    .showMaxMin(false)
                    .tickFormat(function (d) { return "$" + d3__WEBPACK_IMPORTED_MODULE_0__["format"](',f')(d); });
                chart.tooltip
                    .contentGenerator(function (d) {
                    if (d === null) {
                        return '';
                    }
                    d3__WEBPACK_IMPORTED_MODULE_0__["selectAll"]('.nvtooltip').classed('mdl-tooltip', true);
                    if (d.hasOwnProperty('point')) {
                        return d3__WEBPACK_IMPORTED_MODULE_0__["time"].format('%x')(new Date(d.value)) + '<br>Price: $' + d.series[0].value;
                    }
                    return d3__WEBPACK_IMPORTED_MODULE_0__["time"].format('%x')(new Date(d.value)) + '<br>Quantity: ' + d.series[0].value;
                });
                container.append('svg')
                    .datum(data_1)
                    .transition()
                    .duration(0)
                    .call(chart);
                nvd3__WEBPACK_IMPORTED_MODULE_1__["utils"].windowResize(chart.update);
                chart.update();
                return chart;
            });
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["HostBinding"])('class.line-plus-bar-chart__container'),
        __metadata("design:type", Object)
    ], LinePlusBarChartComponent.prototype, "linePlusBarChartContainer", void 0);
    LinePlusBarChartComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-line-plus-bar-chart',
            styles: [__webpack_require__(/*! ./line-plus-bar-chart.component.scss */ "./src/app/pages/charts/line-plus-bar-chart/line-plus-bar-chart.component.scss")],
            template: "",
            providers: [_line_plus_bar_chart_service__WEBPACK_IMPORTED_MODULE_3__["LinePlusBarChartService"]],
        }),
        __metadata("design:paramtypes", [_line_plus_bar_chart_service__WEBPACK_IMPORTED_MODULE_3__["LinePlusBarChartService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]])
    ], LinePlusBarChartComponent);
    return LinePlusBarChartComponent;
}());



/***/ }),

/***/ "./src/app/pages/charts/line-plus-bar-chart/line-plus-bar-chart.service.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/pages/charts/line-plus-bar-chart/line-plus-bar-chart.service.ts ***!
  \*********************************************************************************/
/*! exports provided: LinePlusBarChartService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LinePlusBarChartService", function() { return LinePlusBarChartService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __values = (undefined && undefined.__values) || function (o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
};

var LinePlusBarChartService = /** @class */ (function () {
    function LinePlusBarChartService() {
    }
    LinePlusBarChartService.prototype.getQuantityGraph = function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [5 /*yield**/, __values([
                        [1136005200000, 1271.0],
                        [1138683600000, 1271.0],
                        [1141102800000, 1271.0],
                        [1143781200000, 1271.0],
                        [1146369600000, 1371.0],
                        [1149048000000, 1471.0],
                        [1151640000000, 1341],
                        [1154318400000, 1350],
                        [1156996800000, 1361],
                        [1159588800000, 3899.0],
                        [1162270800000, 3886.0],
                        [1164862800000, 3836.0],
                        [1167541200000, 3560.0],
                        [1170219600000, 3567.0],
                        [1172638800000, 3560.0],
                        [1175313600000, 2643.0],
                        [1177905600000, 2643.0],
                        [1180584000000, 2643.0],
                        [1183176000000, 2522.0],
                        [1185854400000, 2523.0],
                        [1188532800000, 2522.0],
                        [1191124800000, 2901.0],
                        [1193803200000, 2901.0],
                        [1196398800000, 2901.0],
                        [1199077200000, 2761.0],
                        [1201755600000, 2201.0],
                        [1204261200000, 2201.0],
                        [1206936000000, 2226.0],
                        [1209528000000, 2326.0],
                        [1212206400000, 2286.0],
                        [1214798400000, 2736.0],
                        [1217476800000, 2646.0],
                        [1220155200000, 2736.0],
                        [1222747200000, 2596.0],
                        [1225425600000, 2596.0],
                        [1228021200000, 2596.0],
                        [1230699600000, 1387.0],
                        [1233378000000, 1987.0],
                        [1235797200000, 1987.0],
                        [1238472000000, 1711.0],
                        [1241064000000, 1751.0],
                        [1243742400000, 1756.0],
                        [1246334400000, 1743.0],
                        [1249012800000, 1740.0],
                        [1251691200000, 1740.0],
                        [1254283200000, 1510.0],
                        [1256961600000, 1510.0],
                        [1259557200000, 1510.0],
                        [1262235600000, 1594.0],
                        [1264914000000, 1544.0],
                        [1267333200000, 1594.0],
                        [1270008000000, 1544.0],
                        [1272600000000, 1543.0],
                        [1275278400000, 1584.0],
                        [1277870400000, 1315.0],
                        [1280548800000, 1305.0],
                        [1283227200000, 1315.0],
                        [1285819200000, 1375.0],
                        [1288497600000, 1375.0],
                        [1291093200000, 1331.0],
                        [1293771600000, 1375.0],
                        [1296450000000, 1195.0],
                        [1298869200000, 1154.0],
                        [1301544000000, 1194.0],
                        [1304136000000, 1194.0],
                        [1306814400000, 1195.0],
                        [1309406400000, 1125.0],
                        [1312084800000, 1125.0],
                        [1314763200000, 1245.0],
                        [1317355200000, 475.0],
                        [1320033600000, 470.0],
                        [1322629200000, 470.0],
                        [1325307600000, 690.0],
                        [1327986000000, 690.0],
                        [1330491600000, 690.0],
                        [1333166400000, 514.0],
                        [1335758400000, 514.0],
                    ])];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    };
    LinePlusBarChartService.prototype.getPriceGraph = function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [5 /*yield**/, __values([
                        [1136005200000, 71.89],
                        [1138683600000, 75.51],
                        [1141102800000, 68.49],
                        [1143781200000, 62.72],
                        [1146369600000, 70.39],
                        [1149048000000, 59.77],
                        [1151640000000, 57.27],
                        [1154318400000, 67.96],
                        [1156996800000, 67.85],
                        [1159588800000, 76.98],
                        [1162270800000, 81.08],
                        [1164862800000, 91.66],
                        [1167541200000, 84.84],
                        [1170219600000, 85.73],
                        [1172638800000, 84.61],
                        [1175313600000, 92.91],
                        [1177905600000, 99.8],
                        [1180584000000, 121.191],
                        [1183176000000, 122.04],
                        [1185854400000, 131.76],
                        [1188532800000, 138.48],
                        [1191124800000, 153.47],
                        [1193803200000, 189.95],
                        [1196398800000, 182.22],
                        [1199077200000, 198.08],
                        [1201755600000, 135.36],
                        [1204261200000, 125.02],
                        [1206936000000, 143.5],
                        [1209528000000, 173.95],
                        [1212206400000, 188.75],
                        [1214798400000, 167.44],
                        [1217476800000, 158.95],
                        [1220155200000, 169.53],
                        [1222747200000, 113.66],
                        [1225425600000, 107.59],
                        [1228021200000, 92.67],
                        [1230699600000, 85.35],
                        [1233378000000, 90.13],
                        [1235797200000, 89.31],
                        [1238472000000, 105.12],
                        [1241064000000, 125.83],
                        [1243742400000, 135.81],
                        [1246334400000, 142.43],
                        [1249012800000, 163.39],
                        [1251691200000, 168.21],
                        [1254283200000, 185.35],
                        [1256961600000, 188.5],
                        [1259557200000, 199.91],
                        [1262235600000, 210.732],
                        [1264914000000, 192.063],
                        [1267333200000, 204.62],
                        [1270008000000, 235.0],
                        [1272600000000, 261.09],
                        [1275278400000, 256.88],
                        [1277870400000, 251.53],
                        [1280548800000, 257.25],
                        [1283227200000, 243.1],
                        [1285819200000, 283.75],
                        [1288497600000, 300.98],
                        [1291093200000, 311.15],
                        [1293771600000, 322.56],
                        [1296450000000, 339.32],
                        [1298869200000, 353.21],
                        [1301544000000, 348.5075],
                        [1304136000000, 350.13],
                        [1306814400000, 347.83],
                        [1309406400000, 335.67],
                        [1312084800000, 390.48],
                        [1314763200000, 384.83],
                        [1317355200000, 381.32],
                        [1320033600000, 404.78],
                        [1322629200000, 382.2],
                        [1325307600000, 405.0],
                        [1327986000000, 456.48],
                        [1330491600000, 542.44],
                        [1333166400000, 599.55],
                        [1335758400000, 583.98],
                    ])];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    };
    LinePlusBarChartService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], LinePlusBarChartService);
    return LinePlusBarChartService;
}());



/***/ }),

/***/ "./src/app/pages/charts/stacked-bar-chart/index.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/charts/stacked-bar-chart/index.ts ***!
  \*********************************************************/
/*! exports provided: StackedBarChartComponent, StackedBarChartService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _stacked_bar_chart_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./stacked-bar-chart.component */ "./src/app/pages/charts/stacked-bar-chart/stacked-bar-chart.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StackedBarChartComponent", function() { return _stacked_bar_chart_component__WEBPACK_IMPORTED_MODULE_0__["StackedBarChartComponent"]; });

/* harmony import */ var _stacked_bar_chart_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stacked-bar-chart.service */ "./src/app/pages/charts/stacked-bar-chart/stacked-bar-chart.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StackedBarChartService", function() { return _stacked_bar_chart_service__WEBPACK_IMPORTED_MODULE_1__["StackedBarChartService"]; });





/***/ }),

/***/ "./src/app/pages/charts/stacked-bar-chart/stacked-bar-chart.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/pages/charts/stacked-bar-chart/stacked-bar-chart.component.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/*------------------------------------*\\\n    $CONTENTS\n\\*------------------------------------*/\n/**\n * STYLE GUIDE VARIABLES------------------Declarations of Sass variables\n * -----Typography\n * -----Colors\n * -----Textfield\n * -----Switch\n * -----Spinner\n * -----Radio\n * -----Menu\n * -----List\n * -----Layout\n * -----Icon toggles\n * -----Footer\n * -----Column\n * -----Checkbox\n * -----Card\n * -----Button\n * -----Animation\n * -----Progress\n * -----Badge\n * -----Shadows\n * -----Grid\n * -----Data table\n * -----Dialog\n * -----Snackbar\n * -----Tooltip\n * -----Chip\n *\n * Even though all variables have the `!default` directive, most of them\n * should not be changed as they are dependent one another. This can cause\n * visual distortions (like alignment issues) that are hard to track down\n * and fix.\n */\n/* ==========  TYPOGRAPHY  ========== */\n/* We're splitting fonts into \"preferred\" and \"performance\" in order to optimize\n   page loading. For important text, such as the body, we want it to load\n   immediately and not wait for the web font load, whereas for other sections,\n   such as headers and titles, we're OK with things taking a bit longer to load.\n   We do have some optional classes and parameters in the mixins, in case you\n   definitely want to make sure you're using the preferred font and don't mind\n   the performance hit.\n   We should be able to improve on this once CSS Font Loading L3 becomes more\n   widely available.\n*/\n/* ==========  COLORS  ========== */\n/**\n*\n* Material design color palettes.\n* @see http://www.google.com/design/spec/style/color.html\n*\n**/\n/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/* ==========  Color Palettes  ========== */\n/* colors.scss */\n/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/* ==========  IMAGES  ========== */\n/* ==========  Color & Themes  ========== */\n/* ==========  Typography  ========== */\n/* ==========  Components  ========== */\n/* ==========  Standard Buttons  ========== */\n/* ==========  Icon Toggles  ========== */\n/* ==========  Radio Buttons  ========== */\n/* ==========  Ripple effect  ========== */\n/* ==========  Layout  ========== */\n/* ==========  Content Tabs  ========== */\n/* ==========  Checkboxes  ========== */\n/* ==========  Switches  ========== */\n/* ==========  Spinner  ========== */\n/* ==========  Text fields  ========== */\n/* ==========  Card  ========== */\n/* ==========  Sliders ========== */\n/* ========== Progress ========== */\n/* ==========  List ========== */\n/* ==========  Item ========== */\n/* ==========  Dropdown menu ========== */\n/* ==========  Tooltips  ========== */\n/* ==========  Footer  ========== */\n/* TEXTFIELD */\n/* SWITCH */\n/* SPINNER */\n/* RADIO */\n/* MENU */\n/* LIST */\n/* LAYOUT */\n/* ICON TOGGLE */\n/* FOOTER */\n/*mega-footer*/\n/*mini-footer*/\n/* CHECKBOX */\n/* CARD */\n/* Card dimensions */\n/* Cover image */\n/* BUTTON */\n/**\n *\n * Dimensions\n *\n */\n/* ANIMATION */\n/* PROGRESS */\n/* BADGE */\n/* SHADOWS */\n/* GRID */\n/* DATA TABLE */\n/* DIALOG */\n/* SNACKBAR */\n/* TOOLTIP */\n/* CHIP */\n/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/* Typography */\n/* Shadows */\n/* Animations */\n/* Dialog */\n/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/* ==========  Color Palettes  ========== */\n/* colors.scss */\n/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/* ==========  Color Palettes  ========== */\n/* colors.scss */\n/* ==========  IMAGES  ========== */\n/* ==========  Color & Themes  ========== */\n.text-color--smoke {\n  color: #666; }\n.color--gray {\n  background-color: #444 !important; }\n.color--dark-gray {\n  background-color: #333; }\n.color--smooth-gray {\n  background-color: #999 !important; }\n.text-color--smooth-gray {\n  color: #999 !important; }\n.color--red {\n  background-color: #f44336 !important; }\n.color-text--red {\n  color: #f44336 !important; }\n.color--orange {\n  background-color: #ffc107 !important; }\n.color-text--orange {\n  color: #ffc107 !important; }\n.color--amber {\n  background-color: #ff9800 !important; }\n.color-text--amber {\n  color: #ff9800 !important; }\n.color--green {\n  background-color: #00d45a !important; }\n.color-text--green {\n  color: #00d45a !important; }\n.color--light-blue {\n  background-color: #03a9f4 !important; }\n.color-text--light-blue {\n  color: #03a9f4 !important; }\n.color--purple {\n  background-color: #7726d3 !important; }\n.color-text--purple {\n  color: #7726d3 !important; }\n.color--teal {\n  background-color: #00bcd4 !important; }\n.color-text--teal {\n  color: #00bcd4 !important; }\n/* ==========  Typography  ========== */\n/* ==========  Components  ========== */\n/* ==========  Standard Buttons  ========== */\n/* ==========  Icon Toggles  ========== */\n/* ==========  Radio Buttons  ========== */\n/* ==========  Ripple effect  ========== */\n/* ==========  Layout  ========== */\n/* ==========  Content Tabs  ========== */\n/* ==========  Checkboxes  ========== */\n/* ==========  Switches  ========== */\n/* ==========  Spinner  ========== */\n/* ==========  Text fields  ========== */\n/* ==========  Card  ========== */\n/* ==========  Sliders ========== */\n/* ========== Progress ========== */\n/* ==========  List ========== */\n/* ==========  Item ========== */\n/* ==========  Dropdown menu ========== */\n/* ==========  Tooltips  ========== */\n/* ==========  Footer  ========== */\n/* TEXTFIELD */\n/* SWITCH */\n/* SPINNER */\n/* RADIO */\n/* MENU */\n/* LIST */\n/* LAYOUT */\n/* ICON */\n/* ICON TOGGLE */\n/* FOOTER */\n/* mega-footer */\n/* mini-footer */\n/* CHECKBOX */\n/* CARD */\n/* Card dimensions */\n/* Cover image */\n/* BUTTON */\n/* ANIMATION */\n/* PROGRESS */\n/* BADGE */\n/* SHADOWS */\n/* GRID */\n/* DATA TABLE */\n/* TOOLTIP */\n/* WIDGETS & COMPONENTS */\n/* Trending */\n/* label */\n/* charts */\n/* employer form */\n/* row */\n/* scroll */\n.stacked-bar-chart__container svg,\n.stacked-bar-chart__container svg .nv-linePlusBar {\n  height: 250px; }\n.stacked-bar-chart__container .nv-controlsWrap .nv-legend-symbol {\n  fill: #00bcd4 !important;\n  stroke: #00bcd4 !important; }\n.stacked-bar-chart__container .nv-group {\n  fill-opacity: 0.9 !important; }\n.stacked-bar-chart__container .nv-axis text {\n  fill: #fff;\n  opacity: 0.5 !important; }\n.stacked-bar-chart__container .nv-axis .domain,\n.stacked-bar-chart__container .nv-axis .nv-zeroLine {\n  stroke: #fff;\n  opacity: 0.5; }\n.stacked-bar-chart__container .nv-axis .tick line {\n  opacity: 0.1 !important; }\n.stacked-bar-chart__container .nv-legend-text {\n  opacity: 0.5; }\n"

/***/ }),

/***/ "./src/app/pages/charts/stacked-bar-chart/stacked-bar-chart.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/charts/stacked-bar-chart/stacked-bar-chart.component.ts ***!
  \*******************************************************************************/
/*! exports provided: StackedBarChartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StackedBarChartComponent", function() { return StackedBarChartComponent; });
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3 */ "./node_modules/d3/d3.js");
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(d3__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var nvd3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! nvd3 */ "./node_modules/nvd3/build/nv.d3.js");
/* harmony import */ var nvd3__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nvd3__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _stacked_bar_chart_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./stacked-bar-chart.service */ "./src/app/pages/charts/stacked-bar-chart/stacked-bar-chart.service.ts");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __read = (undefined && undefined.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (undefined && undefined.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};




var StackedBarChartComponent = /** @class */ (function () {
    function StackedBarChartComponent(stackedBarChartService, el) {
        this.stackedBarChartService = stackedBarChartService;
        this.el = el;
        this.stackedBarChartContainer = true;
    }
    StackedBarChartComponent.prototype.ngOnInit = function () {
        var _this = this;
        var container = d3__WEBPACK_IMPORTED_MODULE_0__["select"](this.el.nativeElement);
        if (container[0][0]) {
            var data_1 = [1.2, 1, 1.1]
                .map(function (k) { return __spread(_this.stackedBarChartService.getTestGraph(k)); })
                .map(function (values, i) { return (__assign({}, [
                {
                    key: 'Book1',
                    color: '#00bcd4',
                },
                {
                    key: 'Book2',
                    color: '#ffc107',
                },
                {
                    key: 'Book3',
                    color: '#ff5252',
                },
            ][i], { values: values })); });
            nvd3__WEBPACK_IMPORTED_MODULE_1__["addGraph"](function () {
                var chart = nvd3__WEBPACK_IMPORTED_MODULE_1__["models"].multiBarChart()
                    .margin({ top: 60, right: 20, bottom: 22, left: 50 })
                    .reduceXTicks(true)
                    .rotateLabels(0)
                    .showControls(true)
                    .groupSpacing(0.3)
                    .stacked(true);
                chart.xAxis
                    .showMaxMin(false)
                    .tickSize(10)
                    .ticks(10);
                chart.legend
                    .margin({ top: 2, bottom: 10 });
                chart.controls
                    .margin({ top: 2, right: 0, bottom: 10, left: -18 })
                    .color(['#FF0000', '#00FF00']);
                chart.yAxis
                    .showMaxMin(false)
                    .tickFormat(d3__WEBPACK_IMPORTED_MODULE_0__["format"](',f'));
                chart.tooltip
                    .contentGenerator(function (d) {
                    if (d === null) {
                        return '';
                    }
                    d3__WEBPACK_IMPORTED_MODULE_0__["selectAll"]('.nvtooltip').classed('mdl-tooltip', true);
                    if (d.hasOwnProperty('point')) {
                        return d3__WEBPACK_IMPORTED_MODULE_0__["time"].format('%x')(new Date(d.value)) + '<br>Price: $' + d.series[0].value;
                    }
                    return d.series[0].key + '<br>' + d.value + '<br>' + d.series[0].value;
                });
                container.append('svg')
                    .datum(data_1)
                    .call(chart);
                nvd3__WEBPACK_IMPORTED_MODULE_1__["utils"].windowResize(chart.update);
                return chart;
            });
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["HostBinding"])('class.stacked-bar-chart__container'),
        __metadata("design:type", Object)
    ], StackedBarChartComponent.prototype, "stackedBarChartContainer", void 0);
    StackedBarChartComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-stacked-bar-chart',
            styles: [__webpack_require__(/*! ./stacked-bar-chart.component.scss */ "./src/app/pages/charts/stacked-bar-chart/stacked-bar-chart.component.scss")],
            template: "",
            providers: [_stacked_bar_chart_service__WEBPACK_IMPORTED_MODULE_3__["StackedBarChartService"]],
        }),
        __metadata("design:paramtypes", [_stacked_bar_chart_service__WEBPACK_IMPORTED_MODULE_3__["StackedBarChartService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]])
    ], StackedBarChartComponent);
    return StackedBarChartComponent;
}());



/***/ }),

/***/ "./src/app/pages/charts/stacked-bar-chart/stacked-bar-chart.service.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/charts/stacked-bar-chart/stacked-bar-chart.service.ts ***!
  \*****************************************************************************/
/*! exports provided: StackedBarChartService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StackedBarChartService", function() { return StackedBarChartService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __values = (undefined && undefined.__values) || function (o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
};

var StackedBarChartService = /** @class */ (function () {
    function StackedBarChartService() {
    }
    StackedBarChartService.prototype.testFunction = function (x, k) {
        return Math.round(((Math.random() * 0.15 + 1.15) * (200 - 2 * x) * k) * 1000 / x);
    };
    StackedBarChartService.prototype.getTestGraph = function (k) {
        var _this = this;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [5 /*yield**/, __values(Array(26).fill(undefined)
                        .map(function (_, i) { return 65 + i; })
                        .map(function (code) { return ({
                        x: String.fromCharCode(code),
                        y: _this.testFunction(code, k),
                    }); }))];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    };
    StackedBarChartService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], StackedBarChartService);
    return StackedBarChartService;
}());



/***/ }),

/***/ "./src/app/pages/components/badges/badges.component.html":
/*!***************************************************************!*\
  !*** ./src/app/pages/components/badges/badges.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<base-card>\r\n  <base-card-title>\r\n    <h2 class=\"mdl-card__title-text\">Badges</h2>\r\n  </base-card-title>\r\n  <base-card-body>\r\n    <ul class=\"mdl-list pull-left\">\r\n      <li class=\"mdl-list__item\">\r\n        <span class=\"text-color--gray\">TEXT</span>\r\n      </li>\r\n      <li class=\"mdl-list__item\">\r\n        <small class=\"text-color--gray\">Number</small>\r\n      </li>\r\n      <li class=\"mdl-list__item\">\r\n        <span class=\"mdl-badge\" data-badge=\"4\">Inbox</span>\r\n      </li>\r\n    </ul>\r\n    <ul class=\"mdl-list pull-left\">\r\n      <li class=\"mdl-list__item\"></li>\r\n      <li class=\"mdl-list__item\">\r\n        <small class=\"text-color--gray\">Icon</small>\r\n      </li>\r\n      <li class=\"mdl-list__item\">\r\n        <span class=\"mdl-badge\" data-badge=\"♥\">Mood</span>\r\n      </li>\r\n    </ul>\r\n    <ul class=\"mdl-list pull-left\">\r\n      <li class=\"mdl-list__item\">\r\n        <span class=\"text-color--gray\">ICON</span>\r\n      </li>\r\n      <li class=\"mdl-list__item\">\r\n        <small class=\"text-color--gray\">Number</small>\r\n      </li>\r\n      <li class=\"mdl-list__item\">\r\n        <div class=\"material-icons mdl-badge mdl-badge--overlap badge--colored-red\" data-badge=\"1\">mail_outline</div>\r\n      </li>\r\n    </ul>\r\n    <ul class=\"mdl-list pull-left\">\r\n      <li class=\"mdl-list__item\"></li>\r\n      <li class=\"mdl-list__item\">\r\n        <small class=\"text-color--gray\">Icon</small>\r\n      </li>\r\n      <li class=\"mdl-list__item\">\r\n        <div class=\"material-icons mdl-badge mdl-badge--overlap badge--colored-red\" data-badge=\"♥\">account_circle</div>\r\n      </li>\r\n    </ul>\r\n  </base-card-body>\r\n</base-card>\r\n"

/***/ }),

/***/ "./src/app/pages/components/badges/badges.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/components/badges/badges.component.ts ***!
  \*************************************************************/
/*! exports provided: BadgesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BadgesComponent", function() { return BadgesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var BadgesComponent = /** @class */ (function () {
    function BadgesComponent() {
    }
    BadgesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-badges',
            template: __webpack_require__(/*! ./badges.component.html */ "./src/app/pages/components/badges/badges.component.html"),
        })
    ], BadgesComponent);
    return BadgesComponent;
}());



/***/ }),

/***/ "./src/app/pages/components/badges/index.ts":
/*!**************************************************!*\
  !*** ./src/app/pages/components/badges/index.ts ***!
  \**************************************************/
/*! exports provided: BadgesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _badges_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./badges.component */ "./src/app/pages/components/badges/badges.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BadgesComponent", function() { return _badges_component__WEBPACK_IMPORTED_MODULE_0__["BadgesComponent"]; });




/***/ }),

/***/ "./src/app/pages/components/chips/chips.component.html":
/*!*************************************************************!*\
  !*** ./src/app/pages/components/chips/chips.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<base-card>\r\n  <base-card-title>\r\n    <h2 class=\"mdl-card__title-text\">Chips</h2>\r\n  </base-card-title>\r\n  <base-card-body>\r\n    <ul class=\"mdl-list pull-left\">\r\n      <li class=\"mdl-list__item\">\r\n        <span class=\"text-color--gray\">BASIC CHIP</span>\r\n      </li>\r\n      <li class=\"mdl-list__item\">\r\n        <span class=\"mdl-chip\">\r\n          <span class=\"mdl-chip__text\">Basic Chip</span>\r\n        </span>\r\n      </li>\r\n    </ul>\r\n    <ul class=\"mdl-list pull-left\">\r\n      <li class=\"mdl-list__item\">\r\n        <span class=\"text-color--gray\">DELETABLE CHIP</span>\r\n      </li>\r\n      <li class=\"mdl-list__item\">\r\n        <span class=\"mdl-chip mdl-chip--deletable\">\r\n          <span class=\"mdl-chip__text\">Deletable Chip</span>\r\n          <button type=\"button\" class=\"mdl-chip__action\"><i class=\"material-icons\">cancel</i></button>\r\n        </span>\r\n      </li>\r\n    </ul>\r\n    <ul class=\"mdl-list pull-left\">\r\n      <li class=\"mdl-list__item\">\r\n        <span class=\"text-color--gray\">BUTTON CHIP</span>\r\n      </li>\r\n      <li class=\"mdl-list__item\">\r\n        <button type=\"button\" class=\"mdl-chip color--teal mdl-color-text--white\">\r\n          <span class=\"mdl-chip__text\">Button Chip</span>\r\n        </button>\r\n      </li>\r\n    </ul>\r\n    <ul class=\"mdl-list pull-left\">\r\n      <li class=\"mdl-list__item\">\r\n        <span class=\"text-color--gray\">CONTACT CHIP</span>\r\n      </li>\r\n      <li class=\"mdl-list__item\">\r\n         <span class=\"mdl-chip mdl-chip--contact\">\r\n           <span class=\"mdl-chip__contact color--orange\">A</span>\r\n           <span class=\"mdl-chip__text\">Contact Chip</span>\r\n         </span>\r\n      </li>\r\n    </ul>\r\n    <ul class=\"mdl-list pull-left\">\r\n      <li class=\"mdl-list__item\">\r\n        <span class=\"text-color--gray\">DELETABLE CONTACT CHIP</span>\r\n      </li>\r\n      <li class=\"mdl-list__item\">\r\n        <span class=\"mdl-chip mdl-chip--contact mdl-chip--deletable\">\r\n          <img class=\"mdl-chip__contact\" src=\"assets/images/Icon_header.png\">\r\n          <span class=\"mdl-chip__text\">Tiven Wang</span>\r\n          <a href=\"#\" class=\"mdl-chip__action\"><i class=\"material-icons\">cancel</i></a>\r\n        </span>\r\n      </li>\r\n    </ul>\r\n  </base-card-body>\r\n</base-card>\r\n"

/***/ }),

/***/ "./src/app/pages/components/chips/chips.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/components/chips/chips.component.ts ***!
  \***********************************************************/
/*! exports provided: ChipsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChipsComponent", function() { return ChipsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ChipsComponent = /** @class */ (function () {
    function ChipsComponent() {
    }
    ChipsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-chips',
            template: __webpack_require__(/*! ./chips.component.html */ "./src/app/pages/components/chips/chips.component.html"),
        })
    ], ChipsComponent);
    return ChipsComponent;
}());



/***/ }),

/***/ "./src/app/pages/components/chips/index.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/components/chips/index.ts ***!
  \*************************************************/
/*! exports provided: ChipsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _chips_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chips.component */ "./src/app/pages/components/chips/chips.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ChipsComponent", function() { return _chips_component__WEBPACK_IMPORTED_MODULE_0__["ChipsComponent"]; });




/***/ }),

/***/ "./src/app/pages/components/components.component.html":
/*!************************************************************!*\
  !*** ./src/app/pages/components/components.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"mdl-cell mdl-cell--4-col-desktop mdl-cell--6-col-tablet mdl-cell--4-col-phone\">\r\n  <app-toggles></app-toggles>\r\n</div>\r\n\r\n<div class=\"mdl-cell mdl-cell--4-col-desktop mdl-cell--6-col-tablet mdl-cell--4-col-phone\">\r\n  <app-progress-bars></app-progress-bars>\r\n</div>\r\n\r\n<div class=\"mdl-cell mdl-cell--4-col-desktop mdl-cell--6-col-tablet mdl-cell--4-col-phone\">\r\n  <app-chips></app-chips>\r\n</div>\r\n\r\n<div class=\"mdl-cell mdl-cell--4-col-desktop mdl-cell--6-col-tablet mdl-cell--4-col-phone\">\r\n  <app-sliders></app-sliders>\r\n</div>\r\n\r\n<div class=\"mdl-cell mdl-cell--4-col-desktop mdl-cell--6-col-tablet mdl-cell--4-col-phone\">\r\n  <app-tooltips></app-tooltips>\r\n</div>\r\n\r\n<div class=\"mdl-cell mdl-cell--4-col-desktop mdl-cell--6-col-tablet mdl-cell--4-col-phone\">\r\n  <app-badges></app-badges>\r\n</div>\r\n\r\n<div class=\"mdl-cell mdl-cell--3-col-desktop mdl-cell--6-col-tablet mdl-cell--4-col-phone mdl-cell--top\">\r\n  <base-card>\r\n    <base-card-title>\r\n      <h1 class=\"mdl-card__title-text\">Simple avatar list</h1>\r\n    </base-card-title>\r\n    <base-card-body>\r\n      <ul class=\"mdl-list\">\r\n        <li *ngFor=\"let item of data\" class=\"mdl-list__item\">\r\n          <span class=\"mdl-list__item-primary-content\">\r\n            <div class=\"mdl-list__item-avatar\">\r\n              <img width=\"100%\" src=\"assets/images/{{ item.image }}\">\r\n            </div>\r\n            <span>{{ item.name }}</span>\r\n          </span>\r\n        </li>\r\n      </ul>\r\n    </base-card-body>\r\n  </base-card>\r\n</div>\r\n\r\n<div class=\"mdl-cell mdl-cell--3-col-desktop mdl-cell--6-col-tablet mdl-cell--4-col-phone mdl-cell--top\">\r\n  <base-card>\r\n    <base-card-title>\r\n      <h1 class=\"mdl-card__title-text\">Avatars and actions list</h1>\r\n    </base-card-title>\r\n    <base-card-body>\r\n      <ul class=\"mdl-list\">\r\n        <li *ngFor=\"let item of data\" class=\"mdl-list__item\">\r\n          <span class=\"mdl-list__item-primary-content\">\r\n            <div class=\"mdl-list__item-avatar\">\r\n              <img width=\"100%\" src=\"assets/images/{{ item.image }}\">\r\n            </div>\r\n            <span>{{ item.name }}</span>\r\n          </span>\r\n          <a class=\"mdl-list__item-secondary-action\" href=\"#\"><i class=\"material-icons\">star</i></a>\r\n        </li>\r\n      </ul>\r\n    </base-card-body>\r\n  </base-card>\r\n</div>\r\n\r\n<div class=\"mdl-cell mdl-cell--3-col-desktop mdl-cell--6-col-tablet mdl-cell--4-col-phone mdl-cell--top\">\r\n  <base-card>\r\n    <base-card-title>\r\n      <h1 class=\"mdl-card__title-text\">Avatars and controls list</h1>\r\n    </base-card-title>\r\n    <base-card-body>\r\n      <ul class=\"mdl-list\">\r\n        <li *ngFor=\"let item of data; let i = index\" [ngSwitch]=\"i\" class=\"mdl-list__item\">\r\n          <span class=\"mdl-list__item-primary-content\">\r\n            <div class=\"mdl-list__item-avatar\">\r\n              <img width=\"100%\" src=\"assets/images/{{ item.image }}\">\r\n            </div>\r\n            <span>{{ item.name }}</span>\r\n          </span>\r\n          <span *ngSwitchCase=\"0\" class=\"mdl-list__item-secondary-action\">\r\n            <label class=\"mdl-checkbox checkbox--colored-light-blue mdl-js-checkbox mdl-js-ripple-effect\" for=\"list-checkbox-1\">\r\n              <input type=\"checkbox\" id=\"list-checkbox-1\" class=\"mdl-checkbox__input\" checked/>\r\n            </label>\r\n          </span>\r\n          <span *ngSwitchCase=\"1\" class=\"mdl-list__item-secondary-action\">\r\n            <label class=\"mdl-radio radio--colored-light-blue mdl-js-radio mdl-js-ripple-effect\" for=\"list-option-1\">\r\n              <input type=\"radio\" id=\"list-option-1\" class=\"mdl-radio__button\" name=\"options\" value=\"1\"/>\r\n            </label>\r\n          </span>\r\n          <span *ngSwitchCase=\"2\" class=\"mdl-list__item-secondary-action\">\r\n            <label class=\"mdl-switch switch--colored-light-blue mdl-js-switch mdl-js-ripple-effect\" for=\"list-switch-1\">\r\n              <input type=\"checkbox\" id=\"list-switch-1\" class=\"mdl-switch__input\" checked/>\r\n            </label>\r\n          </span>\r\n        </li>\r\n      </ul>\r\n    </base-card-body>\r\n  </base-card>\r\n</div>\r\n\r\n<div class=\"mdl-cell mdl-cell--3-col-desktop mdl-cell--6-col-tablet mdl-cell--4-col-phone mdl-cell--top\">\r\n  <base-card>\r\n    <base-card-title>\r\n      <h1 class=\"mdl-card__title-text\">Two lines list</h1>\r\n    </base-card-title>\r\n    <base-card-body>\r\n      <ul class=\"mdl-list\">\r\n        <li *ngFor=\"let item of data; let i = index\" class=\"mdl-list__item mdl-list__item--two-line\">\r\n          <span class=\"mdl-list__item-primary-content\">\r\n            <div class=\"mdl-list__item-avatar\">\r\n              <img width=\"100%\" src=\"assets/images/{{ item.image }}\">\r\n            </div>\r\n            <span>{{ item.name }}</span>\r\n            <span class=\"mdl-list__item-sub-title\">{{ item.description }}</span>\r\n          </span>\r\n          <span class=\"mdl-list__item-secondary-content\">\r\n            <span *ngIf=\"i === 0\" class=\"mdl-list__item-secondary-info\">Star</span>\r\n            <a class=\"mdl-list__item-secondary-action\" href=\"#\"><i class=\"material-icons\">star</i></a>\r\n          </span>\r\n        </li>\r\n      </ul>\r\n    </base-card-body>\r\n  </base-card>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/pages/components/components.component.scss":
/*!************************************************************!*\
  !*** ./src/app/pages/components/components.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".ui-components .mdl-card {\n  height: 100%; }\n\n.ui-components .mdl-list__item {\n  padding: 8px 16px; }\n\n.ui-components .mdl-progress {\n  width: 130px; }\n"

/***/ }),

/***/ "./src/app/pages/components/components.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/pages/components/components.component.ts ***!
  \**********************************************************/
/*! exports provided: ComponentsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentsComponent", function() { return ComponentsComponent; });
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


var ComponentsComponent = /** @class */ (function (_super) {
    __extends(ComponentsComponent, _super);
    function ComponentsComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.mdlGrid = true;
        _this.uiComponents = true;
        _this.data = [
            {
                name: 'Nathan Fillion',
                description: 'Malcolm “Mal” Reynolds',
                image: 'nathan-fillion.png',
            },
            {
                name: 'Gina Torres',
                description: 'Zoe Alleyne Washburne',
                image: 'gina-torres.png',
            },
            {
                name: 'Alan Tudyk',
                description: 'Hoban “Wash” Washburne',
                image: 'tudyk.png',
            },
        ];
        return _this;
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])('class.mdl-grid'),
        __metadata("design:type", Object)
    ], ComponentsComponent.prototype, "mdlGrid", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])('class.ui-components'),
        __metadata("design:type", Object)
    ], ComponentsComponent.prototype, "uiComponents", void 0);
    ComponentsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-components',
            template: __webpack_require__(/*! ./components.component.html */ "./src/app/pages/components/components.component.html"),
            styles: [__webpack_require__(/*! ./components.component.scss */ "./src/app/pages/components/components.component.scss")],
        })
    ], ComponentsComponent);
    return ComponentsComponent;
}(theme_components_upgradable__WEBPACK_IMPORTED_MODULE_1__["UpgradableComponent"]));



/***/ }),

/***/ "./src/app/pages/components/components.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/components/components.module.ts ***!
  \*******************************************************/
/*! exports provided: ComponentsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentsModule", function() { return ComponentsModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! theme */ "./src/theme/index.ts");
/* harmony import */ var _badges__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./badges */ "./src/app/pages/components/badges/index.ts");
/* harmony import */ var _chips__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./chips */ "./src/app/pages/components/chips/index.ts");
/* harmony import */ var _components_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components.component */ "./src/app/pages/components/components.component.ts");
/* harmony import */ var _progress_bars__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./progress-bars */ "./src/app/pages/components/progress-bars/index.ts");
/* harmony import */ var _sliders__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./sliders */ "./src/app/pages/components/sliders/index.ts");
/* harmony import */ var _toggles__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./toggles */ "./src/app/pages/components/toggles/index.ts");
/* harmony import */ var _tooltips__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./tooltips */ "./src/app/pages/components/tooltips/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var ComponentsModule = /** @class */ (function () {
    function ComponentsModule() {
    }
    ComponentsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                theme__WEBPACK_IMPORTED_MODULE_3__["ThemeModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            ],
            exports: [
                _components_component__WEBPACK_IMPORTED_MODULE_6__["ComponentsComponent"],
            ],
            declarations: [
                _components_component__WEBPACK_IMPORTED_MODULE_6__["ComponentsComponent"],
                _toggles__WEBPACK_IMPORTED_MODULE_9__["TogglesComponent"],
                _progress_bars__WEBPACK_IMPORTED_MODULE_7__["ProgressBarsComponent"],
                _chips__WEBPACK_IMPORTED_MODULE_5__["ChipsComponent"],
                _sliders__WEBPACK_IMPORTED_MODULE_8__["SlidersComponent"],
                _tooltips__WEBPACK_IMPORTED_MODULE_10__["TooltipsComponent"],
                _badges__WEBPACK_IMPORTED_MODULE_4__["BadgesComponent"],
            ],
            schemas: [
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"],
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["NO_ERRORS_SCHEMA"]
            ]
        })
    ], ComponentsModule);
    return ComponentsModule;
}());



/***/ }),

/***/ "./src/app/pages/components/index.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/components/index.ts ***!
  \*******************************************/
/*! exports provided: ComponentsComponent, ComponentsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components.component */ "./src/app/pages/components/components.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ComponentsComponent", function() { return _components_component__WEBPACK_IMPORTED_MODULE_0__["ComponentsComponent"]; });

/* harmony import */ var _components_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components.module */ "./src/app/pages/components/components.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ComponentsModule", function() { return _components_module__WEBPACK_IMPORTED_MODULE_1__["ComponentsModule"]; });





/***/ }),

/***/ "./src/app/pages/components/progress-bars/index.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/components/progress-bars/index.ts ***!
  \*********************************************************/
/*! exports provided: ProgressBarsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _progress_bars_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./progress-bars.component */ "./src/app/pages/components/progress-bars/progress-bars.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProgressBarsComponent", function() { return _progress_bars_component__WEBPACK_IMPORTED_MODULE_0__["ProgressBarsComponent"]; });




/***/ }),

/***/ "./src/app/pages/components/progress-bars/progress-bars.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/components/progress-bars/progress-bars.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<base-card>\r\n  <base-card-title>\r\n    <h2 class=\"mdl-card__title-text\">Progress bar</h2>\r\n  </base-card-title>\r\n  <base-card-body>\r\n    <ul class=\"mdl-list pull-left\">\r\n      <li class=\"mdl-list__item\">\r\n        <span class=\"text-color--gray\">DEFAULT</span>\r\n      </li>\r\n      <li class=\"mdl-list__item\">\r\n        <base-progress color=\"red\" progress=\"44\"></base-progress>\r\n      </li>\r\n      <li class=\"mdl-list__item\">\r\n        <base-progress color=\"orange\" progress=\"44\"></base-progress>\r\n      </li>\r\n      <li class=\"mdl-list__item\">\r\n        <base-progress color=\"light-blue\" progress=\"86\"></base-progress>\r\n      </li>\r\n      <li class=\"mdl-list__item\">\r\n        <base-progress color=\"purple\" progress=\"66\"></base-progress>\r\n      </li>\r\n    </ul>\r\n    <ul class=\"mdl-list pull-left\">\r\n      <li class=\"mdl-list__item\">\r\n        <span class=\"text-color--gray\">INDETERMINATE</span>\r\n      </li>\r\n      <li class=\"mdl-list__item\">\r\n        <base-progress color=\"red\" indeterminate></base-progress>\r\n      </li>\r\n      <li class=\"mdl-list__item\">\r\n        <base-progress color=\"orange\" indeterminate></base-progress>\r\n      </li>\r\n      <li class=\"mdl-list__item\">\r\n        <base-progress color=\"light-blue\" indeterminate></base-progress>\r\n      </li>\r\n      <li class=\"mdl-list__item\">\r\n        <base-progress color=\"purple\" indeterminate></base-progress>\r\n      </li>\r\n    </ul>\r\n    <ul class=\"mdl-list pull-left\">\r\n      <li class=\"mdl-list__item\">\r\n        <span class=\"text-color--gray\">BUFFERING</span>\r\n      </li>\r\n      <li class=\"mdl-list__item\">\r\n        <base-progress color=\"red\" progress=\"33\" buffer=\"87\"></base-progress>\r\n      </li>\r\n      <li class=\"mdl-list__item\">\r\n        <base-progress color=\"orange\" progress=\"60\" buffer=\"60\"></base-progress>\r\n      </li>\r\n      <li class=\"mdl-list__item\">\r\n        <base-progress color=\"light-blue\" progress=\"50\" buffer=\"60\"></base-progress>\r\n      </li>\r\n      <li class=\"mdl-list__item\">\r\n        <base-progress color=\"purple\" progress=\"13\" buffer=\"77\"></base-progress>\r\n      </li>\r\n    </ul>\r\n  </base-card-body>\r\n</base-card>\r\n"

/***/ }),

/***/ "./src/app/pages/components/progress-bars/progress-bars.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/pages/components/progress-bars/progress-bars.component.ts ***!
  \***************************************************************************/
/*! exports provided: ProgressBarsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgressBarsComponent", function() { return ProgressBarsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ProgressBarsComponent = /** @class */ (function () {
    function ProgressBarsComponent() {
    }
    ProgressBarsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-progress-bars',
            template: __webpack_require__(/*! ./progress-bars.component.html */ "./src/app/pages/components/progress-bars/progress-bars.component.html"),
        })
    ], ProgressBarsComponent);
    return ProgressBarsComponent;
}());



/***/ }),

/***/ "./src/app/pages/components/sliders/index.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/components/sliders/index.ts ***!
  \***************************************************/
/*! exports provided: SlidersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sliders_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sliders.component */ "./src/app/pages/components/sliders/sliders.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SlidersComponent", function() { return _sliders_component__WEBPACK_IMPORTED_MODULE_0__["SlidersComponent"]; });




/***/ }),

/***/ "./src/app/pages/components/sliders/sliders.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/pages/components/sliders/sliders.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<base-card>\r\n  <base-card-title>\r\n    <h2 class=\"mdl-card__title-text\">Sliders</h2>\r\n  </base-card-title>\r\n  <base-card-body>\r\n    <ul class=\"mdl-list pull-left\">\r\n      <li class=\"mdl-list__item\">\r\n        <span class=\"text-color--gray\">DEFAULT SLIDER</span>\r\n      </li>\r\n      <li class=\"mdl-list__item\">\r\n        <input class=\"mdl-slider mdl-js-slider slider--colored-orange\" type=\"range\" min=\"0\" max=\"100\" value=\"0\" tabindex=\"0\">\r\n      </li>\r\n      <li class=\"mdl-list__item\">\r\n        <input class=\"mdl-slider mdl-js-slider slider--colored-green\" type=\"range\" min=\"0\" max=\"100\" value=\"0\" tabindex=\"0\">\r\n      </li>\r\n      <li class=\"mdl-list__item\">\r\n        <input class=\"mdl-slider mdl-js-slider slider--colored-purple\" type=\"range\" min=\"0\" max=\"100\" value=\"0\" tabindex=\"0\">\r\n      </li>\r\n    </ul>\r\n    <ul class=\"mdl-list pull-left\">\r\n      <li class=\"mdl-list__item\">\r\n        <span class=\"text-color--gray\">STARTING VALUE</span>\r\n      </li>\r\n      <li class=\"mdl-list__item\">\r\n        <input class=\"mdl-slider mdl-js-slider slider--colored-red\" type=\"range\" min=\"0\" max=\"100\" value=\"42\" tabindex=\"0\">\r\n      </li>\r\n      <li class=\"mdl-list__item\">\r\n        <input class=\"mdl-slider mdl-js-slider slider--colored-light-blue\" type=\"range\" min=\"0\" max=\"100\" value=\"12\" tabindex=\"0\">\r\n      </li>\r\n      <li class=\"mdl-list__item\">\r\n        <input class=\"mdl-slider mdl-js-slider slider--colored-teal\" type=\"range\" min=\"0\" max=\"100\" value=\"72\" tabindex=\"0\">\r\n      </li>\r\n    </ul>\r\n  </base-card-body>\r\n</base-card>\r\n"

/***/ }),

/***/ "./src/app/pages/components/sliders/sliders.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/components/sliders/sliders.component.ts ***!
  \***************************************************************/
/*! exports provided: SlidersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SlidersComponent", function() { return SlidersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SlidersComponent = /** @class */ (function () {
    function SlidersComponent() {
    }
    SlidersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sliders',
            template: __webpack_require__(/*! ./sliders.component.html */ "./src/app/pages/components/sliders/sliders.component.html"),
        })
    ], SlidersComponent);
    return SlidersComponent;
}());



/***/ }),

/***/ "./src/app/pages/components/toggles/index.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/components/toggles/index.ts ***!
  \***************************************************/
/*! exports provided: TogglesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _toggles_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toggles.component */ "./src/app/pages/components/toggles/toggles.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TogglesComponent", function() { return _toggles_component__WEBPACK_IMPORTED_MODULE_0__["TogglesComponent"]; });




/***/ }),

/***/ "./src/app/pages/components/toggles/toggles.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/pages/components/toggles/toggles.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<base-card>\r\n  <base-card-title>\r\n    <h2 class=\"mdl-card__title-text\">Toggles</h2>\r\n  </base-card-title>\r\n  <base-card-body>\r\n    <ul class=\"mdl-list pull-left\">\r\n      <li class=\"mdl-list__item\">\r\n        <span class=\"text-color--gray\">RADIO BUTTON</span>\r\n      </li>\r\n      <li class=\"mdl-list__item\">\r\n        <label baseRadioButton name=\"options\" value=\"1\" color=\"green\">Apple</label>\r\n      </li>\r\n      <li class=\"mdl-list__item\">\r\n        <label baseRadioButton name=\"options\" value=\"2\" color=\"orange\">Orange</label>\r\n      </li>\r\n      <li class=\"mdl-list__item\">\r\n        <label baseRadioButton name=\"options\" value=\"3\" color=\"purple\">Grapes</label>\r\n      </li>\r\n      <li class=\"mdl-list__item\">\r\n        <label baseRadioButton name=\"options\" value=\"4\" color=\"red\" checked>Cherry</label>\r\n      </li>\r\n    </ul>\r\n    <ul class=\"mdl-list pull-left\">\r\n      <li class=\"mdl-list__item\">\r\n        <span class=\"text-color--gray\">CHECKBOXES</span>\r\n      </li>\r\n      <li class=\"mdl-list__item\">\r\n        <label baseCheckbox color=\"green\">Apple</label>\r\n      </li>\r\n      <li class=\"mdl-list__item\">\r\n        <label baseCheckbox color=\"orange\">Orange</label>\r\n      </li>\r\n      <li class=\"mdl-list__item\">\r\n        <label baseCheckbox color=\"purple\">Grapes</label>\r\n      </li>\r\n      <li class=\"mdl-list__item\">\r\n        <label baseCheckbox color=\"red\" checked>Cherry</label>\r\n      </li>\r\n    </ul>\r\n    <ul class=\"mdl-list pull-left\">\r\n      <li class=\"mdl-list__item\">\r\n        <span class=\"text-color--gray\">SWITCHES</span>\r\n      </li>\r\n      <li class=\"mdl-list__item\">\r\n        <label baseSwitch color=\"green\" checked>Apple</label>\r\n      </li>\r\n      <li class=\"mdl-list__item\">\r\n        <label baseSwitch color=\"orange\">Orange</label>\r\n      </li>\r\n      <li class=\"mdl-list__item\">\r\n        <label baseSwitch color=\"purple\" checked>Grapes</label>\r\n      </li>\r\n      <li class=\"mdl-list__item\">\r\n        <label baseSwitch color=\"red\">Cherry</label>\r\n      </li>\r\n    </ul>\r\n    <ul class=\"mdl-list pull-left\">\r\n      <li class=\"mdl-list__item\">\r\n        <span class=\"text-color--gray\">ICON TOGGLE</span>\r\n      </li>\r\n      <li class=\"mdl-list__item\">\r\n        <label baseIconToggle color=\"red\">format_bold</label>\r\n        <label baseIconToggle color=\"orange\" checked>format_italic</label>\r\n        <label baseIconToggle color=\"green\">format_underlined</label>\r\n      </li>\r\n    </ul>\r\n  </base-card-body>\r\n</base-card>\r\n"

/***/ }),

/***/ "./src/app/pages/components/toggles/toggles.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/components/toggles/toggles.component.ts ***!
  \***************************************************************/
/*! exports provided: TogglesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TogglesComponent", function() { return TogglesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var TogglesComponent = /** @class */ (function () {
    function TogglesComponent() {
    }
    TogglesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-toggles',
            template: __webpack_require__(/*! ./toggles.component.html */ "./src/app/pages/components/toggles/toggles.component.html"),
        })
    ], TogglesComponent);
    return TogglesComponent;
}());



/***/ }),

/***/ "./src/app/pages/components/tooltips/index.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/components/tooltips/index.ts ***!
  \****************************************************/
/*! exports provided: TooltipsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tooltips_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tooltips.component */ "./src/app/pages/components/tooltips/tooltips.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TooltipsComponent", function() { return _tooltips_component__WEBPACK_IMPORTED_MODULE_0__["TooltipsComponent"]; });




/***/ }),

/***/ "./src/app/pages/components/tooltips/tooltips.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/pages/components/tooltips/tooltips.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<base-card>\r\n  <base-card-title>\r\n    <h2 class=\"mdl-card__title-text\">Tooltips</h2>\r\n  </base-card-title>\r\n  <base-card-body>\r\n    <ul class=\"mdl-list pull-left\">\r\n      <li class=\"mdl-list__item\">\r\n        <span class=\"text-color--gray\">SIMPLE</span>\r\n      </li>\r\n      <li class=\"mdl-list__item\">\r\n        <div *baseTooltip=\"'Walk'\" id=\"tt1\" class=\"icon material-icons color-text--green\">directions_run</div>\r\n      </li>\r\n      <li class=\"mdl-list__item\">\r\n        <span class=\"text-color--gray\">LEFT</span>\r\n      </li>\r\n      <li class=\"mdl-list__item\">\r\n        <div *baseTooltip=\"'Left'; position: 'left'\" id=\"tt5\" class=\"icon material-icons\">flight</div>\r\n      </li>\r\n    </ul>\r\n    <ul class=\"mdl-list pull-left\">\r\n      <li class=\"mdl-list__item\">\r\n        <span class=\"text-color--gray\">LARGE</span>\r\n      </li>\r\n      <li class=\"mdl-list__item\">\r\n        <div *baseTooltip=\"'Ride a bike'; large\" id=\"tt2\" class=\"icon material-icons color-text--orange\">directions_bike</div>\r\n      </li>\r\n      <li class=\"mdl-list__item\">\r\n        <span class=\"text-color--gray\">TOP</span>\r\n      </li>\r\n      <li class=\"mdl-list__item\">\r\n        <div *baseTooltip=\"'Top'; position: 'top'\" id=\"tt6\" class=\"icon material-icons\">flight</div>\r\n      </li>\r\n    </ul>\r\n    <ul class=\"mdl-list pull-left\">\r\n      <li class=\"mdl-list__item\">\r\n        <span class=\"text-color--gray\">RICH</span>\r\n      </li>\r\n      <li class=\"mdl-list__item\">\r\n        <div *baseTooltip=\"'Travel by <b>BUS</b>'\" id=\"tt3\" class=\"icon material-icons color-text--red\">directions_bus</div>\r\n      </li>\r\n      <li class=\"mdl-list__item\">\r\n        <span class=\"text-color--gray\">BOTTOM</span>\r\n      </li>\r\n      <li class=\"mdl-list__item\">\r\n        <div *baseTooltip=\"'Bottom'; position: 'bottom'\" id=\"tt7\" class=\"icon material-icons\">flight</div>\r\n      </li>\r\n    </ul>\r\n    <ul class=\"mdl-list pull-left\">\r\n      <li class=\"mdl-list__item\">\r\n        <span class=\"text-color--gray\">MULTIPLY LINES</span>\r\n      </li>\r\n      <li class=\"mdl-list__item\">\r\n        <div *baseTooltip=\"'Sail on<br>a boat'\" id=\"tt4\" class=\"icon material-icons color-text--teal\">directions_boat</div>\r\n      </li>\r\n      <li class=\"mdl-list__item\">\r\n        <span class=\"text-color--gray\">RIGHT</span>\r\n      </li>\r\n      <li class=\"mdl-list__item\">\r\n        <div *baseTooltip=\"'Right'; position: 'right'\" id=\"tt8\" class=\"icon material-icons\">flight</div>\r\n      </li>\r\n    </ul>\r\n  </base-card-body>\r\n</base-card>\r\n"

/***/ }),

/***/ "./src/app/pages/components/tooltips/tooltips.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/components/tooltips/tooltips.component.ts ***!
  \*****************************************************************/
/*! exports provided: TooltipsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TooltipsComponent", function() { return TooltipsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var TooltipsComponent = /** @class */ (function () {
    function TooltipsComponent() {
    }
    TooltipsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-tooltips',
            template: __webpack_require__(/*! ./tooltips.component.html */ "./src/app/pages/components/tooltips/tooltips.component.html"),
        })
    ], TooltipsComponent);
    return TooltipsComponent;
}());



/***/ }),

/***/ "./src/app/pages/dashboard/cotoneaster-card/cotoneaster-card.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/pages/dashboard/cotoneaster-card/cotoneaster-card.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<base-card>\r\n  <base-card-title expanded>\r\n    <h2 class=\"mdl-card__title-text\">Cotoneaster</h2>\r\n  </base-card-title>\r\n  <base-card-body>\r\n    <div>\r\n      Cotoneaster is a genus of flowering plants in the rose family, Roseaceae, netive to the\r\n      Palaearctic region, with a strong concentration of diversity in the genus in the\r\n      mountains\r\n      of southwestern China and the Himalayas.\r\n    </div>\r\n    <a href=\"https://en.wikipedia.org/wiki/Cotoneaster\" target=\"_blank\">Wikipedia</a>\r\n  </base-card-body>\r\n</base-card>\r\n"

/***/ }),

/***/ "./src/app/pages/dashboard/cotoneaster-card/cotoneaster-card.component.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/pages/dashboard/cotoneaster-card/cotoneaster-card.component.scss ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/*------------------------------------*\\\n    $CONTENTS\n\\*------------------------------------*/\n/**\n * STYLE GUIDE VARIABLES------------------Declarations of Sass variables\n * -----Typography\n * -----Colors\n * -----Textfield\n * -----Switch\n * -----Spinner\n * -----Radio\n * -----Menu\n * -----List\n * -----Layout\n * -----Icon toggles\n * -----Footer\n * -----Column\n * -----Checkbox\n * -----Card\n * -----Button\n * -----Animation\n * -----Progress\n * -----Badge\n * -----Shadows\n * -----Grid\n * -----Data table\n * -----Dialog\n * -----Snackbar\n * -----Tooltip\n * -----Chip\n *\n * Even though all variables have the `!default` directive, most of them\n * should not be changed as they are dependent one another. This can cause\n * visual distortions (like alignment issues) that are hard to track down\n * and fix.\n */\n/* ==========  TYPOGRAPHY  ========== */\n/* We're splitting fonts into \"preferred\" and \"performance\" in order to optimize\n   page loading. For important text, such as the body, we want it to load\n   immediately and not wait for the web font load, whereas for other sections,\n   such as headers and titles, we're OK with things taking a bit longer to load.\n   We do have some optional classes and parameters in the mixins, in case you\n   definitely want to make sure you're using the preferred font and don't mind\n   the performance hit.\n   We should be able to improve on this once CSS Font Loading L3 becomes more\n   widely available.\n*/\n/* ==========  COLORS  ========== */\n/**\n*\n* Material design color palettes.\n* @see http://www.google.com/design/spec/style/color.html\n*\n**/\n/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/* ==========  Color Palettes  ========== */\n/* colors.scss */\n/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/* ==========  IMAGES  ========== */\n/* ==========  Color & Themes  ========== */\n/* ==========  Typography  ========== */\n/* ==========  Components  ========== */\n/* ==========  Standard Buttons  ========== */\n/* ==========  Icon Toggles  ========== */\n/* ==========  Radio Buttons  ========== */\n/* ==========  Ripple effect  ========== */\n/* ==========  Layout  ========== */\n/* ==========  Content Tabs  ========== */\n/* ==========  Checkboxes  ========== */\n/* ==========  Switches  ========== */\n/* ==========  Spinner  ========== */\n/* ==========  Text fields  ========== */\n/* ==========  Card  ========== */\n/* ==========  Sliders ========== */\n/* ========== Progress ========== */\n/* ==========  List ========== */\n/* ==========  Item ========== */\n/* ==========  Dropdown menu ========== */\n/* ==========  Tooltips  ========== */\n/* ==========  Footer  ========== */\n/* TEXTFIELD */\n/* SWITCH */\n/* SPINNER */\n/* RADIO */\n/* MENU */\n/* LIST */\n/* LAYOUT */\n/* ICON TOGGLE */\n/* FOOTER */\n/*mega-footer*/\n/*mini-footer*/\n/* CHECKBOX */\n/* CARD */\n/* Card dimensions */\n/* Cover image */\n/* BUTTON */\n/**\n *\n * Dimensions\n *\n */\n/* ANIMATION */\n/* PROGRESS */\n/* BADGE */\n/* SHADOWS */\n/* GRID */\n/* DATA TABLE */\n/* DIALOG */\n/* SNACKBAR */\n/* TOOLTIP */\n/* CHIP */\n/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/* Typography */\n/* Shadows */\n/* Animations */\n/* Dialog */\n/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/* ==========  Color Palettes  ========== */\n/* colors.scss */\n/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/* ==========  Color Palettes  ========== */\n/* colors.scss */\n/* ==========  IMAGES  ========== */\n/* ==========  Color & Themes  ========== */\n.text-color--smoke {\n  color: #666; }\n.color--gray {\n  background-color: #444 !important; }\n.color--dark-gray {\n  background-color: #333; }\n.color--smooth-gray {\n  background-color: #999 !important; }\n.text-color--smooth-gray {\n  color: #999 !important; }\n.color--red {\n  background-color: #f44336 !important; }\n.color-text--red {\n  color: #f44336 !important; }\n.color--orange {\n  background-color: #ffc107 !important; }\n.color-text--orange {\n  color: #ffc107 !important; }\n.color--amber {\n  background-color: #ff9800 !important; }\n.color-text--amber {\n  color: #ff9800 !important; }\n.color--green {\n  background-color: #00d45a !important; }\n.color-text--green {\n  color: #00d45a !important; }\n.color--light-blue {\n  background-color: #03a9f4 !important; }\n.color-text--light-blue {\n  color: #03a9f4 !important; }\n.color--purple {\n  background-color: #7726d3 !important; }\n.color-text--purple {\n  color: #7726d3 !important; }\n.color--teal {\n  background-color: #00bcd4 !important; }\n.color-text--teal {\n  color: #00bcd4 !important; }\n/* ==========  Typography  ========== */\n/* ==========  Components  ========== */\n/* ==========  Standard Buttons  ========== */\n/* ==========  Icon Toggles  ========== */\n/* ==========  Radio Buttons  ========== */\n/* ==========  Ripple effect  ========== */\n/* ==========  Layout  ========== */\n/* ==========  Content Tabs  ========== */\n/* ==========  Checkboxes  ========== */\n/* ==========  Switches  ========== */\n/* ==========  Spinner  ========== */\n/* ==========  Text fields  ========== */\n/* ==========  Card  ========== */\n/* ==========  Sliders ========== */\n/* ========== Progress ========== */\n/* ==========  List ========== */\n/* ==========  Item ========== */\n/* ==========  Dropdown menu ========== */\n/* ==========  Tooltips  ========== */\n/* ==========  Footer  ========== */\n/* TEXTFIELD */\n/* SWITCH */\n/* SPINNER */\n/* RADIO */\n/* MENU */\n/* LIST */\n/* LAYOUT */\n/* ICON */\n/* ICON TOGGLE */\n/* FOOTER */\n/* mega-footer */\n/* mini-footer */\n/* CHECKBOX */\n/* CARD */\n/* Card dimensions */\n/* Cover image */\n/* BUTTON */\n/* ANIMATION */\n/* PROGRESS */\n/* BADGE */\n/* SHADOWS */\n/* GRID */\n/* DATA TABLE */\n/* TOOLTIP */\n/* WIDGETS & COMPONENTS */\n/* Trending */\n/* label */\n/* charts */\n/* employer form */\n/* row */\n/* scroll */\n.cotoneaster .mdl-card__supporting-text {\n  font-family: \"Roboto\", \"Helvetica\", \"Arial\", sans-serif;\n  font-size: 16px;\n  font-weight: 300;\n  padding-bottom: 26px; }\n.cotoneaster .mdl-card__title {\n  background: url(\"assets/images/cotoneaster.jpg\") center center no-repeat;\n  background-size: cover; }\n.cotoneaster .mdl-card__title .mdl-card__title-text {\n    color: #fff; }\n@media screen and (max-width: 1151px) {\n  .cotoneaster {\n    height: 329px; } }\n"

/***/ }),

/***/ "./src/app/pages/dashboard/cotoneaster-card/cotoneaster-card.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/pages/dashboard/cotoneaster-card/cotoneaster-card.component.ts ***!
  \********************************************************************************/
/*! exports provided: CotoneasterCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CotoneasterCardComponent", function() { return CotoneasterCardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CotoneasterCardComponent = /** @class */ (function () {
    function CotoneasterCardComponent() {
        this.cotoneaster = true;
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])('class.cotoneaster'),
        __metadata("design:type", Object)
    ], CotoneasterCardComponent.prototype, "cotoneaster", void 0);
    CotoneasterCardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-cotoneaster-card',
            styles: [__webpack_require__(/*! ./cotoneaster-card.component.scss */ "./src/app/pages/dashboard/cotoneaster-card/cotoneaster-card.component.scss")],
            template: __webpack_require__(/*! ./cotoneaster-card.component.html */ "./src/app/pages/dashboard/cotoneaster-card/cotoneaster-card.component.html"),
        })
    ], CotoneasterCardComponent);
    return CotoneasterCardComponent;
}());



/***/ }),

/***/ "./src/app/pages/dashboard/cotoneaster-card/index.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/dashboard/cotoneaster-card/index.ts ***!
  \***********************************************************/
/*! exports provided: CotoneasterCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _cotoneaster_card_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cotoneaster-card.component */ "./src/app/pages/dashboard/cotoneaster-card/cotoneaster-card.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CotoneasterCardComponent", function() { return _cotoneaster_card_component__WEBPACK_IMPORTED_MODULE_0__["CotoneasterCardComponent"]; });




/***/ }),

/***/ "./src/app/pages/dashboard/dashboard.component.html":
/*!**********************************************************!*\
  !*** ./src/app/pages/dashboard/dashboard.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div\r\n  class=\"mdl-grid mdl-cell mdl-cell--9-col-desktop mdl-cell--12-col-tablet mdl-cell--4-col-phone mdl-cell--top\">\r\n  <div class=\"mdl-cell mdl-cell--4-col-desktop mdl-cell--4-col-tablet mdl-cell--2-col-phone\">\r\n    <base-card>\r\n      <base-card-title>\r\n        <h2 class=\"mdl-card__title-text\">My Day</h2>\r\n      </base-card-title>\r\n      <base-card-body>\r\n        <app-pie-chart></app-pie-chart>\r\n      </base-card-body>\r\n    </base-card>\r\n  </div>\r\n  <div class=\"mdl-cell mdl-cell--4-col-desktop mdl-cell--4-col-tablet mdl-cell--2-col-phone\">\r\n    <app-weather></app-weather>\r\n  </div>\r\n  <div class=\"mdl-cell mdl-cell--4-col-desktop mdl-cell--4-col-tablet mdl-cell--2-col-phone\">\r\n    <app-trending></app-trending>\r\n  </div>\r\n  <div class=\"mdl-cell mdl-cell--5-col-desktop mdl-cell--5-col-tablet mdl-cell--2-col-phone\">\r\n    <app-cotoneaster-card></app-cotoneaster-card>\r\n  </div>\r\n  <div class=\"mdl-cell mdl-cell--7-col-desktop mdl-cell--7-col-tablet mdl-cell--4-col-phone\">\r\n    <base-card>\r\n      <base-card-title>\r\n        <h2 class=\"mdl-card__title-text\">Startup Financing Cycle</h2>\r\n      </base-card-title>\r\n      <base-card-body>\r\n        <app-line-chart></app-line-chart>\r\n      </base-card-body>\r\n    </base-card>\r\n  </div>\r\n  <div class=\"mdl-cell mdl-cell--12-col-desktop mdl-cell--12-col-tablet mdl-cell--4-col-phone \">\r\n    <app-table-card></app-table-card>\r\n  </div>\r\n</div>\r\n<div\r\n  class=\"mdl-grid mdl-cell mdl-cell--3-col-desktop mdl-cell--12-col-tablet mdl-cell--4-col-phone mdl-cell--top\">\r\n  <div class=\"mdl-cell mdl-cell--12-col-desktop mdl-cell--6-col-tablet mdl-cell--2-col-phone\">\r\n    <app-robot-card></app-robot-card>\r\n  </div>\r\n  <div class=\"mdl-cell mdl-cell--12-col-desktop mdl-cell--6-col-tablet mdl-cell--2-col-phone\">\r\n    <app-todo-list></app-todo-list>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/pages/dashboard/dashboard.component.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/dashboard/dashboard.component.ts ***!
  \********************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
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


var DashboardComponent = /** @class */ (function (_super) {
    __extends(DashboardComponent, _super);
    function DashboardComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.mdlGrid = true;
        _this.mdlGridNoSpacing = true;
        return _this;
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])('class.mdl-grid'),
        __metadata("design:type", Object)
    ], DashboardComponent.prototype, "mdlGrid", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])('class.mdl-grid--no-spacing'),
        __metadata("design:type", Object)
    ], DashboardComponent.prototype, "mdlGridNoSpacing", void 0);
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard',
            styles: [__webpack_require__(/*! ../charts/charts.component.scss */ "./src/app/pages/charts/charts.component.scss")],
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/pages/dashboard/dashboard.component.html"),
        })
    ], DashboardComponent);
    return DashboardComponent;
}(theme_components_upgradable__WEBPACK_IMPORTED_MODULE_1__["UpgradableComponent"]));



/***/ }),

/***/ "./src/app/pages/dashboard/dashboard.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/dashboard/dashboard.module.ts ***!
  \*****************************************************/
/*! exports provided: DashboardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardModule", function() { return DashboardModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! theme */ "./src/theme/index.ts");
/* harmony import */ var _cotoneaster_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./cotoneaster-card */ "./src/app/pages/dashboard/cotoneaster-card/index.ts");
/* harmony import */ var _dashboard_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dashboard.component */ "./src/app/pages/dashboard/dashboard.component.ts");
/* harmony import */ var _line_chart__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./line-chart */ "./src/app/pages/dashboard/line-chart/index.ts");
/* harmony import */ var _pie_chart__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pie-chart */ "./src/app/pages/dashboard/pie-chart/index.ts");
/* harmony import */ var _robot_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./robot-card */ "./src/app/pages/dashboard/robot-card/index.ts");
/* harmony import */ var _table_card__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./table-card */ "./src/app/pages/dashboard/table-card/index.ts");
/* harmony import */ var _todo_list__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./todo-list */ "./src/app/pages/dashboard/todo-list/index.ts");
/* harmony import */ var _trending__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./trending */ "./src/app/pages/dashboard/trending/index.ts");
/* harmony import */ var _weather__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./weather */ "./src/app/pages/dashboard/weather/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var DashboardModule = /** @class */ (function () {
    function DashboardModule() {
    }
    DashboardModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                theme__WEBPACK_IMPORTED_MODULE_3__["ThemeModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            ],
            declarations: [
                _dashboard_component__WEBPACK_IMPORTED_MODULE_5__["DashboardComponent"],
                _line_chart__WEBPACK_IMPORTED_MODULE_6__["LineChartComponent"],
                _pie_chart__WEBPACK_IMPORTED_MODULE_7__["PieChartComponent"],
                _weather__WEBPACK_IMPORTED_MODULE_12__["WeatherComponent"],
                _cotoneaster_card__WEBPACK_IMPORTED_MODULE_4__["CotoneasterCardComponent"],
                _table_card__WEBPACK_IMPORTED_MODULE_9__["TableCardComponent"],
                _robot_card__WEBPACK_IMPORTED_MODULE_8__["RobotCardComponent"],
                _todo_list__WEBPACK_IMPORTED_MODULE_10__["TodoListComponent"],
                _trending__WEBPACK_IMPORTED_MODULE_11__["TrendingComponent"],
            ],
            exports: [
                _weather__WEBPACK_IMPORTED_MODULE_12__["WeatherComponent"],
                _trending__WEBPACK_IMPORTED_MODULE_11__["TrendingComponent"],
            ],
        })
    ], DashboardModule);
    return DashboardModule;
}());



/***/ }),

/***/ "./src/app/pages/dashboard/index.ts":
/*!******************************************!*\
  !*** ./src/app/pages/dashboard/index.ts ***!
  \******************************************/
/*! exports provided: DashboardComponent, DashboardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dashboard_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dashboard.component */ "./src/app/pages/dashboard/dashboard.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return _dashboard_component__WEBPACK_IMPORTED_MODULE_0__["DashboardComponent"]; });

/* harmony import */ var _dashboard_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dashboard.module */ "./src/app/pages/dashboard/dashboard.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DashboardModule", function() { return _dashboard_module__WEBPACK_IMPORTED_MODULE_1__["DashboardModule"]; });





/***/ }),

/***/ "./src/app/pages/dashboard/line-chart/index.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/dashboard/line-chart/index.ts ***!
  \*****************************************************/
/*! exports provided: LineChartComponent, LineChartService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _line_chart_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./line-chart.component */ "./src/app/pages/dashboard/line-chart/line-chart.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LineChartComponent", function() { return _line_chart_component__WEBPACK_IMPORTED_MODULE_0__["LineChartComponent"]; });

/* harmony import */ var _line_chart_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./line-chart.service */ "./src/app/pages/dashboard/line-chart/line-chart.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LineChartService", function() { return _line_chart_service__WEBPACK_IMPORTED_MODULE_1__["LineChartService"]; });





/***/ }),

/***/ "./src/app/pages/dashboard/line-chart/line-chart.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/pages/dashboard/line-chart/line-chart.component.ts ***!
  \********************************************************************/
/*! exports provided: LineChartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LineChartComponent", function() { return LineChartComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var theme_components_line_chart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! theme/components/line-chart */ "./src/theme/components/line-chart/index.ts");
/* harmony import */ var _line_chart_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./line-chart.service */ "./src/app/pages/dashboard/line-chart/line-chart.service.ts");
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
var __read = (undefined && undefined.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (undefined && undefined.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};



var LineChartComponent = /** @class */ (function (_super) {
    __extends(LineChartComponent, _super);
    function LineChartComponent(el, lineChartService) {
        var _this = _super.call(this, el) || this;
        _this.lineChartService = lineChartService;
        _this.xAxis = 'TIME';
        _this.yAxis = 'REVENUE';
        _this.maxX = 14;
        _this.afterConfigure();
        _this.animatedData = [
            {
                values: [],
                key: 'Awesome',
                color: '#00bcd4',
            },
            {
                values: [],
                key: 'Good',
                fillOpacity: 0.00001,
                area: true,
                color: '#ffc107',
            },
            {
                values: [],
                key: 'Fail',
                color: '#f44336',
            },
        ];
        _this.rawData = [
            lineChartService.getAwesomeGraph,
            lineChartService.getGoodGraph,
            lineChartService.getFailGraph,
        ]
            .map(function (f) { return f.bind(lineChartService); })
            .map(function (f) { return __spread(f(0, _this.maxX + 1, _this.xStep)); });
        return _this;
    }
    LineChartComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-line-chart',
            styles: [__webpack_require__(/*! ../../../../theme/components/line-chart/line-chart.component.scss */ "./src/theme/components/line-chart/line-chart.component.scss")],
            template: "",
            providers: [_line_chart_service__WEBPACK_IMPORTED_MODULE_2__["LineChartService"]],
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"],
            _line_chart_service__WEBPACK_IMPORTED_MODULE_2__["LineChartService"]])
    ], LineChartComponent);
    return LineChartComponent;
}(theme_components_line_chart__WEBPACK_IMPORTED_MODULE_1__["LineChartComponent"]));



/***/ }),

/***/ "./src/app/pages/dashboard/line-chart/line-chart.service.ts":
/*!******************************************************************!*\
  !*** ./src/app/pages/dashboard/line-chart/line-chart.service.ts ***!
  \******************************************************************/
/*! exports provided: LineChartService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LineChartService", function() { return LineChartService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};

var LineChartService = /** @class */ (function () {
    function LineChartService() {
    }
    LineChartService.prototype.awesomeFunction = function (x) {
        var INTERVAL_1 = 2.8;
        var INTERVAL_2 = 7.1;
        var INTERVAL_3 = 11.0;
        if (x < INTERVAL_1) {
            return (3.43 * x * x - 6.7 * x) / 14;
        }
        if (x < INTERVAL_2) {
            return -(x - 7.1) * (x - 7.1) / 10.26 + 2.378;
        }
        if (x < INTERVAL_3) {
            return -0.4 / (x - 4.3) + 2.53;
        }
        return ((x - 11.4) * (x - 11.4) * (x - 11.4)) / 13 + 2.476;
    };
    LineChartService.prototype.goodFunction = function (x) {
        var INTERVAL_1 = 3.0;
        var INTERVAL_2 = 8.2;
        if (x < INTERVAL_1) {
            return (3.255 * x * x - 9.6 * x) / 16;
        }
        if (x < INTERVAL_2) {
            return (-1.055 * (x - 8.03) * (x - 8.03) + 27) / 15;
        }
        return ((x - 9) * (x - 9) * (x - 9)) / 120 + 1.805;
    };
    LineChartService.prototype.failFunction = function (x) {
        var INTERVAL_1 = 3.1;
        var INTERVAL_2 = 10.3;
        if (x < INTERVAL_1) {
            return (2.255 * x * x - 9.1 * x) / 13;
        }
        if (x < INTERVAL_2) {
            return .82 * Math.sin((x - 4.5) / 2.1);
        }
        return -(x - 13) * (x - 13) * (x - 13) / 64;
    };
    LineChartService.prototype.getAwesomeGraph = function (from, to, step) {
        var x;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    x = from;
                    _a.label = 1;
                case 1: return [4 /*yield*/, ({ x: x, y: this.awesomeFunction(x) })];
                case 2:
                    _a.sent();
                    _a.label = 3;
                case 3:
                    if ((x += step) < to) return [3 /*break*/, 1];
                    _a.label = 4;
                case 4: return [2 /*return*/];
            }
        });
    };
    LineChartService.prototype.getGoodGraph = function (from, to, step) {
        var x;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    x = from;
                    _a.label = 1;
                case 1: return [4 /*yield*/, ({ x: x, y: this.goodFunction(x) })];
                case 2:
                    _a.sent();
                    _a.label = 3;
                case 3:
                    if ((x += step) < to) return [3 /*break*/, 1];
                    _a.label = 4;
                case 4: return [2 /*return*/];
            }
        });
    };
    LineChartService.prototype.getFailGraph = function (from, to, step) {
        var x;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    x = from;
                    _a.label = 1;
                case 1: return [4 /*yield*/, ({ x: x, y: this.failFunction(x) })];
                case 2:
                    _a.sent();
                    _a.label = 3;
                case 3:
                    if ((x += step) < to) return [3 /*break*/, 1];
                    _a.label = 4;
                case 4: return [2 /*return*/];
            }
        });
    };
    LineChartService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], LineChartService);
    return LineChartService;
}());



/***/ }),

/***/ "./src/app/pages/dashboard/pie-chart/index.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/dashboard/pie-chart/index.ts ***!
  \****************************************************/
/*! exports provided: PieChartComponent, PieChartService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _pie_chart_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pie-chart.component */ "./src/app/pages/dashboard/pie-chart/pie-chart.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PieChartComponent", function() { return _pie_chart_component__WEBPACK_IMPORTED_MODULE_0__["PieChartComponent"]; });

/* harmony import */ var _pie_chart_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pie-chart.service */ "./src/app/pages/dashboard/pie-chart/pie-chart.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PieChartService", function() { return _pie_chart_service__WEBPACK_IMPORTED_MODULE_1__["PieChartService"]; });





/***/ }),

/***/ "./src/app/pages/dashboard/pie-chart/pie-chart.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/pages/dashboard/pie-chart/pie-chart.component.ts ***!
  \******************************************************************/
/*! exports provided: PieChartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PieChartComponent", function() { return PieChartComponent; });
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3 */ "./node_modules/d3/d3.js");
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(d3__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var nvd3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! nvd3 */ "./node_modules/nvd3/build/nv.d3.js");
/* harmony import */ var nvd3__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nvd3__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var theme_components_pie_chart__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! theme/components/pie-chart */ "./src/theme/components/pie-chart/index.ts");
/* harmony import */ var _pie_chart_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pie-chart.service */ "./src/app/pages/dashboard/pie-chart/pie-chart.service.ts");
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
var __read = (undefined && undefined.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (undefined && undefined.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};





var PieChartComponent = /** @class */ (function (_super) {
    __extends(PieChartComponent, _super);
    function PieChartComponent(el, pieChartService) {
        var _this = _super.call(this) || this;
        _this.el = el;
        _this.pieChartService = pieChartService;
        return _this;
    }
    PieChartComponent.prototype.ngOnInit = function () {
        var _this = this;
        var colors = [
            '#03a9f4',
            '#f44336',
            '#ff9800',
            '#ffc107',
            '#00bcd4',
            '',
        ];
        var rawData = this.pieChartService.getDaySchedule();
        var animatedData = __spread(rawData.map(function (job) { return ({ key: job.key, end: job.hours, y: 0 }); }), [
            {
                key: 'Pending',
                y: 23.9,
            },
        ]);
        nvd3__WEBPACK_IMPORTED_MODULE_1__["addGraph"](function () {
            var innerRadius = 0.86;
            var outerRadius = 1.02;
            var pieChart = nvd3__WEBPACK_IMPORTED_MODULE_1__["models"].pieChart()
                .x(function (d) { return d.key; })
                .y(function (d) { return d.y; })
                .showLabels(false)
                .donut(true)
                .growOnHover(true)
                .padAngle(.04)
                .cornerRadius(0)
                .margin({ left: 0, right: 0, top: 0, bottom: 0 })
                .color(colors)
                .arcsRadius([{ inner: innerRadius, outer: outerRadius },
                { inner: innerRadius, outer: outerRadius },
                { inner: innerRadius, outer: outerRadius },
                { inner: innerRadius, outer: outerRadius },
                { inner: innerRadius, outer: outerRadius },
            ])
                .showLegend(false)
                .title('0 hours')
                .titleOffset(10);
            pieChart.tooltip.enabled(true)
                .hideDelay(0)
                .headerEnabled(false)
                .contentGenerator(function (d) {
                if (d === null || !d.animatedData) {
                    return null;
                }
                d3__WEBPACK_IMPORTED_MODULE_0__["selectAll"]('.nvtooltip').classed('mdl-tooltip', true);
                return d.animatedData.y + " hours";
            });
            var container = d3__WEBPACK_IMPORTED_MODULE_0__["select"](_this.el.nativeElement)
                .append('div')
                .append('svg')
                .datum(animatedData)
                .transition()
                .duration(1200)
                .call(pieChart);
            var h = 0;
            var i = 0;
            var timer = setInterval(function (d) {
                if (i < d.length - 1) {
                    if (d[i].y < d[i].end) {
                        d[i].y += 1;
                        d[d.length - 1].y -= 1;
                        pieChart.title(h + 1 + " hours");
                        h += 1;
                    }
                    else {
                        i += 1;
                    }
                }
                else {
                    d.splice(d.length - 1, 1);
                    clearInterval(timer);
                    return;
                }
                if (container[0][0]) {
                    pieChart.update();
                }
                else {
                    clearInterval(timer);
                }
            }, 70, animatedData);
            d3__WEBPACK_IMPORTED_MODULE_0__["select"](_this.el.nativeElement.querySelector('.nv-pie .nv-pie'))
                .append('image')
                .attr('width', '30')
                .attr('height', '30')
                .attr('xlink:href', 'assets/images/watch_white.svg')
                .attr('transform', 'translate(-15,-35)');
            var color = d3__WEBPACK_IMPORTED_MODULE_0__["scale"].ordinal().range(colors);
            var legend = d3__WEBPACK_IMPORTED_MODULE_0__["select"](_this.el.nativeElement)
                .append('div')
                .attr('class', 'legend')
                .selectAll('.legend__item')
                .data(animatedData.slice(0, animatedData.length - 1))
                .enter()
                .append('div')
                .attr('class', 'legend__item');
            legend.append('div')
                .attr('class', 'legend__mark pull-left')
                .style('background-color', function (d) { return color(d.key).toString(); });
            legend.append('div')
                .attr('class', 'legend__text')
                .text(function (d) { return d.key; });
            return pieChart;
        });
    };
    PieChartComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-pie-chart',
            styles: [__webpack_require__(/*! ../../../../theme/components/pie-chart/pie-chart.component.scss */ "./src/theme/components/pie-chart/pie-chart.component.scss")],
            template: "",
            providers: [_pie_chart_service__WEBPACK_IMPORTED_MODULE_4__["PieChartService"]],
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"],
            _pie_chart_service__WEBPACK_IMPORTED_MODULE_4__["PieChartService"]])
    ], PieChartComponent);
    return PieChartComponent;
}(theme_components_pie_chart__WEBPACK_IMPORTED_MODULE_3__["PieChartComponent"]));



/***/ }),

/***/ "./src/app/pages/dashboard/pie-chart/pie-chart.service.ts":
/*!****************************************************************!*\
  !*** ./src/app/pages/dashboard/pie-chart/pie-chart.service.ts ***!
  \****************************************************************/
/*! exports provided: PieChartService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PieChartService", function() { return PieChartService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var PieChartService = /** @class */ (function () {
    function PieChartService() {
    }
    PieChartService.prototype.getDaySchedule = function () {
        return [
            {
                key: 'Coding',
                hours: 9,
            },
            {
                key: 'Eating',
                hours: 3,
            },
            {
                key: 'Sleeping',
                hours: 3,
            },
            {
                key: 'Meditation',
                hours: 3,
            },
            {
                key: 'The fight against evil',
                hours: 6,
            },
        ];
    };
    PieChartService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], PieChartService);
    return PieChartService;
}());



/***/ }),

/***/ "./src/app/pages/dashboard/robot-card/index.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/dashboard/robot-card/index.ts ***!
  \*****************************************************/
/*! exports provided: RobotCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _robot_card_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./robot-card.component */ "./src/app/pages/dashboard/robot-card/robot-card.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RobotCardComponent", function() { return _robot_card_component__WEBPACK_IMPORTED_MODULE_0__["RobotCardComponent"]; });




/***/ }),

/***/ "./src/app/pages/dashboard/robot-card/robot-card.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/pages/dashboard/robot-card/robot-card.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<base-card>\r\n  <base-card-title expanded>\r\n    <h2 class=\"mdl-card__title-text\">BB-8</h2>\r\n  </base-card-title>\r\n  <base-card-body>\r\n    <div>\r\n      A skittish but loyal astromech, BB-8 accompanied Poe Dameron on many missions for the\r\n      Resistance helping keep his X-wing in working order.\r\n    </div>\r\n    <a href=\"http://www.starwars.com/databank/bb-8\" target=\"_blank\">Star Wars Databank</a>\r\n  </base-card-body>\r\n</base-card>\r\n"

/***/ }),

/***/ "./src/app/pages/dashboard/robot-card/robot-card.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/pages/dashboard/robot-card/robot-card.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/*------------------------------------*\\\n    $CONTENTS\n\\*------------------------------------*/\n/**\n * STYLE GUIDE VARIABLES------------------Declarations of Sass variables\n * -----Typography\n * -----Colors\n * -----Textfield\n * -----Switch\n * -----Spinner\n * -----Radio\n * -----Menu\n * -----List\n * -----Layout\n * -----Icon toggles\n * -----Footer\n * -----Column\n * -----Checkbox\n * -----Card\n * -----Button\n * -----Animation\n * -----Progress\n * -----Badge\n * -----Shadows\n * -----Grid\n * -----Data table\n * -----Dialog\n * -----Snackbar\n * -----Tooltip\n * -----Chip\n *\n * Even though all variables have the `!default` directive, most of them\n * should not be changed as they are dependent one another. This can cause\n * visual distortions (like alignment issues) that are hard to track down\n * and fix.\n */\n/* ==========  TYPOGRAPHY  ========== */\n/* We're splitting fonts into \"preferred\" and \"performance\" in order to optimize\n   page loading. For important text, such as the body, we want it to load\n   immediately and not wait for the web font load, whereas for other sections,\n   such as headers and titles, we're OK with things taking a bit longer to load.\n   We do have some optional classes and parameters in the mixins, in case you\n   definitely want to make sure you're using the preferred font and don't mind\n   the performance hit.\n   We should be able to improve on this once CSS Font Loading L3 becomes more\n   widely available.\n*/\n/* ==========  COLORS  ========== */\n/**\n*\n* Material design color palettes.\n* @see http://www.google.com/design/spec/style/color.html\n*\n**/\n/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/* ==========  Color Palettes  ========== */\n/* colors.scss */\n/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/* ==========  IMAGES  ========== */\n/* ==========  Color & Themes  ========== */\n/* ==========  Typography  ========== */\n/* ==========  Components  ========== */\n/* ==========  Standard Buttons  ========== */\n/* ==========  Icon Toggles  ========== */\n/* ==========  Radio Buttons  ========== */\n/* ==========  Ripple effect  ========== */\n/* ==========  Layout  ========== */\n/* ==========  Content Tabs  ========== */\n/* ==========  Checkboxes  ========== */\n/* ==========  Switches  ========== */\n/* ==========  Spinner  ========== */\n/* ==========  Text fields  ========== */\n/* ==========  Card  ========== */\n/* ==========  Sliders ========== */\n/* ========== Progress ========== */\n/* ==========  List ========== */\n/* ==========  Item ========== */\n/* ==========  Dropdown menu ========== */\n/* ==========  Tooltips  ========== */\n/* ==========  Footer  ========== */\n/* TEXTFIELD */\n/* SWITCH */\n/* SPINNER */\n/* RADIO */\n/* MENU */\n/* LIST */\n/* LAYOUT */\n/* ICON TOGGLE */\n/* FOOTER */\n/*mega-footer*/\n/*mini-footer*/\n/* CHECKBOX */\n/* CARD */\n/* Card dimensions */\n/* Cover image */\n/* BUTTON */\n/**\n *\n * Dimensions\n *\n */\n/* ANIMATION */\n/* PROGRESS */\n/* BADGE */\n/* SHADOWS */\n/* GRID */\n/* DATA TABLE */\n/* DIALOG */\n/* SNACKBAR */\n/* TOOLTIP */\n/* CHIP */\n/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/* Typography */\n/* Shadows */\n/* Animations */\n/* Dialog */\n/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/* ==========  Color Palettes  ========== */\n/* colors.scss */\n/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/* ==========  Color Palettes  ========== */\n/* colors.scss */\n/* ==========  IMAGES  ========== */\n/* ==========  Color & Themes  ========== */\n.text-color--smoke {\n  color: #666; }\n.color--gray {\n  background-color: #444 !important; }\n.color--dark-gray {\n  background-color: #333; }\n.color--smooth-gray {\n  background-color: #999 !important; }\n.text-color--smooth-gray {\n  color: #999 !important; }\n.color--red {\n  background-color: #f44336 !important; }\n.color-text--red {\n  color: #f44336 !important; }\n.color--orange {\n  background-color: #ffc107 !important; }\n.color-text--orange {\n  color: #ffc107 !important; }\n.color--amber {\n  background-color: #ff9800 !important; }\n.color-text--amber {\n  color: #ff9800 !important; }\n.color--green {\n  background-color: #00d45a !important; }\n.color-text--green {\n  color: #00d45a !important; }\n.color--light-blue {\n  background-color: #03a9f4 !important; }\n.color-text--light-blue {\n  color: #03a9f4 !important; }\n.color--purple {\n  background-color: #7726d3 !important; }\n.color-text--purple {\n  color: #7726d3 !important; }\n.color--teal {\n  background-color: #00bcd4 !important; }\n.color-text--teal {\n  color: #00bcd4 !important; }\n/* ==========  Typography  ========== */\n/* ==========  Components  ========== */\n/* ==========  Standard Buttons  ========== */\n/* ==========  Icon Toggles  ========== */\n/* ==========  Radio Buttons  ========== */\n/* ==========  Ripple effect  ========== */\n/* ==========  Layout  ========== */\n/* ==========  Content Tabs  ========== */\n/* ==========  Checkboxes  ========== */\n/* ==========  Switches  ========== */\n/* ==========  Spinner  ========== */\n/* ==========  Text fields  ========== */\n/* ==========  Card  ========== */\n/* ==========  Sliders ========== */\n/* ========== Progress ========== */\n/* ==========  List ========== */\n/* ==========  Item ========== */\n/* ==========  Dropdown menu ========== */\n/* ==========  Tooltips  ========== */\n/* ==========  Footer  ========== */\n/* TEXTFIELD */\n/* SWITCH */\n/* SPINNER */\n/* RADIO */\n/* MENU */\n/* LIST */\n/* LAYOUT */\n/* ICON */\n/* ICON TOGGLE */\n/* FOOTER */\n/* mega-footer */\n/* mini-footer */\n/* CHECKBOX */\n/* CARD */\n/* Card dimensions */\n/* Cover image */\n/* BUTTON */\n/* ANIMATION */\n/* PROGRESS */\n/* BADGE */\n/* SHADOWS */\n/* GRID */\n/* DATA TABLE */\n/* TOOLTIP */\n/* WIDGETS & COMPONENTS */\n/* Trending */\n/* label */\n/* charts */\n/* employer form */\n/* row */\n/* scroll */\n.robot .mdl-card {\n  height: 450px; }\n.robot .mdl-card__supporting-text {\n  font-family: \"Roboto\", \"Helvetica\", \"Arial\", sans-serif;\n  font-size: 16px;\n  font-weight: 300;\n  padding-bottom: 26px; }\n.robot .mdl-card__title {\n  background: url(\"assets/images/robot.png\") center center no-repeat;\n  background-size: cover; }\n.robot .mdl-card__title .mdl-card__title-text {\n    color: #fff; }\n"

/***/ }),

/***/ "./src/app/pages/dashboard/robot-card/robot-card.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/pages/dashboard/robot-card/robot-card.component.ts ***!
  \********************************************************************/
/*! exports provided: RobotCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RobotCardComponent", function() { return RobotCardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RobotCardComponent = /** @class */ (function () {
    function RobotCardComponent() {
        this.robot = true;
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])('class.robot'),
        __metadata("design:type", Object)
    ], RobotCardComponent.prototype, "robot", void 0);
    RobotCardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-robot-card',
            styles: [__webpack_require__(/*! ./robot-card.component.scss */ "./src/app/pages/dashboard/robot-card/robot-card.component.scss")],
            template: __webpack_require__(/*! ./robot-card.component.html */ "./src/app/pages/dashboard/robot-card/robot-card.component.html"),
        })
    ], RobotCardComponent);
    return RobotCardComponent;
}());



/***/ }),

/***/ "./src/app/pages/dashboard/table-card/index.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/dashboard/table-card/index.ts ***!
  \*****************************************************/
/*! exports provided: TableCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _table_card_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./table-card.component */ "./src/app/pages/dashboard/table-card/table-card.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TableCardComponent", function() { return _table_card_component__WEBPACK_IMPORTED_MODULE_0__["TableCardComponent"]; });




/***/ }),

/***/ "./src/app/pages/dashboard/table-card/table-card.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/pages/dashboard/table-card/table-card.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<table class=\"mdl-data-table mdl-js-data-table mdl-data-table--selectable mdl-shadow--2dp\">\r\n  <thead>\r\n    <tr>\r\n      <th class=\"mdl-data-table__cell--non-numeric\" *ngFor=\"let item of tableHeader\">{{ item }}</th>\r\n    </tr>\r\n  </thead>\r\n  <tbody>\r\n    <tr *ngFor=\"let item of data\" [class.is-selected]=\"item.isSelected\">\r\n      <td class=\"mdl-data-table__cell--non-numeric\">{{ item.project }}</td>\r\n      <td class=\"mdl-data-table__cell--non-numeric\">\r\n        <span *ngFor=\"let resp of item.responsible\"\r\n        class=\"label label--mini\"\r\n        [ngClass]=\"resp.color\">{{ resp.name }}</span>\r\n      </td>\r\n      <td class=\"mdl-data-table__cell--non-numeric\">{{ item.email }}</td>\r\n      <td class=\"mdl-data-table__cell--non-numeric\">{{ item.deadline }}</td>\r\n      <td class=\"mdl-data-table__cell--non-numeric\"\r\n      *ngIf=\"item.progress < 100\">\r\n        <base-progress [progress]=\"item.progress\"></base-progress>\r\n      </td>\r\n      <td class=\"mdl-data-table__cell--non-numeric task-done\"\r\n      *ngIf=\"item.progress >= 100\">\r\n        <i class=\"material-icons\">done</i>\r\n        <span>Complete</span>\r\n      </td>\r\n    </tr>\r\n  </tbody>\r\n</table>\r\n"

/***/ }),

/***/ "./src/app/pages/dashboard/table-card/table-card.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/pages/dashboard/table-card/table-card.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/*------------------------------------*\\\n    $CONTENTS\n\\*------------------------------------*/\n/**\n * STYLE GUIDE VARIABLES------------------Declarations of Sass variables\n * -----Typography\n * -----Colors\n * -----Textfield\n * -----Switch\n * -----Spinner\n * -----Radio\n * -----Menu\n * -----List\n * -----Layout\n * -----Icon toggles\n * -----Footer\n * -----Column\n * -----Checkbox\n * -----Card\n * -----Button\n * -----Animation\n * -----Progress\n * -----Badge\n * -----Shadows\n * -----Grid\n * -----Data table\n * -----Dialog\n * -----Snackbar\n * -----Tooltip\n * -----Chip\n *\n * Even though all variables have the `!default` directive, most of them\n * should not be changed as they are dependent one another. This can cause\n * visual distortions (like alignment issues) that are hard to track down\n * and fix.\n */\n/* ==========  TYPOGRAPHY  ========== */\n/* We're splitting fonts into \"preferred\" and \"performance\" in order to optimize\n   page loading. For important text, such as the body, we want it to load\n   immediately and not wait for the web font load, whereas for other sections,\n   such as headers and titles, we're OK with things taking a bit longer to load.\n   We do have some optional classes and parameters in the mixins, in case you\n   definitely want to make sure you're using the preferred font and don't mind\n   the performance hit.\n   We should be able to improve on this once CSS Font Loading L3 becomes more\n   widely available.\n*/\n/* ==========  COLORS  ========== */\n/**\n*\n* Material design color palettes.\n* @see http://www.google.com/design/spec/style/color.html\n*\n**/\n/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/* ==========  Color Palettes  ========== */\n/* colors.scss */\n/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/* ==========  IMAGES  ========== */\n/* ==========  Color & Themes  ========== */\n/* ==========  Typography  ========== */\n/* ==========  Components  ========== */\n/* ==========  Standard Buttons  ========== */\n/* ==========  Icon Toggles  ========== */\n/* ==========  Radio Buttons  ========== */\n/* ==========  Ripple effect  ========== */\n/* ==========  Layout  ========== */\n/* ==========  Content Tabs  ========== */\n/* ==========  Checkboxes  ========== */\n/* ==========  Switches  ========== */\n/* ==========  Spinner  ========== */\n/* ==========  Text fields  ========== */\n/* ==========  Card  ========== */\n/* ==========  Sliders ========== */\n/* ========== Progress ========== */\n/* ==========  List ========== */\n/* ==========  Item ========== */\n/* ==========  Dropdown menu ========== */\n/* ==========  Tooltips  ========== */\n/* ==========  Footer  ========== */\n/* TEXTFIELD */\n/* SWITCH */\n/* SPINNER */\n/* RADIO */\n/* MENU */\n/* LIST */\n/* LAYOUT */\n/* ICON TOGGLE */\n/* FOOTER */\n/*mega-footer*/\n/*mini-footer*/\n/* CHECKBOX */\n/* CARD */\n/* Card dimensions */\n/* Cover image */\n/* BUTTON */\n/**\n *\n * Dimensions\n *\n */\n/* ANIMATION */\n/* PROGRESS */\n/* BADGE */\n/* SHADOWS */\n/* GRID */\n/* DATA TABLE */\n/* DIALOG */\n/* SNACKBAR */\n/* TOOLTIP */\n/* CHIP */\n/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/* Typography */\n/* Shadows */\n/* Animations */\n/* Dialog */\n/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/* ==========  Color Palettes  ========== */\n/* colors.scss */\n/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/* ==========  Color Palettes  ========== */\n/* colors.scss */\n/* ==========  IMAGES  ========== */\n/* ==========  Color & Themes  ========== */\n.text-color--smoke {\n  color: #666; }\n.color--gray {\n  background-color: #444 !important; }\n.color--dark-gray {\n  background-color: #333; }\n.color--smooth-gray {\n  background-color: #999 !important; }\n.text-color--smooth-gray {\n  color: #999 !important; }\n.color--red {\n  background-color: #f44336 !important; }\n.color-text--red {\n  color: #f44336 !important; }\n.color--orange {\n  background-color: #ffc107 !important; }\n.color-text--orange {\n  color: #ffc107 !important; }\n.color--amber {\n  background-color: #ff9800 !important; }\n.color-text--amber {\n  color: #ff9800 !important; }\n.color--green {\n  background-color: #00d45a !important; }\n.color-text--green {\n  color: #00d45a !important; }\n.color--light-blue {\n  background-color: #03a9f4 !important; }\n.color-text--light-blue {\n  color: #03a9f4 !important; }\n.color--purple {\n  background-color: #7726d3 !important; }\n.color-text--purple {\n  color: #7726d3 !important; }\n.color--teal {\n  background-color: #00bcd4 !important; }\n.color-text--teal {\n  color: #00bcd4 !important; }\n/* ==========  Typography  ========== */\n/* ==========  Components  ========== */\n/* ==========  Standard Buttons  ========== */\n/* ==========  Icon Toggles  ========== */\n/* ==========  Radio Buttons  ========== */\n/* ==========  Ripple effect  ========== */\n/* ==========  Layout  ========== */\n/* ==========  Content Tabs  ========== */\n/* ==========  Checkboxes  ========== */\n/* ==========  Switches  ========== */\n/* ==========  Spinner  ========== */\n/* ==========  Text fields  ========== */\n/* ==========  Card  ========== */\n/* ==========  Sliders ========== */\n/* ========== Progress ========== */\n/* ==========  List ========== */\n/* ==========  Item ========== */\n/* ==========  Dropdown menu ========== */\n/* ==========  Tooltips  ========== */\n/* ==========  Footer  ========== */\n/* TEXTFIELD */\n/* SWITCH */\n/* SPINNER */\n/* RADIO */\n/* MENU */\n/* LIST */\n/* LAYOUT */\n/* ICON */\n/* ICON TOGGLE */\n/* FOOTER */\n/* mega-footer */\n/* mini-footer */\n/* CHECKBOX */\n/* CARD */\n/* Card dimensions */\n/* Cover image */\n/* BUTTON */\n/* ANIMATION */\n/* PROGRESS */\n/* BADGE */\n/* SHADOWS */\n/* GRID */\n/* DATA TABLE */\n/* TOOLTIP */\n/* WIDGETS & COMPONENTS */\n/* Trending */\n/* label */\n/* charts */\n/* employer form */\n/* row */\n/* scroll */\n.projects-table thead th {\n  color: rgba(255, 255, 255, 0.9); }\n.projects-table tbody td:nth-child(1) {\n  width: 1px; }\n.projects-table tbody td:nth-child(2) {\n  width: 300px; }\n.projects-table tbody td:nth-child(3) {\n  width: 240px; }\n.projects-table tbody td:nth-child(4) {\n  width: 300px; }\n.projects-table tbody td:nth-child(5) {\n  width: 200px; }\n.projects-table tbody td:nth-child(6) {\n  width: 300px; }\n.projects-table tbody td:nth-child(6) .mdl-progress {\n    cursor: pointer;\n    min-width: 80px;\n    max-width: 200px; }\n.projects-table tbody .task-done {\n  padding-top: 6px !important;\n  padding-bottom: 0 !important;\n  color: #f44336; }\n.projects-table tbody .task-done .material-icons,\n  .projects-table tbody .task-done span {\n    color: #fff;\n    cursor: pointer; }\n.projects-table tbody .task-done .material-icons {\n    background: #f44336;\n    border-radius: 24px;\n    font-size: 16px;\n    padding: 2px;\n    margin-right: 4px; }\n.projects-table tbody .task-done span {\n    vertical-align: text-bottom; }\n@media screen and (max-width: 848px) {\n  .projects-table .dashboard .mdl-cell.mdl-cell--12-col-desktop.mdl-cell--12-col-tablet.mdl-cell--4-col-phone {\n    display: none; } }\n"

/***/ }),

/***/ "./src/app/pages/dashboard/table-card/table-card.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/pages/dashboard/table-card/table-card.component.ts ***!
  \********************************************************************/
/*! exports provided: TableCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableCardComponent", function() { return TableCardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TableCardComponent = /** @class */ (function () {
    function TableCardComponent() {
        this.projectsTable = true;
        this.tableHeader = [
            'Project',
            'Responsible',
            'Client contact',
            'Deadline',
            'Progress',
        ];
        this.data = [
            {
                project: 'Darkboard',
                responsible: [
                    {
                        color: 'color--light-blue',
                        name: 'Alex',
                    },
                    {
                        color: 'background-color--primary',
                        name: 'Dina',
                    },
                    {
                        color: 'color--orange',
                        name: 'Misha',
                    },
                ],
                email: 'i.tiven.wang@gmail.com',
                deadline: 'Jun 15',
                progress: 44,
                isSelected: false,
            },
            {
                project: 'Big financial app',
                responsible: [
                    {
                        color: 'color--orange',
                        name: 'Vlada',
                    },
                ],
                email: 'Boss@financial.com',
                deadline: 'Mar 1',
                progress: 14,
                isSelected: true,
            },
            {
                project: 'New Year office decoration',
                responsible: [
                    {
                        color: 'background-color--primary',
                        name: 'Dina',
                    },
                    {
                        color: 'color--orange',
                        name: 'Vlada',
                    },
                ],
                email: 'i.tiven.wang@gmail.com',
                deadline: 'Dec 25',
                progress: 100,
                isSelected: false,
            },
            {
                project: 'Don\'t worry, be happy!!!',
                responsible: [
                    {
                        color: 'background-color--secondary',
                        name: 'Everybody',
                    },
                ],
                email: 'Contact@happyness.com',
                deadline: 'Yesterday',
                progress: 31,
                isSelected: false,
            },
        ];
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])('class.projects-table'),
        __metadata("design:type", Object)
    ], TableCardComponent.prototype, "projectsTable", void 0);
    TableCardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-table-card',
            styles: [__webpack_require__(/*! ./table-card.component.scss */ "./src/app/pages/dashboard/table-card/table-card.component.scss")],
            template: __webpack_require__(/*! ./table-card.component.html */ "./src/app/pages/dashboard/table-card/table-card.component.html"),
        })
    ], TableCardComponent);
    return TableCardComponent;
}());



/***/ }),

/***/ "./src/app/pages/dashboard/todo-list/index.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/dashboard/todo-list/index.ts ***!
  \****************************************************/
/*! exports provided: TodoListComponent, TodoListService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _todo_list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo-list.component */ "./src/app/pages/dashboard/todo-list/todo-list.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TodoListComponent", function() { return _todo_list_component__WEBPACK_IMPORTED_MODULE_0__["TodoListComponent"]; });

/* harmony import */ var _todo_list_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todo-list.service */ "./src/app/pages/dashboard/todo-list/todo-list.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TodoListService", function() { return _todo_list_service__WEBPACK_IMPORTED_MODULE_1__["TodoListService"]; });





/***/ }),

/***/ "./src/app/pages/dashboard/todo-list/todo-list.component.html":
/*!********************************************************************!*\
  !*** ./src/app/pages/dashboard/todo-list/todo-list.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<base-card>\r\n  <base-card-title>\r\n    <h2 class=\"mdl-card__title-text\">To-do list</h2>\r\n  </base-card-title>\r\n  <base-card-body>\r\n    <ul class=\"mdl-list\">\r\n      <li *ngFor=\"let item of items\" class=\"mdl-list__item\" #listItem>\r\n        <span class=\"mdl-list__item-primary-content\">\r\n          <label [for]=\"item.id\"\r\n                 class=\"mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect\"\r\n                 [class.is-checked]=\"item.completed\"\r\n                 checkboxItem>\r\n            <input type=\"checkbox\" class=\"mdl-checkbox__input\" [id]=\"item.id\" [checked]=\"item.completed\" (change)=\"item.completed = !item.completed\"/>\r\n            <span class=\"mdl-checkbox__label\">{{ item.title }}</span>\r\n          </label>\r\n        </span>\r\n        <div class=\"mdl-list__item-secondary-content\">\r\n          <button [attr.for]=\"item.id\" class=\"mdl-button mdl-js-button mdl-button--icon mdl-button--colored mdl-button--mini-icon pull-right\"\r\n                  deleteItem\r\n                  (click)=\"deleteItem(item)\">\r\n            <i class=\"material-icons\">clear</i>\r\n          </button>\r\n        </div>\r\n      </li>\r\n      <li *ngIf=\"this.createdItem !== null\" class=\"mdl-list__item\" #listItem>\r\n        <span class=\"mdl-list__item-primary-content\">\r\n          <label for=\"input\"\r\n                 class=\"mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect\"\r\n                 [class.is-checked]=\"this.createdItem.completed\"\r\n                 checkboxItem>\r\n            <input type=\"checkbox\" class=\"mdl-checkbox__input\" id=\"input\" [(ngModel)]=\"this.createdItem.completed\"/>\r\n            <span class=\"mdl-checkbox__label\">\r\n              <div class=\"mdl-textfield mdl-js-textfield\">\r\n                <input class=\"mdl-textfield__input\" type=\"text\" id=\"todoInput\" #todoInput (keydown.escape)=\"this.createdItem = null\" (keydown.enter)=\"this.addItem()\" [(ngModel)]=\"this.createdItem.title\"/>\r\n                <label class=\"mdl-textfield__label\" for=\"todoInput\">What to do?..</label>\r\n              </div>\r\n            </span>\r\n          </label>\r\n        </span>\r\n        <div class=\"mdl-list__item-secondary-content\">\r\n          <button attr.for=\"input\" class=\"mdl-button mdl-js-button mdl-button--icon mdl-button--colored mdl-button--mini-icon pull-right\"\r\n                  deleteItem\r\n                  (click)=\"createdItem = null\">\r\n            <i class=\"material-icons\">clear</i>\r\n          </button>\r\n        </div>\r\n      </li>\r\n    </ul>\r\n  </base-card-body>\r\n  <base-card-actions>\r\n    <button class=\"mdl-button mdl-js-button mdl-js-ripple-effect\" (click)=\"deleteCompletedItems()\" [disabled]=\"createdItem !== null\">remove selected</button>\r\n    <button\r\n      class=\"mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--fab mdl-shadow--8dp mdl-button--colored\"\r\n      [disabled]=\"createdItem !== null\"\r\n      (click)=\"createItem()\">\r\n      <i class=\"material-icons mdl-js-ripple-effect\">add</i>\r\n    </button>\r\n  </base-card-actions>\r\n</base-card>\r\n"

/***/ }),

/***/ "./src/app/pages/dashboard/todo-list/todo-list.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/pages/dashboard/todo-list/todo-list.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/*------------------------------------*\\\n    $CONTENTS\n\\*------------------------------------*/\n/**\n * STYLE GUIDE VARIABLES------------------Declarations of Sass variables\n * -----Typography\n * -----Colors\n * -----Textfield\n * -----Switch\n * -----Spinner\n * -----Radio\n * -----Menu\n * -----List\n * -----Layout\n * -----Icon toggles\n * -----Footer\n * -----Column\n * -----Checkbox\n * -----Card\n * -----Button\n * -----Animation\n * -----Progress\n * -----Badge\n * -----Shadows\n * -----Grid\n * -----Data table\n * -----Dialog\n * -----Snackbar\n * -----Tooltip\n * -----Chip\n *\n * Even though all variables have the `!default` directive, most of them\n * should not be changed as they are dependent one another. This can cause\n * visual distortions (like alignment issues) that are hard to track down\n * and fix.\n */\n/* ==========  TYPOGRAPHY  ========== */\n/* We're splitting fonts into \"preferred\" and \"performance\" in order to optimize\n   page loading. For important text, such as the body, we want it to load\n   immediately and not wait for the web font load, whereas for other sections,\n   such as headers and titles, we're OK with things taking a bit longer to load.\n   We do have some optional classes and parameters in the mixins, in case you\n   definitely want to make sure you're using the preferred font and don't mind\n   the performance hit.\n   We should be able to improve on this once CSS Font Loading L3 becomes more\n   widely available.\n*/\n/* ==========  COLORS  ========== */\n/**\n*\n* Material design color palettes.\n* @see http://www.google.com/design/spec/style/color.html\n*\n**/\n/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/* ==========  Color Palettes  ========== */\n/* colors.scss */\n/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/* ==========  IMAGES  ========== */\n/* ==========  Color & Themes  ========== */\n/* ==========  Typography  ========== */\n/* ==========  Components  ========== */\n/* ==========  Standard Buttons  ========== */\n/* ==========  Icon Toggles  ========== */\n/* ==========  Radio Buttons  ========== */\n/* ==========  Ripple effect  ========== */\n/* ==========  Layout  ========== */\n/* ==========  Content Tabs  ========== */\n/* ==========  Checkboxes  ========== */\n/* ==========  Switches  ========== */\n/* ==========  Spinner  ========== */\n/* ==========  Text fields  ========== */\n/* ==========  Card  ========== */\n/* ==========  Sliders ========== */\n/* ========== Progress ========== */\n/* ==========  List ========== */\n/* ==========  Item ========== */\n/* ==========  Dropdown menu ========== */\n/* ==========  Tooltips  ========== */\n/* ==========  Footer  ========== */\n/* TEXTFIELD */\n/* SWITCH */\n/* SPINNER */\n/* RADIO */\n/* MENU */\n/* LIST */\n/* LAYOUT */\n/* ICON TOGGLE */\n/* FOOTER */\n/*mega-footer*/\n/*mini-footer*/\n/* CHECKBOX */\n/* CARD */\n/* Card dimensions */\n/* Cover image */\n/* BUTTON */\n/**\n *\n * Dimensions\n *\n */\n/* ANIMATION */\n/* PROGRESS */\n/* BADGE */\n/* SHADOWS */\n/* GRID */\n/* DATA TABLE */\n/* DIALOG */\n/* SNACKBAR */\n/* TOOLTIP */\n/* CHIP */\n/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/* Typography */\n/* Shadows */\n/* Animations */\n/* Dialog */\n/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/* ==========  Color Palettes  ========== */\n/* colors.scss */\n/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/* ==========  Color Palettes  ========== */\n/* colors.scss */\n/* ==========  IMAGES  ========== */\n/* ==========  Color & Themes  ========== */\n.text-color--smoke {\n  color: #666; }\n.color--gray {\n  background-color: #444 !important; }\n.color--dark-gray {\n  background-color: #333; }\n.color--smooth-gray {\n  background-color: #999 !important; }\n.text-color--smooth-gray {\n  color: #999 !important; }\n.color--red {\n  background-color: #f44336 !important; }\n.color-text--red {\n  color: #f44336 !important; }\n.color--orange {\n  background-color: #ffc107 !important; }\n.color-text--orange {\n  color: #ffc107 !important; }\n.color--amber {\n  background-color: #ff9800 !important; }\n.color-text--amber {\n  color: #ff9800 !important; }\n.color--green {\n  background-color: #00d45a !important; }\n.color-text--green {\n  color: #00d45a !important; }\n.color--light-blue {\n  background-color: #03a9f4 !important; }\n.color-text--light-blue {\n  color: #03a9f4 !important; }\n.color--purple {\n  background-color: #7726d3 !important; }\n.color-text--purple {\n  color: #7726d3 !important; }\n.color--teal {\n  background-color: #00bcd4 !important; }\n.color-text--teal {\n  color: #00bcd4 !important; }\n/* ==========  Typography  ========== */\n/* ==========  Components  ========== */\n/* ==========  Standard Buttons  ========== */\n/* ==========  Icon Toggles  ========== */\n/* ==========  Radio Buttons  ========== */\n/* ==========  Ripple effect  ========== */\n/* ==========  Layout  ========== */\n/* ==========  Content Tabs  ========== */\n/* ==========  Checkboxes  ========== */\n/* ==========  Switches  ========== */\n/* ==========  Spinner  ========== */\n/* ==========  Text fields  ========== */\n/* ==========  Card  ========== */\n/* ==========  Sliders ========== */\n/* ========== Progress ========== */\n/* ==========  List ========== */\n/* ==========  Item ========== */\n/* ==========  Dropdown menu ========== */\n/* ==========  Tooltips  ========== */\n/* ==========  Footer  ========== */\n/* TEXTFIELD */\n/* SWITCH */\n/* SPINNER */\n/* RADIO */\n/* MENU */\n/* LIST */\n/* LAYOUT */\n/* ICON */\n/* ICON TOGGLE */\n/* FOOTER */\n/* mega-footer */\n/* mini-footer */\n/* CHECKBOX */\n/* CARD */\n/* Card dimensions */\n/* Cover image */\n/* BUTTON */\n/* ANIMATION */\n/* PROGRESS */\n/* BADGE */\n/* SHADOWS */\n/* GRID */\n/* DATA TABLE */\n/* TOOLTIP */\n/* WIDGETS & COMPONENTS */\n/* Trending */\n/* label */\n/* charts */\n/* employer form */\n/* row */\n/* scroll */\n.todo .mdl-card {\n  height: auto; }\n.todo .mdl-card__supporting-text {\n  width: 100%;\n  padding: 0;\n  min-height: 70px; }\n.todo .mdl-card__supporting-text .mdl-list__item {\n    align-items: flex-start;\n    padding-bottom: 0; }\n.todo .mdl-card__supporting-text .mdl-list__item .mdl-list__item-primary-content {\n      max-width: 100%;\n      word-wrap: break-word; }\n.todo .mdl-card__supporting-text .mdl-list__item .material-icons {\n      visibility: hidden; }\n.todo .mdl-card__supporting-text .mdl-list__item:hover .material-icons {\n      visibility: visible; }\n.todo .mdl-card__supporting-text .mdl-checkbox {\n    height: auto;\n    padding-left: 36px; }\n.todo .mdl-card__supporting-text .mdl-textfield {\n    width: 100%;\n    padding: 0; }\n.todo .mdl-card__supporting-text .mdl-textfield__input {\n    padding: 2px 0; }\n.todo .mdl-card__supporting-text .mdl-textfield__label {\n    color: rgba(255, 255, 255, 0.2);\n    top: 0; }\n.todo .mdl-card__supporting-text .mdl-textfield__label::after {\n      background-color: rgba(255, 255, 255, 0.7);\n      bottom: 0; }\n.todo .mdl-card__actions {\n  padding: 8px 16px;\n  margin-top: 20px;\n  background: rgba(255, 255, 255, 0.05); }\n"

/***/ }),

/***/ "./src/app/pages/dashboard/todo-list/todo-list.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/pages/dashboard/todo-list/todo-list.component.ts ***!
  \******************************************************************/
/*! exports provided: TodoListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoListComponent", function() { return TodoListComponent; });
/* harmony import */ var material_design_lite_material__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! material-design-lite/material */ "./node_modules/material-design-lite/material.js");
/* harmony import */ var material_design_lite_material__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(material_design_lite_material__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _todo_list_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./todo-list.service */ "./src/app/pages/dashboard/todo-list/todo-list.service.ts");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TodoListComponent = /** @class */ (function () {
    function TodoListComponent(todoListService) {
        this.todo = true;
        this.createdItem = null;
        this.items = todoListService.getItems();
    }
    Object.defineProperty(TodoListComponent.prototype, "todoInput", {
        set: function (element) {
            if (element) {
                element.nativeElement.focus();
            }
        },
        enumerable: true,
        configurable: true
    });
    TodoListComponent.prototype.ngAfterViewInit = function () {
        this.todoItemsSubscription = this.todoItems.changes.subscribe(function (todoItems) {
            if (todoItems.last) {
                componentHandler.upgradeElement(todoItems.last.nativeElement.querySelector('[checkboxitem]'));
                var textField = todoItems.last.nativeElement.querySelector('.mdl-textfield');
                if (textField) {
                    componentHandler.upgradeElement(textField);
                }
            }
        });
    };
    TodoListComponent.prototype.ngOnDestroy = function () {
        this.todoItemsSubscription.unsubscribe();
    };
    TodoListComponent.prototype.deleteItem = function (item) {
        this.items = this.items.filter(function (i) { return i !== item; });
    };
    TodoListComponent.prototype.createItem = function () {
        this.createdItem = {
            title: '',
            id: Date.now(),
            completed: false,
        };
    };
    TodoListComponent.prototype.addItem = function () {
        if (this.createdItem.title) {
            this.items.push(__assign({}, this.createdItem));
        }
        this.createdItem = null;
    };
    TodoListComponent.prototype.deleteCompletedItems = function () {
        this.items = this.items.filter(function (item) { return !item.completed; });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.todo'),
        __metadata("design:type", Object)
    ], TodoListComponent.prototype, "todo", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('todoInput'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
    ], TodoListComponent.prototype, "todoInput", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChildren"])('listItem'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["QueryList"])
    ], TodoListComponent.prototype, "todoItems", void 0);
    TodoListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-todo-list',
            styles: [__webpack_require__(/*! ./todo-list.component.scss */ "./src/app/pages/dashboard/todo-list/todo-list.component.scss")],
            template: __webpack_require__(/*! ./todo-list.component.html */ "./src/app/pages/dashboard/todo-list/todo-list.component.html"),
            providers: [_todo_list_service__WEBPACK_IMPORTED_MODULE_2__["TodoListService"]],
        }),
        __metadata("design:paramtypes", [_todo_list_service__WEBPACK_IMPORTED_MODULE_2__["TodoListService"]])
    ], TodoListComponent);
    return TodoListComponent;
}());



/***/ }),

/***/ "./src/app/pages/dashboard/todo-list/todo-list.service.ts":
/*!****************************************************************!*\
  !*** ./src/app/pages/dashboard/todo-list/todo-list.service.ts ***!
  \****************************************************************/
/*! exports provided: TodoListService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoListService", function() { return TodoListService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var TodoListService = /** @class */ (function () {
    function TodoListService() {
    }
    TodoListService.prototype.getItems = function () {
        return [
            {
                title: 'Fix bugs',
                id: 1651644545,
                completed: false,
            },
            {
                title: 'Implement 30% of my feature',
                id: 1651646545,
                completed: false,
            },
            {
                title: 'Fencing',
                id: 5451646545,
                completed: true,
            },
            {
                title: 'Read an article about Test-Driven Development',
                id: 5428646545,
                completed: false,
            },
        ];
    };
    TodoListService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], TodoListService);
    return TodoListService;
}());



/***/ }),

/***/ "./src/app/pages/dashboard/trending/index.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/dashboard/trending/index.ts ***!
  \***************************************************/
/*! exports provided: TrendingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _trending_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./trending.component */ "./src/app/pages/dashboard/trending/trending.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TrendingComponent", function() { return _trending_component__WEBPACK_IMPORTED_MODULE_0__["TrendingComponent"]; });




/***/ }),

/***/ "./src/app/pages/dashboard/trending/trending.component.html":
/*!******************************************************************!*\
  !*** ./src/app/pages/dashboard/trending/trending.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<base-card>\r\n  <base-card-title>\r\n    <h2 class=\"mdl-card__title-text\">Trending</h2>\r\n  </base-card-title>\r\n  <base-card-body>\r\n    <ul class=\"mdl-list\">\r\n    <li class=\"mdl-list__item\">\r\n      <span class=\"mdl-list__item-primary-content list__item-text\">UX</span>\r\n      <span class=\"mdl-list__item-secondary-content\">\r\n        <i class=\"material-icons trending__arrow-up\" role=\"presentation\">arrow_drop_up</i>\r\n             </span>\r\n      <span class=\"mdl-list__item-secondary-content trending__percent\">1 %</span>\r\n    </li>\r\n    <li class=\"mdl-list__item list__item--border-top\">\r\n      <span class=\"mdl-list__item-primary-content list__item-text\">PHP</span>\r\n      <span class=\"mdl-list__item-secondary-content\">\r\n               <i class=\"material-icons trending__arrow-down\" role=\"presentation\">arrow_drop_down</i>\r\n             </span>\r\n      <span class=\"mdl-list__item-secondary-content trending__percent\">2 %</span>\r\n    </li>\r\n    <li class=\"mdl-list__item list__item--border-top\">\r\n      <span class=\"mdl-list__item-primary-content list__item-text \">Big Data</span>\r\n      <span class=\"mdl-list__item-secondary-content\">\r\n               <i class=\"material-icons trending__arrow-up\" role=\"presentation\">arrow_drop_up</i>\r\n             </span>\r\n      <span class=\"mdl-list__item-secondary-content trending__percent\">5 %</span>\r\n    </li>\r\n    <li class=\"mdl-list__item list__item--border-top\">\r\n      <span class=\"mdl-list__item-primary-content list__item-text\">Material Design</span>\r\n      <span class=\"mdl-list__item-secondary-content\">\r\n               <i class=\"material-icons trending__arrow-up\" role=\"presentation\">arrow_drop_up</i>\r\n             </span>\r\n      <span class=\"mdl-list__item-secondary-content trending__percent\">18 %</span>\r\n    </li>\r\n    <li class=\"mdl-list__item list__item--border-top\">\r\n      <span class=\"mdl-list__item-primary-content\">JavaScript</span>\r\n      <span class=\"mdl-list__item-secondary-content\">\r\n               <i class=\"material-icons trending__arrow-up\" role=\"presentation\">arrow_drop_up</i>\r\n             </span>\r\n      <span class=\"mdl-list__item-secondary-content trending__percent\">17 %</span>\r\n    </li>\r\n  </ul>\r\n  </base-card-body>\r\n</base-card>\r\n"

/***/ }),

/***/ "./src/app/pages/dashboard/trending/trending.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/pages/dashboard/trending/trending.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/*------------------------------------*\\\n    $CONTENTS\n\\*------------------------------------*/\n/**\n * STYLE GUIDE VARIABLES------------------Declarations of Sass variables\n * -----Typography\n * -----Colors\n * -----Textfield\n * -----Switch\n * -----Spinner\n * -----Radio\n * -----Menu\n * -----List\n * -----Layout\n * -----Icon toggles\n * -----Footer\n * -----Column\n * -----Checkbox\n * -----Card\n * -----Button\n * -----Animation\n * -----Progress\n * -----Badge\n * -----Shadows\n * -----Grid\n * -----Data table\n * -----Dialog\n * -----Snackbar\n * -----Tooltip\n * -----Chip\n *\n * Even though all variables have the `!default` directive, most of them\n * should not be changed as they are dependent one another. This can cause\n * visual distortions (like alignment issues) that are hard to track down\n * and fix.\n */\n/* ==========  TYPOGRAPHY  ========== */\n/* We're splitting fonts into \"preferred\" and \"performance\" in order to optimize\n   page loading. For important text, such as the body, we want it to load\n   immediately and not wait for the web font load, whereas for other sections,\n   such as headers and titles, we're OK with things taking a bit longer to load.\n   We do have some optional classes and parameters in the mixins, in case you\n   definitely want to make sure you're using the preferred font and don't mind\n   the performance hit.\n   We should be able to improve on this once CSS Font Loading L3 becomes more\n   widely available.\n*/\n/* ==========  COLORS  ========== */\n/**\n*\n* Material design color palettes.\n* @see http://www.google.com/design/spec/style/color.html\n*\n**/\n/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/* ==========  Color Palettes  ========== */\n/* colors.scss */\n/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/* ==========  IMAGES  ========== */\n/* ==========  Color & Themes  ========== */\n/* ==========  Typography  ========== */\n/* ==========  Components  ========== */\n/* ==========  Standard Buttons  ========== */\n/* ==========  Icon Toggles  ========== */\n/* ==========  Radio Buttons  ========== */\n/* ==========  Ripple effect  ========== */\n/* ==========  Layout  ========== */\n/* ==========  Content Tabs  ========== */\n/* ==========  Checkboxes  ========== */\n/* ==========  Switches  ========== */\n/* ==========  Spinner  ========== */\n/* ==========  Text fields  ========== */\n/* ==========  Card  ========== */\n/* ==========  Sliders ========== */\n/* ========== Progress ========== */\n/* ==========  List ========== */\n/* ==========  Item ========== */\n/* ==========  Dropdown menu ========== */\n/* ==========  Tooltips  ========== */\n/* ==========  Footer  ========== */\n/* TEXTFIELD */\n/* SWITCH */\n/* SPINNER */\n/* RADIO */\n/* MENU */\n/* LIST */\n/* LAYOUT */\n/* ICON TOGGLE */\n/* FOOTER */\n/*mega-footer*/\n/*mini-footer*/\n/* CHECKBOX */\n/* CARD */\n/* Card dimensions */\n/* Cover image */\n/* BUTTON */\n/**\n *\n * Dimensions\n *\n */\n/* ANIMATION */\n/* PROGRESS */\n/* BADGE */\n/* SHADOWS */\n/* GRID */\n/* DATA TABLE */\n/* DIALOG */\n/* SNACKBAR */\n/* TOOLTIP */\n/* CHIP */\n/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/* Typography */\n/* Shadows */\n/* Animations */\n/* Dialog */\n/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/* ==========  Color Palettes  ========== */\n/* colors.scss */\n/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/* ==========  Color Palettes  ========== */\n/* colors.scss */\n/* ==========  IMAGES  ========== */\n/* ==========  Color & Themes  ========== */\n.text-color--smoke {\n  color: #666; }\n.color--gray {\n  background-color: #444 !important; }\n.color--dark-gray {\n  background-color: #333; }\n.color--smooth-gray {\n  background-color: #999 !important; }\n.text-color--smooth-gray {\n  color: #999 !important; }\n.color--red {\n  background-color: #f44336 !important; }\n.color-text--red {\n  color: #f44336 !important; }\n.color--orange {\n  background-color: #ffc107 !important; }\n.color-text--orange {\n  color: #ffc107 !important; }\n.color--amber {\n  background-color: #ff9800 !important; }\n.color-text--amber {\n  color: #ff9800 !important; }\n.color--green {\n  background-color: #00d45a !important; }\n.color-text--green {\n  color: #00d45a !important; }\n.color--light-blue {\n  background-color: #03a9f4 !important; }\n.color-text--light-blue {\n  color: #03a9f4 !important; }\n.color--purple {\n  background-color: #7726d3 !important; }\n.color-text--purple {\n  color: #7726d3 !important; }\n.color--teal {\n  background-color: #00bcd4 !important; }\n.color-text--teal {\n  color: #00bcd4 !important; }\n/* ==========  Typography  ========== */\n/* ==========  Components  ========== */\n/* ==========  Standard Buttons  ========== */\n/* ==========  Icon Toggles  ========== */\n/* ==========  Radio Buttons  ========== */\n/* ==========  Ripple effect  ========== */\n/* ==========  Layout  ========== */\n/* ==========  Content Tabs  ========== */\n/* ==========  Checkboxes  ========== */\n/* ==========  Switches  ========== */\n/* ==========  Spinner  ========== */\n/* ==========  Text fields  ========== */\n/* ==========  Card  ========== */\n/* ==========  Sliders ========== */\n/* ========== Progress ========== */\n/* ==========  List ========== */\n/* ==========  Item ========== */\n/* ==========  Dropdown menu ========== */\n/* ==========  Tooltips  ========== */\n/* ==========  Footer  ========== */\n/* TEXTFIELD */\n/* SWITCH */\n/* SPINNER */\n/* RADIO */\n/* MENU */\n/* LIST */\n/* LAYOUT */\n/* ICON */\n/* ICON TOGGLE */\n/* FOOTER */\n/* mega-footer */\n/* mini-footer */\n/* CHECKBOX */\n/* CARD */\n/* Card dimensions */\n/* Cover image */\n/* BUTTON */\n/* ANIMATION */\n/* PROGRESS */\n/* BADGE */\n/* SHADOWS */\n/* GRID */\n/* DATA TABLE */\n/* TOOLTIP */\n/* WIDGETS & COMPONENTS */\n/* Trending */\n/* label */\n/* charts */\n/* employer form */\n/* row */\n/* scroll */\n.trending .mdl-card__supporting-text {\n  width: 100%;\n  padding: 8px 0; }\n.trending .mdl-list__item:hover {\n  background-color: rgba(0, 0, 0, 0.2); }\n.trending .mdl-list__item .mdl-list__item-secondary-content {\n  margin: 0; }\n.trending .material-icons {\n  line-height: 0.33333;\n  font-size: 48px; }\n.trending__arrow-up {\n  color: #00bcd4; }\n.trending__arrow-down {\n  color: #f44336; }\n.trending__percent {\n  text-align: right;\n  width: 40px; }\n"

/***/ }),

/***/ "./src/app/pages/dashboard/trending/trending.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/pages/dashboard/trending/trending.component.ts ***!
  \****************************************************************/
/*! exports provided: TrendingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrendingComponent", function() { return TrendingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TrendingComponent = /** @class */ (function () {
    function TrendingComponent() {
        this.trending = true;
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])('class.trending'),
        __metadata("design:type", Object)
    ], TrendingComponent.prototype, "trending", void 0);
    TrendingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-trending',
            styles: [__webpack_require__(/*! ./trending.component.scss */ "./src/app/pages/dashboard/trending/trending.component.scss")],
            template: __webpack_require__(/*! ./trending.component.html */ "./src/app/pages/dashboard/trending/trending.component.html"),
        })
    ], TrendingComponent);
    return TrendingComponent;
}());



/***/ }),

/***/ "./src/app/pages/dashboard/weather/index.ts":
/*!**************************************************!*\
  !*** ./src/app/pages/dashboard/weather/index.ts ***!
  \**************************************************/
/*! exports provided: WeatherComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _weather_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./weather.component */ "./src/app/pages/dashboard/weather/weather.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WeatherComponent", function() { return _weather_component__WEBPACK_IMPORTED_MODULE_0__["WeatherComponent"]; });




/***/ }),

/***/ "./src/app/pages/dashboard/weather/weather.component.html":
/*!****************************************************************!*\
  !*** ./src/app/pages/dashboard/weather/weather.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<base-card>\r\n  <base-card-title>\r\n    <h2 class=\"mdl-card__title-text\">Now</h2>\r\n    <div class=\"mdl-layout-spacer\"></div>\r\n    <div class=\"mdl-card__subtitle-text\">\r\n      <i class=\"material-icons\">room</i>\r\n      Minsk, Belarus\r\n    </div>\r\n  </base-card-title>\r\n  <base-card-body expanded>\r\n    <p class=\"weather-temperature\">-11<sup>&deg;</sup></p>\r\n    <p class=\"weather-description\">\r\n      Cloudy and snow\r\n    </p>\r\n  </base-card-body>\r\n</base-card>\r\n"

/***/ }),

/***/ "./src/app/pages/dashboard/weather/weather.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/pages/dashboard/weather/weather.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/*------------------------------------*\\\n    $CONTENTS\n\\*------------------------------------*/\n/**\n * STYLE GUIDE VARIABLES------------------Declarations of Sass variables\n * -----Typography\n * -----Colors\n * -----Textfield\n * -----Switch\n * -----Spinner\n * -----Radio\n * -----Menu\n * -----List\n * -----Layout\n * -----Icon toggles\n * -----Footer\n * -----Column\n * -----Checkbox\n * -----Card\n * -----Button\n * -----Animation\n * -----Progress\n * -----Badge\n * -----Shadows\n * -----Grid\n * -----Data table\n * -----Dialog\n * -----Snackbar\n * -----Tooltip\n * -----Chip\n *\n * Even though all variables have the `!default` directive, most of them\n * should not be changed as they are dependent one another. This can cause\n * visual distortions (like alignment issues) that are hard to track down\n * and fix.\n */\n/* ==========  TYPOGRAPHY  ========== */\n/* We're splitting fonts into \"preferred\" and \"performance\" in order to optimize\n   page loading. For important text, such as the body, we want it to load\n   immediately and not wait for the web font load, whereas for other sections,\n   such as headers and titles, we're OK with things taking a bit longer to load.\n   We do have some optional classes and parameters in the mixins, in case you\n   definitely want to make sure you're using the preferred font and don't mind\n   the performance hit.\n   We should be able to improve on this once CSS Font Loading L3 becomes more\n   widely available.\n*/\n/* ==========  COLORS  ========== */\n/**\n*\n* Material design color palettes.\n* @see http://www.google.com/design/spec/style/color.html\n*\n**/\n/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/* ==========  Color Palettes  ========== */\n/* colors.scss */\n/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/* ==========  IMAGES  ========== */\n/* ==========  Color & Themes  ========== */\n/* ==========  Typography  ========== */\n/* ==========  Components  ========== */\n/* ==========  Standard Buttons  ========== */\n/* ==========  Icon Toggles  ========== */\n/* ==========  Radio Buttons  ========== */\n/* ==========  Ripple effect  ========== */\n/* ==========  Layout  ========== */\n/* ==========  Content Tabs  ========== */\n/* ==========  Checkboxes  ========== */\n/* ==========  Switches  ========== */\n/* ==========  Spinner  ========== */\n/* ==========  Text fields  ========== */\n/* ==========  Card  ========== */\n/* ==========  Sliders ========== */\n/* ========== Progress ========== */\n/* ==========  List ========== */\n/* ==========  Item ========== */\n/* ==========  Dropdown menu ========== */\n/* ==========  Tooltips  ========== */\n/* ==========  Footer  ========== */\n/* TEXTFIELD */\n/* SWITCH */\n/* SPINNER */\n/* RADIO */\n/* MENU */\n/* LIST */\n/* LAYOUT */\n/* ICON TOGGLE */\n/* FOOTER */\n/*mega-footer*/\n/*mini-footer*/\n/* CHECKBOX */\n/* CARD */\n/* Card dimensions */\n/* Cover image */\n/* BUTTON */\n/**\n *\n * Dimensions\n *\n */\n/* ANIMATION */\n/* PROGRESS */\n/* BADGE */\n/* SHADOWS */\n/* GRID */\n/* DATA TABLE */\n/* DIALOG */\n/* SNACKBAR */\n/* TOOLTIP */\n/* CHIP */\n/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/* Typography */\n/* Shadows */\n/* Animations */\n/* Dialog */\n/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/* ==========  Color Palettes  ========== */\n/* colors.scss */\n/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/* ==========  Color Palettes  ========== */\n/* colors.scss */\n/* ==========  IMAGES  ========== */\n/* ==========  Color & Themes  ========== */\n.text-color--smoke {\n  color: #666; }\n.color--gray {\n  background-color: #444 !important; }\n.color--dark-gray {\n  background-color: #333; }\n.color--smooth-gray {\n  background-color: #999 !important; }\n.text-color--smooth-gray {\n  color: #999 !important; }\n.color--red {\n  background-color: #f44336 !important; }\n.color-text--red {\n  color: #f44336 !important; }\n.color--orange {\n  background-color: #ffc107 !important; }\n.color-text--orange {\n  color: #ffc107 !important; }\n.color--amber {\n  background-color: #ff9800 !important; }\n.color-text--amber {\n  color: #ff9800 !important; }\n.color--green {\n  background-color: #00d45a !important; }\n.color-text--green {\n  color: #00d45a !important; }\n.color--light-blue {\n  background-color: #03a9f4 !important; }\n.color-text--light-blue {\n  color: #03a9f4 !important; }\n.color--purple {\n  background-color: #7726d3 !important; }\n.color-text--purple {\n  color: #7726d3 !important; }\n.color--teal {\n  background-color: #00bcd4 !important; }\n.color-text--teal {\n  color: #00bcd4 !important; }\n/* ==========  Typography  ========== */\n/* ==========  Components  ========== */\n/* ==========  Standard Buttons  ========== */\n/* ==========  Icon Toggles  ========== */\n/* ==========  Radio Buttons  ========== */\n/* ==========  Ripple effect  ========== */\n/* ==========  Layout  ========== */\n/* ==========  Content Tabs  ========== */\n/* ==========  Checkboxes  ========== */\n/* ==========  Switches  ========== */\n/* ==========  Spinner  ========== */\n/* ==========  Text fields  ========== */\n/* ==========  Card  ========== */\n/* ==========  Sliders ========== */\n/* ========== Progress ========== */\n/* ==========  List ========== */\n/* ==========  Item ========== */\n/* ==========  Dropdown menu ========== */\n/* ==========  Tooltips  ========== */\n/* ==========  Footer  ========== */\n/* TEXTFIELD */\n/* SWITCH */\n/* SPINNER */\n/* RADIO */\n/* MENU */\n/* LIST */\n/* LAYOUT */\n/* ICON */\n/* ICON TOGGLE */\n/* FOOTER */\n/* mega-footer */\n/* mini-footer */\n/* CHECKBOX */\n/* CARD */\n/* Card dimensions */\n/* Cover image */\n/* BUTTON */\n/* ANIMATION */\n/* PROGRESS */\n/* BADGE */\n/* SHADOWS */\n/* GRID */\n/* DATA TABLE */\n/* TOOLTIP */\n/* WIDGETS & COMPONENTS */\n/* Trending */\n/* label */\n/* charts */\n/* employer form */\n/* row */\n/* scroll */\n.weather .mdl-card__supporting-text {\n  color: #fff;\n  background: url(\"assets/images/weather_bck.png\") center center no-repeat;\n  background-size: cover;\n  text-align: right;\n  padding-top: 38px;\n  text-shadow: 4px 4px 4px rgba(0, 0, 0, 0.4); }\n.weather .mdl-card__supporting-text .weather-temperature {\n    font-family: \"Roboto\", \"Helvetica\", \"Arial\", sans-serif;\n    font-size: 100px;\n    line-height: 1;\n    color: rgba(255, 255, 255, 0.9); }\n.weather .mdl-card__supporting-text .weather-temperature sup {\n      position: relative;\n      top: 13px; }\n.weather .mdl-card__supporting-text .weather-description {\n    font-family: \"Roboto\", \"Helvetica\", \"Arial\", sans-serif;\n    font-size: 18px;\n    font-weight: 300;\n    position: relative;\n    color: #fff; }\n.weather .mdl-card__supporting-text .weather-description::before {\n      width: 35px;\n      position: absolute;\n      right: 150px;\n      content: url(\"assets/images/cloudy_and_snow.svg\"); }\n.weather .mdl-card__title .mdl-card__subtitle-text {\n  font-family: \"Roboto\", \"Helvetica\", \"Arial\", sans-serif;\n  font-size: 16px;\n  font-weight: 300; }\n.weather .mdl-card__title .mdl-card__subtitle-text .material-icons {\n    font-size: 16px;\n    top: 2px;\n    position: relative; }\n"

/***/ }),

/***/ "./src/app/pages/dashboard/weather/weather.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/pages/dashboard/weather/weather.component.ts ***!
  \**************************************************************/
/*! exports provided: WeatherComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WeatherComponent", function() { return WeatherComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var WeatherComponent = /** @class */ (function () {
    function WeatherComponent() {
        this.weather = true;
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])('class.weather'),
        __metadata("design:type", Object)
    ], WeatherComponent.prototype, "weather", void 0);
    WeatherComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-weather',
            styles: [__webpack_require__(/*! ./weather.component.scss */ "./src/app/pages/dashboard/weather/weather.component.scss")],
            template: __webpack_require__(/*! ./weather.component.html */ "./src/app/pages/dashboard/weather/weather.component.html"),
        })
    ], WeatherComponent);
    return WeatherComponent;
}());



/***/ }),

/***/ "./src/app/pages/dashboard2/dashboard2.component.html":
/*!************************************************************!*\
  !*** ./src/app/pages/dashboard2/dashboard2.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<base-right-sidebar-layout>\r\n  <base-right-sidebar-content>\r\n    <div class=\"mdl-grid\">\r\n      <div class=\"mdl-cell mdl-cell--12-col-desktop mdl-cell--12-col-tablet mdl-cell--12\">\r\n        <app-map-advanced></app-map-advanced>\r\n      </div>\r\n\r\n      <div class=\"mdl-cell mdl-cell--4-col-desktop mdl-cell--5-col-tablet mdl-cell--12-col-phone\">\r\n        <base-card>\r\n          <base-card-title>\r\n            <h2 class=\"mdl-card__title-text\">Country Statistics</h2>\r\n          </base-card-title>\r\n          <base-card-body>\r\n            <app-country-statistics-chart></app-country-statistics-chart>\r\n          </base-card-body>\r\n        </base-card>\r\n      </div>\r\n\r\n      <div class=\"mdl-cell mdl-cell--4-col-desktop mdl-cell--5-col-tablet mdl-cell--12-col-phone\">\r\n        <app-weather></app-weather>\r\n      </div>\r\n\r\n      <div class=\"mdl-cell mdl-cell--4-col-desktop mdl-cell--4-col-tablet mdl-cell--12-col-phone\">\r\n        <app-trending></app-trending>\r\n      </div>\r\n    </div>\r\n  </base-right-sidebar-content>\r\n\r\n  <base-right-sidebar [title]=\"'Filters'\">\r\n    <app-filters></app-filters>\r\n  </base-right-sidebar>\r\n\r\n</base-right-sidebar-layout>\r\n\r\n"

/***/ }),

/***/ "./src/app/pages/dashboard2/dashboard2.component.scss":
/*!************************************************************!*\
  !*** ./src/app/pages/dashboard2/dashboard2.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "app-dashboard-2 app-map-advanced {\n  margin: 0 !important; }\n  app-dashboard-2 app-map-advanced.map-advanced {\n    min-height: 500px; }\n  app-dashboard-2 app-map-advanced.map-advanced .map__window {\n      height: 500px; }\n  app-dashboard-2 base-right-sidebar .mdl-card__title-text {\n  text-transform: uppercase;\n  font-size: 14px;\n  line-height: 16px; }\n"

/***/ }),

/***/ "./src/app/pages/dashboard2/dashboard2.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/pages/dashboard2/dashboard2.component.ts ***!
  \**********************************************************/
/*! exports provided: Dashboard2Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Dashboard2Component", function() { return Dashboard2Component; });
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


var Dashboard2Component = /** @class */ (function (_super) {
    __extends(Dashboard2Component, _super);
    function Dashboard2Component() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Dashboard2Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard-2',
            styles: [__webpack_require__(/*! ./dashboard2.component.scss */ "./src/app/pages/dashboard2/dashboard2.component.scss")],
            template: __webpack_require__(/*! ./dashboard2.component.html */ "./src/app/pages/dashboard2/dashboard2.component.html"),
        })
    ], Dashboard2Component);
    return Dashboard2Component;
}(theme_components_upgradable__WEBPACK_IMPORTED_MODULE_1__["UpgradableComponent"]));



/***/ }),

/***/ "./src/app/pages/dashboard2/dashboard2.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/dashboard2/dashboard2.module.ts ***!
  \*******************************************************/
/*! exports provided: Dashboard2Module */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Dashboard2Module", function() { return Dashboard2Module; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var material_angular_select__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! material-angular-select */ "./node_modules/material-angular-select/fesm5/material-angular-select.js");
/* harmony import */ var theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! theme */ "./src/theme/index.ts");
/* harmony import */ var _charts_charts_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../charts/charts.module */ "./src/app/pages/charts/charts.module.ts");
/* harmony import */ var _dashboard_dashboard_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../dashboard/dashboard.module */ "./src/app/pages/dashboard/dashboard.module.ts");
/* harmony import */ var _maps_maps_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../maps/maps.module */ "./src/app/pages/maps/maps.module.ts");
/* harmony import */ var _dashboard2_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./dashboard2.component */ "./src/app/pages/dashboard2/dashboard2.component.ts");
/* harmony import */ var _filters_filters_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./filters/filters.component */ "./src/app/pages/dashboard2/filters/filters.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var Dashboard2Module = /** @class */ (function () {
    function Dashboard2Module() {
    }
    Dashboard2Module = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                theme__WEBPACK_IMPORTED_MODULE_4__["ThemeModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _dashboard_dashboard_module__WEBPACK_IMPORTED_MODULE_6__["DashboardModule"],
                _maps_maps_module__WEBPACK_IMPORTED_MODULE_7__["MapsModule"],
                _charts_charts_module__WEBPACK_IMPORTED_MODULE_5__["ChartsModule"],
                material_angular_select__WEBPACK_IMPORTED_MODULE_3__["MaterialAngularSelectModule"],
            ],
            declarations: [
                _dashboard2_component__WEBPACK_IMPORTED_MODULE_8__["Dashboard2Component"],
                _filters_filters_component__WEBPACK_IMPORTED_MODULE_9__["FiltersComponent"],
            ],
        })
    ], Dashboard2Module);
    return Dashboard2Module;
}());



/***/ }),

/***/ "./src/app/pages/dashboard2/filters/filters.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/pages/dashboard2/filters/filters.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"mdl-cell mdl-cell--12-col\">\r\n  <material-angular-select [data]=\"languages\"\r\n                    [name]=\"'language'\"\r\n                    [label]=\"'Language'\"\r\n                    [currentValue]=\"currentLanguage\"></material-angular-select>\r\n</div>\r\n\r\n<div class=\"mdl-cell mdl-cell--12-col\">\r\n  <material-angular-select [data]=\"currencies\"\r\n                    [name]=\"'currency'\"\r\n                    [label]=\"'Currency'\"\r\n                    [currentValue]=\"currentCurrency\"></material-angular-select>\r\n</div>\r\n\r\n<div class=\"mdl-cell mdl-cell--12-col\">\r\n  <material-angular-select [data]=\"['Male', 'Female']\"\r\n                    [name]=\"'gender'\"\r\n                    [label]=\"'Gender'\"\r\n                    [currentValue]=\"'Male'\"></material-angular-select>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/pages/dashboard2/filters/filters.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/pages/dashboard2/filters/filters.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "app-filters material-angular-select .mdl-menu__container .mdl-menu .mdl-menu__item,\napp-filters material-angular-select .mdl-textfield__input {\n  font-size: 13px; }\n\napp-filters material-angular-select.mdl-textfield {\n  width: 100%;\n  max-width: 240px; }\n\napp-filters material-angular-select .mdl-textfield__input {\n  line-height: 20px;\n  text-transform: capitalize; }\n\napp-filters material-angular-select .mdl-menu__item {\n  text-transform: capitalize; }\n"

/***/ }),

/***/ "./src/app/pages/dashboard2/filters/filters.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/dashboard2/filters/filters.component.ts ***!
  \***************************************************************/
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
            styles: [__webpack_require__(/*! ./filters.component.scss */ "./src/app/pages/dashboard2/filters/filters.component.scss")],
            template: __webpack_require__(/*! ./filters.component.html */ "./src/app/pages/dashboard2/filters/filters.component.html"),
        })
    ], FiltersComponent);
    return FiltersComponent;
}());



/***/ }),

/***/ "./src/app/pages/dashboard2/index.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/dashboard2/index.ts ***!
  \*******************************************/
/*! exports provided: Dashboard2Component, Dashboard2Module */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dashboard2_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dashboard2.component */ "./src/app/pages/dashboard2/dashboard2.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Dashboard2Component", function() { return _dashboard2_component__WEBPACK_IMPORTED_MODULE_0__["Dashboard2Component"]; });

/* harmony import */ var _dashboard2_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dashboard2.module */ "./src/app/pages/dashboard2/dashboard2.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Dashboard2Module", function() { return _dashboard2_module__WEBPACK_IMPORTED_MODULE_1__["Dashboard2Module"]; });





/***/ }),

/***/ "./src/app/pages/forms/employer-form/employer-form.component.html":
/*!************************************************************************!*\
  !*** ./src/app/pages/forms/employer-form/employer-form.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<base-card>\r\n  <base-card-title>\r\n    <h2>Form</h2>\r\n    <div class=\"mdl-card__subtitle\">Please complete the form</div>\r\n  </base-card-title>\r\n  <base-card-body>\r\n    <form action=\"#\" class=\"form\">\r\n      <div class=\"form__article\">\r\n        <h3>Personal data</h3>\r\n\r\n        <div class=\"mdl-grid\">\r\n          <div class=\"mdl-cell mdl-cell--6-col mdl-textfield mdl-js-textfield mdl-textfield--floating-label\">\r\n            <input class=\"mdl-textfield__input\" type=\"text\" id=\"firstName\" value=\"Tiven\"/>\r\n            <label class=\"mdl-textfield__label\" for=\"firstName\">First name</label>\r\n          </div>\r\n\r\n          <div class=\"mdl-cell mdl-cell--6-col mdl-textfield mdl-js-textfield mdl-textfield--floating-label\">\r\n            <input class=\"mdl-textfield__input\" type=\"text\" id=\"secondName\" value=\"Wang\"/>\r\n            <label class=\"mdl-textfield__label\" for=\"secondName\">Second name</label>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"mdl-grid\">\r\n          <div class=\"mdl-cell mdl-cell--6-col mdl-textfield mdl-js-textfield mdl-textfield--floating-label\">\r\n            <input class=\"mdl-textfield__input\" type=\"text\" id=\"birthday\" value=\"25 May, 1988\"/>\r\n            <label class=\"mdl-textfield__label\" for=\"birthday\">Birthday</label>\r\n          </div>\r\n\r\n          <div class=\"mdl-cell mdl-cell--6-col\">\r\n            <material-angular-select [data]=\"['Male', 'Female']\"\r\n                                  [label]=\"'Gender'\"\r\n                                  [name]=\"'gender'\"\r\n                                  [currentValue]=\"'Male'\"\r\n                                  [fixHeight]=\"true\"></material-angular-select>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"form__article\">\r\n        <h3>Employment</h3>\r\n\r\n        <div class=\"mdl-grid\">\r\n          <div class=\"mdl-cell mdl-cell--6-col mdl-textfield mdl-js-textfield mdl-textfield--floating-label\">\r\n            <input class=\"mdl-textfield__input\" type=\"text\" value=\"Xiaomi\" id=\"company\" disabled/>\r\n            <label class=\"mdl-textfield__label\" for=\"company\">Company</label>\r\n          </div>\r\n          <div class=\"mdl-cell mdl-cell--6-col mdl-textfield mdl-js-textfield mdl-textfield--floating-label\">\r\n            <input class=\"mdl-textfield__input\" type=\"text\" id=\"company_email\" value=\"i.tiven.wang@gmail.com\" disabled/>\r\n            <label class=\"mdl-textfield__label\" for=\"company_email\">Company email</label>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"mdl-grid\">\r\n          <div class=\"mdl-cell mdl-cell--6-col mdl-textfield mdl-js-textfield mdl-textfield--floating-label\">\r\n            <input class=\"mdl-textfield__input\" type=\"text\" value=\"Lead developer\" id=\"position\"/>\r\n            <label class=\"mdl-textfield__label\" for=\"position\">Position</label>\r\n          </div>\r\n          <div class=\"mdl-cell mdl-cell--6-col\">\r\n            <material-angular-select [data]=\"qualifications\"\r\n                                  [label]=\"'Qualification'\"\r\n                                  [name]=\"'qualification'\"\r\n                                  [currentValue]=\"'Junior'\"\r\n                                  [fixHeight]=\"true\"></material-angular-select>\r\n          </div>\r\n        </div>\r\n\r\n        <span>Type of employment:</span>\r\n\r\n        <label class=\"mdl-radio mdl-js-radio mdl-js-ripple-effect\" for=\"partition-fulltime\">\r\n          <input type=\"radio\" id=\"partition-fulltime\" class=\"mdl-radio__button\" name=\"employment\" value=\"1\" checked/>\r\n          <span class=\"mdl-radio__label\">Fulltime</span>\r\n        </label>\r\n        <label class=\"mdl-radio mdl-js-radio mdl-js-ripple-effect\" for=\"partition-partTime\">\r\n          <input type=\"radio\" id=\"partition-partTime\" class=\"mdl-radio__button\" name=\"employment\" value=\"2\"/>\r\n          <span class=\"mdl-radio__label\">Part time</span>\r\n        </label>\r\n        <label class=\"mdl-radio mdl-js-radio mdl-js-ripple-effect\" for=\"partition-remote\">\r\n          <input type=\"radio\" id=\"partition-remote\" class=\"mdl-radio__button\" name=\"employment\" value=\"3\"/>\r\n          <span class=\"mdl-radio__label\">Remote</span>\r\n        </label>\r\n      </div>\r\n\r\n      <div class=\"form__article employer-form__contacts\">\r\n        <h3>Contacts</h3>\r\n\r\n        <div class=\"mdl-grid\">\r\n          <div class=\"mdl-cell mdl-cell--9-col input-group\">\r\n            <i class=\"material-icons pull-left\">call</i>\r\n\r\n            <div class=\"mdl-textfield mdl-js-textfield pull-left\">\r\n              <input class=\"mdl-textfield__input\" type=\"text\" id=\"phone\">\r\n              <label class=\"mdl-textfield__label\" for=\"phone\">XXX-XX-XX</label>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"mdl-cell mdl-cell--3-col\">\r\n            <material-angular-select [data]=\"['Mobile', 'Home', 'Work']\"\r\n                                  [name]=\"'phone_type'\"\r\n                                  [currentValue]=\"'Mobile'\"></material-angular-select>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"mdl-grid\">\r\n          <div class=\"mdl-cell mdl-cell--9-col input-group\">\r\n            <img src=\"assets/images/skype.svg\">\r\n\r\n            <div class=\"mdl-textfield mdl-js-textfield pull-left\">\r\n              <input class=\"mdl-textfield__input\" type=\"text\" id=\"skype\" value=\"Tiven\"/>\r\n              <label class=\"mdl-textfield__label\" for=\"skype\">Skype</label>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"mdl-cell mdl-cell--3-col\">\r\n            <material-angular-select [data]=\"['Personal', 'Work']\"\r\n                                  [name]=\"'skype_type'\"\r\n                                  [currentValue]=\"'Personal'\"></material-angular-select>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"mdl-grid\">\r\n          <div class=\"mdl-cell mdl-cell--9-col input-group\">\r\n            <i class=\"material-icons pull-left\">mail_outline</i>\r\n\r\n            <div class=\"mdl-textfield mdl-js-textfield pull-left\">\r\n              <input class=\"mdl-textfield__input\" type=\"text\" id=\"email\" value=\"i.tiven.wang@gmail.com\"/>\r\n              <label class=\"mdl-textfield__label\" for=\"email\">Email</label>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"mdl-cell mdl-cell--3-col\">\r\n            <material-angular-select [data]=\"['Personal', 'Work']\"\r\n                                  [name]=\"'email_type'\"\r\n                                  [currentValue]=\"'Work'\"></material-angular-select>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"mdl-grid\">\r\n          <div class=\"mdl-cell mdl-cell--9-col input-group\">\r\n            <i class=\"material-icons pull-left\">place</i>\r\n\r\n            <div class=\"mdl-textfield mdl-js-textfield pull-left\">\r\n              <input class=\"mdl-textfield__input\" type=\"text\" id=\"address\"/>\r\n              <label class=\"mdl-textfield__label\" for=\"address\">Address</label>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"mdl-cell mdl-cell--3-col\">\r\n            <material-angular-select [data]=\"['Home', 'Work']\"\r\n                                  [name]=\"'address_type'\"\r\n                                  [currentValue]=\"'Home'\"></material-angular-select>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"form__article employer-form__general_skills\">\r\n        <h3>General skills</h3>\r\n\r\n        <div class=\"mdl-textfield mdl-js-textfield mdl-textfield--floating-label\">\r\n          <textarea class=\"mdl-textfield__input\" type=\"text\" rows=\"3\" id=\"AboutMe\"></textarea>\r\n          <label class=\"mdl-textfield__label\" for=\"AboutMe\">About me</label>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"form__action\">\r\n        <label class=\"mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect\" for=\"isInfoReliable\">\r\n          <input #isInfoReliable type=\"checkbox\" id=\"isInfoReliable\" class=\"mdl-checkbox__input\" required/>\r\n          <span class=\"mdl-checkbox__label\">Entered information is reliable</span>\r\n        </label>\r\n        <button [disabled]=\"!isInfoReliable.checked\" id=\"submit_button\"\r\n                class=\"mdl-button mdl-js-button mdl-button--raised mdl-button--colored\">\r\n          Submit\r\n        </button>\r\n      </div>\r\n    </form>\r\n  </base-card-body>\r\n</base-card>\r\n"

/***/ }),

/***/ "./src/app/pages/forms/employer-form/employer-form.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/pages/forms/employer-form/employer-form.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/*------------------------------------*\\\n    $CONTENTS\n\\*------------------------------------*/\n/**\n * STYLE GUIDE VARIABLES------------------Declarations of Sass variables\n * -----Typography\n * -----Colors\n * -----Textfield\n * -----Switch\n * -----Spinner\n * -----Radio\n * -----Menu\n * -----List\n * -----Layout\n * -----Icon toggles\n * -----Footer\n * -----Column\n * -----Checkbox\n * -----Card\n * -----Button\n * -----Animation\n * -----Progress\n * -----Badge\n * -----Shadows\n * -----Grid\n * -----Data table\n * -----Dialog\n * -----Snackbar\n * -----Tooltip\n * -----Chip\n *\n * Even though all variables have the `!default` directive, most of them\n * should not be changed as they are dependent one another. This can cause\n * visual distortions (like alignment issues) that are hard to track down\n * and fix.\n */\n/* ==========  TYPOGRAPHY  ========== */\n/* We're splitting fonts into \"preferred\" and \"performance\" in order to optimize\n   page loading. For important text, such as the body, we want it to load\n   immediately and not wait for the web font load, whereas for other sections,\n   such as headers and titles, we're OK with things taking a bit longer to load.\n   We do have some optional classes and parameters in the mixins, in case you\n   definitely want to make sure you're using the preferred font and don't mind\n   the performance hit.\n   We should be able to improve on this once CSS Font Loading L3 becomes more\n   widely available.\n*/\n/* ==========  COLORS  ========== */\n/**\n*\n* Material design color palettes.\n* @see http://www.google.com/design/spec/style/color.html\n*\n**/\n/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/* ==========  Color Palettes  ========== */\n/* colors.scss */\n/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/* ==========  IMAGES  ========== */\n/* ==========  Color & Themes  ========== */\n/* ==========  Typography  ========== */\n/* ==========  Components  ========== */\n/* ==========  Standard Buttons  ========== */\n/* ==========  Icon Toggles  ========== */\n/* ==========  Radio Buttons  ========== */\n/* ==========  Ripple effect  ========== */\n/* ==========  Layout  ========== */\n/* ==========  Content Tabs  ========== */\n/* ==========  Checkboxes  ========== */\n/* ==========  Switches  ========== */\n/* ==========  Spinner  ========== */\n/* ==========  Text fields  ========== */\n/* ==========  Card  ========== */\n/* ==========  Sliders ========== */\n/* ========== Progress ========== */\n/* ==========  List ========== */\n/* ==========  Item ========== */\n/* ==========  Dropdown menu ========== */\n/* ==========  Tooltips  ========== */\n/* ==========  Footer  ========== */\n/* TEXTFIELD */\n/* SWITCH */\n/* SPINNER */\n/* RADIO */\n/* MENU */\n/* LIST */\n/* LAYOUT */\n/* ICON TOGGLE */\n/* FOOTER */\n/*mega-footer*/\n/*mini-footer*/\n/* CHECKBOX */\n/* CARD */\n/* Card dimensions */\n/* Cover image */\n/* BUTTON */\n/**\n *\n * Dimensions\n *\n */\n/* ANIMATION */\n/* PROGRESS */\n/* BADGE */\n/* SHADOWS */\n/* GRID */\n/* DATA TABLE */\n/* DIALOG */\n/* SNACKBAR */\n/* TOOLTIP */\n/* CHIP */\n/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/* Typography */\n/* Shadows */\n/* Animations */\n/* Dialog */\n/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/* ==========  Color Palettes  ========== */\n/* colors.scss */\n/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/* ==========  Color Palettes  ========== */\n/* colors.scss */\n/* ==========  IMAGES  ========== */\n/* ==========  Color & Themes  ========== */\n.text-color--smoke {\n  color: #666; }\n.color--gray {\n  background-color: #444 !important; }\n.color--dark-gray {\n  background-color: #333; }\n.color--smooth-gray {\n  background-color: #999 !important; }\n.text-color--smooth-gray {\n  color: #999 !important; }\n.color--red {\n  background-color: #f44336 !important; }\n.color-text--red {\n  color: #f44336 !important; }\n.color--orange {\n  background-color: #ffc107 !important; }\n.color-text--orange {\n  color: #ffc107 !important; }\n.color--amber {\n  background-color: #ff9800 !important; }\n.color-text--amber {\n  color: #ff9800 !important; }\n.color--green {\n  background-color: #00d45a !important; }\n.color-text--green {\n  color: #00d45a !important; }\n.color--light-blue {\n  background-color: #03a9f4 !important; }\n.color-text--light-blue {\n  color: #03a9f4 !important; }\n.color--purple {\n  background-color: #7726d3 !important; }\n.color-text--purple {\n  color: #7726d3 !important; }\n.color--teal {\n  background-color: #00bcd4 !important; }\n.color-text--teal {\n  color: #00bcd4 !important; }\n/* ==========  Typography  ========== */\n/* ==========  Components  ========== */\n/* ==========  Standard Buttons  ========== */\n/* ==========  Icon Toggles  ========== */\n/* ==========  Radio Buttons  ========== */\n/* ==========  Ripple effect  ========== */\n/* ==========  Layout  ========== */\n/* ==========  Content Tabs  ========== */\n/* ==========  Checkboxes  ========== */\n/* ==========  Switches  ========== */\n/* ==========  Spinner  ========== */\n/* ==========  Text fields  ========== */\n/* ==========  Card  ========== */\n/* ==========  Sliders ========== */\n/* ========== Progress ========== */\n/* ==========  List ========== */\n/* ==========  Item ========== */\n/* ==========  Dropdown menu ========== */\n/* ==========  Tooltips  ========== */\n/* ==========  Footer  ========== */\n/* TEXTFIELD */\n/* SWITCH */\n/* SPINNER */\n/* RADIO */\n/* MENU */\n/* LIST */\n/* LAYOUT */\n/* ICON */\n/* ICON TOGGLE */\n/* FOOTER */\n/* mega-footer */\n/* mini-footer */\n/* CHECKBOX */\n/* CARD */\n/* Card dimensions */\n/* Cover image */\n/* BUTTON */\n/* ANIMATION */\n/* PROGRESS */\n/* BADGE */\n/* SHADOWS */\n/* GRID */\n/* DATA TABLE */\n/* TOOLTIP */\n/* WIDGETS & COMPONENTS */\n/* Trending */\n/* label */\n/* charts */\n/* employer form */\n/* row */\n/* scroll */\n.employer-form .mdl-card {\n  padding: 0;\n  width: 670px;\n  background-color: #444;\n  margin: 16px auto;\n  height: auto; }\n.employer-form .mdl-radio {\n  width: 20%;\n  margin-top: 22px;\n  margin-bottom: 22px;\n  color: white; }\n.employer-form .form__article > span {\n  float: left;\n  width: 100%;\n  color: rgba(255, 255, 255, 0.6);\n  font-weight: 200; }\n.employer-form .mdl-card__title {\n  background-color: \"255,64,129\";\n  height: 66px;\n  width: 100%;\n  padding-top: 16px;\n  padding-left: 15px;\n  padding-right: 15px;\n  padding-bottom: 0;\n  display: block;\n  font-family: \"Roboto\", \"Helvetica\", \"Arial\", sans-serif; }\n.employer-form .mdl-card__title h2:first-of-type {\n    font-size: 24px;\n    font-weight: 400;\n    color: rgba(255, 255, 255, 0.8);\n    line-height: 1.2em;\n    margin-top: 0;\n    margin-bottom: 0; }\n.employer-form .mdl-card__title .mdl-card__subtitle {\n    font-size: 13px;\n    font-weight: 300;\n    color: rgba(255, 255, 255, 0.2);\n    line-height: 1.2em; }\n.employer-form button.mdl-button.mdl-button--colored {\n  width: 68px;\n  height: 32px;\n  font-family: \"Roboto\", \"Helvetica\", \"Arial\", sans-serif;\n  font-size: 13px;\n  line-height: 13px;\n  font-weight: 400;\n  color: #fff;\n  background-color: #00bcd4; }\n.employer-form button.mdl-button.mdl-button--colored:disabled {\n    background-color: gray;\n    color: rgba(255, 255, 255, 0.6); }\n.employer-form label {\n  font-size: 15px;\n  color: rgba(255, 255, 255, 0.6); }\n.employer-form .form__action .mdl-checkbox .mdl-ripple {\n  background: #00bcd4; }\n.employer-form .form__action .mdl-checkbox.is-checked .mdl-checkbox__box-outline {\n  border-color: #00bcd4; }\n.employer-form .form__action .mdl-checkbox.is-checked .mdl-checkbox__box-outline .mdl-checkbox__tick-outline {\n    background-color: #00bcd4;\n    background-image: url(\"assets/images/tick_dark.svg?embed\"); }\n.employer-form__general_skills {\n  margin-top: 24px; }\n.employer-form__general_skills div {\n    width: 100%; }\n.employer-form__general_skills .mdl-textfield label {\n    color: rgba(255, 255, 255, 0.6); }\n.employer-form__general_skills .mdl-textfield--floating-label.is-focused .mdl-textfield__label {\n    color: #00bcd4; }\n.employer-form__general_skills textarea {\n    height: 90px; }\n.employer-form__contacts div .mdl-textfield.getmdl-select .mdl-textfield__input {\n  color: rgba(255, 255, 255, 0.6); }\n.employer-form__contacts div .mdl-textfield {\n  padding-top: 0; }\n.employer-form__contacts div .mdl-textfield label {\n    top: 4px;\n    font-weight: 300; }\n.employer-form__contacts div i {\n  color: white; }\n"

/***/ }),

/***/ "./src/app/pages/forms/employer-form/employer-form.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/pages/forms/employer-form/employer-form.component.ts ***!
  \**********************************************************************/
/*! exports provided: EmployerFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployerFormComponent", function() { return EmployerFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var EmployerFormComponent = /** @class */ (function () {
    function EmployerFormComponent() {
        this.employerForm = true;
        this.qualifications = ['Young Padawan', 'Junior', 'Middle', 'Senior'];
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])('class.employer-form'),
        __metadata("design:type", Object)
    ], EmployerFormComponent.prototype, "employerForm", void 0);
    EmployerFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-employer-form',
            styles: [__webpack_require__(/*! ./employer-form.component.scss */ "./src/app/pages/forms/employer-form/employer-form.component.scss")],
            template: __webpack_require__(/*! ./employer-form.component.html */ "./src/app/pages/forms/employer-form/employer-form.component.html"),
        })
    ], EmployerFormComponent);
    return EmployerFormComponent;
}());



/***/ }),

/***/ "./src/app/pages/forms/employer-form/index.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/forms/employer-form/index.ts ***!
  \****************************************************/
/*! exports provided: EmployerFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _employer_form_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./employer-form.component */ "./src/app/pages/forms/employer-form/employer-form.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EmployerFormComponent", function() { return _employer_form_component__WEBPACK_IMPORTED_MODULE_0__["EmployerFormComponent"]; });




/***/ }),

/***/ "./src/app/pages/forms/forms.component.ts":
/*!************************************************!*\
  !*** ./src/app/pages/forms/forms.component.ts ***!
  \************************************************/
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


var FormsComponent = /** @class */ (function (_super) {
    __extends(FormsComponent, _super);
    function FormsComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FormsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-forms',
            template: "<app-employer-form></app-employer-form>",
        })
    ], FormsComponent);
    return FormsComponent;
}(theme_components_upgradable__WEBPACK_IMPORTED_MODULE_1__["UpgradableComponent"]));



/***/ }),

/***/ "./src/app/pages/forms/forms.module.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/forms/forms.module.ts ***!
  \*********************************************/
/*! exports provided: FormsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormsModule", function() { return FormsModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var material_angular_select__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! material-angular-select */ "./node_modules/material-angular-select/fesm5/material-angular-select.js");
/* harmony import */ var theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! theme */ "./src/theme/index.ts");
/* harmony import */ var _employer_form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./employer-form */ "./src/app/pages/forms/employer-form/index.ts");
/* harmony import */ var _forms_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./forms.component */ "./src/app/pages/forms/forms.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var FormsModule = /** @class */ (function () {
    function FormsModule() {
    }
    FormsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                theme__WEBPACK_IMPORTED_MODULE_4__["ThemeModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                material_angular_select__WEBPACK_IMPORTED_MODULE_3__["MaterialAngularSelectModule"],
            ],
            declarations: [
                _forms_component__WEBPACK_IMPORTED_MODULE_6__["FormsComponent"],
                _employer_form__WEBPACK_IMPORTED_MODULE_5__["EmployerFormComponent"],
            ],
            providers: [],
        })
    ], FormsModule);
    return FormsModule;
}());



/***/ }),

/***/ "./src/app/pages/forms/index.ts":
/*!**************************************!*\
  !*** ./src/app/pages/forms/index.ts ***!
  \**************************************/
/*! exports provided: FormsComponent, FormsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _forms_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./forms.component */ "./src/app/pages/forms/forms.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FormsComponent", function() { return _forms_component__WEBPACK_IMPORTED_MODULE_0__["FormsComponent"]; });

/* harmony import */ var _forms_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./forms.module */ "./src/app/pages/forms/forms.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FormsModule", function() { return _forms_module__WEBPACK_IMPORTED_MODULE_1__["FormsModule"]; });





/***/ }),

/***/ "./src/app/pages/maps/map-advanced/index.ts":
/*!**************************************************!*\
  !*** ./src/app/pages/maps/map-advanced/index.ts ***!
  \**************************************************/
/*! exports provided: MapAdvancedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _map_advanced_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./map-advanced.component */ "./src/app/pages/maps/map-advanced/map-advanced.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MapAdvancedComponent", function() { return _map_advanced_component__WEBPACK_IMPORTED_MODULE_0__["MapAdvancedComponent"]; });




/***/ }),

/***/ "./src/app/pages/maps/map-advanced/map-advanced-style.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/maps/map-advanced/map-advanced-style.ts ***!
  \***************************************************************/
/*! exports provided: MAP_STYLE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAP_STYLE", function() { return MAP_STYLE; });
var MAP_STYLE = [
    {
        featureType: 'administrative',
        elementType: 'geometry',
        stylers: [
            {
                visibility: 'off',
            },
        ],
    },
    {
        featureType: 'administrative.country',
        elementType: 'geometry.stroke',
        stylers: [
            {
                color: '#aeaeae',
            },
            {
                visibility: 'on',
            },
        ],
    },
    {
        featureType: 'administrative.land_parcel',
        stylers: [
            {
                visibility: 'off',
            },
        ],
    },
    {
        featureType: 'administrative.neighborhood',
        stylers: [
            {
                visibility: 'off',
            },
        ],
    },
    {
        featureType: 'landscape.natural',
        elementType: 'geometry.fill',
        stylers: [
            {
                color: '#ffffff',
            },
        ],
    },
    {
        featureType: 'poi',
        stylers: [
            {
                visibility: 'off',
            },
        ],
    },
    {
        featureType: 'poi',
        elementType: 'labels.text',
        stylers: [
            {
                visibility: 'off',
            },
        ],
    },
    {
        featureType: 'road',
        stylers: [
            {
                visibility: 'off',
            },
        ],
    },
    {
        featureType: 'road',
        elementType: 'labels',
        stylers: [
            {
                visibility: 'off',
            },
        ],
    },
    {
        featureType: 'road',
        elementType: 'labels.icon',
        stylers: [
            {
                visibility: 'off',
            },
        ],
    },
    {
        featureType: 'road.highway',
        elementType: 'geometry.fill',
        stylers: [
            {
                color: '#e4e4e4',
            },
            {
                saturation: -5,
            },
            {
                visibility: 'on',
            },
        ],
    },
    {
        featureType: 'transit',
        stylers: [
            {
                visibility: 'off',
            },
        ],
    },
    {
        featureType: 'water',
        elementType: 'geometry.fill',
        stylers: [
            {
                color: '#a9caf1',
            },
        ],
    },
    {
        featureType: 'water',
        elementType: 'labels.text',
        stylers: [
            {
                visibility: 'off',
            },
        ],
    },
];


/***/ }),

/***/ "./src/app/pages/maps/map-advanced/map-advanced.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/pages/maps/map-advanced/map-advanced.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<base-card>\r\n  <div #gmap class=\"mdl-card--expand map__window\"></div>\r\n</base-card>\r\n"

/***/ }),

/***/ "./src/app/pages/maps/map-advanced/map-advanced.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/pages/maps/map-advanced/map-advanced.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/*------------------------------------*\\\n    $CONTENTS\n\\*------------------------------------*/\n/**\n * STYLE GUIDE VARIABLES------------------Declarations of Sass variables\n * -----Typography\n * -----Colors\n * -----Textfield\n * -----Switch\n * -----Spinner\n * -----Radio\n * -----Menu\n * -----List\n * -----Layout\n * -----Icon toggles\n * -----Footer\n * -----Column\n * -----Checkbox\n * -----Card\n * -----Button\n * -----Animation\n * -----Progress\n * -----Badge\n * -----Shadows\n * -----Grid\n * -----Data table\n * -----Dialog\n * -----Snackbar\n * -----Tooltip\n * -----Chip\n *\n * Even though all variables have the `!default` directive, most of them\n * should not be changed as they are dependent one another. This can cause\n * visual distortions (like alignment issues) that are hard to track down\n * and fix.\n */\n/* ==========  TYPOGRAPHY  ========== */\n/* We're splitting fonts into \"preferred\" and \"performance\" in order to optimize\n   page loading. For important text, such as the body, we want it to load\n   immediately and not wait for the web font load, whereas for other sections,\n   such as headers and titles, we're OK with things taking a bit longer to load.\n   We do have some optional classes and parameters in the mixins, in case you\n   definitely want to make sure you're using the preferred font and don't mind\n   the performance hit.\n   We should be able to improve on this once CSS Font Loading L3 becomes more\n   widely available.\n*/\n/* ==========  COLORS  ========== */\n/**\n*\n* Material design color palettes.\n* @see http://www.google.com/design/spec/style/color.html\n*\n**/\n/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/* ==========  Color Palettes  ========== */\n/* colors.scss */\n/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/* ==========  IMAGES  ========== */\n/* ==========  Color & Themes  ========== */\n/* ==========  Typography  ========== */\n/* ==========  Components  ========== */\n/* ==========  Standard Buttons  ========== */\n/* ==========  Icon Toggles  ========== */\n/* ==========  Radio Buttons  ========== */\n/* ==========  Ripple effect  ========== */\n/* ==========  Layout  ========== */\n/* ==========  Content Tabs  ========== */\n/* ==========  Checkboxes  ========== */\n/* ==========  Switches  ========== */\n/* ==========  Spinner  ========== */\n/* ==========  Text fields  ========== */\n/* ==========  Card  ========== */\n/* ==========  Sliders ========== */\n/* ========== Progress ========== */\n/* ==========  List ========== */\n/* ==========  Item ========== */\n/* ==========  Dropdown menu ========== */\n/* ==========  Tooltips  ========== */\n/* ==========  Footer  ========== */\n/* TEXTFIELD */\n/* SWITCH */\n/* SPINNER */\n/* RADIO */\n/* MENU */\n/* LIST */\n/* LAYOUT */\n/* ICON TOGGLE */\n/* FOOTER */\n/*mega-footer*/\n/*mini-footer*/\n/* CHECKBOX */\n/* CARD */\n/* Card dimensions */\n/* Cover image */\n/* BUTTON */\n/**\n *\n * Dimensions\n *\n */\n/* ANIMATION */\n/* PROGRESS */\n/* BADGE */\n/* SHADOWS */\n/* GRID */\n/* DATA TABLE */\n/* DIALOG */\n/* SNACKBAR */\n/* TOOLTIP */\n/* CHIP */\n/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/* Typography */\n/* Shadows */\n/* Animations */\n/* Dialog */\n/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/* ==========  Color Palettes  ========== */\n/* colors.scss */\n/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/* ==========  Color Palettes  ========== */\n/* colors.scss */\n/* ==========  IMAGES  ========== */\n/* ==========  Color & Themes  ========== */\n.text-color--smoke {\n  color: #666; }\n.color--gray {\n  background-color: #444 !important; }\n.color--dark-gray {\n  background-color: #333; }\n.color--smooth-gray {\n  background-color: #999 !important; }\n.text-color--smooth-gray {\n  color: #999 !important; }\n.color--red {\n  background-color: #f44336 !important; }\n.color-text--red {\n  color: #f44336 !important; }\n.color--orange {\n  background-color: #ffc107 !important; }\n.color-text--orange {\n  color: #ffc107 !important; }\n.color--amber {\n  background-color: #ff9800 !important; }\n.color-text--amber {\n  color: #ff9800 !important; }\n.color--green {\n  background-color: #00d45a !important; }\n.color-text--green {\n  color: #00d45a !important; }\n.color--light-blue {\n  background-color: #03a9f4 !important; }\n.color-text--light-blue {\n  color: #03a9f4 !important; }\n.color--purple {\n  background-color: #7726d3 !important; }\n.color-text--purple {\n  color: #7726d3 !important; }\n.color--teal {\n  background-color: #00bcd4 !important; }\n.color-text--teal {\n  color: #00bcd4 !important; }\n/* ==========  Typography  ========== */\n/* ==========  Components  ========== */\n/* ==========  Standard Buttons  ========== */\n/* ==========  Icon Toggles  ========== */\n/* ==========  Radio Buttons  ========== */\n/* ==========  Ripple effect  ========== */\n/* ==========  Layout  ========== */\n/* ==========  Content Tabs  ========== */\n/* ==========  Checkboxes  ========== */\n/* ==========  Switches  ========== */\n/* ==========  Spinner  ========== */\n/* ==========  Text fields  ========== */\n/* ==========  Card  ========== */\n/* ==========  Sliders ========== */\n/* ========== Progress ========== */\n/* ==========  List ========== */\n/* ==========  Item ========== */\n/* ==========  Dropdown menu ========== */\n/* ==========  Tooltips  ========== */\n/* ==========  Footer  ========== */\n/* TEXTFIELD */\n/* SWITCH */\n/* SPINNER */\n/* RADIO */\n/* MENU */\n/* LIST */\n/* LAYOUT */\n/* ICON */\n/* ICON TOGGLE */\n/* FOOTER */\n/* mega-footer */\n/* mini-footer */\n/* CHECKBOX */\n/* CARD */\n/* Card dimensions */\n/* Cover image */\n/* BUTTON */\n/* ANIMATION */\n/* PROGRESS */\n/* BADGE */\n/* SHADOWS */\n/* GRID */\n/* DATA TABLE */\n/* TOOLTIP */\n/* WIDGETS & COMPONENTS */\n/* Trending */\n/* label */\n/* charts */\n/* employer form */\n/* row */\n/* scroll */\n.map-advanced {\n  min-height: 630px;\n  position: relative;\n  margin: 1rem;\n  display: block; }\n.map-advanced .map__window {\n    height: 630px;\n    background: #333; }\n.map-advanced .map__window .gm-style > div:nth-of-type(2),\n    .map-advanced .map__window .gm-style > .gmnoprint:not(.gm-bundled-control),\n    .map-advanced .map__window .gm-style > .gm-style-cc {\n      display: none; }\n.window-info {\n  z-index: 1000;\n  position: absolute;\n  opacity: 1;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  width: 200px; }\n.window-info .mdl-card__title {\n    background-color: #333;\n    padding: 12px 16px; }\n.window-info .mdl-card__title .mdl-card__title-text {\n      font-size: 16px; }\n.window-info .mdl-card__supporting-text {\n    font-size: 14px;\n    padding: 12px 16px;\n    line-height: 30px;\n    width: auto; }\n.window-info .mdl-card__supporting-text > div {\n      display: flex;\n      align-items: baseline;\n      justify-content: space-between; }\n"

/***/ }),

/***/ "./src/app/pages/maps/map-advanced/map-advanced.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/maps/map-advanced/map-advanced.component.ts ***!
  \*******************************************************************/
/*! exports provided: MapAdvancedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapAdvancedComponent", function() { return MapAdvancedComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/internal/operators */ "./node_modules/rxjs/internal/operators/index.js");
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var theme_components_upgradable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! theme/components/upgradable */ "./src/theme/components/upgradable/index.ts");
/* harmony import */ var _maps_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../maps.service */ "./src/app/pages/maps/maps.service.ts");
/* harmony import */ var _map_advanced_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./map-advanced-style */ "./src/app/pages/maps/map-advanced/map-advanced-style.ts");
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





var markerIconUrl = {
    url: 'assets/images/marker-advanced.svg',
    active: 'assets/images/marker-advanced-active.svg',
};
var infoWindowSize = {
    width: 200,
    height: 130,
    paddingX: 5,
    paddingY: 5,
};
var switchZoomValue = 5;
var iconSize = 20;
var MapAdvancedComponent = /** @class */ (function (_super) {
    __extends(MapAdvancedComponent, _super);
    function MapAdvancedComponent(mapService) {
        var _this = _super.call(this) || this;
        _this.mapService = mapService;
        _this.map = true;
        _this.data = [];
        _this.prevZoom = 2;
        _this.markers = [];
        _this.alive = true;
        _this.isWorldLevel = true;
        return _this;
    }
    MapAdvancedComponent.prototype.ngOnDestroy = function () {
        this.alive = false;
    };
    MapAdvancedComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        var mapOptions = {
            center: { lat: 53, lng: 27 },
            zoomControl: true,
            zoom: 2,
            maxZoom: 10,
            minZoom: 2,
            scrollwheel: true,
            streetViewControl: false,
            fullscreenControl: false,
            mapMaker: true,
            styles: _map_advanced_style__WEBPACK_IMPORTED_MODULE_4__["MAP_STYLE"],
        };
        this.gMap = new google.maps.Map(this.gmapElement.nativeElement, mapOptions);
        var getData = (this.isWorldLevel) ? this.mapService.getCountriesPopulation() : this.mapService.getCountriesPopulation();
        getData
            .pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_1__["takeWhile"])(function () { return _this.alive; }))
            .subscribe(function (data) {
            _this.loadData(data);
        });
        this.gMap.addListener('zoom_changed', function () { return _this.onZoomChanged(); });
    };
    MapAdvancedComponent.prototype.loadData = function (data) {
        this.clearMarkers();
        this.data = data;
        this.createMarkersArray(data);
        componentHandler.upgradeDom();
    };
    MapAdvancedComponent.prototype.clearMarkers = function () {
        if (this.markers) {
            this.markers.forEach(function (marker) {
                marker.setMap(null);
            });
            this.markers = null;
        }
    };
    MapAdvancedComponent.prototype.createMarkersArray = function (data) {
        var _this = this;
        var markers = [];
        data.map(function (item) {
            var icon = {
                url: markerIconUrl.url,
                size: new google.maps.Size(iconSize, iconSize),
                scaledSize: new google.maps.Size(iconSize, iconSize),
            };
            var marker = new google.maps.Marker({
                icon: icon,
                position: item.position,
                map: _this.gMap,
            });
            marker.addListener('mouseover', function (event) { return _this.drawInfoWindow(item, event, marker); });
            marker.addListener('mouseout', function (event) { return _this.removeInfoWindow(item, event); });
            if (_this.gMap.getZoom() <= switchZoomValue) {
                marker.addListener('click', function (event) { return _this.zoomingToPoint(item, event); });
            }
            markers.push(marker);
        });
        this.markers = markers;
    };
    MapAdvancedComponent.prototype.drawInfoWindow = function (item, event, marker) {
        /* check if previous window-info is shown and remove it */
        var oldWindowsInfo = document.getElementsByClassName('window-info');
        if (oldWindowsInfo.length > 0) {
            for (var index = 0; index += 1; index < oldWindowsInfo.length) {
                oldWindowsInfo[index].removeChild(oldWindowsInfo[index]);
            }
        }
        /* create info div and change marker on hover */
        var mouseEvent = Object.values(event).find(function (value) { return value instanceof MouseEvent; });
        var parent = mouseEvent.target.parentNode;
        var infowindow = document.createElement('div');
        parent.style.opacity = '1';
        parent.style.overflow = 'visible';
        infowindow.innerHTML = "<div class=\"mdl-card\">\n                                  <div class=\"mdl-card__title\">\n                                    <h1 class=\"mdl-card__title-text\">" + item.name + "</h1>\n                                  </div>\n                                  <div class=\"mdl-card__supporting-text no-padding\">\n                                    <div>Population:<span>" + item.population + "</span></div>\n                                    <div>Area:<span>" + item.area + " km<sup>2</sup></span></div>\n                                  </div>\n                             </div>";
        infowindow.classList.add('window-info');
        var img = parent.getElementsByTagName('img')[0];
        img.src = (img) ? markerIconUrl.active : null;
        var position = this.calculateInfoPosition(marker);
        infowindow.style[position.top ? 'top' : 'bottom'] = iconSize + "px";
        infowindow.style[position.left ? 'left' : 'right'] = iconSize + infoWindowSize.paddingX + "px";
        item.infowindow = infowindow;
        parent.appendChild(infowindow);
    };
    MapAdvancedComponent.prototype.removeInfoWindow = function (item, event) {
        var parent = item.infowindow.parentElement;
        parent.style.opacity = '0';
        parent.style.overflow = 'hidden';
        var img = parent.getElementsByTagName('img')[0];
        if (img) {
            img.src = markerIconUrl.url;
        }
        item.infowindow.remove();
    };
    MapAdvancedComponent.prototype.calculateInfoPosition = function (marker) {
        /* calculated where displayed infowindow relative to corners */
        var scale = Math.pow(2, this.gMap.getZoom());
        var nw = new google.maps.LatLng(this.gMap.getBounds().getNorthEast().lat(), this.gMap.getBounds().getSouthWest().lng());
        var worldCoordinateNW = this.gMap.getProjection().fromLatLngToPoint(nw);
        var worldCoordinate = this.gMap.getProjection().fromLatLngToPoint(marker.getPosition());
        var markerOffset = new google.maps.Point(Math.floor((worldCoordinate.x - worldCoordinateNW.x) * scale), Math.floor((worldCoordinate.y - worldCoordinateNW.y) * scale));
        var mapOffset = new google.maps.Point(Math.floor(this.gMap.getDiv().getBoundingClientRect().width), Math.floor(this.gMap.getDiv().getBoundingClientRect().height));
        var position = {
            top: (markerOffset.y + infoWindowSize.height < mapOffset.y),
            left: (markerOffset.x + infoWindowSize.width + infoWindowSize.paddingX * 2 < mapOffset.x),
        };
        return position;
    };
    MapAdvancedComponent.prototype.zoomingToPoint = function (item, event) {
        this.gMap.setZoom(switchZoomValue + 1);
        this.gMap.setCenter(item.position);
    };
    MapAdvancedComponent.prototype.onZoomChanged = function () {
        var _this = this;
        // reload data on zoom changed event
        var currentZoom = this.gMap.getZoom();
        if (currentZoom > switchZoomValue && this.prevZoom <= switchZoomValue) {
            this.mapService.getCitiesPopulation()
                .pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_1__["takeWhile"])(function () { return _this.alive; }))
                .subscribe(function (data) {
                _this.loadData(data);
            });
        }
        if (currentZoom <= switchZoomValue && this.prevZoom > switchZoomValue) {
            this.mapService.getCountriesPopulation()
                .pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_1__["takeWhile"])(function () { return _this.alive; }))
                .subscribe(function (data) {
                _this.loadData(data);
            });
        }
        this.isWorldLevel = (currentZoom <= switchZoomValue);
        this.prevZoom = currentZoom;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])('class.map-advanced'),
        __metadata("design:type", Object)
    ], MapAdvancedComponent.prototype, "map", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('gmap'),
        __metadata("design:type", Object)
    ], MapAdvancedComponent.prototype, "gmapElement", void 0);
    MapAdvancedComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-map-advanced',
            styles: [__webpack_require__(/*! ./map-advanced.component.scss */ "./src/app/pages/maps/map-advanced/map-advanced.component.scss")],
            template: __webpack_require__(/*! ./map-advanced.component.html */ "./src/app/pages/maps/map-advanced/map-advanced.component.html"),
        }),
        __metadata("design:paramtypes", [_maps_service__WEBPACK_IMPORTED_MODULE_3__["MapsService"]])
    ], MapAdvancedComponent);
    return MapAdvancedComponent;
}(theme_components_upgradable__WEBPACK_IMPORTED_MODULE_2__["UpgradableComponent"]));



/***/ }),

/***/ "./src/app/pages/maps/map/index.ts":
/*!*****************************************!*\
  !*** ./src/app/pages/maps/map/index.ts ***!
  \*****************************************/
/*! exports provided: MapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _map_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./map.component */ "./src/app/pages/maps/map/map.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MapComponent", function() { return _map_component__WEBPACK_IMPORTED_MODULE_0__["MapComponent"]; });




/***/ }),

/***/ "./src/app/pages/maps/map/map.component.html":
/*!***************************************************!*\
  !*** ./src/app/pages/maps/map/map.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"mdl-cell mdl-cell--6-col-desktop mdl-cell--8-col-tablet mdl-cell--4-col-phone\">\r\n  <base-card class=\"map\">\r\n    <div class=\"curtain\"></div>\r\n    <div class=\"mdl-card--expand map__window\">\r\n\r\n    </div>\r\n    <div class=\"mdl-card__supporting-text\">\r\n      <div class=\"pull-right\">\r\n        <div class=\"map__target-image\">\r\n          <div class=\"map__target-picture\"></div>\r\n        </div>\r\n      </div>\r\n      <div class=\"map__target-info\">\r\n        <h5 class=\"map__target-title\"></h5>\r\n        <div class=\"map__target-location\"></div>\r\n        <div class=\"map__target-opening-hours\"></div>\r\n        <div class=\"map__target-description\"></div>\r\n      </div>\r\n    </div>\r\n  </base-card>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/pages/maps/map/map.component.scss":
/*!***************************************************!*\
  !*** ./src/app/pages/maps/map/map.component.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/*------------------------------------*\\\n    $CONTENTS\n\\*------------------------------------*/\n/**\n * STYLE GUIDE VARIABLES------------------Declarations of Sass variables\n * -----Typography\n * -----Colors\n * -----Textfield\n * -----Switch\n * -----Spinner\n * -----Radio\n * -----Menu\n * -----List\n * -----Layout\n * -----Icon toggles\n * -----Footer\n * -----Column\n * -----Checkbox\n * -----Card\n * -----Button\n * -----Animation\n * -----Progress\n * -----Badge\n * -----Shadows\n * -----Grid\n * -----Data table\n * -----Dialog\n * -----Snackbar\n * -----Tooltip\n * -----Chip\n *\n * Even though all variables have the `!default` directive, most of them\n * should not be changed as they are dependent one another. This can cause\n * visual distortions (like alignment issues) that are hard to track down\n * and fix.\n */\n/* ==========  TYPOGRAPHY  ========== */\n/* We're splitting fonts into \"preferred\" and \"performance\" in order to optimize\n   page loading. For important text, such as the body, we want it to load\n   immediately and not wait for the web font load, whereas for other sections,\n   such as headers and titles, we're OK with things taking a bit longer to load.\n   We do have some optional classes and parameters in the mixins, in case you\n   definitely want to make sure you're using the preferred font and don't mind\n   the performance hit.\n   We should be able to improve on this once CSS Font Loading L3 becomes more\n   widely available.\n*/\n/* ==========  COLORS  ========== */\n/**\n*\n* Material design color palettes.\n* @see http://www.google.com/design/spec/style/color.html\n*\n**/\n/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/* ==========  Color Palettes  ========== */\n/* colors.scss */\n/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/* ==========  IMAGES  ========== */\n/* ==========  Color & Themes  ========== */\n/* ==========  Typography  ========== */\n/* ==========  Components  ========== */\n/* ==========  Standard Buttons  ========== */\n/* ==========  Icon Toggles  ========== */\n/* ==========  Radio Buttons  ========== */\n/* ==========  Ripple effect  ========== */\n/* ==========  Layout  ========== */\n/* ==========  Content Tabs  ========== */\n/* ==========  Checkboxes  ========== */\n/* ==========  Switches  ========== */\n/* ==========  Spinner  ========== */\n/* ==========  Text fields  ========== */\n/* ==========  Card  ========== */\n/* ==========  Sliders ========== */\n/* ========== Progress ========== */\n/* ==========  List ========== */\n/* ==========  Item ========== */\n/* ==========  Dropdown menu ========== */\n/* ==========  Tooltips  ========== */\n/* ==========  Footer  ========== */\n/* TEXTFIELD */\n/* SWITCH */\n/* SPINNER */\n/* RADIO */\n/* MENU */\n/* LIST */\n/* LAYOUT */\n/* ICON TOGGLE */\n/* FOOTER */\n/*mega-footer*/\n/*mini-footer*/\n/* CHECKBOX */\n/* CARD */\n/* Card dimensions */\n/* Cover image */\n/* BUTTON */\n/**\n *\n * Dimensions\n *\n */\n/* ANIMATION */\n/* PROGRESS */\n/* BADGE */\n/* SHADOWS */\n/* GRID */\n/* DATA TABLE */\n/* DIALOG */\n/* SNACKBAR */\n/* TOOLTIP */\n/* CHIP */\n/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/* Typography */\n/* Shadows */\n/* Animations */\n/* Dialog */\n/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/* ==========  Color Palettes  ========== */\n/* colors.scss */\n/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/* ==========  Color Palettes  ========== */\n/* colors.scss */\n/* ==========  IMAGES  ========== */\n/* ==========  Color & Themes  ========== */\n.text-color--smoke {\n  color: #666; }\n.color--gray {\n  background-color: #444 !important; }\n.color--dark-gray {\n  background-color: #333; }\n.color--smooth-gray {\n  background-color: #999 !important; }\n.text-color--smooth-gray {\n  color: #999 !important; }\n.color--red {\n  background-color: #f44336 !important; }\n.color-text--red {\n  color: #f44336 !important; }\n.color--orange {\n  background-color: #ffc107 !important; }\n.color-text--orange {\n  color: #ffc107 !important; }\n.color--amber {\n  background-color: #ff9800 !important; }\n.color-text--amber {\n  color: #ff9800 !important; }\n.color--green {\n  background-color: #00d45a !important; }\n.color-text--green {\n  color: #00d45a !important; }\n.color--light-blue {\n  background-color: #03a9f4 !important; }\n.color-text--light-blue {\n  color: #03a9f4 !important; }\n.color--purple {\n  background-color: #7726d3 !important; }\n.color-text--purple {\n  color: #7726d3 !important; }\n.color--teal {\n  background-color: #00bcd4 !important; }\n.color-text--teal {\n  color: #00bcd4 !important; }\n/* ==========  Typography  ========== */\n/* ==========  Components  ========== */\n/* ==========  Standard Buttons  ========== */\n/* ==========  Icon Toggles  ========== */\n/* ==========  Radio Buttons  ========== */\n/* ==========  Ripple effect  ========== */\n/* ==========  Layout  ========== */\n/* ==========  Content Tabs  ========== */\n/* ==========  Checkboxes  ========== */\n/* ==========  Switches  ========== */\n/* ==========  Spinner  ========== */\n/* ==========  Text fields  ========== */\n/* ==========  Card  ========== */\n/* ==========  Sliders ========== */\n/* ========== Progress ========== */\n/* ==========  List ========== */\n/* ==========  Item ========== */\n/* ==========  Dropdown menu ========== */\n/* ==========  Tooltips  ========== */\n/* ==========  Footer  ========== */\n/* TEXTFIELD */\n/* SWITCH */\n/* SPINNER */\n/* RADIO */\n/* MENU */\n/* LIST */\n/* LAYOUT */\n/* ICON */\n/* ICON TOGGLE */\n/* FOOTER */\n/* mega-footer */\n/* mini-footer */\n/* CHECKBOX */\n/* CARD */\n/* Card dimensions */\n/* Cover image */\n/* BUTTON */\n/* ANIMATION */\n/* PROGRESS */\n/* BADGE */\n/* SHADOWS */\n/* GRID */\n/* DATA TABLE */\n/* TOOLTIP */\n/* WIDGETS & COMPONENTS */\n/* Trending */\n/* label */\n/* charts */\n/* employer form */\n/* row */\n/* scroll */\n.map {\n  min-height: 630px;\n  position: relative; }\n.map .map__window {\n    background: #333; }\n.map .map__window .gm-style > div:nth-of-type(2),\n    .map .map__window .gm-style > .gmnoprint:not(.gm-bundled-control),\n    .map .map__window .gm-style > .gm-style-cc {\n      display: none; }\n.map .mdl-card__supporting-text {\n    min-height: 185px; }\n.map h5 {\n    margin-top: 0; }\n.map div > a {\n    font-size: 1rem; }\n.map .map__target-location,\n  .map .map__target-opening-hours {\n    margin-bottom: 10px; }\n.map .map__target-location > *,\n    .map .map__target-opening-hours > * {\n      vertical-align: middle; }\n.map .map__target-location .material-icons,\n    .map .map__target-opening-hours .material-icons {\n      color: #00bcd4;\n      margin-top: -2px;\n      margin-right: 5px;\n      font-size: 20px; }\n.map .map__target-image {\n    background: #333;\n    border-radius: 50%;\n    width: 170px;\n    height: 170px;\n    margin: 0 10px 5px 15px; }\n.map .map__target-picture {\n    height: 100%;\n    transition: opacity 0.3s;\n    background: url(\"assets/images/map_target_images_sprite.png\") no-repeat top left;\n    background-size: cover; }\n.map .map__target-info,\n  .map .map__target-picture {\n    opacity: 1;\n    transition: opacity 0.2s; }\n.map .map__target-info--hide,\n    .map .map__target-picture--hide {\n      opacity: 0; }\n"

/***/ }),

/***/ "./src/app/pages/maps/map/map.component.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/maps/map/map.component.ts ***!
  \*************************************************/
/*! exports provided: MapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapComponent", function() { return MapComponent; });
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


var MapComponent = /** @class */ (function (_super) {
    __extends(MapComponent, _super);
    function MapComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.mdlGrid = true;
        return _this;
    }
    MapComponent.prototype.ngAfterViewInit = function () {
        var mapOptions = {
            center: { lat: 53.905042, lng: 27.569053 },
            zoomControl: true,
            zoom: 14,
            maxZoom: 20,
            minZoom: 5,
            scrollwheel: false,
            mapMaker: true,
            styles: [
                {
                    featureType: 'road',
                    elementType: 'geometry.fill',
                    stylers: [
                        { color: '#ffffff' },
                        { weight: 1.9 },
                    ],
                }, {
                    featureType: 'road.local',
                    elementType: 'geometry.fill',
                    stylers: [
                        { color: '#f0f0f0' },
                        { weight: 1.4 },
                    ],
                }, {
                    featureType: 'all',
                    elementType: 'labels.text.fill',
                    stylers: [
                        { color: '#333333' },
                    ],
                }, {
                    featureType: 'all',
                    elementType: 'labels.icon',
                    stylers: [
                        { hue: '#000000' },
                        { saturation: -100 },
                        { lightness: 0 },
                    ],
                }, {
                    featureType: 'landscape.natural',
                    elementType: 'geometry',
                    stylers: [
                        { color: '#d0d0d0' },
                    ],
                }, {
                    featureType: 'landscape.man_made',
                    elementType: 'geometry.stroke',
                    stylers: [
                        { color: '#888888' },
                    ],
                }, {
                    featureType: 'landscape.man_made',
                    elementType: 'geometry.fill',
                    stylers: [
                        { color: '#cccccc' },
                    ],
                }, {
                    featureType: 'poi',
                    elementType: 'geometry',
                    stylers: [
                        { color: '#bbbbbb' },
                    ],
                }, {
                    featureType: 'poi.attraction',
                    elementType: 'geometry',
                    stylers: [
                        { color: '#bbbbbb' },
                    ],
                }, {
                    featureType: 'poi.business',
                    elementType: 'geometry',
                    stylers: [
                        { color: '#bbbbbb' },
                    ],
                }, {
                    featureType: 'poi.medical',
                    elementType: 'geometry',
                    stylers: [
                        { color: '#bbbbbb' },
                    ],
                }, {
                    featureType: 'poi.park',
                    elementType: 'geometry',
                    stylers: [
                        { color: '#bbbbbb' },
                    ],
                }, {
                    featureType: 'poi.school',
                    elementType: 'geometry',
                    stylers: [
                        { color: '#bbbbbb' },
                    ],
                }, {
                    featureType: 'poi.sports_complex',
                    elementType: 'geometry.fill',
                    stylers: [
                        { color: '#bbbbbb' },
                    ],
                }, {
                    featureType: 'water',
                    elementType: 'geometry',
                    stylers: [
                        { color: '#999999' },
                    ],
                },
            ],
        };
        var map = new google.maps.Map(document.querySelector('.map__window'), mapOptions);
        var markerImage = 'assets/images/marker.png';
        var activeMarkerImage = 'assets/images/active_marker.png';
        var markers = {
            theatre: {
                marker: new google.maps.Marker({
                    map: map,
                    position: { lat: 53.900646, lng: 27.562573 },
                    animation: google.maps.Animation.DROP,
                    icon: activeMarkerImage,
                    title: 'Yanka Kupala National Academic Theatre',
                    location: ' Vulitsa Enhyel\'sa 7, Minsk, Belarus',
                    openingHours: ' 9 AM - 9 PM',
                    description: 'National academic theatre of Yanka Kupala is the oldest theatre of Belarus. It was opened on September 14, 1920, it is located in a building of the Minsk provincial theatre, constructed under the project of architects Karol Kozlowski and Konstantin Uvedensky in 1890 by means of donations of citizens. ',
                    moreInfoLink: 'http://kupalauski.by/en/teatr/history/',
                    image: '0px',
                }),
            },
            bicyclePath: {
                marker: new google.maps.Marker({
                    map: map,
                    position: { lat: 53.903891, lng: 27.570529 },
                    animation: google.maps.Animation.DROP,
                    icon: markerImage,
                    title: 'Bicycle path',
                    location: '53.904126, 27.570758, Minsk, Belarus',
                    openingHours: 'around the clock',
                    description: 'Minsk bike path extends from the northwest to the southern outskirts of Minsk. The length of the cycle paths of about 26.73 km. ',
                    moreInfoLink: 'http://swim.by/minsk-bike-path/',
                    image: '-170px',
                }),
            },
            uGallery: {
                marker: new google.maps.Marker({
                    map: map,
                    position: { lat: 53.910543, lng: 27.575458 },
                    animation: google.maps.Animation.DROP,
                    icon: markerImage,
                    title: 'Ў Gallery of Contemporary Art',
                    location: 'Praspyekt Nyezalyezhnastsi 37а, Minsk, Belarus',
                    openingHours: '10 AM - 12 PM',
                    description: 'Active - art platform for the presentation of contemporary Belarusian and European art. ',
                    moreInfoLink: 'http://en.ygallery.by/',
                    image: '-340px',
                }),
            },
            showInfo: function (target) {
                document.querySelector('.map__target-picture').classList.toggle('map__target-picture--hide');
                document.querySelector('.map__target-info').classList.toggle('map__target-info--hide');
                setTimeout(function () {
                    document.querySelector('.map__target-title').innerHTML = target.title;
                    document.querySelector('.map__target-location').innerHTML = "<i class=\"material-icons\">room</i>" + target.location;
                    document.querySelector('.map__target-opening-hours').innerHTML = "<i class=\"material-icons\">query_builder</i>" + target.openingHours;
                    document.querySelector('.map__target-description').innerHTML = target.description + " <a class=\"map__target-more-info\" href=\"" + target.moreInfoLink + "\" target=\"_blank\">More</a>";
                    document.querySelector('.map__target-picture').style.backgroundPositionX = target.image;
                    document.querySelector('.map__target-picture').classList.toggle('map__target-picture--hide');
                    document.querySelector('.map__target-info').classList.toggle('map__target-info--hide');
                }, 200);
            },
            setActiveMarker: function () {
                for (var key in markers) {
                    if (typeof (markers[key].marker) === 'object' && markers[key].marker != null) {
                        markers[key].marker.setIcon(markerImage);
                    }
                }
                if (this === markers) {
                    markers.theatre.marker.setIcon(activeMarkerImage);
                    markers.showInfo(markers.theatre.marker);
                }
                else {
                    this.setIcon(activeMarkerImage);
                    markers.showInfo(this);
                }
            },
        };
        markers.setActiveMarker();
        for (var key in markers) {
            if (typeof (markers[key].marker) === 'object' && markers[key].marker !== null) {
                markers[key].marker.addListener('click', markers.setActiveMarker);
            }
        }
        componentHandler.upgradeDom();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])('class.mdl-grid'),
        __metadata("design:type", Object)
    ], MapComponent.prototype, "mdlGrid", void 0);
    MapComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-map',
            styles: [__webpack_require__(/*! ./map.component.scss */ "./src/app/pages/maps/map/map.component.scss")],
            template: __webpack_require__(/*! ./map.component.html */ "./src/app/pages/maps/map/map.component.html"),
        })
    ], MapComponent);
    return MapComponent;
}(theme_components_upgradable__WEBPACK_IMPORTED_MODULE_1__["UpgradableComponent"]));



/***/ }),

/***/ "./src/app/pages/maps/maps-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/maps/maps-routing.module.ts ***!
  \***************************************************/
/*! exports provided: MapsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapsRoutingModule", function() { return MapsRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var app_layouts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/layouts */ "./src/app/layouts/index.ts");
/* harmony import */ var app_layouts_common_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/layouts/common-layout */ "./src/app/layouts/common-layout/index.ts");
/* harmony import */ var _map__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./map */ "./src/app/pages/maps/map/index.ts");
/* harmony import */ var _map_advanced__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./map-advanced */ "./src/app/pages/maps/map-advanced/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var MapsRoutingModule = /** @class */ (function () {
    function MapsRoutingModule() {
    }
    MapsRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild([
                    {
                        path: '',
                        component: app_layouts_common_layout__WEBPACK_IMPORTED_MODULE_3__["CommonLayoutComponent"],
                        children: [
                            { path: 'simple', component: _map__WEBPACK_IMPORTED_MODULE_4__["MapComponent"], pathMatch: 'full' },
                            { path: 'advanced', component: _map_advanced__WEBPACK_IMPORTED_MODULE_5__["MapAdvancedComponent"], pathMatch: 'full' },
                        ],
                    },
                ]),
                app_layouts__WEBPACK_IMPORTED_MODULE_2__["LayoutsModule"],
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        })
    ], MapsRoutingModule);
    return MapsRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/maps/maps.module.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/maps/maps.module.ts ***!
  \*******************************************/
/*! exports provided: MapsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapsModule", function() { return MapsModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! theme */ "./src/theme/index.ts");
/* harmony import */ var _map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./map */ "./src/app/pages/maps/map/index.ts");
/* harmony import */ var _map_advanced__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./map-advanced */ "./src/app/pages/maps/map-advanced/index.ts");
/* harmony import */ var _maps_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./maps-routing.module */ "./src/app/pages/maps/maps-routing.module.ts");
/* harmony import */ var _maps_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./maps.service */ "./src/app/pages/maps/maps.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var MapsModule = /** @class */ (function () {
    function MapsModule() {
    }
    MapsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                theme__WEBPACK_IMPORTED_MODULE_2__["ThemeModule"],
                _maps_routing_module__WEBPACK_IMPORTED_MODULE_5__["MapsRoutingModule"],
            ],
            declarations: [
                _map__WEBPACK_IMPORTED_MODULE_3__["MapComponent"],
                _map_advanced__WEBPACK_IMPORTED_MODULE_4__["MapAdvancedComponent"],
            ],
            exports: [
                _map_advanced__WEBPACK_IMPORTED_MODULE_4__["MapAdvancedComponent"],
            ],
            providers: [_maps_service__WEBPACK_IMPORTED_MODULE_6__["MapsService"]],
        })
    ], MapsModule);
    return MapsModule;
}());



/***/ }),

/***/ "./src/app/pages/maps/maps.service.ts":
/*!********************************************!*\
  !*** ./src/app/pages/maps/maps.service.ts ***!
  \********************************************/
/*! exports provided: MapsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapsService", function() { return MapsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/index */ "./node_modules/rxjs/index.js");
/* harmony import */ var rxjs_index__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs_index__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var MapsService = /** @class */ (function () {
    function MapsService() {
    }
    MapsService.prototype.getCountriesPopulation = function () {
        return Object(rxjs_index__WEBPACK_IMPORTED_MODULE_1__["of"])([
            {
                position: { lat: 52.858248, lng: 27.701393 },
                population: '9 491 800',
                area: '207 595',
                name: 'Belarus',
            },
            {
                position: { lat: 16.378309, lng: 101.307704 },
                population: '68 863 514',
                area: '349',
                name: 'Thailand',
            },
            {
                position: { lat: 6.494347, lng: -65.441083 },
                population: '30 761 000',
                area: '916 445',
                name: 'Venezuela',
            },
        ]);
    };
    MapsService.prototype.getCitiesPopulation = function () {
        return Object(rxjs_index__WEBPACK_IMPORTED_MODULE_1__["of"])([
            {
                position: { lat: 53.677834, lng: 23.829529 },
                population: '365 610',
                area: '142',
                name: 'Grodno',
            },
            {
                position: { lat: 53.902496, lng: 27.561481 },
                population: '1 982 444',
                area: '410',
                name: 'Minsk',
            },
            {
                position: { lat: 13.758945, lng: 100.532646 },
                population: '1 981 690',
                area: '513 120',
                name: 'Bangkok',
            },
            {
                position: { lat: 7.969651, lng: 98.344746 },
                population: '75 573',
                area: '12',
                name: 'Phuket City',
            },
            {
                position: { lat: 10.485846, lng: -66.907196 },
                population: '3 051 000',
                area: '440',
                name: 'Karakas',
            },
            {
                position: { lat: 7.766810, lng: -72.224782 },
                population: '185 917',
                area: '484',
                name: 'San Kristobal',
            },
        ]);
    };
    MapsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], MapsService);
    return MapsService;
}());



/***/ }),

/***/ "./src/app/services/auth/auth.guard.ts":
/*!*********************************************!*\
  !*** ./src/app/services/auth/auth.guard.ts ***!
  \*********************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.service */ "./src/app/services/auth/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = /** @class */ (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (next) {
        if (this.authService.isLoggedIn) {
            return true;
        }
        // Navigate to the login page with extras
        this.router.navigate(['/pages/login']);
        return false;
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root',
        }),
        __metadata("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/services/auth/auth.interceptor.ts":
/*!***************************************************!*\
  !*** ./src/app/services/auth/auth.interceptor.ts ***!
  \***************************************************/
/*! exports provided: AuthInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthInterceptor", function() { return AuthInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.service */ "./src/app/services/auth/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthInterceptor = /** @class */ (function () {
    function AuthInterceptor(auth) {
        this.auth = auth;
    }
    AuthInterceptor.prototype.intercept = function (request, next) {
        // add authorization token for full api requests
        if (request.url.includes('api') && this.auth.isLoggedIn) {
            request = request.clone({
                setHeaders: { Authorization: "Bearer " + this.auth.authToken },
            });
        }
        return next.handle(request);
    };
    AuthInterceptor = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]])
    ], AuthInterceptor);
    return AuthInterceptor;
}());



/***/ }),

/***/ "./src/app/services/auth/auth.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/auth/auth.service.ts ***!
  \***********************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var tokenName = 'token';
var AuthService = /** @class */ (function () {
    function AuthService(http) {
        this.http = http;
        this.isLogged$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](false);
        this.url = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiBaseUrl + "/api/auth";
        this.user = { username: 'Tiven Wang', email: 'i.tiven.wang@gmail.com' }; // some data about user
    }
    Object.defineProperty(AuthService.prototype, "isLoggedIn", {
        get: function () {
            return this.isLogged$.value;
        },
        enumerable: true,
        configurable: true
    });
    AuthService.prototype.login = function (data) {
        var _this = this;
        return this.http.post(this.url + "/login", data)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
            _this.user = res.user;
            localStorage.setItem(tokenName, res.token);
            // only for example
            localStorage.setItem('username', res.user.username);
            localStorage.setItem('email', res.user.email);
            _this.isLogged$.next(true);
            return _this.user;
        }));
    };
    AuthService.prototype.logout = function () {
        var _this = this;
        return this.http.get(this.url + "/logout")
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) {
            localStorage.clear();
            _this.user = null;
            _this.isLogged$.next(false);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(false);
        }));
    };
    AuthService.prototype.signup = function (data) {
        var _this = this;
        return this.http.post(this.url + "/signup", data)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
            _this.user = res.user;
            localStorage.setItem(tokenName, res.token);
            // only for example
            localStorage.setItem('username', res.user.username);
            localStorage.setItem('email', res.user.email);
            _this.isLogged$.next(true);
            return _this.user;
        }));
    };
    Object.defineProperty(AuthService.prototype, "authToken", {
        get: function () {
            return localStorage.getItem(tokenName);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AuthService.prototype, "userData", {
        get: function () {
            // send current user or load data from backend using token
            return this.loadUser();
        },
        enumerable: true,
        configurable: true
    });
    AuthService.prototype.loadUser = function () {
        // use request to load user data with token
        // it's fake and useing only for example
        if (localStorage.getItem('username') && localStorage.getItem('email')) {
            this.user = {
                username: localStorage.getItem('username'),
                email: localStorage.getItem('email'),
            };
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(this.user);
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root',
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/services/auth/fakebackend.interceptor.ts":
/*!**********************************************************!*\
  !*** ./src/app/services/auth/fakebackend.interceptor.ts ***!
  \**********************************************************/
/*! exports provided: FakeBackendInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FakeBackendInterceptor", function() { return FakeBackendInterceptor; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FakeBackendInterceptor = /** @class */ (function () {
    function FakeBackendInterceptor() {
        this.username = 'Tiven Wang';
        this.email = 'i.tiven.wang@gmail.com';
    }
    // with real backend you don't need it at all
    FakeBackendInterceptor.prototype.intercept = function (request, next) {
        var _this = this;
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(null).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mergeMap"])(function () {
            // signup
            if (request.url.endsWith('/api/auth/signup') && request.method === 'POST') {
                var body = {
                    token: 'token_' + _this.makeID(),
                    user: {
                        username: request.body['username'],
                        email: request.body['email'],
                    },
                };
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpResponse"]({ body: body, status: 200 }));
            }
            // login
            if (request.url.endsWith('/api/auth/login') && request.method === 'POST') {
                var body = {
                    token: 'token_' + _this.makeID(),
                    user: {
                        username: _this.username,
                        email: request.body['email'],
                    },
                };
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpResponse"]({ body: body, status: 200 }));
            }
            // logout
            if (request.url.endsWith('/api/auth/logout') && request.method === 'GET') {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpResponse"]({ body: { success: true }, status: 200 }));
            }
            // at default just process the request
            return next.handle(request);
        }))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["materialize"])())
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["delay"])(500))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["dematerialize"])());
    };
    // generate random token
    FakeBackendInterceptor.prototype.makeID = function () {
        var text = '';
        var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        for (var i = 0; i < 25; i = i + 1) {
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        }
        return text;
    };
    FakeBackendInterceptor = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], FakeBackendInterceptor);
    return FakeBackendInterceptor;
}());



/***/ }),

/***/ "./src/app/services/auth/index.ts":
/*!****************************************!*\
  !*** ./src/app/services/auth/index.ts ***!
  \****************************************/
/*! exports provided: AuthGuard, AuthService, AuthInterceptor, FakeBackendInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth.guard */ "./src/app/services/auth/auth.guard.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return _auth_guard__WEBPACK_IMPORTED_MODULE_0__["AuthGuard"]; });

/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.service */ "./src/app/services/auth/auth.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return _auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]; });

/* harmony import */ var _auth_interceptor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.interceptor */ "./src/app/services/auth/auth.interceptor.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthInterceptor", function() { return _auth_interceptor__WEBPACK_IMPORTED_MODULE_2__["AuthInterceptor"]; });

/* harmony import */ var _fakebackend_interceptor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./fakebackend.interceptor */ "./src/app/services/auth/fakebackend.interceptor.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FakeBackendInterceptor", function() { return _fakebackend_interceptor__WEBPACK_IMPORTED_MODULE_3__["FakeBackendInterceptor"]; });







/***/ }),

/***/ "./src/app/services/index.ts":
/*!***********************************!*\
  !*** ./src/app/services/index.ts ***!
  \***********************************/
/*! exports provided: AuthGuard, AuthService, AuthInterceptor, FakeBackendInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth */ "./src/app/services/auth/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return _auth__WEBPACK_IMPORTED_MODULE_0__["AuthGuard"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return _auth__WEBPACK_IMPORTED_MODULE_0__["AuthService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthInterceptor", function() { return _auth__WEBPACK_IMPORTED_MODULE_0__["AuthInterceptor"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FakeBackendInterceptor", function() { return _auth__WEBPACK_IMPORTED_MODULE_0__["FakeBackendInterceptor"]; });




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
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
    apiBaseUrl: '',
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"], { defaultEncapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None });


/***/ }),

/***/ "./src/theme/components/card/card-actions.component.ts":
/*!*************************************************************!*\
  !*** ./src/theme/components/card/card-actions.component.ts ***!
  \*************************************************************/
/*! exports provided: CardActionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardActionsComponent", function() { return CardActionsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CardActionsComponent = /** @class */ (function () {
    function CardActionsComponent(viewContainerRef) {
        this.viewContainerRef = viewContainerRef;
        this.mdlCardActions = true;
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])('class.mdl-card__actions'),
        __metadata("design:type", Object)
    ], CardActionsComponent.prototype, "mdlCardActions", void 0);
    CardActionsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'base-card base-card-actions',
            styles: [__webpack_require__(/*! ./card.component.scss */ "./src/theme/components/card/card.component.scss")],
            template: "<ng-content></ng-content>",
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]])
    ], CardActionsComponent);
    return CardActionsComponent;
}());



/***/ }),

/***/ "./src/theme/components/card/card-body.component.ts":
/*!**********************************************************!*\
  !*** ./src/theme/components/card/card-body.component.ts ***!
  \**********************************************************/
/*! exports provided: CardBodyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardBodyComponent", function() { return CardBodyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CardBodyComponent = /** @class */ (function () {
    function CardBodyComponent() {
        this.mdlCardSupportingText = true;
        this.isExpanded = false;
    }
    Object.defineProperty(CardBodyComponent.prototype, "expanded", {
        set: function (value) {
            if (value || value === '') {
                this.isExpanded = true;
            }
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])('class.mdl-card__supporting-text'),
        __metadata("design:type", Object)
    ], CardBodyComponent.prototype, "mdlCardSupportingText", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])('class.mdl-card--expand'),
        __metadata("design:type", Object)
    ], CardBodyComponent.prototype, "isExpanded", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], CardBodyComponent.prototype, "expanded", null);
    CardBodyComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'base-card base-card-body',
            styles: [__webpack_require__(/*! ./card.component.scss */ "./src/theme/components/card/card.component.scss")],
            template: "<ng-content></ng-content>",
        })
    ], CardBodyComponent);
    return CardBodyComponent;
}());



/***/ }),

/***/ "./src/theme/components/card/card-menu.component.ts":
/*!**********************************************************!*\
  !*** ./src/theme/components/card/card-menu.component.ts ***!
  \**********************************************************/
/*! exports provided: CardMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardMenuComponent", function() { return CardMenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CardMenuComponent = /** @class */ (function () {
    function CardMenuComponent() {
        this.mdlCardMenu = true;
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])('class.mdl-card__menu'),
        __metadata("design:type", Object)
    ], CardMenuComponent.prototype, "mdlCardMenu", void 0);
    CardMenuComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'base-card base-card-menu',
            styles: [__webpack_require__(/*! ./card.component.scss */ "./src/theme/components/card/card.component.scss")],
            template: "<ng-content></ng-content>",
        })
    ], CardMenuComponent);
    return CardMenuComponent;
}());



/***/ }),

/***/ "./src/theme/components/card/card-title.component.ts":
/*!***********************************************************!*\
  !*** ./src/theme/components/card/card-title.component.ts ***!
  \***********************************************************/
/*! exports provided: CardTitleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardTitleComponent", function() { return CardTitleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CardTitleComponent = /** @class */ (function () {
    function CardTitleComponent() {
        this.mdlCardTitle = true;
        this.isExpanded = false;
    }
    Object.defineProperty(CardTitleComponent.prototype, "expanded", {
        set: function (value) {
            if (value || value === '') {
                this.isExpanded = true;
            }
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])('class.mdl-card__title'),
        __metadata("design:type", Object)
    ], CardTitleComponent.prototype, "mdlCardTitle", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])('class.mdl-card--expand'),
        __metadata("design:type", Object)
    ], CardTitleComponent.prototype, "isExpanded", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], CardTitleComponent.prototype, "expanded", null);
    CardTitleComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'base-card base-card-title',
            styles: [__webpack_require__(/*! ./card.component.scss */ "./src/theme/components/card/card.component.scss")],
            template: "<ng-content></ng-content>",
        })
    ], CardTitleComponent);
    return CardTitleComponent;
}());



/***/ }),

/***/ "./src/theme/components/card/card.component.scss":
/*!*******************************************************!*\
  !*** ./src/theme/components/card/card.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/*------------------------------------*\\\n    $CONTENTS\n\\*------------------------------------*/\n/**\n * STYLE GUIDE VARIABLES------------------Declarations of Sass variables\n * -----Typography\n * -----Colors\n * -----Textfield\n * -----Switch\n * -----Spinner\n * -----Radio\n * -----Menu\n * -----List\n * -----Layout\n * -----Icon toggles\n * -----Footer\n * -----Column\n * -----Checkbox\n * -----Card\n * -----Button\n * -----Animation\n * -----Progress\n * -----Badge\n * -----Shadows\n * -----Grid\n * -----Data table\n * -----Dialog\n * -----Snackbar\n * -----Tooltip\n * -----Chip\n *\n * Even though all variables have the `!default` directive, most of them\n * should not be changed as they are dependent one another. This can cause\n * visual distortions (like alignment issues) that are hard to track down\n * and fix.\n */\n/* ==========  TYPOGRAPHY  ========== */\n/* We're splitting fonts into \"preferred\" and \"performance\" in order to optimize\n   page loading. For important text, such as the body, we want it to load\n   immediately and not wait for the web font load, whereas for other sections,\n   such as headers and titles, we're OK with things taking a bit longer to load.\n   We do have some optional classes and parameters in the mixins, in case you\n   definitely want to make sure you're using the preferred font and don't mind\n   the performance hit.\n   We should be able to improve on this once CSS Font Loading L3 becomes more\n   widely available.\n*/\n/* ==========  COLORS  ========== */\n/**\n*\n* Material design color palettes.\n* @see http://www.google.com/design/spec/style/color.html\n*\n**/\n/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/* ==========  Color Palettes  ========== */\n/* colors.scss */\n/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/* ==========  IMAGES  ========== */\n/* ==========  Color & Themes  ========== */\n/* ==========  Typography  ========== */\n/* ==========  Components  ========== */\n/* ==========  Standard Buttons  ========== */\n/* ==========  Icon Toggles  ========== */\n/* ==========  Radio Buttons  ========== */\n/* ==========  Ripple effect  ========== */\n/* ==========  Layout  ========== */\n/* ==========  Content Tabs  ========== */\n/* ==========  Checkboxes  ========== */\n/* ==========  Switches  ========== */\n/* ==========  Spinner  ========== */\n/* ==========  Text fields  ========== */\n/* ==========  Card  ========== */\n/* ==========  Sliders ========== */\n/* ========== Progress ========== */\n/* ==========  List ========== */\n/* ==========  Item ========== */\n/* ==========  Dropdown menu ========== */\n/* ==========  Tooltips  ========== */\n/* ==========  Footer  ========== */\n/* TEXTFIELD */\n/* SWITCH */\n/* SPINNER */\n/* RADIO */\n/* MENU */\n/* LIST */\n/* LAYOUT */\n/* ICON TOGGLE */\n/* FOOTER */\n/*mega-footer*/\n/*mini-footer*/\n/* CHECKBOX */\n/* CARD */\n/* Card dimensions */\n/* Cover image */\n/* BUTTON */\n/**\n *\n * Dimensions\n *\n */\n/* ANIMATION */\n/* PROGRESS */\n/* BADGE */\n/* SHADOWS */\n/* GRID */\n/* DATA TABLE */\n/* DIALOG */\n/* SNACKBAR */\n/* TOOLTIP */\n/* CHIP */\n/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/* Typography */\n/* Shadows */\n/* Animations */\n/* Dialog */\n/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/* ==========  Color Palettes  ========== */\n/* colors.scss */\n/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/* ==========  Color Palettes  ========== */\n/* colors.scss */\n/* ==========  IMAGES  ========== */\n/* ==========  Color & Themes  ========== */\n.text-color--smoke {\n  color: #666; }\n.color--gray {\n  background-color: #444 !important; }\n.color--dark-gray {\n  background-color: #333; }\n.color--smooth-gray {\n  background-color: #999 !important; }\n.text-color--smooth-gray {\n  color: #999 !important; }\n.color--red {\n  background-color: #f44336 !important; }\n.color-text--red {\n  color: #f44336 !important; }\n.color--orange {\n  background-color: #ffc107 !important; }\n.color-text--orange {\n  color: #ffc107 !important; }\n.color--amber {\n  background-color: #ff9800 !important; }\n.color-text--amber {\n  color: #ff9800 !important; }\n.color--green {\n  background-color: #00d45a !important; }\n.color-text--green {\n  color: #00d45a !important; }\n.color--light-blue {\n  background-color: #03a9f4 !important; }\n.color-text--light-blue {\n  color: #03a9f4 !important; }\n.color--purple {\n  background-color: #7726d3 !important; }\n.color-text--purple {\n  color: #7726d3 !important; }\n.color--teal {\n  background-color: #00bcd4 !important; }\n.color-text--teal {\n  color: #00bcd4 !important; }\n/* ==========  Typography  ========== */\n/* ==========  Components  ========== */\n/* ==========  Standard Buttons  ========== */\n/* ==========  Icon Toggles  ========== */\n/* ==========  Radio Buttons  ========== */\n/* ==========  Ripple effect  ========== */\n/* ==========  Layout  ========== */\n/* ==========  Content Tabs  ========== */\n/* ==========  Checkboxes  ========== */\n/* ==========  Switches  ========== */\n/* ==========  Spinner  ========== */\n/* ==========  Text fields  ========== */\n/* ==========  Card  ========== */\n/* ==========  Sliders ========== */\n/* ========== Progress ========== */\n/* ==========  List ========== */\n/* ==========  Item ========== */\n/* ==========  Dropdown menu ========== */\n/* ==========  Tooltips  ========== */\n/* ==========  Footer  ========== */\n/* TEXTFIELD */\n/* SWITCH */\n/* SPINNER */\n/* RADIO */\n/* MENU */\n/* LIST */\n/* LAYOUT */\n/* ICON */\n/* ICON TOGGLE */\n/* FOOTER */\n/* mega-footer */\n/* mini-footer */\n/* CHECKBOX */\n/* CARD */\n/* Card dimensions */\n/* Cover image */\n/* BUTTON */\n/* ANIMATION */\n/* PROGRESS */\n/* BADGE */\n/* SHADOWS */\n/* GRID */\n/* DATA TABLE */\n/* TOOLTIP */\n/* WIDGETS & COMPONENTS */\n/* Trending */\n/* label */\n/* charts */\n/* employer form */\n/* row */\n/* scroll */\n.mdl-card__title {\n  background-color: #333; }\n.mdl-card__supporting-text {\n  line-height: 22px;\n  width: calc(100% - 32px);\n  overflow: visible; }\n.mdl-card__actions {\n  padding: 8px 16px; }\n.mdl-card {\n  height: 100%;\n  overflow: visible; }\n"

/***/ }),

/***/ "./src/theme/components/card/card.component.ts":
/*!*****************************************************!*\
  !*** ./src/theme/components/card/card.component.ts ***!
  \*****************************************************/
/*! exports provided: CardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardComponent", function() { return CardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CardComponent = /** @class */ (function () {
    function CardComponent(viewContainerRef) {
        this.viewContainerRef = viewContainerRef;
        this.mdlCard = true;
        this.mdlShadow2DP = true;
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])('class.mdl-card'),
        __metadata("design:type", Object)
    ], CardComponent.prototype, "mdlCard", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])('class.mdl-shadow--2dp'),
        __metadata("design:type", Object)
    ], CardComponent.prototype, "mdlShadow2DP", void 0);
    CardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'base-card',
            styles: [__webpack_require__(/*! ./card.component.scss */ "./src/theme/components/card/card.component.scss")],
            template: "<ng-content></ng-content>",
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]])
    ], CardComponent);
    return CardComponent;
}());



/***/ }),

/***/ "./src/theme/components/card/card.module.ts":
/*!**************************************************!*\
  !*** ./src/theme/components/card/card.module.ts ***!
  \**************************************************/
/*! exports provided: CardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardModule", function() { return CardModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _card_actions_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./card-actions.component */ "./src/theme/components/card/card-actions.component.ts");
/* harmony import */ var _card_body_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./card-body.component */ "./src/theme/components/card/card-body.component.ts");
/* harmony import */ var _card_menu_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./card-menu.component */ "./src/theme/components/card/card-menu.component.ts");
/* harmony import */ var _card_title_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./card-title.component */ "./src/theme/components/card/card-title.component.ts");
/* harmony import */ var _card_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./card.component */ "./src/theme/components/card/card.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var CardModule = /** @class */ (function () {
    function CardModule() {
    }
    CardModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            ],
            declarations: [
                _card_component__WEBPACK_IMPORTED_MODULE_6__["CardComponent"],
                _card_title_component__WEBPACK_IMPORTED_MODULE_5__["CardTitleComponent"],
                _card_menu_component__WEBPACK_IMPORTED_MODULE_4__["CardMenuComponent"],
                _card_body_component__WEBPACK_IMPORTED_MODULE_3__["CardBodyComponent"],
                _card_actions_component__WEBPACK_IMPORTED_MODULE_2__["CardActionsComponent"],
            ],
            exports: [
                _card_component__WEBPACK_IMPORTED_MODULE_6__["CardComponent"],
                _card_title_component__WEBPACK_IMPORTED_MODULE_5__["CardTitleComponent"],
                _card_menu_component__WEBPACK_IMPORTED_MODULE_4__["CardMenuComponent"],
                _card_body_component__WEBPACK_IMPORTED_MODULE_3__["CardBodyComponent"],
                _card_actions_component__WEBPACK_IMPORTED_MODULE_2__["CardActionsComponent"],
            ],
        })
    ], CardModule);
    return CardModule;
}());



/***/ }),

/***/ "./src/theme/components/card/index.ts":
/*!********************************************!*\
  !*** ./src/theme/components/card/index.ts ***!
  \********************************************/
/*! exports provided: CardActionsComponent, CardBodyComponent, CardMenuComponent, CardTitleComponent, CardComponent, CardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _card_actions_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./card-actions.component */ "./src/theme/components/card/card-actions.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CardActionsComponent", function() { return _card_actions_component__WEBPACK_IMPORTED_MODULE_0__["CardActionsComponent"]; });

/* harmony import */ var _card_body_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./card-body.component */ "./src/theme/components/card/card-body.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CardBodyComponent", function() { return _card_body_component__WEBPACK_IMPORTED_MODULE_1__["CardBodyComponent"]; });

/* harmony import */ var _card_menu_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./card-menu.component */ "./src/theme/components/card/card-menu.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CardMenuComponent", function() { return _card_menu_component__WEBPACK_IMPORTED_MODULE_2__["CardMenuComponent"]; });

/* harmony import */ var _card_title_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./card-title.component */ "./src/theme/components/card/card-title.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CardTitleComponent", function() { return _card_title_component__WEBPACK_IMPORTED_MODULE_3__["CardTitleComponent"]; });

/* harmony import */ var _card_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./card.component */ "./src/theme/components/card/card.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CardComponent", function() { return _card_component__WEBPACK_IMPORTED_MODULE_4__["CardComponent"]; });

/* harmony import */ var _card_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./card.module */ "./src/theme/components/card/card.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CardModule", function() { return _card_module__WEBPACK_IMPORTED_MODULE_5__["CardModule"]; });









/***/ }),

/***/ "./src/theme/components/checkbox/checkbox.component.ts":
/*!*************************************************************!*\
  !*** ./src/theme/components/checkbox/checkbox.component.ts ***!
  \*************************************************************/
/*! exports provided: CheckboxComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckboxComponent", function() { return CheckboxComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var theme_components_toggle_toggle_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! theme/components/toggle/toggle.component */ "./src/theme/components/toggle/toggle.component.ts");
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


var CheckboxComponent = /** @class */ (function (_super) {
    __extends(CheckboxComponent, _super);
    function CheckboxComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.isInline = false;
        return _this;
    }
    Object.defineProperty(CheckboxComponent.prototype, "inline", {
        set: function (value) {
            if (value || value === '') {
                this.isInline = true;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CheckboxComponent.prototype, "className", {
        get: function () {
            return "mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect checkbox--colored-" + this.color + " " + (this.isInline && 'checkbox--inline');
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], CheckboxComponent.prototype, "inline", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])('class'),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], CheckboxComponent.prototype, "className", null);
    CheckboxComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'label[baseCheckbox]',
            styles: [__webpack_require__(/*! ../toggle/toggle.component.scss */ "./src/theme/components/toggle/toggle.component.scss")],
            template: "\n    <input type=\"checkbox\" [id]=\"innerID\" class=\"mdl-checkbox__input\" [checked]=\"isChecked\" (change)=\"isChecked = !isChecked\">\n    <span class=\"mdl-checkbox__label\"><ng-content></ng-content></span>\n  ",
        })
    ], CheckboxComponent);
    return CheckboxComponent;
}(theme_components_toggle_toggle_component__WEBPACK_IMPORTED_MODULE_1__["ToggleComponent"]));



/***/ }),

/***/ "./src/theme/components/checkbox/index.ts":
/*!************************************************!*\
  !*** ./src/theme/components/checkbox/index.ts ***!
  \************************************************/
/*! exports provided: CheckboxComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _checkbox_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./checkbox.component */ "./src/theme/components/checkbox/checkbox.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CheckboxComponent", function() { return _checkbox_component__WEBPACK_IMPORTED_MODULE_0__["CheckboxComponent"]; });




/***/ }),

/***/ "./src/theme/components/icon-toggle/icon-toggle.component.ts":
/*!*******************************************************************!*\
  !*** ./src/theme/components/icon-toggle/icon-toggle.component.ts ***!
  \*******************************************************************/
/*! exports provided: IconToggleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IconToggleComponent", function() { return IconToggleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var theme_components_toggle_toggle_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! theme/components/toggle/toggle.component */ "./src/theme/components/toggle/toggle.component.ts");
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


var IconToggleComponent = /** @class */ (function (_super) {
    __extends(IconToggleComponent, _super);
    function IconToggleComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(IconToggleComponent.prototype, "className", {
        get: function () {
            return "mdl-icon-toggle mdl-js-icon-toggle mdl-js-ripple-effect icon-toggle--colored-" + this.color;
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])('class'),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], IconToggleComponent.prototype, "className", null);
    IconToggleComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'label[baseIconToggle]',
            styles: [__webpack_require__(/*! ../toggle/toggle.component.scss */ "./src/theme/components/toggle/toggle.component.scss")],
            template: "\n    <input type=\"checkbox\" [id]=\"innerID\" class=\"mdl-icon-toggle__input\" [checked]=\"isChecked\" (change)=\"isChecked = !isChecked\">\n    <i class=\"mdl-icon-toggle__label material-icons\"><ng-content></ng-content></i>\n  ",
        })
    ], IconToggleComponent);
    return IconToggleComponent;
}(theme_components_toggle_toggle_component__WEBPACK_IMPORTED_MODULE_1__["ToggleComponent"]));



/***/ }),

/***/ "./src/theme/components/icon-toggle/index.ts":
/*!***************************************************!*\
  !*** ./src/theme/components/icon-toggle/index.ts ***!
  \***************************************************/
/*! exports provided: IconToggleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _icon_toggle_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./icon-toggle.component */ "./src/theme/components/icon-toggle/icon-toggle.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IconToggleComponent", function() { return _icon_toggle_component__WEBPACK_IMPORTED_MODULE_0__["IconToggleComponent"]; });




/***/ }),

/***/ "./src/theme/components/line-chart/index.ts":
/*!**************************************************!*\
  !*** ./src/theme/components/line-chart/index.ts ***!
  \**************************************************/
/*! exports provided: LineChartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _line_chart_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./line-chart.component */ "./src/theme/components/line-chart/line-chart.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LineChartComponent", function() { return _line_chart_component__WEBPACK_IMPORTED_MODULE_0__["LineChartComponent"]; });




/***/ }),

/***/ "./src/theme/components/line-chart/line-chart.component.scss":
/*!*******************************************************************!*\
  !*** ./src/theme/components/line-chart/line-chart.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/*------------------------------------*\\\n    $CONTENTS\n\\*------------------------------------*/\n/**\n * STYLE GUIDE VARIABLES------------------Declarations of Sass variables\n * -----Typography\n * -----Colors\n * -----Textfield\n * -----Switch\n * -----Spinner\n * -----Radio\n * -----Menu\n * -----List\n * -----Layout\n * -----Icon toggles\n * -----Footer\n * -----Column\n * -----Checkbox\n * -----Card\n * -----Button\n * -----Animation\n * -----Progress\n * -----Badge\n * -----Shadows\n * -----Grid\n * -----Data table\n * -----Dialog\n * -----Snackbar\n * -----Tooltip\n * -----Chip\n *\n * Even though all variables have the `!default` directive, most of them\n * should not be changed as they are dependent one another. This can cause\n * visual distortions (like alignment issues) that are hard to track down\n * and fix.\n */\n/* ==========  TYPOGRAPHY  ========== */\n/* We're splitting fonts into \"preferred\" and \"performance\" in order to optimize\n   page loading. For important text, such as the body, we want it to load\n   immediately and not wait for the web font load, whereas for other sections,\n   such as headers and titles, we're OK with things taking a bit longer to load.\n   We do have some optional classes and parameters in the mixins, in case you\n   definitely want to make sure you're using the preferred font and don't mind\n   the performance hit.\n   We should be able to improve on this once CSS Font Loading L3 becomes more\n   widely available.\n*/\n/* ==========  COLORS  ========== */\n/**\n*\n* Material design color palettes.\n* @see http://www.google.com/design/spec/style/color.html\n*\n**/\n/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/* ==========  Color Palettes  ========== */\n/* colors.scss */\n/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/* ==========  IMAGES  ========== */\n/* ==========  Color & Themes  ========== */\n/* ==========  Typography  ========== */\n/* ==========  Components  ========== */\n/* ==========  Standard Buttons  ========== */\n/* ==========  Icon Toggles  ========== */\n/* ==========  Radio Buttons  ========== */\n/* ==========  Ripple effect  ========== */\n/* ==========  Layout  ========== */\n/* ==========  Content Tabs  ========== */\n/* ==========  Checkboxes  ========== */\n/* ==========  Switches  ========== */\n/* ==========  Spinner  ========== */\n/* ==========  Text fields  ========== */\n/* ==========  Card  ========== */\n/* ==========  Sliders ========== */\n/* ========== Progress ========== */\n/* ==========  List ========== */\n/* ==========  Item ========== */\n/* ==========  Dropdown menu ========== */\n/* ==========  Tooltips  ========== */\n/* ==========  Footer  ========== */\n/* TEXTFIELD */\n/* SWITCH */\n/* SPINNER */\n/* RADIO */\n/* MENU */\n/* LIST */\n/* LAYOUT */\n/* ICON TOGGLE */\n/* FOOTER */\n/*mega-footer*/\n/*mini-footer*/\n/* CHECKBOX */\n/* CARD */\n/* Card dimensions */\n/* Cover image */\n/* BUTTON */\n/**\n *\n * Dimensions\n *\n */\n/* ANIMATION */\n/* PROGRESS */\n/* BADGE */\n/* SHADOWS */\n/* GRID */\n/* DATA TABLE */\n/* DIALOG */\n/* SNACKBAR */\n/* TOOLTIP */\n/* CHIP */\n/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/* Typography */\n/* Shadows */\n/* Animations */\n/* Dialog */\n/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/* ==========  Color Palettes  ========== */\n/* colors.scss */\n/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/* ==========  Color Palettes  ========== */\n/* colors.scss */\n/* ==========  IMAGES  ========== */\n/* ==========  Color & Themes  ========== */\n.text-color--smoke {\n  color: #666; }\n.color--gray {\n  background-color: #444 !important; }\n.color--dark-gray {\n  background-color: #333; }\n.color--smooth-gray {\n  background-color: #999 !important; }\n.text-color--smooth-gray {\n  color: #999 !important; }\n.color--red {\n  background-color: #f44336 !important; }\n.color-text--red {\n  color: #f44336 !important; }\n.color--orange {\n  background-color: #ffc107 !important; }\n.color-text--orange {\n  color: #ffc107 !important; }\n.color--amber {\n  background-color: #ff9800 !important; }\n.color-text--amber {\n  color: #ff9800 !important; }\n.color--green {\n  background-color: #00d45a !important; }\n.color-text--green {\n  color: #00d45a !important; }\n.color--light-blue {\n  background-color: #03a9f4 !important; }\n.color-text--light-blue {\n  color: #03a9f4 !important; }\n.color--purple {\n  background-color: #7726d3 !important; }\n.color-text--purple {\n  color: #7726d3 !important; }\n.color--teal {\n  background-color: #00bcd4 !important; }\n.color-text--teal {\n  color: #00bcd4 !important; }\n/* ==========  Typography  ========== */\n/* ==========  Components  ========== */\n/* ==========  Standard Buttons  ========== */\n/* ==========  Icon Toggles  ========== */\n/* ==========  Radio Buttons  ========== */\n/* ==========  Ripple effect  ========== */\n/* ==========  Layout  ========== */\n/* ==========  Content Tabs  ========== */\n/* ==========  Checkboxes  ========== */\n/* ==========  Switches  ========== */\n/* ==========  Spinner  ========== */\n/* ==========  Text fields  ========== */\n/* ==========  Card  ========== */\n/* ==========  Sliders ========== */\n/* ========== Progress ========== */\n/* ==========  List ========== */\n/* ==========  Item ========== */\n/* ==========  Dropdown menu ========== */\n/* ==========  Tooltips  ========== */\n/* ==========  Footer  ========== */\n/* TEXTFIELD */\n/* SWITCH */\n/* SPINNER */\n/* RADIO */\n/* MENU */\n/* LIST */\n/* LAYOUT */\n/* ICON */\n/* ICON TOGGLE */\n/* FOOTER */\n/* mega-footer */\n/* mini-footer */\n/* CHECKBOX */\n/* CARD */\n/* Card dimensions */\n/* Cover image */\n/* BUTTON */\n/* ANIMATION */\n/* PROGRESS */\n/* BADGE */\n/* SHADOWS */\n/* GRID */\n/* DATA TABLE */\n/* TOOLTIP */\n/* WIDGETS & COMPONENTS */\n/* Trending */\n/* label */\n/* charts */\n/* employer form */\n/* row */\n/* scroll */\n.line-chart__container {\n  min-height: 280px; }\n.line-chart__container svg {\n    height: 280px;\n    width: 100%; }\n.line-chart__container svg .y-axis-label,\n    .line-chart__container svg .x-axis-label {\n      font-family: \"Roboto\", \"Helvetica\", \"Arial\", sans-serif;\n      font-size: 12px;\n      font-weight: 300;\n      fill: rgba(255, 255, 255, 0.5); }\n.line-chart__container svg .nv-axis.nv-x text {\n      display: none; }\n.line-chart__container svg .nv-axis.nv-y text {\n      display: none; }\n.line-chart__container svg .nv-lineChart .nv-guideline {\n      stroke: rgba(255, 255, 255, 0.5);\n      stroke-width: 0.5px; }\n.line-chart__container svg .nv-lineChart .tick {\n      opacity: 0.1 !important; }\n.line-chart__container svg .nv-lineChart .tick.zero {\n        opacity: 0.5 !important; }\n.line-chart__container svg .nv-lineChart .tick.zero line {\n          stroke-opacity: 1 !important; }\n.line-chart__container svg .nv-lineChart .nv-y .domain {\n      stroke-opacity: 0 !important; }\n.line-chart__container svg .nv-lineChart .nvd3.nv-scatter .nv-groups .nv-point.hover {\n      stroke-width: 5px; }\n.line-chart__container .legend {\n    margin: auto;\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: center;\n    margin-top: 16px; }\n"

/***/ }),

/***/ "./src/theme/components/line-chart/line-chart.component.ts":
/*!*****************************************************************!*\
  !*** ./src/theme/components/line-chart/line-chart.component.ts ***!
  \*****************************************************************/
/*! exports provided: LineChartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LineChartComponent", function() { return LineChartComponent; });
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3 */ "./node_modules/d3/d3.js");
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(d3__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var nvd3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! nvd3 */ "./node_modules/nvd3/build/nv.d3.js");
/* harmony import */ var nvd3__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nvd3__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LineChartComponent = /** @class */ (function () {
    function LineChartComponent(el) {
        this.el = el;
        this.xStep = 0.125;
        this.xDrawStep = 4;
        this.margin = 20;
        this.durationResizeAnimation = 500;
        this.drawStep = this.xStep * this.xDrawStep;
        this.animationTime = 400;
        this.lineChartContainer = true;
    }
    LineChartComponent.prototype.ngAfterViewInit = function () {
        this.container = d3__WEBPACK_IMPORTED_MODULE_0__["select"](this.el.nativeElement);
        if (this.container[0][0]) {
            this.drawChart();
        }
    };
    LineChartComponent.prototype.afterConfigure = function () {
        this.columns = this.maxX / 2;
    };
    LineChartComponent.prototype.addSvgContainer = function () {
        this.svg = this.container.append('div').append('svg');
    };
    LineChartComponent.prototype.getSvgSizes = function () {
        var svgWidth = getComputedStyle(this.svg[0][0]).width;
        var svgHeight = getComputedStyle(this.svg[0][0]).height;
        this.svgWidth = +svgWidth.slice(0, -2);
        this.svgHeight = +svgHeight.slice(0, -2) - this.margin;
    };
    LineChartComponent.prototype.addAxisLabels = function () {
        this.container.selectAll('svg .y-axis-label').remove();
        this.container.select('svg')
            .append('text')
            .attr('class', 'y-axis-label')
            .attr('x', -(23 + this.yAxis.length * 7))
            .attr('y', '12')
            .attr('transform', 'rotate(-90)')
            .text(this.yAxis || '');
        this.container.select('svg')
            .append('text')
            .attr('class', 'x-axis-label')
            .text(this.xAxis || '');
    };
    LineChartComponent.prototype.buildBackground = function () {
        this.addSvgContainer();
        this.getSvgSizes();
        var bars = Array(this.columns).fill(this.svgHeight);
        this.barsLayout = this.svg.append('g')
            .attr('class', 'bars')
            .attr('transform', 'translate(' + this.margin + ', 0)')
            .selectAll('rect')
            .data(bars)
            .enter()
            .append('rect');
        this.addAxisLabels();
        this.setBackgroundSizes();
    };
    LineChartComponent.prototype.setBackgroundSizes = function () {
        var availableBarWidth = (this.svgWidth - 2 * this.margin) / this.columns;
        var barWidth = availableBarWidth / 2;
        this.barsLayout
            .attr('fill', '#4a4a4a')
            .attr('y', this.margin)
            .attr('height', function (d, i) { return d; })
            .transition().duration(this.durationResizeAnimation)
            .attr('width', barWidth)
            .attr('x', function (d, i) { return i * availableBarWidth; });
        this.container.select('svg .x-axis-label')
            .transition().duration(this.durationResizeAnimation)
            .attr('x', this.svgWidth - this.margin - 7 - this.xAxis.length * 7)
            .attr('y', this.svgHeight - (this.svgHeight) / 4 + this.margin + this.maxX);
    };
    LineChartComponent.prototype.drawChart = function () {
        this.buildBackground();
        this.buildLegend();
        this.buildNvGraph();
        this.animateGraphs();
    };
    LineChartComponent.prototype.buildNvGraph = function () {
        var _this = this;
        this.tuneNvGraph();
        nvd3__WEBPACK_IMPORTED_MODULE_1__["addGraph"](function () {
            _this.svg.datum(_this.animatedData)
                .transition().duration(0)
                .call(_this.lineChart);
            nvd3__WEBPACK_IMPORTED_MODULE_1__["utils"].windowResize(_this.resizeBackground.bind(_this));
            nvd3__WEBPACK_IMPORTED_MODULE_1__["utils"].windowResize(_this.lineChart.update);
            return _this.lineChart;
        });
    };
    LineChartComponent.prototype.tuneNvGraph = function () {
        this.lineChart = nvd3__WEBPACK_IMPORTED_MODULE_1__["models"].lineChart()
            .margin({ top: this.margin, right: this.margin, bottom: 0, left: this.margin })
            .useInteractiveGuideline(true)
            .xDomain([0, this.maxX])
            .yDomain([-1.01, 3])
            .showLegend(false)
            .showYAxis(true)
            .showXAxis(true)
            .pointSize(5);
        this.lineChart.tooltip.enabled(false);
        this.lineChart.interactiveLayer.tooltip.enabled(false);
        this.lineChart.xAxis
            .showMaxMin(false)
            .tickValues([0]);
        this.lineChart.yAxis
            .showMaxMin(false)
            .ticks(10);
    };
    LineChartComponent.prototype.buildLegend = function () {
        var legend = this.container.append('div')
            .attr('class', 'legend')
            .selectAll('.legend__item')
            .data(this.animatedData)
            .enter()
            .append('div')
            .attr('class', 'legend__item');
        legend.append('div')
            .attr('class', 'legend__mark pull-left')
            .style('background-color', function (d) { return d.color; });
        legend.append('div')
            .attr('class', 'legend__text')
            .text(function (d) { return d.key; });
    };
    LineChartComponent.prototype.resizeBackground = function () {
        this.getSvgSizes();
        this.setBackgroundSizes();
    };
    LineChartComponent.prototype.animateGraphs = function () {
        var _this = this;
        var i = 0;
        this.timer = setInterval(function () {
            _this.complementGraphs();
            _this.drawNextStep(i);
            i += _this.xStep;
            _this.checkEndOfAnimation(i);
        }, Math.round(400 / ((this.maxX / this.xStep) / this.xDrawStep)));
    };
    LineChartComponent.prototype.drawNextStep = function (i) {
        if (i !== 0 && i % this.drawStep === 0 || i === this.maxX) {
            try {
                this.lineChart.update();
            }
            catch (e) {
                // FIXME: error when chart out of sight
            }
        }
    };
    LineChartComponent.prototype.checkEndOfAnimation = function (i) {
        if (i >= this.maxX + 1) {
            this.lineChart.duration(this.durationResizeAnimation);
            this.animatedData.forEach(function (item) {
                item.fillOpacity = 0.11;
            });
            clearInterval(this.timer);
            this.lineChart.update();
        }
    };
    LineChartComponent.prototype.complementGraphs = function () {
        var _this = this;
        this.rawData.forEach(function (graph, i) { return _this.animatedData[i].values.push(graph.shift()); });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["HostBinding"])('class.line-chart__container'),
        __metadata("design:type", Object)
    ], LineChartComponent.prototype, "lineChartContainer", void 0);
    LineChartComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            template: '',
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]])
    ], LineChartComponent);
    return LineChartComponent;
}());



/***/ }),

/***/ "./src/theme/components/page-top/index.ts":
/*!************************************************!*\
  !*** ./src/theme/components/page-top/index.ts ***!
  \************************************************/
/*! exports provided: PageTopComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _page_top_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page-top.component */ "./src/theme/components/page-top/page-top.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PageTopComponent", function() { return _page_top_component__WEBPACK_IMPORTED_MODULE_0__["PageTopComponent"]; });




/***/ }),

/***/ "./src/theme/components/page-top/page-top.component.scss":
/*!***************************************************************!*\
  !*** ./src/theme/components/page-top/page-top.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/*------------------------------------*\\\n    $CONTENTS\n\\*------------------------------------*/\n/**\n * STYLE GUIDE VARIABLES------------------Declarations of Sass variables\n * -----Typography\n * -----Colors\n * -----Textfield\n * -----Switch\n * -----Spinner\n * -----Radio\n * -----Menu\n * -----List\n * -----Layout\n * -----Icon toggles\n * -----Footer\n * -----Column\n * -----Checkbox\n * -----Card\n * -----Button\n * -----Animation\n * -----Progress\n * -----Badge\n * -----Shadows\n * -----Grid\n * -----Data table\n * -----Dialog\n * -----Snackbar\n * -----Tooltip\n * -----Chip\n *\n * Even though all variables have the `!default` directive, most of them\n * should not be changed as they are dependent one another. This can cause\n * visual distortions (like alignment issues) that are hard to track down\n * and fix.\n */\n/* ==========  TYPOGRAPHY  ========== */\n/* We're splitting fonts into \"preferred\" and \"performance\" in order to optimize\n   page loading. For important text, such as the body, we want it to load\n   immediately and not wait for the web font load, whereas for other sections,\n   such as headers and titles, we're OK with things taking a bit longer to load.\n   We do have some optional classes and parameters in the mixins, in case you\n   definitely want to make sure you're using the preferred font and don't mind\n   the performance hit.\n   We should be able to improve on this once CSS Font Loading L3 becomes more\n   widely available.\n*/\n/* ==========  COLORS  ========== */\n/**\n*\n* Material design color palettes.\n* @see http://www.google.com/design/spec/style/color.html\n*\n**/\n/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/* ==========  Color Palettes  ========== */\n/* colors.scss */\n/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/* ==========  IMAGES  ========== */\n/* ==========  Color & Themes  ========== */\n/* ==========  Typography  ========== */\n/* ==========  Components  ========== */\n/* ==========  Standard Buttons  ========== */\n/* ==========  Icon Toggles  ========== */\n/* ==========  Radio Buttons  ========== */\n/* ==========  Ripple effect  ========== */\n/* ==========  Layout  ========== */\n/* ==========  Content Tabs  ========== */\n/* ==========  Checkboxes  ========== */\n/* ==========  Switches  ========== */\n/* ==========  Spinner  ========== */\n/* ==========  Text fields  ========== */\n/* ==========  Card  ========== */\n/* ==========  Sliders ========== */\n/* ========== Progress ========== */\n/* ==========  List ========== */\n/* ==========  Item ========== */\n/* ==========  Dropdown menu ========== */\n/* ==========  Tooltips  ========== */\n/* ==========  Footer  ========== */\n/* TEXTFIELD */\n/* SWITCH */\n/* SPINNER */\n/* RADIO */\n/* MENU */\n/* LIST */\n/* LAYOUT */\n/* ICON TOGGLE */\n/* FOOTER */\n/*mega-footer*/\n/*mini-footer*/\n/* CHECKBOX */\n/* CARD */\n/* Card dimensions */\n/* Cover image */\n/* BUTTON */\n/**\n *\n * Dimensions\n *\n */\n/* ANIMATION */\n/* PROGRESS */\n/* BADGE */\n/* SHADOWS */\n/* GRID */\n/* DATA TABLE */\n/* DIALOG */\n/* SNACKBAR */\n/* TOOLTIP */\n/* CHIP */\n/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/* Typography */\n/* Shadows */\n/* Animations */\n/* Dialog */\n/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/* ==========  Color Palettes  ========== */\n/* colors.scss */\n/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/* ==========  Color Palettes  ========== */\n/* colors.scss */\n/* ==========  IMAGES  ========== */\n/* ==========  Color & Themes  ========== */\n.text-color--smoke {\n  color: #666; }\n.color--gray {\n  background-color: #444 !important; }\n.color--dark-gray {\n  background-color: #333; }\n.color--smooth-gray {\n  background-color: #999 !important; }\n.text-color--smooth-gray {\n  color: #999 !important; }\n.color--red {\n  background-color: #f44336 !important; }\n.color-text--red {\n  color: #f44336 !important; }\n.color--orange {\n  background-color: #ffc107 !important; }\n.color-text--orange {\n  color: #ffc107 !important; }\n.color--amber {\n  background-color: #ff9800 !important; }\n.color-text--amber {\n  color: #ff9800 !important; }\n.color--green {\n  background-color: #00d45a !important; }\n.color-text--green {\n  color: #00d45a !important; }\n.color--light-blue {\n  background-color: #03a9f4 !important; }\n.color-text--light-blue {\n  color: #03a9f4 !important; }\n.color--purple {\n  background-color: #7726d3 !important; }\n.color-text--purple {\n  color: #7726d3 !important; }\n.color--teal {\n  background-color: #00bcd4 !important; }\n.color-text--teal {\n  color: #00bcd4 !important; }\n/* ==========  Typography  ========== */\n/* ==========  Components  ========== */\n/* ==========  Standard Buttons  ========== */\n/* ==========  Icon Toggles  ========== */\n/* ==========  Radio Buttons  ========== */\n/* ==========  Ripple effect  ========== */\n/* ==========  Layout  ========== */\n/* ==========  Content Tabs  ========== */\n/* ==========  Checkboxes  ========== */\n/* ==========  Switches  ========== */\n/* ==========  Spinner  ========== */\n/* ==========  Text fields  ========== */\n/* ==========  Card  ========== */\n/* ==========  Sliders ========== */\n/* ========== Progress ========== */\n/* ==========  List ========== */\n/* ==========  Item ========== */\n/* ==========  Dropdown menu ========== */\n/* ==========  Tooltips  ========== */\n/* ==========  Footer  ========== */\n/* TEXTFIELD */\n/* SWITCH */\n/* SPINNER */\n/* RADIO */\n/* MENU */\n/* LIST */\n/* LAYOUT */\n/* ICON */\n/* ICON TOGGLE */\n/* FOOTER */\n/* mega-footer */\n/* mini-footer */\n/* CHECKBOX */\n/* CARD */\n/* Card dimensions */\n/* Cover image */\n/* BUTTON */\n/* ANIMATION */\n/* PROGRESS */\n/* BADGE */\n/* SHADOWS */\n/* GRID */\n/* DATA TABLE */\n/* TOOLTIP */\n/* WIDGETS & COMPONENTS */\n/* Trending */\n/* label */\n/* charts */\n/* employer form */\n/* row */\n/* scroll */\n@media screen and (max-width: 1440px) {\n  .mdl-layout__header {\n    display: flex !important; } }\n.account-dropdown.mdl-menu {\n  width: 310px; }\n.account-dropdown .mdl-list__item {\n  font-size: 1rem; }\n.account-dropdown .mdl-list__item:first-child {\n    font-size: 16px;\n    padding-top: 8px;\n    padding-bottom: 8px;\n    height: 64px; }\n.account-dropdown .mdl-list__item:first-child .mdl-list__item-primary-content {\n      height: 48px;\n      line-height: 28px; }\n.account-dropdown .mdl-list__item:first-child .mdl-list__item-primary-content .mdl-list__item-avatar {\n        height: 48px;\n        width: 48px;\n        background: url(\"https://avatars1.githubusercontent.com/u/5583445?s=460&v=4\");\n        background-size: cover; }\n.account-dropdown .mdl-list__item:first-child .mdl-list__item-primary-content .mdl-list__item-sub-title {\n        font-weight: 300; }\n.account-dropdown .mdl-list__item:hover .mdl-list__item-icon {\n    color: #00bcd4; }\n.account-dropdown .list__item--border-top {\n  margin-top: 8px;\n  padding-top: 8px; }\n.settings-dropdown {\n  width: 135px; }\n.settings-dropdown .mdl-menu__item,\n  .settings-dropdown a {\n    font-family: \"Roboto\", \"Helvetica\", \"Arial\", sans-serif;\n    font-size: 1rem;\n    font-weight: 100;\n    color: #fff; }\n.search {\n  padding: 18px 0 !important; }\n"

/***/ }),

/***/ "./src/theme/components/page-top/page-top.component.ts":
/*!*************************************************************!*\
  !*** ./src/theme/components/page-top/page-top.component.ts ***!
  \*************************************************************/
/*! exports provided: PageTopComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageTopComponent", function() { return PageTopComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PageTopComponent = /** @class */ (function () {
    function PageTopComponent() {
        this.mdlLayoutHeaderRow = true;
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])('class.mdl-layout__header-row'),
        __metadata("design:type", Object)
    ], PageTopComponent.prototype, "mdlLayoutHeaderRow", void 0);
    PageTopComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'base-page-top',
            styles: [__webpack_require__(/*! ./page-top.component.scss */ "./src/theme/components/page-top/page-top.component.scss")],
            template: "<ng-content></ng-content>",
        })
    ], PageTopComponent);
    return PageTopComponent;
}());



/***/ }),

/***/ "./src/theme/components/pagination/index.ts":
/*!**************************************************!*\
  !*** ./src/theme/components/pagination/index.ts ***!
  \**************************************************/
/*! exports provided: PaginationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _pagination_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pagination.component */ "./src/theme/components/pagination/pagination.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PaginationComponent", function() { return _pagination_component__WEBPACK_IMPORTED_MODULE_0__["PaginationComponent"]; });




/***/ }),

/***/ "./src/theme/components/pagination/pagination.component.html":
/*!*******************************************************************!*\
  !*** ./src/theme/components/pagination/pagination.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<span (click)=\"onChangePage(-1)\"><i class=\"material-icons\">chevron_left</i></span>\r\n<span> {{ currentPage }} of {{ numPage }} </span>\r\n<span (click)=\"onChangePage(1)\"><i class=\"material-icons\">chevron_right</i></span>\r\n<div class=\"goto\">\r\n  <span> Go to </span>\r\n  <form (submit)=\"goToPage($event)\">\r\n    <input [(ngModel)]=\"inputNumPage\" name=\"inputPage\"\r\n           class=\"mdl-textfield__input\"\r\n           type=\"number\"\r\n           min=\"1\"\r\n           [max]=\"numPage\">\r\n  </form>\r\n</div>\r\n"

/***/ }),

/***/ "./src/theme/components/pagination/pagination.component.scss":
/*!*******************************************************************!*\
  !*** ./src/theme/components/pagination/pagination.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/*------------------------------------*\\\n    $CONTENTS\n\\*------------------------------------*/\n/**\n * STYLE GUIDE VARIABLES------------------Declarations of Sass variables\n * -----Typography\n * -----Colors\n * -----Textfield\n * -----Switch\n * -----Spinner\n * -----Radio\n * -----Menu\n * -----List\n * -----Layout\n * -----Icon toggles\n * -----Footer\n * -----Column\n * -----Checkbox\n * -----Card\n * -----Button\n * -----Animation\n * -----Progress\n * -----Badge\n * -----Shadows\n * -----Grid\n * -----Data table\n * -----Dialog\n * -----Snackbar\n * -----Tooltip\n * -----Chip\n *\n * Even though all variables have the `!default` directive, most of them\n * should not be changed as they are dependent one another. This can cause\n * visual distortions (like alignment issues) that are hard to track down\n * and fix.\n */\n/* ==========  TYPOGRAPHY  ========== */\n/* We're splitting fonts into \"preferred\" and \"performance\" in order to optimize\n   page loading. For important text, such as the body, we want it to load\n   immediately and not wait for the web font load, whereas for other sections,\n   such as headers and titles, we're OK with things taking a bit longer to load.\n   We do have some optional classes and parameters in the mixins, in case you\n   definitely want to make sure you're using the preferred font and don't mind\n   the performance hit.\n   We should be able to improve on this once CSS Font Loading L3 becomes more\n   widely available.\n*/\n/* ==========  COLORS  ========== */\n/**\n*\n* Material design color palettes.\n* @see http://www.google.com/design/spec/style/color.html\n*\n**/\n/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/* ==========  Color Palettes  ========== */\n/* colors.scss */\n/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/* ==========  IMAGES  ========== */\n/* ==========  Color & Themes  ========== */\n/* ==========  Typography  ========== */\n/* ==========  Components  ========== */\n/* ==========  Standard Buttons  ========== */\n/* ==========  Icon Toggles  ========== */\n/* ==========  Radio Buttons  ========== */\n/* ==========  Ripple effect  ========== */\n/* ==========  Layout  ========== */\n/* ==========  Content Tabs  ========== */\n/* ==========  Checkboxes  ========== */\n/* ==========  Switches  ========== */\n/* ==========  Spinner  ========== */\n/* ==========  Text fields  ========== */\n/* ==========  Card  ========== */\n/* ==========  Sliders ========== */\n/* ========== Progress ========== */\n/* ==========  List ========== */\n/* ==========  Item ========== */\n/* ==========  Dropdown menu ========== */\n/* ==========  Tooltips  ========== */\n/* ==========  Footer  ========== */\n/* TEXTFIELD */\n/* SWITCH */\n/* SPINNER */\n/* RADIO */\n/* MENU */\n/* LIST */\n/* LAYOUT */\n/* ICON TOGGLE */\n/* FOOTER */\n/*mega-footer*/\n/*mini-footer*/\n/* CHECKBOX */\n/* CARD */\n/* Card dimensions */\n/* Cover image */\n/* BUTTON */\n/**\n *\n * Dimensions\n *\n */\n/* ANIMATION */\n/* PROGRESS */\n/* BADGE */\n/* SHADOWS */\n/* GRID */\n/* DATA TABLE */\n/* DIALOG */\n/* SNACKBAR */\n/* TOOLTIP */\n/* CHIP */\n/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/* Typography */\n/* Shadows */\n/* Animations */\n/* Dialog */\n/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/* ==========  Color Palettes  ========== */\n/* colors.scss */\n/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/* ==========  Color Palettes  ========== */\n/* colors.scss */\n/* ==========  IMAGES  ========== */\n/* ==========  Color & Themes  ========== */\n.text-color--smoke {\n  color: #666; }\n.color--gray {\n  background-color: #444 !important; }\n.color--dark-gray {\n  background-color: #333; }\n.color--smooth-gray {\n  background-color: #999 !important; }\n.text-color--smooth-gray {\n  color: #999 !important; }\n.color--red {\n  background-color: #f44336 !important; }\n.color-text--red {\n  color: #f44336 !important; }\n.color--orange {\n  background-color: #ffc107 !important; }\n.color-text--orange {\n  color: #ffc107 !important; }\n.color--amber {\n  background-color: #ff9800 !important; }\n.color-text--amber {\n  color: #ff9800 !important; }\n.color--green {\n  background-color: #00d45a !important; }\n.color-text--green {\n  color: #00d45a !important; }\n.color--light-blue {\n  background-color: #03a9f4 !important; }\n.color-text--light-blue {\n  color: #03a9f4 !important; }\n.color--purple {\n  background-color: #7726d3 !important; }\n.color-text--purple {\n  color: #7726d3 !important; }\n.color--teal {\n  background-color: #00bcd4 !important; }\n.color-text--teal {\n  color: #00bcd4 !important; }\n/* ==========  Typography  ========== */\n/* ==========  Components  ========== */\n/* ==========  Standard Buttons  ========== */\n/* ==========  Icon Toggles  ========== */\n/* ==========  Radio Buttons  ========== */\n/* ==========  Ripple effect  ========== */\n/* ==========  Layout  ========== */\n/* ==========  Content Tabs  ========== */\n/* ==========  Checkboxes  ========== */\n/* ==========  Switches  ========== */\n/* ==========  Spinner  ========== */\n/* ==========  Text fields  ========== */\n/* ==========  Card  ========== */\n/* ==========  Sliders ========== */\n/* ========== Progress ========== */\n/* ==========  List ========== */\n/* ==========  Item ========== */\n/* ==========  Dropdown menu ========== */\n/* ==========  Tooltips  ========== */\n/* ==========  Footer  ========== */\n/* TEXTFIELD */\n/* SWITCH */\n/* SPINNER */\n/* RADIO */\n/* MENU */\n/* LIST */\n/* LAYOUT */\n/* ICON */\n/* ICON TOGGLE */\n/* FOOTER */\n/* mega-footer */\n/* mini-footer */\n/* CHECKBOX */\n/* CARD */\n/* Card dimensions */\n/* Cover image */\n/* BUTTON */\n/* ANIMATION */\n/* PROGRESS */\n/* BADGE */\n/* SHADOWS */\n/* GRID */\n/* DATA TABLE */\n/* TOOLTIP */\n/* WIDGETS & COMPONENTS */\n/* Trending */\n/* label */\n/* charts */\n/* employer form */\n/* row */\n/* scroll */\n.pagination {\n  font-family: Roboto, Helvetica, sans-serif;\n  color: #999;\n  font-size: 14px;\n  position: relative;\n  line-height: 16px;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none; }\n.pagination .material-icons {\n    cursor: pointer;\n    position: relative;\n    top: 0.5rem;\n    margin: 0 0.5rem; }\n.pagination .goto {\n    display: inline-block;\n    margin: 0 1rem 0 2rem; }\n.pagination .goto form {\n      width: 30px;\n      display: inline-block; }\n.pagination .goto form input {\n        text-align: center;\n        font-family: Roboto, Helvetica, sans-serif; }\n.pagination .goto form input:focus {\n          outline: none; }\n"

/***/ }),

/***/ "./src/theme/components/pagination/pagination.component.ts":
/*!*****************************************************************!*\
  !*** ./src/theme/components/pagination/pagination.component.ts ***!
  \*****************************************************************/
/*! exports provided: PaginationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginationComponent", function() { return PaginationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PaginationComponent = /** @class */ (function () {
    function PaginationComponent() {
        this.pagination = true;
        this.numPage = 1;
        this.currentPage = 1;
        this.changePage = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    PaginationComponent.prototype.onChangePage = function (direction) {
        this.currentPage = Math.min(Math.max(this.currentPage + direction, 1), this.numPage);
        this.changePage.emit(this.currentPage);
    };
    PaginationComponent.prototype.goToPage = function (event) {
        event.preventDefault();
        this.currentPage = (this.inputNumPage <= this.numPage && this.inputNumPage > 0) ? this.inputNumPage : this.currentPage;
        this.inputNumPage = null;
        this.changePage.emit(this.currentPage);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])('class.pagination'),
        __metadata("design:type", Object)
    ], PaginationComponent.prototype, "pagination", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], PaginationComponent.prototype, "numPage", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], PaginationComponent.prototype, "currentPage", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], PaginationComponent.prototype, "changePage", void 0);
    PaginationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'base-pagination',
            styles: [__webpack_require__(/*! ./pagination.component.scss */ "./src/theme/components/pagination/pagination.component.scss")],
            template: __webpack_require__(/*! ./pagination.component.html */ "./src/theme/components/pagination/pagination.component.html"),
        })
    ], PaginationComponent);
    return PaginationComponent;
}());



/***/ }),

/***/ "./src/theme/components/pie-chart/index.ts":
/*!*************************************************!*\
  !*** ./src/theme/components/pie-chart/index.ts ***!
  \*************************************************/
/*! exports provided: PieChartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _pie_chart_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pie-chart.component */ "./src/theme/components/pie-chart/pie-chart.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PieChartComponent", function() { return _pie_chart_component__WEBPACK_IMPORTED_MODULE_0__["PieChartComponent"]; });




/***/ }),

/***/ "./src/theme/components/pie-chart/pie-chart.component.scss":
/*!*****************************************************************!*\
  !*** ./src/theme/components/pie-chart/pie-chart.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/*------------------------------------*\\\n    $CONTENTS\n\\*------------------------------------*/\n/**\n * STYLE GUIDE VARIABLES------------------Declarations of Sass variables\n * -----Typography\n * -----Colors\n * -----Textfield\n * -----Switch\n * -----Spinner\n * -----Radio\n * -----Menu\n * -----List\n * -----Layout\n * -----Icon toggles\n * -----Footer\n * -----Column\n * -----Checkbox\n * -----Card\n * -----Button\n * -----Animation\n * -----Progress\n * -----Badge\n * -----Shadows\n * -----Grid\n * -----Data table\n * -----Dialog\n * -----Snackbar\n * -----Tooltip\n * -----Chip\n *\n * Even though all variables have the `!default` directive, most of them\n * should not be changed as they are dependent one another. This can cause\n * visual distortions (like alignment issues) that are hard to track down\n * and fix.\n */\n/* ==========  TYPOGRAPHY  ========== */\n/* We're splitting fonts into \"preferred\" and \"performance\" in order to optimize\n   page loading. For important text, such as the body, we want it to load\n   immediately and not wait for the web font load, whereas for other sections,\n   such as headers and titles, we're OK with things taking a bit longer to load.\n   We do have some optional classes and parameters in the mixins, in case you\n   definitely want to make sure you're using the preferred font and don't mind\n   the performance hit.\n   We should be able to improve on this once CSS Font Loading L3 becomes more\n   widely available.\n*/\n/* ==========  COLORS  ========== */\n/**\n*\n* Material design color palettes.\n* @see http://www.google.com/design/spec/style/color.html\n*\n**/\n/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/* ==========  Color Palettes  ========== */\n/* colors.scss */\n/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/* ==========  IMAGES  ========== */\n/* ==========  Color & Themes  ========== */\n/* ==========  Typography  ========== */\n/* ==========  Components  ========== */\n/* ==========  Standard Buttons  ========== */\n/* ==========  Icon Toggles  ========== */\n/* ==========  Radio Buttons  ========== */\n/* ==========  Ripple effect  ========== */\n/* ==========  Layout  ========== */\n/* ==========  Content Tabs  ========== */\n/* ==========  Checkboxes  ========== */\n/* ==========  Switches  ========== */\n/* ==========  Spinner  ========== */\n/* ==========  Text fields  ========== */\n/* ==========  Card  ========== */\n/* ==========  Sliders ========== */\n/* ========== Progress ========== */\n/* ==========  List ========== */\n/* ==========  Item ========== */\n/* ==========  Dropdown menu ========== */\n/* ==========  Tooltips  ========== */\n/* ==========  Footer  ========== */\n/* TEXTFIELD */\n/* SWITCH */\n/* SPINNER */\n/* RADIO */\n/* MENU */\n/* LIST */\n/* LAYOUT */\n/* ICON TOGGLE */\n/* FOOTER */\n/*mega-footer*/\n/*mini-footer*/\n/* CHECKBOX */\n/* CARD */\n/* Card dimensions */\n/* Cover image */\n/* BUTTON */\n/**\n *\n * Dimensions\n *\n */\n/* ANIMATION */\n/* PROGRESS */\n/* BADGE */\n/* SHADOWS */\n/* GRID */\n/* DATA TABLE */\n/* DIALOG */\n/* SNACKBAR */\n/* TOOLTIP */\n/* CHIP */\n/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/* Typography */\n/* Shadows */\n/* Animations */\n/* Dialog */\n/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/* ==========  Color Palettes  ========== */\n/* colors.scss */\n/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/* ==========  Color Palettes  ========== */\n/* colors.scss */\n/* ==========  IMAGES  ========== */\n/* ==========  Color & Themes  ========== */\n.text-color--smoke {\n  color: #666; }\n.color--gray {\n  background-color: #444 !important; }\n.color--dark-gray {\n  background-color: #333; }\n.color--smooth-gray {\n  background-color: #999 !important; }\n.text-color--smooth-gray {\n  color: #999 !important; }\n.color--red {\n  background-color: #f44336 !important; }\n.color-text--red {\n  color: #f44336 !important; }\n.color--orange {\n  background-color: #ffc107 !important; }\n.color-text--orange {\n  color: #ffc107 !important; }\n.color--amber {\n  background-color: #ff9800 !important; }\n.color-text--amber {\n  color: #ff9800 !important; }\n.color--green {\n  background-color: #00d45a !important; }\n.color-text--green {\n  color: #00d45a !important; }\n.color--light-blue {\n  background-color: #03a9f4 !important; }\n.color-text--light-blue {\n  color: #03a9f4 !important; }\n.color--purple {\n  background-color: #7726d3 !important; }\n.color-text--purple {\n  color: #7726d3 !important; }\n.color--teal {\n  background-color: #00bcd4 !important; }\n.color-text--teal {\n  color: #00bcd4 !important; }\n/* ==========  Typography  ========== */\n/* ==========  Components  ========== */\n/* ==========  Standard Buttons  ========== */\n/* ==========  Icon Toggles  ========== */\n/* ==========  Radio Buttons  ========== */\n/* ==========  Ripple effect  ========== */\n/* ==========  Layout  ========== */\n/* ==========  Content Tabs  ========== */\n/* ==========  Checkboxes  ========== */\n/* ==========  Switches  ========== */\n/* ==========  Spinner  ========== */\n/* ==========  Text fields  ========== */\n/* ==========  Card  ========== */\n/* ==========  Sliders ========== */\n/* ========== Progress ========== */\n/* ==========  List ========== */\n/* ==========  Item ========== */\n/* ==========  Dropdown menu ========== */\n/* ==========  Tooltips  ========== */\n/* ==========  Footer  ========== */\n/* TEXTFIELD */\n/* SWITCH */\n/* SPINNER */\n/* RADIO */\n/* MENU */\n/* LIST */\n/* LAYOUT */\n/* ICON */\n/* ICON TOGGLE */\n/* FOOTER */\n/* mega-footer */\n/* mini-footer */\n/* CHECKBOX */\n/* CARD */\n/* Card dimensions */\n/* Cover image */\n/* BUTTON */\n/* ANIMATION */\n/* PROGRESS */\n/* BADGE */\n/* SHADOWS */\n/* GRID */\n/* DATA TABLE */\n/* TOOLTIP */\n/* WIDGETS & COMPONENTS */\n/* Trending */\n/* label */\n/* charts */\n/* employer form */\n/* row */\n/* scroll */\n.chart1__container,\n.chart2__container,\n.pie-chart__container,\n.discrete-bar-chart__container {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-around;\n  align-items: center;\n  min-height: 228px; }\n.chart1__container svg,\n  .chart2__container svg,\n  .pie-chart__container svg,\n  .discrete-bar-chart__container svg {\n    min-height: 200px;\n    max-width: 180px; }\n.chart1__container svg .nvd3.nv-pie path,\n    .chart2__container svg .nvd3.nv-pie path,\n    .pie-chart__container svg .nvd3.nv-pie path,\n    .discrete-bar-chart__container svg .nvd3.nv-pie path {\n      fill-opacity: 1;\n      stroke-width: 0; }\n.chart1__container svg .nvd3.nv-pie .nv-pie-title,\n    .chart2__container svg .nvd3.nv-pie .nv-pie-title,\n    .pie-chart__container svg .nvd3.nv-pie .nv-pie-title,\n    .discrete-bar-chart__container svg .nvd3.nv-pie .nv-pie-title {\n      font-family: \"Roboto\", \"Helvetica\", \"Arial\", sans-serif;\n      fill: #fff;\n      font-weight: 300;\n      font-size: 22px !important; }\n.chart1__container .legend,\n  .chart2__container .legend,\n  .pie-chart__container .legend,\n  .discrete-bar-chart__container .legend {\n    max-width: 140px; }\n"

/***/ }),

/***/ "./src/theme/components/pie-chart/pie-chart.component.ts":
/*!***************************************************************!*\
  !*** ./src/theme/components/pie-chart/pie-chart.component.ts ***!
  \***************************************************************/
/*! exports provided: PieChartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PieChartComponent", function() { return PieChartComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PieChartComponent = /** @class */ (function () {
    function PieChartComponent() {
        this.pieChartContainer = true;
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])('class.pie-chart__container'),
        __metadata("design:type", Object)
    ], PieChartComponent.prototype, "pieChartContainer", void 0);
    PieChartComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: '',
        })
    ], PieChartComponent);
    return PieChartComponent;
}());



/***/ }),

/***/ "./src/theme/components/progress/index.ts":
/*!************************************************!*\
  !*** ./src/theme/components/progress/index.ts ***!
  \************************************************/
/*! exports provided: ProgressComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _progress_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./progress.component */ "./src/theme/components/progress/progress.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProgressComponent", function() { return _progress_component__WEBPACK_IMPORTED_MODULE_0__["ProgressComponent"]; });




/***/ }),

/***/ "./src/theme/components/progress/progress.component.scss":
/*!***************************************************************!*\
  !*** ./src/theme/components/progress/progress.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/*------------------------------------*\\\n    $CONTENTS\n\\*------------------------------------*/\n/**\n * STYLE GUIDE VARIABLES------------------Declarations of Sass variables\n * -----Typography\n * -----Colors\n * -----Textfield\n * -----Switch\n * -----Spinner\n * -----Radio\n * -----Menu\n * -----List\n * -----Layout\n * -----Icon toggles\n * -----Footer\n * -----Column\n * -----Checkbox\n * -----Card\n * -----Button\n * -----Animation\n * -----Progress\n * -----Badge\n * -----Shadows\n * -----Grid\n * -----Data table\n * -----Dialog\n * -----Snackbar\n * -----Tooltip\n * -----Chip\n *\n * Even though all variables have the `!default` directive, most of them\n * should not be changed as they are dependent one another. This can cause\n * visual distortions (like alignment issues) that are hard to track down\n * and fix.\n */\n/* ==========  TYPOGRAPHY  ========== */\n/* We're splitting fonts into \"preferred\" and \"performance\" in order to optimize\n   page loading. For important text, such as the body, we want it to load\n   immediately and not wait for the web font load, whereas for other sections,\n   such as headers and titles, we're OK with things taking a bit longer to load.\n   We do have some optional classes and parameters in the mixins, in case you\n   definitely want to make sure you're using the preferred font and don't mind\n   the performance hit.\n   We should be able to improve on this once CSS Font Loading L3 becomes more\n   widely available.\n*/\n/* ==========  COLORS  ========== */\n/**\n*\n* Material design color palettes.\n* @see http://www.google.com/design/spec/style/color.html\n*\n**/\n/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/* ==========  Color Palettes  ========== */\n/* colors.scss */\n/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/* ==========  IMAGES  ========== */\n/* ==========  Color & Themes  ========== */\n/* ==========  Typography  ========== */\n/* ==========  Components  ========== */\n/* ==========  Standard Buttons  ========== */\n/* ==========  Icon Toggles  ========== */\n/* ==========  Radio Buttons  ========== */\n/* ==========  Ripple effect  ========== */\n/* ==========  Layout  ========== */\n/* ==========  Content Tabs  ========== */\n/* ==========  Checkboxes  ========== */\n/* ==========  Switches  ========== */\n/* ==========  Spinner  ========== */\n/* ==========  Text fields  ========== */\n/* ==========  Card  ========== */\n/* ==========  Sliders ========== */\n/* ========== Progress ========== */\n/* ==========  List ========== */\n/* ==========  Item ========== */\n/* ==========  Dropdown menu ========== */\n/* ==========  Tooltips  ========== */\n/* ==========  Footer  ========== */\n/* TEXTFIELD */\n/* SWITCH */\n/* SPINNER */\n/* RADIO */\n/* MENU */\n/* LIST */\n/* LAYOUT */\n/* ICON TOGGLE */\n/* FOOTER */\n/*mega-footer*/\n/*mini-footer*/\n/* CHECKBOX */\n/* CARD */\n/* Card dimensions */\n/* Cover image */\n/* BUTTON */\n/**\n *\n * Dimensions\n *\n */\n/* ANIMATION */\n/* PROGRESS */\n/* BADGE */\n/* SHADOWS */\n/* GRID */\n/* DATA TABLE */\n/* DIALOG */\n/* SNACKBAR */\n/* TOOLTIP */\n/* CHIP */\n/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/* Typography */\n/* Shadows */\n/* Animations */\n/* Dialog */\n/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/* ==========  Color Palettes  ========== */\n/* colors.scss */\n/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/* ==========  Color Palettes  ========== */\n/* colors.scss */\n/* ==========  IMAGES  ========== */\n/* ==========  Color & Themes  ========== */\n.text-color--smoke {\n  color: #666; }\n.color--gray {\n  background-color: #444 !important; }\n.color--dark-gray {\n  background-color: #333; }\n.color--smooth-gray {\n  background-color: #999 !important; }\n.text-color--smooth-gray {\n  color: #999 !important; }\n.color--red {\n  background-color: #f44336 !important; }\n.color-text--red {\n  color: #f44336 !important; }\n.color--orange {\n  background-color: #ffc107 !important; }\n.color-text--orange {\n  color: #ffc107 !important; }\n.color--amber {\n  background-color: #ff9800 !important; }\n.color-text--amber {\n  color: #ff9800 !important; }\n.color--green {\n  background-color: #00d45a !important; }\n.color-text--green {\n  color: #00d45a !important; }\n.color--light-blue {\n  background-color: #03a9f4 !important; }\n.color-text--light-blue {\n  color: #03a9f4 !important; }\n.color--purple {\n  background-color: #7726d3 !important; }\n.color-text--purple {\n  color: #7726d3 !important; }\n.color--teal {\n  background-color: #00bcd4 !important; }\n.color-text--teal {\n  color: #00bcd4 !important; }\n/* ==========  Typography  ========== */\n/* ==========  Components  ========== */\n/* ==========  Standard Buttons  ========== */\n/* ==========  Icon Toggles  ========== */\n/* ==========  Radio Buttons  ========== */\n/* ==========  Ripple effect  ========== */\n/* ==========  Layout  ========== */\n/* ==========  Content Tabs  ========== */\n/* ==========  Checkboxes  ========== */\n/* ==========  Switches  ========== */\n/* ==========  Spinner  ========== */\n/* ==========  Text fields  ========== */\n/* ==========  Card  ========== */\n/* ==========  Sliders ========== */\n/* ========== Progress ========== */\n/* ==========  List ========== */\n/* ==========  Item ========== */\n/* ==========  Dropdown menu ========== */\n/* ==========  Tooltips  ========== */\n/* ==========  Footer  ========== */\n/* TEXTFIELD */\n/* SWITCH */\n/* SPINNER */\n/* RADIO */\n/* MENU */\n/* LIST */\n/* LAYOUT */\n/* ICON */\n/* ICON TOGGLE */\n/* FOOTER */\n/* mega-footer */\n/* mini-footer */\n/* CHECKBOX */\n/* CARD */\n/* Card dimensions */\n/* Cover image */\n/* BUTTON */\n/* ANIMATION */\n/* PROGRESS */\n/* BADGE */\n/* SHADOWS */\n/* GRID */\n/* DATA TABLE */\n/* TOOLTIP */\n/* WIDGETS & COMPONENTS */\n/* Trending */\n/* label */\n/* charts */\n/* employer form */\n/* row */\n/* scroll */\n.mdl-progress {\n  min-width: 100px;\n  width: auto; }\n.mdl-progress > .bufferbar {\n    background-image: none;\n    background-color: rgba(255, 255, 255, 0.4); }\n.mdl-progress:focus {\n    outline: none; }\n.progress--colored-red > .progressbar.bar1 {\n  background-color: #f44336; }\n.progress--colored-red.mdl-progress.mdl-progress__indeterminate > .auxbar {\n  background-image: none;\n  background-color: transparent; }\n@supports (-webkit-appearance: none) {\n  .progress--colored-red.mdl-progress:not(.mdl-progress__indeterminate) > .auxbar {\n    background-image: linear-gradient(to right, rgba(255, 255, 255, 0.4), rgba(255, 255, 255, 0.4)), linear-gradient(to right, rgba(255, 255, 255, 0.4), rgba(255, 255, 255, 0.4));\n    mask: url(\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIj8+Cjxzdmcgd2lkdGg9IjEyIiBoZWlnaHQ9IjQiIHZpZXdQb3J0PSIwIDAgMTIgNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogIDxlbGxpcHNlIGN4PSIyIiBjeT0iMiIgcng9IjIiIHJ5PSIyIj4KICAgIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9ImN4IiBmcm9tPSIyIiB0bz0iLTEwIiBkdXI9IjAuNnMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiAvPgogIDwvZWxsaXBzZT4KICA8ZWxsaXBzZSBjeD0iMTQiIGN5PSIyIiByeD0iMiIgcnk9IjIiIGNsYXNzPSJsb2FkZXIiPgogICAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT0iY3giIGZyb209IjE0IiB0bz0iMiIgZHVyPSIwLjZzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgLz4KICA8L2VsbGlwc2U+Cjwvc3ZnPgo=\");\n    -webkit-mask: url(\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIj8+Cjxzdmcgd2lkdGg9IjEyIiBoZWlnaHQ9IjQiIHZpZXdQb3J0PSIwIDAgMTIgNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogIDxlbGxpcHNlIGN4PSIyIiBjeT0iMiIgcng9IjIiIHJ5PSIyIj4KICAgIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9ImN4IiBmcm9tPSIyIiB0bz0iLTEwIiBkdXI9IjAuNnMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiAvPgogIDwvZWxsaXBzZT4KICA8ZWxsaXBzZSBjeD0iMTQiIGN5PSIyIiByeD0iMiIgcnk9IjIiIGNsYXNzPSJsb2FkZXIiPgogICAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT0iY3giIGZyb209IjE0IiB0bz0iMiIgZHVyPSIwLjZzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgLz4KICA8L2VsbGlwc2U+Cjwvc3ZnPgo=\"); } }\n.progress--colored-light-blue > .progressbar.bar1 {\n  background-color: #03a9f4; }\n.progress--colored-light-blue.mdl-progress.mdl-progress__indeterminate > .auxbar {\n  background-image: none;\n  background-color: transparent; }\n@supports (-webkit-appearance: none) {\n  .progress--colored-light-blue.mdl-progress:not(.mdl-progress__indeterminate) > .auxbar {\n    background-image: linear-gradient(to right, rgba(255, 255, 255, 0.4), rgba(255, 255, 255, 0.4)), linear-gradient(to right, rgba(255, 255, 255, 0.4), rgba(255, 255, 255, 0.4));\n    mask: url(\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIj8+Cjxzdmcgd2lkdGg9IjEyIiBoZWlnaHQ9IjQiIHZpZXdQb3J0PSIwIDAgMTIgNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogIDxlbGxpcHNlIGN4PSIyIiBjeT0iMiIgcng9IjIiIHJ5PSIyIj4KICAgIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9ImN4IiBmcm9tPSIyIiB0bz0iLTEwIiBkdXI9IjAuNnMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiAvPgogIDwvZWxsaXBzZT4KICA8ZWxsaXBzZSBjeD0iMTQiIGN5PSIyIiByeD0iMiIgcnk9IjIiIGNsYXNzPSJsb2FkZXIiPgogICAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT0iY3giIGZyb209IjE0IiB0bz0iMiIgZHVyPSIwLjZzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgLz4KICA8L2VsbGlwc2U+Cjwvc3ZnPgo=\");\n    -webkit-mask: url(\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIj8+Cjxzdmcgd2lkdGg9IjEyIiBoZWlnaHQ9IjQiIHZpZXdQb3J0PSIwIDAgMTIgNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogIDxlbGxpcHNlIGN4PSIyIiBjeT0iMiIgcng9IjIiIHJ5PSIyIj4KICAgIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9ImN4IiBmcm9tPSIyIiB0bz0iLTEwIiBkdXI9IjAuNnMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiAvPgogIDwvZWxsaXBzZT4KICA8ZWxsaXBzZSBjeD0iMTQiIGN5PSIyIiByeD0iMiIgcnk9IjIiIGNsYXNzPSJsb2FkZXIiPgogICAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT0iY3giIGZyb209IjE0IiB0bz0iMiIgZHVyPSIwLjZzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgLz4KICA8L2VsbGlwc2U+Cjwvc3ZnPgo=\"); } }\n.progress--colored-orange > .progressbar.bar1 {\n  background-color: #ffc107; }\n.progress--colored-orange.mdl-progress.mdl-progress__indeterminate > .auxbar {\n  background-image: none;\n  background-color: transparent; }\n@supports (-webkit-appearance: none) {\n  .progress--colored-orange.mdl-progress:not(.mdl-progress__indeterminate) > .auxbar {\n    background-image: linear-gradient(to right, rgba(255, 255, 255, 0.4), rgba(255, 255, 255, 0.4)), linear-gradient(to right, rgba(255, 255, 255, 0.4), rgba(255, 255, 255, 0.4));\n    mask: url(\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIj8+Cjxzdmcgd2lkdGg9IjEyIiBoZWlnaHQ9IjQiIHZpZXdQb3J0PSIwIDAgMTIgNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogIDxlbGxpcHNlIGN4PSIyIiBjeT0iMiIgcng9IjIiIHJ5PSIyIj4KICAgIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9ImN4IiBmcm9tPSIyIiB0bz0iLTEwIiBkdXI9IjAuNnMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiAvPgogIDwvZWxsaXBzZT4KICA8ZWxsaXBzZSBjeD0iMTQiIGN5PSIyIiByeD0iMiIgcnk9IjIiIGNsYXNzPSJsb2FkZXIiPgogICAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT0iY3giIGZyb209IjE0IiB0bz0iMiIgZHVyPSIwLjZzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgLz4KICA8L2VsbGlwc2U+Cjwvc3ZnPgo=\");\n    -webkit-mask: url(\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIj8+Cjxzdmcgd2lkdGg9IjEyIiBoZWlnaHQ9IjQiIHZpZXdQb3J0PSIwIDAgMTIgNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogIDxlbGxpcHNlIGN4PSIyIiBjeT0iMiIgcng9IjIiIHJ5PSIyIj4KICAgIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9ImN4IiBmcm9tPSIyIiB0bz0iLTEwIiBkdXI9IjAuNnMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiAvPgogIDwvZWxsaXBzZT4KICA8ZWxsaXBzZSBjeD0iMTQiIGN5PSIyIiByeD0iMiIgcnk9IjIiIGNsYXNzPSJsb2FkZXIiPgogICAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT0iY3giIGZyb209IjE0IiB0bz0iMiIgZHVyPSIwLjZzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgLz4KICA8L2VsbGlwc2U+Cjwvc3ZnPgo=\"); } }\n.progress--colored-light-teal > .progressbar.bar1 {\n  background-color: #00bcd4; }\n.progress--colored-light-teal.mdl-progress.mdl-progress__indeterminate > .auxbar {\n  background-image: none;\n  background-color: transparent; }\n@supports (-webkit-appearance: none) {\n  .progress--colored-light-teal.mdl-progress:not(.mdl-progress__indeterminate) > .auxbar {\n    background-image: linear-gradient(to right, rgba(255, 255, 255, 0.4), rgba(255, 255, 255, 0.4)), linear-gradient(to right, rgba(255, 255, 255, 0.4), rgba(255, 255, 255, 0.4));\n    mask: url(\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIj8+Cjxzdmcgd2lkdGg9IjEyIiBoZWlnaHQ9IjQiIHZpZXdQb3J0PSIwIDAgMTIgNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogIDxlbGxpcHNlIGN4PSIyIiBjeT0iMiIgcng9IjIiIHJ5PSIyIj4KICAgIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9ImN4IiBmcm9tPSIyIiB0bz0iLTEwIiBkdXI9IjAuNnMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiAvPgogIDwvZWxsaXBzZT4KICA8ZWxsaXBzZSBjeD0iMTQiIGN5PSIyIiByeD0iMiIgcnk9IjIiIGNsYXNzPSJsb2FkZXIiPgogICAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT0iY3giIGZyb209IjE0IiB0bz0iMiIgZHVyPSIwLjZzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgLz4KICA8L2VsbGlwc2U+Cjwvc3ZnPgo=\");\n    -webkit-mask: url(\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIj8+Cjxzdmcgd2lkdGg9IjEyIiBoZWlnaHQ9IjQiIHZpZXdQb3J0PSIwIDAgMTIgNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogIDxlbGxpcHNlIGN4PSIyIiBjeT0iMiIgcng9IjIiIHJ5PSIyIj4KICAgIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9ImN4IiBmcm9tPSIyIiB0bz0iLTEwIiBkdXI9IjAuNnMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiAvPgogIDwvZWxsaXBzZT4KICA8ZWxsaXBzZSBjeD0iMTQiIGN5PSIyIiByeD0iMiIgcnk9IjIiIGNsYXNzPSJsb2FkZXIiPgogICAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT0iY3giIGZyb209IjE0IiB0bz0iMiIgZHVyPSIwLjZzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgLz4KICA8L2VsbGlwc2U+Cjwvc3ZnPgo=\"); } }\n.progress--colored-purple > .progressbar.bar1 {\n  background-color: #7726d3; }\n.progress--colored-purple.mdl-progress.mdl-progress__indeterminate > .auxbar {\n  background-image: none;\n  background-color: transparent; }\n@supports (-webkit-appearance: none) {\n  .progress--colored-purple.mdl-progress:not(.mdl-progress__indeterminate) > .auxbar {\n    background-image: linear-gradient(to right, rgba(255, 255, 255, 0.4), rgba(255, 255, 255, 0.4)), linear-gradient(to right, rgba(255, 255, 255, 0.4), rgba(255, 255, 255, 0.4));\n    mask: url(\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIj8+Cjxzdmcgd2lkdGg9IjEyIiBoZWlnaHQ9IjQiIHZpZXdQb3J0PSIwIDAgMTIgNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogIDxlbGxpcHNlIGN4PSIyIiBjeT0iMiIgcng9IjIiIHJ5PSIyIj4KICAgIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9ImN4IiBmcm9tPSIyIiB0bz0iLTEwIiBkdXI9IjAuNnMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiAvPgogIDwvZWxsaXBzZT4KICA8ZWxsaXBzZSBjeD0iMTQiIGN5PSIyIiByeD0iMiIgcnk9IjIiIGNsYXNzPSJsb2FkZXIiPgogICAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT0iY3giIGZyb209IjE0IiB0bz0iMiIgZHVyPSIwLjZzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgLz4KICA8L2VsbGlwc2U+Cjwvc3ZnPgo=\");\n    -webkit-mask: url(\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIj8+Cjxzdmcgd2lkdGg9IjEyIiBoZWlnaHQ9IjQiIHZpZXdQb3J0PSIwIDAgMTIgNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogIDxlbGxpcHNlIGN4PSIyIiBjeT0iMiIgcng9IjIiIHJ5PSIyIj4KICAgIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9ImN4IiBmcm9tPSIyIiB0bz0iLTEwIiBkdXI9IjAuNnMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiAvPgogIDwvZWxsaXBzZT4KICA8ZWxsaXBzZSBjeD0iMTQiIGN5PSIyIiByeD0iMiIgcnk9IjIiIGNsYXNzPSJsb2FkZXIiPgogICAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT0iY3giIGZyb209IjE0IiB0bz0iMiIgZHVyPSIwLjZzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgLz4KICA8L2VsbGlwc2U+Cjwvc3ZnPgo=\"); } }\n.progress--colored-green > .progressbar.bar1 {\n  background-color: #00d45a; }\n.progress--colored-green.mdl-progress.mdl-progress__indeterminate > .auxbar {\n  background-image: none;\n  background-color: transparent; }\n@supports (-webkit-appearance: none) {\n  .progress--colored-green.mdl-progress:not(.mdl-progress__indeterminate) > .auxbar {\n    background-image: linear-gradient(to right, rgba(255, 255, 255, 0.4), rgba(255, 255, 255, 0.4)), linear-gradient(to right, rgba(255, 255, 255, 0.4), rgba(255, 255, 255, 0.4));\n    mask: url(\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIj8+Cjxzdmcgd2lkdGg9IjEyIiBoZWlnaHQ9IjQiIHZpZXdQb3J0PSIwIDAgMTIgNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogIDxlbGxpcHNlIGN4PSIyIiBjeT0iMiIgcng9IjIiIHJ5PSIyIj4KICAgIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9ImN4IiBmcm9tPSIyIiB0bz0iLTEwIiBkdXI9IjAuNnMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiAvPgogIDwvZWxsaXBzZT4KICA8ZWxsaXBzZSBjeD0iMTQiIGN5PSIyIiByeD0iMiIgcnk9IjIiIGNsYXNzPSJsb2FkZXIiPgogICAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT0iY3giIGZyb209IjE0IiB0bz0iMiIgZHVyPSIwLjZzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgLz4KICA8L2VsbGlwc2U+Cjwvc3ZnPgo=\");\n    -webkit-mask: url(\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIj8+Cjxzdmcgd2lkdGg9IjEyIiBoZWlnaHQ9IjQiIHZpZXdQb3J0PSIwIDAgMTIgNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogIDxlbGxpcHNlIGN4PSIyIiBjeT0iMiIgcng9IjIiIHJ5PSIyIj4KICAgIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9ImN4IiBmcm9tPSIyIiB0bz0iLTEwIiBkdXI9IjAuNnMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiAvPgogIDwvZWxsaXBzZT4KICA8ZWxsaXBzZSBjeD0iMTQiIGN5PSIyIiByeD0iMiIgcnk9IjIiIGNsYXNzPSJsb2FkZXIiPgogICAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT0iY3giIGZyb209IjE0IiB0bz0iMiIgZHVyPSIwLjZzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgLz4KICA8L2VsbGlwc2U+Cjwvc3ZnPgo=\"); } }\n"

/***/ }),

/***/ "./src/theme/components/progress/progress.component.ts":
/*!*************************************************************!*\
  !*** ./src/theme/components/progress/progress.component.ts ***!
  \*************************************************************/
/*! exports provided: ProgressComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgressComponent", function() { return ProgressComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProgressComponent = /** @class */ (function () {
    function ProgressComponent(el) {
        this.el = el;
        this.progressValue = 0;
        this.bufferValue = 100;
        this.isDeterminate = true;
    }
    Object.defineProperty(ProgressComponent.prototype, "indeterminate", {
        set: function (value) {
            if (value || value === '') {
                this.isDeterminate = false;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProgressComponent.prototype, "progress", {
        set: function (value) {
            this.progressValue = value;
            if (this.el.nativeElement.MaterialProgress) {
                this.el.nativeElement.MaterialProgress.setProgress(this.progressValue);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProgressComponent.prototype, "buffer", {
        set: function (value) {
            this.bufferValue = value;
            if (this.el.nativeElement.MaterialProgress) {
                this.el.nativeElement.MaterialProgress.setBuffer(this.bufferValue);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProgressComponent.prototype, "className", {
        get: function () {
            return "mdl-progress mdl-js-progress progress--colored-" + this.color;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProgressComponent.prototype, "mdlProgressIndeterminate", {
        get: function () {
            return !this.isDeterminate;
        },
        enumerable: true,
        configurable: true
    });
    ProgressComponent.prototype.mdlComponentUpgraded = function () {
        this.el.nativeElement.MaterialProgress.setProgress(this.progressValue);
        this.el.nativeElement.MaterialProgress.setBuffer(this.bufferValue);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ProgressComponent.prototype, "color", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], ProgressComponent.prototype, "indeterminate", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], ProgressComponent.prototype, "progress", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], ProgressComponent.prototype, "buffer", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])('class'),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], ProgressComponent.prototype, "className", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])('class.mdl-progress__indeterminate'),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], ProgressComponent.prototype, "mdlProgressIndeterminate", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('mdl-componentupgraded'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], ProgressComponent.prototype, "mdlComponentUpgraded", null);
    ProgressComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'base-progress',
            styles: [__webpack_require__(/*! ./progress.component.scss */ "./src/theme/components/progress/progress.component.scss")],
            template: "",
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], ProgressComponent);
    return ProgressComponent;
}());



/***/ }),

/***/ "./src/theme/components/radio-button/index.ts":
/*!****************************************************!*\
  !*** ./src/theme/components/radio-button/index.ts ***!
  \****************************************************/
/*! exports provided: RadioButtonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _radio_button_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./radio-button.component */ "./src/theme/components/radio-button/radio-button.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RadioButtonComponent", function() { return _radio_button_component__WEBPACK_IMPORTED_MODULE_0__["RadioButtonComponent"]; });




/***/ }),

/***/ "./src/theme/components/radio-button/radio-button.component.ts":
/*!*********************************************************************!*\
  !*** ./src/theme/components/radio-button/radio-button.component.ts ***!
  \*********************************************************************/
/*! exports provided: RadioButtonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RadioButtonComponent", function() { return RadioButtonComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var theme_components_toggle_toggle_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! theme/components/toggle/toggle.component */ "./src/theme/components/toggle/toggle.component.ts");
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


var RadioButtonComponent = /** @class */ (function (_super) {
    __extends(RadioButtonComponent, _super);
    function RadioButtonComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(RadioButtonComponent.prototype, "className", {
        get: function () {
            return "mdl-radio mdl-js-radio mdl-js-ripple-effect radio--colored-" + this.color;
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], RadioButtonComponent.prototype, "name", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], RadioButtonComponent.prototype, "value", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])('class'),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], RadioButtonComponent.prototype, "className", null);
    RadioButtonComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'label[baseRadioButton]',
            styles: [__webpack_require__(/*! ../toggle/toggle.component.scss */ "./src/theme/components/toggle/toggle.component.scss")],
            template: "\n    <input type=\"radio\" [id]=\"innerID\" class=\"mdl-radio__button\" [name]=\"name\" [value]=\"value\" [(ngModel)]=\"isChecked\" [checked]=\"isChecked\">\n    <span class=\"mdl-radio__label\"><ng-content></ng-content></span>\n  ",
        })
    ], RadioButtonComponent);
    return RadioButtonComponent;
}(theme_components_toggle_toggle_component__WEBPACK_IMPORTED_MODULE_1__["ToggleComponent"]));



/***/ }),

/***/ "./src/theme/components/right-sidebar/content/content.component.ts":
/*!*************************************************************************!*\
  !*** ./src/theme/components/right-sidebar/content/content.component.ts ***!
  \*************************************************************************/
/*! exports provided: RightSidebarContentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RightSidebarContentComponent", function() { return RightSidebarContentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var RightSidebarContentComponent = /** @class */ (function () {
    function RightSidebarContentComponent() {
    }
    RightSidebarContentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'base-right-sidebar-content',
            template: '<ng-content></ng-content>',
        })
    ], RightSidebarContentComponent);
    return RightSidebarContentComponent;
}());



/***/ }),

/***/ "./src/theme/components/right-sidebar/content/index.ts":
/*!*************************************************************!*\
  !*** ./src/theme/components/right-sidebar/content/index.ts ***!
  \*************************************************************/
/*! exports provided: RightSidebarContentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _content_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./content.component */ "./src/theme/components/right-sidebar/content/content.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RightSidebarContentComponent", function() { return _content_component__WEBPACK_IMPORTED_MODULE_0__["RightSidebarContentComponent"]; });




/***/ }),

/***/ "./src/theme/components/right-sidebar/index.ts":
/*!*****************************************************!*\
  !*** ./src/theme/components/right-sidebar/index.ts ***!
  \*****************************************************/
/*! exports provided: RightSidebarModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _right_sidebar_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./right-sidebar.module */ "./src/theme/components/right-sidebar/right-sidebar.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RightSidebarModule", function() { return _right_sidebar_module__WEBPACK_IMPORTED_MODULE_0__["RightSidebarModule"]; });




/***/ }),

/***/ "./src/theme/components/right-sidebar/right-sidebar.component.scss":
/*!*************************************************************************!*\
  !*** ./src/theme/components/right-sidebar/right-sidebar.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/*------------------------------------*\\\n    $CONTENTS\n\\*------------------------------------*/\n/**\n * STYLE GUIDE VARIABLES------------------Declarations of Sass variables\n * -----Typography\n * -----Colors\n * -----Textfield\n * -----Switch\n * -----Spinner\n * -----Radio\n * -----Menu\n * -----List\n * -----Layout\n * -----Icon toggles\n * -----Footer\n * -----Column\n * -----Checkbox\n * -----Card\n * -----Button\n * -----Animation\n * -----Progress\n * -----Badge\n * -----Shadows\n * -----Grid\n * -----Data table\n * -----Dialog\n * -----Snackbar\n * -----Tooltip\n * -----Chip\n *\n * Even though all variables have the `!default` directive, most of them\n * should not be changed as they are dependent one another. This can cause\n * visual distortions (like alignment issues) that are hard to track down\n * and fix.\n */\n/* ==========  TYPOGRAPHY  ========== */\n/* We're splitting fonts into \"preferred\" and \"performance\" in order to optimize\n   page loading. For important text, such as the body, we want it to load\n   immediately and not wait for the web font load, whereas for other sections,\n   such as headers and titles, we're OK with things taking a bit longer to load.\n   We do have some optional classes and parameters in the mixins, in case you\n   definitely want to make sure you're using the preferred font and don't mind\n   the performance hit.\n   We should be able to improve on this once CSS Font Loading L3 becomes more\n   widely available.\n*/\n/* ==========  COLORS  ========== */\n/**\n*\n* Material design color palettes.\n* @see http://www.google.com/design/spec/style/color.html\n*\n**/\n/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/* ==========  Color Palettes  ========== */\n/* colors.scss */\n/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/* ==========  IMAGES  ========== */\n/* ==========  Color & Themes  ========== */\n/* ==========  Typography  ========== */\n/* ==========  Components  ========== */\n/* ==========  Standard Buttons  ========== */\n/* ==========  Icon Toggles  ========== */\n/* ==========  Radio Buttons  ========== */\n/* ==========  Ripple effect  ========== */\n/* ==========  Layout  ========== */\n/* ==========  Content Tabs  ========== */\n/* ==========  Checkboxes  ========== */\n/* ==========  Switches  ========== */\n/* ==========  Spinner  ========== */\n/* ==========  Text fields  ========== */\n/* ==========  Card  ========== */\n/* ==========  Sliders ========== */\n/* ========== Progress ========== */\n/* ==========  List ========== */\n/* ==========  Item ========== */\n/* ==========  Dropdown menu ========== */\n/* ==========  Tooltips  ========== */\n/* ==========  Footer  ========== */\n/* TEXTFIELD */\n/* SWITCH */\n/* SPINNER */\n/* RADIO */\n/* MENU */\n/* LIST */\n/* LAYOUT */\n/* ICON TOGGLE */\n/* FOOTER */\n/*mega-footer*/\n/*mini-footer*/\n/* CHECKBOX */\n/* CARD */\n/* Card dimensions */\n/* Cover image */\n/* BUTTON */\n/**\n *\n * Dimensions\n *\n */\n/* ANIMATION */\n/* PROGRESS */\n/* BADGE */\n/* SHADOWS */\n/* GRID */\n/* DATA TABLE */\n/* DIALOG */\n/* SNACKBAR */\n/* TOOLTIP */\n/* CHIP */\n/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/* Typography */\n/* Shadows */\n/* Animations */\n/* Dialog */\n/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/* ==========  Color Palettes  ========== */\n/* colors.scss */\n/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/* ==========  Color Palettes  ========== */\n/* colors.scss */\n/* ==========  IMAGES  ========== */\n/* ==========  Color & Themes  ========== */\n.text-color--smoke {\n  color: #666; }\n.color--gray {\n  background-color: #444 !important; }\n.color--dark-gray {\n  background-color: #333; }\n.color--smooth-gray {\n  background-color: #999 !important; }\n.text-color--smooth-gray {\n  color: #999 !important; }\n.color--red {\n  background-color: #f44336 !important; }\n.color-text--red {\n  color: #f44336 !important; }\n.color--orange {\n  background-color: #ffc107 !important; }\n.color-text--orange {\n  color: #ffc107 !important; }\n.color--amber {\n  background-color: #ff9800 !important; }\n.color-text--amber {\n  color: #ff9800 !important; }\n.color--green {\n  background-color: #00d45a !important; }\n.color-text--green {\n  color: #00d45a !important; }\n.color--light-blue {\n  background-color: #03a9f4 !important; }\n.color-text--light-blue {\n  color: #03a9f4 !important; }\n.color--purple {\n  background-color: #7726d3 !important; }\n.color-text--purple {\n  color: #7726d3 !important; }\n.color--teal {\n  background-color: #00bcd4 !important; }\n.color-text--teal {\n  color: #00bcd4 !important; }\n/* ==========  Typography  ========== */\n/* ==========  Components  ========== */\n/* ==========  Standard Buttons  ========== */\n/* ==========  Icon Toggles  ========== */\n/* ==========  Radio Buttons  ========== */\n/* ==========  Ripple effect  ========== */\n/* ==========  Layout  ========== */\n/* ==========  Content Tabs  ========== */\n/* ==========  Checkboxes  ========== */\n/* ==========  Switches  ========== */\n/* ==========  Spinner  ========== */\n/* ==========  Text fields  ========== */\n/* ==========  Card  ========== */\n/* ==========  Sliders ========== */\n/* ========== Progress ========== */\n/* ==========  List ========== */\n/* ==========  Item ========== */\n/* ==========  Dropdown menu ========== */\n/* ==========  Tooltips  ========== */\n/* ==========  Footer  ========== */\n/* TEXTFIELD */\n/* SWITCH */\n/* SPINNER */\n/* RADIO */\n/* MENU */\n/* LIST */\n/* LAYOUT */\n/* ICON */\n/* ICON TOGGLE */\n/* FOOTER */\n/* mega-footer */\n/* mini-footer */\n/* CHECKBOX */\n/* CARD */\n/* Card dimensions */\n/* Cover image */\n/* BUTTON */\n/* ANIMATION */\n/* PROGRESS */\n/* BADGE */\n/* SHADOWS */\n/* GRID */\n/* DATA TABLE */\n/* TOOLTIP */\n/* WIDGETS & COMPONENTS */\n/* Trending */\n/* label */\n/* charts */\n/* employer form */\n/* row */\n/* scroll */\nbase-right-sidebar-layout {\n  display: block; }\nbase-right-sidebar-layout base-right-sidebar-content {\n    display: block;\n    width: calc(100% - 230px); }\nbase-right-sidebar-layout base-right-sidebar {\n    display: block;\n    width: 230px; }\n@media screen and (max-width: 800px) {\n    base-right-sidebar-layout base-right-sidebar-content {\n      width: 100%; }\n    base-right-sidebar-layout base-right-sidebar {\n      position: fixed;\n      right: 8px;\n      z-index: 1000; } }\n"

/***/ }),

/***/ "./src/theme/components/right-sidebar/right-sidebar.component.ts":
/*!***********************************************************************!*\
  !*** ./src/theme/components/right-sidebar/right-sidebar.component.ts ***!
  \***********************************************************************/
/*! exports provided: RightSidebarLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RightSidebarLayoutComponent", function() { return RightSidebarLayoutComponent; });
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


var RightSidebarLayoutComponent = /** @class */ (function (_super) {
    __extends(RightSidebarLayoutComponent, _super);
    function RightSidebarLayoutComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.mdlGrid = true;
        _this.mdlGridNoSpacing = true;
        return _this;
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], RightSidebarLayoutComponent.prototype, "title", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])('class.mdl-grid'),
        __metadata("design:type", Object)
    ], RightSidebarLayoutComponent.prototype, "mdlGrid", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])('class.mdl-grid--no-spacing'),
        __metadata("design:type", Object)
    ], RightSidebarLayoutComponent.prototype, "mdlGridNoSpacing", void 0);
    RightSidebarLayoutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'base-right-sidebar-layout',
            styles: [__webpack_require__(/*! ./right-sidebar.component.scss */ "./src/theme/components/right-sidebar/right-sidebar.component.scss")],
            template: "\n    <ng-content></ng-content>",
        })
    ], RightSidebarLayoutComponent);
    return RightSidebarLayoutComponent;
}(theme_components_upgradable__WEBPACK_IMPORTED_MODULE_1__["UpgradableComponent"]));



/***/ }),

/***/ "./src/theme/components/right-sidebar/right-sidebar.module.ts":
/*!********************************************************************!*\
  !*** ./src/theme/components/right-sidebar/right-sidebar.module.ts ***!
  \********************************************************************/
/*! exports provided: RightSidebarModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RightSidebarModule", function() { return RightSidebarModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _card_card_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../card/card.module */ "./src/theme/components/card/card.module.ts");
/* harmony import */ var _content__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./content */ "./src/theme/components/right-sidebar/content/index.ts");
/* harmony import */ var _right_sidebar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./right-sidebar.component */ "./src/theme/components/right-sidebar/right-sidebar.component.ts");
/* harmony import */ var _sidebar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sidebar */ "./src/theme/components/right-sidebar/sidebar/index.ts");
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
                _card_card_module__WEBPACK_IMPORTED_MODULE_2__["CardModule"],
            ],
            declarations: [
                _right_sidebar_component__WEBPACK_IMPORTED_MODULE_4__["RightSidebarLayoutComponent"],
                _sidebar__WEBPACK_IMPORTED_MODULE_5__["RightSidebarComponent"],
                _content__WEBPACK_IMPORTED_MODULE_3__["RightSidebarContentComponent"],
            ],
            exports: [
                _right_sidebar_component__WEBPACK_IMPORTED_MODULE_4__["RightSidebarLayoutComponent"],
                _content__WEBPACK_IMPORTED_MODULE_3__["RightSidebarContentComponent"],
                _sidebar__WEBPACK_IMPORTED_MODULE_5__["RightSidebarComponent"],
            ],
        })
    ], RightSidebarModule);
    return RightSidebarModule;
}());



/***/ }),

/***/ "./src/theme/components/right-sidebar/sidebar/index.ts":
/*!*************************************************************!*\
  !*** ./src/theme/components/right-sidebar/sidebar/index.ts ***!
  \*************************************************************/
/*! exports provided: RightSidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sidebar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sidebar.component */ "./src/theme/components/right-sidebar/sidebar/sidebar.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RightSidebarComponent", function() { return _sidebar_component__WEBPACK_IMPORTED_MODULE_0__["RightSidebarComponent"]; });




/***/ }),

/***/ "./src/theme/components/right-sidebar/sidebar/sidebar.component.html":
/*!***************************************************************************!*\
  !*** ./src/theme/components/right-sidebar/sidebar/sidebar.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"isClosed\" class=\"open-icon\">\r\n  <button class=\"mdl-button mdl-js-button mdl-button--icon mdl-button--raised  button--colored-teal mdl-js-ripple-effect\" (click)=\"openSidebar()\">\r\n    <i class=\"material-icons\">close</i>\r\n  </button>\r\n</div>\r\n\r\n<base-card *ngIf=\"!isClosed\">\r\n  <div class=\"right-sidebar-wrap\">\r\n    <base-card-title>\r\n      <h2 class=\"mdl-card__title-text\">{{ title }}</h2>\r\n      <div class=\"close\">\r\n        <button class=\"mdl-button mdl-js-button mdl-button--icon mdl-js-ripple-effect\" (click)=\"closeSidebar()\">\r\n          <i class=\"material-icons\">close</i>\r\n        </button>\r\n      </div>\r\n    </base-card-title>\r\n    <div class=\"right-sidebar-body\">\r\n      <ng-content></ng-content>\r\n    </div>\r\n  </div>\r\n</base-card>\r\n"

/***/ }),

/***/ "./src/theme/components/right-sidebar/sidebar/sidebar.component.scss":
/*!***************************************************************************!*\
  !*** ./src/theme/components/right-sidebar/sidebar/sidebar.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/*------------------------------------*\\\n    $CONTENTS\n\\*------------------------------------*/\n/**\n * STYLE GUIDE VARIABLES------------------Declarations of Sass variables\n * -----Typography\n * -----Colors\n * -----Textfield\n * -----Switch\n * -----Spinner\n * -----Radio\n * -----Menu\n * -----List\n * -----Layout\n * -----Icon toggles\n * -----Footer\n * -----Column\n * -----Checkbox\n * -----Card\n * -----Button\n * -----Animation\n * -----Progress\n * -----Badge\n * -----Shadows\n * -----Grid\n * -----Data table\n * -----Dialog\n * -----Snackbar\n * -----Tooltip\n * -----Chip\n *\n * Even though all variables have the `!default` directive, most of them\n * should not be changed as they are dependent one another. This can cause\n * visual distortions (like alignment issues) that are hard to track down\n * and fix.\n */\n/* ==========  TYPOGRAPHY  ========== */\n/* We're splitting fonts into \"preferred\" and \"performance\" in order to optimize\n   page loading. For important text, such as the body, we want it to load\n   immediately and not wait for the web font load, whereas for other sections,\n   such as headers and titles, we're OK with things taking a bit longer to load.\n   We do have some optional classes and parameters in the mixins, in case you\n   definitely want to make sure you're using the preferred font and don't mind\n   the performance hit.\n   We should be able to improve on this once CSS Font Loading L3 becomes more\n   widely available.\n*/\n/* ==========  COLORS  ========== */\n/**\n*\n* Material design color palettes.\n* @see http://www.google.com/design/spec/style/color.html\n*\n**/\n/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/* ==========  Color Palettes  ========== */\n/* colors.scss */\n/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/* ==========  IMAGES  ========== */\n/* ==========  Color & Themes  ========== */\n/* ==========  Typography  ========== */\n/* ==========  Components  ========== */\n/* ==========  Standard Buttons  ========== */\n/* ==========  Icon Toggles  ========== */\n/* ==========  Radio Buttons  ========== */\n/* ==========  Ripple effect  ========== */\n/* ==========  Layout  ========== */\n/* ==========  Content Tabs  ========== */\n/* ==========  Checkboxes  ========== */\n/* ==========  Switches  ========== */\n/* ==========  Spinner  ========== */\n/* ==========  Text fields  ========== */\n/* ==========  Card  ========== */\n/* ==========  Sliders ========== */\n/* ========== Progress ========== */\n/* ==========  List ========== */\n/* ==========  Item ========== */\n/* ==========  Dropdown menu ========== */\n/* ==========  Tooltips  ========== */\n/* ==========  Footer  ========== */\n/* TEXTFIELD */\n/* SWITCH */\n/* SPINNER */\n/* RADIO */\n/* MENU */\n/* LIST */\n/* LAYOUT */\n/* ICON TOGGLE */\n/* FOOTER */\n/*mega-footer*/\n/*mini-footer*/\n/* CHECKBOX */\n/* CARD */\n/* Card dimensions */\n/* Cover image */\n/* BUTTON */\n/**\n *\n * Dimensions\n *\n */\n/* ANIMATION */\n/* PROGRESS */\n/* BADGE */\n/* SHADOWS */\n/* GRID */\n/* DATA TABLE */\n/* DIALOG */\n/* SNACKBAR */\n/* TOOLTIP */\n/* CHIP */\n/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/* Typography */\n/* Shadows */\n/* Animations */\n/* Dialog */\n/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/* ==========  Color Palettes  ========== */\n/* colors.scss */\n/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/* ==========  Color Palettes  ========== */\n/* colors.scss */\n/* ==========  IMAGES  ========== */\n/* ==========  Color & Themes  ========== */\n.text-color--smoke {\n  color: #666; }\n.color--gray {\n  background-color: #444 !important; }\n.color--dark-gray {\n  background-color: #333; }\n.color--smooth-gray {\n  background-color: #999 !important; }\n.text-color--smooth-gray {\n  color: #999 !important; }\n.color--red {\n  background-color: #f44336 !important; }\n.color-text--red {\n  color: #f44336 !important; }\n.color--orange {\n  background-color: #ffc107 !important; }\n.color-text--orange {\n  color: #ffc107 !important; }\n.color--amber {\n  background-color: #ff9800 !important; }\n.color-text--amber {\n  color: #ff9800 !important; }\n.color--green {\n  background-color: #00d45a !important; }\n.color-text--green {\n  color: #00d45a !important; }\n.color--light-blue {\n  background-color: #03a9f4 !important; }\n.color-text--light-blue {\n  color: #03a9f4 !important; }\n.color--purple {\n  background-color: #7726d3 !important; }\n.color-text--purple {\n  color: #7726d3 !important; }\n.color--teal {\n  background-color: #00bcd4 !important; }\n.color-text--teal {\n  color: #00bcd4 !important; }\n/* ==========  Typography  ========== */\n/* ==========  Components  ========== */\n/* ==========  Standard Buttons  ========== */\n/* ==========  Icon Toggles  ========== */\n/* ==========  Radio Buttons  ========== */\n/* ==========  Ripple effect  ========== */\n/* ==========  Layout  ========== */\n/* ==========  Content Tabs  ========== */\n/* ==========  Checkboxes  ========== */\n/* ==========  Switches  ========== */\n/* ==========  Spinner  ========== */\n/* ==========  Text fields  ========== */\n/* ==========  Card  ========== */\n/* ==========  Sliders ========== */\n/* ========== Progress ========== */\n/* ==========  List ========== */\n/* ==========  Item ========== */\n/* ==========  Dropdown menu ========== */\n/* ==========  Tooltips  ========== */\n/* ==========  Footer  ========== */\n/* TEXTFIELD */\n/* SWITCH */\n/* SPINNER */\n/* RADIO */\n/* MENU */\n/* LIST */\n/* LAYOUT */\n/* ICON */\n/* ICON TOGGLE */\n/* FOOTER */\n/* mega-footer */\n/* mini-footer */\n/* CHECKBOX */\n/* CARD */\n/* Card dimensions */\n/* Cover image */\n/* BUTTON */\n/* ANIMATION */\n/* PROGRESS */\n/* BADGE */\n/* SHADOWS */\n/* GRID */\n/* DATA TABLE */\n/* TOOLTIP */\n/* WIDGETS & COMPONENTS */\n/* Trending */\n/* label */\n/* charts */\n/* employer form */\n/* row */\n/* scroll */\nbase-right-sidebar {\n  display: block;\n  min-height: calc(100vh - 64px);\n  height: auto; }\nbase-right-sidebar .mdl-card {\n    background: #333;\n    min-height: calc(100vh - 64px);\n    height: 100%; }\n@media screen and (max-width: 1440px) {\n    base-right-sidebar {\n      min-height: calc(100vh - 56px); }\n      base-right-sidebar .mdl-card {\n        min-height: calc(100vh - 56px); } }\nbase-right-sidebar .right-sidebar-wrap {\n    position: fixed;\n    width: calc(230px - 30px);\n    right: 1rem;\n    margin: 0.5rem; }\nbase-right-sidebar .mdl-card__title {\n    padding-left: 8px; }\nbase-right-sidebar .mdl-card__supporting-text {\n    height: 100%; }\nbase-right-sidebar .close {\n    float: right;\n    right: 0;\n    position: absolute; }\nbase-right-sidebar.is-closed {\n    width: auto;\n    display: flex;\n    align-items: center; }\nbase-right-sidebar .close,\n  base-right-sidebar .open-icon {\n    display: none; }\n@media screen and (max-width: 800px) {\n    base-right-sidebar .mdl-card {\n      overflow-y: auto; }\n    base-right-sidebar .close,\n    base-right-sidebar .open-icon {\n      display: block; } }\n"

/***/ }),

/***/ "./src/theme/components/right-sidebar/sidebar/sidebar.component.ts":
/*!*************************************************************************!*\
  !*** ./src/theme/components/right-sidebar/sidebar/sidebar.component.ts ***!
  \*************************************************************************/
/*! exports provided: RightSidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RightSidebarComponent", function() { return RightSidebarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RightSidebarComponent = /** @class */ (function () {
    function RightSidebarComponent() {
        this.toggleSidebar = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.isClosed = false;
    }
    RightSidebarComponent.prototype.closeSidebar = function () {
        this.isClosed = true;
    };
    RightSidebarComponent.prototype.openSidebar = function () {
        this.isClosed = false;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], RightSidebarComponent.prototype, "title", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], RightSidebarComponent.prototype, "toggleSidebar", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])('class.is-closed'),
        __metadata("design:type", Object)
    ], RightSidebarComponent.prototype, "isClosed", void 0);
    RightSidebarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'base-right-sidebar',
            styles: [__webpack_require__(/*! ./sidebar.component.scss */ "./src/theme/components/right-sidebar/sidebar/sidebar.component.scss")],
            template: __webpack_require__(/*! ./sidebar.component.html */ "./src/theme/components/right-sidebar/sidebar/sidebar.component.html"),
        })
    ], RightSidebarComponent);
    return RightSidebarComponent;
}());



/***/ }),

/***/ "./src/theme/components/sidebar/index.ts":
/*!***********************************************!*\
  !*** ./src/theme/components/sidebar/index.ts ***!
  \***********************************************/
/*! exports provided: MenuItemComponent, MenuLinkItemComponent, SidebarComponent, SidebarModule, SubmenuItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _menu_item_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu-item.component */ "./src/theme/components/sidebar/menu-item.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MenuItemComponent", function() { return _menu_item_component__WEBPACK_IMPORTED_MODULE_0__["MenuItemComponent"]; });

/* harmony import */ var _menu_link_item_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu-link-item.component */ "./src/theme/components/sidebar/menu-link-item.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MenuLinkItemComponent", function() { return _menu_link_item_component__WEBPACK_IMPORTED_MODULE_1__["MenuLinkItemComponent"]; });

/* harmony import */ var _sidebar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sidebar.component */ "./src/theme/components/sidebar/sidebar.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return _sidebar_component__WEBPACK_IMPORTED_MODULE_2__["SidebarComponent"]; });

/* harmony import */ var _sidebar_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sidebar.module */ "./src/theme/components/sidebar/sidebar.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SidebarModule", function() { return _sidebar_module__WEBPACK_IMPORTED_MODULE_3__["SidebarModule"]; });

/* harmony import */ var _submenu_item_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./submenu-item.component */ "./src/theme/components/sidebar/submenu-item.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SubmenuItemComponent", function() { return _submenu_item_component__WEBPACK_IMPORTED_MODULE_4__["SubmenuItemComponent"]; });








/***/ }),

/***/ "./src/theme/components/sidebar/menu-item.component.ts":
/*!*************************************************************!*\
  !*** ./src/theme/components/sidebar/menu-item.component.ts ***!
  \*************************************************************/
/*! exports provided: MenuItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuItemComponent", function() { return MenuItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MenuItemComponent = /** @class */ (function () {
    function MenuItemComponent() {
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], MenuItemComponent.prototype, "data", void 0);
    MenuItemComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'base-menu-item',
            styles: [__webpack_require__(/*! ./sidebar.component.scss */ "./src/theme/components/sidebar/sidebar.component.scss")],
            template: "\n    <base-menu-link-item *ngIf=\"data.link || data.href\" [data]=\"data\"></base-menu-link-item>\n    <base-submenu-item *ngIf=\"data.children\" [data]=\"data\"></base-submenu-item>\n  ",
        })
    ], MenuItemComponent);
    return MenuItemComponent;
}());



/***/ }),

/***/ "./src/theme/components/sidebar/menu-link-item.component.ts":
/*!******************************************************************!*\
  !*** ./src/theme/components/sidebar/menu-link-item.component.ts ***!
  \******************************************************************/
/*! exports provided: MenuLinkItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuLinkItemComponent", function() { return MenuLinkItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MenuLinkItemComponent = /** @class */ (function () {
    function MenuLinkItemComponent(router) {
        this.router = router;
    }
    MenuLinkItemComponent.prototype.navigate = function () {
        var layout = document.querySelector('.mdl-layout').MaterialLayout;
        if (layout.drawer_.getAttribute('aria-hidden') !== 'true') {
            layout.toggleDrawer();
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], MenuLinkItemComponent.prototype, "data", void 0);
    MenuLinkItemComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'base-menu-link-item',
            styles: [__webpack_require__(/*! ./sidebar.component.scss */ "./src/theme/components/sidebar/sidebar.component.scss")],
            template: "\n    <a\n      *ngIf=\"data.link\"\n      class=\"mdl-navigation__link\"\n      [routerLink]=\"data.link\"\n      (click)=\"navigate()\"\n      [class.mdl-navigation__link--current]=\"router.url === data.link\"><i *ngIf=\"data.icon\" class=\"material-icons\" role=\"presentation\">{{ data.icon }}</i>{{ data.name }}\n    </a>\n    <a\n      *ngIf=\"data.href\"\n      class=\"mdl-navigation__link\"\n      [href]=\"data.href\"\n      (click)=\"navigate()\"\n      [class.mdl-navigation__link--current]=\"router.url === data.link\">\n      <i *ngIf=\"data.icon\" class=\"material-icons\" role=\"presentation\">{{ data.icon }}</i>\n      {{ data.name }}\n    </a>\n  ",
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], MenuLinkItemComponent);
    return MenuLinkItemComponent;
}());



/***/ }),

/***/ "./src/theme/components/sidebar/sidebar.component.html":
/*!*************************************************************!*\
  !*** ./src/theme/components/sidebar/sidebar.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header>{{ title }}</header>\r\n<nav class=\"mdl-navigation\">\r\n  <base-menu-item *ngFor=\"let item of menu\" [data]=\"item\"></base-menu-item>\r\n\r\n  <div class=\"mdl-layout-spacer\"></div>\r\n  <base-menu-item [data]=\"{ name: 'GitHub', href: 'https://github.com/anypossiblew', icon: 'link' }\"></base-menu-item>\r\n</nav>\r\n"

/***/ }),

/***/ "./src/theme/components/sidebar/sidebar.component.scss":
/*!*************************************************************!*\
  !*** ./src/theme/components/sidebar/sidebar.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/*------------------------------------*\\\n    $CONTENTS\n\\*------------------------------------*/\n/**\n * STYLE GUIDE VARIABLES------------------Declarations of Sass variables\n * -----Typography\n * -----Colors\n * -----Textfield\n * -----Switch\n * -----Spinner\n * -----Radio\n * -----Menu\n * -----List\n * -----Layout\n * -----Icon toggles\n * -----Footer\n * -----Column\n * -----Checkbox\n * -----Card\n * -----Button\n * -----Animation\n * -----Progress\n * -----Badge\n * -----Shadows\n * -----Grid\n * -----Data table\n * -----Dialog\n * -----Snackbar\n * -----Tooltip\n * -----Chip\n *\n * Even though all variables have the `!default` directive, most of them\n * should not be changed as they are dependent one another. This can cause\n * visual distortions (like alignment issues) that are hard to track down\n * and fix.\n */\n/* ==========  TYPOGRAPHY  ========== */\n/* We're splitting fonts into \"preferred\" and \"performance\" in order to optimize\n   page loading. For important text, such as the body, we want it to load\n   immediately and not wait for the web font load, whereas for other sections,\n   such as headers and titles, we're OK with things taking a bit longer to load.\n   We do have some optional classes and parameters in the mixins, in case you\n   definitely want to make sure you're using the preferred font and don't mind\n   the performance hit.\n   We should be able to improve on this once CSS Font Loading L3 becomes more\n   widely available.\n*/\n/* ==========  COLORS  ========== */\n/**\n*\n* Material design color palettes.\n* @see http://www.google.com/design/spec/style/color.html\n*\n**/\n/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/* ==========  Color Palettes  ========== */\n/* colors.scss */\n/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/* ==========  IMAGES  ========== */\n/* ==========  Color & Themes  ========== */\n/* ==========  Typography  ========== */\n/* ==========  Components  ========== */\n/* ==========  Standard Buttons  ========== */\n/* ==========  Icon Toggles  ========== */\n/* ==========  Radio Buttons  ========== */\n/* ==========  Ripple effect  ========== */\n/* ==========  Layout  ========== */\n/* ==========  Content Tabs  ========== */\n/* ==========  Checkboxes  ========== */\n/* ==========  Switches  ========== */\n/* ==========  Spinner  ========== */\n/* ==========  Text fields  ========== */\n/* ==========  Card  ========== */\n/* ==========  Sliders ========== */\n/* ========== Progress ========== */\n/* ==========  List ========== */\n/* ==========  Item ========== */\n/* ==========  Dropdown menu ========== */\n/* ==========  Tooltips  ========== */\n/* ==========  Footer  ========== */\n/* TEXTFIELD */\n/* SWITCH */\n/* SPINNER */\n/* RADIO */\n/* MENU */\n/* LIST */\n/* LAYOUT */\n/* ICON TOGGLE */\n/* FOOTER */\n/*mega-footer*/\n/*mini-footer*/\n/* CHECKBOX */\n/* CARD */\n/* Card dimensions */\n/* Cover image */\n/* BUTTON */\n/**\n *\n * Dimensions\n *\n */\n/* ANIMATION */\n/* PROGRESS */\n/* BADGE */\n/* SHADOWS */\n/* GRID */\n/* DATA TABLE */\n/* DIALOG */\n/* SNACKBAR */\n/* TOOLTIP */\n/* CHIP */\n/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/* Typography */\n/* Shadows */\n/* Animations */\n/* Dialog */\n/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/* ==========  Color Palettes  ========== */\n/* colors.scss */\n/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/* ==========  Color Palettes  ========== */\n/* colors.scss */\n/* ==========  IMAGES  ========== */\n/* ==========  Color & Themes  ========== */\n.text-color--smoke {\n  color: #666; }\n.color--gray {\n  background-color: #444 !important; }\n.color--dark-gray {\n  background-color: #333; }\n.color--smooth-gray {\n  background-color: #999 !important; }\n.text-color--smooth-gray {\n  color: #999 !important; }\n.color--red {\n  background-color: #f44336 !important; }\n.color-text--red {\n  color: #f44336 !important; }\n.color--orange {\n  background-color: #ffc107 !important; }\n.color-text--orange {\n  color: #ffc107 !important; }\n.color--amber {\n  background-color: #ff9800 !important; }\n.color-text--amber {\n  color: #ff9800 !important; }\n.color--green {\n  background-color: #00d45a !important; }\n.color-text--green {\n  color: #00d45a !important; }\n.color--light-blue {\n  background-color: #03a9f4 !important; }\n.color-text--light-blue {\n  color: #03a9f4 !important; }\n.color--purple {\n  background-color: #7726d3 !important; }\n.color-text--purple {\n  color: #7726d3 !important; }\n.color--teal {\n  background-color: #00bcd4 !important; }\n.color-text--teal {\n  color: #00bcd4 !important; }\n/* ==========  Typography  ========== */\n/* ==========  Components  ========== */\n/* ==========  Standard Buttons  ========== */\n/* ==========  Icon Toggles  ========== */\n/* ==========  Radio Buttons  ========== */\n/* ==========  Ripple effect  ========== */\n/* ==========  Layout  ========== */\n/* ==========  Content Tabs  ========== */\n/* ==========  Checkboxes  ========== */\n/* ==========  Switches  ========== */\n/* ==========  Spinner  ========== */\n/* ==========  Text fields  ========== */\n/* ==========  Card  ========== */\n/* ==========  Sliders ========== */\n/* ========== Progress ========== */\n/* ==========  List ========== */\n/* ==========  Item ========== */\n/* ==========  Dropdown menu ========== */\n/* ==========  Tooltips  ========== */\n/* ==========  Footer  ========== */\n/* TEXTFIELD */\n/* SWITCH */\n/* SPINNER */\n/* RADIO */\n/* MENU */\n/* LIST */\n/* LAYOUT */\n/* ICON */\n/* ICON TOGGLE */\n/* FOOTER */\n/* mega-footer */\n/* mini-footer */\n/* CHECKBOX */\n/* CARD */\n/* Card dimensions */\n/* Cover image */\n/* BUTTON */\n/* ANIMATION */\n/* PROGRESS */\n/* BADGE */\n/* SHADOWS */\n/* GRID */\n/* DATA TABLE */\n/* TOOLTIP */\n/* WIDGETS & COMPONENTS */\n/* Trending */\n/* label */\n/* charts */\n/* employer form */\n/* row */\n/* scroll */\n@media screen and (max-width: 1440px) {\n  .mdl-layout__header {\n    display: flex !important; } }\n"

/***/ }),

/***/ "./src/theme/components/sidebar/sidebar.component.ts":
/*!***********************************************************!*\
  !*** ./src/theme/components/sidebar/sidebar.component.ts ***!
  \***********************************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SidebarComponent = /** @class */ (function () {
    function SidebarComponent() {
        this.title = 'darkboard';
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], SidebarComponent.prototype, "menu", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], SidebarComponent.prototype, "title", void 0);
    SidebarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'base-sidebar',
            styles: [__webpack_require__(/*! ./sidebar.component.scss */ "./src/theme/components/sidebar/sidebar.component.scss")],
            template: __webpack_require__(/*! ./sidebar.component.html */ "./src/theme/components/sidebar/sidebar.component.html"),
        })
    ], SidebarComponent);
    return SidebarComponent;
}());



/***/ }),

/***/ "./src/theme/components/sidebar/sidebar.module.ts":
/*!********************************************************!*\
  !*** ./src/theme/components/sidebar/sidebar.module.ts ***!
  \********************************************************/
/*! exports provided: SidebarModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarModule", function() { return SidebarModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _menu_item_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./menu-item.component */ "./src/theme/components/sidebar/menu-item.component.ts");
/* harmony import */ var _menu_link_item_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./menu-link-item.component */ "./src/theme/components/sidebar/menu-link-item.component.ts");
/* harmony import */ var _sidebar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sidebar.component */ "./src/theme/components/sidebar/sidebar.component.ts");
/* harmony import */ var _submenu_item_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./submenu-item.component */ "./src/theme/components/sidebar/submenu-item.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var SidebarModule = /** @class */ (function () {
    function SidebarModule() {
    }
    SidebarModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
            ],
            declarations: [
                _sidebar_component__WEBPACK_IMPORTED_MODULE_6__["SidebarComponent"],
                _menu_item_component__WEBPACK_IMPORTED_MODULE_4__["MenuItemComponent"],
                _menu_link_item_component__WEBPACK_IMPORTED_MODULE_5__["MenuLinkItemComponent"],
                _submenu_item_component__WEBPACK_IMPORTED_MODULE_7__["SubmenuItemComponent"],
            ],
            exports: [
                _sidebar_component__WEBPACK_IMPORTED_MODULE_6__["SidebarComponent"],
                _menu_item_component__WEBPACK_IMPORTED_MODULE_4__["MenuItemComponent"],
                _menu_link_item_component__WEBPACK_IMPORTED_MODULE_5__["MenuLinkItemComponent"],
                _submenu_item_component__WEBPACK_IMPORTED_MODULE_7__["SubmenuItemComponent"],
            ],
        })
    ], SidebarModule);
    return SidebarModule;
}());



/***/ }),

/***/ "./src/theme/components/sidebar/submenu-item.component.ts":
/*!****************************************************************!*\
  !*** ./src/theme/components/sidebar/submenu-item.component.ts ***!
  \****************************************************************/
/*! exports provided: SubmenuItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubmenuItemComponent", function() { return SubmenuItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SubmenuItemComponent = /** @class */ (function () {
    function SubmenuItemComponent(router) {
        this.router = router;
        this.subNavigation = true;
        this.shown = false;
    }
    Object.defineProperty(SubmenuItemComponent.prototype, "subNavigationShow", {
        get: function () {
            return this.shown;
        },
        enumerable: true,
        configurable: true
    });
    SubmenuItemComponent.prototype.ngOnInit = function () {
        this.shown = this.hasCurrent(this.data.children);
    };
    SubmenuItemComponent.prototype.hasCurrent = function (list) {
        var _this = this;
        return list.some(function (item) { return (item.link && item.link === _this.router.url) || (item.children && _this.hasCurrent(item.children)); });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])('class.sub-navigation'),
        __metadata("design:type", Object)
    ], SubmenuItemComponent.prototype, "subNavigation", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])('class.sub-navigation--show'),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], SubmenuItemComponent.prototype, "subNavigationShow", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], SubmenuItemComponent.prototype, "data", void 0);
    SubmenuItemComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'base-submenu-item',
            styles: [__webpack_require__(/*! ./sidebar.component.scss */ "./src/theme/components/sidebar/sidebar.component.scss")],
            template: "\n    <a class=\"mdl-navigation__link\" [class.mdl-navigation__link--current]=\"shown\" (click)=\"shown = !shown\">\n    <i *ngIf=\"data.icon\" class=\"material-icons\">{{ data.icon }}</i>{{ data.name }}<i class=\"material-icons\">keyboard_arrow_down</i>\n    </a>\n    <div class=\"mdl-navigation\">\n    <base-menu-item *ngFor=\"let child of data.children\" [data]=\"child\"></base-menu-item>\n    </div>\n  ",
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], SubmenuItemComponent);
    return SubmenuItemComponent;
}());



/***/ }),

/***/ "./src/theme/components/switch/index.ts":
/*!**********************************************!*\
  !*** ./src/theme/components/switch/index.ts ***!
  \**********************************************/
/*! exports provided: SwitchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _switch_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./switch.component */ "./src/theme/components/switch/switch.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SwitchComponent", function() { return _switch_component__WEBPACK_IMPORTED_MODULE_0__["SwitchComponent"]; });




/***/ }),

/***/ "./src/theme/components/switch/switch.component.ts":
/*!*********************************************************!*\
  !*** ./src/theme/components/switch/switch.component.ts ***!
  \*********************************************************/
/*! exports provided: SwitchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SwitchComponent", function() { return SwitchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var theme_components_toggle_toggle_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! theme/components/toggle/toggle.component */ "./src/theme/components/toggle/toggle.component.ts");
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


var SwitchComponent = /** @class */ (function (_super) {
    __extends(SwitchComponent, _super);
    function SwitchComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(SwitchComponent.prototype, "className", {
        get: function () {
            return "mdl-switch mdl-js-switch mdl-js-ripple-effect switch--colored-" + this.color;
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])('class'),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], SwitchComponent.prototype, "className", null);
    SwitchComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'label[baseSwitch]',
            styles: [__webpack_require__(/*! ../toggle/toggle.component.scss */ "./src/theme/components/toggle/toggle.component.scss")],
            template: "\n    <input type=\"checkbox\" [id]=\"innerID\" class=\"mdl-switch__input\" [checked]=\"isChecked\" (change)=\"isChecked = !isChecked\">\n    <span class=\"mdl-switch__label\"><ng-content></ng-content></span>\n  ",
        })
    ], SwitchComponent);
    return SwitchComponent;
}(theme_components_toggle_toggle_component__WEBPACK_IMPORTED_MODULE_1__["ToggleComponent"]));



/***/ }),

/***/ "./src/theme/components/toggle/index.ts":
/*!**********************************************!*\
  !*** ./src/theme/components/toggle/index.ts ***!
  \**********************************************/
/*! exports provided: ToggleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _toggle_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toggle.component */ "./src/theme/components/toggle/toggle.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ToggleComponent", function() { return _toggle_component__WEBPACK_IMPORTED_MODULE_0__["ToggleComponent"]; });




/***/ }),

/***/ "./src/theme/components/toggle/toggle.component.scss":
/*!***********************************************************!*\
  !*** ./src/theme/components/toggle/toggle.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/*------------------------------------*\\\n    $CONTENTS\n\\*------------------------------------*/\n/**\n * STYLE GUIDE VARIABLES------------------Declarations of Sass variables\n * -----Typography\n * -----Colors\n * -----Textfield\n * -----Switch\n * -----Spinner\n * -----Radio\n * -----Menu\n * -----List\n * -----Layout\n * -----Icon toggles\n * -----Footer\n * -----Column\n * -----Checkbox\n * -----Card\n * -----Button\n * -----Animation\n * -----Progress\n * -----Badge\n * -----Shadows\n * -----Grid\n * -----Data table\n * -----Dialog\n * -----Snackbar\n * -----Tooltip\n * -----Chip\n *\n * Even though all variables have the `!default` directive, most of them\n * should not be changed as they are dependent one another. This can cause\n * visual distortions (like alignment issues) that are hard to track down\n * and fix.\n */\n/* ==========  TYPOGRAPHY  ========== */\n/* We're splitting fonts into \"preferred\" and \"performance\" in order to optimize\n   page loading. For important text, such as the body, we want it to load\n   immediately and not wait for the web font load, whereas for other sections,\n   such as headers and titles, we're OK with things taking a bit longer to load.\n   We do have some optional classes and parameters in the mixins, in case you\n   definitely want to make sure you're using the preferred font and don't mind\n   the performance hit.\n   We should be able to improve on this once CSS Font Loading L3 becomes more\n   widely available.\n*/\n/* ==========  COLORS  ========== */\n/**\n*\n* Material design color palettes.\n* @see http://www.google.com/design/spec/style/color.html\n*\n**/\n/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/* ==========  Color Palettes  ========== */\n/* colors.scss */\n/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/* ==========  IMAGES  ========== */\n/* ==========  Color & Themes  ========== */\n/* ==========  Typography  ========== */\n/* ==========  Components  ========== */\n/* ==========  Standard Buttons  ========== */\n/* ==========  Icon Toggles  ========== */\n/* ==========  Radio Buttons  ========== */\n/* ==========  Ripple effect  ========== */\n/* ==========  Layout  ========== */\n/* ==========  Content Tabs  ========== */\n/* ==========  Checkboxes  ========== */\n/* ==========  Switches  ========== */\n/* ==========  Spinner  ========== */\n/* ==========  Text fields  ========== */\n/* ==========  Card  ========== */\n/* ==========  Sliders ========== */\n/* ========== Progress ========== */\n/* ==========  List ========== */\n/* ==========  Item ========== */\n/* ==========  Dropdown menu ========== */\n/* ==========  Tooltips  ========== */\n/* ==========  Footer  ========== */\n/* TEXTFIELD */\n/* SWITCH */\n/* SPINNER */\n/* RADIO */\n/* MENU */\n/* LIST */\n/* LAYOUT */\n/* ICON TOGGLE */\n/* FOOTER */\n/*mega-footer*/\n/*mini-footer*/\n/* CHECKBOX */\n/* CARD */\n/* Card dimensions */\n/* Cover image */\n/* BUTTON */\n/**\n *\n * Dimensions\n *\n */\n/* ANIMATION */\n/* PROGRESS */\n/* BADGE */\n/* SHADOWS */\n/* GRID */\n/* DATA TABLE */\n/* DIALOG */\n/* SNACKBAR */\n/* TOOLTIP */\n/* CHIP */\n/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/* Typography */\n/* Shadows */\n/* Animations */\n/* Dialog */\n/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/* ==========  Color Palettes  ========== */\n/* colors.scss */\n/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/* ==========  Color Palettes  ========== */\n/* colors.scss */\n/* ==========  IMAGES  ========== */\n/* ==========  Color & Themes  ========== */\n.text-color--smoke {\n  color: #666; }\n.color--gray {\n  background-color: #444 !important; }\n.color--dark-gray {\n  background-color: #333; }\n.color--smooth-gray {\n  background-color: #999 !important; }\n.text-color--smooth-gray {\n  color: #999 !important; }\n.color--red {\n  background-color: #f44336 !important; }\n.color-text--red {\n  color: #f44336 !important; }\n.color--orange {\n  background-color: #ffc107 !important; }\n.color-text--orange {\n  color: #ffc107 !important; }\n.color--amber {\n  background-color: #ff9800 !important; }\n.color-text--amber {\n  color: #ff9800 !important; }\n.color--green {\n  background-color: #00d45a !important; }\n.color-text--green {\n  color: #00d45a !important; }\n.color--light-blue {\n  background-color: #03a9f4 !important; }\n.color-text--light-blue {\n  color: #03a9f4 !important; }\n.color--purple {\n  background-color: #7726d3 !important; }\n.color-text--purple {\n  color: #7726d3 !important; }\n.color--teal {\n  background-color: #00bcd4 !important; }\n.color-text--teal {\n  color: #00bcd4 !important; }\n/* ==========  Typography  ========== */\n/* ==========  Components  ========== */\n/* ==========  Standard Buttons  ========== */\n/* ==========  Icon Toggles  ========== */\n/* ==========  Radio Buttons  ========== */\n/* ==========  Ripple effect  ========== */\n/* ==========  Layout  ========== */\n/* ==========  Content Tabs  ========== */\n/* ==========  Checkboxes  ========== */\n/* ==========  Switches  ========== */\n/* ==========  Spinner  ========== */\n/* ==========  Text fields  ========== */\n/* ==========  Card  ========== */\n/* ==========  Sliders ========== */\n/* ========== Progress ========== */\n/* ==========  List ========== */\n/* ==========  Item ========== */\n/* ==========  Dropdown menu ========== */\n/* ==========  Tooltips  ========== */\n/* ==========  Footer  ========== */\n/* TEXTFIELD */\n/* SWITCH */\n/* SPINNER */\n/* RADIO */\n/* MENU */\n/* LIST */\n/* LAYOUT */\n/* ICON */\n/* ICON TOGGLE */\n/* FOOTER */\n/* mega-footer */\n/* mini-footer */\n/* CHECKBOX */\n/* CARD */\n/* Card dimensions */\n/* Cover image */\n/* BUTTON */\n/* ANIMATION */\n/* PROGRESS */\n/* BADGE */\n/* SHADOWS */\n/* GRID */\n/* DATA TABLE */\n/* TOOLTIP */\n/* WIDGETS & COMPONENTS */\n/* Trending */\n/* label */\n/* charts */\n/* employer form */\n/* row */\n/* scroll */\n.mdl-checkbox__tick-outline {\n  -webkit-mask: url(\"assets/images/tick-mask.svg\"); }\n.mdl-checkbox__box-outline {\n  border-color: rgba(255, 255, 255, 0.8); }\n.mdl-checkbox:hover:not(.is-checked) .mdl-checkbox__box-outline {\n  border-color: #fff; }\n.mdl-switch__label {\n  left: 0;\n  margin-left: 16px; }\n.checkbox--colored-orange .mdl-ripple {\n  background-color: rgba(255, 193, 7, 0.8); }\n.checkbox--colored-orange.is-checked .mdl-checkbox__tick-outline {\n  background-color: #ffc107; }\n.checkbox--colored-orange.is-checked .mdl-checkbox__box-outline {\n  border-color: #ffc107; }\n.checkbox--colored-light-blue .mdl-ripple {\n  background-color: rgba(3, 169, 244, 0.8); }\n.checkbox--colored-light-blue.is-checked .mdl-checkbox__tick-outline {\n  background-color: #03a9f4; }\n.checkbox--colored-light-blue.is-checked .mdl-checkbox__box-outline {\n  border-color: #03a9f4; }\n.checkbox--colored-red .mdl-ripple {\n  background-color: rgba(244, 67, 54, 0.8); }\n.checkbox--colored-red.is-checked .mdl-checkbox__tick-outline {\n  background-color: #f44336; }\n.checkbox--colored-red.is-checked .mdl-checkbox__box-outline {\n  border-color: #f44336; }\n.checkbox--colored-teal .mdl-ripple {\n  background-color: rgba(0, 188, 212, 0.8); }\n.checkbox--colored-teal.is-checked .mdl-checkbox__tick-outline {\n  background-color: #00bcd4; }\n.checkbox--colored-teal.is-checked .mdl-checkbox__box-outline {\n  border-color: #00bcd4; }\n.checkbox--colored-purple .mdl-ripple {\n  background-color: rgba(119, 38, 211, 0.8); }\n.checkbox--colored-purple.is-checked .mdl-checkbox__tick-outline {\n  background-color: #7726d3; }\n.checkbox--colored-purple.is-checked .mdl-checkbox__box-outline {\n  border-color: #7726d3; }\n.checkbox--colored-green .mdl-ripple {\n  background-color: rgba(0, 212, 90, 0.8); }\n.checkbox--colored-green.is-checked .mdl-checkbox__tick-outline {\n  background-color: #00d45a; }\n.checkbox--colored-green.is-checked .mdl-checkbox__box-outline {\n  border-color: #00d45a; }\n.radio--colored-orange .mdl-ripple {\n  background-color: rgba(255, 193, 7, 0.8); }\n.radio--colored-orange.is-checked .mdl-radio__outer-circle {\n  border-color: #ffc107; }\n.radio--colored-orange.is-checked .mdl-radio__inner-circle {\n  background-color: #ffc107; }\n.radio--colored-light-blue .mdl-ripple {\n  background-color: rgba(3, 169, 244, 0.8); }\n.radio--colored-light-blue.is-checked .mdl-radio__outer-circle {\n  border-color: #03a9f4; }\n.radio--colored-light-blue.is-checked .mdl-radio__inner-circle {\n  background-color: #03a9f4; }\n.radio--colored-red .mdl-ripple {\n  background-color: rgba(244, 67, 54, 0.8); }\n.radio--colored-red.is-checked .mdl-radio__outer-circle {\n  border-color: #f44336; }\n.radio--colored-red.is-checked .mdl-radio__inner-circle {\n  background-color: #f44336; }\n.radio--colored-teal .mdl-ripple {\n  background-color: rgba(0, 188, 212, 0.8); }\n.radio--colored-teal.is-checked .mdl-radio__outer-circle {\n  border-color: #00bcd4; }\n.radio--colored-teal.is-checked .mdl-radio__inner-circle {\n  background-color: #00bcd4; }\n.radio--colored-purple .mdl-ripple {\n  background-color: rgba(119, 38, 211, 0.8); }\n.radio--colored-purple.is-checked .mdl-radio__outer-circle {\n  border-color: #7726d3; }\n.radio--colored-purple.is-checked .mdl-radio__inner-circle {\n  background-color: #7726d3; }\n.radio--colored-green .mdl-ripple {\n  background-color: rgba(0, 212, 90, 0.8); }\n.radio--colored-green.is-checked .mdl-radio__outer-circle {\n  border-color: #00d45a; }\n.radio--colored-green.is-checked .mdl-radio__inner-circle {\n  background-color: #00d45a; }\n.switch--colored-red .mdl-ripple {\n  background-color: rgba(244, 67, 54, 0.8); }\n.switch--colored-red .mdl-switch__thumb {\n  background-color: #9e9e9e; }\n.switch--colored-red.is-checked .mdl-switch__track {\n  background-color: rgba(244, 67, 54, 0.5); }\n.switch--colored-red.is-checked .mdl-switch__thumb {\n  background-color: #f44336; }\n.switch--colored-orange .mdl-ripple {\n  background-color: rgba(255, 193, 7, 0.8); }\n.switch--colored-orange .mdl-switch__thumb {\n  background-color: #9e9e9e; }\n.switch--colored-orange.is-checked .mdl-switch__track {\n  background-color: rgba(255, 193, 7, 0.5); }\n.switch--colored-orange.is-checked .mdl-switch__thumb {\n  background-color: #ffc107; }\n.switch--colored-light-blue .mdl-ripple {\n  background-color: rgba(3, 169, 244, 0.8); }\n.switch--colored-light-blue .mdl-switch__thumb {\n  background-color: #9e9e9e; }\n.switch--colored-light-blue.is-checked .mdl-switch__track {\n  background-color: rgba(3, 169, 244, 0.5); }\n.switch--colored-light-blue.is-checked .mdl-switch__thumb {\n  background-color: #03a9f4; }\n.switch--colored-teal .mdl-ripple {\n  background-color: rgba(0, 188, 212, 0.8); }\n.switch--colored-teal .mdl-switch__thumb {\n  background-color: #9e9e9e; }\n.switch--colored-teal.is-checked .mdl-switch__track {\n  background-color: rgba(0, 188, 212, 0.5); }\n.switch--colored-teal.is-checked .mdl-switch__thumb {\n  background-color: #00bcd4; }\n.switch--colored-purple .mdl-ripple {\n  background-color: rgba(119, 38, 211, 0.8); }\n.switch--colored-purple .mdl-switch__thumb {\n  background-color: #9e9e9e; }\n.switch--colored-purple.is-checked .mdl-switch__track {\n  background-color: rgba(119, 38, 211, 0.5); }\n.switch--colored-purple.is-checked .mdl-switch__thumb {\n  background-color: #7726d3; }\n.switch--colored-green .mdl-ripple {\n  background-color: rgba(0, 212, 90, 0.8); }\n.switch--colored-green .mdl-switch__thumb {\n  background-color: #9e9e9e; }\n.switch--colored-green.is-checked .mdl-switch__track {\n  background-color: rgba(0, 212, 90, 0.5); }\n.switch--colored-green.is-checked .mdl-switch__thumb {\n  background-color: #00d45a; }\n.icon-toggle--colored-light-blue.is-checked .mdl-icon-toggle__label {\n  color: #03a9f4; }\n.icon-toggle--colored-light-blue .mdl-ripple {\n  background-color: #03a9f4; }\n.icon-toggle--colored-teal.is-checked .mdl-icon-toggle__label {\n  color: #00bcd4; }\n.icon-toggle--colored-teal .mdl-ripple {\n  background-color: #00bcd4; }\n.icon-toggle--colored-orange.is-checked .mdl-icon-toggle__label {\n  color: #ffc107; }\n.icon-toggle--colored-orange .mdl-ripple {\n  background-color: #ffc107; }\n.icon-toggle--colored-purple.is-checked .mdl-icon-toggle__label {\n  color: #7726d3; }\n.icon-toggle--colored-purple .mdl-ripple {\n  background-color: #7726d3; }\n.icon-toggle--colored-red.is-checked .mdl-icon-toggle__label {\n  color: #f44336; }\n.icon-toggle--colored-red .mdl-ripple {\n  background-color: #f44336; }\n.icon-toggle--colored-green.is-checked .mdl-icon-toggle__label {\n  color: #00d45a; }\n.icon-toggle--colored-green .mdl-ripple {\n  background-color: #00d45a; }\n"

/***/ }),

/***/ "./src/theme/components/toggle/toggle.component.ts":
/*!*********************************************************!*\
  !*** ./src/theme/components/toggle/toggle.component.ts ***!
  \*********************************************************/
/*! exports provided: ToggleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToggleComponent", function() { return ToggleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ToggleComponent = /** @class */ (function () {
    function ToggleComponent() {
        this.isChecked = false;
        this.innerID = "base-toggle-" + (ToggleComponent_1.idCounter += 1);
    }
    ToggleComponent_1 = ToggleComponent;
    Object.defineProperty(ToggleComponent.prototype, "checked", {
        set: function (value) {
            if (value || value === '') {
                this.isChecked = true;
            }
        },
        enumerable: true,
        configurable: true
    });
    var ToggleComponent_1;
    ToggleComponent.idCounter = 0;
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])('for'), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ToggleComponent.prototype, "innerID", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ToggleComponent.prototype, "color", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], ToggleComponent.prototype, "checked", null);
    ToggleComponent = ToggleComponent_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: '',
        })
    ], ToggleComponent);
    return ToggleComponent;
}());



/***/ }),

/***/ "./src/theme/components/upgradable/index.ts":
/*!**************************************************!*\
  !*** ./src/theme/components/upgradable/index.ts ***!
  \**************************************************/
/*! exports provided: UpgradableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _upgradable_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./upgradable.component */ "./src/theme/components/upgradable/upgradable.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UpgradableComponent", function() { return _upgradable_component__WEBPACK_IMPORTED_MODULE_0__["UpgradableComponent"]; });




/***/ }),

/***/ "./src/theme/components/upgradable/upgradable.component.ts":
/*!*****************************************************************!*\
  !*** ./src/theme/components/upgradable/upgradable.component.ts ***!
  \*****************************************************************/
/*! exports provided: UpgradableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpgradableComponent", function() { return UpgradableComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var UpgradableComponent = /** @class */ (function () {
    function UpgradableComponent() {
    }
    UpgradableComponent.prototype.ngAfterViewInit = function () {
        componentHandler.upgradeDom();
    };
    UpgradableComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: '',
        })
    ], UpgradableComponent);
    return UpgradableComponent;
}());



/***/ }),

/***/ "./src/theme/directives/tooltip/index.ts":
/*!***********************************************!*\
  !*** ./src/theme/directives/tooltip/index.ts ***!
  \***********************************************/
/*! exports provided: TooltipComponent, TooltipDirective, TooltipModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tooltip_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tooltip.component */ "./src/theme/directives/tooltip/tooltip.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TooltipComponent", function() { return _tooltip_component__WEBPACK_IMPORTED_MODULE_0__["TooltipComponent"]; });

/* harmony import */ var _tooltip_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tooltip.directive */ "./src/theme/directives/tooltip/tooltip.directive.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TooltipDirective", function() { return _tooltip_directive__WEBPACK_IMPORTED_MODULE_1__["TooltipDirective"]; });

/* harmony import */ var _tooltip_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tooltip.module */ "./src/theme/directives/tooltip/tooltip.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TooltipModule", function() { return _tooltip_module__WEBPACK_IMPORTED_MODULE_2__["TooltipModule"]; });






/***/ }),

/***/ "./src/theme/directives/tooltip/tooltip.component.scss":
/*!*************************************************************!*\
  !*** ./src/theme/directives/tooltip/tooltip.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/*------------------------------------*\\\n    $CONTENTS\n\\*------------------------------------*/\n/**\n * STYLE GUIDE VARIABLES------------------Declarations of Sass variables\n * -----Typography\n * -----Colors\n * -----Textfield\n * -----Switch\n * -----Spinner\n * -----Radio\n * -----Menu\n * -----List\n * -----Layout\n * -----Icon toggles\n * -----Footer\n * -----Column\n * -----Checkbox\n * -----Card\n * -----Button\n * -----Animation\n * -----Progress\n * -----Badge\n * -----Shadows\n * -----Grid\n * -----Data table\n * -----Dialog\n * -----Snackbar\n * -----Tooltip\n * -----Chip\n *\n * Even though all variables have the `!default` directive, most of them\n * should not be changed as they are dependent one another. This can cause\n * visual distortions (like alignment issues) that are hard to track down\n * and fix.\n */\n/* ==========  TYPOGRAPHY  ========== */\n/* We're splitting fonts into \"preferred\" and \"performance\" in order to optimize\n   page loading. For important text, such as the body, we want it to load\n   immediately and not wait for the web font load, whereas for other sections,\n   such as headers and titles, we're OK with things taking a bit longer to load.\n   We do have some optional classes and parameters in the mixins, in case you\n   definitely want to make sure you're using the preferred font and don't mind\n   the performance hit.\n   We should be able to improve on this once CSS Font Loading L3 becomes more\n   widely available.\n*/\n/* ==========  COLORS  ========== */\n/**\n*\n* Material design color palettes.\n* @see http://www.google.com/design/spec/style/color.html\n*\n**/\n/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/* ==========  Color Palettes  ========== */\n/* colors.scss */\n/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/* ==========  IMAGES  ========== */\n/* ==========  Color & Themes  ========== */\n/* ==========  Typography  ========== */\n/* ==========  Components  ========== */\n/* ==========  Standard Buttons  ========== */\n/* ==========  Icon Toggles  ========== */\n/* ==========  Radio Buttons  ========== */\n/* ==========  Ripple effect  ========== */\n/* ==========  Layout  ========== */\n/* ==========  Content Tabs  ========== */\n/* ==========  Checkboxes  ========== */\n/* ==========  Switches  ========== */\n/* ==========  Spinner  ========== */\n/* ==========  Text fields  ========== */\n/* ==========  Card  ========== */\n/* ==========  Sliders ========== */\n/* ========== Progress ========== */\n/* ==========  List ========== */\n/* ==========  Item ========== */\n/* ==========  Dropdown menu ========== */\n/* ==========  Tooltips  ========== */\n/* ==========  Footer  ========== */\n/* TEXTFIELD */\n/* SWITCH */\n/* SPINNER */\n/* RADIO */\n/* MENU */\n/* LIST */\n/* LAYOUT */\n/* ICON TOGGLE */\n/* FOOTER */\n/*mega-footer*/\n/*mini-footer*/\n/* CHECKBOX */\n/* CARD */\n/* Card dimensions */\n/* Cover image */\n/* BUTTON */\n/**\n *\n * Dimensions\n *\n */\n/* ANIMATION */\n/* PROGRESS */\n/* BADGE */\n/* SHADOWS */\n/* GRID */\n/* DATA TABLE */\n/* DIALOG */\n/* SNACKBAR */\n/* TOOLTIP */\n/* CHIP */\n/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/* Typography */\n/* Shadows */\n/* Animations */\n/* Dialog */\n/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/* ==========  Color Palettes  ========== */\n/* colors.scss */\n/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/* ==========  Color Palettes  ========== */\n/* colors.scss */\n/* ==========  IMAGES  ========== */\n/* ==========  Color & Themes  ========== */\n.text-color--smoke {\n  color: #666; }\n.color--gray {\n  background-color: #444 !important; }\n.color--dark-gray {\n  background-color: #333; }\n.color--smooth-gray {\n  background-color: #999 !important; }\n.text-color--smooth-gray {\n  color: #999 !important; }\n.color--red {\n  background-color: #f44336 !important; }\n.color-text--red {\n  color: #f44336 !important; }\n.color--orange {\n  background-color: #ffc107 !important; }\n.color-text--orange {\n  color: #ffc107 !important; }\n.color--amber {\n  background-color: #ff9800 !important; }\n.color-text--amber {\n  color: #ff9800 !important; }\n.color--green {\n  background-color: #00d45a !important; }\n.color-text--green {\n  color: #00d45a !important; }\n.color--light-blue {\n  background-color: #03a9f4 !important; }\n.color-text--light-blue {\n  color: #03a9f4 !important; }\n.color--purple {\n  background-color: #7726d3 !important; }\n.color-text--purple {\n  color: #7726d3 !important; }\n.color--teal {\n  background-color: #00bcd4 !important; }\n.color-text--teal {\n  color: #00bcd4 !important; }\n/* ==========  Typography  ========== */\n/* ==========  Components  ========== */\n/* ==========  Standard Buttons  ========== */\n/* ==========  Icon Toggles  ========== */\n/* ==========  Radio Buttons  ========== */\n/* ==========  Ripple effect  ========== */\n/* ==========  Layout  ========== */\n/* ==========  Content Tabs  ========== */\n/* ==========  Checkboxes  ========== */\n/* ==========  Switches  ========== */\n/* ==========  Spinner  ========== */\n/* ==========  Text fields  ========== */\n/* ==========  Card  ========== */\n/* ==========  Sliders ========== */\n/* ========== Progress ========== */\n/* ==========  List ========== */\n/* ==========  Item ========== */\n/* ==========  Dropdown menu ========== */\n/* ==========  Tooltips  ========== */\n/* ==========  Footer  ========== */\n/* TEXTFIELD */\n/* SWITCH */\n/* SPINNER */\n/* RADIO */\n/* MENU */\n/* LIST */\n/* LAYOUT */\n/* ICON */\n/* ICON TOGGLE */\n/* FOOTER */\n/* mega-footer */\n/* mini-footer */\n/* CHECKBOX */\n/* CARD */\n/* Card dimensions */\n/* Cover image */\n/* BUTTON */\n/* ANIMATION */\n/* PROGRESS */\n/* BADGE */\n/* SHADOWS */\n/* GRID */\n/* DATA TABLE */\n/* TOOLTIP */\n/* WIDGETS & COMPONENTS */\n/* Trending */\n/* label */\n/* charts */\n/* employer form */\n/* row */\n/* scroll */\n.mdl-tooltip {\n  padding: 5px 8px;\n  border: none;\n  font-weight: 400; }\n"

/***/ }),

/***/ "./src/theme/directives/tooltip/tooltip.component.ts":
/*!***********************************************************!*\
  !*** ./src/theme/directives/tooltip/tooltip.component.ts ***!
  \***********************************************************/
/*! exports provided: TooltipComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TooltipComponent", function() { return TooltipComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TooltipComponent = /** @class */ (function () {
    function TooltipComponent() {
        this.position = 'bottom';
        this.large = false;
    }
    Object.defineProperty(TooltipComponent.prototype, "className", {
        get: function () {
            return "mdl-tooltip mdl-tooltip--" + this.position;
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])('innerHTML'), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], TooltipComponent.prototype, "content", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])('attr.for'), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], TooltipComponent.prototype, "targetId", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], TooltipComponent.prototype, "position", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])('class.mdl-tooltip--large'), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], TooltipComponent.prototype, "large", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])('class'),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], TooltipComponent.prototype, "className", null);
    TooltipComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'base-tooltip',
            styles: [__webpack_require__(/*! ./tooltip.component.scss */ "./src/theme/directives/tooltip/tooltip.component.scss")],
            template: "",
        })
    ], TooltipComponent);
    return TooltipComponent;
}());



/***/ }),

/***/ "./src/theme/directives/tooltip/tooltip.directive.ts":
/*!***********************************************************!*\
  !*** ./src/theme/directives/tooltip/tooltip.directive.ts ***!
  \***********************************************************/
/*! exports provided: TooltipDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TooltipDirective", function() { return TooltipDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _tooltip_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tooltip.component */ "./src/theme/directives/tooltip/tooltip.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TooltipDirective = /** @class */ (function () {
    function TooltipDirective(vcr, tr, cfr) {
        this.vcr = vcr;
        this.tr = tr;
        this.cfr = cfr;
    }
    Object.defineProperty(TooltipDirective.prototype, "baseTooltip", {
        set: function (value) {
            // NOTE: questionably
            var targetRef = this.vcr.createEmbeddedView(this.tr);
            this.tooltipRef = this.vcr.createComponent(this.cfr.resolveComponentFactory(_tooltip_component__WEBPACK_IMPORTED_MODULE_1__["TooltipComponent"]));
            this.tooltipRef.instance.targetId = targetRef.rootNodes[0].getAttribute('id');
            this.tooltipRef.instance.content = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TooltipDirective.prototype, "baseTooltipPosition", {
        set: function (value) {
            this.tooltipRef.instance.position = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TooltipDirective.prototype, "baseTooltipLarge", {
        set: function (value) {
            this.tooltipRef.instance.large = true;
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], TooltipDirective.prototype, "baseTooltip", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], TooltipDirective.prototype, "baseTooltipPosition", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], TooltipDirective.prototype, "baseTooltipLarge", null);
    TooltipDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[baseTooltip]',
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]])
    ], TooltipDirective);
    return TooltipDirective;
}());



/***/ }),

/***/ "./src/theme/directives/tooltip/tooltip.module.ts":
/*!********************************************************!*\
  !*** ./src/theme/directives/tooltip/tooltip.module.ts ***!
  \********************************************************/
/*! exports provided: TooltipModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TooltipModule", function() { return TooltipModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _tooltip_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tooltip.component */ "./src/theme/directives/tooltip/tooltip.component.ts");
/* harmony import */ var _tooltip_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tooltip.directive */ "./src/theme/directives/tooltip/tooltip.directive.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var TooltipModule = /** @class */ (function () {
    function TooltipModule() {
    }
    TooltipModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            ],
            declarations: [
                _tooltip_component__WEBPACK_IMPORTED_MODULE_2__["TooltipComponent"],
                _tooltip_directive__WEBPACK_IMPORTED_MODULE_3__["TooltipDirective"],
            ],
            exports: [
                _tooltip_directive__WEBPACK_IMPORTED_MODULE_3__["TooltipDirective"],
            ],
            entryComponents: [
                _tooltip_component__WEBPACK_IMPORTED_MODULE_2__["TooltipComponent"],
            ],
        })
    ], TooltipModule);
    return TooltipModule;
}());



/***/ }),

/***/ "./src/theme/index.ts":
/*!****************************!*\
  !*** ./src/theme/index.ts ***!
  \****************************/
/*! exports provided: ThemeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _theme_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./theme.module */ "./src/theme/theme.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ThemeModule", function() { return _theme_module__WEBPACK_IMPORTED_MODULE_0__["ThemeModule"]; });




/***/ }),

/***/ "./src/theme/theme.module.ts":
/*!***********************************!*\
  !*** ./src/theme/theme.module.ts ***!
  \***********************************/
/*! exports provided: ThemeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemeModule", function() { return ThemeModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _components_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/card */ "./src/theme/components/card/index.ts");
/* harmony import */ var _components_checkbox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/checkbox */ "./src/theme/components/checkbox/index.ts");
/* harmony import */ var _components_icon_toggle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/icon-toggle */ "./src/theme/components/icon-toggle/index.ts");
/* harmony import */ var _components_line_chart__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/line-chart */ "./src/theme/components/line-chart/index.ts");
/* harmony import */ var _components_page_top__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/page-top */ "./src/theme/components/page-top/index.ts");
/* harmony import */ var _components_pagination__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/pagination */ "./src/theme/components/pagination/index.ts");
/* harmony import */ var _components_pie_chart__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/pie-chart */ "./src/theme/components/pie-chart/index.ts");
/* harmony import */ var _components_progress__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/progress */ "./src/theme/components/progress/index.ts");
/* harmony import */ var _components_radio_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/radio-button */ "./src/theme/components/radio-button/index.ts");
/* harmony import */ var _components_right_sidebar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/right-sidebar */ "./src/theme/components/right-sidebar/index.ts");
/* harmony import */ var _components_sidebar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/sidebar */ "./src/theme/components/sidebar/index.ts");
/* harmony import */ var _components_switch__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/switch */ "./src/theme/components/switch/index.ts");
/* harmony import */ var _components_toggle__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/toggle */ "./src/theme/components/toggle/index.ts");
/* harmony import */ var _components_upgradable__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/upgradable */ "./src/theme/components/upgradable/index.ts");
/* harmony import */ var _directives_tooltip__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./directives/tooltip */ "./src/theme/directives/tooltip/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __read = (undefined && undefined.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (undefined && undefined.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};


















var BASE_COMPONENTS = [
    _components_page_top__WEBPACK_IMPORTED_MODULE_7__["PageTopComponent"],
    _components_radio_button__WEBPACK_IMPORTED_MODULE_11__["RadioButtonComponent"],
    _components_checkbox__WEBPACK_IMPORTED_MODULE_4__["CheckboxComponent"],
    _components_switch__WEBPACK_IMPORTED_MODULE_14__["SwitchComponent"],
    _components_icon_toggle__WEBPACK_IMPORTED_MODULE_5__["IconToggleComponent"],
    _components_progress__WEBPACK_IMPORTED_MODULE_10__["ProgressComponent"],
    _components_pagination__WEBPACK_IMPORTED_MODULE_8__["PaginationComponent"],
    _components_toggle__WEBPACK_IMPORTED_MODULE_15__["ToggleComponent"],
    _components_upgradable__WEBPACK_IMPORTED_MODULE_16__["UpgradableComponent"],
    _components_pie_chart__WEBPACK_IMPORTED_MODULE_9__["PieChartComponent"],
    _components_line_chart__WEBPACK_IMPORTED_MODULE_6__["LineChartComponent"],
];
var BASE_DIRECTIVES = [];
var BASE_PIPES = [];
var ThemeModule = /** @class */ (function () {
    function ThemeModule() {
    }
    ThemeModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: __spread(BASE_PIPES, BASE_DIRECTIVES, BASE_COMPONENTS),
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _components_sidebar__WEBPACK_IMPORTED_MODULE_13__["SidebarModule"],
                _components_right_sidebar__WEBPACK_IMPORTED_MODULE_12__["RightSidebarModule"],
                _components_card__WEBPACK_IMPORTED_MODULE_3__["CardModule"],
            ],
            exports: __spread(BASE_PIPES, BASE_DIRECTIVES, BASE_COMPONENTS, [
                _components_sidebar__WEBPACK_IMPORTED_MODULE_13__["SidebarModule"],
                _components_card__WEBPACK_IMPORTED_MODULE_3__["CardModule"],
                _directives_tooltip__WEBPACK_IMPORTED_MODULE_17__["TooltipModule"],
                _components_right_sidebar__WEBPACK_IMPORTED_MODULE_12__["RightSidebarModule"],
            ]),
            schemas: [
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"],
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["NO_ERRORS_SCHEMA"]
            ]
        })
    ], ThemeModule);
    return ThemeModule;
}());



/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\tiven.wang\Documents\GitLab\material-angular-dashboard\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map