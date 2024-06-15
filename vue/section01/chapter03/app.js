const app = Vue.createApp({
  data() {
    return {
      userName: '',
      lastName: '',
      counter: 10,
      fullName: ''
    }
  },
  watch: {
    counter(value) {
      if (value >= 50) {
        setTimeout(() => {
          this.counter = 0
        }, 2000)
      }
    },
    userName(value) {
      console.log('Running Again')
      if (value === '') {
        this.fullName = ''
        return
      }
      this.fullName = value + ' ' + this.lastName
    },
    lastName(value) {
      if (value === '') {
        this.lastName = ''
        return
      }
      this.fullName = this.userName + ' ' + value
    }
  },
  computed: {
    // fullName() {
    //   console.log('Running Again')
    //   if (this.userName === '') {
    //     return ''
    //   }
    //   return this.userName + ' Kim'
    // }
  },
  methods: {
    add(number) {
      this.counter += number
    },
    subtract(number) {
      const result = (this.counter -= number)
      this.counter = result > 0 ? result : 0
    },
    setName(e) {
      this.userName = e.target.value
    },
    resetInput() {
      this.userName = ''
      this.lastName = ''
    },
    outputFullName() {
      console.log('Running Again')
      if (this.userName === '') {
        return ''
      }
      return this.userName + ' Kim'
    }
  }
})

app.mount('#events')
