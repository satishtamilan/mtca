import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

function About() {
  const { t } = useLanguage();

  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8">{t('nav.about')}</h1>
        <div className="prose max-w-none">
          <p className="text-lg text-gray-600 mb-6">
            {t('footer.about')}
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;