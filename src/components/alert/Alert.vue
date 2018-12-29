<template>
  <div :class="classes" v-show="!closed">
    <strong>
      <slot name="strong"></slot>
    </strong>
    <slot></slot>
    <template v-if="link">
      <a class="alert-link" href="javascript:;" @click.prevent="linkClick">{{ link }}</a>
    </template>
    <button @click="closeClick" v-if="closable" type="button" class="close" title="关闭"><span>&times;</span></button>
  </div>
</template>

<script>
import { looseIndexOf } from "../../utils/assist"

const alertTypes = ["success", "info", "warning", "danger"]

export default {
  name: "Alert",

  data() {
    return {
      closed: false
    }
  },

  props: {
    type: {
      type: String,
      required: true,
      validator(val) {
        return !looseIndexOf(alertTypes, val)
      }
    },

    link: String,

    closable: Boolean
  },

  computed: {
    classes() {
      return [
        "alert",
        {
          [`alert-${this.type}`]: this.type
        }
      ]
    }
  },

  methods: {
    linkClick(e) {
      this.$emit("link-click", e) 
    },

    closeClick(e) {
      this.$emit("on-close", e)
      this.closed = true
    }
  }
}
</script>
