(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("angular"));
	else if(typeof define === 'function' && define.amd)
		define(["angular"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("angular")) : factory(root["angular"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function(__WEBPACK_EXTERNAL_MODULE_3__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var FixedCalendar = (function () {
    function FixedCalendar() {
        this.months = ["January", "February", "March", "April", "May", "June", "Sol", "July", "August", "September", "October", "November", "December"];
        this.weekDays = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
        this.normalMonth = [[1, 2, 3, 4, 5, 6, 7], [8, 9, 10, 11, 12, 13, 14], [15, 16, 17, 18, 19, 20, 21], [22, 23, 24, 25, 26, 27, 28]];
        this.leapMonth = this.normalMonth.concat([[29]]);
    }
    FixedCalendar.prototype.getMonthsOfYear = function () {
        return this.months;
    };
    FixedCalendar.prototype.getDaysOfMonth = function (year, month) {
        if (month === 13 || (month === 6 && this.isYearLeap(year))) {
            return this.leapMonth;
        }
        return this.normalMonth;
    };
    FixedCalendar.prototype.getNumberOfDaysInMonth = function (year, month) {
        if (month === 13 || (month === 6 && this.isYearLeap(year))) {
            return 29;
        }
        return 28;
    };
    FixedCalendar.prototype.getLabelOfDayOfMonth = function (year, month, day) {
        if (month === 13 && day === 29) {
            return "Year Day";
        }
        if (month === 6 && day === 29) {
            return "Leap Day";
        }
        return String(day);
    };
    FixedCalendar.prototype.getWeekDays = function () {
        return this.weekDays;
    };
    FixedCalendar.prototype.isYearLeap = function (year) {
        year += 16;
        if (year % 400 === 0) {
            return true;
        }
        if (year % 4 === 0 && year % 100 !== 0) {
            return true;
        }
        return false;
    };
    return FixedCalendar;
}());
exports["default"] = FixedCalendar;


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var angular = __webpack_require__(3);
var calendar_1 = __webpack_require__(0);
angular.module("ion-datetime-picker").service("$ionDtpCalendarFixed", calendar_1["default"]);


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var calendar_1 = __webpack_require__(0);
__webpack_require__(1);
module.exports = calendar_1["default"];


/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

/***/ })
/******/ ]);
});