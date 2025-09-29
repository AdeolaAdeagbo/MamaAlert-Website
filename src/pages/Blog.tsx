import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { ArrowRight, ExternalLink, Clock, MessageCircle } from 'lucide-react';

const Blog = () => {
  const categories = [
    { id: 'all', name: 'All Articles', count: 24 },
    { id: 'health-education', name: 'Health Education', count: 8 },
    { id: 'safety-preparedness', name: 'Safety & Preparedness', count: 6 },
    { id: 'pregnancy-exercises', name: 'Pregnancy Exercises', count: 5 },
    { id: 'nutrition', name: 'Nutrition Guide', count: 5 },
    { id: 'iyabot', name: 'Meet Iyabot', count: 3 }
  ];

  const featuredArticles = [
    {
      id: 1,
      title: "Understanding Danger Signs During Pregnancy",
      excerpt: "Learn to recognize critical warning signs that require immediate medical attention during pregnancy.",
      category: "safety-preparedness",
      readTime: "8 min read",
      date: "2024-09-25",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=250&fit=crop",
      link: "https://www.cdc.gov/hearher/maternal-warning-signs/index.html",
      isExternal: true
    },
    {
      id: 2,
      title: "Safe Pregnancy Exercises for All Trimesters",
      excerpt: "Discover safe and effective exercises to maintain fitness throughout your pregnancy journey.",
      category: "pregnancy-exercises",
      readTime: "6 min read",
      date: "2024-09-22",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=250&fit=crop",
      link: "#pregnancy-exercises"
    },
    {
      id: 3,
      title: "Meet Iyabot: Your Multilingual Health Companion",
      excerpt: "Introducing our revolutionary voice-based AI assistant that works offline to support mothers in multiple African languages.",
      category: "iyabot",
      readTime: "5 min read",
      date: "2024-09-20",
      image: "https://images.unsplash.com/photo-1589254065878-42c9da997008?w=400&h=250&fit=crop",
      link: "#iyabot-feature"
    }
  ];

  const healthEducationArticles = [
    {
      title: "Maternal and Newborn Health - Key Facts",
      excerpt: "Essential information about maternal health from UNICEF and WHO guidelines for African mothers.",
      link: "https://www.unicef.org/health/maternal-and-newborn-health",
      date: "2024-09-24",
      readTime: "7 min read"
    },
    {
      title: "Eating Healthy Food During Pregnancy",
      excerpt: "WHO guidelines on proper nutrition during pregnancy and after childbirth for optimal health.",
      link: "https://www.who.int/tools/your-life-your-health/life-phase/pregnancy--birth-and-after-childbirth/eating-healthy-food-during-pregnancy",
      date: "2024-09-23",
      readTime: "6 min read"
    },
    {
      title: "Antenatal Care: What Every Mother Should Know",
      excerpt: "Comprehensive guide to prenatal care and regular checkups for healthy pregnancy outcomes.",
      link: "https://data.unicef.org/topic/maternal-health/antenatal-care/",
      date: "2024-09-21",
      readTime: "8 min read"
    }
  ];

  const safetyArticles = [
    {
      title: "Obstetric Emergency Readiness Guide",
      excerpt: "Essential preparation for obstetric emergencies in resource-limited settings across Africa.",
      link: "https://saferbirth.org/aim-obstetric-emergency-readiness-resource-kit/",
      date: "2024-09-19",
      readTime: "10 min read"
    },
    {
      title: "Pregnancy Danger Signs You Must Know",
      excerpt: "Critical warning signs during pregnancy that require immediate medical attention.",
      link: "https://www.ncbi.nlm.nih.gov/books/NBK304178/",
      date: "2024-09-18",
      readTime: "6 min read"
    },
    {
      title: "Healthcare-Seeking Pathways in Sub-Saharan Africa",
      excerpt: "Understanding when and how to seek help for maternal complications in African healthcare systems.",
      link: "https://bmcpregnancychildbirth.biomedcentral.com/articles/10.1186/s12884-025-07745-3",
      date: "2024-09-17",
      readTime: "12 min read"
    }
  ];

  const exerciseVideos = [
    {
      title: "Safe and Simple Pregnancy Exercises for All Trimesters",
      description: "Low-impact bodyweight workout to keep you active and prepare for delivery.",
      videoId: "TgrBkANcHw4",
      duration: "25 minutes",
      trimester: "All Trimesters"
    },
    {
      title: "Advanced Pregnancy Workout: Full Body Strength",
      description: "Challenging yet safe strength workout for active expecting mothers.",
      videoId: "zH4O4aA4wA8",
      duration: "30 minutes",
      trimester: "All Trimesters"
    },
    {
      title: "Pregnancy Pilates for Second Trimester",
      description: "Gentle pilates exercises to maintain fitness and prepare for birth.",
      videoId: "-jtcA7ZjTAU",
      duration: "35 minutes",
      trimester: "Second Trimester"
    },
    {
      title: "Pregnancy Cardio + Pilates Combo",
      description: "Combined cardio and pilates workout for complete pregnancy fitness.",
      videoId: "Q2va_tp0BA0",
      duration: "30 minutes",
      trimester: "All Trimesters"
    }
  ];

  const [activeCategory, setActiveCategory] = useState('all');

  const renderFeaturedArticles = () => (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
      {featuredArticles.map((article) => (
        <Card key={article.id} className="overflow-hidden border-0 shadow-card hover:shadow-warm transition-all duration-300">
          <div className="relative">
            <img 
              src={article.image} 
              alt={article.title}
              className="w-full h-48 object-cover"
            />
            <div className="absolute top-4 left-4">
              <Badge variant="secondary" className="text-xs">
                {categories.find(cat => cat.id === article.category)?.name}
              </Badge>
            </div>
          </div>
          <CardContent className="p-6">
            <h3 className="text-xl font-bold text-foreground mb-2 line-clamp-2">
              {article.title}
            </h3>
            <p className="text-muted-foreground mb-4 line-clamp-3">
              {article.excerpt}
            </p>
            <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
              <span>{article.readTime}</span>
              <span>{new Date(article.date).toLocaleDateString()}</span>
            </div>
            {article.isExternal ? (
              <a 
                href={article.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center text-primary hover:text-primary/80 font-medium"
              >
                Read Article <ExternalLink className="w-4 h-4 ml-1" />
              </a>
            ) : (
              <a 
                href={article.link}
                className="inline-flex items-center text-primary hover:text-primary/80 font-medium"
              >
                Read More <ArrowRight className="w-4 h-4 ml-1" />
              </a>
            )}
          </CardContent>
        </Card>
      ))}
    </div>
  );

  const renderHealthEducation = () => (
    <div id="health-education" className="mb-16">
      <h2 className="text-3xl font-bold text-foreground mb-8">Health Education</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {healthEducationArticles.map((article, index) => (
          <Card key={index} className="border-0 shadow-card hover:shadow-warm transition-all duration-300">
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold text-foreground mb-3">
                {article.title}
              </h3>
              <p className="text-muted-foreground mb-4 text-sm">
                {article.excerpt}
              </p>
              <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
                <span>{article.readTime}</span>
                <span>{new Date(article.date).toLocaleDateString()}</span>
              </div>
              <a 
                href={article.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center text-primary hover:text-primary/80 font-medium text-sm"
              >
                Read Article <ExternalLink className="w-4 h-4 ml-1" />
              </a>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );

  const renderSafetyPreparedness = () => (
    <div id="safety-preparedness" className="mb-16">
      <h2 className="text-3xl font-bold text-foreground mb-8">Safety & Emergency Preparedness</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {safetyArticles.map((article, index) => (
          <Card key={index} className="border-0 shadow-card hover:shadow-warm transition-all duration-300">
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold text-foreground mb-3">
                {article.title}
              </h3>
              <p className="text-muted-foreground mb-4 text-sm">
                {article.excerpt}
              </p>
              <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
                <span>{article.readTime}</span>
                <span>{new Date(article.date).toLocaleDateString()}</span>
              </div>
              <a 
                href={article.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center text-primary hover:text-primary/80 font-medium text-sm"
              >
                Read Guide <ExternalLink className="w-4 h-4 ml-1" />
              </a>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );

  const renderPregnancyExercises = () => (
    <div id="pregnancy-exercises" className="mb-16">
      <h2 className="text-3xl font-bold text-foreground mb-4">Pregnancy Exercise Videos</h2>
      <p className="text-muted-foreground mb-8 max-w-2xl">
        Stay active and healthy throughout your pregnancy with these safe, expert-approved exercise routines. 
        Always consult your healthcare provider before starting any exercise program.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {exerciseVideos.map((video, index) => (
          <Card key={index} className="border-0 shadow-card hover:shadow-warm transition-all duration-300">
            <div className="relative">
              <div className="aspect-video">
                <iframe
                  src={`https://www.youtube.com/embed/${video.videoId}`}
                  title={video.title}
                  className="w-full h-full rounded-t-lg"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="absolute top-4 right-4">
                <Badge variant="secondary" className="text-xs">
                  {video.trimester}
                </Badge>
              </div>
            </div>
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {video.title}
              </h3>
              <p className="text-muted-foreground mb-4 text-sm">
                {video.description}
              </p>
              <div className="flex items-center text-xs text-muted-foreground">
                <Clock className="w-4 h-4 mr-1" />
                <span>{video.duration}</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );

  const renderIyabotFeature = () => (
    <div id="iyabot-feature" className="mb-16">
      <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-3xl p-8 md:p-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Meet Iyabot: Your Voice Health Companion
            </h2>
            <p className="text-xl text-muted-foreground mb-6">
              Iyabot is MamaAlert's revolutionary AI assistant that speaks your language and works even without internet connection.
            </p>
            <div className="space-y-4 mb-8">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center mt-1">
                  <span className="text-primary-foreground text-xs font-bold">✓</span>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Multilingual Support</h4>
                  <p className="text-muted-foreground text-sm">Communicates in Yoruba, Hausa, Igbo, Swahili, and other African languages</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center mt-1">
                  <span className="text-primary-foreground text-xs font-bold">✓</span>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Offline Capability</h4>
                  <p className="text-muted-foreground text-sm">Works without internet connection for critical health guidance</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center mt-1">
                  <span className="text-primary-foreground text-xs font-bold">✓</span>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Voice-First Design</h4>
                  <p className="text-muted-foreground text-sm">Natural voice interactions for hands-free health assistance</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center mt-1">
                  <span className="text-primary-foreground text-xs font-bold">✓</span>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Cultural Sensitivity</h4>
                  <p className="text-muted-foreground text-sm">Understands local customs and healthcare practices</p>
                </div>
              </div>
            </div>
            <Button size="lg" asChild>
              <Link to="/features">Learn More About Iyabot</Link>
            </Button>
          </div>
          <div className="relative">
            <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-8 border border-white/30">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                  <MessageCircle className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Iyabot</h4>
                  <p className="text-muted-foreground text-sm">AI Health Assistant</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-primary/10 rounded-lg p-3">
                  <p className="text-sm text-foreground italic">
                    "Bawo ni, how are you feeling today? Let me know if you have any health concerns."
                  </p>
                </div>
                <div className="bg-secondary/10 rounded-lg p-3">
                  <p className="text-sm text-foreground italic">
                    "I'm here to help you understand your symptoms and guide you to the right care."
                  </p>
                </div>
                <div className="bg-primary/10 rounded-lg p-3">
                  <p className="text-sm text-foreground italic">
                    "Available in your language, even when you're offline."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-warm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
              Maternal Health <span className="text-primary">Resources & Insights</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Expert-backed articles, practical guides, and real-world insights to support 
              your maternal health journey. From pregnancy to postpartum care.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Featured Articles
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The latest and most important information for expecting and new mothers.
            </p>
          </div>
          
          {renderFeaturedArticles()}
        </div>
      </section>

      {/* Health Education Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {renderHealthEducation()}
        </div>
      </section>

      {/* Safety & Preparedness Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {renderSafetyPreparedness()}
        </div>
      </section>

      {/* Pregnancy Exercises Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {renderPregnancyExercises()}
        </div>
      </section>

      {/* Iyabot Feature Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {renderIyabotFeature()}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-gradient-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Stay Updated with Maternal Health Insights
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8">
              Get the latest articles, health tips, and updates from MamaAlert 
              delivered directly to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-foreground bg-white"
              />
              <Button variant="secondary" size="lg" className="px-8">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;