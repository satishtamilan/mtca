import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { BookOpen, Download, Link as LinkIcon } from 'lucide-react';

function Resources() {
  const { t } = useLanguage();

  const materials = [
    {
      title: 'Tamil Alphabet Guide',
      description: 'Complete guide to Tamil alphabet with pronunciation',
      link: '#',
    },
    {
      title: 'Basic Grammar Rules',
      description: 'Essential Tamil grammar rules for beginners',
      link: '#',
    },
    {
      title: 'Vocabulary Lists',
      description: 'Common words and phrases by category',
      link: '#',
    },
  ];

  const downloads = [
    {
      title: 'Beginner Workbook',
      description: 'Practice exercises for beginners',
      link: '#',
    },
    {
      title: 'Writing Practice Sheets',
      description: 'Tamil letter writing practice sheets',
      link: '#',
    },
    {
      title: 'Reading Comprehension',
      description: 'Short stories with questions',
      link: '#',
    },
  ];

  const links = [
    {
      title: 'Tamil Virtual Academy',
      description: 'Online Tamil learning resources',
      url: 'https://www.tamilvu.org/',
    },
    {
      title: 'Tamil Dictionary',
      description: 'Comprehensive Tamil-English dictionary',
      url: 'https://www.tamildictionary.org/',
    },
    {
      title: 'Tamil Literature',
      description: 'Classic Tamil literature resources',
      url: 'https://www.projectmadurai.org/',
    },
  ];

  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold mb-12">{t('resources.title')}</h1>

        {/* Learning Materials */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold mb-6">{t('resources.materials')}</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {materials.map((material, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm p-6">
                <div className="bg-red-100 rounded-lg p-3 w-12 h-12 flex items-center justify-center mb-4">
                  <BookOpen className="w-6 h-6 text-red-600" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{material.title}</h3>
                <p className="text-gray-600 mb-4">{material.description}</p>
                <a
                  href={material.link}
                  className="text-red-600 font-semibold hover:text-red-700"
                >
                  View Material →
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Downloads */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold mb-6">{t('resources.downloads')}</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {downloads.map((download, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm p-6">
                <div className="bg-red-100 rounded-lg p-3 w-12 h-12 flex items-center justify-center mb-4">
                  <Download className="w-6 h-6 text-red-600" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{download.title}</h3>
                <p className="text-gray-600 mb-4">{download.description}</p>
                <a
                  href={download.link}
                  className="text-red-600 font-semibold hover:text-red-700"
                >
                  Download →
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Useful Links */}
        <div>
          <h2 className="text-2xl font-semibold mb-6">{t('resources.links')}</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {links.map((link, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm p-6">
                <div className="bg-red-100 rounded-lg p-3 w-12 h-12 flex items-center justify-center mb-4">
                  <LinkIcon className="w-6 h-6 text-red-600" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{link.title}</h3>
                <p className="text-gray-600 mb-4">{link.description}</p>
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-red-600 font-semibold hover:text-red-700"
                >
                  Visit Website →
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resources;