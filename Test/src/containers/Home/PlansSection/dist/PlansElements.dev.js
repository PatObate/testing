"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PlansVat = exports.PlansReminder = exports.PlansCheck2 = exports.PlansCheck = exports.PlansCheckLottie = exports.PlansCheckWrapper = exports.PlansCheckContainer = exports.Line2 = exports.Line = exports.LilSubPrice2 = exports.LilSubPrice = exports.SubPriceAmount2 = exports.SubPriceAmount = exports.SubPrice2 = exports.SubPrice = exports.PlansSub2 = exports.PlansSub = exports.PlansTitle2 = exports.PlansTitle = exports.PlansCard3 = exports.GoldText = exports.GoldIcon = exports.GoldLabel = exports.PlansCard2 = exports.PlansCard1 = exports.PlansColumn = exports.PlansContent = exports.ButtonWrapper = exports.PlansTop = exports.PlansHeader = exports.PlansContainer = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _gold = _interopRequireDefault(require("../../../svg/gold.svg"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _templateObject32() {
  var data = _taggedTemplateLiteral(["\n  font-family: \"Inter\", sans-serif;\n  font-weight: 400;\n  font-size: 16px;\n  color: black;\n  text-align: right;\n  padding-top: 30px;\n"]);

  _templateObject32 = function _templateObject32() {
    return data;
  };

  return data;
}

function _templateObject31() {
  var data = _taggedTemplateLiteral(["\n  font-family: \"Inter\", sans-serif;\n  font-weight: 400;\n  font-size: 1.0416666666666665vw;\n  /* font-size 20px */\n  color: #505050;\n  line-height: 1.0416666666666665vw;\n  /* line-height: 20px; */\n  @media screen and (max-width: 980px) {\n    font-size: 12px;\n    line-height: 14px;\n  }\n"]);

  _templateObject31 = function _templateObject31() {
    return data;
  };

  return data;
}

function _templateObject30() {
  var data = _taggedTemplateLiteral(["\n  font-family: \"Inter\", sans-serif;\n  font-weight: 400;\n  font-size: 1.0416666666666665vw;\n  /* font-size 20px */\n  color: white;\n  line-height: 1.0416666666666665vw;\n  /* line-height: 20px; */\n  @media screen and (max-width: 980px) {\n    font-size: 13px;\n    line-height: 10px;\n  }\n"]);

  _templateObject30 = function _templateObject30() {
    return data;
  };

  return data;
}

function _templateObject29() {
  var data = _taggedTemplateLiteral(["\n  font-family: \"Inter\", sans-serif;\n  font-weight: 400;\n  font-size: 1.0416666666666665vw;\n  /* font-size 20px */\n  color: #172631;\n  line-height: 1.0416666666666665vw;\n  /* line-height: 20px; */\n  @media screen and (max-width: 980px) {\n    font-size: 13px;\n    line-height: 10px;\n  }\n"]);

  _templateObject29 = function _templateObject29() {
    return data;
  };

  return data;
}

function _templateObject28() {
  var data = _taggedTemplateLiteral(["\n  height: 1.8229166666666667vw;\n  /* height: 35px;4 */\n  padding-right: 0.5208333333333333vw;\n  /* padding-right: 10px; */\n  width: 1.8229166666666667vw;\n  /* width: 35px; */\n  @media screen and (max-width: 980px) {\n    height: 18px;\n    padding-right: 2px;\n    width: 14px;\n  }\n"]);

  _templateObject28 = function _templateObject28() {
    return data;
  };

  return data;
}

function _templateObject27() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n"]);

  _templateObject27 = function _templateObject27() {
    return data;
  };

  return data;
}

function _templateObject26() {
  var data = _taggedTemplateLiteral(["\n  padding-bottom: 3.958333333333333vw;\n  /* padding-bottom 76px */\n  @media screen and (max-width: 980px) {\n    padding-bottom: 15px;\n  }\n"]);

  _templateObject26 = function _templateObject26() {
    return data;
  };

  return data;
}

function _templateObject25() {
  var data = _taggedTemplateLiteral(["\n  margin-bottom: 2.083vw;\n  border-bottom: 2px solid #fcbc28;\n  width: 30px;\n"]);

  _templateObject25 = function _templateObject25() {
    return data;
  };

  return data;
}

