import { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

function WheelSVG({ styleId = 'sport', color = '#1f2937', brakeColor = '#ff3b3b' }) {
  const spokePaths = {
    sport: (
      <g>
        <path d="M0 -24 L0 -8" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
        <path d="M0 8 L0 24" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
        <path d="M-24 0 L-8 0" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
        <path d="M8 0 L24 0" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
        <path d="M-17 -17 L-8 -8" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
        <path d="M17 17 L8 8" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
        <path d="M17 -17 L8 -8" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
        <path d="M-17 17 L-8 8" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
      </g>
    ),
    five: (
      <g>
        {Array.from({ length: 5 }).map((_, i) => (
          <path key={i} d="M0 -24 L0 -6" stroke="currentColor" strokeWidth="4" strokeLinecap="round" transform={`rotate(${i * 72})`} />
        ))}
      </g>
    ),
    mesh: (
      <g>
        {Array.from({ length: 10 }).map((_, i) => (
          <path key={i} d="M0 -24 L0 -10" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" transform={`rotate(${i * 36})`} />
        ))}
        <circle r="10" fill="none" stroke="currentColor" strokeWidth="2" />
      </g>
    ),
  };

  return (
    <svg viewBox="-40 -40 80 80" className="w-full h-full">
      <defs>
        <radialGradient id={`rim-${styleId}`} cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#cfcfcf"/>
          <stop offset="60%" stopColor="#9a9a9a"/>
          <stop offset="100%" stopColor="#6b7280"/>
        </radialGradient>
      </defs>
      <circle r="34" fill={`url(#rim-${styleId})`} stroke="#111827" strokeWidth="1" />
      <circle r="26" fill="#111827" />
      <g style={{ color }}>
        {spokePaths[styleId]}
      </g>
      <circle r="6" fill="#c9c9c9" stroke="#0b0b0b" strokeWidth="1" />
      <circle r="20" fill="none" stroke={brakeColor} strokeOpacity="0.15" strokeWidth="6" />
      <circle r="32" fill="none" stroke="#0b0b0b" strokeOpacity="0.6" strokeWidth="2" />
    </svg>
  );
}

function WheelThumb({ id, label, selected, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`group relative rounded-xl p-2 ring-1 transition ${selected ? 'ring-white/70 bg-white/5' : 'ring-white/10 hover:ring-white/30'}`}
      aria-pressed={selected}
    >
      <div className="w-16 h-16">
        <WheelSVG styleId={id} />
      </div>
      <div className="text-xs text-neutral-300 mt-2">{label}</div>
      {selected && <span className="absolute top-2 right-2 inline-block w-2.5 h-2.5 rounded-full bg-emerald-400" />}
    </button>
  );
}

