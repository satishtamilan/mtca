import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

function Events() {
  const { t } = useLanguage();
  
  const events = [
    {
      title: t('events.pongal'),
      date: "January 15, 2024",
      image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&q=80",
    },
    {
      title: t('events.tamilNewYear'),
      date: "April 14, 2024",
      image: "https://images.unsplash.com/photo-1514222709107-a180c68d72b4?auto=format&fit=crop&q=80",
    },
    {
      title: t('events.summer'),
      date: "July 20, 2024",
      image: "https://images.unsplash.com/photo-1533900298318-6b8da08a523e?auto=format&fit=crop&q=80",
    }
  ];

  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold mb-12">{t('events.title')}</h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <div key={index} className="bg-white rounded-xl overflow-hidden shadow-sm">
              <img src={event.image} alt={event.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                <p className="text-gray-600 mb-4">{event.date}</p>
                <button className="text-red-600 font-semibold hover:text-red-700">
                  {t('events.learnMore')} →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Events;