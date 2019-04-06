webpackHotUpdate("static\\development\\pages\\_app.js",{

/***/ "./components/Global/Page.tsx":
/*!************************************!*\
  !*** ./components/Global/Page.tsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Styles_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Styles/helpers */ "./components/Styles/helpers.ts");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _Header_Header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Header/Header */ "./components/Header/Header.tsx");

var _jsxFileName = "C:\\Users\\engqu\\Desktop\\projects\\Personal\\snippet\\components\\Global\\Page.tsx";

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])([" \n  @font-face {\n    font-family: 'radnika-next';\n    src: url('/static/radnikanext-medium-webfont.woff2')\n    format('woff2');\n    font-weight: normal; \n    font-style: normal;\n  }\n  html {\n    box-sizing: border-box;\n    font-size: 10px;\n  }\n  *, *:before, *:after {\n    box-sizing: inherit;\n  }\n  body {\n    padding: 0;\n    margin: 0; \n    font-size: 1.5rem;\n    line-height: 2;\n    font-family: 'radnika-next';\n  }\n  a {\n    text-decoration: none;\n  }\n  button {\n    :hover {\n      cursor: pointer;\n    } \n  }\n  input {\n    border-radius: 5px;\n    border: none;\n    padding: 5px;\n    ::placeholder {\n      color: ", ";\n    }\n  }\n  h1 {\n    margin: 0;\n  }\n  p {\n    margin: 0;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}






function Page(_ref) {
  var children = _ref.children;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_components__WEBPACK_IMPORTED_MODULE_3__["ThemeProvider"], {
    theme: theme,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(StyledPage, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Header_Header__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Inner, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, children), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(GlobalStyle, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (Page);
var theme = {
  lightBlue: "#77C9D4",
  green: "#57BC90",
  darkGreen: "#015249",
  gray: "#A5A5AF",
  white: "#FFF",
  black: "#393939",
  offWhite: "#EDEDED",
  maxWidth: "1200px",
  boxShadow: "0 12px 24px 0 rgba(0,0,0,0.1)"
};
var Inner = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "Page__Inner",
  componentId: "sc-85z5mz-0"
})(["", " max-width:", ";margin:0 auto;padding:2rem;"], _Styles_helpers__WEBPACK_IMPORTED_MODULE_2__["flexCenter"], function (props) {
  return props.theme.maxWidth;
});
var StyledPage = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "Page__StyledPage",
  componentId: "sc-85z5mz-1"
})(["background:", ";color:", ";"], function (props) {
  return props.theme.white;
}, function (props) {
  return props.theme.black;
});
var GlobalStyle = Object(styled_components__WEBPACK_IMPORTED_MODULE_3__["createGlobalStyle"])(_templateObject(), function (props) {
  return props.theme.gray;
});

/***/ })

})
//# sourceMappingURL=_app.js.361a0143b3418c796e46.hot-update.js.map