import { motion, useInView } from 'motion/react';
import { useRef, useState } from 'react';
import { ArrowRight } from 'lucide-react';

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section id="about" className="py-20 px-6 bg-[#111827]" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="bg-gradient-to-r from-[#06B6D4] to-[#22D3EE] bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#06B6D4] to-[#22D3EE] mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left - Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden group">
              {/* Glassmorphic overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#22D3EE]/20 to-transparent z-10 group-hover:opacity-0 transition-opacity duration-500" />
              
              <motion.img
                src="https://images.unsplash.com/photo-1759884247173-3db27f7fafef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3ZWIlMjBkZXZlbG9wbWVudCUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3NzA5NTAyMjN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Workspace"
                className="w-full h-[400px] object-cover rounded-2xl"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.5 }}
              />

              {/* Border glow effect */}
              <div className="absolute inset-0 rounded-2xl border-2 border-[#22D3EE]/0 group-hover:border-[#22D3EE]/50 transition-all duration-500 shadow-[0_0_30px_rgba(34,211,238,0)]  group-hover:shadow-[0_0_30px_rgba(34,211,238,0.3)]" />
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-4 -left-4 w-24 h-24 border-4 border-[#22D3EE] rounded-lg -z-10" />
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-4 border-[#06B6D4] rounded-lg -z-10" />
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-3xl font-bold mb-4">
              Crafting Digital Experiences
            </h3>
            
            <p className="text-[#CBD5E1] mb-4 leading-relaxed">
              I'm a passionate developer with over 5 years of experience in building 
              web applications that solve real-world problems. I specialize in creating 
              seamless user experiences with modern technologies.
            </p>

            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{
                height: isExpanded ? 'auto' : 0,
                opacity: isExpanded ? 1 : 0,
              }}
              transition={{ duration: 0.4 }}
              className="overflow-hidden"
            >
              <p className="text-[#94A3B8] mb-4 leading-relaxed">
                My journey in tech started with a curiosity about how things work. 
                Today, I combine creativity with technical expertise to build products 
                that not only look great but perform exceptionally. I believe in 
                continuous learning and staying updated with the latest industry trends.
              </p>

              <p className="text-[#94A3B8] mb-4 leading-relaxed">
                When I'm not coding, you'll find me exploring new technologies, 
                contributing to open-source projects, or mentoring aspiring developers.
              </p>
            </motion.div>

            <motion.button
              onClick={() => setIsExpanded(!isExpanded)}
              className="flex items-center space-x-2 text-[#22D3EE] hover:text-[#38BDF8] transition-colors duration-300 mt-4"
              whileHover={{ x: 5 }}
            >
              <span>{isExpanded ? 'Read Less' : 'Read More'}</span>
              <motion.div
                animate={{ rotate: isExpanded ? 90 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <ArrowRight size={20} />
              </motion.div>
            </motion.button>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-8">
              {[
                { value: '5+', label: 'Years Experience' },
                { value: '100+', label: 'Projects Done' },
                { value: '50+', label: 'Happy Clients' },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  className="text-center p-4 rounded-lg bg-[#1F2937] hover:bg-[#22D3EE]/10 transition-colors duration-300 border border-[#22D3EE]/20"
                >
                  <div className="text-3xl font-bold bg-gradient-to-r from-[#06B6D4] to-[#22D3EE] bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <div className="text-sm text-[#94A3B8] mt-1">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
