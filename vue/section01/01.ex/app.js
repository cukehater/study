Vue.createApp({
  data: function () {
    return {
      goals: [],
      enteredValue: '',
      // courseGoalA: '<h2>Master Vue!</h2>',
      // courseGoalB: '<h2>Learn Vue!</h2>',
      courseGoalA: 'Master Vue!',
      courseGoalB: 'Learn Vue!',
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
      return randomNumber > 0.5 ? this.courseGoalA : this.courseGoalB
    }
  }
}).mount('#app')
