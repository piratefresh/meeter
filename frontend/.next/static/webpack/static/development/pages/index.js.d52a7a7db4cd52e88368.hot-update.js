webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/Categories.js":
/*!**********************************!*\
  !*** ./components/Categories.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\Magnus\\Documents\\webstuff\\slickfit\\Advanced-React\\sick-fits\\frontend\\components\\Categories.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var CategoriesWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "Categories__CategoriesWrapper",
  componentId: "sc-1cstcpi-0"
})(["display:grid;grid-template-columns:repeat(3,1fr);grid-gap:40px;max-width:", ";margin:0 auto;"], function (props) {
  return props.theme.maxWidth;
});
var Category = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
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

var Categories =
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
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(CategoriesWrapper, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        __self: this
      }, CategoriesArr.map(function (category) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Category, {
          key: category.value,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 73
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
          href: {
            pathname: "category",
            query: {
              query: category.value
            }
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 74
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
          src: category.img,
          alt: category.value,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 80
          },
          __self: this
        })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 82
          },
          __self: this
        }, category.value));
      }));
    }
  }]);

  return Categories;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Categories);

/***/ })

})
//# sourceMappingURL=index.js.d52a7a7db4cd52e88368.hot-update.js.map