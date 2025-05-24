"use client"

import { useEffect } from "react"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
    {
        question: "How does OneHub compare to traditional data warehouses?",
        answer:
            "OneHub offers real-time processing capabilities, automatic scaling, and a serverless architecture that traditional data warehouses lack. This means you get faster insights, lower costs, and zero infrastructure management overhead.",
    },
    {
        question: "Can I connect OneHub to my existing data sources?",
        answer:
            "Yes, OneHub integrates with virtually any data source through our extensive library of pre-built connectors. We support databases, SaaS applications, streaming platforms, file storage systems, and custom APIs.",
    },
    {
        question: "What kind of performance can I expect?",
        answer:
            "OneHub delivers sub-second query response times even on petabyte-scale datasets. Our distributed architecture and intelligent caching ensure consistent performance regardless of data volume or query complexity.",
    },
    {
        question: "Is OneHub compliant with data privacy regulations?",
        answer:
            "Yes, OneHub is compliant with GDPR, CCPA, HIPAA, and other major data privacy regulations. We provide comprehensive tools for data governance, access control, and audit logging to help you maintain compliance.",
    },
    {
        question: "How does pricing work?",
        answer:
            "OneHub offers transparent, consumption-based pricing. You pay only for the resources you use, with no upfront costs or long-term commitments. Our pricing scales with your usage, making it cost-effective for businesses of all sizes.",
    },
    {
        question: "How long does it take to get started?",
        answer:
            "Most customers are up and running within hours. Our guided onboarding process and extensive documentation make it easy to connect your data sources, set up your first pipelines, and start generating insights right away.",
    },
]

export default function FaqSection() {
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
                    <motion.div variants={item}>
                        <Badge variant="secondary" className="mb-4">
                            FAQ
                        </Badge>
                    </motion.div>
                    <motion.h2 variants={item} className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
                        Frequently asked questions
                    </motion.h2>
                    <motion.p variants={item} className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Everything you need to know about OneHub. Can't find the answer you're looking for? Contact our support
                        team.
                    </motion.p>
                </motion.div>

                <motion.div ref={ref} initial="hidden" animate={controls} variants={container} className="max-w-3xl mx-auto">
                    <Accordion type="single" collapsible className="space-y-4">
                        {faqs.map((faq, index) => (
                            <motion.div key={index} variants={item}>
                                <AccordionItem value={`item-${index}`} className="border rounded-lg bg-white shadow-sm">
                                    <AccordionTrigger className="px-6 py-4 text-left font-medium text-gray-900 hover:text-purple-600">
                                        {faq.question}
                                    </AccordionTrigger>
                                    <AccordionContent className="px-6 pb-4 pt-0 text-gray-600">{faq.answer}</AccordionContent>
                                </AccordionItem>
                            </motion.div>
                        ))}
                    </Accordion>
                </motion.div>
            </div>
        </section>
    )
}
