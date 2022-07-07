import React from 'react';
import './index.less';

var List08 = function List08(_ref) {
  var data = _ref.data;
  return /*#__PURE__*/React.createElement("div", {
    className: "sc-list08"
  }, /*#__PURE__*/React.createElement("div", {
    className: "m-bd"
  }, data === null || data === void 0 ? void 0 : data.list.map(function (item, i) {
    return /*#__PURE__*/React.createElement("div", {
      className: "m-item",
      key: i
    }, /*#__PURE__*/React.createElement("div", {
      className: "m-top"
    }, (item === null || item === void 0 ? void 0 : item.title) && /*#__PURE__*/React.createElement("div", {
      className: "title"
    }, item === null || item === void 0 ? void 0 : item.title)), /*#__PURE__*/React.createElement("div", {
      className: "m-bdy ".concat(data.line ? 'm-line' : '')
    }, (item === null || item === void 0 ? void 0 : item.label) && (data === null || data === void 0 ? void 0 : data.label) && /*#__PURE__*/React.createElement("label", {
      className: "m-lb"
    }, item === null || item === void 0 ? void 0 : item.label), (item === null || item === void 0 ? void 0 : item.list[0]) && /*#__PURE__*/React.createElement("div", {
      className: "m-cnt"
    }, item.list.map(function (o, j) {
      return /*#__PURE__*/React.createElement("span", {
        key: j
      }, (data === null || data === void 0 ? void 0 : data.id) && /*#__PURE__*/React.createElement("label", null, j + 1, ". "), " ", o, " ", /*#__PURE__*/React.createElement("br", null));
    }))));
  })));
};

export default List08;