import { useLocation } from 'react-router-dom'

export default function VideoDetail() {
  const {
    state: { item }
  } = useLocation()

  return (
    <section className='p-4'>
      <iframe
        className='w-1/2 aspect-video'
        src={`https://www.youtube.com/embed/${item.id}`}
        title='YouTube video player'
        frameBorder='0'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
        referrerPolicy='strict-origin-when-cross-origin'
        allowFullScreen
      ></iframe>

      <div>
        <p className='mt-4 text-xl font-bold'>{item.snippet.title}</p>
        <p>{item.snippet.description}</p>
        <p className='text-slate-400'>{item.snippet.publishTime}</p>
      </div>
    </section>
  )
}
