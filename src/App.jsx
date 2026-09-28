import React, { useState, useEffect, useMemo } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import CategoryQuickBar from './components/CategoryQuickBar';
import ProductCard from './components/ProductCard';
import ProductDetailModal from './components/ProductDetailModal';
import CheckoutModal from './components/CheckoutModal';
import OrderEscrowView from './components/OrderEscrowView';
import CartDrawer from './components/CartDrawer';
import SignInModal from './components/SignInModal';
import FAQModal from './components/FAQModal';
import OrdersListModal from './components/OrdersListModal';
import EntertainmentBanner from './components/EntertainmentBanner';
import HowItWorksSection from './components/HowItWorksSection';
import TestimonialsSection from './components/TestimonialsSection';
import Footer from './components/Footer';

import { ArrowRight, SearchX } from 'lucide-react';
import { INITIAL_LISTINGS } from './data/mockData';
import './styles/marketplace.css';

export default function App() {
  // Products catalog
  const [listings] = useState(() => {
    return INITIAL_LISTINGS;
  });

  // Cart Items — Preloaded with 2 items to match the screenshot badge '2'
  const [cartItems, setCartItems] = useState(() => {
    const saved = localStorage.getItem('nexa_cart');
    if (saved) {
      try { return JSON.parse(saved); } catch (e) { console.error(e); }
    }
    // Default 2 items from the screenshot (Spotify Premium & YouTube Premium)
    return [
      { ...INITIAL_LISTINGS[0], quantity: 1 },
      { ...INITIAL_LISTINGS[1], quantity: 1 }
    ];
  });

  // Orders history
  const [orders, setOrders] = useState(() => {
    const saved = localStorage.getItem('nexa_orders');
    if (saved) {
      try { return JSON.parse(saved); } catch (e) { console.error(e); }
    }
    return [];
  });

  // Currency & Navigation filters
  const [selectedCurrency, setSelectedCurrency] = useState('INR');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [showAllProducts, setShowAllProducts] = useState(false);

  // Modals state
  const [inspectProduct, setInspectProduct] = useState(null);
  const [checkoutProduct, setCheckoutProduct] = useState(null);
  const [activeOrder, setActiveOrder] = useState(null);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isSignInOpen, setIsSignInOpen] = useState(false);
  const [isFaqOpen, setIsFaqOpen] = useState(false);
  const [isOrdersListOpen, setIsOrdersListOpen] = useState(false);

  // Sync to local storage
  useEffect(() => {
    localStorage.setItem('nexa_cart', JSON.stringify(cartItems));
  }, [cartItems]);

  useEffect(() => {
    localStorage.setItem('nexa_orders', JSON.stringify(orders));
  }, [orders]);

  // Filtering Logic
  const filteredListings = useMemo(() => {
    return listings.filter((item) => {
      // Search query
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesTitle = item.title.toLowerCase().includes(q);
        const matchesCategory = item.category.toLowerCase().includes(q);
        const matchesTags = item.tags && item.tags.some(t => t.toLowerCase().includes(q));
        if (!matchesTitle && !matchesCategory && !matchesTags) return false;
      }

      // Category filter
      if (selectedCategory !== 'all' && item.category !== selectedCategory) {
        return false;
      }

      return true;
    });
  }, [listings, searchQuery, selectedCategory]);

  // Products to display:
  // If not searching, category is 'all', and not "showAllProducts", show top 6 items matching screenshot!
  const displayedProducts = useMemo(() => {
    if (!searchQuery.trim() && selectedCategory === 'all' && !showAllProducts) {
      return filteredListings.slice(0, 6);
    }
    return filteredListings;
  }, [filteredListings, searchQuery, selectedCategory, showAllProducts]);

  // Cart Handlers
  const handleAddToCart = (product) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, quantity: (item.quantity || 1) + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const handleUpdateQuantity = (productId, newQty) => {
    if (newQty <= 0) {
      handleRemoveItem(productId);
      return;
    }
    setCartItems((prev) =>
      prev.map((item) => (item.id === productId ? { ...item, quantity: newQty } : item))
    );
  };

  const handleRemoveItem = (productId) => {
    setCartItems((prev) => prev.filter((item) => item.id !== productId));
  };

  const totalCartCount = useMemo(() => {
    return cartItems.reduce((acc, item) => acc + (item.quantity || 1), 0);
  }, [cartItems]);

  // Order Handlers
  const handleCompleteOrder = (newOrder) => {
    setOrders((prev) => [newOrder, ...prev]);
    setCheckoutProduct(null);
    setActiveOrder(newOrder); // Automatically open credentials reveal!
  };

  const handleResetFilters = () => {
    setSearchQuery('');
    setSelectedCategory('all');
    setShowAllProducts(false);
  };

  return (
    <div className="nexa-app-root">
      {/* Top Header Navigation */}
      <Header
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        selectedCurrency={selectedCurrency}
        setSelectedCurrency={setSelectedCurrency}
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenSignIn={() => setIsSignInOpen(true)}
        onOpenHowItWorks={() => {
          const el = document.getElementById('how-it-works');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }}
        onOpenFaq={() => setIsFaqOpen(true)}
        onSelectCategory={(catId) => setSelectedCategory(catId)}
      />

      {/* Main Hero & Visual Showcase */}
      <Hero
        onExploreClick={() => {
          const el = document.getElementById('popular-products');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }}
        onHowItWorksClick={() => {
          const el = document.getElementById('how-it-works');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }}
      />

      {/* Horizontal Category Pills Quick Bar */}
      <CategoryQuickBar
        selectedCategory={selectedCategory}
        onSelectCategory={(catId) => {
          setSelectedCategory(catId);
          const el = document.getElementById('popular-products');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }}
      />

      {/* Popular Products Catalog */}
      <section className="popular-products-section" id="popular-products">
        <div className="container">
          <div className="section-header-row">
            <div>
              <h2 className="section-main-title">
                {selectedCategory !== 'all'
                  ? `${selectedCategory.replace('-', ' ').toUpperCase()} Products`
                  : 'Popular Products'}
              </h2>
              <p className="section-sub-title">
                {searchQuery
                  ? `Showing results for "${searchQuery}"`
                  : 'Most bought and trusted by our customers.'}
              </p>
            </div>

            <button
              className="view-all-link-btn"
              onClick={() => {
                if (selectedCategory !== 'all' || searchQuery) {
                  handleResetFilters();
                } else {
                  setShowAllProducts(!showAllProducts);
                }
              }}
            >
              <span>
                {selectedCategory !== 'all' || searchQuery
                  ? 'Clear Filter'
                  : showAllProducts
                  ? 'Show Popular'
                  : 'View All'}
              </span>
              <ArrowRight size={14} />
            </button>
          </div>

          {displayedProducts.length === 0 ? (
            <div style={{
              textAlign: 'center',
              padding: '60px 20px',
              background: '#FFFFFF',
              borderRadius: '16px',
              border: '1px solid #EAE5DB'
            }}>
              <div style={{
                width: '56px',
                height: '56px',
                borderRadius: '50%',
                background: '#F3F4F6',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 16px',
                color: '#6B7280'
              }}>
                <SearchX size={28} />
              </div>
              <h3 style={{ fontSize: '18px', fontWeight: 800, marginBottom: '6px' }}>
                No matching digital products found
              </h3>
              <p style={{ fontSize: '13.5px', color: '#6B7280', marginBottom: '20px' }}>
                Try adjusting your search terms or selecting another category.
              </p>
              <button className="btn-hero-primary" onClick={handleResetFilters}>
                Browse All Products
              </button>
            </div>
          ) : (
            <div className="products-grid">
              {displayedProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  selectedCurrency={selectedCurrency}
                  onSelectProduct={(p) => setInspectProduct(p)}
                  onAddToCart={handleAddToCart}
                  isInCart={cartItems.some((item) => item.id === product.id)}
                />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Entertainment Promo Banner */}
      <EntertainmentBanner
        onShopNow={() => {
          setSelectedCategory('streaming');
          const el = document.getElementById('popular-products');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }}
      />

      {/* How It Works Section */}
      <HowItWorksSection />

      {/* What Our Customers Say (Testimonials) */}
      <TestimonialsSection
        onAllReviewsClick={() => {
          const el = document.getElementById('testimonials');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }}
      />

      {/* Footer */}
      <Footer
        onCategoryClick={(catId) => {
          setSelectedCategory(catId);
          const el = document.getElementById('popular-products');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }}
        onOrdersClick={() => setIsOrdersListOpen(true)}
        onFaqClick={() => setIsFaqOpen(true)}
      />

      {/* Modals & Drawers */}
      {/* 1. Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onCheckout={(item) => {
          setIsCartOpen(false);
          setCheckoutProduct(item);
        }}
        selectedCurrency={selectedCurrency}
      />

      {/* 2. Product Detail Modal */}
      {inspectProduct && (
        <ProductDetailModal
          product={inspectProduct}
          selectedCurrency={selectedCurrency}
          onClose={() => setInspectProduct(null)}
          onBuyNow={(p) => setCheckoutProduct(p)}
          onAddToCart={handleAddToCart}
        />
      )}

      {/* 3. Checkout Modal */}
      {checkoutProduct && (
        <CheckoutModal
          product={checkoutProduct}
          selectedCurrency={selectedCurrency}
          onClose={() => setCheckoutProduct(null)}
          onCompleteOrder={handleCompleteOrder}
        />
      )}

      {/* 4. Order Escrow / Credentials Modal */}
      {activeOrder && (
        <OrderEscrowView
          order={activeOrder}
          onClose={() => setActiveOrder(null)}
        />
      )}

      {/* 5. Sign In Modal */}
      <SignInModal
        isOpen={isSignInOpen}
        onClose={() => setIsSignInOpen(false)}
        onLoginSuccess={() => {}}
      />

      {/* 6. FAQ Modal */}
      <FAQModal
        isOpen={isFaqOpen}
        onClose={() => setIsFaqOpen(false)}
      />

      {/* 7. Orders List Modal */}
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
