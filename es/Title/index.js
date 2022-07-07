import React from 'react';
import './index.less';

var Title = function Title(_ref) {
  var title = _ref.title,
      line = _ref.line;
  return /*#__PURE__*/React.createElement("div", {
    className: line ? "sc-title line" : "sc-title"
  }, title && /*#__PURE__*/React.createElement("span", null, title));
};

export default Title;