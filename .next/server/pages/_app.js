/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./context/FormContext.tsx":
/*!*********************************!*\
  !*** ./context/FormContext.tsx ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   FormProvider: () => (/* binding */ FormProvider),\n/* harmony export */   useForm: () => (/* binding */ useForm)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst defaultFormData = {\n    from: \"\",\n    to: \"\",\n    departDate: \"\",\n    returnDate: \"\",\n    type: \"\"\n};\nconst FormContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({\n    form: defaultFormData,\n    setForm: ()=>{}\n});\nfunction useForm() {\n    return (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(FormContext);\n}\nfunction FormProvider({ children }) {\n    const [form, setFormState] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(defaultFormData);\n    const setForm = (data)=>{\n        setFormState((prev)=>({\n                ...prev,\n                ...data\n            }));\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(FormContext.Provider, {\n        value: {\n            form,\n            setForm\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Sefina\\\\Downloads\\\\flight-booking-form\\\\context\\\\FormContext.tsx\",\n        lineNumber: 39,\n        columnNumber: 5\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb250ZXh0L0Zvcm1Db250ZXh0LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQThFO0FBVTlFLE1BQU1JLGtCQUE0QjtJQUNoQ0MsTUFBTTtJQUNOQyxJQUFJO0lBQ0pDLFlBQVk7SUFDWkMsWUFBWTtJQUNaQyxNQUFNO0FBQ1I7QUFFQSxNQUFNQyw0QkFBY1Qsb0RBQWFBLENBRzlCO0lBQ0RVLE1BQU1QO0lBQ05RLFNBQVMsS0FBTztBQUNsQjtBQUVPLFNBQVNDO0lBQ2QsT0FBT1gsaURBQVVBLENBQUNRO0FBQ3BCO0FBRU8sU0FBU0ksYUFBYSxFQUFFQyxRQUFRLEVBQTJCO0lBQ2hFLE1BQU0sQ0FBQ0osTUFBTUssYUFBYSxHQUFHYiwrQ0FBUUEsQ0FBV0M7SUFFaEQsTUFBTVEsVUFBVSxDQUFDSztRQUNmRCxhQUFhLENBQUNFLE9BQVU7Z0JBQUUsR0FBR0EsSUFBSTtnQkFBRSxHQUFHRCxJQUFJO1lBQUM7SUFDN0M7SUFFQSxxQkFDRSw4REFBQ1AsWUFBWVMsUUFBUTtRQUFDQyxPQUFPO1lBQUVUO1lBQU1DO1FBQVE7a0JBQzFDRzs7Ozs7O0FBR1AiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mbGlnaHQtYm9va2luZy1mb3JtLy4vY29udGV4dC9Gb3JtQ29udGV4dC50c3g/NzcxOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgY3JlYXRlQ29udGV4dCwgdXNlQ29udGV4dCwgdXNlU3RhdGUsIFJlYWN0Tm9kZSB9IGZyb20gJ3JlYWN0JztcclxuXHJcbnR5cGUgRm9ybURhdGEgPSB7XHJcbiAgZnJvbTogc3RyaW5nO1xyXG4gIHRvOiBzdHJpbmc7XHJcbiAgZGVwYXJ0RGF0ZTogc3RyaW5nO1xyXG4gIHJldHVybkRhdGU6IHN0cmluZztcclxuICB0eXBlOiBzdHJpbmc7XHJcbn07XHJcblxyXG5jb25zdCBkZWZhdWx0Rm9ybURhdGE6IEZvcm1EYXRhID0ge1xyXG4gIGZyb206ICcnLFxyXG4gIHRvOiAnJyxcclxuICBkZXBhcnREYXRlOiAnJyxcclxuICByZXR1cm5EYXRlOiAnJyxcclxuICB0eXBlOiAnJyxcclxufTtcclxuXHJcbmNvbnN0IEZvcm1Db250ZXh0ID0gY3JlYXRlQ29udGV4dDx7XHJcbiAgZm9ybTogRm9ybURhdGE7XHJcbiAgc2V0Rm9ybTogKGRhdGE6IFBhcnRpYWw8Rm9ybURhdGE+KSA9PiB2b2lkO1xyXG59Pih7XHJcbiAgZm9ybTogZGVmYXVsdEZvcm1EYXRhLFxyXG4gIHNldEZvcm06ICgpID0+IHt9LFxyXG59KTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB1c2VGb3JtKCkge1xyXG4gIHJldHVybiB1c2VDb250ZXh0KEZvcm1Db250ZXh0KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIEZvcm1Qcm92aWRlcih7IGNoaWxkcmVuIH06IHsgY2hpbGRyZW46IFJlYWN0Tm9kZSB9KSB7XHJcbiAgY29uc3QgW2Zvcm0sIHNldEZvcm1TdGF0ZV0gPSB1c2VTdGF0ZTxGb3JtRGF0YT4oZGVmYXVsdEZvcm1EYXRhKTtcclxuXHJcbiAgY29uc3Qgc2V0Rm9ybSA9IChkYXRhOiBQYXJ0aWFsPEZvcm1EYXRhPikgPT4ge1xyXG4gICAgc2V0Rm9ybVN0YXRlKChwcmV2KSA9PiAoeyAuLi5wcmV2LCAuLi5kYXRhIH0pKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEZvcm1Db250ZXh0LlByb3ZpZGVyIHZhbHVlPXt7IGZvcm0sIHNldEZvcm0gfX0+XHJcbiAgICAgIHtjaGlsZHJlbn1cclxuICAgIDwvRm9ybUNvbnRleHQuUHJvdmlkZXI+XHJcbiAgKTtcclxufSJdLCJuYW1lcyI6WyJSZWFjdCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwidXNlU3RhdGUiLCJkZWZhdWx0Rm9ybURhdGEiLCJmcm9tIiwidG8iLCJkZXBhcnREYXRlIiwicmV0dXJuRGF0ZSIsInR5cGUiLCJGb3JtQ29udGV4dCIsImZvcm0iLCJzZXRGb3JtIiwidXNlRm9ybSIsIkZvcm1Qcm92aWRlciIsImNoaWxkcmVuIiwic2V0Rm9ybVN0YXRlIiwiZGF0YSIsInByZXYiLCJQcm92aWRlciIsInZhbHVlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./context/FormContext.tsx\n");

