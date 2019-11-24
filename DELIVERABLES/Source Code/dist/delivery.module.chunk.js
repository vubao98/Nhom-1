webpackJsonp(["delivery.module"],{

/***/ "../../../../../src/app/layout/delivery/delivery-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DeliveryRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__delivery_component__ = __webpack_require__("../../../../../src/app/layout/delivery/delivery.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: 'detail/:id',
        component: __WEBPACK_IMPORTED_MODULE_2__delivery_component__["a" /* DeliveryComponent */]
    },
    {
        path: 'detail/:id/:invoiceNo',
        component: __WEBPACK_IMPORTED_MODULE_2__delivery_component__["a" /* DeliveryComponent */]
    }
];
var DeliveryRoutingModule = /** @class */ (function () {
    function DeliveryRoutingModule() {
    }
    DeliveryRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"]]
        })
    ], DeliveryRoutingModule);
    return DeliveryRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/layout/delivery/delivery.component.html":
/***/ (function(module, exports) {

module.exports = "<div [@routerTransition]>\n    <div class=\"card form-group\">\n        <h6>\n            <strong class=\"title-color\">THÔNG TIN KHÁCH HÀNG</strong>\n        </h6>\n        <div class=\"row form-group\">\n            <div class=\"col-md-4 border-right\">\n                <p>\n                    <strong>Mã khách hàng:</strong> {{currentCustomer.number}}\n                </p>\n                <p>\n                    <strong>Tên khách hàng:</strong> {{currentCustomer.name}}\n                </p>\n                <p>\n                    <strong>Mô tả:</strong> {{currentCustomer.desc}}\n                </p>\n                <p>\n                    <strong>Địa chỉ:</strong> {{currentCustomer.address}}\n                </p>\n            </div>\n            <div class=\"col-md-4 border-right\">\n                <p>\n                    <strong>Loại khách hàng:</strong> {{currentCustomer.customerType === 'Personal' ? 'Cá nhân' : 'Công ty'}}\n                </p>\n                <p>\n                    <strong>Nhóm khách hàng:</strong> {{currentCustomer.customerGroup}}\n                </p>\n                <p>\n                    <strong>Tình trạng:</strong> {{currentCustomer.check ? 'Hoạt động' : 'Không hoạt động'}}\n                </p>\n            </div>\n            <div class=\"col-md-4\">\n                <p>\n                    <strong>Hạn mức tín dụng:</strong> {{currentCustomer.creditLimit | vnCurrency}}\n                </p>\n                <p>\n                    <strong>Công nợ:</strong> {{currentCustomer.owing | vnCurrency}}\n                </p>\n                <p>\n                    <strong>Tín dụng còn lại:</strong> {{currentCustomer.creditLimit - currentCustomer.owing | vnCurrency}}\n                </p>\n                <p class=\"text-center\" [routerLink]=\"['/revenue/detail', currentCustomer.id]\">\n                    <span class=\"link-custom\">Xem công nợ >></span>\n                </p>\n            </div>\n        </div>\n    </div>\n    <div class=\"card\">\n        <h6>\n            <strong class=\"title-color\">DANH SÁCH PHIẾU GIAO</strong>\n        </h6>\n        <div class=\"d-flex search-bar form-group\">\n            <strong class=\"search-bar__title\">Tìm kiếm theo:</strong>\n            <div>\n                <label class=\"form-label\">Sản phẩm</label>\n                <span class=\"custom-dropdown mx-sm-4\">\n                    <select class=\"form-control\" [(ngModel)]=\"productFilter\" (change)=\"filterDeliveryReceipt()\">\n                        <option value=\"\">--Lựa chọn--</option>\n                        <option *ngFor=\"let p of products\" [value]=\"p.id\">{{p.text}}</option>\n                    </select>\n                </span>\n            </div>\n            <div>\n                <label class=\"form-label\">Tình trạng</label>\n                <span class=\"custom-dropdown mx-sm-4\">\n                    <select class=\"form-control\" [(ngModel)]=\"statusFilter\" (change)=\"filterDeliveryReceipt()\">\n                        <option value=\"\">--Lựa chọn--</option>\n                        <option *ngFor=\"let i of invoiceStatusList\" [value]=\"i.id\">{{i.text}}</option>\n                    </select>\n                </span>\n            </div>\n            <!-- <div class=\"btn-group\"> -->\n            <div class=\"input-group custom-search\">\n                <!-- <span class=\"input-group-addon\">Tìm kiếm theo</span> -->\n                <input type=\"text\" class=\"form-control\" placeholder=\"Mã phiếu giao\" (keyup)=\"filterDeliveryReceipt($event.target.value)\">\n            </div>\n            <!-- </div> -->\n        </div>\n        <kendo-grid class=\"delivery-grid\" [groupable]=\"true\" [group]=\"groups\" [data]=\"gridView\" (groupChange)=\"groupChange($event)\">\n            <kendo-grid-column headerClass=\"col-hide\" class=\"col-hide\" field=\"invoiceNo\" title=\"\">\n                <ng-template kendoGridGroupHeaderTemplate let-group let-field=\"field\" let-value=\"value\">\n                    {{value}}\n                </ng-template>\n                <ng-template kendoGridCellTemplate let-dataItem>\n                </ng-template>\n            </kendo-grid-column>\n            <kendo-grid-column headerClass=\"grid-header-custom\" width=\"115\" field=\"productNo\" title=\"Mã sản phẩm\">\n            </kendo-grid-column>\n            <kendo-grid-column headerClass=\"grid-header-custom\" width=\"200\" field=\"productDesc\" title=\"Mô tả\">\n            </kendo-grid-column>\n            <kendo-grid-column headerClass=\"grid-header-custom\" width=\"80\" field=\"Category.CategoryName\" title=\"ĐVT\">\n                <ng-template kendoGridCellTemplate>Tấn</ng-template>\n            </kendo-grid-column>\n            <kendo-grid-column headerClass=\"grid-header-custom\" width=\"80\" field=\"productQty\" title=\"SL\">\n                <ng-template kendoGridCellTemplate let-dataItem>\n                    {{dataItem.productQty | vnNumber}}\n                </ng-template>\n            </kendo-grid-column>\n            <kendo-grid-column headerClass=\"grid-header-custom\" width=\"100\" field=\"productUnitPrice\" title=\"Đơn giá\">\n                <ng-template kendoGridCellTemplate let-dataItem>\n                    {{dataItem.productUnitPrice | vnNumber}}\n                </ng-template>\n            </kendo-grid-column>\n            <kendo-grid-column headerClass=\"grid-header-custom\" width=\"125\" field=\"transferFeeAmount\" title=\"Phí vận chuyển\">\n                <ng-template kendoGridCellTemplate let-dataItem>\n                    {{dataItem.transferFeeAmount | vnNumber}}\n                </ng-template>\n            </kendo-grid-column>\n            <kendo-grid-column headerClass=\"grid-header-custom\" width=\"120\" field=\"totalAmount\" title=\"Thành tiền\">\n                <ng-template kendoGridCellTemplate let-dataItem>\n                    {{dataItem.totalAmount | vnNumber}}\n                </ng-template>\n            </kendo-grid-column>\n            <kendo-grid-column headerClass=\"grid-header-custom\" width=\"100\" field=\"productQtyCancel\" title=\"SL đã hủy\">\n                <ng-template kendoGridCellTemplate let-dataItem>\n                    {{dataItem.productQtyCancel | vnNumber}}\n                </ng-template>\n            </kendo-grid-column>\n            <kendo-grid-column headerClass=\"grid-header-custom\" width=\"100\" field=\"invoiceStatus\" title=\"Tình trạng\">\n            </kendo-grid-column>\n            <kendo-grid-column headerClass=\"grid-header-custom\" width=\"130\" field=\"coordinatorReference\" title=\"Mã điều phối\">\n                <ng-template kendoGridCellTemplate let-dataItem>\n                    <p class=\"link-custom\" (click)=\"showDetailWindow(dataItem.coordinatorReference)\">{{dataItem.coordinatorReference}}</p>\n                </ng-template>\n            </kendo-grid-column>\n            <kendo-grid-messages groupPanelEmpty=\"Drag here to group\" noRecords=\"Không có dữ liệu.\">\n            </kendo-grid-messages>\n        </kendo-grid>\n        <app-pagination [pagedResult]=\"deliveryReceiptPageData\" (pagedResultChange)=\"pagedResultChange($event)\"></app-pagination>\n    </div>\n</div>\n<kendo-window title=\"Tình trạng giao hàng\" [width]=\"600\" *ngIf=\"isShowDeliveryDetail\" (close)=\"isShowDeliveryDetail = false\">\n    <div class=\"row form-group\">\n        <div class=\"col-md-6\">\n            <p>\n                <strong>Mã điều phối:</strong> {{deliveryDetail.coordinatorNo}}\n            </p>\n            <p>\n                <strong>Người điều phối:</strong> {{deliveryDetail.employeeName}}\n            </p>\n            <p class=\"text-nowrap\">\n                <strong>Phương tiện vận chuyển:</strong> {{deliveryDetail.vehicleNoPlate}}\n            </p>\n        </div>\n        <div class=\"col-md-6\">\n            <p>\n                <strong>Ngày điều phối:</strong> {{deliveryDetail.coordinatorDateStr}}\n            </p>\n            <p>\n                <strong>Tình trạng:</strong> {{deliveryDetail.coordinatorStatus}}\n            </p>\n        </div>\n    </div>\n    <kendo-grid class=\"delivery-detail-grid\" [data]=\"deliveryDetailItems\">\n        <kendo-grid-column headerClass=\"grid-header-custom\" width=\"50\" field=\"Id\" title=\"STT\">\n            <ng-template kendoGridCellTemplate let-rowIndex=\"rowIndex\">{{rowIndex + 1}}</ng-template>\n        </kendo-grid-column>\n        <kendo-grid-column headerClass=\"grid-header-custom\" width=\"115\" field=\"productNo\" title=\"Mã sản phẩm\">\n        </kendo-grid-column>\n        <kendo-grid-column headerClass=\"grid-header-custom\" width=\"120\" field=\"productDesc\" title=\"Mô tả\">\n        </kendo-grid-column>\n        <kendo-grid-column headerClass=\"grid-header-custom\" width=\"60\" title=\"ĐVT\">\n            <ng-template kendoGridCellTemplate>Tấn</ng-template>\n        </kendo-grid-column>\n        <kendo-grid-column headerClass=\"grid-header-custom\" width=\"90\" field=\"productQty\" title=\"SL cần giao\">\n        </kendo-grid-column>\n        <kendo-grid-column headerClass=\"grid-header-custom\" width=\"70\" field=\"productSerialNo\" title=\"Mã lô\">\n        </kendo-grid-column>\n    </kendo-grid>\n</kendo-window>\n"

/***/ }),

