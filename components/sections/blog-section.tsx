"use client"

import { useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"

const blogPosts = [
    {
        title: "10 Ways to Optimize Your Data Pipeline for Performance",
        excerpt: "Learn the best practices for building high-performance data pipelines that scale with your business.",
        category: "Engineering",
        date: "May 15, 2024",
        image: "/pipeline.jpg",
    },
    {
        title: "The Future of AI in Data Analytics",
        excerpt:
            "Discover how artificial intelligence is transforming the way businesses analyze and interpret their data.",
        category: "AI & Machine Learning",
        date: "May 10, 2024",
        image: "/analytics.jpg",
    },
    {
        title: "Real-time Analytics: From Batch to Streaming",
        excerpt:
            "Why real-time analytics matters and how to transition your organization from batch processing to streaming.",
        category: "Analytics",
        date: "May 5, 2024",
        image: "/streaming.jpg",
    },
]

export default function BlogSection() {
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
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4 lg:px-6">
                <motion.div
                    ref={ref}
                    initial="hidden"
                    animate={controls}
                    variants={container}
                    className="flex flex-col md:flex-row md:items-end md:justify-between mb-12"
                >
                    <div>
                        <motion.div variants={item}>
                            <Badge variant="secondary" className="mb-4">
                                Resources
                            </Badge>
                        </motion.div>
                        <motion.h2 variants={item} className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                            Latest from our blog
                        </motion.h2>
                        <motion.p variants={item} className="text-xl text-gray-600 max-w-2xl">
                            Insights, tutorials, and news about data analytics, AI, and more.
                        </motion.p>
                    </div>
                    <motion.div variants={item} className="mt-6 md:mt-0">
                        <Button variant="outline" className="group">
                            View all posts{" "}
                            <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                        </Button>
                    </motion.div>
                </motion.div>

                <motion.div
                    ref={ref}
                    initial="hidden"
                    animate={controls}
                    variants={container}
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {blogPosts.map((post, index) => (
                        <motion.div key={index} variants={item}>
                            <motion.div whileHover={{ y: -5 }} transition={{ duration: 0.3 }}>
                                <Card className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                                    <div className="relative h-48 w-full">
                                        <Image
                                            src={post.image}
                                            alt={post.title}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    <CardContent className="p-6 flex-grow flex flex-col">
                                        <div className="flex items-center mb-3">
                                            <Badge variant="outline" className="text-xs font-medium text-purple-700 mr-2">
                                                {post.category}
                                            </Badge>
                                            <span className="text-xs text-gray-500">{post.date}</span>
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">{post.title}</h3>
                                        <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                                        <Link
                                            href="#"
                                            className="text-purple-600 font-medium hover:text-purple-700 inline-flex items-center group mt-auto"
                                        >
                                            Read more{" "}
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
