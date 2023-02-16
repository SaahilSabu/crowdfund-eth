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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var D_College_PROJECTS_eth_crowdcoin_nextjs_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var D_College_PROJECTS_eth_crowdcoin_nextjs_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(D_College_PROJECTS_eth_crowdcoin_nextjs_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/Layout */ \"./components/Layout.js\");\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! semantic-ui-react */ \"./node_modules/semantic-ui-react/dist/es/index.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _ethereum_campaign__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../ethereum/campaign */ \"./ethereum/campaign.js\");\n/* harmony import */ var _components_RequestRow__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/RequestRow */ \"./components/RequestRow.js\");\n\n\nvar _this = undefined;\n\n\n\n\n\n\n\nvar RequestList = function(param) {\n    var address = param.address, requests = param.requests, requestCount = param.requestCount;\n    var Header = semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__.Table.Header, Row = semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__.Table.Row, HeaderCell = semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__.Table.HeaderCell, Body = semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__.Table.Body;\n    var renderRows = function() {\n        return requests.map(function(req, index) {\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(RequestRow, {\n                req: req,\n                address: address\n            }, index, false, {\n                fileName: \"D:\\\\College\\\\PROJECTS\\\\eth-crowdcoin-nextjs\\\\pages\\\\campaigns\\\\[address]\\\\requests.js\",\n                lineNumber: 12,\n                columnNumber: 12\n            }, _this);\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h3\", {\n                children: \"Pending Requests\"\n            }, void 0, false, {\n                fileName: \"D:\\\\College\\\\PROJECTS\\\\eth-crowdcoin-nextjs\\\\pages\\\\campaigns\\\\[address]\\\\requests.js\",\n                lineNumber: 18,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {\n                href: \"/campaigns/\".concat(address, \"/requests/new\"),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"a\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__.Button, {\n                        primary: true,\n                        children: \"Add Request\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\College\\\\PROJECTS\\\\eth-crowdcoin-nextjs\\\\pages\\\\campaigns\\\\[address]\\\\requests.js\",\n                        lineNumber: 21,\n                        columnNumber: 11\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"D:\\\\College\\\\PROJECTS\\\\eth-crowdcoin-nextjs\\\\pages\\\\campaigns\\\\[address]\\\\requests.js\",\n                    lineNumber: 20,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"D:\\\\College\\\\PROJECTS\\\\eth-crowdcoin-nextjs\\\\pages\\\\campaigns\\\\[address]\\\\requests.js\",\n                lineNumber: 19,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__.Table, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Header, {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Row, {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(HeaderCell, {\n                                    children: \"ID\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\College\\\\PROJECTS\\\\eth-crowdcoin-nextjs\\\\pages\\\\campaigns\\\\[address]\\\\requests.js\",\n                                    lineNumber: 27,\n                                    columnNumber: 13\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(HeaderCell, {\n                                    children: \"Description\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\College\\\\PROJECTS\\\\eth-crowdcoin-nextjs\\\\pages\\\\campaigns\\\\[address]\\\\requests.js\",\n                                    lineNumber: 28,\n                                    columnNumber: 13\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(HeaderCell, {\n                                    children: \"Amount\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\College\\\\PROJECTS\\\\eth-crowdcoin-nextjs\\\\pages\\\\campaigns\\\\[address]\\\\requests.js\",\n                                    lineNumber: 29,\n                                    columnNumber: 13\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(HeaderCell, {\n                                    children: \"Recipient\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\College\\\\PROJECTS\\\\eth-crowdcoin-nextjs\\\\pages\\\\campaigns\\\\[address]\\\\requests.js\",\n                                    lineNumber: 30,\n                                    columnNumber: 13\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(HeaderCell, {\n                                    children: \"Approval Count\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\College\\\\PROJECTS\\\\eth-crowdcoin-nextjs\\\\pages\\\\campaigns\\\\[address]\\\\requests.js\",\n                                    lineNumber: 31,\n                                    columnNumber: 13\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(HeaderCell, {\n                                    children: \"Approve\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\College\\\\PROJECTS\\\\eth-crowdcoin-nextjs\\\\pages\\\\campaigns\\\\[address]\\\\requests.js\",\n                                    lineNumber: 32,\n                                    columnNumber: 13\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(HeaderCell, {\n                                    children: \"Finalize\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\College\\\\PROJECTS\\\\eth-crowdcoin-nextjs\\\\pages\\\\campaigns\\\\[address]\\\\requests.js\",\n                                    lineNumber: 33,\n                                    columnNumber: 13\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"D:\\\\College\\\\PROJECTS\\\\eth-crowdcoin-nextjs\\\\pages\\\\campaigns\\\\[address]\\\\requests.js\",\n                            lineNumber: 26,\n                            columnNumber: 11\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\College\\\\PROJECTS\\\\eth-crowdcoin-nextjs\\\\pages\\\\campaigns\\\\[address]\\\\requests.js\",\n                        lineNumber: 25,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Body, {\n                        children: renderRows\n                    }, void 0, false, {\n                        fileName: \"D:\\\\College\\\\PROJECTS\\\\eth-crowdcoin-nextjs\\\\pages\\\\campaigns\\\\[address]\\\\requests.js\",\n                        lineNumber: 36,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\College\\\\PROJECTS\\\\eth-crowdcoin-nextjs\\\\pages\\\\campaigns\\\\[address]\\\\requests.js\",\n                lineNumber: 24,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\College\\\\PROJECTS\\\\eth-crowdcoin-nextjs\\\\pages\\\\campaigns\\\\[address]\\\\requests.js\",\n        lineNumber: 17,\n        columnNumber: 5\n    }, _this);\n};\n_c = RequestList;\nRequestList.getInitialProps = function() {\n    var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(D_College_PROJECTS_eth_crowdcoin_nextjs_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(props) {\n        var address, campaign, requestCount, requests;\n        return D_College_PROJECTS_eth_crowdcoin_nextjs_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n            while(1)switch(_ctx.prev = _ctx.next){\n                case 0:\n                    address = props.query.address;\n                    campaign = (0,_ethereum_campaign__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(address);\n                    _ctx.next = 4;\n                    return campaign.methods.getRequestsCount().call();\n                case 4:\n                    requestCount = _ctx.sent;\n                    _ctx.next = 7;\n                    return Promise.all(Array(parseInt(requestCount)).fill().map(function(element, index) {\n                        return campaign.methods.requests(index).call();\n                    }));\n                case 7:\n                    requests = _ctx.sent;\n                    return _ctx.abrupt(\"return\", {\n                        address: address,\n                        requests: requests,\n                        requestCount: requestCount\n                    });\n                case 9:\n                case \"end\":\n                    return _ctx.stop();\n            }\n        }, _callee);\n    }));\n    return function(props) {\n        return _ref.apply(this, arguments);\n    };\n}();\n/* harmony default export */ __webpack_exports__[\"default\"] = (RequestList);\nvar _c;\n$RefreshReg$(_c, \"RequestList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jYW1wYWlnbnMvW2FkZHJlc3NdL3JlcXVlc3RzLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFBMEI7QUFDc0I7QUFDd0I7QUFDM0M7QUFDcUI7QUFDSztBQUN2RCxJQUFNVSxXQUFXLEdBQUcsZ0JBQXlDO1FBQXRDQyxPQUFPLFNBQVBBLE9BQU8sRUFBRUMsUUFBUSxTQUFSQSxRQUFRLEVBQUVDLFlBQVksU0FBWkEsWUFBWTtJQUNwRCxJQUFRQyxNQUFNLEdBQTRCUiwyREFBNUIsRUFBRVMsR0FBRyxHQUF1QlQsd0RBQXZCLEVBQUVVLFVBQVUsR0FBV1YsK0RBQVgsRUFBRVcsSUFBSSxHQUFLWCx5REFBTDtJQUV2QyxJQUFNWSxVQUFVLEdBQUcsV0FBTTtRQUN2QixPQUFPTixRQUFRLENBQUNPLEdBQUcsQ0FBQyxTQUFDQyxHQUFHLEVBQUVDLEtBQUssRUFBSztZQUNsQyxxQkFBTyw4REFBQ0MsVUFBVTtnQkFBQ0YsR0FBRyxFQUFJQSxHQUFHO2dCQUFnQlQsT0FBTyxFQUFHQSxPQUFPO2VBQXhCVSxLQUFLOzs7O3FCQUF1QixDQUFDO1NBQ3BFLENBQUM7S0FDSDtJQUVDLHFCQUNFLDhEQUFDcEIsMERBQU07OzBCQUNMLDhEQUFDc0IsSUFBRTswQkFBQyxrQkFBZ0I7Ozs7O3FCQUFLOzBCQUN6Qiw4REFBQ2hCLGtEQUFJO2dCQUFDaUIsSUFBSSxFQUFFLGFBQVksQ0FBVSxNQUFhLENBQXJCYixPQUFPLEVBQUMsZUFBYSxDQUFDOzBCQUM5Qyw0RUFBQ2MsR0FBQzs4QkFDQSw0RUFBQ3BCLHFEQUFNO3dCQUFDcUIsT0FBTztrQ0FBQyxhQUFXOzs7Ozs2QkFBUzs7Ozs7eUJBQ2xDOzs7OztxQkFDQzswQkFDUCw4REFBQ3BCLG9EQUFLOztrQ0FDSiw4REFBQ1EsTUFBTTtrQ0FDTCw0RUFBQ0MsR0FBRzs7OENBQ0YsOERBQUNDLFVBQVU7OENBQUMsSUFBRTs7Ozs7eUNBQWE7OENBQzNCLDhEQUFDQSxVQUFVOzhDQUFDLGFBQVc7Ozs7O3lDQUFhOzhDQUNwQyw4REFBQ0EsVUFBVTs4Q0FBQyxRQUFNOzs7Ozt5Q0FBYTs4Q0FDL0IsOERBQUNBLFVBQVU7OENBQUMsV0FBUzs7Ozs7eUNBQWE7OENBQ2xDLDhEQUFDQSxVQUFVOzhDQUFDLGdCQUFjOzs7Ozt5Q0FBYTs4Q0FDdkMsOERBQUNBLFVBQVU7OENBQUMsU0FBTzs7Ozs7eUNBQWE7OENBQ2hDLDhEQUFDQSxVQUFVOzhDQUFDLFVBQVE7Ozs7O3lDQUFhOzs7Ozs7aUNBQzdCOzs7Ozs2QkFDQztrQ0FDVCw4REFBQ0MsSUFBSTtrQ0FDRkMsVUFBVTs7Ozs7NkJBQ047Ozs7OztxQkFDRDs7Ozs7O2FBQ0QsQ0FDVDtDQUNIO0FBbkNLUixLQUFBQSxXQUFXO0FBcUNqQkEsV0FBVyxDQUFDaUIsZUFBZTtlQUFHLHdQQUFPQyxLQUFLLEVBQUs7WUFDckNqQixPQUFPLEVBQ1RrQixRQUFRLEVBRVJoQixZQUFZLEVBRVpELFFBQVE7Ozs7b0JBTFIsT0FBUyxHQUFLZ0IsS0FBSyxDQUFDRSxLQUFLLENBQXZCbkIsT0FBTyxDQUFpQjtvQkFDMUJrQixRQUFRLEdBQUdyQiw4REFBUSxDQUFDRyxPQUFPLENBQUMsQ0FBQzs7MkJBRVJrQixRQUFRLENBQUNFLE9BQU8sQ0FBQ0MsZ0JBQWdCLEVBQUUsQ0FBQ0MsSUFBSSxFQUFFOztvQkFBL0RwQixZQUFZLFlBQW1EOzsyQkFFOUNxQixPQUFPLENBQUNDLEdBQUcsQ0FDaENDLEtBQUssQ0FBQ0MsUUFBUSxDQUFDeEIsWUFBWSxDQUFDLENBQUMsQ0FDMUJ5QixJQUFJLEVBQUUsQ0FDTm5CLEdBQUcsQ0FBQyxTQUFDb0IsT0FBTyxFQUFFbEIsS0FBSyxFQUFLO3dCQUN2QixPQUFPUSxRQUFRLENBQUNFLE9BQU8sQ0FBQ25CLFFBQVEsQ0FBQ1MsS0FBSyxDQUFDLENBQUNZLElBQUksRUFBRSxDQUFDO3FCQUNoRCxDQUFDLENBQ0w7O29CQU5LckIsUUFBUSxZQU1iO2lEQUNNO3dCQUFFRCxPQUFPLEVBQVBBLE9BQU87d0JBQUVDLFFBQVEsRUFBUkEsUUFBUTt3QkFBRUMsWUFBWSxFQUFaQSxZQUFZO3FCQUFFOzs7Ozs7S0FDM0M7b0JBZG9DZSxLQUFLOzs7R0FjekMsQ0FBQztBQUVGLCtEQUFlbEIsV0FBVyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2NhbXBhaWducy9bYWRkcmVzc10vcmVxdWVzdHMuanM/N2E2NSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uLy4uLy4uL2NvbXBvbmVudHMvTGF5b3V0XCI7XHJcbmltcG9ydCB7IEZvcm0sIElucHV0LCBNZXNzYWdlLCBCdXR0b24sIFRhYmxlIH0gZnJvbSBcInNlbWFudGljLXVpLXJlYWN0XCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IENhbXBhaWduIGZyb20gXCIuLi8uLi8uLi9ldGhlcmV1bS9jYW1wYWlnblwiO1xyXG5pbXBvcnQgUmVxdWVzdHJvdyBmcm9tIFwiLi4vLi4vLi4vY29tcG9uZW50cy9SZXF1ZXN0Um93XCJcclxuY29uc3QgUmVxdWVzdExpc3QgPSAoeyBhZGRyZXNzLCByZXF1ZXN0cywgcmVxdWVzdENvdW50IH0pID0+IHtcclxuICBjb25zdCB7IEhlYWRlciwgUm93LCBIZWFkZXJDZWxsLCBCb2R5IH0gPSBUYWJsZTtcclxuXHJcbmNvbnN0IHJlbmRlclJvd3MgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIHJlcXVlc3RzLm1hcCgocmVxLCBpbmRleCkgPT4ge1xyXG4gICAgcmV0dXJuIDxSZXF1ZXN0Um93IHJlcSA9IHtyZXF9IGtleSA9IHtpbmRleH0gYWRkcmVzcz0ge2FkZHJlc3N9IC8+O1xyXG4gIH0pXHJcbn1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxMYXlvdXQ+XHJcbiAgICAgIDxoMz5QZW5kaW5nIFJlcXVlc3RzPC9oMz5cclxuICAgICAgPExpbmsgaHJlZj17YC9jYW1wYWlnbnMvJHthZGRyZXNzfS9yZXF1ZXN0cy9uZXdgfT5cclxuICAgICAgICA8YT5cclxuICAgICAgICAgIDxCdXR0b24gcHJpbWFyeT5BZGQgUmVxdWVzdDwvQnV0dG9uPlxyXG4gICAgICAgIDwvYT5cclxuICAgICAgPC9MaW5rPlxyXG4gICAgICA8VGFibGU+XHJcbiAgICAgICAgPEhlYWRlcj5cclxuICAgICAgICAgIDxSb3c+XHJcbiAgICAgICAgICAgIDxIZWFkZXJDZWxsPklEPC9IZWFkZXJDZWxsPlxyXG4gICAgICAgICAgICA8SGVhZGVyQ2VsbD5EZXNjcmlwdGlvbjwvSGVhZGVyQ2VsbD5cclxuICAgICAgICAgICAgPEhlYWRlckNlbGw+QW1vdW50PC9IZWFkZXJDZWxsPlxyXG4gICAgICAgICAgICA8SGVhZGVyQ2VsbD5SZWNpcGllbnQ8L0hlYWRlckNlbGw+XHJcbiAgICAgICAgICAgIDxIZWFkZXJDZWxsPkFwcHJvdmFsIENvdW50PC9IZWFkZXJDZWxsPlxyXG4gICAgICAgICAgICA8SGVhZGVyQ2VsbD5BcHByb3ZlPC9IZWFkZXJDZWxsPlxyXG4gICAgICAgICAgICA8SGVhZGVyQ2VsbD5GaW5hbGl6ZTwvSGVhZGVyQ2VsbD5cclxuICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgIDwvSGVhZGVyPlxyXG4gICAgICAgIDxCb2R5PlxyXG4gICAgICAgICAge3JlbmRlclJvd3N9XHJcbiAgICAgICAgPC9Cb2R5PlxyXG4gICAgICA8L1RhYmxlPlxyXG4gICAgPC9MYXlvdXQ+XHJcbiAgKTtcclxufTtcclxuXHJcblJlcXVlc3RMaXN0LmdldEluaXRpYWxQcm9wcyA9IGFzeW5jIChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IHsgYWRkcmVzcyB9ID0gcHJvcHMucXVlcnk7XHJcbiAgY29uc3QgY2FtcGFpZ24gPSBDYW1wYWlnbihhZGRyZXNzKTtcclxuXHJcbiAgY29uc3QgcmVxdWVzdENvdW50ID0gYXdhaXQgY2FtcGFpZ24ubWV0aG9kcy5nZXRSZXF1ZXN0c0NvdW50KCkuY2FsbCgpO1xyXG5cclxuICBjb25zdCByZXF1ZXN0cyA9IGF3YWl0IFByb21pc2UuYWxsKFxyXG4gICAgQXJyYXkocGFyc2VJbnQocmVxdWVzdENvdW50KSlcclxuICAgICAgLmZpbGwoKVxyXG4gICAgICAubWFwKChlbGVtZW50LCBpbmRleCkgPT4ge1xyXG4gICAgICAgIHJldHVybiBjYW1wYWlnbi5tZXRob2RzLnJlcXVlc3RzKGluZGV4KS5jYWxsKCk7XHJcbiAgICAgIH0pXHJcbiAgKTtcclxuICByZXR1cm4geyBhZGRyZXNzLCByZXF1ZXN0cywgcmVxdWVzdENvdW50IH07XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSZXF1ZXN0TGlzdDtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiTGF5b3V0IiwiRm9ybSIsIklucHV0IiwiTWVzc2FnZSIsIkJ1dHRvbiIsIlRhYmxlIiwiTGluayIsIkNhbXBhaWduIiwiUmVxdWVzdHJvdyIsIlJlcXVlc3RMaXN0IiwiYWRkcmVzcyIsInJlcXVlc3RzIiwicmVxdWVzdENvdW50IiwiSGVhZGVyIiwiUm93IiwiSGVhZGVyQ2VsbCIsIkJvZHkiLCJyZW5kZXJSb3dzIiwibWFwIiwicmVxIiwiaW5kZXgiLCJSZXF1ZXN0Um93IiwiaDMiLCJocmVmIiwiYSIsInByaW1hcnkiLCJnZXRJbml0aWFsUHJvcHMiLCJwcm9wcyIsImNhbXBhaWduIiwicXVlcnkiLCJtZXRob2RzIiwiZ2V0UmVxdWVzdHNDb3VudCIsImNhbGwiLCJQcm9taXNlIiwiYWxsIiwiQXJyYXkiLCJwYXJzZUludCIsImZpbGwiLCJlbGVtZW50Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/campaigns/[address]/requests.js\n"));

/***/ })

});