/***/ "../../../../../src/app/layout/delivery/delivery.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".search-bar select {\n  min-width: 150px; }\n\n.search-bar .search-bar__title {\n  line-height: 32px;\n  margin-right: 16px; }\n\n.card {\n  padding: 15px; }\n\n.border-right {\n  border-right: 1px solid lightgray; }\n\n.link-custom {\n  text-decoration: underline;\n  color: #17a2b8;\n  cursor: pointer; }\n\n.title-color {\n  color: #346699; }\n\n.custom-search {\n  width: calc(100% - 765px); }\n\n@media screen and (max-width: 1170px) {\n  .custom-search {\n    width: calc(100% - 632px); }\n  .search-bar select {\n    max-width: 150px; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/layout/delivery/delivery.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DeliveryComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_window_service__ = __webpack_require__("../../../../../src/app/shared/services/window.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services__ = __webpack_require__("../../../../../src/app/shared/services/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_models__ = __webpack_require__("../../../../../src/app/shared/models/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__progress_kendo_data_query__ = __webpack_require__("../../../../@progress/kendo-data-query/dist/es/main.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_models_delivery_delivery_detail__ = __webpack_require__("../../../../../src/app/shared/models/delivery/delivery-detail.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__router_animations__ = __webpack_require__("../../../../../src/app/router.animations.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var DeliveryComponent = /** @class */ (function () {
    function DeliveryComponent(windowService, customerService, dataService, route) {
        this.windowService = windowService;
        this.customerService = customerService;
        this.dataService = dataService;
        this.route = route;
        this.isShowDeliveryReceipt = false;
        this.isShowDeliveryDetail = false;
        this.currentCustomer = new __WEBPACK_IMPORTED_MODULE_3__shared_models__["e" /* CustomerModel */]();
        this.deliveryReceiptPageData = new __WEBPACK_IMPORTED_MODULE_3__shared_models__["g" /* PagedResult */]();
        this.groups = [{ field: 'invoiceNo' }];
        this.deliveryDetail = new __WEBPACK_IMPORTED_MODULE_5__shared_models_delivery_delivery_detail__["a" /* DeliveryDetail */]();
        this.productFilter = '';
        this.statusFilter = '';
    }
    DeliveryComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (data) {
            _this.customerService.view(data.id).subscribe(function (customer) {
                _this.currentCustomer = customer;
            });
            _this.dataService.getListInvoiceStatus().subscribe(function (invoiceStatus) {
                _this.invoiceStatusList = invoiceStatus;
                _this.windowService
                    .getDeliveryReceiptList(data.id, 0, 10, '', '', data.invoiceNo)
                    .subscribe(function (deliveryInvoice) {
                    _this.refresh(deliveryInvoice);
                });
            });
        });
        this.dataService
            .getListProduct()
            .subscribe(function (data) { return (_this.products = data); });
        this.dataService.getListCoordinatorStatus()
            .subscribe(function (data) { return _this.coordinatorStatusList = data; });
    };
    DeliveryComponent.prototype.pagedResultChange = function (data) {
        var _this = this;
        this.windowService
            .getDeliveryReceiptList(this.currentCustomer.id, data.currentPage, data.pageSize, this.productFilter, this.statusFilter)
            .subscribe(function (result) { return _this.refresh(result); });
    };
    DeliveryComponent.prototype.filterDeliveryReceipt = function (key) {
        var _this = this;
        this.windowService
            .getDeliveryReceiptList(this.currentCustomer.id, Number(this.deliveryReceiptPageData.currentPage), Number(this.deliveryReceiptPageData.pageSize), this.productFilter, this.statusFilter, key)
            .subscribe(function (result) { return _this.refresh(result); });
    };
    DeliveryComponent.prototype.refresh = function (pagedResult) {
        var _this = this;
        this.deliveryReceiptPageData = pagedResult;
        this.deliveryReceiptPageData.items.forEach(function (item) {
            item.invoiceStatus = _this.invoiceStatusList.find(function (i) { return i.id + '' === item.invoiceStatus; }).text;
        });
        this.gridView = Object(__WEBPACK_IMPORTED_MODULE_4__progress_kendo_data_query__["f" /* process */])(this.deliveryReceiptPageData.items, { group: this.groups });
    };
    DeliveryComponent.prototype.showDetailWindow = function (e) {
        var _this = this;
        this.isShowDeliveryDetail = true;
        this.deliveryDetailItems = this.deliveryReceiptPageData.items.filter(function (i) { return i.coordinatorReference === e; });
        this.windowService.getDeliveryDetail(e)
            .subscribe(function (data) {
            _this.deliveryDetail = data;
            _this.deliveryDetail.coordinatorStatus = _this.coordinatorStatusList.find(function (i) { return i.id + '' === _this.deliveryDetail.coordinatorStatus; }).text;
        });
    };
    DeliveryComponent.prototype.groupChange = function (groups) {
        this.groups = groups;
        this.gridView = Object(__WEBPACK_IMPORTED_MODULE_4__progress_kendo_data_query__["f" /* process */])(this.deliveryReceiptPageData.items, { group: this.groups });
    };
    DeliveryComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-delivery',
            template: __webpack_require__("../../../../../src/app/layout/delivery/delivery.component.html"),
            styles: [__webpack_require__("../../../../../src/app/layout/delivery/delivery.component.scss")],
            animations: [Object(__WEBPACK_IMPORTED_MODULE_6__router_animations__["a" /* routerTransition */])()]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_services_window_service__["a" /* WindowService */],
            __WEBPACK_IMPORTED_MODULE_2__shared_services__["i" /* CustomerService */],
            __WEBPACK_IMPORTED_MODULE_2__shared_services__["j" /* DataService */],
            __WEBPACK_IMPORTED_MODULE_7__angular_router__["ActivatedRoute"]])
    ], DeliveryComponent);
    return DeliveryComponent;
}());



/***/ }),

/***/ "../../../../../src/app/layout/delivery/delivery.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeliveryModule", function() { return DeliveryModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__delivery_routing_module__ = __webpack_require__("../../../../../src/app/layout/delivery/delivery-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__delivery_component__ = __webpack_require__("../../../../../src/app/layout/delivery/delivery.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var DeliveryModule = /** @class */ (function () {
    function DeliveryModule() {
    }
    DeliveryModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_2__delivery_routing_module__["a" /* DeliveryRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__["a" /* SharedModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_3__delivery_component__["a" /* DeliveryComponent */]]
        })
    ], DeliveryModule);
    return DeliveryModule;
}());



/***/ })

});
//# sourceMappingURL=delivery.module.chunk.js.map