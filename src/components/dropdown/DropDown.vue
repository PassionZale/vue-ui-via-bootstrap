<template>
  <div :class="clsDropDown" v-clickOutSide="clickOutSide" @click="menuShow = !menuShow">

    <Button :type="type" :size="size">
      <slot></slot>
      <span class="caret"></span>
    </Button>

    <ul :class="clsDropDownMenu" v-show="menuShow">
      <slot name="list"></slot>
    </ul>
    
  </div>
</template>

<script>
import { looseIndexOf } from "../../utils/assist"
import { Button } from "../button"
import clickOutSide from "../../directives/clickOutSide"

const positions = ["bottom", "top"]
const aligns = ["left", "right"]
const types = ["default", "primary", "success", "info", "warning", "danger"]
const sizes = ["xs", "sm", "lg"]

export default {
  name: "DropDown",

  components: { Button },

  directives: { clickOutSide },

  props: {
    type: {
      type: String,
      default: "default",
      validator(val) {
        return !looseIndexOf(types, val)
      }
    },

    size: {
      type: String,
      validator(val) {
        return !looseIndexOf(sizes, val)
      }
    },

    position: {
      type: String,
      default: "bottom",
      validator(val) {
        return !looseIndexOf(positions, val)
      }
    },

    align: {
      type: String,
      validator(val) {
        return !looseIndexOf(aligns, val)
      }
    }

  },

  computed: {
    clsDropDown() {
      return this.position === "top" ? "dropup" : "dropdown"
    },
    clsDropDownMenu() {
      const cls = this.menuShow ? "show" : "hidden"
      return [
        "dropdown-menu",
        {
          [`dropdown-menu-${this.align}`]: this.align
        },
        cls
      ]
    }
  },

  data() {
    return {
      menuShow: false
    }
  },

  methods: {
    clickOutSide() {
      this.menuShow = false
    }
  }
}
</script>