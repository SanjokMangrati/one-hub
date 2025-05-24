"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, CheckCircle, Play, Zap } from "lucide-react"
import Image from "next/image"
import { motion } from "framer-motion"

export default function HeroSection() {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        setIsVisible(true)
    }, [])

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.3,
            },
        },
    }

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    }

    return (
        <section className="relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-purple-50 pt-32 pb-20 lg:pt-40 lg:pb-32">
            <div className="container mx-auto px-4 lg:px-6">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <motion.div
                        variants={container}
                        initial="hidden"
                        animate={isVisible ? "show" : "hidden"}
                        className="space-y-8"
                    >
                        <motion.div variants={item} className="space-y-4">
                            <Badge
                                variant="secondary"
                                className="bg-purple-100 text-purple-700 hover:bg-purple-200 px-3 py-1 text-sm animate-pulse"
                            >
                                <Zap className="h-3 w-3 mr-1" />
                                Now Available: OneHub AI Analytics
                            </Badge>
                            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                                The unified platform for{" "}
                                <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                                    modern data
                                </span>
                            </h1>
                            <p className="text-xl text-gray-600 leading-relaxed">
                                OneHub combines the power of real-time analytics, AI-driven insights, and seamless data integration in
                                one comprehensive platform. Build faster, scale smarter, and unlock the full potential of your data.
                            </p>
                        </motion.div>
                        <motion.div variants={item} className="flex flex-col sm:flex-row gap-4">
                            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                <Button
                                    size="lg"
                                    className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 shadow-md hover:shadow-lg transition-all duration-300"
                                >
                                    Start Free Trial
                                    <ArrowRight className="ml-2 h-4 w-4" />
                                </Button>
                            </motion.div>
                            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                <Button
                                    size="lg"
                                    variant="outline"
                                    className="border-gray-300 hover:border-gray-400 shadow-sm hover:shadow transition-all duration-300"
                                >
                                    <Play className="mr-2 h-4 w-4" />
                                    Watch Demo
                                </Button>
                            </motion.div>
                        </motion.div>
                        <motion.div variants={item} className="flex items-center space-x-6 text-sm text-gray-600">
                            <div className="flex items-center">
                                <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                                Free 30-day trial
                            </div>
                            <div className="flex items-center">
                                <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                                No credit card required
                            </div>
                        </motion.div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        className="relative"
                    >
                        <div className="relative z-10">
                            <Image
                                src="/hero-dashboard.jpg"
                                alt="OneHub Dashboard"
                                width={600}
                                height={500}
                                className="rounded-2xl shadow-2xl"
                            />
                        </div>
                        <motion.div
                            animate={{
                                scale: [1, 1.05, 1],
                                opacity: [0.2, 0.3, 0.2],
                            }}
                            transition={{
                                duration: 5,
                                repeat: Number.POSITIVE_INFINITY,
                                repeatType: "reverse",
                            }}
                            className="absolute inset-0 bg-gradient-to-r from-purple-400 to-blue-400 rounded-2xl blur-3xl opacity-20 transform scale-105"
                        ></motion.div>
                    </motion.div>
                </div>
            </div>

            {/* Animated background elements */}
            <div className="absolute top-20 left-10 w-64 h-64 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
            <div className="absolute top-40 right-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
            <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
        </section>
    )
}
