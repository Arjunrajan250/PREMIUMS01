import React from 'react';
import { ShieldCheck, Lock, Award, Globe2 } from 'lucide-react';
import { NexusLogo, VisaMastercardIcon, TetherUsdtIcon, PayPalIcon } from './Icons';

export default function Footer({ onOpenEscrowInfo, onOpenSellerModal }) {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          {/* Brand Col */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px' }}>
              <NexusLogo size={32} />
              <span style={{ fontSize: '18px', fontWeight: 800, letterSpacing: '-0.02em', color: 'var(--text-primary)' }}>
                NEXUSLOOT
              </span>
            </div>
            <p style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '18px' }}>
              Institutional-grade peer-to-peer gaming exchange for verified accounts, virtual currencies, skins, and carry services.
              Settled securely through VaultShield™ automated escrow holding.
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--emerald-glow)', fontSize: '12px', fontWeight: 600 }}>
              <ShieldCheck size={16} />
              <span>VaultShield™ Multi-Signature Escrow Protected</span>
            </div>
          </div>

          {/* Popular Categories */}
          <div>
            <h4 className="footer-col-title">Exchange Markets</h4>
            <ul className="footer-link-list">
              <li><a href="#marketplace" className="footer-link">Verified Game Accounts</a></li>
              <li><a href="#marketplace" className="footer-link">In-Game Gold & Currencies</a></li>
              <li><a href="#marketplace" className="footer-link">Classified Items & Skins</a></li>
              <li><a href="#marketplace" className="footer-link">Competitive Rank Boosting</a></li>
              <li><a href="#marketplace" className="footer-link">Digital Vouchers & Gift Cards</a></li>
            </ul>
          </div>

          {/* Trust & Escrow */}
          <div>
            <h4 className="footer-col-title">Security & Protocol</h4>
            <ul className="footer-link-list">
              <li><button onClick={onOpenEscrowInfo} className="footer-link" style={{ background: 'none', border: 'none', padding: 0, textAlign: 'left', cursor: 'pointer' }}>VaultShield™ Escrow Architecture</button></li>
              <li><a href="#marketplace" className="footer-link">Buyer Protection Framework</a></li>
              <li><a href="#marketplace" className="footer-link">KYC Seller Verification Standards</a></li>
              <li><a href="#marketplace" className="footer-link">Arbitration & Dispute Desk</a></li>
              <li><button onClick={onOpenSellerModal} className="footer-link" style={{ background: 'none', border: 'none', padding: 0, textAlign: 'left', cursor: 'pointer' }}>Merchant Terms & Fee Schedule (5%)</button></li>
            </ul>
          </div>

          {/* Supported Top Games */}
          <div>
            <h4 className="footer-col-title">Featured Catalogs</h4>
            <ul className="footer-link-list">
              <li><a href="#marketplace" className="footer-link">Valorant Accounts & Points</a></li>
              <li><a href="#marketplace" className="footer-link">Counter-Strike 2 Skin Market</a></li>
              <li><a href="#marketplace" className="footer-link">Roblox Blox Fruits Assets</a></li>
              <li><a href="#marketplace" className="footer-link">World of Warcraft Retail Vaults</a></li>
              <li><a href="#marketplace" className="footer-link">GTA Online Modded Profiles</a></li>
              <li><a href="#marketplace" className="footer-link">Path of Exile 2 Divines</a></li>
            </ul>
          </div>
        </div>

        {/* Payment Methods & Bottom Bar */}
        <div className="footer-bottom">
          <div>
            © {new Date().getFullYear()} NexusLoot Exchange Ltd. All rights reserved. VaultShield™ is a registered service protocol.
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '14px', flexWrap: 'wrap' }}>
            <span style={{ fontSize: '11px', textTransform: 'uppercase', color: 'var(--text-muted)' }}>Supported Rails:</span>
            <VisaMastercardIcon size={18} />
            <TetherUsdtIcon size={18} />
            <PayPalIcon size={18} />
            <div style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '12px', color: 'var(--text-secondary)' }}>
              <Lock size={12} style={{ color: 'var(--emerald-glow)' }} />
              <span>256-bit TLS Encrypted</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
