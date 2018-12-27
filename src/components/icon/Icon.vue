<template>
  <span :class="classes" @click="click"></span>
</template>

<script>
export default {
  name: "Icon",

  props: {
    name: { type: String, required: true }
  },

  computed: {
    classes() {
      return `glyphicon glyphicon-${this.name}`
    },
  },

  methods: {
    click(e) {
      this.$emit("click", e);
    },
  }

}
</script>

