import React from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

function Contact() {
  const { t } = useLanguage();

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold mb-12">{t('contact.title')}</h1>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <div className="flex items-center mb-8">
              <MapPin className="w-6 h-6 text-red-600 mr-4" />
              <div>
                <h3 className="font-semibold mb-1">{t('contact.location')}</h3>
                <p className="text-gray-600">123 Community Center, Birmingham, UK</p>
              </div>
            </div>
            <div className="flex items-center mb-8">
              <Phone className="w-6 h-6 text-red-600 mr-4" />
              <div>
                <h3 className="font-semibold mb-1">{t('contact.phone')}</h3>
                <p className="text-gray-600">+44 123 456 7890</p>
              </div>
            </div>
            <div className="flex items-center">
              <Mail className="w-6 h-6 text-red-600 mr-4" />
              <div>
                <h3 className="font-semibold mb-1">{t('contact.email')}</h3>
                <p className="text-gray-600">info@midlandstamilculture.org</p>
              </div>
            </div>
          </div>
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">{t('contact.form.name')}</label>
              <input type="text" id="name" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">{t('contact.form.email')}</label>
              <input type="email" id="email" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent" />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">{t('contact.form.message')}</label>
              <textarea id="message" rows={4} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent"></textarea>
            </div>
            <button type="submit" className="w-full bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition">
              {t('contact.form.send')}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;