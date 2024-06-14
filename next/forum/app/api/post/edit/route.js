import { connectDB } from '@/util/db'
import { ObjectId } from 'mongodb'
import { NextResponse } from 'next/server'
// import { redirect } from 'next/navigation'

export async function POST(req) {
  //# Fetch
  const data = await req.json()

  try {
    const db = (await connectDB).db('forum')
    await db
      .collection('post')
      .updateOne({ _id: new ObjectId(data.body.id) }, { $set: data.body })

    return NextResponse.json({ message: 'Success' }, { status: 200 })
  } catch {
    return NextResponse.json({ message: 'Fail' }, { status: 500 })
  }
}
