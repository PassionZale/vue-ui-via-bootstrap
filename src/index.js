import Icon from "./components/icon"
import Button from "./components/button"

const install = (Vue) => {
  Vue.component("Icon", Icon)
  Vue.component("Button", Button)
}

if(typeof window != "undefined" && window.Vue) {
  install(Vue)
}

export default {
  install,
  Icon,
  Button
}