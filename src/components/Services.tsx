import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { Code, Palette, Smartphone, Zap, Database, Globe } from 'lucide-react';

const services = [
  {
    icon: Code,
    title: 'Web Development',
    description: 'Building responsive and performant web applications using modern frameworks and best practices.',
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    description: 'Creating intuitive and beautiful user interfaces that provide exceptional user experiences.',
  },
  {
    icon: Smartphone,
    title: 'Mobile Development',
    description: 'Developing cross-platform mobile applications that work seamlessly on iOS and Android.',
  },
  {
    icon: Zap,
    title: 'Performance Optimization',
    description: 'Optimizing applications for speed, efficiency, and scalability to handle growing demands.',
  },
  {
    icon: Database,
    title: 'Backend Development',
    description: 'Building robust server-side solutions with secure APIs and efficient database management.',
  },
  {
    icon: Globe,
    title: 'SEO & Marketing',
    description: 'Implementing SEO strategies and digital marketing to increase visibility and reach.',
  },
];

export function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="services" className="py-20 px-6 bg-[#0F172A]" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="bg-gradient-to-r from-[#06B6D4] to-[#22D3EE] bg-clip-text text-transparent">Services</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#06B6D4] to-[#22D3EE] mx-auto rounded-full" />
          <p className="text-[#94A3B8] mt-6 max-w-2xl mx-auto">
            Comprehensive digital solutions tailored to bring your ideas to life
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{
                y: -10,
                boxShadow: '0 20px 40px rgba(34, 211, 238, 0.2)',
              }}
              className="relative group p-8 rounded-2xl bg-[#111827] border border-[#1F2937] hover:border-[#22D3EE]/50 transition-all duration-500 overflow-hidden"
            >
              {/* Background gradient on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#22D3EE]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Icon */}
              <motion.div
                className="relative w-16 h-16 rounded-xl bg-gradient-to-br from-[#06B6D4] to-[#22D3EE] flex items-center justify-center mb-6"
                whileHover={{
                  rotate: [0, -10, 10, -10, 0],
                  boxShadow: '0 0 30px rgba(34, 211, 238, 0.6)',
                }}
                transition={{ duration: 0.5 }}
              >
                <service.icon className="text-[#0F172A]" size={28} />
              </motion.div>

              {/* Content */}
              <h3 className="text-2xl font-bold mb-3 relative z-10 group-hover:text-[#22D3EE] transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-[#94A3B8] relative z-10 leading-relaxed">
                {service.description}
              </p>

              {/* Border highlight animation */}
              <motion.div
                className="absolute inset-0 rounded-2xl"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                style={{
                  background: 'linear-gradient(90deg, transparent, #22D3EE, transparent)',
                  backgroundSize: '200% 100%',
                }}
                animate={{
                  backgroundPosition: ['200% 0', '-200% 0'],
                }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
