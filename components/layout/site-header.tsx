"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"

const navItems = [
    {
        title: "Platform",
        href: "#platform",
        children: [
            { title: "Overview", href: "#overview" },
            { title: "Features", href: "#features" },
            { title: "Security", href: "#security" },
            { title: "Performance", href: "#performance" },
        ],
    },
    {
        title: "Solutions",
        href: "#solutions",
        children: [
            { title: "Financial Services", href: "#financial-services" },
            { title: "Healthcare", href: "#healthcare" },
            { title: "Retail", href: "#retail" },
            { title: "Technology", href: "#technology" },
        ],
    },
    {
        title: "Developers",
        href: "#developers",
        children: [
            { title: "Documentation", href: "#documentation" },
            { title: "API Reference", href: "#api" },
            { title: "SDKs", href: "#sdks" },
            { title: "Community", href: "#community" },
        ],
    },
    {
        title: "Resources",
        href: "#resources",
        children: [
            { title: "Blog", href: "#blog" },
            { title: "Whitepapers", href: "#whitepapers" },
            { title: "Case Studies", href: "#case-studies" },
            { title: "Webinars", href: "#webinars" },
        ],
    },
    { title: "Pricing", href: "#pricing" },
    { title: "Company", href: "#company" },
]

export default function SiteHeader() {
    const [isScrolled, setIsScrolled] = useState(false)
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10)
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                isScrolled ? "bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm py-2" : "bg-transparent py-4",
            )}
        >
            <div className="container mx-auto px-4 lg:px-6">
                <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-8">
                        <Link href="/" className="flex items-center space-x-2">
                            <motion.div
                                initial={{ scale: 0.8, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ duration: 0.5 }}
                                className="h-8 w-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center"
                            >
                                <span className="text-white font-bold text-sm">OH</span>
                            </motion.div>
                            <motion.span
                                initial={{ x: -10, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ duration: 0.5, delay: 0.1 }}
                                className="text-xl font-bold text-gray-900"
                            >
                                OneHub
                            </motion.span>
                        </Link>
                        <nav className="hidden lg:flex items-center space-x-6">
                            {navItems.map((item, index) => (
                                <div
                                    key={item.title}
                                    className="relative"
                                    onMouseEnter={() => setActiveDropdown(item.title)}
                                    onMouseLeave={() => setActiveDropdown(null)}
                                >
                                    <Link
                                        href={item.href}
                                        className="text-sm font-medium text-gray-700 hover:text-gray-900 py-2 inline-flex items-center"
                                    >
                                        {item.title}
                                        {item.children && (
                                            <svg className="ml-1 h-4 w-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                            </svg>
                                        )}
                                    </Link>
                                    {item.children && (
                                        <AnimatePresence>
                                            {activeDropdown === item.title && (
                                                <motion.div
                                                    initial={{ opacity: 0, y: 10 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    exit={{ opacity: 0, y: 10 }}
                                                    transition={{ duration: 0.2 }}
                                                    className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2 z-10 border border-gray-100"
                                                >
                                                    {item.children.map((child) => (
                                                        <Link
                                                            key={child.title}
                                                            href={child.href}
                                                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                                                        >
                                                            {child.title}
                                                        </Link>
                                                    ))}
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    )}
                                </div>
                            ))}
                        </nav>
                    </div>
                    <div className="flex items-center space-x-4">
                        <Link href="#login" className="hidden lg:inline-flex text-sm font-medium text-gray-700 hover:text-gray-900">
                            Sign In
                        </Link>
                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                            <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 shadow-md hover:shadow-lg transition-all duration-300">
                                Start Free Trial
                            </Button>
                        </motion.div>
                        <Button
                            variant="ghost"
                            size="icon"
                            className="lg:hidden"
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        >
                            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                        </Button>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="lg:hidden bg-white border-t border-gray-200"
                    >
                        <div className="container mx-auto px-4 py-4">
                            <nav className="flex flex-col space-y-4">
                                {navItems.map((item) => (
                                    <div key={item.title} className="py-2">
                                        <Link
                                            href={item.href}
                                            className="text-base font-medium text-gray-900 hover:text-purple-600"
                                            onClick={() => setMobileMenuOpen(false)}
                                        >
                                            {item.title}
                                        </Link>
                                        {item.children && (
                                            <div className="mt-2 ml-4 space-y-2">
                                                {item.children.map((child) => (
                                                    <Link
                                                        key={child.title}
                                                        href={child.href}
                                                        className="block text-sm text-gray-600 hover:text-purple-600"
                                                        onClick={() => setMobileMenuOpen(false)}
                                                    >
                                                        {child.title}
                                                    </Link>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                ))}
                                <div className="pt-4 border-t border-gray-200">
                                    <Link
                                        href="#login"
                                        className="block text-base font-medium text-gray-900 hover:text-purple-600 mb-4"
                                        onClick={() => setMobileMenuOpen(false)}
                                    >
                                        Sign In
                                    </Link>
                                    <Button
                                        className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
                                        onClick={() => setMobileMenuOpen(false)}
                                    >
                                        Start Free Trial
                                    </Button>
                                </div>
                            </nav>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    )
}
