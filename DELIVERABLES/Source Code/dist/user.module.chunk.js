webpackJsonp(["user.module"],{

/***/ "../../../../../src/app/layout/user/user-profile/user-avatar-modal/user-avatar-modal.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\">\n  <h4 class=\"modal-title\">Cập nhật ảnh đại diện:</h4>\n  <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"activeModal.dismiss('Cross click')\">\n      <span aria-hidden=\"true\">&times;</span>\n  </button>\n</div>\n<div class=\"fileUpload btn btn-primary\">\n  <span>Tải ảnh lên</span>\n  <input type=\"file\" class=\"upload\" accept=\"image/*\" (change)=\"fileChangeEvent($event)\" />\n</div>\n<div class=\"avatar\">\n  <div class=\"image\">\n      <app-image-cropper\n      [imageChangedEvent]=\"imageChangedEvent\"\n      [maintainAspectRatio]=\"true\"\n      [resizeToWidth]=\"300\"\n      format=\"png\"\n      [aspectRatio]=\"1 / 1\"\n      (imageCropped)=\"imageCropped($event)\"\n    ></app-image-cropper>\n  </div>\n</div>\n\n<!-- <div class=\"crop-image\">\n    <img [src]=\"croppedImage\" />\n</div> -->\n<div class=\"modal-footer\">\n    <button type=\"button\" class=\"btn btn-primary\" (click)=\"saveImage()\" >Lưu</button>\n    <button type=\"button\" class=\"btn btn-secondary\" (click)=\"activeModal.close('Close click')\">Hủy</button>\n</div>"

/***/ }),

/***/ "../../../../../src/app/layout/user/user-profile/user-avatar-modal/user-avatar-modal.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".fileUpload {\n  position: relative;\n  overflow: hidden;\n  margin: 10px; }\n\n.fileUpload input.upload {\n  position: absolute;\n  top: 0;\n  right: 0;\n  margin: 0;\n  padding: 0;\n  font-size: 20px;\n  cursor: pointer;\n  opacity: 0;\n  filter: alpha(opacity=0); }\n\n.avatar {\n  height: 400px !important;\n  width: 500px !important;\n  display: auto;\n  margin: auto; }\n\n.image {\n  margin: auto;\n  height: 400px !important;\n  width: 500px !important; }\n\n.crop-image {\n  width: 150px !important;\n  height: 150px !important;\n  margin: 0 auto; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/layout/user/user-profile/user-avatar-modal/user-avatar-modal.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserAvatarModalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_index__ = __webpack_require__("../../../../../src/app/shared/services/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserAvatarModalComponent = /** @class */ (function () {
    function UserAvatarModalComponent(activeModal, userService, sessionService, alertService) {
        this.activeModal = activeModal;
        this.userService = userService;
        this.sessionService = sessionService;
        this.alertService = alertService;
        this.imageChangedEvent = '';
        this.croppedImage = '';
    }
    UserAvatarModalComponent.prototype.ngOnInit = function () {
    };
    UserAvatarModalComponent.prototype.fileChangeEvent = function (event) {
        this.imageChangedEvent = event;
    };
    UserAvatarModalComponent.prototype.imageCropped = function (image) {
        this.croppedImage = image.base64;
    };
    UserAvatarModalComponent.prototype.saveImage = function () {
        var _this = this;
        var imageBase64 = this.croppedImage.split(',')[1];
        this.userService.upLoadAvatar(imageBase64).subscribe(function (result) {
            _this.sessionService.saveUserInfo(result);
            _this.activeModal.close();
            _this.alertService.success('Cập nhật ảnh đại diện thành công!');
        });
    };
    UserAvatarModalComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-user-avatar-modal',
            template: __webpack_require__("../../../../../src/app/layout/user/user-profile/user-avatar-modal/user-avatar-modal.component.html"),
            styles: [__webpack_require__("../../../../../src/app/layout/user/user-profile/user-avatar-modal/user-avatar-modal.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["a" /* NgbActiveModal */],
            __WEBPACK_IMPORTED_MODULE_2__shared_services_index__["q" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_2__shared_services_index__["n" /* SessionService */],
            __WEBPACK_IMPORTED_MODULE_2__shared_services_index__["b" /* AlertService */]])
    ], UserAvatarModalComponent);
    return UserAvatarModalComponent;
}());



