export default function Footer() {
  const year = new Date().getFullYear();
  const appId = encodeURIComponent(
    typeof window !== 'undefined' ? window.location.hostname : 'sorry-website'
  );

  return (
    <footer className="bg-rose-dark py-16 px-6 text-center">
      {/* Decorative heart */}
      <div className="flex justify-center mb-6">
        <img
          src="/assets/generated/heart-deco.dim_128x128.png"
          alt="Heart decoration"
          className="w-16 h-16 object-contain opacity-90 animate-pulse-soft"
        />
      </div>

      {/* Closing message */}
      <p className="font-script text-cream text-3xl md:text-4xl mb-3">
        With all my love and hope for a second chance
      </p>
      <p className="font-serif text-cream/70 text-lg italic mb-10">
        Some things are worth fighting for. You are one of them. ♥
      </p>

      {/* Divider */}
      <div className="w-24 h-px bg-cream/30 mx-auto mb-8" />

      {/* Attribution */}
      <p className="text-cream/50 text-sm font-serif">
        © {year} &nbsp;·&nbsp; Built with{' '}
        <span className="text-rose-light">♥</span> using{' '}
        <a
          href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${appId}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-cream/70 hover:text-cream underline underline-offset-2 transition-colors duration-200"
        >
          caffeine.ai
        </a>
      </p>
    </footer>
  );
}
