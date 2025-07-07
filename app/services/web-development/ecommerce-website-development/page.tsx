"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ShoppingCart, ArrowLeft, CheckCircle, CreditCard, Shield, BarChart3, Users } from "lucide-react"

export default function EcommerceWebsiteDevelopmentPage() {
  const features = [
    "Custom E-commerce Design",
    "Secure Payment Processing",
    "Inventory Management System",
    "Order Management",
    "Customer Account Portal",
    "Mobile-Responsive Design",
    "SEO Optimization",
    "Analytics & Reporting",
    "Multi-Currency Support",
    "Shipping Integration",
  ]

  const benefits = [
    {
      icon: CreditCard,
      title: "Secure Payments",
      description: "PCI-compliant payment processing with multiple gateways",
    },
    { icon: Shield, title: "Security First", description: "SSL encryption and advanced security measures" },
    { icon: BarChart3, title: "Sales Analytics", description: "Comprehensive reporting and business insights" },
    { icon: Users, title: "User Experience", description: "Intuitive shopping experience that converts" },
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
              href="/services/web-development"
              className="inline-flex items-center space-x-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 mb-8"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Back to Web Development</span>
            </Link>

            <div className="w-20 h-20 rounded-3xl bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center mx-auto mb-8">
              <ShoppingCart className="w-10 h-10 text-white" />
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              E-commerce Website Development
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Build powerful online stores with secure payment processing, inventory management, and exceptional user
              experiences that drive sales and customer loyalty.
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
                Complete E-commerce Solutions
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                Our e-commerce development services create online stores that not only look great but also provide
                seamless shopping experiences and robust business management tools.
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
              E-commerce Development Process
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              From concept to launch, we follow a proven process to create successful online stores.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Discovery", description: "Understand your business needs and target audience" },
              { step: "02", title: "Design", description: "Create user-friendly designs that convert visitors" },
              { step: "03", title: "Development", description: "Build secure, scalable e-commerce platform" },
              { step: "04", title: "Launch", description: "Deploy and optimize for maximum performance" },
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Launch Your Online Store?</h2>
            <p className="text-xl mb-8 opacity-90">
              Let's create an e-commerce website that drives sales and grows your business online.
            </p>
            <Link href="/#contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white text-blue-600 rounded-full font-semibold hover:shadow-lg transition-all duration-300"
              >
                Start E-commerce Project
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
