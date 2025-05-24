import Link from "next/link"
import { Facebook, Twitter, Linkedin, Github, Instagram } from "lucide-react"

const footerLinks = [
    {
        title: "Platform",
        links: [
            { label: "Features", href: "#features" },
            { label: "Integrations", href: "#integrations" },
            { label: "API", href: "#api" },
            { label: "Security", href: "#security" },
            { label: "Compliance", href: "#compliance" },
        ],
    },
    {
        title: "Solutions",
        links: [
            { label: "Analytics", href: "#analytics" },
            { label: "Real-time", href: "#real-time" },
            { label: "Machine Learning", href: "#machine-learning" },
            { label: "Data Warehouse", href: "#data-warehouse" },
            { label: "IoT", href: "#iot" },
        ],
    },
    {
        title: "Resources",
        links: [
            { label: "Documentation", href: "#documentation" },
            { label: "Blog", href: "#blog" },
            { label: "Whitepapers", href: "#whitepapers" },
            { label: "Case Studies", href: "#case-studies" },
            { label: "Webinars", href: "#webinars" },
        ],
    },
    {
        title: "Company",
        links: [
            { label: "About", href: "#about" },
            { label: "Careers", href: "#careers" },
            { label: "Contact", href: "#contact" },
            { label: "Partners", href: "#partners" },
            { label: "Press", href: "#press" },
        ],
    },
]

const socialLinks = [
    { icon: Twitter, href: "#twitter", label: "Twitter" },
    { icon: Linkedin, href: "#linkedin", label: "LinkedIn" },
    { icon: Github, href: "#github", label: "GitHub" },
    { icon: Facebook, href: "#facebook", label: "Facebook" },
    { icon: Instagram, href: "#instagram", label: "Instagram" },
]

export default function SiteFooter() {
    return (
        <footer className="bg-gray-900 text-white">
            <div className="container mx-auto px-4 lg:px-6 py-16">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
                    <div className="col-span-2">
                        <div className="flex items-center space-x-2 mb-6">
                            <div className="h-8 w-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
                                <span className="text-white font-bold text-sm">OH</span>
                            </div>
                            <span className="text-xl font-bold">OneHub</span>
                        </div>
                        <p className="text-gray-400 mb-6 max-w-md">
                            The unified platform for modern data. Build faster, scale smarter, and unlock the full potential of your
                            data with OneHub.
                        </p>
                        <div className="flex space-x-4">
                            {socialLinks.map((social) => (
                                <Link
                                    key={social.label}
                                    href={social.href}
                                    className="text-gray-400 hover:text-white transition-colors duration-200"
                                    aria-label={social.label}
                                >
                                    <social.icon className="h-5 w-5" />
                                </Link>
                            ))}
                        </div>
                    </div>

                    {footerLinks.map((column) => (
                        <div key={column.title}>
                            <h3 className="font-bold mb-4 text-white">{column.title}</h3>
                            <ul className="space-y-2 text-gray-400">
                                {column.links.map((link) => (
                                    <li key={link.label}>
                                        <Link href={link.href} className="hover:text-white transition-colors duration-200">
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-gray-400 text-sm">© 2024 OneHub. All rights reserved.</p>
                    <div className="flex flex-wrap space-x-6 mt-4 md:mt-0">
                        <Link href="#privacy" className="text-gray-400 hover:text-white text-sm">
                            Privacy Policy
                        </Link>
                        <Link href="#terms" className="text-gray-400 hover:text-white text-sm">
                            Terms of Service
                        </Link>
                        <Link href="#cookies" className="text-gray-400 hover:text-white text-sm">
                            Cookie Policy
                        </Link>
                        <Link href="#gdpr" className="text-gray-400 hover:text-white text-sm">
                            GDPR
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}
