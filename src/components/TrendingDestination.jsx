import { Button } from '@heroui/react';
import React from 'react';
import DestinationCard from './DestinationCard';
import Link from 'next/link';

const TrendingDestination = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/trending`)
    const trendingData = await res.json();
    console.log(trendingData);

    return (
        <div className='container mx-auto my-20 p-3'>
            <div className='flex justify-between items-center'>
                <div className='space-y-2 pb-4'>
                    <h2 className='text-3xl font-bold'>Featured Destinations</h2>
                    <p className='text-muted'>Handpicked travel experiences for the adventure seekers</p>
                </div>
                <div>
                    <Link href={'/destination'}>
                        <Button variant='outline' className={'rounded-none border border-cyan-500 text-cyan-500'}>All Destination</Button>
                    </Link>
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
                {
                    trendingData.map(des => <DestinationCard des={des} key={des._id} />)
                }
            </div>
        </div>
    );
};

export default TrendingDestination;