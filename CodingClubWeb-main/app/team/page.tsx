"use client"

import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Twitter, Mail } from "lucide-react"

const teamMembers = {
  coreCommittee: [
    {
      name: "Banda Tharun",
      position: "Secretary",
      image: "/professional-male-student-president.png",
      bio: "Final year CSE student passionate about full-stack development and competitive programming.",
      skills: ["React", "Node.js", "Python", "DSA"],
      social: {
        github: "https://github.com",
        linkedin: "https://linkedin.com",
        twitter: "https://twitter.com",
      },
    },
    {
      name: "Priya Patel",
      position: "Vice President",
      image: "/professional-female-student-vice-president.png",
      bio: "AI/ML enthusiast with expertise in deep learning and computer vision projects.",
      skills: ["Python", "TensorFlow", "OpenCV", "React"],
      social: {
        github: "https://github.com",
        linkedin: "https://linkedin.com",
        twitter: "https://twitter.com",
      },
    },
    {
      name: "Rahul Kumar",
      position: "Technical Lead",
      image: "/professional-male-student-technical-lead.png",
      bio: "Backend specialist with experience in system design and cloud technologies.",
      skills: ["Java", "Spring Boot", "AWS", "Docker"],
      social: {
        github: "https://github.com",
        linkedin: "https://linkedin.com",
      },
    },
    {
      name: "Sneha Reddy",
      position: "Events Coordinator",
      image: "/professional-female-student-events-coordinator.png",
      bio: "Organizing impactful tech events and building community connections.",
      skills: ["Project Management", "React", "UI/UX", "Marketing"],
      social: {
        github: "https://github.com",
        linkedin: "https://linkedin.com",
        twitter: "https://twitter.com",
      },
    },
  ],
  wingLeads: [
    {
      name: "Vikash Singh",
      position: "Web Development Lead",
      image: "/professional-male-student-web-development.png",
      bio: "Frontend architect specializing in modern web technologies and user experience.",
      skills: ["React", "Next.js", "TypeScript", "Tailwind"],
      social: {
        github: "https://github.com",
        linkedin: "https://linkedin.com",
      },
    },
    {
      name: "Ananya Gupta",
      position: "AI/ML Lead",
      image: "/professional-female-student-ai-ml.png",
      bio: "Research-focused student working on cutting-edge machine learning applications.",
      skills: ["Python", "PyTorch", "Scikit-learn", "Jupyter"],
      social: {
        github: "https://github.com",
        linkedin: "https://linkedin.com",
      },
    },
    {
      name: "Karthik Rao",
      position: "Competitive Programming Lead",
      image: "/professional-male-student-competitive-programming.png",
      bio: "Algorithm expert with multiple contest wins and strong problem-solving skills.",
      skills: ["C++", "Python", "DSA", "Mathematics"],
      social: {
        github: "https://github.com",
        linkedin: "https://linkedin.com",
      },
    },
    {
      name: "Meera Joshi",
      position: "Mobile Development Lead",
      image: "/professional-female-student-mobile-development.png",
      bio: "Cross-platform mobile developer creating innovative mobile solutions.",
      skills: ["React Native", "Flutter", "Firebase", "UI/UX"],
      social: {
        github: "https://github.com",
        linkedin: "https://linkedin.com",
      },
    },
  ],
}

const facultyAdvisor = {
  name: "Dr. K. Himabindu",
  position: "Faculty Advisor",
  department: "Computer Science & Engineering",
  image: "http://nitandhra.ac.in/faculty/assets/uploads/profile_images/16909.jpg",
  bio: "Dr. K. Himabindu is an Assistant Professor at NIT Andhra Pradesh, specializing in Artificial Intelligence and Natural Language Processing. With rich experience in academia and industry, she mentors students in cutting-edge technologies, fosters research and innovation, and guides them toward achieving their professional goals.",
  expertise: ["Natural Language Processing through Deep Learning", "Explainable AI", "Few Shot Learning", "Educational Data Mining"],
  email: "himabinduk@nitandhra.ac.in",
}

const hallOfFame = [
  {
    name: "Aditya Verma",
    batch: "2020-2024",
    achievement: "Software Engineer at Google",
    image: "/alumni-google-engineer.png",
  },
  {
    name: "Riya Sharma",
    batch: "2019-2023",
    achievement: "ML Engineer at Microsoft",
    image: "/alumni-microsoft-engineer.png",
  },
  {
    name: "Harsh Agarwal",
    batch: "2018-2022",
    achievement: "Founder of TechStartup",
    image: "/alumni-startup-founder.png",
  },
]

