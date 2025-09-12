import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Calendar, MapPin, Clock, Camera, Users, Heart, Star, Sun, Gift } from 'lucide-react';

function EventsGallery() {
  const { t } = useLanguage();
  const [activeEvent, setActiveEvent] = useState('saraswathy');

  const mtcaEvents = [
    {
      id: 'saraswathy',
      title: 'Saraswathy Pooja',
      icon: <Star className="h-6 w-6" />,
      description: 'Our annual celebration honoring Goddess Saraswathy, the deity of knowledge, music, and arts.',
      story: `Every year, MTCA comes together to celebrate Saraswathy Pooja, a beautiful tradition that honors the goddess of knowledge, wisdom, and the arts. This sacred ceremony holds special significance for our Tamil community, as it represents our dedication to learning and cultural preservation.

The celebration begins with traditional prayers and offerings, where students and families gather to seek blessings for academic success and artistic endeavors. Our beautifully decorated altar features fresh flowers, fruits, and traditional items, creating an atmosphere of devotion and reverence.

What makes this event truly special is seeing our young students participate alongside their parents and grandparents, bridging generations through shared traditions. The children present their school books and musical instruments for blessings, symbolizing their commitment to learning and growth.

The day is filled with classical music performances, traditional dance presentations, and recitations of Tamil poetry. Our talented students showcase their skills in various art forms, from Bharatanatyam to Carnatic music, demonstrating the fruits of their year-long learning journey.

The celebration concludes with a community feast where families share homemade traditional delicacies, strengthening the bonds that make MTCA a true home away from home for Tamil families in the Midlands.`,
      date: 'February 2024',
      photos: [
        {
          url: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop',
          caption: 'Beautiful altar decoration with traditional offerings and flowers'
        },
        {
          url: 'https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=800&h=600&fit=crop',
          caption: 'Students performing classical Bharatanatyam dance'
        },
        {
          url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop',
          caption: 'Children presenting their books for blessings'
        },
        {
          url: 'https://images.unsplash.com/photo-1544531586-fde5298cdd40?w=800&h=600&fit=crop',
          caption: 'Community gathering in prayer and celebration'
        },
        {
          url: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=800&h=600&fit=crop',
          caption: 'Families sharing traditional feast together'
        },
        {
          url: 'https://images.unsplash.com/photo-1523050854058-8df90110c9d1?w=800&h=600&fit=crop',
          caption: 'Musical performances by talented students'
        }
      ]
    },
    {
      id: 'annual',
      title: 'Our Annual Get Together',
      icon: <Heart className="h-6 w-6" />,
      description: 'A heartwarming reunion bringing together all MTCA families for an evening of joy and community bonding.',
      story: `Our Annual Get Together is the highlight of the MTCA calendar - a magical evening where our entire community comes together as one big family. This cherished tradition has been the cornerstone of our association for over two decades, creating lasting memories and strengthening the bonds that unite us.

The event transforms our venue into a vibrant celebration of Tamil culture and community spirit. Families arrive dressed in their finest traditional attire, with children excitedly running around greeting friends they may not have seen since the last gathering. The atmosphere is electric with anticipation and joy.

The evening features a spectacular variety show where our talented community members showcase their skills. From melodious Carnatic vocal performances to energetic folk dances, from comedy skits performed by our teenagers to heartfelt speeches by community elders - every moment is filled with pride and appreciation.

One of the most touching aspects of our Annual Get Together is the recognition ceremony, where we honor outstanding students, dedicated volunteers, and long-serving community members. These moments of celebration remind us of the incredible achievements within our community and inspire others to contribute.

The event concludes with a grand dinner featuring authentic Tamil cuisine prepared by our volunteer families. As the evening winds down, you can see the reluctance in everyone's faces to leave - a testament to the warmth and belonging that defines the MTCA family.

This gathering is more than an event; it's a reaffirmation of our commitment to preserving our heritage while building a supportive community for future generations.`,
      date: 'November 2023',
      photos: [
        {
          url: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=800&h=600&fit=crop',
          caption: 'Community gathering with families in traditional attire'
        },
        {
          url: 'https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=800&h=600&fit=crop',
          caption: 'Cultural dance performances by community members'
        },
        {
          url: 'https://images.unsplash.com/photo-1523050854058-8df90110c9d1?w=800&h=600&fit=crop',
          caption: 'Awards ceremony recognizing outstanding achievements'
        },
        {
          url: 'https://images.unsplash.com/photo-1544531586-fde5298cdd40?w=800&h=600&fit=crop',
          caption: 'Multi-generational families celebrating together'
        },
        {
          url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop',
          caption: 'Children participating in cultural activities'
        },
        {
          url: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop',
          caption: 'Traditional feast shared by the entire community'
        }
      ]
    },
    {
      id: 'bbq',
      title: 'Summer BBQ',
      icon: <Sun className="h-6 w-6" />,
      description: 'A relaxed outdoor celebration combining British BBQ traditions with Tamil flavors and community fun.',
      story: `Our Summer BBQ represents the beautiful fusion of cultures that defines our community in the Midlands. This outdoor celebration perfectly captures the essence of our Tamil-British identity, bringing together the best of both worlds in a relaxed, family-friendly atmosphere.

Set in the scenic grounds of our local park, the Summer BBQ transforms a simple outdoor space into a vibrant community hub. Families arrive with picnic blankets, folding chairs, and excited children ready for a day of fun in the sun. The aroma of grilled food mixed with traditional Tamil spices creates an irresistible invitation to celebration.

What makes our BBQ special is the unique blend of cuisines on offer. Alongside traditional British BBQ favorites, our community volunteers prepare Tamil-style grilled specialties - from spiced chicken tikka to vegetarian delights marinated in aromatic South Indian spices. The fusion of flavors reflects our community's journey and adaptation.

The day is filled with activities for all ages. Children enjoy traditional games like sack races and treasure hunts, while adults engage in friendly cricket matches and volleyball games. Our teenagers organize music sessions, mixing contemporary hits with Tamil classics, creating a soundtrack that resonates with every generation.

One of the most heartwarming aspects of our Summer BBQ is watching new families being welcomed into the fold. The informal setting makes it easy for newcomers to connect with established community members, fostering the inclusive spirit that MTCA is known for.

As the sun sets, families gather around for impromptu music sessions and storytelling, with elders sharing tales of their homeland while children listen with wide-eyed wonder. These moments of connection across generations make our Summer BBQ more than just a social event - it's a celebration of our shared journey and collective future.`,
      date: 'July 2023',
      photos: [
        {
          url: 'https://images.unsplash.com/photo-1544531586-fde5298cdd40?w=800&h=600&fit=crop',
          caption: 'Families enjoying outdoor BBQ in the park setting'
        },
        {
          url: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=800&h=600&fit=crop',
          caption: 'Community volunteers preparing fusion BBQ specialties'
        },
        {
          url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop',
          caption: 'Children participating in traditional outdoor games'
        },
        {
          url: 'https://images.unsplash.com/photo-1523050854058-8df90110c9d1?w=800&h=600&fit=crop',
          caption: 'Adults engaging in friendly cricket matches'
        },
        {
          url: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop',
          caption: 'Multi-generational music sessions and storytelling'
        },
        {
          url: 'https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=800&h=600&fit=crop',
          caption: 'New families being welcomed into the community'
        }
      ]
    },
    {
      id: 'yearend',
      title: 'Year End Gathering',
      icon: <Gift className="h-6 w-6" />,
      description: 'A reflective celebration marking achievements and looking forward to new beginnings with gratitude and hope.',
      story: `Our Year End Gathering is a bittersweet celebration that perfectly captures the essence of reflection, gratitude, and hope. As the academic year draws to a close, our community comes together to celebrate achievements, acknowledge growth, and prepare for new beginnings with hearts full of appreciation.

The event begins with a moment of quiet reflection, as community members share their personal highlights from the year. Students proudly present their academic achievements, from improved Tamil language skills to successful external exam results. Teachers share heartwarming stories of student progress, while parents express gratitude for the supportive community that has nurtured their children's growth.

The highlight of the evening is our graduation ceremony, where students who have completed their courses receive certificates and recognition. The pride on both students' and parents' faces is unmistakable as they realize how far they've come in their Tamil language journey and cultural understanding.

Our Year End Gathering also serves as a platform to recognize the unsung heroes of our community - the volunteers who dedicate countless hours to make MTCA a thriving institution. From teachers who stay late to help struggling students to committee members who organize events, every contribution is acknowledged and celebrated.

The evening features a special presentation showcasing the year's journey through photographs and videos. Watching our community's story unfold throughout the year brings both laughter and tears, reminding everyone of the bonds we've built and the memories we've created together.

As the formal proceedings conclude, families gather for a traditional feast, sharing homemade delicacies and engaging in heartfelt conversations about hopes and dreams for the coming year. The atmosphere is one of contentment and anticipation - grateful for the journey completed and excited for the adventures ahead.

The Year End Gathering embodies the cyclical nature of community life, marking endings that are also beginnings, celebrating achievements while acknowledging the continuous journey of learning and growth that defines the MTCA spirit.`,
      date: 'December 2023',
      photos: [
        {
          url: 'https://images.unsplash.com/photo-1523050854058-8df90110c9d1?w=800&h=600&fit=crop',
          caption: 'Graduation ceremony with proud students and families'
        },
        {
          url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop',
          caption: 'Students presenting their academic achievements'
        },
        {
          url: 'https://images.unsplash.com/photo-1544531586-fde5298cdd40?w=800&h=600&fit=crop',
          caption: 'Community volunteers being recognized for their service'
        },
        {
          url: 'https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=800&h=600&fit=crop',
          caption: 'Cultural performances celebrating the year\'s journey'
        },
        {
          url: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=800&h=600&fit=crop',
          caption: 'Families sharing traditional feast and conversations'
        },
        {
          url: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop',
          caption: 'Moments of reflection and gratitude among community members'
        }
      ]
    }
  ];

  const currentEvent = mtcaEvents.find(event => event.id === activeEvent);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-red-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Events & Gallery</h1>
          <p className="text-xl text-red-100 max-w-3xl">
            Discover our vibrant community events and explore memories from our cultural celebrations
          </p>
        </div>
      </div>

      {/* Event Navigation */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex space-x-1 overflow-x-auto">
            {mtcaEvents.map((event) => (
              <button
                key={event.id}
                onClick={() => setActiveEvent(event.id)}
                className={`py-4 px-4 border-b-2 font-medium text-sm whitespace-nowrap flex items-center space-x-2 ${
                  activeEvent === event.id
                    ? 'border-red-600 text-red-600 bg-red-50'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                {event.icon}
                <span>{event.title}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Event Content */}
      {currentEvent && (
        <div className="max-w-7xl mx-auto px-4 py-16">
          {/* Event Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-4">
              <div className="text-red-600">
                {currentEvent.icon}
              </div>
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">{currentEvent.title}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-4">{currentEvent.description}</p>
            <div className="flex items-center justify-center text-gray-500">
              <Calendar className="h-5 w-5 mr-2" />
              <span>{currentEvent.date}</span>
            </div>
          </div>

          {/* Event Story */}
          <div className="bg-white rounded-lg shadow-sm p-8 mb-12 border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Story</h3>
            <div className="prose prose-lg max-w-none text-gray-700">
              {currentEvent.story.split('\n\n').map((paragraph, index) => (
                <p key={index} className="mb-6 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          {/* Photo Gallery */}
          <div className="bg-white rounded-lg shadow-sm p-8 border border-gray-200">
            <div className="flex items-center mb-8">
              <Camera className="h-6 w-6 text-red-600 mr-3" />
              <h3 className="text-2xl font-bold text-gray-900">Photo Gallery</h3>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {currentEvent.photos.map((photo, index) => (
                <div key={index} className="group">
                  <div className="relative overflow-hidden rounded-lg shadow-md">
                    <img
                      src={photo.url}
                      alt={photo.caption}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-opacity duration-300 flex items-center justify-center">
                      <Camera className="h-8 w-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                  </div>
                  <p className="mt-3 text-sm text-gray-600 leading-relaxed">{photo.caption}</p>
                </div>
              ))}
            </div>

            {/* Photo Upload Note */}
            <div className="mt-8 p-6 bg-blue-50 rounded-lg border border-blue-200">
              <div className="flex items-start">
                <Camera className="h-6 w-6 text-blue-600 mr-3 mt-1" />
                <div>
                  <h4 className="text-lg font-semibold text-blue-800 mb-2">Photo Submission Guidelines</h4>
                  <p className="text-blue-700 mb-3">
                    We welcome community members to share their photos from our events! Please note:
                  </p>
                  <ul className="text-blue-700 space-y-1 text-sm">
                    <li>• All photos must be edited and high-quality before submission</li>
                    <li>• Each photo should include a short story or caption describing the moment</li>
                    <li>• Photos will be reviewed by our team before being added to the gallery</li>
                    <li>• Please ensure you have permission from people featured in the photos</li>
                  </ul>
                  <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition text-sm">
                    Submit Your Photos
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="bg-red-600 py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Join Our Next Event</h2>
          <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
            Be part of our vibrant Tamil community and create lasting memories
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-red-600 px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-100 transition">
              View Upcoming Events
            </button>
            <button className="bg-red-700 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-red-800 transition">
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default EventsGallery;
