import React, { useState, useEffect } from 'react';
import { Carousel } from 'antd';
import Title from '../../Title';
import './index.less';

var Caro = function Caro(_ref) {
  var data = _ref.data;
  return /*#__PURE__*/React.createElement("div", {
    className: "sc-carousel"
  }, /*#__PURE__*/React.createElement(Title, {
    title: data === null || data === void 0 ? void 0 : data.title,
    line: data === null || data === void 0 ? void 0 : data.line
  }), /*#__PURE__*/React.createElement("div", {
    className: "m-bd"
  }, /*#__PURE__*/React.createElement(Carousel, {
    autoplay: true,
    style: {
      "width": "100%"
    }
  }, data.list.map(function (item, i) {
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("img", {
      src: item.img
    }));
  }))));
};

export default Caro;