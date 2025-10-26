import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative h-[90vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/8fw9Z-c-rqW3nWBN/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/80" />

      <div className="absolute inset-0 flex items-center justify-center">
        <div className="pointer-events-none text-center px-6">
          <h1 className="text-4xl md:text-6xl font-semibold tracking-tight drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]">Build Your Perfect Stance</h1>
          <p className="mt-4 text-neutral-300 max-w-2xl mx-auto">Interactive wheel selection with smooth, satisfying animations. Explore styles, sizes, and see them mounted instantly.</p>
          <div className="pointer-events-auto mt-8 flex items-center justify-center gap-3">
            <a href="#config" className="rounded-md bg-white text-black px-5 py-3 font-medium hover:bg-neutral-200 transition">Start Configuring</a>
            <a href="#showcase" className="rounded-md bg-neutral-900/60 ring-1 ring-white/10 px-5 py-3 font-medium hover:bg-neutral-800 transition">See Features</a>
          </div>
        </div>
      </div>
    </section>
  );
}
