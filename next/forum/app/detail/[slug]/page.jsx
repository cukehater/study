import { connectDB } from '@/util/db'
import { ObjectId } from 'mongodb'

export default async function page({ params }) {
  const { slug } = params
  const db = (await connectDB).db('forum')
  const result = await db.collection('post').findOne({ _id: new ObjectId(slug) })

  return (
    <>
      <h4>{result.title}</h4>
      <p>{result.content}</p>
    </>
  )
}
