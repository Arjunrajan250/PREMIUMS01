import React from 'react';
import { X, ShieldCheck, Zap, Star, CheckCircle, Clock, Globe, Shield, RefreshCw } from 'lucide-react';
import { CURRENCIES, POPULAR_GAMES } from '../data/mockData';
import { GameMonogram } from './Icons';

export default function ProductDetailModal({ product, selectedCurrency, onClose, onBuyNow }) {
  if (!product) return null;

  const currency = CURRENCIES[selectedCurrency];
  const convertedPrice = (product.price * currency.rate).toFixed(2);
  const gameData = POPULAR_GAMES.find((g) => g.id === product.gameId) || { code: 'GAME' };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-card" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '720px' }}>
        <div className="modal-header">
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span className="badge badge-instant">
              <Zap size={12} />
              <span>{product.deliveryType === 'instant' ? 'Instant Dispatch' : 'Managed Delivery'}</span>
            </span>
            <span style={{ fontSize: '12px', color: 'var(--text-secondary)', fontFamily: 'var(--font-mono)' }}>
              Listing ID: {product.id}
            </span>
          </div>
          <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
            <X size={18} />
          </button>
        </div>

        <div className="modal-body">
          {/* Title & Game */}
          <div style={{ marginBottom: '16px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
              <GameMonogram code={gameData.code || 'GAME'} />
              <span style={{ fontSize: '13px', color: 'var(--violet-light)', fontWeight: 700 }}>
                {product.game}
              </span>
              <span style={{ color: 'var(--text-muted)' }}>•</span>
              <span style={{ fontSize: '13px', color: 'var(--text-secondary)', textTransform: 'capitalize' }}>
                {product.category}
              </span>
            </div>
            <h2 style={{ fontSize: '22px', fontWeight: 800, lineHeight: 1.3 }}>
              {product.title}
            </h2>
          </div>

          {/* Key Specs Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
            gap: '12px',
            marginBottom: '20px',
            padding: '14px',
            background: 'rgba(255, 255, 255, 0.02)',
            border: '1px solid var(--border-subtle)',
            borderRadius: 'var(--radius-md)'
          }}>
            <div>
              <div style={{ fontSize: '11px', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Region</div>
              <div style={{ fontSize: '13px', fontWeight: 600 }}>{product.region}</div>
            </div>
            <div>
              <div style={{ fontSize: '11px', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Platform</div>
              <div style={{ fontSize: '13px', fontWeight: 600 }}>{product.platform || 'PC / Multi'}</div>
            </div>
            <div>
              <div style={{ fontSize: '11px', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Dispatch Speed</div>
              <div style={{ fontSize: '13px', fontWeight: 600, color: 'var(--emerald-glow)' }}>{product.deliverySpeed}</div>
            </div>
            <div>
              <div style={{ fontSize: '11px', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Escrow Warranty</div>
              <div style={{ fontSize: '13px', fontWeight: 600 }}>{product.warranty}</div>
            </div>
          </div>

          {/* Description */}
          <div style={{ marginBottom: '24px' }}>
            <h4 style={{ fontSize: '14px', fontWeight: 700, marginBottom: '8px', color: 'var(--text-primary)' }}>
              Product Details & Specifications
            </h4>
            <p style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: 1.6, whiteSpace: 'pre-line' }}>
              {product.description}
            </p>
          </div>

          {/* Seller Profile Summary */}
          <div style={{
            padding: '16px',
            borderRadius: 'var(--radius-md)',
            background: 'var(--bg-card)',
            border: '1px solid var(--border-subtle)',
            marginBottom: '20px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '14px'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <img
                src={product.seller.avatar}
                alt={product.seller.name}
                style={{ width: '46px', height: '46px', borderRadius: '50%', objectFit: 'cover' }}
              />
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontWeight: 700, fontSize: '15px' }}>
                  <span>{product.seller.name}</span>
                  {product.seller.verified && (
                    <CheckCircle size={15} style={{ color: '#38bdf8' }} />
                  )}
                  <span className="badge badge-gold" style={{ fontSize: '10px' }}>
                    {product.seller.badge}
                  </span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '12px', color: 'var(--text-muted)', marginTop: '2px' }}>
                  <span style={{ color: 'var(--amber-primary)', fontWeight: 700 }}>★ {product.seller.rating}</span>
                  <span>•</span>
                  <span>{product.seller.reviewsCount} verified settlements</span>
                  <span>•</span>
                  <span>{product.seller.completionRate} fulfillment rate</span>
                </div>
              </div>
            </div>

            <div style={{ textAlign: 'right' }}>
              <div style={{ fontSize: '11px', color: 'var(--text-muted)' }}>Response Latency</div>
              <div style={{ fontSize: '13px', fontWeight: 600, color: 'var(--emerald-glow)' }}>
                {product.seller.avgResponse}
              </div>
            </div>
          </div>

          {/* VaultShield Escrow Guarantee Box */}
          <div style={{
            padding: '16px',
            borderRadius: 'var(--radius-md)',
            background: 'rgba(16, 185, 129, 0.07)',
            border: '1px solid rgba(16, 185, 129, 0.25)',
            display: 'flex',
            gap: '14px',
            alignItems: 'flex-start'
          }}>
            <ShieldCheck size={26} style={{ color: 'var(--emerald-glow)', flexShrink: 0, marginTop: '2px' }} />
            <div>
              <div style={{ fontWeight: 700, fontSize: '14px', color: 'var(--emerald-glow)', marginBottom: '4px' }}>
                VaultShield™ Institutional Escrow Protection
              </div>
              <div style={{ fontSize: '12px', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                Funds are held in a segregated settlement vault. The seller cannot withdraw payment until you test login credentials, confirm asset transfer, and authorize final release.
              </div>
            </div>
          </div>
        </div>

        <div className="modal-footer">
          <div style={{ marginRight: 'auto', display: 'flex', flexDirection: 'column' }}>
            <span style={{ fontSize: '11px', color: 'var(--text-muted)' }}>Settlement Price</span>
            <span style={{ fontSize: '24px', fontWeight: 800, color: 'var(--text-primary)', fontFamily: 'var(--font-mono)' }}>
              {currency.symbol}{convertedPrice}
            </span>
          </div>

          <button className="btn btn-outline" onClick={onClose}>
            Cancel
          </button>

          <button
            className="btn btn-primary btn-lg"
            onClick={() => {
              onClose();
              onBuyNow(product);
            }}
          >
            <ShieldCheck size={18} />
            <span>Lock into VaultShield™ Escrow</span>
          </button>
        </div>
      </div>
    </div>
  );
}
