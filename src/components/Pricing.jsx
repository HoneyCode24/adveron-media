import React, { useEffect, useRef, useState } from "react";
import "./Pricing.css";

const pricingData = {
  "meta-ads": {
    label: "AI UGC Ads",
    type: "cards",
    plans: [
      {
        name: "Creative Test Pack",
        dot: "grey",
        price: "$250",
        billing: "one-time",
        tagline: "Validate winning ad angles before scaling",
        popular: false,
        cta: "Start Testing",
        features: [
          { text: "3 conversion-focused AI UGC creatives", included: true },
          { text: "3 different creative angles", included: true },
          { text: "Multiple hook variations", included: true },
          { text: "Versions with & without captions", included: true },
          { text: "Performance-driven scriptwriting", included: true },
          { text: "Competitor & market research", included: true },
          { text: "High-volume monthly production", included: false },
          { text: "Dedicated creative strategy", included: false },
        ],
      },
      {
        name: "Growth Creative System",
        dot: "blue",
        price: "$997",
        billing: "/month",
        tagline: "Consistent creative testing for brands running paid ads",
        popular: true,
        cta: "Choose Growth",
        features: [
          { text: "20 performance-focused AI UGC creatives", included: true },
          { text: "Competitor & market research", included: true },
          { text: "Multiple creative angles", included: true },
          { text: "Versions with & without captions", included: true },
          { text: "Multi-angle performance scripts", included: true },
          { text: "Hook testing variations", included: true },
          { text: "Creative refresh workflow", included: true },
          { text: "Custom workflow integration", included: false },
        ],
      },
      {
        name: "Creative Scale System",
        dot: "amber",
        price: "Custom",
        billing: "pricing",
        tagline: "Ongoing creative infrastructure for scaling brands",
        popular: false,
        cta: "Build Scale Plan",
        features: [
          { text: "Ongoing high-volume creative production", included: true },
          { text: "Continuous creative testing", included: true },
          { text: "Dedicated creative strategy", included: true },
          { text: "Multi-format creative assets", included: true },
          { text: "Creative refresh workflow", included: true },
          { text: "Priority production support", included: true },
          { text: "Flexible scaling capacity", included: true },
          { text: "Custom workflow integration", included: true },
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
        price: "$499",
        billing: "one-time",
        tagline: "For brands that need a premium landing page fast",
        popular: false,
        cta: "Launch My Page",
        features: [
          { text: "1 high-converting landing page", included: true },
          { text: "Mobile-first responsive design", included: true },
          { text: "Premium modern layout", included: true },
          { text: "CTA sections", included: true },
          { text: "Contact / lead form setup", included: true },
          { text: "Basic SEO structure", included: true },
          { text: "Speed optimization", included: true },
          { text: "1 revision round", included: true },
        ],
      },
      {
        name: "Business Website",
        dot: "blue",
        price: "$997",
        billing: "one-time",
        tagline: "A premium business website built for trust and leads",
        popular: true,
        cta: "Build My Website",
        features: [
          { text: "4-page premium website", included: true },
          {
            text: "Homepage, services, about, contact + extra page",
            included: true,
          },
          { text: "Conversion-focused copy structure", included: true },
          { text: "Mobile-first design", included: true },
          { text: "Contact form integration", included: true },
          { text: "Basic SEO setup", included: true },
          { text: "Speed optimization", included: true },
          { text: "2 revision rounds", included: true },
        ],
      },

      {
        name: "E-Commerce / Custom Build",
        dot: "amber",
        price: "Custom",
        billing: "pricing",
        tagline: "For Shopify stores, advanced funnels, and custom systems",
        popular: false,
        cta: "Discuss Custom Build",
        features: [
          { text: "Custom Shopify development", included: true },
          { text: "Advanced integrations", included: true },
          { text: "High-converting product pages", included: true },
          { text: "Custom landing funnels", included: true },
          { text: "Scalable infrastructure", included: true },
          { text: "Tailored development workflow", included: true },
          { text: "Built for paid traffic conversion", included: true },
          { text: "Custom launch support", included: true },
        ],
      },
    ],
  },

  "social-media": {
    label: "Social Growth",
    type: "cards",
    plans: [
      {
        name: "Content Launch System",
        dot: "grey",
        price: "$497",
        billing: "/month",
        tagline:
          "Consistent short-form content for brands starting organic growth",
        popular: false,
        cta: "Start Content",
        features: [
          { text: "12 short-form content pieces/month", included: true },
          { text: "Captions + posting copy", included: true },
          { text: "Basic content calendar", included: true },
          { text: "Platform-optimized formatting", included: true },
          { text: "Basic monthly analytics", included: true },
          { text: "AI UGC content system", included: false },
          { text: "Advanced trend planning", included: false },
        ],
      },
      {
        name: "Organic Growth System",
        dot: "blue",
        price: "$997",
        billing: "/month",
        tagline: "A stronger content engine for visibility, trust, and demand",
        popular: true,
        cta: "Choose Growth",
        features: [
          { text: "20 short-form content pieces/month", included: true },
          { text: "AI UGC content support", included: true },
          { text: "Hooks + scripting direction", included: true },
          { text: "Reels/TikTok optimization", included: true },
          { text: "Trend planning", included: true },
          { text: "Monthly performance review", included: true },
          { text: "Multi-platform content strategy", included: true },
        ],
      },
      {
        name: "Brand Scale System",
        dot: "amber",
        price: "$1,997+",
        billing: "/month",
        tagline: "High-volume content infrastructure for brands ready to scale",
        popular: false,
        cta: "Scale Content",
        features: [
          { text: "Custom high-volume content production", included: true },
          { text: "Advanced organic strategy", included: true },
          { text: "AI UGC systems", included: true },
          { text: "Multi-platform scaling", included: true },
          { text: "Premium editing workflow", included: true },
          { text: "Launch / refresh cycles", included: true },
          { text: "Priority production support", included: true },
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
    separateCost: "Launch-ready",
    savings: "System bundle",
    cta: "Launch My Brand System",
    chips: [
      "20 AI UGC Creatives",
      "Conversion Landing Page",
      "8 Organic Content Pieces",
    ],
    features: [
      "20 performance-focused AI UGC creatives",
      "Premium modern conversion landing page",
      "8 short-form organic content pieces",
      "Competitor & market research",
      "Brand positioning guidance",
      "30 bonus static ad creatives",
      "Strategy setup call",
      "Priority production workflow",
    ],
  },
  growth: {
    label: "Brand Growth Infrastructure",
    price: "$2,997",
    billing: "/month",
    separateCost: "Scaling system",
    savings: "Monthly growth infrastructure",
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
      "50 bonus static ad creatives",
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
      "100+ bonus static ad creatives",
      "Flexible scaling capacity",
    ],
  },
};

const tabs = Object.entries(pricingData).map(([id, item]) => ({
  id,
  label: item.label,
}));

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
    <div className="pricing-full">
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
            <p>What’s Included</p>

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
