webpackJsonp(["permission.module"],{

/***/ "../../../../../src/app/layout/permission/permission-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PermissionRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__permission_user_list_permission_user_list_component__ = __webpack_require__("../../../../../src/app/layout/permission/permission-user-list/permission-user-list.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        redirectTo: 'list'
    },
    {
        path: 'list',
        component: __WEBPACK_IMPORTED_MODULE_2__permission_user_list_permission_user_list_component__["a" /* PermissionUserListComponent */]
    },
    {
        path: 'setting/:id',
        loadChildren: './permission-user/permission-user.module#PermissionUserModule'
    }
];
var PermissionRoutingModule = /** @class */ (function () {
    function PermissionRoutingModule() {
    }
    PermissionRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"]]
        })
    ], PermissionRoutingModule);
    return PermissionRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/layout/permission/permission-user-list/permission-user-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div [@routerTransition]>\n    <div class=\"search-box d-flex\">\n        <h5 class=\"mr-auto d-flex align-items-end\">Danh sách nhóm người dùng</h5>\n        <div class=\"input-group\" [class.d-none]=\"!isPmsViewGroupList && groupRole != userGroupRole.SuperAdmin && groupRole != userGroupRole.Admin\">\n            <span class=\"input-group-addon\">Tìm kiếm theo</span>\n            <input type=\"text\" class=\"form-control\" placeholder=\"Tên, mô tả\" (keyup)=\"searchTerm$.next($event.target.value)\">\n        </div>\n\n        <button *ngIf=\"isPmsAddGroup || groupRole == userGroupRole.SuperAdmin\" class=\"btn btn-primary ml-2\" (click)=\"openPopupCreate(createUserGroupModal)\">\n            <i class=\"fa fa-plus\" aria-hidden=\"true\"></i>&nbsp; Thêm mới nhóm người dùng</button>\n        <button *ngIf=\"isPmsDeleteGroup || groupRole == userGroupRole.SuperAdmin\" class=\"btn btn-primary ml-2\" (click)=\"multiDelete()\">\n            <i class=\"fa fa-trash-o\" aria-hidden=\"true\"></i>\n        </button>\n        <button class=\"btn btn-primary ml-2\" (click)=\"refresh(true)\">\n            <i class=\"fa fa-refresh\" aria-hidden=\"true\"></i>\n        </button>\n    </div>\n\n    <div class=\"mt-4 b-pin-col-wrapper\" [class.d-none]=\"!isPmsViewGroupList && groupRole != userGroupRole.SuperAdmin && groupRole != userGroupRole.Admin\">\n        <div class=\"b-pin-col-scroller\" #wrap1 (scroll)=\"syncScroll1(wrap1, wrap2)\">\n            <table class=\"b-pin-col-table table\" #tablePin>\n                <thead class=\"table-active\">\n                    <tr>\n                        <th class=\"text-center w-60 b-pin-col-sticky-col th-stt-pad\">\n                            <div class=\"d-flex justify-content-center align-items-center h-100\">\n                                <span class=\"align-middle\">\n                                    <label class=\"custom-control custom-checkbox stt-checkbox--mar mb-0\">\n                                        <input type=\"checkbox\" class=\"custom-control-input\" [(ngModel)]=checkboxSeclectAll (change)=\"onSelectAll($event.target.checked)\">\n                                        <span class=\"custom-control-indicator\"></span>\n                                    </label>\n                                </span>\n                                <span class=\"ml-2\">STT</span>\n                            </div>\n                        </th>\n                        <th class=\"mw-100 align-middle\">Tên nhóm</th>\n                        <th class=\"mw-100 align-middle\">Mô tả</th>\n                        <th class=\"mw-100 align-middle\">Chi nhánh</th>\n                        <th class=\"mw-100 align-middle\">Ngày tạo</th>\n                        <th class=\"mw-100 align-middle\">Trạng thái</th>\n                        <th class=\"table-action b-pin-col-sticky-col-right text-center\">Thao tác</th>\n                    </tr>\n                </thead>\n                <!-- {{item.canBeModify}} -->\n                <tbody>\n                    <tr *ngFor=\"let item of pagedResult.items; let i = index\" appRowHover>\n                        <td class=\"text-center b-pin-col-sticky-col w-60\">\n                            <div class=\"d-flex align-items-center h-100\">\n                                <span>\n                                    <label class=\"custom-control custom-checkbox stt-checkbox--mar mb-0\">\n                                        <!-- không dc xóa group SuperAdmin, chỉ SuperAdmin mới dc xóa Admin -->\n                                        <input type=\"checkbox\" [attr.disabled]=\"item.role == userGroupRole.SuperAdmin ? '' : (item.role == userGroupRole.Admin ? groupRole == userGroupRole.SuperAdmin ? null : '' : null)\" class=\"custom-control-input\" [(ngModel)]=\"item.checkboxSelected\">\n                                        <span class=\"custom-control-indicator\"></span>\n                                    </label>\n                                </span>\n                                <span class=\"ml-2\">\n                                    {{i + pagedResult.currentPage * pagedResult.pageSize + 1}}\n\n                                </span>\n                            </div>\n                        </td>\n                        <td class=\"text-hyperlink mw-12rem text-ellipsis\" (click)=\"viewUserGroup(item.id, createUserGroupModal)\">{{item.name}}</td>\n                        <td class=\"mw-12rem table-td--wrap text-ellipsis\">{{item.description || 'Không có'}}</td>\n                        <td>{{item.branch?.name || 'Không có'}}</td>\n                        <td>{{item.createdDate | date: 'dd/MM/yyyy'}}</td>\n                        <td>{{item.role == userGroupRole.SuperAdmin || item.role == userGroupRole.Admin ? 'Đã phân quyền' : item.isPermission ? 'Đã phân quyền' : 'Chưa phân quyền'}}</td>\n                        <td class=\"b-pin-col-sticky-col-right\">\n                            <div class=\"d-flex justify-content-center align-items-center h-100\">\n                                <a class=\"pointer\" (click)=\"viewUserGroup(item.id, createUserGroupModal)\">\n                                    <i class=\"fa fa-eye text-warning cursor-pointer\" aria-hidden=\"true\"></i>\n                                </a>\n\n                                <a (click)=\"editUserGroup(item.id, createUserGroupModal)\" class=\" text-success ml-3\" [class.invisible]=\"getPmsEditGroupByRole(item.role)\">\n                                    <i class=\"fa fa-pencil cursor-pointer\" aria-hidden=\"true\"> </i>\n                                </a>\n                                <a class=\"text-info ml-3 pointer\" [routerLink]=\"['../setting', item.id]\" [class.invisible]=\"item.role == userGroupRole.SuperAdmin || item.role == userGroupRole.Admin ? true : groupRole == userGroupRole.SuperAdmin || groupRole == userGroupRole.Admin ? false : isPmsPermissionGroup ? false : true\">\n                                    <i class=\"fa fa-cogs\" aria-hidden=\"true\"></i>\n                                </a>\n                                <a (click)=\"delete(item.id)\" class=\"text-dark ml-3\" [class.invisible]=\"item.role == userGroupRole.SuperAdmin ? true : item.role == userGroupRole.Admin ? groupRole == userGroupRole.SuperAdmin ? false : true : groupRole == userGroupRole.SuperAdmin || groupRole == userGroupRole.Admin ? false : isPmsDeleteGroup ? false : true\">\n                                    <i class=\"fa fa-trash-o cursor-pointer\" aria-hidden=\"true\"></i>\n                                </a>\n                            </div>\n                        </td>\n                    </tr>\n                </tbody>\n            </table>\n        </div>\n        <p class=\"text-center pt-3\" *ngIf=\"pagedResult && pagedResult.items && pagedResult.items.length === 0\">Không có dữ liệu</p>\n    </div>\n    <div class=\"scrollbar-fake\" [class.d-none]=\"!isPmsViewGroupList && groupRole != userGroupRole.SuperAdmin && groupRole != userGroupRole.Admin\" #wrap2 (scroll)=\"syncScroll2(wrap1, wrap2)\">\n        <div class=\"scrollbar-fake-content\" #fakeScrollBar></div>\n    </div>\n\n    <app-pagination [class.d-none]=\"!isPmsViewGroupList && groupRole != userGroupRole.SuperAdmin && groupRole != userGroupRole.Admin\" [pagedResult]=\"pagedResult\" (pagedResultChange)=\"pagedResultChange($event)\"></app-pagination>\n\n    <div class=\"text-center\" [class.d-none]=\"isPmsViewGroupList || groupRole == userGroupRole.SuperAdmin || groupRole == userGroupRole.Admin\">Bạn không có quyền xem dữ liệu này</div>\n</div>\n\n<div bsModal #createUserGroupModal=\"bs-modal\" (onHide)=\"modalHide()\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"dialog-sizes-name1\">\n    <div class=\"modal-dialog modal-lg\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <div class=\"modal-title pull-left\">\n                    <span *ngIf=\"action == 'create'\">Tạo mới nhóm người dùng</span>\n                    <span *ngIf=\"action == 'view'\">Nhóm {{userGroupCreate.name}}</span>\n                    <span class=\"text--word-break\" *ngIf=\"action == 'edit'\">Cập nhật nhóm {{userGroupCreate.name}}</span>\n                </div>\n                <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"createUserGroupModal.hide()\">\n                    <span aria-hidden=\"true\">&times;</span>\n                </button>\n            </div>\n            <div class=\"modal-body p-4\">\n                <form #userGroupForm=\"ngForm\">\n                    <div class=\"row\">\n                        <div class=\"col-md-2\" [class.required]=\"action != 'view'\">Tên</div>\n                        <div class=\"col-md-10\">\n                            <input class=\"form-control input--disabled\" required #userGroupName=\"ngModel\" [attr.disabled]=\"action != 'view' ? null : ''\"\n                                [class.is-invalid]=\"isSubmit && userGroupName.errors?.required\" [(ngModel)]=\"userGroupCreate.name\"\n                                name=\"name\">\n                            <p class=\"text-err\" *ngIf=\"isSubmit && userGroupName.errors?.required\">Trường này là bắt buộc\n                            </p>\n                            <p class=\"text-err\" *ngIf=\"isSubmit && userGroupCreate.name && userGroupCreate.name.trim().length > 50\">Trường này không được nhiều hơn 50 ký tự</p>\n                        </div>\n                    </div>\n                    <div class=\"row mt-3\">\n                        <div class=\"col-md-2\">Mô tả</div>\n                        <div class=\"col-md\">\n                            <textarea class=\"form-control input--disabled\" #userGroupDesc=\"ngModel\" [(ngModel)]=\"userGroupCreate.description\" [attr.disabled]=\"action != 'view' ? null : ''\"\n                                name=\"desc\"></textarea>\n                            <p class=\"text-err\" *ngIf=\"isSubmit && userGroupCreate.description && userGroupCreate.description.trim().length > 200\">Trường này không được nhiều hơn 200 ký tự</p>\n                        </div>\n                    </div>\n                    <div class=\"row mt-3\">\n                        <div class=\"col-md-2 text-nowrap\">Chi nhánh</div>\n                        <div class=\"col-md\">\n                            <span class=\"custom-dropdown w-100\">\n                                <select class=\"form-control\" #userBranch=\"ngModel\" (change)=\"getEmployeeByBranch($event.target.value)\" [(ngModel)]=\"userGroupCreate.branch && userGroupCreate.branch.id\"\n                                    name=\"branch\" tabindex=\"6\">\n                                    <option *ngFor=\"let item of branches | async\" [value]=\"item.id\">{{item.text}}</option>\n                                </select>\n                            </span>\n                        </div>\n                    </div>\n                    <div *ngIf=\"action != 'view'\" class=\"mt-3 required\">Vui lòng chọn nhân viên thuộc nhóm</div>\n                    <div *ngIf=\"action == 'view'\" class=\"mt-3 row\">\n                        <div class=\"offset-md-2 col-md\">\n                            <div class=\"p-2 item-selector-grid--title\">Danh sách nhân viên</div>\n                            <div class=\"p-2 item-selector-grid--item-list\">\n                                <div class=\"item-selector-grid--search-box\">\n                                    <i class=\"fa fa-search\" aria-hidden=\"true\"></i>\n                                    <input class=\"pb-1\" (keyup)=\"employeeViewSearchTerm$.next($event.target.value)\" placeholder=\"Tên nhân viên\">\n                                </div>\n                                <div class=\"item-selector-grid--item-list-div pt-2\">\n                                    <p class=\"text-center\" *ngIf=\"userGroupMemberViewList && userGroupMemberViewList.length === 0\">Không có dữ liệu</p>\n                                    <p *ngFor=\"let e of userGroupMemberViewList\">{{e.name}}</p>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <div *ngIf=\"action != 'view'\" class=\"mt-3 item-selector-grid\">\n                        <div>\n                            <div class=\"p-2 item-selector-grid--title\">Danh sách nhân viên</div>\n                            <div class=\"p-2 item-selector-grid--item-list\">\n                                <div class=\"item-selector-grid--search-box\">\n                                    <i class=\"fa fa-search\" aria-hidden=\"true\"></i>\n                                    <input (keyup)=\"employeeSearchTerm$.next($event.target.value)\" class=\"pb-1\" placeholder=\"Tên nhân viên\">\n                                </div>\n                                <div class=\"item-selector-grid--item-list-div pt-2 position-relative\">\n                                    <ngx-loading [show]=\"loading\"></ngx-loading>\n                                    <p class=\"text-center\" *ngIf=\"employeeSearchList && employeeSearchList.length === 0 && !loading\">Không có dữ liệu</p>\n                                    <p [class.text-linethrough]=\"e.transfered\" *ngFor=\"let e of employeeSearchList\" class=\"center-align-items\">\n                                        <label class=\"custom-control custom-checkbox mb-0 pr-3\">\n                                            <input type=\"checkbox\" [attr.disabled]=\"e.transfered ? '' : null\" [(ngModel)]=\"e.checkboxSelected\" [ngModelOptions]=\"{standalone: true}\"\n                                                class=\"custom-control-input\">\n                                            <span class=\"custom-control-indicator\"></span>\n                                        </label>\n                                        {{e.text}}\n                                    </p>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"position-relative\">\n                            <div class=\"group-btn-center-midle\">\n                                <div class=\"text-center\">\n                                    <i class=\"fa fa-angle-double-right pointer\" (click)=\"transferAllSelectedData()\" aria-hidden=\"true\"></i>\n                                </div>\n                                <div class=\"text-center\">\n                                    <i class=\"fa fa-angle-right mt-2 pointer\" (click)=\"transferSelectedData()\" aria-hidden=\"true\"></i>\n                                </div>\n                                <div class=\"text-center\">\n                                    <i class=\"fa fa-angle-left mt-2 pointer\" (click)=\"unTransferSelectedData()\" aria-hidden=\"true\"></i>\n                                </div>\n                                <div class=\"text-center\">\n                                    <i class=\"fa fa-angle-double-left mt-2 pointer\" (click)=\"unTransferAllSelectedData()\" aria-hidden=\"true\"></i>\n                                </div>\n                            </div>\n                        </div>\n                        <div>\n                            <div class=\"p-2 item-selector-grid--title\">Nhân viên đã chọn</div>\n                            <div class=\"p-2 item-selector-grid--item-list\" [class.is-invalid]=\"isSubmit && employeeSelectedList.length == 0\">\n                                <div class=\"item-selector-grid--item-list-selected\">\n                                    <p *ngFor=\"let e of employeeSelectedList\" class=\"center-align-items\">\n                                        <label class=\"custom-control custom-checkbox mb-0 pr-3\">\n                                            <input type=\"checkbox\" [(ngModel)]=\"e.checkboxSelected\" [ngModelOptions]=\"{standalone: true}\" class=\"custom-control-input\">\n                                            <span class=\"custom-control-indicator\"></span>\n                                        </label>\n                                        {{e.text}}\n                                    </p>\n                                </div>\n                            </div>\n                            <p class=\"text-err\" *ngIf=\"isSubmit && employeeSelectedList.length == 0\">Truờng này là bắt buộc\n                            </p>\n                        </div>\n                    </div>\n                    <div class=\"mt-3 form-group d-flex justify-content-between\">\n                        <div class=\"form-check\" *ngIf=\"userGroupCreate.role == userGroupRole.SuperAdmin\">\n                            <label class=\"custom-control custom-checkbox\">\n                                <input type=\"checkbox\" class=\"custom-control-input custom-control-input--disabled\" disabled checked>\n                                <span class=\"custom-control-indicator\"></span>\n                            </label>\n                            Nhóm này là Super Admin\n                        </div>\n                        <div class=\"form-check center-align-items\" *ngIf=\"userGroupCreate.role != userGroupRole.SuperAdmin\">\n                            <label class=\"custom-control custom-checkbox mb-0 pr-3\">\n                                <input type=\"checkbox\" class=\"custom-control-input custom-control-input--disabled\" (click)=\"setAdmin()\" [attr.disabled]=\"action != 'view' && groupRole == userGroupRole.SuperAdmin ? null : ''\" [checked]=\"userGroupCreate.role == userGroupRole.Admin\">\n                                <span class=\"custom-control-indicator\"></span>\n                            </label>\n                            Nhóm này là Admin\n                        </div>\n                        <div class=\"text-right\">\n                            <button type=\"button\" *ngIf=\"action != 'view'\" class=\"btn btn-primary\"\n                                (click)=\"createOrEditUserGroup(createUserGroupModal)\">Lưu</button>\n                            <button type=\"button\" *ngIf=\"action == 'view' && userGroupCreate.canBeModify && isPmsEditGroup\"\n                                class=\"btn btn-primary\" (click)=\"editUserGroup()\">Chỉnh sửa\n                            </button>\n                            <button type=\"button\" class=\"btn btn-secondary ml-2\" (click)=\"cancelPopup(createUserGroupModal)\"\n                                *ngIf=\"userGroupCreate.canBeModify && isPmsEditGroup\">Hủy</button>\n                        </div>\n                    </div>\n                </form>\n            </div>\n        </div>\n    </div>\n</div>\n<ngx-spinner bdColor=\"rgba(51, 51, 51, 0.7)\" size=\"medium\" color=\"#fff\" type=\"ball-clip-rotate-multiple\"></ngx-spinner>"

