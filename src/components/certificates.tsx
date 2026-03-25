import { motion, useInView } from 'motion/react';
import { useRef, useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce solution with real-time inventory management and payment processing.',
    image: 'https://images.unsplash.com/photo-1700887937204-69f8b8400ace?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMGRpZ2l0YWwlMjBkZXNpZ24lMjBwcm9qZWN0fGVufDF8fHx8MTc3MDk3OTE5Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    tags: ['React', 'Node.js', 'PostgreSQL'],
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'Social Media Dashboard',
    description: 'Analytics dashboard for tracking social media metrics across multiple platforms.',
    image: 'https://images.unsplash.com/photo-1605108222700-0d605d9ebafe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXZlbG9wbWVudCUyMGludGVyZmFjZXxlbnwxfHx8fDE3NzA5MTkwNTV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    tags: ['Vue.js', 'Express', 'MongoDB'],
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'AI Content Generator',
    description: 'Machine learning powered tool for generating creative content and copy.',
    image: 'https://images.unsplash.com/photo-1753998941587-5befe71f4572?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmdXR1cmlzdGljJTIwdGVjaG5vbG9neSUyMGNvZGluZ3xlbnwxfHx8fDE3NzA5NzkxOTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    tags: ['Python', 'TensorFlow', 'React'],
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'Project Management Tool',
    description: 'Collaborative workspace for teams with task tracking and real-time updates.',
    image: 'https://images.unsplash.com/photo-1759884247173-3db27f7fafef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3ZWIlMjBkZXZlbG9wbWVudCUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3NzA5NTAyMjN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    tags: ['Next.js', 'Prisma', 'WebSocket'],
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'Fitness Tracking App',
    description: 'Mobile-first application for tracking workouts, nutrition, and health metrics.',
    image: 'https://images.unsplash.com/photo-1700887937204-69f8b8400ace?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMGRpZ2l0YWwlMjBkZXNpZ24lMjBwcm9qZWN0fGVufDF8fHx8MTc3MDk3OTE5Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    tags: ['React Native', 'Firebase', 'Redux'],
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'Real Estate Platform',
    description: 'Property listing and management system with virtual tour capabilities.',
    image: 'https://images.unsplash.com/photo-1753998941587-5befe71f4572?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmdXR1cmlzdGljJTIwdGVjaG5vbG9neSUyMGNvZGluZ3xlbnwxfHx8fDE3NzA5NzkxOTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    tags: ['Angular', 'Django', 'PostgreSQL'],
    liveUrl: '#',
    githubUrl: '#',
  },
];

export function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="projects" className="py-20 px-6 bg-[#0F172A]" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="bg-gradient-to-r from-[#06B6D4] to-[#22D3EE] bg-clip-text text-transparent">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#06B6D4] to-[#22D3EE] mx-auto rounded-full" />
          <p className="text-[#94A3B8] mt-6 max-w-2xl mx-auto">
            A collection of projects that showcase my skills and creativity
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              className="group relative rounded-2xl overflow-hidden bg-[#111827] border border-[#1F2937] hover:border-[#22D3EE]/50 transition-all duration-500"
            >
              {/* Image container with zoom effect */}
              <div className="relative h-64 overflow-hidden">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  animate={{
                    scale: hoveredIndex === index ? 1.1 : 1,
                  }}
                  transition={{ duration: 0.5 }}
                />

                {/* Dark overlay on hover */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-[#0F172A]/80 to-transparent"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredIndex === index ? 1 : 0.5 }}
                  transition={{ duration: 0.3 }}
                />

                {/* Action buttons - slide up on hover */}
                <motion.div
                  className="absolute inset-0 flex items-center justify-center space-x-4"
                  initial={{ y: 100, opacity: 0 }}
                  animate={{
                    y: hoveredIndex === index ? 0 : 100,
                    opacity: hoveredIndex === index ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.a
                    href={project.liveUrl}
                    className="p-3 rounded-full bg-[#22D3EE] text-[#0F172A] hover:bg-[#38BDF8] transition-colors duration-300"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ExternalLink size={20} />
                  </motion.a>
                  <motion.a
                    href={project.githubUrl}
                    className="p-3 rounded-full bg-[#1F2937] text-[#F8FAFC] hover:bg-[#2D3748] transition-colors duration-300"
                    whileHover={{ scale: 1.1, rotate: -5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Github size={20} />
                  </motion.a>
                </motion.div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:text-[#22D3EE] transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-[#94A3B8] text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <motion.span
                      key={tag}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={
                        isInView
                          ? { opacity: 1, scale: 1 }
                          : { opacity: 0, scale: 0.8 }
                      }
                      transition={{ delay: index * 0.1 + tagIndex * 0.05 }}
                      className="px-3 py-1 text-xs rounded-full bg-[#22D3EE]/10 text-[#22D3EE] border border-[#22D3EE]/30"
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>
              </div>

              {/* Glow effect on hover */}
              <motion.div
                className="absolute inset-0 pointer-events-none"
                animate={{
                  boxShadow:
                    hoveredIndex === index
                      ? '0 0 40px rgba(34, 211, 238, 0.3)'
                      : '0 0 0px rgba(34, 211, 238, 0)',
                }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
