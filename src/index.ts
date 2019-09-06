import { VueConstructor } from 'vue'
import VStateSelect from './VStateSelect'

const VAddressFields = {
  install (Vue: VueConstructor, options?: any) {
    Vue.component('your-component', VStateSelect)
  },
}

export { VStateSelect }
export default VAddressFields

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(VAddressFields)
}
