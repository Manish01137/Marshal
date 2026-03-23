import { useEffect, useRef } from "react";
import gsap from "gsap";
const ContactHero = () => {
  const ref = useRef(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".ch-item", { opacity: 0, y: 40, duration: 0.9, stagger: 0.15, ease: "power3.out" });
    }, ref);
    return () => ctx.revert();
  }, []);
  return (
    <section ref={ref} className="relative pt-36 pb-16 mesh-bg grid-bg overflow-hidden">
      <div className="absolute top-20 right-1/3 w-64 h-64 opacity-15 rounded-full animate-pulse"
        style={{ background: "radial-gradient(circle, #4f46e5, transparent)", filter: "blur(70px)" }} />
      <div className="max-w-7xl mx-auto px-6">
        <div className="ch-item section-label w-fit">Contact Us</div>
        <h1 className="ch-item text-5xl md:text-6xl font-bold text-white mb-5">
          Let's Build<br /><span className="grad-text">Something Great</span>
        </h1>
        <p className="ch-item text-gray-400 text-lg max-w-xl leading-relaxed">
          Tell us about your project and we'll get back to you within 24 hours with a tailored proposal.
        </p>
      </div>
    </section>
  );
};
export default ContactHero;
