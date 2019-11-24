webpackJsonp(["branch-selection.module"],{

/***/ "../../../../../src/app/branch-selection/branch-selection-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BranchSelectionRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__branch_selection_component__ = __webpack_require__("../../../../../src/app/branch-selection/branch-selection.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '', component: __WEBPACK_IMPORTED_MODULE_2__branch_selection_component__["a" /* BranchSelectionComponent */]
    }
];
var BranchSelectionRoutingModule = /** @class */ (function () {
    function BranchSelectionRoutingModule() {
    }
    BranchSelectionRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"]]
        })
    ], BranchSelectionRoutingModule);
    return BranchSelectionRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/branch-selection/branch-selection.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg fixed-top\">\n    <a class=\"navbar-brand\" href=\"#\">BYS CRM</a>\n    <button class=\"navbar-toggler\" type=\"button\">\n        <!-- <span class=\"navbar-toggler-icon\"></span> -->\n        <i class=\"fa fa-bars text-muted\" aria-hidden=\"true\"></i>\n    </button>\n    <div class=\"collapse navbar-collapse\">\n\n        <ul class=\"navbar-nav ml-auto\">\n            <li class=\"nav-item dropdown\" ngbDropdown>\n                <a class=\"navbar-brand\" href=\"javascript:void(0)\" class=\"nav-link text-white\" ngbDropdownToggle>\n                    <img src=\"/assets/images/no-avatar.png\" width=\"30\" height=\"30\" class=\"d-inline-block\" alt=\"\">\n                    <span>{{userInfo && userInfo.fullName}}</span>\n                    <b class=\"caret\"></b>\n                </a>\n                <div class=\"dropdown-menu dropdown-menu-right\">\n                    <!-- <a class=\"dropdown-item\" [routerLink]=\"['/user']\">\n                        <i class=\"fa fa-user-circle\"></i>&nbsp; Thông tin người dùng\n                    </a>\n                    <div class=\"dropdown-divider\"></div> -->\n                    <!-- <a class=\"dropdown-item\" (click)=\"openChangePasswordModal()\">\n                        <i class=\"fa fa-key\"></i> &nbsp;Thay đổi mật khẩu\n                    </a> -->\n                    <!-- <div class=\"dropdown-divider\"></div> -->\n                    <a class=\"dropdown-item\" [routerLink]=\"['/login']\" (click)=\"onLoggedout()\">\n                        <i class=\"fa fa-fw fa-power-off\"></i>&nbsp; Đăng xuất\n                    </a>\n                </div>\n\n            </li>\n\n        </ul>\n    </div>\n</nav>\n<div class=\"login-page\" [@routerTransition]>\n    <div class=\"row justify-content-md-center align-middle pt-5\">\n        <div class=\"col-md-9 col-lg-7\">\n\n            <h2 class=\"pb-5 text-uppercase\">Chọn chi nhánh muốn quản lý</h2>\n            <div class=\"row \">\n                <!-- <div class=\"col-md-4 p-2\">\n                    <div class=\"branch-item all\" [routerLink]='[\"/dashboard\"]'>\n                        <i class=\"fa fa-home\" aria-hidden=\"true\"></i>\n                        <div class=\"branch-name\">\n                            <span class=\"mt-2\">Tất cả</span>\n                        </div>\n\n                    </div>\n\n                </div> -->\n\n                <div class=\"col-md-4 p-2\" *ngFor=\"let item of branches | async\">\n                    <div class=\"branch-item\" [routerLink]='[\"/dashboard\"]' (click)=\"onClick(item)\">\n                        <i class=\"fa fa-home\" aria-hidden=\"true\"></i>\n                        <div class=\"branch-name\">\n                            <span class=\"mt-2\">{{item.text}}</span>\n                        </div>\n                    </div>\n                </div>\n            </div>\n\n\n        </div>\n\n\n    </div>\n</div>\n\n<app-footer-copyright></app-footer-copyright>\n"

/***/ }),