/***/ }),

/***/ "../../../../../src/app/layout/permission/permission-user-list/permission-user-list.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host /deep/ .b-pin-col-wrapper {\n  max-height: calc(100vh - 222px); }\n\n:host /deep/ .modal-content {\n  border: none; }\n\n:host /deep/ .custom-checkbox {\n  padding: .5rem;\n  margin-left: 2px;\n  margin-right: .25rem;\n  margin-top: 0; }\n\n.input--disabled {\n  background-color: white; }\n\n.modal-header {\n  background-color: #17a2b8;\n  color: white;\n  font-weight: bold; }\n  .modal-header span {\n    color: white; }\n\n.required::after {\n  content: '*';\n  color: red; }\n\n.item-selector-grid {\n  display: -ms-grid;\n  display: grid;\n  -ms-grid-columns: 1fr 50px 1fr;\n      grid-template-columns: 1fr 50px 1fr; }\n\n.item-selector-grid--title {\n  background-color: #17a2b8;\n  color: white; }\n\n.item-selector-grid--item-list {\n  height: 200px;\n  border: 1px solid #ebebeb;\n  border-top: none; }\n\n.item-selector-grid--search-box {\n  margin-left: -.5rem;\n  margin-right: -.5rem;\n  padding-left: .5rem;\n  border-bottom: 1px solid #ebebeb; }\n  .item-selector-grid--search-box input {\n    width: calc(100% - 16px);\n    border: none; }\n    .item-selector-grid--search-box input:focus {\n      outline: none; }\n\n.item-selector-grid--item-list-div {\n  overflow: scroll;\n  height: 166px; }\n  .item-selector-grid--item-list-div p {\n    margin-bottom: 0.25rem; }\n  .item-selector-grid--item-list-div::-webkit-scrollbar {\n    width: 6px;\n    height: 0px; }\n  .item-selector-grid--item-list-div::-webkit-scrollbar-thumb {\n    background: #c1c1c1; }\n\n.item-selector-grid--item-list-selected {\n  height: 191px;\n  overflow: auto; }\n  .item-selector-grid--item-list-selected p {\n    margin-bottom: 0.25rem; }\n  .item-selector-grid--item-list-selected::-webkit-scrollbar {\n    width: 6px;\n    height: 0px; }\n  .item-selector-grid--item-list-selected::-webkit-scrollbar-thumb {\n    background: #c1c1c1; }\n\n.item-selected {\n  background-color: #17a2b8;\n  color: white; }\n\n.group-btn-center-midle {\n  position: absolute;\n  top: 70px;\n  left: 0;\n  right: 0;\n  bottom: 1rem;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center; }\n\n.text-linethrough {\n  text-decoration: line-through; }\n\n.text-err {\n  color: red;\n  font-size: 90%; }\n\n.text-hyperlink {\n  color: #17a2b8;\n  text-decoration: none;\n  background-color: transparent;\n  cursor: pointer; }\n\n.dropdown-toggle::after {\n  content: none; }\n\n.th-stt-pad {\n  padding-left: 1rem; }\n\n.stt-checkbox--mar {\n  margin-left: 0;\n  margin-right: 0; }\n\n.td-stt--pad {\n  padding-left: 0.4rem; }\n\n.table-border {\n  border: 1px solid rgba(0, 0, 0, 0.075); }\n\n.w-60 {\n  width: 4rem; }\n\n.table-fixed {\n  table-layout: fixed; }\n\n.table-td--wrap {\n  word-wrap: break-word;\n  overflow-wrap: break-word; }\n\n.mw-12rem {\n  max-width: 12rem; }\n\n.text-ellipsis {\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  overflow: hidden; }\n\n.input-check--bg-defalut {\n  background-color: #17a2b8 !important; }\n\n.custom-control-input--disabled:disabled:checked ~ .custom-control-indicator {\n  background-color: #17a2b8 !important;\n  opacity: .5; }\n\n.center-align-items {\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/layout/permission/permission-user-list/permission-user-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PermissionUserListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services__ = __webpack_require__("../../../../../src/app/shared/services/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_models__ = __webpack_require__("../../../../../src/app/shared/models/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__router_animations__ = __webpack_require__("../../../../../src/app/router.animations.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_models_user_user_group_filter__ = __webpack_require__("../../../../../src/app/shared/models/user/user-group-filter.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_models_api_response_user_user_group_response__ = __webpack_require__("../../../../../src/app/shared/models/api-response/user/user-group-response.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_configs_common_config__ = __webpack_require__("../../../../../src/app/shared/configs/common.config.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__node_modules_ngx_spinner__ = __webpack_require__("../../../../ngx-spinner/ngx-spinner.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__node_modules_ngx_spinner___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__node_modules_ngx_spinner__);
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







var PermissionUserListComponent = /** @class */ (function () {
    function PermissionUserListComponent(userGroupService, alertService, dataService, confirmationService, spinner, sessionService) {
        this.userGroupService = userGroupService;
        this.alertService = alertService;
        this.dataService = dataService;
        this.confirmationService = confirmationService;
        this.spinner = spinner;
        this.sessionService = sessionService;
        this.userGroupRole = __WEBPACK_IMPORTED_MODULE_7__shared_configs_common_config__["b" /* USER_GROUP_ROLE */];
        this.searchTerm$ = new __WEBPACK_IMPORTED_MODULE_2_rxjs__["BehaviorSubject"]('');
        this.filterModel = new __WEBPACK_IMPORTED_MODULE_5__shared_models_user_user_group_filter__["a" /* UserGroupFilter */]();
        this.pagedResult = new __WEBPACK_IMPORTED_MODULE_3__shared_models__["g" /* PagedResult */]();
        this.employeeSelectedList = [];
        this.userGroupCreate = new __WEBPACK_IMPORTED_MODULE_6__shared_models_api_response_user_user_group_response__["a" /* UserGroupResponse */]();
        this.employeeSearchTerm$ = new __WEBPACK_IMPORTED_MODULE_2_rxjs__["BehaviorSubject"]('');
        this.employeeViewSearchTerm$ = new __WEBPACK_IMPORTED_MODULE_2_rxjs__["BehaviorSubject"]('');
        this.isSubmit = false;
        this.action = '';
    }
    Object.defineProperty(PermissionUserListComponent.prototype, "checkboxSeclectAll", {
        get: function () {
            if (this.pagedResult && this.pagedResult.items && this.pagedResult.items.length > 0) {
                if (this.pagedResult.items.every(function (i) { return i.checkboxSelected; })) {
                    return true;
                }
                else {
                    return false;
                }
            }
            else {
                return false;
            }
        },
        set: function (value) {
            this.checkboxSeclectAll = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PermissionUserListComponent.prototype, "isPmsViewGroupList", {
        get: function () {
            // xem danh sách nhóm người dùng
            if (this.listPermission && this.listPermission.length > 0) {
                return this.listPermission.filter(function (i) { return i.functionWeb.no === 'PermissionViewUserGroupInformation'; }).length > 0 ? true : false;
            }
            else {
                return false;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PermissionUserListComponent.prototype, "isPmsAddGroup", {
        get: function () {
            // thêm nhóm người dùng
            if (this.listPermission && this.listPermission.length > 0) {
                return this.listPermission.filter(function (i) { return i.functionWeb.no === 'PermissionAddUserGroup'; }).length > 0 ? true : false;
            }
            else {
                return false;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PermissionUserListComponent.prototype, "isPmsEditGroup", {
        get: function () {
            // sửa nhóm người dùng
            if (this.listPermission && this.listPermission.length > 0) {
                return this.listPermission.filter(function (i) { return i.functionWeb.no === 'PermissionEditUserGroup'; }).length > 0 ? true : false;
            }
            else {
                return false;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PermissionUserListComponent.prototype, "isPmsDeleteGroup", {
        get: function () {
            // xóa nhóm người dùng
            if (this.listPermission && this.listPermission.length > 0) {
                return this.listPermission.filter(function (i) { return i.functionWeb.no === 'PermissionDeleteUserGroup'; }).length > 0 ? true : false;
            }
            else {
                return false;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PermissionUserListComponent.prototype, "isPmsPermissionGroup", {
        get: function () {
            // phân quyền nhóm người dùng
            if (this.listPermission && this.listPermission.length > 0) {
                return this.listPermission.filter(function (i) { return i.functionWeb.no === 'PermissionSetUserGroupPermissions'; }).length > 0 ? true : false;
            }
            else {
                return false;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PermissionUserListComponent.prototype, "userLoginName", {
        get: function () {
            if (this.sessionService.currentSession) {
                return this.sessionService.currentSession.userName.toLowerCase();
            }
            else {
                return '';
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PermissionUserListComponent.prototype, "groupRole", {
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
    PermissionUserListComponent.prototype.ngOnInit = function () {
        var _this = this;
        // this.spinner.show();
        this.listPermission = this.sessionService.getSession().userGroupFunctions;
        this.branches = this.dataService.getBranches();
        this.searchTerm$.debounceTime(__WEBPACK_IMPORTED_MODULE_7__shared_configs_common_config__["a" /* COMMON_CONSTANTS */].SearchDelayTimeInMs)
            .distinctUntilChanged()
            .subscribe(function (search) { return _this.refresh(); });
        this.getEmployeeByBranch(1);
        this.employeeSearchTerm$.debounceTime(__WEBPACK_IMPORTED_MODULE_7__shared_configs_common_config__["a" /* COMMON_CONSTANTS */].SearchDelayTimeInMs)
            .distinctUntilChanged()
            .subscribe(function (search) {
            _this.filterEmployee();
        });
        this.employeeViewSearchTerm$.debounceTime(__WEBPACK_IMPORTED_MODULE_7__shared_configs_common_config__["a" /* COMMON_CONSTANTS */].SearchDelayTimeInMs)
            .distinctUntilChanged()
            .subscribe(function (search) {
            _this.filterViewEmployee();
        });
        this.userGroupCreate.branch.id = this.sessionService.branchId ? this.sessionService.branchId : 1;
    };
    PermissionUserListComponent.prototype.onSelectAll = function (value) {
        this.pagedResult.items.forEach(function (x) { return (x.checkboxSelected = value && x.canBeModify == true); });
    };
    PermissionUserListComponent.prototype.filterViewEmployee = function () {
        var _this = this;
        if (this.userGroupCreate && this.userGroupCreate.employees && this.userGroupCreate.employees.length > 0) {
            this.userGroupMemberViewList = this.userGroupCreate.employees.filter(function (i) { return i.name.toLowerCase().includes(_this.employeeViewSearchTerm$.value.toLowerCase().trim()); });
        }
    };
    PermissionUserListComponent.prototype.filterEmployee = function () {
        var _this = this;
        if (this.employeeList && this.employeeList.length > 0) {
            this.employeeSearchList = this.employeeList.filter(function (i) { return i.text.toLowerCase().includes(_this.employeeSearchTerm$.value.toLowerCase().trim()); });
        }
    };
    PermissionUserListComponent.prototype.getEmployeeByBranch = function (branchId) {
        var _this = this;
        this.loading = true;
        this.employeeList = [];
        this.employeeSearchList = [];
        this.dataService.getEmployeeByBranch(branchId).subscribe(function (data) {
            _this.loading = false;
            _this.employeeList = data;
            _this.employeeSearchList = data;
        }, function (err) {
            _this.spinner.hide();
        });
    };
    PermissionUserListComponent.prototype.rerender = function (pagedResult) {
        var _this = this;
        // this.checkboxSeclectAll = false;
        this.pagedResult = pagedResult;
        // this.dtTrigger.next();
        setTimeout(function () {
            if (_this.tablePin && _this.tablePin.nativeElement) {
                var table = _this.tablePin.nativeElement;
                var scrollBar = _this.fakeScrollBar.nativeElement;
                scrollBar.style.width = table.offsetWidth + 'px';
            }
        });
    };
    PermissionUserListComponent.prototype.pagedResultChange = function (pagedResult) {
        this.refresh();
    };
    PermissionUserListComponent.prototype.refresh = function (displayAlert) {
        var _this = this;
        if (displayAlert === void 0) { displayAlert = false; }
        this.spinner.show();
        this.userGroupService
            .filter(this.searchTerm$.value, this.filterModel, this.pagedResult.currentPage, this.pagedResult.pageSize)
            .subscribe(function (result) {
            _this.rerender(result);
            if (displayAlert) {
                _this.alertService.success('Dữ liệu đã được cập nhật mới nhất!');
            }
            _this.spinner.hide();
        }, function (err) {
            _this.spinner.hide();
        });
    };
    PermissionUserListComponent.prototype.syncScroll1 = function (wrap1, wrap2) {
        wrap2.scrollLeft = wrap1.scrollLeft;
    };
    PermissionUserListComponent.prototype.syncScroll2 = function (wrap1, wrap2) {
        wrap1.scrollLeft = wrap2.scrollLeft;
    };
    PermissionUserListComponent.prototype.transferAllSelectedData = function () {
        var _this = this;
        this.employeeList.forEach(function (i) {
            i.checkboxSelected = false;
            i.transfered = true;
            var item = JSON.parse(JSON.stringify(i));
            _this.employeeSelectedList.push(item);
        });
    };
    PermissionUserListComponent.prototype.transferSelectedData = function () {
        var _this = this;
        var selectedItem = this.employeeList.filter(function (i) { return i.checkboxSelected; });
        selectedItem.forEach(function (i) {
            i.checkboxSelected = false;
            i.transfered = true;
            var item = JSON.parse(JSON.stringify(i));
            _this.employeeSelectedList.push(item);
        });
    };
    PermissionUserListComponent.prototype.unTransferSelectedData = function () {
        var _this = this;
        var selectedItem = this.employeeSelectedList.filter(function (i) { return i.checkboxSelected; });
        selectedItem.forEach(function (i) {
            var selectedIdx = _this.employeeSelectedList.findIndex(function (e) { return e.id === i.id; });
            _this.employeeSelectedList.splice(selectedIdx, 1);
            _this.employeeList.find(function (e) { return e.id === i.id; }).transfered = false;
        });
    };
    PermissionUserListComponent.prototype.unTransferAllSelectedData = function () {
        var _this = this;
        var selectedItem = this.employeeSelectedList.filter(function (i) { return i; });
        selectedItem.forEach(function (i) {
            var selectedIdx = _this.employeeSelectedList.findIndex(function (e) { return e.id === i.id; });
            _this.employeeSelectedList.splice(selectedIdx, 1);
            if (_this.employeeList.find(function (e) { return e.id === i.id; })) {
                _this.employeeList.find(function (e) { return e.id === i.id; }).transfered = false;
            }
        });
    };
    PermissionUserListComponent.prototype.createOrEditUserGroup = function (popup) {
        var _this = this;
        this.isSubmit = true;
        if (this.userGroupCreate.name && this.employeeSelectedList && this.employeeSelectedList.length > 0 && this.userGroupCreate.name.trim().length <= 50 && (this.userGroupCreate.description ? this.userGroupCreate.description.trim().length <= 200 : true)) {
            if (this.userGroupCreate.description && this.userGroupCreate.description.length <= 250) {
                this.userGroupCreate.employees = this.employeeSelectedList.map(function (i) {
                    return {
                        id: i.id
                    };
                });
                // this.userGroupCreate.branch = {id : this.userGroupCreate.branch};
                this.spinner.show();
                this.userGroupService.createOrEdit(this.userGroupCreate).subscribe(function (sucess) {
                    popup.hide();
                    _this.refresh();
                    var mess = _this.userGroupCreate.id ? 'Cập nhật nhóm người dùng thành công!' : 'Tạo nhóm người dùng thành công!';
                    _this.alertService.success(mess);
                }, function (err) {
                    _this.spinner.hide();
                    popup.hide();
                    var error = JSON.parse(err.text());
                    if (error.error_code == 'NAME_EXIST') {
                        _this.alertService.error('Tên nhóm phân quyền đã tồn tại, bạn vui lòng chọn tên khác');
                    }
                    else {
                        var mess = _this.userGroupCreate.id ? 'Cập nhật nhóm người dùng thất bại!' : 'Tạo nhóm người dùng thất bại!';
                        _this.alertService.error(mess);
                    }
                });
            }
            else {
                this.userGroupCreate.employees = this.employeeSelectedList.map(function (i) {
                    return {
                        id: i.id
                    };
                });
                this.spinner.show();
                this.userGroupService.createOrEdit(this.userGroupCreate).subscribe(function (sucess) {
                    popup.hide();
                    _this.refresh();
                    var mess = _this.userGroupCreate.id ? 'Cập nhật nhóm người dùng thành công!' : 'Tạo nhóm người dùng thành công!';
                    _this.alertService.success(mess);
                }, function (err) {
                    _this.spinner.hide();
                    popup.hide();
                    var error = JSON.parse(err.text());
                    if (error.error_code == 'NAME_EXIST') {
                        _this.alertService.error('Tên nhóm phân quyền đã tồn tại, bạn vui lòng chọn tên khác');
                    }
                    else {
                        var mess = _this.userGroupCreate.id ? 'Cập nhật nhóm người dùng thất bại!' : 'Tạo nhóm người dùng thất bại!';
                        _this.alertService.error(mess);
                    }
                });
            }
        }
    };
    PermissionUserListComponent.prototype.cancelPopup = function (popup) {
        this.isSubmit = false;
        this.userGroupCreate.name = '';
        this.userGroupCreate.description = '';
        this.unTransferAllSelectedData();
        this.employeeSearchList.forEach(function (i) { return i.checkboxSelected = false; });
        // this.refresh();
        popup.hide();
    };
    PermissionUserListComponent.prototype.modalHide = function () {
        this.isSubmit = false;
        this.userGroupCreate.name = '';
        this.userGroupCreate.description = '';
        this.unTransferAllSelectedData();
        this.employeeSearchList.forEach(function (i) { return i.checkboxSelected = false; });
        // this.refresh();
    };
    PermissionUserListComponent.prototype.openPopupCreate = function (modal) {
        this.action = 'create';
        this.userGroupCreate = new __WEBPACK_IMPORTED_MODULE_6__shared_models_api_response_user_user_group_response__["a" /* UserGroupResponse */]();
        modal.show();
    };
    PermissionUserListComponent.prototype.viewUserGroup = function (id, modal) {
        var _this = this;
        this.spinner.show();
        this.userGroupService.view(id).subscribe(function (data) {
            _this.action = 'view';
            _this.userGroupCreate = data;
            _this.userGroupMemberViewList = _this.userGroupCreate.employees;
            _this.spinner.hide();
            modal.show();
        }, function (err) {
            _this.spinner.hide();
        });
    };
    PermissionUserListComponent.prototype.editUserGroup = function (id, modal) {
        var _this = this;
        this.spinner.show();
        this.userGroupService.view(id ? id : this.userGroupCreate.id).subscribe(function (data) {
            _this.action = 'edit';
            _this.userGroupCreate = data;
            _this.spinner.hide();
            if (modal) {
                modal.show();
            }
            _this.employeeSelectedList = _this.userGroupCreate.employees.map(function (i) {
                return {
                    id: i.id,
                    text: i.name,
                    checkboxSelected: false
                };
            });
            _this.employeeSelectedList.forEach(function (i) {
                if (_this.employeeList.find(function (e) { return e.id === i.id; })) {
                    _this.employeeList.find(function (e) { return e.id === i.id; }).transfered = true;
                }
            });
        }, function (err) {
            _this.spinner.hide();
        });
    };
    PermissionUserListComponent.prototype.delete = function (userGroupId) {
        var _this = this;
        this.confirmationService.confirm('Bạn có chắc chắn muốn xóa nhóm người dùng này?', function () {
            _this.userGroupService.delete(userGroupId).subscribe(function (_) {
                _this.alertService.success('Đã xóa nhóm người dùng!');
                _this.refresh();
            });
        });
    };
    PermissionUserListComponent.prototype.multiDelete = function () {
        var _this = this;
        var deleteIds = this.pagedResult.items
            .filter(function (x) { return x.checkboxSelected; })
            .map(function (x) { return +x.id; });
        if (deleteIds.length === 0) {
            this.alertService.error('Bạn phải chọn ít nhất một đối tượng để xóa!');
        }
        else {
            this.confirmationService.confirm('Bạn có chắc chắn muốn xóa những nhóm người dùng này?', function () {
                _this.userGroupService.multiDelete(deleteIds).subscribe(function (_) {
                    _this.alertService.success('Đã xóa những nhóm người dùng đã chọn!');
                    _this.refresh();
                });
            });
        }
    };
    PermissionUserListComponent.prototype.getPmsEditGroupByRole = function (role) {
        if (this.groupRole === __WEBPACK_IMPORTED_MODULE_7__shared_configs_common_config__["b" /* USER_GROUP_ROLE */].SuperAdmin || this.groupRole === __WEBPACK_IMPORTED_MODULE_7__shared_configs_common_config__["b" /* USER_GROUP_ROLE */].Admin) {
            return false;
        }
        else {
            return role === __WEBPACK_IMPORTED_MODULE_7__shared_configs_common_config__["b" /* USER_GROUP_ROLE */].SuperAdmin || role === __WEBPACK_IMPORTED_MODULE_7__shared_configs_common_config__["b" /* USER_GROUP_ROLE */].Admin ? true : this.isPmsEditGroup ? false : true;
        }
    };
    PermissionUserListComponent.prototype.setAdmin = function () {
        this.userGroupCreate.role = this.userGroupCreate.role === __WEBPACK_IMPORTED_MODULE_7__shared_configs_common_config__["b" /* USER_GROUP_ROLE */].Admin ? __WEBPACK_IMPORTED_MODULE_7__shared_configs_common_config__["b" /* USER_GROUP_ROLE */].Normal : __WEBPACK_IMPORTED_MODULE_7__shared_configs_common_config__["b" /* USER_GROUP_ROLE */].Admin;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('tablePin'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], PermissionUserListComponent.prototype, "tablePin", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('fakeScrollBar'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], PermissionUserListComponent.prototype, "fakeScrollBar", void 0);
    PermissionUserListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-permission-user-list',
            template: __webpack_require__("../../../../../src/app/layout/permission/permission-user-list/permission-user-list.component.html"),
            styles: [__webpack_require__("../../../../../src/app/layout/permission/permission-user-list/permission-user-list.component.scss")],
            animations: [Object(__WEBPACK_IMPORTED_MODULE_4__router_animations__["a" /* routerTransition */])()]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_services__["o" /* UserGroupService */],
            __WEBPACK_IMPORTED_MODULE_1__shared_services__["b" /* AlertService */],
            __WEBPACK_IMPORTED_MODULE_1__shared_services__["j" /* DataService */],
            __WEBPACK_IMPORTED_MODULE_1__shared_services__["g" /* ConfirmationService */],
            __WEBPACK_IMPORTED_MODULE_8__node_modules_ngx_spinner__["NgxSpinnerService"],
            __WEBPACK_IMPORTED_MODULE_1__shared_services__["n" /* SessionService */]])
    ], PermissionUserListComponent);
    return PermissionUserListComponent;
}());



/***/ }),

/***/ "../../../../../src/app/layout/permission/permission.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  permission works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/layout/permission/permission.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/layout/permission/permission.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PermissionComponent; });
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

var PermissionComponent = /** @class */ (function () {
    function PermissionComponent() {
    }
    PermissionComponent.prototype.ngOnInit = function () {
    };
    PermissionComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-permission',
            template: __webpack_require__("../../../../../src/app/layout/permission/permission.component.html"),
            styles: [__webpack_require__("../../../../../src/app/layout/permission/permission.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], PermissionComponent);
    return PermissionComponent;
}());



/***/ }),

/***/ "../../../../../src/app/layout/permission/permission.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PermissionModule", function() { return PermissionModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__permission_routing_module__ = __webpack_require__("../../../../../src/app/layout/permission/permission-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__permission_component__ = __webpack_require__("../../../../../src/app/layout/permission/permission.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__permission_user_list_permission_user_list_component__ = __webpack_require__("../../../../../src/app/layout/permission/permission-user-list/permission-user-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_services__ = __webpack_require__("../../../../../src/app/shared/services/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var PermissionModule = /** @class */ (function () {
    function PermissionModule() {
    }
    PermissionModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_2__permission_routing_module__["a" /* PermissionRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_5__shared_shared_module__["a" /* SharedModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_3__permission_component__["a" /* PermissionComponent */], __WEBPACK_IMPORTED_MODULE_4__permission_user_list_permission_user_list_component__["a" /* PermissionUserListComponent */]],
            providers: [__WEBPACK_IMPORTED_MODULE_6__shared_services__["o" /* UserGroupService */]]
        })
    ], PermissionModule);
    return PermissionModule;
}());



/***/ }),

/***/ "../../../../../src/app/shared/models/api-response/user/user-group-response.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserGroupResponse; });
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

var UserGroupResponse = /** @class */ (function (_super) {
    __extends(UserGroupResponse, _super);
    function UserGroupResponse() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.branch = { id: 1 };
        return _this;
        // isManager = false;
    }
    return UserGroupResponse;
}(__WEBPACK_IMPORTED_MODULE_0__checkbox_selected_model__["a" /* CheckboxSelection */]));



/***/ }),

/***/ "../../../../../src/app/shared/models/user/user-group-filter.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserGroupFilter; });
var UserGroupFilter = /** @class */ (function () {
    function UserGroupFilter() {
        this.search = null;
    }
    return UserGroupFilter;
}());



/***/ })

});
//# sourceMappingURL=permission.module.chunk.js.map