export default function TeamPage() {
  return (
    <main className="min-h-screen aurora-bg">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="font-heading font-bold text-4xl sm:text-5xl lg:text-6xl mb-6">
            <span className="gradient-text">Our Team</span>
          </h1>
          <p className="text-xl text-[#E0E0E0] max-w-3xl mx-auto leading-relaxed">
            Meet the passionate leaders driving innovation and entrepreneurship at NIT Andhra Pradesh.
          </p>
        </div>
      </section>

      {/* Faculty Advisor */}
      <section className="px-4 sm:px-6 lg:px-8 mb-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-heading font-bold text-3xl text-center mb-12">
            <span className="gradient-text">Faculty Advisor</span>
          </h2>
          <div className="glass rounded-lg p-8">
            <div className="flex flex-col lg:flex-row items-center gap-8">
              <img
                src={facultyAdvisor.image || "/placeholder.svg"}
                alt={facultyAdvisor.name}
                className="w-48 h-48 rounded-full object-cover"
              />
              <div className="flex-1 text-center lg:text-left">
                <h3 className="font-heading font-bold text-2xl text-white mb-2">{facultyAdvisor.name}</h3>
                <p className="text-[#4A90E2] font-semibold mb-1">{facultyAdvisor.position}</p>
                <p className="text-[#B0B0B0] mb-4">{facultyAdvisor.department}</p>
                <p className="text-[#E0E0E0] mb-6 leading-relaxed">{facultyAdvisor.bio}</p>
                <div className="flex flex-wrap gap-2 justify-center lg:justify-start mb-4">
                  {facultyAdvisor.expertise.map((skill) => (
                    <span key={skill} className="px-3 py-1 bg-[#4A90E2]/20 text-[#4A90E2] rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
                <Button
                  className="bg-[#4A90E2] hover:bg-[#5BA0F2] cursor-pointer"
                  onClick={() => (window.location.href = `mailto:${facultyAdvisor.email}`)}
                >
                  <Mail className="mr-2 h-4 w-4" />
                  Contact
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Committee */}
      <section className="px-4 sm:px-6 lg:px-8 mb-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-heading font-bold text-3xl text-center mb-12">
            <span className="gradient-text">Core Committee</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.coreCommittee.map((member) => (
              <div key={member.name} className="glass glass-hover rounded-lg overflow-hidden group">
                <div className="relative">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex flex-wrap gap-1 mb-2">
                      {member.skills.slice(0, 2).map((skill) => (
                        <span key={skill} className="px-2 py-1 bg-[#4A90E2]/80 text-white rounded text-xs">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-heading font-bold text-xl text-white mb-1">{member.name}</h3>
                  <p className="text-[#4A90E2] font-semibold mb-3">{member.position}</p>
                  <p className="text-[#B0B0B0] text-sm mb-4 leading-relaxed">{member.bio}</p>
                  <div className="flex justify-center gap-3">
                    {member.social.github && (
                      <a href={member.social.github} className="text-[#E0E0E0] hover:text-[#4A90E2] transition-colors">
                        <Github className="h-5 w-5" />
                      </a>
                    )}
                    {member.social.linkedin && (
                      <a
                        href={member.social.linkedin}
                        className="text-[#E0E0E0] hover:text-[#4A90E2] transition-colors"
                      >
                        <Linkedin className="h-5 w-5" />
                      </a>
                    )}
                    {member.social.twitter && (
                      <a href={member.social.twitter} className="text-[#E0E0E0] hover:text-[#4A90E2] transition-colors">
                        <Twitter className="h-5 w-5" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Wing Leads */}
      <section className="px-4 sm:px-6 lg:px-8 mb-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-heading font-bold text-3xl text-center mb-12">
            <span className="gradient-text">Wing Leads</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.wingLeads.map((member) => (
              <div key={member.name} className="glass glass-hover rounded-lg overflow-hidden group">
                <div className="relative">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex flex-wrap gap-1 mb-2">
                      {member.skills.slice(0, 2).map((skill) => (
                        <span key={skill} className="px-2 py-1 bg-[#4A90E2]/80 text-white rounded text-xs">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-heading font-bold text-xl text-white mb-1">{member.name}</h3>
                  <p className="text-[#4A90E2] font-semibold mb-3">{member.position}</p>
                  <p className="text-[#B0B0B0] text-sm mb-4 leading-relaxed">{member.bio}</p>
                  <div className="flex justify-center gap-3">
                    {member.social.github && (
                      <a href={member.social.github} className="text-[#E0E0E0] hover:text-[#4A90E2] transition-colors">
                        <Github className="h-5 w-5" />
                      </a>
                    )}
                    {member.social.linkedin && (
                      <a
                        href={member.social.linkedin}
                        className="text-[#E0E0E0] hover:text-[#4A90E2] transition-colors"
                      >
                        <Linkedin className="h-5 w-5" />
                      </a>
                    )}
                    {member.social.twitter && (
                      <a href={member.social.twitter} className="text-[#E0E0E0] hover:text-[#4A90E2] transition-colors">
                        <Twitter className="h-5 w-5" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hall of Fame */}
      <section className="px-4 sm:px-6 lg:px-8 mb-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-heading font-bold text-3xl text-center mb-12">
            <span className="gradient-text">Hall of Fame</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {hallOfFame.map((alumni) => (
              <div key={alumni.name} className="glass glass-hover rounded-lg p-6 text-center">
                <img
                  src={alumni.image || "/placeholder.svg"}
                  alt={alumni.name}
                  className="w-24 h-24 rounded-full object-cover mx-auto mb-4"
                />
                <h3 className="font-heading font-bold text-xl text-white mb-1">{alumni.name}</h3>
                <p className="text-[#B0B0B0] text-sm mb-2">{alumni.batch}</p>
                <p className="text-[#4A90E2] font-semibold">{alumni.achievement}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
