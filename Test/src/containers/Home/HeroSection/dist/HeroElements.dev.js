"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MouseDown = exports.RatingName = exports.RatingWords = exports.Star = exports.StarContainer = exports.RatingSign = exports.ContentBlob = exports.ContentPhoto2 = exports.ContentPlayButton = exports.ContentPhoto = exports.ContentContainer = exports.NumberRating = exports.ExcellRating = exports.GoogleRating = exports.RatingTwo = exports.Rating = exports.StarIcon = exports.RatingContainer = exports.SubHeading = exports.Heading = exports.WordsContainer = exports.HeroContainer = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _playbutton = _interopRequireDefault(require("../../../svg/playbutton.svg"));

var _reactScroll = require("react-scroll");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject22() {
  var data = _taggedTemplateLiteral(["\n  width: 3.17vw;\n  position: absolute;\n  z-index: 10;\n  cursor: pointer;\n  display: flex;\n  right: 70px;\n  top: 90vh;\n"]);

  _templateObject22 = function _templateObject22() {
    return data;
  };

  return data;
}

function _templateObject21() {
  var data = _taggedTemplateLiteral(["\n  font-family: \"Inter\", sans-serif;\n  font-weight: 500;\n  color: black;\n  font-size: 0.78125vw;\n  /* font-size: 15px; */\n  @media screen and (max-width: 980px) {\n    font-size: 14px;\n    line-height: 16px;\n  }\n"]);

  _templateObject21 = function _templateObject21() {
    return data;
  };

  return data;
}

function _templateObject20() {
  var data = _taggedTemplateLiteral(["\n  font-family: \"Inter\", sans-serif;\n  font-weight: 300;\n  color: black;\n  font-size: 0.8333333333333334vw;\n  /* font-size: 16px; */\n  padding-bottom: 0.625vw;\n  /* padding-bottom: 12px; */\n  @media screen and (max-width: 980px) {\n    font-size: 15px;\n    padding-bottom: 20px;\n    line-height: 16px;\n  }\n"]);

  _templateObject20 = function _templateObject20() {
    return data;
  };

  return data;
}

function _templateObject19() {
  var data = _taggedTemplateLiteral(["\n  font-size: 1.0416666666666665vw;\n  /* font-size: 20px; */\n  color: #14cc7e;\n  @media screen and (max-width: 980px) {\n    font-size: 15px;\n  }\n"]);

  _templateObject19 = function _templateObject19() {
    return data;
  };

  return data;
}

function _templateObject18() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  justify-content: flex-start !important;\n  padding-bottom: 0.625vw;\n  /* padding-bottom: 12px; */\n  @media screen and (max-width: 980px) {\n    padding-bottom: 10px;\n  }\n"]);

  _templateObject18 = function _templateObject18() {
    return data;
  };

  return data;
}

function _templateObject17() {
  var data = _taggedTemplateLiteral(["\n  padding: 1.5625vw 2.34375vw;\n  /* padding: 30px 45px; */\n  position: absolute;\n  right: 24vw;\n  top: 28vw;\n  width: 17.03125vw;\n  /* width: 327px; */\n  background: white;\n  z-index: 4;\n  border-radius: 1.67vw;\n  box-shadow: 0px 4px 30px #77777729;\n  /* border-radius: 32px; */\n  @media screen and (max-width: 980px) {\n    padding: 17px 17px;\n    background-position: top center;\n    border-radius: 32px;\n    width: 280px;\n    right: 30px;\n    top: 160px;\n  }\n"]);

  _templateObject17 = function _templateObject17() {
    return data;
  };

  return data;
}

function _templateObject16() {
  var data = _taggedTemplateLiteral(["\n  position: absolute;\n  z-index: 1;\n  height: 41.85vw;\n  width: 42.6vw;\n  right: -1vw;\n  /* right: -372px; */\n  top: 4vw;\n"]);

  _templateObject16 = function _templateObject16() {
    return data;
  };

  return data;
}

