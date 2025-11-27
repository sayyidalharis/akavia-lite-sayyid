import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import { useLayout } from '../components/LayoutContext';

const Hero: React.FC = () => {
  const { navHeight } = useLayout();

  return (
    <section 
      id="home" 
      className="min-h-screen bg-[#FFFFFF] flex items-center justify-center relative overflow-hidden pt-16"
      style={{ paddingTop: navHeight > 0 ? navHeight : undefined }}
    >
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 border border-[#363A3D] rounded-full"></div>
        <div className="absolute bottom-20 right-10 w-20 h-20 bg-[#363A3D] rounded-full"></div>
        <div className="absolute top-1/2 right-1/4 w-16 h-16 border border-[#363A3D] rotate-45"></div>
      </div>

      <div className="mt-10 mb-20 max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="inline-flex items-center space-x-2 bg-[#363A3D]/10 px-6 py-3 rounded-full"
          >
            <Sparkles size={20} className="text-[#363A3D]" />
            <span className="text-sm font-medium text-[#363A3D]">Software Engineer • Solution Architect</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-5xl md:text-7xl lg:text-8xl font-light text-[#363A3D] leading-tight"
          >
            {/* Sayyid Haris */}
            <span className="font-semibold"> Sayyid Haris</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="text-lg md:text-xl text-[#363A3D]/70 max-w-3xl mx-auto leading-relaxed"
          >
            I build scalable, reliable, human‑centered software. Experienced in banking, insurance, and logistics systems.<span className="font-semibold"> I design impactful solutions</span>.
          </motion.p>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      {/* <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-[#363A3D]/30 rounded-full flex justify-center">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-1 h-3 bg-[#363A3D]/50 rounded-full mt-2"
          ></motion.div>
        </div>
      </motion.div> */}
    </section>
  );
};

export default Hero;