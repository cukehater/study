'use client'

import { useState } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import axios from 'axios'

export default function Form({ result, slug, isEdit }) {
  const initData = {
    id: isEdit ? slug : '',
    title: isEdit ? result.title : '',
    content: isEdit ? result.content : '',
    imageUrl: isEdit && result.imageUrl ? result.imageUrl : ''
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

    try {
      const url = isEdit ? '/api/post/edit' : '/api/post/create'
      const response = await axios.post(url, {
        body: formData
      })

      if (response.status === 200) {
        window.alert('등록 성공!')
        router.push('/list')

        //# 자주 쓰는 router 메서드
        /**
         * 대상 페이지를 pre-fetch하여 빠르게 로드할 수 있음
         * <Link> 태그에서 기본 제공
         * <Link> 태그에서 사용하지 않으려면 prefetch={false}
         * */
        // router.prefetch('/list')

        // router.back() // 뒤로가기
        // router.forward() // 앞으로가기
        // router.refresh() // 새로고침(Soft)
      } else {
        alert('게시글 등록을 실패했습니다.\n잠시 후 다시 시도해 주세요.')
      }
    } catch (error) {}
  }

  // presigned 방식 (서버를 거치지 않고 브라우저에서 S3로 전송)
  const handleFileChange = async e => {
    const file = e.target.files[0]

    if (!file) {
      setFormData(prev => ({ ...prev, imageUrl: '' }))
      return
    }

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
    <form
      // action='/api/post/create'
      // action='/api/post/edit'
      // method='post'
      onSubmit={handleSubmit}
    >
      <input name='id' type='hidden' value={formData.slug} />
      <input
        name='title'
        type='text'
        placeholder='제목을 입력해 주세요'
        defaultValue={formData.title}
        onChange={handleChange}
        required
      />
      <input
        name='content'
        type='text'
        placeholder='내용을 입력해 주세요'
        defaultValue={formData.content}
        onChange={handleChange}
        required
      />
      <input
        name='imageUrl'
        type='file'
        accept='image/*'
        onChange={handleFileChange}
      />
      {formData.imageUrl !== '' && (
        <Image
          src={formData.imageUrl}
          alt='미리보기 이미지'
          width={200}
          height={200}
          style={{ objectFit: 'cover' }}
        />
      )}
      <button>{isEdit ? '수정하기' : '작성하기'}</button>
    </form>
  )
}
