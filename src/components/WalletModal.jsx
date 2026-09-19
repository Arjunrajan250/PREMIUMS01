import React, { useState } from 'react';
import { X, Wallet, Plus, ArrowUpRight, ShieldCheck, Check, CreditCard } from 'lucide-react';
import { CURRENCIES } from '../data/mockData';

export default function WalletModal({ walletBalance, onTopUp, selectedCurrency, onClose }) {
  const [amount, setAmount] = useState(50);
  const [isDone, setIsDone] = useState(false);

  const currency = CURRENCIES[selectedCurrency];
  const convertedBal = (walletBalance * currency.rate).toFixed(2);

  const handleDeposit = () => {
    const usdAdd = Number(amount) / currency.rate;
    onTopUp(usdAdd);
    setIsDone(true);
    setTimeout(() => {
      setIsDone(false);
      onClose();
    }, 1000);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-card" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '480px' }}>
        <div className="modal-header">
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Wallet size={20} style={{ color: 'var(--emerald-glow)' }} />
            <span className="modal-title">NexusLoot Treasury Wallet</span>
          </div>
          <button className="modal-close-btn" onClick={onClose}>
            <X size={18} />
          </button>
        </div>

        <div className="modal-body">
          {/* Balance Display */}
          <div style={{
            textAlign: 'center',
            padding: '24px',
            background: 'rgba(16, 185, 129, 0.08)',
            border: '1px solid rgba(16, 185, 129, 0.25)',
            borderRadius: 'var(--radius-lg)',
            marginBottom: '24px'
          }}>
            <div style={{ fontSize: '11px', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '6px' }}>
              Available Liquidity Balance
            </div>
            <div style={{ fontSize: '36px', fontWeight: 900, color: 'var(--emerald-glow)', fontFamily: 'var(--font-mono)' }}>
              {currency.symbol}{convertedBal}
            </div>
            <div style={{ fontSize: '12px', color: 'var(--text-secondary)', marginTop: '4px' }}>
              Allocated for instant 1-click escrow settlement
            </div>
          </div>

          {/* Quick Amounts */}
          <label className="filter-label">Quick Top-Up Allocation ({currency.symbol})</label>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '8px', marginBottom: '16px' }}>
            {[25, 50, 100, 250].map((val) => {
              const convertedVal = Math.round(val * currency.rate);
              const isSelected = amount === convertedVal;
              return (
                <button
                  key={val}
                  type="button"
                  className={`btn ${isSelected ? 'btn-primary' : 'btn-outline'}`}
                  style={{ padding: '8px 0', fontSize: '13px' }}
                  onClick={() => setAmount(convertedVal)}
                >
                  {currency.symbol}{convertedVal}
                </button>
              );
            })}
          </div>

          {/* Custom Input */}
          <div style={{ marginBottom: '20px' }}>
            <label className="filter-label">Custom Deposit Value</label>
            <input
              type="number"
              className="price-input"
              value={amount}
              onChange={(e) => setAmount(Number(e.target.value))}
              min="1"
            />
          </div>

          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            fontSize: '12px',
            color: 'var(--text-muted)',
            padding: '10px 14px',
            background: 'rgba(255,255,255,0.02)',
            borderRadius: 'var(--radius-sm)'
          }}>
            <ShieldCheck size={16} style={{ color: 'var(--emerald-glow)' }} />
            <span>Treasury balances can be withdrawn or returned to source without friction.</span>
          </div>
        </div>

        <div className="modal-footer">
          <button className="btn btn-outline" onClick={onClose}>
            Cancel
          </button>
          <button className="btn btn-emerald" onClick={handleDeposit} disabled={isDone}>
            {isDone ? (
              <>
                <Check size={16} />
                <span>Deposit Confirmed</span>
              </>
            ) : (
              <>
                <Plus size={16} />
                <span>Allocate {currency.symbol}{amount} to Wallet</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
