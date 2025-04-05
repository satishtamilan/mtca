import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

function About() {
  const { t } = useLanguage();

  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8">{t('nav.about')}</h1>
        <div className="prose max-w-none">
          <p className="text-lg text-gray-600 mb-6">
          அன்புடையீர்.

எங்கள் பெர்மிங்காம் தமிழ்ப் பள்ளியில்  இங்கிலாந்து  பள்ளிகளில் நடத்தப்படும்   பாடத்திட்டத்தின் முறைப்படியே தமிழும் கற்றுத் தரப்படுகிறது.

British Tamil Exam Board  அமைப்பினர் நடத்தும் கல்வித்திட்டத்தை முறையாக ஆசிரியர்கள் பயிற்சி பெற்று தமிழை நான்கு வகையான 

கேட்டல்
பேசுதல்
வாசித்தல் 
எழுதுதல் 

என்று மாணவர்களுக்கு 
கற்றுக் கொடுக்கிறோம்.

நான்கு தேர்வுகளும் 
British Tamil Exam Board அமைப்பினரின் தலைமையில் நடைபெறும்.  

OCR தேர்வுத்திட்டம் நடைமுறைப்படுத்தப்படுகிறது.    

ஒவ்வொரு சனிக்கிழமையும் காலை 9 மணியிலிருந்து மதியம் 2 மணிவரை தமிழ் வகுப்புகள் நடைபெறும். 

BTEB Exam Board Exam Papers

பாலர் வகுப்பு - Nursery 
பாலர் வகுப்பு 2 - Reception 
தரம் 1 - Grade 1 
தரம் 2 -  Grade 2
தரம் 3 -  Grade 3 
தரம் 4 - Grade 4
தரம் 5 - Grade 5 
தரம் 6 - Grade 6 
தரம் 7 - Grade 7 
தரம் 8 - Grade 8 
தரம் 9 - Grade 9 

Edexcel Exam Papers 
தரம் 10 - O Level 

Cambridge Exam Papers 

தரம் 11 - As Level  
தரம் 12 - A Level 

என்று அதற்குரிய பாடநூல்கள் & பாடத்திட்டத்தின் கட்டமைப்பின்படி கற்றுத்தரப்படும்.   

ஒவ்வொரு வருடமும் ஜீன் மாதம் கடைசி  இறுதி வாரங்களில்  தேர்வுகள் வார இறுதியில் நடைபெறும்.

மாணவர்களுக்கு தமிழ்ப் பாடநூல்கள் 
British Tamil Exam Board வழங்குவர்.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;