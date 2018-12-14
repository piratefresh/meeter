webpackHotUpdate("static\\development\\pages\\events.js",{

/***/ "./components/GoogleMapWrapper.js":
/*!****************************************!*\
  !*** ./components/GoogleMapWrapper.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_google_maps__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-google-maps */ "./node_modules/react-google-maps/lib/index.js");
/* harmony import */ var react_google_maps__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_google_maps__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var recompose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! recompose */ "./node_modules/recompose/es/Recompose.js");
var _jsxFileName = "C:\\Users\\Magnus\\Documents\\webstuff\\slickfit\\Advanced-React\\sick-fits\\frontend\\components\\GoogleMapWrapper.js",
    _ref,
    _this = undefined;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





var MapStyles = __webpack_require__(/*! ./MapStyles.json */ "./components/MapStyles.json");

var MapWithMeetings = Object(recompose__WEBPACK_IMPORTED_MODULE_2__["compose"])(Object(recompose__WEBPACK_IMPORTED_MODULE_2__["withProps"])({
  googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyC-syviZl4VJqqgBlhXxTu4_s3cnXEajDY&libraries=geometry,drawing,places",
  loadingElement: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      height: "100%"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: undefined
  }),
  containerElement: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: (_ref = {
      position: "sticky"
    }, _defineProperty(_ref, "position", "-webkit-sticky"), _defineProperty(_ref, "top", "0%"), _defineProperty(_ref, "height", "100vh"), _defineProperty(_ref, "width", "100%"), _defineProperty(_ref, "padding", "50px"), _ref),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: undefined
  }),
  mapElement: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      height: "100%"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: undefined
  })
}), Object(recompose__WEBPACK_IMPORTED_MODULE_2__["withStateHandlers"])(function (props) {
  return {
    infoWindows: props.meetings.map(function (p) {
      return {
        isOpen: false
      };
    })
  };
}, {
  onToggleOpen: function onToggleOpen(_ref2) {
    var infoWindows = _ref2.infoWindows;
    return function (selectedIndex) {
      return {
        infoWindows: infoWindows.map(function (iw, i) {
          iw.isOpen = selectedIndex === i;
          return iw;
        })
      };
    };
  }
}), react_google_maps__WEBPACK_IMPORTED_MODULE_1__["withScriptjs"], react_google_maps__WEBPACK_IMPORTED_MODULE_1__["withGoogleMap"])(function (props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_google_maps__WEBPACK_IMPORTED_MODULE_1__["GoogleMap"], {
    defaultZoom: props.zoom,
    defaultCenter: props.center,
    defaultOptions: {
      styles: MapStyles
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, props.meetings && props.meetings.map(function (meeting, i) {
    console.log(meeting);
    var lat = meeting.lat;
    var lng = meeting.lng;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_google_maps__WEBPACK_IMPORTED_MODULE_1__["Marker"], {
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
      animation: props.highlightedMarker === meeting.id ? google.maps.Animation.BOUNCE : "",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61
      },
      __self: this
    });
  }));
});
/* harmony default export */ __webpack_exports__["default"] = (MapWithMeetings);

/***/ })

})
//# sourceMappingURL=events.js.dc5a4b2a89c591e14fca.hot-update.js.map