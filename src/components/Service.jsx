import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const ServiceCard = ({ title, description, icon, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      className="group relative bg-white p-8 rounded-2xl border border-border-light hover:border-primary-black transition-all duration-300 hover:shadow-2xl"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      {/* Icon placeholder - replace with actual images */}
      <div className="mb-6 text-6xl transform group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>

      <h3 className="text-2xl font-bold text-primary-black mb-4 group-hover:text-secondary-gray transition-colors duration-300">
        {title}
      </h3>

      <p className="text-secondary-gray leading-relaxed">
        {description}
      </p>

      {/* Hover effect overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl pointer-events-none"></div>
    </motion.div>
  );
};

const Service = () => {
  const services = [
    {
      title: 'AI空間デザイン',
      description: '最新のAI技術を活用し、データドリブンな空間設計を実現。お客様のニーズを深く分析し、最適な空間ソリューションを提案します。',
      icon: '🤖',
    },
    {
      title: '不動産DX支援',
      description: '不動産業界のデジタルトランスフォーメーションを支援。業務効率化から新規事業創出まで、包括的なソリューションを提供します。',
      icon: '🏢',
    },
    {
      title: '建築テクノロジー',
      description: 'BIM・CIMなどの最先端建築技術を駆使し、設計から施工まで一貫したデジタル化を実現。プロジェクトの品質と効率を向上させます。',
      icon: '🏗️',
    },
    {
      title: 'スマートシティ構想',
      description: 'IoT・AIを活用したスマートシティの企画・設計をサポート。持続可能で快適な都市環境の実現に貢献します。',
      icon: '🌆',
    },
  ];

  const titleRef = useRef(null);
  const titleInView = useInView(titleRef, { once: true });

  return (
    <section id="service" className="py-24 bg-gradient-to-b from-gray-50 to-white">
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
            Service
          </h2>
          <p className="text-xl text-secondary-gray max-w-2xl mx-auto">
            テクノロジーと建築の融合で、新しい価値を創造します
          </p>
        </motion.div>

        {/* Service cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Service;
