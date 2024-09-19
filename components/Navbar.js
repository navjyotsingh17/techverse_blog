"use client"

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Button } from "@/components/ui/button"
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { ModeToggle } from './theme-btn';
import LoadingBar from 'react-top-loading-bar';
import { usePathname } from 'next/navigation';



const Navbar = () => {

    const [progress, setProgress] = useState(0)

    const pathName = usePathname()

    useEffect(() => {
        setProgress(20)

        setTimeout(() => {
            setProgress(40)
        }, 500);

        setTimeout(() => {
            setProgress(60)
        }, 700);

        setTimeout(() => {
            setProgress(100)
        }, 800);
    }, [pathName])

    useEffect(() => {
        setProgress(0)
    }, [900])


    return (
        <nav className="p-2 sticky top-0 backdrop-blur border-b z-10">
            <div className="container mx-auto flex justify-between">
                <LoadingBar
                    color='#f11946'
                    progress={progress}
                    onLoaderFinished={() => setProgress(0)}
                />
                <Link href="/" className=" text-lg font-bold">
                    TechVerse
                </Link>
                <div className="space-x-4 md:flex hidden items-center">
                    <Link href="/" className="hover:scale-105 transition-transform duration-50 hover:font-semibold">Home</Link>
                    <Link href="/blog" className="hover:scale-105 transition-transform duration-50 hover:font-semibold">Blog</Link>
                    <Link href="/about" className="hover:scale-105 transition-transform duration-50 hover:font-semibold">About</Link>
                    <Link href="/contact" className="hover:scale-105 transition-transform duration-50 hover:font-semibold">Contact Us</Link>
                    <div className='flex items-center'>
                        <Button className='mx-1' variant="outline">Login</Button>
                        <Button className='mx-1' variant="outline">SignUp</Button>
                        <ModeToggle />
                    </div>
                </div>
                <div className="md:hidden">
                    <span className='mx-2'>
                        <ModeToggle />
                    </span>
                    <Sheet>
                        <SheetTrigger>
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="8 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                            </svg>
                        </SheetTrigger>
                        <SheetContent>
                            <SheetHeader>
                                <SheetTitle>TechVerse</SheetTitle>
                                <SheetDescription>
                                    <div className="flex flex-col gap-5">
                                        <Link href="/" className="text-black">Home</Link>
                                        <Link href="/blog" className="text-black">Home</Link>
                                        <Link href="/about" className="text-black">About</Link>
                                        <Link href="/contact" className="text-black">Contact</Link>
                                        <div>
                                            <Button className='mx-1 text-xs' variant="outline">Login</Button>
                                            <Button className='mx-1 text-xs' variant="outline">SignUp</Button>

                                        </div>
                                    </div>
                                </SheetDescription>
                            </SheetHeader>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>


        </nav >
    );
}

export default Navbar;
