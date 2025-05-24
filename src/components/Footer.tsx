
import React from 'react';
import { Mail, Linkedin, FileText } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div>
            <h3 className="font-playfair text-xl font-bold mb-4">Get In Touch</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Mail size={18} className="text-primary-light" />
                <span>danasayegh49@gmail.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Linkedin size={18} className="text-primary-light" />
                <a href="https://www.linkedin.com/in/dana-sayegh/" className="hover:text-primary-light transition-colors">
                  LinkedIn Profile
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-playfair text-xl font-bold mb-4">Quick Access</h3>
            <div className="space-y-2">
              <a href="#job-documents" className="block hover:text-primary-light transition-colors">
                Job Documents
              </a>
              <a href="#reflection" className="block hover:text-primary-light transition-colors">
                Reflection
              </a>
              <a href="#wrn-assignments" className="block hover:text-primary-light transition-colors">
                WRN Assignments
              </a>
              <a href="#additional" className="block hover:text-primary-light transition-colors">
                Additional Materials
              </a>
            </div>
          </div>

          {/* Call to Action */}
          <div>
            <h3 className="font-playfair text-xl font-bold mb-4">Let's Connect</h3>
            <p className="text-gray-300 mb-4 text-sm">
              Ready to contribute to your team's success. Let's discuss how my skills and experience can benefit your organization.
            </p>
            <div className="flex gap-3">
              <a 
                href="mailto:danasayegh49@gmail.com" 
                className="bg-primary hover:bg-primary-dark px-4 py-2 rounded transition-colors text-sm flex items-center gap-2"
              >
                <Mail size={16} />
                Contact Me
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; 2025 Dana El Sayegh. Professional Digital Portfolio.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
