import { Image, Tag, Button } from 'antd';
import React from 'react';
import Title from '../../Title';
import './index.less';

var Img02 = function Img02(_ref) {
  var data = _ref.data;
  return /*#__PURE__*/React.createElement("div", {
    className: "sc-Img02"
  }, /*#__PURE__*/React.createElement(Title, {
    title: data === null || data === void 0 ? void 0 : data.title,
    line: data === null || data === void 0 ? void 0 : data.line
  }), /*#__PURE__*/React.createElement("div", {
    className: "m-bd"
  }, data === null || data === void 0 ? void 0 : data.list.map(function (item, i) {
    return i <= 2 && /*#__PURE__*/React.createElement("div", {
      className: "m-item",
      key: i
    }, /*#__PURE__*/React.createElement("div", {
      className: "m-img"
    }, /*#__PURE__*/React.createElement("img", {
      src: item.img,
      alt: ""
    })), /*#__PURE__*/React.createElement("div", {
      className: "m-cnt"
    }, (item === null || item === void 0 ? void 0 : item.title) && /*#__PURE__*/React.createElement("div", {
      className: "m-cnt-g1"
    }, item === null || item === void 0 ? void 0 : item.title), (item === null || item === void 0 ? void 0 : item.cnt) && /*#__PURE__*/React.createElement("p", {
      className: "m-cnt-g2"
    }, item === null || item === void 0 ? void 0 : item.cnt), /*#__PURE__*/React.createElement("div", {
      className: "m-btn"
    }, (item === null || item === void 0 ? void 0 : item.btn) && (data === null || data === void 0 ? void 0 : data.btn) && /*#__PURE__*/React.createElement("a", {
      href: (item === null || item === void 0 ? void 0 : item.link) && (item === null || item === void 0 ? void 0 : item.link)
    }, /*#__PURE__*/React.createElement("button", null, item.btn)))));
  })));
};

export default Img02;