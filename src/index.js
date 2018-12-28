import Icon from "./components/icon"
import * as Btns from "./components/button"
import Label from "./components/label"

const install = (Vue) => {
  Vue.component("Icon", Icon)
  Object.keys(Btns).forEach(key => {
    Vue.component(key, Btns[key])    
  })
  Vue.component("Label", Label)
}

if(typeof window != "undefined" && window.Vue) {
  install(Vue)
}

export default {
  install,
  Icon,
  Btns,
  Label
}