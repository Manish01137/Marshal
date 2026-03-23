import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Link } from 'react-router-dom'
import { IconArrowRight, IconCalendar, IconShield, IconZap } from '../common/Icons'
gsap.registerPlugin(ScrollTrigger)

const badges = [
  { Icon: IconCalendar, label: 'Response in 24h' },
  { Icon: IconShield,   label: 'Secure NDA'       },
  { Icon: IconZap,      label: 'No Obligation'    },
]

export default function ServiceCTA({ data }) {
  const ref = useRef(null)
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.scta-card', { opacity:0, y:50, scale:0.97 }, { opacity:1, y:0, scale:1, duration:1, ease:'power3.out', scrollTrigger:{ trigger:ref.current, start:'top 88%' } })
    }, ref)
    return () => ctx.revert()
  }, [])
  return (
    <section ref={ref} className="py-32 bg-[#020617] relative overflow-hidden">
      <div className="absolute inset-0 mesh-bg opacity-50" />
      <div className="relative z-10 max-w-5xl mx-auto px-6">
        <div className="scta-card relative rounded-[40px] overflow-hidden" style={{background:'linear-gradient(135deg, #0f172a 0%, #1e1b4b 50%, #0f172a 100%)', border:'1px solid rgba(79,70,229,0.3)', boxShadow:'0 40px 100px rgba(79,70,229,0.2)'}}>
          <div className="absolute top-0 left-1/3 w-80 h-48 pointer-events-none" style={{background:'radial-gradient(ellipse, rgba(79,70,229,0.3), transparent)', filter:'blur(60px)'}} />
          <div className="absolute inset-0 grid-bg opacity-20" />
          <div className="relative z-10 px-8 md:px-16 py-16 text-center">
            <div className="section-label mx-auto w-fit mb-6">Get Started</div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-5 leading-tight">
              Ready to Build With<br /><span className="grad-text">Expert Engineers?</span>
            </h2>
            <p className="text-gray-400 max-w-lg mx-auto text-base mb-10 leading-relaxed">
              {data?.cta || "Let's discuss your project and craft a solution that exceeds your expectations."}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
              <Link to="/contact" className="btn-primary text-base py-4 px-10 inline-flex">
                Start a Project <IconArrowRight size={16} />
              </Link>
              <Link to="/hire" className="btn-outline text-base py-4 px-10 inline-flex">Hire a Developer</Link>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-8">
              {badges.map(({ Icon, label }, i) => (
                <div key={i} className="flex items-center gap-2 text-gray-500">
                  <Icon size={14} className="text-indigo-400" />
                  <span className="uppercase tracking-widest text-xs">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
