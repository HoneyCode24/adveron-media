import { useEffect, useRef, useState } from "react";
import "./SocialProof.css";

const stats = [
  {
    value: "Demo-First Approach",
    // suffix: "+",
    label: "See Your Ad Before Paying",
  },
  {
    value: "AI UGC Ad Creatives",
    // prefix: "₹",
    // suffix: "Cr+",
    label: "Built For Meta Ads",
  },
  {
    value: "Landing Page Support",
    // suffix: "x",
    label: "Website + Funnel Ready",
    // decimals: 1,
  },
  {
    value: "48-Hour Onboarding",
    // suffix: "%",
    label: "Fast Start After Approval",
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

function CountUpStat({ stat, shouldStart }) {
  const [count, setCount] = useState(0);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!shouldStart || hasAnimated.current) return;

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
  }, [shouldStart, stat]);

  return (
    <div className="social-proof-stat reveal-item">
      <h3>
        {stat.prefix || ""}
        {count.toLocaleString("en-IN")}
        {stat.suffix || ""}
      </h3>
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
          {stats.map((stat, index) => (
            <CountUpStat
              key={stat.label}
              stat={stat}
              shouldStart={startCount}
              style={{ transitionDelay: `${index * 150}ms` }}
            />
          ))}
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
      <div className="social-proof-container">
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
      </div>
    </section>
  );
}