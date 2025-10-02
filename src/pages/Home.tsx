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
      <section className="relative overflow-hidden bg-gradient-to-b from-background to-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-32 sm:py-40 lg:py-48">
          <div className="max-w-3xl mx-auto text-center">
            <div className="animate-fade-in space-y-8">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground tracking-tight">
                Smart care for{' '}
                <span className="text-primary">mothers</span>
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
                Health monitoring, emergency support, and timely reminders—all in one place.
              </p>
              <div className="pt-4">
                <Button size="lg" className="text-base px-8 h-12" asChild>
                  <Link to="/waitlist">Join Waitlist</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 sm:py-32 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <div key={index} className="space-y-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <feature.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-24 sm:py-32 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-3 gap-8 sm:gap-12 text-center">
              <div className="space-y-2">
                <div className="text-3xl sm:text-4xl font-bold text-foreground">24/7</div>
                <p className="text-sm text-muted-foreground">Support</p>
              </div>
              <div className="space-y-2">
                <div className="text-3xl sm:text-4xl font-bold text-foreground">Secure</div>
                <p className="text-sm text-muted-foreground">& Private</p>
              </div>
              <div className="space-y-2">
                <div className="text-3xl sm:text-4xl font-bold text-foreground">10K+</div>
                <p className="text-sm text-muted-foreground">On Waitlist</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 sm:py-32 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center space-y-8">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
                Join the waitlist
              </h2>
              <p className="text-lg text-primary-foreground/90 max-w-xl mx-auto">
                Be among the first to experience MamaAlert when we launch.
              </p>
              <div className="max-w-md mx-auto pt-4">
                <WaitlistForm 
                  title=""
                  description=""
                  compact={true}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;