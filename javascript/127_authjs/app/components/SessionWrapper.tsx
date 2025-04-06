"use client"

import React from 'react';
import { SessionProvider } from "next-auth/react"

const SessionWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div>
      <SessionProvider>{children}</SessionProvider>
    </div>
  )
}

export default SessionWrapper
