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
/******/ 	return __webpack_require__(__webpack_require__.s = 40);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ 1:
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),

/***/ 11:
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ 2:
/***/ (function(module, exports) {

module.exports = require("react-apollo");

/***/ }),

/***/ 23:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(1);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// EXTERNAL MODULE: external "next/link"
var link_ = __webpack_require__(5);
var link_default = /*#__PURE__*/__webpack_require__.n(link_);

// CONCATENATED MODULE: ./components/Categories.js
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var CategoriesWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "Categories__CategoriesWrapper",
  componentId: "sc-1cstcpi-0"
})(["display:grid;grid-template-columns:repeat(3,1fr);grid-gap:40px;max-width:", ";margin:0 auto;"], function (props) {
  return props.theme.maxWidth;
});
var Category = external_styled_components_default.a.div.withConfig({
  displayName: "Categories__Category",
  componentId: "sc-1cstcpi-1"
})(["position:relative;cursor:pointer;img{height:600px;}p{color:#fff;font-size:3rem;font-weight:900;position:absolute;top:80%;left:50%;transform:translate(-50%,-50%);}"]);
var CategoriesArr = [{
  value: "Gaming",
  label: "gaming",
  img: "https://res.cloudinary.com/da91pbpmj/image/upload/v1544302690/art-5-desktop-2x.jpg"
}, {
  value: "Social",
  label: "social",
  img: "https://res.cloudinary.com/da91pbpmj/image/upload/v1544299619/party-7-desktop-2x.jpg"
}, {
  value: "Food & Drink",
  label: "food drink",
  img: "https://res.cloudinary.com/da91pbpmj/image/upload/v1544299616/food-3-desktop-2x.jpg"
}, {
  value: "Sport & Wellness",
  label: "sport & wellness",
  img: "https://res.cloudinary.com/da91pbpmj/image/upload/v1544302605/sports-2-desktop-2x.jpg"
}, {
  value: "Business",
  label: "Business",
  img: "https://res.cloudinary.com/da91pbpmj/image/upload/v1544302605/business-6-desktop-2x.jpg"
}, {
  value: "Parties",
  label: "parties",
  img: "https://res.cloudinary.com/da91pbpmj/image/upload/v1544299619/party-7-desktop-2x.jpg"
}];

var Categories_Categories =
/*#__PURE__*/
function (_Component) {
  _inherits(Categories, _Component);

  function Categories() {
    _classCallCheck(this, Categories);

    return _possibleConstructorReturn(this, _getPrototypeOf(Categories).apply(this, arguments));
  }

  _createClass(Categories, [{
    key: "render",
    value: function render() {
      return external_react_default.a.createElement(CategoriesWrapper, null, CategoriesArr.map(function (category) {
        return external_react_default.a.createElement(Category, {
          key: category.value
        }, external_react_default.a.createElement(link_default.a, {
          href: {
            pathname: "category",
            query: {
              query: category.value
            }
          }
        }, external_react_default.a.createElement("img", {
          src: category.img,
          alt: category.value
        })), external_react_default.a.createElement("p", null, category.value));
      }));
    }
  }]);

  return Categories;
}(external_react_["Component"]);

/* harmony default export */ var components_Categories = (Categories_Categories);
// EXTERNAL MODULE: external "graphql-tag"
var external_graphql_tag_ = __webpack_require__(3);

// EXTERNAL MODULE: external "react-apollo"
var external_react_apollo_ = __webpack_require__(2);

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(11);

// CONCATENATED MODULE: ./components/Hero.js
function Hero_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { Hero_typeof = function _typeof(obj) { return typeof obj; }; } else { Hero_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return Hero_typeof(obj); }

function Hero_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Hero_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Hero_createClass(Constructor, protoProps, staticProps) { if (protoProps) Hero_defineProperties(Constructor.prototype, protoProps); if (staticProps) Hero_defineProperties(Constructor, staticProps); return Constructor; }

function Hero_possibleConstructorReturn(self, call) { if (call && (Hero_typeof(call) === "object" || typeof call === "function")) { return call; } return Hero_assertThisInitialized(self); }

function Hero_getPrototypeOf(o) { Hero_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return Hero_getPrototypeOf(o); }

