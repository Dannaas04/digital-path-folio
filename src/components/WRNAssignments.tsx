
import React from 'react';
import { Diamond, Eye, Video, Users } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const WRNAssignments = () => {
const assignments = [
  {
    title: 'Learning Style Visualization',
    description: 'Visual representation of personal learning preferences and strategies',
    icon: Eye,
    type: 'Graphic',
    platform: 'Canva',
    completed: '2024-01-12',
    url: '/Learning-Style.png'
  },
  {
    title: 'Communication Comic Strips',
    description: 'Two scenarios demonstrating effective vs. ineffective workplace communication',
    icon: Users,
    type: 'Comic',
    platform: 'Pixton',
    completed: '2024-01-15',
    url: '/Communication-Comic-Strips.pdf'
  },
  {
    title: 'Community Mapping',
    description: 'Demonstration of potential workplaces near me',
    icon: Video,
    type: 'Photo',
    platform: 'Powtoon',
    completed: '2024-01-18',
    url: '/Community-Mapping.png'
  },
  {
    title: 'Digital Calendar & Task Tracking',
    description: 'Efficient time management system using digital tools',
    icon: Video,
    type: 'Plan',
    platform: 'Google Calendar / Trello',
    completed: '2024-01-26',
    url: '/Digital-Calendar-Task-Tracking.pdf'
  },
  {
    title: 'Leadership Graphic',
    description: 'Visual summary of personal leadership style and influence',
    icon: Diamond,
    type: 'Graphic',
    completed: '2024-01-28',
    url: '/Consulting.png'
  }
];

  return (
    <section id="wrn-assignments" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            WRN Virtual Assignments
          </h2>
          <p className="text-lg text-secondary max-w-2xl mx-auto">
            Creative projects demonstrating professional skills and workplace readiness
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {assignments.map((assignment, index) => {
            const Icon = assignment.icon;
            return (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Icon className="text-primary" size={24} />
                    </div>
                    <div>
                      <h3 className="text-lg">{assignment.title}</h3>
                      <div className="flex gap-2 text-sm text-secondary">
                        <span>{assignment.type}</span>
                        {assignment.platform && (
                          <>
                            <span>•</span>
                            <span>{assignment.platform}</span>
                          </>
                        )}
                      </div>
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-secondary mb-4">{assignment.description}</p>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-sm text-gray-500">
                      Completed: {assignment.completed}
                    </span>
                  </div>
                  <Button asChild className="w-full">
                    <a href={assignment.url} target="_blank" rel="noopener noreferrer">
                      <Eye size={16} className="mr-2" />
                      View Assignment
                    </a>
                  </Button>

                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Skills Diamond Highlight */}
<Card className="bg-gradient-to-r from-primary/5 to-primary-light/5 border-primary/20">
  <CardHeader>
    <CardTitle className="flex items-center gap-3 text-center justify-center">
      <Diamond className="text-primary" size={32} />
      <span className="text-2xl">Skills Diamond Assessment</span>
    </CardTitle>
  </CardHeader>
  <CardContent className="text-center">
    <p className="text-secondary mb-6 text-lg">
      Core strengths identified
    </p>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-6">
      {[
        { skill: 'Competitive', percent: 92 },
        { skill: 'Growth', percent: 89 },
        { skill: 'Innovation', percent: 88 },        
        { skill: 'Work Ethic', percent: 90 },
        { skill: 'Time Optimizer', percent: 87 },
        
      ].map(({ skill, percent }, index) => (
        <div key={index} className="bg-white p-4 rounded-lg shadow-sm">
          <div className="w-16 h-16 bg-primary/10 rounded-full mx-auto mb-2 flex items-center justify-center">
            <Diamond className="text-primary" size={24} />
          </div>
          <h4 className="font-semibold text-gray-900">{skill}</h4>
          <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
            <div 
              className="bg-primary h-2 rounded-full transition-all duration-300 ease-in-out" 
              style={{ width: `${percent}%` }}
            ></div>
          </div>
        </div>
      ))}
    </div>
    <Button asChild size="lg" className="px-8">
      <a href="/YouRock.pdf" target="_blank" rel="noopener noreferrer">
        View Complete Assessment
      </a>
    </Button>
  </CardContent>
</Card>

      </div>
    </section>
  );
};

export default WRNAssignments;
