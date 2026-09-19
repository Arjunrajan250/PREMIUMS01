import React, { useState } from 'react';
import { X, ShieldCheck, Wallet, Check, AlertCircle, Loader2, Lock } from 'lucide-react';
import { CURRENCIES } from '../data/mockData';
import { VisaMastercardIcon, TetherUsdtIcon, BitcoinIcon, PayPalIcon, GameMonogram } from './Icons';

export default function CheckoutModal({
  product,
  selectedCurrency,
  walletBalance,
  onClose,
  onCompleteOrder
}) {
  const [paymentMethod, setPaymentMethod] = useState('wallet');
  const [includeInsurance, setIncludeInsurance] = useState(true);
  const [isProcessing, setIsProcessing] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  if (!product) return null;

  const currency = CURRENCIES[selectedCurrency];
  const basePrice = product.price * currency.rate;
  const insurancePrice = includeInsurance ? 2.99 * currency.rate : 0;
  const platformFee = (product.price * 0.02) * currency.rate; // 2% escrow protocol fee
  const totalPrice = basePrice + insurancePrice + platformFee;

  const canPayWithWallet = walletBalance * currency.rate >= totalPrice;

  const handlePay = () => {
    setErrorMsg('');
    if (paymentMethod === 'wallet' && !canPayWithWallet) {
      setErrorMsg('Insufficient account balance. Please top up or select an alternative payment rail.');
      return;
    }

    setIsProcessing(true);

    setTimeout(() => {
      setIsProcessing(false);
      const newOrder = {
        orderId: 'NL-' + Math.floor(100000 + Math.random() * 900000),
        product: product,
        totalAmount: totalPrice,
        currency: selectedCurrency,
        paymentMethod: paymentMethod,
        insurance: includeInsurance,
        timestamp: new Date().toISOString(),
        escrowStatus: 'held', // 'held' | 'released' | 'disputed'
        sellerChat: [
          { sender: 'system', text: `VaultShield™ Escrow commitment secured: ${currency.symbol}${totalPrice.toFixed(2)}. Automated credentials dispatched.` },
          { sender: 'seller', text: `Hello, thank you for securing ${product.title}. The credentials have been auto-dispatched to your VaultShield panel above.` },
          { sender: 'seller', text: `Please test login within your warranty window. Let me know here if you have any questions!` }
        ]
      };
      onCompleteOrder(newOrder, totalPrice / currency.rate);
    }, 1800);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-card" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '600px' }}>
        <div className="modal-header">
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <ShieldCheck size={20} style={{ color: 'var(--emerald-glow)' }} />
            <span className="modal-title">VaultShield™ Secure Escrow Checkout</span>
          </div>
          <button className="modal-close-btn" onClick={onClose} disabled={isProcessing}>
            <X size={18} />
          </button>
        </div>

        <div className="modal-body">
          {/* Item Mini Card */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '14px',
            padding: '14px',
            background: 'var(--bg-card)',
            borderRadius: 'var(--radius-md)',
            border: '1px solid var(--border-subtle)',
            marginBottom: '20px'
          }}>
            <GameMonogram code="PRO" />
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: '11px', color: 'var(--violet-light)', fontWeight: 700 }}>
                {product.game}
              </div>
              <div style={{ fontSize: '14px', fontWeight: 700, color: 'var(--text-primary)' }}>
                {product.title}
              </div>
              <div style={{ fontSize: '12px', color: 'var(--text-muted)' }}>
                Seller: {product.seller.name} • {product.deliverySpeed}
              </div>
            </div>
          </div>

          {/* Payment Method Selector */}
          <div style={{ marginBottom: '20px' }}>
            <label className="filter-label">Select Settlement Method</label>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '10px' }}>
              {/* Wallet */}
              <div
                onClick={() => setPaymentMethod('wallet')}
                style={{
                  padding: '12px',
                  borderRadius: 'var(--radius-md)',
                  background: paymentMethod === 'wallet' ? '#F5F3FF' : '#FFFFFF',
                  border: paymentMethod === 'wallet' ? '1.5px solid var(--violet-bright)' : '1px solid var(--border-medium)',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  boxShadow: 'var(--shadow-sm)'
                }}
              >
                <div style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '6px',
                  background: '#ECFDF5',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--emerald-glow)'
                }}>
                  <Wallet size={18} />
                </div>
                <div>
                  <div style={{ fontSize: '13px', fontWeight: 700 }}>Nexus Balance</div>
                  <div style={{ fontSize: '11px', color: canPayWithWallet ? 'var(--emerald-glow)' : 'var(--rose-primary)' }}>
                    Bal: {currency.symbol}{(walletBalance * currency.rate).toFixed(2)}
                  </div>
                </div>
              </div>

              {/* Credit / Debit Card */}
              <div
                onClick={() => setPaymentMethod('card')}
                style={{
                  padding: '12px',
                  borderRadius: 'var(--radius-md)',
                  background: paymentMethod === 'card' ? '#F5F3FF' : '#FFFFFF',
                  border: paymentMethod === 'card' ? '1.5px solid var(--violet-bright)' : '1px solid var(--border-medium)',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  boxShadow: 'var(--shadow-sm)'
                }}
              >
                <VisaMastercardIcon size={20} />
                <div>
                  <div style={{ fontSize: '13px', fontWeight: 700 }}>Credit / Debit Card</div>
                  <div style={{ fontSize: '11px', color: 'var(--text-muted)' }}>Visa, Mastercard, Amex</div>
                </div>
              </div>

              {/* Crypto */}
              <div
                onClick={() => setPaymentMethod('crypto')}
                style={{
                  padding: '12px',
                  borderRadius: 'var(--radius-md)',
                  background: paymentMethod === 'crypto' ? '#F5F3FF' : '#FFFFFF',
                  border: paymentMethod === 'crypto' ? '1.5px solid var(--violet-bright)' : '1px solid var(--border-medium)',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  boxShadow: 'var(--shadow-sm)'
                }}
              >
                <TetherUsdtIcon size={24} />
                <div>
                  <div style={{ fontSize: '13px', fontWeight: 700 }}>USDT / Bitcoin</div>
                  <div style={{ fontSize: '11px', color: 'var(--text-muted)' }}>TRC-20 / ERC-20 (Instant)</div>
                </div>
              </div>

              {/* PayPal */}
              <div
                onClick={() => setPaymentMethod('paypal')}
                style={{
                  padding: '12px',
                  borderRadius: 'var(--radius-md)',
                  background: paymentMethod === 'paypal' ? '#F5F3FF' : '#FFFFFF',
                  border: paymentMethod === 'paypal' ? '1.5px solid var(--violet-bright)' : '1px solid var(--border-medium)',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  boxShadow: 'var(--shadow-sm)'
                }}
              >
                <PayPalIcon size={24} />
                <div>
                  <div style={{ fontSize: '13px', fontWeight: 700 }}>PayPal Checkout</div>
                  <div style={{ fontSize: '11px', color: 'var(--text-muted)' }}>Buyer Protection Verified</div>
                </div>
              </div>
            </div>
          </div>

          {/* Extended Protection */}
          <div
            onClick={() => setIncludeInsurance(!includeInsurance)}
            style={{
              padding: '12px 16px',
              borderRadius: 'var(--radius-md)',
              background: includeInsurance ? '#ECFDF5' : '#FFFFFF',
              border: includeInsurance ? '1.5px solid #A7F3D0' : '1px solid var(--border-medium)',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: '20px',
              boxShadow: 'var(--shadow-sm)'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div style={{
                width: '20px',
                height: '20px',
                borderRadius: '4px',
                background: includeInsurance ? 'var(--emerald-primary)' : '#E2E8F0',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#fff'
              }}>
                {includeInsurance && <Check size={14} />}
              </div>
              <div>
                <div style={{ fontSize: '13px', fontWeight: 700, color: 'var(--text-primary)' }}>
                  VaultShield™ Extended Asset Warranty (+{currency.symbol}{(2.99 * currency.rate).toFixed(2)})
                </div>
                <div style={{ fontSize: '11px', color: 'var(--text-secondary)' }}>
                  Guaranteed asset compensation in case of post-trade developer clawbacks
                </div>
              </div>
            </div>
          </div>

          {/* Price Breakdown */}
          <div style={{
            background: '#F8FAFC',
            padding: '14px',
            borderRadius: 'var(--radius-md)',
            border: '1px solid var(--border-subtle)',
            marginBottom: '16px'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px', color: 'var(--text-secondary)', marginBottom: '6px' }}>
              <span>Asset Settlement Base:</span>
              <span>{currency.symbol}{basePrice.toFixed(2)}</span>
            </div>
            {includeInsurance && (
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px', color: 'var(--text-secondary)', marginBottom: '6px' }}>
                <span>VaultShield™ Extended Warranty:</span>
                <span>+{currency.symbol}{insurancePrice.toFixed(2)}</span>
              </div>
            )}
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px', color: 'var(--text-secondary)', marginBottom: '8px' }}>
              <span>Smart Escrow Protocol Fee (2%):</span>
              <span>+{currency.symbol}{platformFee.toFixed(2)}</span>
            </div>
            <div style={{ borderTop: '1px solid var(--border-subtle)', paddingTop: '8px', display: 'flex', justifyContent: 'space-between', fontSize: '16px', fontWeight: 800 }}>
              <span>Total Locked in Escrow:</span>
              <span style={{ color: 'var(--emerald-glow)' }}>{currency.symbol}{totalPrice.toFixed(2)}</span>
            </div>
          </div>

          {errorMsg && (
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              padding: '10px 14px',
              background: 'rgba(244, 63, 94, 0.1)',
              border: '1px solid rgba(244, 63, 94, 0.3)',
              borderRadius: 'var(--radius-sm)',
              color: '#fda4af',
              fontSize: '13px',
              marginBottom: '14px'
            }}>
              <AlertCircle size={16} />
              <span>{errorMsg}</span>
            </div>
          )}
        </div>

        <div className="modal-footer">
          <button className="btn btn-outline" onClick={onClose} disabled={isProcessing}>
            Cancel
          </button>
          <button className="btn btn-emerald btn-lg" onClick={handlePay} disabled={isProcessing} style={{ minWidth: '190px' }}>
            {isProcessing ? (
              <>
                <Loader2 size={18} className="pulse-animation" />
                <span>Securing Vault Escrow...</span>
              </>
            ) : (
              <>
                <Lock size={16} />
                <span>Authorize {currency.symbol}{totalPrice.toFixed(2)}</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
