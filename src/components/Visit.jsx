import { MapPin, Clock } from "lucide-react";

export default function Visit() {
  return (
    <section id="visit" className="bg-stone-900 text-stone-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-20">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <h2 className="text-3xl sm:text-4xl font-semibold">Visit Us</h2>
            <p className="mt-3 text-stone-300">123 Grove Street, Willow Town</p>
            <div className="mt-6 grid sm:grid-cols-2 gap-6">
              <div className="rounded-xl bg-stone-800/60 ring-1 ring-stone-700/60 p-5">
                <div className="flex items-center gap-2 text-amber-200">
                  <Clock className="h-4 w-4" />
                  <span className="font-medium">Hours</span>
                </div>
                <ul className="mt-3 space-y-1 text-stone-300">
                  <li>Mon–Fri: 7:00a – 6:00p</li>
                  <li>Sat–Sun: 8:00a – 6:00p</li>
                </ul>
              </div>
              <div className="rounded-xl bg-stone-800/60 ring-1 ring-stone-700/60 p-5">
                <div className="flex items-center gap-2 text-amber-200">
                  <MapPin className="h-4 w-4" />
                  <span className="font-medium">Directions</span>
                </div>
                <p className="mt-3 text-stone-300">
                  Street parking available. Accessible entrance on 2nd Ave.
                </p>
              </div>
            </div>
          </div>
          <div className="rounded-xl overflow-hidden ring-1 ring-stone-700/60 shadow-xl min-h-[260px] bg-stone-800">
            <iframe
              title="Map"
              src="https://maps.google.com/maps?q=New%20York&t=&z=13&ie=UTF8&iwloc=&output=embed"
              className="w-full h-full min-h-[260px]"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
