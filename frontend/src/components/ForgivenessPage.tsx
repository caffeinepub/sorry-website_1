import { useState, useCallback } from 'react';
import FadeIn from './FadeIn';
import { Heart } from 'lucide-react';

export default function ForgivenessPage() {
  const [forgiven, setForgiven] = useState(false);
  const [noClickCount, setNoClickCount] = useState(0);

  const handleNo = useCallback(() => {
    setNoClickCount((c) => c + 1);
  }, []);

  const handleYes = useCallback(() => {
    setForgiven(true);
  }, []);

  const noMessages = [
    'No',
    'Are you sure? 🥺',
    'Please reconsider 💔',
    'Think again...',
    "Noooo don't do this 😢",
    "I'm begging you 🙏",
    'Last chance...',
    'Really?? 😭',
  ];

  const noLabel = noMessages[Math.min(noClickCount, noMessages.length - 1)];

  return (
    <section className="relative py-24 px-6 bg-blush-light overflow-hidden">
      {/* Decorative petals */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {['🌸', '🌷', '💕', '🌸', '💗', '🌷'].map((petal, i) => (
          <span
            key={i}
            className="absolute text-2xl opacity-20 animate-petal-fall"
            style={{
              left: `${10 + i * 15}%`,
              top: `${5 + (i % 3) * 20}%`,
              animationDelay: `${i * 0.8}s`,
              animationDuration: `${6 + i}s`,
            }}
          >
            {petal}
          </span>
        ))}
      </div>

      <div className="max-w-3xl mx-auto relative z-10">
        <FadeIn>
          <div className="text-center mb-12">
            <p className="font-script text-rose text-xl mb-3">A question from my heart</p>
            <h2 className="font-serif text-5xl md:text-6xl font-bold text-foreground mb-4">
              Did you forgive me?
            </h2>
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-16 h-px bg-rose/40" />
              <Heart className="w-5 h-5 text-rose fill-rose" />
              <div className="w-16 h-px bg-rose/40" />
            </div>
            <p className="font-body text-muted-foreground text-lg max-w-md mx-auto">
              I know I hurt you, and I'm truly sorry. I just need to know...
            </p>
          </div>
        </FadeIn>

        {!forgiven && (
          <FadeIn delay={200}>
            {/*
              Orbit container: 340px × 340px so the No button (radius ~130px)
              stays fully visible. Yes button is centered via absolute + translate.
              No button sits at center and is pushed out by the orbit animation.
            */}
            <div
              className="relative mx-auto"
              style={{ width: 340, height: 340 }}
            >
              {/* YES button — centered, stationary */}
              <button
                onClick={handleYes}
                className="absolute px-10 py-4 bg-rose text-cream font-serif text-xl font-semibold rounded-full shadow-lg hover:shadow-xl hover:scale-110 active:scale-95 transition-all duration-300 border-2 border-rose/60"
                style={{
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  zIndex: 10,
                }}
              >
                Yes 💕
              </button>

              {/*
                NO button orbit wrapper:
                - Positioned at center of container
                - The CSS animation rotates the wrapper around the center,
                  then counter-rotates the inner button so text stays upright.
                - orbit radius = 130px (translateX value in keyframe)
              */}
              <div
                className="no-orbit-wrapper"
                style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  width: 0,
                  height: 0,
                  zIndex: 20,
                }}
              >
                <button
                  onClick={handleNo}
                  className="no-orbit-btn px-8 py-4 bg-card text-muted-foreground font-serif text-lg rounded-full shadow-md hover:shadow-lg border border-border select-none"
                  style={{
                    position: 'absolute',
                    transform: 'translate(-50%, -50%)',
                    whiteSpace: 'nowrap',
                    cursor: 'pointer',
                  }}
                >
                  {noLabel}
                </button>
              </div>
            </div>
          </FadeIn>
        )}

        {forgiven && (
          <div className="mt-8 space-y-12">
            {/* Special memory card */}
            <FadeIn delay={0}>
              <div className="flex justify-center">
                <article className="group bg-card rounded-2xl overflow-hidden shadow-memory hover:shadow-memory-hover transition-all duration-500 hover:-translate-y-1 max-w-sm w-full">
                  <div className="relative overflow-hidden" style={{ height: '260px' }}>
                    <img
                      src="/assets/generated/memory-placeholder-romantic.dim_600x400.png"
                      alt="I love you so much"
                      style={{ width: '100%', height: '260px', objectFit: 'cover', display: 'block' }}
                      className="transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-5xl animate-pulse-soft">💕</span>
                    </div>
                  </div>
                  <div className="p-6 text-center">
                    <h3 className="font-script text-rose text-2xl mb-2">
                      I loveee youuu soo muchhh babee 💕
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed italic font-body">
                      "You are my whole world, my reason to smile every single day."
                    </p>
                  </div>
                </article>
              </div>
            </FadeIn>

            {/* ILY Letter */}
            <FadeIn delay={300}>
              <div
                className="relative max-w-2xl mx-auto rounded-2xl overflow-hidden shadow-letter"
                style={{
                  backgroundImage: "url('/assets/generated/ily-letter-paper.dim_900x1200.png')",
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              >
                {/* Overlay for readability */}
                <div className="absolute inset-0 bg-cream/70 rounded-2xl" />

                <div className="relative z-10 px-10 py-12 md:px-16 md:py-16">
                  <p className="font-script text-rose text-3xl mb-8 text-center">
                    My Dearest Love,
                  </p>

                  <div className="space-y-5 font-serif text-foreground text-lg leading-relaxed">
                    <p>
                      There are not enough words in any language to describe how deeply,
                      completely, and endlessly I love you. You are the first thought that
                      greets me every morning and the last feeling that holds me every night.
                    </p>
                    <p>
                      You make ordinary moments feel like magic. Your laugh is my favourite
                      sound in the entire world. Your eyes hold every universe I ever want
                      to explore. And your heart — your beautiful, kind, forgiving heart —
                      is the greatest gift I have ever been given.
                    </p>
                    <p>
                      I love you not just for who you are, but for who I become when I'm
                      with you. You make me want to be better, to be kinder, to be more.
                      You are my safe place, my adventure, my home.
                    </p>
                    <p>
                      I love you yesterday, today, tomorrow, and every single day after
                      that — forever and always, without condition, without end.
                    </p>
                  </div>

                  <div className="mt-10 text-center">
                    <p className="font-script text-rose text-2xl mb-1">Forever yours,</p>
                    <p className="font-script text-rose text-3xl">with all my love 💕</p>
                    <div className="flex items-center justify-center gap-2 mt-4">
                      <Heart className="w-4 h-4 text-rose fill-rose" />
                      <Heart className="w-6 h-6 text-rose fill-rose" />
                      <Heart className="w-4 h-4 text-rose fill-rose" />
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        )}
      </div>
    </section>
  );
}
