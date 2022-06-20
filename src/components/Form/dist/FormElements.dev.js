"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AgreementLink = exports.AgreementTxt = exports.AgreementBox = exports.Agreement = exports.InputBig = exports.Input = exports.InputColumn = exports.InputContainer = exports.Label = exports.FormHeader = exports.FormContainer = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject11() {
  var data = _taggedTemplateLiteral(["\n  font-family: \"Inter\", sans-serif;\n  font-weight: 400;\n  color: #d3980f;\n  text-decoration: underline;\n  cursor: pointer;\n  @media screen and (max-width: 980px) {\n    font-size: 12px;\n  }\n"]);

  _templateObject11 = function _templateObject11() {
    return data;
  };

  return data;
}

function _templateObject10() {
  var data = _taggedTemplateLiteral(["\n  font-family: \"Inter\", sans-serif;\n  font-weight: 400;\n  font-size: 0.73vw;\n  color: black;\n  padding-bottom: 1.88vw;\n  @media screen and (max-width: 980px) {\n    font-size: 12px;\n    padding-bottom: 15px;\n  }\n"]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = _taggedTemplateLiteral(["\n  width: 1.74vw;\n  height: 1.74vw;\n\n  color: #798289;\n  cursor: pointer;\n\n  @media screen and (max-width: 980px) {\n    font-size: 30px;\n  }\n"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: flex-start;\n  justify-content: center;\n  column-gap: 0.78vw;\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n  padding: 0.5208333333333333vw 0.5208333333333333vw 0.5208333333333333vw\n    0.5208333333333333vw;\n  /* padding is 10px 10px 10px */\n  background: white;\n  font-family: \"Inter\", sans-serif;\n  font-weight: 400;\n  font-size: 0.94vw;\n  /* font-size is 14px */\n  color: #798289;\n  border: 0.015625vw solid #a8a8a8;\n  /* border is 0.3px */\n  border-radius: 1.3020833333333335vw;\n  /* border radius is 25px */\n  margin-bottom: 3.13vw;\n  /* margin-bottom is 15px */\n  width: 100%;\n  height: 5.63vw;\n\n  @media screen and (max-width: 980px) {\n    padding: 10px 10px;\n    font-size: 10px;\n    height: 70px;\n  }\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  padding: 0.5208333333333333vw 0.5208333333333333vw 0.5208333333333333vw;\n  /* padding is 10px 10px 10px */\n  background: white;\n  font-family: \"Inter\", sans-serif;\n  font-weight: 400;\n  font-size: 0.94vw;\n  color: #798289;\n  border: 0.015625vw solid #a8a8a8;\n  /* border is 0.3px */\n  border-radius: 1.3020833333333335vw;\n  /* border radius is 25px */\n  width: 14.89vw;\n  height: 3.54vw;\n  /* width is 250px */\n  margin-bottom: 1.72vw;\n  /* margin-left: 10px; */\n  /* margin bottom is 15px */\n  @media screen and (max-width: 980px) {\n    padding: 5px 10px;\n    font-size: 10px;\n    border: 1px solid #a8a8a8;\n    width: 130px;\n    margin-bottom: 10px;\n  }\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: flex-start;\n  flex-direction: column;\n  @media screen and (max-width: 980px) {\n    padding-bottom: 10px;\n  }\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  font-family: \"Inter\", sans-serif;\n  font-weight: 400;\n  font-size: 0.94vw;\n  /* font-size is 14px */\n  color: black;\n  padding-bottom: 0.26vw;\n  @media screen and (max-width: 980px) {\n    font-size: 13px;\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  font-family: \"Inter\", sans-serif;\n  font-weight: 700;\n  font-size: 2.08vw;\n  /* font-size is 35px */\n  color: black;\n  padding-bottom: 3.44vw;\n  line-height: 2.55vw;\n  /* line-height: 53px; */\n\n  @media screen and (max-width: 980px) {\n    font-size: 17px;\n    padding-bottom: 20px;\n    line-height: 20px;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  height: 47.66vw;\n  width: 746px;\n  padding: 85px 58px;\n  padding: ", ";\n  /* box shadow is 0px 5px 15px */\n  border-radius: 1.3020833333333335vw;\n  /* border radius 25px */\n  background: white;\n  background: ", ";\n  box-shadow: ", ";\n\n  @media screen and (max-width: 980px) {\n    padding: 20px 30px;\n    box-shadow: 0px 2px 10px lightgray;\n    border-radius: 25px;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var FormContainer = _styledComponents["default"].form(_templateObject(), function (_ref) {
  var secondary = _ref.secondary;
  return secondary ? "55px 58px" : "85px 58px";
}, function (_ref2) {
  var secondary = _ref2.secondary;
  return secondary ? "#f5f2e9" : "white";
}, function (_ref3) {
  var secondary = _ref3.secondary;
  return secondary ? "" : "0px 4px 50px #EDE6D3";
});

exports.FormContainer = FormContainer;

var FormHeader = _styledComponents["default"].h2(_templateObject2());

exports.FormHeader = FormHeader;

var Label = _styledComponents["default"].label(_templateObject3());

exports.Label = Label;

var InputContainer = _styledComponents["default"].div(_templateObject4());

exports.InputContainer = InputContainer;

var InputColumn = _styledComponents["default"].div(_templateObject5());

exports.InputColumn = InputColumn;

var Input = _styledComponents["default"].input(_templateObject6());

exports.Input = Input;

var InputBig = _styledComponents["default"].input(_templateObject7());

exports.InputBig = InputBig;

var Agreement = _styledComponents["default"].div(_templateObject8());

exports.Agreement = Agreement;

var AgreementBox = _styledComponents["default"].input(_templateObject9());

exports.AgreementBox = AgreementBox;

var AgreementTxt = _styledComponents["default"].p(_templateObject10());

exports.AgreementTxt = AgreementTxt;

var AgreementLink = _styledComponents["default"].span(_templateObject11());

exports.AgreementLink = AgreementLink;