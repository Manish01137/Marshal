import { Link } from 'react-router-dom'
import { IconArrowRight } from '../common/Icons'
export default function AboutCTA() {
  return (
    <section className="py-24 bg-[#020617]">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to Work Together?</h2>
        <p className="text-gray-400 text-lg mb-10">Let's build something extraordinary. Get in touch with our team today.</p>
        <Link to="/contact" className="btn-primary text-base py-4 px-10 inline-flex">
          Start a Conversation <IconArrowRight size={16} />
        </Link>
      </div>
    </section>
  )
}
