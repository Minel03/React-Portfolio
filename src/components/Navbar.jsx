import React, { useEffect, useState, useRef } from 'react';
import { Menu, X } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

const Navbar = ({ darkMode, setDarkMode }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const menuRef = useRef(null); // ref for mobile menu container

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMobileOpen(false);
      }
    };

    if (mobileOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [mobileOpen]);

  const navLinks = ['About', 'Projects', 'Contact'];

  const handleScrollTo = (id) => {
    if (location.pathname !== '/') {
      navigate('/', { replace: false });
      setTimeout(() => {
        const section = document.getElementById(id.toLowerCase());
        if (section) section.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const section = document.getElementById(id.toLowerCase());
      if (section) section.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 px-6 py-4 flex justify-between items-center transition-all duration-300
        ${scrolled ? 'bg-white/90 dark:bg-black/90 backdrop-blur-sm' : 'bg-transparent'}
        ${darkMode ? 'text-white' : 'text-black'}
      `}>
      {/* Logo */}
      <a
        href='/'
        className='text-xl font-bold tracking-tight hover:opacity-70 transition-opacity'
        onClick={(e) => {
          e.preventDefault();
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}>
        MYNEL SANTOS
      </a>

      {/* Desktop Links */}
      <div className='hidden md:flex items-center gap-8'>
        {navLinks.map((link) => (
          <button
            key={link}
            onClick={() => handleScrollTo(link)}
            className={`text-sm uppercase tracking-widest hover:underline transition-all ${
              darkMode ? 'text-white' : 'text-black'
            }`}>
            {link}
          </button>
        ))}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className={`text-xs uppercase tracking-widest border px-3 py-1 hover:opacity-70 transition ${
            darkMode ? 'text-white border-white' : 'text-black border-black'
          }`}>
          {darkMode ? 'Light' : 'Dark'}
        </button>
      </div>

      {/* Mobile Hamburger */}
      <div className='md:hidden flex items-center'>
        <button onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? (
            <X className='w-6 h-6' />
          ) : (
            <Menu className='w-6 h-6' />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div
          ref={menuRef} // attach ref
          className={`absolute top-full left-0 right-0 bg-white dark:bg-black text-black dark:text-white flex flex-col items-center gap-4 py-6 md:hidden backdrop-blur-sm`}>
          {navLinks.map((link) => (
            <button
              key={link}
              onClick={() => handleScrollTo(link)}
              className='text-lg uppercase tracking-widest hover:line-through transition-all'>
              {link}
            </button>
          ))}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`text-sm uppercase tracking-widest border px-4 py-2 hover:opacity-70 transition ${
              darkMode ? 'text-white border-white' : 'text-black border-black'
            }`}>
            {darkMode ? 'Light' : 'Dark'}
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