function _templateObject15() {
  var data = _taggedTemplateLiteral(["\n  z-index: 0;\n  opacity: 0;\n"]);

  _templateObject15 = function _templateObject15() {
    return data;
  };

  return data;
}

function _templateObject14() {
  var data = _taggedTemplateLiteral(["\n  position: absolute;\n  background-image: url(", ");\n  background-repeat: no-repeat;\n  background-position: center;\n  right: -3vw;\n  /* right: -372px; */\n  top: 0vw;\n  /* top: -69px; */\n  z-index: 5;\n  height: 43.22916666666667vw;\n  width: 44.27083333333333vw;\n  cursor: pointer;\n  transition: 0.3s all ease;\n"]);

  _templateObject14 = function _templateObject14() {
    return data;
  };

  return data;
}

function _templateObject13() {
  var data = _taggedTemplateLiteral(["\n  position: absolute;\n  right: -4vw;\n  /* right: -372px; */\n  top: 3vw;\n  /* top: -69px; */\n  z-index: 3;\n  height: 43.22916666666667vw;\n  width: 44.27083333333333vw;\n"]);

  _templateObject13 = function _templateObject13() {
    return data;
  };

  return data;
}

function _templateObject12() {
  var data = _taggedTemplateLiteral(["\n  width: 50%;\n  /* original is 500px */\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  @media screen and (max-width: 980px) {\n    height: 500px;\n  }\n  @media screen and (max-width: 690px) {\n    display: none;\n  }\n"]);

  _templateObject12 = function _templateObject12() {
    return data;
  };

  return data;
}

function _templateObject11() {
  var data = _taggedTemplateLiteral(["\n  font-size: 0.78125vw;\n  /* original font size 15px */\n  color: black;\n  font-family: \"Inter\", sans-serif;\n  font-weight: 400;\n  padding-left: 0.26041666666666663vw;\n  //5px\n  line-height: 0.9895833333333333vw;\n  //19px\n\n  @media screen and (max-width: 980px) {\n    font-size: 13px;\n    padding-left: 5px;\n    line-height: 15px;\n  }\n  @media screen and (max-width: 690px) {\n    padding-left: 3px;\n  }\n"]);

  _templateObject11 = function _templateObject11() {
    return data;
  };

  return data;
}

