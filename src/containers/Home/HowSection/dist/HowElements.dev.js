"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CardInfo = exports.CardHeading = exports.CardNumber = exports.Card3 = exports.Card2 = exports.Card1 = exports.HowTinySpan = exports.HowGreenSpan = exports.HowLine = exports.HowSubHeading = exports.SubHeadingContainer = exports.HowHeading = exports.HowColumn = exports.HowContent = exports.HowContainer = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _happyToBeATeam20210901094124Utc = _interopRequireDefault(require("../../../images/happy-to-be-a-team-2021-09-01-09-41-24-utc.png"));

var _eyeglass = _interopRequireDefault(require("../../../images/eyeglass.png"));

var _headphones = _interopRequireDefault(require("../../../images/headphones.png"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject15() {
  var data = _taggedTemplateLiteral(["\n  font-family: \"Inter\", sans-serif;\n  font-weight: 400;\n  color: black;\n  font-size: 0.6770833333333334vw;\n  line-height: 1.09375vw;\n  /* line-height: 21px; */\n  /* font-size 13px*/\n  @media screen and (max-width: 980px) {\n    font-size: 14px;\n    line-height: 16px;\n  }\n"]);

  _templateObject15 = function _templateObject15() {
    return data;
  };

  return data;
}

function _templateObject14() {
  var data = _taggedTemplateLiteral(["\n  font-family: \"Inter\", sans-serif;\n  font-weight: 700;\n  font-size: 1.8229166666666667vw;\n  /* font size 35px */\n  color: black;\n  line-height: 2.7604166666666665vw;\n  /* line-height: 53px; */\n  padding-bottom: 0.328125vw;\n  /* padding-bottom: 6.3px; */\n  @media screen and (max-width: 980px) {\n    font-size: 17px;\n  }\n  @media screen and (max-width: 690px) {\n    padding-bottom: 15px;\n  }\n"]);

  _templateObject14 = function _templateObject14() {
    return data;
  };

  return data;
}

function _templateObject13() {
  var data = _taggedTemplateLiteral(["\n  font-family: \"Inter\", sans-serif;\n  font-weight: 700;\n  font-size: 4.166666666666666vw;\n  /* font-size: 80px; */\n  color: white;\n  padding-bottom: 1.875vw;\n  /* padding-bottom: 36px; */\n  line-height: 5.520833333333333vw;\n  /* line-height: 106px; */\n  @media screen and (max-width: 980px) {\n    font-size: 40px;\n    padding-bottom: 10px;\n    line-height: 50px;\n  }\n\n  @media screen and (max-width: 690px) {\n    padding-bottom: 35px;\n  }\n"]);

  _templateObject13 = function _templateObject13() {
    return data;
  };

  return data;
}

function _templateObject12() {
  var data = _taggedTemplateLiteral(["\n  z-index: 2;\n  background-image: url(", ");\n  background-size: contain;\n  background-position: top center;\n  background-repeat: no-repeat;\n  padding: 6.416666666666666vw 1.0416666666666665vw 2.041666666666667vw\n    1.0416666666666665vw;\n  /* padding: 123.2px 20px 39.2px 20px; */\n  background-color: #75dfc7;\n  border-radius: 1.3020833333333335vw;\n  /* border radius 25px */\n  // box-shadow: 0vw 0.26041666666666663vw 0.78125vw lightgray;\n  /* orig box shadow is 0px 5px 15px */\n  height: 24.322916666666668vw;\n  /* height: 467px; */\n  width: 15.104166666666666vw;\n  /* width: 290px; */\n  z-index: 2;\n  transition: all 0.3s ease-in-out;\n  cursor: pointer;\n  /* width: 290px; */\n\n  &:hover {\n    transition: all 0.3s ease-in-out;\n    transform: translateY(-0.52vw);\n    box-shadow: 0vw 0.21vw 1.56vw #77777729;\n  }\n  @media screen and (max-width: 980px) {\n    padding: 65px 10px 18px 10px;\n    border-radius: 25px;\n    // box-shadow: 0px 2px 10px lightgray;\n    height: 285px;\n    width: 155px;\n  }\n  @media screen and (max-width: 690px) {\n    padding: 130px 20px 50px 20px;\n    width: 250px;\n    height: auto;\n    margin-bottom: 25px;\n  }\n"]);

  _templateObject12 = function _templateObject12() {
    return data;
  };

  return data;
}

function _templateObject11() {
  var data = _taggedTemplateLiteral(["\n  z-index: 2;\n  background-image: url(", ");\n  background-size: contain;\n  background-position: top center;\n  background-repeat: no-repeat;\n  padding: 6.416666666666666vw 1.0416666666666665vw 2.041666666666667vw\n    1.0416666666666665vw;\n  /* padding: 123.2px 20px 39.2px 20px; */\n  background-color: #f4cc77;\n  border-radius: 1.3020833333333335vw;\n  /* border radius 25px */\n  // box-shadow: 0vw 0.26041666666666663vw 0.78125vw lightgray;\n  /* orig box shadow is 0px 5px 15px */\n  height: 24.322916666666668vw;\n  /* height: 467px; */\n  width: 15.104166666666666vw;\n  /* width: 290px; */\n  transition: all 0.3s ease-in-out;\n  cursor: pointer;\n  /* width: 290px; */\n\n  &:hover {\n    transition: all 0.3s ease-in-out;\n    transform: translateY(-0.52vw);\n    box-shadow: 0vw 0.21vw 1.56vw #77777729;\n  }\n  @media screen and (max-width: 980px) {\n    padding: 65px 10px 18px 10px;\n    border-radius: 25px;\n    box-shadow: 0px 2px 10px lightgray;\n    height: 285px;\n    width: 155px;\n  }\n  @media screen and (max-width: 690px) {\n    padding: 130px 20px 50px 20px;\n    width: 250px;\n    height: auto;\n    margin-bottom: 25px;\n  }\n"]);

  _templateObject11 = function _templateObject11() {
    return data;
  };

  return data;
}

function _templateObject10() {
  var data = _taggedTemplateLiteral(["\n  z-index: 2;\n  background-image: url(", ");\n  background-size: contain;\n  background-position: top center;\n  background-repeat: no-repeat;\n  padding: 6.416666666666666vw 1.0416666666666665vw 2.041666666666667vw\n    1.0416666666666665vw;\n  /* padding: 123.2px 20px 39.2px 20px; */\n  background-color: #8cc9dc;\n  border-radius: 1.3020833333333335vw;\n  /* border radius 25px */\n  // box-shadow: 0vw 0.26041666666666663vw 0.78125vw lightgray;\n  /* orig box shadow is 0px 5px 15px */\n  height: 24.322916666666668vw;\n  /* height: 467px; */\n  width: 15.104166666666666vw;\n  transition: all 0.3s ease-in-out;\n  cursor: pointer;\n  /* width: 290px; */\n\n  &:hover {\n    transition: all 0.3s ease-in-out;\n    transform: translateY(-0.52vw);\n    box-shadow: 0vw 0.21vw 1.56vw #77777729;\n  }\n\n  @media screen and (max-width: 980px) {\n    padding: 65px 10px 18px 10px;\n    border-radius: 25px;\n    box-shadow: 0px 2px 10px lightgray;\n    height: 285px;\n    width: 155px;\n  }\n  @media screen and (max-width: 690px) {\n    padding: 130px 20px 50px 20px;\n    width: 250px;\n    height: auto;\n    margin-bottom: 25px;\n  }\n"]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = _taggedTemplateLiteral(["\n  font-weight: 400;\n  font-size: 0.8854166666666666vw;\n  /* 17px orig font size */\n  @media screen and (max-width: 980px) {\n    font-size: 13px;\n  }\n"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n  font-size: 3.07vw;\n  /* font-size: 59px; */\n  color: #14cc7e;\n  font-weight: 400;\n  @media screen and (max-width: 980px) {\n    font-size: 23px;\n  }\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n  position: absolute;\n  z-index: 1;\n  height: 25.04vw;\n  width: 55.21vw;\n  top: 1.04vw;\n  left: 22vw;\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  font-family: \"Inter\", sans-serif;\n  font-weight: 500;\n  font-size: 1.5104166666666667vw;\n  /* font-size: 29px; */\n  line-height: 1.9791666666666665vw;\n  /* line-height: 38px; */\n  color: black;\n  @media screen and (max-width: 980px) {\n    font-size: 15px;\n    line-height: 20px;\n  }\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  z-index: 2;\n  padding: 2.083333333333333vw 2.864583333333333vw 2.083333333333333vw 1.875vw;\n  /* padding: 40px 55px 40px 36px; */\n  background: white;\n  border-radius: 1.0416666666666665vw;\n  box-shadow: 0 0.26041666666666663vw 0.78125vw lightgray;\n  width: 12.135416666666666vw;\n  /* width: 233px; */\n  /* orig box shadow is 0px 5px 15px */\n\n  @media screen and (max-width: 980px) {\n    padding: 25px 15px 25px 15px;\n    border-radius: 25px;\n    box-shadow: 0px 2px 10px lightgray;\n    width: 142px;\n  }\n  @media screen and (max-width: 690px) {\n    margin-bottom: 25px;\n    width: 200px;\n  }\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  z-index: 2;\n  font-family: \"Inter\", sans-serif;\n  font-weight: 700;\n  font-size: 2.604166666666667vw;\n  /* font size is 50px */\n  padding-bottom: 1.4895833333333335vw;\n  //28.6px\n  color: black;\n  line-height: 3.4895833333333335vw;\n  /* line-height: 67px; */\n\n  @media screen and (max-width: 980px) {\n    font-size: 25px;\n    padding-bottom: 15px;\n    line-height: 30px;\n    text-align: center;\n  }\n\n  @media screen and (max-width: 690px) {\n    font-size: 20px;\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  padding: 1.56vw;\n  z-index: 2;\n  @media screen and (max-width: 690px) {\n    margin: 0;\n  }\n"]);

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
  var data = _taggedTemplateLiteral(["\n  background: #f8f8f3;\n  /* 0px  */\n  padding: 5vw 16.614583333333332vw;\n  position: relative;\n  @media screen and (max-width: 980px) {\n    padding: 60px 50px;\n  }\n  @media screen and (max-width: 690px) {\n    padding: 50px 20px;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var HowContainer = _styledComponents["default"].div(_templateObject());

exports.HowContainer = HowContainer;

var HowContent = _styledComponents["default"].div(_templateObject2());

exports.HowContent = HowContent;

var HowColumn = _styledComponents["default"].div(_templateObject3());

exports.HowColumn = HowColumn;

var HowHeading = _styledComponents["default"].h2(_templateObject4());

exports.HowHeading = HowHeading;

var SubHeadingContainer = _styledComponents["default"].div(_templateObject5());

exports.SubHeadingContainer = SubHeadingContainer;

var HowSubHeading = _styledComponents["default"].p(_templateObject6());

exports.HowSubHeading = HowSubHeading;

var HowLine = _styledComponents["default"].div(_templateObject7());

exports.HowLine = HowLine;

var HowGreenSpan = _styledComponents["default"].span(_templateObject8());

exports.HowGreenSpan = HowGreenSpan;

var HowTinySpan = _styledComponents["default"].span(_templateObject9());

exports.HowTinySpan = HowTinySpan;

var Card1 = _styledComponents["default"].div(_templateObject10(), _happyToBeATeam20210901094124Utc["default"]);

exports.Card1 = Card1;

var Card2 = _styledComponents["default"].div(_templateObject11(), _eyeglass["default"]);

exports.Card2 = Card2;

var Card3 = _styledComponents["default"].div(_templateObject12(), _headphones["default"]);

exports.Card3 = Card3;

var CardNumber = _styledComponents["default"].p(_templateObject13());

exports.CardNumber = CardNumber;

var CardHeading = _styledComponents["default"].h2(_templateObject14());

exports.CardHeading = CardHeading;

var CardInfo = _styledComponents["default"].p(_templateObject15());

exports.CardInfo = CardInfo;