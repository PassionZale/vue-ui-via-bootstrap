import Icon from "./components/icon"
import * as Btns from "./components/button"

const install = (Vue) => {
  Vue.component("Icon", Icon)
  Object.keys(Btns).forEach(key => {
    Vue.component(key, Btns[key])    
  })
}

if(typeof window != "undefined" && window.Vue) {
  install(Vue)
}

export default {
  install,
  Icon,
  Btns
}