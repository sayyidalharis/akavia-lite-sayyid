import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Skills: React.FC = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  const categories = [
    { title: 'Frontend', items: 'React, Next.js, React Native, PHP' },
    { title: 'Backend', items: 'Spring Boot, Express.js, Flask, Laravel, Go' },
    { title: 'Databases', items: 'Oracle, SQL, NoSQL, Firebase' },
    { title: 'ML & AI', items: 'Scikit-learn, OpenCV' },
    { title: 'Other', items: 'Figma, CI/CD, Docker, SonarQube, Documentation' },
  ];

  return (
    <section id="skills" className="py-20 bg-[#FFFFFF]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-light text-[#363A3D] mb-6">
            Tech <span className="font-semibold">Toolbox</span>
          </h2>
          <p className="text-lg text-[#363A3D]/70 max-w-2xl mx-auto">
            The technologies I use to move fast without breaking things.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {categories.map((cat, index) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 60, rotateY: -15 }}
              animate={inView ? { opacity: 1, y: 0, rotateY: 0 } : {}}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.12,
                type: "spring",
                stiffness: 80,
                damping: 12
              }}
              whileHover={{ 
                y: -8, 
                rotateY: 5,
                transition: { duration: 0.4 }
              }}
              className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 border border-[#363A3D]/10 hover:shadow-xl transition-shadow duration-300"
            >
              <h4 className="text-xl font-semibold text-[#363A3D] mb-2">{cat.title}</h4>
              <p className="text-[#363A3D]/80">{cat.items}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;


