import { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import gsap from 'gsap'
import {
  IconCode, IconBrain, IconCloud, IconWifi, IconLayout,
  IconServer, IconSmartphone, IconDatabase,
  IconMenu, IconX, IconChevronDown, IconArrowRight, IconSparkles
} from './Icons'

const SERVICES = [
  { slug:'custom-software', label:'Custom Software',      desc:'End-to-end tailored solutions',     Icon:IconCode,        color:'from-blue-500 to-indigo-500',   glow:'#4f46e5' },
  { slug:'ai-ml',           label:'AI & ML Development',  desc:'Intelligent automation & models',   Icon:IconBrain,       color:'from-violet-500 to-purple-600', glow:'#7c3aed' },
  { slug:'cloud-devops',    label:'Cloud & DevOps',       desc:'Scalable infra & CI/CD pipelines',  Icon:IconCloud,       color:'from-cyan-500 to-sky-500',      glow:'#0ea5e9' },
  { slug:'iot',             label:'IoT Systems',          desc:'Smart connected ecosystems',        Icon:IconWifi,        color:'from-emerald-500 to-teal-500',  glow:'#10b981' },
  { slug:'frontend',        label:'Frontend Development', desc:'Stunning responsive interfaces',    Icon:IconLayout,      color:'from-pink-500 to-rose-500',     glow:'#ec4899' },
  { slug:'backend',         label:'Backend Development',  desc:'Robust server-side systems',        Icon:IconServer,      color:'from-orange-500 to-amber-500',  glow:'#f59e0b' },
  { slug:'mobile',          label:'Mobile Apps',          desc:'iOS & Android experiences',         Icon:IconSmartphone,  color:'from-lime-500 to-green-500',    glow:'#22c55e' },
  { slug:'salesforce',      label:'Salesforce Solutions', desc:'CRM ecosystems & automation',       Icon:IconDatabase,    color:'from-blue-400 to-cyan-500',     glow:'#06b6d4' },
]

const LINKS = [
  { label:'Home', to:'/' },
  { label:'About', to:'/about' },
  { label:'Hire', to:'/hire' },
  { label:'Contact', to:'/contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [dropOpen, setDropOpen] = useState(false)
  const [mobileServOpen, setMobileServOpen] = useState(false)
  const navRef = useRef(null)
  const dropRef = useRef(null)
  const timeoutRef = useRef(null)
  const loc = useLocation()

  useEffect(() => {
    gsap.from(navRef.current, { y: -60, opacity: 0, duration: 0.8, ease: 'power3.out' })
    const fn = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  useEffect(() => {
    if (dropOpen && dropRef.current) {
      gsap.fromTo(dropRef.current,
        { opacity: 0, y: -10, scale: 0.97 },
        { opacity: 1, y: 0, scale: 1, duration: 0.22, ease: 'power2.out' }
      )
    }
  }, [dropOpen])

  // Delay-based hover — prevents flickering when moving mouse between button and panel
  const handleMouseEnter = () => {
    clearTimeout(timeoutRef.current)
    setDropOpen(true)
  }
  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setDropOpen(false), 120)
  }

  const closeAll = () => { setMenuOpen(false); setMobileServOpen(false) }

  return (
    <>
      <style>{`
        .nav-link {
          position: relative;
          font-size: 0.875rem;
          font-weight: 500;
          color: rgba(255,255,255,0.65);
          transition: color 0.25s;
          padding-bottom: 2px;
        }
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: -3px; left: 0;
          width: 0; height: 2px;
          background: linear-gradient(90deg, #6366f1, #8b5cf6);
          border-radius: 99px;
          transition: width 0.3s;
        }
        .nav-link:hover, .nav-link.active { color: #fff; }
        .nav-link:hover::after, .nav-link.active::after { width: 100%; }

        .serv-btn {
          display: flex; align-items: center; gap: 5px;
          font-size: 0.875rem; font-weight: 500;
          color: rgba(255,255,255,0.65);
          background: none; border: none; cursor: pointer;
          transition: color 0.25s; padding-bottom: 2px;
          position: relative;
        }
        .serv-btn::after {
          content: '';
          position: absolute;
          bottom: -3px; left: 0;
          width: 0; height: 2px;
          background: linear-gradient(90deg, #6366f1, #8b5cf6);
          border-radius: 99px;
          transition: width 0.3s;
        }
        .serv-btn:hover, .serv-btn.open { color: #fff; }
        .serv-btn:hover::after, .serv-btn.open::after { width: 100%; }
        .serv-chevron { transition: transform 0.3s ease; }
        .serv-btn.open .serv-chevron { transform: rotate(180deg); }

        .drop-item {
          display: flex; align-items: center; gap: 12px;
          padding: 11px 14px; border-radius: 12px;
          text-decoration: none;
          transition: background 0.18s;
        }
        .drop-item:hover { background: rgba(99,102,241,0.12); }
        .drop-item:hover .drop-icon { transform: scale(1.1); }
        .drop-icon { transition: transform 0.25s; flex-shrink: 0; }

        .get-started-btn {
          background: linear-gradient(135deg, #4f46e5, #7c3aed);
          padding: 10px 20px; border-radius: 10px;
          color: white; font-size: 0.875rem; font-weight: 600;
          border: none; cursor: pointer;
          transition: all 0.3s;
          text-decoration: none; display: inline-flex; align-items: center;
        }
        .get-started-btn:hover { transform: translateY(-2px); box-shadow: 0 10px 28px rgba(79,70,229,0.45); }

        .pulse-dot { width: 7px; height: 7px; background: #22c55e; border-radius: 50%; display: inline-block; position: relative; }
        .pulse-dot::after { content: ''; position: absolute; inset: -3px; border-radius: 50%; border: 2px solid #22c55e; animation: pdot 2s ease-in-out infinite; opacity: 0; }
        @keyframes pdot { 0%{transform:scale(.8);opacity:1} 100%{transform:scale(2.2);opacity:0} }
      `}</style>

      <nav
        ref={navRef}
        className={`fixed top-0 left-0 right-0 z-[999] transition-all duration-500 ${
          scrolled
            ? 'py-3 shadow-[0_4px_40px_rgba(0,0,0,0.6)]'
            : 'py-4'
        }`}
        style={{ background: 'rgba(2,6,23,0.95)', backdropFilter: 'blur(24px)', borderBottom: '1px solid rgba(255,255,255,0.07)' }}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">

          {/* ── Logo ── */}
          <Link to="/" className="flex items-center gap-2.5 group flex-shrink-0">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
              <span className="text-white font-bold text-sm">M</span>
            </div>
            <span className="text-white font-bold text-lg tracking-tight" style={{fontFamily:'Syne,sans-serif'}}>
              Mershil<span className="text-indigo-400">Tech</span>
            </span>
          </Link>

          {/* ── Desktop Links ── */}
          <div className="hidden md:flex items-center gap-8">

            <Link to="/" className={`nav-link ${loc.pathname === '/' ? 'active' : ''}`}>Home</Link>

            {/* Services dropdown — wrapper handles hover with delay */}
            <div
              style={{ position: 'relative' }}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <button className={`serv-btn ${dropOpen ? 'open' : ''} ${loc.pathname.startsWith('/services') ? 'open' : ''}`}>
                Services
                <IconChevronDown size={13} className="serv-chevron" />
              </button>

              {/* Invisible bridge so mouse can travel from button to panel */}
              {dropOpen && (
                <div style={{ position:'absolute', top:'100%', left:'-20px', right:'-20px', height:'20px', zIndex:999 }} />
              )}

              {dropOpen && (
                <div
                  ref={dropRef}
                  style={{
                    position: 'absolute',
                    top: 'calc(100% + 18px)',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: '700px',
                    zIndex: 1000,
                    background: 'rgba(6,8,24,0.98)',
                    border: '1px solid rgba(99,102,241,0.25)',
                    borderRadius: '20px',
                    boxShadow: '0 32px 80px rgba(0,0,0,0.8), 0 0 0 1px rgba(255,255,255,0.03)',
                    backdropFilter: 'blur(30px)',
                    overflow: 'hidden',
                  }}
                >
                  {/* Header */}
                  <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between', padding:'16px 24px', borderBottom:'1px solid rgba(255,255,255,0.06)' }}>
                    <div>
                      <p style={{ color:'white', fontWeight:600, fontSize:'0.875rem', fontFamily:'Syne,sans-serif' }}>All Services</p>
                      <p style={{ color:'#6b7280', fontSize:'0.7rem', marginTop:'2px' }}>Enterprise-grade digital solutions</p>
                    </div>
                    <Link to="/services" onClick={() => setDropOpen(false)}
                      style={{ display:'flex', alignItems:'center', gap:'4px', fontSize:'0.75rem', color:'#818cf8', fontWeight:500, textDecoration:'none' }}
                      className="hover:text-indigo-300 transition-colors">
                      View all <IconArrowRight size={11} />
                    </Link>
                  </div>

                  {/* Service grid */}
                  <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'4px', padding:'12px' }}>
                    {SERVICES.map(svc => (
                      <Link
                        key={svc.slug}
                        to={`/services/${svc.slug}`}
                        onClick={() => setDropOpen(false)}
                        className="drop-item"
                      >
                        <div
                          className={`drop-icon w-9 h-9 rounded-xl bg-gradient-to-br ${svc.color} flex items-center justify-center`}
                          style={{ boxShadow:`0 4px 14px ${svc.glow}35` }}
                        >
                          <svc.Icon size={16} className="text-white" />
                        </div>
                        <div style={{ minWidth:0 }}>
                          <p style={{ color:'white', fontSize:'0.8rem', fontWeight:500, lineHeight:1.3 }}>{svc.label}</p>
                          <p style={{ color:'#6b7280', fontSize:'0.7rem', marginTop:'2px', overflow:'hidden', textOverflow:'ellipsis', whiteSpace:'nowrap' }}>{svc.desc}</p>
                        </div>
                      </Link>
                    ))}
                  </div>

                  {/* Footer */}
                  <div style={{ padding:'12px 24px', borderTop:'1px solid rgba(255,255,255,0.06)', background:'rgba(79,70,229,0.06)', display:'flex', alignItems:'center', gap:'8px' }}>
                    <IconSparkles size={12} className="text-indigo-400 flex-shrink-0" />
                    <span style={{ fontSize:'0.72rem', color:'#9ca3af' }}>
                      Not sure what you need?{' '}
                      <Link to="/contact" onClick={() => setDropOpen(false)}
                        style={{ color:'#818cf8', fontWeight:500, textDecoration:'none' }}
                        className="hover:text-indigo-300 transition-colors">
                        Talk to our experts →
                      </Link>
                    </span>
                  </div>
                </div>
              )}
            </div>

            {LINKS.slice(1).map(l => (
              <Link key={l.to} to={l.to} className={`nav-link ${loc.pathname === l.to ? 'active' : ''}`}>{l.label}</Link>
            ))}
          </div>

          {/* ── Right CTA ── */}
          <div className="hidden md:flex items-center gap-5 flex-shrink-0">
            <div className="flex items-center gap-2">
              <span className="pulse-dot" />
              <span style={{ fontSize:'0.72rem', color:'#9ca3af' }}>Available</span>
            </div>
            <Link to="/contact" className="get-started-btn">Get Started</Link>
          </div>

          {/* ── Mobile toggle ── */}
          <button
            className="md:hidden p-2 rounded-xl text-white"
            style={{ background:'rgba(255,255,255,0.06)', border:'1px solid rgba(255,255,255,0.1)' }}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <IconX size={20} /> : <IconMenu size={20} />}
          </button>
        </div>

        {/* ── Mobile menu ── */}
        {menuOpen && (
          <div
            className="md:hidden px-6 py-5 space-y-1"
            style={{ background:'rgba(2,6,23,0.99)', borderTop:'1px solid rgba(255,255,255,0.07)' }}
          >
            <Link to="/" className="block text-gray-300 hover:text-white py-3 border-b border-white/5 text-sm transition-colors" onClick={closeAll}>Home</Link>

            <div>
              <button
                className="flex items-center justify-between w-full text-gray-300 hover:text-white py-3 border-b border-white/5 text-sm transition-colors"
                onClick={() => setMobileServOpen(!mobileServOpen)}
              >
                <span>Services</span>
                <span style={{ display:'inline-block', transition:'transform 0.3s', transform: mobileServOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}>
                  <IconChevronDown size={14} />
                </span>
              </button>

              {mobileServOpen && (
                <div className="mt-2 ml-1 space-y-0.5 pb-3">
                  {SERVICES.map(svc => (
                    <Link
                      key={svc.slug}
                      to={`/services/${svc.slug}`}
                      className="flex items-center gap-3 py-2.5 px-3 rounded-xl transition-colors"
                      style={{ textDecoration:'none' }}
                      onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.05)'}
                      onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
                      onClick={closeAll}
                    >
                      <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${svc.color} flex items-center justify-center flex-shrink-0`}
                        style={{ boxShadow:`0 2px 8px ${svc.glow}30` }}>
                        <svc.Icon size={14} className="text-white" />
                      </div>
                      <div>
                        <p className="text-gray-200 text-sm font-medium">{svc.label}</p>
                        <p className="text-gray-500 text-xs">{svc.desc}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {LINKS.slice(1).map(l => (
              <Link key={l.to} to={l.to} className="block text-gray-300 hover:text-white py-3 border-b border-white/5 text-sm transition-colors" onClick={closeAll}>{l.label}</Link>
            ))}

            <div className="pt-3">
              <Link to="/contact" onClick={closeAll} className="get-started-btn w-full justify-center">Get Started</Link>
            </div>
          </div>
        )}
      </nav>
    </>
  )
}
