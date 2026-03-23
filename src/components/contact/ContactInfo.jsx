import { IconMapPin, IconMail, IconPhone, IconClock } from '../common/Icons'

const infos = [
  { Icon: IconMapPin, label: 'Address',       value: 'Sydney, NSW, Australia' },
  { Icon: IconMail,   label: 'Email',         value: 'info@mershiltech.com' },
  { Icon: IconPhone,  label: 'Phone',         value: '+1 (800) 000-0000' },
  { Icon: IconClock,  label: 'Response Time', value: 'Within 24 hours' },
]

export default function ContactInfo() {
  return (
    <div className="space-y-5">
      <h3 className="text-xl font-bold text-white mb-6">Get in Touch</h3>
      {infos.map(({ Icon, label, value }, i) => (
        <div key={i} className="flex items-start gap-4 glass border border-white/8 rounded-xl p-4 hover:border-indigo-400/30 transition-colors">
          <div className="w-9 h-9 rounded-lg bg-indigo-500/15 flex items-center justify-center flex-shrink-0">
            <Icon size={16} className="text-indigo-400" />
          </div>
          <div>
            <div className="text-gray-500 text-xs uppercase tracking-widest mb-0.5">{label}</div>
            <div className="text-white text-sm font-medium">{value}</div>
          </div>
        </div>
      ))}
    </div>
  )
}
