import React, { useState } from 'react';
import { X, Plus, DollarSign, Zap, Clock, ShieldCheck, Check, Store } from 'lucide-react';
import { POPULAR_GAMES, CATEGORIES, CURRENCIES } from '../data/mockData';

export default function SellerWizardModal({ onClose, onAddListing, selectedCurrency }) {
  const [game, setGame] = useState('Valorant');
  const [category, setCategory] = useState('accounts');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [region, setRegion] = useState('Global');
  const [platform, setPlatform] = useState('PC');
  const [deliveryType, setDeliveryType] = useState('instant');
  const [credentials, setCredentials] = useState('');
  const [tags, setTags] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  const numPrice = parseFloat(price) || 0;
  const platformFee = numPrice * 0.05; // 5% fee for verified merchants
  const netEarnings = Math.max(0, numPrice - platformFee);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !price) return;

    const gameObj = POPULAR_GAMES.find((g) => g.name.toLowerCase() === game.toLowerCase()) || {
      id: 'custom',
      name: game,
      code: 'PRO'
    };

    const newListing = {
      id: 'NL-' + Math.floor(10000 + Math.random() * 90000),
      game: game,
      gameId: gameObj.id,
      category: category,
      title: title,
      description: description || 'Verified digital asset delivered under VaultShield Escrow protection protocol.',
      price: numPrice,
      stock: 1,
      region: region,
      platform: platform,
      deliveryType: deliveryType,
      deliverySpeed: deliveryType === 'instant' ? 'Instant Dispatch (< 60s)' : 'Within 1 Hour',
      warranty: 'VaultShield Standard Guarantee',
      seller: {
        id: 'ME-01',
        name: 'You (Certified Merchant)',
        avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=120&auto=format&fit=crop&q=80',
        rating: 5.0,
        reviewsCount: 1,
        completionRate: '100%',
        avgResponse: '1 min',
        badge: 'Verified Merchant',
        verified: true
      },
      instantCredentials: {
        accessData: credentials || 'Contact merchant via direct order channel for custom transfer coordinates.',
        deliveryType: deliveryType
      },
      tags: tags ? tags.split(',').map((t) => t.trim()) : ['Verified', 'Escrow Protected'],
      isFeatured: false
    };

    setIsSuccess(true);
    setTimeout(() => {
      onAddListing(newListing);
      onClose();
    }, 1200);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-card" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '640px' }}>
        <div className="modal-header">
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Store size={20} style={{ color: 'var(--violet-bright)' }} />
            <span className="modal-title">Create Merchant Listing</span>
          </div>
          <button className="modal-close-btn" onClick={onClose}>
            <X size={18} />
          </button>
        </div>

        {isSuccess ? (
          <div style={{ padding: '40px 24px', textAlign: 'center' }}>
            <div style={{
              width: '56px',
              height: '56px',
              borderRadius: '50%',
              background: 'rgba(16, 185, 129, 0.15)',
              color: 'var(--emerald-glow)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 16px',
              fontSize: '24px'
            }}>
              <Check size={28} />
            </div>
            <h3 style={{ fontSize: '20px', fontWeight: 800, marginBottom: '8px' }}>Listing Published to Exchange</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '14px' }}>
              Your listing is now live across global search results with VaultShield escrow protection enabled.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="modal-body" style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {/* Game & Category Row */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                <div>
                  <label className="filter-label">Select Game Title</label>
                  <select
                    className="price-input"
                    value={game}
                    onChange={(e) => setGame(e.target.value)}
                  >
                    {POPULAR_GAMES.filter((g) => g.id !== 'all').map((g) => (
                      <option key={g.id} value={g.name}>
                        {g.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="filter-label">Product Category</label>
                  <select
                    className="price-input"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                  >
                    {CATEGORIES.filter((c) => c.id !== 'all').map((c) => (
                      <option key={c.id} value={c.id}>
                        {c.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Title */}
              <div>
                <label className="filter-label">Listing Title</label>
                <input
                  type="text"
                  className="price-input"
                  placeholder="e.g. Diamond 2 Account • 15 Premium Skins • Full Email Access"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  required
                />
              </div>

              {/* Price & Delivery Mode */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                <div>
                  <label className="filter-label">Settlement Price in USD ($)</label>
                  <input
                    type="number"
                    step="0.01"
                    className="price-input"
                    placeholder="25.00"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    required
                    min="1"
                  />
                </div>

                <div>
                  <label className="filter-label">Dispatch Mode</label>
                  <select
                    className="price-input"
                    value={deliveryType}
                    onChange={(e) => setDeliveryType(e.target.value)}
                  >
                    <option value="instant">Instant Automated Dispatch</option>
                    <option value="1hour">Manual Delivery (Within 1hr)</option>
                  </select>
                </div>
              </div>

              {/* Instant Credentials / Auto Dispatch */}
              {deliveryType === 'instant' && (
                <div>
                  <label className="filter-label">
                    Auto-Dispatched Credentials / Access Tokens (Encrypted in Vault)
                  </label>
                  <textarea
                    className="price-input"
                    rows="2"
                    placeholder="Account: User_client | Pass: SecretToken123 | Recovery Email: temp@nexusmail.gg"
                    value={credentials}
                    onChange={(e) => setCredentials(e.target.value)}
                    style={{ resize: 'vertical' }}
                  />
                </div>
              )}

              {/* Description */}
              <div>
                <label className="filter-label">Listing Description & Details</label>
                <textarea
                  className="price-input"
                  rows="3"
                  placeholder="Provide precise inventory specifications, platform compatibility, and region instructions..."
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  style={{ resize: 'vertical' }}
                />
              </div>

              {/* Region & Tags */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                <div>
                  <label className="filter-label">Region / Server</label>
                  <select
                    className="price-input"
                    value={region}
                    onChange={(e) => setRegion(e.target.value)}
                  >
                    <option value="Global">Global</option>
                    <option value="North America (NA)">North America (NA)</option>
                    <option value="Europe (EU)">Europe (EU)</option>
                    <option value="Asia">Asia</option>
                  </select>
                </div>

                <div>
                  <label className="filter-label">Search Keywords (comma separated)</label>
                  <input
                    type="text"
                    className="price-input"
                    placeholder="Smurf, Ranked, Instant, Original Email"
                    value={tags}
                    onChange={(e) => setTags(e.target.value)}
                  />
                </div>
              </div>

              {/* Earnings Calculator */}
              <div style={{
                background: 'rgba(139, 92, 246, 0.08)',
                padding: '12px 16px',
                borderRadius: 'var(--radius-md)',
                border: '1px solid var(--border-violet)'
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', color: 'var(--text-muted)', marginBottom: '4px' }}>
                  <span>Gross Listing Value:</span>
                  <span>${numPrice.toFixed(2)}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', color: 'var(--text-muted)', marginBottom: '6px' }}>
                  <span>Platform Settlement & Escrow Fee (5%):</span>
                  <span>-${platformFee.toFixed(2)}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '14px', fontWeight: 700, color: 'var(--emerald-glow)' }}>
                  <span>Net Payout to Your Wallet:</span>
                  <span>${netEarnings.toFixed(2)}</span>
                </div>
              </div>
            </div>

            <div className="modal-footer">
              <button type="button" className="btn btn-outline" onClick={onClose}>
                Cancel
              </button>
              <button type="submit" className="btn btn-primary">
                <Plus size={16} />
                <span>Publish to Exchange</span>
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
