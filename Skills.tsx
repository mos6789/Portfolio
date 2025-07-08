import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import { 
  Activity, 
  Heart, 
  Stethoscope, 
  Zap, 
  Shield, 
  Users,
  Brain,
  Target,
  Download
} from 'lucide-react';

export function Skills() {
  const skillCategories = [
    {
      title: "Advanced Clinical Procedures",
      icon: <Activity className="h-6 w-6" />,
      gradient: "from-blue-500/20 to-cyan-500/20",
      skills: [
        { name: "ICU Monitoring", level: 88 },
        { name: "Intubation", level: 85 },
        { name: "RT Insertions", level: 87 },
        { name: "Catheterization", level: 90 },
        { name: "ABG Analysis", level: 89 },
        { name: "Central Vessel Blood Withdrawal", level: 86 },
        { name: "Ascitic Tapping", level: 84 },
        { name: "E-FAST", level: 83 }
      ]
    },
    {
      title: "Surgical & Specialized Procedures",
      icon: <Zap className="h-6 w-6" />,
      gradient: "from-green-500/20 to-emerald-500/20",
      skills: [
        { name: "Splint & Cast Application", level: 91 },
        { name: "Assisted Vaginal Deliveries", level: 87 },
        { name: "LSCS Assistance", level: 85 },
        { name: "Independent Vaginal Deliveries", level: 82 },
        { name: "Surgical Procedures (OR)", level: 88 },
        { name: "Minor Procedures", level: 92 },
        { name: "X-ray Interpretation", level: 85 },
        { name: "ECG Analysis", level: 88 }
      ]
    },
    {
      title: "Leadership & Communication",
      icon: <Users className="h-6 w-6" />,
      gradient: "from-purple-500/20 to-pink-500/20",
      skills: [
        { name: "Team Leadership", level: 95 },
        { name: "Event Organization", level: 92 },
        { name: "Public Speaking", level: 90 },
        { name: "Seminars & Awareness Classes", level: 88 },
        { name: "Medical Camp Organization", level: 85 },
        { name: "Crisis Management", level: 85 },
        { name: "Patient Communication", level: 97 }
      ]
    },
    {
      title: "Personal Skills & Interests",
      icon: <Heart className="h-6 w-6" />,
      gradient: "from-orange-500/20 to-red-500/20",
      skills: [
        { name: "Cricket", level: 95 },
        { name: "Volleyball", level: 85 },
        { name: "Basketball", level: 82 },
        { name: "Dancing", level: 75 },
        { name: "Patient Dedication", level: 98 },
        { name: "Time Management", level: 90 }
      ]
    }
  ];

  const technologies = [
    { name: "ICU Monitoring", category: "Advanced Clinical" },
    { name: "Intubation", category: "Advanced Clinical" },
    { name: "RT Insertions", category: "Advanced Clinical" },
    { name: "Catheterization", category: "Advanced Clinical" },
    { name: "ABG Analysis", category: "Advanced Clinical" },
    { name: "Central Vessel Blood Withdrawal", category: "Advanced Clinical" },
    { name: "Ascitic Tapping", category: "Advanced Clinical" },
    { name: "E-FAST", category: "Advanced Clinical" },
    { name: "Splint & Cast Application", category: "Orthopedic" },
    { name: "Assisted Vaginal Deliveries", category: "Obstetrics" },
    { name: "LSCS Assistance", category: "Obstetrics" },
    { name: "Independent Vaginal Deliveries", category: "Obstetrics" },
    { name: "Surgical Procedures", category: "Surgery" },
    { name: "Minor Procedures", category: "Clinical" },
    { name: "X-ray Interpretation", category: "Diagnostic" },
    { name: "ECG Analysis", category: "Diagnostic" },
    { name: "Team Leadership", category: "Management" },
    { name: "Event Planning", category: "Organization" },
    { name: "Public Speaking", category: "Communication" },
    { name: "Seminars & Awareness Classes", category: "Education" },
    { name: "Medical Camp Organization", category: "Community Service" },
    { name: "Cricket", category: "Sports" },
    { name: "Volleyball", category: "Sports" },
    { name: "Basketball", category: "Sports" },
    { name: "Dancing", category: "Arts" },
    { name: "Patient Communication", category: "Professional" },
    { name: "Medical Ethics", category: "Professional" },
    { name: "Patient Dedication", category: "Professional" }
  ];



  return (
    <section id="skills" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Skills & Expertise
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive medical skills, leadership abilities, and professional expertise developed through education and practice
          </p>
        </div>

        {/* Skill Categories with Progress */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <Card key={index} className={`bg-gradient-to-br ${category.gradient} border-0`}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <div className="p-2 bg-primary/10 rounded-lg text-primary">
                    {category.icon}
                  </div>
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Technologies Cloud */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-center mb-8">Technologies I Work With</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {technologies.map((tech, index) => (
              <Badge key={index} variant="outline" className="px-4 py-2 text-sm">
                {tech.name}
              </Badge>
            ))}
          </div>
        </div>

        {/* Download CV Section */}
        <div className="text-center mt-16">
          <div className="bg-muted/50 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-semibold mb-4">Download My CV</h3>
            <p className="text-muted-foreground mb-6">
              Get a comprehensive overview of my medical education, clinical skills, and professional experience
            </p>
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              <Download className="mr-2 h-5 w-5" />
              Download CV (PDF)
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}