import React from 'react'
import Link from 'next/link'
import { Facebook, Twitter, Instagram, Linkedin, Mail } from 'lucide-react'
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';


const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-300">
            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* About Column */}
                    <div>
                        <h2 className="text-2xl font-bold text-white mb-4">TechVerse</h2>
                        <p className="mb-4">
                            Bringing you the latest in technology news, insights, and innovations. Stay informed, stay ahead.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="hover:text-white transition-colors">
                                <Facebook className="h-6 w-6" />
                                <span className="sr-only">Facebook</span>
                            </a>
                            <a href="#" className="hover:text-white transition-colors">
                                <Twitter className="h-6 w-6" />
                                <span className="sr-only">Twitter</span>
                            </a>
                            <a href="#" className="hover:text-white transition-colors">
                                <Instagram className="h-6 w-6" />
                                <span className="sr-only">Instagram</span>
                            </a>
                            <a href="#" className="hover:text-white transition-colors">
                                <Linkedin className="h-6 w-6" />
                                <span className="sr-only">LinkedIn</span>
                            </a>
                        </div>
                    </div>

                    {/* Quick Links Column */}
                    <div>
                        <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/about" className="hover:text-white transition-colors">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="hover:text-white transition-colors">
                                    Contact
                                </Link>
                            </li>
                            <li>
                                <Link href="/privacy-policy" className="hover:text-white transition-colors">
                                    Privacy Policy
                                </Link>
                            </li>
                            <li>
                                <Link href="/terms-of-service" className="hover:text-white transition-colors">
                                    Terms of Service
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Categories Column */}
                    <div>
                        <h3 className="text-lg font-semibold text-white mb-4">Categories</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/category/technology" className="hover:text-white transition-colors">
                                    Technology
                                </Link>
                            </li>
                            <li>
                                <Link href="/category/science" className="hover:text-white transition-colors">
                                    Science
                                </Link>
                            </li>
                            <li>
                                <Link href="/category/innovation" className="hover:text-white transition-colors">
                                    Innovation
                                </Link>
                            </li>
                            <li>
                                <Link href="/category/startups" className="hover:text-white transition-colors">
                                    Startups
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Newsletter Column */}
                    <div>
                        <h3 className="text-lg font-semibold text-white mb-4">Subscribe to Our Newsletter</h3>
                        <p className="mb-4">Stay up-to-date with our latest articles and tech insights.</p>
                        <form className="space-y-2">
                            <Input
                                type="email"
                                placeholder="Enter your email"
                                className="w-full bg-gray-800 text-white border-gray-700 focus:border-blue-500"
                            />
                            <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                                Subscribe
                                <Mail className="ml-2 h-4 w-4" />
                            </Button>
                        </form>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-12 pt-8 border-t border-gray-800 text-sm text-center space-y-2">
                    <p>&copy; {new Date().getFullYear()} TechVerse. All rights reserved.</p>
                    <p>Made with ❤️ by <span className="font-semibold">NAVJYOT SINGH PULAHA</span></p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
