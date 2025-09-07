import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

function Home() {
  const { t } = useLanguage();

  return (
    <div>
      {/* Hero Section with Proverb */}
      <div className="relative min-h-[600px] bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-white rounded-2xl shadow-sm p-12">
            {/* Proverb Section */}
            <div className="mb-12 p-8 bg-red-50 rounded-xl border border-red-100">
              <p className="text-3xl text-red-800 mb-3 font-medium">"தமிழ் மொழி அறிவின் அருவி, அறிவின் ஒளி!"</p>
              <p className="text-xl text-red-700">- திருவள்ளுவர்</p>
            </div>

            {/* Welcome Message */}
            <div className="space-y-6 max-w-4xl">
              <h1 className="text-4xl font-bold mb-8 text-gray-900">
                மத்திய இங்கிலாந்து தமிழ் கலாச்சாரச் சங்கம் உங்களை அன்புடன் வரவேற்கிறது!
              </h1>
              <p className="text-xl leading-relaxed text-gray-700">
                தரணியின் எப்பக்கம் பயணம் செய்யினும் எமது அழகிய கலாச்சாரத்தையும் அதன் ஆணிவேரான மொழியையும் சேர்ந்தே எடுத்துச்செல்லும் நாம் எமது அடுத்த தலைமுறைக்கு மொழி மற்றும் எமது கலாச்சரவிழுமியங்களையும் அழகுற எடுத்து இயம்பி அவற்றை அவர்களும் அனுபவிக்க வழி செய்யும் பணியை நாம் தசாப்தங்களாக செய்துவருகின்றோம்.
              </p>
              <p className="text-xl font-semibold text-gray-800">
                எமது மாநிலத்தின் முதலாவது தமிழ் மொழிப்பாடசாலை என்ற பெருமையுடன் எமது வணக்கத்தை தெரிவித்து கொள்கின்றோம்.
              </p>
            </div>

            {/* Image Section */}
            <div className="mt-12 rounded-xl overflow-hidden shadow-lg">
              <img 
                src="/images/tamil-lamp.jpeg"
                alt="Traditional Tamil Kuthu Vilakku - Symbol of Knowledge and Light"
                className="w-full h-[400px] object-cover object-bottom"
                style={{ 
                  backgroundColor: '#f3f4f6',
                  objectPosition: 'center bottom'
                }}
                onError={(e) => {
                  // Fallback to a placeholder if the image doesn't load
                  const target = e.target as HTMLImageElement;
                  target.src = "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=400&fit=crop&crop=center";
                }}
              />
              <div className="bg-red-50 p-4 text-center">
                <p className="text-sm text-red-800 italic">
                  "தமிழ் மொழி அறிவின் அருவி, அறிவின் ஒளி!" - The traditional lamp symbolizes the light of knowledge
                </p>
              </div>
            </div>

            <div className="flex space-x-4 mt-12">
              <Link
                to="/enroll"
                className="bg-red-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-red-700 transition"
              >
                {t('hero.cta')}
              </Link>
              <Link
                to="/about"
                className="bg-gray-100 text-gray-900 px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-200 transition"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>

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
