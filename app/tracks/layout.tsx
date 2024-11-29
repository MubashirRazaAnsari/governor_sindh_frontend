import React from 'react'
import Sidebar from '@/app/shared/Sidebar'

const TracksLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex md:flex-row flex-col md:gap-5 gap-0 max-w-[1400px] mx-auto px-4 mt-10">
      <Sidebar />
      <main className="flex-1">{children}</main>
    </div>
  )
}

export default TracksLayout