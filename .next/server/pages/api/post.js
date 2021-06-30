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
exports.id = "pages/api/post";
exports.ids = ["pages/api/post"];
exports.modules = {

/***/ "./lib/prisma.ts":
/*!***********************!*\
  !*** ./lib/prisma.ts ***!
  \***********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n // PrismaClient is attached to the `global` object in development to prevent\n// exhausting your database connection limit.\n//\n// Learn more: \n// https://pris.ly/d/help/next-js-best-practices\n\nlet prisma;\n\nif (false) {} else {\n  if (!global.prisma) {\n    global.prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();\n  }\n\n  prisma = global.prisma;\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (prisma);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9oZWxsby1uZXh0Ly4vbGliL3ByaXNtYS50cz9kNzI4Il0sIm5hbWVzIjpbInByaXNtYSIsImdsb2JhbCIsIlByaXNtYUNsaWVudCJdLCJtYXBwaW5ncyI6Ijs7O0NBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFJQSxNQUFKOztBQUVBLElBQUksT0FBdUMsRUFBM0MsTUFFTztBQUNMLE1BQUksQ0FBQ0MsTUFBTSxDQUFDRCxNQUFaLEVBQW9CO0FBQ2xCQyxVQUFNLENBQUNELE1BQVAsR0FBZ0IsSUFBSUUsd0RBQUosRUFBaEI7QUFDRDs7QUFDREYsUUFBTSxHQUFHQyxNQUFNLENBQUNELE1BQWhCO0FBQ0Q7O0FBQ0QsK0RBQWVBLE1BQWYiLCJmaWxlIjoiLi9saWIvcHJpc21hLnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUHJpc21hQ2xpZW50IH0gZnJvbSBcIkBwcmlzbWEvY2xpZW50XCI7XG5cbi8vIFByaXNtYUNsaWVudCBpcyBhdHRhY2hlZCB0byB0aGUgYGdsb2JhbGAgb2JqZWN0IGluIGRldmVsb3BtZW50IHRvIHByZXZlbnRcbi8vIGV4aGF1c3RpbmcgeW91ciBkYXRhYmFzZSBjb25uZWN0aW9uIGxpbWl0LlxuLy9cbi8vIExlYXJuIG1vcmU6IFxuLy8gaHR0cHM6Ly9wcmlzLmx5L2QvaGVscC9uZXh0LWpzLWJlc3QtcHJhY3RpY2VzXG5cbmxldCBwcmlzbWE6IFByaXNtYUNsaWVudFxuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJykge1xuICBwcmlzbWEgPSBuZXcgUHJpc21hQ2xpZW50KClcbn0gZWxzZSB7XG4gIGlmICghZ2xvYmFsLnByaXNtYSkge1xuICAgIGdsb2JhbC5wcmlzbWEgPSBuZXcgUHJpc21hQ2xpZW50KClcbiAgfVxuICBwcmlzbWEgPSBnbG9iYWwucHJpc21hXG59XG5leHBvcnQgZGVmYXVsdCBwcmlzbWEiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./lib/prisma.ts\n");

/***/ }),

/***/ "./pages/api/post/index.ts":
/*!*********************************!*\
  !*** ./pages/api/post/index.ts ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ handle; }\n/* harmony export */ });\n/* harmony import */ var _lib_prisma__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../lib/prisma */ \"./lib/prisma.ts\");\n // POST /api/post\n// Required fields in body: title, authorEmail\n// Optional fields in body: content\n\nasync function handle(req, res) {\n  const {\n    title,\n    content,\n    authorEmail\n  } = req.body;\n  const result = await _lib_prisma__WEBPACK_IMPORTED_MODULE_0__.default.post.create({\n    data: {\n      title: title,\n      content: content,\n      author: {\n        connect: {\n          email: authorEmail\n        }\n      }\n    }\n  });\n  res.json(result);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9oZWxsby1uZXh0Ly4vcGFnZXMvYXBpL3Bvc3QvaW5kZXgudHM/YjM4MiJdLCJuYW1lcyI6WyJoYW5kbGUiLCJyZXEiLCJyZXMiLCJ0aXRsZSIsImNvbnRlbnQiLCJhdXRob3JFbWFpbCIsImJvZHkiLCJyZXN1bHQiLCJwcmlzbWEiLCJkYXRhIiwiYXV0aG9yIiwiY29ubmVjdCIsImVtYWlsIiwianNvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Q0FJQTtBQUNBO0FBQ0E7O0FBQ2UsZUFBZUEsTUFBZixDQUFzQkMsR0FBdEIsRUFBMkNDLEdBQTNDLEVBQWlFO0FBQzlFLFFBQU07QUFBRUMsU0FBRjtBQUFTQyxXQUFUO0FBQWtCQztBQUFsQixNQUFrQ0osR0FBRyxDQUFDSyxJQUE1QztBQUNBLFFBQU1DLE1BQU0sR0FBRyxNQUFNQyw0REFBQSxDQUFtQjtBQUN0Q0MsUUFBSSxFQUFFO0FBQ0pOLFdBQUssRUFBRUEsS0FESDtBQUVKQyxhQUFPLEVBQUVBLE9BRkw7QUFHSk0sWUFBTSxFQUFFO0FBQUVDLGVBQU8sRUFBRTtBQUFFQyxlQUFLLEVBQUVQO0FBQVQ7QUFBWDtBQUhKO0FBRGdDLEdBQW5CLENBQXJCO0FBT0FILEtBQUcsQ0FBQ1csSUFBSixDQUFTTixNQUFUO0FBQ0QiLCJmaWxlIjoiLi9wYWdlcy9hcGkvcG9zdC9pbmRleC50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgTmV4dEFwaVJlcXVlc3QsIE5leHRBcGlSZXNwb25zZSB9IGZyb20gJ25leHQnXG5pbXBvcnQgcHJpc21hIGZyb20gJy4uLy4uLy4uL2xpYi9wcmlzbWEnXG5cblxuLy8gUE9TVCAvYXBpL3Bvc3Rcbi8vIFJlcXVpcmVkIGZpZWxkcyBpbiBib2R5OiB0aXRsZSwgYXV0aG9yRW1haWxcbi8vIE9wdGlvbmFsIGZpZWxkcyBpbiBib2R5OiBjb250ZW50XG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGUocmVxOiBOZXh0QXBpUmVxdWVzdCwgcmVzOiBOZXh0QXBpUmVzcG9uc2UpIHtcbiAgY29uc3QgeyB0aXRsZSwgY29udGVudCwgYXV0aG9yRW1haWwgfSA9IHJlcS5ib2R5XG4gIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHByaXNtYS5wb3N0LmNyZWF0ZSh7XG4gICAgZGF0YToge1xuICAgICAgdGl0bGU6IHRpdGxlLFxuICAgICAgY29udGVudDogY29udGVudCxcbiAgICAgIGF1dGhvcjogeyBjb25uZWN0OiB7IGVtYWlsOiBhdXRob3JFbWFpbCB9IH0sXG4gICAgfSxcbiAgfSlcbiAgcmVzLmpzb24ocmVzdWx0KVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/api/post/index.ts\n");

/***/ }),

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ (function(module) {

"use strict";
module.exports = require("@prisma/client");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/api/post/index.ts"));
module.exports = __webpack_exports__;

})();