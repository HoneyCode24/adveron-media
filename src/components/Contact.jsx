import { useState, useEffect } from "react";
import useScrollReveal from "../hooks/useScrollReveal";
import "./Contact.css";

const initialFormState = {
  fullName: "",
  email: "",
  phone: "",
  service: "Meta Ads",
  message: "",
  packageName: "",
};

const contactItems = [
  {
    label: "Email",
    value: "adveronmedia@gmail.com",
    icon: "email",
    href: "mailto:adveronmedia@gmail.com",
  },
  // {
  //   label: "Phone",
  //   value: "+91 6306294210",
  //   icon: "phone",
  //   href: "tel:+916306294210",
  // },
];

const services = [
  "Meta Ads",
  "Website Development",
  "Social Media Management",
  "Full Package",
  "Not Sure Yet",
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
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="button-icon whatsapp-icon"
    >
      <path d="M12 3C7.1 3 3.2 6.8 3.2 11.5c0 1.8.6 3.5 1.6 4.9L3.7 21l4.8-1.2c1.1.5 2.3.8 3.6.8 4.9 0 8.8-3.8 8.8-8.5S16.9 3 12 3z" />
      <path d="M8.9 8.5c.2-.5.4-.5.7-.5h.5c.2 0 .4.1.5.4l.8 1.9c.1.3.1.5-.1.7l-.5.6c.7 1.2 1.6 2.1 2.9 2.8l.6-.7c.2-.2.4-.3.7-.2l1.9.9c.3.1.4.3.4.6v.4c0 .3-.1.6-.5.8-.5.3-1.1.5-1.8.5-2.6 0-6.7-3.4-6.7-6.8 0-.6.2-1.1.5-1.4z" />
    </svg>
  );
}

