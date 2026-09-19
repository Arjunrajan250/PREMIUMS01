import React from 'react';
import { X, PackageCheck, ArrowRight, ShieldCheck, Clock } from 'lucide-react';
import { CURRENCIES, POPULAR_GAMES } from '../data/mockData';
import { GameMonogram } from './Icons';

export default function OrdersListModal({ orders, onClose, onSelectOrder, selectedCurrency }) {
  const currency = CURRENCIES[selectedCurrency] || CURRENCIES.USD;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-card" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '660px' }}>
        <div className="modal-header">
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <PackageCheck size={20} style={{ color: 'var(--violet-bright)' }} />
            <span className="modal-title">Escrow Transactions & Portfolios ({orders.length})</span>
          </div>
          <button className="modal-close-btn" onClick={onClose}>
            <X size={18} />
          </button>
        </div>

        <div className="modal-body">
          {orders.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '40px 0', color: 'var(--text-muted)' }}>
              <div style={{
                width: '48px',
                height: '48px',
                borderRadius: '50%',
                background: 'rgba(255, 255, 255, 0.05)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 12px',
                color: 'var(--text-muted)'
              }}>
                <PackageCheck size={24} />
              </div>
              <h4 style={{ color: 'var(--text-primary)', marginBottom: '4px' }}>No Active Transactions</h4>
              <p style={{ fontSize: '13px' }}>Explore verified offerings on the exchange. Active escrow orders will populate here.</p>
            </div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {orders.map((order) => {
                const gameData = POPULAR_GAMES.find((g) => g.id === order.product.gameId) || { code: 'VAL' };

                return (
                  <div
                    key={order.orderId}
                    onClick={() => {
                      onClose();
                      onSelectOrder(order);
                    }}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '14px 18px',
                      background: 'var(--bg-card)',
                      border: '1px solid var(--border-subtle)',
                      borderRadius: 'var(--radius-md)',
                      cursor: 'pointer',
                      transition: 'all 0.2s'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = 'var(--violet-bright)';
                      e.currentTarget.style.transform = 'translateY(-1px)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = 'var(--border-subtle)';
                      e.currentTarget.style.transform = 'translateY(0)';
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                      <GameMonogram code={gameData.code} />
                      <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                          <span style={{ fontSize: '14px', fontWeight: 700, fontFamily: 'var(--font-mono)' }}>
                            #{order.orderId}
                          </span>
                          <span className={`badge ${order.escrowStatus === 'released' ? 'badge-instant' : 'badge-gold'}`} style={{ fontSize: '10px' }}>
                            {order.escrowStatus === 'released' ? 'Settled' : 'In Escrow'}
                          </span>
                        </div>
                        <div style={{ fontSize: '12px', color: 'var(--text-muted)', marginTop: '2px' }}>
                          {order.product.title.slice(0, 48)}...
                        </div>
                      </div>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                      <div style={{ textAlign: 'right' }}>
                        <div style={{ fontSize: '14px', fontWeight: 700, color: 'var(--text-primary)', fontFamily: 'var(--font-mono)' }}>
                          {currency.symbol}{(order.totalAmount).toFixed(2)}
                        </div>
                        <div style={{ fontSize: '11px', color: 'var(--text-muted)' }}>
                          {order.product.seller.name}
                        </div>
                      </div>
                      <ArrowRight size={16} style={{ color: 'var(--violet-light)' }} />
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        <div className="modal-footer">
          <button className="btn btn-outline" onClick={onClose}>
            Close Portfolio
          </button>
        </div>
      </div>
    </div>
  );
}
