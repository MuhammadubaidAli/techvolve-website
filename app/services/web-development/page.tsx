"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Monitor, ArrowLeft, ShoppingCart, Globe } from "lucide-react"

export default function WebDevelopmentPage() {
  const services = [
    {
      title: "E-commerce Website Development",
      description: "Build powerful online stores with secure payment processing and inventory management",
      icon: ShoppingCart,
      href: "/services/web-development/ecommerce-website-development",
      color: "from-blue-500 to-purple-600",
    },
    {
      title: "Web Portal Development",
      description: "Custom web portals for businesses, organizations, and communities",
      icon: Globe,
      href: "/services/web-development/web-portal-development",
      color: "from-green-500 to-blue-600",
    },
  ]

  return (
    <div className="min-h-screen bg-white dark:bg-black pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-cyan-50 via-white to-blue-50 dark:from-black dark:via-gray-900 dark:to-black">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <Link
              href="/services"
              className="inline-flex items-center space-x-2 text-cyan-600 dark:text-cyan-400 hover:text-cyan-700 dark:hover:text-cyan-300 mb-8"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Back to Services</span>
            </Link>

            <div className="w-20 h-20 rounded-3xl bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center mx-auto mb-8">
              <Monitor className="w-10 h-10 text-white" />
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
              Web Development
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Build modern, responsive websites and web applications using cutting-edge technologies and best practices
              that deliver exceptional user experiences.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-6">
              Web Development Services
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              From e-commerce platforms to custom web portals, we create digital solutions that drive results.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                whileHover={{ y: -10 }}
                className="bg-white dark:bg-gray-800/50 rounded-2xl p-8 border border-gray-200 dark:border-white/10 hover:border-cyan-500/30 transition-all duration-300 group shadow-lg hover:shadow-xl"
              >
                <div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${service.color} flex items-center justify-center mb-6`}
                >
                  <service.icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">{service.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">{service.description}</p>

                <Link href={service.href}>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300"
                  >
                    Learn More
                  </motion.button>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-6">Technologies We Use</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              We leverage the latest web technologies to build fast, secure, and scalable applications.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Frontend",
                technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
              },
              {
                title: "Backend",
                technologies: ["Node.js", "Python", "PostgreSQL", "MongoDB", "Redis"],
              },
              {
                title: "Cloud & DevOps",
                technologies: ["AWS", "Vercel", "Docker", "CI/CD", "Monitoring"],
              },
            ].map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-white dark:bg-gray-800/50 rounded-2xl p-6 border border-gray-200 dark:border-white/10"
              >
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">{category.title}</h3>
                <ul className="space-y-2">
                  {category.technologies.map((tech, techIndex) => (
                    <li key={techIndex} className="text-gray-600 dark:text-gray-300">
                      {tech}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
