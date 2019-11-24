webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./access-denied/access-denied.module": [
		"../../../../../src/app/access-denied/access-denied.module.ts",
		"access-denied.module"
	],
	"./activity/activity.module": [
		"../../../../../src/app/layout/activity/activity.module.ts",
		"common"
	],
	"./blank-page/blank-page.module": [
		"../../../../../src/app/layout/blank-page/blank-page.module.ts",
		"blank-page.module"
	],
	"./branch-selection/branch-selection.module": [
		"../../../../../src/app/branch-selection/branch-selection.module.ts",
		"common",
		"branch-selection.module"
	],
	"./campaign/campaign.module": [
		"../../../../../src/app/layout/campaign/campaign.module.ts",
		"common"
	],
	"./contact/contact.module": [
		"../../../../../src/app/layout/contact/contact.module.ts",
		"common"
	],
	"./customer/customer.module": [
		"../../../../../src/app/layout/customer/customer.module.ts",
		"common"
	],
	"./dashboard/dashboard.module": [
		"../../../../../src/app/layout/dashboard/dashboard.module.ts",
		"common",
		"dashboard.module"
	],
	"./delivery/delivery.module": [
		"../../../../../src/app/layout/delivery/delivery.module.ts",
		"common",
		"delivery.module"
	],
	"./forgot-password/forgot-password.module": [
		"../../../../../src/app/login/forgot-password/forgot-password.module.ts",
		"common",
		"forgot-password.module"
	],
	"./layout/layout.module": [
		"../../../../../src/app/layout/layout.module.ts",
		"common",
		"layout.module"
	],
	"./login/login.module": [
		"../../../../../src/app/login/login.module.ts",
		"common",
		"login.module"
	],
	"./not-found/not-found.module": [
		"../../../../../src/app/not-found/not-found.module.ts",
		"not-found.module"
	],
	"./opportunity/opportunity.module": [
		"../../../../../src/app/layout/opportunity/opportunity.module.ts",
		"common"
	],
	"./permission-user/permission-user.module": [
		"../../../../../src/app/layout/permission/permission-user/permission-user.module.ts",
		"common",
		"permission-user.module"
	],
	"./permission/permission.module": [
		"../../../../../src/app/layout/permission/permission.module.ts",
		"common",
		"permission.module"
	],
	"./prospect/prospect.module": [
		"../../../../../src/app/layout/prospect/prospect.module.ts",
		"common"
	],
	"./revenue-detail/revenue-detail.module": [
		"../../../../../src/app/layout/revenue-detail/revenue-detail.module.ts",
		"common",
		"revenue-detail.module"
	],
	"./server-error/server-error.module": [
		"../../../../../src/app/server-error/server-error.module.ts",
		"server-error.module"
	],
	"./signup/signup.module": [
		"../../../../../src/app/signup/signup.module.ts",
		"common",
		"signup.module"
	],
	"./user/user.module": [
		"../../../../../src/app/layout/user/user.module.ts",
		"common",
		"user.module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services__ = __webpack_require__("../../../../../src/app/shared/services/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', loadChildren: './layout/layout.module#LayoutModule', canActivate: [__WEBPACK_IMPORTED_MODULE_2__shared_services__["e" /* AuthGuard */]] },
    { path: 'login', loadChildren: './login/login.module#LoginModule' },
    //  { path: 'forgot-password', loadChildren: './forgot-password/forgot-password.module#ForgotPasswordModule' },
    { path: 'branch', loadChildren: './branch-selection/branch-selection.module#BranchSelectionModule' },
    { path: 'signup', loadChildren: './signup/signup.module#SignupModule' },
    { path: 'error', loadChildren: './server-error/server-error.module#ServerErrorModule' },
    { path: 'access-denied', loadChildren: './access-denied/access-denied.module#AccessDeniedModule' },
    { path: 'not-found', loadChildren: './not-found/not-found.module#NotFoundModule' },
    { path: '**', redirectTo: 'not-found' },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n<app-alert></app-alert>"

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__("../../../../@ngx-translate/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment__ = __webpack_require__("../../../../moment/moment.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_moment__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = /** @class */ (function () {
    function AppComponent(translate) {
        // this language will be used as a fallback when a translation isn't found in the current language
        translate.setDefaultLang('vi');
        // the lang to use, if the lang isn't available, it will use the current loader to get them
        translate.use('vi');
        __WEBPACK_IMPORTED_MODULE_2_moment__["locale"]('vi');
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["c" /* TranslateService */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export createTranslateLoader */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__ = __webpack_require__("../../../../@ngx-translate/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ngx_translate_http_loader__ = __webpack_require__("../../../../@ngx-translate/http-loader/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__shared_services__ = __webpack_require__("../../../../../src/app/shared/services/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__shared_components_alert_alert_component__ = __webpack_require__("../../../../../src/app/shared/components/alert/alert.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_ngx_spinner__ = __webpack_require__("../../../../ngx-spinner/ngx-spinner.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_ngx_spinner___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_ngx_spinner__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_angular_star_rating__ = __webpack_require__("../../../../angular-star-rating/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_angular_star_rating___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_angular_star_rating__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















// AoT requires an exported function for factories
function createTranslateLoader(http) {
    // for development
    // return new TranslateHttpLoader(http, '/start-angular/SB-Admin-BS4-Angular-5/master/dist/assets/i18n/', '.json');
    return new __WEBPACK_IMPORTED_MODULE_6__ngx_translate_http_loader__["a" /* TranslateHttpLoader */](http, './assets/i18n/', '.json');
}
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_14_angular_star_rating__["StarRatingModule"].forRoot(),
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_11__shared_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["BrowserModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__["b" /* TranslateModule */].forRoot({
                    loader: {
                        provide: __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__["a" /* TranslateLoader */],
                        useFactory: createTranslateLoader,
                        deps: [__WEBPACK_IMPORTED_MODULE_4__angular_common_http__["a" /* HttpClient */]]
                    }
                }),
                __WEBPACK_IMPORTED_MODULE_7__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_13_ngx_spinner__["NgxSpinnerModule"]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */], __WEBPACK_IMPORTED_MODULE_12__shared_components_alert_alert_component__["a" /* AlertComponent */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */]],
            providers: [
                __WEBPACK_IMPORTED_MODULE_9__shared_services__["b" /* AlertService */],
                __WEBPACK_IMPORTED_MODULE_9__shared_services__["n" /* SessionService */],
                __WEBPACK_IMPORTED_MODULE_9__shared_services__["g" /* ConfirmationService */],
                __WEBPACK_IMPORTED_MODULE_9__shared_services__["k" /* InstantSearchService */],
                __WEBPACK_IMPORTED_MODULE_9__shared_services__["p" /* UserNotificationService */],
                // DialogRef,
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_common__["LocationStrategy"], useClass: __WEBPACK_IMPORTED_MODULE_1__angular_common__["HashLocationStrategy"] }
            ]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/shared/components/alert/alert.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"message\" class=\"hideMe\" [ngClass]=\"{ 'alert': message, 'alert-success': message.type === 'success', 'alert-danger': message.type === 'error' }\">\n    <a class=\"close\" (click) = \"close()\" aria-label=\"close\"><i class=\"fa fa-times\" aria-hidden=\"true\"></i></a>\n    {{message.text}}\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/shared/components/alert/alert.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".hideMe {\n  position: fixed;\n  right: 30px;\n  bottom: 20px;\n  z-index: 1051 !important; }\n  .hideMe .close {\n    margin-left: 20px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/components/alert/alert.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlertComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_alert_service__ = __webpack_require__("../../../../../src/app/shared/services/alert.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AlertComponent = /** @class */ (function () {
    function AlertComponent(alertService) {
        this.alertService = alertService;
    }
    AlertComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.alertService.getMessage().subscribe(function (message) {
            _this.message = message;
            // setTimeout(function () {
            //     this.message = '';
            // }.bind(this), 10000);
            setTimeout(function () {
                _this.message = '';
            }, 10000);
        });
    };
    AlertComponent.prototype.close = function () {
        this.message = '';
    };
    AlertComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            moduleId: module.i,
            selector: 'app-alert',
            template: __webpack_require__("../../../../../src/app/shared/components/alert/alert.component.html"),
            styles: [__webpack_require__("../../../../../src/app/shared/components/alert/alert.component.scss")],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_alert_service__["a" /* AlertService */]])
    ], AlertComponent);
    return AlertComponent;
}());



/***/ }),

/***/ "../../../../../src/app/shared/components/campaign-table/campaign-table.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"d-flex mb-3\">\n  <h5 class=\"mr-auto d-flex align-items-end\">Các chiến dịch</h5>\n  <div class=\"\">\n      <label for=\"prospectSource\" class=\"form-label\">Loại chiến dịch</label>\n      <span class=\"custom-dropdown mx-sm-2\">\n          <select class=\"form-control\" [(ngModel)]=\"filterModel.type\">\n              <option [ngValue]=\"null\">--Lựa chọn--</option>\n              <option *ngFor=\"let item of campaignTypeList | async\" [value]=\"item.id\">{{item.text}}</option>\n          </select>\n      </span>\n  </div>\n  <button type=\"submit\" class=\"btn btn-primary\" (click)=\"filter()\">\n      <i class=\"fa fa-filter\" aria-hidden=\"true\"></i>&nbsp; Lọc\n  </button>\n  <button  class=\"btn btn-secondary ml-2\" (click)=\"clearFilter()\">\n      <i class=\"fa fa-times\" ></i>&nbsp; Xóa lọc\n  </button>\n  <button class=\"btn btn-outline-primary ml-2\" (click)=\"gotoCreateCampaignPage()\">\n    <i class=\"fa fa-plus\" aria-hidden=\"true\"></i>&nbsp; Thêm chiến dịch\n  </button>\n</div>\n\n<div class=\"table-responsive\">\n  <ngx-loading [show]=\"loading\"></ngx-loading>\n  <table datatable [dtOptions]=\"dtOptions\" [dtTrigger]=\"dtTrigger\" class=\"table stripe row-border hover\">\n    <thead>\n      <tr>\n        <th class=\"text-nowrap\">Mã chiến dịch</th>\n        <th class=\"text-nowrap\">Tên chiến dịch</th>\n        <th class=\"text-nowrap\">Trạng thái</th>\n        <th class=\"text-nowrap\">Loại chiến dịch</th>\n        <th class=\"text-nowrap\">Đối tượng tiếp thị</th>\n        <th class=\"text-nowrap\">KPI</th>\n        <th class=\"text-nowrap\">Ngày bắt đầu</th>\n        <th class=\"text-nowrap\">Ngày xong dự kiến</th>\n        <th class=\"text-nowrap\">Phân công cho</th>\n        <th class=\"table-action\">Thao tác</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let item of pagedResult.items\">\n          <td [title]=\"item.campaignNo\">\n              <a [routerLink]=\"['/campaign/detail', item.id]\" [title]=\"item.campaignNo\">{{item.campaignNo || 'Không có'}}</a>\n          </td>\n        <td>\n          <a [title]=\"item.name\"\n            [routerLink]=\"['/campaign/detail', item.id]\">\n            {{ item.name }}\n          </a>\n        </td>\n        <td class=\"td-mark-status\">\n            <div [class.mark-status]=\"item.status\" [class.status-plan]='item.status==\"IsPlanning_Campaign\"' [class.status-inprogess]='item.status==\"Proceed_Campaign\"'\n                [class.status-complete]='item.status==\"Finish_Campaign\"' [class.status-cancel]='item.status==\"Cancel\"'\n                [class.status-pending]='item.status==\"DoNotProceed\"' [class.status-null]='!item.status'>\n                {{ (item.status | translate) || 'Không có' }}\n            </div>\n        </td>\n        <td [title]=\"(item.category || '') | translate\" >{{( item.category | translate) || 'Không có'}}</td>\n        <td [title]=\"item.marketingObject || ''\">{{item.marketingObject || 'Không có'}}</td>\n        <td >{{ (item.numberOfParticipants && item.numberOfParticipants + '%') || 'Không có' }}</td>\n        <td class=\"select-filter\" [title]=\"(item.campaignDateStart | date: 'dd/MM/yyyy') || 'Không có'\">{{ (item.campaignDateStart | date: 'dd/MM/yyyy') || 'Không có' }}</td>\n        <td class=\"select-filter\" [title]=\"(item.campaignDateStop | date: 'dd/MM/yyyy') || 'Không có'\">{{ (item.campaignDateStop | date: 'dd/MM/yyyy') || 'Không có' }}</td>\n        <td class=\"select-filter\" [title]=\"item.assignTo\">{{ item.assignTo || 'Không có' }}</td>\n        <td>\n          <a\n            [routerLink]=\"['/campaign/detail', item.id]\">\n            <i class=\"fa fa-eye text-warning\" aria-hidden=\"true\"></i>\n          </a>\n          <a [routerLink]=\"['/campaign/edit', item.id]\"\n            class=\" text-success ml-3\">\n            <i class=\"fa fa-pencil  cursor-pointer\" aria-hidden=\"true\"> </i>\n          </a>\n          <a class=\" text-dark ml-3\">\n            <i (click)=\"delete(item.id, item.activityType)\" class=\"fa fa-trash-o\" aria-hidden=\"true\"></i>\n          </a>\n        </td>\n      </tr>\n    </tbody>\n\n  </table>\n  <div class=\"text-center p-1\" *ngIf=\"pagedResult && pagedResult.items && pagedResult.items.length == 0\">Không có dữ liệu</div>\n</div>\n\n<app-pagination [(pagedResult)]=\"pagedResult\" (pagedResultChange)=\"pagedResultChange($event)\"></app-pagination>\n<ngx-spinner bdColor=\"rgba(51, 51, 51, 0.7)\" size=\"medium\" color=\"#fff\" type=\"ball-clip-rotate-multiple\"></ngx-spinner>"

/***/ }),

/***/ "../../../../../src/app/shared/components/campaign-table/campaign-table.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@media only screen and (max-width: 1600px) {\n  table.dataTable th,\n  table.dataTable td {\n    max-width: 120px; } }\n\n@media only screen and (max-width: 1366px) {\n  table.dataTable th,\n  table.dataTable td {\n    max-width: 110px; } }\n\n@media only screen and (max-width: 1200px) {\n  table.dataTable th,\n  table.dataTable td {\n    max-width: 50px; } }\n\n@media only screen and (max-width: 1024px) {\n  .btn-toolbar {\n    zoom: 0.85; }\n  th,\n  td {\n    max-width: 30px; } }\n\n.custom-dropdown {\n  min-width: 10rem; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/components/campaign-table/campaign-table.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CampaignTableComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models__ = __webpack_require__("../../../../../src/app/shared/models/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__configs__ = __webpack_require__("../../../../../src/app/shared/configs/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services__ = __webpack_require__("../../../../../src/app/shared/services/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ngx_spinner__ = __webpack_require__("../../../../ngx-spinner/ngx-spinner.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ngx_spinner___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_ngx_spinner__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__models_campaign_campaign_filter_model__ = __webpack_require__("../../../../../src/app/shared/models/campaign/campaign-filter.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// tslint:disable-next-line:import-blacklist







var CampaignTableComponent = /** @class */ (function () {
    function CampaignTableComponent(activityService, alertService, dataService, confirmationService, sessionService, campaignService, router, spinner) {
        this.activityService = activityService;
        this.alertService = alertService;
        this.dataService = dataService;
        this.confirmationService = confirmationService;
        this.sessionService = sessionService;
        this.campaignService = campaignService;
        this.router = router;
        this.spinner = spinner;
        this.dtOptions = __WEBPACK_IMPORTED_MODULE_3__configs__["a" /* DATATABLE_CONFIG */];
        this.dtTrigger = new __WEBPACK_IMPORTED_MODULE_1_rxjs__["Subject"]();
        this.pagedResult = new __WEBPACK_IMPORTED_MODULE_2__models__["g" /* PagedResult */]();
        this.filterModel = new __WEBPACK_IMPORTED_MODULE_7__models_campaign_campaign_filter_model__["a" /* CampaignFilter */]();
        this.loading = true;
    }
    CampaignTableComponent.prototype.ngOnInit = function () {
        this.dtOptions = __WEBPACK_IMPORTED_MODULE_3__configs__["a" /* DATATABLE_CONFIG */];
        this.campaignTypeList = this.dataService.getCampaignTypes();
        this.filter();
    };
    CampaignTableComponent.prototype.filter = function () {
        var _this = this;
        this.loading = true;
        this.campaignService.getListCampaignByModule(this.moduleName, Number(this.moduleItemId), 0, 10, this.filterModel)
            .subscribe(function (result) {
            _this.rerender(result);
            _this.loading = false;
        }, function (err) { return _this.loading = false; });
    };
    CampaignTableComponent.prototype.clearFilter = function () {
        this.filterModel = new __WEBPACK_IMPORTED_MODULE_7__models_campaign_campaign_filter_model__["a" /* CampaignFilter */]();
        this.filter();
    };
    CampaignTableComponent.prototype.pagedResultChange = function (pagedResult) {
        this.refresh();
    };
    CampaignTableComponent.prototype.delete = function (ids, activityType) {
        var _this = this;
        var that = this;
        var deleteIds = [];
        if (!(ids instanceof Array)) {
            deleteIds = [{ id: ids, activityType: activityType }];
        }
        else {
            deleteIds = ids;
        }
        this.confirmationService.confirm('Bạn có chắc chắn muốn xóa hoạt động này?', function () {
            that.activityService.delete(deleteIds).subscribe(function (_) {
                if (_this.pagedResult.items.length === deleteIds.length && +_this.pagedResult.currentPage > 0) {
                    _this.pagedResult.currentPage = +_this.pagedResult.currentPage - 1;
                }
                that.alertService.success('Đã xóa hoạt động!');
                that.refresh();
            });
        });
    };
    CampaignTableComponent.prototype.refresh = function (displayAlert) {
        var _this = this;
        if (displayAlert === void 0) { displayAlert = false; }
        this.loading = true;
        this.activityService
            .getActivitiesByModuleItemId(this.moduleName, this.moduleItemId, this.pagedResult.currentPage, this.pagedResult.pageSize)
            .subscribe(function (result) {
            _this.rerender(result);
            if (displayAlert) {
                _this.alertService.success('Dữ liệu đã được cập nhật mới nhất');
            }
            _this.loading = false;
        }, function (err) { return _this.loading = false; });
    };
    CampaignTableComponent.prototype.rerender = function (pagedResult) {
        this.pagedResult = pagedResult;
        this.dtTrigger.next();
    };
    CampaignTableComponent.prototype.gotoCreateCampaignPage = function () {
        this.sessionService.previousUrl = this.moduleName + "/detail/" + this.moduleItemId + "/campaign";
        this.router.navigate(['/campaign/create',
            {
                moduleName: this.moduleName,
                moduleItemId: this.moduleItemId,
                moduleItemName: this.moduleItemName,
                moduleItemFullName: this.fullName,
                moduleItemEmail: this.email,
                moduleItemPhone: this.phone
            }]);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], CampaignTableComponent.prototype, "moduleName", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], CampaignTableComponent.prototype, "moduleItemId", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], CampaignTableComponent.prototype, "moduleItemName", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], CampaignTableComponent.prototype, "readOnly", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], CampaignTableComponent.prototype, "fullName", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], CampaignTableComponent.prototype, "email", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], CampaignTableComponent.prototype, "phone", void 0);
    CampaignTableComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-campaign-table',
            template: __webpack_require__("../../../../../src/app/shared/components/campaign-table/campaign-table.component.html"),
            styles: [__webpack_require__("../../../../../src/app/shared/components/campaign-table/campaign-table.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__services__["a" /* ActivityService */],
            __WEBPACK_IMPORTED_MODULE_4__services__["b" /* AlertService */],
            __WEBPACK_IMPORTED_MODULE_4__services__["j" /* DataService */],
            __WEBPACK_IMPORTED_MODULE_4__services__["g" /* ConfirmationService */],
            __WEBPACK_IMPORTED_MODULE_4__services__["n" /* SessionService */],
            __WEBPACK_IMPORTED_MODULE_4__services__["f" /* CampaignService */],
            __WEBPACK_IMPORTED_MODULE_5__angular_router__["Router"],
            __WEBPACK_IMPORTED_MODULE_6_ngx_spinner__["NgxSpinnerService"]])
    ], CampaignTableComponent);
    return CampaignTableComponent;
}());



/***/ }),

/***/ "../../../../../src/app/shared/components/confirmation-popup-call-away/confirmation-popup-call-away.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"message\" class=\"confirmation-popup\">\n\n    <div class=\"modal-header\">\n        <h4 class=\"modal-title\"></h4>\n        <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"activeModal.dismiss('Cross click')\">\n            <span aria-hidden=\"true\">&times;</span>\n        </button>\n    </div>\n\n    <div class=\"d-flex justify-content-start warning-text-2\">\n        <div class=\"\">\n            <p class=\"text-left\">{{message.text}}</p>\n        </div>\n    </div>\n    <div class=\"row no-gutters warning-text\">\n        <div class=\"col-md-1 col-sx-1\" style=\"text-align: center;\">\n            <div class=\"align-self-center mt-2 p-2\">\n                <img src=\"assets/images/warn.png\" width=\"40\" height=\"40\" alt=\"\">\n            </div>\n        </div>\n        <div class=\"col-md-11 col-sx-11\">\n            <div class=\"align-self-center ml-4 mt-2 p-2\">\n                <p class=\"text-left\">\n                    <em>Để cuộc gọi được thực hiện bạn vui lòng nhấc máy bàn, sau đó bấm nút <strong>[Trả lời]</strong> để cuộc gọi được chuyển\n                        tới số thuê bao.\n                    </em>\n                </p>\n            </div>\n        </div>\n    </div>\n\n\n    <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-primary\" (click)=\"activeModal.close('Close click'); message.siFn();  \">Đồng ý</button>\n        <button type=\"button\" class=\"btn btn-secondary\" (click)=\"activeModal.close('Close click')\">Hủy</button>\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/shared/components/confirmation-popup-call-away/confirmation-popup-call-away.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".warning-text {\n  padding: 0 20px; }\n\n.warning-text-2 {\n  padding: 0 40px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/components/confirmation-popup-call-away/confirmation-popup-call-away.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfirmationPopupCallAwayComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ConfirmationPopupCallAwayComponent = /** @class */ (function () {
    function ConfirmationPopupCallAwayComponent(activeModal) {
        this.activeModal = activeModal;
    }
    ConfirmationPopupCallAwayComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], ConfirmationPopupCallAwayComponent.prototype, "message", void 0);
    ConfirmationPopupCallAwayComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-confirmation-popup-call-away',
            template: __webpack_require__("../../../../../src/app/shared/components/confirmation-popup-call-away/confirmation-popup-call-away.component.html"),
            styles: [__webpack_require__("../../../../../src/app/shared/components/confirmation-popup-call-away/confirmation-popup-call-away.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["a" /* NgbActiveModal */]])
    ], ConfirmationPopupCallAwayComponent);
    return ConfirmationPopupCallAwayComponent;
}());



/***/ }),

/***/ "../../../../../src/app/shared/components/confirmation-popup/confirmation-popup.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"message\" class=\"confirmation-popup\">\n\n    <div class=\"modal-header\">\n        <h4 class=\"modal-title\"></h4>\n        <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"activeModal.dismiss('Cross click')\">\n            <span aria-hidden=\"true\">&times;</span>\n        </button>\n    </div>\n\n    <div class=\"modal-body\">\n        <p class=\"text-left\">{{message.text}}</p>\n    </div>\n\n    <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-primary\" (click)=\"activeModal.close('Close click'); message.siFn();  \">{{textOkDefault}}</button>\n        <button type=\"button\" class=\"btn btn-secondary\" (click)=\"activeModal.close('Close click')\">Hủy</button>\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/shared/components/confirmation-popup/confirmation-popup.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/components/confirmation-popup/confirmation-popup.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfirmationPopupComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ConfirmationPopupComponent = /** @class */ (function () {
    function ConfirmationPopupComponent(activeModal) {
        this.activeModal = activeModal;
        this.textOkDefault = 'Đồng ý';
    }
    ConfirmationPopupComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], ConfirmationPopupComponent.prototype, "message", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], ConfirmationPopupComponent.prototype, "textOkDefault", void 0);
    ConfirmationPopupComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-confirmation-popup',
            template: __webpack_require__("../../../../../src/app/shared/components/confirmation-popup/confirmation-popup.component.html"),
            styles: [__webpack_require__("../../../../../src/app/shared/components/confirmation-popup/confirmation-popup.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["a" /* NgbActiveModal */]])
    ], ConfirmationPopupComponent);
    return ConfirmationPopupComponent;
}());



/***/ }),

/***/ "../../../../../src/app/shared/components/confirmation-routing-popup/confirmation-routing-popup.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"message\" class=\"confirmation-popup\">\n\n  <div class=\"modal-header\">\n      <h4 class=\"modal-title\"></h4>\n      <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"activeModal.dismiss('Cross click')\">\n          <span aria-hidden=\"true\">&times;</span>\n      </button>\n  </div>\n\n  <div class=\"modal-body\">\n      <p class=\"text-left\">{{message.text}}</p>\n  </div>\n\n  <div class=\"modal-footer\">\n      <button type=\"button\" class=\"btn btn-primary\" (click)=\"activeModal.close('Close click'); message.siFn();\">Đồng ý</button>\n      <button type=\"button\" class=\"btn btn-secondary\" (click)=\"activeModal.close('Close click');  message.isCancel(); \">Hủy</button>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/shared/components/confirmation-routing-popup/confirmation-routing-popup.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/components/confirmation-routing-popup/confirmation-routing-popup.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfirmationRoutingPopupComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ConfirmationRoutingPopupComponent = /** @class */ (function () {
    // @Input() textOkDefault = 'Đồng ý';
    // textOkDefault = 'Đồng ý';
    function ConfirmationRoutingPopupComponent(activeModal) {
        this.activeModal = activeModal;
    }
    ConfirmationRoutingPopupComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], ConfirmationRoutingPopupComponent.prototype, "message", void 0);
    ConfirmationRoutingPopupComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-confirmation-routing-popup',
            template: __webpack_require__("../../../../../src/app/shared/components/confirmation-routing-popup/confirmation-routing-popup.component.html"),
            styles: [__webpack_require__("../../../../../src/app/shared/components/confirmation-routing-popup/confirmation-routing-popup.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["a" /* NgbActiveModal */]])
    ], ConfirmationRoutingPopupComponent);
    return ConfirmationRoutingPopupComponent;
}());



/***/ }),

/***/ "../../../../../src/app/shared/components/convert-prospect2/convert-prospect2.component.html":
/***/ (function(module, exports) {

module.exports = "<div [class.hide-popup]=\"hidePopup\" class=\"light\">\n  <div class=\"modal-header\">\n      <h4 class=\"modal-title\">Chuyển đổi tiềm năng: {{prospect.fullName}}</h4>\n      <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"activeModal.dismiss('Cross click')\">\n          <span aria-hidden=\"true\">&times;</span>\n      </button>\n  </div>\n  \n  <form [formGroup]=\"convertProspectForm\" novalidate>\n      <div class=\"modal-body\">\n  \n          <app-validation-summary [validationMessages]=\"validationMessages\"></app-validation-summary>\n          <div class=\"card-collapse\">\n              <div class=\"header d-flex flex-row align-items-center\">\n                  <label class=\"custom-control custom-checkbox d-block mb-0 mr-1\">\n                      <input type=\"checkbox\" class=\"custom-control-input\" formControlName=\"isNewCustomer\">\n                      <span class=\"custom-control-indicator\"></span>\n                  </label>\n  \n                  <span class=\"mr-auto cursor-pointer\" (click)=\"isCollapsedMain = !isCollapsedMain\" [attr.aria-expanded]=\"!isCollapsedMain\"\n                      aria-controls=\"info-main\">Tạo mới khách hàng</span>\n  \n                  <i class=\"fa fa-chevron-down \"></i>\n              </div>\n              <div class=\"body\" id=\"info-main\" [ngbCollapse]=\"isCollapsedMain\">\n                  <table class=\"w-100 table table-bordered\">\n                      <tbody>\n                          <tr>\n                              <td class=\"w-25 border-right-2 bg-light text-right label required\">Tên khách hàng</td>\n                              <td class=\"w-75\">\n                                  <input class=\"w-75 form-control\" type=\"text\" formControlName=\"customerName\" [class.is-invalid]=\"formErrors.customerName\">\n                                  <div class=\"invalid-feedback\" *ngIf=\"formErrors.customerName\">\n                                      {{formErrors.customerName}}\n                                  </div>\n                                  <!-- <div class=\"invalid-feedback\" *ngIf=\"checkName === 1\">\n                                      Tên công ty trùng với tên một công ty khác!\n                                  </div> -->\n                              </td>\n                          </tr>\n                          <tr>\n                              <td class=\"w-25 bg-light text-right label required\">Điện thoại chính</td>\n                              <td class=\"w-25\">\n                                    <input class=\"w-75 form-control\" type=\"text\" formControlName=\"customerPhone\" [class.is-invalid]=\"formErrors.customerPhone\">\n                                    <div class=\"invalid-feedback\" *ngIf=\"formErrors.customerPhone\">\n                                        {{formErrors.customerPhone}}\n                                    </div>\n                              </td>\n                          </tr>\n                      </tbody>\n                  </table>\n  \n              </div>\n          </div>\n  \n          <div class=\"card-collapse\">\n              <div class=\"header d-flex flex-row align-items-center\">\n                  <label class=\"custom-control custom-checkbox d-block mb-0 mr-1\">\n                      <input type=\"checkbox\" class=\"custom-control-input\" formControlName=\"isNewContact\">\n                      <span class=\"custom-control-indicator\"></span>\n                  </label>\n  \n                  <span class=\"mr-auto  cursor-pointer\" (click)=\"isCollapsed2 = !isCollapsed2\" [attr.aria-expanded]=\"!isCollapsed2\" aria-controls=\"info-main\">Tạo mới liên hệ</span>\n  \n                  <i class=\"fa fa-chevron-down \"></i>\n              </div>\n              <div class=\"body\" id=\"info-main\" [ngbCollapse]=\"isCollapsed2\">\n                  <table class=\"w-100 table table-bordered\">\n                      <tbody>\n                          <tr>\n                              <td class=\"w-25 bg-light text-right label\">Danh xưng</td>\n                              <td class=\"w-75\">\n                                  <span class=\"custom-dropdown w-75 \">\n                                      <select class=\"form-control\" formControlName=\"contactSalutation\">\n                                          <option [ngValue]=\"null\">--Lựa chọn--</option>\n                                          <option *ngFor=\"let item of salutationList | async\" [value]=\"item.id\">{{item.text}}</option>\n                                      </select>\n                                  </span>\n                              </td>\n                          </tr>\n                          <tr>\n                              <td class=\"w-25 bg-light text-right label required\">Họ và tên</td>\n                              <td class=\"w-25\">\n                                  <input class=\"w-75 form-control\" type=\"text\" [class.is-invalid]=\"formErrors.contactFullName\" formControlName=\"contactFullName\">\n                                  <div class=\"invalid-feedback\" *ngIf=\"formErrors.contactFullName\">\n                                      {{formErrors.contactFullName}}\n                                  </div>\n                              </td>\n                          </tr>\n                          <tr>\n                              <td class=\"w-25 bg-light text-right label\">Email</td>\n                              <td class=\"w-25\">\n                                  <input class=\"w-75 form-control\" type=\"text\" [class.is-invalid]=\"formErrors.contactEmail\" formControlName=\"contactEmail\">\n                                  <div class=\"invalid-feedback\" *ngIf=\"formErrors.contactEmail\">\n                                      {{formErrors.contactEmail}}\n                                  </div>\n                              </td>\n                          </tr>\n                      </tbody>\n                  </table>\n  \n              </div>\n          </div>\n  \n          <div class=\"card-collapse\">\n              <div class=\"body\">\n                  <table class=\"w-100 table table-bordered\">\n                      <tbody>\n                          <tr>\n                              <td class=\"w-25 bg-light text-right label required\">Phân công cho</td>\n                              <td class=\"w-75\">\n                                  <span class=\"custom-dropdown w-75 \">\n                                      <select class=\"form-control\" formControlName=\"assignTo\" [class.is-invalid]=\"formErrors.assignTo\">\n                                              <option class=\"font-weight-bold text-dark mt-2\" value=\"\" disabled>Nhân viên</option>\n                                              <option *ngFor=\"let item of employeeList | async\" [ngValue]=\"'employee_' + item.id\">{{item.text}}</option>\n                                              <option class=\"font-weight-bold text-dark mt-2\" value=\"\" disabled>Nhóm</option>\n                                              <option *ngFor=\"let item of employeeGroupList | async\" [ngValue]=\"'group_' + item.id\">{{item.text}}</option>\n                                      </select>\n                                  </span>\n                                  <div class=\"invalid-feedback\" *ngIf=\"formErrors.assignTo\">\n                                    {{formErrors.assignTo}}\n                                </div>\n                              </td>\n                          </tr>\n  \n                      </tbody>\n                  </table>\n  \n              </div>\n          </div>\n  \n      </div>\n  </form>\n  \n  \n  \n  <div class=\"modal-footer\">\n      <button type=\"button\" class=\"btn btn-primary\" (click)=\"submitForm()\">Lưu</button>\n      <button type=\"button\" class=\"btn btn-secondary\" (click)=\"activeModal.close('Close click')\">Hủy</button>\n  </div>\n  </div>"

/***/ }),

/***/ "../../../../../src/app/shared/components/convert-prospect2/convert-prospect2.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/components/convert-prospect2/convert-prospect2.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConvertProspect2Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_prospect_prospect_model__ = __webpack_require__("../../../../../src/app/shared/models/prospect/prospect.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_session_service__ = __webpack_require__("../../../../../src/app/shared/services/session.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_data_service__ = __webpack_require__("../../../../../src/app/shared/services/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_alert_service__ = __webpack_require__("../../../../../src/app/shared/services/alert.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_prospect_service__ = __webpack_require__("../../../../../src/app/shared/services/prospect.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_confirmation_service__ = __webpack_require__("../../../../../src/app/shared/services/confirmation.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__helpers_custom_validator_helper__ = __webpack_require__("../../../../../src/app/shared/helpers/custom-validator.helper.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__helpers_validation_helper__ = __webpack_require__("../../../../../src/app/shared/helpers/validation.helper.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var ConvertProspect2Component = /** @class */ (function () {
    function ConvertProspect2Component(fb, router, activeModal, sessionService, dataService, alertService, prospectService, confirmationService) {
        this.fb = fb;
        this.router = router;
        this.activeModal = activeModal;
        this.sessionService = sessionService;
        this.dataService = dataService;
        this.alertService = alertService;
        this.prospectService = prospectService;
        this.confirmationService = confirmationService;
        this.hidePopup = false;
        this.validationMessages = [];
        this.checkName = 0;
        this.formErrors = {
            customerName: '',
            contactFullName: '',
            contactEmail: '',
            assignTo: '',
            customerPhone: ''
        };
    }
    ConvertProspect2Component.prototype.ngOnInit = function () {
        this.createForm();
        this.salutationList = this.dataService.getSalutations();
        this.businessList = this.dataService.getBusiness();
        this.employeeList = this.dataService.getEmployees();
        this.employeeGroupList = this.dataService.getEmployeeGroups();
    };
    ConvertProspect2Component.prototype.createForm = function () {
        var _this = this;
        this.convertProspectForm = this.fb.group({
            id: this.prospect.id,
            isNewCustomer: true,
            customerName: [this.prospect.companyName, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required],
            customerPhone: [this.prospect.phoneNumberCustomer || null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required],
            // customerBusiness: this.prospect.fieldOfAction,
            isNewContact: true,
            contactSalutation: this.prospect.name,
            contactFullName: [this.prospect.fullName, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required],
            contactEmail: [this.prospect.email, __WEBPACK_IMPORTED_MODULE_10__helpers_custom_validator_helper__["a" /* default */].emailOrEmpty],
            assignTo: ['employee_' + this.sessionService.currentUser.employeeId, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required],
        });
        this.setFormValidators();
        this.convertProspectForm.valueChanges
            .subscribe(function (data) {
            _this.onFormValueChanged(data);
            _this.checkName = 0;
        });
    };
    ConvertProspect2Component.prototype.setFormValidators = function () {
        var customerNameControl = this.convertProspectForm.get('customerName');
        // const customerBusinessControl = this.convertProspectForm.get('customerBusiness');
        var contactSalutationControl = this.convertProspectForm.get('contactSalutation');
        var contactFullNameControl = this.convertProspectForm.get('contactFullName');
        var contactEmailControl = this.convertProspectForm.get('contactEmail');
        this.convertProspectForm.get('isNewCustomer').valueChanges.subscribe(function (validate) {
            if (validate) {
                customerNameControl.enable();
                // customerBusinessControl.enable();
                customerNameControl.setValidators([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required]);
            }
            else {
                customerNameControl.disable();
                // customerBusinessControl.disable();
                customerNameControl.clearValidators();
            }
            customerNameControl.updateValueAndValidity();
        });
        this.convertProspectForm.get('isNewContact').valueChanges.subscribe(function (validate) {
            if (validate) {
                contactSalutationControl.enable();
                contactFullNameControl.enable();
                contactEmailControl.enable();
                contactFullNameControl.setValidators([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required]);
                contactEmailControl.setValidators([__WEBPACK_IMPORTED_MODULE_10__helpers_custom_validator_helper__["a" /* default */].emailOrEmpty]);
            }
            else {
                contactSalutationControl.disable();
                contactFullNameControl.disable();
                contactEmailControl.disable();
                contactFullNameControl.clearValidators();
                contactEmailControl.clearValidators();
            }
            contactFullNameControl.updateValueAndValidity();
            contactEmailControl.updateValueAndValidity();
        });
    };
    ConvertProspect2Component.prototype.onFormValueChanged = function (data) {
        if (this.isSubmitted) {
            this.validateForm();
        }
    };
    ConvertProspect2Component.prototype.validateForm = function () {
        var isNewCustomer = this.convertProspectForm.get('isNewCustomer');
        var isNewContact = this.convertProspectForm.get('isNewContact');
        if (!isNewCustomer.value && !isNewContact.value) {
            this.validationMessages = ['Chuyển đổi đòi hỏi phải lựa chọn Liên hệ hoặc Khách hàng'];
            return false;
        }
        else {
            this.validationMessages = [];
        }
        return __WEBPACK_IMPORTED_MODULE_11__helpers_validation_helper__["a" /* default */].getInvalidMessages(this.convertProspectForm, this.formErrors).length === 0;
    };
    ConvertProspect2Component.prototype.submitForm = function () {
        var _this = this;
        this.isSubmitted = true;
        if (this.validateForm()) {
            var that_1 = this;
            this.prospectService.checkCustomerName(this.convertProspectForm.get('customerName').value)
                .subscribe(function (result) {
                _this.checkName = result;
                var thiss = _this;
                if (_this.checkName === 1) {
                    that_1.confirmationService.confirm("T\u00EAn kh\u00E1ch h\u00E0ng tr\u00F9ng v\u1EDBi t\u00EAn m\u1ED9t kh\u00E1ch h\u00E0ng \u0111\u00E3 c\u00F3 b\u1EA1n c\u00F3 mu\u1ED1n ti\u1EBFp t\u1EE5c kh\u00F4ng?", function () {
                        that_1.hidePopup = true;
                        // tslint:disable-next-line:max-line-length
                        _this.prospectService.checkContactName(_this.convertProspectForm.get('contactFullName').value)
                            .subscribe(function (res) {
                            if (res === 1) {
                                that_1.confirmationService.confirm("T\u00EAn li\u00EAn h\u1EC7 tr\u00F9ng v\u1EDBi t\u00EAn m\u1ED9t li\u00EAn h\u1EC7 \u0111\u00E3 c\u00F3 b\u1EA1n c\u00F3 mu\u1ED1n ti\u1EBFp t\u1EE5c kh\u00F4ng?", function () {
                                    thiss.prospectService
                                        .convertProspect(_this.convertProspectForm.value)
                                        .subscribe(function (_) {
                                        _this.activeModal.close('Close click');
                                        _this.router.navigate(['/prospect']);
                                        _this.alertService.success('Tiềm năng đã được chuyển đổi thành công!');
                                    });
                                });
                            }
                            else {
                                _this.prospectService
                                    .convertProspect(_this.convertProspectForm.value)
                                    .subscribe(function (respon) {
                                    _this.activeModal.close('Close click');
                                    _this.activeModal.close('Close click');
                                    _this.router.navigate(['/prospect']);
                                    _this.alertService.success('Tiềm năng đã được chuyển đổi thành công!');
                                });
                            }
                        });
                    });
                }
                else {
                    _this.prospectService
                        .convertProspect(_this.convertProspectForm.value)
                        .subscribe(function (res) {
                        _this.activeModal.close('Close click');
                        _this.activeModal.close('Close click');
                        _this.router.navigate(['/prospect']);
                        _this.alertService.success('Tiềm năng đã được chuyển đổi thành công!');
                    });
                }
            });
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__models_prospect_prospect_model__["a" /* ProspectModel */])
    ], ConvertProspect2Component.prototype, "prospect", void 0);
    ConvertProspect2Component = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-convert-prospect2',
            template: __webpack_require__("../../../../../src/app/shared/components/convert-prospect2/convert-prospect2.component.html"),
            styles: [__webpack_require__("../../../../../src/app/shared/components/convert-prospect2/convert-prospect2.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["Router"],
            __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__["a" /* NgbActiveModal */],
            __WEBPACK_IMPORTED_MODULE_5__services_session_service__["a" /* SessionService */],
            __WEBPACK_IMPORTED_MODULE_6__services_data_service__["a" /* DataService */],
            __WEBPACK_IMPORTED_MODULE_7__services_alert_service__["a" /* AlertService */],
            __WEBPACK_IMPORTED_MODULE_8__services_prospect_service__["a" /* ProspectService */],
            __WEBPACK_IMPORTED_MODULE_9__services_confirmation_service__["a" /* ConfirmationService */]])
    ], ConvertProspect2Component);
    return ConvertProspect2Component;
}());



/***/ }),

/***/ "../../../../../src/app/shared/components/email-editor/email-editor.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n    <form #emailForm=\"ngForm\" novalidate>\n        <div class=\"input-group\">\n            <span style=\"min-width: 82px\" class=\"input-group-addon title-mail border-title-mail width-for-to\">Gửi tới:</span>\n            <div style=\"height: 40px;\" class=\"form-control border-left-input\">\n                <tag-input [(ngModel)]=\"emailToList\" theme='minimal' [ngModelOptions]=\"{standalone: true}\" [disable]=\"true\" [placeholder]=\"''\"></tag-input>\n\n            </div>\n            <!-- <input id=\"msg\" type=\"text\" class=\"form-control border-left-input\" name=\"msg\" placeholder=\"nghia.nguyen@bys.vn\"> -->\n        </div>\n        <div></div>\n        <br>\n        <div class=\"input-group form-group\">\n            <span style=\"min-width: 82px\" class=\"input-group-addon title-mail border-title-mail\">Tiêu đề:</span>\n            <input required [(ngModel)]=\"emailModel.title\" #emailTitle=\"ngModel\" [ngModelOptions]=\"{standalone: true}\" style=\"height: 40px;\" class=\"form-control border-left-input\"\n                name=\"msg\">\n        </div>\n        <div class=\"form-group email-err\" *ngIf=\"emailTitle.errors && emailTitle.errors.required && (emailTitle.dirty || emailTitle.touched)\">Trường này là bắt buộc nhập</div>\n        <div class=\"form-group email-err\" *ngIf=\"emailModel.title && emailModel.title.length > 50\">Tiêu đề không được nhiều hơn 50 ký tự</div>\n        <!-- <div class=\"form-group\">\n            <ckeditor [(ngModel)]=\"emailModel.content\" #myckeditor [ngModelOptions]=\"{standalone: true}\" [config]=\"ckeConfig\" debounce=\"500\"\n                (change)=\"onChange($event)\"></ckeditor>\n        </div> -->\n        <div class=\"input-group form-group\">\n            <span style=\"min-width: 82px\" class=\"input-group-addon title-mail border-title-mail\">Nội dung:</span>\n            <textarea required rows=\"4\" [(ngModel)]=\"emailModel.content\" #emailContent=\"ngModel\" [ngModelOptions]=\"{standalone: true}\" class=\"form-control border-left-input\"\n                name=\"msg\"></textarea>\n        </div>\n        <div class=\"form-group email-err\" *ngIf=\"emailContent.errors && emailContent.errors.required && (emailContent.dirty || emailContent.touched)\">Trường này là bắt buộc nhập</div>\n        <div class=\"form-group email-err\" *ngIf=\"emailModel.content && emailModel.content.length > 250\">Nội dung không được nhiều hơn 250 ký tự</div>\n        <div class=\"text-right\">\n            <button class=\"btn btn-primary\" [disabled]=\"(emailTitle.errors || emailContent.errors) || (emailModel.title && emailModel.title.length > 50) || (emailModel.content && emailModel.content.length > 250)\" (click)=\"sendClick()\">Gửi</button>\n        </div>\n    </form>\n    <!-- <div>\n        <span class=\"k-icon k-i-loading\" style=\"color: #fff\"></span>\n    </div> -->\n</div>\n<ngx-spinner bdColor=\"rgba(51, 51, 51, 0.7)\" size=\"medium\" color=\"#fff\" type=\"ball-clip-rotate-multiple\"></ngx-spinner>"

/***/ }),

/***/ "../../../../../src/app/shared/components/email-editor/email-editor.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host() {\n  width: 80vw; }\n\n.email-err {\n  font-size: 0.9em;\n  color: red;\n  margin-top: -.8rem; }\n\nbutton:disabled, button[disabled] {\n  cursor: not-allowed; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/components/email-editor/email-editor.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmailEditorComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_email_service__ = __webpack_require__("../../../../../src/app/shared/services/email.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_email_model__ = __webpack_require__("../../../../../src/app/shared/models/email-model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services__ = __webpack_require__("../../../../../src/app/shared/services/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__node_modules_progress_kendo_angular_dialog__ = __webpack_require__("../../../../@progress/kendo-angular-dialog/dist/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__node_modules_ngx_spinner__ = __webpack_require__("../../../../ngx-spinner/ngx-spinner.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__node_modules_ngx_spinner___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__node_modules_ngx_spinner__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__progress_kendo_data_query__ = __webpack_require__("../../../../@progress/kendo-data-query/dist/es/main.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var EmailEditorComponent = /** @class */ (function () {
    function EmailEditorComponent(emailService, sessionService, diaRef, spinner, alertService) {
        this.emailService = emailService;
        this.sessionService = sessionService;
        this.diaRef = diaRef;
        this.spinner = spinner;
        this.alertService = alertService;
        this.name = 'ng2-ckeditor';
        this.log = '';
        this.emailModel = new __WEBPACK_IMPORTED_MODULE_2__models_email_model__["a" /* EmailModel */]();
    }
    EmailEditorComponent.prototype.ngOnInit = function () {
        var result = Object(__WEBPACK_IMPORTED_MODULE_6__progress_kendo_data_query__["c" /* groupBy */])(this.emailList, [{ field: 'email' }]);
        this.emailList = [];
        this.emailList = result.map(function (i) { return i.items[0]; });
        this.emailToList = this.emailList.map(function (i) { return i.email; });
        this.emailModel.sender = this.sessionService.currentUser.userName;
        this.emailModel.senderId = this.sessionService.currentUser.userId;
        this.emailModel.from = this.sessionService.currentUser.email;
        this.ckeConfig = {};
    };
    EmailEditorComponent.prototype.onChange = function ($event) {
    };
    EmailEditorComponent.prototype.sendClick = function () {
        var _this = this;
        this.spinner.show();
        // this.diaRef.close();
        this.emailModel.recipients = this.emailList;
        this.emailModel.subject = this.emailModel.title;
        this.emailService.sendEmail(this.emailModel).subscribe(function (data) {
            _this.spinner.hide();
            _this.diaRef.close();
            _this.alertService.success('Gửi email thành công');
        }, function (err) {
            _this.spinner.hide();
            _this.diaRef.close();
            _this.alertService.error('Đã có lỗi xảy ra, vui lòng thử lại!');
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Array)
    ], EmailEditorComponent.prototype, "emailList", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('myckeditor'),
        __metadata("design:type", Object)
    ], EmailEditorComponent.prototype, "ckeditor", void 0);
    EmailEditorComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-email-editor',
            template: __webpack_require__("../../../../../src/app/shared/components/email-editor/email-editor.component.html"),
            styles: [__webpack_require__("../../../../../src/app/shared/components/email-editor/email-editor.component.scss")],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_email_service__["a" /* EmailService */],
            __WEBPACK_IMPORTED_MODULE_3__services__["n" /* SessionService */],
            __WEBPACK_IMPORTED_MODULE_4__node_modules_progress_kendo_angular_dialog__["c" /* DialogRef */],
            __WEBPACK_IMPORTED_MODULE_5__node_modules_ngx_spinner__["NgxSpinnerService"],
            __WEBPACK_IMPORTED_MODULE_3__services__["b" /* AlertService */]])
    ], EmailEditorComponent);
    return EmailEditorComponent;
}());



/***/ }),

/***/ "../../../../../src/app/shared/components/feng-shuis-infor/feng-shuis-infor.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"fengShuisInforModel\" class=\"p-2 popup\">\n    <div class=\"d-flex justify-content-center title\">\n        <div>\n            <span>Chi tiết: Mạng {{fengShuisInforModel.fengShuisGenaralDto.fengShuisGenaralFiveBasicElements}} - {{fengShuisInforModel.fengShuisGenaralDto.fengShuisGenaralDescription}}</span>\n        </div>\n\n    </div>\n    <div class=\"d-flex justify-content-center title-2 mt-2\">\n        <div *ngIf=\"gender === 'Male'\">\n            <span>Nam mạng - {{fengShuisInforModel.fengShuisGenaralDto.fengShuisGenaralMale}}</span>\n        </div>\n        <div *ngIf=\"gender === 'Female'\">\n            <span>Nữ mạng - {{fengShuisInforModel.fengShuisGenaralDto.fengShuisGenaralFemale}}</span>\n        </div>\n    </div>\n    <hr>\n    <div class=\"mt-3\">\n        <span class=\"font-weight-bold\">Hướng: {{fengShuisInforModel.fengShuisDirectionDto.fengShuisDirectionBowLife}}</span>\n    </div>\n    <div class=\"row p-2\">\n        <div class=\"col-md-6 col-lg-6 col-sx-6\">\n            <div class=\"row\">\n                <div class=\"col-md-4 col-lg-4 col-sx-4\">\n                    <div class=\"mt-2\">\n                        <span>Đông</span>\n                    </div>\n                    <div class=\"mt-2\">\n                        <span>Đông nam</span>\n                    </div>\n                    <div class=\"mt-2\">\n                        <span>Nam</span>\n                    </div>\n                    <div class=\"mt-2\">\n                        <span>Bắc</span>\n                    </div>\n                </div>\n                <div class=\"col-md-8 col-lg-8 col-sx-8 info-body\">\n                    <div class=\"mt-2\">\n                        <span>{{fengShuisInforModel.fengShuisDirectionDto.fengShuisDirectionEast}}</span>\n                    </div>\n                    <div class=\"mt-2\">\n                        <span>{{fengShuisInforModel.fengShuisDirectionDto.fengShuisDirectionSouthEast}}</span>\n                    </div>\n                    <div class=\"mt-2\">\n                        <span>{{fengShuisInforModel.fengShuisDirectionDto.fengShuisDirectionSouth}}</span>\n                    </div>\n                    <div class=\"mt-2\">\n                        <span>{{fengShuisInforModel.fengShuisDirectionDto.fengShuisDirectionNorth}}</span>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"col-md-6 col-lg-6 col-sx-6\">\n            <div class=\"row\">\n                <div class=\"col-md-4 col-lg-4 col-sx-4\">\n                    <div class=\"mt-2\">\n                        <span>Tây</span>\n                    </div>\n                    <div class=\"mt-2\">\n                        <span>Tây nam</span>\n                    </div>\n                    <div class=\"mt-2\">\n                        <span>Tây bắc</span>\n                    </div>\n                    <div class=\"mt-2\">\n                        <span>Đông bắc</span>\n                    </div>\n                </div>\n                <div class=\"col-md-8 col-lg-8 col-sx-8 info-body\">\n                    <div class=\"mt-2\">\n                        <span>{{fengShuisInforModel.fengShuisDirectionDto.fengShuisDirectionWest}}</span>\n                    </div>\n                    <div class=\"mt-2\">\n                        <span>{{fengShuisInforModel.fengShuisDirectionDto.fengShuisDirectionSouthWest}}</span>\n                    </div>\n                    <div class=\"mt-2\">\n                        <span>{{fengShuisInforModel.fengShuisDirectionDto.fengShuisDirectionNorthWest}}</span>\n                    </div>\n                    <div class=\"mt-2\">\n                        <span>{{fengShuisInforModel.fengShuisDirectionDto.fengShuisDirectionNorthEast}}</span>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n\n\n    <div class=\"mt-3\" *ngIf=\"fengShuisInforModel.fengShuisColorDto\">\n        <span class=\"font-weight-bold\">Màu: {{fengShuisInforModel.fengShuisColorDto.fengShuisColorLife}}</span>\n    </div>\n    <div class=\"row p-2\">\n        <div class=\"col-md-6 col-lg-6 col-sx-6\">\n            <div class=\"row\">\n                <div class=\"col-md-4 col-lg-4 col-sx-4\">\n                    <div class=\"mt-2\">\n                        <span>Tương sinh</span>\n                    </div>\n                    <div class=\"mt-2\">\n                        <span>Hòa hợp</span>\n                    </div>\n\n                </div>\n                <div class=\"col-md-8 col-lg-8 col-sx-8 info-body\">\n                    <div class=\"mt-2\">\n                        <span *ngIf=\"fengShuisInforModel.fengShuisColorDto\">{{fengShuisInforModel.fengShuisColorDto.fengShuisColorMutual}}</span>\n                    </div>\n                    <div class=\"mt-2\">\n                        <span *ngIf=\"fengShuisInforModel.fengShuisColorDto\">{{fengShuisInforModel.fengShuisColorDto.fengShuisColorHarmony}}</span>\n                    </div>\n\n                </div>\n            </div>\n        </div>\n        <div class=\"col-md-6 col-lg-6 col-sx-6\">\n            <div class=\"row\">\n                <div class=\"col-md-4 col-lg-4 col-sx-4\">\n                    <div class=\"mt-2\">\n                        <span>Chế khắc</span>\n                    </div>\n                    <div class=\"mt-2\">\n                        <span>Bị khắc</span>\n                    </div>\n\n                </div>\n                <div class=\"col-md-8 col-lg-8 col-sx-8 info-body\">\n                    <div class=\"mt-2\">\n                        <span *ngIf=\"fengShuisInforModel.fengShuisColorDto\">{{fengShuisInforModel.fengShuisColorDto.fengShuisColorFightDown}}</span>\n                    </div>\n                    <div class=\"mt-2\">\n                        <span *ngIf=\"fengShuisInforModel.fengShuisColorDto\">{{fengShuisInforModel.fengShuisColorDto.fengShuisColorConflict}}</span>\n                    </div>\n\n                </div>\n            </div>\n        </div>\n    </div>\n    <!-- <div class=\"mt-3\">\n        <span class=\"font-weight-bold\">Mô tả</span>\n    </div>\n    <div class=\"p-2\">\n    </div> -->\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/shared/components/feng-shuis-infor/feng-shuis-infor.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".title {\n  font-size: 1.4rem;\n  font-weight: bold; }\n\n.title-2 {\n  font-size: 1.25rem;\n  font-weight: bold; }\n\n.info-body span {\n  color: #212529 !important; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/components/feng-shuis-infor/feng-shuis-infor.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FengShuisInforComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_feng_shuis_infor_service__ = __webpack_require__("../../../../../src/app/shared/services/feng-shuis-infor.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FengShuisInforComponent = /** @class */ (function () {
    function FengShuisInforComponent(fengShuisInforService) {
        this.fengShuisInforService = fengShuisInforService;
    }
    FengShuisInforComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.fengShuisInforService.getFengShuisInfo(this.lunarBirthday, this.gender).subscribe(function (result) {
            _this.fengShuisInforModel = result;
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], FengShuisInforComponent.prototype, "gender", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], FengShuisInforComponent.prototype, "lunarBirthday", void 0);
    FengShuisInforComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-feng-shuis-infor',
            template: __webpack_require__("../../../../../src/app/shared/components/feng-shuis-infor/feng-shuis-infor.component.html"),
            styles: [__webpack_require__("../../../../../src/app/shared/components/feng-shuis-infor/feng-shuis-infor.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_feng_shuis_infor_service__["a" /* FengShuisInforService */]])
    ], FengShuisInforComponent);
    return FengShuisInforComponent;
}());



/***/ }),

/***/ "../../../../../src/app/shared/components/footer-copyright/footer-copyright.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n  <span class=\"footer text-muted text-center\">Copyright &copy; {{year}}. Bản quyền thuộc Nhóm 1.</span>\n</div> "

/***/ }),

/***/ "../../../../../src/app/shared/components/footer-copyright/footer-copyright.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".footer {\n  position: absolute;\n  bottom: 20px;\n  left: 0;\n  right: 0;\n  margin-left: auto;\n  margin-right: auto; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/components/footer-copyright/footer-copyright.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterCopyrightComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment__ = __webpack_require__("../../../../moment/moment.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_moment__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FooterCopyrightComponent = /** @class */ (function () {
    function FooterCopyrightComponent() {
        this.year = __WEBPACK_IMPORTED_MODULE_1_moment__().year() + '';
    }
    FooterCopyrightComponent.prototype.ngOnInit = function () {
    };
    FooterCopyrightComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-footer-copyright',
            template: __webpack_require__("../../../../../src/app/shared/components/footer-copyright/footer-copyright.component.html"),
            styles: [__webpack_require__("../../../../../src/app/shared/components/footer-copyright/footer-copyright.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterCopyrightComponent);
    return FooterCopyrightComponent;
}());



/***/ }),

/***/ "../../../../../src/app/shared/components/list-errors/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__list_errors_component__ = __webpack_require__("../../../../../src/app/shared/components/list-errors/list-errors.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__list_errors_component__["a"]; });



/***/ }),

/***/ "../../../../../src/app/shared/components/list-errors/list-errors.component.html":
/***/ (function(module, exports) {

module.exports = " <div *ngIf = 'formattedErrors' class=\"alert alert-danger alert-dismissible fade show text-left \">\n     {{formattedErrors}}\n </div>"

/***/ }),

/***/ "../../../../../src/app/shared/components/list-errors/list-errors.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/components/list-errors/list-errors.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListErrorsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ListErrorsComponent = /** @class */ (function () {
    function ListErrorsComponent() {
    }
    ListErrorsComponent.prototype.ngOnChanges = function () {
        this.formattedErrors = this.errorCode;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('errorCode'),
        __metadata("design:type", String)
    ], ListErrorsComponent.prototype, "errorCode", void 0);
    ListErrorsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-list-errors',
            template: __webpack_require__("../../../../../src/app/shared/components/list-errors/list-errors.component.html"),
            styles: [__webpack_require__("../../../../../src/app/shared/components/list-errors/list-errors.component.scss")]
        })
    ], ListErrorsComponent);
    return ListErrorsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/shared/components/pagination/pagination.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"pagedResult && pagedResult.pageCount\" class=\"mt-2 d-flex flex-row justify-content-end\">\n    <div class=\"mr-auto ml-5\" *ngIf=\"!hidePageSizeList\">\n        Hiển thị {{(pagedResult.currentPage * pagedResult.pageSize) + 1}} - {{(pagedResult.currentPage * pagedResult.pageSize) +\n        pagedResult.items.length}} của {{pagedResult.total}}\n    </div>\n\n    <div class=\"mr-5\" *ngIf=\"!hidePageSizeList\">\n        <!-- <label>Số dòng/trang:\n            <select (change)=\"onItemsPerPageChange($event.target.value)\">\n                <option value=\"10\">10</option>\n                <option value=\"25\">25</option>\n                <option value=\"50\">50</option>\n                <option value=\"100\">100</option>\n            </select>\n        </label> -->\n    </div>\n\n    <nav *ngIf=\"pagedResult\">\n        <ul class=\"pagination justify-content-end\">\n            <li class=\"page-item mr-1\" [class.disabled]=\"pagedResult.currentPage == 0\">\n                <a (click)=\"getPage('0')\" class=\"page-link\">\n                    <i class=\"fa fa-angle-double-left\" aria-hidden=\"true\"></i>\n                </a>\n            </li>\n            <li class=\"page-item mr-3\" [class.disabled]=\"pagedResult.currentPage == 0\">\n                <a  class=\"page-link\" (click)=\"getPage(pagedResult.currentPage - 1)\">\n                    <i  class=\"fa fa-angle-left\" aria-hidden=\"true\"></i>\n                </a>\n            </li>\n            <li class=\"page-item\" *ngFor=\"let page of  pages\">\n                <a class=\"page-link\" (click)=\"getPage(page.value-1)\" [class.current]=\"pagedResult.currentPage == page.value-1\">{{page.label}}</a>\n            </li>\n            <li class=\"page-item ml-3\" [class.disabled]=\"(pagedResult.currentPage+1) == pagedResult.pageCount\">\n                <a (click)=\"getPage(pagedResult.currentPage + 1)\" class=\"page-link\">\n                    <i class=\"fa fa-angle-right\" aria-hidden=\"true\"></i>\n                </a>\n            </li>\n            <li class=\"page-item ml-1\" [class.disabled]=\"(pagedResult.currentPage+1) == pagedResult.pageCount\">\n                <a (click)=\"getPage(pagedResult.pageCount - 1)\" class=\"page-link\">\n                    <i class=\"fa fa-angle-double-right\" aria-hidden=\"true\"></i>\n                </a>\n            </li>\n        </ul>\n    </nav>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/shared/components/pagination/pagination.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".page-link {\n  border: none;\n  padding: 0.2rem 0.5rem !important;\n  margin-left: 2px;\n  text-align: center;\n  text-decoration: none !important;\n  cursor: pointer; }\n\n.current {\n  background-color: #17a2b8 !important;\n  border-radius: 5px !important;\n  background: #17a2b8 !important;\n  color: #fff !important; }\n\nselect {\n  font-size: 0.8rem;\n  line-height: 1.5;\n  color: #495057;\n  background-color: #fff;\n  background-image: none;\n  background-clip: padding-box;\n  border: 1px solid #fff;\n  border-radius: 0.25rem;\n  transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/components/pagination/pagination.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaginationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_index__ = __webpack_require__("../../../../../src/app/shared/models/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PaginationComponent = /** @class */ (function () {
    function PaginationComponent() {
        this.hidePageSizeList = false;
        this.pagedResultChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.maxSize = 7;
    }
    PaginationComponent.prototype.ngOnInit = function () {
    };
    PaginationComponent.prototype.ngOnChanges = function () {
        this.pages = this.createPageArray(+this.pagedResult.currentPage + 1, +this.pagedResult.pageSize, +this.pagedResult.total, this.maxSize);
    };
    PaginationComponent.prototype.getPage = function (page) {
        this.pagedResult.currentPage = page;
        this.pagedResultChange.emit(this.pagedResult);
    };
    PaginationComponent.prototype.getCurrentPage = function () {
        this.getPage(this.pagedResult.currentPage);
    };
    PaginationComponent.prototype.onItemsPerPageChange = function (pageSize) {
        this.pagedResult.pageSize = pageSize;
        this.pagedResult.currentPage = 0;
        this.pagedResultChange.emit(this.pagedResult);
    };
    PaginationComponent.prototype.createPageArray = function (currentPage, itemsPerPage, totalItems, paginationRange) {
        // paginationRange could be a string if passed from attribute, so cast to number.
        paginationRange = +paginationRange;
        var pages = [];
        var totalPages = Math.ceil(totalItems / itemsPerPage);
        var halfWay = Math.ceil(paginationRange / 2);
        var isStart = currentPage <= halfWay;
        var isEnd = totalPages - halfWay < currentPage;
        var isMiddle = !isStart && !isEnd;
        var ellipsesNeeded = paginationRange < totalPages;
        var i = 1;
        while (i <= totalPages && i <= paginationRange) {
            var label = void 0;
            var pageNumber = this.calculatePageNumber(i, currentPage, paginationRange, totalPages);
            var openingEllipsesNeeded = (i === 2 && (isMiddle || isEnd));
            var closingEllipsesNeeded = (i === paginationRange - 1 && (isMiddle || isStart));
            if (ellipsesNeeded && (openingEllipsesNeeded || closingEllipsesNeeded)) {
                label = '...';
            }
            else {
                label = pageNumber;
            }
            pages.push({
                label: label,
                value: pageNumber
            });
            i++;
        }
        return pages;
    };
    /**
       * Given the position in the sequence of pagination links [i],
       * figure out what page number corresponds to that position.
       */
    PaginationComponent.prototype.calculatePageNumber = function (i, currentPage, paginationRange, totalPages) {
        var halfWay = Math.ceil(paginationRange / 2);
        if (i === paginationRange) {
            return totalPages;
        }
        else if (i === 1) {
            return i;
        }
        else if (paginationRange < totalPages) {
            if (totalPages - halfWay < currentPage) {
                return totalPages - paginationRange + i;
            }
            else if (halfWay < currentPage) {
                return currentPage - halfWay + i;
            }
            else {
                return i;
            }
        }
        else {
            return i;
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__models_index__["g" /* PagedResult */])
    ], PaginationComponent.prototype, "pagedResult", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], PaginationComponent.prototype, "hidePageSizeList", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], PaginationComponent.prototype, "pagedResultChange", void 0);
    PaginationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-pagination',
            template: __webpack_require__("../../../../../src/app/shared/components/pagination/pagination.component.html"),
            styles: [__webpack_require__("../../../../../src/app/shared/components/pagination/pagination.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], PaginationComponent);
    return PaginationComponent;
}());



/***/ }),

/***/ "../../../../../src/app/shared/components/setting-type/setting-type.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\">\n  <h4 class=\"modal-title pull-left\" [ngSwitch]=\"type\">\n      <span *ngSwitchCase=\"'prospect-evaluations'\">Cấu hình đánh giá</span>\n      <span *ngSwitchCase=\"'prospectSource'\">Cấu hình nguồn tiềm năng</span>\n      <span *ngSwitchCase=\"'opportunitySource'\">Cấu hình nguồn cơ hội</span>\n      <span *ngSwitchCase=\"'opportunity-steps'\">Cấu hình giai đoạn</span>\n      <span *ngSwitchCase=\"'customer-groups'\">Cấu hình nhóm</span>\n      <span *ngSwitchCase=\"'campaign-types'\">Cấu hình loại chiến dịch</span>\n      <span *ngSwitchCase=\"'event-types'\">Cấu hình loại sự kiện</span>\n      <span *ngSwitchCase=\"'prospect-handler'\">Cấu hình cần xử lý bởi</span>\n      <span *ngSwitchCase=\"'prospect-db'\">Cấu hình D&B</span>\n      <span *ngSwitchCase=\"'prospect-approach-channel'\">Cấu hình kênh tiếp cận</span>\n      <span *ngSwitchCase=\"'campaign-approach-channel'\">Cấu hình Nguồn chiến dịch</span>\n  </h4>\n  <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"closeModal()\">\n      <span aria-hidden=\"true\">&times;</span>\n  </button>\n</div>\n<div class=\"modal-body\">\n  <table class=\"table table-borderless table-striped table-hover\">\n      <thead>\n          <tr class=\"table-header\" [ngSwitch]=\"type\">\n              <th *ngSwitchCase=\"'prospect-evaluations'\">Tên đánh giá</th>\n              <th *ngSwitchCase=\"'prospectSource'\">Tên nguồn tiềm năng</th>\n              <th *ngSwitchCase=\"'opportunitySource'\">Tên nguồn cơ hội</th>\n              <th *ngSwitchCase=\"'opportunity-steps'\">Tên giai đoạn</th>\n              <th *ngSwitchCase=\"'customer-groups'\">Tên nhóm</th>\n              <th *ngSwitchCase=\"'campaign-types'\">Tên loại chiến dịch</th>\n              <th *ngSwitchCase=\"'event-types'\">Tên loại sự kiện</th>\n              <th *ngSwitchCase=\"'prospect-handler'\">Tên cần xử lý bởi</th>\n              <th *ngSwitchCase=\"'prospect-db'\">Tên D&B</th>\n              <th *ngSwitchCase=\"'prospect-approach-channel'\">Tên kênh tiếp cận</th>\n              <th *ngSwitchCase=\"'campaign-approach-channel'\">Tên nguồn chiến dịch</th>\n              <th class=\"text-right pr-2r\">Thao tác</th>\n          </tr>\n      </thead>\n      <tbody>\n          <tr class=\"d-none\">\n              <td class=\"p-0\"></td>\n              <td class=\"p-0\"></td>\n          </tr>\n          <tr *ngFor=\"let item of prospectEvaluationSettingList\">\n              <td>\n                  <span *ngIf=\"!item.edit\">{{item.text}}</span>\n                  <input [class.is-invalid]=\"!((item.text.length <= 50) && (item.text.length > 0)) && isSubmit\" *ngIf=\"item.edit\" class=\"form-control\" [(ngModel)]=\"evaluationModel.text\">\n                  <div class=\"invalid-feedback\" *ngIf=\"!((item.text.length <= 50) && (item.text.length > 0)) && isSubmit\"> Tên {{typeStr}} phải lớn hơn 0 và nhỏ hơn 50 ký tự</div>\n              </td>\n              <td class=\"text-right pr-2r\">\n                  <span class=\"ml-2\">\n                      <i *ngIf=\"!item.edit && !(type == 'opportunity-steps' && (item.extra == 'Success' || item.extra == 'Failure' || item.extra == 'QuatationsForCustomers'))\" (click)=\"editEvaluationType(item)\" class=\"fa fa-pencil pointer\"\n                          aria-hidden=\"true\"></i>\n                      <i *ngIf=\"item.edit\" (click)=\"createOrUpdateEvaluationType(item)\" class=\"fa fa-check pointer\"\n                          aria-hidden=\"true\"></i>\n                  </span>\n                  <span class=\"ml-2\">\n                      <i class=\"fa fa-trash-o pointer\" *ngIf=\"!(type == 'opportunity-steps' && (item.extra == 'Success' || item.extra == 'Failure'))\" (click)=\"deleteEvaluationType(item)\" aria-hidden=\"true\"></i>\n                  </span>\n              </td>\n          </tr>\n      </tbody>\n  </table>\n  <button class=\"btn btn-primary ml-2\" (click)=\"addEvaluationType()\" [disabled]=\"!isAddMoreEvaluation\">\n      <i class=\"fa fa-plus\" aria-hidden=\"true\"></i> Thêm\n  </button>\n</div>"

/***/ }),

/***/ "../../../../../src/app/shared/components/setting-type/setting-type.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/components/setting-type/setting-type.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingTypeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services__ = __webpack_require__("../../../../../src/app/shared/services/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_bootstrap__ = __webpack_require__("../../../../ngx-bootstrap/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SettingTypeComponent = /** @class */ (function () {
    function SettingTypeComponent(dataService, modalRef, confirmService, alertService) {
        this.dataService = dataService;
        this.modalRef = modalRef;
        this.confirmService = confirmService;
        this.alertService = alertService;
        this.isAddMoreEvaluation = true;
        this.isSubmit = false;
    }
    Object.defineProperty(SettingTypeComponent.prototype, "typeStr", {
        get: function () {
            switch (this.type) {
                case 'prospect-evaluations':
                    return 'đánh giá';
                case 'opportunity-steps':
                    return 'giai đoạn';
                case 'customer-groups':
                    return 'nhóm';
                case 'campaign-types':
                    return 'loại chiến dịch';
                case 'event-types':
                    return 'loại chiến dịch';
                case 'prospectSource':
                    return 'nguồn tiềm năng';
                case 'opportunitySource':
                    return 'nguồn cơ hội';
                case 'prospect-handler':
                    return 'cần xử lý bởi';
                case 'prospect-db':
                    return 'D&B';
                case 'prospect-approach-channel':
                    return 'kênh tiếp cận';
                case 'campaign-approach-channel':
                    return 'nguồn chiến dịch';
                default:
                    break;
            }
        },
        enumerable: true,
        configurable: true
    });
    SettingTypeComponent.prototype.ngOnInit = function () {
        this.getListEvaluations();
    };
    SettingTypeComponent.prototype.getListEvaluations = function () {
        var _this = this;
        switch (this.type) {
            case 'opportunitySource':
            case 'prospectSource':
                this.dataService.getProspectSources().subscribe(function (data) {
                    _this.setListData(data);
                });
                break;
            case 'prospect-evaluations':
            case 'opportunity-steps':
            case 'customer-groups':
            case 'campaign-types':
            case 'event-types':
            case 'prospect-handler':
            case 'prospect-db':
                this.dataService.getConfigTypeData(this.type).subscribe(function (data) {
                    _this.setListData(data);
                });
                break;
            case 'prospect-approach-channel':
            case 'campaign-approach-channel':
                this.dataService.getApproachChanels(this.objName).subscribe(function (data) {
                    _this.setListData(data);
                });
                break;
            default:
                break;
        }
    };
    SettingTypeComponent.prototype.setListData = function (data) {
        this.evaluationList = data.map(function (i) {
            return {
                id: i.value,
                text: i.text,
            };
        });
        this.prospectEvaluationSettingList = data.map(function (i) {
            return {
                id: i.id,
                text: i.text,
                edit: false,
                extra: i.value
            };
        });
    };
    SettingTypeComponent.prototype.addEvaluationType = function () {
        this.isAddMoreEvaluation = false;
        this.prospectEvaluationSettingList.forEach(function (i) { return i.edit = false; });
        this.evaluationModel = {
            id: null,
            text: '',
            edit: true
        };
        this.prospectEvaluationSettingList.push(this.evaluationModel);
    };
    SettingTypeComponent.prototype.editEvaluationType = function (type) {
        this.prospectEvaluationSettingList.forEach(function (i) { return i.edit = false; });
        type.edit = true;
        this.evaluationModel = type;
        this.evaluationName = type.text;
    };
    SettingTypeComponent.prototype.deleteEvaluationType = function (settingType) {
        var _this = this;
        switch (this.type) {
            case 'opportunity-steps':
            case 'customer-groups':
            case 'campaign-types':
            case 'event-types':
            case 'prospect-evaluations':
            case 'prospect-handler':
            case 'prospect-db':
                this.confirmService.confirm("B\u1EA1n c\u00F3 ch\u1EAFc ch\u1EAFn mu\u1ED1n x\u00F3a " + this.typeStr + " n\u00E0y?", function () {
                    if (settingType.id) {
                        _this.dataService.deleteEvaluations(settingType.id, _this.type).subscribe(function (data) {
                            _this.deleteSettingTypeSuccess();
                        }, function (err) {
                            _this.alertService.error("B\u1EA1n kh\u00F4ng th\u1EC3 x\u00F3a m\u1ED9t " + _this.typeStr + " \u0111ang \u0111\u01B0\u1EE3c s\u1EED d\u1EE5ng!");
                        });
                    }
                    else {
                        _this.prospectEvaluationSettingList.pop();
                        _this.isAddMoreEvaluation = true;
                    }
                });
                break;
            case 'opportunitySource':
            case 'prospectSource':
                // tslint:disable-next-line:max-line-length
                this.confirmService.confirm("B\u1EA1n c\u00F3 ch\u1EAFc ch\u1EAFn mu\u1ED1n x\u00F3a " + this.typeStr + " n\u00E0y?", function () {
                    if (settingType.id) {
                        _this.dataService.deleteSettingTypeItem(settingType.id, _this.type).subscribe(function (data) {
                            _this.deleteSettingTypeSuccess();
                        }, function (err) {
                            // tslint:disable-next-line:max-line-length
                            _this.alertService.error("B\u1EA1n kh\u00F4ng th\u1EC3 x\u00F3a m\u1ED9t " + _this.typeStr + " \u0111ang \u0111\u01B0\u1EE3c s\u1EED d\u1EE5ng!");
                        });
                    }
                    else {
                        _this.prospectEvaluationSettingList.pop();
                        _this.isAddMoreEvaluation = true;
                    }
                });
                break;
            case 'prospect-approach-channel':
            case 'campaign-approach-channel':
                this.confirmService.confirm("B\u1EA1n c\u00F3 ch\u1EAFc ch\u1EAFn mu\u1ED1n x\u00F3a " + this.typeStr + " n\u00E0y?", function () {
                    if (settingType.id) {
                        _this.dataService.deleteApproachChanel(settingType.id).subscribe(function (data) {
                            _this.deleteSettingTypeSuccess();
                        }, function (err) {
                            // tslint:disable-next-line:max-line-length
                            _this.alertService.error("B\u1EA1n kh\u00F4ng th\u1EC3 x\u00F3a m\u1ED9t " + _this.typeStr + " \u0111ang \u0111\u01B0\u1EE3c s\u1EED d\u1EE5ng!");
                        });
                    }
                    else {
                        _this.prospectEvaluationSettingList.pop();
                        _this.isAddMoreEvaluation = true;
                    }
                });
                break;
            default:
                break;
        }
    };
    SettingTypeComponent.prototype.createOrUpdateEvaluationType = function (settingType) {
        var _this = this;
        this.isSubmit = true;
        if (settingType.text) {
            switch (this.type) {
                case 'opportunity-steps':
                case 'customer-groups':
                case 'campaign-types':
                case 'event-types':
                case 'prospect-evaluations':
                case 'prospect-handler':
                case 'prospect-db':
                    this.dataService.createOrUpdateEvaluations(settingType, this.type).subscribe(function (data) {
                        _this.createSettingTypeSuccess(settingType);
                    }, function (err) {
                        _this.createSettingTypeErr(err, settingType);
                    });
                    break;
                case 'opportunitySource':
                case 'prospectSource':
                    this.dataService.createOrUpdateSettingTypeItem('', settingType).subscribe(function (data) {
                        _this.createSettingTypeSuccess(settingType);
                    }, function (err) {
                        _this.createSettingTypeErr(err, settingType);
                    });
                    break;
                case 'prospect-approach-channel':
                case 'campaign-approach-channel':
                    this.dataService.createOrUpdateApproachChannel(settingType, this.objName).subscribe(function (data) {
                        _this.createSettingTypeSuccess(settingType);
                    }, function (err) {
                        _this.createSettingTypeErr(err, settingType);
                    });
                    break;
                default:
                    break;
            }
        }
    };
    SettingTypeComponent.prototype.createSettingTypeSuccess = function (settingType) {
        this.isSubmit = false;
        this.isAddMoreEvaluation = true;
        if (settingType.id) {
            this.alertService.success("C\u1EADp nh\u1EADt " + this.typeStr + " th\u00E0nh c\u00F4ng!");
        }
        else {
            this.alertService.success("T\u1EA1o m\u1EDBi " + this.typeStr + " th\u00E0nh c\u00F4ng!");
        }
        settingType.edit = !settingType.edit;
        this.dataService.updateSettingData();
        this.getListEvaluations();
    };
    SettingTypeComponent.prototype.createSettingTypeErr = function (err, settingType) {
        var errors = JSON.parse(err._body);
        if (errors.error_message.includes('exists') && (settingType.text === this.evaluationName)) {
            settingType.edit = !settingType.edit;
        }
        else {
            if (errors.error_message.includes('exists')) {
                // tslint:disable-next-line:max-line-length
                this.alertService.error("T\u00EAn " + this.typeStr + " \u0111\u00E3 t\u1ED3n t\u1EA1i, vui l\u00F2ng t\u1EA1o t\u00EAn kh\u00E1c!");
            }
        }
    };
    SettingTypeComponent.prototype.deleteSettingTypeSuccess = function () {
        this.alertService.success("X\u00F3a " + this.typeStr + " th\u00E0nh c\u00F4ng!");
        this.dataService.updateSettingData();
        this.getListEvaluations();
        this.isAddMoreEvaluation = true;
    };
    SettingTypeComponent.prototype.closeModal = function () {
        this.modalRef.hide();
    };
    SettingTypeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-setting-type',
            template: __webpack_require__("../../../../../src/app/shared/components/setting-type/setting-type.component.html"),
            styles: [__webpack_require__("../../../../../src/app/shared/components/setting-type/setting-type.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services__["j" /* DataService */],
            __WEBPACK_IMPORTED_MODULE_2_ngx_bootstrap__["a" /* BsModalRef */],
            __WEBPACK_IMPORTED_MODULE_1__services__["g" /* ConfirmationService */],
            __WEBPACK_IMPORTED_MODULE_1__services__["b" /* AlertService */]])
    ], SettingTypeComponent);
    return SettingTypeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/shared/components/shared-components.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedComponentsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__validation_summary_validation_summary_component__ = __webpack_require__("../../../../../src/app/shared/components/validation-summary/validation-summary.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__list_errors_index__ = __webpack_require__("../../../../../src/app/shared/components/list-errors/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__confirmation_popup_confirmation_popup_component__ = __webpack_require__("../../../../../src/app/shared/components/confirmation-popup/confirmation-popup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pagination_pagination_component__ = __webpack_require__("../../../../../src/app/shared/components/pagination/pagination.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pipes_shared_pipes_module__ = __webpack_require__("../../../../../src/app/shared/pipes/shared-pipes.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__footer_copyright_footer_copyright_component__ = __webpack_require__("../../../../../src/app/shared/components/footer-copyright/footer-copyright.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__convert_prospect2_convert_prospect2_component__ = __webpack_require__("../../../../../src/app/shared/components/convert-prospect2/convert-prospect2.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ngx_translate_core__ = __webpack_require__("../../../../@ngx-translate/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__confirmation_popup_call_away_confirmation_popup_call_away_component__ = __webpack_require__("../../../../../src/app/shared/components/confirmation-popup-call-away/confirmation-popup-call-away.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__feng_shuis_infor_feng_shuis_infor_component__ = __webpack_require__("../../../../../src/app/shared/components/feng-shuis-infor/feng-shuis-infor.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__email_editor_email_editor_component__ = __webpack_require__("../../../../../src/app/shared/components/email-editor/email-editor.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_ng2_ckeditor__ = __webpack_require__("../../../../ng2-ckeditor/lib/ng2-ckeditor.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_ng2_ckeditor___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_ng2_ckeditor__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_ngx_chips__ = __webpack_require__("../../../../ngx-chips/esm5/ngx-chips.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_ngx_spinner__ = __webpack_require__("../../../../ngx-spinner/ngx-spinner.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_ngx_spinner___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_17_ngx_spinner__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__confirmation_routing_popup_confirmation_routing_popup_component__ = __webpack_require__("../../../../../src/app/shared/components/confirmation-routing-popup/confirmation-routing-popup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__campaign_table_campaign_table_component__ = __webpack_require__("../../../../../src/app/shared/components/campaign-table/campaign-table.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_angular_datatables__ = __webpack_require__("../../../../angular-datatables/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__setting_type_setting_type_component__ = __webpack_require__("../../../../../src/app/shared/components/setting-type/setting-type.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23_ngx_loading__ = __webpack_require__("../../../../ngx-loading/ngx-loading/ngx-loading.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
























var SharedComponentsModule = /** @class */ (function () {
    function SharedComponentsModule() {
    }
    SharedComponentsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_6__pipes_shared_pipes_module__["a" /* SharedPipesModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_9__angular_forms__["ReactiveFormsModule"],
                __WEBPACK_IMPORTED_MODULE_10__ngx_translate_core__["b" /* TranslateModule */],
                __WEBPACK_IMPORTED_MODULE_11__ng_bootstrap_ng_bootstrap__["e" /* NgbDropdownModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_11__ng_bootstrap_ng_bootstrap__["b" /* NgbAlertModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_11__ng_bootstrap_ng_bootstrap__["d" /* NgbCollapseModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_11__ng_bootstrap_ng_bootstrap__["g" /* NgbModalModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_23_ngx_loading__["a" /* NgxLoadingModule */].forRoot({
                    animationType: __WEBPACK_IMPORTED_MODULE_23_ngx_loading__["b" /* ngxLoadingAnimationTypes */].threeBounce,
                    backdropBackgroundColour: 'rgba(0,0,0,0)',
                    backdropBorderRadius: '3px',
                    primaryColour: '#00a0e3',
                    secondaryColour: '#00a0e3',
                    tertiaryColour: '#00a0e3'
                }),
                __WEBPACK_IMPORTED_MODULE_15_ng2_ckeditor__["CKEditorModule"],
                __WEBPACK_IMPORTED_MODULE_16_ngx_chips__["a" /* TagInputModule */],
                __WEBPACK_IMPORTED_MODULE_17_ngx_spinner__["NgxSpinnerModule"],
                __WEBPACK_IMPORTED_MODULE_20_angular_datatables__["b" /* DataTablesModule */],
                __WEBPACK_IMPORTED_MODULE_21__angular_router__["RouterModule"]
            ],
            declarations: [
                // AlertComponent,
                __WEBPACK_IMPORTED_MODULE_2__validation_summary_validation_summary_component__["a" /* ValidationSummaryComponent */],
                __WEBPACK_IMPORTED_MODULE_3__list_errors_index__["a" /* ListErrorsComponent */],
                __WEBPACK_IMPORTED_MODULE_4__confirmation_popup_confirmation_popup_component__["a" /* ConfirmationPopupComponent */],
                __WEBPACK_IMPORTED_MODULE_5__pagination_pagination_component__["a" /* PaginationComponent */],
                __WEBPACK_IMPORTED_MODULE_7__footer_copyright_footer_copyright_component__["a" /* FooterCopyrightComponent */],
                __WEBPACK_IMPORTED_MODULE_8__convert_prospect2_convert_prospect2_component__["a" /* ConvertProspect2Component */],
                __WEBPACK_IMPORTED_MODULE_12__confirmation_popup_call_away_confirmation_popup_call_away_component__["a" /* ConfirmationPopupCallAwayComponent */],
                __WEBPACK_IMPORTED_MODULE_13__feng_shuis_infor_feng_shuis_infor_component__["a" /* FengShuisInforComponent */],
                __WEBPACK_IMPORTED_MODULE_14__email_editor_email_editor_component__["a" /* EmailEditorComponent */],
                __WEBPACK_IMPORTED_MODULE_18__confirmation_routing_popup_confirmation_routing_popup_component__["a" /* ConfirmationRoutingPopupComponent */],
                __WEBPACK_IMPORTED_MODULE_19__campaign_table_campaign_table_component__["a" /* CampaignTableComponent */],
                __WEBPACK_IMPORTED_MODULE_22__setting_type_setting_type_component__["a" /* SettingTypeComponent */],
            ],
            exports: [
                // AlertComponent,
                __WEBPACK_IMPORTED_MODULE_2__validation_summary_validation_summary_component__["a" /* ValidationSummaryComponent */],
                __WEBPACK_IMPORTED_MODULE_3__list_errors_index__["a" /* ListErrorsComponent */],
                __WEBPACK_IMPORTED_MODULE_4__confirmation_popup_confirmation_popup_component__["a" /* ConfirmationPopupComponent */],
                __WEBPACK_IMPORTED_MODULE_5__pagination_pagination_component__["a" /* PaginationComponent */],
                __WEBPACK_IMPORTED_MODULE_7__footer_copyright_footer_copyright_component__["a" /* FooterCopyrightComponent */],
                __WEBPACK_IMPORTED_MODULE_8__convert_prospect2_convert_prospect2_component__["a" /* ConvertProspect2Component */],
                __WEBPACK_IMPORTED_MODULE_12__confirmation_popup_call_away_confirmation_popup_call_away_component__["a" /* ConfirmationPopupCallAwayComponent */],
                __WEBPACK_IMPORTED_MODULE_15_ng2_ckeditor__["CKEditorModule"],
                __WEBPACK_IMPORTED_MODULE_16_ngx_chips__["a" /* TagInputModule */],
                __WEBPACK_IMPORTED_MODULE_17_ngx_spinner__["NgxSpinnerModule"],
                __WEBPACK_IMPORTED_MODULE_19__campaign_table_campaign_table_component__["a" /* CampaignTableComponent */],
                __WEBPACK_IMPORTED_MODULE_22__setting_type_setting_type_component__["a" /* SettingTypeComponent */]
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_4__confirmation_popup_confirmation_popup_component__["a" /* ConfirmationPopupComponent */],
                __WEBPACK_IMPORTED_MODULE_18__confirmation_routing_popup_confirmation_routing_popup_component__["a" /* ConfirmationRoutingPopupComponent */],
                __WEBPACK_IMPORTED_MODULE_8__convert_prospect2_convert_prospect2_component__["a" /* ConvertProspect2Component */],
                __WEBPACK_IMPORTED_MODULE_12__confirmation_popup_call_away_confirmation_popup_call_away_component__["a" /* ConfirmationPopupCallAwayComponent */],
                __WEBPACK_IMPORTED_MODULE_13__feng_shuis_infor_feng_shuis_infor_component__["a" /* FengShuisInforComponent */],
                __WEBPACK_IMPORTED_MODULE_22__setting_type_setting_type_component__["a" /* SettingTypeComponent */]
            ]
        })
    ], SharedComponentsModule);
    return SharedComponentsModule;
}());



/***/ }),

/***/ "../../../../../src/app/shared/components/validation-summary/validation-summary.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"validationMessages && validationMessages.length\">\n    <div>\n        <div class=\"validation-summary\">\n            <ul class=\"validation-summary-errors\">\n                <li *ngFor=\"let message of validationMessages\">\n                    {{message}}\n                </li>\n            </ul>\n        </div>\n\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/shared/components/validation-summary/validation-summary.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".validation-summary {\n  text-align: left;\n  margin-bottom: 1em;\n  background-color: #ffd7db;\n  border-color: #ea9a9a;\n  border-radius: 3px;\n  border: 1px #ea9a9a solid;\n  color: #985c5c;\n  margin-bottom: 20px;\n  padding: .5em 1em;\n  font-size: 85%; }\n  .validation-summary .validation-summary-errors {\n    margin: 0; }\n\n.success-message {\n  margin-bottom: 1em;\n  background-color: #dff0d8;\n  border-color: #ea9a9a;\n  border-radius: 3px;\n  border: 1px #d6e9c6 solid;\n  color: #3c763d;\n  margin-bottom: 20px;\n  padding: .5em 1em;\n  font-size: 85%; }\n  .success-message .validation-summary-errors {\n    margin: 0; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/components/validation-summary/validation-summary.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ValidationSummaryComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ValidationSummaryComponent = /** @class */ (function () {
    function ValidationSummaryComponent() {
    }
    ValidationSummaryComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Array)
    ], ValidationSummaryComponent.prototype, "validationMessages", void 0);
    ValidationSummaryComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-validation-summary',
            template: __webpack_require__("../../../../../src/app/shared/components/validation-summary/validation-summary.component.html"),
            styles: [__webpack_require__("../../../../../src/app/shared/components/validation-summary/validation-summary.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ValidationSummaryComponent);
    return ValidationSummaryComponent;
}());



/***/ }),

/***/ "../../../../../src/app/shared/configs/api-url.config.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return API_URL; });
var API_URL = {
    GET_BRANCHES: '/branchs',
    GET_SALUTATIONS: '/list/prospect-names',
    GET_PROSPECT_SOURCES: '/list/prospect-sources',
    GET_BUSINESS: '/list/prospect-business',
    GET_PROSPECT_EVALUATIONS: '/list/prospect-evaluations',
    GET_PROSPECT_STATUS: '/list/prospect-status',
    GET_CUSTOMER_RESROURCE: '/list/customer-resources',
    GET_PROSPECT_HANDLER: '/list/prospect-handler',
    GET_PRODUCT_FUNITURE_GROUP: '/product-department/01/product-groups',
    GET_PRODUCT_FUNITURE_MODEL: '/product-department/01/attribute/01/values',
    GET_DBS: '/list/prospect-db',
    GET_APPROACHCHANEL: '/list/prospect-approach-channel'
};


/***/ }),

/***/ "../../../../../src/app/shared/configs/common.config.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return COMMON_CONSTANTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return USER_GROUP_ROLE; });
var COMMON_CONSTANTS = {
    SearchDelayTimeInMs: 600,
};
var USER_GROUP_ROLE = {
    SuperAdmin: 'SuperAdmin',
    Admin: 'Admin',
    Normal: 'Normal'
};


/***/ }),

/***/ "../../../../../src/app/shared/configs/datatable.config.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DATATABLE_CONFIG; });
var DATATABLE_CONFIG = {
    dom: '<<t><"footer-wrapper">>',
    pagingType: 'full_numbers',
    pageLength: 10,
    language: {
        infoEmpty: 'Không có dữ liệu',
        sProcessing: 'Đang xử lý...',
        sLengthMenu: 'Số dòng/trang: _MENU_',
        emptyTable: 'Không có dữ liệu',
        zeroRecords: 'Không có dữ liệu',
        sZeroRecord: 'Hiển thị 0 dòng',
        sInfo: 'Hiển thị _START_ - _END_ của _TOTAL_',
        sInfoEmpty: 'Hiển thị 0 dòng',
        sInfoFiltered: '(được lọc từ _MAX_ mục)',
        sInfoPostFix: '',
        sSearch: 'Tìm:',
        sUrl: '',
        oPaginate: {
            'sFirst': '<i class="fa fa-angle-double-left" aria-hidden="true"></i>',
            'sPrevious': '<i class="fa fa-angle-left" aria-hidden="true"></i>',
            'sNext': '<i class="fa fa-angle-right" aria-hidden="true"></i>',
            'sLast': '<i class="fa fa-angle-double-right" aria-hidden="true"></i>'
        },
    },
    ext: {
        errMode: 'none',
    },
    ordering: false,
    paging: false,
    searching: false,
    lengthChange: false,
    processing: false,
    select: {
        style: 'os',
        selector: 'td:first-child'
    },
};


/***/ }),

/***/ "../../../../../src/app/shared/configs/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__datatable_config__ = __webpack_require__("../../../../../src/app/shared/configs/datatable.config.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__datatable_config__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_url_config__ = __webpack_require__("../../../../../src/app/shared/configs/api-url.config.ts");
/* unused harmony namespace reexport */




/***/ }),

/***/ "../../../../../src/app/shared/constants/permission.enum.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Permission; });
var Permission;
(function (Permission) {
    Permission["ViewProspectInfo"] = "ProspectViewProspectInformation";
})(Permission || (Permission = {}));


/***/ }),

/***/ "../../../../../src/app/shared/directives/input-money.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InputMoneyDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pipes_vn_currency_pipe_module__ = __webpack_require__("../../../../../src/app/shared/pipes/vn-currency-pipe.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var InputMoneyDirective = /** @class */ (function () {
    function InputMoneyDirective(el, renderer, viewContainer, ngControl, vnCurrencyPipe) {
        this.el = el;
        this.renderer = renderer;
        this.viewContainer = viewContainer;
        this.ngControl = ngControl;
        this.vnCurrencyPipe = vnCurrencyPipe;
        // this.renderer.setElementAttribute(this.el.nativeElement, 'maxlength', PHONE_NUMBER_MAX_LENGHT);
        this.renderer.setElementAttribute(this.el.nativeElement, 'onkeypress', 'return event.charCode >= 48 && event.charCode <= 57');
        // this.renderer.setElementAttribute(this.el.nativeElement, 'type', 'number');
        this.renderer.setElementAttribute(this.el.nativeElement, 'maxlength', '13');
    }
    InputMoneyDirective.prototype.ngOnInit = function () {
        this.ngControl.valueAccessor.writeValue(this.vnCurrencyPipe.transform(this.ngControl.value));
    };
    // ngAfterViewInit() {
    //     this.ngControl.valueAccessor.writeValue(this.vnCurrencyPipe.transform(value));
    // }
    InputMoneyDirective.prototype.formatInputValue = function (value) {
        this.ngControl.valueAccessor.writeValue(this.vnCurrencyPipe.transform(value));
    };
    InputMoneyDirective.prototype.formatToNumber = function (value) {
        this.ngControl.valueAccessor.writeValue(this.vnCurrencyPipe.parse(value));
    };
    InputMoneyDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
            selector: '[appInputMoney]',
            // tslint:disable-next-line:use-host-property-decorator
            host: {
                '(blur)': 'formatInputValue($event.target.value)',
                '(focus)': 'formatToNumber($event.target.value)',
            }
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["NgControl"],
            __WEBPACK_IMPORTED_MODULE_2__pipes_vn_currency_pipe_module__["a" /* VnCurrencyPipe */]])
    ], InputMoneyDirective);
    return InputMoneyDirective;
}());



/***/ }),

/***/ "../../../../../src/app/shared/directives/input-number.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InputNumberDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var InputNumberDirective = /** @class */ (function () {
    function InputNumberDirective(el, renderer, viewContainer, ngControl) {
        this.el = el;
        this.renderer = renderer;
        this.viewContainer = viewContainer;
        this.ngControl = ngControl;
        // this.renderer.setElementAttribute(this.el.nativeElement, 'maxlength', PHONE_NUMBER_MAX_LENGHT);
        // this.renderer.setElementAttribute(this.el.nativeElement, 'onkeypress', 'return event.charCode >= 48 && event.charCode <= 57');
    }
    InputNumberDirective.prototype.ngOnInit = function () {
    };
    InputNumberDirective.prototype.getKey = function (e) {
        return e.keyCode || e.charCode;
    };
    InputNumberDirective.prototype.getCharCode = function (e) {
        return e.charCode || e.keyCode || e.which;
    };
    InputNumberDirective.prototype.onKeyPress = function (e) {
        if (e.ctrlKey || e.altKey) {
            return;
        }
        var k = this.getKey(e);
        var c = this.getCharCode(e);
        var cc = String.fromCharCode(c);
        var ok = true;
        ok = /[\d\.]/.test(cc);
        if (!ok) {
            e.preventDefault();
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('keypress', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [KeyboardEvent]),
        __metadata("design:returntype", void 0)
    ], InputNumberDirective.prototype, "onKeyPress", null);
    InputNumberDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({ selector: '[appInputNumber]' }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["NgControl"]])
    ], InputNumberDirective);
    return InputNumberDirective;
}());



/***/ }),

/***/ "../../../../../src/app/shared/directives/phone-number-callable.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PhoneNumberCallableDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_call_center_service__ = __webpack_require__("../../../../../src/app/shared/services/call-center.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_confirmation_service__ = __webpack_require__("../../../../../src/app/shared/services/confirmation.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PhoneNumberCallableDirective = /** @class */ (function () {
    function PhoneNumberCallableDirective(el, confirmationService, callCenterService) {
        this.confirmationService = confirmationService;
        this.callCenterService = callCenterService;
        this.element = el;
        this.element.nativeElement.style.color = '#478993';
        this.element.nativeElement.style.cursor = 'pointer';
        this.element.nativeElement.title = 'Bấm vào để gọi';
    }
    PhoneNumberCallableDirective.prototype.callAway = function () {
        var _this = this;
        this.phoneNumber = this.element.nativeElement.innerText;
        if (this.phoneNumber) {
            this.confirmationService
                .confirmCallAway("B\u1EA1n c\u00F3 mu\u1ED1n th\u1EF1c hi\u1EC7n cu\u1ED9c g\u1ECDi \u0111\u1EBFn s\u1ED1 \u0111i\u1EC7n tho\u1EA1i : " + this.phoneNumber + " kh\u00F4ng ?", function () {
                _this.callCenterService.call(_this.phoneNumber).subscribe();
            });
        }
        if (this.phone) {
            this.confirmationService
                .confirmCallAway("B\u1EA1n c\u00F3 mu\u1ED1n th\u1EF1c hi\u1EC7n cu\u1ED9c g\u1ECDi \u0111\u1EBFn s\u1ED1 \u0111i\u1EC7n tho\u1EA1i : " + this.phone + " kh\u00F4ng ?", function () {
                _this.callCenterService.call(_this.phone).subscribe();
            });
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('appPhoneNumberCallable'),
        __metadata("design:type", String)
    ], PhoneNumberCallableDirective.prototype, "phone", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('click'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], PhoneNumberCallableDirective.prototype, "callAway", null);
    PhoneNumberCallableDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
            selector: '[appPhoneNumberCallable]'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"],
            __WEBPACK_IMPORTED_MODULE_2__services_confirmation_service__["a" /* ConfirmationService */],
            __WEBPACK_IMPORTED_MODULE_1__services_call_center_service__["a" /* CallCenterService */]])
    ], PhoneNumberCallableDirective);
    return PhoneNumberCallableDirective;
}());



/***/ }),

/***/ "../../../../../src/app/shared/directives/row-hover.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RowHoverDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RowHoverDirective = /** @class */ (function () {
    function RowHoverDirective(el) {
        this.el = el;
    }
    RowHoverDirective.prototype.onMouseEnter = function () {
        this.highlight(true);
    };
    RowHoverDirective.prototype.onMouseLeave = function () {
        this.highlight(false);
    };
    RowHoverDirective.prototype.highlight = function (copy) {
        var row = this.el.nativeElement;
        var tdFirst = row.firstElementChild;
        var tdLast = row.lastElementChild;
        if (copy) {
            this.oldStyle = tdFirst.style.backgroundColor;
        }
        tdFirst.style.backgroundColor = 'whitesmoke';
        tdLast.style.backgroundColor = 'whitesmoke';
        if (!copy) {
            tdFirst.style.backgroundColor = this.oldStyle;
            tdLast.style.backgroundColor = this.oldStyle;
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('mouseenter'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], RowHoverDirective.prototype, "onMouseEnter", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('mouseleave'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], RowHoverDirective.prototype, "onMouseLeave", null);
    RowHoverDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
            selector: '[appRowHover]'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]])
    ], RowHoverDirective);
    return RowHoverDirective;
}());



/***/ }),

/***/ "../../../../../src/app/shared/directives/same-height-directive.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SameHeightDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SameHeightDirective = /** @class */ (function () {
    function SameHeightDirective(el) {
        this.el = el;
    }
    SameHeightDirective.prototype.ngAfterViewChecked = function () {
        // call our matchHeight function here later
        this.matchHeight(this.el.nativeElement, this.appSameHeight);
    };
    SameHeightDirective.prototype.onResize = function () {
        // call our matchHeight function here later
        this.matchHeight(this.el.nativeElement, this.appSameHeight);
    };
    SameHeightDirective.prototype.matchHeight = function (parent, className) {
        // match width logic here
        if (!parent) {
            return;
        }
        var children = document.getElementsByClassName(className);
        // find max width
        var maxHeight = parent.offsetHeight;
        if (!children) {
            return;
        }
        // reset all children width
        Array.from(children).forEach(function (x) {
            x.style.height = 'initial';
        });
        // gather all width
        var itemwidths = Array.from(children).map(function (x) { return x.getBoundingClientRect().height; });
        // apply max width
        Array.from(children).forEach(function (x) { return (x.style.height = maxHeight + "px"); });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], SameHeightDirective.prototype, "appSameHeight", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('window:resize'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], SameHeightDirective.prototype, "onResize", null);
    SameHeightDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
            selector: '[appSameHeight]'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]])
    ], SameHeightDirective);
    return SameHeightDirective;
}());



/***/ }),

/***/ "../../../../../src/app/shared/directives/shared-directives.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedDirectivesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__input_number_directive__ = __webpack_require__("../../../../../src/app/shared/directives/input-number.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__input_money_directive__ = __webpack_require__("../../../../../src/app/shared/directives/input-money.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pipes_vn_currency_pipe_module__ = __webpack_require__("../../../../../src/app/shared/pipes/vn-currency-pipe.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__phone_number_callable_directive__ = __webpack_require__("../../../../../src/app/shared/directives/phone-number-callable.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__same_height_directive_directive__ = __webpack_require__("../../../../../src/app/shared/directives/same-height-directive.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__row_hover_directive__ = __webpack_require__("../../../../../src/app/shared/directives/row-hover.directive.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var SharedDirectivesModule = /** @class */ (function () {
    function SharedDirectivesModule() {
    }
    SharedDirectivesModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__input_number_directive__["a" /* InputNumberDirective */],
                __WEBPACK_IMPORTED_MODULE_3__input_money_directive__["a" /* InputMoneyDirective */],
                __WEBPACK_IMPORTED_MODULE_5__phone_number_callable_directive__["a" /* PhoneNumberCallableDirective */],
                __WEBPACK_IMPORTED_MODULE_6__same_height_directive_directive__["a" /* SameHeightDirective */],
                __WEBPACK_IMPORTED_MODULE_7__row_hover_directive__["a" /* RowHoverDirective */],
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__input_number_directive__["a" /* InputNumberDirective */],
                __WEBPACK_IMPORTED_MODULE_3__input_money_directive__["a" /* InputMoneyDirective */],
                __WEBPACK_IMPORTED_MODULE_5__phone_number_callable_directive__["a" /* PhoneNumberCallableDirective */],
                __WEBPACK_IMPORTED_MODULE_6__same_height_directive_directive__["a" /* SameHeightDirective */],
                __WEBPACK_IMPORTED_MODULE_7__row_hover_directive__["a" /* RowHoverDirective */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__pipes_vn_currency_pipe_module__["a" /* VnCurrencyPipe */],
            ]
        })
    ], SharedDirectivesModule);
    return SharedDirectivesModule;
}());



/***/ }),

/***/ "../../../../../src/app/shared/helpers/convert-number.helper.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var ConvertNumber = /** @class */ (function () {
    function ConvertNumber() {
    }
    ConvertNumber.scientificNotationtoNumber = function (value) {
        if (Math.abs(value) < 1.0) {
            var euler = parseInt(value.toString().split('e-')[1]);
            if (euler) {
                value *= Math.pow(10, euler - 1);
                value = '0.' + (new Array(euler)).join('0') + value.toString().substring(2);
            }
        }
        else {
            var euler = parseInt(value.toString().split('+')[1]);
            if (euler > 20) {
                euler -= 20;
                value /= Math.pow(10, euler);
                value += (new Array(euler + 1)).join('0');
            }
        }
        return value;
    };
    return ConvertNumber;
}());
/* harmony default export */ __webpack_exports__["a"] = (ConvertNumber);


/***/ }),

/***/ "../../../../../src/app/shared/helpers/custom-validator.helper.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");

var PHONE_NUMBER_MIN_LENGTH = 10;
var PHONE_NUMBER_MAX_LENGTH = 20;
var FAX_NUMBER_MIN_LENGTH = 10;
var FAX_NUMBER_MAX_LENGTH = 20;
var PASSWORD_MIN_LENGTH = 6;
var TAX_NUMBER_MIN_LENGTH = 10;
var TAX_NUMBER_MAX_LENGTH = 13;
var CustomValidator = /** @class */ (function () {
    function CustomValidator() {
    }
    CustomValidator.emailOrEmpty = function (control) {
        return (control.value === '' || control.value === null) ? null : __WEBPACK_IMPORTED_MODULE_0__angular_forms__["Validators"].email(control);
    };
    CustomValidator.required = function (control) {
        return (control.value === '' || control.value === null || control.value.trim() === '')
            ? {
                required: {
                    valid: false
                }
            }
            : null;
    };
    CustomValidator.website = function (control) {
        var WEBSITE_REGEX = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/gm;
        return (WEBSITE_REGEX.test(control.value) || (control.value === '' || control.value === null)) ? null : {
            website: {
                valid: false
            }
        };
    };
    CustomValidator.probability = function (control) {
        return ((control.value === '' || control.value === null) || (control.value >= 0 && control.value <= 100)) ? null : {
            probability: {
                valid: false
            }
        };
    };
    CustomValidator.phoneNumber = function (control) {
        return (CustomValidator.isNullOrEmpty(control.value)
            || (control.value.length >= PHONE_NUMBER_MIN_LENGTH) && (control.value.length <= PHONE_NUMBER_MAX_LENGTH))
            ? null
            : {
                phoneNumber: {
                    valid: false
                }
            };
    };
    CustomValidator.faxNumber = function (control) {
        return (CustomValidator.isNullOrEmpty(control.value)
            || (control.value.length >= FAX_NUMBER_MIN_LENGTH) && (control.value.length <= FAX_NUMBER_MAX_LENGTH))
            ? null
            : {
                faxNumber: {
                    valid: false
                }
            };
    };
    CustomValidator.taxNumber = function (control) {
        return (CustomValidator.isNullOrEmpty(control.value)
            || ((control.value.length >= TAX_NUMBER_MIN_LENGTH) && (control.value.length <= TAX_NUMBER_MAX_LENGTH)))
            ? null
            : {
                taxNumber: {
                    valid: false
                }
            };
    };
    CustomValidator.password = function (control) {
        return (CustomValidator.isNullOrEmpty(control.value)
            || (control.value.length >= PASSWORD_MIN_LENGTH))
            ? null
            : {
                password: {
                    valid: false
                }
            };
    };
    CustomValidator.isNullOrEmpty = function (value) {
        return value === undefined || value === null || value === '';
    };
    CustomValidator.requiredArray = function (control) {
        return (control.value != null && control.value.length === 0)
            ? {
                required: {
                    valid: false
                }
            }
            : null;
    };
    return CustomValidator;
}());
/* harmony default export */ __webpack_exports__["a"] = (CustomValidator);


/***/ }),

/***/ "../../../../../src/app/shared/helpers/datetime-convert-helper.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_moment__ = __webpack_require__("../../../../moment/moment.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_moment__);

var DateTimeConvertHelper = /** @class */ (function () {
    function DateTimeConvertHelper() {
    }
    DateTimeConvertHelper.fromDtObjectToTimestamp = function (dtObject) {
        return dtObject ? +dtObject : null;
    };
    DateTimeConvertHelper.fromTimestampToDtObject = function (timestamp) {
        return timestamp ? __WEBPACK_IMPORTED_MODULE_0_moment__(timestamp).toDate() : null;
    };
    DateTimeConvertHelper.fromTimestampToDtStr = function (timestamp) {
        return __WEBPACK_IMPORTED_MODULE_0_moment__(timestamp).format(this.dateFormat);
    };
    DateTimeConvertHelper.dateFormat = 'DD/MM/YYYY';
    DateTimeConvertHelper.datetimeFormat = 'DD/MM/YYYY HH:mm';
    DateTimeConvertHelper.timeFormat = 'HH:mm';
    return DateTimeConvertHelper;
}());
/* harmony default export */ __webpack_exports__["a"] = (DateTimeConvertHelper);


/***/ }),

/***/ "../../../../../src/app/shared/helpers/utils.helper.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var Utils = /** @class */ (function () {
    function Utils() {
    }
    Utils.capitalizeFirstLetter = function (text) {
        return text ? text.charAt(0).toUpperCase() + text.slice(1) : '';
    };
    Utils.parseAssignTo = function (assignToFormValue) {
        if (!assignToFormValue) {
            return null;
        }
        return {
            assignToType: assignToFormValue.split('_')[0],
            assignToId: assignToFormValue.split('_')[1],
        };
    };
    Utils.isNullOrEmpty = function (data) {
        if (data.trim()) {
            return true;
        }
        else {
            return false;
        }
    };
    Utils.getLocation = function (data, type) {
        if (data.type === type) {
            return data.name;
        }
        else {
            if (data.parent) {
                return this.getLocation(data.parent, type);
            }
            else {
                return '';
            }
        }
    };
    Utils.getLocationId = function (data, type) {
        if (data.type === type) {
            return data.id;
        }
        else {
            if (data.parent) {
                return this.getLocationId(data.parent, type);
            }
            else {
                return 0;
            }
        }
    };
    return Utils;
}());
/* harmony default export */ __webpack_exports__["a"] = (Utils);


/***/ }),

/***/ "../../../../../src/app/shared/helpers/validation.helper.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var ValidationHelper = /** @class */ (function () {
    function ValidationHelper() {
    }
    ValidationHelper.getInvalidMessages = function (form, formErrors) {
        if (!form) {
            return;
        }
        var errorMessages = [];
        for (var field in formErrors) {
            formErrors[field] = '';
            var control = form.get(field);
            if (control && !control.valid) {
                // const messages = validationMessages[field];
                // tslint:disable-next-line:forin
                for (var key in control.errors) {
                    if (key === 'maxlength') {
                        formErrors[field] += this.validationMessages[key] + control.errors[key].requiredLength + ' ký tự';
                    }
                    else {
                        formErrors[field] += this.validationMessages[key] + '';
                    }
                }
            }
        }
        for (var key in formErrors) {
            if (formErrors.hasOwnProperty(key) && formErrors[key].length > 0) {
                errorMessages.push(formErrors[key]);
            }
        }
        return errorMessages;
    };
    ValidationHelper.validateForm = function (form, formErrors) {
        return true;
    };
    ValidationHelper.validationMessages = {
        required: 'Trường này là bắt buộc nhập',
        email: 'Email không đúng định dạng',
        website: 'Website không đúng định dạng',
        probability: 'Giá trị phải nằm trong khoảng từ 0-100',
        phoneNumber: 'Số điện thoại phải có từ 10 đến 20 chữ số',
        faxNumber: 'Fax phải có từ 10 đến 20 chữ số',
        password: 'Mật khẩu phải có ít nhất 6 kí tự',
        taxNumber: 'Mã số thuế phải có từ 10 đến 13 chữ số',
        maxlength: 'Truờng này phải nhỏ hơn '
    };
    return ValidationHelper;
}());
/* harmony default export */ __webpack_exports__["a"] = (ValidationHelper);


/***/ }),

/***/ "../../../../../src/app/shared/models/activity/activity.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActivityModel; });
var ActivityModel = /** @class */ (function () {
    function ActivityModel() {
    }
    return ActivityModel;
}());



/***/ }),

/***/ "../../../../../src/app/shared/models/campaign/campaign-filter.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CampaignFilter; });
var CampaignFilter = /** @class */ (function () {
    function CampaignFilter() {
        this.type = null;
        this.campaignStatus = null;
        this.assignToGroup = null;
        this.assignTo = null;
    }
    return CampaignFilter;
}());



/***/ }),

/***/ "../../../../../src/app/shared/models/campaign/campaign-list-item.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export CampaignListItem */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__checkbox_selected_model__ = __webpack_require__("../../../../../src/app/shared/models/checkbox-selected.model.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var CampaignListItem = /** @class */ (function (_super) {
    __extends(CampaignListItem, _super);
    function CampaignListItem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return CampaignListItem;
}(__WEBPACK_IMPORTED_MODULE_0__checkbox_selected_model__["a" /* CheckboxSelection */]));



/***/ }),

/***/ "../../../../../src/app/shared/models/campaign/campaign.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CampaignModel; });
var CampaignModel = /** @class */ (function () {
    function CampaignModel() {
    }
    Object.defineProperty(CampaignModel.prototype, "prospects", {
        // prospects: ProspectModel[];
        // customers: CustomerModel[];
        // contacts: ContactModel[];
        get: function () {
            return this.relatedToType === 'Prospect' ? this.relatedList.map(function (i) { return i.prospect; }) : [];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CampaignModel.prototype, "customers", {
        get: function () {
            return this.relatedToType === 'Customer' ? this.relatedList.map(function (i) { return i.customer; }) : [];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CampaignModel.prototype, "contacts", {
        get: function () {
            return this.relatedToType === 'Contact' ? this.relatedList.map(function (i) { return i.contact; }) : [];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CampaignModel.prototype, "approachChannelStr", {
        get: function () {
            return this.approachChannels && this.approachChannels.length > 0 ? this.approachChannels.map(function (i) { return i['name']; }).join(', ') : '';
        },
        enumerable: true,
        configurable: true
    });
    return CampaignModel;
}());



/***/ }),

/***/ "../../../../../src/app/shared/models/checkbox-selected.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CheckboxSelection; });
var CheckboxSelection = /** @class */ (function () {
    function CheckboxSelection() {
    }
    return CheckboxSelection;
}());



/***/ }),

/***/ "../../../../../src/app/shared/models/contact/contact-list-item.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export ContactListItem */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__checkbox_selected_model__ = __webpack_require__("../../../../../src/app/shared/models/checkbox-selected.model.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var ContactListItem = /** @class */ (function (_super) {
    __extends(ContactListItem, _super);
    function ContactListItem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return ContactListItem;
}(__WEBPACK_IMPORTED_MODULE_0__checkbox_selected_model__["a" /* CheckboxSelection */]));



/***/ }),

/***/ "../../../../../src/app/shared/models/contact/contact.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactModel; });
var ContactModel = /** @class */ (function () {
    function ContactModel() {
    }
    return ContactModel;
}());



/***/ }),

/***/ "../../../../../src/app/shared/models/customer/customer-list-item.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomerListItem; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__checkbox_selected_model__ = __webpack_require__("../../../../../src/app/shared/models/checkbox-selected.model.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var CustomerListItem = /** @class */ (function (_super) {
    __extends(CustomerListItem, _super);
    function CustomerListItem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return CustomerListItem;
}(__WEBPACK_IMPORTED_MODULE_0__checkbox_selected_model__["a" /* CheckboxSelection */]));



/***/ }),

/***/ "../../../../../src/app/shared/models/customer/customer.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomerModel; });
var CustomerModel = /** @class */ (function () {
    function CustomerModel() {
    }
    return CustomerModel;
}());



/***/ }),

/***/ "../../../../../src/app/shared/models/email-model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmailModel; });
var EmailModel = /** @class */ (function () {
    function EmailModel() {
    }
    return EmailModel;
}());



/***/ }),

/***/ "../../../../../src/app/shared/models/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__paging_result_model__ = __webpack_require__("../../../../../src/app/shared/models/paging-result.model.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_0__paging_result_model__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__activity_activity_model__ = __webpack_require__("../../../../../src/app/shared/models/activity/activity.model.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__activity_activity_model__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__campaign_campaign_model__ = __webpack_require__("../../../../../src/app/shared/models/campaign/campaign.model.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_2__campaign_campaign_model__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__campaign_campaign_list_item_model__ = __webpack_require__("../../../../../src/app/shared/models/campaign/campaign-list-item.model.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__customer_customer_model__ = __webpack_require__("../../../../../src/app/shared/models/customer/customer.model.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_4__customer_customer_model__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__customer_customer_list_item_model__ = __webpack_require__("../../../../../src/app/shared/models/customer/customer-list-item.model.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_5__customer_customer_list_item_model__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__contact_contact_model__ = __webpack_require__("../../../../../src/app/shared/models/contact/contact.model.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_6__contact_contact_model__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__contact_contact_list_item_model__ = __webpack_require__("../../../../../src/app/shared/models/contact/contact-list-item.model.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__opportunity_opportunity_model__ = __webpack_require__("../../../../../src/app/shared/models/opportunity/opportunity.model.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_8__opportunity_opportunity_model__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__prospect_prospect_model__ = __webpack_require__("../../../../../src/app/shared/models/prospect/prospect.model.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "i", function() { return __WEBPACK_IMPORTED_MODULE_9__prospect_prospect_model__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__prospect_prospect_list_item_model__ = __webpack_require__("../../../../../src/app/shared/models/prospect/prospect-list-item.model.ts");
/* unused harmony namespace reexport */
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__prospect_prospect_filter_model__ = __webpack_require__("../../../../../src/app/shared/models/prospect/prospect-filter.model.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "h", function() { return __WEBPACK_IMPORTED_MODULE_11__prospect_prospect_filter_model__["a"]; });















/***/ }),

/***/ "../../../../../src/app/shared/models/opportunity/opportunity.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OpportunityModel; });
var OpportunityModel = /** @class */ (function () {
    function OpportunityModel() {
    }
    Object.defineProperty(OpportunityModel.prototype, "approachChannelStr", {
        get: function () {
            return this.approachChannels && this.approachChannels.length > 0 ? this.approachChannels.map(function (i) { return i['name']; }).join(', ') : '';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OpportunityModel.prototype, "proposalStr", {
        get: function () {
            return this.proposals.map(function (i) { return i.no; }).join(',');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OpportunityModel.prototype, "modelsStr", {
        get: function () {
            return this.models && this.models.length > 0 ? this.models.map(function (i) { return i['attributeValue']['value']; }).join(', ') : '';
        },
        enumerable: true,
        configurable: true
    });
    return OpportunityModel;
}());



/***/ }),

/***/ "../../../../../src/app/shared/models/paging-result.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PagedResult; });
var PagedResult = /** @class */ (function () {
    function PagedResult() {
        this.currentPage = 0;
        this.pageSize = 10;
    }
    return PagedResult;
}());



/***/ }),

/***/ "../../../../../src/app/shared/models/prospect/prospect-filter.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProspectFilter; });
var ProspectFilter = /** @class */ (function () {
    function ProspectFilter() {
        this.rate = null;
        this.prospectSource = null;
        this.business = null;
        this.month = null;
        this.handler = null;
        this.approached = null;
        this.approachChannel = null;
        this.assignTo = null;
        this.assignToGroup = null;
        this.isAssignToGroup = null;
        this.potentialStatus = null;
    }
    return ProspectFilter;
}());



/***/ }),

/***/ "../../../../../src/app/shared/models/prospect/prospect-list-item.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export ProspectListItem */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__checkbox_selected_model__ = __webpack_require__("../../../../../src/app/shared/models/checkbox-selected.model.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var ProspectListItem = /** @class */ (function (_super) {
    __extends(ProspectListItem, _super);
    function ProspectListItem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return ProspectListItem;
}(__WEBPACK_IMPORTED_MODULE_0__checkbox_selected_model__["a" /* CheckboxSelection */]));



/***/ }),

/***/ "../../../../../src/app/shared/models/prospect/prospect.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProspectModel; });
var ProspectModel = /** @class */ (function () {
    function ProspectModel() {
    }
    Object.defineProperty(ProspectModel.prototype, "retailsStr", {
        get: function () {
            return this.retails && this.retails.length > 0 ? this.retails.map(function (i) { return i['productGroup']['name']; }).join(', ') : '';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProspectModel.prototype, "modelsStr", {
        get: function () {
            return this.models && this.models.length > 0 ? this.models.map(function (i) { return i['attributeValue']['value']; }).join(', ') : '';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProspectModel.prototype, "dabStr", {
        get: function () {
            return this.dab && this.dab.length > 0 ? this.dab.map(function (i) { return i['text']; }).join(', ') : '';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProspectModel.prototype, "approachChannelStr", {
        get: function () {
            return this.approachChannels && this.approachChannels.length > 0 ? this.approachChannels.map(function (i) { return i['name']; }).join(', ') : '';
        },
        enumerable: true,
        configurable: true
    });
    return ProspectModel;
}());



/***/ }),

/***/ "../../../../../src/app/shared/models/user/user.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserModel; });
var UserModel = /** @class */ (function () {
    function UserModel() {
    }
    return UserModel;
}());



/***/ }),

/***/ "../../../../../src/app/shared/modules/activities/activities.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n    <div class=\"card-body\">\n        <div class=\"d-flex eventOrTask\">\n            <h5 class=\"mr-auto d-flex align-items-end\">Các hoạt động</h5>\n            <div ngbDropdown *ngIf=\"isActivityAddActivityEvent || isActivityAddActivityWork || groupRole == userGroupRole.SuperAdmin || groupRole == userGroupRole.Admin\">\n                <button *ngIf=\"!readOnly\" class=\"btn btn-primary\" ngbDropdownToggle>Thêm vào &nbsp;</button>\n                <div ngbDropdownMenu>\n                    <button *ngIf=\"isActivityAddActivityEvent || groupRole == userGroupRole.SuperAdmin || groupRole == userGroupRole.Admin\" class=\"dropdown-item\" (click)=\"gotoCreateEventPage()\">Sự kiện</button>\n                    <button *ngIf=\"isActivityAddActivityWork || groupRole == userGroupRole.SuperAdmin || groupRole == userGroupRole.Admin\" class=\"dropdown-item\" (click)=\"gotoCreateTaskPage()\">Công việc</button>\n                </div>\n            </div>\n        </div>\n\n        <hr>\n        <div *ngIf=\"viewActivities || groupRole == userGroupRole.SuperAdmin || groupRole == userGroupRole.Admin\">\n            <div *ngIf=\"activities?.length; else emptyActivity\">\n                <div *ngFor=\"let activity of activities\">\n                    <div class=\"d-flex\">\n                        <p class=\"mr-auto\">\n                            <strong>{{activity.startDate | date: 'dd/MM/yyyy, HH:mm'}}</strong>\n                        </p>\n                        <span>{{activity.status | translate}}</span>\n                    </div>\n                    <p>\n                        <span *ngIf=\"activity.eventType\">{{activity.eventTypeStr}} -</span>\n                        <a [routerLink]=\"activity.activityType=='Event' \n                        ? ['/activity/event/detail', activity.id] \n                        : ['/activity/task/detail', activity.id]\" [class.type-task]='activity.activityType == \"Work\"' [class.type-event]='activity.activityType == \"Event\"'>\n                            {{activity.name}}\n                        </a>\n                    </p>\n                    <hr>\n                </div>\n                <div class=\"activityButton\">\n                    <a [routerLink]=\"['./../activity']\">Xem tất cả</a>\n    \n                </div>\n            </div>\n            <div *ngIf=\"!viewActivities && groupRole != userGroupRole.SuperAdmin && groupRole != userGroupRole.Admin\">\n                <p class=\"text-center\">Bạn không có quyền xem dữ liệu này</p>\n            </div>\n        </div>\n    </div>\n\n</div>\n\n<ng-template #emptyActivity>\n    <div class=\"text-center\">\n        Không có hoạt động nào đang chờ giải quyết!\n    </div>\n</ng-template>\n"

/***/ }),

/***/ "../../../../../src/app/shared/modules/activities/activities.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".activityButton {\n  margin: 0 auto;\n  text-align: center; }\n\n.eventOrTask {\n  position: relative;\n  z-index: 50; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/modules/activities/activities.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActivitiesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_index__ = __webpack_require__("../../../../../src/app/shared/services/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__configs_common_config__ = __webpack_require__("../../../../../src/app/shared/configs/common.config.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ActivitiesComponent = /** @class */ (function () {
    function ActivitiesComponent(activityService, dataService, sessionService, router) {
        this.activityService = activityService;
        this.dataService = dataService;
        this.sessionService = sessionService;
        this.router = router;
        this.userGroupRole = __WEBPACK_IMPORTED_MODULE_3__configs_common_config__["b" /* USER_GROUP_ROLE */];
    }
    Object.defineProperty(ActivitiesComponent.prototype, "groupRole", {
        get: function () {
            if (this.sessionService.currentSession) {
                return this.sessionService.currentSession.role + '';
            }
            else {
                return '';
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ActivitiesComponent.prototype, "isActivityAddActivityEvent", {
        get: function () {
            // các hoạt động
            if (this.listPermission && this.listPermission.length > 0) {
                return this.listPermission.filter(function (i) { return i.functionWeb.no === 'ActivityAddActivity' && i.category === 'Event'; }).length > 0 ? true : false;
            }
            else {
                return false;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ActivitiesComponent.prototype, "isActivityAddActivityWork", {
        get: function () {
            // các hoạt động
            if (this.listPermission && this.listPermission.length > 0) {
                return this.listPermission.filter(function (i) { return i.functionWeb.no === 'ActivityAddActivity' && i.category === 'Work'; }).length > 0 ? true : false;
            }
            else {
                return false;
            }
        },
        enumerable: true,
        configurable: true
    });
    ActivitiesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activityService
            .getActivitiesByModuleItemId(this.moduleName, this.moduleItemId, 0, 5)
            .subscribe(function (pagedResult) {
            _this.activities = pagedResult.items;
            _this.activities.forEach(function (i) {
                if (i.eventType) {
                    _this.dataService.getSettingTypeItem('event-types', i.eventType).subscribe(function (d) { return i.eventTypeStr = d.text; });
                }
            });
        });
        this.listPermission = this.sessionService.getSession().userGroupFunctions;
    };
    ActivitiesComponent.prototype.gotoCreateTaskPage = function () {
        this.router.navigate(['/activity/task/create',
            {
                moduleName: this.moduleName,
                moduleItemId: this.moduleItemId,
                moduleItemName: this.moduleItemName,
            }]);
    };
    ActivitiesComponent.prototype.gotoCreateEventPage = function () {
        this.router.navigate(['/activity/event/create',
            {
                moduleName: this.moduleName,
                moduleItemId: this.moduleItemId,
                moduleItemName: this.moduleItemName,
            }]);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], ActivitiesComponent.prototype, "moduleName", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Number)
    ], ActivitiesComponent.prototype, "moduleItemId", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], ActivitiesComponent.prototype, "moduleItemName", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], ActivitiesComponent.prototype, "readOnly", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], ActivitiesComponent.prototype, "viewActivities", void 0);
    ActivitiesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-activities',
            template: __webpack_require__("../../../../../src/app/shared/modules/activities/activities.component.html"),
            styles: [__webpack_require__("../../../../../src/app/shared/modules/activities/activities.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_index__["a" /* ActivityService */],
            __WEBPACK_IMPORTED_MODULE_1__services_index__["j" /* DataService */],
            __WEBPACK_IMPORTED_MODULE_1__services_index__["n" /* SessionService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"]])
    ], ActivitiesComponent);
    return ActivitiesComponent;
}());



/***/ }),

/***/ "../../../../../src/app/shared/modules/activities/activities.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActivitiesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__activities_component__ = __webpack_require__("../../../../../src/app/shared/modules/activities/activities.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_index__ = __webpack_require__("../../../../../src/app/shared/services/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__ = __webpack_require__("../../../../@ngx-translate/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ng_bootstrap_ng_bootstrap_dropdown_dropdown_module__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/dropdown/dropdown.module.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var ActivitiesModule = /** @class */ (function () {
    function ActivitiesModule() {
    }
    ActivitiesModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_5__angular_router__["RouterModule"],
                __WEBPACK_IMPORTED_MODULE_6__ng_bootstrap_ng_bootstrap_dropdown_dropdown_module__["a" /* NgbDropdownModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__["b" /* TranslateModule */],
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__activities_component__["a" /* ActivitiesComponent */]],
            exports: [__WEBPACK_IMPORTED_MODULE_2__activities_component__["a" /* ActivitiesComponent */]],
            providers: [__WEBPACK_IMPORTED_MODULE_3__services_index__["a" /* ActivityService */]],
        })
    ], ActivitiesModule);
    return ActivitiesModule;
}());



/***/ }),

/***/ "../../../../../src/app/shared/modules/audits-list/audits-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n  <div class=\"card-body\">\n\n      <h5 class=\"mr-auto d-flex align-items-end\">Các cập nhật</h5>\n      <hr>\n\n      <div *ngIf=\"audits?.length; else emptyAudit\">\n          <div *ngFor=\"let audit of audits\">\n              <div class=\"d-flex\">\n                  <p class=\"mr-auto\">\n                      <strong>{{audit.user}}</strong> {{audit.actionName}}\n                  </p>\n                  <span class=\"metadata\">{{audit.date | fromNow}}</span>\n              </div>\n              <p class=\"change-item\" *ngFor=\"let change of audit.valueChanges\">\n                  <em *ngIf=\"change.field !== 'image'\">&nbsp; * {{change.field | translate}}: từ\n                    <strong *ngIf=\"(change.beforeValue === 'null') || (change.beforeValue === null)\">Không có dữ\n                        liệu</strong>\n                    <strong *ngIf=\"change.field != 'classify'\">{{ (change.beforeValue == '' ? 'trống' : change.beforeValue ) | translate}}</strong>\n                    <strong *ngIf=\"change.field == 'classify' && !(change.beforeValue === 'null') || (change.beforeValue === null)\">{{ change.beforeValue }}</strong> thành\n                    <!-- <strong>{{ (change.afterValue ? change.afterValue : 'trống') | translate}}</strong> -->\n                    <strong *ngIf=\"change.field != 'classify'\">{{ (change.afterValue == '' ? 'trống' : change.afterValue ) | translate}}</strong>\n                    <strong *ngIf=\"change.field == 'classify'\">{{ change.afterValue }}</strong>\n                    <strong *ngIf=\"(change.afterValue === 'null') || (change.afterValue === null)\">Không có dữ liệu</strong>\n                  </em>\n                  <em *ngIf=\"change.field === 'image'\">&nbsp; * {{change.field | translate}}: đã được cập nhật\n                </em>\n              </p>\n\n          </div>\n          <div class=\"text-center cursor-pointer mt-2\" *ngIf=\"showButton\">\n                  <a class=\"text-primary\" (click)=\"onLoadMore()\">Xem thêm</a>\n          </div>\n      </div>\n  </div>\n</div>\n\n<ng-template #emptyAudit>\n  <div class=\"text-center\">\n      Chưa có cập nhật nào !\n  </div>\n</ng-template>"

/***/ }),

/***/ "../../../../../src/app/shared/modules/audits-list/audits-list.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/modules/audits-list/audits-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuditsListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_index__ = __webpack_require__("../../../../../src/app/shared/services/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuditsListComponent = /** @class */ (function () {
    function AuditsListComponent(auditService) {
        this.auditService = auditService;
        this.showButton = true;
    }
    AuditsListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.auditService.getAuditsByModuleItemId(this.moduleName, this.moduleItemId, 0, 3)
            .subscribe(function (pagedResult) {
            _this.pagedResult = pagedResult;
            _this.audits = pagedResult.items;
            _this.showButton = pagedResult.pageCount !== 1;
        });
    };
    AuditsListComponent.prototype.onLoadMore = function () {
        var _this = this;
        this.auditService.getAuditsByModuleItemId(this.moduleName, this.moduleItemId, +this.pagedResult.currentPage + 1, +this.pagedResult.pageSize)
            .subscribe(function (pagedResult) {
            _this.pagedResult = pagedResult;
            _this.audits = _this.audits.concat(pagedResult.items);
            _this.showButton = (pagedResult.items.length > 0) && (+pagedResult.currentPage + 1 < pagedResult.pageCount);
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], AuditsListComponent.prototype, "moduleName", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Number)
    ], AuditsListComponent.prototype, "moduleItemId", void 0);
    AuditsListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-audits-list',
            template: __webpack_require__("../../../../../src/app/shared/modules/audits-list/audits-list.component.html"),
            styles: [__webpack_require__("../../../../../src/app/shared/modules/audits-list/audits-list.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_index__["d" /* AuditService */]])
    ], AuditsListComponent);
    return AuditsListComponent;
}());



/***/ }),

/***/ "../../../../../src/app/shared/modules/audits-list/audits-list.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuditsListModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__audits_list_component__ = __webpack_require__("../../../../../src/app/shared/modules/audits-list/audits-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_index__ = __webpack_require__("../../../../../src/app/shared/services/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pipes_shared_pipes_module__ = __webpack_require__("../../../../../src/app/shared/pipes/shared-pipes.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__ = __webpack_require__("../../../../@ngx-translate/core/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var AuditsListModule = /** @class */ (function () {
    function AuditsListModule() {
    }
    AuditsListModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_4__pipes_shared_pipes_module__["a" /* SharedPipesModule */],
                __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__["b" /* TranslateModule */],
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__audits_list_component__["a" /* AuditsListComponent */]],
            exports: [__WEBPACK_IMPORTED_MODULE_2__audits_list_component__["a" /* AuditsListComponent */]],
            providers: [__WEBPACK_IMPORTED_MODULE_3__services_index__["d" /* AuditService */]]
        })
    ], AuditsListModule);
    return AuditsListModule;
}());



/***/ }),

/***/ "../../../../../src/app/shared/modules/audits/audits.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n    <div class=\"card-body\">\n\n        <h5 class=\"mr-auto d-flex align-items-end\">Các cập nhật</h5>\n        <hr>\n        <div *ngIf=\"viewAudit || groupRole == userGroupRole.SuperAdmin || groupRole == userGroupRole.Admin\">\n            <div *ngIf=\"audits?.length; else emptyAudit\">\n                <div *ngFor=\"let audit of audits\">\n                    <div class=\"d-flex\">\n                        <p class=\"mr-auto\">\n                            <strong>{{audit.user}}</strong> {{audit.actionName}}\n                        </p>\n                        <span class=\"metadata\">{{audit.date | fromNow}}</span>\n                    </div>\n                    <p class=\"change-item\" *ngFor=\"let change of audit.valueChanges\">\n                            <em>&nbsp; * {{change.field | translate}}: từ\n                                <strong *ngIf=\"(change.beforeValue === 'null') || (change.beforeValue === null)\">Không có dữ liệu</strong>\n                                <strong *ngIf=\"change.field != 'classify'\">{{ (change.beforeValue == '' ? 'trống' : change.beforeValue ) | translate}}</strong>\n                                <strong *ngIf=\"change.field == 'classify'\">{{ change.beforeValue}}</strong> thành\n                                <strong *ngIf=\"change.field != 'classify'\">{{ (change.afterValue == '' ? 'trống' : change.afterValue ) | translate}}</strong>\n                                <strong *ngIf=\"change.field == 'classify'\">{{ change.afterValue }}</strong>\n                                <strong *ngIf=\"(change.afterValue === 'null') || (change.afterValue === null)\">Không có dữ liệu</strong>\n                            </em>\n                        </p>\n                </div>\n                <div class=\"text-center cursor-pointer mt-2\">\n                        <a class=\"text-primary\" [routerLink]=\"['./../audit']\">Xem tất cả </a>\n                    </div>\n            </div>\n        </div>\n        <div *ngIf=\"!viewAudit && groupRole != userGroupRole.SuperAdmin && groupRole != userGroupRole.Admin\">\n            <p class=\"text-center\">Bạn không có quyền xem dữ liệu này</p>\n        </div>\n    </div>\n</div>\n\n<ng-template #emptyAudit>\n    <div class=\"text-center\">\n        Chưa có cập nhật nào !\n    </div>\n</ng-template>"

/***/ }),

/***/ "../../../../../src/app/shared/modules/audits/audits.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".change-item {\n  font-size: 95%; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/modules/audits/audits.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuditsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_index__ = __webpack_require__("../../../../../src/app/shared/services/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__configs_common_config__ = __webpack_require__("../../../../../src/app/shared/configs/common.config.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuditsComponent = /** @class */ (function () {
    function AuditsComponent(auditService, sessionService) {
        this.auditService = auditService;
        this.sessionService = sessionService;
        this.userGroupRole = __WEBPACK_IMPORTED_MODULE_2__configs_common_config__["b" /* USER_GROUP_ROLE */];
    }
    Object.defineProperty(AuditsComponent.prototype, "groupRole", {
        get: function () {
            if (this.sessionService.currentSession) {
                return this.sessionService.currentSession.role + '';
            }
            else {
                return '';
            }
        },
        enumerable: true,
        configurable: true
    });
    AuditsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.auditService.getAuditsByModuleItemId(this.moduleName, this.moduleItemId, 0, 3)
            .subscribe(function (pagedResult) {
            _this.pagedResult = pagedResult;
            _this.audits = pagedResult.items;
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], AuditsComponent.prototype, "moduleName", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Number)
    ], AuditsComponent.prototype, "moduleItemId", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], AuditsComponent.prototype, "viewAudit", void 0);
    AuditsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-audits',
            template: __webpack_require__("../../../../../src/app/shared/modules/audits/audits.component.html"),
            styles: [__webpack_require__("../../../../../src/app/shared/modules/audits/audits.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_index__["d" /* AuditService */],
            __WEBPACK_IMPORTED_MODULE_1__services_index__["n" /* SessionService */]])
    ], AuditsComponent);
    return AuditsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/shared/modules/audits/audits.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuditsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__audits_component__ = __webpack_require__("../../../../../src/app/shared/modules/audits/audits.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pipes_shared_pipes_module__ = __webpack_require__("../../../../../src/app/shared/pipes/shared-pipes.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_index__ = __webpack_require__("../../../../../src/app/shared/services/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__ = __webpack_require__("../../../../@ngx-translate/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var AuditsModule = /** @class */ (function () {
    function AuditsModule() {
    }
    AuditsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_6__angular_router__["RouterModule"],
                __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__["b" /* TranslateModule */],
                __WEBPACK_IMPORTED_MODULE_3__pipes_shared_pipes_module__["a" /* SharedPipesModule */],
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__audits_component__["a" /* AuditsComponent */]],
            exports: [__WEBPACK_IMPORTED_MODULE_2__audits_component__["a" /* AuditsComponent */]],
            providers: [__WEBPACK_IMPORTED_MODULE_4__services_index__["d" /* AuditService */]],
        })
    ], AuditsModule);
    return AuditsModule;
}());



/***/ }),

/***/ "../../../../../src/app/shared/modules/comments/comment-item/comment-item.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row mt-3\">\n    <div class=\"d-flex align-self-start ml-2 mt-1\">\n        <img *ngIf=\"comment.avatar\" [src]=\"comment.avatar\" width=\"35\" height=\"35\">\n\n        <div *ngIf=\"!comment.avatar\" class=\"avatar-circle-sm icon\">\n            <span class=\"initials\">\n                {{comment.user.userName | shortenedName}}\n            </span>\n        </div>\n    </div>\n\n    <div class=\"content w-80\">\n        <div class=\"author\"> {{comment.user.userName}}</div>\n        <div class=\"metadata\">\n            <span class=\"date right\">{{comment.time | amCalendar}}</span>\n        </div>\n        <div class=\"text\">\n            {{comment.content}}\n        </div>\n        <div class=\"actions\">\n            <a class=\"reply\" (click)=\"reply();\">Trả lời</a>\n            <span>&nbsp;</span>\n        </div>\n\n      \n    </div>\n    <div class=\"reply-box mt-2 mb-2 p-3 comment-input rep\" [hidden]=\"!showReplyBox\">\n            <app-editor #editor (keyup.enter)=\"submitComment()\"></app-editor>\n            <div class=\"d-flex flex-row justify-content-end align-items-center mt-3\">\n                <button [disabled]=\"!editor.content\" class=\"btn btn-primary mr-3\" (click)=\"submitComment()\">Đăng</button>\n                <a class=\"\" (click)=\"showReplyBox=false\">Hủy bỏ</a>\n            </div>\n        </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/shared/modules/comments/comment-item/comment-item.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "a:hover {\n  text-decoration: underline !important;\n  cursor: pointer; }\n\nimg {\n  border-radius: 50% !important;\n  -moz-border-radius: 50%;\n  -webkit-border-radius: 50%;\n  height: 35px !important;\n  width: 35px !important; }\n\n.content {\n  margin-left: 10px; }\n\n.icon {\n  width: 35px !important;\n  height: 35px !important; }\n\n.right {\n  right: 0px;\n  top: 17px; }\n\n.rep {\n  width: 100%;\n  float: right; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/modules/comments/comment-item/comment-item.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommentItemComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__editor_editor_component__ = __webpack_require__("../../../../../src/app/shared/modules/comments/editor/editor.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__comment_model__ = __webpack_require__("../../../../../src/app/shared/modules/comments/comment.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment__ = __webpack_require__("../../../../moment/moment.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_index__ = __webpack_require__("../../../../../src/app/shared/services/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_comment_service__ = __webpack_require__("../../../../../src/app/shared/services/comment.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var defaultAvatarSrc = 'assets/images/no-avatar.png';
var CommentItemComponent = /** @class */ (function () {
    function CommentItemComponent(sessionService, commentService, userService) {
        this.sessionService = sessionService;
        this.commentService = commentService;
        this.userService = userService;
        // If a comment was edited this event will be emitted
        this.commentEdited = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["EventEmitter"]();
        this.showReplyBox = false;
        this.commentActionTypes = {
            reply: 0,
            edit: 1,
            delete: 2,
        };
    }
    CommentItemComponent.prototype.onContentSaved = function (content) {
        this.commentEdited.next(content);
    };
    CommentItemComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userProfile = this.sessionService.userInfo;
        this.avatarSrc = this.userProfile.avatar ? "data:image/jpeg;base64," + this.userProfile.avatar : null;
        var id = this.comment.user.userId;
        if (id !== this.sessionService.currentUser.employeeId) {
            this.userService.getAvatarByUserId(id)
                .subscribe(function (result) {
                _this.comment.avatar = result.avatar ? "data:image/jpeg;base64," + result.avatar : null;
            });
        }
        else {
            this.comment.avatar = this.avatarSrc;
        }
    };
    CommentItemComponent.prototype.submitComment = function () {
        var newComment = {
            id: 0,
            parentId: this.parentId,
            user: {
                userId: this.sessionService.currentUser.employeeId,
                userName: this.sessionService.userInfo.fullName,
            },
            time: +__WEBPACK_IMPORTED_MODULE_3_moment__(),
            content: this.newCommentEditor.getEditableContent(),
            avatar: '',
            replyComments: [],
        };
        if (this.isReplyComment) {
            this.commentList.push(newComment);
        }
        switch (this.commentActionType) {
            case this.commentActionTypes.reply:
                this.comment.replyComments.push(newComment);
                // Emit event so the updated comment list can be persisted 
                // outside the component
                //this.commentsUpdated.next(this.comments);
                break;
            case this.commentActionTypes.edit:
                this.comment.content = this.newCommentEditor.getEditableContent();
                break;
        }
        this.commentService
            .create(this.moduleName, this.moduleItemId, newComment)
            .subscribe(function (result) {
            // if (this.isReplyComment) {
            //   this.commentList[0].id = result.id;
            // }
        });
        // We reset the content of the editor
        this.newCommentEditor.setEditableContent('');
        this.showReplyBox = false;
    };
    CommentItemComponent.prototype.reply = function () {
        this.showReplyBox = true;
        this.commentActionType = this.commentActionTypes.reply;
    };
    CommentItemComponent.prototype.edit = function () {
        this.showReplyBox = true;
        this.newCommentEditor.setEditableContent(this.comment.content);
        this.commentActionType = this.commentActionTypes.edit;
    };
    CommentItemComponent.prototype.delete = function () {
        // this.comment = null;
        this.commentActionType = this.commentActionTypes.reply;
        this.commentList.splice(this.index, 1);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], CommentItemComponent.prototype, "moduleName", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])(),
        __metadata("design:type", Number)
    ], CommentItemComponent.prototype, "moduleItemId", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__comment_model__["a" /* CommentModel */])
    ], CommentItemComponent.prototype, "comment", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])(),
        __metadata("design:type", Number)
    ], CommentItemComponent.prototype, "parentId", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])(),
        __metadata("design:type", Array)
    ], CommentItemComponent.prototype, "commentList", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])(),
        __metadata("design:type", Number)
    ], CommentItemComponent.prototype, "index", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], CommentItemComponent.prototype, "isReplyComment", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], CommentItemComponent.prototype, "commentEdited", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_0__editor_editor_component__["a" /* EditorComponent */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__editor_editor_component__["a" /* EditorComponent */])
    ], CommentItemComponent.prototype, "newCommentEditor", void 0);
    CommentItemComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'app-comment-item',
            template: __webpack_require__("../../../../../src/app/shared/modules/comments/comment-item/comment-item.component.html"),
            styles: [__webpack_require__("../../../../../src/app/shared/modules/comments/comment-item/comment-item.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__services_index__["n" /* SessionService */],
            __WEBPACK_IMPORTED_MODULE_5__services_comment_service__["a" /* CommentService */],
            __WEBPACK_IMPORTED_MODULE_4__services_index__["q" /* UserService */]])
    ], CommentItemComponent);
    return CommentItemComponent;
}());



/***/ }),

/***/ "../../../../../src/app/shared/modules/comments/comment.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommentModel; });
var CommentModel = /** @class */ (function () {
    function CommentModel() {
    }
    return CommentModel;
}());



/***/ }),

/***/ "../../../../../src/app/shared/modules/comments/comment/comment.component.html":
/***/ (function(module, exports) {

module.exports = "<app-comment-item \n[moduleName]=\"moduleName\" \n[moduleItemId]=\"moduleItemId\"\n    [comment]=\"comment\" \n    [parentId]=\"comment.id\"\n    [commentList]=\"commentList\" \n    [index]=\"index\">\n</app-comment-item>\n\n<div class=\"comments\" *ngIf=\"comment.replyComments?.length > 0\">\n    <div *ngFor=\"let replyComment of comment.replyComments; let i=index\">\n            <app-comment-item\n            [moduleName]=\"moduleName\" \n            [moduleItemId]=\"moduleItemId\"\n            [parentId]=\"comment.id\"\n            [isReplyComment]=\"true\" \n            [comment]=\"replyComment\" \n            [commentList]=\"comment.replyComments\" \n            [index]=\"i\"></app-comment-item>\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/shared/modules/comments/comment/comment.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "a:hover {\n  text-decoration: underline !important;\n  cursor: pointer; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/modules/comments/comment/comment.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommentComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__comment_model__ = __webpack_require__("../../../../../src/app/shared/modules/comments/comment.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_index__ = __webpack_require__("../../../../../src/app/shared/services/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CommentComponent = /** @class */ (function () {
    function CommentComponent(sessionService) {
        this.sessionService = sessionService;
    }
    CommentComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], CommentComponent.prototype, "moduleName", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Number)
    ], CommentComponent.prototype, "moduleItemId", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__comment_model__["a" /* CommentModel */])
    ], CommentComponent.prototype, "comment", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Array)
    ], CommentComponent.prototype, "commentList", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Number)
    ], CommentComponent.prototype, "index", void 0);
    CommentComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-comment',
            template: __webpack_require__("../../../../../src/app/shared/modules/comments/comment/comment.component.html"),
            styles: [__webpack_require__("../../../../../src/app/shared/modules/comments/comment/comment.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_index__["n" /* SessionService */]])
    ], CommentComponent);
    return CommentComponent;
}());



/***/ }),

/***/ "../../../../../src/app/shared/modules/comments/comments.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n    <div class=\"card-body\">\n        <h5>Bình luận</h5>\n\n        <hr *ngIf=\"!readOnly || groupRole == userGroupRole.SuperAdmin || groupRole == userGroupRole.Admin\">\n\n        <div *ngIf=\"!readOnly && addComment || groupRole == userGroupRole.SuperAdmin || groupRole == userGroupRole.Admin\" class=\"p-3 comment-input\">\n            <div>\n                <app-editor #editor (keyup.enter)=\"add($event)\"></app-editor>\n            </div>\n            <div class=\"d-flex justify-content-end mt-3\">\n                <button [disabled]=\"!editor.content\" class=\"btn btn-primary\" (click)=\"addNewComment()\">Đăng</button>\n            </div>\n\n        </div>\n\n        <hr *ngIf=\"addComment || groupRole == userGroupRole.SuperAdmin || groupRole == userGroupRole.Admin\">\n\n        <div *ngIf=\"viewComment || groupRole == userGroupRole.SuperAdmin || groupRole == userGroupRole.Admin\" class=\"card\">\n            <div *ngIf=\"comments?.length > 0; else emptyComment\" class=\"card-body pt-0\">\n                <div class=\"ui comments abc\">\n                    <div *ngFor=\"let comment of comments; let i=index\" class=\"comment\">\n                        <app-comment [moduleName]=\"moduleName\" [moduleItemId]=\"moduleItemId\" [comment]=\"comment\" [commentList]=\"comments\" [index]=\"i\"\n                            (commentEdited)=\"onCommentEdited(comment, $event)\">\n                        </app-comment>\n                    </div>\n\n                    <div class=\"text-center cursor-pointer mt-2\" *ngIf=\"showButtonViewAll\">\n                        <a class=\"text-primary\" (click)=\"onViewModeClick()\">Xem tất cả</a>\n                    </div>\n                    <div class=\"text-center cursor-pointer mt-2\" *ngIf=\"showButtonLoadMore\">\n                        <a class=\"text-primary\" (click)=\"onLoadMore()\">Xem thêm</a>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div *ngIf=\"!viewComment && groupRole != userGroupRole.SuperAdmin && groupRole != userGroupRole.Admin\" class=\"card\"> \n            <p class=\"text-center card-body\">Bạn không có quyền xem dữ liệu này</p>\n         </div>\n\n    </div>\n\n</div>\n\n<ng-template #emptyComment>\n    <div class=\"card-body text-center\">\n        Không có bình luận nào !\n    </div>\n</ng-template>\n"

/***/ }),

/***/ "../../../../../src/app/shared/modules/comments/comments.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/modules/comments/comments.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommentsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_moment__ = __webpack_require__("../../../../moment/moment.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__editor_editor_component__ = __webpack_require__("../../../../../src/app/shared/modules/comments/editor/editor.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_comment_service__ = __webpack_require__("../../../../../src/app/shared/services/comment.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_index__ = __webpack_require__("../../../../../src/app/shared/services/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__configs_common_config__ = __webpack_require__("../../../../../src/app/shared/configs/common.config.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var defaultAvatarSrc = 'assets/images/no-avatar.png';
var CommentsComponent = /** @class */ (function () {
    function CommentsComponent(router, sessionService, commentService) {
        this.router = router;
        this.sessionService = sessionService;
        this.commentService = commentService;
        // A list of comment objects
        this.comments = [];
        this.avatars = [];
        // Event when the list of comments have been updated
        this.commentsUpdated = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["EventEmitter"]();
        this.showLoadMore = false;
        this.init = false;
        this.deleteComment = true;
        this.showButtonViewAll = false;
        this.showButtonLoadMore = false;
        this.userGroupRole = __WEBPACK_IMPORTED_MODULE_6__configs_common_config__["b" /* USER_GROUP_ROLE */];
    }
    Object.defineProperty(CommentsComponent.prototype, "groupRole", {
        get: function () {
            if (this.sessionService.currentSession) {
                return this.sessionService.currentSession.role + '';
            }
            else {
                return '';
            }
        },
        enumerable: true,
        configurable: true
    });
    CommentsComponent.prototype.ngOnInit = function () {
        this.userProfile = this.sessionService.userInfo;
        this.avatarSrc = this.userProfile.avatar ? "data:image/jpeg;base64," + this.userProfile.avatar : defaultAvatarSrc;
        this.showButtonViewAll = this.viewMode !== 'all';
        this.showButtonLoadMore = this.viewMode === 'all';
        this.loadComment();
    };
    CommentsComponent.prototype.loadComment = function () {
        var _this = this;
        this.commentService
            .read(this.moduleName, this.moduleItemId, 0, 5)
            .subscribe(function (pagedResult) {
            _this.pagedResult = pagedResult;
            _this.comments = pagedResult.items;
            _this.showButtonLoadMore = (pagedResult.pageCount !== 1) && (_this.viewMode === 'all');
        }, function (err) {
            _this.init = true;
        });
    };
    CommentsComponent.prototype.onLoadMore = function () {
        var _this = this;
        this.deleteComment = false;
        if (this.init) {
            this.commentService.read(this.moduleName, this.moduleItemId, 0, 10)
                .subscribe(function (pagedResult) {
                _this.pagedResult = pagedResult;
                _this.comments = pagedResult.items;
                if (pagedResult.items.length < 10) {
                    _this.showButtonLoadMore = false;
                }
                if ((pagedResult.items.length > 0) && (+pagedResult.currentPage + 1 < pagedResult.pageCount)) {
                    _this.init = false;
                }
            });
        }
        else {
            this.commentService.read(this.moduleName, this.moduleItemId, +this.pagedResult.currentPage + 1, +this.pagedResult.pageSize)
                .subscribe(function (pagedResult) {
                _this.showButtonLoadMore = (pagedResult.items.length > 0) && (+pagedResult.currentPage + 1 < pagedResult.pageCount);
                _this.pagedResult = pagedResult;
                _this.comments = _this.comments.concat(pagedResult.items);
            });
        }
    };
    // We use input change tracking to prevent dealing with
    // undefined comment list
    // ngOnChanges(changes) {
    //   if (changes.comments &&
    //     changes.comments.currentValue === undefined) {
    //     this.comments = [];
    //   }
    // }
    // Adding a new comment from the newCommentContent field that is
    // bound to the editor content
    CommentsComponent.prototype.add = function (event) {
        if (this.newCommentEditor.getEditableContent().trim().length === 0) {
            event.preventDefault();
            event.stopPropagation();
            return;
        }
        else {
            this.addNewComment();
        }
    };
    CommentsComponent.prototype.addNewComment = function () {
        var _this = this;
        var commentNew = this.newCommentEditor.getEditableContent().trim();
        if (commentNew.length > 0) {
            this.comments = this.comments.slice();
            var newComment = {
                id: 0,
                parentId: 0,
                user: {
                    userId: this.sessionService.currentUser.employeeId,
                    userName: this.sessionService.userInfo.fullName,
                },
                time: +__WEBPACK_IMPORTED_MODULE_0_moment__(),
                avatar: this.avatarSrc,
                content: this.newCommentEditor.getEditableContent(),
                replyComments: [],
            };
            // this.comments.splice(0, 0, newComment);
            // this.comments.splice(0, 0, newComment);
            this.commentService
                .create(this.moduleName, this.moduleItemId, newComment)
                .subscribe(function (result) {
                // this.comments[0].id = result.id;
                _this.loadComment();
            });
            // Emit event so the updated comment list can be persisted
            // outside the component
            // if (this.deleteComment) {
            //   this.comments.splice(5, 1);
            // }
            this.commentsUpdated.next(this.comments);
            // We reset the content of the editor
            this.newCommentEditor.setEditableContent('');
            // this.showButtonLoadMore = this.comments.length > 5 ? true : false;
        }
    };
    // // This method deals with edited comments
    // onCommentEdited(comment, content) {
    //   const comments = this.comments.slice();
    //   // If the comment was edited with e zero length content, we 
    //   // will delete the comment from the list
    //   if (content.length === 0) {
    //     comments.splice(comments.indexOf(comment), 1);
    //   } else {
    //     // Otherwise we're replacing the existing comment
    //     comments.splice(comments.indexOf(comment), 1, {
    //       id: 0,
    //       user: comment.user,
    //       time: comment.time,
    //       content,
    //       replyComments: [],
    //     });
    //   }
    //   // Emit event so the updated comment list can be persisted
    //   // outside the component
    //   this.commentsUpdated.next(comments);
    // }
    CommentsComponent.prototype.onViewModeClick = function () {
        switch (this.viewMode) {
            case 'partial':
                this.router.navigate(["/" + this.moduleName + "/detail/" + this.moduleItemId + "/comment"]);
                break;
            case 'partialEvent':
                this.router.navigate(["/activity/event/detail/" + this.moduleItemId + "/comment"]);
                break;
            case 'partialTask':
                this.router.navigate(["/activity/task/detail/" + this.moduleItemId + "/comment"]);
                break;
            case 'all':
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], CommentsComponent.prototype, "viewMode", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], CommentsComponent.prototype, "moduleName", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])(),
        __metadata("design:type", Number)
    ], CommentsComponent.prototype, "moduleItemId", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], CommentsComponent.prototype, "readOnly", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], CommentsComponent.prototype, "addComment", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], CommentsComponent.prototype, "viewComment", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], CommentsComponent.prototype, "commentsUpdated", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_2__editor_editor_component__["a" /* EditorComponent */]),
        __metadata("design:type", Object)
    ], CommentsComponent.prototype, "newCommentEditor", void 0);
    CommentsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'app-comments',
            template: __webpack_require__("../../../../../src/app/shared/modules/comments/comments.component.html"),
            styles: [__webpack_require__("../../../../../src/app/shared/modules/comments/comments.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__angular_router__["Router"],
            __WEBPACK_IMPORTED_MODULE_4__services_index__["n" /* SessionService */],
            __WEBPACK_IMPORTED_MODULE_3__services_comment_service__["a" /* CommentService */]])
    ], CommentsComponent);
    return CommentsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/shared/modules/comments/comments.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommentsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__comments_component__ = __webpack_require__("../../../../../src/app/shared/modules/comments/comments.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__comment_comment_component__ = __webpack_require__("../../../../../src/app/shared/modules/comments/comment/comment.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__editor_editor_component__ = __webpack_require__("../../../../../src/app/shared/modules/comments/editor/editor.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__comment_item_comment_item_component__ = __webpack_require__("../../../../../src/app/shared/modules/comments/comment-item/comment-item.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pipes_shared_pipes_module__ = __webpack_require__("../../../../../src/app/shared/pipes/shared-pipes.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_comment_service__ = __webpack_require__("../../../../../src/app/shared/services/comment.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_angular2_moment_moment_module__ = __webpack_require__("../../../../angular2-moment/moment.module.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_angular2_moment_moment_module___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_angular2_moment_moment_module__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var CommentsModule = /** @class */ (function () {
    function CommentsModule() {
    }
    CommentsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_5__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_9_angular2_moment_moment_module__["MomentModule"],
                __WEBPACK_IMPORTED_MODULE_7__pipes_shared_pipes_module__["a" /* SharedPipesModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__comments_component__["a" /* CommentsComponent */],
                __WEBPACK_IMPORTED_MODULE_3__comment_comment_component__["a" /* CommentComponent */],
                __WEBPACK_IMPORTED_MODULE_6__comment_item_comment_item_component__["a" /* CommentItemComponent */],
                __WEBPACK_IMPORTED_MODULE_4__editor_editor_component__["a" /* EditorComponent */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__comments_component__["a" /* CommentsComponent */],
                __WEBPACK_IMPORTED_MODULE_3__comment_comment_component__["a" /* CommentComponent */],
                __WEBPACK_IMPORTED_MODULE_4__editor_editor_component__["a" /* EditorComponent */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_8__services_comment_service__["a" /* CommentService */],
            ]
        })
    ], CommentsModule);
    return CommentsModule;
}());



/***/ }),

/***/ "../../../../../src/app/shared/modules/comments/editor/editor.component.html":
/***/ (function(module, exports) {

module.exports = "<textarea class=\"form-control w-100 p-2 mb-2\" name=\"\" id=\"\" rows=\"2\" placeholder=\"Thêm bình luận tại đây...\" \n[(ngModel)]=\"content\"></textarea>\n"

/***/ }),

/***/ "../../../../../src/app/shared/modules/comments/editor/editor.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/modules/comments/editor/editor.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditorComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var EditorComponent = /** @class */ (function () {
    function EditorComponent() {
    }
    EditorComponent.prototype.ngOnInit = function () {
    };
    EditorComponent.prototype.setEditableContent = function (text) {
        this.content = text;
    };
    EditorComponent.prototype.getEditableContent = function () {
        return this.content;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], EditorComponent.prototype, "editMode", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], EditorComponent.prototype, "showControls", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], EditorComponent.prototype, "editSaved", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], EditorComponent.prototype, "content", void 0);
    EditorComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-editor',
            template: __webpack_require__("../../../../../src/app/shared/modules/comments/editor/editor.component.html"),
            styles: [__webpack_require__("../../../../../src/app/shared/modules/comments/editor/editor.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], EditorComponent);
    return EditorComponent;
}());



/***/ }),

/***/ "../../../../../src/app/shared/modules/form-input/form-input.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormInputModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__input_assign_to_input_assign_to_component__ = __webpack_require__("../../../../../src/app/shared/modules/form-input/input-assign-to/input-assign-to.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_primeng_primeng__ = __webpack_require__("../../../../primeng/primeng.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_primeng_primeng___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_primeng_primeng__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var FormInputModule = /** @class */ (function () {
    function FormInputModule() {
    }
    FormInputModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_4_primeng_primeng__["DropdownModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["ReactiveFormsModule"],
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__input_assign_to_input_assign_to_component__["a" /* InputAssignToComponent */]],
            exports: [__WEBPACK_IMPORTED_MODULE_2__input_assign_to_input_assign_to_component__["a" /* InputAssignToComponent */]]
        })
    ], FormInputModule);
    return FormInputModule;
}());



/***/ }),

/***/ "../../../../../src/app/shared/modules/form-input/input-assign-to/input-assign-to.component.html":
/***/ (function(module, exports) {

module.exports = "<p-dropdown [options]=\"assignToList | async\" [style]=\"{'width':'150px'}\" filter=\"true\" optionLabel=\"text\"></p-dropdown>\n<div class=\"invalid-feedback\" >\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/shared/modules/form-input/input-assign-to/input-assign-to.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/modules/form-input/input-assign-to/input-assign-to.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InputAssignToComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_index__ = __webpack_require__("../../../../../src/app/shared/services/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var InputAssignToComponent = /** @class */ (function () {
    function InputAssignToComponent(dataService) {
        this.dataService = dataService;
        this.onModelChange = function () { };
        this.onModelTouched = function () { };
    }
    InputAssignToComponent_1 = InputAssignToComponent;
    InputAssignToComponent.prototype.writeValue = function (value) {
        this.value = value;
    };
    InputAssignToComponent.prototype.registerOnChange = function (fn) {
        this.onModelChange = fn;
    };
    InputAssignToComponent.prototype.registerOnTouched = function (fn) {
        this.onModelTouched = fn;
    };
    InputAssignToComponent.prototype.setDisabledState = function (val) {
        // this.disabled = val;
    };
    InputAssignToComponent.prototype.ngOnInit = function () {
        // this.assignToList = this.dataService.getAssignToItems();
    };
    InputAssignToComponent.prototype.compareSelectItemWithType = function (o1, o2) {
        return (!o1 || !o2) || (o1.type === o2.type && o1.id === o2.id);
    };
    InputAssignToComponent = InputAssignToComponent_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-input-assign-to',
            template: __webpack_require__("../../../../../src/app/shared/modules/form-input/input-assign-to/input-assign-to.component.html"),
            styles: [__webpack_require__("../../../../../src/app/shared/modules/form-input/input-assign-to/input-assign-to.component.scss")],
            providers: [
                {
                    provide: __WEBPACK_IMPORTED_MODULE_1__angular_forms__["NG_VALUE_ACCESSOR"],
                    useExisting: Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["forwardRef"])(function () { return InputAssignToComponent_1; }),
                    multi: true,
                },
                {
                    provide: __WEBPACK_IMPORTED_MODULE_1__angular_forms__["NG_VALIDATORS"],
                    useExisting: Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["forwardRef"])(function () { return InputAssignToComponent_1; }),
                    multi: true,
                }
            ],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_index__["j" /* DataService */]])
    ], InputAssignToComponent);
    return InputAssignToComponent;
    var InputAssignToComponent_1;
}());



/***/ }),

/***/ "../../../../../src/app/shared/modules/image-cropper/image-cropper.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n  <img\n      [src]=\"safeImgDataUrl\"\n      [style.visibility]=\"imageVisible ? 'visible' : 'hidden'\"\n      (load)=\"imageLoadedInView()\"\n      class=\"source-image\"\n  />\n  <div class=\"cropper\"\n       [class.rounded]=\"roundCropper\"\n       [style.top.px]=\"cropper.y1\"\n       [style.left.px]=\"cropper.x1\"\n       [style.width.px]=\"cropper.x2 - cropper.x1\"\n       [style.height.px]=\"cropper.y2 - cropper.y1\"\n       [style.margin-left]=\"marginLeft\"\n       [style.visibility]=\"imageVisible ? 'visible' : 'hidden'\"\n  >\n      <div\n          (mousedown)=\"startMove($event, 'move')\"\n          (touchstart)=\"startMove($event, 'move')\"\n          class=\"move\"\n      >&nbsp;</div>\n      <!-- <span\n          class=\"resize topleft\"\n          (mousedown)=\"startMove($event, 'resize', 'topleft')\"\n          (touchstart)=\"startMove($event, 'resize', 'topleft')\"\n      ><span class=\"square\"></span></span>\n      <span\n          class=\"resize top\"\n      ><span class=\"square\"></span></span>\n      <span\n          class=\"resize topright\"\n          (mousedown)=\"startMove($event, 'resize', 'topright')\"\n          (touchstart)=\"startMove($event, 'resize', 'topright')\"\n      ><span class=\"square\"></span></span>\n      <span\n          class=\"resize right\"\n      ><span class=\"square\"></span></span>\n      <span\n          class=\"resize bottomright\"\n          (mousedown)=\"startMove($event, 'resize', 'bottomright')\"\n          (touchstart)=\"startMove($event, 'resize', 'bottomright')\"\n      ><span class=\"square\"></span></span>\n      <span\n          class=\"resize bottom\"\n      ><span class=\"square\"></span></span>\n      <span\n          class=\"resize bottomleft\"\n          (mousedown)=\"startMove($event, 'resize', 'bottomleft')\"\n          (touchstart)=\"startMove($event, 'resize', 'bottomleft')\"\n      ><span class=\"square\"></span></span>\n      <span\n          class=\"resize left\"\n      ><span class=\"square\"></span></span>\n      <span\n          class=\"resize-bar top\"\n          (mousedown)=\"startMove($event, 'resize', 'top')\"\n          (touchstart)=\"startMove($event, 'resize', 'top')\"\n      ></span>\n      <span\n          class=\"resize-bar right\"\n          (mousedown)=\"startMove($event, 'resize', 'right')\"\n          (touchstart)=\"startMove($event, 'resize', 'right')\"\n      ></span>\n      <span\n          class=\"resize-bar bottom\"\n          (mousedown)=\"startMove($event, 'resize', 'bottom')\"\n          (touchstart)=\"startMove($event, 'resize', 'bottom')\"\n      ></span>\n      <span\n          class=\"resize-bar left\"\n          (mousedown)=\"startMove($event, 'resize', 'left')\"\n          (touchstart)=\"startMove($event, 'resize', 'left')\"\n      ></span> -->\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/shared/modules/image-cropper/image-cropper.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  position: relative;\n  width: 100%;\n  max-width: 100%;\n  max-height: 100%;\n  overflow: hidden;\n  padding: 5px;\n  text-align: center;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none; }\n  :host > div {\n    position: relative;\n    width: 100%; }\n    :host > div .source-image {\n      max-width: 100%;\n      max-height: 100%; }\n  :host .cropper {\n    position: absolute;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    color: #53535C !important;\n    background: transparent !important;\n    outline-color: rgba(255, 255, 255, 0.3);\n    outline-width: 1000px;\n    outline-style: solid;\n    -ms-touch-action: none;\n        touch-action: none; }\n    :host .cropper:after {\n      position: absolute;\n      top: 0;\n      bottom: 0;\n      left: 0;\n      right: 0;\n      pointer-events: none;\n      border: dashed 1px;\n      opacity: .75;\n      color: inherit;\n      z-index: 1; }\n    :host .cropper .move {\n      width: 100%;\n      cursor: move;\n      border: 1px solid rgba(255, 255, 255, 0.5); }\n    :host .cropper .resize {\n      position: absolute;\n      display: inline-block;\n      line-height: 6px;\n      padding: 8px;\n      opacity: .85;\n      z-index: 1; }\n      :host .cropper .resize .square {\n        display: inline-block;\n        background: #53535C !important;\n        width: 6px;\n        height: 6px;\n        border: 1px solid rgba(255, 255, 255, 0.5); }\n      :host .cropper .resize.topleft {\n        top: -12px;\n        left: -12px;\n        cursor: nw-resize; }\n      :host .cropper .resize.top {\n        top: -12px;\n        left: calc(50% - 12px);\n        cursor: n-resize; }\n      :host .cropper .resize.topright {\n        top: -12px;\n        right: -12px;\n        cursor: ne-resize; }\n      :host .cropper .resize.right {\n        top: calc(50% - 12px);\n        right: -12px;\n        cursor: e-resize; }\n      :host .cropper .resize.bottomright {\n        bottom: -12px;\n        right: -12px;\n        cursor: se-resize; }\n      :host .cropper .resize.bottom {\n        bottom: -12px;\n        left: calc(50% - 12px);\n        cursor: s-resize; }\n      :host .cropper .resize.bottomleft {\n        bottom: -12px;\n        left: -12px;\n        cursor: sw-resize; }\n      :host .cropper .resize.left {\n        top: calc(50% - 12px);\n        left: -12px;\n        cursor: w-resize; }\n    :host .cropper .resize-bar {\n      position: absolute;\n      z-index: 1; }\n      :host .cropper .resize-bar.top {\n        top: -11px;\n        left: 11px;\n        width: calc(100% - 22px);\n        height: 22px;\n        cursor: n-resize; }\n      :host .cropper .resize-bar.right {\n        top: 11px;\n        right: -11px;\n        height: calc(100% - 22px);\n        width: 22px;\n        cursor: e-resize; }\n      :host .cropper .resize-bar.bottom {\n        bottom: -11px;\n        left: 11px;\n        width: calc(100% - 22px);\n        height: 22px;\n        cursor: s-resize; }\n      :host .cropper .resize-bar.left {\n        top: 11px;\n        left: -11px;\n        height: calc(100% - 22px);\n        width: 22px;\n        cursor: w-resize; }\n    :host .cropper.rounded {\n      outline-color: transparent; }\n      :host .cropper.rounded:after {\n        box-shadow: 0 0 0 100vw rgba(255, 255, 255, 0.3);\n        border-radius: 100%; }\n      :host .cropper.rounded .move {\n        border-radius: 100%; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/modules/image-cropper/image-cropper.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImageCropperComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__image_utils__ = __webpack_require__("../../../../../src/app/shared/modules/image-cropper/image.utils.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ImageCropperComponent = /** @class */ (function () {
    function ImageCropperComponent(elementRef, sanitizer, cd) {
        this.elementRef = elementRef;
        this.sanitizer = sanitizer;
        this.cd = cd;
        this.marginLeft = '0px';
        this.imageVisible = false;
        this.format = 'png';
        this.outputType = 'both';
        this.maintainAspectRatio = true;
        this.aspectRatio = 1;
        this.resizeToWidth = 0;
        this.roundCropper = false;
        this.onlyScaleDown = false;
        this.imageQuality = 92;
        this.autoCrop = true;
        this.cropper = {
            x1: -100,
            y1: -100,
            x2: 10000,
            y2: 10000
        };
        this.imageCropped = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.imageCroppedBase64 = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.imageCroppedFile = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.imageLoaded = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.loadImageFailed = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.initCropper();
    }
    Object.defineProperty(ImageCropperComponent.prototype, "imageFileChanged", {
        set: function (file) {
            this.initCropper();
            if (file) {
                this.loadImageFile(file);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ImageCropperComponent.prototype, "imageChangedEvent", {
        set: function (event) {
            this.initCropper();
            if (event && event.target && event.target.files && event.target.files.length > 0) {
                this.loadImageFile(event.target.files[0]);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ImageCropperComponent.prototype, "imageBase64", {
        set: function (imageBase64) {
            this.initCropper();
            this.loadBase64Image(imageBase64);
        },
        enumerable: true,
        configurable: true
    });
    ImageCropperComponent.prototype.ngOnChanges = function (changes) {
        var _this = this;
        if (changes['cropper']) {
            setTimeout(function () {
                _this.setMaxSize();
                _this.checkCropperPosition(false);
                _this.doAutoCrop();
                _this.cd.markForCheck();
            });
        }
        if (changes['aspectRatio']) {
            this.resetCropperPosition();
        }
    };
    ImageCropperComponent.prototype.initCropper = function () {
        this.imageVisible = false;
        this.originalImage = null;
        this.safeImgDataUrl = 'data:image/png;base64,iVBORw0KGg'
            + 'oAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAC0lEQVQYV2NgAAIAAAU'
            + 'AAarVyFEAAAAASUVORK5CYII=';
        this.moveStart = {
            active: false,
            type: null,
            position: null,
            x1: 0,
            y1: 0,
            x2: 0,
            y2: 0,
            clientX: 0,
            clientY: 0
        };
        this.maxSize = {
            width: 0,
            height: 0
        };
        this.originalSize = {
            width: 0,
            height: 0
        };
        this.cropper.x1 = -100;
        this.cropper.y1 = -100;
        this.cropper.x2 = 10000;
        this.cropper.y2 = 10000;
    };
    ImageCropperComponent.prototype.loadImageFile = function (file) {
        var _this = this;
        var fileReader = new FileReader();
        fileReader.onload = function (event) {
            var imageType = file.type;
            if (_this.isValidImageType(imageType)) {
                try {
                    _this.checkExifRotationAndLoadImage(event.target.result);
                }
                catch (e) {
                    _this.loadImageFailed.emit();
                }
            }
            else {
                _this.loadImageFailed.emit();
            }
        };
        fileReader.readAsDataURL(file);
    };
    ImageCropperComponent.prototype.isValidImageType = function (type) {
        return type === 'image/jpeg'
            || type === 'image/jpg'
            || type === 'image/png'
            || type === 'image/gif';
    };
    ImageCropperComponent.prototype.checkExifRotationAndLoadImage = function (imageBase64) {
        var _this = this;
        var exifRotation = __WEBPACK_IMPORTED_MODULE_2__image_utils__["a" /* ImageUtils */].getOrientation(imageBase64);
        if (exifRotation > 1) {
            __WEBPACK_IMPORTED_MODULE_2__image_utils__["a" /* ImageUtils */].resetOrientation(imageBase64, exifRotation, function (rotatedBase64) { return _this.loadBase64Image(rotatedBase64); });
        }
        else {
            this.loadBase64Image(imageBase64);
        }
    };
    ImageCropperComponent.prototype.loadBase64Image = function (imageBase64) {
        var _this = this;
        this.safeImgDataUrl = this.sanitizer.bypassSecurityTrustResourceUrl(imageBase64);
        this.originalImage = new Image();
        this.originalImage.onload = function () {
            _this.originalSize.width = _this.originalImage.width;
            _this.originalSize.height = _this.originalImage.height;
            _this.cd.markForCheck();
        };
        this.originalImage.src = imageBase64;
    };
    ImageCropperComponent.prototype.imageLoadedInView = function () {
        var _this = this;
        if (this.originalImage != null) {
            this.imageLoaded.emit();
            setTimeout(function () {
                _this.setMaxSize();
                _this.resetCropperPosition();
                _this.cd.markForCheck();
            });
        }
    };
    ImageCropperComponent.prototype.onResize = function (event) {
        this.resizeCropperPosition();
        this.setMaxSize();
    };
    ImageCropperComponent.prototype.resizeCropperPosition = function () {
        var displayedImage = this.elementRef.nativeElement.querySelector('.source-image');
        if (this.maxSize.width !== displayedImage.offsetWidth || this.maxSize.height !== displayedImage.offsetHeight) {
            this.cropper.x1 = this.cropper.x1 * displayedImage.offsetWidth / this.maxSize.width;
            this.cropper.x2 = this.cropper.x2 * displayedImage.offsetWidth / this.maxSize.width;
            this.cropper.y1 = this.cropper.y1 * displayedImage.offsetHeight / this.maxSize.height;
            this.cropper.y2 = this.cropper.y2 * displayedImage.offsetHeight / this.maxSize.height;
        }
    };
    ImageCropperComponent.prototype.resetCropperPosition = function () {
        var displayedImage = this.elementRef.nativeElement.querySelector('.source-image');
        if (displayedImage.offsetWidth / this.aspectRatio < displayedImage.offsetHeight) {
            this.cropper.x1 = 0;
            this.cropper.x2 = displayedImage.offsetWidth;
            var cropperHeight = displayedImage.offsetWidth / this.aspectRatio;
            this.cropper.y1 = (displayedImage.offsetHeight - cropperHeight) / 2;
            this.cropper.y2 = this.cropper.y1 + cropperHeight;
        }
        else {
            this.cropper.y1 = 0;
            this.cropper.y2 = displayedImage.offsetHeight;
            var cropperWidth = displayedImage.offsetHeight * this.aspectRatio;
            this.cropper.x1 = (displayedImage.offsetWidth - cropperWidth) / 2;
            this.cropper.x2 = this.cropper.x1 + cropperWidth;
        }
        this.doAutoCrop();
        this.imageVisible = true;
    };
    ImageCropperComponent.prototype.startMove = function (event, moveType, position) {
        if (position === void 0) { position = null; }
        this.moveStart = Object.assign({
            active: true,
            type: moveType,
            position: position,
            clientX: this.getClientX(event),
            clientY: this.getClientY(event)
        }, this.cropper);
    };
    ImageCropperComponent.prototype.moveImg = function (event) {
        if (this.moveStart.active) {
            event.stopPropagation();
            event.preventDefault();
            this.setMaxSize();
            if (this.moveStart.type === 'move') {
                this.move(event);
                this.checkCropperPosition(true);
            }
            else if (this.moveStart.type === 'resize') {
                this.resize(event);
                this.checkCropperPosition(false);
            }
            this.cd.detectChanges();
        }
    };
    ImageCropperComponent.prototype.setMaxSize = function () {
        var el = this.elementRef.nativeElement.querySelector('.source-image');
        this.maxSize.width = el.offsetWidth;
        this.maxSize.height = el.offsetHeight;
        this.marginLeft = this.sanitizer.bypassSecurityTrustStyle('calc(50% - ' + this.maxSize.width / 2 + 'px)');
    };
    ImageCropperComponent.prototype.checkCropperPosition = function (maintainSize) {
        if (maintainSize === void 0) { maintainSize = false; }
        if (this.cropper.x1 < 0) {
            this.cropper.x2 -= maintainSize ? this.cropper.x1 : 0;
            this.cropper.x1 = 0;
        }
        if (this.cropper.y1 < 0) {
            this.cropper.y2 -= maintainSize ? this.cropper.y1 : 0;
            this.cropper.y1 = 0;
        }
        if (this.cropper.x2 > this.maxSize.width) {
            this.cropper.x1 -= maintainSize ? (this.cropper.x2 - this.maxSize.width) : 0;
            this.cropper.x2 = this.maxSize.width;
        }
        if (this.cropper.y2 > this.maxSize.height) {
            this.cropper.y1 -= maintainSize ? (this.cropper.y2 - this.maxSize.height) : 0;
            this.cropper.y2 = this.maxSize.height;
        }
    };
    ImageCropperComponent.prototype.moveStop = function (event) {
        if (this.moveStart.active) {
            this.moveStart.active = false;
            this.doAutoCrop();
        }
    };
    ImageCropperComponent.prototype.move = function (event) {
        var diffX = this.getClientX(event) - this.moveStart.clientX;
        var diffY = this.getClientY(event) - this.moveStart.clientY;
        this.cropper.x1 = this.moveStart.x1 + diffX;
        this.cropper.y1 = this.moveStart.y1 + diffY;
        this.cropper.x2 = this.moveStart.x2 + diffX;
        this.cropper.y2 = this.moveStart.y2 + diffY;
    };
    ImageCropperComponent.prototype.resize = function (event) {
        var diffX = this.getClientX(event) - this.moveStart.clientX;
        var diffY = this.getClientY(event) - this.moveStart.clientY;
        switch (this.moveStart.position) {
            case 'left':
                this.cropper.x1 = Math.min(this.moveStart.x1 + diffX, this.cropper.x2 - 20);
                break;
            case 'topleft':
                this.cropper.x1 = Math.min(this.moveStart.x1 + diffX, this.cropper.x2 - 20);
                this.cropper.y1 = Math.min(this.moveStart.y1 + diffY, this.cropper.y2 - 20);
                break;
            case 'top':
                this.cropper.y1 = Math.min(this.moveStart.y1 + diffY, this.cropper.y2 - 20);
                break;
            case 'topright':
                this.cropper.x2 = Math.max(this.moveStart.x2 + diffX, this.cropper.x1 + 20);
                this.cropper.y1 = Math.min(this.moveStart.y1 + diffY, this.cropper.y2 - 20);
                break;
            case 'right':
                this.cropper.x2 = Math.max(this.moveStart.x2 + diffX, this.cropper.x1 + 20);
                break;
            case 'bottomright':
                this.cropper.x2 = Math.max(this.moveStart.x2 + diffX, this.cropper.x1 + 20);
                this.cropper.y2 = Math.max(this.moveStart.y2 + diffY, this.cropper.y1 + 20);
                break;
            case 'bottom':
                this.cropper.y2 = Math.max(this.moveStart.y2 + diffY, this.cropper.y1 + 20);
                break;
            case 'bottomleft':
                this.cropper.x1 = Math.min(this.moveStart.x1 + diffX, this.cropper.x2 - 20);
                this.cropper.y2 = Math.max(this.moveStart.y2 + diffY, this.cropper.y1 + 20);
                break;
        }
        if (this.maintainAspectRatio) {
            this.checkAspectRatio();
        }
    };
    ImageCropperComponent.prototype.checkAspectRatio = function () {
        var overflowX = 0;
        var overflowY = 0;
        switch (this.moveStart.position) {
            case 'top':
                this.cropper.x2 = this.cropper.x1 + (this.cropper.y2 - this.cropper.y1) * this.aspectRatio;
                overflowX = Math.max(this.cropper.x2 - this.maxSize.width, 0);
                overflowY = Math.max(0 - this.cropper.y1, 0);
                if (overflowX > 0 || overflowY > 0) {
                    this.cropper.x2 -= (overflowY * this.aspectRatio) > overflowX ? (overflowY * this.aspectRatio) : overflowX;
                    this.cropper.y1 += (overflowY * this.aspectRatio) > overflowX ? overflowY : overflowX / this.aspectRatio;
                }
                break;
            case 'bottom':
                this.cropper.x2 = this.cropper.x1 + (this.cropper.y2 - this.cropper.y1) * this.aspectRatio;
                overflowX = Math.max(this.cropper.x2 - this.maxSize.width, 0);
                overflowY = Math.max(this.cropper.y2 - this.maxSize.height, 0);
                if (overflowX > 0 || overflowY > 0) {
                    this.cropper.x2 -= (overflowY * this.aspectRatio) > overflowX ? (overflowY * this.aspectRatio) : overflowX;
                    this.cropper.y2 -= (overflowY * this.aspectRatio) > overflowX ? overflowY : (overflowX / this.aspectRatio);
                }
                break;
            case 'topleft':
                this.cropper.y1 = this.cropper.y2 - (this.cropper.x2 - this.cropper.x1) / this.aspectRatio;
                overflowX = Math.max(0 - this.cropper.x1, 0);
                overflowY = Math.max(0 - this.cropper.y1, 0);
                if (overflowX > 0 || overflowY > 0) {
                    this.cropper.x1 += (overflowY * this.aspectRatio) > overflowX ? (overflowY * this.aspectRatio) : overflowX;
                    this.cropper.y1 += (overflowY * this.aspectRatio) > overflowX ? overflowY : overflowX / this.aspectRatio;
                }
                break;
            case 'topright':
                this.cropper.y1 = this.cropper.y2 - (this.cropper.x2 - this.cropper.x1) / this.aspectRatio;
                overflowX = Math.max(this.cropper.x2 - this.maxSize.width, 0);
                overflowY = Math.max(0 - this.cropper.y1, 0);
                if (overflowX > 0 || overflowY > 0) {
                    this.cropper.x2 -= (overflowY * this.aspectRatio) > overflowX ? (overflowY * this.aspectRatio) : overflowX;
                    this.cropper.y1 += (overflowY * this.aspectRatio) > overflowX ? overflowY : overflowX / this.aspectRatio;
                }
                break;
            case 'right':
            case 'bottomright':
                this.cropper.y2 = this.cropper.y1 + (this.cropper.x2 - this.cropper.x1) / this.aspectRatio;
                overflowX = Math.max(this.cropper.x2 - this.maxSize.width, 0);
                overflowY = Math.max(this.cropper.y2 - this.maxSize.height, 0);
                if (overflowX > 0 || overflowY > 0) {
                    this.cropper.x2 -= (overflowY * this.aspectRatio) > overflowX ? (overflowY * this.aspectRatio) : overflowX;
                    this.cropper.y2 -= (overflowY * this.aspectRatio) > overflowX ? overflowY : overflowX / this.aspectRatio;
                }
                break;
            case 'left':
            case 'bottomleft':
                this.cropper.y2 = this.cropper.y1 + (this.cropper.x2 - this.cropper.x1) / this.aspectRatio;
                overflowX = Math.max(0 - this.cropper.x1, 0);
                overflowY = Math.max(this.cropper.y2 - this.maxSize.height, 0);
                if (overflowX > 0 || overflowY > 0) {
                    this.cropper.x1 += (overflowY * this.aspectRatio) > overflowX ? (overflowY * this.aspectRatio) : overflowX;
                    this.cropper.y2 -= (overflowY * this.aspectRatio) > overflowX ? overflowY : overflowX / this.aspectRatio;
                }
                break;
        }
    };
    ImageCropperComponent.prototype.doAutoCrop = function () {
        if (this.autoCrop) {
            this.crop();
        }
    };
    ImageCropperComponent.prototype.crop = function () {
        var displayedImage = this.elementRef.nativeElement.querySelector('.source-image');
        if (displayedImage && this.originalImage != null) {
            var ratio = this.originalSize.width / displayedImage.offsetWidth;
            var left = Math.round(this.cropper.x1 * ratio);
            var top_1 = Math.round(this.cropper.y1 * ratio);
            var width = Math.round((this.cropper.x2 - this.cropper.x1) * ratio);
            var height = Math.round((this.cropper.y2 - this.cropper.y1) * ratio);
            var resizeRatio = this.getResizeRatio(width);
            var resizedWidth = Math.floor(width * resizeRatio);
            var resizedHeight = Math.floor(height * resizeRatio);
            var cropCanvas = document.createElement('canvas');
            cropCanvas.width = resizedWidth;
            cropCanvas.height = resizedHeight;
            var ctx = cropCanvas.getContext('2d');
            if (ctx) {
                ctx.drawImage(this.originalImage, left, top_1, width, height, 0, 0, width * resizeRatio, height * resizeRatio);
                this.cropToOutputType(cropCanvas, resizedWidth, resizedHeight);
            }
        }
    };
    ImageCropperComponent.prototype.cropToOutputType = function (cropCanvas, resizedWidth, resizedHeight) {
        var _this = this;
        var output = {
            width: resizedWidth,
            height: resizedHeight,
            cropperPosition: Object.assign({}, this.cropper)
        };
        switch (this.outputType) {
            case 'base64':
                output.base64 = this.cropToBase64(cropCanvas);
                this.imageCropped.emit(output);
                break;
            case 'file':
                this.cropToFile(cropCanvas)
                    .then(function (result) {
                    output.file = result;
                    _this.imageCropped.emit(output);
                });
                break;
            case 'both':
                output.base64 = this.cropToBase64(cropCanvas);
                this.cropToFile(cropCanvas)
                    .then(function (result) {
                    output.file = result;
                    _this.imageCropped.emit(output);
                });
                break;
        }
    };
    ImageCropperComponent.prototype.cropToBase64 = function (cropCanvas) {
        var imageBase64 = cropCanvas.toDataURL('image/' + this.format, this.getQuality());
        this.imageCroppedBase64.emit(imageBase64);
        return imageBase64;
    };
    ImageCropperComponent.prototype.cropToFile = function (cropCanvas) {
        var _this = this;
        return this.getCanvasBlob(cropCanvas)
            .then(function (result) {
            if (result) {
                _this.imageCroppedFile.emit(result);
            }
            return result;
        });
    };
    ImageCropperComponent.prototype.getCanvasBlob = function (cropCanvas) {
        var _this = this;
        return new Promise(function (resolve) {
            cropCanvas.toBlob(function (result) { return resolve(result); }, 'image/' + _this.format, _this.getQuality());
        });
    };
    ImageCropperComponent.prototype.getQuality = function () {
        return Math.min(1, Math.max(0, this.imageQuality / 100));
    };
    ImageCropperComponent.prototype.getResizeRatio = function (width) {
        return this.resizeToWidth > 0 && (!this.onlyScaleDown || width > this.resizeToWidth)
            ? this.resizeToWidth / width
            : 1;
    };
    ImageCropperComponent.prototype.getClientX = function (event) {
        return event.clientX != null ? event.clientX : event.touches[0].clientX;
    };
    ImageCropperComponent.prototype.getClientY = function (event) {
        return event.clientY != null ? event.clientY : event.touches[0].clientY;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", File),
        __metadata("design:paramtypes", [File])
    ], ImageCropperComponent.prototype, "imageFileChanged", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], ImageCropperComponent.prototype, "imageChangedEvent", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], ImageCropperComponent.prototype, "imageBase64", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], ImageCropperComponent.prototype, "format", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], ImageCropperComponent.prototype, "outputType", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], ImageCropperComponent.prototype, "maintainAspectRatio", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], ImageCropperComponent.prototype, "aspectRatio", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], ImageCropperComponent.prototype, "resizeToWidth", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], ImageCropperComponent.prototype, "roundCropper", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], ImageCropperComponent.prototype, "onlyScaleDown", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], ImageCropperComponent.prototype, "imageQuality", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], ImageCropperComponent.prototype, "autoCrop", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], ImageCropperComponent.prototype, "cropper", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], ImageCropperComponent.prototype, "imageCropped", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], ImageCropperComponent.prototype, "imageCroppedBase64", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], ImageCropperComponent.prototype, "imageCroppedFile", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], ImageCropperComponent.prototype, "imageLoaded", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], ImageCropperComponent.prototype, "loadImageFailed", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('window:resize', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Event]),
        __metadata("design:returntype", void 0)
    ], ImageCropperComponent.prototype, "onResize", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('document:mousemove', ['$event']),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('document:touchmove', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], ImageCropperComponent.prototype, "moveImg", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('document:mouseup', ['$event']),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('document:touchend', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], ImageCropperComponent.prototype, "moveStop", null);
    ImageCropperComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-image-cropper',
            template: __webpack_require__("../../../../../src/app/shared/modules/image-cropper/image-cropper.component.html"),
            styles: [__webpack_require__("../../../../../src/app/shared/modules/image-cropper/image-cropper.component.scss")],
            changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectionStrategy"].OnPush
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["DomSanitizer"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"]])
    ], ImageCropperComponent);
    return ImageCropperComponent;
}());



/***/ }),

/***/ "../../../../../src/app/shared/modules/image-cropper/image-cropper.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImageCropperModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__image_cropper_component__ = __webpack_require__("../../../../../src/app/shared/modules/image-cropper/image-cropper.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ImageCropperModule = /** @class */ (function () {
    function ImageCropperModule() {
    }
    ImageCropperModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__image_cropper_component__["a" /* ImageCropperComponent */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__image_cropper_component__["a" /* ImageCropperComponent */]
            ]
        })
    ], ImageCropperModule);
    return ImageCropperModule;
}());



/***/ }),

/***/ "../../../../../src/app/shared/modules/image-cropper/image.utils.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImageUtils; });
var ImageUtils = /** @class */ (function () {
    function ImageUtils() {
    }
    ImageUtils.getOrientation = function (imageBase64) {
        var view = new DataView(this.base64ToArrayBuffer(imageBase64));
        if (view.getUint16(0, false) != 0xFFD8) {
            return -2;
        }
        var length = view.byteLength;
        var offset = 2;
        while (offset < length) {
            if (view.getUint16(offset + 2, false) <= 8)
                return -1;
            var marker = view.getUint16(offset, false);
            offset += 2;
            if (marker == 0xFFE1) {
                if (view.getUint32(offset += 2, false) != 0x45786966) {
                    return -1;
                }
                var little = view.getUint16(offset += 6, false) == 0x4949;
                offset += view.getUint32(offset + 4, little);
                var tags = view.getUint16(offset, little);
                offset += 2;
                for (var i = 0; i < tags; i++) {
                    if (view.getUint16(offset + (i * 12), little) == 0x0112) {
                        return view.getUint16(offset + (i * 12) + 8, little);
                    }
                }
            }
            else if ((marker & 0xFF00) != 0xFF00) {
                break;
            }
            else {
                offset += view.getUint16(offset, false);
            }
        }
        return -1;
    };
    ImageUtils.base64ToArrayBuffer = function (imageBase64) {
        imageBase64 = imageBase64.replace(/^data\:([^\;]+)\;base64,/gmi, '');
        var binaryString = atob(imageBase64);
        var len = binaryString.length;
        var bytes = new Uint8Array(len);
        for (var i = 0; i < len; i++) {
            bytes[i] = binaryString.charCodeAt(i);
        }
        return bytes.buffer;
    };
    ImageUtils.resetOrientation = function (srcBase64, srcOrientation, callback) {
        var img = new Image();
        img.onload = function () {
            var width = img.width;
            var height = img.height;
            var canvas = document.createElement('canvas');
            var ctx = canvas.getContext('2d');
            if (ctx) {
                if (4 < srcOrientation && srcOrientation < 9) {
                    canvas.width = height;
                    canvas.height = width;
                }
                else {
                    canvas.width = width;
                    canvas.height = height;
                }
                ImageUtils.transformCanvas(ctx, srcOrientation, width, height);
                ctx.drawImage(img, 0, 0);
                callback(canvas.toDataURL());
            }
            else {
                callback(srcBase64);
            }
        };
        img.src = srcBase64;
    };
    ImageUtils.transformCanvas = function (ctx, orientation, width, height) {
        switch (orientation) {
            case 2:
                ctx.transform(-1, 0, 0, 1, width, 0);
                break;
            case 3:
                ctx.transform(-1, 0, 0, -1, width, height);
                break;
            case 4:
                ctx.transform(1, 0, 0, -1, 0, height);
                break;
            case 5:
                ctx.transform(0, 1, 1, 0, 0, 0);
                break;
            case 6:
                ctx.transform(0, 1, -1, 0, height, 0);
                break;
            case 7:
                ctx.transform(0, -1, -1, 0, height, width);
                break;
            case 8:
                ctx.transform(0, -1, 1, 0, 0, width);
                break;
            default:
                break;
        }
    };
    return ImageUtils;
}());



/***/ }),

/***/ "../../../../../src/app/shared/pipes/from-now-pipes.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FromNowPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment__ = __webpack_require__("../../../../moment/moment.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_moment__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

// We use the Moment.js library to convert dates to relative times

var FromNowPipe = /** @class */ (function () {
    // Our pipe will transform dates and timestamps to relative times
    // using Moment.js
    function FromNowPipe() {
    }
    // The transform method will be called when the pipe is used
    // within a template
    FromNowPipe.prototype.transform = function (value) {
        if (value && (value instanceof Date ||
            typeof value === 'number')) {
            return __WEBPACK_IMPORTED_MODULE_1_moment__(value).fromNow();
        }
    };
    FromNowPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            // Specifying the name to be used within templates
            name: 'fromNow'
        })
        // Our pipe will transform dates and timestamps to relative times
        // using Moment.js
    ], FromNowPipe);
    return FromNowPipe;
}());



/***/ }),

/***/ "../../../../../src/app/shared/pipes/shared-pipes.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedPipesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__vn_currency_pipe_module__ = __webpack_require__("../../../../../src/app/shared/pipes/vn-currency-pipe.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__from_now_pipes_module__ = __webpack_require__("../../../../../src/app/shared/pipes/from-now-pipes.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__times_pipe_module__ = __webpack_require__("../../../../../src/app/shared/pipes/times-pipe.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shortened_name_pipe_module__ = __webpack_require__("../../../../../src/app/shared/pipes/shortened-name-pipe.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__vn_number_pipe_module__ = __webpack_require__("../../../../../src/app/shared/pipes/vn-number-pipe.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var SharedPipesModule = /** @class */ (function () {
    function SharedPipesModule() {
    }
    SharedPipesModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__vn_currency_pipe_module__["a" /* VnCurrencyPipe */],
                __WEBPACK_IMPORTED_MODULE_3__from_now_pipes_module__["a" /* FromNowPipe */],
                __WEBPACK_IMPORTED_MODULE_4__times_pipe_module__["a" /* TimesPipe */],
                __WEBPACK_IMPORTED_MODULE_5__shortened_name_pipe_module__["a" /* ShortenedName */],
                __WEBPACK_IMPORTED_MODULE_6__vn_number_pipe_module__["a" /* VnNumberPipe */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__vn_currency_pipe_module__["a" /* VnCurrencyPipe */],
                __WEBPACK_IMPORTED_MODULE_3__from_now_pipes_module__["a" /* FromNowPipe */],
                __WEBPACK_IMPORTED_MODULE_4__times_pipe_module__["a" /* TimesPipe */],
                __WEBPACK_IMPORTED_MODULE_5__shortened_name_pipe_module__["a" /* ShortenedName */],
                __WEBPACK_IMPORTED_MODULE_6__vn_number_pipe_module__["a" /* VnNumberPipe */]
            ],
        })
    ], SharedPipesModule);
    return SharedPipesModule;
}());



/***/ }),

/***/ "../../../../../src/app/shared/pipes/shortened-name-pipe.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShortenedName; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ShortenedName = /** @class */ (function () {
    function ShortenedName() {
    }
    // The transform method will be called when the pipe is used
    // within a template
    ShortenedName.prototype.transform = function (text) {
        if (!text) {
            return '';
        }
        var shortenedText = text
            .split(' ')
            .map(function (sub) { return sub.slice(0, 1).toUpperCase(); })
            .join('');
        return shortenedText.slice(0, 1) + shortenedText.slice(-1);
    };
    ShortenedName = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            // Specifying the name to be used within templates
            name: 'shortenedName'
        })
    ], ShortenedName);
    return ShortenedName;
}());



/***/ }),

/***/ "../../../../../src/app/shared/pipes/times-pipe.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TimesPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var TimesPipe = /** @class */ (function () {
    // Our pipe will transform dates and timestamps to relative times
    // using Moment.js
    function TimesPipe() {
    }
    // The transform method will be called when the pipe is used
    // within a template
    TimesPipe.prototype.transform = function (value, args) {
        var res = [];
        for (var i = 0; i < value; i++) {
            res.push(i);
        }
        return res;
    };
    TimesPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            // Specifying the name to be used within templates
            name: 'times'
        })
        // Our pipe will transform dates and timestamps to relative times
        // using Moment.js
    ], TimesPipe);
    return TimesPipe;
}());



/***/ }),

/***/ "../../../../../src/app/shared/pipes/vn-currency-pipe.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VnCurrencyPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PADDING = '000000';
var VnCurrencyPipe = /** @class */ (function () {
    function VnCurrencyPipe() {
        // TODO comes from configuration settings
        this.DECIMAL_SEPARATOR = ',';
        this.THOUSANDS_SEPARATOR = '.';
        this.CURRENCY_UNIT = ' VNĐ';
    }
    VnCurrencyPipe.prototype.transform = function (value, fractionSize) {
        if (fractionSize === void 0) { fractionSize = 0; }
        if (!value) {
            return '0' + this.CURRENCY_UNIT;
        }
        if (isNaN(+value)) {
            return value.toString();
        }
        var _a = (+value).toString()
            .split(this.DECIMAL_SEPARATOR), integer = _a[0], _b = _a[1], fraction = _b === void 0 ? '' : _b;
        fraction = fractionSize > 0
            ? this.DECIMAL_SEPARATOR + (fraction + PADDING).substring(0, fractionSize)
            : '';
        integer = integer.replace(/\B(?=(\d{3})+(?!\d))/g, this.THOUSANDS_SEPARATOR);
        return integer + fraction + (integer && this.CURRENCY_UNIT);
    };
    VnCurrencyPipe.prototype.parse = function (value, fractionSize) {
        if (fractionSize === void 0) { fractionSize = 0; }
        if (!isNaN(+value)) {
            return +value;
        }
        var integer = (value || '').replace(this.CURRENCY_UNIT, '');
        integer = integer.split(this.THOUSANDS_SEPARATOR).join('');
        return +integer;
    };
    VnCurrencyPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({ name: 'vnCurrency' }),
        __metadata("design:paramtypes", [])
    ], VnCurrencyPipe);
    return VnCurrencyPipe;
}());



/***/ }),

/***/ "../../../../../src/app/shared/pipes/vn-number-pipe.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VnNumberPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PADDING = '000000';
var VnNumberPipe = /** @class */ (function () {
    function VnNumberPipe() {
        // TODO comes from configuration settings
        this.DECIMAL_SEPARATOR = ',';
        this.THOUSANDS_SEPARATOR = '.';
    }
    VnNumberPipe.prototype.transform = function (value, fractionSize) {
        if (fractionSize === void 0) { fractionSize = 0; }
        if (!value) {
            return '0';
        }
        if (isNaN(+value)) {
            return value.toString();
        }
        var _a = (+value).toString()
            .split(this.DECIMAL_SEPARATOR), integer = _a[0], _b = _a[1], fraction = _b === void 0 ? '' : _b;
        fraction = fractionSize > 0
            ? this.DECIMAL_SEPARATOR + (fraction + PADDING).substring(0, fractionSize)
            : '';
        integer = integer.replace(/\B(?=(\d{3})+(?!\d))/g, this.THOUSANDS_SEPARATOR);
        return integer + fraction;
    };
    VnNumberPipe.prototype.parse = function (value, fractionSize) {
        if (fractionSize === void 0) { fractionSize = 0; }
        if (!isNaN(+value)) {
            return +value;
        }
        var integer = (value || '');
        integer = integer.split(this.THOUSANDS_SEPARATOR).join('');
        return +integer;
    };
    VnNumberPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({ name: 'vnNumber' }),
        __metadata("design:paramtypes", [])
    ], VnNumberPipe);
    return VnNumberPipe;
}());



/***/ }),

/***/ "../../../../../src/app/shared/services/activity.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActivityService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__("../../../../../src/app/shared/services/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__instant_search_service__ = __webpack_require__("../../../../../src/app/shared/services/instant-search.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__helpers_datetime_convert_helper__ = __webpack_require__("../../../../../src/app/shared/helpers/datetime-convert-helper.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ActivityService = /** @class */ (function () {
    function ActivityService(apiService, sessionService, instantSearchService) {
        this.apiService = apiService;
        this.sessionService = sessionService;
        this.instantSearchService = instantSearchService;
    }
    ActivityService_1 = ActivityService;
    Object.defineProperty(ActivityService.prototype, "employeeId", {
        get: function () {
            return this.sessionService.currentUser.employeeId;
        },
        enumerable: true,
        configurable: true
    });
    ActivityService.prototype.read = function (page, pageSize) {
        return this.apiService
            .get("/employee/" + this.employeeId + "/activities/" + page + "/" + pageSize)
            .map(function (response) {
            return {
                currentPage: response.result.page,
                pageSize: pageSize,
                pageCount: response.result.pageCount,
                total: response.result.recordCount,
                items: response.result.data.map(ActivityService_1.toActivityListItem)
            };
        })
            .share();
    };
    // tslint:disable-next-line:member-ordering
    ActivityService.toActivityListItem = function (result) {
        return {
            id: result.id,
            name: result.name,
            startDate: result.startDate,
            endDate: result.endDate,
            status: result.activityStatus,
            address: result.address,
            relatedToType: result.activityObjectType,
            specificRelated: {
                id: result.activityObjectTypeId,
                name: result.activityObjectTypeName
            },
            assignTo: (result.employee && result.employee.name) ||
                (result.employees && result.employees[0] && result.employees[0].name),
            assignToGroup: (result.employeeGroup && result.employeeGroup.name) ||
                (result.employeeGroups && result.employeeGroups[0] && result.employeeGroups[0].name),
            activityType: result.activityType ? result.activityType : 'Work',
            eventType: result.eventType,
            checkboxSelected: false,
            description: result.description,
        };
    };
    ActivityService.prototype.delete = function (ids) {
        if (ids.length === 1) {
            var url = "/employee/" + this.employeeId + "/activity/" + ids[0].activityType + "/" + ids[0].id + "/delete";
            return this.apiService.post(url).map(function (response) { return response.result; });
        }
        else {
            var url = "/employee/" + this.employeeId + "/activities/delete";
            return this.apiService
                .post(url, ids)
                .map(function (response) { return response.result; });
        }
    };
    ActivityService.prototype.view = function (activityId, activityType) {
        var url = "/employee/" + this.employeeId + "/activity/" + activityType.toLowerCase() + "/" + activityId;
        return this.apiService
            .get(url)
            .map(function (response) {
            var result = response.result;
            if (activityType === 'Event') {
                return {
                    id: result.id,
                    name: result.name,
                    activityType: result.activityType,
                    status: result.activityStatus,
                    startDate: result.startDate,
                    endDate: result.endDate,
                    address: result.address,
                    eventType: result.eventType,
                    specificRelated: {
                        id: result.activityObjectTypeId,
                        name: result.activityObjectTypeName
                    },
                    relatedToType: result.activityObjectType,
                    description: result.description,
                    assignTo: result.employee && {
                        id: result.employee.id,
                        name: result.employee.name
                    },
                    assignToGroup: result.employeeGroup && {
                        id: result.employeeGroup.id,
                        name: result.employeeGroup.name
                    },
                    createdDate: result.createdDate,
                    updatedDate: result.updatedDate,
                    branch: result.branch,
                    isShare: result.isShare
                };
            }
            if (activityType === 'Work') {
                return {
                    id: result.id,
                    name: result.name,
                    activityType: result.activityType,
                    status: result.activityStatus,
                    startDate: result.startDate,
                    endDate: result.endDate,
                    address: result.address,
                    eventType: result.eventType,
                    specificRelated: {
                        id: result.activityObjectTypeId,
                        name: result.activityObjectTypeName
                    },
                    relatedToType: result.activityObjectType,
                    description: result.description,
                    assignTo: result.employees &&
                        result.employees.length > 0 && {
                        id: result.employees[0].id,
                        name: result.employees[0].name
                    },
                    assignToGroup: result.employeeGroups && result.employeeGroups[0] && {
                        id: result.employeeGroups[0].id,
                        name: result.employeeGroups[0].name
                    },
                    createdDate: result.createdDate,
                    updatedDate: result.updatedDate,
                    branch: result.branch,
                    isShare: result.isShare
                };
            }
        })
            .share();
    };
    ActivityService.prototype.createOrUpdate = function (formValue, activityType) {
        var url = "employee/" + this.employeeId + "/activity";
        url = formValue.id ? url + ("/" + activityType.toLowerCase() + "/edit") : url;
        var requestModel = {};
        if (activityType === 'Work') {
            requestModel = {
                id: formValue.id,
                name: formValue.name && formValue.name.trim(),
                startDate: __WEBPACK_IMPORTED_MODULE_3__helpers_datetime_convert_helper__["a" /* default */].fromDtObjectToTimestamp(formValue.startDate),
                endDate: __WEBPACK_IMPORTED_MODULE_3__helpers_datetime_convert_helper__["a" /* default */].fromDtObjectToTimestamp(formValue.endDate),
                address: formValue.address && formValue.address.trim(),
                activityStatus: formValue.status,
                description: formValue.description && formValue.description.trim(),
                activityType: activityType,
                activityObjectTypeId: formValue.specificRelated && formValue.specificRelated.id,
                activityObjectTypeName: formValue.specificRelated && formValue.specificRelated.text,
                activityObjectType: formValue.relatedToType,
                eventType: formValue.type,
                employees: formValue.assignTo
                    ? [
                        {
                            id: formValue.assignTo
                        }
                    ]
                    : null,
                employeeGroups: formValue.assignToGroup
                    ? [
                        {
                            id: formValue.assignToGroup
                        }
                    ]
                    : null,
                branch: {
                    id: this.sessionService.branchId
                },
                isShare: formValue.isShare ? formValue.isShare : false
            };
        }
        if (activityType === 'Event') {
            requestModel = {
                id: formValue.id,
                name: formValue.name && formValue.name.trim(),
                startDate: __WEBPACK_IMPORTED_MODULE_3__helpers_datetime_convert_helper__["a" /* default */].fromDtObjectToTimestamp(formValue.startDate),
                endDate: __WEBPACK_IMPORTED_MODULE_3__helpers_datetime_convert_helper__["a" /* default */].fromDtObjectToTimestamp(formValue.endDate),
                address: formValue.address && formValue.address.trim(),
                activityStatus: formValue.status,
                description: formValue.description && formValue.description.trim(),
                activityType: activityType,
                activityObjectTypeId: formValue.specificRelated && formValue.specificRelated.id,
                activityObjectTypeName: formValue.specificRelated && formValue.specificRelated.text,
                activityObjectType: formValue.relatedToType,
                eventType: formValue.type,
                employee: formValue.assignTo
                    ? {
                        id: formValue.assignTo
                    }
                    : null,
                employeeGroup: formValue.assignToGroup
                    ? {
                        id: formValue.assignToGroup
                    }
                    : null,
                branch: {
                    id: this.sessionService.branchId
                },
                isShare: formValue.isShare ? formValue.isShare : false
            };
        }
        return this.apiService
            .post(url, requestModel)
            .map(function (response) { return response.result; });
    };
    ActivityService.prototype.instantSearch = function (terms, page, pageSize) {
        var searchUrl = "/employee/" + this.employeeId + "/activities/search/" + page + "/" + pageSize + "/?search=";
        return this.instantSearchService
            .search(searchUrl, terms)
            .map(function (result) {
            return {
                currentPage: result.page,
                pageSize: pageSize,
                pageCount: result.pageCount,
                total: result.recordCount,
                items: (result.data || []).map(ActivityService_1.toActivityListItem)
            };
        });
    };
    ActivityService.prototype.instantSearchWithFilter = function (terms, filter, page, pageSize) {
        var searchUrl = "/employee/" + this.employeeId + "/activities/filter/" + page + "/" + pageSize + "/?search=";
        return this.instantSearchService
            .searchWithFilter(searchUrl, terms, ActivityService_1.createFilterParams(filter))
            .map(function (result) {
            return {
                currentPage: result.page,
                pageSize: pageSize,
                pageCount: result.pageCount,
                total: result.recordCount,
                items: (result.data || []).map(ActivityService_1.toActivityListItem)
            };
        });
    };
    ActivityService.prototype.filter = function (searchTerm, filter, page, pageSize) {
        var filterUrl = "/employee/" + this.employeeId + "/activities/filter/" + page + "/" + pageSize + "/";
        var urlParams = ActivityService_1.createFilterParams(filter);
        urlParams.append('search', searchTerm);
        return this.apiService.get(filterUrl, urlParams).map(function (response) {
            var result = response.result;
            return {
                currentPage: result.page,
                pageSize: pageSize,
                pageCount: result.pageCount,
                total: result.recordCount,
                items: (result.data || []).map(ActivityService_1.toActivityListItem)
            };
        });
    };
    // tslint:disable-next-line:member-ordering
    ActivityService.createFilterParams = function (filter) {
        var urlFilterParams = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["e" /* URLSearchParams */]();
        urlFilterParams.append('sort', 'startDate');
        urlFilterParams.append('direct', 'desc');
        // tslint:disable-next-line:no-unused-expression
        filter.activityType && urlFilterParams.append('activityType', filter.activityType);
        // tslint:disable-next-line:no-unused-expression
        filter.activityStatus && urlFilterParams.append('activityStatus', filter.activityStatus);
        // tslint:disable-next-line:no-unused-expression
        filter.createdUserId && urlFilterParams.append('createdUserId', "" + filter.createdUserId);
        //  urlFilterParams.append('createdUserId', `${filter.createdUserId}`);
        // tslint:disable-next-line:no-unused-expression
        filter.fromDate && urlFilterParams.append('fromDate', filter.fromDate.toString());
        // tslint:disable-next-line:no-unused-expression
        filter.toDate && urlFilterParams.append('toDate', filter.toDate.toString());
        if (filter.assignmentEmployeeGroupId) {
            urlFilterParams.append('assignmentEmployeeGroupId', filter.assignmentEmployeeGroupId);
        }
        if (filter.assignmentEmployeeId) {
            urlFilterParams.append('assignmentEmployeeId', filter.assignmentEmployeeId);
        }
        return urlFilterParams;
    };
    ActivityService.prototype.search = function (term, page, pageSize) {
        var searchUrl = "/employee/" + this.employeeId + "/activities/search/" + page + "/" + pageSize + "/?search=" + term;
        return this.apiService.get(searchUrl).map(function (response) {
            var result = response.result;
            return {
                currentPage: result.page,
                pageSize: pageSize,
                pageCount: result.pageCount,
                total: result.recordCount,
                items: (result.data || []).map(ActivityService_1.toActivityListItem)
            };
        });
    };
    ActivityService.prototype.getDashboardItems = function (activityType, page, pageSize) {
        var url = "/employee/" + this.employeeId + "/activities/type/" + activityType + "/" + page + "/" + pageSize;
        return this.apiService
            .get(url)
            .map(function (response) {
            return response.result.data &&
                response.result.data.map(ActivityService_1.toActivityListItem);
        })
            .share();
    };
    ActivityService.prototype.getActivitiesByModuleItemId = function (moduleName, moduleItemId, page, pageSize) {
        var url = "/employee/" + this.employeeId + "/activities/" + moduleName + "/" + moduleItemId + "/" + page + "/" + pageSize;
        return this.apiService
            .get(url)
            .map(function (response) {
            var result = response.result;
            return {
                currentPage: result.page,
                pageSize: pageSize,
                pageCount: result.pageCount,
                total: result.recordCount,
                items: (result.data || []).map(ActivityService_1.toActivityListItem)
            };
        })
            .share();
    };
    ActivityService.prototype.importFile = function (file) {
        var url = "/employee/" + this.employeeId + "/activities";
        var formData = new FormData();
        formData.append('filePath', file);
        return this.apiService
            .postFile(url, formData)
            .map(function (response) {
            return response;
        })
            .share();
    };
    ActivityService = ActivityService_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__index__["c" /* ApiService */],
            __WEBPACK_IMPORTED_MODULE_1__index__["n" /* SessionService */],
            __WEBPACK_IMPORTED_MODULE_2__instant_search_service__["a" /* InstantSearchService */]])
    ], ActivityService);
    return ActivityService;
    var ActivityService_1;
}());



/***/ }),

/***/ "../../../../../src/app/shared/services/alert.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlertService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__ = __webpack_require__("../../../../rxjs/_esm5/Subject.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AlertService = /** @class */ (function () {
    function AlertService(router) {
        var _this = this;
        this.router = router;
        this.subject = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["Subject"]();
        this.keepAfterNavigationChange = false;
        // clear alert message on route change
        router.events.subscribe(function (event) {
            if (event instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["NavigationStart"]) {
                if (_this.keepAfterNavigationChange) {
                    // only keep for a single location change
                    _this.keepAfterNavigationChange = false;
                }
                else {
                    // clear alert
                    _this.subject.next();
                }
            }
        });
    }
    AlertService.prototype.success = function (message, keepAfterNavigationChange) {
        if (keepAfterNavigationChange === void 0) { keepAfterNavigationChange = false; }
        this.keepAfterNavigationChange = keepAfterNavigationChange;
        this.subject.next({ type: "success", text: message });
    };
    AlertService.prototype.error = function (message, keepAfterNavigationChange) {
        if (keepAfterNavigationChange === void 0) { keepAfterNavigationChange = false; }
        this.keepAfterNavigationChange = keepAfterNavigationChange;
        this.subject.next({ type: "error", text: message });
    };
    AlertService.prototype.getMessage = function () {
        return this.subject.asObservable();
    };
    AlertService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"]])
    ], AlertService);
    return AlertService;
}());



/***/ }),

/***/ "../../../../../src/app/shared/services/api.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_observable_throw__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/throw.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__session_service__ = __webpack_require__("../../../../../src/app/shared/services/session.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__alert_service__ = __webpack_require__("../../../../../src/app/shared/services/alert.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var ApiService = /** @class */ (function () {
    function ApiService(http, alertService, sessionService, router) {
        this.http = http;
        this.alertService = alertService;
        this.sessionService = sessionService;
        this.router = router;
    }
    ApiService.prototype.setHeaders = function () {
        var headersConfig = {
            "Content-Type": "application/json",
            Accept: "application/json",
        };
        if (this.sessionService.getToken()) {
            headersConfig["Authorization"] = "" + this.sessionService.getToken();
        }
        return new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */](headersConfig);
    };
    ApiService.prototype.setHeadersFile = function () {
        var headersConfig = {
            Accept: "application/json"
        };
        if (this.sessionService.getToken()) {
            headersConfig["Authorization"] = "" + this.sessionService.getToken();
        }
        return new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */](headersConfig);
    };
    ApiService.prototype.setHeadersFileExcel = function () {
        var headersConfig = {
            Accept: "application/vnd.ms-excel.sheet.macroEnabled.12"
            // 'Content-Type': 'application/json',
        };
        if (this.sessionService.getToken()) {
            headersConfig["Authorization"] = "" + this.sessionService.getToken();
        }
        return new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */](headersConfig);
    };
    ApiService.prototype.formatErrors = function (error) {
        switch (error.status) {
            case 401:
                this.sessionService.destroySession();
                this.router.navigate(["/login"]);
                break;
            case 500:
                // this.alertService.error('Đã có lỗi xảy ra ! Vui lòng thử lại sau.');
                break;
            default:
        }
        return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["a" /* Observable */].throw(error);
    };
    ApiService.prototype.get = function (path, params) {
        if (params === void 0) { params = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["e" /* URLSearchParams */](); }
        return this.http
            .get("" + __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].api_endpoint + path, {
            headers: this.setHeaders(),
            search: params
        })
            .catch(this.formatErrors.bind(this))
            .map(function (res) { return res.json(); });
    };
    ApiService.prototype.getNoHeader = function (path) {
        return this.http
            .get("" + __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].api_worldfone + path)
            .catch(this.formatErrors.bind(this))
            .map(function (res) { return res.json(); });
    };
    ApiService.prototype.getFile = function (path) {
        return this.http
            .get("" + __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].api_endpoint + path, {
            headers: this.setHeadersFileExcel(),
            responseType: __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* ResponseContentType */].Blob,
        })
            .catch(this.formatErrors.bind(this))
            .map(function (res) { return res.blob(); });
    };
    ApiService.prototype.put = function (path, body) {
        if (body === void 0) { body = {}; }
        return this.http
            .put("" + __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].api_endpoint + path, JSON.stringify(body), {
            headers: this.setHeaders()
        })
            .catch(this.formatErrors.bind(this))
            .map(function (res) { return res.json(); });
    };
    ApiService.prototype.post = function (path, body) {
        if (body === void 0) { body = {}; }
        return this.http
            .post("" + __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].api_endpoint + path, JSON.stringify(body), {
            headers: this.setHeaders(),
        })
            .catch(this.formatErrors.bind(this))
            .map(function (res) { return res.json(); });
    };
    ApiService.prototype.postFile = function (path, formData) {
        return this.http
            .post("" + __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].api_endpoint + path, formData, {
            headers: this.setHeadersFile()
        })
            .catch(this.formatErrors.bind(this))
            .map(function (res) { return res.json(); });
    };
    ApiService.prototype.delete = function (path) {
        return this.http
            .delete("" + __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].api_endpoint + path, {
            headers: this.setHeaders()
        })
            .catch(this.formatErrors.bind(this))
            .map(function (res) { return res.json(); });
    };
    ApiService.prototype.postNoHeader = function (path, body) {
        if (body === void 0) { body = {}; }
        return this.http
            .post("" + __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].api_endpoint + path, JSON.stringify(body))
            .catch(this.formatErrors.bind(this))
            .map(function (res) { return res.json(); });
    };
    ApiService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_9__alert_service__["a" /* AlertService */],
            __WEBPACK_IMPORTED_MODULE_8__session_service__["a" /* SessionService */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["Router"]])
    ], ApiService);
    return ApiService;
}());



/***/ }),

/***/ "../../../../../src/app/shared/services/audit.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuditService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__("../../../../../src/app/shared/services/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuditService = /** @class */ (function () {
    function AuditService(apiService, sessionService, userService) {
        this.apiService = apiService;
        this.sessionService = sessionService;
        this.userService = userService;
    }
    AuditService_1 = AuditService;
    Object.defineProperty(AuditService.prototype, "employeeId", {
        get: function () {
            return this.sessionService.currentUser.employeeId;
        },
        enumerable: true,
        configurable: true
    });
    AuditService.toAuditItem = function (result) {
        return {
            user: result.user,
            id: result.userId,
            date: result.date,
            moduleItemId: result.objectTypeId,
            moduleItemName: result.objectTypeName,
            actionCode: result.action,
            actionName: AuditService_1.translateAuditAction(result.action),
            valueChanges: result.auditValueDto &&
                result.auditValueDto.map(function (x) {
                    return {
                        field: x.field,
                        beforeValue: x.beforeValue,
                        afterValue: x.afterValue
                    };
                }),
            moduleName: result.objectType
        };
    };
    AuditService.translateAuditAction = function (actionCode) {
        switch (actionCode) {
            case 0:
                return "đã tạo";
            case 1:
                return "đã cập nhật";
            case 2:
                return "đã xóa";
            default:
                return "";
        }
    };
    AuditService.prototype.getAuditsByModuleItemId = function (moduleName, moduleItemId, page, pageSize) {
        var url = "/employee/" + this.employeeId + "/audits/" + moduleName + "/" + moduleItemId + "/" + page + "/" + pageSize;
        return this.apiService
            .get(url)
            .map(function (response) {
            var result = response.result;
            return {
                currentPage: result.page,
                pageSize: pageSize,
                pageCount: result.pageCount,
                total: result.recordCount,
                items: (result.data || []).map(AuditService_1.toAuditItem)
            };
        })
            .share();
    };
    AuditService.prototype.getAudits = function (page, pageSize) {
        var url = "/employee/" + this.employeeId + "/audits/" + page + "/" + pageSize;
        return this.apiService
            .get(url)
            .map(function (response) {
            var result = response.result;
            return {
                currentPage: result.page,
                pageSize: pageSize,
                pageCount: result.pageCount,
                total: result.recordCount,
                items: (result.data || []).map(AuditService_1.toAuditItem)
            };
        })
            .share();
    };
    AuditService = AuditService_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__index__["c" /* ApiService */],
            __WEBPACK_IMPORTED_MODULE_1__index__["n" /* SessionService */],
            __WEBPACK_IMPORTED_MODULE_1__index__["q" /* UserService */]])
    ], AuditService);
    return AuditService;
    var AuditService_1;
}());



/***/ }),

/***/ "../../../../../src/app/shared/services/auth.guard.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__session_service__ = __webpack_require__("../../../../../src/app/shared/services/session.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = /** @class */ (function () {
    function AuthGuard(router, sessionService) {
        this.router = router;
        this.sessionService = sessionService;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        if (this.sessionService.currentSession) {
            return true;
        }
        this.router.navigate(["/login"], {
            queryParams: { returnUrl: state.url }
        });
        return false;
    };
    AuthGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"],
            __WEBPACK_IMPORTED_MODULE_2__session_service__["a" /* SessionService */]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "../../../../../src/app/shared/services/call-center.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CallCenterService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1____ = __webpack_require__("../../../../../src/app/shared/services/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__ = __webpack_require__("../../../../rxjs/_esm5/Subject.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CallCenterService = /** @class */ (function () {
    function CallCenterService(sessionService, apiService) {
        this.sessionService = sessionService;
        this.apiService = apiService;
        this.callSubject = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["Subject"]();
        this.currentCall = this.callSubject.asObservable();
    }
    CallCenterService.prototype.getCallNumbers = function () {
        var url = "/employee/" + this.sessionService.currentUser.employeeId + "/callcenter/callnumbers";
        return this.apiService.get(url)
            .map(function (response) {
            var result = response.result;
            var currentCalls = result.currentCalls;
            var historyCalls = result.historyCalls;
            return currentCalls.map(function (item) {
                return {
                    callStatus: item && item.callStatus,
                    callUuid: item && item.callUuid,
                    callernumber: item && (item.direction === null ? item.destinationnumber.substring(1) : item.callernumber),
                    starttime: null,
                    destinationnumber: item && item.destinationnumber,
                    direction: item && item.direction
                };
            });
        })
            .share();
    };
    CallCenterService.prototype.getCallNumbersAway = function () {
        var url = "/employee/" + this.sessionService.currentUser.employeeId + "/callcenter/callnumbers/outbound";
        return this.apiService.get(url)
            .map(function (response) {
            return response.result.map(function (item) {
                return {
                    callStatus: item && item.callStatus,
                    callUuid: item && item.callUuid,
                    callernumber: item && item.destinationnumber.substring(1),
                    starttime: item && item.starttime,
                    destinationnumber: item && item.destinationnumber,
                    direction: item && item.direction
                };
            });
        })
            .share();
    };
    CallCenterService.prototype.getCallNumbersHistory = function () {
        var url = "/employee/" + this.sessionService.currentUser.employeeId + "/callcenter/callnumbers";
        return this.apiService.get(url)
            .map(function (response) {
            var result = response.result;
            var historyCalls = result.historyCalls;
            return historyCalls.map(function (item) {
                return {
                    callStatus: '',
                    callUuid: item && item.callUuid,
                    callernumber: item && (item.direction === null ? item.destinationnumber.substring(1) : item.callernumber),
                    starttime: item && item.starttime,
                    destinationnumber: item && item.destinationnumber,
                    direction: item && item.direction
                };
            });
        })
            .share();
    };
    CallCenterService.prototype.getObjectInfoByCallNumber = function (number) {
        var url = "/employee/" + this.sessionService.currentUser.employeeId + "/phone/" + number;
        return this.apiService.get(url)
            .map(function (response) {
            var result = response.result;
            return result.map(function (item) {
                return {
                    objectName: item && item.objectName,
                    objectAddress: item && item.objectAddress,
                    objectType: item && item.objectType,
                    objectId: item && item.objectId,
                    objectEmail: item && item.objectEmail,
                    objectCompany: item && item.objectCompany,
                    objectOwing: item && item.owing
                };
            });
        })
            .share();
    };
    CallCenterService.prototype.call = function (sdt) {
        var url = "makecall2.php?callernum=202&destnum=" + sdt + "&secrect=52cb7e9b9b0d23462f6d8c24b3cc27ad&version=3";
        return this.apiService.getNoHeader(url)
            .map(function (response) { return response; })
            .share();
    };
    CallCenterService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1____["n" /* SessionService */],
            __WEBPACK_IMPORTED_MODULE_1____["c" /* ApiService */]])
    ], CallCenterService);
    return CallCenterService;
}());



/***/ }),

/***/ "../../../../../src/app/shared/services/campaign.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CampaignService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__("../../../../../src/app/shared/services/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_index__ = __webpack_require__("../../../../../src/app/shared/models/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__helpers_datetime_convert_helper__ = __webpack_require__("../../../../../src/app/shared/helpers/datetime-convert-helper.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CampaignService = /** @class */ (function () {
    function CampaignService(sessionService, apiService, instantSearchService) {
        this.sessionService = sessionService;
        this.apiService = apiService;
        this.instantSearchService = instantSearchService;
    }
    CampaignService_1 = CampaignService;
    Object.defineProperty(CampaignService.prototype, "employeeId", {
        get: function () {
            return this.sessionService.currentUser.employeeId;
        },
        enumerable: true,
        configurable: true
    });
    CampaignService.prototype.read = function (page, pageSize) {
        var _this = this;
        var url = "employee/" + this.employeeId + "/campaigns/" + page + "/" + pageSize;
        return this.apiService
            .get(url)
            .map(function (response) {
            return {
                currentPage: response.result.page,
                pageSize: pageSize,
                pageCount: response.result.pageCount,
                total: response.result.recordCount,
                items: response.result.data.map(_this.toCampaignListItem)
            };
        })
            .share();
    };
    CampaignService.prototype.instantSearch = function (terms, page, pageSize) {
        var _this = this;
        var searchUrl = "/employee/" + this.employeeId + "/campaigns/search/" + page + "/" + pageSize + "/?search=";
        return this.instantSearchService
            .search(searchUrl, terms)
            .map(function (result) {
            return {
                currentPage: result.page,
                pageSize: pageSize,
                pageCount: result.pageCount,
                total: result.recordCount,
                items: (result.data || []).map(_this.toCampaignListItem)
            };
        });
    };
    CampaignService.prototype.instantSearchWithFilter = function (terms, filter, page, pageSize) {
        var _this = this;
        var searchUrl = "/employee/" + this.employeeId + "/campaigns/filter/" + page + "/" + pageSize + "/?search=";
        return this.instantSearchService
            .searchWithFilter(searchUrl, terms, CampaignService_1.createFilterParams(filter))
            .map(function (result) {
            return {
                currentPage: result.page,
                pageSize: pageSize,
                pageCount: result.pageCount,
                total: result.recordCount,
                items: (result.data || []).map(_this.toCampaignListItem)
            };
        });
    };
    CampaignService.prototype.filter = function (searchTerm, filter, page, pageSize) {
        var _this = this;
        var filterUrl = "/employee/" + this.employeeId + "/campaigns/filter/" + page + "/" + pageSize + "/";
        var urlParams = CampaignService_1.createFilterParams(filter);
        urlParams.append('search', searchTerm);
        return this.apiService.get(filterUrl, urlParams).map(function (response) {
            var result = response.result;
            return {
                currentPage: result.page,
                pageSize: pageSize,
                pageCount: result.pageCount,
                total: result.recordCount,
                items: (result.data || []).map(_this.toCampaignListItem)
            };
        });
    };
    // tslint:disable-next-line:member-ordering
    CampaignService.createFilterParams = function (filter) {
        var urlFilterParams = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["e" /* URLSearchParams */]();
        urlFilterParams.append('type', filter.type);
        urlFilterParams.append('campaignStatus', filter.campaignStatus);
        urlFilterParams.append('fromDate', filter.fromDate ? filter.fromDate.toString() : '');
        urlFilterParams.append('toDate', filter.toDate ? filter.toDate.toString() : '');
        // if (filter.assignToGroup) {
        //     urlFilterParams.append('assignTo', filter.assignToGroup);
        //     urlFilterParams.append('isAssignToGroup', 'true');
        // }
        // if (filter.assignTo) {
        //     urlFilterParams.append('assignTo', filter.assignTo);
        //     urlFilterParams.append('isAssignToGroup', 'false');
        // }
        if (filter.assignToGroup) {
            urlFilterParams.append('assignToEmployeeGroup', filter.assignToGroup);
        }
        if (filter.assignTo) {
            urlFilterParams.append('assignToEmployee', filter.assignTo);
        }
        return urlFilterParams;
    };
    CampaignService.prototype.search = function (term, page, pageSize) {
        var _this = this;
        var searchUrl = "/employee/" + this.employeeId + "/campaigns/search/" + page + "/" + pageSize + "/?search=" + term;
        return this.apiService.get(searchUrl).map(function (response) {
            var result = response.result;
            return {
                currentPage: result.page,
                pageSize: pageSize,
                pageCount: result.pageCount,
                total: result.recordCount,
                items: (result.data || []).map(_this.toCampaignListItem)
            };
        });
    };
    CampaignService.prototype.delete = function (ids) {
        var url = "/employee/" + this.employeeId + "/campaigns/delete";
        return this.apiService.post(url, ids).map(function (response) { return response.result; });
    };
    CampaignService.prototype.view = function (campaignId) {
        var url = "/employee/" + this.employeeId + "/campaign/" + campaignId;
        return this.apiService
            .get(url)
            .map(function (response) {
            var data = response.result;
            var result = new __WEBPACK_IMPORTED_MODULE_2__models_index__["b" /* CampaignModel */]();
            result.id = data.id;
            result.name = data.name;
            result.status = data.campaignStatus;
            result.category = data.type;
            result.marketingObject = data.campaignObject;
            result.assignTo =
                data.employee && {
                    id: data.employee.id,
                    name: data.employee.name
                };
            result.assignToGroup =
                data.employeeGroup && {
                    id: data.employeeGroup.id,
                    name: data.employeeGroup.name
                };
            result.campaignDateStart = data.startDate;
            result.campaignDateStop = data.completionDate;
            result.donors = data.donor;
            result.target = data.goals;
            result.numberOfParticipants = data.expectedNumber;
            result.budget = data.budget;
            result.actualCost = data.costs;
            result.expectedRevenue = data.expectedRevenue;
            result.actualRevenue = data.actualRevenue;
            result.expectedInvestmentEfficiency = data.expectedResults;
            result.actualInvestmentEfficiency = data.actualResults;
            result.description = data.description;
            result.createdDate = data.createdDate;
            result.updatedDate = data.updatedDate;
            result.campaignNo = data.campaignNo;
            result.relatedToType = data.objectType;
            // result.prospects = data.prospects;
            // result.customers = data.customers;
            // result.contacts = data.contacts;
            result.relatedList = data.objects;
            result.approachChannels = data.approachChannels;
            return result;
        })
            .share();
    };
    CampaignService.prototype.createOrUpdate = function (formValue) {
        var url = "employee/" + this.employeeId + "/campaign";
        url = formValue.id ? url + '/edit' : url;
        var requestModel = {
            id: formValue.id,
            name: formValue.name.trim(),
            type: formValue.category,
            campaignStatus: formValue.status,
            startDate: __WEBPACK_IMPORTED_MODULE_3__helpers_datetime_convert_helper__["a" /* default */].fromDtObjectToTimestamp(formValue.campaignDateStart),
            completionDate: __WEBPACK_IMPORTED_MODULE_3__helpers_datetime_convert_helper__["a" /* default */].fromDtObjectToTimestamp(formValue.campaignDateStop),
            goals: formValue.target && formValue.target.trim(),
            expectedNumber: formValue.numberOfParticipants,
            donor: formValue.donors,
            campaignObject: formValue.marketingObject && formValue.marketingObject.trim(),
            budget: formValue.budget,
            costs: formValue.actualCost,
            expectedRevenue: formValue.expectedRevenue,
            actualRevenue: formValue.actualRevenue,
            expectedResults: formValue.expectedInvestmentEfficiency,
            actualResults: formValue.actualInvestmentEfficiency,
            description: formValue.description && formValue.description.trim(),
            branch: {
                id: this.sessionService.branchId
            },
            employee: formValue.assignTo
                ? {
                    id: formValue.assignTo
                }
                : null,
            employeeGroup: formValue.assignToGroup
                ? {
                    id: formValue.assignToGroup
                }
                : null,
            objectType: formValue.relatedToType,
            objects: formValue.relatedList,
            approachChannels: formValue.approachChannels && formValue.approachChannels.length > 0 ? formValue.approachChannels.map(function (i) {
                return {
                    id: i.id ? i.id : i
                };
            }) : null,
        };
        return this.apiService
            .post(url, requestModel)
            .map(function (response) { return response.result; });
    };
    CampaignService.prototype.toCampaignListItem = function (result) {
        return {
            id: result.id,
            name: result.name,
            status: result.campaignStatus,
            category: result.type,
            marketingObject: result.campaignObject,
            assignTo: result.employee && result.employee.name,
            assignToGroup: result.employeeGroup && result.employeeGroup.name,
            campaignDateStart: result.startDate,
            campaignDateStop: result.completionDate,
            donors: result.donor,
            target: result.goals,
            numberOfParticipants: result.expectedNumber,
            budget: result.budget,
            actualCost: result.costs,
            expectedRevenue: result.expectedRevenue,
            actualRevenue: result.actualRevenue,
            expectedInvestmentEfficiency: result.expectedResults,
            actualInvestmentEfficiency: result.actualResults,
            description: result.description,
            checkboxSelected: false,
            campaignNo: result.campaignNo,
            createdDate: result.createdDate,
            updatedDate: result.updatedDate,
        };
    };
    CampaignService.prototype.getListCampaignByModule = function (moduleName, itemId, page, pageSize, filter) {
        var _this = this;
        var url = "employee/" + this.employeeId + "/" + moduleName + "/" + itemId + "/campaigns/" + page + "/" + pageSize;
        var urlFilterParams = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["e" /* URLSearchParams */]();
        if (filter.type) {
            urlFilterParams.append('type', filter.type);
        }
        return this.apiService.get(url, urlFilterParams).map(function (response) {
            var result = response.result;
            return {
                currentPage: result.page,
                pageSize: pageSize,
                pageCount: result.pageCount,
                total: result.recordCount,
                items: (result.data || []).map(_this.toCampaignListItem)
            };
        });
    };
    CampaignService = CampaignService_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__index__["n" /* SessionService */],
            __WEBPACK_IMPORTED_MODULE_1__index__["c" /* ApiService */],
            __WEBPACK_IMPORTED_MODULE_1__index__["k" /* InstantSearchService */]])
    ], CampaignService);
    return CampaignService;
    var CampaignService_1;
}());



/***/ }),

/***/ "../../../../../src/app/shared/services/comment.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommentService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__("../../../../../src/app/shared/services/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CommentService = /** @class */ (function () {
    function CommentService(apiService, sessionService) {
        this.apiService = apiService;
        this.sessionService = sessionService;
    }
    CommentService_1 = CommentService;
    Object.defineProperty(CommentService.prototype, "employeeId", {
        get: function () {
            return this.sessionService.currentUser.employeeId;
        },
        enumerable: true,
        configurable: true
    });
    CommentService.prototype.read = function (moduleName, moduleItemId, page, pageSize) {
        var url = "/employee/" + this.employeeId + "/comments/" + moduleName + "/" + moduleItemId + "/" + page + "/" + pageSize;
        return this.apiService
            .get(url)
            .map(function (response) {
            var result = response.result;
            return {
                currentPage: result.page,
                pageSize: pageSize,
                pageCount: result.pageCount,
                total: result.recordCount,
                items: (result.data || []).map(CommentService_1.toCommentModel)
            };
        })
            .share();
    };
    CommentService.prototype.create = function (moduleName, moduleItemId, newComment) {
        var url = "/employee/" + this.employeeId + "/comment";
        var requestModel = {
            type: moduleName,
            objectId: moduleItemId,
            description: newComment.content,
            parentId: newComment.parentId
        };
        return this.apiService
            .post(url, requestModel)
            .map(function (response) { return response.result; });
    };
    // tslint:disable-next-line:member-ordering
    CommentService.toCommentModel = function (resultItem) {
        var comment = CommentService_1.toCommentItem(resultItem);
        if (resultItem.children && resultItem.children.length > 0) {
            comment.replyComments = resultItem.children
                .sort(function (d1, d2) { return d1.createdDate - d2.createdDate; })
                .map(CommentService_1.toCommentItem);
        }
        return comment;
    };
    // tslint:disable-next-line:member-ordering
    CommentService.toCommentItem = function (item) {
        return {
            id: item.id,
            parentId: item.parentId,
            time: item.createdDate,
            content: item.description,
            user: item.employee && {
                userId: item.employee.id,
                userName: item.employee.name
            },
            replyComments: [],
            avatar: ""
        };
    };
    CommentService = CommentService_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__index__["c" /* ApiService */],
            __WEBPACK_IMPORTED_MODULE_1__index__["n" /* SessionService */]])
    ], CommentService);
    return CommentService;
    var CommentService_1;
}());



/***/ }),

/***/ "../../../../../src/app/shared/services/confirmation.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfirmationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap_modal_modal__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/modal/modal.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_confirmation_popup_confirmation_popup_component__ = __webpack_require__("../../../../../src/app/shared/components/confirmation-popup/confirmation-popup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_confirmation_popup_call_away_confirmation_popup_call_away_component__ = __webpack_require__("../../../../../src/app/shared/components/confirmation-popup-call-away/confirmation-popup-call-away.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_confirmation_routing_popup_confirmation_routing_popup_component__ = __webpack_require__("../../../../../src/app/shared/components/confirmation-routing-popup/confirmation-routing-popup.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ConfirmationService = /** @class */ (function () {
    function ConfirmationService(modalService) {
        this.modalService = modalService;
    }
    ConfirmationService.prototype.confirm = function (message, siFn, textOk) {
        // this.setConfirmation(message, siFn, noFn);
        this.openConfirmationPopup({
            type: 'confirm',
            text: message,
            siFn: function () {
                siFn();
            }
        }, textOk);
    };
    ConfirmationService.prototype.confirmRouting = function (message, siFn, isCancel, textOk) {
        // this.setConfirmation(message, siFn, noFn);
        this.openConfirmationRoutingPopup({
            type: 'confirm',
            text: message,
            siFn: function () {
                siFn();
            },
            isCancel: function () {
                isCancel();
            }
        }, textOk);
    };
    ConfirmationService.prototype.confirmCallAway = function (message, siFn) {
        // this.setConfirmation(message, siFn, noFn);
        this.openConfirmationPopupCallAway({
            type: 'confirm',
            text: message,
            siFn: function () {
                siFn();
            }
        });
    };
    ConfirmationService.prototype.openConfirmationRoutingPopup = function (message, textOk) {
        var modalRef = this.modalService.open(__WEBPACK_IMPORTED_MODULE_4__components_confirmation_routing_popup_confirmation_routing_popup_component__["a" /* ConfirmationRoutingPopupComponent */]);
        modalRef.componentInstance.message = message;
        if (textOk) {
            modalRef.componentInstance.textOkDefault = textOk;
        }
    };
    ConfirmationService.prototype.openConfirmationPopup = function (message, textOk) {
        var modalRef = this.modalService.open(__WEBPACK_IMPORTED_MODULE_2__components_confirmation_popup_confirmation_popup_component__["a" /* ConfirmationPopupComponent */]);
        modalRef.componentInstance.message = message;
        if (textOk) {
            modalRef.componentInstance.textOkDefault = textOk;
        }
    };
    ConfirmationService.prototype.openConfirmationPopupCallAway = function (message) {
        var modalRef = this.modalService.open(__WEBPACK_IMPORTED_MODULE_3__components_confirmation_popup_call_away_confirmation_popup_call_away_component__["a" /* ConfirmationPopupCallAwayComponent */]);
        modalRef.componentInstance.message = message;
    };
    ConfirmationService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap_modal_modal__["a" /* NgbModal */]])
    ], ConfirmationService);
    return ConfirmationService;
}());



/***/ }),

/***/ "../../../../../src/app/shared/services/contact.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__helpers_utils_helper__ = __webpack_require__("../../../../../src/app/shared/helpers/utils.helper.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services__ = __webpack_require__("../../../../../src/app/shared/services/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__helpers_datetime_convert_helper__ = __webpack_require__("../../../../../src/app/shared/helpers/datetime-convert-helper.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ContactService = /** @class */ (function () {
    function ContactService(apiService, sessionService, instantSearchService) {
        this.apiService = apiService;
        this.sessionService = sessionService;
        this.instantSearchService = instantSearchService;
    }
    ContactService_1 = ContactService;
    Object.defineProperty(ContactService.prototype, "employeeId", {
        get: function () {
            return this.sessionService.currentUser.employeeId;
        },
        enumerable: true,
        configurable: true
    });
    ContactService.prototype.read = function (page, pageSize) {
        var _this = this;
        return this.apiService
            .get("/employee/" + this.employeeId + "/contacts/" + page + "/" + pageSize)
            .map(function (response) {
            return {
                currentPage: response.result.page,
                pageSize: pageSize,
                pageCount: response.result.pageCount,
                total: response.result.recordCount,
                items: response.result.data.map(_this.toContactListItem)
            };
        })
            .share();
    };
    ContactService.prototype.createOrUpdate = function (contactFormValue, avatar) {
        var url = "/employee/" + this.employeeId + "/contact";
        url = contactFormValue.id ? url + '/edit' : url;
        var assignTo = __WEBPACK_IMPORTED_MODULE_4__helpers_utils_helper__["a" /* default */].parseAssignTo(contactFormValue.assignTo);
        var requestModel = {
            id: contactFormValue.id,
            title: contactFormValue.salutation,
            birthday: __WEBPACK_IMPORTED_MODULE_6__helpers_datetime_convert_helper__["a" /* default */].fromDtObjectToTimestamp(contactFormValue.dateOfBirth),
            firstName: contactFormValue.firstName,
            lastName: contactFormValue.lastName,
            customers: contactFormValue.customer &&
                contactFormValue.customer.length > 0
                ? contactFormValue.customer.map(function (x) { return ({ id: x.id }); })
                : null,
            email: contactFormValue.email,
            potentialSource: null,
            customerResource: {
                id: contactFormValue.prospectSource
            },
            jobTitle: contactFormValue.jobTitle,
            department: contactFormValue.department,
            phone: contactFormValue.companyPhone,
            cellularPhone: contactFormValue.mobilePhone,
            homePhone: contactFormValue.homePhone,
            secondaryPhone: contactFormValue.extraPhone,
            assistant: contactFormValue.assistant,
            assistantPhone: contactFormValue.assistantPhone,
            information: contactFormValue.description,
            address: contactFormValue.address,
            district: contactFormValue.district,
            city: contactFormValue.city,
            country: contactFormValue.country,
            address2: contactFormValue.otherAddress,
            district2: contactFormValue.otherDistrict,
            city2: contactFormValue.otherCity,
            country2: contactFormValue.otherCountry,
            employee: assignTo.assignToType === 'employee'
                ? {
                    id: assignTo.assignToId
                }
                : null,
            employeeGroup: assignTo.assignToType === 'group'
                ? {
                    id: assignTo.assignToId
                }
                : null,
            image: avatar,
            gender: contactFormValue.gender,
            lunarBirthday: contactFormValue.lunarBirthday
        };
        return this.apiService
            .post(url, requestModel)
            .map(function (response) { return response.result; });
    };
    ContactService.prototype.createOrUpdateFormData = function (contactFormValue, avatar, visitCard) {
        var url = "employee/" + this.employeeId + "/contact";
        url = contactFormValue.id ? url + '/edit' : url;
        var formData = new FormData();
        // tslint:disable-next-line:no-unused-expression
        contactFormValue.id && formData.append('id', contactFormValue.id);
        contactFormValue.salutation && formData.append('title', contactFormValue.salutation);
        // tslint:disable-next-line:max-line-length
        contactFormValue.dateOfBirth && formData.append('birthdayTimeStamp', __WEBPACK_IMPORTED_MODULE_6__helpers_datetime_convert_helper__["a" /* default */].fromDtObjectToTimestamp(contactFormValue.dateOfBirth) + '');
        contactFormValue.name && formData.append('name', contactFormValue.name.trim());
        formData.append('branchId', this.sessionService.branchId.toString());
        contactFormValue.assignTo && formData.append('employeeId', contactFormValue.assignTo);
        contactFormValue.assignToGroup && formData.append('employeeGroupId', contactFormValue.assignToGroup);
        if (contactFormValue.customer && contactFormValue.customer.length > 0) {
            contactFormValue.customer.forEach(function (x) { return formData.append('customerIds', x.id); });
        }
        contactFormValue.email && formData.append('email', contactFormValue.email.trim());
        contactFormValue.prospectSource && formData.append('customerResourceId', contactFormValue.prospectSource);
        contactFormValue.jobTitle && formData.append('jobTitle', contactFormValue.jobTitle.trim());
        contactFormValue.department && formData.append('department', contactFormValue.department.trim());
        contactFormValue.companyPhone && formData.append('phone', contactFormValue.companyPhone.trim());
        contactFormValue.mobilePhone && formData.append('cellularPhone', contactFormValue.mobilePhone.trim());
        contactFormValue.homePhone && formData.append('homePhone', contactFormValue.homePhone.trim());
        contactFormValue.extraPhone && formData.append('secondaryPhone', contactFormValue.extraPhone.trim());
        contactFormValue.assistant && formData.append('assistant', contactFormValue.assistant.trim());
        contactFormValue.assistantPhone && formData.append('assistantPhone', contactFormValue.assistantPhone.trim());
        contactFormValue.description && formData.append('information', contactFormValue.description.trim());
        contactFormValue.address && formData.append('address', contactFormValue.address.trim());
        contactFormValue.otherAddress && formData.append('address2', contactFormValue.otherAddress.trim());
        contactFormValue.gender && formData.append('gender', contactFormValue.gender);
        contactFormValue.lunarBirthday && formData.append('lunarBirthday', contactFormValue.lunarBirthday);
        avatar && formData.append('imageFile', avatar);
        visitCard && formData.append('visitCardFile', visitCard);
        this.getLocation(contactFormValue) && formData.append('locationId', this.getLocation(contactFormValue));
        this.getOtherLocation(contactFormValue) && formData.append('locationOtherId', this.getOtherLocation(contactFormValue));
        return this.apiService.postFile(url, formData).map(function (res) { return res.result; });
    };
    ContactService.prototype.getLocation = function (model) {
        // tslint:disable-next-line:triple-equals
        if (model.district && model.district != '0') {
            return model.district + '';
            // tslint:disable-next-line:triple-equals
        }
        else if (model.city && model.city != '0') {
            return model.city + '';
            // tslint:disable-next-line:triple-equals
        }
        else if (model.country && model.country != '0') {
            return model.country + '';
        }
        else {
            return null;
        }
    };
    ContactService.prototype.getOtherLocation = function (model) {
        // tslint:disable-next-line:triple-equals
        if (model.otherDistrict && model.otherDistrict != '0') {
            return model.otherDistrict + '';
            // tslint:disable-next-line:triple-equals
        }
        else if (model.otherCity && model.otherCity != '0') {
            return model.otherCity + '';
            // tslint:disable-next-line:triple-equals
        }
        else if (model.otherCountry && model.otherCountry != '0') {
            return model.otherCountry + '';
        }
        else {
            return null;
        }
    };
    ContactService.prototype.view = function (contactId) {
        var url = "/employee/" + this.employeeId + "/contact/" + contactId;
        return this.apiService
            .get(url)
            .map(function (response) {
            var result = response.result;
            return {
                id: result.id,
                salutation: result.title || '',
                name: result.name,
                dateOfBirth: result.birthday,
                customer: result.customerContactGroups.map(function (x) { return ({
                    id: x.customer.id,
                    text: x.customer.name
                }); }),
                prospectSource: result.customerResource,
                jobTitle: result.jobTitle,
                department: result.department,
                companyPhone: result.phone,
                mobilePhone: result.cellularPhone,
                homePhone: result.homePhone,
                extraPhone: result.secondaryPhone,
                email: result.email,
                assistant: result.assistant,
                assistantPhone: result.assistantPhone,
                assignTo: result.employee && {
                    id: result.employee.id,
                    name: result.employee.name
                },
                assignToGroup: result.employeeGroup && {
                    id: result.employeeGroup.id,
                    name: result.employeeGroup.name
                },
                address: result.address,
                city: result.location && __WEBPACK_IMPORTED_MODULE_4__helpers_utils_helper__["a" /* default */].getLocationId(result.location, 'StateProvince').toString(),
                country: result.location && __WEBPACK_IMPORTED_MODULE_4__helpers_utils_helper__["a" /* default */].getLocationId(result.location, 'Country').toString(),
                district: result.location && __WEBPACK_IMPORTED_MODULE_4__helpers_utils_helper__["a" /* default */].getLocationId(result.location, 'District').toString(),
                otherAddress: result.address2,
                otherDistrict: result.locationOther && __WEBPACK_IMPORTED_MODULE_4__helpers_utils_helper__["a" /* default */].getLocationId(result.locationOther, 'District').toString(),
                otherCity: result.locationOther && __WEBPACK_IMPORTED_MODULE_4__helpers_utils_helper__["a" /* default */].getLocationId(result.locationOther, 'StateProvince').toString(),
                otherCountry: result.locationOther && __WEBPACK_IMPORTED_MODULE_4__helpers_utils_helper__["a" /* default */].getLocationId(result.locationOther, 'Country').toString(),
                description: result.information,
                contactImageSrc: result.id,
                createdDate: result.createdDate,
                updatedDate: result.updatedDate,
                prospect: result.prospect && {
                    id: result.prospect.id,
                    fullName: result.prospect.name
                },
                image: result.image ? __WEBPACK_IMPORTED_MODULE_7__environments_environment__["a" /* environment */].api_endpoint + "images/" + result.image : '',
                cardVisit: result.visitCard ? __WEBPACK_IMPORTED_MODULE_7__environments_environment__["a" /* environment */].api_endpoint + "images/" + result.visitCard : '',
                gender: result.gender,
                lunarBirthday: result.lunarBirthday,
                isAssigned: result.isAssigned,
                location: result.location,
                locationOther: result.locationOther,
                contactNumber: result.contactNumber,
            };
        })
            .share();
    };
    ContactService.prototype.delete = function (ids) {
        var url = "/employee/" + this.employeeId + "/contacts/delete";
        return this.apiService.post(url, ids).map(function (response) { return response.result; });
    };
    ContactService.prototype.instantSearch = function (terms, page, pageSize) {
        var _this = this;
        var searchUrl = "/employee/" + this.employeeId + "/contacts/search/" + page + "/" + pageSize + "/?search=";
        return this.instantSearchService
            .search(searchUrl, terms)
            .map(function (result) {
            return {
                currentPage: result.page,
                pageSize: pageSize,
                pageCount: result.pageCount,
                total: result.recordCount,
                items: (result.data || []).map(_this.toContactListItem)
            };
        });
    };
    ContactService.prototype.instantSearchWithFilter = function (terms, filter, page, pageSize) {
        var _this = this;
        var searchUrl = "/employee/" + this.employeeId + "/contacts/filter/" + page + "/" + pageSize + "/?search=";
        return this.instantSearchService
            .searchWithFilter(searchUrl, terms, ContactService_1.createFilterParams(filter))
            .map(function (result) {
            return {
                currentPage: result.page,
                pageSize: pageSize,
                pageCount: result.pageCount,
                total: result.recordCount,
                items: (result.data || []).map(_this.toContactListItem)
            };
        });
    };
    ContactService.prototype.filter = function (searchTerm, filter, page, pageSize) {
        var _this = this;
        var filterUrl = "/employee/" + this.employeeId + "/contacts/filter/" + page + "/" + pageSize + "/";
        var urlParams = ContactService_1.createFilterParams(filter);
        urlParams.append('search', searchTerm);
        return this.apiService.get(filterUrl, urlParams).map(function (response) {
            var result = response.result;
            return {
                currentPage: result.page,
                pageSize: pageSize,
                pageCount: result.pageCount,
                total: result.recordCount,
                items: (result.data || []).map(_this.toContactListItem)
            };
        });
    };
    // tslint:disable-next-line:member-ordering
    ContactService.createFilterParams = function (filter) {
        var urlFilterParams = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* URLSearchParams */]();
        urlFilterParams.append('prospectSource', filter.prospectSource);
        urlFilterParams.append('jobTitle', filter.jobTitle);
        urlFilterParams.append('fromDate', filter.fromDate ? filter.fromDate.toString() : '');
        urlFilterParams.append('toDate', filter.toDate ? filter.toDate.toString() : '');
        urlFilterParams.append('month', filter.month ? filter.month : null);
        // tslint:disable-next-line:no-unused-expression
        filter.customerId && urlFilterParams.append('customerId', filter.customerId['id']);
        // tslint:disable-next-line:no-unused-expression
        filter.bussiness && urlFilterParams.append('bussiness', filter.bussiness);
        // if (filter.assignToGroup) {
        //     urlFilterParams.append('assignTo', filter.assignToGroup);
        //     urlFilterParams.append('isAssignToGroup', 'true');
        // }
        // if (filter.assignTo) {
        //     urlFilterParams.append('assignTo', filter.assignTo);
        //     urlFilterParams.append('isAssignToGroup', 'false');
        // }
        if (filter.assignToGroup) {
            urlFilterParams.append('assignToEmployeeGroup', filter.assignToGroup);
        }
        if (filter.assignTo) {
            urlFilterParams.append('assignToEmployee', filter.assignTo);
        }
        // tslint:disable-next-line:no-unused-expression
        filter.hasUpcomingBirthday && urlFilterParams.append('hasUpcomingBirthday', 'true');
        return urlFilterParams;
    };
    ContactService.prototype.search = function (term, page, pageSize) {
        var _this = this;
        var searchUrl = "/employee/" + this.employeeId + "/contacts/search/" + page + "/" + pageSize + "/?search=" + term;
        return this.apiService.get(searchUrl).map(function (response) {
            var result = response.result;
            return {
                currentPage: result.page,
                pageSize: pageSize,
                pageCount: result.pageCount,
                total: result.recordCount,
                items: (result.data || []).map(_this.toContactListItem)
            };
        });
    };
    ContactService.prototype.toContactListItem = function (result) {
        return {
            id: result.id,
            salutation: result.title || '',
            firstName: result.firstName,
            lastName: result.lastName,
            name: result.name,
            companyPhone: result.phone,
            mobilePhone: result.cellularPhone,
            email: result.email,
            companyName: result.customerContactGroups && result.customerContactGroups.length > 0 ?
                result.customerContactGroups.map(function (i) { return i.customer.name; }).join(', ') : null,
            source: result.potentialSource,
            jobTitle: result.jobTitle,
            assignTo: result.employee && result.employee.name,
            assignToGroup: result.employeeGroup && result.employeeGroup.name,
            checkboxSelected: false,
            city: result.city,
            country: result.country,
            address: result.address,
            district: result.district,
            city2: result.city2,
            country2: result.country2,
            address2: result.address2,
            district2: result.district2,
            description: result.information,
            assistant: result.assistant,
            department: result.department,
            homePhone: result.homePhone,
            secondaryPhone: result.secondaryPhone,
            assistantPhone: result.assistantPhone,
            customerResource: result.customerResource && result.customerResource.name,
            isAssigned: result.isAssigned,
            location: result.location,
            locationOther: result.locationOther,
            contactNumber: result.contactNumber,
            dob: result.birthday,
            phone: result.phone,
            updatedDate: result.updatedDate,
            customerPhone: result.phone
        };
    };
    ContactService.prototype.importFile = function (file) {
        var url = "/employee/" + this.employeeId + "/contacts";
        var formData = new FormData();
        formData.append('filePath', file);
        return this.apiService
            .postFile(url, formData)
            .map(function (response) {
            return response;
        })
            .share();
    };
    ContactService.prototype.getCustomerListByContact = function (contactId) {
        var url = "employee/" + this.employeeId + "/customers/contact/" + contactId;
        return this.apiService
            .get(url)
            .map(function (response) {
            return response.result.map(function (x) {
                return {
                    id: x.id,
                    text: "" + x.name
                };
            });
        })
            .share();
    };
    ContactService = ContactService_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__services__["c" /* ApiService */],
            __WEBPACK_IMPORTED_MODULE_5__services__["n" /* SessionService */],
            __WEBPACK_IMPORTED_MODULE_5__services__["k" /* InstantSearchService */]])
    ], ContactService);
    return ContactService;
    var ContactService_1;
}());



/***/ }),

/***/ "../../../../../src/app/shared/services/customer.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomerService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__helpers_utils_helper__ = __webpack_require__("../../../../../src/app/shared/helpers/utils.helper.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services__ = __webpack_require__("../../../../../src/app/shared/services/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__helpers_datetime_convert_helper__ = __webpack_require__("../../../../../src/app/shared/helpers/datetime-convert-helper.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__helpers_convert_number_helper__ = __webpack_require__("../../../../../src/app/shared/helpers/convert-number.helper.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var CustomerService = /** @class */ (function () {
    function CustomerService(apiService, sessionService, instantSearchService) {
        this.apiService = apiService;
        this.sessionService = sessionService;
        this.instantSearchService = instantSearchService;
    }
    CustomerService_1 = CustomerService;
    Object.defineProperty(CustomerService.prototype, "employeeId", {
        get: function () {
            return this.sessionService.currentUser.employeeId;
        },
        enumerable: true,
        configurable: true
    });
    CustomerService.prototype.read = function (page, pageSize) {
        var _this = this;
        return this.apiService
            .get("/employee/" + this.employeeId + "/customers/" + page + "/" + pageSize)
            .map(function (response) {
            return {
                currentPage: response.result.page,
                pageSize: pageSize,
                pageCount: response.result.pageCount,
                total: response.result.recordCount,
                items: response.result.data.map(_this.toCustomerListItem)
            };
        })
            .share();
    };
    CustomerService.prototype.createOrUpdate = function (customer) {
        var url = "/employee/" + this.employeeId + "/customer";
        url = customer.id ? url + '/edit' : url;
        var assignTo = __WEBPACK_IMPORTED_MODULE_4__helpers_utils_helper__["a" /* default */].parseAssignTo(customer.assignTo);
        var model = {
            id: customer.id,
            name: customer.name,
            website: customer.website,
            fax: customer.fax,
            tel1: customer.phoneNumberOfficial,
            tel2: customer.phoneNumberExtra,
            stockCode: customer.stockCode,
            taxNumber: customer.taxCode,
            email: customer.emailOfficial,
            email2: customer.emailExtra,
            business: customer.career,
            evaluate: customer.rating,
            classify: customer.type,
            group: customer.group,
            revenueDueYear: customer.revenue,
            address: customer.address,
            information: customer.description,
            district: customer.district,
            city: customer.city,
            country: customer.country,
            contacts: customer.contact && customer.contact.length > 0
                ? customer.contact.map(function (x) { return ({ id: x.id }); })
                : null,
            customerType: customer.customerType,
            dob: __WEBPACK_IMPORTED_MODULE_6__helpers_datetime_convert_helper__["a" /* default */].fromDtObjectToTimestamp(customer.dob),
            companyEstablishmentDay: __WEBPACK_IMPORTED_MODULE_6__helpers_datetime_convert_helper__["a" /* default */].fromDtObjectToTimestamp(customer.companyEstablishmentDay),
            gender: customer.gender,
            lunarBirthday: customer.lunarBirthday,
            employee: assignTo.assignToType === 'employee'
                ? {
                    id: assignTo.assignToId
                }
                : null,
            employeeGroup: assignTo.assignToType === 'group'
                ? {
                    id: assignTo.assignToId
                }
                : null
        };
        return this.apiService
            .post(url, model)
            .map(function (response) { return response.result; });
    };
    CustomerService.prototype.createOrUpdateFormData = function (customer) {
        var url = "/employee/" + this.employeeId + "/customer";
        url = customer.id ? url + '/edit' : url;
        var formData = new FormData();
        customer.id && formData.append('id', customer.id);
        formData.append('name', customer.name);
        customer.website && formData.append('website', customer.website.trim());
        customer.fax && formData.append('fax', customer.fax.trim());
        customer.phoneNumberOfficial && formData.append('tel1', customer.phoneNumberOfficial.trim());
        customer.phoneNumberExtra && formData.append('tel2', customer.phoneNumberExtra.trim());
        customer.stockCode && formData.append('stockCode', customer.stockCode.trim());
        customer.taxCode && formData.append('taxNumber', customer.taxCode.trim());
        customer.emailOfficial && formData.append('email', customer.emailOfficial.trim());
        customer.emailExtra && formData.append('email2', customer.emailExtra.trim());
        customer.career && formData.append('business', customer.career);
        customer.rating && formData.append('evaluate', customer.rating);
        customer.type && formData.append('classify', customer.type);
        customer.group && formData.append('group', customer.group);
        customer.revenue && formData.append('revenueDueYear', customer.revenue);
        customer.address && formData.append('address', customer.address.trim());
        customer.description && formData.append('information', customer.description.trim());
        if (customer.contact && customer.contact.length > 0) {
            customer.contact.forEach(function (x) { return formData.append('contactIds', x.id); });
        }
        customer.customerType && formData.append('customerType', customer.customerType);
        customer.companyEstablishmentDay && formData.append('birthDayTimeStamp', __WEBPACK_IMPORTED_MODULE_6__helpers_datetime_convert_helper__["a" /* default */].fromDtObjectToTimestamp(customer.companyEstablishmentDay).toString());
        // tslint:disable-next-line:max-line-length
        customer.companyEstablishmentDay && formData.append('companyEstablishmentDayTimeStamp', __WEBPACK_IMPORTED_MODULE_6__helpers_datetime_convert_helper__["a" /* default */].fromDtObjectToTimestamp(customer.companyEstablishmentDay).toString());
        customer.gender && formData.append('gender', customer.gender);
        customer.lunarBirthday && formData.append('lunarBirthday', customer.lunarBirthday);
        customer.assignTo && formData.append('employeeId', customer.assignTo);
        customer.assignToGroup && formData.append('employeeGroupId', customer.assignToGroup);
        this.getLocation(customer) && formData.append('locationId', this.getLocation(customer));
        return this.apiService.postFile(url, formData).map(function (res) { return res.result; });
    };
    CustomerService.prototype.getLocation = function (model) {
        // tslint:disable-next-line:triple-equals
        if (model.district && model.district != '0') {
            return model.district + '';
            // tslint:disable-next-line:triple-equals
        }
        else if (model.city && model.city != '0') {
            return model.city + '';
            // tslint:disable-next-line:triple-equals
        }
        else if (model.country && model.country != '0') {
            return model.country + '';
        }
        else {
            return null;
        }
    };
    CustomerService.prototype.view = function (customerId) {
        var url = "/employee/" + this.employeeId + "/customer/" + customerId;
        return this.apiService
            .get(url)
            .map(function (response) {
            var result = response.result;
            return {
                id: result.id,
                name: result.name,
                emailOfficial: result.email,
                website: result.website,
                emailExtra: result.email2,
                fax: result.fax,
                career: result.business,
                phoneNumberOfficial: result.tel1,
                group: result.group,
                stockCode: result.stockCode,
                rating: result.evaluate ? result.evaluate : 0,
                taxCode: result.taxNumber,
                type: result.classify,
                phoneNumberExtra: result.tel2,
                revenue: result.revenueDueYear,
                companyEstablishmentDay: result.companyEstablishmentDay,
                dob: result.dob,
                customerType: result.customerType,
                assignTo: result.employee && {
                    id: result.employee.id,
                    name: result.employee.name
                },
                assignToGroup: result.employeeGroup && {
                    id: result.employeeGroup.id,
                    name: result.employeeGroup.name
                },
                address: result.address,
                city: result.location && __WEBPACK_IMPORTED_MODULE_4__helpers_utils_helper__["a" /* default */].getLocationId(result.location, 'StateProvince').toString(),
                country: result.location && __WEBPACK_IMPORTED_MODULE_4__helpers_utils_helper__["a" /* default */].getLocationId(result.location, 'Country').toString(),
                district: result.location && __WEBPACK_IMPORTED_MODULE_4__helpers_utils_helper__["a" /* default */].getLocationId(result.location, 'District').toString(),
                description: result.information,
                createdDate: result.createdDate,
                updatedDate: result.updatedDate,
                prospect: result.prospect && {
                    id: result.prospect.id,
                    fullName: result.prospect.name
                },
                contact: result.customerContactGroups.map(function (x) { return ({
                    id: x.contact.id,
                    text: x.contact.name
                }); }),
                number: result.customerNumber,
                creditLimit: result.creditLimit,
                owing: result.owing,
                customerGroup: result.customerGroup,
                check: result.check,
                desc: result.desc,
                lunarBirthday: result.lunarBirthday,
                gender: result.gender,
                isAssigned: result.isAssigned,
                location: result.location,
                customerNumber: result.customerNumber,
                lastInvoiceDate: result.lastInvoiceDate,
                totalAmount: result.totalAmount ? __WEBPACK_IMPORTED_MODULE_7__helpers_convert_number_helper__["a" /* default */].scientificNotationtoNumber(result.totalAmount) : null,
            };
        })
            .share();
    };
    CustomerService.prototype.delete = function (ids) {
        var url = "/employee/" + this.employeeId + "/customers/delete";
        return this.apiService.post(url, ids).map(function (response) { return response.result; });
    };
    CustomerService.prototype.instantSearch = function (terms, page, pageSize) {
        var _this = this;
        var searchUrl = "/employee/" + this.employeeId + "/customers/search/" + page + "/" + pageSize + "/?search=";
        return this.instantSearchService
            .search(searchUrl, terms)
            .map(function (result) {
            return {
                currentPage: result.page,
                pageSize: pageSize,
                pageCount: result.pageCount,
                total: result.recordCount,
                items: (result.data || []).map(_this.toCustomerListItem)
            };
        });
    };
    CustomerService.prototype.instantSearchWithFilter = function (terms, filter, page, pageSize) {
        var _this = this;
        var searchUrl = "/employee/" + this.employeeId + "/customers/filter/" + page + "/" + pageSize + "/?search=";
        return this.instantSearchService
            .searchWithFilter(searchUrl, terms, CustomerService_1.createFilterParams(filter))
            .map(function (result) {
            return {
                currentPage: result.page,
                pageSize: pageSize,
                pageCount: result.pageCount,
                total: result.recordCount,
                items: (result.data || []).map(_this.toCustomerListItem)
            };
        });
    };
    CustomerService.prototype.filter = function (searchTerm, filter, page, pageSize) {
        var _this = this;
        var filterUrl = "/employee/" + this.employeeId + "/customers/filter/" + page + "/" + pageSize + "/";
        var urlParams = CustomerService_1.createFilterParams(filter);
        urlParams.append('search', searchTerm);
        return this.apiService.get(filterUrl, urlParams).map(function (response) {
            var result = response.result;
            return {
                currentPage: result.page,
                pageSize: pageSize,
                pageCount: result.pageCount,
                total: result.recordCount,
                items: (result.data || []).map(_this.toCustomerListItem),
                location: result.location,
            };
        });
    };
    // tslint:disable-next-line:member-ordering
    CustomerService.createFilterParams = function (filter) {
        var urlFilterParams = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* URLSearchParams */]();
        urlFilterParams.append('business', filter.business);
        urlFilterParams.append('group', filter.group);
        urlFilterParams.append('evaluate', filter.evaluate);
        urlFilterParams.append('fromDate', filter.fromDate ? filter.fromDate.toString() : '');
        urlFilterParams.append('toDate', filter.toDate ? filter.toDate.toString() : '');
        urlFilterParams.append('month', filter.month ? filter.month : null);
        filter.hasBirthday && urlFilterParams.append('hasBirthday', 'true');
        // if (filter.assignToGroup) {
        //     urlFilterParams.append('assignTo', filter.assignToGroup);
        //     urlFilterParams.append('isAssignToGroup', 'true');
        // }
        // if (filter.assignTo) {
        //     urlFilterParams.append('assignTo', filter.assignTo);
        //     urlFilterParams.append('isAssignToGroup', 'false');
        // }
        if (filter.assignToGroup) {
            urlFilterParams.append('assignToEmployeeGroup', filter.assignToGroup);
        }
        if (filter.assignTo) {
            urlFilterParams.append('assignToEmployee', filter.assignTo);
        }
        return urlFilterParams;
    };
    CustomerService.prototype.search = function (searchString, page, pageSize) {
        var _this = this;
        var searchUrl = "/employee/" + this.employeeId + "/customers/search/" + page + "/" + pageSize + "/?search=" + searchString;
        return this.apiService.get(searchUrl).map(function (response) {
            var result = response.result;
            return {
                currentPage: result.page,
                pageSize: pageSize,
                pageCount: result.pageCount,
                total: result.recordCount,
                items: (result.data || []).map(_this.toCustomerListItem)
            };
        });
    };
    CustomerService.prototype.toCustomerListItem = function (result) {
        return {
            id: result.id,
            customerName: result.name,
            website: result.website,
            fax: result.fax,
            customerPhone: result.tel1,
            taxNo: result.taxNumber,
            email: result.email,
            business: result.business,
            group: result.group,
            rating: result.evaluate ? +result.evaluate : 0,
            revenue: result.revenueDueYear,
            assignTo: result.employee && result.employee.name,
            assignToGroup: result.employeeGroup && result.employeeGroup.name,
            checkboxSelected: false,
            stockCode: result.stockCode,
            phoneNumberExtra: result.tel2,
            emailExtra: result.email2,
            customerType: result.customerType,
            city: result.city,
            country: result.country,
            address: result.address,
            district: result.district,
            description: result.information,
            lunarBirthday: result.lunarBirthday,
            dob: result.dob,
            companyEstablishmentDay: result.companyEstablishmentDay,
            isAssigned: result.isAssigned,
            location: result.location,
            customerNumber: result.customerNumber,
            customerContactGroups: result.customerContactGroups,
            customerCategories: result.customerCategories,
            gender: result.gender,
            lastInvoiceDate: result.lastInvoiceDate,
            totalAmount: result.totalAmount ? __WEBPACK_IMPORTED_MODULE_7__helpers_convert_number_helper__["a" /* default */].scientificNotationtoNumber(result.totalAmount) : null,
        };
    };
    CustomerService.prototype.importFile = function (file) {
        var url = "/employee/" + this.employeeId + "/customers";
        var formData = new FormData();
        formData.append('filePath', file);
        return this.apiService
            .postFile(url, formData)
            .map(function (response) {
            return response;
        })
            .share();
    };
    CustomerService.prototype.getContactList = function (customerId) {
        var url = "employee/" + this.employeeId + "/contacts/customer/" + customerId;
        return this.apiService
            .get(url)
            .map(function (response) {
            return response.result ? response.result.map(function (x) {
                return {
                    id: x.id,
                    name: x.name,
                    image: x.image
                        ? "http://demo.bys.vn:6868/mhb-crm/images/" + x.image
                        : null,
                    cellularPhone: x.cellularPhone,
                    email: x.email
                };
            }) : [];
        })
            .share();
    };
    CustomerService.prototype.getContactListByCustomer = function (customerId) {
        var url = "employee/" + this.employeeId + "/contacts/customer/" + customerId;
        return this.apiService
            .get(url)
            .map(function (response) {
            return response.result.map(function (x) {
                return {
                    id: x.id,
                    text: x.lastName + " " + x.firstName
                };
            });
        })
            .share();
    };
    CustomerService.prototype.getProductPriceListByCustomer = function (customerId) {
        var url = "employee/" + this.employeeId + "/customerInfor/" + customerId;
        return this.apiService.get(url).map(function (data) { return data.result; });
    };
    CustomerService.prototype.searchProspectOrCustomer = function (searchStr) {
        var url = "employee/" + this.employeeId + "/customer-prospect/search/0/10?search=" + searchStr;
        return this.apiService.get(url).map(function (data) { return data.result.data; });
    };
    CustomerService = CustomerService_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__services__["c" /* ApiService */],
            __WEBPACK_IMPORTED_MODULE_5__services__["n" /* SessionService */],
            __WEBPACK_IMPORTED_MODULE_5__services__["k" /* InstantSearchService */]])
    ], CustomerService);
    return CustomerService;
    var CustomerService_1;
}());



/***/ }),

/***/ "../../../../../src/app/shared/services/data.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__configs_api_url_config__ = __webpack_require__("../../../../../src/app/shared/configs/api-url.config.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__api_service__ = __webpack_require__("../../../../../src/app/shared/services/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__index__ = __webpack_require__("../../../../../src/app/shared/services/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var MODULE_NAMES = {
    prospect: 'prospect',
    customer: 'customer',
    contact: 'contact',
    opportunity: 'opportunity',
    campaign: 'campaign'
};
var DataService = /** @class */ (function () {
    function DataService(apiService, sessionService) {
        this.apiService = apiService;
        this.sessionService = sessionService;
        this.updateSettingDataSubject$ = new __WEBPACK_IMPORTED_MODULE_8_rxjs__["Subject"]();
        this.updateSettingDataSubject = this.updateSettingDataSubject$.asObservable();
    }
    DataService_1 = DataService;
    DataService.createFilterParams = function (filter) {
        var urlFilterParams = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["e" /* URLSearchParams */]();
        filter && urlFilterParams.append('groupId', filter);
        return urlFilterParams;
    };
    DataService.prototype.updateSettingData = function () {
        this.updateSettingDataSubject$.next();
    };
    DataService.prototype.getAllBranchs = function () {
        return this.apiService
            .get(__WEBPACK_IMPORTED_MODULE_0__configs_api_url_config__["a" /* API_URL */].GET_BRANCHES)
            .map(function (response) {
            return response.result.map(function (x) {
                return {
                    id: x.id,
                    text: "" + x.name
                };
            });
        })
            .share();
    };
    DataService.prototype.getBranches = function () {
        return this.apiService
            .get("employee/" + this.sessionService.currentUser.employeeId + __WEBPACK_IMPORTED_MODULE_0__configs_api_url_config__["a" /* API_URL */].GET_BRANCHES)
            .map(function (response) {
            return response.result.map(function (x) {
                return {
                    id: x.id,
                    text: "" + x.name
                };
            });
        })
            .share();
    };
    DataService.prototype.getSalutations = function () {
        return this.apiService
            .get(__WEBPACK_IMPORTED_MODULE_0__configs_api_url_config__["a" /* API_URL */].GET_SALUTATIONS)
            .map(function (response) {
            return response.result.map(function (x) {
                return {
                    id: x.value,
                    text: "" + x.text
                };
            });
        })
            .share();
    };
    DataService.prototype.getProspectSources = function () {
        return this.apiService
            .get(__WEBPACK_IMPORTED_MODULE_0__configs_api_url_config__["a" /* API_URL */].GET_CUSTOMER_RESROURCE)
            .map(function (response) {
            return response.result.map(function (x) {
                return {
                    id: x.id,
                    text: "" + x.name
                };
            });
        })
            .share();
    };
    DataService.prototype.getBusiness = function () {
        return this.apiService
            .get(__WEBPACK_IMPORTED_MODULE_0__configs_api_url_config__["a" /* API_URL */].GET_BUSINESS)
            .map(function (response) {
            return response.result.map(function (x) {
                return {
                    id: x.value,
                    text: "" + x.text
                };
            });
        })
            .share();
    };
    DataService.prototype.getProspectEvaluations = function () {
        return this.apiService
            .get(__WEBPACK_IMPORTED_MODULE_0__configs_api_url_config__["a" /* API_URL */].GET_PROSPECT_EVALUATIONS)
            .map(function (response) {
            return response.result.map(function (x) {
                return {
                    value: x.value,
                    id: x.id,
                    text: "" + x.text
                };
            });
        })
            .share();
    };
    DataService.prototype.getProductFunitureGroups = function () {
        return this.apiService
            .get(__WEBPACK_IMPORTED_MODULE_0__configs_api_url_config__["a" /* API_URL */].GET_PRODUCT_FUNITURE_GROUP)
            .map(function (response) {
            return response.result.map(function (x) {
                return {
                    id: x.id,
                    text: x.name
                };
            });
        })
            .share();
    };
    DataService.prototype.getProductFunitureModel = function () {
        return this.apiService
            .get(__WEBPACK_IMPORTED_MODULE_0__configs_api_url_config__["a" /* API_URL */].GET_PRODUCT_FUNITURE_MODEL)
            .map(function (response) {
            return response.result.map(function (x) {
                return {
                    id: x.id,
                    text: x.value
                };
            });
        })
            .share();
    };
    DataService.prototype.getApproachChanels = function (objType) {
        var url = "/employee/" + this.sessionService.currentUser.employeeId + "/approachChannels?objectType=" + objType;
        return this.apiService
            .get(url)
            .map(function (response) {
            return response.result.map(function (x) {
                return {
                    id: x.id,
                    text: x.name
                };
            });
        })
            .share();
    };
    DataService.prototype.getDBs = function () {
        return this.apiService
            .get(__WEBPACK_IMPORTED_MODULE_0__configs_api_url_config__["a" /* API_URL */].GET_DBS)
            .map(function (response) {
            return response.result.map(function (x) {
                return {
                    id: x.value,
                    text: x.text
                };
            });
        })
            .share();
    };
    DataService.prototype.getConfigTypeData = function (type) {
        return this.apiService
            .get("/list/" + type)
            .map(function (response) {
            return response.result.map(function (x) {
                return {
                    value: x.value,
                    id: x.id,
                    text: "" + x.text
                };
            });
        })
            .share();
    };
    DataService.prototype.getSettingTypeData = function (url) {
        return this.apiService.get(url)
            .map(function (response) {
            return response.result.map(function (x) {
                return {
                    value: x.value,
                    id: x.id,
                    text: "" + x.text
                };
            });
        })
            .share();
    };
    DataService.prototype.getProspectStatus = function () {
        return this.apiService
            .get(__WEBPACK_IMPORTED_MODULE_0__configs_api_url_config__["a" /* API_URL */].GET_PROSPECT_STATUS)
            .map(function (response) {
            return response.result.map(function (x) {
                return {
                    id: x.value,
                    text: "" + x.text
                };
            });
        })
            .share();
    };
    DataService.prototype.getProspectHandlers = function () {
        return this.apiService
            .get(__WEBPACK_IMPORTED_MODULE_0__configs_api_url_config__["a" /* API_URL */].GET_PROSPECT_HANDLER)
            .map(function (response) {
            return response.result.map(function (x) {
                return {
                    id: x.value,
                    text: "" + x.text
                };
            });
        })
            .share();
    };
    DataService.prototype.getCustomers = function () {
        var url = "/employee/" + this.sessionService.currentUser.employeeId + "/customers";
        return this.apiService
            .get(url)
            .map(function (response) {
            return response.result.map(function (x) {
                return {
                    id: x.id,
                    text: "" + x.name
                };
            });
        })
            .share();
    };
    DataService.prototype.getlunarBirthday = function () {
        var url = "/employee/" + this.sessionService.currentUser.employeeId + "/lunar-years";
        return this.apiService
            .get(url)
            .map(function (response) {
            return response.result.map(function (x) {
                return {
                    id: x,
                    text: "" + x
                };
            });
        })
            .share();
    };
    DataService.prototype.searchCustomers = function (query) {
        var url = "/employee/" + this.sessionService.currentUser.employeeId + "/customers/?customerName=" + query;
        return this.apiService
            .get(url)
            .map(function (response) {
            if (response.result && response.result.length > 0) {
                return response.result.map(function (x) {
                    return {
                        id: x.id,
                        text: x.tel1 ? x.name + " - " + x.tel1 : "" + x.name
                    };
                });
            }
            else {
                return [];
            }
        })
            .share();
    };
    DataService.prototype.searchContacts = function (query) {
        var url = "/employee/" + this.sessionService.currentUser.employeeId + "/contacts/?contactName=" + query;
        return this.apiService
            .get(url)
            .map(function (response) {
            if (response.result && response.result.length > 0) {
                return response.result.map(function (x) {
                    return {
                        id: x.id,
                        text: x.name
                    };
                });
            }
            else {
                return [];
            }
        })
            .share();
    };
    DataService.prototype.searchProspects = function (query) {
        var url = "/employee/" + this.sessionService.currentUser.employeeId + "/prospects/?prospectName=" + query;
        return this.apiService
            .get(url)
            .map(function (response) {
            if (response.result && response.result.length > 0) {
                return response.result.map(function (x) {
                    return {
                        id: x.id,
                        text: x.name
                    };
                });
            }
            else {
                return [];
            }
        })
            .share();
    };
    DataService.prototype.searchCampaigns = function (query) {
        var url = "/employee/" + this.sessionService.currentUser.employeeId + "/campaigns/?campaignName=" + query;
        return this.apiService
            .get(url)
            .map(function (response) {
            if (response.result && response.result.length > 0) {
                return response.result.map(function (x) {
                    return {
                        id: x.id,
                        text: "" + x.name
                    };
                });
            }
            else {
                return [];
            }
        })
            .share();
    };
    DataService.prototype.searchOpportunities = function (query) {
        var url = "/employee/" + this.sessionService.currentUser.employeeId + "/opportunities/?opportunityName=" + query;
        return this.apiService
            .get(url)
            .map(function (response) {
            return response.result.map(function (x) {
                return {
                    id: x.id,
                    text: "" + x.name,
                    extra: x.customer && x.customer.name
                };
            });
        })
            .share();
    };
    DataService.prototype.getContacts = function () {
        var url = "/employee/" + this.sessionService.currentUser.employeeId + "/contacts";
        return this.apiService
            .get(url)
            .map(function (response) {
            return response.result.map(function (x) {
                return {
                    id: x.id,
                    text: x.firstName + " " + x.lastName
                };
            });
        })
            .share();
    };
    DataService.prototype.getProspects = function () {
        var url = "/employee/" + this.sessionService.currentUser.employeeId + "/prospects";
        return this.apiService
            .get(url)
            .map(function (response) {
            return response.result.map(function (x) {
                return {
                    id: x.id,
                    text: x.lastName + " " + x.firstName
                };
            });
        })
            .share();
    };
    DataService.prototype.getOpportunities = function () {
        var url = "/employee/" + this.sessionService.currentUser.employeeId + "/opportunities";
        return this.apiService
            .get(url)
            .map(function (response) {
            return response.result.map(function (x) {
                return {
                    id: x.id,
                    text: "" + x.name
                };
            });
        })
            .share();
    };
    DataService.prototype.getCampaigns = function () {
        var url = "/employee/" + this.sessionService.currentUser.employeeId + "/campaigns";
        return this.apiService
            .get(url)
            .map(function (response) {
            return response.result.map(function (x) {
                return {
                    id: x.id,
                    text: "" + x.name
                };
            });
        })
            .share();
    };
    DataService.prototype.getEmployees = function (groupId) {
        var url = "/employee/" + this.sessionService.currentUser.employeeId + "/employees/assignable";
        var filterParam = DataService_1.createFilterParams(groupId);
        return this.apiService
            .get(url, filterParam)
            .map(function (response) {
            return response.result.map(function (x) {
                return {
                    id: x.id,
                    text: "" + x.name
                };
            });
        })
            .share();
    };
    DataService.prototype.getEmployeesFilter = function (groupId) {
        var url = "/employee/" + this.sessionService.currentUser.employeeId + "/employees";
        var filterParam = DataService_1.createFilterParams(groupId);
        console.log('filterParam', filterParam);
        return this.apiService
            .get(url, filterParam)
            .map(function (response) {
            return response.result.map(function (x) {
                return {
                    id: x.id,
                    text: "" + x.name
                };
            });
        })
            .share();
    };
    DataService.prototype.getAssignToItems = function () {
        var employees$ = this.getEmployees().map(function (employees) {
            return employees.map(function (employee) {
                return {
                    id: "employee_" + employee.id,
                    text: employee.text
                };
            });
        });
        var groups$ = this.getEmployeeGroups().map(function (groups) {
            return groups.map(function (group) {
                return {
                    id: "group_" + group.id,
                    text: group.text
                };
            });
        });
        return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["a" /* Observable */].forkJoin(employees$, groups$).map(function (items) {
            return [].concat.apply([], items);
        });
    };
    DataService.prototype.getEmployeeGroups = function () {
        var url = "/employee/" + this.sessionService.currentUser.employeeId + "/employee-groups";
        return this.apiService
            .get(url)
            .map(function (response) {
            return response.result.map(function (x) {
                return {
                    id: x.id,
                    text: "" + x.name
                };
            });
        })
            .share();
    };
    DataService.prototype.getEmployeeGroupsFilter = function () {
        var url = "/employee/" + this.sessionService.currentUser.employeeId + "/groups";
        return this.apiService
            .get(url)
            .map(function (response) {
            return response.result.map(function (x) {
                return {
                    id: x.id,
                    text: "" + x.name
                };
            });
        })
            .share();
    };
    DataService.prototype.getCustomerGroups = function () {
        var url = "/list/customer-groups";
        return this.apiService
            .get(url)
            .map(function (response) {
            return response.result.map(function (x) {
                return {
                    id: x.value,
                    text: "" + x.text
                };
            });
        })
            .share();
    };
    DataService.prototype.getCustomerClassifies = function () {
        var url = "/list/customer-classifies";
        return this.apiService
            .get(url)
            .map(function (response) {
            return response.result.map(function (x) {
                return {
                    id: x.value,
                    text: "" + x.text
                };
            });
        })
            .share();
    };
    DataService.prototype.getOpportunitySteps = function () {
        var url = "/list/opportunity-steps";
        return this.apiService
            .get(url)
            .map(function (response) {
            return response.result.map(function (x) {
                return {
                    id: x.value,
                    text: "" + x.text
                };
            });
        })
            .share();
    };
    DataService.prototype.getOpportunityClassifies = function () {
        var url = "/list/opportunity-classifies";
        return this.apiService
            .get(url)
            .map(function (response) {
            return response.result.map(function (x) {
                return {
                    id: x.value,
                    text: "" + x.text
                };
            });
        })
            .share();
    };
    DataService.prototype.getCampaignStatus = function () {
        var url = "/list/campaign-status";
        return this.apiService
            .get(url)
            .map(function (response) {
            return response.result.map(function (x) {
                return {
                    id: x.value,
                    text: "" + x.text
                };
            });
        })
            .share();
    };
    DataService.prototype.getActivityStatus = function () {
        var url = "/list/task-status";
        return this.apiService
            .get(url)
            .map(function (data) {
            return data.result.map(function (x) {
                return {
                    id: x.value,
                    text: "" + x.text
                };
            });
        })
            .share();
    };
    DataService.prototype.getActivityTypes = function () {
        var url = "/list/activity-types";
        return this.apiService
            .get(url)
            .map(function (data) {
            return data.result.map(function (x) {
                return {
                    id: x.value,
                    text: "" + x.text
                };
            });
        })
            .share();
    };
    DataService.prototype.getEventTypes = function () {
        var url = "/list/event-types";
        return this.apiService
            .get(url)
            .map(function (data) {
            return data.result.map(function (x) {
                return {
                    id: x.value,
                    text: "" + x.text
                };
            });
        })
            .share();
    };
    DataService.prototype.getCampaignTypes = function () {
        var url = "/list/campaign-types";
        return this.apiService
            .get(url)
            .map(function (response) {
            return response.result.map(function (x) {
                return {
                    id: x.value,
                    text: "" + x.text
                };
            });
        })
            .share();
    };
    DataService.prototype.getAllByModuleName = function (moduleName) {
        switch ((moduleName || '').toLowerCase()) {
            case MODULE_NAMES.customer:
                return this.getCustomers();
            case MODULE_NAMES.contact:
                return this.getContacts();
            case MODULE_NAMES.prospect:
                return this.getProspects();
            case MODULE_NAMES.opportunity:
                return this.getOpportunities();
            case MODULE_NAMES.campaign:
                return this.getCampaigns();
            default:
                break;
        }
    };
    DataService.prototype.searchAllByModuleName = function (moduleName, searchTerm) {
        switch ((moduleName || '').toLowerCase()) {
            case MODULE_NAMES.customer:
                return this.searchCustomers(searchTerm);
            case MODULE_NAMES.contact:
                return this.searchContacts(searchTerm);
            case MODULE_NAMES.prospect:
                return this.searchProspects(searchTerm);
            case MODULE_NAMES.opportunity:
                return this.searchOpportunities(searchTerm);
            case MODULE_NAMES.campaign:
                return this.searchCampaigns(searchTerm);
            default:
                break;
        }
    };
    DataService.prototype.downloadFile = function () {
        var url = "/downloadFile";
        return this.apiService
            .get(url)
            .map(function (response) {
            return response.result.map(function (x) {
                return {
                    id: x.key,
                    text: "" + x.text
                };
            });
        })
            .share();
    };
    DataService.prototype.getListProduct = function () {
        var url = "/employee/" + this.sessionService.currentUser.employeeId + "/products";
        return this.apiService
            .get(url)
            .map(function (response) {
            return response.result.map(function (x) {
                return {
                    id: x.productNo,
                    text: "" + x.productName
                };
            });
        })
            .share();
    };
    DataService.prototype.getListInvoiceStatus = function () {
        var url = "list/invoice-status";
        return this.apiService
            .get(url)
            .map(function (response) {
            return response.result.map(function (x) {
                return {
                    id: x.value,
                    text: "" + x.text
                };
            });
        })
            .share();
    };
    DataService.prototype.getListCoordinatorStatus = function () {
        var url = "list/coordinator-status";
        return this.apiService
            .get(url)
            .map(function (response) {
            return response.result.map(function (x) {
                return {
                    id: x.value,
                    text: "" + x.text
                };
            });
        })
            .share();
    };
    DataService.prototype.getListProvince = function () {
        var url = "employee/" + this.sessionService.currentUser.employeeId + "/provinces";
        return this.apiService.get(url)
            .map(function (response) { return response.result; })
            .share();
    };
    DataService.prototype.createOrUpdateEvaluations = function (data, type) {
        // /employee/158/config/prospect-evaluations
        // /employee/158/config/prospect-evaluations/2593/edit
        var url = "/employee/" + this.sessionService.currentUser.employeeId + "/config/" + type;
        if (data.id) {
            url += "/" + data.id + "/edit";
        }
        // else {
        //     url += 'create';
        // }
        return this.apiService.post(url, {
            'text': data.text.trim()
        }).map(function (res) { return res.result; });
    };
    DataService.prototype.deleteEvaluations = function (id, type) {
        // /employee/158/config/prospect-evaluations/2593/delete
        var url = "/employee/" + this.sessionService.currentUser.employeeId + "/config/" + type + "/" + id + "/delete";
        return this.apiService.post(url).map(function (res) { return res.result; });
    };
    DataService.prototype.getDefaultTableConfig = function (type) {
        var url = "employee/" + this.sessionService.currentUser.employeeId + "/fieldconfig/" + type;
        return this.apiService.get(url)
            .map(function (res) { return res.result.columnAlias; }).share();
    };
    DataService.prototype.setTableConfig = function (columns, type, toDefault) {
        if (toDefault === void 0) { toDefault = false; }
        var url = "employee/" + this.sessionService.currentUser.employeeId + "/fieldconfig";
        var data = {
            userFieldConfigType: type,
            columnAlias: toDefault ? null : columns
        };
        return this.apiService.post(url, data)
            .map(function (res) { return res.result.columnAlias; }).share();
    };
    DataService.prototype.createOrUpdateApproachChannel = function (data, objType) {
        var formData = {
            name: data.text.trim(),
            description: data.text.trim(),
            objectType: objType
        };
        var url = "employee/" + this.sessionService.currentUser.employeeId + "/approachChannel/";
        url += data.id ? 'edit' : 'create';
        formData['id'] = data.id ? data.id : null;
        return this.apiService.post(url, formData)
            .map(function (res) { return res.result; }).share();
    };
    DataService.prototype.createOrUpdateSettingTypeItem = function (type, data) {
        var formData = new FormData();
        formData.append('name', data.text.trim());
        formData.append('desc', data.text.trim());
        var url = "employee/" + this.sessionService.currentUser.employeeId + "/customer-resources/";
        url += data.id ? data.id + "/edit" : 'create';
        return this.apiService.postFile(url, formData)
            .map(function (res) { return res.result; }).share();
    };
    DataService.prototype.deleteSettingTypeItem = function (id, type) {
        // /employee/158/config/prospect-evaluations/2593/delete
        var url = "/employee/" + this.sessionService.currentUser.employeeId + "/customer-resources/" + id + "/delete";
        return this.apiService.post(url).map(function (res) { return res.result; });
    };
    DataService.prototype.deleteApproachChanel = function (id) {
        var url = "employee/" + this.sessionService.currentUser.employeeId + "/approachChannels/delete";
        var data = [id];
        return this.apiService.post(url, data).map(function (res) { return res.result; });
    };
    DataService.prototype.getSettingTypeItem = function (type, key) {
        var url = "employee/" + this.sessionService.currentUser.employeeId + "/config/" + type + "/" + key;
        return this.apiService.get(url).map(function (res) { return res.result; });
    };
    DataService.prototype.getEmployeeByBranch = function (branchId) {
        var url = "/employee/" + this.sessionService.currentUser.employeeId + "/employees/branch/" + branchId;
        return this.apiService.get(url)
            .map(function (response) { return response.result.map(function (x) {
            return {
                id: x.id,
                text: "" + x.name,
            };
        }); })
            .share();
    };
    DataService = DataService_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6__api_service__["a" /* ApiService */],
            __WEBPACK_IMPORTED_MODULE_7__index__["n" /* SessionService */]])
    ], DataService);
    return DataService;
    var DataService_1;
}());



/***/ }),

/***/ "../../../../../src/app/shared/services/email.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmailService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_service__ = __webpack_require__("../../../../../src/app/shared/services/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__session_service__ = __webpack_require__("../../../../../src/app/shared/services/session.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EmailService = /** @class */ (function () {
    function EmailService(apiService, sessionService) {
        this.apiService = apiService;
        this.sessionService = sessionService;
    }
    EmailService.prototype.sendEmail = function (data) {
        var url = "employee/" + this.sessionService.currentUser.employeeId + "/email";
        // tslint:disable-next-line:no-shadowed-variable
        return this.apiService.post(url, data).map(function (data) { return data.result; });
    };
    EmailService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__api_service__["a" /* ApiService */],
            __WEBPACK_IMPORTED_MODULE_2__session_service__["a" /* SessionService */]])
    ], EmailService);
    return EmailService;
}());



/***/ }),

/***/ "../../../../../src/app/shared/services/feng-shuis-infor.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FengShuisInforService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1____ = __webpack_require__("../../../../../src/app/shared/services/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FengShuisInforService = /** @class */ (function () {
    function FengShuisInforService(apiService, sessionService) {
        this.apiService = apiService;
        this.sessionService = sessionService;
    }
    Object.defineProperty(FengShuisInforService.prototype, "employeeId", {
        get: function () {
            return this.sessionService.currentUser.employeeId;
        },
        enumerable: true,
        configurable: true
    });
    FengShuisInforService.prototype.getFengShuisInfo = function (lunarBirthDay, gender) {
        var that = this;
        return that.apiService
            .get("employee/" + this.employeeId + "/feng-shuis-infor/?lunarBirthday=" + lunarBirthDay + "&gender=" + gender.toString().toLowerCase())
            .map(function (response) { return response.result; })
            .share();
    };
    FengShuisInforService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1____["c" /* ApiService */],
            __WEBPACK_IMPORTED_MODULE_1____["n" /* SessionService */]])
    ], FengShuisInforService);
    return FengShuisInforService;
}());



/***/ }),

/***/ "../../../../../src/app/shared/services/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__alert_service__ = __webpack_require__("../../../../../src/app/shared/services/alert.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__alert_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__confirmation_service__ = __webpack_require__("../../../../../src/app/shared/services/confirmation.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_1__confirmation_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__session_service__ = __webpack_require__("../../../../../src/app/shared/services/session.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "n", function() { return __WEBPACK_IMPORTED_MODULE_2__session_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__api_service__ = __webpack_require__("../../../../../src/app/shared/services/api.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_3__api_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__instant_search_service__ = __webpack_require__("../../../../../src/app/shared/services/instant-search.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "k", function() { return __WEBPACK_IMPORTED_MODULE_4__instant_search_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__auth_guard_service__ = __webpack_require__("../../../../../src/app/shared/services/auth.guard.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_5__auth_guard_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__data_service__ = __webpack_require__("../../../../../src/app/shared/services/data.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "j", function() { return __WEBPACK_IMPORTED_MODULE_6__data_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__user_service__ = __webpack_require__("../../../../../src/app/shared/services/user.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "q", function() { return __WEBPACK_IMPORTED_MODULE_7__user_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__activity_service__ = __webpack_require__("../../../../../src/app/shared/services/activity.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_8__activity_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__prospect_service__ = __webpack_require__("../../../../../src/app/shared/services/prospect.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "m", function() { return __WEBPACK_IMPORTED_MODULE_9__prospect_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__customer_service__ = __webpack_require__("../../../../../src/app/shared/services/customer.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "i", function() { return __WEBPACK_IMPORTED_MODULE_10__customer_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__contact_service__ = __webpack_require__("../../../../../src/app/shared/services/contact.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "h", function() { return __WEBPACK_IMPORTED_MODULE_11__contact_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__opportunity_service__ = __webpack_require__("../../../../../src/app/shared/services/opportunity.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "l", function() { return __WEBPACK_IMPORTED_MODULE_12__opportunity_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__campaign_service__ = __webpack_require__("../../../../../src/app/shared/services/campaign.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_13__campaign_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__audit_service__ = __webpack_require__("../../../../../src/app/shared/services/audit.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_14__audit_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__user_notification_service__ = __webpack_require__("../../../../../src/app/shared/services/user-notification.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "p", function() { return __WEBPACK_IMPORTED_MODULE_15__user_notification_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__user_group_service__ = __webpack_require__("../../../../../src/app/shared/services/user-group.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "o", function() { return __WEBPACK_IMPORTED_MODULE_16__user_group_service__["a"]; });

















// export * from './comment.service';


/***/ }),

/***/ "../../../../../src/app/shared/services/instant-search.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InstantSearchService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_debounceTime__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/debounceTime.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_distinctUntilChanged__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/distinctUntilChanged.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_switchMap__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__index__ = __webpack_require__("../../../../../src/app/shared/services/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__session_service__ = __webpack_require__("../../../../../src/app/shared/services/session.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var InstantSearchService = /** @class */ (function () {
    function InstantSearchService(apiService, sessionService) {
        this.apiService = apiService;
        this.sessionService = sessionService;
    }
    InstantSearchService.prototype.search = function (baseUrl, terms) {
        var _this = this;
        return terms
            .debounceTime(600)
            .distinctUntilChanged()
            .switchMap(function (term) { return _this.searchEntries(baseUrl + term); });
    };
    InstantSearchService.prototype.searchWithFilter = function (baseUrl, terms, urlFilterParams) {
        var _this = this;
        return terms
            .debounceTime(600)
            .distinctUntilChanged()
            .switchMap(function (term) {
            return _this.searchEntries(baseUrl + term, urlFilterParams);
        });
    };
    InstantSearchService.prototype.searchEntries = function (url, urlFilterParams) {
        if (urlFilterParams === void 0) { urlFilterParams = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* URLSearchParams */](); }
        return this.apiService
            .get(url, urlFilterParams)
            .map(function (response) { return response.result; });
    };
    InstantSearchService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6__index__["c" /* ApiService */],
            __WEBPACK_IMPORTED_MODULE_7__session_service__["a" /* SessionService */]])
    ], InstantSearchService);
    return InstantSearchService;
}());



/***/ }),

/***/ "../../../../../src/app/shared/services/opportunity.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OpportunityService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__session_service__ = __webpack_require__("../../../../../src/app/shared/services/session.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__api_service__ = __webpack_require__("../../../../../src/app/shared/services/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__index__ = __webpack_require__("../../../../../src/app/shared/services/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__ = __webpack_require__("../../../../@ngx-translate/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__models_index__ = __webpack_require__("../../../../../src/app/shared/models/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__helpers_datetime_convert_helper__ = __webpack_require__("../../../../../src/app/shared/helpers/datetime-convert-helper.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var OpportunityService = /** @class */ (function () {
    function OpportunityService(sessionService, apiService, instantSearchService, translateService) {
        this.sessionService = sessionService;
        this.apiService = apiService;
        this.instantSearchService = instantSearchService;
        this.translateService = translateService;
    }
    OpportunityService_1 = OpportunityService;
    Object.defineProperty(OpportunityService.prototype, "employeeId", {
        get: function () {
            return this.sessionService.currentUser.employeeId;
        },
        enumerable: true,
        configurable: true
    });
    OpportunityService.prototype.read = function (page, pageSize) {
        var _this = this;
        var url = "/employee/" + this.employeeId + "/opportunities/" + page + "/" + pageSize;
        return this.apiService
            .get(url)
            .map(function (response) {
            return {
                currentPage: response.result.page,
                pageSize: pageSize,
                pageCount: response.result.pageCount,
                total: response.result.recordCount,
                items: response.result.data.map(_this.toOpportunityListItem)
            };
        })
            .share();
    };
    OpportunityService.prototype.instantSearch = function (terms, page, pageSize) {
        var _this = this;
        var searchUrl = "/employee/" + this.employeeId + "/opportunities/search/" + page + "/" + pageSize + "/?search=";
        return this.instantSearchService
            .search(searchUrl, terms)
            .map(function (result) {
            return {
                currentPage: result.page,
                pageSize: pageSize,
                pageCount: result.pageCount,
                total: result.recordCount,
                items: (result.data || []).map(_this.toOpportunityListItem)
            };
        });
    };
    OpportunityService.prototype.instantSearchWithFilter = function (terms, filter, page, pageSize) {
        var _this = this;
        var searchUrl = "/employee/" + this.employeeId + "/opportunities/filter/" + page + "/" + pageSize + "/?search=";
        return this.instantSearchService
            .searchWithFilter(searchUrl, terms, OpportunityService_1.createFilterParams(filter))
            .map(function (result) {
            return {
                currentPage: result.page,
                pageSize: pageSize,
                pageCount: result.pageCount,
                total: result.recordCount,
                items: (result.data || []).map(_this.toOpportunityListItem)
            };
        });
    };
    OpportunityService.prototype.filter = function (searchTerm, filter, page, pageSize) {
        var _this = this;
        var filterUrl = "/employee/" + this.employeeId + "/opportunities/filter/" + page + "/" + pageSize + "/";
        var urlParams = OpportunityService_1.createFilterParams(filter);
        urlParams.append('search', searchTerm);
        return this.apiService.get(filterUrl, urlParams).map(function (response) {
            var result = response.result;
            return {
                currentPage: result.page,
                pageSize: pageSize,
                pageCount: result.pageCount,
                total: result.recordCount,
                items: (result.data || []).map(_this.toOpportunityListItem)
            };
        });
    };
    // tslint:disable-next-line:member-ordering
    OpportunityService.createFilterParams = function (filter) {
        var urlFilterParams = new __WEBPACK_IMPORTED_MODULE_7__angular_http__["e" /* URLSearchParams */]();
        urlFilterParams.append('classify', filter.classify);
        urlFilterParams.append('step', filter.step);
        filter.opportunityResourceId && urlFilterParams.append('opportunityResourceId', filter.opportunityResourceId);
        // tslint:disable-next-line:no-unused-expression
        filter.fromDate && urlFilterParams.append('fromDate', filter.fromDate.toString());
        // tslint:disable-next-line:no-unused-expression
        filter.toDate && urlFilterParams.append('toDate', filter.toDate.toString());
        // if (filter.assignToGroup) {
        //     urlFilterParams.append('assignTo', filter.assignToGroup);
        //     urlFilterParams.append('isAssignToGroup', 'true');
        // }
        // if (filter.assignTo) {
        //     urlFilterParams.append('assignTo', filter.assignTo);
        //     urlFilterParams.append('isAssignToGroup', 'false');
        // }
        if (filter.assignToGroup) {
            urlFilterParams.append('assignToEmployeeGroup', filter.assignToGroup);
        }
        if (filter.assignTo) {
            urlFilterParams.append('assignToEmployee', filter.assignTo);
        }
        return urlFilterParams;
    };
    OpportunityService.prototype.search = function (term, page, pageSize) {
        var _this = this;
        var searchUrl = "/employee/" + this.employeeId + "/opportunities/search/" + page + "/" + pageSize + "/?search=" + term;
        return this.apiService.get(searchUrl).map(function (response) {
            var result = response.result;
            return {
                currentPage: result.page,
                pageSize: pageSize,
                pageCount: result.pageCount,
                total: result.recordCount,
                items: (result.data || []).map(_this.toOpportunityListItem)
            };
        });
    };
    OpportunityService.prototype.delete = function (ids) {
        var url = "/employee/" + this.employeeId + "/opportunities/delete";
        return this.apiService.post(url, ids).map(function (response) { return response.result; });
    };
    OpportunityService.prototype.view = function (opportunityId) {
        var url = "/employee/" + this.employeeId + "/opportunity/" + opportunityId;
        return this.apiService
            .get(url)
            .map(function (response) {
            var result = response.result;
            var resultModel = new __WEBPACK_IMPORTED_MODULE_5__models_index__["f" /* OpportunityModel */]();
            resultModel.id = result.id;
            resultModel.name = result.name;
            resultModel.opportunityDateStop = result.completionDate;
            resultModel.customer = result.customer && result.customer.id ? {
                id: result.customer.id,
                name: result.customer.name
            } : null;
            resultModel.prospectCustomer = result.prospectCustomer && result.prospectCustomer.id ? {
                id: result.prospectCustomer.id,
                name: result.prospectCustomer.name
            } : null;
            resultModel.contact = result.customerContact && {
                id: result.customerContact.id,
                salutation: result.customerContact.title || '',
                firstName: result.customerContact.firstName,
                lastName: result.customerContact.lastName
            };
            resultModel.contacts = result.opportunityContactGroups.map(function (x) { return ({
                id: x.contact.id,
                text: x.contact.name
            }); });
            resultModel.category = result.classify ? result.classify : null;
            resultModel.prospectSource = result.customerResource && result.customerResource.id ? result.customerResource : null;
            resultModel.amount = result.amount;
            resultModel.phase = result.step;
            resultModel.probability = result.probability;
            resultModel.campaign = result.campaign && result.campaign.id ? {
                id: result.campaign.id,
                name: result.campaign.name
            } : null;
            resultModel.assignTo = result.employee && {
                id: result.employee.id,
                name: result.employee.name
            };
            resultModel.assignToGroup = result.employeeGroup && {
                id: result.employeeGroup.id,
                name: result.employeeGroup.name
            };
            resultModel.description = result.description;
            resultModel.expectedValue = result.expectedValue;
            resultModel.createdDate = result.createdDate;
            resultModel.updatedDate = result.updatedDate;
            resultModel.isShare = result.isShare;
            resultModel.branch = result.branch;
            resultModel.approachChannels = result.approachChannels;
            resultModel.proposals = result.proposals;
            resultModel.models = result.models;
            return resultModel;
        })
            .share();
    };
    OpportunityService.prototype.createOrUpdate = function (formValue) {
        var url = "employee/" + this.employeeId + "/opportunity";
        url = formValue.id ? url + '/edit' : url;
        var requestModel = {
            id: formValue.id,
            name: formValue.name && formValue.name.trim(),
            classify: formValue.category ? formValue.category : null,
            potentialSources: formValue.prospectSource,
            amount: formValue.amount,
            completionDate: __WEBPACK_IMPORTED_MODULE_6__helpers_datetime_convert_helper__["a" /* default */].fromDtObjectToTimestamp(formValue.opportunityDateStop),
            campaign: formValue.campaign && formValue.campaign.id ? {
                id: formValue.campaign.id
            } : null,
            customerResource: formValue.prospectSource ? {
                id: formValue.prospectSource
            } : null,
            prospectCustomer: formValue.prospectCustomer && formValue.prospectCustomer.id ? {
                id: formValue.prospectCustomer.id
            } : null,
            step: formValue.phase,
            probability: formValue.probability,
            strategy: formValue.campaignName,
            expectedValue: formValue.expectedValue,
            description: formValue.description && formValue.description.trim(),
            // branch: {
            //     id: this.sessionService.branchId
            // },
            customer: formValue.customer && formValue.customer.id ? {
                id: formValue.customer.id
            } : null,
            contacts: formValue.contact && formValue.contact.length > 0
                ? formValue.contact.map(function (x) { return ({ id: x.id }); })
                : null,
            employee: formValue.assignTo
                ? {
                    id: formValue.assignTo
                }
                : null,
            employeeGroup: formValue.assignToGroup
                ? {
                    id: formValue.assignToGroup
                }
                : null,
            isShare: formValue.isShare ? formValue.isShare : false,
            branch: {
                id: formValue.branch
            },
            approachChannels: formValue.approachChannels && formValue.approachChannels.length > 0 ? formValue.approachChannels.map(function (i) {
                return {
                    id: i.id ? i.id : i
                };
            }) : null,
            models: formValue.models && formValue.models.length > 0 ? formValue.models.map(function (i) {
                return {
                    attributeValue: {
                        id: i.id
                    }
                };
            }) : null,
        };
        return this.apiService
            .post(url, requestModel)
            .map(function (response) { return response.result; });
    };
    OpportunityService.prototype.toOpportunityListItem = function (result) {
        return {
            id: result.id,
            opportunityName: result.name,
            customerName: result.customer && result.customer.name,
            customerProspectName: result.prospectCustomer && result.prospectCustomer.name,
            customerObj: result.customer,
            prospectCustomerObj: result.prospectCustomer,
            tel1: result.customer && result.customer.tel1,
            // tslint:disable-next-line:max-line-length
            contact: result.opportunityContactGroups.map(function (i) { return i.contact.name; }).sort(function (one, two) { return (one > two ? -1 : 1); }).join(', '),
            category: result.classify,
            probability: result.probability,
            amount: result.amount,
            phase: result.step,
            assignTo: result.employee && result.employee.name,
            assignToGroup: result.employeeGroup && result.employeeGroup.name,
            checkboxSelected: false,
            expectedValue: result.expectedValue,
            branch: result.branch && result.branch.name,
            customerResource: result.customerResource ? result.customerResource.name : '',
            completionDate: result.completionDate,
            campaignName: result.campaign && result.campaign.name,
            description: result.description,
            proposals: result.proposals.map(function (i) { return i.no; }).join(','),
            modelsStr: result.models && result.models.length > 0 ? result.models.map(function (i) { return i.attributeValue.value; }).join(', ') : ''
        };
    };
    OpportunityService.prototype.getOpportunitiesByModuleItemId = function (moduleName, moduleItemId, page, pageSize) {
        var _this = this;
        var url = "employee/" + this.employeeId + "/opportunities/" + moduleName + "/" + moduleItemId + "/" + page + "/" + pageSize;
        return this.apiService
            .get(url)
            .map(function (response) {
            var result = response.result;
            return {
                currentPage: result.page,
                pageSize: pageSize,
                pageCount: result.pageCount,
                total: result.recordCount,
                items: (result.data || []).map(_this.toOpportunityListItem)
            };
        })
            .share();
    };
    OpportunityService = OpportunityService_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__session_service__["a" /* SessionService */],
            __WEBPACK_IMPORTED_MODULE_2__api_service__["a" /* ApiService */],
            __WEBPACK_IMPORTED_MODULE_3__index__["k" /* InstantSearchService */],
            __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__["c" /* TranslateService */]])
    ], OpportunityService);
    return OpportunityService;
    var OpportunityService_1;
}());



/***/ }),

/***/ "../../../../../src/app/shared/services/permission.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PermissionService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__session_service__ = __webpack_require__("../../../../../src/app/shared/services/session.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constants_permission_enum__ = __webpack_require__("../../../../../src/app/shared/constants/permission.enum.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PermissionService = /** @class */ (function () {
    function PermissionService(sessionService) {
        this.sessionService = sessionService;
    }
    Object.defineProperty(PermissionService.prototype, "groupPermissionList", {
        get: function () {
            if (this.sessionService.getSession() && this.sessionService.getSession().branches.length) {
                return this.sessionService.getSession().branches;
            }
            else {
                return [];
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PermissionService.prototype, "permissionList", {
        get: function () {
            var _this = this;
            if (this.groupPermissionList.length) {
                var group = this.groupPermissionList.find(function (i) { return i.id == _this.sessionService.branchId; });
                if (group) {
                    return group.funtions;
                }
                else {
                    return [];
                }
            }
            else {
                return [];
            }
        },
        enumerable: true,
        configurable: true
    });
    // xem thông tin tiềm năng
    PermissionService.prototype.viewProspectInfo = function () {
        return this.permissionList.length && this.permissionList.find(function (i) { return i.functionWeb.no === __WEBPACK_IMPORTED_MODULE_2__constants_permission_enum__["a" /* Permission */].ViewProspectInfo; }) ? true : false;
    };
    PermissionService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__session_service__["a" /* SessionService */]])
    ], PermissionService);
    return PermissionService;
}());



/***/ }),

/***/ "../../../../../src/app/shared/services/prospect.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProspectService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models__ = __webpack_require__("../../../../../src/app/shared/models/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services__ = __webpack_require__("../../../../../src/app/shared/services/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__helpers_utils_helper__ = __webpack_require__("../../../../../src/app/shared/helpers/utils.helper.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__helpers_datetime_convert_helper__ = __webpack_require__("../../../../../src/app/shared/helpers/datetime-convert-helper.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ProspectService = /** @class */ (function () {
    function ProspectService(apiService, sessionService, instantSearchService) {
        this.apiService = apiService;
        this.sessionService = sessionService;
        this.instantSearchService = instantSearchService;
    }
    ProspectService_1 = ProspectService;
    Object.defineProperty(ProspectService.prototype, "employeeId", {
        get: function () {
            return this.sessionService.currentUser.employeeId;
        },
        enumerable: true,
        configurable: true
    });
    ProspectService.prototype.read = function (page, pageSize) {
        var _this = this;
        var that = this;
        return that.apiService
            .get("/employee/" + this.employeeId + "/prospects/" + page + "/" + pageSize)
            .map(function (response) {
            return {
                currentPage: response.result.page,
                pageSize: pageSize,
                pageCount: response.result.pageCount,
                total: response.result.recordCount,
                items: response.result.data.map(_this.toProspectListItem)
            };
        })
            .share();
    };
    ProspectService.prototype.getLocation = function (model) {
        // tslint:disable-next-line:triple-equals
        if (model.district && model.district != '0') {
            return { id: model.district };
            // tslint:disable-next-line:triple-equals
        }
        else if (model.city && model.city != '0') {
            return { id: model.city };
            // tslint:disable-next-line:triple-equals
        }
        else if (model.country && model.country != '0') {
            return { id: model.country };
        }
        else {
            return null;
        }
    };
    ProspectService.prototype.createOrUpdate = function (prospectFromValue) {
        var url = "/employee/" + this.employeeId + "/prospect";
        url = prospectFromValue.id ? url + '/edit' : url;
        var model = {
            id: prospectFromValue.id,
            title: prospectFromValue.name,
            potentialStatus: prospectFromValue.statusSource,
            firstName: prospectFromValue.firstName && prospectFromValue.firstName.trim(),
            lastName: prospectFromValue.lastName && prospectFromValue.lastName.trim(),
            name: prospectFromValue.fullName && prospectFromValue.fullName.trim(),
            phone: prospectFromValue.phoneNumberCustomer && prospectFromValue.phoneNumberCustomer.trim(),
            cellPhone: prospectFromValue.phoneNumberpersonal && prospectFromValue.phoneNumberpersonal.trim(),
            email: prospectFromValue.email && prospectFromValue.email.trim(),
            website: prospectFromValue.website && prospectFromValue.website.trim(),
            company: prospectFromValue.companyName && prospectFromValue.companyName.trim(),
            customerResource: prospectFromValue.source ? {
                id: prospectFromValue.source
            } : null,
            address: prospectFromValue.address,
            rate: prospectFromValue.comment,
            description: prospectFromValue.description && prospectFromValue.description.trim(),
            business: prospectFromValue.fieldOfAction,
            branch: {
                id: this.sessionService.branchId
            },
            objectType: prospectFromValue.campaign && prospectFromValue.campaign.id ? 'Campaign' : null,
            objectId: prospectFromValue.campaign ? prospectFromValue.campaign.id : null,
            // district: prospectFromValue.district,
            // city: prospectFromValue.city,
            // country: prospectFromValue.country,
            revenue: prospectFromValue.revenue,
            employee: prospectFromValue.assignTo ? { id: prospectFromValue.assignTo } : null,
            employeeGroup: prospectFromValue.assignToGroup ? { id: prospectFromValue.assignToGroup } : null,
            gender: prospectFromValue.gender,
            lunarBirthday: prospectFromValue.lunarBirthday,
            dob: __WEBPACK_IMPORTED_MODULE_7__helpers_datetime_convert_helper__["a" /* default */].fromDtObjectToTimestamp(prospectFromValue.dob),
            location: this.getLocation(prospectFromValue),
            handler: prospectFromValue.handler,
            date: __WEBPACK_IMPORTED_MODULE_7__helpers_datetime_convert_helper__["a" /* default */].fromDtObjectToTimestamp(prospectFromValue.date),
            socialLink: prospectFromValue.socialLink && prospectFromValue.socialLink.trim(),
            retails: prospectFromValue.retails && prospectFromValue.retails.length > 0 ? prospectFromValue.retails.map(function (i) {
                return {
                    productGroup: {
                        id: i.id
                    }
                };
            }) : null,
            models: prospectFromValue.models && prospectFromValue.models.length > 0 ? prospectFromValue.models.map(function (i) {
                return {
                    attributeValue: {
                        id: i.id
                    }
                };
            }) : null,
            approachChannels: prospectFromValue.approachChannels && prospectFromValue.approachChannels.length > 0 ? prospectFromValue.approachChannels.map(function (i) {
                return {
                    id: i.id ? i.id : i
                };
            }) : null,
            dabs: prospectFromValue.dab && prospectFromValue.dab.length > 0 ? prospectFromValue.dab.map(function (i) {
                return {
                    value: i.id
                };
            }) : null,
            promotionCare: prospectFromValue.promotionCare,
            askShowroomAddress: prospectFromValue.askShowroomAddress,
            onlineSaleOpportunity: prospectFromValue.onlineSaleOpportunity,
            adsID: prospectFromValue.adsID,
            result: prospectFromValue.result,
            approached: prospectFromValue.approached
        };
        return this.apiService
            .post(url, model)
            .map(function (response) { return response.result; });
    };
    ProspectService.prototype.view = function (prospectId) {
        var _this = this;
        var url = "/employee/" + this.employeeId + "/prospect/" + prospectId;
        return this.apiService
            .get(url)
            .map(function (response) { return _this.toProspectModel(response.result); })
            .share();
    };
    ProspectService.prototype.toProspectModel = function (result) {
        var prospectModel = new __WEBPACK_IMPORTED_MODULE_4__models__["i" /* ProspectModel */]();
        prospectModel.id = result.id;
        prospectModel.name = result.title || '';
        prospectModel.statusSource = result.potentialStatus;
        prospectModel.firstName = result.firstName;
        prospectModel.lastName = result.lastName;
        prospectModel.phoneNumberCustomer = result.phone;
        prospectModel.phoneNumberpersonal = result.cellPhone;
        prospectModel.email = result.email;
        prospectModel.website = result.website;
        prospectModel.companyName = result.company;
        prospectModel.source = result.customerResource;
        prospectModel.address = result.address;
        prospectModel.comment = result.rate;
        prospectModel.description = result.description;
        prospectModel.assignTo = result.employee && {
            id: result.employee.id,
            name: result.employee.name
        };
        prospectModel.assignToGroup = result.employeeGroup && {
            id: result.employeeGroup.id,
            name: result.employeeGroup.name
        };
        prospectModel.fieldOfAction = result.business;
        prospectModel.district = result.location && __WEBPACK_IMPORTED_MODULE_6__helpers_utils_helper__["a" /* default */].getLocationId(result.location, 'District').toString();
        prospectModel.city = result.location && __WEBPACK_IMPORTED_MODULE_6__helpers_utils_helper__["a" /* default */].getLocationId(result.location, 'StateProvince').toString();
        prospectModel.country = result.location && __WEBPACK_IMPORTED_MODULE_6__helpers_utils_helper__["a" /* default */].getLocationId(result.location, 'Country').toString();
        prospectModel.revenue = result.revenue;
        prospectModel.createdDate = result.createdDate;
        prospectModel.updatedDate = result.updatedDate;
        prospectModel.objectId = result.objectId;
        prospectModel.gender = result.gender;
        prospectModel.lunarBirthday = result.lunarBirthday;
        prospectModel.dob = result.dob;
        prospectModel.isAssigned = result.isAssigned;
        prospectModel.fullName = result.name;
        prospectModel.location = result.location;
        prospectModel.rateText = result.rateText;
        prospectModel.handler = result.handler;
        prospectModel.date = result.date;
        prospectModel.socialLink = result.socialLink;
        prospectModel.retails = result.retails;
        prospectModel.models = result.models;
        prospectModel.dab = result.dabs;
        prospectModel.promotionCare = result.promotionCare;
        prospectModel.askShowroomAddress = result.askShowroomAddress;
        prospectModel.onlineSaleOpportunity = result.onlineSaleOpportunity;
        prospectModel.adsID = result.adsID;
        prospectModel.result = result.result;
        prospectModel.approached = result.approached;
        prospectModel.approachChannels = result.approachChannels;
        return prospectModel;
    };
    ProspectService.prototype.viewHistory = function (prospectId) {
        var _this = this;
        var url = "/employee/" + this.employeeId + "/deleted-prospect/" + prospectId;
        return this.apiService
            .get(url)
            .map(function (response) { return _this.toProspectModel(response.result); })
            .share();
    };
    ProspectService.prototype.delete = function (ids) {
        var url = "/employee/" + this.employeeId + "/prospects/delete";
        return this.apiService.post(url, ids).map(function (response) { return response.result; });
    };
    ProspectService.prototype.instantSearch = function (terms, page, pageSize) {
        var _this = this;
        var searchUrl = "/employee/" + this.employeeId + "/prospects/search/" + page + "/" + pageSize + "/?search=";
        return this.instantSearchService
            .search(searchUrl, terms)
            .map(function (result) {
            return {
                currentPage: result.page,
                pageSize: pageSize,
                pageCount: result.pageCount,
                total: result.recordCount,
                items: (result.data || []).map(_this.toProspectListItem)
            };
        });
    };
    ProspectService.prototype.instantSearchWithFilter = function (terms, filter, page, pageSize) {
        var _this = this;
        var searchUrl = "/employee/" + this.employeeId + "/prospects/filter/" + page + "/" + pageSize + "/?search=";
        return this.instantSearchService
            .searchWithFilter(searchUrl, terms, ProspectService_1.createFilterParams(filter))
            .map(function (result) {
            return {
                currentPage: result.page,
                pageSize: pageSize,
                pageCount: result.pageCount,
                total: result.recordCount,
                items: (result.data || []).map(_this.toProspectListItem)
            };
        });
    };
    ProspectService.prototype.search = function (term, page, pageSize) {
        var _this = this;
        var searchUrl = "/employee/" + this.employeeId + "/prospects/search/" + page + "/" + pageSize + "/?search=" + term;
        return this.apiService.get(searchUrl).map(function (response) {
            var result = response.result;
            return {
                currentPage: result.page,
                pageSize: pageSize,
                pageCount: result.pageCount,
                total: result.recordCount,
                items: (result.data || []).map(_this.toProspectListItem)
            };
        });
    };
    ProspectService.prototype.filter = function (searchTerm, filter, page, pageSize) {
        var _this = this;
        var filterUrl = "/employee/" + this.employeeId + "/prospects/filter/" + page + "/" + pageSize + "/";
        var urlParams = ProspectService_1.createFilterParams(filter);
        urlParams.append('search', searchTerm);
        return this.apiService.get(filterUrl, urlParams).map(function (response) {
            var result = response.result;
            return {
                currentPage: result.page,
                pageSize: pageSize,
                pageCount: result.pageCount,
                total: result.recordCount,
                items: (result.data || []).map(_this.toProspectListItem)
            };
        });
    };
    // tslint:disable-next-line:member-ordering
    ProspectService.createFilterParams = function (filter) {
        var urlFilterParams = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* URLSearchParams */]();
        urlFilterParams.append('rate', filter.rate);
        urlFilterParams.append('prospectSource', filter.prospectSource ? filter.prospectSource : null);
        urlFilterParams.append('business', filter.business);
        urlFilterParams.append('month', filter.month ? filter.month : null);
        filter.fromDate && urlFilterParams.append('fromDate', filter.fromDate ? (+filter.fromDate).toString() : '');
        filter.toDate && urlFilterParams.append('toDate', filter.toDate ? (+filter.toDate).toString() : '');
        filter.handler && urlFilterParams.append('handler', filter.handler);
        filter.approached != null && urlFilterParams.append('approached', filter.approached + '');
        filter.approachChannel && urlFilterParams.append('approachChannelId', filter.approachChannel);
        // if (filter.assignToGroup && filter.assignToGroup.toString() === '0') {
        //     urlFilterParams.append('assignTo', '0');
        //     urlFilterParams.append('isAssignToGroup', 'true');
        // }
        // if (filter.assignTo && filter.assignTo.toString() === '0') {
        //     urlFilterParams.append('assignTo', '0');
        //     urlFilterParams.append('isAssignToGroup', 'false');
        // }
        // if (filter.assignToGroup) {
        //     urlFilterParams.append('assignTo', filter.assignToGroup);
        //     urlFilterParams.append('isAssignToGroup', 'true');
        // }
        // if (filter.assignTo) {
        //     urlFilterParams.append('assignTo', filter.assignTo);
        //     urlFilterParams.append('isAssignToGroup', 'false');
        // }
        if (filter.assignToGroup) {
            urlFilterParams.append('assignToEmployeeGroup', filter.assignToGroup);
        }
        if (filter.assignTo) {
            urlFilterParams.append('assignToEmployee', filter.assignTo);
        }
        if (filter.potentialStatus === '') {
            urlFilterParams.append('potentialStatus', '');
        }
        else if (filter.potentialStatus) {
            urlFilterParams.append('potentialStatus', filter.potentialStatus);
        }
        return urlFilterParams;
    };
    ProspectService.prototype.convertProspect = function (convertProspectFormValue) {
        var url = "/employee/" + this.employeeId + "/prospect/change";
        var assignTo = __WEBPACK_IMPORTED_MODULE_6__helpers_utils_helper__["a" /* default */].parseAssignTo(convertProspectFormValue.assignTo);
        var model = {
            id: convertProspectFormValue.id,
            createCustomer: convertProspectFormValue.isNewCustomer ? 1 : 0,
            customerName: convertProspectFormValue.customerName,
            customerType: 'Personal',
            createContact: convertProspectFormValue.isNewContact ? 1 : 0,
            business: null,
            title: convertProspectFormValue.contactSalutation,
            contactName: convertProspectFormValue.contactFullName,
            email: convertProspectFormValue.contactEmail,
            phone: convertProspectFormValue.customerPhone,
            employee: assignTo.assignToType === 'employee'
                ? {
                    id: assignTo.assignToId
                }
                : null,
            employeeGroup: assignTo.assignToType === 'group'
                ? {
                    id: assignTo.assignToId
                }
                : null
        };
        return this.apiService
            .post(url, model)
            .map(function (response) { return response.result; });
    };
    ProspectService.prototype.toProspectListItem = function (result) {
        return {
            id: result.id,
            salutation: result.title || '',
            firstName: result.firstName,
            lastName: result.lastName,
            evaluation: result.rate,
            companyPhone: result.phone,
            customerPhone: result.phone,
            mobilePhone: result.cellPhone,
            email: result.email,
            companyName: result.company,
            source: result.customerResource,
            business: result.business,
            assignTo: result.employee && result.employee.name,
            assignToGroup: result.employeeGroup && result.employeeGroup.name,
            checkboxSelected: false,
            gender: result.gender,
            revenue: result.revenue ? result.revenue : 0,
            potentialStatus: result.potentialStatus,
            website: result.website,
            city: result.city,
            country: result.country,
            address: result.address,
            district: result.district,
            description: result.description,
            lunarBirthday: result.lunarBirthday,
            dob: result.dob,
            isAssigned: result.isAssigned,
            fullName: result.name,
            location: result.location,
            campaign: result.campaign ? result.campaign : null,
            rateText: result.rateText,
            handlerStr: result.handlerStr,
            handler: result.handler,
            date: result.date,
            socialLink: result.socialLink,
            retails: result.retails && result.retails.length > 0 ? result.retails.map(function (i) { return i['productGroup']['name']; }).join(', ') : '',
            models: result.models && result.models.length > 0 ? result.models.map(function (i) { return i['attributeValue']['value']; }).join(', ') : '',
            dab: result.dabs && result.dabs.length > 0 ? result.dabs.map(function (i) { return i['text']; }).join(', ') : '',
            approachChannels: result.approachChannels && result.approachChannels.length > 0 ? result.approachChannels.map(function (i) { return i['name']; }).join(', ') : '',
            promotionCare: result.promotionCare,
            askShowroomAddress: result.askShowroomAddress,
            onlineSaleOpportunity: result.onlineSaleOpportunity,
            adsID: result.adsID,
            result: result.result,
            approached: result.approached
        };
    };
    ProspectService.prototype.importFile = function (file) {
        var url = "/employee/" + this.employeeId + "/prospects";
        var formData = new FormData();
        formData.append('filePath', file, 'file xlsx');
        return this.apiService
            .postFile(url, formData)
            .map(function (response) {
            return response;
        })
            .share();
    };
    ProspectService.prototype.checkCustomerName = function (customerName) {
        var url = "employee/" + this.employeeId + "/customers/check-name?name=" + customerName;
        return this.apiService
            .get(url)
            .map(function (response) {
            return response.result;
        })
            .share();
    };
    ProspectService.prototype.checkContactName = function (contactName) {
        var url = "employee/" + this.employeeId + "/contacts/check-name?name=" + contactName;
        return this.apiService
            .get(url)
            .map(function (response) {
            return response.result;
        })
            .share();
    };
    ProspectService.prototype.getProbabilityOfProspectIs100 = function (prospectId) {
        var url = "employee/" + this.employeeId + "/prospect/" + prospectId;
        return this.apiService.get(url).map(function (response) { return response.result; });
    };
    ProspectService = ProspectService_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__services__["c" /* ApiService */],
            __WEBPACK_IMPORTED_MODULE_5__services__["n" /* SessionService */],
            __WEBPACK_IMPORTED_MODULE_5__services__["k" /* InstantSearchService */]])
    ], ProspectService);
    return ProspectService;
    var ProspectService_1;
}());



/***/ }),

/***/ "../../../../../src/app/shared/services/session.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SessionService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_user_user_model__ = __webpack_require__("../../../../../src/app/shared/models/user/user.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


// tslint:disable-next-line:import-blacklist

var SessionService = /** @class */ (function () {
    function SessionService() {
        this.userSubject = new __WEBPACK_IMPORTED_MODULE_2_rxjs__["Subject"]();
        this.avatarSubject = new __WEBPACK_IMPORTED_MODULE_2_rxjs__["Subject"]();
        this.fileSubject = new __WEBPACK_IMPORTED_MODULE_2_rxjs__["Subject"]();
        this.previousUrl = '';
    }
    SessionService.prototype.getToken = function () {
        return this.currentSession && this.currentSession.token;
    };
    Object.defineProperty(SessionService.prototype, "currentUser", {
        get: function () {
            if (!this.currentSession) {
                return null;
            }
            return {
                userId: this.currentSession.userId,
                employeeId: this.currentSession.objectId,
                userName: this.currentSession.userName,
                email: this.currentSession.email
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SessionService.prototype, "currentSession", {
        get: function () {
            if (!window.localStorage['mhbSession']) {
                return null;
            }
            return JSON.parse(window.localStorage['mhbSession']);
        },
        enumerable: true,
        configurable: true
    });
    SessionService.prototype.saveSession = function (session) {
        window.localStorage['mhbSession'] = JSON.stringify(session);
    };
    SessionService.prototype.getSession = function () {
        if (!window.localStorage.getItem('mhbSession')) {
            return null;
        }
        return JSON.parse(window.localStorage.getItem('mhbSession'));
    };
    SessionService.prototype.saveUserInfo = function (userInfo) {
        this.userSubject.next(userInfo);
        window.localStorage['mhbUserInfo'] = JSON.stringify(userInfo);
    };
    SessionService.prototype.saveAvatarContact = function (avatarString) {
        this.avatarSubject.next(avatarString);
        window.localStorage['avatarContact'] = avatarString;
    };
    SessionService.prototype.getFileImage = function () {
        return this.fileSubject.asObservable();
    };
    SessionService.prototype.saveNotificationList = function (notification) {
        window.localStorage['listsNotification'] = JSON.stringify(notification);
    };
    SessionService.prototype.getAvatarContact = function () {
        return this.avatarSubject.asObservable();
    };
    SessionService.prototype.saveFileImage = function (file) {
        this.fileSubject.next(file);
    };
    SessionService.prototype.getUserInfo = function () {
        return this.userSubject.asObservable();
    };
    Object.defineProperty(SessionService.prototype, "userInfo", {
        get: function () {
            if (!window.localStorage['mhbUserInfo']) {
                return new __WEBPACK_IMPORTED_MODULE_1__models_user_user_model__["a" /* UserModel */]();
            }
            return JSON.parse(window.localStorage['mhbUserInfo']);
        },
        enumerable: true,
        configurable: true
    });
    SessionService.prototype.destroySession = function () {
        // window.localStorage.clear();
        window.localStorage.removeItem('mhbUserInfo');
        window.localStorage.removeItem('mhbSession');
    };
    Object.defineProperty(SessionService.prototype, "branchId", {
        get: function () {
            return window.localStorage['branchId'];
        },
        set: function (id) {
            window.localStorage['branchId'] = id;
        },
        enumerable: true,
        configurable: true
    });
    SessionService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
    ], SessionService);
    return SessionService;
}());



/***/ }),

/***/ "../../../../../src/app/shared/services/user-group.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserGroupService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__session_service__ = __webpack_require__("../../../../../src/app/shared/services/session.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__api_service__ = __webpack_require__("../../../../../src/app/shared/services/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__instant_search_service__ = __webpack_require__("../../../../../src/app/shared/services/instant-search.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// tslint:disable-next-line:import-blacklist



var UserGroupService = /** @class */ (function () {
    function UserGroupService(sessionService, apiService, instantSearchService) {
        this.sessionService = sessionService;
        this.apiService = apiService;
        this.instantSearchService = instantSearchService;
        this.permissionSubject = new __WEBPACK_IMPORTED_MODULE_3_rxjs__["Subject"]();
    }
    UserGroupService_1 = UserGroupService;
    Object.defineProperty(UserGroupService.prototype, "employeeId", {
        get: function () {
            return this.sessionService.currentUser.employeeId;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserGroupService.prototype, "branchId", {
        get: function () {
            return this.sessionService.branchId;
        },
        enumerable: true,
        configurable: true
    });
    UserGroupService.createFilterParams = function (filter) {
        var urlFilterParams = new __WEBPACK_IMPORTED_MODULE_5__angular_http__["e" /* URLSearchParams */]();
        if (filter.search) {
            urlFilterParams.append('search', filter.search);
        }
        return urlFilterParams;
    };
    UserGroupService.prototype.instantSearchWithFilter = function (terms, filter, page, pageSize) {
        var searchUrl = "/employee/" + this.employeeId + "/usergroup/search/" + page + "/" + pageSize + "/?search=";
        return this.instantSearchService
            .searchWithFilter(searchUrl, terms, UserGroupService_1.createFilterParams(filter))
            .map(function (result) {
            return {
                currentPage: result.page,
                pageSize: pageSize,
                pageCount: result.pageCount,
                total: result.recordCount,
                items: (result.data || [])
            };
        });
    };
    UserGroupService.prototype.filter = function (searchTerm, filter, page, pageSize) {
        var filterUrl = "/employee/" + this.employeeId + "/usergroup/search/" + page + "/" + pageSize + "/";
        var urlParams = UserGroupService_1.createFilterParams(filter);
        urlParams.append('search', searchTerm);
        return this.apiService.get(filterUrl, urlParams).map(function (response) {
            var result = response.result;
            return {
                currentPage: result.page,
                pageSize: pageSize,
                pageCount: result.pageCount,
                total: result.recordCount,
                items: (result.data || [])
            };
        });
    };
    UserGroupService.prototype.createOrEdit = function (data) {
        var url = "employee/" + this.employeeId + "/usergroup/";
        url += data.id ? 'edit' : 'create';
        return this.apiService.post(url, data);
    };
    UserGroupService.prototype.view = function (userGroupId) {
        var url = "employee/" + this.employeeId + "/usergroup/" + userGroupId;
        return this.apiService.get(url).map(function (response) { return response.result; });
    };
    UserGroupService.prototype.delete = function (userGroupId) {
        var url = "employee/" + this.employeeId + "/usergroup/" + userGroupId + "/delete";
        return this.apiService.post(url).map(function (response) { return response.result; });
    };
    UserGroupService.prototype.multiDelete = function (idx) {
        var url = "employee/" + this.employeeId + "/usergroup/delete";
        return this.apiService.post(url, idx).map(function (response) { return response.result; });
    };
    UserGroupService.prototype.getListPermissionDefault = function (module) {
        var url = "employee/" + this.employeeId + "/function/list/" + module;
        return this.apiService.get(url).map(function (response) { return response.result; });
    };
    UserGroupService.prototype.getUserGroupPermission = function (groupId) {
        var url = "employee/" + this.employeeId + "/group/" + groupId + "/usergroupfunction";
        return this.apiService.get(url).map(function (response) { return response.result; });
    };
    UserGroupService.prototype.createOrEditUserGroupPermission = function (data, action) {
        var url = "employee/" + this.employeeId + "/usergroupfunction/" + action;
        return this.apiService.post(url, data);
    };
    UserGroupService.prototype.checkPermission = function () {
        return this.permissionSubject.asObservable();
    };
    UserGroupService.prototype.updatePermission = function () {
        return this.permissionSubject.next();
    };
    UserGroupService = UserGroupService_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__session_service__["a" /* SessionService */],
            __WEBPACK_IMPORTED_MODULE_2__api_service__["a" /* ApiService */],
            __WEBPACK_IMPORTED_MODULE_4__instant_search_service__["a" /* InstantSearchService */]])
    ], UserGroupService);
    return UserGroupService;
    var UserGroupService_1;
}());



/***/ }),

/***/ "../../../../../src/app/shared/services/user-notification.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserNotificationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__ = __webpack_require__("../../../../rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment__ = __webpack_require__("../../../../moment/moment.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__api_service__ = __webpack_require__("../../../../../src/app/shared/services/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__session_service__ = __webpack_require__("../../../../../src/app/shared/services/session.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var UserNotificationService = /** @class */ (function () {
    function UserNotificationService(apiService, sessionService) {
        this.apiService = apiService;
        this.sessionService = sessionService;
        this.countNotifiSubject = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["a" /* Subject */]();
    }
    UserNotificationService_1 = UserNotificationService;
    Object.defineProperty(UserNotificationService.prototype, "employeeId", {
        get: function () {
            return this.sessionService.currentUser.employeeId;
        },
        enumerable: true,
        configurable: true
    });
    UserNotificationService.prototype.getNotifiSubject = function () {
        return this.countNotifiSubject.asObservable();
    };
    UserNotificationService.prototype.updateNotifiSubject = function () {
        this.countNotifiSubject.next();
    };
    UserNotificationService.prototype.count = function () {
        var url = "/employee/" + this.employeeId + "/notification/count";
        return this.apiService
            .get(url)
            .map(function (response) { return response.result; })
            .share();
    };
    UserNotificationService.prototype.read = function (id) {
        var url = "/employee/" + this.employeeId + "/notification/read/" + id;
        return this.apiService
            .post(url)
            .map(function (response) { return response.result; })
            .share();
    };
    UserNotificationService.prototype.list = function (page, pageSize) {
        var url = "/employee/" + this.employeeId + "/notifications/" + page + "/" + pageSize;
        return this.apiService
            .get(url)
            .map(function (response) {
            var result = response.result;
            return {
                currentPage: result.page,
                pageSize: pageSize,
                pageCount: result.pageCount,
                total: result.recordCount,
                items: (result.data || []).map(UserNotificationService_1.toNotificationItem)
            };
        })
            .share();
    };
    UserNotificationService.prototype.listNoticationsReminder = function (page, pageSize) {
        var url = "/employee/" + this.employeeId + "/notifications/" + __WEBPACK_IMPORTED_MODULE_4_moment__().valueOf() + "/" + page + "/" + pageSize;
        return this.apiService
            .get(url)
            .map(function (response) {
            var result = response.result;
            return {
                currentPage: result.page,
                pageSize: pageSize,
                pageCount: result.pageCount,
                total: result.recordCount,
                items: (result.data || []).map(UserNotificationService_1.toNotificationItem)
            };
        })
            .share();
    };
    // tslint:disable-next-line:member-ordering
    UserNotificationService.toNotificationItem = function (result) {
        return {
            id: result.id,
            moduleName: result.objectType,
            moduleItemId: result.objectId,
            moduleItemName: result.objectName,
            startDate: result.startDate,
            endDate: result.endDate,
            unread: !result.read,
            createdDate: result.createdDate,
            employee: result.employee,
            isLeaderNotification: result.isLeaderNotification,
            employeeGroup: result.employeeGroup && {
                id: result.employeeGroup.id,
                name: result.employeeGroup.name,
            },
        };
    };
    UserNotificationService = UserNotificationService_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__api_service__["a" /* ApiService */],
            __WEBPACK_IMPORTED_MODULE_6__session_service__["a" /* SessionService */]])
    ], UserNotificationService);
    return UserNotificationService;
    var UserNotificationService_1;
}());



/***/ }),

/***/ "../../../../../src/app/shared/services/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__api_service__ = __webpack_require__("../../../../../src/app/shared/services/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__session_service__ = __webpack_require__("../../../../../src/app/shared/services/session.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UserService = /** @class */ (function () {
    function UserService(apiService, sessionService) {
        this.apiService = apiService;
        this.sessionService = sessionService;
    }
    Object.defineProperty(UserService.prototype, "employeeId", {
        get: function () {
            return this.sessionService.currentUser.employeeId;
        },
        enumerable: true,
        configurable: true
    });
    UserService.prototype.setAuth = function (session) {
        var _this = this;
        this.sessionService.saveSession(session);
        this.getUserProfile().subscribe(function (result) {
            return _this.sessionService.saveUserInfo(result);
        });
    };
    UserService.prototype.purgeAuth = function () {
        this.sessionService.destroySession();
    };
    UserService.prototype.attemptAuth = function (type, username, password) {
        var _this = this;
        var route = type === "login" ? "/login" : "";
        return this.apiService
            .postNoHeader(route, {
            username: username,
            password: password
        })
            .map(function (data) {
            _this.setAuth(data.result);
            return data.result;
        });
    };
    UserService.prototype.changePassword = function (email, oldPassword, newPassword) {
        return this.apiService
            .post("/users/password/change", {
            username: email,
            oldPassword: oldPassword,
            newPassword: newPassword
        })
            .map(function (data) {
            return data;
        });
    };
    UserService.prototype.getActiveCode = function (email) {
        var url = "/users/password/forgot";
        return this.apiService
            .post(url, {
            email: email
        })
            .map(function (data) {
            return data.result;
        });
    };
    UserService.prototype.validateActiveCode = function (recoverCode) {
        var url = "/users/password/validate?token=" + recoverCode;
        return this.apiService.get(url).map(function (data) {
            return data.result;
        });
    };
    UserService.prototype.resetPassword = function (recoverCode, newPassword) {
        var url = "/users/password/new";
        return this.apiService
            .post(url, {
            token: recoverCode,
            newPassword: newPassword
        })
            .map(function (data) {
            return data.result;
        });
    };
    UserService.prototype.logOut = function () {
        return this.apiService.post("/logout").map(function (data) {
            return data;
        });
    };
    // updateUserProfile(formValue: any): Observable<UserModel> {
    //   const url = `/employee/${this.employeeId}/edit`;
    //   return this.apiService.post(url, formValue)
    //     .map(response => {
    //       return {
    //         firstName: response.result.firstName,
    //         lastName: response.result.lastName,
    //         fullName: `${response.result.lastName} ${response.result.firstName}`,
    //         phone: response.result.phone,
    //         dob: response.result.dob,
    //         email: response.result.email,
    //         address: response.result.address,
    //         gender: response.result.gender,
    //       };
    //     });
    // }
    UserService.prototype.getUserProfile = function () {
        var _this = this;
        var url = "/employee/" + this.employeeId;
        return this.apiService
            .get(url)
            .map(function (response) { return _this.toUserModel(response.result); })
            .share();
    };
    UserService.prototype.toUserModel = function (result) {
        return {
            id: result.id,
            firstName: result.firstName,
            lastName: result.lastName,
            fullName: result.lastName + "  " + result.firstName,
            dob: result.dob,
            phone: result.phone,
            email: result.email,
            address: result.address,
            gender: "",
            avatar: result.avatar
        };
    };
    UserService.prototype.upLoadAvatar = function (avatar) {
        var _this = this;
        var url = "/employee/" + this.employeeId + "/edit";
        return this.apiService
            .post(url, { avatar: avatar })
            .map(function (response) { return _this.toUserModel(response.result); })
            .share();
    };
    UserService.prototype.getAvatarByUserId = function (id) {
        var url = "employee/" + this.employeeId + "/avatar/" + id;
        return this.apiService
            .get(url)
            .map(function (response) { return response.result; })
            .share();
    };
    UserService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__api_service__["a" /* ApiService */],
            __WEBPACK_IMPORTED_MODULE_4__session_service__["a" /* SessionService */]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "../../../../../src/app/shared/services/window.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WindowService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__ = __webpack_require__("../../../../rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2____ = __webpack_require__("../../../../../src/app/shared/services/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__helpers_datetime_convert_helper__ = __webpack_require__("../../../../../src/app/shared/helpers/datetime-convert-helper.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var WindowService = /** @class */ (function () {
    function WindowService(apiService, sessionService) {
        this.apiService = apiService;
        this.sessionService = sessionService;
        this.deliveryReceiptDataSource = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["a" /* Subject */]();
        this.deliveryReceiptShow = this.deliveryReceiptDataSource.asObservable();
        this.detailRevenueDataSource = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["a" /* Subject */]();
        this.detailRevenueShow = this.detailRevenueDataSource.asObservable();
        this.customerIdDataSource = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["a" /* Subject */]();
        this.customerId = this.customerIdDataSource.asObservable();
    }
    Object.defineProperty(WindowService.prototype, "employeeId", {
        get: function () {
            return this.sessionService.currentUser.employeeId;
        },
        enumerable: true,
        configurable: true
    });
    WindowService.prototype.setDeliveryReceiptShow = function (data) {
        this.deliveryReceiptDataSource.next(data);
    };
    WindowService.prototype.setDetailRevenueShow = function (data) {
        this.detailRevenueDataSource.next(data);
    };
    WindowService.prototype.setCustomerId = function (data) {
        this.customerIdDataSource.next(data);
    };
    // get danh sách phiếu giao
    WindowService.prototype.getDeliveryReceiptList = function (customerId, pageNumber, pageSize, productNo, invoiceStatus, invoiceNo) {
        var _this = this;
        var url = "employee/" + this.employeeId + "/invoices/" + customerId + "/" + pageNumber + "/" + pageSize + "?";
        if (productNo) {
            url += "&productNo=" + productNo;
        }
        if (invoiceStatus) {
            url += "&invoiceStatus=" + invoiceStatus;
        }
        if (invoiceNo) {
            url += "&invoiceNo=" + invoiceNo;
        }
        return this.apiService
            .get(url)
            .map(function (response) {
            var result = response.result;
            return {
                currentPage: result.page,
                pageSize: pageSize,
                pageCount: result.pageCount,
                total: result.recordCount,
                items: (result.data || []).map(_this.toInvoiceModel)
            };
        })
            .share();
    };
    // chi tiết tình trạng giao hàng
    WindowService.prototype.getDeliveryDetail = function (coordinatorNo) {
        var _this = this;
        var url = "employee/" + this.employeeId + "/coordinator?coordinatorNo=" + coordinatorNo;
        return this.apiService
            .get(url)
            .map(function (data) { return _this.toDeliveryDetail(data.result); });
    };
    // chi tiết công nợ
    WindowService.prototype.getDebtDetail = function (customerId, pageNumber, pageSize, fromDate, toDate) {
        var url = "employee/" + this.employeeId + "/debtdetails/" + customerId + "/" + pageNumber + "/" + pageSize + "?fromDate=" + fromDate + "&toDate=" + toDate;
        return this.apiService
            .get(url)
            .map(function (response) {
            var result = response.result;
            return {
                currentPage: result.page,
                pageSize: pageSize,
                pageCount: result.pageCount,
                total: result.recordCount,
                items: result.data
            };
        })
            .share();
    };
    WindowService.prototype.toDeliveryDetail = function (data) {
        return {
            coordinatorDateStr: __WEBPACK_IMPORTED_MODULE_3__helpers_datetime_convert_helper__["a" /* default */].fromTimestampToDtStr(data.coordinatorDate),
            coordinatorNo: data.coordinatorNo,
            coordinatorStatus: data.coordinatorStatus,
            employeeName: data.employee.name,
            vehicleNoPlate: data.vehicleNoPlate
        };
    };
    WindowService.prototype.toInvoiceModel = function (data) {
        return {
            coordinatorReference: data.invoice.coordinatorReference,
            invoiceStatus: data.invoice.invoiceStatus,
            invoiceNo: data.invoice.invoiceNo,
            productDesc: data.productDesc,
            productNo: data.product.productNo,
            productQty: data.productQty,
            productSerialNo: data.productSerialNo,
            productUnitPrice: data.productUnitPrice,
            totalAmount: data.totalAmount,
            transferFeeAmount: data.transferFeeAmount,
            productQtyCancel: data.invoice.invoiceStatus === "InvoiceCancel"
                ? data.productQty
                : null
        };
    };
    WindowService.prototype.toDebtDetailModel = function (data, startBalance) {
        var debtIncrease = data.debitAccountId === 20
            ? data.document.documentExchangeAmount
            : 0;
        var debtDecrease = data.creditAccountId === 20
            ? data.document.documentExchangeAmount
            : 0;
        return {
            createdDate: __WEBPACK_IMPORTED_MODULE_3__helpers_datetime_convert_helper__["a" /* default */].fromTimestampToDtStr(data.document.createdDate),
            debtDecrease: debtDecrease,
            debtIncrease: debtIncrease,
            documentDate: __WEBPACK_IMPORTED_MODULE_3__helpers_datetime_convert_helper__["a" /* default */].fromTimestampToDtStr(data.document.documentDate),
            documentDesc: data.document.documentDesc,
            documentNo: data.document.documentNo,
            remainingCredits: startBalance - debtIncrease + debtDecrease
        };
    };
    WindowService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2____["c" /* ApiService */],
            __WEBPACK_IMPORTED_MODULE_2____["n" /* SessionService */]])
    ], WindowService);
    return WindowService;
}());



/***/ }),

/***/ "../../../../../src/app/shared/shared.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular_datatables__ = __webpack_require__("../../../../angular-datatables/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng_pick_datetime__ = __webpack_require__("../../../../ng-pick-datetime/picker.module.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng_pick_datetime___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng_pick_datetime__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_shared_components_module__ = __webpack_require__("../../../../../src/app/shared/components/shared-components.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pipes_shared_pipes_module__ = __webpack_require__("../../../../../src/app/shared/pipes/shared-pipes.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__modules_comments_comments_module__ = __webpack_require__("../../../../../src/app/shared/modules/comments/comments.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ngx_translate_core__ = __webpack_require__("../../../../@ngx-translate/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_primeng_primeng__ = __webpack_require__("../../../../primeng/primeng.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_primeng_primeng___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_primeng_primeng__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_index__ = __webpack_require__("../../../../../src/app/shared/services/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__directives_shared_directives_module__ = __webpack_require__("../../../../../src/app/shared/directives/shared-directives.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ng_bootstrap_ng_bootstrap_tooltip_tooltip_module__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/tooltip/tooltip.module.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_angular2_moment__ = __webpack_require__("../../../../angular2-moment/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_angular2_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_angular2_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__modules_activities_activities_module__ = __webpack_require__("../../../../../src/app/shared/modules/activities/activities.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__modules_audits_audits_module__ = __webpack_require__("../../../../../src/app/shared/modules/audits/audits.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__modules_form_input_form_input_module__ = __webpack_require__("../../../../../src/app/shared/modules/form-input/form-input.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__modules_audits_list_audits_list_module__ = __webpack_require__("../../../../../src/app/shared/modules/audits-list/audits-list.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__progress_kendo_angular_buttons__ = __webpack_require__("../../../../@progress/kendo-angular-buttons/dist/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__progress_kendo_angular_dialog__ = __webpack_require__("../../../../@progress/kendo-angular-dialog/dist/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__progress_kendo_angular_grid__ = __webpack_require__("../../../../@progress/kendo-angular-grid/dist/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__services_window_service__ = __webpack_require__("../../../../../src/app/shared/services/window.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__services_feng_shuis_infor_service__ = __webpack_require__("../../../../../src/app/shared/services/feng-shuis-infor.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__components_email_editor_email_editor_component__ = __webpack_require__("../../../../../src/app/shared/components/email-editor/email-editor.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__services_email_service__ = __webpack_require__("../../../../../src/app/shared/services/email.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__modules_image_cropper_image_cropper_module__ = __webpack_require__("../../../../../src/app/shared/modules/image-cropper/image-cropper.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28_ngx_bootstrap__ = __webpack_require__("../../../../ngx-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29_ngx_bootstrap_dropdown__ = __webpack_require__("../../../../ngx-bootstrap/dropdown/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30_ng_multiselect_dropdown__ = __webpack_require__("../../../../ng-multiselect-dropdown/fesm5/ng-multiselect-dropdown.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31_ngx_loading__ = __webpack_require__("../../../../ngx-loading/ngx-loading/ngx-loading.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__services_permission_service__ = __webpack_require__("../../../../../src/app/shared/services/permission.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











// tslint:disable-next-line:max-line-length























var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_19__modules_audits_list_audits_list_module__["a" /* AuditsListModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_17__angular_router__["RouterModule"],
                __WEBPACK_IMPORTED_MODULE_10__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_10__angular_forms__["ReactiveFormsModule"],
                __WEBPACK_IMPORTED_MODULE_7__ngx_translate_core__["b" /* TranslateModule */],
                __WEBPACK_IMPORTED_MODULE_14_angular2_moment__["MomentModule"],
                __WEBPACK_IMPORTED_MODULE_8__ng_bootstrap_ng_bootstrap__["c" /* NgbCarouselModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_8__ng_bootstrap_ng_bootstrap__["e" /* NgbDropdownModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_8__ng_bootstrap_ng_bootstrap__["b" /* NgbAlertModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_8__ng_bootstrap_ng_bootstrap__["d" /* NgbCollapseModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_8__ng_bootstrap_ng_bootstrap__["g" /* NgbModalModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_13__ng_bootstrap_ng_bootstrap_tooltip_tooltip_module__["a" /* NgbTooltipModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_30_ng_multiselect_dropdown__["a" /* NgMultiSelectDropDownModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_31_ngx_loading__["a" /* NgxLoadingModule */].forRoot({
                    animationType: __WEBPACK_IMPORTED_MODULE_31_ngx_loading__["b" /* ngxLoadingAnimationTypes */].threeBounce,
                    backdropBackgroundColour: 'rgba(0,0,0,0)',
                    backdropBorderRadius: '3px',
                    primaryColour: '#00a0e3',
                    secondaryColour: '#00a0e3',
                    tertiaryColour: '#00a0e3'
                }),
                __WEBPACK_IMPORTED_MODULE_9_primeng_primeng__["AutoCompleteModule"],
                __WEBPACK_IMPORTED_MODULE_9_primeng_primeng__["DropdownModule"],
                __WEBPACK_IMPORTED_MODULE_0_angular_datatables__["b" /* DataTablesModule */],
                __WEBPACK_IMPORTED_MODULE_3_ng_pick_datetime__["DateTimePickerModule"],
                __WEBPACK_IMPORTED_MODULE_6__modules_comments_comments_module__["a" /* CommentsModule */],
                __WEBPACK_IMPORTED_MODULE_15__modules_activities_activities_module__["a" /* ActivitiesModule */],
                __WEBPACK_IMPORTED_MODULE_16__modules_audits_audits_module__["a" /* AuditsModule */],
                __WEBPACK_IMPORTED_MODULE_18__modules_form_input_form_input_module__["a" /* FormInputModule */],
                __WEBPACK_IMPORTED_MODULE_4__components_shared_components_module__["a" /* SharedComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_5__pipes_shared_pipes_module__["a" /* SharedPipesModule */],
                __WEBPACK_IMPORTED_MODULE_12__directives_shared_directives_module__["a" /* SharedDirectivesModule */],
                __WEBPACK_IMPORTED_MODULE_20__progress_kendo_angular_buttons__["b" /* ButtonsModule */],
                __WEBPACK_IMPORTED_MODULE_21__progress_kendo_angular_dialog__["e" /* DialogsModule */],
                __WEBPACK_IMPORTED_MODULE_22__progress_kendo_angular_grid__["a" /* GridModule */],
                __WEBPACK_IMPORTED_MODULE_21__progress_kendo_angular_dialog__["b" /* DialogModule */],
                __WEBPACK_IMPORTED_MODULE_27__modules_image_cropper_image_cropper_module__["a" /* ImageCropperModule */],
                __WEBPACK_IMPORTED_MODULE_28_ngx_bootstrap__["c" /* ModalModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_29_ngx_bootstrap_dropdown__["a" /* BsDropdownModule */].forRoot(),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_17__angular_router__["RouterModule"],
                __WEBPACK_IMPORTED_MODULE_10__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_10__angular_forms__["ReactiveFormsModule"],
                __WEBPACK_IMPORTED_MODULE_14_angular2_moment__["MomentModule"],
                __WEBPACK_IMPORTED_MODULE_8__ng_bootstrap_ng_bootstrap__["c" /* NgbCarouselModule */],
                __WEBPACK_IMPORTED_MODULE_8__ng_bootstrap_ng_bootstrap__["e" /* NgbDropdownModule */],
                __WEBPACK_IMPORTED_MODULE_30_ng_multiselect_dropdown__["a" /* NgMultiSelectDropDownModule */],
                __WEBPACK_IMPORTED_MODULE_8__ng_bootstrap_ng_bootstrap__["b" /* NgbAlertModule */],
                __WEBPACK_IMPORTED_MODULE_8__ng_bootstrap_ng_bootstrap__["d" /* NgbCollapseModule */],
                __WEBPACK_IMPORTED_MODULE_8__ng_bootstrap_ng_bootstrap__["g" /* NgbModalModule */],
                __WEBPACK_IMPORTED_MODULE_13__ng_bootstrap_ng_bootstrap_tooltip_tooltip_module__["a" /* NgbTooltipModule */],
                __WEBPACK_IMPORTED_MODULE_7__ngx_translate_core__["b" /* TranslateModule */],
                __WEBPACK_IMPORTED_MODULE_0_angular_datatables__["b" /* DataTablesModule */],
                __WEBPACK_IMPORTED_MODULE_9_primeng_primeng__["AutoCompleteModule"],
                __WEBPACK_IMPORTED_MODULE_9_primeng_primeng__["DropdownModule"],
                __WEBPACK_IMPORTED_MODULE_3_ng_pick_datetime__["DateTimePickerModule"],
                __WEBPACK_IMPORTED_MODULE_6__modules_comments_comments_module__["a" /* CommentsModule */],
                __WEBPACK_IMPORTED_MODULE_15__modules_activities_activities_module__["a" /* ActivitiesModule */],
                __WEBPACK_IMPORTED_MODULE_16__modules_audits_audits_module__["a" /* AuditsModule */],
                __WEBPACK_IMPORTED_MODULE_18__modules_form_input_form_input_module__["a" /* FormInputModule */],
                __WEBPACK_IMPORTED_MODULE_4__components_shared_components_module__["a" /* SharedComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_5__pipes_shared_pipes_module__["a" /* SharedPipesModule */],
                __WEBPACK_IMPORTED_MODULE_12__directives_shared_directives_module__["a" /* SharedDirectivesModule */],
                __WEBPACK_IMPORTED_MODULE_20__progress_kendo_angular_buttons__["b" /* ButtonsModule */],
                __WEBPACK_IMPORTED_MODULE_21__progress_kendo_angular_dialog__["e" /* DialogsModule */],
                __WEBPACK_IMPORTED_MODULE_22__progress_kendo_angular_grid__["a" /* GridModule */],
                __WEBPACK_IMPORTED_MODULE_21__progress_kendo_angular_dialog__["b" /* DialogModule */],
                __WEBPACK_IMPORTED_MODULE_27__modules_image_cropper_image_cropper_module__["a" /* ImageCropperModule */],
                __WEBPACK_IMPORTED_MODULE_28_ngx_bootstrap__["c" /* ModalModule */],
                __WEBPACK_IMPORTED_MODULE_29_ngx_bootstrap_dropdown__["a" /* BsDropdownModule */],
                __WEBPACK_IMPORTED_MODULE_31_ngx_loading__["a" /* NgxLoadingModule */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_7__ngx_translate_core__["c" /* TranslateService */],
                __WEBPACK_IMPORTED_MODULE_11__services_index__["e" /* AuthGuard */],
                __WEBPACK_IMPORTED_MODULE_11__services_index__["c" /* ApiService */],
                __WEBPACK_IMPORTED_MODULE_11__services_index__["j" /* DataService */],
                __WEBPACK_IMPORTED_MODULE_11__services_index__["q" /* UserService */],
                __WEBPACK_IMPORTED_MODULE_23__services_window_service__["a" /* WindowService */],
                __WEBPACK_IMPORTED_MODULE_24__services_feng_shuis_infor_service__["a" /* FengShuisInforService */],
                __WEBPACK_IMPORTED_MODULE_21__progress_kendo_angular_dialog__["d" /* DialogService */],
                __WEBPACK_IMPORTED_MODULE_26__services_email_service__["a" /* EmailService */],
                __WEBPACK_IMPORTED_MODULE_32__services_permission_service__["a" /* PermissionService */]
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_25__components_email_editor_email_editor_component__["a" /* EmailEditorComponent */]
            ]
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
    // api_endpoint: 'http://115.79.35.119:6868/mhb-api-demo/',
    api_endpoint: 'http://115.79.35.119:6868/mhb-crm/',
    // api_endpoint: 'http://113.161.36.95:8002/mhb-crm/',
    // api_endpoint: 'http://113.161.36.95:8002/mhb-crm-live/',
    // api_endpoint: 'http://localhost:8080/mhb-crm/',
    api_worldfone: 'https://apps.worldfone.vn/externalcrm/'
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ "../../../../moment/locale recursive ^\\.\\/.*$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "../../../../moment/locale/af.js",
	"./af.js": "../../../../moment/locale/af.js",
	"./ar": "../../../../moment/locale/ar.js",
	"./ar-dz": "../../../../moment/locale/ar-dz.js",
	"./ar-dz.js": "../../../../moment/locale/ar-dz.js",
	"./ar-kw": "../../../../moment/locale/ar-kw.js",
	"./ar-kw.js": "../../../../moment/locale/ar-kw.js",
	"./ar-ly": "../../../../moment/locale/ar-ly.js",
	"./ar-ly.js": "../../../../moment/locale/ar-ly.js",
	"./ar-ma": "../../../../moment/locale/ar-ma.js",
	"./ar-ma.js": "../../../../moment/locale/ar-ma.js",
	"./ar-sa": "../../../../moment/locale/ar-sa.js",
	"./ar-sa.js": "../../../../moment/locale/ar-sa.js",
	"./ar-tn": "../../../../moment/locale/ar-tn.js",
	"./ar-tn.js": "../../../../moment/locale/ar-tn.js",
	"./ar.js": "../../../../moment/locale/ar.js",
	"./az": "../../../../moment/locale/az.js",
	"./az.js": "../../../../moment/locale/az.js",
	"./be": "../../../../moment/locale/be.js",
	"./be.js": "../../../../moment/locale/be.js",
	"./bg": "../../../../moment/locale/bg.js",
	"./bg.js": "../../../../moment/locale/bg.js",
	"./bn": "../../../../moment/locale/bn.js",
	"./bn.js": "../../../../moment/locale/bn.js",
	"./bo": "../../../../moment/locale/bo.js",
	"./bo.js": "../../../../moment/locale/bo.js",
	"./br": "../../../../moment/locale/br.js",
	"./br.js": "../../../../moment/locale/br.js",
	"./bs": "../../../../moment/locale/bs.js",
	"./bs.js": "../../../../moment/locale/bs.js",
	"./ca": "../../../../moment/locale/ca.js",
	"./ca.js": "../../../../moment/locale/ca.js",
	"./cs": "../../../../moment/locale/cs.js",
	"./cs.js": "../../../../moment/locale/cs.js",
	"./cv": "../../../../moment/locale/cv.js",
	"./cv.js": "../../../../moment/locale/cv.js",
	"./cy": "../../../../moment/locale/cy.js",
	"./cy.js": "../../../../moment/locale/cy.js",
	"./da": "../../../../moment/locale/da.js",
	"./da.js": "../../../../moment/locale/da.js",
	"./de": "../../../../moment/locale/de.js",
	"./de-at": "../../../../moment/locale/de-at.js",
	"./de-at.js": "../../../../moment/locale/de-at.js",
	"./de-ch": "../../../../moment/locale/de-ch.js",
	"./de-ch.js": "../../../../moment/locale/de-ch.js",
	"./de.js": "../../../../moment/locale/de.js",
	"./dv": "../../../../moment/locale/dv.js",
	"./dv.js": "../../../../moment/locale/dv.js",
	"./el": "../../../../moment/locale/el.js",
	"./el.js": "../../../../moment/locale/el.js",
	"./en-au": "../../../../moment/locale/en-au.js",
	"./en-au.js": "../../../../moment/locale/en-au.js",
	"./en-ca": "../../../../moment/locale/en-ca.js",
	"./en-ca.js": "../../../../moment/locale/en-ca.js",
	"./en-gb": "../../../../moment/locale/en-gb.js",
	"./en-gb.js": "../../../../moment/locale/en-gb.js",
	"./en-ie": "../../../../moment/locale/en-ie.js",
	"./en-ie.js": "../../../../moment/locale/en-ie.js",
	"./en-nz": "../../../../moment/locale/en-nz.js",
	"./en-nz.js": "../../../../moment/locale/en-nz.js",
	"./eo": "../../../../moment/locale/eo.js",
	"./eo.js": "../../../../moment/locale/eo.js",
	"./es": "../../../../moment/locale/es.js",
	"./es-do": "../../../../moment/locale/es-do.js",
	"./es-do.js": "../../../../moment/locale/es-do.js",
	"./es.js": "../../../../moment/locale/es.js",
	"./et": "../../../../moment/locale/et.js",
	"./et.js": "../../../../moment/locale/et.js",
	"./eu": "../../../../moment/locale/eu.js",
	"./eu.js": "../../../../moment/locale/eu.js",
	"./fa": "../../../../moment/locale/fa.js",
	"./fa.js": "../../../../moment/locale/fa.js",
	"./fi": "../../../../moment/locale/fi.js",
	"./fi.js": "../../../../moment/locale/fi.js",
	"./fo": "../../../../moment/locale/fo.js",
	"./fo.js": "../../../../moment/locale/fo.js",
	"./fr": "../../../../moment/locale/fr.js",
	"./fr-ca": "../../../../moment/locale/fr-ca.js",
	"./fr-ca.js": "../../../../moment/locale/fr-ca.js",
	"./fr-ch": "../../../../moment/locale/fr-ch.js",
	"./fr-ch.js": "../../../../moment/locale/fr-ch.js",
	"./fr.js": "../../../../moment/locale/fr.js",
	"./fy": "../../../../moment/locale/fy.js",
	"./fy.js": "../../../../moment/locale/fy.js",
	"./gd": "../../../../moment/locale/gd.js",
	"./gd.js": "../../../../moment/locale/gd.js",
	"./gl": "../../../../moment/locale/gl.js",
	"./gl.js": "../../../../moment/locale/gl.js",
	"./gom-latn": "../../../../moment/locale/gom-latn.js",
	"./gom-latn.js": "../../../../moment/locale/gom-latn.js",
	"./he": "../../../../moment/locale/he.js",
	"./he.js": "../../../../moment/locale/he.js",
	"./hi": "../../../../moment/locale/hi.js",
	"./hi.js": "../../../../moment/locale/hi.js",
	"./hr": "../../../../moment/locale/hr.js",
	"./hr.js": "../../../../moment/locale/hr.js",
	"./hu": "../../../../moment/locale/hu.js",
	"./hu.js": "../../../../moment/locale/hu.js",
	"./hy-am": "../../../../moment/locale/hy-am.js",
	"./hy-am.js": "../../../../moment/locale/hy-am.js",
	"./id": "../../../../moment/locale/id.js",
	"./id.js": "../../../../moment/locale/id.js",
	"./is": "../../../../moment/locale/is.js",
	"./is.js": "../../../../moment/locale/is.js",
	"./it": "../../../../moment/locale/it.js",
	"./it.js": "../../../../moment/locale/it.js",
	"./ja": "../../../../moment/locale/ja.js",
	"./ja.js": "../../../../moment/locale/ja.js",
	"./jv": "../../../../moment/locale/jv.js",
	"./jv.js": "../../../../moment/locale/jv.js",
	"./ka": "../../../../moment/locale/ka.js",
	"./ka.js": "../../../../moment/locale/ka.js",
	"./kk": "../../../../moment/locale/kk.js",
	"./kk.js": "../../../../moment/locale/kk.js",
	"./km": "../../../../moment/locale/km.js",
	"./km.js": "../../../../moment/locale/km.js",
	"./kn": "../../../../moment/locale/kn.js",
	"./kn.js": "../../../../moment/locale/kn.js",
	"./ko": "../../../../moment/locale/ko.js",
	"./ko.js": "../../../../moment/locale/ko.js",
	"./ky": "../../../../moment/locale/ky.js",
	"./ky.js": "../../../../moment/locale/ky.js",
	"./lb": "../../../../moment/locale/lb.js",
	"./lb.js": "../../../../moment/locale/lb.js",
	"./lo": "../../../../moment/locale/lo.js",
	"./lo.js": "../../../../moment/locale/lo.js",
	"./lt": "../../../../moment/locale/lt.js",
	"./lt.js": "../../../../moment/locale/lt.js",
	"./lv": "../../../../moment/locale/lv.js",
	"./lv.js": "../../../../moment/locale/lv.js",
	"./me": "../../../../moment/locale/me.js",
	"./me.js": "../../../../moment/locale/me.js",
	"./mi": "../../../../moment/locale/mi.js",
	"./mi.js": "../../../../moment/locale/mi.js",
	"./mk": "../../../../moment/locale/mk.js",
	"./mk.js": "../../../../moment/locale/mk.js",
	"./ml": "../../../../moment/locale/ml.js",
	"./ml.js": "../../../../moment/locale/ml.js",
	"./mr": "../../../../moment/locale/mr.js",
	"./mr.js": "../../../../moment/locale/mr.js",
	"./ms": "../../../../moment/locale/ms.js",
	"./ms-my": "../../../../moment/locale/ms-my.js",
	"./ms-my.js": "../../../../moment/locale/ms-my.js",
	"./ms.js": "../../../../moment/locale/ms.js",
	"./my": "../../../../moment/locale/my.js",
	"./my.js": "../../../../moment/locale/my.js",
	"./nb": "../../../../moment/locale/nb.js",
	"./nb.js": "../../../../moment/locale/nb.js",
	"./ne": "../../../../moment/locale/ne.js",
	"./ne.js": "../../../../moment/locale/ne.js",
	"./nl": "../../../../moment/locale/nl.js",
	"./nl-be": "../../../../moment/locale/nl-be.js",
	"./nl-be.js": "../../../../moment/locale/nl-be.js",
	"./nl.js": "../../../../moment/locale/nl.js",
	"./nn": "../../../../moment/locale/nn.js",
	"./nn.js": "../../../../moment/locale/nn.js",
	"./pa-in": "../../../../moment/locale/pa-in.js",
	"./pa-in.js": "../../../../moment/locale/pa-in.js",
	"./pl": "../../../../moment/locale/pl.js",
	"./pl.js": "../../../../moment/locale/pl.js",
	"./pt": "../../../../moment/locale/pt.js",
	"./pt-br": "../../../../moment/locale/pt-br.js",
	"./pt-br.js": "../../../../moment/locale/pt-br.js",
	"./pt.js": "../../../../moment/locale/pt.js",
	"./ro": "../../../../moment/locale/ro.js",
	"./ro.js": "../../../../moment/locale/ro.js",
	"./ru": "../../../../moment/locale/ru.js",
	"./ru.js": "../../../../moment/locale/ru.js",
	"./sd": "../../../../moment/locale/sd.js",
	"./sd.js": "../../../../moment/locale/sd.js",
	"./se": "../../../../moment/locale/se.js",
	"./se.js": "../../../../moment/locale/se.js",
	"./si": "../../../../moment/locale/si.js",
	"./si.js": "../../../../moment/locale/si.js",
	"./sk": "../../../../moment/locale/sk.js",
	"./sk.js": "../../../../moment/locale/sk.js",
	"./sl": "../../../../moment/locale/sl.js",
	"./sl.js": "../../../../moment/locale/sl.js",
	"./sq": "../../../../moment/locale/sq.js",
	"./sq.js": "../../../../moment/locale/sq.js",
	"./sr": "../../../../moment/locale/sr.js",
	"./sr-cyrl": "../../../../moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "../../../../moment/locale/sr-cyrl.js",
	"./sr.js": "../../../../moment/locale/sr.js",
	"./ss": "../../../../moment/locale/ss.js",
	"./ss.js": "../../../../moment/locale/ss.js",
	"./sv": "../../../../moment/locale/sv.js",
	"./sv.js": "../../../../moment/locale/sv.js",
	"./sw": "../../../../moment/locale/sw.js",
	"./sw.js": "../../../../moment/locale/sw.js",
	"./ta": "../../../../moment/locale/ta.js",
	"./ta.js": "../../../../moment/locale/ta.js",
	"./te": "../../../../moment/locale/te.js",
	"./te.js": "../../../../moment/locale/te.js",
	"./tet": "../../../../moment/locale/tet.js",
	"./tet.js": "../../../../moment/locale/tet.js",
	"./th": "../../../../moment/locale/th.js",
	"./th.js": "../../../../moment/locale/th.js",
	"./tl-ph": "../../../../moment/locale/tl-ph.js",
	"./tl-ph.js": "../../../../moment/locale/tl-ph.js",
	"./tlh": "../../../../moment/locale/tlh.js",
	"./tlh.js": "../../../../moment/locale/tlh.js",
	"./tr": "../../../../moment/locale/tr.js",
	"./tr.js": "../../../../moment/locale/tr.js",
	"./tzl": "../../../../moment/locale/tzl.js",
	"./tzl.js": "../../../../moment/locale/tzl.js",
	"./tzm": "../../../../moment/locale/tzm.js",
	"./tzm-latn": "../../../../moment/locale/tzm-latn.js",
	"./tzm-latn.js": "../../../../moment/locale/tzm-latn.js",
	"./tzm.js": "../../../../moment/locale/tzm.js",
	"./uk": "../../../../moment/locale/uk.js",
	"./uk.js": "../../../../moment/locale/uk.js",
	"./ur": "../../../../moment/locale/ur.js",
	"./ur.js": "../../../../moment/locale/ur.js",
	"./uz": "../../../../moment/locale/uz.js",
	"./uz-latn": "../../../../moment/locale/uz-latn.js",
	"./uz-latn.js": "../../../../moment/locale/uz-latn.js",
	"./uz.js": "../../../../moment/locale/uz.js",
	"./vi": "../../../../moment/locale/vi.js",
	"./vi.js": "../../../../moment/locale/vi.js",
	"./x-pseudo": "../../../../moment/locale/x-pseudo.js",
	"./x-pseudo.js": "../../../../moment/locale/x-pseudo.js",
	"./yo": "../../../../moment/locale/yo.js",
	"./yo.js": "../../../../moment/locale/yo.js",
	"./zh-cn": "../../../../moment/locale/zh-cn.js",
	"./zh-cn.js": "../../../../moment/locale/zh-cn.js",
	"./zh-hk": "../../../../moment/locale/zh-hk.js",
	"./zh-hk.js": "../../../../moment/locale/zh-hk.js",
	"./zh-tw": "../../../../moment/locale/zh-tw.js",
	"./zh-tw.js": "../../../../moment/locale/zh-tw.js"
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "../../../../moment/locale recursive ^\\.\\/.*$";

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map