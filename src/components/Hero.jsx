import React, { useEffect, useRef, useState } from "react";
import "./Hero.css";
import logo from "../assets/logo.png";
const Hero = () => {
  const heroRef = useRef(null);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const hero = heroRef.current;
      if (!hero) return;
      const rect = hero.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      hero.style.setProperty("--mouse-x", `${x}%`);
      hero.style.setProperty("--mouse-y", `${y}%`);
    };
    const hero = heroRef.current;
    hero?.addEventListener("mousemove", handleMouseMove);
    return () => hero?.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="hero" ref={heroRef}>
      {/* Animated grid background */}
      <div className="hero__grid" aria-hidden="true" />

      {/* Glow orbs */}
      <div className="hero__orb hero__orb--1" aria-hidden="true" />
      <div className="hero__orb hero__orb--2" aria-hidden="true" />
      <div className="hero__orb hero__orb--mouse" aria-hidden="true" />

      {/* Navbar */}
      <nav className="hero__nav">
        <div className="hero__logo">
          {/* AM Icon Mark */}
          {/* <svg className="hero__logo-icon" viewBox="0 0 60 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2 38 L16 4 L24 22 L30 10 L36 22 L44 4 L58 38" stroke="#2563EB" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
            <path d="M10 30 L16 14" stroke="#1B3A6B" strokeWidth="3" strokeLinecap="round" opacity="0.7"/>
          </svg> */}
          <img src={logo} alt="logo image" className="hero__logo-icon" />
          <span className="hero__logo-text">
            Adveron <span className="hero__logo-accent">Media</span>
          </span>
        </div>

        <ul className={`hero__nav-links ${menuOpen ? "hero__nav-links--open" : ""}`}>
          <li>
            <a href="#services" onClick={() => setMenuOpen(false)}>
              Services
            </a>
          </li>
          <li>
            <a href="#results" onClick={() => setMenuOpen(false)}>
              Results
            </a>
          </li>
          <li>
            <a href="#about" onClick={() => setMenuOpen(false)}>
              About
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="hero__nav-cta"
              onClick={() => setMenuOpen(false)}
            >
              Get Started
            </a>
          </li>
        </ul>

        {/* Mobile hamburger */}
        <button
          className="hero__hamburger"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((current) => !current)}
        >
          <span />
          <span />
          <span />
        </button>
      </nav>

      {/* Hero Content */}
      <div className="hero__content">
        {/* Badge */}
        <div className="hero__badge">
          <span className="hero__badge-dot" />
          Growth-Focused Digital Agency
        </div>

        {/* Headline */}
        <h1 className="hero__headline">
          <span className="hero__headline-line hero__headline-line--1">
            Turn Clicks Into <span className="hero__headline-gradient">Clients.</span>
          </span>
          <span className="hero__headline-line hero__headline-line--3">
            Leads Into Revenue.
          </span>
        </h1>

        {/* Subtext */}
        <p className="hero__subtext">
          We build Meta ad creatives, AI UGC videos, websites, 
          and social media systems that help businesses attract attention, 
          build trust, and convert more customers.
        </p>

        {/* CTAs */}
        <div className="hero__ctas">
          <a href="#contact" className="hero__btn hero__btn--primary">
            <span>Get 2 Free Demo Ads</span>
            <svg viewBox="0 0 20 20" fill="currentColor" width="18" height="18">
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </a>
          <a href="#contact" className="hero__btn hero__btn--secondary">
            <svg viewBox="0 0 20 20" fill="currentColor" width="18" height="18">
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                clipRule="evenodd"
              />
            </svg>
            <span>Book a Free Strategy Call</span>
          </a>
        </div>

        {/* Stats Row */}
        <div className="hero__stats">
          <div className="hero__stat">
            <span className="hero__stat-number">2 Free Demo Ads</span>
            <span className="hero__stat-label">BEFORE YOU PAY</span>
          </div>
          <div className="hero__stat-divider" />
          <div className="hero__stat">
            <span className="hero__stat-number">AI UGC + Meta Ads</span>
            <span className="hero__stat-label">Complete Growth System</span>
          </div>
          <div className="hero__stat-divider" />
          <div className="hero__stat">
            <span className="hero__stat-number">Built by Operators</span>
            <span className="hero__stat-label">Experience From Real Agency Workflows</span>
          </div>
        </div>

      </div>

      {/* Floating Service Pills */}
      <div className="hero__pills">
        <div className="hero__pill hero__pill--1">
          <span className="hero__pill-icon">⚡</span> Meta Ads
        </div>
        <div className="hero__pill hero__pill--2">
          <span className="hero__pill-icon">🌐</span> Web Development
        </div>
        <div className="hero__pill hero__pill--3">
          <span className="hero__pill-icon">📈</span> Social Media
        </div>
      </div>

      {/* Scroll Indicator
      <div className="hero__scroll">
        <div className="hero__scroll-line" />
        <span>Scroll</span>
      </div> */}
    </section>
  );
};

export default Hero;
