<template>
  <!--<div>-->
    <li>
      <a :href=linkUrl v-if="href">
        <slot></slot>
      </a>
      <span  v-else>
        <slot></slot>
      </span>
      <!--<span v-html="separator" v-if="href"></span>-->
    </li>
  <!--</div>-->
</template>

<script>
export default {
  name: "BreadCrumbItem",

  data() {
    return {
      separator:"/"
    }
  },

  props: {
    classes: {
      type: String
    },
    href: {
      type: String
    },

  },
  updated () {
    this.$nextTick(() => {
      this.updateChildren();
    });
  },
  computed: {
    linkUrl() {
      const type = typeof this.href;
      return type == "string"? this.href : null;
    }
  },
  }
</script>
<!--<style lang="less" scoped>-->
  <!--.breadcrumb>li+li:before{-->
    <!--/*padding: 0 5px;*/-->
    <!--/*color: #ccc;*/-->
    <!--content: "";-->
  <!--}-->
<!--</style>-->
