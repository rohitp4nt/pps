import { ReactNode } from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { useLocation } from "wouter";
import { useEffect } from "react";

export function Layout({ children }: { children: ReactNode }) {
  const [location] = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="min-h-screen flex flex-col bg-background selection:bg-secondary selection:text-primary font-sans">
      <Navbar />
      {/* 
        Add padding top to account for fixed navbar. 
        Top bar is ~36px, main nav is ~72px, total ~108px. 
      */}
      <main className="flex-grow pt-[108px] sm:pt-[116px]">
        {children}
      </main>
      <Footer />
    </div>
  );
}
