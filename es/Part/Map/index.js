import React, { useState, useEffect } from 'react';
import { GoogleMap, LoadScript, InfoWindow } from '@react-google-maps/api';
import './index.less';
var KEY = "AIzaSyBDG2YUxXicahL-Zy21Gu7YZkgqYyT5kbc";

var Map = function Map(_ref) {
  var data = _ref.data;
  return /*#__PURE__*/React.createElement("div", {
    className: "sc-map"
  }, /*#__PURE__*/React.createElement(LoadScript, {
    googleMapsApiKey: KEY
  }, /*#__PURE__*/React.createElement(GoogleMap, data.props, /*#__PURE__*/React.createElement(InfoWindow, {
    position: data.props.center
  }, /*#__PURE__*/React.createElement("div", {
    className: "m-info"
  }, /*#__PURE__*/React.createElement("h1", null, data.info.name), /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("span", null, data.info.code), /*#__PURE__*/React.createElement("span", null, data.info.phone), /*#__PURE__*/React.createElement("span", null, data.info.fax), /*#__PURE__*/React.createElement("span", null, data.info.addr)))))));
};

export default /*#__PURE__*/React.memo(Map);