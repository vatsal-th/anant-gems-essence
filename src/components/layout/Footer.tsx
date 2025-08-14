import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Instagram, Facebook, Twitter, MapPin, Phone, Mail } from 'lucide-react';
import anantGemsLogo from '@/assets/anant-gems-logo.jpg';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: 'Collections',
      links: [
        { name: 'Engagement Rings', href: '/collections/rings' },
        { name: 'Necklaces', href: '/collections/necklaces' },
        { name: 'Bracelets', href: '/collections/bracelets' },
        { name: 'Earrings', href: '/collections/earrings' },
        { name: 'Bridal Collection', href: '/collections/bridal' },
      ]
    },
    {
      title: 'About',
      links: [
        { name: 'Our Story', href: '/about' },
        { name: 'Craftsmanship', href: '/craftsmanship' },
        { name: 'Sustainability', href: '/sustainability' },
        { name: 'Careers', href: '/careers' },
      ]
    },
    {
      title: 'Customer Care',
      links: [
        { name: 'Contact Us', href: '/contact' },
        { name: 'Size Guide', href: '/size-guide' },
        { name: 'Care Instructions', href: '/care' },
        { name: 'Warranty', href: '/warranty' },
        { name: 'Returns', href: '/returns' },
      ]
    }
  ];

  return (
    <footer className="bg-background border-t border-border-subtle">
      {/* Newsletter Section */}
      <div className="border-b border-border-subtle">
        <div className="container-luxury py-16">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="font-serif text-2xl md:text-3xl font-light mb-4">
              Stay Connected
            </h3>
            <p className="text-muted-foreground mb-8 text-lg">
              Be the first to discover our latest collections and exclusive events
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                className="flex-1 h-12 text-base"
              />
              <Button 
                variant="default" 
                className="h-12 px-8 bg-primary hover:bg-primary-700"
              >
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container-luxury py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <Link to="/" className="inline-block mb-6">
              <img 
                src={anantGemsLogo} 
                alt="Anant Gems" 
                className="h-12 w-auto"
              />
            </Link>
            <p className="text-muted-foreground mb-6 max-w-md leading-relaxed">
              Crafting exceptional jewelry with infinite elegance. Each piece tells a story of artistry, passion, and timeless beauty.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-primary-500 flex-shrink-0" />
                <span className="text-muted-foreground">
                  123 Jewelry District, New York, NY 10013
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-primary-500 flex-shrink-0" />
                <span className="text-muted-foreground">
                  +1 (555) 123-4567
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-primary-500 flex-shrink-0" />
                <span className="text-muted-foreground">
                  hello@anantgems.com
                </span>
              </div>
            </div>
          </div>

          {/* Footer Sections */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h4 className="font-medium text-foreground mb-4 tracking-wide">
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border-subtle">
        <div className="container-luxury py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-sm text-muted-foreground">
              © {currentYear} Anant Gems. All rights reserved.
            </div>

            {/* Legal Links */}
            <div className="flex items-center space-x-6 text-sm">
              <Link 
                to="/privacy" 
                className="text-muted-foreground hover:text-primary transition-colors duration-300"
              >
                Privacy Policy
              </Link>
              <Link 
                to="/terms" 
                className="text-muted-foreground hover:text-primary transition-colors duration-300"
              >
                Terms of Service
              </Link>
              <Link 
                to="/returns" 
                className="text-muted-foreground hover:text-primary transition-colors duration-300"
              >
                Returns
              </Link>
            </div>

            {/* Social Media */}
            <div className="flex items-center space-x-4">
              <Button 
                variant="ghost" 
                size="sm" 
                className="h-8 w-8 p-0 text-muted-foreground hover:text-primary"
              >
                <Instagram className="h-4 w-4" />
              </Button>
              <Button 
                variant="ghost" 
                size="sm" 
                className="h-8 w-8 p-0 text-muted-foreground hover:text-primary"
              >
                <Facebook className="h-4 w-4" />
              </Button>
              <Button 
                variant="ghost" 
                size="sm" 
                className="h-8 w-8 p-0 text-muted-foreground hover:text-primary"
              >
                <Twitter className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;