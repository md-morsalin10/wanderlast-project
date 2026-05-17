"use client"
import React from 'react';
import ctaImage from "@/assets/CTA.png"; // নিশ্চিত করুন ফাইলটির নাম ও পাথ একদম ঠিক আছে

const ReadyToStart = () => {
    return (
        <div 
            style={{ 
                backgroundImage: `url(${ctaImage.src})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center' 
            }}
            className="w-full h-[440px] flex flex-col items-center justify-center gap-5 text-white relative"
        >
            {/* ডার্ক ওভারলে (ইমেজ দেখা না গেলে এটি চেক করতে সাহায্য করবে) */}
            <div className="absolute inset-0 bg-black/40 -z-0"></div>

            <div className="relative z-10 text-center">
                <h2 className="text-4xl md:text-5xl font-bold">Ready To Start Your Journey?</h2>
                <p className="mt-4 text-gray-200">Join thousands of travelers who have discovered the world with us.</p>
            </div>
        </div>
    );
};

export default ReadyToStart;