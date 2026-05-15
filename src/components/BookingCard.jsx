"use client"
import { authClient } from '@/lib/auth-client';
import { Button, DateField, Label } from '@heroui/react';
import React, { useState } from 'react';
import toast from 'react-hot-toast';

const BookingCard = ({ destination }) => {
    const [departureDate, setDepartureDate] = useState(null);
    const { data: session, } = authClient.useSession();
    const user = session?.user

    const { price, _id, duration, imageUrl, destinationName, country
    } = destination

    const handleBooking = async () => {
        const bookingData = {
            userId: user?.id,
            userImage: user?.image,
            userName: user?.name,
            userEmail: user?.email,
            destinationId: _id,
            duration,
            imageUrl,
            destinationName,
            country,
            price,
            departureDate: new Date(departureDate)
        }
        console.log(bookingData);

        const res = await fetch('http://localhost:5000/booking', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(bookingData)
        })
        const data = await res.json();
        toast.success('Booking Successful')
        // console.log(data);

    }


    return (
        <div className='space-y-6'>
            <div>
                <p>Starting From</p>
                <p className='text-2xl text-cyan-500 font-bold'>${price}</p>
                <span className='text-lg font-normal text-gray-500'>per person</span>
            </div>
            <div>
                <DateField onChange={setDepartureDate} className="w-[256px]" name="date">
                    <Label>Date</Label>
                    <DateField.Group>
                        <DateField.Input>{(segment) => <DateField.Segment segment={segment} />}</DateField.Input>
                    </DateField.Group>
                </DateField>
            </div>

            <Button
                onClick={handleBooking}
                className={'w-full rounded-none bg-cyan-500'}>Book Now</Button>
        </div>
    );
};

export default BookingCard;