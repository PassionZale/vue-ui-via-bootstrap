<template>
  <button 
    type="button"
    :disabled="disabled"
    :class="classes"
    @click="click">
    <Icon v-if="icon" :name="icon"></Icon>
    <slot></slot>
  </button>
</template>

<script>
import { looseIndexOf } from "../../utils/assist"
import Icon from "../icon"

const btnTypes = ["default", "primary", "success", "info", "warning", "danger", "link"]

const btnSizes = ["xs", "sm", "lg"]

export default {
  name: "Button",

  components: { Icon },

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

    icon: String,

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
          "btn-block": this.long,
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

