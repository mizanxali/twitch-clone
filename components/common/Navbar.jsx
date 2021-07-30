import Image from 'next/image'
import Link from 'next/link'
import { IoFileTrayOutline } from 'react-icons/io5'
import { BiMessageAlt } from 'react-icons/bi'
import { FaUserCircle } from 'react-icons/fa'
import { BsGem } from 'react-icons/bs'

import logo from '../../public/twitch-logo.png'

const Navbar = () => {
    return (
        <div className='flex flex-row justify-between items-center h-14 bg-gray-dark text-white px-6'>
            <span className='flex flex-row justify-start items-center'>
                <Image
                    src={logo}
                    width={48}
                    height={48}
                />
                <Link href="/">
                    <a className='hover:text-purple mx-4 text-lg font-semibold'>Following</a>
                </Link>
                <Link href="/">
                    <a className='hover:text-purple mx-4 text-lg font-semibold'>Browse</a>
                </Link>
                <Link href="/">
                    <a className='hover:text-purple mx-4 text-lg font-semibold'>Esports</a>
                </Link>
                <Link href="/">
                    <a className='hover:text-purple mx-4 text-lg font-semibold'>Music</a>
                </Link>
            </span>

            <input type='text' className='w-1/4 bg-gray-lightest border-2 border-gray-lightest rounded px-2 py-1 focus:outline-none focus:border-2 focus:border-purple' placeholder='Search' />

            <span className='flex flex-row justify-end items-center'>
                <IoFileTrayOutline className='mx-1 text-xl' />
                <BiMessageAlt className='mx-1 text-xl' />
                <button className='font-semibold mx-2 text-sm bg-gray-lightest px-3 py-1 rounded'><BsGem className='inline-block mr-2' /><span>Get Bits</span></button>
                <FaUserCircle className='mx-1 text-xl' />
            </span>
        </div>
    )
}

export default Navbar
