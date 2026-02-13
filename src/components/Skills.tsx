import { motion, useInView } from 'motion/react';
import { useRef, useState } from 'react';
import { 
  Code2, 
  Palette, 
  Database, 
  Cloud, 
  GitBranch, 
  Layers,
  Cpu,
  Shield
} from 'lucide-react';

const skills = [
  { icon: Code2, name: 'Frontend', techs: ['React', 'TypeScript', 'Tailwind'] },
  { icon: Database, name: 'Backend', techs: ['Node.js', 'Python', 'PostgreSQL'] },
  { icon: Palette, name: 'Design', techs: ['Figma', 'Adobe XD', 'Photoshop'] },
  { icon: Cloud, name: 'Cloud', techs: ['AWS', 'Azure', 'Vercel'] },
  { icon: GitBranch, name: 'Version Control', techs: ['Git', 'GitHub', 'GitLab'] },
  { icon: Layers, name: 'Architecture', techs: ['Microservices', 'REST', 'GraphQL'] },
  { icon: Cpu, name: 'AI/ML', techs: ['TensorFlow', 'PyTorch', 'OpenAI'] },
  { icon: Shield, name: 'Security', techs: ['OAuth', 'JWT', 'Encryption'] },
];

export function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="skills" className="py-20 px-6 bg-[#111827]" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Technical <span className="bg-gradient-to-r from-[#06B6D4] to-[#22D3EE] bg-clip-text text-transparent">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#06B6D4] to-[#22D3EE] mx-auto rounded-full" />
          <p className="text-[#94A3B8] mt-6 max-w-2xl mx-auto">
            A diverse toolkit for building modern digital solutions
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              className="relative"
            >
              <motion.div
                className="relative p-6 rounded-2xl bg-[#0F172A] border border-[#1F2937] cursor-pointer overflow-hidden group"
                whileHover={{
                  scale: 1.05,
                  rotateY: 5,
                  rotateX: 5,
                }}
                style={{
                  transformStyle: 'preserve-3d',
                  perspective: '1000px',
                }}
                transition={{ duration: 0.3 }}
              >
                {/* Gradient background on hover */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-[#22D3EE]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredIndex === index ? 1 : 0 }}
                />

                {/* Glowing border */}
                <motion.div
                  className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-[#22D3EE]/50 transition-all duration-500"
                  animate={{
                    boxShadow: hoveredIndex === index 
                      ? '0 0 30px rgba(34, 211, 238, 0.3)' 
                      : '0 0 0px rgba(34, 211, 238, 0)',
                  }}
                />

                {/* Icon */}
                <motion.div
                  className="relative flex justify-center mb-4"
                  animate={{
                    scale: hoveredIndex === index ? [1, 1.2, 1] : 1,
                  }}
                  transition={{ duration: 0.5, repeat: hoveredIndex === index ? Infinity : 0 }}
                >
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#06B6D4] to-[#22D3EE] flex items-center justify-center">
                    <skill.icon className="text-[#0F172A]" size={28} />
                  </div>
                </motion.div>

                {/* Skill name */}
                <h3 className="text-center font-bold text-lg mb-2 relative z-10">
                  {skill.name}
                </h3>

                {/* Technologies */}
                <div className="relative z-10 space-y-1">
                  {skill.techs.map((tech, techIndex) => (
                    <motion.div
                      key={tech}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{
                        opacity: hoveredIndex === index ? 1 : 0.7,
                        x: hoveredIndex === index ? 0 : -10,
                      }}
                      transition={{ delay: techIndex * 0.1 }}
                      className="text-center text-sm text-[#94A3B8]"
                    >
                      {tech}
                    </motion.div>
                  ))}
                </div>

                {/* Progress indicator (appears on hover) */}
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#06B6D4] to-[#22D3EE]"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: hoveredIndex === index ? 1 : 0 }}
                  transition={{ duration: 0.5 }}
                  style={{ transformOrigin: 'left' }}
                />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
