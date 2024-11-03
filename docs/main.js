(self["webpackChunkultimate"] = self["webpackChunkultimate"] || []).push([["main"],{

/***/ 23966:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppRoutingModule: () => (/* binding */ AppRoutingModule),
/* harmony export */   routes: () => (/* binding */ routes)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _layouts_resume_resume_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./layouts/resume/resume.component */ 88669);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 61699);




const routes = [{
  path: '',
  redirectTo: 'resume',
  pathMatch: 'full'
}, {
  path: 'resume',
  component: _layouts_resume_resume_component__WEBPACK_IMPORTED_MODULE_0__.ResumeComponent
}];
class AppRoutingModule {
  static #_ = this.ɵfac = function AppRoutingModule_Factory(t) {
    return new (t || AppRoutingModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
    type: AppRoutingModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forRoot(routes, {
      // preloadingStrategy: PreloadAllModules,
      anchorScrolling: 'enabled',
      scrollPositionRestoration: 'enabled'
    }), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
}

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 66401:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppComponent: () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _shared_service_customizer_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shared/service/customizer.service */ 84722);
/* harmony import */ var _shared_components_loader_loader_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared/components/loader/loader.component */ 99185);







function AppComponent_div_2_li_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AppComponent_div_2_li_2_Template_li_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r4);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r3.customizeLayoutVersion("light"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "a", 4)(2, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "i", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
}
function AppComponent_div_2_li_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AppComponent_div_2_li_3_Template_li_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r6);
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r5.customizeLayoutVersion("dark"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "a", 4)(2, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "i", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
}
function AppComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 1)(1, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, AppComponent_div_2_li_2_Template, 4, 0, "li", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, AppComponent_div_2_li_3_Template, 4, 0, "li", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.customize.data.settings.layout_version == "dark");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.customize.data.settings.layout_version == "light");
  }
}
class AppComponent {
  constructor(customize, router, _renderer2, _document) {
    this.customize = customize;
    this.router = router;
    this._renderer2 = _renderer2;
    this._document = _document;
    this.title = 'Umar Rasheed';
    this.layoutType = 'dark';
    this.router.events.subscribe(event => {
      if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__.NavigationEnd) {
        this.url = event.url;
      }
    });
  }
  ngOnInit() {
    let script = this._renderer2.createElement('script');
    script.src = `/assets/tilt.js`;
    this._renderer2.appendChild(this._document.body, script);
  }
  customizeLayoutVersion(val) {
    this.customize.setLayoutVersion(val);
    this.layoutType = val;
  }
  customizeLayoutType(val) {
    this.customize.setLayoutType(val);
    this.layoutType = val;
  }
  static #_ = this.ɵfac = function AppComponent_Factory(t) {
    return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_shared_service_customizer_service__WEBPACK_IMPORTED_MODULE_0__.CustomizerService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_4__.DOCUMENT));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: AppComponent,
    selectors: [["app-root"]],
    decls: 3,
    vars: 1,
    consts: [["class", "theme-pannel-main", 4, "ngIf"], [1, "theme-pannel-main"], ["class", "sidebar-btn dark-light-btn", 3, "click", 4, "ngIf"], [1, "sidebar-btn", "dark-light-btn", 3, "click"], ["href", "javascript:void(0)", 1, "dark-light"], [1, "theme-layout-version"], [1, "fa-solid", "fa-sun"], [1, "fa-solid", "fa-moon"]],
    template: function AppComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-loader")(1, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, AppComponent_div_2_Template, 4, 2, "div", 0);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.url != "/landing");
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterOutlet, _shared_components_loader_loader_component__WEBPACK_IMPORTED_MODULE_1__.LoaderComponent],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}


/***/ }),

/***/ 78629:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppModule: () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ 54860);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ 36480);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ 24987);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-owl-carousel-o */ 99436);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 23966);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 66401);
/* harmony import */ var _layouts_layouts_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./layouts/layouts.module */ 55922);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/shared.module */ 56208);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 61699);












class AppModule {
  static #_ = this.ɵfac = function AppModule_Factory(t) {
    return new (t || AppModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
    type: AppModule,
    bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent]
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__.BrowserModule.withServerTransition({
      appId: 'serverApp'
    }), _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__.BrowserAnimationsModule, _layouts_layouts_module__WEBPACK_IMPORTED_MODULE_2__.LayoutsModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpClientModule, ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_8__.CarouselModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__.SharedModule, _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule.forRoot(_app_routing_module__WEBPACK_IMPORTED_MODULE_0__.routes, {
      useHash: false,
      anchorScrolling: 'enabled',
      scrollPositionRestoration: 'enabled'
    })]
  });
}

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__.BrowserAnimationsModule, _layouts_layouts_module__WEBPACK_IMPORTED_MODULE_2__.LayoutsModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpClientModule, ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_8__.CarouselModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__.SharedModule, _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule]
  });
})();

/***/ }),

/***/ 33854:
/*!*****************************************************************!*\
  !*** ./src/app/layouts/Next/Next-about/Next-about.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NextAboutComponent: () => (/* binding */ NextAboutComponent)
/* harmony export */ });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ 12501);
/* harmony import */ var ng_animate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-animate */ 28063);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 61699);



class NextAboutComponent {
  constructor() {}
  ngOnInit() {}
  static #_ = this.ɵfac = function NextAboutComponent_Factory(t) {
    return new (t || NextAboutComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: NextAboutComponent,
    selectors: [["app-next-about"]],
    decls: 34,
    vars: 1,
    consts: [[1, "app2", "about", "format"], [1, "animated-bg"], [1, "container"], [1, "row"], [1, "col-sm-7", "counters"], [1, "abouts", "center-text"], [1, "format-small-text"], [1, "font-primary", "borders-before", "text-uppercase"], [1, "format-head-text"], [1, "about-font-header", "font-secondary"], [1, "format-sub-text"], [1, "about-para"], [1, "icon-collection"], [1, "about-icon"], ["href", "javascript:void(0)", 1, "center-content"], ["src", "assets/images/resume/icon/5.png", "alt", "", 1, "img-fluid"], ["src", "assets/images/resume/icon/6.png", "alt", "", 1, "img-fluid"], ["src", "assets/images/resume/icon/7.png", "alt", "", 1, "img-fluid"], [1, "btn", "btn-default", "btn-gradient", "m-t-50"], [1, "col-sm-5", "counters", "set-height"], ["src", "assets/images/resume/next/next-3.png", "alt", "", 1, "img-fluid", "mobile1", 2, "width", "300px", "height", "auto"]],
    template: function NextAboutComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i")(3, "i")(4, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2)(6, "div", 3)(7, "div", 4)(8, "div", 5)(9, "div")(10, "div", 6)(11, "h6", 7)(12, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Sub Heading");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 8)(15, "h3", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Great Application Ever");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 10)(18, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "ul", 12)(21, "li", 13)(22, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "li", 13)(25, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "li", 13)(28, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "img", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "learn more");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "img", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@fadeInRight", ctx.fadeInRight);
      }
    },
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"],
    data: {
      animation: [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.trigger)('fadeInRight', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.transition)('* => *', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.useAnimation)(ng_animate__WEBPACK_IMPORTED_MODULE_2__.fadeInRight, {
        params: {
          timing: 5,
          delay: 2
        }
      }))])]
    }
  });
}


/***/ }),

/***/ 98138:
/*!*************************************************************!*\
  !*** ./src/app/layouts/Next/Next-bmi/Next-bmi.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NextBMIComponent: () => (/* binding */ NextBMIComponent)
/* harmony export */ });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ 12501);
/* harmony import */ var ng_animate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-animate */ 28063);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 61699);



class NextBMIComponent {
  constructor() {}
  ngOnInit() {}
  static #_ = this.ɵfac = function NextBMIComponent_Factory(t) {
    return new (t || NextBMIComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: NextBMIComponent,
    selectors: [["app-next-bmi"]],
    decls: 34,
    vars: 1,
    consts: [[1, "app1", "download"], [1, "container"], [1, "row"], ["data-aos", "fade-right", "data-aos-duration", "1500", 1, "col-lg-5", "col-md-6", "hide-on-init"], [1, "center-content", "center-mobile"], ["src", "assets/images/resume/next/next-2.png", "alt", "", 1, "img-fluid", "width300"], [1, "col-lg-6", "offset-lg-1", "col-md-6"], [1, "center-text"], [1, "download-img", "d-flex"], [1, "set-relative"], ["src", "assets/images/resume/icon/download.png", "alt", "", 1, "download-icon", "img-fluid"], [1, "set-abs", "elipse", "center-abs"], ["src", "assets/images/resume/icon/Ellipse.png", "alt", ""], [1, "center-img-content", "m-l-15"], [1, "m-b-5"], [1, "information"], [1, "link-horizontal"], ["href", "https://play.google.com/store/apps/details?id=com.wolfe.giftya", "target", "_blank", 1, "icon-btn"], ["aria-hidden", "true", 1, "fa", "fa-android", "center-content", "shadow"], [1, "text-center", "font-primary"], ["href", "https://apps.apple.com/us/app/giftya-send-gift-cards/id1205973805", "target", "_blank", 1, "icon-btn"], ["aria-hidden", "true", 1, "fa", "fa-apple", "center-content", "shadow"]],
    template: function NextBMIComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6)(7, "div", 7)(8, "div")(9, "div", 8)(10, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 13)(15, "h3", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "The giftya");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "download");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 15)(20, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor unt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud ercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt in culpa.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 16)(23, "ul")(24, "li")(25, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "i", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "h6", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "android");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "li")(30, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "i", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "h6", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "ios");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@fadeInLeft", ctx.fadeInLeft);
      }
    },
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"],
    data: {
      animation: [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.trigger)('fadeInLeft', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.transition)('* => *', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.useAnimation)(ng_animate__WEBPACK_IMPORTED_MODULE_2__.fadeInLeft, {
        params: {
          timing: 5,
          delay: 0
        }
      }))])]
    }
  });
}


/***/ }),

/***/ 9971:
/*!*******************************************************************!*\
  !*** ./src/app/layouts/Next/Next-footer/next-footer.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NextFooterComponent: () => (/* binding */ NextFooterComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _shared_components_tap_to_top_tap_to_top_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/components/tap-to-top/tap-to-top.component */ 55842);



const _c0 = function () {
  return {
    "background-color": "copyright-bg",
    "color": "copyright",
    "text-align": "center",
    "padding": "20px",
    "position": "absolute",
    "bottom": "0",
    "width": "100%",
    "box-shadow": "0 -2px 5px rgba(0, 0, 0, 0.1)"
  };
};
class NextFooterComponent {
  constructor() {}
  ngOnInit() {}
  static #_ = this.ɵfac = function NextFooterComponent_Factory(t) {
    return new (t || NextFooterComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: NextFooterComponent,
    selectors: [["app-next-footer"]],
    decls: 23,
    vars: 2,
    consts: [[1, "resume", "copyright", "copyright-bg", 3, "ngStyle"], [1, "container"], [1, "row"], [1, "col-12"], [1, "text-center"], [1, "social-link", "link-horizontal"], [1, "justify-content-center"], ["href", "https://www.facebook.com/UMAR0061", 1, "copyright-text"], ["aria-hidden", "true", 1, "fa", "fa-facebook"], ["href", "https://www.linkedin.com/in/umar-rasheed/", 1, "copyright-text"], ["aria-hidden", "true", 1, "fa", "fa-linkedin"], ["href", "https://www.instagram.com/umar.rasheed61/", 1, "copyright-text"], ["aria-hidden", "true", 1, "fa", "fa-instagram"], [1, "m-l-auto", "center-para"], [1, "copyright-text", "text-center"], ["href", "https://www.linkedin.com/in/umar-rasheed/"]],
    template: function NextFooterComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "footer", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "ul", 6)(7, "li")(8, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "li")(11, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "li")(14, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 3)(17, "div", 13)(18, "h6", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "\u00A9 2024 portfolio powered by ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "Umar Rasheed");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "app-tap-to-top");
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](1, _c0));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgStyle, _shared_components_tap_to_top_tap_to_top_component__WEBPACK_IMPORTED_MODULE_0__.TapToTopComponent],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}


/***/ }),

/***/ 33893:
/*!*******************************************************************!*\
  !*** ./src/app/layouts/Next/Next-header/Next-header.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NextHeaderComponent: () => (/* binding */ NextHeaderComponent)
/* harmony export */ });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations */ 12501);
/* harmony import */ var ng_animate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-animate */ 28063);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 27947);




class NextHeaderComponent {
  constructor() {}
  ngOnInit() {}
  static #_ = this.ɵfac = function NextHeaderComponent_Factory(t) {
    return new (t || NextHeaderComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: NextHeaderComponent,
    selectors: [["app-next-header"]],
    decls: 34,
    vars: 0,
    consts: [["id", "header", 1, "agency", "header"], [1, "agency", "bg"], [1, "container"], [1, "row"], [1, "col-md-6"], [1, "center-text"], [1, "header-text"], [1, "text-uppercase"], [1, "bold-text"], [1, "header-sub-text"], [1, "link-horizontal"], ["routerLink", "/resume", 1, "btn", "btn-default", "btn-gradient", "text-white"], [1, "set-abs", "abs-horizon-center", "girl-boy"], ["src", "assets/images/resume/next/next-1.png", "alt", "", "data-tilt", "", "data-tilt-max", "5", "data-tilt-perspective", "500", "data-tilt-speed", "400", 1, "img-fluid", 2, "width", "350px", "height", "auto"], [1, "plus-container", "plus-container8"], [1, "plus", "white"], [1, "plus-container"], [1, "plus"], [1, "plus-container", "plus-container2"], [1, "plus", "plus-medium"], [1, "plus-container", "plus-container3"], [1, "plus", "plus-small"], [1, "plus-container", "plus-container4"], [1, "plus-container", "plus-container5"]],
    template: function NextHeaderComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "div")(7, "div", 6)(8, "h1", 7)(9, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Check My");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Next APP");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9)(13, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi quod vel voluptatum, id nostrum provident itaque odio voluptatem. Cumque aspernatur culpa et. Laudantium quisquam illo numquam eveniet, ipsum debitis voluptatum.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 10)(16, "ul")(17, "li")(18, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Contact");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      }
    },
    dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLink],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"],
    data: {
      animation: [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.trigger)('fadeInRight', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.transition)('* => *', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.useAnimation)(ng_animate__WEBPACK_IMPORTED_MODULE_3__.fadeInTopRight, {
        params: {
          timing: 3,
          delay: 0
        }
      }))])]
    }
  });
}


/***/ }),

/***/ 69211:
/*!*************************************************************!*\
  !*** ./src/app/layouts/Next/Next-nav/Next-nav.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NextNavComponent: () => (/* binding */ NextNavComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _shared_components_navigation_menu_menu_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/components/navigation/menu/menu.component */ 93209);


class NextNavComponent {
  constructor() {}
  ngOnInit() {}
  static #_ = this.ɵfac = function NextNavComponent_Factory(t) {
    return new (t || NextNavComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: NextNavComponent,
    selectors: [["app-next-nav"]],
    decls: 8,
    vars: 0,
    consts: [[1, "resume", "loding-header", "nav-abs", "custom-scroll"], [1, "container"], [1, "row"], [1, "col"], ["href", "#", 1, "d-inline-block", "m-r-auto"], ["src", "assets/images/resume/logo.png", "alt", "", 1, "img-fluid", 2, "width", "100px"]],
    template: function NextNavComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "header", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "nav")(5, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "app-menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
      }
    },
    dependencies: [_shared_components_navigation_menu_menu_component__WEBPACK_IMPORTED_MODULE_0__.MenuComponent],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}


/***/ }),

/***/ 44538:
/*!*****************************************************************************!*\
  !*** ./src/app/layouts/Next/Next-testimonial/Next-testimonial.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NextTestimonialComponent: () => (/* binding */ NextTestimonialComponent)
/* harmony export */ });
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper */ 58595);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var swiper_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! swiper/angular */ 29909);




function NextTestimonialComponent_11_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 13);
  }
  if (rf & 2) {
    const slide_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", slide_r1.img, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
  }
}
function NextTestimonialComponent_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, NextTestimonialComponent_11_ng_template_0_Template, 1, 1, "ng-template", 12);
  }
}
swiper__WEBPACK_IMPORTED_MODULE_0__["default"].use([swiper__WEBPACK_IMPORTED_MODULE_0__.EffectCards]);
class NextTestimonialComponent {
  constructor() {
    this.config = {
      effect: 'coverflow',
      loop: true,
      centeredSlides: true,
      slidesPerView: 3,
      keyboard: true,
      mousewheel: true,
      preventClicks: true,
      preventClicksPropagation: true,
      coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 1.43,
        slideShadows: true
      },
      breakpoints: {
        1199: {
          slidesPerView: 3,
          spaceBetween: -60
        },
        991: {
          slidesPerView: 4
        },
        767: {
          slidesPerView: 3
        },
        575: {
          slidesPerView: 2
        }
      },
      autoplay: {
        delay: 1000,
        disableOnInteraction: true
      },
      pagination: {
        el: '.swiper-pagination'
      }
    };
    this.slides = [{
      img: 'assets/images/resume/next/next-1.png'
    }, {
      img: 'assets/images/resume/next/next-2.png'
    }, {
      img: 'assets/images/resume/next/next-3.png'
    }, {
      img: 'assets/images/resume/next/next-4.png'
    }];
  }
  ngOnInit() {}
  static #_ = this.ɵfac = function NextTestimonialComponent_Factory(t) {
    return new (t || NextTestimonialComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: NextTestimonialComponent,
    selectors: [["app-next-testimonial"]],
    decls: 13,
    vars: 4,
    consts: [["id", "screenshot", 1, "app1", "screenshot", "bg-light"], [1, "container"], [1, "row"], [1, "col-lg-6", "offset-lg-3", "col-md-8", "offset-md-2", "m-b-10"], [1, "title", "title1"], [1, "main-title"], [1, "text-white", "text-dark"], [1, "row", "set-relative"], [1, "col-12"], [1, "mySwiper", 3, "effect", "grabCursor", "config"], [4, "ngFor", "ngForOf"], [1, "set-abs", "screen-container"], ["swiperSlide", ""], ["alt", "", 1, "img-fluid", 3, "src"]],
    template: function NextTestimonialComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "h2", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Screen Shot");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 7)(9, "div", 8)(10, "swiper", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, NextTestimonialComponent_11_Template, 1, 0, null, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("effect", "cards")("grabCursor", true)("config", ctx.config);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.slides);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, swiper_angular__WEBPACK_IMPORTED_MODULE_3__.SwiperComponent, swiper_angular__WEBPACK_IMPORTED_MODULE_3__.SwiperSlideDirective],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}


/***/ }),

/***/ 80696:
/*!***********************************************************************!*\
  !*** ./src/app/layouts/Next/Next-view-one/Next-view-one.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NextViewOneComponent: () => (/* binding */ NextViewOneComponent)
/* harmony export */ });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ 12501);
/* harmony import */ var ng_animate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-animate */ 28063);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 61699);



class NextViewOneComponent {
  constructor() {}
  ngOnInit() {}
  static #_ = this.ɵfac = function NextViewOneComponent_Factory(t) {
    return new (t || NextViewOneComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: NextViewOneComponent,
    selectors: [["app-next-view-one"]],
    decls: 22,
    vars: 1,
    consts: [[1, "app2", "about", "format"], [1, "animated-bg"], [1, "container"], [1, "row"], [1, "col-sm-4", "counters", "set-height"], ["src", "assets/images/resume/next/next-4.png", "alt", "", 1, "img-fluid", "mobile1", 2, "width", "300px", "height", "auto"], [1, "col-sm-8", "counters"], [1, "abouts", "center-text"], [1, "format-head-text"], [1, "about-font-header", "font-secondary"], [1, "format-sub-text"], [1, "about-para"]],
    template: function NextViewOneComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i")(3, "i")(4, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2)(6, "div", 3)(7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6)(10, "div", 7)(11, "div")(12, "div", 8)(13, "h3", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Heading");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 10)(16, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@fadeInLeft", ctx.fadeInLeft);
      }
    },
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"],
    data: {
      animation: [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.trigger)('fadeInLeft', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.transition)('* => *', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.useAnimation)(ng_animate__WEBPACK_IMPORTED_MODULE_2__.fadeInLeft, {
        params: {
          timing: 5,
          delay: 3
        }
      }))])]
    }
  });
}


/***/ }),

/***/ 86786:
/*!***********************************************************************!*\
  !*** ./src/app/layouts/Next/Next-view-two/Next-view-two.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NextViewTwoComponent: () => (/* binding */ NextViewTwoComponent)
/* harmony export */ });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ 12501);
/* harmony import */ var ng_animate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-animate */ 28063);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 61699);



class NextViewTwoComponent {
  constructor() {}
  ngOnInit() {}
  static #_ = this.ɵfac = function NextViewTwoComponent_Factory(t) {
    return new (t || NextViewTwoComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: NextViewTwoComponent,
    selectors: [["app-next-view-two"]],
    decls: 22,
    vars: 1,
    consts: [[1, "app2", "about", "format"], [1, "animated-bg"], [1, "container"], [1, "row"], [1, "col-sm-7", "counters"], [1, "abouts", "center-text"], [1, "format-head-text"], [1, "about-font-header", "font-secondary"], [1, "format-sub-text"], [1, "about-para"], [1, "col-sm-5", "counters", "set-height"], ["src", "assets/images/resume/work/next.png", "alt", "", 1, "img-fluid", "mobile1", 2, "width", "300px", "height", "auto"]],
    template: function NextViewTwoComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i")(3, "i")(4, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2)(6, "div", 3)(7, "div", 4)(8, "div", 5)(9, "div")(10, "div", 6)(11, "h3", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Heading");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 8)(14, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@fadeInRight", ctx.fadeInRight);
      }
    },
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"],
    data: {
      animation: [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.trigger)('fadeInRight', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.transition)('* => *', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.useAnimation)(ng_animate__WEBPACK_IMPORTED_MODULE_2__.fadeInRight, {
        params: {
          timing: 5,
          delay: 4
        }
      }))])]
    }
  });
}


/***/ }),

/***/ 26909:
/*!************************************************!*\
  !*** ./src/app/layouts/Next/Next.component.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NextComponent: () => (/* binding */ NextComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _shared_service_color_scss_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/service/color-scss.service */ 94342);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ 36480);
/* harmony import */ var _Next_testimonial_Next_testimonial_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Next-testimonial/Next-testimonial.component */ 44538);
/* harmony import */ var _Next_footer_next_footer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Next-footer/next-footer.component */ 9971);






class NextComponent {
  constructor(colorPicker, route, title) {
    this.colorPicker = colorPicker;
    this.route = route;
    this.title = title;
  }
  ngOnInit() {
    this.colorPicker.setColorScheme('color-1');
    this.title.setTitle(this.route.snapshot.data['title']);
  }
  static #_ = this.ɵfac = function NextComponent_Factory(t) {
    return new (t || NextComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_shared_service_color_scss_service__WEBPACK_IMPORTED_MODULE_0__.ColorScssService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__.Title));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: NextComponent,
    selectors: [["app-next"]],
    decls: 2,
    vars: 0,
    template: function NextComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-next-testimonial")(1, "app-next-footer");
      }
    },
    dependencies: [_Next_testimonial_Next_testimonial_component__WEBPACK_IMPORTED_MODULE_1__.NextTestimonialComponent, _Next_footer_next_footer_component__WEBPACK_IMPORTED_MODULE_2__.NextFooterComponent],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}


/***/ }),

/***/ 94202:
/*!**************************************************************************!*\
  !*** ./src/app/layouts/clublex/clublex-about/clublex-about.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ClublexAboutComponent: () => (/* binding */ ClublexAboutComponent)
/* harmony export */ });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ 12501);
/* harmony import */ var ng_animate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-animate */ 28063);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 61699);



class ClublexAboutComponent {
  constructor() {}
  ngOnInit() {}
  static #_ = this.ɵfac = function ClublexAboutComponent_Factory(t) {
    return new (t || ClublexAboutComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: ClublexAboutComponent,
    selectors: [["app-clublex-about"]],
    decls: 34,
    vars: 1,
    consts: [[1, "app2", "about", "format"], [1, "animated-bg"], [1, "container"], [1, "row"], [1, "col-sm-7", "counters"], [1, "abouts", "center-text"], [1, "format-small-text"], [1, "font-primary", "borders-before", "text-uppercase"], [1, "format-head-text"], [1, "about-font-header", "font-secondary"], [1, "format-sub-text"], [1, "about-para"], [1, "icon-collection"], [1, "about-icon"], ["href", "javascript:void(0)", 1, "center-content"], ["src", "assets/images/resume/icon/5.png", "alt", "", 1, "img-fluid"], ["src", "assets/images/resume/icon/6.png", "alt", "", 1, "img-fluid"], ["src", "assets/images/resume/icon/7.png", "alt", "", 1, "img-fluid"], [1, "btn", "btn-default", "btn-gradient", "m-t-50"], [1, "col-sm-5", "counters", "set-height"], ["src", "assets/images/resume/clublax/clublax-2.png", "alt", "", 1, "img-fluid", "mobile1", 2, "width", "300px", "height", "auto"]],
    template: function ClublexAboutComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i")(3, "i")(4, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2)(6, "div", 3)(7, "div", 4)(8, "div", 5)(9, "div")(10, "div", 6)(11, "h6", 7)(12, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Sub Heading");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 8)(15, "h3", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Great Application Ever");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 10)(18, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "ul", 12)(21, "li", 13)(22, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "li", 13)(25, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "li", 13)(28, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "img", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "learn more");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "img", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@fadeInRight", ctx.fadeInRight);
      }
    },
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"],
    data: {
      animation: [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.trigger)('fadeInRight', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.transition)('* => *', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.useAnimation)(ng_animate__WEBPACK_IMPORTED_MODULE_2__.fadeInRight, {
        params: {
          timing: 5,
          delay: 2
        }
      }))])]
    }
  });
}


/***/ }),

/***/ 96777:
/*!*********************************************************************!*\
  !*** ./src/app/layouts/clublex/clublex-bmi/giftya-bmi.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ClublexBMIComponent: () => (/* binding */ ClublexBMIComponent)
/* harmony export */ });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ 12501);
/* harmony import */ var ng_animate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-animate */ 28063);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 61699);



class ClublexBMIComponent {
  constructor() {}
  ngOnInit() {}
  static #_ = this.ɵfac = function ClublexBMIComponent_Factory(t) {
    return new (t || ClublexBMIComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: ClublexBMIComponent,
    selectors: [["app-clublex-bmi"]],
    decls: 34,
    vars: 1,
    consts: [[1, "app1", "download"], [1, "container"], [1, "row"], ["data-aos", "fade-right", "data-aos-duration", "1500", 1, "col-lg-5", "col-md-6", "hide-on-init"], [1, "center-content", "center-mobile"], ["src", "assets/images/resume/clublax/clublax-2.png", "alt", "", 1, "img-fluid", "width300"], [1, "col-lg-6", "offset-lg-1", "col-md-6"], [1, "center-text"], [1, "download-img", "d-flex"], [1, "set-relative"], ["src", "assets/images/resume/icon/download.png", "alt", "", 1, "download-icon", "img-fluid"], [1, "set-abs", "elipse", "center-abs"], ["src", "assets/images/resume/icon/Ellipse.png", "alt", ""], [1, "center-img-content", "m-l-15"], [1, "m-b-5"], [1, "information"], [1, "link-horizontal"], [1, "icon-btn"], ["aria-hidden", "true", 1, "fa", "fa-android", "center-content", "shadow"], [1, "text-center", "font-primary"], ["href", "https://apps.apple.com/us/app/club-lax/id1469872748", "target", "_blank", 1, "icon-btn"], ["aria-hidden", "true", 1, "fa", "fa-apple", "center-content", "shadow"]],
    template: function ClublexBMIComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6)(7, "div", 7)(8, "div")(9, "div", 8)(10, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 13)(15, "h3", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "The Club Lax");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "download");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 15)(20, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "The native iOS app was already developed. I rewrote the app using react native. Four persons were working on this project one native iOS developer, one backend developer, a manager, and I.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 16)(23, "ul")(24, "li")(25, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "i", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "h6", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "android");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "li")(30, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "i", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "h6", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "ios");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@fadeInLeft", ctx.fadeInLeft);
      }
    },
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"],
    data: {
      animation: [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.trigger)('fadeInLeft', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.transition)('* => *', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.useAnimation)(ng_animate__WEBPACK_IMPORTED_MODULE_2__.fadeInLeft, {
        params: {
          timing: 5,
          delay: 0
        }
      }))])]
    }
  });
}


/***/ }),

/***/ 36553:
/*!****************************************************************************!*\
  !*** ./src/app/layouts/clublex/clublex-footer/clublex-footer.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ClublexFooterComponent: () => (/* binding */ ClublexFooterComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _shared_components_tap_to_top_tap_to_top_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/components/tap-to-top/tap-to-top.component */ 55842);



const _c0 = function () {
  return {
    "background-color": "copyright-bg",
    "color": "copyright",
    "text-align": "center",
    "padding": "20px",
    "position": "absolute",
    "bottom": "0",
    "width": "100%",
    "box-shadow": "0 -2px 5px rgba(0, 0, 0, 0.1)"
  };
};
class ClublexFooterComponent {
  constructor() {}
  ngOnInit() {}
  static #_ = this.ɵfac = function ClublexFooterComponent_Factory(t) {
    return new (t || ClublexFooterComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: ClublexFooterComponent,
    selectors: [["app-clublex-footer"]],
    decls: 23,
    vars: 2,
    consts: [[1, "resume", "copyright", "copyright-bg", 3, "ngStyle"], [1, "container"], [1, "row"], [1, "col-12"], [1, "text-center"], [1, "social-link", "link-horizontal"], [1, "justify-content-center"], ["href", "https://www.facebook.com/UMAR0061", 1, "copyright-text"], ["aria-hidden", "true", 1, "fa", "fa-facebook"], ["href", "https://www.linkedin.com/in/umar-rasheed/", 1, "copyright-text"], ["aria-hidden", "true", 1, "fa", "fa-linkedin"], ["href", "https://www.instagram.com/umar.rasheed61/", 1, "copyright-text"], ["aria-hidden", "true", 1, "fa", "fa-instagram"], [1, "m-l-auto", "center-para"], [1, "copyright-text", "text-center"], ["href", "https://www.linkedin.com/in/umar-rasheed/"]],
    template: function ClublexFooterComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "footer", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "ul", 6)(7, "li")(8, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "li")(11, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "li")(14, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 3)(17, "div", 13)(18, "h6", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "\u00A9 2024 portfolio powered by ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "Umar Rasheed");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "app-tap-to-top");
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](1, _c0));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgStyle, _shared_components_tap_to_top_tap_to_top_component__WEBPACK_IMPORTED_MODULE_0__.TapToTopComponent],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}


/***/ }),

/***/ 91627:
/*!***************************************************************************!*\
  !*** ./src/app/layouts/clublex/clublex-header/giftya-header.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ClublexHeaderComponent: () => (/* binding */ ClublexHeaderComponent)
/* harmony export */ });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations */ 12501);
/* harmony import */ var ng_animate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-animate */ 28063);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 27947);




class ClublexHeaderComponent {
  constructor() {}
  ngOnInit() {}
  static #_ = this.ɵfac = function ClublexHeaderComponent_Factory(t) {
    return new (t || ClublexHeaderComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: ClublexHeaderComponent,
    selectors: [["app-clublex-header"]],
    decls: 34,
    vars: 0,
    consts: [["id", "header", 1, "agency", "header"], [1, "agency", "bg"], [1, "container"], [1, "row"], [1, "col-md-6"], [1, "center-text"], [1, "header-text"], [1, "text-uppercase"], [1, "bold-text"], [1, "header-sub-text"], [1, "link-horizontal"], ["routerLink", "/resume", 1, "btn", "btn-default", "btn-gradient", "text-white"], [1, "set-abs", "abs-horizon-center", "girl-boy"], ["src", "assets/images/resume/clublax/clublax-1.png", "alt", "", "data-tilt", "", "data-tilt-max", "5", "data-tilt-perspective", "500", "data-tilt-speed", "400", 1, "img-fluid", 2, "width", "350px", "height", "auto"], [1, "plus-container", "plus-container8"], [1, "plus", "white"], [1, "plus-container"], [1, "plus"], [1, "plus-container", "plus-container2"], [1, "plus", "plus-medium"], [1, "plus-container", "plus-container3"], [1, "plus", "plus-small"], [1, "plus-container", "plus-container4"], [1, "plus-container", "plus-container5"]],
    template: function ClublexHeaderComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "div")(7, "div", 6)(8, "h1", 7)(9, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Check My");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Clublex APP");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9)(13, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "ClubLaxKeep track and see all the of the action live!! Tournament and showcase lacrosse games scored interactively and streamed to all.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 10)(16, "ul")(17, "li")(18, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Contact");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      }
    },
    dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLink],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"],
    data: {
      animation: [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.trigger)('fadeInRight', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.transition)('* => *', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.useAnimation)(ng_animate__WEBPACK_IMPORTED_MODULE_3__.fadeInTopRight, {
        params: {
          timing: 3,
          delay: 0
        }
      }))])]
    }
  });
}


/***/ }),

/***/ 96335:
/*!**********************************************************************!*\
  !*** ./src/app/layouts/clublex/clublex-nav/clublex-nav.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ClublexNavComponent: () => (/* binding */ ClublexNavComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _shared_components_navigation_menu_menu_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/components/navigation/menu/menu.component */ 93209);


