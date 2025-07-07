"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Search, ArrowLeft, CheckCircle } from "lucide-react"

export default function SEOPage() {
  const features = [
    "Keyword Research & Analysis",
    "On-Page SEO Optimization",
    "Technical SEO Audits",
    "Content Strategy & Creation",
    "Link Building Campaigns",
    "Local SEO Optimization",
    "SEO Performance Tracking",
    "Competitor Analysis",
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
              href="/services/digital-marketing"
              className="inline-flex items-center space-x-2 text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300 mb-8"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Back to Digital Marketing</span>
            </Link>

            <div className="w-20 h-20 rounded-3xl bg-gradient-to-r from-green-500 to-blue-600 flex items-center justify-center mx-auto mb-8">
              <Search className="w-10 h-10 text-white" />
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
              SEO Optimization
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Improve your search engine rankings and drive organic traffic with our comprehensive SEO strategies and
              proven optimization techniques.
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
                Complete SEO Solutions
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                Our SEO services are designed to improve your website's visibility, drive qualified traffic, and
                increase your online presence across all search engines.
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
              className="bg-gradient-to-br from-green-500/10 to-blue-500/10 rounded-3xl p-8 border border-green-200 dark:border-green-800"
            >
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">SEO Process</h3>
              <div className="space-y-6">
                {[
                  {
                    step: "01",
                    title: "SEO Audit",
                    description: "Comprehensive analysis of your current SEO performance",
                  },
                  {
                    step: "02",
                    title: "Strategy Development",
                    description: "Custom SEO strategy based on your business goals",
                  },
                  {
                    step: "03",
                    title: "Implementation",
                    description: "Execute on-page and off-page optimization techniques",
                  },
                  {
                    step: "04",
                    title: "Monitoring & Reporting",
                    description: "Track progress and provide detailed performance reports",
                  },
                ].map((item, index) => (
                  <div key={index} className="flex space-x-4">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-green-500 to-blue-600 flex items-center justify-center text-white font-bold text-sm">
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

      {/* CTA Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-r from-green-500 to-blue-600 rounded-3xl p-12 text-center text-white"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Boost Your Search Rankings?</h2>
            <p className="text-xl mb-8 opacity-90">
              Let's create an SEO strategy that drives organic traffic and grows your business.
            </p>
            <Link href="/#contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white text-green-600 rounded-full font-semibold hover:shadow-lg transition-all duration-300"
              >
                Get SEO Consultation
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