/***/ "../../../../../src/app/branch-selection/branch-selection.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".navbar {\n  background-color: #17a2b8;\n  color: #fff; }\n  .navbar .navbar-brand {\n    color: #fff;\n    width: 186px;\n    font-size: 200%; }\n  .navbar .nav-item > a {\n    color: #c3c3c3; }\n    .navbar .nav-item > a:hover {\n      color: #fff; }\n  .navbar .router-link-active {\n    color: #fff !important; }\n  .navbar .notification .dropdown-menu {\n    width: 400px; }\n  .navbar .notification .main-badge {\n    position: absolute;\n    top: 0px;\n    border-radius: 15px;\n    right: 10px;\n    line-height: inherit; }\n  .navbar .notification .last {\n    white-space: initial; }\n\n:host {\n  display: block; }\n\n.login-page {\n  position: absolute;\n  top: 65px;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  overflow: auto;\n  background: lightgray;\n  text-align: center;\n  color: #000;\n  padding: 3em; }\n  .login-page .col-lg-4 {\n    padding: 0; }\n  .login-page h1 {\n    font-weight: 700;\n    margin-top: 20px;\n    margin-bottom: 10px;\n    font-size: 50px;\n    color: #28b2c8; }\n    .login-page h1 small {\n      color: rgba(255, 255, 255, 0.7); }\n\n.branch-item {\n  border: 7px solid #b0e2e9;\n  border-radius: 15px;\n  padding: 15px;\n  background-color: #fff;\n  display: block; }\n  .branch-item .fa {\n    font-size: 700%;\n    color: #fd771e; }\n  .branch-item.all .fa {\n    color: #13a1bb; }\n\n.branch-name {\n  min-height: 40px;\n  font-size: 120%; }\n\n.footer {\n  position: absolute;\n  bottom: 10px;\n  left: 0;\n  right: 0;\n  margin-left: auto;\n  margin-right: auto; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/branch-selection/branch-selection.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BranchSelectionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__router_animations__ = __webpack_require__("../../../../../src/app/router.animations.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services__ = __webpack_require__("../../../../../src/app/shared/services/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BranchSelectionComponent = /** @class */ (function () {
    function BranchSelectionComponent(dataService, sessionService) {
        this.dataService = dataService;
        this.sessionService = sessionService;
    }
    BranchSelectionComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.branches = this.dataService.getBranches();
        this.sessionService.getUserInfo().subscribe(function (result) { return _this.userInfo = result; });
        this.userInfo = this.sessionService.userInfo;
    };
    BranchSelectionComponent.prototype.onClick = function (item) {
        this.sessionService.branchId = item.id;
    };
    BranchSelectionComponent.prototype.onLoggedout = function () {
        this.sessionService.destroySession();
    };
    BranchSelectionComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-branch-selection',
            template: __webpack_require__("../../../../../src/app/branch-selection/branch-selection.component.html"),
            styles: [__webpack_require__("../../../../../src/app/branch-selection/branch-selection.component.scss")],
            animations: [Object(__WEBPACK_IMPORTED_MODULE_1__router_animations__["a" /* routerTransition */])()]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__shared_services__["j" /* DataService */],
            __WEBPACK_IMPORTED_MODULE_2__shared_services__["n" /* SessionService */]])
    ], BranchSelectionComponent);
    return BranchSelectionComponent;
}());



/***/ }),

/***/ "../../../../../src/app/branch-selection/branch-selection.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BranchSelectionModule", function() { return BranchSelectionModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__branch_selection_routing_module__ = __webpack_require__("../../../../../src/app/branch-selection/branch-selection-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__branch_selection_component__ = __webpack_require__("../../../../../src/app/branch-selection/branch-selection.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var BranchSelectionModule = /** @class */ (function () {
    function BranchSelectionModule() {
    }
    BranchSelectionModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_2__branch_selection_routing_module__["a" /* BranchSelectionRoutingModule */],
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__branch_selection_component__["a" /* BranchSelectionComponent */],
            ]
        })
    ], BranchSelectionModule);
    return BranchSelectionModule;
}());



/***/ })

});
//# sourceMappingURL=branch-selection.module.chunk.js.map