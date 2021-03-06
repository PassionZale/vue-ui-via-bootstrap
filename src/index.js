import Icon from "./components/icon"
import * as Btns from "./components/button"
import Label from "./components/label"
import Badge from "./components/badge"
import Alert from "./components/alert"
import { BreadCrumb, BreadCrumbItem } from "./components/breadcrumb"
import Container from "./components/container"
import Image from "./components/image"
import * as Groups from "./components/listgroup"
import Panel from "./components/panel"
import Page from "./components/page"
import {Col, Row} from "./components/grid"
import {Tab, TabItem} from "./components/tab"
import { DropDown, DropDownItem } from "./components/dropdown"

const install = (Vue) => {
  Vue.component("bIcon", Icon)
  Object.keys(Btns).forEach(key => {
    Vue.component(`b${key}`, Btns[key])    
  })
  Vue.component("bLabel", Label)
  Vue.component("bBadge", Badge)
  Vue.component("bAlert", Alert)
  Vue.component("bBreadCrumb", BreadCrumb)
  Vue.component("bBreadCrumbItem", BreadCrumbItem)
  Vue.component("bContainer", Container)
  Vue.component("bImage", Image)
  Object.keys(Groups).forEach(key => {
    Vue.component(`b${key}`, Groups[key])    
  })
  Vue.component("bPanel", Panel)
  Vue.component("bPage", Page)
  Vue.component("bCol", Col)
  Vue.component("bRow", Row)
  Vue.component("bTab", Tab)
  Vue.component("bTabItem", TabItem)
  Vue.component("bDropDown", DropDown)
  Vue.component("bDropDownItem", DropDownItem)
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
  Image,
  Groups,
  Panel,
  Page,
  Col,
  Row,
  Tab,
  TabItem,
  DropDown,
  DropDownItem,
}