/***/ }),

/***/ "../../../../../src/app/layout/user/user-profile/user-profile.component.html":
/***/ (function(module, exports) {

module.exports = "<div [@routerTransition]>\n  <form role=\"form\" [formGroup]=\"userProfileForm\" (ngSubmit)=\"submitForm()\">\n\n    <div class=\"d-flex\">\n      <div class=\"column1\">\n        <div class=\"card\">\n          <div class=\"card-header\">\n            Hình đại diện\n          </div>\n          <div class=\"avatar-photo w-100\">\n            <div class=\"user-info__photo\">\n              <div class=\"user-info__photo-remove-btn\">\n                <a (click)=\"clearAvatar()\" title=\"Xóa hình\">\n                  <i class=\"fa fa-times\"></i>\n                </a>\n              </div>\n              <img class=\"w-100\" [src]=\"avatarSrc\" alt=\"Hình đại diện\" />\n              <div class=\"user-info__photo-change-btn w-100\">\n                <input class=\"w-100\"  id=\"upload-photo\" (click)=\"openAvatarModal()\" accept=\"image/*\" />\n                <label for=\"upload-photo\">\n                  <a>\n                    <i class=\"fa fa-upload\"></i>\n                    &nbsp;Thay đổi hình\n                  </a>\n                </label>\n              </div>\n            </div>\n         \n          </div>\n        </div>\n        <!-- <div class=\"w-100 mt-3 updateAvatar \">\n            <button type=\"button\" class=\"btn btn-primary\" (click)=\"uploadAvatar()\">Cập nhật ảnh đại diện</button>\n        </div> -->\n      </div>\n      <div class=\"column2 pl-4  ml-auto\">\n        <div class=\"card\">\n          <div class=\"card-header\">\n            THÔNG TIN CÁ NHÂN\n          </div>\n          <div #img class=\"card-body\">\n            <div class=\"row mt-3\">\n              <div class=\"col-md-6 col-lg-6\">\n                <div class=\"group mb-5\">\n                  <input type=\"text\" readonly formControlName=\"lastName\" tabindex=\"1\">\n                  <span class=\"highlight\"></span>\n                  <span class=\"bar\"></span>\n                  <label class=\"\">Họ</label>\n                </div>\n                <div class=\"group mb-5\">\n                  <input type=\"text\" readonly formControlName=\"phone\" tabindex=\"3\">\n                  <span class=\"highlight\"></span>\n                  <span class=\"bar\"></span>\n                  <label>Số điện thoại</label>\n                </div>\n                <div class=\"group mb-5\">\n                  <input type=\"text\" readonly required formControlName=\"address\" tabindex=\"5\">\n                  <span class=\"highlight\"></span>\n                  <span class=\"bar\"></span>\n                  <label>Địa chỉ</label>\n                </div>\n              </div>\n              <div class=\"col-md-6 col-lg-6\">\n                <div class=\"group mb-5\" [class.is-invalid-2]=\"formErrors.firstName\">\n                  <input type=\"text\" readonly required formControlName=\"firstName\" tabindex=\"2\">\n                  <span class=\"highlight\"></span>\n                  <span class=\"bar\"></span>\n                  <label class=\"\">Tên</label>\n                </div>\n                <div class=\"group mb-5\" [class.is-invalid-2]=\"formErrors.email\">\n                  <input type=\"text\" readonly formControlName=\"email\" tabindex=\"4\">\n                  <span class=\"highlight\"></span>\n                  <span class=\"bar\"></span>\n                  <label>Email</label>\n                </div>\n                <div class=\"group\">\n\n                </div>\n              </div>\n\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n\n  </form>\n</div>"

/***/ }),

