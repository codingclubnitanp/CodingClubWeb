import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Target, Eye, Users, Laptop2, Award } from "lucide-react"
import Image from "next/image"

export default function AboutPage() {
  const missions = [
    {
      title: "Structured Learning Pathways",
      description:
        "Provide accessible pathways for students of all skill levels to gain hands-on coding experience, explore diverse tech domains, and apply knowledge in real-world projects.",
      icon: Target,
    },
    {
      title: "Collaborative Environment",
      description:
        "Build a collaborative environment where peer-to-peer learning, healthy competition, and mentorship between juniors, seniors, and alumni drive personal and professional growth.",
      icon: Users,
    },
    {
      title: "Industry Connections",
      description:
        "Connect students with industry, research opportunities, and impactful resources, enabling them to solve relevant problems and prepare for global careers in technology.",
      icon: Award,
    },
  ]

  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 aurora-bg">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-heading font-bold text-4xl sm:text-5xl lg:text-6xl mb-6">
            About <span className="gradient-text">Our Club</span>
          </h1>
          <p className="text-xl text-[#B0B0B0] leading-relaxed">
            The Coding Club of NIT Andhra Pradesh is a student-driven initiative built for all engineering students —
            from absolute beginners to advanced coders.
          </p>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Eye className="h-8 w-8 text-[#4A90E2]" />
                <h2 className="font-heading font-bold text-3xl text-white">Our Vision</h2>
              </div>
              <p className="text-lg text-[#B0B0B0] leading-relaxed">
                To foster a thriving, inclusive, and innovative tech community at NIT Andhra Pradesh that empowers
                students to explore, learn, and excel in the ever-evolving world of technology nurturing problem
                solvers, innovators, and leaders who are globally competent, nationally relevant, and socially
                responsible.
              </p>
            </div>
            <div className="glass rounded-2xl p-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-[#4A90E2] to-[#50C878] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Laptop2 className="h-10 w-10 text-white" />
                </div>
                <h3 className="font-heading font-semibold text-xl text-white mb-2">Tech Community</h3>
                <p className="text-[#B0B0B0]">Creating tomorrow's tech leaders today</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent to-[#0A0F1E]/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-3xl sm:text-4xl mb-6">
              Our <span className="gradient-text">Mission</span>
            </h2>
            <p className="text-lg text-[#B0B0B0] max-w-3xl mx-auto">
              We are committed to three core principles that guide everything we do.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {missions.map((mission, index) => (
              <div key={index} className="glass glass-hover rounded-xl p-8 group">
                <div className="w-16 h-16 bg-gradient-to-br from-[#4A90E2] to-[#5BA0F2] rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <mission.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-heading font-semibold text-xl mb-4 text-white">{mission.title}</h3>
                <p className="text-[#B0B0B0] leading-relaxed">{mission.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Faculty Advisor Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-heading font-bold text-3xl sm:text-4xl mb-12">
            Faculty <span className="gradient-text">Advisor</span>
          </h2>

          <div className="glass rounded-2xl p-8 max-w-2xl mx-auto">
            <div className="w-32 h-32 bg-gradient-to-br from-[#4A90E2] to-[#50C878] rounded-full mx-auto mb-6 flex items-center justify-center">
              <Image
                src="http://nitandhra.ac.in/faculty/assets/uploads/profile_images/16909.jpg"
                alt="Dr. K. Himabindu"
                width={128}
                height={128}
                className="w-32 h-32 object-cover rounded-full"
              />
            </div>
            <h3 className="font-heading font-bold text-2xl text-white mb-2">Dr. K. Himabindu</h3>
            <p className="text-[#4A90E2] mb-4">Assistant Professor<br />
            <span className="text-sm text-[#B0B0B0] mb-6"> Computer Science & Engineering, NIT Andhra Pradesh </span></p>
            <p className="text-[#B0B0B0] leading-relaxed">
              "The Coding Club represents the spirit of innovation and collaboration that defines our institution. I am
              proud to guide these talented students as they build the future of technology."
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
