<template>
  <span :class="classes">
    <slot></slot>
  </span>
</template>

<script>
import { looseIndexOf } from "../../utils/assist"

const labelTypes = ["default", "primary", "success", "info", "warning", "danger"]

export default {
  name: "Label",

  props: {
    type: {
      type: String,
      default: "default",
      validator(val) {
        return !looseIndexOf(labelTypes, val)
      }
    },
  },

  computed: {
    classes() {
      return [
        "label",
        {
          [`label-${this.type}`]: this.type,
        }
      ]
    }
  }
}
</script>
