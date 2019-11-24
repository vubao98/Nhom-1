webpackJsonp(["not-found.module"],{

/***/ "../../../../../src/app/not-found/not-found-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotFoundRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__not_found_component__ = __webpack_require__("../../../../../src/app/not-found/not-found.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '', component: __WEBPACK_IMPORTED_MODULE_2__not_found_component__["a" /* NotFoundComponent */]
    }
];
var NotFoundRoutingModule = /** @class */ (function () {
    function NotFoundRoutingModule() {
    }
    NotFoundRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"]]
        })
    ], NotFoundRoutingModule);
    return NotFoundRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/not-found/not-found.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n  <div id=\"clouds\">\n    <!-- <div class=\"cloud x1\"></div>\n    <div class=\"cloud x1_5\"></div>\n    <div class=\"cloud x2\"></div>\n    <div class=\"cloud x3\"></div>\n    <div class=\"cloud x4\"></div>\n    <div class=\"cloud x5\"></div> -->\n  </div>\n  <div class='c'>\n    <div class='_404'>404</div>\n    <hr>\n    <div class='_1'>TRANG</div>\n    <div class='_2'>KHÔNG TỒN TẠI</div>\n    <a class='btn' [routerLink]='[\"/dashboard\"]'>QUAY LẠI</a>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/not-found/not-found.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=opensans);", ""]);

