"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ConnectAgreementLink = exports.ConnectAgreementTxt = exports.ConnectAgreementBox = exports.ConnectAgreement = exports.ConnectInputBig = exports.ConnectInput = exports.InputColumn = exports.InputContainer = exports.ConnectLabel = exports.ConnectFormHeader = exports.ConnectForm = exports.ConnectTinySpan = exports.ConnectText = exports.ConnectKeys = exports.ConnectIcon = exports.ConnectSub = exports.ConnectHeader = exports.ConnectColumn2 = exports.ConnectColumn = exports.ConnectContent = exports.ConnectContainer = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject21() {
  var data = _taggedTemplateLiteral(["\n  font-family: \"Inter\", sans-serif;\n  font-weight: 400;\n  color: #d3980f;\n  text-decoration: underline;\n  cursor: pointer;\n  @media screen and (max-width: 980px) {\n    font-size: 12px;\n  }\n"]);

  _templateObject21 = function _templateObject21() {
    return data;
  };

  return data;
}

function _templateObject20() {
  var data = _taggedTemplateLiteral(["\n  font-family: \"Inter\", sans-serif;\n  font-weight: 400;\n  font-size: 0.73vw;\n  color: black;\n  padding-bottom: 1.88vw;\n  @media screen and (max-width: 980px) {\n    font-size: 12px;\n    padding-bottom: 15px;\n  }\n"]);

  _templateObject20 = function _templateObject20() {
    return data;
  };

  return data;
}

function _templateObject19() {
  var data = _taggedTemplateLiteral(["\n  width: 1.74vw;\n  height: 1.74vw;\n\n  color: #798289;\n  cursor: pointer;\n\n  @media screen and (max-width: 980px) {\n    font-size: 30px;\n  }\n"]);

  _templateObject19 = function _templateObject19() {
    return data;
  };

  return data;
}

function _templateObject18() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: flex-start;\n  justify-content: center;\n  column-gap: 0.78vw;\n"]);

  _templateObject18 = function _templateObject18() {
    return data;
  };

  return data;
}

function _templateObject17() {
  var data = _taggedTemplateLiteral(["\n  padding: 0.5208333333333333vw 0.5208333333333333vw 0.5208333333333333vw\n    0.5208333333333333vw;\n  /* padding is 10px 10px 10px */\n  background: white;\n  font-family: \"Inter\", sans-serif;\n  font-weight: 400;\n  font-size: 0.94vw;\n  /* font-size is 14px */\n  color: #798289;\n  border: 0.015625vw solid #a8a8a8;\n  /* border is 0.3px */\n  border-radius: 1.3020833333333335vw;\n  /* border radius is 25px */\n  margin-bottom: 3.13vw;\n  /* margin-bottom is 15px */\n  width: 100%;\n  height: 5.63vw;\n\n  @media screen and (max-width: 980px) {\n    padding: 10px 10px;\n    font-size: 10px;\n    height: 70px;\n  }\n"]);

  _templateObject17 = function _templateObject17() {
    return data;
  };

  return data;
}

function _templateObject16() {
  var data = _taggedTemplateLiteral(["\n  padding: 0.5208333333333333vw 0.5208333333333333vw 0.5208333333333333vw;\n  /* padding is 10px 10px 10px */\n  background: white;\n  font-family: \"Inter\", sans-serif;\n  font-weight: 400;\n  font-size: 0.94vw;\n  color: #798289;\n  border: 0.015625vw solid #a8a8a8;\n  /* border is 0.3px */\n  border-radius: 1.3020833333333335vw;\n  /* border radius is 25px */\n  width: 14.89vw;\n  height: 3.54vw;\n  /* width is 250px */\n  margin-bottom: 1.72vw;\n  /* margin-left: 10px; */\n  /* margin bottom is 15px */\n  @media screen and (max-width: 980px) {\n    padding: 5px 10px;\n    font-size: 10px;\n    border: 1px solid #a8a8a8;\n    width: 130px;\n    margin-bottom: 10px;\n  }\n"]);

  _templateObject16 = function _templateObject16() {
    return data;
  };

  return data;
}

