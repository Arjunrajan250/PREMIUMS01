import React from 'react';
import { ShieldCheck, Lock, Zap, CheckCircle2, Award, ArrowUpRight } from 'lucide-react';
import { HOW_ESCROW_WORKS_STEPS } from '../data/mockData';

const STEP_ICONS = {
  Lock: Lock,
  Zap: Zap,
  ShieldCheck: ShieldCheck,
  CheckCircle2: CheckCircle2
};

export default function VaultShieldSection({ onOpenSellerModal, onOpenEscrowInfo }) {
  return (
    <section style={{
      margin: '64px 0',
      padding: '48px 0',
      background: 'radial-gradient(ellipse at 50% 50%, rgba(139, 92, 246, 0.08) 0%, transparent 80%)',
      borderTop: '1px solid var(--border-subtle)',
      borderBottom: '1px solid var(--border-subtle)'
    }}>
      <div className="container">
        <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 40px' }}>
          <div className="badge badge-escrow" style={{ marginBottom: '12px' }}>
            <ShieldCheck size={14} />
            <span>VaultShield™ Protocol Standards</span>
          </div>
          <h2 style={{ fontSize: '32px', fontWeight: 800, lineHeight: 1.25, marginBottom: '12px' }}>
            Institutional Security for Peer-to-Peer Gaming Trades
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '15px' }}>
            Unlike open-market forums where buyers assume all delivery risk, NexusLoot isolates payments in a multi-signature smart escrow vault until you confirm the asset operates as advertised.
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '20px',
          marginBottom: '40px'
        }}>
          {HOW_ESCROW_WORKS_STEPS.map((step) => {
            const IconComp = STEP_ICONS[step.iconName] || ShieldCheck;

            return (
              <div
                key={step.step}
                style={{
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: 'var(--radius-lg)',
                  padding: '24px',
                  position: 'relative',
                  overflow: 'hidden'
                }}
              >
                <div style={{
                  position: 'absolute',
                  top: '12px',
                  right: '16px',
                  fontSize: '24px',
                  fontWeight: 900,
                  color: 'rgba(255, 255, 255, 0.05)',
                  fontFamily: 'var(--font-mono)'
                }}>
                  {step.step}
                </div>

                <div style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '10px',
                  background: 'rgba(139, 92, 246, 0.12)',
                  border: '1px solid var(--border-violet)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--violet-light)',
                  marginBottom: '16px'
                }}>
                  <IconComp size={22} />
                </div>

                <h3 style={{ fontSize: '16px', fontWeight: 700, marginBottom: '8px', color: 'var(--text-primary)' }}>
                  {step.title}
                </h3>

                <p style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                  {step.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA Banner */}
        <div style={{
          background: 'linear-gradient(135deg, #F5F3FF 0%, #ECFDF5 100%)',
          border: '1px solid #DDD6FE',
          borderRadius: 'var(--radius-lg)',
          padding: '32px',
          boxShadow: 'var(--shadow-card)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '20px'
        }}>
          <div>
            <h3 style={{ fontSize: '20px', fontWeight: 800, marginBottom: '6px' }}>
              Operate as a Verified Exchange Merchant
            </h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '14px' }}>
              Monetize gaming inventories with competitive 5% transaction fees, automated key dispatch, and chargeback protection.
            </p>
          </div>

          <div style={{ display: 'flex', gap: '12px' }}>
            <button className="btn btn-primary" onClick={onOpenSellerModal}>
              <span>Apply for Merchant Portal</span>
            </button>
            <button className="btn btn-outline" onClick={onOpenEscrowInfo}>
              <span>Review Escrow Policies</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
