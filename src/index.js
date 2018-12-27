import Icon from "./components/icon"

const install = (Vue) => {
  Vue.component("Icon", Icon)
}

if(typeof window != "undefined" && window.Vue) {
  install(Vue)
}

export default {
  install,
  Icon
}