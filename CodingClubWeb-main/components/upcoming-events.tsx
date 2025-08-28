"use client"

import { useState, useEffect } from "react"
import { Calendar, Clock, MapPin, Users } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function UpcomingEvents() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  // Mock event data
  const nextEvent = {
    title: "Winter Coding Bootcamp 2025",
    date: "2025-02-15",
    time: "10:00 AM",
    location: "Computer Lab, Block A",
    attendees: 150,
    description: "Intensive 3-day coding bootcamp covering web development, algorithms, and project building.",
  }

  const upcomingEvents = [
    {
      title: "Algorithm Workshop",
      date: "2025-02-20",
      type: "Workshop",
      color: "bg-[#4A90E2]",
    },
    {
      title: "Hackathon 2025",
      date: "2025-03-01",
      type: "Competition",
      color: "bg-[#50C878]",
    },
    {
      title: "Tech Talk: AI Trends",
      date: "2025-03-10",
      type: "Seminar",
      color: "bg-[#FF6B6B]",
    },
  ]

  useEffect(() => {
    const targetDate = new Date("2025-02-15T10:00:00").getTime()

    const timer = setInterval(() => {
      const now = new Date().getTime()
      const difference = targetDate - now

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        })
      }
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent to-[#0A0F1E]/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl mb-6">
            Upcoming <span className="gradient-text">Events</span>
          </h2>
          <p className="text-lg text-[#B0B0B0] max-w-2xl mx-auto">
            Join us for exciting workshops, competitions, and tech talks designed to enhance your coding journey.
          </p>
        </div>

        {/* Featured Event with Countdown */}
        {/* <div className="glass rounded-2xl p-8 mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="inline-block bg-[#4A90E2] text-white px-3 py-1 rounded-full text-sm font-medium mb-4">
                Next Event
              </div>
              <h3 className="font-heading font-bold text-2xl sm:text-3xl mb-4 text-white">{nextEvent.title}</h3>
              <p className="text-[#B0B0B0] mb-6 leading-relaxed">{nextEvent.description}</p>

              <div className="flex flex-wrap gap-4 mb-6 text-sm text-[#E0E0E0]">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-[#4A90E2]" />
                  {nextEvent.date}
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-[#4A90E2]" />
                  {nextEvent.time}
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-[#4A90E2]" />
                  {nextEvent.location}
                </div>
                <div className="flex items-center gap-2">
                  <Users className="h-4 w-4 text-[#4A90E2]" />
                  {nextEvent.attendees} registered
                </div>
              </div>

              <Button className="bg-[#4A90E2] hover:bg-[#5BA0F2] text-white">Register Now</Button>
            </div>

            {/* Countdown Timer */}
            {/* <div className="text-center">
              <h4 className="font-heading font-semibold text-xl mb-6 text-white">Event Starts In</h4>
              <div className="grid grid-cols-4 gap-4">
                {Object.entries(timeLeft).map(([unit, value]) => (
                  <div key={unit} className="glass rounded-lg p-4">
                    <div className="text-2xl sm:text-3xl font-bold text-[#4A90E2] mb-1">
                      {value.toString().padStart(2, "0")}
                    </div>
                    <div className="text-xs uppercase text-[#B0B0B0] font-medium">{unit}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div> */}

        {/* Other Upcoming Events */}
        <div className="mt-12">
          {/* {upcomingEvents.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {upcomingEvents.map((event, index) => (
                <div
                  key={index}
                  className="glass glass-hover rounded-xl p-6 group cursor-pointer"
                >
                  <div className={`w-3 h-3 ${event.color} rounded-full mb-4`}></div>
                  <h4 className="font-heading font-semibold text-lg mb-2 text-white group-hover:text-[#4A90E2] transition-colors">
                    {event.title}
                  </h4>
                  <div className="flex items-center gap-2 text-sm text-[#B0B0B0] mb-2">
                    <Calendar className="h-4 w-4" />
                    {event.date}
                  </div>
                  <div className="inline-block bg-[#4A90E2]/20 text-[#4A90E2] px-2 py-1 rounded text-xs font-medium">
                    {event.type}
                  </div>
                </div>
              ))}
            </div>
          ) : ( */}
            <div className="text-center py-16 glass rounded-xl">
              <h4 className="font-heading font-semibold text-xl text-white mb-2">
                No Upcoming Events
              </h4>
              <p className="text-[#B0B0B0]">
                Stay tuned!! new events will be announced soon!
              </p>
            </div>
          {/* })} */}
        </div>
      </div>
    </section>
  )
}
