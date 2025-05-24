"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { Star } from "lucide-react"
import { motion, useAnimation, AnimatePresence } from "framer-motion"
import { useInView } from "react-intersection-observer"

const testimonials = [
    {
        quote:
            "OneHub transformed how we handle data. We went from hours to seconds for complex analytics, and our team can now focus on insights instead of infrastructure.",
        author: "Sarah Chen",
        title: "VP of Data, TechCorp",
        image: "/sarah.jpg",
    },
    {
        quote:
            "The real-time capabilities of OneHub have revolutionized our customer experience. We can now personalize interactions on the fly based on the latest data.",
        author: "Michael Rodriguez",
        title: "CTO, RetailGiant",
        image: "/michael.jpg",
    },
    {
        quote:
            "Moving to OneHub cut our data infrastructure costs by 60% while improving performance. The serverless architecture means we don't worry about scaling anymore.",
        author: "Priya Sharma",
        title: "Head of Analytics, FinanceHub",
        image: "/priya.jpg",
    },
]

export default function TestimonialSection() {
    const [current, setCurrent] = useState(0)
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

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
        }, 8000)
        return () => clearInterval(interval)
    }, [])

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
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4 lg:px-6">
                <motion.div
                    ref={ref}
                    initial="hidden"
                    animate={controls}
                    variants={container}
                    className="max-w-4xl mx-auto text-center"
                >
                    <motion.div variants={item} className="flex justify-center mb-6">
                        {[1, 2, 3, 4, 5].map((star) => (
                            <Star key={star} className="h-6 w-6 text-yellow-400 fill-current" />
                        ))}
                    </motion.div>

                    <div className="relative h-[200px] md:h-[150px]">
                        <AnimatePresence mode="wait">
                            <motion.blockquote
                                key={current}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.5 }}
                                className="text-2xl lg:text-3xl font-medium text-gray-900 mb-8 absolute inset-0"
                            >
                                "{testimonials[current].quote}"
                            </motion.blockquote>
                        </AnimatePresence>
                    </div>

                    <AnimatePresence mode="wait">
                        <motion.div
                            key={current}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.5 }}
                            className="flex items-center justify-center space-x-4 mt-8"
                        >
                            <Image
                                src={testimonials[current].image}
                                alt={testimonials[current].author}
                                width={60}
                                height={60}
                                className="rounded-full"
                            />
                            <div className="text-left">
                                <div className="font-bold text-gray-900">{testimonials[current].author}</div>
                                <div className="text-gray-600">{testimonials[current].title}</div>
                            </div>
                        </motion.div>
                    </AnimatePresence>

                    <motion.div variants={item} className="flex justify-center mt-8 space-x-2">
                        {testimonials.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrent(index)}
                                className={`h-2 w-2 rounded-full transition-all duration-300 ${current === index ? "bg-purple-600 w-6" : "bg-gray-300"
                                    }`}
                                aria-label={`Go to testimonial ${index + 1}`}
                            />
                        ))}
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}
