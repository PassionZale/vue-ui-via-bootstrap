<template>
  <div :class="clsDropDown" v-clickOutSide="clickOutSide" @click="menuShow = !menuShow">

    <Button>
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

export default {
  name: "DropDown",

  components: { Button },

  directives: { clickOutSide },

  props: {
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