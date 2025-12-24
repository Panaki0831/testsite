import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';

const WorkCard = ({ title, category, description, image, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      ref={ref}
      className="group relative overflow-hidden rounded-2xl bg-gray-100 aspect-[4/3] cursor-pointer"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image placeholder - replace with actual project images */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
        <span className="text-6xl">{image}</span>
      </div>

      {/* Overlay */}
      <motion.div
        className="absolute inset-0 bg-primary-black/80 flex flex-col justify-end p-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <motion.div
          initial={{ y: 20 }}
          animate={{ y: isHovered ? 0 : 20 }}
          transition={{ duration: 0.3 }}
        >
          <p className="text-white/80 text-sm mb-2">{category}</p>
          <h3 className="text-2xl font-bold text-white mb-3">{title}</h3>
          <p className="text-white/90 text-sm">{description}</p>
        </motion.div>
      </motion.div>

      {/* Zoom effect on image */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300"
        animate={{ scale: isHovered ? 1.1 : 1 }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
};

const Works = () => {
  const works = [
    {
      title: 'AI空間最適化プロジェクト',
      category: 'AI × Architecture',
      description: '機械学習を活用した商業施設の動線最適化と空間設計',
      image: '🏪',
    },
    {
      title: '不動産プラットフォーム開発',
      category: 'Digital Platform',
      description: 'クラウドベースの不動産管理システムの構築',
      image: '💼',
    },
    {
      title: 'スマートオフィス設計',
      category: 'Smart Building',
      description: 'IoTセンサーを活用した次世代オフィス空間の実現',
      image: '🏢',
    },
    {
      title: '都市再開発コンサルティング',
      category: 'Urban Planning',
      description: 'データ分析に基づく持続可能な都市計画の提案',
      image: '🌆',
    },
    {
      title: 'BIM統合ソリューション',
      category: 'Digital Twin',
      description: '3Dモデルを活用した建設プロジェクトの効率化',
      image: '🏗️',
    },
    {
      title: '環境配慮型建築設計',
      category: 'Sustainable Design',
      description: 'エネルギー効率を最大化したグリーンビルディング',
      image: '🌱',
    },
  ];

  const titleRef = useRef(null);
  const titleInView = useInView(titleRef, { once: true });

  return (
    <section id="works" className="py-24 bg-white">
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
            Works
          </h2>
          <p className="text-xl text-secondary-gray max-w-2xl mx-auto">
            私たちが手がけたプロジェクトの一部をご紹介します
          </p>
        </motion.div>

        {/* Works grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {works.map((work, index) => (
            <WorkCard
              key={index}
              title={work.title}
              category={work.category}
              description={work.description}
              image={work.image}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Works;
