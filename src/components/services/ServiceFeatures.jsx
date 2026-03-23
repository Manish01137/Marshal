import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { IconCode, IconBrain, IconCloud, IconWifi, IconLayout, IconServer, IconSmartphone, IconDatabase, IconShield, IconRocket, IconArrowRight, IconTrending, IconZap, IconLock, IconCpu, IconGlobe, IconUsers } from "../common/Icons";
gsap.registerPlugin(ScrollTrigger);

// Map feature titles to premium icons
const iconMap = {
  "Enterprise Architecture": IconCode,
  "Scalable Infrastructure": IconRocket,
  "Security by Design": IconShield,
  "API Development": IconArrowRight,
  "Legacy Modernization": IconCode,
  "SaaS Product Builds": IconLayout,
  "Predictive Analytics": IconTrending,
  "LLM Integration": IconBrain,
  "Computer Vision": IconCpu,
  "NLP & Chatbots": IconBrain,
  "Workflow Automation": IconZap,
  "Custom Model Training": IconCpu,
  "Cloud Migration": IconCloud,
  "CI/CD Pipelines": IconArrowRight,
  "Infrastructure as Code": IconCode,
  "Kubernetes Orchestration": IconServer,
  "Security & Compliance": IconShield,
  "Cost Optimization": IconTrending,
  "Device Integration": IconWifi,
  "Real-time Monitoring": IconZap,
  "Edge Computing": IconCpu,
  "Secure Connectivity": IconLock,
  "Cloud IoT Platforms": IconCloud,
  "Predictive Maintenance": IconZap,
  "Responsive Design": IconLayout,
  "Performance Optimized": IconRocket,
  "Design Systems": IconLayout,
  "Animations & Motion": IconSmartphone,
  "Accessibility (A11y)": IconGlobe,
  "SEO Architecture": IconTrending,
  "REST & GraphQL APIs": IconCode,
  "Database Design": IconDatabase,
  "Authentication & Auth": IconLock,
  "Real-time Systems": IconWifi,
  "Background Jobs": IconZap,
  "High Availability": IconShield,
  "Cross-Platform (React Native / Flutter)": IconSmartphone,
  "Native iOS & Android": IconSmartphone,
  "Offline-First Architecture": IconCloud,
  "Push Notifications": IconZap,
  "App Store Optimization": IconRocket,
  "Biometric & Device APIs": IconLock,
  "CRM Implementation": IconDatabase,
  "Custom Apex Development": IconCode,
  "Lightning Component Builds": IconLayout,
  "Salesforce Integrations": IconArrowRight,
  "Sales Cloud & Service Cloud": IconUsers,
  "Analytics & Reporting": IconTrending,
};

const colors = [
  "from-blue-500 to-indigo-500",
  "from-violet-500 to-purple-500",
  "from-cyan-500 to-sky-500",
  "from-emerald-500 to-teal-500",
  "from-pink-500 to-rose-500",
  "from-orange-500 to-amber-500",
];

const ServiceFeatures = ({ data }) => {
  const ref = useRef(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".feat-card",
        { opacity: 0, y: 60 },
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: "power3.out",
          scrollTrigger: { trigger: ref.current, start: "top 85%" } }
      );
    }, ref);
    return () => ctx.revert();
  }, []);

  if (!data?.features) return null;

  return (
    <section ref={ref} className="py-28 bg-[#020617] relative overflow-hidden">
      <div className="absolute inset-0 mesh-bg-2 opacity-50" />
      <div className="relative z-10 max-w-7xl mx-auto px-6">

        <div className="text-center mb-20">
          <div className="section-label mx-auto w-fit">Core Features</div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Everything You <span className="grad-text">Need</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            A comprehensive suite of capabilities designed to deliver exceptional results for your business.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.features.map((f, i) => {
            const Icon = iconMap[f.title] || IconCode;
            const color = colors[i % colors.length];
            return (
              <div key={i} className="feat-card grad-border group relative glass rounded-2xl p-7 hover:-translate-y-2 transition-all duration-400 overflow-hidden">
                {/* Hover glow */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: "radial-gradient(circle at 30% 30%, rgba(79,70,229,0.08), transparent 70%)" }} />

                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300 relative z-10`}>
                  <Icon size={22} className="text-white" />
                </div>

                <h3 className="text-base font-semibold text-white mb-2 relative z-10">{f.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed relative z-10">{f.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
export default ServiceFeatures;
