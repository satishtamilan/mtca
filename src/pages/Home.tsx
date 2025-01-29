import React from 'react';
import { Calendar, Users, Image, BookOpen, Award, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

function Home() {
  const { t } = useLanguage();

  const features = [
    {
      icon: BookOpen,
      title: 'Structured Learning',
      description: 'Comprehensive Tamil language curriculum for all levels'
    },
    {
      icon: Users,
      title: 'Expert Teachers',
      description: 'Experienced and qualified Tamil language instructors'
    },
    {
      icon: Award,
      title: 'Cultural Education',
      description: 'Traditional arts, music, and cultural programs'
    },
    {
      icon: Clock,
      title: 'Flexible Schedule',
      description: 'Weekend classes to suit your availability'
    }
  ];

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
    <div>
      {/* Hero Section */}
      <div className="relative h-[600px]">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1582560475093-ba66accbc424?auto=format&fit=crop&q=80"
            alt="Tamil Cultural Celebration" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 h-full flex items-center">
          <div className="max-w-2xl">
            <h1 className="text-5xl font-bold text-white mb-6">{t('hero.title')}</h1>
            <p className="text-xl text-gray-200 mb-8">{t('hero.subtitle')}</p>
            <div className="flex space-x-4">
              <Link
                to="/enroll"
                className="bg-red-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-red-700 transition"
              >
                {t('hero.cta')}
              </Link>
              <Link
                to="/about"
                className="bg-white text-gray-900 px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-100 transition"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Why Choose MTCA?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Join our vibrant community and experience the best in Tamil language education and cultural learning
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="bg-white p-8 rounded-xl shadow-sm text-center hover:shadow-md transition">
                  <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Icon className="w-8 h-8 text-red-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">{t('events.title')}</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Join us in celebrating Tamil culture through various events throughout the year
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.map((event, index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition">
                <div className="relative h-48">
                  <img src={event.image} alt={event.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-xl font-semibold mb-1">{event.title}</h3>
                    <p className="text-sm">{event.date}</p>
                  </div>
                </div>
                <div className="p-6">
                  <button className="text-red-600 font-semibold hover:text-red-700 transition flex items-center">
                    {t('events.learnMore')} <span className="ml-2">→</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/events"
              className="inline-flex items-center text-red-600 font-semibold hover:text-red-700 transition"
            >
              View All Events <span className="ml-2">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-red-600 py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Join Our Community?</h2>
          <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
            Enroll now and be part of our vibrant Tamil cultural community in the Midlands
          </p>
          <Link
            to="/enroll"
            className="bg-white text-red-600 px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-100 transition inline-block"
          >
            Enroll Today
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Home;