function _templateObject24() {
  var data = _taggedTemplateLiteral(["\n  margin-bottom: 2.083vw;\n  border-bottom: 2px solid #262626;\n  width: 30px;\n"]);

  _templateObject24 = function _templateObject24() {
    return data;
  };

  return data;
}

function _templateObject23() {
  var data = _taggedTemplateLiteral(["\n  font-family: \"Inter\", sans-serif;\n  font-weight: 400;\n  font-size: 0.8333333333333334vw;\n  /* font-size is 16px */\n  color: #1c8ae2;\n  padding-bottom: 1.0416666666666665vw;\n  /* padding bottom is 20px */\n  line-height: 0.8333333333333334vw;\n  /* line-height: 16px; */\n  @media screen and (max-width: 980px) {\n    font-size: 12px;\n    line-height: 12px;\n  }\n"]);

  _templateObject23 = function _templateObject23() {
    return data;
  };

  return data;
}

function _templateObject22() {
  var data = _taggedTemplateLiteral(["\n  font-family: \"Inter\", sans-serif;\n  font-weight: 400;\n  font-size: 0.8333333333333334vw;\n  /* fontsize is 16px */\n  color: #505050;\n  padding-bottom: 1.0416666666666665vw;\n  /* padding bottom is 20px */\n  line-height: 0.8333333333333334vw;\n  /* line-height: 16px; */\n\n  @media screen and (max-width: 980px) {\n    font-size: 12px;\n    line-height: 12px;\n  }\n"]);

  _templateObject22 = function _templateObject22() {
    return data;
  };

  return data;
}

function _templateObject21() {
  var data = _taggedTemplateLiteral(["\n  font-weight: 700;\n  font-size: 1.8229166666666667vw;\n  /* font-size 35px */\n  color: #13c278;\n  line-height: 2.4479166666666665vw;\n  /* line-height: 47px; */\n\n  @media screen and (max-width: 980px) {\n    font-size: 15px;\n    line-height: 15px;\n  }\n"]);

  _templateObject21 = function _templateObject21() {
    return data;
  };

  return data;
}

function _templateObject20() {
  var data = _taggedTemplateLiteral(["\n  font-weight: 700;\n  font-size: 1.8229166666666667vw;\n  /* font-size is 35px */\n  color: #172631;\n  line-height: 2.4479166666666665vw;\n  /* line-height: 47px; */\n\n  @media screen and (max-width: 980px) {\n    font-size: 15px;\n    line-height: 15px;\n  }\n"]);

  _templateObject20 = function _templateObject20() {
    return data;
  };

  return data;
}

function _templateObject19() {
  var data = _taggedTemplateLiteral(["\n  font-family: \"Inter\", sans-serif;\n  font-weight: 400;\n  font-size: 0.8333333333333334vw;\n  /* font-size is 16px */\n  color: #13c278;\n  display: inline-block;\n  line-height: 1.7187500000000002vw;\n  /* line-height: 33px; */\n  padding-bottom: 0.3125vw;\n  /* padding-bottom: 6px; */\n  mask: linear-gradient(-60deg, #000 30%, #0005, #000 70%) right/300% 100%;\n  background-repeat: no-repeat;\n  animation: ", " 7.5s infinite;\n\n  @media screen and (max-width: 980px) {\n    font-size: 13px;\n    line-height: 15px;\n    padding-bottom: 3px;\n  }\n"]);

  _templateObject19 = function _templateObject19() {
    return data;
  };

  return data;
}

function _templateObject18() {
  var data = _taggedTemplateLiteral(["\n  font-family: \"Inter\", sans-serif;\n  font-weight: 400;\n  font-size: 0.8333333333333334vw;\n  /* font-size is 16px */\n  color: #505050;\n  line-height: 1.7187500000000002vw;\n  /* line-height: 33px; */\n  padding-bottom: 0.3125vw;\n  /* padding-bottom: 6px; */\n\n  @media screen and (max-width: 980px) {\n    font-size: 13px;\n    line-height: 15px;\n    padding-bottom: 3px;\n  }\n"]);

  _templateObject18 = function _templateObject18() {
    return data;
  };

  return data;
}

