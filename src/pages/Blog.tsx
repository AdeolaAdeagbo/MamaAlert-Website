import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { Calendar, Clock, User, ArrowRight } from 'lucide-react';

const Blog = () => {
  const blogPosts = [
    {
      title: "Understanding Maternal Health Alerts: What Every Mother Should Know",
      excerpt: "Learn about the critical health indicators that matter most during pregnancy and postpartum, and how technology can help you stay informed.",
      author: "Dr. Sarah Chen",
      date: "2024-01-15",
      readTime: "5 min read",
      category: "Health Education",
      featured: true
    },
    {
      title: "Emergency Preparedness for New Mothers: A Complete Guide",
      excerpt: "Essential steps every new mother should take to prepare for emergency situations, from creating action plans to building support networks.",
      author: "Maria Rodriguez, RN",
      date: "2024-01-10",
      readTime: "8 min read",
      category: "Safety & Preparedness",
      featured: false
    },
    {
      title: "The Science Behind Smart Health Notifications",
      excerpt: "Exploring how AI and machine learning can improve maternal health outcomes through personalized, timely alerts and recommendations.",
      author: "Tech Team",
      date: "2024-01-05",
      readTime: "6 min read",
      category: "Technology",
      featured: false
    },
    {
      title: "Building Your Maternal Health Support Network",
      excerpt: "Why having a strong support system is crucial for maternal health and how to build connections that last beyond pregnancy.",
      author: "Dr. Jennifer Kim",
      date: "2023-12-28",
      readTime: "7 min read",
      category: "Community",
      featured: false
    },
    {
      title: "Postpartum Health: Warning Signs You Shouldn't Ignore",
      excerpt: "Critical symptoms and changes that require immediate medical attention during the postpartum period, and how to advocate for your health.",
      author: "Dr. Sarah Chen",
      date: "2023-12-20",
      readTime: "10 min read",
      category: "Health Education",
      featured: false
    },
    {
      title: "Mental Health and Maternal Wellness: Breaking the Silence",
      excerpt: "Addressing the importance of mental health support during pregnancy and beyond, with resources for mothers seeking help.",
      author: "Dr. Lisa Thompson, PhD",
      date: "2023-12-15",
      readTime: "9 min read",
      category: "Mental Health",
      featured: false
    }
  ];

  const categories = ["All", "Health Education", "Safety & Preparedness", "Technology", "Community", "Mental Health"];

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
              Expert guidance, latest research, and practical tips to support you 
              throughout your maternal health journey. Knowledge that empowers.
            </p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 bg-background border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category, index) => (
              <Button
                key={index}
                variant={index === 0 ? "default" : "outline"}
                size="sm"
                className="text-sm"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <Badge className="mb-4">Featured Article</Badge>
            <Card className="overflow-hidden shadow-card border-l-4 border-l-primary">
              <CardHeader className="pb-4">
                <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-4">
                  <div className="flex items-center space-x-1">
                    <User className="w-4 h-4" />
                    <span>{blogPosts[0].author}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-4 h-4" />
                    <span>January 15, 2024</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="w-4 h-4" />
                    <span>{blogPosts[0].readTime}</span>
                  </div>
                  <Badge variant="secondary">{blogPosts[0].category}</Badge>
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
                  {blogPosts[0].title}
                </h2>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {blogPosts[0].excerpt}
                </p>
                <Button className="group">
                  Read Full Article
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-8">
            Latest Articles
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map((post, index) => (
              <Card key={index} className="h-full hover:shadow-card transition-all duration-300 border-0 bg-background">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="outline" className="text-xs">
                      {post.category}
                    </Badge>
                    <span className="text-xs text-muted-foreground">{post.readTime}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-foreground leading-tight">
                    {post.title}
                  </h3>
                </CardHeader>
                <CardContent className="flex flex-col justify-between flex-grow">
                  <div>
                    <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                      {post.excerpt}
                    </p>
                  </div>
                  <div>
                    <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
                      <span>{post.author}</span>
                      <span>{new Date(post.date).toLocaleDateString()}</span>
                    </div>
                    <Button variant="outline" size="sm" className="group w-full">
                      Read More
                      <ArrowRight className="w-3 h-3 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-gradient-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Stay Informed, Stay Healthy
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8">
              Subscribe to our newsletter for the latest maternal health insights, 
              research updates, and expert guidance delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-foreground bg-white/90 focus:bg-white transition-colors"
              />
              <Button variant="secondary" className="px-6 py-3">
                Subscribe
              </Button>
            </div>
            <p className="text-sm text-primary-foreground/70 mt-4">
              Join 10,000+ mothers getting weekly health insights. Unsubscribe anytime.
            </p>
          </div>
        </div>
      </section>

      {/* Coming Soon Notice */}
      <section className="py-12 bg-trust-light">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-xl font-semibold text-foreground mb-4">
              Full Blog Coming Soon
            </h3>
            <p className="text-muted-foreground mb-6">
              We're working on bringing you comprehensive maternal health resources. 
              These articles will be available when MamaAlert launches.
            </p>
            <Button asChild>
              <Link to="/waitlist">Join Waitlist for Updates</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;