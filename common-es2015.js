(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./node_modules/@ionic/core/dist/esm/button-active-0d5784f9.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/button-active-0d5784f9.js ***!
  \*********************************************************************/
/*! exports provided: c */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return createButtonActiveGesture; });
/* harmony import */ var _index_44bf8136_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-44bf8136.js */ "./node_modules/@ionic/core/dist/esm/index-44bf8136.js");
/* harmony import */ var _index_eea61379_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index-eea61379.js */ "./node_modules/@ionic/core/dist/esm/index-eea61379.js");
/* harmony import */ var _haptic_7b8ba70a_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./haptic-7b8ba70a.js */ "./node_modules/@ionic/core/dist/esm/haptic-7b8ba70a.js");




const createButtonActiveGesture = (el, isButton) => {
    let currentTouchedButton;
    let initialTouchedButton;
    const activateButtonAtPoint = (x, y, hapticFeedbackFn) => {
        if (typeof document === 'undefined') {
            return;
        }
        const target = document.elementFromPoint(x, y);
        if (!target || !isButton(target)) {
            clearActiveButton();
            return;
        }
        if (target !== currentTouchedButton) {
            clearActiveButton();
            setActiveButton(target, hapticFeedbackFn);
        }
    };
    const setActiveButton = (button, hapticFeedbackFn) => {
        currentTouchedButton = button;
        if (!initialTouchedButton) {
            initialTouchedButton = currentTouchedButton;
        }
        const buttonToModify = currentTouchedButton;
        Object(_index_44bf8136_js__WEBPACK_IMPORTED_MODULE_0__["c"])(() => buttonToModify.classList.add('ion-activated'));
        hapticFeedbackFn();
    };
    const clearActiveButton = (dispatchClick = false) => {
        if (!currentTouchedButton) {
            return;
        }
        const buttonToModify = currentTouchedButton;
        Object(_index_44bf8136_js__WEBPACK_IMPORTED_MODULE_0__["c"])(() => buttonToModify.classList.remove('ion-activated'));
        /**
         * Clicking on one button, but releasing on another button
         * does not dispatch a click event in browsers, so we
         * need to do it manually here. Some browsers will
         * dispatch a click if clicking on one button, dragging over
         * another button, and releasing on the original button. In that
         * case, we need to make sure we do not cause a double click there.
         */
        if (dispatchClick && initialTouchedButton !== currentTouchedButton) {
            currentTouchedButton.click();
        }
        currentTouchedButton = undefined;
    };
    return Object(_index_eea61379_js__WEBPACK_IMPORTED_MODULE_1__["createGesture"])({
        el,
        gestureName: 'buttonActiveDrag',
        threshold: 0,
        onStart: ev => activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_7b8ba70a_js__WEBPACK_IMPORTED_MODULE_2__["a"]),
        onMove: ev => activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_7b8ba70a_js__WEBPACK_IMPORTED_MODULE_2__["b"]),
        onEnd: () => {
            clearActiveButton(true);
            Object(_haptic_7b8ba70a_js__WEBPACK_IMPORTED_MODULE_2__["h"])();
            initialTouchedButton = undefined;
        }
    });
};




/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm/framework-delegate-d1eb6504.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/framework-delegate-d1eb6504.js ***!
  \**************************************************************************/
/*! exports provided: a, d */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return attachComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return detachComponent; });
const attachComponent = async (delegate, container, component, cssClasses, componentProps) => {
    if (delegate) {
        return delegate.attachViewToDom(container, component, componentProps, cssClasses);
    }
    if (typeof component !== 'string' && !(component instanceof HTMLElement)) {
        throw new Error('framework delegate is missing');
    }
    const el = (typeof component === 'string')
        ? container.ownerDocument && container.ownerDocument.createElement(component)
        : component;
    if (cssClasses) {
        cssClasses.forEach(c => el.classList.add(c));
    }
    if (componentProps) {
        Object.assign(el, componentProps);
    }
    container.appendChild(el);
    if (el.componentOnReady) {
        await el.componentOnReady();
    }
    return el;
};
const detachComponent = (delegate, element) => {
    if (element) {
        if (delegate) {
            const container = element.parentElement;
            return delegate.removeViewFromDom(container, element);
        }
        element.remove();
    }
    return Promise.resolve();
};




/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm/haptic-7b8ba70a.js":
/*!**************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/haptic-7b8ba70a.js ***!
  \**************************************************************/