function _templateObject15() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: flex-start;\n  flex-direction: column;\n  @media screen and (max-width: 980px) {\n    padding-bottom: 10px;\n  }\n"]);

  _templateObject15 = function _templateObject15() {
    return data;
  };

  return data;
}

function _templateObject14() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n"]);

  _templateObject14 = function _templateObject14() {
    return data;
  };

  return data;
}

function _templateObject13() {
  var data = _taggedTemplateLiteral(["\n  font-family: \"Inter\", sans-serif;\n  font-weight: 400;\n  font-size: 0.94vw;\n  /* font-size is 14px */\n  color: black;\n  padding-bottom: 0.26vw;\n  @media screen and (max-width: 980px) {\n    font-size: 13px;\n  }\n"]);

  _templateObject13 = function _templateObject13() {
    return data;
  };

  return data;
}

function _templateObject12() {
  var data = _taggedTemplateLiteral(["\n  font-family: \"Inter\", sans-serif;\n  font-weight: 700;\n  font-size: 2.08vw;\n  /* font-size is 35px */\n  color: black;\n  padding-bottom: 3.44vw;\n  line-height: 2.55vw;\n  /* line-height: 53px; */\n\n  @media screen and (max-width: 980px) {\n    font-size: 17px;\n    padding-bottom: 20px;\n    line-height: 20px;\n  }\n"]);

  _templateObject12 = function _templateObject12() {
    return data;
  };

  return data;
}

function _templateObject11() {
  var data = _taggedTemplateLiteral(["\n  height: 47.66vw;\n  width: 40.84vw;\n  padding: 85px 58px;\n  box-shadow: 0vw 0.26041666666666663vw 0.78125vw lightgray;\n  /* box shadow is 0px 5px 15px */\n  border-radius: 1.3020833333333335vw;\n  /* border radius 25px */\n  background: white;\n\n  @media screen and (max-width: 980px) {\n    padding: 20px 30px;\n    box-shadow: 0px 2px 10px lightgray;\n    border-radius: 25px;\n  }\n"]);

  _templateObject11 = function _templateObject11() {
    return data;
  };

  return data;
}

