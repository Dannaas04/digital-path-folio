
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
                url='/headshot.png' 
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
              Computer Science
            </p>
            
            {/* Contact Information */}
            <div className="flex flex-wrap justify-center md:justify-start gap-6 text-sm">
              <div className="flex items-center gap-2">
                <Mail size={16} />
                <span>danasayegh49@gmail.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={16} />
                <span>71582320</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={16} />
                <span>Beirut - Lebanon</span>
              </div>
              <div className="flex items-center gap-2">
                <Linkedin size={16} />
                <a href="https://www.linkedin.com/in/dana-sayegh/" className="hover:text-blue-200 transition-colors">
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
