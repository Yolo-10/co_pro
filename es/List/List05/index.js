import React from 'react';
import Title from '../../Title';
import './index.less';
import icon_ossm from '../../img/ossm.svg';

var List05 = function List05(_ref) {
  var data = _ref.data;
  return /*#__PURE__*/React.createElement("div", {
    className: "sc-list05"
  }, /*#__PURE__*/React.createElement(Title, {
    title: data === null || data === void 0 ? void 0 : data.title,
    line: data === null || data === void 0 ? void 0 : data.line
  }), /*#__PURE__*/React.createElement("div", {
    className: "m-bd"
  }, data === null || data === void 0 ? void 0 : data.list.map(function (item, i) {
    return /*#__PURE__*/React.createElement("div", {
      className: item.ossm ? "m-item ossm" : "m-item",
      key: i
    }, item.ossm && /*#__PURE__*/React.createElement("div", {
      className: "m-icon"
    }, /*#__PURE__*/React.createElement("img", {
      src: icon_ossm
    })), /*#__PURE__*/React.createElement("label", {
      className: data.icon ? 'icon' : ''
    }, item.title), /*#__PURE__*/React.createElement("span", null, item.cnt), /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("a", null, data.btn)));
  })));
};

export default List05;