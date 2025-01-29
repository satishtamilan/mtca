import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Users, FileText, FormInput, ExternalLink } from 'lucide-react';

function Admin() {
  const { t } = useLanguage();

  const sections = [
    {
      title: t('admin.contacts'),
      icon: Users,
      items: [
        { title: 'Staff Directory', link: '#' },
        { title: 'Parent Contacts', link: '#' },
        { title: 'Emergency Contacts', link: '#' },
      ],
    },
    {
      title: t('admin.policies'),
      icon: FileText,
      items: [
        { title: 'Safeguarding Policy', link: '#' },
        { title: 'Attendance Policy', link: '#' },
        { title: 'Behavior Policy', link: '#' },
      ],
    },
    {
      title: t('admin.forms'),
      icon: FormInput,
      items: [
        { title: 'Leave Request Form', link: '#' },
        { title: 'Incident Report Form', link: '#' },
        { title: 'Feedback Form', link: '#' },
      ],
    },
    {
      title: t('admin.examLinks'),
      icon: ExternalLink,
      items: [
        { title: 'GCSE Tamil Board', link: '#' },
        { title: 'A-Level Tamil Resources', link: '#' },
        { title: 'Past Papers', link: '#' },
      ],
    },
  ];

  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold mb-12">{t('admin.title')}</h1>

        <div className="grid md:grid-cols-2 gap-8">
          {sections.map((section, index) => {
            const Icon = section.icon;
            return (
              <div key={index} className="bg-white rounded-lg shadow-sm p-6">
                <div className="flex items-center mb-6">
                  <div className="bg-red-100 rounded-lg p-3 mr-4">
                    <Icon className="w-6 h-6 text-red-600" />
                  </div>
                  <h2 className="text-xl font-semibold">{section.title}</h2>
                </div>
                <ul className="space-y-4">
                  {section.items.map((item, itemIndex) => (
                    <li key={itemIndex}>
                      <a
                        href={item.link}
                        className="text-gray-600 hover:text-red-600 flex items-center"
                      >
                        <span className="w-2 h-2 bg-red-600 rounded-full mr-3"></span>
                        {item.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Admin;