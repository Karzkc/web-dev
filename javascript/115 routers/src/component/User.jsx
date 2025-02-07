import React from 'react'
import { useParams } from 'react-router-dom'

const User = () => {
    const params = useParams()
  return (
    <div>
      Hello user {params.username}
    </div>
  )
}

export default User
