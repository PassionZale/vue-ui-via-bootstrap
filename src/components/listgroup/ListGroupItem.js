import { looseIndexOf } from "../../utils/assist"

const tags = ["li", "a", "button"]
const types = ["success", "info", "warning", "danger"]

export default {
  name: "ListGroupItem",

  props: {
    tag: {
      type: String,
      default: "li",
      validator(val) {
        return !looseIndexOf(tags, val)
      }
    },

    active: Boolean,

    disabled: Boolean,

    type: {
      type: String,
      validator(val) {
        return !looseIndexOf(types, val)
      }
    }
  },

  computed: {
    classes() {
      return [
        "list-group-item",
        {
          "active": this.active,
          "disabled": this.disabled,
          [`list-group-item-${this.type}`]: this.type
        }
      ]
    }
  },

  render(h) {
    const vNodes = this.$slots.default === undefined ? [] : this.$slots.default
    const tag = this.tag
    const attrs = tag === "a" ? { href: "javascript:;" } : {}
    return h(
      tag,
      {
        class: this.classes,
        attrs,
        on: {
          click: (e) => {
            this.$emit("click", e)
          }
        }
      },
      vNodes
    )
  }
};