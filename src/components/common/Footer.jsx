import { Link } from 'react-router-dom'
import { IconLinkedin, IconTwitter, IconGithub, IconMail, IconMapPin, IconPhone } from './Icons'

export default function Footer() {
  return (
    <footer className="bg-[#020617] border-t border-white/5 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-5 gap-12 mb-16">
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-5">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center">
                <span className="text-white font-bold text-sm">M</span>
              </div>
              <span className="text-white font-bold text-lg" style={{fontFamily:'Syne,sans-serif'}}>
                Mershil<span className="text-indigo-400">Tech</span>
              </span>
            </Link>
            <p className="text-gray-500 text-sm leading-relaxed max-w-xs mb-6">Enterprise software development and offshore engineering partner delivering scalable digital solutions worldwide.</p>
            <div className="flex gap-3">
              {[IconLinkedin, IconTwitter, IconGithub, IconMail].map((Icon, i) => (
                <a key={i} href="#" className="w-9 h-9 flex items-center justify-center rounded-xl bg-white/5 border border-white/8 text-gray-400 hover:bg-indigo-500 hover:border-indigo-500 hover:text-white transition-all duration-300 hover:-translate-y-1">
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-white text-xs font-semibold mb-5 uppercase tracking-widest">Services</h3>
            <ul className="space-y-3">
              {['Custom Software','AI Development','Cloud & DevOps','Mobile Apps','Salesforce'].map(s => (
                <li key={s}><Link to="/services" className="text-gray-500 text-sm hover:text-white hover:translate-x-1 transition-all inline-block">{s}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-white text-xs font-semibold mb-5 uppercase tracking-widest">Hire</h3>
            <ul className="space-y-3">
              {['React Developers','Node Developers','Flutter Developers','Java Developers','Offshore Teams'].map(s => (
                <li key={s}><Link to="/hire" className="text-gray-500 text-sm hover:text-white hover:translate-x-1 transition-all inline-block">{s}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-white text-xs font-semibold mb-5 uppercase tracking-widest">Contact</h3>
            <ul className="space-y-4">
              {[
                { Icon: IconMapPin, text: 'Sydney, NSW, Australia' },
                { Icon: IconMail,   text: 'info@mershiltech.com' },
                { Icon: IconPhone,  text: '+1 (800) 000-0000' },
              ].map(({ Icon, text }, i) => (
                <li key={i} className="flex items-start gap-2.5 text-gray-500 text-sm">
                  <Icon size={14} className="text-indigo-400 mt-0.5 flex-shrink-0" />
                  {text}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-600">
          <p>© 2026 Mershil Tech Pty Ltd. All rights reserved.</p>
          <div className="flex gap-6">
            {['Privacy Policy','Terms of Service','Cookie Policy'].map(t => (
              <span key={t} className="hover:text-gray-400 cursor-pointer transition-colors">{t}</span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
