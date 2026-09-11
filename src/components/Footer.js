import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return <footer className="site-footer">
    <div className="container footer-grid">
      <div><Link to="/" className="brand footer-brand"><img src="/images/logo.png" alt="MrigAayuvets"/><span><strong>MrigAayuvets</strong><small>Compassionate veterinary care</small></span></Link><p>Professional veterinary care for dogs, cats and companion animals, with convenient home visits across Mumbai.</p><div className="footer-actions"><a href="tel:+918208657969">Call us</a><a href="https://wa.me/918208657969" target="_blank" rel="noreferrer">WhatsApp</a></div></div>
      <div><h3>Explore</h3><Link to="/about">About us</Link><Link to="/services">Services</Link><Link to="/gallery">Gallery</Link><Link to="/blogs">Pet care blog</Link></div>
      <div><h3>Get care</h3><Link to="/appointment">Book appointment</Link><Link to="/contact">Contact us</Link><a href="tel:+918208657969">Emergency call</a><a href="https://wa.me/918208657969" target="_blank" rel="noreferrer">Chat on WhatsApp</a></div>
      <div><h3>Contact</h3><p>📍 Mumbai, Maharashtra</p><p>📞 +91 82086 57969</p><p>✉️ contact@mrigaayuvets.in</p><p>Home visits available in selected Mumbai areas.</p></div>
    </div>
    <div className="footer-bottom"><div className="container footer-bottom-inner"><span>© {new Date().getFullYear()} MrigAayuvets. All rights reserved.</span><span><Link to="/privacy">Privacy</Link> · <Link to="/terms">Terms</Link> · <Link to="/refund">Refunds</Link> · <Link to="/admin/login">Admin</Link></span></div></div>
  </footer>;
}
export default Footer;
