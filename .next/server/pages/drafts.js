/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function() {
var exports = {};
exports.id = "pages/drafts";
exports.ids = ["pages/drafts"];
exports.modules = {

/***/ "./components/Post.tsx":
/*!*****************************!*\
  !*** ./components/Post.tsx ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ \"styled-jsx/style\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-markdown */ \"react-markdown\");\n/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_markdown__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _jsxFileName = \"/Users/yu.yagishita/.ghq/github.com/yu-yagishita/nextjs-prisma-sample/components/Post.tsx\";\n\n\n\n\n\nconst Post = ({\n  post\n}) => {\n  const authorName = post.author ? post.author.name : 'Unknown author';\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    onClick: () => next_router__WEBPACK_IMPORTED_MODULE_3___default().push('/p/[id]', `/p/${post.id}`),\n    className: \"jsx-1787549996\",\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n      className: \"jsx-1787549996\",\n      children: post.title\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 9\n    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"small\", {\n      className: \"jsx-1787549996\",\n      children: [\"By \", authorName]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 9\n    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_markdown__WEBPACK_IMPORTED_MODULE_4___default()), {\n      source: post.content\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 9\n    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {\n      id: \"1787549996\",\n      children: \"div.jsx-1787549996{color:inherit;padding:2rem;}\\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy95dS55YWdpc2hpdGEvLmdocS9naXRodWIuY29tL3l1LXlhZ2lzaGl0YS9uZXh0anMtcHJpc21hLXNhbXBsZS9jb21wb25lbnRzL1Bvc3QudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXFCb0IsQUFHMkIsY0FDRCxhQUNmIiwiZmlsZSI6Ii9Vc2Vycy95dS55YWdpc2hpdGEvLmdocS9naXRodWIuY29tL3l1LXlhZ2lzaGl0YS9uZXh0anMtcHJpc21hLXNhbXBsZS9jb21wb25lbnRzL1Bvc3QudHN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcidcbmltcG9ydCBSZWFjdE1hcmtkb3duIGZyb20gJ3JlYWN0LW1hcmtkb3duJ1xuXG5leHBvcnQgdHlwZSBQb3N0UHJvcHMgPSB7XG4gIGlkOiBudW1iZXI7XG4gIHRpdGxlOiBzdHJpbmc7XG4gIGF1dGhvcjoge1xuICAgIG5hbWU6IHN0cmluZztcbiAgfVxuICBjb250ZW50OiBzdHJpbmc7XG4gIHB1Ymxpc2hlZDogYm9vbGVhbjtcbn1cblxuY29uc3QgUG9zdDogUmVhY3QuRkM8e3Bvc3Q6IFBvc3RQcm9wc30+ID0gKHsgcG9zdCB9KSA9PiB7XG4gIGNvbnN0IGF1dGhvck5hbWUgPSBwb3N0LmF1dGhvciA/IHBvc3QuYXV0aG9yLm5hbWUgOiAnVW5rbm93biBhdXRob3InXG4gIHJldHVybiAoXG4gICAgPGRpdiBvbkNsaWNrPXsoKSA9PiBSb3V0ZXIucHVzaCgnL3AvW2lkXScsIGAvcC8ke3Bvc3QuaWR9YCl9PlxuICAgICAgICA8aDI+e3Bvc3QudGl0bGV9PC9oMj5cbiAgICAgICAgPHNtYWxsPkJ5IHthdXRob3JOYW1lfTwvc21hbGw+XG4gICAgICAgIDxSZWFjdE1hcmtkb3duIHNvdXJjZT17cG9zdC5jb250ZW50fSAvPlxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgZGl2IHtcbiAgICAgICAgICAgIGNvbG9yOiBpbmhlcml0O1xuICAgICAgICAgICAgcGFkZGluZzogMnJlbTtcbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBQb3N0Il19 */\\n/*@ sourceURL=/Users/yu.yagishita/.ghq/github.com/yu-yagishita/nextjs-prisma-sample/components/Post.tsx */\"\n    }, void 0, false, void 0, undefined)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 18,\n    columnNumber: 5\n  }, undefined);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Post);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9oZWxsby1uZXh0Ly4vY29tcG9uZW50cy9Qb3N0LnRzeD8xNmQ5Il0sIm5hbWVzIjpbIlBvc3QiLCJwb3N0IiwiYXV0aG9yTmFtZSIsImF1dGhvciIsIm5hbWUiLCJSb3V0ZXIiLCJpZCIsInRpdGxlIiwiY29udGVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBWUEsTUFBTUEsSUFBaUMsR0FBRyxDQUFDO0FBQUVDO0FBQUYsQ0FBRCxLQUFjO0FBQ3RELFFBQU1DLFVBQVUsR0FBR0QsSUFBSSxDQUFDRSxNQUFMLEdBQWNGLElBQUksQ0FBQ0UsTUFBTCxDQUFZQyxJQUExQixHQUFpQyxnQkFBcEQ7QUFDQSxzQkFDRTtBQUFLLFdBQU8sRUFBRSxNQUFNQyx1REFBQSxDQUFZLFNBQVosRUFBd0IsTUFBS0osSUFBSSxDQUFDSyxFQUFHLEVBQXJDLENBQXBCO0FBQUE7QUFBQSw0QkFDSTtBQUFBO0FBQUEsZ0JBQUtMLElBQUksQ0FBQ007QUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURKLGVBRUk7QUFBQTtBQUFBLHdCQUFXTCxVQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGSixlQUdJLDhEQUFDLHVEQUFEO0FBQWUsWUFBTSxFQUFFRCxJQUFJLENBQUNPO0FBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBSEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREY7QUFhRCxDQWZEOztBQWlCQSwrREFBZVIsSUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvUG9zdC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJ1xuaW1wb3J0IFJlYWN0TWFya2Rvd24gZnJvbSAncmVhY3QtbWFya2Rvd24nXG5cbmV4cG9ydCB0eXBlIFBvc3RQcm9wcyA9IHtcbiAgaWQ6IG51bWJlcjtcbiAgdGl0bGU6IHN0cmluZztcbiAgYXV0aG9yOiB7XG4gICAgbmFtZTogc3RyaW5nO1xuICB9XG4gIGNvbnRlbnQ6IHN0cmluZztcbiAgcHVibGlzaGVkOiBib29sZWFuO1xufVxuXG5jb25zdCBQb3N0OiBSZWFjdC5GQzx7cG9zdDogUG9zdFByb3BzfT4gPSAoeyBwb3N0IH0pID0+IHtcbiAgY29uc3QgYXV0aG9yTmFtZSA9IHBvc3QuYXV0aG9yID8gcG9zdC5hdXRob3IubmFtZSA6ICdVbmtub3duIGF1dGhvcidcbiAgcmV0dXJuIChcbiAgICA8ZGl2IG9uQ2xpY2s9eygpID0+IFJvdXRlci5wdXNoKCcvcC9baWRdJywgYC9wLyR7cG9zdC5pZH1gKX0+XG4gICAgICAgIDxoMj57cG9zdC50aXRsZX08L2gyPlxuICAgICAgICA8c21hbGw+Qnkge2F1dGhvck5hbWV9PC9zbWFsbD5cbiAgICAgICAgPFJlYWN0TWFya2Rvd24gc291cmNlPXtwb3N0LmNvbnRlbnR9IC8+XG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICBkaXYge1xuICAgICAgICAgICAgY29sb3I6IGluaGVyaXQ7XG4gICAgICAgICAgICBwYWRkaW5nOiAycmVtO1xuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFBvc3QiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Post.tsx\n");

/***/ }),

