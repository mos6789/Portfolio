import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Trophy, Users, Heart, Star } from 'lucide-react';

export function Achievements() {
  const achievements = [
    {
      category: "Faculty Recognition",
      icon: <Heart className="h-6 w-6" />,
      items: [
        "Appreciated by senior faculty for sincere approach to patient care",
        "Recognized for exceptional patient communication skills",
        "Commended for dedication to comprehensive healthcare delivery",
        "Acknowledged for professional commitment to patient welfare"
      ]
    },
    {
      category: "Academic Leadership",
      icon: <Users className="h-6 w-6" />,
      items: [
        "Union General Secretary (2022-23) - Highest student leadership position",
        "Cricket Team Captain - Led college team in inter-college tournaments",
        "House Captain - Managed house activities and inter-house competitions",
        "CCA Captain - Coordinated co-curricular activities in 10th grade"
      ]
    },
    {
      category: "Extracurricular Participation",
      icon: <Star className="h-6 w-6" />,
      items: [
        "Active participation in college dancing competitions",
        "Regular participation in volleyball and basketball teams",
        "Conducted seminars and awareness classes for general public",
        "Organized and participated in cultural programs and events"
      ]
    },
    {
      category: "Clinical Excellence",
      icon: <Trophy className="h-6 w-6" />,
      items: [
        "Successfully performed infected sebaceous cyst removal surgery",
        "Completed independent vaginal deliveries with proficiency",
        "Demonstrated expertise in advanced clinical procedures",
        "Committed to organizing medical camps in peripheral areas"
      ]
    }
  ];

  return (
    <section id="achievements" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Recognition & Achievements
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Professional recognition, leadership accomplishments, and active participation in medical and extracurricular activities
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {achievements.map((achievement, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-primary/10 rounded-lg text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                    {achievement.icon}
                  </div>
                  <div>
                    <CardTitle className="text-xl">{achievement.category}</CardTitle>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent>
                <ul className="space-y-3">
                  {achievement.items.map((item, i) => (
                    <li key={i} className="flex items-start space-x-3">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}