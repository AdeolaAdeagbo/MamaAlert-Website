import { Heart, Baby, Flower2 } from 'lucide-react';
import AnimatedSection from '@/components/AnimatedSection';
import modeMenstrualWoman from '@/assets/mode-menstrual-woman.jpg';
import nigerianPregnantPortrait from '@/assets/nigerian-pregnant-portrait.jpg';
import modePostpartumWoman from '@/assets/mode-postpartum-woman.jpg';
import billboard from '@/assets/mamaalert-billboard.png';

const modes = [
  {
    title: 'Menstrual Mode',
    tagline: 'Track Your Cycle',
    description: 'Understand your body with smart cycle tracking, symptom logging, and personalized insights.',
    color: 'menstrual' as const,
    icon: <Flower2 className="w-6 h-6" />,
    image: modeMenstrualWoman,
  },
  {
    title: 'Pregnancy Mode',
    tagline: 'Stay Ahead of Risks',
    description: 'Protect your baby with AI-powered health tracking, emergency SOS, and 24/7 support.',
    color: 'pregnancy' as const,
    icon: <Heart className="w-6 h-6" />,
    image: nigerianPregnantPortrait,
  },
  {
    title: 'Postpartum Mode',
    tagline: 'Heal Strong',
    description: 'Thrive after birth with recovery tracking, mental health support, and baby milestones.',
    color: 'postpartum' as const,
    icon: <Baby className="w-6 h-6" />,
    image: modePostpartumWoman,
  },
];

const colorMap = {
  menstrual: {
    bg: 'bg-menstrual',
    bgLight: 'bg-menstrual-light',
    text: 'text-menstrual',
    border: 'border-menstrual/30',
    ring: 'ring-menstrual/20',
    bgIcon: 'bg-menstrual/10',
  },
  pregnancy: {
    bg: 'bg-pregnancy',
    bgLight: 'bg-pregnancy-light',
    text: 'text-pregnancy',
    border: 'border-pregnancy/30',
    ring: 'ring-pregnancy/20',
    bgIcon: 'bg-pregnancy/10',
  },
  postpartum: {
    bg: 'bg-postpartum',
    bgLight: 'bg-postpartum-light',
    text: 'text-postpartum',
    border: 'border-postpartum/30',
    ring: 'ring-postpartum/20',
    bgIcon: 'bg-postpartum/10',
  },
};

const ModesShowcase = () => {
  return (
    <section className="py-12 lg:py-16 pb-6 lg:pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* Billboard banner */}
        <AnimatedSection className="max-w-5xl mx-auto mb-16">
          <div className="rounded-3xl overflow-hidden shadow-xl">
            <img
              src={billboard}
              alt="MamaAlert — Menstrual, Pregnancy, and Postpartum modes"
              className="w-full h-auto"
            />
          </div>
        </AnimatedSection>

      </div>
    </section>
  );
};

export default ModesShowcase;
