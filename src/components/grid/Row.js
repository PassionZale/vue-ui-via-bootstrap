export default {
  name: "Row",

  render(h){
    const vNodes = this.$slots.default === undefined ? [] : this.$slots.default

    return h(
      "div",
      {
        class: "row"
      },
      vNodes
    )
  }
}