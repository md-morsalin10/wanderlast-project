import { Button } from '@heroui/react';
import Image from 'next/image';
import React from 'react';
import { CiLocationOn } from 'react-icons/ci';
import { FaCalendarAlt } from 'react-icons/fa';
import { BookingCancel } from './BookingCancel';


const MyBooking = ({data}) => {
    // console.log(data);
    
    return (
        <div className='flex justify-between'>
            <div className='flex gap-5'>
                <div>
                    <Image 
                    src={data?.imageUrl}
                    alt=''
                    width={300}
                    height={300}
                    />
                </div>
                <div className='space-y-2'>
                    <h2 className='text-2xl font-bold'>{data?.destinationName}</h2>
                    <p className='text-gray-500 text-sm flex gap-1'><FaCalendarAlt />{new Date(data?.departureDate).toLocaleDateString()}</p>
                    <p className='text-gray-500 text-sm flex gap-1'>Booking Id: <CiLocationOn />{data?._id}</p>
                    <h3 className='text-4xl font-bold text-cyan-500'>${data?.price}</h3>
                </div>
            </div>
            <div className='flex items-end gap-5'>
                <BookingCancel bookingId={data._id}/>
                <Button variant='primary' className={'rounded-none'}>View</Button>
            </div>
        </div>
    );
};

export default MyBooking;