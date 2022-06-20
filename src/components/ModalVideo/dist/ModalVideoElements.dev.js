"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CloseModalButton = exports.ModalWrapper = exports.Background = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _md = require("react-icons/md");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  cursor: pointer;\n  position: absolute;\n  top: 20px;\n  right: 20px;\n  width: 32px;\n  height: 32px;\n  z-index: 11;\n  color: black;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  width: 800px;\n  height: 500px;\n  height: 500px;\n  background: white;\n  position: relative;\n  z-index: 1;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.8);\n  position: fixed;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: 25;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Background = _styledComponents["default"].div(_templateObject());

exports.Background = Background;

var ModalWrapper = _styledComponents["default"].div(_templateObject2());

exports.ModalWrapper = ModalWrapper;
var CloseModalButton = (0, _styledComponents["default"])(_md.MdClose)(_templateObject3());
exports.CloseModalButton = CloseModalButton;