'use client'

import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Users, Briefcase, Heart, ArrowRight } from 'lucide-react'
import Link from 'next/link'

const teamMembers = [
  { name: 'John Doe', role: 'CEO & Founder', image: '/placeholder.svg?height=200&width=200' },
  { name: 'Jane Smith', role: 'CTO', image: '/placeholder.svg?height=200&width=200' },
  { name: 'Mike Johnson', role: 'Lead Designer', image: '/placeholder.svg?height=200&width=200' },
  { name: 'Sarah Brown', role: 'Marketing Director', image: '/placeholder.svg?height=200&width=200' },
]

const coreValues = [
  { icon: Users, title: 'Customer First', description: 'We prioritize our customers\' needs above all else.' },
  { icon: Briefcase, title: 'Innovation', description: 'We constantly push the boundaries of what\'s possible.' },
  { icon: Heart, title: 'Passion', description: 'We are deeply committed to our work and our mission.' },
]

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 to-indigo-200">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-4 py-16"
      >
        {/* Hero Section */}
        <section className="text-center mb-20">
          <motion.h1
            initial={{ y: -20 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            About TechVerse
          </motion.h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We are a team of passionate individuals dedicated to creating innovative solutions that make a difference in people's lives.
          </p>
        </section>

        {/* Stats Section */}
        <motion.section
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20"
        >
          {[
            { label: 'Years of Experience', value: '10+' },
            { label: 'Projects Completed', value: '500+' },
            { label: 'Happy Clients', value: '1000+' },
          ].map((stat, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6 text-center">
              <h2 className="text-3xl font-bold text-blue-600 mb-2">{stat.value}</h2>
              <p className="text-gray-600">{stat.label}</p>
            </div>
          ))}
        </motion.section>

        {/* Team Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-10">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <img src={member.image} alt={member.name} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h3 className="font-semibold text-lg">{member.name}</h3>
                  <p className="text-gray-600">{member.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Core Values Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-10">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {coreValues.map((value, index) => (
              <motion.div
                key={index}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-md p-6"
              >
                <value.icon className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold mb-4">Ready to Work With Us?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Let's create something amazing together.
          </p>
          <Button size="lg">
            <Link href='/contact' className='flex'>
              Get in Touch <ArrowRight className="ml-2" />
            </Link>
          </Button>
        </motion.section>
      </motion.div>
    </div>
  )
}