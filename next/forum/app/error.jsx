'use client'

export default function Error({ error, reset }) {
  return (
    <>
      <h3>에러남 ㅅㄱ</h3>
      <button onClick={reset}>리셋</button>
    </>
  )
}
