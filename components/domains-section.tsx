"use client"

import { Code, Smartphone, Brain, Trophy, Globe, Database } from "lucide-react"

const domains = [
  {
    icon: Code,
    title: "Web Development",
    description: "Full-stack web applications using modern frameworks like React, Next.js, and Node.js",
    color: "text-[#4A90E2]",
    bgColor: "bg-[#4A90E2]/20",
  },
  {
    icon: Smartphone,
    title: "Mobile Development",
    description: "Cross-platform mobile apps with React Native and Flutter for iOS and Android",
    color: "text-[#50C878]",
    bgColor: "bg-[#50C878]/20",
  },
  {
    icon: Brain,
    title: "AI & Machine Learning",
    description: "Cutting-edge AI solutions, deep learning models, and data science projects",
    color: "text-[#FF6B6B]",
    bgColor: "bg-[#FF6B6B]/20",
  },
  {
    icon: Trophy,
    title: "Competitive Programming",
    description: "Algorithm mastery, contest participation, and problem-solving excellence",
    color: "text-[#FFD93D]",
    bgColor: "bg-[#FFD93D]/20",
  },
  {
    icon: Globe,
    title: "Open Source",
    description: "Contributing to global projects and building tools for the developer community",
    color: "text-[#9B59B6]",
    bgColor: "bg-[#9B59B6]/20",
  },
  {
    icon: Database,
    title: "Backend & DevOps",
    description: "Scalable server architectures, cloud deployment, and system design",
    color: "text-[#E67E22]",
    bgColor: "bg-[#E67E22]/20",
  },
]

export default function DomainsSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl mb-6">
            <span className="gradient-text">Our Domains</span>
          </h2>
          <p className="text-xl text-[#E0E0E0] max-w-3xl mx-auto leading-relaxed">
            Explore diverse technology domains and find your passion in the ever-evolving world of software development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {domains.map((domain) => {
            const IconComponent = domain.icon
            return (
              <div key={domain.title} className="glass glass-hover rounded-lg p-8 group cursor-pointer">
                <div
                  className={`w-16 h-16 ${domain.bgColor} rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <IconComponent className={`h-8 w-8 ${domain.color}`} />
                </div>
                <h3 className="font-heading font-bold text-xl text-white mb-4">{domain.title}</h3>
                <p className="text-[#B0B0B0] leading-relaxed">{domain.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
