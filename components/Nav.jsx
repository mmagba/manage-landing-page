'use client';

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

const Nav = () => {

    const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false);
    
    return (
        <nav className='relative container mx-auto p-6'>

            <div className='flex items-center justify-between'>

                <Image src='/logo.svg' width={125} height={125} alt='manage logo' />

                <div className="md:flex hidden gap-6">
                    <Link className='hover:text-darkGrayishBlue' href='/'>Pricing</Link>
                    <Link className='hover:text-darkGrayishBlue' href='/'>Product</Link>
                    <Link className='hover:text-darkGrayishBlue' href='/'>About US</Link>
                    <Link className='hover:text-darkGrayishBlue' href='/'>Careers</Link>
                    <Link className='hover:text-darkGrayishBlue' href='/'>Community</Link>
                </div>

                <button className='bg-brightRed text-white rounded-full pb-3 px-6 pt-2 hover:bg-brightRedLight hidden md:block drop-shadow-xl'>
                    Get Started
                </button>

                <button
                    id="menu-btn"
                    className={"block hamburger md:hidden focus:outline-none " + (mobileMenuIsOpen ? 'open' : '')}
                    onClick={() => setMobileMenuIsOpen((prev) => !prev)}
                >
                    <span className="hamburger-top"></span>
                    <span className="hamburger-middle"></span>
                    <span className="hamburger-bottom"></span>
                </button>

            </div>

            <div className="md:hidden">
                <div
                    id="menu"
                    className={"absolute flex-col items-center self-end py-8 mt-10 space-y-6 font-bold bg-white sm:w-auto sm:self-center left-6 right-6 drop-shadow-md " + (mobileMenuIsOpen ? 'flex' : 'hidden')}
                >
                    <Link onClick={() => setMobileMenuIsOpen((prev) => !prev)} className='hover:text-darkGrayishBlue' href='/'>Pricing</Link>
                    <Link onClick={() => setMobileMenuIsOpen((prev) => !prev)} className='hover:text-darkGrayishBlue' href='/'>About US</Link>
                    <Link onClick={() => setMobileMenuIsOpen((prev) => !prev)} className='hover:text-darkGrayishBlue' href='/'>Careers</Link>
                    <Link onClick={() => setMobileMenuIsOpen((prev) => !prev)} className='hover:text-darkGrayishBlue' href='/'>Community</Link>
                    <Link onClick={() => setMobileMenuIsOpen((prev) => !prev)} className='hover:text-darkGrayishBlue' href='/'>Product</Link>
                </div>
            </div>
        </nav >
    )
}

export default Nav