<template>
  <!-- container & container-fluid 不能相互嵌套 -->
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

