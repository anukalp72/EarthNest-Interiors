import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutUs } from './components/AboutUs';
import { ServicesSection } from './components/ServicesSection';
import { ProjectsPortfolio } from './components/ProjectsPortfolio';
import { PackagesSection } from './components/PackagesSection';
import { DesignProcess } from './components/DesignProcess';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FaqSection } from './components/FaqSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ConsultationModal } from './components/ConsultationModal';

export default function App() {
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [consultationTopic, setConsultationTopic] = useState<string | undefined>(undefined);

  const handleOpenConsultation = (topic?: string) => {
    setConsultationTopic(topic);
    setIsConsultationOpen(true);
  };

  const handleCloseConsultation = () => {
    setIsConsultationOpen(false);
    setConsultationTopic(undefined);
  };

  return (
    <div className="min-h-screen bg-[#0C0D0C] text-[#E5E1D8] flex flex-col selection:bg-[#2D4F3C] selection:text-[#E5E1D8]">
      {/* Navigation Bar */}
      <Navbar onOpenConsultation={handleOpenConsultation} />

      {/* Main Page Flow */}
      <main className="flex-grow">
        {/* Hero Section */}
        <Hero onOpenConsultation={handleOpenConsultation} />

        {/* About Us Section */}
        <AboutUs />

        {/* Services Section (All 9 services) */}
        <ServicesSection onOpenConsultation={handleOpenConsultation} />

        {/* Our Projects / Portfolio with categories & lightboxes */}
        <ProjectsPortfolio onOpenConsultation={handleOpenConsultation} />

        {/* Packages Section (Essential, Modern Home, Premium, Luxury) & Cost Estimator */}
        <PackagesSection onOpenConsultation={handleOpenConsultation} />

        {/* Design Process & Approach (4-stage workflow) */}
        <DesignProcess />

        {/* Client Testimonials */}
        <TestimonialsSection />

        {/* Frequently Asked Questions */}
        <FaqSection />

        {/* Contact Us, Boring Road Studio Info, Opening Hours, Booking Form */}
        <ContactSection preselectedServiceOrPackage={consultationTopic} />
      </main>

      {/* Footer */}
      <Footer onOpenConsultation={() => handleOpenConsultation()} />

      {/* Quick Consultation Modal */}
      <ConsultationModal
        isOpen={isConsultationOpen}
        onClose={handleCloseConsultation}
        preselectedTopic={consultationTopic}
      />
    </div>
  );
}
