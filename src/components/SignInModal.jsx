import React, { useState } from 'react';
import { X, Mail, Lock, ArrowRight, CheckCircle2 } from 'lucide-react';
import { NexaLogo } from './Icons';

export default function SignInModal({ isOpen, onClose, onLoginSuccess }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [signedIn, setSignedIn] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setSignedIn(true);
      setTimeout(() => {
        if (onLoginSuccess) onLoginSuccess(email);
        onClose();
        setSignedIn(false);
      }, 1200);
    }
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-dialog auth-dialog" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose} aria-label="Close">
          <X size={20} />
        </button>

        <div style={{ textAlign: 'center', marginBottom: '24px' }}>
          <div style={{ display: 'inline-block', marginBottom: '12px' }}>
            <NexaLogo size={36} />
          </div>
          <h3 style={{ fontSize: '22px', fontWeight: 800, color: '#111111' }}>
            Welcome to Nexa Digitals
          </h3>
          <p style={{ fontSize: '13.5px', color: '#6B7280', marginTop: '4px' }}>
            Sign in to track orders, manage active subscriptions & fast checkout.
          </p>
        </div>

        {signedIn ? (
          <div style={{ textAlign: 'center', padding: '30px 20px' }}>
            <div style={{
              width: '56px',
              height: '56px',
              borderRadius: '50%',
              background: '#DCFCE7',
              color: '#16A34A',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 16px'
            }}>
              <CheckCircle2 size={32} />
            </div>
            <h4 style={{ fontSize: '18px', fontWeight: 700 }}>Signed In Successfully!</h4>
            <p style={{ fontSize: '13px', color: '#6B7280', marginTop: '4px' }}>
              Welcome back, {email.split('@')[0]}
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            <div>
              <label style={{ display: 'block', fontSize: '12px', fontWeight: 700, color: '#374151', marginBottom: '6px' }}>
                Email Address
              </label>
              <div style={{ position: 'relative' }}>
                <Mail size={16} style={{ position: 'absolute', left: '14px', top: '14px', color: '#9CA3AF' }} />
                <input
                  type="email"
                  required
                  placeholder="your.email@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  style={{
                    width: '100%',
                    height: '44px',
                    padding: '0 16px 0 42px',
                    borderRadius: '10px',
                    border: '1px solid #D1D5DB',
                    fontSize: '14px',
                    outline: 'none',
                    background: '#F9FAFB'
                  }}
                />
              </div>
            </div>

            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
                <label style={{ fontSize: '12px', fontWeight: 700, color: '#374151' }}>
                  Password
                </label>
                <a href="#forgot" onClick={(e) => e.preventDefault()} style={{ fontSize: '12px', color: '#111111', fontWeight: 600 }}>
                  Forgot?
                </a>
              </div>
              <div style={{ position: 'relative' }}>
                <Lock size={16} style={{ position: 'absolute', left: '14px', top: '14px', color: '#9CA3AF' }} />
                <input
                  type="password"
                  required
                  placeholder="••••••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  style={{
                    width: '100%',
                    height: '44px',
                    padding: '0 16px 0 42px',
                    borderRadius: '10px',
                    border: '1px solid #D1D5DB',
                    fontSize: '14px',
                    outline: 'none',
                    background: '#F9FAFB'
                  }}
                />
              </div>
            </div>

            <button
              type="submit"
              className="btn-signin"
              style={{
                width: '100%',
                height: '46px',
                marginTop: '10px',
                justifyContent: 'center',
                fontSize: '15px'
              }}
            >
              <span>Continue</span>
              <ArrowRight size={16} />
            </button>

            <div style={{ textAlign: 'center', marginTop: '12px' }}>
              <span style={{ fontSize: '12.5px', color: '#6B7280' }}>
                Don't have an account? <span style={{ color: '#111111', fontWeight: 700, cursor: 'pointer' }}>Create one</span>
              </span>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
