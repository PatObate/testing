"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CommunityTinySpan = exports.CommunityGreenSpan = exports.CommunitySubHeading2 = exports.ButtonLinkIcon = exports.ButtonLinkText = exports.CommunityLinkButton = exports.SubHeadingWrapper = exports.CommunitySubHeading1 = exports.CommunityHappy = exports.CommunityPicture = exports.CommunityLink = exports.CommunityIcon = exports.CommunityWrapper = exports.CommunityLinkDiv = exports.CommunityLinks = exports.CommunityLinksContainer = exports.CommunitySub = exports.CommunityHeader = exports.CommunityColumn2 = exports.CommunityColumn = exports.CommunityContent = exports.CommunityContainer = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _younggirlnew = _interopRequireDefault(require("../../../images/younggirlnew.png"));

var _happy = _interopRequireDefault(require("../../../images/happy.png"));

var _reactRouterDom = require("react-router-dom");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject22() {
  var data = _taggedTemplateLiteral(["\n  font-weight: 400;\n  font-size: 0.8854166666666666vw;\n  /* 17px orig font size */\n  padding-bottom: 20px;\n  @media screen and (max-width: 980px) {\n    font-size: 12px;\n  }\n"]);

  _templateObject22 = function _templateObject22() {
    return data;
  };

  return data;
}

function _templateObject21() {
  var data = _taggedTemplateLiteral(["\n  font-size: 2.604166666666667vw;\n  /* font size 50px */\n  color: #14cc7e;\n  width: 1.0416666666666665vw;\n  /* width: 20px; */\n  @media screen and (max-width: 980px) {\n    font-size: 20px;\n  }\n  @media screen and (max-width: 690px) {\n    font-size: 18px;\n  }\n"]);

  _templateObject21 = function _templateObject21() {
    return data;
  };

  return data;
}

function _templateObject20() {
  var data = _taggedTemplateLiteral(["\n  font-family: \"Inter\", sans-serif;\n  font-weight: 500;\n  font-size: 1.5625vw;\n  /* font size is 30px */\n  color: black;\n  padding: 1.0416666666666665vw 1.0416666666666665vw;\n  /* padding is 20px 20px */\n  background: white;\n  border-radius: 1.0416666666666665vw;\n  box-shadow: 0 0.26041666666666663vw 0.78125vw gray;\n  /* orig box shadow is 0px 5px 15px */\n  grid-column: 3 / 7;\n  grid-row: 5 / 7;\n  z-index: 2;\n  @media screen and (max-width: 980px) {\n    padding: 10px 10px;\n    border-radius: 10px;\n    box-shadow: 0px 2px 10px lightgray;\n    font-size: 15px;\n    line-height: 20px;\n  }\n  @media screen and (max-width: 690px) {\n    font-size: 13px;\n    line-height: 17px;\n  }\n"]);

  _templateObject20 = function _templateObject20() {
    return data;
  };

  return data;
}

function _templateObject19() {
  var data = _taggedTemplateLiteral(["\n  display: block;\n"]);

  _templateObject19 = function _templateObject19() {
    return data;
  };

  return data;
}

function _templateObject18() {
  var data = _taggedTemplateLiteral(["\n  font-family: \"Inter\", sans-serif;\n  font-weight: 500;\n  font-size: 0.94vw;\n  color: #1c8ae2;\n"]);

  _templateObject18 = function _templateObject18() {
    return data;
  };

  return data;
}

function _templateObject17() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  width: 190px;\n  cursor: pointer;\n  text-decoration: none;\n"]);

  _templateObject17 = function _templateObject17() {
    return data;
  };

  return data;
}

function _templateObject16() {
  var data = _taggedTemplateLiteral([""]);

  _templateObject16 = function _templateObject16() {
    return data;
  };

  return data;
}

