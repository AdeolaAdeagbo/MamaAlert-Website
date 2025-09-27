import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { Mail, User, Check } from 'lucide-react';

interface WaitlistFormProps {
  title?: string;
  description?: string;
  compact?: boolean;
}

const WaitlistForm = ({ 
  title = "Join the MamaAlert Waitlist", 
  description = "Be the first to know when MamaAlert is available. Get early access to features that could save lives.",
  compact = false 
}: WaitlistFormProps) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name.trim() || !email.trim()) {
      toast({
        title: "Error",
        description: "Please fill in both name and email fields.",
        variant: "destructive",
      });
      return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      toast({
        title: "Error", 
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);

    try {
      // TODO: Connect to Supabase or external service
      // For now, we'll simulate the submission
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setIsSubmitted(true);
      toast({
        title: "Welcome to the waitlist!",
        description: "Thank you for joining. We'll keep you updated on our progress.",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  if (isSubmitted) {
    return (
      <Card className="w-full max-w-md mx-auto">
        <CardContent className="pt-6">
          <div className="text-center">
            <div className="w-12 h-12 bg-trust-light rounded-full flex items-center justify-center mx-auto mb-4">
              <Check className="w-6 h-6 text-trust" />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">You're on the list!</h3>
            <p className="text-muted-foreground">
              Thank you for joining the MamaAlert waitlist. We'll be in touch soon with updates.
            </p>
          </div>
        </CardContent>
      </Card>
    );
  }

  const form = (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="name" className="flex items-center space-x-2">
          <User className="w-4 h-4" />
          <span>Full Name</span>
        </Label>
        <Input
          id="name"
          type="text"
          placeholder="Enter your full name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="email" className="flex items-center space-x-2">
          <Mail className="w-4 h-4" />
          <span>Email Address</span>
        </Label>
        <Input
          id="email"
          type="email"
          placeholder="Enter your email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      
      <Button 
        type="submit" 
        className="w-full" 
        disabled={isLoading}
      >
        {isLoading ? "Joining..." : "Join Waitlist"}
      </Button>
      
      <p className="text-xs text-muted-foreground text-center">
        We respect your privacy. No spam, unsubscribe anytime.
      </p>
    </form>
  );

  if (compact) {
    return (
      <div className="w-full max-w-md mx-auto">
        {form}
      </div>
    );
  }

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader className="text-center">
        <CardTitle className="text-xl">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        {form}
      </CardContent>
    </Card>
  );
};

export default WaitlistForm;