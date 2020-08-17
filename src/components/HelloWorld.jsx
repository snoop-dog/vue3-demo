import { ref,render, defineComponent, reactive } from "vue";

export default defineComponent({
  setup (props, ctx) {
    const text = ref('hello world')
    return {
      text
    }
  },

  render () {
    return (
      <div>{this.text}</div>
    )
  }
})