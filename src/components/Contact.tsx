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
    
    // Validate
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
    {
      icon: Mail,
      label: 'Email',
      value: 'alex@example.com',
      href: 'mailto:alex@example.com',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+1 (555) 123-4567',
      href: 'tel:+15551234567',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'San Francisco, CA',
      href: '#',
    },
  ];

  return (
    <section id="contact" className="py-20 px-6 bg-[#111827]" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get In <span className="bg-gradient-to-r from-[#06B6D4] to-[#22D3EE] bg-clip-text text-transparent">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#06B6D4] to-[#22D3EE] mx-auto rounded-full" />
          <p className="text-[#94A3B8] mt-6 max-w-2xl mx-auto">
            Have a project in mind? Let's work together to create something amazing
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <p className="text-[#94A3B8] mb-8">
                Feel free to reach out through any of these channels. I'm always 
                open to discussing new projects, creative ideas, or opportunities.
              </p>
            </div>

            {contactInfo.map((info, index) => (
              <motion.a
                key={info.label}
                href={info.href}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 + index * 0.1 }}
                whileHover={{ x: 10 }}
                className="flex items-center space-x-4 p-4 rounded-xl bg-[#0F172A] border border-[#1F2937] hover:border-[#22D3EE]/50 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#06B6D4] to-[#22D3EE] flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <info.icon className="text-[#0F172A]" size={20} />
                </div>
                <div>
                  <div className="text-sm text-[#94A3B8]">{info.label}</div>
                  <div className="font-medium text-[#F8FAFC] group-hover:text-[#22D3EE] transition-colors duration-300">
                    {info.value}
                  </div>
                </div>
              </motion.a>
            ))}

            {/* Decorative element */}
            <motion.div
              className="relative h-64 rounded-2xl overflow-hidden mt-8"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.8 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#22D3EE]/20 to-[#06B6D4]/20 backdrop-blur-sm" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl font-bold bg-gradient-to-r from-[#06B6D4] to-[#22D3EE] bg-clip-text text-transparent mb-2">
                    24/7
                  </div>
                  <div className="text-[#CBD5E1]">Available for projects</div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Input */}
              <div className="relative">
                <motion.label
                  className={`absolute left-4 transition-all duration-300 pointer-events-none ${
                    focusedField === 'name' || formData.name
                      ? 'top-2 text-xs text-[#22D3EE]'
                      : 'top-4 text-base text-[#94A3B8]'
                  }`}
                  animate={{
                    y: focusedField === 'name' || formData.name ? -8 : 0,
                    scale: focusedField === 'name' || formData.name ? 0.85 : 1,
                  }}
                >
                  Your Name
                </motion.label>
                <motion.input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('name')}
                  onBlur={() => setFocusedField(null)}
                  className={`w-full px-4 pt-6 pb-2 bg-[#0F172A] border-2 rounded-lg outline-none transition-all duration-300 ${
                    errors.name
                      ? 'border-red-500'
                      : focusedField === 'name'
                      ? 'border-[#22D3EE] shadow-[0_0_20px_rgba(34,211,238,0.3)]'
                      : 'border-[#1F2937]'
                  }`}
                  animate={
                    errors.name
                      ? { x: [-10, 10, -10, 10, 0] }
                      : {}
                  }
                  transition={{ duration: 0.4 }}
                />
              </div>

              {/* Email Input */}
              <div className="relative">
                <motion.label
                  className={`absolute left-4 transition-all duration-300 pointer-events-none ${
                    focusedField === 'email' || formData.email
                      ? 'top-2 text-xs text-[#22D3EE]'
                      : 'top-4 text-base text-[#94A3B8]'
                  }`}
                  animate={{
                    y: focusedField === 'email' || formData.email ? -8 : 0,
                    scale: focusedField === 'email' || formData.email ? 0.85 : 1,
                  }}
                >
                  Your Email
                </motion.label>
                <motion.input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('email')}
                  onBlur={() => setFocusedField(null)}
                  className={`w-full px-4 pt-6 pb-2 bg-[#0F172A] border-2 rounded-lg outline-none transition-all duration-300 ${
                    errors.email
                      ? 'border-red-500'
                      : focusedField === 'email'
                      ? 'border-[#22D3EE] shadow-[0_0_20px_rgba(34,211,238,0.3)]'
                      : 'border-[#1F2937]'
                  }`}
                  animate={
                    errors.email
                      ? { x: [-10, 10, -10, 10, 0] }
                      : {}
                  }
                  transition={{ duration: 0.4 }}
                />
              </div>

              {/* Message Input */}
              <div className="relative">
                <motion.label
                  className={`absolute left-4 transition-all duration-300 pointer-events-none ${
                    focusedField === 'message' || formData.message
                      ? 'top-2 text-xs text-[#22D3EE]'
                      : 'top-4 text-base text-[#94A3B8]'
                  }`}
                  animate={{
                    y: focusedField === 'message' || formData.message ? -8 : 0,
                    scale: focusedField === 'message' || formData.message ? 0.85 : 1,
                  }}
                >
                  Your Message
                </motion.label>
                <motion.textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('message')}
                  onBlur={() => setFocusedField(null)}
                  rows={5}
                  className={`w-full px-4 pt-6 pb-2 bg-[#0F172A] border-2 rounded-lg outline-none resize-none transition-all duration-300 ${
                    errors.message
                      ? 'border-red-500'
                      : focusedField === 'message'
                      ? 'border-[#22D3EE] shadow-[0_0_20px_rgba(34,211,238,0.3)]'
                      : 'border-[#1F2937]'
                  }`}
                  animate={
                    errors.message
                      ? { x: [-10, 10, -10, 10, 0] }
                      : {}
                  }
                  transition={{ duration: 0.4 }}
                />
              </div>

              <AnimatedButton
                variant="primary"
                onClick={() => {}}
                type="submit"
              >
                Send Message
              </AnimatedButton>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
