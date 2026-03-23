import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { IconCode, IconLayout, IconServer, IconZap, IconRocket, IconUsers } from "../common/Icons";
gsap.registerPlugin(ScrollTrigger);

const defaultIcons = [IconCode, IconLayout, IconServer, IconZap, IconRocket, IconUsers];

const ServiceProcess = ({ data }) => {
  const ref = useRef(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".proc-card",
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 0.7, stagger: 0.12, ease: "power3.out",
          scrollTrigger: { trigger: ref.current, start: "top 85%" } }
      );
    }, ref);
    return () => ctx.revert();
  }, []);

  const steps = data?.process || [];

  return (
    <section ref={ref} className="py-28 bg-[#020617] relative overflow-hidden">
      <div className="absolute inset-0 mesh-bg opacity-40" />
      <div className="relative z-10 max-w-7xl mx-auto px-6">

        <div className="text-center mb-20">
          <div className="section-label mx-auto w-fit">Our Process</div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            How We <span className="grad-text">Work</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            A proven, transparent process designed to reduce risk and maximize your outcome.
          </p>
        </div>

        {/* Steps grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((s, i) => {
            const Icon = defaultIcons[i] || IconServer;
            const isLast = i === steps.length - 1;
            return (
              <div key={i}
                className={`proc-card relative glass rounded-2xl p-7 hover:-translate-y-1 transition-all duration-300 group
                  ${isLast ? "border border-indigo-500/30" : "border border-white/8 hover:border-indigo-400/30"}`}>
                {isLast && (
                  <div className="absolute inset-0 rounded-2xl opacity-30"
                    style={{ background: "radial-gradient(circle at 50% 0%, rgba(79,70,229,0.15), transparent 70%)" }} />
                )}

                {/* Number + Icon */}
                <div className="flex items-center gap-3 mb-5 relative z-10">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <Icon size={18} className="text-white" />
                  </div>
                  <span className="text-3xl font-bold text-indigo-500/20 group-hover:text-indigo-500/40 transition-colors" style={{ fontFamily: "Syne,sans-serif" }}>
                    {s.step}
                  </span>
                </div>

                <h3 className="text-base font-semibold text-white mb-2 relative z-10">{s.label}</h3>
                <p className="text-gray-400 text-sm leading-relaxed relative z-10">{s.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
export default ServiceProcess;
