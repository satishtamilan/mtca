import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Shield, FileText, Heart, Calendar, Clock, GraduationCap, UserPlus, Download, ExternalLink } from 'lucide-react';

function Admin() {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState('conduct');

  const sections = [
    { id: 'conduct', title: 'Code of Conduct', icon: <Shield className="h-5 w-5" /> },
    { id: 'dsl', title: 'DSL Policies', icon: <FileText className="h-5 w-5" /> },
    { id: 'safety', title: 'Health & Safety Guidelines', icon: <Heart className="h-5 w-5" /> },
    { id: 'calendar', title: 'MTCA Annual Calendar', icon: <Calendar className="h-5 w-5" /> },
    { id: 'timetable', title: 'MTCA School Timetable', icon: <Clock className="h-5 w-5" /> },
    { id: 'exams', title: 'External Exam Application Processes and Key Dates', icon: <GraduationCap className="h-5 w-5" /> },
    { id: 'enrollment', title: 'Enrollment Process', icon: <UserPlus className="h-5 w-5" /> },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-red-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Administrative Information</h1>
          <p className="text-xl text-red-100 max-w-3xl">
            Essential policies, procedures, and information for students, parents, and staff
          </p>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex space-x-4 overflow-x-auto">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => setActiveTab(section.id)}
                className={`py-4 px-3 border-b-2 font-medium text-sm whitespace-nowrap flex items-center space-x-2 ${
                  activeTab === section.id
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
        
        {/* Code of Conduct */}
        {activeTab === 'conduct' && (
          <div className="space-y-8">
            <div className="text-center mb-12">
              <Shield className="h-16 w-16 text-red-600 mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Code of Conduct</h2>
            </div>
            
            <div className="bg-white rounded-lg shadow-sm p-8 border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Student Code of Conduct</h3>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Expected Behavior</h4>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-red-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span>Respect for teachers, staff, and fellow students</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-red-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span>Punctual attendance to all classes and activities</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-red-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span>Active participation in learning activities</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-red-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span>Proper care of school facilities and materials</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-red-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span>Use of appropriate language and behavior</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Disciplinary Procedures</h4>
                  <div className="space-y-4">
                    <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                      <h5 className="font-medium text-yellow-800 mb-2">Level 1: Verbal Warning</h5>
                      <p className="text-yellow-700 text-sm">First instance of minor misconduct</p>
                    </div>
                    <div className="bg-orange-50 p-4 rounded-lg border border-orange-200">
                      <h5 className="font-medium text-orange-800 mb-2">Level 2: Written Warning</h5>
                      <p className="text-orange-700 text-sm">Repeated minor issues or moderate misconduct</p>
                    </div>
                    <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                      <h5 className="font-medium text-red-800 mb-2">Level 3: Parent Meeting</h5>
                      <p className="text-red-700 text-sm">Serious misconduct requiring parent involvement</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 p-6 bg-blue-50 rounded-lg border border-blue-200">
                <h4 className="text-lg font-semibold text-blue-800 mb-3">Positive Behavior Recognition</h4>
                <p className="text-blue-700">
                  MTCA believes in recognizing and celebrating positive behavior through certificates, 
                  awards, and public recognition during school events.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* DSL Policies */}
        {activeTab === 'dsl' && (
          <div className="space-y-8">
            <div className="text-center mb-12">
              <FileText className="h-16 w-16 text-red-600 mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-gray-900 mb-4">DSL Policies</h2>
              <p className="text-gray-600">Designated Safeguarding Lead Policies and Procedures</p>
            </div>
            
            <div className="bg-white rounded-lg shadow-sm p-8 border border-gray-200">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Safeguarding Framework</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li>• Child protection procedures</li>
                    <li>• Risk assessment protocols</li>
                    <li>• Incident reporting mechanisms</li>
                    <li>• Staff training requirements</li>
                    <li>• Parent communication guidelines</li>
                  </ul>
                  
                  <div className="mt-6 p-4 bg-red-50 rounded-lg border border-red-200">
                    <h4 className="font-semibold text-red-800 mb-2">Emergency Contacts</h4>
                    <p className="text-red-700 text-sm">DSL: Mrs. Priya Sharma</p>
                    <p className="text-red-700 text-sm">Phone: +44 123 456 7891</p>
                    <p className="text-red-700 text-sm">Email: safeguarding@midlandstamilculture.org</p>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Key Documents</h3>
                  <div className="space-y-3">
                    <button className="w-full text-left p-3 bg-gray-50 rounded-lg border border-gray-200 hover:bg-gray-100 transition flex items-center">
                      <Download className="h-4 w-4 text-red-600 mr-3" />
                      <span className="text-gray-700">Safeguarding Policy (PDF)</span>
                    </button>
                    <button className="w-full text-left p-3 bg-gray-50 rounded-lg border border-gray-200 hover:bg-gray-100 transition flex items-center">
                      <Download className="h-4 w-4 text-red-600 mr-3" />
                      <span className="text-gray-700">Child Protection Guidelines (PDF)</span>
                    </button>
                    <button className="w-full text-left p-3 bg-gray-50 rounded-lg border border-gray-200 hover:bg-gray-100 transition flex items-center">
                      <Download className="h-4 w-4 text-red-600 mr-3" />
                      <span className="text-gray-700">Incident Report Form (PDF)</span>
                    </button>
                    <button className="w-full text-left p-3 bg-gray-50 rounded-lg border border-gray-200 hover:bg-gray-100 transition flex items-center">
                      <ExternalLink className="h-4 w-4 text-red-600 mr-3" />
                      <span className="text-gray-700">Online Safety Resources</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Health & Safety Guidelines */}
        {activeTab === 'safety' && (
          <div className="space-y-8">
            <div className="text-center mb-12">
              <Heart className="h-16 w-16 text-red-600 mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Health & Safety Guidelines</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Health Protocols</h3>
                <ul className="space-y-3 text-gray-700">
                  <li>• Regular health screenings</li>
                  <li>• Vaccination requirements</li>
                  <li>• Illness reporting procedures</li>
                  <li>• Medication administration policy</li>
                  <li>• First aid procedures</li>
                  <li>• Emergency medical response</li>
                </ul>
              </div>
              
              <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Safety Measures</h3>
                <ul className="space-y-3 text-gray-700">
                  <li>• Building security protocols</li>
                  <li>• Fire evacuation procedures</li>
                  <li>• Visitor management system</li>
                  <li>• Equipment safety checks</li>
                  <li>• Risk assessment procedures</li>
                  <li>• Emergency contact systems</li>
                </ul>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-sm p-8 border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">COVID-19 Guidelines</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <div className="text-2xl mb-2">😷</div>
                  <h4 className="font-semibold text-gray-900 mb-2">Hygiene</h4>
                  <p className="text-gray-600 text-sm">Regular hand washing and sanitization</p>
                </div>
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <div className="text-2xl mb-2">📏</div>
                  <h4 className="font-semibold text-gray-900 mb-2">Distancing</h4>
                  <p className="text-gray-600 text-sm">Appropriate social distancing measures</p>
                </div>
                <div className="text-center p-4 bg-yellow-50 rounded-lg">
                  <div className="text-2xl mb-2">🌡️</div>
                  <h4 className="font-semibold text-gray-900 mb-2">Screening</h4>
                  <p className="text-gray-600 text-sm">Daily health checks and monitoring</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* MTCA Annual Calendar */}
        {activeTab === 'calendar' && (
          <div className="space-y-8">
            <div className="text-center mb-12">
              <Calendar className="h-16 w-16 text-red-600 mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-gray-900 mb-4">MTCA Annual Calendar</h2>
            </div>
            
            <div className="bg-white rounded-lg shadow-sm p-8 border border-gray-200">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-red-50 p-6 rounded-lg border border-red-200">
                  <h3 className="text-lg font-semibold text-red-800 mb-3">Term 1 (September - December)</h3>
                  <ul className="text-red-700 text-sm space-y-2">
                    <li>• September 9: Term begins</li>
                    <li>• October 14: Diwali celebration</li>
                    <li>• November 18: Parent-teacher meetings</li>
                    <li>• December 16: Winter break begins</li>
                  </ul>
                </div>
                
                <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                  <h3 className="text-lg font-semibold text-blue-800 mb-3">Term 2 (January - April)</h3>
                  <ul className="text-blue-700 text-sm space-y-2">
                    <li>• January 8: Term resumes</li>
                    <li>• February 18: Cultural week</li>
                    <li>• March 25: Spring assessments</li>
                    <li>• April 14: Tamil New Year</li>
                  </ul>
                </div>
                
                <div className="bg-green-50 p-6 rounded-lg border border-green-200">
                  <h3 className="text-lg font-semibold text-green-800 mb-3">Term 3 (May - July)</h3>
                  <ul className="text-green-700 text-sm space-y-2">
                    <li>• May 6: Final term begins</li>
                    <li>• June 10-24: External examinations</li>
                    <li>• July 8: Awards ceremony</li>
                    <li>• July 15: Summer break begins</li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-8 text-center">
                <button className="bg-red-600 text-white px-6 py-3 rounded-full hover:bg-red-700 transition inline-flex items-center">
                  <Download className="h-4 w-4 mr-2" />
                  Download Full Calendar (PDF)
                </button>
              </div>
            </div>
          </div>
        )}

        {/* MTCA School Timetable */}
        {activeTab === 'timetable' && (
          <div className="space-y-8">
            <div className="text-center mb-12">
              <Clock className="h-16 w-16 text-red-600 mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-gray-900 mb-4">MTCA School Timetable</h2>
            </div>
            
            <div className="bg-white rounded-lg shadow-sm p-8 border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Saturday Schedule (Effective from 01/02/2025)</h3>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300">
                  <thead>
                    <tr className="bg-red-50">
                      <th className="border border-gray-300 px-4 py-3 text-left">Time</th>
                      <th className="border border-gray-300 px-4 py-3 text-left">Program</th>
                      <th className="border border-gray-300 px-4 py-3 text-left">Teacher</th>
                      <th className="border border-gray-300 px-4 py-3 text-left">Room</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">08:30am – 02:00pm</td>
                      <td className="border border-gray-300 px-4 py-2">Tamil Lessons</td>
                      <td className="border border-gray-300 px-4 py-2">Multiple Teachers</td>
                      <td className="border border-gray-300 px-4 py-2">Multiple Classrooms</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-2">08:30am - 12:30pm</td>
                      <td className="border border-gray-300 px-4 py-2">Bharatanatyam</td>
                      <td className="border border-gray-300 px-4 py-2">Miss. Arseca Suthakar</td>
                      <td className="border border-gray-300 px-4 py-2">Dance Studio</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">09:00am - 10:00am</td>
                      <td className="border border-gray-300 px-4 py-2">Miruthangam</td>
                      <td className="border border-gray-300 px-4 py-2">Mr. Danujan Sivanesan</td>
                      <td className="border border-gray-300 px-4 py-2">Music Room</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-2">10:15am - 11:45am</td>
                      <td className="border border-gray-300 px-4 py-2">Carnatic Music</td>
                      <td className="border border-gray-300 px-4 py-2">Mr. A.G. Lakshmanan</td>
                      <td className="border border-gray-300 px-4 py-2">Music Hall</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">10:30am – 11:30am</td>
                      <td className="border border-gray-300 px-4 py-2">Silambam (Adults)</td>
                      <td className="border border-gray-300 px-4 py-2">Mr. Sivalingham Selvaraj</td>
                      <td className="border border-gray-300 px-4 py-2">Sports Hall</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-2">12:00pm - 02:00pm</td>
                      <td className="border border-gray-300 px-4 py-2">Veena & Violin</td>
                      <td className="border border-gray-300 px-4 py-2">Mrs. Satheesna Kiritharan & Miss. Krithiha Kiritharan</td>
                      <td className="border border-gray-300 px-4 py-2">Music Rooms</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
                <h4 className="font-semibold text-blue-800 mb-2">Location Details</h4>
                <p className="text-blue-700 text-sm">
                  <strong>Address:</strong> Hodge Hill Girls School, Bromford Road, Birmingham, B36 8EY<br />
                  <strong>Operating Since:</strong> 06/09/2008<br />
                  <strong>Contact:</strong> 0121 351 1305 | midlandstamilca@gmail.com
                </p>
              </div>
              
              <div className="mt-6 text-center">
                <button className="bg-red-600 text-white px-6 py-3 rounded-full hover:bg-red-700 transition inline-flex items-center">
                  <Download className="h-4 w-4 mr-2" />
                  Download Timetable (PDF)
                </button>
              </div>
            </div>
          </div>
        )}

        {/* External Exam Application Processes */}
        {activeTab === 'exams' && (
          <div className="space-y-8">
            <div className="text-center mb-12">
              <GraduationCap className="h-16 w-16 text-red-600 mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-gray-900 mb-4">External Exam Application Processes and Key Dates</h2>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">BTEB Exams</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-gray-900">Application Deadline</h4>
                    <p className="text-gray-600 text-sm">March 31, 2024</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Exam Dates</h4>
                    <p className="text-gray-600 text-sm">June 10-17, 2024</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Results</h4>
                    <p className="text-gray-600 text-sm">August 15, 2024</p>
                  </div>
                  <button className="w-full mt-4 bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700 transition text-sm">
                    Apply Now
                  </button>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Edexcel O-Level</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-gray-900">Application Deadline</h4>
                    <p className="text-gray-600 text-sm">February 28, 2024</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Exam Dates</h4>
                    <p className="text-gray-600 text-sm">May 13-24, 2024</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Results</h4>
                    <p className="text-gray-600 text-sm">August 22, 2024</p>
                  </div>
                  <button className="w-full mt-4 bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700 transition text-sm">
                    Apply Now
                  </button>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Cambridge A-Level</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-gray-900">Application Deadline</h4>
                    <p className="text-gray-600 text-sm">January 31, 2024</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Exam Dates</h4>
                    <p className="text-gray-600 text-sm">May 6-June 14, 2024</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Results</h4>
                    <p className="text-gray-600 text-sm">August 13, 2024</p>
                  </div>
                  <button className="w-full mt-4 bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700 transition text-sm">
                    Apply Now
                  </button>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-sm p-8 border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Application Process</h3>
              <div className="grid md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-white font-bold">1</span>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Complete Form</h4>
                  <p className="text-gray-600 text-sm">Fill out the application form with required details</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-white font-bold">2</span>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Submit Documents</h4>
                  <p className="text-gray-600 text-sm">Provide required documentation and identification</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-white font-bold">3</span>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Pay Fees</h4>
                  <p className="text-gray-600 text-sm">Complete payment of examination fees</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-white font-bold">4</span>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Confirmation</h4>
                  <p className="text-gray-600 text-sm">Receive confirmation and exam details</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Enrollment Process */}
        {activeTab === 'enrollment' && (
          <div className="space-y-8">
            <div className="text-center mb-12">
              <UserPlus className="h-16 w-16 text-red-600 mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Enrollment Process</h2>
            </div>
            
            <div className="bg-white rounded-lg shadow-sm p-8 border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">How to Enroll at MTCA</h3>
              
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Enrollment Steps</h4>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-white text-sm font-bold">1</span>
                      </div>
                      <div>
                        <h5 className="font-medium text-gray-900">Initial Inquiry</h5>
                        <p className="text-gray-600 text-sm">Contact us via phone, email, or visit our school</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-white text-sm font-bold">2</span>
                      </div>
                      <div>
                        <h5 className="font-medium text-gray-900">School Visit</h5>
                        <p className="text-gray-600 text-sm">Schedule a visit to meet teachers and see facilities</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-white text-sm font-bold">3</span>
                      </div>
                      <div>
                        <h5 className="font-medium text-gray-900">Assessment</h5>
                        <p className="text-gray-600 text-sm">Student assessment to determine appropriate level</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-white text-sm font-bold">4</span>
                      </div>
                      <div>
                        <h5 className="font-medium text-gray-900">Complete Forms</h5>
                        <p className="text-gray-600 text-sm">Fill out enrollment and medical forms</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-white text-sm font-bold">5</span>
                      </div>
                      <div>
                        <h5 className="font-medium text-gray-900">Payment</h5>
                        <p className="text-gray-600 text-sm">Pay enrollment fees and first term fees</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-white text-sm font-bold">6</span>
                      </div>
                      <div>
                        <h5 className="font-medium text-gray-900">Welcome Session</h5>
                        <p className="text-gray-600 text-sm">Attend orientation and begin classes</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Required Documents</h4>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-red-600 rounded-full mr-3"></div>
                      <span>Completed enrollment application</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-red-600 rounded-full mr-3"></div>
                      <span>Student's birth certificate</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-red-600 rounded-full mr-3"></div>
                      <span>Proof of address</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-red-600 rounded-full mr-3"></div>
                      <span>Medical information form</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-red-600 rounded-full mr-3"></div>
                      <span>Emergency contact details</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-red-600 rounded-full mr-3"></div>
                      <span>Previous school reports (if applicable)</span>
                    </li>
                  </ul>
                  
                  <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
                    <h5 className="font-semibold text-blue-800 mb-2">Enrollment Fees</h5>
                    <p className="text-blue-700 text-sm">
                      One-time enrollment fee: £50<br />
                      Term fees vary by program<br />
                      Contact us for current fee structure
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="text-center">
                <button className="bg-red-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-red-700 transition inline-flex items-center">
                  <UserPlus className="h-5 w-5 mr-2" />
                  Start Enrollment Process
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Admin;
