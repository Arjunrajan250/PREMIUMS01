import React from 'react';
import { ShieldCheck, Zap, Star, Award, Layers, UserCheck, Coins, Shield, CreditCard, Lock, Clock } from 'lucide-react';
import { CATEGORIES } from '../data/mockData';

// Category icon map
const CATEGORY_ICONS = {
  Layers: Layers,
  UserCheck: UserCheck,
  Coins: Coins,
  Shield: Shield,
  Zap: Zap,
  CreditCard: CreditCard
};

export default function Hero({ selectedCategory, setSelectedCategory }) {
  return (
    <section className="hero-section">
      <div className="ambient-glow glow-top-left"></div>
      <div className="ambient-glow glow-top-right"></div>

      <div className="container hero-content">
        <div className="hero-pill">
          <ShieldCheck size={14} style={{ color: 'var(--emerald-glow)' }} />
          <span>Institutional-Grade P2P Escrow Protocol</span>
        </div>

        <h1 className="hero-title">
          Trade Gaming Accounts, Currency & Assets <br />
          <span className="gradient-text">Protected by VaultShield™ Escrow</span>
        </h1>

        <p className="hero-subtitle">
          Secure peer-to-peer exchange connecting verified players globally.
          Every transaction is safeguarded by automated smart escrow holding, instantaneous credentials delivery, and 24/7 dispute coverage.
        </p>

        {/* Professional Metrics Strip */}
        <div className="hero-stats-row">
          <div className="hero-stat-item">
            <div style={{
              width: '38px',
              height: '38px',
              borderRadius: '8px',
              background: 'rgba(16, 185, 129, 0.1)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--emerald-glow)'
            }}>
              <ShieldCheck size={20} />
            </div>
            <div className="hero-stat-info">
              <div className="hero-stat-value">$14.8M+</div>
              <div className="hero-stat-label">Secured in Escrow</div>
            </div>
          </div>

          <div className="hero-stat-item">
            <div style={{
              width: '38px',
              height: '38px',
              borderRadius: '8px',
              background: 'rgba(139, 92, 246, 0.1)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--violet-bright)'
            }}>
              <Zap size={20} />
            </div>
            <div className="hero-stat-info">
              <div className="hero-stat-value">&lt; 60 Seconds</div>
              <div className="hero-stat-label">Avg. Auto-Dispatch</div>
            </div>
          </div>

          <div className="hero-stat-item">
            <div style={{
              width: '38px',
              height: '38px',
              borderRadius: '8px',
              background: 'rgba(245, 158, 11, 0.1)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--amber-primary)'
            }}>
              <Star size={20} />
            </div>
            <div className="hero-stat-info">
              <div className="hero-stat-value">4.98 / 5.0</div>
              <div className="hero-stat-label">Verified Trust Score</div>
            </div>
          </div>

          <div className="hero-stat-item">
            <div style={{
              width: '38px',
              height: '38px',
              borderRadius: '8px',
              background: 'rgba(6, 182, 212, 0.1)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--cyan-primary)'
            }}>
              <Award size={20} />
            </div>
            <div className="hero-stat-info">
              <div className="hero-stat-value">500+ Games</div>
              <div className="hero-stat-label">Supported Catalogs</div>
            </div>
          </div>
        </div>

        {/* Clean Category Selector Tabs with Vector Icons */}
        <div className="category-bar">
          {CATEGORIES.map((cat) => {
            const isActive = selectedCategory === cat.id;
            const IconComponent = CATEGORY_ICONS[cat.iconName] || Layers;

            return (
              <button
                key={cat.id}
                className={`category-tab ${isActive ? 'active' : ''}`}
                onClick={() => setSelectedCategory(cat.id)}
              >
                <IconComponent size={16} />
                <span>{cat.name}</span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
