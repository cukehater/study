'use client'

import { signIn, signOut } from 'next-auth/react'

export default function LoginButton({ userInfo }) {
  return (
    <button
      type='button'
      onClick={() => {
        userInfo ? signOut() : signIn()
      }}
    >
      {userInfo ? '로그아웃' : '로그인'}
    </button>
  )
}
