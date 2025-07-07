"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { TrendingUp, ArrowLeft, Search, MousePointer, Share2 } from "lucide-react"

export default function DigitalMarketingPage() {
  const services = [
    {
      title: "SEO",
      description: "Improve your search engine rankings and organic visibility",
      icon: Search,
      href: "/services/digital-marketing/seo",
      color: "from-green-500 to-blue-600",
    },
    {
      title: "PPC Advertising",
      description: "Targeted pay-per-click campaigns for immediate results",
      icon: MousePointer,
      href: "/services/digital-marketing/ppc-advertising",
      color: "from-blue-500 to-purple-600",
    },
    {
      title: "Social Media Marketing",
      description: "Engage your audience across all social media platforms",
      icon: Share2,
      href: "/services/digital-marketing/social-media-marketing",
      color: "from-pink-500 to-red-600",
    },
  ]

  return (
    <div className="min-h-screen bg-white dark:bg-black pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-pink-50 via-white to-red-50 dark:from-black dark:via-gray-900 dark:to-black">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <Link
              href="/services"
              className="inline-flex items-center space-x-2 text-pink-600 dark:text-pink-400 hover:text-pink-700 dark:hover:text-pink-300 mb-8"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Back to Services</span>
            </Link>

            <div className="w-20 h-20 rounded-3xl bg-gradient-to-r from-pink-500 to-red-600 flex items-center justify-center mx-auto mb-8">
              <TrendingUp className="w-10 h-10 text-white" />
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-pink-600 to-red-600 bg-clip-text text-transparent">
              Digital Marketing
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Boost your online presence with comprehensive digital marketing strategies that drive traffic, generate
              leads, and increase conversions.
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
              Our Digital Marketing Services
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              From SEO to social media marketing, we offer comprehensive solutions to grow your online presence.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                whileHover={{ y: -10 }}
                className="bg-white dark:bg-gray-800/50 rounded-2xl p-8 border border-gray-200 dark:border-white/10 hover:border-pink-500/30 transition-all duration-300 group shadow-lg hover:shadow-xl"
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
                    className="w-full py-3 bg-gradient-to-r from-pink-500 to-red-600 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-pink-500/25 transition-all duration-300"
                  >
                    Learn More
                  </motion.button>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-6">Proven Results</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Our digital marketing strategies deliver measurable results for businesses of all sizes.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { number: "300%", label: "Average ROI Increase" },
              { number: "150%", label: "Traffic Growth" },
              { number: "85%", label: "Lead Generation Boost" },
              { number: "200%", label: "Conversion Rate Improvement" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-pink-600 to-red-600 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 dark:text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
