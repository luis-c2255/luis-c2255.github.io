import Card from './Card';
import { workStyle } from '../../data/workStyle';
import { useLanguage } from '../../context/LanguageContext';

export default function WorkStyle() {
  const { language, t } = useLanguage();

  return (
    <section className="py-20 px-4">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold bg-gradient-to-r from-white to-cyan-400 bg-clip-text text-transparent">
          {t.about.workStyle}
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-cyan-600 mx-auto mt-4 rounded-full"></div>
      </div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
        {workStyle.map((item) => {
          const Icon = item.icon;
          return (
          <Card
            key={item.id}
            icon={<Icon className="w-10 h-10 text-cyan-400" />}
            title={item.title[language]}
            description={item.description[language]}
          />
          );
        })}
      </div>
    </section>
  );
}