function Hero_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) Hero_setPrototypeOf(subClass, superClass); }

function Hero_setPrototypeOf(o, p) { Hero_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return Hero_setPrototypeOf(o, p); }

function Hero_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







var HeroWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "Hero__HeroWrapper",
  componentId: "sc-1vorxnl-0"
})(["position:relative;max-width:100vw !important;padding:0;margin:0;img{height:500px;width:100%;object-fit:cover;}"]);
var SearchBar = external_styled_components_default.a.div.withConfig({
  displayName: "Hero__SearchBar",
  componentId: "sc-1vorxnl-1"
})(["position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:60vw;height:140px;background:hsl(272.4,32.47%,30.2%);button,input[type=\"submit\"]{width:auto;background:hsl(276,25%,42%);color:white;border:0;font-size:2rem;font-weight:600;padding:0.5rem 1.2rem;}"]);
var SearchOptions = external_styled_components_default.a.div.withConfig({
  displayName: "Hero__SearchOptions",
  componentId: "sc-1vorxnl-2"
})([""]);
var Form = external_styled_components_default.a.div.withConfig({
  displayName: "Hero__Form",
  componentId: "sc-1vorxnl-3"
})(["display:grid;grid-template-columns:3fr 1fr;width:100%;padding:5% 10%;color:#fff;font-weight:700;"]);
var SearchInput = external_styled_components_default.a.input.withConfig({
  displayName: "Hero__SearchInput",
  componentId: "sc-1vorxnl-4"
})(["width:100%;height:4em;&:hover,&:focus{outline:none;}"]);

var Hero_Hero =
/*#__PURE__*/
function (_Component) {
  Hero_inherits(Hero, _Component);

  function Hero() {
    var _getPrototypeOf2;

    var _this;

    Hero_classCallCheck(this, Hero);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Hero_possibleConstructorReturn(this, (_getPrototypeOf2 = Hero_getPrototypeOf(Hero)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(Hero_assertThisInitialized(Hero_assertThisInitialized(_this)), "state", {
      text: "",
      query: ""
    });

    _defineProperty(Hero_assertThisInitialized(Hero_assertThisInitialized(_this)), "handleChange", function (e) {
      // allows us to change state of input
      var _e$target = e.target,
          name = _e$target.name,
          type = _e$target.type,
          value = _e$target.value;
      var val = type === "number" ? parseFloat(value) : value;

      _this.setState(_defineProperty({}, name, val));
    });

    return _this;
  }

  Hero_createClass(Hero, [{
    key: "render",
    value: function render() {
      return external_react_default.a.createElement(HeroWrapper, null, external_react_default.a.createElement("img", {
        src: "https://res.cloudinary.com/da91pbpmj/image/upload/v1544710609/priscilla-du-preez-697322-unsplash.jpg",
        alt: "Search bar and header"
      }), external_react_default.a.createElement(SearchBar, null, external_react_default.a.createElement("span", {
        styles: {
          display: "block"
        }
      }, external_react_default.a.createElement(Form, null, external_react_default.a.createElement(SearchInput, {
        type: "text",
        id: "text",
        name: "text",
        placeholder: "Search for events",
        required: true,
        value: this.state.text,
        onChange: this.handleChange
      }), external_react_default.a.createElement(link_default.a, {
        href: {
          pathname: "search",
          query: {
            query: this.state.text
          }
        }
      }, external_react_default.a.createElement("button", {
        type: "button"
      }, "Search"))))));
    }
  }]);

  return Hero;
}(external_react_["Component"]);

/* harmony default export */ var components_Hero = (Hero_Hero);
// CONCATENATED MODULE: ./pages/index.js




var pages_Home = function Home(props) {
  return external_react_default.a.createElement("div", null, external_react_default.a.createElement(components_Hero, null), external_react_default.a.createElement(components_Categories, null));
};

/* harmony default export */ var pages = __webpack_exports__["default"] = (pages_Home);

/***/ }),

/***/ 3:
/***/ (function(module, exports) {

module.exports = require("graphql-tag");

/***/ }),

/***/ 40:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(23);


/***/ }),

/***/ 5:
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ })

/******/ });