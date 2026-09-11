import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const links = [
  ['Home', '/'], ['About', '/about'], ['Services', '/services'], ['Gallery', '/gallery'], ['Blogs', '/blogs'], ['Contact', '/contact']
];

function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setOpen(false); window.scrollTo({ top: 0, behavior: 'smooth' }); }, [location.pathname]);

  return (
    <>
      <div className="emergency-strip"><div className="container emergency-inner"><span>24/7 emergency support for pets</span><a href="tel:+918208657969">Call +91 82086 57969</a></div></div>
      <header className={`site-nav ${scrolled ? 'site-nav-scrolled' : ''}`}>
        <div className="container nav-inner">
          <Link to="/" className="brand" aria-label="MrigAayuvets home">
            <img src="/images/logo.png" alt="MrigAayuvets logo" />
            <span><strong>MrigAayuvets</strong><small>Veterinary care at your doorstep</small></span>
          </Link>
          <nav className="desktop-nav" aria-label="Primary navigation">
            {links.map(([label, path]) => <Link key={path} to={path} className={location.pathname === path ? 'active' : ''}>{label}</Link>)}
            <Link to="/appointment" className="nav-cta">Book appointment</Link>
          </nav>
          <button className={`menu-button ${open ? 'is-open' : ''}`} onClick={() => setOpen(v => !v)} aria-label={open ? 'Close navigation' : 'Open navigation'} aria-expanded={open} aria-controls="mobile-navigation"><span/><span/><span/></button>
        </div>
        <div id="mobile-navigation" className={`mobile-nav ${open ? 'open' : ''}`}>
          <div className="container mobile-nav-inner">
            {links.map(([label, path]) => <Link key={path} to={path} className={location.pathname === path ? 'active' : ''}>{label}</Link>)}
            <Link to="/appointment" className="nav-cta">Book appointment</Link>
          </div>
        </div>
      </header>
      <div className="floating-actions" aria-label="Quick contact actions">
        <a href="tel:+918208657969" aria-label="Call MrigAayuvets">☎</a>
        <a className="whatsapp" href="https://wa.me/918208657969" target="_blank" rel="noreferrer" aria-label="WhatsApp MrigAayuvets">✆</a>
      </div>
      <div className="mobile-bottom-bar" aria-label="Quick appointment actions">
        <a href="tel:+918208657969">Call now</a>
        <Link to="/appointment">Book appointment</Link>
      </div>
    </>
  );
}
export default Navbar;
