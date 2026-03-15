import { Layout } from "@/components/layout/Layout";
import { FadeIn } from "@/components/animations/FadeIn";
import { Button } from "@/components/ui/button";
import { FileText, CheckCircle2, AlertCircle, ExternalLink } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function Admissions() {
  const ADMISSION_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSfXe1zzmGgjPSRjSRmXZ6DTmXyqEpuPJTRhTE6fhc8HubTw-w/viewform?usp=publish-editor";

  return (
    <Layout>
      <div className="bg-primary pt-24 pb-16 relative overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <FadeIn>
            <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-4">Admissions</h1>
            <p className="text-secondary font-medium text-lg">Join the Pace Family</p>
          </FadeIn>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          <div className="lg:col-span-8 space-y-12">
            <FadeIn>
              <section>
                <h2 className="text-3xl font-display font-bold text-primary mb-6 flex items-center gap-3">
                  <CheckCircle2 className="h-8 w-8 text-secondary" />
                  Eligibility Criteria
                </h2>
                <div className="prose prose-lg text-muted-foreground">
                  <p>
                    Admissions at Pace Higher Secondary School are granted on the basis of merit, previous academic records, and availability of seats. We welcome students from all backgrounds who show a zeal for learning.
                  </p>
                  <ul className="bg-accent/20 p-6 rounded-xl border border-border list-none space-y-3 mt-6">
                    <li className="flex items-start gap-3">
                      <div className="mt-1.5 h-2 w-2 rounded-full bg-primary shrink-0"></div>
                      <span>Minimum <strong>50% marks</strong> required in the previous class final examination for new admissions.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="mt-1.5 h-2 w-2 rounded-full bg-primary shrink-0"></div>
                      <span>Age criteria as per the state government norms for Nursery and Primary sections.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="mt-1.5 h-2 w-2 rounded-full bg-primary shrink-0"></div>
                      <span>Clearance of basic interaction/assessment for middle and secondary sections.</span>
                    </li>
                  </ul>
                </div>
              </section>
            </FadeIn>

            <FadeIn delay={0.2}>
              <section>
                <h2 className="text-3xl font-display font-bold text-primary mb-6 flex items-center gap-3">
                  <FileText className="h-8 w-8 text-secondary" />
                  Required Documents
                </h2>
                <p className="text-muted-foreground mb-6">
                  Please keep the following documents ready (digital copies for online form, physical copies for verification) at the time of admission:
                </p>
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    "Birth Certificate of the student",
                    "Aadhar Card of Student and Parents",
                    "Previous Class Report Card/Marksheet",
                    "Transfer Certificate (TC) from previous school",
                    "4 Passport size photographs of the student",
                    "2 Passport size photographs of parents/guardian",
                    "Caste Certificate (if applicable)",
                    "Medical fitness certificate"
                  ].map((doc, i) => (
                    <Card key={i} className="bg-white border-border/50 shadow-sm hover:border-primary/30 transition-colors">
                      <CardContent className="p-4 flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-green-600 shrink-0" />
                        <span className="text-sm font-medium text-foreground">{doc}</span>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </section>
            </FadeIn>
          </div>

          <div className="lg:col-span-4">
            <FadeIn delay={0.3}>
              <div className="sticky top-32">
                <div className="bg-primary text-white rounded-3xl p-8 shadow-2xl relative overflow-hidden">
                   <img 
                    src={`${import.meta.env.BASE_URL}images/pattern-bg.png`}
                    alt="Pattern" 
                    className="absolute inset-0 w-full h-full object-cover opacity-10 mix-blend-screen"
                  />
                  <div className="relative z-10 text-center">
                    <div className="h-16 w-16 bg-secondary text-primary rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                      <AlertCircle className="h-8 w-8" />
                    </div>
                    <h3 className="text-2xl font-display font-bold mb-4">Admissions Open</h3>
                    <p className="text-primary-foreground/80 mb-8 text-sm leading-relaxed">
                      Secure your child's future today. Fill out our online admission inquiry form and our staff will get back to you shortly.
                    </p>
                    <a href={ADMISSION_FORM_URL} target="_blank" rel="noopener noreferrer" className="block">
                      <Button size="lg" variant="secondary" className="w-full font-bold text-lg h-14 shadow-lg hover:scale-105 hover:bg-white transition-all">
                        Fill Admission Form
                        <ExternalLink className="ml-2 h-5 w-5" />
                      </Button>
                    </a>
                    
                    <div className="mt-8 pt-6 border-t border-white/20">
                      <p className="text-xs text-primary-foreground/70 uppercase tracking-widest font-semibold mb-2">Need Help?</p>
                      <p className="text-lg font-bold text-secondary">+91 9411770468</p>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>

        </div>
      </div>
    </Layout>
  );
}
