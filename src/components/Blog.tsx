
import React from 'react';
import { Calendar, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';

const Blog = () => {
  const blogPosts = [
    {
      title: "Breaking Barriers: How Smart Wheelchairs Are Changing Lives in Bangladesh",
      excerpt: "Discover the impact of affordable smart mobility solutions on the disability community in Bangladesh.",
      date: "March 15, 2024",
      category: "Impact Stories",
      image: "photo-1649972904349-6e44c42644a7",
      readTime: "5 min read"
    },
    {
      title: "The Future of Assistive Technology: Solar-Powered Mobility",
      excerpt: "Learn how solar technology is making wheelchair independence more sustainable and accessible.",
      date: "March 10, 2024", 
      category: "Technology",
      image: "photo-1518495973542-4542c06a5843",
      readTime: "3 min read"
    },
    {
      title: "Customer Story: Rahman's Journey to Independence",
      excerpt: "Meet Rahman, whose life was transformed by PulsyGo's voice control technology.",
      date: "March 5, 2024",
      category: "Customer Stories", 
      image: "photo-1581091226825-a6a2a5aee158",
      readTime: "4 min read"
    }
  ];

  return (
    <section id="blog" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Latest Updates & Stories</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay informed about our latest developments, customer stories, and disability awareness content
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {blogPosts.map((post, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="relative">
                <img
                  src={`https://images.unsplash.com/${post.image}?auto=format&fit=crop&w=400&q=80`}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 left-4 bg-pulsy-blue text-white px-3 py-1 rounded-full text-sm font-medium">
                  {post.category}
                </div>
              </div>

              <CardHeader className="pb-2">
                <h3 className="text-xl font-bold text-gray-900 line-clamp-2 hover:text-pulsy-blue transition-colors cursor-pointer">
                  {post.title}
                </h3>
              </CardHeader>

              <CardContent className="pt-0">
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    {post.date}
                  </div>
                  <span>{post.readTime}</span>
                </div>

                <Button variant="outline" className="w-full group">
                  Read More
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button className="bg-pulsy-blue hover:bg-pulsy-blue-light text-white px-8">
            View All Articles
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Blog;
