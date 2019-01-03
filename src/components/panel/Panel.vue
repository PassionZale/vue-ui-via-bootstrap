<template>
  <div :class="classes">
    <div class="panel-headding">
      <slot name="header"></slot>
    </div>
    <div class="panel-body">
      <slot name="body"></slot>
    </div>
    <slot></slot>
    <div class="panel-footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script>
import { looseIndexOf } from "../../utils/assist"

const types = ["default", "primary", "success", "info", "warning", "danger"]

export default {
  name: "Panel",

  props: {
    type: {
      type: String,
      default: "default",
      validator(val) {
        return !looseIndexOf(types, val)
      }
    }
  },

  computed: {
    classes() {
      return [
        "panel",
        {
          [`panel-${this.type}`]: this.type
        }
      ]
    }
  }

}
</script>

