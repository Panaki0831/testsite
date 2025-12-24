import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';

const Contact = () => {
  const titleRef = useRef(null);
  const formRef = useRef(null);
  const titleInView = useInView(titleRef, { once: true });
  const formInView = useInView(formRef, { once: true });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('お問い合わせありがとうございます。後ほど担当者よりご連絡いたします。');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-24 bg-white">
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
            Contact
          </h2>
          <p className="text-xl text-secondary-gray max-w-2xl mx-auto">
            お気軽にお問い合わせください
          </p>
        </motion.div>

        {/* Contact form */}
        <motion.div
          ref={formRef}
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={formInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 md:p-12 shadow-xl border border-border-light">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name field */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-primary-black mb-2"
                >
                  お名前 <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-border-light focus:border-primary-black focus:ring-2 focus:ring-primary-black/20 outline-none transition-all duration-200"
                  placeholder="山田 太郎"
                />
              </div>

              {/* Email field */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-primary-black mb-2"
                >
                  メールアドレス <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-border-light focus:border-primary-black focus:ring-2 focus:ring-primary-black/20 outline-none transition-all duration-200"
                  placeholder="example@email.com"
                />
              </div>

              {/* Message field */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-primary-black mb-2"
                >
                  お問い合わせ内容 <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 rounded-lg border border-border-light focus:border-primary-black focus:ring-2 focus:ring-primary-black/20 outline-none transition-all duration-200 resize-none"
                  placeholder="お問い合わせ内容をご記入ください"
                />
              </div>

              {/* Submit button */}
              <motion.button
                type="submit"
                className="w-full py-4 bg-primary-black text-white rounded-lg font-medium hover:bg-primary-black/90 transition-all duration-300 shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                送信する
              </motion.button>
            </form>

            {/* Additional info */}
            <div className="mt-8 pt-8 border-t border-border-light text-center">
              <p className="text-secondary-gray text-sm">
                ご返信まで2-3営業日いただく場合がございます。
                <br />
                お急ぎの方は、お電話でもお問い合わせいただけます。
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
