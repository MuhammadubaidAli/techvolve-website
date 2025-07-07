"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Palette, ArrowLeft, CheckCircle, Brush, ImageIcon, Layout, Sparkles } from "lucide-react"

export default function GraphicDesignPage() {
  const features = [
    "Brand Identity Design",
    "Logo Creation & Branding",
    "UI/UX Design",
    "Print Design Solutions",
    "Digital Asset Creation",
    "Marketing Materials",
    "Website Graphics",
    "Social Media Graphics",
  ]

  const benefits = [
    { icon: Brush, title: "Creative Excellence", description: "Award-winning designs that stand out" },
    { icon: ImageIcon, title: "Visual Impact", description: "Compelling visuals that engage audiences" },
    { icon: Layout, title: "Brand Consistency", description: "Cohesive design across all platforms" },
    { icon: Sparkles, title: "Modern Aesthetics", description: "Contemporary designs that inspire" },
  ]

  return (
    <div className="min-h-screen bg-white dark:bg-black pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-indigo-50 via-white to-purple-50 dark:from-black dark:via-gray-900 dark:to-black">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <Link
              href="/services"
              className="inline-flex items-center space-x-2 text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 mb-8"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Back to Services</span>
            </Link>

            <div className="w-20 h-20 rounded-3xl bg-gradient-to-r from-indigo-500 to-purple-600 flex items-center justify-center mx-auto mb-8">
              <Palette className="w-10 h-10 text-white" />
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Graphic Design
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Creative visual solutions that communicate your brand message effectively across all platforms and
              mediums.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-6">Design Services</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                Our graphic design services help you create a strong visual identity that resonates with your target
                audience and drives business growth.
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
                    <CheckCircle className="w-5 h-5 text-indigo-500" />
                    <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-br from-indigo-500/10 to-purple-500/10 rounded-3xl p-8 border border-indigo-200 dark:border-indigo-800"
            >
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">Design Process</h3>
              <div className="space-y-6">
                {[
                  { step: "01", title: "Discovery", description: "Understanding your brand and design requirements" },
                  {
                    step: "02",
                    title: "Concept Development",
                    description: "Creating initial design concepts and ideas",
                  },
                  {
                    step: "03",
                    title: "Design & Refinement",
                    description: "Developing and refining the chosen concept",
                  },
                  { step: "04", title: "Delivery", description: "Final design delivery with all necessary formats" },
                ].map((item, index) => (
                  <div key={index} className="flex space-x-4">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 flex items-center justify-center text-white font-bold text-sm">
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
              Why Choose Our Design Services?
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Our design solutions create lasting impressions and help your brand stand out in a competitive market.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800/50 rounded-2xl p-6 text-center border border-gray-200 dark:border-white/10 hover:border-indigo-500/30 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 flex items-center justify-center mx-auto mb-4">
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
            className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-3xl p-12 text-center text-white"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Elevate Your Brand?</h2>
            <p className="text-xl mb-8 opacity-90">
              Let's create stunning visual designs that capture your brand essence and engage your audience.
            </p>
            <Link href="/#contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white text-indigo-600 rounded-full font-semibold hover:shadow-lg transition-all duration-300"
              >
                Start Your Design Project
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
