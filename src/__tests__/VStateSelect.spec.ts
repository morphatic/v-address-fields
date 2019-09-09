import Vue from 'vue'
// Utils
import { mount, MountOptions, Wrapper } from '@vue/test-utils'
import { inspect } from 'util' // okay to delete this line if you don't use node inspect

// Mocks
const vuetifyMocks = {
  $vuetify : {
    theme: {
      currentTheme: {
        error: '#ff0000',
      },
      dark: false,
    },
    lang: {
      t: (val: string) => val,
    },
  },
}

// Component to be tested
import VAddressFields, { VStateSelect } from '..'

// Data necessary for tests
const foo = 'bar'
const messages = []

describe('VStateSelect', () => {
  describe('installer', () => {
    it('should register the v-state-select component', () => {
      Vue.use(VAddressFields)
      expect(Vue.options.components['v-state-select']).toBeTruthy()
    })
  })

  describe('component', () => {
    type Instance = InstanceType<typeof VStateSelect>
    let mountFunction: (options?: MountOptions<Instance>) => Wrapper<Instance>
  
    beforeEach(() => {
      mountFunction = (options?: MountOptions<Instance>) => {
        return mount(VStateSelect, {
          mocks: {
            ...vuetifyMocks,
          },
          ...options,
        })
      }
    })
  
    describe('initialization', () => {
      beforeEach(() => {
        // reset messages
        messages.length = 0
        // capture console messages to prevent them from cluttering the terminal
        const capture = m => { messages.push(m.toString()) }
        global.console.error = jest.fn(capture)
        global.console.warn = jest.fn(capture)
        global.console.log = jest.fn(capture)
      })

      it('should render component and match snapshot', () => {
        const wrapper = mountFunction()
        // replace the auto-generated `id` with one that matches
        const html = wrapper.html().replace(/div id="input-\d+"/, 'div id="input-1"')
        expect(html).toMatchSnapshot()
      })

      it('should have a property called `contiguousOnly` that defaults to `false`', () => {
        const wrapper = mountFunction()
        expect(wrapper.vm.contiguousOnly).toBeDefined()
        expect(wrapper.vm.contiguousOnly).toBe(false)
      })

      it('should have a property called `exclude` that defaults to an empty array', () => {
        const wrapper = mountFunction()
        expect(wrapper.vm.exclude).toBeDefined()
        expect(wrapper.vm.exclude).toStrictEqual([])
      })

      it('should have a property called `includeTerritories` that defaults to `false`', () => {
        const wrapper = mountFunction()
        expect(wrapper.vm.includeTerritories).toBeDefined()
        expect(wrapper.vm.includeTerritories).toBe(false)
      })

      it('should have a property called `storedValue` that defaults to `abbr`', () => {
        const wrapper = mountFunction()
        expect(wrapper.vm.storedValue).toBeDefined()
        expect(wrapper.vm.storedValue).toBe('abbr')
      })

      it('should have a property called `text` that defaults to `name`', () => {
        const wrapper = mountFunction()
        expect(wrapper.vm.text).toBeDefined()
        expect(wrapper.vm.text).toBe('name')
      })

      it('should generate a list of 51 "state" items', () => {
        const wrapper = mountFunction()
        expect(wrapper.vm.allItems).toBeDefined()
        expect(wrapper.vm.allItems.length).toBe(51)
      })
    })
  })
})
