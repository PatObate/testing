"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PopSaleImg = exports.PopSaleIcon = exports.PopSaleTextBold = exports.PopSaleText = exports.PopSaleNotif = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject5() {
  var data = _taggedTemplateLiteral([""]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  @media screen and (max-width: 980px) {\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  font-weight: 800;\n  font-size: 1.2vw;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  /* padding: 0px 36px 0px 20px; */\n  font-family: \"Poppins\", sans-serif;\n  font-weight: 500;\n  font-size: 1.04vw;\n  /* font-size: 20px; */\n  line-height: 0.9895833333333333vw;\n  /* line-height: 19px; */\n  /* 0 10px*/\n  padding-left: 1.041vw;\n  color: #f7263d;\n\n  @media screen and (max-width: 980px) {\n    font-size: 13px;\n    line-height: 16px;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: ", ";\n  align-items: center;\n  background: #f9e2dd;\n  border: none;\n  outline: none;\n  border-radius: 1.3vw;\n  /* border-radius: 25px; */\n  overflow: hidden;\n  /* font size 20px */\n  z-index: 9999;\n  margin-bottom: 3.94vw;\n  /* margin-bottom: 75.56px; */\n  width: 100%;\n  height: 3.59vw;\n  padding: 0;\n  /* padding: 0vw 35.18px; */\n  position: sticky;\n\n  /* padding: 0px 10px; */\n  @media screen and (max-width: 980px) {\n    border-radius: 25px;\n    margin-bottom: 20px;\n  }\n  @media screen and (max-width: 690px) {\n    margin-bottom: 10px;\n    width: auto;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var PopSaleNotif = _styledComponents["default"].div(_templateObject(), function (_ref) {
  var scrollNav = _ref.scrollNav;
  return scrollNav ? "none" : "flex";
});

exports.PopSaleNotif = PopSaleNotif;

var PopSaleText = _styledComponents["default"].p(_templateObject2());

exports.PopSaleText = PopSaleText;

var PopSaleTextBold = _styledComponents["default"].span(_templateObject3());

exports.PopSaleTextBold = PopSaleTextBold;

var PopSaleIcon = _styledComponents["default"].div(_templateObject4());

exports.PopSaleIcon = PopSaleIcon;

var PopSaleImg = _styledComponents["default"].img(_templateObject5());

exports.PopSaleImg = PopSaleImg;