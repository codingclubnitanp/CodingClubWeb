"use client"

export default function UpcomingEvents() {
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

        <div className="mt-12">
          <div className="text-center py-16 glass rounded-xl">
            <h4 className="font-heading font-semibold text-xl text-white mb-2">
              No Upcoming Events
            </h4>
            <p className="text-[#B0B0B0]">
              Stay tuned!! new events will be announced soon!
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
