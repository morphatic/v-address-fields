// Imported Types
/// <reference path="../node_modules/vuetify/src/globals.d.ts" />
import Vue from 'vue'; // import { VuetifyThemeVariant } from 'vuetify/types/services/theme'
// import { ElementStyles } from '../types'
// 3rd Party Libs
// import merge from 'deepmerge' // EXAMPLE; You can remove this if you have no 3rd party libs
// Styles

import "../src/VStateSelect.sass";
/**
 * !IMPORTANT: Import the Vuetify components you plan to extend here.
 *             VTextField is left here as an example. You should remove
 *             or replace it with the component you want to extend.
 */
// @ts-ignore

import { VTextField } from 'vuetify/lib'; // Create Base Mixins and Define Custom Properties

const base = Vue.extend({
  mixins: [VTextField]
}); // Extend VTextField to define the VStripeCard component

export default base.extend().extend({
  name: 'v-state-select',
  props: {
    foo: {
      type: String,
      default: 'bar'
    }
  },
  data: () => ({}),
  computed: {},
  watch: {},

  mounted() {},

  methods: {
    bar() {
      return 'baz';
    }

  }
});
//# sourceMappingURL=VStateSelect.js.map