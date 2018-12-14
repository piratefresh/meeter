webpackHotUpdate("static\\development\\pages\\createevent.js",{

/***/ "./components/CreateMeeting.js":
/*!*************************************!*\
  !*** ./components/CreateMeeting.js ***!
  \*************************************/
/*! exports provided: default, CREATE_ITEM_MUTATION */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CREATE_ITEM_MUTATION", function() { return CREATE_ITEM_MUTATION; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-apollo */ "./node_modules/react-apollo/react-apollo.browser.umd.js");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_places_autocomplete__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-places-autocomplete */ "./node_modules/react-places-autocomplete/dist/index.js");
/* harmony import */ var react_places_autocomplete__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_places_autocomplete__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _styles_Form__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./styles/Form */ "./components/styles/Form.js");
/* harmony import */ var _ErrorMessage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ErrorMessage */ "./components/ErrorMessage.js");
/* harmony import */ var _SelectList__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./SelectList */ "./components/SelectList.js");
/* harmony import */ var _styles_CenterMaxWidth__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./styles/CenterMaxWidth */ "./components/styles/CenterMaxWidth.js");

var _jsxFileName = "C:\\Users\\Magnus\\Documents\\webstuff\\slickfit\\Advanced-React\\sick-fits\\frontend\\components\\CreateMeeting.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

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
  var data = _taggedTemplateLiteral(["\n  mutation CREATE_ITEM_MUTATION(\n    $title: String!\n    $description: String!\n    $category: String!\n    $image: String\n    $largeImage: String\n    $startTime: String!\n    $endTime: String!\n    $lat: Float!\n    $lng: Float!\n    $address: String!\n  ) {\n    createMeeting(\n      title: $title\n      description: $description\n      category: $category\n      image: $image\n      largeImage: $largeImage\n      startTime: $startTime\n      endTime: $endTime\n      lat: $lat\n      lng: $lng\n      address: $address\n    ) {\n      id\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }











var CREATE_ITEM_MUTATION = graphql_tag__WEBPACK_IMPORTED_MODULE_3___default()(_templateObject());
var AutocompleteContainer = styled_components__WEBPACK_IMPORTED_MODULE_6__["default"].div.withConfig({
  displayName: "CreateMeeting__AutocompleteContainer",
  componentId: "sc-1jkrndp-0"
})(["border-bottom:honeydew;border-left:honeydew;border-right:honeydew;border-top:1px solid #e6e6e6;box-shadow:0 2px 4px rgba(0,0,0,0.2);border-radius:0 0 2px 2px;"]);

var CreateMeeting =
/*#__PURE__*/
function (_Component) {
  _inherits(CreateMeeting, _Component);

  function CreateMeeting(props) {
    var _this;

    _classCallCheck(this, CreateMeeting);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(CreateMeeting).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleChange", function (e) {
      // allows us to change state of input
      var _e$target = e.target,
          name = _e$target.name,
          type = _e$target.type,
          value = _e$target.value;
      var val = type === "number" ? parseFloat(value) : value;

      _this.setState(_defineProperty({}, name, val));
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleChangeAddress", function (address) {
      _this.setState({
        address: address
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleSelect", function (selected) {
      _this.setState({
        address: selected
      });

      Object(react_places_autocomplete__WEBPACK_IMPORTED_MODULE_4__["geocodeByAddress"])(selected).then(function (res) {
        return Object(react_places_autocomplete__WEBPACK_IMPORTED_MODULE_4__["getLatLng"])(res[0]);
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

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "uploadFile",
    /*#__PURE__*/
    function () {
      var _ref2 = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(e) {
        var files, data, res, file;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
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

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "initMap", function () {
      _this.setState({
        gmapsLoaded: true
      });
    });

    _this.state = {
      title: "dance party",
      description: "a cool dance party",
      image: "party.jpg",
      largeImage: "",
      category: "",
      startTime: "",
      endTime: "",
      address: "",
      lat: "",
      lng: "",
      gmapsLoaded: false
    };
    _this.toggleSelected = _this.toggleSelected.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(CreateMeeting, [{
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

      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_styles_CenterMaxWidth__WEBPACK_IMPORTED_MODULE_10__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 143
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_2__["Mutation"], {
        mutation: CREATE_ITEM_MUTATION,
        variables: this.state,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 144
        },
        __self: this
      }, function (createMeeting, _ref3) {
        var loading = _ref3.loading,
            error = _ref3.error;
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_styles_Form__WEBPACK_IMPORTED_MODULE_7__["default"], {
          onSubmit:
          /*#__PURE__*/
          function () {
            var _ref4 = _asyncToGenerator(
            /*#__PURE__*/
            _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(e) {
              var res;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
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
                      console.log(res);
                      next_router__WEBPACK_IMPORTED_MODULE_5___default.a.push({
                        pathname: "/meeting",
                        query: {
                          id: res.data.createMeeting.id
                        }
                      });

                    case 6:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));

            return function (_x2) {
              return _ref4.apply(this, arguments);
            };
          }(),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 146
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ErrorMessage__WEBPACK_IMPORTED_MODULE_8__["default"], {
          error: error,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 160
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 161
          },
          __self: this
        }, "Create a Meeting"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("fieldset", {
          disabled: loading,
          "aria-busy": loading,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 162
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
          htmlFor: "file",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 163
          },
          __self: this
        }, "Image", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
          type: "file",
          id: "file",
          name: "file",
          placeholder: "Upload an image",
          required: true,
          onChange: _this2.uploadFile,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 165
          },
          __self: this
        }), _this2.state.image && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
          width: "200",
          src: _this2.state.image,
          alt: "Upload Preview",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 174
          },
          __self: this
        })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
          htmlFor: "title",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 182
          },
          __self: this
        }, "Title", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
          type: "text",
          id: "title",
          name: "title",
          placeholder: "Title",
          required: true,
          value: _this2.state.title,
          onChange: _this2.handleChange,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 184
          },
          __self: this
        })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
          htmlFor: "Address",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 194
          },
          __self: this
        }, _this2.state.gmapsLoaded && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_places_autocomplete__WEBPACK_IMPORTED_MODULE_4___default.a, {
          value: _this2.state.address,
          onChange: _this2.handleChangeAddress,
          onSelect: _this2.handleSelect,
          shouldFetchSuggestions: _this2.state.address.length > 2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 197
          },
          __self: this
        }, function (_ref5) {
          var getInputProps = _ref5.getInputProps,
              suggestions = _ref5.suggestions,
              getSuggestionItemProps = _ref5.getSuggestionItemProps,
              loading = _ref5.loading;
          return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 209
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", _extends({}, getInputProps({
            placeholder: "Search Places ...",
            className: "location-search-input"
          }), {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 210
            },
            __self: this
          })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(AutocompleteContainer, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 216
            },
            __self: this
          }, loading && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 217
            },
            __self: this
          }, "Loading..."), suggestions.map(function (suggestion) {
            var className = suggestion.active ? "suggestion-item--active" : "suggestion-item"; // inline style for demonstration purpose

            var style = suggestion.active ? {
              backgroundColor: "#fafafa",
              cursor: "pointer"
            } : {
              backgroundColor: "#ffffff",
              cursor: "pointer"
            };
            return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", _extends({}, getSuggestionItemProps(suggestion, {
              className: className,
              style: style
            }), {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 233
              },
              __self: this
            }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 239
              },
              __self: this
            }, suggestion.description));
          })));
        })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
          htmlFor: "Category",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 250
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_SelectList__WEBPACK_IMPORTED_MODULE_9__["default"], {
          toggleItem: _this2.toggleSelected,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 251
          },
          __self: this
        })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
          htmlFor: "startTime",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 254
          },
          __self: this
        }, "Start Time", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
          type: "time",
          id: "startTime",
          name: "startTime",
          placeholder: "startTime",
          required: true,
          value: _this2.state.startTime,
          onChange: _this2.handleChange,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 256
          },
          __self: this
        })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
          htmlFor: "endTime",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 267
          },
          __self: this
        }, "End Time", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
          type: "time",
          id: "endTime",
          name: "endTime",
          placeholder: "endTime",
          required: true,
          value: _this2.state.endTime,
          onChange: _this2.handleChange,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 269
          },
          __self: this
        })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
          htmlFor: "description",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 280
          },
          __self: this
        }, "Description", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("textarea", {
          id: "description",
          name: "description",
          placeholder: "Enter A Description",
          required: true,
          value: _this2.state.description,
          onChange: _this2.handleChange,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 282
          },
          __self: this
        })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
          type: "submit",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 291
          },
          __self: this
        }, "Submit")));
      }));
    }
  }]);

  return CreateMeeting;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (CreateMeeting);


/***/ }),

/***/ "./components/styles/CenterMaxWidth.js":
/*!*********************************************!*\
  !*** ./components/styles/CenterMaxWidth.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

var CenterMaxWidth = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "CenterMaxWidth",
  componentId: "sc-1qwsocq-0"
})(["max-width:", ";margin:0 auto;"], function (props) {
  return props.theme.maxWidth;
});
/* harmony default export */ __webpack_exports__["default"] = (CenterMaxWidth);

/***/ })

})
//# sourceMappingURL=createevent.js.8a70d3aa1078c7e72fd1.hot-update.js.map