import React from 'react';
import { X, ShieldCheck, Zap, Star, CheckCircle, Clock, Check, ShoppingBag, ArrowRight } from 'lucide-react';
import { CURRENCIES } from '../data/mockData';
import { ProductLogo } from './Icons';

export default function ProductDetailModal({ product, selectedCurrency, onClose, onBuyNow, onAddToCart }) {
  if (!product) return null;

  const currency = CURRENCIES[selectedCurrency] || CURRENCIES.INR;
  const currentPrice = (product.price * currency.rate).toFixed(0);
  const origPrice = product.originalPrice ? (product.originalPrice * currency.rate).toFixed(0) : null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-dialog product-detail-dialog" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span className="badge badge-instant">
              <Zap size={13} />
              <span>Instant Dispatch (&lt; 60s)</span>
            </span>
            <span style={{ fontSize: '12px', color: '#6B7280' }}>
              Item #{product.id}
            </span>
          </div>
          <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
            <X size={18} />
          </button>
        </div>

        <div className="modal-body">
          {/* Product Header */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '20px' }}>
            <div style={{
              width: '64px',
              height: '64px',
              borderRadius: '16px',
              background: '#F9FAFB',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0
            }}>
              <ProductLogo type={product.iconType} size={50} />
            </div>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                <span style={{ fontSize: '12px', fontWeight: 700, color: '#6B7280', textTransform: 'uppercase' }}>
                  {product.category}
                </span>
                {product.badge && (
                  <span className={`product-badge badge-${product.badgeType || 'default'}`} style={{ fontSize: '11px', padding: '2px 8px' }}>
                    {product.badge}
                  </span>
                )}
              </div>
              <h2 style={{ fontSize: '24px', fontWeight: 900, color: '#111111' }}>
                {product.title}
              </h2>
              <p style={{ fontSize: '14px', color: '#6B7280', fontWeight: 600 }}>
                {product.plan || '1 Month Plan'}
              </p>
            </div>
          </div>

          {/* Key Highlights */}
          <div className="product-highlights-box">
            <div className="highlight-item">
              <span className="highlight-label">Delivery Speed</span>
              <span className="highlight-val" style={{ color: '#059669', display: 'flex', alignItems: 'center', gap: '4px' }}>
                <Zap size={14} /> Instant (&lt; 60s)
              </span>
            </div>
            <div className="highlight-item">
              <span className="highlight-label">Warranty</span>
              <span className="highlight-val">{product.warranty || '30-Day Nexa Full Warranty'}</span>
            </div>
            <div className="highlight-item">
              <span className="highlight-label">Product Type</span>
              <span className="highlight-val">100% Genuine Digital</span>
            </div>
          </div>

          {/* Description */}
          <div style={{ marginBottom: '20px' }}>
            <h4 style={{ fontSize: '14px', fontWeight: 700, marginBottom: '6px', color: '#111111' }}>
              About this product
            </h4>
            <p style={{ fontSize: '14px', color: '#4B5563', lineHeight: 1.6 }}>
              {product.description}
            </p>
          </div>

          {/* Feature List */}
          {product.features && product.features.length > 0 && (
            <div style={{ marginBottom: '24px' }}>
              <h4 style={{ fontSize: '14px', fontWeight: 700, marginBottom: '10px', color: '#111111' }}>
                What's included:
              </h4>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '8px' }}>
                {product.features.map((feat, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13.5px', color: '#374151' }}>
                    <div style={{
                      width: '18px',
                      height: '18px',
                      borderRadius: '50%',
                      background: '#DCFCE7',
                      color: '#16A34A',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0
                    }}>
                      <Check size={12} />
                    </div>
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Bottom Price & Purchase CTA */}
          <div className="product-modal-footer">
            <div className="modal-price-display">
              <span style={{ fontSize: '12px', color: '#6B7280', textTransform: 'uppercase', fontWeight: 700 }}>
                Special Price
              </span>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px' }}>
                <span style={{ fontSize: '26px', fontWeight: 900, color: '#111111' }}>
                  {currency.symbol}{currentPrice}
                </span>
                {origPrice && (
                  <span style={{ fontSize: '16px', color: '#9CA3AF', textDecoration: 'line-through' }}>
                    {currency.symbol}{origPrice}
                  </span>
                )}
              </div>
            </div>

            <div style={{ display: 'flex', gap: '10px' }}>
              {onAddToCart && (
                <button
                  className="btn-add-to-cart"
                  style={{ width: 'auto', padding: '0 20px', height: '46px', background: '#F3F4F6', color: '#111111' }}
                  onClick={() => {
                    onAddToCart(product);
                  }}
                >
                  <ShoppingBag size={16} />
                  <span>Add to Cart</span>
                </button>
              )}

              <button
                className="btn-signin"
                style={{ padding: '0 28px', height: '46px', fontSize: '15px' }}
                onClick={() => {
                  onClose();
                  onBuyNow(product);
                }}
              >
                <span>Buy Now</span>
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
