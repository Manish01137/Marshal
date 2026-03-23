import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { Link } from 'react-router-dom'
import { IconArrowRight, IconCode, IconGlobe, IconCpu } from '../common/Icons'

export default function Hero() {
  const ref = useRef(null)
  const glowRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline()
      tl.from('.hero-badge',  { opacity:0, y:20, duration:0.6, ease:'power3.out' })
        .from('.hero-h1',     { opacity:0, y:60, duration:1,   ease:'power3.out' }, '-=0.3')
        .from('.hero-sub',    { opacity:0, y:30, duration:0.8 }, '-=0.5')
        .from('.hero-btns',   { opacity:0, y:20, duration:0.6 }, '-=0.4')
        .from('.hero-stats > *', { opacity:0, y:30, duration:0.7, stagger:0.12 }, '-=0.3')
        .from('.hero-visual', { opacity:0, x:80,  scale:0.92, duration:1.2, ease:'power3.out' }, '-=1')
        .from('.float-card',  { opacity:0, scale:0.8, duration:0.6, stagger:0.2, ease:'back.out(1.7)' }, '-=0.6')

      gsap.to('.float-1', { y:-14, duration:3,   repeat:-1, yoyo:true, ease:'sine.inOut' })
      gsap.to('.float-2', { y: 10, duration:3.5, repeat:-1, yoyo:true, ease:'sine.inOut', delay:0.5 })
      gsap.to('.float-3', { y:-10, duration:2.8, repeat:-1, yoyo:true, ease:'sine.inOut', delay:1 })
    }, ref)
    return () => ctx.revert()
  }, [])

  const handleMouseMove = (e) => {
    gsap.to(glowRef.current, { x: e.clientX - 200, y: e.clientY - 200, duration:0.4, ease:'power2.out' })
  }

  return (
    <section ref={ref} onMouseMove={handleMouseMove}
      className="relative min-h-screen mesh-bg grid-bg flex items-center pt-28 pb-16 overflow-hidden">
      <div ref={glowRef} className="pointer-events-none absolute w-[400px] h-[400px] rounded-full"
        style={{ background:'radial-gradient(circle, rgba(79,70,229,0.18), transparent)', filter:'blur(40px)', zIndex:0 }} />
      <div className="absolute top-20 right-1/4 w-72 h-72 rounded-full opacity-20 animate-pulse pointer-events-none"
        style={{ background:'radial-gradient(circle, #4f46e5, transparent)', filter:'blur(80px)' }} />

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center w-full">
        <div>
          <div className="hero-badge section-label w-fit">Trusted by 100+ Global Companies</div>
          <h1 className="hero-h1 text-5xl md:text-6xl xl:text-7xl font-bold leading-[1.08] tracking-tight text-white">
            Build Digital<br />Products With<br /><span className="grad-text">Elite Teams</span>
          </h1>
          <p className="hero-sub mt-7 text-gray-400 text-lg max-w-lg leading-relaxed">
            We craft enterprise-grade software, AI solutions, and scalable digital experiences for startups and Fortune 500s worldwide.
          </p>
          <div className="hero-btns mt-10 flex flex-wrap gap-4">
            <Link to="/hire"    className="btn-primary">Hire Developers <IconArrowRight size={16} /></Link>
            <Link to="/services" className="btn-outline">Explore Services</Link>
          </div>
          <div className="hero-stats mt-14 flex gap-10">
            {[{num:'250+',label:'Projects Delivered'},{num:'98%',label:'Client Satisfaction'},{num:'50+',label:'Expert Engineers'}].map((s,i)=>(
              <div key={i}>
                <div className="text-2xl font-bold grad-text" style={{fontFamily:'Syne,sans-serif'}}>{s.num}</div>
                <div className="text-xs text-gray-500 mt-1 uppercase tracking-widest">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="hero-visual relative flex items-center justify-center">
          <div className="relative w-full max-w-md rounded-3xl overflow-hidden shadow-[0_40px_80px_rgba(0,0,0,0.6)] border border-white/10">
            <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop" alt="Team" className="w-full h-80 object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <div className="glass rounded-xl p-4 border border-white/10 flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-indigo-500/20 flex items-center justify-center">
                  <IconCode size={16} className="text-indigo-400" />
                </div>
                <div>
                  <div className="text-white text-sm font-semibold">Project Deployed</div>
                  <div className="text-gray-400 text-xs">2 mins ago · Production</div>
                </div>
                <div className="ml-auto pulse-dot" />
              </div>
            </div>
          </div>

          <div className="float-card float-1 absolute -left-10 top-8 glass border border-white/10 rounded-2xl p-4 shadow-xl w-44">
            <div className="flex items-center gap-2 mb-2"><IconGlobe size={14} className="text-cyan-400" /><span className="text-xs text-gray-400 font-medium">Global Reach</span></div>
            <div className="text-white font-bold text-xl" style={{fontFamily:'Syne,sans-serif'}}>30+</div>
            <div className="text-gray-500 text-xs">Countries Served</div>
          </div>

          <div className="float-card float-2 absolute -right-8 top-20 glass border border-white/10 rounded-2xl p-4 shadow-xl w-44">
            <div className="flex items-center gap-2 mb-2"><IconCpu size={14} className="text-indigo-400" /><span className="text-xs text-gray-400 font-medium">Tech Stack</span></div>
            <div className="text-white font-bold text-xl" style={{fontFamily:'Syne,sans-serif'}}>40+</div>
            <div className="text-gray-500 text-xs">Technologies</div>
          </div>

          <div className="float-card float-3 absolute -right-4 bottom-16 glass border border-white/10 rounded-2xl p-3 shadow-xl">
            <div className="flex items-center gap-2">
              <div className="flex -space-x-2">
                {['A','R','D'].map((l,i)=>(
                  <div key={i} className="w-7 h-7 rounded-full bg-gradient-to-br from-indigo-400 to-purple-500 border-2 border-[#020617] text-xs flex items-center justify-center text-white font-bold">{l}</div>
                ))}
              </div>
              <div>
                <div className="text-white text-xs font-semibold">New client onboarded</div>
                <div className="text-gray-500 text-xs">Today</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#020617] to-transparent pointer-events-none" />
    </section>
  )
}
