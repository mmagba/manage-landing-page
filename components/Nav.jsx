import Image from 'next/image'
import Link from 'next/link'

const Nav = () => {
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

                <button className='bg-brightRed text-white rounded-full pb-3 px-6 pt-2 hover:bg-brightRedLight hidden md:block'>Get Started</button>
            </div>

        </nav>
    )
}

export default Nav