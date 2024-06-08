import { connectDB } from '@/util/db'
import { redirect } from 'next/navigation'
import bcrypt from 'bcrypt'

export async function POST(req) {
  if (req.method === 'POST') {
    const data = await req.formData()
    const name = data.get('name')
    const email = data.get('email')
    const password = await bcrypt.hash(data.get('password'), 10)

    const db = (await connectDB).db('forum')
    await db.collection('user_cred').insertOne({ name, email, password })

    redirect('/')
  }
}
