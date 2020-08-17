import { ref,render, defineComponent, reactive, onMounted } from "vue";

export default defineComponent({
  setup (props, ctx) {
    const text = ref('hello world')
    return {
      text
    }
  },

  data () {
    return {
      dd: 11
    }
  },

  render () {
    return (
    <div>{this.text}{this.dd}</div>
    )
  }
})