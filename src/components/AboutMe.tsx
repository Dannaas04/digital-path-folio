import React from 'react';
import { FileText, Download, Eye } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';


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
