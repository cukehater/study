Vue.createApp({
  data: function () {
    return {
      goals: [],
      enteredValue: '',
      vueLink: 'https://vuejs.org'
    }
  },
  methods: {
    addGoal: function (e) {
      e.preventDefault()
      this.goals.push(this.enteredValue)
      this.enteredValue = ''
    },
    outputGoal: function () {
      const randomNumber = Math.random()
      return randomNumber > 0.5 ? 'Learn Vue' : 'Master Vue'
    }
  }
}).mount('#app')