function _templateObject15() {
  var data = _taggedTemplateLiteral(["\n  font-family: \"Inter\", sans-serif;\n  font-weight: 500;\n  font-size: 1.5625vw;\n  /* font size is 30px */\n  color: black;\n  padding: 1.0416666666666665vw 1.0416666666666665vw;\n  /* padding is 20px 20px */\n\n  background: white;\n  border-radius: 1.0416666666666665vw;\n  box-shadow: 0 0.26041666666666663vw 0.78125vw gray;\n  /* orig box shadow is 0px 5px 15px */\n  grid-column: 2 / 6;\n  grid-row: 1 / 3;\n  z-index: 2;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  @media screen and (max-width: 980px) {\n    padding: 10px 10px;\n    border-radius: 10px;\n    box-shadow: 0px 2px 10px lightgray;\n    font-size: 15px;\n    line-height: 20px;\n  }\n  @media screen and (max-width: 690px) {\n    font-size: 12px;\n    line-height: 17px;\n    padding: 5px 5px;\n  }\n"]);

  _templateObject15 = function _templateObject15() {
    return data;
  };

  return data;
}

function _templateObject14() {
  var data = _taggedTemplateLiteral(["\n  background-image: url(", ");\n  background-size: contain;\n  background-position: top center;\n  background-repeat: no-repeat;\n  height: 4.010416666666667vw;\n  /* height is 77px */\n  width: auto;\n  grid-column: 4 / 5;\n  grid-row: 4/6;\n  z-index: 3;\n  @media screen and (max-width: 980px) {\n    height: 45px;\n  }\n"]);

  _templateObject14 = function _templateObject14() {
    return data;
  };

  return data;
}

function _templateObject13() {
  var data = _taggedTemplateLiteral(["\n  background-image: url(", ");\n  background-size: contain;\n  background-position: top center;\n  background-repeat: no-repeat;\n  height: 30vw;\n  /* height is 576px */\n  width: auto;\n  grid-column: 1 / 8;\n  grid-row: 2/8;\n  @media screen and (max-width: 690px) {\n    background-position: top right;\n    height: 200px;\n  }\n"]);

  _templateObject13 = function _templateObject13() {
    return data;
  };

  return data;
}

function _templateObject12() {
  var data = _taggedTemplateLiteral(["\n  font-family: \"Inter\", sans-serif;\n  font-weight: 500;\n  font-size: 0.9375vw;\n  /* font size is 18px */\n  color: #008dff;\n  /* will add links later on */\n  line-height: 3.0208333333333335vw;\n  /* line-height: 58px; */\n  @media screen and (max-width: 980px) {\n    font-size: 13px;\n    line-height: 16px;\n  }\n"]);

  _templateObject12 = function _templateObject12() {
    return data;
  };

  return data;
}

function _templateObject11() {
  var data = _taggedTemplateLiteral(["\n  width: 70%;\n  display: block;\n"]);

  _templateObject11 = function _templateObject11() {
    return data;
  };

  return data;
}

