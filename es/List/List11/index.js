import React from 'react';
import Title from '../../Title';
import './index.less';

var List11 = function List11(_ref) {
  var data = _ref.data;
  return /*#__PURE__*/React.createElement("div", {
    className: "sc-list11"
  }, /*#__PURE__*/React.createElement(Title, {
    title: data === null || data === void 0 ? void 0 : data.title,
    line: data === null || data === void 0 ? void 0 : data.line
  }), data === null || data === void 0 ? void 0 : data.list.map(function (item, i) {
    return /*#__PURE__*/React.createElement("div", {
      className: "m-item",
      key: i
    }, /*#__PURE__*/React.createElement("div", {
      className: "m-hd"
    }, /*#__PURE__*/React.createElement("span", null, item === null || item === void 0 ? void 0 : item.title), /*#__PURE__*/React.createElement("label", {
      className: data.round ? "round" : ""
    }, item === null || item === void 0 ? void 0 : item.label)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", null), /*#__PURE__*/React.createElement("spans", {
      className: data.bottom ? "bottom" : ""
    }, item === null || item === void 0 ? void 0 : item.cnt)));
  }));
};

export default List11;