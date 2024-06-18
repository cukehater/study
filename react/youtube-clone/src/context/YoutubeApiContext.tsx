import { createContext, useContext } from 'react'
import { FakeYoutubeClient } from '../api/fakeYoutubeClient'
import { YoutubeClient } from '../api/youtubeClient'
import { Youtube } from '../api/youtube'

const YoutubeApiContext = createContext()

// const client = new YoutubeClient()
const client = new FakeYoutubeClient()
const youtube = new Youtube(client)

export function YoutubeApiProvider({ children }) {
  return (
    <YoutubeApiContext.Provider value={{ youtube }}>
      {children}
    </YoutubeApiContext.Provider>
  )
}

export const useYoutubeApi = () => {
  return useContext(YoutubeApiContext)
}
