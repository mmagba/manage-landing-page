import CallToAction from '@/components/CallToAction'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import Nav from '@/components/Nav'
import Specials from '@/components/Specials'
import Testimonials from '@/components/Testimonials'

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <Specials />
      <Testimonials />
      <CallToAction />
      <Footer />
    </>

  )
}