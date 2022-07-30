"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BtnNumber = exports.BtnExpert = exports.NavBtn = exports.NavLinks2 = exports.NavLinks = exports.NavItem = exports.NavMenu = exports.MobileIcon = exports.NavImg = exports.NavLogo = exports.NavSplitter = exports.NavbarContainer = exports.Nav = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _reactScroll = require("react-scroll");

var _reactRouterDom = require("react-router-dom");

var _phonecall = _interopRequireDefault(require("../../svg/phonecall.svg"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject13() {
  var data = _taggedTemplateLiteral(["\n  font-family: \"Poppins\", sans-serif;\n  font-weight: 500;\n  font-size: 1.24vw;\n  color: black;\n  text-align: start;\n"]);

  _templateObject13 = function _templateObject13() {
    return data;
  };

  return data;
}

function _templateObject12() {
  var data = _taggedTemplateLiteral(["\n  font-family: \"Poppins\", sans-serif;\n  font-weight: 500;\n  font-size: 0.83vw;\n  color: #5c5d5c;\n  text-align: start;\n"]);

  _templateObject12 = function _templateObject12() {
    return data;
  };

  return data;
}

function _templateObject11() {
  var data = _taggedTemplateLiteral(["\n  background-image: url(", ");\n  background-size: contain;\n  background-position: top left;\n  background-repeat: no-repeat;\n  background-color: white;\n  padding: 0.47vw 1.25vw 0.47vw 4.43vw;\n  /* padding: 9px 24px 9px 85px; */\n  border-radius: 2.6vw;\n  /* border-radius: 50px 50px 50px 50px; */\n  cursor: pointer;\n  border: 0.05vw solid #e8ca87;\n  height: 3.49vw;\n  /* height: 67px; */\n  width: 14.06vw;\n  /* width: 270px; */\n  @media screen and (max-width: 690px) {\n    display: none;\n  }\n"]);

  _templateObject11 = function _templateObject11() {
    return data;
  };

  return data;
}

function _templateObject10() {
  var data = _taggedTemplateLiteral(["\n  color: black;\n  display: flex;\n  align-items: center;\n  text-decoration: none;\n  /* original padding is 5px */\n  /* 0px 30px */\n  cursor: pointer;\n  height: 100%;\n  font-family: \"Poppins\", sans-serif;\n  font-weight: 500;\n  padding: 0.54vw 1.2vw;\n  border-radius: 1.09vw;\n  background: transparent;\n  transition: 0.7s all ease;\n\n  &.active {\n    background: #ffc32f;\n    transition: 0.7s all ease;\n  }\n"]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = _taggedTemplateLiteral(["\n  color: black;\n  display: flex;\n  align-items: center;\n  text-decoration: none;\n  /* original padding is 5px */\n  /* 0px 30px */\n  cursor: pointer;\n  height: 100%;\n  font-family: \"Poppins\", sans-serif;\n  font-weight: 500;\n  padding: 0.54vw 1.2vw;\n  border-radius: 1.09vw;\n  background: transparent;\n  transition: 0.7s all ease;\n\n  &.active {\n    background: #ffc32f;\n    transition: 0.7s all ease;\n  }\n"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n  padding: 0px 5px;\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  list-style: none;\n  justify-content: center;\n  text-align: center;\n\n  @media screen and (max-width: 690px) {\n    display: none;\n  }\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  display: none;\n\n  @media screen and (max-width: 690px) {\n    display: block;\n    position: absolute;\n    top: 0;\n    right: 0;\n    transform: translate(-100%, 60%);\n    color: #ffc32f;\n    font-size: 1.8rem;\n    cursor: pointer;\n  }\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  height: 0.93vw;\n  width: 15.02;\n  @media screen and (max-width: 960px) {\n    height: 15px;\n  }\n  @media screen and (max-width: 690px) {\n    height: 14px;\n  }\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  justify-self: flex-start;\n  cursor: pointer;\n  /* original font size is 15px */\n  display: flex;\n  align-items: center;\n  width: auto;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  @media screen and (max-width: 690px) {\n    display: none;\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: space-between;\n  height: 4.95vw;\n  width: 100%;\n  padding: 0vw 16.61vw;\n  /* original height is 95px*/\n  /* width: 1283px; */\n  z-index: 1;\n  @media screen and (max-width: 960px) {\n    justify-content: flex-start;\n    height: 95px;\n    padding: 0px 50px;\n  }\n  @media screen and (max-width: 690px) {\n    max-width: 1100px;\n    padding: 0px 20px;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  background: #f8f8f3;\n  height: 4.95vw;\n  /* original height is 95px*/\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 0.78vw;\n  font-weight: 500px;\n  /* original font size is 15px */\n  z-index: 20;\n  position: sticky;\n  line-height: 0.99vw;\n  /* line-height: 19px; */\n  top: ", ";\n  margin-top: -4.95vw;\n  transition: 0.7s all ease;\n\n  @media screen and (max-width: 960px) {\n    transition: 0.8s all ease;\n    height: 95px;\n    font-size: 13px;\n    margin-top: -95px;\n  }\n  @media screen and (max-width: 690px) {\n    height: 80px;\n    font-size: 13px;\n    margin-top: -80px;\n    background: white;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Nav = _styledComponents["default"].nav(_templateObject(), function (_ref) {
  var scrollNav = _ref.scrollNav;
  return scrollNav ? "-300px" : "0px";
});

exports.Nav = Nav;

var NavbarContainer = _styledComponents["default"].div(_templateObject2());

exports.NavbarContainer = NavbarContainer;

var NavSplitter = _styledComponents["default"].div(_templateObject3());

exports.NavSplitter = NavSplitter;
var NavLogo = (0, _styledComponents["default"])(_reactRouterDom.NavLink)(_templateObject4());
exports.NavLogo = NavLogo;

var NavImg = _styledComponents["default"].img(_templateObject5());

exports.NavImg = NavImg;

var MobileIcon = _styledComponents["default"].div(_templateObject6());

exports.MobileIcon = MobileIcon;

var NavMenu = _styledComponents["default"].ul(_templateObject7());

exports.NavMenu = NavMenu;

var NavItem = _styledComponents["default"].li(_templateObject8());

exports.NavItem = NavItem;
var NavLinks = (0, _styledComponents["default"])(_reactScroll.Link)(_templateObject9());
exports.NavLinks = NavLinks;
var NavLinks2 = (0, _styledComponents["default"])(_reactRouterDom.NavLink)(_templateObject10());
exports.NavLinks2 = NavLinks2;

var NavBtn = _styledComponents["default"].nav(_templateObject11(), _phonecall["default"]);

exports.NavBtn = NavBtn;

var BtnExpert = _styledComponents["default"].p(_templateObject12());

exports.BtnExpert = BtnExpert;

var BtnNumber = _styledComponents["default"].p(_templateObject13());

exports.BtnNumber = BtnNumber;