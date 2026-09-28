import React from 'react';
import { ArrowRight } from 'lucide-react';
import bannerImg from '../assets/entertainment-banner.jpg';

export default function EntertainmentBanner({ onShopNow }) {
  return (
    <section className="entertainment-banner-section">
      <div className="container">
        <div className="entertainment-banner-card">
          {/* Background image with subtle overlay */}
          <img
            src={bannerImg}
            alt="Entertainment Lounge with 4K streaming TV and gaming setup"
            className="entertainment-banner-bg"
            loading="lazy"
          />
          <div className="entertainment-banner-overlay" />

          {/* Banner text content */}
          <div className="entertainment-banner-content">
            <h2 className="banner-title">
              Level up your entertainment.
            </h2>
            <p className="banner-subtitle">
              Music, movies, tools and more — all in one place.
            </p>
            <button
              className="btn-banner-shop"
              onClick={onShopNow}
            >
              <span>Shop Now</span>
              <ArrowRight size={15} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