/*! exports provided: a, b, c, d, h */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return hapticSelectionStart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return hapticSelectionChanged; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return hapticSelection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return hapticImpact; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return hapticSelectionEnd; });
const HapticEngine = {
    getEngine() {
        const win = window;
        return (win.TapticEngine) || (win.Capacitor && win.Capacitor.isPluginAvailable('Haptics') && win.Capacitor.Plugins.Haptics);
    },
    available() {
        return !!this.getEngine();
    },
    isCordova() {
        return !!window.TapticEngine;
    },
    isCapacitor() {
        const win = window;
        return !!win.Capacitor;
    },
    impact(options) {
        const engine = this.getEngine();
        if (!engine) {
            return;
        }
        const style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
        engine.impact({ style });
    },
    notification(options) {
        const engine = this.getEngine();
        if (!engine) {
            return;
        }
        const style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
        engine.notification({ style });
    },
    selection() {
        this.impact({ style: 'light' });
    },
    selectionStart() {
        const engine = this.getEngine();
        if (!engine) {
            return;
        }
        if (this.isCapacitor()) {
            engine.selectionStart();
        }
        else {
            engine.gestureSelectionStart();
        }
    },
    selectionChanged() {
        const engine = this.getEngine();
        if (!engine) {
            return;
        }
        if (this.isCapacitor()) {
            engine.selectionChanged();
        }
        else {
            engine.gestureSelectionChanged();
        }
    },
    selectionEnd() {
        const engine = this.getEngine();
        if (!engine) {
            return;
        }
        if (this.isCapacitor()) {
            engine.selectionEnd();
        }
        else {
            engine.gestureSelectionEnd();
        }
    }
};
/**
 * Trigger a selection changed haptic event. Good for one-time events
 * (not for gestures)
 */
const hapticSelection = () => {
    HapticEngine.selection();
};
/**
 * Tell the haptic engine that a gesture for a selection change is starting.
 */
const hapticSelectionStart = () => {
    HapticEngine.selectionStart();
};
/**
 * Tell the haptic engine that a selection changed during a gesture.
 */
const hapticSelectionChanged = () => {
    HapticEngine.selectionChanged();
};
/**
 * Tell the haptic engine we are done with a gesture. This needs to be
 * called lest resources are not properly recycled.
 */
const hapticSelectionEnd = () => {
    HapticEngine.selectionEnd();
};
/**
 * Use this to indicate success/failure/warning to the user.
 * options should be of the type `{ style: 'light' }` (or `medium`/`heavy`)
 */
const hapticImpact = (options) => {
    HapticEngine.impact(options);
};




/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm/spinner-configs-c78e170e.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/spinner-configs-c78e170e.js ***!
  \***********************************************************************/
/*! exports provided: S */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "S", function() { return SPINNERS; });
const spinners = {
    'bubbles': {
        dur: 1000,
        circles: 9,
        fn: (dur, index, total) => {
            const animationDelay = `${(dur * index / total) - dur}ms`;
            const angle = 2 * Math.PI * index / total;
            return {
                r: 5,
                style: {
                    'top': `${9 * Math.sin(angle)}px`,
                    'left': `${9 * Math.cos(angle)}px`,
                    'animation-delay': animationDelay,
                }
            };
        }
    },
    'circles': {
        dur: 1000,
        circles: 8,
        fn: (dur, index, total) => {
            const step = index / total;
            const animationDelay = `${(dur * step) - dur}ms`;
            const angle = 2 * Math.PI * step;
            return {
                r: 5,
                style: {
                    'top': `${9 * Math.sin(angle)}px`,
                    'left': `${9 * Math.cos(angle)}px`,
                    'animation-delay': animationDelay,
                }
            };
        }
    },
    'circular': {
        dur: 1400,
        elmDuration: true,
        circles: 1,
        fn: () => {
            return {
                r: 20,
                cx: 48,
                cy: 48,
                fill: 'none',
                viewBox: '24 24 48 48',
                transform: 'translate(0,0)',
                style: {}
            };
        }
    },
    'crescent': {
        dur: 750,
        circles: 1,
        fn: () => {
            return {
                r: 26,
                style: {}
            };
        }
    },
    'dots': {
        dur: 750,
        circles: 3,
        fn: (_, index) => {
            const animationDelay = -(110 * index) + 'ms';
            return {
                r: 6,
                style: {
                    'left': `${9 - (9 * index)}px`,
                    'animation-delay': animationDelay,
                }
            };
        }
    },
    'lines': {
        dur: 1000,
        lines: 12,
        fn: (dur, index, total) => {
            const transform = `rotate(${30 * index + (index < 6 ? 180 : -180)}deg)`;
            const animationDelay = `${(dur * index / total) - dur}ms`;
            return {
                y1: 17,
                y2: 29,
                style: {
                    'transform': transform,
                    'animation-delay': animationDelay,
                }
            };
        }
    },
    'lines-small': {
        dur: 1000,
        lines: 12,
        fn: (dur, index, total) => {
            const transform = `rotate(${30 * index + (index < 6 ? 180 : -180)}deg)`;
            const animationDelay = `${(dur * index / total) - dur}ms`;
            return {
                y1: 12,
                y2: 20,
                style: {
                    'transform': transform,
                    'animation-delay': animationDelay,
                }
            };
        }
    }
};
const SPINNERS = spinners;




