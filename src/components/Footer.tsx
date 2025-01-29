import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Youtube, GraduationCap, Phone, Mail, MapPin, Clock } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12">
          {/* About Section */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <GraduationCap className="h-8 w-8 text-red-600" />
              <div>
                <div className="text-xl font-bold">MTCA</div>
                <div className="text-sm text-gray-400">Est. 1985</div>
              </div>
            </div>
            <p className="text-gray-400 mb-6">{t('footer.about')}</p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-red-600 transition">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-red-600 transition">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-red-600 transition">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-red-600 transition">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">{t('footer.quickLinks')}</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-gray-400 hover:text-red-600 transition flex items-center">
                  <span className="w-1.5 h-1.5 bg-red-600 rounded-full mr-2"></span>
                  {t('nav.about')}
                </Link>
              </li>
              <li>
                <Link to="/events" className="text-gray-400 hover:text-red-600 transition flex items-center">
                  <span className="w-1.5 h-1.5 bg-red-600 rounded-full mr-2"></span>
                  {t('nav.events')}
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-gray-400 hover:text-red-600 transition flex items-center">
                  <span className="w-1.5 h-1.5 bg-red-600 rounded-full mr-2"></span>
                  {t('nav.gallery')}
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-red-600 transition flex items-center">
                  <span className="w-1.5 h-1.5 bg-red-600 rounded-full mr-2"></span>
                  {t('nav.contact')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">{t('footer.contactInfo')}</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 text-red-600 mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-400">123 Community Center, Birmingham, UK</span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 text-red-600 mr-3 flex-shrink-0" />
                <span className="text-gray-400">+44 123 456 7890</span>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 text-red-600 mr-3 flex-shrink-0" />
                <span className="text-gray-400">info@midlandstamilculture.org</span>
              </li>
              <li className="flex items-center">
                <Clock className="w-5 h-5 text-red-600 mr-3 flex-shrink-0" />
                <span className="text-gray-400">Sat-Sun: 10:00 AM - 7:00 PM</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Newsletter</h3>
            <p className="text-gray-400 mb-4">Subscribe to our newsletter for updates and news.</p>
            <form className="space-y-3">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent text-white placeholder-gray-500"
              />
              <button
                type="submit"
                className="w-full bg-red-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-red-700 transition"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Midlands Tamil Cultural Association. {t('footer.rights')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;