import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { IconCheck } from "../common/Icons";
gsap.registerPlugin(ScrollTrigger);

const ServiceOverview = ({ data }) => {
  const ref = useRef(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".ov-left", { opacity: 0, x: -50 }, { opacity: 1, x: 0, duration: 1, ease: "power3.out", scrollTrigger: { trigger: ref.current, start: "top 85%" } });
      gsap.fromTo(".ov-right", { opacity: 0, x: 50 }, { opacity: 1, x: 0, duration: 1, ease: "power3.out", scrollTrigger: { trigger: ref.current, start: "top 85%" } });
    }, ref);
    return () => ctx.revert();
  }, []);

  if (!data) return null;

  const bullets = data.features?.slice(0, 3).map(f => f.title) || [];

  return (
    <section ref={ref} className="py-28 bg-[#020617] relative overflow-hidden">
      <div className="absolute inset-0 mesh-bg opacity-40" />
      <div className="relative z-10 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT */}
        <div className="ov-left">
          <div className="section-label w-fit">Overview</div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            What We <span className="grad-text">Deliver</span>
          </h2>
          <p className="text-gray-400 leading-relaxed text-base mb-8">{data.overview}</p>

          <ul className="space-y-3">
            {bullets.map((b, i) => (
              <li key={i} className="flex items-center gap-3 text-gray-300 text-sm">
                <IconCheck className="text-indigo-400 flex-shrink-0" size={18} />
                {b}
              </li>
            ))}
          </ul>
        </div>

        {/* RIGHT */}
        <div className="ov-right">
          <div className="relative rounded-3xl overflow-hidden glass border border-white/8 shadow-[0_30px_60px_rgba(0,0,0,0.4)]">
            <img src={data.heroImage} alt={data.title} className="w-full h-72 object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#020617]/80 via-transparent to-transparent" />
            {/* Stats overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-5 grid grid-cols-3 gap-3">
              {data.stats?.map((s, i) => (
                <div key={i} className="glass border border-white/10 rounded-xl p-3 text-center">
                  <div className="text-indigo-400 font-bold text-lg" style={{ fontFamily: "Syne,sans-serif" }}>{s.val}</div>
                  <div className="text-gray-500 text-xs mt-0.5 leading-tight">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default ServiceOverview;
