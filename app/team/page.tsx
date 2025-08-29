"use client"

import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Twitter, Mail } from "lucide-react"

const teamMembers = {
  coreCommittee: [
    {
      name: "B Tharun Reddy",
      position: "Secretary",
      image: "/Tharun.png",
      bio: "Final year CSE student passionate about leading tech initiatives and building innovative solutions. Experienced in project management and team coordination.",
      skills: ["JavaScript", "Python", "React", "DSA"],
      social: {
        github: "/",
        linkedin: "/",
        twitter: "/",
      },
    },
  ],

  jointSecretaries: [
    {
      name: "Yeswanth Chirumamilla",
      position: "Joint Secretary",
      image: "/Yeswanth.jpeg",
      bio: "Final year CSE student with expertise in web development and competitive programming. Passionate about creating scalable applications and mentoring peers.",
      skills: ["React", "Node.js", "Java", "DSA"],
      social: {
        github: "/",
        linkedin: "/",
        twitter: "/",
      },
    },
    {
      name: "Navya Ungarala",
      position: "Joint Secretary",
      image: "/professional-female-student.png",
      bio: "Final year CSE student specializing in full-stack development and data structures. Enthusiastic about solving complex problems and team collaboration.",
      skills: ["Python", "JavaScript", "MongoDB", "DSA"],
      social: {
        github: "/",
        linkedin: "/",
        twitter: "/",
      },
    },
    {
      name: "Veerendra Kumar",
      position: "Joint Secretary",
      image: "/professional-male-student.png",
      bio: "Final year CSE student focused on backend development and algorithm optimization. Experienced in building robust systems and API development.",
      skills: ["Java", "Spring Boot", "MySQL", "DSA"],
      social: {
        github: "/",
        linkedin: "/",
        twitter: "/",
      },
    },
    {
      name: "Lahari Kethu",
      position: "Joint Secretary",
      image: "/professional-female-student.png",
      bio: "Final year CSE student passionate about frontend technologies and user experience design. Skilled in creating responsive and interactive web applications.",
      skills: ["React", "CSS", "JavaScript", "DSA"],
      social: {
        github: "/",
        linkedin: "/",
        twitter: "/",
      },
    },
    {
      name: "I Harsha Vardhan",
      position: "Joint Secretary",
      image: "/professional-male-student.png",
      bio: "Final year CSE student with strong foundation in programming and software development. Passionate about competitive coding and problem-solving.",
      skills: ["C++", "Python", "Git", "DSA"],
      social: {
        github: "/",
        linkedin: "/",
        twitter: "/",
      },
    },
    {
      name: "N Jaswanth",
      position: "Joint Secretary",
      image: "/professional-male-student.png",
      bio: "Final year CSE student interested in machine learning and data science applications. Experienced in developing intelligent systems and analytics tools.",
      skills: ["Python", "TensorFlow", "SQL", "DSA"],
      social: {
        github: "/",
        linkedin: "/",
        twitter: "/",
      },
    },
    {
      name: "Mansi Mehta",
      position: "Joint Secretary",
      image: "/professional-female-student.png",
      bio: "Final year ECE student bridging hardware and software domains with expertise in embedded systems. Passionate about IoT and electronic circuit design.",
      skills: ["C", "Arduino", "Python", "DSA"],
      social: {
        github: "/",
        linkedin: "/",
        twitter: "/",
      },
    },
    {
      name: "Kausalya K",
      position: "Joint Secretary",
      image: "/professional-female-student.png",
      bio: "Final year Chemical Engineering student with interest in process automation and data analysis. Skilled in applying programming to engineering solutions.",
      skills: ["Python", "MATLAB", "R", "DSA"],
      social: {
        github: "/",
        linkedin: "/",
        twitter: "/",
      },
    },
    {
      name: "B Sasanka",
      position: "Joint Secretary",
      image: "/professional-male-student.png",
      bio: "Third year CSE student enthusiastic about web development and open-source contributions. Actively learning new technologies and framework implementations.",
      skills: ["HTML", "CSS", "JavaScript", "DSA"],
      social: {
        github: "/",
        linkedin: "/",
        twitter: "/",
      },
    },
    {
      name: "Adithya Sai Srinivas M",
      position: "Joint Secretary",
      image: "/professional-male-student.png",
      bio: "Third year CSE student focused on mobile app development and cross-platform solutions. Passionate about creating user-friendly applications.",
      skills: ["Flutter", "Dart", "Firebase", "DSA"],
      social: {
        github: "/",
        linkedin: "/",
        twitter: "/",
      },
    },
    {
      name: "V Chaitanya Kalyana Varma",
      position: "Joint Secretary",
      image: "/professional-male-student.png",
      bio: "Third year CSE student specializing in backend development and database management. Interested in scalable architecture and system design.",
      skills: ["Node.js", "Express", "PostgreSQL", "DSA"],
      social: {
        github: "/",
        linkedin: "/",
        twitter: "/",
      },
    },
    {
      name: "Kavya Telagareddi",
      position: "Joint Secretary",
      image: "/professional-female-student.png",
      bio: "Third year CSE student passionate about artificial intelligence and machine learning applications. Experienced in developing predictive models and data analysis.",
      skills: ["Python", "Scikit-learn", "Pandas", "DSA"],
      social: {
        github: "/",
        linkedin: "/",
        twitter: "/",
      },
    },
    {
      name: "Pavani Potturi",
      position: "Joint Secretary",
      image: "/professional-female-student.png",
      bio: "Third year CSE student interested in cybersecurity and ethical hacking practices. Focused on building secure applications and network security.",
      skills: ["Python", "Linux", "Networking", "DSA"],
      social: {
        github: "/",
        linkedin: "/",
        twitter: "/",
      },
    },
    {
      name: "Soham Tripathy",
      position: "Joint Secretary",
      image: "/professional-male-student.png",
      bio: "Third year CSE student enthusiastic about game development and graphics programming. Skilled in creating interactive experiences and visual applications.",
      skills: ["C#", "Unity", "OpenGL", "DSA"],
      social: {
        github: "/",
        linkedin: "/",
        twitter: "/",
      },
    },
    {
      name: "S Sri Adinarayana Reddy",
      position: "Joint Secretary",
      image: "/professional-male-student.png",
      bio: "Third year ECE student with expertise in digital signal processing and embedded programming. Passionate about hardware-software integration projects.",
      skills: ["C", "VHDL", "MATLAB", "DSA"],
      social: {
        github: "/",
        linkedin: "/",
        twitter: "/",
      },
    },
    {
      name: "Santhosh J K",
      position: "Joint Secretary",
      image: "/professional-male-student.png",
      bio: "Third year Biotech student applying computational methods to biological problems. Interested in bioinformatics and computational biology applications.",
      skills: ["Python", "R", "Bioinformatics", "DSA"],
      social: {
        github: "/",
        linkedin: "/",
        twitter: "/",
      },
    },
  ],

  executiveMembers: [
    {
      name: "Rajahmundry L Narayana Lokesh",
      position: "Executive Member",
      image: "/professional-male-student.png",
      bio: "Final year ECE student with expertise in communication systems and signal processing. Passionate about wireless technologies and network optimization.",
      skills: ["MATLAB", "Python", "C++", "DSA"],
      social: {
        github: "/",
        linkedin: "/",
        twitter: "/",
      },
    },
    {
      name: "Michael Vanguri",
      position: "Executive Member",
      image: "/professional-male-student.png",
      bio: "Final year CSE student focused on cloud computing and DevOps practices. Experienced in deploying scalable applications and automation tools.",
      skills: ["AWS", "Docker", "Python", "DSA"],
      social: {
        github: "/",
        linkedin: "/",
        twitter: "/",
      },
    },
    {
      name: "Kuna Chandrika Ramya Prasanna",
      position: "Executive Member",
      image: "/professional-female-student.png",
      bio: "Third year CSE student passionate about data science and analytics. Skilled in extracting insights from complex datasets and visualization.",
      skills: ["Python", "Pandas", "Matplotlib", "DSA"],
      social: {
        github: "/",
        linkedin: "/",
        twitter: "/",
      },
    },
    {
      name: "Srikari Obulshetty",
      position: "Executive Member",
      image: "/professional-female-student.png",
      bio: "Third year CSE student interested in frontend development and UI/UX design. Focused on creating beautiful and functional user interfaces.",
      skills: ["React", "CSS", "Figma", "DSA"],
      social: {
        github: "/",
        linkedin: "/",
        twitter: "/",
      },
    },
    {
      name: "Madiha Muskan",
      position: "Executive Member",
      image: "/professional-female-student.png",
      bio: "Third year CSE student specializing in database systems and backend architecture. Passionate about optimizing data storage and retrieval systems.",
      skills: ["SQL", "MongoDB", "Java", "DSA"],
      social: {
        github: "/",
        linkedin: "/",
        twitter: "/",
      },
    },
    {
      name: "N. Sai Gayatri",
      position: "Executive Member",
      image: "/professional-female-student.png",
      bio: "Third year CSE student focused on software testing and quality assurance. Experienced in automated testing frameworks and bug detection.",
      skills: ["Java", "Selenium", "TestNG", "DSA"],
      social: {
        github: "/",
        linkedin: "/",
        twitter: "/",
      },
    },
    {
      name: "K Durga Sowmya Sree",
      position: "Executive Member",
      image: "/professional-female-student.png",
      bio: "Third year CSE student passionate about algorithms and competitive programming. Active participant in coding contests and problem-solving challenges.",
      skills: ["C++", "Python", "Algorithms", "DSA"],
      social: {
        github: "/",
        linkedin: "/",
        twitter: "/",
      },
    },
    {
      name: "Madduri Roja Lakshmi",
      position: "Executive Member",
      image: "/professional-female-student.png",
      bio: "Third year CSE student interested in natural language processing and AI applications. Working on projects involving text analysis and chatbot development.",
      skills: ["Python", "NLP", "TensorFlow", "DSA"],
      social: {
        github: "/",
        linkedin: "/",
        twitter: "/",
      },
    },
    {
      name: "Jignesh",
      position: "Executive Member",
      image: "/professional-male-student.png",
      bio: "Third year CSE student focused on blockchain technology and cryptocurrency applications. Passionate about decentralized systems and smart contracts.",
      skills: ["Solidity", "Web3", "JavaScript", "DSA"],
      social: {
        github: "/",
        linkedin: "/",
        twitter: "/",
      },
    },
    {
      name: "Dnyaneshwar Mali",
      position: "Executive Member",
      image: "/professional-male-student.png",
      bio: "Third year Mechanical Engineering student with interests in CAD design and automation. Skilled in applying programming to mechanical engineering solutions.",
      skills: ["Python", "AutoCAD", "MATLAB", "DSA"],
      social: {
        github: "/",
        linkedin: "/",
        twitter: "/",
      },
    },
    {
      name: "Sanjay B",
      position: "Executive Member",
      image: "/professional-male-student.png",
      bio: "Third year Mechanical Engineering student passionate about robotics and control systems. Experienced in mechanical design and programming automation.",
      skills: ["C++", "Arduino", "SolidWorks", "DSA"],
      social: {
        github: "/",
        linkedin: "/",
        twitter: "/",
      },
    },
    {
      name: "Sahitya Kushwaha",
      position: "Executive Member",
      image: "/professional-female-student.png",
      bio: "Third year ECE student specializing in VLSI design and digital electronics. Interested in chip design and hardware optimization techniques.",
      skills: ["Verilog", "VHDL", "C", "DSA"],
      social: {
        github: "/",
        linkedin: "/",
        twitter: "/",
      },
    },
    {
      name: "Nishant Kalaichelvan",
      position: "Executive Member",
      image: "/professional-male-student.png",
      bio: "Second year CSE student eager to learn web development and software engineering principles. Actively participating in coding workshops and hackathons.",
      skills: ["HTML", "CSS", "JavaScript", "DSA"],
      social: {
        github: "/",
        linkedin: "/",
        twitter: "/",
      },
    },
    {
      name: "Vasala Shreetheja",
      position: "Executive Member",
      image: "/professional-female-student.png",
      bio: "Second year CSE student passionate about mobile app development and user interface design. Learning modern frameworks and development tools.",
      skills: ["React Native", "JavaScript", "Firebase", "DSA"],
      social: {
        github: "/",
        linkedin: "/",
        twitter: "/",
      },
    },
    {
      name: "Nakkella Jathin",
      position: "Executive Member",
      image: "/professional-male-student.png",
      bio: "Second year CSE student focused on learning programming fundamentals and software development practices. Enthusiastic about problem-solving and algorithms.",
      skills: ["Python", "Java", "Git", "DSA"],
      social: {
        github: "/",
        linkedin: "/",
        twitter: "/",
      },
    },
    {
      name: "Ache Aditya",
      position: "Executive Member",
      image: "/professional-male-student.png",
      bio: "Second year CSE student interested in competitive programming and algorithm design. Actively learning data structures and optimization techniques.",
      skills: ["C++", "Python", "Algorithms", "DSA"],
      social: {
        github: "/",
        linkedin: "/",
        twitter: "/",
      },
    },
    {
      name: "Budati Nimisha Sri Sai",
      position: "Executive Member",
      image: "/professional-female-student.png",
      bio: "Second year CSE student exploring web technologies and database management. Passionate about creating dynamic websites and learning backend development.",
      skills: ["HTML", "CSS", "PHP", "DSA"],
      social: {
        github: "/",
        linkedin: "/",
        twitter: "/",
      },
    },
    {
      name: "Madipalli Durga Sai Karthik",
      position: "Executive Member",
      image: "/professional-male-student.png",
      bio: "Second year CSE student focused on learning object-oriented programming and software design patterns. Interested in building scalable applications.",
      skills: ["Java", "Python", "MySQL", "DSA"],
      social: {
        github: "/",
        linkedin: "/",
        twitter: "/",
      },
    },
    {
      name: "Janga Naga Surendra Reddy",
      position: "Executive Member",
      image: "/professional-male-student.png",
      bio: "Second year CSE student passionate about machine learning and artificial intelligence applications. Learning Python and data analysis techniques.",
      skills: ["Python", "Pandas", "NumPy", "DSA"],
      social: {
        github: "/",
        linkedin: "/",
        twitter: "/",
      },
    },
    {
      name: "Maganti Navadeep",
      position: "Executive Member",
      image: "/professional-male-student.png",
      bio: "Second year CSE student interested in game development and graphics programming. Learning programming languages and game engine technologies.",
      skills: ["C#", "Unity", "JavaScript", "DSA"],
      social: {
        github: "/",
        linkedin: "/",
        twitter: "/",
      },
    },
    {
      name: "Saathvik Reddy Dandu",
      position: "Executive Member",
      image: "/professional-male-student.png",
      bio: "Second year CSE student focused on web development and responsive design. Learning modern frontend frameworks and user experience principles.",
      skills: ["React", "CSS", "Bootstrap", "DSA"],
      social: {
        github: "/",
        linkedin: "/",
        twitter: "/",
      },
    },
    {
      name: "Nunna Dhruvith",
      position: "Executive Member",
      image: "/professional-male-student.png",
      bio: "Second year CSE student passionate about cybersecurity and network programming. Learning secure coding practices and penetration testing techniques.",
      skills: ["Python", "Linux", "Networking", "DSA"],
      social: {
        github: "/",
        linkedin: "/",
        twitter: "/",
      },
    },
    {
      name: "Renganath Chokkalingam",
      position: "Executive Member",
      image: "/professional-male-student.png",
      bio: "Second year EEE student with interests in embedded systems and IoT development. Learning programming for hardware applications and automation.",
      skills: ["C", "Arduino", "Python", "DSA"],
      social: {
        github: "/",
        linkedin: "/",
        twitter: "/",
      },
    },
    {
      name: "Dasari surya venkata Arjun",
      position: "Executive Member",
      image: "/professional-male-student.png",
      bio: "Second year EEE student passionate about power systems and electrical automation. Interested in applying programming to electrical engineering problems.",
      skills: ["MATLAB", "Python", "C", "DSA"],
      social: {
        github: "/",
        linkedin: "/",
        twitter: "/",
      },
    },
    {
      name: "Pothireddy Bhavya",
      position: "Executive Member",
      image: "/professional-female-student.png",
      bio: "Second year EEE student focused on control systems and signal processing. Learning programming languages for engineering applications and simulations.",
      skills: ["MATLAB", "Python", "Simulink", "DSA"],
      social: {
        github: "/",
        linkedin: "/",
        twitter: "/",
      },
    },
    {
      name: "Vineetha Sammeta",
      position: "Executive Member",
      image: "/professional-female-student.png",
      bio: "Second year ECE student interested in digital communications and VLSI design. Learning programming for hardware description and system design.",
      skills: ["Verilog", "C", "Python", "DSA"],
      social: {
        github: "/",
        linkedin: "/",
        twitter: "/",
      },
    },
  ],

  volunteers: [
    {
      name: "Ch.S.S.Harsha",
      position: "Volunteer",
      image: "/professional-male-student.png",
      bio: "Second year CSE student beginning journey in programming and software development. Eager to learn new technologies and contribute to team projects.",
      skills: ["C", "Java", "HTML", "DSA"],
      social: {
        github: "/",
        linkedin: "/",
        twitter: "/",
      },
    },
    {
      name: "Chenna Sai Charan",
      position: "Volunteer",
      image: "/professional-male-student.png",
      bio: "Second year CSE student passionate about learning programming fundamentals and problem-solving techniques. Active participant in coding practice sessions.",
      skills: ["Python", "C++", "Git", "DSA"],
      social: {
        github: "/",
        linkedin: "/",
        twitter: "/",
      },
    },
    {
      name: "C Hemanth Sagar",
      position: "Volunteer",
      image: "/professional-male-student.png",
      bio: "Second year CSE student interested in web development and database systems. Learning frontend and backend technologies for full-stack development.",
      skills: ["HTML", "CSS", "MySQL", "DSA"],
      social: {
        github: "/",
        linkedin: "/",
        twitter: "/",
      },
    },
    {
      name: "Anumitha Reddy",
      position: "Volunteer",
      image: "/professional-female-student.png",
      bio: "Second year CSE student exploring mobile app development and user interface design. Learning modern programming languages and development frameworks.",
      skills: ["Java", "Android", "XML", "DSA"],
      social: {
        github: "/",
        linkedin: "/",
        twitter: "/",
      },
    },
    {
      name: "Krishna Myaka",
      position: "Volunteer",
      image: "/professional-male-student.png",
      bio: "Second year CSE student focused on learning algorithms and competitive programming. Passionate about mathematical problem-solving and code optimization.",
      skills: ["C++", "Python", "Mathematics", "DSA"],
      social: {
        github: "/",
        linkedin: "/",
        twitter: "/",
      },
    },
    {
      name: "Spandana",
      position: "Volunteer",
      image: "/professional-female-student.png",
      bio: "Second year CSE student interested in data science and analytics. Learning Python programming and statistical analysis for data-driven insights.",
      skills: ["Python", "Statistics", "Excel", "DSA"],
      social: {
        github: "/",
        linkedin: "/",
        twitter: "/",
      },
    },
    {
      name: "Puligundla Charith Chowdari",
      position: "Volunteer",
      image: "/professional-male-student.png",
      bio: "Second year CSE student passionate about software engineering and system design. Learning object-oriented programming and software development practices.",
      skills: ["Java", "C++", "UML", "DSA"],
      social: {
        github: "/",
        linkedin: "/",
        twitter: "/",
      },
    },
    {
      name: "Sujay Nunna",
      position: "Volunteer",
      image: "/professional-male-student.png",
      bio: "Second year CSE student exploring machine learning and artificial intelligence concepts. Interested in developing intelligent systems and automation tools.",
      skills: ["Python", "TensorFlow", "NumPy", "DSA"],
      social: {
        github: "/",
        linkedin: "/",
        twitter: "/",
      },
    },
    {
      name: "Vegi Bhanu Phanindra",
      position: "Volunteer",
      image: "/professional-male-student.png",
      bio: "Second year CSE student focused on web technologies and responsive design. Learning modern JavaScript frameworks and frontend development tools.",
      skills: ["JavaScript", "React", "CSS", "DSA"],
      social: {
        github: "/",
        linkedin: "/",
        twitter: "/",
      },
    },
    {
      name: "Katari Harshavardhan Reddy",
      position: "Volunteer",
      image: "/professional-male-student.png",
      bio: "Second year EEE student with interests in embedded programming and IoT applications. Learning to bridge electrical engineering with software development.",
      skills: ["C", "Arduino", "Sensors", "DSA"],
      social: {
        github: "/",
        linkedin: "/",
        twitter: "/",
      },
    },
    {
      name: "Poojari Nagashiva",
      position: "Volunteer",
      image: "/professional-male-student.png",
      bio: "Second year EEE student passionate about power electronics and automation systems. Learning programming for electrical system control and monitoring.",
      skills: ["C", "MATLAB", "LabVIEW", "DSA"],
      social: {
        github: "/",
        linkedin: "/",
        twitter: "/",
      },
    },
    {
      name: "Hasini",
      position: "Volunteer",
      image: "/professional-female-student.png",
      bio: "Second year CSE student beginning exploration of programming languages and software development. Enthusiastic about learning new technologies and frameworks.",
      skills: ["Python", "HTML", "CSS", "DSA"],
      social: {
        github: "/",
        linkedin: "/",
        twitter: "/",
      },
    },
  ],
};