class ClublexNavComponent {
  constructor() {}
  ngOnInit() {}
  static #_ = this.ɵfac = function ClublexNavComponent_Factory(t) {
    return new (t || ClublexNavComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: ClublexNavComponent,
    selectors: [["app-clublex-nav"]],
    decls: 8,
    vars: 0,
    consts: [[1, "resume", "loding-header", "nav-abs", "custom-scroll"], [1, "container"], [1, "row"], [1, "col"], ["href", "#", 1, "d-inline-block", "m-r-auto"], ["src", "assets/images/resume/logo.png", "alt", "", 1, "img-fluid", 2, "width", "100px"]],
    template: function ClublexNavComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "header", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "nav")(5, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "app-menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
      }
    },
    dependencies: [_shared_components_navigation_menu_menu_component__WEBPACK_IMPORTED_MODULE_0__.MenuComponent],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}


/***/ }),

/***/ 59138:
/*!**************************************************************************************!*\
  !*** ./src/app/layouts/clublex/clublex-testimonial/clublex-testimonial.component.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ClublexTestimonialComponent: () => (/* binding */ ClublexTestimonialComponent)
/* harmony export */ });
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper */ 58595);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var swiper_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! swiper/angular */ 29909);




function ClublexTestimonialComponent_11_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 13);
  }
  if (rf & 2) {
    const slide_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", slide_r1.img, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
  }
}
function ClublexTestimonialComponent_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, ClublexTestimonialComponent_11_ng_template_0_Template, 1, 1, "ng-template", 12);
  }
}
swiper__WEBPACK_IMPORTED_MODULE_0__["default"].use([swiper__WEBPACK_IMPORTED_MODULE_0__.EffectCards]);
class ClublexTestimonialComponent {
  constructor() {
    this.config = {
      effect: 'coverflow',
      loop: true,
      centeredSlides: true,
      slidesPerView: 3,
      keyboard: true,
      mousewheel: true,
      preventClicks: true,
      preventClicksPropagation: true,
      coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 1.43,
        slideShadows: true
      },
      breakpoints: {
        1199: {
          slidesPerView: 3,
          spaceBetween: -60
        },
        991: {
          slidesPerView: 4
        },
        767: {
          slidesPerView: 3
        },
        575: {
          slidesPerView: 2
        }
      },
      autoplay: {
        delay: 1000,
        disableOnInteraction: true
      },
      pagination: {
        el: '.swiper-pagination'
      }
    };
    this.slides = [{
      img: 'assets/images/resume/clublax/clublax-1.png'
    }, {
      img: 'assets/images/resume/clublax/clublax-2.png'
    }, {
      img: 'assets/images/resume/clublax/clublax-3.png'
    }];
  }
  ngOnInit() {}
  static #_ = this.ɵfac = function ClublexTestimonialComponent_Factory(t) {
    return new (t || ClublexTestimonialComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: ClublexTestimonialComponent,
    selectors: [["app-clublex-testimonial"]],
    decls: 13,
    vars: 4,
    consts: [["id", "screenshot", 1, "app1", "screenshot", "bg-light"], [1, "container"], [1, "row"], [1, "col-lg-6", "offset-lg-3", "col-md-8", "offset-md-2", "m-b-10"], [1, "title", "title1"], [1, "main-title"], [1, "text-white", "text-dark"], [1, "row", "set-relative"], [1, "col-12"], [1, "mySwiper", 3, "effect", "grabCursor", "config"], [4, "ngFor", "ngForOf"], [1, "set-abs", "screen-container"], ["swiperSlide", ""], ["alt", "", 1, "img-fluid", 3, "src"]],
    template: function ClublexTestimonialComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "h2", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Screen Shot");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 7)(9, "div", 8)(10, "swiper", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, ClublexTestimonialComponent_11_Template, 1, 0, null, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("effect", "cards")("grabCursor", true)("config", ctx.config);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.slides);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, swiper_angular__WEBPACK_IMPORTED_MODULE_3__.SwiperComponent, swiper_angular__WEBPACK_IMPORTED_MODULE_3__.SwiperSlideDirective],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}


/***/ }),

/***/ 14357:
/*!*******************************************************************************!*\
  !*** ./src/app/layouts/clublex/clublex-view-one/giftya-view-one.component.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ClublexViewOneComponent: () => (/* binding */ ClublexViewOneComponent)
/* harmony export */ });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ 12501);
/* harmony import */ var ng_animate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-animate */ 28063);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 61699);



class ClublexViewOneComponent {
  constructor() {}
  ngOnInit() {}
  static #_ = this.ɵfac = function ClublexViewOneComponent_Factory(t) {
    return new (t || ClublexViewOneComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: ClublexViewOneComponent,
    selectors: [["app-clublex-view-one"]],
    decls: 22,
    vars: 1,
    consts: [[1, "app2", "about", "format"], [1, "animated-bg"], [1, "container"], [1, "row"], [1, "col-sm-4", "counters", "set-height"], ["src", "assets/images/resume/work/clublax.png", "alt", "", 1, "img-fluid", "mobile1", 2, "width", "300px", "height", "auto"], [1, "col-sm-8", "counters"], [1, "abouts", "center-text"], [1, "format-head-text"], [1, "about-font-header", "font-secondary"], [1, "format-sub-text"], [1, "about-para"]],
    template: function ClublexViewOneComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i")(3, "i")(4, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2)(6, "div", 3)(7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6)(10, "div", 7)(11, "div")(12, "div", 8)(13, "h3", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "hello");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 10)(16, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@fadeInLeft", ctx.fadeInLeft);
      }
    },
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"],
    data: {
      animation: [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.trigger)('fadeInLeft', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.transition)('* => *', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.useAnimation)(ng_animate__WEBPACK_IMPORTED_MODULE_2__.fadeInLeft, {
        params: {
          timing: 5,
          delay: 3
        }
      }))])]
    }
  });
}


/***/ }),

/***/ 63547:
/*!********************************************************************************!*\
  !*** ./src/app/layouts/clublex/clublex-view-two/clublex-view-two.component.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ClublexViewTwoComponent: () => (/* binding */ ClublexViewTwoComponent)
/* harmony export */ });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ 12501);
/* harmony import */ var ng_animate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-animate */ 28063);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 61699);



class ClublexViewTwoComponent {
  constructor() {}
  ngOnInit() {}
  static #_ = this.ɵfac = function ClublexViewTwoComponent_Factory(t) {
    return new (t || ClublexViewTwoComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: ClublexViewTwoComponent,
    selectors: [["app-clublex-view-two"]],
    decls: 15,
    vars: 1,
    consts: [[1, "app2", "about", "format"], [1, "animated-bg"], [1, "container"], [1, "row"], [1, "col-sm-7", "counters"], [1, "abouts", "center-text"], [1, "format-sub-text"], [1, "about-para"], [1, "col-sm-5", "counters", "set-height"], ["src", "assets/images/resume/clublax/clublax-3.png", "alt", "", 1, "img-fluid", "mobile1", 2, "width", "300px", "height", "auto"]],
    template: function ClublexViewTwoComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i")(3, "i")(4, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2)(6, "div", 3)(7, "div", 4)(8, "div", 5)(9, "div")(10, "div", 6)(11, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "I Was the only person working on rewriting the app using react native native, iOS helping me understand the existing app flows. Integrated Socket client for real-time scoring. AWS Amplify Auth and Cognito Identity were used for user authentication. Social Login for Facebook and Google was also incorporated. Developed custom UI from scratch as per designs using class-based components. Git is used for version control management.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@fadeInRight", ctx.fadeInRight);
      }
    },
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"],
    data: {
      animation: [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.trigger)('fadeInRight', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.transition)('* => *', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.useAnimation)(ng_animate__WEBPACK_IMPORTED_MODULE_2__.fadeInRight, {
        // Set the duration to 5seconds and delay to 0seconds
        params: {
          timing: 5,
          delay: 4
        }
      }))])]
    }
  });
}


/***/ }),

/***/ 55152:
/*!******************************************************!*\
  !*** ./src/app/layouts/clublex/clublex.component.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ClublexComponent: () => (/* binding */ ClublexComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _shared_service_color_scss_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/service/color-scss.service */ 94342);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser */ 36480);
/* harmony import */ var _clublex_nav_clublex_nav_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./clublex-nav/clublex-nav.component */ 96335);
/* harmony import */ var _clublex_header_giftya_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./clublex-header/giftya-header.component */ 91627);
/* harmony import */ var _clublex_view_two_clublex_view_two_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./clublex-view-two/clublex-view-two.component */ 63547);
/* harmony import */ var _clublex_bmi_giftya_bmi_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./clublex-bmi/giftya-bmi.component */ 96777);
/* harmony import */ var _clublex_testimonial_clublex_testimonial_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./clublex-testimonial/clublex-testimonial.component */ 59138);
/* harmony import */ var _clublex_footer_clublex_footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./clublex-footer/clublex-footer.component */ 36553);










class ClublexComponent {
  constructor(colorPicker, route, title) {
    this.colorPicker = colorPicker;
    this.route = route;
    this.title = title;
  }
  ngOnInit() {
    this.colorPicker.setColorScheme('color-1');
    this.title.setTitle(this.route.snapshot.data['title']);
  }
  static #_ = this.ɵfac = function ClublexComponent_Factory(t) {
    return new (t || ClublexComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_shared_service_color_scss_service__WEBPACK_IMPORTED_MODULE_0__.ColorScssService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__.Title));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
    type: ClublexComponent,
    selectors: [["app-clublex"]],
    decls: 6,
    vars: 0,
    template: function ClublexComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "app-clublex-nav")(1, "app-clublex-header")(2, "app-clublex-bmi")(3, "app-clublex-view-two")(4, "app-clublex-testimonial")(5, "app-clublex-footer");
      }
    },
    dependencies: [_clublex_nav_clublex_nav_component__WEBPACK_IMPORTED_MODULE_1__.ClublexNavComponent, _clublex_header_giftya_header_component__WEBPACK_IMPORTED_MODULE_2__.ClublexHeaderComponent, _clublex_view_two_clublex_view_two_component__WEBPACK_IMPORTED_MODULE_3__.ClublexViewTwoComponent, _clublex_bmi_giftya_bmi_component__WEBPACK_IMPORTED_MODULE_4__.ClublexBMIComponent, _clublex_testimonial_clublex_testimonial_component__WEBPACK_IMPORTED_MODULE_5__.ClublexTestimonialComponent, _clublex_footer_clublex_footer_component__WEBPACK_IMPORTED_MODULE_6__.ClublexFooterComponent],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}


/***/ }),

/***/ 24637:
/*!*****************************************************************!*\
  !*** ./src/app/layouts/fert/fert-about/fert-about.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FertAboutComponent: () => (/* binding */ FertAboutComponent)
/* harmony export */ });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ 12501);
/* harmony import */ var ng_animate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-animate */ 28063);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 61699);



class FertAboutComponent {
  constructor() {}
  ngOnInit() {}
  static #_ = this.ɵfac = function FertAboutComponent_Factory(t) {
    return new (t || FertAboutComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: FertAboutComponent,
    selectors: [["app-fert-about"]],
    decls: 34,
    vars: 1,
    consts: [[1, "app2", "about", "format"], [1, "animated-bg"], [1, "container"], [1, "row"], [1, "col-sm-7", "counters"], [1, "abouts", "center-text"], [1, "format-small-text"], [1, "font-primary", "borders-before", "text-uppercase"], [1, "format-head-text"], [1, "about-font-header", "font-secondary"], [1, "format-sub-text"], [1, "about-para"], [1, "icon-collection"], [1, "about-icon"], ["href", "javascript:void(0)", 1, "center-content"], ["src", "assets/images/resume/icon/5.png", "alt", "", 1, "img-fluid"], ["src", "assets/images/resume/icon/6.png", "alt", "", 1, "img-fluid"], ["src", "assets/images/resume/icon/7.png", "alt", "", 1, "img-fluid"], [1, "btn", "btn-default", "btn-gradient", "m-t-50"], [1, "col-sm-5", "counters", "set-height"], ["src", "assets/images/resume/work/fert.png", "alt", "", 1, "img-fluid", "mobile1", 2, "width", "300px", "height", "auto"]],
    template: function FertAboutComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i")(3, "i")(4, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2)(6, "div", 3)(7, "div", 4)(8, "div", 5)(9, "div")(10, "div", 6)(11, "h6", 7)(12, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Sub Heading");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 8)(15, "h3", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Great Application Ever");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 10)(18, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "ul", 12)(21, "li", 13)(22, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "li", 13)(25, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "li", 13)(28, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "img", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "learn more");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "img", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@fadeInRight", ctx.fadeInRight);
      }
    },
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"],
    data: {
      animation: [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.trigger)('fadeInRight', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.transition)('* => *', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.useAnimation)(ng_animate__WEBPACK_IMPORTED_MODULE_2__.fadeInRight, {
        params: {
          timing: 5,
          delay: 2
        }
      }))])]
    }
  });
}


/***/ }),

/***/ 34793:
/*!*************************************************************!*\
  !*** ./src/app/layouts/fert/fert-bmi/fert-bmi.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FertBMIComponent: () => (/* binding */ FertBMIComponent)
/* harmony export */ });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ 12501);
/* harmony import */ var ng_animate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-animate */ 28063);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 61699);



class FertBMIComponent {
  constructor() {}
  ngOnInit() {}
  static #_ = this.ɵfac = function FertBMIComponent_Factory(t) {
    return new (t || FertBMIComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: FertBMIComponent,
    selectors: [["app-fert-bmi"]],
    decls: 34,
    vars: 1,
    consts: [[1, "app1", "download"], [1, "container"], [1, "row"], ["data-aos", "fade-right", "data-aos-duration", "1500", 1, "col-lg-5", "col-md-6", "hide-on-init"], [1, "center-content", "center-mobile"], ["src", "assets/images/resume/fert/fert-2.png", "alt", "", 1, "img-fluid", "width300"], [1, "col-lg-6", "offset-lg-1", "col-md-6"], [1, "center-text"], [1, "download-img", "d-flex"], [1, "set-relative"], ["src", "assets/images/resume/icon/download.png", "alt", "", 1, "download-icon", "img-fluid"], [1, "set-abs", "elipse", "center-abs"], ["src", "assets/images/resume/icon/Ellipse.png", "alt", ""], [1, "center-img-content", "m-l-15"], [1, "m-b-5"], [1, "information"], [1, "link-horizontal"], ["href", "", "target", "_blank", 1, "icon-btn"], ["aria-hidden", "true", 1, "fa", "fa-android", "center-content", "shadow"], [1, "text-center", "font-primary"], ["aria-hidden", "true", 1, "fa", "fa-apple", "center-content", "shadow"]],
    template: function FertBMIComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6)(7, "div", 7)(8, "div")(9, "div", 8)(10, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 13)(15, "h3", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "The Fert");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "download");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 15)(20, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor unt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud ercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt in culpa.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 16)(23, "ul")(24, "li")(25, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "i", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "h6", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "android");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "li")(30, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "i", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "h6", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "ios");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@fadeInLeft", ctx.fadeInLeft);
      }
    },
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"],
    data: {
      animation: [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.trigger)('fadeInLeft', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.transition)('* => *', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.useAnimation)(ng_animate__WEBPACK_IMPORTED_MODULE_2__.fadeInLeft, {
        params: {
          timing: 5,
          delay: 0
        }
      }))])]
    }
  });
}


/***/ }),

/***/ 75719:
/*!*******************************************************************!*\
  !*** ./src/app/layouts/fert/fert-footer/fert-footer.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FertFooterComponent: () => (/* binding */ FertFooterComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _shared_components_tap_to_top_tap_to_top_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/components/tap-to-top/tap-to-top.component */ 55842);



const _c0 = function () {
  return {
    "background-color": "copyright-bg",
    "color": "copyright",
    "text-align": "center",
    "padding": "20px",
    "position": "absolute",
    "bottom": "0",
    "width": "100%",
    "box-shadow": "0 -2px 5px rgba(0, 0, 0, 0.1)"
  };
};
class FertFooterComponent {
  constructor() {}
  ngOnInit() {}
  static #_ = this.ɵfac = function FertFooterComponent_Factory(t) {
    return new (t || FertFooterComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: FertFooterComponent,
    selectors: [["app-fert-footer"]],
    decls: 23,
    vars: 2,
    consts: [[1, "resume", "copyright", "copyright-bg", 3, "ngStyle"], [1, "container"], [1, "row"], [1, "col-12"], [1, "text-center"], [1, "social-link", "link-horizontal"], [1, "justify-content-center"], ["href", "https://www.facebook.com/UMAR0061", 1, "copyright-text"], ["aria-hidden", "true", 1, "fa", "fa-facebook"], ["href", "https://www.linkedin.com/in/umar-rasheed/", 1, "copyright-text"], ["aria-hidden", "true", 1, "fa", "fa-linkedin"], ["href", "https://www.instagram.com/umar.rasheed61/", 1, "copyright-text"], ["aria-hidden", "true", 1, "fa", "fa-instagram"], [1, "m-l-auto", "center-para"], [1, "copyright-text", "text-center"], ["href", "https://www.linkedin.com/in/umar-rasheed/"]],
    template: function FertFooterComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "footer", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "ul", 6)(7, "li")(8, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "li")(11, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "li")(14, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 3)(17, "div", 13)(18, "h6", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "\u00A9 2024 portfolio powered by ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "Umar Rasheed");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "app-tap-to-top");
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](1, _c0));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgStyle, _shared_components_tap_to_top_tap_to_top_component__WEBPACK_IMPORTED_MODULE_0__.TapToTopComponent],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}


/***/ }),

/***/ 52305:
/*!*******************************************************************!*\
  !*** ./src/app/layouts/fert/fert-header/fert-header.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FertHeaderComponent: () => (/* binding */ FertHeaderComponent)
/* harmony export */ });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations */ 12501);
/* harmony import */ var ng_animate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-animate */ 28063);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 27947);




class FertHeaderComponent {
  constructor() {}
  ngOnInit() {}
  static #_ = this.ɵfac = function FertHeaderComponent_Factory(t) {
    return new (t || FertHeaderComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: FertHeaderComponent,
    selectors: [["app-fert-header"]],
    decls: 34,
    vars: 0,
    consts: [["id", "header", 1, "agency", "header"], [1, "agency", "bg"], [1, "container"], [1, "row"], [1, "col-md-6"], [1, "center-text"], [1, "header-text"], [1, "text-uppercase"], [1, "bold-text"], [1, "header-sub-text"], [1, "link-horizontal"], ["routerLink", "/resume", 1, "btn", "btn-default", "btn-gradient", "text-white"], [1, "set-abs", "abs-horizon-center", "girl-boy"], ["src", "assets/images/resume/fert/fert-1.png", "alt", "", "data-tilt", "", "data-tilt-max", "5", "data-tilt-perspective", "500", "data-tilt-speed", "400", 1, "img-fluid", 2, "width", "350px", "height", "auto"], [1, "plus-container", "plus-container8"], [1, "plus", "white"], [1, "plus-container"], [1, "plus"], [1, "plus-container", "plus-container2"], [1, "plus", "plus-medium"], [1, "plus-container", "plus-container3"], [1, "plus", "plus-small"], [1, "plus-container", "plus-container4"], [1, "plus-container", "plus-container5"]],
    template: function FertHeaderComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "div")(7, "div", 6)(8, "h1", 7)(9, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Check My");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Fert APP");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9)(13, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi quod vel voluptatum, id nostrum provident itaque odio voluptatem. Cumque aspernatur culpa et. Laudantium quisquam illo numquam eveniet, ipsum debitis voluptatum.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 10)(16, "ul")(17, "li")(18, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Contact");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      }
    },
    dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLink],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"],
    data: {
      animation: [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.trigger)('fadeInRight', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.transition)('* => *', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.useAnimation)(ng_animate__WEBPACK_IMPORTED_MODULE_3__.fadeInTopRight, {
        params: {
          timing: 3,
          delay: 0
        }
      }))])]
    }
  });
}


/***/ }),

/***/ 16885:
/*!*************************************************************!*\
  !*** ./src/app/layouts/fert/fert-nav/fert-nav.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FertNavComponent: () => (/* binding */ FertNavComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _shared_components_navigation_menu_menu_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/components/navigation/menu/menu.component */ 93209);


class FertNavComponent {
  constructor() {}
  ngOnInit() {}
  static #_ = this.ɵfac = function FertNavComponent_Factory(t) {
    return new (t || FertNavComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: FertNavComponent,
    selectors: [["app-fert-nav"]],
    decls: 8,
    vars: 0,
    consts: [[1, "resume", "loding-header", "nav-abs", "custom-scroll"], [1, "container"], [1, "row"], [1, "col"], ["href", "#", 1, "d-inline-block", "m-r-auto"], ["src", "assets/images/resume/logo.png", "alt", "", 1, "img-fluid", 2, "width", "100px"]],
    template: function FertNavComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "header", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "nav")(5, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "app-menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
      }
    },
    dependencies: [_shared_components_navigation_menu_menu_component__WEBPACK_IMPORTED_MODULE_0__.MenuComponent],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}


/***/ }),

/***/ 43306:
/*!*****************************************************************************!*\
  !*** ./src/app/layouts/fert/fert-testimonial/fert-testimonial.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FertTestimonialComponent: () => (/* binding */ FertTestimonialComponent)
/* harmony export */ });
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper */ 58595);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var swiper_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! swiper/angular */ 29909);




function FertTestimonialComponent_11_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 13);
  }
  if (rf & 2) {
    const slide_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", slide_r1.img, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
  }
}
function FertTestimonialComponent_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, FertTestimonialComponent_11_ng_template_0_Template, 1, 1, "ng-template", 12);
  }
}
swiper__WEBPACK_IMPORTED_MODULE_0__["default"].use([swiper__WEBPACK_IMPORTED_MODULE_0__.EffectCards]);
class FertTestimonialComponent {
  constructor() {
    this.config = {
      effect: 'coverflow',
      loop: true,
      centeredSlides: true,
      slidesPerView: 3,
      keyboard: true,
      mousewheel: true,
      preventClicks: true,
      preventClicksPropagation: true,
      coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 1.43,
        slideShadows: true
      },
      breakpoints: {
        1199: {
          slidesPerView: 3,
          spaceBetween: -60
        },
        991: {
          slidesPerView: 4
        },
        767: {
          slidesPerView: 3
        },
        575: {
          slidesPerView: 2
        }
      },
      autoplay: {
        delay: 1000,
        disableOnInteraction: true
      },
      pagination: {
        el: '.swiper-pagination'
      }
    };
    this.slides = [{
      img: 'assets/images/resume/fert/fert-1.png'
    }, {
      img: 'assets/images/resume/fert/fert-2.png'
    }, {
      img: 'assets/images/resume/fert/fert-3.png'
    }];
  }
  ngOnInit() {}
  static #_ = this.ɵfac = function FertTestimonialComponent_Factory(t) {
    return new (t || FertTestimonialComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: FertTestimonialComponent,
    selectors: [["app-fert-testimonial"]],
    decls: 13,
    vars: 4,
    consts: [["id", "screenshot", 1, "app1", "screenshot", "bg-light"], [1, "container"], [1, "row"], [1, "col-lg-6", "offset-lg-3", "col-md-8", "offset-md-2", "m-b-10"], [1, "title", "title1"], [1, "main-title"], [1, "text-white", "text-dark"], [1, "row", "set-relative"], [1, "col-12"], [1, "mySwiper", 3, "effect", "grabCursor", "config"], [4, "ngFor", "ngForOf"], [1, "set-abs", "screen-container"], ["swiperSlide", ""], ["alt", "", 1, "img-fluid", 3, "src"]],
    template: function FertTestimonialComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "h2", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Screen Shot");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 7)(9, "div", 8)(10, "swiper", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, FertTestimonialComponent_11_Template, 1, 0, null, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("effect", "cards")("grabCursor", true)("config", ctx.config);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.slides);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, swiper_angular__WEBPACK_IMPORTED_MODULE_3__.SwiperComponent, swiper_angular__WEBPACK_IMPORTED_MODULE_3__.SwiperSlideDirective],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}


/***/ }),

/***/ 13944:
/*!***********************************************************************!*\
  !*** ./src/app/layouts/fert/fert-view-one/fert-view-one.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FertViewOneComponent: () => (/* binding */ FertViewOneComponent)
/* harmony export */ });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ 12501);
/* harmony import */ var ng_animate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-animate */ 28063);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 61699);



class FertViewOneComponent {
  constructor() {}
  ngOnInit() {}
  static #_ = this.ɵfac = function FertViewOneComponent_Factory(t) {
    return new (t || FertViewOneComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: FertViewOneComponent,
    selectors: [["app-fert-view-one"]],
    decls: 22,
    vars: 1,
    consts: [[1, "app2", "about", "format"], [1, "animated-bg"], [1, "container"], [1, "row"], [1, "col-sm-4", "counters", "set-height"], ["src", "assets/images/resume/work/fert.png", "alt", "", 1, "img-fluid", "mobile1", 2, "width", "300px", "height", "auto"], [1, "col-sm-8", "counters"], [1, "abouts", "center-text"], [1, "format-head-text"], [1, "about-font-header", "font-secondary"], [1, "format-sub-text"], [1, "about-para"]],
    template: function FertViewOneComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i")(3, "i")(4, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2)(6, "div", 3)(7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6)(10, "div", 7)(11, "div")(12, "div", 8)(13, "h3", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Heading");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 10)(16, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@fadeInLeft", ctx.fadeInLeft);
      }
    },
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"],
    data: {
      animation: [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.trigger)('fadeInLeft', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.transition)('* => *', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.useAnimation)(ng_animate__WEBPACK_IMPORTED_MODULE_2__.fadeInLeft, {
        params: {
          timing: 5,
          delay: 3
        }
      }))])]
    }
  });
}


/***/ }),

/***/ 53002:
/*!***********************************************************************!*\
  !*** ./src/app/layouts/fert/fert-view-two/fert-view-two.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FertViewTwoComponent: () => (/* binding */ FertViewTwoComponent)
/* harmony export */ });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ 12501);
/* harmony import */ var ng_animate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-animate */ 28063);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 61699);



class FertViewTwoComponent {
  constructor() {}
  ngOnInit() {}
  static #_ = this.ɵfac = function FertViewTwoComponent_Factory(t) {
    return new (t || FertViewTwoComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: FertViewTwoComponent,
    selectors: [["app-fert-view-two"]],
    decls: 22,
    vars: 1,
    consts: [[1, "app2", "about", "format"], [1, "animated-bg"], [1, "container"], [1, "row"], [1, "col-sm-7", "counters"], [1, "abouts", "center-text"], [1, "format-head-text"], [1, "about-font-header", "font-secondary"], [1, "format-sub-text"], [1, "about-para"], [1, "col-sm-5", "counters", "set-height"], ["src", "assets/images/resume/fert/fert-3.png", "alt", "", 1, "img-fluid", "mobile1", 2, "width", "300px", "height", "auto"]],
    template: function FertViewTwoComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i")(3, "i")(4, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2)(6, "div", 3)(7, "div", 4)(8, "div", 5)(9, "div")(10, "div", 6)(11, "h3", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Heading");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 8)(14, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@fadeInRight", ctx.fadeInRight);
      }
    },
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"],
    data: {
      animation: [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.trigger)('fadeInRight', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.transition)('* => *', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.useAnimation)(ng_animate__WEBPACK_IMPORTED_MODULE_2__.fadeInRight, {
        params: {
          timing: 5,
          delay: 4
        }
      }))])]
    }
  });
}


/***/ }),

/***/ 30020:
/*!************************************************!*\
  !*** ./src/app/layouts/fert/fert.component.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FertComponent: () => (/* binding */ FertComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _shared_service_color_scss_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/service/color-scss.service */ 94342);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ 36480);
/* harmony import */ var _fert_testimonial_fert_testimonial_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fert-testimonial/fert-testimonial.component */ 43306);
/* harmony import */ var _fert_footer_fert_footer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fert-footer/fert-footer.component */ 75719);






class FertComponent {
  constructor(colorPicker, route, title) {
    this.colorPicker = colorPicker;
    this.route = route;
    this.title = title;
  }
  ngOnInit() {
    this.colorPicker.setColorScheme('color-1');
    this.title.setTitle(this.route.snapshot.data['title']);
  }
  static #_ = this.ɵfac = function FertComponent_Factory(t) {
    return new (t || FertComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_shared_service_color_scss_service__WEBPACK_IMPORTED_MODULE_0__.ColorScssService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__.Title));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: FertComponent,
    selectors: [["app-fert"]],
    decls: 2,
    vars: 0,
    template: function FertComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-fert-testimonial")(1, "app-fert-footer");
      }
    },
    dependencies: [_fert_testimonial_fert_testimonial_component__WEBPACK_IMPORTED_MODULE_1__.FertTestimonialComponent, _fert_footer_fert_footer_component__WEBPACK_IMPORTED_MODULE_2__.FertFooterComponent],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}


/***/ }),

/***/ 49667:
/*!***********************************************************************************!*\
  !*** ./src/app/layouts/giftya-web/giftya-web-about/giftya-web-about.component.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GiftyaWebAboutComponent: () => (/* binding */ GiftyaWebAboutComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 26575);


function GiftyaWebAboutComponent_div_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div")(1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 16)(4, "h5", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const data_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", data_r1.img, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r1.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r1.description);
  }
}
class GiftyaWebAboutComponent {
  constructor() {
    this.features = [{
      img: 'assets/images/resume/icon/1.png',
      title: 'Clean Design',
      description: 'Lorem Ipsum is simply dummy text of the printing and industry.'
    }, {
      img: 'assets/images/resume/icon/1.png',
      title: 'Dedicated Support',
      description: 'Lorem Ipsum is simply dummy text of the printing and industry.'
    }, {
      img: 'assets/images/resume/icon/1.png',
      title: 'Easy Customiable',
      description: 'Lorem Ipsum is simply dummy text of the printing and industry.'
    }, {
      img: 'assets/images/resume/icon/1.png',
      title: 'Multiple Demo',
      description: 'Lorem Ipsum is simply dummy text of the printing and industry.'
    }];
  }
  ngOnInit() {}
  static #_ = this.ɵfac = function GiftyaWebAboutComponent_Factory(t) {
    return new (t || GiftyaWebAboutComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: GiftyaWebAboutComponent,
    selectors: [["app-giftya-web-about"]],
    decls: 17,
    vars: 1,
    consts: [["id", "feaure", 1, "saas2", "feature", "booking"], [1, "container"], [1, "row"], [1, "col-md-10", "offset-md-1"], [1, "title"], [1, "main-title"], [1, "sub-title"], [1, "sub-title-para"], [1, "col-xl-8", "col-md-7"], [1, "center-text", "justify-content-center"], [1, "image-container"], ["src", "assets/images/resume/giftya-web/giftya-web-2.png", "alt", "", 1, "img-fluid", "advance-feature-img"], [1, "col-xl-4", "col-md-5"], [4, "ngFor", "ngForOf"], [1, "center-content", "justify-content-start"], ["alt", "", 1, "img-fluid", 3, "src"], [1, "feature-content"], [1, "feature-head"], [1, "feature-para"]],
    template: function GiftyaWebAboutComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Heading");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6)(9, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "We believe we have created the most efficient SaaS landing page for your users. Landing page with features that will convince you to use it for your SaaS business.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8)(12, "div", 9)(13, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, GiftyaWebAboutComponent_div_16_Template, 8, 3, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.features);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}


/***/ }),

/***/ 41444:
/*!***************************************************************************************!*\
  !*** ./src/app/layouts/giftya-web/giftya-web-feature/giftya-web-feature.component.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GiftyaWebFeatureComponent: () => (/* binding */ GiftyaWebFeatureComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 26575);


function GiftyaWebFeatureComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10)(1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div")(4, "h4", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const data_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r1.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r1.description);
  }
}
class GiftyaWebFeatureComponent {
  constructor() {
    this.business = [{
      title: 'First Problem',
      description: 'Lorem Ipsum is simply dummy text of the print- ing and typesetting industry.'
    }, {
      title: 'Second Problem',
      description: 'Lorem Ipsum is simply dummy text of the print- ing and typesetting industry.'
    }, {
      title: 'Third Problem',
      description: 'Lorem Ipsum is simply dummy text of the print- ing and typesetting industry.'
    }];
  }
  ngOnInit() {}
  static #_ = this.ɵfac = function GiftyaWebFeatureComponent_Factory(t) {
    return new (t || GiftyaWebFeatureComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: GiftyaWebFeatureComponent,
    selectors: [["app-giftya-web-feature"]],
    decls: 11,
    vars: 1,
    consts: [[1, "saas2", "bg-gradient", "quick-sol"], [1, "container", "set-center-div"], [1, "row"], [1, "col-lg-6"], [1, "offers-container"], [1, "text-white", "offer-heading-text"], [1, "bottom-border"], ["class", "offers-content", 4, "ngFor", "ngForOf"], [1, "center-text", "side-img"], ["alt", "", "src", "assets/images/resume/giftya-web/giftya-web-3.jpg", "data-tilt", "", "data-tilt-max", "3", "data-tilt-speed", "400", "data-tilt-perspective", "500", 1, "img-fluid"], [1, "offers-content"], [1, "d-flex"], ["aria-hidden", "true", 1, "fa", "fa-check-circle"], [1, "offer-main-text", "text-white"], [1, "offer-sub-text", "text-white"]],
    template: function GiftyaWebFeatureComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "h3", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "problem solve heading");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, GiftyaWebFeatureComponent_div_8_Template, 8, 2, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.business);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}


/***/ }),

/***/ 47249:
/*!*************************************************************************************!*\
  !*** ./src/app/layouts/giftya-web/giftya-web-footer/giftya-web-footer.component.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GiftyaWebFooterComponent: () => (/* binding */ GiftyaWebFooterComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _shared_components_tap_to_top_tap_to_top_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/components/tap-to-top/tap-to-top.component */ 55842);



