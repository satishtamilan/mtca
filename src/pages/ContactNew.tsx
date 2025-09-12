import React, { useState } from 'react';
import { Mail, MapPin, Phone, Clock, Users, Star, UserPlus, Building, MessageSquare, Award } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

function Contact() {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState('contact');
  const [formData, setFormData] = useState({
    studentName: '',
    dateOfBirth: '',
    parentName: '',
    email: '',
    phone: '',
    address: '',
    courses: [],
    previousExperience: '',
    additionalInfo: ''
  });

  const contactSections = [
    { id: 'contact', title: 'Key Contact Details', icon: <Phone className="h-5 w-5" /> },
    { id: 'enrollment', title: 'Online Enrollment Form', icon: <UserPlus className="h-5 w-5" /> },
    { id: 'premises', title: 'Premises Details', icon: <Building className="h-5 w-5" /> },
    { id: 'testimonials', title: 'Testimonials', icon: <MessageSquare className="h-5 w-5" /> },
  ];

  const keyContacts = [
    {
      name: 'Dr. Rajesh Kumar',
      title: 'President & Founder',
      phone: '+44 121 456 7890',
      email: 'president@midlandstamilculture.org',
      responsibilities: 'Overall administration, strategic planning, community relations'
    },
    {
      name: 'Mrs. Priya Sharma',
      title: 'Academic Director',
      phone: '+44 121 456 7891',
      email: 'academic@midlandstamilculture.org',
      responsibilities: 'Curriculum development, teacher coordination, student assessments'
    },
    {
      name: 'Mr. Arjun Patel',
      title: 'Enrollment Coordinator',
      phone: '+44 121 456 7892',
      email: 'enrollment@midlandstamilculture.org',
      responsibilities: 'New student admissions, course information, scheduling'
    },
    {
      name: 'Mrs. Meera Krishnan',
      title: 'Cultural Activities Coordinator',
      phone: '+44 121 456 7893',
      email: 'events@midlandstamilculture.org',
      responsibilities: 'Event planning, cultural programs, community engagement'
    },
    {
      name: 'Mrs. Kavitha Raman',
      title: 'Safeguarding Lead (DSL)',
      phone: '+44 121 456 7894',
      email: 'safeguarding@midlandstamilculture.org',
      responsibilities: 'Child protection, safety protocols, incident reporting'
    }
  ];

  const premises = [
    {
      name: 'Birmingham Campus',
      address: 'Moseley Community Center, 123 Alcester Road, Birmingham B13 8DD',
      facilities: ['6 Classrooms', 'Music Room', 'Dance Studio', 'Library', 'Kitchen Facilities', 'Parking Available'],
      schedule: 'Saturdays: 9:00 AM - 5:30 PM',
      contact: '+44 121 456 7890',
      transport: 'Bus routes 50, 35. Moseley train station 0.5 miles.'
    },
    {
      name: 'Coventry Campus',
      address: 'Coventry Hindu Temple, 67 Keresley Road, Coventry CV6 2AB',
      facilities: ['4 Classrooms', 'Multi-purpose Hall', 'Kitchen', 'Prayer Room', 'Free Parking'],
      schedule: 'Saturdays: 10:00 AM - 4:00 PM',
      contact: '+44 24 7656 7891',
      transport: 'Bus routes 20, 21. Coventry station 2 miles.'
    },
    {
      name: 'Leicester Campus',
      address: 'Leicester Tamil Sangam, 45 Green Lane Road, Leicester LE5 3TS',
      facilities: ['3 Classrooms', 'Community Hall', 'Kitchen Facilities', 'Garden Area', 'Street Parking'],
      schedule: 'Saturdays: 10:30 AM - 3:30 PM',
      contact: '+44 116 456 7892',
      transport: 'Bus routes 54, 74. Leicester station 1.5 miles.'
    }
  ];

  const testimonials = [
    {
      name: 'Mrs. Lakshmi Venkatesh',
      role: 'Parent - Current Student',
      children: 'Arun (Age 12), Priya (Age 8)',
      testimonial: 'MTCA has been a blessing for our family. My children have not only learned Tamil beautifully but have also developed a deep connection to our culture. The teachers are incredibly patient and dedicated. Arun recently passed his GCSE Tamil with an A* grade, and Priya loves her Bharatanatyam classes. The community feeling here is something special - we\'ve made lifelong friends.',
      year: '2023',
      courses: 'Tamil Language, Bharatanatyam'
    },
    {
      name: 'Dr. Suresh Krishnamurthy',
      role: 'Former Student',
      achievement: 'Cambridge A-Level Tamil - Grade A',
      testimonial: 'I joined MTCA when I was 7 years old, and it shaped my entire relationship with my Tamil heritage. The foundation I received here helped me excel in my A-Level Tamil, which opened doors to studying South Asian Studies at university. Now as a doctor, I still use Tamil with my patients, and I credit MTCA for preserving this vital part of my identity. I\'ve enrolled my own daughter here now!',
      year: 'Student 1995-2010, Parent since 2020',
      courses: 'Tamil Language, Carnatic Music'
    },
    {
      name: 'Mrs. Radha Natarajan',
      role: 'Parent - Former Student',
      children: 'Karthik (Age 14), Divya (Age 11)',
      testimonial: 'As someone who attended MTCA as a child and now brings my own children here, I can see the incredible continuity and growth of this institution. The quality of teaching has only improved over the years. My son Karthik is preparing for his BTEB Tamil exam, and Divya has already started learning Veena. The annual events bring back so many childhood memories while creating new ones for my children.',
      year: 'Student 1985-1998, Parent since 2015',
      courses: 'Tamil Language, Veena, Bharatanatyam'
    },
    {
      name: 'Mr. Ganesh Kumar',
      role: 'Former Student - Professional Success',
      achievement: 'BBC Tamil Service Journalist',
      testimonial: 'My journey with MTCA began 25 years ago as a shy 6-year-old who could barely speak Tamil. Today, I work as a journalist for BBC Tamil Service, and I owe it all to the solid foundation I received here. The language skills, cultural knowledge, and confidence I gained at MTCA have been instrumental in my career. The teachers didn\'t just teach us Tamil; they instilled pride in our heritage.',
      year: 'Student 1990-2005',
      courses: 'Tamil Language, Public Speaking'
    },
    {
      name: 'Mrs. Kavitha Subramanian',
      role: 'Parent - Three Children',
      children: 'Rohit (Age 16), Meera (Age 13), Arjun (Age 9)',
      testimonial: 'Having three children at different levels in MTCA has shown me the incredible range and depth of their programs. Rohit is excelling in advanced Tamil literature, Meera is passionate about Silambam, and little Arjun is just starting his Tamil journey. Each child\'s individual needs are met with such care. The family atmosphere here means that older students naturally mentor younger ones.',
      year: '2018-Present',
      courses: 'Tamil Language, Silambam, Miruthangam'
    },
    {
      name: 'Dr. Anand Raghavan',
      role: 'Former Student - Academic Achievement',
      achievement: 'PhD in Tamil Literature, Oxford University',
      testimonial: 'MTCA didn\'t just teach me Tamil; it ignited a lifelong passion for Tamil literature and culture. The exposure to classical texts, poetry, and cultural discussions during my time here inspired me to pursue Tamil studies at the highest academic level. I recently completed my PhD at Oxford, focusing on medieval Tamil poetry, and I regularly return to MTCA to give guest lectures. This place changes lives.',
      year: 'Student 1988-2003',
      courses: 'Tamil Language, Literature, Cultural Studies'
    }
  ];

  const availableCourses = [
    'Tamil Language (Beginner)',
    'Tamil Language (Intermediate)',
    'Tamil Language (Advanced)',
    'Bharatanatyam',
    'Carnatic Music (Vocal)',
    'Veena',
    'Violin',
    'Miruthangam',
    'Silambam'
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleCourseChange = (course) => {
    setFormData(prev => ({
      ...prev,
      courses: prev.courses.includes(course)
        ? prev.courses.filter(c => c !== course)
        : [...prev.courses, course]
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Enrollment Form Submitted:', formData);
    alert('Thank you for your enrollment application! We will contact you within 2-3 business days.');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-red-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl text-red-100 max-w-3xl">
            Get in touch with us for enrollment, information, or to become part of our Tamil cultural community
          </p>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex space-x-1 overflow-x-auto">
            {contactSections.map((section) => (
              <button
                key={section.id}
                onClick={() => setActiveTab(section.id)}
                className={`py-4 px-4 border-b-2 font-medium text-sm whitespace-nowrap flex items-center space-x-2 ${
                  activeTab === section.id
                    ? 'border-red-600 text-red-600 bg-red-50'
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
        
        {/* Key Contact Details */}
        {activeTab === 'contact' && (
          <div className="space-y-8">
            <div className="text-center mb-12">
              <Phone className="h-16 w-16 text-red-600 mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Key Contact Details</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Our dedicated team is here to help you with any questions about MTCA programs and services
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {keyContacts.map((contact, index) => (
                <div key={index} className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
                  <div className="text-center mb-4">
                    <div className="w-16 h-16 bg-red-100 rounded-full mx-auto mb-3 flex items-center justify-center">
                      <Users className="h-8 w-8 text-red-600" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900">{contact.name}</h3>
                    <p className="text-red-600 font-medium">{contact.title}</p>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-center text-gray-600">
                      <Phone className="h-4 w-4 mr-3 text-red-600" />
                      <span className="text-sm">{contact.phone}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Mail className="h-4 w-4 mr-3 text-red-600" />
                      <span className="text-sm">{contact.email}</span>
                    </div>
                  </div>
                  
                  <div className="mt-4 p-3 bg-gray-50 rounded-lg">
                    <p className="text-xs text-gray-600 leading-relaxed">
                      <strong>Responsibilities:</strong> {contact.responsibilities}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* General Contact Information */}
            <div className="bg-white rounded-lg shadow-sm p-8 border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">General Information</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Office Hours</h4>
                  <div className="space-y-2 text-gray-600">
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-3 text-red-600" />
                      <span>Monday - Friday: 6:00 PM - 9:00 PM</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-3 text-red-600" />
                      <span>Saturday: 9:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-3 text-red-600" />
                      <span>Sunday: By appointment only</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Emergency Contact</h4>
                  <div className="space-y-2 text-gray-600">
                    <div className="flex items-center">
                      <Phone className="h-4 w-4 mr-3 text-red-600" />
                      <span>Emergency Hotline: +44 121 456 7899</span>
                    </div>
                    <div className="flex items-center">
                      <Mail className="h-4 w-4 mr-3 text-red-600" />
                      <span>urgent@midlandstamilculture.org</span>
                    </div>
                  </div>
                  <p className="text-xs text-gray-500 mt-3">
                    For urgent matters during school hours or events only
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Online Enrollment Form */}
        {activeTab === 'enrollment' && (
          <div className="space-y-8">
            <div className="text-center mb-12">
              <UserPlus className="h-16 w-16 text-red-600 mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Online Enrollment Form</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Begin your Tamil cultural journey with us. Complete this form to start the enrollment process.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-8 border border-gray-200">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Student Information */}
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Student Information</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="studentName" className="block text-sm font-medium text-gray-700 mb-2">
                        Student Full Name *
                      </label>
                      <input
                        type="text"
                        id="studentName"
                        name="studentName"
                        required
                        value={formData.studentName}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label htmlFor="dateOfBirth" className="block text-sm font-medium text-gray-700 mb-2">
                        Date of Birth *
                      </label>
                      <input
                        type="date"
                        id="dateOfBirth"
                        name="dateOfBirth"
                        required
                        value={formData.dateOfBirth}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent"
                      />
                    </div>
                  </div>
                </div>

                {/* Parent/Guardian Information */}
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Parent/Guardian Information</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="parentName" className="block text-sm font-medium text-gray-700 mb-2">
                        Parent/Guardian Name *
                      </label>
                      <input
                        type="text"
                        id="parentName"
                        name="parentName"
                        required
                        value={formData.parentName}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-2">
                        Address
                      </label>
                      <input
                        type="text"
                        id="address"
                        name="address"
                        value={formData.address}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent"
                      />
                    </div>
                  </div>
                </div>

                {/* Course Selection */}
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Course Selection</h3>
                  <p className="text-gray-600 mb-4">Select the courses you're interested in (multiple selections allowed):</p>
                  <div className="grid md:grid-cols-3 gap-3">
                    {availableCourses.map((course) => (
                      <label key={course} className="flex items-center space-x-3 p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={formData.courses.includes(course)}
                          onChange={() => handleCourseChange(course)}
                          className="w-4 h-4 text-red-600 border-gray-300 rounded focus:ring-red-500"
                        />
                        <span className="text-sm text-gray-700">{course}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Additional Information */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="previousExperience" className="block text-sm font-medium text-gray-700 mb-2">
                      Previous Tamil Learning Experience
                    </label>
                    <textarea
                      id="previousExperience"
                      name="previousExperience"
                      rows={4}
                      value={formData.previousExperience}
                      onChange={handleInputChange}
                      placeholder="Please describe any previous Tamil language or cultural learning experience..."
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent"
                    ></textarea>
                  </div>
                  <div>
                    <label htmlFor="additionalInfo" className="block text-sm font-medium text-gray-700 mb-2">
                      Additional Information
                    </label>
                    <textarea
                      id="additionalInfo"
                      name="additionalInfo"
                      rows={4}
                      value={formData.additionalInfo}
                      onChange={handleInputChange}
                      placeholder="Any special requirements, questions, or additional information..."
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent"
                    ></textarea>
                  </div>
                </div>

                <div className="pt-6 border-t border-gray-200">
                  <button
                    type="submit"
                    className="w-full bg-red-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-red-700 transition"
                  >
                    Submit Enrollment Application
                  </button>
                  <p className="text-sm text-gray-500 mt-3 text-center">
                    We will contact you within 2-3 business days to discuss next steps and schedule an assessment if needed.
                  </p>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* Premises Details */}
        {activeTab === 'premises' && (
          <div className="space-y-8">
            <div className="text-center mb-12">
              <Building className="h-16 w-16 text-red-600 mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Premises</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                MTCA operates from three well-equipped campuses across the Midlands, each offering excellent facilities for learning and cultural activities.
              </p>
            </div>

            <div className="grid gap-8">
              {premises.map((campus, index) => (
                <div key={index} className="bg-white rounded-lg shadow-sm p-8 border border-gray-200">
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{campus.name}</h3>
                      <div className="flex items-start text-gray-600 mb-2">
                        <MapPin className="h-5 w-5 mr-3 mt-1 text-red-600 flex-shrink-0" />
                        <span>{campus.address}</span>
                      </div>
                      <div className="flex items-center text-gray-600 mb-2">
                        <Clock className="h-5 w-5 mr-3 text-red-600" />
                        <span>{campus.schedule}</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <Phone className="h-5 w-5 mr-3 text-red-600" />
                        <span>{campus.contact}</span>
                      </div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-3">Facilities Available</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {campus.facilities.map((facility, facilityIndex) => (
                          <div key={facilityIndex} className="flex items-center text-gray-600">
                            <div className="w-2 h-2 bg-red-600 rounded-full mr-3"></div>
                            <span className="text-sm">{facility}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-3">Transport & Access</h4>
                      <p className="text-gray-600 text-sm leading-relaxed">{campus.transport}</p>
                      
                      <div className="mt-4 p-4 bg-blue-50 rounded-lg border border-blue-200">
                        <h5 className="font-semibold text-blue-800 mb-2">Accessibility</h5>
                        <p className="text-blue-700 text-sm">
                          All our premises are wheelchair accessible with disabled parking spaces and adapted facilities available.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Additional Premises Information */}
            <div className="bg-white rounded-lg shadow-sm p-8 border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Safety & Security</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <div className="text-2xl mb-2">🔒</div>
                  <h4 className="font-semibold text-gray-900 mb-2">Secure Entry</h4>
                  <p className="text-gray-600 text-sm">All campuses have controlled access and visitor management systems</p>
                </div>
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <div className="text-2xl mb-2">🚨</div>
                  <h4 className="font-semibold text-gray-900 mb-2">Safety Systems</h4>
                  <p className="text-gray-600 text-sm">Fire safety, first aid facilities, and emergency procedures in place</p>
                </div>
                <div className="text-center p-4 bg-yellow-50 rounded-lg">
                  <div className="text-2xl mb-2">👥</div>
                  <h4 className="font-semibold text-gray-900 mb-2">Supervision</h4>
                  <p className="text-gray-600 text-sm">Qualified staff supervision and safeguarding protocols always maintained</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Testimonials */}
        {activeTab === 'testimonials' && (
          <div className="space-y-8">
            <div className="text-center mb-12">
              <MessageSquare className="h-16 w-16 text-red-600 mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Testimonials</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Hear from our community members about their experiences and achievements with MTCA
              </p>
            </div>

            <div className="grid gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white rounded-lg shadow-sm p-8 border border-gray-200">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center">
                        {testimonial.role.includes('Former Student') ? (
                          <Award className="h-8 w-8 text-red-600" />
                        ) : (
                          <Users className="h-8 w-8 text-red-600" />
                        )}
                      </div>
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-bold text-gray-900">{testimonial.name}</h3>
                          <p className="text-red-600 font-medium">{testimonial.role}</p>
                          {testimonial.children && (
                            <p className="text-gray-600 text-sm">Children: {testimonial.children}</p>
                          )}
                          {testimonial.achievement && (
                            <p className="text-green-600 font-medium text-sm">🏆 {testimonial.achievement}</p>
                          )}
                        </div>
                        <div className="flex items-center text-yellow-500">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="h-5 w-5 fill-current" />
                          ))}
                        </div>
                      </div>
                      
                      <blockquote className="text-gray-700 leading-relaxed mb-4 italic">
                        "{testimonial.testimonial}"
                      </blockquote>
                      
                      <div className="flex items-center justify-between text-sm text-gray-500">
                        <span>Courses: {testimonial.courses}</span>
                        <span>{testimonial.year}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Call to Action for Testimonials */}
            <div className="bg-red-50 rounded-lg p-8 border border-red-200">
              <div className="text-center">
                <MessageSquare className="h-12 w-12 text-red-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Share Your MTCA Story</h3>
                <p className="text-gray-600 mb-6">
                  Are you a current parent or former student? We'd love to hear about your experience with MTCA!
                </p>
                <button className="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition">
                  Submit Your Testimonial
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Contact;
