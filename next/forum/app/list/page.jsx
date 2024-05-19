'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function Page() {
  const [data, setData] = useState()

  const fetchData = async () => {
    const result = await fetch('/api/post/read').then(res => res.json())
    setData(result.data)
  }

  useEffect(() => {
    fetchData()
  }, [])

  if (!data) return null

  return (
    <div className='list-bg'>
      {data.map(item => (
        <div key={item._id.toString()} className='list-item'>
          <Link href={`/detail/${item._id}`} prefetch={false}>
            <h4>{item.title}</h4>
          </Link>
          <p>{item.content}</p>
          {item.regDate && <p>{formatDate(item.regDate)}</p>}
          <div className='btn-wrap'>
            <Link href={`/edit/${item._id}`}>
              <button>수정</button>
            </Link>
            <button
              onClick={() => {
                //   fetch(
                //     '/api/post/delete', //
                //     { method: 'delete', body: JSON.stringify({ _id: item._id }) }
                //   ) //
                //     .then(res => {
                //       if (res.status === 200) {
                //         return res.json()
                //       }
                //       // 서버가 에러코드 전송시 실행될 코드
                //     })
                //     .then(result => {
                //       console.log(result)
                //     })
                //     .catch(error => {
                //       console.error(error)
                //     })

                /**
                  // URL 쿼리 파라미터 (쿼리 스트링)
                    장점 : GET 요청에서도 데이터를 전송할 수 있음
                    단점 : 데이터가 많아지면 가독성 낮음, 민감한 정보 넣으면 안됨
                */
                fetch(`/api/post/delete?id=${item._id.toString()}`)
              }}
            >
              삭제
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}

const formatDate = regDate => {
  return `${new Date(regDate).getFullYear()}년 ${new Date(regDate).getMonth() + 1}월 ${new Date(regDate).getDate()}일`
}
