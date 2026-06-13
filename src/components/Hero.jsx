import React, { useState } from "react";
import "./Hero.css";
import herovideo from "..//assets/Mobile Upload (56) (1).mp4";
import logo from "../assets/logo.png"
/* ── Inline SVG icons ── */
const IconChart = () => (
  <svg viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M1.5 9L4.5 5L6.5 7.5L8.5 4.5L11.5 9"
      stroke="var(--clr-blue-lt)"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
const IconClock = () => (
  <svg viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle
      cx="6.5"
      cy="6.5"
      r="4.5"
      stroke="var(--clr-blue-lt)"
      strokeWidth="1.4"
    />
    <path
      d="M6.5 4V6.5L8 8"
      stroke="var(--clr-blue-lt)"
      strokeWidth="1.4"
      strokeLinecap="round"
    />
  </svg>
);
const IconCheck = () => (
  <svg viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect
      x="2"
      y="2"
      width="9"
      height="9"
      rx="1.5"
      stroke="var(--clr-blue-lt)"
      strokeWidth="1.4"
    />
    <path
      d="M4.5 6.5L5.8 7.8L8.5 5"
      stroke="var(--clr-blue-lt)"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const sparkBars = [
  { cls: "", h: "36%" },
  { cls: "", h: "48%" },
  { cls: "hi", h: "62%" },
  { cls: "hi", h: "70%" },
  { cls: "hi", h: "56%" },
  { cls: "active", h: "84%" },
  { cls: "active", h: "100%" },
];

export default function Hero() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* ── Google Fonts ── */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link
        href="https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;1,9..40,300&family=JetBrains+Mono:wght@400;500;600&display=swap"
        rel="stylesheet"
      />

      <div className="adv-root">
        <div className="adv-wrapper">
          {/* ══════════════ NAV ══════════════ */}
          <nav className="adv-nav">
            <div
              className={`adv-nav-inner${menuOpen ? " open" : ""}`}
              id="advNavInner"
            >
              {/* Logo */}
              <a href="#" className="adv-logo">
                <img src={logo} alt="" className="adv-logo-img"/>
                <span className="adv-logo-text">
                  Adveron <span className="adv-logo-accent">Media</span>
                </span>
              </a>

              {/* Nav links */}
              <ul className="adv-nav-links">
                <li>
                  <a href="#services">Services</a>
                </li>
                <li>
                  <a href="#featured">Featured Work</a>
                </li>
                <li>
                  <a href="#pricing">Pricing</a>
                </li>
                <li>
                  <a href="#about">About</a>
                </li>
              </ul>

              {/* CTA buttons */}
              <div className="adv-nav-ctas">
                <button
                  className="adv-btn-ghost"
                  onClick={() =>
                    document.getElementById("featured")?.scrollIntoView({
                      behavior: "smooth",
                    })
                  }
                >
                  See our work
                </button>

                <button
                  className="adv-btn-primary"
                  onClick={() =>
                    document.getElementById("contact")?.scrollIntoView({
                      behavior: "smooth",
                      block: "start",
                    })
                  }
                >
                  Book strategy call
                </button>
              </div>

              {/* Hamburger */}
              <button
                className="adv-hamburger"
                aria-label="Open menu"
                onClick={() => setMenuOpen(!menuOpen)}
              >
                <span />
                <span />
                <span />
              </button>
            </div>
          </nav>

          {/* ══════════════ HERO ══════════════ */}
          <section className="adv-hero">
            {/* LEFT */}
            <div className="adv-hero-left">
              {/* Eyebrow */}
              <div className="adv-eyebrow">
                <div className="adv-eyebrow-badge">
                  <span className="adv-status-live">
                    <span className="adv-live-dot" />
                    <span className="adv-live-label">Active</span>
                  </span>
                  <span className="adv-eyebrow-text">
                    Meta Ads · AI UGC · Web &amp; Growth
                  </span>
                </div>
              </div>

              {/* Headline */}
              <h1 className="adv-hero-headline">
                Your brand bleeds
                <br />
                revenue without
                <br />
                <span className="adv-accent">systems built to scale.</span>
              </h1>

              <p className="adv-hero-kicker">
                Performance Creative · Meta Algorithm Optimized · Full-Stack
                Growth
              </p>

              <p className="adv-hero-sub">
                Adveron builds{" "}
                <strong>
                  performance-first ad creatives &amp; growth systems
                </strong>{" "}
                for brands running paid social. We engineer Meta-tested hooks,
                AI UGC, and conversion-ready web assets — everything you need to{" "}
                <strong>scale without guessing</strong>.
              </p>

              {/* Stat cards */}
              <div className="adv-stat-row">
                <div className="adv-stat-card">
                  <span className="adv-stat-chip">Creative Pack</span>
                  <div className="adv-stat-value blue">3+</div>
                  <div className="adv-stat-label">
                    ad creatives
                    <br />
                    per sprint
                  </div>
                </div>
                <div className="adv-stat-card">
                  <span className="adv-stat-chip">Turnaround</span>
                  <div className="adv-stat-value green">48h</div>
                  <div className="adv-stat-label">
                    fast enough
                    <br />
                    to test weekly
                  </div>
                </div>
                <div className="adv-stat-card">
                  <span className="adv-stat-chip">Entry Point</span>
                  <div className="adv-stat-value white">Free</div>
                  <div className="adv-stat-label">
                    2 demo ads
                    <br />
                    before you commit
                  </div>
                </div>
              </div>

              {/* Metric list */}
              <ul className="adv-metric-list">
                <li className="adv-metric-item">
                  <span className="adv-metric-icon">
                    <IconChart />
                  </span>
                  Hook-first angles engineered for Meta's 3-second scroll window
                  <span className="adv-metric-tag">Proven</span>
                </li>
                <li className="adv-metric-item">
                  <span className="adv-metric-icon">
                    <IconClock />
                  </span>
                  AI UGC creators — authentic style, zero generic agency feel
                  <span className="adv-metric-tag">Fast</span>
                </li>
                <li className="adv-metric-item">
                  <span className="adv-metric-icon">
                    <IconCheck />
                  </span>
                  9:16 &amp; 1:1 — spec-perfect for Meta &amp; TikTok,
                  launch-ready
                  <span className="adv-metric-tag">Live-Ready</span>
                </li>
              </ul>

              {/* CTA */}
              <div className="adv-cta-block">
  <div className="adv-cta-buttons">
    <a
      href="#"
      className="adv-cta-primary"
      onClick={(e) => {
        e.preventDefault();
        document.getElementById("contact-form")?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }}
    >
      Get 2 free demo ads
      <span className="adv-cta-badge">No commitment</span>
    </a>

    <a
      href="#"
      className="adv-cta-secondary"
      onClick={(e) => {
        e.preventDefault();
        document.getElementById("contact")?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }}
    >
      Book a strategy call →
    </a>
  </div>

  <div className="adv-trust-strip">
    <span className="adv-trust-item">No retainer</span>
    <span className="adv-trust-sep">·</span>
    <span className="adv-trust-item">
      7-day revision guarantee
    </span>
    <span className="adv-trust-sep">·</span>
    <span className="adv-trust-item">Results-first agency</span>
  </div>
</div>
            </div>

            {/* RIGHT */}
            <div className="adv-hero-right">
              {/* Phone mockup */}
              <div className="adv-phone-wrap">
                <div className="adv-phone-frame">
                  <div className="adv-phone-notch" />
                  <div className="adv-phone-screen">
                    {/* Video Background */}
                    <video
                      className="adv-phone-video"
                      autoPlay
                      muted
                      loop
                      playsInline
                      preload="metadata"
                    >
                      <source src={herovideo} />
                    </video>

                    {/* Dark Overlay */}
                    <div className="adv-phone-video-overlay" />

                    {/* Perf bar */}
                    <div className="adv-phone-perf-bar">
                      <div className="adv-perf-badge">
                        <span className="adv-perf-dot" />
                        <span className="adv-perf-label">Testing</span>
                      </div>
                      <div className="adv-phone-meta-logo">META ADS</div>
                    </div>

                    {/* Actions */}
                    <div className="adv-phone-actions">
                      <div className="adv-action-item">
                        <div className="adv-action-icon">
                          <svg viewBox="0 0 15 15" fill="none">
                            <path
                              d="M7.5 12.5C7.5 12.5 2 9 2 5.5C2 3.6 3.6 2 5.5 2C6.5 2 7.3 2.5 7.5 3C7.7 2.5 8.5 2 9.5 2C11.4 2 13 3.6 13 5.5C13 9 7.5 12.5 7.5 12.5Z"
                              stroke="white"
                              strokeWidth="1.2"
                              fill="rgba(255,255,255,0.06)"
                            />
                          </svg>
                        </div>
                        <div className="adv-action-count">21.4K</div>
                      </div>

                      <div className="adv-action-item">
                        <div className="adv-action-icon">
                          <svg viewBox="0 0 15 15" fill="none">
                            <path
                              d="M12 7.5C12 10 10 12 7.5 12C6.7 12 5.9 11.8 5.2 11.4L2.5 12.2L3.3 9.5C2.8 8.8 2.5 8 2.5 7.2C2.5 4.7 4.5 2.7 7 2.7C9.5 2.7 12 4.7 12 7.2"
                              stroke="white"
                              strokeWidth="1.2"
                              strokeLinecap="round"
                            />
                          </svg>
                        </div>
                        <div className="adv-action-count">1.2K</div>
                      </div>

                      <div className="adv-action-item">
                        <div className="adv-action-icon">
                          <svg viewBox="0 0 15 15" fill="none">
                            <path
                              d="M3 7.5H12M9 4.5L12 7.5L9 10.5"
                              stroke="white"
                              strokeWidth="1.2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </div>
                        <div className="adv-action-count">Share</div>
                      </div>
                    </div>

                    {/* Hook Overlay */}
                    <div className="adv-phone-hook">
                      <div className="adv-phone-hook-text">
                        Here's why your ads
                        <br />
                        burn budget and get
                        <br />
                        zero results…
                      </div>

                      <div className="adv-phone-cta-row">
                        <div className="adv-meta-btn-learn">LEARN MORE</div>
                        <div className="adv-meta-btn-shop">GET STARTED</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Float: Platforms */}
              <div className="adv-float-card adv-float-roas">
                <div className="adv-float-label">
                  Platform
                  <span className="adv-card-badge meta">META</span>
                  <span className="adv-card-badge tiktok">TIKTOK</span>
                </div>
                <div className="adv-float-value">3+ ads</div>
                <div className="adv-float-sub">per creative sprint</div>
              </div>

              {/* Float: Delivery */}
              <div className="adv-float-card adv-float-delivery">
                <div className="adv-float-label">Delivery SLA</div>
                <div className="adv-float-value">48h</div>
                <div className="adv-float-sub">test-ready creatives</div>
                <div className="adv-delivery-detail">
                  <div className="adv-delivery-row">
                    <span className="adv-delivery-label">Formats</span>
                    <span className="adv-delivery-val">9:16 &amp; 1:1</span>
                  </div>
                  <div className="adv-delivery-row">
                    <span className="adv-delivery-label">Hook angles</span>
                    <span className="adv-delivery-val good">3 per sprint</span>
                  </div>
                </div>
              </div>

              {/* Float: Clients */}
              <div className="adv-float-card adv-float-brands">
                <div className="adv-float-label">Clients Served</div>
                <div className="adv-float-value">50+</div>
                <div className="adv-float-sub">growth-stage brands</div>
              </div>

              {/* Dashboard strip */}
              <div className="adv-dashboard-strip">
                <div className="adv-dash-metric">
                  <div className="adv-dash-val">Hook-First</div>
                  <div className="adv-dash-label">Creative Strategy</div>
                </div>
                <div className="adv-dash-metric">
                  <div className="adv-dash-val">48h</div>
                  <div className="adv-dash-label">Turnaround</div>
                </div>
                <div className="adv-dash-metric">
                  <div className="adv-dash-val">3+</div>
                  <div className="adv-dash-label">Tested Angles</div>
                </div>
                <div className="adv-dash-chart">
                  {sparkBars.map((b, i) => (
                    <div
                      key={i}
                      className={`adv-spark-bar${b.cls ? " " + b.cls : ""}`}
                      style={{ height: b.h }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* ══════════════ FOLD ══════════════ */}
          <hr className="adv-fold-divider" />
          <div className="adv-below-fold">
            <span className="adv-below-label">Explore</span>
            <div className="adv-below-links">
              {[
                "How it works",
                "Ad examples",
                "Growth packages",
                "Why brands choose Adveron",
                "FAQ",
              ].map((link, i, arr) => (
                <React.Fragment key={link}>
                  <span className="adv-below-link">{link}</span>
                  {i < arr.length - 1 && (
                    <span className="adv-below-sep">·</span>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
