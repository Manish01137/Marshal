import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  { name: "Rahul Sharma", role: "Startup Founder", company: "TechBase India", text: "They delivered beyond expectations. The product quality and performance were truly exceptional.", avatar: "RS" },
  { name: "Emily Carter", role: "Product Manager", company: "Nova SaaS", text: "Amazing team to work with. Highly professional and extremely skilled developers who understand the vision.", avatar: "EC" },
  { name: "David Lee", role: "CTO", company: "CloudCore", text: "Their technical expertise helped us scale our platform efficiently and securely. Highly recommended.", avatar: "DL" },
  { name: "Ankit Verma", role: "Entrepreneur", company: "Buildify", text: "From idea to execution, everything was seamless. World-class communication and delivery.", avatar: "AV" },
  { name: "Sarah Wilson", role: "CEO", company: "GrowthLabs", text: "We've launched 3 products with Mershil Tech. Each time, they raise the bar. Truly elite engineers.", avatar: "SW" },
];

const Testimonials = () => {
  const trackRef = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".test-heading", { opacity: 0, y: 40, duration: 0.9, ease: "power3.out",
        scrollTrigger: { trigger: sectionRef.current, start: "top 85%" }
      });

      const el = trackRef.current;
      const anim = gsap.to(el, { xPercent: -50, duration: 30, ease: "linear", repeat: -1 });
      el.addEventListener("mouseenter", () => anim.pause());
      el.addEventListener("mouseleave", () => anim.resume());
      return () => anim.kill();
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <>
      <style>{`
        .syne { font-family: 'Syne', sans-serif; }
        .test-card { transition: transform 0.35s cubic-bezier(0.34,1.56,0.64,1), border-color 0.3s; }
        .test-card:hover { transform: translateY(-6px); border-color: rgba(139,92,246,0.35) !important; }
        .fade-left { background: linear-gradient(90deg, #020617 0%, transparent 100%); }
        .fade-right { background: linear-gradient(270deg, #020617 0%, transparent 100%); }
        .avatar-grad { background: linear-gradient(135deg, #6366f1, #8b5cf6); }
      `}</style>

      <section ref={sectionRef} className="py-28 bg-[#020617] overflow-hidden relative">
        <div className="absolute left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-violet-500/8 blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 relative z-10 mb-16">
          <div className="test-heading text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-violet-500/20 bg-violet-500/5 text-violet-400 text-xs font-semibold uppercase tracking-widest mb-6">
              Client Stories
            </div>
            <h2 className="syne text-4xl md:text-5xl font-bold text-white mb-5">
              What Our Clients Say
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              Trusted by startups and enterprises worldwide for delivering exceptional digital solutions.
            </p>
          </div>
        </div>

        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-32 fade-left z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 fade-right z-10 pointer-events-none" />
          <div className="overflow-hidden">
            <div ref={trackRef} className="flex gap-6 w-max px-4">
              {[...testimonials, ...testimonials].map((item, i) => (
                <div key={i} className="test-card min-w-[320px] max-w-[320px] p-7 rounded-2xl border border-white/8 bg-white/3 backdrop-blur-xl cursor-default">
                  {/* Stars */}
                  <div className="flex gap-0.5 mb-4 text-yellow-400 text-sm">★★★★★</div>
                  {/* Quote */}
                  <p className="text-gray-300 text-sm leading-relaxed mb-6">"{item.text}"</p>
                  {/* Author */}
                  <div className="flex items-center gap-3">
                    <div className="avatar-grad w-10 h-10 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
                      {item.avatar}
                    </div>
                    <div>
                      <div className="text-white text-sm font-semibold">{item.name}</div>
                      <div className="text-gray-500 text-xs">{item.role} · {item.company}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonials;
