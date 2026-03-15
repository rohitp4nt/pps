import { Layout } from "@/components/layout/Layout";
import { FadeIn } from "@/components/animations/FadeIn";
import { BookOpen, Target, Lightbulb, Presentation } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Academics() {
  const sections = [
    {
      title: "Pre-Primary (Nursery, LKG, UKG)",
      description: "Focus on play-way methods, sensory development, and basic foundational skills. We ensure a warm, loving environment for smooth transition from home to school.",
      icon: <Lightbulb className="h-8 w-8 text-secondary" />
    },
    {
      title: "Primary (Classes I to V)",
      description: "Building strong fundamentals in Mathematics, Science, and Languages. Encouraging curiosity, reading habits, and basic moral values.",
      icon: <BookOpen className="h-8 w-8 text-secondary" />
    },
    {
      title: "Middle School (Classes VI to VIII)",
      description: "Transitioning to more structured learning. Introduction to varied subjects, computer education, and comprehensive skill development.",
      icon: <Target className="h-8 w-8 text-secondary" />
    },
    {
      title: "Secondary (Classes IX to X)",
      description: "Rigorous academic preparation mapped to UBSE guidelines. Focus on analytical thinking, practical experiments, and board exam readiness.",
      icon: <Presentation className="h-8 w-8 text-secondary" />
    }
  ];

  return (
    <Layout>
      <div className="bg-primary pt-24 pb-16 relative overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <FadeIn>
            <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-4">Academics</h1>
            <p className="text-secondary font-medium text-lg">Curriculum & Methodology</p>
          </FadeIn>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          <div className="lg:col-span-1">
            <FadeIn>
              <div className="sticky top-32">
                <h2 className="text-3xl font-display font-bold text-primary mb-6">Educational Approach</h2>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Pace Higher Secondary School is affiliated to the <strong>Uttarakhand Board of School Education (UBSE)</strong>. We offer classes from Nursery to Class X.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Our curriculum is designed to provide a balanced mix of academic rigor and co-curricular activities, ensuring the holistic development of every student. We employ modern teaching methodologies, integrating technology with traditional chalk-and-talk methods.
                </p>
                
                <div className="mt-8 p-6 bg-accent/50 rounded-2xl border border-accent">
                  <h4 className="font-bold text-foreground mb-3">Key Highlights:</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground font-medium">
                    <li className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-primary"></div>
                      Continuous Comprehensive Evaluation
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-primary"></div>
                      Student-centric learning environment
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-primary"></div>
                      Regular parent-teacher interactions
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-primary"></div>
                      Focus on communicative English
                    </li>
                  </ul>
                </div>
              </div>
            </FadeIn>
          </div>

          <div className="lg:col-span-2">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {sections.map((section, idx) => (
                <FadeIn key={idx} delay={idx * 0.1}>
                  <Card className="h-full border-border/50 hover:border-secondary/50 hover:shadow-lg transition-all duration-300 group hover:-translate-y-1">
                    <CardHeader>
                      <div className="h-14 w-14 rounded-xl bg-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                        {section.icon}
                      </div>
                      <CardTitle className="text-xl">{section.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground leading-relaxed">
                        {section.description}
                      </p>
                    </CardContent>
                  </Card>
                </FadeIn>
              ))}
            </div>
            
            {/* classroom interaction */}
            <FadeIn delay={0.4}>
              <div className="mt-12 rounded-3xl overflow-hidden shadow-xl border border-border">
                <img 
                  src="https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&q=80&w=1000" 
                  alt="Classroom Environment" 
                  className="w-full h-64 object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            </FadeIn>
          </div>

        </div>
      </div>
    </Layout>
  );
}
