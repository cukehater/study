Vue.createApp({
  data() {
    return {
      userInput: '',
      confirmedInput: ''
    }
  },
  methods: {
    handleOpenAlert(e) {
      window.alert(e.target.textContent)
    },
    handleKeyDown(e) {
      this.userInput = e.target.value
    },
    handleKeyDownEnter(e) {
      this.confirmedInput = e.target.value
    }
  }
}).mount('#assignment')
