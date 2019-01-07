<template>
  <div :class="classes">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "TabItem",

  props: {
    name: {
      type: String,
      required: true
    },

    disabled: Boolean
  },

  data() {
    return {
      active: false
    }
  },

  computed: {
    classes() {
      return [
        "tab-pane",
        {
          "active": this.active,
        }
      ]
    }
  }
}
</script>

