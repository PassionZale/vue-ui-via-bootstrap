<template>
  <div>
    <ul :class="classes">
      <li 
        v-for="(item, index) in tabItems" 
        :class="{'active': selected === item.name, 'disabled': item.disabled}"
        @click="changeTabItem(item, index)">
        <a href="javascript:;">{{ item.name }}</a>
      </li>
    </ul>
    <div class="tab-content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import { findComponentsDownward } from "../../utils/assist"

export default {
  name: "Tab",

  props: {
    pills: Boolean,
    
    value: {
      type: String,
      required: true
    }
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

  watch: {
    selected(val) {
      this.tabItems.forEach(tab => {
        tab.active = (tab.name === this.selected)
      })    
    }
  },

  data() {
    return {
      tabItems: [],
      selected: ""
    }
  },

  created() {
    this.selected = this.value      
  },

  mounted() {
    this.tabItems = findComponentsDownward(this, "TabItem")
  },

  methods: {
    changeTabItem(tabItem, index) {
      if(!tabItem.disabled) {
        this.selected = tabItem.name
        this.$emit("on-change", tabItem.name, index)
      }
    }
  }
}
</script>