function _templateObject10() {
  var data = _taggedTemplateLiteral(["\n  font-size: 0.78125vw;\n  /* original font size 15px */\n  color: black;\n  font-family: \"Inter\", sans-serif;\n  font-weight: 700;\n\n  @media screen and (max-width: 980px) {\n    font-size: 14px;\n  }\n  @media screen and (max-width: 690px) {\n    font-size: 13px;\n  }\n"]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = _taggedTemplateLiteral(["\n  max-width: 100%;\n  height: auto;\n"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = _taggedTemplateLiteral([""]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  font-size: 0.78125vw;\n  /* original font size 15px */\n  color: #f7263d;\n  @media screen and (max-width: 980px) {\n    font-size: 13px;\n  }\n  @media screen and (max-width: 690px) {\n    width: auto;\n  }\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  width: 16.145833333333336vw;\n  // 310px\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-direction: row;\n  @media screen and (max-width: 980px) {\n    width: 290px;\n  }\n  @media screen and (max-width: 690px) {\n    width: auto;\n  }\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  font-family: \"Inter\", sans-serif;\n  font-weight: 300;\n  color: black;\n  font-size: 0.9375vw;\n  /* original is 18px */\n  padding-bottom: 4.34vw;\n  /* padding-bottom: 45px; */\n  width: 33.958333333333336vw;\n  //652px\n  line-height: 1.09vw;\n  @media screen and (max-width: 980px) {\n    font-size: 15px;\n    width: auto;\n    padding-bottom: 10px;\n    line-height: 17px;\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  font-family: \"Inter\", sans-serif;\n  font-weight: 500;\n  color: black;\n  padding-bottom: 0.82vw;\n  /* padding-bottom: 15.75px; */\n  font-size: 3.6458333333333335vw;\n  /* 70px */\n  width: 34.64vw;\n  /* width: 665px; */\n  line-height: 4.322916666666667vw;\n  /* 83px */\n  @media screen and (max-width: 980px) {\n    font-size: 40px;\n    width: auto;\n    padding-bottom: 20px;\n    line-height: 48px;\n  }\n\n  @media screen and (max-width: 690px) {\n    font-size: 24px;\n    width: auto;\n    padding-bottom: 10px;\n    line-height: 28px;\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  width: 50%;\n  height: 65%;\n  z-index: 2;\n  padding: 0vw 0vw 0vw 16.61vw;\n\n  @media screen and (max-width: 980px) {\n    padding: 0px 0px 0px 50px;\n  }\n\n  @media screen and (max-width: 690px) {\n    padding: 0px 0px 0px 20px;\n    width: 100%;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  background: #f8f8f3;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  /* 0px  */\n  height: 100vh;\n  width: 100%;\n  overflow: hidden;\n  z-index: 10;\n  /* 0px 319px */\n\n  @media screen and (max-width: 980px) {\n    height: 70vh;\n  }\n\n  @media screen and (max-width: 690px) {\n    height: 80vh;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var HeroContainer = _styledComponents["default"].div(_templateObject());

exports.HeroContainer = HeroContainer;

var WordsContainer = _styledComponents["default"].div(_templateObject2());

exports.WordsContainer = WordsContainer;

var Heading = _styledComponents["default"].h1(_templateObject3());

exports.Heading = Heading;

var SubHeading = _styledComponents["default"].p(_templateObject4());

exports.SubHeading = SubHeading;

var RatingContainer = _styledComponents["default"].div(_templateObject5());

exports.RatingContainer = RatingContainer;

var StarIcon = _styledComponents["default"].div(_templateObject6());

exports.StarIcon = StarIcon;

var Rating = _styledComponents["default"].div(_templateObject7());

exports.Rating = Rating;

var RatingTwo = _styledComponents["default"].div(_templateObject8());

exports.RatingTwo = RatingTwo;

var GoogleRating = _styledComponents["default"].img(_templateObject9());

exports.GoogleRating = GoogleRating;

var ExcellRating = _styledComponents["default"].span(_templateObject10());

exports.ExcellRating = ExcellRating;

var NumberRating = _styledComponents["default"].p(_templateObject11());

exports.NumberRating = NumberRating;

var ContentContainer = _styledComponents["default"].div(_templateObject12());

exports.ContentContainer = ContentContainer;

var ContentPhoto = _styledComponents["default"].div(_templateObject13());

exports.ContentPhoto = ContentPhoto;

var ContentPlayButton = _styledComponents["default"].div(_templateObject14(), _playbutton["default"]);

exports.ContentPlayButton = ContentPlayButton;

var ContentPhoto2 = _styledComponents["default"].img(_templateObject15());

exports.ContentPhoto2 = ContentPhoto2;

var ContentBlob = _styledComponents["default"].img(_templateObject16());

exports.ContentBlob = ContentBlob;

var RatingSign = _styledComponents["default"].div(_templateObject17());

exports.RatingSign = RatingSign;

var StarContainer = _styledComponents["default"].div(_templateObject18());

exports.StarContainer = StarContainer;

var Star = _styledComponents["default"].div(_templateObject19());

exports.Star = Star;

var RatingWords = _styledComponents["default"].p(_templateObject20());

exports.RatingWords = RatingWords;

var RatingName = _styledComponents["default"].p(_templateObject21());

exports.RatingName = RatingName;
var MouseDown = (0, _styledComponents["default"])(_reactScroll.Link)(_templateObject22());
exports.MouseDown = MouseDown;