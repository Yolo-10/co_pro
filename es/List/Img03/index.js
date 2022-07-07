import React from 'react';
import Title from '../../Title';
import './index.less';

var Img03 = function Img03(_ref) {
  var data = _ref.data;
  return /*#__PURE__*/React.createElement("div", {
    className: "sc-Img03"
  }, /*#__PURE__*/React.createElement("div", {
    className: "m-bd"
  }, data === null || data === void 0 ? void 0 : data.list.map(function (item, i) {
    return i <= 2 && /*#__PURE__*/React.createElement("div", {
      className: "m-item",
      key: i
    }, /*#__PURE__*/React.createElement("div", {
      className: "m-img"
    }, /*#__PURE__*/React.createElement("img", {
      src: item.img,
      alt: ""
    })), /*#__PURE__*/React.createElement("div", {
      className: "m-rt ".concat(!item.change ^ data.change ? 'm-ch' : '')
    }, (item === null || item === void 0 ? void 0 : item.title) && /*#__PURE__*/React.createElement(Title, {
      title: item === null || item === void 0 ? void 0 : item.title,
      line: data === null || data === void 0 ? void 0 : data.line
    }), (item === null || item === void 0 ? void 0 : item.label) && (data === null || data === void 0 ? void 0 : data.label) && /*#__PURE__*/React.createElement("div", {
      className: "m-lab"
    }, item.label), (item === null || item === void 0 ? void 0 : item.cnt) && /*#__PURE__*/React.createElement("div", {
      className: "m-cnt"
    }, item.cnt)));
  })));
};

export default Img03;