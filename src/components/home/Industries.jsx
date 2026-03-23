import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const industries = [
  { label: "Fintech", emoji: "💰" },
  { label: "Healthcare", emoji: "🏥" },
  { label: "E-Commerce", emoji: "🛍️" },
  { label: "EdTech", emoji: "🎓" },
  { label: "SaaS", emoji: "☁️" },
  { label: "Logistics", emoji: "🚚" },
  { label: "Real Estate", emoji: "🏢" },
  { label: "Media", emoji: "📱" },
];

const Industries = () => {
  const ref = useRef(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".ind-card", { opacity: 0, scale: 0.9 }, { opacity: 1, scale: 1, duration: 0.6, stagger: 0.07, ease: "back.out(1.4)", scrollTrigger: { trigger: ref.current, start: "top 85%" } });
    }, ref);
    return () => ctx.revert();
  }, []);
  return (
    <section ref={ref} className="py-24 bg-[#020617]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <div className="section-label mx-auto w-fit">Industries</div>
          <h2 className="text-4xl font-bold text-white">We Serve Every Sector</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {industries.map((ind, i) => (
            <div key={i} className="ind-card grad-border glass rounded-2xl p-6 text-center hover:-translate-y-2 transition-all duration-300 cursor-default group">
              <div className="text-3xl mb-3">{ind.emoji}</div>
              <div className="text-gray-300 text-sm font-medium group-hover:text-white transition-colors">{ind.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Industries;
