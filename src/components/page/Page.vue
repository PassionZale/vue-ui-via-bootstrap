<template>
  <nav>
    <ul :class="classes">
      <li :class="{'disabled': currentPage === 1}" @click="currentPage > 1 && currentPage --">
        <a href="javascript:;">
          <span>&laquo;</span>
        </a>
      </li>
      <li 
        v-for="n in totalPage" 
        :class="{'active': currentPage === n}"
        @click="currentPage = n">
        <a href="javascript:;">{{ n }}</a>
      </li>
      <li :class="{'disabled': currentPage === totalPage}" @click="currentPage < totalPage && currentPage ++">
        <a href="javascript:;">
          <span>&raquo;</span>
        </a>
      </li>
    </ul>
  </nav>
</template>

<script>
import { looseIndexOf } from "../../utils/assist"

const sizes = ["sm", "lg"]

export default {
  name: "Page",

  props: {
    size: {
      type: String,
      validator(val) {
        return !looseIndexOf(sizes, val)
      }
    },

    current: {
      type: Number,
      default: 1
    },

    totalCount: {
      type: Number,
      default: 1
    },

    pageSize: {
      type: Number,
      default: 10
    }
  },

  computed: {
    classes() {
      return [
        "pagination",
        {
          [`pagination-${this.size}`]: this.size
        }
      ]
    },

    totalPage() {
      return parseInt((this.totalCount + this.pageSize - 1) / this.pageSize)
    }
  },

  data() {
    return {
      currentPage: this.current
    }
  },
  
  watch: {
    current(val) {
      this.currentPage = val
    },

    currentPage(val) {
      this.$emit("update:current", val)
      this.$emit("page-change", val)
    }
  },

}
</script>

