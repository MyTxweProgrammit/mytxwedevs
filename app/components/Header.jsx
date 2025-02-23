import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import logo_light from '../../public/logo_light.png'

export default function Header() {
  return (
    <header className='border-2 border-solid border-slate-100 mx-auto translate-y-[20px] shadow-lg max-w-[300px] h-[60px] rounded-[50px] flex justify-center items-center gap-[22%]'>
        <Image src={logo_light} className='w-[42px] h-[42px]' alt='logo'/>
        <div className='flex gap-[30%]'>
           <Link href='/' className='text-black relative group'>
            Home
            <div className='absolute duration-[0.5s] translate-x-[64px] bg-black w-[0px] h-[1px] group-hover:w-full group-hover:translate-x-0'></div>
           </Link>
           <Link href='/' className='text-black relative group'>
            Blog
            <div className='absolute duration-[0.5s] translate-x-[-64px] bg-black w-[0px] h-[1px] group-hover:w-full group-hover:translate-x-0'></div>
           </Link>
        </div>
    </header>
  )
}
