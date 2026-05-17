import BookingCard from '@/components/BookingCard';
import { DeleteDestination } from '@/components/DeleteDestination';
import { EditModal } from '@/components/EditModal';
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import Image from 'next/image';
import React from 'react';
import { CiLocationOn } from 'react-icons/ci';
import { SlCalender } from 'react-icons/sl';

const DestinationDetails = async ({ params }) => {
    const { id } = await params;
    
    const { token } = await auth.api.getToken({
        headers: await headers()
    });

    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/destination/${id}`, {
        headers: {
            authorization: `Bearer ${token}`
        }
    });
    
    const destination = await res.json();

    const { 
        imageUrl, 
        duration, 
        destinationName, 
        country, 
        description 
    } = destination;

    return (
        <div className='container px-4 md:px-8 mx-auto py-20'>
            {/* Admin Controls */}
            <div className='flex justify-end items-center gap-4 py-4'>
                <EditModal destination={destination} />
                <DeleteDestination destination={destination} />
            </div>

            {/* Image Section - Responsive height */}
            <div className='relative w-full h-64 sm:h-96 md:h-125 overflow-hidden rounded-lg shadow-md mb-8'>
                <Image
                    src={imageUrl}
                    fill
                    className='object-cover'
                    alt={destinationName || "Destination Image"}
                    sizes="100vw"
                    priority
                />
            </div>

            {/* Content Section - flex-col for mobile, flex-row for large screens */}
            <div className='flex flex-col lg:flex-row gap-8 lg:gap-10'>
                
                {/* Information Section */}
                <div className='space-y-4 w-full lg:w-2/3'>
                    <h2 className='flex items-center gap-1 pt-2 text-sm text-gray-600'>
                        <CiLocationOn size={18} /> {country}
                    </h2>

                    <div className='space-y-3'>
                        <h2 className='text-2xl md:text-4xl font-medium text-gray-900'>
                            {destinationName}
                        </h2>
                        <p className='text-sm text-gray-500 flex items-center gap-1'>
                            <SlCalender /> {duration}
                        </p>

                        <div className='pt-6'>
                            <h3 className='text-2xl md:text-3xl font-bold text-gray-800 mb-3'>
                                Overview
                            </h3>
                            <p className='pb-3 text-base md:text-lg text-gray-600 leading-relaxed'>
                                {description}
                            </p>
                        </div>
                    </div>
                </div>

                {/* Booking Sidebar - Stacks on mobile */}
                <div className='w-full lg:w-1/3'>
                    <div className='border rounded-2xl space-y-6 p-6 bg-white shadow-sm'>
                        <BookingCard destination={destination} />
                    </div>
                </div>

            </div>
        </div>
    );
};

export default DestinationDetails;