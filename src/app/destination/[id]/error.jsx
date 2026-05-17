"use client"
import React, { useEffect } from 'react';
import Link from 'next/link';
import { Button } from "@heroui/react";
import { VscError } from "react-icons/vsc"; // Error Icon
import { HiOutlineRefresh } from "react-icons/hi"; // Reset Icon

const ErrorPage = ({ error, reset }) => {

    useEffect(() => {

        console.error("Runtime Error:", error);
    }, [error]);

    return (
        <div className="min-h-screen flex items-center justify-center bg-[#050505] relative overflow-hidden">

            {/* Background Aesthetic Glows */}
            <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-red-500/5 rounded-full blur-[150px] pointer-events-none" />
            <div className="absolute bottom-1/3 left-1/4 w-[400px] h-[400px] bg-cyan-500/5 rounded-full blur-[150px] pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10 text-center">

                {/* Error Visual */}
                <div className="relative inline-block mb-8">
                    <div className="absolute inset-0 bg-red-500/20 blur-2xl rounded-full animate-pulse"></div>
                    <div className="relative bg-black/40 border border-red-500/20 p-6 rounded-3xl backdrop-blur-xl">
                        <VscError size={60} className="text-red-500" />
                    </div>
                </div>

                <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight">
                    Oops! Something went wrong.
                </h2>

                <p className="text-gray-400 max-w-lg mx-auto mb-10 text-lg leading-relaxed">
                    {error?.message || "An unexpected error occurred while processing your request. Our explorers are looking into it."}
                </p>

                {/* Dynamic Actions */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    {/* Reset Button - tries to re-render the segment */}
                    <Button
                        onClick={() => reset()}
                        className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold rounded-none px-10 py-7 text-lg transition-all flex items-center gap-2 group"
                    >
                        <HiOutlineRefresh size={22} className="group-hover:rotate-180 transition-transform duration-500" />
                        Try Again
                    </Button>

                    <Link href="/">
                        <Button
                            variant="bordered"
                            className="border-white/10 text-white hover:bg-white/5 rounded-none px-10 py-7 text-lg transition-all"
                        >
                            Return to Base
                        </Button>
                    </Link>
                </div>

                {/* Error ID or Support Info (Optional) */}
                <div className="mt-12 text-xs font-mono text-gray-600 uppercase tracking-widest">
                    Code: {error?.digest || "RT_ERR_WANDERLUST"}
                </div>
            </div>

            {/* Background Texture */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/[0.02] via-transparent to-transparent pointer-events-none"></div>
        </div>
    );
};

export default ErrorPage;