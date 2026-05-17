import { auth } from '@/lib/auth';
import { Avatar, Card, Button } from '@heroui/react'; 
import { headers } from 'next/headers';
import React from 'react';
import { HiOutlineMail, HiOutlineBadgeCheck, HiOutlineCalendar } from "react-icons/hi";

const ProfilePage = async () => {
    const session = await auth.api.getSession({
        headers: await headers()
    });

    const user = session?.user;

    if (!user) {
        return (
            <div className="min-h-[60vh] flex items-center justify-center bg-[#050505]">
                <p className="text-gray-400">Please log in to view your profile.</p>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-[#050505] py-20 px-4">
            <div className="max-w-4xl mx-auto">

                {/* Header Section */}
                <div className="mb-10 text-center md:text-left">
                    <h1 className="text-3xl md:text-4xl font-bold text-white tracking-tight italic">My Profile</h1>
                    <p className="text-gray-500 mt-2">Manage your account settings and travel preferences.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                    {/* Sidebar Card */}
                    <Card className="md:col-span-1 bg-white/5 border-white/10 backdrop-blur-md rounded-none border p-8 shadow-2xl">
                        <div className="flex flex-col items-center">
                            <div className="relative group">
                                <div className="absolute inset-0 bg-cyan-500/20 blur-2xl rounded-full opacity-60"></div>
                                <Avatar
                                    className="w-32 h-32 md:w-40 md:h-40 border-2 border-cyan-500/30 p-1 relative z-10"
                                    radius="full"
                                >
                                    <Avatar.Image
                                        referrerPolicy="no-referrer"
                                        alt={user?.name}
                                        src={user?.image}
                                    />
                                    <Avatar.Fallback className="text-4xl bg-cyan-500 text-white font-bold">
                                        {user?.name?.[0]?.toUpperCase()}
                                    </Avatar.Fallback>
                                </Avatar>
                            </div>

                            <div className="mt-6 text-center">
                                <h2 className="text-2xl font-bold text-white flex items-center gap-2 justify-center">
                                    {user?.name}
                                    <HiOutlineBadgeCheck className="text-cyan-400" size={22} />
                                </h2>
                                <p className="text-cyan-500/80 text-sm font-medium mt-1 uppercase tracking-[0.2em]">Explorer Class</p>
                            </div>

                            <Button className="mt-8 w-full bg-cyan-500 text-white font-bold rounded-none hover:bg-cyan-600 transition-all duration-300">
                                Edit Profile
                            </Button>
                        </div>
                    </Card>

                    {/* Details Card */}
                    <Card className="md:col-span-2 bg-white/5 border-white/10 backdrop-blur-md rounded-none border p-8">
                        <h3 className="text-xl font-bold text-white mb-8 border-l-4 border-cyan-500 pl-4">Personal Information</h3>

                        <div className="space-y-8">
                            {/* Email Field */}
                            <div className="flex items-center gap-5">
                                <div className="w-12 h-12 rounded-none bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 shadow-inner">
                                    <HiOutlineMail size={24} />
                                </div>
                                <div>
                                    <p className="text-[10px] text-gray-500 uppercase tracking-[3px] mb-1">Email Address</p>
                                    <p className="text-white font-medium text-lg">{user?.email}</p>
                                </div>
                            </div>

                 
                            <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

                            {/* Joined Date Field */}
                            <div className="flex items-center gap-5">
                                <div className="w-12 h-12 rounded-none bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 shadow-inner">
                                    <HiOutlineCalendar size={24} />
                                </div>
                                <div>
                                    <p className="text-[10px] text-gray-500 uppercase tracking-[3px] mb-1">Member Since</p>
                                    <p className="text-white font-medium text-lg">
                                        {new Date(user?.createdAt || Date.now()).toLocaleDateString('en-US', {
                                            month: 'long',
                                            year: 'numeric'
                                        })}
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Travel Statistics */}
                        <div className="mt-12 pt-8 border-t border-white/5 grid grid-cols-2 gap-4">
                            <div className="p-6 bg-white/[0.02] border border-white/5 text-center group hover:bg-cyan-500/5 transition-colors">
                                <p className="text-3xl font-bold text-cyan-400 group-hover:scale-110 transition-transform">12</p>
                                <p className="text-[10px] text-gray-500 uppercase tracking-widest mt-2">Total Bookings</p>
                            </div>
                            <div className="p-6 bg-white/[0.02] border border-white/5 text-center group hover:bg-cyan-500/5 transition-colors">
                                <p className="text-3xl font-bold text-cyan-400 group-hover:scale-110 transition-transform">05</p>
                                <p className="text-[10px] text-gray-500 uppercase tracking-widest mt-2">Active Reviews</p>
                            </div>
                        </div>
                    </Card>

                </div>
            </div>
        </div>
    );
};

export default ProfilePage;