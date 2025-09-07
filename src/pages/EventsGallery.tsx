import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Calendar, MapPin, Clock, Camera, Users } from 'lucide-react';

function EventsGallery() {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState('events');

  const upcomingEvents = [
    {
      title: 'Tamil New Year Celebration',
      date: 'April 14, 2024',
      time: '2:00 PM - 6:00 PM',
      location: 'Community Center, Birmingham',
      description: 'Join us for a traditional Tamil New Year celebration with cultural performances, food, and activities for all ages.',
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400'
    },
    {
      title: 'Tamil Language Competition',
      date: 'May 18, 2024',
      time: '10:00 AM - 4:00 PM',
      location: 'MTCA School, Coventry',
      description: 'Annual Tamil language competition for students showcasing poetry, storytelling, and essay writing.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400'
    },
    {
      title: 'Cultural Dance Workshop',
      date: 'June 8, 2024',
      time: '1:00 PM - 5:00 PM',
      location: 'Dance Studio, Leicester',
      description: 'Learn traditional Tamil dance forms including Bharatanatyam and folk dances.',
      image: 'https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=400'
    }
  ];

  const galleryImages = [
    {
      title: 'Tamil New Year 2023',
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600',
      category: 'Cultural Events'
    },
    {
      title: 'Student Graduation Ceremony',
      image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9d1?w=600',
      category: 'Academic'
    },
    {
      title: 'Traditional Dance Performance',
      image: 'https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=600',
      category: 'Cultural Events'
    },
    {
      title: 'Community Gathering',
      image: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=600',
      category: 'Community'
    },
    {
      title: 'Language Competition Winners',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600',
      category: 'Academic'
    },
    {
      title: 'Cultural Workshop',
      image: 'https://images.unsplash.com/photo-1544531586-fde5298cdd40?w=600',
      category: 'Workshops'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-red-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Events & Gallery</h1>
          <p className="text-xl text-red-100 max-w-3xl">
            Discover our vibrant community events and explore memories from our cultural celebrations
          </p>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex space-x-8">
            <button
              onClick={() => setActiveTab('events')}
              className={`py-4 px-2 border-b-2 font-medium text-sm ${
                activeTab === 'events'
                  ? 'border-red-600 text-red-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              <Calendar className="h-5 w-5 inline mr-2" />
              Upcoming Events
            </button>
            <button
              onClick={() => setActiveTab('gallery')}
              className={`py-4 px-2 border-b-2 font-medium text-sm ${
                activeTab === 'gallery'
                  ? 'border-red-600 text-red-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              <Camera className="h-5 w-5 inline mr-2" />
              Photo Gallery
            </button>
          </div>
        </div>
      </div>

      {/* Events Tab */}
      {activeTab === 'events' && (
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid gap-8">
              {upcomingEvents.map((event, index) => (
                <div key={index} className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-200">
                  <div className="md:flex">
                    <div className="md:w-1/3">
                      <img
                        src={event.image}
                        alt={event.title}
                        className="w-full h-48 md:h-full object-cover"
                      />
                    </div>
                    <div className="md:w-2/3 p-8">
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">{event.title}</h3>
                      <p className="text-gray-600 mb-6">{event.description}</p>
                      <div className="space-y-2">
                        <div className="flex items-center text-gray-500">
                          <Calendar className="h-5 w-5 mr-3" />
                          <span>{event.date}</span>
                        </div>
                        <div className="flex items-center text-gray-500">
                          <Clock className="h-5 w-5 mr-3" />
                          <span>{event.time}</span>
                        </div>
                        <div className="flex items-center text-gray-500">
                          <MapPin className="h-5 w-5 mr-3" />
                          <span>{event.location}</span>
                        </div>
                      </div>
                      <button className="mt-6 bg-red-600 text-white px-6 py-2 rounded-full hover:bg-red-700 transition">
                        Register Interest
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Gallery Tab */}
      {activeTab === 'gallery' && (
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {galleryImages.map((item, index) => (
                <div key={index} className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-200 group">
                  <div className="relative overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-opacity duration-300 flex items-center justify-center">
                      <Camera className="h-8 w-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
                    <p className="text-sm text-gray-500">{item.category}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="bg-red-600 py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Join Our Next Event</h2>
          <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
            Be part of our vibrant Tamil community and create lasting memories
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-red-600 px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-100 transition">
              View All Events
            </button>
            <button className="bg-red-700 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-red-800 transition">
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default EventsGallery;
