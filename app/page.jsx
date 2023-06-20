import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <>
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




      <section>
        <div className="flex flex-col-reverse md:flex-row md:gap-10 mx-auto container justify-between mt-20">

          <div className='flex flex-col gap-12 mb-32 md:w-1/2 md:pl-6 pt-14'>
            <h1 className='text-4xl md:text-5xl max-w-md font-bold text-center md:text-left text-darkBlue'>
              Bring everyone together to build better products.
            </h1>
            <p className='text-darkGrayishBlue text-center md:text-left md:max-w-xs'>Manage makes it simple for software teams to plan day-to-day tasks while keeping the larger team goals in view.</p>
            <div className="flex justify-center md:justify-start ">
              <button className='bg-brightRed text-white rounded-full pb-3 px-6 pt-2 hover:bg-brightRedLight'>Get Started</button>
            </div>
          </div>

          <div className='md:w-1/2'>
            <Image src='/illustration-intro.svg' width={600} height={600} alt='illustration' />
          </div>
        </div>
      </section>

    </>

  )
}