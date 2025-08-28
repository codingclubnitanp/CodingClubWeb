import Link from "next/link"
import { Github, Linkedin, Instagram, Mail, MapPin } from "lucide-react"
import Image from "next/image"

export default function Footer() {
  const socialLinks = [
    { icon: Linkedin, href: "https://www.linkedin.com/company/codingclubnitanp", label: "LinkedIn" },
    { icon: Mail, href: "mailto:coding@nitandhra.ac.in", label: "Email" },
    { icon: Instagram, href: "https://www.instagram.com/codingclubnitanp", label: "Instagram" },
  ]

  const quickLinks = [
    { href: "/about", label: "About" },
    { href: "/events", label: "Events" },
    { href: "/team", label: "Team" },
    { href: "/resources", label: "Resources" },
  ]

  return (
    <footer className="bg-background border-t border-primary/20 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Club Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <Image
                src="/images/coding-club-logo.png"
                alt="Coding Club, NIT Andhra Pradesh"
                width={32}
                height={32}
                className="w-12 h-12 object-cover"
              />
              {/*<span className="font-heading font-bold text-lg text-white">Coding Club, NIT Andhra Pradesh</span>*/}
            </div>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              From Code to Creativity, We Build It All. NIT Andhra Pradesh's premier coding community where innovation
              meets collaboration.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <Link
                  key={index}
                  href={social.href}
                  className="w-10 h-10 glass glass-hover rounded-lg flex items-center justify-center text-gray-300 hover:text-primary transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link href={link.href} className="text-muted-foreground hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4 text-white">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3 text-muted-foreground">
                <MapPin className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-sm">
                  NIT Andhra Pradesh
                  <br />
                  Tadepalligudem, West Godavari
                  <br />
                  Andhra Pradesh - 534101
                </span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <Mail className="h-5 w-5 text-primary" />
                <span className="text-sm">coding@nitandhra.ac.in</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary/20 mt-8 pt-8 text-center">
          <p className="text-muted-foreground text-sm">
            © 2025 Coding Club, NIT Andhra Pradesh. All rights reserved. Built with ❤️ by the club members.
          </p>
        </div>
      </div>
    </footer>
  )
}
