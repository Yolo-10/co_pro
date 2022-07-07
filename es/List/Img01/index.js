import { Image, Tag } from 'antd';
import React from 'react';
import Title from '../../Title';
import './index.less';

var Img01 = function Img01(_ref) {
  var data = _ref.data;
  return /*#__PURE__*/React.createElement("div", {
    className: "sc-Img01"
  }, /*#__PURE__*/React.createElement(Title, {
    title: data === null || data === void 0 ? void 0 : data.title,
    line: data === null || data === void 0 ? void 0 : data.line
  }), /*#__PURE__*/React.createElement("div", {
    className: "m-bd"
  }, data === null || data === void 0 ? void 0 : data.list.map(function (item, i) {
    return /*#__PURE__*/React.createElement("div", {
      className: "m-item",
      key: i
    }, (item === null || item === void 0 ? void 0 : item.img) && /*#__PURE__*/React.createElement("div", {
      className: "m-img"
    }, /*#__PURE__*/React.createElement("img", {
      src: item.img,
      alt: ""
    })), /*#__PURE__*/React.createElement("div", {
      className: "m-cnt"
    }, /*#__PURE__*/React.createElement("div", {
      className: "m-lab "
    }, /*#__PURE__*/React.createElement("div", {
      className: "m-ti"
    }, (item === null || item === void 0 ? void 0 : item.title) && /*#__PURE__*/React.createElement("label", null, item === null || item === void 0 ? void 0 : item.title)), /*#__PURE__*/React.createElement("div", {
      className: "m-tl"
    }, (item === null || item === void 0 ? void 0 : item.label) && /*#__PURE__*/React.createElement("label", null, " ", item === null || item === void 0 ? void 0 : item.label))), /*#__PURE__*/React.createElement("div", {
      className: "m-wd"
    }, (item === null || item === void 0 ? void 0 : item.cnt) && /*#__PURE__*/React.createElement("p", null, item === null || item === void 0 ? void 0 : item.cnt), (item === null || item === void 0 ? void 0 : item.list) && item.list.map(function (o, j) {
      return /*#__PURE__*/React.createElement("span", {
        key: j
      }, (data === null || data === void 0 ? void 0 : data.id) && /*#__PURE__*/React.createElement("label", null, j + 1, ". "), " ", o, " ", /*#__PURE__*/React.createElement("br", null));
    }))));
  })));
};

export default Img01;