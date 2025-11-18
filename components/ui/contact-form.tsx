'use client'

import { useState, useRef } from "react"
import { motion, AnimatePresence, Variants } from "framer-motion"
import { 
  Send, 
  CheckCircle, 
  AlertCircle, 
  User, 
  Mail, 
  Building, 
  MessageSquare,
  Clock,
  DollarSign,
  Loader2
} from "lucide-react"
import { cn } from "@/lib/utils"
import { ContactFormData, ProjectType, BudgetRange } from "@/lib/types"

interface ContactFormProps {
  onSubmit?: (data: ContactFormData) => Promise<{ success: boolean; message: string }>
  className?: string
}

interface FormErrors {
  [key: string]: string
}

const containerVariants: Variants = {
  initial: { opacity: 0, y: 20 },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6,
      staggerChildren: 0.1
    }
  }
}

const itemVariants: Variants = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 }
}

const projectTypes: { value: ProjectType; label: string; description: string }[] = [
  { value: 'web', label: 'Web Development', description: 'Websites and web applications' },
  { value: 'mobile', label: 'Mobile App', description: 'iOS and Android applications' },
  { value: 'ui-ux', label: 'UI/UX Design', description: 'User interface and experience design' },
  { value: 'other', label: 'Other', description: 'Consulting or custom solutions' }
]

const budgetRanges: { value: BudgetRange; label: string }[] = [
  { value: 'under-10k', label: 'Under $10,000' },
  { value: '10k-25k', label: '$10,000 - $25,000' },
  { value: '25k-50k', label: '$25,000 - $50,000' },
  { value: '50k+', label: '$50,000+' }
]

