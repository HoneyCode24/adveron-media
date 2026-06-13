import { useState, useRef, useEffect } from "react";
import "./FAQ.css";

const FAQ_DATA = [
  {
    id: 1,
    question: "What is AI UGC?",
    answer:
      "AI UGC (AI-generated User Generated Content) uses artificial intelligence to produce video ads that look and feel like authentic user testimonials, reviews, or lifestyle content — without requiring real actors, filming sessions, or expensive production. The result is ad-native, conversion-focused video at a fraction of the cost and time of traditional production.",
  },
  {
    id: 2,
    question: "How does the process work?",
    answer:
      "You start with a short brief — your brand, offer, audience, and any references. Our team writes scripts, produces the AI talent video, adds captions and brand elements, and delivers finished ad files ready for upload to Meta or TikTok Ads Manager. The whole process typically takes 48–72 hours from brief approval.",
  },
  {
    id: 3,
    question: "How fast is delivery?",
    answer:
      "Our standard turnaround is 48–72 hours from the time your brief is confirmed. Rush delivery (24 hours) is available for select packages. Ongoing retainer clients receive priority scheduling with same-day scripting on request.",
  },
  {
    id: 4,
    question: "Do I need to provide footage?",
    answer:
      "No. AI UGC ads are produced entirely by our team — no filming, no actors, no studio required on your end. That said, if you have existing product photos, packaging shots, or brand assets you'd like incorporated, we can include those to add further brand authenticity.",
  },
  {
    id: 5,
    question: "Can you match our brand style?",
    answer:
      "Yes. Our creative brief process captures your brand's tone, visual aesthetic, color palette, target persona, and competitive positioning. We select AI talent and write scripts specifically to match your brand voice — whether that's clinical and authoritative, warm and aspirational, or bold and direct.",
  },
  {
    id: 6,
    question: "What platforms are the ads optimized for?",
    answer:
      "We primarily produce for Meta (Facebook & Instagram Feed, Stories, Reels) and TikTok. All ads are delivered in 9:16 vertical format, with platform-compliant safe zones, captions, and hook-first structure built for in-feed autoplay performance.",
  },
];

/* ── Single accordion item ───────────────────────────────────────── */
function FaqItem({ item, isOpen, onToggle, index }) {
  const answerRef = useRef(null);

  return (
    <div
      className={`faq__item${isOpen ? " faq__item--open" : ""}`}
      style={{ "--i": index }}
    >
      <button
        className="faq__question"
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={`faq-answer-${item.id}`}
      >
        {/* Number badge */}
        <span className="faq__num">
          {String(index + 1).padStart(2, "0")}
        </span>

        <span className="faq__q-text">{item.question}</span>

        {/* Animated chevron */}
        <span className="faq__chevron" aria-hidden="true">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
          >
            <path d="M6 9l6 6 6-6" />
          </svg>
        </span>
      </button>

      {/* Smooth height animation via ref */}
      <div
        id={`faq-answer-${item.id}`}
        className="faq__answer"
        ref={answerRef}
        style={{
          maxHeight: isOpen
            ? answerRef.current
              ? answerRef.current.scrollHeight + "px"
              : "600px"
            : "0px",
        }}
        role="region"
      >
        <p className="faq__answer-inner">{item.answer}</p>
      </div>
    </div>
  );
}

/* ── Root export ─────────────────────────────────────────────────── */
export default function FAQ() {
  const [openId, setOpenId] = useState(null);

  const toggle = (id) => setOpenId((prev) => (prev === id ? null : id));

  return (
    <section className="faq" id="faq">
      {/* Ambient glow blobs */}
      <div className="faq__glow faq__glow--left"  aria-hidden="true" />
      <div className="faq__glow faq__glow--right" aria-hidden="true" />

      <div className="faq__container">
        <div className="faq__layout">

          {/* ── Left sticky column ── */}
          <div className="faq__left">

            {/* Eyebrow */}
            <div className="faq__eyebrow">
              <span className="faq__eyebrow-dot" />
              FAQ
            </div>

            <h2 className="faq__heading">
              Common<br />
              <span className="faq__heading-accent">Questions</span>
            </h2>

            <p className="faq__subtext">
              Everything you need to know before getting started with Adveron Media.
            </p>

            {/* Quick-stat pills */}
            <div className="faq__stats">
              <div className="faq__stat">
                <span className="faq__stat-value">48h</span>
                <span className="faq__stat-label">Avg. Delivery</span>
              </div>
              <div className="faq__stat-divider" />
              <div className="faq__stat">
                <span className="faq__stat-value">100%</span>
                <span className="faq__stat-label">Ad-Ready</span>
              </div>
            </div>

            <a href="#contact" className="faq__cta">
              Ask Us Directly
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>

          {/* ── Right accordion column ── */}
          <div className="faq__list" role="list">
            {FAQ_DATA.map((item, index) => (
              <FaqItem
                key={item.id}
                item={item}
                index={index}
                isOpen={openId === item.id}
                onToggle={() => toggle(item.id)}
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}