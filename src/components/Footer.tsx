import { Link } from 'react-router-dom';
import { Heart, Mail, MapPin, ArrowRight, Flower2, Baby } from 'lucide-react';
import { Button } from '@/components/ui/button';
import mamaalertLogo from '@/assets/mamaalert-logo.png';

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      {/* Mode color strip */}
      <div className="flex h-1.5">
        <div className="flex-1 bg-menstrual" />
        <div className="flex-1 bg-pregnancy" />
        <div className="flex-1 bg-postpartum" />
      </div>

      {/* CTA strip */}
      <div className="border-b border-background/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-lg font-semibold">One app. Every stage of motherhood.</h3>
            <p className="text-background/60 text-sm mt-1">Download MamaAlert — free on all platforms.</p>
          </div>
          <Button className="rounded-xl gap-2 bg-primary hover:bg-primary/90 text-primary-foreground" asChild>
            <a href="https://mamalert.com/app" target="_blank" rel="noopener noreferrer">
              Download App <ArrowRight className="w-4 h-4" />
            </a>
          </Button>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center mb-5">
              <img src={mamaalertLogo} alt="MamaAlert" className="h-20 brightness-0 invert" />
            </div>
            <p className="text-background/60 text-sm max-w-sm leading-relaxed mb-6">
              From menstrual tracking to pregnancy care and postpartum recovery — empowering women across Africa with the care they deserve.
            </p>
            {/* Mode tags */}
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-menstrual/20 text-menstrual">
                <Flower2 className="w-3 h-3" /> Menstrual
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-pregnancy/20 text-pregnancy">
                <Heart className="w-3 h-3" /> Pregnancy
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-postpartum/20 text-postpartum">
                <Baby className="w-3 h-3" /> Postpartum
              </span>
            </div>
            <div className="space-y-2 text-sm text-background/50">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary" />
                <span>mymamalert@gmail.com</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-primary" />
                <span>Supporting women across Africa</span>
              </div>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold text-sm mb-5 uppercase tracking-wider text-background/40">Company</h4>
            <div className="space-y-3 text-sm">
              <Link to="/about" className="block text-background/60 hover:text-primary transition-colors">About</Link>
              <Link to="/features" className="block text-background/60 hover:text-primary transition-colors">Features</Link>
              <Link to="/blog" className="block text-background/60 hover:text-primary transition-colors">Resources</Link>
              <Link to="/contact" className="block text-background/60 hover:text-primary transition-colors">Contact</Link>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-sm mb-5 uppercase tracking-wider text-background/40">Support</h4>
            <div className="space-y-3 text-sm">
              <a href="https://mamalert.com/app" target="_blank" rel="noopener noreferrer" className="block text-background/60 hover:text-primary transition-colors">Download App</a>
              <Link to="/waitlist" className="block text-background/60 hover:text-primary transition-colors">Join Waitlist</Link>
              <a href="#" className="block text-background/60 hover:text-primary transition-colors">Privacy Policy</a>
              <a href="#" className="block text-background/60 hover:text-primary transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>

        <div className="border-t border-background/10 mt-12 pt-8 text-center text-xs text-background/40">
          <p>&copy; {new Date().getFullYear()} MamaAlert. All rights reserved. Made with ❤️ for women everywhere.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
