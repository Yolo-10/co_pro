import React from 'react';
import Title from '../../Title';
import './index.less';

var List07 = function List07(_ref) {
  var data = _ref.data;
  return /*#__PURE__*/React.createElement("div", {
    className: "sc-list07"
  }, /*#__PURE__*/React.createElement(Title, {
    title: data === null || data === void 0 ? void 0 : data.title,
    line: data === null || data === void 0 ? void 0 : data.line
  }), /*#__PURE__*/React.createElement("div", {
    className: "m-bd"
  }, data === null || data === void 0 ? void 0 : data.list.map(function (item, i) {
    return /*#__PURE__*/React.createElement("div", {
      className: "m-item m-bdy",
      key: i
    }, /*#__PURE__*/React.createElement("div", {
      className: "m-lt"
    }, (item === null || item === void 0 ? void 0 : item.title) && /*#__PURE__*/React.createElement("div", {
      className: "title"
    }, item === null || item === void 0 ? void 0 : item.title), (item === null || item === void 0 ? void 0 : item.label) && /*#__PURE__*/React.createElement("div", {
      className: "label"
    }, item === null || item === void 0 ? void 0 : item.label)), /*#__PURE__*/React.createElement("div", {
      className: "m-rt"
    }, (item === null || item === void 0 ? void 0 : item.list[0]) && /*#__PURE__*/React.createElement("div", {
      className: "m-cnt"
    }, item.list.map(function (o, j) {
      return /*#__PURE__*/React.createElement("span", {
        key: j
      }, (data === null || data === void 0 ? void 0 : data.id) && /*#__PURE__*/React.createElement("label", null, j + 1, ". "), " ", o, " ", /*#__PURE__*/React.createElement("br", null));
    })), (item === null || item === void 0 ? void 0 : item.cnt) && /*#__PURE__*/React.createElement("div", {
      className: "m-cnt m-p"
    }, item === null || item === void 0 ? void 0 : item.cnt)));
  })));
};

export default List07;