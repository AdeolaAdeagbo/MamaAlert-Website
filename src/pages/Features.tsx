import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { 
  Bell, Phone, MapPin, Shield, Heart, Clock, 
  Users, Smartphone, Calendar, AlertTriangle,
  Activity, MessageCircle
} from 'lucide-react';
import comingSoonImage from '@/assets/coming-soon-mockup.jpg';

const Features = () => {
  const primaryFeatures = [
    {
      icon: Bell,
      title: "Smart Health Alerts",
      description: "Intelligent notifications for medication reminders, appointment scheduling, and health milestone tracking.",
      benefits: ["Personalized timing", "Multiple alert types", "Smart prioritization"],
      status: "Core Feature"
    },
    {
      icon: Phone,
      title: "Emergency Response & USSD",
      description: "One-tap emergency contacts with automatic location sharing and USSD dialing (*123*456#) for pregnant women in danger.",
      benefits: ["Instant contact activation", "GPS location sharing", "USSD emergency dialing", "Medical history access"],
      status: "Critical Feature"
    },
    {
      icon: MapPin,
      title: "Location-Based Support",
      description: "Find nearby healthcare facilities, pharmacies, lactation consultants, and support groups.",
      benefits: ["Real-time availability", "Reviews and ratings", "Direct booking"],
      status: "Community Feature"
    },
    {
      icon: MessageCircle,
      title: "Iyabot Voice Assistant",
      description: "Revolutionary multilingual AI companion that works offline, providing health guidance in African languages.",
      benefits: ["Works without internet", "Multiple African languages", "Voice-first interaction"],
      status: "Revolutionary"
    }
  ];

  const additionalFeatures = [
    { icon: Heart, title: "Wellness Tracking", description: "Monitor mood, energy levels, and overall well-being throughout your maternal journey." },
    { icon: Clock, title: "Appointment Management", description: "Never miss another appointment with smart scheduling and automated reminders." },
    { icon: Smartphone, title: "Mobile Optimized", description: "Fully optimized mobile experience for access anywhere, anytime." },
    { icon: Users, title: "Community Support", description: "Connect with healthcare professionals and support networks in your community." },
    { icon: Calendar, title: "Milestone Tracking", description: "Celebrate and track important moments in your maternal health journey." },
    { icon: AlertTriangle, title: "Warning Systems", description: "Early warning indicators for potential health concerns requiring professional attention." },
    { icon: Activity, title: "Health Analytics", description: "Personalized insights and trends based on your unique health data patterns." },
    { icon: Shield, title: "Privacy Protection", description: "End-to-end encryption and HIPAA-compliant storage for all health information." }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-warm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
              Features That <span className="text-primary">Save Lives</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Every feature in MamaAlert is designed with one goal: providing mothers 
              with the tools, information, and support they need exactly when they need it.
            </p>
          </div>
        </div>
      </section>

      {/* Primary Features */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Core Features
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The essential tools that make MamaAlert your trusted companion 
              throughout your maternal health journey.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {primaryFeatures.map((feature, index) => (
              <Card key={index} className="border-0 shadow-card bg-muted/30 hover:shadow-warm transition-all duration-300">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="w-12 h-12 bg-primary-light rounded-lg flex items-center justify-center">
                      <feature.icon className="w-6 h-6 text-primary" />
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {feature.status}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl text-foreground">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    {feature.description}
                  </p>
                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold text-foreground">Key Benefits:</h4>
                    <ul className="space-y-1">
                      {feature.benefits.map((benefit, idx) => (
                        <li key={idx} className="text-sm text-muted-foreground flex items-center">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* App Preview */}
      <section className="py-20 bg-primary-light">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
                Designed for Real Life
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                MamaAlert's interface is intuitive and accessible, designed to work 
                seamlessly even during stressful moments when you need help fast.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-trust rounded-full flex items-center justify-center">
                    <span className="text-trust-foreground text-sm font-bold">✓</span>
                  </div>
                  <span className="text-foreground">One-tap emergency activation</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-trust rounded-full flex items-center justify-center">
                    <span className="text-trust-foreground text-sm font-bold">✓</span>
                  </div>
                  <span className="text-foreground">Large, clear buttons for easy access</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-trust rounded-full flex items-center justify-center">
                    <span className="text-trust-foreground text-sm font-bold">✓</span>
                  </div>
                  <span className="text-foreground">Voice-activated commands available</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-trust rounded-full flex items-center justify-center">
                    <span className="text-trust-foreground text-sm font-bold">✓</span>
                  </div>
                  <span className="text-foreground">Works offline for critical functions</span>
                </div>
              </div>
            </div>
            
            <div className="text-center">
              <div className="relative inline-block">
                <img 
                  src={comingSoonImage} 
                  alt="MamaAlert app coming soon preview" 
                  className="max-w-md mx-auto rounded-3xl shadow-warm"
                />
                <div className="absolute -top-6 -right-6 bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                  Coming Soon
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Features Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Comprehensive Support System
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Beyond the core features, MamaAlert provides a complete ecosystem 
              of tools to support every aspect of your maternal health journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalFeatures.map((feature, index) => (
              <Card key={index} className="text-center p-6 border-0 bg-muted/50 hover:bg-muted/70 transition-all duration-300">
                <CardContent className="pt-6">
                  <div className="w-10 h-10 bg-primary-light rounded-lg flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Security & Privacy */}
      <section className="py-20 bg-trust-light">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-16 h-16 bg-trust rounded-full flex items-center justify-center mx-auto mb-6">
              <Shield className="w-8 h-8 text-trust-foreground" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
              Your Privacy, Our Promise
            </h2>
            <p className="text-xl text-muted-foreground mb-12">
              We understand that health data is deeply personal. That's why privacy 
              and security aren't just features—they're the foundation of everything we build.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <h3 className="text-lg font-semibold text-foreground mb-2">HIPAA Compliant</h3>
                <p className="text-muted-foreground text-sm">Full compliance with healthcare privacy regulations</p>
              </div>
              <div className="text-center">
                <h3 className="text-lg font-semibold text-foreground mb-2">End-to-End Encryption</h3>
                <p className="text-muted-foreground text-sm">Your data is encrypted from device to server</p>
              </div>
              <div className="text-center">
                <h3 className="text-lg font-semibold text-foreground mb-2">User Control</h3>
                <p className="text-muted-foreground text-sm">You decide what to share and with whom</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Ready to Experience MamaAlert?
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8">
              Join thousands of mothers already on our waitlist and be among the 
              first to access these life-changing features.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg" className="text-lg px-8 py-3" asChild>
                <Link to="/waitlist">Join Waitlist</Link>
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-3 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild>
                <Link to="/about">Learn Our Story</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Features;