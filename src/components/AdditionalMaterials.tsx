
import React from 'react';
import { Award, FileText, Users, GraduationCap, Briefcase, Star } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const AdditionalMaterials = () => {
  const materials = [
    {
      category: 'Publications & Writing',
      icon: FileText,
      items: [
        'Industry Analysis: "Future Trends in Digital Marketing" - Marketing Today Magazine',
        'Research Paper: "Impact of Remote Work on Team Productivity"',
        'Blog Series: "Professional Development in the Digital Age"'
      ]
    },
    {
      category: 'Work Samples & Projects',
      icon: Briefcase,
      items: [
        'Marketing Campaign Strategy for Local Business (+15% engagement)',
        'Database Optimization Project (reduced query time by 40%)',
        'User Experience Redesign Case Study'
      ]
    },
    {
      category: 'References & Recommendations',
      icon: Users,
      items: [
        'Letter of Recommendation - Dr. Sarah Johnson, Academic Supervisor',
        'Professional Reference - Mark Thompson, Senior Manager',
        'Character Reference - Lisa Chen, Team Lead'
      ]
    }
  ];

  const achievements = [
    {
      type: 'Award',
      title: 'Excellence in Academic Achievement',
      organization: 'University Academic Board',
      year: '2023',
      icon: Award
    },
    {
      type: 'Certification',
      title: 'Google Analytics Certified',
      organization: 'Google',
      year: '2024',
      icon: GraduationCap
    },
    {
      type: 'Recognition',
      title: 'Employee of the Month',
      organization: 'ABC Corporation',
      year: '2023',
      icon: Star
    }
  ];

  const trainings = [
    'Leadership Development Workshop - Harvard Business School Online',
    'Agile Project Management Certification - Scrum Alliance',
    'Digital Marketing Strategy - Coursera',
    'Data Analysis with Python - edX',
    'Professional Communication Skills - LinkedIn Learning'
  ];

  return (
    <section id="additional" className="py-16 bg-accent">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Additional Professional Materials
          </h2>
          <p className="text-lg text-secondary max-w-2xl mx-auto">
            Supporting documents and achievements that demonstrate professional excellence
          </p>
        </div>

        {/* Materials Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {materials.map((material, index) => {
            const Icon = material.icon;
            return (
              <Card key={index} className="h-full">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Icon className="text-primary" size={24} />
                    {material.category}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {material.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="text-secondary text-sm leading-relaxed">
                        • {item}
                      </li>
                    ))}
                  </ul>
                  <Button variant="outline" className="w-full mt-6">
                    View Materials
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Awards and Achievements */}
        <div className="mb-12">
          <h3 className="font-playfair text-2xl font-bold text-gray-900 mb-6 text-center">
            Awards & Certifications
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon;
              return (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <div className="w-16 h-16 bg-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <Icon className="text-primary" size={32} />
                    </div>
                    <span className="inline-block bg-primary/10 text-primary px-2 py-1 rounded-full text-xs mb-2">
                      {achievement.type}
                    </span>
                    <h4 className="font-semibold text-gray-900 mb-2">{achievement.title}</h4>
                    <p className="text-secondary text-sm mb-1">{achievement.organization}</p>
                    <p className="text-gray-500 text-xs">{achievement.year}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Professional Development */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-center justify-center">
              <GraduationCap className="text-primary" size={24} />
              Professional Development & Training
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4">
              {trainings.map((training, index) => (
                <div key={index} className="flex items-start gap-3 p-3 bg-accent-blue rounded-lg">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-secondary text-sm">{training}</p>
                </div>
              ))}
            </div>
            <div className="text-center mt-6">
              <Button>
                View All Certificates
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default AdditionalMaterials;
