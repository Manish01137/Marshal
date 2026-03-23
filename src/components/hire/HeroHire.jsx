import { useEffect, useRef } from "react";
import gsap from "gsap";
const HeroHire = () => {
  const ref = useRef(null);
  useEffect(() => {
    const ctx = gsap.context(() => { gsap.from(".hh-item", { opacity: 0, y: 40, duration: 0.9, stagger: 0.15, ease: "power3.out" }); }, ref);
    return () => ctx.revert();
  }, []);
  return (
    <section ref={ref} className="relative pt-36 pb-20 mesh-bg grid-bg overflow-hidden">
      <div className="absolute top-20 right-1/3 w-64 h-64 opacity-15 rounded-full animate-pulse" style={{ background: "radial-gradient(circle, #4f46e5, transparent)", filter: "blur(70px)" }} />
      <div className="max-w-7xl mx-auto px-6">
        <div className="hh-item section-label w-fit">Hire Talent</div>
        <h1 className="hh-item text-5xl md:text-6xl font-bold text-white mb-5 max-w-2xl">Hire Top <span className="grad-text">1% Engineers</span></h1>
        <p className="hh-item text-gray-400 text-lg max-w-xl leading-relaxed">Access a curated pool of world-class developers, designers, and engineers ready to join your team within 72 hours.</p>
      </div>
    </section>
  );
};
export default HeroHire;
