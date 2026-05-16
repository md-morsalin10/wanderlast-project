import BookingCard from '@/components/BookingCard';
import { DeleteDestination } from '@/components/DeleteDestination';
import { EditModal } from '@/components/EditModal';
import { auth } from '@/lib/auth';
import { Button } from '@heroui/react';
import { headers } from 'next/headers';
import Image from 'next/image';
import React from 'react';
import { CiLocationOn } from 'react-icons/ci';
import { SlCalender } from 'react-icons/sl';

const DestinationDetails = async ({ params }) => {

    const { id } = await params;
    console.log(id, "params");
    const { token } = await auth.api.getToken({
        headers: await headers()
    })
  

    const res = await fetch(`http://localhost:5000/destination/${id}`, {
        headers: {
            authorization: `Bearer ${token}`
        }
    })
    const destination = await res.json()
    // console.log(destination, "details");

    const { _id, price, imageUrl, duration, destinationName, departureDate, country, category, description
    } = destination

    return (
        <div className=' container p-8 mx-auto'>
            <div className='flex justify-end items-center gap-4 py-4'>
                <EditModal destination={destination} />
                <DeleteDestination destination={destination} />
            </div>
            <div className='relative w-full h-50 md:h-143 overflow-hidden rounded-lg shadow-md mb-8'>
                <Image
                    src={imageUrl}
                    fill
                    className='object-cover'
                    alt={destinationName || "Destination Image"}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 1280px"
                    priority
                />
            </div>
            <div className='flex gap-5'>
                <div className='space-y-2 w-2/3'>
                    <h2 className='flex items-center pt-2 text-sm text-gray-600'><CiLocationOn /> {country}</h2>

                    <div className='space-y-2'>
                        <h2 className='text-2xl font-medium'>{destinationName}</h2>
                        <p className='text-sm text-gray-500 flex items-center gap-1'><SlCalender />{duration}</p>

                        <h3 className='text-3xl font-bold'>Overview</h3>
                        <p className='pb-3 text-lg text-gray-500'>{description}</p>
                    </div>

                </div>
                <div className='w-1/3 border rounded-2xl space-y-6 p-6'>
                    <BookingCard destination={destination} />
                </div>
            </div>
        </div>
    );
};

export default DestinationDetails;