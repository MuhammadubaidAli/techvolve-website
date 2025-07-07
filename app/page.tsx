"use client"

import type React from "react"
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'

import 'swiper/css'
import { Typewriter } from 'react-simple-typewriter'

import { useState, useEffect } from "react"
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"
import {
  Menu,
  X,
  ChevronDown,
  ChevronRight,
  Brain,
  Cpu,
  TrendingUp,
  Search,
  MousePointer,
  Share2,
  Smartphone,
  Monitor,
  ShoppingCart,
  Globe,
  Settings,
  Database,
  Users,
  Palette,
  Briefcase,
  FileText,
  UserPlus,
  BookOpen,
  Mail,
  ArrowRight,
  Zap,
  Sun,
  Moon,
  Upload,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Github,
  Key,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useTheme } from "next-themes"

// Navigation data structure with actual routes
const navigationData = {
  Home: { href: "/" },
  Services: {
    href: "/services",
    children: {
      "Artificial Intelligence": { href: "/services/artificial-intelligence", icon: Brain },
      "Machine Learning": { href: "/services/machine-learning", icon: Cpu },
      "Digital Marketing": {
        href: "/services/digital-marketing",
        icon: TrendingUp,
        children: {
          SEO: { href: "/services/digital-marketing/seo", icon: Search },
          "PPC Advertising": { href: "/services/digital-marketing/ppc-advertising", icon: MousePointer },
          "Social Media Marketing": { href: "/services/digital-marketing/social-media-marketing", icon: Share2 },
        },
      },
      "Mobile App Development": {
        href: "/services/mobile-app-development",
        icon: Smartphone,
        children: {
          "Android Development": { href: "/services/mobile-app-development/android-development", icon: Smartphone },
          "iOS Development": { href: "/services/mobile-app-development/ios-development", icon: Smartphone },
        },
      },
      "Web Development": {
        href: "/services/web-development",
        icon: Monitor,
        children: {
          "E-commerce Website Development": {
            href: "/services/web-development/ecommerce-website-development",
            icon: ShoppingCart,
          },
          "Web Portal Development": { href: "/services/web-development/web-portal-development", icon: Globe },
        },
      },
      "Software Development": {
        href: "/services/software-development",
        icon: Settings,
        children: {
          "ERP Solutions": { href: "/services/software-development/erp-solutions", icon: Database },
          "CMS Development": { href: "/services/software-development/cms-development", icon: FileText },
          "CRM Development": { href: "/services/software-development/crm-development", icon: Users },
        },
      },
      "Graphic Design": { href: "/services/graphic-design", icon: Palette },
    },
  },
  Portfolio: { href: "#portfolio", icon: Briefcase },
  "Case Studies": { href: "#case-studies", icon: FileText },
  Career: { href: "#career", icon: UserPlus },
  Blog: { href: "#blog", icon: BookOpen },
  Contact: { href: "#contact", icon: Mail },
}

// Theme Toggle Component
function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="p-2 rounded-lg bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 transition-colors duration-200"
    >
      {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
    </motion.button>
  )
}

