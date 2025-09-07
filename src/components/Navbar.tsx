import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, GraduationCap, ChevronDown } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import LanguageSwitch from './LanguageSwitch';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const { t } = useLanguage();
  const location = useLocation();
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const isWhoAreWeActive = () => {
    const whoAreWePaths = ['/about', '/mission', '/president-message', '/history', '/operations', '/admin-team', '/teachers'];
    return whoAreWePaths.includes(location.pathname);
  };

  const navItems = [
    { path: '/', label: 'Home Page' },
    { path: '/courses', label: 'Courses & Student Support' },
    { path: '/admin', label: 'Administrative Information' },
    { path: '/events-gallery', label: 'Events & Gallery' },
    { path: '/contact', label: 'Contact us' },
  ];

  const whoAreWeItems = [
    { path: '/mission', label: 'Our Mission Statement' },
    { path: '/president-message', label: 'Founder/President\'s Message' },
    { path: '/history', label: 'History' },
    { path: '/operations', label: 'How do we operate' },
    { path: '/admin-team', label: 'Our Administrative team' },
    { path: '/teachers', label: 'Our Teachers' },
  ];

  return (
    <header>
      {/* Top Bar */}
      <div className="bg-red-600 text-white py-2">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <a href="tel:+441234567890" className="text-sm hover:text-gray-200">+44 123 456 7890</a>
            <a href="mailto:info@midlandstamilculture.org" className="text-sm hover:text-gray-200">info@midlandstamilculture.org</a>
          </div>
          <LanguageSwitch />
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between h-20">
            {/* Logo */}
            <div className="flex items-center">
              <Link to="/" className="flex items-center space-x-2">
                <GraduationCap className="h-10 w-10 text-red-600" />
                <div>
                  <div className="text-xl font-bold text-red-600">MTCA</div>
                  <div className="text-sm text-gray-600">Midlands Tamil Cultural Association</div>
                </div>
              </Link>
            </div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center">
              <div className="flex space-x-8">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`${
                      isActive(item.path)
                        ? 'text-red-600 border-b-2 border-red-600'
                        : 'text-gray-700 hover:text-red-600 hover:border-b-2 hover:border-red-600'
                    } py-7 text-sm font-medium transition-colors duration-200`}
                  >
                    {item.label}
                  </Link>
                ))}
                
                {/* Who are we Dropdown */}
                <div className="relative" ref={dropdownRef}>
                  <button
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                    className={`${
                      isWhoAreWeActive()
                        ? 'text-red-600 border-b-2 border-red-600'
                        : 'text-gray-700 hover:text-red-600 hover:border-b-2 hover:border-red-600'
                    } py-7 text-sm font-medium transition-colors duration-200 flex items-center`}
                  >
                    Who are we
                    <ChevronDown className={`ml-1 h-4 w-4 transition-transform ${dropdownOpen ? 'rotate-180' : ''}`} />
                  </button>
                  
                  {dropdownOpen && (
                    <div className="absolute top-full left-0 mt-0 w-64 bg-white rounded-md shadow-lg border border-gray-200 py-2 z-50">
                      {whoAreWeItems.map((item) => (
                        <Link
                          key={item.path}
                          to={item.path}
                          onClick={() => setDropdownOpen(false)}
                          className={`block px-4 py-2 text-sm ${
                            isActive(item.path)
                              ? 'text-red-600 bg-red-50'
                              : 'text-gray-700 hover:text-red-600 hover:bg-red-50'
                          } transition-colors duration-200`}
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              </div>
              <Link
                to="/enroll"
                className="ml-8 bg-red-600 text-white px-6 py-2 rounded-full hover:bg-red-700 transition text-sm font-medium"
              >
                {t('nav.joinUs')}
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden flex items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-700 hover:text-red-600 p-2"
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isOpen && (
            <div className="lg:hidden border-t border-gray-200">
              <div className="pt-2 pb-4 space-y-1">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`block px-4 py-2 ${
                      isActive(item.path)
                        ? 'text-red-600 bg-red-50'
                        : 'text-gray-700 hover:text-red-600 hover:bg-red-50'
                    } text-sm font-medium`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
                
                {/* Mobile Who are we section */}
                <div className="px-4 py-2">
                  <div className="text-sm font-medium text-gray-900 mb-2">Who are we</div>
                  {whoAreWeItems.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      className={`block px-4 py-2 ${
                        isActive(item.path)
                          ? 'text-red-600 bg-red-50'
                          : 'text-gray-700 hover:text-red-600 hover:bg-red-50'
                      } text-sm`}
                      onClick={() => setIsOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
                <Link
                  to="/enroll"
                  className="block mx-4 mt-4 bg-red-600 text-white px-4 py-2 rounded-full text-center text-sm font-medium hover:bg-red-700 transition"
                  onClick={() => setIsOpen(false)}
                >
                  {t('nav.joinUs')}
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;