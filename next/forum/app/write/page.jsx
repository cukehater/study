'use client'

import { useRouter } from 'next/navigation'
import { useState } from 'react'

export default function Page() {
  const initData = {
    title: '',
    content: ''
  }
  const [formData, setFormData] = useState(initData)
  const router = useRouter()
  // const pathname = usePathname() // 현재 URL
  // const searchParams = useSearchParams() // 현재 Search Parameters(Query string)
  // const params = useParams() // 현재 페이지의 Dynamic Route

  const handleChange = e => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async e => {
    e.preventDefault()

    const response = await fetch('/api/post/create', {
      method: 'POST',
      body: JSON.stringify(formData)
    })

    if (response.ok) {
      window.alert('등록 성공!')
      router.push('/list')
      // router.back() // 뒤로가기
      // router.forward() // 앞으로가기
      // router.refresh() // 새로고침(Soft)

      /**
       * 대상 페이지를 pre-fetch하여 빠르게 로드할 수 있음
       * <Link> 태그에서 기본 제공
       * <Link> 태그에서 사용하지 않으려면 prefetch={false}
       * */
      router.prefetch('/list')
    } else {
      const { message } = await response.json()
      alert(message)
    }
  }

  return (
    <div className='p-20'>
      <h4>글 작성</h4>
      <form
        action='/api/post/create' //
        method='post'
        // onSubmit={handleSubmit}
      >
        <input
          name='title'
          type='text'
          placeholder='제목을 입력해 주세요'
          value={formData.title}
          onChange={handleChange}
        />
        <input
          name='content'
          type='text'
          placeholder='내용을 입력해 주세요'
          value={formData.content}
          onChange={handleChange}
        />
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}
