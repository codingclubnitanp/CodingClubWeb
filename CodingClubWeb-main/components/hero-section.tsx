"use client"

import { Suspense } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Calendar, Code, Users, Trophy } from "lucide-react"
import Hero3D from "./hero-3d"

// Define stat items for better maintainability
const stats = [
  {
    icon: Users,
    value: "50+",
    label: "Active Members",
    description: "Growing community",
    gradient: "from-blue-500 to-blue-600",
  },
  {
    icon: Calendar,
    value: "0+",
    label: "Events Hosted",
    description: "This academic year",
    gradient: "from-purple-500 to-purple-600",
  },
  {
    icon: Trophy,
    value: "10+",
    label: "Projects Built",
    description: "Open source & personal",
    gradient: "from-green-500 to-emerald-600",
  },
]

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 to-black pt-24">
      {/* 3D Background */}
      <Suspense fallback={<div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/10" />}>
        <Hero3D />
      </Suspense>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto text-center">
        {/* Heading Section */}
        <div className="animate-slide-in-up space-y-6">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold font-heading leading-tight tracking-tight">
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent animate-pulse">
              Coding Club
            </span>
            <br />
            <span className="bg-gradient-to-r from-gray-100 to-gray-400 bg-clip-text text-transparent">
              NIT Andhra Pradesh
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-xl sm:text-2xl text-blue-400 font-semibold tracking-wide">
            From Code to Creativity, We Build It All
          </p>

          {/* Description */}
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-medium">
            Empowering students through technology, innovation, and collaborative learning. Join NIT Andhra Pradesh's
            premier coding community where passion meets purpose.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            size="lg"
            className="group bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg font-semibold rounded-xl transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-blue-500/50"
          >
            <Code className="mr-2 h-5 w-5" />
            Explore Projects
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="bg-transparent border-2 border-blue-500/50 text-white px-8 py-3 text-lg font-semibold rounded-xl hover:border-blue-500 hover:bg-blue-500/10 transition-all duration-300"
          >
            <Calendar className="mr-2 h-5 w-5" />
            Upcoming Events
          </Button>
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl w-full pb-12">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="group bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 hover:scale-105"
            >
              <div
                className={`flex items-center justify-center w-14 h-14 bg-gradient-to-br ${stat.gradient} rounded-lg mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}
              >
                <stat.icon className="w-7 h-7 text-white" />
              </div>
              <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                {stat.value}
              </div>
              <div className="text-gray-200 font-medium mt-2">{stat.label}</div>
              <div className="text-sm text-gray-400 mt-1">{stat.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}