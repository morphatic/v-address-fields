"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vue = _interopRequireDefault(require("vue"));

var _usaStates = require("usa-states");

require("../src/VStateSelect.sass");

var _lib = require("vuetify/lib");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Create Base Mixins and Define Custom Properties
var base = _vue["default"].extend({
  mixins: [_lib.VAutocomplete]
}); // Extend VAutocomplete to define the VStateSelect component


var _default2 = base.extend().extend({
  name: 'v-state-select',
  props: {
    contiguousOnly: {
      type: Boolean,
      "default": false
    },
    exclude: {
      type: Array,
      "default": function _default() {
        return [];
      }
    },
    includeTerritories: {
      type: Boolean,
      "default": false
    },
    storedValue: {
      type: String,
      "default": 'abbr'
    },
    text: {
      type: String,
      "default": 'name'
    }
  },
  computed: {
    allItems: function allItems() {
      var contiguousOnly = this.contiguousOnly,
          exclude = this.exclude,
          includeTerritories = this.includeTerritories,
          storedValue = this.storedValue,
          text = this.text;
      var usaStates = new _usaStates.UsaStates({
        contiguousOnly: contiguousOnly,
        exclude: exclude,
        includeTerritories: includeTerritories
      });
      return usaStates.format({
        $text: text,
        $value: storedValue
      });
    },
    classes: function classes() {
      return _objectSpread({}, _lib.VAutocomplete.options.computed.classes.call(this), {
        'v-state-select': true
      });
    }
  }
});

exports["default"] = _default2;
//# sourceMappingURL=VStateSelect.js.map