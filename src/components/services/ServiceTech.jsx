import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { IconCode, IconReact, IconNode, IconDocker, IconAWS, IconPython, IconKubernetes, IconTerraform, IconPostgres, IconMongo, IconRedis, IconFlutter, IconFirebase, IconSalesforce, IconNext, IconTypescript, IconTailwind } from "../common/Icons";
gsap.registerPlugin(ScrollTrigger);

const techIconMap = {
  "React": IconReact, "React Native": IconReact,
  "Next.js": IconNext,
  "Node.js": IconNode,
  "Python": IconPython,
  "TensorFlow": IconCode,
  "PyTorch": IconCode,
  "AWS": IconAWS, "AWS SageMaker": IconAWS, "AWS IoT Core": IconAWS,
  "GCP": IconCode,
  "Azure": IconCode,
  "Docker": IconDocker,
  "Kubernetes": IconKubernetes,
  "Terraform": IconTerraform,
  "MongoDB": IconMongo,
  "PostgreSQL": IconPostgres,
  "Redis": IconRedis,
  "Flutter": IconFlutter,
  "Swift": IconCode,
  "Firebase": IconFirebase,
  "Tailwind CSS": IconTailwind,
  "TypeScript": IconTypescript,
  "GraphQL": IconCode,
  "FastAPI": IconCode,
  "Jenkins": IconCode,
  "GitHub Actions": IconCode,
  "Salesforce CRM": IconSalesforce,
};

const ServiceTech = ({ data }) => {
  const ref = useRef(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".tech-pill",
        { opacity: 0, scale: 0.85 },
        { opacity: 1, scale: 1, duration: 0.5, stagger: 0.06, ease: "back.out(1.4)",
          scrollTrigger: { trigger: ref.current, start: "top 88%" } }
      );
    }, ref);
    return () => ctx.revert();
  }, []);

  if (!data?.tech) return null;

  return (
    <section ref={ref} className="py-24 bg-[#020617] relative overflow-hidden">
      <div className="absolute inset-0 mesh-bg-2 opacity-30" />
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="section-label w-fit mb-3">Tech Stack</div>
        <h2 className="text-4xl font-bold text-white mb-4">
          Technologies <span className="grad-text">We Use</span>
        </h2>
        <p className="text-gray-400 max-w-xl mb-12">
          Battle-tested tools and platforms chosen for reliability, performance, and future-proofing.
        </p>

        <div className="flex flex-wrap gap-3">
          {data.tech.map((t, i) => {
            const Icon = techIconMap[t] || IconCode;
            return (
              <div key={i} className="tech-pill group flex items-center gap-2.5 glass border border-white/8 px-4 py-2.5 rounded-full hover:border-indigo-400/50 hover:bg-white/6 transition-all duration-300 cursor-default">
                <Icon size={16} className="text-indigo-400 group-hover:text-indigo-300 transition-colors" />
                <span className="text-gray-300 text-sm font-medium group-hover:text-white transition-colors">{t}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
export default ServiceTech;
