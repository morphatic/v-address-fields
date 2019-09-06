import VStateSelect from './VStateSelect';
const VAddressFields = {
  install(Vue, options) {
    Vue.component('your-component', VStateSelect);
  }

};
export { VStateSelect };
export default VAddressFields;

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(VAddressFields);
}
//# sourceMappingURL=index.js.map