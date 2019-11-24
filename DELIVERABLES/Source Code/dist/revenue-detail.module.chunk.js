webpackJsonp(["revenue-detail.module"],{

/***/ "../../../../../src/app/layout/revenue-detail/revenue-detail-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RevenueDetailRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__revenue_detail_component__ = __webpack_require__("../../../../../src/app/layout/revenue-detail/revenue-detail.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: 'detail/:id',
        component: __WEBPACK_IMPORTED_MODULE_2__revenue_detail_component__["a" /* RevenueDetailComponent */]
    }
];
var RevenueDetailRoutingModule = /** @class */ (function () {
    function RevenueDetailRoutingModule() {
    }
    RevenueDetailRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"]]
        })
    ], RevenueDetailRoutingModule);
    return RevenueDetailRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/layout/revenue-detail/revenue-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<div [@routerTransition]>\n    <div class=\"card form-group\">\n        <h6>\n            <strong class=\"title-color\">THÔNG TIN KHÁCH HÀNG</strong>\n        </h6>\n        <div class=\"row form-group\">\n            <div class=\"col-md-4 border-right\">\n                <p>\n                    <strong>Mã khách hàng:</strong> {{currentCustomer.number}}\n                </p>\n                <p>\n                    <strong>Tên khách hàng:</strong> {{currentCustomer.name}}\n                </p>\n                <p>\n                    <strong>Mô tả:</strong> {{currentCustomer.desc}}\n                </p>\n                <p>\n                    <strong>Địa chỉ:</strong> {{currentCustomer.address}}\n                </p>\n            </div>\n            <div class=\"col-md-4 border-right\">\n                <p>\n                    <strong>Loại khách hàng:</strong> {{currentCustomer.customerType === 'Personal' ? 'Cá nhân' : 'Công ty'}}\n                </p>\n                <p>\n                    <strong>Nhóm khách hàng:</strong> {{currentCustomer.customerGroup}}\n                </p>\n                <p>\n                    <strong>Tình trạng:</strong> {{currentCustomer.check ? 'Hoạt động' : 'Không hoạt động'}}\n                </p>\n            </div>\n            <div class=\"col-md-4\">\n                <p>\n                    <strong>Hạn mức tín dụng:</strong> {{currentCustomer.creditLimit | vnCurrency}}\n                </p>\n                <p>\n                    <strong>Công nợ:</strong> {{currentCustomer.owing | vnCurrency}}\n                </p>\n                <p>\n                    <strong>Tín dụng còn lại:</strong> {{currentCustomer.creditLimit - currentCustomer.owing | vnCurrency}}\n                </p>\n            </div>\n        </div>\n    </div>\n    <div class=\"card\">\n        <div class=\"d-flex justify-content-between form-group\">\n            <h6 class=\"revenue-title\">\n                <strong class=\"title-color\">THÔNG TIN CHI TIẾT CÔNG NỢ</strong>\n            </h6>\n                <div class=\"d-flex\">\n                    <div class=\"select_box mt-2  mr-2\">Từ</div>\n                    <div class=\"input-group  calendarInput  mr-3\">\n                        <owl-date-time [(ngModel)]=\"startDate\" [dateFormat]=\"datePickerConfig.dateFormat\" [placeHolder]=\"datePickerConfig.datePlaceHolder\" [locale]=\"datePickerConfig.vi\"\n                        pickerType=\"calendar\" [type]=\"datePickerConfig.calendarType\">\n                        </owl-date-time>\n                        <span class=\"input-group-addon\">\n                            <i class=\"fa fa-calendar\"></i>\n                        </span>\n                    </div>\n                    <div class=\"select_box mt-2\"> đến</div>\n                    <div class=\"input-group  calendarInput ml-3\">\n                        <owl-date-time [(ngModel)]=\"endDate\" [dateFormat]=\"datePickerConfig.dateFormat\" [placeHolder]=\"datePickerConfig.datePlaceHolder\" [locale]=\"datePickerConfig.vi\"\n                            pickerType=\"calendar\" [type]=\"datePickerConfig.calendarType\">\n                        </owl-date-time>\n                        <span class=\"input-group-addon\">\n                            <i class=\"fa fa-calendar\"></i>\n                        </span>\n                    </div>\n                    <button type=\"submit\" class=\"btn btn-primary ml-3\" (click)=\"search()\">Xem</button>\n                </div>\n        </div>\n        <div class=\"table-responsive\">\n            <table class=\"table table-bordered\">\n                <thead class=\"text-nowrap\">\n                    <tr class=\"grid-header-custom\">\n                        <th>Ngày ghi sổ</th>\n                        <th>Chứng từ</th>\n                        <th>Ngày chứng từ</th>\n                        <th>Diễn giải</th>\n                        <th>Công nợ tăng</th>\n                        <th>Công nợ giảm</th>\n                        <th>Tín dụng còn lại</th>\n                    </tr>\n                    <tr>\n                        <th colspan=\"6\" class=\"text-right\">Số dư đầu kỳ:</th>\n                        <th *ngIf=\"pagedResult?.items?.length > 0\">{{pagedResult.items[0].startBalance | vnNumber}}</th>\n                    </tr>\n                </thead>\n                <tbody>\n                    <tr *ngFor=\"let debt of debtList\">\n                        <td>{{debt.createdDate}}</td>\n                        <td *ngIf=\"debt.documentNo.startsWith('PG'); else ptContent\" class=\"link-custom\" [routerLink]=\"['/delivery/detail', customerId, debt.documentNo]\">{{debt.documentNo}}</td>\n                        <ng-template #ptContent>\n                            <td>{{debt.documentNo}}</td>\n                        </ng-template>\n                        <td>{{debt.documentDate}}</td>\n                        <td>{{debt.documentDesc}}</td>\n                        <td>{{debt.debtIncrease | vnNumber}}</td>\n                        <td>{{debt.debtDecrease | vnNumber}}</td>\n                        <td>{{debt.remainingCredits | vnNumber}}</td>\n                    </tr>\n                </tbody>\n                <tfoot>\n                    <tr>\n                        <th colspan=\"6\" class=\"text-right\">Số dư cuối kỳ:</th>\n                        <th *ngIf=\"pagedResult?.items?.length > 0\">{{pagedResult.items[0].endBalance | vnNumber}}</th>\n                    </tr>\n                </tfoot>\n            </table>\n        </div>\n        <app-pagination [pagedResult]=\"pagedResult\" (pagedResultChange)=\"pagedResultChange($event)\"></app-pagination>\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/layout/revenue-detail/revenue-detail.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".card {\n  padding: 15px; }\n\n.revenue-title {\n  margin-top: 11px; }\n\n.title-color {\n  color: #346699; }\n\n.calendarInput {\n  width: 170px;\n  margin-left: 10px !important; }\n\n.link-custom {\n  text-decoration: underline;\n  color: #17a2b8;\n  cursor: pointer; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/layout/revenue-detail/revenue-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RevenueDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__router_animations__ = __webpack_require__("../../../../../src/app/router.animations.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_configs_datepicker_config__ = __webpack_require__("../../../../../src/app/shared/configs/datepicker.config.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_services_window_service__ = __webpack_require__("../../../../../src/app/shared/services/window.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_models__ = __webpack_require__("../../../../../src/app/shared/models/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_moment__ = __webpack_require__("../../../../moment/moment.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_helpers_datetime_convert_helper__ = __webpack_require__("../../../../../src/app/shared/helpers/datetime-convert-helper.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shared_services__ = __webpack_require__("../../../../../src/app/shared/services/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var RevenueDetailComponent = /** @class */ (function () {
    function RevenueDetailComponent(route, windowService, customerService) {
        this.route = route;
        this.windowService = windowService;
        this.customerService = customerService;
        this.datePickerConfig = __WEBPACK_IMPORTED_MODULE_2__shared_configs_datepicker_config__["a" /* DATETIME_PICKER_CONFIG */];
        this.pagedResult = new __WEBPACK_IMPORTED_MODULE_5__shared_models__["g" /* PagedResult */]();
        this.startDate = __WEBPACK_IMPORTED_MODULE_7__shared_helpers_datetime_convert_helper__["a" /* default */].fromTimestampToDtObject(__WEBPACK_IMPORTED_MODULE_6_moment__().startOf('year').valueOf());
        this.endDate = new Date();
        this.currentCustomer = new __WEBPACK_IMPORTED_MODULE_5__shared_models__["e" /* CustomerModel */]();
    }
    RevenueDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (data) {
            _this.customerId = data.id;
            _this.customerService.view(_this.customerId).subscribe(function (customer) {
                _this.currentCustomer = customer;
            });
            _this.windowService
                .getDebtDetail(_this.customerId, 0, 10, __WEBPACK_IMPORTED_MODULE_6_moment__(_this.startDate).valueOf(), __WEBPACK_IMPORTED_MODULE_6_moment__(_this.endDate).valueOf())
                .subscribe(function (debt) {
                _this.pagedResult = debt;
                _this.refresh();
            });
        });
    };
    RevenueDetailComponent.prototype.refresh = function () {
        var _this = this;
        this.debtList = [];
        this.pagedResult.items[0].documentEntrys.forEach(function (e) {
            _this.debtList.push(_this.windowService.toDebtDetailModel(e, _this.pagedResult.items[0].startBalance));
        });
    };
    RevenueDetailComponent.prototype.pagedResultChange = function (pagedData) {
        var _this = this;
        this.windowService
            .getDebtDetail(this.customerId, pagedData.currentPage, pagedData.pageSize, __WEBPACK_IMPORTED_MODULE_6_moment__(this.startDate).valueOf(), __WEBPACK_IMPORTED_MODULE_6_moment__(this.endDate).valueOf())
            .subscribe(function (result) {
            _this.pagedResult = result;
            _this.refresh();
        });
    };
    RevenueDetailComponent.prototype.search = function () {
        var _this = this;
        this.windowService
            .getDebtDetail(this.customerId, Number(this.pagedResult.currentPage), Number(this.pagedResult.pageSize), __WEBPACK_IMPORTED_MODULE_6_moment__(this.startDate).valueOf(), __WEBPACK_IMPORTED_MODULE_6_moment__(this.endDate).valueOf())
            .subscribe(function (result) {
            _this.pagedResult = result;
            _this.refresh();
        });
    };
    RevenueDetailComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-revenue-detail',
            template: __webpack_require__("../../../../../src/app/layout/revenue-detail/revenue-detail.component.html"),
            styles: [__webpack_require__("../../../../../src/app/layout/revenue-detail/revenue-detail.component.scss")],
            animations: [Object(__WEBPACK_IMPORTED_MODULE_1__router_animations__["a" /* routerTransition */])()]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_router__["ActivatedRoute"],
            __WEBPACK_IMPORTED_MODULE_4__shared_services_window_service__["a" /* WindowService */],
            __WEBPACK_IMPORTED_MODULE_8__shared_services__["i" /* CustomerService */]])
    ], RevenueDetailComponent);
    return RevenueDetailComponent;
}());



/***/ }),

/***/ "../../../../../src/app/layout/revenue-detail/revenue-detail.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RevenueDetailModule", function() { return RevenueDetailModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__revenue_detail_routing_module__ = __webpack_require__("../../../../../src/app/layout/revenue-detail/revenue-detail-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__revenue_detail_component__ = __webpack_require__("../../../../../src/app/layout/revenue-detail/revenue-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var RevenueDetailModule = /** @class */ (function () {
    function RevenueDetailModule() {
    }
    RevenueDetailModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_2__revenue_detail_routing_module__["a" /* RevenueDetailRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__["a" /* SharedModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_3__revenue_detail_component__["a" /* RevenueDetailComponent */]]
        })
    ], RevenueDetailModule);
    return RevenueDetailModule;
}());



/***/ })

});
//# sourceMappingURL=revenue-detail.module.chunk.js.map