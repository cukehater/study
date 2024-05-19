import { connectDB } from '@/util/db'

export async function GET() {
  const db = (await connectDB).db('forum')
  const data = await db.collection('post').find().toArray()

  return Response.json({ data })
}
