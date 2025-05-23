
import React from 'react';
import { FileText, Download, Eye } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const JobDocuments = () => {
  const documents = [
    {
      title: 'Professional Development Plan',
      description: 'Comprehensive career goals and development strategy',
      type: 'PDF',
      lastUpdated: '2024-01-15',
      url: '/My Professional Development Plan.pdf'
    },
    {
      title: 'Curriculum Vitae (CV)',
      description: 'Complete academic and professional background',
      type: 'PDF',
      lastUpdated: '2024-01-20',
      url: '/My CV.pdf'
    },

    {
      title: 'Cover Letter Sample',
      description: 'Template cover letter for job applications',
      type: 'PDF',
      lastUpdated: '2024-01-18',
      url: '/Cover-Letter.pdf'
    }
  ];

  const skills = [
  {
    category: 'Technical Skills',
    items: [
      {
        skill: 'Programming Languages',
        example: 'Developed academic and personal projects using Python, Java, and JavaScript'
      },
      {
        skill: 'Web Development',
        example: 'Built responsive websites using React, Tailwind CSS, and Node.js'
      },
      {
        skill: 'Data Structures & Algorithms',
        example: 'Solved 200+ problems on LeetCode and participated in hackathons'
      },
      {
        skill: 'Databases',
        example: 'Designed and queried relational databases using MySQL and PostgreSQL'
      },
      {
        skill: 'Version Control',
        example: 'Collaborated on group projects using Git and GitHub with effective branching workflows'
      }
    ]
  },
  {
    category: 'Soft Skills',
    items: [
      {
        skill: 'Teamwork',
        example: 'Worked on multi-member group projects and contributed to GitHub repositories in real time'
      },
      {
        skill: 'Communication',
        example: 'Presented project demos and technical documentation to peers and instructors'
      },
      {
        skill: 'Problem Solving',
        example: 'Debugged and optimized legacy code for coursework and coding competitions'
      },
      {
        skill: 'Time Management',
        example: 'Balanced 5+ coursework modules while maintaining consistent project development'
      },
      {
        skill: 'Adaptability',
        example: 'Quickly learned new technologies such as Docker and Firebase for final year projects'
      }
    ]
  }
];


  return (
    <section id="job-documents" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Job Seeking Documents
          </h2>
          <p className="text-lg text-secondary max-w-2xl mx-auto">
            Essential documents and skills overview for my career journey
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
