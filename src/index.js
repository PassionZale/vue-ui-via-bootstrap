import Icon from "./components/icon"
import * as Btns from "./components/button"
import Label from "./components/label"
import Badge from "./components/badge"
import Alert from "./components/alert"
import BreadCrumb from "./components/breadcrumb"
import Container from "./components/container"
import Image from "./components/image"

const install = (Vue) => {
  Vue.component("Icon", Icon)
  Object.keys(Btns).forEach(key => {
    Vue.component(key, Btns[key])    
  })
  Vue.component("Label", Label)
  Vue.component("Badge", Badge)
  Vue.component("Alert", Alert)
  Vue.component("BreadCrumb", BreadCrumb)
  Vue.component("Container", Container)
  Vue.component("Image", Image)
}

if(typeof window != "undefined" && window.Vue) {
  install(Vue)
}

export default {
  install,
  Icon,
  Btns,
  Label,
  Badge,
  Alert,
  BreadCrumb,
  Container,
  Image
}