const _c0 = function () {
  return {
    "background-color": "copyright-bg",
    "color": "copyright",
    "text-align": "center",
    "padding": "20px",
    "position": "absolute",
    "bottom": "0",
    "width": "100%",
    "box-shadow": "0 -2px 5px rgba(0, 0, 0, 0.1)"
  };
};
class GiftyaWebFooterComponent {
  constructor() {}
  ngOnInit() {}
  static #_ = this.ɵfac = function GiftyaWebFooterComponent_Factory(t) {
    return new (t || GiftyaWebFooterComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: GiftyaWebFooterComponent,
    selectors: [["app-giftya-web-footer"]],
    decls: 23,
    vars: 2,
    consts: [[1, "resume", "copyright", "copyright-bg", 3, "ngStyle"], [1, "container"], [1, "row"], [1, "col-12"], [1, "text-center"], [1, "social-link", "link-horizontal"], [1, "justify-content-center"], ["href", "https://www.facebook.com/UMAR0061", 1, "copyright-text"], ["aria-hidden", "true", 1, "fa", "fa-facebook"], ["href", "https://www.linkedin.com/in/umar-rasheed/", 1, "copyright-text"], ["aria-hidden", "true", 1, "fa", "fa-linkedin"], ["href", "https://www.instagram.com/umar.rasheed61/", 1, "copyright-text"], ["aria-hidden", "true", 1, "fa", "fa-instagram"], [1, "m-l-auto", "center-para"], [1, "copyright-text", "text-center"], ["href", "https://www.linkedin.com/in/umar-rasheed/"]],
    template: function GiftyaWebFooterComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "footer", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "ul", 6)(7, "li")(8, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "li")(11, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "li")(14, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 3)(17, "div", 13)(18, "h6", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "\u00A9 2024 portfolio powered by ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "Umar Rasheed");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "app-tap-to-top");
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](1, _c0));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgStyle, _shared_components_tap_to_top_tap_to_top_component__WEBPACK_IMPORTED_MODULE_0__.TapToTopComponent],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}


/***/ }),

/***/ 71427:
/*!*************************************************************************************!*\
  !*** ./src/app/layouts/giftya-web/giftya-web-header/giftya-web-header.component.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GiftyaWebHeaderComponent: () => (/* binding */ GiftyaWebHeaderComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 61699);

class GiftyaWebHeaderComponent {
  constructor() {}
  ngOnInit() {}
  static #_ = this.ɵfac = function GiftyaWebHeaderComponent_Factory(t) {
    return new (t || GiftyaWebHeaderComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: GiftyaWebHeaderComponent,
    selectors: [["app-giftya-web-header"]],
    decls: 34,
    vars: 0,
    consts: [["id", "header", 1, "agency", "header"], [1, "agency", "bg"], [1, "container"], [1, "row"], [1, "col-md-6"], [1, "center-text"], [1, "header-text"], [1, "text-uppercase"], [1, "bold-text"], [1, "header-sub-text"], [1, "link-horizontal"], [1, "btn", "btn-default", "btn-gradient", "text-white"], [1, "set-abs", "abs-horizon-center", "girl-boy"], ["src", "assets/images/resume/giftya-web/giftya-web-1.png", "alt", "", "data-tilt", "", "data-tilt-max", "5", "data-tilt-perspective", "500", "data-tilt-speed", "400", 1, "img-fluid", "width600"], [1, "plus-container", "plus-container8"], [1, "plus", "white"], [1, "plus-container"], [1, "plus"], [1, "plus-container", "plus-container2"], [1, "plus", "plus-medium"], [1, "plus-container", "plus-container3"], [1, "plus", "plus-small"], [1, "plus-container", "plus-container4"], [1, "plus-container", "plus-container5"]],
    template: function GiftyaWebHeaderComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "div")(7, "div", 6)(8, "h1", 7)(9, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Check My");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Giftya Web");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9)(13, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi quod vel voluptatum, id nostrum provident itaque odio voluptatem. Cumque aspernatur culpa et. Laudantium quisquam illo numquam eveniet, ipsum debitis voluptatum.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 10)(16, "ul")(17, "li")(18, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Contact");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      }
    },
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}


/***/ }),

/***/ 98621:
/*!*******************************************************************************!*\
  !*** ./src/app/layouts/giftya-web/giftya-web-nav/giftya-web-nav.component.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GiftyaWebNavComponent: () => (/* binding */ GiftyaWebNavComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _shared_components_navigation_menu_menu_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/components/navigation/menu/menu.component */ 93209);


class GiftyaWebNavComponent {
  constructor() {}
  ngOnInit() {}
  static #_ = this.ɵfac = function GiftyaWebNavComponent_Factory(t) {
    return new (t || GiftyaWebNavComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: GiftyaWebNavComponent,
    selectors: [["app-giftya-web-nav"]],
    decls: 8,
    vars: 0,
    consts: [[1, "resume", "loding-header", "nav-abs", "custom-scroll"], [1, "container"], [1, "row"], [1, "col"], ["href", "#", 1, "d-inline-block", "m-r-auto"], ["src", "assets/images/resume/logo.png", "alt", "", 1, "img-fluid", 2, "width", "100px"]],
    template: function GiftyaWebNavComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "header", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "nav")(5, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "app-menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
      }
    },
    dependencies: [_shared_components_navigation_menu_menu_component__WEBPACK_IMPORTED_MODULE_0__.MenuComponent],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}


/***/ }),

/***/ 73539:
/*!***********************************************************************************************!*\
  !*** ./src/app/layouts/giftya-web/giftya-web-screenshots/giftya-web-screenshots.component.ts ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GiftyaWebScreenshotsComponent: () => (/* binding */ GiftyaWebScreenshotsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-owl-carousel-o */ 99436);



function GiftyaWebScreenshotsComponent_ng_container_11_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 12);
  }
  if (rf & 2) {
    const screenshot_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", screenshot_r1.img, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
  }
}
function GiftyaWebScreenshotsComponent_ng_container_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, GiftyaWebScreenshotsComponent_ng_container_11_ng_template_1_Template, 1, 1, "ng-template", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
}
class GiftyaWebScreenshotsComponent {
  constructor() {
    this.screenshots = [{
      img: "assets/images/resume/giftya-web/giftya-web-4.png"
    }, {
      img: "assets/images/resume/giftya-web/giftya-web-5.png"
    }, {
      img: "assets/images/resume/giftya-web/giftya-web-6.png"
    }, {
      img: "assets/images/resume/giftya-web/giftya-web-7.png"
    }, {
      img: "assets/images/resume/giftya-web/giftya-web-8.png"
    }, {
      img: "assets/images/resume/giftya-web/giftya-web-9.png"
    }];
    this.screenshotscarouselOptions = {
      items: 3,
      margin: 0,
      autoHeight: true,
      nav: false,
      autoplay: true,
      center: true,
      slideSpeed: 300,
      paginationSpeed: 400,
      dots: true,
      loop: true,
      responsive: {
        0: {
          items: 1
        },
        992: {
          items: 3
        }
      }
    };
  }
  ngOnInit() {}
  static #_ = this.ɵfac = function GiftyaWebScreenshotsComponent_Factory(t) {
    return new (t || GiftyaWebScreenshotsComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: GiftyaWebScreenshotsComponent,
    selectors: [["app-giftya-web-screenshots"]],
    decls: 12,
    vars: 2,
    consts: [["id", "screenshot", 1, "saas2", "laptop-slider", "bg-light"], [1, "container"], [1, "row"], [1, "col-md-10", "offset-md-1"], [1, "title"], [1, "main-title"], [1, "text-white", "text-dark"], [1, "container-fluid"], [1, "slider-container"], [1, "trainers-slider", 3, "options"], [4, "ngFor", "ngForOf"], ["carouselSlide", "", "class", "item"], ["alt", "", 1, "img-fluid", 3, "src"]],
    template: function GiftyaWebScreenshotsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "h2", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "screen shot");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7)(9, "div", 8)(10, "owl-carousel-o", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, GiftyaWebScreenshotsComponent_ng_container_11_Template, 2, 0, "ng-container", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx.screenshotscarouselOptions);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.screenshots);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_2__.CarouselComponent, ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_2__.CarouselSlideDirective],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}


/***/ }),

/***/ 13268:
/*!************************************************************!*\
  !*** ./src/app/layouts/giftya-web/giftya-web.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GiftyaWebComponent: () => (/* binding */ GiftyaWebComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ 36480);
/* harmony import */ var _shared_service_color_scss_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/service/color-scss.service */ 94342);
/* harmony import */ var _giftya_web_screenshots_giftya_web_screenshots_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./giftya-web-screenshots/giftya-web-screenshots.component */ 73539);
/* harmony import */ var _giftya_web_footer_giftya_web_footer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./giftya-web-footer/giftya-web-footer.component */ 47249);






class GiftyaWebComponent {
  constructor(route, title, colorPicker) {
    this.route = route;
    this.title = title;
    this.colorPicker = colorPicker;
  }
  ngOnInit() {
    this.title.setTitle(this.route.snapshot.data['title']);
    this.colorPicker.setColorScheme('color-1');
  }
  static #_ = this.ɵfac = function GiftyaWebComponent_Factory(t) {
    return new (t || GiftyaWebComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__.Title), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_shared_service_color_scss_service__WEBPACK_IMPORTED_MODULE_0__.ColorScssService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: GiftyaWebComponent,
    selectors: [["app-giftya-web"]],
    decls: 2,
    vars: 0,
    template: function GiftyaWebComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-giftya-web-screenshots")(1, "app-giftya-web-footer");
      }
    },
    dependencies: [_giftya_web_screenshots_giftya_web_screenshots_component__WEBPACK_IMPORTED_MODULE_1__.GiftyaWebScreenshotsComponent, _giftya_web_footer_giftya_web_footer_component__WEBPACK_IMPORTED_MODULE_2__.GiftyaWebFooterComponent],
    styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"],
    encapsulation: 2
  });
}


/***/ }),

/***/ 88571:
/*!***********************************************************************!*\
  !*** ./src/app/layouts/giftya/giftya-about/giftya-about.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GiftyaAboutComponent: () => (/* binding */ GiftyaAboutComponent)
/* harmony export */ });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ 12501);
/* harmony import */ var ng_animate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-animate */ 28063);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 61699);



class GiftyaAboutComponent {
  constructor() {}
  ngOnInit() {}
  static #_ = this.ɵfac = function GiftyaAboutComponent_Factory(t) {
    return new (t || GiftyaAboutComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: GiftyaAboutComponent,
    selectors: [["app-giftya-about"]],
    decls: 15,
    vars: 1,
    consts: [[1, "app2", "about", "format"], [1, "animated-bg"], [1, "container"], [1, "row"], [1, "col-sm-7", "counters"], [1, "abouts", "center-text"], [1, "format-sub-text"], [1, "about-para"], [1, "col-sm-5", "counters", "set-height"], ["src", "assets/images/resume/gitfya/giftya-2.png", "alt", "", 1, "img-fluid", "mobile1", 2, "width", "300px", "height", "auto"]],
    template: function GiftyaAboutComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i")(3, "i")(4, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2)(6, "div", 3)(7, "div", 4)(8, "div", 5)(9, "div")(10, "div", 6)(11, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Developing mobile apps with React Native. Using GIT for version control management. Using Redux saga for state management and async operations. Afterward, updated API integration with react query. We used typescript for GiftYa app development. I added social logins like Facebook, Google, and Apple. I implemented Stripe, Google Pay, Apple Pay, and PayPal. We're also introducing Amazon Pay. User can use these payment methods to buy gifts for their loved ones. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@fadeInRight", ctx.fadeInRight);
      }
    },
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"],
    data: {
      animation: [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.trigger)('fadeInRight', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.transition)('* => *', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.useAnimation)(ng_animate__WEBPACK_IMPORTED_MODULE_2__.fadeInRight, {
        params: {
          timing: 5,
          delay: 2
        }
      }))])]
    }
  });
}


/***/ }),

/***/ 2219:
/*!*******************************************************************!*\
  !*** ./src/app/layouts/giftya/giftya-bmi/giftya-bmi.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GiftyaBMIComponent: () => (/* binding */ GiftyaBMIComponent)
/* harmony export */ });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ 12501);
/* harmony import */ var ng_animate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-animate */ 28063);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 61699);



class GiftyaBMIComponent {
  constructor() {}
  ngOnInit() {}
  static #_ = this.ɵfac = function GiftyaBMIComponent_Factory(t) {
    return new (t || GiftyaBMIComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: GiftyaBMIComponent,
    selectors: [["app-giftya-bmi"]],
    decls: 34,
    vars: 1,
    consts: [[1, "app1", "download"], [1, "container"], [1, "row"], ["data-aos", "fade-right", "data-aos-duration", "1500", 1, "col-lg-5", "col-md-6", "hide-on-init"], [1, "center-content", "center-mobile"], ["src", "assets/images/resume/gitfya/giftya-3.png", "alt", "", 1, "img-fluid", "width300"], [1, "col-lg-6", "offset-lg-1", "col-md-6"], [1, "center-text"], [1, "download-img", "d-flex"], [1, "set-relative"], ["src", "assets/images/resume/icon/download.png", "alt", "", 1, "download-icon", "img-fluid"], [1, "set-abs", "elipse", "center-abs"], ["src", "assets/images/resume/icon/Ellipse.png", "alt", ""], [1, "center-img-content", "m-l-15"], [1, "m-b-5"], [1, "information"], [1, "link-horizontal"], ["href", "https://play.google.com/store/apps/details?id=com.wolfe.giftya", "target", "_blank", 1, "icon-btn"], ["aria-hidden", "true", 1, "fa", "fa-android", "center-content", "shadow"], [1, "text-center", "font-primary"], ["href", "https://apps.apple.com/us/app/giftya-send-gift-cards/id1205973805", "target", "_blank", 1, "icon-btn"], ["aria-hidden", "true", 1, "fa", "fa-apple", "center-content", "shadow"]],
    template: function GiftyaBMIComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6)(7, "div", 7)(8, "div")(9, "div", 8)(10, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 13)(15, "h3", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "The giftya");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "download");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 15)(20, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "I worked on the mobile app project, from design to development and releasing the apps to the Apple App Store and Google Play Store. We were a team of eight persons working on the GiftYa project two mobile app developers two website developers and two backend developers one product manager, one product designer.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 16)(23, "ul")(24, "li")(25, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "i", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "h6", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "android");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "li")(30, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "i", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "h6", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "ios");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@fadeInLeft", ctx.fadeInLeft);
      }
    },
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"],
    data: {
      animation: [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.trigger)('fadeInLeft', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.transition)('* => *', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.useAnimation)(ng_animate__WEBPACK_IMPORTED_MODULE_2__.fadeInLeft, {
        // Set the duration to 5seconds and delay to 0seconds
        params: {
          timing: 5,
          delay: 0
        }
      }))])]
    }
  });
}


/***/ }),

/***/ 35144:
/*!*************************************************************************!*\
  !*** ./src/app/layouts/giftya/giftya-footer/giftya-footer.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GiftyaFooterComponent: () => (/* binding */ GiftyaFooterComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _shared_components_tap_to_top_tap_to_top_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/components/tap-to-top/tap-to-top.component */ 55842);



const _c0 = function () {
  return {
    "background-color": "copyright-bg",
    "color": "copyright",
    "text-align": "center",
    "padding": "20px",
    "position": "absolute",
    "bottom": "0",
    "width": "100%",
    "box-shadow": "0 -2px 5px rgba(0, 0, 0, 0.1)"
  };
};
class GiftyaFooterComponent {
  constructor() {}
  ngOnInit() {}
  static #_ = this.ɵfac = function GiftyaFooterComponent_Factory(t) {
    return new (t || GiftyaFooterComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: GiftyaFooterComponent,
    selectors: [["app-giftya-footer"]],
    decls: 23,
    vars: 2,
    consts: [[1, "resume", "copyright", "copyright-bg", 3, "ngStyle"], [1, "container"], [1, "row"], [1, "col-12"], [1, "text-center"], [1, "social-link", "link-horizontal"], [1, "justify-content-center"], ["href", "https://www.facebook.com/UMAR0061", 1, "copyright-text"], ["aria-hidden", "true", 1, "fa", "fa-facebook"], ["href", "https://www.linkedin.com/in/umar-rasheed/", 1, "copyright-text"], ["aria-hidden", "true", 1, "fa", "fa-linkedin"], ["href", "https://www.instagram.com/umar.rasheed61/", 1, "copyright-text"], ["aria-hidden", "true", 1, "fa", "fa-instagram"], [1, "m-l-auto", "center-para"], [1, "copyright-text", "text-center"], ["href", "https://www.linkedin.com/in/umar-rasheed/"]],
    template: function GiftyaFooterComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "footer", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "ul", 6)(7, "li")(8, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "li")(11, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "li")(14, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 3)(17, "div", 13)(18, "h6", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "\u00A9 2024 portfolio powered by ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "Umar Rasheed");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "app-tap-to-top");
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](1, _c0));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgStyle, _shared_components_tap_to_top_tap_to_top_component__WEBPACK_IMPORTED_MODULE_0__.TapToTopComponent],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}


/***/ }),

/***/ 59226:
/*!*************************************************************************!*\
  !*** ./src/app/layouts/giftya/giftya-header/giftya-header.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GiftyaHeaderComponent: () => (/* binding */ GiftyaHeaderComponent)
/* harmony export */ });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ 12501);
/* harmony import */ var ng_animate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-animate */ 28063);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 61699);



class GiftyaHeaderComponent {
  constructor() {}
  ngOnInit() {}
  static #_ = this.ɵfac = function GiftyaHeaderComponent_Factory(t) {
    return new (t || GiftyaHeaderComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: GiftyaHeaderComponent,
    selectors: [["app-giftya-header"]],
    decls: 29,
    vars: 0,
    consts: [["id", "header", 1, "agency", "header"], [1, "agency", "bg"], [1, "container"], [1, "row"], [1, "col-md-6"], [1, "center-text"], [1, "header-text"], [1, "text-uppercase"], [1, "bold-text"], [1, "header-sub-text"], [1, "set-abs", "abs-horizon-center", "girl-boy"], ["src", "assets/images/resume/gitfya/giftya-1.png", "alt", "", "data-tilt", "", "data-tilt-max", "5", "data-tilt-perspective", "500", "data-tilt-speed", "400", 1, "img-fluid", 2, "width", "350px", "height", "auto"], [1, "plus-container", "plus-container8"], [1, "plus", "white"], [1, "plus-container"], [1, "plus"], [1, "plus-container", "plus-container2"], [1, "plus", "plus-medium"], [1, "plus-container", "plus-container3"], [1, "plus", "plus-small"], [1, "plus-container", "plus-container4"], [1, "plus-container", "plus-container5"]],
    template: function GiftyaHeaderComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "div")(7, "div", 6)(8, "h1", 7)(9, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Check My");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Giftya APP");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9)(13, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "GiftYa - the gift card app that allows you to send a gift card in a new way! From the makers of Giftcards.com, GifYa is an app that completely streamlines and simplifies the gift card gift-giving process! We have reinvented gift sharing to be more accessible, personalized, and thoughtful than ever!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      }
    },
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"],
    data: {
      animation: [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.trigger)('fadeInRight', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.transition)('* => *', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.useAnimation)(ng_animate__WEBPACK_IMPORTED_MODULE_2__.fadeInTopRight, {
        params: {
          timing: 3,
          delay: 0
        }
      }))])]
    }
  });
}


/***/ }),

/***/ 2427:
/*!*******************************************************************!*\
  !*** ./src/app/layouts/giftya/giftya-nav/giftya-nav.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GiftyaNavComponent: () => (/* binding */ GiftyaNavComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _shared_components_navigation_menu_menu_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/components/navigation/menu/menu.component */ 93209);


class GiftyaNavComponent {
  constructor() {}
  ngOnInit() {}
  static #_ = this.ɵfac = function GiftyaNavComponent_Factory(t) {
    return new (t || GiftyaNavComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: GiftyaNavComponent,
    selectors: [["app-giftya-nav"]],
    decls: 8,
    vars: 0,
    consts: [[1, "resume", "loding-header", "nav-abs", "custom-scroll"], [1, "container"], [1, "row"], [1, "col"], ["href", "#", 1, "d-inline-block", "m-r-auto"], ["src", "assets/images/resume/logo.png", "alt", "", 1, "img-fluid", 2, "width", "100px"]],
    template: function GiftyaNavComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "header", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "nav")(5, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "app-menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
      }
    },
    dependencies: [_shared_components_navigation_menu_menu_component__WEBPACK_IMPORTED_MODULE_0__.MenuComponent],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}


/***/ }),

/***/ 7264:
/*!*************************************************************************************!*\
  !*** ./src/app/layouts/giftya/giftya-screenshorts/giftya-screenshorts.component.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GiftyaScreenshortsComponent: () => (/* binding */ GiftyaScreenshortsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-owl-carousel-o */ 99436);



function GiftyaScreenshortsComponent_ng_container_16_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 13);
  }
  if (rf & 2) {
    const screenshot_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", screenshot_r1.img, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
  }
}
function GiftyaScreenshortsComponent_ng_container_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, GiftyaScreenshortsComponent_ng_container_16_ng_template_1_Template, 1, 1, "ng-template", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
}
class GiftyaScreenshortsComponent {
  constructor() {
    this.screenshots = [{
      img: "assets/images/resume/application/1-1.png"
    }, {
      img: "assets/images/resume/application/1-2.png"
    }, {
      img: "assets/images/resume/application/1-5.png"
    }, {
      img: "assets/images/resume/application/1-2.png"
    }];
    this.screenshotscarouselOptions = {
      items: 3,
      margin: 55,
      autoHeight: true,
      nav: false,
      autoplay: true,
      slideSpeed: 300,
      paginationSpeed: 400,
      loop: true,
      responsive: {
        0: {
          items: 1,
          margin: 10
        },
        360: {
          items: 2,
          margin: 10
        },
        480: {
          margin: 15
        },
        576: {
          margin: 15
        },
        1000: {
          items: 3
        }
      }
    };
  }
  ngOnInit() {}
  static #_ = this.ɵfac = function GiftyaScreenshortsComponent_Factory(t) {
    return new (t || GiftyaScreenshortsComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: GiftyaScreenshortsComponent,
    selectors: [["app-giftya-screenshort"]],
    decls: 17,
    vars: 2,
    consts: [["id", "screen-shot", 1, "app2", "screenshot", "p-t-0", "pt-0"], [1, "animated-bg"], [1, "container"], [1, "row"], [1, "col-md-10", "offset-md-1"], [1, "title", "title2"], ["src", "assets/images/logo/2.png", "alt", "", 1, "img-fluid", "title-img"], [1, "font-primary", "borders", "main-text"], [1, "row", "set-relative"], [1, "col-12"], [1, "screenshot-slider", 3, "options"], [4, "ngFor", "ngForOf"], ["carouselSlide", "", "class", "item"], ["alt", "", 1, "img-fluid", 3, "src"]],
    template: function GiftyaScreenshortsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i")(3, "i")(4, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2)(6, "div", 3)(7, "div", 4)(8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h6", 7)(11, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "screen shot");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 8)(14, "div", 9)(15, "owl-carousel-o", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, GiftyaScreenshortsComponent_ng_container_16_Template, 2, 0, "ng-container", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx.screenshotscarouselOptions);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.screenshots);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_2__.CarouselComponent, ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_2__.CarouselSlideDirective],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}


/***/ }),

/***/ 67546:
/*!***********************************************************************************!*\
  !*** ./src/app/layouts/giftya/giftya-testimonial/giftya-testimonial.component.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GiftyaTestimonialComponent: () => (/* binding */ GiftyaTestimonialComponent)
/* harmony export */ });
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper */ 58595);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var swiper_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! swiper/angular */ 29909);




function GiftyaTestimonialComponent_11_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 13);
  }
  if (rf & 2) {
    const slide_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", slide_r1.img, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
  }
}
function GiftyaTestimonialComponent_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, GiftyaTestimonialComponent_11_ng_template_0_Template, 1, 1, "ng-template", 12);
  }
}
swiper__WEBPACK_IMPORTED_MODULE_0__["default"].use([swiper__WEBPACK_IMPORTED_MODULE_0__.EffectCards]);
class GiftyaTestimonialComponent {
  constructor() {
    this.config = {
      effect: 'coverflow',
      loop: true,
      centeredSlides: true,
      slidesPerView: 3,
      keyboard: true,
      mousewheel: true,
      preventClicks: true,
      preventClicksPropagation: true,
      coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 1.43,
        slideShadows: true
      },
      breakpoints: {
        1199: {
          slidesPerView: 3,
          spaceBetween: -60
        },
        991: {
          slidesPerView: 4
        },
        767: {
          slidesPerView: 3
        },
        575: {
          slidesPerView: 2
        }
      },
      autoplay: {
        delay: 1000,
        disableOnInteraction: true
      },
      pagination: {
        el: '.swiper-pagination'
      }
    };
    this.slides = [{
      img: 'assets/images/resume/gitfya/giftya-1.png'
    }, {
      img: 'assets/images/resume/gitfya/giftya-2.png'
    }, {
      img: 'assets/images/resume/gitfya/giftya-3.png'
    }, {
      img: 'assets/images/resume/gitfya/giftya-4.png'
    }, {
      img: 'assets/images/resume/gitfya/giftya-5.png'
    }];
  }
  ngOnInit() {}
  static #_ = this.ɵfac = function GiftyaTestimonialComponent_Factory(t) {
    return new (t || GiftyaTestimonialComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: GiftyaTestimonialComponent,
    selectors: [["app-giftya-testimonial"]],
    decls: 13,
    vars: 4,
    consts: [["id", "screenshot", 1, "app1", "screenshot", "bg-light"], [1, "container"], [1, "row"], [1, "col-lg-6", "offset-lg-3", "col-md-8", "offset-md-2", "m-b-10"], [1, "title", "title1"], [1, "main-title"], [1, "text-white", "text-dark"], [1, "row", "set-relative"], [1, "col-12"], [1, "mySwiper", 3, "effect", "grabCursor", "config"], [4, "ngFor", "ngForOf"], [1, "set-abs", "screen-container"], ["swiperSlide", ""], ["alt", "", 1, "img-fluid", 3, "src"]],
    template: function GiftyaTestimonialComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "h2", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Screen Shots");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 7)(9, "div", 8)(10, "swiper", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, GiftyaTestimonialComponent_11_Template, 1, 0, null, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("effect", "cards")("grabCursor", true)("config", ctx.config);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.slides);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, swiper_angular__WEBPACK_IMPORTED_MODULE_3__.SwiperComponent, swiper_angular__WEBPACK_IMPORTED_MODULE_3__.SwiperSlideDirective],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}


/***/ }),

/***/ 4194:
/*!*****************************************************************************!*\
  !*** ./src/app/layouts/giftya/giftya-view-one/giftya-view-one.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GiftyaViewOneComponent: () => (/* binding */ GiftyaViewOneComponent)
/* harmony export */ });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ 12501);
/* harmony import */ var ng_animate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-animate */ 28063);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 61699);



class GiftyaViewOneComponent {
  constructor() {}
  ngOnInit() {}
  static #_ = this.ɵfac = function GiftyaViewOneComponent_Factory(t) {
    return new (t || GiftyaViewOneComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: GiftyaViewOneComponent,
    selectors: [["app-giftya-view-one"]],
    decls: 19,
    vars: 1,
    consts: [[1, "app2", "about", "format"], [1, "animated-bg"], [1, "container"], [1, "row"], [1, "col-sm-4", "counters", "set-height"], ["src", "assets/images/resume/gitfya/giftya-4.png", "alt", "", 1, "img-fluid", "mobile1", 2, "width", "300px", "height", "auto"], [1, "col-sm-8", "counters"], [1, "abouts", "center-text"], [1, "format-sub-text"], [1, "about-para"]],
    template: function GiftyaViewOneComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i")(3, "i")(4, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2)(6, "div", 3)(7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6)(10, "div", 7)(11, "div")(12, "div", 8)(13, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Added Sentry for debugging or handling the uncaught errors. Sometimes, to avoid the Apps Store review queue I gave the idea of CodePush for pushing builds without delay if something unusual happens.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Implemented Firebase push notifications and Firebase universal links deep links for both Android and iOS.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Also added the ability for the gift sender to add images/videos and send them to their loved ones. The receiver can redeem using different options like Visa, Zelle, Physical, etc... I wrote unit tests using Jest and end-to-end tests using Detox for React native apps. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@fadeInLeft", ctx.fadeInLeft);
      }
    },
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"],
    data: {
      animation: [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.trigger)('fadeInLeft', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.transition)('* => *', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.useAnimation)(ng_animate__WEBPACK_IMPORTED_MODULE_2__.fadeInLeft, {
        // Set the duration to 5seconds and delay to 0seconds
        params: {
          timing: 5,
          delay: 3
        }
      }))])]
    }
  });
}


/***/ }),

/***/ 18623:
/*!*********************************************************************************!*\
  !*** ./src/app/layouts/giftya/giftya-view-three/giftya-view-three.component.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GiftyaViewThreeComponent: () => (/* binding */ GiftyaViewThreeComponent)
/* harmony export */ });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ 12501);
/* harmony import */ var ng_animate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-animate */ 28063);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 61699);



class GiftyaViewThreeComponent {
  constructor() {}
  ngOnInit() {}
  static #_ = this.ɵfac = function GiftyaViewThreeComponent_Factory(t) {
    return new (t || GiftyaViewThreeComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: GiftyaViewThreeComponent,
    selectors: [["app-giftya-view-three"]],
    decls: 14,
    vars: 1,
    consts: [[1, "app2", "format", "quality", "p-t-0"], [1, "container"], [1, "row"], [1, "col-sm-6", "counters", "set-order-2"], [1, "abouts", "center-text"], [1, "format-head-text"], [1, "about-font-header", "font-secondary"], [1, "format-sub-text"], [1, "about-para"], [1, "col-sm-6", "counters", "set-height", "overflow-hide"], ["src", "assets/images/resume/app-screens3.png", "alt", "", "data-aos-duration", "1500", 1, "img-fluid", "mobile2"]],
    template: function GiftyaViewThreeComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div")(6, "div", 5)(7, "h3", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Outcome");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7)(10, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "The GiftYa is being used by thousands of users in the US and generating millions of dollars in revenue. Available on Google play store and Apple app store. Highly optimized and performant app.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@fadeInRight", ctx.fadeInRight);
      }
    },
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"],
    data: {
      animation: [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.trigger)('fadeInRight', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.transition)('* => *', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.useAnimation)(ng_animate__WEBPACK_IMPORTED_MODULE_2__.fadeInRight, {
        params: {
          timing: 5,
          delay: 3
        }
      }))])]
    }
  });
}


/***/ }),

/***/ 6187:
/*!*****************************************************************************!*\
  !*** ./src/app/layouts/giftya/giftya-view-two/giftya-view-two.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GiftyaViewTwoComponent: () => (/* binding */ GiftyaViewTwoComponent)
/* harmony export */ });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ 12501);
/* harmony import */ var ng_animate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-animate */ 28063);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 61699);



class GiftyaViewTwoComponent {
  constructor() {}
  ngOnInit() {}
  static #_ = this.ɵfac = function GiftyaViewTwoComponent_Factory(t) {
    return new (t || GiftyaViewTwoComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: GiftyaViewTwoComponent,
    selectors: [["app-giftya-view-two"]],
    decls: 18,
    vars: 1,
    consts: [[1, "app2", "about", "format"], [1, "animated-bg"], [1, "container"], [1, "row"], [1, "col-sm-7", "counters"], [1, "abouts", "center-text"], [1, "format-head-text"], [1, "about-font-header", "font-secondary"], [1, "format-sub-text"], [1, "about-para"], [1, "col-sm-5", "counters", "set-height"], ["src", "assets/images/resume/gitfya/giftya-5.png", "alt", "", 1, "img-fluid", "mobile1", 2, "width", "300px", "height", "auto"]],
    template: function GiftyaViewTwoComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i")(3, "i")(4, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2)(6, "div", 3)(7, "div", 4)(8, "div", 5)(9, "div")(10, "div", 6)(11, "h3", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Outcome");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 8)(14, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "The GiftYa is being used by thousands of users in the US and generating millions of dollars in revenue. Available on Google play store and Apple app store. Highly optimized and performant app.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@fadeInRight", ctx.fadeInRight);
      }
    },
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"],
    data: {
      animation: [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.trigger)('fadeInRight', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.transition)('* => *', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.useAnimation)(ng_animate__WEBPACK_IMPORTED_MODULE_2__.fadeInRight, {
        // Set the duration to 5seconds and delay to 0seconds
        params: {
          timing: 5,
          delay: 4
        }
      }))])]
    }
  });
}


/***/ }),

/***/ 81220:
/*!****************************************************!*\
  !*** ./src/app/layouts/giftya/giftya.component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GiftyaComponent: () => (/* binding */ GiftyaComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _shared_service_color_scss_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/service/color-scss.service */ 94342);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser */ 36480);
/* harmony import */ var _giftya_nav_giftya_nav_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./giftya-nav/giftya-nav.component */ 2427);
/* harmony import */ var _giftya_header_giftya_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./giftya-header/giftya-header.component */ 59226);
/* harmony import */ var _giftya_about_giftya_about_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./giftya-about/giftya-about.component */ 88571);
/* harmony import */ var _giftya_view_one_giftya_view_one_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./giftya-view-one/giftya-view-one.component */ 4194);
/* harmony import */ var _giftya_view_two_giftya_view_two_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./giftya-view-two/giftya-view-two.component */ 6187);
/* harmony import */ var _giftya_bmi_giftya_bmi_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./giftya-bmi/giftya-bmi.component */ 2219);
/* harmony import */ var _giftya_testimonial_giftya_testimonial_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./giftya-testimonial/giftya-testimonial.component */ 67546);
/* harmony import */ var _giftya_footer_giftya_footer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./giftya-footer/giftya-footer.component */ 35144);












