"use client"
import React from 'react';
import Link from 'next/link';
import { Button } from "@heroui/react";
import { HiOutlineArrowNarrowLeft } from "react-icons/hi"; // Arrow Icon
import { FaMapMarkedAlt } from "react-icons/fa"; // Travel/Map Icon

const NotFoundPage = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-[#050505] relative overflow-hidden py-8">
            
            {/* Background Glows */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10 text-center">
                
                {/* 404 Background Text */}
                <h1 className="text-[140px] md:text-[240px] font-black text-white/[0.03] leading-none select-none tracking-tighter">
                    404
                </h1>
                
                <div className="mt-[-50px] md:mt-[-90px]">
                    {/* Icon Container */}
                    <div className="inline-flex items-center justify-center w-20 h-20 bg-cyan-500/10 rounded-2xl mb-8 text-cyan-400 border border-cyan-500/20 rotate-12 hover:rotate-0 transition-transform duration-500">
                        <FaMapMarkedAlt size={40} />
                    </div>
                    
                    <h2 className="text-3xl md:text-6xl font-bold text-white mb-5 tracking-tight">
                        Lost in the Wild?
                    </h2>
                    
                    <p className="text-gray-400 max-w-md mx-auto mb-10 text-base md:text-lg leading-relaxed">
                        The coordinate you're trying to reach is not on our map. Let's get you back to the main trail.
                    </p>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
                        <Link href="/">
                            <Button 
                                className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold rounded-none px-10 py-7 text-lg transition-all group flex items-center gap-2"
                            >
                                <HiOutlineArrowNarrowLeft size={24} className="group-hover:-translate-x-1 transition-transform" />
                                Return Home
                            </Button>
                        </Link>
                        
                        <Link href="/destination">
                            <Button 
                                variant="bordered" 
                                className="border-white/10 text-white hover:bg-white/5 rounded-none px-10 py-7 text-lg transition-all"
                            >
                                View Destinations
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>

            {/* Subtle Overlay Texture */}
            <div className="absolute inset-0 bg-grid-white/[0.02] pointer-events-none"></div>
        </div>
    );
};

export default NotFoundPage;