/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm/theme-3f0b0c04.js":
/*!*************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/theme-3f0b0c04.js ***!
  \*************************************************************/
/*! exports provided: c, g, h, o */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return createColorClasses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return getClassMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return hostContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return openURL; });
const hostContext = (selector, el) => {
    return el.closest(selector) !== null;
};
/**
 * Create the mode and color classes for the component based on the classes passed in
 */
const createColorClasses = (color) => {
    return (typeof color === 'string' && color.length > 0) ? {
        'ion-color': true,
        [`ion-color-${color}`]: true
    } : undefined;
};
const getClassList = (classes) => {
    if (classes !== undefined) {
        const array = Array.isArray(classes) ? classes : classes.split(' ');
        return array
            .filter(c => c != null)
            .map(c => c.trim())
            .filter(c => c !== '');
    }
    return [];
};
const getClassMap = (classes) => {
    const map = {};
    getClassList(classes).forEach(c => map[c] = true);
    return map;
};
const SCHEME = /^[a-z][a-z0-9+\-.]*:/;
const openURL = async (url, ev, direction, animation) => {
    if (url != null && url[0] !== '#' && !SCHEME.test(url)) {
        const router = document.querySelector('ion-router');
        if (router) {
            if (ev != null) {
                ev.preventDefault();
            }
            return router.push(url, direction, animation);
        }
    }
    return false;
};




