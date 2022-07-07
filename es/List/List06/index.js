import React, { useState, useEffect } from 'react';
import Title from '../../Title';
import './index.less';

var List06 = function List06(_ref) {
  var data = _ref.data;
  return /*#__PURE__*/React.createElement("div", {
    className: "sc-list06"
  }, /*#__PURE__*/React.createElement(Title, {
    title: data === null || data === void 0 ? void 0 : data.title,
    line: data === null || data === void 0 ? void 0 : data.line
  }), /*#__PURE__*/React.createElement("div", {
    className: "m-bd"
  }, data === null || data === void 0 ? void 0 : data.list.map(function (item, i) {
    return /*#__PURE__*/React.createElement("div", {
      className: "m-item",
      key: i
    }, /*#__PURE__*/React.createElement("div", {
      className: "m-tl"
    }, item.name), /*#__PURE__*/React.createElement("div", {
      className: "m-ossm"
    }, "\u3053\u3093\u306A\u65B9\u306B\u304A\u3059\u3059\u3081"), /*#__PURE__*/React.createElement("div", {
      className: "m-rec"
    }, item.rec.map(function (o, j) {
      return /*#__PURE__*/React.createElement("li", {
        key: j
      }, o);
    })), /*#__PURE__*/React.createElement("div", {
      className: "m-desc"
    }, item.desc), /*#__PURE__*/React.createElement("div", {
      className: "m-ft"
    }, item.list.map(function (o, j) {
      return /*#__PURE__*/React.createElement("div", {
        className: "m-list",
        key: j
      }, /*#__PURE__*/React.createElement("div", {
        className: "m-row"
      }, /*#__PURE__*/React.createElement("label", null, o.m), /*#__PURE__*/React.createElement("em", null, o.v)), /*#__PURE__*/React.createElement("div", {
        className: "m-row"
      }, /*#__PURE__*/React.createElement("span", null, o.d)), /*#__PURE__*/React.createElement("div", {
        className: "m-row"
      }, /*#__PURE__*/React.createElement("span", null, o.o)));
    }), /*#__PURE__*/React.createElement("div", {
      className: "m-fn"
    }, /*#__PURE__*/React.createElement("a", null, "\u3054\u4E88\u7D04\u306F\u3053\u3061\u3089"))));
  })));
};

export default List06;