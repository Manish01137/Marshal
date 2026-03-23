import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const stats = [
  { num: 250, suffix: "+", label: "Projects Shipped" },
  { num: 98, suffix: "%", label: "Client Satisfaction" },
  { num: 30, suffix: "+", label: "Countries Served" },
  { num: 10, suffix: "+", label: "Years of Excellence" },
];

const AboutStats = () => {
  const ref = useRef(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      stats.forEach((s, i) => {
        gsap.fromTo(`#as-counter-${i}`, { innerText: 0 }, {
          innerText: s.num, duration: 2.5, ease: "power2.out", snap: { innerText: 1 },
          scrollTrigger: { trigger: ref.current, start: "top 85%" },
        });
      });
      gsap.fromTo(".as-card", { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: "power3.out", scrollTrigger: { trigger: ref.current, start: "top 85%" } });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} className="py-24 bg-[#020617]">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6">
        {stats.map((s, i) => (
          <div key={i} className="as-card glass border border-white/8 rounded-2xl p-8 text-center hover:border-indigo-400/30 transition-colors">
            <div className="text-4xl font-bold grad-text mb-2" style={{fontFamily:'Syne,sans-serif'}}>
              <span id={`as-counter-${i}`}>0</span>{s.suffix}
            </div>
            <div className="text-gray-500 text-sm">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
};
export default AboutStats;