const facultyAdvisor = {
  name: "Dr. K. Himabindu",
  position: "Faculty Advisor",
  department: "Computer Science & Engineering",
  image: "http://nitandhra.ac.in/faculty/assets/uploads/profile_images/16909.jpg",
  bio: "Dr. K. Himabindu is an Assistant Professor at NIT Andhra Pradesh, specializing in Artificial Intelligence and Natural Language Processing. With rich experience in academia and industry, she mentors students in cutting-edge technologies, fosters research and innovation, and guides them toward achieving their professional goals.",
  expertise: [
    "Natural Language Processing through Deep Learning",
    "Explainable AI",
    "Few Shot Learning",
    "Educational Data Mining",
  ],
  email: "himabinduk@nitandhra.ac.in",
}


function MemberGrid({ members }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {members.map((member) => (
        <div key={member.name} className="glass glass-hover rounded-lg overflow-hidden group flex flex-col">
          <div className="relative">
            <img
              src={member.image || "/placeholder.svg"}
              alt={member.name}
              className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="p-6 flex flex-col flex-grow">
            <h3 className="font-heading font-bold text-xl text-white mb-1">{member.name}</h3>
            <p className="text-[#4A90E2] font-semibold mb-3">{member.position}</p>
            {member.bio && <p className="text-[#B0B0B0] text-sm mb-4 leading-relaxed flex-grow">{member.bio}</p>}
            
            {/* Skills Section */}
            {member.skills?.length > 0 && (
              <div className="flex flex-wrap gap-1 mb-4 justify-center">
                {member.skills.slice(0, 3).map((skill) => (
                  <span
                    key={skill}
                    className="px-2 py-1 bg-[#4A90E2]/80 text-white rounded text-xs"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            )}

            {/* Social Media Links Section - Updated with Lucide Icons */}
            {member.social && (
              <div className="flex justify-center items-center gap-4 mt-auto pt-4 border-t border-white/10">
                {member.social.github && (
                  <a
                    href={member.social.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${member.name}'s Github Profile`}
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    <Github className="h-5 w-5" />
                  </a>
                )}
                {member.social.linkedin && (
                  <a
                    href={member.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${member.name}'s LinkedIn Profile`}
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                )}
                {member.social.twitter && (
                  <a
                    href={member.social.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${member.name}'s Twitter Profile`}
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    <Twitter className="h-5 w-5" />
                  </a>
                )}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}


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

      {/* Secretary -> Changed to coreCommittee */}
      <section className="px-4 sm:px-6 lg:px-8 mb-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-heading font-bold text-3xl text-center mb-12">
            <span className="gradient-text">Secretary</span>
          </h2>
          {/* FIX: Use the correct key from your data object */}
          <MemberGrid members={teamMembers.coreCommittee} />
        </div>
      </section>

      {/* Joint Secretaries */}
      <section className="px-4 sm:px-6 lg:px-8 mb-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-heading font-bold text-3xl text-center mb-12">
            <span className="gradient-text">Joint Secretaries</span>
          </h2>
          <MemberGrid members={teamMembers.jointSecretaries} />
        </div>
      </section>

      {/* Executive Members */}
      <section className="px-4 sm:px-6 lg:px-8 mb-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-heading font-bold text-3xl text-center mb-12">
            <span className="gradient-text">Executive Members</span>
          </h2>
          <MemberGrid members={teamMembers.executiveMembers} />
        </div>
      </section>

      {/* Volunteers */}
      <section className="px-4 sm:px-6 lg:px-8 mb-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-heading font-bold text-3xl text-center mb-12">
            <span className="gradient-text">Volunteers</span>
          </h2>
          <MemberGrid members={teamMembers.volunteers} />
        </div>
      </section>

      <Footer />
    </main>
  )
}