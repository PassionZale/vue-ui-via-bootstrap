import { hasOwn, toRawType } from "../../utils/assist"

// 校验对象中的 key 是否含有 span
// 因为 span 是必选项
const propObjValidator = obj => {
  if(toRawType(obj) === "Object") {
    if(!hasOwn(obj, "span")) {
      return false
    }
  }
  return true
}

// 将参数序列化为 {span, offset} 的 Object
// <b-col :md="4"></b-col>                              md: { span: 4, offset: null }
// <b-col :md="{span: 4, offset: 0}"></b-col>           md: { span: 4, offset: null }
// <b-col :md="{span: 4, offset: 3}"></b-col>           md: { span: 4, offset: 3 }
// <b-col :md="{span: 4, offset: 3, a: 1}"></b-col>     md: { span: 4, offset: 3 }
const formatCls = param => {
  let classes = {span: null, offset: null}
  if(toRawType(param) === "Number") {
    classes = Object.assign({}, classes, {span: param, offset: null})
  }
  if(toRawType(param) === "Object") {
    classes = Object.assign({}, classes, {span: param.span, offset: param.offset || null})
  }
  return classes;
}

export default {
  name: "Col",

  props: {
    xs: {
      type: [Number, Object],
      validator(val) {
        return propObjValidator(val)
      }
    },
    sm: {
      type: [Number, Object],
      validator(val) {
        return propObjValidator(val)
      }
    },
    md: {
      type: [Number, Object],
      validator(val) {
        return propObjValidator(val)
      }
    },
    lg: {
      type: [Number, Object],
      validator(val) {
        return propObjValidator(val)
      }
    },
  },

  computed: {
    cls_xs() {
      return formatCls(this.xs)
    },
    cls_sm() {
      return formatCls(this.sm)
    },
    cls_md() {
      return formatCls(this.md)
    },
    cls_lg() {
      return formatCls(this.lg)
    }
  },

  render(h){
    const vNodes = this.$slots.default === undefined ? [] : this.$slots.default
    return h(
      "div",
      {
        class: {
          [`col-xs-${this.cls_xs.span}`]: this.cls_xs.span,
          [`col-xs-offset-${this.cls_xs.span}`]: this.cls_xs.offset !== null,

          [`col-sm-${this.cls_sm.span}`]: this.cls_sm.span,
          [`col-sm-offset-${this.cls_sm.span}`]: this.cls_sm.offset !== null,

          [`col-md-${this.cls_md.span}`]: this.cls_md.span,
          [`col-md-offset-${this.cls_md.span}`]: this.cls_md.offset !== null,

          [`col-lg-${this.cls_lg.span}`]: this.cls_lg.span,
          [`col-lg-offset-${this.cls_lg.span}`]: this.cls_lg.offset !== null,
        }
      },
      vNodes
    )
  }
}