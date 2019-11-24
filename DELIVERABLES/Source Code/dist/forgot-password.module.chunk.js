webpackJsonp(["forgot-password.module"],{

/***/ "../../../../../src/app/login/forgot-password/enter-active-code/enter-active-code.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"enter-active-code-page\" [@routerTransition]>\n    <div class=\"row justify-content-md-center\">\n        <div class=\"panel\">\n            <h1 class=\"pb-3\">Mộc Hòa Bình CRM</h1>\n\n            <div class=\"form-wrapper\">\n                    <form role=\"form\" [formGroup]=\"enterActiveCodeForm\" (ngSubmit)=\"submitForm()\">\n                            <app-list-errors [errorCode]=\"apiErrorCode\"></app-list-errors>\n            \n                            <div class=\"header\">\n                                <h3 class=\"font-weight-bold\">NHẬP MÃ XÁC NHẬN</h3>\n                            </div>\n                            <div class=\"messenger\">\n                                <label>Vui lòng nhập mã xác nhận đã được gửi đến địa chỉ email\n                                    <a href=\"mailto:someone@example.com?Subject=Hello%20again\" target=\"_top\">{{ email }}</a>\n                                </label>\n                            </div>\n            \n                            <div class=\"form-group list-code mt-2\">\n                                <div class=\"row\">\n                                    <div class=\"code col-lg-2 col-md-2 col-sm-2\" [class.is-invalid-2]=\"formErrors.numberOne\">\n                                        <input autofocus maxlength=\"1\" appInputNumber class=\"form-control\" formControlName=\"numberOne\" (paste)=\"pastValue($event)\" (keyup)=\"(($event.keyCode >= 48 && $event.keyCode <= 57) || ($event.keyCode >= 96 && $event.keyCode <= 105)) && code2.select()\">\n                                    </div>\n                                    <div class=\"code col-lg-2 col-md-2 col-sm-2\" [class.is-invalid-2]=\"formErrors.numberTwo\">\n                                        <input #code2 maxlength=\"1\" appInputNumber class=\"form-control\" formControlName=\"numberTwo\" (paste)=\"pastValue($event)\" (keyup)=\"(($event.keyCode >= 48 && $event.keyCode <= 57) || ($event.keyCode >= 96 && $event.keyCode <= 105)) && code3.select()\">\n                                    </div>\n                                    <div class=\"code col-lg-2 col-md-2 col-sm-2\" [class.is-invalid-2]=\"formErrors.numberThree\">\n                                        <input #code3 maxlength=\"1\" appInputNumber class=\"form-control\" formControlName=\"numberThree\" (paste)=\"pastValue($event)\" (keyup)=\"(($event.keyCode >= 48 && $event.keyCode <= 57) || ($event.keyCode >= 96 && $event.keyCode <= 105)) && code4.select()\">\n                                    </div>\n                                    <div class=\"code col-lg-2 col-md-2 col-sm-2\" [class.is-invalid-2]=\"formErrors.numberFour\">\n                                        <input #code4 maxlength=\"1\" appInputNumber class=\"form-control\" formControlName=\"numberFour\" (paste)=\"pastValue($event)\" (keyup)=\"(($event.keyCode >= 48 && $event.keyCode <= 57) || ($event.keyCode >= 96 && $event.keyCode <= 105)) && code5.select()\">\n                                    </div>\n                                    <div class=\"code col-lg-2 col-md-2 col-sm-2\" [class.is-invalid-2]=\"formErrors.numberFive\">\n                                        <input #code5 maxlength=\"1\" appInputNumber class=\"form-control\" formControlName=\"numberFive\" (paste)=\"pastValue($event)\" (keyup)=\"(($event.keyCode >= 48 && $event.keyCode <= 57) || ($event.keyCode >= 96 && $event.keyCode <= 105)) && code6.select()\">\n                                    </div>\n                                    <div class=\"code col-lg-2 col-md-2 col-sm-2\" [class.is-invalid-2]=\"formErrors.numberSix\">\n                                        <input #code6 maxlength=\"1\" appInputNumber class=\"form-control\" formControlName=\"numberSix\" (paste)=\"pastValue($event)\" (keyup)=\"btnSubmit.focus()\">\n                                    </div>\n                                </div>\n                            </div>\n            \n                            <div class=\"footer-1 mt-3\">\n                                <a class=\"btn underline\" (click)=\"sendCodeAgain()\">Không nhận được mã xác nhận,\n                                    <span class=\"bold\"> gửi lại</span>\n                                </a>\n                            </div>\n                            <div class=\"text-warning\" *ngIf=\"isMessengerAlert\">\n                                {{ messengerAlert }}\n                            </div>\n            \n                            <button #btnSubmit type=\"submit\" class=\"btn btn-primary w-100 mt-4 text-uppercase\">TIẾP TỤC</button>\n            \n                            <div class=\"footer-2 mt-3\">\n                                <a class=\"\" [routerLink]=\"['/login']\">Trở về</a>\n                            </div>\n                        </form>\n            </div>\n\n           \n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/login/forgot-password/enter-active-code/enter-active-code.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  display: block; }\n\n.enter-active-code-page {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  overflow: auto;\n  background: lightgray;\n  text-align: center;\n  color: #000;\n  padding: 3em; }\n  .enter-active-code-page .underline {\n    text-decoration: underline;\n    color: #9c9c9c; }\n    .enter-active-code-page .underline .bold {\n      font-weight: bold; }\n  .enter-active-code-page .back {\n    color: #297ef5;\n    font-weight: bold; }\n  .enter-active-code-page .col-lg-2 {\n    padding: 0; }\n  .enter-active-code-page h1 {\n    font-weight: 700;\n    margin-top: 20px;\n    margin-bottom: 10px;\n    font-size: 50px;\n    color: #28b2c8; }\n    .enter-active-code-page h1 small {\n      color: rgba(255, 255, 255, 0.7); }\n  .enter-active-code-page .form-group input::-webkit-input-placeholder {\n    color: rgba(255, 255, 255, 0.6); }\n  .enter-active-code-page .form-group input:-moz-placeholder {\n    /* Firefox 18- */\n    color: rgba(255, 255, 255, 0.6); }\n  .enter-active-code-page .form-group input::-moz-placeholder {\n    /* Firefox 19+ */\n    color: rgba(255, 255, 255, 0.6); }\n  .enter-active-code-page .form-group input:-ms-input-placeholder {\n    color: rgba(255, 255, 255, 0.6) !important; }\n  .enter-active-code-page form {\n    position: relative;\n    padding: 20px 30px;\n    background-color: #fff;\n    border-radius: 5px; }\n\n.list-code input {\n  width: 80%;\n  height: 100%;\n  background-color: #d6f0f4;\n  text-align: center;\n  border-radius: 8%;\n  border: none;\n  font-size: 200%;\n  margin: 0 auto;\n  font-weight: bold; }\n\n.row {\n  margin: 0 auto; }\n\n.footer-1 {\n  margin-top: -20px; }\n  .footer-1 span {\n    color: #737373; }\n\n.footer-2 {\n  margin-top: 0px; }\n\n.list-code {\n  margin-top: -20px; }\n\n.header {\n  margin-top: 2%;\n  font-weight: bold; }\n\n.messenger {\n  color: #9c9c9c;\n  margin-bottom: 7%;\n  width: 100%; }\n\n.panel {\n  width: 460px; }\n\n.is-invalid-2 input {\n  background-color: rgba(231, 76, 60, 0.3); }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login/forgot-password/enter-active-code/enter-active-code.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EnterActiveCodeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__router_animations__ = __webpack_require__("../../../../../src/app/router.animations.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_helpers_validation_helper__ = __webpack_require__("../../../../../src/app/shared/helpers/validation.helper.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_services_user_service__ = __webpack_require__("../../../../../src/app/shared/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_services_alert_service__ = __webpack_require__("../../../../../src/app/shared/services/alert.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var EnterActiveCodeComponent = /** @class */ (function () {
    function EnterActiveCodeComponent(fb, userService, router, activatedRoute, alertService) {
        this.fb = fb;
        this.userService = userService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.alertService = alertService;
        this.isMessengerAlert = false;
        this.formErrors = {
            numberOne: '',
            numberTwo: '',
            numberThree: '',
            numberFour: '',
            numberFive: '',
            numberSix: ''
        };
    }
    EnterActiveCodeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.createForm();
        this.queryParamsSubsription = this.activatedRoute.queryParams.subscribe(function (data) {
            _this.email = data.email;
        });
    };
    EnterActiveCodeComponent.prototype.createForm = function () {
        var _this = this;
        this.enterActiveCodeForm = this.fb.group({
            numberOne: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required],
            numberTwo: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required],
            numberThree: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required],
            numberFour: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required],
            numberFive: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required],
            numberSix: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required],
        });
        this.enterActiveCodeForm.valueChanges
            .subscribe(function (data) { return _this.onFormValueChanged(data); });
    };
    EnterActiveCodeComponent.prototype.validateForm = function () {
        this.invalidMessages = __WEBPACK_IMPORTED_MODULE_3__shared_helpers_validation_helper__["a" /* default */].getInvalidMessages(this.enterActiveCodeForm, this.formErrors);
        return this.invalidMessages.length === 0;
    };
    EnterActiveCodeComponent.prototype.onFormValueChanged = function (data) {
        if (this.isSubmitted) {
            this.validateForm();
        }
    };
    EnterActiveCodeComponent.prototype.submitForm = function () {
        var _this = this;
        this.isSubmitted = true;
        this.apiErrorCode = '';
        if (this.validateForm()) {
            var code_1 = [
                this.enterActiveCodeForm.value.numberOne,
                this.enterActiveCodeForm.value.numberTwo,
                this.enterActiveCodeForm.value.numberThree,
                this.enterActiveCodeForm.value.numberFour,
                this.enterActiveCodeForm.value.numberFive,
                this.enterActiveCodeForm.value.numberSix,
            ].join('');
            this.userService
                .validateActiveCode(code_1)
                .subscribe(function (data) {
                if (data) {
                    _this.router.navigate(['/login/forgot-password/reset-password'], { queryParams: { activeCode: code_1 } });
                }
                else {
                    _this.apiErrorCode = 'Mã xác nhận không đúng.';
                }
            }, function (err) {
                _this.apiErrorCode = 'Đã có lỗi xảy ra, vui lòng thử lại sau!';
            });
        }
    };
    EnterActiveCodeComponent.prototype.sendCodeAgain = function () {
        var _this = this;
        this.userService
            .getActiveCode(this.email)
            .subscribe(function (data) {
            _this.isMessengerAlert = true;
            _this.messengerAlert = "\u0110\u00E3 g\u1EEDi l\u1EA1i m\u00E3 x\u00E1c nh\u1EADn v\u00E0o email " + _this.email + "!";
        }, function (err) {
            _this.apiErrorCode = 'Đã có lỗi xảy ra, vui lòng thử lại!';
        });
    };
    EnterActiveCodeComponent.prototype.pastValue = function (event) {
        var key = event.clipboardData.getData('text/plain');
        var keyCheck = key;
        for (var i = 0; keyCheck.length > 0; i++) {
            if (!Number.isInteger(Number(key.substr(0, 1)))) {
                this.alertService.error('Mã xác nhận phải là kiểu số!');
                event.preventDefault();
                return;
            }
            keyCheck = keyCheck.substr(1, keyCheck.length - 1);
        }
        for (var i = 0; key.length > 0; i++) {
            switch (i) {
                case 0:
                    this.enterActiveCodeForm.get('numberOne').patchValue(key.substr(0, 1));
                    break;
                case 1:
                    this.enterActiveCodeForm.get('numberTwo').patchValue(key.substr(0, 1));
                    break;
                case 2:
                    this.enterActiveCodeForm.get('numberThree').patchValue(key.substr(0, 1));
                    break;
                case 3:
                    this.enterActiveCodeForm.get('numberFour').patchValue(key.substr(0, 1));
                    break;
                case 4:
                    this.enterActiveCodeForm.get('numberFive').patchValue(key.substr(0, 1));
                    break;
                case 5:
                    this.enterActiveCodeForm.get('numberSix').patchValue(key.substr(0, 1));
                    break;
            }
            key = key.substr(1, key.length - 1);
        }
    };
    EnterActiveCodeComponent.prototype.ngOnDestroy = function () {
        if (this.queryParamsSubsription) {
            this.queryParamsSubsription.unsubscribe();
        }
    };
    EnterActiveCodeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-enter-active-code',
            template: __webpack_require__("../../../../../src/app/login/forgot-password/enter-active-code/enter-active-code.component.html"),
            styles: [__webpack_require__("../../../../../src/app/login/forgot-password/enter-active-code/enter-active-code.component.scss")],
            animations: [Object(__WEBPACK_IMPORTED_MODULE_1__router_animations__["b" /* slideToLeft */])()],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"],
            __WEBPACK_IMPORTED_MODULE_4__shared_services_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_5__angular_router__["Router"],
            __WEBPACK_IMPORTED_MODULE_5__angular_router__["ActivatedRoute"],
            __WEBPACK_IMPORTED_MODULE_6__shared_services_alert_service__["a" /* AlertService */]])
    ], EnterActiveCodeComponent);
    return EnterActiveCodeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/login/forgot-password/forgot-password-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForgotPasswordRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__get_active_code_get_active_code_component__ = __webpack_require__("../../../../../src/app/login/forgot-password/get-active-code/get-active-code.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__enter_active_code_enter_active_code_component__ = __webpack_require__("../../../../../src/app/login/forgot-password/enter-active-code/enter-active-code.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__reset_password_reset_password_component__ = __webpack_require__("../../../../../src/app/login/forgot-password/reset-password/reset-password.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    { path: '', redirectTo: 'get-active-code' },
    { path: 'get-active-code', pathMatch: 'full', component: __WEBPACK_IMPORTED_MODULE_2__get_active_code_get_active_code_component__["a" /* GetActiveCodeComponent */] },
    { path: 'enter-active-code', component: __WEBPACK_IMPORTED_MODULE_3__enter_active_code_enter_active_code_component__["a" /* EnterActiveCodeComponent */] },
    { path: 'reset-password', component: __WEBPACK_IMPORTED_MODULE_4__reset_password_reset_password_component__["a" /* ResetPasswordComponent */] },
];
var ForgotPasswordRoutingModule = /** @class */ (function () {
    function ForgotPasswordRoutingModule() {
    }
    ForgotPasswordRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"]]
        })
    ], ForgotPasswordRoutingModule);
    return ForgotPasswordRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/login/forgot-password/forgot-password.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "../../../../../src/app/login/forgot-password/forgot-password.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login/forgot-password/forgot-password.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForgotPasswordComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__router_animations__ = __webpack_require__("../../../../../src/app/router.animations.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ForgotPasswordComponent = /** @class */ (function () {
    function ForgotPasswordComponent(router) {
        this.router = router;
    }
    ForgotPasswordComponent.prototype.ngOnInit = function () {
    };
    ForgotPasswordComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-forgot-password',
            template: __webpack_require__("../../../../../src/app/login/forgot-password/forgot-password.component.html"),
            styles: [__webpack_require__("../../../../../src/app/login/forgot-password/forgot-password.component.scss")],
            animations: [Object(__WEBPACK_IMPORTED_MODULE_1__router_animations__["a" /* routerTransition */])()],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"]])
    ], ForgotPasswordComponent);
    return ForgotPasswordComponent;
}());



