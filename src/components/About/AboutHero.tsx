import { useLanguage } from '../../context/LanguageContext';

export default function AboutHero() {
  const { t } = useLanguage();

  return (
    <section className="relative w-full h-[60vh] md:h-[70vh] flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="/images/about-hero.jpg"
          alt="About background"
          className="w-full h-full object-cover brightness-50 opacity-70"
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/80"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-4">
        <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-white to-cyan-400 bg-clip-text text-transparent">
          {t.about.title}
        </h1>
        <p className="mt-4 text-gray-300 max-w-2xl mx-auto text-lg">
          {t.about.subtitle}
        </p>
      </div>
    </section>
  );
}
