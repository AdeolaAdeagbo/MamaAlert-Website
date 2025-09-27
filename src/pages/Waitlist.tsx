import WaitlistForm from '@/components/WaitlistForm';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Heart, Shield, Clock, Users, Star, Check } from 'lucide-react';

const Waitlist = () => {
  const benefits = [
    {
      icon: Star,
      title: "Early Access",
      description: "Be among the first to download and use MamaAlert when it launches"
    },
    {
      icon: Shield,
      title: "Beta Testing",
      description: "Help shape the app with your feedback during our beta testing phase"
    },
    {
      icon: Heart,
      title: "Exclusive Updates",
      description: "Receive behind-the-scenes updates on development and new features"
    },
    {
      icon: Users,
      title: "Community Access",
      description: "Connect with other mothers in our private waitlist community"
    }
  ];

  const testimonials = [
    {
      text: "As a new mom, I'm constantly worried about missing important health milestones. MamaAlert sounds like exactly what I need.",
      author: "Sarah M.",
      location: "California"
    },
    {
      text: "The emergency response feature gives me peace of mind, especially living far from family. Can't wait for this to launch!",
      author: "Jennifer K.",
      location: "Texas"
    },
    {
      text: "Finally, a health app designed specifically for mothers. The waitlist was an easy decision.",
      author: "Maria L.",
      location: "Florida"
    }
  ];

  const features = [
    "Smart health alerts and reminders",
    "One-tap emergency response system",
    "Location-based healthcare finder",
    "Secure health data management",
    "Pregnancy and postpartum tracking",
    "24/7 support community access"
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl sm:text-5xl font-bold mb-6">
                Join the MamaAlert Waitlist
              </h1>
              <p className="text-xl text-primary-foreground/90 mb-8 leading-relaxed">
                Be part of the movement to revolutionize maternal health. Get early access 
                to features that could save lives and transform how mothers receive care and support.
              </p>
              <div className="flex items-center space-x-6 text-lg">
                <div className="flex items-center space-x-2">
                  <Clock className="w-5 h-5" />
                  <span>Launching Q2 2024</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="w-5 h-5" />
                  <span>10,000+ already joined</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <WaitlistForm 
                title="Secure Your Spot"
                description="Join thousands of mothers already on the waitlist for early access to MamaAlert."
                compact={false}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
              Why Join the Waitlist?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Waitlist members get exclusive perks and first access to the features 
              that matter most for maternal health and safety.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center border-0 bg-muted/50 hover:bg-muted/70 transition-all duration-300">
                <CardContent className="pt-8 pb-6">
                  <div className="w-12 h-12 bg-primary-light rounded-lg flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Preview */}
      <section className="py-20 bg-trust-light">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
                What You'll Get Access To
              </h2>
              <p className="text-xl text-muted-foreground">
                MamaAlert is packed with features designed specifically for the 
                unique needs of maternal health and emergency situations.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-trust rounded-full flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-trust-foreground" />
                  </div>
                  <span className="text-foreground font-medium">{feature}</span>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Button size="lg" asChild>
                <Link to="/features">Learn More About Features</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
              What Mothers Are Saying
            </h2>
            <p className="text-xl text-muted-foreground">
              Real feedback from mothers who've joined our waitlist
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-card">
                <CardContent className="p-6">
                  <p className="text-muted-foreground italic mb-4 leading-relaxed">
                    "{testimonial.text}"
                  </p>
                  <div className="text-sm">
                    <div className="font-semibold text-foreground">
                      {testimonial.author}
                    </div>
                    <div className="text-muted-foreground">
                      {testimonial.location}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
                Our Launch Timeline
              </h2>
              <p className="text-xl text-muted-foreground">
                Here's what to expect as we work toward making MamaAlert available to all mothers
              </p>
            </div>

            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-trust rounded-full flex items-center justify-center flex-shrink-0">
                  <Check className="w-6 h-6 text-trust-foreground" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    Q4 2023 - Foundation Complete
                  </h3>
                  <p className="text-muted-foreground">
                    Core platform development, security implementation, and initial testing with healthcare professionals.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-primary-foreground font-bold text-sm">2</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    Q1 2024 - Beta Testing (Current)
                  </h3>
                  <p className="text-muted-foreground">
                    Limited beta release with waitlist members, gathering feedback and refining features based on real user experiences.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-muted-foreground rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-sm">3</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    Q2 2024 - Public Launch
                  </h3>
                  <p className="text-muted-foreground">
                    Full public release with all core features, 24/7 support, and integration with major healthcare systems.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-warm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
              Don't Wait - Join Today
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Every mother deserves the best care and support. Be part of the solution 
              and help us build something truly meaningful for maternal health.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8 py-3" asChild>
                <Link to="#" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
                  Join Waitlist Now
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-3" asChild>
                <Link to="/about">Learn Our Story</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Waitlist;