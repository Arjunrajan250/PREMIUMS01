import React from 'react';
import { X, Trash2, ArrowRight, ShoppingBag, Zap } from 'lucide-react';
import { ProductLogo } from './Icons';
import { CURRENCIES } from '../data/mockData';

export default function CartDrawer({
  isOpen,
  onClose,
  cartItems,
  onUpdateQuantity,
  onRemoveItem,
  onCheckout,
  selectedCurrency
}) {
  if (!isOpen) return null;

  const currency = CURRENCIES[selectedCurrency] || CURRENCIES.INR;

  const subtotal = cartItems.reduce((acc, item) => {
    return acc + (item.price * (item.quantity || 1));
  }, 0);

  const convertedSubtotal = (subtotal * currency.rate).toFixed(0);

  return (
    <div className="cart-drawer-backdrop" onClick={onClose}>
      <div className="cart-drawer-panel" onClick={(e) => e.stopPropagation()}>
        {/* Cart Header */}
        <div className="cart-drawer-header">
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <ShoppingBag size={20} />
            <h3 style={{ fontSize: '18px', fontWeight: 800 }}>Your Cart</h3>
            <span className="cart-count-pill">{cartItems.length} items</span>
          </div>
          <button className="cart-close-btn" onClick={onClose} aria-label="Close cart">
            <X size={20} />
          </button>
        </div>

        {/* Cart Content */}
        <div className="cart-drawer-body">
          {cartItems.length === 0 ? (
            <div className="cart-empty-state">
              <ShoppingBag size={48} className="cart-empty-icon" />
              <h4>Your cart is empty</h4>
              <p>Explore our premium digital subscriptions and add items to your cart.</p>
              <button className="btn-hero-primary" onClick={onClose} style={{ marginTop: '16px' }}>
                Browse Products
              </button>
            </div>
          ) : (
            <div className="cart-items-list">
              {cartItems.map((item) => {
                const itemPrice = (item.price * currency.rate).toFixed(0);
                const itemOrigPrice = item.originalPrice ? (item.originalPrice * currency.rate).toFixed(0) : null;
                return (
                  <div key={item.id} className="cart-item-row">
                    <div className="cart-item-logo">
                      <ProductLogo type={item.iconType} size={36} />
                    </div>

                    <div className="cart-item-details">
                      <h4 className="cart-item-title">{item.title}</h4>
                      <p className="cart-item-plan">{item.plan || '1 Month Plan'}</p>
                      <div className="cart-item-price-row">
                        <span className="cart-item-price">
                          {currency.symbol}{itemPrice}
                        </span>
                        {itemOrigPrice && (
                          <span className="cart-item-orig-price">
                            {currency.symbol}{itemOrigPrice}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Quantity & Remove */}
                    <div className="cart-item-actions">
                      <div className="cart-qty-control">
                        <button
                          onClick={() => onUpdateQuantity(item.id, (item.quantity || 1) - 1)}
                          disabled={(item.quantity || 1) <= 1}
                        >
                          -
                        </button>
                        <span>{item.quantity || 1}</span>
                        <button
                          onClick={() => onUpdateQuantity(item.id, (item.quantity || 1) + 1)}
                        >
                          +
                        </button>
                      </div>
                      <button
                        className="cart-remove-btn"
                        onClick={() => onRemoveItem(item.id)}
                        aria-label="Remove item"
                      >
                        <Trash2 size={15} />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Cart Footer */}
        {cartItems.length > 0 && (
          <div className="cart-drawer-footer">
            <div className="cart-guarantee-note">
              <Zap size={14} style={{ color: '#10B981' }} />
              <span>Instant automated credentials dispatch to your email</span>
            </div>

            <div className="cart-subtotal-row">
              <span>Subtotal</span>
              <span className="cart-subtotal-value">
                {currency.symbol}{convertedSubtotal}
              </span>
            </div>

            <button
              className="btn-checkout-primary"
              onClick={() => {
                onClose();
                onCheckout(cartItems[0]); // Starts checkout for the items
              }}
            >
              <span>Proceed to Checkout</span>
              <ArrowRight size={16} />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
