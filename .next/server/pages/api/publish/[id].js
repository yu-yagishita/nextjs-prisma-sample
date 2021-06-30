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
exports.id = "pages/api/publish/[id]";
exports.ids = ["pages/api/publish/[id]"];
exports.modules = {

/***/ "./lib/prisma.ts":
/*!***********************!*\
  !*** ./lib/prisma.ts ***!
  \***********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n // PrismaClient is attached to the `global` object in development to prevent\n// exhausting your database connection limit.\n//\n// Learn more: \n// https://pris.ly/d/help/next-js-best-practices\n\nlet prisma;\n\nif (false) {} else {\n  if (!global.prisma) {\n    global.prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();\n  }\n\n  prisma = global.prisma;\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (prisma);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9oZWxsby1uZXh0Ly4vbGliL3ByaXNtYS50cz9kNzI4Il0sIm5hbWVzIjpbInByaXNtYSIsImdsb2JhbCIsIlByaXNtYUNsaWVudCJdLCJtYXBwaW5ncyI6Ijs7O0NBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFJQSxNQUFKOztBQUVBLElBQUksT0FBdUMsRUFBM0MsTUFFTztBQUNMLE1BQUksQ0FBQ0MsTUFBTSxDQUFDRCxNQUFaLEVBQW9CO0FBQ2xCQyxVQUFNLENBQUNELE1BQVAsR0FBZ0IsSUFBSUUsd0RBQUosRUFBaEI7QUFDRDs7QUFDREYsUUFBTSxHQUFHQyxNQUFNLENBQUNELE1BQWhCO0FBQ0Q7O0FBQ0QsK0RBQWVBLE1BQWYiLCJmaWxlIjoiLi9saWIvcHJpc21hLnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUHJpc21hQ2xpZW50IH0gZnJvbSBcIkBwcmlzbWEvY2xpZW50XCI7XG5cbi8vIFByaXNtYUNsaWVudCBpcyBhdHRhY2hlZCB0byB0aGUgYGdsb2JhbGAgb2JqZWN0IGluIGRldmVsb3BtZW50IHRvIHByZXZlbnRcbi8vIGV4aGF1c3RpbmcgeW91ciBkYXRhYmFzZSBjb25uZWN0aW9uIGxpbWl0LlxuLy9cbi8vIExlYXJuIG1vcmU6IFxuLy8gaHR0cHM6Ly9wcmlzLmx5L2QvaGVscC9uZXh0LWpzLWJlc3QtcHJhY3RpY2VzXG5cbmxldCBwcmlzbWE6IFByaXNtYUNsaWVudFxuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJykge1xuICBwcmlzbWEgPSBuZXcgUHJpc21hQ2xpZW50KClcbn0gZWxzZSB7XG4gIGlmICghZ2xvYmFsLnByaXNtYSkge1xuICAgIGdsb2JhbC5wcmlzbWEgPSBuZXcgUHJpc21hQ2xpZW50KClcbiAgfVxuICBwcmlzbWEgPSBnbG9iYWwucHJpc21hXG59XG5leHBvcnQgZGVmYXVsdCBwcmlzbWEiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./lib/prisma.ts\n");

/***/ }),

/***/ "./pages/api/publish/[id].ts":
/*!***********************************!*\
  !*** ./pages/api/publish/[id].ts ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ handle; }\n/* harmony export */ });\n/* harmony import */ var _lib_prisma__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../lib/prisma */ \"./lib/prisma.ts\");\n // PUT /api/publish/:id\n\nasync function handle(req, res) {\n  const postId = req.query.id;\n  const post = await _lib_prisma__WEBPACK_IMPORTED_MODULE_0__.default.post.update({\n    where: {\n      id: Number(postId)\n    },\n    data: {\n      published: true\n    }\n  });\n  res.json(post);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9oZWxsby1uZXh0Ly4vcGFnZXMvYXBpL3B1Ymxpc2gvW2lkXS50cz85N2VlIl0sIm5hbWVzIjpbImhhbmRsZSIsInJlcSIsInJlcyIsInBvc3RJZCIsInF1ZXJ5IiwiaWQiLCJwb3N0IiwicHJpc21hIiwid2hlcmUiLCJOdW1iZXIiLCJkYXRhIiwicHVibGlzaGVkIiwianNvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Q0FHQTs7QUFDZSxlQUFlQSxNQUFmLENBQXNCQyxHQUF0QixFQUEyQ0MsR0FBM0MsRUFBaUU7QUFDOUUsUUFBTUMsTUFBTSxHQUFHRixHQUFHLENBQUNHLEtBQUosQ0FBVUMsRUFBekI7QUFDQSxRQUFNQyxJQUFJLEdBQUcsTUFBTUMsNERBQUEsQ0FBbUI7QUFDcENDLFNBQUssRUFBRTtBQUFFSCxRQUFFLEVBQUVJLE1BQU0sQ0FBQ04sTUFBRDtBQUFaLEtBRDZCO0FBRXBDTyxRQUFJLEVBQUU7QUFBRUMsZUFBUyxFQUFFO0FBQWI7QUFGOEIsR0FBbkIsQ0FBbkI7QUFJQVQsS0FBRyxDQUFDVSxJQUFKLENBQVNOLElBQVQ7QUFDRCIsImZpbGUiOiIuL3BhZ2VzL2FwaS9wdWJsaXNoL1tpZF0udHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IE5leHRBcGlSZXF1ZXN0LCBOZXh0QXBpUmVzcG9uc2UgfSBmcm9tICduZXh0J1xuaW1wb3J0IHByaXNtYSBmcm9tICcuLi8uLi8uLi9saWIvcHJpc21hJ1xuXG4vLyBQVVQgL2FwaS9wdWJsaXNoLzppZFxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlKHJlcTogTmV4dEFwaVJlcXVlc3QsIHJlczogTmV4dEFwaVJlc3BvbnNlKSB7XG4gIGNvbnN0IHBvc3RJZCA9IHJlcS5xdWVyeS5pZFxuICBjb25zdCBwb3N0ID0gYXdhaXQgcHJpc21hLnBvc3QudXBkYXRlKHtcbiAgICB3aGVyZTogeyBpZDogTnVtYmVyKHBvc3RJZCkgfSxcbiAgICBkYXRhOiB7IHB1Ymxpc2hlZDogdHJ1ZSB9LFxuICB9KVxuICByZXMuanNvbihwb3N0KVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/api/publish/[id].ts\n");

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
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/api/publish/[id].ts"));
module.exports = __webpack_exports__;

})();