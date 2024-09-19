"use client"

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';
import { FaCalendar, FaUser, FaCode, FaLaptopCode, FaMobileAlt } from 'react-icons/fa';
import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';


export default function Home() {

  // Create reference to store the DOM element containing the animation
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['Coding', 'Web Development', 'Software Engineering', 'Programming Languages', 'Algorithm Design', 'Data Structures', 'Version Control', 'Debugging', 'Code Review'],
      typeSpeed: 50,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  const posts = [
    {
      id: 1,
      title: 'The Future of AI in Software Development',
      author: 'Jane Doe',
      date: 'May 15, 2023',
      content: 'Artificial Intelligence is revolutionizing the way we approach software development. From automated testing to intelligent code completion, AI is enhancing developer productivity and code quality...',
      image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80'
    },
    {
      id: 2,
      title: 'Mastering React Hooks: A Comprehensive Guide',
      author: 'John Smith',
      date: 'June 2, 2023',
      content: 'React Hooks have transformed the way we write React components. This guide dives deep into useState, useEffect, and custom hooks, providing practical examples and best practices...',
      image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80'
    },
    {
      id: 3,
      title: 'The Rise of Edge Computing in IoT',
      author: 'Alice Johnson',
      date: 'June 10, 2023',
      content: 'Edge computing is transforming the Internet of Things landscape. By processing data closer to the source, edge computing reduces latency, enhances security, and enables real-time decision making...',
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80'
    }
  ];
  return (
    <main className='bg-gradient-to-br from-purple-100 to-indigo-200'>
      <section className="container px-4 py-10 mx-auto lg:h-128 lg:space-x-8 lg:flex lg:items-center ">
        <div className="w-full text-center lg:text-left lg:w-1/2 lg:-mt-8">
          <h1 className="text-3xl leading-snug text-gray-800 dark:text-gray-200 md:text-4xl">
            A <span className="font-semibold">Blog application</span> for community <br className="hidden lg:block" /> of developers at <span className="font-semibold">TechVerse</span> <span className="font-semibold underline decoration-primary"><span ref={el} /></span>
          </h1>
          <p className="mt-4 text-lg text-gray-500 dark:text-gray-300">
           Open source Tailwind UI components and templates to <br className="hidden lg:block" /> bootstrap your new apps, projects, or landing sites! Perfect for coders and developers looking to accelerate their development process with pre-built, customizable UI elements.
          </p>
          <div className="mt-6 bg-transparent border rounded-lg dark:border-gray-700 lg:w-2/3 focus-within:border-primary focus-within:ring focus-within:ring-primary dark:focus-within:border-primary focus-within:ring-opacity-20">
            <form action="https://www.creative-tim.com/twcomponents/search" className="flex flex-wrap justify-between md:flex-row">
              {/* <input type="search" name="query" placeholder="Search Components" required className="flex-1 h-10 px-4 m-1 text-gray-700 placeholder-gray-400 bg-transparent border-none appearance-none lg:h-12 dark:text-gray-200 focus:outline-none focus:placeholder-transparent focus:ring-0" /> */}
              {/* <button type="submit" className="flex items-center justify-center w-full p-2 m-1 text-white transition-colors duration-300 transform rounded-lg lg:w-12 lg:h-12 lg:p-0 bg-primary hover:bg-primary/70 focus:outline-none focus:bg-primary/70">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button> */}
            </form>
          </div>
        </div>
        <div className="w-full mt-4 lg:mt-0 lg:w-1/2">
          <img src="https://www.creative-tim.com/twcomponents/svg/website-designer-bro-purple.svg" alt="tailwind css components" className="w-full h-full max-w-md mx-auto" />
        </div>
      </section>

      <section>
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold text-center mb-12">Tech & Coding Blog</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <article key={post.id} className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-80 object-cover"
                  loading="lazy"
                />
                <div className="p-6">
                  <h2 className="text-2xl font-semibold mb-2 text-gray-800">{post.title}</h2>
                  <div className="flex items-center text-gray-600 text-sm mb-4">
                    <FaUser className="mr-2" />
                    <span className="mr-4">{post.author}</span>
                    <FaCalendar className="mr-2" />
                    <span>{post.date}</span>
                  </div>
                  <p className="text-gray-600 mb-4">{post.content}</p>
                  <button className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition-colors duration-300">
                    Read More
                  </button>
                </div>
              </article>
            ))}
          </div>
          <div className="mt-16 flex justify-center space-x-8">
            <FaCode className="text-6xl text-blue-500" />
            <FaLaptopCode className="text-6xl text-green-500" />
            <FaMobileAlt className="text-6xl text-purple-500" />
          </div>
        </div>
      </section>

      <section>
        <div className="absolute inset-0"></div>
        <div className="relative container mx-auto px-4 py-24 sm:py-32">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold tracking-tight text-black sm:text-5xl md:text-6xl">
              Discover. Learn. Grow.
            </h1>
            <p className="mt-6 max-w-2xl mx-auto text-xl text-black">
              Explore a world of knowledge with our curated articles on technology, science, and innovation.
            </p>
            <div className="mt-10 max-w-xl mx-auto">
              <form className="sm:flex">
                <div className="min-w-0 flex-1">
                  <Input
                    type="search"
                    placeholder="Search articles..."
                    className="block w-full px-4 py-3 text-base text-black rounded-md border-gray-300 shadow-sm focus:ring-2 focus:ring-white focus:border-white outline-white"
                  />
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <Button size="lg" className="w-full">
                    <Search className="h-5 w-5 mr-2" />
                    Search
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>



    </main>
  );
}