function _templateObject10() {
  var data = _taggedTemplateLiteral(["\n  background: white;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 100px;\n  width: 65px;\n  height: 65px;\n  margin-right: 7px;\n"]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n  align-items: center;\n  justify-content: center;\n  display: flex;\n  cursor: pointer;\n  background: #ededed;\n  width: 345px;\n  height: 83px;\n  border-radius: 25px;\n  justify-content: space-between;\n  padding: 0px 14px;\n  text-decoration: none;\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n  align-items: flex-start;\n  justify-content: space-around;\n  /* padding right is 150px */\n  display: flex;\n  @media screen and (max-width: 980px) {\n    padding-right: 50px;\n  }\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  font-family: \"Inter\", sans-serif;\n  font-weight: 400;\n  font-size: 0.9375vw;\n  /*font size 18px */\n  width: 20.989583333333332vw;\n  /* width is 403px */\n  padding-bottom: 2.604166666666667vw;\n  /* padding-bottom: 50px; */\n  line-height: 1.25vw;\n  /* line-height: 24px; */\n  @media screen and (max-width: 980px) {\n    font-size: 15px;\n    padding-bottom: 20px;\n    line-height: 17px;\n    width: 280px;\n  }\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  font-family: \"Inter\", sans-serif;\n  font-weight: 700;\n  font-size: 2.604166666666667vw;\n  /* font size is 50px */\n  color: black;\n  width: 17.447916666666664vw;\n  /* width: 335px; */\n  line-height: 3.4895833333333335vw;\n  /* line-height: 67px; */\n  padding-bottom: 0.5208333333333333vw;\n  /* padding-bottom: 10px; */\n  @media screen and (max-width: 980px) {\n    font-size: 25px;\n    line-height: 30px;\n    width: 280px;\n    padding-bottom: 7px;\n  }\n  @media screen and (max-width: 690px) {\n    font-size: 20px;\n    line-height: 28px;\n    padding-bottom: 10px;\n  }\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  /* width 338px */\n  width: 50%;\n  display: grid;\n  grid-template-columns: 2% 15% 1% 9% 16% 16% 41%;\n  grid-template-rows: 10% 25% 20% 7% 7% 18%;\n  @media screen and (max-width: 690px) {\n    width: 100%;\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  /* width 338px */\n  margin: auto;\n  width: 50%;\n  @media screen and (max-width: 690px) {\n    width: 100%;\n    padding-bottom: 30px;\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  @media screen and (max-width: 690px) {\n    flex-direction: column;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  background: #f8f8f3;\n  /* 0px  */\n  padding: 5vw 0vw 5vw 16.614583333333332vw;\n  @media screen and (max-width: 980px) {\n    padding: 60px 0px 60px 50px;\n  }\n  @media screen and (max-width: 690px) {\n    height: auto;\n    padding: 50px 0px 50px 20px;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var CommunityContainer = _styledComponents["default"].div(_templateObject());

exports.CommunityContainer = CommunityContainer;

var CommunityContent = _styledComponents["default"].div(_templateObject2());

exports.CommunityContent = CommunityContent;

var CommunityColumn = _styledComponents["default"].div(_templateObject3());

exports.CommunityColumn = CommunityColumn;

var CommunityColumn2 = _styledComponents["default"].div(_templateObject4());

exports.CommunityColumn2 = CommunityColumn2;

var CommunityHeader = _styledComponents["default"].h2(_templateObject5());

exports.CommunityHeader = CommunityHeader;

var CommunitySub = _styledComponents["default"].p(_templateObject6());

exports.CommunitySub = CommunitySub;

var CommunityLinksContainer = _styledComponents["default"].div(_templateObject7());

exports.CommunityLinksContainer = CommunityLinksContainer;
var CommunityLinks = (0, _styledComponents["default"])(_reactRouterDom.Link)(_templateObject8());
exports.CommunityLinks = CommunityLinks;

var CommunityLinkDiv = _styledComponents["default"].div(_templateObject9());

exports.CommunityLinkDiv = CommunityLinkDiv;

var CommunityWrapper = _styledComponents["default"].div(_templateObject10());

exports.CommunityWrapper = CommunityWrapper;

var CommunityIcon = _styledComponents["default"].img(_templateObject11());

exports.CommunityIcon = CommunityIcon;

var CommunityLink = _styledComponents["default"].p(_templateObject12());

exports.CommunityLink = CommunityLink;

var CommunityPicture = _styledComponents["default"].div(_templateObject13(), _younggirlnew["default"]);

exports.CommunityPicture = CommunityPicture;

var CommunityHappy = _styledComponents["default"].div(_templateObject14(), _happy["default"]);

exports.CommunityHappy = CommunityHappy;

var CommunitySubHeading1 = _styledComponents["default"].div(_templateObject15());

exports.CommunitySubHeading1 = CommunitySubHeading1;

var SubHeadingWrapper = _styledComponents["default"].div(_templateObject16());

exports.SubHeadingWrapper = SubHeadingWrapper;
var CommunityLinkButton = (0, _styledComponents["default"])(_reactRouterDom.Link)(_templateObject17());
exports.CommunityLinkButton = CommunityLinkButton;

var ButtonLinkText = _styledComponents["default"].p(_templateObject18());

exports.ButtonLinkText = ButtonLinkText;

var ButtonLinkIcon = _styledComponents["default"].img(_templateObject19());

exports.ButtonLinkIcon = ButtonLinkIcon;

var CommunitySubHeading2 = _styledComponents["default"].div(_templateObject20());

exports.CommunitySubHeading2 = CommunitySubHeading2;

var CommunityGreenSpan = _styledComponents["default"].span(_templateObject21());

exports.CommunityGreenSpan = CommunityGreenSpan;

var CommunityTinySpan = _styledComponents["default"].span(_templateObject22());

exports.CommunityTinySpan = CommunityTinySpan;