export default function WheelConfigurator() {
  const wheelOptions = [
    { id: 'sport', label: 'Sport Split' },
    { id: 'five', label: 'Five Spoke' },
    { id: 'mesh', label: 'Mesh' },
  ];

  const [wheel, setWheel] = useState('sport');
  const [size, setSize] = useState(18);
  const [color, setColor] = useState('#d1d5db');
  const [accent, setAccent] = useState('#ff3b3b');

  const scale = useMemo(() => 0.85 + (size - 18) * 0.03, [size]);

  const wheelSpinKey = `${wheel}-${size}-${color}-${accent}`;

  return (
    <section id="config" className="relative z-10 -mt-10 md:-mt-16 bg-gradient-to-b from-black to-neutral-950">
      <div className="mx-auto max-w-6xl px-6 py-14 md:py-20">
        <div className="flex flex-col lg:flex-row gap-10">
          <div className="flex-1">
            <h2 className="text-2xl md:text-3xl font-semibold">Select Your Wheels</h2>
            <p className="text-neutral-300 mt-2">Swap between styles, adjust size, and see them mounted instantly with smooth motion.</p>

            <div className="mt-6 flex gap-4 flex-wrap">
              {wheelOptions.map((o) => (
                <WheelThumb key={o.id} id={o.id} label={o.label} selected={o.id === wheel} onClick={() => setWheel(o.id)} />
              ))}
            </div>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="rounded-xl bg-white/5 ring-1 ring-white/10 p-4">
                <label className="block text-sm text-neutral-300">Size: {size}"</label>
                <input type="range" min="17" max="21" value={size} onChange={(e) => setSize(parseInt(e.target.value))} className="w-full accent-white" />
              </div>
              <div className="rounded-xl bg-white/5 ring-1 ring-white/10 p-4">
                <label className="block text-sm text-neutral-300">Rim Color</label>
                <input type="color" value={color} onChange={(e) => setColor(e.target.value)} className="mt-2 h-10 w-full bg-transparent" />
              </div>
              <div className="rounded-xl bg-white/5 ring-1 ring-white/10 p-4">
                <label className="block text-sm text-neutral-300">Brake Accent</label>
                <input type="color" value={accent} onChange={(e) => setAccent(e.target.value)} className="mt-2 h-10 w-full bg-transparent" />
              </div>
            </div>
          </div>

          <div className="flex-1">
            <div className="rounded-2xl overflow-hidden bg-[radial-gradient(75%_60%_at_50%_30%,rgba(255,255,255,0.06),rgba(0,0,0,0)_60%),linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0)_40%)] ring-1 ring-white/10 p-6">
              <div className="relative aspect-[16/9] w-full">
                <motion.div
                  className="absolute inset-0 flex items-end justify-center"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ type: 'spring', stiffness: 120, damping: 16 }}
                >
                  <motion.div
                    className="relative"
                    animate={{ x: [0, 4, 0], rotateZ: [0, -0.2, 0.2, 0] }}
                    transition={{ repeat: Infinity, duration: 6, ease: 'easeInOut' }}
                  >
                    <CarSVG />

                    <div className="absolute left-[16%] bottom-[10%]" style={{ width: `${120 * scale}px`, height: `${120 * scale}px` }}>
                      <AnimatePresence mode="popLayout">
                        <motion.div
                          key={`front-${wheelSpinKey}`}
                          initial={{ rotate: 0, scale: 0.9, opacity: 0 }}
                          animate={{ rotate: 540, scale: 1, opacity: 1 }}
                          exit={{ rotate: -180, scale: 0.9, opacity: 0 }}
                          transition={{ type: 'spring', stiffness: 120, damping: 14 }}
                          className="[filter:drop-shadow(0_8px_20px_rgba(0,0,0,0.6))]"
                        >
                          <motion.div whileHover={{ rotate: 30 }} transition={{ type: 'spring', stiffness: 80, damping: 10 }}>
                            <WheelSVG styleId={wheel} color={color} brakeColor={accent} />
                          </motion.div>
                        </motion.div>
                      </AnimatePresence>
                    </div>

                    <div className="absolute left-[63%] bottom-[10%]" style={{ width: `${120 * scale}px`, height: `${120 * scale}px` }}>
                      <AnimatePresence mode="popLayout">
                        <motion.div
                          key={`rear-${wheelSpinKey}`}
                          initial={{ rotate: 0, scale: 0.9, opacity: 0 }}
                          animate={{ rotate: 540, scale: 1, opacity: 1 }}
                          exit={{ rotate: -180, scale: 0.9, opacity: 0 }}
                          transition={{ type: 'spring', stiffness: 120, damping: 14 }}
                          className="[filter:drop-shadow(0_8px_20px_rgba(0,0,0,0.6))]"
                        >
                          <motion.div whileHover={{ rotate: 30 }} transition={{ type: 'spring', stiffness: 80, damping: 10 }}>
                            <WheelSVG styleId={wheel} color={color} brakeColor={accent} />
                          </motion.div>
                        </motion.div>
                      </AnimatePresence>
                    </div>
                  </motion.div>
                </motion.div>
              </div>
            </div>
            <div className="mt-4 text-sm text-neutral-400 text-center">Drag the color pickers and size slider, then hover wheels to see micro-animations.</div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CarSVG() {
  return (
    <svg viewBox="0 0 900 360" className="w-full h-auto">
      <defs>
        <linearGradient id="body" x1="0" x2="1">
          <stop offset="0%" stopColor="#0ea5e9" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.6" />
        </linearGradient>
      </defs>
      <g>
        <path d="M120 240 C170 150 220 130 320 120 L520 110 C620 112 690 130 760 170 C790 188 812 210 820 240 L860 240 Q865 260 840 260 L780 260 L720 260 Q700 280 640 280 L280 280 Q220 280 200 260 L160 260 L120 260 Q100 260 120 240 Z" fill="url(#body)" stroke="#0ea5e9" strokeOpacity="0.3" strokeWidth="3"/>
        <rect x="320" y="135" width="180" height="45" rx="6" fill="#e0f2fe" opacity="0.3" />
        <rect x="520" y="132" width="110" height="40" rx="6" fill="#e0f2fe" opacity="0.25" />
        <circle cx="240" cy="270" r="12" fill="#22d3ee" opacity="0.35" />
        <circle cx="690" cy="270" r="12" fill="#22d3ee" opacity="0.35" />
      </g>
    </svg>
  );
}
