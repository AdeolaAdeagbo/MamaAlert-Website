import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, Heart, Flower2, Baby, Bell, LocateFixed, AlertTriangle, Activity, Calendar, Lock, Users, Sparkles, CheckCircle } from 'lucide-react';
import AnimatedSection from '@/components/AnimatedSection';
import usePageSEO from '@/hooks/use-page-seo';
import nigerianPregnantPortrait from '@/assets/nigerian-pregnant-portrait.jpg';
import menstrualModeWoman from '@/assets/menstrual-mode-woman.jpg';
import modePostpartumWoman from '@/assets/mode-postpartum-woman.jpg';

const modeFeatures = [
  {
    title: 'Menstrual Mode',
    tagline: 'Track Your Cycle',
    description: 'Understand your body with smart cycle tracking, symptom logging, and personalized insights.',
    icon: <Flower2 className="w-6 h-6" />,
    image: menstrualModeWoman,
    color: 'menstrual' as const,
    features: [
      { icon: <Activity className="w-5 h-5" />, title: 'Cycle & Symptom Tracking', description: 'Log periods, symptoms, mood, and energy levels with smart predictions.' },
      { icon: <Bell className="w-5 h-5" />, title: 'Smart Period Alerts', description: 'Get timely reminders for upcoming periods, fertile windows, and medication.' },
      { icon: <Calendar className="w-5 h-5" />, title: 'Appointment Management', description: 'Schedule and track gynecology appointments with automated reminders.' },
      { icon: <Users className="w-5 h-5" />, title: 'Community Support', description: 'Connect with other women and healthcare professionals in your area.' },
    ],
  },
  {
    title: 'Pregnancy Mode',
    tagline: 'Stay Ahead of Risks',
    description: 'Protect your baby with AI-powered health tracking, emergency SOS, and 24/7 support.',
    icon: <Heart className="w-6 h-6" />,
    image: nigerianPregnantPortrait,
    color: 'pregnancy' as const,
    features: [
      { icon: <AlertTriangle className="w-5 h-5" />, title: 'Emergency SOS & USSD', description: 'One-tap emergency contacts with GPS sharing and USSD dialing (*123*456#).' },
      { icon: <Sparkles className="w-5 h-5" />, title: 'Iyabot Voice Assistant', description: 'Multilingual AI companion that works offline in African languages.' },
      { icon: <Bell className="w-5 h-5" />, title: 'Health Milestone Alerts', description: 'Personalized notifications for check-ups, medications, and milestones.' },
      { icon: <LocateFixed className="w-5 h-5" />, title: 'Nearby Healthcare Finder', description: 'Locate hospitals, pharmacies, and clinics with real-time availability.' },
    ],
  },
  {
    title: 'Postpartum Mode',
    tagline: 'Heal Strong',
    description: 'Thrive after birth with recovery tracking, mental health support, and baby milestones.',
    icon: <Baby className="w-6 h-6" />,
    image: modePostpartumWoman,
    color: 'postpartum' as const,
    features: [
      { icon: <Activity className="w-5 h-5" />, title: 'Recovery Tracking', description: 'Monitor your physical and emotional recovery with daily check-ins.' },
      { icon: <Heart className="w-5 h-5" />, title: 'Mental Health Support', description: 'Mood tracking, guided exercises, and access to postpartum specialists.' },
      { icon: <Baby className="w-5 h-5" />, title: 'Baby Milestone Tracker', description: 'Track feeding, sleep, growth, and developmental milestones.' },
      { icon: <Lock className="w-5 h-5" />, title: 'Privacy & Security', description: 'End-to-end encryption and HIPAA-compliant storage for all health data.' },
    ],
  },
];

const colorMap = {
  menstrual: { bg: 'bg-menstrual', text: 'text-menstrual', border: 'border-menstrual/30', bgLight: 'bg-menstrual/10', bullet: 'bg-menstrual' },
  pregnancy: { bg: 'bg-pregnancy', text: 'text-pregnancy', border: 'border-pregnancy/30', bgLight: 'bg-pregnancy/10', bullet: 'bg-pregnancy' },
  postpartum: { bg: 'bg-postpartum', text: 'text-postpartum', border: 'border-postpartum/30', bgLight: 'bg-postpartum/10', bullet: 'bg-postpartum' },
};

