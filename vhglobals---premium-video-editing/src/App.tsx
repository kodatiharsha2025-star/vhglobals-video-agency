import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Workflow from './components/Workflow';
import StyleShowcase from './components/StyleShowcase';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import BookCallModal from './components/BookCallModal';
import GoogleSheetModal from './components/GoogleSheetModal';

export default function App() {
  const [modalState, setModalState] = useState<{
    isOpen: boolean;
    nicheId?: string;
    sourceContext?: string;
  }>({
    isOpen: false,
    nicheId: 'real-estate',
    sourceContext: ''
  });
  const [isSheetModalOpen, setIsSheetModalOpen] = useState(false);

  const handleOpenBookCall = (sourceContext?: string, nicheId?: string) => {
    setModalState({
      isOpen: true,
      nicheId: nicheId || 'real-estate',
      sourceContext: sourceContext || 'VHGLOBALS Strategy Session'
    });
  };

  const handleCloseBookCall = () => {
    setModalState(prev => ({ ...prev, isOpen: false }));
  };

  return (
    <div className="min-h-screen bg-white text-neutral-900 flex flex-col selection:bg-[#2596be] selection:text-white font-sans">
      {/* Navigation Bar */}
      <Navbar onBookCall={handleOpenBookCall} />

      {/* Main Landing Content */}
      <main className="flex-grow">
        {/* Hero Section */}
        <Hero onBookCall={handleOpenBookCall} />

        {/* Services & Capabilities Overview */}
        <Services onBookCall={handleOpenBookCall} />

        {/* Workflow Section */}
        <Workflow onBookCall={handleOpenBookCall} />

        {/* Choose Your Style Section (Clean Vertical & Horizontal portfolio layouts) */}
        <StyleShowcase onBookCall={handleOpenBookCall} />

        {/* Direct Contact & Consultation Section */}
        <ContactSection onBookCall={handleOpenBookCall} />
      </main>

      {/* Footer */}
      <Footer onBookCall={handleOpenBookCall} onOpenSheetModal={() => setIsSheetModalOpen(true)} />

      {/* Interactive Discovery Call Booking Dialog (Connected to Google Sheet) */}
      <BookCallModal
        isOpen={modalState.isOpen}
        onClose={handleCloseBookCall}
        preselectedNiche={modalState.nicheId}
        sourceContext={modalState.sourceContext}
      />

      {/* Google Sheet Live Webhook Configuration & Sync Modal */}
      <GoogleSheetModal
        isOpen={isSheetModalOpen}
        onClose={() => setIsSheetModalOpen(false)}
      />
    </div>
  );
}
