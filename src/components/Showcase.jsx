import { Rocket, Star } from 'lucide-react';

export default function Showcase() {
  const items = [
    {
      icon: Rocket,
      title: 'Real-time Motion',
      text: 'We animate wheel swaps with spring physics and tasteful spin for a premium feel.'
    },
    {
      icon: Star,
      title: 'Crisp Vector Rims',
      text: 'Resolution-independent SVG wheels ensure sharp visuals at any size or zoom.'
    },
    {
      icon: Star,
      title: 'Interactive 3D Hero',
      text: 'Explore the racing-themed Spline scene while you dive into configuration.'
    }
  ];

  return (
    <section id="showcase" className="py-20 bg-neutral-950">
      <div className="max-w-6xl mx-auto px-6">
        <h3 className="text-2xl md:text-3xl font-semibold">A Showcase of Smoothness</h3>
        <p className="text-neutral-300 mt-2 max-w-2xl">From hover micro-interactions to responsive layout, every detail supports a modern automotive feel.</p>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map(({ icon: Icon, title, text }, idx) => (
            <div key={idx} className="rounded-2xl p-6 bg-white/5 ring-1 ring-white/10 hover:bg-white/10 transition">
              <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center mb-4">
                <Icon className="w-5 h-5" />
              </div>
              <div className="font-medium text-lg">{title}</div>
              <div className="text-neutral-300 mt-2 text-sm">{text}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
