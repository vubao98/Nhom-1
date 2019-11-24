webpackJsonp(["permission-user.module"],{

/***/ "../../../../../src/app/layout/permission/permission-user/permission-item/permission-item.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-md-3\"><i class=\"fa fa-angle-right mx-2\" aria-hidden=\"true\"></i>{{item.name}}</div>\n  <div class=\"col-md-1 text-center\">\n    <label class=\"custom-control custom-checkbox\">\n      <input type=\"checkbox\" class=\"custom-control-input custom-control-input--none\" [disabled]=\"isDisabled\" (click)=\"clickPermission()\" [value]=\"item.no\" [checked]=\"getCheckedPermission(item.no)\" #viewProspectInfo>\n      <span class=\"custom-control-indicator\"></span>\n    </label>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/layout/permission/permission-user/permission-item/permission-item.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".custom-control-input--disabled:disabled ~ .custom-control-indicator {\n  background-color: #17a2b8;\n  opacity: .5; }\n\n.custom-control-input--none:disabled ~ .custom-control-indicator {\n  background-image: none; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/layout/permission/permission-user/permission-item/permission-item.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PermissionItemComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_models_api_response_user_user_group_permission__ = __webpack_require__("../../../../../src/app/shared/models/api-response/user/user-group-permission.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__permission_user_component__ = __webpack_require__("../../../../../src/app/layout/permission/permission-user/permission-user.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PermissionItemComponent = /** @class */ (function () {
    function PermissionItemComponent() {
    }
    PermissionItemComponent.prototype.ngOnInit = function () {
    };
    PermissionItemComponent.prototype.clickPermission = function () {
        var _this = this;
        // const pms = this.listPermission.find(i => i.no === value);
        var valueInListTotal = __WEBPACK_IMPORTED_MODULE_2__permission_user_component__["a" /* PermissionUserComponent */].listPermissionData.find(function (i) { return i.functionWeb.no === _this.item.no; });
        if (valueInListTotal) {
            var idx = __WEBPACK_IMPORTED_MODULE_2__permission_user_component__["a" /* PermissionUserComponent */].listPermissionData.findIndex(function (i) { return i.functionWeb.no === _this.item.no; });
            __WEBPACK_IMPORTED_MODULE_2__permission_user_component__["a" /* PermissionUserComponent */].listPermissionData.splice(idx, 1);
        }
        else {
            var valuePushToList = {
                category: null,
                functionWeb: this.item,
                type: this.viewType,
                userGroup: null
            };
            __WEBPACK_IMPORTED_MODULE_2__permission_user_component__["a" /* PermissionUserComponent */].listPermissionData.push(valuePushToList);
        }
    };
    PermissionItemComponent.prototype.getCheckedPermission = function (no) {
        // if (this.listPermission && this.listPermission.length > 0) {
        // return this.listPermission.find(i => i.no === no) ? true : false;
        return __WEBPACK_IMPORTED_MODULE_2__permission_user_component__["a" /* PermissionUserComponent */].listPermissionData.find(function (i) { return i.functionWeb.no === no; }) ? true : false;
        // } else {
        //   return false;
        // }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__shared_models_api_response_user_user_group_permission__["a" /* UserGroupPermission */])
    ], PermissionItemComponent.prototype, "item", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], PermissionItemComponent.prototype, "isDisabled", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], PermissionItemComponent.prototype, "viewType", void 0);
    PermissionItemComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-permission-item',
            template: __webpack_require__("../../../../../src/app/layout/permission/permission-user/permission-item/permission-item.component.html"),
            styles: [__webpack_require__("../../../../../src/app/layout/permission/permission-user/permission-item/permission-item.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], PermissionItemComponent);
    return PermissionItemComponent;
}());



/***/ }),

