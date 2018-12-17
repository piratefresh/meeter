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
/******/ 	return __webpack_require__(__webpack_require__.s = 35);
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

/***/ 10:
/***/ (function(module, exports) {

module.exports = require("react-google-maps");

/***/ }),

/***/ 12:
/***/ (function(module, exports) {

module.exports = require("recompose");

/***/ }),

/***/ 13:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ALL_MEETINGS_QUERY; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_infinite_scroller__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(20);
/* harmony import */ var react_infinite_scroller__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_infinite_scroller__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Meeting__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(14);
/* harmony import */ var _GoogleMaps__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(15);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(18);
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

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  query ALL_MEETINGS_QUERY($skip: Int!, $first: Int) {\n    meetings(first: $first, skip: $skip, orderBy: createdAt_DESC) {\n      id\n      title\n      description\n      image\n      largeImage\n      startTime\n      endTime\n      lat\n      lng\n    }\n    meetingsConnection {\n      pageInfo {\n        hasNextPage\n        endCursor\n      }\n      edges {\n        cursor\n      }\n      aggregate {\n        count\n      }\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }









var ALL_MEETINGS_QUERY = graphql_tag__WEBPACK_IMPORTED_MODULE_2___default()(_templateObject());
var Center = styled_components__WEBPACK_IMPORTED_MODULE_4___default.a.div.withConfig({
  displayName: "Meetings__Center",
  componentId: "sc-9apkt1-0"
})(["text-align:center;"]);
var Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_4___default.a.div.withConfig({
  displayName: "Meetings__Wrapper",
  componentId: "sc-9apkt1-1"
})(["display:grid;grid-template-columns:2fr 1fr;grid-gap:40px;"]);
var MeetingsList = styled_components__WEBPACK_IMPORTED_MODULE_4___default.a.div.withConfig({
  displayName: "Meetings__MeetingsList",
  componentId: "sc-9apkt1-2"
})(["display:grid;grid-template-columns:repeat(2,1fr);grid-gap:40px;max-width:", ";margin:0 auto;cursor:pointer;"], function (props) {
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
      hasMore: true,
      highlightedMarker: null
    };
    _this.highlightMarker = _this.highlightMarker.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(Meetings, [{
    key: "highlightMarker",
    value: function highlightMarker(meetingId) {
      this.setState({
        highlightedMarker: meetingId
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Center, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "Meetings!"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_1__["Query"], {
        query: ALL_MEETINGS_QUERY,
        variables: {
          skip: 0,
          first: 6
        },
        fetchPolicy: "network-only"
      }, function (_ref) {
        var data = _ref.data,
            error = _ref.error,
            loading = _ref.loading,
            fetchMore = _ref.fetchMore;
        if (loading) return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Loading ...");
        if (error) return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, error.message); // first we decoustruct our payload, Gets the data from our query

        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Wrapper, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(MeetingsList, null, data.meetings.map(function (meeting) {
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
                  {}

                  _this2.setState({
                    hasMore: data.meetingsConnection.aggregate.count > data.meetings.lengthe
                  });

                  {}

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
              key: 0
            }, "Loading ...")
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Meeting__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], {
            meeting: meeting,
            key: meeting.id,
            highlightMarker: _this2.highlightMarker
          }));
        })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_GoogleMaps__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"], {
          meetings: data.meetings,
          highlightedMarker: _this2.state.highlightedMarker
        }));
      }));
    }
  }]);

  return Meetings;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["b"] = (Meetings);


/***/ }),

/***/ 14:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "prop-types"
var external_prop_types_ = __webpack_require__(6);

// EXTERNAL MODULE: external "next/link"
var link_ = __webpack_require__(5);
var link_default = /*#__PURE__*/__webpack_require__.n(link_);

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(1);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// CONCATENATED MODULE: ./components/styles/Title.js

