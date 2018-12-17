module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 37);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("react-apollo");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("graphql-tag");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CURRENT_USER_QUERY; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);


function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  query {\n    me {\n      id\n      email\n      name\n      permissions\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }




var CURRENT_USER_QUERY = graphql_tag__WEBPACK_IMPORTED_MODULE_2___default()(_templateObject());

var User = function User(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_1__["Query"], _extends({}, props, {
    query: CURRENT_USER_QUERY
  }), function (payload) {
    return props.children(payload);
  });
};

/* harmony default export */ __webpack_exports__["b"] = (User);


/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);



var ErrorStyles = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "ErrorMessage__ErrorStyles",
  componentId: "sc-11u5fgj-0"
})(["padding:2rem;background:white;margin:2rem 0;border:1px solid rgba(0,0,0,0.05);border-left:5px solid red;p{margin:0;font-weight:100;}strong{margin-right:1rem;}"]);

var DisplayError = function DisplayError(_ref) {
  var error = _ref.error;
  if (!error || !error.message) return null;

  if (error.networkError && error.networkError.result && error.networkError.result.errors.length) {
    return error.networkError.result.errors.map(function (error, i) {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ErrorStyles, {
        key: i
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        "data-test": "graphql-error"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("strong", null, "Shoot!"), error.message.replace('GraphQL error: ', '')));
    });
  }

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ErrorStyles, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    "data-test": "graphql-error"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("strong", null, "Shoot!"), error.message.replace('GraphQL error: ', '')));
};

DisplayError.defaultProps = {
  error: {}
};
/* harmony default export */ __webpack_exports__["a"] = (DisplayError);

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

var loading = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["keyframes"])(["from{background-position:0 0;}to{background-position:100% 100%;}"]);
var Form = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.form.withConfig({
  displayName: "Form",
  componentId: "sc-1xszr8q-0"
})(["box-shadow:0 0 5px 3px rgba(0,0,0,0.05);background:rgba(0,0,0,0.02);border:5px solid white;padding:20px;font-size:1.5rem;line-height:1.5;font-weight:600;label{display:block;margin-bottom:1rem;}input,textarea,select{width:100%;padding:0.5rem;font-size:1rem;border:1px solid black;&:focus{outline:0;border-color:", ";}}button,input[type='submit']{width:auto;background:red;color:white;border:0;font-size:2rem;font-weight:600;padding:0.5rem 1.2rem;}fieldset{border:0;padding:0;&[disabled]{opacity:0.5;}&::before{height:10px;content:'';display:block;background-image:linear-gradient(to right,#ff3019 0%,#e2b04a 50%,#ff3019 100%);}&[aria-busy='true']::before{background-size:50% auto;animation:", " 0.5s linear infinite;}}"], function (props) {
  return props.theme.red;
}, loading);
Form.displayName = 'Form';
/* harmony default export */ __webpack_exports__["a"] = (Form);

/***/ }),
/* 10 */,
/* 11 */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styles_Form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9);
/* harmony import */ var _ErrorMessage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8);
/* harmony import */ var _User__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7);


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  mutation SIGNIN_MUTATION($email: String!, $password: String!) {\n    signin(email: $email, password: $password) {\n      id\n      email\n      name\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }







var SIGNIN_MUTATION = graphql_tag__WEBPACK_IMPORTED_MODULE_3___default()(_templateObject());

var Signin =
/*#__PURE__*/
function (_Component) {
  _inherits(Signin, _Component);

  function Signin() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Signin);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Signin)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      password: "",
      email: ""
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "saveToState", function (e) {
      _this.setState(_defineProperty({}, e.target.name, e.target.value));
    });

    return _this;
  }

  _createClass(Signin, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_2__["Mutation"], {
        mutation: SIGNIN_MUTATION,
        variables: this.state,
        refetchQueries: [{
          query: _User__WEBPACK_IMPORTED_MODULE_6__[/* CURRENT_USER_QUERY */ "a"]
        }]
      }, function (signup, _ref) {
        var error = _ref.error,
            loading = _ref.loading;
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_styles_Form__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], {
          method: "post",
          onSubmit:
          /*#__PURE__*/
          function () {
            var _ref2 = _asyncToGenerator(
            /*#__PURE__*/
            _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(e) {
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      e.preventDefault();
                      _context.next = 3;
                      return signup();

                    case 3:
                      _this2.setState({
                        email: "",
                        password: ""
                      });

                    case 4:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));

            return function (_x) {
              return _ref2.apply(this, arguments);
            };
          }()
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("fieldset", {
          disabled: loading,
          "aria-busy": loading
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", null, "Sign Into your account"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ErrorMessage__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], {
          error: error
        }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
          htmlFor: "email"
        }, "Email", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
          type: "text",
          name: "email",
          placeholder: "email",
          value: _this2.state.email,
          onChange: _this2.saveToState
        })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
          htmlFor: "password"
        }, "Password", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
          type: "text",
          name: "password",
          placeholder: "password",
          value: _this2.state.password,
          onChange: _this2.saveToState
        })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
          type: "submit"
        }, "Sign In!")));
      });
    }
  }]);

  return Signin;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (Signin);

