
import React, { useState } from 'react';
import { File, FileText, User, Award, Briefcase, GraduationCap } from 'lucide-react';

const Navigation = () => {
  const [activeSection, setActiveSection] = useState('job-documents');

  const sections = [
    
    { id: 'job-documents', label: 'About Me', icon: User },
    
    { id: 'reflection', label: 'Reflection', icon: User },
    { id: 'wrn-assignments', label: 'WRN Assignments', icon: GraduationCap },
    { id: 'job-documents', label: 'Job Documents', icon: File },
    { id: 'additional', label: 'Additional Materials', icon: Award },
  ];

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex overflow-x-auto">
          {sections.map((section) => {
            const Icon = section.icon;
            return (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className={`flex items-center gap-2 px-6 py-4 whitespace-nowrap transition-colors border-b-2 ${
                  activeSection === section.id
                    ? 'border-primary text-primary bg-accent-blue'
                    : 'border-transparent text-secondary hover:text-primary hover:bg-accent'
                }`}
              >
                <Icon size={18} />
                <span className="font-medium">{section.label}</span>
              </button>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
