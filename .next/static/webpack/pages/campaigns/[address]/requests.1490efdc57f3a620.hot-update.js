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

/***/ "./pages/campaigns/[address]/requests.js":
/*!***********************************************!*\
  !*** ./pages/campaigns/[address]/requests.js ***!
  \***********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var D_College_PROJECTS_eth_crowdcoin_nextjs_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var D_College_PROJECTS_eth_crowdcoin_nextjs_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(D_College_PROJECTS_eth_crowdcoin_nextjs_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/Layout */ \"./components/Layout.js\");\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! semantic-ui-react */ \"./node_modules/semantic-ui-react/dist/es/index.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _ethereum_campaign__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../ethereum/campaign */ \"./ethereum/campaign.js\");\n\n\nvar _this = undefined;\n\n\n\n\n\n\nvar requests = function(param) {\n    var address = param.address;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h3\", {\n                children: \"Pending Requests\"\n            }, void 0, false, {\n                fileName: \"D:\\\\College\\\\PROJECTS\\\\eth-crowdcoin-nextjs\\\\pages\\\\campaigns\\\\[address]\\\\requests.js\",\n                lineNumber: 9,\n                columnNumber: 5\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {\n                href: \"/campaigns/\".concat(address, \"/requests/new\"),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"a\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Button, {\n                        primary: true,\n                        children: \"Add Request\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\College\\\\PROJECTS\\\\eth-crowdcoin-nextjs\\\\pages\\\\campaigns\\\\[address]\\\\requests.js\",\n                        lineNumber: 12,\n                        columnNumber: 5\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"D:\\\\College\\\\PROJECTS\\\\eth-crowdcoin-nextjs\\\\pages\\\\campaigns\\\\[address]\\\\requests.js\",\n                    lineNumber: 11,\n                    columnNumber: 5\n                }, _this)\n            }, void 0, false, {\n                fileName: \"D:\\\\College\\\\PROJECTS\\\\eth-crowdcoin-nextjs\\\\pages\\\\campaigns\\\\[address]\\\\requests.js\",\n                lineNumber: 10,\n                columnNumber: 5\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\College\\\\PROJECTS\\\\eth-crowdcoin-nextjs\\\\pages\\\\campaigns\\\\[address]\\\\requests.js\",\n        lineNumber: 8,\n        columnNumber: 5\n    }, _this);\n};\nrequests.getInitialProps = function() {\n    var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(D_College_PROJECTS_eth_crowdcoin_nextjs_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(props) {\n        var address, campaign, requestCount, request;\n        return D_College_PROJECTS_eth_crowdcoin_nextjs_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n            while(1)switch(_ctx.prev = _ctx.next){\n                case 0:\n                    address = props.query.address;\n                    campaign = (0,_ethereum_campaign__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(address);\n                    _ctx.next = 4;\n                    return campaign.methods.getRequestsCount().call();\n                case 4:\n                    requestCount = _ctx.sent;\n                    _ctx.next = 7;\n                    return Promise.all(Array(requestCount).fill().map(function(element, index) {\n                        return campaign.methods.requests(index).call();\n                    }));\n                case 7:\n                    request = _ctx.sent;\n                    return _ctx.abrupt(\"return\", {\n                        address: address\n                    });\n                case 9:\n                case \"end\":\n                    return _ctx.stop();\n            }\n        }, _callee);\n    }));\n    return function(props) {\n        return _ref.apply(this, arguments);\n    };\n}();\n/* harmony default export */ __webpack_exports__[\"default\"] = (requests);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jYW1wYWlnbnMvW2FkZHJlc3NdL3JlcXVlc3RzLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUF5QjtBQUN1QjtBQUNpQjtBQUNwQztBQUNvQjtBQUNqRCxJQUFNUSxRQUFRLEdBQUcsZ0JBQWU7UUFBYkMsT0FBTyxTQUFQQSxPQUFPO0lBQ3hCLHFCQUNFLDhEQUFDUiwwREFBTTs7MEJBQ1AsOERBQUNTLElBQUU7MEJBQUMsa0JBQWdCOzs7OztxQkFBSzswQkFDekIsOERBQUNKLGtEQUFJO2dCQUFDSyxJQUFJLEVBQUUsYUFBWSxDQUFVLE1BQWEsQ0FBckJGLE9BQU8sRUFBQyxlQUFhLENBQUM7MEJBQ2hELDRFQUFDRyxHQUFDOzhCQUNGLDRFQUFDUCxxREFBTTt3QkFBQ1EsT0FBTztrQ0FBQyxhQUFXOzs7Ozs2QkFBUzs7Ozs7eUJBQ2hDOzs7OztxQkFDRzs7Ozs7O2FBQ0UsQ0FDVjtDQUNGO0FBRURMLFFBQVEsQ0FBQ00sZUFBZTtlQUFHLHdQQUFNQyxLQUFLLEVBQUs7WUFDbkNOLE9BQU8sRUFDUE8sUUFBUSxFQUNSQyxZQUFZLEVBRWRDLE9BQU87Ozs7b0JBSkxULE9BQU8sR0FBR00sS0FBSyxDQUFDSSxLQUFLLENBQUNWLE9BQU8sQ0FBQztvQkFDOUJPLFFBQVEsR0FBR1QsOERBQVEsQ0FBQ0UsT0FBTyxDQUFDOzsyQkFDUE8sUUFBUSxDQUFDSSxPQUFPLENBQUNDLGdCQUFnQixFQUFFLENBQUNDLElBQUksRUFBRTs7b0JBQS9ETCxZQUFZLFlBQW1EOzsyQkFFakRNLE9BQU8sQ0FBQ0MsR0FBRyxDQUMvQkMsS0FBSyxDQUFDUixZQUFZLENBQUMsQ0FBQ1MsSUFBSSxFQUFFLENBQUNDLEdBQUcsQ0FBQyxTQUFDQyxPQUFPLEVBQUVDLEtBQUssRUFBSzt3QkFDakQsT0FBT2IsUUFBUSxDQUFDSSxPQUFPLENBQUNaLFFBQVEsQ0FBQ3FCLEtBQUssQ0FBQyxDQUFDUCxJQUFJLEVBQUUsQ0FBQztxQkFDaEQsQ0FBQyxDQUNIOztvQkFKS0osT0FBTyxZQUlaO2lEQUVNO3dCQUFDVCxPQUFPLEVBQVBBLE9BQU87cUJBQUM7Ozs7OztLQUNmO29CQVpnQ00sS0FBSzs7O0dBWXJDO0FBRUQsK0RBQWVQLFFBQVEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY2FtcGFpZ25zL1thZGRyZXNzXS9yZXF1ZXN0cy5qcz83YTY1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vLi4vLi4vY29tcG9uZW50cy9MYXlvdXRcIjtcclxuaW1wb3J0IHsgRm9ybSwgSW5wdXQsIE1lc3NhZ2UsIEJ1dHRvbiB9IGZyb20gXCJzZW1hbnRpYy11aS1yZWFjdFwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCBDYW1wYWlnbiBmcm9tIFwiLi4vLi4vLi4vZXRoZXJldW0vY2FtcGFpZ25cIlxyXG5jb25zdCByZXF1ZXN0cyA9ICh7YWRkcmVzc30pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPExheW91dD5cclxuICAgIDxoMz5QZW5kaW5nIFJlcXVlc3RzPC9oMz5cclxuICAgIDxMaW5rIGhyZWY9e2AvY2FtcGFpZ25zLyR7YWRkcmVzc30vcmVxdWVzdHMvbmV3YH0+XHJcbiAgICA8YT5cclxuICAgIDxCdXR0b24gcHJpbWFyeT5BZGQgUmVxdWVzdDwvQnV0dG9uPlxyXG4gICAgPC9hPlxyXG4gICAgPC9MaW5rPlxyXG4gICAgPC9MYXlvdXQ+XHJcbiAgKVxyXG59XHJcblxyXG5yZXF1ZXN0cy5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyhwcm9wcykgPT4ge1xyXG4gIGNvbnN0IGFkZHJlc3MgPSBwcm9wcy5xdWVyeS5hZGRyZXNzO1xyXG4gIGNvbnN0IGNhbXBhaWduID0gQ2FtcGFpZ24oYWRkcmVzcylcclxuICBjb25zdCByZXF1ZXN0Q291bnQgPSBhd2FpdCBjYW1wYWlnbi5tZXRob2RzLmdldFJlcXVlc3RzQ291bnQoKS5jYWxsKCk7XHJcblxyXG5jb25zdCByZXF1ZXN0ID0gYXdhaXQgUHJvbWlzZS5hbGwoXHJcbiAgQXJyYXkocmVxdWVzdENvdW50KS5maWxsKCkubWFwKChlbGVtZW50LCBpbmRleCkgPT4ge1xyXG4gICAgcmV0dXJuIGNhbXBhaWduLm1ldGhvZHMucmVxdWVzdHMoaW5kZXgpLmNhbGwoKTtcclxuICB9KVxyXG4pXHJcblxyXG5yZXR1cm4ge2FkZHJlc3N9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJlcXVlc3RzIl0sIm5hbWVzIjpbIlJlYWN0IiwiTGF5b3V0IiwiRm9ybSIsIklucHV0IiwiTWVzc2FnZSIsIkJ1dHRvbiIsIkxpbmsiLCJDYW1wYWlnbiIsInJlcXVlc3RzIiwiYWRkcmVzcyIsImgzIiwiaHJlZiIsImEiLCJwcmltYXJ5IiwiZ2V0SW5pdGlhbFByb3BzIiwicHJvcHMiLCJjYW1wYWlnbiIsInJlcXVlc3RDb3VudCIsInJlcXVlc3QiLCJxdWVyeSIsIm1ldGhvZHMiLCJnZXRSZXF1ZXN0c0NvdW50IiwiY2FsbCIsIlByb21pc2UiLCJhbGwiLCJBcnJheSIsImZpbGwiLCJtYXAiLCJlbGVtZW50IiwiaW5kZXgiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/campaigns/[address]/requests.js\n"));

/***/ })

});