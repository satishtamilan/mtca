import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

function Enroll() {
  const { t } = useLanguage();

  return (
    <div className="py-20">
      <div className="max-w-3xl mx-auto px-4">
        <h1 className="text-4xl font-bold mb-4">{t('enroll.title')}</h1>
        <p className="text-gray-600 mb-8">{t('enroll.subtitle')}</p>
        
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSfxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx/viewform?embedded=true"
          className="w-full h-[800px] border-0"
          title="Enrollment Form"
        >Loading...</iframe>
      </div>
    </div>
  );
}

export default Enroll;