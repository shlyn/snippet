webpackHotUpdate("static\\development\\pages\\login.js",{

/***/ "./components/Auth/LogIn.tsx":
/*!***********************************!*\
  !*** ./components/Auth/LogIn.tsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _Styles_colors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Styles/colors */ "./components/Styles/colors.ts");
/* harmony import */ var _Common_helpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Common/helpers */ "./components/Common/helpers.ts");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-apollo */ "./node_modules/react-apollo/react-apollo.esm.js");

var _jsxFileName = "C:\\Users\\engqu\\Desktop\\projects\\Personal\\snippet\\components\\Auth\\LogIn.tsx";

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  query LOGIN_QUERY($email: String!, $password: String!) {\n    signup(email: $email, password: $password) {\n      id\n      email\n      username\n      password\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}







var LOGIN_QUERY = graphql_tag__WEBPACK_IMPORTED_MODULE_5___default()(_templateObject());

function LogIn() {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_6__["Query"], {
    mutation: LOGIN_MUTATION,
    variables: {},
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, function () {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Form, {
      onSubmit: Object(_Common_helpers__WEBPACK_IMPORTED_MODULE_4__["preventDefault"])(),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Header, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      },
      __self: this
    }, "Snippet"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Input, {
      placeholder: "Username",
      type: "text",
      name: "username",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Input, {
      placeholder: "Password",
      type: "password",
      name: "password",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Button, {
      type: "submit",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      },
      __self: this
    }, "Log In"));
  });
}

/* harmony default export */ __webpack_exports__["default"] = (LogIn);
var Form = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].form.withConfig({
  displayName: "LogIn__Form",
  componentId: "s3kh84-0"
})(["padding:40px;background:", ";border-radius:10px;width:100%;max-width:500px;display:grid;grid-gap:30px;justify-items:center;"], _Styles_colors__WEBPACK_IMPORTED_MODULE_3__["colors"].green);
var Header = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].h1.withConfig({
  displayName: "LogIn__Header",
  componentId: "s3kh84-1"
})(["color:", ";text-transform:uppercase;"], _Styles_colors__WEBPACK_IMPORTED_MODULE_3__["colors"].white);
var Input = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].input.withConfig({
  displayName: "LogIn__Input",
  componentId: "s3kh84-2"
})(["height:40px;max-width:400px;width:100%;"]);
var Button = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].button.withConfig({
  displayName: "LogIn__Button",
  componentId: "s3kh84-3"
})(["border-radius:5px;padding:10px 20px;border:none;"]);

/***/ })

})
//# sourceMappingURL=login.js.5ff81f0eb0af13fa9076.hot-update.js.map