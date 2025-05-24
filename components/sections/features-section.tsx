"use client"

import { useEffect } from "react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Database, BarChart3, Shield, Zap, Cloud, Lock } from "lucide-react"
import Link from "next/link"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"

const features = [
    {
        icon: Database,
        title: "Real-time Data Processing",
        description:
            "Process millions of events per second with our high-performance streaming engine. Get insights as they happen, not hours later.",
        gradient: "from-purple-500 to-blue-500",
    },
    {
        icon: BarChart3,
        title: "AI-Powered Analytics",
        description:
            "Leverage machine learning to automatically discover patterns, predict trends, and generate actionable insights from your data.",
        gradient: "from-green-500 to-teal-500",
    },
    {
        icon: Shield,
        title: "Enterprise Security",
        description:
            "Bank-grade security with end-to-end encryption, role-based access control, and compliance with SOC 2, GDPR, and HIPAA.",
        gradient: "from-orange-500 to-red-500",
    },
    {
        icon: Zap,
        title: "Lightning Fast Queries",
        description:
            "Our distributed query engine delivers sub-second response times even on petabyte-scale datasets with complex joins.",
        gradient: "from-blue-500 to-cyan-500",
    },
    {
        icon: Cloud,
        title: "Serverless Architecture",
        description:
            "Scale automatically with zero infrastructure management. Pay only for what you use with no upfront costs or commitments.",
        gradient: "from-indigo-500 to-purple-500",
    },
    {
        icon: Lock,
        title: "Data Governance",
        description:
            "Comprehensive data governance with lineage tracking, access controls, and audit logs to ensure compliance and security.",
        gradient: "from-pink-500 to-rose-500",
    },
]

export default function FeaturesSection() {
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
        <section className="py-20 lg:py-32">
            <div className="container mx-auto px-4 lg:px-6">
                <motion.div ref={ref} initial="hidden" animate={controls} variants={container} className="text-center mb-16">
                    <motion.div variants={item}>
                        <Badge variant="secondary" className="mb-4">
                            Platform Features
                        </Badge>
                    </motion.div>
                    <motion.h2 variants={item} className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
                        Everything you need to succeed with data
                    </motion.h2>
                    <motion.p variants={item} className="text-xl text-gray-600 max-w-3xl mx-auto">
                        OneHub provides a complete suite of tools for data ingestion, processing, analysis, and visualization. All
                        in one unified platform.
                    </motion.p>
                </motion.div>

                <motion.div
                    ref={ref}
                    initial="hidden"
                    animate={controls}
                    variants={container}
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {features.map((feature, index) => (
                        <motion.div key={feature.title} variants={item}>
                            <motion.div whileHover={{ y: -5 }} transition={{ duration: 0.3 }}>
                                <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                                    <CardContent className="p-8">
                                        <div
                                            className={`h-12 w-12 bg-gradient-to-r ${feature.gradient} rounded-lg flex items-center justify-center mb-6`}
                                        >
                                            <feature.icon className="h-6 w-6 text-white" />
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                                        <p className="text-gray-600 mb-6">{feature.description}</p>
                                        <Link
                                            href="#"
                                            className="text-purple-600 font-medium hover:text-purple-700 inline-flex items-center group"
                                        >
                                            Learn more{" "}
                                            <ArrowRight className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                                        </Link>
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
