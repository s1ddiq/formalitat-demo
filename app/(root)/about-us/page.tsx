import Link from 'next/link'
import React from 'react'

const AboutUs = () => {
  return (
    <div className='text-6xl text-[var(--secondary)] bg-[url("/images/background.png")] w-full h-screen p-16'>
      <p>This is only a demo website, contact s2ddiq on discord for a complete version.</p>
      <Link href='https://s1ddiqs-room.vercel.app/' className='underline text-blue-500 text-3xl'>My Portfolio</Link>
    </div>  
  )
}

export default AboutUs
