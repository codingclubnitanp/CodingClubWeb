"use client"

import { useState } from "react"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, MapPin, Users, Filter, Grid, List } from "lucide-react"

const events = [
  {
    id: 1,
    title: "Web Development Workshop",
    date: "2024-02-15",
    time: "10:00 AM",
    location: "Computer Lab 1",
    type: "Workshop",
    status: "upcoming",
    description: "Learn modern web development with React and Next.js",
    registrations: 45,
    maxRegistrations: 60,
    image: "/web-development-workshop.png",
  },
  {
    id: 2,
    title: "Competitive Programming Contest",
    date: "2024-02-20",
    time: "2:00 PM",
    location: "Main Auditorium",
    type: "Contest",
    status: "upcoming",
    description: "Test your algorithmic skills in this exciting contest",
    registrations: 120,
    maxRegistrations: 150,
    image: "/competitive-programming-contest.png",
  },
  {
    id: 3,
    title: "AI/ML Bootcamp",
    date: "2024-02-25",
    time: "9:00 AM",
    location: "Seminar Hall",
    type: "Bootcamp",
    status: "upcoming",
    description: "Dive deep into machine learning fundamentals",
    registrations: 80,
    maxRegistrations: 100,
    image: "/ai-machine-learning-bootcamp.png",
  },
  {
    id: 4,
    title: "Hackathon 2024",
    date: "2024-01-20",
    time: "9:00 AM",
    location: "Innovation Lab",
    type: "Hackathon",
    status: "past",
    description: "24-hour coding marathon with amazing prizes",
    registrations: 200,
    maxRegistrations: 200,
    image: "/hackathon-coding-event.png",
  },
]

const eventTypes = ["All", "Workshop", "Contest", "Bootcamp", "Hackathon", "Webinar"]

