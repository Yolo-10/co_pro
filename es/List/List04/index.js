import React from 'react';
import Title from '../../Title';
import './index.less';

var List04 = function List04(_ref) {
  var data = _ref.data;
  return /*#__PURE__*/React.createElement("div", {
    className: "sc-list04"
  }, /*#__PURE__*/React.createElement(Title, {
    title: data === null || data === void 0 ? void 0 : data.title,
    line: data === null || data === void 0 ? void 0 : data.line
  }), /*#__PURE__*/React.createElement("div", {
    className: "m-bd"
  }, data === null || data === void 0 ? void 0 : data.list.map(function (item, i) {
    return /*#__PURE__*/React.createElement("div", {
      className: "m-item",
      key: i
    }, /*#__PURE__*/React.createElement("label", {
      className: data.icon ? 'icon' : ''
    }, item.title), /*#__PURE__*/React.createElement("p", null, item.cnt.map(function (o, j) {
      return /*#__PURE__*/React.createElement("span", null, o);
    })));
  })));
};

export default List04;