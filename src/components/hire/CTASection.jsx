import { Link } from 'react-router-dom'
import { IconArrowRight } from '../common/Icons'
export default function CTASection() {
  return (
    <section className="py-24 bg-[#020617]">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="glass border border-indigo-500/20 rounded-3xl p-14" style={{background:'linear-gradient(135deg, rgba(79,70,229,0.08), rgba(6,182,212,0.05))'}}>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-5">Ready to Hire?</h2>
          <p className="text-gray-400 mb-8">Tell us your requirements and we'll match you with the perfect developer.</p>
          <Link to="/contact" className="btn-primary inline-flex py-4 px-10">
            Start Hiring Now <IconArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  )
}
