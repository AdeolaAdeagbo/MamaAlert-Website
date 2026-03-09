import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, Heart, Quote, Download, Flower2, Baby, MapPin, Activity, Shield, Bell, CheckCircle2 } from 'lucide-react';
import nigerianPregnantPortrait from '@/assets/nigerian-pregnant-portrait.jpg';
import nigerianNursePortrait from '@/assets/nigerian-nurse-portrait.jpg';
import nigerianHealthcareCheckup from '@/assets/nigerian-healthcare-checkup.jpg';
import AnimatedSection from '@/components/AnimatedSection';
import usePageSEO from '@/hooks/use-page-seo';
import blackWomanSmile1 from '@/assets/black-woman-smile-1.jpg';
import teamBoluwatife from '@/assets/team-boluwatife.png';

const About = () => {
  usePageSEO({ title: 'About Us', description: 'Learn about MamaAlert\'s mission to support every woman through menstrual health, pregnancy, and postpartum recovery in Africa.' });
  const values = [
    { icon: <MapPin className="w-7 h-7 text-primary" />, title: 'Community First', description: 'Building a supportive network where women can access help and connect with resources instantly.' },
    { icon: <Activity className="w-7 h-7 text-primary" />, title: 'Precision Health', description: 'Using technology to provide timely, relevant, and actionable health insights when they matter most.' },
    { icon: <Shield className="w-7 h-7 text-primary" />, title: 'Excellence', description: 'Committed to the highest standards of safety, privacy, and reliability in women\'s health technology.' },
    { icon: <Bell className="w-7 h-7 text-primary" />, title: 'Compassionate Care', description: 'Every feature is designed with deep empathy for the unique challenges women face at every stage.' },
  ];

  const problems = [
    { title: 'Emergency Response Gaps', description: 'Critical minutes lost during emergencies because support systems aren\'t designed for women\'s health.', color: 'border-l-pregnancy' },
    { title: 'Fragmented Cycle Tracking', description: 'Women struggle to track their cycles, symptoms, and health patterns across disconnected tools.', color: 'border-l-menstrual' },
    { title: 'Limited Postpartum Support', description: 'New mothers are often left without guidance during the critical recovery period after birth.', color: 'border-l-postpartum' },
    { title: 'Generic Solutions', description: 'Existing health apps ignore the unique complexities of women\'s health in Africa.', color: 'border-l-primary' },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="pt-16 pb-12 lg:pt-24 lg:pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="max-w-3xl mx-auto text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-8">
              <Heart className="w-4 h-4" />
              <span>Our Mission</span>
            </div>
            <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl text-foreground leading-[1.05] mb-8 tracking-tight">
              Every woman <span className="text-primary italic">matters</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-6">
              MamaAlert was born from a simple belief: every woman deserves access to the best care, support, and emergency response — at every stage of her journey.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <span className="px-4 py-1.5 rounded-full text-sm font-medium bg-menstrual/10 text-menstrual">Menstrual Care</span>
              <span className="px-4 py-1.5 rounded-full text-sm font-medium bg-pregnancy/10 text-pregnancy">Pregnancy Support</span>
              <span className="px-4 py-1.5 rounded-full text-sm font-medium bg-postpartum/10 text-postpartum">Postpartum Recovery</span>
            </div>
          </AnimatedSection>
        </div>
      </section>


      {/* Problems */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="max-w-2xl mx-auto text-center mb-16">
            <h2 className="font-serif text-4xl sm:text-5xl text-foreground mb-5">
              The problem we're <span className="italic text-primary">solving</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Women's health challenges affect millions — technology hasn't kept pace.
            </p>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {problems.map((p, i) => (
              <AnimatedSection key={i} delay={i * 0.08} className={`bg-card rounded-3xl p-8 shadow-md border-l-4 ${p.color} hover:shadow-lg transition-shadow`}>
                <h3 className="text-lg font-semibold text-foreground mb-2">{p.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{p.description}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 lg:py-28 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="max-w-2xl mx-auto text-center mb-16">
            <h2 className="font-serif text-4xl sm:text-5xl text-foreground mb-5">
              Our core <span className="italic text-primary">values</span>
            </h2>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {values.map((v, i) => (
              <AnimatedSection key={i} delay={i * 0.08} className="group">
                <div className="bg-card rounded-3xl p-8 text-center shadow-md hover:shadow-lg transition-all h-full">
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform">
                    {v.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{v.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{v.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center max-w-2xl mx-auto mb-14">
            <span className="inline-block text-primary text-sm font-semibold tracking-widest uppercase mb-3">How It Works</span>
            <h2 className="font-serif text-4xl sm:text-5xl text-foreground leading-tight">
              Get started in <span className="italic text-primary">3 steps</span>
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { num: '1', icon: <CheckCircle2 className="w-6 h-6 text-primary" />, img: nigerianPregnantPortrait, title: 'Create your profile', desc: 'Tell us about your pregnancy, health history, and preferences.' },
              { num: '2', icon: <Activity className="w-6 h-6 text-primary" />, img: nigerianNursePortrait, title: 'Get personalized care', desc: 'Receive tailored insights, reminders, and emergency support.' },
              { num: '3', icon: <Heart className="w-6 h-6 text-primary" />, img: nigerianHealthcareCheckup, title: 'Stay connected', desc: 'Access 24/7 support and connect with healthcare professionals.' },
            ].map((step, i) => (
              <AnimatedSection key={i} delay={i * 0.12}>
                <div className="group relative bg-card rounded-3xl border border-border/40 overflow-hidden hover:border-primary/30 hover:shadow-xl transition-all h-full">
                  <div className="relative h-48 overflow-hidden">
                    <img src={step.img} alt="" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />
                    <div className="absolute top-4 left-4 w-9 h-9 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold shadow-lg">
                      {step.num}
                    </div>
                  </div>
                  <div className="p-6 pt-2">
                    <div className="flex items-center gap-2 mb-2">
                      {step.icon}
                      <h3 className="text-lg font-semibold text-foreground">{step.title}</h3>
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Founder */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="max-w-3xl mx-auto">
            <div className="bg-card rounded-[2rem] p-10 lg:p-14 shadow-lg relative">
              <Quote className="w-10 h-10 text-primary/15 absolute top-8 left-8" />
              <blockquote className="text-xl lg:text-2xl text-muted-foreground italic text-center pt-6 mb-8 leading-relaxed">
                "Every line of code we write, every feature we design, is guided by one question: 'Will this make a woman's life safer?' That's not just our mission — it's our promise."
              </blockquote>
              <div className="text-center">
                <img src={teamBoluwatife} alt="Boluwatife Adeagbo" className="w-16 h-16 mx-auto mb-3 rounded-full object-cover ring-2 ring-primary/20" />
                <p className="text-foreground font-semibold">Boluwatife Adeagbo</p>
                <p className="text-sm text-primary">Founder of MamaAlert</p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28 bg-primary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-4xl sm:text-5xl text-foreground mb-6 leading-tight">
              Join our <span className="italic text-primary">mission</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-10 max-w-xl mx-auto">
              Whether you're tracking your cycle, expecting, or a new mum — there's a place for you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="h-14 px-10 rounded-2xl text-base shadow-lg gap-2" asChild>
                <a href="https://mamalert.com/app" target="_blank" rel="noopener noreferrer">
                  <Download className="w-5 h-5" />
                  Get Started Free
                </a>
              </Button>
              <Button variant="outline" size="lg" className="h-14 px-10 rounded-2xl text-base" asChild>
                <Link to="/contact">Get in Touch</Link>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default About;
