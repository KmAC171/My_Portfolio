import { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Mail, Heart, Send, Loader2 } from 'lucide-react';

export function Footer() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const socialLinks = [
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Mail, href: 'mailto:charithkulathunga1@gmail.com', label: 'Email' },
  ];

  const quickLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus('loading');
    setMessage('');

    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus('success');
        setMessage("ස්තූතියි! ඔයා සාර්ථකව සම්බන්ධ වුණා.");
        setEmail('');
      } else {
        setStatus('error');
        setMessage(data.error || "අසාර්ථකයි! පසුව උත්සාහ කරන්න.");
      }
    } catch (err) {
      setStatus('error');
      setMessage("Error එකක් සිදු වුණා. පසුව උත්සාහ කරන්න.");
    }
  };

  return (
    <footer className="bg-[#0F172A] border-t border-[#1F2937] py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 mb-8">
          
          {/* Brand & Socials */}
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
          <div className="md:pl-10">
            <h3 className="text-lg font-bold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <motion.a
                    href={link.href}
                    className="text-[#94A3B8] hover:text-[#22D3EE] transition-colors duration-300 inline-block"
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

          {/* Newsletter Section */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4">Stay Updated</h3>
            <p className="text-[#94A3B8] mb-4 text-sm">
              Subscribe to get the latest updates and news.
            </p>
            <form onSubmit={handleSubscribe} className="space-y-3">
              <div className="flex">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="flex-1 px-4 py-2 bg-[#111827] border border-[#1F2937] rounded-l-lg outline-none focus:border-[#22D3EE] text-white transition-all duration-300"
                />
                <motion.button
                  type="submit"
                  disabled={status === 'loading'}
                  className="px-6 py-2 bg-gradient-to-r from-[#06B6D4] to-[#22D3EE] text-[#0F172A] font-bold rounded-r-lg disabled:opacity-50"
                  whileHover={{
                    boxShadow: '0 0 20px rgba(34, 211, 238, 0.5)',
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  {status === 'loading' ? (
                    <Loader2 size={18} className="animate-spin" />
                  ) : (
                    <Send size={18} />
                  )}
                </motion.button>
              </div>
              
              {/* Status Message */}
              {message && (
                <motion.p 
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`text-xs ${status === 'success' ? 'text-cyan-400' : 'text-red-400'}`}
                >
                  {message}
                </motion.p>
              )}
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#1F2937] text-center">
          <p className="text-[#94A3B8] flex items-center justify-center space-x-2 text-sm">
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
            <span>by Charith Kulathunga © {new Date().getFullYear()}. All rights reserved.</span>
          </p>
        </div>
      </div>
    </footer>
  );
}