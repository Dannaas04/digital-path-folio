import React from 'react';
import { BookOpen, Lightbulb, TrendingUp } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const ReflectionSection = () => {
  const reflectionReportUrl = '/Student_Reflection_Report.pdf'; // <-- Change this to your actual file path

  return (
    <section id="reflection" className="py-16 bg-accent">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Student Learning Reflection
          </h2>
          <p className="text-lg text-secondary max-w-2xl mx-auto">
            A personal reflection on academic development and technical growth as a computer science student.
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
                  Throughout my coursework and internships, I strengthened my skills in coding, problem-solving, and technical communication.
                </p>
              </div>
              <div className="bg-accent-blue p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">Practical Experience</h4>
                <p className="text-secondary">
                  Applying concepts like data structures, version control, and full-stack development in projects helped bridge theory and practice.
                </p>
              </div>
              <div className="bg-accent-blue p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">Future Focus</h4>
                <p className="text-secondary">
                  These experiences solidified my goal of pursuing software engineering and continuing to improve in cloud computing and AI.
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
                  alt="Reflection report preview"
                  className="w-full h-32 object-cover rounded-lg"
                />
                <p className="text-secondary text-sm">
                  A 2-page reflection discussing my growth, skills learned, and how coursework and experience influenced my academic journey.
                </p>
                <a href={reflectionReportUrl} target="_blank" rel="noopener noreferrer">
                  <Button className="w-full">
                    <BookOpen size={16} className="mr-2" />
                    Read Full Report
                  </Button>
                </a>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Growth Timeline */}
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
                  period: 'Year 1',
                  description: 'Foundations in programming, mathematics, and academic adaptation',
                  skills: ['Python Basics', 'Critical Thinking', 'Study Habits']
                },
                {
                  period: 'Year 2',
                  description: 'Deepened understanding of algorithms, databases, and software design',
                  skills: ['OOP', 'SQL', 'Team Projects']
                },
                {
                  period: 'Year 3',
                  description: 'Internship experience, advanced electives, and career preparation',
                  skills: ['Problem Solving', 'Public Speaking', 'Portfolio Building']
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
