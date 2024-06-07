import { connectDB } from '@/util/db'
import { ObjectId } from 'mongodb'
import { NextResponse } from 'next/server'

export async function GET(req) {
  const searchParams = req.nextUrl.searchParams
  const _id = new ObjectId(searchParams.get('id'))

  const db = (await connectDB).db('forum')
  await db.collection('post').deleteOne({ _id })

  return NextResponse.json({ message: 'Success' }, { status: 200 })
}
