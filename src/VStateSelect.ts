// Imported Types
/// <reference path="../node_modules/vuetify/src/globals.d.ts" />
import Vue from 'vue'
// import { VuetifyThemeVariant } from 'vuetify/types/services/theme'
// import { ElementStyles } from '../types'

// 3rd Party Libs
// import merge from 'deepmerge' // EXAMPLE; You can remove this if you have no 3rd party libs

// Styles
import './VStateSelect.sass'

/**
 * Import the Vuetify components you plan to extend here.
 */
// @ts-ignore
import { VAutocomplete } from 'vuetify/lib'

// Create Base Mixins and Define Custom Properties
const base = Vue.extend({ mixins: [VAutocomplete] })
interface options extends InstanceType<typeof base> {
  /**
   * !Props unique to VStateSelect
   * Add properties of your project that TypeScript should know
   * about here.
   */
  foo: string
}
// Extend VTextField to define the VStripeCard component
export default base.extend<options>().extend({
  name: 'v-state-select',
  props: {
    foo: {
      type: String,
      default: 'bar',
    },
  },
  data: () => ({
  }),
  computed: {},
  watch: {},
  mounted () {},
  methods: {
    bar () {
      return 'baz'
    },
  },
})
