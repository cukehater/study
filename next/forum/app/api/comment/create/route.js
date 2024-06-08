import { connectDB } from '@/util/db'
import { getServerSession } from 'next-auth'
import { NextResponse } from 'next/server'
import { authOptions } from '../../auth/[...nextauth]/route'

export async function POST(req) {
  const { user } = await getServerSession(authOptions)

  if (!user) {
    return NextResponse.json({ message: 'Fail' }, { status: 500 })
  }

  if (req.method === 'POST') {
    const data = await req.json()

    const db = (await connectDB).db('forum')
    await db.collection('comment').insertOne({ ...data, author: user.email })

    return NextResponse.json({ message: 'Success', data }, { status: 200 })
  }
}
