"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FooterIcon = exports.FooterTextF = exports.FooterText = exports.TextContainer = exports.FooterHeader = exports.FooterColumn = exports.FooterWrapper = exports.FooterContainer = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n  font-size: 2.083333333333333vw;\n  /* font-size is 40px */\n  color: white;\n  text-align: center;\n  padding-right: 0.5208333333333333vw;\n  @media screen and (max-width: 980px) {\n    padding-right: 10px;\n    font-size: 40px;\n  }\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n  font-family: \"Inter\", sans-serif;\n  font-weight: 500;\n  font-size: 0.7291666666666666vw;\n  /* font-size is 14px */\n  color: white;\n  color: white;\n  @media screen and (max-width: 980px) {\n    font-size: 13px;\n  }\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  font-family: \"Inter\", sans-serif;\n  font-weight: 500;\n  font-size: 0.7291666666666666vw;\n  /* font-size is 14px */\n  color: white;\n  padding-right: 0.5208333333333333vw;\n  /* padding-right: 10px; */\n  @media screen and (max-width: 980px) {\n    padding-right: 10px;\n    font-size: 13px;\n  }\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: space-evenly;\n  align-items: center;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  padding-bottom: 0.78vw;\n  @media screen and (max-width: 980px) {\n    padding-bottom: 15px;\n    font-size: 16px;\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  @media screen and (max-width: 690px) {\n    padding-bottom: 20px;\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n\n  @media screen and (max-width: 690px) {\n    flex-direction: column;\n    align-items: flex-start;\n  }\n  /* height is 135px */\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  background: #1d2b36;\n  /* 0px  */\n  padding: 3vw 16.614583333333332vw;\n  position: relative;\n  z-index: 15;\n  height: 150px;\n\n  @media screen and (max-width: 980px) {\n    padding: 30px 50px;\n  }\n\n  @media screen and (max-width: 690px) {\n    padding: 20px 20px;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var FooterContainer = _styledComponents["default"].div(_templateObject());

exports.FooterContainer = FooterContainer;

var FooterWrapper = _styledComponents["default"].div(_templateObject2());

exports.FooterWrapper = FooterWrapper;

var FooterColumn = _styledComponents["default"].div(_templateObject3());

exports.FooterColumn = FooterColumn;

var FooterHeader = _styledComponents["default"].img(_templateObject4());

exports.FooterHeader = FooterHeader;

var TextContainer = _styledComponents["default"].div(_templateObject5());

exports.TextContainer = TextContainer;

var FooterText = _styledComponents["default"].p(_templateObject6());

exports.FooterText = FooterText;

var FooterTextF = _styledComponents["default"].p(_templateObject7());

exports.FooterTextF = FooterTextF;

var FooterIcon = _styledComponents["default"].div(_templateObject8());

exports.FooterIcon = FooterIcon;