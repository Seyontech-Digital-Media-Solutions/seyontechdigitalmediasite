import {
  BrainCircuit, Headset, Filter, Smartphone,
  RefreshCw, BarChart3, TrendingUp, CircleDollarSign
} from "lucide-react";
import "../styles/global.css";

const cards = [
  {
    icon: <BrainCircuit size={28} />,
    color: "purple",
    title: "AI-Based Strategy",
    desc: "We use AI-driven insights to maximize your marketing performance",
    list: ["Smart campaign optimization", "AI-driven targeting", "Higher ROI focus", "Predictive analytics"],
  },
  {
    icon: <Headset size={28} />,
    color: "blue",
    title: "Dedicated Support",
    desc: "We stay with you at every step of your growth journey",
    list: ["1-on-1 communication", "Fast response time", "Expert consultation", "Ongoing support"],
  },
  {
    icon: <Filter size={28} />,
    color: "orange",
    title: "Complete Funnel Setup",
    desc: "We build systems that convert visitors into paying customers",
    list: ["Landing pages", "Lead capture systems", "Automation flows", "Conversion optimization"],
  },
  {
    icon: <Smartphone size={28} />,
    color: "green",
    title: "Mobile CRM Access",
    desc: "Manage your leads anytime, anywhere with ease",
    list: ["Real-time lead tracking", "Mobile-friendly CRM", "Instant notifications", "Easy pipeline management"],
  },
  {
    icon: <RefreshCw size={28} />,
    color: "pink",
    title: "Scalable Automation",
    desc: "Systems designed to grow with your business without extra workload",
    list: ["Auto lead nurturing flows", "Smart follow-up sequences", "Workflow automation", "Business scaling systems"],
  },
  {
    icon: <BarChart3 size={28} />,
    color: "yellow",
    title: "Transparent Reporting",
    desc: "Know exactly where your money goes and what you get",
    list: ["Weekly reports", "Real-time analytics", "Performance tracking", "Clear insights"],
  },
  {
    icon: <TrendingUp size={28} />,
    color: "violet",
    title: "Data-Driven Growth",
    desc: "Every decision is backed by real performance data and analytics",
    list: ["Advanced analytics tracking", "Conversion optimization insights", "Behavior-based targeting", "Performance forecasting"],
  },
  {
    icon: <CircleDollarSign size={28} />,
    color: "blue",
    title: "Affordable Pricing",
    desc: "Premium services without premium pricing",
    list: ["Flexible plans", "Startup-friendly", "No hidden costs", "High value delivery"],
  },
];

export default function WhyChoose() {
  return (
    <section className="services why-section" id="why">
      <h2 className="fade-up">Why Choose Us</h2>
      <p className="fade-up delay-1">
        We combine technology, expertise, and dedication to deliver exceptional results
      </p>

      <div className="why-choose-grid">
        {cards.map((card, i) => (
          <div className="why-card" key={i}>
            {/* ✅ FIXED: correct named color class */}
            <div className={`why-icon-box ${card.color}`}>
              {card.icon}
            </div>
            <h3>{card.title}</h3>
            <p>{card.desc}</p>
            <ul className="why-list">
              {card.list.map((item, j) => (
                <li key={j}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}