// module
exports.push([module.i, ".wrapper {\n  background: #17a2b8;\n  color: #fff;\n  font-family: 'Open Sans', sans-serif;\n  overflow: hidden;\n  height: 100%;\n  position: absolute;\n  width: 100%; }\n\n.c {\n  text-align: center;\n  display: block;\n  position: relative;\n  width: 80%;\n  margin: 100px auto; }\n\n._404 {\n  font-size: 220px;\n  position: relative;\n  display: inline-block;\n  z-index: 2;\n  height: 250px;\n  letter-spacing: 15px; }\n\n._1 {\n  text-align: center;\n  display: block;\n  position: relative;\n  letter-spacing: 12px;\n  font-size: 4em;\n  line-height: 80%; }\n\n._2 {\n  text-align: center;\n  display: block;\n  position: relative;\n  font-size: 20px; }\n\n.text {\n  font-size: 70px;\n  text-align: center;\n  position: relative;\n  display: inline-block;\n  margin: 19px 0px 0px 0px;\n  /* top: 256.301px; */\n  z-index: 3;\n  width: 100%;\n  line-height: 1.2em;\n  display: inline-block; }\n\n.btn {\n  background-color: white;\n  position: relative;\n  display: inline-block;\n  width: 358px;\n  padding: 5px;\n  z-index: 5;\n  font-size: 25px;\n  margin: 0 auto;\n  color: #17a2b8;\n  text-decoration: none;\n  margin-right: 10px; }\n\n.right {\n  float: right;\n  width: 60%; }\n\nhr {\n  padding: 0;\n  border: none;\n  border-top: 5px solid #fff;\n  color: #fff;\n  text-align: center;\n  margin: 0px auto;\n  width: 420px;\n  height: 10px;\n  z-index: -10; }\n\nhr:after {\n  content: \"\\2022\";\n  display: inline-block;\n  position: relative;\n  top: -0.75em;\n  font-size: 2em;\n  padding: 0 0.2em;\n  background: #17a2b8; }\n\n.cloud {\n  width: 350px;\n  height: 120px;\n  background: #FFF;\n  background: linear-gradient(to top, #FFF 100%);\n  background: -o-linear-gradient(to top, #FFF 100%);\n  border-radius: 100px;\n  -webkit-border-radius: 100px;\n  -moz-border-radius: 100px;\n  position: absolute;\n  margin: 120px auto 20px;\n  z-index: -1;\n  transition: ease 1s; }\n\n.cloud:after, .cloud:before {\n  content: '';\n  position: absolute;\n  background: #FFF;\n  z-index: -1; }\n\n.cloud:after {\n  width: 100px;\n  height: 100px;\n  top: -50px;\n  left: 50px;\n  border-radius: 100px;\n  -webkit-border-radius: 100px;\n  -moz-border-radius: 100px; }\n\n.cloud:before {\n  width: 180px;\n  height: 180px;\n  top: -90px;\n  right: 50px;\n  border-radius: 200px;\n  -webkit-border-radius: 200px;\n  -moz-border-radius: 200px; }\n\n.x1 {\n  top: -50px;\n  left: 100px;\n  -webkit-transform: scale(0.3);\n  transform: scale(0.3);\n  opacity: 0.9;\n  -webkit-animation: moveclouds 15s linear infinite;\n  -moz-animation: moveclouds 15s linear infinite;\n  -o-animation: moveclouds 15s linear infinite; }\n\n.x1_5 {\n  top: -80px;\n  left: 250px;\n  -webkit-transform: scale(0.3);\n  transform: scale(0.3);\n  -webkit-animation: moveclouds 17s linear infinite;\n  -moz-animation: moveclouds 17s linear infinite;\n  -o-animation: moveclouds 17s linear infinite; }\n\n.x2 {\n  left: 250px;\n  top: 30px;\n  -webkit-transform: scale(0.6);\n  transform: scale(0.6);\n  opacity: 0.6;\n  -webkit-animation: moveclouds 25s linear infinite;\n  -moz-animation: moveclouds 25s linear infinite;\n  -o-animation: moveclouds 25s linear infinite; }\n\n.x3 {\n  left: 250px;\n  bottom: -70px;\n  -webkit-transform: scale(0.6);\n  transform: scale(0.6);\n  opacity: 0.8;\n  -webkit-animation: moveclouds 25s linear infinite;\n  -moz-animation: moveclouds 25s linear infinite;\n  -o-animation: moveclouds 25s linear infinite; }\n\n.x4 {\n  left: 470px;\n  botttom: 20px;\n  -webkit-transform: scale(0.75);\n  transform: scale(0.75);\n  opacity: 0.75;\n  -webkit-animation: moveclouds 18s linear infinite;\n  -moz-animation: moveclouds 18s linear infinite;\n  -o-animation: moveclouds 18s linear infinite; }\n\n.x5 {\n  left: 200px;\n  top: 300px;\n  -webkit-transform: scale(0.5);\n  transform: scale(0.5);\n  opacity: 0.8;\n  -webkit-animation: moveclouds 20s linear infinite;\n  -moz-animation: moveclouds 20s linear infinite;\n  -o-animation: moveclouds 20s linear infinite; }\n\n@-webkit-keyframes moveclouds {\n  0% {\n    margin-left: 1000px; }\n  100% {\n    margin-left: -1000px; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/not-found/not-found.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotFoundComponent; });
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

var NotFoundComponent = /** @class */ (function () {
    function NotFoundComponent() {
    }
    NotFoundComponent.prototype.ngOnInit = function () {
    };
    NotFoundComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-not-found',
            template: __webpack_require__("../../../../../src/app/not-found/not-found.component.html"),
            styles: [__webpack_require__("../../../../../src/app/not-found/not-found.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], NotFoundComponent);
    return NotFoundComponent;
}());



/***/ }),

/***/ "../../../../../src/app/not-found/not-found.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundModule", function() { return NotFoundModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__not_found_routing_module__ = __webpack_require__("../../../../../src/app/not-found/not-found-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__not_found_component__ = __webpack_require__("../../../../../src/app/not-found/not-found.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var NotFoundModule = /** @class */ (function () {
    function NotFoundModule() {
    }
    NotFoundModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_2__not_found_routing_module__["a" /* NotFoundRoutingModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_3__not_found_component__["a" /* NotFoundComponent */]]
        })
    ], NotFoundModule);
    return NotFoundModule;
}());



/***/ })

});
//# sourceMappingURL=not-found.module.chunk.js.map