import { IconArrowRight } from '../common/Icons'
export default function RoleCard({ role }) {
  return (
    <div className="grad-border glass rounded-xl p-5 hover:-translate-y-1 transition-all duration-300 cursor-pointer group">
      <h3 className="text-white font-semibold text-sm mb-2 group-hover:text-indigo-300 transition-colors">{role?.title || 'Developer'}</h3>
      <p className="text-gray-500 text-xs mb-4">{role?.desc || 'Available for hire'}</p>
      <div className="flex items-center gap-1 text-indigo-400 text-xs font-medium">
        <span>Hire Now</span><IconArrowRight size={12} className="group-hover:translate-x-0.5 transition-transform" />
      </div>
    </div>
  )
}
