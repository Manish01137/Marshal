import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Link } from 'react-router-dom'
import Navbar from '../components/common/Navbar'
import Footer from '../components/common/Footer'
import { IconCode, IconBrain, IconCloud, IconWifi, IconLayout, IconServer, IconSmartphone, IconDatabase, IconArrowUpRight } from '../components/common/Icons'
gsap.registerPlugin(ScrollTrigger)

const SERVICES = [
  { Icon:IconCode,       slug:'custom-software', title:'Custom Software Development', desc:'End-to-end solutions tailored to your business needs.',           color:'from-blue-500 to-indigo-600',   glow:'#4f46e5' },
  { Icon:IconBrain,      slug:'ai-ml',           title:'AI & ML Development',          desc:'Intelligent automation and machine learning pipelines.',          color:'from-violet-500 to-purple-600', glow:'#7c3aed' },
  { Icon:IconCloud,      slug:'cloud-devops',    title:'Cloud & DevOps',               desc:'Scalable cloud infrastructure with CI/CD pipelines.',            color:'from-cyan-500 to-sky-500',      glow:'#0ea5e9' },
  { Icon:IconWifi,       slug:'iot',             title:'IoT Systems',                  desc:'Smart connected device ecosystems and real-time data.',           color:'from-emerald-500 to-teal-500',  glow:'#10b981' },
  { Icon:IconLayout,     slug:'frontend',        title:'Frontend Development',         desc:'Stunning, responsive, blazing-fast user interfaces.',            color:'from-pink-500 to-rose-500',     glow:'#ec4899' },
  { Icon:IconServer,     slug:'backend',         title:'Backend Development',          desc:'Robust, secure, infinitely scalable server-side systems.',       color:'from-orange-500 to-amber-500',  glow:'#f59e0b' },
  { Icon:IconSmartphone, slug:'mobile',          title:'Mobile App Development',       desc:'iOS & Android apps users love and businesses rely on.',           color:'from-lime-500 to-green-500',    glow:'#22c55e' },
  { Icon:IconDatabase,   slug:'salesforce',      title:'Salesforce Solutions',         desc:'CRM ecosystems and automation that drive revenue.',               color:'from-blue-400 to-cyan-500',     glow:'#06b6d4' },
]

export default function Services() {
  const ref = useRef(null)
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.svcs-hero > *', { opacity:0, y:40, duration:0.9, stagger:0.15, ease:'power3.out' })
      gsap.fromTo('.svc-card', { opacity:0, y:70 }, { opacity:1, y:0, duration:0.8, stagger:0.08, ease:'power3.out', scrollTrigger:{ trigger:'.svc-grid', start:'top 85%' } })
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <div ref={ref} className="bg-[#020617] text-white overflow-x-hidden">
      <Navbar />
      <section className="relative pt-36 pb-20 mesh-bg grid-bg overflow-hidden">
        <div className="absolute top-20 right-1/3 w-72 h-72 opacity-15 rounded-full animate-pulse" style={{background:'radial-gradient(circle,#4f46e5,transparent)',filter:'blur(80px)'}} />
        <div className="svcs-hero max-w-7xl mx-auto px-6">
          <div className="section-label w-fit">What We Do</div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-5">Our <span className="grad-text">Services</span></h1>
          <p className="text-gray-400 text-lg max-w-xl leading-relaxed">Enterprise-grade digital solutions built for scale, security, and exceptional performance.</p>
        </div>
      </section>
      <section className="py-24 bg-[#020617]">
        <div className="svc-grid max-w-7xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((s, i) => (
            <Link key={i} to={`/services/${s.slug}`} className="svc-card grad-border group glass rounded-2xl p-8 hover:-translate-y-2 transition-all duration-500 block relative overflow-hidden">
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{background:`radial-gradient(circle at 30% 20%, ${s.glow}15, transparent 70%)`}} />
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${s.color} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform relative z-10`} style={{boxShadow:`0 8px 20px ${s.glow}35`}}>
                <s.Icon size={22} className="text-white" />
              </div>
              <h3 className="text-base font-semibold text-white mb-3 relative z-10">{s.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-6 relative z-10">{s.desc}</p>
              <div className="flex items-center gap-2 text-indigo-400 text-sm font-medium group-hover:gap-3 transition-all relative z-10">
                <span>Explore Service</span><IconArrowUpRight size={15} />
              </div>
            </Link>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  )
}
