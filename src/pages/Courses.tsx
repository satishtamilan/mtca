import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { BookOpen, Users, Calendar, Clock, Music, Zap, Download, ExternalLink } from 'lucide-react';

function Courses() {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState('overview');

  const courses = [
    {
      id: 'tamil',
      title: 'Tamil Language',
      description: 'Comprehensive Tamil language education following British Tamil Exam Board curriculum',
      age: 'Ages 5-16',
      schedule: 'Saturdays 10:00 AM - 12:00 PM',
      icon: <BookOpen className="h-8 w-8 text-red-600" />,
      levels: 'Nursery to A-Levels',
      detailed: 'Our Tamil language program follows a structured curriculum designed to develop all four language skills: listening, speaking, reading, and writing. Students progress through various levels from basic Tamil script recognition to advanced literature analysis.',
      features: [
        'Four-skill approach (Listening, Speaking, Reading, Writing)',
        'Age-appropriate curriculum from Nursery to A-Levels',
        'British Tamil Exam Board certified',
        'Small class sizes for personalized attention',
        'Regular assessments and progress tracking',
        'Cultural context integration'
      ]
    },
    {
      id: 'bharatanatyam',
      title: 'Bharathanaatiyam',
      description: 'Classical South Indian dance form emphasizing grace, expression, and storytelling',
      age: 'Ages 6+',
      schedule: 'Saturdays 1:00 PM - 2:30 PM',
      icon: <Users className="h-8 w-8 text-red-600" />,
      levels: 'Beginner to Advanced',
      detailed: 'Bharatanatyam is one of the oldest classical dance forms of India. Our program teaches traditional techniques, mudras (hand gestures), expressions, and storytelling through dance. Students learn to express emotions and narrate stories through graceful movements.',
      features: [
        'Traditional Bharatanatyam techniques',
        'Mudras and facial expressions',
        'Storytelling through dance',
        'Cultural and mythological context',
        'Performance opportunities',
        'Costume and makeup guidance'
      ]
    },
    {
      id: 'sangeetham',
      title: 'Sangeetham (Carnatic Music)',
      description: 'South Indian classical music focusing on vocal techniques and traditional compositions',
      age: 'Ages 7+',
      schedule: 'Saturdays 2:30 PM - 4:00 PM',
      icon: <Music className="h-8 w-8 text-red-600" />,
      levels: 'Beginner to Advanced',
      detailed: 'Carnatic music is the classical music tradition of South India. Students learn vocal techniques, ragas (melodic frameworks), talas (rhythmic patterns), and traditional compositions. The program includes both theoretical knowledge and practical application.',
      features: [
        'Vocal technique development',
        'Raga and tala understanding',
        'Traditional compositions (kritis)',
        'Improvisation skills',
        'Music theory and notation',
        'Performance training'
      ]
    },
    {
      id: 'mridangam',
      title: 'Miruthangam',
      description: 'Traditional South Indian percussion instrument essential to Carnatic music',
      age: 'Ages 8+',
      schedule: 'Saturdays 11:00 AM - 12:30 PM',
      icon: <Zap className="h-8 w-8 text-red-600" />,
      levels: 'Beginner to Advanced',
      detailed: 'The mridangam is the primary percussion instrument in Carnatic music. Students learn proper playing techniques, various strokes, rhythmic patterns (talas), and how to accompany vocal and instrumental music.',
      features: [
        'Proper hand positioning and strokes',
        'Rhythmic pattern mastery',
        'Accompaniment techniques',
        'Solo performance skills',
        'Traditional compositions',
        'Instrument care and maintenance'
      ]
    },
    {
      id: 'veena',
      title: 'Veena',
      description: 'Ancient stringed instrument considered the queen of Indian musical instruments',
      age: 'Ages 10+',
      schedule: 'Saturdays 9:00 AM - 10:30 AM',
      icon: <Music className="h-8 w-8 text-red-600" />,
      levels: 'Beginner to Advanced',
      detailed: 'The veena is a traditional stringed instrument with deep cultural significance. Students learn finger techniques, string manipulation, raga exploration, and traditional compositions while developing musical sensitivity and expression.',
      features: [
        'Finger technique and positioning',
        'String manipulation skills',
        'Raga exploration and expression',
        'Traditional and contemporary pieces',
        'Music theory integration',
        'Performance preparation'
      ]
    },
    {
      id: 'violin',
      title: 'Violin (Carnatic Style)',
      description: 'Western instrument adapted for South Indian classical music performance',
      age: 'Ages 8+',
      schedule: 'Saturdays 10:30 AM - 12:00 PM',
      icon: <Music className="h-8 w-8 text-red-600" />,
      levels: 'Beginner to Advanced',
      detailed: 'Carnatic violin combines Western instrument techniques with South Indian classical music principles. Students learn bowing techniques, finger positions, gamakas (ornamentations), and how to play in the Carnatic style.',
      features: [
        'Carnatic bowing techniques',
        'Gamaka (ornamentation) mastery',
        'Raga interpretation',
        'Accompaniment and solo skills',
        'Western-Carnatic fusion understanding',
        'Ensemble playing'
      ]
    },
    {
      id: 'silambam',
      title: 'Silambam',
      description: 'Traditional Tamil martial art using bamboo staff, promoting physical fitness and discipline',
      age: 'Ages 10+',
      schedule: 'Saturdays 4:00 PM - 5:30 PM',
      icon: <Zap className="h-8 w-8 text-red-600" />,
      levels: 'Beginner to Advanced',
      detailed: 'Silambam is an ancient Tamil martial art that uses a bamboo staff. This art form develops physical fitness, coordination, discipline, and self-defense skills while connecting students to Tamil warrior traditions.',
      features: [
        'Basic staff handling techniques',
        'Traditional forms and sequences',
        'Physical fitness and flexibility',
        'Self-defense applications',
        'Cultural and historical context',
        'Discipline and focus development'
      ]
    }
  ];

  const educationalMaterials = {
    tamil: [
      { name: 'BTEB Past Papers (Grades 1-9)', type: 'PDF', description: 'Previous examination papers for practice' },
      { name: 'Tamil Grammar Guide', type: 'PDF', description: 'Comprehensive grammar reference' },
      { name: 'Tamil Literature Collections', type: 'Book List', description: 'Recommended reading materials' },
      { name: 'Online Tamil Dictionary', type: 'External Link', description: 'Comprehensive Tamil-English dictionary' },
      { name: 'Tamil Typing Practice', type: 'External Link', description: 'Interactive typing lessons' }
    ],
    bharatanatyam: [
      { name: 'Basic Adavus Video Library', type: 'Video', description: 'Fundamental dance steps demonstration' },
      { name: 'Mudra Reference Chart', type: 'PDF', description: 'Hand gesture meanings and positions' },
      { name: 'Classical Dance History', type: 'PDF', description: 'Origins and evolution of Bharatanatyam' },
      { name: 'Costume and Makeup Guide', type: 'PDF', description: 'Traditional attire and presentation' },
      { name: 'Performance Repertoire', type: 'Audio/Video', description: 'Traditional compositions for practice' }
    ],
    sangeetham: [
      { name: 'Raga Reference Guide', type: 'PDF', description: 'Detailed raga characteristics and examples' },
      { name: 'Carnatic Music Notation', type: 'PDF', description: 'Traditional notation system guide' },
      { name: 'Kriti Collections', type: 'Audio/PDF', description: 'Traditional compositions with notation' },
      { name: 'Tala Practice Exercises', type: 'Audio', description: 'Rhythmic pattern training materials' },
      { name: 'Voice Training Exercises', type: 'Audio', description: 'Vocal technique development' }
    ],
    mridangam: [
      { name: 'Basic Strokes Guide', type: 'Video/PDF', description: 'Fundamental playing techniques' },
      { name: 'Tala Compositions', type: 'Audio/PDF', description: 'Traditional rhythmic pieces' },
      { name: 'Accompaniment Patterns', type: 'Audio', description: 'Supporting vocal and instrumental music' },
      { name: 'Instrument Care Manual', type: 'PDF', description: 'Maintenance and tuning guide' },
      { name: 'Solo Performance Pieces', type: 'Audio/PDF', description: 'Advanced solo compositions' }
    ],
    veena: [
      { name: 'Finger Exercise Collection', type: 'PDF/Audio', description: 'Technical development materials' },
      { name: 'Traditional Varnams', type: 'Audio/PDF', description: 'Classical compositions for veena' },
      { name: 'Raga Alapana Guide', type: 'Audio/PDF', description: 'Improvisation techniques' },
      { name: 'Veena Tuning Guide', type: 'Video/PDF', description: 'Proper instrument setup' },
      { name: 'Concert Repertoire', type: 'Audio/PDF', description: 'Performance-ready pieces' }
    ],
    violin: [
      { name: 'Carnatic Bowing Techniques', type: 'Video/PDF', description: 'Specialized bowing methods' },
      { name: 'Gamaka Practice Exercises', type: 'Audio/PDF', description: 'Ornamentation training' },
      { name: 'Violin Tuning for Carnatic', type: 'Video/PDF', description: 'Proper tuning methods' },
      { name: 'Raga Studies for Violin', type: 'Audio/PDF', description: 'Raga-specific techniques' },
      { name: 'Ensemble Playing Guide', type: 'Audio/PDF', description: 'Group performance skills' }
    ],
    silambam: [
      { name: 'Basic Forms Manual', type: 'Video/PDF', description: 'Fundamental movement patterns' },
      { name: 'Traditional Sequences', type: 'Video', description: 'Classical Silambam forms' },
      { name: 'Safety Guidelines', type: 'PDF', description: 'Practice safety and precautions' },
      { name: 'Historical Context', type: 'PDF', description: 'Tamil martial arts heritage' },
      { name: 'Fitness Preparation', type: 'PDF', description: 'Physical conditioning exercises' }
    ]
  };

  const supportServices = [
    'Academic guidance and mentoring',
    'Cultural event participation',
    'Community networking opportunities',
    'Educational resources and materials',
    'Parent-teacher consultations',
    'Progress tracking and assessments'
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-red-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Courses & Student Support</h1>
          <p className="text-xl text-red-100 max-w-3xl">
            Comprehensive Tamil language education and cultural programs designed to preserve and promote Tamil heritage
          </p>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex space-x-8 overflow-x-auto">
            <button
              onClick={() => setActiveTab('overview')}
              className={`py-4 px-2 border-b-2 font-medium text-sm whitespace-nowrap ${
                activeTab === 'overview'
                  ? 'border-red-600 text-red-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Course Overview
            </button>
            <button
              onClick={() => setActiveTab('details')}
              className={`py-4 px-2 border-b-2 font-medium text-sm whitespace-nowrap ${
                activeTab === 'details'
                  ? 'border-red-600 text-red-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Course Details
            </button>
            <button
              onClick={() => setActiveTab('materials')}
              className={`py-4 px-2 border-b-2 font-medium text-sm whitespace-nowrap ${
                activeTab === 'materials'
                  ? 'border-red-600 text-red-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Educational Materials
            </button>
            <button
              onClick={() => setActiveTab('support')}
              className={`py-4 px-2 border-b-2 font-medium text-sm whitespace-nowrap ${
                activeTab === 'support'
                  ? 'border-red-600 text-red-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Student Support
            </button>
          </div>
        </div>
      </div>

      {/* Course Overview Tab */}
      {activeTab === 'overview' && (
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Our Courses</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {courses.map((course, index) => (
                <div key={index} className="bg-white rounded-lg shadow-sm p-6 border border-gray-200 hover:shadow-md transition">
                  <div className="flex items-center mb-4">
                    {course.icon}
                    <h3 className="text-lg font-semibold text-gray-900 ml-3">{course.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-4 text-sm">{course.description}</p>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-sm text-gray-500">
                      <Users className="h-4 w-4 mr-2" />
                      {course.age}
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <Clock className="h-4 w-4 mr-2" />
                      {course.schedule}
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <BookOpen className="h-4 w-4 mr-2" />
                      {course.levels}
                    </div>
                  </div>
                  <button 
                    onClick={() => setActiveTab('details')}
                    className="text-red-600 text-sm font-medium hover:text-red-700"
                  >
                    Learn More →
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Course Details Tab */}
      {activeTab === 'details' && (
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Detailed Course Information</h2>
            <div className="space-y-12">
              {courses.map((course, index) => (
                <div key={index} className="bg-white rounded-lg shadow-sm p-8 border border-gray-200">
                  <div className="flex items-center mb-6">
                    {course.icon}
                    <div className="ml-4">
                      <h3 className="text-2xl font-bold text-gray-900">{course.title}</h3>
                      <p className="text-red-600 font-medium">{course.levels} • {course.age}</p>
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-3">About This Course</h4>
                      <p className="text-gray-700 mb-4">{course.detailed}</p>
                      <div className="flex items-center text-sm text-gray-500 mb-2">
                        <Clock className="h-4 w-4 mr-2" />
                        <span>{course.schedule}</span>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-3">Course Features</h4>
                      <ul className="space-y-2">
                        {course.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start text-gray-700">
                            <div className="w-2 h-2 bg-red-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            <span className="text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Educational Materials Tab */}
      {activeTab === 'materials' && (
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Educational Materials & Resources</h2>
            <div className="space-y-12">
              {courses.map((course, index) => (
                <div key={index} className="bg-white rounded-lg shadow-sm p-8 border border-gray-200">
                  <div className="flex items-center mb-6">
                    {course.icon}
                    <h3 className="text-2xl font-bold text-gray-900 ml-4">{course.title}</h3>
                  </div>
                  
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {educationalMaterials[course.id as keyof typeof educationalMaterials]?.map((material, idx) => (
                      <div key={idx} className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                        <div className="flex items-start justify-between mb-2">
                          <h4 className="font-semibold text-gray-900 text-sm">{material.name}</h4>
                          <span className="text-xs bg-red-100 text-red-800 px-2 py-1 rounded-full">
                            {material.type}
                          </span>
                        </div>
                        <p className="text-gray-600 text-xs mb-3">{material.description}</p>
                        <button className="flex items-center text-red-600 text-xs font-medium hover:text-red-700">
                          {material.type === 'External Link' ? (
                            <>
                              <ExternalLink className="h-3 w-3 mr-1" />
                              Visit Resource
                            </>
                          ) : (
                            <>
                              <Download className="h-3 w-3 mr-1" />
                              Download
                            </>
                          )}
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Student Support Tab */}
      {activeTab === 'support' && (
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Student Support Services</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
              {supportServices.map((service, index) => (
                <div key={index} className="flex items-start space-x-3 p-4 bg-white rounded-lg border border-gray-200">
                  <div className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700">{service}</p>
                </div>
              ))}
            </div>

            {/* Additional Resources */}
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Additional Resources</h3>
              <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
                <Link
                  to="/timetable"
                  className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition group"
                >
                  <Calendar className="h-12 w-12 text-red-600 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">Class Timetable</h4>
                  <p className="text-gray-600">View detailed class schedules and timings</p>
                </Link>
                <Link
                  to="/calendar"
                  className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition group"
                >
                  <Clock className="h-12 w-12 text-red-600 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">School Calendar</h4>
                  <p className="text-gray-600">Important dates and school events</p>
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="bg-red-600 py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Start Learning?</h2>
          <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
            Join our community and begin your journey in Tamil language and culture
          </p>
          <Link
            to="/enroll"
            className="bg-white text-red-600 px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-100 transition inline-block"
          >
            Enroll Now
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Courses;
