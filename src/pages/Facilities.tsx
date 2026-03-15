import { Layout } from "@/components/layout/Layout";
import { FadeIn } from "@/components/animations/FadeIn";
import { MonitorPlay, Microscope, Library as LibIcon, Bus, Dribbble, Monitor } from "lucide-react";

export default function Facilities() {
  const facilities = [
    {
      title: "Smart Classrooms",
      description: "Interactive digital boards and multimedia learning tools to make education engaging and visually stimulating for modern learners.",
      icon: <MonitorPlay className="h-10 w-10 text-white" />,
      color: "bg-blue-600"
    },
    {
      title: "Computer Lab",
      description: "Well-equipped lab with modern computers and internet access to ensure students are tech-savvy from an early age.",
      icon: <Monitor className="h-10 w-10 text-white" />,
      color: "bg-indigo-600"
    },
    {
      title: "Science Lab",
      description: "Fully functional laboratory for Physics, Chemistry, and Biology practicals to foster a hands-on scientific temper.",
      icon: <Microscope className="h-10 w-10 text-white" />,
      color: "bg-emerald-600"
    },
    {
      title: "Library",
      description: "A vast collection of books, encyclopedias, reference materials, and magazines to cultivate a lifelong love for reading.",
      icon: <LibIcon className="h-10 w-10 text-white" />,
      color: "bg-amber-600"
    },
    {
      title: "Playground & Sports",
      description: "Spacious outdoor area for physical education, morning assembly, and various sports activities to ensure physical fitness.",
      icon: <Dribbble className="h-10 w-10 text-white" />,
      color: "bg-rose-600"
    },
    {
      title: "Transport Facility",
      description: "Safe and secure school buses equipped with GPS tracking, serving Motahaldu and surrounding areas.",
      icon: <Bus className="h-10 w-10 text-white" />,
      color: "bg-yellow-500"
    }
  ];

  return (
    <Layout>
      <div className="bg-primary pt-24 pb-16 relative overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <FadeIn>
            <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-4">Facilities</h1>
            <p className="text-secondary font-medium text-lg">Infrastructure for Holistic Growth</p>
          </FadeIn>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        
        <FadeIn>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-lg text-muted-foreground">
              At Pace Higher Secondary School, we provide state-of-the-art infrastructure designed to support our academic curriculum and ensure a safe, comfortable environment for all students.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {facilities.map((fac, idx) => (
            <FadeIn key={idx} delay={idx * 0.1}>
              <div className="bg-white rounded-3xl p-8 border border-border shadow-sm hover:shadow-xl transition-all duration-300 group h-full flex flex-col">
                <div className={`h-20 w-20 rounded-2xl ${fac.color} flex items-center justify-center mb-6 shadow-md transform group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300`}>
                  {fac.icon}
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">{fac.title}</h3>
                <p className="text-muted-foreground leading-relaxed flex-grow">
                  {fac.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>

      </div>
    </Layout>
  );
}
