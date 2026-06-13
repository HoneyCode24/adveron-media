import React, { useEffect, useRef, useState } from "react";
import "./Pricing.css";

const pricingData = {
  "meta-ads": {
    label: "Video Ads",
    type: "cards",
    plans: [
      {
        name: "Creative Test Pack",
        dot: "grey",
        price: "$297",
        billing: "one-time",
        tagline: "See what works for your brand before committing",
        popular: false,
        cta: "Start Testing",
        features: [
          { text: "6 short-form video ads (15–30 sec)", included: true },
          { text: "6 different hook styles & ad concepts", included: true },
          { text: "Versions with & without captions", included: true },
          { text: "Performance-driven scriptwriting", included: true },
          { text: "Competitor & market research", included: true },
          { text: "Revisions", included: false },
          { text: "Monthly creative retainer", included: false },
        ],
      },
      {
        name: "Growth Creative System",
        dot: "blue",
        price: "$697",
        billing: "/month",
        tagline: "Consistent creative that scales your brand every month",
        popular: true,
        cta: "Choose Growth",
        features: [
          { text: "15 video ads per month", included: true },
          { text: "Competitor & market research", included: true },
          { text: "8-10 different hook angles tested", included: true },
          { text: "Versions with & without captions", included: true },
          { text: "Conversion-focused ad scripts", included: true },
          { text: "Monthly strategy call (30 min)", included: true },
          { text: "Fresh ad batch every month", included: true },
          { text: "2 rounds of revisions", included: true },
        ],
      },
      {
        name: "Creative Scale System",
        dot: "amber",
        price: "$1,297",
        billing: "/month",
        tagline: "Your dedicated creative partner for aggressive scaling",
        popular: false,
        cta: "Start Scaling",
        features: [
          { text: "30 video ads per month", included: true },
          { text: "Full competitor analysis monthly", included: true },
          { text: "Multi-format delivery (Reels, TikTok, YT Shorts)", included: true },
          { text: "Priority 48-hour turnaround", included: true },
          { text: "Weekly strategy calls", included: true },
          { text: "A/B test reporting — what's working & why", included: true },
          { text: "Unlimited revisions", included: true },
          { text: "Custom workflow integration (Slack/Notion)", included: true },
        ],
      },
    ],
  },

 "web-dev": {
  label: "Website Development",
  type: "cards",
  plans: [
    {
      name: "Launch Page",
      dot: "grey",
      price: "$697",
      billing: "one-time",
      tagline: "A high-converting landing page that turns visitors into leads — live in 7 days",
      popular: false,
      cta: "Build My Landing Page",
      features: [
        { text: "1 premium conversion-focused landing page", included: true },
        { text: "Persuasive copywriting & headline strategy", included: true },
        { text: "Mobile-first, pixel-perfect design", included: true },
        { text: "Lead capture form + CTA sections", included: true },
        { text: "Google Analytics + Meta Pixel setup", included: true },
        { text: "Core SEO structure (titles, meta, schema)", included: true },
        { text: "Page speed optimized (90+ score target)", included: true },
        { text: "2 revision rounds", included: true },
        { text: "Delivered in 7 days", included: true },
        { text: "Multi-page site", included: false },
      ],
    },
    {
      name: "Business Growth Site",
      dot: "blue",
      price: "$1,497",
      billing: "one-time",
      tagline: "A full premium website built to establish authority and generate leads on autopilot",
      popular: true,
      cta: "Build My Website",
      features: [
        { text: "5-page premium website (Home, Services, About, Contact + 1 custom)", included: true },
        { text: "Full conversion copywriting across all pages", included: true },
        { text: "Brand-aligned premium design system", included: true },
        { text: "Lead forms + booking/calendar integration", included: true },
        { text: "Google Analytics + Meta Pixel + GTM setup", included: true },
        { text: "Full on-page SEO setup", included: true },
        { text: "Page speed & Core Web Vitals optimized", included: true },
        { text: "3 revision rounds", included: true },
        { text: "Delivered in 14 days", included: true },
        { text: "30-day post-launch support", included: true },
      ],
    },
    {
      name: "E-Commerce & Custom Builds",
      dot: "amber",
      price: "$2,997+",
      billing: "starting at",
      tagline: "For Shopify stores, advanced funnels, and custom systems built to scale revenue",
      popular: false,
      cta: "Discuss My Project",
      features: [
        { text: "Custom Shopify or headless build", included: true },
        { text: "High-converting product & collection pages", included: true },
        { text: "Custom sales funnel development", included: true },
        { text: "Payment gateway & app integrations", included: true },
        { text: "Abandoned cart & upsell flows", included: true },
        { text: "Advanced SEO & structured data", included: true },
        { text: "Performance & conversion rate optimization", included: true },
        { text: "Dedicated project manager", included: true },
        { text: "60-day post-launch support", included: true },
        { text: "Custom workflow & handoff documentation", included: true },
      ],
    },
  ],
},

"social-media": {
  label: "Social Growth",
  type: "cards",
  plans: [
    {
      name: "Starter Content Plan",
      dot: "grey",
      price: "$497",
      billing: "/month",
      tagline: "Done-for-you short-form content to grow your presence every month",
      popular: false,
      cta: "Start Growing",
      features: [
        { text: "12 short-form videos/month (Reels & TikTok, 15–45 sec)", included: true },
        { text: "Hook-driven scripting for each video", included: true },
        { text: "Captions + hashtag strategy per post", included: true },
        { text: "Content calendar delivered by Day 3 of each month", included: true },
        { text: "Optimized for Instagram & TikTok algorithms", included: true },
        { text: "Monthly performance snapshot report", included: true },
        { text: "2 revision rounds per batch", included: true },
        { text: "Strategy & trend planning", included: false },
      ],
    },
    {
      name: "Organic Growth System",
      dot: "blue",
      price: "$997",
      billing: "/month",
      tagline: "A full content engine built for visibility, trust, and consistent inbound demand",
      popular: true,
      cta: "Choose Growth",
      features: [
        { text: "20 short-form videos/month (Reels, TikTok, YouTube Shorts)", included: true },
        { text: "Competitor & trend research every month", included: true },
        { text: "Hook writing + full scripting for every video", included: true },
        { text: "AI UGC-style content integration", included: true },
        { text: "Multi-platform formatting & optimization", included: true },
        { text: "Monthly strategy call (30 min)", included: true },
        { text: "Detailed monthly performance report with recommendations", included: true },
        { text: "3 revision rounds per batch", included: true },
      ],
    },
    {
      name: "Brand Scale System",
      dot: "amber",
      price: "$1,997",
      billing: "/month",
      tagline: "High-volume content infrastructure for brands scaling aggressively",
      popular: false,
      cta: "Scale My Brand",
      features: [
        { text: "40 short-form videos/month across all platforms", included: true },
        { text: "Full content strategy + monthly creative direction", included: true },
        { text: "AI UGC system — volume creative at scale", included: true },
        { text: "Weekly content drops (consistent pipeline)", included: true },
        { text: "A/B hook testing — what's working & why", included: true },
        { text: "Weekly strategy call + dedicated point of contact", included: true },
        { text: "Advanced performance reporting + content audit", included: true },
        { text: "Priority production & 48-hour revision turnaround", included: true },
      ],
    },
  ],
},

  "full-package": {
    label: "Brand Launch System",
    type: "bundle",
  },
};

