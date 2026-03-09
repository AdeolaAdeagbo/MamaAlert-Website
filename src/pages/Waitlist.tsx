import WaitlistForm from '@/components/WaitlistForm';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Heart, Shield, Clock, Users, Star, Smartphone, Gift } from 'lucide-react';
import AnimatedSection from '@/components/AnimatedSection';
import flaskMockup from '@/assets/mamaalert-flask-mockup.png';
import nigerianPregnantPortrait from '@/assets/nigerian-pregnant-portrait.jpg';
import africanPregnantMother from '@/assets/african-pregnant-mother.jpg';

const Waitlist = () => {
  const keyFeatures = [
    { icon: Heart, text: "Smart health alerts and reminders" },
    { icon: Shield, text: "One-tap emergency response system" },
    { icon: Star, text: "Early access and beta testing" },
    { icon: Users, text: "24/7 support community access" }
  ];

  const testimonials = [
    {
      text: "As a new mother in Lagos, having an app that understands Nigerian maternal health challenges is exactly what I need.",
      author: "Adunni O.",
      location: "Lagos, Nigeria",
      image: nigerianPregnantPortrait
    },
    {
      text: "The emergency response feature gives me confidence knowing help is just one tap away. Can't wait for launch!",
      author: "Kemi A.",
      location: "Abuja, Nigeria",
      image: africanPregnantMother
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-16 sm:py-24 bg-gradient-to-br from-primary/5 via-background to-accent">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Smartphone className="w-4 h-4" />
              <span>Coming November 2025</span>
            </div>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-foreground mb-6 leading-tight">
              Be First to Experience <span className="italic text-primary">MamaAlert</span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground mb-8 leading-relaxed">
              Join thousands of women on the waitlist for the smartest women's health companion — covering menstrual tracking, pregnancy, and postpartum care.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 text-sm text-muted-foreground justify-center">
              <div className="flex items-center space-x-2">
                <Clock className="w-5 h-5 text-primary" />
                <span>Launch: Nov 15, 2025</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="w-5 h-5 text-primary" />
                <span>10,000+ joined</span>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Waitlist Form Section */}
      <section className="py-16 bg-background border-y border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="max-w-2xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="font-serif text-3xl sm:text-4xl text-foreground mb-4">
                Secure Your <span className="italic text-primary">Early Access</span>
              </h2>
              <p className="text-lg text-muted-foreground">
                Join the waitlist to get exclusive early access when MamaAlert launches.
              </p>
            </div>
            <div className="bg-card border border-border rounded-3xl p-8 shadow-lg">
              <WaitlistForm 
                title=""
                description=""
                compact={false}
              />
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="font-serif text-3xl sm:text-4xl text-foreground mb-4">
                Why Join the <span className="italic text-primary">Waitlist?</span>
              </h2>
              <p className="text-lg text-muted-foreground">
                Get early access to powerful features designed for maternal health.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {keyFeatures.map((feature, index) => (
                <AnimatedSection key={index} delay={index * 0.1}>
                  <div className="flex items-center space-x-4 p-5 rounded-2xl bg-card border border-border hover:shadow-lg transition-all">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <feature.icon className="w-6 h-6 text-primary" />
                    </div>
                    <span className="text-foreground font-medium">{feature.text}</span>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {testimonials.map((testimonial, index) => (
                <AnimatedSection key={index} delay={index * 0.15}>
                  <Card className="border border-border bg-card rounded-3xl h-full">
                    <CardContent className="p-8">
                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        "{testimonial.text}"
                      </p>
                      <div className="flex items-center space-x-4">
                        <img 
                          src={testimonial.image} 
                          alt={testimonial.author}
                          className="w-12 h-12 rounded-full object-cover"
                        />
                        <div className="text-sm">
                          <div className="font-semibold text-foreground">{testimonial.author}</div>
                          <div className="text-muted-foreground text-xs">{testimonial.location}</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section className="py-16 sm:py-24 bg-gradient-to-br from-primary/5 via-background to-accent/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
                <Heart className="w-8 h-8 text-primary" />
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-foreground mb-6">
                💗 Join the <span className="italic text-primary">MamaAlert</span> Community
              </h2>
              <div className="max-w-3xl mx-auto space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>
                  Every mother deserves care, warmth, and connection. When you refer another mama to sign up on MamaAlert, you're not just growing our network — you're saving lives through shared awareness.
                </p>
                <p className="font-medium text-foreground">
                  As a thank you, you could receive our limited-edition MamaAlert Heat Flask — designed with love, for the journey of motherhood.
                </p>
                <p className="italic">
                  Let's build a community where support flows — one mama at a time.
                </p>
              </div>
            </div>

            {/* Flask Image */}
            <div className="mb-12 max-w-2xl mx-auto">
              <div className="relative rounded-3xl overflow-hidden shadow-xl">
                <img 
                  src={flaskMockup} 
                  alt="MamaAlert limited edition heat flasks in pink and cream" 
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent pointer-events-none"></div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="h-14 px-10 text-base rounded-full shadow-lg hover:shadow-xl transition-all" asChild>
                <Link to="#" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
                  <Heart className="w-5 h-5 mr-2" />
                  Join the Movement
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="h-14 px-10 text-base rounded-full" asChild>
                <Link to="/contact">
                  <Gift className="w-5 h-5 mr-2" />
                  Refer a Mama
                </Link>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default Waitlist;