/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

var CenterMaxWidth = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "CenterMaxWidth",
  componentId: "sc-1qwsocq-0"
})(["max-width:", ";margin:0 auto;"], function (props) {
  return props.theme.maxWidth;
});
/* harmony default export */ __webpack_exports__["a"] = (CenterMaxWidth);

/***/ }),
/* 18 */,
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _User__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7);
/* harmony import */ var _Signin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(16);





var PleaseSignIn = function PleaseSignIn(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_1__["Query"], {
    query: _User__WEBPACK_IMPORTED_MODULE_2__[/* CURRENT_USER_QUERY */ "a"]
  }, function (_ref) {
    var data = _ref.data,
        loading = _ref.loading;
    if (loading) return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Loading...");

    if (!data.me) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Please Sign In Before Continuing"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Signin__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], null));
    }

    return props.children;
  });
};

/* harmony default export */ __webpack_exports__["a"] = (PleaseSignIn);

/***/ }),
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */
/***/ (function(module, exports) {

module.exports = require("react-places-autocomplete");

/***/ }),
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */
/***/ (function(module, exports) {

module.exports = require("react-select");

/***/ }),
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(54);


/***/ }),
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "next/link"
var link_ = __webpack_require__(5);

// EXTERNAL MODULE: external "@babel/runtime/regenerator"
var regenerator_ = __webpack_require__(4);
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator_);

// EXTERNAL MODULE: external "react-apollo"
var external_react_apollo_ = __webpack_require__(2);

// EXTERNAL MODULE: external "graphql-tag"
var external_graphql_tag_ = __webpack_require__(3);
var external_graphql_tag_default = /*#__PURE__*/__webpack_require__.n(external_graphql_tag_);

// EXTERNAL MODULE: external "react-places-autocomplete"
var external_react_places_autocomplete_ = __webpack_require__(25);
var external_react_places_autocomplete_default = /*#__PURE__*/__webpack_require__.n(external_react_places_autocomplete_);

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(11);
var router_default = /*#__PURE__*/__webpack_require__.n(router_);

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(1);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// EXTERNAL MODULE: ./components/styles/Form.js
var Form = __webpack_require__(9);

// EXTERNAL MODULE: ./components/ErrorMessage.js
var ErrorMessage = __webpack_require__(8);

// EXTERNAL MODULE: external "react-select"
var external_react_select_ = __webpack_require__(30);
var external_react_select_default = /*#__PURE__*/__webpack_require__.n(external_react_select_);

// CONCATENATED MODULE: ./components/SelectList.js
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var options = [{
  value: "Games",
  label: "games"
}, {
  value: "Social",
  label: "social"
}, {
  value: "Food & Drink",
  label: "food drink"
}, {
  value: "Sport & Wellness",
  label: "sport & wellness"
}, {
  value: "Business",
  label: "Business"
}, {
  value: "Parties",
  label: "parties"
}];

