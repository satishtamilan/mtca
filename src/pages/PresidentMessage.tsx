import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Star } from 'lucide-react';

function PresidentMessage() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-red-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Founder/President's Message</h1>
          <p className="text-xl text-red-100 max-w-3xl">
            A personal message from our founder and president about MTCA's journey and vision
          </p>
        </div>
      </div>

      {/* President's Message Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <Star className="h-16 w-16 text-red-600 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Founder/President's Message</h2>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm p-8 border border-gray-200">
            <div className="flex flex-col md:flex-row items-start space-y-6 md:space-y-0 md:space-x-8">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face"
                alt="Dr. Rajesh Kumar"
                className="w-48 h-48 rounded-lg object-cover mx-auto md:mx-0"
              />
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Dr. Rajesh Kumar</h3>
                <p className="text-red-600 font-semibold mb-4">Founder & President</p>
                <div className="space-y-4 text-gray-700">
                  <p className="italic text-lg">
                    "வணக்கம்! Dear Friends and Fellow Tamil Community Members,"
                  </p>
                  <p>
                    It gives me immense pleasure to welcome you to the Midlands Tamil Cultural Association. When we founded MTCA over two decades ago, our dream was simple yet profound: to create a home away from home for Tamil families in the Midlands, where our children could learn their mother tongue and embrace their cultural roots.
                  </p>
                  <p>
                    Today, I am proud to say that MTCA has become the first Tamil language school in our region, serving hundreds of families and nurturing young minds in the beautiful Tamil language and culture. Our journey has been one of dedication, community support, and unwavering commitment to excellence.
                  </p>
                  <p>
                    As we continue to grow and evolve, our mission remains unchanged: to ensure that the flame of Tamil culture burns bright in the hearts of our future generations, while they thrive as proud British Tamils.
                  </p>
                  <p className="font-semibold">
                    நன்றி! Thank you for being part of our MTCA family.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Information */}
          <div className="mt-12 grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Leadership Philosophy</h3>
              <p className="text-gray-700 mb-4">
                Dr. Kumar believes in leading by example and fostering a collaborative environment where every member of the MTCA community feels valued and heard.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>• Community-first approach</li>
                <li>• Inclusive decision making</li>
                <li>• Continuous improvement</li>
                <li>• Cultural authenticity</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Educational Background</h3>
              <div className="space-y-3 text-gray-700">
                <div>
                  <strong>Ph.D. in Education</strong>
                  <p className="text-sm text-gray-600">University of Birmingham</p>
                </div>
                <div>
                  <strong>M.A. in Tamil Literature</strong>
                  <p className="text-sm text-gray-600">University of Madras</p>
                </div>
                <div>
                  <strong>B.Ed. in Teaching</strong>
                  <p className="text-sm text-gray-600">Tamil Nadu Teachers University</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default PresidentMessage;
