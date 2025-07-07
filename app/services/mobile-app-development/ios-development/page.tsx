"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Smartphone, ArrowLeft, CheckCircle, Apple, Shield, Zap, Users } from "lucide-react"

export default function IOSDevelopmentPage() {
  const features = [
    "Native iOS Development",
    "Swift & Objective-C Programming",
    "Human Interface Guidelines",
    "App Store Optimization",
    "Performance Optimization",
    "iOS Security Implementation",
    "Universal App Support",
    "Core Data Integration",
  ]

  const benefits = [
    { icon: Apple, title: "App Store Ready", description: "Apps optimized for Apple App Store guidelines" },
    { icon: Shield, title: "Secure & Private", description: "Built with iOS security and privacy standards" },
    { icon: Zap, title: "Smooth Performance", description: "Optimized for iOS devices and battery life" },
    { icon: Users, title: "Premium Experience", description: "Designed for iOS user expectations" },
  ]

  return (
    <div className="min-h-screen bg-white dark:bg-black pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-black dark:via-gray-900 dark:to-black">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <Link
              href="/services/mobile-app-development"
              className="inline-flex items-center space-x-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 mb-8"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Back to Mobile Development</span>
            </Link>

            <div className="w-20 h-20 rounded-3xl bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center mx-auto mb-8">
              <Smartphone className="w-10 h-10 text-white" />
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              iOS Development
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Create premium iOS applications for iPhone and iPad with native performance, elegant design, and seamless
              integration with the Apple ecosystem.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-6">iOS App Development</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                Our iOS development services create applications that meet Apple's high standards for quality, design,
                and user experience while leveraging the latest iOS features.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-center space-x-3"
                  >
                    <CheckCircle className="w-5 h-5 text-blue-500" />
                    <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-white dark:bg-gray-800/50 rounded-2xl p-6 border border-gray-200 dark:border-white/10 hover:border-blue-500/30 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center mb-4">
                    <benefit.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-2">{benefit.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">{benefit.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-6">
              Our iOS Development Process
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              From concept to App Store launch, we follow Apple's best practices to ensure your app meets their quality
              standards.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Strategy", description: "Define app concept and create detailed specifications" },
              { step: "02", title: "Design", description: "Create beautiful UI following Human Interface Guidelines" },
              {
                step: "03",
                title: "Development",
                description: "Build native iOS app using Swift and latest frameworks",
              },
              { step: "04", title: "Launch", description: "Submit to App Store with optimization and marketing" },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-white dark:bg-gray-800/50 rounded-2xl p-6 text-center border border-gray-200 dark:border-white/10"
              >
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold text-lg mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3">{item.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-3xl p-12 text-center text-white"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Build Your iOS App?</h2>
            <p className="text-xl mb-8 opacity-90">
              Let's create an iOS application that delivers a premium experience and succeeds in the App Store.
            </p>
            <Link href="/#contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white text-blue-600 rounded-full font-semibold hover:shadow-lg transition-all duration-300"
              >
                Start iOS Project
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
