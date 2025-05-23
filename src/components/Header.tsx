
import React from 'react';
import { Mail, Phone, MapPin, Linkedin } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-primary to-primary-light text-white py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Profile Image */}
          <div className="flex-shrink-0">
            <div className="w-40 h-40 rounded-full bg-white/20 border-4 border-white overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face" 
                alt="Professional Headshot"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          {/* Name and Contact Info */}
          <div className="flex-1 text-center md:text-left">
            <h1 className="font-playfair text-4xl md:text-5xl font-bold mb-2">
              Dana El Sayegh
            </h1>
            <p className="text-xl md:text-2xl font-inter font-light mb-4 text-blue-100">
              [Your Program of Study]
            </p>
            
            {/* Contact Information */}
            <div className="flex flex-wrap justify-center md:justify-start gap-6 text-sm">
              <div className="flex items-center gap-2">
                <Mail size={16} />
                <span>[your.professional@email.com]</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={16} />
                <span>[Your Phone Number]</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={16} />
                <span>[City, State/Province]</span>
              </div>
              <div className="flex items-center gap-2">
                <Linkedin size={16} />
                <a href="#" className="hover:text-blue-200 transition-colors">
                  LinkedIn Profile
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