/***/ "../../../../../src/app/layout/user/user-profile/user-profile.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".column2 {\n  width: 100%;\n  height: 300px;\n  /* LABEL ======================================= */\n  /* active state */\n  /* BOTTOM BARS ================================= */\n  /* active state */\n  /* HIGHLIGHTER ================================== */ }\n  .column2 .messenger {\n    position: absolute; }\n  .column2 .card-body {\n    height: 300px; }\n  .column2 .group {\n    position: relative;\n    margin-bottom: 40px; }\n  .column2 input[readonly] {\n    padding: 6px 6px 6px 5px;\n    display: block;\n    width: 100%;\n    border: none;\n    border-bottom: 1px solid #c4c2c2; }\n  .column2 input[readonly] {\n    outline: none;\n    border-bottom: none; }\n  .column2 label {\n    color: #999;\n    font-weight: bold;\n    position: absolute;\n    pointer-events: none;\n    left: 5px;\n    top: 10px;\n    transition: 0.2s ease all;\n    -moz-transition: 0.2s ease all;\n    -webkit-transition: 0.2s ease all; }\n  .column2 input[readonly] ~ label, .column2 input[readonly] ~ label {\n    top: -15px;\n    color: black; }\n  .column2 .bar {\n    margin: 0 auto;\n    position: relative;\n    display: block;\n    width: 70%; }\n  .column2 .bar:before, .column2 .bar:after {\n    content: '';\n    height: 2px;\n    width: 0;\n    bottom: 1px;\n    position: absolute;\n    background: #dde0e0;\n    transition: 0.2s ease all;\n    -moz-transition: 0.2s ease all;\n    -webkit-transition: 0.2s ease all; }\n  .column2 .bar:before {\n    left: 50%; }\n  .column2 .bar:after {\n    right: 50%; }\n  .column2 input[readonly] ~ .bar:before, .column2 input[readonly] ~ .bar:after {\n    width: 70%; }\n  .column2 .highlight {\n    position: absolute;\n    height: 60%;\n    width: 100px;\n    top: 25%;\n    left: 0;\n    pointer-events: none;\n    opacity: 0.5; }\n\n.avatar-photo {\n  position: relative;\n  background: #fff;\n  border: 1px solid #DAE5EC; }\n  .avatar-photo img {\n    height: 300px; }\n  .avatar-photo #upload-photo {\n    opacity: 0;\n    position: absolute;\n    z-index: -1;\n    display: none; }\n\n.user-info__photo img {\n  opacity: 1; }\n\n.user-info__photo-remove-btn {\n  cursor: pointer;\n  display: none;\n  z-index: 2;\n  position: absolute;\n  top: 11px;\n  right: 11px;\n  background-color: rgba(0, 0, 0, 0.3); }\n  .user-info__photo:hover .user-info__photo-remove-btn {\n    display: block; }\n  .user-info__photo-remove-btn a {\n    display: block;\n    padding: .15em .3em; }\n  .user-info__photo-remove-btn .icon {\n    color: #fff; }\n  .user-info__photo-remove-btn .icon:before {\n    font-size: 12px; }\n\n.user-info__photo-change-btn {\n  position: absolute;\n  bottom: 0px;\n  width: 196px;\n  height: 0;\n  text-align: center;\n  background-color: rgba(0, 0, 0, 0.4);\n  /* For Safari 3.1 to 6.0 */\n  transition: height .1s; }\n  .user-info__photo:hover .user-info__photo-change-btn {\n    height: 40px; }\n  .user-info__photo-change-btn a {\n    display: block;\n    padding-bottom: 7px;\n    color: #fff;\n    text-decoration: none; }\n  .user-info__photo-change-btn label {\n    width: 196px;\n    margin: 0 auto;\n    margin-top: 10px;\n    cursor: pointer; }\n  .user-info__photo-change-btn .icon {\n    margin-right: 1em;\n    color: #fff; }\n\n.column1 {\n  width: 400px;\n  height: 400px; }\n  .column1 .card-body {\n    height: 300px; }\n\n.card-header {\n  font-weight: bold; }\n\n.is-invalid-2 {\n  /* BOTTOM BARS ================================= */\n  /* active state */ }\n  .is-invalid-2 .bar {\n    margin: 0 auto;\n    position: relative;\n    display: block;\n    width: 70%; }\n  .is-invalid-2 input {\n    border-bottom: none; }\n  .is-invalid-2 .bar:before, .is-invalid-2 .bar:after {\n    content: '';\n    height: 2px;\n    width: 0;\n    bottom: 1px;\n    position: absolute;\n    background: red;\n    transition: 0.2s ease all;\n    -moz-transition: 0.2s ease all;\n    -webkit-transition: 0.2s ease all; }\n  .is-invalid-2 .bar:before {\n    left: 50%; }\n  .is-invalid-2 .bar:after {\n    right: 50%; }\n  .is-invalid-2 input:focus ~ .bar:before, .is-invalid-2 input:focus ~ .bar:after {\n    width: 70%; }\n  .is-invalid-2 input:not(:focus) ~ .bar:before, .is-invalid-2 input:not(:focus) ~ .bar:after {\n    width: 70%; }\n\n.invalid-feedback {\n  margin-top: 0 !important; }\n\n.updateAvatar {\n  position: relative;\n  z-index: 20;\n  width: 100%;\n  text-align: center; }\n  .updateAvatar button {\n    width: 100%; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/layout/user/user-profile/user-profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_helpers_custom_validator_helper__ = __webpack_require__("../../../../../src/app/shared/helpers/custom-validator.helper.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__router_animations__ = __webpack_require__("../../../../../src/app/router.animations.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_helpers_validation_helper__ = __webpack_require__("../../../../../src/app/shared/helpers/validation.helper.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_services_index__ = __webpack_require__("../../../../../src/app/shared/services/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__user_avatar_modal_user_avatar_modal_component__ = __webpack_require__("../../../../../src/app/layout/user/user-profile/user-avatar-modal/user-avatar-modal.component.ts");
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
var UserProfileComponent = /** @class */ (function () {
    function UserProfileComponent(fb, userService, sessionService, modalService, alertService) {
        this.fb = fb;
        this.userService = userService;
        this.sessionService = sessionService;
        this.modalService = modalService;
        this.alertService = alertService;
        this.formErrors = {
            firstName: '',
            lastName: '',
            phone: '',
            email: '',
        };
        this.dis = true;
    }
    UserProfileComponent.prototype.ngOnInit = function () {
        this.avatarSrc = defaultAvatarSrc;
        this.userProfile = this.sessionService.userInfo;
        this.createForm();
        var that = this;
        this.avatarSrc = this.userProfile.avatar ? "data:image/jpeg;base64," + this.userProfile.avatar : defaultAvatarSrc;
        this.sessionService
            .getUserInfo()
            .subscribe(function (user) {
            that.userProfile = user;
            that.avatarSrc = user.avatar ? "data:image/jpeg;base64," + user.avatar : defaultAvatarSrc;
        });
    };
    UserProfileComponent.prototype.createForm = function () {
        var _this = this;
        this.userProfileForm = this.fb.group({
            lastName: [this.userProfile.lastName, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required],
            firstName: [this.userProfile.firstName, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required],
            phone: [this.userProfile.phone, __WEBPACK_IMPORTED_MODULE_2__shared_helpers_custom_validator_helper__["a" /* default */].phoneNumber],
            email: [this.userProfile.email, __WEBPACK_IMPORTED_MODULE_2__shared_helpers_custom_validator_helper__["a" /* default */].emailOrEmpty],
            dob: this.userProfile.dob,
            gender: this.userProfile.gender,
            address: this.userProfile.address,
        });
        this.userProfileForm.valueChanges
            .subscribe(function (data) { return _this.onFormValueChanged(data); });
    };
    UserProfileComponent.prototype.onFormValueChanged = function (data) {
        if (this.isSubmitted) {
            this.validateForm();
        }
    };
    UserProfileComponent.prototype.validateForm = function () {
        this.invalidMessages = __WEBPACK_IMPORTED_MODULE_4__shared_helpers_validation_helper__["a" /* default */].getInvalidMessages(this.userProfileForm, this.formErrors);
        return this.invalidMessages.length === 0;
    };
    UserProfileComponent.prototype.submitForm = function () {
    };
    UserProfileComponent.prototype.onFileChange = function (event) {
        var _this = this;
        var fileList = event.target.files;
        if (fileList.length > 0) {
            var file = fileList[0];
            if (file.size < 1048576) {
                var reader = new FileReader();
                reader.onload = function (e) {
                    if (e.target.result) {
                        _this.avatarSrc = e.target.result;
                        event.target.value = null;
                    }
                };
                reader.readAsDataURL(file);
            }
            else {
                this.alertService.error('Dung lượng ảnh quá lớn! Vui lòng chọn ảnh dưới 1MB.');
                event.target.value = null;
            }
        }
    };
    UserProfileComponent.prototype.openAvatarModal = function () {
        var modaRef = this.modalService.open(__WEBPACK_IMPORTED_MODULE_7__user_avatar_modal_user_avatar_modal_component__["a" /* UserAvatarModalComponent */]);
    };
    UserProfileComponent.prototype.clearAvatar = function () {
        this.avatarSrc = defaultAvatarSrc;
        this.uploadAvatar();
    };
    UserProfileComponent.prototype.uploadAvatar = function () {
        var _this = this;
        var imageBase64 = this.avatarSrc.split(',')[1];
        this.userService.upLoadAvatar(imageBase64).subscribe(function (result) {
            _this.sessionService.saveUserInfo(result);
            _this.alertService.success('Cập nhật ảnh đại diện thành công!');
        });
    };
    UserProfileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-user-profile',
            template: __webpack_require__("../../../../../src/app/layout/user/user-profile/user-profile.component.html"),
            styles: [__webpack_require__("../../../../../src/app/layout/user/user-profile/user-profile.component.scss")],
            animations: [Object(__WEBPACK_IMPORTED_MODULE_3__router_animations__["a" /* routerTransition */])()],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"],
            __WEBPACK_IMPORTED_MODULE_5__shared_services_index__["q" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_5__shared_services_index__["n" /* SessionService */],
            __WEBPACK_IMPORTED_MODULE_6__ng_bootstrap_ng_bootstrap__["f" /* NgbModal */],
            __WEBPACK_IMPORTED_MODULE_5__shared_services_index__["b" /* AlertService */]])
    ], UserProfileComponent);
    return UserProfileComponent;
}());