function _templateObject10() {
  var data = _taggedTemplateLiteral(["\n  font-family: \"Inter\", sans-serif;\n  font-weight: 400;\n  font-size: 0.9375vw;\n  color: #172631;\n  /* font-size is 18px */\n  padding-left: 1.3vw;\n  /* padding-left: 40px; */\n  line-height: 1.25vw;\n  /* line-height: 24px; */\n  width: 18.65vw;\n  @media screen and (max-width: 980px) {\n    font-size: 12px;\n    padding-left: 10px;\n    line-height: 12px;\n  }\n"]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = _taggedTemplateLiteral(["\n  font-family: \"Inter\", sans-serif;\n  font-weight: 700;\n  font-size: 1.25vw;\n  color: #172631;\n  /* font-size is 24px */\n  line-height: 2.083333333333333vw;\n  /* line-height: 40px; */\n  width: 100%;\n  @media screen and (max-width: 980px) {\n    font-size: 13px;\n    line-height: 16px;\n  }\n"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n  padding-bottom: 1.5625vw;\n  /* padding bottom is 30px */\n  /* width is 400px */\n  @media screen and (max-width: 980px) {\n    padding-bottom: 10px;\n  }\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n  max-width: 100%;\n  height: auto;\n\n  @media screen and (max-width: 980px) {\n    width: 14%;\n  }\n\n  @media screen and (max-width: 690px) {\n    width: 10%;\n  }\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  font-family: \"Inter\", sans-serif;\n  font-weight: 400;\n  font-size: 0.9375vw;\n  /* font size is 18px */\n  width: 18.854166666666668vw;\n  /* width: 362px; */\n  padding-bottom: 1.5625vw;\n  /* padding bottom is 30px */\n  line-height: 1.25vw;\n  /* line-height: 24px; */\n  @media screen and (max-width: 980px) {\n    font-size: 15px;\n\n    line-height: 17px;\n    width: 280px;\n  }\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  font-family: \"Inter\", sans-serif;\n  font-weight: 700;\n  font-size: 2.604166666666667vw;\n  /* font size is 50px */\n  padding-bottom: 0.5208333333333333vw;\n  /* padding-bottom: 10px; */\n  line-height: 3.4895833333333335vw;\n  /* line-height: 67px; */\n  @media screen and (max-width: 980px) {\n    font-size: 25px;\n    padding-bottom: 7px;\n    line-height: 30px;\n  }\n  @media screen and (max-width: 690px) {\n    font-size: 20px;\n    padding-bottom: 10px;\n  }\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  width: 66%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  width: 34%;\n  @media screen and (max-width: 690px) {\n    width: 100%;\n    padding-bottom: 20px;\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  @media screen and (max-width: 690px) {\n    flex-direction: column;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  background: #f8f8f3;\n  /* 0px  */\n  padding: 5vw 16.614583333333332vw 10vw 16.614583333333332vw;\n  position: relative;\n  overflow: hidden;\n  z-index: 15;\n\n  @media screen and (max-width: 980px) {\n    padding: 60px 50px;\n  }\n  @media screen and (max-width: 690px) {\n    padding: 50px 20px;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var ConnectContainer = _styledComponents["default"].div(_templateObject());

exports.ConnectContainer = ConnectContainer;

var ConnectContent = _styledComponents["default"].div(_templateObject2());

exports.ConnectContent = ConnectContent;

var ConnectColumn = _styledComponents["default"].div(_templateObject3());

exports.ConnectColumn = ConnectColumn;

var ConnectColumn2 = _styledComponents["default"].div(_templateObject4());

exports.ConnectColumn2 = ConnectColumn2;

var ConnectHeader = _styledComponents["default"].h2(_templateObject5());

exports.ConnectHeader = ConnectHeader;

var ConnectSub = _styledComponents["default"].p(_templateObject6());

exports.ConnectSub = ConnectSub;

var ConnectIcon = _styledComponents["default"].img(_templateObject7());

exports.ConnectIcon = ConnectIcon;

var ConnectKeys = _styledComponents["default"].div(_templateObject8());

exports.ConnectKeys = ConnectKeys;

var ConnectText = _styledComponents["default"].div(_templateObject9());

exports.ConnectText = ConnectText;

var ConnectTinySpan = _styledComponents["default"].div(_templateObject10());

exports.ConnectTinySpan = ConnectTinySpan;

var ConnectForm = _styledComponents["default"].form(_templateObject11());

exports.ConnectForm = ConnectForm;

var ConnectFormHeader = _styledComponents["default"].h2(_templateObject12());

exports.ConnectFormHeader = ConnectFormHeader;

var ConnectLabel = _styledComponents["default"].label(_templateObject13());

exports.ConnectLabel = ConnectLabel;

var InputContainer = _styledComponents["default"].div(_templateObject14());

exports.InputContainer = InputContainer;

var InputColumn = _styledComponents["default"].div(_templateObject15());

exports.InputColumn = InputColumn;

var ConnectInput = _styledComponents["default"].input(_templateObject16());

exports.ConnectInput = ConnectInput;

var ConnectInputBig = _styledComponents["default"].input(_templateObject17());

exports.ConnectInputBig = ConnectInputBig;

var ConnectAgreement = _styledComponents["default"].div(_templateObject18());

exports.ConnectAgreement = ConnectAgreement;

var ConnectAgreementBox = _styledComponents["default"].input(_templateObject19());

exports.ConnectAgreementBox = ConnectAgreementBox;

var ConnectAgreementTxt = _styledComponents["default"].p(_templateObject20());

exports.ConnectAgreementTxt = ConnectAgreementTxt;

var ConnectAgreementLink = _styledComponents["default"].span(_templateObject21());

exports.ConnectAgreementLink = ConnectAgreementLink;