"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Brain, Cpu, TrendingUp, Smartphone, Monitor, Settings, Palette, ArrowRight, CheckCircle } from "lucide-react"

const services = [
  {
    title: "Artificial Intelligence",
    description:
      "Transform your business with cutting-edge AI solutions that automate processes and enhance decision-making.",
    icon: Brain,
    href: "/services/artificial-intelligence",
    features: ["Machine Learning Models", "Natural Language Processing", "Computer Vision", "Predictive Analytics"],
    color: "from-blue-500 to-purple-600",
  },
  {
    title: "Machine Learning",
    description: "Harness the power of data with advanced machine learning algorithms and predictive modeling.",
    icon: Cpu,
    href: "/services/machine-learning",
    features: ["Data Analysis", "Pattern Recognition", "Automated Decision Making", "Custom ML Models"],
    color: "from-green-500 to-blue-600",
  },
  {
    title: "Digital Marketing",
    description: "Boost your online presence with comprehensive digital marketing strategies and campaigns.",
    icon: TrendingUp,
    href: "/services/digital-marketing",
    features: ["SEO Optimization", "PPC Advertising", "Social Media Marketing", "Content Strategy"],
    color: "from-pink-500 to-red-600",
  },
  {
    title: "Mobile App Development",
    description: "Create powerful mobile applications for iOS and Android platforms with native performance.",
    icon: Smartphone,
    href: "/services/mobile-app-development",
    features: ["Native iOS Apps", "Android Development", "Cross-platform Solutions", "App Store Optimization"],
    color: "from-purple-500 to-pink-600",
  },
  {
    title: "Web Development",
    description: "Build modern, responsive websites and web applications using the latest technologies.",
    icon: Monitor,
    href: "/services/web-development",
    features: ["Responsive Design", "E-commerce Solutions", "Web Applications", "API Development"],
    color: "from-cyan-500 to-blue-600",
  },
  {
    title: "Software Development",
    description: "Custom software solutions including enterprise systems, CRM, and content management platforms.",
    icon: Settings,
    href: "/services/software-development",
    features: ["Enterprise Software", "Database Design", "System Integration", "Cloud Solutions"],
    color: "from-orange-500 to-red-600",
  },
  {
    title: "Graphic Design",
    description: "Creative visual solutions that communicate your brand message effectively across all platforms.",
    icon: Palette,
    href: "/services/graphic-design",
    features: ["Brand Identity", "UI/UX Design", "Print Design", "Digital Assets"],
    color: "from-indigo-500 to-purple-600",
  },
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-black pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-black dark:via-gray-900 dark:to-black">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Our Services
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              We offer comprehensive digital solutions to help your business thrive in the modern world. From AI and
              machine learning to web development and digital marketing.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white dark:bg-gray-800/50 rounded-2xl p-8 border border-gray-200 dark:border-white/10 hover:border-blue-500/30 transition-all duration-300 group shadow-lg hover:shadow-xl"
              >
                <div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${service.color} flex items-center justify-center mb-6`}
                >
                  <service.icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">{service.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">{service.description}</p>

                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span className="text-gray-600 dark:text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link href={service.href}>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 flex items-center justify-center space-x-2"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-5 h-5" />
                  </motion.button>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