/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/docs/docs.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/docs/docs.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n<meta http-equiv=\"Content-Type\" content=\"text/xhtml;charset=UTF-8\"/>\n<meta http-equiv=\"X-UA-Compatible\" content=\"IE=9\"/>\n<meta name=\"generator\" content=\"Doxygen 1.8.8\"/>\n<title>SWTP2020_Framework: Main Page</title>\n<link href=\"tabs.css\" rel=\"stylesheet\" type=\"text/css\"/>\n<script type=\"text/javascript\" src=\"jquery.js\"></script>\n<script type=\"text/javascript\" src=\"dynsections.js\"></script>\n<link href=\"navtree.css\" rel=\"stylesheet\" type=\"text/css\"/>\n<script type=\"text/javascript\" src=\"resize.js\"></script>\n<script type=\"text/javascript\" src=\"navtree.js\"></script>\n<script type=\"text/javascript\">\n  $(document).ready(initResizable);\n  $(window).load(resizeHeight);\n</script>\n<link href=\"search/search.css\" rel=\"stylesheet\" type=\"text/css\"/>\n<script type=\"text/javascript\" src=\"search/search.js\"></script>\n<script type=\"text/javascript\">\n  $(document).ready(function() { searchBox.OnSelectItem(0); });\n</script>\n<link href=\"doxygen.css\" rel=\"stylesheet\" type=\"text/css\" />\n</ion-header>\n<ion-content>\n    <div id=\"top\"><!-- do not remove this div, it is closed by doxygen! -->\n<div id=\"titlearea\">\n<table cellspacing=\"0\" cellpadding=\"0\">\n <tbody>\n <tr style=\"height: 56px;\">\n  <td style=\"padding-left: 0.5em;\">\n   <div id=\"projectname\">SWTP2020_Framework\n   </div>\n  </td>\n </tr>\n </tbody>\n</table>\n</div>\n<!-- end header part -->\n<!-- Generated by Doxygen 1.8.8 -->\n<script type=\"text/javascript\">\nvar searchBox = new SearchBox(\"searchBox\", \"search\",false,'Search');\n</script>\n  <div id=\"navrow1\" class=\"tabs\">\n    <ul class=\"tablist\">\n      <li class=\"current\"><a href=\"index.html\"><span>Main&#160;Page</span></a></li>\n      <li><a href=\"namespaces.html\"><span>Packages</span></a></li>\n      <li><a href=\"annotated.html\"><span>Classes</span></a></li>\n      <li><a href=\"files.html\"><span>Files</span></a></li>\n      <li>\n        <div id=\"MSearchBox\" class=\"MSearchBoxInactive\">\n        <span class=\"left\">\n          <img id=\"MSearchSelect\" src=\"search/mag_sel.png\"\n               onmouseover=\"return searchBox.OnSearchSelectShow()\"\n               onmouseout=\"return searchBox.OnSearchSelectHide()\"\n               alt=\"\"/>\n          <input type=\"text\" id=\"MSearchField\" value=\"Search\" accesskey=\"S\"\n               onfocus=\"searchBox.OnSearchFieldFocus(true)\"\n               onblur=\"searchBox.OnSearchFieldFocus(false)\"\n               onkeyup=\"searchBox.OnSearchFieldChange(event)\"/>\n          </span><span class=\"right\">\n            <a id=\"MSearchClose\" href=\"javascript:searchBox.CloseResultsWindow()\"><img id=\"MSearchCloseImg\" border=\"0\" src=\"search/close.png\" alt=\"\"/></a>\n          </span>\n        </div>\n      </li>\n    </ul>\n  </div>\n</div><!-- top -->\n<div id=\"side-nav\" class=\"ui-resizable side-nav-resizable\">\n  <div id=\"nav-tree\">\n    <div id=\"nav-tree-contents\">\n      <div id=\"nav-sync\" class=\"sync\"></div>\n    </div>\n  </div>\n  <div id=\"splitbar\" style=\"-moz-user-select:none;\"\n       class=\"ui-resizable-handle\">\n  </div>\n</div>\n<script type=\"text/javascript\">\n$(document).ready(function(){initNavTree('index.html','');});\n</script>\n<div id=\"doc-content\">\n<!-- window showing the filter options -->\n<div id=\"MSearchSelectWindow\"\n     onmouseover=\"return searchBox.OnSearchSelectShow()\"\n     onmouseout=\"return searchBox.OnSearchSelectHide()\"\n     onkeydown=\"return searchBox.OnSearchSelectKey(event)\">\n<a class=\"SelectItem\" href=\"javascript:void(0)\" onclick=\"searchBox.OnSelectItem(0)\"><span class=\"SelectionMark\">&#160;</span>All</a><a class=\"SelectItem\" href=\"javascript:void(0)\" onclick=\"searchBox.OnSelectItem(1)\"><span class=\"SelectionMark\">&#160;</span>Classes</a><a class=\"SelectItem\" href=\"javascript:void(0)\" onclick=\"searchBox.OnSelectItem(2)\"><span class=\"SelectionMark\">&#160;</span>Namespaces</a><a class=\"SelectItem\" href=\"javascript:void(0)\" onclick=\"searchBox.OnSelectItem(3)\"><span class=\"SelectionMark\">&#160;</span>Files</a><a class=\"SelectItem\" href=\"javascript:void(0)\" onclick=\"searchBox.OnSelectItem(4)\"><span class=\"SelectionMark\">&#160;</span>Functions</a><a class=\"SelectItem\" href=\"javascript:void(0)\" onclick=\"searchBox.OnSelectItem(5)\"><span class=\"SelectionMark\">&#160;</span>Variables</a><a class=\"SelectItem\" href=\"javascript:void(0)\" onclick=\"searchBox.OnSelectItem(6)\"><span class=\"SelectionMark\">&#160;</span>Typedefs</a><a class=\"SelectItem\" href=\"javascript:void(0)\" onclick=\"searchBox.OnSelectItem(7)\"><span class=\"SelectionMark\">&#160;</span>Enumerations</a><a class=\"SelectItem\" href=\"javascript:void(0)\" onclick=\"searchBox.OnSelectItem(8)\"><span class=\"SelectionMark\">&#160;</span>Enumerator</a><a class=\"SelectItem\" href=\"javascript:void(0)\" onclick=\"searchBox.OnSelectItem(9)\"><span class=\"SelectionMark\">&#160;</span>Properties</a></div>\n\n<!-- iframe showing the search results (closed by default) -->\n<div id=\"MSearchResultsWindow\">\n<iframe src=\"javascript:void(0)\" frameborder=\"0\"\n        name=\"MSearchResults\" id=\"MSearchResults\">\n</iframe>\n</div>\n\n<div class=\"header\">\n  <div class=\"headertitle\">\n<div class=\"title\">SWTP2020_Framework Documentation</div>  </div>\n</div><!--header-->\n<div class=\"contents\">\n</div><!-- contents -->\n</div><!-- doc-content -->\n<!-- start footer part -->\n<div id=\"nav-path\" class=\"navpath\"><!-- id is needed for treeview function! -->\n  <ul>\n    <li class=\"footer\">Generated on Tue Aug 11 2020 14:02:56 for SWTP2020_Framework by\n    <a href=\"http://www.doxygen.org/index.html\">\n    <img class=\"footer\" src=\"doxygen.png\" alt=\"doxygen\"/></a> 1.8.8 </li>\n  </ul>\n</div>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/docs/docs.page.scss":
/*!*************************************!*\
  !*** ./src/app/docs/docs.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RvY3MvZG9jcy5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/docs/docs.page.ts":
/*!***********************************!*\
  !*** ./src/app/docs/docs.page.ts ***!
  \***********************************/
/*! exports provided: DocsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocsPage", function() { return DocsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let DocsPage = class DocsPage {
    constructor() { }
    ngOnInit() {
    }
};
DocsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-docs',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./docs.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/docs/docs.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./docs.page.scss */ "./src/app/docs/docs.page.scss")).default]
    })
], DocsPage);



/***/ })

}]);
//# sourceMappingURL=common-es2015.js.map