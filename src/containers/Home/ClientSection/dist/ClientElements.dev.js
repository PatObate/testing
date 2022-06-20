"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ClientButton = exports.ClientColumn = exports.ClientContent = exports.ClientHeader = exports.ClientContainer = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _reactScroll = require("react-scroll");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  padding: 0.9375vw 0.9375vw;\n  /* padding: 18px 58px; */\n  color: white;\n  background: #1d2b36;\n  font-family: \"Inter\", sans-serif;\n  font-weight: 300;\n  font-size: 1.25vw;\n  height: 64px;\n  /* font-size: 24px; */\n  border-radius: 1.3020833333333335vw;\n  /* border-radius: 25px; */\n  text-align: center;\n  cursor: pointer;\n  display: block;\n  margin: auto;\n  width: 250px;\n  z-index: 4;\n  position: relative;\n\n  @media screen and (max-width: 980px) {\n    padding: 10px 30px;\n    font-size: 16px;\n    border-radius: 25px;\n    height: auto;\n  }\n  @media screen and (max-width: 690px) {\n    padding: 10px 15px;\n    font-size: 13px;\n    border-radius: 25px;\n  }\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  margin: auto;\n  z-index: 3;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: relative;\n  transition: 0.7s all ease;\n  &:before {\n    content: \"\";\n    position: absolute;\n    width: 100%;\n    background: ", ";\n    height: 100%;\n    z-index: 4;\n    top: 70px;\n    transition: 0.7s all ease;\n  }\n  @media screen and (max-width: 690px) {\n    flex-direction: column;\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  font-family: \"Inter\", sans-serif;\n  font-weight: 700;\n  color: black;\n  font-size: 2.604166666666667vw;\n  /* font-size: 50px; */\n  padding-bottom: 2.604166666666667vw;\n  /* padding-bottom: 50px; */\n  text-align: center;\n\n  @media screen and (max-width: 980px) {\n    font-size: 25px;\n    padding-bottom: 15px;\n    line-height: 30px;\n  }\n\n  @media screen and (max-width: 690px) {\n    font-size: 20px;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  background: #f8f8f3;\n  /* 0px  */\n  padding: 7vw 16.614583333333332vw;\n  overflow: hidden;\n  transition: 0.7s all ease;\n\n  @media screen and (max-width: 980px) {\n    padding: 0px 50px 60px 50px;\n  }\n  @media screen and (max-width: 690px) {\n    padding: 0px 20px 50px 20px;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var ClientContainer = _styledComponents["default"].div(_templateObject());

exports.ClientContainer = ClientContainer;

var ClientHeader = _styledComponents["default"].h2(_templateObject2());

exports.ClientHeader = ClientHeader;

var ClientContent = _styledComponents["default"].div(_templateObject3(), function (_ref) {
  var scrollNav = _ref.scrollNav;
  return scrollNav ? "transparent" : "transparent linear-gradient(179deg,#ffffff00 0%,#f8f8f3 100%) 0% 3% no-repeat padding-box";
});

exports.ClientContent = ClientContent;

var ClientColumn = _styledComponents["default"].div(_templateObject4());

exports.ClientColumn = ClientColumn;
var ClientButton = (0, _styledComponents["default"])(_reactScroll.Link)(_templateObject5());
exports.ClientButton = ClientButton;