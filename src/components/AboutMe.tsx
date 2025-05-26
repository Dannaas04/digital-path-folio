import React from 'react';
import { FileText, Download, Eye } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const documents = [
  {
    title: 'Resume',
    description: 'A comprehensive overview of my academic background, professional experience, and technical skills.',
    type: 'PDF',
    lastUpdated: 'May 2025',
    url: '/path/to/your/resume.pdf', // Replace with actual path
  },
  {
    title: 'Portfolio Showcase',
    description: 'A curated collection of my software engineering projects, highlighting my development process and problem-solving abilities.',
    type: 'Web Link',
    lastUpdated: 'May 2025',
    url: 'https://your-portfolio-link.com', // Replace with actual portfolio link
  },
  {
    title: 'AI Research Interests',
    description: 'An exploration of my specific interests within Artificial Intelligence, including areas like machine learning, neural networks, and natural language processing.',
    type: 'PDF',
    lastUpdated: 'May 2025',
    url: '/path/to/your/ai_interests.pdf', // Replace with actual path
  },
];

const skills = [
  {
    category: 'Software Engineering',
    items: [
      {
        skill: 'Full-Stack Development',
        example: 'Proficient in building robust and scalable web applications using modern frameworks and technologies like React, Node.js, and Python/Django.',
      },
      {
        skill: 'Object-Oriented Programming (OOP)',
        example: 'Strong understanding of OOP principles and design patterns, applied in languages such as Java and Python to create modular and maintainable codebases.',
      },
      {
        skill: 'Version Control Systems',
        example: 'Experienced with Git and GitHub for collaborative development, code management, and branching strategies.',
      },
    ],
  },
  {
    category: 'Artificial Intelligence & Machine Learning',
    items: [
      {
        skill: 'Machine Learning Algorithms',
        example: 'Familiar with supervised and unsupervised learning algorithms, including regression, classification, clustering, and deep learning models.',
      },
      {
        skill: 'Data Analysis & Visualization',
        example: 'Aptitude in utilizing libraries like Pandas, NumPy, and Matplotlib for data manipulation, analysis, and insightful visualization.',
      },
      {
        skill: 'AI Frameworks',
        example: 'Basic experience with popular AI frameworks such as TensorFlow and PyTorch for building and training neural networks.',
      },
    ],
  },
];

const JobDocuments = () => {
  return (
    <section id="job-documents" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            About Me
          </h2>
          <p className="text-lg text-secondary max-w-2xl mx-auto">
            As a dedicated **Computer Science major** with a keen interest in **Software Engineering** and a growing passion for **Artificial Intelligence**, I'm committed to leveraging technology to solve complex problems and create impactful solutions. My journey involves continuous learning and practical application, striving to bridge theoretical knowledge with real-world development.
          </p>
        </div>

        {/* Documents Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {documents.map((doc, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <FileText className="text-primary" size={20} />
                  {doc.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-secondary mb-4">{doc.description}</p>
                <div className="flex justify-between items-center text-sm text-gray-500 mb-4">
                  <span>Type: {doc.type}</span>
                  <span>Updated: {doc.lastUpdated}</span>
                </div>
               <div className="flex gap-2">
                <a
                  href={doc.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1"
                >
                  <Button variant="outline" size="sm" className="w-full">
                    <Eye size={16} className="mr-2" />
                    View
                  </Button>
                </a>
                <a
                  href={doc.url}
                  download
                  className="flex-1"
                >
                  <Button size="sm" className="w-full">
                    <Download size={16} className="mr-2" />
                    Download
                  </Button>
                </a>
              </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Skills Section */}
        <div>
          <h3 className="font-playfair text-2xl font-bold text-gray-900 mb-8 text-center">
            Skills & Competencies
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((category, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-xl text-primary">
                    {category.category}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {category.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="border-l-4 border-primary pl-4">
                      <h4 className="font-semibold text-gray-900 mb-2">{item.skill}</h4>
                      <p className="text-secondary text-sm">{item.example}</p>
                    </div>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default JobDocuments;
