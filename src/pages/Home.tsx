import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { Heart, Shield, Clock, MapPin, Phone, Bell, Linkedin } from 'lucide-react';
import WaitlistForm from '@/components/WaitlistForm';
import heroImage from '@/assets/hero-maternal-health.jpg';
import heroBackground from '@/assets/hero-background.jpg';
import teamBoluwatife from '@/assets/team-boluwatife.png';
import teamSunday from '@/assets/team-sunday.jpg';

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
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-accent py-20 sm:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="animate-fade-in">
              <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Heart className="w-4 h-4" />
                <span>Trusted by 10,000+ mothers</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
                Your Personal{' '}
                <span className="text-primary">Pregnancy Companion</span>
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground mb-10 leading-relaxed max-w-3xl mx-auto">
                Track your pregnancy, get health insights, and access emergency support—all in one beautiful app.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="text-base px-10 h-12 shadow-lg hover:shadow-xl transition-shadow" asChild>
                  <Link to="/waitlist">Join Waitlist</Link>
                </Button>
                <Button variant="outline" size="lg" className="text-base px-10 h-12" asChild>
                  <Link to="/features">Explore Features</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Preview */}
      <section className="py-16 sm:py-24 bg-background border-y border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Everything You Need in One App
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Designed for modern mothers who deserve the best care.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="text-center border border-border hover:shadow-card transition-all duration-300 bg-card">
                <CardContent className="pt-8 pb-6 px-6">
                  <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-5">
                    <feature.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-base font-semibold text-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-16 sm:py-24 bg-accent/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-3xl flex items-center justify-center mx-auto mb-6">
              <Shield className="w-8 h-8 text-primary" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Built with Healthcare Professionals
            </h2>
            <p className="text-lg text-muted-foreground mb-12 leading-relaxed max-w-2xl mx-auto">
              Designed in collaboration with maternal health experts and trusted by mothers worldwide.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-12 text-center">
              <div>
                <div className="text-4xl sm:text-5xl font-bold text-primary mb-2">24/7</div>
                <p className="text-sm text-muted-foreground">Emergency Support</p>
              </div>
              <div>
                <div className="text-4xl sm:text-5xl font-bold text-primary mb-2">100%</div>
                <p className="text-sm text-muted-foreground">Private & Secure</p>
              </div>
              <div>
                <div className="text-4xl sm:text-5xl font-bold text-primary mb-2">10K+</div>
                <p className="text-sm text-muted-foreground">Mothers Waiting</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Meet the Team Section */}
      <section className="py-16 sm:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Meet the Team
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Behind MamaAlert is a team deeply committed to transforming maternal health through technology, compassion, and innovation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Boluwatife Adeagbo */}
            <Card className="overflow-hidden border border-border hover:shadow-warm transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex flex-col items-center text-center">
                  <div className="w-40 h-40 mb-6 rounded-2xl overflow-hidden shadow-md">
                    <img 
                      src={teamBoluwatife} 
                      alt="Boluwatife Adeagbo" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-1">
                    Boluwatife Adeagbo
                  </h3>
                  <p className="text-sm font-medium text-primary mb-4">
                    Founder & Software Developer, Maternal Health Advocate
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                    Boluwatife leads the vision and development of MamaAlert, combining technology and empathy to tackle maternal health challenges in Africa.
                  </p>
                  <a 
                    href="https://linkedin.com/in/boluwatifeadeagbo" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                    aria-label="LinkedIn profile"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                </div>
              </CardContent>
            </Card>

            {/* Obazie Sunday Goodness */}
            <Card className="overflow-hidden border border-border hover:shadow-warm transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex flex-col items-center text-center">
                  <div className="w-40 h-40 mb-6 rounded-2xl overflow-hidden shadow-md">
                    <img 
                      src={teamSunday} 
                      alt="Obazie Sunday Goodness" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-1">
                    Obazie Sunday Goodness
                  </h3>
                  <p className="text-sm font-medium text-primary mb-4">
                    Business Strategist
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                    Goodness drives MamaAlert's growth and partnerships, ensuring our innovation reaches the women and communities who need it most.
                  </p>
                  <a 
                    href="https://www.linkedin.com/in/sunday-obazie-a76549244?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                    aria-label="LinkedIn profile"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-24 bg-gradient-to-br from-primary via-primary to-primary-variant text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Join 10,000+ Mothers on the Waitlist
            </h2>
            <p className="text-lg text-primary-foreground/90 mb-10">
              Be the first to know when MamaAlert launches. Get exclusive early access.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="secondary" 
                size="lg" 
                className="text-base px-10 h-12 shadow-lg hover:shadow-xl transition-shadow"
                asChild
              >
                <Link to="/waitlist">Join Waitlist</Link>
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="text-base px-10 h-12 bg-transparent border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10"
                asChild
              >
                <Link to="/about">Our Story</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;