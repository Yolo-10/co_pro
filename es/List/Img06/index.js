import { presetPalettes } from '@ant-design/colors';
import React from 'react';
import Title from '../../Title';
import './index.less';

var Img06 = function Img06(_ref) {
  var data = _ref.data;
  var colors = presetPalettes[data.color];
  return /*#__PURE__*/React.createElement("div", {
    className: "sc-img06",
    style: {
      '--bgColor': colors[1]
    }
  }, /*#__PURE__*/React.createElement(Title, {
    title: data === null || data === void 0 ? void 0 : data.title,
    line: data === null || data === void 0 ? void 0 : data.line
  }), data === null || data === void 0 ? void 0 : data.list.map(function (item, i) {
    return /*#__PURE__*/React.createElement("div", {
      className: "m-item",
      key: i,
      style: {
        '--itemBgColor': colors[2]
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "m-img"
    }, /*#__PURE__*/React.createElement("img", {
      src: item === null || item === void 0 ? void 0 : item.img
    })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", null, /*#__PURE__*/React.createElement("span", null, item === null || item === void 0 ? void 0 : item.label)), /*#__PURE__*/React.createElement("div", null, item === null || item === void 0 ? void 0 : item.title), /*#__PURE__*/React.createElement("div", null, item === null || item === void 0 ? void 0 : item.cnt)));
  }));
};

export default Img06;