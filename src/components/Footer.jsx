import { useEffect, useRef } from "react";
import "./Footer.css";

const servicesLinks = [
  { label: "Meta Ads", tab: "meta-ads" },
  { label: "Website Development", tab: "web-dev" },
  { label: "Social Media Management", tab: "social-media" },
  { label: "Full Growth Package", tab: "full-package" },
];
const companyLinks = [
  { label: "About Us", href: "#about" },
  { label: "Contact", href: "#contact" },
  { label: "Pricing", href: "#pricing" },
  { label: "Process", href: "#services" },
  { label: "Privacy Policy", href: "/privacy-policy" },
];

const bottomLinks = ["Privacy Policy", "Terms of Service", "Sitemap"];

function AMLogo({ className = "" }) {
  return (
    <svg viewBox="0 0 48 48" aria-hidden="true" className={className}>
      <path d="M24 4L43 39H35.5L31.7 31.8H16.2L12.5 39H5L24 4Z" />
      <path d="M19.1 25.8H28.9L24 16.3L19.1 25.8Z" />
      <path d="M31.5 39L24 24.8L16.5 39" />
    </svg>
  );
}

function SocialIcon({ type }) {
  if (type === "instagram") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect x="4" y="4" width="16" height="16" rx="5" />
        <circle cx="12" cy="12" r="3.5" />
        <circle cx="17" cy="7" r="0.8" />
      </svg>
    );
  }

  if (type === "facebook") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M14 8h3V4h-3c-3 0-5 2-5 5v3H6v4h3v5h4v-5h3.2l.8-4h-4V9c0-.6.4-1 1-1z" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="4" y="9" width="4" height="11" />
      <path d="M6 4.5a2 2 0 1 1 0 4 2 2 0 0 1 0-4z" />
      <path d="M11 9h4v1.6c.6-1 1.8-1.9 3.6-1.9 2.8 0 4.4 1.8 4.4 5.1V20h-4v-5.6c0-1.4-.6-2.3-1.9-2.3s-2.1.9-2.1 2.3V20h-4V9z" />
    </svg>
  );
}

function ContactIcon({ type }) {
  // if (type === "location") {
  //   return (
  //     <svg viewBox="0 0 24 24" aria-hidden="true" className="footer-contact-icon">
  //       <path d="M12 21s7-6.7 7-13A7 7 0 0 0 5 8c0 6.3 7 13 7 13z" />
  //       <circle cx="12" cy="8" r="2.5" />
  //     </svg>
  //   );
  // }

  if (type === "email") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="footer-contact-icon">
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="M4 7l8 6 8-6" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="footer-contact-icon">
      <path d="M6.6 10.8c1.6 3.1 3.5 5 6.6 6.6l2.2-2.2c.3-.3.8-.4 1.2-.3 1.3.4 2.6.6 4 .6.7 0 1.2.5 1.2 1.2v3.5c0 .7-.5 1.2-1.2 1.2C10.7 21.4 2.6 13.3 2.6 3.4c0-.7.5-1.2 1.2-1.2h3.5c.7 0 1.2.5 1.2 1.2 0 1.4.2 2.7.6 4 .1.4 0 .9-.3 1.2l-2.2 2.2z" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="footer-whatsapp-icon">
      <path d="M12 3C7.1 3 3.2 6.8 3.2 11.5c0 1.8.6 3.5 1.6 4.9L3.7 21l4.8-1.2c1.1.5 2.3.8 3.6.8 4.9 0 8.8-3.8 8.8-8.5S16.9 3 12 3z" />
      <path d="M8.9 8.5c.2-.5.4-.5.7-.5h.5c.2 0 .4.1.5.4l.8 1.9c.1.3.1.5-.1.7l-.5.6c.7 1.2 1.6 2.1 2.9 2.8l.6-.7c.2-.2.4-.3.7-.2l1.9.9c.3.1.4.3.4.6v.4c0 .3-.1.6-.5.8-.5.3-1.1.5-1.8.5-2.6 0-6.7-3.4-6.7-6.8 0-.6.2-1.1.5-1.4z" />
    </svg>
  );
}

