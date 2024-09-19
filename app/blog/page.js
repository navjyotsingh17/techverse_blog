import { Button } from '@/components/ui/button';
import Link from 'next/link';
import React from 'react'
import fs from "fs"
import matter from "gray-matter"

const Page = () => {
  const dirContent = fs.readdirSync("content", "utf-8")
  // console.log(dirContent)
  const blogs = dirContent.map(file => {
    const fileContent = fs.readFileSync(`content/${file}`, "utf-8")
    const { data } = matter(fileContent)
    // console.log(data)
    return data
  })

  // const blogs = [
  //   {
  //     image: 'https://images.pexels.com/photos/17809424/pexels-photo-17809424/free-photo-of-stars-in-space.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  //     title: 'Exploring the Wonders of the Universe',
  //     description: 'Join us as we delve into the mysteries of the cosmos and uncover the secrets of the stars.',
  //     author: 'Dr. Jane Smith',
  //     date: '2023-10-01',
  //     slug: 'exploring-the-wonders-of-the-universe'
  //     content:
  //   },
  //   {
  //     image: 'https://images.pexels.com/photos/3246665/pexels-photo-3246665.png?auto=compress&cs=tinysrgb&w=600',
  //     title: 'The Art of Culinary Masterpieces',
  //     description: 'Discover the techniques and recipes that turn ordinary ingredients into extraordinary dishes.',
  //     author: 'Chef John Doe',
  //     date: '2023-10-02',
  //     slug: 'the-art-of-culinary-masterpieces'
  //     content:
  //   },
  //   {
  //     image: 'https://images.pexels.com/photos/6153354/pexels-photo-6153354.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  //     title: 'The Future of Artificial Intelligence',
  //     description: 'An in-depth look at how AI is shaping our world and what the future holds for this groundbreaking technology.',
  //     author: 'Dr. Alan Turing',
  //     date: '2023-10-03',
  //     slug: 'the-future-of-artificial-intelligence'
  //     content:
  //   },
  //   {
  //     image: 'https://images.pexels.com/photos/9754/mountains-clouds-forest-fog.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  //     title: 'Adventures in the Amazon Rainforest',
  //     description: 'Experience the beauty and diversity of the Amazon rainforest through the eyes of an intrepid explorer.',
  //     author: 'Jane Goodall',
  //     date: '2023-10-04',
  //     slug: 'adventures-in-the-amazon-rainforest'
  //     content:
  //   },
  //   {
  //     image: 'https://images.pexels.com/photos/34221/violin-musical-instrument-music-sound.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  //     title: 'The Evolution of Classical Music',
  //     description: 'Trace the history and development of classical music from its origins to the present day.',
  //     author: 'Ludwig van Beethoven',
  //     date: '2023-10-05',
  //     slug: 'the-evolution-of-classical-music'
  //     content:
  //   }
  // ];

  return (
    <div className="container mx-auto p-4 min-h-screen">
      <h1 className="text-3xl font-bold mb-4">TechVerse Blog</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {blogs.map((blog, index) => (
          <div key={index} className="bg-white shadow-md rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105">
            <img src={blog.image} alt={blog.title} className="w-full h-80 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{blog.title}</h2>
              <p className="text-gray-700 mb-2">{blog.description}</p>
              <p className="text-gray-500 text-sm mb-2">By {blog.author} on {blog.date}</p>
              <Button className='mx-1 bg-black text-white' variant="outline">
                <Link href={`/blogpost/${blog.slug}`}>Read More</Link>
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Page