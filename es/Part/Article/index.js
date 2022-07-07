import React, { useState, useEffect } from 'react';
import Title from '../../Title';
import './index.less';

var Article = function Article(_ref) {
  var data = _ref.data;
  return /*#__PURE__*/React.createElement("div", {
    className: "sc-article"
  }, /*#__PURE__*/React.createElement(Title, {
    title: data === null || data === void 0 ? void 0 : data.title,
    line: data === null || data === void 0 ? void 0 : data.line
  }), /*#__PURE__*/React.createElement("div", {
    className: "m-bd"
  }, /*#__PURE__*/React.createElement("div", {
    className: "m-wrap"
  }, data.list.map(function (item, i) {
    return /*#__PURE__*/React.createElement("p", null, item);
  })), data.showImg && /*#__PURE__*/React.createElement("div", {
    className: "m-img"
  }, /*#__PURE__*/React.createElement("img", {
    src: data.img
  }))), data.showBtn && /*#__PURE__*/React.createElement("div", {
    className: "m-ft"
  }, /*#__PURE__*/React.createElement("a", {
    className: "btn01",
    href: data.btn.url
  }, data.btn.name)));
};

export default Article;