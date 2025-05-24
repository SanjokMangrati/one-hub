"use client"

import { useEffect } from "react"
import { CheckCircle, XCircle } from "lucide-react"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Badge } from "@/components/ui/badge"

const comparisonData = [
    {
        feature: "Real-time data processing",
        onehub: true,
        traditional: false,
    },
    {
        feature: "Sub-second query response",
        onehub: true,
        traditional: false,
    },
    {
        feature: "Serverless architecture",
        onehub: true,
        traditional: false,
    },
    {
        feature: "Automatic scaling",
        onehub: true,
        traditional: false,
    },
    {
        feature: "Built-in AI capabilities",
        onehub: true,
        traditional: false,
    },
    {
        feature: "Pay-as-you-go pricing",
        onehub: true,
        traditional: false,
    },
    {
        feature: "Zero maintenance",
        onehub: true,
        traditional: false,
    },
    {
        feature: "Global data distribution",
        onehub: true,
        traditional: true,
    },
]

export default function ComparisonSection() {
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
        <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
            <div className="container mx-auto px-4 lg:px-6">
                <motion.div ref={ref} initial="hidden" animate={controls} variants={container} className="text-center mb-16">
                    <motion.div variants={item}>
                        <Badge variant="secondary" className="mb-4">
                            Comparison
                        </Badge>
                    </motion.div>
                    <motion.h2 variants={item} className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
                        Why choose OneHub?
                    </motion.h2>
                    <motion.p variants={item} className="text-xl text-gray-600 max-w-3xl mx-auto">
                        See how OneHub compares to traditional data solutions and why leading companies are making the switch.
                    </motion.p>
                </motion.div>

                <motion.div
                    ref={ref}
                    initial="hidden"
                    animate={controls}
                    variants={container}
                    className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden"
                >
                    <div className="grid grid-cols-3 bg-gray-100 p-4">
                        <div className="col-span-1 text-left font-semibold text-gray-700">Feature</div>
                        <div className="text-center font-semibold text-purple-700">OneHub</div>
                        <div className="text-center font-semibold text-gray-700">Traditional Solutions</div>
                    </div>
                    {comparisonData.map((item, index) => (
                        <motion.div
                            key={index}
                            variants={item}
                            className={`grid grid-cols-3 p-4 ${index % 2 === 0 ? "bg-white" : "bg-gray-50"}`}
                        >
                            <div className="col-span-1 text-left text-gray-700">{item.feature}</div>
                            <div className="text-center">
                                {item.onehub ? (
                                    <CheckCircle className="h-5 w-5 text-green-500 mx-auto" />
                                ) : (
                                    <XCircle className="h-5 w-5 text-red-500 mx-auto" />
                                )}
                            </div>
                            <div className="text-center">
                                {item.traditional ? (
                                    <CheckCircle className="h-5 w-5 text-green-500 mx-auto" />
                                ) : (
                                    <XCircle className="h-5 w-5 text-red-500 mx-auto" />
                                )}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}
