import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { BookOpen } from 'lucide-react';

function History() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-red-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Our History</h1>
          <p className="text-xl text-red-100 max-w-3xl">
            The journey of MTCA from a small community initiative to the leading Tamil cultural institution in the Midlands
          </p>
        </div>
      </div>

      {/* History Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <BookOpen className="h-16 w-16 text-red-600 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our History</h2>
          </div>
          
          <div className="space-y-8">
            <div className="bg-white rounded-lg shadow-sm p-8 border border-gray-200">
              <div className="space-y-6">
                <div className="border-l-4 border-red-600 pl-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">1998 - The Beginning</h3>
                  <p className="text-gray-700">
                    MTCA was founded by a group of passionate Tamil families in Birmingham who recognized the need for formal Tamil language education in the Midlands. Starting with just 15 students in a community center, the founders were determined to preserve Tamil language and culture for future generations.
                  </p>
                </div>
                
                <div className="border-l-4 border-red-600 pl-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">2003 - First Tamil School</h3>
                  <p className="text-gray-700">
                    MTCA became the first officially recognized Tamil language school in the Midlands region, pioneering structured Tamil education following British educational standards. This milestone marked our commitment to academic excellence and cultural preservation.
                  </p>
                </div>
                
                <div className="border-l-4 border-red-600 pl-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">2008 - Curriculum Development</h3>
                  <p className="text-gray-700">
                    Partnered with British Tamil Exam Board (BTEB) to implement standardized curriculum covering listening, speaking, reading, and writing skills from Nursery to A-Levels. This partnership ensured our students received internationally recognized qualifications.
                  </p>
                </div>
                
                <div className="border-l-4 border-red-600 pl-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">2015 - Cultural Expansion</h3>
                  <p className="text-gray-700">
                    Expanded beyond language education to include cultural programs, traditional dance, music, and community events, becoming a comprehensive cultural center. Added Bharatanatyam, Carnatic music, and traditional instruments to our curriculum.
                  </p>
                </div>
                
                <div className="border-l-4 border-red-600 pl-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">2020 - Digital Transformation</h3>
                  <p className="text-gray-700">
                    Successfully transitioned to online learning during the pandemic, ensuring continuity of education and maintaining community connections through virtual events. Developed digital resources and online teaching methodologies.
                  </p>
                </div>
                
                <div className="border-l-4 border-red-600 pl-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">2024 - Present Day</h3>
                  <p className="text-gray-700">
                    Today, MTCA serves over 300 students across multiple locations in the Midlands, with a team of qualified teachers and a strong community of families committed to Tamil heritage. We continue to innovate while staying true to our cultural roots.
                  </p>
                </div>
              </div>
            </div>

            {/* Milestones */}
            <div className="bg-white rounded-lg shadow-sm p-8 border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Key Milestones</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center p-4 bg-red-50 rounded-lg">
                  <div className="text-3xl font-bold text-red-600 mb-2">25+</div>
                  <p className="text-gray-700 font-medium">Years of Service</p>
                </div>
                <div className="text-center p-4 bg-red-50 rounded-lg">
                  <div className="text-3xl font-bold text-red-600 mb-2">300+</div>
                  <p className="text-gray-700 font-medium">Current Students</p>
                </div>
                <div className="text-center p-4 bg-red-50 rounded-lg">
                  <div className="text-3xl font-bold text-red-600 mb-2">1000+</div>
                  <p className="text-gray-700 font-medium">Alumni</p>
                </div>
                <div className="text-center p-4 bg-red-50 rounded-lg">
                  <div className="text-3xl font-bold text-red-600 mb-2">7</div>
                  <p className="text-gray-700 font-medium">Cultural Programs</p>
                </div>
              </div>
            </div>

            {/* Legacy */}
            <div className="bg-white rounded-lg shadow-sm p-8 border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Legacy</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Educational Excellence</h4>
                  <p className="text-gray-700 text-sm">Pioneered Tamil education in the Midlands with structured curriculum and qualified teachers.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Cultural Preservation</h4>
                  <p className="text-gray-700 text-sm">Maintained authentic Tamil traditions while adapting to modern educational methods.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Community Building</h4>
                  <p className="text-gray-700 text-sm">Created a strong network of Tamil families supporting each other's cultural journey.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default History;
