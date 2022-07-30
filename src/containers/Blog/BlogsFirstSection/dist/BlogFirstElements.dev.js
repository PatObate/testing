"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BlogCardWrapper = exports.BlogFirstRow2 = exports.GetMenu = exports.GetItem = exports.BlogFirstNav = exports.BlogFirstHeader = exports.BlogFirstRow1 = exports.BlogFirstContainer = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: center;\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n  margin: auto;\n  width: 75%;\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  font-family: \"Inter\", sans-serif;\n  font-weight: 500;\n  font-size: 0.94vw;\n  color: ", ";\n  background: ", ";\n  padding: 0.78vw 0vw;\n  text-align: center;\n  transition: 0.7s all ease;\n  border-radius: 1.3vw;\n  cursor: pointer;\n  width: 120px;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  padding: 0vw 0.05vw;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  font-family: \"Inter\", sans-serif;\n  font-weight: 700;\n  font-size: 2.6vw;\n  color: black;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 3.13vw 16.614583333333332vw;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  background: #f8f8f2;\n  /* 0px  */\n  padding: 5vw 0vw;\n  /* padding: 0vw 319px; */\n  z-index: 1;\n  position: relative;\n  overflow: hidden;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var BlogFirstContainer = _styledComponents["default"].div(_templateObject());

exports.BlogFirstContainer = BlogFirstContainer;

var BlogFirstRow1 = _styledComponents["default"].div(_templateObject2());

exports.BlogFirstRow1 = BlogFirstRow1;

var BlogFirstHeader = _styledComponents["default"].h2(_templateObject3());

exports.BlogFirstHeader = BlogFirstHeader;

var BlogFirstNav = _styledComponents["default"].div(_templateObject4());

exports.BlogFirstNav = BlogFirstNav;

var GetItem = _styledComponents["default"].div(_templateObject5());

exports.GetItem = GetItem;

var GetMenu = _styledComponents["default"].p(_templateObject6(), function (_ref) {
  var highlight = _ref.highlight;
  return highlight ? "#2680EB" : "black";
}, function (_ref2) {
  var highlight = _ref2.highlight;
  return highlight ? "#F0F0EC" : "";
});

exports.GetMenu = GetMenu;

var BlogFirstRow2 = _styledComponents["default"].div(_templateObject7());

exports.BlogFirstRow2 = BlogFirstRow2;

var BlogCardWrapper = _styledComponents["default"].div(_templateObject8());

exports.BlogCardWrapper = BlogCardWrapper;