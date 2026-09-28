import React from 'react';

// Nexa Digitals Brand Vector Emblem
export function NexaLogo({ size = 32, className = '' }) {
  return (
    <div className={`nexa-brand-logo ${className}`} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 36 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ flexShrink: 0 }}
      >
        <rect width="36" height="36" rx="8" fill="#111111" />
        <path
          d="M10 26V10L18 20L26 10V26"
          stroke="#FFFFFF"
          strokeWidth="3.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="18" cy="27" r="1.8" fill="#10B981" />
      </svg>
      <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1 }}>
        <span style={{
          fontSize: '20px',
          fontWeight: 900,
          letterSpacing: '0.12em',
          color: '#111111',
          fontFamily: "'Plus Jakarta Sans', sans-serif"
        }}>
          NEXA
        </span>
        <span style={{
          fontSize: '9.5px',
          fontWeight: 700,
          letterSpacing: '0.24em',
          color: '#6B7280',
          textTransform: 'uppercase',
          marginTop: '3px'
        }}>
          DIGITALS
        </span>
      </div>
    </div>
  );
}

// Spotify Official Vector
export function SpotifyLogo({ size = 52 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="24" cy="24" r="23" fill="#1DB954" />
      <path
        d="M34.2 21.6C27.4 17.5 16.1 17.1 9.6 19.1C8.6 19.4 7.5 18.8 7.2 17.8C6.9 16.8 7.5 15.7 8.5 15.4C16.1 13.1 28.5 13.5 36.4 18.2C37.3 18.7 37.6 19.9 37.1 20.8C36.6 21.6 35.1 22.1 34.2 21.6ZM33.9 26.8C33.4 27.5 32.5 27.8 31.8 27.3C26.1 23.8 17.4 22.8 10.6 24.9C9.8 25.1 8.9 24.6 8.7 23.8C8.5 23 9 22.1 9.8 21.9C17.6 19.5 27.2 20.6 33.5 24.6C34.2 25.1 34.4 26.1 33.9 26.8ZM31.4 31.8C31 32.4 30.2 32.6 29.6 32.2C24.7 29.2 18.4 28.6 10.9 30.3C10.2 30.5 9.5 30 9.3 29.3C9.1 28.6 9.6 27.9 10.3 27.7C18.6 25.8 25.6 26.5 31.1 29.9C31.6 30.3 31.8 31.1 31.4 31.8Z"
        fill="#111111"
      />
    </svg>
  );
}

// YouTube Official Vector
export function YouTubeLogo({ size = 52 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="48" height="48" rx="14" fill="#FF0000" />
      <path
        d="M38 18.2C37.6 16.5 36.3 15.2 34.6 14.8C31.6 14 24 14 24 14C24 14 16.4 14 13.4 14.8C11.7 15.2 10.4 16.5 10 18.2C9.2 21.2 9.2 24 9.2 24C9.2 24 9.2 26.8 10 29.8C10.4 31.5 11.7 32.8 13.4 33.2C16.4 34 24 34 24 34C24 34 31.6 34 34.6 33.2C36.3 32.8 37.6 31.5 38 29.8C38.8 26.8 38.8 24 38.8 24C38.8 24 38.8 21.2 38 18.2Z"
        fill="#FF0000"
      />
      <path
        d="M21 28.5L30.5 24L21 19.5V28.5Z"
        fill="#FFFFFF"
      />
    </svg>
  );
}

