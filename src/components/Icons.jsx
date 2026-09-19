import React from 'react';

// Professional NexusLoot Precision Vector Emblem
export function NexusLogo({ className = 'logo-shield', size = 38 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 44 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        <linearGradient id="shieldPlate" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#7C3AED" />
          <stop offset="50%" stopColor="#6366F1" />
          <stop offset="100%" stopColor="#059669" />
        </linearGradient>
        <linearGradient id="innerCore" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#1E1B4B" />
          <stop offset="100%" stopColor="#0F172A" />
        </linearGradient>
        <linearGradient id="metallicAcc" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#34D399" />
          <stop offset="100%" stopColor="#60A5FA" />
        </linearGradient>
      </defs>

      {/* Outer Tactical Bezel */}
      <path
        d="M22 3L6 9.5V20.8C6 30.6 12.8 39.5 22 42C31.2 39.5 38 30.6 38 20.8V9.5L22 3Z"
        fill="url(#innerCore)"
        stroke="url(#shieldPlate)"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Internal Geometric Facets */}
      <path
        d="M22 8L10 13V20.5C10 27.5 15.1 34.6 22 37C28.9 34.6 34 27.5 34 20.5V13L22 8Z"
        fill="rgba(124, 58, 237, 0.15)"
      />

      {/* Monolithic Interlocking "N" Core */}
      <path
        d="M16 15V29L28 15V29"
        stroke="url(#metallicAcc)"
        strokeWidth="2.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Center Security Lock / Key Node */}
      <circle cx="22" cy="22" r="2.5" fill="#FFFFFF" />
    </svg>
  );
}

// Payment Gateway Real Vectors for Clean White Theme
export function VisaMastercardIcon({ size = 22 }) {
  return (
    <svg width={size * 1.5} height={size} viewBox="0 0 36 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="36" height="24" rx="4" fill="#F8FAFC" stroke="#CBD5E1" />
      <circle cx="14" cy="12" r="6" fill="#EB001B" fillOpacity="0.95" />
      <circle cx="22" cy="12" r="6" fill="#F79E1B" fillOpacity="0.9" />
    </svg>
  );
}

export function TetherUsdtIcon({ size = 22 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="10" fill="#26A17B" />
      <path
        d="M13.2 9.5H16V7.5H8V9.5H10.8V11.2C8.3 11.4 6.5 12.1 6.5 13C6.5 13.9 8.3 14.6 10.8 14.8V17H13.2V14.8C15.7 14.6 17.5 13.9 17.5 13C17.5 12.1 15.7 11.4 13.2 11.2V9.5Z"
        fill="#FFFFFF"
      />
    </svg>
  );
}

export function BitcoinIcon({ size = 22 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="10" fill="#F7931A" />
      <path
        d="M14.5 10.2C14.8 9.5 14.5 8.7 13.7 8.5H10.5V7H9.5V8.5H8V9.7H9.5V14.3H8V15.5H9.5V17H10.5V15.5H13.8C14.7 15.5 15.3 14.7 15.1 13.9C15 13.3 14.5 12.8 13.9 12.7C14.4 12.4 14.7 11.8 14.5 11.2V10.2ZM11 9.7H13C13.4 9.7 13.8 10 13.8 10.5C13.8 11 13.4 11.3 13 11.3H11V9.7ZM13.3 14.3H11V12.5H13.3C13.8 12.5 14.2 12.9 14.2 13.4C14.2 13.9 13.8 14.3 13.3 14.3Z"
        fill="#FFFFFF"
      />
    </svg>
  );
}

export function PayPalIcon({ size = 22 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="10" fill="#003087" />
      <path
        d="M14.2 8.2C14.1 7.2 13.2 6.8 11.8 6.8H8.5L7 16.5H9.5L10.1 12.8H11.6C13.3 12.8 14.5 11.8 14.8 10.1C15 9.2 14.8 8.5 14.2 8.2Z"
        fill="#0079C1"
      />
      <path
        d="M15.5 10.2C15.3 11.7 14.2 12.7 12.6 12.7H11.2L10.5 17.2H12.8L13.3 14.2H14.1C15.6 14.2 16.7 13.3 17 11.7C17.2 10.9 17 10.3 16.6 10C16.3 9.7 15.9 9.6 15.5 10.2Z"
        fill="#00457C"
      />
    </svg>
  );
}

// Crisp Game Badge Vector Emblem for White Theme
export function GameMonogram({ code }) {
  return (
    <div
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '26px',
        height: '26px',
        borderRadius: '6px',
        background: 'linear-gradient(135deg, #F5F3FF 0%, #ECFDF5 100%)',
        border: '1px solid #CBD5E1',
        fontSize: '10px',
        fontWeight: 800,
        letterSpacing: '0.04em',
        color: '#1E1B4B',
        fontFamily: 'var(--font-mono)'
      }}
    >
      {code}
    </div>
  );
}
