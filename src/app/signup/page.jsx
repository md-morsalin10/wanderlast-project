'use client'
import { Card } from '@heroui/react';
import React from 'react';
import { Check } from "@gravity-ui/icons";
import { Button, Description, FieldError, Form, Input, Label, TextField } from "@heroui/react";
import { authClient } from '@/lib/auth-client';
import { redirect } from 'next/navigation';
import { FcGoogle } from 'react-icons/fc';

const SignUpPage = () => {
    const onSubmit = async (e) => {
        e.preventDefault()
        const formData = new FormData(e.currentTarget);
        const users = Object.fromEntries(formData.entries())

        console.log(users);

        const { data, error } = await authClient.signUp.email({
            name: users.name,
            image: users.image,
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

    const handleGoogleBtn = async () => {
        const data = await authClient.signIn.social({
            provider: "google",
        });
    }


    return (
        <div className='max-w-7xl mx-auto my-10'>
            <Card className='border mx-auto rounded-none'>
                <Form
                    className="flex w-96 flex-col gap-4"
                    render={(props) => <form {...props} data-custom="foo" />}
                    onSubmit={onSubmit}
                >
                    <TextField
                        isRequired
                        name="name"
                        type="text"
                    >
                        <Label>Name</Label>
                        <Input placeholder="Enter Your Name" />
                        <FieldError />
                    </TextField>
                    <TextField
                        isRequired
                        name="image"
                        type="url"
                    >
                        <Label>Image URL</Label>
                        <Input placeholder="Enter Your Image URL" />
                        <FieldError />
                    </TextField>
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
                        <Description>Must be at least 8 characters with 1 uppercase and 1 number</Description>
                        <FieldError />
                    </TextField>
                    <div className="flex gap-2">
                        <Button className={'w-full rounded-none'} type="submit">
                            <Check />
                            Submit
                        </Button>
                    </div>
                </Form>
                <div className='flex justify-center items-center'>
                    <span>OR</span>
                </div>
                <div>
                    <Button
                        onClick={handleGoogleBtn}
                        variant='outline' className={'rounded-none w-full flex items-center'}><FcGoogle /> Continue With Google</Button>
                </div>
            </Card>
        </div>
    );
};

export default SignUpPage;