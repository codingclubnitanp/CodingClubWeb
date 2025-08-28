"use client"

import { useState } from "react"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Search, Calendar, Clock, ArrowRight } from "lucide-react"
import Link from "next/link"

const blogPosts = [
  {
    id: 1,
    title: "Getting Started with React in 2024: A Complete Guide",
    slug: "getting-started-with-react-2024",
    excerpt:
      "Learn the fundamentals of React and build your first modern web application with hooks, components, and best practices.",
    content: "Full article content here...",
    author: {
      name: "Arjun Sharma",
      avatar: "/professional-male-student-president.png",
      bio: "Full-stack developer and React enthusiast",
    },
    publishedAt: "2024-01-15",
    readTime: "8 min read",
    category: "Web Development",
    tags: ["React", "JavaScript", "Frontend", "Tutorial"],
    featured: true,
    image: "/react-tutorial-blog-post.png",
  },
  {
    id: 2,
    title: "My Journey from Beginner to Google SDE: Interview Experience",
    slug: "google-sde-interview-experience",
    excerpt:
      "A detailed account of my preparation strategy, interview rounds, and tips for cracking big tech interviews.",
    content: "Full article content here...",
    author: {
      name: "Aditya Verma",
      avatar: "/alumni-google-engineer.png",
      bio: "Software Engineer at Google, NITAP Alumni",
    },
    publishedAt: "2024-01-10",
    readTime: "12 min read",
    category: "Interview Experience",
    tags: ["Interview", "Google", "Career", "DSA"],
    featured: true,
    image: "/google-interview-experience-blog.png",
  },
  {
    id: 3,
    title: "Building a Machine Learning Model for Sentiment Analysis",
    slug: "ml-sentiment-analysis-tutorial",
    excerpt: "Step-by-step guide to building and deploying a sentiment analysis model using Python and TensorFlow.",
    content: "Full article content here...",
    author: {
      name: "Ananya Gupta",
      avatar: "/professional-female-student-ai-ml.png",
      bio: "AI/ML Lead, passionate about deep learning",
    },
    publishedAt: "2024-01-08",
    readTime: "15 min read",
    category: "Machine Learning",
    tags: ["Python", "TensorFlow", "NLP", "AI"],
    featured: false,
    image: "/machine-learning-sentiment-analysis.png",
  },
  {
    id: 4,
    title: "Top 10 Data Structures Every Programmer Should Know",
    slug: "top-10-data-structures-programmers",
    excerpt: "Master these essential data structures to improve your problem-solving skills and ace coding interviews.",
    content: "Full article content here...",
    author: {
      name: "Karthik Rao",
      avatar: "/professional-male-student-competitive-programming.png",
      bio: "Competitive Programming Lead, Algorithm Expert",
    },
    publishedAt: "2024-01-05",
    readTime: "10 min read",
    category: "DSA Concepts",
    tags: ["DSA", "Algorithms", "Programming", "Interview"],
    featured: false,
    image: "/data-structures-programming-guide.png",
  },
  {
    id: 5,
    title: "Building a Full-Stack E-commerce App with Next.js",
    slug: "nextjs-ecommerce-app-tutorial",
    excerpt:
      "Create a complete e-commerce application with authentication, payments, and admin dashboard using modern web technologies.",
    content: "Full article content here...",
    author: {
      name: "Vikash Singh",
      avatar: "/professional-male-student-web-development.png",
      bio: "Web Development Lead, Next.js enthusiast",
    },
    publishedAt: "2024-01-03",
    readTime: "20 min read",
    category: "Project Walkthrough",
    tags: ["Next.js", "E-commerce", "Full-stack", "TypeScript"],
    featured: false,
    image: "/nextjs-ecommerce-tutorial-blog.png",
  },
  {
    id: 6,
    title: "Latest Trends in Mobile App Development 2024",
    slug: "mobile-app-development-trends-2024",
    excerpt:
      "Explore the cutting-edge technologies and frameworks shaping the future of mobile application development.",
    content: "Full article content here...",
    author: {
      name: "Meera Joshi",
      avatar: "/professional-female-student-mobile-development.png",
      bio: "Mobile Development Lead, Cross-platform expert",
    },
    publishedAt: "2024-01-01",
    readTime: "7 min read",
    category: "Latest Tech",
    tags: ["Mobile", "React Native", "Flutter", "Trends"],
    featured: false,
    image: "/mobile-development-trends-2024.png",
  },
]

