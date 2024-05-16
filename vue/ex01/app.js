Vue.createApp({
  data: function () {
    return {
      goals: [],
      enteredValue: ''
    }
  },
  methods: {
    addGoal: function () {
      this.goals.push(this.enteredValue)
      this.enteredValue = ''
    }
  }
}).mount('#app')
