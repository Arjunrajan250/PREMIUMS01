import React, { useState } from 'react';
import { ArrowRight, Check } from 'lucide-react';
import {
  NexaLogo,
  InstagramIcon,
  YouTubeSocialIcon,
  DiscordSocialIcon,
  TwitterXIcon
} from './Icons';

export default function Footer({ onCategoryClick, onOrdersClick, onFaqClick }) {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setTimeout(() => {
        setEmail('');
        setSubscribed(false);
      }, 4000);
    }
  };

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    else window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="nexa-footer">
      <div className="container">
        <div className="footer-columns-grid">
          {/* Col 1: Brand & Tagline */}
          <div className="footer-col brand-col">
            <div className="footer-brand" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              <NexaLogo size={32} />
            </div>
            <p className="footer-tagline">
              Premium digital products. Better prices.
            </p>
            <div className="footer-social-row">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon-btn" aria-label="Instagram">
                <InstagramIcon size={18} />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="social-icon-btn" aria-label="YouTube">
                <YouTubeSocialIcon size={18} />
              </a>
              <a href="https://discord.com" target="_blank" rel="noopener noreferrer" className="social-icon-btn" aria-label="Discord">
                <DiscordSocialIcon size={18} />
              </a>
              <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="social-icon-btn" aria-label="X">
                <TwitterXIcon size={16} />
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="footer-col">
            <h4 className="footer-heading">Quick Links</h4>
            <ul className="footer-links-list">
              <li>
                <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Home</button>
              </li>
              <li>
                <button onClick={() => scrollTo('popular-products')}>Products</button>
              </li>
              <li>
                <button onClick={() => scrollTo('categories-bar')}>Categories</button>
              </li>
              <li>
                <button onClick={() => scrollTo('how-it-works')}>How It Works</button>
              </li>
              <li>
                <button onClick={onFaqClick || (() => scrollTo('testimonials'))}>FAQ</button>
              </li>
            </ul>
          </div>

          {/* Col 3: Support */}
          <div className="footer-col">
            <h4 className="footer-heading">Support</h4>
            <ul className="footer-links-list">
              <li>
                <button onClick={onFaqClick}>Contact Us</button>
              </li>
              <li>
                <button onClick={onOrdersClick}>Track Order</button>
              </li>
              <li>
                <button onClick={onFaqClick}>Refund Policy</button>
              </li>
              <li>
                <button onClick={onFaqClick}>Terms of Service</button>
              </li>
              <li>
                <button onClick={onFaqClick}>Privacy Policy</button>
              </li>
            </ul>
          </div>

          {/* Col 4: Categories */}
          <div className="footer-col">
            <h4 className="footer-heading">Categories</h4>
            <div className="footer-categories-subgrid">
              <ul className="footer-links-list">
                <li><button onClick={() => onCategoryClick?.('music')}>Music</button></li>
                <li><button onClick={() => onCategoryClick?.('video')}>Video</button></li>
                <li><button onClick={() => onCategoryClick?.('streaming')}>Streaming</button></li>
                <li><button onClick={() => onCategoryClick?.('ai-tools')}>AI Tools</button></li>
              </ul>
              <ul className="footer-links-list">
                <li><button onClick={() => onCategoryClick?.('gaming')}>Gaming</button></li>
                <li><button onClick={() => onCategoryClick?.('software')}>Software</button></li>
                <li><button onClick={() => onCategoryClick?.('gift-cards')}>Gift Cards</button></li>
              </ul>
            </div>
          </div>

          {/* Col 5: Stay Updated */}
          <div className="footer-col newsletter-col">
            <h4 className="footer-heading">Stay Updated</h4>
            <p className="newsletter-desc">Get the latest deals and offers.</p>
            <form className="newsletter-form" onSubmit={handleSubscribe}>
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="newsletter-input"
              />
              <button
                type="submit"
                className="newsletter-submit-btn"
                aria-label="Subscribe to newsletter"
              >
                {subscribed ? <Check size={16} /> : <ArrowRight size={16} />}
              </button>
            </form>
            {subscribed && (
              <span className="newsletter-success">
                ✓ You're subscribed to exclusive Nexa drops!
              </span>
            )}
          </div>
        </div>

        {/* Bottom Sub-Footer */}
        <div className="footer-bottom-bar">
          <p>© {new Date().getFullYear()} NEXA DIGITALS. All rights reserved.</p>
          <div className="footer-badges-strip">
            <span className="footer-shield-badge">🔒 256-Bit SSL Encrypted Checkout</span>
            <span className="footer-shield-badge">⚡ Instant Dispatch Verified</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
