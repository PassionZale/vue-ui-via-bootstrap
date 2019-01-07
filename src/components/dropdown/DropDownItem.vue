<template>
  <div class="dropdown-menu-item">

    <li class="divider" v-if="divider"></li>

    <li class="dropdown-header">
      <slot name="header"></slot>
    </li>

    <li :class="{'disabled': disabled}" @click="click">
      <a href="javascript:;">
        <slot></slot>
      </a>
    </li>

  </div>
</template>

<script>
export default {
  name: "DropDownItem",

  props: {
    disabled: Boolean,
    divider: Boolean
  },

  methods: {
    click(e) {
      if(this.disabled) {
        return false;
      }
      this.$emit("click", e)
    }
  }
}
</script>

<style lang="less">
.dropdown-menu-item>li>a {
  display: block;
  padding: 3px 20px;
  clear: both;
  font-weight: 400;
  line-height: 1.42857143;
  color: #333;
  white-space: nowrap;
  &:hover,
  &:focus {
    color: #262626;
    text-decoration: none;
    background-color: #f5f5f5;
  }
}

.dropdown-menu-item>.disabled>a {
  color: #777;
  &:hover,
  &:focus {
    color: #777;
    text-decoration: none;
    cursor: not-allowed;
    background-color: transparent;
    background-image: none;
  }
}

</style>


