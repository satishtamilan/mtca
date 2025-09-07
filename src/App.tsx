import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useLanguage } from './contexts/LanguageContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Chat from './components/Chat';
import Home from './pages/Home';
import About from './pages/About';
import Mission from './pages/Mission';
import PresidentMessage from './pages/PresidentMessage';
import History from './pages/History';
import Operations from './pages/Operations';
import AdminTeam from './pages/AdminTeam';
import Teachers from './pages/Teachers';
import Courses from './pages/Courses';
import EventsGallery from './pages/EventsGallery';
import Contact from './pages/Contact';
import Enroll from './pages/Enroll';
import Timetable from './pages/Timetable';
import SchoolCalendar from './pages/SchoolCalendar';
import Resources from './pages/Resources';
import Admin from './pages/Admin';

const App: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/mission" element={<Mission />} />
        <Route path="/president-message" element={<PresidentMessage />} />
        <Route path="/history" element={<History />} />
        <Route path="/operations" element={<Operations />} />
        <Route path="/admin-team" element={<AdminTeam />} />
        <Route path="/teachers" element={<Teachers />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/events-gallery" element={<EventsGallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/enroll" element={<Enroll />} />
        <Route path="/timetable" element={<Timetable />} />
        <Route path="/calendar" element={<SchoolCalendar />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Footer />
      <Chat />
    </div>
  );
};

export default App;