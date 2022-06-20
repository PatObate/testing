"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ExploreLinkIcon = exports.ExploreLink = exports.ExploreLinkWrapper = exports.BlogCardTiny = exports.BlogCardNum = exports.BlogCardText = exports.BlogTextWrapper = exports.BlogFreeCard = exports.BlogFreeYellow = exports.BlogFreeSub = exports.BlogFreeHeader = exports.BlogFreeRow = exports.BlogFreelancerContainer = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject13() {
  var data = _taggedTemplateLiteral(["\n  transform: rotate(180deg);\n  display: block;\n"]);

  _templateObject13 = function _templateObject13() {
    return data;
  };

  return data;
}

function _templateObject12() {
  var data = _taggedTemplateLiteral(["\n  font-weight: 500;\n  font-family: \"Inter\", sans-serif;\n  font-size: 18px;\n  color: #1c8ae2;\n"]);

  _templateObject12 = function _templateObject12() {
    return data;
  };

  return data;
}

function _templateObject11() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  width: 175px;\n  cursor: pointer;\n"]);

  _templateObject11 = function _templateObject11() {
    return data;
  };

  return data;
}

function _templateObject10() {
  var data = _taggedTemplateLiteral(["\n  font-size: 17px;\n  font-weight: 400;\n  font-family: \"Inter\", sans-serif;\n  color: black;\n"]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = _taggedTemplateLiteral(["\n  color: #13ceaa;\n  font-weight: 400;\n  font-size: 60px;\n  display: inline;\n  font-family: \"Inter\", sans-serif;\n"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n  font-family: \"Inter\", sans-serif;\n  font-weight: 600;\n  font-size: 29px;\n  color: black;\n  display: inline;\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral([""]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  padding: 22px 33px;\n  grid-column: 1 / 2;\n  grid-row: 2 / 3;\n  background: white;\n  z-index: 2;\n  border-radius: 19px;\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  flex-direction: column;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  background-size: contain;\n  background-position: top right;\n  background-repeat: no-repeat;\n  height: 517px;\n  width: 917px;\n  display: grid;\n  grid-template-columns: 37% 63%;\n  grid-template-rows: 21% 39% 40%;\n  position: relative;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  font-family: \"Inter\", sans-serif;\n  font-weight: 400px;\n  font-size: 18px;\n  color: black;\n  padding-bottom: 40px;\n  line-height: 21px;\n  width: 427px;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  font-family: \"Inter\", sans-serif;\n  font-weight: 700;\n  font-size: 50px;\n  width: 548px;\n  color: black;\n  padding-bottom: 20px;\n  line-height: 60px;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  width: 50%;\n  margin: auto;\n  display: block;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  background: #f8f8f2;\n  /* 0px  */\n  padding: 5vw 0vw 5vw 16.614583333333332vw;\n  /* padding: 0vw 319px; */\n  z-index: 1;\n  position: relative;\n  overflow: hidden;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var BlogFreelancerContainer = _styledComponents["default"].div(_templateObject());

exports.BlogFreelancerContainer = BlogFreelancerContainer;

var BlogFreeRow = _styledComponents["default"].div(_templateObject2());

exports.BlogFreeRow = BlogFreeRow;

var BlogFreeHeader = _styledComponents["default"].h2(_templateObject3());

exports.BlogFreeHeader = BlogFreeHeader;

var BlogFreeSub = _styledComponents["default"].p(_templateObject4());

exports.BlogFreeSub = BlogFreeSub;

var BlogFreeYellow = _styledComponents["default"].div(_templateObject5());

exports.BlogFreeYellow = BlogFreeYellow;

var BlogFreeCard = _styledComponents["default"].div(_templateObject6());

exports.BlogFreeCard = BlogFreeCard;

var BlogTextWrapper = _styledComponents["default"].div(_templateObject7());

exports.BlogTextWrapper = BlogTextWrapper;

var BlogCardText = _styledComponents["default"].p(_templateObject8());

exports.BlogCardText = BlogCardText;

var BlogCardNum = _styledComponents["default"].p(_templateObject9());

exports.BlogCardNum = BlogCardNum;

var BlogCardTiny = _styledComponents["default"].p(_templateObject10());

exports.BlogCardTiny = BlogCardTiny;

var ExploreLinkWrapper = _styledComponents["default"].div(_templateObject11());

exports.ExploreLinkWrapper = ExploreLinkWrapper;

var ExploreLink = _styledComponents["default"].p(_templateObject12());

exports.ExploreLink = ExploreLink;

var ExploreLinkIcon = _styledComponents["default"].img(_templateObject13());

exports.ExploreLinkIcon = ExploreLinkIcon;