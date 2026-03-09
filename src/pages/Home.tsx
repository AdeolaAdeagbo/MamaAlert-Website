import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, Download, Star, Shield, Heart, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import AnimatedSection from '@/components/AnimatedSection';
import PathTracer from '@/components/PathTracer';
import FloatingParticles from '@/components/FloatingParticles';
import usePageSEO from '@/hooks/use-page-seo';

import nigerianWomanHero from '@/assets/nigerian-woman-hero.jpg';
import billboard from '@/assets/mamaalert-billboard.png';
import appDashboard from '@/assets/app-dashboard.png';
import appNuraChat from '@/assets/app-nura-chat.png';
import appOnboarding from '@/assets/app-onboarding.png';
import appMenstrualDashboard from '@/assets/app-menstrual-dashboard.png';
import nigerianPregnantPortrait from '@/assets/nigerian-pregnant-portrait.jpg';
import nigerianNursePortrait from '@/assets/nigerian-nurse-portrait.jpg';
import blackWomanSmile1 from '@/assets/black-woman-smile-1.jpg';
import africanWomanSmile from '@/assets/option-1-african-woman.jpg';
import africanPregnantMother from '@/assets/african-pregnant-mother.jpg';
import nigerianHealthcareCheckup from '@/assets/nigerian-healthcare-checkup.jpg';
import teamBoluwatife from '@/assets/team-boluwatife.png';

