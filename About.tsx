import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Code, Palette, Database, Zap } from 'lucide-react';

export function About() {
  const highlights = [
    {
      icon: <Code className="h-6 w-6" />,
      title: "Clinical Procedures",
      description: "Proficient in cannulation, suturing, nail removal, wound debridement, and fluid line setup"
    },
    {
      icon: <Palette className="h-6 w-6" />,
      title: "Medical Imaging",
      description: "Skilled in X-ray interpretation, ECG analysis, and CT scan identification"
    },
    {
      icon: <Database className="h-6 w-6" />,
      title: "Leadership & Management",
      description: "Experienced in leading teams, organizing events, and managing student affairs"
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Sports & Teamwork",
      description: "Cricket team captain with active participation in volleyball and basketball"
    }
  ];

  const values = [
    "Patient Care",
    "Medical Excellence",
    "Leadership",
    "Team Collaboration",
    "Hard Work",
    "Event Organization"
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            About Me
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I am a dedicated medical professional with comprehensive clinical expertise and exceptional patient communication skills. 
            My medical journey encompasses rigorous academic training, extensive practical experience, and demonstrated leadership capabilities 
            in both academic and clinical settings.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-foreground">My Journey</h3>
              <p className="text-muted-foreground">
                I completed my medical education at Malankara Orthodox Syrian Church Medical College, 
                Kolenchery, where I developed comprehensive clinical skills and leadership abilities. 
                My senior faculty have recognized my sincere approach to patient care and exceptional 
                communication skills with patients, which I consider one of my greatest professional strengths. 
                I have gained valuable surgical experience, including performing an infected sebaceous cyst 
                removal surgery where my unit chief assisted me.
              </p>
              <p className="text-muted-foreground">
                During my house surgical period, I gained extensive practical experience working at General 
                Hospital Muvattupuzha for 3 months, where I honed my clinical skills in a real-world hospital 
                environment. My medical training encompasses advanced procedures like ICU monitoring, intubation, 
                RT insertions, catheterization, ABG analysis, and obstetric deliveries. I have performed 
                independent vaginal deliveries and assisted in numerous LSCS procedures.
              </p>
              <p className="text-muted-foreground">
                My leadership journey began at Kendriya Vidyalaya No.1 Naval Base, where I served as House Captain 
                and CCA Captain in 10th grade. In medical college, I was Cricket Team Captain and served as Union 
                General Secretary (2022-23), the highest student position. Beyond clinical practice, I conduct 
                seminars and awareness classes for the general public and am committed to organizing medical camps 
                in peripheral areas. I am completely available for my patients and dedicated to providing 
                comprehensive healthcare services.
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-foreground">What I Value</h4>
              <div className="flex flex-wrap gap-2">
                {values.map((value, index) => (
                  <Badge key={index} variant="secondary">
                    {value}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {highlights.map((highlight, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardHeader className="pb-3">
                  <div className="flex items-center space-x-2">
                    <div className="text-primary">{highlight.icon}</div>
                    <CardTitle className="text-lg">{highlight.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription>{highlight.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}