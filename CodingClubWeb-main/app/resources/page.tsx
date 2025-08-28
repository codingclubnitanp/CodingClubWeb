"use client"

import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ExternalLink, BookOpen, Code, Zap, Star, Download, Github } from "lucide-react"

const resources = {
  roadmaps: [
    {
      title: "Frontend Development 2024",
      description: "Complete roadmap from HTML/CSS to React and beyond",
      difficulty: "Beginner to Advanced",
      duration: "3-6 months",
      topics: ["HTML/CSS", "JavaScript", "React", "Next.js", "TypeScript"],
      link: "#",
    },
    {
      title: "Backend Development",
      description: "Server-side development with Node.js and databases",
      difficulty: "Intermediate",
      duration: "4-8 months",
      topics: ["Node.js", "Express", "MongoDB", "PostgreSQL", "APIs"],
      link: "#",
    },
    {
      title: "Data Structures & Algorithms",
      description: "Master DSA for competitive programming and interviews",
      difficulty: "Beginner to Expert",
      duration: "6-12 months",
      topics: ["Arrays", "Trees", "Graphs", "Dynamic Programming", "Greedy"],
      link: "#",
    },
    {
      title: "Machine Learning Path",
      description: "From basics to advanced ML and deep learning",
      difficulty: "Intermediate to Advanced",
      duration: "8-12 months",
      topics: ["Python", "NumPy", "Pandas", "Scikit-learn", "TensorFlow"],
      link: "#",
    },
  ],
  toolkits: [
    {
      title: "Web Development Starter Kit",
      description: "Everything you need to start web development",
      tools: ["VS Code", "Git", "Node.js", "Chrome DevTools", "Figma"],
      category: "Development",
      downloads: 1250,
    },
    {
      title: "Competitive Programming Setup",
      description: "Optimized environment for competitive coding",
      tools: ["C++ Compiler", "Code Templates", "Fast I/O", "Debugging Tools"],
      category: "Programming",
      downloads: 890,
    },
    {
      title: "AI/ML Research Kit",
      description: "Tools and libraries for machine learning projects",
      tools: ["Jupyter", "Anaconda", "Google Colab", "Kaggle", "Papers"],
      category: "AI/ML",
      downloads: 670,
    },
    {
      title: "Mobile Development Bundle",
      description: "Cross-platform mobile development essentials",
      tools: ["React Native", "Flutter", "Android Studio", "Xcode", "Firebase"],
      category: "Mobile",
      downloads: 540,
    },
  ],
  projects: [
    {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce with React and Node.js",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      author: "Arjun Sharma",
      stars: 45,
      github: "https://github.com",
    },
    {
      title: "Chat Application",
      description: "Real-time chat app with Socket.io",
      tech: ["React", "Socket.io", "Express", "MongoDB"],
      author: "Priya Patel",
      stars: 32,
      github: "https://github.com",
    },
    {
      title: "Task Management System",
      description: "Kanban-style project management tool",
      tech: ["Next.js", "TypeScript", "Prisma", "PostgreSQL"],
      author: "Rahul Kumar",
      stars: 28,
      github: "https://github.com",
    },
    {
      title: "Weather Prediction ML",
      description: "Machine learning model for weather forecasting",
      tech: ["Python", "TensorFlow", "Pandas", "Matplotlib"],
      author: "Ananya Gupta",
      stars: 38,
      github: "https://github.com",
    },
  ],
  links: [
    {
      title: "Documentation & References",
      resources: [
        {
          name: "MDN Web Docs",
          url: "https://developer.mozilla.org",
          description: "Complete web development reference",
        },
        { name: "React Documentation", url: "https://react.dev", description: "Official React docs and tutorials" },
        { name: "Node.js Docs", url: "https://nodejs.org/docs", description: "Server-side JavaScript documentation" },
        { name: "Python.org", url: "https://python.org", description: "Official Python documentation" },
      ],
    },
    {
      title: "Learning Platforms",
      resources: [
        {
          name: "freeCodeCamp",
          url: "https://freecodecamp.org",
          description: "Free coding bootcamp with certificates",
        },
        { name: "Coursera", url: "https://coursera.org", description: "University-level courses online" },
        { name: "Udemy", url: "https://udemy.com", description: "Practical skills courses" },
        { name: "YouTube Channels", url: "#", description: "Curated list of best coding channels" },
      ],
    },
    {
      title: "Practice Platforms",
      resources: [
        { name: "LeetCode", url: "https://leetcode.com", description: "Coding interview preparation" },
        { name: "HackerRank", url: "https://hackerrank.com", description: "Programming challenges and contests" },
        { name: "Codeforces", url: "https://codeforces.com", description: "Competitive programming platform" },
        { name: "GeeksforGeeks", url: "https://geeksforgeeks.org", description: "DSA tutorials and practice" },
      ],
    },
  ],
}

