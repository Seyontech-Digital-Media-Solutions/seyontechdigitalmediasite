import { Bot, Target, Share2, Layout } from "lucide-react";

const services = [
  {
    icon: <Bot size={50} />,
    title: "AI Automation Marketing",
    desc: "Leverage AI to automate your marketing and sales processes for maximum efficiency.",
    overlayTitle: "Key Features:",
    features: [
      "WhatsApp Automation for engagement",
      "AI Chatbot for 24/7 support",
      "CRM & Lead Management",
      "AI-Based Follow-up Systems",
    ],
    image: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=600&q=80",
    imageAlt: "AI Automation",
  },
  {
    icon: <Target size={50} />,
    title: "Paid Ads Management",
    desc: "Data-driven advertising campaigns that deliver measurable ROI.",
    overlayTitle: "Channels & Strategy:",
    features: [
      "Google Ads for high-intent search",
      "YouTube Lead Generation",
      "Facebook & Instagram Precision",
      "Transparent ROI Reporting",
    ],
    image: "https://images.unsplash.com/photo-1611926653458-09294b3142bf?w=600&q=80",
    imageAlt: "Paid Ads",
  },
  {
  icon: <Share2 size={50} />,
  title: "Social Media Marketing",
  desc: "Build a powerful brand presence across all social platforms.",
  overlayTitle: "Brand Growth:",
  features: [
    "Tailored Content Strategy",
    "Professional Poster & Video",
    "Strategic Brand Positioning",
   
  ],

  // NEW IMAGE
  image:
    "https://images.unsplash.com/photo-1611605698335-8b1569810432?q=80&w=1200&auto=format&fit=crop",

  imageAlt: "Social Media Marketing",
},

{
  icon: <Layout size={50} />,
  title: "Website & Funnels",
  desc: "High-converting systems that turn visitors into customers.",
  overlayTitle: "Web Solutions:",
  features: [
    "Professional Business Sites",
    "Smart Lead Capture Systems",
    "E-commerce Solutions",
    "Conversion Optimization",
  ],

  // NEW IMAGE
  image:
    "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?q=80&w=1200&auto=format&fit=crop",

  imageAlt: "Website Development",
}
];

export default function ServicesSection() {
  return (
    <section className="services" id="services">
      <h2 className="fade-up">Our Services</h2>
      <p className="fade-up delay-1">
        Everything you need to grow your business with digital & AI solutions
      </p>

      <div className="services-grid">
        <div className="services-grid main-services">
          {services.map((service, index) => (
            <div className="service-card interactive" key={index}>
              <div className="card-inner">

                {/* Default visible content */}
                <div className="card-top">
                  <div className="icon-box blue">{service.icon}</div>
                  <h3>{service.title}</h3>
                  <p className="main-desc">{service.desc}</p>
                </div>

                {/* Hover overlay with image + features */}
                <div className="card-overlay">
                  <img
                    src={service.image}
                    alt={service.imageAlt}
                    className="card-overlay-img"
                  />
                  <div className="card-overlay-content">
                    <h4>{service.overlayTitle}</h4>
                    <ul>
                      {service.features.map((f, i) => (
                        <li key={i}>{f}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}