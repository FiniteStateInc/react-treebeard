"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _common = require("../common");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Header = function Header(_ref) {
  var onSelect = _ref.onSelect,
      node = _ref.node,
      style = _ref.style,
      customStyles = _ref.customStyles;
  return _react["default"].createElement("div", {
    style: style.base,
    onClick: onSelect
  }, _react["default"].createElement(_common.Div, {
    style: node.selected ? _objectSpread({}, style.title, {}, customStyles.header.title) : style.title
  }, node.name));
};

Header.propTypes = {
  onSelect: _propTypes["default"].func,
  style: _propTypes["default"].object,
  customStyles: _propTypes["default"].object,
  node: _propTypes["default"].object.isRequired
};
Header.defaultProps = {
  customStyles: {}
};
var _default = Header;
exports["default"] = _default;