var Title = external_styled_components_default.a.h3.withConfig({
  displayName: "Title",
  componentId: "sc-16nq74k-0"
})(["margin:0 1rem;text-align:center;transform:skew(-5deg) rotate(-1deg);margin-top:-3rem;text-shadow:2px 2px 0 rgba(0,0,0,0.1);a{background:", ";display:inline;line-height:1.3;font-size:4rem;text-align:center;color:white;padding:0 1rem;}"], function (props) {
  return props.theme.green;
});
/* harmony default export */ var styles_Title = (Title);
// CONCATENATED MODULE: ./components/styles/ItemStyles.js

var Item = external_styled_components_default.a.div.withConfig({
  displayName: "ItemStyles__Item",
  componentId: "sc-16pk14u-0"
})(["background:white;border:1px solid ", ";box-shadow:", ";position:relative;display:flex;flex-direction:column;height:600px;img{width:100%;height:400px;object-fit:cover;}p{font-size:12px;line-height:2;font-weight:300;flex-grow:1;padding:0 3rem;font-size:1.5rem;}.buttonList{display:grid;width:100%;border-top:1px solid ", ";grid-template-columns:repeat(auto-fit,minmax(100px,1fr));grid-gap:1px;background:", ";& > *{background:white;border:0;font-size:1rem;padding:1rem;}}"], function (props) {
  return props.theme.offWhite;
}, function (props) {
  return props.theme.bs;
}, function (props) {
  return props.theme.lightgrey;
}, function (props) {
  return props.theme.lightgrey;
});
/* harmony default export */ var ItemStyles = (Item);
// CONCATENATED MODULE: ./components/styles/PriceTag.js

var PriceTag = external_styled_components_default.a.span.withConfig({
  displayName: "PriceTag",
  componentId: "nwbk6t-0"
})(["background:", ";transform:rotate(3deg);color:white;font-weight:600;padding:5px;line-height:1;font-size:3rem;display:inline-block;position:absolute;top:-3px;right:-3px;"], function (props) {
  return props.theme.green;
});
/* harmony default export */ var styles_PriceTag = (PriceTag);
// EXTERNAL MODULE: external "react-apollo"
var external_react_apollo_ = __webpack_require__(2);

// EXTERNAL MODULE: external "graphql-tag"
var external_graphql_tag_ = __webpack_require__(3);
var external_graphql_tag_default = /*#__PURE__*/__webpack_require__.n(external_graphql_tag_);

// EXTERNAL MODULE: ./components/Meetings.js
var Meetings = __webpack_require__(13);

// CONCATENATED MODULE: ./components/DeleteMeeting.js
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

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  mutation DELETE_MEETING_MUTATION($id: ID!) {\n    deleteMeeting(id: $id) {\n      id\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }





var DELETE_MEETING_MUTATION = external_graphql_tag_default()(_templateObject());

var DeleteMeeting_DeleteMeeting =
/*#__PURE__*/
function (_Component) {
  _inherits(DeleteMeeting, _Component);

  function DeleteMeeting() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, DeleteMeeting);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(DeleteMeeting)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "update", function (cache, payload) {
      // manually update the cache on the client,
      // so it matches the server
      // read the cache for the meetings we want
      var data = cache.readQuery({
        query: Meetings["a" /* ALL_MEETINGS_QUERY */]
      });
      console.log(data); // filter the deleted meetings out of the page

      data.meetings = data.meetings.filter(function (meeting) {
        return meeting.id !== payload.data.deleteMeeting.id;
      }); // Put meetings back

      cache.writeQuery({
        query: Meetings["a" /* ALL_MEETINGS_QUERY */],
        data: data
      });
    });

    return _this;
  }

  _createClass(DeleteMeeting, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return external_react_default.a.createElement(external_react_apollo_["Mutation"], {
        mutation: DELETE_MEETING_MUTATION,
        variables: {
          id: this.props.id
        },
        update: this.update
      }, function (deleteMeeting, _ref) {
        var error = _ref.error;
        return external_react_default.a.createElement("button", {
          onClick: function onClick() {
            if (confirm("Are you sure you want to delete this meeting?")) {
              deleteMeeting().catch(function (err) {
                alert(err.message);
              });
            }
          }
        }, _this2.props.children);
      });
    }
  }]);

  return DeleteMeeting;
}(external_react_["Component"]);

