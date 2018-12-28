<template>
  <!-- 若要支持 justified ,必须使用 ButtonGroup 包裹 Button -->
  <div :class="classes">
    <slot></slot>
  </div>
</template>

<script>
import { looseIndexOf } from "../../utils/assist"

const btnGroupSizes = ["xs", "sm", "lg"]

export default {
  name: "ButtonGroup",

  props: {
    size: {
      type: String,
      validator(val) {
        return !looseIndexOf(btnGroupSizes, val)
      }
    },

    vertical: Boolean,

    justified: Boolean,

  },

  computed: {
    classes() {
      return [
        "btn-group",
        {
          [`btn-group-${this.size}`]: this.size,
          "btn-group-vertical": this.vertical,
          "btn-group-justified": this.justified,
        }
      ]
    }
  }
}
</script>