class GiftyaComponent {
  constructor(colorPicker, route, title) {
    this.colorPicker = colorPicker;
    this.route = route;
    this.title = title;
  }
  ngOnInit() {
    this.colorPicker.setColorScheme('color-1');
    this.title.setTitle(this.route.snapshot.data['title']);
  }
  static #_ = this.ɵfac = function GiftyaComponent_Factory(t) {
    return new (t || GiftyaComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_shared_service_color_scss_service__WEBPACK_IMPORTED_MODULE_0__.ColorScssService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__.Title));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({
    type: GiftyaComponent,
    selectors: [["app-giftya"]],
    decls: 8,
    vars: 0,
    template: function GiftyaComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "app-giftya-nav")(1, "app-giftya-header")(2, "app-giftya-bmi")(3, "app-giftya-about")(4, "app-giftya-view-one")(5, "app-giftya-view-two")(6, "app-giftya-testimonial")(7, "app-giftya-footer");
      }
    },
    dependencies: [_giftya_nav_giftya_nav_component__WEBPACK_IMPORTED_MODULE_1__.GiftyaNavComponent, _giftya_header_giftya_header_component__WEBPACK_IMPORTED_MODULE_2__.GiftyaHeaderComponent, _giftya_about_giftya_about_component__WEBPACK_IMPORTED_MODULE_3__.GiftyaAboutComponent, _giftya_view_one_giftya_view_one_component__WEBPACK_IMPORTED_MODULE_4__.GiftyaViewOneComponent, _giftya_view_two_giftya_view_two_component__WEBPACK_IMPORTED_MODULE_5__.GiftyaViewTwoComponent, _giftya_bmi_giftya_bmi_component__WEBPACK_IMPORTED_MODULE_6__.GiftyaBMIComponent, _giftya_testimonial_giftya_testimonial_component__WEBPACK_IMPORTED_MODULE_7__.GiftyaTestimonialComponent, _giftya_footer_giftya_footer_component__WEBPACK_IMPORTED_MODULE_8__.GiftyaFooterComponent],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}


/***/ }),

/***/ 4681:
/*!***********************************************************************!*\
  !*** ./src/app/layouts/granny/granny-about/granny-about.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GrannyAboutComponent: () => (/* binding */ GrannyAboutComponent)
/* harmony export */ });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ 12501);
/* harmony import */ var ng_animate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-animate */ 28063);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 61699);



class GrannyAboutComponent {
  constructor() {}
  ngOnInit() {}
  static #_ = this.ɵfac = function GrannyAboutComponent_Factory(t) {
    return new (t || GrannyAboutComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: GrannyAboutComponent,
    selectors: [["app-granny-about"]],
    decls: 34,
    vars: 1,
    consts: [[1, "app2", "about", "format"], [1, "animated-bg"], [1, "container"], [1, "row"], [1, "col-sm-7", "counters"], [1, "abouts", "center-text"], [1, "format-small-text"], [1, "font-primary", "borders-before", "text-uppercase"], [1, "format-head-text"], [1, "about-font-header", "font-secondary"], [1, "format-sub-text"], [1, "about-para"], [1, "icon-collection"], [1, "about-icon"], ["href", "javascript:void(0)", 1, "center-content"], ["src", "assets/images/resume/icon/5.png", "alt", "", 1, "img-fluid"], ["src", "assets/images/resume/icon/6.png", "alt", "", 1, "img-fluid"], ["src", "assets/images/resume/icon/7.png", "alt", "", 1, "img-fluid"], [1, "btn", "btn-default", "btn-gradient", "m-t-50"], [1, "col-sm-5", "counters", "set-height"], ["src", "assets/images/resume/work/granny.png", "alt", "", 1, "img-fluid", "mobile1", 2, "width", "300px", "height", "auto"]],
    template: function GrannyAboutComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i")(3, "i")(4, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2)(6, "div", 3)(7, "div", 4)(8, "div", 5)(9, "div")(10, "div", 6)(11, "h6", 7)(12, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Sub Heading");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 8)(15, "h3", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Great Application Ever");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 10)(18, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "ul", 12)(21, "li", 13)(22, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "li", 13)(25, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "li", 13)(28, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "img", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "learn more");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "img", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@fadeInRight", ctx.fadeInRight);
      }
    },
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"],
    data: {
      animation: [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.trigger)('fadeInRight', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.transition)('* => *', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.useAnimation)(ng_animate__WEBPACK_IMPORTED_MODULE_2__.fadeInRight, {
        params: {
          timing: 5,
          delay: 2
        }
      }))])]
    }
  });
}


/***/ }),

/***/ 90024:
/*!*******************************************************************!*\
  !*** ./src/app/layouts/granny/granny-bmi/granny-bmi.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GrannyBMIComponent: () => (/* binding */ GrannyBMIComponent)
/* harmony export */ });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ 12501);
/* harmony import */ var ng_animate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-animate */ 28063);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 61699);



class GrannyBMIComponent {
  constructor() {}
  ngOnInit() {}
  static #_ = this.ɵfac = function GrannyBMIComponent_Factory(t) {
    return new (t || GrannyBMIComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: GrannyBMIComponent,
    selectors: [["app-granny-bmi"]],
    decls: 34,
    vars: 1,
    consts: [[1, "app1", "download"], [1, "container"], [1, "row"], ["data-aos", "fade-right", "data-aos-duration", "1500", 1, "col-lg-5", "col-md-6", "hide-on-init"], [1, "center-content", "center-mobile"], ["src", "assets/images/resume/granny/granny-2.png", "alt", "", 1, "img-fluid", "width300"], [1, "col-lg-6", "offset-lg-1", "col-md-6"], [1, "center-text"], [1, "download-img", "d-flex"], [1, "set-relative"], ["src", "assets/images/resume/icon/download.png", "alt", "", 1, "download-icon", "img-fluid"], [1, "set-abs", "elipse", "center-abs"], ["src", "assets/images/resume/icon/Ellipse.png", "alt", ""], [1, "center-img-content", "m-l-15"], [1, "m-b-5"], [1, "information"], [1, "link-horizontal"], ["href", "https://play.google.com/store/apps/details?id=com.kinoli.giftcardgranny&hl=en", "target", "_blank", 1, "icon-btn"], ["aria-hidden", "true", 1, "fa", "fa-android", "center-content", "shadow"], [1, "text-center", "font-primary"], ["href", "https://apps.apple.com/us/app/gift-card-granny/id703155858", "target", "_blank", 1, "icon-btn"], ["aria-hidden", "true", 1, "fa", "fa-apple", "center-content", "shadow"]],
    template: function GrannyBMIComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6)(7, "div", 7)(8, "div")(9, "div", 8)(10, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 13)(15, "h3", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Gift Card Granny");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "download");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 15)(20, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "I worked on the mobile app project, from design to architecture to development and releasing the apps to the Apple App Store and Google Play Store. We were a team of 10 persons working on the Gift Card Granny project two mobile app developers three website developers and three backend developers one product manager, one product designer.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 16)(23, "ul")(24, "li")(25, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "i", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "h6", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "android");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "li")(30, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "i", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "h6", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "ios");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@fadeInLeft", ctx.fadeInLeft);
      }
    },
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"],
    data: {
      animation: [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.trigger)('fadeInLeft', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.transition)('* => *', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.useAnimation)(ng_animate__WEBPACK_IMPORTED_MODULE_2__.fadeInLeft, {
        params: {
          timing: 5,
          delay: 0
        }
      }))])]
    }
  });
}


/***/ }),

/***/ 56994:
/*!*************************************************************************!*\
  !*** ./src/app/layouts/granny/granny-footer/granny-footer.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GrannyFooterComponent: () => (/* binding */ GrannyFooterComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _shared_components_tap_to_top_tap_to_top_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/components/tap-to-top/tap-to-top.component */ 55842);



const _c0 = function () {
  return {
    "background-color": "copyright-bg",
    "color": "copyright",
    "text-align": "center",
    "padding": "20px",
    "position": "absolute",
    "bottom": "0",
    "width": "100%",
    "box-shadow": "0 -2px 5px rgba(0, 0, 0, 0.1)"
  };
};
class GrannyFooterComponent {
  constructor() {}
  ngOnInit() {}
  static #_ = this.ɵfac = function GrannyFooterComponent_Factory(t) {
    return new (t || GrannyFooterComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: GrannyFooterComponent,
    selectors: [["app-granny-footer"]],
    decls: 23,
    vars: 2,
    consts: [[1, "resume", "copyright", "copyright-bg", 3, "ngStyle"], [1, "container"], [1, "row"], [1, "col-12"], [1, "text-center"], [1, "social-link", "link-horizontal"], [1, "justify-content-center"], ["href", "https://www.facebook.com/UMAR0061", 1, "copyright-text"], ["aria-hidden", "true", 1, "fa", "fa-facebook"], ["href", "https://www.linkedin.com/in/umar-rasheed/", 1, "copyright-text"], ["aria-hidden", "true", 1, "fa", "fa-linkedin"], ["href", "https://www.instagram.com/umar.rasheed61/", 1, "copyright-text"], ["aria-hidden", "true", 1, "fa", "fa-instagram"], [1, "m-l-auto", "center-para"], [1, "copyright-text", "text-center"], ["href", "https://www.linkedin.com/in/umar-rasheed/"]],
    template: function GrannyFooterComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "footer", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "ul", 6)(7, "li")(8, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "li")(11, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "li")(14, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 3)(17, "div", 13)(18, "h6", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "\u00A9 2024 portfolio powered by ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "Umar Rasheed");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "app-tap-to-top");
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](1, _c0));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgStyle, _shared_components_tap_to_top_tap_to_top_component__WEBPACK_IMPORTED_MODULE_0__.TapToTopComponent],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}


/***/ }),

/***/ 23320:
/*!*************************************************************************!*\
  !*** ./src/app/layouts/granny/granny-header/granny-header.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GrannyHeaderComponent: () => (/* binding */ GrannyHeaderComponent)
/* harmony export */ });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ 12501);
/* harmony import */ var ng_animate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-animate */ 28063);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 61699);



class GrannyHeaderComponent {
  constructor() {}
  ngOnInit() {}
  static #_ = this.ɵfac = function GrannyHeaderComponent_Factory(t) {
    return new (t || GrannyHeaderComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: GrannyHeaderComponent,
    selectors: [["app-granny-header"]],
    decls: 29,
    vars: 0,
    consts: [["id", "header", 1, "agency", "header"], [1, "agency", "bg"], [1, "container"], [1, "row"], [1, "col-md-6"], [1, "center-text"], [1, "header-text"], [1, "text-uppercase"], [1, "bold-text"], [1, "header-sub-text"], [1, "set-abs", "abs-horizon-center", "girl-boy"], ["src", "assets/images/resume/work/granny.png", "alt", "", "data-tilt", "", "data-tilt-max", "5", "data-tilt-perspective", "500", "data-tilt-speed", "400", 1, "img-fluid", 2, "width", "350px", "height", "auto"], [1, "plus-container", "plus-container8"], [1, "plus", "white"], [1, "plus-container"], [1, "plus"], [1, "plus-container", "plus-container2"], [1, "plus", "plus-medium"], [1, "plus-container", "plus-container3"], [1, "plus", "plus-small"], [1, "plus-container", "plus-container4"], [1, "plus-container", "plus-container5"]],
    template: function GrannyHeaderComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "div")(7, "div", 6)(8, "h1", 7)(9, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Check My");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Gift Card Granny APP ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9)(13, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Gift Card Granny is an online discount gift card retailer and comparison site based near Pittsburgh, Pennsylvania. The website allows consumers to search through numerous gift card websites and either purchase gift cards for a discounted price or sell them for below face value.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      }
    },
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"],
    data: {
      animation: [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.trigger)('fadeInRight', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.transition)('* => *', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.useAnimation)(ng_animate__WEBPACK_IMPORTED_MODULE_2__.fadeInTopRight, {
        params: {
          timing: 3,
          delay: 0
        }
      }))])]
    }
  });
}


/***/ }),

/***/ 90029:
/*!*******************************************************************!*\
  !*** ./src/app/layouts/granny/granny-nav/granny-nav.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GrannyNavComponent: () => (/* binding */ GrannyNavComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _shared_components_navigation_menu_menu_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/components/navigation/menu/menu.component */ 93209);


class GrannyNavComponent {
  constructor() {}
  ngOnInit() {}
  static #_ = this.ɵfac = function GrannyNavComponent_Factory(t) {
    return new (t || GrannyNavComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: GrannyNavComponent,
    selectors: [["app-granny-nav"]],
    decls: 8,
    vars: 0,
    consts: [[1, "resume", "loding-header", "nav-abs", "custom-scroll"], [1, "container"], [1, "row"], [1, "col"], ["href", "#", 1, "d-inline-block", "m-r-auto"], ["src", "assets/images/resume/logo.png", "alt", "", 1, "img-fluid", 2, "width", "100px"]],
    template: function GrannyNavComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "header", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "nav")(5, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "app-menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
      }
    },
    dependencies: [_shared_components_navigation_menu_menu_component__WEBPACK_IMPORTED_MODULE_0__.MenuComponent],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}


/***/ }),

/***/ 89082:
/*!***********************************************************************************!*\
  !*** ./src/app/layouts/granny/granny-testimonial/granny-testimonial.component.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GrannyTestimonialComponent: () => (/* binding */ GrannyTestimonialComponent)
/* harmony export */ });
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper */ 58595);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var swiper_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! swiper/angular */ 29909);




function GrannyTestimonialComponent_11_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 13);
  }
  if (rf & 2) {
    const slide_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", slide_r1.img, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
  }
}
function GrannyTestimonialComponent_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, GrannyTestimonialComponent_11_ng_template_0_Template, 1, 1, "ng-template", 12);
  }
}
swiper__WEBPACK_IMPORTED_MODULE_0__["default"].use([swiper__WEBPACK_IMPORTED_MODULE_0__.EffectCards]);
class GrannyTestimonialComponent {
  constructor() {
    this.config = {
      effect: 'coverflow',
      loop: true,
      centeredSlides: true,
      slidesPerView: 3,
      keyboard: true,
      mousewheel: true,
      preventClicks: true,
      preventClicksPropagation: true,
      coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 1.43,
        slideShadows: true
      },
      breakpoints: {
        1199: {
          slidesPerView: 3,
          spaceBetween: -60
        },
        991: {
          slidesPerView: 4
        },
        767: {
          slidesPerView: 3
        },
        575: {
          slidesPerView: 2
        }
      },
      autoplay: {
        delay: 1000,
        disableOnInteraction: true
      },
      pagination: {
        el: '.swiper-pagination'
      }
    };
    this.slides = [{
      img: 'assets/images/resume/granny/granny-1.png'
    }, {
      img: 'assets/images/resume/granny/granny-2.png'
    }, {
      img: 'assets/images/resume/granny/granny-3.png'
    }, {
      img: 'assets/images/resume/granny/granny-4.png'
    }];
  }
  ngOnInit() {}
  static #_ = this.ɵfac = function GrannyTestimonialComponent_Factory(t) {
    return new (t || GrannyTestimonialComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: GrannyTestimonialComponent,
    selectors: [["app-granny-testimonial"]],
    decls: 13,
    vars: 4,
    consts: [["id", "screenshot", 1, "app1", "screenshot", "bg-light"], [1, "container"], [1, "row"], [1, "col-lg-6", "offset-lg-3", "col-md-8", "offset-md-2", "m-b-10"], [1, "title", "title1"], [1, "main-title"], [1, "text-white", "text-dark"], [1, "row", "set-relative"], [1, "col-12"], [1, "mySwiper", 3, "effect", "grabCursor", "config"], [4, "ngFor", "ngForOf"], [1, "set-abs", "screen-container"], ["swiperSlide", ""], ["alt", "", 1, "img-fluid", 3, "src"]],
    template: function GrannyTestimonialComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "h2", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Screen Shot");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 7)(9, "div", 8)(10, "swiper", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, GrannyTestimonialComponent_11_Template, 1, 0, null, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("effect", "cards")("grabCursor", true)("config", ctx.config);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.slides);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, swiper_angular__WEBPACK_IMPORTED_MODULE_3__.SwiperComponent, swiper_angular__WEBPACK_IMPORTED_MODULE_3__.SwiperSlideDirective],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}


/***/ }),

/***/ 82031:
/*!*****************************************************************************!*\
  !*** ./src/app/layouts/granny/granny-view-one/granny-view-one.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GrannyViewOneComponent: () => (/* binding */ GrannyViewOneComponent)
/* harmony export */ });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ 12501);
/* harmony import */ var ng_animate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-animate */ 28063);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 61699);



class GrannyViewOneComponent {
  constructor() {}
  ngOnInit() {}
  static #_ = this.ɵfac = function GrannyViewOneComponent_Factory(t) {
    return new (t || GrannyViewOneComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: GrannyViewOneComponent,
    selectors: [["app-granny-view-one"]],
    decls: 19,
    vars: 1,
    consts: [[1, "app2", "about", "format"], [1, "animated-bg"], [1, "container"], [1, "row"], [1, "col-sm-4", "counters", "set-height"], ["src", "assets/images/resume/granny/granny-3.png", "alt", "", 1, "img-fluid", "mobile1", 2, "width", "300px", "height", "auto"], [1, "col-sm-8", "counters"], [1, "abouts", "center-text"], [1, "format-sub-text"], [1, "about-para"]],
    template: function GrannyViewOneComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i")(3, "i")(4, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2)(6, "div", 3)(7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6)(10, "div", 7)(11, "div")(12, "div", 8)(13, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Added Sentry for debugging or handling the uncaught errors. Sometimes, to avoid the Apps Store review queue I gave the idea of CodePush for pushing builds without delay if something unusual happens.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Also added the ability for the gift sender to add images/videos and send them to their loved ones. The receiver can redeem using different options like Visa, Zelle, Physical, etc... I added social logins like Facebook, Google, and Apple.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "I wrote unit tests using Jest and end-to-end tests using Detox for React native apps. Using GIT for version control management.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@fadeInLeft", ctx.fadeInLeft);
      }
    },
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"],
    data: {
      animation: [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.trigger)('fadeInLeft', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.transition)('* => *', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.useAnimation)(ng_animate__WEBPACK_IMPORTED_MODULE_2__.fadeInLeft, {
        params: {
          timing: 5,
          delay: 3
        }
      }))])]
    }
  });
}


/***/ }),

/***/ 6457:
/*!*****************************************************************************!*\
  !*** ./src/app/layouts/granny/granny-view-two/granny-view-two.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GrannyViewTwoComponent: () => (/* binding */ GrannyViewTwoComponent)
/* harmony export */ });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ 12501);
/* harmony import */ var ng_animate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-animate */ 28063);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 61699);



class GrannyViewTwoComponent {
  constructor() {}
  ngOnInit() {}
  static #_ = this.ɵfac = function GrannyViewTwoComponent_Factory(t) {
    return new (t || GrannyViewTwoComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: GrannyViewTwoComponent,
    selectors: [["app-granny-view-two"]],
    decls: 19,
    vars: 1,
    consts: [[1, "app2", "about", "format"], [1, "animated-bg"], [1, "container"], [1, "row"], [1, "col-sm-7", "counters"], [1, "abouts", "center-text"], [1, "format-sub-text"], [1, "about-para"], [1, "col-sm-5", "counters", "set-height"], ["src", "assets/images/resume/granny/granny-4.png", "alt", "", 1, "img-fluid", "mobile1", 2, "width", "300px", "height", "auto"]],
    template: function GrannyViewTwoComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i")(3, "i")(4, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2)(6, "div", 3)(7, "div", 4)(8, "div", 5)(9, "div")(10, "div", 6)(11, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "I architected the mobile app using React Native and introduced a unique file structure with enhanced user experience.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Using Redux saga for state management and async operations. Also utilized the react context API for auth flow handling. I added social logins like Facebook, Google, and Apple.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "I implemented Stripe, Google Pay, Apple Pay, and PayPal. We're also introducing Amazon Pay. User can use these payment methods to buy gifts for their loved ones.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@fadeInRight", ctx.fadeInRight);
      }
    },
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"],
    data: {
      animation: [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.trigger)('fadeInRight', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.transition)('* => *', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.useAnimation)(ng_animate__WEBPACK_IMPORTED_MODULE_2__.fadeInRight, {
        params: {
          timing: 5,
          delay: 4
        }
      }))])]
    }
  });
}


/***/ }),

/***/ 7906:
/*!****************************************************!*\
  !*** ./src/app/layouts/granny/granny.component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GrannyComponent: () => (/* binding */ GrannyComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _shared_service_color_scss_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/service/color-scss.service */ 94342);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser */ 36480);
/* harmony import */ var _granny_nav_granny_nav_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./granny-nav/granny-nav.component */ 90029);
/* harmony import */ var _granny_header_granny_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./granny-header/granny-header.component */ 23320);
/* harmony import */ var _granny_view_one_granny_view_one_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./granny-view-one/granny-view-one.component */ 82031);
/* harmony import */ var _granny_view_two_granny_view_two_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./granny-view-two/granny-view-two.component */ 6457);
/* harmony import */ var _granny_bmi_granny_bmi_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./granny-bmi/granny-bmi.component */ 90024);
/* harmony import */ var _granny_testimonial_granny_testimonial_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./granny-testimonial/granny-testimonial.component */ 89082);
/* harmony import */ var _granny_footer_granny_footer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./granny-footer/granny-footer.component */ 56994);











class GrannyComponent {
  constructor(colorPicker, route, title) {
    this.colorPicker = colorPicker;
    this.route = route;
    this.title = title;
  }
  ngOnInit() {
    this.colorPicker.setColorScheme('color-1');
    this.title.setTitle(this.route.snapshot.data['title']);
  }
  static #_ = this.ɵfac = function GrannyComponent_Factory(t) {
    return new (t || GrannyComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_shared_service_color_scss_service__WEBPACK_IMPORTED_MODULE_0__.ColorScssService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__.Title));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
    type: GrannyComponent,
    selectors: [["app-granny"]],
    decls: 7,
    vars: 0,
    template: function GrannyComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "app-granny-nav")(1, "app-granny-header")(2, "app-granny-bmi")(3, "app-granny-view-two")(4, "app-granny-view-one")(5, "app-granny-testimonial")(6, "app-granny-footer");
      }
    },
    dependencies: [_granny_nav_granny_nav_component__WEBPACK_IMPORTED_MODULE_1__.GrannyNavComponent, _granny_header_granny_header_component__WEBPACK_IMPORTED_MODULE_2__.GrannyHeaderComponent, _granny_view_one_granny_view_one_component__WEBPACK_IMPORTED_MODULE_3__.GrannyViewOneComponent, _granny_view_two_granny_view_two_component__WEBPACK_IMPORTED_MODULE_4__.GrannyViewTwoComponent, _granny_bmi_granny_bmi_component__WEBPACK_IMPORTED_MODULE_5__.GrannyBMIComponent, _granny_testimonial_granny_testimonial_component__WEBPACK_IMPORTED_MODULE_6__.GrannyTestimonialComponent, _granny_footer_granny_footer_component__WEBPACK_IMPORTED_MODULE_7__.GrannyFooterComponent],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}


/***/ }),

/***/ 90762:
/*!***************************************************!*\
  !*** ./src/app/layouts/layouts-routing.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LayoutsRoutingModule: () => (/* binding */ LayoutsRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _giftya_giftya_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./giftya/giftya.component */ 81220);
/* harmony import */ var _clublex_clublex_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./clublex/clublex.component */ 55152);
/* harmony import */ var _fert_fert_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fert/fert.component */ 30020);
/* harmony import */ var _Next_Next_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Next/Next.component */ 26909);
/* harmony import */ var _granny_granny_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./granny/granny.component */ 7906);
/* harmony import */ var _giftya_web_giftya_web_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./giftya-web/giftya-web.component */ 13268);
/* harmony import */ var _resume_resume_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./resume/resume.component */ 88669);
/* harmony import */ var _perfect_gift_web_perfect_gift_web_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./perfect-gift-web/perfect-gift-web.component */ 14463);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 61699);

// layouts Components 










const routes = [{
  path: 'giftya',
  component: _giftya_giftya_component__WEBPACK_IMPORTED_MODULE_0__.GiftyaComponent,
  data: {
    title: "Giftya | Umar Rasheed"
  }
}, {
  path: 'clublax',
  component: _clublex_clublex_component__WEBPACK_IMPORTED_MODULE_1__.ClublexComponent,
  data: {
    title: "clublax | Umar Rasheed"
  }
}, {
  path: 'fert',
  component: _fert_fert_component__WEBPACK_IMPORTED_MODULE_2__.FertComponent,
  data: {
    title: "fert | Umar Rasheed"
  }
}, {
  path: 'granny',
  component: _granny_granny_component__WEBPACK_IMPORTED_MODULE_4__.GrannyComponent,
  data: {
    title: "granny | Umar Rasheed"
  }
}, {
  path: 'next',
  component: _Next_Next_component__WEBPACK_IMPORTED_MODULE_3__.NextComponent,
  data: {
    title: "next | Umar Rasheed"
  }
}, {
  path: 'giftyaweb',
  component: _giftya_web_giftya_web_component__WEBPACK_IMPORTED_MODULE_5__.GiftyaWebComponent,
  data: {
    title: "giftya web | Umar Rasheed"
  }
}, {
  path: 'perfectgiftweb',
  component: _perfect_gift_web_perfect_gift_web_component__WEBPACK_IMPORTED_MODULE_7__.PerfectGiftWebComponent,
  data: {
    title: "Perfect Gift web | Umar Rasheed"
  }
}, {
  path: 'resume',
  component: _resume_resume_component__WEBPACK_IMPORTED_MODULE_6__.ResumeComponent,
  data: {
    title: "Resume | Umar Rasheed"
  }
}];
class LayoutsRoutingModule {
  static #_ = this.ɵfac = function LayoutsRoutingModule_Factory(t) {
    return new (t || LayoutsRoutingModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({
    type: LayoutsRoutingModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule]
  });
}

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](LayoutsRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule]
  });
})();

/***/ }),

/***/ 55922:
/*!*******************************************!*\
  !*** ./src/app/layouts/layouts.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LayoutsModule: () => (/* binding */ LayoutsModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_75__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _layouts_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./layouts-routing.module */ 90762);
/* harmony import */ var ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_77__ = __webpack_require__(/*! ngx-owl-carousel-o */ 99436);
/* harmony import */ var swiper_angular__WEBPACK_IMPORTED_MODULE_76__ = __webpack_require__(/*! swiper/angular */ 29909);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_78__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 76101);
/* harmony import */ var ngx_masonry__WEBPACK_IMPORTED_MODULE_82__ = __webpack_require__(/*! ngx-masonry */ 76671);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_81__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/shared.module */ 56208);
/* harmony import */ var ng_gallery__WEBPACK_IMPORTED_MODULE_79__ = __webpack_require__(/*! ng-gallery */ 60977);
/* harmony import */ var ng_gallery_lightbox__WEBPACK_IMPORTED_MODULE_80__ = __webpack_require__(/*! ng-gallery/lightbox */ 23050);
/* harmony import */ var _giftya_giftya_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./giftya/giftya.component */ 81220);
/* harmony import */ var _giftya_giftya_nav_giftya_nav_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./giftya/giftya-nav/giftya-nav.component */ 2427);
/* harmony import */ var _giftya_giftya_header_giftya_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./giftya/giftya-header/giftya-header.component */ 59226);
/* harmony import */ var _giftya_giftya_about_giftya_about_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./giftya/giftya-about/giftya-about.component */ 88571);
/* harmony import */ var _giftya_giftya_view_one_giftya_view_one_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./giftya/giftya-view-one/giftya-view-one.component */ 4194);
/* harmony import */ var _giftya_giftya_view_two_giftya_view_two_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./giftya/giftya-view-two/giftya-view-two.component */ 6187);
/* harmony import */ var _giftya_giftya_view_three_giftya_view_three_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./giftya/giftya-view-three/giftya-view-three.component */ 18623);
/* harmony import */ var _giftya_giftya_screenshorts_giftya_screenshorts_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./giftya/giftya-screenshorts/giftya-screenshorts.component */ 7264);
/* harmony import */ var _giftya_giftya_bmi_giftya_bmi_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./giftya/giftya-bmi/giftya-bmi.component */ 2219);
/* harmony import */ var _giftya_giftya_testimonial_giftya_testimonial_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./giftya/giftya-testimonial/giftya-testimonial.component */ 67546);
/* harmony import */ var _giftya_giftya_footer_giftya_footer_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./giftya/giftya-footer/giftya-footer.component */ 35144);
/* harmony import */ var _clublex_clublex_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./clublex/clublex.component */ 55152);
/* harmony import */ var _clublex_clublex_nav_clublex_nav_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./clublex/clublex-nav/clublex-nav.component */ 96335);
/* harmony import */ var _clublex_clublex_header_giftya_header_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./clublex/clublex-header/giftya-header.component */ 91627);
/* harmony import */ var _clublex_clublex_about_clublex_about_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./clublex/clublex-about/clublex-about.component */ 94202);
/* harmony import */ var _clublex_clublex_view_one_giftya_view_one_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./clublex/clublex-view-one/giftya-view-one.component */ 14357);
/* harmony import */ var _clublex_clublex_view_two_clublex_view_two_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./clublex/clublex-view-two/clublex-view-two.component */ 63547);
/* harmony import */ var _clublex_clublex_bmi_giftya_bmi_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./clublex/clublex-bmi/giftya-bmi.component */ 96777);
/* harmony import */ var _clublex_clublex_testimonial_clublex_testimonial_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./clublex/clublex-testimonial/clublex-testimonial.component */ 59138);
/* harmony import */ var _clublex_clublex_footer_clublex_footer_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./clublex/clublex-footer/clublex-footer.component */ 36553);
/* harmony import */ var _fert_fert_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./fert/fert.component */ 30020);
/* harmony import */ var _fert_fert_nav_fert_nav_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./fert/fert-nav/fert-nav.component */ 16885);
/* harmony import */ var _fert_fert_header_fert_header_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./fert/fert-header/fert-header.component */ 52305);
/* harmony import */ var _fert_fert_about_fert_about_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./fert/fert-about/fert-about.component */ 24637);
/* harmony import */ var _fert_fert_view_one_fert_view_one_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./fert/fert-view-one/fert-view-one.component */ 13944);
/* harmony import */ var _fert_fert_view_two_fert_view_two_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./fert/fert-view-two/fert-view-two.component */ 53002);
/* harmony import */ var _fert_fert_bmi_fert_bmi_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./fert/fert-bmi/fert-bmi.component */ 34793);
/* harmony import */ var _fert_fert_testimonial_fert_testimonial_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./fert/fert-testimonial/fert-testimonial.component */ 43306);
/* harmony import */ var _fert_fert_footer_fert_footer_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./fert/fert-footer/fert-footer.component */ 75719);
/* harmony import */ var _granny_granny_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./granny/granny.component */ 7906);
/* harmony import */ var _granny_granny_nav_granny_nav_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./granny/granny-nav/granny-nav.component */ 90029);
/* harmony import */ var _granny_granny_header_granny_header_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./granny/granny-header/granny-header.component */ 23320);
/* harmony import */ var _granny_granny_about_granny_about_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./granny/granny-about/granny-about.component */ 4681);
/* harmony import */ var _granny_granny_view_one_granny_view_one_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./granny/granny-view-one/granny-view-one.component */ 82031);
/* harmony import */ var _granny_granny_view_two_granny_view_two_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./granny/granny-view-two/granny-view-two.component */ 6457);
/* harmony import */ var _granny_granny_bmi_granny_bmi_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./granny/granny-bmi/granny-bmi.component */ 90024);
/* harmony import */ var _granny_granny_testimonial_granny_testimonial_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./granny/granny-testimonial/granny-testimonial.component */ 89082);
/* harmony import */ var _granny_granny_footer_granny_footer_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./granny/granny-footer/granny-footer.component */ 56994);
/* harmony import */ var _Next_Next_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./Next/Next.component */ 26909);
/* harmony import */ var _Next_Next_nav_Next_nav_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./Next/Next-nav/Next-nav.component */ 69211);
/* harmony import */ var _Next_Next_header_Next_header_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./Next/Next-header/Next-header.component */ 33893);
/* harmony import */ var _Next_Next_about_Next_about_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./Next/Next-about/Next-about.component */ 33854);
/* harmony import */ var _Next_Next_view_one_Next_view_one_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./Next/Next-view-one/Next-view-one.component */ 80696);
/* harmony import */ var _Next_Next_view_two_Next_view_two_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./Next/Next-view-two/Next-view-two.component */ 86786);
/* harmony import */ var _Next_Next_bmi_Next_bmi_component__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./Next/Next-bmi/Next-bmi.component */ 98138);
/* harmony import */ var _Next_Next_testimonial_Next_testimonial_component__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./Next/Next-testimonial/Next-testimonial.component */ 44538);
/* harmony import */ var _Next_Next_footer_next_footer_component__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./Next/Next-footer/next-footer.component */ 9971);
/* harmony import */ var _giftya_web_giftya_web_component__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./giftya-web/giftya-web.component */ 13268);
/* harmony import */ var _giftya_web_giftya_web_nav_giftya_web_nav_component__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ./giftya-web/giftya-web-nav/giftya-web-nav.component */ 98621);
/* harmony import */ var _giftya_web_giftya_web_header_giftya_web_header_component__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ./giftya-web/giftya-web-header/giftya-web-header.component */ 71427);
/* harmony import */ var _giftya_web_giftya_web_about_giftya_web_about_component__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ./giftya-web/giftya-web-about/giftya-web-about.component */ 49667);
/* harmony import */ var _giftya_web_giftya_web_feature_giftya_web_feature_component__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! ./giftya-web/giftya-web-feature/giftya-web-feature.component */ 41444);
/* harmony import */ var _giftya_web_giftya_web_screenshots_giftya_web_screenshots_component__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! ./giftya-web/giftya-web-screenshots/giftya-web-screenshots.component */ 73539);
/* harmony import */ var _giftya_web_giftya_web_footer_giftya_web_footer_component__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! ./giftya-web/giftya-web-footer/giftya-web-footer.component */ 47249);
/* harmony import */ var _perfect_gift_web_perfect_gift_web_component__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! ./perfect-gift-web/perfect-gift-web.component */ 14463);
/* harmony import */ var _perfect_gift_web_perfect_gift_web_nav_perfect_gift_web_nav_component__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! ./perfect-gift-web/perfect-gift-web-nav/perfect-gift-web-nav.component */ 14143);
/* harmony import */ var _perfect_gift_web_perfect_gift_web_header_perfect_gift_web_header_component__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! ./perfect-gift-web/perfect-gift-web-header/perfect-gift-web-header.component */ 43157);
/* harmony import */ var _perfect_gift_web_perfect_gift_web_about_perfect_gift_web_about_component__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(/*! ./perfect-gift-web/perfect-gift-web-about/perfect-gift-web-about.component */ 7425);
/* harmony import */ var _perfect_gift_web_perfect_gift_web_feature_perfect_gift_web_feature_component__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(/*! ./perfect-gift-web/perfect-gift-web-feature/perfect-gift-web-feature.component */ 7285);
/* harmony import */ var _perfect_gift_web_perfect_gift_web_screenshots_perfect_gift_web_screenshots_component__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(/*! ./perfect-gift-web/perfect-gift-web-screenshots/perfect-gift-web-screenshots.component */ 28250);
/* harmony import */ var _perfect_gift_web_perfect_gift_web_footer_perfect_gift_web_footer_component__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__(/*! ./perfect-gift-web/perfect-gift-web-footer/perfect-gift-web-footer.component */ 34748);
/* harmony import */ var _resume_resume_component__WEBPACK_IMPORTED_MODULE_63__ = __webpack_require__(/*! ./resume/resume.component */ 88669);
/* harmony import */ var _resume_resume_nav_resume_nav_component__WEBPACK_IMPORTED_MODULE_64__ = __webpack_require__(/*! ./resume/resume-nav/resume-nav.component */ 58887);
/* harmony import */ var _resume_resume_header_resume_header_component__WEBPACK_IMPORTED_MODULE_65__ = __webpack_require__(/*! ./resume/resume-header/resume-header.component */ 89885);
/* harmony import */ var _resume_resume_about_resume_about_component__WEBPACK_IMPORTED_MODULE_66__ = __webpack_require__(/*! ./resume/resume-about/resume-about.component */ 54312);
/* harmony import */ var _resume_resume_services_resume_services_component__WEBPACK_IMPORTED_MODULE_67__ = __webpack_require__(/*! ./resume/resume-services/resume-services.component */ 97712);
/* harmony import */ var _resume_resume_portfolio_resume_portfolio_component__WEBPACK_IMPORTED_MODULE_68__ = __webpack_require__(/*! ./resume/resume-portfolio/resume-portfolio.component */ 19958);
/* harmony import */ var _resume_resume_counter_resume_counter_component__WEBPACK_IMPORTED_MODULE_69__ = __webpack_require__(/*! ./resume/resume-counter/resume-counter.component */ 15056);
/* harmony import */ var _resume_resume_schedule_resume_schedule_component__WEBPACK_IMPORTED_MODULE_70__ = __webpack_require__(/*! ./resume/resume-schedule/resume-schedule.component */ 80846);
/* harmony import */ var _resume_resume_testimonial_resume_testimonial_component__WEBPACK_IMPORTED_MODULE_71__ = __webpack_require__(/*! ./resume/resume-testimonial/resume-testimonial.component */ 47420);
/* harmony import */ var _resume_resume_subscribe_resume_subscribe_component__WEBPACK_IMPORTED_MODULE_72__ = __webpack_require__(/*! ./resume/resume-subscribe/resume-subscribe.component */ 99844);
/* harmony import */ var _resume_resume_footer_resume_footer_component__WEBPACK_IMPORTED_MODULE_73__ = __webpack_require__(/*! ./resume/resume-footer/resume-footer.component */ 85986);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_74__ = __webpack_require__(/*! @angular/core */ 61699);







