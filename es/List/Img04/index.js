import React from 'react';
import Title from '../../Title';
import './index.less';

var Img04 = function Img04(_ref) {
  var data = _ref.data;
  return /*#__PURE__*/React.createElement("div", {
    className: "sc-img04"
  }, /*#__PURE__*/React.createElement("div", {
    className: "m-img"
  }, /*#__PURE__*/React.createElement("img", {
    src: data.img
  })), /*#__PURE__*/React.createElement("div", {
    className: "m-bd"
  }, /*#__PURE__*/React.createElement("div", {
    className: data.line ? "m-title line" : "m-title"
  }, /*#__PURE__*/React.createElement("span", null, data === null || data === void 0 ? void 0 : data.title)), /*#__PURE__*/React.createElement("div", {
    className: "m-cnt"
  }, data === null || data === void 0 ? void 0 : data.cnt)));
};

export default Img04;