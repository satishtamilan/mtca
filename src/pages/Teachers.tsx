import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { GraduationCap, Award, BookOpen } from 'lucide-react';

function Teachers() {
  const { t } = useLanguage();

  const teachers = [
    {
      name: 'Mrs. Sivayogi Sivayogaiswaran',
      subject: 'Tamil Language',
      qualification: 'Tamil Tutor',
      image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=150&h=150&fit=crop&crop=face',
      specializations: ['Tamil Grammar', 'Language Instruction', 'Student Assessment', 'Curriculum Development'],
      contact: 'midlandstamilca@gmail.com'
    },
    {
      name: 'Mrs. Kavitha Pandian',
      subject: 'Tamil Language',
      qualification: 'Tamil Tutor',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',
      specializations: ['Tamil Literature', 'Reading Comprehension', 'Writing Skills', 'Cultural Context'],
      contact: 'midlandstamilca@gmail.com'
    },
    {
      name: 'Mrs. Vijayalakshmi Thirugnanarajah',
      subject: 'Tamil Language',
      qualification: 'Tamil Tutor',
      image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=150&h=150&fit=crop&crop=face',
      specializations: ['Conversational Tamil', 'Pronunciation', 'Interactive Learning', 'Student Engagement'],
      contact: 'midlandstamilca@gmail.com'
    },
    {
      name: 'Mrs. Vathsala Suthakar',
      subject: 'Tamil Language',
      qualification: 'Tamil Tutor',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',
      specializations: ['Tamil Script', 'Beginner Instruction', 'Foundation Skills', 'Patient Teaching'],
      contact: 'midlandstamilca@gmail.com'
    },
    {
      name: 'Mrs. Shanthi Mohan',
      subject: 'Tamil Language',
      qualification: 'Tamil Tutor',
      image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=150&h=150&fit=crop&crop=face',
      specializations: ['Advanced Tamil', 'Exam Preparation', 'Literary Analysis', 'Academic Writing'],
      contact: 'midlandstamilca@gmail.com'
    },
    {
      name: 'Mr. Danujan Sivanesan',
      subject: 'Miruthangam',
      qualification: 'Miruthangam Tutor',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
      specializations: ['Mridangam Technique', 'Rhythm Patterns', 'Traditional Percussion', 'Performance Skills'],
      contact: 'midlandstamilca@gmail.com'
    },
    {
      name: 'Mr. A.G. Lakshmanan',
      subject: 'Carnatic Music',
      qualification: 'Carnatic Music Tutor',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
      specializations: ['Carnatic Vocals', 'Raga Theory', 'Classical Compositions', 'Music Appreciation'],
      contact: 'midlandstamilca@gmail.com'
    },
    {
      name: 'Miss. Arseca Suthakar',
      subject: 'Bharatanatyam',
      qualification: 'Bharatanatyam Tutor',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',
      specializations: ['Classical Dance', 'Traditional Choreography', 'Cultural Expression', 'Performance Training'],
      contact: 'midlandstamilca@gmail.com'
    },
    {
      name: 'Mr. Sivalingham Selvaraj',
      subject: 'Silambam',
      qualification: 'Silambam Tutor',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
      specializations: ['Traditional Martial Arts', 'Stick Fighting', 'Physical Fitness', 'Cultural Heritage'],
      contact: 'midlandstamilca@gmail.com'
    },
    {
      name: 'Mrs. Satheesna Kiritharan',
      subject: 'Veena',
      qualification: 'Veena Tutor',
      image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=150&h=150&fit=crop&crop=face',
      specializations: ['Classical Veena', 'String Instruments', 'Traditional Music', 'Instrumental Technique'],
      contact: 'midlandstamilca@gmail.com'
    },
    {
      name: 'Miss. Krithiha Kiritharan',
      subject: 'Violin',
      qualification: 'Violin Tutor',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',
      specializations: ['Carnatic Violin', 'String Technique', 'Musical Expression', 'Accompaniment Skills'],
      contact: 'midlandstamilca@gmail.com'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-red-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Our Teachers</h1>
          <p className="text-xl text-red-100 max-w-3xl">
            Meet our qualified and experienced teachers who are passionate about Tamil language and culture
          </p>
        </div>
      </div>

      {/* Teachers Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <GraduationCap className="h-16 w-16 text-red-600 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Teachers</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our dedicated faculty brings together expertise in Tamil language, literature, and cultural arts, committed to nurturing the next generation
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {teachers.map((teacher, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm p-8 border border-gray-200">
                <div className="flex items-start space-x-6">
                  <img
                    src={teacher.image}
                    alt={teacher.name}
                    className="w-24 h-24 rounded-full object-cover flex-shrink-0"
                  />
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900">{teacher.name}</h3>
                    <p className="text-red-600 font-medium mb-1">{teacher.subject}</p>
                    <p className="text-gray-600 text-sm mb-4">{teacher.qualification}</p>
                    
                    <div className="mb-4">
                      <h4 className="font-medium text-gray-900 mb-2">Specializations:</h4>
                      <div className="flex flex-wrap gap-2">
                        {teacher.specializations.map((spec, idx) => (
                          <span key={idx} className="text-xs bg-red-100 text-red-800 px-2 py-1 rounded-full">
                            {spec}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex items-center text-sm text-gray-600">
                      <GraduationCap className="h-4 w-4 mr-2" />
                      <a href={`mailto:${teacher.contact}`} className="hover:text-red-600">
                        Contact Teacher
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Teacher Training & Development */}
          <div className="bg-white rounded-lg shadow-sm p-8 border border-gray-200 mb-8">
            <div className="flex items-center mb-6">
              <Award className="h-8 w-8 text-red-600 mr-3" />
              <h3 className="text-2xl font-bold text-gray-900">Teacher Training & Development</h3>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-red-50 rounded-lg">
                <BookOpen className="h-12 w-12 text-red-600 mx-auto mb-4" />
                <h4 className="font-semibold text-gray-900 mb-2">Continuous Learning</h4>
                <p className="text-gray-600 text-sm">Regular workshops and training sessions to stay updated with latest teaching methodologies</p>
              </div>
              
              <div className="text-center p-6 bg-red-50 rounded-lg">
                <Award className="h-12 w-12 text-red-600 mx-auto mb-4" />
                <h4 className="font-semibold text-gray-900 mb-2">BTEB Certification</h4>
                <p className="text-gray-600 text-sm">All teachers undergo British Tamil Exam Board certification and regular updates</p>
              </div>
              
              <div className="text-center p-6 bg-red-50 rounded-lg">
                <GraduationCap className="h-12 w-12 text-red-600 mx-auto mb-4" />
                <h4 className="font-semibold text-gray-900 mb-2">Professional Development</h4>
                <p className="text-gray-600 text-sm">Participation in educational conferences and cultural exchange programs</p>
              </div>
            </div>
          </div>

          {/* Teaching Philosophy */}
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Our Teaching Philosophy</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Student-centered learning approach</li>
                <li>• Cultural context integration</li>
                <li>• Interactive and engaging methods</li>
                <li>• Individual attention and support</li>
                <li>• Holistic development focus</li>
                <li>• Community involvement</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Quality Standards</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Qualified and experienced faculty</li>
                <li>• Regular performance evaluations</li>
                <li>• Student feedback integration</li>
                <li>• Curriculum adherence</li>
                <li>• Professional development requirements</li>
                <li>• Cultural authenticity maintenance</li>
              </ul>
            </div>
          </div>

          {/* Recognition */}
          <div className="bg-white rounded-lg shadow-sm p-8 border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Teacher Recognition Program</h3>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center p-4 bg-red-50 rounded-lg">
                <div className="text-2xl font-bold text-red-600 mb-2">Annual</div>
                <p className="text-gray-700 font-medium">Excellence Awards</p>
              </div>
              <div className="text-center p-4 bg-red-50 rounded-lg">
                <div className="text-2xl font-bold text-red-600 mb-2">Monthly</div>
                <p className="text-gray-700 font-medium">Appreciation</p>
              </div>
              <div className="text-center p-4 bg-red-50 rounded-lg">
                <div className="text-2xl font-bold text-red-600 mb-2">Quarterly</div>
                <p className="text-gray-700 font-medium">Training Sessions</p>
              </div>
              <div className="text-center p-4 bg-red-50 rounded-lg">
                <div className="text-2xl font-bold text-red-600 mb-2">Yearly</div>
                <p className="text-gray-700 font-medium">Cultural Exchange</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Teachers;
