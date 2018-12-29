<template>
  <div :class="classes">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "Container",

  props: {
    fluid: Boolean
  },

  computed: {
    classes() {
      return this.fluid ? "container-fluid" : "container"
    }
  }
}
</script>

