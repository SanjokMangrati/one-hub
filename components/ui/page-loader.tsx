"use client"

import { motion } from "framer-motion"

export default function PageLoader() {
    return (
        <div className="flex items-center justify-center min-h-[60vh]">
            <motion.div
                className="h-16 w-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center"
                animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, 180, 360],
                }}
                transition={{
                    duration: 2,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                }}
            >
                <span className="text-white font-bold text-lg">OH</span>
            </motion.div>
        </div>
    )
}
