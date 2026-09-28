import React from 'react';
import { ArrowRight, Zap, ShieldCheck, CreditCard, Headphones } from 'lucide-react';
import heroShowcaseImg from '../assets/hero-showcase.jpg';

export default function Hero({ onExploreClick, onHowItWorksClick }) {
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="nexa-hero-section">
      <div className="container hero-grid-wrapper">
        {/* Left Column: Typography & CTAs */}
        <div className="hero-left-column">
          {/* Pill Tag */}
          <div className="hero-badge-pill">
            <span>PREMIUM DIGITAL PRODUCTS</span>
          </div>

          {/* Main Headline */}
          <h1 className="hero-display-title">
            More of what <br />
            you love. <br />
            <span className="hero-faded-title">For less.</span>
          </h1>

          {/* Subtitle */}
          <p className="hero-lead-text">
            Get genuine digital subscriptions, software licenses and gift cards at better prices. Instant delivery. Simple and secure.
          </p>

          {/* CTAs */}
          <div className="hero-cta-group">
            <button
              className="btn-hero-primary"
              onClick={() => {
                if (onExploreClick) onExploreClick();
                else scrollToSection('popular-products');
              }}
            >
              <span>Explore Products</span>
              <ArrowRight size={16} />
            </button>

            <button
              className="btn-hero-secondary"
              onClick={() => {
                if (onHowItWorksClick) onHowItWorksClick();
                else scrollToSection('how-it-works');
              }}
            >
              <span>How It Works</span>
            </button>
          </div>

          {/* Trust Row / Value Props */}
          <div className="hero-trust-row">
            <div className="trust-item">
              <div className="trust-icon-box">
                <Zap size={18} />
              </div>
              <span className="trust-label">Instant<br />Delivery</span>
            </div>

            <div className="trust-item">
              <div className="trust-icon-box">
                <ShieldCheck size={18} />
              </div>
              <span className="trust-label">Genuine<br />Products</span>
            </div>

            <div className="trust-item">
              <div className="trust-icon-box">
                <CreditCard size={18} />
              </div>
              <span className="trust-label">Secure<br />Payments</span>
            </div>

            <div className="trust-item">
              <div className="trust-icon-box">
                <Headphones size={18} />
              </div>
              <span className="trust-label">Fast<br />Support</span>
            </div>
          </div>
        </div>

        {/* Right Column: Hero Visual Showcase */}
        <div className="hero-right-column">
          <div className="hero-image-card">
            <img
              src={heroShowcaseImg}
              alt="Nexa Digitals premium subscriptions on laptop, phone and headphones"
              className="hero-main-photo"
              loading="eager"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
