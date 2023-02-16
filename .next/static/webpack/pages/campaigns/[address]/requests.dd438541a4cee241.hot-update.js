"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/campaigns/[address]/requests",{

/***/ "./components/RequestRow.js":
/*!**********************************!*\
  !*** ./components/RequestRow.js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! semantic-ui-react */ \"./node_modules/semantic-ui-react/dist/es/index.js\");\n/* harmony import */ var _ethereum_web3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ethereum/web3 */ \"./ethereum/web3.js\");\nvar _this = undefined;\n\n\n\n\nvar RequestRow = function(param) {\n    var id = param.id, request = param.request, address = param.address, approversCount = param.approversCount;\n    var Row = semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Table.Row, Cell = semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Table.Cell;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Row, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Cell, {\n                children: id\n            }, void 0, false, {\n                fileName: \"D:\\\\College\\\\PROJECTS\\\\eth-crowdcoin-nextjs\\\\components\\\\RequestRow.js\",\n                lineNumber: 9,\n                columnNumber: 9\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Cell, {\n                children: request.description\n            }, void 0, false, {\n                fileName: \"D:\\\\College\\\\PROJECTS\\\\eth-crowdcoin-nextjs\\\\components\\\\RequestRow.js\",\n                lineNumber: 10,\n                columnNumber: 9\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Cell, {\n                children: _ethereum_web3__WEBPACK_IMPORTED_MODULE_2__[\"default\"].utils.fromWei(request.value, \"ether\")\n            }, void 0, false, {\n                fileName: \"D:\\\\College\\\\PROJECTS\\\\eth-crowdcoin-nextjs\\\\components\\\\RequestRow.js\",\n                lineNumber: 11,\n                columnNumber: 9\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Cell, {\n                children: request.recipient\n            }, void 0, false, {\n                fileName: \"D:\\\\College\\\\PROJECTS\\\\eth-crowdcoin-nextjs\\\\components\\\\RequestRow.js\",\n                lineNumber: 12,\n                columnNumber: 9\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Cell, {\n                children: \"\".concat(request.approvalCount, \"/\").concat(approversCount)\n            }, void 0, false, {\n                fileName: \"D:\\\\College\\\\PROJECTS\\\\eth-crowdcoin-nextjs\\\\components\\\\RequestRow.js\",\n                lineNumber: 13,\n                columnNumber: 9\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Cell, {\n                children: request.description\n            }, void 0, false, {\n                fileName: \"D:\\\\College\\\\PROJECTS\\\\eth-crowdcoin-nextjs\\\\components\\\\RequestRow.js\",\n                lineNumber: 14,\n                columnNumber: 9\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Cell, {\n                children: request.description\n            }, void 0, false, {\n                fileName: \"D:\\\\College\\\\PROJECTS\\\\eth-crowdcoin-nextjs\\\\components\\\\RequestRow.js\",\n                lineNumber: 15,\n                columnNumber: 9\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\College\\\\PROJECTS\\\\eth-crowdcoin-nextjs\\\\components\\\\RequestRow.js\",\n        lineNumber: 8,\n        columnNumber: 5\n    }, _this);\n};\n_c = RequestRow;\n/* harmony default export */ __webpack_exports__[\"default\"] = (RequestRow);\nvar _c;\n$RefreshReg$(_c, \"RequestRow\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1JlcXVlc3RSb3cuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUF5QjtBQUNpQjtBQUNQO0FBQ25DLElBQU1HLFVBQVUsR0FBRyxnQkFBNEM7UUFBMUNDLEVBQUUsU0FBRkEsRUFBRSxFQUFFQyxPQUFPLFNBQVBBLE9BQU8sRUFBRUMsT0FBTyxTQUFQQSxPQUFPLEVBQUVDLGNBQWMsU0FBZEEsY0FBYztJQUNyRCxJQUFRQyxHQUFHLEdBQVdQLHdEQUFYLEVBQUVRLElBQUksR0FBS1IseURBQUw7SUFFakIscUJBQ0EsOERBQUNPLEdBQUc7OzBCQUNBLDhEQUFDQyxJQUFJOzBCQUFFTCxFQUFFOzs7OztxQkFBUTswQkFDakIsOERBQUNLLElBQUk7MEJBQUVKLE9BQU8sQ0FBQ0ssV0FBVzs7Ozs7cUJBQVE7MEJBQ2xDLDhEQUFDRCxJQUFJOzBCQUFFUCxvRUFBa0IsQ0FBQ0csT0FBTyxDQUFDUSxLQUFLLEVBQUUsT0FBTyxDQUFDOzs7OztxQkFBUTswQkFDekQsOERBQUNKLElBQUk7MEJBQUVKLE9BQU8sQ0FBQ1MsU0FBUzs7Ozs7cUJBQVE7MEJBQ2hDLDhEQUFDTCxJQUFJOzBCQUFFLEVBQUMsQ0FBMkJGLE1BQWMsQ0FBdkNGLE9BQU8sQ0FBQ1UsYUFBYSxFQUFDLEdBQUMsQ0FBaUIsUUFBZlIsY0FBYyxDQUFFOzs7OztxQkFBUTswQkFDM0QsOERBQUNFLElBQUk7MEJBQUVKLE9BQU8sQ0FBQ0ssV0FBVzs7Ozs7cUJBQVE7MEJBQ2xDLDhEQUFDRCxJQUFJOzBCQUFFSixPQUFPLENBQUNLLFdBQVc7Ozs7O3FCQUFROzs7Ozs7YUFDaEMsQ0FDUDtDQUNGO0FBZEtQLEtBQUFBLFVBQVU7QUFnQmhCLCtEQUFlQSxVQUFVIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvUmVxdWVzdFJvdy5qcz9jYTMyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgVGFibGUgfSBmcm9tIFwic2VtYW50aWMtdWktcmVhY3RcIjtcclxuaW1wb3J0IHdlYjMgZnJvbSBcIi4uL2V0aGVyZXVtL3dlYjNcIlxyXG5jb25zdCBSZXF1ZXN0Um93ID0gKHtpZCwgcmVxdWVzdCwgYWRkcmVzcywgYXBwcm92ZXJzQ291bnR9KSA9PiB7XHJcbiAgICBjb25zdCB7IFJvdywgQ2VsbCB9ID0gVGFibGU7XHJcbiAgXHJcbiAgICByZXR1cm4gKFxyXG4gICAgPFJvdz5cclxuICAgICAgICA8Q2VsbD57aWR9PC9DZWxsPlxyXG4gICAgICAgIDxDZWxsPntyZXF1ZXN0LmRlc2NyaXB0aW9ufTwvQ2VsbD5cclxuICAgICAgICA8Q2VsbD57d2ViMy51dGlscy5mcm9tV2VpKHJlcXVlc3QudmFsdWUsICdldGhlcicpfTwvQ2VsbD5cclxuICAgICAgICA8Q2VsbD57cmVxdWVzdC5yZWNpcGllbnR9PC9DZWxsPlxyXG4gICAgICAgIDxDZWxsPntgJHtyZXF1ZXN0LmFwcHJvdmFsQ291bnR9LyR7YXBwcm92ZXJzQ291bnR9YH08L0NlbGw+XHJcbiAgICAgICAgPENlbGw+e3JlcXVlc3QuZGVzY3JpcHRpb259PC9DZWxsPlxyXG4gICAgICAgIDxDZWxsPntyZXF1ZXN0LmRlc2NyaXB0aW9ufTwvQ2VsbD5cclxuICAgIDwvUm93PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmVxdWVzdFJvdyJdLCJuYW1lcyI6WyJSZWFjdCIsIlRhYmxlIiwid2ViMyIsIlJlcXVlc3RSb3ciLCJpZCIsInJlcXVlc3QiLCJhZGRyZXNzIiwiYXBwcm92ZXJzQ291bnQiLCJSb3ciLCJDZWxsIiwiZGVzY3JpcHRpb24iLCJ1dGlscyIsImZyb21XZWkiLCJ2YWx1ZSIsInJlY2lwaWVudCIsImFwcHJvdmFsQ291bnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/RequestRow.js\n"));

/***/ })

});