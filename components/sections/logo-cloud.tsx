"use client"

import { useEffect } from "react"
import Image from "next/image"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"

const logos = [
    { name: "Microsoft", image: "/microsoft.svg" },
    { name: "Paypal", image: "/paypal.svg" },
    { name: "Google", image: "/google.svg" },
    { name: "IBM", image: "/ibm.svg" },
    { name: "OpenAI", image: "/openai.svg" },
    { name: "Netflix", image: "/netflix.svg" },
]

export default function LogoCloud() {
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
        <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4 lg:px-6">
                <motion.div ref={ref} initial="hidden" animate={controls} variants={container} className="text-center mb-12">
                    <motion.p variants={item} className="text-sm font-medium text-gray-600 uppercase tracking-wide">
                        Trusted by industry leaders
                    </motion.p>
                </motion.div>
                <motion.div
                    ref={ref}
                    initial="hidden"
                    animate={controls}
                    variants={container}
                    className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center"
                >
                    {logos.map((logo, i) => (
                        <motion.div key={logo.name} variants={item} className="flex justify-center">
                            <div className="relative h-8 w-32">
                                <Image
                                    src={logo.image}
                                    alt={logo.name}
                                    width={120}
                                    height={40}
                                    className="h-8 w-auto grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100"
                                />
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}
