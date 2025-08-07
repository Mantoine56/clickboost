import { Metadata } from "next"
import Image from "next/image"
import { motion } from "framer-motion"
import { 
  Target, 
  Eye, 
  Heart, 
  Users, 
  Award, 
  Calendar,
  Code,
  Lightbulb,
  Shield,
  Handshake,
  TrendingUp,
  Linkedin,
  Github,
  Twitter
} from "lucide-react"
import { getAboutContent, getTeamMembers } from "@/lib/content"

export const metadata: Metadata = {
  title: "About Us - Meet the ClickBoost Team",
  description: "Learn about ClickBoost's mission, values, and the talented team behind our innovative web and mobile development solutions.",
  keywords: ["about clickboost", "web development team", "company mission", "development agency"],
  openGraph: {
    title: "About Us - ClickBoost",
    description: "Learn about ClickBoost's mission, values, and the talented team behind our innovative solutions.",
    url: "/about",
  },
}

const iconMap = {
  linkedin: Linkedin,
  github: Github,
  twitter: Twitter,
  dribbble: Users // Fallback for dribbble
}

export default async function AboutPage() {
  const aboutContent = await getAboutContent()
  const teamMembers = await getTeamMembers()

  return (
    <div className="min-h-screen bg-black/[0.96] relative">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-emerald-500/5" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.1),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(139,92,246,0.1),transparent_50%)]" />
      
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 mb-6">
              About ClickBoost
            </h1>
            <p className="text-xl text-neutral-300 max-w-3xl mx-auto leading-relaxed">
              We're a passionate team of developers and designers dedicated to transforming 
              innovative ideas into powerful digital solutions that drive business growth.
            </p>
          </div>
        </section>

        {/* Stats Section */}
        <section className="pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center p-6 rounded-2xl bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-md border border-white/20 shadow-lg">
                <div className="p-3 rounded-full bg-blue-500/20 w-fit mx-auto mb-4">
                  <Calendar className="h-6 w-6 text-blue-400" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{aboutContent.experience.years}+</div>
                <div className="text-sm text-white/60">Years Experience</div>
              </div>
              
              <div className="text-center p-6 rounded-2xl bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-md border border-white/20 shadow-lg">
                <div className="p-3 rounded-full bg-emerald-500/20 w-fit mx-auto mb-4">
                  <Award className="h-6 w-6 text-emerald-400" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{aboutContent.experience.projectsCompleted}+</div>
                <div className="text-sm text-white/60">Projects Completed</div>
              </div>
              
              <div className="text-center p-6 rounded-2xl bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-md border border-white/20 shadow-lg">
                <div className="p-3 rounded-full bg-purple-500/20 w-fit mx-auto mb-4">
                  <Users className="h-6 w-6 text-purple-400" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{aboutContent.experience.clientsSatisfied}+</div>
                <div className="text-sm text-white/60">Happy Clients</div>
              </div>
              
              <div className="text-center p-6 rounded-2xl bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-md border border-white/20 shadow-lg">
                <div className="p-3 rounded-full bg-amber-500/20 w-fit mx-auto mb-4">
                  <Code className="h-6 w-6 text-amber-400" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{aboutContent.experience.technologiesUsed}+</div>
                <div className="text-sm text-white/60">Technologies</div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission, Vision, Values */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Mission */}
              <div className="p-8 rounded-3xl bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-md border border-white/20 shadow-2xl">
                <div className="p-4 rounded-2xl bg-blue-500/20 w-fit mb-6">
                  <Target className="h-8 w-8 text-blue-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
                <p className="text-white/70 leading-relaxed">
                  {aboutContent.mission}
                </p>
              </div>

              {/* Vision */}
              <div className="p-8 rounded-3xl bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-md border border-white/20 shadow-2xl">
                <div className="p-4 rounded-2xl bg-purple-500/20 w-fit mb-6">
                  <Eye className="h-8 w-8 text-purple-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Our Vision</h3>
                <p className="text-white/70 leading-relaxed">
                  {aboutContent.vision}
                </p>
              </div>

              {/* Values */}
              <div className="p-8 rounded-3xl bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-md border border-white/20 shadow-2xl">
                <div className="p-4 rounded-2xl bg-emerald-500/20 w-fit mb-6">
                  <Heart className="h-8 w-8 text-emerald-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Our Values</h3>
                <ul className="space-y-2">
                  {aboutContent.values.map((value, index) => (
                    <li key={index} className="text-white/70 flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 flex-shrink-0" />
                      {value}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">Our Story</h2>
            <div className="p-8 md:p-12 rounded-3xl bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-md border border-white/20 shadow-2xl">
              <p className="text-lg text-white/80 leading-relaxed">
                {aboutContent.story}
              </p>
            </div>
          </div>
        </section>

        {/* Core Principles */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                What Drives Us
              </h2>
              <p className="text-xl text-white/70 max-w-3xl mx-auto">
                The principles that guide everything we do.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center p-6 rounded-2xl bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-md border border-white/20 shadow-lg">
                <div className="p-3 rounded-full bg-blue-500/20 w-fit mx-auto mb-4">
                  <Lightbulb className="h-6 w-6 text-blue-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Innovation</h3>
                <p className="text-sm text-white/60">
                  Pushing boundaries with cutting-edge technologies and creative solutions.
                </p>
              </div>

              <div className="text-center p-6 rounded-2xl bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-md border border-white/20 shadow-lg">
                <div className="p-3 rounded-full bg-emerald-500/20 w-fit mx-auto mb-4">
                  <Shield className="h-6 w-6 text-emerald-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Quality</h3>
                <p className="text-sm text-white/60">
                  Delivering excellence in every line of code and pixel of design.
                </p>
              </div>

              <div className="text-center p-6 rounded-2xl bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-md border border-white/20 shadow-lg">
                <div className="p-3 rounded-full bg-purple-500/20 w-fit mx-auto mb-4">
                  <Handshake className="h-6 w-6 text-purple-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Partnership</h3>
                <p className="text-sm text-white/60">
                  Building lasting relationships through trust and collaboration.
                </p>
              </div>

              <div className="text-center p-6 rounded-2xl bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-md border border-white/20 shadow-lg">
                <div className="p-3 rounded-full bg-amber-500/20 w-fit mx-auto mb-4">
                  <TrendingUp className="h-6 w-6 text-amber-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Growth</h3>
                <p className="text-sm text-white/60">
                  Helping businesses scale and succeed in the digital landscape.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Meet Our Team
              </h2>
              <p className="text-xl text-white/70 max-w-3xl mx-auto">
                The talented individuals who bring your digital visions to life.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <div
                  key={member.id}
                  className="group p-8 rounded-3xl bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-md border border-white/20 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:-translate-y-2"
                >
                  {/* Profile Image */}
                  <div className="relative w-24 h-24 mx-auto mb-6 rounded-full overflow-hidden">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  </div>

                  {/* Member Info */}
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                    <p className="text-blue-400 font-medium mb-3">{member.role}</p>
                    <p className="text-white/70 text-sm leading-relaxed">{member.bio}</p>
                  </div>

                  {/* Skills */}
                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2 justify-center">
                      {member.skills.slice(0, 4).map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 text-xs bg-white/10 text-white/80 rounded-full border border-white/20"
                        >
                          {skill}
                        </span>
                      ))}
                      {member.skills.length > 4 && (
                        <span className="px-3 py-1 text-xs bg-white/5 text-white/60 rounded-full border border-white/10">
                          +{member.skills.length - 4}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Social Links */}
                  <div className="flex justify-center gap-3">
                    {member.socialLinks.map((link) => {
                      const IconComponent = iconMap[link.platform.toLowerCase() as keyof typeof iconMap] || Users
                      return (
                        <a
                          key={link.platform}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white/70 hover:text-white transition-all duration-200 hover:scale-110"
                        >
                          <IconComponent className="h-4 w-4" />
                        </a>
                      )
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="p-8 md:p-12 rounded-3xl bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-md border border-white/20 shadow-2xl">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Work Together?
              </h2>
              <p className="text-xl text-white/70 mb-8 leading-relaxed">
                Let's discuss your project and see how our team can help bring your vision to life. 
                Get started with a free consultation today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-medium rounded-xl transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  Get In Touch
                </a>
                <a
                  href="/portfolio"
                  className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-medium rounded-xl transition-all duration-200 hover:scale-105 backdrop-blur-sm border border-white/20"
                >
                  View Our Work
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}