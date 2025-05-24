"use client"

import { useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle } from "lucide-react"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { useState } from "react"

const pricingPlans = [
    {
        name: "Starter",
        description: "Perfect for small teams and startups",
        monthlyPrice: 49,
        annualPrice: 39,
        features: [
            "Up to 100GB of data storage",
            "5 million events per month",
            "3 team members",
            "Basic analytics",
            "7-day data retention",
            "Email support",
        ],
        cta: "Start Free Trial",
        popular: false,
    },
    {
        name: "Professional",
        description: "For growing teams with advanced needs",
        monthlyPrice: 99,
        annualPrice: 79,
        features: [
            "Up to 1TB of data storage",
            "50 million events per month",
            "10 team members",
            "Advanced analytics",
            "30-day data retention",
            "Priority support",
            "Custom dashboards",
            "API access",
        ],
        cta: "Start Free Trial",
        popular: true,
    },
    {
        name: "Enterprise",
        description: "For organizations with complex requirements",
        monthlyPrice: 299,
        annualPrice: 249,
        features: [
            "Unlimited data storage",
            "Unlimited events",
            "Unlimited team members",
            "AI-powered analytics",
            "Unlimited data retention",
            "24/7 dedicated support",
            "Custom integrations",
            "SLA guarantees",
            "Dedicated account manager",
        ],
        cta: "Contact Sales",
        popular: false,
    },
]

export default function PricingSection() {
    const [annual, setAnnual] = useState(false)
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
        <section id="pricing" className="py-20 bg-gray-50">
            <div className="container mx-auto px-4 lg:px-6">
                <motion.div ref={ref} initial="hidden" animate={controls} variants={container} className="text-center mb-16">
                    <motion.div variants={item}>
                        <Badge variant="secondary" className="mb-4">
                            Pricing
                        </Badge>
                    </motion.div>
                    <motion.h2 variants={item} className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
                        Simple, transparent pricing
                    </motion.h2>
                    <motion.p variants={item} className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                        Choose the plan that's right for your business. All plans include a 30-day free trial.
                    </motion.p>

                    <motion.div variants={item} className="flex items-center justify-center mb-12">
                        <Label htmlFor="billing-toggle" className={`mr-2 ${!annual ? "font-medium" : ""}`}>
                            Monthly
                        </Label>
                        <Switch id="billing-toggle" checked={annual} onCheckedChange={setAnnual} />
                        <Label htmlFor="billing-toggle" className={`ml-2 ${annual ? "font-medium" : ""}`}>
                            Annually <span className="text-green-600 text-sm font-medium">Save 20%</span>
                        </Label>
                    </motion.div>
                </motion.div>

                <motion.div
                    ref={ref}
                    initial="hidden"
                    animate={controls}
                    variants={container}
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {pricingPlans.map((plan) => (
                        <motion.div key={plan.name} variants={item}>
                            <motion.div whileHover={{ y: -10 }} transition={{ duration: 0.3 }}>
                                <Card
                                    className={`border h-full flex flex-col ${plan.popular ? "border-purple-200 shadow-lg shadow-purple-100" : "border-gray-200 shadow-md"
                                        }`}
                                >
                                    <CardHeader className="pb-0">
                                        {plan.popular && (
                                            <Badge className="bg-purple-100 text-purple-700 hover:bg-purple-200 self-start mb-2">
                                                Most Popular
                                            </Badge>
                                        )}
                                        <h3 className="text-2xl font-bold text-gray-900">{plan.name}</h3>
                                        <p className="text-gray-600">{plan.description}</p>
                                    </CardHeader>
                                    <CardContent className="pt-6 flex-grow">
                                        <div className="mb-6">
                                            <span className="text-4xl font-bold text-gray-900">
                                                ${annual ? plan.annualPrice : plan.monthlyPrice}
                                            </span>
                                            <span className="text-gray-600 ml-1">/month</span>
                                            {annual && <p className="text-sm text-gray-500">Billed annually</p>}
                                        </div>
                                        <ul className="space-y-3">
                                            {plan.features.map((feature, index) => (
                                                <li key={index} className="flex items-start">
                                                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                                                    <span className="text-gray-700">{feature}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </CardContent>
                                    <CardFooter>
                                        <Button
                                            className={`w-full ${plan.popular
                                                ? "bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
                                                : ""
                                                }`}
                                            variant={plan.popular ? "default" : "outline"}
                                        >
                                            {plan.cta}
                                        </Button>
                                    </CardFooter>
                                </Card>
                            </motion.div>
                        </motion.div>
                    ))}
                </motion.div>

                <motion.div variants={item} className="text-center mt-12">
                    <p className="text-gray-600">
                        Need a custom plan?{" "}
                        <a href="#contact" className="text-purple-600 font-medium hover:underline">
                            Contact us
                        </a>{" "}
                        for enterprise pricing.
                    </p>
                </motion.div>
            </div>
        </section>
    )
}
