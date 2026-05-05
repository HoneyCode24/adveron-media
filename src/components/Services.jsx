import { useEffect, useRef } from "react";
import "./Services.css";

const services = [
  {
    title: "Meta Ads",
    description:
      "High-converting Facebook & Instagram ad campaigns that drive targeted leads and maximize ROAS.",
    features: [
      "Campaign strategy",
      "Audience targeting",
      "Ad creatives & copy",
      "ROAS optimization",
    ],
    icon: (
      <svg viewBox="0 0 64 64" aria-hidden="true">
        <path d="M14 38C14 25.85 20.8 16 29.2 16C36.4 16 39.3 24.3 42 32C44.1 38.1 45.8 44 50 44C53.3 44 56 39.2 56 33.2C56 27.3 53.5 22 49.4 22C45.6 22 42.8 26.4 40.4 31.4L37.1 38.3C34.3 44 31.1 48 25.6 48C18.7 48 14 43.5 14 38Z" />
        <path d="M8 32C8 23.2 13.7 16 21 16C28.5 16 32.6 24.5 36 32C39.4 39.5 42.3 48 49 48C53.5 48 57.4 45.1 60 40.8" />
      </svg>
    ),
  },
  {
    title: "Website Development",
    description:
      "Professional, fast, conversion-optimized websites and landing pages that build credibility and attract customers.",
    features: [
      "Landing page design",
      "Responsive development",
      "Speed optimization",
      "Conversion-focused layout",
    ],
    icon: (
      <svg viewBox="0 0 64 64" aria-hidden="true">
        <rect x="10" y="14" width="44" height="34" rx="6" />
        <path d="M10 24H54" />
        <circle cx="18" cy="19" r="1.8" />
        <circle cx="24" cy="19" r="1.8" />
        <circle cx="30" cy="19" r="1.8" />
        <path d="M22 36L29 29L36 36L43 29" />
        <path d="M22 42H42" />
      </svg>
    ),
  },
  {
    title: "Social Media Management",
    description:
      "Complete social media presence management — content creation, posting, engagement, and growth strategy.",
    features: [
      "Content creation",
      "Posting calendar",
      "Community engagement",
      "Growth strategy",
    ],
    icon: (
      <svg viewBox="0 0 64 64" aria-hidden="true">
        <path d="M18 20H46C50.4 20 54 23.6 54 28V38C54 42.4 50.4 46 46 46H31L20 54V46H18C13.6 46 10 42.4 10 38V28C10 23.6 13.6 20 18 20Z" />
        <circle cx="24" cy="33" r="2.5" />
        <circle cx="32" cy="33" r="2.5" />
        <circle cx="40" cy="33" r="2.5" />
        <path d="M21 13L25 18" />
        <path d="M43 13L39 18" />
        <path d="M32 10V16" />
      </svg>
    ),
  },
];

export default function Services() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const cards = sectionRef.current?.querySelectorAll(".service-card");

    if (!cards?.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: "0px 0px -80px 0px",
      }
    );

    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="services-section" ref={sectionRef}>
      <div className="services-bg" aria-hidden="true" />

      <div className="services-container">
        <div className="services-header">
          <span className="services-badge">
            <span className="services__badge-dot" />
            What We Do
            </span>

          <h2 className="services-title">
            Services Built to <span>Scale</span> Your Business
          </h2>

          <p className="services-subtitle">
            From ads to websites to social growth, Adveron Media helps brands
            build trust, attract better customers, and turn attention into
            revenue.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <article
              className="service-card"
              key={service.title}
              style={{ "--delay": `${index * 140}ms` }}
            >
              <div className="service-icon">{service.icon}</div>

              <h3>{service.title}</h3>

              <p className="service-description">{service.description}</p>

              <ul className="service-features">
                {service.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>

              <a href="#contact" className="service-link">
                Learn More <span>→</span>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}