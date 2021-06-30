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
exports.id = "pages/create";
exports.ids = ["pages/create"];
exports.modules = {

/***/ "./pages/create.tsx":
/*!**************************!*\
  !*** ./pages/create.tsx ***!
  \**************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ \"styled-jsx/style\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Layout */ \"./components/Layout.tsx\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _jsxFileName = \"/Users/yu.yagishita/.ghq/github.com/yu-yagishita/nextjs-prisma-sample/pages/create.tsx\";\n\n\n\n\n\nconst Draft = () => {\n  const {\n    0: title,\n    1: setTitle\n  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)('');\n  const {\n    0: content,\n    1: setContent\n  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)('');\n  const {\n    0: authorEmail,\n    1: setAuthorEmail\n  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)('');\n\n  const submitData = async e => {\n    e.preventDefault();\n\n    try {\n      const body = {\n        title,\n        content,\n        authorEmail\n      };\n      await fetch(`http://localhost:3000/api/post`, {\n        method: 'POST',\n        headers: {\n          'Content-Type': 'application/json'\n        },\n        body: JSON.stringify(body)\n      });\n      await next_router__WEBPACK_IMPORTED_MODULE_4___default().push('/drafts');\n    } catch (error) {\n      console.error(error);\n    }\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_3__.default, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: \"jsx-2644876827\",\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n        onSubmit: submitData,\n        className: \"jsx-2644876827\",\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n          className: \"jsx-2644876827\",\n          children: \"Create Draft\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 30,\n          columnNumber: 11\n        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n          autoFocus: true,\n          onChange: e => setTitle(e.target.value),\n          placeholder: \"Title\",\n          type: \"text\",\n          value: title,\n          className: \"jsx-2644876827\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 31,\n          columnNumber: 11\n        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n          onChange: e => setAuthorEmail(e.target.value),\n          placeholder: \"Author (email address)\",\n          type: \"text\",\n          value: authorEmail,\n          className: \"jsx-2644876827\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 38,\n          columnNumber: 11\n        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n          cols: 50,\n          onChange: e => setContent(e.target.value),\n          placeholder: \"Content\",\n          rows: 8,\n          value: content,\n          className: \"jsx-2644876827\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 44,\n          columnNumber: 11\n        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n          disabled: !content || !title || !authorEmail,\n          type: \"submit\",\n          value: \"Create\",\n          className: \"jsx-2644876827\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 51,\n          columnNumber: 11\n        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n          href: \"#\",\n          onClick: () => next_router__WEBPACK_IMPORTED_MODULE_4___default().push('/'),\n          className: \"jsx-2644876827\" + \" \" + \"back\",\n          children: \"or Cancel\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 56,\n          columnNumber: 11\n        }, undefined)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 28,\n        columnNumber: 9\n      }, undefined)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {\n      id: \"2644876827\",\n      children: \".page.jsx-2644876827{background:white;padding:3rem;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}input[type='text'].jsx-2644876827,textarea.jsx-2644876827{width:100%;padding:0.5rem;margin:0.5rem 0;border-radius:0.25rem;border:0.125rem solid rgba(0,0,0,0.2);}input[type='submit'].jsx-2644876827{background:#ececec;border:0;padding:1rem 2rem;}.back.jsx-2644876827{margin-left:1rem;}\\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy95dS55YWdpc2hpdGEvLmdocS9naXRodWIuY29tL3l1LXlhZ2lzaGl0YS9uZXh0anMtcHJpc21hLXNhbXBsZS9wYWdlcy9jcmVhdGUudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTREa0IsQUFHNEIsQUFTTixBQVFRLEFBTUYsV0FiRixNQVRGLEFBdUJmLEVBTlcsT0FQTyxFQVFFLEVBakJMLFlBVVMsSUFReEIsa0JBUDJDLHNDQUMzQyxFQVh5QixtR0FDSiw2RkFDckIiLCJmaWxlIjoiL1VzZXJzL3l1LnlhZ2lzaGl0YS8uZ2hxL2dpdGh1Yi5jb20veXUteWFnaXNoaXRhL25leHRqcy1wcmlzbWEtc2FtcGxlL3BhZ2VzL2NyZWF0ZS50c3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQnXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJ1xuXG5jb25zdCBEcmFmdDogUmVhY3QuRkMgPSAoKSA9PiB7XG4gIGNvbnN0IFt0aXRsZSwgc2V0VGl0bGVdID0gdXNlU3RhdGUoJycpXG4gIGNvbnN0IFtjb250ZW50LCBzZXRDb250ZW50XSA9IHVzZVN0YXRlKCcnKVxuICBjb25zdCBbYXV0aG9yRW1haWwsIHNldEF1dGhvckVtYWlsXSA9IHVzZVN0YXRlKCcnKVxuXG4gIGNvbnN0IHN1Ym1pdERhdGEgPSBhc3luYyAoZTogUmVhY3QuU3ludGhldGljRXZlbnQpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICB0cnkge1xuICAgICAgY29uc3QgYm9keSA9IHsgdGl0bGUsIGNvbnRlbnQsIGF1dGhvckVtYWlsIH1cbiAgICAgIGF3YWl0IGZldGNoKGBodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpL3Bvc3RgLCB7XG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBoZWFkZXJzOiB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSxcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoYm9keSksXG4gICAgICB9KVxuICAgICAgYXdhaXQgUm91dGVyLnB1c2goJy9kcmFmdHMnKVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKGVycm9yKVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPExheW91dD5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxmb3JtXG4gICAgICAgICAgb25TdWJtaXQ9e3N1Ym1pdERhdGF9PlxuICAgICAgICAgIDxoMT5DcmVhdGUgRHJhZnQ8L2gxPlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgYXV0b0ZvY3VzXG4gICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiBzZXRUaXRsZShlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlRpdGxlXCJcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgIHZhbHVlPXt0aXRsZX1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4gc2V0QXV0aG9yRW1haWwoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJBdXRob3IgKGVtYWlsIGFkZHJlc3MpXCJcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgIHZhbHVlPXthdXRob3JFbWFpbH1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDx0ZXh0YXJlYVxuICAgICAgICAgICAgY29scz17NTB9XG4gICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiBzZXRDb250ZW50KGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQ29udGVudFwiXG4gICAgICAgICAgICByb3dzPXs4fVxuICAgICAgICAgICAgdmFsdWU9e2NvbnRlbnR9XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIGRpc2FibGVkPXshY29udGVudCB8fCAhdGl0bGUgfHwgIWF1dGhvckVtYWlsfVxuICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXG4gICAgICAgICAgICB2YWx1ZT1cIkNyZWF0ZVwiXG4gICAgICAgICAgLz5cbiAgICAgICAgICA8YSBjbGFzc05hbWU9XCJiYWNrXCIgaHJlZj1cIiNcIiBvbkNsaWNrPXsoKSA9PiBSb3V0ZXIucHVzaCgnLycpfT5cbiAgICAgICAgICAgIG9yIENhbmNlbFxuICAgICAgICAgIDwvYT5cbiAgICAgICAgPC9mb3JtPlxuICAgICAgPC9kaXY+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC5wYWdlIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAgICAgICBwYWRkaW5nOiAzcmVtO1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlucHV0W3R5cGU9J3RleHQnXSxcbiAgICAgICAgdGV4dGFyZWEge1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIHBhZGRpbmc6IDAuNXJlbTtcbiAgICAgICAgICBtYXJnaW46IDAuNXJlbSAwO1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XG4gICAgICAgICAgYm9yZGVyOiAwLjEyNXJlbSBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMik7XG4gICAgICAgIH1cblxuICAgICAgICBpbnB1dFt0eXBlPSdzdWJtaXQnXSB7XG4gICAgICAgICAgYmFja2dyb3VuZDogI2VjZWNlYztcbiAgICAgICAgICBib3JkZXI6IDA7XG4gICAgICAgICAgcGFkZGluZzogMXJlbSAycmVtO1xuICAgICAgICB9XG5cbiAgICAgICAgLmJhY2sge1xuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxcmVtO1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9MYXlvdXQ+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgRHJhZnQ7XG4iXX0= */\\n/*@ sourceURL=/Users/yu.yagishita/.ghq/github.com/yu-yagishita/nextjs-prisma-sample/pages/create.tsx */\"\n    }, void 0, false, void 0, undefined)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 26,\n    columnNumber: 5\n  }, undefined);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Draft);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9oZWxsby1uZXh0Ly4vcGFnZXMvY3JlYXRlLnRzeD9mMzU1Il0sIm5hbWVzIjpbIkRyYWZ0IiwidGl0bGUiLCJzZXRUaXRsZSIsInVzZVN0YXRlIiwiY29udGVudCIsInNldENvbnRlbnQiLCJhdXRob3JFbWFpbCIsInNldEF1dGhvckVtYWlsIiwic3VibWl0RGF0YSIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImJvZHkiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJKU09OIiwic3RyaW5naWZ5IiwiUm91dGVyIiwiZXJyb3IiLCJjb25zb2xlIiwidGFyZ2V0IiwidmFsdWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTUEsS0FBZSxHQUFHLE1BQU07QUFDNUIsUUFBTTtBQUFBLE9BQUNDLEtBQUQ7QUFBQSxPQUFRQztBQUFSLE1BQW9CQywrQ0FBUSxDQUFDLEVBQUQsQ0FBbEM7QUFDQSxRQUFNO0FBQUEsT0FBQ0MsT0FBRDtBQUFBLE9BQVVDO0FBQVYsTUFBd0JGLCtDQUFRLENBQUMsRUFBRCxDQUF0QztBQUNBLFFBQU07QUFBQSxPQUFDRyxXQUFEO0FBQUEsT0FBY0M7QUFBZCxNQUFnQ0osK0NBQVEsQ0FBQyxFQUFELENBQTlDOztBQUVBLFFBQU1LLFVBQVUsR0FBRyxNQUFPQyxDQUFQLElBQW1DO0FBQ3BEQSxLQUFDLENBQUNDLGNBQUY7O0FBQ0EsUUFBSTtBQUNGLFlBQU1DLElBQUksR0FBRztBQUFFVixhQUFGO0FBQVNHLGVBQVQ7QUFBa0JFO0FBQWxCLE9BQWI7QUFDQSxZQUFNTSxLQUFLLENBQUUsZ0NBQUYsRUFBbUM7QUFDNUNDLGNBQU0sRUFBRSxNQURvQztBQUU1Q0MsZUFBTyxFQUFFO0FBQUUsMEJBQWdCO0FBQWxCLFNBRm1DO0FBRzVDSCxZQUFJLEVBQUVJLElBQUksQ0FBQ0MsU0FBTCxDQUFlTCxJQUFmO0FBSHNDLE9BQW5DLENBQVg7QUFLQSxZQUFNTSx1REFBQSxDQUFZLFNBQVosQ0FBTjtBQUNELEtBUkQsQ0FRRSxPQUFPQyxLQUFQLEVBQWM7QUFDZEMsYUFBTyxDQUFDRCxLQUFSLENBQWNBLEtBQWQ7QUFDRDtBQUNGLEdBYkQ7O0FBZUEsc0JBQ0UsOERBQUMsdURBQUQ7QUFBQSw0QkFDRTtBQUFBO0FBQUEsNkJBQ0U7QUFDRSxnQkFBUSxFQUFFVixVQURaO0FBQUE7QUFBQSxnQ0FFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUZGLGVBR0U7QUFDRSxtQkFBUyxNQURYO0FBRUUsa0JBQVEsRUFBRUMsQ0FBQyxJQUFJUCxRQUFRLENBQUNPLENBQUMsQ0FBQ1csTUFBRixDQUFTQyxLQUFWLENBRnpCO0FBR0UscUJBQVcsRUFBQyxPQUhkO0FBSUUsY0FBSSxFQUFDLE1BSlA7QUFLRSxlQUFLLEVBQUVwQixLQUxUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUhGLGVBVUU7QUFDRSxrQkFBUSxFQUFFUSxDQUFDLElBQUlGLGNBQWMsQ0FBQ0UsQ0FBQyxDQUFDVyxNQUFGLENBQVNDLEtBQVYsQ0FEL0I7QUFFRSxxQkFBVyxFQUFDLHdCQUZkO0FBR0UsY0FBSSxFQUFDLE1BSFA7QUFJRSxlQUFLLEVBQUVmLFdBSlQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBVkYsZUFnQkU7QUFDRSxjQUFJLEVBQUUsRUFEUjtBQUVFLGtCQUFRLEVBQUVHLENBQUMsSUFBSUosVUFBVSxDQUFDSSxDQUFDLENBQUNXLE1BQUYsQ0FBU0MsS0FBVixDQUYzQjtBQUdFLHFCQUFXLEVBQUMsU0FIZDtBQUlFLGNBQUksRUFBRSxDQUpSO0FBS0UsZUFBSyxFQUFFakIsT0FMVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFoQkYsZUF1QkU7QUFDRSxrQkFBUSxFQUFFLENBQUNBLE9BQUQsSUFBWSxDQUFDSCxLQUFiLElBQXNCLENBQUNLLFdBRG5DO0FBRUUsY0FBSSxFQUFDLFFBRlA7QUFHRSxlQUFLLEVBQUMsUUFIUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkF2QkYsZUE0QkU7QUFBb0IsY0FBSSxFQUFDLEdBQXpCO0FBQTZCLGlCQUFPLEVBQUUsTUFBTVcsdURBQUEsQ0FBWSxHQUFaLENBQTVDO0FBQUEsOENBQWEsTUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkE1QkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERjtBQWtFRCxDQXRGRDs7QUF3RkEsK0RBQWVqQixLQUFmIiwiZmlsZSI6Ii4vcGFnZXMvY3JlYXRlLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL0xheW91dCdcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInXG5cbmNvbnN0IERyYWZ0OiBSZWFjdC5GQyA9ICgpID0+IHtcbiAgY29uc3QgW3RpdGxlLCBzZXRUaXRsZV0gPSB1c2VTdGF0ZSgnJylcbiAgY29uc3QgW2NvbnRlbnQsIHNldENvbnRlbnRdID0gdXNlU3RhdGUoJycpXG4gIGNvbnN0IFthdXRob3JFbWFpbCwgc2V0QXV0aG9yRW1haWxdID0gdXNlU3RhdGUoJycpXG5cbiAgY29uc3Qgc3VibWl0RGF0YSA9IGFzeW5jIChlOiBSZWFjdC5TeW50aGV0aWNFdmVudCkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgIHRyeSB7XG4gICAgICBjb25zdCBib2R5ID0geyB0aXRsZSwgY29udGVudCwgYXV0aG9yRW1haWwgfVxuICAgICAgYXdhaXQgZmV0Y2goYGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvcG9zdGAsIHtcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGhlYWRlcnM6IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9LFxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShib2R5KSxcbiAgICAgIH0pXG4gICAgICBhd2FpdCBSb3V0ZXIucHVzaCgnL2RyYWZ0cycpXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0PlxuICAgICAgPGRpdj5cbiAgICAgICAgPGZvcm1cbiAgICAgICAgICBvblN1Ym1pdD17c3VibWl0RGF0YX0+XG4gICAgICAgICAgPGgxPkNyZWF0ZSBEcmFmdDwvaDE+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICBhdXRvRm9jdXNcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHNldFRpdGxlKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiVGl0bGVcIlxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgdmFsdWU9e3RpdGxlfVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiBzZXRBdXRob3JFbWFpbChlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkF1dGhvciAoZW1haWwgYWRkcmVzcylcIlxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgdmFsdWU9e2F1dGhvckVtYWlsfVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPHRleHRhcmVhXG4gICAgICAgICAgICBjb2xzPXs1MH1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHNldENvbnRlbnQoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJDb250ZW50XCJcbiAgICAgICAgICAgIHJvd3M9ezh9XG4gICAgICAgICAgICB2YWx1ZT17Y29udGVudH1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgZGlzYWJsZWQ9eyFjb250ZW50IHx8ICF0aXRsZSB8fCAhYXV0aG9yRW1haWx9XG4gICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcbiAgICAgICAgICAgIHZhbHVlPVwiQ3JlYXRlXCJcbiAgICAgICAgICAvPlxuICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImJhY2tcIiBocmVmPVwiI1wiIG9uQ2xpY2s9eygpID0+IFJvdXRlci5wdXNoKCcvJyl9PlxuICAgICAgICAgICAgb3IgQ2FuY2VsXG4gICAgICAgICAgPC9hPlxuICAgICAgICA8L2Zvcm0+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLnBhZ2Uge1xuICAgICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgICAgIHBhZGRpbmc6IDNyZW07XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICB9XG5cbiAgICAgICAgaW5wdXRbdHlwZT0ndGV4dCddLFxuICAgICAgICB0ZXh0YXJlYSB7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgcGFkZGluZzogMC41cmVtO1xuICAgICAgICAgIG1hcmdpbjogMC41cmVtIDA7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcbiAgICAgICAgICBib3JkZXI6IDAuMTI1cmVtIHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlucHV0W3R5cGU9J3N1Ym1pdCddIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjZWNlY2VjO1xuICAgICAgICAgIGJvcmRlcjogMDtcbiAgICAgICAgICBwYWRkaW5nOiAxcmVtIDJyZW07XG4gICAgICAgIH1cblxuICAgICAgICAuYmFjayB7XG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDFyZW07XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L0xheW91dD5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBEcmFmdDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/create.tsx\n");

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
var __webpack_exports__ = __webpack_require__.X(0, ["vendors-node_modules_next_link_js","components_Layout_tsx"], function() { return __webpack_exec__("./pages/create.tsx"); });
module.exports = __webpack_exports__;

})();