const Home = () => {
  usePageSEO({ title: 'Home', description: 'MamaAlert is One App. Every stage of motherhood, with cycle tracking, pregnancy care, postpartum recovery, emergency SOS, and AI support.' });
  return (
    <div className="min-h-screen bg-background">
      {/* ── Hero ── */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,hsl(var(--primary)/0.12),transparent)]" />
        
        

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-16 lg:pt-20 lg:pb-24 relative">
          <div className="text-center max-w-3xl mx-auto mb-10">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: -10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-8"
            >
              <motion.span
                animate={{ rotate: [0, 15, -15, 0] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
              >
                <Sparkles className="w-4 h-4" />
              </motion.span>
              <span>Now Available on App Stores</span>
            </motion.div>

            {/* Headline — staggered lines */}
            <h1 className="font-serif text-[2.75rem] sm:text-6xl lg:text-[4.25rem] text-foreground leading-[1.08] tracking-tight mb-6">
              <motion.span
                className="block"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
              >
                One App. Every stage of{' '}
              </motion.span>
              <motion.span
                className="text-primary italic inline-block"
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                animate={{ 
                  opacity: 1, 
                  y: 0, 
                  scale: [1, 1.03, 1],
                }}
                transition={{ 
                  opacity: { duration: 0.7, delay: 0.45 },
                  y: { duration: 0.7, delay: 0.45 },
                  scale: { duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 1.5 },
                }}
              >
                motherhood
              </motion.span>
            </h1>

            {/* Subtext */}
            <motion.p
              className="text-lg lg:text-xl text-muted-foreground leading-relaxed mb-10 max-w-xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              From your first cycle to pregnancy and beyond — MamaAlert adapts to wherever you are in your journey.
            </motion.p>
          </div>

          {/* Billboard */}
          <motion.div
            className="max-w-5xl mx-auto mb-10"
            initial={{ opacity: 0, y: 40, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <div className="rounded-3xl overflow-hidden shadow-xl">
              <img src={billboard} alt="MamaAlert — Menstrual, Pregnancy, and Postpartum modes" className="w-full h-auto" />
            </div>
          </motion.div>

          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
          >
            <div className="flex flex-wrap gap-4 justify-center mb-10">
              <a href="https://play.google.com/store/apps/details?id=com.mamalert.app" target="_blank" rel="noopener noreferrer" className="transition-transform hover:scale-105">
                <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Get it on Google Play" className="h-10" />
              </a>
              <a href="https://apps.apple.com/app/mamalert/id0000000000" target="_blank" rel="noopener noreferrer" className="transition-transform hover:scale-105">
                <img src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" alt="Download on the App Store" className="h-10" />
              </a>
            </div>

            {/* Social proof */}
            <div className="flex items-center gap-6 text-sm text-muted-foreground justify-center">
              <div className="flex -space-x-3">
                <img src={blackWomanSmile1} alt="" className="w-10 h-10 rounded-full object-cover ring-2 ring-background" />
                <img src={africanPregnantMother} alt="" className="w-10 h-10 rounded-full object-cover ring-2 ring-background" />
                <img src={nigerianNursePortrait} alt="" className="w-10 h-10 rounded-full object-cover ring-2 ring-background" />
                <div className="w-10 h-10 rounded-full bg-primary/10 ring-2 ring-background flex items-center justify-center text-xs font-bold text-primary">+5k</div>
              </div>
              <div>
                <div className="flex items-center gap-1 text-foreground font-semibold">
                  <Star className="w-4 h-4 text-primary fill-primary" />
                  4.9
                </div>
                <span className="text-xs">from early users</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Trusted strip ── */}
      <section className="border-y border-border/50 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <AnimatedSection className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
            { value: '10K+', label: 'Mothers Joined' },
            { value: '24/7', label: 'Emergency Support' },
            { value: '6+', label: 'African Languages' },
            { value: '100%', label: 'Private & Secure' }].
            map((stat) =>
            <div key={stat.label}>
                <div className="text-3xl sm:text-4xl font-serif font-medium text-foreground">{stat.value}</div>
                <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
              </div>
            )}
          </AnimatedSection>
        </div>
      </section>

      {/* ── App Preview ── */}
      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="font-serif text-4xl sm:text-5xl text-foreground mb-5">
              See the <span className="italic text-primary">app</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              A glimpse into MamaAlert — from onboarding to daily tracking and AI-powered support.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 max-w-5xl mx-auto items-end">
            {[
              { img: appOnboarding, label: 'Personalized Onboarding', color: 'text-primary' },
              { img: appMenstrualDashboard, label: 'Menstrual Dashboard', color: 'text-menstrual' },
              { img: appNuraChat, label: 'Nura AI Assistant', color: 'text-pregnancy' },
            ].map((screen, i) => (
              <AnimatedSection key={i} delay={i * 0.12} className="flex flex-col items-center">
                <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border border-border/30 bg-card max-w-[260px] w-full">
                  <img src={screen.img} alt={screen.label} className="w-full h-auto" />
                </div>
                <p className={`mt-4 font-semibold text-sm ${screen.color}`}>{screen.label}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}


      {/* ── Testimonials ── */}
      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="font-serif text-4xl sm:text-5xl text-foreground mb-5">
              What mothers are <span className="italic text-primary">saying</span>
            </h2>
            <p className="text-lg text-muted-foreground">Real stories from real mothers using MamaAlert.</p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
            {
              text: "MamaAlert literally saved my life. I had a complication at 2 AM and the SOS feature connected me to help within minutes. Every pregnant woman needs this app.",
              name: "Adunni O.",
              location: "Lagos, Nigeria",
              image: blackWomanSmile1,
              rating: 5
            },
            {
              text: "The health tracking and Iyabot assistant helped me understand what was normal and what wasn't during my first pregnancy. I felt so much less anxious knowing I had support.",
              name: "Kemi A.",
              location: "Abuja, Nigeria",
              image: africanPregnantMother,
              rating: 5
            },
            {
              text: "As a nurse in a rural clinic, I recommend MamaAlert to every expectant mother. The USSD emergency feature works even without internet — that's a game changer for our community.",
              name: "Ngozi E.",
              location: "Enugu, Nigeria",
              image: nigerianNursePortrait,
              rating: 5
            }].
            map((t, i) =>
            <AnimatedSection key={i} delay={i * 0.1}>
                <div className="bg-card rounded-3xl p-8 border border-border/40 hover:shadow-lg transition-all h-full flex flex-col">
                  <div className="flex gap-0.5 mb-4">
                    {Array.from({ length: t.rating }).map((_, j) =>
                  <Star key={j} className="w-4 h-4 text-primary fill-primary" />
                  )}
                  </div>
                  <p className="text-muted-foreground leading-relaxed flex-1 mb-6">"{t.text}"</p>
                  <div className="flex items-center gap-3">
                    <img src={t.image} alt={t.name} className="w-11 h-11 rounded-full object-cover ring-2 ring-border" />
                    <div>
                      <p className="text-sm font-semibold text-foreground">{t.name}</p>
                      <p className="text-xs text-muted-foreground">{t.location}</p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            )}
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <AnimatedSection className="bg-card rounded-[2rem] p-10 lg:p-16 shadow-lg border border-border/30">
              <div className="flex flex-col md:flex-row items-center gap-10">
                <div className="flex-shrink-0">
                  <img
                    src={teamBoluwatife}
                    alt="Boluwatife Adeagbo"
                    className="w-36 h-36 rounded-full object-cover shadow-xl ring-4 ring-primary/20" />
                  
                </div>
                <div>
                  <h2 className="font-serif text-3xl sm:text-4xl text-foreground mb-4">
                    Meet the <span className="italic text-primary">founder</span>
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    MamaAlert was born from a powerful belief: no mother should face her health journey alone. 
                    <strong className="text-foreground"> Boluwatife Adeagbo</strong> combined deep empathy for maternal health 
                    challenges in Africa with technology to create a life-saving platform.
                  </p>
                  <div className="flex items-center gap-3">
                    <span className="text-foreground font-semibold">Boluwatife Adeagbo</span>
                    <span className="text-primary text-sm font-medium">Founder & Developer</span>
                  </div>
                  <a
                    href="https://linkedin.com/in/boluwatifeadeagbo"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-primary hover:underline mt-3">
                    
                    Connect on LinkedIn <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

    </div>);

};

export default Home;
