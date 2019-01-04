<template>
  <div class="tab-pane">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "TabItem",

  data() {
    return {
      isActive: false
    }
  }
}
</script>

