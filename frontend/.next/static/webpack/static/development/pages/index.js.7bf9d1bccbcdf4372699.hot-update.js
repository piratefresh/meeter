webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/Meetings.js":
/*!********************************!*\
  !*** ./components/Meetings.js ***!
  \********************************/
/*! exports provided: default, ALL_MEETINGS_QUERY */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ALL_MEETINGS_QUERY", function() { return ALL_MEETINGS_QUERY; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-apollo */ "./node_modules/react-apollo/react-apollo.browser.umd.js");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _Meeting__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Meeting */ "./components/Meeting.js");
var _jsxFileName = "C:\\Users\\Magnus\\Documents\\webstuff\\slickfit\\Advanced-React\\sick-fits\\frontend\\components\\Meetings.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  query ALL_MEETINGS_QUERY {\n    meetings {\n      id\n      title\n      description\n      image\n      largeImage\n      startTime\n      endTime\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }






var ALL_MEETINGS_QUERY = graphql_tag__WEBPACK_IMPORTED_MODULE_2___default()(_templateObject());
var Center = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "Meetings__Center",
  componentId: "sc-9apkt1-0"
})(["text-align:center;"]);
var MeetingsList = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "Meetings__MeetingsList",
  componentId: "sc-9apkt1-1"
})(["display:grid;grid-template-columns:1fr 1fr;grid-gap:60px;max-width:", ";margin:0 auto;"], function (props) {
  return props.theme.maxWidth;
});

var Meetings =
/*#__PURE__*/
function (_Component) {
  _inherits(Meetings, _Component);

  function Meetings() {
    _classCallCheck(this, Meetings);

    return _possibleConstructorReturn(this, _getPrototypeOf(Meetings).apply(this, arguments));
  }

  _createClass(Meetings, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Center, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      }, "Meetings!"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_1__["Query"], {
        query: ALL_MEETINGS_QUERY,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }, function (_ref) {
        var data = _ref.data,
            error = _ref.error,
            loading = _ref.loading;
        if (loading) return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 39
          },
          __self: this
        }, "Loading ...");
        if (error) return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 40
          },
          __self: this
        }, error.message); // first we decoustruct our payload, Gets the data from our query

        console.log(data);
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(MeetingsList, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 44
          },
          __self: this
        }, data.meetings.map(function (meeting) {
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Meeting__WEBPACK_IMPORTED_MODULE_4__["default"], {
            meeting: meeting,
            key: meeting.id,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 46
            },
            __self: this
          });
        }));
      }));
    }
  }]);

  return Meetings;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Meetings);


/***/ })

})
//# sourceMappingURL=index.js.7bf9d1bccbcdf4372699.hot-update.js.map