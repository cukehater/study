import { connectDB } from '@/util/db'
import { ObjectId } from 'mongodb'
import { redirect } from 'next/navigation'

export async function POST(req) {
  const data = await req.formData()
  const id = data.get('id')
  const title = data.get('title')
  const content = data.get('content')

  const db = (await connectDB).db('forum')
  await db
    .collection('post')
    .updateOne({ _id: new ObjectId(id) }, { $set: { title, content } })

  redirect('/list')
}
