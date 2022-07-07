import React from 'react';
import Title from '../../Title';
import './index.less';

var List10 = function List10(_ref) {
  var data = _ref.data;
  return /*#__PURE__*/React.createElement("div", {
    className: "sc-list10"
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
      className: "m-icon"
    }, /*#__PURE__*/React.createElement("img", {
      src: item === null || item === void 0 ? void 0 : item.icon
    })), /*#__PURE__*/React.createElement("div", {
      className: "m-cnt"
    }, item === null || item === void 0 ? void 0 : item.title.map(function (o, j) {
      return /*#__PURE__*/React.createElement("span", {
        key: j,
        className: "m-title"
      }, o);
    }), (item === null || item === void 0 ? void 0 : item.cnt) && /*#__PURE__*/React.createElement("div", null, item === null || item === void 0 ? void 0 : item.cnt), data.link ? /*#__PURE__*/React.createElement("label", null, (item === null || item === void 0 ? void 0 : item.src) && /*#__PURE__*/React.createElement("a", {
      href: item === null || item === void 0 ? void 0 : item.src,
      className: data.lbLine ? "m-label" : ""
    }, item === null || item === void 0 ? void 0 : item.link)) : ""));
  })));
};

export default List10;