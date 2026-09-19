import React, { useState } from 'react';
import { Search, X, ShieldCheck, Wallet, PlusCircle, PackageCheck, Menu } from 'lucide-react';
import { CURRENCIES } from '../data/mockData';
import { NexusLogo } from './Icons';

export default function Header({
  searchQuery,
  setSearchQuery,
  selectedCurrency,
  setSelectedCurrency,
  walletBalance,
  onOpenSellerModal,
  onOpenEscrowInfo,
  onOpenWalletModal,
  activeOrdersCount,
  onOpenOrdersModal
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="container header-inner">
        {/* Brand Logo */}
        <div className="logo-container" onClick={() => { setSearchQuery(''); }}>
          <NexusLogo size={34} />
          <div className="logo-brand">
            <span className="logo-title">NEXUSLOOT</span>
            <span className="logo-sub">VAULTSHIELD™ ESCROW</span>
          </div>
        </div>

        {/* Global Search Bar (Desktop) */}
        <div className="header-search desktop-only">
          <div className="search-input-wrapper">
            <Search className="search-icon" size={17} />
            <input
              type="text"
              className="search-input"
              placeholder="Search verified accounts, gold, rare skins, boosting services..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            {searchQuery && (
              <button className="search-clear-btn" onClick={() => setSearchQuery('')} aria-label="Clear search">
                <X size={15} />
              </button>
            )}
          </div>
        </div>

        {/* Desktop Header Actions */}
        <div className="header-actions desktop-only">
          {/* Escrow Security Brief */}
          <button className="btn btn-ghost btn-sm" onClick={onOpenEscrowInfo} title="VaultShield Escrow Architecture">
            <ShieldCheck size={16} style={{ color: 'var(--emerald-glow)' }} />
            <span style={{ fontSize: '13px', fontWeight: 600 }}>Buyer Protection</span>
          </button>

          {/* Currency Switcher */}
          <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
            <select
              className="currency-select"
              value={selectedCurrency}
              onChange={(e) => setSelectedCurrency(e.target.value)}
              aria-label="Select currency"
            >
              {Object.entries(CURRENCIES).map(([code, cur]) => (
                <option key={code} value={code} style={{ background: '#FFFFFF', color: '#0F172A' }}>
                  {cur.label}
                </option>
              ))}
            </select>
          </div>

          {/* Wallet Balance */}
          <button className="wallet-badge" onClick={onOpenWalletModal} title="Manage Treasury Balance">
            <Wallet size={15} style={{ color: 'var(--emerald-glow)' }} />
            <span className="wallet-amount">
              {CURRENCIES[selectedCurrency].symbol}
              {(walletBalance * CURRENCIES[selectedCurrency].rate).toFixed(2)}
            </span>
          </button>

          {/* Active Orders */}
          <button className="btn btn-outline btn-sm" onClick={onOpenOrdersModal} title="View Active Escrow Orders">
            <PackageCheck size={16} />
            <span>Orders</span>
            {activeOrdersCount > 0 && (
              <span className="badge badge-hot" style={{ padding: '1px 6px', fontSize: '10px' }}>
                {activeOrdersCount}
              </span>
            )}
          </button>

          {/* Merchant Sell CTA */}
          <button className="btn btn-primary btn-sm" onClick={onOpenSellerModal}>
            <PlusCircle size={15} />
            <span>List Offer</span>
          </button>
        </div>

        {/* Mobile Header Quick Actions */}
        <div className="mobile-header-actions mobile-only">
          <button className="wallet-badge" onClick={onOpenWalletModal} style={{ padding: '5px 10px' }}>
            <Wallet size={14} style={{ color: 'var(--emerald-glow)' }} />
            <span className="wallet-amount" style={{ fontSize: '12px' }}>
              {CURRENCIES[selectedCurrency].symbol}
              {(walletBalance * CURRENCIES[selectedCurrency].rate).toFixed(0)}
            </span>
          </button>

          <button className="btn btn-primary btn-sm" onClick={onOpenSellerModal} style={{ padding: '6px 10px', fontSize: '12px' }}>
            <PlusCircle size={14} />
            <span>Sell</span>
          </button>

          <button
            className="btn btn-outline btn-sm"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile menu"
            style={{ padding: '6px 8px' }}
          >
            {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile Search Row (Always accessible on phones) */}
      <div className="mobile-search-bar mobile-only">
        <div className="search-input-wrapper">
          <Search className="search-icon" size={16} />
          <input
            type="text"
            className="search-input"
            placeholder="Search accounts, gold, skins..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          {searchQuery && (
            <button className="search-clear-btn" onClick={() => setSearchQuery('')} aria-label="Clear search">
              <X size={15} />
            </button>
          )}
        </div>
      </div>

      {/* Mobile Dropdown Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="mobile-drawer-menu mobile-only">
          <div className="mobile-drawer-item" onClick={() => { setMobileMenuOpen(false); onOpenEscrowInfo(); }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <ShieldCheck size={18} style={{ color: 'var(--emerald-glow)' }} />
              <span style={{ fontWeight: 600, fontSize: '14px' }}>How VaultShield™ Works</span>
            </div>
            <span className="badge badge-instant">Verified</span>
          </div>

          <div className="mobile-drawer-item" onClick={() => { setMobileMenuOpen(false); onOpenOrdersModal(); }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <PackageCheck size={18} style={{ color: 'var(--violet-primary)' }} />
              <span style={{ fontWeight: 600, fontSize: '14px' }}>My Active Escrow Orders</span>
            </div>
            {activeOrdersCount > 0 && (
              <span className="badge badge-hot">{activeOrdersCount} Active</span>
            )}
          </div>

          <div className="mobile-drawer-item" onClick={() => { setMobileMenuOpen(false); onOpenWalletModal(); }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <Wallet size={18} style={{ color: 'var(--emerald-glow)' }} />
              <span style={{ fontWeight: 600, fontSize: '14px' }}>Top-Up Wallet Balance</span>
            </div>
            <span style={{ fontWeight: 700, fontSize: '13px', color: 'var(--emerald-glow)' }}>
              {CURRENCIES[selectedCurrency].symbol}
              {(walletBalance * CURRENCIES[selectedCurrency].rate).toFixed(2)}
            </span>
          </div>

          <div className="mobile-drawer-item" style={{ justifyContent: 'space-between' }}>
            <span style={{ fontWeight: 600, fontSize: '14px' }}>Active Currency:</span>
            <select
              className="currency-select"
              value={selectedCurrency}
              onChange={(e) => setSelectedCurrency(e.target.value)}
              style={{ padding: '4px 8px', fontSize: '12px' }}
            >
              {Object.entries(CURRENCIES).map(([code, cur]) => (
                <option key={code} value={code}>
                  {cur.label}
                </option>
              ))}
            </select>
          </div>
        </div>
      )}
    </header>
  );
}
