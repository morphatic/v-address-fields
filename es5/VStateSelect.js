"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vue = _interopRequireDefault(require("vue"));

require("../src/VStateSelect.sass");

var _lib = require("vuetify/lib");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// Imported Types
/// <reference path="../node_modules/vuetify/src/globals.d.ts" />
// import { VuetifyThemeVariant } from 'vuetify/types/services/theme'
// import { ElementStyles } from '../types'
// 3rd Party Libs
// import merge from 'deepmerge' // EXAMPLE; You can remove this if you have no 3rd party libs
// Styles

/**
 * !IMPORTANT: Import the Vuetify components you plan to extend here.
 *             VTextField is left here as an example. You should remove
 *             or replace it with the component you want to extend.
 */
// @ts-ignore
// Create Base Mixins and Define Custom Properties
var base = _vue["default"].extend({
  mixins: [_lib.VTextField]
}); // Extend VTextField to define the VStripeCard component


var _default = base.extend().extend({
  name: 'v-state-select',
  props: {
    foo: {
      type: String,
      "default": 'bar'
    }
  },
  data: function data() {
    return {};
  },
  computed: {},
  watch: {},
  mounted: function mounted() {},
  methods: {
    bar: function bar() {
      return 'baz';
    }
  }
});

exports["default"] = _default;
//# sourceMappingURL=VStateSelect.js.map