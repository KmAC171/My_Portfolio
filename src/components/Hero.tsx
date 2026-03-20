import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowRight, Download, Facebook } from 'lucide-react';
import { AnimatedButton } from './AnimatedButton';
// ඔබේ 'profileImage' භාවිතා කරන ආකාරය මෙහිදී වෙනස් වේ.
import profileImage from './images/propic.jpg'; // අලුතින් සාදන ලද 3D ආචරණය සහිත පින්තූරය (save කරගත් පසු)

const jobTitles = [
  'Aspiring Software Engineer',
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
    { Icon: Github, href: 'https://github.com/KmAC171', label: 'GitHub' },
    { Icon: Linkedin, href: 'https://www.linkedin.com/in/charith-kulathunga-18959a367', label: 'LinkedIn' },
    { Icon: Facebook, href: 'https://www.facebook.com/charith.kulasekara.35', label: 'Facebook' },
    {
      Icon: Mail,
      href: 'mailto:charithkulathunga1@gmail.com?subject=Hire%20Me&body=Hi Charith, I visited your portfolio...',
      label: 'Email'
    },
  ];

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-6 pt-20 bg-[#0F172A]"
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.p className="text-cyan-400 mb-2">
              Hello, I'm
            </motion.p>

            <motion.h1 className="text-5xl md:text-7xl font-bold mb-4 text-white">
              Charith Kulathunga
            </motion.h1>

            <div className="h-12 mb-6">
              <motion.h2 className="text-2xl md:text-3xl text-slate-300">
                {displayedText}
                <motion.span
                  className="inline-block w-0.5 h-8 bg-cyan-400 ml-1"
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.8, repeat: Infinity }}
                />
              </motion.h2>
            </div>

            <motion.p className="text-slate-400 mb-8 max-w-lg">
              Passionate about creating beautiful, functional, and user-centered
              digital experiences. Let's build something amazing together.
            </motion.p>

            {/* SOCIAL ICONS */}
            <div className="flex space-x-4 mb-8">
              {socialIcons.map(({ Icon, href, label }, index) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center text-slate-300 hover:text-cyan-400 transition-all"
                  whileHover={{
                    scale: 1.2,
                    boxShadow: '0 0 20px rgba(34, 211, 238, 0.5)',
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Icon size={20} />
                </motion.a>
              ))}
            </div>

            {/* BUTTONS */}
            <div className="flex flex-wrap gap-4">
              <AnimatedButton variant="primary" icon={Download}>
                Download CV
              </AnimatedButton>

              <AnimatedButton
                variant="secondary"
                onClick={() => {
                  document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
                icon={ArrowRight}
              >
                Get In Touch
              </AnimatedButton>
            </div>
          </motion.div>

          {/* RIGHT SIDE - 3D IMAGE */}
          <motion.div
            className="flex justify-center items-center perspective-[1000px]"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              // Original size but with rounded card effect
              className="relative w-[300px] h-[300px] md:w-[368px] md:h-[380px] rounded-3xl"
              whileHover={{
                // Enhanced 3D tilt interaction
                rotateY: 20,
                rotateX: -10,
                scale: 1.02
              }}
              animate={{
                // Gentle floating animation
                y: [0, -15, 0]
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              {/* ADVANCED 3D GLOW/SHADOW */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-cyan-600 via-sky-500 to-blue-500 blur-3xl opacity-50 transform-gpu rotate-[-10deg]"></div>

              {/* IMAGE CONTAINER */}
              <div className="relative w-full h-full rounded-3xl overflow-hidden bg-slate-800 border-2 border-slate-700/50 shadow-2xl">
                <img
                  src={profileImage}
                  alt="Charith Kulathunga 3D Profile"
                  className="w-full h-full object-cover transform-gpu scale-105"
                />
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}