// import { Ng5SliderModule } from 'ng5-slider';



// Giftya Layout











// Clublex Layout









// Fert Layout









// Granny Layout









// Next Layout









// Giftya Web Layout







// Giftya Web Layout







// Resume Layout












class LayoutsModule {
  static #_ = this.ɵfac = function LayoutsModule_Factory(t) {
    return new (t || LayoutsModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵdefineNgModule"]({
    type: LayoutsModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_75__.CommonModule, _layouts_routing_module__WEBPACK_IMPORTED_MODULE_0__.LayoutsRoutingModule, swiper_angular__WEBPACK_IMPORTED_MODULE_76__.SwiperModule, ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_77__.CarouselModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_78__.NgbModule, ng_gallery__WEBPACK_IMPORTED_MODULE_79__.GalleryModule, ng_gallery_lightbox__WEBPACK_IMPORTED_MODULE_80__.LightboxModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule, _angular_forms__WEBPACK_IMPORTED_MODULE_81__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_81__.ReactiveFormsModule,
    // Ng5SliderModule,
    ngx_masonry__WEBPACK_IMPORTED_MODULE_82__.NgxMasonryModule]
  });
}

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_74__["ɵɵsetNgModuleScope"](LayoutsModule, {
    declarations: [
    // giftya 
    _giftya_giftya_component__WEBPACK_IMPORTED_MODULE_2__.GiftyaComponent, _giftya_giftya_nav_giftya_nav_component__WEBPACK_IMPORTED_MODULE_3__.GiftyaNavComponent, _giftya_giftya_header_giftya_header_component__WEBPACK_IMPORTED_MODULE_4__.GiftyaHeaderComponent, _giftya_giftya_about_giftya_about_component__WEBPACK_IMPORTED_MODULE_5__.GiftyaAboutComponent, _giftya_giftya_view_one_giftya_view_one_component__WEBPACK_IMPORTED_MODULE_6__.GiftyaViewOneComponent, _giftya_giftya_view_two_giftya_view_two_component__WEBPACK_IMPORTED_MODULE_7__.GiftyaViewTwoComponent, _giftya_giftya_view_three_giftya_view_three_component__WEBPACK_IMPORTED_MODULE_8__.GiftyaViewThreeComponent, _giftya_giftya_screenshorts_giftya_screenshorts_component__WEBPACK_IMPORTED_MODULE_9__.GiftyaScreenshortsComponent, _giftya_giftya_bmi_giftya_bmi_component__WEBPACK_IMPORTED_MODULE_10__.GiftyaBMIComponent, _giftya_giftya_testimonial_giftya_testimonial_component__WEBPACK_IMPORTED_MODULE_11__.GiftyaTestimonialComponent, _giftya_giftya_footer_giftya_footer_component__WEBPACK_IMPORTED_MODULE_12__.GiftyaFooterComponent,
    // clublex
    _clublex_clublex_component__WEBPACK_IMPORTED_MODULE_13__.ClublexComponent, _clublex_clublex_nav_clublex_nav_component__WEBPACK_IMPORTED_MODULE_14__.ClublexNavComponent, _clublex_clublex_header_giftya_header_component__WEBPACK_IMPORTED_MODULE_15__.ClublexHeaderComponent, _clublex_clublex_about_clublex_about_component__WEBPACK_IMPORTED_MODULE_16__.ClublexAboutComponent, _clublex_clublex_view_one_giftya_view_one_component__WEBPACK_IMPORTED_MODULE_17__.ClublexViewOneComponent, _clublex_clublex_view_two_clublex_view_two_component__WEBPACK_IMPORTED_MODULE_18__.ClublexViewTwoComponent, _clublex_clublex_bmi_giftya_bmi_component__WEBPACK_IMPORTED_MODULE_19__.ClublexBMIComponent, _clublex_clublex_testimonial_clublex_testimonial_component__WEBPACK_IMPORTED_MODULE_20__.ClublexTestimonialComponent, _clublex_clublex_footer_clublex_footer_component__WEBPACK_IMPORTED_MODULE_21__.ClublexFooterComponent,
    // fert
    _fert_fert_component__WEBPACK_IMPORTED_MODULE_22__.FertComponent, _fert_fert_nav_fert_nav_component__WEBPACK_IMPORTED_MODULE_23__.FertNavComponent, _fert_fert_header_fert_header_component__WEBPACK_IMPORTED_MODULE_24__.FertHeaderComponent, _fert_fert_about_fert_about_component__WEBPACK_IMPORTED_MODULE_25__.FertAboutComponent, _fert_fert_view_one_fert_view_one_component__WEBPACK_IMPORTED_MODULE_26__.FertViewOneComponent, _fert_fert_view_two_fert_view_two_component__WEBPACK_IMPORTED_MODULE_27__.FertViewTwoComponent, _fert_fert_bmi_fert_bmi_component__WEBPACK_IMPORTED_MODULE_28__.FertBMIComponent, _fert_fert_testimonial_fert_testimonial_component__WEBPACK_IMPORTED_MODULE_29__.FertTestimonialComponent, _fert_fert_footer_fert_footer_component__WEBPACK_IMPORTED_MODULE_30__.FertFooterComponent,
    // granny
    _granny_granny_component__WEBPACK_IMPORTED_MODULE_31__.GrannyComponent, _granny_granny_nav_granny_nav_component__WEBPACK_IMPORTED_MODULE_32__.GrannyNavComponent, _granny_granny_header_granny_header_component__WEBPACK_IMPORTED_MODULE_33__.GrannyHeaderComponent, _granny_granny_about_granny_about_component__WEBPACK_IMPORTED_MODULE_34__.GrannyAboutComponent, _granny_granny_view_one_granny_view_one_component__WEBPACK_IMPORTED_MODULE_35__.GrannyViewOneComponent, _granny_granny_view_two_granny_view_two_component__WEBPACK_IMPORTED_MODULE_36__.GrannyViewTwoComponent, _granny_granny_bmi_granny_bmi_component__WEBPACK_IMPORTED_MODULE_37__.GrannyBMIComponent, _granny_granny_testimonial_granny_testimonial_component__WEBPACK_IMPORTED_MODULE_38__.GrannyTestimonialComponent, _granny_granny_footer_granny_footer_component__WEBPACK_IMPORTED_MODULE_39__.GrannyFooterComponent,
    // Next
    _Next_Next_component__WEBPACK_IMPORTED_MODULE_40__.NextComponent, _Next_Next_nav_Next_nav_component__WEBPACK_IMPORTED_MODULE_41__.NextNavComponent, _Next_Next_header_Next_header_component__WEBPACK_IMPORTED_MODULE_42__.NextHeaderComponent, _Next_Next_about_Next_about_component__WEBPACK_IMPORTED_MODULE_43__.NextAboutComponent, _Next_Next_view_one_Next_view_one_component__WEBPACK_IMPORTED_MODULE_44__.NextViewOneComponent, _Next_Next_view_two_Next_view_two_component__WEBPACK_IMPORTED_MODULE_45__.NextViewTwoComponent, _Next_Next_bmi_Next_bmi_component__WEBPACK_IMPORTED_MODULE_46__.NextBMIComponent, _Next_Next_testimonial_Next_testimonial_component__WEBPACK_IMPORTED_MODULE_47__.NextTestimonialComponent, _Next_Next_footer_next_footer_component__WEBPACK_IMPORTED_MODULE_48__.NextFooterComponent,
    // giftya web 
    _giftya_web_giftya_web_component__WEBPACK_IMPORTED_MODULE_49__.GiftyaWebComponent, _giftya_web_giftya_web_nav_giftya_web_nav_component__WEBPACK_IMPORTED_MODULE_50__.GiftyaWebNavComponent, _giftya_web_giftya_web_header_giftya_web_header_component__WEBPACK_IMPORTED_MODULE_51__.GiftyaWebHeaderComponent, _giftya_web_giftya_web_about_giftya_web_about_component__WEBPACK_IMPORTED_MODULE_52__.GiftyaWebAboutComponent, _giftya_web_giftya_web_feature_giftya_web_feature_component__WEBPACK_IMPORTED_MODULE_53__.GiftyaWebFeatureComponent, _giftya_web_giftya_web_screenshots_giftya_web_screenshots_component__WEBPACK_IMPORTED_MODULE_54__.GiftyaWebScreenshotsComponent, _giftya_web_giftya_web_footer_giftya_web_footer_component__WEBPACK_IMPORTED_MODULE_55__.GiftyaWebFooterComponent,
    // prerfect gift web 
    _perfect_gift_web_perfect_gift_web_component__WEBPACK_IMPORTED_MODULE_56__.PerfectGiftWebComponent, _perfect_gift_web_perfect_gift_web_nav_perfect_gift_web_nav_component__WEBPACK_IMPORTED_MODULE_57__.PerfectGiftWebNavComponent, _perfect_gift_web_perfect_gift_web_header_perfect_gift_web_header_component__WEBPACK_IMPORTED_MODULE_58__.PerfectGiftWebHeaderComponent, _perfect_gift_web_perfect_gift_web_about_perfect_gift_web_about_component__WEBPACK_IMPORTED_MODULE_59__.PerfectGiftWebAboutComponent, _perfect_gift_web_perfect_gift_web_feature_perfect_gift_web_feature_component__WEBPACK_IMPORTED_MODULE_60__.PerfectGiftWebFeatureComponent, _perfect_gift_web_perfect_gift_web_screenshots_perfect_gift_web_screenshots_component__WEBPACK_IMPORTED_MODULE_61__.PerfectGiftWebScreenshotsComponent, _perfect_gift_web_perfect_gift_web_footer_perfect_gift_web_footer_component__WEBPACK_IMPORTED_MODULE_62__.PerfectGiftWebFooterComponent,
    // resume 
    _resume_resume_component__WEBPACK_IMPORTED_MODULE_63__.ResumeComponent, _resume_resume_nav_resume_nav_component__WEBPACK_IMPORTED_MODULE_64__.ResumeNavComponent, _resume_resume_header_resume_header_component__WEBPACK_IMPORTED_MODULE_65__.ResumeHeaderComponent, _resume_resume_about_resume_about_component__WEBPACK_IMPORTED_MODULE_66__.ResumeAboutComponent, _resume_resume_services_resume_services_component__WEBPACK_IMPORTED_MODULE_67__.ResumeServicesComponent, _resume_resume_portfolio_resume_portfolio_component__WEBPACK_IMPORTED_MODULE_68__.ResumePortfolioComponent, _resume_resume_counter_resume_counter_component__WEBPACK_IMPORTED_MODULE_69__.ResumeCounterComponent, _resume_resume_schedule_resume_schedule_component__WEBPACK_IMPORTED_MODULE_70__.ResumeScheduleComponent, _resume_resume_testimonial_resume_testimonial_component__WEBPACK_IMPORTED_MODULE_71__.ResumetesTimonialComponent, _resume_resume_subscribe_resume_subscribe_component__WEBPACK_IMPORTED_MODULE_72__.ResumeSubscribeComponent, _resume_resume_footer_resume_footer_component__WEBPACK_IMPORTED_MODULE_73__.ResumeFooterComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_75__.CommonModule, _layouts_routing_module__WEBPACK_IMPORTED_MODULE_0__.LayoutsRoutingModule, swiper_angular__WEBPACK_IMPORTED_MODULE_76__.SwiperModule, ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_77__.CarouselModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_78__.NgbModule, ng_gallery__WEBPACK_IMPORTED_MODULE_79__.GalleryModule, ng_gallery_lightbox__WEBPACK_IMPORTED_MODULE_80__.LightboxModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule, _angular_forms__WEBPACK_IMPORTED_MODULE_81__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_81__.ReactiveFormsModule,
    // Ng5SliderModule,
    ngx_masonry__WEBPACK_IMPORTED_MODULE_82__.NgxMasonryModule]
  });
})();

/***/ }),

/***/ 7425:
/*!*****************************************************************************************************!*\
  !*** ./src/app/layouts/perfect-gift-web/perfect-gift-web-about/perfect-gift-web-about.component.ts ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PerfectGiftWebAboutComponent: () => (/* binding */ PerfectGiftWebAboutComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 26575);


function PerfectGiftWebAboutComponent_div_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div")(1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 16)(4, "h5", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const data_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", data_r1.img, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r1.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r1.description);
  }
}
class PerfectGiftWebAboutComponent {
  constructor() {
    this.features = [{
      img: 'assets/images/resume/icon/1.png',
      title: 'Clean Design',
      description: 'Lorem Ipsum is simply dummy text of the printing and industry.'
    }, {
      img: 'assets/images/resume/icon/1.png',
      title: 'Dedicated Support',
      description: 'Lorem Ipsum is simply dummy text of the printing and industry.'
    }, {
      img: 'assets/images/resume/icon/1.png',
      title: 'Easy Customiable',
      description: 'Lorem Ipsum is simply dummy text of the printing and industry.'
    }, {
      img: 'assets/images/resume/icon/1.png',
      title: 'Multiple Demo',
      description: 'Lorem Ipsum is simply dummy text of the printing and industry.'
    }];
  }
  ngOnInit() {}
  static #_ = this.ɵfac = function PerfectGiftWebAboutComponent_Factory(t) {
    return new (t || PerfectGiftWebAboutComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: PerfectGiftWebAboutComponent,
    selectors: [["app-perfect-gift-web-about"]],
    decls: 17,
    vars: 1,
    consts: [["id", "feaure", 1, "saas2", "feature", "booking"], [1, "container"], [1, "row"], [1, "col-md-10", "offset-md-1"], [1, "title"], [1, "main-title"], [1, "sub-title"], [1, "sub-title-para"], [1, "col-xl-8", "col-md-7"], [1, "center-text", "justify-content-center"], [1, "image-container"], ["src", "assets/images/resume/perfect-gift-web/perfect-gift-2.png", "alt", "", 1, "img-fluid", "advance-feature-img"], [1, "col-xl-4", "col-md-5"], [4, "ngFor", "ngForOf"], [1, "center-content", "justify-content-start"], ["alt", "", 1, "img-fluid", 3, "src"], [1, "feature-content"], [1, "feature-head"], [1, "feature-para"]],
    template: function PerfectGiftWebAboutComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Heading");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6)(9, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "We believe we have created the most efficient SaaS landing page for your users. Landing page with features that will convince you to use it for your SaaS business.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8)(12, "div", 9)(13, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, PerfectGiftWebAboutComponent_div_16_Template, 8, 3, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.features);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}


/***/ }),

/***/ 7285:
/*!*********************************************************************************************************!*\
  !*** ./src/app/layouts/perfect-gift-web/perfect-gift-web-feature/perfect-gift-web-feature.component.ts ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PerfectGiftWebFeatureComponent: () => (/* binding */ PerfectGiftWebFeatureComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 26575);


function PerfectGiftWebFeatureComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10)(1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div")(4, "h4", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const data_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r1.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r1.description);
  }
}
class PerfectGiftWebFeatureComponent {
  constructor() {
    this.business = [{
      title: 'First Problem',
      description: 'Lorem Ipsum is simply dummy text of the print- ing and typesetting industry.'
    }, {
      title: 'Second Problem',
      description: 'Lorem Ipsum is simply dummy text of the print- ing and typesetting industry.'
    }, {
      title: 'Third Problem',
      description: 'Lorem Ipsum is simply dummy text of the print- ing and typesetting industry.'
    }];
  }
  ngOnInit() {}
  static #_ = this.ɵfac = function PerfectGiftWebFeatureComponent_Factory(t) {
    return new (t || PerfectGiftWebFeatureComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: PerfectGiftWebFeatureComponent,
    selectors: [["app-perfect-gift-web-feature"]],
    decls: 11,
    vars: 1,
    consts: [[1, "saas2", "bg-gradient", "quick-sol"], [1, "container", "set-center-div"], [1, "row"], [1, "col-lg-6"], [1, "offers-container"], [1, "text-white", "offer-heading-text"], [1, "bottom-border"], ["class", "offers-content", 4, "ngFor", "ngForOf"], [1, "center-text", "side-img"], ["alt", "", "src", "assets/images/resume/perfect-gift-web/perfect-gift-3.jpg", "data-tilt", "", "data-tilt-max", "3", "data-tilt-speed", "400", "data-tilt-perspective", "500", 1, "img-fluid"], [1, "offers-content"], [1, "d-flex"], ["aria-hidden", "true", 1, "fa", "fa-check-circle"], [1, "offer-main-text", "text-white"], [1, "offer-sub-text", "text-white"]],
    template: function PerfectGiftWebFeatureComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "h3", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "problem solve heading");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, PerfectGiftWebFeatureComponent_div_8_Template, 8, 2, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.business);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}


/***/ }),

/***/ 34748:
/*!*******************************************************************************************************!*\
  !*** ./src/app/layouts/perfect-gift-web/perfect-gift-web-footer/perfect-gift-web-footer.component.ts ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PerfectGiftWebFooterComponent: () => (/* binding */ PerfectGiftWebFooterComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _shared_components_tap_to_top_tap_to_top_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/components/tap-to-top/tap-to-top.component */ 55842);



const _c0 = function () {
  return {
    "background-color": "copyright-bg",
    "color": "copyright",
    "text-align": "center",
    "padding": "20px",
    "position": "absolute",
    "bottom": "0",
    "width": "100%",
    "box-shadow": "0 -2px 5px rgba(0, 0, 0, 0.1)"
  };
};
class PerfectGiftWebFooterComponent {
  constructor() {}
  ngOnInit() {}
  static #_ = this.ɵfac = function PerfectGiftWebFooterComponent_Factory(t) {
    return new (t || PerfectGiftWebFooterComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: PerfectGiftWebFooterComponent,
    selectors: [["app-perfect-gift-web-footer"]],
    decls: 23,
    vars: 2,
    consts: [[1, "resume", "copyright", "copyright-bg", 3, "ngStyle"], [1, "container"], [1, "row"], [1, "col-12"], [1, "text-center"], [1, "social-link", "link-horizontal"], [1, "justify-content-center"], ["href", "https://www.facebook.com/UMAR0061", 1, "copyright-text"], ["aria-hidden", "true", 1, "fa", "fa-facebook"], ["href", "https://www.linkedin.com/in/umar-rasheed/", 1, "copyright-text"], ["aria-hidden", "true", 1, "fa", "fa-linkedin"], ["href", "https://www.instagram.com/umar.rasheed61/", 1, "copyright-text"], ["aria-hidden", "true", 1, "fa", "fa-instagram"], [1, "m-l-auto", "center-para"], [1, "copyright-text", "text-center"], ["href", "https://www.linkedin.com/in/umar-rasheed/"]],
    template: function PerfectGiftWebFooterComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "footer", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "ul", 6)(7, "li")(8, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "li")(11, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "li")(14, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 3)(17, "div", 13)(18, "h6", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "\u00A9 2024 portfolio powered by ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "Umar Rasheed");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "app-tap-to-top");
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](1, _c0));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgStyle, _shared_components_tap_to_top_tap_to_top_component__WEBPACK_IMPORTED_MODULE_0__.TapToTopComponent],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}


/***/ }),

/***/ 43157:
/*!*******************************************************************************************************!*\
  !*** ./src/app/layouts/perfect-gift-web/perfect-gift-web-header/perfect-gift-web-header.component.ts ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PerfectGiftWebHeaderComponent: () => (/* binding */ PerfectGiftWebHeaderComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 27947);


class PerfectGiftWebHeaderComponent {
  constructor() {}
  ngOnInit() {}
  static #_ = this.ɵfac = function PerfectGiftWebHeaderComponent_Factory(t) {
    return new (t || PerfectGiftWebHeaderComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: PerfectGiftWebHeaderComponent,
    selectors: [["app-perfect-gift-web-header"]],
    decls: 34,
    vars: 0,
    consts: [["id", "header", 1, "agency", "header"], [1, "agency", "bg"], [1, "container"], [1, "row"], [1, "col-md-6"], [1, "center-text"], [1, "header-text"], [1, "text-uppercase"], [1, "bold-text"], [1, "header-sub-text"], [1, "link-horizontal"], ["routerLink", "/resume", 1, "btn", "btn-default", "btn-gradient", "text-white"], [1, "set-abs", "abs-horizon-center", "girl-boy"], ["src", "assets/images/resume/perfect-gift-web/perfect-gift-1.png", "alt", "", "data-tilt", "", "data-tilt-max", "5", "data-tilt-perspective", "500", "data-tilt-speed", "400", 1, "img-fluid", "width600"], [1, "plus-container", "plus-container8"], [1, "plus", "white"], [1, "plus-container"], [1, "plus"], [1, "plus-container", "plus-container2"], [1, "plus", "plus-medium"], [1, "plus-container", "plus-container3"], [1, "plus", "plus-small"], [1, "plus-container", "plus-container4"], [1, "plus-container", "plus-container5"]],
    template: function PerfectGiftWebHeaderComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "div")(7, "div", 6)(8, "h1", 7)(9, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Check My");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Perfect Gift Web");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9)(13, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi quod vel voluptatum, id nostrum provident itaque odio voluptatem. Cumque aspernatur culpa et. Laudantium quisquam illo numquam eveniet, ipsum debitis voluptatum.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 10)(16, "ul")(17, "li")(18, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Contact");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      }
    },
    dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLink],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}


/***/ }),

/***/ 14143:
/*!*************************************************************************************************!*\
  !*** ./src/app/layouts/perfect-gift-web/perfect-gift-web-nav/perfect-gift-web-nav.component.ts ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PerfectGiftWebNavComponent: () => (/* binding */ PerfectGiftWebNavComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _shared_components_navigation_menu_menu_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/components/navigation/menu/menu.component */ 93209);


class PerfectGiftWebNavComponent {
  constructor() {}
  ngOnInit() {}
  static #_ = this.ɵfac = function PerfectGiftWebNavComponent_Factory(t) {
    return new (t || PerfectGiftWebNavComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: PerfectGiftWebNavComponent,
    selectors: [["app-perfect-gift-web-nav"]],
    decls: 8,
    vars: 0,
    consts: [[1, "resume", "loding-header", "nav-abs", "custom-scroll"], [1, "container"], [1, "row"], [1, "col"], ["href", "#", 1, "d-inline-block", "m-r-auto"], ["src", "assets/images/resume/logo.png", "alt", "", 1, "img-fluid", 2, "width", "100px"]],
    template: function PerfectGiftWebNavComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "header", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "nav")(5, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "app-menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
      }
    },
    dependencies: [_shared_components_navigation_menu_menu_component__WEBPACK_IMPORTED_MODULE_0__.MenuComponent],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}


/***/ }),

/***/ 28250:
/*!*****************************************************************************************************************!*\
  !*** ./src/app/layouts/perfect-gift-web/perfect-gift-web-screenshots/perfect-gift-web-screenshots.component.ts ***!
  \*****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PerfectGiftWebScreenshotsComponent: () => (/* binding */ PerfectGiftWebScreenshotsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-owl-carousel-o */ 99436);



function PerfectGiftWebScreenshotsComponent_ng_container_11_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 12);
  }
  if (rf & 2) {
    const screenshot_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", screenshot_r1.img, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
  }
}
function PerfectGiftWebScreenshotsComponent_ng_container_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PerfectGiftWebScreenshotsComponent_ng_container_11_ng_template_1_Template, 1, 1, "ng-template", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
}
class PerfectGiftWebScreenshotsComponent {
  constructor() {
    this.screenshots = [{
      img: "assets/images/resume/perfect-gift-web/perfect-gift-4.png"
    }, {
      img: "assets/images/resume/perfect-gift-web/perfect-gift-5.png"
    }, {
      img: "assets/images/resume/perfect-gift-web/perfect-gift-6.png"
    }, {
      img: "assets/images/resume/perfect-gift-web/perfect-gift-7.png"
    }, {
      img: "assets/images/resume/perfect-gift-web/perfect-gift-8.png"
    }];
    this.screenshotscarouselOptions = {
      items: 3,
      margin: 0,
      autoHeight: true,
      nav: false,
      autoplay: true,
      center: true,
      slideSpeed: 300,
      paginationSpeed: 400,
      dots: true,
      loop: true,
      responsive: {
        0: {
          items: 1
        },
        992: {
          items: 3
        }
      }
    };
  }
  ngOnInit() {}
  static #_ = this.ɵfac = function PerfectGiftWebScreenshotsComponent_Factory(t) {
    return new (t || PerfectGiftWebScreenshotsComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: PerfectGiftWebScreenshotsComponent,
    selectors: [["app-perfect-gift-web-screenshots"]],
    decls: 12,
    vars: 2,
    consts: [["id", "screenshot", 1, "saas2", "laptop-slider", "bg-light"], [1, "container"], [1, "row"], [1, "col-md-10", "offset-md-1"], [1, "title"], [1, "main-title"], [1, "text-white", "text-dark"], [1, "container-fluid"], [1, "slider-container"], [1, "trainers-slider", 3, "options"], [4, "ngFor", "ngForOf"], ["carouselSlide", "", "class", "item"], ["alt", "", 1, "img-fluid", 3, "src"]],
    template: function PerfectGiftWebScreenshotsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "h2", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "screen shot");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7)(9, "div", 8)(10, "owl-carousel-o", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, PerfectGiftWebScreenshotsComponent_ng_container_11_Template, 2, 0, "ng-container", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx.screenshotscarouselOptions);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.screenshots);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_2__.CarouselComponent, ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_2__.CarouselSlideDirective],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}


/***/ }),

/***/ 14463:
/*!************************************************************************!*\
  !*** ./src/app/layouts/perfect-gift-web/perfect-gift-web.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PerfectGiftWebComponent: () => (/* binding */ PerfectGiftWebComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ 36480);
/* harmony import */ var _shared_service_color_scss_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/service/color-scss.service */ 94342);
/* harmony import */ var _perfect_gift_web_screenshots_perfect_gift_web_screenshots_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./perfect-gift-web-screenshots/perfect-gift-web-screenshots.component */ 28250);
/* harmony import */ var _perfect_gift_web_footer_perfect_gift_web_footer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./perfect-gift-web-footer/perfect-gift-web-footer.component */ 34748);






class PerfectGiftWebComponent {
  constructor(route, title, colorPicker) {
    this.route = route;
    this.title = title;
    this.colorPicker = colorPicker;
  }
  ngOnInit() {
    this.title.setTitle(this.route.snapshot.data['title']);
    this.colorPicker.setColorScheme('color-1');
  }
  static #_ = this.ɵfac = function PerfectGiftWebComponent_Factory(t) {
    return new (t || PerfectGiftWebComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__.Title), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_shared_service_color_scss_service__WEBPACK_IMPORTED_MODULE_0__.ColorScssService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: PerfectGiftWebComponent,
    selectors: [["app-perfect-gift-web"]],
    decls: 2,
    vars: 0,
    template: function PerfectGiftWebComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-perfect-gift-web-screenshots")(1, "app-perfect-gift-web-footer");
      }
    },
    dependencies: [_perfect_gift_web_screenshots_perfect_gift_web_screenshots_component__WEBPACK_IMPORTED_MODULE_1__.PerfectGiftWebScreenshotsComponent, _perfect_gift_web_footer_perfect_gift_web_footer_component__WEBPACK_IMPORTED_MODULE_2__.PerfectGiftWebFooterComponent],
    styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"],
    encapsulation: 2
  });
}


/***/ }),

/***/ 54312:
/*!***********************************************************************!*\
  !*** ./src/app/layouts/resume/resume-about/resume-about.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ResumeAboutComponent: () => (/* binding */ ResumeAboutComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 61699);

class ResumeAboutComponent {
  constructor() {}
  ngOnInit() {}
  static #_ = this.ɵfac = function ResumeAboutComponent_Factory(t) {
    return new (t || ResumeAboutComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: ResumeAboutComponent,
    selectors: [["app-resume-about"]],
    decls: 28,
    vars: 0,
    consts: [["id", "about", 1, "gym", "format"], [1, "container"], [1, "row"], [1, "col-md-6"], [1, "text-center", "center-content"], [1, "about-img"], [1, "borders-around"], [1, "bg-black"], ["src", "assets/images/resume/main/about_main.jpg", "alt", "", 1, "img-fluid", "format-img"], [1, "center-text"], [1, "format-small-text"], [1, "font-primary", "borders-before"], [1, "format-sub-text"], [1, "p-light", "about-para"]],
    template: function ResumeAboutComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "div", 6)(7, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 3)(11, "div", 9)(12, "div")(13, "div", 10)(14, "h6", 11)(15, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "A bit more about me ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 12)(18, "p", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "During my tenure at Wolfe LLC, I played a pivotal role in enhancing app performance for GiftYa through efficient state management and React hooks. I integrated multiple payment methods, including PayPal, Google Pay, Apple Pay, and Stripe, as well as social login options, significantly improving user experience. Additionally, I developed Gift Card Granny from scratch, which resulted in substantial revenue growth and thousands of downloads. Both projects leveraged technologies such as React Native, React Query, Axios, and Redux, showcasing my ability to deliver high-impact solutions. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " At Tkxel, I led the development of FertApp by implementing a highly customized UI using React Native components and managing the state with Redux for better performance. My work at Purelogics included developing the UI and integrating APIs for ClubLax, which featured real-time scoring, and developing the UI with social logins for NextHire's mobile and admin panel. These projects utilized technologies like React Native, Socket Programming, Axios, Redux, Sagas, AWS Amplify, and Cognito, demonstrating my expertise in creating robust and user-friendly applications. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " As an expert in mobile and web development, I bring a wealth of knowledge in optimizing app performance, integrating advanced features, and ensuring seamless user experiences. My ability to lead teams and deliver projects on time and within budget has been a cornerstone of my professional journey. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " I am a dedicated team player and leader, known for my collaborative approach and ability to inspire and guide teams to achieve their best work. My passion for technology and commitment to excellence drives me to continuously learn and innovate, staying ahead of industry trends and delivering cutting-edge solutions. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "p", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " I am passionate about creating impactful digital experiences and advancing the field of software development. Whether it's leading a team or diving into complex coding challenges, I am always eager to contribute my expertise and drive projects to success. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()()();
      }
    },
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}


