import VStateSelect from './VStateSelect';
const VAddressFields = {
  install(Vue, options) {
    Vue.component('v-state-select', VStateSelect);
  }

};
export { VStateSelect };
export default VAddressFields;

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(VAddressFields);
}
//# sourceMappingURL=index.js.map