var SelectList_SelectList =
/*#__PURE__*/
function (_Component) {
  _inherits(SelectList, _Component);

  function SelectList() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, SelectList);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(SelectList)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      selectedOption: null
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleChange", function (selectedOption) {
      _this.setState({
        selectedOption: selectedOption
      });

      console.log("Option selected:", selectedOption);

      _this.props.toggleItem(selectedOption.value);
    });

    return _this;
  }

  _createClass(SelectList, [{
    key: "render",
    value: function render() {
      var selectedOption = this.state.selectedOption;
      return external_react_default.a.createElement("div", null, external_react_default.a.createElement(external_react_select_default.a, {
        onChange: this.handleChange,
        value: selectedOption,
        options: options
      }));
    }
  }]);

  return SelectList;
}(external_react_["Component"]);

/* harmony default export */ var components_SelectList = (SelectList_SelectList);
// EXTERNAL MODULE: ./components/styles/CenterMaxWidth.js
var CenterMaxWidth = __webpack_require__(17);

// CONCATENATED MODULE: ./components/CreateMeeting.js


function CreateMeeting_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { CreateMeeting_typeof = function _typeof(obj) { return typeof obj; }; } else { CreateMeeting_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return CreateMeeting_typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function CreateMeeting_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function CreateMeeting_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function CreateMeeting_createClass(Constructor, protoProps, staticProps) { if (protoProps) CreateMeeting_defineProperties(Constructor.prototype, protoProps); if (staticProps) CreateMeeting_defineProperties(Constructor, staticProps); return Constructor; }

function CreateMeeting_possibleConstructorReturn(self, call) { if (call && (CreateMeeting_typeof(call) === "object" || typeof call === "function")) { return call; } return CreateMeeting_assertThisInitialized(self); }

function CreateMeeting_getPrototypeOf(o) { CreateMeeting_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return CreateMeeting_getPrototypeOf(o); }

function CreateMeeting_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) CreateMeeting_setPrototypeOf(subClass, superClass); }

function CreateMeeting_setPrototypeOf(o, p) { CreateMeeting_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return CreateMeeting_setPrototypeOf(o, p); }