const Features = () => {
  usePageSEO({ title: 'Features', description: 'Explore MamaAlert features: smart health alerts, emergency SOS, Iyabot AI assistant, and more — across menstrual, pregnancy, and postpartum modes.' });
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative pt-16 pb-12 lg:pt-24 lg:pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center space-x-3 bg-primary/10 text-primary px-5 py-2.5 rounded-full text-sm font-medium mb-8">
              <Heart className="w-5 h-5" />
              <span>Life-Saving Features</span>
            </div>
            
            <h1 className="font-serif text-5xl sm:text-6xl lg:text-[72px] text-foreground leading-[1.05] mb-8 tracking-tight">
              Features that
              <br />
              <span className="text-primary italic">save lives</span>
            </h1>
            
            <p className="text-lg sm:text-xl text-muted-foreground mb-6 leading-relaxed max-w-2xl mx-auto">
              From menstrual tracking to pregnancy care and postpartum recovery — every feature is designed to support mothers at every stage.
            </p>

            <div className="flex flex-wrap justify-center gap-3 mb-10">
              <span className="px-4 py-1.5 rounded-full text-sm font-medium bg-menstrual/10 text-menstrual">Menstrual Mode</span>
              <span className="px-4 py-1.5 rounded-full text-sm font-medium bg-pregnancy/10 text-pregnancy">Pregnancy Mode</span>
              <span className="px-4 py-1.5 rounded-full text-sm font-medium bg-postpartum/10 text-postpartum">Postpartum Mode</span>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Mode Feature Lists */}
      <section className="py-12 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <div className="space-y-16 lg:space-y-24">
            {modeFeatures.map((mode, i) => {
              const colors = colorMap[mode.color];
              return (
                <AnimatedSection key={i} delay={i * 0.1}>
                  <div className="grid lg:grid-cols-[280px_1fr] gap-8 lg:gap-12 items-start">
                    {/* Mode Header with Image */}
                    <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
                      <div className="relative w-full max-w-[280px] aspect-square rounded-3xl overflow-hidden mb-5 shadow-lg">
                        <img src={mode.image} alt={mode.title} className="w-full h-full object-cover" />
                        <div className={`absolute top-4 left-4 ${colors.bg} text-white px-3 py-1.5 rounded-full text-xs font-semibold flex items-center gap-1.5`}>
                          {mode.icon}
                          {mode.title}
                        </div>
                      </div>
                      <h2 className={`font-serif text-2xl lg:text-3xl ${colors.text} mb-1`}>{mode.tagline}</h2>
                      <p className="text-muted-foreground text-sm leading-relaxed">{mode.description}</p>
                    </div>

                    {/* Feature List */}
                    <div className="space-y-0">
                      {mode.features.map((feature, idx) => (
                        <div
                          key={idx}
                          className={`flex items-start gap-4 py-5 ${idx !== mode.features.length - 1 ? 'border-b border-border/50' : ''}`}
                        >
                          <div className={`flex-shrink-0 w-10 h-10 rounded-xl ${colors.bgLight} ${colors.text} flex items-center justify-center mt-0.5`}>
                            {feature.icon}
                          </div>
                          <div>
                            <h3 className="font-semibold text-foreground mb-1">{feature.title}</h3>
                            <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-28 bg-primary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="max-w-4xl mx-auto text-center">
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-foreground mb-8 leading-tight">
              Ready to experience
              <br />
              <span className="italic text-primary">MamaAlert?</span>
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
              Join thousands of women already using MamaAlert for cycle tracking, pregnancy care, and postpartum recovery.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="h-14 px-10 rounded-2xl text-base shadow-lg gap-2" asChild>
                <a href="https://mamalert.com/app" target="_blank" rel="noopener noreferrer">
                  Download App
                  <ArrowRight className="w-5 h-5" />
                </a>
              </Button>
              <Button variant="outline" size="lg" className="h-14 px-10 rounded-2xl text-base" asChild>
                <Link to="/about">Our Story</Link>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default Features;
