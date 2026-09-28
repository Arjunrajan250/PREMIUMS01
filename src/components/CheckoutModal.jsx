import React, { useState } from 'react';
import { X, ShieldCheck, AlertCircle, Loader2, Lock, CreditCard, Smartphone } from 'lucide-react';
import { CURRENCIES } from '../data/mockData';
import { ProductLogo, TetherUsdtIcon } from './Icons';

export default function CheckoutModal({
  product,
  selectedCurrency,
  _walletBalance = 1000,
  onClose,
  onCompleteOrder
}) {
  const [paymentMethod, setPaymentMethod] = useState('upi');
  const [isProcessing, setIsProcessing] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [customerEmail, setCustomerEmail] = useState('customer@example.com');

  if (!product) return null;

  const currency = CURRENCIES[selectedCurrency] || CURRENCIES.INR;
  const basePrice = product.price * currency.rate;
  const totalPrice = basePrice;

  const handlePay = () => {
    setErrorMsg('');
    setIsProcessing(true);

    setTimeout(() => {
      setIsProcessing(false);
      const newOrder = {
        orderId: 'NX-' + Math.floor(100000 + Math.random() * 900000),
        product: product,
        totalAmount: totalPrice,
        currency: selectedCurrency,
        paymentMethod: paymentMethod,
        customerEmail: customerEmail,
        timestamp: new Date().toISOString(),
        escrowStatus: 'held', // held / released
        sellerChat: [
          { sender: 'system', text: `Order confirmed for ${product.title}. Automated digital dispatch completed.` },
          { sender: 'seller', text: `Hi! Thank you for ordering from Nexa Digitals. Your credentials & activation instructions are available above.` },
          { sender: 'seller', text: `If you have any questions, our support team is available 24/7!` }
        ]
      };
      onCompleteOrder(newOrder, totalPrice / currency.rate);
    }, 1200);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-dialog checkout-dialog" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <ShieldCheck size={20} style={{ color: '#059669' }} />
            <h3 style={{ fontSize: '18px', fontWeight: 800, color: '#111111' }}>
              Nexa Secure Checkout
            </h3>
          </div>
          <button className="modal-close-btn" onClick={onClose} disabled={isProcessing}>
            <X size={18} />
          </button>
        </div>

        <div className="modal-body">
          {/* Item Summary Card */}
          <div className="checkout-product-preview">
            <div className="checkout-product-logo">
              <ProductLogo type={product.iconType} size={40} />
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: '15px', fontWeight: 800, color: '#111111' }}>
                {product.title}
              </div>
              <div style={{ fontSize: '13px', color: '#6B7280' }}>
                {product.plan || '1 Month Plan'} • Instant Dispatch (&lt; 60s)
              </div>
            </div>
            <div style={{ fontSize: '18px', fontWeight: 900, color: '#111111' }}>
              {currency.symbol}{totalPrice.toFixed(0)}
            </div>
          </div>

          {/* Delivery Email Input */}
          <div style={{ marginBottom: '18px' }}>
            <label style={{ display: 'block', fontSize: '12px', fontWeight: 700, color: '#374151', marginBottom: '6px' }}>
              Delivery Email (Credentials sent here)
            </label>
            <input
              type="email"
              value={customerEmail}
              onChange={(e) => setCustomerEmail(e.target.value)}
              required
              style={{
                width: '100%',
                height: '42px',
                padding: '0 14px',
                borderRadius: '8px',
                border: '1px solid #D1D5DB',
                fontSize: '13.5px',
                outline: 'none',
                background: '#FFFFFF'
              }}
            />
          </div>

          {/* Payment Method Selector */}
          <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'block', fontSize: '12px', fontWeight: 700, color: '#374151', marginBottom: '8px' }}>
              Select Payment Method
            </label>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '10px' }}>
              {/* UPI */}
              <button
                type="button"
                className={`payment-option-card ${paymentMethod === 'upi' ? 'selected' : ''}`}
                onClick={() => setPaymentMethod('upi')}
              >
                <Smartphone size={20} style={{ color: '#059669' }} />
                <div style={{ textAlign: 'left' }}>
                  <div style={{ fontSize: '13px', fontWeight: 700 }}>UPI / QR</div>
                  <div style={{ fontSize: '11px', color: '#6B7280' }}>GPay, PhonePe, Paytm</div>
                </div>
              </button>

              {/* Cards */}
              <button
                type="button"
                className={`payment-option-card ${paymentMethod === 'card' ? 'selected' : ''}`}
                onClick={() => setPaymentMethod('card')}
              >
                <CreditCard size={20} style={{ color: '#2563EB' }} />
                <div style={{ textAlign: 'left' }}>
                  <div style={{ fontSize: '13px', fontWeight: 700 }}>Debit / Credit Card</div>
                  <div style={{ fontSize: '11px', color: '#6B7280' }}>Visa, Mastercard, RuPay</div>
                </div>
              </button>

              {/* NetBanking */}
              <button
                type="button"
                className={`payment-option-card ${paymentMethod === 'netbanking' ? 'selected' : ''}`}
                onClick={() => setPaymentMethod('netbanking')}
              >
                <ShieldCheck size={20} style={{ color: '#7C3AED' }} />
                <div style={{ textAlign: 'left' }}>
                  <div style={{ fontSize: '13px', fontWeight: 700 }}>NetBanking</div>
                  <div style={{ fontSize: '11px', color: '#6B7280' }}>All major banks</div>
                </div>
              </button>

              {/* Crypto */}
              <button
                type="button"
                className={`payment-option-card ${paymentMethod === 'crypto' ? 'selected' : ''}`}
                onClick={() => setPaymentMethod('crypto')}
              >
                <TetherUsdtIcon size={20} />
                <div style={{ textAlign: 'left' }}>
                  <div style={{ fontSize: '13px', fontWeight: 700 }}>USDT / Crypto</div>
                  <div style={{ fontSize: '11px', color: '#6B7280' }}>Web3 & Stablecoins</div>
                </div>
              </button>
            </div>
          </div>

          {errorMsg && (
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              color: '#DC2626',
              fontSize: '13px',
              padding: '10px 14px',
              background: '#FEE2E2',
              borderRadius: '8px',
              marginBottom: '14px'
            }}>
              <AlertCircle size={16} />
              <span>{errorMsg}</span>
            </div>
          )}

          {/* Price Breakdown */}
          <div className="checkout-summary-box">
            <div className="summary-line">
              <span>{product.title}</span>
              <span>{currency.symbol}{basePrice.toFixed(0)}</span>
            </div>
            <div className="summary-line">
              <span>Instant Digital Dispatch</span>
              <span style={{ color: '#059669', fontWeight: 700 }}>FREE</span>
            </div>
            <div className="summary-line">
              <span>30-Day Guarantee</span>
              <span style={{ color: '#059669', fontWeight: 700 }}>INCLUDED</span>
            </div>
            <div className="summary-divider" />
            <div className="summary-line total-line">
              <span>Total Payable</span>
              <span>{currency.symbol}{totalPrice.toFixed(0)}</span>
            </div>
          </div>

          {/* Pay Button */}
          <button
            className="btn-checkout-primary"
            onClick={handlePay}
            disabled={isProcessing}
            style={{ marginTop: '20px' }}
          >
            {isProcessing ? (
              <>
                <Loader2 size={18} className="spin-animation" />
                <span>Processing Order...</span>
              </>
            ) : (
              <>
                <Lock size={16} />
                <span>Pay {currency.symbol}{totalPrice.toFixed(0)} & Reveal Credentials</span>
              </>
            )}
          </button>

          <p style={{ textAlign: 'center', fontSize: '11.5px', color: '#6B7280', marginTop: '12px' }}>
            🔒 256-bit SSL encrypted. 30-day money-back guarantee.
          </p>
        </div>
      </div>
    </div>
  );
}
