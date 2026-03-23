import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
const roles = ["React Developer","Node.js Developer","Flutter Developer","Python Developer","DevOps Engineer","Data Scientist","UI/UX Designer","Product Manager","Java Developer","Full Stack Engineer","Cloud Architect","QA Engineer"];
const RolesGrid = () => {
  const ref = useRef(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".role-card", { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.7, stagger: 0.06, ease: "power3.out", scrollTrigger: { trigger: ref.current, start: "top 85%" } });
    }, ref);
    return () => ctx.revert();
  }, []);
  return (
    <section ref={ref} className="py-24 bg-[#020617]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="section-label w-fit mb-4">Available Roles</div>
        <h2 className="text-4xl font-bold text-white mb-12">Find Your Perfect <span className="grad-text">Developer</span></h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {roles.map((role, i) => (
            <div key={i} className="role-card grad-border glass rounded-xl p-5 text-center hover:-translate-y-1 hover:border-indigo-400/40 transition-all duration-300 cursor-pointer group">
              <span className="text-gray-300 text-sm group-hover:text-white transition-colors">{role}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default RolesGrid;
