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
              I’m a driven <strong>Computer Science major</strong> with hands-on experience in <strong>software engineering</strong> and a fast-growing passion for <strong>AI</strong>. With a strong foundation in problem-solving and a hunger for innovation, I thrive on turning ideas into scalable, real-world solutions. I’m constantly exploring new technologies to stay ahead and contribute meaningfully to the future of tech.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutMe;
