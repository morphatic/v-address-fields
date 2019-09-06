"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "VStateSelect", {
  enumerable: true,
  get: function get() {
    return _VStateSelect["default"];
  }
});
exports["default"] = void 0;

var _VStateSelect = _interopRequireDefault(require("./VStateSelect"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var VAddressFields = {
  install: function install(Vue, options) {
    Vue.component('your-component', _VStateSelect["default"]);
  }
};
var _default = VAddressFields;
exports["default"] = _default;

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(VAddressFields);
}
//# sourceMappingURL=index.js.map