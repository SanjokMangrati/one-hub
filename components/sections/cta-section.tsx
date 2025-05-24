"use client"

import { useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"

export default function CtaSection() {
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
        <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600 relative overflow-hidden">
            {/* Animated background elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
                <div className="absolute top-20 left-10 w-64 h-64 bg-white rounded-full mix-blend-overlay filter blur-3xl opacity-10 animate-blob"></div>
                <div className="absolute top-40 right-10 w-72 h-72 bg-white rounded-full mix-blend-overlay filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
                <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-white rounded-full mix-blend-overlay filter blur-3xl opacity-10 animate-blob animation-delay-4000"></div>
            </div>

            <div className="container mx-auto px-4 lg:px-6 text-center relative z-10">
                <motion.div
                    ref={ref}
                    initial="hidden"
                    animate={controls}
                    variants={container}
                    className="max-w-3xl mx-auto space-y-8"
                >
                    <motion.h2 variants={item} className="text-3xl lg:text-5xl font-bold text-white">
                        Ready to unlock your data's potential?
                    </motion.h2>
                    <motion.p variants={item} className="text-xl text-purple-100">
                        Join thousands of companies already using OneHub to power their data-driven decisions.
                    </motion.p>
                    <motion.div variants={item} className="flex flex-col sm:flex-row gap-4 justify-center">
                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                            <Button
                                size="lg"
                                className="bg-white text-purple-600 hover:bg-gray-100 shadow-lg hover:shadow-xl transition-all duration-300"
                            >
                                Start Free Trial
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                        </motion.div>
                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                            <Button
                                size="lg"
                                variant="outline"
                                className="border-white text-black hover:bg-white hover:text-purple-600 shadow-lg hover:shadow-xl transition-all duration-300"
                            >
                                Contact Sales
                            </Button>
                        </motion.div>
                    </motion.div>
                    <motion.p variants={item} className="text-sm text-purple-200">
                        30-day free trial • No credit card required • Setup in minutes
                    </motion.p>
                </motion.div>
            </div>
        </section>
    )
}