const bundleData = {
  launch: {
    label: "Brand Launch System",
    price: "$1,497",
    billing: "one-time",
    separateCost: "$2,000+ separately",
    savings: "Save $500+",
    cta: "Launch My Brand System",
    chips: [
      "20 AI UGC Creatives",
      "Conversion Landing Page",
      "8 Organic Content Pieces",
    ],
    features: [
      "20 performance-focused AI UGC video ads",
      "Premium conversion landing page (worth $697)",
      "8 short-form organic content pieces",
      "Competitor & market research",
      "Brand positioning guidance",
      "Strategy setup call",
      "Priority production workflow",
    ],
  },
  growth: {
    label: "Brand Growth Infrastructure",
    price: "$2,497",
    billing: "/month",
    separateCost: "$2,800+/mo separately",
    savings: "Save $300+/mo",
    cta: "Scale My Brand Infrastructure",
    chips: [
      "30–50 AI UGC / Month",
      "20 Organic Content Pieces",
      "Monthly Strategy Call",
    ],
    features: [
      "30–50 performance-focused AI UGC creatives / month",
      "Continuous creative testing and refresh workflow",
      "Monthly strategic planning",
      "Audience targeting insights",
      "Offer positioning refinement",
      "20 short-form organic content pieces / month",
      "Conversion website support",
    ],
  },
  scale: {
    label: "Creative Scale Partner",
    price: "Custom",
    billing: "pricing",
    separateCost: "Enterprise scale",
    savings: "Flexible capacity",
    cta: "Build My Creative Scale System",
    chips: [
      "50–200+ AI UGC / Month",
      "40+ Organic Pieces",
      "Advanced Growth Strategy",
    ],
    features: [
      "50–200+ performance-focused AI UGC creatives / month",
      "High-speed campaign support",
      "Dedicated creative growth strategy",
      "Creative performance analysis",
      "40+ short-form organic content pieces / month",
      "Advanced competitor & market intelligence",
      "Flexible scaling capacity",
    ],
  },
};


