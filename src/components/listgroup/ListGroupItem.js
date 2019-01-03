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
    const header = h(
      "h4",
      {
        class: "list-group-item-heading",
        slot: "header"
      },
      this.$slots.header
    )

    const content = h(
      "p",
      {
        class: "list-group-item-text",
        slot: "content"
      },
      this.$slots.content
    )

    const tag = this.tag
    const attrs = tag === "a" ? { href: "javascript:;" } : { type: "button" }
    return h(
      tag,
      {
        class: this.classes,
        attrs,
        on: {
          click: (e) => {
            this.$emit("click", e)
          }
        },
      },
      [header, content, vNodes]
    )
  }
};