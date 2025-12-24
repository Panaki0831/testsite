import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const About = () => {
  const titleRef = useRef(null);
  const contentRef = useRef(null);
  const titleInView = useInView(titleRef, { once: true });
  const contentInView = useInView(contentRef, { once: true, margin: "-100px" });

  const values = [
    {
      title: 'Innovation',
      description: '最先端技術と建築の融合により、業界に新しい価値を創造します',
      icon: '💡',
    },
    {
      title: 'Excellence',
      description: '高い専門性と品質へのこだわりで、お客様の期待を超える成果を提供します',
      icon: '⭐',
    },
    {
      title: 'Sustainability',
      description: '持続可能な社会の実現に向けて、環境に配慮したソリューションを追求します',
      icon: '🌍',
    },
  ];

  return (
    <section id="about" className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-6">
        {/* Section title */}
        <motion.div
          ref={titleRef}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={titleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary-black mb-4">
            About Us
          </h2>
          <p className="text-xl text-secondary-gray max-w-2xl mx-auto">
            私たちのミッション・ビジョン
          </p>
        </motion.div>

        {/* Main content */}
        <div className="max-w-6xl mx-auto">
          {/* Mission statement */}
          <motion.div
            ref={contentRef}
            className="mb-20"
            initial={{ opacity: 0, y: 30 }}
            animate={contentInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-white rounded-3xl p-12 shadow-xl border border-border-light">
              <h3 className="text-3xl font-bold text-primary-black mb-6">
                Our Mission
              </h3>
              <p className="text-lg text-secondary-gray leading-relaxed mb-6">
                SAMURAI ARCHITECTSは、AIとデジタル技術を駆使して、
                不動産・建築業界に革新をもたらすデジタルアーキテクト集団です。
              </p>
              <p className="text-lg text-secondary-gray leading-relaxed">
                私たちは、伝統的な建築の知恵と最先端のテクノロジーを融合させることで、
                より効率的で、より持続可能な、そしてより人々に寄り添った空間づくりを実現します。
                データドリブンなアプローチと深い専門知識により、
                お客様のビジネスに真の価値を提供し続けます。
              </p>
            </div>
          </motion.div>

          {/* Values */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                animate={contentInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              >
                <div className="text-6xl mb-4">{value.icon}</div>
                <h4 className="text-2xl font-bold text-primary-black mb-3">
                  {value.title}
                </h4>
                <p className="text-secondary-gray leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
