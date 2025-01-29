import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

function Timetable() {
  const { t } = useLanguage();

  const timetableData = {
    beginner: [
      { time: '10:00 - 11:30', day: 'Saturday', teacher: 'Mrs. Lakshmi', room: 'Room 1' },
      { time: '14:00 - 15:30', day: 'Sunday', teacher: 'Mr. Kumar', room: 'Room 2' },
    ],
    intermediate: [
      { time: '11:45 - 13:15', day: 'Saturday', teacher: 'Mrs. Priya', room: 'Room 1' },
      { time: '15:45 - 17:15', day: 'Sunday', teacher: 'Mrs. Devi', room: 'Room 2' },
    ],
    advanced: [
      { time: '13:30 - 15:00', day: 'Saturday', teacher: 'Dr. Rajan', room: 'Room 1' },
      { time: '17:30 - 19:00', day: 'Sunday', teacher: 'Mr. Anand', room: 'Room 2' },
    ],
    cultural: [
      { time: '15:15 - 16:45', day: 'Saturday', subject: 'Bharatanatyam', teacher: 'Mrs. Meena', room: 'Hall' },
      { time: '17:00 - 18:30', day: 'Saturday', subject: 'Carnatic Music', teacher: 'Mr. Ganesh', room: 'Music Room' },
    ],
  };

  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold mb-12">{t('timetable.title')}</h1>
        
        <div className="space-y-12">
          {/* Beginner Level */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">{t('timetable.beginner')}</h2>
            <div className="bg-white rounded-lg shadow overflow-hidden">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Day</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Time</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Teacher</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Room</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {timetableData.beginner.map((item, index) => (
                    <tr key={index}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{item.day}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{item.time}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{item.teacher}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{item.room}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Intermediate Level */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">{t('timetable.intermediate')}</h2>
            <div className="bg-white rounded-lg shadow overflow-hidden">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Day</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Time</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Teacher</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Room</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {timetableData.intermediate.map((item, index) => (
                    <tr key={index}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{item.day}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{item.time}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{item.teacher}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{item.room}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Advanced Level */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">{t('timetable.advanced')}</h2>
            <div className="bg-white rounded-lg shadow overflow-hidden">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Day</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Time</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Teacher</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Room</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {timetableData.advanced.map((item, index) => (
                    <tr key={index}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{item.day}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{item.time}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{item.teacher}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{item.room}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Cultural Classes */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">{t('timetable.cultural')}</h2>
            <div className="bg-white rounded-lg shadow overflow-hidden">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Day</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Time</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Subject</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Teacher</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Room</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {timetableData.cultural.map((item, index) => (
                    <tr key={index}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{item.day}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{item.time}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{item.subject}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{item.teacher}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{item.room}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Timetable;