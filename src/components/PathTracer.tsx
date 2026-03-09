import { motion } from 'framer-motion';

/**
 * A heart icon that flies along a curved SVG path, leaving a glowing trail.
 * Loops infinitely. Place inside a relatively-positioned container.
 */
const PathTracer = ({ className = '' }: { className?: string }) => {
  const pathD =
    'M 50,20 C 150,-40 250,100 400,40 C 550,-20 650,120 800,60 C 950,0 1050,100 1200,50 C 1350,0 1400,80 1500,40';

  return (
    <div className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`}>
      <svg
        viewBox="0 0 1500 140"
        fill="none"
        preserveAspectRatio="none"
        className="absolute inset-0 w-full h-full"
      >
        {/* Trail line that draws itself */}
        <motion.path
          d={pathD}
          stroke="hsl(var(--primary) / 0.15)"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: [0, 1, 1, 0] }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
            times: [0, 0.4, 0.6, 1],
          }}
        />

        {/* Glowing trail behind the icon */}
        <motion.path
          d={pathD}
          stroke="hsl(var(--primary) / 0.3)"
          strokeWidth="4"
          strokeLinecap="round"
          fill="none"
          filter="url(#glow)"
          initial={{ pathLength: 0, pathOffset: 0 }}
          animate={{ pathLength: [0, 0.15, 0.15, 0], pathOffset: [0, 0.85, 0.85, 1] }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
            times: [0, 0.4, 0.6, 1],
          }}
        />

        <defs>
          <filter id="glow">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
      </svg>

      {/* Flying heart icon */}
      <motion.div
        className="absolute"
        style={{ width: 28, height: 28 }}
        animate={{
          // Move along the approximate path positions
          x: ['3%', '26%', '53%', '80%', '100%', '3%'],
          y: ['14%', '28%', '5%', '42%', '28%', '14%'],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        <motion.div
          animate={{ scale: [1, 1.2, 1], rotate: [0, 10, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <svg width="28" height="28" viewBox="0 0 24 24" fill="hsl(var(--primary))" className="drop-shadow-lg">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
          </svg>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default PathTracer;