function ContactIcon({ type }) {
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
    <svg
      viewBox="0 0 72 72"
      aria-hidden="true"
      className="success-icon"
      fill="none"
    >
      <circle cx="36" cy="36" r="35" />
      <path
        d="M20 36L30 46L52 24"
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
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
  const [focused, setFocused] = useState(null);
  const [activeService, setActiveService] = useState("Meta Ads");
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setErrorMessage("");

    const data = new FormData();
    data.append("service", formData.service || activeService);
    data.append("fullName", formData.fullName);
    data.append("email", formData.email);
    data.append("phone", formData.phone);
    data.append("message", formData.message);
    data.append("packageName", formData.packageName);
    try {
      const response = await fetch("https://formspree.io/f/xgodnbnn", {
        method: "POST",
        body: data,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData(initialFormState);
        setActiveService("Meta Ads");
      } else {
        setErrorMessage("Something went wrong. Please try again.");
      }
    } catch (error) {
      setErrorMessage("Network error. Please check your connection.");
    }
  };
  useEffect(() => {
    const handleServiceSelect = (event) => {
      const { service, packageName } = event.detail;

      setActiveService(service);
      setFormData((prev) => ({
        ...prev,
        service,
        packageName,
        message: packageName
          ? `I'm interested in the ${packageName}.`
          : prev.message,
      }));
    };

    window.addEventListener("selectContactService", handleServiceSelect);

    return () => {
      window.removeEventListener("selectContactService", handleServiceSelect);
    };
  }, []);

  return (
    <section className="contact-section" ref={sectionRef} id="contact">
      {/* ── Block 1 — CTA Banner ── */}
      <div className="cta-banner">
        <div className="cta-grid-overlay" />
        <div className="cta-content">
          <span className="contact-badge reveal reveal--delay-1">
            Let's Build Together
          </span>
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
              href="https://wa.me/916306294210?text=Hi%20Adveron%20Media,%20I%20want%20to%20grow%20my%20business."
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

      {/* ── Block 2 — Contact Form ── */}
      <div className="contact-container" id="form">
        <div
          className="contact-form-card reveal reveal--delay-5"
          id="contact-form"
        >
          {!submitted ? (
            <>
              {/* Card Header */}
              <div className="form-card-header">
                <div className="form-card-header__left">
                  <span className="form-card-eyebrow">Get In Touch</span>
                  <h3 className="form-card-title">Send Us a Message</h3>
                </div>
                <div className="form-card-header__badge">
                  <span className="form-response-dot" />
                  Replies in 24h
                </div>
              </div>

              {/* Service Pill Selector */}
              <div className="service-selector">
                <p className="service-selector__label">I'm interested in</p>
                <div className="service-selector__pills">
                  {services.map((s) => (
                    <button
                      key={s}
                      type="button"
                      className={`service-pill ${
                        formData.service === s ? "service-pill--active" : ""
                      }`}
                      onClick={() => {
                        setActiveService(s);
                        setFormData((prev) => ({ ...prev, service: s }));
                      }}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>

              {/* Divider */}
              <div className="form-divider" />
              {errorMessage && (
                <div className="form-error-message">
                  <svg viewBox="0 0 24 24" fill="none">
                    <circle
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                    <path
                      d="M12 7v6"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                    <circle cx="12" cy="17" r="1" fill="currentColor" />
                  </svg>

                  <span>{errorMessage}</span>
                </div>
              )}

              <form className="contact-form" onSubmit={handleSubmit}>
                {/* Row: Name + Email */}
                <div className="form-row">
                  <div
                    className={`form-field ${focused === "fullName" ? "form-field--focused" : ""} ${formData.fullName ? "form-field--filled" : ""}`}
                  >
                    <label htmlFor="fullName">Full Name</label>
                    <div className="input-wrap">
                      <svg
                        className="input-icon"
                        viewBox="0 0 20 20"
                        fill="none"
                      >
                        <circle
                          cx="10"
                          cy="7"
                          r="3"
                          stroke="currentColor"
                          strokeWidth="1.5"
                        />
                        <path
                          d="M3 17c0-3.3 3.1-6 7-6s7 2.7 7 6"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                        />
                      </svg>
                      <input
                        id="fullName"
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        onFocus={() => setFocused("fullName")}
                        onBlur={() => setFocused(null)}
                        placeholder="Your full name"
                        required
                      />
                    </div>
                  </div>

                  <div
                    className={`form-field ${focused === "email" ? "form-field--focused" : ""} ${formData.email ? "form-field--filled" : ""}`}
                  >
                    <label htmlFor="email">Business Email</label>
                    <div className="input-wrap">
                      <svg
                        className="input-icon"
                        viewBox="0 0 20 20"
                        fill="none"
                      >
                        <rect
                          x="2"
                          y="4"
                          width="16"
                          height="12"
                          rx="2"
                          stroke="currentColor"
                          strokeWidth="1.5"
                        />
                        <path
                          d="M2 7l8 5 8-5"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                        />
                      </svg>
                      <input
                        id="email"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        onFocus={() => setFocused("email")}
                        onBlur={() => setFocused(null)}
                        placeholder="you@business.com"
                        required
                      />
                    </div>
                  </div>
                </div>

                {/* Phone */}
                <div
                  className={`form-field ${focused === "phone" ? "form-field--focused" : ""} ${formData.phone ? "form-field--filled" : ""}`}
                >
                  <label htmlFor="phone">
                    Phone Number
                    <span className="field-hint">
                      Include your country code
                    </span>
                  </label>

                  <div className="input-wrap">
                    <svg className="input-icon" viewBox="0 0 20 20" fill="none">
                      <path
                        d="M5.3 9.1a13.6 13.6 0 005.6 5.6l1.9-1.9a.9.9 0 01.9-.2 10 10 0 003.1 1.1.9.9 0 01.7.9V17a.9.9 0 01-.9.9A15.3 15.3 0 012.1 3.9.9.9 0 013 3h2.5a.9.9 0 01.9.7 10 10 0 001 3.1.9.9 0 01-.1 1L5.3 9.1z"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <input
                      id="phone"
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      onFocus={() => setFocused("phone")}
                      onBlur={() => setFocused(null)}
                      placeholder="+1 555 123 4567"
                      required
                    />
                  </div>
                </div>

                {/* Message */}
                <div
                  className={`form-field ${focused === "message" ? "form-field--focused" : ""} ${formData.message ? "form-field--filled" : ""}`}
                >
                  <label htmlFor="message">
                    Tell Us About Your Business
                    <span className="char-hint">
                      {formData.message.length > 0
                        ? `${formData.message.length} chars`
                        : "optional detail"}
                    </span>
                  </label>
                  <div className="input-wrap input-wrap--textarea">
                    <textarea
                      id="message"
                      name="message"
                      rows="4"
                      value={formData.message}
                      onChange={handleChange}
                      onFocus={() => setFocused("message")}
                      onBlur={() => setFocused(null)}
                      placeholder="Tell us what you do, your goals, and what you need help with..."
                    />
                  </div>
                </div>

                {/* Submit */}
                <button type="submit" className="form-submit-button">
                  <span className="form-submit-button__text">Send Message</span>
                  <span className="form-submit-button__icon">
                    <svg viewBox="0 0 20 20" fill="none" width="18" height="18">
                      <path
                        d="M3 10h14M13 6l4 4-4 4"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </button>

                <p className="form-trust-line">
                  <svg
                    viewBox="0 0 16 16"
                    fill="none"
                    width="13"
                    height="13"
                    style={{
                      display: "inline",
                      marginRight: "5px",
                      verticalAlign: "middle",
                    }}
                  >
                    <rect
                      x="3"
                      y="7"
                      width="10"
                      height="8"
                      rx="2"
                      stroke="#8fa3c0"
                      strokeWidth="1.3"
                    />
                    <path
                      d="M5.5 7V5a2.5 2.5 0 015 0v2"
                      stroke="#8fa3c0"
                      strokeWidth="1.3"
                      strokeLinecap="round"
                    />
                  </svg>
                  Your information is 100% private. We respond within 24 hours.
                </p>
              </form>
            </>
          ) : (
            <div className="success-state">
              <div className="success-ring">
                <CheckIcon />
              </div>
              <h3>Message Sent!</h3>
              <p>Our team will contact you shortly.</p>
              <button
                className="success-back-btn"
                onClick={() => setSubmitted(false)}
              >
                Send Another Message
              </button>
            </div>
          )}
        </div>

        {/* ── Block 3 — Contact Info Strip ── */}
        <div className="contact-info-strip">
          {contactItems.map((item, index) => (
            <a
              href={item.href}
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
            </a>
          ))}
        </div>
      </div>

      {/* ── Block 4 — Footer (uncomment when ready) ── */}
      {/* <footer className="footer contact-reveal footer-reveal"> ... </footer> */}
    </section>
  );
}
