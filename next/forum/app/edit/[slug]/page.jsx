import { connectDB } from '@/util/db'
import { ObjectId } from 'mongodb'

export default async function EditPage({ params: { slug } }) {
  const db = (await connectDB).db('forum')
  const result = await db
    .collection('post')
    .findOne({ _id: new ObjectId(slug) })

  return (
    <div className='p-20'>
      <h4>글 수정</h4>
      <form action='/api/post/edit' method='post'>
        <input name='id' type='hidden' value={slug} />
        <input
          name='title'
          type='text'
          placeholder='제목을 입력해 주세요'
          defaultValue={result.title}
          required
        />
        <input
          name='content'
          type='text'
          placeholder='내용을 입력해 주세요'
          defaultValue={result.content}
          required
        />
        <button>수정하기</button>
      </form>
    </div>
  )
}
