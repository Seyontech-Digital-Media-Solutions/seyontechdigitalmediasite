// ─── IMAGE IMPORTS ────────────────────────────────────────────────────────────
import imgHealth       from "../assets/Blogs/health.jpg";
import imgFood         from "../assets/Blogs/food.png";
import imgConstruction from "../assets/Blogs/construction.jpg";
import imgAutomobile   from "../assets/Blogs/automobile.png";
import imgEcommerce    from "../assets/Blogs/ecommmerce.png";
import imgFitness      from "../assets/Blogs/fitness.png";
import imgEvents       from "../assets/Blogs/events.png";

// ─── BLOG POSTS DATA ─────────────────────────────────────────────────────────

const blogPosts = [
  {
    id: 1,
    slug: "healthcare-wellness",
    category: "Healthcare & Wellness",
    accent: "#0ea5e9",
    accentLight: "#f0f9ff",
    accentBorder: "#bae6fd",
    icon: "🩺",
    date: "May 12, 2025",
    readTime: "6 min read",
    author: { name: "Arjun Mehta", role: "Brand Strategy Lead", initials: "AM" },
    title: "How We Helped MedCore Clinics Unify 12 Locations Under One Brand",
    tagline: "When trust is the product, design is the proof.",
    excerpt:
      "MedCore expanded from 3 to 12 locations but their brand hadn't grown with them. Patients at each site experienced something different. Trust was inconsistent. Referrals were stalling — until we rebuilt everything from the ground up.",
    image: imgHealth,
    thumbImage: imgHealth,
    tags: ["Brand Identity", "Web Design", "App UI", "Patient Experience"],
    body: [
      "MedCore came to us with a problem that looked simple on the surface: twelve locations, one brand. But when we began the audit, we found twelve different versions of the same logo, four distinct colour interpretations, two completely different appointment booking flows, and a patient experience that changed depending on which location you visited.",
      "Trust in healthcare is built through consistency. Every inconsistency is a micro-signal to a patient that says: we're not as organised as we need to be. We rebuilt the brand from its core — a logotype that communicates precision and warmth, a palette that moves away from sterile blues toward a confident teal-and-white system that actually photographs well in real clinical environments.",
      "The website architecture was patient-first: outcomes before services, booking in three steps instead of seven, FAQ content surfaced before the patient had to search for it. The mobile app was rebuilt around actual usage data — the features patients used most moved to the home screen; the ones they never touched were removed.",
      "The rollout across all twelve locations happened over six months. Staff training materials, environmental graphics, digital templates, and print collateral shipped on time, on budget, and in a format the client's internal team could maintain independently.",
    ],
    stats: [
      { value: "+38%", label: "Patient Bookings" },
      { value: "12",   label: "Locations Launched" },
      { value: "4.9★", label: "App Rating" },
      { value: "−61%", label: "Drop-Off Rate" },
    ],
    deliverables: [
      "Brand System",
      "Website Redesign",
      "Mobile App UI",
      "Environmental Graphics",
      "Staff Training Kits",
    ],
  },
  {
    id: 2,
    slug: "hospitality-food",
    category: "Hospitality & Food",
    accent: "#f59e0b",
    accentLight: "#fffbeb",
    accentBorder: "#fde68a",
    icon: "🍽️",
    date: "Apr 28, 2025",
    readTime: "5 min read",
    author: { name: "Priya Nair", role: "Creative Director", initials: "PN" },
    title: "Saffron & Salt: Building a Restaurant Brand That Sold Out in 6 Hours",
    tagline: "A brand built to make people hungry before they arrive.",
    excerpt:
      "Three Michelin-starred founders. A city crowded with ambition. The brief: make people desperate to get a table before they'd eaten a single bite. Here's the 60-day pre-launch campaign that filled every reservation.",
    image: imgFood,
    thumbImage: imgFood,
    tags: ["Social Media", "Brand Identity", "Video Editing", "Content Strategy"],
    body: [
      "The social strategy was a 60-day pre-launch teaser — one image per day, no caption, no context, just mood. Pure aesthetic, relentlessly consistent. We gave the algorithm nothing to categorise, and gave people everything to wonder about.",
      "Content was rooted in antique spice trade aesthetics — aged papers, deep saffron golds, inked typography — modernised into something luxurious without feeling like a museum. Every image was shot on a custom-built set to ensure complete visual control.",
      "By opening week the account had 40,000 followers who had never been told what the restaurant served. The mystery was the marketing. When the menu was finally revealed, 220,000 people saw it in the first 48 hours.",
      "The campaign extended across Instagram, outdoor, and targeted mailers to food media. Reservation waitlists opened and filled within hours. The six-hour sell-out wasn't luck — it was the inevitable result of six weeks of deliberate brand tension.",
    ],
    stats: [
      { value: "6 hrs", label: "To Sell Out" },
      { value: "220K", label: "Campaign Reach" },
      { value: "+61%", label: "Reservations" },
      { value: "40K",  label: "Pre-Launch Followers" },
    ],
    deliverables: [
      "Social Campaign",
      "Brand Identity",
      "Content Calendar",
      "Video Reels",
      "Print Collateral",
    ],
  },
  {
    id: 3,
    slug: "construction-home",
    category: "Construction & Home Services",
    accent: "#f97316",
    accentLight: "#fff7ed",
    accentBorder: "#fed7aa",
    icon: "🏗️",
    date: "Apr 10, 2025",
    readTime: "7 min read",
    author: { name: "Karthik Rajan", role: "Performance Lead", initials: "KR" },
    title: "Arcstone Builders: How We Tripled Qualified Leads in 90 Days",
    tagline: "Lead generation that works as hard as the people it represents.",
    excerpt:
      "Arcstone had the reputation to compete at the premium end of residential construction — but their digital presence was costing them qualified leads every single day. We rebuilt it from the ground up.",
    image: imgConstruction,
    thumbImage: imgConstruction,
    tags: ["Google Ads", "Lead Generation", "SEO", "Website"],
    body: [
      "Google Ads campaigns were rebuilt from scratch — high-intent keywords, tight geographic targeting, and ad copy that spoke directly to premium buyers rather than bargain hunters. The previous campaigns were spending money to attract exactly the wrong audience.",
      "A custom quote estimator was integrated — four questions about project type, budget, timeline, and location — routing to either a booking form or downloadable guide based on response quality. This single tool became the highest-converting element on the site.",
      "SEO was rebuilt with local landing pages for each service area. Within 90 days, Arcstone ranked #1 organically for eight of their twelve priority keywords, driving a 142% increase in organic traffic without any additional ad spend.",
      "Poster and social creatives reinforced premium positioning across local Instagram and Google Display, ensuring visual consistency at every touchpoint and reducing the cognitive dissonance that was costing them trust at the conversion stage.",
    ],
    stats: [
      { value: "3×",      label: "Qualified Leads" },
      { value: "90 days", label: "To Full ROI" },
      { value: "#1",      label: "Local Search Rank" },
      { value: "+142%",   label: "Organic Traffic" },
    ],
    deliverables: [
      "Google Ads",
      "Quote Calculator",
      "SEO Programme",
      "Landing Pages",
      "Social Creatives",
    ],
  },
  {
    id: 4,
    slug: "automobile",
    category: "Automobile Industry",
    accent: "#64748b",
    accentLight: "#f8fafc",
    accentBorder: "#cbd5e1",
    icon: "🚗",
    date: "Mar 22, 2025",
    readTime: "5 min read",
    author: { name: "Siva Subramaniam", role: "Campaign Strategist", initials: "SS" },
    title: "DriveZen Motors: From Declining Walk-Ins to 4× Lead Volume",
    tagline: "From showroom floor to sold — in half the time.",
    excerpt:
      "DriveZen had great inventory and a trusted team — but no digital engine to match. Walk-ins were declining while competitors ran aggressive Meta and YouTube campaigns. We built their engine.",
    image: imgAutomobile,
    thumbImage: imgAutomobile,
    tags: ["Paid Ads", "Video Editing", "Lead Gen", "CRM"],
    body: [
      "We launched a video-first Meta campaign — 30-second cinematic walkarounds of hero inventory shot in-house with our editing team, cutting cost-per-lead by 58% versus their previous static ads. Video wasn't a nice-to-have; it was the reason the numbers moved.",
      "A WhatsApp CRM funnel was deployed so every inquiry got an instant personalised response with the vehicle's full spec sheet, financing options, and a test-drive booking link. Response time went from hours to seconds.",
      "Retargeting audiences were built on website visitors and video viewers — keeping DriveZen visible throughout the purchase consideration window, which for vehicles typically spans 2 to 6 weeks.",
      "Within 90 days, enquiry-to-showroom-visit conversion improved from 12% to 31%, with 4× the volume of qualified leads. The total pipeline value increase in that period exceeded ₹3.2 crore.",
    ],
    stats: [
      { value: "−58%",    label: "Cost Per Lead" },
      { value: "4×",      label: "Lead Volume" },
      { value: "31%",     label: "Showroom Conversion" },
      { value: "90 days", label: "To Full Impact" },
    ],
    deliverables: [
      "Video Ad Production",
      "Meta Campaigns",
      "WhatsApp CRM",
      "Retargeting Ads",
      "Poster Creatives",
    ],
  },
  {
    id: 5,
    slug: "retail-ecommerce",
    category: "Retail & E-commerce",
    accent: "#ec4899",
    accentLight: "#fdf2f8",
    accentBorder: "#fbcfe8",
    icon: "🛍️",
    date: "Mar 8, 2025",
    readTime: "6 min read",
    author: { name: "Deepa Krishnan", role: "UX Strategist", initials: "DK" },
    title: "Lumière Fashion: How We Hit 6.4% Conversion — 3× the Industry Average",
    tagline: "Three times the industry average conversion rate. Here's how.",
    excerpt:
      "Lumière had a cult following. Their conversion rate was 1.9%. That's a website problem. We audited the entire funnel, rebuilt the checkout experience, and created a fit guide tool that changed everything.",
    image: imgEcommerce,
    thumbImage: imgEcommerce,
    tags: ["E-commerce", "UX Design", "Funnel Design", "Conversion Optimisation"],
    body: [
      "Two weeks of conversion audit — heatmaps, session recordings, exit surveys. The data told a consistent story: customers loved the brand but didn't trust the sizing and abandoned at surprise shipping costs. Two fixable problems.",
      "The funnel was rebuilt with frictionless architecture. Shipping costs surfaced on the product page. Guest checkout as default. Three-click checkout for returning customers. None of these were complicated changes — they were just never done.",
      "A fit guide tool built on a simple quiz gave personalised size recommendations — virtually eliminating sizing-related returns and the trust problem that caused them. Return rate dropped 44% in the first cohort.",
      "Editorial content became shoppable. Products embedded within lookbooks and styling features. Sessions from editorial pages run 40% longer and convert at 2.8× the site average, making content a direct revenue driver rather than a brand exercise.",
    ],
    stats: [
      { value: "6.4%",    label: "Conversion Rate" },
      { value: "3×",      label: "Industry Average" },
      { value: "+₹1.8Cr", label: "Extra Revenue" },
      { value: "−44%",    label: "Cart Abandonment" },
    ],
    deliverables: [
      "Website Redesign",
      "Fit Guide Tool",
      "Checkout Optimisation",
      "Editorial Experience",
      "Email Flows",
    ],
  },
  {
    id: 6,
    slug: "fitness-lifestyle",
    category: "Fitness & Lifestyle",
    accent: "#10b981",
    accentLight: "#f0fdf4",
    accentBorder: "#a7f3d0",
    icon: "💪",
    date: "Feb 18, 2025",
    readTime: "5 min read",
    author: { name: "Meena Rajesh", role: "Brand & Community Lead", initials: "MR" },
    title: "FORMA Studio: 40K Followers and 28K App Downloads in 60 Days",
    tagline: "40,000 followers. 28,000 app downloads. 60 days.",
    excerpt:
      "FORMA wanted to build a studio brand with a genuine community at its centre, and an app that people actually used past day 30. The fitness market is crowded with apps people abandon. We solved both problems before the doors even opened.",
    image: imgFitness,
    thumbImage: imgFitness,
    tags: ["App Design", "Brand Identity", "Social Strategy", "Reels"],
    body: [
      "The brand was built to feel nothing like a traditional gym. Earthy palette — deep forest greens, off-whites, terracotta — paired with an elegant serif that reads more like a wellness journal than a weight room. Differentiation wasn't just aesthetic; it was strategic.",
      "The app was built around a single insight: people quit fitness apps because the apps make them feel behind. FORMA inverts this — celebrating consistency over intensity, progress over perfection. The onboarding outputs a genuinely personalised programme in under 3 minutes.",
      "The social launch ran 'The 6am Club' — daily reels featuring real members and their morning routines. Authentic, consistent, community-first. 40,000 followers before the doors opened. Every one of them arrived already knowing what FORMA stood for.",
      "iOS and Android launched simultaneously. 30-day retention in the first cohort was 92% — a metric almost unheard of in the fitness app category, where 30% is considered good.",
    ],
    stats: [
      { value: "40K",  label: "Followers in 60 Days" },
      { value: "28K",  label: "App Downloads" },
      { value: "92%",  label: "30-Day Retention" },
      { value: "4.8★", label: "App Rating" },
    ],
    deliverables: [
      "Brand Identity",
      "iOS & Android App",
      "Onboarding Flow",
      "Reel Production",
      "Community Strategy",
    ],
  },
  {
    id: 7,
    slug: "events-entertainment",
    category: "Events & Entertainment",
    accent: "#8b5cf6",
    accentLight: "#f5f3ff",
    accentBorder: "#ddd6fe",
    icon: "🎪",
    date: "Jan 30, 2025",
    readTime: "6 min read",
    author: { name: "Vikram Anand", role: "Events & Media Lead", initials: "VA" },
    title: "Velocity Events: Sold Out in 72 Hours. Every Single Time.",
    tagline: "Sold out in 72 hours. Every single time.",
    excerpt:
      "Velocity Events produces large-scale concerts, brand activations, and corporate experiences across South India. They had the talent — they needed the audience. We built the digital machine that fills every venue.",
    image: imgEvents,
    thumbImage: imgEvents,
    tags: ["Event Marketing", "Paid Ads", "Video Editing", "Poster Design"],
    body: [
      "Pre-event hype campaigns were built 4 weeks out — teaser posters, countdown reels, artist announcements — creating a sense of inevitability before tickets even went live. By the time the ticket link dropped, the audience was already primed.",
      "Meta and Google Ads campaigns were geo-targeted within a 50km radius of each event, layered with interest targeting on music genres, lifestyle, and past event attendance. Waste was minimal; reach was surgical.",
      "Cinematic aftermovies were produced for every event and used as evergreen retargeting content to seed demand for upcoming shows. The people who watched a 3-minute film of the last event were 4.2× more likely to buy tickets for the next one.",
      "Repeat ticket purchaser rate jumped from 22% to 67% within 8 months — the highest loyalty metric in the client's 6-year history. The brand became the event in South India that people planned their calendars around.",
    ],
    stats: [
      { value: "72 hrs", label: "To Sold Out" },
      { value: "67%",    label: "Repeat Buyers" },
      { value: "+4×",    label: "Ticket Revenue" },
      { value: "12",     label: "Events in 8 Months" },
    ],
    deliverables: [
      "Event Campaigns",
      "Poster Design",
      "Hype Reels",
      "Meta & Google Ads",
      "Aftermovies",
    ],
  },
];

export default blogPosts;


export const allCategories = ["All", ...blogPosts.map((p) => p.category)];

export const allTags = [
  // Core digital marketing
  "Social Media",
  "Paid Ads",
  "Google Ads",
  "Lead Generation",
  "Lead Gen",
  "SEO",

  // AI & Automation
  "AI Automation",
  "Conversational AI Solutions",
  "CRM",

  // Creative services
  "Video Editing",
  "Poster Design",
  "Content Strategy",
  "Brand Identity",

  // Web & App
  "Web Design",
  "Website",
  "App Design",

  // Conversion & Funnels
  "Funnel Design",
  "Conversion Optimisation",
  "E-commerce",
  "UX Design",

  // Social content
  "Social Strategy",
  "Reels",
  "Event Marketing",

  // Niche
  "Patient Experience",
];