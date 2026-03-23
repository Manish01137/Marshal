import Navbar from '../components/common/Navbar'
import Footer from '../components/common/Footer'
import HeroHire from '../components/hire/HeroHire'
import RolesGrid from '../components/hire/RolesGrid'
import ProcessSection from '../components/hire/ProcessSection'
import CTASection from '../components/hire/CTASection'

export default function Hire() {
  return (
    <div className="bg-[#020617] text-white overflow-x-hidden">
      <Navbar />
      <main><HeroHire /><RolesGrid /><ProcessSection /><CTASection /></main>
      <Footer />
    </div>
  )
}
