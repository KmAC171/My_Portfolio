import { motion, useInView } from 'motion/react';
import { useRef, useState } from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';
import { AnimatedButton } from './AnimatedButton';

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [errors, setErrors] = useState<{ [key: string]: boolean }>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: false }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: { [key: string]: boolean } = {};
    if (!formData.name) newErrors.name = true;
    if (!formData.email) newErrors.email = true;
    if (!formData.message) newErrors.message = true;

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    console.log('Form submitted:', formData);
  };

  const contactInfo = [
    { icon: Mail, label: 'Email', value: 'charithkulathunga1@gmail.com', href: 'mailto:charithkulathunga1@gmail.com' },
    { icon: Phone, label: 'Phone', value: '+94 75 558 5594', href: 'tel:+94755585594' },
    { icon: MapPin, label: 'Location', value: 'Kandy, Sri Lanka', href: 'https://www.google.com/maps/place/Madawala/@7.3229673,80.6812188,3a,75y,148.26h,89.59t/data=!3m8!1e1!3m6!1sCIHM0ogKEICAgIDa1eSylwE!2e10!3e11!6shttps:%2F%2Flh3.googleusercontent.com%2Fgpms-cs-s%2FAFfmt2Z2HDLLEcQOf8gqnSONAhML8n-PkWrSoWD5ygmAB4Risn8JzKlL-wWKHfh7SED7NFPbuUQib2jas2MwOIJ2ISIs-_A-9rEHI2bnGHwSK7b83VchDg7FBZNv_hbM5SQ4EywGbpO_Gw%3Dw900-h600-k-no-pi0.4099999999999966-ya44.312436828613286-ro0-fo100!7i7680!8i3840!4m7!3m6!1s0x3ae3679cee8b8987:0xffca88af57ffdc7c!8m2!3d7.3275593!4d80.6743053!10e5!16s%2Fm%2F02rt_pq?entry=ttu&g_ep=EgoyMDI2MDMyNC4wIKXMDSoASAFQAw%3D%3D' },
  ];

  return (
    <section id="contact" className="py-20 px-6 bg-[#111827]" ref={ref}>
      <div className="max-w-7xl mx-auto">
        
        {/* Title Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get In <span className="text-[#22D3EE]">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-[#22D3EE] mx-auto rounded-full" />
        </motion.div>

        {/* Grid Container - items-stretch භාවිතයෙන් දෙපැත්තම එකම උසකට ගන්නවා */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-stretch">
          
          {/* Left Side: Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col justify-between h-full"
          >
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-[#F8FAFC]">Contact Information</h3>
              <p className="text-[#94A3B8] leading-relaxed max-w-md">
                Feel free to reach out through any of these channels. I'm always 
                open to discussing new projects, creative ideas, or opportunities.
              </p>
            </div>

            {/* මේ කොටස flex-1 දමා ඇති නිසා ඉතිරි ඉඩ ප්‍රමාණය පුරවනවා */}
            <div className="flex flex-col justify-center gap-6 mt-8 md:mt-0 flex-1">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={info.label}
                  href={info.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  whileHover={{ x: 8 }}
                  className="flex items-center space-x-4 p-5 rounded-xl bg-[#0F172A] border border-[#1F2937] hover:border-[#22D3EE]/40 transition-all group"
                >
                  <div className="w-12 h-12 rounded-lg bg-[#22D3EE] flex items-center justify-center group-hover:scale-110 transition-transform flex-shrink-0">
                    <info.icon className="text-[#0F172A]" size={20} />
                  </div>
                  <div className="min-w-0">
                    <div className="text-sm text-[#94A3B8]">{info.label}</div>
                    <div className="font-medium text-[#F8FAFC] group-hover:text-[#22D3EE] transition-colors truncate">
                      {info.value}
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Right Side: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-[#0F172A] p-8 lg:p-10 rounded-2xl border border-[#1F2937] h-full"
          >
            <form onSubmit={handleSubmit} className="space-y-6 h-full flex flex-col">
              <div className="space-y-6 flex-1">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-4 bg-[#111827] border-2 rounded-lg outline-none transition-all ${
                    errors.name ? 'border-red-500' : 'border-[#1F2937] focus:border-[#22D3EE]'
                  }`}
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-4 bg-[#111827] border-2 rounded-lg outline-none transition-all ${
                    errors.email ? 'border-red-500' : 'border-[#1F2937] focus:border-[#22D3EE]'
                  }`}
                />

                <textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className={`w-full px-4 py-4 bg-[#111827] border-2 rounded-lg outline-none resize-none transition-all ${
                    errors.message ? 'border-red-500' : 'border-[#1F2937] focus:border-[#22D3EE]'
                  }`}
                />
              </div>

              <AnimatedButton variant="primary" type="submit" className="w-full justify-center py-4 mt-6">
                Send Message
              </AnimatedButton>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}