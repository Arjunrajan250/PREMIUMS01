import React, { useState, useEffect, useMemo } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import GameFilterBar from './components/GameFilterBar';
import FilterSidebar from './components/FilterSidebar';
import ProductCard from './components/ProductCard';
import ProductDetailModal from './components/ProductDetailModal';
import CheckoutModal from './components/CheckoutModal';
import OrderEscrowView from './components/OrderEscrowView';
import SellerWizardModal from './components/SellerWizardModal';
import EscrowExplainerModal from './components/EscrowExplainerModal';
import WalletModal from './components/WalletModal';
import OrdersListModal from './components/OrdersListModal';
import VaultShieldSection from './components/VaultShieldSection';
import Footer from './components/Footer';

import { SearchX, SlidersHorizontal } from 'lucide-react';
import { INITIAL_LISTINGS, CURRENCIES } from './data/mockData';
import './styles/marketplace.css';

export default function App() {
  // Persistence for custom listings
  const [listings, setListings] = useState(() => {
    const saved = localStorage.getItem('nexusloot_listings');
    if (saved) {
      try { return JSON.parse(saved); } catch (e) { console.error(e); }
    }
    return INITIAL_LISTINGS;
  });

  // User orders
  const [orders, setOrders] = useState(() => {
    const saved = localStorage.getItem('nexusloot_orders');
    if (saved) {
      try { return JSON.parse(saved); } catch (e) { console.error(e); }
    }
    return [];
  });

  // Wallet balance
  const [walletBalance, setWalletBalance] = useState(() => {
    const saved = localStorage.getItem('nexusloot_wallet');
    return saved ? parseFloat(saved) : 120.00;
  });

  // Currency & Navigation filters
  const [selectedCurrency, setSelectedCurrency] = useState('USD');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedGame, setSelectedGame] = useState('all');

  // Sidebar filters
  const [regionFilter, setRegionFilter] = useState('all');
  const [instantOnly, setInstantOnly] = useState(false);
  const [verifiedOnly, setVerifiedOnly] = useState(false);
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [sortBy, setSortBy] = useState('featured');

  // Modals state
  const [inspectProduct, setInspectProduct] = useState(null);
  const [checkoutProduct, setCheckoutProduct] = useState(null);
  const [activeOrder, setActiveOrder] = useState(null);
  const [isSellerModalOpen, setIsSellerModalOpen] = useState(false);
  const [isEscrowInfoOpen, setIsEscrowInfoOpen] = useState(false);
  const [isWalletModalOpen, setIsWalletModalOpen] = useState(false);
  const [isOrdersListOpen, setIsOrdersListOpen] = useState(false);
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

  const activeFiltersCount = useMemo(() => {
    let count = 0;
    if (regionFilter !== 'all') count++;
    if (instantOnly) count++;
    if (verifiedOnly) count++;
    if (minPrice) count++;
    if (maxPrice) count++;
    if (sortBy !== 'featured') count++;
    return count;
  }, [regionFilter, instantOnly, verifiedOnly, minPrice, maxPrice, sortBy]);
  const [isWalletModalOpen, setIsWalletModalOpen] = useState(false);
  const [isOrdersListOpen, setIsOrdersListOpen] = useState(false);

  // Sync to local storage
  useEffect(() => {
    localStorage.setItem('nexusloot_listings', JSON.stringify(listings));
  }, [listings]);

  useEffect(() => {
    localStorage.setItem('nexusloot_orders', JSON.stringify(orders));
  }, [orders]);

  useEffect(() => {
    localStorage.setItem('nexusloot_wallet', walletBalance.toString());
  }, [walletBalance]);

  // Filtering Logic
  const filteredListings = useMemo(() => {
    const currency = CURRENCIES[selectedCurrency];

    return listings.filter((item) => {
      // Search query
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesTitle = item.title.toLowerCase().includes(q);
        const matchesGame = item.game.toLowerCase().includes(q);
        const matchesSeller = item.seller.name.toLowerCase().includes(q);
        const matchesTags = item.tags && item.tags.some(t => t.toLowerCase().includes(q));
        if (!matchesTitle && !matchesGame && !matchesSeller && !matchesTags) return false;
      }

      // Game filter
      if (selectedGame !== 'all' && item.gameId !== selectedGame) {
        return false;
      }

      // Category filter
      if (selectedCategory !== 'all' && item.category !== selectedCategory) {
        return false;
      }

      // Region filter
      if (regionFilter !== 'all' && item.region !== regionFilter && item.region !== 'Global') {
        return false;
      }

      // Instant delivery only
      if (instantOnly && item.deliveryType !== 'instant') {
        return false;
      }

      // Verified sellers only
      if (verifiedOnly && !item.seller.verified) {
        return false;
      }

      // Price filter in current currency
      const itemPriceConverted = item.price * currency.rate;
      if (minPrice && itemPriceConverted < parseFloat(minPrice)) {
        return false;
      }
      if (maxPrice && itemPriceConverted > parseFloat(maxPrice)) {
        return false;
      }

      return true;
    }).sort((a, b) => {
      if (sortBy === 'price-low') return a.price - b.price;
      if (sortBy === 'price-high') return b.price - a.price;
      if (sortBy === 'rating') return b.seller.rating - a.seller.rating;
      if (sortBy === 'orders') return b.seller.reviewsCount - a.seller.reviewsCount;
      // Default: featured first
      return (b.isFeatured ? 1 : 0) - (a.isFeatured ? 1 : 0);
    });
  }, [listings, searchQuery, selectedGame, selectedCategory, regionFilter, instantOnly, verifiedOnly, minPrice, maxPrice, sortBy, selectedCurrency]);

  // Handlers
  const handleResetFilters = () => {
    setRegionFilter('all');
    setInstantOnly(false);
    setVerifiedOnly(false);
    setMinPrice('');
    setMaxPrice('');
    setSortBy('featured');
    setSelectedCategory('all');
    setSelectedGame('all');
    setSearchQuery('');
  };

  const handleCompleteOrder = (newOrder, usdDeduction) => {
    if (newOrder.paymentMethod === 'wallet') {
      setWalletBalance((prev) => Math.max(0, prev - usdDeduction));
    }
    setOrders((prev) => [newOrder, ...prev]);
    setCheckoutProduct(null);
    setActiveOrder(newOrder); // Automatically open Escrow Tracker!
  };

  const handleReleaseEscrow = (orderId) => {
    setOrders((prev) =>
      prev.map((ord) => {
        if (ord.orderId === orderId) {
          const updatedChat = [
            ...ord.sellerChat,
            { sender: 'system', text: '✅ Escrow successfully released to seller. Order completed!' }
          ];
          return { ...ord, escrowStatus: 'released', sellerChat: updatedChat };
        }
        return ord;
      })
    );
    if (activeOrder && activeOrder.orderId === orderId) {
      setActiveOrder((prev) => ({
        ...prev,
        escrowStatus: 'released',
        sellerChat: [
          ...prev.sellerChat,
          { sender: 'system', text: '✅ Escrow successfully released to seller. Order completed!' }
        ]
      }));
    }
  };

  const handleDisputeOrder = (orderId) => {
    setOrders((prev) =>
      prev.map((ord) => {
        if (ord.orderId === orderId) {
          const updatedChat = [
            ...ord.sellerChat,
            { sender: 'system', text: '⚠️ VaultShield dispute ticket opened. A platform moderator has joined to inspect delivery proof.' }
          ];
          return { ...ord, escrowStatus: 'disputed', sellerChat: updatedChat };
        }
        return ord;
      })
    );
    if (activeOrder && activeOrder.orderId === orderId) {
      setActiveOrder((prev) => ({
        ...prev,
        escrowStatus: 'disputed',
        sellerChat: [
          ...prev.sellerChat,
          { sender: 'system', text: '⚠️ VaultShield dispute ticket opened. A platform moderator has joined to inspect delivery proof.' }
        ]
      }));
    }
  };

  const handleAddListing = (newListing) => {
    setListings((prev) => [newListing, ...prev]);
  };

  const handleTopUpWallet = (usdAmount) => {
    setWalletBalance((prev) => prev + usdAmount);
  };

  return (
    <div className="nexusloot-app">
      {/* Top Header Navigation */}
      <Header
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        selectedCurrency={selectedCurrency}
        setSelectedCurrency={setSelectedCurrency}
        walletBalance={walletBalance}
        onOpenSellerModal={() => setIsSellerModalOpen(true)}
        onOpenEscrowInfo={() => setIsEscrowInfoOpen(true)}
        onOpenWalletModal={() => setIsWalletModalOpen(true)}
        activeOrdersCount={orders.filter(o => o.escrowStatus === 'held').length}
        onOpenOrdersModal={() => setIsOrdersListOpen(true)}
      />

      {/* Main Hero & Stats */}
      <Hero
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />

      {/* Popular Games Horizontal Selector */}
      <GameFilterBar
        selectedGame={selectedGame}
        setSelectedGame={setSelectedGame}
      />

      {/* Marketplace Catalog & Filters Layout */}
      <main className="container" id="marketplace" style={{ marginTop: '24px' }}>
        <div className="marketplace-layout">
          {/* Left Sidebar Filters */}
          <FilterSidebar
            regionFilter={regionFilter}
            setRegionFilter={setRegionFilter}
            instantOnly={instantOnly}
            setInstantOnly={setInstantOnly}
            verifiedOnly={verifiedOnly}
            setVerifiedOnly={setVerifiedOnly}
            minPrice={minPrice}
            setMinPrice={setMinPrice}
            maxPrice={maxPrice}
            setMaxPrice={setMaxPrice}
            sortBy={sortBy}
            setSortBy={setSortBy}
            selectedCurrency={selectedCurrency}
            onResetFilters={handleResetFilters}
          />

          {/* Right Product Grid */}
          <section>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: '18px'
            }}>
              <div>
                <h2 style={{ fontSize: '20px', fontWeight: 800 }}>
                  Active Offers & Listings
                </h2>
                <p style={{ fontSize: '13px', color: 'var(--text-muted)' }}>
                  Showing {filteredListings.length} verified listings ready for instant trade
                </p>
              </div>

              {(searchQuery || selectedGame !== 'all' || selectedCategory !== 'all') && (
                <button className="btn btn-ghost btn-sm" onClick={handleResetFilters}>
                  Clear all filters
                </button>
              )}
            </div>

            {filteredListings.length === 0 ? (
              <div style={{
                textAlign: 'center',
                padding: '60px 20px',
                background: 'var(--bg-card)',
                borderRadius: 'var(--radius-lg)',
                border: '1px solid var(--border-subtle)'
              }}>
                <div style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: '12px',
                  background: 'rgba(255, 255, 255, 0.04)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 16px',
                  color: 'var(--text-muted)'
                }}>
                  <SearchX size={28} />
                </div>
                <h3 style={{ fontSize: '18px', fontWeight: 700, marginBottom: '6px' }}>
                  No matching listings found
                </h3>
                <p style={{ fontSize: '13px', color: 'var(--text-muted)', marginBottom: '20px' }}>
                  Try adjusting your price filter, clearing search keywords, or selecting another game.
                </p>
                <button className="btn btn-primary btn-sm" onClick={handleResetFilters}>
                  Reset All Filters
                </button>
              </div>
            ) : (
              <div className="product-grid">
                {filteredListings.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    selectedCurrency={selectedCurrency}
                    onSelectProduct={(p) => setInspectProduct(p)}
                    onQuickBuy={(p) => setCheckoutProduct(p)}
                  />
                ))}
              </div>
            )}
          </section>
        </div>
      </main>

      {/* VaultShield Escrow Section */}
      <VaultShieldSection
        onOpenSellerModal={() => setIsSellerModalOpen(true)}
        onOpenEscrowInfo={() => setIsEscrowInfoOpen(true)}
      />

      {/* Footer */}
      <Footer
        onOpenEscrowInfo={() => setIsEscrowInfoOpen(true)}
        onOpenSellerModal={() => setIsSellerModalOpen(true)}
      />

      {/* Modals */}
      {inspectProduct && (
        <ProductDetailModal
          product={inspectProduct}
          selectedCurrency={selectedCurrency}
          onClose={() => setInspectProduct(null)}
          onBuyNow={(p) => setCheckoutProduct(p)}
        />
      )}

      {checkoutProduct && (
        <CheckoutModal
          product={checkoutProduct}
          selectedCurrency={selectedCurrency}
          walletBalance={walletBalance}
          onClose={() => setCheckoutProduct(null)}
          onCompleteOrder={handleCompleteOrder}
        />
      )}

      {activeOrder && (
        <OrderEscrowView
          order={activeOrder}
          onClose={() => setActiveOrder(null)}
          onReleaseEscrow={handleReleaseEscrow}
          onDisputeOrder={handleDisputeOrder}
        />
      )}

      {isSellerModalOpen && (
        <SellerWizardModal
          onClose={() => setIsSellerModalOpen(false)}
          onAddListing={handleAddListing}
          selectedCurrency={selectedCurrency}
        />
      )}

      {isEscrowInfoOpen && (
        <EscrowExplainerModal
          onClose={() => setIsEscrowInfoOpen(false)}
        />
      )}

      {isWalletModalOpen && (
        <WalletModal
          walletBalance={walletBalance}
          onTopUp={handleTopUpWallet}
          selectedCurrency={selectedCurrency}
          onClose={() => setIsWalletModalOpen(false)}
        />
      )}

      {isOrdersListOpen && (
        <OrdersListModal
          orders={orders}
          onClose={() => setIsOrdersListOpen(false)}
          onSelectOrder={(ord) => setActiveOrder(ord)}
          selectedCurrency={selectedCurrency}
        />
      )}
    </div>
  );
}
