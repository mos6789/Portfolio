import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Stethoscope, Zap, Activity, Target } from 'lucide-react';

export function Specialties() {
  const specialties = [
    {
      title: "Internal Medicine",
      icon: <Stethoscope className="h-8 w-8" />,
      description: "Comprehensive adult healthcare with focus on diagnosis, treatment, and prevention of diseases",
      interests: [
        "Cardiovascular Medicine",
        "Endocrinology & Diabetes",
        "Pulmonary Medicine",
        "Nephrology",
        "Gastroenterology",
        "Infectious Diseases"
      ],
      gradient: "from-blue-500/20 to-cyan-500/20"
    },
    {
      title: "Surgical Specialties",
      icon: <Zap className="h-8 w-8" />,
      description: "Advanced surgical techniques and procedures with emphasis on patient safety and optimal outcomes",
      interests: [
        "General Surgery",
        "Laparoscopic Surgery",
        "Emergency Surgery",
        "Surgical Oncology",
        "Trauma Surgery",
        "Minimally Invasive Procedures"
      ],
      gradient: "from-green-500/20 to-emerald-500/20"
    },
    {
      title: "Radiology",
      icon: <Activity className="h-8 w-8" />,
      description: "Medical imaging and diagnostic procedures for accurate diagnosis and treatment planning",
      interests: [
        "Diagnostic Radiology",
        "CT & MRI Imaging",
        "Ultrasound",
        "Interventional Radiology",
        "Nuclear Medicine",
        "Digital Imaging"
      ],
      gradient: "from-purple-500/20 to-pink-500/20"
    }
  ];

  return (
    <section id="specialties" className="py-20">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Medical Specialties & Interests
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Areas of medical practice that align with my clinical interests and career aspirations
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {specialties.map((specialty, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-0 bg-gradient-to-br from-background to-muted/20">
              <CardHeader className="text-center">
                <div className={`mx-auto p-4 rounded-full bg-gradient-to-br ${specialty.gradient} mb-4 group-hover:scale-110 transition-transform`}>
                  <div className="text-primary">
                    {specialty.icon}
                  </div>
                </div>
                <CardTitle className="text-xl">{specialty.title}</CardTitle>
                <CardDescription className="text-center">
                  {specialty.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <div className="space-y-3">
                  <h4 className="font-semibold text-sm uppercase tracking-wide text-muted-foreground">
                    Areas of Interest
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {specialty.interests.map((interest, i) => (
                      <Badge key={i} variant="secondary" className="text-xs">
                        {interest}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Professional Goals Section */}
        <Card className="bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/20">
          <CardHeader className="text-center">
            <div className="mx-auto p-3 rounded-full bg-primary/10 mb-4 w-fit">
              <Target className="h-6 w-6 text-primary" />
            </div>
            <CardTitle className="text-2xl">Professional Goals</CardTitle>
          </CardHeader>
          
          <CardContent className="text-center space-y-4">
            <p className="text-lg text-muted-foreground">
              <strong>Immediate Goal:</strong> Pursuing postgraduation in surgical specialty to develop advanced surgical skills and expertise
            </p>
            <p className="text-muted-foreground">
              Committed to continuous learning and professional development in surgical medicine, with a focus on 
              providing exceptional patient care and contributing to the advancement of surgical practices. 
              Interested in combining clinical excellence with research and teaching opportunities.
            </p>
            <div className="flex flex-wrap justify-center gap-2 mt-6">
              <Badge variant="outline" className="text-sm">Postgraduate Surgery</Badge>
              <Badge variant="outline" className="text-sm">Advanced Training</Badge>
              <Badge variant="outline" className="text-sm">Research Interest</Badge>
              <Badge variant="outline" className="text-sm">Teaching Opportunity</Badge>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}