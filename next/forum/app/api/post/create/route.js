import { connectDB } from '@/util/db'
import { redirect } from 'next/navigation'
import { NextResponse } from 'next/server'

export async function POST(req) {
  const data = await req.formData()
  const title = data.get('title')
  const content = data.get('content')

  if (title === '') {
    return NextResponse.json({ message: '너 왜 제목 안 씀?' }, { status: 500 })
  }

  const db = (await connectDB).db('forum')
  await db
    .collection('post')
    .insertOne({ title, content, regDate: new Date().getTime() })

  redirect('/list')
}