/***/ }),

/***/ "../../../../../src/app/login/forgot-password/forgot-password.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPasswordModule", function() { return ForgotPasswordModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__forgot_password_component__ = __webpack_require__("../../../../../src/app/login/forgot-password/forgot-password.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__forgot_password_routing_module__ = __webpack_require__("../../../../../src/app/login/forgot-password/forgot-password-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__get_active_code_get_active_code_component__ = __webpack_require__("../../../../../src/app/login/forgot-password/get-active-code/get-active-code.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__enter_active_code_enter_active_code_component__ = __webpack_require__("../../../../../src/app/login/forgot-password/enter-active-code/enter-active-code.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__reset_password_reset_password_component__ = __webpack_require__("../../../../../src/app/login/forgot-password/reset-password/reset-password.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var ForgotPasswordModule = /** @class */ (function () {
    function ForgotPasswordModule() {
    }
    ForgotPasswordModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__forgot_password_routing_module__["a" /* ForgotPasswordRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_6__shared_shared_module__["a" /* SharedModule */],
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_1__forgot_password_component__["a" /* ForgotPasswordComponent */],
                __WEBPACK_IMPORTED_MODULE_3__get_active_code_get_active_code_component__["a" /* GetActiveCodeComponent */],
                __WEBPACK_IMPORTED_MODULE_4__enter_active_code_enter_active_code_component__["a" /* EnterActiveCodeComponent */],
                __WEBPACK_IMPORTED_MODULE_5__reset_password_reset_password_component__["a" /* ResetPasswordComponent */]
            ]
        })
    ], ForgotPasswordModule);
    return ForgotPasswordModule;
}());