function _templateObject17() {
  var data = _taggedTemplateLiteral(["\n  font-family: \"Inter\", sans-serif;\n  font-weight: 400;\n  font-size: 0.8333333333333334vw;\n  /* font size is 16px */\n  color: #596a72;\n  padding-bottom: 2.083333333333333vw;\n  /* padding bottom is 40px */\n\n  @media screen and (max-width: 980px) {\n    font-size: 14px;\n    line-height: 18px;\n    padding-bottom: 12px;\n  }\n"]);

  _templateObject17 = function _templateObject17() {
    return data;
  };

  return data;
}

function _templateObject16() {
  var data = _taggedTemplateLiteral(["\n  font-family: \"Inter\", sans-serif;\n  font-weight: 400;\n  font-size: 0.8333333333333334vw;\n  /* font size is 16px */\n  color: #505050;\n  padding-bottom: 2.083333333333333vw;\n  /* padding bottom is 40px */\n  line-height: 0.8333333333333334vw;\n  /* line-height: 16px; */\n\n  @media screen and (max-width: 980px) {\n    font-size: 14px;\n    line-height: 18px;\n    padding-bottom: 12px;\n  }\n"]);

  _templateObject16 = function _templateObject16() {
    return data;
  };

  return data;
}

function _templateObject15() {
  var data = _taggedTemplateLiteral(["\n  font-family: \"Inter\", sans-serif;\n  font-weight: 700;\n  font-size: 1.5625vw;\n  /* font size is 30px */\n  color: white;\n  line-height: 2.083333333333333vw;\n  /* line-height: 40px; */\n  padding-bottom: 0.9895833333333333vw;\n  /* padding bottom is 19px */\n  display: inline-block;\n  mask: linear-gradient(-60deg, #000 30%, #0005, #000 70%) right/300% 100%;\n  background-repeat: no-repeat;\n  animation: ", " 7.5s infinite;\n\n  @media screen and (max-width: 980px) {\n    font-size: 20px;\n    line-height: 23px;\n    padding-bottom: 5px;\n  }\n"]);

  _templateObject15 = function _templateObject15() {
    return data;
  };

  return data;
}

function _templateObject14() {
  var data = _taggedTemplateLiteral(["\n  font-family: \"Inter\", sans-serif;\n  font-weight: 700;\n  font-size: 1.5625vw;\n  /* font size is 30px */\n  color: #172631;\n  line-height: 2.083333333333333vw;\n  /* line-height: 40px; */\n  padding-bottom: 0.9895833333333333vw;\n  /* padding bottom is 19px */\n  @media screen and (max-width: 980px) {\n    font-size: 20px;\n    line-height: 23px;\n    padding-bottom: 5px;\n  }\n"]);

  _templateObject14 = function _templateObject14() {
    return data;
  };

  return data;
}

function _templateObject13() {
  var data = _taggedTemplateLiteral(["\n  padding: 4.375vw 2.96875vw;\n  /* padding: 4.375vw 57px; */\n  height: 35.364583333333336vw;\n  /* height is 679px */\n  width: 20.208333333333332vw;\n  /* width is 388px */\n  // box-shadow: 0vw 0.26041666666666663vw 0.78125vw lightgray;\n  /* box shadow is 0px 5px 15px */\n  background: #dceaf4;\n  border-radius: 1.3020833333333335vw;\n  /* border radius 25px */\n  transition: all 0.3s ease-in-out;\n  cursor: pointer;\n  /* width: 290px; */\n\n  &:hover {\n    transition: all 0.3s ease-in-out;\n    transform: translateY(-0.52vw);\n    box-shadow: 0vw 0.21vw 1.56vw #77777729;\n  }\n  @media screen and (max-width: 980px) {\n    padding: 40px 20px;\n    height: 350px;\n    width: 200px;\n    box-shadow: 0px 2px 10px lightgray;\n    border-radius: 25px;\n  }\n  @media screen and (max-width: 690px) {\n    margin-bottom: 25px;\n    padding: 40px 20px;\n    height: auto;\n    width: 250px;\n  }\n"]);

  _templateObject13 = function _templateObject13() {
    return data;
  };

  return data;
}