// ChatGPT / OpenAI Official Vector
export function ChatGPTLogo({ size = 52 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="48" height="48" rx="12" fill="#000000" />
      <path
        d="M36.7 20.8C36.1 17.5 33.5 15 30.2 14.8C29.6 14.8 29.1 14.9 28.6 15.1C27.4 13.3 25.4 12.2 23.1 12.2C19.9 12.2 17.1 14.2 16.1 17.2C15.6 17.1 15 17.1 14.5 17.2C11.4 18 9.1 20.7 9 23.9C8.9 25.5 9.5 27.1 10.5 28.4C9.9 31.7 12.5 34.2 15.8 34.4C16.4 34.4 16.9 34.3 17.4 34.1C18.6 35.9 20.6 37 22.9 37C26.1 37 28.9 35 29.9 32C30.4 32.1 31 32.1 31.5 32C34.6 31.2 36.9 28.5 37 25.3C37.1 23.7 36.5 22.1 36.7 20.8ZM23.4 35C21.7 35 20.2 34.2 19.3 32.8L22.6 30.9C23 31.1 23.5 31.2 24 31.2C25.4 31.2 26.6 29.9 26.5 28.4V24.5L28.8 25.8C28.8 28.4 26.7 35 23.4 35ZM14.3 28.9C13.5 27.6 13.4 26 14.1 24.6L17.5 26.6C17.3 27 17.2 27.5 17.3 28C17.6 29.3 19 30.2 20.4 29.9L23.7 28V30.6L14.3 28.9ZM13.8 19.8C14.7 18.5 16.2 17.8 17.8 18L17.8 21.9C17.4 22.1 17.1 22.4 16.9 22.8C16.2 24 16.6 25.6 17.8 26.4L21.1 28.3L19.8 30.5L13.8 19.8ZM29.4 23.4L26 21.4C26.2 21 26.3 20.5 26.2 20C25.9 18.7 24.5 17.8 23.1 18.1L19.8 20V17.4C21.6 16.8 23.6 17 25.2 18L29.4 23.4ZM32.7 24.8C33.5 26.1 33.6 27.7 32.9 29.1L29.5 27.1C29.7 26.7 29.8 26.2 29.7 25.7C29.4 24.4 28 23.5 26.6 23.8L23.3 25.7V23.1L32.7 24.8Z"
        fill="#FFFFFF"
      />
    </svg>
  );
}

// Netflix Official Vector
export function NetflixLogo({ size = 52 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="48" height="48" rx="12" fill="#000000" />
      {/* Netflix N ribbon */}
      <path d="M14 9H20.5V39H14V9Z" fill="#B81D24" />
      <path d="M27.5 9H34V39H27.5V9Z" fill="#B81D24" />
      <path d="M14 9L34 39H27.5L14 18.8V9Z" fill="#E50914" />
    </svg>
  );
}

// Canva Pro Official Vector
export function CanvaLogo({ size = 52 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="canvaGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#00C4CC" />
          <stop offset="50%" stopColor="#037BFE" />
          <stop offset="100%" stopColor="#7D2AE8" />
        </linearGradient>
      </defs>
      <rect width="48" height="48" rx="14" fill="url(#canvaGrad)" />
      {/* C glyph in Canva signature style */}
      <path
        d="M29.5 17.5C28.2 16.2 26.2 15.5 23.8 15.5C18.5 15.5 14.5 19.8 14.5 25.2C14.5 30.5 18.6 34.5 24.1 34.5C27.2 34.5 29.5 33.2 31.2 31.4C31.8 30.7 31.4 29.8 30.5 29.8C29.9 29.8 29.4 30.1 28.9 30.6C27.6 31.9 25.9 32.7 23.9 32.7C19.8 32.7 16.9 29.6 16.9 25.2C16.9 20.8 19.9 17.3 23.9 17.3C25.8 17.3 27.2 17.9 28.3 19C28.8 19.5 29.5 19.6 30 19.2C30.6 18.7 30.4 18.1 29.5 17.5Z"
        fill="#FFFFFF"
      />
    </svg>
  );
}