// Header Component with Fixed Dropdown Behavior
 function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [activeSubDropdown, setActiveSubDropdown] = useState<string | null>(null)
  const [isMobile, setIsMobile] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024)
    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const [dropdownTimeout, setDropdownTimeout] = useState<NodeJS.Timeout | null>(null)

  const handleDropdownEnter = (key: string) => {
    if (dropdownTimeout) clearTimeout(dropdownTimeout)
    if (navigationData[key as keyof typeof navigationData].children) {
      setActiveDropdown(key)
      setActiveSubDropdown(null)
    }
  }

  const handleDropdownLeave = () => {
    const timeout = setTimeout(() => {
      setActiveDropdown(null)
      setActiveSubDropdown(null)
    }, 300)
    setDropdownTimeout(timeout)
  }

  const handleDropdownClick = (key: string) => {
    if (isMobile && navigationData[key as keyof typeof navigationData].children) {
      setActiveDropdown(activeDropdown === key ? null : key)
      setActiveSubDropdown(null)
    }
  }

  const handleLinkClick = (href: string) => {
    setIsOpen(false)
    setActiveDropdown(null)
    setActiveSubDropdown(null)
    if (href.startsWith("#")) {
      const element = document.querySelector(href)
      if (element) {
        element.scrollIntoView({ behavior: "smooth" })
      }
    }
  }

  const handleSubDropdownHover = (key: string) => {
    if (!isMobile) setActiveSubDropdown(key)
  }

  const handleSubDropdownClick = (key: string) => {
    if (isMobile) setActiveSubDropdown(activeSubDropdown === key ? null : key)
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b transition-colors duration-300 ${
        scrolled
          ? "bg-black text-white border-white/10"
          : "bg-transparent text-black dark:text-white border-black"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center space-x-2"
          >
            <Link href="/">
              <div className="w-36 h-36 rounded-lg flex items-center justify-center overflow-hidden">
                <Image
                  src="/Logo.png"
                  alt="Logo"
                  width={128}
                  height={128}
                  className="object-contain"
                />
              </div>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {Object.entries(navigationData).map(([key, value]) => (
              <div
                key={key}
                className="relative"
                onMouseEnter={() => !isMobile && handleDropdownEnter(key)}
                onMouseLeave={() => !isMobile && handleDropdownLeave()}
              >
                {value.href.startsWith("#") ? (
                  <button
                    onClick={() => handleLinkClick(value.href)}
                    className="flex items-center space-x-1 text-inherit hover:text-blue-500 transition-colors duration-200 py-2"
                  >
                    <span>{key}</span>
                    {value.children && (
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-200 ${
                          activeDropdown === key ? "rotate-180" : ""
                        }`}
                      />
                    )}
                  </button>
                ) : (
                  <Link
                    href={value.href}
                    onClick={() => handleDropdownClick(key)}
                    className="flex items-center space-x-1 text-inherit hover:text-blue-500 transition-colors duration-200 py-2"
                  >
                    <span>{key}</span>
                    {value.children && (
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-200 ${
                          activeDropdown === key ? "rotate-180" : ""
                        }`}
                      />
                    )}
                  </Link>
                )}

                {/* First Level Dropdown */}
                <AnimatePresence>
                  {value.children && activeDropdown === key && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.15 }}
                      className="absolute top-full left-0 mt-2 w-72 bg-black text-white backdrop-blur-md rounded-lg border border-white/10 shadow-xl overflow-hidden"
                      onMouseEnter={() => !isMobile && setActiveDropdown(key)}
                      onMouseLeave={() => !isMobile && handleDropdownLeave()}
                    >
                      {Object.entries(value.children).map(([subKey, subValue]) => (
                        <div key={subKey} className="relative" onMouseEnter={() => handleSubDropdownHover(subKey)}>
                          {subValue.href ? (
                            <Link
                              href={subValue.href}
                              onClick={() => handleLinkClick(subValue.href)}
                              className="w-full flex items-center justify-between px-4 py-3 text-inherit hover:bg-white/10 transition-colors duration-200 text-left"
                            >
                              <div className="flex items-center space-x-3">
                                {subValue.icon && <subValue.icon className="w-4 h-4 text-blue-500" />}
                                <span>{subKey}</span>
                              </div>
                              {subValue.children && <ChevronRight className="w-4 h-4" />}
                            </Link>
                          ) : (
                            <button
                              onClick={() => handleSubDropdownClick(subKey)}
                              className="w-full flex items-center justify-between px-4 py-3 text-inherit hover:bg-white/10 transition-colors duration-200 text-left"
                            >
                              <div className="flex items-center space-x-3">
                                {subValue.icon && <subValue.icon className="w-4 h-4 text-blue-500" />}
                                <span>{subKey}</span>
                              </div>
                              {subValue.children && <ChevronRight className="w-4 h-4" />}
                            </button>
                          )}

                          {/* Second Level Dropdown */}
                          <AnimatePresence>
                            {subValue.children && activeSubDropdown === subKey && (
                              <motion.div
                                initial={{ opacity: 0, x: 10, scale: 0.95 }}
                                animate={{ opacity: 1, x: 0, scale: 1 }}
                                exit={{ opacity: 0, x: 10, scale: 0.95 }}
                                transition={{ duration: 0.15 }}
                                className="absolute top-0 left-full ml-2 w-64 bg-black text-white backdrop-blur-md rounded-lg border border-white/10 shadow-xl overflow-hidden"
                              >
                                {Object.entries(subValue.children).map(([subSubKey, subSubValue]) => (
                                  <Link
                                    key={subSubKey}
                                    href={subSubValue.href}
                                    onClick={() => handleLinkClick(subSubValue.href)}
                                    className="w-full flex items-center space-x-3 px-4 py-3 text-inherit hover:bg-white/10 transition-colors duration-200 text-left"
                                  >
                                    {subSubValue.icon && <subSubValue.icon className="w-4 h-4 text-blue-500" />}
                                    <span>{subSubKey}</span>
                                  </Link>
                                ))}
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </nav>

          {/* Theme Toggle and Mobile Button */}
          <div className="flex items-center space-x-4">
            <ThemeToggle />
            <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden text-inherit p-2">
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-black text-white backdrop-blur-md rounded-lg mt-2 border border-white/10 overflow-hidden"
            >
              <div className="py-4 max-h-96 overflow-y-auto">
                {Object.entries(navigationData).map(([key, value]) => (
                  <div key={key} className="px-4 py-2">
                    {value.href.startsWith("#") ? (
                      <button
                        onClick={() => handleLinkClick(value.href)}
                        className="block w-full text-left text-inherit hover:text-blue-400 transition-colors duration-200"
                      >
                        {key}
                      </button>
                    ) : (
                      <Link
                        href={value.href}
                        onClick={() => handleLinkClick(value.href)}
                        className="block w-full text-left text-inherit hover:text-blue-400 transition-colors duration-200"
                      >
                        {key}
                      </Link>
                    )}
                    {value.children && (
                      <div className="ml-4 mt-2 space-y-1">
                        {Object.entries(value.children).map(([subKey, subValue]) => (
                          <div key={subKey}>
                            <Link
                              href={subValue.href}
                              onClick={() => handleLinkClick(subValue.href)}
                              className="block w-full text-left text-sm text-white hover:text-blue-400 transition-colors duration-200 py-1"
                            >
                              {subKey}
                            </Link>
                            {subValue.children && (
                              <div className="ml-4 space-y-1">
                                {Object.entries(subValue.children).map(([subSubKey, subSubValue]) => (
                                  <Link
                                    key={subSubKey}
                                    href={subSubValue.href}
                                    onClick={() => handleLinkClick(subSubValue.href)}
                                    className="block w-full text-left text-xs text-gray-300 hover:text-blue-400 transition-colors duration-200 py-1"
                                  >
                                    {subSubKey}
                                  </Link>
                                ))}
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  )
}

// Hero Section with Enhanced Animations
// HeroSection.tsx


function HeroSection() {
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 500], [0, 150])
  const opacity = useTransform(scrollY, [0, 300], [1, 0])

  return (
    <section
      id="home"
      className="relative min-h-screen  overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-black dark:via-gray-900 dark:to-black pt-16"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-black bg-opacity-40 bg-center bg-no-repeat bg-cover"
        style={{
          backgroundImage: "url('/Hero-section.png')",
          backgroundPosition: "center",
        }}
      ></div>
    
      {/* Content */}
      <motion.div
        style={{ y: 0, opacity: 1 }}
        className="relative z-10 w-full px-1 sm:px-8 md:px-16 max-w-7xl"
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mb-8"
        >
          <h1 className="text-xl md:text-3xl lg:text-5xl font-bold text-blue mb-2 border-l-4 border-blue-500 pl-2 mt-10">
  Beyond Code.
</h1>

<h2 className="text-xl md:text-3xl lg:text-5xl font-bold text-white pl-4 pb-10">
  Beyond{' '}
  <span className="text-white inline-block min-w-[150px]">
    <Typewriter
      words={['Ordinary.']}
      loop
      cursor
      cursorStyle="_"
      typeSpeed={90}
      deleteSpeed={50}
      delaySpeed={1500}
    />
  </span>
</h2>

<motion.p
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1, delay: 1.1 }}
  className="text-base sm:text-lg md:text-xl text-white mt-6 mb-8 leading-relaxed pl-4 max-w-3xl pb-10"
>
  We craft digital experiences that push boundaries, solve complex problems,
  and transform businesses into industry leaders.
</motion.p>

        </motion.div>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.3 }}
          className="flex flex-col sm:flex-row gap-4 items-start sm:items-center pl-4"
        >
          <Link href="/services">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-full font-semibold flex items-center space-x-2 hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
            >
              <span>Explore Services</span>
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </Link>

          <motion.button
            onClick={() => document.getElementById("portfolio")?.scrollIntoView({ behavior: "smooth" })}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 border border-gray-300 dark:border-white/20 text-white rounded-full font-semibold hover:bg-gray-100 dark:hover:bg-white/10 transition-all duration-300"
          >
            View Portfolio
          </motion.button>
        </motion.div>

        
      </motion.div>
    </section>
  )
}


function State() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 1.5 }}
      className="w-full bg-white py-12 px-4 sm:px-10"
    >
      <div className="max-w-5xl mx-auto">
        {/* Heading or description */}
        <h2 className="text-2xl sm:text-3xl font-semibold text-center text-black mb-10">
          Empowering Global Growth with Our Trusted Network
        </h2>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-12 gap-x-12 items-center justify-items-center">
          {[
            { number: "150+", label: "Countries Served" },
            { number: "75+", label: "Active Clients" },
            { number: "50+", label: "Employees" },
            { number: "24/7", label: "Support" },
          ].map((stat, index) => (
            <div key={index} className="flex flex-col items-center">
              <p className="text-3xl sm:text-4xl font-bold text-blue-500">
                {stat.number}
              </p>
              <p className="text-black text-base sm:text-lg">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}


// Services Section with Fixed Learn More Buttons
function ServicesSection() {
  const services = [
    {
      title: "Artificial Intelligence",
      description: "Cutting-edge AI solutions that transform your business operations and decision-making processes.",
      icon: Brain,
      image: "/AI Services.jpeg",
      features: ["Machine Learning Models", "Natural Language Processing", "Computer Vision", "Predictive Analytics"],
      href: "/services/artificial-intelligence",
    },
    {
      title: "Web Development",
      description: "Modern, responsive websites and web applications built with the latest technologies.",
      icon: Monitor,
      image: "/Web-Development Services.jpg",
      features: ["React & Next.js", "E-commerce Solutions", "Progressive Web Apps", "API Development"],
      href: "/services/web-development",
    },
    {
      title: "Mobile Development",
      description: "Native and cross-platform mobile applications for iOS and Android.",
      icon: Smartphone,
      image: "/Mobile Development Serivces.webp",
      features: ["React Native", "Flutter", "Native iOS/Android", "App Store Optimization"],
      href: "/services/mobile-app-development",
    },
    {
      title: "Digital Marketing",
      description: "Data-driven marketing strategies that boost your online presence and drive growth.",
      icon: TrendingUp,
      image: "/Digital Marketing Services.jpg",
      features: ["SEO Optimization", "PPC Campaigns", "Social Media Marketing", "Content Strategy"],
      href: "/services/digital-marketing",
    },
    {
      title: "Software Development",
      description: "Custom software solutions including ERP, CRM, and CMS systems.",
      icon: Settings,
      image: "/Software_Development_Services.jpg",
      features: ["Enterprise Solutions", "Cloud Integration", "Database Design", "System Architecture"],
      href: "/services/software-development",
    },
    {
      title: "Graphic Design",
      description: "Creative visual solutions that communicate your brand message effectively.",
      icon: Palette,
      image: "/Graphic Designing Services.jpg",
      features: ["Brand Identity", "UI/UX Design", "Print Design", "Digital Assets"],
      href: "/services/graphic-design",
    },
  ]

  return (
    <section id="services" className="py-20 bg-white dark:bg-gradient-to-b dark:from-black dark:to-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-black dark:text-white">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            We offer comprehensive digital solutions to help your business thrive in the modern world.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="bg-white dark:bg-gradient-to-br dark:from-gray-800/50 dark:to-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-200 dark:border-white/10 hover:border-blue-500/30 transition-all duration-300 group shadow-lg hover:shadow-xl"
            >
              <div className="relative overflow-hidden rounded-xl mb-6">
                <Image
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <service.icon className="w-8 h-8 text-blue-400" />
                </div>
              </div>

              <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3">{service.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">{service.description}</p>

              <ul className="space-y-2 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <li
                    key={featureIndex}
                    className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400"
                  >
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Link href={service.href}>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full py-3 bg-gradient-to-r from-blue-500 to-blue-600 border border-blue-500/30 text-white  rounded-lg font-semibold hover:from-blue-500/30 hover:to-purple-500/30 transition-all duration-300"
                >
                  Learn More
                </motion.button>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Portfolio Section (keeping existing but updating theme)
function PortfolioSection() {
  const projects = [
    {
      title: "AI-Powered E-commerce Platform",
      category: "Web Development",
      image: "/AI-First-Ecommerce.webp",
      description:
        "A revolutionary e-commerce platform with AI-driven product recommendations and personalized shopping experiences.",
      technologies: ["React", "Node.js", "TensorFlow", "MongoDB"],
    },
    {
      title: "Healthcare Mobile App",
      category: "Mobile Development",
      image: "/Ai-Health-care.webp",
      description:
        "A comprehensive healthcare app connecting patients with doctors through telemedicine and health tracking.",
      technologies: ["React Native", "Firebase", "WebRTC", "HealthKit"],
    },
    {
      title: "Financial Dashboard",
      category: "Software Development",
      image: "/Accounting Dashboard.webp",
      description:
        "An advanced financial analytics dashboard with real-time data visualization and predictive modeling.",
      technologies: ["Vue.js", "Python", "D3.js", "PostgreSQL"],
    },
    {
      title: "Brand Identity System",
      category: "Graphic Design",
      image: "/Brand Identity system pics.jpg",
      description:
        "Complete brand identity design for a tech startup including logo, guidelines, and marketing materials.",
      technologies: ["Adobe Creative Suite", "Figma", "Brand Strategy"],
    },
  ]

  return (
    <section id="portfolio" className="py-20 bg-gray-50 dark:bg-gradient-to-b dark:from-gray-900 dark:to-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-black dark:text-white">
            Our Portfolio
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Discover our latest projects and see how we've helped businesses achieve their digital goals.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className="bg-white dark:bg-gradient-to-br dark:from-gray-800/30 dark:to-gray-900/30 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-200 dark:border-white/10 hover:border-green-500/30 transition-all duration-300 group shadow-lg hover:shadow-xl"
            >
              <div className="relative overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  width={600}
                  height={400}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-green-500/20 border border-green-500/30 text-green-600 dark:text-green-400 text-sm rounded-full">
                    {project.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-blue-500/20 border border-blue-500/30 text-blue-600 dark:text-blue-400 text-xs rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center space-x-2 text-black dark:text-white "
                >
                  <span>View Project</span>
                  <ArrowRight className="w-4 h-4" />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Case Studies Section (keeping existing but updating theme)
function CaseStudiesSection() {
  const caseStudies = [
    {
      title: "Increased E-commerce Revenue by 300%",
      client: "Fashion Retailer",
      challenge: "Low conversion rates and poor user experience",
      solution: "AI-powered personalization and UX redesign",
      result: "300% increase in revenue, 150% boost in conversion rate",
      icon: TrendingUp,
      color: "from-blue-400 ",
    },
    {
      title: "Streamlined Operations with Custom ERP",
      client: "Manufacturing Company",
      challenge: "Inefficient manual processes and data silos",
      solution: "Custom ERP system with real-time analytics",
      result: "50% reduction in operational costs, 80% faster reporting",
      icon: Settings,
      color: "from-blue-400 ",
    },
    {
      title: "Mobile App with 1M+ Downloads",
      client: "Healthcare Startup",
      challenge: "Need for accessible healthcare solutions",
      solution: "Cross-platform mobile app with telemedicine features",
      result: "1M+ downloads, 95% user satisfaction rate",
      icon: Smartphone,
      color: "from-blue-400 ",
    },
  ]

  return (
    <section id="case-studies" className="py-20 bg-white dark:bg-gradient-to-b dark:from-black dark:to-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-black dark:text-white">
            Case Studies
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Real results from real clients. See how we've transformed businesses across industries.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="bg-white dark:bg-gradient-to-br dark:from-gray-800/50 dark:to-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-200 dark:border-white/10 hover:border-purple-500/30 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <div
                className={`w-12 h-12 rounded-lg bg-gradient-to-r ${study.color} flex items-center justify-center mb-6`}
              >
                <study.icon className="w-6 h-6 text-white" />
              </div>

              <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">{study.title}</h3>
              <p className="text-purple-600 dark:text-purple-400 text-sm mb-4">{study.client}</p>

              <div className="space-y-3">
                <div>
                  <h4 className="text-sm font-semibold text-black dark:text-white mb-1">Challenge</h4>
                  <p className="text-sm text-black dark:text-white">{study.challenge}</p>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-black dark:text-white mb-1">Solution</h4>
                  <p className="text-sm text-black dark:text-white">{study.solution}</p>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-black dark:text-white mb-1">Result</h4>
                  <p className="text-sm font-semibold text-black dark:text-white">
                    {study.result}
                  </p>
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-6 w-full py-3 bg-gradient-to-r from-blue-500 to-blue-600 border border-purple-500/30 text-black-600 dark:text-white-400 rounded-lg font-semibold hover:from-purple-500/30 hover:to-pink-500/30 transition-all duration-300"
              >
                Read Full Case Study
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Blog Section
function BlogSection() {
  const blogPosts = [
    {
      title: "The Future of AI in Web Development",
      excerpt: "Exploring how artificial intelligence is revolutionizing the way we build and interact with websites.",
      author: "John Smith",
      date: "Dec 15, 2024",
      readTime: "5 min read",
      category: "AI & Technology",
      image: "/Future of AI.jpg",
    },
    {
      title: "Mobile-First Design: Best Practices for 2024",
      excerpt: "Essential strategies for creating mobile-optimized experiences that engage users across all devices.",
      author: "Sarah Johnson",
      date: "Dec 12, 2024",
      readTime: "7 min read",
      category: "Design",
      image: "Mobile First Design.png",
    },
    {
      title: "Building Scalable Cloud Applications",
      excerpt: "A comprehensive guide to architecting applications that can handle millions of users efficiently.",
      author: "Mike Chen",
      date: "Dec 10, 2024",
      readTime: "10 min read",
      category: "Development",
      image: "/Building Cloud Applications.jpg",
    },
  ]

  
    return (
    <section
      id="blog"
      className="py-20 bg-white dark:bg-gradient-to-b dark:from-black dark:to-gray-900"
    >
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800 dark:text-white ">
            Latest Insights
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Stay updated with the latest trends, tips, and insights from the world of technology and digital innovation.
          </p>
        </motion.div>

        {/* Swiper Slider */}
        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop={true}
          breakpoints={{
            0: { slidesPerView: 1, spaceBetween: 20 },
            768: { slidesPerView: 2, spaceBetween: 24 },
            1024: { slidesPerView: 3, spaceBetween: 32 },
          }}
        >
          {blogPosts.map((post, index) => (
            <SwiperSlide key={index}>
              <motion.article
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="bg-white dark:bg-gradient-to-br dark:from-gray-800/50 dark:to-gray-900/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-200 dark:border-white/10 hover:border-cyan-500/30 transition-all duration-300 group shadow-lg hover:shadow-xl"
              >
                <div className="relative overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    width={400}
                    height={300}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-cyan-500/20 border border-cyan-500/30 text-cyan-600 dark:text-cyan-400 text-sm rounded-full">
                      {post.category}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mb-4">
                    <span>{post.author}</span>
                    <span>{post.readTime}</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{post.date}</span>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center space-x-2 text-cyan-600 dark:text-cyan-400 hover:text-cyan-700 dark:hover:text-cyan-300 transition-colors duration-200"
                    >
                      <span>Read More</span>
                      <ArrowRight className="w-4 h-4" />
                    </motion.button>
                  </div>
                </div>
              </motion.article>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* View All Posts Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full font-semibold text-black-800 dark:text-white"
          >
            View All Posts
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

// Career Section with Enhanced Form Animations
function CareerSection() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    contactNumber: "",
    cv: null as File | null,
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null
    setFormData((prev) => ({ ...prev, cv: file }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert("Application submitted successfully! We'll get back to you soon.")
    setFormData({ fullName: "", email: "", contactNumber: "", cv: null })
  }

  const positions = [
    {
      title: "Sales-Executive",
      department: "Sales",
      location: "On-site",
      type: "Full-time",
      description:
        "Join our exiting team to build cutting-edge web applications using modern technologies.",
      requirements: [
        " Willingness to learn – no prior experience required ",
        "Fresh graduates and intermediate pass candidates are welcome to apply",
        "Passion for sales, communication, and customer interaction",
      ],
    },
  ]

  return (
    <section
      id="career"
      className="py-20 bg-gray-50 dark:bg-gradient-to-b dark:from-gray-900 dark:to-black"
    >
      <div className="container mx-auto px-4">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800 dark:text-white">
            Join Our Team
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Be part of a dynamic team that's shaping the future of technology.
            We offer competitive benefits and a collaborative work environment.
          </p>
        </motion.div>

        {/* Job Card Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16 max-w-6xl mx-auto px-4">
          {positions.map((position, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`bg-white dark:bg-gradient-to-br dark:from-gray-800/50 dark:to-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-200 dark:border-white/10 hover:border-yellow-500/30 transition-all duration-300 shadow-lg hover:shadow-xl 
                ${positions.length === 1 ? 'lg:col-span-2 flex justify-center' : ''}`}
            >
              <div className="w-full max-w-xl">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-1">
                      {position.title}
                    </h3>
                    <p className="text-yellow-600 dark:text-yellow-400 text-sm">
                      {position.department}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      {position.location}
                    </p>
                    <p className="text-gray-500 dark:text-gray-400 text-xs">
                      {position.type}
                    </p>
                  </div>
                </div>

                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {position.description}
                </p>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-600 dark:text-gray-300 mb-2">
                    Requirements:
                  </h4>
                  <ul className="space-y-1">
                    {position.requirements.map((req, reqIndex) => (
                      <li
                        key={reqIndex}
                        className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400"
                      >
                        <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full" />
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full py-3 bg-gradient-to-r from-blue-500 to-blue-600 border border-yellow-500/30 text-black-600 dark:text-white-400 rounded-lg font-semibold hover:from-yellow-500/30 hover:to-orange-500/30 transition-all duration-300"
                >
                  Apply Now
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
    


    

        {/* Application Form with Enhanced Animations */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-gradient-to-br dark:from-gray-800/50 dark:to-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-200 dark:border-white/10 shadow-lg"
          >
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 text-center">Apply for a Sales Executive</h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Full Name *</label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800/50 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:border-yellow-500 focus:outline-none transition-colors duration-200"
                  placeholder="Enter your full name"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800/50 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:border-yellow-500 focus:outline-none transition-colors duration-200"
                  placeholder="Enter your email address"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Contact Number *
                </label>
                <input
                  type="tel"
                  name="contactNumber"
                  value={formData.contactNumber}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800/50 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:border-yellow-500 focus:outline-none transition-colors duration-200"
                  placeholder="Enter your contact number"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Upload CV (PDF/DOC) *
                </label>
                <div className="relative">
                  <input
                    type="file"
                    onChange={handleFileChange}
                    accept=".pdf,.doc,.docx"
                    required
                    className="hidden"
                    id="cv-upload"
                  />
                  <label
                    htmlFor="cv-upload"
                    className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800/50 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-800 dark:text-white cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700/50 transition-colors duration-200 flex items-center justify-center space-x-2"
                  >
                    <Upload className="w-5 h-5" />
                    <span>{formData.cv ? formData.cv.name : "Choose file"}</span>
                  </label>
                </div>
              </motion.div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-yellow-500/25 transition-all duration-300"
              >
                Submit Application
              </motion.button>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

// Contact Section
function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-white dark:bg-gradient-to-b dark:from-black dark:to-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800 dark:text-white ">
            Let's Build Something Special
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Ready to transform your ideas into reality? Get in touch with our team and let's discuss your next project.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-gradient-to-br dark:from-gray-800/50 dark:to-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-200 dark:border-white/10 shadow-lg"
          >
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">Send us a message</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  viewport={{ once: true }}
                >
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">First Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800/50 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:border-pink-500 focus:outline-none transition-colors duration-200"
                    placeholder="Enter your first name"
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Last Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800/50 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:border-pink-500 focus:outline-none transition-colors duration-200"
                    placeholder="Enter your last name"
                  />
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800/50 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:border-pink-500 focus:outline-none transition-colors duration-200"
                  placeholder="techvolvelimited@.com"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Subject</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800/50 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:border-pink-500 focus:outline-none transition-colors duration-200"
                  placeholder="Project Inquiry"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                viewport={{ once: true }}
              >
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Message</label>
                <textarea
                  rows={5}
                  className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800/50 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:border-pink-500 focus:outline-none transition-colors duration-200 resize-none"
                  placeholder="Tell us about your project..."
                />
              </motion.div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-pink-500/25 transition-all duration-300"
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">Get in touch</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-8">
                We're here to help you bring your vision to life. Whether you have a question about our services, want
                to discuss a project.
              </p>
            </div>

            <div className="space-y-6">
              {[
                { icon: Mail, title: "Email", info: "hello@techvolve.com", link: "mailto:hello@techflow.com" },
                { icon: Phone, title: "Phone", info: "+92 0334-3866287", link: "tel:+92 03343866287" },
                { icon: MapPin, title: "Office", info: "Office No:1095, Sec33/C, Karachi", link: "#" },
              ].map((contact, index) => (
                <motion.a
                  key={index}
                  href={contact.link}
                  whileHover={{ scale: 1.02 }}
                  className="flex items-center space-x-4 p-4 bg-white dark:bg-gradient-to-r dark:from-black dark:to-gray-900/30 rounded-lg border border-gray-200 dark:border-white/10 hover:border-pink-500/30 transition-all duration-300 shadow-sm hover:shadow-md"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500/20 to-blue-600 rounded-lg flex items-center justify-center">
                    <contact.icon className="w-6 h-6 text-black dark:text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 dark:text-white">{contact.title}</h4>
                    <p className="text-gray-600 dark:text-gray-300">{contact.info}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            <div className="pt-8">
              <h4 className="text-lg font-semibold text-black-800 dark:text-white mb-4">Follow us</h4>
              <div className="flex space-x-4">
                {[
                  { name: "Facebook", icon: Facebook },
                  { name: "Twitter", icon: Twitter },
                  { name: "Instagram", icon: Instagram },
                  { name: "LinkedIn", icon: Linkedin },
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    href="#"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-10 h-10 bg-gradient-to-r from-blue-500/20 to-pink-500/20 rounded-lg flex items-center justify-center border border-pink-500/30 hover:border-pink-500/50 transition-all duration-300"
                  >
                    <social.icon className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

// Footer
function Footer() {
  return (
    <footer className="bg-black border-t border-white/10">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
          <div className="flex items-center space-x-2 mb-4">
          <div className="w-20 h-21 flex items-center justify-center overflow-hidden">
           <img src="/Logo.png" alt="Techvolve Logo" className="w-21 h-21 object-contain" />
           </div>
             </div>
            <p className="text-gray-400 mb-4">
              Transforming businesses through innovative technology solutions and exceptional digital experiences.
            </p>

            <div className="flex space-x-4">
              <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-blue-500 transition-all duration-300">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="https://www.linkedin.com/in/techvolvelimited/" target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-blue-500 transition-all duration-300">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-blue-500 transition-all duration-300">
                <Github className="w-4 h-4" />
              </a>
              <a href="https://instagram.com/yourprofile" target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-blue-500 transition-all duration-300">
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {[
                { label: "Web Development", href: "/services/web-development" },
                { label: "Mobile Apps", href: "/services/mobile-app-development" },
                { label: "AI Solutions", href: "/services/artificial-intelligence" },
                { label: "Digital Marketing", href: "/services/digital-marketing" },
                { label: "Cloud Services", href: "#cloud-services" },
              ].map((service, index) => (
                <li key={index}>
                  <a href={service.href} className="text-gray-400 hover:text-white transition-colors duration-200">
                    {service.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              {[
                { label: "About Us", href: "#about" },
                { label: "Portfolio", href: "#portfolio" },
                { label: "Case Studies", href: "#case-studies" },
                { label: "Careers", href: "#careers" },
                { label: "Blog", href: "#blog" },
              ].map((item, index) => (
                <li key={index}>
                  <a href={item.href} className="text-gray-400 hover:text-white transition-colors duration-200">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-400">
              <li>techvolvelimited@gmail.com</li>
              <li>+92 334-3866287</li>
              <li>
                <b>Pakistan</b>
                <br />
                Office No:01, Plot:1095, Korangi, Karachi
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Techvolve. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
              Terms of Service
            </a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}


// Main App Component
export default function TechCompanyWebsite() {
  useEffect(() => {
    // Smooth scrolling for anchor links
    const handleClick = (e: Event) => {
      const target = e.target as HTMLAnchorElement
      if (target.hash) {
        e.preventDefault()
        const element = document.querySelector(target.hash)
        if (element) {
          element.scrollIntoView({ behavior: "smooth" })
        }
      }
    }

    document.addEventListener("click", handleClick)
    return () => document.removeEventListener("click", handleClick)
  }, [])

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <Header />
      <HeroSection />
      <State />
      <ServicesSection />
      <PortfolioSection />
      <CaseStudiesSection />
      <BlogSection />
      <CareerSection />
      <ContactSection />
      <Footer />
    </div>
  )
}