/* harmony default export */ var components_DeleteMeeting = (DeleteMeeting_DeleteMeeting);
// CONCATENATED MODULE: ./components/Meeting.js
function Meeting_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { Meeting_typeof = function _typeof(obj) { return typeof obj; }; } else { Meeting_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return Meeting_typeof(obj); }

function Meeting_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Meeting_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Meeting_createClass(Constructor, protoProps, staticProps) { if (protoProps) Meeting_defineProperties(Constructor.prototype, protoProps); if (staticProps) Meeting_defineProperties(Constructor, staticProps); return Constructor; }

function Meeting_possibleConstructorReturn(self, call) { if (call && (Meeting_typeof(call) === "object" || typeof call === "function")) { return call; } return Meeting_assertThisInitialized(self); }

function Meeting_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function Meeting_getPrototypeOf(o) { Meeting_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return Meeting_getPrototypeOf(o); }

function Meeting_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) Meeting_setPrototypeOf(subClass, superClass); }

function Meeting_setPrototypeOf(o, p) { Meeting_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return Meeting_setPrototypeOf(o, p); }









var Meeting_Meeting =
/*#__PURE__*/
function (_Component) {
  Meeting_inherits(Meeting, _Component);

  function Meeting() {
    Meeting_classCallCheck(this, Meeting);

    return Meeting_possibleConstructorReturn(this, Meeting_getPrototypeOf(Meeting).apply(this, arguments));
  }

  Meeting_createClass(Meeting, [{
    key: "render",
    value: function render() {
      var _this = this;

      var meeting = this.props.meeting;
      return external_react_default.a.createElement(ItemStyles, {
        onMouseOver: function onMouseOver() {
          return _this.props.highlightMarker(meeting.id);
        }
      }, meeting.image && external_react_default.a.createElement("img", {
        src: meeting.image,
        alt: meeting.title
      }), external_react_default.a.createElement(styles_Title, null, external_react_default.a.createElement(link_default.a, {
        href: {
          pathname: "/meeting",
          query: {
            id: meeting.id
          }
        }
      }, external_react_default.a.createElement("a", null, meeting.title))), external_react_default.a.createElement(styles_PriceTag, null, meeting.startTime, "-", meeting.endTime), external_react_default.a.createElement("p", null, meeting.description), external_react_default.a.createElement("div", {
        className: "buttonList"
      }, external_react_default.a.createElement(link_default.a, {
        href: {
          pathname: "update",
          query: {
            id: meeting.id
          }
        }
      }, external_react_default.a.createElement("a", null, "Edit")), external_react_default.a.createElement("button", null, "Read More"), external_react_default.a.createElement(components_DeleteMeeting, {
        id: meeting.id
      }, "Delete Meeting")));
    }
  }]);

  return Meeting;
}(external_react_["Component"]);

/* harmony default export */ var components_Meeting = __webpack_exports__["a"] = (Meeting_Meeting);

/***/ }),

/***/ 15:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "react-google-maps"
var external_react_google_maps_ = __webpack_require__(10);

// EXTERNAL MODULE: external "recompose"
var external_recompose_ = __webpack_require__(12);

// CONCATENATED MODULE: ./components/GoogleMapWrapper.js
var _this = undefined;





var MapStyles = __webpack_require__(21);

