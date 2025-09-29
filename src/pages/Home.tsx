import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { Heart, Shield, Clock, MapPin, Phone, Bell } from 'lucide-react';
import WaitlistForm from '@/components/WaitlistForm';
import heroImage from '@/assets/hero-maternal-health.jpg';
import heroBackground from '@/assets/hero-background.jpg';

const Home = () => {
  const features = [
    {
      icon: Bell,
      title: "Smart Alerts",
      description: "Intelligent notifications for appointments, medication, and health milestones"
    },
    {
      icon: Phone,
      title: "Emergency Response & USSD",
      description: "Instant emergency contacts, USSD dialing for danger situations, and location sharing"
    },
    {
      icon: MapPin,
      title: "Location Support",
      description: "Find nearby healthcare facilities, pharmacies, and support services"
    },
    {
      icon: Shield,
      title: "Health Tracking",
      description: "Monitor maternal health indicators and receive personalized insights"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-warm">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src={heroBackground} 
            alt="Maternal health background" 
            className="w-full h-full object-cover opacity-30 blur-sm"
          />
          <div className="absolute inset-0 bg-gradient-warm/80"></div>
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left animate-fade-in">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
                Smart Alerts for{' '}
                <span className="text-primary">Maternal Health</span>{' '}
                & Emergency Response
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Empowering mothers with intelligent health monitoring, timely reminders, 
                and instant emergency support. Because every mother deserves the best care.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button size="lg" className="text-lg px-8 py-3" asChild>
                  <Link to="/waitlist">Join Waitlist</Link>
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-8 py-3" asChild>
                  <Link to="/features">Learn More</Link>
                </Button>
              </div>
            </div>
            
            <div className="relative animate-slide-up">
              <div className="relative rounded-3xl overflow-hidden aspect-[4/3]">
                <img 
                  src={heroImage} 
                  alt="Maternal health and care" 
                  className="w-full h-full object-cover object-center opacity-20 mix-blend-multiply"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-primary/10 to-transparent"></div>
                <div className="absolute inset-0 bg-gradient-warm/50"></div>
              </div>
              {/* Floating alert badge */}
              <div className="absolute -top-6 -right-6 bg-primary text-primary-foreground px-6 py-3 rounded-full shadow-lg border-4 border-white">
                <div className="flex items-center space-x-2">
                  <Heart className="w-5 h-5 animate-pulse" />
                  <span className="text-sm font-semibold">Health Alert</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Preview */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Why Choose MamaAlert?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Built specifically for mothers, by people who understand the unique 
              challenges of maternal health and emergency situations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-card transition-all duration-300 border-0 bg-muted/50">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 bg-primary-light rounded-lg flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-20 bg-trust-light">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-16 h-16 bg-trust rounded-full flex items-center justify-center mx-auto mb-6">
              <Shield className="w-8 h-8 text-trust-foreground" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
              Trusted by Healthcare Professionals
            </h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              MamaAlert is designed in collaboration with maternal health experts, 
              emergency response professionals, and real mothers. Your safety and 
              privacy are our top priorities.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-trust mb-2">24/7</div>
                <p className="text-muted-foreground">Emergency Support</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-trust mb-2">100%</div>
                <p className="text-muted-foreground">HIPAA Compliant</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-trust mb-2">10K+</div>
                <p className="text-muted-foreground">Mothers on Waitlist</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                Ready to Join the MamaAlert Community?
              </h2>
              <p className="text-xl text-primary-foreground/90 mb-8">
                Be among the first to experience the future of maternal health monitoring 
                and emergency response. Join thousands of mothers already on our waitlist.
              </p>
              <Button 
                variant="secondary" 
                size="lg" 
                className="text-lg px-8 py-3"
                asChild
              >
                <Link to="/about">Learn Our Story</Link>
              </Button>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <WaitlistForm 
                title="Get Early Access"
                description="Join the waitlist and be notified when MamaAlert launches."
                compact={false}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;