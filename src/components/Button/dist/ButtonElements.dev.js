"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ButtonImg2 = exports.ButtonImg1 = exports.ButtonImg = exports.ButtonIcon = exports.ButtonText = exports.StartButton = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  transform: ", ";\n  display: block;\n  position: absolute;\n  z-index: 2;\n  left: 45px;\n  top: 16px;\n  width: 3.13vw;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  width: 3.13vw;\n  display: block;\n  z-index: 1;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  transform: ", ";\n  display: block;\n  z-index: 1;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  padding-right: ", ";\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  /* 0 20px */\n  font-family: \"Inter\", sans-serif;\n  font-weight: ", ";\n  font-size: ", ";\n  color: ", ";\n  @media screen and (max-width: 980px) {\n    font-size: 16px;\n    padding-right: 10px;\n  }\n  @media screen and (max-width: 690px) {\n    font-size: 13px;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  /* height is 63px */\n  padding: ", ";\n  background: ", ";\n  border: none;\n  outline: none;\n  border-radius: 1.3020833333333335vw;\n  /* border radius is 25px */\n  width: ", ";\n  /* width: 250px; */\n  height: ", ";\n  /* height: 63px; */\n  cursor: pointer;\n  overflow: hidden;\n  z-index: 3;\n  position: relative;\n\n  margin-bottom: ", ";\n\n  @media screen and (max-width: 980px) {\n    border-radius: 25px;\n    margin-bottom: ", ";\n    padding: 13px 13px;\n  }\n  @media screen and (max-width: 690px) {\n    margin-bottom: ", ";\n    display: ", ";\n    justify-content: center;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var StartButton = _styledComponents["default"].button(_templateObject(), function (_ref) {
  var secondary = _ref.secondary;
  return secondary ? "1.56vw 1.04vw" : " 0.68vw 0.94vw";
}, function (_ref2) {
  var secondary = _ref2.secondary;
  return secondary ? "#F7F7F7" : "#13ceaa";
}, function (_ref3) {
  var secondary = _ref3.secondary;
  return secondary ? "23.18vw" : "13.02vw";
}, function (_ref4) {
  var secondary = _ref4.secondary;
  return secondary ? "4.84vw" : " 3.28vw";
}, function (_ref5) {
  var low = _ref5.low;
  return low ? "0vw" : "10.1vw";
}, function (_ref6) {
  var low = _ref6.low;
  return low ? "0px" : "50px";
}, function (_ref7) {
  var low = _ref7.low;
  return low ? "0px" : "20px";
}, function (_ref8) {
  var view = _ref8.view;
  return view ? "none" : "";
});

exports.StartButton = StartButton;

var ButtonText = _styledComponents["default"].p(_templateObject2(), function (_ref9) {
  var medium = _ref9.medium;
  return medium ? "500" : "400";
}, function (_ref10) {
  var small = _ref10.small;
  return small ? "0.94vw" : " 1.1vw";
}, function (_ref11) {
  var blue = _ref11.blue;
  return blue ? "#2B91E3" : "white";
});

exports.ButtonText = ButtonText;

var ButtonIcon = _styledComponents["default"].div(_templateObject3(), function (_ref12) {
  var secondary = _ref12.secondary;
  return secondary ? "20px" : "0px";
});

exports.ButtonIcon = ButtonIcon;

var ButtonImg = _styledComponents["default"].img(_templateObject4(), function (_ref13) {
  var secondary = _ref13.secondary;
  return secondary ? "rotate(180deg)" : "none";
});

exports.ButtonImg = ButtonImg;

var ButtonImg1 = _styledComponents["default"].img(_templateObject5());

exports.ButtonImg1 = ButtonImg1;

var ButtonImg2 = _styledComponents["default"].img(_templateObject6(), function (_ref14) {
  var secondary = _ref14.secondary;
  return secondary ? "rotate(180deg)" : "none";
});

exports.ButtonImg2 = ButtonImg2;