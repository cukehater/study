import axios from 'axios'

export class YoutubeClient {
  constructor() {
    this.httpClient = axios.create({
      baseURL: `https://youtube.googleapis.com/youtube/v3`,
      params: { key: import.meta.env.VITE_API_KEY }
    })
  }

  async search(params) {
    return this.httpClient.get('search', params)
  }

  async videos(params) {
    return this.httpClient.get('videos', params)
  }
}
