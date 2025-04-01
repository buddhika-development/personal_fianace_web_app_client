import { FaGoogle } from "react-icons/fa";
import Link from 'next/link'
import React from 'react'

const GoogleLoginButton = () => {
  return (
    <div>
        <Link href={'#'} className="flex items-center justify-center text-zinc-400 gap-2 border-[1px] bg-zinc-800 border-zinc-600 h-[40px] rounded-md cursor-pointer hover:text-zinc-200 duration-300">
            <FaGoogle className="text-xl" />
            <p className="text-[14px]">Login With Google</p>
        </Link>
    </div>
  )
}

export default GoogleLoginButton