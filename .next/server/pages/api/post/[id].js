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
exports.id = "pages/api/post/[id]";
exports.ids = ["pages/api/post/[id]"];
exports.modules = {

/***/ "./lib/prisma.ts":
/*!***********************!*\
  !*** ./lib/prisma.ts ***!
  \***********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n // PrismaClient is attached to the `global` object in development to prevent\n// exhausting your database connection limit.\n//\n// Learn more: \n// https://pris.ly/d/help/next-js-best-practices\n\nlet prisma;\n\nif (false) {} else {\n  if (!global.prisma) {\n    global.prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();\n  }\n\n  prisma = global.prisma;\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (prisma);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9oZWxsby1uZXh0Ly4vbGliL3ByaXNtYS50cz9kNzI4Il0sIm5hbWVzIjpbInByaXNtYSIsImdsb2JhbCIsIlByaXNtYUNsaWVudCJdLCJtYXBwaW5ncyI6Ijs7O0NBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFJQSxNQUFKOztBQUVBLElBQUksT0FBdUMsRUFBM0MsTUFFTztBQUNMLE1BQUksQ0FBQ0MsTUFBTSxDQUFDRCxNQUFaLEVBQW9CO0FBQ2xCQyxVQUFNLENBQUNELE1BQVAsR0FBZ0IsSUFBSUUsd0RBQUosRUFBaEI7QUFDRDs7QUFDREYsUUFBTSxHQUFHQyxNQUFNLENBQUNELE1BQWhCO0FBQ0Q7O0FBQ0QsK0RBQWVBLE1BQWYiLCJmaWxlIjoiLi9saWIvcHJpc21hLnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUHJpc21hQ2xpZW50IH0gZnJvbSBcIkBwcmlzbWEvY2xpZW50XCI7XG5cbi8vIFByaXNtYUNsaWVudCBpcyBhdHRhY2hlZCB0byB0aGUgYGdsb2JhbGAgb2JqZWN0IGluIGRldmVsb3BtZW50IHRvIHByZXZlbnRcbi8vIGV4aGF1c3RpbmcgeW91ciBkYXRhYmFzZSBjb25uZWN0aW9uIGxpbWl0LlxuLy9cbi8vIExlYXJuIG1vcmU6IFxuLy8gaHR0cHM6Ly9wcmlzLmx5L2QvaGVscC9uZXh0LWpzLWJlc3QtcHJhY3RpY2VzXG5cbmxldCBwcmlzbWE6IFByaXNtYUNsaWVudFxuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJykge1xuICBwcmlzbWEgPSBuZXcgUHJpc21hQ2xpZW50KClcbn0gZWxzZSB7XG4gIGlmICghZ2xvYmFsLnByaXNtYSkge1xuICAgIGdsb2JhbC5wcmlzbWEgPSBuZXcgUHJpc21hQ2xpZW50KClcbiAgfVxuICBwcmlzbWEgPSBnbG9iYWwucHJpc21hXG59XG5leHBvcnQgZGVmYXVsdCBwcmlzbWEiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./lib/prisma.ts\n");

/***/ }),

