import React from 'react';
import { Zap, ShieldCheck, Star, CheckCircle, Clock } from 'lucide-react';
import { CURRENCIES, POPULAR_GAMES } from '../data/mockData';
import { GameMonogram } from './Icons';

export default function ProductCard({ product, selectedCurrency, onSelectProduct, onQuickBuy }) {
  const currency = CURRENCIES[selectedCurrency];
  const convertedPrice = (product.price * currency.rate).toFixed(2);
  const gameData = POPULAR_GAMES.find((g) => g.id === product.gameId) || { code: 'GAME' };

  return (
    <div className="product-card" onClick={() => onSelectProduct(product)}>
      <div>
        {/* Top Badges */}
        <div className="product-card-top">
          <span className="game-badge">
            <GameMonogram code={gameData.code || 'GAME'} />
            <span>{product.game}</span>
          </span>
          {product.deliveryType === 'instant' ? (
            <span className="badge badge-instant">
              <Zap size={12} />
              <span>Instant Dispatch</span>
            </span>
          ) : (
            <span className="badge badge-escrow">
              <Clock size={12} />
              <span>{product.deliverySpeed}</span>
            </span>
          )}
        </div>

        {/* Title */}
        <h3 className="product-title" title={product.title}>
          {product.title}
        </h3>

        {/* Tags */}
        <div className="product-tags">
          {product.tags && product.tags.slice(0, 3).map((tag, idx) => (
            <span key={idx} className="tag-pill">
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div>
        {/* Seller Info */}
        <div className="product-seller-row">
          <img
            src={product.seller.avatar || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&auto=format&fit=crop&q=80'}
            alt={product.seller.name}
            className="seller-avatar"
            onError={(e) => {
              e.target.src = 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&auto=format&fit=crop&q=80';
            }}
          />
          <div className="seller-meta">
            <span className="seller-name">
              {product.seller.name}
              {product.seller.verified && (
                <CheckCircle size={13} style={{ color: '#38bdf8' }} title="Verified Merchant" />
              )}
            </span>
            <span className="seller-stats">
              <span className="rating-star">★ {product.seller.rating}</span>
              <span>•</span>
              <span>{product.seller.reviewsCount} completed</span>
            </span>
          </div>
        </div>

        {/* Price & Action */}
        <div className="product-card-bottom">
          <div className="price-box">
            <span className="price-sub">Escrow Protected</span>
            <span className="price-value">
              {currency.symbol}{convertedPrice}
            </span>
          </div>

          <button
            className="btn btn-primary btn-sm"
            onClick={(e) => {
              e.stopPropagation();
              onQuickBuy(product);
            }}
          >
            <span>Secure Order</span>
          </button>
        </div>
      </div>
    </div>
  );
}
