import { Button } from '@heroui/react';
import Image from 'next/image';
import React from 'react';
import { CiLocationOn } from 'react-icons/ci';
import { FaCalendarAlt } from 'react-icons/fa';
import { BookingCancel } from './BookingCancel';
import Link from 'next/link';

const MyBooking = ({ data }) => {
    console.log(data);
    

    return (
        <div className='flex flex-col md:flex-row justify-between items-start md:items-center gap-5 my-5 p-4 border border-gray-100 rounded-none shadow-sm hover:shadow-md transition-shadow bg-white'>

            <div className='flex flex-col sm:flex-row gap-5 w-full'>

                <div className='relative w-full sm:w-50 md:w-62.5 h-50 overflow-hidden'>
                    <Image
                        src={data?.imageUrl}
                        alt={data?.destinationName || 'Booking Image'}
                        fill
                        className='object-cover'
                    />
                </div>

                {/* Details Section */}
                <div className='space-y-2 flex-1'>
                    <h2 className='text-xl md:text-2xl font-bold text-gray-800'>{data?.destinationName}</h2>

                    <div className='space-y-1'>
                        <p className='text-gray-500 text-sm flex items-center gap-1'>
                            <FaCalendarAlt className='text-cyan-500' />
                            {new Date(data?.departureDate).toLocaleDateString()}
                        </p>
                        <p className='text-gray-400 text-[12px] md:text-sm flex items-center gap-1'>
                            <span className='font-medium text-gray-500'>Booking Id:</span>
                            <CiLocationOn />
                            {data?._id}
                        </p>
                    </div>

                    <h3 className='text-2xl md:text-4xl font-bold text-cyan-500 pt-2'>
                        ${data?.price}
                    </h3>
                </div>
            </div>


            <div className='flex flex-row md:flex-col lg:flex-row  w-full md:w-auto mt-2 md:mt-0'>
                <div className='flex-1 md:flex-none w-full'>
                    <BookingCancel bookingId={data._id} />
                </div>
                <Link href={`/destination/${data?.destinationId}`}>
                    <Button
                        variant='primary'
                        className={'rounded-none md:w-auto bg-gray-900 text-white'}
                    >
                        View
                    </Button>
                </Link>
            </div>
        </div>
    );
};

export default MyBooking;