'use client'

import { useRouter } from 'next/navigation'
import { useState } from 'react'

export default function Page() {
  const initData = {
    title: '',
    content: '',
    image: null
  }
  const [formData, setFormData] = useState(initData)
  const router = useRouter()
  // const pathname = usePathname()
  // const searchParams = useSearchParams()
  // const params = useParams()

  const handleChange = e => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async e => {
    e.preventDefault()

    await fetch(
      '/api/post/create', //
      { method: 'POST', body: JSON.stringify(formData) }
    )
      .then(res => res.json())
      .then(result => {
        const { message } = result

        if (message === 'ok') {
          window.alert('등록 성공!')
          router.push('/list')
        }
      })
  }

  return (
    <div className='p-20'>
      <h4>글 작성</h4>
      <form onSubmit={handleSubmit}>
        <input
          name='title'
          type='text'
          placeholder='제목을 입력해 주세요'
          required
          value={formData.title}
          onChange={handleChange}
        />
        <input
          name='content'
          type='text'
          placeholder='내용을 입력해 주세요'
          required
          value={formData.content}
          onChange={handleChange}
        />
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}
