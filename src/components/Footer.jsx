import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: 'Twitter', url: '#', icon: '𝕏' },
    { name: 'LinkedIn', url: '#', icon: 'in' },
    { name: 'Facebook', url: '#', icon: 'f' },
    { name: 'Instagram', url: '#', icon: '📷' },
  ];

  const companyInfo = [
    { label: '会社名', value: '株式会社 SAMURAI ARCHITECTS' },
    { label: '所在地', value: '東京都渋谷区' },
    { label: 'Email', value: 'info@samurai-architects.com' },
    { label: 'Tel', value: '03-XXXX-XXXX' },
  ];

  const scrollToSection = (sectionId) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-primary-black text-white">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Company info */}
          <div>
            <h3 className="text-2xl font-bold mb-6">SAMURAI ARCHITECTS</h3>
            <p className="text-white/70 mb-6 leading-relaxed">
              AI × 空間デザインで、不動産と建築の未来を創る
            </p>
            <div className="space-y-2 text-sm">
              {companyInfo.map((info, index) => (
                <p key={index} className="text-white/70">
                  <span className="font-medium text-white">{info.label}:</span>{' '}
                  {info.value}
                </p>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {['Service', 'Works', 'About', 'Contact'].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => scrollToSection(`#${item.toLowerCase()}`)}
                    className="text-white/70 hover:text-white transition-colors duration-200"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Social links */}
          <div>
            <h4 className="text-lg font-bold mb-6">Follow Us</h4>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors duration-200"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={social.name}
                >
                  <span className="text-lg">{social.icon}</span>
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/10 text-center">
          <p className="text-white/60 text-sm">
            © {currentYear} SAMURAI ARCHITECTS. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
