import { Layout } from "@/components/layout/Layout";
import { FadeIn } from "@/components/animations/FadeIn";
import { Quote } from "lucide-react";

export default function About() {
  return (
    <Layout>
      {/* Page Header */}
      <div className="bg-primary pt-24 pb-16 relative overflow-hidden">
         <img 
            src={`${import.meta.env.BASE_URL}images/pattern-bg.png`}
            alt="Pattern" 
            className="absolute inset-0 w-full h-full object-cover opacity-10 mix-blend-screen"
          />
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <FadeIn>
            <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-4">About Us</h1>
            <p className="text-secondary font-medium text-lg">Pace Higher Secondary School</p>
          </FadeIn>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        
        {/* Intro */}
        <FadeIn>
          <div className="max-w-3xl mx-auto text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-6">Our Legacy of Excellence</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Established in 2005 under the visionary guidance of the Pace Education and Welfare Society, Pace Higher Secondary School has been a beacon of quality education in Motahaldu. Affiliated to the Uttarakhand Board of School Education, we strive to create an environment where traditional values meet modern teaching methodologies.
            </p>
          </div>
        </FadeIn>

        {/* Messages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
          
          {/* Principal's Message */}
          <FadeIn direction="right" delay={0.2}>
            <div className="bg-accent/30 rounded-3xl p-8 md:p-10 border border-accent relative h-full">
              <Quote className="absolute top-8 right-8 h-16 w-16 text-primary/10" />
              <div className="flex items-center gap-4 mb-8">
                <img 
                  src={`${import.meta.env.BASE_URL}images/prince.jpeg`} 
                  alt="Principal" 
                  className="h-52 w-52 rounded-full object-cover shadow-lg border-4 border-white"
                />
                <div>
                  <h3 className="text-2xl font-display font-bold text-foreground">Principal's Message</h3>
                  <p className="text-primary font-medium">Mr. Satish Chandra Durgapal</p>
                </div>
              </div>
              <div className="prose prose-lg text-muted-foreground">
                <p className="italic">
                  "Education is not just about academic excellence; it is about building character, instilling values, and preparing students to face the world with confidence. At Pace, we ensure that every child is given individual attention to discover their unique talents."
                </p>
                <p>
                  With over 25 years of experience in education, my vision for Pace has always been to create a safe, nurturing, and stimulating environment. We believe in working hand-in-hand with parents to ensure the holistic development of our students. Our dedicated faculty works tirelessly to make learning an engaging and joyful experience.
                </p>
              </div>
            </div>
          </FadeIn>

          {/* Director's Message */}
          <FadeIn direction="left" delay={0.3}>
            <div className="bg-secondary/10 rounded-3xl p-8 md:p-10 border border-secondary/20 relative h-full">
              <Quote className="absolute top-8 right-8 h-16 w-16 text-secondary/30" />
              <div className="flex items-center gap-4 mb-8">
                <img 
                  src={`${import.meta.env.BASE_URL}images/prince.jpeg`} 
                  alt="Director" 
                  className="h-52 w-52 rounded-full object-cover shadow-lg border-4 border-white"
                />
                <div>
                  <h3 className="text-2xl font-display font-bold text-foreground">Director's Message</h3>
                  <p className="text-primary font-medium">Pace Management</p>
                </div>
              </div>
              <div className="prose prose-lg text-muted-foreground">
                <p className="italic">
                  "Our mission is to empower the youth of Motahaldu and surrounding areas with education that meets global standards while remaining rooted in Indian culture."
                </p>
                <p>
                  The Pace Education and Welfare Society established this institution with a clear mandate: to make quality education accessible. We continuously invest in our infrastructure and teaching methodologies to keep pace with changing times. Our ultimate reward is seeing our alumni succeed in various walks of life, contributing positively to society.
                </p>
              </div>
            </div>
          </FadeIn>

        </div>
      </div>
    </Layout>
  );
}