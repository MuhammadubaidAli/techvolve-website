"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Cpu, ArrowLeft, CheckCircle, Brain, BarChart3, Target, Zap } from "lucide-react"

export default function MachineLearningPage() {
  const features = [
    "Custom ML Model Development",
    "Data Analysis & Processing",
    "Pattern Recognition Systems",
    "Predictive Analytics",
    "Automated Decision Making",
    "ML Model Training & Optimization",
  ]

  const benefits = [
    { icon: Brain, title: "Intelligent Automation", description: "Automate complex decision-making processes" },
    { icon: BarChart3, title: "Data-Driven Insights", description: "Extract valuable insights from your data" },
    { icon: Target, title: "Improved Accuracy", description: "Make more accurate predictions and decisions" },
    { icon: Zap, title: "Faster Processing", description: "Process large datasets quickly and efficiently" },
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
              href="/services"
              className="inline-flex items-center space-x-2 text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300 mb-8"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Back to Services</span>
            </Link>

            <div className="w-20 h-20 rounded-3xl bg-gradient-to-r from-green-500 to-blue-600 flex items-center justify-center mx-auto mb-8">
              <Cpu className="w-10 h-10 text-white" />
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
              Machine Learning
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Harness the power of data with advanced machine learning algorithms and predictive modeling solutions
              tailored to your business needs.
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
                Machine Learning Solutions
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                Our machine learning services help you unlock the potential of your data through advanced algorithms and
                predictive models.
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
              className="bg-gradient-to-br from-green-500/10 to-blue-500/10 rounded-3xl p-8 border border-green-200 dark:border-green-800"
            >
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">ML Development Process</h3>
              <div className="space-y-6">
                {[
                  {
                    step: "01",
                    title: "Data Collection",
                    description: "Gather and prepare relevant data for training",
                  },
                  { step: "02", title: "Model Development", description: "Design and build custom ML models" },
                  { step: "03", title: "Training & Testing", description: "Train models and validate performance" },
                  { step: "04", title: "Deployment", description: "Deploy models into production environment" },
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
              Benefits of Machine Learning
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Transform your business operations with intelligent automation and data-driven decision making.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800/50 rounded-2xl p-6 text-center border border-gray-200 dark:border-white/10 hover:border-green-500/30 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-green-500 to-blue-600 flex items-center justify-center mx-auto mb-4">
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
            className="bg-gradient-to-r from-green-500 to-blue-600 rounded-3xl p-12 text-center text-white"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Leverage Machine Learning?</h2>
            <p className="text-xl mb-8 opacity-90">
              Let's discuss how machine learning can transform your business operations and drive growth.
            </p>
            <Link href="/#contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white text-green-600 rounded-full font-semibold hover:shadow-lg transition-all duration-300"
              >
                Get ML Consultation
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
