import logo from '@/public/logo.svg'
import Image from 'next/image'
import Link from 'next/link'
import React, { useMemo } from 'react'

const Navbar = () => {
  return (
    <div>
        <nav className='bg-primary h-[70px] flex justify-around items-center'>
          <div className="logo">  <Image
      src={logo}
      alt="Picture of the author"
      className='w-[500px]'
    /></div>
            <ul className={`flex gap-5 font-semibold text-2xl `}>
                <Link href="/"><li className='p-1'>Home</li></Link>
                <Link href="/generate"><li className='p-1'>Shorten</li></Link>
                <Link href="/about"><li className='p-1'>About Us</li></Link>
                <Link href="/contact"><li className='p-1'>Contact Us</li></Link>
                <li className='flex gap-4 items-center text-white'>
                  <Link href="/generate"><button className='bg-btnColor py-1 px-3 rounded-lg'>Try now</button></Link>
                  <Link href="/github"><button className='bg-btnColor py-1 px-3 rounded-lg'>GitHub</button></Link>
                </li>
            </ul>
        </nav>
    </div>
  )
}

export default Navbar