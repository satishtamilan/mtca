import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Award } from 'lucide-react';

function Operations() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-red-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">How do we operate</h1>
          <p className="text-xl text-red-100 max-w-3xl">
            Our operational framework, educational methodology, and organizational structure
          </p>
        </div>
      </div>

      {/* Operations Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <Award className="h-16 w-16 text-red-600 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-gray-900 mb-4">How do we operate</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Educational Framework</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• British Tamil Exam Board (BTEB) certified curriculum</li>
                <li>• OCR examination system implementation</li>
                <li>• Four-skill approach: Listening, Speaking, Reading, Writing</li>
                <li>• Age-appropriate learning from Nursery to A-Levels</li>
                <li>• Regular assessments and progress tracking</li>
                <li>• Qualified teacher training and development</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Class Structure</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Saturday classes: 9:00 AM - 5:30 PM</li>
                <li>• Small class sizes for personalized attention</li>
                <li>• Mixed-age cultural activities</li>
                <li>• Parent-teacher consultations</li>
                <li>• Annual examinations in June</li>
                <li>• Continuous assessment throughout the year</li>
              </ul>
            </div>
          </div>

          {/* Examination Levels */}
          <div className="bg-white rounded-lg shadow-sm p-8 border border-gray-200 mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Examination Levels</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-red-50 p-6 rounded-lg">
                <h4 className="text-lg font-semibold text-red-800 mb-3">BTEB Levels</h4>
                <div className="space-y-2 text-gray-700">
                  <p><strong>Nursery to Grade 9</strong></p>
                  <ul className="text-sm space-y-1">
                    <li>• Nursery & Reception</li>
                    <li>• Grades 1-9</li>
                    <li>• Progressive skill development</li>
                    <li>• Cultural integration</li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-red-50 p-6 rounded-lg">
                <h4 className="text-lg font-semibold text-red-800 mb-3">Edexcel</h4>
                <div className="space-y-2 text-gray-700">
                  <p><strong>O Level (Grade 10)</strong></p>
                  <ul className="text-sm space-y-1">
                    <li>• Advanced language skills</li>
                    <li>• Literature appreciation</li>
                    <li>• Essay writing</li>
                    <li>• Oral examinations</li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-red-50 p-6 rounded-lg">
                <h4 className="text-lg font-semibold text-red-800 mb-3">Cambridge</h4>
                <div className="space-y-2 text-gray-700">
                  <p><strong>AS & A Levels</strong></p>
                  <ul className="text-sm space-y-1">
                    <li>• AS Level (Grade 11)</li>
                    <li>• A Level (Grade 12)</li>
                    <li>• University preparation</li>
                    <li>• Advanced literature</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Weekly Schedule */}
          <div className="bg-white rounded-lg shadow-sm p-8 border border-gray-200 mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Weekly Schedule (Saturdays)</h3>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-gray-300">
                <thead>
                  <tr className="bg-red-50">
                    <th className="border border-gray-300 px-4 py-2 text-left">Time</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">Program</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">Age Group</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">9:00 AM - 10:30 AM</td>
                    <td className="border border-gray-300 px-4 py-2">Veena</td>
                    <td className="border border-gray-300 px-4 py-2">Ages 10+</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-2">10:00 AM - 12:00 PM</td>
                    <td className="border border-gray-300 px-4 py-2">Tamil Language</td>
                    <td className="border border-gray-300 px-4 py-2">Ages 5-16</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">10:30 AM - 12:00 PM</td>
                    <td className="border border-gray-300 px-4 py-2">Violin (Carnatic)</td>
                    <td className="border border-gray-300 px-4 py-2">Ages 8+</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-2">11:00 AM - 12:30 PM</td>
                    <td className="border border-gray-300 px-4 py-2">Miruthangam</td>
                    <td className="border border-gray-300 px-4 py-2">Ages 8+</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">1:00 PM - 2:30 PM</td>
                    <td className="border border-gray-300 px-4 py-2">Bharathanaatiyam</td>
                    <td className="border border-gray-300 px-4 py-2">Ages 6+</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-2">2:30 PM - 4:00 PM</td>
                    <td className="border border-gray-300 px-4 py-2">Sangeetham (Carnatic Music)</td>
                    <td className="border border-gray-300 px-4 py-2">Ages 7+</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">4:00 PM - 5:30 PM</td>
                    <td className="border border-gray-300 px-4 py-2">Silambam</td>
                    <td className="border border-gray-300 px-4 py-2">Ages 10+</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Community Engagement */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Community Engagement</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Regular cultural events and celebrations</li>
                <li>• Parent involvement in school activities</li>
                <li>• Community outreach programs</li>
                <li>• Inter-school competitions and collaborations</li>
                <li>• Alumni network and mentorship</li>
                <li>• Cultural workshops for families</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Quality Assurance</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Regular teacher training programs</li>
                <li>• Curriculum review and updates</li>
                <li>• Student progress monitoring</li>
                <li>• Parent feedback integration</li>
                <li>• External examination partnerships</li>
                <li>• Continuous improvement initiatives</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Operations;
