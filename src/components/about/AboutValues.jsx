import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { IconHeart, IconGlobe, IconLightbulb, IconLock } from '../common/Icons'
gsap.registerPlugin(ScrollTrigger)

const values = [
  { Icon: IconHeart,     title: 'Client-First',       desc: 'Your success is our success. We obsess over outcomes, not outputs.',                              color: 'text-pink-400',    bg: 'bg-pink-500/10'    },
  { Icon: IconGlobe,     title: 'Global Mindset',      desc: 'Diverse teams across 15+ countries bring unique perspectives to every project.',                 color: 'text-cyan-400',    bg: 'bg-cyan-500/10'    },
  { Icon: IconLightbulb, title: 'Innovation-Driven',   desc: 'We stay ahead of the curve, adopting emerging technologies before they become mainstream.',      color: 'text-yellow-400',  bg: 'bg-yellow-500/10'  },
  { Icon: IconLock,      title: 'Trust & Transparency',desc: 'Open communication, clear timelines, and zero surprises on every engagement.',                   color: 'text-emerald-400', bg: 'bg-emerald-500/10' },
]

export default function AboutValues() {
  const ref = useRef(null)
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.av-card', { opacity:0, y:60 }, { opacity:1, y:0, duration:0.9, stagger:0.15, ease:'power3.out', scrollTrigger:{ trigger:ref.current, start:'top 85%' } })
    }, ref)
    return () => ctx.revert()
  }, [])
  return (
    <section ref={ref} className="py-28 bg-[#020617] relative overflow-hidden">
      <div className="absolute inset-0 mesh-bg opacity-40" />
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="section-label mx-auto w-fit">Our Values</div>
          <h2 className="text-4xl md:text-5xl font-bold text-white">The Principles We Live By</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((v, i) => (
            <div key={i} className="av-card grad-border group p-7 rounded-2xl glass hover:-translate-y-2 transition-all duration-400">
              <div className={`w-11 h-11 rounded-xl ${v.bg} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}>
                <v.Icon size={20} className={v.color} />
              </div>
              <h3 className="text-base font-semibold text-white mb-2">{v.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
