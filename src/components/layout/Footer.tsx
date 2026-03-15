import { Link } from "wouter";
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter, ChevronRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground pt-16 pb-8 border-t-[8px] border-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 bg-white rounded-full p-1 flex items-center justify-center overflow-hidden">
                 <img 
                    src={`${import.meta.env.BASE_URL}school-logo.jpeg`} 
                    alt="Logo" 
                    className="h-full w-full object-contain"
                    onError={(e) => { e.currentTarget.src = '/school-logo.jpeg'; }}
                  />
              </div>
              <div>
                <h3 className="font-display text-xl font-bold text-white">Pace School</h3>
                <p className="text-secondary text-sm font-medium">Motahaldu</p>
              </div>
            </div>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Managed by Pace Education and Welfare Society. Dedicated to nurturing young minds and building a foundation for lifelong learning since 2005.
            </p>
            <div className="flex gap-4">
              <a href="#" className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-xl font-semibold mb-6 text-white border-b-2 border-secondary inline-block pb-1">Quick Links</h4>
            <ul className="space-y-3">
              {['Home', 'About Us', 'Academics', 'Faculty', 'Gallery'].map((item) => (
                <li key={item}>
                  <Link href={item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '-')}`} className="text-primary-foreground/80 hover:text-secondary transition-colors flex items-center gap-2 group">
                    <ChevronRight className="h-4 w-4 text-secondary opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Admissions */}
          <div>
            <h4 className="font-display text-xl font-semibold mb-6 text-white border-b-2 border-secondary inline-block pb-1">Admissions</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/admissions" className="text-primary-foreground/80 hover:text-secondary transition-colors flex items-center gap-2 group">
                  <ChevronRight className="h-4 w-4 text-secondary opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                  Admission Process
                </Link>
              </li>
              <li>
                <Link href="/admissions" className="text-primary-foreground/80 hover:text-secondary transition-colors flex items-center gap-2 group">
                  <ChevronRight className="h-4 w-4 text-secondary opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                  Eligibility Criteria
                </Link>
              </li>
              <li>
                <Link href="/facilities" className="text-primary-foreground/80 hover:text-secondary transition-colors flex items-center gap-2 group">
                  <ChevronRight className="h-4 w-4 text-secondary opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                  School Facilities
                </Link>
              </li>
            </ul>
            <div className="mt-6">
              <Link href="/admissions">
                <button className="bg-secondary text-primary px-6 py-2 rounded-lg font-bold text-sm hover:bg-white transition-colors shadow-lg">
                  Apply Online
                </button>
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-xl font-semibold mb-6 text-white border-b-2 border-secondary inline-block pb-1">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-primary-foreground/80">
                <MapPin className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
                <span className="text-sm">Pace Higher Secondary School<br/>Motahaldu, Uttarakhand<br/>Affiliated to UBSE</span>
              </li>
              <li className="flex items-center gap-3 text-primary-foreground/80">
                <Phone className="h-5 w-5 text-secondary shrink-0" />
                <span className="text-sm">+91 9411770468<br/>+91 8218683189</span>
              </li>
              <li className="flex items-center gap-3 text-primary-foreground/80">
                <Mail className="h-5 w-5 text-secondary shrink-0" />
                <a href="mailto:pacepublicschoolntl@gmail.com" className="text-sm hover:text-secondary transition-colors">
                  pacepublicschoolntl@gmail.com
                </a>
              </li>
            </ul>
          </div>

        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-primary-foreground/60 text-center md:text-left">
            © {new Date().getFullYear()} Pace Higher Secondary School. All rights reserved.
          </p>
          <p className="text-sm text-primary-foreground/60">
            Affiliated to Uttarakhand Board of School Education
          </p>
        </div>
      </div>
    </footer>
  );
}
