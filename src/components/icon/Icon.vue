<template>
  <span :class="classes" :style="styles" @click="click"></span>
</template>

<script>
export default {
  name: "Icon",

  props: {
    name: { type: String, required: true },
    size: [String, Number],
    color: [String]
  },

  computed: {
    classes() {
      return `glyphicon glyphicon-${this.name}`
    },

    styles() {
      let style = {};
      
      this.size && (style["font-size"] = `${this.size}px`);

      this.color && (style["color"] = this.color);

      return style;
    }
  },

  methods: {
    click(e) {
      this.$emit("click", e);
    },
  }

}
</script>

