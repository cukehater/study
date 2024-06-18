import { PropsWithChildren } from 'react'
import { Video } from '../types/Video'
import { useNavigate } from 'react-router-dom'

interface Props {
  item: Video
}

export default function Card({ item }: PropsWithChildren<Props>) {
  const navigate = useNavigate()
  return (
    <li
      className='' //
      onClick={() => navigate(`/videos/watch/${item.id}`, { state: { item } })}
    >
      <div>
        <img
          src={item.snippet.thumbnails.medium.url}
          alt={item.snippet.description}
          className='object-cover w-full overflow-hidden aspect-video h-30'
        />
      </div>
      <p className='overflow-hidden text-ellipsis whitespace-nowrap'>
        {item.snippet.title}
      </p>
    </li>
  )
}
