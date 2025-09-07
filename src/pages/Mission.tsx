import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Heart } from 'lucide-react';

function Mission() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-red-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Our Mission Statement</h1>
          <p className="text-xl text-red-100 max-w-3xl">
            Our commitment to preserving and promoting Tamil language and culture for future generations
          </p>
        </div>
      </div>

      {/* Mission Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <Heart className="h-16 w-16 text-red-600 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission Statement</h2>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm p-8 border border-gray-200">
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                <strong>தமிழ் மொழி அறிவின் அருவி, அறிவின் ஒளி!</strong> - திருவள்ளுவர்
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                The Midlands Tamil Cultural Association (MTCA) is dedicated to preserving, promoting, and passing on the rich heritage of Tamil language and culture to future generations in the United Kingdom.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 mt-8">
                <div className="bg-red-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-red-800 mb-3">Our Vision</h3>
                  <p className="text-gray-700">To be the leading Tamil cultural institution in the Midlands, fostering a vibrant community that celebrates Tamil heritage while embracing British values.</p>
                </div>
                <div className="bg-red-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-red-800 mb-3">Our Values</h3>
                  <ul className="text-gray-700 space-y-1">
                    <li>• Excellence in Tamil education</li>
                    <li>• Cultural preservation</li>
                    <li>• Community unity</li>
                    <li>• Inclusive learning environment</li>
                  </ul>
                </div>
              </div>

              <div className="mt-12">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Core Objectives</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center p-6 bg-gray-50 rounded-lg">
                    <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-white font-bold">1</span>
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-2">Language Preservation</h4>
                    <p className="text-gray-600 text-sm">Maintain and promote the Tamil language through structured education programs</p>
                  </div>
                  <div className="text-center p-6 bg-gray-50 rounded-lg">
                    <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-white font-bold">2</span>
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-2">Cultural Heritage</h4>
                    <p className="text-gray-600 text-sm">Celebrate and share Tamil cultural traditions through arts, music, and dance</p>
                  </div>
                  <div className="text-center p-6 bg-gray-50 rounded-lg">
                    <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-white font-bold">3</span>
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-2">Community Building</h4>
                    <p className="text-gray-600 text-sm">Foster strong connections within the Tamil community and with the broader society</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Mission;