/***/ }),

/***/ "../../../../../src/app/layout/user/user-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_component__ = __webpack_require__("../../../../../src/app/layout/user/user.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user_profile_user_profile_component__ = __webpack_require__("../../../../../src/app/layout/user/user-profile/user-profile.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__user_component__["a" /* UserComponent */],
        children: [
            { path: '', redirectTo: 'profile' },
            { path: 'profile', component: __WEBPACK_IMPORTED_MODULE_3__user_profile_user_profile_component__["a" /* UserProfileComponent */] },
        ]
    }
];
var UserRoutingModule = /** @class */ (function () {
    function UserRoutingModule() {
    }
    UserRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"]]
        })
    ], UserRoutingModule);
    return UserRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/layout/user/user.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "../../../../../src/app/layout/user/user.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/layout/user/user.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserComponent; });
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

var UserComponent = /** @class */ (function () {
    function UserComponent() {
    }
    UserComponent.prototype.ngOnInit = function () {
    };
    UserComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-user',
            template: __webpack_require__("../../../../../src/app/layout/user/user.component.html"),
            styles: [__webpack_require__("../../../../../src/app/layout/user/user.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], UserComponent);
    return UserComponent;
}());



/***/ }),

/***/ "../../../../../src/app/layout/user/user.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserModule", function() { return UserModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_user_component__ = __webpack_require__("../../../../../src/app/layout/user/user.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user_profile_user_profile_component__ = __webpack_require__("../../../../../src/app/layout/user/user-profile/user-profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__user_routing_module__ = __webpack_require__("../../../../../src/app/layout/user/user-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_services_index__ = __webpack_require__("../../../../../src/app/shared/services/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__user_profile_user_avatar_modal_user_avatar_modal_component__ = __webpack_require__("../../../../../src/app/layout/user/user-profile/user-avatar-modal/user-avatar-modal.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







// import { ImageCropperModule } from 'ngx-image-cropper';

var UserModule = /** @class */ (function () {
    function UserModule() {
    }
    UserModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_4__user_routing_module__["a" /* UserRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_5__shared_shared_module__["a" /* SharedModule */],
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_7__user_profile_user_avatar_modal_user_avatar_modal_component__["a" /* UserAvatarModalComponent */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__user_user_component__["a" /* UserComponent */], __WEBPACK_IMPORTED_MODULE_3__user_profile_user_profile_component__["a" /* UserProfileComponent */], __WEBPACK_IMPORTED_MODULE_7__user_profile_user_avatar_modal_user_avatar_modal_component__["a" /* UserAvatarModalComponent */]],
            providers: [__WEBPACK_IMPORTED_MODULE_6__shared_services_index__["q" /* UserService */]]
        })
    ], UserModule);
    return UserModule;
}());



/***/ })

});
//# sourceMappingURL=user.module.chunk.js.map