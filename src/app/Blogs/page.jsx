"use client";

import { useState, useEffect, useRef } from 'react';
import Link from "next/link";
import Head from 'next/head';

export default function BlogLayout() {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const [hoveredCard, setHoveredCard] = useState(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    
    // Simulate API call
    setTimeout(() => {
      setIsSubscribed(true);
      setEmail('');
      setIsLoading(false);
    }, 1500);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };
    
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX / window.innerWidth, y: e.clientY / window.innerHeight });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const blogPosts = [
    {
      id: 1,
      title: "How Comparison Quotes, Reviews, and Articles Help a Tech Buyer's Journey",
      date: "April, 2025",
      readTime: "5 min read",
      category: "MarTech",
      imageUrl: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&h=400&fit=crop",
      slug: "/Blogs/buyers-content-help",
      views: 324,
      likes: 89,
      excerpt: "Discover how strategic content guides buyers through their decision-making process in the tech industry."
    },
    {
      id: 2,
      title: "Tech Buyer And Its Decision Making Journey",
      date: "May 12, 2025",
      readTime: "7 min read",
      category: "Business",
      imageUrl: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&h=400&fit=crop",
      slug: "/Blogs/buyer-journey",
      views: 456,
      likes: 123,
      excerpt: "Understanding the complex journey of tech buyers and how to optimize their experience."
    },
    {
      id: 3,
      title: "AI in HR & Payroll: How AI is reshaping HR & Payroll in 2025",
      date: "June 1, 2025",
      readTime: "5 min read",
      category: "AI",
      imageUrl: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop",
      slug: "/Blogs/AI-in-HR-Payroll",
      views: 678,
      likes: 234,
      excerpt: "Explore how artificial intelligence is transforming human resources and payroll management."
    },
    {
      id: 4,
      title: "VoIP vs. Traditional Phone: What's Right for Your Business?",
      date: "June 2, 2025",
      readTime: "5 min read",
      category: "Technology",
      imageUrl: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=400&fit=crop",
      slug: "/Blogs/VoIP",
      views: 289,
      likes: 67,
      excerpt: "Compare VoIP and traditional phone systems to find the best communication solution."
    },
    {
      id: 5,
      title: "Top 5 Things to Look for in a Fleet Management System in 2025",
      date: "June 3, 2025",
      readTime: "5 min read",
      category: "Technology",
      imageUrl: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=600&h=400&fit=crop",
      slug: "/Blogs/fleet-management-system-2025",
      views: 345,
      likes: 78,
      excerpt: "Essential features to consider when choosing a fleet management system for your business."
    },
    {
      id: 6,
      title: "Salesforce vs. HubSpot vs. Zoho: Which CRM Is Best for You?",
      date: "June 4, 2025",
      readTime: "5 min read",
      category: "Business",
      imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      slug: "/Blogs/salesforce-vs-hubspot-vs-zoho",
      views: 567,
      likes: 145,
      excerpt: "Comprehensive comparison of three leading CRM platforms to help you make the right choice."
    }
  ];

  const categories = ['All', 'AI', 'MarTech', 'Business', 'Technology', 'Security'];
  
  const filteredPosts = activeCategory === 'All' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === activeCategory);



