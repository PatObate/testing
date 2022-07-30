"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FAQMenu = exports.FAQItem = exports.FAQNav = exports.AccordionWrapper = exports.FAQRow2 = exports.FAQRow = exports.FAQContent = exports.FAQHeader = exports.FAQContainer = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject9() {
  var data = _taggedTemplateLiteral(["\n  font-family: \"Inter\", sans-serif;\n  font-weight: 500;\n  font-size: 18px;\n  color: ", ";\n  background: ", ";\n  padding: 15px 38px;\n  text-align: center;\n  transition: 0.7s all ease;\n  border-radius: 25px;\n  cursor: pointer;\n"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n  padding: 5px 0px;\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  position: fixed;\n  top: 220px;\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  opacity: ", ";\n  display: ", ";\n  transition: 0.7s all ease;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  width: 85%;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  width: 15%;\n  position: relative;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  font-family: \"Inter\", sans-serif;\n  font-weight: 700;\n  color: black;\n  font-size: 50px;\n  text-align: center;\n  padding-bottom: 80px;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  background: #f8f8f3;\n  /* 0px  */\n  overflow: hidden;\n  z-index: 10;\n  /* 0px 319px */\n  padding: 5vw 16.61vw;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var FAQContainer = _styledComponents["default"].div(_templateObject());

exports.FAQContainer = FAQContainer;

var FAQHeader = _styledComponents["default"].h2(_templateObject2());

exports.FAQHeader = FAQHeader;

var FAQContent = _styledComponents["default"].div(_templateObject3());

exports.FAQContent = FAQContent;

var FAQRow = _styledComponents["default"].div(_templateObject4());

exports.FAQRow = FAQRow;

var FAQRow2 = _styledComponents["default"].div(_templateObject5());

exports.FAQRow2 = FAQRow2;

var AccordionWrapper = _styledComponents["default"].div(_templateObject6(), function (_ref) {
  var hide = _ref.hide;
  return hide ? "1" : "0";
}, function (_ref2) {
  var hide = _ref2.hide;
  return hide ? "block" : "none";
});

exports.AccordionWrapper = AccordionWrapper;

var FAQNav = _styledComponents["default"].div(_templateObject7());

exports.FAQNav = FAQNav;

var FAQItem = _styledComponents["default"].div(_templateObject8());

exports.FAQItem = FAQItem;

var FAQMenu = _styledComponents["default"].p(_templateObject9(), function (_ref3) {
  var highlight = _ref3.highlight;
  return highlight ? "#2680EB" : "black";
}, function (_ref4) {
  var highlight = _ref4.highlight;
  return highlight ? "#F0F0EC" : "";
});

exports.FAQMenu = FAQMenu;