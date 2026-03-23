import Navbar from '../components/common/Navbar'
import Footer from '../components/common/Footer'
import Hero from '../components/home/Hero'
import Services from '../components/home/Services'
import Technologies from '../components/home/Technologies'
import WhyChoose from '../components/home/WhyChoose'
import Industries from '../components/home/Industries'
import FeaturedWork from '../components/home/FeaturedWork'
import Testimonials from '../components/home/Testimonials'
import HireTeam from '../components/home/HireTeam'
import CTA from '../components/home/CTA'

export default function Home() {
  return (
    <div className="bg-[#020617] text-white overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Technologies />
        <WhyChoose />
        <Industries />
        <FeaturedWork />
        <Testimonials />
        <HireTeam />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}