function _templateObject12() {
  var data = _taggedTemplateLiteral(["\n  font-family: \"Inter\", sans-serif;\n  font-weight: 400;\n  font-size: 0.83vw;\n  color: black;\n"]);

  _templateObject12 = function _templateObject12() {
    return data;
  };

  return data;
}

function _templateObject11() {
  var data = _taggedTemplateLiteral([""]);

  _templateObject11 = function _templateObject11() {
    return data;
  };

  return data;
}

function _templateObject10() {
  var data = _taggedTemplateLiteral(["\n  background: transparent url(", ") 0% 0% no-repeat padding-box;\n  position: absolute;\n  top: 0;\n  right: 0;\n  display: flex;\n  align-items: center;\n  justify-content: space-evenly;\n  width: 7.81vw;\n  height: 2.6vw;\n"]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = _taggedTemplateLiteral(["\n 100% {-webkit-mask-position:left}\n"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n  position: relative;\n  padding: 4.375vw 2.96875vw;\n  /* padding: 4.375vw 57px; */\n  height: 35.364583333333336vw;\n  /* height is 679px */\n  width: 20.208333333333332vw;\n  /* width is 388px */\n  // box-shadow: 0vw 0.26041666666666663vw 0.78125vw lightgray;\n  /* box shadow is 0px 5px 15px */\n  background: #172631;\n  border-radius: 1.3020833333333335vw;\n  /* border radius 25px */\n  transition: all 0.3s ease-in-out;\n  cursor: pointer;\n  /* width: 290px; */\n\n  &:hover {\n    transition: all 0.3s ease-in-out;\n    transform: translateY(-0.52vw);\n    box-shadow: 0vw 0.21vw 1.56vw #77777729;\n  }\n  @media screen and (max-width: 980px) {\n    padding: 40px 20px;\n    height: 350px;\n    width: 200px;\n    box-shadow: 0px 2px 10px lightgray;\n    border-radius: 25px;\n  }\n  @media screen and (max-width: 690px) {\n    margin-bottom: 25px;\n    padding: 40px 20px;\n    height: auto;\n    width: 250px;\n  }\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n  padding: 4.375vw 2.96875vw;\n  /* padding: 4.375vw 57px; */\n  height: 35.364583333333336vw;\n  /* height is 679px */\n  width: 20.208333333333332vw;\n  /* width is 388px */\n  // box-shadow: 0vw 0.26041666666666663vw 0.78125vw lightgray;\n  /* box shadow is 0px 5px 15px */\n  background: #fae8d0;\n  border-radius: 1.3020833333333335vw;\n  /* border radius 25px */\n  transition: all 0.3s ease-in-out;\n  cursor: pointer;\n  /* width: 290px; */\n\n  &:hover {\n    transition: all 0.3s ease-in-out;\n    transform: translateY(-0.52vw);\n    box-shadow: 0vw 0.21vw 1.56vw #77777729;\n  }\n  @media screen and (max-width: 980px) {\n    padding: 40px 20px;\n    height: 350px;\n    width: 200px;\n    box-shadow: 0px 2px 10px lightgray;\n    border-radius: 25px;\n  }\n  @media screen and (max-width: 690px) {\n    margin-bottom: 25px;\n    padding: 40px 20px;\n    height: auto;\n    width: 250px;\n  }\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\nheight: 100%;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  @media screen and (max-width: 690px) {\n    flex-direction: column;\n  }\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  width: 14vw;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  font-family: \"Inter\", sans-serif;\n  font-weight: 700;\n  font-size: 2.604166666666667vw;\n  /* font size 50px */\n  padding-bottom: 3.625vw;\n  /* padding-bottom: 108px; */\n  line-height: 3.4895833333333335vw;\n  /* line-height: 67px; */\n  color: black;\n  width: 38.84375vw;\n  /* width: 765px; */\n  @media screen and (max-width: 980px) {\n    font-size: 25px;\n    padding-bottom: 50px;\n    line-height: 30px;\n  }\n  @media screen and (max-width: 690px) {\n    font-size: 20px;\n    line-height: 28px;\n    width: 190px;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  background: #f8f8f2;\n  /* 0px  */\n  padding: 5vw 16.614583333333332vw;\n  /* padding: 0vw 319px; */\n  position: relative;\n  overflow: hidden;\n  @media screen and (max-width: 980px) {\n    padding: 60px 50px;\n  }\n  @media screen and (max-width: 690px) {\n    padding: 50px 20px;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var PlansContainer = _styledComponents["default"].div(_templateObject());

exports.PlansContainer = PlansContainer;

var PlansHeader = _styledComponents["default"].h2(_templateObject2());

exports.PlansHeader = PlansHeader;

var PlansTop = _styledComponents["default"].div(_templateObject3());

exports.PlansTop = PlansTop;

var ButtonWrapper = _styledComponents["default"].div(_templateObject4());

exports.ButtonWrapper = ButtonWrapper;

var PlansContent = _styledComponents["default"].div(_templateObject5());

exports.PlansContent = PlansContent;

var PlansColumn = _styledComponents["default"].div(_templateObject6());

exports.PlansColumn = PlansColumn;

var PlansCard1 = _styledComponents["default"].div(_templateObject7());

exports.PlansCard1 = PlansCard1;

var PlansCard2 = _styledComponents["default"].div(_templateObject8());

exports.PlansCard2 = PlansCard2;
var Shimmer = (0, _styledComponents.keyframes)(_templateObject9());

var GoldLabel = _styledComponents["default"].div(_templateObject10(), _gold["default"]);

exports.GoldLabel = GoldLabel;

var GoldIcon = _styledComponents["default"].img(_templateObject11());

exports.GoldIcon = GoldIcon;

var GoldText = _styledComponents["default"].div(_templateObject12());

exports.GoldText = GoldText;

var PlansCard3 = _styledComponents["default"].div(_templateObject13());

exports.PlansCard3 = PlansCard3;

var PlansTitle = _styledComponents["default"].h2(_templateObject14());

exports.PlansTitle = PlansTitle;

var PlansTitle2 = _styledComponents["default"].h2(_templateObject15(), Shimmer);

exports.PlansTitle2 = PlansTitle2;

var PlansSub = _styledComponents["default"].p(_templateObject16());

exports.PlansSub = PlansSub;

var PlansSub2 = _styledComponents["default"].p(_templateObject17());

exports.PlansSub2 = PlansSub2;

var SubPrice = _styledComponents["default"].p(_templateObject18());

exports.SubPrice = SubPrice;

var SubPrice2 = _styledComponents["default"].p(_templateObject19(), Shimmer);

exports.SubPrice2 = SubPrice2;

var SubPriceAmount = _styledComponents["default"].span(_templateObject20());

exports.SubPriceAmount = SubPriceAmount;

var SubPriceAmount2 = _styledComponents["default"].span(_templateObject21());

exports.SubPriceAmount2 = SubPriceAmount2;

var LilSubPrice = _styledComponents["default"].p(_templateObject22());

exports.LilSubPrice = LilSubPrice;

var LilSubPrice2 = _styledComponents["default"].p(_templateObject23());

exports.LilSubPrice2 = LilSubPrice2;

var Line = _styledComponents["default"].div(_templateObject24());

exports.Line = Line;

var Line2 = _styledComponents["default"].div(_templateObject25());

exports.Line2 = Line2;

var PlansCheckContainer = _styledComponents["default"].div(_templateObject26());

exports.PlansCheckContainer = PlansCheckContainer;

var PlansCheckWrapper = _styledComponents["default"].div(_templateObject27());

exports.PlansCheckWrapper = PlansCheckWrapper;

var PlansCheckLottie = _styledComponents["default"].div(_templateObject28());

exports.PlansCheckLottie = PlansCheckLottie;

var PlansCheck = _styledComponents["default"].p(_templateObject29());

exports.PlansCheck = PlansCheck;

var PlansCheck2 = _styledComponents["default"].p(_templateObject30());

exports.PlansCheck2 = PlansCheck2;

var PlansReminder = _styledComponents["default"].p(_templateObject31());

exports.PlansReminder = PlansReminder;

var PlansVat = _styledComponents["default"].p(_templateObject32());

exports.PlansVat = PlansVat;