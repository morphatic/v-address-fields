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
      lang: {
        t: (val: string) => val,
      },
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
    it('should register the your-component component', () => {
      Vue.use(VAddressFields)
      expect(Vue.options.components['your-component']).toBeTruthy()
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
        // @ts-ignore
        global.Stripe = Stripe
        const wrapper = mountFunction({
          propsData: { foo },
        })
        // replace the auto-generated `id` with one that matches
        const html = wrapper.html().replace(/div id="input-\d+"/, 'div id="input-1"')
        expect(html).toMatchSnapshot()
      })
        
      it('should have an property called `foo`', () => {
        // @ts-ignore
        global.Stripe = Stripe
        const wrapper = mountFunction({ propsData: { foo }, })
        expect(wrapper.attributes()).toBeDefined()
      })
    })
  
    describe('internal functions and events', () => {
      let wrapper
      beforeEach(() => {
        // capture console.warn
        const capture = m => { messages.push(m.toString()) }
        global.console.warn = jest.fn(capture)
        // @ts-ignore
        global.Stripe = Stripe
        wrapper = mountFunction({
          propsData: { foo }
        })
      })
  
      it('bar() should return "baz"', () => {
        const result = wrapper.vm.bar()
        expect(result).toBe('baz')
      })  
    })
  })
})
