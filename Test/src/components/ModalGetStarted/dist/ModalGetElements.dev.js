"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GetButtonImg2 = exports.GetButtonImg1 = exports.AccordionWrapper = exports.GetButtonIcon = exports.GetButtonText = exports.GetButton = exports.GetMenu = exports.GetItem = exports.GetNavbar = exports.GetHeader = exports.GetColumn2 = exports.GetColumn = exports.GetContainer = exports.XPic = exports.GetBackground = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject15() {
  var data = _taggedTemplateLiteral(["\n  display: block;\n  width: 60px;\n  z-index: 1;\n"]);

  _templateObject15 = function _templateObject15() {
    return data;
  };

  return data;
}

function _templateObject14() {
  var data = _taggedTemplateLiteral(["\n  display: block;\n  z-index: 1;\n"]);

  _templateObject14 = function _templateObject14() {
    return data;
  };

  return data;
}

function _templateObject13() {
  var data = _taggedTemplateLiteral(["\n  opacity: ", ";\n  display: ", ";\n  transition: 0.7s all ease;\n"]);

  _templateObject13 = function _templateObject13() {
    return data;
  };

  return data;
}

function _templateObject12() {
  var data = _taggedTemplateLiteral(["\n  height: auto;\n  position: relative;\n"]);

  _templateObject12 = function _templateObject12() {
    return data;
  };

  return data;
}

function _templateObject11() {
  var data = _taggedTemplateLiteral(["\n  /* 0 20px */\n  font-family: \"Inter\", sans-serif;\n  font-weight: 18px;\n  font-weight: 500;\n  color: #2b91e3;\n"]);

  _templateObject11 = function _templateObject11() {
    return data;
  };

  return data;
}

function _templateObject10() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  /* height is 63px */\n  padding: 0px 13px;\n  background: #f0f0ec;\n  border: 0.20000000298023224px solid #2989d7;\n  border-radius: 1.3vw;\n  /* border radius is 25px */\n  width: 474px;\n  /* width: 250px; */\n  height: 81px;\n  /* height: 63px; */\n  cursor: pointer;\n  overflow: hidden;\n  position: relative;\n"]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = _taggedTemplateLiteral(["\n  font-family: \"Inter\", sans-serif;\n  font-weight: 500;\n  font-size: 15px;\n  color: ", ";\n  padding: 10px 15px;\n  border-radius: 25px;\n  background: ", ";\n  text-align: center;\n  cursor: pointer;\n  transition: 0.7s all ease;\n"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n  padding: 0px 10px;\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n  padding-bottom: 45px;\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  color: black;\n  font-family: \"Inter\", sans-serif;\n  font-weight: 700;\n  font-size: 36px;\n  padding-bottom: 45px;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  width: 63%;\n  height: 100%;\n  margin: auto;\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  width: 37%;\n  height: 100%;\n  display: flex;\n  align-items: flex-start;\n  justify-content: center;\n  flex-direction: column;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  padding: 83px 318px;\n  height: 100%;\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  position: absolute;\n  top: 30px;\n  right: 60px;\n  cursor: pointer;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  height: 100vh;\n  background: #f8f8f3;\n  position: fixed;\n  z-index: 25;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var GetBackground = _styledComponents["default"].div(_templateObject());

exports.GetBackground = GetBackground;

var XPic = _styledComponents["default"].img(_templateObject2());

exports.XPic = XPic;

var GetContainer = _styledComponents["default"].div(_templateObject3());

exports.GetContainer = GetContainer;

var GetColumn = _styledComponents["default"].div(_templateObject4());

exports.GetColumn = GetColumn;

var GetColumn2 = _styledComponents["default"].div(_templateObject5());

exports.GetColumn2 = GetColumn2;

var GetHeader = _styledComponents["default"].h2(_templateObject6());

exports.GetHeader = GetHeader;

var GetNavbar = _styledComponents["default"].div(_templateObject7());

exports.GetNavbar = GetNavbar;

var GetItem = _styledComponents["default"].div(_templateObject8());

exports.GetItem = GetItem;

var GetMenu = _styledComponents["default"].div(_templateObject9(), function (_ref) {
  var highlight = _ref.highlight;
  return highlight ? "black" : "#008DFF";
}, function (_ref2) {
  var highlight = _ref2.highlight;
  return highlight ? "#FFC32F" : "";
});

exports.GetMenu = GetMenu;

var GetButton = _styledComponents["default"].button(_templateObject10());

exports.GetButton = GetButton;

var GetButtonText = _styledComponents["default"].p(_templateObject11());

exports.GetButtonText = GetButtonText;

var GetButtonIcon = _styledComponents["default"].div(_templateObject12());

exports.GetButtonIcon = GetButtonIcon;

var AccordionWrapper = _styledComponents["default"].div(_templateObject13(), function (_ref3) {
  var hide = _ref3.hide;
  return hide ? "1" : "0";
}, function (_ref4) {
  var hide = _ref4.hide;
  return hide ? "block" : "none";
});

exports.AccordionWrapper = AccordionWrapper;

var GetButtonImg1 = _styledComponents["default"].img(_templateObject14());

exports.GetButtonImg1 = GetButtonImg1;

var GetButtonImg2 = _styledComponents["default"].img(_templateObject15());

exports.GetButtonImg2 = GetButtonImg2;