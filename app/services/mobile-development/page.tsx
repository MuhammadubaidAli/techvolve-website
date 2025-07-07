"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Smartphone, ArrowLeft } from "lucide-react"

export default function MobileDevelopmentPage() {
  const services = [
    {
      title: "Android Development",
      description: "Native Android apps with optimal performance",
      icon: Smartphone,
      href: "/services/mobile-development/android",
      color: "from-green-500 to-blue-600",
    },
    {
      title: "iOS Development",
      description: "Native iOS apps for iPhone and iPad",
      icon: Smartphone,
      href: "/services/mobile-development/ios",
      color: "from-blue-500 to-purple-600",
    },
  ]

  return (
    <div className="min-h-screen bg-white dark:bg-black pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-purple-50 via-white to-pink-50 dark:from-black dark:via-gray-900 dark:to-black">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <Link
              href="/services"
              className="inline-flex items-center space-x-2 text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 mb-8"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Back to Services</span>
            </Link>

            <div className="w-20 h-20 rounded-3xl bg-gradient-to-r from-purple-500 to-pink-600 flex items-center justify-center mx-auto mb-8">
              <Smartphone className="w-10 h-10 text-white" />
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Mobile App Development
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Create powerful mobile applications for iOS and Android platforms with native performance and exceptional
              user experiences.
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
              Mobile Development Services
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              From native iOS and Android apps to cross-platform solutions, we build mobile experiences that users love.
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
                className="bg-white dark:bg-gray-800/50 rounded-2xl p-8 border border-gray-200 dark:border-white/10 hover:border-purple-500/30 transition-all duration-300 group shadow-lg hover:shadow-xl"
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
                    className="w-full py-3 bg-gradient-to-r from-purple-500 to-pink-600 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
                  >
                    Learn More
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
