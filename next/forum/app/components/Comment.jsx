'use client'

import { useState } from 'react'

export default function Comment({ parent, comments }) {
  const [comment, setComment] = useState('')
  const handleChange = e => {
    setComment(e.target.value)
  }

  const handleSubmit = e => {
    e.preventDefault()
    fetch('/api/comment/create', {
      method: 'POST',
      body: JSON.stringify({ comment, parent }),
      cache: 'no-store'
    })
    setComment('')
  }

  return (
    <div>
      <ul>
        {comments.map(comment => (
          <li key={comment._id.toString()}>{comment.comment}</li>
        ))}
      </ul>

      <div>
        <input type='text' value={comment} onChange={handleChange} />
        <button onClick={handleSubmit}>댓글 전송</button>
      </div>
    </div>
  )
}
