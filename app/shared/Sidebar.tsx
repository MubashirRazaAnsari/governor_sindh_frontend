'use client';
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const Sidebar = () => {
  const pathname = usePathname()
  const currentTrack = pathname.split('/')[2]

  return (
    <div className="md:w-[20%] w-full h-fit md:border-none border border-zinc-300 md:rounded-none rounded-lg flex-shrink-0 md:sticky relative md:top-36 md:mt-[130px] mt-[60px] top-0">
      {/* Core Courses Section */}
      <div className="h-fit rounded-lg p-3 bg-gray-50">
        <h2 className="font-semibold text-white text-sm leading-tight bg-[#044E83] p-3 rounded-lg">
          Core Courses Sequence
        </h2>
        <ul className="mt-2 text-zinc-800">
          <Link href="/compulsory/1">
            <li className={`py-[5px] pl-5 text-sm tracking-widest border-l-[2px] hover:bg-gray-100 ${pathname === '/compulsory/1' ? 'border-zinc-800  text-[#2EB6E8]' : 'border-[#c2c2c2]'}`}>
              Programming Fundamentals
            </li>
          </Link>
          <Link href="/compulsory/2">
            <li className={`py-[5px] pl-5 text-sm tracking-widest border-l-[2px] hover:bg-gray-100 ${pathname === '/compulsory/2' ? 'border-zinc-800 text-[#2EB6E8]' : 'border-[#c2c2c2]'}`}>
              Web2 Using NextJS
            </li>
          </Link>
          <Link href="/compulsory/3">
            <li className={`py-[5px] pl-5 text-sm tracking-widest border-l-[2px] hover:bg-gray-100 ${pathname === '/compulsory/3' ? 'border-zinc-800 text-[#2EB6E8]' : 'border-[#c2c2c2]'}`}>
              Earn as You Learn
            </li>
          </Link>
        </ul>
      </div>

      {/* Advanced Courses Section */}
      <div className="mt-8 p-3">
        <h3 className="font-bold text-zinc-800 text-base leading-tight">
          Advanced Courses
        </h3>
        <div className="flex flex-col gap-2 mt-3">
          {[
            { path: 'wmd', title: 'Web 3 and Metaverse' },
            { path: 'cnc', title: 'Cloud-Native Computing' },
            { path: 'ai', title: 'Artificial Intelligence (AI) and Deep Learning' },
            { path: 'iot', title: 'Ambient Computing and IoT' },
            { path: 'gbs', title: 'Genomics and Bioinformatics' },
            { path: 'npa', title: 'Network Programmability and Automation' }
          ].map((track) => (
            <div key={track.path}>
              <Link href={`/tracks/${track.path}/4`} className={`py-2 px-3 leading-none text-sm rounded-lg transition-all block ${pathname.includes(`/tracks/${track.path}`) ? 'bg-zinc-800 text-white' : 'bg-gray-50 text-zinc-800 hover:bg-zinc-800 hover:text-white'}`}>
                {track.title}
              </Link>
              {pathname.includes(`/tracks/${track.path}`) && (
                <div className="ml-4 mt-2 flex gap-2">
                  <Link href={`/tracks/${track.path}/4`}>
                    <span className={`px-3 py-1 text-sm rounded-md cursor-pointer ${pathname.endsWith('/4') ? 'bg-[#2EB6E8] text-white' : 'bg-gray-100 hover:bg-[#2EB6E8] hover:text-white'}`}>
                      Course 4
                    </span>
                  </Link>
                  <Link href={`/tracks/${track.path}/5`}>
                    <span className={`px-3 py-1 text-sm rounded-md cursor-pointer ${pathname.endsWith('/5') ? 'bg-[#2EB6E8] text-white' : 'bg-gray-100 hover:bg-[#2EB6E8] hover:text-white'}`}>
                      Course 5
                    </span>
                  </Link>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Sidebar