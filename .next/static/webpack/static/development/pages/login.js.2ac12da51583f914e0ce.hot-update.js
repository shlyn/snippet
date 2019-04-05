webpackHotUpdate("static\\development\\pages\\login.js",{

/***/ "./components/Auth/LogIn.tsx":
/*!***********************************!*\
  !*** ./components/Auth/LogIn.tsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _Styles_colors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Styles/colors */ "./components/Styles/colors.ts");
/* harmony import */ var _Common_helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Common/helpers */ "./components/Common/helpers.ts");
var _jsxFileName = "C:\\Users\\engqu\\Desktop\\projects\\Personal\\snippet\\components\\Auth\\LogIn.tsx";





function LogIn() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Form, {
    onSubmit: Object(_Common_helpers__WEBPACK_IMPORTED_MODULE_3__["preventDefault"])(),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Header, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, "Snippet"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Input, {
    placeholder: "Username",
    type: "text",
    name: "username",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Input, {
    placeholder: "Password",
    type: "password",
    name: "password",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Button, {
    type: "submit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, "Log In"));
}

/* harmony default export */ __webpack_exports__["default"] = (LogIn);
var Form = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].form.withConfig({
  displayName: "LogIn__Form",
  componentId: "s3kh84-0"
})(["padding:40px;background:", ";border-radius:10px;width:100%;max-width:500px;display:grid;grid-gap:30px;justify-items:center;"], _Styles_colors__WEBPACK_IMPORTED_MODULE_2__["colors"].green);
var Header = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].h1.withConfig({
  displayName: "LogIn__Header",
  componentId: "s3kh84-1"
})(["color:", ";text-transform:uppercase;"], _Styles_colors__WEBPACK_IMPORTED_MODULE_2__["colors"].white);
var Input = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].input.withConfig({
  displayName: "LogIn__Input",
  componentId: "s3kh84-2"
})(["height:40px;max-width:400px;width:100%;"]);
var Button = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].button.withConfig({
  displayName: "LogIn__Button",
  componentId: "s3kh84-3"
})(["border-radius:5px;padding:10px 20px;border:none;"]);

/***/ }),

/***/ "./components/Common/helpers.ts":
/*!**************************************!*\
  !*** ./components/Common/helpers.ts ***!
  \**************************************/
/*! exports provided: preventDefault, stopPropagation, onlyOnSelf, blurTarget */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "preventDefault", function() { return preventDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stopPropagation", function() { return stopPropagation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onlyOnSelf", function() { return onlyOnSelf; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "blurTarget", function() { return blurTarget; });
function noop() {}

function preventDefault() {
  var func = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : noop;
  return function (event) {
    event.preventDefault();
    func(event);
  };
}
function stopPropagation() {
  var func = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : noop;
  return function (event) {
    event.stopPropagation();
    func(event);
  };
}
function onlyOnSelf() {
  var func = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : noop;
  return function (event) {
    if (event.target === event.currentTarget) {
      func(event);
    }
  };
}
function blurTarget() {
  var func = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : noop;
  return function (event) {
    event.currentTarget.blur();
    func(event);
  };
}

/***/ })

})
//# sourceMappingURL=login.js.2ac12da51583f914e0ce.hot-update.js.map