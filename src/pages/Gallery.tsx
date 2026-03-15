import { Layout } from "@/components/layout/Layout";
import { FadeIn } from "@/components/animations/FadeIn";

export default function Gallery() {
  // Using high quality Unsplash images as placeholders for school gallery
  const photos = [
    {
      // school building exterior
      url: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=800",
      alt: "School Campus",
      span: "md:col-span-2 md:row-span-2"
    },
    {
      // students in class
      url: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=800",
      alt: "Classroom Learning",
      span: "md:col-span-1 md:row-span-1"
    },
    {
      // library books
      url: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&q=80&w=800",
      alt: "School Library",
      span: "md:col-span-1 md:row-span-1"
    },
    {
      // science experiment
      url: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80&w=800",
      alt: "Science Lab",
      span: "md:col-span-1 md:row-span-2"
    },
    {
      // sports field
      url: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&q=80&w=800",
      alt: "Sports Activities",
      span: "md:col-span-1 md:row-span-1"
    },
    {
      // graduation/event
      url: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&q=80&w=800",
      alt: "Annual Function",
      span: "md:col-span-1 md:row-span-1"
    }
  ];

  return (
    <Layout>
      <div className="bg-primary pt-24 pb-16 relative overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <FadeIn>
            <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-4">Photo Gallery</h1>
            <p className="text-secondary font-medium text-lg">Glimpses of Life at Pace</p>
          </FadeIn>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        
        <FadeIn>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-muted-foreground">
              A visual journey through our campus, events, academic sessions, and extracurricular activities.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 auto-rows-[250px] gap-4">
          {photos.map((photo, idx) => (
            <FadeIn 
              key={idx} 
              delay={idx * 0.1}
              className={`relative group overflow-hidden rounded-2xl ${photo.span}`}
            >
              <img 
                src={photo.url} 
                alt={photo.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-white font-bold text-xl">{photo.alt}</h3>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

      </div>
    </Layout>
  );
}
