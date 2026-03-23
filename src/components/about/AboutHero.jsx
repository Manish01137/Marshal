import { useEffect, useRef } from "react";
import gsap from "gsap";

const AboutHero = () => {
  const ref = useRef(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".ah-item", { opacity: 0, y: 50, duration: 0.9, stagger: 0.15, ease: "power3.out" });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} className="relative min-h-[60vh] mesh-bg grid-bg flex items-center pt-32 pb-20 overflow-hidden">
      <div className="absolute top-20 right-1/4 w-72 h-72 rounded-full opacity-15 animate-pulse"
        style={{ background: "radial-gradient(circle, #4f46e5, transparent)", filter: "blur(80px)" }} />
      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="max-w-3xl">
          <div className="ah-item section-label w-fit">About Us</div>
          <h1 className="ah-item text-5xl md:text-6xl font-bold text-white leading-tight mb-6">
            We Build the Tech<br />
            <span className="grad-text">Behind Great Products</span>
          </h1>
          <p className="ah-item text-gray-400 text-lg leading-relaxed max-w-xl">
            Mershil Tech is a global software engineering company helping startups and enterprises build scalable, secure, and high-performance digital products. Founded with a mission to democratize access to elite engineering talent.
          </p>
        </div>
      </div>
    </section>
  );
};
export default AboutHero;
