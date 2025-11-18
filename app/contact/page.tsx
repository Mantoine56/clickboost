import { Metadata } from "next"
import Link from "next/link"
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  MessageCircle,
  Calendar,
  Linkedin,
  Twitter,
  Github,
  Users
} from "lucide-react"
import { ContactForm } from "@/components/ui/contact-form"
import { getContactInfo } from "@/lib/content"

export const metadata: Metadata = {
  title: "Contact Us - Get Your Project Started Today",
  description: "Ready to transform your ideas into powerful digital solutions? Contact ClickBoost for a free consultation and project estimate.",
  keywords: ["contact clickboost", "web development consultation", "project estimate", "get quote"],
  openGraph: {
    title: "Contact Us - ClickBoost",
    description: "Ready to transform your ideas into powerful digital solutions? Get a free consultation today.",
    url: "/contact",
  },
}

const iconMap = {
  linkedin: Linkedin,
  twitter: Twitter,
  github: Github,
  dribbble: Users // Fallback for dribbble
}

export default async function ContactPage() {
  const contactInfo = await getContactInfo()

  return (
    <div className="min-h-screen bg-black/[0.96] relative">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-emerald-500/5" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.1),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(139,92,246,0.1),transparent_50%)]" />
      
      <div className="relative z-10">
        {/* Header Section */}
        <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 mb-6">
              Let's Build Something Amazing
            </h1>
            <p className="text-xl text-neutral-300 max-w-3xl mx-auto leading-relaxed">
              Ready to transform your ideas into powerful digital solutions? 
              Get in touch with us today for a free consultation and project estimate.
            </p>
          </div>
        </section>

        {/* Main Content */}
        <section className="pb-32 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Contact Form */}
              <div>
                <div className="mb-8">
                  <h2 className="text-3xl font-bold text-white mb-4">
                    Tell Us About Your Project
                  </h2>
                  <p className="text-white/70 leading-relaxed">
                    Fill out the form below and we'll get back to you within 24 hours 
                    with a detailed response and next steps.
                  </p>
                </div>
                
                <ContactForm />
              </div>

              {/* Contact Information */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold text-white mb-8">
                    Get In Touch
                  </h2>
                </div>

                {/* Contact Methods */}
                <div className="space-y-6">
                  {/* Email */}
                  <div className="flex items-start gap-4 p-6 rounded-2xl bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-md border border-white/20 shadow-lg">
                    <div className="p-3 rounded-xl bg-blue-500/20 flex-shrink-0">
                      <Mail className="h-6 w-6 text-blue-400" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-1">Email Us</h3>
                      <p className="text-white/60 text-sm mb-2">
                        Send us an email and we'll respond within 24 hours
                      </p>
                  <a 
                    href={`mailto:${contactInfo.email}`}
                    className="text-blue-400 hover:text-blue-300 transition-colors font-medium"
                  >
                        {contactInfo.email}
                      </a>
                    </div>
                  </div>

                  {/* Phone */}
                  {contactInfo.phone && (
                    <div className="flex items-start gap-4 p-6 rounded-2xl bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-md border border-white/20 shadow-lg">
                      <div className="p-3 rounded-xl bg-emerald-500/20 flex-shrink-0">
                        <Phone className="h-6 w-6 text-emerald-400" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-1">Call Us</h3>
                        <p className="text-white/60 text-sm mb-2">
                          Speak directly with our team
                        </p>
                        <a 
                          href={`tel:${contactInfo.phone}`}
                          className="text-emerald-400 hover:text-emerald-300 transition-colors font-medium"
                        >
                          {contactInfo.phone}
                        </a>
                      </div>
                    </div>
                  )}

                  {/* Address */}
                  {contactInfo.address && (
                    <div className="flex items-start gap-4 p-6 rounded-2xl bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-md border border-white/20 shadow-lg">
                      <div className="p-3 rounded-xl bg-purple-500/20 flex-shrink-0">
                        <MapPin className="h-6 w-6 text-purple-400" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-1">Visit Us</h3>
                        <p className="text-white/60 text-sm mb-2">
                          Come say hello at our office
                        </p>
                        <div className="text-white/80">
                          <div>{contactInfo.address.street}</div>
                          <div>
                            {contactInfo.address.city}, {contactInfo.address.province} {contactInfo.address.postalCode}
                          </div>
                          <div>{contactInfo.address.country}</div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Business Hours */}
                  {contactInfo.businessHours && (
                    <div className="flex items-start gap-4 p-6 rounded-2xl bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-md border border-white/20 shadow-lg">
                      <div className="p-3 rounded-xl bg-amber-500/20 flex-shrink-0">
                        <Clock className="h-6 w-6 text-amber-400" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-1">Business Hours</h3>
                        <div className="text-white/80 space-y-1">
                          <div>{contactInfo.businessHours.weekdays}</div>
                          <div>{contactInfo.businessHours.weekends}</div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Social Media */}
                <div className="p-6 rounded-2xl bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-md border border-white/20 shadow-lg">
                  <h3 className="text-lg font-semibold text-white mb-4">Follow Us</h3>
                  <div className="flex gap-4">
                    {contactInfo.socialMedia.map((social) => {
                      const IconComponent = iconMap[social.platform.toLowerCase() as keyof typeof iconMap] || Users
                      return (
                        <a
                          key={social.platform}
                          href={social.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-3 rounded-xl bg-white/10 hover:bg-white/20 text-white/70 hover:text-white transition-all duration-200 hover:scale-110"
                        >
                          <IconComponent className="h-5 w-5" />
                        </a>
                      )
                    })}
                  </div>
                </div>

                {/* Quick Actions */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-white">Quick Actions</h3>
                  
                  <Link
                    href="/services"
                    className="flex items-center gap-3 p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-white/80 hover:text-white transition-all duration-200 group"
                  >
                    <div className="p-2 rounded-lg bg-blue-500/20 group-hover:bg-blue-500/30 transition-colors">
                      <MessageCircle className="h-5 w-5 text-blue-400" />
                    </div>
                    <div>
                      <div className="font-medium">View Our Services</div>
                      <div className="text-sm text-white/60">Learn about what we offer</div>
                    </div>
                  </Link>

                  <Link
                    href="/portfolio"
                    className="flex items-center gap-3 p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-white/80 hover:text-white transition-all duration-200 group"
                  >
                    <div className="p-2 rounded-lg bg-emerald-500/20 group-hover:bg-emerald-500/30 transition-colors">
                      <Users className="h-5 w-5 text-emerald-400" />
                    </div>
                    <div>
                      <div className="font-medium">View Our Portfolio</div>
                      <div className="text-sm text-white/60">See our previous work</div>
                    </div>
                  </Link>

                  <a
                    href="https://calendly.com/clickboost" // Replace with actual scheduling link
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-4 rounded-xl bg-gradient-to-r from-blue-500/20 to-purple-500/20 hover:from-blue-500/30 hover:to-purple-500/30 border border-blue-500/30 text-white transition-all duration-200 group"
                  >
                    <div className="p-2 rounded-lg bg-white/20 group-hover:bg-white/30 transition-colors">
                      <Calendar className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <div className="font-medium">Schedule a Call</div>
                      <div className="text-sm text-white/70">Book a free consultation</div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="pb-32 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-white/70">
                Quick answers to common questions about our process and services.
              </p>
            </div>

            <div className="space-y-6">
              <div className="p-6 rounded-2xl bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-md border border-white/20 shadow-lg">
                <h3 className="text-lg font-semibold text-white mb-2">
                  How long does a typical project take?
                </h3>
                <p className="text-white/70">
                  Project timelines vary based on complexity and scope. Simple websites typically take 2-4 weeks, 
                  while complex web applications can take 2-6 months. We'll provide a detailed timeline during our consultation.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-md border border-white/20 shadow-lg">
                <h3 className="text-lg font-semibold text-white mb-2">
                  What's included in your development process?
                </h3>
                <p className="text-white/70">
                  Our process includes discovery and planning, design and prototyping, development and testing, 
                  deployment, and ongoing support. We keep you involved throughout every step.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-md border border-white/20 shadow-lg">
                <h3 className="text-lg font-semibold text-white mb-2">
                  Do you provide ongoing support and maintenance?
                </h3>
                <p className="text-white/70">
                  Yes! We offer various support and maintenance packages to keep your application running smoothly, 
                  secure, and up-to-date with the latest technologies.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-md border border-white/20 shadow-lg">
                <h3 className="text-lg font-semibold text-white mb-2">
                  Can you work with our existing team?
                </h3>
                <p className="text-white/70">
                  Absolutely! We're experienced in collaborating with in-house teams, other agencies, 
                  and stakeholders. We adapt our workflow to complement your existing processes.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}