import WaitlistForm from '@/components/WaitlistForm';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Heart, Shield, Clock, Users, Star, Check, Smartphone } from 'lucide-react';

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
      text: "As a new mother in Lagos, having an app that understands Nigerian maternal health challenges is exactly what I need. MamaAlert will be a game-changer.",
      author: "Adunni O.",
      location: "Lagos, Nigeria"
    },
    {
      text: "Living in Abuja with my newborn, the emergency response feature gives me confidence knowing help is just one tap away. I can't wait for this to launch!",
      author: "Kemi A.",
      location: "Abuja, Nigeria"
    },
    {
      text: "Finally, a health app that considers the unique needs of African mothers. The multilingual support and offline features are perfect for our communities.",
      author: "Fatima I.",
      location: "Kano, Nigeria"
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
      <section className="py-16 sm:py-24 bg-gradient-to-br from-primary/5 via-background to-accent">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Smartphone className="w-4 h-4" />
              <span>Coming November 2025</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-foreground leading-tight">
              Be First to Experience MamaAlert
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground mb-8 leading-relaxed">
              Join thousands of mothers on the waitlist for the smartest pregnancy and maternal health companion.
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
          </div>
        </div>
      </section>

      {/* Waitlist Form Section */}
      <section className="py-16 bg-background border-y border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                Secure Your Early Access
              </h2>
              <p className="text-lg text-muted-foreground">
                Join the waitlist to get exclusive early access when MamaAlert launches.
              </p>
            </div>
            <div className="bg-card border border-border rounded-2xl p-8 shadow-card">
              <WaitlistForm 
                title=""
                description=""
                compact={false}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 sm:py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Early Access Benefits
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Be among the first to experience features designed specifically for maternal health.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center border border-border bg-card hover:shadow-card transition-all duration-300">
                <CardContent className="pt-8 pb-6 px-6">
                  <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-base font-semibold text-foreground mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Preview */}
      <section className="py-16 sm:py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                Powerful Features for Modern Mothers
              </h2>
              <p className="text-lg text-muted-foreground">
                Everything you need for a safe and healthy pregnancy journey.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3 p-4 rounded-xl bg-muted/50 hover:bg-muted transition-colors">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 text-primary-foreground" />
                  </div>
                  <span className="text-foreground text-sm font-medium">{feature}</span>
                </div>
              ))}
            </div>

            <div className="text-center mt-10">
              <Button size="lg" variant="outline" asChild>
                <Link to="/features">Explore All Features</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 sm:py-20 bg-accent/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Trusted by Mothers Everywhere
            </h2>
            <p className="text-lg text-muted-foreground">
              See what mothers on the waitlist are saying
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border border-border bg-card shadow-sm hover:shadow-card transition-shadow">
                <CardContent className="p-6">
                  <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                    "{testimonial.text}"
                  </p>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                      <Heart className="w-5 h-5 text-primary" />
                    </div>
                    <div className="text-sm">
                      <div className="font-semibold text-foreground">
                        {testimonial.author}
                      </div>
                      <div className="text-muted-foreground text-xs">
                        {testimonial.location}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-primary via-primary to-primary-variant text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Ready to Join 10,000+ Mothers?
            </h2>
            <p className="text-lg text-primary-foreground/90 mb-8">
              Be part of the future of maternal health. Join the waitlist today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="text-base px-8" asChild>
                <Link to="#" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
                  Join Waitlist Now
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="text-base px-8 bg-transparent border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10" asChild>
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