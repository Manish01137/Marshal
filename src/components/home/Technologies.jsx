import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const techStack = [
  { name: "React", emoji: "⚛️" },
  { name: "Next.js", emoji: "▲" },
  { name: "Node.js", emoji: "🟢" },
  { name: "Python", emoji: "🐍" },
  { name: "TensorFlow", emoji: "🧠" },
  { name: "AWS", emoji: "☁️" },
  { name: "Docker", emoji: "🐳" },
  { name: "Kubernetes", emoji: "⚙️" },
  { name: "MongoDB", emoji: "🍃" },
  { name: "PostgreSQL", emoji: "🐘" },
  { name: "TypeScript", emoji: "📘" },
  { name: "GraphQL", emoji: "◈" },
];

const Technologies = () => {
  const trackRef = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".tech-heading", { opacity: 0, y: 40, duration: 0.9, ease: "power3.out",
        scrollTrigger: { trigger: sectionRef.current, start: "top 85%" }
      });

      const el = trackRef.current;
      gsap.to(el, { xPercent: -50, duration: 30, ease: "linear", repeat: -1 });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <>
      <style>{`
        .syne { font-family: 'Syne', sans-serif; }
        .tech-chip {
          transition: transform 0.35s cubic-bezier(0.34,1.56,0.64,1), border-color 0.3s, background 0.3s;
        }
        .tech-chip:hover {
          transform: translateY(-6px) scale(1.04);
          border-color: rgba(99,102,241,0.5);
          background: rgba(99,102,241,0.08);
        }
        .fade-left { background: linear-gradient(90deg, #020617 0%, transparent 100%); }
        .fade-right { background: linear-gradient(270deg, #020617 0%, transparent 100%); }
      `}</style>

      <section ref={sectionRef} className="py-28 bg-[#020617] overflow-hidden relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-violet-500/8 blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="tech-heading text-center mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-violet-500/20 bg-violet-500/5 text-violet-400 text-xs font-semibold uppercase tracking-widest mb-6">
              Our Stack
            </div>
            <h2 className="syne text-4xl md:text-5xl font-bold text-white mb-5">
              Technologies We Use
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              We leverage modern, scalable, and future-proof technologies to build powerful digital products.
            </p>
          </div>
        </div>

        {/* Scrolling track with fade edges */}
        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-32 fade-left z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 fade-right z-10 pointer-events-none" />

          <div className="overflow-hidden">
            <div ref={trackRef} className="flex gap-5 w-max px-4">
              {[...techStack, ...techStack].map((tech, i) => (
                <div key={i} className="tech-chip min-w-[180px] px-6 py-5 rounded-2xl border border-white/10 bg-white/4 backdrop-blur-xl text-center cursor-default">
                  <div className="text-2xl mb-2">{tech.emoji}</div>
                  <div className="text-white font-semibold text-sm tracking-wide">{tech.name}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Technologies;