const tabs = Object.entries(pricingData).map(([id, item]) => ({
  id,
  label: item.label,
}));

// Show custom inquiry strip only for Video Ads tab
const CUSTOM_INQUIRY_TABS = ["meta-ads"];

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M20.285 6.709a1 1 0 0 1 .006 1.414l-9.25 9.333a1 1 0 0 1-1.423.002l-4.25-4.333a1 1 0 1 1 1.428-1.4l3.54 3.61 8.537-8.62a1 1 0 0 1 1.412-.006Z" />
    </svg>
  );
}

function CrossIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M6.225 4.811a1 1 0 0 0-1.414 1.414L10.586 12l-5.775 5.775a1 1 0 1 0 1.414 1.414L12 13.414l5.775 5.775a1 1 0 0 0 1.414-1.414L13.414 12l5.775-5.775a1 1 0 0 0-1.414-1.414L12 10.586 6.225 4.811Z" />
    </svg>
  );
}

function PricingCard({ plan, index, onSelect }) {
  return (
    <article
      className={`pricing-card ${plan.popular ? "pricing-card--popular" : ""}`}
      style={{ "--card-delay": `${index * 100}ms` }}
    >
      {plan.popular && (
        <div className="pricing-popular-badge">Most Popular</div>
      )}

      <div className="pricing-card__tier">
        <span className={`pricing-card__dot pricing-card__dot--${plan.dot}`} />
        <span>{plan.name}</span>
      </div>

      <div className="pricing-card__price-row">
        <h3>{plan.price}</h3>
        <span>{plan.billing}</span>
      </div>

      <p className="pricing-card__tagline">{plan.tagline}</p>

      <div className="pricing-card__divider" />

      <ul className="pricing-card__features">
        {plan.features.map((feature) => (
          <li
            key={feature.text}
            className={!feature.included ? "pricing-feature--muted" : ""}
          >
            <span className="pricing-feature__icon">
              {feature.included ? <CheckIcon /> : <CrossIcon />}
            </span>
            <span>{feature.text}</span>
          </li>
        ))}
      </ul>

      <button
        className={`pricing-card__button ${
          plan.popular ? "pricing-card__button--filled" : ""
        }`}
        onClick={onSelect}
      >
        {plan.cta}
      </button>
    </article>
  );
}

function CustomInquiryStrip({ onSelect }) {
  return (
    <div className="pricing-custom-strip">
      <div className="pricing-custom-strip__left">
        <span className="pricing-custom-strip__label">Need more than 30 ads/month?</span>
        <p className="pricing-custom-strip__desc">
          For high-volume brands, agencies, or custom requirements — we'll build a plan around your exact needs.
        </p>
      </div>
      <button
        className="pricing-custom-strip__cta"
        onClick={onSelect}
      >
        Book a Strategy Call →
      </button>
    </div>
  );
}

