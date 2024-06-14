'use client'

import Form from '../components/Form'

export default function Page() {
  return (
    <div className='p-20'>
      <h4>글 작성</h4>
      {/* <form
        // action='/api/post/create'
        method='post'
        onSubmit={handleSubmit}
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
          <Image
            src={formData.imageUrl}
            alt='미리보기 이미지'
            width={200}
            height={200}
          />
        )}
        <button type='submit'>Submit</button>
      </form> */}
      <Form />
    </div>
  )
}
