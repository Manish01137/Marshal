import Navbar from '../components/common/Navbar'
import Footer from '../components/common/Footer'
import AboutHero from '../components/about/AboutHero'
import AboutStats from '../components/about/AboutStats'
import AboutValues from '../components/about/AboutValues'
import AboutCTA from '../components/about/AboutCTA'

export default function About() {
  return (
    <div className="bg-[#020617] text-white overflow-x-hidden">
      <Navbar />
      <main><AboutHero /><AboutStats /><AboutValues /><AboutCTA /></main>
      <Footer />
    </div>
  )
}
