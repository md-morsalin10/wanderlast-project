import DestinationCard from '@/components/DestinationCard';
import React from 'react';

const DestinationPage = async() => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/destination`)
    const data = await res.json();

    // console.log(data, "destination data");
    
    return (
        <div className='container mx-auto my-20 p-8 lg:p-5'>
            <h2 className='text-4xl font-semibold'>Explore All Destination</h2>
            <div className='p-5 grid grid-cols-1 lg:grid-cols-3 gap-5'>
                {
                    data.map(des=> <DestinationCard key={des._id} des={des}/>)
                }
            </div>
        </div>
    );
};

export default DestinationPage;