/***/ "./pages/drafts.tsx":
/*!**************************!*\
  !*** ./pages/drafts.tsx ***!
  \**************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getServerSideProps\": function() { return /* binding */ getServerSideProps; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ \"styled-jsx/style\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Layout */ \"./components/Layout.tsx\");\n/* harmony import */ var _components_Post__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Post */ \"./components/Post.tsx\");\n\nvar _jsxFileName = \"/Users/yu.yagishita/.ghq/github.com/yu-yagishita/nextjs-prisma-sample/pages/drafts.tsx\";\n\n\n\n\n\nconst Drafts = props => {\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_3__.default, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: \"jsx-3495282894\" + \" \" + \"page\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n        className: \"jsx-3495282894\",\n        children: \"Drafts\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 14,\n        columnNumber: 9\n      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: \"jsx-3495282894\",\n        children: props.drafts.map(post => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n          className: \"jsx-3495282894\" + \" \" + \"post\",\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Post__WEBPACK_IMPORTED_MODULE_4__.default, {\n            post: post\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 18,\n            columnNumber: 15\n          }, undefined)\n        }, post.id, false, {\n          fileName: _jsxFileName,\n          lineNumber: 17,\n          columnNumber: 13\n        }, undefined))\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 15,\n        columnNumber: 9\n      }, undefined)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {\n      id: \"3495282894\",\n      children: \".post.jsx-3495282894{background:white;-webkit-transition:box-shadow 0.1s ease-in;transition:box-shadow 0.1s ease-in;}.post.jsx-3495282894:hover{box-shadow:1px 1px 3px #aaa;}.post.jsx-3495282894+.post.jsx-3495282894{margin-top:2rem;}\\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy95dS55YWdpc2hpdGEvLmdocS9naXRodWIuY29tL3l1LXlhZ2lzaGl0YS9uZXh0anMtcHJpc21hLXNhbXBsZS9wYWdlcy9kcmFmdHMudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXNCa0IsQUFHNEIsQUFLVyxBQUlaLGdCQUNsQixDQVRxQyxXQUtyQyxtRUFKQSIsImZpbGUiOiIvVXNlcnMveXUueWFnaXNoaXRhLy5naHEvZ2l0aHViLmNvbS95dS15YWdpc2hpdGEvbmV4dGpzLXByaXNtYS1zYW1wbGUvcGFnZXMvZHJhZnRzLnRzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IHsgR2V0U2VydmVyU2lkZVByb3BzIH0gZnJvbSBcIm5leHRcIlxuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vY29tcG9uZW50cy9MYXlvdXRcIlxuaW1wb3J0IFBvc3QsIHsgUG9zdFByb3BzIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvUG9zdFwiXG5cbnR5cGUgUHJvcHMgPSB7XG4gIGRyYWZ0czogUG9zdFByb3BzW11cbn1cblxuY29uc3QgRHJhZnRzOiBSZWFjdC5GQzxQcm9wcz4gPSAocHJvcHMpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYWdlXCI+XG4gICAgICAgIDxoMT5EcmFmdHM8L2gxPlxuICAgICAgICA8bWFpbj5cbiAgICAgICAgICB7cHJvcHMuZHJhZnRzLm1hcCgocG9zdCkgPT4gKFxuICAgICAgICAgICAgPGRpdiBrZXk9e3Bvc3QuaWR9IGNsYXNzTmFtZT1cInBvc3RcIj5cbiAgICAgICAgICAgICAgPFBvc3QgcG9zdD17cG9zdH0gLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICkpfVxuICAgICAgICA8L21haW4+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLnBvc3Qge1xuICAgICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgICAgIHRyYW5zaXRpb246IGJveC1zaGFkb3cgMC4xcyBlYXNlLWluO1xuICAgICAgICB9XG5cbiAgICAgICAgLnBvc3Q6aG92ZXIge1xuICAgICAgICAgIGJveC1zaGFkb3c6IDFweCAxcHggM3B4ICNhYWE7XG4gICAgICAgIH1cblxuICAgICAgICAucG9zdCArIC5wb3N0IHtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAycmVtO1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9MYXlvdXQ+XG4gIClcbn1cblxuZXhwb3J0IGNvbnN0IGdldFNlcnZlclNpZGVQcm9wczogR2V0U2VydmVyU2lkZVByb3BzID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvZHJhZnRzXCIpXG4gIGNvbnN0IGRyYWZ0cyA9IGF3YWl0IHJlcy5qc29uKClcbiAgcmV0dXJuIHtcbiAgICBwcm9wczogeyBkcmFmdHMgfSxcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBEcmFmdHNcbiJdfQ== */\\n/*@ sourceURL=/Users/yu.yagishita/.ghq/github.com/yu-yagishita/nextjs-prisma-sample/pages/drafts.tsx */\"\n    }, void 0, false, void 0, undefined)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 12,\n    columnNumber: 5\n  }, undefined);\n};\n\nconst getServerSideProps = async () => {\n  const res = await fetch(\"http://localhost:3000/api/drafts\");\n  const drafts = await res.json();\n  return {\n    props: {\n      drafts\n    }\n  };\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Drafts);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9oZWxsby1uZXh0Ly4vcGFnZXMvZHJhZnRzLnRzeD8yODE2Il0sIm5hbWVzIjpbIkRyYWZ0cyIsInByb3BzIiwiZHJhZnRzIiwibWFwIiwicG9zdCIsImlkIiwiZ2V0U2VydmVyU2lkZVByb3BzIiwicmVzIiwiZmV0Y2giLCJqc29uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBQ0E7O0FBTUEsTUFBTUEsTUFBdUIsR0FBSUMsS0FBRCxJQUFXO0FBQ3pDLHNCQUNFLDhEQUFDLHVEQUFEO0FBQUEsNEJBQ0U7QUFBQSwwQ0FBZSxNQUFmO0FBQUEsOEJBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixlQUVFO0FBQUE7QUFBQSxrQkFDR0EsS0FBSyxDQUFDQyxNQUFOLENBQWFDLEdBQWIsQ0FBa0JDLElBQUQsaUJBQ2hCO0FBQUEsOENBQTZCLE1BQTdCO0FBQUEsaUNBQ0UsOERBQUMscURBQUQ7QUFBTSxnQkFBSSxFQUFFQTtBQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERixXQUFVQSxJQUFJLENBQUNDLEVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFERDtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGO0FBNEJELENBN0JEOztBQStCTyxNQUFNQyxrQkFBc0MsR0FBRyxZQUFZO0FBQ2hFLFFBQU1DLEdBQUcsR0FBRyxNQUFNQyxLQUFLLENBQUMsa0NBQUQsQ0FBdkI7QUFDQSxRQUFNTixNQUFNLEdBQUcsTUFBTUssR0FBRyxDQUFDRSxJQUFKLEVBQXJCO0FBQ0EsU0FBTztBQUNMUixTQUFLLEVBQUU7QUFBRUM7QUFBRjtBQURGLEdBQVA7QUFHRCxDQU5NO0FBUVAsK0RBQWVGLE1BQWYiLCJmaWxlIjoiLi9wYWdlcy9kcmFmdHMudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgeyBHZXRTZXJ2ZXJTaWRlUHJvcHMgfSBmcm9tIFwibmV4dFwiXG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi9jb21wb25lbnRzL0xheW91dFwiXG5pbXBvcnQgUG9zdCwgeyBQb3N0UHJvcHMgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9Qb3N0XCJcblxudHlwZSBQcm9wcyA9IHtcbiAgZHJhZnRzOiBQb3N0UHJvcHNbXVxufVxuXG5jb25zdCBEcmFmdHM6IFJlYWN0LkZDPFByb3BzPiA9IChwcm9wcykgPT4ge1xuICByZXR1cm4gKFxuICAgIDxMYXlvdXQ+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhZ2VcIj5cbiAgICAgICAgPGgxPkRyYWZ0czwvaDE+XG4gICAgICAgIDxtYWluPlxuICAgICAgICAgIHtwcm9wcy5kcmFmdHMubWFwKChwb3N0KSA9PiAoXG4gICAgICAgICAgICA8ZGl2IGtleT17cG9zdC5pZH0gY2xhc3NOYW1lPVwicG9zdFwiPlxuICAgICAgICAgICAgICA8UG9zdCBwb3N0PXtwb3N0fSAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvbWFpbj5cbiAgICAgIDwvZGl2PlxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAucG9zdCB7XG4gICAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgICAgICAgdHJhbnNpdGlvbjogYm94LXNoYWRvdyAwLjFzIGVhc2UtaW47XG4gICAgICAgIH1cblxuICAgICAgICAucG9zdDpob3ZlciB7XG4gICAgICAgICAgYm94LXNoYWRvdzogMXB4IDFweCAzcHggI2FhYTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5wb3N0ICsgLnBvc3Qge1xuICAgICAgICAgIG1hcmdpbi10b3A6IDJyZW07XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L0xheW91dD5cbiAgKVxufVxuXG5leHBvcnQgY29uc3QgZ2V0U2VydmVyU2lkZVByb3BzOiBHZXRTZXJ2ZXJTaWRlUHJvcHMgPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKFwiaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS9kcmFmdHNcIilcbiAgY29uc3QgZHJhZnRzID0gYXdhaXQgcmVzLmpzb24oKVxuICByZXR1cm4ge1xuICAgIHByb3BzOiB7IGRyYWZ0cyB9LFxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IERyYWZ0c1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/drafts.tsx\n");

/***/ }),

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router-context.js");;

/***/ }),

/***/ "../next-server/lib/router/utils/get-asset-path-from-route":
/*!**************************************************************************************!*\
  !*** external "next/dist/next-server/lib/router/utils/get-asset-path-from-route.js" ***!
  \**************************************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");;

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/router");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-is");;

/***/ }),

/***/ "react-markdown":
/*!*********************************!*\
  !*** external "react-markdown" ***!
  \*********************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-markdown");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/***/ (function(module) {

"use strict";
module.exports = require("styled-jsx/style");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, ["vendors-node_modules_next_link_js","components_Layout_tsx"], function() { return __webpack_exec__("./pages/drafts.tsx"); });
module.exports = __webpack_exports__;

})();