const categories = [
  "All",
  "Web Development",
  "Interview Experience",
  "Machine Learning",
  "DSA Concepts",
  "Project Walkthrough",
  "Latest Tech",
]

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")

  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()))
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const featuredPosts = filteredPosts.filter((post) => post.featured)
  const regularPosts = filteredPosts.filter((post) => !post.featured)

  return (
    <main className="min-h-screen aurora-bg">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="font-heading font-bold text-4xl sm:text-5xl lg:text-6xl mb-6">
            <span className="gradient-text">Blog</span>
          </h1>
          <p className="text-xl text-[#E0E0E0] max-w-3xl mx-auto leading-relaxed mb-8">
            Insights, tutorials, and experiences from our coding community. Learn from fellow developers and share your
            knowledge.
          </p>

          {/* Search and Filter */}
          <div className="max-w-4xl mx-auto">
            <div className="glass rounded-lg p-6 mb-8">
              <div className="flex flex-col lg:flex-row gap-4">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-[#B0B0B0]" />
                  <input
                    type="text"
                    placeholder="Search articles, tags, or topics..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-[#1A1F2E] border border-[#4A90E2]/30 rounded-lg text-[#E0E0E0] placeholder-[#B0B0B0] focus:outline-none focus:border-[#4A90E2]"
                  />
                </div>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="px-4 py-3 bg-[#1A1F2E] border border-[#4A90E2]/30 rounded-lg text-[#E0E0E0] focus:outline-none focus:border-[#4A90E2]"
                >
                  {categories.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      {featuredPosts.length > 0 && (
        <section className="px-4 sm:px-6 lg:px-8 mb-16">
          <div className="max-w-7xl mx-auto">
            <h2 className="font-heading font-bold text-3xl mb-8">
              <span className="gradient-text">Featured Articles</span>
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredPosts.map((post) => (
                <Link key={post.id} href={`/blog/${post.slug}`}>
                  <article className="glass glass-hover rounded-lg overflow-hidden group cursor-pointer">
                    <div className="relative">
                      <img
                        src={post.image || "/placeholder.svg"}
                        alt={post.title}
                        className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 bg-[#4A90E2] text-white rounded-full text-sm font-medium">
                          Featured
                        </span>
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-4 mb-4 text-sm text-[#B0B0B0]">
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-1" />
                          {new Date(post.publishedAt).toLocaleDateString()}
                        </div>
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 mr-1" />
                          {post.readTime}
                        </div>
                        <span className="px-2 py-1 bg-[#50C878]/20 text-[#50C878] rounded text-xs">
                          {post.category}
                        </span>
                      </div>
                      <h3 className="font-heading font-bold text-xl text-white mb-3 group-hover:text-[#4A90E2] transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-[#B0B0B0] mb-4 leading-relaxed">{post.excerpt}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <img
                            src={post.author.avatar || "/placeholder.svg"}
                            alt={post.author.name}
                            className="w-8 h-8 rounded-full mr-3"
                          />
                          <div>
                            <p className="text-[#E0E0E0] text-sm font-medium">{post.author.name}</p>
                          </div>
                        </div>
                        <ArrowRight className="h-5 w-5 text-[#4A90E2] group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Regular Posts */}
      <section className="px-4 sm:px-6 lg:px-8 pb-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-heading font-bold text-3xl mb-8">
            <span className="gradient-text">Latest Articles</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post) => (
              <Link key={post.id} href={`/blog/${post.slug}`}>
                <article className="glass glass-hover rounded-lg overflow-hidden group cursor-pointer">
                  <img
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="p-6">
                    <div className="flex items-center gap-4 mb-3 text-sm text-[#B0B0B0]">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        {new Date(post.publishedAt).toLocaleDateString()}
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        {post.readTime}
                      </div>
                    </div>
                    <span className="px-2 py-1 bg-[#FF6B6B]/20 text-[#FF6B6B] rounded text-xs mb-3 inline-block">
                      {post.category}
                    </span>
                    <h3 className="font-heading font-bold text-lg text-white mb-3 group-hover:text-[#4A90E2] transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-[#B0B0B0] text-sm mb-4 leading-relaxed">{post.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <img
                          src={post.author.avatar || "/placeholder.svg"}
                          alt={post.author.name}
                          className="w-6 h-6 rounded-full mr-2"
                        />
                        <p className="text-[#E0E0E0] text-sm">{post.author.name}</p>
                      </div>
                      <div className="flex flex-wrap gap-1">
                        {post.tags.slice(0, 2).map((tag) => (
                          <span key={tag} className="px-2 py-1 bg-[#4A90E2]/20 text-[#4A90E2] rounded text-xs">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-16">
              <p className="text-[#B0B0B0] text-lg">No articles found matching your search criteria.</p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  )
}
