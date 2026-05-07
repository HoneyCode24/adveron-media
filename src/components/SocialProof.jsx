import { useEffect, useRef, useState } from "react";
import "./SocialProof.css";

const stats = [
  {
    icon: "demo",
    value: ["Demo-First", " Approach"],
    highlight: 0,
    label: "See your ad before paying anything",
  },
  {
    icon: "ai",
    value: ["AI UGC", " Ad Creatives"],
    highlight: 0,
    label: "Built and optimised for Meta Ads",
  },
  {
    icon: "landing",
    value: ["Landing Page", " Support"],
    highlight: 0,
    label: "Website + full funnel ready",
  },
  {
    icon: "onboarding",
    value: ["48-Hour", " Onboarding"],
    highlight: 0,
    label: "Fast start after approval",
  },
];

const testimonials = [
  {
    quote:
      "Adveron Media's Meta Ads campaign tripled our leads in just 6 weeks. The team is sharp, responsive, and genuinely invested in results.",
    name: "Rohan Mehta",
    title: "Founder, FitCore Studios",
  },
  {
    quote:
      "Our new website got us compliments from every client. More importantly, our bounce rate dropped 40% and inquiries doubled.",
    name: "Priya Nair",
    title: "Director, Nair Legal Associates",
  },
  {
    quote:
      "From zero social presence to 8,000 followers in 3 months. The content quality and strategy are unlike anything we'd seen before.",
    name: "Arjun Sinha",
    title: "CEO, GreenLeaf Organics",
  },
];

const logos = [
  "FitCore",
  "Nair Legal",
  "GreenLeaf",
  "UrbanNest",
  "Zenova",
  "PeakLabs",
  "Craftory",
  "Lumora",
];

const trustBadges = [
  // {
  //   title: "Certified Meta Ads Partner",
  //   desc: "Campaigns built around platform-proven growth systems.",
  // },
  {
    title: "100% Transparent Reporting",
    desc: "Clear performance data, weekly insights, zero guesswork.",
  },
  {
    title: "No Lock-in Contracts",
    desc: "Stay because results make sense, not because paperwork says so.",
  },
];

function StatIcon({ type }) {
  if (type === "demo") return (
    <svg viewBox="0 0 24 24">
      <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z" />
    </svg>
  );
  if (type === "ai") return (
    <svg viewBox="0 0 24 24">
      <rect x="3" y="3" width="18" height="18" rx="4" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  );
  if (type === "landing") return (
    <svg viewBox="0 0 24 24">
      <rect x="2" y="3" width="20" height="14" rx="3" />
      <path d="M8 21h8M12 17v4" />
    </svg>
  );
  return (
    <svg viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 3" />
    </svg>
  );
}

function CountUpStat({ stat, shouldStart }) {
  const [count, setCount] = useState(0);
  const hasAnimated = useRef(false);
  const isNumeric = typeof stat.value === "number";

  useEffect(() => {
    if (!shouldStart || hasAnimated.current || !isNumeric) return;

    hasAnimated.current = true;

    const duration = 1800;
    const startTime = performance.now();
    const finalValue = stat.value;
    const decimals = stat.decimals || 0;

    const animate = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easedProgress = 1 - Math.pow(1 - progress, 3);
      const currentValue = finalValue * easedProgress;

      setCount(Number(currentValue.toFixed(decimals)));

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(finalValue);
      }
    };

    requestAnimationFrame(animate);
  }, [shouldStart, stat, isNumeric]);

  const displayValue = isNumeric
    ? `${stat.prefix || ""}${count.toLocaleString("en-IN")}${stat.suffix || ""}`
    : stat.value;

  return (
    <div className="social-proof-stat reveal-item">
      <h3>{displayValue}</h3>
      <p>{stat.label}</p>
    </div>
  );
}

function StarIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="social-proof-star"
    >
      <path d="M12 2.5l2.92 6.02 6.64.9-4.82 4.66 1.2 6.6L12 17.5l-5.94 3.18 1.2-6.6-4.82-4.66 6.64-.9L12 2.5z" />
    </svg>
  );
}

function TrustIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="trust-badge-icon"
    >
      <path d="M12 2.25l1.85 5.64 5.9-1.14-4.05 4.41 4.05 4.41-5.9-1.14L12 20.25l-1.85-5.82-5.9 1.14 4.05-4.41-4.05-4.41 5.9 1.14L12 2.25z" />
    </svg>
  );
}

export default function SocialProof() {
  const sectionRef = useRef(null);
  const statsRef = useRef(null);
  const [startCount, setStartCount] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    const statsBlock = statsRef.current;

    if (!section || !statsBlock) return;

    const revealElements = section.querySelectorAll(".reveal-item");

    const revealObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      {
        threshold: 0.18,
        rootMargin: "0px 0px -80px 0px",
      }
    );

    revealElements.forEach((element) => {
      revealObserver.observe(element);
    });

    const statsObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          setStartCount(true);
          observer.unobserve(entry.target);
        });
      },
      {
        threshold: 0.35,
      }
    );

    statsObserver.observe(statsBlock);

    return () => {
      revealObserver.disconnect();
      statsObserver.disconnect();
    };
  }, []);

  return (
    <section className="social-proof-section" ref={sectionRef}>
      {/* Block 1 — Stats Bar */}
      <div className="social-proof-stats-bar" ref={statsRef}>
        <div className="social-proof-stats-grid">

          {/* Stat 1 */}
          <div className="social-proof-stat">
            <div className="social-proof-stat__icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z" />
              </svg>
            </div>
            <div className="social-proof-stat__text">
              <h3><em>Demo-First</em> Approach</h3>
              <p>See your ad before paying anything</p>
            </div>
          </div>

          {/* Stat 2 */}
          <div className="social-proof-stat">
            <div className="social-proof-stat__icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="18" height="18" rx="4" />
                <path d="M9 12l2 2 4-4" />
              </svg>
            </div>
            <div className="social-proof-stat__text">
              <h3>AI UGC <em>Ad Creatives</em></h3>
              <p>Built and optimised for Meta Ads</p>
            </div>
          </div>

          {/* Stat 3 */}
          <div className="social-proof-stat">
            <div className="social-proof-stat__icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="3" width="20" height="14" rx="3" />
                <path d="M8 21h8M12 17v4" />
              </svg>
            </div>
            <div className="social-proof-stat__text">
              <h3>Landing Page <em>Support</em></h3>
              <p>Website + full funnel ready</p>
            </div>
          </div>

          {/* Stat 4 */}
          <div className="social-proof-stat">
            <div className="social-proof-stat__icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="9" />
                <path d="M12 7v5l3 3" />
              </svg>
            </div>
            <div className="social-proof-stat__text">
              <h3><em>48-Hour</em> Onboarding</h3>
              <p>Fast start after approval</p>
            </div>
          </div>

        </div>
      </div>

      {/* Block 2 — Testimonials */}
      {/* <div className="social-proof-container">
        <div className="social-proof-header reveal-item">
          <span className="social-proof-badge">What Our Clients Say</span>
          <h2>Real Businesses. Real Results.</h2>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <article
              className="testimonial-card reveal-item"
              key={testimonial.name}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="testimonial-stars">
                {[...Array(5)].map((_, starIndex) => (
                  <StarIcon key={starIndex} />
                ))}
              </div>

              <p className="testimonial-quote">“{testimonial.quote}”</p>

              <div className="testimonial-client">
                <h4>{testimonial.name}</h4>
                <span>{testimonial.title}</span>
              </div>
            </article>
          ))}
        </div>
      </div> */}

      {/* Block 3 — Logo Marquee */}
      {/* <div className="logo-marquee reveal-item">
        <div className="logo-track">
          {[...logos, ...logos].map((logo, index) => (
            <span className="logo-item" key={`${logo}-${index}`}>
              {logo}
            </span>
          ))}
        </div>
      </div> */}

      {/* Block 4 — Trust Badges */}
      {/* <div className="social-proof-container">
        <div className="trust-badges-grid">
          {trustBadges.map((badge, index) => (
            <article
              className="trust-badge-card reveal-item"
              key={badge.title}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="trust-badge-icon-wrap">
                <TrustIcon />
              </div>

              <div>
                <h4>{badge.title}</h4>
                <p>{badge.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div> */}
    </section>
  );
}