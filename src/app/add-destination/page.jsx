"use client"
import { authClient } from '@/lib/auth-client';
import { FieldError, Input, Label, TextField, Select, ListBox, TextArea, Button, Card } from '@heroui/react';
import { useRouter } from 'next/navigation'; // redirect এর বদলে useRouter ব্যবহার করা নিরাপদ
import React from 'react';

const AddDestination = () => {
    const router = useRouter();

    const onSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const destinations = Object.fromEntries(formData.entries())

        const { data: tokenData } = await authClient.token();
        
        const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/destination`, {
            method: "POST",
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${tokenData?.token}`
            },
            body: JSON.stringify(destinations)
        })

        if (res.ok) {
            alert('Data added successfully');
            router.push('/destination');
        }
    }

    return (
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 my-20'>
            {/* Page Title */}
            <div className="mb-8 text-center md:text-left">
                <h2 className='text-2xl md:text-3xl font-bold text-gray-800'>Add New Destination</h2>
                <p className="text-gray-500 mt-2 text-sm md:text-base">Create a premium travel package for your explorers.</p>
            </div>

            <Card className="shadow-xl border-none rounded-2xl overflow-hidden">
                <form
                    onSubmit={onSubmit}
                    className="p-6 md:p-10 space-y-6 md:space-y-8"
                >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                        
                        {/* Destination Name - Full Width on all screens */}
                        <div className="md:col-span-2">
                            <TextField name="destinationName" isRequired className="w-full">
                                <Label className="text-sm font-semibold mb-2 block text-gray-700">Destination Name</Label>
                                <Input placeholder="Bali Paradise" className="rounded-xl w-full" />
                                <FieldError className="text-xs text-red-500 mt-1" />
                            </TextField>
                        </div>

                        {/* Country */}
                        <TextField name="country" isRequired className="w-full">
                            <Label className="text-sm font-semibold mb-2 block text-gray-700">Country</Label>
                            <Input placeholder="Indonesia" className="rounded-xl w-full" />
                            <FieldError className="text-xs text-red-500 mt-1" />
                        </TextField>

                        {/* Category */}
                        <div className="w-full">
                            <Select
                                name="category"
                                isRequired
                                className="w-full"
                                placeholder="Select category"
                            >
                                <Label className="text-sm font-semibold mb-2 block text-gray-700">Category</Label>
                                <Select.Trigger className="rounded-xl border-gray-200">
                                    <Select.Value />
                                    <Select.Indicator />
                                </Select.Trigger>
                                <Select.Popover className="rounded-xl">
                                    <ListBox>
                                        {["Beach", "Mountain", "City", "Adventure", "Cultural", "Luxury"].map((cat) => (
                                            <ListBox.Item key={cat} id={cat} textValue={cat}>
                                                {cat}
                                                <ListBox.ItemIndicator />
                                            </ListBox.Item>
                                        ))}
                                    </ListBox>
                                </Select.Popover>
                            </Select>
                        </div>

                        {/* Price */}
                        <TextField name="price" type="number" isRequired className="w-full">
                            <Label className="text-sm font-semibold mb-2 block text-gray-700">Price (USD)</Label>
                            <Input
                                type="number"
                                placeholder="1299"
                                className="rounded-xl w-full"
                            />
                            <FieldError className="text-xs text-red-500 mt-1" />
                        </TextField>

                        {/* Duration */}
                        <TextField name="duration" isRequired className="w-full">
                            <Label className="text-sm font-semibold mb-2 block text-gray-700">Duration</Label>
                            <Input
                                placeholder="7 Days / 6 Nights"
                                className="rounded-xl w-full"
                            />
                            <FieldError className="text-xs text-red-500 mt-1" />
                        </TextField>

                        {/* Departure Date */}
                        <div className="md:col-span-2">
                            <TextField name="departureDate" type="date" isRequired className="w-full">
                                <Label className="text-sm font-semibold mb-2 block text-gray-700">Departure Date</Label>
                                <Input type="date" className="rounded-xl w-full" />
                                <FieldError className="text-xs text-red-500 mt-1" />
                            </TextField>
                        </div>

                        {/* Image URL */}
                        <div className="md:col-span-2">
                            <TextField name="imageUrl" isRequired className="w-full">
                                <Label className="text-sm font-semibold mb-2 block text-gray-700">Image URL</Label>
                                <Input
                                    type="url"
                                    placeholder="https://example.com/bali-paradise.jpg"
                                    className="rounded-xl w-full"
                                />
                                <FieldError className="text-xs text-red-500 mt-1" />
                            </TextField>
                        </div>

                        {/* Description */}
                        <div className="md:col-span-2">
                            <TextField name="description" isRequired className="w-full">
                                <Label className="text-sm font-semibold mb-2 block text-gray-700">Description</Label>
                                <TextArea
                                    placeholder="Describe the travel experience..."
                                    className="rounded-xl min-h-[120px] w-full"
                                />
                                <FieldError className="text-xs text-red-500 mt-1" />
                            </TextField>
                        </div>
                    </div>

                    {/* Submit Button */}
                    <div className="pt-4">
                        <Button
                            type="submit"
                            className="w-full py-6 bg-cyan-600 text-white font-bold text-lg rounded-xl hover:bg-cyan-700 transition-colors shadow-lg shadow-cyan-500/20"
                        >
                            Add Travel Package
                        </Button>
                    </div>
                </form>
            </Card>
        </div>
    );
};

export default AddDestination;