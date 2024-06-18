import { ChangeEvent, FormEvent, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

export default function Header() {
  const params = useParams()
  const navigate = useNavigate()
  const [keyword, setKeyword] = useState<string>('')
  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setKeyword(e.target.value)
  }
  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault()
    navigate(`/videos/${keyword}`)
  }

  useEffect(() => {
    setKeyword(params.keyword ? params.keyword : '')
  }, [params])

  return (
    <header className='flex justify-between p-4 bg-black'>
      <button
        type='button'
        className='text-2xl font-bold text-white'
        onClick={() => navigate('/videos')}
      >
        YOUTUBE-CLONE
      </button>

      <form className='flex overflow-hidden rounded-md' onSubmit={handleSubmit}>
        <input
          type='text'
          className='h-10 pl-4 w-80'
          value={keyword}
          onChange={handleChange}
        />
        <button className='w-24 text-white bg-slate-600'>검색</button>
      </form>
    </header>
  )
}
