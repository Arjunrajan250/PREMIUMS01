import React, { useState } from 'react';
import { X, CheckCircle2, Copy, Check, Send, Key, MessageSquare } from 'lucide-react';
import { CURRENCIES } from '../data/mockData';
import { ProductLogo } from './Icons';

export default function OrderEscrowView({ order, onClose }) {
  const [copiedKey, setCopiedKey] = useState(null);
  const [messages, setMessages] = useState(() => order?.sellerChat || []);
  const [inputText, setInputText] = useState('');
  const [isSending, setIsSending] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  if (!order) return null;

  const product = order.product;
  const creds = product.instantCredentials || {};
  const currency = CURRENCIES[order.currency] || CURRENCIES.INR;

  const handleCopy = (key, text) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!inputText.trim() || isSending) return;

    const userMsg = { sender: 'buyer', text: inputText.trim() };
    setMessages((prev) => [...prev, userMsg]);
    setInputText('');
    setIsSending(true);

    setTimeout(() => {
      let reply = "Your credentials have been dispatched and validated. Please check the instructions above.";
      const lower = userMsg.text.toLowerCase();
      if (lower.includes('email') || lower.includes('mail')) {
        reply = "A copy of your activation code and license info has also been sent to your delivery email.";
      } else if (lower.includes('how') || lower.includes('help')) {
        reply = "Simply follow the step-by-step instructions in the credentials box. If you need any assistance, we are right here!";
      }

      setMessages((prev) => [...prev, { sender: 'seller', text: reply }]);
      setIsSending(false);
    }, 1000);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-dialog" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '640px' }}>
        <div className="modal-header">
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div style={{
              width: '10px',
              height: '10px',
              borderRadius: '50%',
              background: '#10B981',
              boxShadow: '0 0 8px rgba(16, 185, 129, 0.6)'
            }} />
            <h3 style={{ fontSize: '17px', fontWeight: 800, color: '#111111' }}>
              Order #{order.orderId}
            </h3>
            <span style={{
              fontSize: '11px',
              fontWeight: 700,
              padding: '2px 8px',
              borderRadius: '9999px',
              background: '#DCFCE7',
              color: '#16A34A'
            }}>
              Instant Dispatched
            </span>
          </div>
          <button className="modal-close-btn" onClick={onClose}>
            <X size={18} />
          </button>
        </div>

        <div className="modal-body">
          {/* Product Mini Header */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '14px',
            padding: '14px',
            background: '#FAF8F3',
            borderRadius: '12px',
            border: '1px solid #EAE5DB',
            marginBottom: '20px'
          }}>
            <ProductLogo type={product.iconType} size={42} />
            <div style={{ flex: 1 }}>
              <h4 style={{ fontSize: '15px', fontWeight: 800, color: '#111111' }}>{product.title}</h4>
              <p style={{ fontSize: '12.5px', color: '#6B7280' }}>
                {product.plan || '1 Month Plan'} • Paid: {currency.symbol}{order.totalAmount.toFixed(0)}
              </p>
            </div>
            <div style={{ textAlign: 'right' }}>
              <span style={{ fontSize: '11px', fontWeight: 700, color: '#059669', display: 'flex', alignItems: 'center', gap: '4px' }}>
                <CheckCircle2 size={14} /> Active
              </span>
            </div>
          </div>

          {/* Credentials Display Box */}
          <div style={{
            background: '#FFFFFF',
            border: '1px solid #E5E7EB',
            borderRadius: '12px',
            padding: '16px',
            marginBottom: '20px'
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: '14px',
              paddingBottom: '10px',
              borderBottom: '1px solid #F3F4F6'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Key size={18} style={{ color: '#059669' }} />
                <span style={{ fontSize: '14px', fontWeight: 800, color: '#111111' }}>
                  Dispatched Credentials & Tokens
                </span>
              </div>
              <button
                onClick={() => setShowPassword(!showPassword)}
                style={{ fontSize: '11.5px', fontWeight: 700, color: '#4B5563' }}
              >
                {showPassword ? 'Hide Passwords' : 'Reveal Passwords'}
              </button>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {Object.entries(creds).map(([k, val]) => {
                const isSecret = k.toLowerCase().includes('pass') || k.toLowerCase().includes('pin');
                const displayVal = isSecret && !showPassword ? '••••••••••••••••' : String(val);

                return (
                  <div key={k} style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '8px 12px',
                    background: '#F9FAFB',
                    borderRadius: '8px',
                    fontSize: '13px'
                  }}>
                    <span style={{ color: '#6B7280', textTransform: 'capitalize', fontWeight: 600 }}>
                      {k.replace(/([A-Z])/g, ' $1')}:
                    </span>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <span style={{ color: '#111111', fontWeight: 700, wordBreak: 'break-all' }}>
                        {displayVal}
                      </span>
                      <button
                        onClick={() => handleCopy(k, String(val))}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '4px',
                          padding: '4px 8px',
                          borderRadius: '6px',
                          background: '#E5E7EB',
                          fontSize: '11px',
                          fontWeight: 700
                        }}
                      >
                        {copiedKey === k ? <Check size={12} style={{ color: '#059669' }} /> : <Copy size={12} />}
                        <span>{copiedKey === k ? 'Copied' : 'Copy'}</span>
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Interactive Chat / Support */}
          <div style={{ marginBottom: '16px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '8px', fontSize: '13px', fontWeight: 700 }}>
              <MessageSquare size={16} />
              <span>Nexa Support & Seller Assistance</span>
            </div>

            <div style={{
              background: '#F9FAFB',
              border: '1px solid #E5E7EB',
              borderRadius: '10px',
              padding: '12px',
              maxHeight: '160px',
              overflowY: 'auto',
              marginBottom: '10px',
              display: 'flex',
              flexDirection: 'column',
              gap: '8px'
            }}>
              {messages.map((m, idx) => (
                <div
                  key={idx}
                  style={{
                    alignSelf: m.sender === 'buyer' ? 'flex-end' : 'flex-start',
                    background: m.sender === 'buyer' ? '#111111' : '#FFFFFF',
                    color: m.sender === 'buyer' ? '#FFFFFF' : '#111111',
                    padding: '8px 12px',
                    borderRadius: '8px',
                    fontSize: '12.5px',
                    maxWidth: '85%',
                    border: m.sender === 'buyer' ? 'none' : '1px solid #E5E7EB'
                  }}
                >
                  {m.text}
                </div>
              ))}
            </div>

            <form onSubmit={handleSendMessage} style={{ display: 'flex', gap: '8px' }}>
              <input
                type="text"
                placeholder="Ask support a question about activation..."
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                style={{
                  flex: 1,
                  height: '38px',
                  padding: '0 12px',
                  borderRadius: '8px',
                  border: '1px solid #D1D5DB',
                  fontSize: '13px',
                  outline: 'none'
                }}
              />
              <button
                type="submit"
                className="btn-signin"
                style={{ height: '38px', padding: '0 16px', fontSize: '13px' }}
                disabled={isSending}
              >
                <Send size={13} />
                <span>Send</span>
              </button>
            </form>
          </div>

          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingTop: '14px',
            borderTop: '1px solid #E5E7EB'
          }}>
            <span style={{ fontSize: '12px', color: '#6B7280' }}>
              🛡️ Covered by 30-Day Nexa Guarantee
            </span>
            <button
              className="btn-signin"
              style={{ height: '38px', padding: '0 20px', fontSize: '13px' }}
              onClick={onClose}
            >
              Done
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
