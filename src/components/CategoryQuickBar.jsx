import React from 'react';
import { ArrowRight, Gift, Gamepad2 } from 'lucide-react';
import {
  SpotifyLogo,
  YouTubeLogo,
  NetflixLogo,
  ChatGPTLogo,
  MicrosoftLogo
} from './Icons';

const CATEGORY_ITEMS = [
  {
    id: 'music',
    name: 'Music',
    renderIcon: () => <SpotifyLogo size={24} />,
    color: '#1DB954'
  },
  {
    id: 'video',
    name: 'Video',
    renderIcon: () => <YouTubeLogo size={24} />,
    color: '#FF0000'
  },
  {
    id: 'streaming',
    name: 'Streaming',
    renderIcon: () => <NetflixLogo size={24} />,
    color: '#E50914'
  },
  {
    id: 'ai-tools',
    name: 'AI Tools',
    renderIcon: () => <ChatGPTLogo size={24} />,
    color: '#10A37F'
  },
  {
    id: 'gaming',
    name: 'Gaming',
    renderIcon: () => (
      <div style={{
        width: 24,
        height: 24,
        borderRadius: 6,
        background: '#111111',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#FFFFFF'
      }}>
        <Gamepad2 size={15} />
      </div>
    ),
    color: '#5865F2'
  },
  {
    id: 'software',
    name: 'Software',
    renderIcon: () => <MicrosoftLogo size={24} />,
    color: '#00A4EF'
  },
  {
    id: 'gift-cards',
    name: 'Gift Cards',
    renderIcon: () => (
      <div style={{
        width: 24,
        height: 24,
        borderRadius: 6,
        background: '#111111',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#FFFFFF'
      }}>
        <Gift size={15} />
      </div>
    ),
    color: '#F59E0B'
  }
];

export default function CategoryQuickBar({ selectedCategory, onSelectCategory }) {
  return (
    <section className="category-quickbar-section" id="categories-bar">
      <div className="container">
        <div className="category-pills-scroll">
          {CATEGORY_ITEMS.map((cat) => {
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                className={`category-pill-card ${isActive ? 'active' : ''}`}
                onClick={() => {
                  if (isActive) {
                    onSelectCategory('all');
                  } else {
                    onSelectCategory(cat.id);
                  }
                }}
              >
                <div className="pill-icon-wrap">
                  {cat.renderIcon()}
                </div>
                <span className="pill-name">{cat.name}</span>
                <ArrowRight size={13} className="pill-arrow" />
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
