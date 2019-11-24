webpackJsonp(["login.module"],{

/***/ "../../../../../src/app/login/login-form/login-form.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"login-page\" [@routerTransition]>\n    <div class=\"row justify-content-md-center\">\n        <div class=\"col-md-5 col-lg-4 col-sm-7 mt-5\">\n<!-- \n            <h1 class=\"pb-3\">BYS CRM</h1> -->\n            <form role=\"form\" [formGroup]=\"authForm\" (ngSubmit)=\"submitForm()\">\n                    <img src=\"assets/images/favicon.png\" class=\"img-logo\">\n                <app-list-errors [errorCode]=\"apiErrorCode\"></app-list-errors>\n                <div class=\"form-content\">\n                    <div class=\"form-group text-left\">\n                        <label for=\"name\">Tài khoản</label>\n                        <input type=\"text\" class=\"form-control\" name=\"email\" formControlName=\"username\" [class.is-invalid]=\"formErrors.username\">\n                        <div class=\"invalid-feedback\" *ngIf=\"formErrors.username\">\n                            {{formErrors.username}}\n                        </div>\n                    </div>\n\n                    <div class=\"form-group text-left\">\n                        <label for=\"name\">Mật khẩu</label>\n                        <input type=\"password\" class=\"form-control\" name=\"password\" formControlName=\"password\" [class.is-invalid]=\"formErrors.password\">\n                        <div class=\"invalid-feedback\" *ngIf=\"formErrors.password\">\n                            {{formErrors.password}}\n                        </div>\n                    </div>\n                </div>\n\n                <button type=\"submit\" class=\"btn btn-primary w-100 mt-2 text-uppercase\">Đăng nhập</button>\n\n                <a class=\"btn  mt-2\" [routerLink]=\"['/login/forgot-password']\" >Quên mật khẩu ?</a>\n\n            </form>\n            \n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/login/login-form/login-form.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  display: block; }\n\n.login-page {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  overflow: auto;\n  background: lightgray;\n  text-align: center;\n  color: #000;\n  padding: 3em; }\n  .login-page .col-lg-4 {\n    padding: 0; }\n  .login-page .input-lg {\n    height: 46px;\n    padding: 10px 16px;\n    font-size: 18px;\n    line-height: 1.3333333;\n    border-radius: 0; }\n  .login-page .input-underline {\n    background: 0 0;\n    border: none;\n    box-shadow: none;\n    border-bottom: 2px solid rgba(255, 255, 255, 0.5);\n    color: #fff;\n    border-radius: 0; }\n  .login-page .input-underline:focus {\n    border-bottom: 2px solid #fff;\n    box-shadow: none; }\n  .login-page .rounded-btn {\n    border-radius: 50px;\n    color: rgba(255, 255, 255, 0.8);\n    background: lightgray;\n    border: 2px solid rgba(255, 255, 255, 0.8);\n    font-size: 18px;\n    line-height: 40px;\n    padding: 0 25px; }\n  .login-page .rounded-btn:hover,\n  .login-page .rounded-btn:focus,\n  .login-page .rounded-btn:active,\n  .login-page .rounded-btn:visited {\n    color: white;\n    border: 2px solid white;\n    outline: none; }\n  .login-page h1 {\n    font-weight: 700;\n    margin-top: 20px;\n    margin-bottom: 10px;\n    font-size: 50px;\n    color: #28b2c8; }\n    .login-page h1 small {\n      color: rgba(255, 255, 255, 0.7); }\n  .login-page .form-group {\n    padding: 8px 0; }\n    .login-page .form-group input::-webkit-input-placeholder {\n      color: rgba(255, 255, 255, 0.6) !important; }\n    .login-page .form-group input:-moz-placeholder {\n      /* Firefox 18- */\n      color: rgba(255, 255, 255, 0.6) !important; }\n    .login-page .form-group input::-moz-placeholder {\n      /* Firefox 19+ */\n      color: rgba(255, 255, 255, 0.6) !important; }\n    .login-page .form-group input:-ms-input-placeholder {\n      color: rgba(255, 255, 255, 0.6) !important; }\n  .login-page form {\n    padding: 40px 30px;\n    background-color: #fff;\n    border-radius: 5px; }\n\n.img-logo {\n  margin-bottom: -1rem;\n  margin-top: -2rem;\n  width: 80%; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login/login-form/login-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__router_animations__ = __webpack_require__("../../../../../src/app/router.animations.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_services_index__ = __webpack_require__("../../../../../src/app/shared/services/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_helpers_validation_helper__ = __webpack_require__("../../../../../src/app/shared/helpers/validation.helper.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LoginFormComponent = /** @class */ (function () {
    function LoginFormComponent(route, router, userService, dataService, sessionService, fb, userNotificationService) {
        var _this = this;
        this.route = route;
        this.router = router;
        this.userService = userService;
        this.dataService = dataService;
        this.sessionService = sessionService;
        this.fb = fb;
        this.userNotificationService = userNotificationService;
        this.formErrors = {
            username: '',
            password: '',
        };
        this.authForm = this.fb.group({
            username: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].required],
            password: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].required]
        });
        this.authForm.valueChanges
            .subscribe(function (data) { return _this.onFormValueChanged(data); });
    }
    LoginFormComponent.prototype.onFormValueChanged = function (data) {
        if (this.isSubmitted) {
            this.validateForm();
        }
    };
    LoginFormComponent.prototype.validateForm = function () {
        this.invalidMessages = __WEBPACK_IMPORTED_MODULE_5__shared_helpers_validation_helper__["a" /* default */].getInvalidMessages(this.authForm, this.formErrors);
        return this.invalidMessages.length === 0;
    };
    LoginFormComponent.prototype.submitForm = function () {
        var _this = this;
        this.isSubmitted = true;
        this.apiErrorCode = '';
        if (this.validateForm()) {
            var credentials = this.authForm.value;
            this.userService
                .attemptAuth('login', credentials.username, credentials.password)
                .subscribe(function (data) {
                _this.userNotificationService.listNoticationsReminder(0, 100)
                    .subscribe(function (result) {
                    _this.sessionService.saveNotificationList(result.items);
                });
                // this.dataService.getBranches().subscribe(branches => {
                //     if (branches && branches.length === 1) {
                //         this.sessionService.branchId = branches[0].id;
                //         this.router.navigate(['/dashboard']);
                //     } else {
                //         this.router.navigate(['/branch']);
                //     }
                // });
                _this.sessionService.branchId = 1;
                var urlReturn = _this.route.snapshot.queryParamMap.get('returnUrl');
                if (!urlReturn) {
                    return _this.router.navigate(['/dashboard']);
                }
                return _this.router.navigateByUrl("" + urlReturn);
            }, function (err) {
                _this.apiErrorCode = 'Nhập sai tên người dùng hoặc mật khẩu!';
            });
        }
    };
    LoginFormComponent.prototype.ngOnInit = function () { };
    LoginFormComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login-form',
            template: __webpack_require__("../../../../../src/app/login/login-form/login-form.component.html"),
            styles: [__webpack_require__("../../../../../src/app/login/login-form/login-form.component.scss")],
            animations: [Object(__WEBPACK_IMPORTED_MODULE_2__router_animations__["a" /* routerTransition */])()],
            providers: [__WEBPACK_IMPORTED_MODULE_3__shared_services_index__["q" /* UserService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["ActivatedRoute"],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"],
            __WEBPACK_IMPORTED_MODULE_3__shared_services_index__["q" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_3__shared_services_index__["j" /* DataService */],
            __WEBPACK_IMPORTED_MODULE_3__shared_services_index__["n" /* SessionService */],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormBuilder"],
            __WEBPACK_IMPORTED_MODULE_3__shared_services_index__["p" /* UserNotificationService */]])
    ], LoginFormComponent);
    return LoginFormComponent;
}());



