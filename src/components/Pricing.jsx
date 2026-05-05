import React, { useEffect, useRef, useState } from "react";
import "./Pricing.css";

const pricingData = {
  "meta-ads": {
    label: "Meta Ads",
    type: "cards",
    plans: [
      {
        name: "Basic",
        dot: "grey",
        price: "₹15,000",
        billing: "/month",
        tagline: "For businesses just starting with paid ads",
        popular: false,
        cta: "Get Started",
        features: [
          { text: "1 active campaign", included: true },
          { text: "Audience research & setup", included: true },
          { text: "4 ad creatives/month", included: true },
          { text: "Monthly performance report", included: true },
          { text: "A/B testing", included: false },
          { text: "Dedicated account manager", included: false },
        ],
      },
      {
        name: "Standard",
        dot: "blue",
        price: "₹28,000",
        billing: "/month",
        tagline: "For growing businesses ready to scale",
        popular: true,
        cta: "Choose Standard",
        features: [
          { text: "3 active campaigns", included: true },
          { text: "Full audience & funnel strategy", included: true },
          { text: "10 ad creatives/month", included: true },
          { text: "Weekly performance reports", included: true },
          { text: "A/B testing & optimization", included: true },
          { text: "Dedicated account manager", included: false },
        ],
      },
      {
        name: "Advanced",
        dot: "amber",
        price: "₹50,000",
        billing: "/month",
        tagline: "For brands serious about dominating their market",
        popular: false,
        cta: "Scale With Us",
        features: [
          { text: "Unlimited campaigns", included: true },
          { text: "Full funnel strategy + retargeting", included: true },
          { text: "20+ ad creatives/month", included: true },
          { text: "Daily monitoring & optimization", included: true },
          { text: "A/B testing & optimization", included: true },
          { text: "Dedicated account manager", included: true },
        ],
      },
    ],
  },

  "web-dev": {
    label: "Website Development",
    type: "cards",
    plans: [
      {
        name: "Basic",
        dot: "grey",
        price: "₹25,000",
        billing: "one-time",
        tagline: "Clean, professional online presence",
        popular: false,
        cta: "Build My Website",
        features: [
          { text: "Up to 5 pages", included: true },
          { text: "Mobile responsive design", included: true },
          { text: "Basic SEO setup", included: true },
          { text: "Contact form integration", included: true },
          { text: "Custom animations", included: false },
          { text: "CMS / blog integration", included: false },
        ],
      },
      {
        name: "Standard",
        dot: "blue",
        price: "₹45,000",
        billing: "one-time",
        tagline: "A website that actually converts visitors",
        popular: true,
        cta: "Choose Standard",
        features: [
          { text: "Up to 10 pages", included: true },
          { text: "Mobile-first premium design", included: true },
          { text: "Full on-page SEO", included: true },
          { text: "Custom animations & interactions", included: true },
          { text: "CMS / blog integration", included: true },
          { text: "E-commerce functionality", included: false },
        ],
      },
      {
        name: "Advanced",
        dot: "amber",
        price: "₹80,000",
        billing: "one-time",
        tagline: "Full-scale web presence built to lead",
        popular: false,
        cta: "Start Advanced Build",
        features: [
          { text: "Unlimited pages", included: true },
          { text: "Custom UI/UX design system", included: true },
          { text: "Advanced SEO + speed optimization", included: true },
          { text: "E-commerce / booking integration", included: true },
          { text: "CMS + admin dashboard", included: true },
          { text: "3 months post-launch support", included: true },
        ],
      },
    ],
  },

  "social-media": {
    label: "Social Media",
    type: "cards",
    plans: [
      {
        name: "Basic",
        dot: "grey",
        price: "₹12,000",
        billing: "/month",
        tagline: "Consistent presence on social media",
        popular: false,
        cta: "Get Started",
        features: [
          { text: "2 platforms managed", included: true },
          { text: "12 posts/month", included: true },
          { text: "Basic graphic design", included: true },
          { text: "Monthly content calendar", included: true },
          { text: "Reels / video content", included: false },
          { text: "Community management", included: false },
        ],
      },
      {
        name: "Standard",
        dot: "blue",
        price: "₹22,000",
        billing: "/month",
        tagline: "Active growth across your key platforms",
        popular: true,
        cta: "Choose Standard",
        features: [
          { text: "3 platforms managed", included: true },
          { text: "20 posts + 4 reels/month", included: true },
          { text: "Premium branded graphics", included: true },
          { text: "Content calendar + strategy", included: true },
          { text: "Community management & replies", included: true },
          { text: "Influencer outreach", included: false },
        ],
      },
      {
        name: "Advanced",
        dot: "amber",
        price: "₹38,000",
        billing: "/month",
        tagline: "Full-service social media domination",
        popular: false,
        cta: "Dominate Socials",
        features: [
          { text: "All platforms managed", included: true },
          { text: "30 posts + 8 reels/month", included: true },
          { text: "Full content production team", included: true },
          { text: "Growth strategy & analytics", included: true },
          { text: "Community management", included: true },
          { text: "Influencer outreach & collabs", included: true },
        ],
      },
    ],
  },

  "full-package": {
    label: "Full Package",
    type: "bundle",
  },
};

