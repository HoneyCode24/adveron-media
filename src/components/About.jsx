import { useRef } from "react";
import useScrollReveal from "../hooks/useScrollReveal";
import "./About.css";

const reasons = [
  {
    title: "Results Before Relationships",
    description:
      "We measure success in your revenue, not vanity metrics. Every decision is backed by data.",
    icon: "target",
  },
  {
    title: "Full Transparency",
    description:
      "You get access to live dashboards, weekly reports, and honest conversations — no smoke, no mirrors.",
    icon: "eye",
  },
  {
    title: "End-to-End Execution",
    description:
      "Strategy, creative, execution, and reporting — all under one roof. No briefing five agencies.",
    icon: "gears",
  },
  {
    title: "Built For Business To Increase Growth",
    description:
      "We understand local buyer psychology, regional platforms, and price-sensitive funnels that actually convert.",
    icon: "pin",
  },
];

function ReasonIcon({ type }) {
  if (type === "target") {
    return (
      <svg viewBox="0 0 48 48" aria-hidden="true" className="reason-icon">
        <circle cx="24" cy="24" r="17" />
        <circle cx="24" cy="24" r="10" />
        <circle cx="24" cy="24" r="3" />
        <path d="M35 13l5-5" />
        <path d="M34 8h6v6" />
      </svg>
    );
  }

  if (type === "eye") {
    return (
      <svg viewBox="0 0 48 48" aria-hidden="true" className="reason-icon">
        <path d="M5 24s7-12 19-12 19 12 19 12-7 12-19 12S5 24 5 24z" />
        <circle cx="24" cy="24" r="6" />
        <path d="M24 18v-4" />
        <path d="M24 34v-4" />
      </svg>
    );
  }

  if (type === "gears") {
    return (
      <svg viewBox="0 0 48 48" aria-hidden="true" className="reason-icon">
        <circle cx="18" cy="19" r="6" />
        <path d="M18 7v4" />
        <path d="M18 27v4" />
        <path d="M6 19h4" />
        <path d="M26 19h4" />
        <path d="M9.5 10.5l2.8 2.8" />
        <path d="M23.7 24.7l2.8 2.8" />
        <path d="M26.5 10.5l-2.8 2.8" />
        <path d="M12.3 24.7l-2.8 2.8" />

        <circle cx="32" cy="31" r="5" />
        <path d="M32 21v3" />
        <path d="M32 38v3" />
        <path d="M22 31h3" />
        <path d="M39 31h3" />
        <path d="M25 24l2.2 2.2" />
        <path d="M36.8 35.8L39 38" />
        <path d="M39 24l-2.2 2.2" />
        <path d="M27.2 35.8L25 38" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 48 48" aria-hidden="true" className="reason-icon">
      <path d="M24 43s14-13.5 14-26a14 14 0 0 0-28 0c0 12.5 14 26 14 26z" />
      <circle cx="24" cy="17" r="5" />
      <path d="M17 31h14" />
      <path d="M20 36h8" />
    </svg>
  );
}

function CampaignBars() {
  return (
    <svg viewBox="0 0 260 120" aria-hidden="true" className="campaign-chart">
      <line x1="18" y1="102" x2="242" y2="102" />
      <rect x="34" y="66" width="22" height="36" rx="6" />
      <rect x="72" y="48" width="22" height="54" rx="6" />
      <rect x="110" y="58" width="22" height="44" rx="6" />
      <rect x="148" y="34" width="22" height="68" rx="6" />
      <rect x="186" y="22" width="22" height="80" rx="6" />
      <rect x="224" y="42" width="22" height="60" rx="6" />
    </svg>
  );
}

function Sparkline() {
  return (
    <svg viewBox="0 0 260 90" aria-hidden="true" className="growth-sparkline">
      <path d="M12 68 C42 58, 48 72, 78 54 S128 36, 158 42 S202 28, 248 14" />
      <circle cx="248" cy="14" r="4" />
    </svg>
  );
}

export default function About() {
  const sectionRef = useScrollReveal({
    selector: ".reveal",
    threshold: 0.18,
    rootMargin: "0px 0px -80px 0px",
  });

  return (
    <section className="about-section" ref={sectionRef}>
      <div className="about-container">
        {/* Block 1 — About Adveron Media */}
        <div className="about-split">
          <div className="about-content reveal reveal--left">
            <span className="about-badge">Who We Are</span>

            <h2>
              We're Not an Agency. We're Your{" "}
              <span>Growth</span> Partner.
            </h2>

            <div className="about-copy">
              <p>
                Adveron Media was built with one mission: to help Indian
                businesses look credible, compete online, and turn attention
                into measurable growth.
              </p>

              <p>
                We combine data-driven strategy, sharp creative execution, and
                full transparency. No fluff, no inflated promises — just clear
                systems built to move your business forward.
              </p>
            </div>

            <div className="about-micro-stats">
              <div className="about-chip">
                <strong>3+ Years</strong>
                <span>of experience</span>
              </div>

              <div className="about-chip">
                <strong>8+ Industries</strong>
                <span>served</span>
              </div>
            </div>

            <a href="#contact" className="about-link">
              Book a Free Strategy Call<span>→</span>
            </a>
          </div>

          <div className="about-visual reveal reveal--right">
  <div className="about-glow" />

  {/* BACK CARD: How We Work */}
  <article className="visual-card visual-card-back">
    <div className="visual-card-top">
      <div>
        <span>How We Work</span>
        <h4>Built on Clarity, Not Hype</h4>
      </div>
      <span className="growth-badge badge-blue">100% Transparent</span>
    </div>

    <ul className="process-list">
      <li>
        <span className="check-dot" />
        <span><strong>Strategy first</strong> — every decision backed by audience data</span>
      </li>
      <li>
        <span className="check-dot" />
        <span><strong>Creatives that convert</strong> — not just ones that look good</span>
      </li>
      <li>
        <span className="check-dot" />
        <span><strong>Weekly reports</strong> — you always know where your money goes</span>
      </li>
      <li>
        <span className="check-dot" />
        <span><strong>No lock-in</strong> — we earn your business every month</span>
      </li>
    </ul>
  </article>

  {/* FRONT CARD: Growth */}
  <article className="visual-card visual-card-front">
    <div className="visual-card-label">Built for Indian Businesses</div>
    <h3>Real Growth.<br />No Fluff.</h3>
    <p className="card-tagline">
      We tie our work to outcomes — leads, sales, and visibility — not vanity metrics.
    </p>
    <div className="pill-row">
      {["Meta Ads", "Google Ads", "Content", "SEO"].map((s) => (
        <span key={s} className="service-pill">{s}</span>
      ))}
    </div>
    <div className="card-divider" />
    <p className="sparkline-label">Typical client journey →</p>
    <Sparkline />
  </article>
</div>
        </div>

        {/* Block 2 — Why Us */}
        <div className="why-block">
          <div className="why-header reveal">
            <span className="about-badge">Why Adveron Media</span>

            <h2>
              The Difference Is in the <span>Details</span>
            </h2>

            <p>
              Every strategy, creative, funnel, and report is built with the
              kind of precision that compounds into real business growth.
            </p>
          </div>

          <div className="why-grid">
            {reasons.map((reason, index) => (
              <article
                className="why-card reveal"
                key={reason.title}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="why-icon-wrap">
                  <ReasonIcon type={reason.icon} />
                </div>

                <h3>{reason.title}</h3>
                <p>{reason.description}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}