/***/ }),

/***/ "../../../../../src/app/login/login-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_form_login_form_component__ = __webpack_require__("../../../../../src/app/login/login-form/login-form.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__login_component__["a" /* LoginComponent */],
        children: [
            { path: '', component: __WEBPACK_IMPORTED_MODULE_3__login_form_login_form_component__["a" /* LoginFormComponent */] },
            { path: 'forgot-password', loadChildren: './forgot-password/forgot-password.module#ForgotPasswordModule' }
        ]
    }
];
var LoginRoutingModule = /** @class */ (function () {
    function LoginRoutingModule() {
    }
    LoginRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"]]
        })
    ], LoginRoutingModule);
    return LoginRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n<app-footer-copyright></app-footer-copyright>"

/***/ }),

/***/ "../../../../../src/app/login/login.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
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

var LoginComponent = /** @class */ (function () {
    function LoginComponent() {
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login',
            template: __webpack_require__("../../../../../src/app/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/login/login.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/login/login.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginModule", function() { return LoginModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_routing_module__ = __webpack_require__("../../../../../src/app/login/login-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_form_login_form_component__ = __webpack_require__("../../../../../src/app/login/login-form/login-form.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var LoginModule = /** @class */ (function () {
    function LoginModule() {
    }
    LoginModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__login_routing_module__["a" /* LoginRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__["a" /* SharedModule */],
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_1__login_component__["a" /* LoginComponent */], __WEBPACK_IMPORTED_MODULE_4__login_form_login_form_component__["a" /* LoginFormComponent */]]
        })
    ], LoginModule);
    return LoginModule;
}());



/***/ })

});
//# sourceMappingURL=login.module.chunk.js.map