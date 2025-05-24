"use client"

import { useEffect } from "react"
import Image from "next/image"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Badge } from "@/components/ui/badge"

const integrations = [
    { name: "AWS", image: "/aws.svg" },
    { name: "Google Cloud", image: "/google-cloud.svg" },
    { name: "Azure", image: "/azure.svg" },
    { name: "Snowflake", image: "/snowflake.svg" },
    { name: "Databricks", image: "/databricks.svg" },
    { name: "MongoDB", image: "/mongodb.svg" },
    { name: "PostgreSQL", image: "/postgresql.svg" },
    { name: "Kafka", image: "/kafka.svg" },
    { name: "Tableau", image: "/tableau.svg" },
    { name: "Power BI", image: "/powerbi.svg" },
    { name: "Looker", image: "/looker.svg" },
    { name: "Salesforce", image: "/salesforce.svg" },
]

export default function IntegrationsSection() {
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
                staggerChildren: 0.05,
                delayChildren: 0.2,
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
                <motion.div ref={ref} initial="hidden" animate={controls} variants={container} className="text-center mb-16">
                    <motion.div variants={item}>
                        <Badge variant="secondary" className="mb-4">
                            Ecosystem
                        </Badge>
                    </motion.div>
                    <motion.h2 variants={item} className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
                        Connect with your favorite tools
                    </motion.h2>
                    <motion.p variants={item} className="text-xl text-gray-600 max-w-3xl mx-auto">
                        OneHub integrates seamlessly with your existing data stack. Import data from any source and export insights
                        to any destination.
                    </motion.p>
                </motion.div>

                <motion.div
                    ref={ref}
                    initial="hidden"
                    animate={controls}
                    variants={container}
                    className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8"
                >
                    {integrations.map((integration) => (
                        <motion.div
                            key={integration.name}
                            variants={item}
                            whileHover={{ y: -5, scale: 1.05 }}
                            className="flex flex-col items-center"
                        >
                            <div className="bg-gray-50 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 w-full aspect-square flex items-center justify-center">
                                <Image
                                    src={integration.image}
                                    alt={integration.name}
                                    width={80}
                                    height={80}
                                    className="max-w-[80%] max-h-[80%] object-contain"
                                />
                            </div>
                            <span className="mt-3 text-sm font-medium text-gray-700">{integration.name}</span>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}
