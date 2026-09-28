import React from 'react';
import { ShoppingCart, CreditCard, Mail, CheckCircle2 } from 'lucide-react';
import { HOW_IT_WORKS_STEPS } from '../data/mockData';

const STEP_ICONS = {
  cart: ShoppingCart,
  card: CreditCard,
  mail: Mail,
  check: CheckCircle2
};

export default function HowItWorksSection() {
  return (
    <section className="how-it-works-section" id="how-it-works">
      <div className="container">
        <div className="section-header-block">
          <h2 className="section-main-title">How It Works</h2>
          <p className="section-sub-title">Get your product in just a few simple steps.</p>
        </div>

        <div className="how-it-works-grid">
          {HOW_IT_WORKS_STEPS.map((stepItem) => {
            const IconComponent = STEP_ICONS[stepItem.icon] || ShoppingCart;
            return (
              <div key={stepItem.step} className="step-card">
                <div className="step-icon-circle">
                  <IconComponent size={22} className="step-icon" />
                </div>
                <div className="step-content">
                  <h3 className="step-title">{stepItem.title}</h3>
                  <p className="step-desc">{stepItem.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