const bundleData = {
  basic: {
    label: "Basic Bundle",
    price: "₹45,000",
    billing: "/month",
    separateCost: "₹52,000",
    savings: "₹7,000",
    chips: ["Meta Ads Basic", "Website Basic", "Social Basic"],
    features: [
      "1 active Meta Ads campaign",
      "Up to 5-page business website",
      "2 social platforms managed",
      "4 ad creatives/month",
      "12 social posts/month",
      "Monthly reporting across services",
    ],
  },
  standard: {
    label: "Standard Bundle",
    price: "₹80,000",
    billing: "/month",
    separateCost: "₹95,000",
    savings: "₹15,000",
    chips: ["Meta Ads Standard", "Website Standard", "Social Standard"],
    features: [
      "3 active Meta Ads campaigns",
      "Up to 10-page conversion-focused website",
      "3 social platforms managed",
      "10 ad creatives/month",
      "20 posts + 4 reels/month",
      "Weekly performance reports",
      "A/B testing and optimization",
    ],
  },
  premium: {
    label: "Premium Bundle",
    price: "₹1,20,000",
    billing: "/month",
    separateCost: "₹1,68,000",
    savings: "₹48,000",
    chips: ["Meta Ads Advanced", "Website Advanced", "Social Advanced"],
    features: [
      "Unlimited Meta Ads campaigns",
      "Unlimited-page advanced website",
      "All platforms managed",
      "20+ ad creatives/month",
      "30 posts + 8 reels/month",
      "Daily monitoring and optimization",
      "Dedicated account manager",
      "Advanced SEO + speed optimization",
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

function PricingCard({ plan, index }) {
  return (
    <article
      className={`pricing-card ${plan.popular ? "pricing-card--popular" : ""}`}
      style={{ "--card-delay": `${index * 100}ms` }}
    >
      {plan.popular && <div className="pricing-popular-badge">Most Popular</div>}

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
      >
        {plan.cta}
      </button>
    </article>
  );
}

function FullPackage() {
  const [selectedBundle, setSelectedBundle] = useState("standard");
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
            <h3>Complete Growth System</h3>
          </div>

          <span className="pricing-full__save-badge">Save up to 30%</span>
        </div>

        <div className="pricing-bundle-toggle" role="tablist" aria-label="Bundle options">
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

        <button className="pricing-full__cta">Get the Full Package →</button>
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
      { threshold: 0.2 }
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

  return (
    <section className="pricing" ref={sectionRef} id="pricing">
      <div className="pricing__bg-glow" />
      <div className="pricing__dot-grid" />

      <div className="pricing__container">
        <div className="pricing__header">
          <div className="pricing__badge reveal-item">Transparent Pricing</div>

          <h2 className="reveal-item">
            Simple Pricing. <span>Serious</span> Results.
          </h2>

          <p className="reveal-item">
            No hidden fees, no surprise invoices. Pick the plan that fits your
            stage — upgrade anytime.
          </p>
        </div>

        <div className="pricing-tabs-wrap reveal-item">
          <div className="pricing-tabs" role="tablist" aria-label="Pricing services">
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
                <PricingCard key={`${activeTab}-${plan.name}`} plan={plan} index={index} />
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
              <strong>No Lock-in Contracts</strong>
              <p>cancel anytime</p>
            </div>
          </div>

          <div className="pricing-trust-chip">
            <span>💬</span>
            <div>
              <strong>Free Strategy Call Included</strong>
              <p>with every plan</p>
            </div>
          </div>

          <div className="pricing-trust-chip">
            <span>⚡</span>
            <div>
              <strong>Onboarding Within 48 Hours</strong>
              <p>after sign-up</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}