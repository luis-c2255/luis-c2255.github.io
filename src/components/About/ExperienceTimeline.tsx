import { useLanguage } from "../../context/LanguageContext";
import { experience } from "../../data/experience";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function ExperienceTimeline() {
  const { language, t } = useLanguage();
  const containerRef = useRef(null);

  // Scroll progress for animated line
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 200px", "end 200px"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section className="px-4 py-20 relative">
      <div className="max-w-5xl mx-auto" ref={containerRef}>

        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-white to-cyan-400 bg-clip-text text-transparent">
            {t.about.experience}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-cyan-600 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Vertical Line (animated) */}
        <motion.div
          style={{ height: lineHeight }}
          className="
            absolute left-1/2 transform -translate-x-1/2 top-40 
            w-[3px] bg-cyan-500/30 rounded-full 
            shadow-[0_0_20px_rgba(0,242,255,0.4)]
          "
        />

        <div className="space-y-24 relative">
          {experience.map((item, index) => {
            const isLeft = index % 2 === 0;

            return (
              <div
                key={index}
                className={`
                  relative flex flex-col md:flex-row items-center 
                  ${isLeft ? "md:justify-start" : "md:justify-end"}
                `}
              >
                {/* Glowing Dot */}
                <div
                  className="
                    absolute left-1/2 transform -translate-x-1/2 
                    w-6 h-6 rounded-full bg-cyan-400 
                    shadow-[0_0_25px_rgba(0,242,255,0.9)]
                    border border-cyan-300
                  "
                />

                {/* Card */}
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className={`
                    mt-10 md:mt-0 w-full md:w-[45%]
                    backdrop-blur-md 
                    bg-gradient-to-br from-cyan-500/5 to-cyan-600/5 
                    border border-cyan-500/20 
                    rounded-2xl 
                    p-8 
                    shadow-[0_0_30px_rgba(0,242,255,0.08)]
                    hover:border-cyan-500/40 
                    transition-all
                    ${isLeft ? "md:mr-auto" : "md:ml-auto"}
                  `}
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <h3 className="text-2xl font-bold text-white">
                      {item.role[language]}
                    </h3>
                    <span className="text-cyan-400 font-medium mt-2 md:mt-0">
                      {item.year}
                    </span>
                  </div>

                  <p className="text-gray-400 font-medium mb-4">{item.company}</p>

                  <ul className="space-y-3 text-gray-300 leading-relaxed">
                    {item.bullets[language].map((bullet, i) => (
                      <li key={i} className="flex items-start space-x-2">
                        <span className="text-cyan-400 mt-1">•</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}


