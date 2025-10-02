import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Mail, MapPin, Phone, Clock } from 'lucide-react';

const Contact = () => {
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
      // TODO: Connect to Supabase or email service
      await new Promise(resolve => setTimeout(resolve, 1000));
      
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
      icon: Mail,
      title: "Email Us",
      content: "mymamalert@gmail.com",
      description: "For general inquiries and support"
    },
    {
      icon: Phone,
      title: "Call Us",
      content: "+2347065790166",
      description: "Monday to Friday, 9 AM - 6 PM EST"
    },
    {
      icon: MapPin,
      title: "Location",
      content: "Supporting mothers across Africa",
      description: "Focused on maternal health in Nigeria and beyond"
    },
    {
      icon: Clock,
      title: "Response Time",
      content: "Within 24 hours",
      description: "We respond to all inquiries promptly"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-32 sm:py-40 bg-gradient-to-b from-background to-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto space-y-6">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground tracking-tight">
              Get in touch
            </h1>
            <p className="text-lg text-muted-foreground">
              Have questions? We're here to help.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-sm font-medium">Name</Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="h-12"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-sm font-medium">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="h-12"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="subject" className="text-sm font-medium">Subject</Label>
                <Input
                  id="subject"
                  name="subject"
                  type="text"
                  placeholder="How can we help?"
                  value={formData.subject}
                  onChange={handleChange}
                  className="h-12"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="message" className="text-sm font-medium">Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Tell us more..."
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  required
                  className="resize-none"
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full h-12" 
                disabled={isLoading}
                size="lg"
              >
                {isLoading ? "Sending..." : "Send message"}
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {contactInfo.map((info, index) => (
              <div key={index} className="text-center space-y-3">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto">
                  <info.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground text-sm mb-1">
                    {info.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {info.content}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default Contact;