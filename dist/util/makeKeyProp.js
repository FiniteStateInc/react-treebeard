"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _randomString = _interopRequireDefault(require("./randomString"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var makeKeyProp = function makeKeyProp(node) {
  return node.id || (0, _randomString["default"])();
};

var _default = makeKeyProp;
exports["default"] = _default;