import { connectDB } from '@/util/db'
import ListItem from '../components/ListItem'

export const revalidate = 0

// 강제 다이내믹 렌더링으로 빌드
export const dynamic = 'force-dynamic'
// 스태틱 렌더링 : force-static

export default async function page() {
  const db = (await connectDB).db('forum')
  const data = await db.collection('post').find().toArray()
  console.log('data', data)

  // await fetch('/URL', { cache: 'force-cache' }) // 캐싱 사용
  // await fetch('/URL', { cache: 'no-store' }) // 실시간 서버 요청
  // await fetch('/URL', { next: {revalidate : 60}}) //60초마다 캐싱된 데이터 갱신

  return (
    <div className='list-bg'>
      {data.map(item => (
        <ListItem key={item._id.toString()} item={item} />
      ))}
    </div>
  )
}
