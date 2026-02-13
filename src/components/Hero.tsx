import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Mail, ArrowRight, Download } from 'lucide-react';
import { AnimatedButton } from './AnimatedButton';
import profileImage from './images/profilepic.png';

const jobTitles = [
  'Full Stack Developer',
  'UI/UX Designer',
  'Creative Developer',
  'Problem Solver',
];

export function Hero() {
  const [titleIndex, setTitleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  // Typing Effect
  useEffect(() => {
    const currentTitle = jobTitles[titleIndex];
    const handleTyping = () => {
      if (!isDeleting && displayedText.length < currentTitle.length) {
        setDisplayedText(currentTitle.slice(0, displayedText.length + 1));
      } else if (!isDeleting && displayedText.length === currentTitle.length) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && displayedText.length > 0) {
        setDisplayedText(currentTitle.slice(0, displayedText.length - 1));
      } else if (isDeleting && displayedText.length === 0) {
        setIsDeleting(false);
        setTitleIndex((prev) => (prev + 1) % jobTitles.length);
      }
    };

    const timeout = setTimeout(handleTyping, isDeleting ? 50 : 100);
    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, titleIndex]);

  const socialIcons = [
    { Icon: Github, href: '#', label: 'GitHub' },
    { Icon: Linkedin, href: '#', label: 'LinkedIn' },
    { Icon: Twitter, href: '#', label: 'Twitter' },
    { Icon: Mail, href: '#', label: 'Email' },
  ];

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-6 pt-20 bg-[#0F172A]"
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <motion.p
              className="text-cyan-400 mb-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Hello, I'm
            </motion.p>

            <motion.h1
              className="text-5xl md:text-7xl font-bold mb-4 text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              Charith Kulathunga
            </motion.h1>

            <div className="h-12 mb-6">
              <motion.h2
                className="text-2xl md:text-3xl text-slate-300"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                {displayedText}
                <motion.span
                  className="inline-block w-0.5 h-8 bg-cyan-400 ml-1"
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.8, repeat: Infinity }}
                />
              </motion.h2>
            </div>

            <motion.p
              className="text-slate-400 mb-8 max-w-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              Passionate about creating beautiful, functional, and user-centered
              digital experiences. Let's build something amazing together.
            </motion.p>

            {/* Social Icons */}
            <motion.div
              className="flex space-x-4 mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              {socialIcons.map(({ Icon, href, label }, index) => (
                <motion.a
                  key={label}
                  href={href}
                  className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center text-slate-300 hover:text-cyan-400 transition-all duration-300"
                  whileHover={{
                    scale: 1.2,
                    boxShadow: '0 0 20px rgba(34, 211, 238, 0.5)',
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 + index * 0.1 }}
                >
                  <Icon size={20} />
                </motion.a>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <AnimatedButton variant="primary" onClick={() => {}} icon={Download}>
                Download CV
              </AnimatedButton>

              <AnimatedButton
                variant="secondary"
                onClick={() => {
                  const element = document.querySelector('#contact');
                  element?.scrollIntoView({ behavior: 'smooth' });
                }}
                icon={ArrowRight}
              >
                Get In Touch
              </AnimatedButton>
            </motion.div>
          </motion.div>

          {/* Right Side - Profile Image */}
          <motion.div
            className="flex justify-center items-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="relative w-80 h-80 md:w-96 md:h-96 rounded-full">
              {/* Glowing Animated Background */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500 via-sky-400 to-blue-400 animate-pulse"></div>

              {/* Profile Image */}
              <div className="relative w-full h-full rounded-full overflow-hidden bg-slate-800">
                <img
  src={profileImage}
  alt="Profile"
  className="w-full h-full object-cover"
/>
              </div>

              {/* Decorative Dots */}
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-3 h-3 rounded-full bg-cyan-400"
                  style={{
                    top: `${20 + i * 30}%`,
                    right: `-${10 + i * 5}%`,
                  }}
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.3,
                  }}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
