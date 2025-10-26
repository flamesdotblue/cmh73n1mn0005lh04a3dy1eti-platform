export default function Footer() {
  return (
    <footer className="py-10 border-t border-white/10 bg-neutral-950">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-neutral-400 text-sm">© {new Date().getFullYear()} WheelLab — Built for silky smooth configuration.</div>
        <div className="text-neutral-500 text-sm">Made with React, Tailwind, Framer Motion, and Spline.</div>
      </div>
    </footer>
  );
}
