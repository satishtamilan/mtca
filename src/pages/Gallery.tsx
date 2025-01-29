import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

function Gallery() {
  const { t } = useLanguage();

  const images = [
    "https://images.unsplash.com/photo-1582560475093-ba66accbc424?auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1514222709107-a180c68d72b4?auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1533900298318-6b8da08a523e?auto=format&fit=crop&q=80"
  ];

  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold mb-12">{t('nav.gallery')}</h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((image, index) => (
            <div key={index} className="aspect-square rounded-xl overflow-hidden">
              <img src={image} alt={`Gallery image ${index + 1}`} className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Gallery;