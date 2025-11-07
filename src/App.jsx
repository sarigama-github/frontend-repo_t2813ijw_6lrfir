import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Menu from "./components/Menu";
import Visit from "./components/Visit";

function App() {
  return (
    <div className="min-h-screen bg-stone-100 text-stone-900">
      <Navbar />
      <Hero />
      <Menu />
      <Visit />

      <footer className="bg-stone-900 text-stone-300">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm">© {new Date().getFullYear()} Ground & Grove. All rights reserved.</p>
          <p className="text-sm text-stone-400">Brewed with care using earthy palettes and warm textures.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