var MapWithMeetings = Object(external_recompose_["compose"])(Object(external_recompose_["withProps"])({
  googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyC-syviZl4VJqqgBlhXxTu4_s3cnXEajDY&libraries=geometry,drawing,places",
  loadingElement: external_react_default.a.createElement("div", {
    style: {
      height: "100%"
    }
  }),
  containerElement: external_react_default.a.createElement("div", {
    style: {
      position: "sticky",
      top: "0%",
      height: "100vh",
      width: "100%",
      padding: "50px"
    }
  }),
  mapElement: external_react_default.a.createElement("div", {
    style: {
      height: "100%"
    }
  })
}), Object(external_recompose_["withStateHandlers"])(function (props) {
  return {
    infoWindows: props.meetings.map(function (p) {
      return {
        isOpen: false
      };
    })
  };
}, {
  onToggleOpen: function onToggleOpen(_ref) {
    var infoWindows = _ref.infoWindows;
    return function (selectedIndex) {
      return {
        infoWindows: infoWindows.map(function (iw, i) {
          iw.isOpen = selectedIndex === i;
          return iw;
        })
      };
    };
  }
}), external_react_google_maps_["withScriptjs"], external_react_google_maps_["withGoogleMap"])(function (props) {
  return external_react_default.a.createElement(external_react_google_maps_["GoogleMap"], {
    defaultZoom: props.zoom,
    defaultCenter: props.center,
    defaultOptions: {
      styles: MapStyles
    }
  }, props.meetings && props.meetings.map(function (meeting, i) {
    console.log(meeting);
    var lat = meeting.lat;
    var lng = meeting.lng;
    return external_react_default.a.createElement(external_react_google_maps_["Marker"], {
      id: meeting.id,
      key: meeting.id,
      position: {
        lat: lat,
        lng: lng
      },
      title: meeting.title,
      onClick: props.onToggleOpen.bind(_this, i),
      icon: props.highlightedMarker === meeting.id ? {
        url: "/static/marker.png"
      } : "",
      animation: props.highlightedMarker === meeting.id ? google.maps.Animation.BOUNCE : ""
    });
  }));
});
/* harmony default export */ var GoogleMapWrapper = (MapWithMeetings);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(1);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// CONCATENATED MODULE: ./components/GoogleMaps.js
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var StickyWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "GoogleMaps__StickyWrapper",
  componentId: "sc-18bd22b-0"
})(["position:relative;"]);

var GoogleMaps_GoogleMaps =
/*#__PURE__*/
function (_Component) {
  _inherits(GoogleMaps, _Component);

  function GoogleMaps() {
    var _this;

    _classCallCheck(this, GoogleMaps);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(GoogleMaps).call(this));
    _this.state = {
      lat: null,
      lng: null,
      zoom: 12,
      loading: true
    };
    return _this;
  }

  _createClass(GoogleMaps, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      navigator.geolocation.getCurrentPosition(function (position) {
        _this2.setState({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
          loading: false
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state = this.state,
          lng = _this$state.lng,
          lat = _this$state.lat;
      console.log(this.props.meetings);
      if (this.state.loading) return external_react_default.a.createElement("p", null, "Loading ...");
      return external_react_default.a.createElement(StickyWrapper, null, external_react_default.a.createElement(GoogleMapWrapper, {
        center: {
          lng: lng,
          lat: lat
        },
        zoom: this.state.zoom,
        meetings: this.props.meetings,
        highlightedMarker: this.props.highlightedMarker
      }));
    }
  }]);

  return GoogleMaps;
}(external_react_["Component"]);

/* harmony default export */ var components_GoogleMaps = __webpack_exports__["a"] = (GoogleMaps_GoogleMaps);

/***/ }),

/***/ 18:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export endpoint */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return prodEndpoint; });
/* unused harmony export perPage */
// This is client side config only - don't put anything in here that shouldn't be public!
var endpoint = "http://localhost:4444";
var prodEndpoint = "https://meeter-production-638bfa5d67.herokuapp.com/";
var perPage = 4;

/***/ }),

/***/ 2:
/***/ (function(module, exports) {

module.exports = require("react-apollo");

/***/ }),

/***/ 20:
/***/ (function(module, exports) {

module.exports = require("react-infinite-scroller");

/***/ }),

