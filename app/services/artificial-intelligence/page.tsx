"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Brain, ArrowLeft, CheckCircle, Zap, Target, Users, TrendingUp } from "lucide-react"

export default function ArtificialIntelligencePage() {
  const features = [
    "Machine Learning Model Development",
    "Natural Language Processing",
    "Computer Vision Solutions",
    "Predictive Analytics",
    "AI-Powered Automation",
    "Custom AI Integration",
  ]

  const benefits = [
    { icon: Zap, title: "Increased Efficiency", description: "Automate repetitive tasks and streamline operations" },
    { icon: Target, title: "Better Decision Making", description: "Data-driven insights for strategic decisions" },
    { icon: Users, title: "Enhanced User Experience", description: "Personalized experiences for your customers" },
    { icon: TrendingUp, title: "Competitive Advantage", description: "Stay ahead with cutting-edge AI technology" },
  ]

  return (
    <div className="min-h-screen bg-white dark:bg-black pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-blue-60 dark:from-black dark:via-gray-900 dark:to-black">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <Link
              href="/services"
              className="inline-flex items-center space-x-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 mb-8"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Back to Services</span>
            </Link>

            <div className="w-20 h-20 rounded-3xl bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center mx-auto mb-8">
              <Brain className="w-10 h-10 text-white" />
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-blue-600 bg-clip-text text-transparent">
              Artificial Intelligence
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Transform your business with cutting-edge AI solutions that automate processes, enhance decision-making,
              and unlock new possibilities for growth and innovation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-6">What We Offer</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                Our AI solutions are designed to integrate seamlessly with your existing systems and processes,
                providing immediate value and long-term strategic advantages.
              </p>
              <ul className="space-y-4">
                {features.map((feature, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-center space-x-3"
                  >
                    <CheckCircle className="w-6 h-6 text-green-500" />
                    <span className="text-gray-700 dark:text-gray-300 text-lg">{feature}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-br from-blue-500/10 to-blue-600/10 rounded-3xl p-8 border border-blue-200 dark:border-blue-800"
            >
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">AI Implementation Process</h3>
              <div className="space-y-6">
                {[
                  {
                    step: "01",
                    title: "Analysis & Strategy",
                    description: "We analyze your business needs and develop a custom AI strategy",
                  },
                  {
                    step: "02",
                    title: "Development & Training",
                    description: "Our team builds and trains AI models specific to your requirements",
                  },
                  {
                    step: "03",
                    title: "Integration & Testing",
                    description: "Seamless integration with your existing systems and thorough testing",
                  },
                  {
                    step: "04",
                    title: "Deployment & Support",
                    description: "Full deployment with ongoing support and optimization",
                  },
                ].map((item, index) => (
                  <div key={index} className="flex space-x-4">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center text-white font-bold text-sm">
                      {item.step}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 dark:text-white">{item.title}</h4>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-6">
              Why Choose Our AI Solutions?
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Our AI implementations deliver measurable results and provide sustainable competitive advantages for your
              business.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800/50 rounded-2xl p-6 text-center border border-gray-200 dark:border-white/10 hover:border-blue-500/30 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{benefit.description}</p>
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
            className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-3xl p-12 text-center text-white"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Business with AI?</h2>
            <p className="text-xl mb-8 opacity-90">
              Let's discuss how our AI solutions can drive innovation and growth for your organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/#contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-white text-black rounded-full font-semibold hover:shadow-lg transition-all duration-300"
                >
                  Get Started Today
                </motion.button>
              </Link>
              <Link href="/services">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 border border-white/30 text-white rounded-full font-semibold hover:bg-white/10 transition-all duration-300"
                >
                  View All Services
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
