import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Education: React.FC = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section id="education" className="py-20 bg-[#FFFFFF]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-light text-[#363A3D] mb-6">
            Education & Certifications
          </h2>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotateX: -20 }}
            animate={inView ? { opacity: 1, scale: 1, rotateX: 0 } : {}}
            transition={{ 
              duration: 0.9, 
              type: "spring",
              stiffness: 60,
              damping: 10
            }}
            whileHover={{ 
              scale: 1.03, 
              rotateX: 5,
              transition: { duration: 0.3 }
            }}
            className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 border border-[#363A3D]/10 hover:shadow-lg transition-shadow duration-300"
          >
            <h3 className="text-xl font-semibold text-[#363A3D]">B.Comp Informatics Engineering</h3>
            <span className="text-sm text-[#363A3D]/60">Institut Teknologi Sumatera, 2023</span>
            <p className="text-[#363A3D]/80 mt-3">Department's Best 3 Graduates. GPA: 3.86</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotateX: -20 }}
            animate={inView ? { opacity: 1, scale: 1, rotateX: 0 } : {}}
            transition={{ 
              duration: 0.9, 
              delay: 0.2,
              type: "spring",
              stiffness: 60,
              damping: 10
            }}
            whileHover={{ 
              scale: 1.03, 
              rotateX: 5,
              transition: { duration: 0.3 }
            }}
            className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 border border-[#363A3D]/10 hover:shadow-lg transition-shadow duration-300"
          >
            <h3 className="text-xl font-semibold text-[#363A3D]">Certifications</h3>
            <span className="text-sm text-[#363A3D]/60">IELTS, Overall Band Score: 6.5 (CEFR B2)<br></br></span>
            <span className="text-sm text-[#363A3D]/60">Communication Skills for Business (Certiport, Pearson VUE 2023)</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Education;


