import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Users, Award, BookOpen, Heart, Star, GraduationCap } from 'lucide-react';

function About() {
  const { t } = useLanguage();
  const [activeSection, setActiveSection] = useState('mission');

  const sections = [
    { id: 'mission', title: 'Our Mission Statement', icon: <Heart className="h-5 w-5" /> },
    { id: 'president', title: 'Founder/President\'s Message', icon: <Star className="h-5 w-5" /> },
    { id: 'history', title: 'History', icon: <BookOpen className="h-5 w-5" /> },
    { id: 'operations', title: 'How do we operate', icon: <Award className="h-5 w-5" /> },
    { id: 'admin', title: 'Our Administrative team', icon: <Users className="h-5 w-5" /> },
    { id: 'teachers', title: 'Our Teachers', icon: <GraduationCap className="h-5 w-5" /> }
  ];

  const adminTeam = [
    {
      name: 'Dr. Rajesh Kumar',
      position: 'Founder & President',
      experience: '25+ years in education',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face'
    },
    {
      name: 'Mrs. Priya Sharma',
      position: 'Vice President',
      experience: '20+ years in administration',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face'
    },
    {
      name: 'Mr. Suresh Patel',
      position: 'Secretary',
      experience: '15+ years in community service',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'
    },
    {
      name: 'Mrs. Lakshmi Iyer',
      position: 'Treasurer',
      experience: '18+ years in finance',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face'
    }
  ];

  const teachers = [
    {
      name: 'Mrs. Meera Krishnan',
      subject: 'Tamil Language (Grades 1-5)',
      qualification: 'M.A. Tamil Literature, B.Ed',
      experience: '12+ years',
      image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=150&h=150&fit=crop&crop=face'
    },
    {
      name: 'Mr. Arjun Nair',
      subject: 'Tamil Language (Grades 6-9)',
      qualification: 'M.A. Tamil, PGCE',
      experience: '10+ years',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face'
    },
    {
      name: 'Mrs. Divya Raman',
      subject: 'Cultural Programs & Dance',
      qualification: 'Bharatanatyam Acharya, M.A. Fine Arts',
      experience: '15+ years',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face'
    },
    {
      name: 'Mr. Karthik Subramanian',
      subject: 'Advanced Tamil (A-Levels)',
      qualification: 'Ph.D. Tamil Studies, M.Ed',
      experience: '20+ years',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-red-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Who are we</h1>
          <p className="text-xl text-red-100 max-w-3xl">
            Learn about our mission, leadership, history, and the dedicated team that makes MTCA a beacon of Tamil culture in the Midlands
          </p>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex space-x-8 overflow-x-auto">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => setActiveSection(section.id)}
                className={`py-4 px-2 border-b-2 font-medium text-sm whitespace-nowrap flex items-center space-x-2 ${
                  activeSection === section.id
                    ? 'border-red-600 text-red-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                {section.icon}
                <span>{section.title}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Content Sections */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        
        {/* Mission Statement */}
        {activeSection === 'mission' && (
          <div className="space-y-8">
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
              </div>
            </div>
          </div>
        )}

        {/* President's Message */}
        {activeSection === 'president' && (
          <div className="space-y-8">
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
          </div>
        )}

        {/* History */}
        {activeSection === 'history' && (
          <div className="space-y-8">
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
                      MTCA was founded by a group of passionate Tamil families in Birmingham who recognized the need for formal Tamil language education in the Midlands. Starting with just 15 students in a community center.
                    </p>
                  </div>
                  <div className="border-l-4 border-red-600 pl-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">2003 - First Tamil School</h3>
                    <p className="text-gray-700">
                      MTCA became the first officially recognized Tamil language school in the Midlands region, pioneering structured Tamil education following British educational standards.
                    </p>
                  </div>
                  <div className="border-l-4 border-red-600 pl-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">2008 - Curriculum Development</h3>
                    <p className="text-gray-700">
                      Partnered with British Tamil Exam Board (BTEB) to implement standardized curriculum covering listening, speaking, reading, and writing skills from Nursery to A-Levels.
                    </p>
                  </div>
                  <div className="border-l-4 border-red-600 pl-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">2015 - Cultural Expansion</h3>
                    <p className="text-gray-700">
                      Expanded beyond language education to include cultural programs, traditional dance, music, and community events, becoming a comprehensive cultural center.
                    </p>
                  </div>
                  <div className="border-l-4 border-red-600 pl-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">2020 - Digital Transformation</h3>
                    <p className="text-gray-700">
                      Successfully transitioned to online learning during the pandemic, ensuring continuity of education and maintaining community connections through virtual events.
                    </p>
                  </div>
                  <div className="border-l-4 border-red-600 pl-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">2024 - Present Day</h3>
                    <p className="text-gray-700">
                      Today, MTCA serves over 300 students across multiple locations in the Midlands, with a team of qualified teachers and a strong community of families committed to Tamil heritage.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Operations */}
        {activeSection === 'operations' && (
          <div className="space-y-8">
            <div className="text-center mb-12">
              <Award className="h-16 w-16 text-red-600 mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-gray-900 mb-4">How do we operate</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Educational Framework</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• British Tamil Exam Board (BTEB) certified curriculum</li>
                  <li>• OCR examination system implementation</li>
                  <li>• Four-skill approach: Listening, Speaking, Reading, Writing</li>
                  <li>• Age-appropriate learning from Nursery to A-Levels</li>
                  <li>• Regular assessments and progress tracking</li>
                </ul>
              </div>
              <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Class Structure</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Saturday classes: 9:00 AM - 2:00 PM</li>
                  <li>• Small class sizes for personalized attention</li>
                  <li>• Mixed-age cultural activities</li>
                  <li>• Parent-teacher consultations</li>
                  <li>• Annual examinations in June</li>
                </ul>
              </div>
              <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Examination Levels</h3>
                <div className="space-y-3 text-gray-700">
                  <div>
                    <strong>BTEB Levels:</strong> Nursery to Grade 9
                  </div>
                  <div>
                    <strong>Edexcel:</strong> O Level (Grade 10)
                  </div>
                  <div>
                    <strong>Cambridge:</strong> AS Level (Grade 11), A Level (Grade 12)
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Community Engagement</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Regular cultural events and celebrations</li>
                  <li>• Parent involvement in school activities</li>
                  <li>• Community outreach programs</li>
                  <li>• Inter-school competitions and collaborations</li>
                  <li>• Alumni network and mentorship</li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* Administrative Team */}
        {activeSection === 'admin' && (
          <div className="space-y-8">
            <div className="text-center mb-12">
              <Users className="h-16 w-16 text-red-600 mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Administrative Team</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Meet the dedicated leaders who guide MTCA's vision and ensure the smooth operation of our programs
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {adminTeam.map((member, index) => (
                <div key={index} className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
                  <div className="flex items-start space-x-4">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-20 h-20 rounded-full object-cover"
                    />
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-900">{member.name}</h3>
                      <p className="text-red-600 font-medium mb-2">{member.position}</p>
                      <p className="text-gray-600 text-sm">{member.experience}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Teachers */}
        {activeSection === 'teachers' && (
          <div className="space-y-8">
            <div className="text-center mb-12">
              <GraduationCap className="h-16 w-16 text-red-600 mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Teachers</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Our qualified and experienced teachers are passionate about Tamil language and culture, dedicated to nurturing the next generation
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {teachers.map((teacher, index) => (
                <div key={index} className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
                  <div className="flex items-start space-x-4">
                    <img
                      src={teacher.image}
                      alt={teacher.name}
                      className="w-24 h-24 rounded-full object-cover"
                    />
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-900">{teacher.name}</h3>
                      <p className="text-red-600 font-medium mb-1">{teacher.subject}</p>
                      <p className="text-gray-600 text-sm mb-2">{teacher.qualification}</p>
                      <p className="text-gray-500 text-sm">{teacher.experience}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="bg-red-50 rounded-lg p-6 border border-red-200">
              <h3 className="text-lg font-semibold text-red-800 mb-3">Teacher Training & Development</h3>
              <p className="text-gray-700">
                All our teachers undergo regular training with the British Tamil Exam Board and participate in continuous professional development programs to ensure the highest quality of education for our students.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default About;
