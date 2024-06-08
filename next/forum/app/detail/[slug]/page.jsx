import Comment from '@/app/components/Comment'
import { connectDB } from '@/util/db'
import { ObjectId } from 'mongodb'

export default async function page({ params }) {
  const { slug } = params
  const db = (await connectDB).db('forum')
  const result = await db
    .collection('post')
    .findOne({ _id: new ObjectId(slug) })

  const comments = await db
    .collection('comment')
    .find({ parent: slug })
    .toArray()

  return (
    <>
      <h4>{result.title}</h4>
      <p>{result.content}</p>

      <Comment parent={slug} comments={comments} />
    </>
  )
}