function BlogCard({ post, index, hoveredCard, setHoveredCard }) {
  return (
    <Link href={post.slug} passHref legacyBehavior>
      <a
        onMouseEnter={() => setHoveredCard(index)}
        onMouseLeave={() => setHoveredCard(null)}
        className={`relative rounded-3xl overflow-hidden shadow-xl bg-white transition-transform duration-300 transform cursor-pointer ${
          hoveredCard === index ? "scale-105 shadow-emerald-200" : ""
        }`}
        style={{ textDecoration: "none" }}
      >
        <img
          src={post.imageUrl}
          alt={post.title}
          className="w-full h-56 object-cover"
        />
        <div className="p-6">
          <div className="text-sm font-semibold text-emerald-600 mb-2">
            {post.category} &bull; {post.date}
          </div>
          <h3 className="text-lg font-bold text-slate-800 line-clamp-2 mb-2">
            {post.title}
          </h3>
          <p className="text-sm text-slate-600 line-clamp-3">{post.excerpt}</p>
          <div className="mt-4 flex justify-between items-center text-xs text-slate-400">
            <span>{post.readTime}</span>
            <span>
              {post.views} views · {post.likes} likes
            </span>
          </div>
        </div>
      </a>
    </Link>
  );
}
// ...existing code...



  return (
        <div className="min-h-screen bg-slate-50">

      <Head>
        <title>About</title>
        <meta property="og:title" content="Blogs section" />
        <meta property="og:description" content="Here you find different blogs" />
        {/* <meta property="og:image" content="https://blogs.compare-bazaar.com/images/blog2.webp" />
        <meta property="og:url" content={currentUrl} /> */}
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="PersonifiedB2B" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      {/* Redesigned Hero Section */}
      <div
        ref={heroRef}px
        className="relative min-h-screen flex items-center overflow-hidden mt-20"
        style={{
          background: `radial-gradient(ellipse at top, #0E1F1C 0%, #0E1F1C 30%, #0E1F1C 100%)`
        }}
      >
        {/* Dynamic Background Pattern */}
        <div className="absolute inset-0">
          {/* Hexagonal Grid Pattern */}
          <svg className="absolute inset-0 w-full h-full opacity-5" viewBox="0 0 100 100">
            <defs>
              <pattern id="hexagons" x="0" y="0" width="20" height="17.32" patternUnits="userSpaceOnUse">
                <polygon points="10,1 18.66,6 18.66,16 10,21 1.34,16 1.34,6" fill="none" stroke="#fbbf24" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect x="0" y="0" width="100%" height="100%" fill="url(#hexagons)" />
          </svg>

          {/* Floating Orbs */}
          {[...Array(8)].map((_, i) => (
            <div
              key={`orb-${i}`}
              className="absolute rounded-full blur-xl opacity-20"
              style={{
                width: `${100 + Math.random() * 200}px`,
                height: `${100 + Math.random() * 200}px`,
                background: i % 2 === 0 
                  ? 'linear-gradient(45deg, #fbbf24, #f59e0b)' 
                  : 'linear-gradient(45deg, #059669, #047857)',
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animation: `float ${8 + Math.random() * 4}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 5}s`
              }}
            />
          ))}

          {/* Animated Lines */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(5)].map((_, i) => (
              <div
                key={`line-${i}`}
                className="absolute h-px bg-gradient-to-r from-transparent via-yellow-400/30 to-transparent"
                style={{
                  width: '200%',
                  top: `${20 + i * 20}%`,
                  left: '-50%',
                  animation: `slideRight ${15 + i * 2}s linear infinite`,
                  animationDelay: `${i * 3}s`
                }}
              />
            ))}
          </div>
        </div>

        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 items-center min-h-screen py-20">
            {/* Left Content - Spans 7 columns */}
            <div className="lg:col-span-7 text-center lg:text-left">
              {/* Floating Badge */}
              <div className="mb-8 inline-flex">
                <div className="relative">
                  <div className="absolute inset-0 bg-yellow-400 rounded-full blur opacity-50 animate-pulse"></div>
                </div>
              </div>
              
              {/* Main Heading */}
              <div className="mb-8">
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black mb-6 leading-none">
                  <div className="relative inline-block">
                    <span className="block text-white mb-2 transform hover:scale-105 transition-transform duration-300">
                      Unlock
                    </span>
                    <span className="block relative">
                      <span className="bg-gradient-to-r from-yellow-300 via-yellow-400 to-amber-400 bg-clip-text text-transparent">
                        Tomorrow's Tech
                      </span>
                      <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-yellow-400 to-transparent rounded-full"></div>
                    </span>
                  </div>
                </h1>
                
                <div className="flex items-center justify-center lg:justify-start space-x-4 mt-6">
                  <div className="h-px bg-gradient-to-r from-transparent to-yellow-400 w-16"></div>
                  <span className="text-yellow-400 text-sm font-semibold uppercase tracking-wider">Today</span>
                  <div className="h-px bg-gradient-to-r from-yellow-400 to-transparent w-16"></div>
                </div>
              </div>
              
              <p className="text-xl lg:text-2xl text-emerald-100 mb-12 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-light">
                Dive deep into the future of technology with expert analysis, breakthrough insights, and industry-leading perspectives.
              </p>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start mb-16">
                <button 
                  onClick={() => document.getElementById('blog-section').scrollIntoView({ behavior: 'smooth' })}
                  className="group relative px-10 py-5 bg-gradient-to-r from-yellow-400 to-yellow-500 text-emerald-900 font-bold rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-yellow-400/25 hover:scale-105"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-300 to-yellow-400 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                  <div className="relative flex items-center justify-center gap-3">
                    <span className="text-lg">Explore Articles</span>
                    <div className="w-6 h-6 bg-emerald-900/20 rounded-full flex items-center justify-center group-hover:rotate-45 transition-transform duration-300">
                      <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M13 12L8 7V17L13 12Z" />
                      </svg>
                    </div>
                  </div>
                </button>
                
              </div>
              
            </div>

            {/* Right Content - Newsletter Card - Spans 5 columns */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <NewsletterCard 
                email={email}
                setEmail={setEmail}
                isSubscribed={isSubscribed}
                setIsSubscribed={setIsSubscribed}
                isLoading={isLoading}
                error={error}
                handleSubmit={handleSubmit}
              />
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center">
          <div className="flex flex-col items-center text-white/60 hover:text-white transition-colors cursor-pointer"
               onClick={() => document.getElementById('blog-section').scrollIntoView({ behavior: 'smooth' })}>
            <span className="text-sm mb-2">Scroll to explore</span>
            <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-bounce"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Blog Section with New Design */}
      <div id="blog-section" className="relative py-24 bg-white">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23047857' fill-opacity='0.4'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>

        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-20">
              <div className="mb-6">
                <span className="inline-block px-4 py-2 bg-emerald-100 text-emerald-800 rounded-full text-sm font-semibold">
                  Latest Insights
                </span>
              </div>
              
              <h2 className="text-4xl lg:text-6xl font-black mb-6">
                <span className="text-slate-800">Trending </span>
                <span className="relative inline-block">
                  <span className="bg-gradient-to-r from-emerald-600 via-emerald-500 to-teal-500 bg-clip-text text-transparent">
                    Stories
                  </span>
                  <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full transform scale-x-0 animate-[scaleX_2s_ease-out_forwards]"></div>
                </span>
              </h2>
              
              <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                Discover breakthrough insights and expert analysis on the technologies 
                shaping our digital tomorrow.
              </p>
            </div>

            {/* Category Pills */}
            <div className="flex flex-wrap justify-center gap-3 mb-16">
              {categories.map((category, index) => (
                <button 
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-8 py-4 rounded-full text-sm font-bold transition-all duration-500 transform hover:scale-105 ${
                    activeCategory === category
                      ? 'bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-lg shadow-emerald-500/25'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-200'
                  }`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Blog Grid - New Card Design */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
              {filteredPosts.map((post, index) => (
                <BlogCard 
                  key={post.id} 
                  post={post} 
                  index={index}
                  hoveredCard={hoveredCard}
                  setHoveredCard={setHoveredCard}
                />
              ))}
            </div>

            {/* Load More */}
            <div className="text-center">
              <button className="group relative px-12 py-6 bg-gradient-to-r from-[#0E1F1C] to-[#0E1F1C] text-white font-bold rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-emerald-500/25 hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-r from-[#0E1F1C] to-[#0E1F1C] translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                <div className="relative flex items-center gap-3">
                  <span className="text-lg">Load More Stories</span>
                  <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center group-hover:rotate-180 transition-transform duration-500">
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2L15.09 8.26L22 9L17 14L18.18 21L12 17.77L5.82 21L7 14L2 9L8.91 8.26L12 2Z" />
                    </svg>
                  </div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Global Styles */}
      <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        
        @keyframes slideRight {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        
        @keyframes scaleX {
          0% { transform: scaleX(0); }
          100% { transform: scaleX(1); }
        }
        
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fadeInScale {
          from {
            opacity: 0;
            transform: scale(0.8);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        .animate-slide-in-up {
          animation: slideInUp 0.8s ease-out forwards;
        }
        
        .animate-fade-in-scale {
          animation: fadeInScale 0.6s ease-out forwards;
        }

        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
}

function AnimatedStat({ number, label, delay }) {
  const [isAnimated, setIsAnimated] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => setIsAnimated(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div className={`text-center transition-all duration-1000 ${isAnimated ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-8'}`}>
      <div className="text-3xl lg:text-4xl font-black text-yellow-400 mb-2 group-hover:scale-110 transition-transform duration-300">
        {number}
      </div>
      <div className="text-sm text-emerald-200 uppercase tracking-wider font-semibold">
        {label}
      </div>
    </div>
  );
}

function NewsletterCard({ email, setEmail, isSubscribed, setIsSubscribed, isLoading, error, handleSubmit }) {
  return (
    <div className="w-full max-w-sm mx-auto">
      <div className="relative group">
        {/* Outer Glow Border */}
        <div className="absolute -inset-1 bg-gradient-to-r from-yellow-400 to-emerald-400 rounded-2xl blur opacity-25 group-hover:opacity-70 transition duration-1000"></div>

        {/* Main Card */}
        <div className="relative bg-white/90 backdrop-blur-xl rounded-2xl p-6 border border-white/30 shadow-xl">
          <div className="text-center mb-5">
            {/* Icon */}
            <div className="relative mb-3">
              <div className="w-14 h-14 mx-auto bg-gradient-to-br from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center shadow-lg">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </div>
            </div>

            <h3 className="text-xl font-extrabold text-slate-800">
              Subscribe <span className="text-emerald-600">Now</span>
            </h3>
            <p className="text-slate-600 text-sm mt-1">
              Get weekly tech tips & insights right in your inbox.
            </p>
          </div>

          {/* Success Message */}
          {isSubscribed ? (
            <div className="text-center animate-fade-in-scale">
              <h4 className="text-lg font-semibold text-slate-800 mb-2">You're Subscribed 🎉</h4>
              <p className="text-sm text-slate-600 mb-4">Check your email for confirmation.</p>
              <button
                onClick={() => setIsSubscribed(false)}
                className="text-sm text-emerald-600 hover:underline"
              >
                Subscribe a different email
              </button>
            </div>
          ) : (
            // Subscription Form
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
                disabled={isLoading}
                placeholder="you@example.com"
                className="w-full px-4 py-3 rounded-lg border border-slate-300 bg-white text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm transition"
              />

              {error && (
                <div className="text-red-500 text-sm bg-red-50 border border-red-200 p-2 rounded-lg flex items-center">
                  <svg className="w-4 h-4 mr-2" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {error}
                </div>
              )}

              <button
                type="submit"
                disabled={isLoading}
                className="w-full px-5 py-3 rounded-lg bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-semibold text-sm hover:from-emerald-400 hover:to-teal-400 transition disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <div className="flex items-center justify-center gap-2">
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    <span>Subscribing...</span>
                  </div>
                ) : (
                  "Subscribe"
                )}
              </button>
            </form>
          )}

          {/* Footnote */}
          <div className="mt-4 text-center">
            <p className="text-[11px] text-slate-400 flex items-center justify-center gap-1">
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-5a2 2 0 00-2-2h-2l-2-4H10l-2 4H6a2 2 0 00-2 2v5a2 2 0 002 2z" />
              </svg>
              We don’t share your email with anyone.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
