"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Smartphone, ArrowLeft, CheckCircle, Play, Shield, Zap, Users } from "lucide-react"

export default function AndroidDevelopmentPage() {
  const features = [
    "Native Android Development",
    "Kotlin & Java Programming",
    "Material Design Implementation",
    "Google Play Store Optimization",
    "Performance Optimization",
    "Security Best Practices",
    "Cross-Device Compatibility",
    "API Integration",
  ]

  const benefits = [
    { icon: Play, title: "Play Store Ready", description: "Apps optimized for Google Play Store guidelines" },
    { icon: Shield, title: "Secure & Reliable", description: "Built with Android security best practices" },
    { icon: Zap, title: "High Performance", description: "Optimized for speed and battery efficiency" },
    { icon: Users, title: "User-Centric", description: "Designed for exceptional Android user experience" },
  ]

  return (
    <div className="min-h-screen bg-white dark:bg-black pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-green-50 via-white to-blue-50 dark:from-black dark:via-gray-900 dark:to-black">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <Link
              href="/services/mobile-app-development"
              className="inline-flex items-center space-x-2 text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300 mb-8"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Back to Mobile Development</span>
            </Link>

            <div className="w-20 h-20 rounded-3xl bg-gradient-to-r from-green-500 to-blue-600 flex items-center justify-center mx-auto mb-8">
              <Smartphone className="w-10 h-10 text-white" />
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
              Android Development
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Build powerful native Android applications with optimal performance, modern design, and seamless user
              experiences that reach billions of Android users worldwide.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-6">
                Android App Development
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                Our Android development services leverage the latest technologies and best practices to create apps that
                users love and businesses rely on.
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
                    <CheckCircle className="w-5 h-5 text-green-500" />
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
                  className="bg-white dark:bg-gray-800/50 rounded-2xl p-6 border border-gray-200 dark:border-white/10 hover:border-green-500/30 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-green-500 to-blue-600 flex items-center justify-center mb-4">
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
              Our Android Development Process
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              From concept to Play Store launch, we follow a proven development process that ensures quality and
              success.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Planning", description: "Define requirements and create detailed project roadmap" },
              {
                step: "02",
                title: "Design",
                description: "Create intuitive UI/UX following Material Design principles",
              },
              { step: "03", title: "Development", description: "Build robust Android app using latest technologies" },
              { step: "04", title: "Launch", description: "Deploy to Google Play Store with optimization" },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-white dark:bg-gray-800/50 rounded-2xl p-6 text-center border border-gray-200 dark:border-white/10"
              >
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-green-500 to-blue-600 flex items-center justify-center text-white font-bold text-lg mx-auto mb-4">
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
            className="bg-gradient-to-r from-green-500 to-blue-600 rounded-3xl p-12 text-center text-white"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Build Your Android App?</h2>
            <p className="text-xl mb-8 opacity-90">
              Let's create an Android application that stands out in the Google Play Store and delights your users.
            </p>
            <Link href="/#contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white text-green-600 rounded-full font-semibold hover:shadow-lg transition-all duration-300"
              >
                Start Android Project
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
