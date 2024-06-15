const app = Vue.createApp({
  data() {
    return {
      number: 0
    }
  },
  watch: {
    number(value) {
      if (value > 37) {
        setTimeout(() => {
          this.number = 0
        }, 5000)
      }
    }
  },
  methods: {
    handleAdd(num) {
      this.number += num
    }
  }
})

app.mount('#assignment')
