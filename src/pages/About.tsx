import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Heart, Users, Target, Award } from 'lucide-react';
import aboutImage from '@/assets/about-mothers-care.jpg';

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Compassionate Care",
      description: "Every feature is designed with deep empathy for the maternal journey and its unique challenges."
    },
    {
      icon: Users,
      title: "Community First",
      description: "Building a supportive network where mothers can access help and connect with resources instantly."
    },
    {
      icon: Target,
      title: "Precision Health",
      description: "Using technology to provide timely, relevant, and actionable health insights when they matter most."
    },
    {
      icon: Award,
      title: "Excellence",
      description: "Committed to the highest standards of safety, privacy, and reliability in maternal healthcare technology."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-warm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
              Our Mission: <span className="text-primary">Every Mother Matters</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              MamaAlert was born from a simple yet powerful belief: every mother deserves 
              access to the best care, support, and emergency response system, regardless 
              of where she is or what time it is.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
                The Story Behind MamaAlert
              </h2>
              <div className="space-y-4 text-muted-foreground">
                 <p>
                   It was 3 AM when the call came. A mother, alone in her small apartment, 
                   experiencing complications she had never felt before. Her husband was away, 
                   family members hours away, and she didn't know if what she was feeling was 
                   normal or life-threatening. In that terrifying moment of uncertainty, she 
                   realized how isolated and vulnerable she truly was.
                 </p>
                 <p>
                   This story isn't unique. Across Africa, countless mothers face similar moments 
                   of fear and isolation. They carry life within them, yet often lack immediate 
                   access to the knowledge, support, and emergency response systems that could 
                   save both their lives and their babies'. Some have to walk miles to reach the 
                   nearest clinic. Others simply don't know when a symptom requires urgent attention.
                 </p>
                 <p>
                   Too many mothers suffer in silence, not because help doesn't exist, but because 
                   the gap between them and that help feels impossible to bridge. Every year, 
                   preventable complications take mothers from their families simply because the 
                   right information didn't reach them at the right time.
                 </p>
                 <p>
                   MamaAlert was born from this pain—from the recognition that no mother should 
                   face her health journey alone. This platform emerged from years of listening 
                   to mothers' stories, understanding their fears, and witnessing the devastating 
                   consequences of delayed care. The vision was shaped by Boluwatife Adeagbo, 
                   whose passion for maternal health and deep understanding of these challenges 
                   drove the creation of this life-saving technology.
                 </p>
              </div>
              <div className="mt-8">
                <Button size="lg" asChild>
                  <Link to="/features">See How We Help</Link>
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-warm">
                <img 
                  src={aboutImage} 
                  alt="Diverse mothers and healthcare community" 
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
                The Problem We're Solving
              </h2>
              <p className="text-xl text-muted-foreground">
                Maternal health challenges affect millions of women worldwide, 
                and technology hasn't kept pace with their needs.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="border-l-4 border-l-primary bg-background">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    Emergency Response Gaps
                  </h3>
                  <p className="text-muted-foreground">
                    Critical minutes lost during emergencies because support systems 
                    aren't designed for maternal health situations.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-primary bg-background">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    Fragmented Care
                  </h3>
                  <p className="text-muted-foreground">
                    Information scattered across multiple apps and systems, 
                    making it hard to get comprehensive health insights.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-primary bg-background">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    Limited Support Networks
                  </h3>
                  <p className="text-muted-foreground">
                    Many mothers lack immediate access to healthcare professionals 
                    and support communities when they need them most.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-primary bg-background">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    Generic Solutions
                  </h3>
                  <p className="text-muted-foreground">
                    Existing health apps treat all users the same, ignoring the 
                    unique complexities of maternal health journeys.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
              Our Core Values
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              These principles guide every decision we make and every feature we build.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary-light rounded-full flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  {value.title}
                </h3>
                <p className="text-muted-foreground">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-trust-light">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
              Led by Maternal Health Advocates
            </h2>
            <p className="text-xl text-muted-foreground mb-12">
              Our team combines deep expertise in healthcare, technology, and emergency 
              response with personal experience in maternal health challenges.
            </p>

            <div className="bg-white rounded-2xl p-8 shadow-card">
              <blockquote className="text-lg text-muted-foreground italic mb-6">
                "Every line of code we write, every feature we design, is guided by one question: 
                'Will this make a mother's life safer, healthier, and more supported?' 
                That's not just our mission—it's our promise."
              </blockquote>
               <div className="text-foreground font-semibold">
                 — Boluwatife Adeagbo, Founder of MamaAlert
               </div>
            </div>

            <div className="mt-12">
              <Button size="lg" asChild>
                <Link to="/contact">Get in Touch</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;