/***/ }),

/***/ 15056:
/*!***************************************************************************!*\
  !*** ./src/app/layouts/resume/resume-counter/resume-counter.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ResumeCounterComponent: () => (/* binding */ ResumeCounterComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-owl-carousel-o */ 99436);



function ResumeCounterComponent_ng_container_6_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const brand_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", brand_r1.img, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
  }
}
function ResumeCounterComponent_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ResumeCounterComponent_ng_container_6_ng_template_1_Template, 2, 1, "ng-template", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
}
class ResumeCounterComponent {
  constructor() {
    this.brands = [{
      img: "assets/images/resume/technologies/1.svg"
    }, {
      img: "assets/images/resume/technologies/2.svg"
    }, {
      img: "assets/images/resume/technologies/3.svg"
    }, {
      img: "assets/images/resume/technologies/4.svg"
    }, {
      img: "assets/images/resume/technologies/5.svg"
    }, {
      img: "assets/images/resume/technologies/6.svg"
    }, {
      img: "assets/images/resume/technologies/7.svg"
    }, {
      img: "assets/images/resume/technologies/8.svg"
    }, {
      img: "assets/images/resume/technologies/9.svg"
    }, {
      img: "assets/images/resume/technologies/10.svg"
    }];
    this.brandcarouselOptions = {
      items: 5,
      margin: 40,
      autoHeight: true,
      nav: false,
      dots: false,
      autoplay: true,
      slideSpeed: 300,
      paginationSpeed: 400,
      loop: true,
      responsive: {
        0: {
          items: 1,
          margin: 40
        },
        320: {
          items: 1,
          margin: 30
        },
        360: {
          items: 2,
          margin: 20
        },
        480: {
          items: 3,
          margin: 30
        },
        768: {
          items: 4,
          margin: 30
        },
        992: {
          items: 5
        }
      }
    };
  }
  ngOnInit() {}
  static #_ = this.ɵfac = function ResumeCounterComponent_Factory(t) {
    return new (t || ResumeCounterComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: ResumeCounterComponent,
    selectors: [["app-resume-counter"]],
    decls: 7,
    vars: 2,
    consts: [[1, "saas2", "brand", "mt-0", "pt-5", "mb-0", "pb-5"], [1, "col-md-10", "offset-md-1", "col-12"], [1, "container", "saas2-services"], [1, "row"], [1, "col-12"], [1, "brand-slider", 3, "options"], [4, "ngFor", "ngForOf"], ["carouselSlide", "", "class", "item"], ["href", "javascript:void(0)"], ["alt", "", 1, "img-fluid", 3, "src"]],
    template: function ResumeCounterComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "owl-carousel-o", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ResumeCounterComponent_ng_container_6_Template, 2, 0, "ng-container", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx.brandcarouselOptions);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.brands);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_2__.CarouselComponent, ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_2__.CarouselSlideDirective],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}


/***/ }),

/***/ 85986:
/*!*************************************************************************!*\
  !*** ./src/app/layouts/resume/resume-footer/resume-footer.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ResumeFooterComponent: () => (/* binding */ ResumeFooterComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _shared_components_tap_to_top_tap_to_top_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/components/tap-to-top/tap-to-top.component */ 55842);



const _c0 = function () {
  return {
    "background-color": "copyright-bg",
    "color": "copyright",
    "text-align": "center",
    "padding": "20px",
    "position": "absolute",
    "bottom": "0",
    "width": "100%",
    "box-shadow": "0 -2px 5px rgba(0, 0, 0, 0.1)"
  };
};
class ResumeFooterComponent {
  constructor() {}
  ngOnInit() {}
  static #_ = this.ɵfac = function ResumeFooterComponent_Factory(t) {
    return new (t || ResumeFooterComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: ResumeFooterComponent,
    selectors: [["app-resume-footer"]],
    decls: 23,
    vars: 2,
    consts: [[1, "resume", "copyright", "copyright-bg", 3, "ngStyle"], [1, "container"], [1, "row"], [1, "col-12"], [1, "text-center"], [1, "social-link", "link-horizontal"], [1, "justify-content-center"], ["href", "https://www.facebook.com/UMAR0061", 1, "copyright-text"], ["aria-hidden", "true", 1, "fa", "fa-facebook"], ["href", "https://www.linkedin.com/in/umar-rasheed/", 1, "copyright-text"], ["aria-hidden", "true", 1, "fa", "fa-linkedin"], ["href", "https://www.instagram.com/umar.rasheed61/", 1, "copyright-text"], ["aria-hidden", "true", 1, "fa", "fa-instagram"], [1, "m-l-auto", "center-para"], [1, "copyright-text", "text-center"], ["href", "https://www.linkedin.com/in/umar-rasheed/"]],
    template: function ResumeFooterComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "footer", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "ul", 6)(7, "li")(8, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "li")(11, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "li")(14, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 3)(17, "div", 13)(18, "h6", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "\u00A9 2024 portfolio powered by ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "Umar Rasheed");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "app-tap-to-top");
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](1, _c0));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgStyle, _shared_components_tap_to_top_tap_to_top_component__WEBPACK_IMPORTED_MODULE_0__.TapToTopComponent],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}


/***/ }),

/***/ 89885:
/*!*************************************************************************!*\
  !*** ./src/app/layouts/resume/resume-header/resume-header.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ResumeHeaderComponent: () => (/* binding */ ResumeHeaderComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 26575);


const _c0 = function () {
  return {
    "background-image": "url(assets/images/resume/h7-bg-text.png)"
  };
};
class ResumeHeaderComponent {
  constructor() {}
  ngOnInit() {}
  static #_ = this.ɵfac = function ResumeHeaderComponent_Factory(t) {
    return new (t || ResumeHeaderComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: ResumeHeaderComponent,
    selectors: [["app-resume-header"]],
    decls: 50,
    vars: 2,
    consts: [["id", "header", 1, "resume", "header"], [1, "header7-content"], [1, "resume", "bg", "bg-pink", 3, "ngStyle"], [1, "container"], [1, "row"], [1, "col-lg-5", "col-md-6"], [2, "position", "relative", "padding-bottom", "56.25%", "height", "0"], ["src", "https://www.loom.com/embed/c317dddf8c27495ebb2b42bbcf72ba6a?sid=c2f85d7b-00b6-4dc7-be3e-b25038a861c0", "frameborder", "0", "webkitallowfullscreen", "", "mozallowfullscreen", "", "allowfullscreen", "", 2, "position", "absolute", "top", "0", "left", "0", "width", "100%", "height", "100%", "margin-top", "100px"], [1, "col-lg-6", "col-md-6", "offset-lg-1"], [1, "center-text"], [1, "header-sub-text"], [1, "header-text"], [1, "bold-text"], [1, "font-primary"], [1, "font-primary", "font-large", 2, "font-size", "1rem"], [1, "contact-info"], ["href", "tel:+923234801119"], ["href", "mailto:umar.rasheed.mebest@gmail.com"], [1, "link-horizontal"], ["href", "../../../../assets/images/Resume.pdf", 1, "btn", "btn-default", "primary-btn", "back-white"], [1, "p-2", "width120"], ["href", "https://www.linkedin.com/in/umar-rasheed/", "target", "_blank"], ["src", "assets/images/resume/social-media/linkedIn.png", "alt", "", 1, "img-fluid"], ["href", "https://www.facebook.com/UMAR0061", "target", "_blank"], ["src", "assets/images/resume/social-media/facebook.png", "alt", "", 1, "img-fluid"]],
    template: function ResumeHeaderComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "iframe", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 8)(9, "div", 9)(10, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 11)(13, "h1")(14, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Hi, I\u2019m");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " Umar Rasheed");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 10)(19, "h4", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "A senior full-stack software developer working with React Native, React JS, TypeScript, Node and the web platform.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 10)(22, "p", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Experienced software engineer with over 8 years in mobile and web development, specializing in designing and implementing applications using React Native, React, Angular, and other leading frameworks. Proven ability to deliver high-quality projects on time and within budget, demonstrating strong expertise in leading teams and optimizing performance. Adept at software architecture, code review, and applying industry best practices to ensure exceptional user experiences. I am eager to leverage my extensive knowledge and advanced skills in a lead or analyst role to drive innovation and achieve impactful results in the software development field.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 15)(25, "p", 13)(26, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Contact Information:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "p", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Phone: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "+923234801119");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "p", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Email: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "umar.rasheed.mebest@gmail.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "p", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Address: Lahore, Pakistan");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 18)(39, "ul")(40, "li")(41, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "download cv");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "ul", 20)(44, "li")(45, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "img", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "li")(48, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "img", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgStyle],
    styles: [".contact-info[_ngcontent-%COMP%] {\n  margin: 20px 0;\n  \n\n  font-size: 16px;\n  \n\n  color: #333;\n  \n\n}\n\n.contact-info[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #007bff;\n  \n\n  text-decoration: none;\n  \n\n}\n\n.contact-info[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n  \n\n}\n\n.container[_ngcontent-%COMP%] {\n  overflow-y: auto;\n  \n\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbGF5b3V0cy9yZXN1bWUvcmVzdW1lLWhlYWRlci9yZXN1bWUtaGVhZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksY0FBQTtFQUNBLHdDQUFBO0VBQ0EsZUFBQTtFQUNBLCtCQUFBO0VBQ0EsV0FBQTtFQUNBLHNCQUFBO0FBQ0o7O0FBRUE7RUFDSSxjQUFBO0VBQ0Esc0JBQUE7RUFDQSxxQkFBQTtFQUNBLGdDQUFBO0FBQ0o7O0FBRUE7RUFDSSwwQkFBQTtFQUNBLHVCQUFBO0FBQ0o7O0FBRUE7RUFDSSxnQkFBQTtFQUNBLDBDQUFBO0FBQ0oiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFjdC1pbmZvIHtcbiAgICBtYXJnaW46IDIwcHggMDtcbiAgICAvKiBBZGQgc3BhY2luZyBhcm91bmQgdGhlIGNvbnRhY3QgaW5mbyAqL1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAvKiBBZGp1c3QgZm9udCBzaXplIGFzIG5lZWRlZCAqL1xuICAgIGNvbG9yOiAjMzMzO1xuICAgIC8qIENoYW5nZSB0ZXh0IGNvbG9yICovXG59XG5cbi5jb250YWN0LWluZm8gYSB7XG4gICAgY29sb3I6ICMwMDdiZmY7XG4gICAgLyogQ2hhbmdlIGxpbmsgY29sb3IgKi9cbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgLyogUmVtb3ZlIHVuZGVybGluZSBmcm9tIGxpbmtzICovXG59XG5cbi5jb250YWN0LWluZm8gYTpob3ZlciB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gICAgLyogVW5kZXJsaW5lIG9uIGhvdmVyICovXG59XG5cbi5jb250YWluZXIge1xuICAgIG92ZXJmbG93LXk6IGF1dG87XG4gICAgLyogQWxsb3dzIHNjcm9sbGluZyBpZiBjb250ZW50IG92ZXJmbG93cyAqL1xufVxuXG4vLyAuaGVhZGVyIHtcbi8vICAgICBwYWRkaW5nOiAyMHB4IDA7XG4vLyAgICAgLyogQWRqdXN0IGFzIG5lZWRlZCAqL1xuLy8gICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4vLyAgICAgLyogQWRqdXN0IGFzIG5lZWRlZCAqL1xuLy8gfSJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}


/***/ }),

/***/ 58887:
/*!*******************************************************************!*\
  !*** ./src/app/layouts/resume/resume-nav/resume-nav.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ResumeNavComponent: () => (/* binding */ ResumeNavComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 61699);

class ResumeNavComponent {
  constructor() {}
  ngOnInit() {}
  static #_ = this.ɵfac = function ResumeNavComponent_Factory(t) {
    return new (t || ResumeNavComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: ResumeNavComponent,
    selectors: [["app-resume-nav"]],
    decls: 7,
    vars: 0,
    consts: [[1, "resume", "loding-header", "nav-abs", "custom-scroll"], [1, "container"], [1, "row"], [1, "col"], ["href", "#", 1, "d-inline-block", "m-r-auto"], ["src", "assets/images/resume/logo.png", "alt", "", 1, "img-fluid", 2, "width", "100px"]],
    template: function ResumeNavComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "nav")(5, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
      }
    },
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}


/***/ }),

/***/ 19958:
/*!*******************************************************************************!*\
  !*** ./src/app/layouts/resume/resume-portfolio/resume-portfolio.component.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ResumePortfolioComponent: () => (/* binding */ ResumePortfolioComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-owl-carousel-o */ 99436);




const _c0 = function (a0) {
  return {
    "active show": a0
  };
};
function ResumePortfolioComponent_li_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 15)(1, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ResumePortfolioComponent_li_14_Template_a_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);
      const data_r3 = restoredCtx.$implicit;
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r4.openWorkSlide(data_r3.title));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const data_r3 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c0, ctx_r0.work == data_r3.title));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", data_r3.img, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r3.title);
  }
}
function ResumePortfolioComponent_div_17_ng_container_2_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 22)(1, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 26)(6, "div", 27)(7, "div", 28)(8, "h3", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const data_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", data_r7.link);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", data_r7.img, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r7.name);
  }
}
function ResumePortfolioComponent_div_17_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ResumePortfolioComponent_div_17_ng_container_2_ng_template_1_Template, 12, 3, "ng-template", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
}
function ResumePortfolioComponent_div_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18)(1, "owl-carousel-o", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ResumePortfolioComponent_div_17_ng_container_2_Template, 2, 0, "ng-container", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx_r1.artistscarouselOptions);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.mobileContent);
  }
}
function ResumePortfolioComponent_div_18_ng_container_2_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 22)(1, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 26)(6, "div", 27)(7, "div", 28)(8, "h3", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const data_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", data_r11.link);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", data_r11.img, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r11.name);
  }
}
function ResumePortfolioComponent_div_18_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ResumePortfolioComponent_div_18_ng_container_2_ng_template_1_Template, 12, 3, "ng-template", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
}
function ResumePortfolioComponent_div_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 32)(1, "owl-carousel-o", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ResumePortfolioComponent_div_18_ng_container_2_Template, 2, 0, "ng-container", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx_r2.artistscarouselOptions);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.webContent);
  }
}
class ResumePortfolioComponent {
  constructor() {
    this.work = 'Mobile App'; // Default to 'Mobile App'
    this.nav = [{
      img: 'assets/images/resume/icon/installation.png',
      title: 'Mobile App'
    }, {
      img: 'assets/images/resume/icon/settings.png',
      title: 'Web App'
    }];
    this.mobileContent = [{
      img: 'assets/images/resume/work/giftya.png',
      name: 'GIFTYA',
      link: '/giftya'
    }, {
      img: 'assets/images/resume/work/granny.png',
      name: 'GRANNY',
      link: '/granny'
    }, {
      img: 'assets/images/resume/work/clublax.png',
      name: 'CLUBLAX',
      link: '/clublax'
    }, {
      img: 'assets/images/resume/work/fert.png',
      name: 'FERT',
      link: '/fert'
    }, {
      img: 'assets/images/resume/work/next.png',
      name: 'NEXT',
      link: '/next'
    }];
    this.webContent = [{
      img: 'assets/images/resume/work/web-1.png',
      name: 'Giftya Web',
      link: '/giftyaweb'
    }, {
      img: 'assets/images/resume/work/web-2.png',
      name: 'Perfect Gift',
      link: '/perfectgiftweb'
    }];
    this.artistscarouselOptions = {
      items: 5,
      margin: 60,
      nav: true,
      dots: false,
      navText: ['<img src="assets/images/resume/icon/arrow-left.png">', '<img src="assets/images/resume/icon/arrow-right.png">'],
      autoplay: true,
      slideSpeed: 300,
      paginationSpeed: 400,
      loop: true,
      responsive: {
        0: {
          items: 1,
          margin: 20
        },
        576: {
          items: 2,
          margin: 30
        },
        768: {
          items: 3,
          margin: 40
        },
        992: {
          items: 4,
          margin: 50
        },
        1200: {
          items: 4,
          margin: 60
        }
      }
    };
  }
  openWorkSlide(val) {
    this.work = val;
  }
  static #_ = this.ɵfac = function ResumePortfolioComponent_Factory(t) {
    return new (t || ResumePortfolioComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: ResumePortfolioComponent,
    selectors: [["app-resume-portfolio"]],
    decls: 19,
    vars: 3,
    consts: [["id", "how-work", 1, "saas1", "howitwork", "pt-5", "mt-0"], [1, "container"], [1, "row"], [1, "col-md-12", "text-center"], [1, "title"], [1, "main-title"], [1, "sub-title"], [1, "p-padding"], [1, "col-md-12", "work-tab"], ["id", "pills-tab", "role", "tablist", 1, "nav", "nav-pills", "justify-content-center"], ["class", "nav-item text-center", 4, "ngFor", "ngForOf"], [1, "work-tab-bg", "work-content", "p-t-50", "music", "artist"], ["id", "pills-tabContent", 1, "tab-content", "text-center"], ["class", "col-12", "id", "pills-work1", "role", "tabpanel", 4, "ngIf"], ["class", "col-12", "id", "pills-work2", "role", "tabpanel", 4, "ngIf"], [1, "nav-item", "text-center"], [1, "nav-link", 3, "ngClass", "click"], ["alt", "tab-image-1", 3, "src"], ["id", "pills-work1", "role", "tabpanel", 1, "col-12"], [1, "artist-slider", 3, "options"], [4, "ngFor", "ngForOf"], ["carouselSlide", "", "class", "item"], [3, "routerLink"], [1, "album-artist", "text-center"], ["alt", "", 1, "img-fluid", "set-relative", "overlay-img", 3, "src"], [1, "overlay-box2"], [1, "set-abs", "bottom-0", "w-100", "text-left", "set-z-index"], [1, "singers"], [1, "m-b-10"], [1, "name"], [1, "set-abs", "cds"], ["src", "assets/images/resume/cd2.png", "alt", "", 1, "cd-animation"], ["id", "pills-work2", "role", "tabpanel", 1, "col-12"], ["src", "assets/images/resume/cd2.png", "alt", "", 1, "cd-animation", "width150"]],
    template: function ResumePortfolioComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "My Projects");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6)(10, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "These mobile and web development projects highlight a comprehensive approach to building user-friendly applications tailored to meet diverse client needs. By leveraging the latest technologies, each project emphasizes responsive design, ensuring smooth and consistent functionality across a wide range of devices.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8)(13, "ul", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, ResumePortfolioComponent_li_14_Template, 6, 5, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 11)(16, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, ResumePortfolioComponent_div_17_Template, 3, 2, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, ResumePortfolioComponent_div_18_Template, 3, 2, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.nav);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.work === "Mobile App");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.work === "Web App");
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink, ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_3__.CarouselComponent, ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_3__.CarouselSlideDirective],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}


/***/ }),

/***/ 80846:
/*!*****************************************************************************!*\
  !*** ./src/app/layouts/resume/resume-schedule/resume-schedule.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ResumeScheduleComponent: () => (/* binding */ ResumeScheduleComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 26575);


function ResumeScheduleComponent_div_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15)(1, "div", 3)(2, "div", 16)(3, "div", 17)(4, "h4", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 19)(7, "p", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 23)(23, "div", 24)(24, "h5", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "h5", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const data_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r1.jobTitle);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r1.companyName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r1.country);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", data_r1.img, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r1.description1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r1.description2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r1.description3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r1.description4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r1.description5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r1.toTime);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r1.endTime);
  }
}
class ResumeScheduleComponent {
  constructor() {
    this.schedule = [{
      jobTitle: 'Senior Software Engineer',
      companyName: 'The Wolfe Companies, LLC',
      country: 'United States | Remote',
      img: 'assets/images/resume/exprience/company1.png',
      description1: '○ Optimized and developed mobile application, boosting GiftYa app performance with faster load times and smoother interaction.',
      description2: '○ Implemented various payment methods and social logins, significantly improving user experience and streamlining account access.',
      description3: '○ Architected Gift Card Granny apps, enhancing performance, increasing user engagement, and driving revenue.',
      description4: '○ Trained and mentored developers, promoting continuous improvement and technical excellence.',
      toTime: 'Present',
      endTime: 'Mar 2021'
    }, {
      jobTitle: 'Senior Software Engineer | TEAM LEAD',
      companyName: 'Tkxel',
      country: 'Lahore, PK',
      img: 'assets/images/resume/exprience/tkxel-logo-blue.svg',
      description1: '○ Led software development by analyzing user needs and system flows to create effective and scalable solutions.',
      description2: '○ Documented solutions through detailed documentation and clear, well structured code to ensure maintainability and ease of understanding',
      description3: '○ Conducted systems analysis to recommend policy changes, enhancing operations.',
      toTime: 'Mar 2021',
      endTime: 'Jan 2020'
    }, {
      jobTitle: 'Software Engineer',
      companyName: 'Pure Logics',
      country: 'Lahore, PK',
      img: 'assets/images/resume/exprience/company3.jpeg',
      description1: '○ Engaged with clients to understand and analyze their information needs, ensuring tailored solutions and effective communication.',
      description2: '○ Focused on software design, debugging, documentation, and testing to ensure high-quality and reliable software solutions.',
      description3: '○ Developed software solutions by adhering to the software development lifecycle, ensuring structured and efficient project execution.',
      toTime: 'mar 2020',
      endTime: 'Feb 2019'
    }, {
      jobTitle: 'Software Engineer',
      companyName: 'Whitehats LLC',
      country: 'Lahore, PK',
      img: 'assets/images/resume/exprience/company4.jpeg',
      description1: '○ Specialized in software design, debugging, documentation, and testing, ensuring robust and high-quality solutions.',
      description2: '○ Adhered to software development fundamentals and processes to ensure high-quality, efficient, and reliable software solutions.',
      description3: '○ Developed solutions according to project requirements and architecture, ensuring alignment with design and functionality.',
      description4: '○ Collaborated with cross functional teams to achieve project goals, ensuring alignment, effective communication, and successful outcomes.',
      toTime: 'Dec 2019',
      endTime: 'Aug 2018 '
    }, {
      jobTitle: 'Software Engineer',
      companyName: 'Cognitive Axis',
      country: 'Lahore, PK',
      description1: '○ Designed, debugged, documented, and tested software solutions to meet specified requirements and ensure quality.',
      description2: '○ Developed scalable solutions and collaborated with teams to ensure seamless integration and optimal functionality.',
      description3: '○Conducted thorough testing and created supporting documentation.',
      toTime: 'Aug 2018',
      endTime: 'Mar 2016 '
    }];
  }
  ngOnInit() {}
  static #_ = this.ɵfac = function ResumeScheduleComponent_Factory(t) {
    return new (t || ResumeScheduleComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: ResumeScheduleComponent,
    selectors: [["app-resume-schedule"]],
    decls: 21,
    vars: 1,
    consts: [[1, "resume", "schedule", "pt-0"], [1, "container"], [1, "title", "title2"], [1, "row"], [1, "offset-md-2", "col-md-8"], [1, "font-primary", "borders", "main-text", "text-uppercase"], [1, "sub-title"], [1, ""], [1, "title-text"], [1, "col-12"], [1, "cal-time"], [1, "time"], [1, "text-capitalize"], [1, "event-container", "scrollbar"], ["class", " cal-time events", 4, "ngFor", "ngForOf"], [1, "cal-time", "events"], [1, "col-md-10"], [1, "schedule-event"], [1, "names"], [1, "d-flex", "justify-content-between", "mx-3"], [1, "fs-10", "fw-lighter"], ["alt", "", 1, "img-fluid", "schedule-img", 3, "src"], [1, "names", "fs-14", "fw-400", "my-0", "normal-txt"], [1, "col-md-2"], [1, "timing"], [1, "event-time"], [1, "border-container"], [1, "border-dashed"]],
    template: function ResumeScheduleComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "h6", 5)(6, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "details");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6)(9, "div", 7)(10, "h2", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Experience");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 3)(13, "div", 9)(14, "div", 10)(15, "div", 11)(16, "h5", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Work Experience");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 13)(19, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, ResumeScheduleComponent_div_20_Template, 30, 11, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.schedule);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}


/***/ }),

/***/ 97712:
/*!*****************************************************************************!*\
  !*** ./src/app/layouts/resume/resume-services/resume-services.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ResumeServicesComponent: () => (/* binding */ ResumeServicesComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 26575);


function ResumeServicesComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10)(1, "div", 11)(2, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 14)(5, "h4", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const data_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", data_r1.img, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r1.type);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r1.desc);
  }
}
class ResumeServicesComponent {
  constructor() {
    this.service = [{
      img: "assets/images/resume/service-exprience/1.png",
      type: 'Mobile Application',
      desc: 'Creating intuitive, high-performance mobile applications that deliver a seamless user experience across multiple platforms.'
    }, {
      img: "assets/images/resume/service-exprience/3.png",
      type: 'Web Development',
      desc: 'Delivering a seamless user experience across all platforms by creating intuitive, high-performance web applications.'
    }, {
      img: "assets/images/resume/service-exprience/4.png",
      type: 'Web Design',
      desc: 'Creating visually engaging and user-friendly web designs that prioritize responsive layouts, intuitive navigation, and a seamless user experience across all devices and platforms.'
    }];
  }
  ngOnInit() {}
  static #_ = this.ɵfac = function ResumeServicesComponent_Factory(t) {
    return new (t || ResumeServicesComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: ResumeServicesComponent,
    selectors: [["app-resume-services"]],
    decls: 14,
    vars: 1,
    consts: [[1, "resume", "services", "bg-pink"], [1, "container"], [1, "row"], [1, "offset-md-2", "col-md-8"], [1, "title", "title2"], [1, "font-primary", "borders", "main-text", "text-uppercase"], [1, "sub-title"], [1, ""], [1, "title-text"], ["class", "col-md-4 col-sm-6 d-flex align-items-stretch", 4, "ngFor", "ngForOf"], [1, "col-md-4", "col-sm-6", "d-flex", "align-items-stretch"], [1, "service", "text-center", "bg-white", "d-flex", "flex-column"], [1, "img-block"], ["alt", "", 1, "service-img", "img-fluid", 3, "src"], [1, "service-feature", "mt-auto"], [1, "feature-text", "text-center"]],
    template: function ResumeServicesComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "h6", 5)(6, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "details");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6)(9, "div", 7)(10, "h2", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "services & experience");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, ResumeServicesComponent_div_13_Template, 9, 3, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.service);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}


/***/ }),

/***/ 99844:
/*!*******************************************************************************!*\
  !*** ./src/app/layouts/resume/resume-subscribe/resume-subscribe.component.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ResumeSubscribeComponent: () => (/* binding */ ResumeSubscribeComponent)
/* harmony export */ });
/* harmony import */ var _Users_umarrasheed_Downloads_portfolio_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 54860);






class ResumeSubscribeComponent {
  constructor(http, document, FB) {
    this.http = http;
    this.document = document;
    this.FB = FB;
    this.work = "Poultry Broiler";
    this.activeClass = "index";
  }
  ngOnInit() {
    debugger;
    this.myForm = this.FB.group({
      id: [""],
      requestType: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required]],
      requestByName: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required]],
      companyName: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required]],
      mobile: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required]],
      email: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required]],
      message: [""],
      sourceurl: [""]
    });
  }
  submit() {
    return (0,_Users_umarrasheed_Downloads_portfolio_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {})();
  } //   let values = this.myForm.value;
  //   if (!this.myForm.controls["id"].value) {
  //     this.myForm.controls["id"].setValue(0);
  //   }
  //   if (!this.myForm.controls["requestType"].value) {
  //     this.myForm.controls["requestType"].setValue("Proposal Quotation");
  //   } else {
  //     this.myForm.controls["requestType"].setValue("Demo request");
  //   }
  //   await this.http
  //     .post(environment.apiURL + "Customer_Request/save", this.myForm.value)
  //     .toPromise()
  //     .then((user: any) => {
  //       debugger;
  //       if (user.id > 0) {
  //         this.myForm.controls["id"].setValue(user.id);
  //         alert(user.messages);
  //       } else { }
  //     })
  //     .catch((error) => {
  //       if (error) {
  //       }
  //     });
  // }
  // public getMathod() {
  //   this.http.get("");
  static #_ = this.ɵfac = function ResumeSubscribeComponent_Factory(t) {
    return new (t || ResumeSubscribeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_4__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormBuilder));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: ResumeSubscribeComponent,
    selectors: [["app-resume-subscribe"]],
    decls: 44,
    vars: 1,
    consts: [["id", "DEMO", 1, "app2", "about", "format"], [1, "container"], [1, "col-md-10", "offset-md-1"], [1, "title", "title2"], [1, "font-primary", "borders", "main-text", "text-uppercase"], [1, "sub-title"], [1, "title-text", "text-capitalize", "text-center", 2, "font-family", "'Courier New', Courier, monospace", "color", "black"], [1, "row"], [1, "col-sm-5", "counters", "set-height"], ["src", "assets/images/resume/main/contactus.png", "alt", "image icon", 1, "img-fluid", "demoimg"], [1, "col-sm-7", "counters"], [1, "abouts", "center-text"], [1, "typography-box"], [1, "typo-content"], [3, "formGroup"], [1, "form-row"], [1, "col-12", "mb-2"], ["type", "radio", "name", "RequestType", "id", "1", "value", "Proposal Quotation", "formControlName", "requestType", "formControlName", "requestType"], ["for", "one"], ["type", "radio", "name", "RequestType", "id", "2", "value", "Demo request", "formControlName", "requestType", "formControlName", "requestType"], ["for", "two"], ["type", "text", "name", "requestByName", "id", "requestByName", "formControlName", "requestByName", "placeholder", "Enter Your name", "required", "true", "type", "text", 1, "form-control"], ["type", "text", "name", "companyName", "placeholder", "Enter Company name", "required", "true", "type", "text", "formControlName", "companyName", 1, "form-control"], ["type", "number", "name", "mobile", "placeholder", "Enter Mobile number", "required", "true", "type", "number", "formControlName", "mobile", 1, "form-control"], ["type", "text", "name", "email", "placeholder", "Your Email", "required", "true", "type", "email", "formControlName", "email", 1, "form-control"], ["placeholder", "Write Your Message", "name", "message", "rows", "5", "type", "text", "formControlName", "message", 1, "form-control"], [1, "btn", "btn-default", "btn-gradient", "m-t-50", 3, "click"]],
    template: function ResumeSubscribeComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h6", 4)(5, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, " Demo & Proposals");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 5)(8, "h2", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, " DEMO REQUEST ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 7)(11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](12, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 10)(14, "div", 11)(15, "div")(16, "div", 7)(17, "div", 12)(18, "div", 13)(19, "form", 14)(20, "div", 15)(21, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](22, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "label", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, "\u00A0Proposal Quotation");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](26, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "label", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28, "\u00A0Demo request");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "div", 15)(30, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](31, "input", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](33, "input", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "div", 15)(35, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](36, "input", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](38, "input", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](40, "textarea", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](41, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "button", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ResumeSubscribeComponent_Template_button_click_42_listener() {
          return ctx.submit();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](43, " Submit ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.myForm);
      }
    },
    dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.RadioControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControlName],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}


/***/ }),

/***/ 47420:
/*!***********************************************************************************!*\
  !*** ./src/app/layouts/resume/resume-testimonial/resume-testimonial.component.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ResumetesTimonialComponent: () => (/* binding */ ResumetesTimonialComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-owl-carousel-o */ 99436);



