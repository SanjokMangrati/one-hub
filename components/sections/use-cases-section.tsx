"use client"

import { useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Users, Shield, Globe, BarChart3, Zap, Database } from "lucide-react"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"

const useCases = [
    {
        icon: Users,
        title: "Customer 360",
        description: "Create unified customer profiles with real-time behavioral data and predictive insights.",
    },
    {
        icon: Shield,
        title: "Fraud Detection",
        description: "Detect and prevent fraud in real-time with ML-powered anomaly detection.",
    },
    {
        icon: Globe,
        title: "IoT Analytics",
        description: "Process and analyze sensor data from millions of connected devices.",
    },
    {
        icon: BarChart3,
        title: "Business Intelligence",
        description: "Build interactive dashboards and reports with live data updates.",
    },
    {
        icon: Zap,
        title: "Real-time Personalization",
        description: "Deliver personalized experiences with millisecond decision making.",
    },
    {
        icon: Database,
        title: "Data Warehousing",
        description: "Modern cloud data warehouse with unlimited scale and performance.",
    },
]

export default function UseCasesSection() {
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

    return (
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4 lg:px-6">
                <motion.div ref={ref} initial="hidden" animate={controls} variants={container} className="text-center mb-16">
                    <motion.h2 variants={item} className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
                        Built for every use case
                    </motion.h2>
                    <motion.p variants={item} className="text-xl text-gray-600 max-w-3xl mx-auto">
                        From real-time personalization to fraud detection, OneHub powers critical applications across industries.
                    </motion.p>
                </motion.div>

                <motion.div
                    ref={ref}
                    initial="hidden"
                    animate={controls}
                    variants={container}
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {useCases.map((useCase, index) => (
                        <motion.div key={index} variants={item}>
                            <motion.div whileHover={{ y: -5 }} transition={{ duration: 0.3 }}>
                                <Card className="border-0 shadow-md hover:shadow-lg transition-all duration-300 bg-white h-full">
                                    <CardContent className="p-6">
                                        <useCase.icon className="h-8 w-8 text-purple-600 mb-4" />
                                        <h3 className="text-lg font-bold text-gray-900 mb-3">{useCase.title}</h3>
                                        <p className="text-gray-600">{useCase.description}</p>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}
