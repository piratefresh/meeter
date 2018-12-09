webpackHotUpdate("static\\development\\pages\\category.js",{

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
/* harmony import */ var react_infinite_scroller__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-infinite-scroller */ "./node_modules/react-infinite-scroller/index.js");
/* harmony import */ var react_infinite_scroller__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_infinite_scroller__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _Meeting__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Meeting */ "./components/Meeting.js");
/* harmony import */ var _GoogleMaps__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./GoogleMaps */ "./components/GoogleMaps.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../config */ "./config.js");
var _jsxFileName = "C:\\Users\\Magnus\\Documents\\webstuff\\slickfit\\Advanced-React\\sick-fits\\frontend\\components\\Meetings.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  query ALL_MEETINGS_QUERY($skip: Int!, $first: Int) {\n    meetings(first: $first, skip: $skip, orderBy: createdAt_DESC) {\n      id\n      title\n      description\n      image\n      largeImage\n      startTime\n      endTime\n      lat\n      lng\n    }\n    meetingsConnection {\n      pageInfo {\n        hasNextPage\n        endCursor\n      }\n      edges {\n        cursor\n      }\n      aggregate {\n        count\n      }\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }









var ALL_MEETINGS_QUERY = graphql_tag__WEBPACK_IMPORTED_MODULE_2___default()(_templateObject());
var Center = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div.withConfig({
  displayName: "Meetings__Center",
  componentId: "sc-9apkt1-0"
})(["text-align:center;"]);
var Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div.withConfig({
  displayName: "Meetings__Wrapper",
  componentId: "sc-9apkt1-1"
})([""]);
var MeetingsList = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div.withConfig({
  displayName: "Meetings__MeetingsList",
  componentId: "sc-9apkt1-2"
})(["display:grid;grid-template-columns:repeat(3,1fr);grid-gap:40px;max-width:", ";margin:0 auto;cursor:pointer;"], function (props) {
  return props.theme.maxWidth;
});

var Meetings =
/*#__PURE__*/
function (_Component) {
  _inherits(Meetings, _Component);

  function Meetings(props) {
    var _this;

    _classCallCheck(this, Meetings);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Meetings).call(this, props));
    _this.state = {
      hasMore: true
    };
    return _this;
  }

  _createClass(Meetings, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Center, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        },
        __self: this
      }, "Meetings!"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_1__["Query"], {
        query: ALL_MEETINGS_QUERY,
        variables: {
          skip: 0,
          first: 6
        },
        fetchPolicy: "network-only",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        },
        __self: this
      }, function (_ref) {
        var data = _ref.data,
            error = _ref.error,
            loading = _ref.loading,
            fetchMore = _ref.fetchMore;
        if (loading) return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 72
          },
          __self: this
        }, "Loading ...");
        if (error) return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 73
          },
          __self: this
        }, error.message); // first we decoustruct our payload, Gets the data from our query

        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Wrapper, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 76
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_GoogleMaps__WEBPACK_IMPORTED_MODULE_6__["default"], {
          meetings: data.meetings,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 77
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(MeetingsList, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 78
          },
          __self: this
        }, data.meetings.map(function (meeting) {
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_infinite_scroller__WEBPACK_IMPORTED_MODULE_3___default.a, {
            pageStart: 0,
            hasMore: _this2.state.hasMore,
            loadMore: function loadMore() {
              return fetchMore({
                variables: {
                  skip: data.meetings.length
                },
                updateQuery: function updateQuery(previousResult, _ref2) {
                  var fetchMoreResult = _ref2.fetchMoreResult;
                  {
                    console.log(_this2.state.hasMore);
                  }

                  _this2.setState({
                    hasMore: data.meetingsConnection.aggregate.count > data.meetings.lengthe
                  });

                  {
                    console.log(_this2.state.hasMore);
                  }

                  if (!fetchMoreResult) {
                    hasMore = data.meetingsConnection.aggregate.count > data.meetings.length;
                    return previousResult;
                  }

                  return _objectSpread({}, fetchMoreResult, {
                    meetings: _toConsumableArray(previousResult.meetings).concat(_toConsumableArray(fetchMoreResult.meetings.filter(function (newMeeting) {
                      return !previousResult.meetings.some(function (p) {
                        return p.id === newMeeting.id;
                      });
                    })))
                  });
                }
              });
            },
            loader: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
              className: "loader",
              key: 0,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 127
              },
              __self: this
            }, "Loading ..."),
            __source: {
              fileName: _jsxFileName,
              lineNumber: 81
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Meeting__WEBPACK_IMPORTED_MODULE_5__["default"], {
            meeting: meeting,
            key: meeting.id,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 132
            },
            __self: this
          }));
        })));
      }));
    }
  }]);

  return Meetings;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Meetings);


/***/ })

})
//# sourceMappingURL=category.js.390b8437b29dbfba6465.hot-update.js.map