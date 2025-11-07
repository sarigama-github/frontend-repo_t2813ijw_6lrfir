import { Coffee, MapPin, Phone } from "lucide-react";

export default function Navbar() {
  return (
    <header className="w-full sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-stone-900/60 bg-stone-900/80 text-stone-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="h-16 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-amber-700/90 shadow ring-1 ring-amber-900/30">
              <Coffee className="h-5 w-5 text-amber-100" />
            </span>
            <span className="font-semibold tracking-wide text-amber-100">Ground & Grove</span>
          </a>
          <nav className="hidden md:flex items-center gap-8 text-stone-200">
            <a href="#menu" className="hover:text-amber-200 transition-colors">Menu</a>
            <a href="#story" className="hover:text-amber-200 transition-colors">Our Story</a>
            <a href="#visit" className="hover:text-amber-200 transition-colors">Visit</a>
          </nav>
          <div className="flex items-center gap-3">
            <a href="tel:+1234567890" className="hidden sm:inline-flex items-center gap-2 rounded-md bg-amber-700/90 px-3 py-2 text-sm font-medium text-amber-50 shadow hover:bg-amber-700 transition-colors">
              <Phone className="h-4 w-4" />
              Call Ahead
            </a>
            <a href="#visit" className="inline-flex items-center gap-2 rounded-md border border-amber-800/40 px-3 py-2 text-sm font-medium text-amber-100 hover:bg-amber-800/30 transition-colors">
              <MapPin className="h-4 w-4" />
              Find Us
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
