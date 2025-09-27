import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { Calendar, Clock, User, ArrowRight } from 'lucide-react';

const Blog = () => {
  const blogPosts = [
    {
      title: "Barriers and Facilitators to Maternal Healthcare in East Africa",
      excerpt: "A comprehensive review examining the perspectives of women, families, healthcare providers, and key stakeholders on maternal healthcare access in East Africa.",
      author: "BMC Pregnancy Research Team",
      date: "2025-02-15",
      readTime: "8 min read",
      category: "Health Research",
      featured: true,
      url: "https://bmcpregnancychildbirth.biomedcentral.com/articles/10.1186/s12884-025-07225-8"
    },
    {
      title: "Leveraging AI for Inclusive Maternity Care in Africa",
      excerpt: "Exploring how artificial intelligence can enhance access to maternal healthcare for mothers with disabilities across African communities.",
      author: "National Center for Health Research",
      date: "2024-12-20",
      readTime: "6 min read",
      category: "Technology",
      featured: false,
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11910734/"
    },
    {
      title: "Early Postnatal Care Uptake and Associated Factors",
      excerpt: "Research findings on factors influencing early postnatal care utilization and strategies to improve maternal and newborn outcomes.",
      author: "Frontiers in Public Health",
      date: "2024-11-27",
      readTime: "7 min read",
      category: "Health Education",
      featured: false,
      url: "https://www.frontiersin.org/journals/public-health/articles/10.3389/fpubh.2024.1439280/full"
    },
    {
      title: "Maternal Health Services Completion in Northern Uganda",
      excerpt: "Cross-sectional study examining factors associated with completion of maternal health services among women in outpatient facilities.",
      author: "BMC Health Services Research",
      date: "2024-10-15",
      readTime: "9 min read",
      category: "Health Research",
      featured: false,
      url: "https://bmchealthservres.biomedcentral.com/articles/10.1186/s12913-025-12764-z"
    },
    {
      title: "Adequate Postnatal Care: Only Three in Ten Women",
      excerpt: "New research reveals concerning gaps in postnatal care coverage, highlighting the urgent need for improved maternal health services.",
      author: "BMC Pregnancy and Childbirth",
      date: "2024-09-11",
      readTime: "5 min read",
      category: "Health Education",
      featured: false,
      url: "https://bmcpregnancychildbirth.biomedcentral.com/articles/10.1186/s12884-025-07276-x"
    },
    {
      title: "Selected Newborn Postnatal Care Utilization",
      excerpt: "Understanding factors affecting newborn postnatal care within the first two days after birth to prevent neonatal deaths.",
      author: "BMC Pregnancy Research",
      date: "2024-08-23",
      readTime: "6 min read",
      category: "Newborn Care",
      featured: false,
      url: "https://bmcpregnancychildbirth.biomedcentral.com/articles/10.1186/s12884-025-07594-0"
    }
  ];

  const categories = ["All", "Health Research", "Health Education", "Technology", "Newborn Care"];

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
                <Button className="group" asChild>
                  <a href={blogPosts[0].url} target="_blank" rel="noopener noreferrer">
                    Read Full Article
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </a>
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
                    <Button variant="outline" size="sm" className="group w-full" asChild>
                      <a href={post.url} target="_blank" rel="noopener noreferrer">
                        Read More
                        <ArrowRight className="w-3 h-3 ml-2 group-hover:translate-x-1 transition-transform" />
                      </a>
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