export default function Menu() {
  const items = [
    {
      name: "Forest Latte",
      desc: "Espresso, cedar-smoked maple, steamed oat milk",
      price: "$5.50",
    },
    {
      name: "Campfire Mocha",
      desc: "Single-origin dark chocolate, espresso, toasted marshmallow",
      price: "$5.75",
    },
    {
      name: "Wild Honey Cappuccino",
      desc: "Local honey, cinnamon, velvety microfoam",
      price: "$4.95",
    },
    {
      name: "Seasonal Pour-Over",
      desc: "Rotating roaster’s choice, notes of stone fruit and cocoa",
      price: "$4.50",
    },
  ];

  return (
    <section id="menu" className="bg-stone-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-20">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-semibold text-stone-900">Menu Highlights</h2>
          <p className="mt-3 text-stone-600">
            Crafted with sustainably sourced beans and seasonal ingredients.
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {items.map((item) => (
            <div
              key={item.name}
              className="rounded-xl bg-white ring-1 ring-stone-200/80 shadow-sm p-5 hover:shadow-md transition-shadow"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-xl font-medium text-stone-900">{item.name}</h3>
                  <p className="mt-1 text-stone-600">{item.desc}</p>
                </div>
                <span className="shrink-0 rounded-md bg-amber-100 text-amber-800 px-3 py-1 text-sm font-medium">
                  {item.price}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
