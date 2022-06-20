"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = require("react");

var _reactRouterDom = require("react-router-dom");

function ScrollToTop(_ref) {
  var history = _ref.history;
  (0, _react.useEffect)(function () {
    var unlisten = history.listen(function () {
      window.scrollTo(0, 0);
    });
    return function () {
      unlisten();
    };
  }, []);
  return null;
}

var _default = (0, _reactRouterDom.withRouter)(ScrollToTop);

exports["default"] = _default;