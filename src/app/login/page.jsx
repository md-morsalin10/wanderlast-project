'use client'
import { Card } from '@heroui/react';
import React from 'react';
import { Check } from "@gravity-ui/icons";
import { Button, Description, FieldError, Form, Input, Label, TextField } from "@heroui/react";
import { authClient } from '@/lib/auth-client';
import { redirect } from 'next/navigation';

const LoginPage = () => {
    const onSubmit = async (e) => {
        e.preventDefault()
        const formData = new FormData(e.currentTarget);
        const users = Object.fromEntries(formData.entries())

        console.log(users);

        const { data, error } = await authClient.signIn.email({
            email: users.email,
            password: users.password,
        })
        if (data) {
            alert('signIn Successful')
            redirect("/")

        }
        if (error) {
            alert(error.message)
        }



    }
    return (
        <div className='max-w-7xl mx-auto my-20'>
            <Card className='border mx-auto rounded-none'>
                <div className='text-center py-2'>
                    <h2 className='text-2xl font-bold'>Login Your Account</h2>
                    <p className='text-gray-600'>Resume your adventure with Wanderlust</p>
                </div>
                <Form
                    className="flex w-96 flex-col gap-4"
                    render={(props) => <form {...props} data-custom="foo" />}
                    onSubmit={onSubmit}
                >
                    <TextField
                        isRequired
                        name="email"
                        type="email"
                        validate={(value) => {
                            if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                                return "Please enter a valid email address";
                            }
                            return null;
                        }}
                    >
                        <Label>Email</Label>
                        <Input placeholder="john@example.com" />
                        <FieldError />
                    </TextField>
                    <TextField
                        isRequired
                        minLength={8}
                        name="password"
                        type="password"
                        validate={(value) => {
                            if (value.length < 8) {
                                return "Password must be at least 8 characters";
                            }
                            if (!/[A-Z]/.test(value)) {
                                return "Password must contain at least one uppercase letter";
                            }
                            if (!/[0-9]/.test(value)) {
                                return "Password must contain at least one number";
                            }
                            return null;
                        }}
                    >
                        <Label>Password</Label>
                        <Input placeholder="Enter your password" />
                        <FieldError />
                    </TextField>
                    <div className="flex gap-2">
                        <Button className={'w-full rounded-none'} type="submit">
                            <Check />
                            Login
                        </Button>
                    </div>
                </Form>
            </Card>
        </div>
    );
};

export default LoginPage;