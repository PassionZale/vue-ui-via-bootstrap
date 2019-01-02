<template>
  <img :src="src" :alt="alt" :title="title" />
</template>

<script>
import { looseIndexOf } from "../../utils/assist"

const imageShapes = ["round", "circle", "thumb"]

export default {
  name: "bImage",

  props: {
    src: {
      type: String,
      required: true
    },

    shape: {
      type: String,
      validator(val) {
        return !looseIndexOf(imageTypes, val)
      }
    },

    alt: String,

    title: String,

    response: Boolean
  },

  computed: {
    classes() {
      return [
        {
          "img-responsive": this.response,
          "img-rounded": this.shape === "round",
          "img-circle": this.shape === "circle",
          "img-thumbnail": this.shape === "thumb",
        }
      ]
    }
  }
}
</script>

