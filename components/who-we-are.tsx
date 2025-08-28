import { Code, Lightbulb, ArrowRight, Github, Brain } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function WhoWeAre() {
  const pillars = [
    {
      icon: Code,
      title: "Competitive Programming",
      description:
        "Master algorithms and data structures through contests and practice sessions. Join our weekly coding challenges.",
      color: "from-primary to-blue-600",
      features: ["Weekly contests", "Algorithm workshops", "Interview prep"],
    },
    {
      icon: Github,
      title: "Open Source Development",
      description:
        "Contribute to real-world projects and build your developer portfolio. Collaborate with industry professionals.",
      color: "from-green-500 to-emerald-600",
      features: ["Real projects", "Industry mentorship", "Portfolio building"],
    },
    {
      icon: Brain,
      title: "Machine Learning & AI",
      description:
        "Explore cutting-edge AI/ML technologies and build intelligent applications that solve real problems.",
      color: "from-accent to-purple-600",
      features: ["AI workshops", "Research projects", "Industry applications"],
    },
  ]

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="absolute inset-0 aurora-bg opacity-30"></div>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20 slide-in-up">
          <div className="inline-flex items-center px-4 py-2 rounded-full glass mb-6 text-sm font-medium text-muted-foreground">
            <Lightbulb className="w-4 h-4 mr-2 text-primary" />
            Our Mission & Vision
          </div>

          <h2 className="font-heading font-bold text-4xl sm:text-5xl lg:text-6xl mb-8">
            Who <span className="gradient-text">We Are</span>
          </h2>

          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed font-medium">
            The Coding Club of NIT Andhra Pradesh is a student-driven initiative built for all engineering students —
            from absolute beginners to advanced coders. We break down barriers and provide a supportive environment
            where students can explore, build, and grow together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {pillars.map((pillar, index) => (
            <div
              key={index}
              className="glass glass-hover rounded-3xl p-8 group cursor-pointer transition-all duration-500 hover:scale-105 fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex items-start justify-between mb-6">
                <div
                  className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${pillar.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300 glow`}
                >
                  <pillar.icon className="h-10 w-10 text-white" />
                </div>
                <ArrowRight className="w-6 h-6 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all duration-300" />
              </div>

              <h3 className="font-heading font-bold text-2xl mb-4 text-foreground group-hover:text-primary transition-colors duration-300">
                {pillar.title}
              </h3>

              <p className="text-muted-foreground leading-relaxed mb-6 text-lg">{pillar.description}</p>

              <div className="space-y-2">
                {pillar.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
                    {feature}
                  </div>
                ))}
              </div>

              <Button
                variant="ghost"
                className="w-full mt-6 group-hover:bg-primary/10 group-hover:text-primary transition-all duration-300"
              >
                Learn More
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </div>
          ))}
        </div>

        <div className="text-center glass rounded-3xl p-12 fade-in">
          <h3 className="font-heading font-bold text-3xl mb-4 gradient-text">Ready to Start Your Journey?</h3>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join hundreds of students who are already building the future through code.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90 px-8 py-3 rounded-xl glow-hover">
              <Code className="w-5 h-5 mr-2" />
              Join Our Community
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="glass glass-hover border-primary/40 px-8 py-3 rounded-xl bg-transparent"
            >
              <Github className="w-5 h-5 mr-2" />
              View Projects
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
