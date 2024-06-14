import { connectDB } from '@/util/db'
// import { redirect } from 'next/navigation'
import { NextResponse } from 'next/server'

export async function POST(req) {
  //# Fetch
  const data = await req.json()

  try {
    const db = (await connectDB).db('forum')
    await db
      .collection('post')
      .insertOne({ ...data.body, regDate: new Date().getTime() })

    return NextResponse.json({ message: 'Success' }, { status: 200 })
  } catch {
    return NextResponse.json({ message: 'Fail' }, { status: 500 })
  }

  /*
  //# Form  action
  const data = await req.formData()
  const title = data.get('title')
  const content = data.get('content')
  const imageUrl = data.get('imageUrl')

  if (title === '') {
    return NextResponse.json({ message: '너 왜 제목 안 씀?' }, { status: 500 })
  }

  const db = (await connectDB).db('forum')
  await db
    .collection('post')
    .insertOne({ title, content, imageUrl, regDate: new Date().getTime() })

  redirect('/list') */
}
