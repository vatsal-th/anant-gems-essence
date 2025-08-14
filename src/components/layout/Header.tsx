import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Heart, Calendar, Menu, X } from 'lucide-react';
import anantGemsLogo from '@/assets/anant-gems-logo.jpg';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Collections', href: '/collections' },
    { name: 'About', href: '/about' },
    { name: 'Craftsmanship', href: '/craftsmanship' },
    { name: 'Journal', href: '/journal' },
    { name: 'Contact', href: '/contact' },
  ];

  const isHome = location.pathname === '/';

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled || !isHome 
          ? 'bg-background/95 backdrop-blur-md shadow-elegant border-b border-border-subtle' 
          : 'bg-transparent'
      }`}
    >
      <div className="container-luxury">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center group">
            <img 
              src={anantGemsLogo} 
              alt="Anant Gems - Infinite Elegance" 
              className="h-12 w-auto transition-transform duration-300 group-hover:scale-105"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-sm font-medium tracking-wide transition-colors duration-300 hover:text-primary relative group ${
                  location.pathname === item.href 
                    ? 'text-primary' 
                    : isScrolled || !isHome 
                      ? 'text-foreground' 
                      : 'text-white'
                }`}
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-primary transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button 
              variant="ghost" 
              size="sm"
              className={`transition-colors duration-300 ${
                isScrolled || !isHome 
                  ? 'text-foreground hover:text-primary' 
                  : 'text-white hover:text-primary-100'
              }`}
            >
              <Heart className="h-4 w-4 mr-2" />
              Wishlist
            </Button>
            <Button 
              variant="default"
              size="sm"
              className="bg-primary hover:bg-primary-700 text-primary-foreground"
            >
              <Calendar className="h-4 w-4 mr-2" />
              Book Appointment
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className={`lg:hidden ${
              isScrolled || !isHome 
                ? 'text-foreground' 
                : 'text-white'
            }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-md border-b border-border-subtle">
            <nav className="px-6 py-6 space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="block text-base font-medium text-foreground hover:text-primary transition-colors duration-300"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 border-t border-border-subtle space-y-3">
                <Button 
                  variant="outline" 
                  className="w-full justify-start"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <Heart className="h-4 w-4 mr-2" />
                  Wishlist
                </Button>
                <Button 
                  variant="default"
                  className="w-full justify-start bg-primary hover:bg-primary-700"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <Calendar className="h-4 w-4 mr-2" />
                  Book Appointment
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;