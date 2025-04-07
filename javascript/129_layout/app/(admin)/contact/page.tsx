import { getRequestMeta } from 'next/dist/server/request-meta'
import React from 'react'

const page = () => {
  return (
    <div>
      Iam contact
    </div>
  )
}

export default page

export async function generateMetadata({ params }) {
    return {
      title: 'contact me',
    }
  }