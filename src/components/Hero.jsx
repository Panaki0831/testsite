import { motion } from 'framer-motion';

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-white to-gray-50 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary-black/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-primary-black/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 py-32 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Main heading with animation */}
          <motion.h1
            className="text-5xl md:text-7xl font-bold text-primary-black mb-8 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            AI × 空間デザインで、
            <br />
            <span className="bg-gradient-to-r from-primary-black to-secondary-gray bg-clip-text text-transparent">
              不動産と建築の未来を創る
            </span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            className="text-xl md:text-2xl text-secondary-gray mb-12 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            先端技術と建築の専門知識を融合し、
            <br className="hidden md:block" />
            新しい価値を生み出すデジタルアーキテクト
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <button
              onClick={() => scrollToSection('#service')}
              className="px-8 py-4 bg-primary-black text-white rounded-lg font-medium hover:bg-primary-black/90 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Serviceを見る
            </button>
            <button
              onClick={() => scrollToSection('#contact')}
              className="px-8 py-4 bg-white text-primary-black border-2 border-primary-black rounded-lg font-medium hover:bg-primary-black hover:text-white transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              お問い合わせ
            </button>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <motion.div
            className="w-6 h-10 border-2 border-primary-black rounded-full flex justify-center"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <div className="w-1 h-3 bg-primary-black rounded-full mt-2"></div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
