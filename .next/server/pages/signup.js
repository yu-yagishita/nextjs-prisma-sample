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
exports.id = "pages/signup";
exports.ids = ["pages/signup"];
exports.modules = {

/***/ "./pages/signup.tsx":
/*!**************************!*\
  !*** ./pages/signup.tsx ***!
  \**************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ \"styled-jsx/style\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Layout */ \"./components/Layout.tsx\");\n\nvar _jsxFileName = \"/Users/yu.yagishita/.ghq/github.com/yu-yagishita/nextjs-prisma-sample/pages/signup.tsx\";\n\n\n\n\n\nconst SignUp = () => {\n  const {\n    0: name,\n    1: setName\n  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)('');\n  const {\n    0: email,\n    1: setEmail\n  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)('');\n\n  const submitData = async e => {\n    e.preventDefault();\n\n    try {\n      const body = {\n        name,\n        email\n      };\n      await fetch(`http://localhost:3000/api/user`, {\n        method: 'POST',\n        headers: {\n          'Content-Type': 'application/json'\n        },\n        body: JSON.stringify(body)\n      });\n      await next_router__WEBPACK_IMPORTED_MODULE_3___default().push('/');\n    } catch (error) {\n      console.error(error);\n    }\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_4__.default, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: \"jsx-3985784167\" + \" \" + \"page\",\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n        onSubmit: submitData,\n        className: \"jsx-3985784167\",\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n          className: \"jsx-3985784167\",\n          children: \"Signup user\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 29,\n          columnNumber: 11\n        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n          autoFocus: true,\n          onChange: e => setName(e.target.value),\n          placeholder: \"Name\",\n          type: \"text\",\n          value: name,\n          className: \"jsx-3985784167\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 30,\n          columnNumber: 11\n        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n          onChange: e => setEmail(e.target.value),\n          placeholder: \"Email address\",\n          type: \"text\",\n          value: email,\n          className: \"jsx-3985784167\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 37,\n          columnNumber: 11\n        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n          disabled: !name || !email,\n          type: \"submit\",\n          value: \"Signup\",\n          className: \"jsx-3985784167\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 43,\n          columnNumber: 11\n        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n          href: \"#\",\n          onClick: () => next_router__WEBPACK_IMPORTED_MODULE_3___default().push('/'),\n          className: \"jsx-3985784167\" + \" \" + \"back\",\n          children: \"or Cancel\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 48,\n          columnNumber: 11\n        }, undefined)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 27,\n        columnNumber: 9\n      }, undefined)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {\n      id: \"3985784167\",\n      children: \".page.jsx-3985784167{background:white;padding:3rem;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}input[type='text'].jsx-3985784167{width:100%;padding:0.5rem;margin:0.5rem 0;border-radius:0.25rem;border:0.125rem solid rgba(0,0,0,0.2);}input[type='submit'].jsx-3985784167{background:#ececec;border:0;padding:1rem 2rem;}.back.jsx-3985784167{margin-left:1rem;}\\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy95dS55YWdpc2hpdGEvLmdocS9naXRodWIuY29tL3l1LXlhZ2lzaGl0YS9uZXh0anMtcHJpc21hLXNhbXBsZS9wYWdlcy9zaWdudXAudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW9Ea0IsQUFHMEIsQUFPTixBQVFRLEFBTUYsV0FiRixNQVBGLEFBcUJmLEVBTlcsT0FQTyxFQVFFLEVBZkwsWUFRUyxJQVF4QixrQkFQMkMsc0NBQzNDLEVBVHlCLG1HQUN6QiIsImZpbGUiOiIvVXNlcnMveXUueWFnaXNoaXRhLy5naHEvZ2l0aHViLmNvbS95dS15YWdpc2hpdGEvbmV4dGpzLXByaXNtYS1zYW1wbGUvcGFnZXMvc2lnbnVwLnRzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcidcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQnXG5cbmNvbnN0IFNpZ25VcDogUmVhY3QuRkMgPSAoKSA9PiB7XG4gIGNvbnN0IFtuYW1lLCBzZXROYW1lXSA9IHVzZVN0YXRlKCcnKVxuICBjb25zdCBbZW1haWwsIHNldEVtYWlsXSA9IHVzZVN0YXRlKCcnKVxuXG4gIGNvbnN0IHN1Ym1pdERhdGEgPSBhc3luYyAoZTogUmVhY3QuU3ludGhldGljRXZlbnQpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICB0cnkge1xuICAgICAgY29uc3QgYm9keSA9IHsgbmFtZSwgZW1haWwgfVxuICAgICAgYXdhaXQgZmV0Y2goYGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvdXNlcmAsIHtcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGhlYWRlcnM6IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9LFxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShib2R5KSxcbiAgICAgIH0pXG4gICAgICBhd2FpdCBSb3V0ZXIucHVzaCgnLycpXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYWdlXCI+XG4gICAgICAgIDxmb3JtXG4gICAgICAgICAgb25TdWJtaXQ9e3N1Ym1pdERhdGF9PlxuICAgICAgICAgIDxoMT5TaWdudXAgdXNlcjwvaDE+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICBhdXRvRm9jdXNcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHNldE5hbWUoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJOYW1lXCJcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgIHZhbHVlPXtuYW1lfVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiBzZXRFbWFpbChlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVtYWlsIGFkZHJlc3NcIlxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgdmFsdWU9e2VtYWlsfVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICBkaXNhYmxlZD17IW5hbWUgfHwgIWVtYWlsfVxuICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXG4gICAgICAgICAgICB2YWx1ZT1cIlNpZ251cFwiXG4gICAgICAgICAgLz5cbiAgICAgICAgICA8YSBjbGFzc05hbWU9XCJiYWNrXCIgaHJlZj1cIiNcIiBvbkNsaWNrPXsoKSA9PiBSb3V0ZXIucHVzaCgnLycpfT5cbiAgICAgICAgICAgIG9yIENhbmNlbFxuICAgICAgICA8L2E+XG4gICAgICAgIDwvZm9ybT5cbiAgICAgIDwvZGl2PlxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgLnBhZ2Uge1xuICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAgICAgcGFkZGluZzogM3JlbTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICB9XG5cbiAgICAgIGlucHV0W3R5cGU9J3RleHQnXSB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBwYWRkaW5nOiAwLjVyZW07XG4gICAgICAgIG1hcmdpbjogMC41cmVtIDA7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XG4gICAgICAgIGJvcmRlcjogMC4xMjVyZW0gc29saWQgcmdiYSgwLCAwLCAwLCAwLjIpO1xuICAgICAgfVxuXG4gICAgICBpbnB1dFt0eXBlPSdzdWJtaXQnXSB7XG4gICAgICAgIGJhY2tncm91bmQ6ICNlY2VjZWM7XG4gICAgICAgIGJvcmRlcjogMDtcbiAgICAgICAgcGFkZGluZzogMXJlbSAycmVtO1xuICAgICAgfVxuXG4gICAgICAuYmFjayB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxcmVtO1xuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgICA8L0xheW91dD5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBTaWduVXAiXX0= */\\n/*@ sourceURL=/Users/yu.yagishita/.ghq/github.com/yu-yagishita/nextjs-prisma-sample/pages/signup.tsx */\"\n    }, void 0, false, void 0, undefined)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 25,\n    columnNumber: 5\n  }, undefined);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (SignUp);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9oZWxsby1uZXh0Ly4vcGFnZXMvc2lnbnVwLnRzeD9iOGFkIl0sIm5hbWVzIjpbIlNpZ25VcCIsIm5hbWUiLCJzZXROYW1lIiwidXNlU3RhdGUiLCJlbWFpbCIsInNldEVtYWlsIiwic3VibWl0RGF0YSIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImJvZHkiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJKU09OIiwic3RyaW5naWZ5IiwiUm91dGVyIiwiZXJyb3IiLCJjb25zb2xlIiwidGFyZ2V0IiwidmFsdWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTUEsTUFBZ0IsR0FBRyxNQUFNO0FBQzdCLFFBQU07QUFBQSxPQUFDQyxJQUFEO0FBQUEsT0FBT0M7QUFBUCxNQUFrQkMsK0NBQVEsQ0FBQyxFQUFELENBQWhDO0FBQ0EsUUFBTTtBQUFBLE9BQUNDLEtBQUQ7QUFBQSxPQUFRQztBQUFSLE1BQW9CRiwrQ0FBUSxDQUFDLEVBQUQsQ0FBbEM7O0FBRUEsUUFBTUcsVUFBVSxHQUFHLE1BQU9DLENBQVAsSUFBbUM7QUFDcERBLEtBQUMsQ0FBQ0MsY0FBRjs7QUFDQSxRQUFJO0FBQ0YsWUFBTUMsSUFBSSxHQUFHO0FBQUVSLFlBQUY7QUFBUUc7QUFBUixPQUFiO0FBQ0EsWUFBTU0sS0FBSyxDQUFFLGdDQUFGLEVBQW1DO0FBQzVDQyxjQUFNLEVBQUUsTUFEb0M7QUFFNUNDLGVBQU8sRUFBRTtBQUFFLDBCQUFnQjtBQUFsQixTQUZtQztBQUc1Q0gsWUFBSSxFQUFFSSxJQUFJLENBQUNDLFNBQUwsQ0FBZUwsSUFBZjtBQUhzQyxPQUFuQyxDQUFYO0FBS0EsWUFBTU0sdURBQUEsQ0FBWSxHQUFaLENBQU47QUFDRCxLQVJELENBUUUsT0FBT0MsS0FBUCxFQUFjO0FBQ2RDLGFBQU8sQ0FBQ0QsS0FBUixDQUFjQSxLQUFkO0FBQ0Q7QUFDRixHQWJEOztBQWVBLHNCQUNFLDhEQUFDLHVEQUFEO0FBQUEsNEJBQ0U7QUFBQSwwQ0FBZSxNQUFmO0FBQUEsNkJBQ0U7QUFDRSxnQkFBUSxFQUFFVixVQURaO0FBQUE7QUFBQSxnQ0FFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUZGLGVBR0U7QUFDRSxtQkFBUyxNQURYO0FBRUUsa0JBQVEsRUFBRUMsQ0FBQyxJQUFJTCxPQUFPLENBQUNLLENBQUMsQ0FBQ1csTUFBRixDQUFTQyxLQUFWLENBRnhCO0FBR0UscUJBQVcsRUFBQyxNQUhkO0FBSUUsY0FBSSxFQUFDLE1BSlA7QUFLRSxlQUFLLEVBQUVsQixJQUxUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUhGLGVBVUU7QUFDRSxrQkFBUSxFQUFFTSxDQUFDLElBQUlGLFFBQVEsQ0FBQ0UsQ0FBQyxDQUFDVyxNQUFGLENBQVNDLEtBQVYsQ0FEekI7QUFFRSxxQkFBVyxFQUFDLGVBRmQ7QUFHRSxjQUFJLEVBQUMsTUFIUDtBQUlFLGVBQUssRUFBRWYsS0FKVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFWRixlQWdCRTtBQUNFLGtCQUFRLEVBQUUsQ0FBQ0gsSUFBRCxJQUFTLENBQUNHLEtBRHRCO0FBRUUsY0FBSSxFQUFDLFFBRlA7QUFHRSxlQUFLLEVBQUMsUUFIUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFoQkYsZUFxQkU7QUFBb0IsY0FBSSxFQUFDLEdBQXpCO0FBQTZCLGlCQUFPLEVBQUUsTUFBTVcsdURBQUEsQ0FBWSxHQUFaLENBQTVDO0FBQUEsOENBQWEsTUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFyQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERjtBQXlERCxDQTVFRDs7QUE4RUEsK0RBQWVmLE1BQWYiLCJmaWxlIjoiLi9wYWdlcy9zaWdudXAudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJ1xuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL0xheW91dCdcblxuY29uc3QgU2lnblVwOiBSZWFjdC5GQyA9ICgpID0+IHtcbiAgY29uc3QgW25hbWUsIHNldE5hbWVdID0gdXNlU3RhdGUoJycpXG4gIGNvbnN0IFtlbWFpbCwgc2V0RW1haWxdID0gdXNlU3RhdGUoJycpXG5cbiAgY29uc3Qgc3VibWl0RGF0YSA9IGFzeW5jIChlOiBSZWFjdC5TeW50aGV0aWNFdmVudCkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgIHRyeSB7XG4gICAgICBjb25zdCBib2R5ID0geyBuYW1lLCBlbWFpbCB9XG4gICAgICBhd2FpdCBmZXRjaChgaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS91c2VyYCwge1xuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgaGVhZGVyczogeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0sXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGJvZHkpLFxuICAgICAgfSlcbiAgICAgIGF3YWl0IFJvdXRlci5wdXNoKCcvJylcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcihlcnJvcilcbiAgICB9XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxMYXlvdXQ+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhZ2VcIj5cbiAgICAgICAgPGZvcm1cbiAgICAgICAgICBvblN1Ym1pdD17c3VibWl0RGF0YX0+XG4gICAgICAgICAgPGgxPlNpZ251cCB1c2VyPC9oMT5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIGF1dG9Gb2N1c1xuICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4gc2V0TmFtZShlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIk5hbWVcIlxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgdmFsdWU9e25hbWV9XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHNldEVtYWlsKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW1haWwgYWRkcmVzc1wiXG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICB2YWx1ZT17ZW1haWx9XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIGRpc2FibGVkPXshbmFtZSB8fCAhZW1haWx9XG4gICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcbiAgICAgICAgICAgIHZhbHVlPVwiU2lnbnVwXCJcbiAgICAgICAgICAvPlxuICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImJhY2tcIiBocmVmPVwiI1wiIG9uQ2xpY2s9eygpID0+IFJvdXRlci5wdXNoKCcvJyl9PlxuICAgICAgICAgICAgb3IgQ2FuY2VsXG4gICAgICAgIDwvYT5cbiAgICAgICAgPC9mb3JtPlxuICAgICAgPC9kaXY+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAucGFnZSB7XG4gICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgICBwYWRkaW5nOiAzcmVtO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIH1cblxuICAgICAgaW5wdXRbdHlwZT0ndGV4dCddIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIHBhZGRpbmc6IDAuNXJlbTtcbiAgICAgICAgbWFyZ2luOiAwLjVyZW0gMDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcbiAgICAgICAgYm9yZGVyOiAwLjEyNXJlbSBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMik7XG4gICAgICB9XG5cbiAgICAgIGlucHV0W3R5cGU9J3N1Ym1pdCddIHtcbiAgICAgICAgYmFja2dyb3VuZDogI2VjZWNlYztcbiAgICAgICAgYm9yZGVyOiAwO1xuICAgICAgICBwYWRkaW5nOiAxcmVtIDJyZW07XG4gICAgICB9XG5cbiAgICAgIC5iYWNrIHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDFyZW07XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICAgIDwvTGF5b3V0PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFNpZ25VcCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/signup.tsx\n");

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
var __webpack_exports__ = __webpack_require__.X(0, ["vendors-node_modules_next_link_js","components_Layout_tsx"], function() { return __webpack_exec__("./pages/signup.tsx"); });
module.exports = __webpack_exports__;

})();