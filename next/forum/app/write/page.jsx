'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

export default function Page() {
  const initData = {
    title: '',
    content: '',
    imageUrl: ''
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

  // presigned 방식 (서버를 거치지 않고 브라우저에서 S3로 전송)
  const handleFileChange = async e => {
    const file = e.target.files[0]
    const fileName = encodeURIComponent(file.name)

    const res = await fetch(`/api/post/image?file=${fileName}`).then(res =>
      res.json()
    )

    //S3 업로드
    const formData = new FormData()
    Object.entries({ ...res.url.fields, file }).forEach(([key, value]) => {
      formData.append(key, value)
    })

    const result = await fetch(res.url.url, {
      method: 'POST',
      body: formData
    })

    if (result.ok) {
      setFormData(prev => ({ ...prev, imageUrl: result.url + '/' + fileName }))
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
        <input
          name='imageUrl'
          type='file'
          accept='image/*'
          onChange={handleFileChange}
        />
        {formData.imageUrl && (
          <img
            src={formData.imageUrl}
            alt='미리보기 이미지'
            width={200}
            height={200}
          />
        )}
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}
