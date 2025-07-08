import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Building, Calendar, MapPin } from 'lucide-react';

export function Experience() {
  const experiences = [
    {
      company: "General Hospital Muvattupuzha",
      position: "House Surgeon",
      duration: "2024 (3 months)",
      location: "Muvattupuzha, Kerala",
      description: "Completed comprehensive house surgical period, gaining extensive practical clinical experience in a real hospital environment. Developed advanced clinical skills and patient management expertise.",
      achievements: [
        "Managed diverse surgical cases and emergency procedures",
        "Performed independent clinical assessments and treatment plans",
        "Gained hands-on experience in ICU monitoring and critical care",
        "Developed proficiency in surgical assistance and patient care protocols"
      ],
      technologies: ["Clinical Practice", "Surgical Procedures", "Patient Care", "ICU Monitoring", "Emergency Medicine"]
    },
    {
      company: "Malankara Orthodox Syrian Church Medical College",
      position: "Union General Secretary",
      duration: "2022 - 2023",
      location: "Kolenchery, Kerala",
      description: "Served as the highest-ranking student leader, managing college union affairs and representing student body. Led various initiatives and organized college events while maintaining academic excellence.",
      achievements: [
        "Successfully managed college union operations and student affairs",
        "Organized multiple college events and cultural programs",
        "Represented student body in administrative meetings and decisions",
        "Coordinated between students and college administration"
      ],
      technologies: ["Leadership", "Event Management", "Public Speaking", "Administration", "Team Coordination"]
    },
    {
      company: "Malankara Orthodox Syrian Church Medical College",
      position: "Cricket Team Captain",
      duration: "2020 - 2024",
      location: "Kolenchery, Kerala",
      description: "Led the college cricket team while actively participating in volleyball and basketball teams. Demonstrated strong leadership skills in sports and team management.",
      achievements: [
        "Successfully captained the cricket team in inter-college tournaments",
        "Active participant in volleyball and basketball teams",
        "Balanced sports commitments with medical studies",
        "Fostered team spirit and sportsmanship among team members"
      ],
      technologies: ["Team Leadership", "Sports Management", "Strategic Planning", "Physical Fitness"]
    },
    {
      company: "Kendriya Vidyalaya No.1 Naval Base",
      position: "House Captain & CCA Captain",
      duration: "2018 - 2019",
      location: "Naval Base, Kerala",
      description: "Led house activities and co-curricular programs during 10th grade. Organized events and competitions while maintaining academic performance.",
      achievements: [
        "Successfully managed house activities and inter-house competitions",
        "Coordinated co-curricular activities as CCA Captain",
        "Organized various school events and programs",
        "Demonstrated early leadership qualities in school environment"
      ],
      technologies: ["Student Leadership", "Event Coordination", "Public Relations", "Team Management"]
    }
  ];

  return (
    <section id="experience" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Experience
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My professional journey and the amazing teams I've worked with
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="border-l-4 border-l-primary">
              <CardHeader>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div>
                    <CardTitle className="text-xl">{exp.position}</CardTitle>
                    <CardDescription className="flex items-center gap-2 text-base">
                      <Building className="h-4 w-4" />
                      {exp.company}
                    </CardDescription>
                  </div>
                  <div className="flex flex-col sm:text-right text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {exp.duration}
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      {exp.location}
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">{exp.description}</p>
                
                <div>
                  <h4 className="font-semibold mb-2">Key Achievements:</h4>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i}>{achievement}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, i) => (
                      <Badge key={i} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}