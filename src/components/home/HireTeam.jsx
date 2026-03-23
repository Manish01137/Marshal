import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Link } from 'react-router-dom'
import { IconArrowRight, IconCheck } from '../common/Icons'
gsap.registerPlugin(ScrollTrigger)

const plans = [
  { title: 'Staff Augmentation', desc: 'Instantly scale your team with top-tier developers who integrate seamlessly into your workflow.', perks: ['Onboard in 72 hours', 'Flexible engagement', 'No hidden fees'], highlight: false },
  { title: 'Dedicated Team',     desc: 'A fully autonomous offshore team managed by seasoned tech leads, dedicated to your product roadmap.', perks: ['Full-time commitment', 'Dedicated tech lead', 'Weekly sprints & demos'], highlight: true, badge: 'Most Popular' },
  { title: 'Offshore Dev Center',desc: 'Set up your own branded remote office with our legal, HR, and operational infrastructure.', perks: ['Your brand, your team', 'Full IP ownership', 'Long-term partnership'], highlight: false },
]

export default function HireTeam() {
  const ref = useRef(null)
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.hire-card',
        { opacity: 0, y: 80, scale: 0.96 },
        { opacity: 1, y: 0, scale: 1, duration: 1, stagger: 0.15, ease: 'power3.out',
          scrollTrigger: { trigger: ref.current, start: 'top 85%' } }
      )
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={ref} className="py-32 bg-[#020617] relative overflow-hidden">
      <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-[800px] h-[500px] opacity-10 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, #4f46e5, transparent)', filter: 'blur(120px)' }} />
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <div className="section-label mx-auto w-fit">Engagement Models</div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-5">
            Hire A <span className="grad-text">Dedicated Team</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">Access the top 1% of global engineering talent. We handle vetting, compliance, and retention so you can focus on building.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {plans.map((plan, i) => (
            <div key={i} className={`hire-card relative rounded-3xl overflow-hidden transition-all duration-500 ${
              plan.highlight
                ? 'bg-white text-black scale-[1.05] shadow-[0_30px_80px_rgba(79,70,229,0.25)]'
                : 'glass border border-white/8 hover:border-indigo-400/30 hover:-translate-y-2'
            }`} style={{ padding: plan.highlight ? '44px 36px' : '36px' }}>
              {plan.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-blue-500 to-indigo-600 text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-lg tracking-wide">
                  {plan.badge}
                </div>
              )}
              <h3 className={`text-xl font-bold mb-3 ${plan.highlight ? 'text-black' : 'text-white'}`} style={{fontFamily:'Syne,sans-serif'}}>{plan.title}</h3>
              <p className={`text-sm leading-relaxed mb-7 ${plan.highlight ? 'text-gray-600' : 'text-gray-400'}`}>{plan.desc}</p>
              <ul className="space-y-3 mb-8">
                {plan.perks.map((perk, j) => (
                  <li key={j} className="flex items-center gap-2.5 text-sm">
                    <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${plan.highlight ? 'bg-indigo-100' : 'bg-indigo-500/20'}`}>
                      <IconCheck size={11} className={plan.highlight ? 'text-indigo-600' : 'text-indigo-400'} />
                    </div>
                    <span className={plan.highlight ? 'text-gray-700' : 'text-gray-300'}>{perk}</span>
                  </li>
                ))}
              </ul>
              <Link to="/contact" className={`flex items-center justify-between w-full px-5 py-3.5 rounded-xl font-semibold text-sm transition-all duration-300 ${
                plan.highlight ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:shadow-lg hover:shadow-indigo-500/30' : 'bg-white/8 text-white hover:bg-white/14'
              }`}>
                Hire Now <IconArrowRight size={16} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
