// Imported Types
/// <reference path="../node_modules/vuetify/src/globals.d.ts" />
import Vue from 'vue'
// import { VuetifyThemeVariant } from 'vuetify/types/services/theme'

// 3rd Party Libs
import { UsaStates } from 'usa-states'

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
// Extend VAutocomplete to define the VStateSelect component
export default base.extend<options>().extend({
  name: 'v-state-select',
  props: {
    foo: {
      type: String,
      default: 'bar',
    },
  },
  data: () => ({
    usaStates: new UsaStates(),
  }),
  computed: {
    allItems (): object[] {
      return this.usaStates.format({
        $text: 'name',
        $value: 'abbr',
      })
    },
  },
  watch: {},
  mounted () {},
  methods: {
    bar () {
      return 'baz'
    },
  },
})
