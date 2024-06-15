Vue.createApp({
  data: function () {
    return {
      userName: 'Marco',
      userAge: 31,
      imageSrc: 'https://udemy.wjtb.co.kr/image/content/insight/fc/jd/tnfwqzpt/html/55246946eqgw.png'
    }
  },
  methods: {
    randomNumber() {
      return (Math.random() * 1).toFixed(1)
    }
  }
}).mount('#assignment')
