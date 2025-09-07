import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Users, Mail, Phone } from 'lucide-react';

function AdminTeam() {
  const { t } = useLanguage();

  const adminTeam = [
    {
      name: 'Dr. Rajesh Kumar',
      position: 'Founder & President',
      experience: '25+ years in education',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
      email: 'president@midlandstamilculture.org',
      phone: '+44 123 456 7890',
      responsibilities: [
        'Strategic planning and vision',
        'Community relations',
        'Educational policy development',
        'External partnerships'
      ]
    },
    {
      name: 'Mrs. Priya Sharma',
      position: 'Vice President',
      experience: '20+ years in administration',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',
      email: 'vicepresident@midlandstamilculture.org',
      phone: '+44 123 456 7891',
      responsibilities: [
        'Academic administration',
        'Teacher coordination',
        'Curriculum oversight',
        'Student affairs'
      ]
    },
    {
      name: 'Mr. Suresh Patel',
      position: 'Secretary',
      experience: '15+ years in community service',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
      email: 'secretary@midlandstamilculture.org',
      phone: '+44 123 456 7892',
      responsibilities: [
        'Meeting coordination',
        'Documentation management',
        'Communication liaison',
        'Event organization'
      ]
    },
    {
      name: 'Mrs. Lakshmi Iyer',
      position: 'Treasurer',
      experience: '18+ years in finance',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
      email: 'treasurer@midlandstamilculture.org',
      phone: '+44 123 456 7893',
      responsibilities: [
        'Financial management',
        'Budget planning',
        'Fee collection',
        'Financial reporting'
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
          <div className="text-center mb-12">
            <Users className="h-16 w-16 text-red-600 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Administrative Team</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our experienced administrative team brings together decades of expertise in education, community service, and organizational management
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {adminTeam.map((member, index) => (
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
                    <p className="text-gray-600 text-sm mb-4">{member.experience}</p>
                    
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
                    
                    <div>
                      <h4 className="font-medium text-gray-900 mb-2">Key Responsibilities:</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        {member.responsibilities.map((responsibility, idx) => (
                          <li key={idx}>• {responsibility}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
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
                  <p className="text-sm">info@midlandstamilculture.org</p>
                </div>
                <div>
                  <strong>Office Hours:</strong>
                  <p className="text-sm">Monday - Friday: 9:00 AM - 5:00 PM</p>
                </div>
                <div>
                  <strong>Emergency Contact:</strong>
                  <p className="text-sm">+44 123 456 7890</p>
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
