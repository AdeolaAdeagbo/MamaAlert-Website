import { motion } from 'framer-motion';

const particles = Array.from({ length: 12 }, (_, i) => ({
  id: i,
  size: Math.random() * 6 + 3,
  x: Math.random() * 100,
  delay: Math.random() * 5,
  duration: Math.random() * 6 + 8,
  opacity: Math.random() * 0.3 + 0.1,
}));

const FloatingParticles = ({ className = '' }: { className?: string }) => {
  return (
    <div className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`}>
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-primary"
          style={{
            width: p.size,
            height: p.size,
            left: `${p.x}%`,
            bottom: '-5%',
            opacity: p.opacity,
          }}
          animate={{
            y: [0, -800],
            x: [0, Math.sin(p.id) * 60],
            opacity: [0, p.opacity, p.opacity, 0],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: 'easeOut',
          }}
        />
      ))}
    </div>
  );
};

export default FloatingParticles;
