import React from 'react';
import { Search, X, ShieldCheck, Wallet, PlusCircle, PackageCheck, Globe2 } from 'lucide-react';
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
  return (
    <header className="site-header">
      <div className="container header-inner">
        {/* Brand Logo */}
        <div className="logo-container" onClick={() => { setSearchQuery(''); }}>
          <NexusLogo size={36} />
          <div className="logo-brand">
            <span className="logo-title">NEXUSLOOT</span>
            <span className="logo-sub">VAULTSHIELD™ ESCROW PROTOCOL</span>
          </div>
        </div>

        {/* Global Search Bar */}
        <div className="header-search">
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

        {/* Header Actions */}
        <div className="header-actions">
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
          <button className="wallet-badge" onClick={onOpenWalletModal} title="Manage Institutional Balance">
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
            <span>List an Offer</span>
          </button>
        </div>
      </div>
    </header>
  );
}
