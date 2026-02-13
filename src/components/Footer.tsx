import { motion } from 'motion/react';
import { Github, Linkedin, Twitter, Mail, Heart } from 'lucide-react';

export function Footer() {
  const socialLinks = [
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Mail, href: '#', label: 'Email' },
  ];

  const quickLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="bg-[#0F172A] border-t border-[#1F2937] py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 mb-8">
          {/* Brand */}
          <div>
            <motion.div
              className="text-2xl font-bold bg-gradient-to-r from-[#06B6D4] to-[#22D3EE] bg-clip-text text-transparent mb-4"
              whileHover={{ scale: 1.05 }}
            >
              Portfolio
            </motion.div>
            <p className="text-[#94A3B8] mb-6">
              Crafting digital experiences with passion and precision.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  className="w-10 h-10 rounded-full bg-[#1F2937] flex items-center justify-center text-[#CBD5E1] hover:text-[#22D3EE] transition-colors duration-300"
                  whileHover={{
                    scale: 1.1,
                    boxShadow: '0 0 20px rgba(34, 211, 238, 0.5)',
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon size={18} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <motion.a
                    href={link.href}
                    className="text-[#94A3B8] hover:text-[#22D3EE] transition-colors duration-300"
                    whileHover={{ x: 5 }}
                    onClick={(e) => {
                      e.preventDefault();
                      const element = document.querySelector(link.href);
                      element?.scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    {link.label}
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-bold mb-4">Stay Updated</h3>
            <p className="text-[#94A3B8] mb-4">
              Subscribe to get the latest updates and news.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 bg-[#1F2937] border border-[#22D3EE]/30 rounded-l-lg outline-none focus:border-[#22D3EE] transition-colors duration-300"
              />
              <motion.button
                className="px-6 py-2 bg-gradient-to-r from-[#06B6D4] to-[#22D3EE] text-[#0F172A] font-medium rounded-r-lg"
                whileHover={{
                  boxShadow: '0 0 20px rgba(34, 211, 238, 0.5)',
                }}
                whileTap={{ scale: 0.95 }}
              >
                Subscribe
              </motion.button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#1F2937] text-center">
          <p className="text-[#94A3B8] flex items-center justify-center space-x-2">
            <span>Made with</span>
            <motion.span
              animate={{
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
              }}
            >
              <Heart className="text-[#22D3EE]" size={16} fill="currentColor" />
            </motion.span>
            <span>by Alex Johnson © 2026. All rights reserved.</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
