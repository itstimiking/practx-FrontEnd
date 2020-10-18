webpackHotUpdate_N_E("pages/_app",{

/***/ "./src/redux/auth/authReducer.js":
/*!***************************************!*\
  !*** ./src/redux/auth/authReducer.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return authReducer; });\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ \"./src/redux/auth/constants.js\");\n\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\nconst initialState = {\n  user: {},\n  passwordResetStatus: \"\",\n  addStaff: \"\",\n  error: false\n};\nfunction authReducer(state = initialState, action) {\n  switch (action.type) {\n    case _constants__WEBPACK_IMPORTED_MODULE_1__[\"ROOT_USER_LOGIN\"]:\n      state = _objectSpread(_objectSpread({}, state), {}, {\n        user: action.payload\n      });\n      return state;\n\n    case _constants__WEBPACK_IMPORTED_MODULE_1__[\"ROOT_USER_LOGOUT\"]:\n      state = _objectSpread(_objectSpread({}, state), {}, {\n        user: {}\n      });\n      return state;\n\n    case _constants__WEBPACK_IMPORTED_MODULE_1__[\"ROOT_USER_PASSWORD_RESET_REQ\"]:\n      state = _objectSpread(_objectSpread({}, state), {}, {\n        passwordResetStatus: action.payload\n      });\n      return state;\n\n    case _constants__WEBPACK_IMPORTED_MODULE_1__[\"ROOT_USER_PASSWORD_RESET\"]:\n      state = _objectSpread(_objectSpread({}, state), {}, {\n        passwordResetStatus: action.payload\n      });\n      return state;\n\n    case _constants__WEBPACK_IMPORTED_MODULE_1__[\"PRACTICE_USER_LOGIN\"]:\n      state = _objectSpread(_objectSpread({}, state), {}, {\n        user: action.payload\n      });\n      return state;\n\n    case _constants__WEBPACK_IMPORTED_MODULE_1__[\"PRACTICE_USER_LOGOUT\"]:\n      state = _objectSpread(_objectSpread({}, state), {}, {\n        user: {}\n      });\n      return state;\n\n    case _constants__WEBPACK_IMPORTED_MODULE_1__[\"PRACTICE_USER_PASSWORD_RESET_REQ\"]:\n      state = _objectSpread(_objectSpread({}, state), {}, {\n        passwordResetStatus: action.payload\n      });\n      return state;\n\n    case _constants__WEBPACK_IMPORTED_MODULE_1__[\"PRACTICE_USER_PASSWORD_RESET\"]:\n      state = _objectSpread(_objectSpread({}, state), {}, {\n        passwordResetStatus: action.payload\n      });\n      return state;\n\n    case _constants__WEBPACK_IMPORTED_MODULE_1__[\"PRACTICE_ADD_STAFF_SUCCESS\"]:\n      state = _objectSpread(_objectSpread({}, state), {}, {\n        addStaff: true\n      });\n      return state;\n\n    case _constants__WEBPACK_IMPORTED_MODULE_1__[\"PRACTICE_ADD_STAFF_EMPTY\"]:\n      state = _objectSpread(_objectSpread({}, state), {}, {\n        addStaff: false\n      });\n      return state;\n\n    case _constants__WEBPACK_IMPORTED_MODULE_1__[\"USER_LOGIN\"]:\n      state = _objectSpread(_objectSpread({}, state), {}, {\n        user: {}\n      });\n      return state;\n\n    case _constants__WEBPACK_IMPORTED_MODULE_1__[\"USER_LOGOUT\"]:\n      state = _objectSpread(_objectSpread({}, state), {}, {\n        user: {}\n      });\n      return state;\n\n    case _constants__WEBPACK_IMPORTED_MODULE_1__[\"USER_PASSWORD_RESET_REQUEST\"]:\n      state = _objectSpread(_objectSpread({}, state), {}, {\n        passwordResetStatus: action.payload\n      });\n      return state;\n\n    case _constants__WEBPACK_IMPORTED_MODULE_1__[\"USER_PASSWORD_RESET_SUCCESSFUL\"]:\n      state = _objectSpread(_objectSpread({}, state), {}, {\n        passwordResetStatus: action.payload\n      });\n      return state;\n\n    case _constants__WEBPACK_IMPORTED_MODULE_1__[\"API_FAILED\"]:\n      state = _objectSpread(_objectSpread({}, state), {}, {\n        error: true\n      });\n      return state;\n\n    default:\n      return state;\n  }\n}\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/next/node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3JlZHV4L2F1dGgvYXV0aFJlZHVjZXIuanM/YjNjMCJdLCJuYW1lcyI6WyJpbml0aWFsU3RhdGUiLCJ1c2VyIiwicGFzc3dvcmRSZXNldFN0YXR1cyIsImFkZFN0YWZmIiwiZXJyb3IiLCJhdXRoUmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwidHlwZSIsInQiLCJwYXlsb2FkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFLQSxNQUFNQSxZQUFZLEdBQUc7QUFDcEJDLE1BQUksRUFBQyxFQURlO0FBRXBCQyxxQkFBbUIsRUFBQyxFQUZBO0FBR3BCQyxVQUFRLEVBQUMsRUFIVztBQUlwQkMsT0FBSyxFQUFFO0FBSmEsQ0FBckI7QUFPZSxTQUFTQyxXQUFULENBQXNCQyxLQUFLLEdBQUdOLFlBQTlCLEVBQTRDTyxNQUE1QyxFQUFtRDtBQUVqRSxVQUFPQSxNQUFNLENBQUNDLElBQWQ7QUFFQyxTQUFLQywwREFBTDtBQUVDSCxXQUFLLG1DQUFPQSxLQUFQO0FBQWNMLFlBQUksRUFBQ00sTUFBTSxDQUFDRztBQUExQixRQUFMO0FBRUEsYUFBT0osS0FBUDs7QUFFRCxTQUFLRywyREFBTDtBQUVDSCxXQUFLLG1DQUFPQSxLQUFQO0FBQWNMLFlBQUksRUFBQztBQUFuQixRQUFMO0FBQ0EsYUFBT0ssS0FBUDs7QUFHRCxTQUFLRyx1RUFBTDtBQUVDSCxXQUFLLG1DQUFPQSxLQUFQO0FBQWNKLDJCQUFtQixFQUFDSyxNQUFNLENBQUNHO0FBQXpDLFFBQUw7QUFDQSxhQUFPSixLQUFQOztBQUVELFNBQUtHLG1FQUFMO0FBRUNILFdBQUssbUNBQU9BLEtBQVA7QUFBY0osMkJBQW1CLEVBQUNLLE1BQU0sQ0FBQ0c7QUFBekMsUUFBTDtBQUNBLGFBQU9KLEtBQVA7O0FBS0QsU0FBS0csOERBQUw7QUFFQ0gsV0FBSyxtQ0FBT0EsS0FBUDtBQUFjTCxZQUFJLEVBQUNNLE1BQU0sQ0FBQ0c7QUFBMUIsUUFBTDtBQUNBLGFBQU9KLEtBQVA7O0FBRUQsU0FBS0csK0RBQUw7QUFFQ0gsV0FBSyxtQ0FBT0EsS0FBUDtBQUFjTCxZQUFJLEVBQUM7QUFBbkIsUUFBTDtBQUNBLGFBQU9LLEtBQVA7O0FBR0QsU0FBS0csMkVBQUw7QUFFQ0gsV0FBSyxtQ0FBT0EsS0FBUDtBQUFjSiwyQkFBbUIsRUFBQ0ssTUFBTSxDQUFDRztBQUF6QyxRQUFMO0FBQ0EsYUFBT0osS0FBUDs7QUFFRCxTQUFLRyx1RUFBTDtBQUVDSCxXQUFLLG1DQUFPQSxLQUFQO0FBQWNKLDJCQUFtQixFQUFDSyxNQUFNLENBQUNHO0FBQXpDLFFBQUw7QUFDQSxhQUFPSixLQUFQOztBQUVELFNBQUtHLHFFQUFMO0FBRUNILFdBQUssbUNBQU9BLEtBQVA7QUFBY0gsZ0JBQVEsRUFBRTtBQUF4QixRQUFMO0FBQ0EsYUFBT0csS0FBUDs7QUFFRCxTQUFLRyxtRUFBTDtBQUNDSCxXQUFLLG1DQUFPQSxLQUFQO0FBQWNILGdCQUFRLEVBQUM7QUFBdkIsUUFBTDtBQUNBLGFBQU9HLEtBQVA7O0FBRUQsU0FBS0cscURBQUw7QUFFQ0gsV0FBSyxtQ0FBT0EsS0FBUDtBQUFjTCxZQUFJLEVBQUM7QUFBbkIsUUFBTDtBQUNBLGFBQU9LLEtBQVA7O0FBRUQsU0FBS0csc0RBQUw7QUFFQ0gsV0FBSyxtQ0FBT0EsS0FBUDtBQUFjTCxZQUFJLEVBQUM7QUFBbkIsUUFBTDtBQUNBLGFBQU9LLEtBQVA7O0FBRUQsU0FBS0csc0VBQUw7QUFFQ0gsV0FBSyxtQ0FBT0EsS0FBUDtBQUFjSiwyQkFBbUIsRUFBQ0ssTUFBTSxDQUFDRztBQUF6QyxRQUFMO0FBQ0EsYUFBT0osS0FBUDs7QUFFRCxTQUFLRyx5RUFBTDtBQUVDSCxXQUFLLG1DQUFPQSxLQUFQO0FBQWNKLDJCQUFtQixFQUFDSyxNQUFNLENBQUNHO0FBQXpDLFFBQUw7QUFDQSxhQUFPSixLQUFQOztBQUlELFNBQUtHLHFEQUFMO0FBQ0NILFdBQUssbUNBQU9BLEtBQVA7QUFBY0YsYUFBSyxFQUFFO0FBQXJCLFFBQUw7QUFDQSxhQUFPRSxLQUFQOztBQUdEO0FBQ0MsYUFBT0EsS0FBUDtBQXJGRjtBQXdGQSIsImZpbGUiOiIuL3NyYy9yZWR1eC9hdXRoL2F1dGhSZWR1Y2VyLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgdCBmcm9tIFwiLi9jb25zdGFudHNcIjtcblxuXG5cbiBcbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcblx0dXNlcjp7fSxcblx0cGFzc3dvcmRSZXNldFN0YXR1czpcIlwiLFxuXHRhZGRTdGFmZjpcIlwiLFxuXHRlcnJvcjogZmFsc2Vcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGF1dGhSZWR1Y2VyIChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKXtcblxuXHRzd2l0Y2goYWN0aW9uLnR5cGUpe1xuXG5cdFx0Y2FzZSB0LlJPT1RfVVNFUl9MT0dJTjpcblxuXHRcdFx0c3RhdGUgPSB7Li4uc3RhdGUsIHVzZXI6YWN0aW9uLnBheWxvYWR9O1xuXHRcdFx0XG5cdFx0XHRyZXR1cm4gc3RhdGU7XG5cblx0XHRjYXNlIHQuUk9PVF9VU0VSX0xPR09VVDpcblxuXHRcdFx0c3RhdGUgPSB7Li4uc3RhdGUsIHVzZXI6e319XG5cdFx0XHRyZXR1cm4gc3RhdGU7XG5cdFx0XHRcblxuXHRcdGNhc2UgdC5ST09UX1VTRVJfUEFTU1dPUkRfUkVTRVRfUkVROlxuXG5cdFx0XHRzdGF0ZSA9IHsuLi5zdGF0ZSwgcGFzc3dvcmRSZXNldFN0YXR1czphY3Rpb24ucGF5bG9hZH1cblx0XHRcdHJldHVybiBzdGF0ZTtcblxuXHRcdGNhc2UgdC5ST09UX1VTRVJfUEFTU1dPUkRfUkVTRVQ6XG5cblx0XHRcdHN0YXRlID0gey4uLnN0YXRlLCBwYXNzd29yZFJlc2V0U3RhdHVzOmFjdGlvbi5wYXlsb2FkfVxuXHRcdFx0cmV0dXJuIHN0YXRlO1xuXG5cblxuXG5cdFx0Y2FzZSB0LlBSQUNUSUNFX1VTRVJfTE9HSU46XG5cblx0XHRcdHN0YXRlID0gey4uLnN0YXRlLCB1c2VyOmFjdGlvbi5wYXlsb2FkfTtcblx0XHRcdHJldHVybiBzdGF0ZTtcblxuXHRcdGNhc2UgdC5QUkFDVElDRV9VU0VSX0xPR09VVDpcblxuXHRcdFx0c3RhdGUgPSB7Li4uc3RhdGUsIHVzZXI6e319XG5cdFx0XHRyZXR1cm4gc3RhdGU7XG5cdFx0XHRcblxuXHRcdGNhc2UgdC5QUkFDVElDRV9VU0VSX1BBU1NXT1JEX1JFU0VUX1JFUTpcblxuXHRcdFx0c3RhdGUgPSB7Li4uc3RhdGUsIHBhc3N3b3JkUmVzZXRTdGF0dXM6YWN0aW9uLnBheWxvYWR9XG5cdFx0XHRyZXR1cm4gc3RhdGU7XG5cblx0XHRjYXNlIHQuUFJBQ1RJQ0VfVVNFUl9QQVNTV09SRF9SRVNFVDpcblxuXHRcdFx0c3RhdGUgPSB7Li4uc3RhdGUsIHBhc3N3b3JkUmVzZXRTdGF0dXM6YWN0aW9uLnBheWxvYWR9XG5cdFx0XHRyZXR1cm4gc3RhdGU7XG5cblx0XHRjYXNlIHQuUFJBQ1RJQ0VfQUREX1NUQUZGX1NVQ0NFU1M6XG5cblx0XHRcdHN0YXRlID0gey4uLnN0YXRlLCBhZGRTdGFmZjogdHJ1ZX1cblx0XHRcdHJldHVybiBzdGF0ZTtcblxuXHRcdGNhc2UgdC5QUkFDVElDRV9BRERfU1RBRkZfRU1QVFk6XG5cdFx0XHRzdGF0ZSA9IHsuLi5zdGF0ZSwgYWRkU3RhZmY6ZmFsc2V9XG5cdFx0XHRyZXR1cm4gc3RhdGU7XG5cblx0XHRjYXNlIHQuVVNFUl9MT0dJTjpcblxuXHRcdFx0c3RhdGUgPSB7Li4uc3RhdGUsIHVzZXI6e319XG5cdFx0XHRyZXR1cm4gc3RhdGU7XG5cblx0XHRjYXNlIHQuVVNFUl9MT0dPVVQ6XG5cblx0XHRcdHN0YXRlID0gey4uLnN0YXRlLCB1c2VyOnt9fVxuXHRcdFx0cmV0dXJuIHN0YXRlO1xuXG5cdFx0Y2FzZSB0LlVTRVJfUEFTU1dPUkRfUkVTRVRfUkVRVUVTVDpcblxuXHRcdFx0c3RhdGUgPSB7Li4uc3RhdGUsIHBhc3N3b3JkUmVzZXRTdGF0dXM6YWN0aW9uLnBheWxvYWR9XG5cdFx0XHRyZXR1cm4gc3RhdGU7XG5cdFx0XHRcblx0XHRjYXNlIHQuVVNFUl9QQVNTV09SRF9SRVNFVF9TVUNDRVNTRlVMOlxuXG5cdFx0XHRzdGF0ZSA9IHsuLi5zdGF0ZSwgcGFzc3dvcmRSZXNldFN0YXR1czphY3Rpb24ucGF5bG9hZH1cblx0XHRcdHJldHVybiBzdGF0ZTtcblx0XHRcdFxuXG5cblx0XHRjYXNlIHQuQVBJX0ZBSUxFRDpcblx0XHRcdHN0YXRlID0gey4uLnN0YXRlLCBlcnJvcjogdHJ1ZX1cblx0XHRcdHJldHVybiBzdGF0ZTtcblxuXHRcdFxuXHRcdGRlZmF1bHQ6XG5cdFx0XHRyZXR1cm4gc3RhdGU7XG5cdFx0XHRcblx0fVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/redux/auth/authReducer.js\n");

/***/ })

})