import React from 'react';
import Title from '../../Title';
import './index.less';

var Img05 = function Img05(_ref) {
  var data = _ref.data;
  return /*#__PURE__*/React.createElement("div", {
    className: "sc-img05"
  }, /*#__PURE__*/React.createElement(Title, {
    title: data === null || data === void 0 ? void 0 : data.title,
    line: data === null || data === void 0 ? void 0 : data.line
  }), (data === null || data === void 0 ? void 0 : data.img1) && /*#__PURE__*/React.createElement("div", {
    className: "m-img"
  }, /*#__PURE__*/React.createElement("img", {
    src: data.img1
  }), /*#__PURE__*/React.createElement("div", null)), (data === null || data === void 0 ? void 0 : data.img2) && /*#__PURE__*/React.createElement("div", {
    className: "m-img"
  }, /*#__PURE__*/React.createElement("div", null), /*#__PURE__*/React.createElement("img", {
    src: data.img2
  })), /*#__PURE__*/React.createElement("div", null, (data === null || data === void 0 ? void 0 : data.label) && /*#__PURE__*/React.createElement("label", {
    className: data.bg ? "bg" : ""
  }, " ", data === null || data === void 0 ? void 0 : data.label)), /*#__PURE__*/React.createElement("div", {
    className: "m-cnt"
  }, data === null || data === void 0 ? void 0 : data.cnt));
};

export default Img05;