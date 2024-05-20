import { connectDB } from '@/util/db'

export async function POST(req) {
  const body = await req.json()
  const db = (await connectDB).db('forum')
  await db.collection('post').insertOne({ ...body, regDate: new Date().getTime() })

  return Response.json({ message: 'ok' })
}
