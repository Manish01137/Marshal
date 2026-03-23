import { useState } from 'react'
import { IconSend } from '../common/Icons'
export default function ContactForm() {
  const [form, setForm] = useState({ name:'', email:'', company:'', message:'' })
  const [sent, setSent] = useState(false)
  const cls = "w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white text-sm placeholder-gray-500 outline-none focus:border-indigo-500/60 transition-all duration-300"
  return (
    <div className="glass border border-white/8 rounded-3xl p-8 md:p-10">
      {sent ? (
        <div className="text-center py-12">
          <div className="text-5xl mb-4">🎉</div>
          <h3 className="text-xl font-bold text-white mb-2">Message Sent!</h3>
          <p className="text-gray-400">We'll get back to you within 24 hours.</p>
        </div>
      ) : (
        <form onSubmit={e => { e.preventDefault(); setSent(true) }} className="space-y-5">
          <h3 className="text-xl font-bold text-white mb-6">Send a Message</h3>
          <div className="grid md:grid-cols-2 gap-5">
            <div>
              <label className="text-xs text-gray-500 uppercase tracking-widest mb-2 block">Your Name</label>
              <input type="text" placeholder="John Doe" className={cls} value={form.name} onChange={e=>setForm({...form,name:e.target.value})} required />
            </div>
            <div>
              <label className="text-xs text-gray-500 uppercase tracking-widest mb-2 block">Email Address</label>
              <input type="email" placeholder="john@company.com" className={cls} value={form.email} onChange={e=>setForm({...form,email:e.target.value})} required />
            </div>
          </div>
          <div>
            <label className="text-xs text-gray-500 uppercase tracking-widest mb-2 block">Company</label>
            <input type="text" placeholder="Your Company" className={cls} value={form.company} onChange={e=>setForm({...form,company:e.target.value})} />
          </div>
          <div>
            <label className="text-xs text-gray-500 uppercase tracking-widest mb-2 block">Message</label>
            <textarea rows={5} placeholder="Tell us about your project..." className={cls + " resize-none"} value={form.message} onChange={e=>setForm({...form,message:e.target.value})} required />
          </div>
          <button type="submit" className="btn-primary w-full justify-center py-4 text-sm">
            Send Message <IconSend size={15} />
          </button>
        </form>
      )}
    </div>
  )
}
