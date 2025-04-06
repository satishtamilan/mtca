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
 அன்புடையீர்.<br /><br />
            எங்கள் பெர்மிங்காம் தமிழ்ப் பள்ளியில்  இங்கிலாந்து  பள்ளிகளில் நடத்தப்படும்   பாடத்திட்டத்தின் முறைப்படியே தமிழும் கற்றுத் தரப்படுகிறது.<br /><br />
            British Tamil Exam Board  அமைப்பினர் நடத்தும் கல்வித்திட்டத்தை முறையாக ஆசிரியர்கள் பயிற்சி பெற்று தமிழை நான்கு வகையான <br />
            கேட்டல்<br />
            பேசுதல்<br />
            வாசித்தல் <br />
            எழுதுதல் <br /><br />
            என்று மாணவர்களுக்கு <br />
            கற்றுக் கொடுக்கிறோம்.<br /><br />
            நான்கு தேர்வுகளும் <br />
            British Tamil Exam Board அமைப்பினரின் தலைமையில் நடைபெறும்.<br /><br />
            OCR தேர்வுத்திட்டம் நடைமுறைப்படுத்தப்படுகிறது.<br /><br />
            ஒவ்வொரு சனிக்கிழமையும் காலை 9 மணியிலிருந்து மதியம் 2 மணிவரை தமிழ் வகுப்புகள் நடைபெறும்.<br /><br />
            BTEB Exam Board Exam Papers<br /><br />
            பாலர் வகுப்பு - Nursery <br />
            பாலர் வகுப்பு 2 - Reception <br />
            தரம் 1 - Grade 1 <br />
            தரம் 2 -  Grade 2<br />
            தரம் 3 -  Grade 3 <br />
            தரம் 4 - Grade 4<br />
            தரம் 5 - Grade 5 <br />
            தரம் 6 - Grade 6 <br />
            தரம் 7 - Grade 7 <br />
            தரம் 8 - Grade 8 <br />
            தரம் 9 - Grade 9 <br /><br />
            Edexcel Exam Papers <br />
            தரம் 10 - O Level <br /><br />
            Cambridge Exam Papers <br /><br />
            தரம் 11 - As Level  <br />
            தரம் 12 - A Level <br /><br />
            என்று அதற்குரிய பாடநூல்கள் &amp; பாடத்திட்டத்தின் கட்டமைப்பின்படி கற்றுத்தரப்படும்.<br /><br />
            ஒவ்வொரு வருடமும் ஜீன் மாதம் கடைசி  இறுதி வாரங்களில்  தேர்வுகள் வார இறுதியில் நடைபெறும்.<br /><br />
            மாணவர்களுக்கு தமிழ்ப் பாடநூல்கள் <br />
            British Tamil Exam Board வழங்குவர்.
            {t('footer.about')}
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
