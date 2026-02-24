import FadeIn from './FadeIn';
import { Heart } from 'lucide-react';

export default function LetterSection() {
  return (
    <section id="letter" className="py-24 px-6 bg-background">
      <div className="max-w-3xl mx-auto">
        <FadeIn>
          <div className="text-center mb-14">
            <p className="font-script text-rose text-xl mb-3">Written with love</p>
            <h2 className="font-serif text-5xl md:text-6xl font-bold text-foreground mb-4">
              My Sorry Letter
            </h2>
            <div className="flex items-center justify-center gap-3">
              <div className="w-16 h-px bg-rose/40" />
              <Heart className="w-5 h-5 text-rose fill-rose" />
              <div className="w-16 h-px bg-rose/40" />
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={200}>
          <div
            className="relative rounded-2xl overflow-hidden shadow-letter"
            style={{
              backgroundImage: `url('/assets/generated/letter-paper.dim_900x1200.png')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            {/* Paper overlay for readability */}
            <div className="absolute inset-0 bg-cream/80 backdrop-blur-[1px]" />

            <div className="relative z-10 px-8 py-12 md:px-14 md:py-16">
              {/* Letter header */}
              <div className="mb-8 text-right">
                <p className="font-script text-rose/80 text-lg">February 2026</p>
              </div>

              <p className="font-script text-foreground text-2xl mb-8">My dearest,</p>

              <div className="space-y-5 font-serif text-foreground/90 text-lg leading-relaxed">
                <p>
                  I've started this letter a hundred times and erased it just as many. No words feel
                  big enough, no sentence feels right enough — but I know that staying silent would
                  be the greatest mistake of all. So here I am, trying.
                </p>

                <p>
                  I am sorry. Truly, deeply, completely sorry. Not the kind of sorry that slips out
                  in the heat of an argument, but the kind that sits heavy in your chest at 2 a.m.
                  when you replay every moment and wish you could do it differently.
                </p>

                <p>
                  I hurt you. I know that. And I know that saying "I didn't mean to" doesn't undo
                  the pain — it doesn't erase the look on your face or the silence that followed.
                  You deserved better from me, and I failed you in ways I'm still learning to
                  understand.
                </p>

                <p>
                  What we have — what we <em>had</em> — is something I've never found anywhere
                  else. The way you laugh at your own jokes before you finish telling them. The way
                  you hold your coffee cup with both hands. The way you make ordinary moments feel
                  like something worth remembering. I took all of that for granted, and I am so
                  sorry.
                </p>

                <p>
                  I've been doing a lot of thinking. About who I want to be, about the kind of
                  person you deserve beside you. I'm not asking you to forget — I'm asking for the
                  chance to show you that I can be better. That I <em>will</em> be better.
                </p>

                <p>
                  If you can find it in your heart to give us another chance, I promise to show up
                  — fully, honestly, and with everything I have. And if you can't, I understand. But
                  I needed you to know that you are worth every word of this letter, and so much
                  more.
                </p>

                <p>
                  I love you. I'm sorry. And I'm here — whenever you're ready.
                </p>
              </div>

              {/* Signature */}
              <div className="mt-10 text-right">
                <p className="font-script text-rose text-3xl">Always yours,</p>
                <p className="font-script text-foreground/70 text-2xl mt-1">With all my heart ♥</p>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
