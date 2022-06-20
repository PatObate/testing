"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Date = exports.Line = exports.CardHeader = exports.WordRow = exports.RedTag = exports.RedRow = exports.BlogCardContainer = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n  font-family: \"Inter\", sans-serif;\n  font-weight: 400;\n  font-size: 0.83vw;\n  /* font-size: 16px; */\n  color: #ffc32f;\n  text-align: center;\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  border-bottom: 0.1vw solid #ffc32f;\n  /* border-bottom: 2px solid #ffc32f; */\n  width: 3.13vw;\n  /* width: 60px; */\n  display: block;\n  margin: auto;\n  margin-bottom: 0.78vw;\n  /* margin-bottom: 15px; */\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  font-family: \"Inter\", sans-serif;\n  font-weight: 600;\n  font-size: 1.3vw;\n  /* font-size: 25px; */\n  line-height: 1.3vw;\n  /* line-height: 25px; */\n  color: white;\n  text-align: center;\n  padding-bottom: 1.56vw;\n  /* padding-bottom: 30px; */\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral([""]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  font-family: \"Inter\", sans-serif;\n  font-weight: 400;\n  font-size: 0.83vw;\n  /* font-size: 16px; */\n  padding: 0.26vw 0.78vw;\n  /* padding: 5px 15px; */\n  background: #f45959;\n  color: white;\n  border-radius: 0.57vw;\n  /* border-radius: 11px; */\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n  width: 100%;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-direction: column;\n  padding: 1.56vw 1.3vw 2.08vw 1.3vw;\n  /* padding: 30px 25px 40px 25px; */\n  height: 29.27vw;\n  /* height: 562px; */\n  width: 21.09vw;\n  /* width: 405px; */\n  border-radius: 1.3vw;\n  z-index: 1;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var BlogCardContainer = _styledComponents["default"].div(_templateObject());

exports.BlogCardContainer = BlogCardContainer;

var RedRow = _styledComponents["default"].div(_templateObject2());

exports.RedRow = RedRow;

var RedTag = _styledComponents["default"].p(_templateObject3());

exports.RedTag = RedTag;

var WordRow = _styledComponents["default"].div(_templateObject4());

exports.WordRow = WordRow;

var CardHeader = _styledComponents["default"].h2(_templateObject5());

exports.CardHeader = CardHeader;

var Line = _styledComponents["default"].div(_templateObject6());

exports.Line = Line;

var Date = _styledComponents["default"].p(_templateObject7());

exports.Date = Date;