/***/ }),

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _context_FormContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../context/FormContext */ \"./context/FormContext.tsx\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nfunction App({ Component, pageProps }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_context_FormContext__WEBPACK_IMPORTED_MODULE_1__.FormProvider, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n            ...pageProps\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Sefina\\\\Downloads\\\\flight-booking-form\\\\pages\\\\_app.tsx\",\n            lineNumber: 8,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Sefina\\\\Downloads\\\\flight-booking-form\\\\pages\\\\_app.tsx\",\n        lineNumber: 7,\n        columnNumber: 5\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQ3NEO0FBQ3ZCO0FBRWhCLFNBQVNDLElBQUksRUFBRUMsU0FBUyxFQUFFQyxTQUFTLEVBQVk7SUFDNUQscUJBQ0UsOERBQUNILDhEQUFZQTtrQkFDWCw0RUFBQ0U7WUFBVyxHQUFHQyxTQUFTOzs7Ozs7Ozs7OztBQUc5QiIsInNvdXJjZXMiOlsid2VicGFjazovL2ZsaWdodC1ib29raW5nLWZvcm0vLi9wYWdlcy9fYXBwLnRzeD8yZmJlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgQXBwUHJvcHMgfSBmcm9tICduZXh0L2FwcCc7XHJcbmltcG9ydCB7IEZvcm1Qcm92aWRlciB9IGZyb20gJy4uL2NvbnRleHQvRm9ybUNvbnRleHQnO1xyXG5pbXBvcnQgJy4uL3N0eWxlcy9nbG9iYWxzLmNzcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9OiBBcHBQcm9wcykge1xyXG4gIHJldHVybiAoXHJcbiAgICA8Rm9ybVByb3ZpZGVyPlxyXG4gICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XHJcbiAgICA8L0Zvcm1Qcm92aWRlcj5cclxuICApO1xyXG59Il0sIm5hbWVzIjpbIkZvcm1Qcm92aWRlciIsIkFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.tsx"));
module.exports = __webpack_exports__;

})();