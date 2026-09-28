import React from 'react';
import { ShoppingCart, Check } from 'lucide-react';
import { ProductLogo } from './Icons';
import { CURRENCIES } from '../data/mockData';

export default function ProductCard({
  product,
  selectedCurrency,
  onSelectProduct,
  onAddToCart,
  isInCart = false
}) {
  const currency = CURRENCIES[selectedCurrency] || CURRENCIES.INR;
  const currentPrice = (product.price * currency.rate).toFixed(0);
  const origPrice = product.originalPrice ? (product.originalPrice * currency.rate).toFixed(0) : null;

  return (
    <div
      className="nexa-product-card"
      onClick={() => onSelectProduct(product)}
    >
      {/* Top Badge area */}
      <div className="product-badge-row">
        {product.badge ? (
          <span className={`product-badge badge-${product.badgeType || 'default'}`}>
            {product.badge}
          </span>
        ) : (
          <span className="product-badge-placeholder" />
        )}
      </div>

      {/* Brand Product Icon */}
      <div className="product-logo-container">
        <ProductLogo type={product.iconType} size={48} />
      </div>

      {/* Product Information */}
      <div className="product-info-block">
        <h3 className="product-card-title">{product.title}</h3>
        <p className="product-card-plan">{product.plan || '1 Month Plan'}</p>
      </div>

      {/* Price Block */}
      <div className="product-price-block">
        <span className="price-current">
          {currency.symbol}{currentPrice}
        </span>
        {origPrice && (
          <span className="price-strikethrough">
            {currency.symbol}{origPrice}
          </span>
        )}
      </div>

      {/* Add To Cart Button */}
      <button
        className={`btn-add-to-cart ${isInCart ? 'added' : ''}`}
        onClick={(e) => {
          e.stopPropagation();
          onAddToCart(product);
        }}
        aria-label={`Add ${product.title} to cart`}
      >
        {isInCart ? (
          <>
            <Check size={16} />
            <span>Added</span>
          </>
        ) : (
          <>
            <ShoppingCart size={15} />
            <span>Add to Cart</span>
          </>
        )}
      </button>
    </div>
  );
}
