import MyBooking from '@/components/MyBooking';
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import React from 'react';

const MyBookingPage = async () => {
    const session = await auth.api.getSession({
        headers: await headers() // you need to pass the headers object.
    })
    const user = session?.user

    const {token}= await auth.api.getToken({
        headers: await headers()
    })
    
    
    const res = await fetch(`http://localhost:5000/booking/${user?.id}`,{
        headers: {
            authorization: `Bearer ${token}`
        }
    })
    const bookingData = await res.json()

    console.log(bookingData);
    
    return (
        <div className='container mx-auto'>
            <h2 className='text-center text-2xl font-bold py-4'>My Bookings</h2>
            <div className='space-y-6 p-4'>
                {
                    bookingData.map(data=> <MyBooking key={data?._id} data={data}></MyBooking>)
                }
            </div>
        </div>
    );
};

export default MyBookingPage;