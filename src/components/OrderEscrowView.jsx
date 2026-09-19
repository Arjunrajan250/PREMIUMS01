import React, { useState } from 'react';
import { X, ShieldCheck, CheckCircle2, Copy, Check, Send, AlertTriangle, MessageSquare, Lock, Key } from 'lucide-react';
import { CURRENCIES } from '../data/mockData';

export default function OrderEscrowView({ order, onClose, onReleaseEscrow, onDisputeOrder }) {
  if (!order) return null;

  const [copiedKey, setCopiedKey] = useState(null);
  const [messages, setMessages] = useState(order.sellerChat || []);
  const [inputText, setInputText] = useState('');
  const [isSending, setIsSending] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const product = order.product;
  const creds = product.instantCredentials || {};
  const currency = CURRENCIES[order.currency] || CURRENCIES.USD;

  const handleCopy = (key, text) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!inputText.trim() || isSending) return;

    const userMsg = { sender: 'buyer', text: inputText.trim() };
    const newChat = [...messages, userMsg];
    setMessages(newChat);
    setInputText('');
    setIsSending(true);

    // Simulated Seller response
    setTimeout(() => {
      let sellerReply = "All delivery parameters are confirmed on our terminal. Please proceed with account verification.";
      const lower = userMsg.text.toLowerCase();
      if (lower.includes('email') || lower.includes('mail')) {
        sellerReply = "To complete email transfer: Access the game portal settings, initiate Email Change, and use the recovery webmail inbox credentials provided in your VaultShield panel above.";
      } else if (lower.includes('password') || lower.includes('login')) {
        sellerReply = "Ensure there are no leading or trailing whitespace characters when pasting your password. Credentials are case-sensitive.";
      } else if (lower.includes('code') || lower.includes('2fa') || lower.includes('pin')) {
        sellerReply = "If 2FA authentication is requested, please refer to the Security PIN in your credentials box or check the associated recovery inbox.";
      }

      setMessages((prev) => [...prev, { sender: 'seller', text: sellerReply }]);
      setIsSending(false);
    }, 1200);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-card" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '780px' }}>
        {/* Header */}
        <div className="modal-header">
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div style={{
              width: '10px',
              height: '10px',
              borderRadius: '50%',
              background: order.escrowStatus === 'released' ? 'var(--emerald-primary)' : 'var(--amber-primary)',
              boxShadow: '0 0 10px rgba(16, 185, 129, 0.6)'
            }} />
            <span className="modal-title">Escrow Settlement #{order.orderId}</span>
            <span className={`badge ${order.escrowStatus === 'released' ? 'badge-instant' : 'badge-gold'}`}>
              {order.escrowStatus === 'released' ? 'Settled & Released' : 'Vault Escrow Active'}
            </span>
          </div>
          <button className="modal-close-btn" onClick={onClose}>
            <X size={18} />
          </button>
        </div>

        <div className="modal-body">
          {/* Escrow Progress Timeline */}
          <div className="escrow-timeline">
            <div className={`timeline-step ${order.escrowStatus !== 'disputed' ? 'active' : ''}`}>
              <div className="step-circle">1</div>
              <div className="step-label">Escrow Locked</div>
            </div>
            <div style={{ flex: 1, height: '2px', background: 'var(--emerald-primary)', margin: '0 8px' }} />
            <div className="timeline-step active">
              <div className="step-circle">2</div>
              <div className="step-label">Assets Dispatched</div>
            </div>
            <div style={{ flex: 1, height: '2px', background: order.escrowStatus === 'released' ? 'var(--emerald-primary)' : 'rgba(255,255,255,0.1)', margin: '0 8px' }} />
            <div className={`timeline-step ${order.escrowStatus === 'released' ? 'active' : ''}`}>
              <div className="step-circle">3</div>
              <div className="step-label">Buyer Confirmed</div>
            </div>
          </div>

          {/* Delivery Credentials Box */}
          <div className="credentials-box">
            <div className="credentials-header">
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Key size={18} style={{ color: 'var(--emerald-glow)' }} />
                <span style={{ fontWeight: 700, fontSize: '14px', color: 'var(--text-primary)' }}>
                  VaultShield™ Dispatched Credentials & Access Tokens
                </span>
              </div>
              <button
                className="btn btn-ghost btn-sm"
                onClick={() => setShowPassword(!showPassword)}
                style={{ fontSize: '11px' }}
              >
                {showPassword ? 'Mask Passwords' : 'Show Passwords'}
              </button>
            </div>

            {Object.entries(creds).map(([key, val]) => {
              const isSecret = key.toLowerCase().includes('pass') || key.toLowerCase().includes('pin');
              const displayVal = isSecret && !showPassword ? '••••••••••••••••' : String(val);

              return (
                <div key={key} className="credential-field">
                  <span style={{ color: 'var(--text-muted)', textTransform: 'capitalize' }}>
                    {key.replace(/([A-Z])/g, ' $1')}:
                  </span>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <span style={{ color: 'var(--text-primary)', fontWeight: 600 }}>{displayVal}</span>
                    <button
                      className="copy-btn"
                      onClick={() => handleCopy(key, String(val))}
                      title="Copy to clipboard"
                    >
                      {copiedKey === key ? <Check size={14} style={{ color: 'var(--emerald-glow)' }} /> : <Copy size={14} />}
                      <span>{copiedKey === key ? 'Copied' : 'Copy'}</span>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Interactive Seller Chat */}
          <div style={{ marginBottom: '14px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '8px', fontSize: '13px', fontWeight: 700 }}>
              <MessageSquare size={16} style={{ color: 'var(--violet-bright)' }} />
              <span>Direct Settlement Channel with {product.seller.name}</span>
            </div>

            <div className="chat-window">
              <div className="chat-messages">
                {messages.map((m, idx) => (
                  <div key={idx} className={`chat-bubble ${m.sender}`}>
                    {m.sender === 'system' && <span style={{ fontWeight: 700, color: 'var(--violet-light)' }}>[VaultShield Escrow] </span>}
                    {m.text}
                  </div>
                ))}
              </div>

              <form onSubmit={handleSendMessage} className="chat-input-row">
                <input
                  type="text"
                  className="chat-input"
                  placeholder="Transmit message to seller..."
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                />
                <button type="submit" className="btn btn-primary btn-sm" disabled={isSending}>
                  <Send size={14} />
                  <span>Send</span>
                </button>
              </form>
            </div>
          </div>

          {/* Escrow Action Bar */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '16px',
            background: 'rgba(255, 255, 255, 0.02)',
            border: '1px solid var(--border-subtle)',
            borderRadius: 'var(--radius-md)',
            flexWrap: 'wrap',
            gap: '12px'
          }}>
            <div>
              <div style={{ fontSize: '13px', fontWeight: 700, color: 'var(--text-primary)' }}>
                {order.escrowStatus === 'released' ? 'Escrow Settlement Completed' : 'Verification Period Active'}
              </div>
              <div style={{ fontSize: '11px', color: 'var(--text-muted)' }}>
                {order.escrowStatus === 'released'
                  ? 'Funds have been successfully settled to the merchant. Transaction closed.'
                  : 'Authorize release only after verifying login credentials and in-game attributes.'}
              </div>
            </div>

            <div style={{ display: 'flex', gap: '8px' }}>
              {order.escrowStatus !== 'released' && (
                <>
                  <button
                    className="btn btn-outline btn-sm"
                    onClick={() => onDisputeOrder(order.orderId)}
                    style={{ color: '#fda4af', borderColor: 'rgba(244, 63, 94, 0.3)' }}
                  >
                    <AlertTriangle size={14} />
                    <span>Open Dispute</span>
                  </button>

                  <button
                    className="btn btn-emerald btn-sm"
                    onClick={() => onReleaseEscrow(order.orderId)}
                  >
                    <CheckCircle2 size={14} />
                    <span>Confirm & Release Escrow</span>
                  </button>
                </>
              )}
            </div>
          </div>
        </div>

        <div className="modal-footer">
          <button className="btn btn-outline" onClick={onClose}>
            Close Window
          </button>
        </div>
      </div>
    </div>
  );
}