function ResumetesTimonialComponent_ng_container_13_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 14)(3, "h5", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h6", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const team_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", team_r1.img, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](team_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](team_r1.designation);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](team_r1.description);
  }
}
function ResumetesTimonialComponent_ng_container_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ResumetesTimonialComponent_ng_container_13_ng_template_1_Template, 9, 4, "ng-template", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
}
class ResumetesTimonialComponent {
  constructor() {
    this.teams = [{
      img: "assets/images/resume/testmonial/1.png",
      name: "Richard Wolf",
      designation: "Senior Software Engineering",
      description: "It has been a genuine pleasure to manage Umar throughout his tenure at Wolfe. He is an exceptionally skilled professional with a remarkable talent for fostering a positive and collaborative work environment. Umar consistently demonstrates a high level of engagement and enthusiasm, coupled with a strong commitment to continuous improvement."
    }, {
      img: "assets/images/resume/testmonial/2.png",
      name: "Daniel Rencewicz",
      designation: "Senior Mobile Developer at Wolfe LLC",
      description: "I had the pleasure of working closely with Umar Bilal for over three and a half years on the GiftYa and Gift Card Granny native apps. His exceptional knowledge of the React Native framework, combined with his skills in app optimization and architecture, were instrumental in our project's success."
    }, {
      img: "assets/images/resume/testmonial/3.png",
      name: "Max Slipchenko",
      designation: "Senior Quality Assurance Engineer",
      description: "I have had the pleasure of working with Umar Bilal, and I can confidently say that he is an exceptional Senior React Native Developer. His deep expertise in cross-platform mobile app development, particularly with React Native, React.js, Redux, and TypeScript, is truly impressive."
    }, {
      img: "assets/images/resume/testmonial/4.png",
      name: "David Freidel",
      designation: "Web Developer at WolfeWeb",
      description: "I highly recommend Umar Bilal as an outstanding app developer with whom I've had the pleasure of collaborating for several years, particularly on the GiftYa project. Umar's expertise was instrumental in shaping the success of the app. Umar's dedication to delivering high-quality results consistently exceeded expectations."
    }, {
      img: "assets/images/resume/testmonial/5.png",
      name: "Ethan Sundstrom",
      designation: "Senior Software Engineer",
      description: "I am pleased to recommend Umar for any role that requires a dedicated and skilled developer. Umar has a clear understanding of project objectives and consistently delivers high-quality work. He excels at organizing projects and meeting tight deadlines, often going above and beyond to ensure the success of the project. "
    }, {
      img: "assets/images/resume/testmonial/6.png",
      name: "Andrey K.",
      designation: "Full Stack Developer",
      description: "I had the pleasure of working with Umar, where his expertise and strong abilities greatly contributed to our team's success. Umar consistently demonstrated exceptional dedication, proactive problem-solving, and a collaborative spirit, making him a highly valued team member."
    }, {
      img: "assets/images/resume/testmonial/7.png",
      name: "Devi Kapo",
      designation: "Front-end Developer",
      description: "I had the pleasure of working with Umar at Wolfe, where he consistently impressed me with his exceptional app development skills, positive attitude, and innovative mindset. As an app developer, Umar's technical expertise and dedication ensured the smooth completion of projects and adherence to target dates."
    }, {
      img: "assets/images/resume/testmonial/8.png",
      name: "Ian Mackenzie",
      designation: "Full Stack Developer",
      description: "I've worked at the same company as Umar now for almost a year and he has been a pleasure to work with. He's got a great attitude, remains very professional and his code has been top notch."
    }, {
      img: "assets/images/resume/testmonial/9.png",
      name: "Wala Liliana Loubani",
      designation: "Startup life I Ex-Google I Stanford University",
      description: "Umars seniority and experience comes across at easy. He is calm, passionate, has a positive attitude and has an ability to bring solutions and offer suggestions and best practices. This seniority and calmness impacts everyone around him making him the natural lead in any given situation."
    }, {
      img: "assets/images/resume/testmonial/10.png",
      name: "Nadia Palwasha",
      designation: "Head of Department - Products",
      description: "I rarely come across real talents who stand out like Umar. I worked with Umar at PureLogics. I was impressed by Umar's ability to deal with even the toughest situation /— effortlessly. That skill often takes years to develop among professionals. As a team lead, Umar earns my highest recommendation."
    }, {
      img: "assets/images/resume/testmonial/11.png",
      name: "Abdul SamadPHP, NodeJS, Angular, NUXT JS, Vue JS, React, Next.JS",
      designation: "Full Stack Developer",
      description: "I interviewed and hired Umar in Whitehats as a Cross-Platform Ionic Software Engineer and he has worked on four different projects with me since then. Umar's ability to handle deadlines really impressed me. "
    }, {
      img: "assets/images/resume/testmonial/12.png",
      name: "Salah Baig",
      designation: "Head of Engineering at Hazen Technologies",
      description: "Umar is a person you always want to have in your team. He is calm and passionate with a positive attitude. You just need to assign him a task and leave everything on him. He will complete the task with full ownership, within timeline, with every aspect of the task properly implemented and tested."
    }];
    this.teamcarouselOptions = {
      items: 3,
      margin: 30,
      autoHeight: true,
      nav: true,
      dots: false,
      navText: ['<img src="assets/images/resume/icon/arrow-left.png">', '<img src="assets/images/resume/icon/arrow-right.png">'],
      autoplay: false,
      slideSpeed: 300,
      paginationSpeed: 400,
      loop: true,
      responsive: {
        0: {
          items: 1
        },
        576: {
          items: 2,
          margin: 10
        },
        991: {
          items: 3,
          margin: 10
        }
      }
    };
  }
  ngOnInit() {}
  static #_ = this.ɵfac = function ResumetesTimonialComponent_Factory(t) {
    return new (t || ResumetesTimonialComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: ResumetesTimonialComponent,
    selectors: [["app-resume-testimonial"]],
    decls: 14,
    vars: 2,
    consts: [[1, "app2", "team", "p-t-0"], [1, "container"], [1, "row"], [1, "col-md-10", "offset-md-1"], [1, "title", "title2"], [1, "font-primary", "borders", "main-text"], [1, "sub-title"], [1, "title-text", "text-capitalize", "text-center"], [1, "col-12"], [1, "team-slider", 3, "options"], [4, "ngFor", "ngForOf"], ["carouselSlide", "", "class", "item"], [1, "team-container", 2, "height", "400px"], ["alt", "", 1, "img-fluid", "members", 3, "src"], [1, "text-center"], [1, "name"], [1, "post"], [1, "team-para"]],
    template: function ResumetesTimonialComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "h6", 5)(6, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Managers and Colleagues Reviews");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6)(9, "h2", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Recommendations");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8)(12, "owl-carousel-o", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, ResumetesTimonialComponent_ng_container_13_Template, 2, 0, "ng-container", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx.teamcarouselOptions);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.teams);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_2__.CarouselComponent, ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_2__.CarouselSlideDirective],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}


/***/ }),

/***/ 88669:
/*!****************************************************!*\
  !*** ./src/app/layouts/resume/resume.component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ResumeComponent: () => (/* binding */ ResumeComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/platform-browser */ 36480);
/* harmony import */ var _shared_service_color_scss_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/service/color-scss.service */ 94342);
/* harmony import */ var _resume_nav_resume_nav_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./resume-nav/resume-nav.component */ 58887);
/* harmony import */ var _resume_header_resume_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./resume-header/resume-header.component */ 89885);
/* harmony import */ var _resume_about_resume_about_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./resume-about/resume-about.component */ 54312);
/* harmony import */ var _resume_services_resume_services_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./resume-services/resume-services.component */ 97712);
/* harmony import */ var _resume_portfolio_resume_portfolio_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./resume-portfolio/resume-portfolio.component */ 19958);
/* harmony import */ var _resume_counter_resume_counter_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./resume-counter/resume-counter.component */ 15056);
/* harmony import */ var _resume_schedule_resume_schedule_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./resume-schedule/resume-schedule.component */ 80846);
/* harmony import */ var _resume_testimonial_resume_testimonial_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./resume-testimonial/resume-testimonial.component */ 47420);
/* harmony import */ var _resume_footer_resume_footer_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./resume-footer/resume-footer.component */ 85986);













class ResumeComponent {
  constructor(route, title, colorPicker) {
    this.route = route;
    this.title = title;
    this.colorPicker = colorPicker;
  }
  ngOnInit() {
    this.colorPicker.setColorScheme('color-1');
    this.title.setTitle(this.route.snapshot.data['title']);
  }
  static #_ = this.ɵfac = function ResumeComponent_Factory(t) {
    return new (t || ResumeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_11__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__.Title), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_shared_service_color_scss_service__WEBPACK_IMPORTED_MODULE_0__.ColorScssService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineComponent"]({
    type: ResumeComponent,
    selectors: [["app-resume"]],
    decls: 9,
    vars: 0,
    template: function ResumeComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "app-resume-nav")(1, "app-resume-header")(2, "app-resume-counter")(3, "app-resume-portfolio")(4, "app-resume-schedule")(5, "app-resume-services")(6, "app-resume-about")(7, "app-resume-testimonial")(8, "app-resume-footer");
      }
    },
    dependencies: [_resume_nav_resume_nav_component__WEBPACK_IMPORTED_MODULE_1__.ResumeNavComponent, _resume_header_resume_header_component__WEBPACK_IMPORTED_MODULE_2__.ResumeHeaderComponent, _resume_about_resume_about_component__WEBPACK_IMPORTED_MODULE_3__.ResumeAboutComponent, _resume_services_resume_services_component__WEBPACK_IMPORTED_MODULE_4__.ResumeServicesComponent, _resume_portfolio_resume_portfolio_component__WEBPACK_IMPORTED_MODULE_5__.ResumePortfolioComponent, _resume_counter_resume_counter_component__WEBPACK_IMPORTED_MODULE_6__.ResumeCounterComponent, _resume_schedule_resume_schedule_component__WEBPACK_IMPORTED_MODULE_7__.ResumeScheduleComponent, _resume_testimonial_resume_testimonial_component__WEBPACK_IMPORTED_MODULE_8__.ResumetesTimonialComponent, _resume_footer_resume_footer_component__WEBPACK_IMPORTED_MODULE_9__.ResumeFooterComponent],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}


/***/ }),

/***/ 99185:
/*!**************************************************************!*\
  !*** ./src/app/shared/components/loader/loader.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LoaderComponent: () => (/* binding */ LoaderComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 61699);

class LoaderComponent {
  constructor() {
    this.show = true;
    setTimeout(() => {
      this.show = false;
    }, 1500);
  }
  ngOnInit() {}
  ngOnDestroy() {}
  static #_ = this.ɵfac = function LoaderComponent_Factory(t) {
    return new (t || LoaderComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: LoaderComponent,
    selectors: [["app-loader"]],
    decls: 11,
    vars: 2,
    consts: [[1, "loader-wrapper"], [1, "loader"]],
    template: function LoaderComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div")(3, "div")(4, "div")(5, "div")(6, "div")(7, "div")(8, "div")(9, "div")(10, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("loderhide", !ctx.show);
      }
    },
    styles: [".loader-wrapper.loderhide[_ngcontent-%COMP%] {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvbG9hZGVyL2xvYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIi5sb2FkZXItd3JhcHBlci5sb2RlcmhpZGUge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}


/***/ }),

/***/ 56795:
/*!***********************************************************************************!*\
  !*** ./src/app/shared/components/navigation/center-menu/center-menu.component.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CenterMenuComponent: () => (/* binding */ CenterMenuComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _shared_service_nav_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../shared/service/nav.service */ 59617);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 27947);




function CenterMenuComponent_li_10_a_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CenterMenuComponent_li_10_a_1_Template_a_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r11);
      const menuItem_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r9.setActive(menuItem_r2.title));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const menuItem_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", menuItem_r2.title, " ");
  }
}
const _c0 = function (a0) {
  return [a0];
};
function CenterMenuComponent_li_10_a_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const menuItem_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", !menuItem_r2.type ? null : _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](2, _c0, menuItem_r2.path));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", menuItem_r2.title, " ");
  }
}
function CenterMenuComponent_li_10_a_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const menuItem_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("href", !menuItem_r2.type ? null : menuItem_r2.path, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", menuItem_r2.title, " ");
  }
}
function CenterMenuComponent_li_10_a_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const menuItem_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("href", !menuItem_r2.type ? null : menuItem_r2.path, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", menuItem_r2.title, " ");
  }
}
function CenterMenuComponent_li_10_div_5_div_3_li_5_a_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const subChildrenItem_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", !subChildrenItem_r19.type ? null : _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](5, _c0, subChildrenItem_r19.path));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMapInterpolate1"]("icon-", subChildrenItem_r19.icon, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](subChildrenItem_r19.title);
  }
}
function CenterMenuComponent_li_10_div_5_div_3_li_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, CenterMenuComponent_li_10_div_5_div_3_li_5_a_1_Template, 3, 7, "a", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const subChildrenItem_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", subChildrenItem_r19.type === "link");
  }
}
function CenterMenuComponent_li_10_div_5_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div")(1, "div", 22)(2, "a", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CenterMenuComponent_li_10_div_5_div_3_Template_a_click_2_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r23);
      const childrenItem_r17 = restoredCtx.$implicit;
      const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r22.setChildActive(childrenItem_r17.title));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, CenterMenuComponent_li_10_div_5_div_3_li_5_Template, 2, 1, "li", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const childrenItem_r17 = ctx.$implicit;
    const menuItem_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](menuItem_r2.megaMenuType == "small" ? "col-lg-4" : menuItem_r2.megaMenuType == "medium" ? "col-lg-3" : menuItem_r2.megaMenuType == "large" ? "col" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](childrenItem_r17.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("menu-icon", menuItem_r2.title == "Elements")("openSubChildMenu", ctx_r16.ischildActive(childrenItem_r17.title));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", childrenItem_r17.children);
  }
}
function CenterMenuComponent_li_10_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 19)(1, "div", 20)(2, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, CenterMenuComponent_li_10_div_5_div_3_Template, 6, 8, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const menuItem_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("opensubmenu", ctx_r7.isActive(menuItem_r2.title));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", menuItem_r2.children);
  }
}
function CenterMenuComponent_li_10_ul_6_li_1_a_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CenterMenuComponent_li_10_ul_6_li_1_a_1_Template_a_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r35);
      const childrenItem_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
      const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r33.setChildActive(childrenItem_r27.title));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const childrenItem_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", childrenItem_r27.title, " ");
  }
}
function CenterMenuComponent_li_10_ul_6_li_1_a_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const childrenItem_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", !childrenItem_r27.type ? null : _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](2, _c0, childrenItem_r27.path));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", childrenItem_r27.title, " ");
  }
}
function CenterMenuComponent_li_10_ul_6_li_1_a_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const childrenItem_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("href", !childrenItem_r27.type ? null : childrenItem_r27.path, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", childrenItem_r27.title, " ");
  }
}
function CenterMenuComponent_li_10_ul_6_li_1_a_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const childrenItem_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("href", !childrenItem_r27.type ? null : childrenItem_r27.path, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", childrenItem_r27.title, " ");
  }
}
function CenterMenuComponent_li_10_ul_6_li_1_ul_5_li_1_a_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const subChildrenItem_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", subChildrenItem_r41.title, " ");
  }
}
function CenterMenuComponent_li_10_ul_6_li_1_ul_5_li_1_a_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const subChildrenItem_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", !subChildrenItem_r41.type ? null : _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](2, _c0, subChildrenItem_r41.path));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", subChildrenItem_r41.title, " ");
  }
}
function CenterMenuComponent_li_10_ul_6_li_1_ul_5_li_1_a_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const subChildrenItem_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("href", !subChildrenItem_r41.type ? null : subChildrenItem_r41.path, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", subChildrenItem_r41.title, " ");
  }
}
function CenterMenuComponent_li_10_ul_6_li_1_ul_5_li_1_a_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const subChildrenItem_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("href", !subChildrenItem_r41.type ? null : subChildrenItem_r41.path, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", subChildrenItem_r41.title, " ");
  }
}
function CenterMenuComponent_li_10_ul_6_li_1_ul_5_li_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, CenterMenuComponent_li_10_ul_6_li_1_ul_5_li_1_a_1_Template, 2, 1, "a", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, CenterMenuComponent_li_10_ul_6_li_1_ul_5_li_1_a_2_Template, 2, 4, "a", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, CenterMenuComponent_li_10_ul_6_li_1_ul_5_li_1_a_3_Template, 2, 2, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, CenterMenuComponent_li_10_ul_6_li_1_ul_5_li_1_a_4_Template, 2, 2, "a", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const subChildrenItem_r41 = ctx.$implicit;
    const menuItem_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", subChildrenItem_r41.type === "sub");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", subChildrenItem_r41.type === "link" && !menuItem_r2.megaMenu);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", subChildrenItem_r41.type === "extLink" && !menuItem_r2.megaMenu);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", subChildrenItem_r41.type === "extTabLink" && !menuItem_r2.megaMenu);
  }
}
function CenterMenuComponent_li_10_ul_6_li_1_ul_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, CenterMenuComponent_li_10_ul_6_li_1_ul_5_li_1_Template, 5, 4, "li", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const childrenItem_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("openSubChildMenu", ctx_r32.ischildActive(childrenItem_r27.title));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", childrenItem_r27.children);
  }
}
function CenterMenuComponent_li_10_ul_6_li_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, CenterMenuComponent_li_10_ul_6_li_1_a_1_Template, 2, 1, "a", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, CenterMenuComponent_li_10_ul_6_li_1_a_2_Template, 2, 4, "a", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, CenterMenuComponent_li_10_ul_6_li_1_a_3_Template, 2, 2, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, CenterMenuComponent_li_10_ul_6_li_1_a_4_Template, 2, 2, "a", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, CenterMenuComponent_li_10_ul_6_li_1_ul_5_Template, 2, 3, "ul", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const childrenItem_r27 = ctx.$implicit;
    const menuItem_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("sub-menu", childrenItem_r27.children);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", childrenItem_r27.type === "sub");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", childrenItem_r27.type === "link" && !menuItem_r2.megaMenu);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", childrenItem_r27.type === "extLink" && !menuItem_r2.megaMenu);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", childrenItem_r27.type === "extTabLink" && !menuItem_r2.megaMenu);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", childrenItem_r27.children);
  }
}
function CenterMenuComponent_li_10_ul_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, CenterMenuComponent_li_10_ul_6_li_1_Template, 6, 7, "li", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const menuItem_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("opensubmenu", ctx_r8.isActive(menuItem_r2.title));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", menuItem_r2.children);
  }
}
function CenterMenuComponent_li_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, CenterMenuComponent_li_10_a_1_Template, 2, 1, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, CenterMenuComponent_li_10_a_2_Template, 2, 4, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, CenterMenuComponent_li_10_a_3_Template, 2, 2, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, CenterMenuComponent_li_10_a_4_Template, 2, 2, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, CenterMenuComponent_li_10_div_5_Template, 4, 3, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, CenterMenuComponent_li_10_ul_6_Template, 2, 3, "ul", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const menuItem_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](menuItem_r2.megaMenu ? "mega-menu" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", menuItem_r2.type === "sub");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", menuItem_r2.type === "link");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", menuItem_r2.type === "extLink");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", menuItem_r2.type === "extTabLink");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", menuItem_r2.megaMenu && menuItem_r2.megaMenuType == "small" || menuItem_r2.megaMenuType == "medium" || menuItem_r2.megaMenuType == "large");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", menuItem_r2.children && !menuItem_r2.megaMenu);
  }
}
function CenterMenuComponent_li_13_a_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r63 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CenterMenuComponent_li_13_a_1_Template_a_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r63);
      const menuItem_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
      const ctx_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r61.setActive(menuItem_r54.title));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const menuItem_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", menuItem_r54.title, " ");
  }
}
function CenterMenuComponent_li_13_a_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const menuItem_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", !menuItem_r54.type ? null : _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](2, _c0, menuItem_r54.path));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", menuItem_r54.title, " ");
  }
}
function CenterMenuComponent_li_13_a_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const menuItem_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("href", !menuItem_r54.type ? null : menuItem_r54.path, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", menuItem_r54.title, " ");
  }
}
function CenterMenuComponent_li_13_a_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const menuItem_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("href", !menuItem_r54.type ? null : menuItem_r54.path, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", menuItem_r54.title, " ");
  }
}
function CenterMenuComponent_li_13_div_5_div_3_li_5_a_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const subChildrenItem_r71 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", !subChildrenItem_r71.type ? null : _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](5, _c0, subChildrenItem_r71.path));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMapInterpolate1"]("icon-", subChildrenItem_r71.icon, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](subChildrenItem_r71.title);
  }
}
function CenterMenuComponent_li_13_div_5_div_3_li_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, CenterMenuComponent_li_13_div_5_div_3_li_5_a_1_Template, 3, 7, "a", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const subChildrenItem_r71 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", subChildrenItem_r71.type === "link");
  }
}
function CenterMenuComponent_li_13_div_5_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r75 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div")(1, "div", 22)(2, "a", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CenterMenuComponent_li_13_div_5_div_3_Template_a_click_2_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r75);
      const childrenItem_r69 = restoredCtx.$implicit;
      const ctx_r74 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r74.setChildActive(childrenItem_r69.title));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, CenterMenuComponent_li_13_div_5_div_3_li_5_Template, 2, 1, "li", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const childrenItem_r69 = ctx.$implicit;
    const menuItem_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
    const ctx_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](menuItem_r54.megaMenuType == "small" ? "col-lg-4" : menuItem_r54.megaMenuType == "medium" ? "col-lg-3" : menuItem_r54.megaMenuType == "large" ? "col" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](childrenItem_r69.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("menu-icon", menuItem_r54.title == "Elements")("openSubChildMenu", ctx_r68.ischildActive(childrenItem_r69.title));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", childrenItem_r69.children);
  }
}
function CenterMenuComponent_li_13_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 19)(1, "div", 20)(2, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, CenterMenuComponent_li_13_div_5_div_3_Template, 6, 8, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const menuItem_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    const ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("opensubmenu", ctx_r59.isActive(menuItem_r54.title));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", menuItem_r54.children);
  }
}
function CenterMenuComponent_li_13_ul_6_li_1_a_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r87 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CenterMenuComponent_li_13_ul_6_li_1_a_1_Template_a_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r87);
      const childrenItem_r79 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
      const ctx_r85 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r85.setChildActive(childrenItem_r79.title));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const childrenItem_r79 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", childrenItem_r79.title, " ");
  }
}
function CenterMenuComponent_li_13_ul_6_li_1_a_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const childrenItem_r79 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", !childrenItem_r79.type ? null : _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](2, _c0, childrenItem_r79.path));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", childrenItem_r79.title, " ");
  }
}
function CenterMenuComponent_li_13_ul_6_li_1_a_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const childrenItem_r79 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("href", !childrenItem_r79.type ? null : childrenItem_r79.path, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", childrenItem_r79.title, " ");
  }
}
function CenterMenuComponent_li_13_ul_6_li_1_a_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const childrenItem_r79 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("href", !childrenItem_r79.type ? null : childrenItem_r79.path, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", childrenItem_r79.title, " ");
  }
}
function CenterMenuComponent_li_13_ul_6_li_1_ul_5_li_1_a_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const subChildrenItem_r93 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", subChildrenItem_r93.title, " ");
  }
}
function CenterMenuComponent_li_13_ul_6_li_1_ul_5_li_1_a_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const subChildrenItem_r93 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", !subChildrenItem_r93.type ? null : _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](2, _c0, subChildrenItem_r93.path));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", subChildrenItem_r93.title, " ");
  }
}
function CenterMenuComponent_li_13_ul_6_li_1_ul_5_li_1_a_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const subChildrenItem_r93 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("href", !subChildrenItem_r93.type ? null : subChildrenItem_r93.path, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", subChildrenItem_r93.title, " ");
  }
}
function CenterMenuComponent_li_13_ul_6_li_1_ul_5_li_1_a_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const subChildrenItem_r93 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("href", !subChildrenItem_r93.type ? null : subChildrenItem_r93.path, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", subChildrenItem_r93.title, " ");
  }
}
function CenterMenuComponent_li_13_ul_6_li_1_ul_5_li_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, CenterMenuComponent_li_13_ul_6_li_1_ul_5_li_1_a_1_Template, 2, 1, "a", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, CenterMenuComponent_li_13_ul_6_li_1_ul_5_li_1_a_2_Template, 2, 4, "a", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, CenterMenuComponent_li_13_ul_6_li_1_ul_5_li_1_a_3_Template, 2, 2, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, CenterMenuComponent_li_13_ul_6_li_1_ul_5_li_1_a_4_Template, 2, 2, "a", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const subChildrenItem_r93 = ctx.$implicit;
    const menuItem_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", subChildrenItem_r93.type === "sub");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", subChildrenItem_r93.type === "link" && !menuItem_r54.megaMenu);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", subChildrenItem_r93.type === "extLink" && !menuItem_r54.megaMenu);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", subChildrenItem_r93.type === "extTabLink" && !menuItem_r54.megaMenu);
  }
}
function CenterMenuComponent_li_13_ul_6_li_1_ul_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, CenterMenuComponent_li_13_ul_6_li_1_ul_5_li_1_Template, 5, 4, "li", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const childrenItem_r79 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    const ctx_r84 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("openSubChildMenu", ctx_r84.ischildActive(childrenItem_r79.title));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", childrenItem_r79.children);
  }
}
function CenterMenuComponent_li_13_ul_6_li_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, CenterMenuComponent_li_13_ul_6_li_1_a_1_Template, 2, 1, "a", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, CenterMenuComponent_li_13_ul_6_li_1_a_2_Template, 2, 4, "a", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, CenterMenuComponent_li_13_ul_6_li_1_a_3_Template, 2, 2, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, CenterMenuComponent_li_13_ul_6_li_1_a_4_Template, 2, 2, "a", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, CenterMenuComponent_li_13_ul_6_li_1_ul_5_Template, 2, 3, "ul", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const childrenItem_r79 = ctx.$implicit;
    const menuItem_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("sub-menu", childrenItem_r79.children);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", childrenItem_r79.type === "sub");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", childrenItem_r79.type === "link" && !menuItem_r54.megaMenu);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", childrenItem_r79.type === "extLink" && !menuItem_r54.megaMenu);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", childrenItem_r79.type === "extTabLink" && !menuItem_r54.megaMenu);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", childrenItem_r79.children);
  }
}
function CenterMenuComponent_li_13_ul_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, CenterMenuComponent_li_13_ul_6_li_1_Template, 6, 7, "li", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const menuItem_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    const ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("opensubmenu", ctx_r60.isActive(menuItem_r54.title));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", menuItem_r54.children);
  }
}
function CenterMenuComponent_li_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, CenterMenuComponent_li_13_a_1_Template, 2, 1, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, CenterMenuComponent_li_13_a_2_Template, 2, 4, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, CenterMenuComponent_li_13_a_3_Template, 2, 2, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, CenterMenuComponent_li_13_a_4_Template, 2, 2, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, CenterMenuComponent_li_13_div_5_Template, 4, 3, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, CenterMenuComponent_li_13_ul_6_Template, 2, 3, "ul", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const menuItem_r54 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](menuItem_r54.megaMenu ? "mega-menu" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", menuItem_r54.type === "sub");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", menuItem_r54.type === "link");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", menuItem_r54.type === "extLink");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", menuItem_r54.type === "extTabLink");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", menuItem_r54.megaMenu && menuItem_r54.megaMenuType == "small" || menuItem_r54.megaMenuType == "medium" || menuItem_r54.megaMenuType == "large");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", menuItem_r54.children && !menuItem_r54.megaMenu);
  }
}
class CenterMenuComponent {
  constructor(navServices) {
    this.navServices = navServices;
    this.openSide = false;
    this.activeItem = 'home';
    this.active = false;
    this.activeChildItem = '';
    this.overlay = false;
  }
  ngOnInit() {
    this.navServices.items.subscribe(menuItems => {
      this.menuItems = menuItems;
    });
  }
  toggleSidebar() {
    this.openSide = !this.openSide;
  }
  closeOverlay() {
    this.openSide = false;
  }
  //For Active Main menu in Mobile View
  setActive(menuItem) {
    if (this.activeItem === menuItem) {
      this.activeItem = '';
    } else {
      this.activeItem = menuItem;
    }
  }
  isActive(item) {
    return this.activeItem === item;
  }
  // For Active Child Menu in Mobile View
  setChildActive(subMenu) {
    if (this.activeChildItem === subMenu) {
      this.activeChildItem = '';
    } else {
      this.activeChildItem = subMenu;
    }
  }
  ischildActive(subMenu) {
    return this.activeChildItem === subMenu;
  }
  static #_ = this.ɵfac = function CenterMenuComponent_Factory(t) {
    return new (t || CenterMenuComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared_service_nav_service__WEBPACK_IMPORTED_MODULE_0__.NavService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: CenterMenuComponent,
    selectors: [["app-center-menu"]],
    decls: 15,
    vars: 14,
    consts: [[1, "overlay-sidebar-header", 3, "click"], [1, "responsive-btn", "float-right"], [3, "click"], ["aria-hidden", "true", 1, "fa", "fa-bars"], ["id", "togglebtn", 1, "navbar", "ml-md-auto", "ml-lg-0", "res-width"], [1, "responsive-btn"], [1, "navbar-nav", "mr-auto"], [3, "class", 4, "ngFor", "ngForOf"], [1, "navbar-nav", "ml-auto"], ["href", "javascript:void(0)", "class", "dropdown", 3, "click", 4, "ngIf"], ["routerLinkActive", "active", "class", "dropdown", 3, "routerLink", 4, "ngIf"], ["class", "dropdown", 3, "href", 4, "ngIf"], [3, "href", 4, "ngIf"], ["class", "mega-menu-container", 3, "opensubmenu", 4, "ngIf"], [3, "opensubmenu", 4, "ngIf"], ["href", "javascript:void(0)", 1, "dropdown", 3, "click"], ["routerLinkActive", "active", 1, "dropdown", 3, "routerLink"], [1, "dropdown", 3, "href"], [3, "href"], [1, "mega-menu-container"], [1, "container"], [1, "row"], [1, "menu-container"], [1, "menu-head", 3, "click"], [4, "ngFor", "ngForOf"], ["routerLinkActive", "active", 3, "routerLink", 4, "ngIf"], ["routerLinkActive", "active", 3, "routerLink"], [3, "sub-menu", 4, "ngFor", "ngForOf"], ["href", "javascript:void(0)", 3, "click", 4, "ngIf"], ["target", "_blank", 3, "href", 4, "ngIf"], [3, "openSubChildMenu", 4, "ngIf"], ["href", "javascript:void(0)", 3, "click"], ["target", "_blank", 3, "href"], ["href", "javascript:void(0)", 4, "ngIf"], ["href", "javascript:void(0)"]],
    template: function CenterMenuComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CenterMenuComponent_Template_a_click_0_listener() {
          return ctx.closeOverlay();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1)(2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CenterMenuComponent_Template_a_click_2_listener() {
          return ctx.toggleSidebar();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4)(5, "div", 5)(6, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CenterMenuComponent_Template_a_click_6_listener() {
          return ctx.toggleSidebar();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "back");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "ul", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, CenterMenuComponent_li_10_Template, 7, 8, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](11, "slice");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "ul", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, CenterMenuComponent_li_13_Template, 7, 8, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](14, "slice");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("overlay-sidebar-header-open", ctx.openSide);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("openSidebar", ctx.openSide);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind3"](11, 6, ctx.menuItems, 0, 3));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind3"](14, 10, ctx.menuItems, 3, 7));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLink, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLinkActive, _angular_common__WEBPACK_IMPORTED_MODULE_2__.SlicePipe],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}


/***/ }),

/***/ 93209:
/*!*********************************************************************!*\
  !*** ./src/app/shared/components/navigation/menu/menu.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MenuComponent: () => (/* binding */ MenuComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _service_nav_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../service/nav.service */ 59617);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 27947);




