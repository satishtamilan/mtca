import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Calendar as CalendarIcon } from 'lucide-react';

function SchoolCalendar() {
  const { t } = useLanguage();

  const terms = [
    {
      name: 'Autumn Term 2024',
      start: 'September 7, 2024',
      end: 'December 14, 2024',
      halfTerm: 'October 26 - November 3, 2024',
    },
    {
      name: 'Spring Term 2025',
      start: 'January 11, 2025',
      end: 'March 29, 2025',
      halfTerm: 'February 15 - February 23, 2025',
    },
    {
      name: 'Summer Term 2025',
      start: 'April 19, 2025',
      end: 'July 12, 2025',
      halfTerm: 'May 24 - June 1, 2025',
    },
  ];

  const events = [
    {
      name: 'Parents Meeting',
      date: 'September 14, 2024',
      description: 'Term start meeting with parents',
    },
    {
      name: 'Cultural Day',
      date: 'November 16, 2024',
      description: 'Annual cultural performances',
    },
    {
      name: 'Tamil Language Day',
      date: 'February 8, 2025',
      description: 'Special events celebrating Tamil language',
    },
    {
      name: 'Annual Day',
      date: 'July 5, 2025',
      description: 'End of year celebrations and awards',
    },
  ];

  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold mb-12">{t('calendar.title')}</h1>

        {/* Term Dates */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold mb-6">{t('calendar.terms')}</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {terms.map((term, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-lg font-semibold mb-4">{term.name}</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>
                    <span className="font-medium">Start:</span> {term.start}
                  </li>
                  <li>
                    <span className="font-medium">End:</span> {term.end}
                  </li>
                  <li>
                    <span className="font-medium">Half Term:</span> {term.halfTerm}
                  </li>
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* School Events */}
        <div>
          <h2 className="text-2xl font-semibold mb-6">{t('calendar.events')}</h2>
          <div className="space-y-4">
            {events.map((event, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm p-6 flex items-start">
                <div className="bg-red-100 rounded-lg p-3 mr-6">
                  <CalendarIcon className="w-6 h-6 text-red-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">{event.name}</h3>
                  <p className="text-gray-600 mb-1">{event.date}</p>
                  <p className="text-gray-500">{event.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SchoolCalendar;