import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Languages: React.FC = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const langs = [
    'Indonesian (Native)',
    'English (CEFR B2 - IELTS 6.5)',
    'Japanese (JLPT N3)'
  ];

  return (
    <section id="languages" className="py-20 bg-[#FFFFFF]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-light text-[#363A3D] mb-6">
            Languages
          </h2>
        </motion.div>

        <ul className="max-w-xl mx-auto space-y-4">
          {langs.map((l, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30, scale: 0.9 }}
              animate={inView ? { opacity: 1, x: 0, scale: 1 } : {}}
              transition={{ 
                duration: 0.6, 
                delay: i * 0.1,
                type: "spring",
                stiffness: 120,
                damping: 15
              }}
              whileHover={{ 
                scale: 1.05, 
                x: i % 2 === 0 ? 5 : -5,
                transition: { duration: 0.3 }
              }}
              className="bg-white/70 backdrop-blur-sm border border-[#363A3D]/10 rounded-xl px-5 py-4 text-[#363A3D]/90 hover:shadow-md transition-shadow duration-300"
            >
              {l}
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Languages;


