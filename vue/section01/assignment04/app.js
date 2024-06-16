const app = Vue.createApp({
  data() {
    return {
      input: '',
      toggle: false,
      hex: ''
    }
  },
  methods: {
    handleToggle() {
      this.toggle = !this.toggle
    }
  }
})

app.mount('#assignment')
