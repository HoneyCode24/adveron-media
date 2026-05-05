import { useRef, useState } from "react";
import useScrollReveal from "../hooks/useScrollReveal";
import "./Contact.css";

const initialFormState = {
  fullName: "",
  email: "",
  phone: "",
  service: "Meta Ads",
  message: "",
};

const contactItems = [
  {
    label: "Email",
    value: "hello@adveronmedia.com",
    icon: "email",
  },
  {
    label: "Phone",
    value: "+91 98XXX XXXXX",
    icon: "phone",
  },
];

const navLinks = ["Services", "Results", "About", "Contact"];

function LogoMark() {
  return (
    <svg viewBox="0 0 48 48" aria-hidden="true" className="footer-logo-mark">
      <path d="M24 4L43 39H35.5L31.7 31.8H16.2L12.5 39H5L24 4Z" />
      <path d="M19.1 25.8H28.9L24 16.3L19.1 25.8Z" />
      <path d="M31.5 39L24 24.8L16.5 39" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="button-icon">
      <path d="M6.6 10.8c1.6 3.1 3.5 5 6.6 6.6l2.2-2.2c.3-.3.8-.4 1.2-.3 1.3.4 2.6.6 4 .6.7 0 1.2.5 1.2 1.2v3.5c0 .7-.5 1.2-1.2 1.2C10.7 21.4 2.6 13.3 2.6 3.4c0-.7.5-1.2 1.2-1.2h3.5c.7 0 1.2.5 1.2 1.2 0 1.4.2 2.7.6 4 .1.4 0 .9-.3 1.2l-2.2 2.2z" />
    </svg>
  );
}

function ChatIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="button-icon whatsapp-icon">
      <path d="M12 3C7.1 3 3.2 6.8 3.2 11.5c0 1.8.6 3.5 1.6 4.9L3.7 21l4.8-1.2c1.1.5 2.3.8 3.6.8 4.9 0 8.8-3.8 8.8-8.5S16.9 3 12 3z" />
      <path d="M8.9 8.5c.2-.5.4-.5.7-.5h.5c.2 0 .4.1.5.4l.8 1.9c.1.3.1.5-.1.7l-.5.6c.7 1.2 1.6 2.1 2.9 2.8l.6-.7c.2-.2.4-.3.7-.2l1.9.9c.3.1.4.3.4.6v.4c0 .3-.1.6-.5.8-.5.3-1.1.5-1.8.5-2.6 0-6.7-3.4-6.7-6.8 0-.6.2-1.1.5-1.4z" />
    </svg>
  );
}

function ContactIcon({ type }) {
  if (type === "location") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="contact-info-icon">
        <path d="M12 21s7-6.7 7-13A7 7 0 0 0 5 8c0 6.3 7 13 7 13z" />
        <circle cx="12" cy="8" r="2.5" />
      </svg>
    );
  }

  if (type === "email") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="contact-info-icon">
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="M4 7l8 6 8-6" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="contact-info-icon">
      <path d="M6.6 10.8c1.6 3.1 3.5 5 6.6 6.6l2.2-2.2c.3-.3.8-.4 1.2-.3 1.3.4 2.6.6 4 .6.7 0 1.2.5 1.2 1.2v3.5c0 .7-.5 1.2-1.2 1.2C10.7 21.4 2.6 13.3 2.6 3.4c0-.7.5-1.2 1.2-1.2h3.5c.7 0 1.2.5 1.2 1.2 0 1.4.2 2.7.6 4 .1.4 0 .9-.3 1.2l-2.2 2.2z" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg viewBox="0 0 48 48" aria-hidden="true" className="success-icon">
      <circle cx="24" cy="24" r="20" />
      <path d="M15 24.5l6 6L34 17" />
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

export default function Contact() {
  const sectionRef = useScrollReveal({
    selector: ".reveal",
    threshold: 0.18,
    rootMargin: "0px 0px -80px 0px",
  });
  const [formData, setFormData] = useState(initialFormState);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((currentData) => ({
      ...currentData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="contact-section" ref={sectionRef} id="contact">
      {/* Block 1 — CTA Banner */}
      <div className="cta-banner">
        <div className="cta-grid-overlay" />

        <div className="cta-content">
          <span className="contact-badge reveal reveal--delay-1">Let's Build Together</span>

          <h2 className="reveal reveal--delay-2">
            Ready to <span>Grow</span> Your Business Online?
          </h2>

          <p className="reveal reveal--delay-3">
            Book a free strategy call. No pressure, no jargon — just clarity on
            what will actually work for your business.
          </p>

          <div className="cta-actions reveal reveal--delay-4">
            <a href="#contact-form" className="cta-button cta-button-primary">
              <PhoneIcon />
              Book a Free Call
            </a>

            <a
              href="https://wa.me/919800000000"
              target="_blank"
              rel="noreferrer"
              className="cta-button cta-button-ghost"
            >
              <ChatIcon />
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>

      {/* Block 2 — Contact Form */}
      <div className="contact-container">
        <div className="contact-form-card reveal reveal--delay-5" id="contact-form">
          {!submitted ? (
            <>
              <div className="form-card-heading">
                <h3>Send Us a Message</h3>
              </div>

              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-field">
                  <label htmlFor="fullName">Full Name</label>
                  <input
                    id="fullName"
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    required
                  />
                </div>

                <div className="form-field">
                  <label htmlFor="email">Business Email</label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@business.com"
                    required
                  />
                </div>

                <div className="form-field">
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    id="phone"
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 XXXXX XXXXX"
                    required
                  />
                </div>

                <div className="form-field">
                  <label htmlFor="service">Service Interested In</label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                  >
                    <option>Meta Ads</option>
                    <option>Website Development</option>
                    <option>Social Media Management</option>
                    <option>Full Package</option>
                    <option>Not Sure Yet</option>
                  </select>
                </div>

                <div className="form-field">
                  <label htmlFor="message">Tell Us About Your Business</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us what you do, your goals, and what you need help with..."
                    required
                  />
                </div>

                <button type="submit" className="form-submit-button">
                  Send Message <span>→</span>
                </button>

                <p className="form-trust-line">
                  🔒 Your information is 100% private. We respond within 24 hours.
                </p>
              </form>
            </>
          ) : (
            <div className="success-state">
              <CheckIcon />
              <h3>Message Sent!</h3>
              <p>We'll be in touch within 24 hours.</p>
            </div>
          )}
        </div>

        {/* Block 3 — Contact Info Strip */}
        <div className="contact-info-strip">
          {contactItems.map((item, index) => (
            <div
              className="contact-info-item reveal"
              key={item.label}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="contact-info-icon-wrap">
                <ContactIcon type={item.icon} />
              </div>

              <div>
                <span>{item.label}</span>
                <p>{item.value}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Block 4 — Footer */}
      {/* <footer className="footer contact-reveal footer-reveal">
        <div className="footer-inner">
          <div className="footer-top">
            <a href="#" className="footer-brand" aria-label="Adveron Media home">
              <LogoMark />
              <span>Adveron Media</span>
            </a>

            <nav className="footer-nav" aria-label="Footer navigation">
              {navLinks.map((link) => (
                <a href={`#${link.toLowerCase()}`} key={link}>
                  {link}
                </a>
              ))}
            </nav>
          </div>

          <div className="footer-divider" />

          <div className="footer-bottom">
            <p>© 2025 Adveron Media. All rights reserved.</p>

            <div className="footer-socials">
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
        </div>
      </footer> */}
    </section>
  );
}