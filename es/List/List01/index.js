import React from 'react';
import Title from '../../Title';
import './index.less';

var List01 = function List01(_ref) {
  var data = _ref.data;
  return /*#__PURE__*/React.createElement("div", {
    className: "sc-list01"
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
    }, (item === null || item === void 0 ? void 0 : item.title) && /*#__PURE__*/React.createElement("label", null, (data === null || data === void 0 ? void 0 : data.id1) && /*#__PURE__*/React.createElement("span", null, i + 1, " ."), " ", item === null || item === void 0 ? void 0 : item.title)), item.cnt.map(function (o, j) {
      return /*#__PURE__*/React.createElement("span", {
        key: j
      }, (data === null || data === void 0 ? void 0 : data.id2) && /*#__PURE__*/React.createElement("label", null, j + 1, ". "), " ", o);
    }), item.list.map(function (o, j) {
      return /*#__PURE__*/React.createElement("li", {
        className: (data === null || data === void 0 ? void 0 : data.id3) ? '' : 'np',
        key: j
      }, /*#__PURE__*/React.createElement("span", null, o));
    }));
  })));
};

export default List01;