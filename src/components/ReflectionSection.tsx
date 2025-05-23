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
            Academic & Technical Reflection
          </h2>
          <p className="text-lg text-secondary max-w-2xl mx-auto">
            A personal reflection on academic learning, technical growth, and future goals as a computer science student
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
                <h4 className="font-semibold text-gray-900 mb-2">Technical Growth</h4>
                <p className="text-secondary">
                  Through coursework and personal projects, I gained hands-on experience with Python, data structures, and web development, which helped me better understand how technology solves real-world problems.
                </p>
              </div>
              <div className="bg-accent-blue p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">Collaborative Learning</h4>
                <p className="text-secondary">
                  Working on group assignments and hackathons improved my ability to communicate ideas effectively, manage tasks, and contribute to team-based coding efforts.
                </p>
              </div>
              <div className="bg-accent-blue p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">Career Exploration</h4>
                <p className="text-secondary">
                  Exposure to various domains like AI, cybersecurity, and full-stack development helped me clarify my interests and identify areas I want to specialize in post-graduation.
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
                  src="https://images.unsplash.com/photo-1559027615-3e5f0d6c57da?w=400&h=300&fit=crop" 
                  alt="Student reflection document"
                  className="w-full h-32 object-cover rounded-lg"
                />
                <p className="text-secondary text-sm">
                  A written reflection exploring how academic projects, teamwork, and self-study contributed to my development as a computer science student.
                </p>
                <Button className="w-full">
                  <BookOpen size={16} className="mr-2" />
                  Read Full Report
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Academic Growth Timeline */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="text-primary" size={24} />
              Academic Growth Journey
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {[
                {
                  period: 'Foundation Year',
                  description: 'Introduction to programming fundamentals and basic mathematics for computer science',
                  skills: ['Python Basics', 'Logical Thinking', 'Debugging']
                },
                {
                  period: 'Intermediate Stage',
                  description: 'Application of data structures, algorithms, and software engineering principles',
                  skills: ['Object-Oriented Programming', 'Git Collaboration', 'Algorithmic Problem Solving']
                },
                {
                  period: 'Specialization & Projects',
                  description: 'Exploring AI, databases, and full-stack web development through academic and personal projects',
                  skills: ['React & Node.js', 'SQL & NoSQL', 'Machine Learning']
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
