import { useParams, Link } from 'react-router-dom'
import { servicesData } from '../data/servicesData'
import Navbar from '../components/common/Navbar'
import Footer from '../components/common/Footer'
import ServiceHero from '../components/services/ServiceHero'
import ServiceOverview from '../components/services/ServiceOverview'
import ServiceFeatures from '../components/services/ServiceFeatures'
import ServiceProcess from '../components/services/ServiceProcess'
import ServiceTech from '../components/services/ServiceTech'
import ServiceCTA from '../components/services/ServiceCTA'

export default function ServiceDetails() {
  const { slug } = useParams()
  const service = servicesData.find(s => s.slug === slug)

  if (!service) return (
    <div className="bg-[#020617] text-white min-h-screen flex flex-col items-center justify-center gap-6">
      <h1 className="text-3xl font-bold">Service Not Found</h1>
      <Link to="/services" className="btn-primary">Back to Services</Link>
    </div>
  )

  return (
    <div className="bg-[#020617] text-white overflow-x-hidden">
      <Navbar />
      <ServiceHero data={service} />
      <ServiceOverview data={service} />
      <ServiceFeatures data={service} />
      <ServiceProcess data={service} />
      <ServiceTech data={service} />
      <ServiceCTA data={service} />
      <Footer />
    </div>
  )
}
