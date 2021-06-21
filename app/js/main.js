/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./style/style.scss":
/*!**************************!*\
  !*** ./style/style.scss ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack:///./style/style.scss?");

/***/ }),

/***/ "./script/script.js":
/*!**************************!*\
  !*** ./script/script.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../style/style.scss */ \"./style/style.scss\");\n// import '../index.html';\r\n\r\nconst $prevSlide = document.querySelectorAll('.arrow_left');\r\nconst $nextSlide = document.querySelectorAll('.arrow_right');\r\nlet slideIndex = 1;\r\nconst $themeChange = document.querySelector('.theme_button');\r\nlet theme = 'light';\r\n\r\n$prevSlide.forEach(item => item.addEventListener('click', e => plusSlides(-1)));\r\n$nextSlide.forEach(item => item.addEventListener('click', e => plusSlides(1)));\r\n$themeChange.addEventListener('click', e => themeChange(e.target));\r\n\r\nshowSlides(slideIndex);\r\n\r\nfunction plusSlides(n) {\r\n    showSlides(slideIndex += n);\r\n}\r\n\r\nfunction showSlides(n) {\r\n    let i = 0;\r\n    let $slides = document.getElementsByClassName('img-slider');\r\n\r\n    if(n > $slides.length) {\r\n        slideIndex = 1;\r\n    } \r\n\r\n    if(n < 1) {\r\n        slideIndex = $slides.length;\r\n    }\r\n\r\n    for (i = 0; i < $slides.length; i++) {\r\n        $slides[i].style.display = 'none';\r\n    }\r\n\r\n    $slides[slideIndex-1].style.display = 'flex';\r\n}\r\n\r\nwindow.onload = () => {\r\n    if(localStorage.getItem('theme') === 'dark'){\r\n        document.documentElement.setAttribute('theme', 'dark');\r\n    }\r\n};\r\n\r\nfunction themeChange(target) {\r\n    if (localStorage.theme === 'light') {\r\n        document.documentElement.setAttribute('theme', 'dark');\r\n        localStorage.setItem('theme', 'dark');\r\n    } else if (localStorage.theme === 'dark') {\r\n        document.documentElement.removeAttribute('theme');\r\n        localStorage.removeItem('theme'); // удаляем\r\n        localStorage.setItem('theme', 'light');\r\n    }\r\n}\n\n//# sourceURL=webpack:///./script/script.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./script/script.js");
/******/ 	
/******/ })()
;