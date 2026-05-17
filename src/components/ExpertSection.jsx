"use client"
import React from 'react';
import { HiOutlineShieldCheck } from "react-icons/hi"; // Safe & Secure
import { FiMap } from "react-icons/fi"; // Expert Guides
import { FiHeadphones } from "react-icons/fi"; // 24/7 Support

const ExpertSection = () => {
    const features = [
        {
            id: 1,
            title: "Safe & Secure",
            description: "Your safety is our priority with comprehensive travel insurance and 24/7 support.",
            icon: <HiOutlineShieldCheck size={40} />,
        },
        {
            id: 2,
            title: "Expert Guides",
            description: "Local experts who bring destinations to life with authentic cultural insights.",
            icon: <FiMap size={38} />,
        },
        {
            id: 3,
            title: "24/7 Support",
            description: "Round-the-clock customer service to assist you wherever your journey takes you.",
            icon: <FiHeadphones size={38} />,
        }
    ];

    return (
        <section className="py-24 bg-transparent">
            <div className="container mx-auto px-4 md:px-6">

                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold  mb-4 tracking-tight">
                        Why Choose Wanderlust
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        Your trusted partner for exceptional travel experiences
                    </p>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {features.map((feature) => (
                        <div
                            key={feature.id}
                            className="group relative p-10 bg-[#0A0A0A] border border-white/5 hover:border-cyan-500/30 transition-all duration-500 rounded-none shadow-2xl"
                        >
                            {/* Accent Glow on Hover */}
                            <div className="absolute top-0 right-0 w-24 h-24 bg-cyan-500/5 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            {/* Icon Box */}
                            <div className="w-16 h-16 flex items-center justify-center bg-cyan-500/10 text-cyan-400 mb-8 border border-cyan-500/20 group-hover:bg-cyan-500 group-hover:text-black transition-all duration-500">
                                {feature.icon}
                            </div>

                            {/* Content */}
                            <h3 className="text-2xl font-bold text-white mb-4 tracking-wide group-hover:translate-x-2 transition-transform duration-300">
                                {feature.title}
                            </h3>

                            <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                                {feature.description}
                            </p>

                            {/* Bottom Accent Line */}
                            <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-cyan-500 group-hover:w-full transition-all duration-500" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ExpertSection;