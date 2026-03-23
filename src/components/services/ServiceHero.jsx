import { useEffect, useRef } from "react";
import gsap from "gsap";
import { IconArrowRight } from "../common/Icons";
import { Link } from "react-router-dom";

const ServiceHero = ({ data }) => {
  const ref = useRef(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();
      tl.from(".sh-badge", { opacity: 0, y: 20, duration: 0.5, ease: "power3.out" })
        .from(".sh-title", { opacity: 0, y: 60, duration: 1, ease: "power3.out" }, "-=0.2")
        .from(".sh-tagline", { opacity: 0, y: 30, duration: 0.8 }, "-=0.5")
        .from(".sh-stats", { opacity: 0, y: 30, duration: 0.7, stagger: 0.12 }, "-=0.4")
        .from(".sh-btns", { opacity: 0, y: 20, duration: 0.5 }, "-=0.3")
        .from(".sh-image", { opacity: 0, x: 60, scale: 0.95, duration: 1.1, ease: "power3.out" }, "-=1");
    }, ref);
    return () => ctx.revert();
  }, [data?.slug]);

  if (!data) return null;

  return (
    <section ref={ref} className="relative min-h-[75vh] flex items-center pt-28 pb-16 overflow-hidden"
      style={{ background: "linear-gradient(135deg, #020617 0%, #0a0f1e 60%, #020617 100%)" }}>

      {/* Ambient orbs */}
      <div className="absolute top-16 left-1/3 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: `radial-gradient(circle, ${data.glow}30, transparent)`, filter: "blur(90px)" }} />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, #06b6d430, transparent)", filter: "blur(70px)" }} />

      {/* Grid bg */}
      <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-2 gap-16 items-center">

        {/* LEFT */}
        <div>
          <div className="sh-badge section-label w-fit">Our Services</div>

          <h1 className="sh-title text-5xl md:text-6xl font-bold text-white leading-[1.08] mb-5">
            {data.title}
          </h1>

          <p className="sh-tagline text-gray-400 text-lg leading-relaxed max-w-lg mb-10">
            {data.tagline}
          </p>

          {/* Stats */}
          {data.stats && (
            <div className="sh-stats flex flex-wrap gap-8 mb-10">
              {data.stats.map((s, i) => (
                <div key={i}>
                  <div className="text-2xl font-bold text-white" style={{ fontFamily: "Syne,sans-serif" }}>
                    <span className="grad-text">{s.val}</span>
                  </div>
                  <div className="text-xs text-gray-500 mt-1 uppercase tracking-widest">{s.label}</div>
                </div>
              ))}
            </div>
          )}

          <div className="sh-btns flex gap-4">
            <Link to="/contact" className="btn-primary">
              Start a Project <IconArrowRight size={16} />
            </Link>
            <Link to="/services" className="btn-outline">
              All Services
            </Link>
          </div>
        </div>

        {/* RIGHT — image */}
        <div className="sh-image relative">
          <div className="relative rounded-3xl overflow-hidden shadow-[0_40px_80px_rgba(0,0,0,0.6)]"
            style={{ border: `1px solid ${data.glow}30` }}>
            <img src={data.heroImage} alt={data.title} className="w-full h-72 lg:h-96 object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent" />
            {/* Gradient badge overlay */}
            <div className="absolute bottom-5 left-5 right-5">
              <div className="glass border border-white/10 rounded-xl px-5 py-3 flex items-center gap-3">
                <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${data.gradient} flex items-center justify-center flex-shrink-0`}>
                  <IconArrowRight className="text-white" size={16} />
                </div>
                <div>
                  <div className="text-white text-sm font-semibold">{data.title}</div>
                  <div className="text-gray-400 text-xs">Enterprise Ready</div>
                </div>
                <div className="ml-auto pulse-dot" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceHero;
