import React, { useState } from 'react';
import { X, ChevronDown, HelpCircle } from 'lucide-react';

const FAQS = [
  {
    q: 'How fast do I receive my subscription or license?',
    a: 'Delivery is 100% automated and instant! Within less than 60 seconds of completing payment, your credentials, family invite link, or official license key will be displayed immediately on screen and dispatched to your email.'
  },
  {
    q: 'Are the digital products genuine and guaranteed?',
    a: 'Yes, every product on Nexa Digitals is 100% genuine and verified. All subscriptions and software keys come with our full 30-Day Nexa Replacement Guarantee. If you ever experience any disruption, our 24/7 support will resolve or replace it immediately.'
  },
  {
    q: 'Can I use my existing personal email address?',
    a: 'For services like YouTube Premium, Canva Pro, Apple Music, and Microsoft 365, you can seamlessly connect your existing personal email address via our verified family or team invite tokens without losing your playlists, designs, or data!'
  },
  {
    q: 'What payment methods are supported?',
    a: 'We support all major payment methods including UPI (Google Pay, PhonePe, Paytm), Debit/Credit Cards (Visa, Mastercard, RuPay), NetBanking, and Crypto.'
  },
  {
    q: 'How do refunds work?',
    a: 'We offer an unconditional refund if your license or subscription fails to activate or if we cannot provide a working replacement within 15 minutes of an issue being reported.'
  }
];

export default function FAQModal({ isOpen, onClose }) {
  const [openIndex, setOpenIndex] = useState(0);

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-dialog faq-dialog" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose} aria-label="Close">
          <X size={20} />
        </button>

        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
          <div style={{
            width: '40px',
            height: '40px',
            borderRadius: '10px',
            background: '#F3F4F6',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <HelpCircle size={22} color="#111111" />
          </div>
          <div>
            <h3 style={{ fontSize: '20px', fontWeight: 800 }}>Frequently Asked Questions</h3>
            <p style={{ fontSize: '13px', color: '#6B7280' }}>Everything you need to know about Nexa Digitals</p>
          </div>
        </div>

        <div className="faq-accordion-list">
          {FAQS.map((faq, idx) => {
            const isExpanded = openIndex === idx;
            return (
              <div
                key={idx}
                className={`faq-item ${isExpanded ? 'open' : ''}`}
                onClick={() => setOpenIndex(isExpanded ? null : idx)}
              >
                <div className="faq-question-row">
                  <span className="faq-question-text">{faq.q}</span>
                  <ChevronDown
                    size={16}
                    style={{
                      transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)',
                      transition: 'transform 0.2s ease',
                      flexShrink: 0
                    }}
                  />
                </div>
                {isExpanded && (
                  <div className="faq-answer-block">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
