const steps = [
  { num: "01", title: "Share Requirements", desc: "Tell us about your project, tech stack, and team needs." },
  { num: "02", title: "Get Matched", desc: "We handpick the top candidates from our vetted talent pool." },
  { num: "03", title: "Interview & Select", desc: "Meet the candidates and choose who fits your culture best." },
  { num: "04", title: "Start Building", desc: "Onboard in 72 hours and start shipping immediately." },
];
const ProcessSection = () => (
  <section className="py-24 bg-[#020617] relative overflow-hidden">
    <div className="absolute inset-0 mesh-bg opacity-40" />
    <div className="relative z-10 max-w-7xl mx-auto px-6">
      <div className="text-center mb-16">
        <div className="section-label mx-auto w-fit">Our Process</div>
        <h2 className="text-4xl font-bold text-white">Hire in 4 Simple Steps</h2>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {steps.map((s, i) => (
          <div key={i} className="glass border border-white/8 rounded-2xl p-7 hover:border-indigo-400/30 transition-colors group">
            <div className="text-4xl font-bold text-indigo-500/30 mb-4 group-hover:text-indigo-500/50 transition-colors" style={{fontFamily:'Syne,sans-serif'}}>{s.num}</div>
            <h3 className="text-base font-semibold text-white mb-2">{s.title}</h3>
            <p className="text-gray-400 text-sm leading-relaxed">{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);
export default ProcessSection;
