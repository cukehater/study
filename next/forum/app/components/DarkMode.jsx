'use client'

import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export default function DarkMode() {
  const router = useRouter()
  useEffect(() => {
    const mode = ('; ' + document.cookie).split(`; mode=`).pop().split(';')[0]
    if (mode === '') {
      document.cookie = `mode=light; max-age=${3600 * 24 * 400};`
    }
  }, [])

  return (
    <span
      onClick={() => {
        const 쿠키값 = ('; ' + document.cookie)
          .split(`; mode=`)
          .pop()
          .split(';')[0]

        if (쿠키값 === 'light') {
          document.cookie = 'mode=dark; max-age=' + 3600 * 24 * 400
        } else {
          document.cookie = 'mode=light; max-age=' + 3600 * 24 * 400
        }

        router.refresh()
      }}
    >
      🌙
    </span>
  )
}
