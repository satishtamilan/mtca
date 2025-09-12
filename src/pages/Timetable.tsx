import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Clock, MapPin, Calendar, Phone, Mail } from 'lucide-react';

function Timetable() {
  const { t } = useLanguage();

  const lessonSchedule = [
    {
      subject: 'Tamil Lessons',
      time: '08:30am – 02:00pm',
      day: 'Saturday',
      teachers: ['Mrs. Sivayogi Sivayogaiswaran', 'Mrs. Kavitha Pandian', 'Mrs. Vijayalakshmi Thirugnanarajah', 'Mrs. Vathsala Suthakar', 'Mrs. Shanthi Mohan'],
      room: 'Multiple Classrooms',
      description: 'Comprehensive Tamil language instruction for all levels'
    },
    {
      subject: 'Miruthangam Lessons',
      time: '09:00am - 10:00am',
      day: 'Saturday',
      teachers: ['Mr. Danujan Sivanesan'],
      room: 'Music Room',
      description: 'Traditional percussion instrument training'
    },
    {
      subject: 'Carnatic Music Lessons',
      time: '10:15am - 11:45am',
      day: 'Saturday',
      teachers: ['Mr. A.G. Lakshmanan'],
      room: 'Music Hall',
      description: 'Classical South Indian vocal music instruction'
    },
    {
      subject: 'Silambam for Adults',
      time: '10:30am – 11:30am',
      day: 'Saturday',
      teachers: ['Mr. Sivalingham Selvaraj'],
      room: 'Sports Hall',
      description: 'Traditional Tamil martial arts for adults'
    },
    {
      subject: 'Bharatanatyam Lessons',
      time: '08:30am - 12:30pm',
      day: 'Saturday',
      teachers: ['Miss. Arseca Suthakar'],
      room: 'Dance Studio',
      description: 'Classical Tamil dance instruction for all ages'
    },
    {
      subject: 'Veena & Violin Lessons',
      time: '12:00pm - 02:00pm',
      day: 'Saturday',
      teachers: ['Mrs. Satheesna Kiritharan (Veena)', 'Miss. Krithiha Kiritharan (Violin)'],
      room: 'Music Rooms',
      description: 'Traditional string instrument instruction'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-red-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">MTCA School Timetable</h1>
          <p className="text-xl text-red-100 max-w-3xl">
            Lesson times effective from 01/02/2025 at Hodge Hill Girls School, Birmingham
          </p>
        </div>
      </div>

      {/* School Information */}
      <div className="py-8 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div className="flex items-center justify-center space-x-3">
              <MapPin className="h-6 w-6 text-red-600" />
              <div>
                <p className="font-semibold text-gray-900">Location</p>
                <p className="text-gray-600 text-sm">Hodge Hill Girls School</p>
              </div>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <Calendar className="h-6 w-6 text-red-600" />
              <div>
                <p className="font-semibold text-gray-900">Operating Since</p>
                <p className="text-gray-600 text-sm">06/09/2008</p>
              </div>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <Clock className="h-6 w-6 text-red-600" />
              <div>
                <p className="font-semibold text-gray-900">Schedule</p>
                <p className="text-gray-600 text-sm">Saturdays Only</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Timetable Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <Clock className="h-16 w-16 text-red-600 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Weekly Schedule</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              All classes are held on Saturdays at Hodge Hill Girls School, Birmingham B36 8EY
            </p>
          </div>

          {/* Lesson Schedule Cards */}
          <div className="grid gap-6 mb-12">
            {lessonSchedule.map((lesson, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{lesson.subject}</h3>
                    <p className="text-gray-600 mb-3">{lesson.description}</p>
                  </div>
                  <div className="text-right ml-6">
                    <div className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium mb-2">
                      {lesson.day}
                    </div>
                    <div className="text-lg font-semibold text-gray-900">
                      {lesson.time}
                    </div>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Teachers:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {lesson.teachers.map((teacher, teacherIndex) => (
                        <li key={teacherIndex}>• {teacher}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Location:</h4>
                    <p className="text-sm text-gray-600">{lesson.room}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Summary Table */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
            <div className="px-6 py-4 bg-red-50 border-b border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900">Quick Reference Timetable</h3>
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Subject</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Time</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Duration</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Room</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {lessonSchedule.map((lesson, index) => (
                    <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{lesson.subject}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{lesson.time}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {lesson.subject === 'Tamil Lessons' ? '5.5 hours' :
                         lesson.subject === 'Bharatanatyam Lessons' ? '4 hours' :
                         lesson.subject === 'Veena & Violin Lessons' ? '2 hours' :
                         lesson.subject === 'Carnatic Music Lessons' ? '1.5 hours' :
                         '1 hour'}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{lesson.room}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Important Information */}
          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">School Address</h3>
              <div className="space-y-2 text-gray-700">
                <p className="font-medium">Hodge Hill Girls School</p>
                <p>Bromford Road</p>
                <p>Birmingham B36 8EY</p>
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <p className="text-sm text-gray-600">
                    <strong>Operating Since:</strong> 06/09/2008
                  </p>
                  <p className="text-sm text-gray-600">
                    <strong>Established:</strong> 1986
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Contact Information</h3>
              <div className="space-y-3 text-gray-700">
                <div className="flex items-center">
                  <Phone className="h-4 w-4 mr-3 text-red-600" />
                  <span>0121 351 1305</span>
                </div>
                <div className="flex items-center">
                  <Mail className="h-4 w-4 mr-3 text-red-600" />
                  <span>midlandstamilca@gmail.com</span>
                </div>
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <p className="text-sm text-gray-600">
                    <strong>Note:</strong> Timetable effective from 01/02/2025
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Timetable;