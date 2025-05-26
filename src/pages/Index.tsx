
import React from 'react';
import Header from '@/components/Header';
import Navigation from '@/components/Navigation';
import JobDocuments from '@/components/JobDocuments';
import ReflectionSection from '@/components/ReflectionSection';
import WRNAssignments from '@/components/WRNAssignments';
import AdditionalMaterials from '@/components/AdditionalMaterials';
import Footer from '@/components/Footer';
import AboutMe from '@/components/AboutMe';

const Index = () => {
  return (
    <div className="min-h-screen font-inter">
      <Header />
      <Navigation />
      
      <main className="animate-fade-in">
        <AboutMe/>
        <ReflectionSection />
        <WRNAssignments />
        <JobDocuments />
        <AdditionalMaterials />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
