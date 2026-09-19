import React from 'react';
import { X, ShieldCheck, Lock, RefreshCw, CheckCircle2, AlertTriangle, ShieldAlert, Zap } from 'lucide-react';
import { HOW_ESCROW_WORKS_STEPS } from '../data/mockData';

const STEP_ICONS = {
  Lock: Lock,
  Zap: Zap,
  ShieldCheck: ShieldCheck,
  CheckCircle2: CheckCircle2
};

export default function EscrowExplainerModal({ onClose }) {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-card" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '680px' }}>
        <div className="modal-header">
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <ShieldCheck size={22} style={{ color: 'var(--emerald-glow)' }} />
            <span className="modal-title">VaultShield™ Escrow Protocol Architecture</span>
          </div>
          <button className="modal-close-btn" onClick={onClose}>
            <X size={18} />
          </button>
        </div>

        <div className="modal-body">
          <p style={{ fontSize: '14px', color: 'var(--text-secondary)', marginBottom: '24px', lineHeight: 1.5 }}>
            VaultShield™ is an automated escrow protocol built specifically for digital gaming transactions. 
            Buyer capital and seller assets are placed under cryptographic multi-party authorization to prevent fraud, chargebacks, and account pullbacks.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '24px' }}>
            {HOW_ESCROW_WORKS_STEPS.map((s) => {
              const IconComp = STEP_ICONS[s.iconName] || ShieldCheck;

              return (
                <div
                  key={s.step}
                  style={{
                    display: 'flex',
                    gap: '16px',
                    padding: '16px',
                    background: 'var(--bg-card)',
                    borderRadius: 'var(--radius-md)',
                    border: '1px solid var(--border-subtle)',
                    alignItems: 'flex-start'
                  }}
                >
                  <div style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '8px',
                    background: 'rgba(139, 92, 246, 0.12)',
                    border: '1px solid var(--border-violet)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--violet-light)',
                    flexShrink: 0
                  }}>
                    <IconComp size={20} />
                  </div>
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                      <span style={{ fontSize: '11px', color: 'var(--emerald-glow)', fontWeight: 800 }}>STEP {s.step}</span>
                      <h4 style={{ fontSize: '15px', fontWeight: 700, color: 'var(--text-primary)' }}>{s.title}</h4>
                    </div>
                    <p style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                      {s.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Guarantee Badges */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '12px',
            padding: '16px',
            background: 'rgba(16, 185, 129, 0.06)',
            borderRadius: 'var(--radius-md)',
            border: '1px solid rgba(16, 185, 129, 0.2)'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <CheckCircle2 size={16} style={{ color: 'var(--emerald-glow)' }} />
              <span style={{ fontSize: '12px', fontWeight: 600 }}>100% Capital Refund Guarantee</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <CheckCircle2 size={16} style={{ color: 'var(--emerald-glow)' }} />
              <span style={{ fontSize: '12px', fontWeight: 600 }}>24/7 Human Mediation Desk</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <CheckCircle2 size={16} style={{ color: 'var(--emerald-glow)' }} />
              <span style={{ fontSize: '12px', fontWeight: 600 }}>Anti-Recall Insurance Available</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <CheckCircle2 size={16} style={{ color: 'var(--emerald-glow)' }} />
              <span style={{ fontSize: '12px', fontWeight: 600 }}>KYC-Verified Merchant Network</span>
            </div>
          </div>
        </div>

        <div className="modal-footer">
          <button className="btn btn-primary" onClick={onClose}>
            Acknowledge & Close
          </button>
        </div>
      </div>
    </div>
  );
}
