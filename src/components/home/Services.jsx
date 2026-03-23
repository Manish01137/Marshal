import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Link } from 'react-router-dom'
import { IconCode, IconBrain, IconCloud, IconWifi, IconLayout, IconServer, IconSmartphone, IconDatabase, IconArrowUpRight } from '../common/Icons'
gsap.registerPlugin(ScrollTrigger)

const services = [
  { Icon: IconCode,       slug: 'custom-software', title: 'Custom Software Development', desc: 'End-to-end solutions tailored to your business needs and scale.',        color: 'from-blue-500 to-indigo-600',   glow: '#4f46e5' },
  { Icon: IconBrain,      slug: 'ai-ml',           title: 'AI & ML Development',          desc: 'Intelligent solutions leveraging ML to automate and unlock insights.',    color: 'from-violet-500 to-purple-600', glow: '#7c3aed' },
  { Icon: IconCloud,      slug: 'cloud-devops',    title: 'Cloud & DevOps',               desc: 'Scalable cloud architecture and automated deployment pipelines.',         color: 'from-cyan-500 to-sky-500',      glow: '#0ea5e9' },
  { Icon: IconSmartphone, slug: 'mobile',          title: 'Mobile App Development',       desc: 'Native and cross-platform mobile experiences that drive growth.',         color: 'from-lime-500 to-green-500',    glow: '#22c55e' },
  { Icon: IconLayout,     slug: 'frontend',        title: 'Frontend Development',         desc: 'User-centric design systems that create intuitive digital experiences.',   color: 'from-pink-500 to-rose-500',     glow: '#ec4899' },
  { Icon: IconServer,     slug: 'backend',         title: 'Backend Development',          desc: 'Dedicated engineering teams that integrate seamlessly with your ops.',     color: 'from-orange-500 to-amber-500',  glow: '#f59e0b' },
]

export default function Services() {
  const ref = useRef(null)
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.service-card',
        { opacity: 0, y: 80 },
        { opacity: 1, y: 0, duration: 0.9, stagger: 0.1, ease: 'power3.out',
          scrollTrigger: { trigger: ref.current, start: 'top 85%' } }
      )
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={ref} className="relative py-32 bg-[#020617] overflow-hidden">
      <div className="absolute inset-0 mesh-bg-2 opacity-50" />
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div>
            <div className="section-label">What We Do</div>
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">Premium Digital<br />Solutions</h2>
          </div>
          <p className="text-gray-400 max-w-sm text-base leading-relaxed">We transform visionary ideas into enterprise-grade applications built for scale, security, and performance.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <Link key={i} to={`/services/${s.slug}`}
              className="service-card grad-border group relative p-8 rounded-2xl glass hover:-translate-y-2 transition-all duration-500 block overflow-hidden">
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: `radial-gradient(circle at 30% 30%, ${s.glow}15, transparent 70%)` }} />
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${s.color} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300 relative z-10`}
                style={{ boxShadow: `0 8px 20px ${s.glow}35` }}>
                <s.Icon size={22} className="text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-3 relative z-10">{s.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-6 relative z-10">{s.desc}</p>
              <div className="flex items-center gap-2 text-indigo-400 text-sm font-medium group-hover:gap-3 transition-all relative z-10">
                <span>Explore Service</span><IconArrowUpRight size={14} />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
