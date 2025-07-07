"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Share2, ArrowLeft, CheckCircle, Users, Heart, MessageCircle, BarChart3 } from "lucide-react"

export default function SocialMediaMarketingPage() {
  const features = [
    "Social Media Strategy Development",
    "Content Creation & Curation",
    "Community Management",
    "Influencer Partnerships",
    "Social Media Advertising",
    "Analytics & Reporting",
    "Brand Reputation Management",
    "Cross-Platform Campaigns",
  ]

  const platforms = [
    { name: "Facebook", users: "2.9B", color: "from-blue-600 to-blue-700" },
    { name: "Instagram", users: "2B", color: "from-pink-500 to-purple-600" },
    { name: "LinkedIn", users: "900M", color: "from-blue-700 to-blue-800" },
    { name: "Twitter", users: "450M", color: "from-blue-400 to-blue-500" },
  ]

  const benefits = [
    { icon: Users, title: "Audience Growth", description: "Build and engage your target audience" },
    { icon: Heart, title: "Brand Loyalty", description: "Create lasting connections with customers" },
    { icon: MessageCircle, title: "Customer Engagement", description: "Foster meaningful conversations" },
    { icon: BarChart3, title: "Measurable Results", description: "Track performance with detailed analytics" },
  ]

  return (
    <div className="min-h-screen bg-white dark:bg-black pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-pink-50 via-white to-purple-50 dark:from-black dark:via-gray-900 dark:to-black">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <Link
              href="/services/digital-marketing"
              className="inline-flex items-center space-x-2 text-pink-600 dark:text-pink-400 hover:text-pink-700 dark:hover:text-pink-300 mb-8"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Back to Digital Marketing</span>
            </Link>

            <div className="w-20 h-20 rounded-3xl bg-gradient-to-r from-pink-500 to-purple-600 flex items-center justify-center mx-auto mb-8">
              <Share2 className="w-10 h-10 text-white" />
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
              Social Media Marketing
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Build your brand presence and engage with your audience across all major social media platforms with our
              comprehensive social media marketing strategies.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Platforms Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-6">
              We Cover All Major Platforms
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Reach billions of users across the most popular social media platforms with tailored strategies for each.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {platforms.map((platform, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800/50 rounded-2xl p-6 text-center border border-gray-200 dark:border-white/10 hover:border-pink-500/30 transition-all duration-300"
              >
                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-r ${platform.color} flex items-center justify-center mx-auto mb-4`}
                >
                  <Share2 className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">{platform.name}</h3>
                <p className="text-gray-600 dark:text-gray-300">{platform.users} users</p>
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-6">
                Complete Social Media Solutions
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                From strategy development to content creation and community management, we handle all aspects of your
                social media presence.
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
                    <CheckCircle className="w-5 h-5 text-pink-500" />
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
                  className="bg-white dark:bg-gray-800/50 rounded-2xl p-6 border border-gray-200 dark:border-white/10 hover:border-pink-500/30 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-pink-500 to-purple-600 flex items-center justify-center mb-4">
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
            className="bg-gradient-to-r from-pink-500 to-purple-600 rounded-3xl p-12 text-center text-white"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Amplify Your Social Presence?</h2>
            <p className="text-xl mb-8 opacity-90">
              Let's create a social media strategy that builds your brand and engages your audience.
            </p>
            <Link href="/#contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white text-pink-600 rounded-full font-semibold hover:shadow-lg transition-all duration-300"
              >
                Start Social Media Campaign
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
