import React, { useState } from 'react';
import { Search, X, ShoppingBag, Menu } from 'lucide-react';
import { NexaLogo } from './Icons';
import { CURRENCIES } from '../data/mockData';

export default function Header({
  searchQuery,
  setSearchQuery,
  selectedCurrency,
  setSelectedCurrency,
  cartCount = 2,
  onOpenCart,
  onOpenSignIn,
  onOpenHowItWorks,
  onOpenFaq,
  onSelectCategory
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    setMobileMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="nexa-header">
      <div className="container header-container">
        {/* Brand Logo */}
        <div
          className="header-brand"
          onClick={() => {
            setSearchQuery('');
            if (onSelectCategory) onSelectCategory('all');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          style={{ cursor: 'pointer' }}
        >
          <NexaLogo size={36} />
        </div>

        {/* Center Navigation Links (Desktop) */}
        <nav className="header-nav desktop-only">
          <button
            className="nav-link active"
            onClick={() => {
              if (onSelectCategory) onSelectCategory('all');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            Home
          </button>
          <button
            className="nav-link"
            onClick={() => scrollToSection('popular-products')}
          >
            Products
          </button>
          <button
            className="nav-link"
            onClick={() => scrollToSection('categories-bar')}
          >
            Categories
          </button>
          <button
            className="nav-link"
            onClick={() => {
              if (onOpenHowItWorks) onOpenHowItWorks();
              else scrollToSection('how-it-works');
            }}
          >
            How It Works
          </button>
          <button
            className="nav-link"
            onClick={() => {
              if (onOpenFaq) onOpenFaq();
              else scrollToSection('testimonials');
            }}
          >
            FAQ
          </button>
        </nav>

        {/* Search Bar */}
        <div className="header-search-bar desktop-only">
          <div className="search-pill-wrapper">
            <Search size={16} className="search-pill-icon" />
            <input
              type="text"
              placeholder="Search for products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="search-pill-input"
            />
            {searchQuery && (
              <button
                className="search-pill-clear"
                onClick={() => setSearchQuery('')}
                aria-label="Clear search"
              >
                <X size={14} />
              </button>
            )}
          </div>
        </div>

        {/* Right Actions */}
        <div className="header-right-actions">
          {/* Subtle Currency Selector */}
          <div className="currency-pill-container desktop-only">
            <select
              className="currency-pill-select"
              value={selectedCurrency}
              onChange={(e) => setSelectedCurrency(e.target.value)}
              aria-label="Currency"
            >
              {Object.entries(CURRENCIES).map(([code, cur]) => (
                <option key={code} value={code}>
                  {cur.symbol} {code}
                </option>
              ))}
            </select>
          </div>

          {/* Cart Icon with Counter Badge */}
          <button
            className="header-cart-btn"
            onClick={onOpenCart}
            aria-label="View Shopping Cart"
            title="Shopping Cart"
          >
            <ShoppingBag size={20} />
            {cartCount > 0 && (
              <span className="cart-badge">{cartCount}</span>
            )}
          </button>

          {/* Sign In Button */}
          <button
            className="btn-signin desktop-only"
            onClick={onOpenSignIn}
          >
            <span>Sign In</span>
          </button>

          {/* Mobile Hamburger Toggle */}
          <button
            className="mobile-hamburger mobile-only"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="mobile-dropdown-menu mobile-only">
          <div style={{ marginBottom: '16px' }}>
            <div className="search-pill-wrapper">
              <Search size={16} className="search-pill-icon" />
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="search-pill-input"
              />
            </div>
          </div>

          <div className="mobile-nav-links">
            <button
              className="mobile-nav-link"
              onClick={() => {
                setMobileMenuOpen(false);
                if (onSelectCategory) onSelectCategory('all');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            >
              Home
            </button>
            <button
              className="mobile-nav-link"
              onClick={() => scrollToSection('popular-products')}
            >
              Products
            </button>
            <button
              className="mobile-nav-link"
              onClick={() => scrollToSection('categories-bar')}
            >
              Categories
            </button>
            <button
              className="mobile-nav-link"
              onClick={() => scrollToSection('how-it-works')}
            >
              How It Works
            </button>
            <button
              className="mobile-nav-link"
              onClick={() => {
                setMobileMenuOpen(false);
                if (onOpenFaq) onOpenFaq();
              }}
            >
              FAQ
            </button>
          </div>

          <div style={{ marginTop: '16px', display: 'flex', gap: '10px' }}>
            <button
              className="btn-signin"
              style={{ flex: 1, justifyContent: 'center' }}
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenSignIn();
              }}
            >
              Sign In
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
