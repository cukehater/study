export class Youtube {
  constructor(apiClient) {
    this.apiClient = apiClient
  }

  async search(keyword) {
    return keyword ? this.#searchByKeyword(keyword) : this.#mostPopular()
  }

  async #searchByKeyword(keyword) {
    // `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${keyword}&key=${import.meta.env.VITE_API_KEY}`
    return this.apiClient
      .search({
        params: {
          part: 'snippet',
          maxResults: '20',
          q: keyword
        }
      })
      .then(res => res.data.items)
      .then(items => items.map(item => ({ ...item, id: item.id.videoId })))
  }

  async #mostPopular() {
    return this.apiClient
      .videos({
        params: {
          part: 'snippet',
          maxResults: '20',
          chart: 'mostPopular'
        }
      })
      .then(res => res.data.items)
  }
}
