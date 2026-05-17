import { Button } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { CiLocationOn } from 'react-icons/ci';
import { SlCalender } from 'react-icons/sl';

const DestinationCard = ({ des }) => {
    console.log(des);

    const { _id, price, imageUrl, duration, destinationName, departureDate, country, category } = des

    return (
        <div className='p-5 border rounded-2xl py-2'>
            <div className='relative w-full aspect-square'>
                <Image
                    src={imageUrl}
                    fill
                    className='object-cover'
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    alt={destinationName}
                />
            </div>
            <div className='space-y-2'>
                <h2 className='flex items-center pt-2 text-sm text-gray-600'><CiLocationOn /> {country}</h2>

                <div className='flex justify-between items-center'>
                    <h2 className='text-2xl font-medium'>{destinationName}</h2>
                    <p className='text-xl font-medium'>${price}/<span className='text-lg font-normal text-gray-500'>person</span></p>
                </div>
                <p className='text-sm text-gray-500 flex items-center gap-1'><SlCalender />{duration}</p>
                <Link href={`/destination/${_id}`}>
                    <Button variant='outline'>Book now</Button>
                </Link>
            </div>
        </div>
    );
};

export default DestinationCard;