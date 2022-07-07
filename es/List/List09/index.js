import React from 'react';
import Title from '../../Title';
import './index.less';

var List09 = function List09(_ref) {
  var data = _ref.data;
  return /*#__PURE__*/React.createElement("div", {
    className: "sc-list09"
  }, /*#__PURE__*/React.createElement(Title, {
    title: data === null || data === void 0 ? void 0 : data.title,
    line: data === null || data === void 0 ? void 0 : data.tit
  }), /*#__PURE__*/React.createElement("div", {
    className: "m-bd"
  }, data === null || data === void 0 ? void 0 : data.list.map(function (item, i) {
    return /*#__PURE__*/React.createElement("div", {
      className: "m-item",
      key: i
    }, /*#__PURE__*/React.createElement("div", {
      className: "m-bdy ".concat(data.line ? 'm-line' : '')
    }, /*#__PURE__*/React.createElement("div", {
      className: "m-lt"
    }, (item === null || item === void 0 ? void 0 : item.label) && (data === null || data === void 0 ? void 0 : data.label) && /*#__PURE__*/React.createElement("div", {
      className: "m-lb"
    }, item === null || item === void 0 ? void 0 : item.label), (item === null || item === void 0 ? void 0 : item.title) && /*#__PURE__*/React.createElement("div", {
      className: "title"
    }, item === null || item === void 0 ? void 0 : item.title)), (item === null || item === void 0 ? void 0 : item.cnt) && /*#__PURE__*/React.createElement("div", {
      className: "m-cnt"
    }, item === null || item === void 0 ? void 0 : item.cnt)));
  })));
};

export default List09;