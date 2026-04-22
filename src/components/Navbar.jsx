import React, { useEffect, useState, useRef } from 'react';
import { Menu, X, Moon, Sun, ArrowLeft } from 'lucide-react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = ({ darkMode, setDarkMode }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const menuRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMobileOpen(false);
      }
    };
    if (mobileOpen) document.addEventListener('mousedown', handleClickOutside);
    else document.removeEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [mobileOpen]);

  const navLinks = [
    { name: 'About', id: 'about' },
    { name: 'Projects', id: 'projects' },
    { name: 'Contact', id: 'contact' }
  ];

  const handleScrollTo = (id) => {
    if (location.pathname !== '/') {
      navigate('/', { replace: false });
      setTimeout(() => {
        const section = document.getElementById(id);
        if (section) section.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const section = document.getElementById(id);
      if (section) section.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileOpen(false);
  };

  const isProjectPage = location.pathname.startsWith('/project/');

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 px-6 md:px-12 py-4 flex justify-between items-center transition-all duration-500
        ${scrolled ? 'bg-white/80 dark:bg-black/80 backdrop-blur-md py-3 border-b border-black/5 dark:border-white/5' : 'bg-transparent'}
        ${darkMode ? 'text-white' : 'text-black'}
      `}>
      
      {/* Logo / Back Button */}
      <div className="flex items-center">
        {isProjectPage ? (
          <Link
            to="/"
            className="flex items-center gap-2 text-sm font-black uppercase tracking-tighter hover:text-accent transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back Home
          </Link>
        ) : (
          <a
            href='/'
            className='text-xl font-black tracking-tighter hover:text-accent transition-colors'
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}>
            M.SANTOS
          </a>
        )}
      </div>

      {/* Desktop Links */}
      <div className='hidden md:flex items-center gap-10'>
        {!isProjectPage && navLinks.map((link) => (
          <button
            key={link.id}
            onClick={() => handleScrollTo(link.id)}
            className="text-[10px] uppercase tracking-[0.3em] font-bold hover:text-accent transition-colors relative group">
            {link.name}
            <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-accent transition-all group-hover:w-full"></span>
          </button>
        ))}
        
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors">
          {darkMode ? <Sun className="w-4 h-4 text-yellow-400" /> : <Moon className="w-4 h-4" />}
        </button>

        {!isProjectPage && (
          <button 
            onClick={() => handleScrollTo('contact')}
            className="px-6 py-2 bg-black dark:bg-white text-white dark:text-black rounded-full text-[10px] font-black uppercase tracking-[0.2em] hover:bg-accent dark:hover:bg-accent transition-colors">
            Let's Talk
          </button>
        )}
      </div>

      {/* Mobile Hamburger */}
      <div className='md:hidden flex items-center gap-4'>
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="p-2">
          {darkMode ? <Sun className="w-5 h-5 text-yellow-400" /> : <Moon className="w-5 h-5" />}
        </button>
        <button onClick={() => setMobileOpen(!mobileOpen)} className="p-2">
          {mobileOpen ? <X className='w-6 h-6' /> : <Menu className='w-6 h-6' />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            ref={menuRef}
            className="absolute top-full left-0 right-0 bg-white/95 dark:bg-black/95 backdrop-blur-lg border-b border-black/5 dark:border-white/5 flex flex-col items-center gap-8 py-12 md:hidden">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleScrollTo(link.id)}
                className='text-2xl font-black uppercase tracking-tighter hover:text-accent transition-colors'>
                {link.name}
              </button>
            ))}
            <button 
              onClick={() => handleScrollTo('contact')}
              className="mt-4 px-8 py-4 bg-accent text-white rounded-full text-sm font-black uppercase tracking-[0.2em]">
              Start a Project
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
