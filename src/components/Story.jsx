export default function Story() {
  return (
    <section id="story" className="bg-gradient-to-b from-stone-100 to-stone-200/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-20">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl sm:text-4xl font-semibold text-stone-900">Our Story</h2>
            <p className="mt-4 text-stone-700 leading-relaxed">
              Born from weekend hikes and a love for slow mornings, we built a space that
              honors ritual and the land. We roast in small batches, partner with farms
              practicing regenerative agriculture, and design a menu that shifts with the seasons.
            </p>
            <p className="mt-3 text-stone-700 leading-relaxed">
              Every cup is a conversation with growers, roasters, and guests. We hope it
              tastes like warmth, groundedness, and a little adventure.
            </p>
          </div>
          <div className="order-1 md:order-2">
            <div className="aspect-[4/3] rounded-xl overflow-hidden ring-1 ring-stone-300/70 shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1511920170033-f8396924c348?q=80&w=1974&auto=format&fit=crop"
                alt="Cozy wooden coffee interior"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
