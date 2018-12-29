<template>
  <div>
    <ol :class="classes">
      <slot></slot>
    </ol>
  </div>
</template>

<script>
// import  BreadCrumbItem from "./BreadCrumbItem"
export default {
  name: "BreadCrumb",

  // components: { BreadCrumbItem },

  data() {
    return {
      form: {},
    }
  },

  props: {
    separator: {
      type: String,
      // default: "/"
    }
  },

  computed: {
    classes() {
      return [
        "breadcrumb"
      ]
    }
  },

  watch: {
    separator() {
      this.updateChildren();
    }
  },

  methods: {
    updateChildren() {
      this.$children.forEach((child) => {
        child.separator = this.separator;
      })
    }
  }
}
</script>


