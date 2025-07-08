import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, Eye } from 'lucide-react';

export function Projects() {
  const projects = [
    {
      title: "College Union Leadership (2022-23)",
      description: "Served as Union General Secretary, the highest student position at Malankara Orthodox Syrian Church Medical College, managing student affairs and organizing college-wide events.",
      image: "/api/placeholder/400/250",
      technologies: ["Leadership", "Event Management", "Administration", "Public Speaking", "Team Coordination"],
      liveUrl: "#",
      githubUrl: "#",
      features: [
        "Successfully managed college union operations for entire student body",
        "Organized multiple cultural programs and academic events",
        "Represented students in administrative meetings and policy decisions",
        "Coordinated between various student committees and college administration",
        "Implemented student welfare initiatives and grievance resolution"
      ]
    },
    {
      title: "Cricket Team Leadership",
      description: "Captained the college cricket team while maintaining academic excellence and participating in multiple sports including volleyball and basketball.",
      image: "/api/placeholder/400/250",
      technologies: ["Team Leadership", "Sports Management", "Strategy", "Physical Fitness", "Teamwork"],
      liveUrl: "#",
      githubUrl: "#",
      features: [
        "Led cricket team in inter-college tournaments and competitions",
        "Developed team strategies and training schedules",
        "Balanced sports commitments with rigorous medical studies",
        "Mentored junior team members and promoted sportsmanship",
        "Active participation in volleyball and basketball teams"
      ]
    },
    {
      title: "School Leadership at Kendriya Vidyalaya",
      description: "Demonstrated early leadership as House Captain and CCA Captain during 10th grade, organizing school events and managing student activities.",
      image: "/api/placeholder/400/250",
      technologies: ["Student Leadership", "Event Planning", "Communication", "Organization", "Teamwork"],
      liveUrl: "#",
      githubUrl: "#",
      features: [
        "Led house activities and inter-house competitions",
        "Organized co-curricular activities as CCA Captain",
        "Coordinated school events and cultural programs",
        "Managed student participation in various activities",
        "Developed public speaking and organizational skills"
      ]
    },
    {
      title: "Medical Education & Clinical Skills",
      description: "Completed comprehensive medical education with hands-on training in various clinical procedures and diagnostic techniques at a renowned medical college.",
      image: "/api/placeholder/400/250",
      technologies: ["Clinical Medicine", "Patient Care", "Diagnostic Skills", "Medical Procedures", "Healthcare"],
      liveUrl: "#",
      githubUrl: "#",
      features: [
        "Proficient in minor procedures: cannulation, suturing, nail removal",
        "Skilled in wound debridement and fluid line setup",
        "Experienced in medical imaging: X-rays, ECG, CT identification",
        "Strong foundation in patient assessment and care",
        "Commitment to working long hours and maintaining medical standards"
      ]
    }
  ];

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Leadership & Achievements
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Key leadership roles, academic achievements, and professional experiences that showcase my skills and dedication
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden group hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-xl group-hover:text-primary transition-colors">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="mt-2">
                      {project.description}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Key Features:</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    {project.features.slice(0, 3).map((feature, i) => (
                      <li key={i} className="flex items-center">
                        <span className="w-1 h-1 bg-primary rounded-full mr-2"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <Badge key={i} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="flex gap-2 pt-2">
                  <Button size="sm" variant="outline">
                    <Eye className="h-4 w-4 mr-2" />
                    View Details
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}