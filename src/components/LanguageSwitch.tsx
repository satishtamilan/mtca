import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const LanguageSwitch: React.FC = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center space-x-2">
      <button
        onClick={() => setLanguage('en')}
        className={`px-2 py-1 rounded ${
          language === 'en'
            ? 'bg-red-600 text-white'
            : 'text-gray-700 hover:text-red-600'
        }`}
      >
        EN
      </button>
      <button
        onClick={() => setLanguage('ta')}
        className={`px-2 py-1 rounded ${
          language === 'ta'
            ? 'bg-red-600 text-white'
            : 'text-gray-700 hover:text-red-600'
        }`}
      >
        தமிழ்
      </button>
    </div>
  );
};

export default LanguageSwitch;