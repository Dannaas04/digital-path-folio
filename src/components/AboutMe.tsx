
import React from 'react';

const AboutMe = () => {
  return (
    <div>
    <section id="about-me" className="py-16 bg-gradient-to-r from-blue-50 to-indigo-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            About Me
          </h2>
          <p className="text-lg text-secondary max-w-2xl mx-auto">
            As a dedicated <strong>Computer Science major</strong> with a keen interest in <strong>Software Engineering</strong> and a growing passion for <strong>Artificial Intelligence</strong>, I'm committed to leveraging technology to solve complex problems and create impactful solutions. My journey involves continuous learning and practical application, striving to bridge theoretical knowledge with real-world development.
          </p>
        </div>
      </div>
    </section>
    </div>
  );
};

export default AboutMe;