/***/ "./pages/api/post/[id].ts":
/*!********************************!*\
  !*** ./pages/api/post/[id].ts ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ handle; }\n/* harmony export */ });\n/* harmony import */ var _lib_prisma__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../lib/prisma */ \"./lib/prisma.ts\");\n\nasync function handle(req, res) {\n  const postId = req.query.id;\n\n  if (req.method === 'GET') {\n    handleGET(postId, res);\n  } else if (req.method === 'DELETE') {\n    handleDELETE(postId, res);\n  } else {\n    throw new Error(`The HTTP ${req.method} method is not supported at this route.`);\n  }\n} // GET /api/post/:id\n\nasync function handleGET(postId, res) {\n  const post = await _lib_prisma__WEBPACK_IMPORTED_MODULE_0__.default.post.findUnique({\n    where: {\n      id: Number(postId)\n    },\n    include: {\n      author: true\n    }\n  });\n  res.json(post);\n} // DELETE /api/post/:id\n\n\nasync function handleDELETE(postId, res) {\n  const post = await _lib_prisma__WEBPACK_IMPORTED_MODULE_0__.default.post.delete({\n    where: {\n      id: Number(postId)\n    }\n  });\n  res.json(post);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9oZWxsby1uZXh0Ly4vcGFnZXMvYXBpL3Bvc3QvW2lkXS50cz80YTg1Il0sIm5hbWVzIjpbImhhbmRsZSIsInJlcSIsInJlcyIsInBvc3RJZCIsInF1ZXJ5IiwiaWQiLCJtZXRob2QiLCJoYW5kbGVHRVQiLCJoYW5kbGVERUxFVEUiLCJFcnJvciIsInBvc3QiLCJwcmlzbWEiLCJ3aGVyZSIsIk51bWJlciIsImluY2x1ZGUiLCJhdXRob3IiLCJqc29uIl0sIm1hcHBpbmdzIjoiOzs7OztBQUNBO0FBR2UsZUFBZUEsTUFBZixDQUFzQkMsR0FBdEIsRUFBMkNDLEdBQTNDLEVBQWlFO0FBQzlFLFFBQU1DLE1BQU0sR0FBR0YsR0FBRyxDQUFDRyxLQUFKLENBQVVDLEVBQXpCOztBQUVBLE1BQUlKLEdBQUcsQ0FBQ0ssTUFBSixLQUFlLEtBQW5CLEVBQTBCO0FBQ3hCQyxhQUFTLENBQUNKLE1BQUQsRUFBU0QsR0FBVCxDQUFUO0FBQ0QsR0FGRCxNQUVPLElBQUlELEdBQUcsQ0FBQ0ssTUFBSixLQUFlLFFBQW5CLEVBQTZCO0FBQ2xDRSxnQkFBWSxDQUFDTCxNQUFELEVBQVNELEdBQVQsQ0FBWjtBQUNELEdBRk0sTUFFQTtBQUNMLFVBQU0sSUFBSU8sS0FBSixDQUNILFlBQVdSLEdBQUcsQ0FBQ0ssTUFBTyx5Q0FEbkIsQ0FBTjtBQUdEO0FBQ0YsQyxDQUVEOztBQUNBLGVBQWVDLFNBQWYsQ0FBeUJKLE1BQXpCLEVBQWlDRCxHQUFqQyxFQUFzQztBQUNwQyxRQUFNUSxJQUFJLEdBQUcsTUFBTUMsZ0VBQUEsQ0FBdUI7QUFDeENDLFNBQUssRUFBRTtBQUFFUCxRQUFFLEVBQUVRLE1BQU0sQ0FBQ1YsTUFBRDtBQUFaLEtBRGlDO0FBRXhDVyxXQUFPLEVBQUU7QUFBRUMsWUFBTSxFQUFFO0FBQVY7QUFGK0IsR0FBdkIsQ0FBbkI7QUFJQWIsS0FBRyxDQUFDYyxJQUFKLENBQVNOLElBQVQ7QUFDRCxDLENBRUQ7OztBQUNBLGVBQWVGLFlBQWYsQ0FBNEJMLE1BQTVCLEVBQW9DRCxHQUFwQyxFQUF5QztBQUN2QyxRQUFNUSxJQUFJLEdBQUcsTUFBTUMsNERBQUEsQ0FBbUI7QUFDcENDLFNBQUssRUFBRTtBQUFFUCxRQUFFLEVBQUVRLE1BQU0sQ0FBQ1YsTUFBRDtBQUFaO0FBRDZCLEdBQW5CLENBQW5CO0FBR0FELEtBQUcsQ0FBQ2MsSUFBSixDQUFTTixJQUFUO0FBQ0QiLCJmaWxlIjoiLi9wYWdlcy9hcGkvcG9zdC9baWRdLnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUgeyBOZXh0QXBpUmVxdWVzdCwgTmV4dEFwaVJlc3BvbnNlIH0gZnJvbSAnbmV4dCdcbmltcG9ydCBwcmlzbWEgZnJvbSAnLi4vLi4vLi4vbGliL3ByaXNtYSdcblxuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGUocmVxOiBOZXh0QXBpUmVxdWVzdCwgcmVzOiBOZXh0QXBpUmVzcG9uc2UpIHtcbiAgY29uc3QgcG9zdElkID0gcmVxLnF1ZXJ5LmlkXG5cbiAgaWYgKHJlcS5tZXRob2QgPT09ICdHRVQnKSB7XG4gICAgaGFuZGxlR0VUKHBvc3RJZCwgcmVzKVxuICB9IGVsc2UgaWYgKHJlcS5tZXRob2QgPT09ICdERUxFVEUnKSB7XG4gICAgaGFuZGxlREVMRVRFKHBvc3RJZCwgcmVzKVxuICB9IGVsc2Uge1xuICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgIGBUaGUgSFRUUCAke3JlcS5tZXRob2R9IG1ldGhvZCBpcyBub3Qgc3VwcG9ydGVkIGF0IHRoaXMgcm91dGUuYFxuICAgIClcbiAgfVxufVxuXG4vLyBHRVQgL2FwaS9wb3N0LzppZFxuYXN5bmMgZnVuY3Rpb24gaGFuZGxlR0VUKHBvc3RJZCwgcmVzKSB7XG4gIGNvbnN0IHBvc3QgPSBhd2FpdCBwcmlzbWEucG9zdC5maW5kVW5pcXVlKHtcbiAgICB3aGVyZTogeyBpZDogTnVtYmVyKHBvc3RJZCkgfSxcbiAgICBpbmNsdWRlOiB7IGF1dGhvcjogdHJ1ZSB9LFxuICB9KVxuICByZXMuanNvbihwb3N0KVxufVxuXG4vLyBERUxFVEUgL2FwaS9wb3N0LzppZFxuYXN5bmMgZnVuY3Rpb24gaGFuZGxlREVMRVRFKHBvc3RJZCwgcmVzKSB7XG4gIGNvbnN0IHBvc3QgPSBhd2FpdCBwcmlzbWEucG9zdC5kZWxldGUoe1xuICAgIHdoZXJlOiB7IGlkOiBOdW1iZXIocG9zdElkKSB9LFxuICB9KVxuICByZXMuanNvbihwb3N0KVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/api/post/[id].ts\n");

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
var __webpack_exports__ = (__webpack_exec__("./pages/api/post/[id].ts"));
module.exports = __webpack_exports__;

})();