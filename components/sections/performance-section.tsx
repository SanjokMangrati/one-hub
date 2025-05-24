"use client"

import { useEffect } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { CheckCircle } from "lucide-react"
import Image from "next/image"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"

export default function PerformanceSection() {
    const controls = useAnimation()
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    })

    useEffect(() => {
        if (inView) {
            controls.start("visible")
        }
    }, [controls, inView])

    const container = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.3,
            },
        },
    }

    const item = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5 },
        },
    }

    const imageVariants = {
        hidden: { opacity: 0, x: 50 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.7, ease: "easeOut" },
        },
    }

    return (
        <section className="py-20 lg:py-32 bg-gradient-to-br from-gray-50 to-white">
            <div className="container mx-auto px-4 lg:px-6">
                <motion.div
                    ref={ref}
                    initial="hidden"
                    animate={controls}
                    variants={container}
                    className="grid lg:grid-cols-2 gap-12 items-center"
                >
                    <div className="space-y-6">
                        <motion.div variants={item}>
                            <Badge variant="secondary">Performance</Badge>
                        </motion.div>
                        <motion.h3 variants={item} className="text-3xl lg:text-4xl font-bold text-gray-900">
                            10x faster than traditional solutions
                        </motion.h3>
                        <motion.p variants={item} className="text-lg text-gray-600">
                            Our distributed architecture and intelligent caching deliver unprecedented performance. Query petabytes of
                            data in milliseconds, not minutes.
                        </motion.p>
                        <motion.div variants={container} className="space-y-4">
                            {[
                                "Sub-second query response times",
                                "Automatic scaling and optimization",
                                "99.99% uptime SLA",
                                "Intelligent query caching",
                                "Global data distribution",
                            ].map((feature, index) => (
                                <motion.div key={index} variants={item} className="flex items-center">
                                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                                    <span className="text-gray-700">{feature}</span>
                                </motion.div>
                            ))}
                        </motion.div>
                        <motion.div variants={item} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                            <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 shadow-md hover:shadow-lg transition-all duration-300">
                                View Performance Benchmarks
                            </Button>
                        </motion.div>
                    </div>
                    <motion.div variants={imageVariants} className="relative">
                        <div className="relative z-10 rounded-xl overflow-hidden shadow-2xl">
                            <Image
                                src="/dashboard.jpg"
                                alt="Performance Dashboard"
                                width={500}
                                height={400}
                                className="w-full h-auto"
                            />
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-r from-purple-300 to-blue-300 rounded-xl blur-2xl opacity-30 transform scale-105 -z-10"></div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}
