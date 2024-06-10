import { getToken } from 'next-auth/jwt'
import { NextResponse } from 'next/server'

export async function middleware(req) {
  // Map 자료형
  // console.log(req.nextUrl)
  // console.log(req.cookies)
  // console.log(req.headers)

  // NextResponse.next() // 통과
  // NextResponse.redirect() // 다른 페이지로 강제 이동(url 변경)
  // NextResponse.rewrite() // 다른 페이지로 강제 이동(주소창은 냅둠)

  // 1. /list 페이지 접속 기록 몰래 저장하기
  // console.log('req.nextUrl.pathName', req.nextUrl.pathname)
  if (req.nextUrl.pathname === '/list') {
    console.log(req.headers.get('sec-ch-ua-platform')) // OS정보 'macOS'
    return NextResponse.next()
  }

  // 2. 미로그인 유저 /write 접속시 로그인 페이지로
  const session = await getToken({ req }) // JWT방식에만 사용할 수 있음
  if (req.nextUrl.pathname === '/write') {
    if (!session) {
      return NextResponse.redirect(new URL('/api/auth/signin', req.url))
    }
  }
}