export function ContactForm({ onSubmit, className }: ContactFormProps) {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    company: '',
    projectType: 'web',
    budget: 'under-10k',
    message: '',
    timeline: ''
  })

  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [submitMessage, setSubmitMessage] = useState('')
  const formRef = useRef<HTMLFormElement>(null)

  const validateField = (name: string, value: string): string => {
    switch (name) {
      case 'name':
        if (!value.trim()) return 'Name is required'
        if (value.trim().length < 2) return 'Name must be at least 2 characters'
        return ''
      
      case 'email':
        if (!value.trim()) return 'Email is required'
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if (!emailRegex.test(value)) return 'Please enter a valid email address'
        return ''
      
      case 'message':
        if (!value.trim()) return 'Message is required'
        if (value.trim().length < 10) return 'Message must be at least 10 characters'
        return ''
      
      default:
        return ''
    }
  }

  const handleInputChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }))
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
    
    // Real-time validation
    const error = validateField(name, value)
    if (error) {
      setErrors(prev => ({ ...prev, [name]: error }))
    }
  }

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}
    
    newErrors.name = validateField('name', formData.name)
    newErrors.email = validateField('email', formData.email)
    newErrors.message = validateField('message', formData.message)
    
    // Remove empty errors
    Object.keys(newErrors).forEach(key => {
      if (!newErrors[key]) delete newErrors[key]
    })
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      let result
      if (onSubmit) {
        result = await onSubmit(formData)
      } else {
        // Default: submit to /api/contact
        const response = await fetch('/api/contact', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ ...formData, honeypot: '' })
        })
        result = await response.json()
      }

      if (result.success) {
        setSubmitStatus('success')
        setSubmitMessage(result.message)
        // Reset form
        setFormData({
          name: '',
          email: '',
          company: '',
          projectType: 'web',
          budget: 'under-10k',
          message: '',
          timeline: ''
        })
      } else {
        setSubmitStatus('error')
        setSubmitMessage(result.message)
      }
    } catch (error) {
      setSubmitStatus('error')
      setSubmitMessage('Something went wrong. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <motion.div
      variants={containerVariants}
      initial="initial"
      animate="animate"
      className={cn("w-full max-w-2xl mx-auto", className)}
    >
      <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
        {/* Personal Information */}
        <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Name Field */}
          <div className="space-y-2">
            <label htmlFor="name" className="block text-sm font-medium text-white/80">
              <User className="inline h-4 w-4 mr-2" />
              Full Name *
            </label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={(e) => handleInputChange('name', e.target.value)}
              className={cn(
                "w-full px-4 py-3 rounded-xl bg-white/10 backdrop-blur-sm border text-white placeholder-white/50 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500/50",
                errors.name 
                  ? "border-red-500/50 focus:border-red-500" 
                  : "border-white/20 focus:border-blue-500/50"
              )}
              placeholder="Enter your full name"
            />
            <AnimatePresence>
              {errors.name && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="text-red-400 text-sm flex items-center gap-1"
                >
                  <AlertCircle className="h-3 w-3" />
                  {errors.name}
                </motion.p>
              )}
            </AnimatePresence>
          </div>

          {/* Email Field */}
          <div className="space-y-2">
            <label htmlFor="email" className="block text-sm font-medium text-white/80">
              <Mail className="inline h-4 w-4 mr-2" />
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
              className={cn(
                "w-full px-4 py-3 rounded-xl bg-white/10 backdrop-blur-sm border text-white placeholder-white/50 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500/50",
                errors.email 
                  ? "border-red-500/50 focus:border-red-500" 
                  : "border-white/20 focus:border-blue-500/50"
              )}
              placeholder="Enter your email address"
            />
            <AnimatePresence>
              {errors.email && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="text-red-400 text-sm flex items-center gap-1"
                >
                  <AlertCircle className="h-3 w-3" />
                  {errors.email}
                </motion.p>
              )}
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Company Field */}
        <motion.div variants={itemVariants} className="space-y-2">
          <label htmlFor="company" className="block text-sm font-medium text-white/80">
            <Building className="inline h-4 w-4 mr-2" />
            Company (Optional)
          </label>
          <input
            type="text"
            id="company"
            value={formData.company}
            onChange={(e) => handleInputChange('company', e.target.value)}
            className="w-full px-4 py-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-white/50 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50"
            placeholder="Enter your company name"
          />
        </motion.div>

        {/* Project Type */}
        <motion.div variants={itemVariants} className="space-y-3">
          <label className="block text-sm font-medium text-white/80">
            Project Type *
          </label>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {projectTypes.map((type) => (
              <motion.label
                key={type.value}
                className={cn(
                  "relative flex items-start p-4 rounded-xl border cursor-pointer transition-all duration-200",
                  formData.projectType === type.value
                    ? "bg-blue-500/20 border-blue-500/50 text-white"
                    : "bg-white/5 border-white/20 text-white/70 hover:bg-white/10"
                )}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <input
                  type="radio"
                  name="projectType"
                  value={type.value}
                  checked={formData.projectType === type.value}
                  onChange={(e) => handleInputChange('projectType', e.target.value)}
                  className="sr-only"
                />
                <div className="flex-1">
                  <div className="font-medium">{type.label}</div>
                  <div className="text-sm text-white/50 mt-1">{type.description}</div>
                </div>
                {formData.projectType === type.value && (
                  <CheckCircle className="h-5 w-5 text-blue-400 ml-2" />
                )}
              </motion.label>
            ))}
          </div>
        </motion.div>

        {/* Budget and Timeline */}
        <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Budget Range */}
          <div className="space-y-2">
            <label htmlFor="budget" className="block text-sm font-medium text-white/80">
              <DollarSign className="inline h-4 w-4 mr-2" />
              Budget Range
            </label>
            <select
              id="budget"
              value={formData.budget}
              onChange={(e) => handleInputChange('budget', e.target.value as BudgetRange)}
              className="w-full px-4 py-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-white transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50"
            >
              {budgetRanges.map((range) => (
                <option key={range.value} value={range.value} className="bg-gray-800">
                  {range.label}
                </option>
              ))}
            </select>
          </div>

          {/* Timeline */}
          <div className="space-y-2">
            <label htmlFor="timeline" className="block text-sm font-medium text-white/80">
              <Clock className="inline h-4 w-4 mr-2" />
              Timeline (Optional)
            </label>
            <input
              type="text"
              id="timeline"
              value={formData.timeline}
              onChange={(e) => handleInputChange('timeline', e.target.value)}
              className="w-full px-4 py-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-white/50 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50"
              placeholder="e.g., ASAP, 3 months, Q2 2024"
            />
          </div>
        </motion.div>

        {/* Message */}
        <motion.div variants={itemVariants} className="space-y-2">
          <label htmlFor="message" className="block text-sm font-medium text-white/80">
            <MessageSquare className="inline h-4 w-4 mr-2" />
            Project Details *
          </label>
          <textarea
            id="message"
            rows={5}
            value={formData.message}
            onChange={(e) => handleInputChange('message', e.target.value)}
            className={cn(
              "w-full px-4 py-3 rounded-xl bg-white/10 backdrop-blur-sm border text-white placeholder-white/50 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500/50 resize-none",
              errors.message 
                ? "border-red-500/50 focus:border-red-500" 
                : "border-white/20 focus:border-blue-500/50"
            )}
            placeholder="Tell us about your project, goals, and any specific requirements..."
          />
          <AnimatePresence>
            {errors.message && (
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="text-red-400 text-sm flex items-center gap-1"
              >
                <AlertCircle className="h-3 w-3" />
                {errors.message}
              </motion.p>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Submit Button */}
        <motion.div variants={itemVariants}>
          <motion.button
            type="submit"
            disabled={isSubmitting}
            className={cn(
              "w-full px-8 py-4 rounded-xl font-medium transition-all duration-200 flex items-center justify-center gap-2",
              isSubmitting
                ? "bg-white/10 text-white/50 cursor-not-allowed"
                : "bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white shadow-lg hover:shadow-xl"
            )}
            whileHover={!isSubmitting ? { scale: 1.02 } : {}}
            whileTap={!isSubmitting ? { scale: 0.98 } : {}}
          >
            {isSubmitting ? (
              <>
                <Loader2 className="h-5 w-5 animate-spin" />
                Sending Message...
              </>
            ) : (
              <>
                <Send className="h-5 w-5" />
                Send Message
              </>
            )}
          </motion.button>
        </motion.div>

        {/* Status Messages */}
        <AnimatePresence>
          {submitStatus !== 'idle' && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              className={cn(
                "p-4 rounded-xl flex items-center gap-3",
                submitStatus === 'success' 
                  ? "bg-green-500/20 border border-green-500/30 text-green-400"
                  : "bg-red-500/20 border border-red-500/30 text-red-400"
              )}
            >
              {submitStatus === 'success' ? (
                <CheckCircle className="h-5 w-5" />
              ) : (
                <AlertCircle className="h-5 w-5" />
              )}
              <p>{submitMessage}</p>
            </motion.div>
          )}
        </AnimatePresence>
      </form>
    </motion.div>
  )
}