import { Link } from "wouter";
import { ArrowRight, BookOpen, Users, Trophy, GraduationCap, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/animations/FadeIn";
import { Layout } from "@/components/layout/Layout";
import { Card, CardContent } from "@/components/ui/card";

export default function Home() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden">
        {/* Abstract background from requirements */}
        <div className="absolute inset-0 z-0 bg-primary">
          <img 
            src={`${import.meta.env.BASE_URL}images/hero-abstract.png`}
            alt="Hero Background" 
            className="w-full h-full object-cover opacity-30 mix-blend-overlay"
          />
          {/* Gradient overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20">
          <div className="max-w-3xl">
            <FadeIn delay={0.1}>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/20 border border-secondary/50 text-secondary mb-6 backdrop-blur-sm">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-secondary"></span>
                </span>
                <span className="text-sm font-bold tracking-wider uppercase">Admissions Open</span>
              </div>
            </FadeIn>
            
            <FadeIn delay={0.2}>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-display font-extrabold text-white leading-[1.1] mb-6 drop-shadow-lg">
                Excellence in <br/>
                <span className="text-secondary">Education</span> & Character
              </h1>
            </FadeIn>
            
            <FadeIn delay={0.3}>
              <p className="text-lg sm:text-xl text-primary-foreground/90 mb-10 max-w-2xl leading-relaxed">
                Managed by Pace Education and Welfare Society. We are dedicated to nurturing young minds, fostering creativity, and building a strong foundation for a bright future since 2005.
              </p>
            </FadeIn>
            
            <FadeIn delay={0.4} className="flex flex-wrap gap-4">
              <Link href="/admissions">
                <Button size="lg" variant="secondary" className="font-bold border-2 border-secondary group hover:bg-white">
                  Apply Now
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="/about">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                  Explore Our School
                </Button>
              </Link>
            </FadeIn>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent z-10"></div>
      </section>

      {/* Quick Stats Banner */}
      <section className="relative z-20 -mt-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <FadeIn delay={0.5}>
          <div className="bg-white rounded-2xl shadow-xl border border-border/50 p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 divide-y md:divide-y-0 md:divide-x divide-border">
            <div className="flex flex-col items-center text-center px-4 pt-4 md:pt-0">
              <div className="h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center mb-4 text-primary">
                <GraduationCap className="h-7 w-7" />
              </div>
              <h3 className="text-3xl font-display font-bold text-foreground">2005</h3>
              <p className="text-muted-foreground font-medium mt-1">Year Established</p>
            </div>
            
            <div className="flex flex-col items-center text-center px-4 pt-4 md:pt-0">
              <div className="h-14 w-14 rounded-full bg-secondary/20 flex items-center justify-center mb-4 text-primary">
                <BookOpen className="h-7 w-7" />
              </div>
              <h3 className="text-3xl font-display font-bold text-foreground">UBSE</h3>
              <p className="text-muted-foreground font-medium mt-1">Uttarakhand Board</p>
            </div>
            
            <div className="flex flex-col items-center text-center px-4 pt-4 md:pt-0">
              <div className="h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center mb-4 text-primary">
                <Users className="h-7 w-7" />
              </div>
              <h3 className="text-3xl font-display font-bold text-foreground">15+</h3>
              <p className="text-muted-foreground font-medium mt-1">Expert Faculty</p>
            </div>
            
            <div className="flex flex-col items-center text-center px-4 pt-4 md:pt-0">
              <div className="h-14 w-14 rounded-full bg-secondary/20 flex items-center justify-center mb-4 text-primary">
                <MapPin className="h-7 w-7" />
              </div>
              <h3 className="text-2xl font-display font-bold text-foreground">Motahaldu</h3>
              <p className="text-muted-foreground font-medium mt-1">Prime Location</p>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* Welcome Section */}
      <section className="py-20 bg-background overflow-hidden relative">
        <div className="absolute right-0 top-0 w-1/3 h-full bg-accent/30 rounded-l-[100px] -z-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeIn direction="right">
              <div className="relative">
                <div className="absolute inset-0 bg-secondary rounded-2xl transform translate-x-4 translate-y-4"></div>
                {/* student reading book */}
                <img 
                  src="https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&q=80&w=1000" 
                  alt="Students learning" 
                  className="relative z-10 rounded-2xl shadow-xl w-full object-cover aspect-[4/3] border-4 border-white"
                />
                <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-xl shadow-xl z-20 border border-border animate-in slide-in-from-bottom-8 duration-1000">
                  <div className="flex items-center gap-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <Trophy className="h-8 w-8 text-primary" />
                    </div>
                    <div>
                      <p className="font-display font-bold text-xl text-foreground">Top Results</p>
                      <p className="text-sm text-muted-foreground">Consistently since 2005</p>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
            
            <FadeIn direction="left">
              <div className="space-y-6 pl-0 lg:pl-8">
                <h4 className="text-secondary font-bold tracking-wider uppercase text-sm">Welcome to Pace</h4>
                <h2 className="text-4xl md:text-5xl font-display font-bold text-primary leading-tight">
                  Empowering Students to Reach Their Full Potential
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  At Pace Higher Secondary School, we believe in providing holistic education that goes beyond textbooks. Our experienced faculty, modern infrastructure, and engaging curriculum ensure that every child is prepared for the challenges of tomorrow.
                </p>
                <ul className="space-y-4 my-8">
                  {[
                    "Classes from Nursery (NC) to Class X",
                    "Dedicated and experienced teaching staff",
                    "Focus on moral values and character building",
                    "Modern facilities including Smart Classrooms"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="mt-1 bg-secondary/20 rounded-full p-1 text-primary">
                        <ArrowRight className="h-4 w-4" />
                      </div>
                      <span className="text-foreground font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/about">
                  <Button className="mt-4 rounded-full px-8 hover-elevate">
                    Read Our Story
                  </Button>
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Call to action */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary">
           <img 
            src={`${import.meta.env.BASE_URL}images/pattern-bg.png`}
            alt="Pattern" 
            className="w-full h-full object-cover opacity-10 mix-blend-screen"
          />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <FadeIn>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
              Ready to take the next step?
            </h2>
            <p className="text-xl text-primary-foreground/80 mb-10 max-w-2xl mx-auto">
              Join the Pace family and give your child the education they deserve. Admissions for the upcoming academic year are now open.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/admissions">
                <Button size="lg" variant="secondary" className="w-full sm:w-auto font-bold text-lg px-10 h-14 hover:scale-105 transition-transform">
                  Apply Online Now
                </Button>
              </Link>
              <a href="tel:+919411770468">
                <Button size="lg" variant="outline" className="w-full sm:w-auto border-white text-white hover:bg-white hover:text-primary font-bold text-lg px-10 h-14">
                  Call Us
                </Button>
              </a>
            </div>
          </FadeIn>
        </div>
      </section>
    </Layout>
  );
}
