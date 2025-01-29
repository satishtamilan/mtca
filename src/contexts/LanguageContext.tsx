import React, { createContext, useContext, useState } from 'react';

type Language = 'en' | 'ta';

type Translations = {
  [key in Language]: {
    [key: string]: string;
  };
};

const translations: Translations = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.events': 'Events',
    'nav.gallery': 'Gallery',
    'nav.contact': 'Contact',
    'nav.joinUs': 'Join Us',
    'nav.enroll': 'Enroll',
    'nav.timetable': 'Timetable',
    'nav.calendar': 'Calendar',
    'nav.resources': 'Resources',
    
    // Hero Section
    'hero.title': 'Midlands Tamil Cultural Association',
    'hero.subtitle': 'Preserving and celebrating Tamil culture and heritage in the Midlands through community events, education, and cultural programs.',
    'hero.cta': 'Join Our Community',
    
    // Mission Section
    'mission.title': 'Our Mission',
    'mission.community.title': 'Community Building',
    'mission.community.desc': 'Bringing together Tamil families and individuals to create a strong, supportive community.',
    'mission.events.title': 'Cultural Events',
    'mission.events.desc': 'Organizing festivals, performances, and celebrations that showcase Tamil traditions.',
    'mission.arts.title': 'Arts & Education',
    'mission.arts.desc': 'Promoting Tamil language, classical arts, and cultural education for all ages.',
    
    // Events Section
    'events.title': 'Upcoming Events',
    'events.learnMore': 'Learn More',
    'events.pongal': 'Pongal Celebration',
    'events.tamilNewYear': 'Tamil New Year',
    'events.summer': 'Summer Cultural Festival',
    
    // Contact Section
    'contact.title': 'Contact Us',
    'contact.location': 'Location',
    'contact.phone': 'Phone',
    'contact.email': 'Email',
    'contact.form.name': 'Name',
    'contact.form.email': 'Email',
    'contact.form.message': 'Message',
    'contact.form.send': 'Send Message',
    
    // Footer
    'footer.about': 'Celebrating Tamil culture and heritage in the Midlands since 1985.',
    'footer.quickLinks': 'Quick Links',
    'footer.contactInfo': 'Contact Info',
    'footer.followUs': 'Follow Us',
    'footer.rights': 'All rights reserved.',

    // Enrollment
    'enroll.title': 'Online Enrollment',
    'enroll.subtitle': 'Join our Tamil language and cultural education programs',
    'enroll.form.studentInfo': 'Student Information',
    'enroll.form.parentInfo': 'Parent/Guardian Information',
    'enroll.form.submit': 'Submit Enrollment',

    // Timetable
    'timetable.title': 'Class Timetable',
    'timetable.beginner': 'Beginner Level',
    'timetable.intermediate': 'Intermediate Level',
    'timetable.advanced': 'Advanced Level',
    'timetable.cultural': 'Cultural Classes',

    // Calendar
    'calendar.title': 'School Calendar',
    'calendar.terms': 'Term Dates',
    'calendar.events': 'School Events',
    'calendar.holidays': 'Holidays',

    // Resources
    'resources.title': 'Study Resources',
    'resources.materials': 'Learning Materials',
    'resources.downloads': 'Downloads',
    'resources.links': 'Useful Links',

    // Admin
    'admin.title': 'Admin Area',
    'admin.contacts': 'Contacts',
    'admin.policies': 'Policies',
    'admin.forms': 'Forms',
    'admin.examLinks': 'Exam Board Links',
  },
  ta: {
    // Navigation
    'nav.home': 'முகப்பு',
    'nav.about': 'எங்களை பற்றி',
    'nav.events': 'நிகழ்வுகள்',
    'nav.gallery': 'புகைப்படங்கள்',
    'nav.contact': 'தொடர்பு',
    'nav.joinUs': 'இணைய',
    'nav.enroll': 'சேர்க்கை',
    'nav.timetable': 'கால அட்டவணை',
    'nav.calendar': 'காலண்டர்',
    'nav.resources': 'வளங்கள்',
    
    // Hero Section
    'hero.title': 'மிட்லாண்ட்ஸ் தமிழ் கலாச்சார சங்கம்',
    'hero.subtitle': 'சமூக நிகழ்வுகள், கல்வி மற்றும் கலாச்சார நிகழ்ச்சிகள் மூலம் மிட்லாண்ட்ஸில் தமிழ் கலாச்சாரம் மற்றும் பாரம்பரியத்தை பாதுகாத்தல் மற்றும் கொண்டாடுதல்.',
    'hero.cta': 'எங்களுடன் இணையுங்கள்',
    
    // Mission Section
    'mission.title': 'எங்கள் நோக்கம்',
    'mission.community.title': 'சமூக கட்டமைப்பு',
    'mission.community.desc': 'வலுவான, ஆதரவான சமூகத்தை உருவாக்க தமிழ் குடும்பங்களையும் தனிநபர்களையும் ஒன்றிணைத்தல்.',
    'mission.events.title': 'கலாச்சார நிகழ்வுகள்',
    'mission.events.desc': 'தமிழ் பாரம்பரியங்களை வெளிப்படுத்தும் விழாக்கள், நிகழ்ச்சிகள் மற்றும் கொண்டாட்டங்களை ஏற்பாடு செய்தல்.',
    'mission.arts.title': 'கலை & கல்வி',
    'mission.arts.desc': 'அனைத்து வயதினருக்கும் தமிழ் மொழி, பாரம்பரிய கலைகள் மற்றும் கலாச்சார கல்வியை ஊக்குவித்தல்.',
    
    // Events Section
    'events.title': 'வரவிருக்கும் நிகழ்வுகள்',
    'events.learnMore': 'மேலும் அறிய',
    'events.pongal': 'பொங்கல் விழா',
    'events.tamilNewYear': 'தமிழ் புத்தாண்டு',
    'events.summer': 'கோடை கலாச்சார விழா',
    
    // Contact Section
    'contact.title': 'தொடர்பு கொள்ள',
    'contact.location': 'இடம்',
    'contact.phone': 'தொலைபேசி',
    'contact.email': 'மின்னஞ்சல்',
    'contact.form.name': 'பெயர்',
    'contact.form.email': 'மின்னஞ்சல்',
    'contact.form.message': 'செய்தி',
    'contact.form.send': 'செய்தி அனுப்பு',
    
    // Footer
    'footer.about': '1985 முதல் மிட்லாண்ட்ஸில் தமிழ் கலாச்சாரம் மற்றும் பாரம்பரியத்தை கொண்டாடுகிறோம்.',
    'footer.quickLinks': 'விரைவு இணைப்புகள்',
    'footer.contactInfo': 'தொடர்பு விவரங்கள்',
    'footer.followUs': 'பின்தொடருங்கள்',
    'footer.rights': 'அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை.',

    // Enrollment
    'enroll.title': 'ஆன்லைன் சேர்க்கை',
    'enroll.subtitle': 'எங்கள் தமிழ் மொழி மற்றும் கலாச்சார கல்வி திட்டங்களில் சேரவும்',
    'enroll.form.studentInfo': 'மாணவர் தகவல்',
    'enroll.form.parentInfo': 'பெற்றோர்/பாதுகாவலர் தகவல்',
    'enroll.form.submit': 'சேர்க்கையை சமர்ப்பிக்கவும்',

    // Timetable
    'timetable.title': 'வகுப்பு கால அட்டவணை',
    'timetable.beginner': 'தொடக்க நிலை',
    'timetable.intermediate': 'இடைநிலை',
    'timetable.advanced': 'மேம்பட்ட நிலை',
    'timetable.cultural': 'கலாச்சார வகுப்புகள்',

    // Calendar
    'calendar.title': 'பள்ளி காலண்டர்',
    'calendar.terms': 'பருவ தேதிகள்',
    'calendar.events': 'பள்ளி நிகழ்வுகள்',
    'calendar.holidays': 'விடுமுறைகள்',

    // Resources
    'resources.title': 'படிப்பு வளங்கள்',
    'resources.materials': 'கற்றல் பொருட்கள்',
    'resources.downloads': 'பதிவிறக்கங்கள்',
    'resources.links': 'பயனுள்ள இணைப்புகள்',

    // Admin
    'admin.title': 'நிர்வாக பகுதி',
    'admin.contacts': 'தொடர்புகள்',
    'admin.policies': 'கொள்கைகள்',
    'admin.forms': 'படிவங்கள்',
    'admin.examLinks': 'தேர்வு வாரிய இணைப்புகள்',
  }
};

type LanguageContextType = {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};