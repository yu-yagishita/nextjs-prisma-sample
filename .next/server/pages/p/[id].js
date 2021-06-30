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
exports.id = "pages/p/[id]";
exports.ids = ["pages/p/[id]"];
exports.modules = {

/***/ "./pages/p/[id].tsx":
/*!**************************!*\
  !*** ./pages/p/[id].tsx ***!
  \**************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getServerSideProps\": function() { return /* binding */ getServerSideProps; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ \"styled-jsx/style\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-markdown */ \"react-markdown\");\n/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_markdown__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/Layout */ \"./components/Layout.tsx\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);\n\nvar _jsxFileName = \"/Users/yu.yagishita/.ghq/github.com/yu-yagishita/nextjs-prisma-sample/pages/p/[id].tsx\";\n\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n\nasync function publish(id) {\n  await fetch(`http://localhost:3000/api/publish/${id}`, {\n    method: 'PUT'\n  });\n  await next_router__WEBPACK_IMPORTED_MODULE_5___default().push('/');\n}\n\nasync function destroy(id) {\n  await fetch(`http://localhost:3000/api/post/${id}`, {\n    method: 'DELETE'\n  });\n  await next_router__WEBPACK_IMPORTED_MODULE_5___default().push('/');\n}\n\nconst Post = props => {\n  var _props$author;\n\n  let title = props.title;\n\n  if (!props.published) {\n    title = `${title} (Draft)`;\n  }\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_4__.default, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: \"jsx-3440979688\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n        className: \"jsx-3440979688\",\n        children: title\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 31,\n        columnNumber: 9\n      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n        className: \"jsx-3440979688\",\n        children: [\"By \", (props === null || props === void 0 ? void 0 : (_props$author = props.author) === null || _props$author === void 0 ? void 0 : _props$author.name) || 'Unknown author']\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 32,\n        columnNumber: 9\n      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_markdown__WEBPACK_IMPORTED_MODULE_3___default()), {\n        source: props.content\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 33,\n        columnNumber: 9\n      }, undefined), !props.published && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n        onClick: () => publish(props.id),\n        className: \"jsx-3440979688\",\n        children: \"Publish\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 35,\n        columnNumber: 11\n      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n        onClick: () => destroy(props.id),\n        className: \"jsx-3440979688\",\n        children: \"Delete\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 39,\n        columnNumber: 9\n      }, undefined)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {\n      id: \"3440979688\",\n      children: \".page.jsx-3440979688{background:white;padding:2rem;}.actions.jsx-3440979688{margin-top:2rem;}button.jsx-3440979688{background:#ececec;border:0;border-radius:0.125rem;padding:1rem 2rem;}button.jsx-3440979688+button.jsx-3440979688{margin-left:1rem;}\\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy95dS55YWdpc2hpdGEvLmdocS9naXRodWIuY29tL3l1LXlhZ2lzaGl0YS9uZXh0anMtcHJpc21hLXNhbXBsZS9wYWdlcy9wL1tpZF0udHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTBDa0IsQUFHNEIsQUFLRCxBQUlHLEFBT0YsZ0JBVm5CLENBTGUsQUFnQmYsRUFQVyxTQUNjLEVBVHpCLHFCQVVvQixrQkFDcEIiLCJmaWxlIjoiL1VzZXJzL3l1LnlhZ2lzaGl0YS8uZ2hxL2dpdGh1Yi5jb20veXUteWFnaXNoaXRhL25leHRqcy1wcmlzbWEtc2FtcGxlL3BhZ2VzL3AvW2lkXS50c3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBHZXRTZXJ2ZXJTaWRlUHJvcHMgfSBmcm9tICduZXh0J1xuaW1wb3J0IFJlYWN0TWFya2Rvd24gZnJvbSAncmVhY3QtbWFya2Rvd24nXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvTGF5b3V0J1xuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcidcbmltcG9ydCB7IFBvc3RQcm9wcyB9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvUG9zdCdcblxuYXN5bmMgZnVuY3Rpb24gcHVibGlzaChpZDogbnVtYmVyKTogUHJvbWlzZTx2b2lkPiB7XG4gIGF3YWl0IGZldGNoKGBodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpL3B1Ymxpc2gvJHtpZH1gLCB7XG4gICAgbWV0aG9kOiAnUFVUJyxcbiAgfSlcbiAgYXdhaXQgUm91dGVyLnB1c2goJy8nKVxufVxuXG5hc3luYyBmdW5jdGlvbiBkZXN0cm95KGlkOiBudW1iZXIpOiBQcm9taXNlPHZvaWQ+IHtcbiAgYXdhaXQgZmV0Y2goYGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvcG9zdC8ke2lkfWAsIHtcbiAgICBtZXRob2Q6ICdERUxFVEUnLFxuICB9KVxuICBhd2FpdCBSb3V0ZXIucHVzaCgnLycpXG59XG5cbmNvbnN0IFBvc3Q6IFJlYWN0LkZDPFBvc3RQcm9wcz4gPSBwcm9wcyA9PiB7XG4gIGxldCB0aXRsZSA9IHByb3BzLnRpdGxlXG4gIGlmICghcHJvcHMucHVibGlzaGVkKSB7XG4gICAgdGl0bGUgPSBgJHt0aXRsZX0gKERyYWZ0KWBcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPExheW91dD5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxoMj57dGl0bGV9PC9oMj5cbiAgICAgICAgPHA+Qnkge3Byb3BzPy5hdXRob3I/Lm5hbWUgfHwgJ1Vua25vd24gYXV0aG9yJ308L3A+XG4gICAgICAgIDxSZWFjdE1hcmtkb3duIHNvdXJjZT17cHJvcHMuY29udGVudH0gLz5cbiAgICAgICAgeyFwcm9wcy5wdWJsaXNoZWQgJiYgKFxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gcHVibGlzaChwcm9wcy5pZCl9PlxuICAgICAgICAgICAgUHVibGlzaFxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICApfVxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IGRlc3Ryb3kocHJvcHMuaWQpfT5cbiAgICAgICAgICBEZWxldGVcbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLnBhZ2Uge1xuICAgICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgICAgIHBhZGRpbmc6IDJyZW07XG4gICAgICAgIH1cblxuICAgICAgICAuYWN0aW9ucyB7XG4gICAgICAgICAgbWFyZ2luLXRvcDogMnJlbTtcbiAgICAgICAgfVxuXG4gICAgICAgIGJ1dHRvbiB7XG4gICAgICAgICAgYmFja2dyb3VuZDogI2VjZWNlYztcbiAgICAgICAgICBib3JkZXI6IDA7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMC4xMjVyZW07XG4gICAgICAgICAgcGFkZGluZzogMXJlbSAycmVtO1xuICAgICAgICB9XG5cbiAgICAgICAgYnV0dG9uICsgYnV0dG9uIHtcbiAgICAgICAgICBtYXJnaW4tbGVmdDogMXJlbTtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvTGF5b3V0PlxuICApXG59XG5cbmV4cG9ydCBjb25zdCBnZXRTZXJ2ZXJTaWRlUHJvcHM6IEdldFNlcnZlclNpZGVQcm9wcyA9IGFzeW5jIChjb250ZXh0KSA9PiB7XG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGBodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpL3Bvc3QvJHtjb250ZXh0LnBhcmFtcy5pZH1gKVxuICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKVxuICByZXR1cm4geyBwcm9wczogeyAuLi5kYXRhIH0gfVxufVxuXG5leHBvcnQgZGVmYXVsdCBQb3N0XG4iXX0= */\\n/*@ sourceURL=/Users/yu.yagishita/.ghq/github.com/yu-yagishita/nextjs-prisma-sample/pages/p/[id].tsx */\"\n    }, void 0, false, void 0, undefined)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 29,\n    columnNumber: 5\n  }, undefined);\n};\n\nconst getServerSideProps = async context => {\n  const res = await fetch(`http://localhost:3000/api/post/${context.params.id}`);\n  const data = await res.json();\n  return {\n    props: _objectSpread({}, data)\n  };\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Post);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9oZWxsby1uZXh0Ly4vcGFnZXMvcC9baWRdLnRzeD9kNmZkIl0sIm5hbWVzIjpbInB1Ymxpc2giLCJpZCIsImZldGNoIiwibWV0aG9kIiwiUm91dGVyIiwiZGVzdHJveSIsIlBvc3QiLCJwcm9wcyIsInRpdGxlIiwicHVibGlzaGVkIiwiYXV0aG9yIiwibmFtZSIsImNvbnRlbnQiLCJnZXRTZXJ2ZXJTaWRlUHJvcHMiLCJjb250ZXh0IiwicmVzIiwicGFyYW1zIiwiZGF0YSIsImpzb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBQ0E7QUFDQTs7QUFHQSxlQUFlQSxPQUFmLENBQXVCQyxFQUF2QixFQUFrRDtBQUNoRCxRQUFNQyxLQUFLLENBQUUscUNBQW9DRCxFQUFHLEVBQXpDLEVBQTRDO0FBQ3JERSxVQUFNLEVBQUU7QUFENkMsR0FBNUMsQ0FBWDtBQUdBLFFBQU1DLHVEQUFBLENBQVksR0FBWixDQUFOO0FBQ0Q7O0FBRUQsZUFBZUMsT0FBZixDQUF1QkosRUFBdkIsRUFBa0Q7QUFDaEQsUUFBTUMsS0FBSyxDQUFFLGtDQUFpQ0QsRUFBRyxFQUF0QyxFQUF5QztBQUNsREUsVUFBTSxFQUFFO0FBRDBDLEdBQXpDLENBQVg7QUFHQSxRQUFNQyx1REFBQSxDQUFZLEdBQVosQ0FBTjtBQUNEOztBQUVELE1BQU1FLElBQXlCLEdBQUdDLEtBQUssSUFBSTtBQUFBOztBQUN6QyxNQUFJQyxLQUFLLEdBQUdELEtBQUssQ0FBQ0MsS0FBbEI7O0FBQ0EsTUFBSSxDQUFDRCxLQUFLLENBQUNFLFNBQVgsRUFBc0I7QUFDcEJELFNBQUssR0FBSSxHQUFFQSxLQUFNLFVBQWpCO0FBQ0Q7O0FBRUQsc0JBQ0UsOERBQUMsdURBQUQ7QUFBQSw0QkFDRTtBQUFBO0FBQUEsOEJBQ0U7QUFBQTtBQUFBLGtCQUFLQTtBQUFMO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsZUFFRTtBQUFBO0FBQUEsMEJBQU8sQ0FBQUQsS0FBSyxTQUFMLElBQUFBLEtBQUssV0FBTCw2QkFBQUEsS0FBSyxDQUFFRyxNQUFQLGdFQUFlQyxJQUFmLEtBQXVCLGdCQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRkYsZUFHRSw4REFBQyx1REFBRDtBQUFlLGNBQU0sRUFBRUosS0FBSyxDQUFDSztBQUE3QjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUhGLEVBSUcsQ0FBQ0wsS0FBSyxDQUFDRSxTQUFQLGlCQUNDO0FBQVEsZUFBTyxFQUFFLE1BQU1ULE9BQU8sQ0FBQ08sS0FBSyxDQUFDTixFQUFQLENBQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBTEosZUFTRTtBQUFRLGVBQU8sRUFBRSxNQUFNSSxPQUFPLENBQUNFLEtBQUssQ0FBQ04sRUFBUCxDQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQVRGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERjtBQXNDRCxDQTVDRDs7QUE4Q08sTUFBTVksa0JBQXNDLEdBQUcsTUFBT0MsT0FBUCxJQUFtQjtBQUN2RSxRQUFNQyxHQUFHLEdBQUcsTUFBTWIsS0FBSyxDQUFFLGtDQUFpQ1ksT0FBTyxDQUFDRSxNQUFSLENBQWVmLEVBQUcsRUFBckQsQ0FBdkI7QUFDQSxRQUFNZ0IsSUFBSSxHQUFHLE1BQU1GLEdBQUcsQ0FBQ0csSUFBSixFQUFuQjtBQUNBLFNBQU87QUFBRVgsU0FBSyxvQkFBT1UsSUFBUDtBQUFQLEdBQVA7QUFDRCxDQUpNO0FBTVAsK0RBQWVYLElBQWYiLCJmaWxlIjoiLi9wYWdlcy9wL1tpZF0udHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgR2V0U2VydmVyU2lkZVByb3BzIH0gZnJvbSAnbmV4dCdcbmltcG9ydCBSZWFjdE1hcmtkb3duIGZyb20gJ3JlYWN0LW1hcmtkb3duJ1xuaW1wb3J0IExheW91dCBmcm9tICcuLi8uLi9jb21wb25lbnRzL0xheW91dCdcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInXG5pbXBvcnQgeyBQb3N0UHJvcHMgfSBmcm9tICcuLi8uLi9jb21wb25lbnRzL1Bvc3QnXG5cbmFzeW5jIGZ1bmN0aW9uIHB1Ymxpc2goaWQ6IG51bWJlcik6IFByb21pc2U8dm9pZD4ge1xuICBhd2FpdCBmZXRjaChgaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS9wdWJsaXNoLyR7aWR9YCwge1xuICAgIG1ldGhvZDogJ1BVVCcsXG4gIH0pXG4gIGF3YWl0IFJvdXRlci5wdXNoKCcvJylcbn1cblxuYXN5bmMgZnVuY3Rpb24gZGVzdHJveShpZDogbnVtYmVyKTogUHJvbWlzZTx2b2lkPiB7XG4gIGF3YWl0IGZldGNoKGBodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpL3Bvc3QvJHtpZH1gLCB7XG4gICAgbWV0aG9kOiAnREVMRVRFJyxcbiAgfSlcbiAgYXdhaXQgUm91dGVyLnB1c2goJy8nKVxufVxuXG5jb25zdCBQb3N0OiBSZWFjdC5GQzxQb3N0UHJvcHM+ID0gcHJvcHMgPT4ge1xuICBsZXQgdGl0bGUgPSBwcm9wcy50aXRsZVxuICBpZiAoIXByb3BzLnB1Ymxpc2hlZCkge1xuICAgIHRpdGxlID0gYCR7dGl0bGV9IChEcmFmdClgXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxMYXlvdXQ+XG4gICAgICA8ZGl2PlxuICAgICAgICA8aDI+e3RpdGxlfTwvaDI+XG4gICAgICAgIDxwPkJ5IHtwcm9wcz8uYXV0aG9yPy5uYW1lIHx8ICdVbmtub3duIGF1dGhvcid9PC9wPlxuICAgICAgICA8UmVhY3RNYXJrZG93biBzb3VyY2U9e3Byb3BzLmNvbnRlbnR9IC8+XG4gICAgICAgIHshcHJvcHMucHVibGlzaGVkICYmIChcbiAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHB1Ymxpc2gocHJvcHMuaWQpfT5cbiAgICAgICAgICAgIFB1Ymxpc2hcbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgKX1cbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBkZXN0cm95KHByb3BzLmlkKX0+XG4gICAgICAgICAgRGVsZXRlXG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC5wYWdlIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAgICAgICBwYWRkaW5nOiAycmVtO1xuICAgICAgICB9XG5cbiAgICAgICAgLmFjdGlvbnMge1xuICAgICAgICAgIG1hcmdpbi10b3A6IDJyZW07XG4gICAgICAgIH1cblxuICAgICAgICBidXR0b24ge1xuICAgICAgICAgIGJhY2tncm91bmQ6ICNlY2VjZWM7XG4gICAgICAgICAgYm9yZGVyOiAwO1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDAuMTI1cmVtO1xuICAgICAgICAgIHBhZGRpbmc6IDFyZW0gMnJlbTtcbiAgICAgICAgfVxuXG4gICAgICAgIGJ1dHRvbiArIGJ1dHRvbiB7XG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDFyZW07XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L0xheW91dD5cbiAgKVxufVxuXG5leHBvcnQgY29uc3QgZ2V0U2VydmVyU2lkZVByb3BzOiBHZXRTZXJ2ZXJTaWRlUHJvcHMgPSBhc3luYyAoY29udGV4dCkgPT4ge1xuICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS9wb3N0LyR7Y29udGV4dC5wYXJhbXMuaWR9YClcbiAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKClcbiAgcmV0dXJuIHsgcHJvcHM6IHsgLi4uZGF0YSB9IH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUG9zdFxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/p/[id].tsx\n");

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
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, ["vendors-node_modules_next_link_js","components_Layout_tsx"], function() { return __webpack_exec__("./pages/p/[id].tsx"); });
module.exports = __webpack_exports__;

})();