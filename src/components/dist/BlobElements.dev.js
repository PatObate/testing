"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Blob2 = exports.Blob1 = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  position: absolute;\n  right: -450px;\n  top: 10px;\n  z-index: 2;\n  @media screen and (max-width: 980px) {\n    display: none;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  position: absolute;\n  left: -450px;\n  top: 400px;\n  z-index: 2;\n  @media screen and (max-width: 980px) {\n    display: none;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Blob1 = _styledComponents["default"].div(_templateObject());

exports.Blob1 = Blob1;

var Blob2 = _styledComponents["default"].div(_templateObject2());

exports.Blob2 = Blob2;