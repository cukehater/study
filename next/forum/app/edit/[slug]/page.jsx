import Form from '@/app/components/Form'
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
      <Form result={result} slug={slug} isEdit />
    </div>
  )
}
