webpackHotUpdate("static\\development\\pages\\signup.js",{

/***/ "./components/Auth/SignUp.tsx":
/*!************************************!*\
  !*** ./components/Auth/SignUp.tsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _Styles_colors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Styles/colors */ "./components/Styles/colors.ts");
/* harmony import */ var _Common_helpers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Common/helpers */ "./components/Common/helpers.ts");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-apollo */ "./node_modules/react-apollo/react-apollo.esm.js");



var _jsxFileName = "C:\\Users\\engqu\\Desktop\\projects\\Personal\\snippet\\components\\Auth\\SignUp.tsx";

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__["default"])(["\n  mutation CREATE_USER_MUTATION(\n    $email: String!\n    $name: String!\n    $password: String!\n  ) {\n    createUser(email: $email, name: $name, password: $password) {\n      id\n      email\n      name\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}







var SIGNUP_MUTATION = graphql_tag__WEBPACK_IMPORTED_MODULE_7___default()(_templateObject());

function SignUp() {
  var state = {
    name: "blake",
    email: "a",
    password: "a"
  };
  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_8__["Mutation"], {
    mutation: SIGNUP_MUTATION,
    variables: {
      data: state
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, function (signup, _ref) {
    var error = _ref.error,
        loading = _ref.loading;
    console.log(signup);
    return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(Form, {
      onSubmit: Object(_Common_helpers__WEBPACK_IMPORTED_MODULE_6__["preventDefault"])(
      /*#__PURE__*/
      Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return signup();

              case 2:
                return _context.abrupt("return", _context.sent);

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(Header, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36
      },
      __self: this
    }, "Snippet"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(Input, {
      placeholder: "Email",
      type: "email",
      name: "email",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(Input, {
      placeholder: "Username",
      type: "text",
      name: "username",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(Input, {
      placeholder: "Password",
      type: "password",
      name: "password",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(Button, {
      type: "submit",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40
      },
      __self: this
    }, "Sign Up"));
  });
}

/* harmony default export */ __webpack_exports__["default"] = (SignUp);
var Form = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].form.withConfig({
  displayName: "SignUp__Form",
  componentId: "sc-14ab4m1-0"
})(["padding:40px;background:", ";border-radius:10px;width:100%;max-width:500px;display:grid;grid-gap:30px;justify-items:center;"], _Styles_colors__WEBPACK_IMPORTED_MODULE_5__["colors"].green);
var Header = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].h1.withConfig({
  displayName: "SignUp__Header",
  componentId: "sc-14ab4m1-1"
})(["color:", ";text-transform:uppercase;"], _Styles_colors__WEBPACK_IMPORTED_MODULE_5__["colors"].white);
var Input = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].input.withConfig({
  displayName: "SignUp__Input",
  componentId: "sc-14ab4m1-2"
})(["height:40px;max-width:400px;width:100%;"]);
var Button = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].button.withConfig({
  displayName: "SignUp__Button",
  componentId: "sc-14ab4m1-3"
})(["border-radius:5px;padding:10px 20px;border:none;"]);

/***/ })

})
//# sourceMappingURL=signup.js.07f525996b421b9ae25a.hot-update.js.map