/***/ 21:
/***/ (function(module) {

module.exports = [{"featureType":"water","elementType":"geometry","stylers":[{"color":"#e9e9e9"},{"lightness":17}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#f5f5f5"},{"lightness":20}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#ffffff"},{"lightness":17}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#ffffff"},{"lightness":29},{"weight":0.2}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":18}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":16}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#f5f5f5"},{"lightness":21}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#dedede"},{"lightness":21}]},{"elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#ffffff"},{"lightness":16}]},{"elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#333333"},{"lightness":40}]},{"elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#f2f2f2"},{"lightness":19}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#fefefe"},{"lightness":20}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#fefefe"},{"lightness":17},{"weight":1.2}]}];

/***/ }),

/***/ 3:
/***/ (function(module, exports) {

module.exports = require("graphql-tag");

/***/ }),

/***/ 35:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(57);


/***/ }),

/***/ 5:
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ 57:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "graphql-tag"
var external_graphql_tag_ = __webpack_require__(3);
var external_graphql_tag_default = /*#__PURE__*/__webpack_require__.n(external_graphql_tag_);

// EXTERNAL MODULE: external "react-apollo"
var external_react_apollo_ = __webpack_require__(2);

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(1);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// EXTERNAL MODULE: ./components/GoogleMaps.js + 1 modules
var GoogleMaps = __webpack_require__(15);

// EXTERNAL MODULE: ./components/Meeting.js + 4 modules
var Meeting = __webpack_require__(14);

// CONCATENATED MODULE: ./components/Category.js
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  query CATEGORY_EVENTS_QUERY($query: String!) {\n    meetings(where: { category_contains: $query }) {\n      id\n      title\n      lng\n      lat\n      image\n      startTime\n      endTime\n      description\n      category\n      address\n      user {\n        id\n      }\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }







var CategoryStyles = external_styled_components_default.a.div.withConfig({
  displayName: "Category__CategoryStyles",
  componentId: "e3v89o-0"
})(["display:grid;grid-template-columns:repeat(3,1fr);grid-gap:40px;max-width:", ";margin:0 auto;color:black;"], function (props) {
  return props.theme.maxWidth;
});
var CATEGORY_EVENTS_QUERY = external_graphql_tag_default()(_templateObject());
var Wrapper = external_styled_components_default.a.div.withConfig({
  displayName: "Category__Wrapper",
  componentId: "e3v89o-1"
})(["display:grid;grid-template-columns:2fr 1fr;grid-gap:40px;"]);

var Category_Category =
/*#__PURE__*/
function (_Component) {
  _inherits(Category, _Component);

  function Category(props) {
    var _this;

    _classCallCheck(this, Category);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Category).call(this, props));
    _this.state = {
      highlightedMarker: null
    };
    _this.highlightMarker = _this.highlightMarker.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(Category, [{
    key: "highlightMarker",
    value: function highlightMarker(meetingId) {
      this.setState({
        highlightedMarker: meetingId
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return external_react_default.a.createElement(external_react_apollo_["Query"], {
        query: CATEGORY_EVENTS_QUERY,
        variables: {
          query: this.props.query
        }
      }, function (_ref) {
        var error = _ref.error,
            loading = _ref.loading,
            data = _ref.data;
        if (loading) return external_react_default.a.createElement("p", null, "Loading ...");
        if (error) return external_react_default.a.createElement("p", null, error.message); // first we decoustruct our payload, Gets the data from our query

        return external_react_default.a.createElement(Wrapper, null, external_react_default.a.createElement(CategoryStyles, null, data.meetings.map(function (meeting) {
          return external_react_default.a.createElement(Meeting["a" /* default */], {
            meeting: meeting,
            key: meeting.id,
            highlightMarker: _this2.highlightMarker
          });
        })), external_react_default.a.createElement(GoogleMaps["a" /* default */], {
          meetings: data.meetings,
          highlightedMarker: _this2.state.highlightedMarker
        }));
      });
    }
  }]);

  return Category;
}(external_react_["Component"]);

/* harmony default export */ var components_Category = (Category_Category);
// CONCATENATED MODULE: ./pages/category.js



var category_CategoryPage = function CategoryPage(props) {
  return external_react_default.a.createElement("div", null, external_react_default.a.createElement(components_Category, {
    query: props.query.query
  }));
};

/* harmony default export */ var category = __webpack_exports__["default"] = (category_CategoryPage);

/***/ }),

/***/ 6:
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ })

/******/ });