export default function Footer() {
  const footerRef = useRef(null);

  useEffect(() => {
    const footer = footerRef.current;

    if (!footer) return;

    const revealElements = footer.querySelectorAll(".footer-reveal");

    const revealObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      {
        threshold: 0.14,
        rootMargin: "0px 0px -70px 0px",
      }
    );

    revealElements.forEach((element) => {
      revealObserver.observe(element);
    });

    return () => {
      revealObserver.disconnect();
    };
  }, []);

  const goToPricingTab = (tabId) => {
    sessionStorage.setItem("pricingTab", tabId);

    document.getElementById("pricing")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    window.dispatchEvent(
      new CustomEvent("changePricingTab", { detail: tabId })
    );
  };

  return (
    <footer className="site-footer" ref={footerRef}>
      {/* Row 1 — Pre-Footer CTA Band */}
      <div className="footer-cta-band footer-reveal footer-reveal-up">
        <div className="footer-cta-inner">
          <h2>Still thinking? Let's make it simple.</h2>
          <p>One free call. Zero obligations. Real strategy.</p>

          <a href="#form" className="footer-cta-button">
            Book Your Free Call <span>→</span>
          </a>
        </div>
      </div>

      {/* Row 2 — Main Footer Body */}
      <div className="footer-main">
        <div className="footer-main-inner">
          <div
            className="footer-column footer-brand-column footer-reveal footer-column-reveal"
            style={{ transitionDelay: "0ms" }}
          >
            <a href="#" className="footer-brand" aria-label="Adveron Media home">
              <AMLogo className="footer-brand-mark" />
              <span>
                Adveron <strong>Media</strong>
              </span>
            </a>

            <p className="footer-brand-description">
              We help businesses grow online through strategic Meta Ads,
              professional web development, and result-driven social media
              management.
            </p>

            <div className="footer-social-row">
              <a href="#" aria-label="Instagram">
                <SocialIcon type="instagram" />
              </a>

              <a href="#" aria-label="Facebook">
                <SocialIcon type="facebook" />
              </a>

              <a href="#" aria-label="LinkedIn">
                <SocialIcon type="linkedin" />
              </a>
            </div>


          </div>

          <div
            className="footer-column footer-reveal footer-column-reveal"
            style={{ transitionDelay: "100ms" }}
          >
            <h3>Services</h3>
            <span className="footer-heading-line" />

            <ul className="footer-link-list">
              {servicesLinks.map((link) => (
                <li key={link.label}>
                  <button
                    className="footer-service-link"
                    onClick={() => goToPricingTab(link.tab)}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div
            className="footer-column footer-reveal footer-column-reveal"
            style={{ transitionDelay: "200ms" }}
          >
            <h3>Company</h3>
            <span className="footer-heading-line" />

            <ul className="footer-link-list">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>


          <div
            className="footer-column footer-contact-column footer-reveal footer-column-reveal"
            style={{ transitionDelay: "300ms" }}
          >
            <h3>Get In Touch</h3>
            <span className="footer-heading-line" />

            <div className="footer-contact-list">
              {/* <div className="footer-contact-item">
                <ContactIcon type="location" />
                <div>
                  <span>Location</span>
                  <p>Gorakhpur, Uttar Pradesh</p>
                </div>
              </div> */}

              <div className="footer-contact-item">
                <ContactIcon type="email" />
                <div>
                  <span>Email</span>
                  <a href="mailto:adveronmedia@gmail.com">
                    adveronmedia@gmail.com
                  </a>
                </div>
              </div>

              <div className="footer-contact-item">
                <ContactIcon type="phone" />
                <div>
                  <span>Phone</span>
                  <a href="tel:+916306294210">
                    +91 6306294210
                  </a>
                </div>
              </div>
            </div>

            <a
              href="https://wa.me/916306294210?text=Hi%20Adveron%20Media,%20I%20want%20to%20know%20more%20about%20your%20services."
              target="_blank"
              rel="noreferrer"
              className="footer-whatsapp-chip"
            >
              🟢 Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* Row 3 — Divider with Decorative Element */}
      <div className="footer-seal-row footer-reveal footer-fade-reveal">
        <div className="footer-seal-line" />

        <div className="footer-seal">
          <AMLogo className="footer-seal-mark" />
          <span>Adveron Media</span>
        </div>
      </div>

      {/* Row 4 — Bottom Bar */}
      <div className="footer-bottom footer-reveal footer-fade-reveal">
        <div className="footer-bottom-inner">
          <p>© 2026 Adveron Media. All rights reserved.</p>

          <div className="footer-bottom-links">
            {bottomLinks.map((link, index) => (
              <span key={link}>
                <a href="#">{link}</a>
                {index < bottomLinks.length - 1 && <em>·</em>}
              </span>
            ))}
          </div>

          <p>
            Crafted with <strong>♥</strong> by Honey
          </p>
        </div>
      </div>
    </footer>
  );
}