function FullPackage() {
  const [selectedBundle, setSelectedBundle] = useState("launch");
  const [bundleEntering, setBundleEntering] = useState(true);

  const currentBundle = bundleData[selectedBundle];

  const handleBundleChange = (bundleId) => {
    if (bundleId === selectedBundle) return;

    setBundleEntering(false);
    setSelectedBundle(bundleId);

    window.setTimeout(() => {
      setBundleEntering(true);
    }, 10);
  };

  return (
    <div className="pricing-full" id="pricing">
      <article className="pricing-full__hero">
        <div className="pricing-full__top">
          <div>
            <p className="pricing-full__eyebrow">Complete Growth System</p>
            <h3>Brand Launch & Scale Systems</h3>
          </div>

          <span className="pricing-full__save-badge">
            Built for scaling brands
          </span>
        </div>

        <div
          className="pricing-bundle-toggle"
          role="tablist"
          aria-label="Bundle options"
        >
          {Object.entries(bundleData).map(([id, bundle]) => (
            <button
              key={id}
              type="button"
              className={selectedBundle === id ? "active" : ""}
              onClick={() => handleBundleChange(id)}
            >
              {bundle.label}
            </button>
          ))}
        </div>

        <div
          className={`pricing-bundle-content ${
            bundleEntering ? "bundle--entering" : ""
          }`}
        >
          <div className="pricing-full__price-row">
            <h4>{currentBundle.price}</h4>
            <span>{currentBundle.billing}</span>
          </div>

          <div className="pricing-full__included">
            <p>What's Included</p>

            <div className="pricing-full__chips">
              {currentBundle.chips.map((chip) => (
                <span key={chip}>{chip}</span>
              ))}
            </div>
          </div>

          <ul className="pricing-full__features">
            {currentBundle.features.map((feature) => (
              <li key={feature}>
                <span>
                  <CheckIcon />
                </span>
                {feature}
              </li>
            ))}
          </ul>
        </div>

        <button className="pricing-full__cta">{currentBundle.cta} →</button>
      </article>

      <div className="pricing-breakdown">
        {Object.entries(bundleData).map(([id, bundle]) => (
          <div
            className={`pricing-breakdown__strip ${
              selectedBundle === id ? "active" : ""
            }`}
            key={id}
          >
            <div>
              <span>{bundle.label}</span>
              <strong>{bundle.separateCost}</strong>
              <p>Separate service cost</p>
            </div>

            <div>
              <span>Bundle Price</span>
              <strong>{bundle.price}</strong>
              <p className="pricing-breakdown__save">
                You Save {bundle.savings}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Pricing() {
  const sectionRef = useRef(null);
  const [activeTab, setActiveTab] = useState("meta-ads");
  const [cardsEntering, setCardsEntering] = useState(true);

  const activePricing = pricingData[activeTab];

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          section.classList.add("pricing--visible");
          observer.unobserve(section);
        }
      },
      { threshold: 0.2 },
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const handleTabChange = (tabId) => {
    if (tabId === activeTab) return;

    setCardsEntering(false);
    setActiveTab(tabId);

    window.setTimeout(() => {
      setCardsEntering(true);
    }, 10);
  };

  useEffect(() => {
    const handleExternalTabChange = (event) => {
      handleTabChange(event.detail);
    };

    window.addEventListener("changePricingTab", handleExternalTabChange);

    return () => {
      window.removeEventListener("changePricingTab", handleExternalTabChange);
    };
  }, [activeTab]);

  const serviceMap = {
    "meta-ads": "Meta Ads",
    "web-dev": "Website Development",
    "social-media": "Social Media Management",
    "full-package": "Full Package",
  };

  const handlePricingCTA = (service, packageName) => {
    window.dispatchEvent(
      new CustomEvent("selectContactService", {
        detail: { service, packageName },
      }),
    );

    document.getElementById("contact-form")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <section className="pricing" ref={sectionRef} id="pricing">
      <div className="pricing__bg-glow" />
      <div className="pricing__dot-grid" />

      <div className="pricing__container">
        <div className="pricing__header">
          <div className="pricing__badge reveal-item">
            Global Growth Pricing
          </div>

          <h2 className="reveal-item">
            Global Pricing. <span>Built</span> For Growth.
          </h2>

          <p className="reveal-item">
            Clear USD pricing for brands that need AI UGC creatives, conversion
            websites, and social content systems.
          </p>
        </div>

        <div className="pricing-tabs-wrap reveal-item">
          <div
            className="pricing-tabs"
            role="tablist"
            aria-label="Pricing services"
          >
            {tabs.map((tab) => (
              <button
                key={tab.id}
                type="button"
                role="tab"
                aria-selected={activeTab === tab.id}
                className={activeTab === tab.id ? "active" : ""}
                onClick={() => handleTabChange(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <div
          className={`pricing-content ${
            cardsEntering ? "cards--entering" : ""
          }`}
        >
          {activePricing.type === "cards" ? (
            <>
              <div className="pricing-cards">
                {activePricing.plans.map((plan, index) => (
                  <PricingCard
                    key={`${activeTab}-${plan.name}`}
                    plan={plan}
                    index={index}
                    onSelect={() =>
                      handlePricingCTA(serviceMap[activeTab], plan.name)
                    }
                  />
                ))}
              </div>

              {/* Custom inquiry strip — only on Video Ads tab */}
              {CUSTOM_INQUIRY_TABS.includes(activeTab) && (
                <CustomInquiryStrip
                  onSelect={() =>
                    handlePricingCTA(serviceMap[activeTab], "Custom Plan")
                  }
                />
              )}
            </>
          ) : (
            <FullPackage />
          )}
        </div>

        <div className="pricing-trust-row">
          <div className="pricing-trust-chip">
            <span>🔒</span>
            <div>
              <strong>Simple Starting Point</strong>
              <p>Start with one-time packs or scale monthly</p>
            </div>
          </div>

          <div className="pricing-trust-chip">
            <span>💬</span>
            <div>
              <strong>Strategy Call Included</strong>
              <p>We understand your offer before production</p>
            </div>
          </div>

          <div className="pricing-trust-chip">
            <span>⚡</span>
            <div>
              <strong>Fast Onboarding</strong>
              <p>Quick setup after project confirmation</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}