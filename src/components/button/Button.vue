<template>
  <button 
    type="button"
    :disabled="disabled"
    :class="classes"
    @click="click">
    <slot></slot>
  </button>
</template>

<script>
import { looseIndexOf } from "../../utils/assist"

// 按钮预定义样式
const btnTypes = ["default", "primary", "success", "info", "warning", "danger", "link"]
// 按钮尺寸
const btnSizes = ["xs", "sm", "lg"]

export default {
  name: "Button",

  props: {
    type: {
      type: String,
      default: "default",
      validator(val) {
        return !looseIndexOf(btnTypes, val)
      }
    },

    size: {
      type: String,
      validator(val) {
        return !looseIndexOf(btnSizes, val)
      }
    },

    long: Boolean,

    disabled: Boolean,
  },

  computed: {
    classes() {
      return [
        "btn",
        {
          [`btn-${this.type}`]: this.type,
          [`btn-${this.size}`]: this.size,
          'btn-block': this.long,
        }
      ]      
    }
  },

  methods: {
    click(e) {
      this.$emit("click", e)
    }
  }
}
</script>

