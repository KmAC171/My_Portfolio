import { useState } from 'react';
import { motion } from 'motion/react';
import { LucideIcon, Loader2, Check } from 'lucide-react';

interface AnimatedButtonProps {
  children: React.ReactNode;
  onClick: () => void;
  variant?: 'primary' | 'secondary';
  icon?: LucideIcon;
  type?: 'button' | 'submit';
}

export function AnimatedButton({
  children,
  onClick,
  variant = 'primary',
  icon: Icon,
  type = 'button',
}: AnimatedButtonProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleClick = async () => {
    if (isLoading || isSuccess) return;

    setIsLoading(true);

    // Simulate download/action
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsLoading(false);
    setIsSuccess(true);

    // Reset after 3 seconds
    setTimeout(() => {
      setIsSuccess(false);
    }, 3000);

    onClick();
  };

  const isPrimary = variant === 'primary';

  return (
    <motion.button
      type={type}
      onClick={handleClick}
      disabled={isLoading || isSuccess}
      className={`
        relative px-8 py-4 rounded-lg font-medium overflow-hidden
        ${
          isPrimary
            ? 'bg-gradient-to-r from-[#06B6D4] to-[#22D3EE] text-[#0F172A]'
            : 'bg-[#1F2937] text-[#F8FAFC] border-2 border-[#22D3EE]'
        }
        transition-all duration-300
        disabled:opacity-50 disabled:cursor-not-allowed
      `}
      whileHover={{
        scale: isLoading || isSuccess ? 1 : 1.05,
        boxShadow: isLoading || isSuccess
          ? undefined
          : isPrimary
          ? '0 0 30px rgba(34, 211, 238, 0.6)'
          : '0 0 20px rgba(34, 211, 238, 0.4)',
      }}
      whileTap={{
        scale: isLoading || isSuccess ? 1 : 0.95,
      }}
      transition={{ duration: 0.3 }}
    >
      {/* Shimmer effect */}
      {isPrimary && !isLoading && !isSuccess && (
        <motion.div
          className="absolute inset-0 w-1/2 bg-gradient-to-r from-transparent via-white/30 to-transparent"
          initial={{ x: '-100%' }}
          whileHover={{
            x: '200%',
          }}
          transition={{ duration: 0.6 }}
        />
      )}

      {/* Button content */}
      <span className="relative flex items-center justify-center space-x-2">
        {isLoading ? (
          <>
            <Loader2 className="animate-spin" size={20} />
            <span>
              {children === 'Download CV'
                ? 'Downloading...'
                : children === 'Send Message'
                ? 'Sending...'
                : 'Loading...'}
            </span>
          </>
        ) : isSuccess ? (
          <>
            <Check size={20} />
            <span>
              {children === 'Download CV'
                ? 'Downloaded'
                : children === 'Send Message'
                ? 'Sent!'
                : 'Success!'}
            </span>
          </>
        ) : (
          <>
            <span>{children}</span>
            {Icon && (
              <motion.div
                whileHover={{ x: 5 }}
                transition={{ duration: 0.3 }}
              >
                <Icon size={20} />
              </motion.div>
            )}
          </>
        )}
      </span>

      {/* Ripple effect on click */}
      {!isLoading && !isSuccess && (
        <motion.span
          className="absolute inset-0 bg-white/20 rounded-full"
          initial={{ scale: 0, opacity: 1 }}
          whileTap={{
            scale: 2,
            opacity: 0,
          }}
          transition={{ duration: 0.5 }}
        />
      )}
    </motion.button>
  );
}
