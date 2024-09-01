"use client"
import { Alert } from '@mui/material';
import Snackbar from '@mui/material/Snackbar';
import { User } from "@prisma/client";
import axios from "axios";
import { useState } from 'react';
import { useForm } from 'react-hook-form';

export type SponsorForm = {
    brandName: string,
    brandDescription: string
}

export default function Sponsor({ user }: { user: User }) {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const [open, setOpen] = useState(false);

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    const onSponsorFormSubmit = async (data: SponsorForm) => {
        const brandName = data.brandName

        if (!brandName || brandName.length < 2) {
            console.log('Brand name must be at least 2 characters')
            return
        }

        data['userId'] = user.id

        try {
            const res = await axios.post('/api/createSponsorAccount', data)
            setOpen(true)
        } catch (error) {
            console.error('Error submitting form:', error.response?.data || error.message);
        }

    }

    return (

        <>

            <h1>
                {!user.email &&

                    <div className=" bg-gray-900 flex items-center justify-center">
                        <div className="bg-gray-800 p-8 w-full max-w-md">
                            <h2 className="text-2xl font-semibold text-white mb-6">Create a sponsor account</h2>
                            <form className="space-y-4" onSubmit={handleSubmit(onSponsorFormSubmit)}>
                                <div>
                                    <label htmlFor="brandName" className="block text-sm font-medium text-gray-300">
                                        Brand Name
                                    </label>
                                    <input
                                        id="brandName"
                                        type="text"
                                        {...register('brandName', {
                                            required: 'Brand name is required',
                                            minLength: {
                                                value: 2,
                                                message: 'Brand name must be at least 2 characters long'
                                            }
                                        })}
                                        placeholder="Enter your brand name"
                                        defaultValue={user.name}
                                        className="mt-1 block w-full px-3 py-2 border border-gray-600 rounded-md shadow-sm bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                    {errors.brandName && <p className="text-red-500 text-sm mt-1">{errors.brandName.message?.toString()}</p>}
                                </div>

                                <div>
                                    <label htmlFor="brandDescription" className="block text-sm font-medium text-gray-300">
                                        Brand Description
                                    </label>
                                    <textarea
                                        id="brandDescription"
                                        {...register('brandDescription')}
                                        placeholder="We specialize in creating..."
                                        rows={4}
                                        className="mt-1 block w-full px-3 py-2 border border-gray-600 rounded-md shadow-sm bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="w-full px-4 py-2 bg-blue-600 text-white font-semibold rounded-md shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                >
                                    Create
                                </button>
                                <h3 className="text-center text-orange-500">Get 200 credits for free on account creation!</h3>
                            </form>
                        </div>
                    </div>
                }
            </h1>

            <Snackbar open={open} onClose={handleClose} autoHideDuration={4000} anchorOrigin={{ vertical: 'top', horizontal: 'center' }}>
                <Alert
                    severity="success"
                    variant="filled"
                    sx={{ width: '100%' }}

                >
                    Account created successfully!
                </Alert>
            </Snackbar>

        </>
    )
}
