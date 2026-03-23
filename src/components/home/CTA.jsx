import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Link } from 'react-router-dom'
import { IconArrowRight, IconCalendar, IconShield, IconZap } from '../common/Icons'
gsap.registerPlugin(ScrollTrigger)

const badges = [
  { Icon: IconCalendar, label: 'Response in 24h' },
  { Icon: IconShield,   label: 'Secure NDA' },
  { Icon: IconZap,      label: 'No Obligation' },
]

export default function CTA() {
  const ref = useRef(null)
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.cta-card',
        { opacity: 0, y: 60, scale: 0.96 },
        { opacity: 1, y: 0, scale: 1, duration: 1.1, ease: 'power3.out',
          scrollTrigger: { trigger: ref.current, start: 'top 85%' } }
      )
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={ref} className="py-32 bg-[#020617] relative overflow-hidden">
      <div className="absolute inset-0 mesh-bg opacity-60" />
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="cta-card relative rounded-[40px] overflow-hidden" style={{
          background: 'linear-gradient(135deg, #0f172a 0%, #1e1b4b 50%, #0f172a 100%)',
          border: '1px solid rgba(79,70,229,0.3)',
          boxShadow: '0 40px 120px rgba(79,70,229,0.2), inset 0 1px 0 rgba(255,255,255,0.05)'
        }}>
          <div className="absolute top-0 left-1/4 w-96 h-48 opacity-30 pointer-events-none"
            style={{ background: 'radial-gradient(ellipse, #4f46e5, transparent)', filter: 'blur(60px)' }} />
          <div className="absolute inset-0 grid-bg opacity-20" />
          <div className="relative z-10 text-center px-8 md:px-20 py-20 md:py-24">
            <div className="section-label mx-auto w-fit mb-6">Ready to Build?</div>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Start Building With<br />
              <span className="grad-text">The Best Engineers</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg mb-10 leading-relaxed">
              Don't let technical debt slow you down. Partner with world-class engineers today and launch faster than ever.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link to="/contact" className="btn-primary text-base py-4 px-8">
                Schedule Discovery Call <IconArrowRight size={16} />
              </Link>
              <Link to="/services" className="btn-outline text-base py-4 px-8">
                Explore Services
              </Link>
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