export default function EventsPage() {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [filterType, setFilterType] = useState("All")
  const [filterStatus, setFilterStatus] = useState("all")

  const filteredEvents = events.filter((event) => {
    const typeMatch = filterType === "All" || event.type === filterType
    const statusMatch = filterStatus === "all" || event.status === filterStatus
    return typeMatch && statusMatch
  })

  return (
    <main className="min-h-screen aurora-bg">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="font-heading font-bold text-4xl sm:text-5xl lg:text-6xl mb-6">
            <span className="gradient-text">Events</span>
          </h1>
          <p className="text-xl text-[#E0E0E0] max-w-3xl mx-auto leading-relaxed">
            Join our exciting workshops, contests, and bootcamps designed to enhance your coding skills and connect with
            fellow developers.
          </p>
        </div>
      </section>

      {/* Filters and View Toggle */}
      <section className="px-4 sm:px-6 lg:px-8 mb-12">
        <div className="max-w-7xl mx-auto">
          <div className="glass rounded-lg p-6 mb-8">
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2">
                  <Filter className="h-5 w-5 text-[#4A90E2]" />
                  <span className="text-[#E0E0E0] font-medium">Filter by:</span>
                </div>
                <select
                  value={filterType}
                  onChange={(e) => setFilterType(e.target.value)}
                  className="bg-[#1A1F2E] border border-[#4A90E2]/30 rounded-lg px-3 py-2 text-[#E0E0E0] focus:outline-none focus:border-[#4A90E2]"
                >
                  {eventTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
                <select
                  value={filterStatus}
                  onChange={(e) => setFilterStatus(e.target.value)}
                  className="bg-[#1A1F2E] border border-[#4A90E2]/30 rounded-lg px-3 py-2 text-[#E0E0E0] focus:outline-none focus:border-[#4A90E2]"
                >
                  <option value="all">All Events</option>
                  <option value="upcoming">Upcoming</option>
                  <option value="past">Past Events</option>
                </select>
              </div>

              <div className="flex items-center gap-2">
                <Button
                  variant={viewMode === "grid" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setViewMode("grid")}
                  className={viewMode === "grid" ? "bg-[#4A90E2]" : "border-[#4A90E2]/30"}
                >
                  <Grid className="h-4 w-4" />
                </Button>
                <Button
                  variant={viewMode === "list" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setViewMode("list")}
                  className={viewMode === "list" ? "bg-[#4A90E2]" : "border-[#4A90E2]/30"}
                >
                  <List className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Events Grid/List */}
      <section className="px-4 sm:px-6 lg:px-8 pb-16">
        <div className="max-w-7xl mx-auto">
          {viewMode === "grid" ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredEvents.map((event) => (
                <div key={event.id} className="glass glass-hover rounded-lg overflow-hidden">
                  <img src={event.image || "/placeholder.svg"} alt={event.title} className="w-full h-48 object-cover" />
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-medium ${
                          event.type === "Workshop"
                            ? "bg-[#4A90E2]/20 text-[#4A90E2]"
                            : event.type === "Contest"
                              ? "bg-[#50C878]/20 text-[#50C878]"
                              : event.type === "Bootcamp"
                                ? "bg-[#FF6B6B]/20 text-[#FF6B6B]"
                                : "bg-[#FFD93D]/20 text-[#FFD93D]"
                        }`}
                      >
                        {event.type}
                      </span>
                      <span
                        className={`px-2 py-1 rounded text-xs ${
                          event.status === "upcoming"
                            ? "bg-green-500/20 text-green-400"
                            : "bg-gray-500/20 text-gray-400"
                        }`}
                      >
                        {event.status}
                      </span>
                    </div>

                    <h3 className="font-heading font-bold text-xl text-white mb-2">{event.title}</h3>
                    <p className="text-[#B0B0B0] mb-4 text-sm">{event.description}</p>

                    <div className="space-y-2 mb-4">
                      <div className="flex items-center text-[#E0E0E0] text-sm">
                        <Calendar className="h-4 w-4 mr-2 text-[#4A90E2]" />
                        {new Date(event.date).toLocaleDateString()}
                      </div>
                      <div className="flex items-center text-[#E0E0E0] text-sm">
                        <Clock className="h-4 w-4 mr-2 text-[#4A90E2]" />
                        {event.time}
                      </div>
                      <div className="flex items-center text-[#E0E0E0] text-sm">
                        <MapPin className="h-4 w-4 mr-2 text-[#4A90E2]" />
                        {event.location}
                      </div>
                      <div className="flex items-center text-[#E0E0E0] text-sm">
                        <Users className="h-4 w-4 mr-2 text-[#4A90E2]" />
                        {event.registrations}/{event.maxRegistrations} registered
                      </div>
                    </div>

                    <Button className="w-full bg-[#4A90E2] hover:bg-[#5BA0F2]" disabled={event.status === "past"}>
                      {event.status === "past" ? "Event Completed" : "Register Now"}
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="space-y-6">
              {filteredEvents.map((event) => (
                <div key={event.id} className="glass glass-hover rounded-lg p-6">
                  <div className="flex flex-col lg:flex-row gap-6">
                    <img
                      src={event.image || "/placeholder.svg"}
                      alt={event.title}
                      className="w-full lg:w-48 h-32 object-cover rounded-lg"
                    />
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-3">
                          <span
                            className={`px-3 py-1 rounded-full text-xs font-medium ${
                              event.type === "Workshop"
                                ? "bg-[#4A90E2]/20 text-[#4A90E2]"
                                : event.type === "Contest"
                                  ? "bg-[#50C878]/20 text-[#50C878]"
                                  : event.type === "Bootcamp"
                                    ? "bg-[#FF6B6B]/20 text-[#FF6B6B]"
                                    : "bg-[#FFD93D]/20 text-[#FFD93D]"
                            }`}
                          >
                            {event.type}
                          </span>
                          <span
                            className={`px-2 py-1 rounded text-xs ${
                              event.status === "upcoming"
                                ? "bg-green-500/20 text-green-400"
                                : "bg-gray-500/20 text-gray-400"
                            }`}
                          >
                            {event.status}
                          </span>
                        </div>
                        <Button className="bg-[#4A90E2] hover:bg-[#5BA0F2]" disabled={event.status === "past"}>
                          {event.status === "past" ? "Completed" : "Register"}
                        </Button>
                      </div>

                      <h3 className="font-heading font-bold text-2xl text-white mb-2">{event.title}</h3>
                      <p className="text-[#B0B0B0] mb-4">{event.description}</p>

                      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                        <div className="flex items-center text-[#E0E0E0] text-sm">
                          <Calendar className="h-4 w-4 mr-2 text-[#4A90E2]" />
                          {new Date(event.date).toLocaleDateString()}
                        </div>
                        <div className="flex items-center text-[#E0E0E0] text-sm">
                          <Clock className="h-4 w-4 mr-2 text-[#4A90E2]" />
                          {event.time}
                        </div>
                        <div className="flex items-center text-[#E0E0E0] text-sm">
                          <MapPin className="h-4 w-4 mr-2 text-[#4A90E2]" />
                          {event.location}
                        </div>
                        <div className="flex items-center text-[#E0E0E0] text-sm">
                          <Users className="h-4 w-4 mr-2 text-[#4A90E2]" />
                          {event.registrations}/{event.maxRegistrations}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  )
}
