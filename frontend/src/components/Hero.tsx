import { ChevronDown } from 'lucide-react';
import { useEffect, useState } from 'react';

const PETALS = Array.from({ length: 18 }, (_, i) => ({
  id: i,
  left: `${Math.random() * 100}%`,
  animationDuration: `${6 + Math.random() * 8}s`,
  animationDelay: `${Math.random() * 8}s`,
  size: `${14 + Math.random() * 18}px`,
  opacity: 0.4 + Math.random() * 0.5,
}));

export default function Hero() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(t);
  }, []);

  const scrollDown = () => {
    const next = document.getElementById('memories');
    if (next) next.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url('/assets/generated/hero-bg.dim_1920x1080.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Warm overlay */}
      <div className="absolute inset-0 bg-hero-overlay" />

      {/* Floating petals */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {PETALS.map((petal) => (
          <span
            key={petal.id}
            className="absolute animate-petal-fall"
            style={{
              left: petal.left,
              top: '-30px',
              fontSize: petal.size,
              opacity: petal.opacity,
              animationDuration: petal.animationDuration,
              animationDelay: petal.animationDelay,
            }}
          >
            🌸
          </span>
        ))}
      </div>

      {/* Content */}
      <div
        className={`relative z-10 text-center px-6 max-w-3xl mx-auto transition-all duration-1200 ease-out ${
          loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}
      >
        <p className="font-script text-rose-light text-2xl md:text-3xl mb-4 tracking-wide">
          From the bottom of my heart
        </p>
        <h1 className="font-serif text-6xl md:text-8xl lg:text-9xl font-bold text-cream mb-6 leading-none drop-shadow-lg">
          I'm Sorry
        </h1>
        <div className="w-24 h-px bg-rose-light mx-auto mb-6 opacity-70" />
        <p className="font-serif text-cream/90 text-xl md:text-2xl leading-relaxed italic">
          Some words are never enough, but I hope these ones reach your heart the way you've always reached mine.
        </p>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollDown}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-cream/70 hover:text-cream transition-colors duration-300 group"
        aria-label="Scroll down"
      >
        <span className="font-serif text-sm tracking-widest uppercase">Our Story</span>
        <ChevronDown className="w-6 h-6 animate-bounce" />
      </button>
    </section>
  );
}
