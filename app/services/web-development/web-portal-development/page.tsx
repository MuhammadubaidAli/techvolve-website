"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Globe, ArrowLeft, CheckCircle, Users, Shield, Database, Settings } from "lucide-react"

export default function WebPortalDevelopmentPage() {
  const features = [
    "Custom Portal Design",
    "User Authentication & Authorization",
    "Role-Based Access Control",
    "Content Management System",
    "Document Management",
    "Communication Tools",
    "Reporting & Analytics",
    "API Integration",
    "Mobile Responsive Design",
    "Security & Compliance",
  ]

  const portalTypes = [
    { title: "Employee Portals", description: "Internal portals for HR, communication, and collaboration" },
    { title: "Customer Portals", description: "Self-service portals for account management and support" },
    { title: "Partner Portals", description: "B2B portals for vendors, distributors, and partners" },
    { title: "Educational Portals", description: "Learning management systems and student portals" },
  ]

  const benefits = [
    { icon: Users, title: "User Management", description: "Comprehensive user roles and permissions system" },
    { icon: Shield, title: "Secure Access", description: "Enterprise-grade security and data protection" },
    { icon: Database, title: "Data Integration", description: "Seamless integration with existing systems" },
    { icon: Settings, title: "Customizable", description: "Tailored to your specific business requirements" },
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
              href="/services/web-development"
              className="inline-flex items-center space-x-2 text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300 mb-8"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Back to Web Development</span>
            </Link>

            <div className="w-20 h-20 rounded-3xl bg-gradient-to-r from-green-500 to-blue-600 flex items-center justify-center mx-auto mb-8">
              <Globe className="w-10 h-10 text-white" />
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
              Web Portal Development
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Create powerful web portals for businesses, organizations, and communities with secure access, user
              management, and comprehensive functionality.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Portal Types Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-6">
              Types of Web Portals We Build
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              From employee portals to customer self-service platforms, we create tailored solutions for every need.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {portalTypes.map((portal, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800/50 rounded-2xl p-6 text-center border border-gray-200 dark:border-white/10 hover:border-green-500/30 transition-all duration-300"
              >
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3">{portal.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{portal.description}</p>
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-6">
                Comprehensive Portal Solutions
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                Our web portal development services create secure, scalable platforms that streamline operations and
                improve user experiences across your organization.
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
                    <span className="text-gray-700 dark:text-gray-300">{feature}</span\
