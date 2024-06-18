import { useQuery } from '@tanstack/react-query'
import { useParams } from 'react-router-dom'
import Card from '../components/Card'
import { Video } from '../types/Video'
import { useYoutubeApi } from '../context/YoutubeApiContext'

export default function Videos() {
  const { youtube } = useYoutubeApi()

  const { keyword } = useParams()
  const { isLoading, data } = useQuery({
    queryKey: ['videos', keyword],
    queryFn: () => {
      return youtube.search(keyword)
    }
  })

  if (isLoading) return <>Loading...</>

  return (
    <main className='p-4'>
      <ul className='grid grid-cols-5 gap-5'>
        {data?.map((item: Video, idx: number) => (
          <Card key={idx} item={item} />
        ))}
      </ul>
    </main>
  )
}
