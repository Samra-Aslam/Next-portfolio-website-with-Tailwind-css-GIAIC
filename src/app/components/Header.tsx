import React from 'react'
import Link from 'next/link'

const Header = () => {
  return (
    <div className='h-[auto] w-[100%] p-[12px] text-white font-bold flex justify-around bg-blue-500 text-[90%]'>
        
    <Link  href="/" className='hover:text-red-600'>Home</Link>
    <Link href="/about" className='hover:text-red-600'>About</Link>
    <Link href="/contact" className='hover:text-red-600'>Contact</Link>
    <Link href="/skills" className='hover:text-red-600'>Skills</Link>


    </div>
  )
}

export default Header