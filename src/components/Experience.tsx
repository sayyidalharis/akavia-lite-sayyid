import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface ExperienceItem {
  title: string;
  company: string;
  period: string;
  details: string[];
}

const Experience: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const experiences: ExperienceItem[] = [
    {
      title: "Analyst Software Engineer",
      company: "PT Asuransi Kredit Indonesia",
      period: "2025-Present",
      details: [
        "Design and develop core system for reinsurance spreading of claim from scratch.",
        "Lead API development for underwriting & claims workflows intended for mobile app.",
        "Researched & integrated AI/ML tools to improve code quality and developer productivity.",
      ]
    },
    {
      title: "Fullstack Developer",
      company: "PT Bank Syariah Indonesia",
      period: "2023-2025",  
      details: [
        "Built core banking features: virtual accounts, account services, bank statements.",
        "Implemented front-liners and management workflows for branch and hq operations.",
        "Worked on multilingual and localization support, performance optimizations."
      ]
    },
    {
      title: "Software Engineer Intern",
      company: "Datangin",
      period: "2022",
      details: [
        "Integrated payment gateway for logistics platform, improving transaction speed.",
        "Reduced costs by approx. 15% through optimized data flow and resource usage.",
        "Assisted in frontend & backend tasks, gaining a fullstack foundation."
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-[#FFFFFF]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-light text-[#363A3D] mb-6">
            Experience
          </h2>
          <p className="text-lg text-[#363A3D]/70 max-w-2xl mx-auto">
            A track record of building reliable systems with business impact.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50, scale: 0.95 }}
              animate={inView ? { opacity: 1, x: 0, scale: 1 } : {}}
              transition={{ 
                duration: 0.7, 
                delay: index * 0.15,
                type: "spring",
                stiffness: 100,
                damping: 15
              }}
              whileHover={{ 
                scale: 1.02, 
                x: 10,
                transition: { duration: 0.3 }
              }}
              className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 border border-[#363A3D]/10 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2">
                <div>
                  <h3 className="text-xl font-semibold text-[#363A3D]">{exp.title}</h3>
                  <p className="text-[#363A3D]/60">{exp.company}</p>
                </div>
                <div className="text-sm text-[#363A3D]/60">{exp.period}</div>
              </div>
              <ul className="mt-4 space-y-2 list-disc list-inside text-[#363A3D]/80">
                {exp.details.map((d, i) => (
                  <li key={i}>{d}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;


