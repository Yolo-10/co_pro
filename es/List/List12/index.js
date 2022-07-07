import React from 'react';
import Title from '../../Title';
import './index.less';

var List12 = function List12(_ref) {
  var data = _ref.data;
  return /*#__PURE__*/React.createElement("div", {
    className: "sc-list12"
  }, /*#__PURE__*/React.createElement(Title, {
    title: data === null || data === void 0 ? void 0 : data.des,
    line: data === null || data === void 0 ? void 0 : data.line
  }), /*#__PURE__*/React.createElement("div", {
    className: "m-item"
  }, /*#__PURE__*/React.createElement("div", {
    className: "m-title"
  }, data === null || data === void 0 ? void 0 : data.title), /*#__PURE__*/React.createElement("div", {
    className: "m-cnt-g1"
  }, data === null || data === void 0 ? void 0 : data.cnt_g1), /*#__PURE__*/React.createElement("div", {
    className: "m-cnt-g2"
  }, data === null || data === void 0 ? void 0 : data.cnt_g2), /*#__PURE__*/React.createElement("div", {
    className: data.hr ? "hr" : ""
  }), /*#__PURE__*/React.createElement("div", {
    className: "m-cnt-g3"
  }, data === null || data === void 0 ? void 0 : data.cnt_g3)));
};

export default List12;