export default function ResourcesPage() {
  return (
    <main className="min-h-screen aurora-bg">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="font-heading font-bold text-4xl sm:text-5xl lg:text-6xl mb-6">
            <span className="gradient-text">Resources</span>
          </h1>
          <p className="text-xl text-[#E0E0E0] max-w-3xl mx-auto leading-relaxed">
            Curated learning paths, tools, and projects to accelerate your coding journey and build amazing things.
          </p>
        </div>
      </section>

      {/* Learning Roadmaps */}
      <section className="px-4 sm:px-6 lg:px-8 mb-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-heading font-bold text-3xl mb-12 flex items-center">
            <BookOpen className="mr-3 h-8 w-8 text-[#4A90E2]" />
            <span className="gradient-text">Learning Roadmaps</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {resources.roadmaps.map((roadmap) => (
              <div key={roadmap.title} className="glass glass-hover rounded-lg p-6">
                <h3 className="font-heading font-bold text-xl text-white mb-3">{roadmap.title}</h3>
                <p className="text-[#B0B0B0] mb-4">{roadmap.description}</p>
                <div className="flex flex-wrap gap-4 mb-4 text-sm">
                  <span className="text-[#4A90E2]">📊 {roadmap.difficulty}</span>
                  <span className="text-[#50C878]">⏱️ {roadmap.duration}</span>
                </div>
                <div className="flex flex-wrap gap-2 mb-6">
                  {roadmap.topics.map((topic) => (
                    <span key={topic} className="px-3 py-1 bg-[#4A90E2]/20 text-[#4A90E2] rounded-full text-sm">
                      {topic}
                    </span>
                  ))}
                </div>
                <Button className="w-full bg-[#4A90E2] hover:bg-[#5BA0F2]">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  View Roadmap
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Toolkits */}
      <section className="px-4 sm:px-6 lg:px-8 mb-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-heading font-bold text-3xl mb-12 flex items-center">
            <Zap className="mr-3 h-8 w-8 text-[#50C878]" />
            <span className="gradient-text">Development Toolkits</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {resources.toolkits.map((toolkit) => (
              <div key={toolkit.title} className="glass glass-hover rounded-lg p-6">
                <div className="flex items-center justify-between mb-3">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${
                      toolkit.category === "Development"
                        ? "bg-[#4A90E2]/20 text-[#4A90E2]"
                        : toolkit.category === "Programming"
                          ? "bg-[#50C878]/20 text-[#50C878]"
                          : toolkit.category === "AI/ML"
                            ? "bg-[#FF6B6B]/20 text-[#FF6B6B]"
                            : "bg-[#FFD93D]/20 text-[#FFD93D]"
                    }`}
                  >
                    {toolkit.category}
                  </span>
                  <span className="text-[#B0B0B0] text-xs flex items-center">
                    <Download className="mr-1 h-3 w-3" />
                    {toolkit.downloads}
                  </span>
                </div>
                <h3 className="font-heading font-bold text-lg text-white mb-2">{toolkit.title}</h3>
                <p className="text-[#B0B0B0] text-sm mb-4">{toolkit.description}</p>
                <div className="space-y-1 mb-4">
                  {toolkit.tools.map((tool) => (
                    <div key={tool} className="text-[#E0E0E0] text-sm flex items-center">
                      <div className="w-1 h-1 bg-[#4A90E2] rounded-full mr-2" />
                      {tool}
                    </div>
                  ))}
                </div>
                <Button size="sm" className="w-full bg-[#50C878] hover:bg-[#60D888]">
                  <Download className="mr-2 h-4 w-4" />
                  Download Kit
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Club Projects */}
      <section className="px-4 sm:px-6 lg:px-8 mb-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-heading font-bold text-3xl mb-12 flex items-center">
            <Code className="mr-3 h-8 w-8 text-[#FF6B6B]" />
            <span className="gradient-text">Club Projects</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {resources.projects.map((project) => (
              <div key={project.title} className="glass glass-hover rounded-lg p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="font-heading font-bold text-xl text-white mb-2">{project.title}</h3>
                    <p className="text-[#B0B0B0] mb-3">{project.description}</p>
                  </div>
                  <div className="flex items-center text-[#FFD93D] text-sm">
                    <Star className="mr-1 h-4 w-4 fill-current" />
                    {project.stars}
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span key={tech} className="px-2 py-1 bg-[#FF6B6B]/20 text-[#FF6B6B] rounded text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[#E0E0E0] text-sm">by {project.author}</span>
                  <Button size="sm" className="bg-[#FF6B6B] hover:bg-[#FF7B7B]">
                    <Github className="mr-2 h-4 w-4" />
                    View Code
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Curated Links */}
      <section className="px-4 sm:px-6 lg:px-8 mb-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-heading font-bold text-3xl mb-12 flex items-center">
            <ExternalLink className="mr-3 h-8 w-8 text-[#FFD93D]" />
            <span className="gradient-text">Curated Links</span>
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {resources.links.map((category) => (
              <div key={category.title} className="glass rounded-lg p-6">
                <h3 className="font-heading font-bold text-xl text-white mb-6">{category.title}</h3>
                <div className="space-y-4">
                  {category.resources.map((resource) => (
                    <div key={resource.name} className="border-l-2 border-[#4A90E2] pl-4">
                      <a
                        href={resource.url}
                        className="text-[#4A90E2] hover:text-[#5BA0F2] font-semibold transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {resource.name}
                      </a>
                      <p className="text-[#B0B0B0] text-sm mt-1">{resource.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
