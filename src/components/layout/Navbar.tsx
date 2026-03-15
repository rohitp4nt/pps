import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Phone, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Academics", href: "/academics" },
  { name: "Admissions", href: "/admissions" },
  { name: "Faculty", href: "/faculty" },
  { name: "Facilities", href: "/facilities" },
  { name: "Gallery", href: "/gallery" },
];

export function Navbar() {
  const [location] = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex flex-col">
      {/* Top Bar - Contact Info */}
      <div className="hidden md:flex bg-primary text-primary-foreground py-2 px-4 sm:px-6 lg:px-8 text-xs sm:text-sm font-medium justify-between items-center">
        <div className="flex items-center gap-6">
          <a href="mailto:pacepublicschoolntl@gmail.com" className="flex items-center gap-2 hover:text-secondary transition-colors">
            <Mail className="h-4 w-4" />
            pacepublicschoolntl@gmail.com
          </a>
          <div className="flex items-center gap-2">
            <Phone className="h-4 w-4" />
            +91 9411770468, +91 8218683189
          </div>
        </div>
        <div className="flex items-center gap-2">
          <MapPin className="h-4 w-4 text-secondary" />
          Motahaldu, Uttarakhand
        </div>
      </div>

      {/* Main Navigation */}
      <nav
        className={cn(
          "bg-background transition-all duration-300 border-b border-border/50",
          isScrolled ? "shadow-md py-2" : "py-4"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative h-12 w-12 sm:h-16 sm:w-16 overflow-hidden rounded-full border-2 border-secondary shadow-sm group-hover:shadow-md transition-all">
                <img 
                  src={`${import.meta.env.BASE_URL}school-logo.jpeg`} 
                  alt="Pace Higher Secondary School Logo" 
                  className="h-full w-full object-cover"
                  onError={(e) => {
                    // Fallback just in case the image path varies
                    e.currentTarget.src = '/school-logo.jpeg';
                  }}
                />
              </div>
              <div className="flex flex-col">
                <span className="font-display font-bold text-lg sm:text-xl lg:text-2xl text-primary leading-tight">
                  Pace Higher Secondary School  
                </span>
                <span className="text-xs sm:text-sm text-muted-foreground font-medium uppercase tracking-wider">
                  Motahaldu
                </span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-1 xl:gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={cn(
                    "px-3 py-2 rounded-lg text-sm font-semibold transition-all duration-200",
                    location === link.href
                      ? "bg-primary/5 text-primary"
                      : "text-foreground hover:bg-muted hover:text-primary"
                  )}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pl-4 ml-2 border-l border-border">
                <Link href="/admissions">
                  <Button variant="secondary" className="font-bold text-primary px-6 rounded-full shadow-lg shadow-secondary/20 hover:shadow-xl hover:shadow-secondary/30">
                    Apply Now
                  </Button>
                </Link>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 rounded-md text-foreground hover:bg-muted transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Nav */}
      <div
        className={cn(
          "lg:hidden absolute top-full left-0 right-0 bg-background border-b border-border shadow-xl transition-all duration-300 ease-in-out overflow-hidden origin-top",
          mobileMenuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0 pointer-events-none"
        )}
      >
        <div className="px-4 pt-2 pb-6 space-y-1 flex flex-col">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className={cn(
                "block px-4 py-3 rounded-xl text-base font-semibold transition-colors",
                location === link.href
                  ? "bg-primary text-primary-foreground"
                  : "text-foreground hover:bg-muted"
              )}
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-4 mt-2 border-t border-border px-4">
            <Link href="/admissions" onClick={() => setMobileMenuOpen(false)}>
              <Button variant="secondary" className="w-full text-primary font-bold text-lg py-6 rounded-xl">
                Apply for Admission
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
