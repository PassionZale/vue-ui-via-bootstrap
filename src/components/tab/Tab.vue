<template>
  <!-- https://codepen.io/tatimblin/pen/oWKdjR -->
  <div>
    <ul class="nav nav-tabs">
      <li role="presentation" class="active"><a href="#">Home</a></li>
      <li role="presentation"><a href="#">Profile</a></li>
      <li role="presentation"><a href="#">Messages</a></li>
    </ul>
    <div class="tab-content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "Tab",

  props: {
    pills: Boolean
  },

  computed: {
    classes() {
      return [
        "nav",
        "nav-tabs",
        {
          "nav-pills": this.pills
        }
      ]
    }
  },

  data() {
    return {
      items: []
    }
  },

  created() {
    console.log(this.$children)
    this.items = this.$children.filter(item => item.name === "TabItem")
  }
}
</script>