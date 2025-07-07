import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Sparkles } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    if (location.pathname === '/') {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.href = `/#${id}`;
    }
    setIsMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-white/80'
    }`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
              EntertainPro
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-pink-500 transition-colors">
              Home
            </Link>
            <Link to="/company" className="text-gray-700 hover:text-pink-500 transition-colors">
              Company
            </Link>
            <Link to="/services" className="text-gray-700 hover:text-pink-500 transition-colors">
              Services
            </Link>
            <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-pink-500 transition-colors">
              About
            </button>
            <button onClick={() => scrollToSection('case-studies')} className="text-gray-700 hover:text-pink-500 transition-colors">
              Case Studies
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-pink-500 transition-colors">
              Contact
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-700 hover:text-pink-500 transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4">
              <Link to="/" className="text-gray-700 hover:text-pink-500 transition-colors text-left" onClick={() => setIsMenuOpen(false)}>
                Home
              </Link>
              <Link to="/company" className="text-gray-700 hover:text-pink-500 transition-colors text-left" onClick={() => setIsMenuOpen(false)}>
                Company
              </Link>
              <Link to="/services" className="text-gray-700 hover:text-pink-500 transition-colors text-left" onClick={() => setIsMenuOpen(false)}>
                Services
              </Link>
              <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-pink-500 transition-colors text-left">
                About
              </button>
              <button onClick={() => scrollToSection('case-studies')} className="text-gray-700 hover:text-pink-500 transition-colors text-left">
                Case Studies
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-pink-500 transition-colors text-left">
                Contact
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;