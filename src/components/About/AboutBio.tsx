import { useLanguage } from '../../context/LanguageContext';
import { about } from '../../data/about';

export default function AboutBio() {
  const { language } = useLanguage();

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="
          background-blur-md
          bg-gradient-to-br from-cyan-500/5 to-cyan-600/5
          border border-cyan-500/20
          rounded-2xl
          p-10
          shadow-[0_0_30px_rgba(0,242,255,0.08)]
        ">        
        {/* Text */}
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-white to-cyan-400 bg-clip-text text-transparent">
            {about.title[language]}
          </h2>

          <div className="space-y-6 text-gray-300 leading-relaxed text-lg">
            {about.paragraphs[language].map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>

        {/* Accent image or placeholder */}
        <div className="rounded-2xl overflow-hidden border border-cyan-500/20 bg-cyan-500/5 backdrop-blur-md p-4">
          <img
            src="/images/prof4.svg"
            alt="About accent"
            className="rounded-xl opacity-50"
          />
        </div>
      </div>
    </section>
  );
}
