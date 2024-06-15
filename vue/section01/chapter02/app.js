const app = Vue.createApp({
  data() {
    return {
      userName: '',
      counter: 10,
      confirmedName: ''
    }
  },
  methods: {
    setName(e, lastName) {
      this.userName = `${e.target.value} ${lastName}`
    },
    countUp() {
      this.counter++
    },
    countDown() {
      if (this.counter === 0) return
      this.counter--
    },
    add(number) {
      this.counter += number
    },
    subtract(number) {
      const result = (this.counter -= number)
      this.counter = result > 0 ? result : 0
    },
    submitForm() {
      window.alert('제출이 완료되었습니다.')
    },
    confirmName(e) {
      this.confirmedName = e.target.value
    }
  }
})

app.mount('#events')
