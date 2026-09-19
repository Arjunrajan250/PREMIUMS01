import React from 'react';
import { SlidersHorizontal, RotateCcw, Zap, CheckCircle, ShieldCheck, X } from 'lucide-react';
import { CURRENCIES } from '../data/mockData';

export default function FilterSidebar({
  regionFilter,
  setRegionFilter,
  instantOnly,
  setInstantOnly,
  verifiedOnly,
  setVerifiedOnly,
  minPrice,
  setMinPrice,
  maxPrice,
  setMaxPrice,
  sortBy,
  setSortBy,
  selectedCurrency,
  onResetFilters,
  isOpenMobile,
  onCloseMobile
}) {
  const currencySymbol = CURRENCIES[selectedCurrency].symbol;

  return (
    <aside className={`filter-sidebar ${isOpenMobile ? 'mobile-open' : ''}`}>
      <div className="sidebar-header">
        <div className="sidebar-title">
          <SlidersHorizontal size={17} style={{ color: 'var(--violet-bright)' }} />
          <span>Filters & Sort</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <button className="btn btn-ghost btn-sm" onClick={onResetFilters} title="Reset all filters">
            <RotateCcw size={13} />
            <span style={{ fontSize: '11px' }}>Reset</span>
          </button>
          {isOpenMobile && (
            <button className="btn btn-outline btn-sm mobile-only" onClick={onCloseMobile} aria-label="Close filters">
              <X size={16} />
            </button>
          )}
        </div>
      </div>

      {/* Sort By */}
      <div className="filter-group">
        <label className="filter-label">Sort By</label>
        <select
          className="price-input"
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          aria-label="Sort listings"
        >
          <option value="featured">Featured & Recommended</option>
          <option value="price-low">Price: Low to High</option>
          <option value="price-high">Price: High to Low</option>
          <option value="rating">Highest Seller Rating</option>
          <option value="orders">Most Orders Completed</option>
        </select>
      </div>

      {/* Instant Delivery Toggle */}
      <div className="filter-group">
        <div className="filter-toggle-row" onClick={() => setInstantOnly(!instantOnly)}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Zap size={16} style={{ color: 'var(--emerald-glow)' }} />
            <span style={{ fontSize: '13px', fontWeight: 600 }}>Instant Delivery Only</span>
          </div>
          <div className={`toggle-switch ${instantOnly ? 'active' : ''}`}>
            <div className="toggle-knob"></div>
          </div>
        </div>
      </div>

      {/* Verified Sellers Toggle */}
      <div className="filter-group">
        <div className="filter-toggle-row" onClick={() => setVerifiedOnly(!verifiedOnly)}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <CheckCircle size={16} style={{ color: '#0284C7' }} />
            <span style={{ fontSize: '13px', fontWeight: 600 }}>Verified Sellers Only</span>
          </div>
          <div className={`toggle-switch ${verifiedOnly ? 'active' : ''}`}>
            <div className="toggle-knob"></div>
          </div>
        </div>
      </div>

      {/* Region Filter */}
      <div className="filter-group">
        <label className="filter-label">Server / Region</label>
        <select
          className="price-input"
          value={regionFilter}
          onChange={(e) => setRegionFilter(e.target.value)}
          aria-label="Filter by region"
        >
          <option value="all">All Regions & Platforms</option>
          <option value="Global">Global</option>
          <option value="North America (NA)">North America (NA)</option>
          <option value="Europe (EU)">Europe (EU)</option>
          <option value="Asia">Asia</option>
        </select>
      </div>

      {/* Price Range Filter */}
      <div className="filter-group">
        <label className="filter-label">Price Range ({currencySymbol})</label>
        <div className="price-inputs">
          <input
            type="number"
            className="price-input"
            placeholder="Min"
            value={minPrice}
            onChange={(e) => setMinPrice(e.target.value)}
            min="0"
          />
          <span style={{ color: 'var(--text-muted)' }}>—</span>
          <input
            type="number"
            className="price-input"
            placeholder="Max"
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value)}
            min="0"
          />
        </div>
      </div>

      {/* VaultShield Escrow Notice */}
      <div style={{
        marginTop: '20px',
        padding: '14px',
        borderRadius: 'var(--radius-md)',
        background: '#ECFDF5',
        border: '1px solid #A7F3D0'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--emerald-glow)', fontWeight: 700, fontSize: '12px', marginBottom: '4px' }}>
          <ShieldCheck size={16} />
          <span>VAULTSHIELD ESCROW</span>
        </div>
        <p style={{ fontSize: '11.5px', color: 'var(--text-secondary)', lineHeight: 1.4 }}>
          Payment released to seller only after you verify login and working status.
        </p>
      </div>

      {/* Mobile Apply Button */}
      {isOpenMobile && (
        <div style={{ marginTop: '20px' }}>
          <button className="btn btn-primary" style={{ width: '100%' }} onClick={onCloseMobile}>
            Apply Filters
          </button>
        </div>
      )}
    </aside>
  );
}
