"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { MousePointer, ArrowLeft, CheckCircle, Target, TrendingUp, DollarSign, Users } from "lucide-react"

export default function PPCAdvertisingPage() {
  const features = [
    "Google Ads Campaign Management",
    "Facebook & Instagram Advertising",
    "LinkedIn B2B Campaigns",
    "Keyword Research & Bidding",
    "Ad Copy Creation & Testing",
    "Landing Page Optimization",
    "Conversion Tracking & Analytics",
    "ROI Optimization",
  ]

  const benefits = [
    { icon: Target, title: "Targeted Reach", description: "Reach your ideal customers with precision targeting" },
    { icon: TrendingUp, title: "Immediate Results", description: "See traffic and leads within hours of launch" },
    { icon: DollarSign, title: "Cost Effective", description: "Maximize ROI with optimized ad spend" },
    { icon: Users, title: "Audience Insights", description: "Gain valuable insights about your customers" },
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
              href="/services/digital-marketing"
              className="inline-flex items-center space-x-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 mb-8"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Back to Digital Marketing</span>
            </Link>

            <div className="w-20 h-20 rounded-3xl bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center mx-auto mb-8">
              <MousePointer className="w-10 h-10 text-white" />
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              PPC Advertising
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Drive immediate traffic and conversions with targeted pay-per-click advertising campaigns across Google,
              Facebook, and other platforms.
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
                PPC Campaign Management
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                Our PPC experts create and manage high-performing advertising campaigns that deliver measurable results
                and maximize your return on ad spend.
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

      {/* CTA Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-3xl p-12 text-center text-white"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Launch Your PPC Campaign?</h2>
            <p className="text-xl mb-8 opacity-90">
              Let's create targeted advertising campaigns that drive immediate results and maximize your ROI.
            </p>
            <Link href="/#contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white text-blue-600 rounded-full font-semibold hover:shadow-lg transition-all duration-300"
              >
                Start PPC Campaign
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
