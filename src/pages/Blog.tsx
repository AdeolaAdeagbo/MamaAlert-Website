import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { ArrowRight, ExternalLink, Clock, MessageCircle, Mail, Send, Heart, Flower2, Baby, BookOpen, Shield, Activity } from 'lucide-react';
import AnimatedSection from '@/components/AnimatedSection';
import usePageSEO from '@/hooks/use-page-seo';

const Blog = () => {
  usePageSEO({ title: 'Blog & Resources', description: 'Maternal health articles, pregnancy exercises, and wellness videos curated for African women at every stage.' });
  const categories = [
    { id: 'all', name: 'All Resources', count: 24 },
    { id: 'menstrual', name: 'Menstrual Health', count: 6 },
    { id: 'pregnancy', name: 'Pregnancy Care', count: 8 },
    { id: 'postpartum', name: 'Postpartum Recovery', count: 5 },
    { id: 'safety', name: 'Safety & Emergency', count: 5 },
    { id: 'iyabot', name: 'Meet Iyabot', count: 3 }
  ];

  const featuredArticles = [
    {
      id: 1,
      title: "Understanding Your Menstrual Cycle: A Guide for African Women",
      excerpt: "Learn how to track your cycle, recognize irregularities, and understand what your body is telling you each month.",
      category: "menstrual",
      readTime: "7 min read",
      date: "2024-10-12",
      thumbnail: "https://img.youtube.com/vi/r6hyWhp5rQg/hqdefault.jpg",
      link: "https://www.who.int/news-room/fact-sheets/detail/adolescent-pregnancy",
      isExternal: true,
      color: 'menstrual' as const
    },
    {
      id: 2,
      title: "Pregnancy Danger Signs Every African Mother Should Know",
      excerpt: "Recognize critical warning signs during pregnancy that require immediate medical attention — knowledge that saves lives.",
      category: "pregnancy",
      readTime: "8 min read",
      date: "2024-10-08",
      thumbnail: "https://img.youtube.com/vi/DeaayKWssak/hqdefault.jpg",
      link: "https://www.cdc.gov/hearher/maternal-warning-signs/index.html",
      isExternal: true,
      color: 'pregnancy' as const
    },
    {
      id: 3,
      title: "Postpartum Recovery: What No One Tells New African Mothers",
      excerpt: "The first 6 weeks after birth are critical. Learn about recovery, mental health, and when to seek help.",
      category: "postpartum",
      readTime: "6 min read",
      date: "2024-10-05",
      thumbnail: "https://img.youtube.com/vi/_XADEA2vwuI/hqdefault.jpg",
      link: "https://www.unicef.org/parenting/newborns/postpartum-recovery",
      isExternal: true,
      color: 'postpartum' as const
    }
  ];

  const menstrualArticles = [
    {
      title: "Period Pain Management Without Medication",
      excerpt: "Natural remedies and lifestyle changes that help African women manage menstrual cramps effectively.",
      link: "https://www.who.int/news-room/fact-sheets/detail/endometriosis",
      readTime: "5 min read",
    },
    {
      title: "Irregular Periods: When to See a Doctor",
      excerpt: "Understanding what irregular cycles mean and when they signal something that needs medical attention.",
      link: "https://www.ncbi.nlm.nih.gov/books/NBK279424/",
      readTime: "6 min read",
    },
    {
      title: "Menstrual Hygiene in Rural Africa",
      excerpt: "Practical menstrual hygiene tips and addressing period poverty across African communities.",
      link: "https://www.unicef.org/wash/menstrual-hygiene",
      readTime: "7 min read",
    }
  ];

  const pregnancyArticles = [
    {
      title: "Antenatal Care: What Every African Mother Should Know",
      excerpt: "Comprehensive guide to prenatal care and regular checkups for healthy pregnancy outcomes in Africa.",
      link: "https://data.unicef.org/topic/maternal-health/antenatal-care/",
      readTime: "8 min read",
    },
    {
      title: "Eating Healthy During Pregnancy in Africa",
      excerpt: "Affordable, locally available foods that provide the nutrition you and your baby need.",
      link: "https://www.who.int/tools/your-life-your-health/life-phase/pregnancy--birth-and-after-childbirth/eating-healthy-food-during-pregnancy",
      readTime: "6 min read",
    },
    {
      title: "Maternal Health in Sub-Saharan Africa",
      excerpt: "Understanding healthcare pathways and improving outcomes for mothers across the continent.",
      link: "https://bmcpregnancychildbirth.biomedcentral.com/articles/10.1186/s12884-025-07745-3",
      readTime: "10 min read",
    }
  ];

  const postpartumArticles = [
    {
      title: "Postpartum Depression in African Women",
      excerpt: "Breaking the stigma: recognizing signs of postpartum depression and finding culturally sensitive support.",
      link: "https://www.who.int/news-room/fact-sheets/detail/maternal-mental-health",
      readTime: "8 min read",
    },
    {
      title: "Breastfeeding Support for New Mothers",
      excerpt: "Practical breastfeeding guidance, common challenges, and when to seek help from a lactation consultant.",
      link: "https://www.unicef.org/nutrition/breastfeeding",
      readTime: "7 min read",
    },
    {
      title: "Newborn Care Essentials for African Mothers",
      excerpt: "Essential newborn care practices including kangaroo care, cord care, and danger sign recognition.",
      link: "https://www.who.int/teams/maternal-newborn-child-adolescent-health-and-ageing/newborn-health/essential-newborn-care",
      readTime: "9 min read",
    }
  ];

  const exerciseVideos = [
    {
      title: "Yoga for Period Cramps — 10 Min Relief",
      description: "Gentle yoga stretches designed to relieve menstrual cramps and ease discomfort during your period.",
      videoId: "r6hyWhp5rQg",
      duration: "10 minutes",
      tag: "Menstrual",
      color: 'menstrual' as const
    },
    {
      title: "Pregnancy-Safe Full Body HIIT — No Equipment",
      description: "Low-impact, no-repeat cardio workout safe for all trimesters to maintain fitness during pregnancy.",
      videoId: "DeaayKWssak",
      duration: "20 minutes",
      tag: "Pregnancy",
      color: 'pregnancy' as const
    },
    {
      title: "Postpartum Recovery Workout — Get Back in Shape",
      description: "Gentle, effective exercises to help new mothers rebuild strength and confidence after childbirth.",
      videoId: "_XADEA2vwuI",
      duration: "20 minutes",
      tag: "Postpartum",
      color: 'postpartum' as const
    },
    {
      title: "20-Min Afro Dance Workout — Fun ABS at Home",
      description: "Energizing Afrobeat dance workout perfect for all women — fun cardio that celebrates African culture.",
      videoId: "KOW9Dw3910U",
      duration: "20 minutes",
      tag: "All Stages",
      color: 'pregnancy' as const
    }
  ];

  const [activeCategory, setActiveCategory] = useState('all');

  const colorMap = {
    menstrual: { bg: 'bg-menstrual', text: 'text-menstrual', light: 'bg-menstrual/10' },
    pregnancy: { bg: 'bg-pregnancy', text: 'text-pregnancy', light: 'bg-pregnancy/10' },
    postpartum: { bg: 'bg-postpartum', text: 'text-postpartum', light: 'bg-postpartum/10' },
  };

  const renderFeaturedArticles = () => (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      {featuredArticles.map((article, index) => {
        const colors = colorMap[article.color];
        return (
          <AnimatedSection key={article.id} delay={index * 0.1}>
            <Card className="overflow-hidden border-0 bg-card rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 group h-full">
              <div className="relative overflow-hidden">
                <img
                  src={article.thumbnail}
                  alt={article.title}
                  className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <Badge className={`${colors.bg} text-white text-xs px-3 py-1 rounded-full`}>
                    {categories.find(cat => cat.id === article.category)?.name}
                  </Badge>
                </div>
              </div>
              <CardContent className="p-8">
                <h3 className="font-serif text-2xl text-foreground mb-3 leading-tight">
                  {article.title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {article.excerpt}
                </p>
                <div className="flex items-center justify-between text-sm text-muted-foreground mb-6">
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {article.readTime}
                  </span>
                  <span>{new Date(article.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</span>
                </div>
                <a
                  href={article.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center ${colors.text} hover:opacity-80 font-medium transition-colors`}
                >
                  Read Article <ExternalLink className="w-4 h-4 ml-2" />
                </a>
              </CardContent>
            </Card>
          </AnimatedSection>
        );
      })}
    </div>
  );

  const renderArticleSection = (
    id: string,
    title: string,
    icon: React.ReactNode,
    articles: typeof menstrualArticles,
    color: 'menstrual' | 'pregnancy' | 'postpartum'
  ) => {
    const colors = colorMap[color];
    return (
      <div id={id}>
        <AnimatedSection className="flex items-center gap-4 mb-10">
          <div className={`w-12 h-12 rounded-2xl ${colors.light} flex items-center justify-center`}>
            {icon}
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl text-foreground">{title}</h2>
        </AnimatedSection>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <AnimatedSection key={index} delay={index * 0.1}>
              <div className="bg-card rounded-3xl p-8 border border-border/30 hover:border-primary/20 hover:shadow-xl transition-all duration-300 group h-full flex flex-col">
                <div className={`w-10 h-10 rounded-xl ${colors.light} flex items-center justify-center mb-5`}>
                  <BookOpen className={`w-5 h-5 ${colors.text}`} />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {article.title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed flex-1">
                  {article.excerpt}
                </p>
                <div className="flex items-center text-sm text-muted-foreground mb-6">
                  <Clock className="w-4 h-4 mr-1" />
                  <span>{article.readTime}</span>
                </div>
                <a
                  href={article.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center ${colors.text} hover:opacity-80 font-medium transition-colors`}
                >
                  Read Article <ExternalLink className="w-4 h-4 ml-2" />
                </a>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    );
  };

  const renderExerciseVideos = () => (
    <div id="exercise-videos">
      <AnimatedSection className="mb-10">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center">
            <Activity className="w-6 h-6 text-primary" />
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl text-foreground">Wellness Videos</h2>
        </div>
        <p className="text-muted-foreground max-w-2xl text-lg">
          Stay active and healthy at every stage — from period relief yoga to pregnancy fitness and postpartum recovery.
          Always consult your healthcare provider before starting any exercise program.
        </p>
      </AnimatedSection>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {exerciseVideos.map((video, index) => {
          const colors = colorMap[video.color];
          return (
            <AnimatedSection key={index} delay={index * 0.1}>
              <div className="bg-card rounded-3xl overflow-hidden border border-border/30 hover:border-primary/20 hover:shadow-xl transition-all duration-300">
                <div className="relative">
                  <div className="aspect-video">
                    <iframe
                      src={`https://www.youtube.com/embed/${video.videoId}`}
                      title={video.title}
                      className="w-full h-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                  <div className="absolute top-4 right-4">
                    <Badge className={`${colors.bg} text-white text-xs px-3 py-1 rounded-full`}>
                      {video.tag}
                    </Badge>
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {video.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {video.description}
                  </p>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Clock className="w-4 h-4 mr-1" />
                    <span>{video.duration}</span>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          );
        })}
      </div>
    </div>
  );

  const renderIyabotFeature = () => (
    <div id="iyabot-feature">
      <AnimatedSection>
        <div className="bg-primary/5 rounded-[2.5rem] p-10 md:p-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-14 h-14 bg-primary rounded-full flex items-center justify-center">
                  <MessageCircle className="w-7 h-7 text-primary-foreground" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground text-lg">Iyabot</h4>
                  <p className="text-muted-foreground text-sm">AI Health Companion</p>
                </div>
              </div>
              <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-6 leading-tight">
                Meet <span className="italic text-primary">Iyabot</span>
              </h2>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Your voice-powered health companion that speaks your language and works even without internet connection — supporting you through every stage.
              </p>
              <div className="space-y-5 mb-10">
                {[
                  { title: 'Multilingual Support', desc: 'Yoruba, Hausa, Igbo, Swahili, and more African languages' },
                  { title: 'Offline Capability', desc: 'Works without internet for critical health guidance' },
                  { title: 'Every Stage Covered', desc: 'From period tracking to pregnancy care and postpartum recovery' },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-primary-foreground text-sm font-bold">✓</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground text-lg">{item.title}</h4>
                      <p className="text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Button size="lg" className="rounded-full h-14 px-10" asChild>
                <Link to="/features">Learn More About Iyabot</Link>
              </Button>
            </div>
            <div className="relative">
              <div className="bg-card rounded-3xl p-8 shadow-xl border border-border/30">
                <div className="space-y-4">
                  <div className="bg-menstrual/10 rounded-2xl p-5">
                    <p className="text-foreground italic leading-relaxed text-sm">
                      🩸 "Your period is expected in 3 days. Would you like me to remind you to prepare?"
                    </p>
                  </div>
                  <div className="bg-pregnancy/10 rounded-2xl p-5">
                    <p className="text-foreground italic leading-relaxed text-sm">
                      🤰 "Bawo ni, you're 28 weeks today! Let me tell you about your baby's development."
                    </p>
                  </div>
                  <div className="bg-postpartum/10 rounded-2xl p-5">
                    <p className="text-foreground italic leading-relaxed text-sm">
                      👶 "How are you feeling today, mama? Remember, it's normal to feel overwhelmed. I'm here to help."
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );

  const renderNewsletterSignup = () => (
    <AnimatedSection>
      <div className="bg-card rounded-3xl p-10 md:p-12 shadow-lg text-center max-w-2xl mx-auto">
        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
          <Mail className="w-8 h-8 text-primary" />
        </div>
        <h3 className="font-serif text-3xl text-foreground mb-4">Stay Updated</h3>
        <p className="text-muted-foreground mb-8 max-w-lg mx-auto leading-relaxed">
          Get the latest women's health tips, resources, and MamaAlert updates delivered to your inbox.
        </p>
        <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 h-12 px-5 rounded-full border border-border/50 bg-background focus:border-primary focus:outline-none"
          />
          <Button type="submit" className="h-12 px-8 rounded-full">
            <Send className="w-4 h-4 mr-2" />
            Subscribe
          </Button>
        </form>
      </div>
    </AnimatedSection>
  );

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative pt-16 pb-12 lg:pt-24 lg:pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center space-x-3 bg-primary/10 text-primary px-5 py-2.5 rounded-full text-sm font-medium mb-8">
              <BookOpen className="w-5 h-5" />
              <span>Health Resources</span>
            </div>
            
            <h1 className="font-serif text-5xl sm:text-6xl lg:text-[72px] text-foreground leading-[1.05] mb-8 tracking-tight">
              Health & wellness
              <br />
              <span className="text-primary italic">resources</span>
            </h1>
            
            <p className="text-lg sm:text-xl text-muted-foreground mb-6 leading-relaxed max-w-2xl mx-auto">
              Expert-curated articles, videos, and guides to support your health 
              journey — from menstrual wellness to pregnancy and postpartum care.
            </p>

            <div className="flex flex-wrap justify-center gap-3 mb-10">
              <span className="px-4 py-1.5 rounded-full text-sm font-medium bg-menstrual/10 text-menstrual">Menstrual Health</span>
              <span className="px-4 py-1.5 rounded-full text-sm font-medium bg-pregnancy/10 text-pregnancy">Pregnancy Care</span>
              <span className="px-4 py-1.5 rounded-full text-sm font-medium bg-postpartum/10 text-postpartum">Postpartum Recovery</span>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="max-w-3xl mx-auto text-center mb-12 lg:mb-16">
            <h2 className="font-serif text-3xl sm:text-4xl text-foreground mb-4">
              Featured <span className="italic text-primary">articles</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Curated content for every stage of your health journey.
            </p>
          </AnimatedSection>
          {renderFeaturedArticles()}
        </div>
      </section>

      {/* Menstrual Health */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          {renderArticleSection(
            'menstrual-health',
            'Menstrual Health',
            <Flower2 className="w-6 h-6 text-menstrual" />,
            menstrualArticles,
            'menstrual'
          )}
        </div>
      </section>

      {/* Pregnancy Care */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          {renderArticleSection(
            'pregnancy-care',
            'Pregnancy Care',
            <Heart className="w-6 h-6 text-pregnancy" />,
            pregnancyArticles,
            'pregnancy'
          )}
        </div>
      </section>

      {/* Postpartum Recovery */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          {renderArticleSection(
            'postpartum-recovery',
            'Postpartum Recovery',
            <Baby className="w-6 h-6 text-postpartum" />,
            postpartumArticles,
            'postpartum'
          )}
        </div>
      </section>

      {/* Wellness Videos */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          {renderExerciseVideos()}
        </div>
      </section>

      {/* Iyabot Feature */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          {renderIyabotFeature()}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {renderNewsletterSignup()}
        </div>
      </section>
    </div>
  );
};

export default Blog;