/***/ "../../../../../src/app/layout/permission/permission-user/permission-user-activity/permission-user-activity.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"listPermission && listPermission.length > 0\">\n  <div class=\"row mt-3\">\n    <div class=\"col-md-3\"><b>Xem sự kiện</b></div>\n    <div class=\"col-md-2 text-center center-parent\">\n      <label class=\"custom-control custom-checkbox mb-0 pr-3\">\n        <input type=\"checkbox\" class=\"custom-control-input\" (click)=\"viewAllEventClick($event.target.checked)\" [(ngModel)]=\"viewAllEvent\">\n        <span class=\"custom-control-indicator\"></span>\n      </label>\n      Tất cả\n    </div>\n    <div class=\"col-md-2 text-center text-nowrap center-parent\">\n      <label class=\"custom-control custom-checkbox mb-0 pr-3\">\n        <input type=\"checkbox\" class=\"custom-control-input custom-control-input--disabled\" (click)=\"viewUserEventClick($event.target.checked)\"  [disabled]=\"viewAllEvent\" [(ngModel)]=\"viewEventByCurrentUser\">\n        <span class=\"custom-control-indicator\"></span>\n      </label>\n      Theo người dùng\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-3\"><b>Xem công việc</b></div>\n    <div class=\"col-md-2 text-center center-parent\">\n      <label class=\"custom-control custom-checkbox mb-0 pr-3\">\n        <input type=\"checkbox\" class=\"custom-control-input\" (click)=\"viewAllActivityClick($event.target.checked)\" [(ngModel)]=\"viewAllActivity\">\n        <span class=\"custom-control-indicator\"></span>\n      </label>\n      Tất cả\n    </div>\n    <div class=\"col-md-2 text-center  text-nowrap center-parent\">\n      <label class=\"custom-control custom-checkbox mb-0 pr-3\">\n        <input type=\"checkbox\" class=\"custom-control-input custom-control-input--disabled\" (click)=\"viewUserActivityClick($event.target.checked)\" [disabled]=\"viewAllActivity\" [(ngModel)]=\"viewActivityByCurrentUser\">\n        <span class=\"custom-control-indicator\"></span>\n      </label>\n      Theo người dùng\n    </div>\n  </div>\n\n  <div class=\"row mt-2\">\n    <div class=\"col-md-3\"></div>\n    <div class=\"col-md-1 text-center font-weight-bold text-nowrap\">Sự kiện</div>\n    <div class=\"col-md-1 text-center font-weight-bold text-nowrap\">Công việc</div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-3 font-weight-bold\">Danh sách sự kiện/công việc</div>\n    <div class=\"col-md-1 text-center\">\n      <label class=\"custom-control custom-checkbox\">\n        <input type=\"checkbox\" class=\"custom-control-input custom-control-input--none\" [checked]=\"checkAllEventList\" [disabled]=\"disabledPmsEvent\" (click)=\"toggleProspectList($event.target.checked, 'Event')\">\n        <span class=\"custom-control-indicator\"></span>\n      </label>\n    </div>\n    <div class=\"col-md-1 text-center\">\n      <label class=\"custom-control custom-checkbox\">\n        <input type=\"checkbox\" class=\"custom-control-input custom-control-input--none\" [checked]=\"checkAllActivityList\" [disabled]=\"disabledPmsActivity\" (click)=\"toggleProspectList($event.target.checked, 'Work')\">\n        <span class=\"custom-control-indicator\"></span>\n      </label>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-3\"><i class=\"fa fa-angle-right mx-2\" aria-hidden=\"true\"></i>Thêm mới</div>\n    <div class=\"col-md-1 text-center\">\n      <label class=\"custom-control custom-checkbox\">\n        <input type=\"checkbox\" class=\"custom-control-input custom-control-input--none\" value=\"ActivityAddActivity\" [disabled]=\"disabledPmsEvent\" (click)=\"clickPermission($event.target.value, 'Event')\" [checked]=\"getCheckedPermission('ActivityAddActivity', 'Event')\">\n        <span class=\"custom-control-indicator\"></span>\n      </label>\n    </div>\n    <div class=\"col-md-1 text-center\">\n      <label class=\"custom-control custom-checkbox\">\n        <input type=\"checkbox\" class=\"custom-control-input custom-control-input--none\" value=\"ActivityAddActivity\" [disabled]=\"disabledPmsActivity\" (click)=\"clickPermission($event.target.value, 'Work')\" [checked]=\"getCheckedPermission('ActivityAddActivity', 'Work')\">\n        <span class=\"custom-control-indicator\"></span>\n      </label>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-3\"><i class=\"fa fa-angle-right mx-2\" aria-hidden=\"true\"></i>Xem thông tin</div>\n    <div class=\"col-md-1 text-center\">\n      <label class=\"custom-control custom-checkbox\">\n        <input type=\"checkbox\" class=\"custom-control-input custom-control-input--none\" value=\"ActivityViewInformation\" [disabled]=\"disabledPmsEvent\" (click)=\"clickPermission($event.target.value, 'Event')\" [checked]=\"getCheckedPermission('ActivityViewInformation', 'Event')\" #viewInfoEvent>\n        <span class=\"custom-control-indicator\"></span>\n      </label>\n    </div>\n    <div class=\"col-md-1 text-center\">\n      <label class=\"custom-control custom-checkbox\">\n        <input type=\"checkbox\" class=\"custom-control-input custom-control-input--none\" value=\"ActivityViewInformation\" [disabled]=\"disabledPmsActivity\" (click)=\"clickPermission($event.target.value, 'Work')\" [checked]=\"getCheckedPermission('ActivityViewInformation', 'Work')\" #viewInfoActivity>\n        <span class=\"custom-control-indicator\"></span>\n      </label>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-3\"><i class=\"fa fa-angle-right mx-2\" aria-hidden=\"true\"></i>Sửa</div>\n    <div class=\"col-md-1 text-center\">\n      <label class=\"custom-control custom-checkbox\">\n        <input type=\"checkbox\" class=\"custom-control-input custom-control-input--none\" value=\"ActivityEditActivity\" [disabled]=\"disabledPmsEvent\" (click)=\"clickPermission($event.target.value, 'Event')\" [checked]=\"getCheckedPermission('ActivityEditActivity', 'Event')\" #editActivityEvent>\n        <span class=\"custom-control-indicator\"></span>\n      </label>\n    </div>\n    <div class=\"col-md-1 text-center\">\n      <label class=\"custom-control custom-checkbox\">\n        <input type=\"checkbox\" class=\"custom-control-input custom-control-input--none\" value=\"ActivityEditActivity\" [disabled]=\"disabledPmsActivity\" (click)=\"clickPermission($event.target.value, 'Work')\" [checked]=\"getCheckedPermission('ActivityEditActivity', 'Work')\">\n        <span class=\"custom-control-indicator\"></span>\n      </label>\n    </div>\n  </div>\n\n  <div class=\"row\">\n    <div class=\"col-md-3\"><i class=\"fa fa-angle-double-right ml-3 mr-2\" aria-hidden=\"true\"></i>Cấu hình Loại sự kiện</div>\n    <div class=\"col-md-1 text-center\">\n      <label class=\"custom-control custom-checkbox\">\n        <input type=\"checkbox\" class=\"custom-control-input custom-control-input--none\" value=\"ActivityConfigEventType\" [disabled]=\"disabledPmsEvent || !editActivityEvent.checked\" (click)=\"clickPermission($event.target.value, 'Event')\" [checked]=\"getCheckedPermission('ActivityConfigEventType', 'Event') && editActivityEvent.checked\">\n        <span class=\"custom-control-indicator\"></span>\n      </label>\n    </div>\n    <!-- <div class=\"col-md-1 text-center\">\n      <label class=\"custom-control custom-checkbox\">\n        <input type=\"checkbox\" class=\"custom-control-input custom-control-input--none\" value=\"ActivityEditActivity\" [disabled]=\"disabledPmsActivity\" (click)=\"clickPermission($event.target.value, 'Work')\" [checked]=\"getCheckedPermission('ActivityEditActivity', 'Work')\">\n        <span class=\"custom-control-indicator\"></span>\n      </label>\n    </div> -->\n  </div>\n\n  <div class=\"row\">\n    <div class=\"col-md-3\"><i class=\"fa fa-angle-right mx-2\" aria-hidden=\"true\"></i>Xóa</div>\n    <div class=\"col-md-1 text-center\">\n      <label class=\"custom-control custom-checkbox\">\n        <input type=\"checkbox\" class=\"custom-control-input custom-control-input--none\" value=\"ActivityDeleteActivity\" [disabled]=\"disabledPmsEvent\" (click)=\"clickPermission($event.target.value, 'Event')\" [checked]=\"getCheckedPermission('ActivityDeleteActivity', 'Event')\">\n        <span class=\"custom-control-indicator\"></span>\n      </label>\n    </div>\n    <div class=\"col-md-1 text-center\">\n      <label class=\"custom-control custom-checkbox\">\n        <input type=\"checkbox\" class=\"custom-control-input custom-control-input--none\" value=\"ActivityDeleteActivity\" [disabled]=\"disabledPmsActivity\" (click)=\"clickPermission($event.target.value, 'Work')\" [checked]=\"getCheckedPermission('ActivityDeleteActivity', 'Work')\">\n        <span class=\"custom-control-indicator\"></span>\n      </label>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-3\"><i class=\"fa fa-angle-right mx-2\" aria-hidden=\"true\"></i>Nhập file + Tải template</div>\n    <div class=\"col-md-1 text-center\">\n      <label class=\"custom-control custom-checkbox\">\n        <input type=\"checkbox\" class=\"custom-control-input custom-control-input--none\" value=\"ActivityImportDownloadActivityTemplate\" [disabled]=\"disabledPmsEvent\" (click)=\"clickPermission($event.target.value, 'Event')\" [checked]=\"getCheckedPermission('ActivityImportDownloadActivityTemplate', 'Event')\">\n        <span class=\"custom-control-indicator\"></span>\n      </label>\n    </div>\n    <div class=\"col-md-1 text-center\">\n      <label class=\"custom-control custom-checkbox\">\n        <input type=\"checkbox\" class=\"custom-control-input custom-control-input--none\" value=\"ActivityImportDownloadActivityTemplate\" [disabled]=\"disabledPmsActivity\" (click)=\"clickPermission($event.target.value, 'Work')\" [checked]=\"getCheckedPermission('ActivityImportDownloadActivityTemplate', 'Work')\">\n        <span class=\"custom-control-indicator\"></span>\n      </label>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-3\"><i class=\"fa fa-angle-right mx-2\" aria-hidden=\"true\"></i>Xuất file</div>\n    <div class=\"col-md-1 text-center\">\n      <label class=\"custom-control custom-checkbox\">\n        <input type=\"checkbox\" class=\"custom-control-input custom-control-input--none\" value=\"ActivityExportFile\" [disabled]=\"disabledPmsEvent\" (click)=\"clickPermission($event.target.value, 'Event')\" [checked]=\"getCheckedPermission('ActivityExportFile', 'Event')\">\n        <span class=\"custom-control-indicator\"></span>\n      </label>\n    </div>\n    <div class=\"col-md-1 text-center\">\n      <label class=\"custom-control custom-checkbox\">\n        <input type=\"checkbox\" class=\"custom-control-input custom-control-input--none\" value=\"ActivityExportFile\" [disabled]=\"disabledPmsActivity\" (click)=\"clickPermission($event.target.value, 'Work')\" [checked]=\"getCheckedPermission('ActivityExportFile', 'Work')\">\n        <span class=\"custom-control-indicator\"></span>\n      </label>\n    </div>\n  </div>\n  <!-- No use -->\n  <!-- <div class=\"row\">\n    <div class=\"col-md-3\"><i class=\"fa fa-angle-right mx-2\" aria-hidden=\"true\"></i>Nhập file + Tải template</div>\n    <div class=\"col-md-1 text-center\">\n      <label class=\"custom-control custom-checkbox\">\n        <input type=\"checkbox\" class=\"custom-control-input custom-control-input--none\" value=\"ActivityImportDownloadActivityTemplate\" [disabled]=\"disabledPmsEvent\" (click)=\"clickPermission($event.target.value, 'Event')\" [checked]=\"getCheckedPermission('ActivityImportDownloadActivityTemplate', 'Event')\">\n        <span class=\"custom-control-indicator\"></span>\n      </label>\n    </div>\n    <div class=\"col-md-1 text-center\">\n      <label class=\"custom-control custom-checkbox\">\n        <input type=\"checkbox\" class=\"custom-control-input custom-control-input--none\" value=\"ActivityImportDownloadActivityTemplate\" [disabled]=\"disabledPmsActivity\" (click)=\"clickPermission($event.target.value, 'Work')\" [checked]=\"getCheckedPermission('ActivityImportDownloadActivityTemplate', 'Work')\">\n        <span class=\"custom-control-indicator\"></span>\n      </label>\n    </div>\n  </div> -->\n\n  <div class=\"row mt-2\">\n    <div class=\"col-md-3 font-weight-bold\">Thông tin sự kiện/công việc</div>\n    <div class=\"col-md-1 text-center\">\n      <label class=\"custom-control custom-checkbox\">\n        <input type=\"checkbox\" class=\"custom-control-input custom-control-input--none\" [disabled]=\"disabledPmsEvent || !viewInfoEvent.checked\" [checked]=\"checkAllEventInfo\" (click)=\"toggleProspectInfo($event.target.checked, 'Event')\">\n        <span class=\"custom-control-indicator\"></span>\n      </label>\n    </div>\n    <div class=\"col-md-1 text-center\">\n      <label class=\"custom-control custom-checkbox\">\n        <input type=\"checkbox\" class=\"custom-control-input custom-control-input--none\" [disabled]=\"disabledPmsActivity || !viewInfoActivity.checked\" [checked]=\"checkAllActivityInfo\" (click)=\"toggleProspectInfo($event.target.checked, 'Work')\">\n        <span class=\"custom-control-indicator\"></span>\n      </label>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-3\"><i class=\"fa fa-angle-right mx-2\" aria-hidden=\"true\"></i>Xem chi tiết</div>\n    <div class=\"col-md-1 text-center\">\n      <label class=\"custom-control custom-checkbox\">\n        <input type=\"checkbox\" class=\"custom-control-input custom-control-input--none\" [disabled]=\"disabledPmsEvent || !viewInfoEvent.checked\" value=\"ActivityViewActivityDetail\"  (click)=\"clickPermission($event.target.value, 'Event')\" [checked]=\"getCheckedPermission('ActivityViewActivityDetail', 'Event') && viewInfoEvent.checked\">\n        <span class=\"custom-control-indicator\"></span>\n      </label>\n    </div>\n    <div class=\"col-md-1 text-center\">\n      <label class=\"custom-control custom-checkbox\">\n        <input type=\"checkbox\" class=\"custom-control-input custom-control-input--none\" [disabled]=\"disabledPmsActivity || !viewInfoActivity.checked\" value=\"ActivityViewActivityDetail\" (click)=\"clickPermission($event.target.value, 'Work')\" [checked]=\"getCheckedPermission('ActivityViewActivityDetail', 'Work')  && viewInfoActivity.checked\">\n        <span class=\"custom-control-indicator\"></span>\n      </label>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-3\"><i class=\"fa fa-angle-right mx-2\" aria-hidden=\"true\"></i>Xem bình luận</div>\n    <div class=\"col-md-1 text-center\">\n      <label class=\"custom-control custom-checkbox\">\n        <input type=\"checkbox\" class=\"custom-control-input custom-control-input--none\" [disabled]=\"disabledPmsEvent || !viewInfoEvent.checked\" value=\"ActivityViewComments\" (click)=\"clickPermission($event.target.value, 'Event')\" [checked]=\"getCheckedPermission('ActivityViewComments', 'Event') && viewInfoEvent.checked\">\n        <span class=\"custom-control-indicator\"></span>\n      </label>\n    </div>\n    <div class=\"col-md-1 text-center\">\n      <label class=\"custom-control custom-checkbox\">\n        <input type=\"checkbox\" class=\"custom-control-input custom-control-input--none\" [disabled]=\"disabledPmsActivity || !viewInfoActivity.checked\" value=\"ActivityViewComments\" (click)=\"clickPermission($event.target.value, 'Work')\" [checked]=\"getCheckedPermission('ActivityViewComments', 'Work')  && viewInfoActivity.checked\">\n        <span class=\"custom-control-indicator\"></span>\n      </label>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-3\"><i class=\"fa fa-angle-right mx-2\" aria-hidden=\"true\"></i>Đăng bình luận</div>\n    <div class=\"col-md-1 text-center\">\n      <label class=\"custom-control custom-checkbox\">\n        <input type=\"checkbox\" class=\"custom-control-input custom-control-input--none\" [disabled]=\"disabledPmsEvent || !viewInfoEvent.checked\" value=\"ActivityAddComment\" (click)=\"clickPermission($event.target.value, 'Event')\" [checked]=\"getCheckedPermission('ActivityAddComment', 'Event') && viewInfoEvent.checked\">\n        <span class=\"custom-control-indicator\"></span>\n      </label>\n    </div>\n    <div class=\"col-md-1 text-center\">\n      <label class=\"custom-control custom-checkbox\">\n        <input type=\"checkbox\" class=\"custom-control-input custom-control-input--none\" [disabled]=\"disabledPmsActivity || !viewInfoActivity.checked\" value=\"ActivityAddComment\" (click)=\"clickPermission($event.target.value, 'Work')\" [checked]=\"getCheckedPermission('ActivityAddComment', 'Work')  && viewInfoActivity.checked\">\n        <span class=\"custom-control-indicator\"></span>\n      </label>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-3\"><i class=\"fa fa-angle-right mx-2\" aria-hidden=\"true\"></i>Các cập nhật</div>\n    <div class=\"col-md-1 text-center\">\n      <label class=\"custom-control custom-checkbox\">\n        <input type=\"checkbox\" class=\"custom-control-input custom-control-input--none\" [disabled]=\"disabledPmsEvent || !viewInfoEvent.checked\" value=\"ActivityHistories\" (click)=\"clickPermission($event.target.value, 'Event')\" [checked]=\"getCheckedPermission('ActivityHistories', 'Event') && viewInfoEvent.checked\">\n        <span class=\"custom-control-indicator\"></span>\n      </label>\n    </div>\n    <div class=\"col-md-1 text-center\">\n      <label class=\"custom-control custom-checkbox\">\n        <input type=\"checkbox\" class=\"custom-control-input custom-control-input--none\" [disabled]=\"disabledPmsActivity || !viewInfoActivity.checked\" value=\"ActivityHistories\" (click)=\"clickPermission($event.target.value, 'Work')\" [checked]=\"getCheckedPermission('ActivityHistories', 'Work') && viewInfoActivity.checked\">\n        <span class=\"custom-control-indicator\"></span>\n      </label>\n    </div>\n  </div>\n\n  <div class=\"my-4 text-center\">\n    <button class=\"btn btn-secondary ml-2\" routerLink=\"../campaign\">\n      <i class=\"fa fa-angle-left mx-2\" aria-hidden=\"true\"></i> Trở về\n    </button>\n    <button class=\"btn btn-primary ml-2\" routerLink=\"../permission\">\n      Tiếp <i class=\"fa fa-angle-right mx-2\" aria-hidden=\"true\"></i>\n    </button>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/layout/permission/permission-user/permission-user-activity/permission-user-activity.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host /deep/ .btn-secondary {\n  background-color: #b0b0b0; }\n\n.custom-control-input--disabled:disabled ~ .custom-control-indicator {\n  background-color: #17a2b8;\n  opacity: .5; }\n\n.custom-control-input--none:disabled ~ .custom-control-indicator {\n  background-image: none; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/layout/permission/permission-user/permission-user-activity/permission-user-activity.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PermissionUserActivityComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services__ = __webpack_require__("../../../../../src/app/shared/services/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__permission_user_component__ = __webpack_require__("../../../../../src/app/layout/permission/permission-user/permission-user.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PermissionUserActivityComponent = /** @class */ (function () {
    function PermissionUserActivityComponent(userGroupService, dataService) {
        this.userGroupService = userGroupService;
        this.dataService = dataService;
        this.isSelectAll = false;
        this.listPermissionData = [];
        this.listPmsEvent = [];
        this.listPmsActivity = [];
    }
    PermissionUserActivityComponent_1 = PermissionUserActivityComponent;
    Object.defineProperty(PermissionUserActivityComponent.prototype, "viewTypeEvent", {
        get: function () {
            if (this.viewAllEvent) {
                PermissionUserActivityComponent_1.activityViewTypeEvent = true;
                return true;
            }
            else if (this.viewEventByCurrentUser) {
                PermissionUserActivityComponent_1.activityViewTypeEvent = false;
                return false;
            }
            else {
                PermissionUserActivityComponent_1.activityViewTypeEvent = null;
                return null;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PermissionUserActivityComponent.prototype, "viewTypeActivity", {
        get: function () {
            if (this.viewAllActivity) {
                PermissionUserActivityComponent_1.activityViewTypeWork = true;
                return true;
            }
            else if (this.viewActivityByCurrentUser) {
                PermissionUserActivityComponent_1.activityViewTypeWork = false;
                return false;
            }
            else {
                PermissionUserActivityComponent_1.activityViewTypeWork = null;
                return null;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PermissionUserActivityComponent.prototype, "disabledPmsEvent", {
        get: function () {
            if (this.viewTypeEvent == null) {
                return true;
            }
            else {
                return false;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PermissionUserActivityComponent.prototype, "disabledPmsActivity", {
        get: function () {
            if (this.viewTypeActivity == null) {
                return true;
            }
            else {
                return false;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PermissionUserActivityComponent.prototype, "checkAllEventList", {
        get: function () {
            var value = true;
            // tslint:disable-next-line:max-line-length
            var listPms = ['ActivityAddActivity', 'ActivityViewInformation', 'ActivityEditActivity', 'ActivityDeleteActivity', 'ActivityExportFile', 'ActivityImportDownloadActivityTemplate'];
            listPms.forEach(function (pms) {
                if (!__WEBPACK_IMPORTED_MODULE_2__permission_user_component__["a" /* PermissionUserComponent */].listPermissionData.find(function (i) { return i.functionWeb.no === pms && i.category === 'Event'; })) {
                    value = false;
                }
            });
            return value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PermissionUserActivityComponent.prototype, "checkAllActivityList", {
        get: function () {
            var value = true;
            // tslint:disable-next-line:max-line-length
            var listPms = ['ActivityAddActivity', 'ActivityViewInformation', 'ActivityEditActivity', 'ActivityDeleteActivity', 'ActivityExportFile', 'ActivityImportDownloadActivityTemplate'];
            listPms.forEach(function (pms) {
                if (!__WEBPACK_IMPORTED_MODULE_2__permission_user_component__["a" /* PermissionUserComponent */].listPermissionData.find(function (i) { return i.functionWeb.no === pms && i.category === 'Work'; })) {
                    value = false;
                }
            });
            return value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PermissionUserActivityComponent.prototype, "checkAllEventInfo", {
        get: function () {
            var value = true;
            var listPms = ['ActivityViewActivityDetail', 'ActivityViewComments', 'ActivityAddComment', 'ActivityHistories'];
            listPms.forEach(function (pms) {
                if (!__WEBPACK_IMPORTED_MODULE_2__permission_user_component__["a" /* PermissionUserComponent */].listPermissionData.find(function (i) { return i.functionWeb.no === pms && i.category === 'Event'; })) {
                    value = false;
                }
            });
            return value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PermissionUserActivityComponent.prototype, "checkAllActivityInfo", {
        get: function () {
            var value = true;
            var listPms = ['ActivityViewActivityDetail', 'ActivityViewComments', 'ActivityAddComment', 'ActivityHistories'];
            listPms.forEach(function (pms) {
                if (!__WEBPACK_IMPORTED_MODULE_2__permission_user_component__["a" /* PermissionUserComponent */].listPermissionData.find(function (i) { return i.functionWeb.no === pms && i.category === 'Work'; })) {
                    value = false;
                }
            });
            return value;
        },
        enumerable: true,
        configurable: true
    });
    PermissionUserActivityComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getPermissionList('Activity');
        this.listPermissionData = __WEBPACK_IMPORTED_MODULE_2__permission_user_component__["a" /* PermissionUserComponent */].listPermissionData.filter(function (i) { return i.functionWeb.no.startsWith('Activity'); });
        this.userGroupService.checkPermission().subscribe(function (data) {
            _this.listPermissionData = __WEBPACK_IMPORTED_MODULE_2__permission_user_component__["a" /* PermissionUserComponent */].listPermissionData.filter(function (i) { return i.functionWeb.no.startsWith('Activity'); });
            _this.checkViewType();
        });
    };
    PermissionUserActivityComponent.prototype.getPermissionList = function (module) {
        var _this = this;
        this.userGroupService.getListPermissionDefault(module).subscribe(function (data) {
            _this.listPermission = data;
            _this.checkViewType();
        });
    };
    PermissionUserActivityComponent.prototype.checkViewType = function () {
        if (this.listPermissionData.length > 0) {
            this.listPmsEvent = this.listPermissionData.filter(function (i) { return i.category === 'Event'; });
            this.listPmsActivity = this.listPermissionData.filter(function (i) { return i.category === 'Work'; });
            if (this.listPmsEvent.length > 0) {
                var pmsEvent = this.listPmsEvent[0];
                if (pmsEvent.type === true) {
                    this.viewAllEvent = true;
                    this.viewEventByCurrentUser = true;
                }
                else if (pmsEvent.type === false) {
                    this.viewEventByCurrentUser = true;
                }
            }
            else {
                this.viewAllEvent = null;
                this.viewEventByCurrentUser = null;
            }
            if (this.listPmsActivity.length > 0) {
                var pmsCategory = this.listPmsActivity[0];
                if (pmsCategory.type === true) {
                    this.viewAllActivity = true;
                    this.viewActivityByCurrentUser = true;
                }
                else if (pmsCategory.type === false) {
                    this.viewActivityByCurrentUser = true;
                }
            }
            else {
                this.viewAllActivity = null;
                this.viewActivityByCurrentUser = null;
            }
        }
    };
    PermissionUserActivityComponent.prototype.selectAll = function (permission) {
        var _this = this;
        permission.forEach(function (i) { return i.checkboxSelected = _this.isSelectAll; });
    };
    PermissionUserActivityComponent.prototype.getCheckedPermission = function (no, category) {
        if (this.listPermission && this.listPermission.length > 0) {
            // return this.listPermission.find(i => i.no === no) ? true : false;
            return __WEBPACK_IMPORTED_MODULE_2__permission_user_component__["a" /* PermissionUserComponent */].listPermissionData.find(function (i) { return i.functionWeb.no === no && i.category === category; }) ? true : false;
        }
        else {
            return false;
        }
    };
    PermissionUserActivityComponent.prototype.clickPermission = function (value, category) {
        var pms = this.listPermission.find(function (i) { return i.no === value; });
        var valueInListTotal = __WEBPACK_IMPORTED_MODULE_2__permission_user_component__["a" /* PermissionUserComponent */].listPermissionData.find(function (i) { return i.functionWeb.no === pms.no && i.category === category; });
        if (valueInListTotal) {
            var idx = __WEBPACK_IMPORTED_MODULE_2__permission_user_component__["a" /* PermissionUserComponent */].listPermissionData.findIndex(function (i) { return i.functionWeb.no === pms.no && i.category === category; });
            __WEBPACK_IMPORTED_MODULE_2__permission_user_component__["a" /* PermissionUserComponent */].listPermissionData.splice(idx, 1);
        }
        else {
            var valuePushToList = {
                category: category,
                functionWeb: pms,
                type: category === 'Event' ? this.viewTypeEvent : this.viewTypeActivity,
                userGroup: null
            };
            __WEBPACK_IMPORTED_MODULE_2__permission_user_component__["a" /* PermissionUserComponent */].listPermissionData.push(valuePushToList);
        }
    };
    PermissionUserActivityComponent.prototype.viewAllEventClick = function (value) {
        this.viewAllEvent = value;
        this.viewEventByCurrentUser = value;
        // // tslint:disable-next-line:max-line-length
        // PermissionUserComponent.listPermissionData.filter(i => i.functionWeb.no.startsWith('Activity') && i.category === 'Event').forEach(i => i.type = this.viewTypeEvent);
        var listPms = ['ActivityAddActivity', 'ActivityViewInformation', 'ActivityEditActivity', 'ActivityConfigEventType', 'ActivityDeleteActivity', 'ActivityExportFile', 'ActivityImportDownloadActivityTemplate',
            'ActivityViewActivityDetail', 'ActivityViewComments', 'ActivityAddComment', 'ActivityHistories'];
        this.toggleList(listPms, value, 'Event');
    };
    PermissionUserActivityComponent.prototype.viewUserEventClick = function (value) {
        var _this = this;
        this.viewEventByCurrentUser = value;
        // tslint:disable-next-line:max-line-length
        __WEBPACK_IMPORTED_MODULE_2__permission_user_component__["a" /* PermissionUserComponent */].listPermissionData.filter(function (i) { return i.functionWeb.no.startsWith('Activity') && i.category === 'Event'; }).forEach(function (i) { return i.type = _this.viewTypeEvent; });
    };
    PermissionUserActivityComponent.prototype.viewAllActivityClick = function (value) {
        // this.viewAllActivity = value;
        // this.viewActivityByCurrentUser = value;
        // // tslint:disable-next-line:max-line-length
        // PermissionUserComponent.listPermissionData.filter( i => i.functionWeb.no.startsWith( 'Activity' ) && i.category === 'Work' ).forEach( i => i.type = this.viewTypeActivity );
        var listPms = ['ActivityAddActivity', 'ActivityViewInformation', 'ActivityEditActivity', 'ActivityDeleteActivity', 'ActivityExportFile', 'ActivityImportDownloadActivityTemplate',
            'ActivityViewActivityDetail', 'ActivityViewComments', 'ActivityAddComment', 'ActivityHistories'];
        this.toggleList(listPms, value, 'Work');
    };
    PermissionUserActivityComponent.prototype.viewUserActivityClick = function (value) {
        var _this = this;
        this.viewActivityByCurrentUser = value;
        // tslint:disable-next-line:max-line-length
        __WEBPACK_IMPORTED_MODULE_2__permission_user_component__["a" /* PermissionUserComponent */].listPermissionData.filter(function (i) { return i.functionWeb.no.startsWith('Activity') && i.category === 'Work'; }).forEach(function (i) { return i.type = _this.viewTypeActivity; });
    };
    PermissionUserActivityComponent.prototype.toggleProspectList = function (value, category) {
        // tslint:disable-next-line:max-line-length
        var listPms = ['ActivityAddActivity', 'ActivityViewInformation', 'ActivityEditActivity', 'ActivityConfigEventType', 'ActivityDeleteActivity', 'ActivityExportFile', 'ActivityImportDownloadActivityTemplate'];
        this.toggleList(listPms, value, category);
    };
    PermissionUserActivityComponent.prototype.toggleProspectInfo = function (value, category) {
        var listPms = ['ActivityViewActivityDetail', 'ActivityViewComments', 'ActivityAddComment', 'ActivityHistories'];
        this.toggleList(listPms, value, category);
    };
    PermissionUserActivityComponent.prototype.toggleList = function (pmsArr, value, category) {
        var _this = this;
        pmsArr.forEach(function (pmsItem) {
            // tslint:disable-next-line:max-line-length
            var valueInListTotal = __WEBPACK_IMPORTED_MODULE_2__permission_user_component__["a" /* PermissionUserComponent */].listPermissionData.find(function (i) { return i.functionWeb.no === pmsItem && i.category === category; });
            if (value) {
                if (!valueInListTotal) {
                    var pms = _this.listPermission.find(function (i) { return i.no === pmsItem; });
                    var valuePushToList = {
                        category: category,
                        functionWeb: pms,
                        type: category === 'Event' ? _this.viewTypeEvent : _this.viewTypeActivity,
                        userGroup: null
                    };
                    __WEBPACK_IMPORTED_MODULE_2__permission_user_component__["a" /* PermissionUserComponent */].listPermissionData.push(valuePushToList);
                }
            }
            else {
                if (valueInListTotal) {
                    var idx = __WEBPACK_IMPORTED_MODULE_2__permission_user_component__["a" /* PermissionUserComponent */].listPermissionData.findIndex(function (i) { return i.functionWeb.no === pmsItem && i.category === category; });
                    __WEBPACK_IMPORTED_MODULE_2__permission_user_component__["a" /* PermissionUserComponent */].listPermissionData.splice(idx, 1);
                }
            }
        });
    };
    PermissionUserActivityComponent = PermissionUserActivityComponent_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-permission-user-activity',
            template: __webpack_require__("../../../../../src/app/layout/permission/permission-user/permission-user-activity/permission-user-activity.component.html"),
            styles: [__webpack_require__("../../../../../src/app/layout/permission/permission-user/permission-user-activity/permission-user-activity.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_services__["o" /* UserGroupService */],
            __WEBPACK_IMPORTED_MODULE_1__shared_services__["j" /* DataService */]])
    ], PermissionUserActivityComponent);
    return PermissionUserActivityComponent;
    var PermissionUserActivityComponent_1;
}());



/***/ }),

/***/ "../../../../../src/app/layout/permission/permission-user/permission-user-campaign/permission-user-campaign.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"listPermission && listPermission.length > 0\">\n  <div class=\"row mt-3\">\n    <div class=\"col-md-3\"><b>Xem chiến dịch</b></div>\n    <div class=\"col-md-2 text-center center-parent\">\n      <label class=\"custom-control custom-checkbox mb-0 pr-3\">\n        <input type=\"checkbox\" class=\"custom-control-input\" (click)=\"viewAllClick($event.target.checked)\" [(ngModel)]=\"viewAll\">\n        <span class=\"custom-control-indicator\"></span>\n      </label>\n      Tất cả\n    </div>\n    <div class=\"col-md-2 text-center  text-nowrap center-parent\">\n      <label class=\"custom-control custom-checkbox mb-0 pr-3\">\n        <input type=\"checkbox\" class=\"custom-control-input custom-control-input--disabled\" (click)=\"viewUserClick($event.target.checked)\" [disabled]=\"viewAll\" [(ngModel)]=\"viewByCurrentUser\">\n        <span class=\"custom-control-indicator\"></span>\n      </label>\n      Theo người dùng\n    </div>\n  </div>\n\n  <div class=\"row mt-2\">\n    <div class=\"col-md-3 font-weight-bold\">Danh sách chiến dịch</div>\n    <div class=\"col-md-1 text-center\">\n      <label class=\"custom-control custom-checkbox\">\n        <input type=\"checkbox\" class=\"custom-control-input custom-control-input--none\" [disabled]=\"disabledPms\" [checked]=\"checkAllProspectList\" (click)=\"toggleProspectList($event.target.checked)\">\n        <span class=\"custom-control-indicator\"></span>\n      </label>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-3\"><i class=\"fa fa-angle-right mx-2\" aria-hidden=\"true\"></i>Thêm mới chiến dịch</div>\n    <div class=\"col-md-1 text-center\">\n      <label class=\"custom-control custom-checkbox\">\n        <input type=\"checkbox\" class=\"custom-control-input custom-control-input--none\" [disabled]=\"disabledPms\" (click)=\"clickPermission($event.target.value)\" value=\"CampaignAddCampaign\" [checked]=\"getCheckedPermission('CampaignAddCampaign')\">\n        <span class=\"custom-control-indicator\"></span>\n      </label>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-3\"><i class=\"fa fa-angle-right mx-2\" aria-hidden=\"true\"></i>Xem thông tin chiến dịch</div>\n    <div class=\"col-md-1 text-center\">\n      <label class=\"custom-control custom-checkbox\">\n        <input type=\"checkbox\" class=\"custom-control-input custom-control-input--none\" [disabled]=\"disabledPms\" (click)=\"clickPermission($event.target.value)\" value=\"CampaignViewInformation\" [checked]=\"getCheckedPermission('CampaignViewInformation')\" #viewProspectInfo>\n        <span class=\"custom-control-indicator\"></span>\n      </label>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-3\"><i class=\"fa fa-angle-right mx-2\" aria-hidden=\"true\"></i>Sửa chiến dịch</div>\n    <div class=\"col-md-1 text-center\">\n      <label class=\"custom-control custom-checkbox\">\n        <input type=\"checkbox\" class=\"custom-control-input custom-control-input--none\" [disabled]=\"disabledPms\" (click)=\"clickPermission($event.target.value)\" value=\"CampaignEditCampaign\" [checked]=\"getCheckedPermission('CampaignEditCampaign')\" #editCampaign>\n        <span class=\"custom-control-indicator\"></span>\n      </label>\n    </div>\n  </div>\n\n  <div class=\"row\">\n    <div class=\"col-md-3\"><i class=\"fa fa-angle-double-right ml-3 mr-2\" aria-hidden=\"true\"></i>Cấu hình Nguồn chiến dịch</div>\n    <div class=\"col-md-1 text-center\">\n      <label class=\"custom-control custom-checkbox\">\n        <input type=\"checkbox\" class=\"custom-control-input custom-control-input--none\" [disabled]=\"disabledPms || !editCampaign.checked\" (click)=\"clickPermission($event.target.value)\" value=\"CampaignConfigApproachChannel\" [checked]=\"getCheckedPermission('CampaignConfigApproachChannel') && editCampaign.checked\">\n        <span class=\"custom-control-indicator\"></span>\n      </label>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-3\"><i class=\"fa fa-angle-double-right ml-3 mr-2\" aria-hidden=\"true\"></i>Cấu hình Loại chiến dịch</div>\n    <div class=\"col-md-1 text-center\">\n      <label class=\"custom-control custom-checkbox\">\n        <input type=\"checkbox\" class=\"custom-control-input custom-control-input--none\" [disabled]=\"disabledPms || !editCampaign.checked\" (click)=\"clickPermission($event.target.value)\" value=\"CampaignConfigType\" [checked]=\"getCheckedPermission('CampaignConfigType') && editCampaign.checked\">\n        <span class=\"custom-control-indicator\"></span>\n      </label>\n    </div>\n  </div>\n\n  <div class=\"row\">\n    <div class=\"col-md-3\"><i class=\"fa fa-angle-right mx-2\" aria-hidden=\"true\"></i>Xóa chiến dịch</div>\n    <div class=\"col-md-1 text-center\">\n      <label class=\"custom-control custom-checkbox\">\n        <input type=\"checkbox\" class=\"custom-control-input custom-control-input--none\" [disabled]=\"disabledPms\" (click)=\"clickPermission($event.target.value)\" value=\"CampaignDeleteCampaign\" [checked]=\"getCheckedPermission('CampaignDeleteCampaign')\">\n        <span class=\"custom-control-indicator\"></span>\n      </label>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-3\"><i class=\"fa fa-angle-right mx-2\" aria-hidden=\"true\"></i>Xuất file</div>\n    <div class=\"col-md-1 text-center\">\n      <label class=\"custom-control custom-checkbox\">\n        <input type=\"checkbox\" class=\"custom-control-input custom-control-input--none\" [disabled]=\"disabledPms\" (click)=\"clickPermission($event.target.value)\" value=\"CampaignExportFile\" [checked]=\"getCheckedPermission('CampaignExportFile')\">\n        <span class=\"custom-control-indicator\"></span>\n      </label>\n    </div>\n  </div>\n\n  <div class=\"row mt-2\">\n    <div class=\"col-md-3 font-weight-bold\">Thông tin chiến dịch</div>\n    <div class=\"col-md-1 text-center\">\n      <label class=\"custom-control custom-checkbox\">\n        <input type=\"checkbox\" class=\"custom-control-input custom-control-input--none\" [disabled]=\"disabledPms || !viewProspectInfo.checked\" [checked]=\"checkAllProspectInfo && viewProspectInfo.checked\" (click)=\"toggleProspectInfo($event.target.checked)\">\n        <span class=\"custom-control-indicator\"></span>\n      </label>\n    </div>\n  </div>\n  <!-- <div class=\"row\">\n    <div class=\"col-md-3\"><i class=\"fa fa-angle-right mx-2\" aria-hidden=\"true\"></i>Sơ lược</div>\n    <div class=\"col-md-1 text-center\">\n      <label class=\"custom-control custom-checkbox\">\n        <input type=\"checkbox\" class=\"custom-control-input custom-control-input--none\" [disabled]=\"disabledPms || !viewProspectInfo.checked\" (click)=\"clickPermission($event.target.value)\" value=\"CampaignCampaignSummary\" [checked]=\"getCheckedPermission('CampaignCampaignSummary') && viewProspectInfo.checked\">\n        <span class=\"custom-control-indicator\"></span>\n      </label>\n    </div>\n  </div> -->\n  <div class=\"row\">\n    <div class=\"col-md-3\"><i class=\"fa fa-angle-right mx-2\" aria-hidden=\"true\"></i>Xem chi tiết</div>\n    <div class=\"col-md-1 text-center\">\n      <label class=\"custom-control custom-checkbox\">\n        <input type=\"checkbox\" class=\"custom-control-input custom-control-input--none\" [disabled]=\"disabledPms || !viewProspectInfo.checked\" (click)=\"clickPermission($event.target.value)\" value=\"CampaignViewCampaignDetail\" [checked]=\"getCheckedPermission('CampaignViewCampaignDetail') && viewProspectInfo.checked\">\n        <span class=\"custom-control-indicator\"></span>\n      </label>\n    </div>\n  </div>\n  <!-- No use -->\n  <!-- <div class=\"row\">\n    <div class=\"col-md-3\"><i class=\"fa fa-angle-right mx-2\" aria-hidden=\"true\"></i>Xem chi tiết dự kiến và thực tế</div>\n    <div class=\"col-md-1 text-center\">\n      <label class=\"custom-control custom-checkbox\">\n        <input type=\"checkbox\" class=\"custom-control-input custom-control-input--none\" [disabled]=\"disabledPms || !viewProspectInfo.checked\" (click)=\"clickPermission($event.target.value)\" value=\"CampaignViewExpectedCampaign\" [checked]=\"getCheckedPermission('CampaignViewExpectedCampaign') && viewProspectInfo.checked\">\n        <span class=\"custom-control-indicator\"></span>\n      </label>\n    </div>\n  </div> -->\n  <div class=\"row\">\n    <div class=\"col-md-3\"><i class=\"fa fa-angle-right mx-2\" aria-hidden=\"true\"></i>Xem bình luận</div>\n    <div class=\"col-md-1 text-center\">\n      <label class=\"custom-control custom-checkbox\">\n        <input type=\"checkbox\" class=\"custom-control-input custom-control-input--none\" [disabled]=\"disabledPms || !viewProspectInfo.checked\" (click)=\"clickPermission($event.target.value)\" value=\"CampaignViewComments\" [checked]=\"getCheckedPermission('CampaignViewComments') && viewProspectInfo.checked\">\n        <span class=\"custom-control-indicator\"></span>\n      </label>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-3\"><i class=\"fa fa-angle-right mx-2\" aria-hidden=\"true\"></i>Đăng bình luận</div>\n    <div class=\"col-md-1 text-center\">\n      <label class=\"custom-control custom-checkbox\">\n        <input type=\"checkbox\" class=\"custom-control-input custom-control-input--none\" [disabled]=\"disabledPms || !viewProspectInfo.checked\" (click)=\"clickPermission($event.target.value)\" value=\"CampaignAddComment\" [checked]=\"getCheckedPermission('CampaignAddComment') && viewProspectInfo.checked\">\n        <span class=\"custom-control-indicator\"></span>\n      </label>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-3\"><i class=\"fa fa-angle-right mx-2\" aria-hidden=\"true\"></i>Các hoạt động</div>\n    <div class=\"col-md-1 text-center\">\n      <label class=\"custom-control custom-checkbox\">\n        <input type=\"checkbox\" class=\"custom-control-input custom-control-input--none\" [disabled]=\"disabledPms || !viewProspectInfo.checked\" (click)=\"clickPermission($event.target.value)\" value=\"CampaignActivities\" [checked]=\"getCheckedPermission('CampaignActivities') && viewProspectInfo.checked\">\n        <span class=\"custom-control-indicator\"></span>\n      </label>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-3\"><i class=\"fa fa-angle-right mx-2\" aria-hidden=\"true\"></i>Các cập nhật</div>\n    <div class=\"col-md-1 text-center\">\n      <label class=\"custom-control custom-checkbox\">\n        <input type=\"checkbox\" class=\"custom-control-input custom-control-input--none\" [disabled]=\"disabledPms || !viewProspectInfo.checked\" (click)=\"clickPermission($event.target.value)\" value=\"CampaignHistories\" [checked]=\"getCheckedPermission('CampaignHistories') && viewProspectInfo.checked\">\n        <span class=\"custom-control-indicator\"></span>\n      </label>\n    </div>\n  </div>\n\n  <div class=\"my-4 text-center\">\n    <button class=\"btn btn-secondary ml-2\" routerLink=\"../opportunity\">\n      <i class=\"fa fa-angle-left mx-2\" aria-hidden=\"true\"></i> Trở về\n    </button>\n    <button class=\"btn btn-primary ml-2\" routerLink=\"../activity\">\n      Tiếp <i class=\"fa fa-angle-right mx-2\" aria-hidden=\"true\"></i>\n    </button>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/layout/permission/permission-user/permission-user-campaign/permission-user-campaign.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host /deep/ .btn-secondary {\n  background-color: #b0b0b0; }\n\n.custom-control-input--disabled:disabled ~ .custom-control-indicator {\n  background-color: #17a2b8;\n  opacity: .5; }\n\n.custom-control-input--none:disabled ~ .custom-control-indicator {\n  background-image: none; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/layout/permission/permission-user/permission-user-campaign/permission-user-campaign.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PermissionUserCampaignComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services__ = __webpack_require__("../../../../../src/app/shared/services/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__permission_user_component__ = __webpack_require__("../../../../../src/app/layout/permission/permission-user/permission-user.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PermissionUserCampaignComponent = /** @class */ (function () {
    function PermissionUserCampaignComponent(userGroupService) {
        this.userGroupService = userGroupService;
        this.isSelectAll = false;
        this.listPermissionData = [];
    }
    PermissionUserCampaignComponent_1 = PermissionUserCampaignComponent;
    Object.defineProperty(PermissionUserCampaignComponent.prototype, "viewType", {
        get: function () {
            if (this.viewAll) {
                PermissionUserCampaignComponent_1.campaignViewType = true;
                return true;
            }
            else if (this.viewByCurrentUser) {
                PermissionUserCampaignComponent_1.campaignViewType = false;
                return false;
            }
            else {
                PermissionUserCampaignComponent_1.campaignViewType = null;
                return null;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PermissionUserCampaignComponent.prototype, "disabledPms", {
        get: function () {
            if (this.viewType == null) {
                return true;
            }
            else {
                return false;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PermissionUserCampaignComponent.prototype, "checkAllProspectList", {
        get: function () {
            var value = true;
            var listPms = ['CampaignAddCampaign', 'CampaignViewInformation', 'CampaignEditCampaign', 'CampaignDeleteCampaign', 'CampaignExportFile'];
            listPms.forEach(function (pms) {
                if (!__WEBPACK_IMPORTED_MODULE_2__permission_user_component__["a" /* PermissionUserComponent */].listPermissionData.find(function (i) { return i.functionWeb.no === pms; })) {
                    value = false;
                }
            });
            return value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PermissionUserCampaignComponent.prototype, "checkAllProspectInfo", {
        get: function () {
            var value = true;
            var listPms = ['CampaignCampaignSummary', 'CampaignViewCampaignDetail', 'CampaignViewExpectedCampaign', 'CampaignViewComments', 'CampaignAddComment', 'CampaignActivities', 'CampaignHistories'];
            listPms.forEach(function (pms) {
                if (!__WEBPACK_IMPORTED_MODULE_2__permission_user_component__["a" /* PermissionUserComponent */].listPermissionData.find(function (i) { return i.functionWeb.no === pms; })) {
                    value = false;
                }
            });
            return value;
        },
        enumerable: true,
        configurable: true
    });
    PermissionUserCampaignComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getPermissionList('Campaign');
        this.listPermissionData = __WEBPACK_IMPORTED_MODULE_2__permission_user_component__["a" /* PermissionUserComponent */].listPermissionData.filter(function (i) { return i.functionWeb.no.startsWith('Campaign'); });
        this.userGroupService.checkPermission().subscribe(function (data) {
            _this.listPermissionData = __WEBPACK_IMPORTED_MODULE_2__permission_user_component__["a" /* PermissionUserComponent */].listPermissionData.filter(function (i) { return i.functionWeb.no.startsWith('Campaign'); });
            _this.checkViewType();
        });
    };
    PermissionUserCampaignComponent.prototype.getPermissionList = function (module) {
        var _this = this;
        this.userGroupService.getListPermissionDefault(module).subscribe(function (data) {
            _this.listPermission = data;
            _this.checkViewType();
        });
    };
    PermissionUserCampaignComponent.prototype.checkViewType = function () {
        if (this.listPermissionData.length > 0) {
            var pms = this.listPermissionData[0];
            if (pms) {
                if (pms.type === true) {
                    this.viewAll = true;
                    this.viewByCurrentUser = true;
                }
                else if (pms.type === false) {
                    this.viewByCurrentUser = true;
                }
            }
            else {
                this.viewAll = null;
                this.viewByCurrentUser = null;
            }
        }
    };
    PermissionUserCampaignComponent.prototype.selectAll = function (permission) {
        var _this = this;
        permission.forEach(function (i) { return i.checkboxSelected = _this.isSelectAll; });
    };
    PermissionUserCampaignComponent.prototype.getCheckedPermission = function (no) {
        if (this.listPermission && this.listPermission.length > 0) {
            // return this.listPermission.find(i => i.no === no) ? true : false;
            return __WEBPACK_IMPORTED_MODULE_2__permission_user_component__["a" /* PermissionUserComponent */].listPermissionData.find(function (i) { return i.functionWeb.no === no; }) ? true : false;
        }
        else {
            return false;
        }
    };
    PermissionUserCampaignComponent.prototype.clickPermission = function (value) {
        var pms = this.listPermission.find(function (i) { return i.no === value; });
        var valueInListTotal = __WEBPACK_IMPORTED_MODULE_2__permission_user_component__["a" /* PermissionUserComponent */].listPermissionData.find(function (i) { return i.functionWeb.no === pms.no; });
        if (valueInListTotal) {
            var idx = __WEBPACK_IMPORTED_MODULE_2__permission_user_component__["a" /* PermissionUserComponent */].listPermissionData.findIndex(function (i) { return i.functionWeb.no === pms.no; });
            __WEBPACK_IMPORTED_MODULE_2__permission_user_component__["a" /* PermissionUserComponent */].listPermissionData.splice(idx, 1);
        }
        else {
            var valuePushToList = {
                category: null,
                functionWeb: pms,
                type: this.viewType,
                userGroup: null
            };
            __WEBPACK_IMPORTED_MODULE_2__permission_user_component__["a" /* PermissionUserComponent */].listPermissionData.push(valuePushToList);
        }
    };
    PermissionUserCampaignComponent.prototype.viewAllClick = function (value) {
        this.viewAll = value;
        this.viewByCurrentUser = value;
        // PermissionUserComponent.listPermissionData.filter( i => i.functionWeb.no.startsWith( 'Campaign' ) ).forEach( i => i.type = this.viewType );
        var listPms = ['CampaignAddCampaign', 'CampaignViewInformation', 'CampaignEditCampaign',
            'CampaignConfigApproachChannel', 'CampaignConfigType',
            'CampaignDeleteCampaign', 'CampaignExportFile',
            'CampaignViewCampaignDetail', 'CampaignViewComments', 'CampaignAddComment', 'CampaignActivities', 'CampaignHistories'];
        this.toggleList(listPms, value);
    };
    PermissionUserCampaignComponent.prototype.viewUserClick = function (value) {
        var _this = this;
        this.viewByCurrentUser = value;
        __WEBPACK_IMPORTED_MODULE_2__permission_user_component__["a" /* PermissionUserComponent */].listPermissionData.filter(function (i) { return i.functionWeb.no.startsWith('Campaign'); }).forEach(function (i) { return i.type = _this.viewType; });
    };
    PermissionUserCampaignComponent.prototype.toggleProspectList = function (value) {
        var listPms = ['CampaignAddCampaign', 'CampaignViewInformation', 'CampaignEditCampaign',
            'CampaignConfigApproachChannel', 'CampaignConfigType',
            'CampaignDeleteCampaign', 'CampaignExportFile'];
        this.toggleList(listPms, value);
    };
    PermissionUserCampaignComponent.prototype.toggleProspectInfo = function (value) {
        var listPms = ['CampaignCampaignSummary', 'CampaignViewCampaignDetail', 'CampaignViewExpectedCampaign', 'CampaignViewComments', 'CampaignAddComment', 'CampaignActivities', 'CampaignHistories'];
        this.toggleList(listPms, value);
    };
    PermissionUserCampaignComponent.prototype.toggleList = function (pmsArr, value) {
        var _this = this;
        pmsArr.forEach(function (pmsItem) {
            var valueInListTotal = __WEBPACK_IMPORTED_MODULE_2__permission_user_component__["a" /* PermissionUserComponent */].listPermissionData.find(function (i) { return i.functionWeb.no === pmsItem; });
            if (value) {
                if (!valueInListTotal) {
                    var pms = _this.listPermission.find(function (i) { return i.no === pmsItem; });
                    var valuePushToList = {
                        category: null,
                        functionWeb: pms,
                        type: _this.viewType,
                        userGroup: null
                    };
                    __WEBPACK_IMPORTED_MODULE_2__permission_user_component__["a" /* PermissionUserComponent */].listPermissionData.push(valuePushToList);
                }
            }
            else {
                if (valueInListTotal) {
                    var idx = __WEBPACK_IMPORTED_MODULE_2__permission_user_component__["a" /* PermissionUserComponent */].listPermissionData.findIndex(function (i) { return i.functionWeb.no === pmsItem; });
                    __WEBPACK_IMPORTED_MODULE_2__permission_user_component__["a" /* PermissionUserComponent */].listPermissionData.splice(idx, 1);
                }
            }
        });
    };
    PermissionUserCampaignComponent = PermissionUserCampaignComponent_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-permission-user-campaign',
            template: __webpack_require__("../../../../../src/app/layout/permission/permission-user/permission-user-campaign/permission-user-campaign.component.html"),
            styles: [__webpack_require__("../../../../../src/app/layout/permission/permission-user/permission-user-campaign/permission-user-campaign.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_services__["o" /* UserGroupService */]])
    ], PermissionUserCampaignComponent);
    return PermissionUserCampaignComponent;
    var PermissionUserCampaignComponent_1;
}());



/***/ }),

/***/ "../../../../../src/app/layout/permission/permission-user/permission-user-contact/permission-user-contact.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"listPermission && listPermission.length > 0\">\n  <div class=\"row mt-3\">\n    <div class=\"col-md-3\"><b>Xem liên hệ</b></div>\n    <div class=\"col-md-2 text-center center-parent\">\n      <label class=\"custom-control custom-checkbox mb-0 pr-3\">\n        <input type=\"checkbox\" class=\"custom-control-input\" (click)=\"viewAllClick($event.target.checked)\" [(ngModel)]=\"viewAll\">\n        <span class=\"custom-control-indicator\"></span>\n      </label>\n      Tất cả\n    </div>\n    <div class=\"col-md-2 text-center text-nowrap center-parent\">\n      <label class=\"custom-control custom-checkbox mb-0 pr-3\">\n        <input type=\"checkbox\" class=\"custom-control-input custom-control-input--disabled\" (click)=\"viewUserClick($event.target.checked)\" [disabled]=\"viewAll\" [(ngModel)]=\"viewByCurrentUser\">\n        <span class=\"custom-control-indicator\"></span>\n      </label>\n      Theo người dùng\n    </div>\n  </div>\n\n  <div class=\"row mt-2\">\n    <div class=\"col-md-3 font-weight-bold\">Danh sách liên hệ</div>\n    <div class=\"col-md-1 text-center\">\n      <label class=\"custom-control custom-checkbox\">\n        <input type=\"checkbox\" class=\"custom-control-input custom-control-input--none\" [disabled]=\"disabledPms\" [checked]=\"checkAllContactList\" (click)=\"toggleContactList($event.target.checked)\">\n        <span class=\"custom-control-indicator\"></span>\n      </label>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-3\"><i class=\"fa fa-angle-right mx-2\" aria-hidden=\"true\"></i>Thêm mới liên hệ</div>\n    <div class=\"col-md-1 text-center\">\n      <label class=\"custom-control custom-checkbox\">\n        <input type=\"checkbox\" class=\"custom-control-input custom-control-input--none\" [disabled]=\"disabledPms\" (click)=\"clickPermission($event.target.value)\" value=\"ContactAddContact\" [checked]=\"getCheckedPermission('ContactAddContact')\">\n        <span class=\"custom-control-indicator\"></span>\n      </label>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-3\"><i class=\"fa fa-angle-right mx-2\" aria-hidden=\"true\"></i>Xem thông tin liên hệ</div>\n    <div class=\"col-md-1 text-center\">\n      <label class=\"custom-control custom-checkbox\">\n        <input type=\"checkbox\" class=\"custom-control-input custom-control-input--none\" [disabled]=\"disabledPms\" (click)=\"clickPermission($event.target.value)\" value=\"ContactViewInformation\" [checked]=\"getCheckedPermission('ContactViewInformation')\" #viewProspectInfo>\n        <span class=\"custom-control-indicator\"></span>\n      </label>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-3\"><i class=\"fa fa-angle-right mx-2\" aria-hidden=\"true\"></i>Sửa liên hệ</div>\n    <div class=\"col-md-1 text-center\">\n      <label class=\"custom-control custom-checkbox\">\n        <input type=\"checkbox\" class=\"custom-control-input custom-control-input--none\" [disabled]=\"disabledPms\" (click)=\"clickPermission($event.target.value)\" value=\"ContactEditContact\" [checked]=\"getCheckedPermission('ContactEditContact')\">\n        <span class=\"custom-control-indicator\"></span>\n      </label>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-3\"><i class=\"fa fa-angle-right mx-2\" aria-hidden=\"true\"></i>Gửi email cho liên hệ</div>\n    <div class=\"col-md-1 text-center\">\n      <label class=\"custom-control custom-checkbox\">\n        <input type=\"checkbox\" class=\"custom-control-input custom-control-input--none\" [disabled]=\"disabledPms\" (click)=\"clickPermission($event.target.value)\" value=\"ContactSendEmail\" [checked]=\"getCheckedPermission('ContactSendEmail')\">\n        <span class=\"custom-control-indicator\"></span>\n      </label>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-3\"><i class=\"fa fa-angle-right mx-2\" aria-hidden=\"true\"></i>Xóa liên hệ</div>\n    <div class=\"col-md-1 text-center\">\n      <label class=\"custom-control custom-checkbox\">\n        <input type=\"checkbox\" class=\"custom-control-input custom-control-input--none\" [disabled]=\"disabledPms\" (click)=\"clickPermission($event.target.value)\" value=\"ContactDeleteContact\" [checked]=\"getCheckedPermission('ContactDeleteContact')\">\n        <span class=\"custom-control-indicator\"></span>\n      </label>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-3\"><i class=\"fa fa-angle-right mx-2\" aria-hidden=\"true\"></i>Nhập file + Tải template</div>\n    <div class=\"col-md-1 text-center\">\n      <label class=\"custom-control custom-checkbox\">\n        <input type=\"checkbox\" class=\"custom-control-input custom-control-input--none\" [disabled]=\"disabledPms\" (click)=\"clickPermission($event.target.value)\" value=\"ContactImportDownloadTemplate\" [checked]=\"getCheckedPermission('ContactImportDownloadTemplate')\">\n        <span class=\"custom-control-indicator\"></span>\n      </label>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-3\"><i class=\"fa fa-angle-right mx-2\" aria-hidden=\"true\"></i>Xuất file</div>\n    <div class=\"col-md-1 text-center\">\n      <label class=\"custom-control custom-checkbox\">\n        <input type=\"checkbox\" class=\"custom-control-input custom-control-input--none\" [disabled]=\"disabledPms\" (click)=\"clickPermission($event.target.value)\" value=\"ContactExportFile\" [checked]=\"getCheckedPermission('ContactExportFile')\">\n        <span class=\"custom-control-indicator\"></span>\n      </label>\n    </div>\n  </div>\n\n  <div class=\"row mt-2\">\n    <div class=\"col-md-3 font-weight-bold\">Thông tin liên hệ</div>\n    <div class=\"col-md-1 text-center\">\n      <label class=\"custom-control custom-checkbox\">\n        <input type=\"checkbox\" class=\"custom-control-input custom-control-input--none\" [disabled]=\"disabledPms || !viewProspectInfo.checked\" [checked]=\"checkAllContactInfo && viewProspectInfo.checked\" (click)=\"toggleContactInfo($event.target.checked)\">\n        <span class=\"custom-control-indicator\"></span>\n      </label>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-3\"><i class=\"fa fa-angle-right mx-2\" aria-hidden=\"true\"></i>Sơ lược</div>\n    <div class=\"col-md-1 text-center\">\n      <label class=\"custom-control custom-checkbox\">\n        <input type=\"checkbox\" class=\"custom-control-input custom-control-input--none\" [disabled]=\"disabledPms || !viewProspectInfo.checked\" (click)=\"clickPermission($event.target.value)\" value=\"ContactContactSummary\" [checked]=\"getCheckedPermission('ContactContactSummary') && viewProspectInfo.checked\">\n        <span class=\"custom-control-indicator\"></span>\n      </label>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-3\"><i class=\"fa fa-angle-right mx-2\" aria-hidden=\"true\"></i>Xem chi tiết</div>\n    <div class=\"col-md-1 text-center\">\n      <label class=\"custom-control custom-checkbox\">\n        <input type=\"checkbox\" class=\"custom-control-input custom-control-input--none\" [disabled]=\"disabledPms || !viewProspectInfo.checked\" (click)=\"clickPermission($event.target.value)\" value=\"ContactViewContactDetail\" [checked]=\"getCheckedPermission('ContactViewContactDetail') && viewProspectInfo.checked\">\n        <span class=\"custom-control-indicator\"></span>\n      </label>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-3\"><i class=\"fa fa-angle-right mx-2\" aria-hidden=\"true\"></i>Xem bình luận</div>\n    <div class=\"col-md-1 text-center\">\n      <label class=\"custom-control custom-checkbox\">\n        <input type=\"checkbox\" class=\"custom-control-input custom-control-input--none\" [disabled]=\"disabledPms || !viewProspectInfo.checked\" (click)=\"clickPermission($event.target.value)\" value=\"ContactViewComments\" [checked]=\"getCheckedPermission('ContactViewComments') && viewProspectInfo.checked\">\n        <span class=\"custom-control-indicator\"></span>\n      </label>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-3\"><i class=\"fa fa-angle-right mx-2\" aria-hidden=\"true\"></i>Đăng bình luận</div>\n    <div class=\"col-md-1 text-center\">\n      <label class=\"custom-control custom-checkbox\">\n        <input type=\"checkbox\" class=\"custom-control-input custom-control-input--none\" [disabled]=\"disabledPms || !viewProspectInfo.checked\" (click)=\"clickPermission($event.target.value)\" value=\"ContactComments\" [checked]=\"getCheckedPermission('ContactComments') && viewProspectInfo.checked\">\n        <span class=\"custom-control-indicator\"></span>\n      </label>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-3\"><i class=\"fa fa-angle-right mx-2\" aria-hidden=\"true\"></i>Các hoạt động</div>\n    <div class=\"col-md-1 text-center\">\n      <label class=\"custom-control custom-checkbox\">\n        <input type=\"checkbox\" class=\"custom-control-input custom-control-input--none\" [disabled]=\"disabledPms || !viewProspectInfo.checked\" (click)=\"clickPermission($event.target.value)\" value=\"ContactActivities\" [checked]=\"getCheckedPermission('ContactActivities') && viewProspectInfo.checked\">\n        <span class=\"custom-control-indicator\"></span>\n      </label>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-3\"><i class=\"fa fa-angle-right mx-2\" aria-hidden=\"true\"></i>Các cập nhật</div>\n    <div class=\"col-md-1 text-center\">\n      <label class=\"custom-control custom-checkbox\">\n        <input type=\"checkbox\" class=\"custom-control-input custom-control-input--none\" [disabled]=\"disabledPms || !viewProspectInfo.checked\" (click)=\"clickPermission($event.target.value)\" value=\"ContactHistories\" [checked]=\"getCheckedPermission('ContactHistories') && viewProspectInfo.checked\">\n        <span class=\"custom-control-indicator\"></span>\n      </label>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-3\"><i class=\"fa fa-angle-right mx-2\" aria-hidden=\"true\"></i>Cơ hội</div>\n    <div class=\"col-md-1 text-center\">\n      <label class=\"custom-control custom-checkbox\">\n        <input type=\"checkbox\" class=\"custom-control-input custom-control-input--none\" [disabled]=\"disabledPms || !viewProspectInfo.checked\" (click)=\"clickPermission($event.target.value)\" value=\"ContactOpportunities\" [checked]=\"getCheckedPermission('ContactOpportunities') && viewProspectInfo.checked\">\n        <span class=\"custom-control-indicator\"></span>\n      </label>\n    </div>\n  </div>\n\n  <div class=\"my-4 text-center\">\n    <button class=\"btn btn-secondary ml-2\" routerLink=\"../customer\">\n      <i class=\"fa fa-angle-left mx-2\" aria-hidden=\"true\"></i> Trở về\n    </button>\n    <button class=\"btn btn-primary ml-2\" routerLink=\"../opportunity\">\n      Tiếp <i class=\"fa fa-angle-right mx-2\" aria-hidden=\"true\"></i>\n    </button>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/layout/permission/permission-user/permission-user-contact/permission-user-contact.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host /deep/ .btn-secondary {\n  background-color: #b0b0b0; }\n\n.custom-control-input--disabled:disabled ~ .custom-control-indicator {\n  background-color: #17a2b8;\n  opacity: .5; }\n\n.custom-control-input--none:disabled ~ .custom-control-indicator {\n  background-image: none; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/layout/permission/permission-user/permission-user-contact/permission-user-contact.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PermissionUserContactComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services__ = __webpack_require__("../../../../../src/app/shared/services/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__permission_user_component__ = __webpack_require__("../../../../../src/app/layout/permission/permission-user/permission-user.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PermissionUserContactComponent = /** @class */ (function () {
    function PermissionUserContactComponent(userGroupService) {
        this.userGroupService = userGroupService;
        this.isSelectAll = false;
        this.listPermissionData = [];
    }
    PermissionUserContactComponent_1 = PermissionUserContactComponent;
    Object.defineProperty(PermissionUserContactComponent.prototype, "viewType", {
        get: function () {
            if (this.viewAll) {
                PermissionUserContactComponent_1.contactViewType = true;
                return true;
            }
            else if (this.viewByCurrentUser) {
                PermissionUserContactComponent_1.contactViewType = false;
                return false;
            }
            else {
                PermissionUserContactComponent_1.contactViewType = null;
                return null;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PermissionUserContactComponent.prototype, "disabledPms", {
        get: function () {
            if (this.viewType == null) {
                return true;
            }
            else {
                return false;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PermissionUserContactComponent.prototype, "checkAllContactList", {
        get: function () {
            var value = true;
            var listPms = ['ContactAddContact', 'ContactViewInformation', 'ContactEditContact', 'ContactSendEmail', 'ContactDeleteContact', 'ContactImportDownloadTemplate', 'ContactExportFile'];
            listPms.forEach(function (pms) {
                if (!__WEBPACK_IMPORTED_MODULE_2__permission_user_component__["a" /* PermissionUserComponent */].listPermissionData.find(function (i) { return i.functionWeb.no === pms; })) {
                    value = false;
                }
            });
            return value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PermissionUserContactComponent.prototype, "checkAllContactInfo", {
        get: function () {
            var value = true;
            var listPms = ['ContactContactSummary', 'ContactViewContactDetail', 'ContactViewComments', 'ContactComments', 'ContactActivities', 'ContactHistories', 'ContactOpportunities'];
            listPms.forEach(function (pms) {
                if (!__WEBPACK_IMPORTED_MODULE_2__permission_user_component__["a" /* PermissionUserComponent */].listPermissionData.find(function (i) { return i.functionWeb.no === pms; })) {
                    value = false;
                }
            });
            return value;
        },
        enumerable: true,
        configurable: true
    });
    PermissionUserContactComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getPermissionList('Contact');
        this.listPermissionData = __WEBPACK_IMPORTED_MODULE_2__permission_user_component__["a" /* PermissionUserComponent */].listPermissionData.filter(function (i) { return i.functionWeb.no.startsWith('Contact'); });
        this.userGroupService.checkPermission().subscribe(function (data) {
            _this.listPermissionData = __WEBPACK_IMPORTED_MODULE_2__permission_user_component__["a" /* PermissionUserComponent */].listPermissionData.filter(function (i) { return i.functionWeb.no.startsWith('Contact'); });
            _this.checkViewType();
        });
    };
    PermissionUserContactComponent.prototype.getPermissionList = function (module) {
        var _this = this;
        this.userGroupService.getListPermissionDefault(module).subscribe(function (data) {
            _this.listPermission = data;
            _this.checkViewType();
        });
    };
    PermissionUserContactComponent.prototype.checkViewType = function () {
        if (this.listPermissionData.length > 0) {
            var pms = this.listPermissionData[0];
            if (pms) {
                if (pms.type === true) {
                    this.viewAll = true;
                    this.viewByCurrentUser = true;
                }
                else if (pms.type === false) {
                    this.viewByCurrentUser = true;
                }
            }
            else {
                this.viewAll = null;
                this.viewByCurrentUser = null;
            }
            PermissionUserContactComponent_1.contactViewType = this.viewType;
        }
    };
    PermissionUserContactComponent.prototype.selectAll = function (permission) {
        var _this = this;
        permission.forEach(function (i) { return i.checkboxSelected = _this.isSelectAll; });
    };
    PermissionUserContactComponent.prototype.getCheckedPermission = function (no) {
        if (this.listPermission && this.listPermission.length > 0) {
            // return this.listPermission.find(i => i.no === no) ? true : false;
            return __WEBPACK_IMPORTED_MODULE_2__permission_user_component__["a" /* PermissionUserComponent */].listPermissionData.find(function (i) { return i.functionWeb.no === no; }) ? true : false;
        }
        else {
            return false;
        }
    };
    PermissionUserContactComponent.prototype.clickPermission = function (value) {
        var pms = this.listPermission.find(function (i) { return i.no === value; });
        var valueInListTotal = __WEBPACK_IMPORTED_MODULE_2__permission_user_component__["a" /* PermissionUserComponent */].listPermissionData.find(function (i) { return i.functionWeb.no === pms.no; });
        if (valueInListTotal) {
            var idx = __WEBPACK_IMPORTED_MODULE_2__permission_user_component__["a" /* PermissionUserComponent */].listPermissionData.findIndex(function (i) { return i.functionWeb.no === pms.no; });
            __WEBPACK_IMPORTED_MODULE_2__permission_user_component__["a" /* PermissionUserComponent */].listPermissionData.splice(idx, 1);
        }
        else {
            var valuePushToList = {
                category: null,
                functionWeb: pms,
                type: this.viewType,
                userGroup: null
            };
            __WEBPACK_IMPORTED_MODULE_2__permission_user_component__["a" /* PermissionUserComponent */].listPermissionData.push(valuePushToList);
        }
    };
    PermissionUserContactComponent.prototype.viewAllClick = function (value) {
        this.viewAll = value;
        this.viewByCurrentUser = value;
        // PermissionUserComponent.listPermissionData.filter(i => i.functionWeb.no.startsWith('Contact')).forEach(i => i.type = this.viewType);
        var listPms = ['ContactAddContact', 'ContactViewInformation', 'ContactEditContact', 'ContactSendEmail', 'ContactDeleteContact', 'ContactImportDownloadTemplate', 'ContactExportFile',
            'ContactContactSummary', 'ContactViewContactDetail', 'ContactViewComments', 'ContactComments', 'ContactActivities', 'ContactHistories', 'ContactOpportunities'];
        this.toggleList(listPms, value);
    };
    PermissionUserContactComponent.prototype.viewUserClick = function (value) {
        var _this = this;
        this.viewByCurrentUser = value;
        __WEBPACK_IMPORTED_MODULE_2__permission_user_component__["a" /* PermissionUserComponent */].listPermissionData.filter(function (i) { return i.functionWeb.no.startsWith('Contact'); }).forEach(function (i) { return i.type = _this.viewType; });
    };
    PermissionUserContactComponent.prototype.toggleContactList = function (value) {
        var listPms = ['ContactAddContact', 'ContactViewInformation', 'ContactEditContact', 'ContactSendEmail', 'ContactDeleteContact', 'ContactImportDownloadTemplate', 'ContactExportFile'];
        this.toggleList(listPms, value);
    };
    PermissionUserContactComponent.prototype.toggleContactInfo = function (value) {
        var listPms = ['ContactContactSummary', 'ContactViewContactDetail', 'ContactViewComments', 'ContactComments', 'ContactActivities', 'ContactHistories', 'ContactOpportunities'];
        this.toggleList(listPms, value);
    };
    PermissionUserContactComponent.prototype.toggleList = function (pmsArr, value) {
        var _this = this;
        pmsArr.forEach(function (pmsItem) {
            var valueInListTotal = __WEBPACK_IMPORTED_MODULE_2__permission_user_component__["a" /* PermissionUserComponent */].listPermissionData.find(function (i) { return i.functionWeb.no === pmsItem; });
            if (value) {
                if (!valueInListTotal) {
                    var pms = _this.listPermission.find(function (i) { return i.no === pmsItem; });
                    var valuePushToList = {
                        category: null,
                        functionWeb: pms,
                        type: _this.viewType,
                        userGroup: null
                    };
                    __WEBPACK_IMPORTED_MODULE_2__permission_user_component__["a" /* PermissionUserComponent */].listPermissionData.push(valuePushToList);
                }
            }
            else {
                if (valueInListTotal) {
                    var idx = __WEBPACK_IMPORTED_MODULE_2__permission_user_component__["a" /* PermissionUserComponent */].listPermissionData.findIndex(function (i) { return i.functionWeb.no === pmsItem; });
                    __WEBPACK_IMPORTED_MODULE_2__permission_user_component__["a" /* PermissionUserComponent */].listPermissionData.splice(idx, 1);
                }
            }
        });
    };
    PermissionUserContactComponent = PermissionUserContactComponent_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-permission-user-contact',
            template: __webpack_require__("../../../../../src/app/layout/permission/permission-user/permission-user-contact/permission-user-contact.component.html"),
            styles: [__webpack_require__("../../../../../src/app/layout/permission/permission-user/permission-user-contact/permission-user-contact.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_services__["o" /* UserGroupService */]])
    ], PermissionUserContactComponent);
    return PermissionUserContactComponent;
    var PermissionUserContactComponent_1;
}());



/***/ }),

/***/ "../../../../../src/app/layout/permission/permission-user/permission-user-customer/permission-user-customer.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"listPermission && listPermission.length > 0\">\n  <div class=\"row mt-3\">\n    <div class=\"col-md-3\"><b>Xem khách hàng</b></div>\n    <div class=\"col-md-2 text-center center-parent\">\n      <label class=\"custom-control custom-checkbox mb-0 pr-3\">\n        <input type=\"checkbox\" class=\"custom-control-input\" (click)=\"viewAllClick($event.target.checked)\" [(ngModel)]=\"viewAll\">\n        <span class=\"custom-control-indicator\"></span>\n      </label>\n      Tất cả\n    </div>\n    <div class=\"col-md-2 text-center text-nowrap center-parent\">\n      <label class=\"custom-control custom-checkbox mb-0 pr-3\">\n        <input type=\"checkbox\" class=\"custom-control-input custom-control-input--disabled\" (click)=\"viewUserClick($event.target.checked)\" [disabled]=\"viewAll\" [(ngModel)]=\"viewByCurrentUser\">\n        <span class=\"custom-control-indicator\"></span>\n      </label>\n      Theo người dùng\n    </div>\n  </div>\n\n  <div class=\"row mt-2\">\n    <div class=\"col-md-3 font-weight-bold\">Danh sách khách hàng</div>\n    <div class=\"col-md-1 text-center\">\n      <label class=\"custom-control custom-checkbox\">\n        <input type=\"checkbox\" class=\"custom-control-input custom-control-input--none\" [disabled]=\"disabledPms\" [checked]=\"checkAllCustomerList\" (click)=\"toggleCustomerList($event.target.checked)\">\n        <span class=\"custom-control-indicator\"></span>\n      </label>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-3\"><i class=\"fa fa-angle-right mx-2\" aria-hidden=\"true\"></i>Thêm mới khách hàng</div>\n    <div class=\"col-md-1 text-center\">\n      <label class=\"custom-control custom-checkbox\">\n        <input type=\"checkbox\" class=\"custom-control-input custom-control-input--none\" [disabled]=\"disabledPms\" (click)=\"clickPermission($event.target.value)\" value=\"CustomerAddCustomer\" [checked]=\"getCheckedPermission('CustomerAddCustomer')\">\n        <span class=\"custom-control-indicator\"></span>\n      </label>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-3\"><i class=\"fa fa-angle-right mx-2\" aria-hidden=\"true\"></i>Xem thông tin khách hàng</div>\n    <div class=\"col-md-1 text-center\">\n      <label class=\"custom-control custom-checkbox\">\n        <input type=\"checkbox\" class=\"custom-control-input custom-control-input--none\" [disabled]=\"disabledPms\" (click)=\"clickPermission($event.target.value)\" value=\"CustomerViewCustomerInformation\" [checked]=\"getCheckedPermission('CustomerViewCustomerInformation')\" #viewCustomerInfo>\n        <span class=\"custom-control-indicator\"></span>\n      </label>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-3\"><i class=\"fa fa-angle-right mx-2\" aria-hidden=\"true\"></i>Sửa thông tin khách hàng</div>\n    <div class=\"col-md-1 text-center\">\n      <label class=\"custom-control custom-checkbox\">\n        <input type=\"checkbox\" class=\"custom-control-input custom-control-input--none\" [disabled]=\"disabledPms\" (click)=\"clickPermission($event.target.value)\" value=\"CustomerEditCustomer\" [checked]=\"getCheckedPermission('CustomerEditCustomer')\" #editCustomer>\n        <span class=\"custom-control-indicator\"></span>\n      </label>\n    </div>\n  </div>\n\n  <div class=\"row\">\n    <div class=\"col-md-3\"><i class=\"fa fa-angle-double-right ml-3 mr-2\" aria-hidden=\"true\"></i>Cấu hình Nhóm</div>\n    <div class=\"col-md-1 text-center\">\n      <label class=\"custom-control custom-checkbox\">\n        <input type=\"checkbox\" class=\"custom-control-input custom-control-input--none\" [disabled]=\"disabledPms || !editCustomer.checked\" (click)=\"clickPermission($event.target.value)\" value=\"CustomerConfigGroup\" [checked]=\"getCheckedPermission('CustomerConfigGroup') && editCustomer.checked\">\n        <span class=\"custom-control-indicator\"></span>\n      </label>\n    </div>\n  </div>\n\n  <div class=\"row\">\n    <div class=\"col-md-3\"><i class=\"fa fa-angle-right mx-2\" aria-hidden=\"true\"></i>Gửi email cho khách hàng</div>\n    <div class=\"col-md-1 text-center\">\n      <label class=\"custom-control custom-checkbox\">\n        <input type=\"checkbox\" class=\"custom-control-input custom-control-input--none\" [disabled]=\"disabledPms\" (click)=\"clickPermission($event.target.value)\" value=\"CustomerSendEmail\" [checked]=\"getCheckedPermission('CustomerSendEmail')\">\n        <span class=\"custom-control-indicator\"></span>\n      </label>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-3\"><i class=\"fa fa-angle-right mx-2\" aria-hidden=\"true\"></i>Xóa khách hàng</div>\n    <div class=\"col-md-1 text-center\">\n      <label class=\"custom-control custom-checkbox\">\n        <input type=\"checkbox\" class=\"custom-control-input custom-control-input--none\" [disabled]=\"disabledPms\" (click)=\"clickPermission($event.target.value)\" value=\"CustomerDeleteCustomer\" [checked]=\"getCheckedPermission('CustomerDeleteCustomer')\">\n        <span class=\"custom-control-indicator\"></span>\n      </label>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-3\"><i class=\"fa fa-angle-right mx-2\" aria-hidden=\"true\"></i>Nhập file + Tải template</div>\n    <div class=\"col-md-1 text-center\">\n      <label class=\"custom-control custom-checkbox\">\n        <input type=\"checkbox\" class=\"custom-control-input custom-control-input--none\" [disabled]=\"disabledPms\" (click)=\"clickPermission($event.target.value)\" value=\"CustomerImportDownloadCustomerTemplate\" [checked]=\"getCheckedPermission('CustomerImportDownloadCustomerTemplate')\">\n        <span class=\"custom-control-indicator\"></span>\n      </label>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-3\"><i class=\"fa fa-angle-right mx-2\" aria-hidden=\"true\"></i>Xuất file</div>\n    <div class=\"col-md-1 text-center\">\n      <label class=\"custom-control custom-checkbox\">\n        <input type=\"checkbox\" class=\"custom-control-input custom-control-input--none\" [disabled]=\"disabledPms\" (click)=\"clickPermission($event.target.value)\" value=\"CustomerExportFile\" [checked]=\"getCheckedPermission('CustomerExportFile')\">\n        <span class=\"custom-control-indicator\"></span>\n      </label>\n    </div>\n  </div>\n\n  <div class=\"row mt-2\">\n    <div class=\"col-md-3 font-weight-bold\">Thông tin khách hàng</div>\n    <div class=\"col-md-1 text-center\">\n      <label class=\"custom-control custom-checkbox\">\n        <input type=\"checkbox\" class=\"custom-control-input custom-control-input--none\" [disabled]=\"disabledPms || !viewCustomerInfo.checked\" [checked]=\"checkAllCustomerInfo && viewCustomerInfo.checked\" (click)=\"toggleCustomerInfo($event.target.checked)\">\n        <span class=\"custom-control-indicator\"></span>\n      </label>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-3\"><i class=\"fa fa-angle-right mx-2\" aria-hidden=\"true\"></i>Sơ lược</div>\n    <div class=\"col-md-1 text-center\">\n      <label class=\"custom-control custom-checkbox\">\n        <input type=\"checkbox\" class=\"custom-control-input custom-control-input--none\" [disabled]=\"disabledPms || !viewCustomerInfo.checked\" (click)=\"clickPermission($event.target.value)\" value=\"CustomerSummary\" [checked]=\"getCheckedPermission('CustomerSummary') && viewCustomerInfo.checked\">\n        <span class=\"custom-control-indicator\"></span>\n      </label>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-3\"><i class=\"fa fa-angle-right mx-2\" aria-hidden=\"true\"></i>Xem chi tiết</div>\n    <div class=\"col-md-1 text-center\">\n      <label class=\"custom-control custom-checkbox\">\n        <input type=\"checkbox\" class=\"custom-control-input custom-control-input--none\" [disabled]=\"disabledPms || !viewCustomerInfo.checked\" (click)=\"clickPermission($event.target.value)\" value=\"CustomerViewDetail\" [checked]=\"getCheckedPermission('CustomerViewDetail') && viewCustomerInfo.checked\">\n        <span class=\"custom-control-indicator\"></span>\n      </label>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-3\"><i class=\"fa fa-angle-right mx-2\" aria-hidden=\"true\"></i>Xem bình luận</div>\n    <div class=\"col-md-1 text-center\">\n      <label class=\"custom-control custom-checkbox\">\n        <input type=\"checkbox\" class=\"custom-control-input custom-control-input--none\" [disabled]=\"disabledPms || !viewCustomerInfo.checked\" (click)=\"clickPermission($event.target.value)\" value=\"CustomerViewComments\" [checked]=\"getCheckedPermission('CustomerViewComments') && viewCustomerInfo.checked\">\n        <span class=\"custom-control-indicator\"></span>\n      </label>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-3\"><i class=\"fa fa-angle-right mx-2\" aria-hidden=\"true\"></i>Đăng bình luận</div>\n    <div class=\"col-md-1 text-center\">\n      <label class=\"custom-control custom-checkbox\">\n        <input type=\"checkbox\" class=\"custom-control-input custom-control-input--none\" [disabled]=\"disabledPms || !viewCustomerInfo.checked\" (click)=\"clickPermission($event.target.value)\" value=\"CustomerAddComment\" [checked]=\"getCheckedPermission('CustomerAddComment') && viewCustomerInfo.checked\">\n        <span class=\"custom-control-indicator\"></span>\n      </label>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-3\"><i class=\"fa fa-angle-right mx-2\" aria-hidden=\"true\"></i>Các hoạt động</div>\n    <div class=\"col-md-1 text-center\">\n      <label class=\"custom-control custom-checkbox\">\n        <input type=\"checkbox\" class=\"custom-control-input custom-control-input--none\" [disabled]=\"disabledPms || !viewCustomerInfo.checked\" (click)=\"clickPermission($event.target.value)\" value=\"CustomerActivities\" [checked]=\"getCheckedPermission('CustomerActivities') && viewCustomerInfo.checked\">\n        <span class=\"custom-control-indicator\"></span>\n      </label>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-3\"><i class=\"fa fa-angle-right mx-2\" aria-hidden=\"true\"></i>Các cập nhật</div>\n    <div class=\"col-md-1 text-center\">\n      <label class=\"custom-control custom-checkbox\">\n        <input type=\"checkbox\" class=\"custom-control-input custom-control-input--none\" [disabled]=\"disabledPms || !viewCustomerInfo.checked\" (click)=\"clickPermission($event.target.value)\" value=\"CustomerHistories\" [checked]=\"getCheckedPermission('CustomerHistories') && viewCustomerInfo.checked\">\n        <span class=\"custom-control-indicator\"></span>\n      </label>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-3\"><i class=\"fa fa-angle-right mx-2\" aria-hidden=\"true\"></i>Các cơ hội</div>\n    <div class=\"col-md-1 text-center\">\n      <label class=\"custom-control custom-checkbox\">\n        <input type=\"checkbox\" class=\"custom-control-input custom-control-input--none\" [disabled]=\"disabledPms || !viewCustomerInfo.checked\" (click)=\"clickPermission($event.target.value)\" value=\"CustomerOpportunities\" [checked]=\"getCheckedPermission('CustomerOpportunities') && viewCustomerInfo.checked\">\n        <span class=\"custom-control-indicator\"></span>\n      </label>\n    </div>\n  </div>\n\n  <div class=\"my-4 text-center\">\n    <button class=\"btn btn-secondary ml-2\" routerLink=\"../prospect\">\n      <i class=\"fa fa-angle-left mx-2\" aria-hidden=\"true\"></i> Trở về\n    </button>\n    <button class=\"btn btn-primary ml-2\" routerLink=\"../contact\">\n      Tiếp <i class=\"fa fa-angle-right mx-2\" aria-hidden=\"true\"></i>\n    </button>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/layout/permission/permission-user/permission-user-customer/permission-user-customer.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host /deep/ .btn-secondary {\n  background-color: #b0b0b0; }\n\n.custom-control-input--disabled:disabled ~ .custom-control-indicator {\n  background-color: #17a2b8;\n  opacity: .5; }\n\n.custom-control-input--none:disabled ~ .custom-control-indicator {\n  background-image: none; }\n\n.pl-4r {\n  padding-left: 4rem; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/layout/permission/permission-user/permission-user-customer/permission-user-customer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PermissionUserCustomerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services__ = __webpack_require__("../../../../../src/app/shared/services/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__permission_user_component__ = __webpack_require__("../../../../../src/app/layout/permission/permission-user/permission-user.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PermissionUserCustomerComponent = /** @class */ (function () {
    //
    // static prospectViewType;
    // listPermission: UserGroupPermission[];
    // isSelectAll = false;
    // isViewInfo;
    // viewAll;
    // viewByCurrentUser;
    // listPermissionData: any[] = [];
    //
    function PermissionUserCustomerComponent(userGroupService, dataService) {
        this.userGroupService = userGroupService;
        this.dataService = dataService;
        // customerCategoryList: DictionaryItem[];
        this.isSelectAll = false;
        this.listPermissionData = [];
    }
    PermissionUserCustomerComponent_1 = PermissionUserCustomerComponent;
    Object.defineProperty(PermissionUserCustomerComponent.prototype, "viewType", {
        get: function () {
            if (this.viewAll) {
                PermissionUserCustomerComponent_1.customerViewType = true;
                return true;
            }
            else if (this.viewByCurrentUser) {
                PermissionUserCustomerComponent_1.customerViewType = false;
                return false;
            }
            else {
                PermissionUserCustomerComponent_1.customerViewType = null;
                return null;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PermissionUserCustomerComponent.prototype, "disabledPms", {
        get: function () {
            if (this.viewType == null) {
                return true;
            }
            else {
                return false;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PermissionUserCustomerComponent.prototype, "checkAllCustomerList", {
        get: function () {
            var value = true;
            var listPms = ['CustomerAddCustomer', 'CustomerViewCustomerInformation', 'CustomerEditCustomer', 'CustomerSendEmail', 'CustomerDeleteCustomer', 'CustomerImportDownloadCustomerTemplate', 'CustomerExportFile'];
            listPms.forEach(function (pms) {
                if (!__WEBPACK_IMPORTED_MODULE_2__permission_user_component__["a" /* PermissionUserComponent */].listPermissionData.find(function (i) { return i.functionWeb.no === pms; })) {
                    value = false;
                }
            });
            return value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PermissionUserCustomerComponent.prototype, "checkAllCustomerInfo", {
        get: function () {
            var value = true;
            var listPms = ['CustomerSummary', 'CustomerViewDetail', 'CustomerViewComments', 'CustomerAddComment', 'CustomerActivities', 'CustomerHistories', 'CustomerOpportunities'];
            listPms.forEach(function (pms) {
                if (!__WEBPACK_IMPORTED_MODULE_2__permission_user_component__["a" /* PermissionUserComponent */].listPermissionData.find(function (i) { return i.functionWeb.no === pms; })) {
                    value = false;
                }
            });
            return value;
        },
        enumerable: true,
        configurable: true
    });
    PermissionUserCustomerComponent.prototype.ngOnInit = function () {
        var _this = this;
        // this.dataService.getCustomerCategory().subscribe(data => {
        //   this.customerCategoryList = data.filter(i => i.id.toString() !== 'Other');
        // });
        this.getPermissionList('Customer');
        this.listPermissionData = __WEBPACK_IMPORTED_MODULE_2__permission_user_component__["a" /* PermissionUserComponent */].listPermissionData.filter(function (i) { return i.functionWeb.no.startsWith('Customer'); });
        this.userGroupService.checkPermission().subscribe(function (data) {
            _this.listPermissionData = __WEBPACK_IMPORTED_MODULE_2__permission_user_component__["a" /* PermissionUserComponent */].listPermissionData.filter(function (i) { return i.functionWeb.no.startsWith('Customer'); });
            _this.checkViewType();
        });
    };
    PermissionUserCustomerComponent.prototype.getPermissionList = function (module) {
        var _this = this;
        this.userGroupService.getListPermissionDefault(module).subscribe(function (data) {
            _this.listPermission = data;
            _this.checkViewType();
        });
    };
    PermissionUserCustomerComponent.prototype.checkViewType = function () {
        if (this.listPermissionData.length > 0) {
            var pms = this.listPermissionData[0];
            if (pms) {
                if (pms.type === true) {
                    this.viewAll = true;
                    this.viewByCurrentUser = true;
                }
                else if (pms.type === false) {
                    this.viewByCurrentUser = true;
                }
            }
            else {
                this.viewAll = null;
                this.viewByCurrentUser = null;
            }
        }
    };
    PermissionUserCustomerComponent.prototype.selectAll = function (permission) {
        var _this = this;
        permission.forEach(function (i) { return i.checkboxSelected = _this.isSelectAll; });
    };
    PermissionUserCustomerComponent.prototype.getCheckedPermission = function (no) {
        if (this.listPermission && this.listPermission.length > 0) {
            // return this.listPermission.find(i => i.no === no) ? true : false;
            return __WEBPACK_IMPORTED_MODULE_2__permission_user_component__["a" /* PermissionUserComponent */].listPermissionData.find(function (i) { return i.functionWeb.no === no; }) ? true : false;
        }
        else {
            return false;
        }
    };
    PermissionUserCustomerComponent.prototype.clickPermission = function (value) {
        var pms = this.listPermission.find(function (i) { return i.no === value; });
        var valueInListTotal = __WEBPACK_IMPORTED_MODULE_2__permission_user_component__["a" /* PermissionUserComponent */].listPermissionData.find(function (i) { return i.functionWeb.no === pms.no; });
        if (valueInListTotal) {
            var idx = __WEBPACK_IMPORTED_MODULE_2__permission_user_component__["a" /* PermissionUserComponent */].listPermissionData.findIndex(function (i) { return i.functionWeb.no === pms.no; });
            __WEBPACK_IMPORTED_MODULE_2__permission_user_component__["a" /* PermissionUserComponent */].listPermissionData.splice(idx, 1);
        }
        else {
            var valuePushToList = {
                category: null,
                functionWeb: pms,
                type: this.viewType,
                userGroup: null
            };
            __WEBPACK_IMPORTED_MODULE_2__permission_user_component__["a" /* PermissionUserComponent */].listPermissionData.push(valuePushToList);
        }
    };
    PermissionUserCustomerComponent.prototype.viewAllClick = function (value) {
        this.viewAll = value;
        this.viewByCurrentUser = value;
        // PermissionUserComponent.listPermissionData.filter(i => i.functionWeb.no.startsWith('Customer')).forEach(i => i.type = this.viewType);
        var listPms = ['CustomerAddCustomer', 'CustomerViewCustomerInformation', 'CustomerEditCustomer', 'CustomerConfigGroup', 'CustomerSendEmail', 'CustomerDeleteCustomer', 'CustomerImportDownloadCustomerTemplate', 'CustomerExportFile',
            'CustomerSummary', 'CustomerViewDetail', 'CustomerViewComments', 'CustomerAddComment', 'CustomerActivities', 'CustomerHistories', 'CustomerOpportunities'];
        this.toggleList(listPms, value);
    };
    PermissionUserCustomerComponent.prototype.viewUserClick = function (value) {
        var _this = this;
        this.viewByCurrentUser = value;
        __WEBPACK_IMPORTED_MODULE_2__permission_user_component__["a" /* PermissionUserComponent */].listPermissionData.filter(function (i) { return i.functionWeb.no.startsWith('Customer'); }).forEach(function (i) { return i.type = _this.viewType; });
    };
    PermissionUserCustomerComponent.prototype.toggleCustomerList = function (value) {
        var listPms = ['CustomerAddCustomer', 'CustomerViewCustomerInformation', 'CustomerEditCustomer', 'CustomerConfigGroup', 'CustomerSendEmail', 'CustomerDeleteCustomer', 'CustomerImportDownloadCustomerTemplate', 'CustomerExportFile'];
        this.toggleList(listPms, value);
    };
    PermissionUserCustomerComponent.prototype.toggleCustomerInfo = function (value) {
        var listPms = ['CustomerSummary', 'CustomerViewDetail', 'CustomerViewComments', 'CustomerAddComment', 'CustomerActivities', 'CustomerHistories', 'CustomerOpportunities'];
        this.toggleList(listPms, value);
    };
    PermissionUserCustomerComponent.prototype.toggleList = function (pmsArr, value) {
        var _this = this;
        pmsArr.forEach(function (pmsItem) {
            var valueInListTotal = __WEBPACK_IMPORTED_MODULE_2__permission_user_component__["a" /* PermissionUserComponent */].listPermissionData.find(function (i) { return i.functionWeb.no === pmsItem; });
            if (value) {
                if (!valueInListTotal) {
                    var pms = _this.listPermission.find(function (i) { return i.no === pmsItem; });
                    var valuePushToList = {
                        category: null,
                        functionWeb: pms,
                        type: _this.viewType,
                        userGroup: null
                    };
                    __WEBPACK_IMPORTED_MODULE_2__permission_user_component__["a" /* PermissionUserComponent */].listPermissionData.push(valuePushToList);
                }
            }
            else {
                if (valueInListTotal) {
                    var idx = __WEBPACK_IMPORTED_MODULE_2__permission_user_component__["a" /* PermissionUserComponent */].listPermissionData.findIndex(function (i) { return i.functionWeb.no === pmsItem; });
                    __WEBPACK_IMPORTED_MODULE_2__permission_user_component__["a" /* PermissionUserComponent */].listPermissionData.splice(idx, 1);
                }
            }
        });
    };
    PermissionUserCustomerComponent = PermissionUserCustomerComponent_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-permission-user-customer',
            template: __webpack_require__("../../../../../src/app/layout/permission/permission-user/permission-user-customer/permission-user-customer.component.html"),
            styles: [__webpack_require__("../../../../../src/app/layout/permission/permission-user/permission-user-customer/permission-user-customer.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_services__["o" /* UserGroupService */],
            __WEBPACK_IMPORTED_MODULE_1__shared_services__["j" /* DataService */]])
    ], PermissionUserCustomerComponent);
    return PermissionUserCustomerComponent;
    var PermissionUserCustomerComponent_1;
}());

//   getPermissionList(module: string) {
//     this.userGroupService.getListPermissionDefault(module).subscribe(data => {
//       this.listPermission = data;
//       this.checkViewType();
//     });
//   }
//   checkViewType() {
//     if (this.listPermissionData.length > 0) {
//       const pms = this.listPermissionData[0];
//       if (pms) {
//         if (pms.type === true) {
//           this.viewAll = true;
//           this.viewByCurrentUser = true;
//         } else if (pms.type === false) {
//           this.viewByCurrentUser = true;
//         }
//       } else {
//         this.viewAll = null;
//         this.viewByCurrentUser = null;
//       }
//     }
//   }
//   selectAll(permission: UserGroupPermission[]) {
//     permission.forEach(i => i.checkboxSelected = this.isSelectAll);
//   }
//   getCheckedPermission(no: string, category: string): boolean {
//     if (this.listPermission && this.listPermission.length > 0) {
//       // return this.listPermission.find(i => i.no === no) ? true : false;
//       return PermissionUserComponent.listPermissionData.find(i => i.functionWeb.no === no && i.category === category) ? true : false;
//     } else {
//       return false;
//     }
//   }
//   getCheckedAllCustomerPermission(no: string): boolean {
//     let value = true;
//     const categoryArr = ['Owner', 'ManagementTeam', 'PrimeContractor', 'JVContractor', 'SupplierBodyCorporate', 'Subcontractor'];
//     categoryArr.forEach(category => {
//       if (!this.getCheckedPermission(no, category)) {
//         value = false;
//       }
//     });
//     return value;
//   }
//   clickAllCustomerPermission(value: string, checked: boolean) {
//     const categoryArr = ['Owner', 'ManagementTeam', 'PrimeContractor', 'JVContractor', 'SupplierBodyCorporate', 'Subcontractor'];
//     categoryArr.forEach(category => this.togglePermission(value, category, checked));
//   }
//   togglePermission(no: string, category: string, checked: boolean) {
//     const valueInListTotal = PermissionUserComponent.listPermissionData.find(i => i.functionWeb.no === no && i.category === category);
//     if (checked) {
//       // push all item to list
//       if (!valueInListTotal) {
//           const pms = this.listPermission.find(i => i.no === no);
//           const valuePushToList = {
//             category: category,
//             functionWeb: pms,
//             type: this.viewType,
//             userGroup: null
//           };
//           PermissionUserComponent.listPermissionData.push(valuePushToList);
//         }
//     } else { // remove all item from total list
//         if (valueInListTotal) {
//           const idx = PermissionUserComponent.listPermissionData.findIndex(i => i.functionWeb.no === no && i.category === category);
//           PermissionUserComponent.listPermissionData.splice(idx, 1);
//         }
//       }
//   }
//   clickPermission(value: string, category: string) {
//     const pms = this.listPermission.find(i => i.no === value);
//     const valueInListTotal = PermissionUserComponent.listPermissionData.find(i => i.functionWeb.no === pms.no && i.category === category);
//     if (valueInListTotal) {
//       const idx = PermissionUserComponent.listPermissionData.findIndex(i => i.functionWeb.no === pms.no && i.category === category);
//       PermissionUserComponent.listPermissionData.splice(idx, 1);
//     } else {
//       const valuePushToList = {
//         category: category,
//         functionWeb: pms,
//         type: this.viewType,
//         userGroup: null
//       };
//       PermissionUserComponent.listPermissionData.push(valuePushToList);
//     }
//   }
//   viewAllClick(value) {
//     this.viewAll = value;
//     this.viewByCurrentUser = value;
//     PermissionUserComponent.listPermissionData.filter(i => i.functionWeb.no.startsWith('Customer')).forEach(i => i.type = this.viewType);
//   }
//   clickAllParentCustomerPermission(checked: boolean) {
//     const listCustomerType = ['Owner', 'ManagementTeam', 'PrimeContractor', 'JVContractor', 'SupplierBodyCorporate', 'Subcontractor'];
//     listCustomerType.forEach(customerType => {
//       this.clickParentCustomerPermission(customerType, checked);
//     });
//   }
//   clickParentCustomerPermission(customerType: string, checked: boolean) {
//     const listNo = ['CustomerAddCustomer', 'CustomerSetClassify', 'CustomerViewCustomerInformation', 'CustomerEditCustomer', 'CustomerCustomerSummary', 'CustomerFinanceInformation', 'CustomerCapacityEvaluation'
//                     , 'CustomerEditHBCOperation', 'CustomerProjectInformation', 'CustomerPaymentReportDowload', 'CustomerPaymentReportUpload', 'CustomerPaymentReportDelete', 'CustomerSendEmail', 'CustomerDeleteCustomer', 'CustomerImportDownloadCustomerTemplate', 'CustomerExportFile'];
//     listNo.forEach(no => this.togglePermission(no, customerType, checked));
//   }
//   getCheckedAllParentCustomerPermission(): boolean {
//     let value = true;
//     const listCustomerType = ['Owner', 'ManagementTeam', 'PrimeContractor', 'JVContractor', 'SupplierBodyCorporate', 'Subcontractor'];
//     listCustomerType.forEach(customerType => {
//       if (!this.getCheckedParentCustomerPermission(customerType)) {
//         value = false;
//       }
//     });
//     return value;
//   }
//   getCheckedParentCustomerPermission(customerType: string): boolean {
//     let value = true;
//     const listNo = ['CustomerAddCustomer', 'CustomerSetClassify', 'CustomerViewCustomerInformation', 'CustomerEditCustomer', 'CustomerCustomerSummary', 'CustomerFinanceInformation', 'CustomerCapacityEvaluation'
//                     , 'CustomerEditHBCOperation', 'CustomerProjectInformation', 'CustomerPaymentReportDowload', 'CustomerPaymentReportUpload', 'CustomerPaymentReportDelete', 'CustomerSendEmail', 'CustomerDeleteCustomer', 'CustomerImportDownloadCustomerTemplate', 'CustomerExportFile'];
//     listNo.forEach(no => {
//       if (!this.getCheckedPermission(no, customerType)) {
//         value = false;
//       }
//     });
//     return value;
//   }
//   clickAllParentCustomerInfoPermission(checked: boolean) {
//     const listCustomerType = ['Owner', 'ManagementTeam', 'PrimeContractor', 'JVContractor', 'SupplierBodyCorporate', 'Subcontractor'];
//     listCustomerType.forEach(customerType => {
//       this.clickParentCustomerInfoPermission(customerType, checked);
//     });
//   }
//   clickParentCustomerInfoPermission(customerType: string, checked: boolean) {
//     const listNo = ['CustomerSummary', 'CustomerViewDetail', 'CustomerViewComments', 'CustomerAddComment', 'CustomerActivities', 'CustomerHistories', 'CustomerOpportunities', 'CustomerCustomerEvaluation'
//                     , 'CustomerEvaluationBasicInformation', 'CustomerEvaluationFinance', 'CustomerEvaluationEvaluationInformation', 'CustomerEvaluationHBCOperation', 'CustomerEvaluationContractInformation'];
//     listNo.forEach(no => this.togglePermission(no, customerType, checked));
//   }
//   getCheckedAllParentCustomerInfoPermission() {
//     let value = true;
//     const listCustomerType = ['Owner', 'ManagementTeam', 'PrimeContractor', 'JVContractor', 'SupplierBodyCorporate', 'Subcontractor'];
//     listCustomerType.forEach(customerType => {
//       if (!this.getCheckedParentCustomerInfoPermission(customerType)) {
//         value = false;
//       }
//     });
//     return value;
//   }
//   getCheckedParentCustomerInfoPermission(customerType: string): boolean {
//     let value = true;
//     const listNo = ['CustomerSummary', 'CustomerViewDetail', 'CustomerViewComments', 'CustomerAddComment', 'CustomerActivities', 'CustomerHistories', 'CustomerOpportunities', 'CustomerCustomerEvaluation'
//                     , 'CustomerEvaluationBasicInformation', 'CustomerEvaluationFinance', 'CustomerEvaluationEvaluationInformation', 'CustomerEvaluationHBCOperation', 'CustomerEvaluationContractInformation'];
//     listNo.forEach(no => {
//       if (!this.getCheckedPermission(no, customerType)) {
//         value = false;
//       }
//     });
//     return value;
//   }
//   toggleAllCheckbox(checked: boolean) {
//     this.clickAllParentCustomerPermission(checked);
//     this.clickAllParentCustomerInfoPermission(checked);
//   }
//   getCheckedAllCheckbox(): boolean {
//     let value = true;
//     const listCustomerType = ['Owner', 'ManagementTeam', 'PrimeContractor', 'JVContractor', 'SupplierBodyCorporate', 'Subcontractor'];
//     listCustomerType.forEach(customerType => {
//       if (!this.getCheckedParentCustomerPermission(customerType)) {
//         value = false;
//       }
//       if (!this.getCheckedParentCustomerInfoPermission(customerType)) {
//         value = false;
//       }
//     });
//     return value;
//   }
// }


/***/ }),

/***/ "../../../../../src/app/layout/permission/permission-user/permission-user-home/permission-user-home.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"listPermission && listPermission.length > 0\">\n  <div class=\"row mt-3\">\n    <div class=\"col-md-3\"></div>\n    <div class=\"col-md-2 text-center  text-nowrap\">\n      Tất cả người dùng\n    </div>\n    <div class=\"col-md-2 text-center  text-nowrap\">\n      Theo người dùng\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-3\"></div>\n    <div class=\"col-md-2 text-center\">\n      <label class=\"custom-control custom-checkbox\">\n        <input type=\"checkbox\" class=\"custom-control-input\" [checked]=\"checkAllCheckboxByAll\" (click)=\"toggleSelectAll($event.target.checked, true)\" #inputAllUser>\n        <span class=\"custom-control-indicator\"></span>\n      </label>\n    </div>\n    <div class=\"col-md-2 text-center\">\n      <label class=\"custom-control custom-checkbox\">\n        <input type=\"checkbox\" class=\"custom-control-input custom-control-input--disabled\" [checked]=\"checkAllCheckboxByCurrent\" (click)=\"toggleSelectAll($event.target.checked, false)\" [disabled]=\"inputAllUser.checked\">\n        <span class=\"custom-control-indicator\"></span>\n      </label>\n    </div>\n  </div>\n  <div class=\"row mt-2\">\n    <div class=\"col-md-3 font-weight-bold\">Xem báo cáo thống kê</div>\n    <div class=\"col-md-2 text-center\">\n      <label class=\"custom-control custom-checkbox\">\n        <input type=\"checkbox\" class=\"custom-control-input\" [checked]=\"checkAllContactListByAll\" (click)=\"toggleContactList($event.target.checked, true)\" #inputStatisticAll>\n        <span class=\"custom-control-indicator\"></span>\n      </label>\n    </div>\n    <div class=\"col-md-2 text-center\">\n      <label class=\"custom-control custom-checkbox\">\n        <input type=\"checkbox\" class=\"custom-control-input custom-control-input--disabled\" [checked]=\"checkAllContactListByCurrent\" (click)=\"toggleContactList($event.target.checked, false)\" [disabled]=\"inputStatisticAll.checked\">\n        <span class=\"custom-control-indicator\"></span>\n      </label>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-3\"><i class=\"fa fa-angle-right mx-2\" aria-hidden=\"true\"></i>Tiềm năng</div>\n    <div class=\"col-md-2 text-center\">\n      <label class=\"custom-control custom-checkbox\">\n        <input type=\"checkbox\" class=\"custom-control-input\" [checked]=\"getCheckedPermission('StatisticsProspect', true)\" value=\"StatisticsProspect\" (click)=\"clickPermission($event.target.value, $event.target.checked, true, homeProspectAll, homeProspectCurrent)\" #homeProspectAll>\n        <span class=\"custom-control-indicator\"></span>\n      </label>\n    </div>\n    <div class=\"col-md-2 text-center\">\n      <label class=\"custom-control custom-checkbox\">\n        <input type=\"checkbox\" class=\"custom-control-input custom-control-input--disabled\" [checked]=\"getCheckedPermission('StatisticsProspect', false) || homeProspectAll.checked\" value=\"StatisticsProspect\" (click)=\"clickPermission($event.target.value, $event.target.checked, false, homeProspectAll, homeProspectCurrent)\" [disabled]=\"homeProspectAll.checked\" #homeProspectCurrent>\n        <span class=\"custom-control-indicator\"></span>\n      </label>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-3\"><i class=\"fa fa-angle-right mx-2\" aria-hidden=\"true\"></i>Khách hàng</div>\n    <div class=\"col-md-2 text-center\">\n      <label class=\"custom-control custom-checkbox\">\n        <input type=\"checkbox\" class=\"custom-control-input\" [checked]=\"getCheckedPermission('HomeCustomer', true)\" value=\"HomeCustomer\" (click)=\"clickPermission($event.target.value, $event.target.checked, true, homeCustomerAll, homeCustomerCurrent)\" #homeCustomerAll>\n        <span class=\"custom-control-indicator\"></span>\n      </label>\n    </div>\n    <div class=\"col-md-2 text-center\">\n      <label class=\"custom-control custom-checkbox\">\n        <input type=\"checkbox\" class=\"custom-control-input custom-control-input--disabled\" [checked]=\"getCheckedPermission('HomeCustomer', false) || homeCustomerAll.checked\" value=\"HomeCustomer\" (click)=\"clickPermission($event.target.value, $event.target.checked, false, homeCustomerAll, homeCustomerCurrent)\" [disabled]=\"homeCustomerAll.checked\" #homeCustomerCurrent>\n        <span class=\"custom-control-indicator\"></span>\n      </label>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-3\"><i class=\"fa fa-angle-right mx-2\" aria-hidden=\"true\"></i>Liên hệ</div>\n    <div class=\"col-md-2 text-center\">\n      <label class=\"custom-control custom-checkbox\">\n        <input type=\"checkbox\" class=\"custom-control-input\" [checked]=\"getCheckedPermission('HomeContact', true)\" value=\"HomeContact\" (click)=\"clickPermission($event.target.value, $event.target.checked, true, homeContactAll, homeContactCurrent)\" #homeContactAll>\n        <span class=\"custom-control-indicator\"></span>\n      </label>\n    </div>\n    <div class=\"col-md-2 text-center\">\n      <label class=\"custom-control custom-checkbox\">\n        <input type=\"checkbox\" class=\"custom-control-input custom-control-input--disabled\" [checked]=\"getCheckedPermission('HomeContact', false) || homeContactAll.checked\" value=\"HomeContact\" (click)=\"clickPermission($event.target.value, $event.target.checked, false, homeContactAll, homeContactCurrent)\" [disabled]=\"homeContactAll.checked\" #homeContactCurrent>\n        <span class=\"custom-control-indicator\"></span>\n      </label>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-3\"><i class=\"fa fa-angle-right mx-2\" aria-hidden=\"true\"></i>Cơ hội</div>\n    <div class=\"col-md-2 text-center\">\n      <label class=\"custom-control custom-checkbox\">\n        <input type=\"checkbox\" class=\"custom-control-input\" [checked]=\"getCheckedPermission('HomeOpportunity', true)\" value=\"HomeOpportunity\" (click)=\"clickPermission($event.target.value, $event.target.checked, true, homeOpportunityAll, homeOpportunityCurrent)\" #homeOpportunityAll>\n        <span class=\"custom-control-indicator\"></span>\n      </label>\n    </div>\n    <div class=\"col-md-2 text-center\">\n      <label class=\"custom-control custom-checkbox\">\n        <input type=\"checkbox\" class=\"custom-control-input custom-control-input--disabled\" [checked]=\"getCheckedPermission('HomeOpportunity', false) || homeOpportunityAll.checked\" value=\"HomeOpportunity\" (click)=\"clickPermission($event.target.value, $event.target.checked, false, homeOpportunityAll, homeOpportunityCurrent)\" [disabled]=\"homeOpportunityAll.checked\" #homeOpportunityCurrent>\n        <span class=\"custom-control-indicator\"></span>\n      </label>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-3\"><i class=\"fa fa-angle-right mx-2\" aria-hidden=\"true\"></i>Chiến dịch</div>\n    <div class=\"col-md-2 text-center\">\n      <label class=\"custom-control custom-checkbox\">\n        <input type=\"checkbox\" class=\"custom-control-input\" [checked]=\"getCheckedPermission('HomeCampaign', true)\" value=\"HomeCampaign\" (click)=\"clickPermission($event.target.value, $event.target.checked, true, homeCampaignAll, homeCampaignCurrent)\" #homeCampaignAll>\n        <span class=\"custom-control-indicator\"></span>\n      </label>\n    </div>\n    <div class=\"col-md-2 text-center\">\n      <label class=\"custom-control custom-checkbox\">\n        <input type=\"checkbox\" class=\"custom-control-input custom-control-input--disabled\" [checked]=\"getCheckedPermission('HomeCampaign', false) || homeCampaignAll.checked\" value=\"HomeCampaign\" (click)=\"clickPermission($event.target.value, $event.target.checked, false, homeCampaignAll, homeCampaignCurrent)\" [disabled]=\"homeCampaignAll.checked\" #homeCampaignCurrent>\n        <span class=\"custom-control-indicator\"></span>\n      </label>\n    </div>\n  </div>\n  \n  <!-- No use -->\n  <!-- <div class=\"row\">\n    <div class=\"col-md-3 text-nowrap\"><i class=\"fa fa-angle-right mx-2\" aria-hidden=\"true\"></i>Xem thông báo Sinh nhật, Đánh giá</div>\n    <div class=\"col-md-2 text-center\">\n      <label class=\"custom-control custom-checkbox\">\n        <input type=\"checkbox\" class=\"custom-control-input\" [checked]=\"getCheckedPermission('HomeNotification', true)\" value=\"HomeNotification\" (click)=\"clickPermission($event.target.value, $event.target.checked, true, homeNotificationAll, homeNotificationCurrent)\" #homeNotificationAll>\n        <span class=\"custom-control-indicator\"></span>\n      </label>\n    </div>\n    <div class=\"col-md-2 text-center\">\n      <label class=\"custom-control custom-checkbox\">\n        <input type=\"checkbox\" class=\"custom-control-input custom-control-input--disabled\" [checked]=\"getCheckedPermission('HomeNotification', false) || homeNotificationAll.checked\" value=\"HomeNotification\" (click)=\"clickPermission($event.target.value, $event.target.checked, false, homeNotificationAll, homeNotificationCurrent)\" [disabled]=\"homeNotificationAll.checked\" #homeNotificationCurrent>\n        <span class=\"custom-control-indicator\"></span>\n      </label>\n    </div>\n  </div> -->\n  <div class=\"row mt-2\">\n    <div class=\"col-md-3 font-weight-bold\">Xem sự kiện</div>\n    <div class=\"col-md-2 text-center\">\n      <label class=\"custom-control custom-checkbox\">\n        <input type=\"checkbox\" class=\"custom-control-input\" [checked]=\"getCheckedPermission('HomeViewTask', true)\" value=\"HomeViewTask\" (click)=\"clickPermission($event.target.value, $event.target.checked, true, homeViewTaskAll, homeViewTaskCurrent)\" #homeViewTaskAll>\n        <span class=\"custom-control-indicator\"></span>\n      </label>\n    </div>\n    <div class=\"col-md-2 text-center\">\n      <label class=\"custom-control custom-checkbox\">\n        <input type=\"checkbox\" class=\"custom-control-input custom-control-input--disabled\" [checked]=\"getCheckedPermission('HomeViewTask', false) || homeViewTaskAll.checked\" value=\"HomeViewTask\" (click)=\"clickPermission($event.target.value, $event.target.checked, false, homeViewTaskAll, homeViewTaskCurrent)\" [disabled]=\"homeViewTaskAll.checked\" #homeViewTaskCurrent>\n        <span class=\"custom-control-indicator\"></span>\n      </label>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-3 font-weight-bold\">Xem công việc</div>\n    <div class=\"col-md-2 text-center\">\n      <label class=\"custom-control custom-checkbox\">\n        <input type=\"checkbox\" class=\"custom-control-input\" [checked]=\"getCheckedPermission('HomeViewEvent', true)\" value=\"HomeViewEvent\" (click)=\"clickPermission($event.target.value, $event.target.checked, true, homeViewEventAll, homeViewEventCurrent)\" #homeViewEventAll>\n        <span class=\"custom-control-indicator\"></span>\n      </label>\n    </div>\n    <div class=\"col-md-2 text-center\">\n      <label class=\"custom-control custom-checkbox\">\n        <input type=\"checkbox\" class=\"custom-control-input custom-control-input--disabled\" [checked]=\"getCheckedPermission('HomeViewEvent', false) || homeViewEventAll.checked\" value=\"HomeViewEvent\" (click)=\"clickPermission($event.target.value, $event.target.checked, false, homeViewEventAll, homeViewEventCurrent)\" [disabled]=\"homeViewEventAll.checked\" #homeViewEventCurrent>\n        <span class=\"custom-control-indicator\"></span>\n      </label>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-3 font-weight-bold\">Xem thay đổi gần đây</div>\n    <div class=\"col-md-2 text-center\">\n      <label class=\"custom-control custom-checkbox\">\n        <input type=\"checkbox\" class=\"custom-control-input\" [checked]=\"getCheckedPermission('HomeViewAudit', true)\" value=\"HomeViewAudit\" (click)=\"clickPermission($event.target.value, $event.target.checked, true, homeViewAuditAll, homeViewAuditCurrent)\" #homeViewAuditAll>\n        <span class=\"custom-control-indicator\"></span>\n      </label>\n    </div>\n    <div class=\"col-md-2 text-center\">\n      <label class=\"custom-control custom-checkbox\">\n        <input type=\"checkbox\" class=\"custom-control-input custom-control-input--disabled\" [checked]=\"getCheckedPermission('HomeViewAudit', false) || homeViewAuditAll.checked\" value=\"HomeViewAudit\" (click)=\"clickPermission($event.target.value, $event.target.checked, false, homeViewAuditAll, homeViewAuditCurrent)\" [disabled]=\"homeViewAuditAll.checked\" #homeViewAuditCurrent>\n        <span class=\"custom-control-indicator\"></span>\n      </label>\n    </div>\n  </div>\n  <div class=\"my-4 text-center\">\n    <button class=\"btn btn-secondary ml-2 cursor-disabled\" disabled (click)=\"refresh(true)\">\n      <i class=\"fa fa-angle-left mx-2\" aria-hidden=\"true\"></i> Trở về\n    </button>\n    <button class=\"btn btn-primary ml-2\" routerLink=\"../prospect\">\n      Tiếp <i class=\"fa fa-angle-right mx-2\" aria-hidden=\"true\"></i>\n    </button>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/layout/permission/permission-user/permission-user-home/permission-user-home.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host /deep/ .btn-secondary {\n  background-color: #b0b0b0; }\n\n.custom-control-input--disabled:disabled ~ .custom-control-indicator {\n  background-color: #17a2b8;\n  opacity: .5; }\n\n.cursor-disabled {\n  cursor: not-allowed; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/layout/permission/permission-user/permission-user-home/permission-user-home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PermissionUserHomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services__ = __webpack_require__("../../../../../src/app/shared/services/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__permission_user_component__ = __webpack_require__("../../../../../src/app/layout/permission/permission-user/permission-user.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PermissionUserHomeComponent = /** @class */ (function () {
    // get checkAllContactInfo(): boolean {
    //   let value = true;
    //   const listPms = ['ContactContactSummary', 'ContactViewContactDetail', 'ContactViewComments', 'ContactComments', 'ContactActivities', 'ContactHistories', 'ContactOpportunities'];
    //   // const listPms = ['ContactContactSummary', 'ContactViewContactDetail', 'ContactViewComments', 'ContactComments', 'ContactActivities', 'ContactHistories', 'ContactOpportunities'];
    //   listPms.forEach(pms => {
    //     if (!PermissionUserComponent.listPermissionData.find(i => i.functionWeb.no === pms)) {
    //       value = false;
    //     }
    //   });
    //   return value;
    // }
    function PermissionUserHomeComponent(userGroupService) {
        this.userGroupService = userGroupService;
        this.isSelectAll = false;
        this.listPermissionData = [];
    }
    Object.defineProperty(PermissionUserHomeComponent.prototype, "viewType", {
        get: function () {
            if (this.viewAll) {
                return true;
            }
            else if (this.viewByCurrentUser) {
                return false;
            }
            else {
                return null;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PermissionUserHomeComponent.prototype, "disabledPms", {
        get: function () {
            if (this.viewType == null) {
                return true;
            }
            else {
                return false;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PermissionUserHomeComponent.prototype, "checkAllContactListByAll", {
        get: function () {
            var value = true;
            var listPms = ['StatisticsProspect', 'HomeCustomer', 'HomeContact', 'HomeOpportunity', 'HomeCampaign'];
            listPms.forEach(function (pms) {
                if (!__WEBPACK_IMPORTED_MODULE_2__permission_user_component__["a" /* PermissionUserComponent */].listPermissionData.find(function (i) { return i.functionWeb.no === pms && i.type; })) {
                    value = false;
                }
            });
            return value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PermissionUserHomeComponent.prototype, "checkAllContactListByCurrent", {
        get: function () {
            var value = true;
            var listPms = ['StatisticsProspect', 'HomeCustomer', 'HomeContact', 'HomeOpportunity', 'HomeCampaign'];
            listPms.forEach(function (pms) {
                if (!__WEBPACK_IMPORTED_MODULE_2__permission_user_component__["a" /* PermissionUserComponent */].listPermissionData.find(function (i) { return i.functionWeb.no === pms; })) {
                    value = false;
                }
            });
            return value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PermissionUserHomeComponent.prototype, "checkAllCheckboxByAll", {
        get: function () {
            var value = true;
            var listPms = ['StatisticsProspect', 'HomeCustomer', 'HomeContact', 'HomeOpportunity', 'HomeCampaign', 'HomeViewTask', 'HomeViewEvent', 'HomeViewAudit'];
            listPms.forEach(function (pms) {
                if (!__WEBPACK_IMPORTED_MODULE_2__permission_user_component__["a" /* PermissionUserComponent */].listPermissionData.find(function (i) { return i.functionWeb.no === pms && i.type; })) {
                    value = false;
                }
            });
            return value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PermissionUserHomeComponent.prototype, "checkAllCheckboxByCurrent", {
        get: function () {
            var value = true;
            var listPms = ['StatisticsProspect', 'HomeCustomer', 'HomeContact', 'HomeOpportunity', 'HomeCampaign', 'HomeViewTask', 'HomeViewEvent', 'HomeViewAudit'];
            // const listPms = ['HomeViewTask', 'HomeViewEvent', 'HomeViewAudit'];
            listPms.forEach(function (pms) {
                if (!__WEBPACK_IMPORTED_MODULE_2__permission_user_component__["a" /* PermissionUserComponent */].listPermissionData.find(function (i) { return i.functionWeb.no === pms; })) {
                    value = false;
                }
            });
            return value;
        },
        enumerable: true,
        configurable: true
    });
    PermissionUserHomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getPermissionList('Home');
        this.listPermissionData = __WEBPACK_IMPORTED_MODULE_2__permission_user_component__["a" /* PermissionUserComponent */].listPermissionData.filter(function (i) { return i.functionWeb.no.startsWith('Home'); });
        this.userGroupService.checkPermission().subscribe(function (data) {
            _this.listPermissionData = __WEBPACK_IMPORTED_MODULE_2__permission_user_component__["a" /* PermissionUserComponent */].listPermissionData.filter(function (i) { return i.functionWeb.no.startsWith('Home'); });
            _this.checkViewType();
        });
    };
    PermissionUserHomeComponent.prototype.getPermissionList = function (module) {
        var _this = this;
        this.userGroupService.getListPermissionDefault(module).subscribe(function (data) {
            _this.listPermission = data;
            _this.checkViewType();
        });
    };
    PermissionUserHomeComponent.prototype.checkViewType = function () {
        if (this.listPermissionData.length > 0) {
            var pms = this.listPermissionData[0];
            if (pms) {
                if (pms.type === true) {
                    this.viewAll = true;
                    this.viewByCurrentUser = true;
                }
                else if (pms.type === false) {
                    this.viewByCurrentUser = true;
                }
            }
            else {
                this.viewAll = null;
                this.viewByCurrentUser = null;
            }
        }
    };
    PermissionUserHomeComponent.prototype.selectAll = function (permission) {
        var _this = this;
        permission.forEach(function (i) { return i.checkboxSelected = _this.isSelectAll; });
    };
    PermissionUserHomeComponent.prototype.getCheckedPermission = function (no, type) {
        if (this.listPermission && this.listPermission.length > 0) {
            // return this.listPermission.find(i => i.no === no) ? true : false;
            return __WEBPACK_IMPORTED_MODULE_2__permission_user_component__["a" /* PermissionUserComponent */].listPermissionData.find(function (i) { return i.functionWeb.no === no && i.type === type; }) ? true : false;
        }
        else {
            return false;
        }
    };
    PermissionUserHomeComponent.prototype.clickPermission = function (value, checked, type, inputAll, inputCurrent) {
        var pms = this.listPermission.find(function (i) { return i.no === value; });
        var valueInListTotal = __WEBPACK_IMPORTED_MODULE_2__permission_user_component__["a" /* PermissionUserComponent */].listPermissionData.find(function (i) { return i.functionWeb.no === pms.no; });
        if (valueInListTotal) {
            if (checked) {
                valueInListTotal.type = type;
                if (type) {
                    inputCurrent.checked = true;
                }
            }
            else {
                var idx = __WEBPACK_IMPORTED_MODULE_2__permission_user_component__["a" /* PermissionUserComponent */].listPermissionData.findIndex(function (i) { return i.functionWeb.no === pms.no; });
                __WEBPACK_IMPORTED_MODULE_2__permission_user_component__["a" /* PermissionUserComponent */].listPermissionData.splice(idx, 1);
                if (type) {
                    inputCurrent.checked = false;
                }
            }
        }
        else {
            if (type) {
                inputCurrent.checked = true;
            }
            var valuePushToList = {
                category: null,
                functionWeb: pms,
                type: type,
                userGroup: null
            };
            __WEBPACK_IMPORTED_MODULE_2__permission_user_component__["a" /* PermissionUserComponent */].listPermissionData.push(valuePushToList);
        }
    };
    PermissionUserHomeComponent.prototype.viewAllClick = function (value) {
        this.viewAll = value;
        this.viewByCurrentUser = value;
    };
    PermissionUserHomeComponent.prototype.toggleContactList = function (checked, type) {
        var listPms = ['StatisticsProspect', 'HomeCustomer', 'HomeContact', 'HomeOpportunity', 'HomeCampaign'];
        this.toggleCheckboxList(listPms, checked, type);
    };
    PermissionUserHomeComponent.prototype.toggleSelectAll = function (checked, type) {
        var listPms = ['StatisticsProspect', 'HomeCustomer', 'HomeContact', 'HomeOpportunity', 'HomeCampaign', 'HomeViewTask', 'HomeViewEvent', 'HomeViewAudit'];
        this.toggleCheckboxList(listPms, checked, type);
    };
    PermissionUserHomeComponent.prototype.toggleCheckboxList = function (listPms, checked, type) {
        var _this = this;
        listPms.forEach(function (pmsItem) {
            var valueInListTotal = __WEBPACK_IMPORTED_MODULE_2__permission_user_component__["a" /* PermissionUserComponent */].listPermissionData.find(function (i) { return i.functionWeb.no === pmsItem; });
            if (checked) {
                if (!valueInListTotal) {
                    var pms = _this.listPermission.find(function (i) { return i.no === pmsItem; });
                    var valuePushToList = {
                        category: null,
                        functionWeb: pms,
                        type: type,
                        userGroup: null
                    };
                    __WEBPACK_IMPORTED_MODULE_2__permission_user_component__["a" /* PermissionUserComponent */].listPermissionData.push(valuePushToList);
                }
                else {
                    valueInListTotal.type = type;
                }
            }
            else {
                if (valueInListTotal) {
                    var idx = __WEBPACK_IMPORTED_MODULE_2__permission_user_component__["a" /* PermissionUserComponent */].listPermissionData.findIndex(function (i) { return i.functionWeb.no === pmsItem; });
                    __WEBPACK_IMPORTED_MODULE_2__permission_user_component__["a" /* PermissionUserComponent */].listPermissionData.splice(idx, 1);
                }
            }
        });
    };
    PermissionUserHomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-permission-user-home',
            template: __webpack_require__("../../../../../src/app/layout/permission/permission-user/permission-user-home/permission-user-home.component.html"),
            styles: [__webpack_require__("../../../../../src/app/layout/permission/permission-user/permission-user-home/permission-user-home.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_services__["o" /* UserGroupService */]])
    ], PermissionUserHomeComponent);
    return PermissionUserHomeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/layout/permission/permission-user/permission-user-opportunity/permission-user-opportunity.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"listPermission && listPermission.length > 0\">\n  <div class=\"row mt-3\">\n    <div class=\"col-md-3\"><b>Xem cơ hội</b></div>\n    <div class=\"col-md-2 text-center center-parent\">\n      <label class=\"custom-control custom-checkbox mb-0 pr-3\">\n        <input type=\"checkbox\" class=\"custom-control-input\" (click)=\"viewAllClick($event.target.checked)\" [(ngModel)]=\"viewAll\">\n        <span class=\"custom-control-indicator\"></span>\n      </label>\n      Tất cả\n    </div>\n    <div class=\"col-md-2 text-center  text-nowrap center-parent\">\n      <label class=\"custom-control custom-checkbox mb-0 pr-3\">\n        <input type=\"checkbox\" class=\"custom-control-input custom-control-input--disabled\" (click)=\"viewUserClick($event.target.checked)\" [disabled]=\"viewAll\" [(ngModel)]=\"viewByCurrentUser\">\n        <span class=\"custom-control-indicator\"></span>\n      </label>\n      Theo người dùng\n    </div>\n  </div>\n\n  <div class=\"row mt-2\">\n    <div class=\"col-md-3 font-weight-bold\">Danh sách cơ hội</div>\n    <div class=\"col-md-1 text-center\">\n      <label class=\"custom-control custom-checkbox\">\n        <input type=\"checkbox\" class=\"custom-control-input custom-control-input--none\" [disabled]=\"disabledPms\" [checked]=\"checkAllProspectList\" (click)=\"toggleProspectList($event.target.checked)\">\n        <span class=\"custom-control-indicator\"></span>\n      </label>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-3\"><i class=\"fa fa-angle-right mx-2\" aria-hidden=\"true\"></i>Thêm mới cơ hội</div>\n    <div class=\"col-md-1 text-center\">\n      <label class=\"custom-control custom-checkbox\">\n        <input type=\"checkbox\" class=\"custom-control-input custom-control-input--none\" [disabled]=\"disabledPms\" (click)=\"clickPermission($event.target.value)\" value=\"OpportunityAddOpportunity\" [checked]=\"getCheckedPermission('OpportunityAddOpportunity')\">\n        <span class=\"custom-control-indicator\"></span>\n      </label>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-3\"><i class=\"fa fa-angle-right mx-2\" aria-hidden=\"true\"></i>Xem thông tin cơ hội</div>\n    <div class=\"col-md-1 text-center\">\n      <label class=\"custom-control custom-checkbox\">\n        <input type=\"checkbox\" class=\"custom-control-input custom-control-input--none\" [disabled]=\"disabledPms\" (click)=\"clickPermission($event.target.value)\" value=\"OpportunityViewOpportunityInformation\" [checked]=\"getCheckedPermission('OpportunityViewOpportunityInformation')\" #viewProspectInfo>\n        <span class=\"custom-control-indicator\"></span>\n      </label>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-3\"><i class=\"fa fa-angle-right mx-2\" aria-hidden=\"true\"></i>Sửa cơ hội</div>\n    <div class=\"col-md-1 text-center\">\n      <label class=\"custom-control custom-checkbox\">\n        <input type=\"checkbox\" class=\"custom-control-input custom-control-input--none\" [disabled]=\"disabledPms\" (click)=\"clickPermission($event.target.value)\" value=\"OpportunityEditOpportunity\" [checked]=\"getCheckedPermission('OpportunityEditOpportunity')\" #editOpportunity>\n        <span class=\"custom-control-indicator\"></span>\n      </label>\n    </div>\n  </div>\n\n  <div class=\"row\">\n    <div class=\"col-md-3\"><i class=\"fa fa-angle-double-right ml-3 mr-2\" aria-hidden=\"true\"></i>Cấu hình nguồn cơ hội</div>\n    <div class=\"col-md-1 text-center\">\n      <label class=\"custom-control custom-checkbox\">\n        <input type=\"checkbox\" class=\"custom-control-input custom-control-input--none\" [disabled]=\"disabledPms || !editOpportunity.checked\" (click)=\"clickPermission($event.target.value)\" value=\"OpportunityConfigCustomerResource\" [checked]=\"getCheckedPermission('OpportunityConfigCustomerResource') && editOpportunity.checked\">\n        <span class=\"custom-control-indicator\"></span>\n      </label>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-3\"><i class=\"fa fa-angle-double-right ml-3 mr-2\" aria-hidden=\"true\"></i>Cấu hình Giai đoạn</div>\n    <div class=\"col-md-1 text-center\">\n      <label class=\"custom-control custom-checkbox\">\n        <input type=\"checkbox\" class=\"custom-control-input custom-control-input--none\" [disabled]=\"disabledPms || !editOpportunity.checked\" (click)=\"clickPermission($event.target.value)\" value=\"OpportunityConfigCustomerStep\" [checked]=\"getCheckedPermission('OpportunityConfigCustomerStep') && editOpportunity.checked\">\n        <span class=\"custom-control-indicator\"></span>\n      </label>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-3\"><i class=\"fa fa-angle-double-right ml-3 mr-2\" aria-hidden=\"true\"></i>Cấu hình Kênh tiếp cận</div>\n    <div class=\"col-md-1 text-center\">\n      <label class=\"custom-control custom-checkbox\">\n        <input type=\"checkbox\" class=\"custom-control-input custom-control-input--none\" [disabled]=\"disabledPms || !editOpportunity.checked\" (click)=\"clickPermission($event.target.value)\" value=\"OpportunityConfigApproachChannel\" [checked]=\"getCheckedPermission('OpportunityConfigApproachChannel') && editOpportunity.checked\">\n        <span class=\"custom-control-indicator\"></span>\n      </label>\n    </div>\n  </div>\n\n\n  <div class=\"row\">\n    <div class=\"col-md-3\"><i class=\"fa fa-angle-right mx-2\" aria-hidden=\"true\"></i>Xóa cơ hội</div>\n    <div class=\"col-md-1 text-center\">\n      <label class=\"custom-control custom-checkbox\">\n        <input type=\"checkbox\" class=\"custom-control-input custom-control-input--none\" [disabled]=\"disabledPms\" (click)=\"clickPermission($event.target.value)\" value=\"OpportunityDeleteOpportunity\" [checked]=\"getCheckedPermission('OpportunityDeleteOpportunity')\">\n        <span class=\"custom-control-indicator\"></span>\n      </label>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-3\"><i class=\"fa fa-angle-right mx-2\" aria-hidden=\"true\"></i>Xuất file</div>\n    <div class=\"col-md-1 text-center\">\n      <label class=\"custom-control custom-checkbox\">\n        <input type=\"checkbox\" class=\"custom-control-input custom-control-input--none\" [disabled]=\"disabledPms\" (click)=\"clickPermission($event.target.value)\" value=\"OpportunityExportFile\" [checked]=\"getCheckedPermission('OpportunityExportFile')\">\n        <span class=\"custom-control-indicator\"></span>\n      </label>\n    </div>\n  </div>\n\n  <div class=\"row mt-2\">\n    <div class=\"col-md-3 font-weight-bold\">Thông tin cơ hội</div>\n    <div class=\"col-md-1 text-center\">\n      <label class=\"custom-control custom-checkbox\">\n        <input type=\"checkbox\" class=\"custom-control-input custom-control-input--none\" [disabled]=\"disabledPms || !viewProspectInfo.checked\" [checked]=\"checkAllProspectInfo && viewProspectInfo.checked\" (click)=\"toggleProspectInfo($event.target.checked)\">\n        <span class=\"custom-control-indicator\"></span>\n      </label>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-3\"><i class=\"fa fa-angle-right mx-2\" aria-hidden=\"true\"></i>Sơ lược</div>\n    <div class=\"col-md-1 text-center\">\n      <label class=\"custom-control custom-checkbox\">\n        <input type=\"checkbox\" class=\"custom-control-input custom-control-input--none\" [disabled]=\"disabledPms || !viewProspectInfo.checked\" (click)=\"clickPermission($event.target.value)\" value=\"OpportunityOpportunitySummary\" [checked]=\"getCheckedPermission('OpportunityOpportunitySummary') && viewProspectInfo.checked\">\n        <span class=\"custom-control-indicator\"></span>\n      </label>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-3\"><i class=\"fa fa-angle-right mx-2\" aria-hidden=\"true\"></i>Xem chi tiết</div>\n    <div class=\"col-md-1 text-center\">\n      <label class=\"custom-control custom-checkbox\">\n        <input type=\"checkbox\" class=\"custom-control-input custom-control-input--none\" [disabled]=\"disabledPms || !viewProspectInfo.checked\" (click)=\"clickPermission($event.target.value)\" value=\"OpportunityViewOpportunityDetail\" [checked]=\"getCheckedPermission('OpportunityViewOpportunityDetail') && viewProspectInfo.checked\">\n        <span class=\"custom-control-indicator\"></span>\n      </label>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-3\"><i class=\"fa fa-angle-right mx-2\" aria-hidden=\"true\"></i>Xem bình luận</div>\n    <div class=\"col-md-1 text-center\">\n      <label class=\"custom-control custom-checkbox\">\n        <input type=\"checkbox\" class=\"custom-control-input custom-control-input--none\" [disabled]=\"disabledPms || !viewProspectInfo.checked\" (click)=\"clickPermission($event.target.value)\" value=\"OpportunityViewComments\" [checked]=\"getCheckedPermission('OpportunityViewComments') && viewProspectInfo.checked\">\n        <span class=\"custom-control-indicator\"></span>\n      </label>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-3\"><i class=\"fa fa-angle-right mx-2\" aria-hidden=\"true\"></i>Đăng bình luận</div>\n    <div class=\"col-md-1 text-center\">\n      <label class=\"custom-control custom-checkbox\">\n        <input type=\"checkbox\" class=\"custom-control-input custom-control-input--none\" [disabled]=\"disabledPms || !viewProspectInfo.checked\" (click)=\"clickPermission($event.target.value)\" value=\"OpportunityAddComment\" [checked]=\"getCheckedPermission('OpportunityAddComment') && viewProspectInfo.checked\">\n        <span class=\"custom-control-indicator\"></span>\n      </label>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-3\"><i class=\"fa fa-angle-right mx-2\" aria-hidden=\"true\"></i>Các hoạt động</div>\n    <div class=\"col-md-1 text-center\">\n      <label class=\"custom-control custom-checkbox\">\n        <input type=\"checkbox\" class=\"custom-control-input custom-control-input--none\" [disabled]=\"disabledPms || !viewProspectInfo.checked\" (click)=\"clickPermission($event.target.value)\" value=\"OpportunityActivites\" [checked]=\"getCheckedPermission('OpportunityActivites') && viewProspectInfo.checked\">\n        <span class=\"custom-control-indicator\"></span>\n      </label>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-3\"><i class=\"fa fa-angle-right mx-2\" aria-hidden=\"true\"></i>Các cập nhật</div>\n    <div class=\"col-md-1 text-center\">\n      <label class=\"custom-control custom-checkbox\">\n        <input type=\"checkbox\" class=\"custom-control-input custom-control-input--none\" [disabled]=\"disabledPms || !viewProspectInfo.checked\" (click)=\"clickPermission($event.target.value)\" value=\"OpportunityHistories\" [checked]=\"getCheckedPermission('OpportunityHistories') && viewProspectInfo.checked\">\n        <span class=\"custom-control-indicator\"></span>\n      </label>\n    </div>\n  </div>\n\n  <div class=\"my-4 text-center\">\n    <button class=\"btn btn-secondary ml-2\" routerLink=\"../contact\">\n      <i class=\"fa fa-angle-left mx-2\" aria-hidden=\"true\"></i> Trở về\n    </button>\n    <button class=\"btn btn-primary ml-2\" routerLink=\"../campaign\">\n      Tiếp <i class=\"fa fa-angle-right mx-2\" aria-hidden=\"true\"></i>\n    </button>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/layout/permission/permission-user/permission-user-opportunity/permission-user-opportunity.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host /deep/ .btn-secondary {\n  background-color: #b0b0b0; }\n\n.custom-control-input--disabled:disabled ~ .custom-control-indicator {\n  background-color: #17a2b8;\n  opacity: .5; }\n\n.custom-control-input--none:disabled ~ .custom-control-indicator {\n  background-image: none; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/layout/permission/permission-user/permission-user-opportunity/permission-user-opportunity.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PermissionUserOpportunityComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services__ = __webpack_require__("../../../../../src/app/shared/services/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__permission_user_component__ = __webpack_require__("../../../../../src/app/layout/permission/permission-user/permission-user.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PermissionUserOpportunityComponent = /** @class */ (function () {
    function PermissionUserOpportunityComponent(userGroupService) {
        this.userGroupService = userGroupService;
        this.isSelectAll = false;
        this.listPermissionData = [];
    }
    PermissionUserOpportunityComponent_1 = PermissionUserOpportunityComponent;
    Object.defineProperty(PermissionUserOpportunityComponent.prototype, "viewType", {
        get: function () {
            if (this.viewAll) {
                PermissionUserOpportunityComponent_1.opportunityViewType = true;
                return true;
            }
            else if (this.viewByCurrentUser) {
                PermissionUserOpportunityComponent_1.opportunityViewType = false;
                return false;
            }
            else {
                PermissionUserOpportunityComponent_1.opportunityViewType = null;
                return null;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PermissionUserOpportunityComponent.prototype, "disabledPms", {
        get: function () {
            if (this.viewType == null) {
                return true;
            }
            else {
                return false;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PermissionUserOpportunityComponent.prototype, "checkAllProspectList", {
        get: function () {
            var value = true;
            var listPms = ['OpportunityAddOpportunity', 'OpportunityViewOpportunityInformation', 'OpportunityEditOpportunity', 'OpportunitySendEmail', 'OpportunityDeleteOpportunity', 'OpportunityExportFile'];
            listPms.forEach(function (pms) {
                if (!__WEBPACK_IMPORTED_MODULE_2__permission_user_component__["a" /* PermissionUserComponent */].listPermissionData.find(function (i) { return i.functionWeb.no === pms; })) {
                    value = false;
                }
            });
            return value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PermissionUserOpportunityComponent.prototype, "checkAllProspectInfo", {
        get: function () {
            var value = true;
            var listPms = ['OpportunityOpportunitySummary', 'OpportunityViewOpportunityDetail', 'OpportunityViewComments', 'OpportunityAddComment', 'OpportunityActivites', 'OpportunityHistories'];
            listPms.forEach(function (pms) {
                if (!__WEBPACK_IMPORTED_MODULE_2__permission_user_component__["a" /* PermissionUserComponent */].listPermissionData.find(function (i) { return i.functionWeb.no === pms; })) {
                    value = false;
                }
            });
            return value;
        },
        enumerable: true,
        configurable: true
    });
    PermissionUserOpportunityComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getPermissionList('Opportunity');
        this.listPermissionData = __WEBPACK_IMPORTED_MODULE_2__permission_user_component__["a" /* PermissionUserComponent */].listPermissionData.filter(function (i) { return i.functionWeb.no.startsWith('Opportunity'); });
        this.userGroupService.checkPermission().subscribe(function (data) {
            _this.listPermissionData = __WEBPACK_IMPORTED_MODULE_2__permission_user_component__["a" /* PermissionUserComponent */].listPermissionData.filter(function (i) { return i.functionWeb.no.startsWith('Opportunity'); });
            _this.checkViewType();
        });
    };
    PermissionUserOpportunityComponent.prototype.getPermissionList = function (module) {
        var _this = this;
        this.userGroupService.getListPermissionDefault(module).subscribe(function (data) {
            _this.listPermission = data;
            _this.checkViewType();
        });
    };
    PermissionUserOpportunityComponent.prototype.checkViewType = function () {
        if (this.listPermissionData.length > 0) {
            var pms = this.listPermissionData[0];
            if (pms) {
                if (pms.type === true) {
                    this.viewAll = true;
                    this.viewByCurrentUser = true;
                }
                else if (pms.type === false) {
                    this.viewByCurrentUser = true;
                }
            }
            else {
                this.viewAll = null;
                this.viewByCurrentUser = null;
            }
        }
    };
    PermissionUserOpportunityComponent.prototype.selectAll = function (permission) {
        var _this = this;
        permission.forEach(function (i) { return i.checkboxSelected = _this.isSelectAll; });
    };
    PermissionUserOpportunityComponent.prototype.getCheckedPermission = function (no) {
        if (this.listPermission && this.listPermission.length > 0) {
            // return this.listPermission.find(i => i.no === no) ? true : false;
            return __WEBPACK_IMPORTED_MODULE_2__permission_user_component__["a" /* PermissionUserComponent */].listPermissionData.find(function (i) { return i.functionWeb.no === no; }) ? true : false;
        }
        else {
            return false;
        }
    };
    PermissionUserOpportunityComponent.prototype.clickPermission = function (value) {
        var pms = this.listPermission.find(function (i) { return i.no === value; });
        var valueInListTotal = __WEBPACK_IMPORTED_MODULE_2__permission_user_component__["a" /* PermissionUserComponent */].listPermissionData.find(function (i) { return i.functionWeb.no === pms.no; });
        if (valueInListTotal) {
            var idx = __WEBPACK_IMPORTED_MODULE_2__permission_user_component__["a" /* PermissionUserComponent */].listPermissionData.findIndex(function (i) { return i.functionWeb.no === pms.no; });
            __WEBPACK_IMPORTED_MODULE_2__permission_user_component__["a" /* PermissionUserComponent */].listPermissionData.splice(idx, 1);
        }
        else {
            var valuePushToList = {
                category: null,
                functionWeb: pms,
                type: this.viewType,
                userGroup: null
            };
            __WEBPACK_IMPORTED_MODULE_2__permission_user_component__["a" /* PermissionUserComponent */].listPermissionData.push(valuePushToList);
        }
    };
    PermissionUserOpportunityComponent.prototype.viewAllClick = function (value) {
        this.viewAll = value;
        this.viewByCurrentUser = value;
        // PermissionUserComponent.listPermissionData.filter(i => i.functionWeb.no.startsWith('Opportunity')).forEach(i => i.type = this.viewType);
        var listPms = ['OpportunityAddOpportunity', 'OpportunityViewOpportunityInformation', 'OpportunityEditOpportunity',
            'OpportunityConfigCustomerResource', 'OpportunityConfigCustomerStep', 'OpportunityConfigApproachChannel',
            'OpportunitySendEmail', 'OpportunityDeleteOpportunity', 'OpportunityExportFile',
            'OpportunityOpportunitySummary', 'OpportunityViewOpportunityDetail', 'OpportunityViewComments', 'OpportunityAddComment', 'OpportunityActivites', 'OpportunityHistories'];
        this.toggleList(listPms, value);
    };
    PermissionUserOpportunityComponent.prototype.viewUserClick = function (value) {
        var _this = this;
        this.viewByCurrentUser = value;
        __WEBPACK_IMPORTED_MODULE_2__permission_user_component__["a" /* PermissionUserComponent */].listPermissionData.filter(function (i) { return i.functionWeb.no.startsWith('Opportunity'); }).forEach(function (i) { return i.type = _this.viewType; });
    };
    PermissionUserOpportunityComponent.prototype.toggleProspectList = function (value) {
        var listPms = ['OpportunityAddOpportunity', 'OpportunityViewOpportunityInformation', 'OpportunityEditOpportunity',
            'OpportunityConfigCustomerResource', 'OpportunityConfigCustomerStep', 'OpportunityConfigApproachChannel',
            'OpportunitySendEmail', 'OpportunityDeleteOpportunity', 'OpportunityExportFile'];
        this.toggleList(listPms, value);
    };
    PermissionUserOpportunityComponent.prototype.toggleProspectInfo = function (value) {
        var listPms = ['OpportunityOpportunitySummary', 'OpportunityViewOpportunityDetail', 'OpportunityViewComments', 'OpportunityAddComment', 'OpportunityActivites', 'OpportunityHistories'];
        this.toggleList(listPms, value);
    };
    PermissionUserOpportunityComponent.prototype.toggleList = function (pmsArr, value) {
        var _this = this;
        pmsArr.forEach(function (pmsItem) {
            var valueInListTotal = __WEBPACK_IMPORTED_MODULE_2__permission_user_component__["a" /* PermissionUserComponent */].listPermissionData.find(function (i) { return i.functionWeb.no === pmsItem; });
            if (value) {
                if (!valueInListTotal) {
                    var pms = _this.listPermission.find(function (i) { return i.no === pmsItem; });
                    var valuePushToList = {
                        category: null,
                        functionWeb: pms,
                        type: _this.viewType,
                        userGroup: null
                    };
                    __WEBPACK_IMPORTED_MODULE_2__permission_user_component__["a" /* PermissionUserComponent */].listPermissionData.push(valuePushToList);
                }
            }
            else {
                if (valueInListTotal) {
                    var idx = __WEBPACK_IMPORTED_MODULE_2__permission_user_component__["a" /* PermissionUserComponent */].listPermissionData.findIndex(function (i) { return i.functionWeb.no === pmsItem; });
                    __WEBPACK_IMPORTED_MODULE_2__permission_user_component__["a" /* PermissionUserComponent */].listPermissionData.splice(idx, 1);
                }
            }
        });
    };
    PermissionUserOpportunityComponent = PermissionUserOpportunityComponent_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-permission-user-opportunity',
            template: __webpack_require__("../../../../../src/app/layout/permission/permission-user/permission-user-opportunity/permission-user-opportunity.component.html"),
            styles: [__webpack_require__("../../../../../src/app/layout/permission/permission-user/permission-user-opportunity/permission-user-opportunity.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_services__["o" /* UserGroupService */]])
    ], PermissionUserOpportunityComponent);
    return PermissionUserOpportunityComponent;
    var PermissionUserOpportunityComponent_1;
}());



/***/ }),

/***/ "../../../../../src/app/layout/permission/permission-user/permission-user-permission/permission-user-permission.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"listPermission && listPermission.length > 0\">\n\n  <div class=\"row mt-2\">\n    <div class=\"col-md-3 font-weight-bold\">Quản lý nhóm người dùng</div>\n    <div class=\"col-md-1 text-center\">\n      <label class=\"custom-control custom-checkbox\">\n        <input type=\"checkbox\" class=\"custom-control-input\"  [checked]=\"checkAllProspectList\" (click)=\"toggleProspectList($event.target.checked)\">\n        <span class=\"custom-control-indicator\"></span>\n      </label>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-3\"><i class=\"fa fa-angle-right mx-2\" aria-hidden=\"true\"></i>Thêm mới nhóm người dùng</div>\n    <div class=\"col-md-1 text-center\">\n      <label class=\"custom-control custom-checkbox\">\n        <input type=\"checkbox\" class=\"custom-control-input\"  (click)=\"clickPermission($event.target.value)\" value=\"PermissionAddUserGroup\" [checked]=\"getCheckedPermission('PermissionAddUserGroup')\">\n        <span class=\"custom-control-indicator\"></span>\n      </label>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-3\"><i class=\"fa fa-angle-right mx-2\" aria-hidden=\"true\"></i>Xem thông tin nhóm người dùng</div>\n    <div class=\"col-md-1 text-center\">\n      <label class=\"custom-control custom-checkbox\">\n        <input type=\"checkbox\" class=\"custom-control-input\"  (click)=\"clickPermission($event.target.value)\" value=\"PermissionViewUserGroupInformation\" [checked]=\"getCheckedPermission('PermissionViewUserGroupInformation')\">\n        <span class=\"custom-control-indicator\"></span>\n      </label>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-3\"><i class=\"fa fa-angle-right mx-2\" aria-hidden=\"true\"></i>Sửa nhóm người dùng</div>\n    <div class=\"col-md-1 text-center\">\n      <label class=\"custom-control custom-checkbox\">\n        <input type=\"checkbox\" class=\"custom-control-input\"  (click)=\"clickPermission($event.target.value)\" value=\"PermissionEditUserGroup\" [checked]=\"getCheckedPermission('PermissionEditUserGroup')\">\n        <span class=\"custom-control-indicator\"></span>\n      </label>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-3\"><i class=\"fa fa-angle-right mx-2\" aria-hidden=\"true\"></i>Xóa nhóm người dùng</div>\n    <div class=\"col-md-1 text-center\">\n      <label class=\"custom-control custom-checkbox\">\n        <input type=\"checkbox\" class=\"custom-control-input\"  (click)=\"clickPermission($event.target.value)\" value=\"PermissionDeleteUserGroup\" [checked]=\"getCheckedPermission('PermissionDeleteUserGroup')\">\n        <span class=\"custom-control-indicator\"></span>\n      </label>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-3\"><i class=\"fa fa-angle-right mx-2\" aria-hidden=\"true\"></i>Phân quyền nhóm người dùng</div>\n    <div class=\"col-md-1 text-center\">\n      <label class=\"custom-control custom-checkbox\">\n        <input type=\"checkbox\" class=\"custom-control-input\"  (click)=\"clickPermission($event.target.value)\" value=\"PermissionSetUserGroupPermissions\" [checked]=\"getCheckedPermission('PermissionSetUserGroupPermissions')\" #viewProspectInfo>\n        <span class=\"custom-control-indicator\"></span>\n      </label>\n    </div>\n  </div>\n\n  <div class=\"row mt-2\">\n    <div class=\"col-md-3 font-weight-bold\">Phân quyền</div>\n    <div class=\"col-md-1 text-center\">\n      <label class=\"custom-control custom-checkbox\">\n        <input type=\"checkbox\" class=\"custom-control-input\" [disabled]=\"!viewProspectInfo.checked\" [checked]=\"checkAllProspectInfo && viewProspectInfo.checked\" (click)=\"toggleProspectInfo($event.target.checked)\">\n        <span class=\"custom-control-indicator\"></span>\n      </label>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-3\"><i class=\"fa fa-angle-right mx-2\" aria-hidden=\"true\"></i>Trang chủ</div>\n    <div class=\"col-md-1 text-center\">\n      <label class=\"custom-control custom-checkbox\">\n        <input type=\"checkbox\" class=\"custom-control-input\" [disabled]=\"!viewProspectInfo.checked\" (click)=\"clickPermission($event.target.value)\" value=\"PermissionHome\" [checked]=\"getCheckedPermission('PermissionHome') && viewProspectInfo.checked\">\n        <span class=\"custom-control-indicator\"></span>\n      </label>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-3\"><i class=\"fa fa-angle-right mx-2\" aria-hidden=\"true\"></i>Tiềm năng</div>\n    <div class=\"col-md-1 text-center\">\n      <label class=\"custom-control custom-checkbox\">\n        <input type=\"checkbox\" class=\"custom-control-input\" [disabled]=\"!viewProspectInfo.checked\" (click)=\"clickPermission($event.target.value)\" value=\"PermissionProspect\" [checked]=\"getCheckedPermission('PermissionProspect') && viewProspectInfo.checked\">\n        <span class=\"custom-control-indicator\"></span>\n      </label>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-3\"><i class=\"fa fa-angle-right mx-2\" aria-hidden=\"true\"></i>Khách hàng</div>\n    <div class=\"col-md-1 text-center\">\n      <label class=\"custom-control custom-checkbox\">\n        <input type=\"checkbox\" class=\"custom-control-input\" [disabled]=\"!viewProspectInfo.checked\" (click)=\"clickPermission($event.target.value)\" value=\"PermissionCustomer\" [checked]=\"getCheckedPermission('PermissionCustomer') && viewProspectInfo.checked\">\n        <span class=\"custom-control-indicator\"></span>\n      </label>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-3\"><i class=\"fa fa-angle-right mx-2\" aria-hidden=\"true\"></i>Liên hệ</div>\n    <div class=\"col-md-1 text-center\">\n      <label class=\"custom-control custom-checkbox\">\n        <input type=\"checkbox\" class=\"custom-control-input\" [disabled]=\"!viewProspectInfo.checked\" (click)=\"clickPermission($event.target.value)\" value=\"PermissionContact\" [checked]=\"getCheckedPermission('PermissionContact') && viewProspectInfo.checked\">\n        <span class=\"custom-control-indicator\"></span>\n      </label>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-3\"><i class=\"fa fa-angle-right mx-2\" aria-hidden=\"true\"></i>Cơ hội</div>\n    <div class=\"col-md-1 text-center\">\n      <label class=\"custom-control custom-checkbox\">\n        <input type=\"checkbox\" class=\"custom-control-input\" [disabled]=\"!viewProspectInfo.checked\" (click)=\"clickPermission($event.target.value)\" value=\"PermissionOpportunity\" [checked]=\"getCheckedPermission('PermissionOpportunity') && viewProspectInfo.checked\">\n        <span class=\"custom-control-indicator\"></span>\n      </label>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-3\"><i class=\"fa fa-angle-right mx-2\" aria-hidden=\"true\"></i>Chiến dịch</div>\n    <div class=\"col-md-1 text-center\">\n      <label class=\"custom-control custom-checkbox\">\n        <input type=\"checkbox\" class=\"custom-control-input\" [disabled]=\"!viewProspectInfo.checked\" (click)=\"clickPermission($event.target.value)\" value=\"PermissionCampaign\" [checked]=\"getCheckedPermission('PermissionCampaign') && viewProspectInfo.checked\">\n        <span class=\"custom-control-indicator\"></span>\n      </label>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-3\"><i class=\"fa fa-angle-right mx-2\" aria-hidden=\"true\"></i>Hoạt động</div>\n    <div class=\"col-md-1 text-center\">\n      <label class=\"custom-control custom-checkbox\">\n        <input type=\"checkbox\" class=\"custom-control-input\" [disabled]=\"!viewProspectInfo.checked\" (click)=\"clickPermission($event.target.value)\" value=\"PermissionActivity\" [checked]=\"getCheckedPermission('PermissionActivity') && viewProspectInfo.checked\">\n        <span class=\"custom-control-indicator\"></span>\n      </label>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-3\"><i class=\"fa fa-angle-right mx-2\" aria-hidden=\"true\"></i>Quản lý phân quyền</div>\n    <div class=\"col-md-1 text-center\">\n      <label class=\"custom-control custom-checkbox\">\n        <input type=\"checkbox\" class=\"custom-control-input\" [disabled]=\"!viewProspectInfo.checked\" (click)=\"clickPermission($event.target.value)\" value=\"PermissionManagePermission\" [checked]=\"getCheckedPermission('PermissionManagePermission') && viewProspectInfo.checked\">\n        <span class=\"custom-control-indicator\"></span>\n      </label>\n    </div>\n  </div>\n\n  <div class=\"my-4 text-center\">\n    <button class=\"btn btn-secondary ml-2\" routerLink=\"../activity\">\n      <i class=\"fa fa-angle-left mx-2\" aria-hidden=\"true\"></i> Trở về\n    </button>\n    <button class=\"btn btn-primary ml-2\" routerLink=\"../statistics\">\n      Tiếp <i class=\"fa fa-angle-right mx-2\" aria-hidden=\"true\"></i>\n    </button>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/layout/permission/permission-user/permission-user-permission/permission-user-permission.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host /deep/ .btn-secondary {\n  background-color: #b0b0b0; }\n\n.custom-control-input--disabled:disabled ~ .custom-control-indicator {\n  background-color: #17a2b8;\n  opacity: .5; }\n\n.cursor-disabled {\n  cursor: not-allowed; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/layout/permission/permission-user/permission-user-permission/permission-user-permission.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PermissionUserPermissionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services__ = __webpack_require__("../../../../../src/app/shared/services/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__permission_user_component__ = __webpack_require__("../../../../../src/app/layout/permission/permission-user/permission-user.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PermissionUserPermissionComponent = /** @class */ (function () {
    function PermissionUserPermissionComponent(userGroupService, dataService) {
        this.userGroupService = userGroupService;
        this.dataService = dataService;
        this.isSelectAll = false;
        this.listPermissionData = [];
    }
    Object.defineProperty(PermissionUserPermissionComponent.prototype, "viewType", {
        get: function () {
            if (this.viewAll) {
                return true;
            }
            else if (this.viewByCurrentUser) {
                return false;
            }
            else {
                return null;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PermissionUserPermissionComponent.prototype, "disabledPms", {
        get: function () {
            if (this.viewType == null) {
                return true;
            }
            else {
                return false;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PermissionUserPermissionComponent.prototype, "checkAllProspectList", {
        get: function () {
            var value = true;
            var listPms = ['PermissionAddUserGroup', 'PermissionViewUserGroupInformation', 'PermissionEditUserGroup', 'PermissionDeleteUserGroup', 'PermissionSetUserGroupPermissions'];
            listPms.forEach(function (pms) {
                if (!__WEBPACK_IMPORTED_MODULE_2__permission_user_component__["a" /* PermissionUserComponent */].listPermissionData.find(function (i) { return i.functionWeb.no === pms; })) {
                    value = false;
                }
            });
            return value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PermissionUserPermissionComponent.prototype, "checkAllProspectInfo", {
        get: function () {
            var value = true;
            var listPms = ['PermissionHome', 'PermissionProspect', 'PermissionCustomer', 'PermissionContact', 'PermissionOpportunity', 'PermissionCampaign', 'PermissionActivity', 'PermissionManagePermission'];
            listPms.forEach(function (pms) {
                if (!__WEBPACK_IMPORTED_MODULE_2__permission_user_component__["a" /* PermissionUserComponent */].listPermissionData.find(function (i) { return i.functionWeb.no === pms; })) {
                    value = false;
                }
            });
            return value;
        },
        enumerable: true,
        configurable: true
    });
    PermissionUserPermissionComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getPermissionList('Permission');
        this.listPermissionData = __WEBPACK_IMPORTED_MODULE_2__permission_user_component__["a" /* PermissionUserComponent */].listPermissionData.filter(function (i) { return i.functionWeb.no.startsWith('Permission'); });
        this.userGroupService.checkPermission().subscribe(function (data) {
            _this.listPermissionData = __WEBPACK_IMPORTED_MODULE_2__permission_user_component__["a" /* PermissionUserComponent */].listPermissionData.filter(function (i) { return i.functionWeb.no.startsWith('Permission'); });
            _this.checkViewType();
        });
    };
    PermissionUserPermissionComponent.prototype.getPermissionList = function (module) {
        var _this = this;
        this.userGroupService.getListPermissionDefault(module).subscribe(function (data) {
            _this.listPermission = data;
            _this.checkViewType();
        });
    };
    PermissionUserPermissionComponent.prototype.checkViewType = function () {
        if (this.listPermissionData.length > 0) {
            var pms = this.listPermissionData[0];
            if (pms) {
                if (pms.type === true) {
                    this.viewAll = true;
                    this.viewByCurrentUser = true;
                }
                else if (pms.type === false) {
                    this.viewByCurrentUser = true;
                }
            }
            else {
                this.viewAll = null;
                this.viewByCurrentUser = null;
            }
        }
    };
    PermissionUserPermissionComponent.prototype.selectAll = function (permission) {
        var _this = this;
        permission.forEach(function (i) { return i.checkboxSelected = _this.isSelectAll; });
    };
    PermissionUserPermissionComponent.prototype.getCheckedPermission = function (no) {
        if (this.listPermission && this.listPermission.length > 0) {
            // return this.listPermission.find(i => i.no === no) ? true : false;
            return __WEBPACK_IMPORTED_MODULE_2__permission_user_component__["a" /* PermissionUserComponent */].listPermissionData.find(function (i) { return i.functionWeb.no === no; }) ? true : false;
        }
        else {
            return false;
        }
    };
    PermissionUserPermissionComponent.prototype.clickPermission = function (value) {
        var pms = this.listPermission.find(function (i) { return i.no === value; });
        var valueInListTotal = __WEBPACK_IMPORTED_MODULE_2__permission_user_component__["a" /* PermissionUserComponent */].listPermissionData.find(function (i) { return i.functionWeb.no === pms.no; });
        if (valueInListTotal) {
            var idx = __WEBPACK_IMPORTED_MODULE_2__permission_user_component__["a" /* PermissionUserComponent */].listPermissionData.findIndex(function (i) { return i.functionWeb.no === pms.no; });
            __WEBPACK_IMPORTED_MODULE_2__permission_user_component__["a" /* PermissionUserComponent */].listPermissionData.splice(idx, 1);
        }
        else {
            var valuePushToList = {
                category: null,
                functionWeb: pms,
                type: true,
                userGroup: null
            };
            __WEBPACK_IMPORTED_MODULE_2__permission_user_component__["a" /* PermissionUserComponent */].listPermissionData.push(valuePushToList);
        }
    };
    PermissionUserPermissionComponent.prototype.viewAllClick = function (value) {
        this.viewAll = value;
        this.viewByCurrentUser = value;
    };
    PermissionUserPermissionComponent.prototype.toggleProspectList = function (value) {
        var listPms = ['PermissionAddUserGroup', 'PermissionViewUserGroupInformation', 'PermissionEditUserGroup', 'PermissionDeleteUserGroup', 'PermissionSetUserGroupPermissions'];
        this.toggleList(listPms, value);
    };
    PermissionUserPermissionComponent.prototype.toggleProspectInfo = function (value) {
        var listPms = ['PermissionHome', 'PermissionProspect', 'PermissionCustomer', 'PermissionContact', 'PermissionOpportunity', 'PermissionCampaign', 'PermissionActivity', 'PermissionManagePermission'];
        this.toggleList(listPms, value);
    };
    PermissionUserPermissionComponent.prototype.toggleList = function (pmsArr, value) {
        var _this = this;
        pmsArr.forEach(function (pmsItem) {
            var valueInListTotal = __WEBPACK_IMPORTED_MODULE_2__permission_user_component__["a" /* PermissionUserComponent */].listPermissionData.filter(function (i) { return i.functionWeb.no === pmsItem; });
            if (value) {
                if (valueInListTotal.length == 0) {
                    var pms = _this.listPermission.find(function (i) { return i.no === pmsItem; });
                    var valuePushToList = {
                        category: null,
                        functionWeb: pms,
                        type: true,
                        userGroup: null
                    };
                    __WEBPACK_IMPORTED_MODULE_2__permission_user_component__["a" /* PermissionUserComponent */].listPermissionData.push(valuePushToList);
                }
            }
            else {
                if (valueInListTotal.length > 0) {
                    valueInListTotal.forEach(function (item) {
                        var idx = __WEBPACK_IMPORTED_MODULE_2__permission_user_component__["a" /* PermissionUserComponent */].listPermissionData.findIndex(function (i) { return i.functionWeb.no === item.functionWeb.no; });
                        // tslint:disable-next-line:no-unused-expression
                        idx !== -1 && __WEBPACK_IMPORTED_MODULE_2__permission_user_component__["a" /* PermissionUserComponent */].listPermissionData.splice(idx, 1);
                    });
                }
            }
        });
    };
    PermissionUserPermissionComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-permission-user-permission',
            template: __webpack_require__("../../../../../src/app/layout/permission/permission-user/permission-user-permission/permission-user-permission.component.html"),
            styles: [__webpack_require__("../../../../../src/app/layout/permission/permission-user/permission-user-permission/permission-user-permission.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_services__["o" /* UserGroupService */],
            __WEBPACK_IMPORTED_MODULE_1__shared_services__["j" /* DataService */]])
    ], PermissionUserPermissionComponent);
    return PermissionUserPermissionComponent;
}());



/***/ }),

/***/ "../../../../../src/app/layout/permission/permission-user/permission-user-prospect/permission-user-prospect.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"listPermission && listPermission.length > 0\">\n  <div class=\"row mt-3\">\n    <div class=\"col-md-3\"><b>Xem tiềm năng</b></div>\n    <div class=\"col-md-2 text-center center-parent\">\n      <label class=\"custom-control custom-checkbox mb-0 pr-3\">\n        <input type=\"checkbox\" class=\"custom-control-input\" (click)=\"viewAllClick($event.target.checked)\" [(ngModel)]=\"viewAll\">\n        <span class=\"custom-control-indicator\"></span>\n      </label>\n      Tất cả\n    </div>\n    <div class=\"col-md-2 text-center text-nowrap center-parent\">\n      <label class=\"custom-control custom-checkbox mb-0 pr-3\">\n        <input type=\"checkbox\" class=\"custom-control-input custom-control-input--disabled\" (click)=\"viewUserClick($event.target.checked)\" [disabled]=\"viewAll\" [(ngModel)]=\"viewByCurrentUser\">\n        <span class=\"custom-control-indicator\"></span>\n      </label>\n      Theo người dùng\n    </div>\n  </div>\n\n  <div class=\"row mt-2\">\n    <div class=\"col-md-3 font-weight-bold\">Danh sách tiềm năng</div>\n    <div class=\"col-md-1 text-center\">\n      <label class=\"custom-control custom-checkbox\">\n        <input type=\"checkbox\" class=\"custom-control-input custom-control-input--none\" [disabled]=\"disabledPms\" [checked]=\"checkAllProspectList\" (click)=\"toggleProspectList($event.target.checked)\">\n        <span class=\"custom-control-indicator\"></span>\n      </label>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-3\"><i class=\"fa fa-angle-right mx-2\" aria-hidden=\"true\"></i>Thêm mới tiềm năng</div>\n    <div class=\"col-md-1 text-center\">\n      <label class=\"custom-control custom-checkbox\">\n        <input type=\"checkbox\" class=\"custom-control-input custom-control-input--none\" [disabled]=\"disabledPms\" (click)=\"clickPermission($event.target.value)\" value=\"ProspectAddProspect\" [checked]=\"getCheckedPermission('ProspectAddProspect')\">\n        <span class=\"custom-control-indicator\"></span>\n      </label>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-3\"><i class=\"fa fa-angle-right mx-2\" aria-hidden=\"true\"></i>Xem thông tin tiềm năng</div>\n    <div class=\"col-md-1 text-center\">\n      <label class=\"custom-control custom-checkbox\">\n        <input type=\"checkbox\" class=\"custom-control-input custom-control-input--none\" [disabled]=\"disabledPms\" (click)=\"clickPermission($event.target.value)\" value=\"ProspectViewProspectInformation\" [checked]=\"getCheckedPermission('ProspectViewProspectInformation')\" #viewProspectInfo>\n        <span class=\"custom-control-indicator\"></span>\n      </label>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-3\"><i class=\"fa fa-angle-right mx-2\" aria-hidden=\"true\"></i>Sửa tiềm năng</div>\n    <div class=\"col-md-1 text-center\">\n      <label class=\"custom-control custom-checkbox\">\n        <input type=\"checkbox\" class=\"custom-control-input custom-control-input--none\" [disabled]=\"disabledPms\" (click)=\"clickPermission($event.target.value)\" value=\"ProspectEditProspect\" [checked]=\"getCheckedPermission('ProspectEditProspect')\" #editProspect>\n        <span class=\"custom-control-indicator\"></span>\n      </label>\n    </div>\n  </div>\n\n\n\n  <div class=\"row\">\n    <div class=\"col-md-3\"><i class=\"fa fa-angle-double-right ml-3 mr-2\" aria-hidden=\"true\"></i>Cấu hình Đánh giá</div>\n    <div class=\"col-md-1 text-center\">\n      <label class=\"custom-control custom-checkbox\">\n        <input type=\"checkbox\" class=\"custom-control-input custom-control-input--none\" [disabled]=\"disabledPms || !editProspect.checked\" (click)=\"clickPermission($event.target.value)\" value=\"ProspectConfigRate\" [checked]=\"getCheckedPermission('ProspectConfigRate') && editProspect.checked\">\n        <span class=\"custom-control-indicator\"></span>\n      </label>\n    </div>\n  </div>\n\n  <div class=\"row\">\n    <div class=\"col-md-3\"><i class=\"fa fa-angle-double-right ml-3 mr-2\" aria-hidden=\"true\"></i>Cấu hình Nguồn tiềm năng</div>\n    <div class=\"col-md-1 text-center\">\n      <label class=\"custom-control custom-checkbox\">\n        <input type=\"checkbox\" class=\"custom-control-input custom-control-input--none\" [disabled]=\"disabledPms || !editProspect.checked\" (click)=\"clickPermission($event.target.value)\" value=\"ProspectConfigProspectResource\" [checked]=\"getCheckedPermission('ProspectConfigProspectResource') && editProspect.checked\">\n        <span class=\"custom-control-indicator\"></span>\n      </label>\n    </div>\n  </div>\n\n  <div class=\"row\">\n    <div class=\"col-md-3\"><i class=\"fa fa-angle-double-right ml-3 mr-2\" aria-hidden=\"true\"></i>Cấu hình cần xử lý bởi</div>\n    <div class=\"col-md-1 text-center\">\n      <label class=\"custom-control custom-checkbox\">\n        <input type=\"checkbox\" class=\"custom-control-input custom-control-input--none\" [disabled]=\"disabledPms || !editProspect.checked\" (click)=\"clickPermission($event.target.value)\" value=\"ProspectConfigHandler\" [checked]=\"getCheckedPermission('ProspectConfigHandler') && editProspect.checked\">\n        <span class=\"custom-control-indicator\"></span>\n      </label>\n    </div>\n  </div>\n\n  <div class=\"row\">\n    <div class=\"col-md-3\"><i class=\"fa fa-angle-double-right ml-3 mr-2\" aria-hidden=\"true\"></i>Cấu hình D&B</div>\n    <div class=\"col-md-1 text-center\">\n      <label class=\"custom-control custom-checkbox\">\n        <input type=\"checkbox\" class=\"custom-control-input custom-control-input--none\" [disabled]=\"disabledPms || !editProspect.checked\" (click)=\"clickPermission($event.target.value)\" value=\"ProspectConfigDB\" [checked]=\"getCheckedPermission('ProspectConfigDB') && editProspect.checked\">\n        <span class=\"custom-control-indicator\"></span>\n      </label>\n    </div>\n  </div>\n\n  <div class=\"row\">\n    <div class=\"col-md-3\"><i class=\"fa fa-angle-double-right ml-3 mr-2\" aria-hidden=\"true\"></i>Cấu hình Kênh tiếp cận</div>\n    <div class=\"col-md-1 text-center\">\n      <label class=\"custom-control custom-checkbox\">\n        <input type=\"checkbox\" class=\"custom-control-input custom-control-input--none\" [disabled]=\"disabledPms || !editProspect.checked\" (click)=\"clickPermission($event.target.value)\" value=\"ProspectConfigApproachChannel\" [checked]=\"getCheckedPermission('ProspectConfigApproachChannel') && editProspect.checked\">\n        <span class=\"custom-control-indicator\"></span>\n      </label>\n    </div>\n  </div>\n\n  <div class=\"row\">\n    <div class=\"col-md-3\"><i class=\"fa fa-angle-double-right ml-3 mr-2\" aria-hidden=\"true\"></i>Sửa Đã tiếp cận</div>\n    <div class=\"col-md-1 text-center\">\n      <label class=\"custom-control custom-checkbox\">\n        <input type=\"checkbox\" class=\"custom-control-input custom-control-input--none\" [disabled]=\"disabledPms || !editProspect.checked\" (click)=\"clickPermission($event.target.value)\" value=\"ProspectEditApproached\" [checked]=\"getCheckedPermission('ProspectEditApproached') && editProspect.checked\">\n        <span class=\"custom-control-indicator\"></span>\n      </label>\n    </div>\n  </div>\n\n  <div class=\"row\">\n    <div class=\"col-md-3\"><i class=\"fa fa-angle-double-right ml-3 mr-2\" aria-hidden=\"true\"></i>Sửa Cơ hội bán hàng</div>\n    <div class=\"col-md-1 text-center\">\n      <label class=\"custom-control custom-checkbox\">\n        <input type=\"checkbox\" class=\"custom-control-input custom-control-input--none\" [disabled]=\"disabledPms || !editProspect.checked\" (click)=\"clickPermission($event.target.value)\" value=\"ProspectEditSaleOpportunity\" [checked]=\"getCheckedPermission('ProspectEditSaleOpportunity') && editProspect.checked\">\n        <span class=\"custom-control-indicator\"></span>\n      </label>\n    </div>\n  </div>\n\n  <div class=\"row\">\n    <div class=\"col-md-3\"><i class=\"fa fa-angle-double-right ml-3 mr-2\" aria-hidden=\"true\"></i>Sửa Tình trạng</div>\n    <div class=\"col-md-1 text-center\">\n      <label class=\"custom-control custom-checkbox\">\n        <input type=\"checkbox\" class=\"custom-control-input custom-control-input--none\" [disabled]=\"disabledPms || !editProspect.checked\" (click)=\"clickPermission($event.target.value)\" value=\"ProspectEditPotentialStatus\" [checked]=\"getCheckedPermission('ProspectEditPotentialStatus') && editProspect.checked\">\n        <span class=\"custom-control-indicator\"></span>\n      </label>\n    </div>\n  </div>\n\n  <div class=\"row\">\n    <div class=\"col-md-3\"><i class=\"fa fa-angle-double-right ml-3 mr-2\" aria-hidden=\"true\"></i>Sửa Kết quả</div>\n    <div class=\"col-md-1 text-center\">\n      <label class=\"custom-control custom-checkbox\">\n        <input type=\"checkbox\" class=\"custom-control-input custom-control-input--none\" [disabled]=\"disabledPms || !editProspect.checked\" (click)=\"clickPermission($event.target.value)\" value=\"ProspectEditResult\" [checked]=\"getCheckedPermission('ProspectEditResult') && editProspect.checked\">\n        <span class=\"custom-control-indicator\"></span>\n      </label>\n    </div>\n  </div>\n\n\n\n\n\n\n  <div class=\"row\">\n    <div class=\"col-md-3\"><i class=\"fa fa-angle-right mx-2\" aria-hidden=\"true\"></i>Gửi email cho tiềm năng</div>\n    <div class=\"col-md-1 text-center\">\n      <label class=\"custom-control custom-checkbox\">\n        <input type=\"checkbox\" class=\"custom-control-input custom-control-input--none\" [disabled]=\"disabledPms\" (click)=\"clickPermission($event.target.value)\" value=\"ProspectSendEmail\" [checked]=\"getCheckedPermission('ProspectSendEmail')\">\n        <span class=\"custom-control-indicator\"></span>\n      </label>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-3\"><i class=\"fa fa-angle-right mx-2\" aria-hidden=\"true\"></i>Xóa tiềm năng</div>\n    <div class=\"col-md-1 text-center\">\n      <label class=\"custom-control custom-checkbox\">\n        <input type=\"checkbox\" class=\"custom-control-input custom-control-input--none\" [disabled]=\"disabledPms\" (click)=\"clickPermission($event.target.value)\" value=\"ProspectDeleteProspect\" [checked]=\"getCheckedPermission('ProspectDeleteProspect')\">\n        <span class=\"custom-control-indicator\"></span>\n      </label>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-3\"><i class=\"fa fa-angle-right mx-2\" aria-hidden=\"true\"></i>Nhập file + Tải template</div>\n    <div class=\"col-md-1 text-center\">\n      <label class=\"custom-control custom-checkbox\">\n        <input type=\"checkbox\" class=\"custom-control-input custom-control-input--none\" [disabled]=\"disabledPms\" (click)=\"clickPermission($event.target.value)\" value=\"ProspectImportDownloadProspectTemplate\" [checked]=\"getCheckedPermission('ProspectImportDownloadProspectTemplate')\">\n        <span class=\"custom-control-indicator\"></span>\n      </label>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-3\"><i class=\"fa fa-angle-right mx-2\" aria-hidden=\"true\"></i>Xuất file</div>\n    <div class=\"col-md-1 text-center\">\n      <label class=\"custom-control custom-checkbox\">\n        <input type=\"checkbox\" class=\"custom-control-input custom-control-input--none\" [disabled]=\"disabledPms\" (click)=\"clickPermission($event.target.value)\" value=\"ProspectExportFile\" [checked]=\"getCheckedPermission('ProspectExportFile')\">\n        <span class=\"custom-control-indicator\"></span>\n      </label>\n    </div>\n  </div>\n\n  <div class=\"row mt-2\">\n    <div class=\"col-md-3 font-weight-bold\">Thông tin tiềm năng</div>\n    <div class=\"col-md-1 text-center\">\n      <label class=\"custom-control custom-checkbox\">\n        <input type=\"checkbox\" class=\"custom-control-input custom-control-input--none\" [disabled]=\"disabledPms || !viewProspectInfo.checked\" [checked]=\"checkAllProspectInfo && viewProspectInfo.checked\" (click)=\"toggleProspectInfo($event.target.checked)\">\n        <span class=\"custom-control-indicator\"></span>\n      </label>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-3\"><i class=\"fa fa-angle-right mx-2\" aria-hidden=\"true\"></i>Sơ lược</div>\n    <div class=\"col-md-1 text-center\">\n      <label class=\"custom-control custom-checkbox\">\n        <input type=\"checkbox\" class=\"custom-control-input custom-control-input--none\" [disabled]=\"disabledPms || !viewProspectInfo.checked\" (click)=\"clickPermission($event.target.value)\" value=\"ProspectProspectSummary\" [checked]=\"getCheckedPermission('ProspectProspectSummary') && viewProspectInfo.checked\">\n        <span class=\"custom-control-indicator\"></span>\n      </label>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-3\"><i class=\"fa fa-angle-right mx-2\" aria-hidden=\"true\"></i>Xem chi tiết</div>\n    <div class=\"col-md-1 text-center\">\n      <label class=\"custom-control custom-checkbox\">\n        <input type=\"checkbox\" class=\"custom-control-input custom-control-input--none\" [disabled]=\"disabledPms || !viewProspectInfo.checked\" (click)=\"clickPermission($event.target.value)\" value=\"ProspectViewProspectDetail\" [checked]=\"getCheckedPermission('ProspectViewProspectDetail') && viewProspectInfo.checked\" #viewDetailProspectInfo>\n        <span class=\"custom-control-indicator\"></span>\n      </label>\n    </div>\n  </div>\n\n  <div class=\"row\">\n    <div class=\"col-md-3\"><i class=\"fa fa-angle-double-right ml-3 mr-2\" aria-hidden=\"true\"></i>Xem Đã tiếp cận</div>\n    <div class=\"col-md-1 text-center\">\n      <label class=\"custom-control custom-checkbox\">\n        <input type=\"checkbox\" class=\"custom-control-input custom-control-input--none\" [disabled]=\"disabledPms || !viewProspectInfo.checked || !viewDetailProspectInfo.checked\" (click)=\"clickPermission($event.target.value)\" value=\"ProspectViewApproached\" [checked]=\"getCheckedPermission('ProspectViewApproached') && viewProspectInfo.checked && viewDetailProspectInfo.checked\">\n        <span class=\"custom-control-indicator\"></span>\n      </label>\n    </div>\n  </div>\n  \n  <div class=\"row\">\n    <div class=\"col-md-3\"><i class=\"fa fa-angle-double-right ml-3 mr-2\" aria-hidden=\"true\"></i>Xem Cơ hội bán hàng</div>\n    <div class=\"col-md-1 text-center\">\n      <label class=\"custom-control custom-checkbox\">\n        <input type=\"checkbox\" class=\"custom-control-input custom-control-input--none\" [disabled]=\"disabledPms || !viewProspectInfo.checked || !viewDetailProspectInfo.checked\" (click)=\"clickPermission($event.target.value)\" value=\"ProspectViewSaleOpportunity\" [checked]=\"getCheckedPermission('ProspectViewSaleOpportunity') && viewProspectInfo.checked && viewDetailProspectInfo.checked\">\n        <span class=\"custom-control-indicator\"></span>\n      </label>\n    </div>\n  </div>\n\n  <div class=\"row\">\n    <div class=\"col-md-3\"><i class=\"fa fa-angle-double-right ml-3 mr-2\" aria-hidden=\"true\"></i>Xem Tình trạng</div>\n    <div class=\"col-md-1 text-center\">\n      <label class=\"custom-control custom-checkbox\">\n        <input type=\"checkbox\" class=\"custom-control-input custom-control-input--none\" [disabled]=\"disabledPms || !viewProspectInfo.checked || !viewDetailProspectInfo.checked\" (click)=\"clickPermission($event.target.value)\" value=\"ProspectViewPotentialStatus\" [checked]=\"getCheckedPermission('ProspectViewPotentialStatus') && viewProspectInfo.checked && viewDetailProspectInfo.checked\">\n        <span class=\"custom-control-indicator\"></span>\n      </label>\n    </div>\n  </div>\n\n  <div class=\"row\">\n    <div class=\"col-md-3\"><i class=\"fa fa-angle-double-right ml-3 mr-2\" aria-hidden=\"true\"></i>Xem Kết quả</div>\n    <div class=\"col-md-1 text-center\">\n      <label class=\"custom-control custom-checkbox\">\n        <input type=\"checkbox\" class=\"custom-control-input custom-control-input--none\" [disabled]=\"disabledPms || !viewProspectInfo.checked || !viewDetailProspectInfo.checked\" (click)=\"clickPermission($event.target.value)\" value=\"ProspectViewResult\" [checked]=\"getCheckedPermission('ProspectViewResult') && viewProspectInfo.checked && viewDetailProspectInfo.checked\">\n        <span class=\"custom-control-indicator\"></span>\n      </label>\n    </div>\n  </div>\n\n\n\n\n\n  <div class=\"row\">\n    <div class=\"col-md-3\"><i class=\"fa fa-angle-right mx-2\" aria-hidden=\"true\"></i>Xem bình luận</div>\n    <div class=\"col-md-1 text-center\">\n      <label class=\"custom-control custom-checkbox\">\n        <input type=\"checkbox\" class=\"custom-control-input custom-control-input--none\" [disabled]=\"disabledPms || !viewProspectInfo.checked\" (click)=\"clickPermission($event.target.value)\" value=\"ProspectViewComments\" [checked]=\"getCheckedPermission('ProspectViewComments') && viewProspectInfo.checked\">\n        <span class=\"custom-control-indicator\"></span>\n      </label>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-3\"><i class=\"fa fa-angle-right mx-2\" aria-hidden=\"true\"></i>Đăng bình luận</div>\n    <div class=\"col-md-1 text-center\">\n      <label class=\"custom-control custom-checkbox\">\n        <input type=\"checkbox\" class=\"custom-control-input custom-control-input--none\" [disabled]=\"disabledPms || !viewProspectInfo.checked\" (click)=\"clickPermission($event.target.value)\" value=\"ProspectAddComment\" [checked]=\"getCheckedPermission('ProspectAddComment') && viewProspectInfo.checked\">\n        <span class=\"custom-control-indicator\"></span>\n      </label>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-3\"><i class=\"fa fa-angle-right mx-2\" aria-hidden=\"true\"></i>Các hoạt động</div>\n    <div class=\"col-md-1 text-center\">\n      <label class=\"custom-control custom-checkbox\">\n        <input type=\"checkbox\" class=\"custom-control-input custom-control-input--none\" [disabled]=\"disabledPms || !viewProspectInfo.checked\" (click)=\"clickPermission($event.target.value)\" value=\"ProspectActivities\" [checked]=\"getCheckedPermission('ProspectActivities') && viewProspectInfo.checked\">\n        <span class=\"custom-control-indicator\"></span>\n      </label>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-3\"><i class=\"fa fa-angle-right mx-2\" aria-hidden=\"true\"></i>Các cập nhật</div>\n    <div class=\"col-md-1 text-center\">\n      <label class=\"custom-control custom-checkbox\">\n        <input type=\"checkbox\" class=\"custom-control-input custom-control-input--none\" [disabled]=\"disabledPms || !viewProspectInfo.checked\" (click)=\"clickPermission($event.target.value)\" value=\"ProspectHistories\" [checked]=\"getCheckedPermission('ProspectHistories') && viewProspectInfo.checked\">\n        <span class=\"custom-control-indicator\"></span>\n      </label>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-3\"><i class=\"fa fa-angle-right mx-2\" aria-hidden=\"true\"></i>Chuyển đổi tiềm năng</div>\n    <div class=\"col-md-1 text-center\">\n      <label class=\"custom-control custom-checkbox\">\n        <input type=\"checkbox\" class=\"custom-control-input custom-control-input--none\" [disabled]=\"disabledPms || !viewProspectInfo.checked\" (click)=\"clickPermission($event.target.value)\" value=\"ProspectChangeProspect\" [checked]=\"getCheckedPermission('ProspectChangeProspect')\">\n        <span class=\"custom-control-indicator\"></span>\n      </label>\n    </div>\n  </div>\n\n  <div class=\"my-4 text-center\">\n    <button class=\"btn btn-secondary ml-2\" routerLink=\"../home\">\n      <i class=\"fa fa-angle-left mx-2\" aria-hidden=\"true\"></i> Trở về\n    </button>\n    <button class=\"btn btn-primary ml-2\" routerLink=\"../customer\">\n      Tiếp <i class=\"fa fa-angle-right mx-2\" aria-hidden=\"true\"></i>\n    </button>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/layout/permission/permission-user/permission-user-prospect/permission-user-prospect.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host /deep/ .btn-secondary {\n  background-color: #b0b0b0; }\n\n.custom-control-input--disabled:disabled ~ .custom-control-indicator {\n  background-color: #17a2b8;\n  opacity: .5; }\n\n.custom-control-input--none:disabled ~ .custom-control-indicator {\n  background-image: none; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/layout/permission/permission-user/permission-user-prospect/permission-user-prospect.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PermissionUserProspectComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services__ = __webpack_require__("../../../../../src/app/shared/services/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__permission_user_component__ = __webpack_require__("../../../../../src/app/layout/permission/permission-user/permission-user.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PermissionUserProspectComponent = /** @class */ (function () {
    function PermissionUserProspectComponent(userGroupService) {
        this.userGroupService = userGroupService;
        this.isSelectAll = false;
        this.listPermissionData = [];
    }
    PermissionUserProspectComponent_1 = PermissionUserProspectComponent;
    Object.defineProperty(PermissionUserProspectComponent.prototype, "viewType", {
        get: function () {
            if (this.viewAll) {
                PermissionUserProspectComponent_1.prospectViewType = true;
                return true;
            }
            else if (this.viewByCurrentUser) {
                PermissionUserProspectComponent_1.prospectViewType = false;
                return false;
            }
            else {
                PermissionUserProspectComponent_1.prospectViewType = null;
                return null;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PermissionUserProspectComponent.prototype, "disabledPms", {
        get: function () {
            if (this.viewType == null) {
                return true;
            }
            else {
                return false;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PermissionUserProspectComponent.prototype, "checkAllProspectList", {
        get: function () {
            var value = true;
            var listPms = ['ProspectAddProspect', 'ProspectViewProspectInformation', 'ProspectEditProspect', 'ProspectSendEmail', 'ProspectDeleteProspect', 'ProspectImportDownloadProspectTemplate', 'ProspectExportFile'];
            listPms.forEach(function (pms) {
                if (!__WEBPACK_IMPORTED_MODULE_2__permission_user_component__["a" /* PermissionUserComponent */].listPermissionData.find(function (i) { return i.functionWeb.no === pms; })) {
                    value = false;
                }
            });
            return value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PermissionUserProspectComponent.prototype, "checkAllProspectInfo", {
        get: function () {
            var value = true;
            var listPms = ['ProspectProspectSummary', 'ProspectViewProspectDetail', 'ProspectViewComments', 'ProspectAddComment', 'ProspectActivities', 'ProspectHistories', 'ProspectChangeProspect'];
            listPms.forEach(function (pms) {
                if (!__WEBPACK_IMPORTED_MODULE_2__permission_user_component__["a" /* PermissionUserComponent */].listPermissionData.find(function (i) { return i.functionWeb.no === pms; })) {
                    value = false;
                }
            });
            return value;
        },
        enumerable: true,
        configurable: true
    });
    PermissionUserProspectComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getPermissionList('Prospect');
        this.listPermissionData = __WEBPACK_IMPORTED_MODULE_2__permission_user_component__["a" /* PermissionUserComponent */].listPermissionData.filter(function (i) { return i.functionWeb.no.startsWith('Prospect'); });
        this.userGroupService.checkPermission().subscribe(function (data) {
            _this.listPermissionData = __WEBPACK_IMPORTED_MODULE_2__permission_user_component__["a" /* PermissionUserComponent */].listPermissionData.filter(function (i) { return i.functionWeb.no.startsWith('Prospect'); });
            _this.checkViewType();
        });
    };
    PermissionUserProspectComponent.prototype.getPermissionList = function (module) {
        var _this = this;
        this.userGroupService.getListPermissionDefault(module).subscribe(function (data) {
            _this.listPermission = data;
            _this.checkViewType();
        });
    };
    PermissionUserProspectComponent.prototype.checkViewType = function () {
        if (this.listPermissionData.length > 0) {
            var pms = this.listPermissionData[0];
            if (pms) {
                if (pms.type === true) {
                    this.viewAll = true;
                    this.viewByCurrentUser = true;
                }
                else if (pms.type === false) {
                    this.viewByCurrentUser = true;
                }
            }
            else {
                this.viewAll = null;
                this.viewByCurrentUser = null;
            }
        }
    };
    PermissionUserProspectComponent.prototype.selectAll = function (permission) {
        var _this = this;
        permission.forEach(function (i) { return i.checkboxSelected = _this.isSelectAll; });
    };
    PermissionUserProspectComponent.prototype.getCheckedPermission = function (no) {
        if (this.listPermission && this.listPermission.length > 0) {
            // return this.listPermission.find(i => i.no === no) ? true : false;
            return __WEBPACK_IMPORTED_MODULE_2__permission_user_component__["a" /* PermissionUserComponent */].listPermissionData.find(function (i) { return i.functionWeb.no === no; }) ? true : false;
        }
        else {
            return false;
        }
    };
    PermissionUserProspectComponent.prototype.clickPermission = function (value) {
        var pms = this.listPermission.find(function (i) { return i.no === value; });
        var valueInListTotal = __WEBPACK_IMPORTED_MODULE_2__permission_user_component__["a" /* PermissionUserComponent */].listPermissionData.find(function (i) { return i.functionWeb.no === pms.no; });
        if (valueInListTotal) {
            var idx = __WEBPACK_IMPORTED_MODULE_2__permission_user_component__["a" /* PermissionUserComponent */].listPermissionData.findIndex(function (i) { return i.functionWeb.no === pms.no; });
            __WEBPACK_IMPORTED_MODULE_2__permission_user_component__["a" /* PermissionUserComponent */].listPermissionData.splice(idx, 1);
        }
        else {
            var valuePushToList = {
                category: null,
                functionWeb: pms,
                type: this.viewType,
                userGroup: null
            };
            __WEBPACK_IMPORTED_MODULE_2__permission_user_component__["a" /* PermissionUserComponent */].listPermissionData.push(valuePushToList);
        }
    };
    PermissionUserProspectComponent.prototype.viewAllClick = function (value) {
        this.viewAll = value;
        this.viewByCurrentUser = value;
        // PermissionUserComponent.listPermissionData.filter(i => i.functionWeb.no.startsWith('Prospect')).forEach(i => i.type = this.viewType);
        var listPms = ['ProspectAddProspect', 'ProspectViewProspectInformation', 'ProspectEditProspect',
            'ProspectConfigRate', 'ProspectConfigProspectResource', 'ProspectConfigHandler', 'ProspectConfigDB', 'ProspectConfigApproachChannel', 'ProspectEditApproached', 'ProspectEditSaleOpportunity', 'ProspectEditPotentialStatus', 'ProspectEditResult',
            'ProspectSendEmail', 'ProspectDeleteProspect', 'ProspectImportDownloadProspectTemplate', 'ProspectExportFile',
            'ProspectProspectSummary', 'ProspectViewProspectDetail', 'ProspectViewApproached', 'ProspectViewSaleOpportunity', 'ProspectViewPotentialStatus', 'ProspectViewResult', 'ProspectViewComments', 'ProspectAddComment', 'ProspectActivities',
            'ProspectHistories', 'ProspectChangeProspect'];
        this.toggleList(listPms, value);
    };
    PermissionUserProspectComponent.prototype.viewUserClick = function (value) {
        var _this = this;
        this.viewByCurrentUser = value;
        __WEBPACK_IMPORTED_MODULE_2__permission_user_component__["a" /* PermissionUserComponent */].listPermissionData.filter(function (i) { return i.functionWeb.no.startsWith('Prospect'); }).forEach(function (i) { return i.type = _this.viewType; });
    };
    PermissionUserProspectComponent.prototype.toggleProspectList = function (value) {
        var listPms = ['ProspectAddProspect', 'ProspectViewProspectInformation', 'ProspectEditProspect',
            'ProspectConfigRate', 'ProspectConfigProspectResource', 'ProspectConfigHandler', 'ProspectConfigDB', 'ProspectConfigApproachChannel', 'ProspectEditApproached', 'ProspectEditSaleOpportunity', 'ProspectEditPotentialStatus', 'ProspectEditResult',
            'ProspectSendEmail', 'ProspectDeleteProspect', 'ProspectImportDownloadProspectTemplate', 'ProspectExportFile'];
        this.toggleList(listPms, value);
    };
    PermissionUserProspectComponent.prototype.toggleProspectInfo = function (value) {
        var listPms = ['ProspectProspectSummary', 'ProspectViewProspectDetail', 'ProspectViewComments', 'ProspectAddComment', 'ProspectActivities', 'ProspectHistories', 'ProspectChangeProspect'];
        this.toggleList(listPms, value);
    };
    PermissionUserProspectComponent.prototype.toggleList = function (pmsArr, value) {
        var _this = this;
        pmsArr.forEach(function (pmsItem) {
            var valueInListTotal = __WEBPACK_IMPORTED_MODULE_2__permission_user_component__["a" /* PermissionUserComponent */].listPermissionData.find(function (i) { return i.functionWeb.no === pmsItem; });
            if (value) {
                if (!valueInListTotal) {
                    var pms = _this.listPermission.find(function (i) { return i.no === pmsItem; });
                    var valuePushToList = {
                        category: null,
                        functionWeb: pms,
                        type: _this.viewType,
                        userGroup: null
                    };
                    __WEBPACK_IMPORTED_MODULE_2__permission_user_component__["a" /* PermissionUserComponent */].listPermissionData.push(valuePushToList);
                }
            }
            else {
                if (valueInListTotal) {
                    var idx = __WEBPACK_IMPORTED_MODULE_2__permission_user_component__["a" /* PermissionUserComponent */].listPermissionData.findIndex(function (i) { return i.functionWeb.no === pmsItem; });
                    __WEBPACK_IMPORTED_MODULE_2__permission_user_component__["a" /* PermissionUserComponent */].listPermissionData.splice(idx, 1);
                }
            }
        });
    };
    PermissionUserProspectComponent = PermissionUserProspectComponent_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-permission-user-prospect',
            template: __webpack_require__("../../../../../src/app/layout/permission/permission-user/permission-user-prospect/permission-user-prospect.component.html"),
            styles: [__webpack_require__("../../../../../src/app/layout/permission/permission-user/permission-user-prospect/permission-user-prospect.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_services__["o" /* UserGroupService */]])
    ], PermissionUserProspectComponent);
    return PermissionUserProspectComponent;
    var PermissionUserProspectComponent_1;
}());



/***/ }),

/***/ "../../../../../src/app/layout/permission/permission-user/permission-user-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PermissionUserRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__permission_user_component__ = __webpack_require__("../../../../../src/app/layout/permission/permission-user/permission-user.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__permission_user_home_permission_user_home_component__ = __webpack_require__("../../../../../src/app/layout/permission/permission-user/permission-user-home/permission-user-home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__permission_user_prospect_permission_user_prospect_component__ = __webpack_require__("../../../../../src/app/layout/permission/permission-user/permission-user-prospect/permission-user-prospect.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__permission_user_customer_permission_user_customer_component__ = __webpack_require__("../../../../../src/app/layout/permission/permission-user/permission-user-customer/permission-user-customer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__permission_user_contact_permission_user_contact_component__ = __webpack_require__("../../../../../src/app/layout/permission/permission-user/permission-user-contact/permission-user-contact.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__permission_user_opportunity_permission_user_opportunity_component__ = __webpack_require__("../../../../../src/app/layout/permission/permission-user/permission-user-opportunity/permission-user-opportunity.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__permission_user_campaign_permission_user_campaign_component__ = __webpack_require__("../../../../../src/app/layout/permission/permission-user/permission-user-campaign/permission-user-campaign.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__permission_user_activity_permission_user_activity_component__ = __webpack_require__("../../../../../src/app/layout/permission/permission-user/permission-user-activity/permission-user-activity.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__permission_user_permission_permission_user_permission_component__ = __webpack_require__("../../../../../src/app/layout/permission/permission-user/permission-user-permission/permission-user-permission.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__permission_user_component__["a" /* PermissionUserComponent */],
        children: [
            {
                path: '',
                redirectTo: 'home'
            },
            {
                path: 'home',
                component: __WEBPACK_IMPORTED_MODULE_3__permission_user_home_permission_user_home_component__["a" /* PermissionUserHomeComponent */]
            },
            {
                path: 'prospect',
                component: __WEBPACK_IMPORTED_MODULE_4__permission_user_prospect_permission_user_prospect_component__["a" /* PermissionUserProspectComponent */]
            },
            {
                path: 'customer',
                component: __WEBPACK_IMPORTED_MODULE_5__permission_user_customer_permission_user_customer_component__["a" /* PermissionUserCustomerComponent */]
            },
            {
                path: 'contact',
                component: __WEBPACK_IMPORTED_MODULE_6__permission_user_contact_permission_user_contact_component__["a" /* PermissionUserContactComponent */]
            },
            {
                path: 'opportunity',
                component: __WEBPACK_IMPORTED_MODULE_7__permission_user_opportunity_permission_user_opportunity_component__["a" /* PermissionUserOpportunityComponent */]
            },
            {
                path: 'campaign',
                component: __WEBPACK_IMPORTED_MODULE_8__permission_user_campaign_permission_user_campaign_component__["a" /* PermissionUserCampaignComponent */]
            },
            {
                path: 'activity',
                component: __WEBPACK_IMPORTED_MODULE_9__permission_user_activity_permission_user_activity_component__["a" /* PermissionUserActivityComponent */]
            },
            // {
            //   path: 'statistics',
            //   component: PermissionUserStatisticsComponent
            // },
            {
                path: 'permission',
                component: __WEBPACK_IMPORTED_MODULE_10__permission_user_permission_permission_user_permission_component__["a" /* PermissionUserPermissionComponent */]
            }
        ]
    }
];
var PermissionUserRoutingModule = /** @class */ (function () {
    function PermissionUserRoutingModule() {
    }
    PermissionUserRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"]]
        })
    ], PermissionUserRoutingModule);
    return PermissionUserRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/layout/permission/permission-user/permission-user-statistics/permission-user-statistics.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"listPermission && listPermission.length > 0 && branchesList\">\n  <!-- <div class=\"row mt-3\">\n    <div class=\"col-md-3\">\n    </div>\n    <div class=\"col-md-2 text-center\">\n      <label class=\"custom-control custom-checkbox\">\n        <input type=\"checkbox\" class=\"custom-control-input\" (click)=\"viewAllClick($event.target.checked)\" [(ngModel)]=\"viewAll\">\n        <span class=\"custom-control-indicator\"></span>\n      </label>\n      Tất cả\n    </div>\n    <div class=\"col-md-2 text-center text-nowrap\">\n      <label class=\"custom-control custom-checkbox\">\n        <input type=\"checkbox\" class=\"custom-control-input custom-control-input--disabled\" (click)=\"viewByCurrentUserClick($event.target.checked)\"\n          [disabled]=\"viewAll\" [(ngModel)]=\"viewByCurrentUser\">\n        <span class=\"custom-control-indicator\"></span>\n      </label>\n      Theo người dùng\n    </div>\n  </div> -->\n  <div class=\"row mt-3\">\n    <div class=\"col-md-3 font-weight-bold\"></div>\n    <div class=\"col-md-1 text-center px-0\">Theo người dùng\n    </div>\n    <div class=\"col-md-1 text-center\">\n    </div>\n    <div class=\"col-md-7\">\n      <div class=\"row\">\n        <div class=\"col-md\" *ngFor=\"let  itemBranch of  branchesList\">\n          {{ itemBranch.text}}\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"row mt-2\">\n    <div class=\"col-md-3 font-weight-bold\">Xem báo cáo thống kê</div>\n    <div class=\"col-md-1\"></div>\n    <div class=\"col-md-1 text-center check-box-all\">\n      <!-- <label class=\"custom-control custom-checkbox\">\n        <input type=\"checkbox\" class=\"custom-control-input custom-control-input--none\" [disabled]=\"disabledPms\" (click)=\"clickAllParentUserStatisPermission($event.target.checked)\"\n          [checked]=\"getCheckedAllParentUserStatisPermission()\">\n        <span class=\"custom-control-indicator\"></span>\n      </label> -->\n\n      <img src=\"assets/images/check.png\" width=\"18\" alt=\"\" (click)=\"clickAllParentUserStatisPermission(true)\" *ngIf=\"!getCheckedAllParentUserStatisPermission()\"\n        class=\"pointer\">\n\n      <img src=\"assets/images/not-check.png\" width=\"18\" alt=\"\" (click)=\"clickAllParentUserStatisPermission(false)\" *ngIf=\"getCheckedAllParentUserStatisPermission()\"\n        class=\"pointer\">\n\n    </div>\n    <div class=\"col-md-7\">\n      <div class=\"row\">\n        <div class=\"col-md check-box-all\" *ngFor=\"let  itemBranch of  branchesList\">\n          <!-- <label class=\"custom-control custom-checkbox\">\n            <input type=\"checkbox\" class=\"custom-control-input custom-control-input--none\" [disabled]=\"disabledPms\" (click)=\"clickParentUserStatisPermission(itemBranch.id, $event.target.checked)\"\n              [checked]=\"getCheckedParentUserStatisPermission(itemBranch.id)\">\n            <span class=\"custom-control-indicator\"></span>\n          </label> -->\n\n          <img src=\"assets/images/check.png\" width=\"18\" alt=\"\" (click)=\"clickParentUserStatisPermission(itemBranch.id, true)\" *ngIf=\"!getCheckedParentUserStatisPermission(itemBranch.id)\"\n            class=\"pointer\">\n\n          <img src=\"assets/images/not-check.png\" width=\"18\" alt=\"\" (click)=\"clickParentUserStatisPermission(itemBranch.id, false)\"\n            *ngIf=\"getCheckedParentUserStatisPermission(itemBranch.id)\" class=\"pointer\">\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-3\">\n      <i class=\"fa fa-angle-right mx-2\" aria-hidden=\"true\"></i>Tiềm năng\n    </div>\n\n    <div class=\"col-md-1 text-center\">\n      <label class=\"custom-control custom-checkbox\">\n        <input type=\"checkbox\" class=\"custom-control-input custom-control-input--none\" (click)=\"clickAccordingToUser($event.target.value, $event.target.checked)\"\n          value=\"StatisticsProspect\" [checked]=\"getAccordingToUser('StatisticsProspect')\">\n        <span class=\"custom-control-indicator\"></span>\n      </label>\n    </div>\n\n    <div class=\"col-md-1 text-center\">\n      <!-- <label class=\"custom-control custom-checkbox\">\n        <input type=\"checkbox\" class=\"custom-control-input custom-control-input--none\" [disabled]=\"disabledPms\" value=\"StatisticsProspect\"\n          (click)=\"clickAllStatistics($event.target.value, $event.target.checked)\" [checked]=\"getCheckedAllStatistics('StatisticsProspect')\">\n        <span class=\"custom-control-indicator\"></span>\n      </label> -->\n\n      <img src=\"assets/images/check.png\" width=\"18\" alt=\"\" (click)=\"clickAllStatistics('StatisticsProspect', true)\" *ngIf=\"!getCheckedAllStatistics('StatisticsProspect') && !getAccordingToUser('StatisticsProspect')\"\n        class=\"pointer\">\n\n      <img src=\"assets/images/not-check.png\" width=\"18\" alt=\"\" (click)=\"clickAllStatistics('StatisticsProspect', false)\" *ngIf=\"getCheckedAllStatistics('StatisticsProspect') && !getAccordingToUser('StatisticsProspect')\"\n        class=\"pointer\">\n\n    </div>\n    <div class=\"col-md-7\">\n      <div class=\"row\">\n        <div class=\"col-md\" *ngFor=\"let  itemBranch of  branchesList\">\n          <label class=\"custom-control custom-checkbox\">\n            <input type=\"checkbox\" class=\"custom-control-input custom-control-input--none\" [disabled]=\"getAccordingToUser('StatisticsProspect')\"\n              (click)=\"clickPermission($event.target.value, itemBranch.id)\" value=\"StatisticsProspect\" [checked]=\"getCheckedPermission('StatisticsProspect', itemBranch.id)\">\n            <span class=\"custom-control-indicator\"></span>\n          </label>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-3\">\n      <i class=\"fa fa-angle-right mx-2\" aria-hidden=\"true\"></i>Khách hàng</div>\n\n    <div class=\"col-md-1 text-center\">\n      <label class=\"custom-control custom-checkbox\">\n        <input type=\"checkbox\" class=\"custom-control-input custom-control-input--none\" (click)=\"clickAccordingToUser($event.target.value, $event.target.checked)\"\n          value=\"StatisticsCustomer\" [checked]=\"getAccordingToUser('StatisticsCustomer')\">\n        <span class=\"custom-control-indicator\"></span>\n      </label>\n    </div>\n\n    <div class=\"col-md-1 text-center\">\n      <!-- <label class=\"custom-control custom-checkbox\">\n        <input type=\"checkbox\" class=\"custom-control-input custom-control-input--none\" [disabled]=\"disabledPms\" value=\"StatisticsCustomer\"\n          (click)=\"clickAllStatistics($event.target.value, $event.target.checked)\" [checked]=\"getCheckedAllStatistics('StatisticsCustomer')\">\n        <span class=\"custom-control-indicator\"></span>\n      </label> -->\n\n      <img src=\"assets/images/check.png\" width=\"18\" alt=\"\" (click)=\"clickAllStatistics('StatisticsCustomer', true)\" *ngIf=\"!getCheckedAllStatistics('StatisticsCustomer') && !getAccordingToUser('StatisticsCustomer')\"\n        class=\"pointer\">\n\n      <img src=\"assets/images/not-check.png\" width=\"18\" alt=\"\" (click)=\"clickAllStatistics('StatisticsCustomer', false)\" *ngIf=\"getCheckedAllStatistics('StatisticsCustomer') && !getAccordingToUser('StatisticsCustomer')\"\n        class=\"pointer\">\n    </div>\n    <div class=\"col-md-7\">\n      <div class=\"row\">\n        <div class=\"col-md\" *ngFor=\"let  itemBranch of  branchesList\">\n          <label class=\"custom-control custom-checkbox\">\n            <input type=\"checkbox\" class=\"custom-control-input custom-control-input--none\" [disabled]=\"getAccordingToUser('StatisticsCustomer')\"\n              (click)=\"clickPermission($event.target.value, itemBranch.id)\" value=\"StatisticsCustomer\" [checked]=\"getCheckedPermission('StatisticsCustomer', itemBranch.id)\">\n            <span class=\"custom-control-indicator\"></span>\n          </label>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"row\">\n    <div class=\"col-md-3\">\n      <i class=\"fa fa-angle-right mx-2\" aria-hidden=\"true\"></i>Liên hệ</div>\n\n    <div class=\"col-md-1 text-center\">\n      <label class=\"custom-control custom-checkbox\">\n        <input type=\"checkbox\" class=\"custom-control-input custom-control-input--none\" (click)=\"clickAccordingToUser($event.target.value, $event.target.checked)\"\n          value=\"StatisticsContact\" [checked]=\"getAccordingToUser('StatisticsContact')\">\n        <span class=\"custom-control-indicator\"></span>\n      </label>\n    </div>\n    <div class=\"col-md-1 text-center\">\n      <!-- <label class=\"custom-control custom-checkbox\">\n        <input type=\"checkbox\" class=\"custom-control-input custom-control-input--none\" [disabled]=\"disabledPms\" value=\"StatisticsContact\"\n          (click)=\"clickAllStatistics($event.target.value, $event.target.checked)\" [checked]=\"getCheckedAllStatistics('StatisticsContact')\">\n        <span class=\"custom-control-indicator\"></span>\n      </label> -->\n\n      <img src=\"assets/images/check.png\" width=\"18\" alt=\"\" (click)=\"clickAllStatistics('StatisticsContact', true)\" *ngIf=\"!getCheckedAllStatistics('StatisticsContact') && !getAccordingToUser('StatisticsContact')\"\n        class=\"pointer\">\n\n      <img src=\"assets/images/not-check.png\" width=\"18\" alt=\"\" (click)=\"clickAllStatistics('StatisticsContact', false)\" *ngIf=\"getCheckedAllStatistics('StatisticsContact') && !getAccordingToUser('StatisticsContact')\"\n        class=\"pointer\">\n    </div>\n    <div class=\"col-md-7\">\n      <div class=\"row\">\n        <div class=\"col-md\" *ngFor=\"let  itemBranch of  branchesList\">\n          <label class=\"custom-control custom-checkbox\">\n            <input type=\"checkbox\" class=\"custom-control-input custom-control-input--none\" [disabled]=\"getAccordingToUser('StatisticsContact')\"\n              (click)=\"clickPermission($event.target.value, itemBranch.id)\" value=\"StatisticsContact\" [checked]=\"getCheckedPermission('StatisticsContact', itemBranch.id)\">\n            <span class=\"custom-control-indicator\"></span>\n          </label>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"row\">\n    <div class=\"col-md-3\">\n      <i class=\"fa fa-angle-right mx-2\" aria-hidden=\"true\"></i>Cơ hội</div>\n    <div class=\"col-md-1 text-center\">\n      <label class=\"custom-control custom-checkbox\">\n        <input type=\"checkbox\" class=\"custom-control-input custom-control-input--none\" (click)=\"clickAccordingToUser($event.target.value, $event.target.checked)\"\n          value=\"StatisticsOpportunity\" [checked]=\"getAccordingToUser('StatisticsOpportunity')\">\n        <span class=\"custom-control-indicator\"></span>\n      </label>\n    </div>\n    <div class=\"col-md-1 text-center\">\n      <!-- <label class=\"custom-control custom-checkbox\">\n        <input type=\"checkbox\" class=\"custom-control-input custom-control-input--none\" [disabled]=\"disabledPms\" value=\"StatisticsOpportunity\"\n          (click)=\"clickAllStatistics($event.target.value, $event.target.checked)\" [checked]=\"getCheckedAllStatistics('StatisticsOpportunity')\">\n        <span class=\"custom-control-indicator\"></span>\n      </label> -->\n\n      <img src=\"assets/images/check.png\" width=\"18\" alt=\"\" (click)=\"clickAllStatistics('StatisticsOpportunity', true)\" *ngIf=\"!getCheckedAllStatistics('StatisticsOpportunity') && !getAccordingToUser('StatisticsOpportunity')\"\n        class=\"pointer\">\n\n      <img src=\"assets/images/not-check.png\" width=\"18\" alt=\"\" (click)=\"clickAllStatistics('StatisticsOpportunity', false)\" *ngIf=\"getCheckedAllStatistics('StatisticsOpportunity') && !getAccordingToUser('StatisticsOpportunity')\"\n        class=\"pointer\">\n    </div>\n    <div class=\"col-md-7\">\n      <div class=\"row\">\n        <div class=\"col-md\" *ngFor=\"let  itemBranch of  branchesList\">\n          <label class=\"custom-control custom-checkbox\">\n            <input type=\"checkbox\" class=\"custom-control-input custom-control-input--none\" [disabled]=\"getAccordingToUser('StatisticsOpportunity')\"\n              (click)=\"clickPermission($event.target.value, itemBranch.id)\" value=\"StatisticsOpportunity\" [checked]=\"getCheckedPermission('StatisticsOpportunity', itemBranch.id)\">\n            <span class=\"custom-control-indicator\"></span>\n          </label>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"row\">\n    <div class=\"col-md-3\">\n      <i class=\"fa fa-angle-right mx-2\" aria-hidden=\"true\"></i>Chiến dịch</div>\n    <div class=\"col-md-1 text-center\">\n      <label class=\"custom-control custom-checkbox\">\n        <input type=\"checkbox\" class=\"custom-control-input custom-control-input--none\" (click)=\"clickAccordingToUser($event.target.value, $event.target.checked)\"\n          value=\"StatisticsCampaign\" [checked]=\"getAccordingToUser('StatisticsCampaign')\">\n        <span class=\"custom-control-indicator\"></span>\n      </label>\n    </div>\n    <div class=\"col-md-1 text-center\">\n      <!-- <label class=\"custom-control custom-checkbox\">\n        <input type=\"checkbox\" class=\"custom-control-input custom-control-input--none\" [disabled]=\"disabledPms\" value=\"StatisticsCampaign\"\n          (click)=\"clickAllStatistics($event.target.value, $event.target.checked)\" [checked]=\"getCheckedAllStatistics('StatisticsCampaign')\">\n        <span class=\"custom-control-indicator\"></span>\n      </label> -->\n\n      <img src=\"assets/images/check.png\" width=\"18\" alt=\"\" (click)=\"clickAllStatistics('StatisticsCampaign', true)\" *ngIf=\"!getCheckedAllStatistics('StatisticsCampaign') && !getAccordingToUser('StatisticsCampaign')\"\n        class=\"pointer\">\n\n      <img src=\"assets/images/not-check.png\" width=\"18\" alt=\"\" (click)=\"clickAllStatistics('StatisticsCampaign', false)\" *ngIf=\"getCheckedAllStatistics('StatisticsCampaign') && !getAccordingToUser('StatisticsCampaign')\"\n        class=\"pointer\">\n    </div>\n    <div class=\"col-md-7\">\n      <div class=\"row\">\n        <div class=\"col-md\" *ngFor=\"let  itemBranch of  branchesList\">\n          <label class=\"custom-control custom-checkbox\">\n            <input type=\"checkbox\" class=\"custom-control-input custom-control-input--none\" [disabled]=\"getAccordingToUser('StatisticsCampaign')\"\n              (click)=\"clickPermission($event.target.value, itemBranch.id)\" value=\"StatisticsCampaign\" [checked]=\"getCheckedPermission('StatisticsCampaign', itemBranch.id)\">\n            <span class=\"custom-control-indicator\"></span>\n          </label>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"row\">\n    <div class=\"col-md-3\">\n      <i class=\"fa fa-angle-right mx-2\" aria-hidden=\"true\"></i>Tổng hợp</div>\n    <div class=\"col-md-1 text-center\">\n      <label class=\"custom-control custom-checkbox\">\n        <input type=\"checkbox\" class=\"custom-control-input custom-control-input--none\" (click)=\"clickAccordingToUser($event.target.value, $event.target.checked)\"\n          value=\"StatisticsReport\" [checked]=\"getAccordingToUser('StatisticsReport')\">\n        <span class=\"custom-control-indicator\"></span>\n      </label>\n    </div>\n    <div class=\"col-md-1 text-center\">\n      <!-- <label class=\"custom-control custom-checkbox\">\n        <input type=\"checkbox\" class=\"custom-control-input custom-control-input--none\" [disabled]=\"disabledPms\" value=\"StatisticsReport\"\n          (click)=\"clickAllStatistics($event.target.value, $event.target.checked)\" [checked]=\"getCheckedAllStatistics('StatisticsReport')\">\n        <span class=\"custom-control-indicator\"></span>\n      </label> -->\n\n      <img src=\"assets/images/check.png\" width=\"18\" alt=\"\" (click)=\"clickAllStatistics('StatisticsReport', true)\" *ngIf=\"!getCheckedAllStatistics('StatisticsReport') && !getAccordingToUser('StatisticsReport')\"\n        class=\"pointer\">\n\n      <img src=\"assets/images/not-check.png\" width=\"18\" alt=\"\" (click)=\"clickAllStatistics('StatisticsReport', false)\" *ngIf=\"getCheckedAllStatistics('StatisticsReport') && !getAccordingToUser('StatisticsReport')\"\n        class=\"pointer\">\n    </div>\n    <div class=\"col-md-7\">\n      <div class=\"row\">\n        <div class=\"col-md\" *ngFor=\"let  itemBranch of  branchesList\">\n          <label class=\"custom-control custom-checkbox\">\n            <input type=\"checkbox\" class=\"custom-control-input custom-control-input--none\" [disabled]=\"getAccordingToUser('StatisticsReport')\"\n              (click)=\"clickPermission($event.target.value, itemBranch.id)\" value=\"StatisticsReport\" [checked]=\"getCheckedPermission('StatisticsReport', itemBranch.id)\">\n            <span class=\"custom-control-indicator\"></span>\n          </label>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"row\">\n    <div class=\"col-md-3\">\n      <i class=\"fa fa-angle-right mx-2\" aria-hidden=\"true\"></i>Lịch sử chăm sóc khách hàng</div>\n    <div class=\"col-md-1 text-center\">\n      <label class=\"custom-control custom-checkbox\">\n        <input type=\"checkbox\" class=\"custom-control-input custom-control-input--none\" (click)=\"clickAccordingToUser($event.target.value, $event.target.checked)\"\n          value=\"StatisticsHistoryCareCustomer\" [checked]=\"getAccordingToUser('StatisticsHistoryCareCustomer')\">\n        <span class=\"custom-control-indicator\"></span>\n      </label>\n    </div>\n    <div class=\"col-md-1 text-center\">\n      <!-- <label class=\"custom-control custom-checkbox\">\n        <input type=\"checkbox\" class=\"custom-control-input custom-control-input--none\" [disabled]=\"disabledPms\" value=\"StatisticsHistoryCareCustomer\"\n          (click)=\"clickAllStatistics($event.target.value, $event.target.checked)\" [checked]=\"getCheckedAllStatistics('StatisticsHistoryCareCustomer')\">\n        <span class=\"custom-control-indicator\"></span>\n      </label> -->\n\n      <!-- <img src=\"assets/images/check.png\" width=\"18\" alt=\"\" (click)=\"clickAllStatistics('StatisticsHistoryCareCustomer', true)\"\n        *ngIf=\"!getCheckedAllStatistics('StatisticsHistoryCareCustomer')\" class=\"pointer\">\n\n      <img src=\"assets/images/not-check.png\" width=\"18\" alt=\"\" (click)=\"clickAllStatistics('StatisticsHistoryCareCustomer', false)\"\n        *ngIf=\"getCheckedAllStatistics('StatisticsHistoryCareCustomer')\" class=\"pointer\"> -->\n    </div>\n    <div class=\"col-md-7\">\n      <div class=\"row\">\n        <!-- <div class=\"col-md\" *ngFor=\"let  itemBranch of  branchesList\">\n          <label class=\"custom-control custom-checkbox\">\n            <input type=\"checkbox\" class=\"custom-control-input custom-control-input--none\" disabled (click)=\"clickPermission($event.target.value, itemBranch.id)\"\n              value=\"StatisticsHistoryCareCustomer\" [checked]=\"getCheckedPermission('StatisticsHistoryCareCustomer', itemBranch.id)\">\n            <span class=\"custom-control-indicator history-customer--disable\"></span>\n          </label>\n        </div> -->\n      </div>\n    </div>\n  </div>\n\n  <div class=\"row\">\n    <div class=\"col-md-3 d-flex\">\n      <i class=\"fa fa-angle-right mx-2 mt-1\" aria-hidden=\"true\"></i>\n      <span>Cơ cấu tiềm năng, cơ hội, và khách hàng</span>\n    </div>\n    <div class=\"col-md-1 text-center\">\n      <!-- <label class=\"custom-control custom-checkbox\">\n        <input type=\"checkbox\" class=\"custom-control-input custom-control-input--none\" (click)=\"clickAccordingToUser($event.target.value, $event.target.checked)\"\n          value=\"StatisticsOpportunityProspectCustomer\" [checked]=\"getAccordingToUser('StatisticsOpportunityProspectCustomer')\">\n        <span class=\"custom-control-indicator\"></span>\n      </label> -->\n    </div>\n    <div class=\"col-md-1 text-center\">\n      <!-- <label class=\"custom-control custom-checkbox\">\n        <input type=\"checkbox\" class=\"custom-control-input custom-control-input--none\" [disabled]=\"disabledPms\" value=\"StatisticsOpportunityProspectCustomer\"\n          (click)=\"clickAllStatistics($event.target.value, $event.target.checked)\" [checked]=\"getCheckedAllStatistics('StatisticsOpportunityProspectCustomer')\">\n        <span class=\"custom-control-indicator\"></span>\n      </label> -->\n\n      <img src=\"assets/images/check.png\" width=\"18\" alt=\"\" (click)=\"clickAllStatistics('StatisticsOpportunityProspectCustomer', true)\"\n        *ngIf=\"!getCheckedAllStatistics('StatisticsOpportunityProspectCustomer') && !getAccordingToUser('StatisticsOpportunityProspectCustomer')\"\n        class=\"pointer\">\n\n      <img src=\"assets/images/not-check.png\" width=\"18\" alt=\"\" (click)=\"clickAllStatistics('StatisticsOpportunityProspectCustomer', false)\"\n        *ngIf=\"getCheckedAllStatistics('StatisticsOpportunityProspectCustomer') && !getAccordingToUser('StatisticsOpportunityProspectCustomer')\"\n        class=\"pointer\">\n    </div>\n    <div class=\"col-md-7\">\n      <div class=\"row\">\n        <div class=\"col-md\" *ngFor=\"let  itemBranch of  branchesList\">\n          <label class=\"custom-control custom-checkbox\">\n            <input type=\"checkbox\" class=\"custom-control-input custom-control-input--none\" [disabled]=\"getAccordingToUser('StatisticsOpportunityProspectCustomer')\"\n              (click)=\"clickPermission($event.target.value, itemBranch.id)\" value=\"StatisticsOpportunityProspectCustomer\" [checked]=\"getCheckedPermission('StatisticsOpportunityProspectCustomer', itemBranch.id)\">\n            <span class=\"custom-control-indicator\"></span>\n          </label>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"row\">\n    <div class=\"col-md-3 d-flex\">\n      <i class=\"fa fa-angle-right mx-2 mt-1\" aria-hidden=\"true\"></i>\n      <span>\n        Hoạt động NVBH\n      </span>\n    </div>\n    <div class=\"col-md-1 text-center\">\n      <!-- <label class=\"custom-control custom-checkbox\">\n        <input type=\"checkbox\" class=\"custom-control-input custom-control-input--none\" (click)=\"clickAccordingToUser($event.target.value, $event.target.checked)\"\n          value=\"StatisticsActivityNVBH\" [checked]=\"getAccordingToUser('StatisticsActivityNVBH')\">\n        <span class=\"custom-control-indicator\"></span>\n      </label> -->\n    </div>\n    <div class=\"col-md-1 text-center\">\n      <!-- <label class=\"custom-control custom-checkbox\">\n        <input type=\"checkbox\" class=\"custom-control-input custom-control-input--none\" [disabled]=\"disabledPms\" value=\"StatisticsActivityNVBH\"\n          (click)=\"clickAllStatistics($event.target.value, $event.target.checked)\" [checked]=\"getCheckedAllStatistics('StatisticsActivityNVBH')\">\n        <span class=\"custom-control-indicator\"></span>\n      </label> -->\n\n      <img src=\"assets/images/check.png\" width=\"18\" alt=\"\" (click)=\"clickAllStatistics('StatisticsActivityNVBH', true)\" *ngIf=\"!getCheckedAllStatistics('StatisticsActivityNVBH') && !getAccordingToUser('StatisticsActivityNVBH')\"\n        class=\"pointer\">\n\n      <img src=\"assets/images/not-check.png\" width=\"18\" alt=\"\" (click)=\"clickAllStatistics('StatisticsActivityNVBH', false)\" *ngIf=\"getCheckedAllStatistics('StatisticsActivityNVBH') && !getAccordingToUser('StatisticsActivityNVBH')\"\n        class=\"pointer\">\n    </div>\n    <div class=\"col-md-7\">\n      <div class=\"row\">\n        <div class=\"col-md\" *ngFor=\"let  itemBranch of  branchesList\">\n          <label class=\"custom-control custom-checkbox\">\n            <input type=\"checkbox\" class=\"custom-control-input custom-control-input--none\" [disabled]=\"getAccordingToUser('StatisticsActivityNVBH')\"\n              (click)=\"clickPermission($event.target.value, itemBranch.id)\" value=\"StatisticsActivityNVBH\" [checked]=\"getCheckedPermission('StatisticsActivityNVBH', itemBranch.id)\">\n            <span class=\"custom-control-indicator\"></span>\n          </label>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"row\">\n    <div class=\"col-md-3 d-flex\">\n      <i class=\"fa fa-angle-right mx-2 mt-1\" aria-hidden=\"true\"></i>\n      <span>\n        Số lượng KH tiềm năng các SR\n      </span>\n    </div>\n    <div class=\"col-md-1 text-center\">\n      <!-- <label class=\"custom-control custom-checkbox\">\n        <input type=\"checkbox\" class=\"custom-control-input custom-control-input--none\" (click)=\"clickAccordingToUser($event.target.value, $event.target.checked)\"\n          value=\"StatisticsCustomerProspect\" [checked]=\"getAccordingToUser('StatisticsCustomerProspect')\" disabled>\n        <span class=\"custom-control-indicator\"></span>\n      </label> -->\n    </div>\n    <div class=\"col-md-1 text-center\">\n      <!-- <label class=\"custom-control custom-checkbox\">\n        <input type=\"checkbox\" class=\"custom-control-input custom-control-input--none\" [disabled]=\"disabledPms\" value=\"StatisticsCustomerProspect\"\n          (click)=\"clickAllStatistics($event.target.value, $event.target.checked)\" [checked]=\"getCheckedAllStatistics('StatisticsCustomerProspect')\">\n        <span class=\"custom-control-indicator\"></span>\n      </label> -->\n\n      <img src=\"assets/images/check.png\" width=\"18\" alt=\"\" (click)=\"clickAllStatistics('StatisticsCustomerProspect', true)\" *ngIf=\"!getCheckedAllStatistics('StatisticsCustomerProspect') && !getAccordingToUser('StatisticsCustomerProspect')\"\n        class=\"pointer\">\n\n      <img src=\"assets/images/not-check.png\" width=\"18\" alt=\"\" (click)=\"clickAllStatistics('StatisticsCustomerProspect', false)\"\n        *ngIf=\"getCheckedAllStatistics('StatisticsCustomerProspect') && !getAccordingToUser('StatisticsCustomerProspect')\"\n        class=\"pointer\">\n\n    </div>\n    <div class=\"col-md-7\">\n      <div class=\"row\">\n        <div class=\"col-md\" *ngFor=\"let  itemBranch of  branchesList\">\n          <label class=\"custom-control custom-checkbox\">\n            <input type=\"checkbox\" class=\"custom-control-input custom-control-input--none\" [disabled]=\"getAccordingToUser('StatisticsCustomerProspect')\"\n              (click)=\"clickPermission($event.target.value, itemBranch.id)\" value=\"StatisticsCustomerProspect\" [checked]=\"getCheckedPermission('StatisticsCustomerProspect', itemBranch.id)\">\n            <span class=\"custom-control-indicator\"></span>\n          </label>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"row\">\n    <div class=\"col-md-3 d-flex\">\n      <i class=\"fa fa-angle-right mx-2 mt-1\" aria-hidden=\"true\"></i>\n      <span>\n        Các nguồn tiềm năng\n      </span>\n    </div>\n    <div class=\"col-md-1 text-center\">\n      <!-- <label class=\"custom-control custom-checkbox\">\n        <input type=\"checkbox\" class=\"custom-control-input custom-control-input--none\" (click)=\"clickAccordingToUser($event.target.value, $event.target.checked)\"\n          value=\"StatisticsProspectSource\" [checked]=\"getAccordingToUser('StatisticsProspectSource')\">\n        <span class=\"custom-control-indicator\"></span>\n      </label> -->\n    </div>\n    <div class=\"col-md-1 text-center\">\n      <!-- <label class=\"custom-control custom-checkbox\">\n        <input type=\"checkbox\" class=\"custom-control-input custom-control-input--none\" [disabled]=\"disabledPms\" value=\"StatisticsProspectSource\"\n          (click)=\"clickAllStatistics($event.target.value, $event.target.checked)\" [checked]=\"getCheckedAllStatistics('StatisticsProspectSource')\">\n        <span class=\"custom-control-indicator\"></span>\n      </label> -->\n\n      <img src=\"assets/images/check.png\" width=\"18\" alt=\"\" (click)=\"clickAllStatistics('StatisticsProspectSource', true)\" *ngIf=\"!getCheckedAllStatistics('StatisticsProspectSource') && !getAccordingToUser('StatisticsProspectSource')\"\n        class=\"pointer\">\n\n      <img src=\"assets/images/not-check.png\" width=\"18\" alt=\"\" (click)=\"clickAllStatistics('StatisticsProspectSource', false)\"\n        *ngIf=\"getCheckedAllStatistics('StatisticsProspectSource') && !getAccordingToUser('StatisticsProspectSource')\" class=\"pointer\">\n\n    </div>\n    <div class=\"col-md-7\">\n      <div class=\"row\">\n        <div class=\"col-md\" *ngFor=\"let  itemBranch of  branchesList\">\n          <label class=\"custom-control custom-checkbox\">\n            <input type=\"checkbox\" class=\"custom-control-input custom-control-input--none\" [disabled]=\"getAccordingToUser('StatisticsProspectSource')\"\n              (click)=\"clickPermission($event.target.value, itemBranch.id)\" value=\"StatisticsProspectSource\" [checked]=\"getCheckedPermission('StatisticsProspectSource', itemBranch.id)\">\n            <span class=\"custom-control-indicator\"></span>\n          </label>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"row\">\n    <div class=\"col-md-3 d-flex\">\n      <i class=\"fa fa-angle-right mx-2 mt-1\" aria-hidden=\"true\"></i>\n      <span>\n        Sự việc, hoạt động của công ty\n      </span>\n    </div>\n    <div class=\"col-md-1 text-center\">\n      <!-- <label class=\"custom-control custom-checkbox\">\n        <input type=\"checkbox\" class=\"custom-control-input custom-control-input--none\" (click)=\"clickAccordingToUser($event.target.value, $event.target.checked)\"\n          value=\"StatisticsActivity\" [checked]=\"getAccordingToUser('StatisticsActivity')\">\n        <span class=\"custom-control-indicator\"></span>\n      </label> -->\n    </div>\n    <div class=\"col-md-1 text-center\">\n      <!-- <label class=\"custom-control custom-checkbox\">\n        <input type=\"checkbox\" class=\"custom-control-input custom-control-input--none\" [disabled]=\"disabledPms\" value=\"StatisticsActivity\"\n          (click)=\"clickAllStatistics($event.target.value, $event.target.checked)\" [checked]=\"getCheckedAllStatistics('StatisticsActivity')\">\n        <span class=\"custom-control-indicator\"></span>\n      </label> -->\n\n      <img src=\"assets/images/check.png\" width=\"18\" alt=\"\" (click)=\"clickAllStatistics('StatisticsActivity', true)\" *ngIf=\"!getCheckedAllStatistics('StatisticsActivity') && !getAccordingToUser('StatisticsActivity')\"\n        class=\"pointer\">\n\n      <img src=\"assets/images/not-check.png\" width=\"18\" alt=\"\" (click)=\"clickAllStatistics('StatisticsActivity', false)\" *ngIf=\"getCheckedAllStatistics('StatisticsActivity') && !getAccordingToUser('StatisticsActivity')\"\n        class=\"pointer\">\n\n    </div>\n    <div class=\"col-md-7\">\n      <div class=\"row\">\n        <div class=\"col-md\" *ngFor=\"let  itemBranch of  branchesList\">\n          <label class=\"custom-control custom-checkbox\">\n            <input type=\"checkbox\" class=\"custom-control-input custom-control-input--none\" [disabled]=\"getAccordingToUser('StatisticsActivity')\"\n              (click)=\"clickPermission($event.target.value, itemBranch.id)\" value=\"StatisticsActivity\" [checked]=\"getCheckedPermission('StatisticsActivity', itemBranch.id)\">\n            <span class=\"custom-control-indicator\"></span>\n          </label>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"row\">\n    <div class=\"col-md-3 d-flex\">\n      <i class=\"fa fa-angle-right mx-2 mt-1\" aria-hidden=\"true\"></i>\n      <span>\n        Danh sách Khách hàng tiềm năng\n      </span>\n    </div>\n\n    <div class=\"col-md-1 text-center\">\n      <label class=\"custom-control custom-checkbox\">\n        <input type=\"checkbox\" class=\"custom-control-input custom-control-input--none\" (click)=\"clickAccordingToUser($event.target.value, $event.target.checked)\"\n          value=\"StatisticsListProspect\" [checked]=\"getAccordingToUser('StatisticsListProspect')\">\n        <span class=\"custom-control-indicator\"></span>\n      </label>\n    </div>\n\n    <div class=\"col-md-1 text-center\">\n      <!-- <label class=\"custom-control custom-checkbox\">\n        <input type=\"checkbox\" class=\"custom-control-input custom-control-input--none\" [disabled]=\"disabledPms\" value=\"StatisticsListProspect\"\n          (click)=\"clickAllStatistics($event.target.value, $event.target.checked)\" [checked]=\"getCheckedAllStatistics('StatisticsListProspect')\">\n        <span class=\"custom-control-indicator\"></span>\n      </label> -->\n\n      <img src=\"assets/images/check.png\" width=\"18\" alt=\"\" (click)=\"clickAllStatistics('StatisticsListProspect', true)\" *ngIf=\"!getCheckedAllStatistics('StatisticsListProspect') && !getAccordingToUser('StatisticsListProspect')\"\n        class=\"pointer\">\n\n      <img src=\"assets/images/not-check.png\" width=\"18\" alt=\"\" (click)=\"clickAllStatistics('StatisticsListProspect', false)\" *ngIf=\"getCheckedAllStatistics('StatisticsListProspect') && !getAccordingToUser('StatisticsListProspect')\"\n        class=\"pointer\">\n\n    </div>\n    <div class=\"col-md-7\">\n      <div class=\"row\">\n        <div class=\"col-md\" *ngFor=\"let  itemBranch of  branchesList\">\n          <label class=\"custom-control custom-checkbox\">\n            <input type=\"checkbox\" class=\"custom-control-input custom-control-input--none\" [disabled]=\"getAccordingToUser('StatisticsListProspect')\"\n              (click)=\"clickPermission($event.target.value, itemBranch.id)\" value=\"StatisticsListProspect\" [checked]=\"getCheckedPermission('StatisticsListProspect', itemBranch.id)\">\n            <span class=\"custom-control-indicator\"></span>\n          </label>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"row\">\n    <div class=\"col-md-3 d-flex\">\n      <i class=\"fa fa-angle-right mx-2 mt-1\" aria-hidden=\"true\"></i>\n      <span>\n        Danh sách Tiềm năng theo nguồn\n      </span>\n    </div>\n    <div class=\"col-md-1 text-center\">\n      <label class=\"custom-control custom-checkbox\">\n        <input type=\"checkbox\" class=\"custom-control-input custom-control-input--none\" (click)=\"clickAccordingToUser($event.target.value, $event.target.checked)\"\n          value=\"StatisticsListProspectSource\" [checked]=\"getAccordingToUser('StatisticsListProspectSource')\">\n        <span class=\"custom-control-indicator\"></span>\n      </label>\n    </div>\n    <div class=\"col-md-1 text-center\">\n      <!-- <label class=\"custom-control custom-checkbox\">\n        <input type=\"checkbox\" class=\"custom-control-input custom-control-input--none\" [disabled]=\"disabledPms\" value=\"StatisticsListProspectSource\"\n          (click)=\"clickAllStatistics($event.target.value, $event.target.checked)\" [checked]=\"getCheckedAllStatistics('StatisticsListProspectSource')\">\n        <span class=\"custom-control-indicator\"></span>\n      </label> -->\n\n      <img src=\"assets/images/check.png\" width=\"18\" alt=\"\" (click)=\"clickAllStatistics('StatisticsListProspectSource', true)\"\n        *ngIf=\"!getCheckedAllStatistics('StatisticsListProspectSource') && !getAccordingToUser('StatisticsListProspectSource')\"\n        class=\"pointer\">\n\n      <img src=\"assets/images/not-check.png\" width=\"18\" alt=\"\" (click)=\"clickAllStatistics('StatisticsListProspectSource', false)\"\n        *ngIf=\"getCheckedAllStatistics('StatisticsListProspectSource') && !getAccordingToUser('StatisticsListProspectSource')\"\n        class=\"pointer\">\n\n    </div>\n    <div class=\"col-md-7\">\n      <div class=\"row\">\n        <div class=\"col-md\" *ngFor=\"let  itemBranch of  branchesList\">\n          <label class=\"custom-control custom-checkbox\">\n            <input type=\"checkbox\" class=\"custom-control-input custom-control-input--none\" [disabled]=\"getAccordingToUser('StatisticsListProspectSource')\"\n              (click)=\"clickPermission($event.target.value, itemBranch.id)\" value=\"StatisticsListProspectSource\" [checked]=\"getCheckedPermission('StatisticsListProspectSource', itemBranch.id)\">\n            <span class=\"custom-control-indicator\"></span>\n          </label>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"row\">\n    <div class=\"col-md-3 d-flex\">\n      <i class=\"fa fa-angle-right mx-2 mt-1\" aria-hidden=\"true\"></i>\n      <span>\n        Danh sách Sự kiện, Công việc\n      </span>\n    </div>\n    <div class=\"col-md-1 text-center\">\n      <label class=\"custom-control custom-checkbox\">\n        <input type=\"checkbox\" class=\"custom-control-input custom-control-input--none\" (click)=\"clickAccordingToUser($event.target.value, $event.target.checked)\"\n          value=\"StatisticsListEventWork\" [checked]=\"getAccordingToUser('StatisticsListEventWork')\">\n        <span class=\"custom-control-indicator\"></span>\n      </label>\n    </div>\n    <div class=\"col-md-1 text-center\">\n      <!-- <label class=\"custom-control custom-checkbox\">\n        <input type=\"checkbox\" class=\"custom-control-input custom-control-input--none\" [disabled]=\"disabledPms\" value=\"StatisticsListEventWork\"\n          (click)=\"clickAllStatistics($event.target.value, $event.target.checked)\" [checked]=\"getCheckedAllStatistics('StatisticsListEventWork')\">\n        <span class=\"custom-control-indicator\"></span>\n      </label> -->\n\n      <img src=\"assets/images/check.png\" width=\"18\" alt=\"\" (click)=\"clickAllStatistics('StatisticsListEventWork', true)\" *ngIf=\"!getCheckedAllStatistics('StatisticsListEventWork') && !getAccordingToUser('StatisticsListEventWork')\"\n        class=\"pointer\">\n\n      <img src=\"assets/images/not-check.png\" width=\"18\" alt=\"\" (click)=\"clickAllStatistics('StatisticsListEventWork', false)\"\n        *ngIf=\"getCheckedAllStatistics('StatisticsListEventWork') && !getAccordingToUser('StatisticsListEventWork')\" class=\"pointer\">\n\n    </div>\n    <div class=\"col-md-7\">\n      <div class=\"row\">\n        <div class=\"col-md\" *ngFor=\"let  itemBranch of  branchesList\">\n          <label class=\"custom-control custom-checkbox\">\n            <input type=\"checkbox\" class=\"custom-control-input custom-control-input--none\" [disabled]=\"getAccordingToUser('StatisticsListEventWork')\"\n              (click)=\"clickPermission($event.target.value, itemBranch.id)\" value=\"StatisticsListEventWork\" [checked]=\"getCheckedPermission('StatisticsListEventWork', itemBranch.id)\">\n            <span class=\"custom-control-indicator\"></span>\n          </label>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"row\">\n    <div class=\"col-md-3 d-flex\">\n      <i class=\"fa fa-angle-right mx-2 mt-1\" aria-hidden=\"true\"></i>\n      <span>\n        Danh sách Cơ hội của Showroom\n      </span>\n    </div>\n    <div class=\"col-md-1 text-center\">\n      <!-- <label class=\"custom-control custom-checkbox\">\n        <input type=\"checkbox\" class=\"custom-control-input custom-control-input--none\" (click)=\"clickAccordingToUser($event.target.value, $event.target.checked)\"\n          value=\"StatisticsListOpportunityByBranch\" [checked]=\"getAccordingToUser('StatisticsListOpportunityByBranch')\">\n        <span class=\"custom-control-indicator\"></span>\n      </label> -->\n    </div>\n    <div class=\"col-md-1 text-center\">\n      <!-- <label class=\"custom-control custom-checkbox\">\n        <input type=\"checkbox\" class=\"custom-control-input custom-control-input--none\" [disabled]=\"disabledPms\" value=\"StatisticsListOpportunityByBranch\"\n          (click)=\"clickAllStatistics($event.target.value, $event.target.checked)\" [checked]=\"getCheckedAllStatistics('StatisticsListOpportunityByBranch')\">\n        <span class=\"custom-control-indicator\"></span>\n      </label> -->\n\n      <img src=\"assets/images/check.png\" width=\"18\" alt=\"\" (click)=\"clickAllStatistics('StatisticsListOpportunityByBranch', true)\"\n        *ngIf=\"!getCheckedAllStatistics('StatisticsListOpportunityByBranch') && !getAccordingToUser('StatisticsListOpportunityByBranch')\"\n        class=\"pointer\">\n\n      <img src=\"assets/images/not-check.png\" width=\"18\" alt=\"\" (click)=\"clickAllStatistics('StatisticsListOpportunityByBranch', false)\"\n        *ngIf=\"getCheckedAllStatistics('StatisticsListOpportunityByBranch') && !getAccordingToUser('StatisticsListOpportunityByBranch')\"\n        class=\"pointer\">\n\n    </div>\n    <div class=\"col-md-7\">\n      <div class=\"row\">\n        <div class=\"col-md\" *ngFor=\"let  itemBranch of  branchesList\">\n          <label class=\"custom-control custom-checkbox\">\n            <input type=\"checkbox\" class=\"custom-control-input custom-control-input--none\" [disabled]=\"getAccordingToUser('StatisticsListOpportunityByBranch')\"\n              (click)=\"clickPermission($event.target.value, itemBranch.id)\" value=\"StatisticsListOpportunityByBranch\" [checked]=\"getCheckedPermission('StatisticsListOpportunityByBranch', itemBranch.id)\">\n            <span class=\"custom-control-indicator\"></span>\n          </label>\n        </div>\n      </div>\n    </div>\n  </div>\n\n\n</div>\n\n<div class=\"my-4 text-center\">\n  <button class=\"btn btn-secondary ml-2\" routerLink=\"../permission\">\n    <i class=\"fa fa-angle-left mx-2\" aria-hidden=\"true\"></i> Trở về\n  </button>\n  <button class=\"btn btn-primary ml-2 cursor-disabled\" disabled>\n    Tiếp\n    <i class=\"fa fa-angle-right mx-2\" aria-hidden=\"true\"></i>\n  </button>\n</div>\n\n<ngx-spinner bdColor=\"rgba(51, 51, 51, 0.7)\" size=\"medium\" color=\"#fff\" type=\"ball-clip-rotate-multiple\"></ngx-spinner>"

/***/ }),

/***/ "../../../../../src/app/layout/permission/permission-user/permission-user-statistics/permission-user-statistics.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host /deep/ .btn-secondary {\n  background-color: #b0b0b0; }\n\n.custom-control-input--disabled:disabled ~ .custom-control-indicator {\n  background-color: #17a2b8;\n  opacity: .5; }\n\n.custom-control-input--none:disabled ~ .custom-control-indicator {\n  background-image: none; }\n\n.cursor-disabled {\n  cursor: not-allowed; }\n\n.pl-4r {\n  padding-left: 4rem; }\n\n.history-customer--disable {\n  background-color: #ddd;\n  color: #ddd;\n  background-image: none; }\n\n.check-box-all {\n  min-height: 27px; }\n\n.pointer {\n  cursor: pointer; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/layout/permission/permission-user/permission-user-statistics/permission-user-statistics.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PermissionUserStatisticsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services__ = __webpack_require__("../../../../../src/app/shared/services/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__permission_user_component__ = __webpack_require__("../../../../../src/app/layout/permission/permission-user/permission-user.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__node_modules_ngx_spinner__ = __webpack_require__("../../../../ngx-spinner/ngx-spinner.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__node_modules_ngx_spinner___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__node_modules_ngx_spinner__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PermissionUserStatisticsComponent = /** @class */ (function () {
    function PermissionUserStatisticsComponent(userGroupService, dataService, spinner) {
        this.userGroupService = userGroupService;
        this.dataService = dataService;
        this.spinner = spinner;
        this.checkTest = 1;
        this.isSelectAll = false;
        this.listPermissionData = [];
        this.branchesList = [];
    }
    PermissionUserStatisticsComponent_1 = PermissionUserStatisticsComponent;
    Object.defineProperty(PermissionUserStatisticsComponent.prototype, "viewType", {
        get: function () {
            if (this.viewAll) {
                PermissionUserStatisticsComponent_1.userStatistics = true;
                return true;
            }
            else if (this.viewByCurrentUser) {
                PermissionUserStatisticsComponent_1.userStatistics = false;
                return false;
            }
            else {
                PermissionUserStatisticsComponent_1.userStatistics = null;
                return null;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PermissionUserStatisticsComponent.prototype, "disabledPms", {
        get: function () {
            // this.listPermissionData.length === 0 && 
            if (this.viewType == null) {
                return true;
            }
            else {
                return false;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PermissionUserStatisticsComponent.prototype, "checkAllProspectList", {
        get: function () {
            var value = true;
            var listPms = ['ProspectAddProspect', 'ProspectProspectInformation', 'ProspectEditProspect', 'ProspectSendEmail', 'ProspectDeleteProspect', 'ProspectImportDownloadProspectTemplate', 'ProspectExportFile'];
            listPms.forEach(function (pms) {
                if (!__WEBPACK_IMPORTED_MODULE_2__permission_user_component__["a" /* PermissionUserComponent */].listPermissionData.find(function (i) { return i.functionWeb.no === pms; })) {
                    value = false;
                }
            });
            return value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PermissionUserStatisticsComponent.prototype, "checkAllProspectInfo", {
        get: function () {
            var value = true;
            var listPms = ['ProspectProspectSummary', 'ProspectViewProspectDetail', 'ProspectViewComments', 'ProspectAddComment', 'ProspectActivities', 'ProspectHistories'];
            listPms.forEach(function (pms) {
                if (!__WEBPACK_IMPORTED_MODULE_2__permission_user_component__["a" /* PermissionUserComponent */].listPermissionData.find(function (i) { return i.functionWeb.no === pms; })) {
                    value = false;
                }
            });
            return value;
        },
        enumerable: true,
        configurable: true
    });
    PermissionUserStatisticsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.spinner.show();
        this.getPermissionList('Statistics');
        // this.listPermissionData = PermissionUserComponent.listPermissionData;
        this.listPermissionData = __WEBPACK_IMPORTED_MODULE_2__permission_user_component__["a" /* PermissionUserComponent */].listPermissionData.filter(function (i) { return i.functionWeb
            && i.functionWeb.no && i.functionWeb.no.startsWith('Statistics'); });
        this.userGroupService.checkPermission().subscribe(function (data) {
            _this.listPermissionData = __WEBPACK_IMPORTED_MODULE_2__permission_user_component__["a" /* PermissionUserComponent */].listPermissionData.filter(function (i) { return i.functionWeb.no.startsWith('Statistics'); });
            _this.checkViewType();
        });
        // call API danh sách chi nhánh
        this.dataService.getBranches().subscribe(function (data) {
            _this.branchesList = data;
            // this.branchesList.forEach(item => item.id = item.id.toString());
            _this.checkViewType();
            _this.spinner.hide();
        });
    };
    PermissionUserStatisticsComponent.prototype.getPermissionList = function (module) {
        var _this = this;
        this.userGroupService.getListPermissionDefault(module).subscribe(function (data) {
            _this.listPermission = data;
            // if (this.listPermissionData.length > 0) {
            //   const pms = this.listPermissionData.find(i => i.functionWeb.no === this.listPermission[1].no);
            //   if (pms) {
            //     if (pms.type === true) {
            //       this.viewAll = true;
            //       this.viewByCurrentUser = true;
            //     } else if (pms.type === false) {
            //       this.viewByCurrentUser = true;
            //     }
            //   } else {
            //     this.viewAll = null;
            //     this.viewByCurrentUser = null;
            //   }
            // }
        });
    };
    PermissionUserStatisticsComponent.prototype.checkViewType = function () {
        if (this.listPermissionData.length > 0 && this.branchesList.length > 0) {
            var branchesListCategory_1 = this.branchesList.map(function (item) { return item.id; });
            var arrayPermission = this.listPermissionData.find(function (itemPerData) { return branchesListCategory_1.includes(+itemPerData.category); });
            if (arrayPermission) {
                var pms = arrayPermission;
                if (pms.type === true) {
                    this.viewAll = true;
                    this.viewByCurrentUser = true;
                }
                else if (pms.type === false) {
                    this.viewByCurrentUser = true;
                }
            }
            else {
                this.viewAll = null;
                this.viewByCurrentUser = null;
            }
            PermissionUserStatisticsComponent_1.userStatistics = this.viewType;
        }
    };
    PermissionUserStatisticsComponent.prototype.selectAll = function (permission) {
        var _this = this;
        permission.forEach(function (i) { return i.checkboxSelected = _this.isSelectAll; });
    };
    PermissionUserStatisticsComponent.prototype.clickPermission = function (value, category) {
        var pms = this.listPermission.find(function (i) { return i.no === value; });
        var valueInListTotal = __WEBPACK_IMPORTED_MODULE_2__permission_user_component__["a" /* PermissionUserComponent */].listPermissionData.find(function (i) { return i.functionWeb.no === pms.no && +i.category === +category; });
        if (valueInListTotal) {
            var idx = __WEBPACK_IMPORTED_MODULE_2__permission_user_component__["a" /* PermissionUserComponent */].listPermissionData.findIndex(function (i) { return i.functionWeb.no === pms.no && +i.category === +category; });
            __WEBPACK_IMPORTED_MODULE_2__permission_user_component__["a" /* PermissionUserComponent */].listPermissionData.splice(idx, 1);
        }
        else {
            var valuePushToList = {
                category: category,
                functionWeb: pms,
                // type: this.viewType,
                type: true,
                userGroup: null,
            };
            __WEBPACK_IMPORTED_MODULE_2__permission_user_component__["a" /* PermissionUserComponent */].listPermissionData.push(valuePushToList);
        }
    };
    PermissionUserStatisticsComponent.prototype.viewAllClick = function (value) {
        var _this = this;
        this.viewAll = value;
        this.viewByCurrentUser = value;
        // tslint:disable-next-line:max-line-length
        __WEBPACK_IMPORTED_MODULE_2__permission_user_component__["a" /* PermissionUserComponent */].listPermissionData.filter(function (i) { return i.functionWeb.no.startsWith('Statistics'); }).forEach(function (i) { return i.type = _this.viewType; });
    };
    PermissionUserStatisticsComponent.prototype.viewByCurrentUserClick = function (value) {
        var _this = this;
        if (value) {
            this.viewAll = false;
            this.viewByCurrentUser = true;
            // tslint:disable-next-line:max-line-length
            __WEBPACK_IMPORTED_MODULE_2__permission_user_component__["a" /* PermissionUserComponent */].listPermissionData.filter(function (i) { return i.functionWeb.no.startsWith('Statistics'); }).forEach(function (i) { return i.type = _this.viewType; });
        }
    };
    PermissionUserStatisticsComponent.prototype.toggleProspectList = function (value) {
        var listPms = ['ProspectAddProspect', 'ProspectProspectInformation', 'ProspectEditProspect', 'ProspectSendEmail', 'ProspectDeleteProspect', 'ProspectImportDownloadProspectTemplate', 'ProspectExportFile'];
        this.toggleList(listPms, value);
    };
    PermissionUserStatisticsComponent.prototype.toggleProspectInfo = function (value) {
        var listPms = ['ProspectProspectSummary', 'ProspectViewProspectDetail', 'ProspectViewComments', 'ProspectAddComment', 'ProspectActivities', 'ProspectHistories'];
        this.toggleList(listPms, value);
    };
    PermissionUserStatisticsComponent.prototype.toggleList = function (pmsArr, value) {
        var _this = this;
        pmsArr.forEach(function (pmsItem) {
            var valueInListTotal = __WEBPACK_IMPORTED_MODULE_2__permission_user_component__["a" /* PermissionUserComponent */].listPermissionData.find(function (i) { return i.functionWeb.no === pmsItem; });
            if (value) {
                if (!valueInListTotal) {
                    var pms = _this.listPermission.find(function (i) { return i.no === pmsItem; });
                    var valuePushToList = {
                        category: null,
                        functionWeb: pms,
                        // type: this.viewType,
                        type: true,
                        userGroup: null
                    };
                    __WEBPACK_IMPORTED_MODULE_2__permission_user_component__["a" /* PermissionUserComponent */].listPermissionData.push(valuePushToList);
                }
            }
            else {
                if (valueInListTotal) {
                    var idx = __WEBPACK_IMPORTED_MODULE_2__permission_user_component__["a" /* PermissionUserComponent */].listPermissionData.findIndex(function (i) { return i.functionWeb.no === pmsItem; });
                    __WEBPACK_IMPORTED_MODULE_2__permission_user_component__["a" /* PermissionUserComponent */].listPermissionData.splice(idx, 1);
                }
            }
        });
    };
    PermissionUserStatisticsComponent.prototype.clickAllStatistics = function (value, checked) {
        var _this = this;
        var categoryArr = this.branchesList.map(function (i) { return i.id.toString(); });
        categoryArr.forEach(function (category) { return _this.togglePermission(value, category, checked); });
    };
    PermissionUserStatisticsComponent.prototype.togglePermission = function (no, category, checked) {
        var valueInListTotal = __WEBPACK_IMPORTED_MODULE_2__permission_user_component__["a" /* PermissionUserComponent */].listPermissionData.find(function (i) { return i.functionWeb.no === no && +i.category === +category; });
        if (checked) {
            // push all item to list
            if (!valueInListTotal) {
                var pms = this.listPermission.find(function (i) { return i.no === no; });
                var valuePushToList = {
                    category: category,
                    functionWeb: pms,
                    // type: this.viewType,
                    type: true,
                    userGroup: null
                };
                __WEBPACK_IMPORTED_MODULE_2__permission_user_component__["a" /* PermissionUserComponent */].listPermissionData.push(valuePushToList);
            }
        }
        else {
            if (valueInListTotal) {
                var idx = __WEBPACK_IMPORTED_MODULE_2__permission_user_component__["a" /* PermissionUserComponent */].listPermissionData.findIndex(function (i) { return i.functionWeb.no === no && +i.category === +category; });
                __WEBPACK_IMPORTED_MODULE_2__permission_user_component__["a" /* PermissionUserComponent */].listPermissionData.splice(idx, 1);
            }
        }
    };
    PermissionUserStatisticsComponent.prototype.getCheckedAllStatistics = function (no) {
        var _this = this;
        var value = true;
        var categoryArr = this.branchesList.map(function (i) { return i.id.toString(); });
        categoryArr.forEach(function (category) {
            if (!_this.getCheckedPermission(no, category)) {
                value = false;
            }
        });
        return value;
    };
    PermissionUserStatisticsComponent.prototype.getCheckedPermission = function (no, branch) {
        if (this.listPermission && this.listPermission.length > 0) {
            // tslint:disable-next-line:max-line-length
            return __WEBPACK_IMPORTED_MODULE_2__permission_user_component__["a" /* PermissionUserComponent */].listPermissionData.find(function (i) { return (i.category && (+i.category === +branch) && (i.functionWeb.no === no)); }) ? true : false;
        }
        else {
            return false;
        }
    };
    PermissionUserStatisticsComponent.prototype.clickParentUserStatisPermission = function (itemBranchID, checked) {
        var _this = this;
        // const listNo = ['StatisticsProspect', 'StatisticsCustomer', 'StatisticsContact', 'StatisticsOpportunity',
        //   'StatisticsCampaign', 'StatisticsReport', 'StatisticsOpportunityProspectCustomer', 'StatisticsActivityNVBH',
        //   'StatisticsCustomerProspect', 'StatisticsProspectSource', 'StatisticsActivity'];
        var listNo = this.listPermission.map(function (item) { return item.no; });
        listNo.forEach(function (no) { return _this.togglePermission(no, itemBranchID.toString(), checked); });
    };
    PermissionUserStatisticsComponent.prototype.getCheckedParentUserStatisPermission = function (itemBranchID) {
        var _this = this;
        var value = true;
        // const listNo = ['StatisticsProspect', 'StatisticsCustomer', 'StatisticsContact', 'StatisticsOpportunity',
        //   'StatisticsCampaign', 'StatisticsReport', 'StatisticsOpportunityProspectCustomer', 'StatisticsActivityNVBH',
        //   'StatisticsCustomerProspect', 'StatisticsProspectSource', 'StatisticsActivity'];
        var listNo = this.listPermission.map(function (item) { return item.no; });
        listNo.forEach(function (no) {
            if (!_this.getCheckedPermission(no, itemBranchID.toString())) {
                value = false;
            }
        });
        return value;
    };
    PermissionUserStatisticsComponent.prototype.clickAllParentUserStatisPermission = function (checked) {
        var _this = this;
        this.branchesList.forEach(function (itemBranch) {
            _this.clickParentUserStatisPermission(itemBranch.id.toString(), checked);
        });
    };
    PermissionUserStatisticsComponent.prototype.getCheckedAllParentUserStatisPermission = function () {
        var _this = this;
        var value = true;
        this.branchesList.forEach(function (itemBranch) {
            if (!_this.getCheckedParentUserStatisPermission(itemBranch.id.toString())) {
                value = false;
            }
        });
        return value;
    };
    PermissionUserStatisticsComponent.prototype.clickAccordingToUser = function (no, value) {
        // const valueInListTotal = PermissionUserComponent.listPermissionData.find(i => i.functionWeb.no === no);
        if (value) {
            var pms = this.listPermission.find(function (i) { return i.no === no; });
            var valuePushToList = {
                category: null,
                functionWeb: pms,
                type: false,
                userGroup: null,
            };
            __WEBPACK_IMPORTED_MODULE_2__permission_user_component__["a" /* PermissionUserComponent */].listPermissionData.push(valuePushToList);
        }
        else {
            var idx = __WEBPACK_IMPORTED_MODULE_2__permission_user_component__["a" /* PermissionUserComponent */].listPermissionData.findIndex(function (i) {
                return i.functionWeb.no === no && i.category === null && i.type === false;
            });
            __WEBPACK_IMPORTED_MODULE_2__permission_user_component__["a" /* PermissionUserComponent */].listPermissionData.splice(idx, 1);
        }
    };
    PermissionUserStatisticsComponent.prototype.getAccordingToUser = function (no) {
        var isItemToUser = __WEBPACK_IMPORTED_MODULE_2__permission_user_component__["a" /* PermissionUserComponent */].listPermissionData.find(function (i) {
            return i.functionWeb.no === no && i.type === false;
        });
        if (isItemToUser) {
            return true;
        }
        else {
            return false;
        }
    };
    PermissionUserStatisticsComponent = PermissionUserStatisticsComponent_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-permission-user-statistics',
            template: __webpack_require__("../../../../../src/app/layout/permission/permission-user/permission-user-statistics/permission-user-statistics.component.html"),
            styles: [__webpack_require__("../../../../../src/app/layout/permission/permission-user/permission-user-statistics/permission-user-statistics.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_services__["o" /* UserGroupService */],
            __WEBPACK_IMPORTED_MODULE_1__shared_services__["j" /* DataService */],
            __WEBPACK_IMPORTED_MODULE_3__node_modules_ngx_spinner__["NgxSpinnerService"]])
    ], PermissionUserStatisticsComponent);
    return PermissionUserStatisticsComponent;
    var PermissionUserStatisticsComponent_1;
}());



/***/ }),

/***/ "../../../../../src/app/layout/permission/permission-user/permission-user.component.html":
/***/ (function(module, exports) {

module.exports = "<div [@routerTransition]>\n  <div class=\"search-box d-flex\">\n    <div class=\"media mr-auto media--custom-title\">\n      <div class=\"media-header\">\n        <a [routerLink]='[\"/permission\"]'>\n          <i class=\"fa fa-chevron-left mr-3\" aria-hidden=\"true\"></i>\n        </a>\n        <h4 class=\"d-inline mb-0 text-dark\">\n          Phân quyền nhóm {{userGroupName}}\n        </h4>\n      </div>\n    </div>\n    <div class=\"action-bar\">\n      <button *ngIf=\"isPmsSetPermissionDashboard || isPmsSetPermissionProspect || isPmsSetPermissionCustomer || isPmsSetPermissionContact || isPmsSetPermissionOpportunity || isPmsSetPermissionCampaign || isPmsSetPermissionActivity || isPmsSetPermissionManagerPermission || groupRole == userGroupRole.SuperAdmin || groupRole == userGroupRole.Admin\" class=\"btn btn-primary ml-2\" (click)=\"submitForm()\">Lưu &nbsp;\n      </button>\n      <button *ngIf=\"isPmsSetPermissionDashboard || isPmsSetPermissionProspect || isPmsSetPermissionCustomer || isPmsSetPermissionContact || isPmsSetPermissionOpportunity || isPmsSetPermissionCampaign || isPmsSetPermissionActivity || isPmsSetPermissionManagerPermission || groupRole == userGroupRole.SuperAdmin || groupRole == userGroupRole.Admin\" class=\"btn btn-secondary ml-2\" [routerLink]=\"['/permission']\">Hủy &nbsp;\n      </button>\n    </div>\n  </div>\n  <hr>\n  <div class=\"mt-4\" *ngIf=\"isPmsSetPermissionDashboard || isPmsSetPermissionProspect || isPmsSetPermissionCustomer || isPmsSetPermissionContact || isPmsSetPermissionOpportunity || isPmsSetPermissionCampaign || isPmsSetPermissionActivity || isPmsSetPermissionManagerPermission || groupRole == userGroupRole.SuperAdmin || groupRole == userGroupRole.Admin\">\n    <div class=\"row mx-0 permission-container\">\n      <div class=\"col-md-2 permission-container--menu\">\n        <ul class=\"list-unstyled mt-3\">\n          <li routerLink=\"./home\" routerLinkActive=\"active\" *ngIf=\"isPmsSetPermissionDashboard || groupRole == userGroupRole.SuperAdmin || groupRole == userGroupRole.Admin\">\n            <a>Trang chủ</a>\n          </li>\n          <li routerLink=\"./prospect\" routerLinkActive=\"active\" *ngIf=\"isPmsSetPermissionProspect || groupRole == userGroupRole.SuperAdmin || groupRole == userGroupRole.Admin\">\n            <a>Tiềm năng</a>\n          </li>\n          <li routerLink=\"./customer\" routerLinkActive=\"active\" *ngIf=\"isPmsSetPermissionCustomer || groupRole == userGroupRole.SuperAdmin || groupRole == userGroupRole.Admin\">\n            <a>Khách hàng</a>\n          </li>\n          <li routerLink=\"./contact\" routerLinkActive=\"active\" *ngIf=\"isPmsSetPermissionContact || groupRole == userGroupRole.SuperAdmin || groupRole == userGroupRole.Admin\">\n            <a>Liên hệ</a>\n          </li>\n          <li routerLink=\"./opportunity\" routerLinkActive=\"active\" *ngIf=\"isPmsSetPermissionOpportunity || groupRole == userGroupRole.SuperAdmin || groupRole == userGroupRole.Admin\">\n            <a>Cơ hội</a>\n          </li>\n          <li routerLink=\"./campaign\" routerLinkActive=\"active\" *ngIf=\"isPmsSetPermissionCampaign || groupRole == userGroupRole.SuperAdmin || groupRole == userGroupRole.Admin\">\n            <a>Chiến dịch</a>\n          </li>\n          <li routerLink=\"./activity\" routerLinkActive=\"active\" *ngIf=\"isPmsSetPermissionActivity || groupRole == userGroupRole.SuperAdmin || groupRole == userGroupRole.Admin\">\n            <a>Hoạt động</a>\n          </li>\n          <!-- <li routerLink=\"./statistics\" routerLinkActive=\"active\">\n            <a>Báo cáo thống kê</a>\n          </li> -->\n          <li routerLink=\"./permission\" routerLinkActive=\"active\" *ngIf=\"isPmsSetPermissionManagerPermission || groupRole == userGroupRole.SuperAdmin || groupRole == userGroupRole.Admin\">\n            <a>Quản lý phân quyền</a>\n          </li>\n          <!-- <li routerLink=\"./statistics\" routerLinkActive=\"active\">\n            <a>Báo cáo thống kê</a>\n          </li> -->\n        </ul>\n      </div>\n      <div class=\"col-md\">\n        <router-outlet></router-outlet>\n      </div>\n    </div>\n  </div>\n  <div class=\"text-center\" *ngIf=\"!isPmsSetPermissionDashboard && !isPmsSetPermissionProspect && !isPmsSetPermissionCustomer && !isPmsSetPermissionContact && !isPmsSetPermissionOpportunity && !isPmsSetPermissionCampaign && !isPmsSetPermissionActivity && !isPmsSetPermissionManagerPermission && groupRole != userGroupRole.SuperAdmin && groupRole != userGroupRole.Admin\">Bạn không có quyền xem dữ liệu này</div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/layout/permission/permission-user/permission-user.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host /deep/ .custom-checkbox {\n  padding: .5rem;\n  margin-left: 2px;\n  margin-right: .25rem; }\n\n.permission-container {\n  border: 1px solid rgba(0, 0, 0, 0.1); }\n  .permission-container .permission-container--menu {\n    border-right: 1px solid rgba(0, 0, 0, 0.1); }\n\nul li {\n  padding: .5rem 1rem; }\n  ul li.active {\n    background-color: #17a2b8;\n    color: white; }\n  ul li:focus {\n    outline: none; }\n  ul li:hover {\n    cursor: pointer; }\n\n.custom-control-input--disabled:disabled ~ .custom-control-indicator {\n  background-color: #17a2b8;\n  opacity: .5; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/layout/permission/permission-user/permission-user.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PermissionUserComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services__ = __webpack_require__("../../../../../src/app/shared/services/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__router_animations__ = __webpack_require__("../../../../../src/app/router.animations.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__permission_user_prospect_permission_user_prospect_component__ = __webpack_require__("../../../../../src/app/layout/permission/permission-user/permission-user-prospect/permission-user-prospect.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__permission_user_customer_permission_user_customer_component__ = __webpack_require__("../../../../../src/app/layout/permission/permission-user/permission-user-customer/permission-user-customer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__permission_user_contact_permission_user_contact_component__ = __webpack_require__("../../../../../src/app/layout/permission/permission-user/permission-user-contact/permission-user-contact.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__permission_user_opportunity_permission_user_opportunity_component__ = __webpack_require__("../../../../../src/app/layout/permission/permission-user/permission-user-opportunity/permission-user-opportunity.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__permission_user_campaign_permission_user_campaign_component__ = __webpack_require__("../../../../../src/app/layout/permission/permission-user/permission-user-campaign/permission-user-campaign.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__permission_user_activity_permission_user_activity_component__ = __webpack_require__("../../../../../src/app/layout/permission/permission-user/permission-user-activity/permission-user-activity.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__shared_configs_common_config__ = __webpack_require__("../../../../../src/app/shared/configs/common.config.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var PermissionUserComponent = /** @class */ (function () {
    function PermissionUserComponent(route, userGroupService, alertService, sessionService, router) {
        this.route = route;
        this.userGroupService = userGroupService;
        this.alertService = alertService;
        this.sessionService = sessionService;
        this.router = router;
        this.action = 'edit';
        this.userGroupRole = __WEBPACK_IMPORTED_MODULE_10__shared_configs_common_config__["b" /* USER_GROUP_ROLE */];
    }
    PermissionUserComponent_1 = PermissionUserComponent;
    Object.defineProperty(PermissionUserComponent.prototype, "groupRole", {
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
    Object.defineProperty(PermissionUserComponent.prototype, "isPmsSetPermissionDashboard", {
        get: function () {
            // set phân quyền trang chủ
            if (this.listPermission && this.listPermission.length > 0) {
                return this.listPermission.filter(function (i) { return i.functionWeb.no === 'PermissionHome'; }).length > 0 ? true : false;
            }
            else {
                return false;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PermissionUserComponent.prototype, "isPmsSetPermissionProspect", {
        get: function () {
            // set phân quyền tiềm năng
            if (this.listPermission && this.listPermission.length > 0) {
                return this.listPermission.filter(function (i) { return i.functionWeb.no === 'PermissionProspect'; }).length > 0 ? true : false;
            }
            else {
                return false;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PermissionUserComponent.prototype, "isPmsSetPermissionCustomer", {
        get: function () {
            // set phân quyền công ty
            if (this.listPermission && this.listPermission.length > 0) {
                return this.listPermission.filter(function (i) { return i.functionWeb.no === 'PermissionCustomer'; }).length > 0 ? true : false;
            }
            else {
                return false;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PermissionUserComponent.prototype, "isPmsSetPermissionContact", {
        get: function () {
            // set phân quyền cá nhân
            if (this.listPermission && this.listPermission.length > 0) {
                return this.listPermission.filter(function (i) { return i.functionWeb.no === 'PermissionContact'; }).length > 0 ? true : false;
            }
            else {
                return false;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PermissionUserComponent.prototype, "isPmsSetPermissionOpportunity", {
        get: function () {
            // set phân quyền cơ hội
            if (this.listPermission && this.listPermission.length > 0) {
                return this.listPermission.filter(function (i) { return i.functionWeb.no === 'PermissionOpportunity'; }).length > 0 ? true : false;
            }
            else {
                return false;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PermissionUserComponent.prototype, "isPmsSetPermissionCampaign", {
        get: function () {
            // set phân quyền chiến dịch
            if (this.listPermission && this.listPermission.length > 0) {
                return this.listPermission.filter(function (i) { return i.functionWeb.no === 'PermissionCampaign'; }).length > 0 ? true : false;
            }
            else {
                return false;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PermissionUserComponent.prototype, "isPmsSetPermissionActivity", {
        get: function () {
            // set phân quyền hoạt động
            if (this.listPermission && this.listPermission.length > 0) {
                return this.listPermission.filter(function (i) { return i.functionWeb.no === 'PermissionActivity'; }).length > 0 ? true : false;
            }
            else {
                return false;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PermissionUserComponent.prototype, "isPmsSetPermissionManagerPermission", {
        get: function () {
            // set phân quyền quản lý phân quyền
            if (this.listPermission && this.listPermission.length > 0) {
                return this.listPermission.filter(function (i) { return i.functionWeb.no === 'PermissionManagePermission'; }).length > 0 ? true : false;
            }
            else {
                return false;
            }
        },
        enumerable: true,
        configurable: true
    });
    PermissionUserComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.listPermission = this.sessionService.getSession().userGroupFunctions;
        this.route.params.subscribe(function (param) {
            _this.userGroupId = Number(param.id);
            _this.userGroupService.getUserGroupPermission(_this.userGroupId).subscribe(function (pms) {
                _this.userGroupName = pms.userGroup && pms.userGroup.name;
                PermissionUserComponent_1.listPermissionData = pms.userGroupFunctions;
                _this.userGroupService.updatePermission();
            });
        });
    };
    PermissionUserComponent.prototype.submitForm = function () {
        var _this = this;
        this.checkViewInfoPermission();
        var data = {
            userGroup: {
                id: this.userGroupId
            },
            userGroupFunctions: PermissionUserComponent_1.listPermissionData
        };
        this.userGroupService.createOrEditUserGroupPermission(data, this.action).subscribe(function (res) {
            _this.router.navigate(['/permission/list']);
            _this.alertService.success('Phân quyền nhóm thành công!');
        }, function (err) {
            _this.alertService.error('Phân quyền nhóm thất bại!');
        });
    };
    PermissionUserComponent.prototype.checkViewInfoPermission = function () {
        this.checkTypeAndDeletePms(__WEBPACK_IMPORTED_MODULE_4__permission_user_prospect_permission_user_prospect_component__["a" /* PermissionUserProspectComponent */].prospectViewType, 'Prospect');
        this.checkTypeAndDeletePms(__WEBPACK_IMPORTED_MODULE_5__permission_user_customer_permission_user_customer_component__["a" /* PermissionUserCustomerComponent */].customerViewType, 'Customer');
        this.checkTypeAndDeletePms(__WEBPACK_IMPORTED_MODULE_6__permission_user_contact_permission_user_contact_component__["a" /* PermissionUserContactComponent */].contactViewType, 'Contact');
        this.checkTypeAndDeletePms(__WEBPACK_IMPORTED_MODULE_7__permission_user_opportunity_permission_user_opportunity_component__["a" /* PermissionUserOpportunityComponent */].opportunityViewType, 'Opportunity');
        this.checkTypeAndDeletePms(__WEBPACK_IMPORTED_MODULE_8__permission_user_campaign_permission_user_campaign_component__["a" /* PermissionUserCampaignComponent */].campaignViewType, 'Campaign');
        this.checkTypeAndDeletePms(__WEBPACK_IMPORTED_MODULE_9__permission_user_activity_permission_user_activity_component__["a" /* PermissionUserActivityComponent */].activityViewTypeEvent, 'Activity', 'Event');
        this.checkTypeAndDeletePms(__WEBPACK_IMPORTED_MODULE_9__permission_user_activity_permission_user_activity_component__["a" /* PermissionUserActivityComponent */].activityViewTypeWork, 'Activity', 'Work');
        // this.checkTypeAndDeletePms(PermissionUserStatisticsComponent.userStatistics, 'Statistics');
        this.CheckModuleStatistics();
        this.checkByNoAndDeletePms('ProspectViewProspectInformation', ['ProspectProspectSummary', 'ProspectViewProspectDetail', 'ProspectViewComments', 'ProspectAddComment', 'ProspectActivities', 'ProspectHistories', 'ProspectChangeProspect']);
        this.checkByNoAndDeletePms('ProspectEditProspect', ['ProspectConfigRate', 'ProspectConfigProspectResource', 'ProspectConfigHandler', 'ProspectConfigDB', 'ProspectConfigApproachChannel', 'ProspectEditApproached', 'ProspectEditSaleOpportunity',
            'ProspectEditPotentialStatus', 'ProspectEditResult']);
        this.checkByNoAndDeletePms('ProspectViewProspectDetail', ['ProspectViewApproached', 'ProspectViewSaleOpportunity', 'ProspectViewPotentialStatus', 'ProspectViewResult']);
        this.checkByNoAndDeletePms('CustomerEditCustomer', ['CustomerConfigGroup']);
        this.checkByNoAndDeletePms('OpportunityEditOpportunity', ['OpportunityConfigCustomerResource', 'OpportunityConfigCustomerStep', 'OpportunityConfigApproachChannel']);
        this.checkByNoAndDeletePms('CampaignEditCampaign', ['CampaignConfigApproachChannel', 'CampaignConfigType']);
        this.checkByNoAndDeletePms('ActivityEditActivity', ['ActivityConfigEventType'], 'Event');
        var listNoViewCustomer = ['CustomerSummary', 'CustomerViewDetail', 'CustomerViewComments', 'CustomerAddComment', 'CustomerActivities', 'CustomerHistories', 'CustomerOpportunities', 'CustomerCustomerEvaluation',
            'CustomerEvaluationBasicInformation', 'CustomerEvaluationFinance', 'CustomerEvaluationEvaluationInformation', 'CustomerEvaluationHBCOperation', 'CustomerEvaluationContractInformation'];
        this.checkByNoAndDeletePms('CustomerViewCustomerInformation', listNoViewCustomer);
        this.checkByNoAndDeletePms('ContactViewInformation', ['ContactContactSummary', 'ContactViewContactDetail', 'ContactViewComments', 'ContactComments', 'ContactActivities', 'ContactHistories', 'ContactOpportunities']);
        this.checkByNoAndDeletePms('OpportunityViewOpportunityInformation', ['OpportunityOpportunitySummary', 'OpportunityViewOpportunityDetail', 'OpportunityViewComments', 'OpportunityAddComment', 'OpportunityActivites', 'OpportunityHistories']);
        this.checkByNoAndDeletePms('CampaignViewInformation', ['CampaignCampaignSummary', 'CampaignViewCampaignDetail', 'CampaignViewExpectedCampaign', 'CampaignViewComments', 'CampaignAddComment', 'CampaignActivities', 'CampaignHistories']);
        var listNoViewActivity = ['ActivityViewActivityDetail', 'ActivityViewComments', 'ActivityAddComment', 'ActivityHistories'];
        this.checkByNoAndDeletePms('ActivityViewInformation', listNoViewActivity, 'Event');
        this.checkByNoAndDeletePms('ActivityViewInformation', listNoViewActivity, 'Work');
        // tslint:disable-next-line:max-line-length
        this.checkByNoAndDeletePms('PermissionSetUserGroupPermissions', ['PermissionSetPermissions', 'PermissionHome', 'PermissionProspect', 'PermissionCustomer', 'PermissionContact', 'PermissionOpportunity', 'PermissionCampaign', 'PermissionActivity', 'PermissionStatisticReport', 'PermissionManagePermission']);
    };
    PermissionUserComponent.prototype.CheckModuleStatistics = function () {
        var listPms = PermissionUserComponent_1.listPermissionData.filter(function (i) { return i.functionWeb.no.startsWith('Statistics'); });
        var ArrayCategory = PermissionUserComponent_1.listPermissionData.filter(function (i) {
            return i.functionWeb.no.startsWith('Statistics') && (i.type === false || i.type === null);
        });
        (ArrayCategory || []).forEach(function (itemArrayCategory) {
            listPms.forEach(function (pms) {
                var idx = PermissionUserComponent_1.listPermissionData.findIndex(function (i) {
                    return (i.functionWeb.no === itemArrayCategory.functionWeb.no && i.category);
                });
                //  || (pms.functionWeb.no.startsWith('Statistics') && i.type === true && !i.category)
                if (idx !== -1) {
                }
                // tslint:disable-next-line:no-unused-expression
                idx !== -1 && PermissionUserComponent_1.listPermissionData.splice(idx, 1);
            });
        });
    };
    PermissionUserComponent.prototype.checkTypeAndDeletePms = function (type, moduleName, category) {
        if (type === null) {
            if (!category) {
                var listPms = PermissionUserComponent_1.listPermissionData.filter(function (i) { return i.functionWeb.no.startsWith(moduleName); });
                listPms.forEach(function (pms) {
                    var idx = PermissionUserComponent_1.listPermissionData.findIndex(function (i) { return i.functionWeb.no === pms.functionWeb.no; });
                    // tslint:disable-next-line:no-unused-expression
                    idx !== -1 && PermissionUserComponent_1.listPermissionData.splice(idx, 1);
                });
            }
            else {
                var listPmsByCategory = PermissionUserComponent_1.listPermissionData.filter(function (i) { return i.functionWeb.no.startsWith(moduleName) && i.category === category; });
                listPmsByCategory.forEach(function (pms) {
                    var idx = PermissionUserComponent_1.listPermissionData.findIndex(function (i) { return i.functionWeb.no === pms.functionWeb.no && i.category === pms.category; });
                    // tslint:disable-next-line:no-unused-expression
                    idx !== -1 && PermissionUserComponent_1.listPermissionData.splice(idx, 1);
                });
            }
        }
    };
    PermissionUserComponent.prototype.checkByNoAndDeletePms = function (no, pmsNoArr, category) {
        var pmsInList = PermissionUserComponent_1.listPermissionData.find(function (i) { return i.functionWeb.no === no; });
        if (!pmsInList) {
            if (!category) {
                pmsNoArr.forEach(function (pmsNo) {
                    var idx = PermissionUserComponent_1.listPermissionData.findIndex(function (i) { return i.functionWeb.no === pmsNo; });
                    // tslint:disable-next-line:no-unused-expression
                    idx !== -1 && PermissionUserComponent_1.listPermissionData.splice(idx, 1);
                });
            }
            else {
                pmsNoArr.forEach(function (pmsNo) {
                    var idx = PermissionUserComponent_1.listPermissionData.findIndex(function (i) { return i.functionWeb.no === pmsNo && i.category === category; });
                    // tslint:disable-next-line:no-unused-expression
                    idx !== -1 && PermissionUserComponent_1.listPermissionData.splice(idx, 1);
                });
            }
        }
    };
    PermissionUserComponent.listPermissionData = [];
    PermissionUserComponent = PermissionUserComponent_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-permission-user',
            template: __webpack_require__("../../../../../src/app/layout/permission/permission-user/permission-user.component.html"),
            styles: [__webpack_require__("../../../../../src/app/layout/permission/permission-user/permission-user.component.scss")],
            animations: [Object(__WEBPACK_IMPORTED_MODULE_3__router_animations__["a" /* routerTransition */])()]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["ActivatedRoute"],
            __WEBPACK_IMPORTED_MODULE_1__shared_services__["o" /* UserGroupService */],
            __WEBPACK_IMPORTED_MODULE_1__shared_services__["b" /* AlertService */],
            __WEBPACK_IMPORTED_MODULE_1__shared_services__["n" /* SessionService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"]])
    ], PermissionUserComponent);
    return PermissionUserComponent;
    var PermissionUserComponent_1;
}());



/***/ }),

/***/ "../../../../../src/app/layout/permission/permission-user/permission-user.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PermissionUserModule", function() { return PermissionUserModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__permission_user_routing_module__ = __webpack_require__("../../../../../src/app/layout/permission/permission-user/permission-user-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__permission_user_component__ = __webpack_require__("../../../../../src/app/layout/permission/permission-user/permission-user.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__permission_user_home_permission_user_home_component__ = __webpack_require__("../../../../../src/app/layout/permission/permission-user/permission-user-home/permission-user-home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__permission_user_prospect_permission_user_prospect_component__ = __webpack_require__("../../../../../src/app/layout/permission/permission-user/permission-user-prospect/permission-user-prospect.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__permission_user_customer_permission_user_customer_component__ = __webpack_require__("../../../../../src/app/layout/permission/permission-user/permission-user-customer/permission-user-customer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__permission_user_contact_permission_user_contact_component__ = __webpack_require__("../../../../../src/app/layout/permission/permission-user/permission-user-contact/permission-user-contact.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__permission_user_opportunity_permission_user_opportunity_component__ = __webpack_require__("../../../../../src/app/layout/permission/permission-user/permission-user-opportunity/permission-user-opportunity.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__permission_user_campaign_permission_user_campaign_component__ = __webpack_require__("../../../../../src/app/layout/permission/permission-user/permission-user-campaign/permission-user-campaign.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__permission_user_activity_permission_user_activity_component__ = __webpack_require__("../../../../../src/app/layout/permission/permission-user/permission-user-activity/permission-user-activity.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__permission_user_statistics_permission_user_statistics_component__ = __webpack_require__("../../../../../src/app/layout/permission/permission-user/permission-user-statistics/permission-user-statistics.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__permission_user_permission_permission_user_permission_component__ = __webpack_require__("../../../../../src/app/layout/permission/permission-user/permission-user-permission/permission-user-permission.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__permission_item_permission_item_component__ = __webpack_require__("../../../../../src/app/layout/permission/permission-user/permission-item/permission-item.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var PermissionUserModule = /** @class */ (function () {
    function PermissionUserModule() {
    }
    PermissionUserModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_2__permission_user_routing_module__["a" /* PermissionUserRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__["a" /* SharedModule */]
            ],
            // tslint:disable-next-line:max-line-length
            declarations: [__WEBPACK_IMPORTED_MODULE_3__permission_user_component__["a" /* PermissionUserComponent */], __WEBPACK_IMPORTED_MODULE_5__permission_user_home_permission_user_home_component__["a" /* PermissionUserHomeComponent */], __WEBPACK_IMPORTED_MODULE_6__permission_user_prospect_permission_user_prospect_component__["a" /* PermissionUserProspectComponent */], __WEBPACK_IMPORTED_MODULE_7__permission_user_customer_permission_user_customer_component__["a" /* PermissionUserCustomerComponent */], __WEBPACK_IMPORTED_MODULE_8__permission_user_contact_permission_user_contact_component__["a" /* PermissionUserContactComponent */], __WEBPACK_IMPORTED_MODULE_9__permission_user_opportunity_permission_user_opportunity_component__["a" /* PermissionUserOpportunityComponent */], __WEBPACK_IMPORTED_MODULE_10__permission_user_campaign_permission_user_campaign_component__["a" /* PermissionUserCampaignComponent */], __WEBPACK_IMPORTED_MODULE_11__permission_user_activity_permission_user_activity_component__["a" /* PermissionUserActivityComponent */], __WEBPACK_IMPORTED_MODULE_12__permission_user_statistics_permission_user_statistics_component__["a" /* PermissionUserStatisticsComponent */], __WEBPACK_IMPORTED_MODULE_13__permission_user_permission_permission_user_permission_component__["a" /* PermissionUserPermissionComponent */], __WEBPACK_IMPORTED_MODULE_14__permission_item_permission_item_component__["a" /* PermissionItemComponent */]]
        })
    ], PermissionUserModule);
    return PermissionUserModule;
}());



/***/ }),

/***/ "../../../../../src/app/shared/models/api-response/user/user-group-permission.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserGroupPermission; });
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

var UserGroupPermission = /** @class */ (function (_super) {
    __extends(UserGroupPermission, _super);
    function UserGroupPermission() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return UserGroupPermission;
}(__WEBPACK_IMPORTED_MODULE_0__checkbox_selected_model__["a" /* CheckboxSelection */]));



/***/ })

});
//# sourceMappingURL=permission-user.module.chunk.js.map