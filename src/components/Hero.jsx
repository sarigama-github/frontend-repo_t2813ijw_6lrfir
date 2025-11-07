import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-b from-stone-900 to-stone-800 text-stone-100">
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 h-64 w-[36rem] rounded-full bg-amber-700/10 blur-3xl" />
      </div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-24 sm:py-28 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-amber-300/80">Small-batch • Ethical • Seasonal</p>
            <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight">
              Coffee rooted in earth and ritual
            </h1>
            <p className="mt-6 text-stone-300 text-lg leading-relaxed">
              We roast in-house, source thoughtfully, and brew with intention. Come slow down with us and savor the warmth.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#menu" className="inline-flex items-center gap-2 rounded-md bg-amber-700 px-5 py-3 font-medium text-amber-50 shadow hover:bg-amber-600 transition-colors">
                Explore Menu
                <ArrowRight className="h-4 w-4" />
              </a>
              <a href="#visit" className="inline-flex items-center gap-2 rounded-md border border-amber-800/40 px-5 py-3 font-medium text-amber-100 hover:bg-amber-800/30 transition-colors">
                Plan a Visit
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] rounded-xl overflow-hidden ring-1 ring-stone-700/60 shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?q=80&w=1974&auto=format&fit=crop"
                alt="Pour-over coffee with earthy tones"
                className="h-full w-full object-cover"
                loading="eager"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 hidden sm:block rounded-xl bg-stone-900/60 ring-1 ring-stone-700/60 backdrop-blur px-4 py-3 text-sm text-stone-200 shadow">
              Open daily • 7am — 6pm
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
