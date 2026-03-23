import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { IconShield, IconZap, IconUsers, IconAward, IconRocket, IconTrending } from '../common/Icons'
gsap.registerPlugin(ScrollTrigger)

const features = [
  { Icon: IconShield,   title: 'Enterprise Security',  desc: 'ISO-compliant systems with end-to-end encryption and regular security audits.',             color: 'text-emerald-400', bg: 'bg-emerald-500/10' },
  { Icon: IconZap,      title: 'Lightning Performance', desc: 'Sub-second response times with globally distributed infrastructure.',                        color: 'text-yellow-400',  bg: 'bg-yellow-500/10'  },
  { Icon: IconUsers,    title: 'Top 1% Talent',         desc: 'Rigorously vetted engineers with proven track records at top tech companies.',               color: 'text-blue-400',    bg: 'bg-blue-500/10'    },
  { Icon: IconAward,    title: 'Proven Track Record',   desc: '250+ successful projects across 30+ countries with 98% client satisfaction.',               color: 'text-purple-400',  bg: 'bg-purple-500/10'  },
  { Icon: IconRocket,   title: 'Rapid Delivery',        desc: 'Agile sprints with transparent timelines — never missing a deadline.',                       color: 'text-pink-400',    bg: 'bg-pink-500/10'    },
  { Icon: IconTrending, title: 'Scalable Architecture', desc: 'Systems designed to grow from MVP to millions of users without rewrites.',                   color: 'text-cyan-400',    bg: 'bg-cyan-500/10'    },
]

const stats = [
  { num: 98,  suffix: '%', label: 'Client Satisfaction' },
  { num: 250, suffix: '+', label: 'Projects Delivered'  },
  { num: 50,  suffix: '+', label: 'Expert Developers'   },
  { num: 10,  suffix: '+', label: 'Years Experience'    },
]

export default function WhyChoose() {
  const ref = useRef(null)
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.why-card',
        { opacity: 0, y: 60 },
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: 'power3.out',
          scrollTrigger: { trigger: ref.current, start: 'top 80%' } }
      )
      stats.forEach((s, i) => {
        const el = document.querySelector(`#wc-counter-${i}`)
        if (!el) return
        gsap.fromTo(el, { innerText: 0 }, {
          innerText: s.num, duration: 2.5, ease: 'power2.out', snap: { innerText: 1 },
          scrollTrigger: { trigger: ref.current, start: 'top 80%' },
        })
      })
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={ref} className="py-32 bg-[#020617] relative overflow-hidden">
      <div className="absolute inset-0 mesh-bg opacity-60" />
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <div className="section-label mx-auto w-fit">Why Mershil Tech</div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-5">
            Built Different, <span className="grad-text">Delivering More</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto text-lg">We combine innovation, expertise, and cutting-edge technology to deliver extraordinary results.</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-24">
          {stats.map((s, i) => (
            <div key={i} className="glass border border-white/8 rounded-2xl p-6 text-center hover:border-indigo-400/30 transition-colors">
              <div className="text-4xl font-bold grad-text mb-2" style={{fontFamily:'Syne,sans-serif'}}>
                <span id={`wc-counter-${i}`}>0</span>{s.suffix}
              </div>
              <div className="text-gray-400 text-sm">{s.label}</div>
            </div>
          ))}
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((item, i) => (
            <div key={i} className="why-card grad-border group p-7 rounded-2xl glass hover:-translate-y-2 hover:bg-white/6 transition-all duration-400">
              <div className={`w-11 h-11 rounded-xl ${item.bg} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                <item.Icon size={20} className={item.color} />
              </div>
              <h3 className="text-base font-semibold text-white mb-2">{item.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
