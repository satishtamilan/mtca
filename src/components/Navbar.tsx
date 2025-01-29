import React, { useState } from 'react';
import { Menu, X, GraduationCap } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import LanguageSwitch from './LanguageSwitch';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useLanguage();
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const navItems = [
    { path: '/', label: 'nav.home' },
    { path: '/about', label: 'nav.about' },
    { path: '/events', label: 'nav.events' },
    { path: '/gallery', label: 'nav.gallery' },
    { path: '/enroll', label: 'nav.enroll' },
    { path: '/timetable', label: 'nav.timetable' },
    { path: '/calendar', label: 'nav.calendar' },
    { path: '/resources', label: 'nav.resources' },
    { path: '/contact', label: 'nav.contact' },
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
                    {t(item.label)}
                  </Link>
                ))}
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
                    {t(item.label)}
                  </Link>
                ))}
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