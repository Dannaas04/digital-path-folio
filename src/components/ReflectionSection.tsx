
import React from 'react';
import { BookOpen, Lightbulb, TrendingUp } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const ReflectionSection = () => {
  return (
    <section id="reflection" className="py-16 bg-accent">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Work-Based Learning Reflection
          </h2>
          <p className="text-lg text-secondary max-w-2xl mx-auto">
            A comprehensive reflection on professional development and career growth
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {/* Key Insights */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Lightbulb className="text-primary" size={24} />
                Key Learning Insights
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-accent-blue p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">Skill Development</h4>
                <p className="text-secondary">
                  Through various work experiences, I've developed strong analytical and communication skills, 
                  particularly in translating complex data into actionable business insights.
                </p>
              </div>
              <div className="bg-accent-blue p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">Industry Understanding</h4>
                <p className="text-secondary">
                  My exposure to different workplace environments has given me a comprehensive understanding 
                  of industry standards, professional expectations, and collaborative work dynamics.
                </p>
              </div>
              <div className="bg-accent-blue p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">Career Direction</h4>
                <p className="text-secondary">
                  These experiences have clarified my career aspirations and helped me identify specific 
                  areas where I want to continue growing and contributing professionally.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Reflection Document */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="text-primary" size={24} />
                Full Reflection Report
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <img 
                  src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=300&fit=crop" 
                  alt="Work reflection document"
                  className="w-full h-32 object-cover rounded-lg"
                />
                <p className="text-secondary text-sm">
                  A detailed 2-page self-reflection report examining how work exposure and experiences 
                  have shaped professional development.
                </p>
                <Button className="w-full">
                  <BookOpen size={16} className="mr-2" />
                  Read Full Report
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Professional Growth Timeline */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="text-primary" size={24} />
              Professional Growth Journey
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {[
                {
                  period: 'Early Experience',
                  description: 'Initial exposure to professional environments and basic skill development',
                  skills: ['Time Management', 'Professional Communication', 'Basic Technical Skills']
                },
                {
                  period: 'Skill Building',
                  description: 'Focused development of core competencies and industry-specific knowledge',
                  skills: ['Advanced Technical Skills', 'Project Management', 'Team Collaboration']
                },
                {
                  period: 'Leadership Development',
                  description: 'Taking on increased responsibilities and mentoring opportunities',
                  skills: ['Leadership', 'Strategic Thinking', 'Conflict Resolution']
                }
              ].map((stage, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0 w-4 h-4 bg-primary rounded-full mt-2"></div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900 mb-1">{stage.period}</h4>
                    <p className="text-secondary text-sm mb-2">{stage.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {stage.skills.map((skill, skillIndex) => (
                        <span 
                          key={skillIndex}
                          className="bg-primary/10 text-primary px-2 py-1 rounded-full text-xs"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ReflectionSection;
