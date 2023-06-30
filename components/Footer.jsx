'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'


const Footer = () => {

    const [emailInput, setEmailInput] = useState('');
    const [warningMessage, setWarningMessage] = useState(false);


    const submitHandler = (e) => {
        e.preventDefault();
        setWarningMessage(false);
        if (!emailInput.includes("@")) {
            setWarningMessage(true);
        }
    };



    return (
        <footer className='bg-veryDarkBlue'>
            <div className="flex flex-col text-white justify-center items-center py-12 gap-12 md:flex-row-reverse md:justify-around md:gap-0">

                <div className='flex flex-col gap-20 shrink'>
                    <form className=' flex shrink items-start' onSubmit={submitHandler}>
                        <div className="flex flex-col items-center">
                            <input
                                type="text"
                                placeholder='Updates in your inbox...'
                                className={`text-black rounded-full border-2 p-3 px-8 focus:outline-none ${warningMessage ? 'text-red-500 border-red-500' : 'text-black border-none'}`}
                                onChange={(e) => setEmailInput(e.target.value)}
                            />
                            {warningMessage && <p className='text-red-500'>Please insert a valid email</p>}
                        </div>

                        <button className='rounded-full bg-brightRed p-3 px-8 ml-3 hover:bg-brightRedLight'>GO</button>
                    </form>
                    <div className='text-darkGrayishBlue text-right hidden md:block'>Copyright 2020. All rights Reserved</div>
                </div>

                <div className='flex justify-around gap-20 md:gap-40'>
                    <div className="flex flex-col gap-3">
                        <Link href={'/'}>Home</Link>
                        <Link href={'/'}>Pricing</Link>
                        <Link href={'/'}>Products</Link>
                        <Link href={'/'}>About Us</Link>
                    </div>

                    <div className="flex flex-col gap-3">
                        <Link href={'/'}>Careers</Link>
                        <Link href={'/'}>Community</Link>
                        <Link href={'/'}>Privacy Policy</Link>

                    </div>
                </div>

                <div className="flex flex-col items-center gap-12 md:flex-col-reverse">
                    <div className="flex gap-9 md:gap-4">
                        <Image src='/icon-facebook.svg' width={35} height={35} alt='facebook logo' />
                        <Image src='/icon-youtube.svg' width={35} height={35} alt='facebook logo' />
                        <Image src='/icon-twitter.svg' width={35} height={35} alt='facebook logo' />
                        <Image src='/icon-pinterest.svg' width={35} height={35} alt='facebook logo' />
                        <Image src='/icon-instagram.svg' width={35} height={35} alt='facebook logo' />
                    </div>
                    <Image src='/logo-white.svg' width={140} height={140} alt='manage logo' />
                </div>

                <div className='text-darkGrayishBlue md:hidden'>Copyright 2020. All rights Reserved</div>

            </div>
        </footer>
    )
}

export default Footer