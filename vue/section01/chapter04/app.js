const app = Vue.createApp({
  data() {
    return {
      boxASelected: false,
      boxBSelected: false,
      boxCSelected: false
    }
  },
  methods: {
    handleClick(box) {
      if (box === 'A') {
        return (this.boxASelected = !this.boxASelected)
      }
      if (box === 'B') {
        return (this.boxBSelected = !this.boxBSelected)
      }
      if (box === 'C') {
        return (this.boxCSelected = !this.boxCSelected)
      }
    }
  }
})

app.mount('#styling')
