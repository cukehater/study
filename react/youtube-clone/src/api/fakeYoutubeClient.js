import axios from 'axios'

export class FakeYoutubeClient {
  async search() {
    return axios.get('/data/search.json')
  }

  async videos() {
    return axios.get('/data/default.json')
  }
}