/***/ }),

/***/ "../../../../../src/app/login/forgot-password/get-active-code/get-active-code.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"get-active-code-page\" [@routerTransition]>\n  <div class=\"row justify-content-md-center\">\n    <div class=\"panel\">\n      <h1 class=\"pb-3\">Mộc Hòa Bình CRM</h1>\n\n      <form role=\"form\" [formGroup]=\"getActiveCodeForm\" (ngSubmit)=\"submitForm()\">\n        <app-list-errors [errorCode]=\"apiErrorCode\"></app-list-errors>\n        \n          <div class=\"header\">\n            <h3 class=\"font-weight-bold\">LẤY MÃ XÁC NHẬN</h3>\n          </div>\n          <div class=\"messenger mb-4\">\n            <p >Vui lòng nhập địa chỉ email của bạn để nhận mã xác nhận</p>\n          </div>\n        \n        <div class=\"form-group email\">\n          <div class=\"text-left\">\n            <label class=\"email-content\" for=\"name\">Địa chỉ email</label>\n            <input type=\"text\" class=\"form-control\" name=\"email\" placeholder=\"example@gmai.com\" [class.is-invalid]=\"formErrors.email\" formControlName=\"email\" >\n            <div class=\"invalid-feedback\"  *ngIf=\"formErrors.email\">\n              {{ formErrors.email }}\n            </div>\n          </div>\n        </div>\n\n        <button type=\"submit\" class=\"btn btn-primary w-100 mt-4 text-uppercase\">Tiếp</button>\n        <div class=\"footer mt-3\">\n          <a  [routerLink]=\"['/login']\">Trở về <span>Đăng nhập</span></a>    \n        </div>\n      </form>\n\n     \n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/login/forgot-password/get-active-code/get-active-code.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  display: block; }\n\n.get-active-code-page {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  overflow: auto;\n  background: lightgray;\n  text-align: center;\n  color: #000;\n  padding: 3em; }\n  .get-active-code-page .header {\n    font-weight: bold;\n    font-size: 150%; }\n  .get-active-code-page span {\n    font-weight: bold; }\n  .get-active-code-page .footer {\n    margin-top: 4%; }\n  .get-active-code-page .col-lg-4 {\n    padding: 0; }\n  .get-active-code-page .input-lg {\n    height: 46px;\n    padding: 10px 16px;\n    font-size: 18px;\n    line-height: 1.3333333;\n    border-radius: 0; }\n  .get-active-code-page .input-underline {\n    background: 0 0;\n    border: none;\n    box-shadow: none;\n    border-bottom: 2px solid rgba(255, 255, 255, 0.5);\n    color: #fff;\n    border-radius: 0; }\n  .get-active-code-page .input-underline:focus {\n    border-bottom: 2px solid #fff;\n    box-shadow: none; }\n  .get-active-code-page .rounded-btn {\n    border-radius: 50px;\n    color: rgba(255, 255, 255, 0.8);\n    background: lightgray;\n    border: 2px solid rgba(255, 255, 255, 0.8);\n    font-size: 18px;\n    line-height: 40px;\n    padding: 0 25px; }\n  .get-active-code-page .rounded-btn:hover,\n  .get-active-code-page .rounded-btn:focus,\n  .get-active-code-page .rounded-btn:active,\n  .get-active-code-page .rounded-btn:visited {\n    color: white;\n    border: 2px solid white;\n    outline: none; }\n  .get-active-code-page h1 {\n    font-weight: 700;\n    margin-top: 20px;\n    margin-bottom: 10px;\n    font-size: 50px;\n    color: #28b2c8; }\n    .get-active-code-page h1 small {\n      color: rgba(255, 255, 255, 0.7); }\n  .get-active-code-page .content {\n    padding: 8px 0; }\n    .get-active-code-page .content input::-webkit-input-placeholder {\n      color: rgba(255, 255, 255, 0.6) !important; }\n    .get-active-code-page .content input:-moz-placeholder {\n      /* Firefox 18- */\n      color: rgba(255, 255, 255, 0.6) !important; }\n    .get-active-code-page .content input::-moz-placeholder {\n      /* Firefox 19+ */\n      color: rgba(255, 255, 255, 0.6) !important; }\n    .get-active-code-page .content input:-ms-input-placeholder {\n      color: rgba(255, 255, 255, 0.6) !important; }\n  .get-active-code-page form {\n    padding: 22px 26px;\n    background-color: #fff;\n    border-radius: 5px; }\n\n.panel {\n  width: 460px; }\n\n.header {\n  margin-top: 2%;\n  font-weight: bold;\n  font-size: 150%; }\n\n.messenger {\n  color: #9c9c9c; }\n\n.email .email-content {\n  font-weight: bold; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login/forgot-password/get-active-code/get-active-code.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GetActiveCodeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__router_animations__ = __webpack_require__("../../../../../src/app/router.animations.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_helpers_custom_validator_helper__ = __webpack_require__("../../../../../src/app/shared/helpers/custom-validator.helper.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_helpers_validation_helper__ = __webpack_require__("../../../../../src/app/shared/helpers/validation.helper.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_services_index__ = __webpack_require__("../../../../../src/app/shared/services/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var GetActiveCodeComponent = /** @class */ (function () {
    function GetActiveCodeComponent(fb, userService, router) {
        this.fb = fb;
        this.userService = userService;
        this.router = router;
        this.formErrors = {
            email: '',
        };
    }
    GetActiveCodeComponent.prototype.ngOnInit = function () {
        this.createForm();
    };
    GetActiveCodeComponent.prototype.createForm = function () {
        var _this = this;
        this.getActiveCodeForm = this.fb.group({
            email: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_3__shared_helpers_custom_validator_helper__["a" /* default */].emailOrEmpty]],
        });
        this.getActiveCodeForm.valueChanges
            .subscribe(function (data) { return _this.onFormValueChanged(data); });
    };
    GetActiveCodeComponent.prototype.validateForm = function () {
        this.invalidMessages = __WEBPACK_IMPORTED_MODULE_4__shared_helpers_validation_helper__["a" /* default */].getInvalidMessages(this.getActiveCodeForm, this.formErrors);
        return this.invalidMessages.length === 0;
    };
    GetActiveCodeComponent.prototype.onFormValueChanged = function (data) {
        if (this.isSubmitted) {
            this.validateForm();
        }
    };
    GetActiveCodeComponent.prototype.submitForm = function () {
        var _this = this;
        this.isSubmitted = true;
        this.apiErrorCode = '';
        if (this.validateForm()) {
            var form_1 = this.getActiveCodeForm.value;
            this.userService
                .getActiveCode(form_1.email)
                .subscribe(function (data) {
                _this.router.navigate(['/login/forgot-password/enter-active-code'], { queryParams: { email: form_1.email } });
            }, function (err) {
                _this.apiErrorCode = 'Địa chỉ email không tồn tại trong hệ thống !';
            });
        }
    };
    GetActiveCodeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-get-active-code',
            template: __webpack_require__("../../../../../src/app/login/forgot-password/get-active-code/get-active-code.component.html"),
            styles: [__webpack_require__("../../../../../src/app/login/forgot-password/get-active-code/get-active-code.component.scss")],
            animations: [Object(__WEBPACK_IMPORTED_MODULE_1__router_animations__["b" /* slideToLeft */])()],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"],
            __WEBPACK_IMPORTED_MODULE_5__shared_services_index__["q" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_6__angular_router__["Router"]])
    ], GetActiveCodeComponent);
    return GetActiveCodeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/login/forgot-password/reset-password/reset-password.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"reset-password-page\" [@routerTransition]>\n  <div class=\"row justify-content-md-center\">\n    <div class=\"panel\">\n\n      <h1 class=\"pb-3\">Mộc Hòa Bình CRM</h1>\n      <form role=\"form\" [formGroup]=\"resetPasswordForm\" (ngSubmit)=\"submitForm()\">\n          <app-list-errors [errorCode]=\"apiErrorCode\"></app-list-errors>          \n        <div class=\"header\">\n          <h3 class=\"font-weight-bold\">ĐẶT LẠI MẬT KHẨU</h3>\n        </div>\n        <div class=\"notice\">\n          <label class=\"mb-0\">Vui lòng nhập mật khẩu mới</label>\n          <br>\n          <label class=\"mb-0\">(Mật khẩu mới có ít nhất 6 kí tự)</label>\n        </div>\n\n        <div class=\"form-content password\">\n          <div class=\" text-left form-group mb-0\">\n            <label for=\"name\" class=\"required\">Mật khẩu mới</label>\n            <input  id=\"newpassword\"  type=\"password\" class=\"form-control\" [class.is-invalid]=\"formErrors.newPassword\" formControlName=\"newPassword\">\n            <div class=\"invalid-feedback\"  *ngIf=\"formErrors.newPassword\">\n                {{ formErrors.newPassword }}\n            </div>\n          </div>\n          <div class=\" text-left form-group mb-0\">\n            <label for=\"name\" class=\"required\">Nhập lại mật khẩu mới</label>\n            <input  id=\"confirmPassword\" type=\"password\" class=\"form-control\" [class.is-invalid]=\"formErrors.confirmPassword\" formControlName=\"confirmPassword\">\n            <div class=\"invalid-feedback\">\n                {{ formErrors.confirmPassword }}\n            </div>\n          </div>\n        </div>\n        <div class=\"footer\">\n          <button type=\"submit\" class=\"btn btn-primary w-100 mt-4 text-uppercase\">ĐỒNG Ý</button>\n        </div>\n        <a class=\"btn mt-2\" [routerLink]=\"['/login']\">Trở về</a>\n      </form>\n      \n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/login/forgot-password/reset-password/reset-password.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  display: block; }\n\n.reset-password-page {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  overflow: auto;\n  background: lightgray;\n  text-align: center;\n  color: #000;\n  padding: 3em; }\n  .reset-password-page .col-lg-2 {\n    padding: 0; }\n  .reset-password-page .input-lg {\n    height: 46px;\n    padding: 10px 16px;\n    font-size: 18px;\n    line-height: 1.3333333;\n    border-radius: 0; }\n  .reset-password-page h1 {\n    font-weight: 700;\n    margin-top: 20px;\n    margin-bottom: 10px;\n    font-size: 50px;\n    color: #28b2c8; }\n    .reset-password-page h1 small {\n      color: rgba(255, 255, 255, 0.7); }\n  .reset-password-page .form-group {\n    padding: 8px 0; }\n    .reset-password-page .form-group input::-webkit-input-placeholder {\n      color: rgba(255, 255, 255, 0.6); }\n    .reset-password-page .form-group input:-moz-placeholder {\n      /* Firefox 18- */\n      color: rgba(255, 255, 255, 0.6); }\n    .reset-password-page .form-group input::-moz-placeholder {\n      /* Firefox 19+ */\n      color: rgba(255, 255, 255, 0.6); }\n    .reset-password-page .form-group input:-ms-input-placeholder {\n      color: rgba(255, 255, 255, 0.6); }\n  .reset-password-page form {\n    padding: 15px 30px;\n    background-color: #fff;\n    border-radius: 5px; }\n\n.header {\n  margin-top: 2%;\n  font-weight: bold;\n  font-size: 150%; }\n\n.panel {\n  width: 460px; }\n\n.notice {\n  color: #9c9c9c;\n  margin: 0 0 20px 0; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login/forgot-password/reset-password/reset-password.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResetPasswordComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__router_animations__ = __webpack_require__("../../../../../src/app/router.animations.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_helpers_validation_helper__ = __webpack_require__("../../../../../src/app/shared/helpers/validation.helper.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_helpers_custom_validator_helper__ = __webpack_require__("../../../../../src/app/shared/helpers/custom-validator.helper.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_services_user_service__ = __webpack_require__("../../../../../src/app/shared/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_services_index__ = __webpack_require__("../../../../../src/app/shared/services/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var ResetPasswordComponent = /** @class */ (function () {
    function ResetPasswordComponent(fb, userService, router, activatedRoute, alertService) {
        this.fb = fb;
        this.userService = userService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.alertService = alertService;
        this.formErrors = {
            newPassword: '',
            confirmPassword: '',
        };
    }
    ResetPasswordComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.createForm();
        this.queryParamsSubsription = this.activatedRoute.queryParams.subscribe(function (data) {
            _this.activeCode = data.activeCode;
        });
    };
    ResetPasswordComponent.prototype.createForm = function () {
        var _this = this;
        this.resetPasswordForm = this.fb.group({
            newPassword: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_4__shared_helpers_custom_validator_helper__["a" /* default */].password]],
            confirmPassword: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required]]
        });
        this.resetPasswordForm.valueChanges
            .subscribe(function (data) { return _this.onFormValueChanged(data); });
    };
    ResetPasswordComponent.prototype.validateForm = function () {
        this.invalidMessages = __WEBPACK_IMPORTED_MODULE_3__shared_helpers_validation_helper__["a" /* default */].getInvalidMessages(this.resetPasswordForm, this.formErrors);
        return this.invalidMessages.length === 0;
    };
    ResetPasswordComponent.prototype.onFormValueChanged = function (data) {
        if (this.isSubmitted) {
            this.validateForm();
        }
    };
    ResetPasswordComponent.prototype.matchPassword = function () {
        var newPassword = this.resetPasswordForm.get('newPassword').value;
        var confirmPassword = this.resetPasswordForm.get('confirmPassword').value;
        return newPassword === confirmPassword;
    };
    ResetPasswordComponent.prototype.submitForm = function () {
        var _this = this;
        this.isSubmitted = true;
        if (this.validateForm()) {
            if (!this.matchPassword()) {
                this.formErrors.confirmPassword = 'Mật khẩu không khớp';
                return;
            }
            var newPassword = this.resetPasswordForm.value.newPassword;
            this.userService
                .resetPassword(this.activeCode, newPassword)
                .subscribe(function (data) {
                _this.alertService.success('Đặt lại mật khẩu thành công!', true);
                _this.router.navigate(['/login']);
            }, function (err) {
                _this.apiErrorCode = 'Đã có lỗi xảy ra, vui lòng thử lại';
            });
        }
    };
    ResetPasswordComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-reset-password',
            template: __webpack_require__("../../../../../src/app/login/forgot-password/reset-password/reset-password.component.html"),
            styles: [__webpack_require__("../../../../../src/app/login/forgot-password/reset-password/reset-password.component.scss")],
            animations: [Object(__WEBPACK_IMPORTED_MODULE_1__router_animations__["b" /* slideToLeft */])()],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"],
            __WEBPACK_IMPORTED_MODULE_5__shared_services_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_6__angular_router__["Router"],
            __WEBPACK_IMPORTED_MODULE_6__angular_router__["ActivatedRoute"],
            __WEBPACK_IMPORTED_MODULE_7__shared_services_index__["b" /* AlertService */]])
    ], ResetPasswordComponent);
    return ResetPasswordComponent;
}());



/***/ })

});
//# sourceMappingURL=forgot-password.module.chunk.js.map