import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { IconArrowUpRight } from '../common/Icons'
gsap.registerPlugin(ScrollTrigger)

const projects = [
  { num:'01', tag:'SaaS Platform', title:'NexusCloud',   desc:'Enterprise cloud management platform serving 500K+ users with real-time analytics.',  bg:'from-[#1a1a2e] to-[#16213e]', accent:'#4f46e5', img:'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=900&auto=format&fit=crop' },
  { num:'02', tag:'Fintech App',   title:'PayFlow',      desc:'Next-gen payment infrastructure processing $2B+ in annual transactions.',               bg:'from-[#1a2e1a] to-[#16311e]', accent:'#10b981', img:'https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=900&auto=format&fit=crop' },
  { num:'03', tag:'AI Platform',   title:'IntelliCore',  desc:'Full-scale AI analytics platform with predictive modeling for Fortune 500 clients.',   bg:'from-[#2e1a2e] to-[#1e0e2e]', accent:'#8b5cf6', img:'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?q=80&w=900&auto=format&fit=crop' },
]

export default function FeaturedWork() {
  const ref = useRef(null)
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.project-card',
        { opacity: 0, y: 80 },
        { opacity: 1, y: 0, duration: 1, stagger: 0.15, ease: 'power3.out',
          scrollTrigger: { trigger: ref.current, start: 'top 85%' } }
      )
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={ref} className="py-32 bg-[#020617]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div>
            <div className="section-label">Our Work</div>
            <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight">Featured<br />Projects</h2>
          </div>
          <button className="btn-outline self-start">View All Work</button>
        </div>
        <div className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            {projects.slice(0,2).map((p,i) => (
              <div key={i} className={`project-card group relative rounded-3xl overflow-hidden bg-gradient-to-br ${p.bg} p-10 hover:scale-[1.02] transition-all duration-500 cursor-pointer min-h-[300px]`}>
                <img src={p.img} className="absolute right-0 bottom-0 w-[55%] h-full object-cover opacity-40 group-hover:opacity-60 group-hover:scale-110 transition-all duration-700" alt={p.title} />
                <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/20 to-transparent" />
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-8">
                    <span className="text-xs text-white/40 font-mono">{p.num}.</span>
                    <span className="text-xs px-3 py-1 rounded-full glass border border-white/10 text-white/60">{p.tag}</span>
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-3">{p.title}</h3>
                  <p className="text-white/50 text-sm max-w-xs leading-relaxed">{p.desc}</p>
                  <div className="mt-8 flex items-center gap-2 text-sm font-medium" style={{color:p.accent}}>
                    <span>View Case Study</span>
                    <IconArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className={`project-card group relative rounded-3xl overflow-hidden bg-gradient-to-br ${projects[2].bg} p-12 hover:scale-[1.01] transition-all duration-500 cursor-pointer min-h-[260px]`}>
            <img src={projects[2].img} className="absolute right-0 bottom-0 w-[50%] h-full object-cover opacity-40 group-hover:opacity-60 group-hover:scale-105 transition-all duration-700" alt={projects[2].title} />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/10 to-transparent" />
            <div className="relative z-10 max-w-lg">
              <div className="flex items-center justify-between mb-6">
                <span className="text-xs text-white/40 font-mono">{projects[2].num}.</span>
                <span className="text-xs px-3 py-1 rounded-full glass border border-white/10 text-white/60">{projects[2].tag}</span>
              </div>
              <h3 className="text-4xl md:text-5xl font-bold text-white mb-4">{projects[2].title}</h3>
              <p className="text-white/50 text-base leading-relaxed">{projects[2].desc}</p>
              <div className="mt-8 flex items-center gap-2 text-sm font-medium" style={{color:projects[2].accent}}>
                <span>View Case Study</span>
                <IconArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