// Discord Nitro Official Vector
export function DiscordLogo({ size = 52 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="48" height="48" rx="14" fill="#5865F2" />
      <path
        d="M34.5 15C32.3 14 30 13.2 27.5 12.8C27.2 13.4 26.8 14.1 26.5 14.8C23.9 14.4 21.3 14.4 18.7 14.8C18.4 14.1 18 13.4 17.7 12.8C15.2 13.2 12.9 14 10.7 15C6.3 21.6 5.1 28 5.7 34.3C8.6 36.5 11.4 37.8 14.2 38.6C14.9 37.7 15.5 36.7 16 35.7C15 35.3 14.1 34.8 13.2 34.2C13.4 34 13.6 33.8 13.9 33.6C19.5 36.2 25.7 36.2 31.3 33.6C31.5 33.8 31.7 34 32 34.2C31.1 34.8 30.2 35.3 29.2 35.7C29.7 36.7 30.3 37.7 31 38.6C33.8 37.8 36.6 36.5 39.5 34.3C40.2 27 38.3 20.7 34.5 15ZM17.1 30.2C15.4 30.2 14 28.6 14 26.7C14 24.8 15.4 23.2 17.1 23.2C18.8 23.2 20.2 24.8 20.2 26.7C20.2 28.6 18.8 30.2 17.1 30.2ZM28.1 30.2C26.4 30.2 25 28.6 25 26.7C25 24.8 26.4 23.2 28.1 23.2C29.8 23.2 31.2 24.8 31.2 26.7C31.2 28.6 29.8 30.2 28.1 30.2Z"
        fill="#FFFFFF"
      />
    </svg>
  );
}

// Windows / Microsoft Vector
export function MicrosoftLogo({ size = 52 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="48" height="48" rx="12" fill="#F8FAFC" stroke="#E2E8F0" />
      <rect x="11" y="11" width="12" height="12" fill="#F25022" />
      <rect x="25" y="11" width="12" height="12" fill="#7FBA00" />
      <rect x="11" y="25" width="12" height="12" fill="#00A4EF" />
      <rect x="25" y="25" width="12" height="12" fill="#FFB900" />
    </svg>
  );
}

