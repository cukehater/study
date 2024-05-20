import { connectDB } from '@/util/db'
import { ObjectId } from 'mongodb'

export async function POST(req) {
  const { id, title, content } = await req.json()
  console.log('id, title, content', id, title, content)
  const db = (await connectDB).db('forum')
  await db.collection('post').updateOne({ _id: new ObjectId(id) }, { $set: { title, content } })

  return new Response(null, {
    status: 302,
    headers: {
      Location: '/list'
    }
  })
}