function MenuComponent_li_10_a_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MenuComponent_li_10_a_1_Template_a_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r10);
      const menuItem_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r8.setActive(menuItem_r1.title));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const menuItem_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", menuItem_r1.title, " ");
  }
}
const _c0 = function (a0) {
  return [a0];
};
function MenuComponent_li_10_a_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const menuItem_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", !menuItem_r1.type ? null : _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](2, _c0, menuItem_r1.path));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", menuItem_r1.title, " ");
  }
}
function MenuComponent_li_10_a_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const menuItem_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("href", !menuItem_r1.type ? null : menuItem_r1.path, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", menuItem_r1.title, " ");
  }
}
function MenuComponent_li_10_a_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const menuItem_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("href", !menuItem_r1.type ? null : menuItem_r1.path, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", menuItem_r1.title, " ");
  }
}
function MenuComponent_li_10_div_5_div_3_li_5_a_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const subChildrenItem_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", !subChildrenItem_r18.type ? null : _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](5, _c0, subChildrenItem_r18.path));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMapInterpolate1"]("icon-", subChildrenItem_r18.icon, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](subChildrenItem_r18.title);
  }
}
function MenuComponent_li_10_div_5_div_3_li_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, MenuComponent_li_10_div_5_div_3_li_5_a_1_Template, 3, 7, "a", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const subChildrenItem_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", subChildrenItem_r18.type === "link");
  }
}
function MenuComponent_li_10_div_5_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div")(1, "div", 20)(2, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MenuComponent_li_10_div_5_div_3_Template_a_click_2_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r22);
      const childrenItem_r16 = restoredCtx.$implicit;
      const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r21.setChildActive(childrenItem_r16.title));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, MenuComponent_li_10_div_5_div_3_li_5_Template, 2, 1, "li", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const childrenItem_r16 = ctx.$implicit;
    const menuItem_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](menuItem_r1.megaMenuType == "small" ? "col-lg-4" : menuItem_r1.megaMenuType == "medium" ? "col-lg-3" : menuItem_r1.megaMenuType == "large" ? "col" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](childrenItem_r16.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("menu-icon", menuItem_r1.title == "Elements")("openSubChildMenu", ctx_r15.ischildActive(childrenItem_r16.title));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", childrenItem_r16.children);
  }
}
function MenuComponent_li_10_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 17)(1, "div", 18)(2, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, MenuComponent_li_10_div_5_div_3_Template, 6, 8, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const menuItem_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("opensubmenu", ctx_r6.isActive(menuItem_r1.title));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", menuItem_r1.children);
  }
}
function MenuComponent_li_10_ul_6_li_1_a_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MenuComponent_li_10_ul_6_li_1_a_1_Template_a_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r34);
      const childrenItem_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
      const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r32.setChildActive(childrenItem_r26.title));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const childrenItem_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", childrenItem_r26.title, " ");
  }
}
function MenuComponent_li_10_ul_6_li_1_a_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const childrenItem_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", !childrenItem_r26.type ? null : _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](2, _c0, childrenItem_r26.path));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", childrenItem_r26.title, " ");
  }
}
function MenuComponent_li_10_ul_6_li_1_a_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const childrenItem_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("href", !childrenItem_r26.type ? null : childrenItem_r26.path, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", childrenItem_r26.title, " ");
  }
}
function MenuComponent_li_10_ul_6_li_1_a_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const childrenItem_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("href", !childrenItem_r26.type ? null : childrenItem_r26.path, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", childrenItem_r26.title, " ");
  }
}
function MenuComponent_li_10_ul_6_li_1_ul_5_li_1_a_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const subChildrenItem_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", subChildrenItem_r40.title, " ");
  }
}
function MenuComponent_li_10_ul_6_li_1_ul_5_li_1_a_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const subChildrenItem_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", !subChildrenItem_r40.type ? null : _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](2, _c0, subChildrenItem_r40.path));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", subChildrenItem_r40.title, " ");
  }
}
function MenuComponent_li_10_ul_6_li_1_ul_5_li_1_a_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const subChildrenItem_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("href", !subChildrenItem_r40.type ? null : subChildrenItem_r40.path, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", subChildrenItem_r40.title, " ");
  }
}
function MenuComponent_li_10_ul_6_li_1_ul_5_li_1_a_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const subChildrenItem_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("href", !subChildrenItem_r40.type ? null : subChildrenItem_r40.path, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", subChildrenItem_r40.title, " ");
  }
}
function MenuComponent_li_10_ul_6_li_1_ul_5_li_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, MenuComponent_li_10_ul_6_li_1_ul_5_li_1_a_1_Template, 2, 1, "a", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, MenuComponent_li_10_ul_6_li_1_ul_5_li_1_a_2_Template, 2, 4, "a", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, MenuComponent_li_10_ul_6_li_1_ul_5_li_1_a_3_Template, 2, 2, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, MenuComponent_li_10_ul_6_li_1_ul_5_li_1_a_4_Template, 2, 2, "a", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const subChildrenItem_r40 = ctx.$implicit;
    const menuItem_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", subChildrenItem_r40.type === "sub");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", subChildrenItem_r40.type === "link" && !menuItem_r1.megaMenu);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", subChildrenItem_r40.type === "extLink" && !menuItem_r1.megaMenu);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", subChildrenItem_r40.type === "extTabLink" && !menuItem_r1.megaMenu);
  }
}
function MenuComponent_li_10_ul_6_li_1_ul_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, MenuComponent_li_10_ul_6_li_1_ul_5_li_1_Template, 5, 4, "li", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const childrenItem_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("openSubChildMenu", ctx_r31.ischildActive(childrenItem_r26.title));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", childrenItem_r26.children);
  }
}
function MenuComponent_li_10_ul_6_li_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, MenuComponent_li_10_ul_6_li_1_a_1_Template, 2, 1, "a", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, MenuComponent_li_10_ul_6_li_1_a_2_Template, 2, 4, "a", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, MenuComponent_li_10_ul_6_li_1_a_3_Template, 2, 2, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, MenuComponent_li_10_ul_6_li_1_a_4_Template, 2, 2, "a", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, MenuComponent_li_10_ul_6_li_1_ul_5_Template, 2, 3, "ul", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const childrenItem_r26 = ctx.$implicit;
    const menuItem_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("sub-menu", childrenItem_r26.children);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", childrenItem_r26.type === "sub");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", childrenItem_r26.type === "link" && !menuItem_r1.megaMenu);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", childrenItem_r26.type === "extLink" && !menuItem_r1.megaMenu);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", childrenItem_r26.type === "extTabLink" && !menuItem_r1.megaMenu);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", childrenItem_r26.children);
  }
}
function MenuComponent_li_10_ul_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, MenuComponent_li_10_ul_6_li_1_Template, 6, 7, "li", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const menuItem_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("opensubmenu", ctx_r7.isActive(menuItem_r1.title));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", menuItem_r1.children);
  }
}
function MenuComponent_li_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, MenuComponent_li_10_a_1_Template, 2, 1, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, MenuComponent_li_10_a_2_Template, 2, 4, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, MenuComponent_li_10_a_3_Template, 2, 2, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, MenuComponent_li_10_a_4_Template, 2, 2, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, MenuComponent_li_10_div_5_Template, 4, 3, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, MenuComponent_li_10_ul_6_Template, 2, 3, "ul", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const menuItem_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](menuItem_r1.megaMenu ? "mega-menu" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", menuItem_r1.type === "sub");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", menuItem_r1.type === "link");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", menuItem_r1.type === "extLink");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", menuItem_r1.type === "extTabLink");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", menuItem_r1.megaMenu && menuItem_r1.megaMenuType == "small" || menuItem_r1.megaMenuType == "medium" || menuItem_r1.megaMenuType == "large");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", menuItem_r1.children && !menuItem_r1.megaMenu);
  }
}
class MenuComponent {
  constructor(navServices) {
    this.navServices = navServices;
    this.openSide = false;
    this.activeItem = 'home';
    this.active = false;
    this.activeChildItem = '';
    this.overlay = false;
  }
  ngOnInit() {
    this.navServices.items.subscribe(menuItems => {
      this.menuItems = menuItems;
    });
  }
  toggleSidebar() {
    this.openSide = !this.openSide;
  }
  closeOverlay() {
    this.openSide = false;
  }
  //For Active Main menu in Mobile View
  setActive(menuItem) {
    if (this.activeItem === menuItem) {
      this.activeItem = '';
    } else {
      this.activeItem = menuItem;
    }
  }
  isActive(item) {
    return this.activeItem === item;
  }
  // For Active Child Menu in Mobile View
  setChildActive(subMenu) {
    if (this.activeChildItem === subMenu) {
      this.activeChildItem = '';
    } else {
      this.activeChildItem = subMenu;
    }
  }
  ischildActive(subMenu) {
    return this.activeChildItem === subMenu;
  }
  static #_ = this.ɵfac = function MenuComponent_Factory(t) {
    return new (t || MenuComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_service_nav_service__WEBPACK_IMPORTED_MODULE_0__.NavService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: MenuComponent,
    selectors: [["app-menu"]],
    decls: 11,
    vars: 5,
    consts: [[1, "overlay-sidebar-header", 3, "click"], [1, "responsive-btn"], [3, "click"], ["aria-hidden", "true", 1, "fa", "fa-bars", "text-white"], ["id", "togglebtn", 1, "navbar", "m-l-auto"], [1, "main-menu"], [3, "class", 4, "ngFor", "ngForOf"], ["href", "javascript:void(0)", "class", "dropdown", 3, "click", 4, "ngIf"], ["routerLinkActive", "active", "class", "dropdown", 3, "routerLink", 4, "ngIf"], ["class", "dropdown", 3, "href", 4, "ngIf"], [3, "href", 4, "ngIf"], ["class", "mega-menu-container", 3, "opensubmenu", 4, "ngIf"], [3, "opensubmenu", 4, "ngIf"], ["href", "javascript:void(0)", 1, "dropdown", 3, "click"], ["routerLinkActive", "active", 1, "dropdown", 3, "routerLink"], [1, "dropdown", 3, "href"], [3, "href"], [1, "mega-menu-container"], [1, "container"], [1, "row"], [1, "menu-container"], [1, "menu-head", 3, "click"], [4, "ngFor", "ngForOf"], ["routerLinkActive", "active", 3, "routerLink", 4, "ngIf"], ["routerLinkActive", "active", 3, "routerLink"], [3, "sub-menu", 4, "ngFor", "ngForOf"], ["href", "javascript:void(0)", 3, "click", 4, "ngIf"], ["target", "_blank", 3, "href", 4, "ngIf"], [3, "openSubChildMenu", 4, "ngIf"], ["href", "javascript:void(0)", 3, "click"], ["target", "_blank", 3, "href"], ["href", "javascript:void(0)", 4, "ngIf"], ["href", "javascript:void(0)"]],
    template: function MenuComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MenuComponent_Template_a_click_0_listener() {
          return ctx.closeOverlay();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1)(2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MenuComponent_Template_a_click_2_listener() {
          return ctx.toggleSidebar();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4)(5, "div", 1)(6, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MenuComponent_Template_a_click_6_listener() {
          return ctx.toggleSidebar();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "back");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "ul", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, MenuComponent_li_10_Template, 7, 8, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("overlay-sidebar-header-open", ctx.openSide);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("openSidebar", ctx.openSide);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.menuItems);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLink, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLinkActive],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}


/***/ }),

/***/ 55842:
/*!**********************************************************************!*\
  !*** ./src/app/shared/components/tap-to-top/tap-to-top.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TapToTopComponent: () => (/* binding */ TapToTopComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 26575);


const _c0 = function (a0) {
  return {
    "tap-top": a0
  };
};
class TapToTopComponent {
  constructor() {
    this.showScrollHeight = 500;
    this.hideScrollHeight = 10;
  }
  ngOnInit() {}
  onActivate() {
    if (typeof window !== 'undefined') {
      const scrollToTop = window.setInterval(() => {
        const pos = window.pageYOffset;
        if (pos > 0) {
          window.scrollTo(0, pos - 200); // how far to scroll on each step
        } else {
          window.clearInterval(scrollToTop);
        }
      }, 16);
    }
  }
  onWindowScroll() {
    if (typeof window !== 'undefined') {
      if ((window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop) > this.showScrollHeight) {
        this.showScroll = true;
      } else if (this.showScroll && (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop) < this.hideScrollHeight) {
        this.showScroll = false;
      }
    }
  }
  static #_ = this.ɵfac = function TapToTopComponent_Factory(t) {
    return new (t || TapToTopComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: TapToTopComponent,
    selectors: [["app-tap-to-top"]],
    hostBindings: function TapToTopComponent_HostBindings(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("scroll", function TapToTopComponent_scroll_HostBindingHandler() {
          return ctx.onWindowScroll();
        }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
      }
    },
    decls: 3,
    vars: 3,
    consts: [[3, "ngClass", "click"], [1, "fa", "fa-angle-double-up"]],
    template: function TapToTopComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TapToTopComponent_Template_div_click_0_listener() {
          return ctx.onActivate();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c0, ctx.showScroll));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgClass],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}


/***/ }),

/***/ 13793:
/*!***************************************!*\
  !*** ./src/app/shared/data/config.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ConfigDB: () => (/* binding */ ConfigDB)
/* harmony export */ });
class ConfigDB {
  static #_ = this.data = {
    settings: {
      layout_type: 'ltr',
      layout_version: 'light'
    }
  };
}


/***/ }),

/***/ 94342:
/*!******************************************************!*\
  !*** ./src/app/shared/service/color-scss.service.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ColorScssService: () => (/* binding */ ColorScssService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 61699);

class ColorScssService {
  constructor() {
    // For enabling Portfolio basic with title
    this.displyBlock = false;
  }
  // Set Color 
  setColorScheme(color) {
    var href = "/assets/css/" + color + ".css";
    document.getElementById("color").innerHTML = '<link href=' + href + ' rel="stylesheet">';
  }
  setFontScheme() {
    document.getElementById("font").innerHTML = '<link href="https://fonts.googleapis.com/css?family=Satisfy" rel="stylesheet">';
  }
  static #_ = this.ɵfac = function ColorScssService_Factory(t) {
    return new (t || ColorScssService)();
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: ColorScssService,
    factory: ColorScssService.ɵfac,
    providedIn: 'root'
  });
}


/***/ }),

/***/ 84722:
/*!******************************************************!*\
  !*** ./src/app/shared/service/customizer.service.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CustomizerService: () => (/* binding */ CustomizerService)
/* harmony export */ });
/* harmony import */ var _data_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../data/config */ 13793);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 61699);


class CustomizerService {
  constructor() {
    // Configration Layout 
    this.data = _data_config__WEBPACK_IMPORTED_MODULE_0__.ConfigDB.data;
    var layoutVersion = localStorage.getItem("layoutVersion") || this.data.settings.layout_version;
    var layoutType = localStorage.getItem("layoutType") || this.data.settings.layout_type;
    if (layoutVersion) {
      document.body.classList.add(layoutVersion);
      this.data.settings.layout_version = layoutVersion;
    }
    if (layoutType) document.body.classList.add(layoutType);
  }
  // Set Customize layout Version
  setLayoutVersion(layout) {
    document.body.classList.remove(this.data.settings.layout_version);
    this.data.settings.layout_version = layout;
    document.body.classList.add(layout);
    localStorage.setItem('layoutVersion', layout);
  }
  setLayoutType(layout) {
    document.body.classList.remove(this.data.settings.layout_type);
    this.data.settings.layout_type = layout;
    document.body.classList.add(layout);
    localStorage.setItem('layoutType', layout);
  }
  static #_ = this.ɵfac = function CustomizerService_Factory(t) {
    return new (t || CustomizerService)();
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
    token: CustomizerService,
    factory: CustomizerService.ɵfac,
    providedIn: 'root'
  });
}


/***/ }),

/***/ 59617:
/*!***********************************************!*\
  !*** ./src/app/shared/service/nav.service.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NavService: () => (/* binding */ NavService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 58071);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 61699);


class NavService {
  constructor() {
    this.MENUITEMS = [
      // {
      //    title: 'Portfolio', type: 'link', path: '/resume'
      // },
      // {
      //    title: 'About', type: 'link', path: '/about'
      // },
      // {
      //    title: 'Portfolio', type: 'link', path: '/portfolio'
      // },
      // {
      //    title: 'Blog', type: 'link', path: '/resume'
      // },
      // {
      //    title: 'Contact', type: 'link', path: '/contact'
      // },
    ];
    // Array
    this.items = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(this.MENUITEMS);
  }
  static #_ = this.ɵfac = function NavService_Factory(t) {
    return new (t || NavService)();
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
    token: NavService,
    factory: NavService.ɵfac,
    providedIn: 'root'
  });
}


/***/ }),

/***/ 56208:
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SharedModule: () => (/* binding */ SharedModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _components_navigation_menu_menu_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/navigation/menu/menu.component */ 93209);
/* harmony import */ var _components_tap_to_top_tap_to_top_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/tap-to-top/tap-to-top.component */ 55842);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _components_navigation_center_menu_center_menu_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/navigation/center-menu/center-menu.component */ 56795);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-toastr */ 37240);
/* harmony import */ var _components_loader_loader_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/loader/loader.component */ 99185);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 61699);









class SharedModule {
  static #_ = this.ɵfac = function SharedModule_Factory(t) {
    return new (t || SharedModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
    type: SharedModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule, ngx_toastr__WEBPACK_IMPORTED_MODULE_7__.ToastrModule.forRoot()]
  });
}

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](SharedModule, {
    declarations: [_components_navigation_menu_menu_component__WEBPACK_IMPORTED_MODULE_0__.MenuComponent, _components_tap_to_top_tap_to_top_component__WEBPACK_IMPORTED_MODULE_1__.TapToTopComponent, _components_navigation_center_menu_center_menu_component__WEBPACK_IMPORTED_MODULE_2__.CenterMenuComponent, _components_loader_loader_component__WEBPACK_IMPORTED_MODULE_3__.LoaderComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule, ngx_toastr__WEBPACK_IMPORTED_MODULE_7__.ToastrModule],
    exports: [_components_navigation_menu_menu_component__WEBPACK_IMPORTED_MODULE_0__.MenuComponent, _components_loader_loader_component__WEBPACK_IMPORTED_MODULE_3__.LoaderComponent, _components_navigation_center_menu_center_menu_component__WEBPACK_IMPORTED_MODULE_2__.CenterMenuComponent, _components_tap_to_top_tap_to_top_component__WEBPACK_IMPORTED_MODULE_1__.TapToTopComponent]
  });
})();

/***/ }),

/***/ 20553:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   environment: () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
  production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.

/***/ }),

/***/ 14913:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ 36480);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 78629);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 20553);
/* harmony import */ var _assets_pace_pace_min_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/pace/pace.min.js */ 6949);
/* harmony import */ var _assets_pace_pace_min_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_assets_pace_pace_min_js__WEBPACK_IMPORTED_MODULE_2__);





if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
  (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.enableProdMode)();
}
document.addEventListener('DOMContentLoaded', () => {
  _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.error(err));
});

/***/ }),

/***/ 6949:
/*!*************************************!*\
  !*** ./src/assets/pace/pace.min.js ***!
  \*************************************/
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;/*! pace 0.5.3 */
(function () {
  var a,
    b,
    c,
    d,
    e,
    f,
    g,
    h,
    i,
    j,
    k,
    l,
    m,
    n,
    o,
    p,
    q,
    r,
    s,
    t,
    u,
    v,
    w,
    x,
    y,
    z,
    A,
    B,
    C,
    D,
    E,
    F,
    G,
    H,
    I,
    J,
    K,
    L,
    M,
    N,
    O,
    P,
    Q,
    R,
    S,
    T,
    U,
    V,
    W = [].slice,
    X = {}.hasOwnProperty,
    Y = function (a, b) {
      function c() {
        this.constructor = a;
      }
      for (var d in b) X.call(b, d) && (a[d] = b[d]);
      return c.prototype = b.prototype, a.prototype = new c(), a.__super__ = b.prototype, a;
    },
    Z = [].indexOf || function (a) {
      for (var b = 0, c = this.length; c > b; b++) if (b in this && this[b] === a) return b;
      return -1;
    };
  for (t = {
    catchupTime: 500,
    initialRate: .03,
    minTime: 500,
    ghostTime: 500,
    maxProgressPerFrame: 10,
    easeFactor: 1.25,
    startOnPageLoad: !0,
    restartOnPushState: !0,
    restartOnRequestAfter: 500,
    target: "body",
    elements: {
      checkInterval: 100,
      selectors: ["body"]
    },
    eventLag: {
      minSamples: 10,
      sampleCount: 3,
      lagThreshold: 3
    },
    ajax: {
      trackMethods: ["GET"],
      trackWebSockets: !0,
      ignoreURLs: []
    }
  }, B = function () {
    var a;
    return null != (a = "undefined" != typeof performance && null !== performance && "function" == typeof performance.now ? performance.now() : void 0) ? a : +new Date();
  }, D = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame, s = window.cancelAnimationFrame || window.mozCancelAnimationFrame, null == D && (D = function (a) {
    return setTimeout(a, 50);
  }, s = function (a) {
    return clearTimeout(a);
  }), F = function (a) {
    var b, c;
    return b = B(), (c = function () {
      var d;
      return d = B() - b, d >= 33 ? (b = B(), a(d, function () {
        return D(c);
      })) : setTimeout(c, 33 - d);
    })();
  }, E = function () {
    var a, b, c;
    return c = arguments[0], b = arguments[1], a = 3 <= arguments.length ? W.call(arguments, 2) : [], "function" == typeof c[b] ? c[b].apply(c, a) : c[b];
  }, u = function () {
    var a, b, c, d, e, f, g;
    for (b = arguments[0], d = 2 <= arguments.length ? W.call(arguments, 1) : [], f = 0, g = d.length; g > f; f++) if (c = d[f]) for (a in c) X.call(c, a) && (e = c[a], null != b[a] && "object" == typeof b[a] && null != e && "object" == typeof e ? u(b[a], e) : b[a] = e);
    return b;
  }, p = function (a) {
    var b, c, d, e, f;
    for (c = b = 0, e = 0, f = a.length; f > e; e++) d = a[e], c += Math.abs(d), b++;
    return c / b;
  }, w = function (a, b) {
    var c, d, e;
    if (null == a && (a = "options"), null == b && (b = !0), e = document.querySelector("[data-pace-" + a + "]")) {
      if (c = e.getAttribute("data-pace-" + a), !b) return c;
      try {
        return JSON.parse(c);
      } catch (f) {
        return d = f, "undefined" != typeof console && null !== console ? console.error("Error parsing inline pace options", d) : void 0;
      }
    }
  }, g = function () {
    function a() {}
    return a.prototype.on = function (a, b, c, d) {
      var e;
      return null == d && (d = !1), null == this.bindings && (this.bindings = {}), null == (e = this.bindings)[a] && (e[a] = []), this.bindings[a].push({
        handler: b,
        ctx: c,
        once: d
      });
    }, a.prototype.once = function (a, b, c) {
      return this.on(a, b, c, !0);
    }, a.prototype.off = function (a, b) {
      var c, d, e;
      if (null != (null != (d = this.bindings) ? d[a] : void 0)) {
        if (null == b) return delete this.bindings[a];
        for (c = 0, e = []; c < this.bindings[a].length;) e.push(this.bindings[a][c].handler === b ? this.bindings[a].splice(c, 1) : c++);
        return e;
      }
    }, a.prototype.trigger = function () {
      var a, b, c, d, e, f, g, h, i;
      if (c = arguments[0], a = 2 <= arguments.length ? W.call(arguments, 1) : [], null != (g = this.bindings) ? g[c] : void 0) {
        for (e = 0, i = []; e < this.bindings[c].length;) h = this.bindings[c][e], d = h.handler, b = h.ctx, f = h.once, d.apply(null != b ? b : this, a), i.push(f ? this.bindings[c].splice(e, 1) : e++);
        return i;
      }
    }, a;
  }(), null == window.Pace && (window.Pace = {}), u(Pace, g.prototype), C = Pace.options = u({}, t, window.paceOptions, w()), T = ["ajax", "document", "eventLag", "elements"], P = 0, R = T.length; R > P; P++) J = T[P], C[J] === !0 && (C[J] = t[J]);
  i = function (a) {
    function b() {
      return U = b.__super__.constructor.apply(this, arguments);
    }
    return Y(b, a), b;
  }(Error), b = function () {
    function a() {
      this.progress = 0;
    }
    return a.prototype.getElement = function () {
      var a;
      if (null == this.el) {
        if (a = document.querySelector(C.target), !a) throw new i();
        this.el = document.createElement("div"), this.el.className = "pace pace-active", document.body.className = document.body.className.replace(/pace-done/g, ""), document.body.className += " pace-running", this.el.innerHTML = '<div class="pace-progress">\n  <div class="pace-progress-inner"></div>\n</div>\n<div class="pace-activity"></div>', null != a.firstChild ? a.insertBefore(this.el, a.firstChild) : a.appendChild(this.el);
      }
      return this.el;
    }, a.prototype.finish = function () {
      var a;
      return a = this.getElement(), a.className = a.className.replace("pace-active", ""), a.className += " pace-inactive", document.body.className = document.body.className.replace("pace-running", ""), document.body.className += " pace-done";
    }, a.prototype.update = function (a) {
      return this.progress = a, this.render();
    }, a.prototype.destroy = function () {
      try {
        this.getElement().parentNode.removeChild(this.getElement());
      } catch (a) {
        i = a;
      }
      return this.el = void 0;
    }, a.prototype.render = function () {
      var a, b;
      return null == document.querySelector(C.target) ? !1 : (a = this.getElement(), a.children[0].style.width = "" + this.progress + "%", (!this.lastRenderedProgress || this.lastRenderedProgress | 0 !== this.progress | 0) && (a.children[0].setAttribute("data-progress-text", "" + (0 | this.progress) + "%"), this.progress >= 100 ? b = "99" : (b = this.progress < 10 ? "0" : "", b += 0 | this.progress), a.children[0].setAttribute("data-progress", "" + b)), this.lastRenderedProgress = this.progress);
    }, a.prototype.done = function () {
      return this.progress >= 100;
    }, a;
  }(), h = function () {
    function a() {
      this.bindings = {};
    }
    return a.prototype.trigger = function (a, b) {
      var c, d, e, f, g;
      if (null != this.bindings[a]) {
        for (f = this.bindings[a], g = [], d = 0, e = f.length; e > d; d++) c = f[d], g.push(c.call(this, b));
        return g;
      }
    }, a.prototype.on = function (a, b) {
      var c;
      return null == (c = this.bindings)[a] && (c[a] = []), this.bindings[a].push(b);
    }, a;
  }(), O = window.XMLHttpRequest, N = window.XDomainRequest, M = window.WebSocket, v = function (a, b) {
    var c, d, e, f;
    f = [];
    for (d in b.prototype) try {
      e = b.prototype[d], f.push(null == a[d] && "function" != typeof e ? a[d] = e : void 0);
    } catch (g) {
      c = g;
    }
    return f;
  }, z = [], Pace.ignore = function () {
    var a, b, c;
    return b = arguments[0], a = 2 <= arguments.length ? W.call(arguments, 1) : [], z.unshift("ignore"), c = b.apply(null, a), z.shift(), c;
  }, Pace.track = function () {
    var a, b, c;
    return b = arguments[0], a = 2 <= arguments.length ? W.call(arguments, 1) : [], z.unshift("track"), c = b.apply(null, a), z.shift(), c;
  }, I = function (a) {
    var b;
    if (null == a && (a = "GET"), "track" === z[0]) return "force";
    if (!z.length && C.ajax) {
      if ("socket" === a && C.ajax.trackWebSockets) return !0;
      if (b = a.toUpperCase(), Z.call(C.ajax.trackMethods, b) >= 0) return !0;
    }
    return !1;
  }, j = function (a) {
    function b() {
      var a,
        c = this;
      b.__super__.constructor.apply(this, arguments), a = function (a) {
        var b;
        return b = a.open, a.open = function (d, e) {
          return I(d) && c.trigger("request", {
            type: d,
            url: e,
            request: a
          }), b.apply(a, arguments);
        };
      }, window.XMLHttpRequest = function (b) {
        var c;
        return c = new O(b), a(c), c;
      }, v(window.XMLHttpRequest, O), null != N && (window.XDomainRequest = function () {
        var b;
        return b = new N(), a(b), b;
      }, v(window.XDomainRequest, N)), null != M && C.ajax.trackWebSockets && (window.WebSocket = function (a, b) {
        var d;
        return d = null != b ? new M(a, b) : new M(a), I("socket") && c.trigger("request", {
          type: "socket",
          url: a,
          protocols: b,
          request: d
        }), d;
      }, v(window.WebSocket, M));
    }
    return Y(b, a), b;
  }(h), Q = null, x = function () {
    return null == Q && (Q = new j()), Q;
  }, H = function (a) {
    var b, c, d, e;
    for (e = C.ajax.ignoreURLs, c = 0, d = e.length; d > c; c++) if (b = e[c], "string" == typeof b) {
      if (-1 !== a.indexOf(b)) return !0;
    } else if (b.test(a)) return !0;
    return !1;
  }, x().on("request", function (b) {
    var c, d, e, f, g;
    return f = b.type, e = b.request, g = b.url, H(g) ? void 0 : Pace.running || C.restartOnRequestAfter === !1 && "force" !== I(f) ? void 0 : (d = arguments, c = C.restartOnRequestAfter || 0, "boolean" == typeof c && (c = 0), setTimeout(function () {
      var b, c, g, h, i, j;
      if (b = "socket" === f ? e.readyState < 2 : 0 < (h = e.readyState) && 4 > h) {
        for (Pace.restart(), i = Pace.sources, j = [], c = 0, g = i.length; g > c; c++) {
          if (J = i[c], J instanceof a) {
            J.watch.apply(J, d);
            break;
          }
          j.push(void 0);
        }
        return j;
      }
    }, c));
  }), a = function () {
    function a() {
      var a = this;
      this.elements = [], x().on("request", function () {
        return a.watch.apply(a, arguments);
      });
    }
    return a.prototype.watch = function (a) {
      var b, c, d, e;
      return d = a.type, b = a.request, e = a.url, H(e) ? void 0 : (c = "socket" === d ? new m(b) : new n(b), this.elements.push(c));
    }, a;
  }(), n = function () {
    function a(a) {
      var b,
        c,
        d,
        e,
        f,
        g,
        h = this;
      if (this.progress = 0, null != window.ProgressEvent) for (c = null, a.addEventListener("progress", function (a) {
        return h.progress = a.lengthComputable ? 100 * a.loaded / a.total : h.progress + (100 - h.progress) / 2;
      }), g = ["load", "abort", "timeout", "error"], d = 0, e = g.length; e > d; d++) b = g[d], a.addEventListener(b, function () {
        return h.progress = 100;
      });else f = a.onreadystatechange, a.onreadystatechange = function () {
        var b;
        return 0 === (b = a.readyState) || 4 === b ? h.progress = 100 : 3 === a.readyState && (h.progress = 50), "function" == typeof f ? f.apply(null, arguments) : void 0;
      };
    }
    return a;
  }(), m = function () {
    function a(a) {
      var b,
        c,
        d,
        e,
        f = this;
      for (this.progress = 0, e = ["error", "open"], c = 0, d = e.length; d > c; c++) b = e[c], a.addEventListener(b, function () {
        return f.progress = 100;
      });
    }
    return a;
  }(), d = function () {
    function a(a) {
      var b, c, d, f;
      for (null == a && (a = {}), this.elements = [], null == a.selectors && (a.selectors = []), f = a.selectors, c = 0, d = f.length; d > c; c++) b = f[c], this.elements.push(new e(b));
    }
    return a;
  }(), e = function () {
    function a(a) {
      this.selector = a, this.progress = 0, this.check();
    }
    return a.prototype.check = function () {
      var a = this;
      return document.querySelector(this.selector) ? this.done() : setTimeout(function () {
        return a.check();
      }, C.elements.checkInterval);
    }, a.prototype.done = function () {
      return this.progress = 100;
    }, a;
  }(), c = function () {
    function a() {
      var a,
        b,
        c = this;
      this.progress = null != (b = this.states[document.readyState]) ? b : 100, a = document.onreadystatechange, document.onreadystatechange = function () {
        return null != c.states[document.readyState] && (c.progress = c.states[document.readyState]), "function" == typeof a ? a.apply(null, arguments) : void 0;
      };
    }
    return a.prototype.states = {
      loading: 0,
      interactive: 50,
      complete: 100
    }, a;
  }(), f = function () {
    function a() {
      var a,
        b,
        c,
        d,
        e,
        f = this;
      this.progress = 0, a = 0, e = [], d = 0, c = B(), b = setInterval(function () {
        var g;
        return g = B() - c - 50, c = B(), e.push(g), e.length > C.eventLag.sampleCount && e.shift(), a = p(e), ++d >= C.eventLag.minSamples && a < C.eventLag.lagThreshold ? (f.progress = 100, clearInterval(b)) : f.progress = 100 * (3 / (a + 3));
      }, 50);
    }
    return a;
  }(), l = function () {
    function a(a) {
      this.source = a, this.last = this.sinceLastUpdate = 0, this.rate = C.initialRate, this.catchup = 0, this.progress = this.lastProgress = 0, null != this.source && (this.progress = E(this.source, "progress"));
    }
    return a.prototype.tick = function (a, b) {
      var c;
      return null == b && (b = E(this.source, "progress")), b >= 100 && (this.done = !0), b === this.last ? this.sinceLastUpdate += a : (this.sinceLastUpdate && (this.rate = (b - this.last) / this.sinceLastUpdate), this.catchup = (b - this.progress) / C.catchupTime, this.sinceLastUpdate = 0, this.last = b), b > this.progress && (this.progress += this.catchup * a), c = 1 - Math.pow(this.progress / 100, C.easeFactor), this.progress += c * this.rate * a, this.progress = Math.min(this.lastProgress + C.maxProgressPerFrame, this.progress), this.progress = Math.max(0, this.progress), this.progress = Math.min(100, this.progress), this.lastProgress = this.progress, this.progress;
    }, a;
  }(), K = null, G = null, q = null, L = null, o = null, r = null, Pace.running = !1, y = function () {
    return C.restartOnPushState ? Pace.restart() : void 0;
  }, null != window.history.pushState && (S = window.history.pushState, window.history.pushState = function () {
    return y(), S.apply(window.history, arguments);
  }), null != window.history.replaceState && (V = window.history.replaceState, window.history.replaceState = function () {
    return y(), V.apply(window.history, arguments);
  }), k = {
    ajax: a,
    elements: d,
    document: c,
    eventLag: f
  }, (A = function () {
    var a, c, d, e, f, g, h, i;
    for (Pace.sources = K = [], g = ["ajax", "elements", "document", "eventLag"], c = 0, e = g.length; e > c; c++) a = g[c], C[a] !== !1 && K.push(new k[a](C[a]));
    for (i = null != (h = C.extraSources) ? h : [], d = 0, f = i.length; f > d; d++) J = i[d], K.push(new J(C));
    return Pace.bar = q = new b(), G = [], L = new l();
  })(), Pace.stop = function () {
    return Pace.trigger("stop"), Pace.running = !1, q.destroy(), r = !0, null != o && ("function" == typeof s && s(o), o = null), A();
  }, Pace.restart = function () {
    return Pace.trigger("restart"), Pace.stop(), Pace.start();
  }, Pace.go = function () {
    var a;
    return Pace.running = !0, q.render(), a = B(), r = !1, o = F(function (b, c) {
      var d, e, f, g, h, i, j, k, m, n, o, p, s, t, u, v;
      for (k = 100 - q.progress, e = o = 0, f = !0, i = p = 0, t = K.length; t > p; i = ++p) for (J = K[i], n = null != G[i] ? G[i] : G[i] = [], h = null != (v = J.elements) ? v : [J], j = s = 0, u = h.length; u > s; j = ++s) g = h[j], m = null != n[j] ? n[j] : n[j] = new l(g), f &= m.done, m.done || (e++, o += m.tick(b));
      return d = o / e, q.update(L.tick(b, d)), q.done() || f || r ? (q.update(100), Pace.trigger("done"), setTimeout(function () {
        return q.finish(), Pace.running = !1, Pace.trigger("hide");
      }, Math.max(C.ghostTime, Math.max(C.minTime - (B() - a), 0)))) : c();
    });
  }, Pace.start = function (a) {
    u(C, a), Pace.running = !0;
    try {
      q.render();
    } catch (b) {
      i = b;
    }
    return document.querySelector(".pace") ? (Pace.trigger("start"), Pace.go()) : setTimeout(Pace.start, 50);
  },  true ? !(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {
    return Pace;
  }).call(exports, __webpack_require__, exports, module),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : 0;
}).call(this);

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(14913)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map