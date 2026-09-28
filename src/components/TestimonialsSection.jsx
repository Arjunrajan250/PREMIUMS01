import React from 'react';
import { ArrowRight, Star } from 'lucide-react';
import { TESTIMONIALS } from '../data/mockData';

export default function TestimonialsSection({ onAllReviewsClick }) {
  return (
    <section className="testimonials-section" id="testimonials">
      <div className="container">
        <div className="section-header-row">
          <div>
            <h2 className="section-main-title">What Our Customers Say</h2>
            <p className="section-sub-title">Trusted by thousands of happy customers.</p>
          </div>
          <button
            className="view-all-link-btn"
            onClick={onAllReviewsClick}
          >
            <span>View All Reviews</span>
            <ArrowRight size={14} />
          </button>
        </div>

        <div className="testimonials-grid">
          {TESTIMONIALS.map((review) => (
            <div key={review.id} className="testimonial-card">
              <div className="testimonial-header">
                <img
                  src={review.avatar}
                  alt={review.name}
                  className="testimonial-avatar"
                  onError={(e) => {
                    e.target.src = 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&auto=format&fit=crop&q=80';
                  }}
                />
                <div className="testimonial-author-meta">
                  <h4 className="testimonial-name">{review.name}</h4>
                  <div className="star-rating">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} size={14} className="star-filled" fill="#EAB308" color="#EAB308" />
                    ))}
                  </div>
                </div>
              </div>

              <p className="testimonial-comment">
                "{review.comment}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
