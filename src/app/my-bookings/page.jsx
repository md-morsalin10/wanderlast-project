import MyBooking from '@/components/MyBooking';
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import React from 'react';

const MyBookingPage = async () => {
    const session = await auth.api.getSession({
        headers: await headers()
    })
    const user = session?.user

    const { token } = await auth.api.getToken({
        headers: await headers()
    })
    
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/booking/${user?.id}`, {
        headers: {
            authorization: `Bearer ${token}`
        }
    })
    const bookingData = await res.json()

    return (

        <div className='min-h-screen bg-white'>
    
            <div className='container mx-auto py-20 px-4 sm:px-6'>
                
                {/* টাইটেল সাইজ মোবাইলে একটু ছোট এবং ডেক্সটপে আগের মতোই বড় থাকবে */}
                <h2 className='text-center text-xl md:text-2xl font-bold py-6 text-gray-800'>
                    My Bookings
                </h2>

                {/* কার্ডের লিস্টগুলো যাতে খুব বেশি চওড়া না হয় তাই max-w-5xl যোগ করা হয়েছে */}
                <div className='max-w-5xl mx-auto space-y-6'>
                    {
                        bookingData && bookingData.length > 0 ? (
                            bookingData.map(data => (
                                <MyBooking key={data?._id} data={data}></MyBooking>
                            ))
                        ) : (
                            <p className='text-center text-gray-500 py-10'>No bookings found.</p>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default MyBookingPage;