function CreateMeeting_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function CreateMeeting_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  mutation CREATE_ITEM_MUTATION(\n    $title: String!\n    $description: String!\n    $category: String!\n    $image: String\n    $largeImage: String\n    $date: String!\n    $startTime: String!\n    $endTime: String!\n    $lat: Float!\n    $lng: Float!\n    $address: String!\n  ) {\n    createMeeting(\n      title: $title\n      description: $description\n      category: $category\n      image: $image\n      date: $date\n      largeImage: $largeImage\n      startTime: $startTime\n      endTime: $endTime\n      lat: $lat\n      lng: $lng\n      address: $address\n    ) {\n      id\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }











var CREATE_ITEM_MUTATION = external_graphql_tag_default()(_templateObject());
var AutocompleteContainer = external_styled_components_default.a.div.withConfig({
  displayName: "CreateMeeting__AutocompleteContainer",
  componentId: "sc-1jkrndp-0"
})(["border-bottom:honeydew;border-left:honeydew;border-right:honeydew;border-top:1px solid #e6e6e6;box-shadow:0 2px 4px rgba(0,0,0,0.2);border-radius:0 0 2px 2px;"]);

var CreateMeeting_CreateMeeting =
/*#__PURE__*/
function (_Component) {
  CreateMeeting_inherits(CreateMeeting, _Component);

  function CreateMeeting(props) {
    var _this;

    CreateMeeting_classCallCheck(this, CreateMeeting);

    _this = CreateMeeting_possibleConstructorReturn(this, CreateMeeting_getPrototypeOf(CreateMeeting).call(this, props));

    CreateMeeting_defineProperty(CreateMeeting_assertThisInitialized(CreateMeeting_assertThisInitialized(_this)), "handleChange", function (e) {
      // allows us to change state of input
      var _e$target = e.target,
          name = _e$target.name,
          type = _e$target.type,
          value = _e$target.value;
      var val = type === "number" ? parseFloat(value) : value;

      _this.setState(CreateMeeting_defineProperty({}, name, val));
    });

    CreateMeeting_defineProperty(CreateMeeting_assertThisInitialized(CreateMeeting_assertThisInitialized(_this)), "handleChangeAddress", function (address) {
      _this.setState({
        address: address
      });
    });

    CreateMeeting_defineProperty(CreateMeeting_assertThisInitialized(CreateMeeting_assertThisInitialized(_this)), "handleSelect", function (selected) {
      _this.setState({
        address: selected
      });

      Object(external_react_places_autocomplete_["geocodeByAddress"])(selected).then(function (res) {
        return Object(external_react_places_autocomplete_["getLatLng"])(res[0]);
      }).then(function (_ref) {
        var lat = _ref.lat,
            lng = _ref.lng;

        _this.setState({
          lat: lat,
          lng: lng
        });
      }).catch(function (error) {
        return console.error("Error", error);
      });
    });

    CreateMeeting_defineProperty(CreateMeeting_assertThisInitialized(CreateMeeting_assertThisInitialized(_this)), "uploadFile",
    /*#__PURE__*/
    function () {
      var _ref2 = _asyncToGenerator(
      /*#__PURE__*/
      regenerator_default.a.mark(function _callee(e) {
        var files, data, res, file;
        return regenerator_default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                console.log("uploading file..");
                files = e.target.files;
                data = new FormData();
                data.append("file", files[0]);
                data.append("upload_preset", "meeter");
                _context.next = 7;
                return fetch("https://api.cloudinary.com/v1_1/da91pbpmj/image/upload", {
                  method: "POST",
                  body: data
                });

              case 7:
                res = _context.sent;
                _context.next = 10;
                return res.json();

              case 10:
                file = _context.sent;
                console.log(file);

                if (!file.error) {
                  _this.setState({
                    image: file.secure_url,
                    largeImage: file.eager[0].secure_url
                  });
                }

              case 13:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }());

    CreateMeeting_defineProperty(CreateMeeting_assertThisInitialized(CreateMeeting_assertThisInitialized(_this)), "initMap", function () {
      _this.setState({
        gmapsLoaded: true
      });
    });

    _this.state = {
      title: "",
      description: "",
      image: "",
      largeImage: "",
      category: "",
      date: "",
      startTime: "",
      endTime: "",
      address: "",
      lat: "",
      lng: "",
      gmapsLoaded: false
    };
    _this.toggleSelected = _this.toggleSelected.bind(CreateMeeting_assertThisInitialized(CreateMeeting_assertThisInitialized(_this)));
    return _this;
  }

  CreateMeeting_createClass(CreateMeeting, [{
    key: "toggleSelected",
    // Get name of category from dropdown box
    value: function toggleSelected(value, label) {
      this.setState({
        category: value
      });
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      window.initMap = this.initMap;
      var gmapScriptEl = document.createElement("script");
      gmapScriptEl.src = "https://maps.googleapis.com/maps/api/js?key=AIzaSyC-syviZl4VJqqgBlhXxTu4_s3cnXEajDY&libraries=places&callback=initMap";
      document.querySelector("body").insertAdjacentElement("beforeend", gmapScriptEl);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return external_react_default.a.createElement(CenterMaxWidth["a" /* default */], null, external_react_default.a.createElement(external_react_apollo_["Mutation"], {
        mutation: CREATE_ITEM_MUTATION,
        variables: this.state
      }, function (createMeeting, _ref3) {
        var loading = _ref3.loading,
            error = _ref3.error;
        return external_react_default.a.createElement(Form["a" /* default */], {
          "data-test": "form",
          onSubmit:
          /*#__PURE__*/
          function () {
            var _ref4 = _asyncToGenerator(
            /*#__PURE__*/
            regenerator_default.a.mark(function _callee2(e) {
              var res;
              return regenerator_default.a.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      // stop form from submitting
                      e.preventDefault(); // call the mutation

                      _context2.next = 3;
                      return createMeeting();

                    case 3:
                      res = _context2.sent;
                      // change them to the single meeting page
                      router_default.a.push({
                        pathname: "/meeting",
                        query: {
                          id: res.data.createMeeting.id
                        }
                      });

                    case 5:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));

            return function (_x2) {
              return _ref4.apply(this, arguments);
            };
          }()
        }, external_react_default.a.createElement(ErrorMessage["a" /* default */], {
          error: error
        }), external_react_default.a.createElement("h2", null, "Create a Meeting"), external_react_default.a.createElement("fieldset", {
          disabled: loading,
          "aria-busy": loading
        }, external_react_default.a.createElement("label", {
          htmlFor: "file"
        }, "Image", external_react_default.a.createElement("input", {
          type: "file",
          id: "file",
          name: "file",
          placeholder: "Upload an image",
          required: true,
          onChange: _this2.uploadFile
        }), _this2.state.image && external_react_default.a.createElement("img", {
          width: "200",
          src: _this2.state.image,
          alt: "Upload Preview"
        })), external_react_default.a.createElement("label", {
          htmlFor: "title"
        }, "Title", external_react_default.a.createElement("input", {
          type: "text",
          id: "title",
          name: "title",
          placeholder: "Title",
          required: true,
          value: _this2.state.title,
          onChange: _this2.handleChange
        })), external_react_default.a.createElement("label", {
          htmlFor: "Address"
        }, _this2.state.gmapsLoaded && external_react_default.a.createElement(external_react_places_autocomplete_default.a, {
          value: _this2.state.address,
          onChange: _this2.handleChangeAddress,
          onSelect: _this2.handleSelect,
          shouldFetchSuggestions: _this2.state.address.length > 2
        }, function (_ref5) {
          var getInputProps = _ref5.getInputProps,
              suggestions = _ref5.suggestions,
              getSuggestionItemProps = _ref5.getSuggestionItemProps,
              loading = _ref5.loading;
          return external_react_default.a.createElement("div", null, external_react_default.a.createElement("input", getInputProps({
            placeholder: "Search Places ...",
            className: "location-search-input"
          })), external_react_default.a.createElement(AutocompleteContainer, null, loading && external_react_default.a.createElement("div", null, "Loading..."), suggestions.map(function (suggestion) {
            var className = suggestion.active ? "suggestion-item--active" : "suggestion-item"; // inline style for demonstration purpose

            var style = suggestion.active ? {
              backgroundColor: "#fafafa",
              cursor: "pointer"
            } : {
              backgroundColor: "#ffffff",
              cursor: "pointer"
            };
            return external_react_default.a.createElement("div", getSuggestionItemProps(suggestion, {
              className: className,
              style: style
            }), external_react_default.a.createElement("span", null, suggestion.description));
          })));
        })), external_react_default.a.createElement("label", {
          htmlFor: "Category"
        }, external_react_default.a.createElement(components_SelectList, {
          toggleItem: _this2.toggleSelected
        })), external_react_default.a.createElement("label", {
          htmlFor: "date"
        }, "Event Date", external_react_default.a.createElement("input", {
          type: "date",
          id: "date",
          name: "date",
          placeholder: "date",
          required: true,
          value: _this2.state.date,
          onChange: _this2.handleChange
        })), external_react_default.a.createElement("label", {
          htmlFor: "startTime"
        }, "Start Time", external_react_default.a.createElement("input", {
          type: "time",
          id: "startTime",
          name: "startTime",
          placeholder: "startTime",
          required: true,
          value: _this2.state.startTime,
          onChange: _this2.handleChange
        })), external_react_default.a.createElement("label", {
          htmlFor: "endTime"
        }, "End Time", external_react_default.a.createElement("input", {
          type: "time",
          id: "endTime",
          name: "endTime",
          placeholder: "endTime",
          required: true,
          value: _this2.state.endTime,
          onChange: _this2.handleChange
        })), external_react_default.a.createElement("label", {
          htmlFor: "description"
        }, "Description", external_react_default.a.createElement("textarea", {
          id: "description",
          name: "description",
          placeholder: "Enter A Description",
          required: true,
          value: _this2.state.description,
          onChange: _this2.handleChange
        })), external_react_default.a.createElement("button", {
          type: "submit"
        }, "Submit")));
      }));
    }
  }]);

  return CreateMeeting;
}(external_react_["Component"]);

/* harmony default export */ var components_CreateMeeting = (CreateMeeting_CreateMeeting);

// EXTERNAL MODULE: ./components/PleaseSignin.js
var PleaseSignin = __webpack_require__(19);

// CONCATENATED MODULE: ./pages/createevent.js





var createevent_CreateEvent = function CreateEvent(props) {
  return external_react_default.a.createElement("div", null, external_react_default.a.createElement(PleaseSignin["a" /* default */], null, external_react_default.a.createElement(components_CreateMeeting, null)));
};

/* harmony default export */ var createevent = __webpack_exports__["default"] = (createevent_CreateEvent);

/***/ })
/******/ ]);