// Claude / Anthropic Vector
export function ClaudeLogo({ size = 52 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="48" height="48" rx="12" fill="#D97706" />
      <circle cx="24" cy="24" r="14" fill="#FFFFFF" fillOpacity="0.15" />
      <path
        d="M24 12V36M12 24H36M15.5 15.5L32.5 32.5M15.5 32.5L32.5 15.5"
        stroke="#FFFFFF"
        strokeWidth="3.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

// Steam Official Vector
export function SteamLogo({ size = 52 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="48" height="48" rx="12" fill="#171A21" />
      <path
        d="M24 8C15.2 8 8 15.2 8 24C8 30.6 12 36.3 17.8 38.7L22.5 32.1C21.8 31.6 21.2 30.7 21.2 29.7C21.2 28.1 22.5 26.8 24.1 26.8C25.7 26.8 27 28.1 27 29.7C27 31.3 25.7 32.6 24.1 32.6L19.9 38.6C21.2 39.5 22.5 40 24 40C32.8 40 40 32.8 40 24C40 15.2 32.8 8 24 8ZM29.5 23.5C27 23.5 25 21.5 25 19C25 16.5 27 14.5 29.5 14.5C32 14.5 34 16.5 34 19C34 21.5 32 23.5 29.5 23.5Z"
        fill="#FFFFFF"
      />
    </svg>
  );
}

// Xbox Official Vector
export function XboxLogo({ size = 52 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="24" cy="24" r="23" fill="#107C10" />
      <path
        d="M17.5 11.2C19.5 10.4 21.7 10 24 10C26.3 10 28.5 10.4 30.5 11.2C29.2 12.3 25.5 15.8 24 17.4C22.5 15.8 18.8 12.3 17.5 11.2ZM12.2 14.8C10.8 17.4 10 20.3 10 23.4C10 24.5 10.1 25.6 10.3 26.6C12.3 24 17.5 18.2 20.2 15.6C17.2 15.1 14.4 14.8 12.2 14.8ZM35.8 14.8C33.6 14.8 30.8 15.1 27.8 15.6C30.5 18.2 35.7 24 37.7 26.6C37.9 25.6 38 24.5 38 23.4C38 20.3 37.2 17.4 35.8 14.8ZM22.4 20.2C21 21.9 14.2 30.8 12.6 32.8C15.8 36 20.1 38 24 38C27.9 38 32.2 36 35.4 32.8C33.8 30.8 27 21.9 25.6 20.2C24.8 21.1 23.2 21.1 22.4 20.2Z"
        fill="#FFFFFF"
      />
    </svg>
  );
}

// Apple Music Official Vector
export function AppleMusicLogo({ size = 52 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="appleMusicGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FA243C" />
          <stop offset="100%" stopColor="#FD5665" />
        </linearGradient>
      </defs>
      <rect width="48" height="48" rx="12" fill="url(#appleMusicGrad)" />
      <path
        d="M32 14V27.5C32 29.4 30.4 31 28.5 31C26.6 31 25 29.4 25 27.5C25 25.6 26.6 24 28.5 24C29 24 29.5 24.1 30 24.3V18.2L20 20.5V30.5C20 32.4 18.4 34 16.5 34C14.6 34 13 32.4 13 30.5C13 28.6 14.6 27 16.5 27C17 27 17.5 27.1 18 27.3V15.5C18 14.7 18.6 14 19.4 13.8L30.9 11.2C31.5 11 32 11.5 32 12.1V14Z"
        fill="#FFFFFF"
      />
    </svg>
  );
}

// Prime Video Logo
export function PrimeVideoLogo({ size = 52 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="48" height="48" rx="12" fill="#00A8E1" />
      <path
        d="M14 26C19 29.5 29 29.5 34 26"
        stroke="#FFFFFF"
        strokeWidth="3.2"
        strokeLinecap="round"
      />
      <path
        d="M31 24.5L34.5 26.5L31.5 29.5"
        stroke="#FFFFFF"
        strokeWidth="2.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="18" cy="18" r="2.5" fill="#FFFFFF" />
      <circle cx="30" cy="18" r="2.5" fill="#FFFFFF" />
    </svg>
  );
}

// Master Product Logo Dispatcher
export function ProductLogo({ type, size = 48 }) {
  switch (type) {
    case 'spotify':
      return <SpotifyLogo size={size} />;
    case 'youtube':
      return <YouTubeLogo size={size} />;
    case 'chatgpt':
      return <ChatGPTLogo size={size} />;
    case 'netflix':
      return <NetflixLogo size={size} />;
    case 'canva':
      return <CanvaLogo size={size} />;
    case 'discord':
      return <DiscordLogo size={size} />;
    case 'windows':
      return <MicrosoftLogo size={size} />;
    case 'claude':
      return <ClaudeLogo size={size} />;
    case 'steam':
      return <SteamLogo size={size} />;
    case 'xbox':
      return <XboxLogo size={size} />;
    case 'applemusic':
      return <AppleMusicLogo size={size} />;
    case 'prime':
      return <PrimeVideoLogo size={size} />;
    default:
      return <SpotifyLogo size={size} />;
  }
}

// Social Icons for Footer
export function InstagramIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
    </svg>
  );
}

export function YouTubeSocialIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
    </svg>
  );
}

export function DiscordSocialIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.929 1.793 8.18 1.793 12.061 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.894.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.028zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
    </svg>
  );
}

export function TwitterXIcon({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
    </svg>
  );
}

export function VisaMastercardIcon({ size = 20 }) {
  return (
    <svg width={size * 1.5} height={size} viewBox="0 0 36 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="36" height="24" rx="4" fill="#F8FAFC" stroke="#CBD5E1" />
      <circle cx="14" cy="12" r="6" fill="#EB001B" fillOpacity="0.95" />
      <circle cx="22" cy="12" r="6" fill="#F79E1B" fillOpacity="0.9" />
    </svg>
  );
}

export function TetherUsdtIcon({ size = 20 }) {
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

