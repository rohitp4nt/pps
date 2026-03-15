import { Layout } from "@/components/layout/Layout";
import { FadeIn } from "@/components/animations/FadeIn";
import { Card, CardContent } from "@/components/ui/card";
import { Award, BookOpen, Clock } from "lucide-react";

export default function Faculty() {
  const principal = {
    name: "Mr. Satish Chandra Durgapal",
    role: "Principal",
    qualifications: "B.A., M.A. (English), B.Ed.",
    experience: "25+ years",
    subjects: "Leadership & Administration"
  };

  const teachers = [
    { name: "Ruchika Tiwari", qualifications: "B.A., M.A. (English), B.Ed.", experience: "10 years", subjects: "English" },
    { name: "Pooja Kulyal", qualifications: "B.Sc., M.Sc., B.Ed.", experience: "10 years", subjects: "Science & Mathematics" },
    { name: "Nidhi Mehta", qualifications: "B.Sc., M.Sc., B.Ed.", experience: "5 years", subjects: "Hindi" },
    { name: "Suneeta Sah", qualifications: "B.Sc., M.Sc., B.Ed.", experience: "10 years", subjects: "Social Science" },
    { name: "Neha Upreti", qualifications: "B.Sc., M.Sc., B.Ed.", experience: "4 years", subjects: "Science" },
    { name: "Hemlata Bhandari", qualifications: "B.Sc., M.Sc., B.Ed.", experience: "10 years", subjects: "Social Science" },
    { name: "Pankaj Joshi", qualifications: "B.Sc., M.Sc., B.Ed.", experience: "7 years", subjects: "Hindi & EVS" },
    { name: "Khushal Singh Bisht", qualifications: "B.Sc., M.Sc., B.Ed.", experience: "12 years", subjects: "Mathematics" },
  ];

  return (
    <Layout>
      <div className="bg-primary pt-24 pb-16 relative overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <FadeIn>
            <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-4">Our Faculty</h1>
            <p className="text-secondary font-medium text-lg">Experienced & Dedicated Educators</p>
          </FadeIn>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        
        {/* Principal Section */}
        <FadeIn>
          <div className="mb-20 bg-accent/20 rounded-3xl p-8 border border-border shadow-sm max-w-4xl mx-auto">
            <h2 className="text-2xl font-display font-bold text-center text-primary mb-8 border-b border-border pb-4">Head of Institution</h2>
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="h-32 w-32 shrink-0 bg-primary text-white rounded-full flex items-center justify-center font-display text-4xl shadow-lg border-4 border-white">
                SD
              </div>
              <div className="text-center md:text-left flex-grow">
                <h3 className="text-3xl font-display font-bold text-foreground mb-2">{principal.name}</h3>
                <p className="text-secondary text-lg font-semibold uppercase tracking-wider mb-4">{principal.role}</p>
                <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                  <div className="flex items-center gap-2 text-muted-foreground bg-white px-3 py-1 rounded-full text-sm border shadow-sm">
                    <Award className="h-4 w-4 text-primary" />
                    {principal.qualifications}
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground bg-white px-3 py-1 rounded-full text-sm border shadow-sm">
                    <Clock className="h-4 w-4 text-primary" />
                    {principal.experience}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* Teachers Grid */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-display font-bold text-primary">Teaching Staff</h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Our highly qualified and passionate teachers are the backbone of Pace. They combine strong subject knowledge with innovative teaching methodologies.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {teachers.map((teacher, idx) => (
            <FadeIn key={idx} delay={idx * 0.05}>
              <Card className="h-full hover:shadow-xl transition-all duration-300 border-border/60 hover:border-secondary group overflow-hidden">
                <div className="h-2 bg-secondary w-full transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                <CardContent className="p-6">
                  <div className="h-16 w-16 bg-accent text-primary rounded-full flex items-center justify-center font-display font-bold text-xl mb-6 shadow-inner border border-white">
                    {teacher.name.split(' ').map(n => n[0]).join('').substring(0,2)}
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-4 line-clamp-1" title={teacher.name}>{teacher.name}</h3>
                  
                  <div className="space-y-3">
                    <div className="flex items-start gap-3 text-sm">
                      <BookOpen className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                      <span className="text-muted-foreground font-medium">{teacher.subjects}</span>
                    </div>
                    <div className="flex items-start gap-3 text-sm">
                      <Award className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{teacher.qualifications}</span>
                    </div>
                    <div className="flex items-start gap-3 text-sm">
                      <Clock className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{teacher.experience} Exp.</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </FadeIn>
          ))}
        </div>

      </div>
    </Layout>
  );
}
