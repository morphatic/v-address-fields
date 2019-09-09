// Imported Types
/// <reference path="../node_modules/vuetify/src/globals.d.ts" />
import Vue from 'vue'; // 3rd Party Libs

import { UsaStates } from 'usa-states'; // Styles

import "../src/VStateSelect.sass";
/**
 * Import the Vuetify components you plan to extend here.
 */
// @ts-ignore

import { VAutocomplete } from 'vuetify/lib'; // Create Base Mixins and Define Custom Properties

const base = Vue.extend({
  mixins: [VAutocomplete]
}); // Extend VAutocomplete to define the VStateSelect component

export default base.extend().extend({
  name: 'v-state-select',
  props: {
    contiguousOnly: {
      type: Boolean,
      default: false
    },
    exclude: {
      type: Array,
      default: () => []
    },
    includeTerritories: {
      type: Boolean,
      default: false
    },
    storedValue: {
      type: String,
      default: 'abbr'
    },
    text: {
      type: String,
      default: 'name'
    }
  },
  computed: {
    allItems() {
      const {
        contiguousOnly,
        exclude,
        includeTerritories,
        storedValue,
        text
      } = this;
      const usaStates = new UsaStates({
        contiguousOnly,
        exclude,
        includeTerritories
      });
      return usaStates.format({
        $text: text,
        $value: storedValue
      });
    },

    classes() {
      return { ...VAutocomplete.options.computed.classes.call(this),
        'v-state-select': true
      };
    }

  }
});
//# sourceMappingURL=VStateSelect.js.map