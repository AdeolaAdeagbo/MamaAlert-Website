import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Link } from 'react-router-dom';
import { Heart, Shield, Clock, MapPin, Phone, Bell, Check } from 'lucide-react';
import WaitlistForm from '@/components/WaitlistForm';

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

  const testimonials = [
    {
      text: "As a new mother in Lagos, having an app that understands Nigerian maternal health challenges is exactly what I need. MamaAlert will be a game-changer.",
      author: "Adunni O.",
      location: "Lagos, Nigeria"
    },
    {
      text: "The emergency response feature gives me confidence knowing help is just one tap away. I can't wait for this to launch!",
      author: "Kemi A.",
      location: "Abuja, Nigeria"
    },
    {
      text: "Finally, a health app that considers the unique needs of African mothers. The multilingual support is perfect for our communities.",
      author: "Fatima I.",
      location: "Kano, Nigeria"
    }
  ];

  const faqs = [
    {
      question: "Is MamaAlert safe to use during pregnancy?",
      answer: "Yes, MamaAlert is completely safe. Our app provides evidence-based information and connects you with verified healthcare professionals. All health recommendations are reviewed by medical experts."
    },
    {
      question: "How does the emergency response feature work?",
      answer: "MamaAlert offers instant emergency contacts with USSD dialing for danger situations, real-time location sharing, and direct connection to nearby healthcare facilities—ensuring help is always within reach."
    },
    {
      question: "Can I track my pregnancy milestones?",
      answer: "Absolutely! MamaAlert helps you monitor maternal health indicators, track appointments, medication schedules, and receive personalized insights throughout your pregnancy journey."
    },
    {
      question: "Is my personal health data secure?",
      answer: "Your privacy and data security are our top priorities. MamaAlert uses encryption and complies with healthcare data protection standards. Your information is never shared without your consent."
    },
    {
      question: "When will MamaAlert be available?",
      answer: "We're currently in beta testing and plan to launch publicly in November 2025. Join our waitlist to be among the first to access the app when it launches."
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

      {/* Mission Statement */}
      <section className="py-24 sm:py-32 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
              Bringing quality maternal care closer to women everywhere
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              MamaAlert is designed to make pregnancy safer and more supported for African women. 
              We offer 24-hour support for early diagnosis, expert care, and personalized health monitoring.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 sm:py-32 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              What mothers are saying
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-0 bg-muted/50">
                <CardContent className="pt-6 space-y-4">
                  <p className="text-muted-foreground italic leading-relaxed">
                    "{testimonial.text}"
                  </p>
                  <div>
                    <p className="font-semibold text-foreground">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 sm:py-32 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                Frequently asked questions
              </h2>
              <p className="text-lg text-muted-foreground">
                Get answers to common questions about MamaAlert
              </p>
            </div>
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="bg-background border rounded-lg px-6">
                  <AccordionTrigger className="text-left font-semibold hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 sm:py-20 bg-background">
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