(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["docs-docs-module"],{

/***/ "./src/app/docs/docs-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/docs/docs-routing.module.ts ***!
  \*********************************************/
/*! exports provided: DocsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocsPageRoutingModule", function() { return DocsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _docs_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./docs.page */ "./src/app/docs/docs.page.ts");




const routes = [
    {
        path: '',
        component: _docs_page__WEBPACK_IMPORTED_MODULE_3__["DocsPage"]
    }
];
let DocsPageRoutingModule = class DocsPageRoutingModule {
};
DocsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], DocsPageRoutingModule);



/***/ }),

/***/ "./src/app/docs/docs.module.ts":
/*!*************************************!*\
  !*** ./src/app/docs/docs.module.ts ***!
  \*************************************/
/*! exports provided: DocsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocsPageModule", function() { return DocsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _docs_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./docs-routing.module */ "./src/app/docs/docs-routing.module.ts");
/* harmony import */ var _docs_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./docs.page */ "./src/app/docs/docs.page.ts");







let DocsPageModule = class DocsPageModule {
};
DocsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _docs_routing_module__WEBPACK_IMPORTED_MODULE_5__["DocsPageRoutingModule"]
        ],
        declarations: [_docs_page__WEBPACK_IMPORTED_MODULE_6__["DocsPage"]]
    })
], DocsPageModule);



/***/ })

}]);
//# sourceMappingURL=docs-docs-module-es2015.js.map