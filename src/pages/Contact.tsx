import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Clock, Send, ArrowRight, MessageCircle, AlertTriangle, Users } from 'lucide-react';
import AnimatedSection from '@/components/AnimatedSection';
import { supabase } from '@/integrations/supabase/client';
import usePageSEO from '@/hooks/use-page-seo';
import nigerianNursePortrait from '@/assets/nigerian-nurse-portrait.jpg';
import nigerianPregnantPortrait from '@/assets/nigerian-pregnant-portrait.jpg';
import iconBell3d from '@/assets/icon-bell-3d.png';
import iconHealth3d from '@/assets/icon-health-3d.png';
import iconLocation3d from '@/assets/icon-location-3d.png';

const Contact = () => {
  usePageSEO({ title: 'Contact Us', description: 'Get in touch with the MamaAlert team. We\'re here to help with questions about cycle tracking, pregnancy support, and postpartum care.' });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      toast({
        title: "Error",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      toast({
        title: "Error",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);

    try {
      const { error } = await supabase
        .from('contact_messages')
        .insert([{
          name: formData.name.trim(),
          email: formData.email.trim().toLowerCase(),
          subject: formData.subject.trim() || null,
          message: formData.message.trim(),
        }]);

      if (error) throw error;
      
      toast({
        title: "Message sent successfully!",
        description: "Thank you for reaching out. We'll get back to you within 24 hours.",
      });
      
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: iconHealth3d,
      title: "Email Us",
      content: "mymamalert@gmail.com",
      description: "For general inquiries and support"
    },
    {
      icon: iconBell3d,
      title: "Call Us",
      content: "+2347065790166",
      description: "Monday to Friday, 9 AM - 6 PM WAT"
    },
    {
      icon: iconLocation3d,
      title: "Location",
      content: "Supporting mothers across Africa",
      description: "Focused on maternal health in Nigeria and beyond"
    }
  ];

  const faqs = [
    {
      question: "When will MamaAlert be available?",
      answer: "MamaAlert is now live! Download from our app page to get started."
    },
    {
      question: "Is MamaAlert free to use?",
      answer: "Core safety features will always be free. Premium features available with subscription."
    },
    {
      question: "How secure is my health data?",
      answer: "We're HIPAA compliant with end-to-end encryption. Your privacy is our priority."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative pt-16 pb-12 lg:pt-24 lg:pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center space-x-3 bg-primary/10 text-primary px-5 py-2.5 rounded-full text-sm font-medium mb-8">
              <MessageCircle className="w-4 h-4" />
              <span>Get in Touch</span>
            </div>
            
            <h1 className="font-serif text-5xl sm:text-6xl lg:text-[72px] text-foreground leading-[1.05] mb-8 tracking-tight">
              We'd love to
              <br />
              <span className="text-primary italic">hear from you</span>
            </h1>
            
            <p className="text-lg sm:text-xl text-muted-foreground mb-10 leading-relaxed max-w-2xl mx-auto">
              Have questions about MamaAlert? Whether it's about cycle tracking, pregnancy support, or postpartum care — we're here to help.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 max-w-6xl mx-auto">
            {/* Contact Form */}
            <AnimatedSection direction="left" className="lg:col-span-3">
              <div className="bg-card rounded-3xl p-8 lg:p-12 shadow-lg border border-border/30">
                <div className="flex items-center gap-4 mb-8">
                  <img src={nigerianNursePortrait} alt="" className="w-14 h-14 rounded-full object-cover" />
                  <div>
                    <h2 className="text-2xl font-semibold text-foreground">Send us a message</h2>
                    <p className="text-muted-foreground">We'll respond within 24 hours</p>
                  </div>
                </div>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-foreground font-medium">Full Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Enter your full name"
                        value={formData.name}
                        onChange={handleChange}
                        className="h-12 rounded-xl border-border/50 focus:border-primary"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-foreground font-medium">Email Address *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="Enter your email"
                        value={formData.email}
                        onChange={handleChange}
                        className="h-12 rounded-xl border-border/50 focus:border-primary"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="subject" className="text-foreground font-medium">Subject</Label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      placeholder="What's this about?"
                      value={formData.subject}
                      onChange={handleChange}
                      className="h-12 rounded-xl border-border/50 focus:border-primary"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-foreground font-medium">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell us how we can help you..."
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      className="rounded-xl border-border/50 focus:border-primary resize-none"
                      required
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full h-14 text-base rounded-full shadow-lg hover:shadow-xl transition-shadow" 
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      "Sending..."
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </div>
            </AnimatedSection>

            {/* Contact Information */}
            <AnimatedSection direction="right" className="lg:col-span-2 space-y-8">
              {/* Contact Cards */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-foreground mb-6">Contact Information</h3>
                {contactInfo.map((info, index) => (
                  <div 
                    key={index} 
                    className="bg-card rounded-2xl p-6 shadow-lg border border-border/30 hover:shadow-xl transition-shadow"
                  >
                    <div className="flex items-start gap-4">
                      <img src={info.icon} alt="" className="w-10 h-10" />
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">{info.title}</h4>
                        <p className="text-foreground font-medium text-sm mb-1">{info.content}</p>
                        <p className="text-xs text-muted-foreground">{info.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Response Time */}
              <div className="bg-primary/5 rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-2">
                  <Clock className="w-5 h-5 text-primary" />
                  <h4 className="font-semibold text-foreground">Response Time</h4>
                </div>
                <p className="text-muted-foreground text-sm">
                  We typically respond within 24 hours during business days.
                </p>
              </div>

              {/* Emergency Notice */}
              <div className="bg-destructive/5 border border-destructive/20 rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-3">
                  <AlertTriangle className="w-5 h-5 text-destructive" />
                  <h4 className="font-semibold text-destructive">Medical Emergency?</h4>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  If you're experiencing a medical emergency, please call emergency services immediately. 
                  Use our USSD feature by dialing *123*456# for emergency assistance.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="max-w-3xl mx-auto text-center mb-12 lg:mb-16">
            <h2 className="font-serif text-4xl sm:text-5xl text-foreground mb-6">
              Frequently <span className="italic text-primary">asked</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Quick answers to common questions about MamaAlert.
            </p>
          </AnimatedSection>

          <div className="grid sm:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
            {faqs.map((faq, index) => (
              <AnimatedSection 
                key={index}
                delay={index * 0.1}
                className="bg-card rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow"
              >
                <h3 className="font-semibold text-foreground mb-3">{faq.question}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{faq.answer}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="max-w-4xl mx-auto text-center">
            <div className="mb-8">
              <img 
                src={nigerianPregnantPortrait} 
                alt="" 
                className="w-24 h-24 mx-auto rounded-full object-cover shadow-lg ring-4 ring-primary/20"
              />
            </div>
            
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-foreground mb-8 leading-tight">
              Join our <span className="italic text-primary">community</span>
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
              Connect with other women, share experiences, and stay updated 
              on the latest health resources — from cycle care to postpartum recovery.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="h-14 px-10 rounded-2xl text-base shadow-lg gap-2" asChild>
                <a href="https://chat.whatsapp.com/LRlCsQOi99A0N4KUlWfyqB" target="_blank" rel="noopener noreferrer">
                  <Users className="w-5 h-5" />
                  Join WhatsApp Group
                </a>
              </Button>
              <Button variant="outline" size="lg" className="h-14 px-10 rounded-2xl text-base" asChild>
                <a href="https://mamalert.com/app" target="_blank" rel="noopener noreferrer">
                  Download App
                  <ArrowRight className="w-5 h-5" />
                </a>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default Contact;
