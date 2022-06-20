"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ChatBotTextBold = exports.ChatBotText = exports.ChatBotLogo = exports.ChatBotContainer = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  font-family: \"Inter\", sans-serif;\n  font-weight: 700;\n  font-size: 15px;\n  background: white;\n  color: black;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  font-family: \"Inter\", sans-serif;\n  font-weight: 500;\n  font-size: 15px;\n  background: white;\n  color: black;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  display: block;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  background: white;\n  /* margin-bottom: -4.95vw; */\n  border-radius: 2.19vw;\n  width: 261px;\n  right: 170px;\n  height: 3.43vw;\n  position: fixed;\n  padding: 6px 6px;\n  z-index: 14;\n  display: flex;\n  align-items: center;\n  justify-content: space-around;\n  bottom: 10px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var ChatBotContainer = _styledComponents["default"].div(_templateObject());

exports.ChatBotContainer = ChatBotContainer;

var ChatBotLogo = _styledComponents["default"].img(_templateObject2());

exports.ChatBotLogo = ChatBotLogo;

var ChatBotText = _styledComponents["default"].p(_templateObject3());

exports.ChatBotText = ChatBotText;

var ChatBotTextBold = _styledComponents["default"].span(_templateObject4());

exports.ChatBotTextBold = ChatBotTextBold;