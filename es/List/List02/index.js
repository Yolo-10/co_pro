import React from 'react';
import Title from '../../Title';
import './index.less';

var List02 = function List02(_ref) {
  var data = _ref.data;
  var cls = "m-item ".concat(data.dash ? 'dash' : '', " ").concat(data.icon ? 'icon' : '');
  return /*#__PURE__*/React.createElement("div", {
    className: "sc-list02"
  }, /*#__PURE__*/React.createElement(Title, {
    title: data === null || data === void 0 ? void 0 : data.title,
    line: data === null || data === void 0 ? void 0 : data.line
  }), /*#__PURE__*/React.createElement("div", {
    className: "m-bd"
  }, data === null || data === void 0 ? void 0 : data.list.map(function (item, i) {
    return /*#__PURE__*/React.createElement("div", {
      className: cls,
      key: i
    }, item);
  })));
};

export default List02;