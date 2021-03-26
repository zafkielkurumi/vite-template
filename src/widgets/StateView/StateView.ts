import { defineComponent } from "vue"

export default defineComponent({
  name: 'StateView',
  props: {
    msg: {
      type: String,
    }
  },
  data() {
    return {
        test:'test1'
    }
  },
  setup: () => {

  }
})