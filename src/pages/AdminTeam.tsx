import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Users, Mail, Phone } from 'lucide-react';

function AdminTeam() {
  const { t } = useLanguage();

  const trustees = [
    {
      name: 'Mr. Chelliah Yogamoorthy MBE',
      position: 'Trustee',
      honors: 'Member of the Order of the British Empire',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
      email: 'midlandstamilca@gmail.com',
      phone: '0121 351 1305'
    },
    {
      name: 'Mr. Kandiah Sivayogaiswaran BEM',
      position: 'Trustee & President',
      honors: 'British Empire Medal',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
      email: 'midlandstamilca@gmail.com',
      phone: '0121 351 1305'
    },
    {
      name: 'Mr. Ragavan Sockalingam',
      position: 'Trustee & Treasurer',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop&crop=face',
      email: 'midlandstamilca@gmail.com',
      phone: '0121 351 1305'
    },
    {
      name: 'Dr. Thambiah Vamadevan',
      position: 'Trustee',
      image: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=150&h=150&fit=crop&crop=face',
      email: 'midlandstamilca@gmail.com',
      phone: '0121 351 1305'
    },
    {
      name: 'Dr. Sivanesan Nagalingam',
      position: 'Trustee',
      image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=150&h=150&fit=crop&crop=face',
      email: 'midlandstamilca@gmail.com',
      phone: '0121 351 1305'
    }
  ];

  const officeBearers = [
    {
      name: 'Mr. Kandiah Sivayogaiswaran',
      position: 'President',
      honors: 'BEM (British Empire Medal)',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
      email: 'midlandstamilca@gmail.com',
      phone: '0121 351 1305',
      responsibilities: [
        'Overall leadership and strategic direction',
        'Community representation',
        'External partnerships',
        'Board governance'
      ]
    },
    {
      name: 'Mr. Sudhakara Pandian',
      position: 'Secretary',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
      email: 'midlandstamilca@gmail.com',
      phone: '0121 351 1305',
      responsibilities: [
        'Meeting coordination and minutes',
        'Official correspondence',
        'Documentation management',
        'Communication liaison'
      ]
    },
    {
      name: 'Mr. Ragavan Sockalingam',
      position: 'Treasurer',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop&crop=face',
      email: 'midlandstamilca@gmail.com',
      phone: '0121 351 1305',
      responsibilities: [
        'Financial management and oversight',
        'Budget planning and monitoring',
        'Fee collection and banking',
        'Financial reporting and compliance'
      ]
    },
    {
      name: 'Mrs. Thayapary Selvaratnam',
      position: 'Designated Safeguarding Lead',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',
      email: 'midlandstamilca@gmail.com',
      phone: '0121 351 1305',
      responsibilities: [
        'Child protection and safeguarding',
        'Safety policy implementation',
        'Incident reporting and investigation',
        'Staff safeguarding training'
      ]
    },
    {
      name: 'Mr. Guru Prasath',
      position: 'Public Relations Officer',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
      email: 'midlandstamilca@gmail.com',
      phone: '0121 351 1305',
      responsibilities: [
        'Media relations and publicity',
        'Community outreach programs',
        'Marketing and communications',
        'Social media management'
      ]
    },
    {
      name: 'Mrs. Priya Guruprasath',
      position: 'Admin Facilitator',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
      email: 'midlandstamilca@gmail.com',
      phone: '0121 351 1305',
      responsibilities: [
        'Administrative coordination',
        'Student registration support',
        'Event planning assistance',
        'General administrative duties'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-red-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Our Administrative Team</h1>
          <p className="text-xl text-red-100 max-w-3xl">
            Meet the dedicated leaders who guide MTCA's vision and ensure the smooth operation of our programs
          </p>
        </div>
      </div>

      {/* Admin Team Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          
          {/* Trustees Section */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <Users className="h-16 w-16 text-red-600 mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Trustees</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Distinguished community leaders who provide governance and strategic oversight for MTCA
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {trustees.map((trustee, index) => (
                <div key={index} className="bg-white rounded-lg shadow-sm p-6 border border-gray-200 text-center">
                  <img
                    src={trustee.image}
                    alt={trustee.name}
                    className="w-20 h-20 rounded-full object-cover mx-auto mb-4"
                  />
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">{trustee.name}</h3>
                  <p className="text-red-600 font-medium mb-2">{trustee.position}</p>
                  {trustee.honors && (
                    <div className="mb-3">
                      <span className="inline-block bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded-full">
                        🏅 {trustee.honors}
                      </span>
                    </div>
                  )}
                  <div className="space-y-2 text-sm text-gray-600">
                    <div className="flex items-center justify-center">
                      <Mail className="h-4 w-4 mr-2" />
                      <a href={`mailto:${trustee.email}`} className="hover:text-red-600 truncate">
                        Contact
                      </a>
                    </div>
                    <div className="flex items-center justify-center">
                      <Phone className="h-4 w-4 mr-2" />
                      <a href={`tel:${trustee.phone}`} className="hover:text-red-600">
                        {trustee.phone}
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Office Bearers Section */}
          <div className="mb-12">
            <div className="text-center mb-12">
              <Users className="h-16 w-16 text-red-600 mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Office Bearers</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Dedicated office bearers who manage the day-to-day operations and ensure smooth functioning of MTCA
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {officeBearers.map((member, index) => (
                <div key={index} className="bg-white rounded-lg shadow-sm p-8 border border-gray-200">
                  <div className="flex items-start space-x-6">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-24 h-24 rounded-full object-cover flex-shrink-0"
                    />
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-900">{member.name}</h3>
                      <p className="text-red-600 font-medium mb-2">{member.position}</p>
                      {member.honors && (
                        <div className="mb-3">
                          <span className="inline-block bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded-full">
                            🏅 {member.honors}
                          </span>
                        </div>
                      )}
                      
                      <div className="space-y-2 mb-4">
                        <div className="flex items-center text-sm text-gray-600">
                          <Mail className="h-4 w-4 mr-2" />
                          <a href={`mailto:${member.email}`} className="hover:text-red-600">
                            {member.email}
                          </a>
                        </div>
                        <div className="flex items-center text-sm text-gray-600">
                          <Phone className="h-4 w-4 mr-2" />
                          <a href={`tel:${member.phone}`} className="hover:text-red-600">
                            {member.phone}
                          </a>
                        </div>
                      </div>
                      
                      {member.responsibilities && (
                        <div>
                          <h4 className="font-medium text-gray-900 mb-2">Key Responsibilities:</h4>
                          <ul className="text-sm text-gray-600 space-y-1">
                            {member.responsibilities.map((responsibility, idx) => (
                              <li key={idx}>• {responsibility}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Organizational Structure */}
          <div className="bg-white rounded-lg shadow-sm p-8 border border-gray-200 mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Organizational Structure</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-red-50 rounded-lg">
                <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Executive Committee</h4>
                <p className="text-gray-600 text-sm">Strategic decision making and overall governance</p>
              </div>
              
              <div className="text-center p-6 bg-red-50 rounded-lg">
                <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Academic Committee</h4>
                <p className="text-gray-600 text-sm">Curriculum development and educational standards</p>
              </div>
              
              <div className="text-center p-6 bg-red-50 rounded-lg">
                <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Cultural Committee</h4>
                <p className="text-gray-600 text-sm">Event planning and cultural program coordination</p>
              </div>
            </div>
          </div>

          {/* Meeting Schedule */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Meeting Schedule</h3>
              <div className="space-y-3 text-gray-700">
                <div className="flex justify-between">
                  <span>Executive Committee:</span>
                  <span className="font-medium">Monthly</span>
                </div>
                <div className="flex justify-between">
                  <span>Academic Committee:</span>
                  <span className="font-medium">Bi-monthly</span>
                </div>
                <div className="flex justify-between">
                  <span>Cultural Committee:</span>
                  <span className="font-medium">Quarterly</span>
                </div>
                <div className="flex justify-between">
                  <span>Annual General Meeting:</span>
                  <span className="font-medium">Yearly</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Contact Information</h3>
              <div className="space-y-3 text-gray-700">
                <div>
                  <strong>General Inquiries:</strong>
                  <p className="text-sm">midlandstamilca@gmail.com</p>
                </div>
                <div>
                  <strong>Phone:</strong>
                  <p className="text-sm">0121 351 1305</p>
                </div>
                <div>
                  <strong>Address:</strong>
                  <p className="text-sm">Hodge Hill Girls School, Birmingham, B36 8EY</p>
                </div>
                <div>
                  <strong>Established:</strong>
                  <p className="text-sm">1986 - Birmingham Tamil School</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AdminTeam;
