import DestinationCard from '@/components/DestinationCard';
import React from 'react';

const DestinationPage = async() => {
    const res = await fetch('http://localhost:5000/destination')
    const data = await res.json();

    console.log(data, "destination data");
    
    return (
        <div className='container mx-auto'>
            <h2 className='text-4xl font-semibold'>Explore All Destination</h2>
            <div className='p-5 grid grid-cols-3 gap-5'>
                {
                    data.map(des=> <DestinationCard key={des._id} des={des}/>)
                }
            </div>
        </div>
    );
};

export default DestinationPage;