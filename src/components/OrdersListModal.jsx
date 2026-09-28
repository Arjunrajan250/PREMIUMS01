import React from 'react';
import { X, PackageCheck, ArrowRight } from 'lucide-react';
import { CURRENCIES } from '../data/mockData';
import { ProductLogo } from './Icons';

export default function OrdersListModal({ orders, onClose, onSelectOrder, selectedCurrency }) {
  const currency = CURRENCIES[selectedCurrency] || CURRENCIES.INR;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-dialog" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '640px' }}>
        <div className="modal-header">
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <PackageCheck size={20} style={{ color: '#111111' }} />
            <h3 style={{ fontSize: '18px', fontWeight: 800 }}>Your Orders & Subscriptions ({orders.length})</h3>
          </div>
          <button className="modal-close-btn" onClick={onClose}>
            <X size={18} />
          </button>
        </div>

        <div className="modal-body">
          {orders.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '40px 0', color: '#6B7280' }}>
              <div style={{
                width: '48px',
                height: '48px',
                borderRadius: '50%',
                background: '#F3F4F6',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 12px',
                color: '#6B7280'
              }}>
                <PackageCheck size={24} />
              </div>
              <h4 style={{ color: '#111111', marginBottom: '4px', fontWeight: 700 }}>No Active Orders</h4>
              <p style={{ fontSize: '13px' }}>Your activated subscriptions and credentials will appear here.</p>
            </div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {orders.map((order) => {
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
                      padding: '14px 16px',
                      background: '#FAF8F3',
                      border: '1px solid #EAE5DB',
                      borderRadius: '12px',
                      cursor: 'pointer',
                      transition: 'all 0.2s'
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                      <ProductLogo type={order.product?.iconType} size={36} />
                      <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                          <span style={{ fontSize: '14px', fontWeight: 800 }}>
                            #{order.orderId}
                          </span>
                          <span style={{
                            fontSize: '10.5px',
                            fontWeight: 700,
                            padding: '2px 7px',
                            borderRadius: '9999px',
                            background: '#DCFCE7',
                            color: '#16A34A'
                          }}>
                            Instant Dispatched
                          </span>
                        </div>
                        <div style={{ fontSize: '12.5px', color: '#6B7280', marginTop: '2px' }}>
                          {order.product?.title}
                        </div>
                      </div>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                      <div style={{ textAlign: 'right' }}>
                        <div style={{ fontSize: '14px', fontWeight: 800, color: '#111111' }}>
                          {currency.symbol}{order.totalAmount?.toFixed(0)}
                        </div>
                      </div>
                      <ArrowRight size={16} color="#111111" />
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
