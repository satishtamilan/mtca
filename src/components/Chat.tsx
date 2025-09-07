import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Bot, User } from 'lucide-react';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

const Chat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: 'Hello! Welcome to MTCA (Midlands Tamil Cultural Association). How can I help you today?',
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const predefinedResponses: { [key: string]: string } = {
    'hello': 'Hello! Welcome to MTCA. How can I assist you today?',
    'hi': 'Hi there! I\'m here to help you with information about our Tamil cultural programs.',
    'courses': 'We offer comprehensive programs: Tamil Language (Ages 5-16), Bharathanaatiyam (Ages 6+), Sangeetham/Carnatic Music (Ages 7+), Miruthangam (Ages 8+), Veena (Ages 10+), Violin (Ages 8+), and Silambam martial arts (Ages 10+). All classes are on Saturdays with different timings.',
    'classes': 'Our Tamil language classes are held every Saturday. We have different levels based on age and proficiency. Would you like information about enrollment?',
    'enrollment': 'To enroll, you can visit our enrollment page or contact us directly. We accept new students throughout the year. The enrollment fee includes all learning materials.',
    'contact': 'You can reach us at +44 123 456 7890 or email info@midlandstamilculture.org. Our office hours are Monday-Friday 9:00 AM - 5:00 PM.',
    'location': 'We are located in the Midlands area with classes held at our community center in Birmingham and other locations. Please contact us for specific venue details.',
    'events': 'We regularly organize cultural events including Tamil New Year celebrations, language competitions, and cultural workshops. Check our Events & Gallery page for upcoming events.',
    'fees': 'Our course fees are very reasonable and include all learning materials. Please contact us for current fee structure and payment options.',
    'age': 'We welcome students from age 5 to 16 for our regular classes. We also have adult programs and family cultural activities.',
    'schedule': 'Classes are held on Saturdays: Tamil Language Classes (10:00 AM - 12:00 PM) and Cultural Programs (1:00 PM - 3:00 PM).',
    'about': 'MTCA is the Midlands Tamil Cultural Association, dedicated to preserving and promoting Tamil language and culture. We are proud to be the first Tamil language school in our region. Visit our "Who are we" page to learn about our mission, history, and team.',
    'mission': 'Our mission is to preserve, promote, and pass on the rich heritage of Tamil language and culture to future generations in the UK. We aim to be the leading Tamil cultural institution in the Midlands.',
    'history': 'MTCA was founded in 1998 by passionate Tamil families in Birmingham. We became the first officially recognized Tamil language school in the Midlands in 2003 and have been serving the community for over 25 years.',
    'president': 'Our founder and president is Dr. Rajesh Kumar, who has over 25 years of experience in education. He founded MTCA with the vision of creating a home away from home for Tamil families in the Midlands.',
    'teachers': 'We have qualified and experienced teachers who are passionate about Tamil language and culture. All our teachers undergo regular training with the British Tamil Exam Board.',
    'admin': 'Our administrative team includes Dr. Rajesh Kumar (Founder & President), Mrs. Priya Sharma (Vice President), Mr. Suresh Patel (Secretary), and Mrs. Lakshmi Iyer (Treasurer).',
    'operations': 'We operate using British Tamil Exam Board certified curriculum with a four-skill approach: listening, speaking, reading, and writing. Classes run on Saturdays from 9:00 AM - 2:00 PM.',
    'tamil': 'Our Tamil language program follows BTEB curriculum from Nursery to A-Levels. Classes are Saturdays 10:00 AM - 12:00 PM for ages 5-16, covering listening, speaking, reading, and writing skills.',
    'bharatanatyam': 'Bharathanaatiyam is our classical South Indian dance program for ages 6+, held Saturdays 1:00 PM - 2:30 PM. Students learn traditional techniques, mudras, expressions, and storytelling through dance.',
    'sangeetham': 'Sangeetham (Carnatic Music) is our vocal music program for ages 7+, Saturdays 2:30 PM - 4:00 PM. Students learn ragas, talas, traditional compositions, and vocal techniques.',
    'mridangam': 'Miruthangam is our percussion program for ages 8+, Saturdays 11:00 AM - 12:30 PM. Students learn proper strokes, rhythmic patterns, and accompaniment techniques.',
    'veena': 'Veena classes for ages 10+, Saturdays 9:00 AM - 10:30 AM. Students learn finger techniques, string manipulation, raga exploration, and traditional compositions.',
    'violin': 'Carnatic Violin for ages 8+, Saturdays 10:30 AM - 12:00 PM. Students learn Carnatic bowing techniques, gamakas, and raga interpretation.',
    'silambam': 'Silambam is our Tamil martial arts program for ages 10+, Saturdays 4:00 PM - 5:30 PM. Students learn traditional staff techniques, forms, and self-defense.',
    'materials': 'We provide comprehensive educational materials including past papers, reference guides, video libraries, audio resources, and external links for all our courses.',
    'help': 'I can help you with information about our courses (Tamil, Bharathanaatiyam, Sangeetham, Miruthangam, Veena, Violin, Silambam), enrollment, events, contact details, schedules, mission, history, teachers, and educational materials. What would you like to know?'
  };

  const getBotResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();
    
    // Check for exact matches first
    for (const [key, response] of Object.entries(predefinedResponses)) {
      if (lowerMessage.includes(key)) {
        return response;
      }
    }

    // Default response for unrecognized queries
    return 'Thank you for your question! For detailed information, please contact us at +44 123 456 7890 or email info@midlandstamilculture.org. You can also visit our different pages to learn more about our courses, events, and services.';
  };

  const handleSendMessage = async () => {
    if (!inputText.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputText,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputText('');
    setIsTyping(true);

    // Simulate bot typing delay
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: getBotResponse(inputText),
        sender: 'bot',
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000); // Random delay between 1-2 seconds
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const quickQuestions = [
    'Tell me about courses',
    'Our mission and history',
    'Who are our teachers?',
    'How to enroll?',
    'Contact information'
  ];

  const handleQuickQuestion = (question: string) => {
    setInputText(question);
    setTimeout(() => handleSendMessage(), 100);
  };

  return (
    <>
      {/* Chat Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-6 right-6 z-50 p-4 rounded-full shadow-lg transition-all duration-300 ${
          isOpen ? 'bg-red-700' : 'bg-red-600 hover:bg-red-700'
        } text-white`}
      >
        {isOpen ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-40 w-96 h-[500px] bg-white rounded-lg shadow-2xl border border-gray-200 flex flex-col">
          {/* Chat Header */}
          <div className="bg-red-600 text-white p-4 rounded-t-lg">
            <div className="flex items-center space-x-3">
              <Bot className="h-6 w-6" />
              <div>
                <h3 className="font-semibold">MTCA Assistant</h3>
                <p className="text-sm text-red-100">Ask me about our programs!</p>
              </div>
            </div>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-lg ${
                    message.sender === 'user'
                      ? 'bg-red-600 text-white'
                      : 'bg-gray-100 text-gray-800'
                  }`}
                >
                  <div className="flex items-start space-x-2">
                    {message.sender === 'bot' && <Bot className="h-4 w-4 mt-0.5 flex-shrink-0" />}
                    <p className="text-sm">{message.text}</p>
                    {message.sender === 'user' && <User className="h-4 w-4 mt-0.5 flex-shrink-0" />}
                  </div>
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-gray-100 text-gray-800 p-3 rounded-lg">
                  <div className="flex items-center space-x-2">
                    <Bot className="h-4 w-4" />
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Questions */}
          {messages.length === 1 && (
            <div className="px-4 pb-2">
              <p className="text-xs text-gray-500 mb-2">Quick questions:</p>
              <div className="flex flex-wrap gap-1">
                {quickQuestions.map((question, index) => (
                  <button
                    key={index}
                    onClick={() => handleQuickQuestion(question)}
                    className="text-xs bg-gray-100 hover:bg-gray-200 text-gray-700 px-2 py-1 rounded-full transition"
                  >
                    {question}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Input Area */}
          <div className="p-4 border-t border-gray-200">
            <div className="flex space-x-2">
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your message..."
                className="flex-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent"
              />
              <button
                onClick={handleSendMessage}
                disabled={!inputText.trim() || isTyping}
                className="bg-red-600 text-white p-2 rounded-lg hover:bg-red-700 disabled:opacity-50 disabled:cursor-not-allowed transition"
              >
                <Send className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Chat;
