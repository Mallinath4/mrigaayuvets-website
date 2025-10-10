import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './DiwaliPopup.css'; // ← Import the CSS file

function DiwaliPopup() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      const hasSeenPopup = sessionStorage.getItem('diwaliPopupSeen');
      if (!hasSeenPopup) {
        setIsVisible(true);
      }
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const closePopup = () => {
    setIsVisible(false);
    sessionStorage.setItem('diwaliPopupSeen', 'true');
  };

  if (!isVisible) return null;

  return (
    <div className="diwali-modal-overlay" onClick={closePopup}>
      <div className="diwali-modal-content" onClick={(e) => e.stopPropagation()}>
        
        <button className="close-btn" onClick={closePopup} aria-label="Close">
          ×
        </button>

        <div className="diwali-header">
          🪔 Happy Diwali! 🪔
        </div>

        <p style={{ fontSize: '0.85rem', color: '#D84315', fontWeight: 600, marginBottom: '12px' }}>
          शुभ दीपावली from MrigaAayuvets
        </p>

        <div style={{ fontSize: '2rem', marginBottom: '12px' }}>
          🐕🪔🐈
        </div>

        <div className="diwali-offer">
          Get <span style={{ color: '#FF6F00', fontSize: '1.3rem', fontWeight: 700 }}>25% OFF</span> on all pet care services!
        </div>

        <div className="diwali-code">
          Use Code: <strong>DIWALI25</strong>
        </div>

        <div style={{ fontSize: '0.8rem', color: '#666', marginBottom: '16px' }}>
          ⏰ Valid: Oct 20 - Nov 5, 2025
        </div>

        <Link to="/appointment" onClick={closePopup}>
          <button className="book-now-btn">
            📅 Book Appointment
          </button>
        </Link>

        <a 
          href="https://wa.me/918208657969?text=Hi! I want Diwali offer (25% OFF)" 
          target="_blank" 
          rel="noopener noreferrer"
          onClick={closePopup}
        >
          <button className="whatsapp-btn">
            💬 WhatsApp Us
          </button>
        </a>

        <p style={{ fontSize: '0.75rem', color: '#888', marginTop: '12px' }}>
          🐾 Keep pets safe during fireworks!
        </p>
      </div>
    </div>
  );
}

export default DiwaliPopup;
